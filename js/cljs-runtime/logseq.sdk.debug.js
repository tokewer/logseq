goog.provide('logseq.sdk.debug');
logseq.sdk.debug.log_app_state = (function logseq$sdk$debug$log_app_state(path){
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(((typeof path === 'string')?cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path)):frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()));
});
goog.exportSymbol('logseq.sdk.debug.log_app_state', logseq.sdk.debug.log_app_state);
logseq.sdk.debug.current_repo_or_throw = (function logseq$sdk$debug$current_repo_or_throw(){
var temp__5823__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5823__auto__)){
var repo = temp__5823__auto__;
return repo;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No current repo",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("debug","no-current-repo","debug/no-current-repo",-869331928)], null));
}
});
logseq.sdk.debug.syncStopUpload = (function logseq$sdk$debug$syncStopUpload(){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-stop-upload","thread-api/db-sync-stop-upload",1929861734),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.sdk.debug.current_repo_or_throw()], 0));
});
goog.exportSymbol('logseq.sdk.debug.syncStopUpload', logseq.sdk.debug.syncStopUpload);
logseq.sdk.debug.syncResumeUpload = (function logseq$sdk$debug$syncResumeUpload(){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-resume-upload","thread-api/db-sync-resume-upload",-530777055),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.sdk.debug.current_repo_or_throw()], 0));
});
goog.exportSymbol('logseq.sdk.debug.syncResumeUpload', logseq.sdk.debug.syncResumeUpload);
logseq.sdk.debug.syncUploadStopped = (function logseq$sdk$debug$syncUploadStopped(){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-upload-stopped?","thread-api/db-sync-upload-stopped?",-1836342286),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.sdk.debug.current_repo_or_throw()], 0));
});
goog.exportSymbol('logseq.sdk.debug.syncUploadStopped', logseq.sdk.debug.syncUploadStopped);
logseq.sdk.debug.sync_stop_upload = (function logseq$sdk$debug$sync_stop_upload(){
return logseq.sdk.debug.syncStopUpload();
});
goog.exportSymbol('logseq.sdk.debug.sync_stop_upload', logseq.sdk.debug.sync_stop_upload);
logseq.sdk.debug.sync_resume_upload = (function logseq$sdk$debug$sync_resume_upload(){
return logseq.sdk.debug.syncResumeUpload();
});
goog.exportSymbol('logseq.sdk.debug.sync_resume_upload', logseq.sdk.debug.sync_resume_upload);
logseq.sdk.debug.sync_upload_stopped = (function logseq$sdk$debug$sync_upload_stopped(){
return logseq.sdk.debug.syncUploadStopped();
});
goog.exportSymbol('logseq.sdk.debug.sync_upload_stopped', logseq.sdk.debug.sync_upload_stopped);

//# sourceMappingURL=logseq.sdk.debug.js.map
