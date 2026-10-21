(ns ^:no-doc frontend.handler.export
  (:require ["/frontend/utils" :as utils]
            [clojure.string :as string]
            [electron.ipc :as ipc]
            [frontend.config :as config]
            [frontend.context.i18n :refer [t]]
            [frontend.extensions.zip :as zip]
            [frontend.fs :as fs]
            [frontend.handler.assets :as assets-handler]
            [frontend.handler.export.common :as export-common-handler]
            [frontend.handler.notification :as notification]
            [frontend.common.idb :as idb]
            [frontend.persist-db :as persist-db]
            [frontend.state :as state]
            [frontend.util :as util]
            [goog.dom :as gdom]
            [logseq.db :as ldb]
            [logseq.db.common.sqlite :as common-sqlite]
            [logseq.common.path :as path]
            [promesa.core :as p]))

(defn- publishing-export-options
  [repo]
  {:repo repo
   :app-state (assoc (select-keys (state/get-state)
                                  [:ui/theme
                                   :ui/sidebar-collapsed-blocks])
                     :git/current-repo repo)
   :repo-config (get-in (state/get-state) [:config repo])})

(defn download-repo-as-html!
  "download public pages as html"
  [repo]
  (p/let [{:keys [asset-filenames html]}
          (state/<invoke-db-worker :thread-api/build-publishing-html repo (publishing-export-options repo))]
    (when html
      (let [html-str (str "data:text/html;charset=UTF-8,"
                          (js/encodeURIComponent html))]
        (if (util/electron?)
          (js/window.apis.exportPublishAssets
           html
           (config/get-repo-dir repo)
           (clj->js asset-filenames)
           (util/mocked-open-dir-path))

          (when-let [anchor (gdom/getElement "download-as-html")]
            (.setAttribute anchor "href" html-str)
            (.setAttribute anchor "download" "index.html")
            (.click anchor)))))))

(defn- file-name [repo extension]
  (-> repo
      (string/replace #"^/+" "")
      (str "_" (quot (util/time-ms) 1000))
      (str "." (string/lower-case (name extension)))))

(defn- normalize-zip-entry
  [[filename data]]
  (try
    [filename (assets-handler/->uint8 data)]
    (catch :default e
      (throw (ex-info "unsupported zip entry payload"
                      (assoc (or (ex-data e) {})
                             :filename filename)
                      e)))))

(defn- <export-db-binary-for-zip
  [repo]
  (if (util/electron?)
    (state/<invoke-db-worker :thread-api/export-db-binary repo)
    (persist-db/<export-db repo {:return-data? true})))

(def ^:private graph-backup-folder-key :logseq.kv/graph-backup-folder)
(def ^:private web-graph-handle-prefix "web-graph/")

(defn- safe-btoa
  [s]
  (try
    (js/btoa (js/unescape (js/encodeURIComponent s)))
    (catch :default _ nil)))

(defn- web-graph-handle-key
  [repo]
  (when (string? repo)
    (str web-graph-handle-prefix (js/encodeURIComponent repo))))

(defn- backup-handle-key
  [repo folder-name]
  (str "handle/" (js/encodeURIComponent (str repo)) "/" (js/encodeURIComponent (str folder-name))))

(defn- legacy-backup-handle-key
  [repo folder-name]
  (str "handle/" (js/encodeURIComponent repo) "/" folder-name))

(defn- <get-stored-backup-handle
  [repo folder-name]
  (p/let [key1 (backup-handle-key repo folder-name)
          h1 (when key1 (idb/get-item key1))]
    (if h1
      h1
      (let [key2 (legacy-backup-handle-key repo folder-name)]
        (if-let [h2 (when (and key2 (not= key1 key2)) (idb/get-item key2))]
          h2
          (let [key3 (when-let [b (safe-btoa repo)] (str "handle/" b "/" folder-name))]
            (if-let [h3 (when (and key3 (not= key1 key3) (not= key2 key3)) (idb/get-item key3))]
              h3
              (idb/get-item (web-graph-handle-key repo)))))))))

(defonce ^:private *server-storage-state (atom nil))

(defn <get-server-storage-config
  "Check if local storage server (/api/storage/config) is active and return config map."
  []
  (-> (js/fetch "/api/storage/config" #js {:method "GET"})
      (p/then (fn [res]
                (if (.-ok res)
                  (.json res)
                  nil)))
      (p/then (fn [json]
                (if (and json (.-ok json))
                  (let [cfg (js->clj json :keywordize-keys true)]
                    (reset! *server-storage-state cfg)
                    cfg)
                  (do
                    (reset! *server-storage-state false)
                    nil))))
      (p/catch (fn [_]
                 (reset! *server-storage-state false)
                 nil))))

(defn <save-db-to-server!
  "Persist SQLite database directly to local physical disk folder via local server API."
  [repo data]
  (-> (js/fetch "/api/storage/save"
                #js {:method "POST"
                     :headers #js {"Content-Type" "application/octet-stream"
                                   "X-Logseq-Repo" (js/encodeURIComponent (str repo))}
                     :body data})
      (p/then (fn [res]
                (if (.-ok res)
                  (.json res)
                  (p/rejected (ex-info "Server save failed" {:status (.-status res)})))))
      (p/then (fn [^js json]
                (let [path (.-saved_path json)]
                  (js/console.log (str "[ServerStorage] Successfully saved " repo " to disk: " path))
                  (js->clj json :keywordize-keys true))))))

(defn web-graph-folder-supported?
  []
  (fn? (.-showDirectoryPicker js/window)))

(defn <get-web-graph-folder-name
  [repo]
  (when (string? repo)
    (p/let [handle (or (idb/get-item (web-graph-handle-key repo))
                       (when-let [legacy-key (try
                                               (str web-graph-handle-prefix (js/btoa repo))
                                               (catch :default _ nil))]
                         (idb/get-item legacy-key)))]
      (some-> handle .-name))))

(defn choose-web-graph-folder!
  [repo]
  (when-not (string? repo)
    (throw (ex-info "A graph must be selected before choosing a Web Graph folder"
                    {:repo repo})))
  (when-not (web-graph-folder-supported?)
    (throw (ex-info "This browser does not support the File System Access API"
                    {:feature :web-graph-folder})))
  (p/let [handle (.showDirectoryPicker js/window #js {:mode "readwrite"})
          _ (utils/verifyPermission handle true)
          folder-name (.-name handle)
          _ (idb/set-item! (web-graph-handle-key repo) handle)
          _ (idb/set-item! (backup-handle-key repo folder-name) handle)
          _ (state/<invoke-db-worker :thread-api/transact
                                     repo
                                     [(ldb/kv graph-backup-folder-key folder-name)]
                                     nil
                                     nil)]
    folder-name))

(defn- <get-key-value
  [repo key]
  (state/<invoke-db-worker :thread-api/get-key-value repo key))

(defn- <export-zipfile-to-desktop!
  [repo ^js zipfile]
  (let [repo-name (common-sqlite/sanitize-db-name repo)
        export-dir (path/path-join (config/get-repo-dir repo) "export")
        export-path (path/path-join export-dir (file-name repo-name "zip"))]
    (p/let [content (.arrayBuffer zipfile)
            _ (fs/mkdir-if-not-exists export-dir)
            _ (js/window.apis.writeFileBytes export-path content)]
      export-path)))

(defn db-based-export-repo-as-zip!
  [repo]
  (state/pub-event! [:dialog/export-zip (t :export/preparing-zip)])
  (-> (p/let [db-data (<export-db-binary-for-zip repo)
              filename "db.sqlite"
              repo-name (common-sqlite/sanitize-db-name repo)
              _ (state/set-state! :graph/exporting-state {:total 100
                                                          :current-idx 20
                                                          :current-page (t :export/collecting-assets)
                                                          :label (t :export/exporting)})
              assets (assets-handler/<get-all-assets)
              files (map normalize-zip-entry
                         (cons [filename db-data] assets))
              _ (state/set-state! :graph/exporting-state {:total 100
                                                          :current-idx 40
                                                          :current-page (t :export/creating-zip)
                                                          :label (t :export/exporting)})
              zipfile (zip/make-zip repo-name files repo
                                    {:compression "STORE"
                                     :progress-fn (fn [percent]
                                                    (let [scaled (+ 40 (* 0.6 percent))]
                                                      (state/set-state! :graph/exporting-state
                                                                        {:total 100
                                                                         :current-idx (js/Math.round scaled)
                                                                         :current-page (t :export/creating-zip)
                                                                         :label (t :export/exporting)})))})]
        (state/set-state! :graph/exporting-state {:total 100
                                                  :current-idx 100
                                                  :current-page (t :export/finalizing)
                                                  :label (t :export/exporting)})
        (if (util/electron?)
          (p/let [export-path (<export-zipfile-to-desktop! repo zipfile)]
            (notification/show! (t :export/zip-exported export-path) :success false))
          (when-let [anchor (gdom/getElement "download-as-zip")]
            (.setAttribute anchor "href" (js/window.URL.createObjectURL zipfile))
            (.setAttribute anchor "download" (.-name zipfile))
            (.click anchor))))
      (p/catch (fn [error]
                 (js/console.error error)
                 (notification/show! (t :export/zip-error) :error)))
      (p/finally (fn []
                   (state/pub-event! [:dialog/close-export-zip])))))

(defn export-repo-as-zip!
  [repo]
  (db-based-export-repo-as-zip! repo))

(defn export-repo-as-debug-transit!
  [repo]
  (p/let [result (export-common-handler/<get-debug-datoms repo)
          filename (file-name (str repo "-debug-datoms") :transit)
          data-str (str "data:text/transit;charset=utf-8,"
                        (js/encodeURIComponent (ldb/write-transit-str result)))]
    (when-let [anchor (gdom/getElement "download-as-transit-debug")]
      (.setAttribute anchor "href" data-str)
      (.setAttribute anchor "download" filename)
      (.click anchor))))

(defn export-repo-as-sqlite-db!
  [repo]
  (let [filename (file-name repo "sqlite")]
    (->
     (if (util/electron?)
       (p/let [result (ipc/ipc :db-export-as repo filename)
               path (or (:path result) (some-> result .-path))]
         (when path
           (notification/show! (t :export/sqlite-db-exported path) :success false)))
       (p/let [data (persist-db/<export-db repo {:return-data? true})]
         (if (fn? (.-showSaveFilePicker js/window))
           (p/let [handle (.showSaveFilePicker
                           js/window
                           #js {:suggestedName filename
                                :types #js [#js {:description "SQLite"
                                                 :accept #js {"application/vnd.sqlite3" #js [".sqlite"]}}]})
                   writable (.createWritable handle)
                   _ (.write writable data)]
             (.close writable))
           (let [url (js/URL.createObjectURL (js/Blob. #js [data]))]
             (when-let [anchor (gdom/getElement "download-as-sqlite-db")]
               (.setAttribute anchor "href" url)
               (.setAttribute anchor "download" filename)
               (.click anchor))))))
     (p/catch (fn [error]
                (when-not (= "AbortError" (.-name error))
                  (js/console.error error)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;
;; Export to roam json ;;
;;;;;;;;;;;;;;;;;;;;;;;;;

;; https://roamresearch.com/#/app/help/page/Nxz8u0vXU
;; export to roam json according to above spec
(comment
  (defn- <roam-data [repo]
    (p/let [pages (export-common-handler/<get-all-pages repo)]
      (let [non-empty-pages (remove #(empty? (:block/children %)) pages)]
        (roam-export/traverse
         [:page/title
          :block/string
          :block/uid
          :block/children]
         non-empty-pages))))

  (defn export-repo-as-roam-json!
    [repo]
    (p/let [data (<roam-data repo)
            json-str (-> data
                         bean/->js
                         js/JSON.stringify)
            data-str (str "data:text/json;charset=utf-8,"
                          (js/encodeURIComponent json-str))]
      (when-let [anchor (gdom/getElement "download-as-roam-json")]
        (.setAttribute anchor "href" data-str)
        (.setAttribute anchor "download" (file-name (str repo "_roam") :json))
        (.click anchor)))))

(defn- same-binary-content?
  [^js buf1 ^js buf2]
  (if (or (nil? buf1) (nil? buf2))
    false
    (let [u1 (if (instance? js/Uint8Array buf1) buf1 (js/Uint8Array. buf1))
          u2 (if (instance? js/Uint8Array buf2) buf2 (js/Uint8Array. buf2))
          len1 (.-byteLength u1)
          len2 (.-byteLength u2)]
      (if (not= len1 len2)
        false
        (let [d1 (js/DataView. (.-buffer u1) (.-byteOffset u1) len1)
              d2 (js/DataView. (.-buffer u2) (.-byteOffset u2) len2)
              words (quot len1 4)
              rem (rem len1 4)]
          (loop [i 0]
            (if (< i words)
              (let [offset (* i 4)]
                (if (not= (.getUint32 d1 offset true) (.getUint32 d2 offset true))
                  false
                  (recur (inc i))))
              (loop [j (- len1 rem)]
                (if (< j len1)
                  (if (not= (aget u1 j) (aget u2 j))
                    false
                    (recur (inc j)))
                  true)))))))))

(defn- truncate-old-versioned-files!
  "reserve the latest 12 version files"
  [^js backups-handle]
  (-> (p/let [files (utils/getFiles backups-handle false)
              old-files (drop 12 (reverse (sort-by (fn [^js file] (.-name file)) files)))]
        (p/all
         (map (fn [^js file]
                (p/catch
                 (.removeEntry backups-handle (.-name file))
                 (fn [err]
                   (js/console.warn "Failed to remove old backup file:" (.-name file) err))))
              old-files)))
      (p/catch (fn [err]
                 (js/console.warn "Failed to truncate old versioned files:" err)))))

(defn choose-backup-folder
  [repo]
  (p/let [result (utils/openDirectory #js {:mode "readwrite"})
          handle (first result)
          folder-name (.-name handle)
          _ (idb/set-item! (web-graph-handle-key repo) handle)
          _ (idb/set-item! (backup-handle-key repo folder-name) handle)
          _ (state/<invoke-db-worker :thread-api/transact
                                     repo
                                     [(ldb/kv graph-backup-folder-key folder-name)]
                                     nil
                                     nil)]
    (js/console.dir handle)
    [folder-name handle]))

(defn- <resolve-backup-handle
  "Resolve a writable directory handle for `backup-folder`.
   Re-prompts the user to pick the folder again when the stored handle is
   missing or its permission has expired (e.g. after the page origin
   changed or the browser revoked access)."
  ([repo backup-folder]
   (<resolve-backup-handle repo backup-folder {:interactive? true}))
  ([repo backup-folder {:keys [interactive?] :or {interactive? true}}]
   (p/let [handle (<get-stored-backup-handle repo backup-folder)]
     (if handle
       (if interactive?
         (-> (utils/verifyPermission handle true)
             (p/then (fn [_] [backup-folder handle]))
             (p/catch (fn [e]
                        (if (= "AbortError" (.-name e))
                          nil
                          (do
                            (js/console.warn "Backup folder permission expired, requesting re-selection:" e)
                            (notification/show! (t :export.backup/permission-expired) :warning)
                            (choose-backup-folder repo))))))
         ;; Non-interactive (background timer): query permission without user prompt to avoid SecurityError
         (-> (.queryPermission handle #js {:mode "readwrite"})
             (p/then (fn [perm]
                       (if (= perm "granted")
                         [backup-folder handle]
                         (do
                           (js/console.warn "Backup folder permission not granted in background:" perm)
                           nil))))
             (p/catch (fn [e]
                        (js/console.warn "Failed to query permission in background:" e)
                        nil))))
       (if interactive?
         (p/do!
          (js/console.warn "Backup folder handle not found in IndexedDB")
          (notification/show! (t :export.backup/handle-not-found) :warning)
          (choose-backup-folder repo))
         (do
           (js/console.warn "Backup folder handle not found in background")
           nil))))))

(defn- web-backup-db-graph
  ([repo]
   (web-backup-db-graph repo {:interactive? true}))
  ([repo {:keys [interactive?] :or {interactive? true}}]
   (when (and repo (= repo (state/get-current-repo)))
     (->
      (p/let [server-cfg (<get-server-storage-config)
              backup-folder (<get-key-value repo graph-backup-folder-key)
              folder-name (or backup-folder
                              (<get-web-graph-folder-name repo))
              data (persist-db/<export-db repo {:return-data? true})]
        (p/let [server-save-res (when server-cfg
                                  (p/catch (<save-db-to-server! repo data)
                                           (fn [err]
                                             (js/console.warn "[ServerStorage] Server save failed:" err)
                                             nil)))
                fs-save-res (when folder-name
                              (p/catch
                               (p/let [[_ handle] (<resolve-backup-handle repo folder-name {:interactive? interactive?})]
                                 (if handle
                                   (let [repo-name (common-sqlite/sanitize-db-name repo)]
                                     (p/let [graph-dir-handle (.getDirectoryHandle handle repo-name #js {:create true})
                                             backups-handle (.getDirectoryHandle graph-dir-handle "backups" #js {:create true})
                                             backup-handle ^js (.getFileHandle graph-dir-handle "db.sqlite" #js {:create true})
                                             file ^js (.getFile backup-handle)
                                             file-size (.-size file)
                                             data-len (or (.-byteLength data) (.-length data))
                                             unchanged? (when (and (> file-size 0) (= file-size data-len))
                                                          (p/let [file-buf (.arrayBuffer file)]
                                                            (same-binary-content? file-buf data)))]
                                       (if unchanged?
                                         :graph-not-changed
                                         (p/do!
                                          (when (> file-size 0)
                                            (p/let [archive-name (str (util/time-ms) ".db.sqlite")
                                                    archive-file-handle (.getFileHandle backups-handle archive-name #js {:create true})
                                                    archive-writable (.createWritable archive-file-handle)]
                                              (p/do!
                                               (.write archive-writable file)
                                               (.close archive-writable))))
                                          (truncate-old-versioned-files! backups-handle)
                                          (utils/writeFile backup-handle data)
                                          (println "Successfully created a backup for" repo-name "at" (str (js/Date.)) ".")
                                          true))))
                                   false))
                               (fn [err]
                                 (js/console.warn "[FileSystemHandle] Database backup error:" err)
                                 false)))]
          (cond
            (or server-save-res (true? fs-save-res))
            (do
              (println "Graph successfully persisted to local physical disk.")
              true)

            (= fs-save-res :graph-not-changed)
            :graph-not-changed

            :else
            (if (and (nil? server-cfg) (nil? folder-name))
              (if interactive?
                (do
                  (notification/show! (t :export.backup/set-folder-first) :warning)
                  (choose-web-graph-folder! repo))
                false)
              (do
                (when interactive?
                  (notification/show! (t :export/db-backup-error) :error))
                false)))))
      (p/catch (fn [error]
                 (when-not (= "AbortError" (.-name error))
                   (js/console.error "Backup failed:" error))
                 false))))))

(defn backup-db-graph
  ([repo]
   (backup-db-graph repo {:interactive? true}))
  ([repo opts]
   (when util/web-platform?
     (web-backup-db-graph repo opts))))

(defonce *backup-interval (atom nil))
(defn cancel-db-backup!
  []
  (when-let [i @*backup-interval]
    (js/clearInterval i)
    (reset! *backup-interval nil)))

(defn auto-db-backup!
  [repo]
  (when (and
         util/web-platform?
         (not (util/capacitor?)))
    (p/let [backup-folder (<get-key-value repo graph-backup-folder-key)]
      (when backup-folder
        (cancel-db-backup!)

        ;; run backup every hour
        (let [interval (js/setInterval #(backup-db-graph repo {:interactive? false})
                                       (* 1 60 60 1000))]
          (reset! *backup-interval interval))))))
