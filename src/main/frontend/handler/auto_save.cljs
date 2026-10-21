(ns frontend.handler.auto-save
  "Local file persistence scheduler inspired by mind-map architecture.
   Provides debounce buffer, single-channel serialized write queue,
   dirty-in-flight version tracking, and explicit error status handling."
  (:require [frontend.handler.export :as export]
            [frontend.handler.notification :as notification]
            [frontend.state :as state]
            [frontend.util :as util]
            [frontend.context.i18n :refer [t]]
            [lambdaisland.glogi :as log]
            [promesa.core :as p]))

(def ^:private debounce-ms 1000)

;; State management per repo:
;; {repo {:current-version 0
;;        :saved-version 0
;;        :timer nil
;;        :status :idle   ;; :idle, :saving, :dirty, :error
;;        :last-error nil
;;        :write-chain Promise}}
(defonce ^:private *persistence-state (atom {}))

(defn- get-repo-state [repo]
  (get @*persistence-state repo {:current-version 0
                                 :saved-version 0
                                 :timer nil
                                 :status :idle
                                 :last-error nil
                                 :write-chain (p/resolved nil)}))

(defn get-status
  "Get persistence status for current repo: :idle, :saving, :dirty, or :error"
  ([]
   (when-let [repo (state/get-current-repo)]
     (get-status repo)))
  ([repo]
   (:status (get-repo-state repo))))

(defn- now-iso []
  (.toISOString (js/Date.)))

(declare flush-save!)

(defn- do-save-step!
  "Executes a single save step for `repo` with target version snapshot `target-version`."
  [repo target-version]
  (swap! *persistence-state update repo
         (fn [st]
           (assoc (or st {}) :status :saving)))
  (-> (export/backup-db-graph repo {:interactive? false})
      (p/then
       (fn [result]
         (let [st (get-repo-state repo)
               curr (:current-version st)]
           (if (= target-version curr)
             ;; Current version fully synced to disk
             (do
               (let [d (js/Date.)
                     pad (fn [n] (if (< n 10) (str "0" n) (str n)))
                     time-str (str (pad (.getHours d)) ":" (pad (.getMinutes d)) ":" (pad (.getSeconds d)))]
                 (swap! *persistence-state update repo
                        (fn [s]
                          (assoc s
                                 :saved-version target-version
                                 :status :idle
                                 :last-saved-time time-str
                                 :last-error nil))))
               (when (not= result :graph-not-changed)
                 (js/console.log (str "[" (now-iso) "] [AutoSave] Successfully persisted version " target-version " for " repo)))
               result)
             ;; Content was modified while save was in-flight (Dirty In Flight)
             (do
               (swap! *persistence-state update repo
                      (fn [s]
                        (assoc s
                               :saved-version target-version
                               :status :dirty)))
               (js/console.log (str "[" (now-iso) "] [AutoSave] Dirty in flight detected (saved " target-version ", current " curr "), triggering catch-up save..."))
               ;; Immediately trigger next flush in write chain
               (flush-save! repo))))))
      (p/catch
       (fn [error]
         (let [err-name (or (some-> error .-name) (some-> error .-message) "UnknownError")]
           (swap! *persistence-state update repo
                  (fn [s]
                    (assoc s
                           :status :error
                           :last-error error)))
           (js/console.error (str "[" (now-iso) "] [AutoSave] Failed to persist graph " repo ":") error)
           (when (= err-name "NotAllowedError")
             (notification/show! (t :export.backup/permission-expired) :warning))
           (p/rejected error))))))

(defn flush-save!
  "Immediately flushes pending modifications into the serialized write queue,
   bypassing any running debounce timer."
  ([]
   (when-let [repo (state/get-current-repo)]
     (flush-save! repo)))
  ([repo]
   (when (and util/web-platform? repo)
     ;; Clear any pending debounce timer
     (when-let [timer (:timer (get-repo-state repo))]
       (js/clearTimeout timer)
       (swap! *persistence-state update repo assoc :timer nil))

     (let [curr-st (get-repo-state repo)
           curr-ver (:current-version curr-st)
           saved-ver (:saved-version curr-st)
           prev-chain (or (:write-chain curr-st) (p/resolved nil))]
       (if (> curr-ver saved-ver)
         (let [next-chain (p/then (p/catch prev-chain (constantly nil))
                                  (fn [_]
                                    (let [target-ver (:current-version (get-repo-state repo))]
                                      (if (> target-ver (:saved-version (get-repo-state repo)))
                                        (do-save-step! repo target-ver)
                                        (p/resolved :already-saved)))))]
           (swap! *persistence-state update repo assoc :write-chain next-chain)
           next-chain)
         ;; Already up to date
         (p/resolved :unchanged))))))

(defn schedule-auto-save!
  "Marks current repo dirty, increments version, and schedules debounce flush."
  ([]
   (when-let [repo (state/get-current-repo)]
     (schedule-auto-save! repo)))
  ([repo]
   (when (and util/web-platform? repo)
     ;; 1. Increment current version and mark status dirty
     (swap! *persistence-state update repo
            (fn [st]
              (let [curr (or (:current-version st) 0)]
                (assoc (or st {})
                       :current-version (inc curr)
                       :status :dirty))))

     ;; 2. Clear old debounce timer if present
     (when-let [old-timer (:timer (get-repo-state repo))]
       (js/clearTimeout old-timer))

     ;; 3. Set new debounce timer
     (let [timer (js/setTimeout
                  (fn []
                    (swap! *persistence-state update repo assoc :timer nil)
                    (flush-save! repo))
                  debounce-ms)]
       (swap! *persistence-state update repo assoc :timer timer)))))

(defn cancel-auto-save!
  "Cancels running timers and clears persistence state for repo."
  ([]
   (when-let [repo (state/get-current-repo)]
     (cancel-auto-save! repo)))
  ([repo]
   (when-let [timer (:timer (get-repo-state repo))]
     (js/clearTimeout timer))
   (swap! *persistence-state dissoc repo)))

;; Expose to window for testing, monitoring and diagnostics
(when (exists? js/window)
  (set! (.-logseqAutoSave js/window)
        #js {:schedule (fn [repo] (schedule-auto-save! (or repo (state/get-current-repo))))
             :flush (fn [repo] (flush-save! (or repo (state/get-current-repo))))
             :getStatus (fn [repo] (name (get-status (or repo (state/get-current-repo)))))
             :getCurrentRepo (fn [] (state/get-current-repo))
             :getState (fn [repo]
                         (if repo
                           (clj->js (get-repo-state repo))
                           (clj->js @*persistence-state)))}))


