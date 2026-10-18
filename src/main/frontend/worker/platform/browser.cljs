(ns frontend.worker.platform.browser
  "Browser platform adapter for db-worker."
  (:require [frontend.common.idb :as idb]
            ["@sqlite.org/sqlite-wasm" :default sqlite3InitModule]
            ["comlink" :as Comlink]
            [clojure.string :as string]
            [frontend.common.file.opfs :as opfs]
            [frontend.worker-common.util :as worker-util]
            [lambdaisland.glogi :as log]
            [logseq.common.config :as common-config]
            [logseq.common.path :as path]
            [promesa.core :as p]))

(defn- iter->vec
  [iter']
  (when iter'
    (p/loop [acc []]
      (p/let [elem (.next iter')]
        (if (.-done elem)
          acc
          (p/recur (conj acc (.-value elem))))))))

(defn- list-graphs
  []
  (let [dir? #(= (.-kind %) "directory")
        db-dir-prefix ".logseq-pool-"]
    (p/let [^js root (.getDirectory js/navigator.storage)
            values-iter (when (dir? root) (.values root))
            values (when values-iter (iter->vec values-iter))
            current-dir-dirs (filter dir? values)
            db-dirs (filter (fn [file]
                              (string/starts-with? (.-name file) db-dir-prefix))
                            current-dir-dirs)
            graph-names (map (fn [dir]
                               (-> (.-name dir)
                                   (string/replace-first ".logseq-pool-" "")
                                   ;; TODO: DRY
                                   (string/replace "+3A+" ":")
                                   (string/replace "++" "/")))
                             db-dirs)]
      (log/info :db-dirs (map #(.-name %) db-dirs) :all-dirs (map #(.-name %) current-dir-dirs))
      (vec graph-names))))

(defn- db-exists?
  [graph]
  (->
   (p/let [^js root (.getDirectory js/navigator.storage)
           _dir-handle (.getDirectoryHandle root (str "." (worker-util/get-pool-name graph)))]
     true)
    (p/catch
    (fn [_e]                         ; not found
      false))))

(defn- kv-get
  [k]
  (idb/get-item k))

(defn- kv-set!
  [k value]
  (idb/set-item! k value))

(defn- save-secret-text!
  [key text]
  (kv-set! key text))

(defn- read-secret-text
  [key]
  (kv-get key))

(defn- delete-secret-text!
  [key]
  (kv-set! key nil))

(defn- install-opfs-pool
  [sqlite pool-name]
  (.installOpfsSAHPoolVfs ^js sqlite #js {:name pool-name
                                          :initialCapacity 20}))

(defn- export-file
  [pool path]
  (.exportFile ^js pool path))

(defn- import-db
  [pool path data]
  (.importDb ^js pool path data))

(defn- remove-vfs!
  [pool]
  (when pool
    (.removeVfs ^js pool)))

(defn- read-text!
  [path]
  (opfs/<read-text! path))

(defn- write-text!
  [path text]
  (opfs/<write-text! path text))

(def ^:private web-graph-handle-prefix "web-graph/")

(defn- graph-handle-key
  [repo]
  (str web-graph-handle-prefix (js/encodeURIComponent repo)))

(defn- legacy-graph-handle-key
  [repo]
  (try
    (str web-graph-handle-prefix (js/btoa repo))
    (catch :default _ nil)))

(defn- graph-relative-path
  [path]
  (let [parts (string/split path #"/" 2)]
    (if (= 2 (count parts))
      (second parts)
      path)))

(defn- <graph-file-handle
  [repo path create?]
  (p/let [root (or (idb/get-item (graph-handle-key repo))
                   (when-let [legacy-key (legacy-graph-handle-key repo)]
                     (idb/get-item legacy-key)))
          _ (when-not root
              (throw (ex-info "Web Graph folder is not selected" {:repo repo})))
          segments (-> (graph-relative-path path)
                       (string/split #"/")
                       (remove string/blank?))
          file-name (last segments)
          directories (butlast segments)
          directory (p/loop [handle root
                             remaining directories]
                      (if-let [segment (first remaining)]
                        (p/let [next-handle (.getDirectoryHandle handle segment #js {:create create?})]
                          (p/recur next-handle (rest remaining)))
                        handle))]
    (.getFileHandle directory file-name #js {:create create?})))

(defn- web-graph-read-text!
  [path]
  (let [repo (first (string/split path #"/" 2))]
    (p/let [file-handle (<graph-file-handle repo path false)
            file (.getFile file-handle)
            text (.text file)]
      text)))

(defn- web-graph-write-text!
  [path text]
  (let [repo (first (string/split path #"/" 2))]
    (p/let [file-handle (<graph-file-handle repo path true)
            writable (.createWritable file-handle)
            _ (.write writable text)]
      (.close writable))))

(defn- web-graph-delete-file!
  [path]
  (let [repo (first (string/split path #"/" 2))
        relative-path (graph-relative-path path)]
    (p/let [segments (string/split relative-path #"/")
            file-name (last segments)
            directories (butlast segments)
            root (or (idb/get-item (graph-handle-key repo))
                     (when-let [legacy-key (legacy-graph-handle-key repo)]
                       (idb/get-item legacy-key)))
            _ (when-not root
                (throw (ex-info "Web Graph folder is not selected" {:repo repo})))
            directory (p/loop [handle root
                               remaining directories]
                        (if-let [segment (first remaining)]
                          (p/let [next-handle (.getDirectoryHandle handle segment)]
                            (p/recur next-handle (rest remaining)))
                          handle))]
      (.removeEntry directory file-name))))

(defn- browser-pfs
  []
  (or (some-> js/globalThis .-window .-pfs)
      (some-> js/globalThis .-pfs)
      (throw (ex-info "browser pfs is not available" {}))))

(defn- graph-assets-dir
  [repo]
  (when-let [graph-name (some-> repo common-config/strip-leading-db-version-prefix)]
    (path/url-to-path
     (path/path-join (str "memory:///" graph-name)
                     common-config/local-assets-dir))))

(defn- ensure-pfs-dir!
  [^js pfs dir]
  (cond
    (or (nil? dir) (= "" dir) (= "/" dir) (= "." dir))
    (p/resolved nil)

    :else
    (-> (.stat pfs dir)
        (p/then (constantly nil))
        (p/catch
         (fn [_]
           (p/do!
            (ensure-pfs-dir! pfs (path/parent dir))
            (.mkdir pfs dir)))))))

(defn- asset-path
  [repo file-name]
  (if-let [assets-dir (graph-assets-dir repo)]
    (path/path-join assets-dir file-name)
    (throw (ex-info "missing repo for browser asset path"
                    {:repo repo
                     :file-name file-name}))))

(defn- asset-read-bytes!
  [repo file-name]
  (when-let [^js bfs (browser-pfs)]
    (.readFile bfs (asset-path repo file-name))))

(defn- asset-write-bytes!
  [repo file-name payload]
  (let [^js pfs (browser-pfs)
        file-path (asset-path repo file-name)]
    (p/do!
     (ensure-pfs-dir! pfs (path/parent file-path))
     (.writeFile pfs file-path payload))))

(defn- asset-stat
  [repo file-name]
  (let [^js pfs (browser-pfs)]
    (-> (.stat pfs (asset-path repo file-name))
        (p/then (fn [^js stat]
                  {:size (.-size stat)
                   :type (.-type stat)}))
        (p/catch (constantly nil)))))

(defn- asset-delete!
  [repo file-name]
  (let [^js pfs (browser-pfs)]
    (-> (.unlink pfs (asset-path repo file-name))
        (p/catch (constantly nil)))))

(defn- unsupported-mirror-storage!
  [& _args]
  (throw (ex-info "Markdown mirror storage is not supported in browser workers"
                  {:platform :browser
                   :feature :markdown-mirror})))

(defn- websocket-connect
  [url]
  (js/WebSocket. url))

(defn- init-sqlite!
  []
  (sqlite3InitModule (clj->js {:print #(log/info :init-sqlite-module! %)
                               :printErr #(log/error :init-sqlite-module! %)})))

(defn- open-sqlite-db
  [{:keys [sqlite pool path mode]}]
  (if pool
    (new (.-OpfsSAHPoolDb ^js pool) path)
    (let [^js DB (.-DB ^js (.-oo1 ^js sqlite))]
      (new DB path (or mode "c")))))

(defn- search-param-true?
  [k]
  (let [value (.get (js/URLSearchParams. (.-search js/location)) k)]
    (or (= value "true")
        (= value "1"))))

(defn- owner-source
  []
  (cond
    (search-param-true? "capacitor") :capacitor
    (search-param-true? "electron") :electron
    :else :browser))

(defn browser-platform
  []
  {:env {:publishing? (string/includes? (.. js/location -href) "publishing=true")
         :runtime :browser
         :owner-source (owner-source)}
   :storage {:install-opfs-pool install-opfs-pool
             :list-graphs list-graphs
             :db-exists? db-exists?
             :resolve-db-path (fn [_repo _pool path] path)
             :export-file export-file
             :import-db import-db
             :remove-vfs! remove-vfs!
             :read-text! read-text!
             :write-text! write-text!
             :write-text-atomic! web-graph-write-text!
             :delete-file! web-graph-delete-file!
             :mirror-read-text! web-graph-read-text!
             :asset-read-bytes! asset-read-bytes!
             :asset-write-bytes! asset-write-bytes!
             :asset-stat asset-stat
             :asset-delete! asset-delete!
             :transfer (fn [data transferables]
                         (Comlink/transfer data transferables))}
   :kv {:get kv-get
        :set! kv-set!}
   :broadcast {:post-message! worker-util/post-message}
   :websocket {:connect websocket-connect}
   :sqlite {:init! init-sqlite!
            :open-db open-sqlite-db
            :close-db (fn [db] (.close db))
            :exec (fn [db sql-or-opts] (.exec db sql-or-opts))
            :transaction (fn [db f] (.transaction db f))}
   :crypto {:save-secret-text! save-secret-text!
            :read-secret-text read-secret-text
            :delete-secret-text! delete-secret-text!}
   :timers {:set-interval! (fn [f ms] (js/setInterval f ms))}})
