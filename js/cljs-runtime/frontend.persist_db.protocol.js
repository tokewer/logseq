goog.provide('frontend.persist_db.protocol');

/**
 * @interface
 */
frontend.persist_db.protocol.PersistentDB = function(){};

var frontend$persist_db$protocol$PersistentDB$_LT_list_db$dyn_66651 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (frontend.persist_db.protocol._LT_list_db[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (frontend.persist_db.protocol._LT_list_db["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PersistentDB.<list-db",this$);
}
}
});
/**
 * List all databases
 */
frontend.persist_db.protocol._LT_list_db = (function frontend$persist_db$protocol$_LT_list_db(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$persist_db$protocol$PersistentDB$_LT_list_db$arity$1 == null)))))){
return this$.frontend$persist_db$protocol$PersistentDB$_LT_list_db$arity$1(this$);
} else {
return frontend$persist_db$protocol$PersistentDB$_LT_list_db$dyn_66651(this$);
}
});

var frontend$persist_db$protocol$PersistentDB$_LT_new$dyn_66653 = (function (this$,repo,opts){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (frontend.persist_db.protocol._LT_new[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,repo,opts) : m__5499__auto__.call(null,this$,repo,opts));
} else {
var m__5497__auto__ = (frontend.persist_db.protocol._LT_new["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,repo,opts) : m__5497__auto__.call(null,this$,repo,opts));
} else {
throw cljs.core.missing_protocol("PersistentDB.<new",this$);
}
}
});
/**
 * Create or open a graph
 */
frontend.persist_db.protocol._LT_new = (function frontend$persist_db$protocol$_LT_new(this$,repo,opts){
if((((!((this$ == null)))) && ((!((this$.frontend$persist_db$protocol$PersistentDB$_LT_new$arity$3 == null)))))){
return this$.frontend$persist_db$protocol$PersistentDB$_LT_new$arity$3(this$,repo,opts);
} else {
return frontend$persist_db$protocol$PersistentDB$_LT_new$dyn_66653(this$,repo,opts);
}
});

var frontend$persist_db$protocol$PersistentDB$_LT_unsafe_delete$dyn_66654 = (function (this$,repo){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (frontend.persist_db.protocol._LT_unsafe_delete[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,repo) : m__5499__auto__.call(null,this$,repo));
} else {
var m__5497__auto__ = (frontend.persist_db.protocol._LT_unsafe_delete["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,repo) : m__5497__auto__.call(null,this$,repo));
} else {
throw cljs.core.missing_protocol("PersistentDB.<unsafe-delete",this$);
}
}
});
/**
 * Delete graph and its vfs
 */
frontend.persist_db.protocol._LT_unsafe_delete = (function frontend$persist_db$protocol$_LT_unsafe_delete(this$,repo){
if((((!((this$ == null)))) && ((!((this$.frontend$persist_db$protocol$PersistentDB$_LT_unsafe_delete$arity$2 == null)))))){
return this$.frontend$persist_db$protocol$PersistentDB$_LT_unsafe_delete$arity$2(this$,repo);
} else {
return frontend$persist_db$protocol$PersistentDB$_LT_unsafe_delete$dyn_66654(this$,repo);
}
});

var frontend$persist_db$protocol$PersistentDB$_LT_release_access_handles$dyn_66655 = (function (this$,repo){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (frontend.persist_db.protocol._LT_release_access_handles[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,repo) : m__5499__auto__.call(null,this$,repo));
} else {
var m__5497__auto__ = (frontend.persist_db.protocol._LT_release_access_handles["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,repo) : m__5497__auto__.call(null,this$,repo));
} else {
throw cljs.core.missing_protocol("PersistentDB.<release-access-handles",this$);
}
}
});
/**
 * Release access file handles
 */
frontend.persist_db.protocol._LT_release_access_handles = (function frontend$persist_db$protocol$_LT_release_access_handles(this$,repo){
if((((!((this$ == null)))) && ((!((this$.frontend$persist_db$protocol$PersistentDB$_LT_release_access_handles$arity$2 == null)))))){
return this$.frontend$persist_db$protocol$PersistentDB$_LT_release_access_handles$arity$2(this$,repo);
} else {
return frontend$persist_db$protocol$PersistentDB$_LT_release_access_handles$dyn_66655(this$,repo);
}
});

var frontend$persist_db$protocol$PersistentDB$_LT_open_and_fetch_schema$dyn_66657 = (function (this$,repo,opts){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (frontend.persist_db.protocol._LT_open_and_fetch_schema[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,repo,opts) : m__5499__auto__.call(null,this$,repo,opts));
} else {
var m__5497__auto__ = (frontend.persist_db.protocol._LT_open_and_fetch_schema["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,repo,opts) : m__5497__auto__.call(null,this$,repo,opts));
} else {
throw cljs.core.missing_protocol("PersistentDB.<open-and-fetch-schema",this$);
}
}
});
/**
 * Open a graph and fetch its schema
 */
frontend.persist_db.protocol._LT_open_and_fetch_schema = (function frontend$persist_db$protocol$_LT_open_and_fetch_schema(this$,repo,opts){
if((((!((this$ == null)))) && ((!((this$.frontend$persist_db$protocol$PersistentDB$_LT_open_and_fetch_schema$arity$3 == null)))))){
return this$.frontend$persist_db$protocol$PersistentDB$_LT_open_and_fetch_schema$arity$3(this$,repo,opts);
} else {
return frontend$persist_db$protocol$PersistentDB$_LT_open_and_fetch_schema$dyn_66657(this$,repo,opts);
}
});

var frontend$persist_db$protocol$PersistentDB$_LT_export_db$dyn_66659 = (function (this$,repo,opts){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (frontend.persist_db.protocol._LT_export_db[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,repo,opts) : m__5499__auto__.call(null,this$,repo,opts));
} else {
var m__5497__auto__ = (frontend.persist_db.protocol._LT_export_db["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,repo,opts) : m__5497__auto__.call(null,this$,repo,opts));
} else {
throw cljs.core.missing_protocol("PersistentDB.<export-db",this$);
}
}
});
/**
 * Save or get SQLite db
 */
frontend.persist_db.protocol._LT_export_db = (function frontend$persist_db$protocol$_LT_export_db(this$,repo,opts){
if((((!((this$ == null)))) && ((!((this$.frontend$persist_db$protocol$PersistentDB$_LT_export_db$arity$3 == null)))))){
return this$.frontend$persist_db$protocol$PersistentDB$_LT_export_db$arity$3(this$,repo,opts);
} else {
return frontend$persist_db$protocol$PersistentDB$_LT_export_db$dyn_66659(this$,repo,opts);
}
});

var frontend$persist_db$protocol$PersistentDB$_LT_import_db$dyn_66664 = (function (this$,repo,data){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (frontend.persist_db.protocol._LT_import_db[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,repo,data) : m__5499__auto__.call(null,this$,repo,data));
} else {
var m__5497__auto__ = (frontend.persist_db.protocol._LT_import_db["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,repo,data) : m__5497__auto__.call(null,this$,repo,data));
} else {
throw cljs.core.missing_protocol("PersistentDB.<import-db",this$);
}
}
});
/**
 * Import SQLite db
 */
frontend.persist_db.protocol._LT_import_db = (function frontend$persist_db$protocol$_LT_import_db(this$,repo,data){
if((((!((this$ == null)))) && ((!((this$.frontend$persist_db$protocol$PersistentDB$_LT_import_db$arity$3 == null)))))){
return this$.frontend$persist_db$protocol$PersistentDB$_LT_import_db$arity$3(this$,repo,data);
} else {
return frontend$persist_db$protocol$PersistentDB$_LT_import_db$dyn_66664(this$,repo,data);
}
});


//# sourceMappingURL=frontend.persist_db.protocol.js.map
