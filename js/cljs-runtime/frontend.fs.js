goog.provide('frontend.fs');
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.memory_backend !== 'undefined')){
} else {
frontend.fs.memory_backend = frontend.fs.memory_fs.__GT_MemoryFs();
}
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.node_backend !== 'undefined')){
} else {
frontend.fs.node_backend = frontend.fs.node.__GT_Node();
}
/**
 * Native FS backend of current platform
 */
frontend.fs.get_native_backend = (function frontend$fs$get_native_backend(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.fs.node_backend;
} else {
return null;
}
});
frontend.fs.get_fs = (function frontend$fs$get_fs(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52245 = arguments.length;
var i__5877__auto___52246 = (0);
while(true){
if((i__5877__auto___52246 < len__5876__auto___52245)){
args__5882__auto__.push((arguments[i__5877__auto___52246]));

var G__52247 = (i__5877__auto___52246 + (1));
i__5877__auto___52246 = G__52247;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.fs.get_fs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.fs.get_fs.cljs$core$IFn$_invoke$arity$variadic = (function (dir,p__52226){
var map__52227 = p__52226;
var map__52227__$1 = cljs.core.__destructure_map(map__52227);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var rpath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"rpath","rpath",1489437835));
var repo__$1 = (function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var db_assets_QMARK_ = (function (){var and__5140__auto__ = rpath;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.starts_with_QMARK_(rpath,"assets/");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = db_assets_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.electron_QMARK_();
} else {
return and__5140__auto__;
}
})())){
return frontend.fs.node_backend;
} else {
if(cljs.core.truth_(db_assets_QMARK_)){
return frontend.fs.memory_backend;
} else {
if((dir == null)){
return frontend.fs.get_native_backend();
} else {
if(clojure.string.starts_with_QMARK_(dir,"memory://")){
return frontend.fs.memory_backend;
} else {
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.fs.node_backend;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to get fs backend",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo__$1,new cljs.core.Keyword(null,"rpath","rpath",1489437835),rpath], null));

}
}
}
}
}
}));

(frontend.fs.get_fs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.fs.get_fs.cljs$lang$applyTo = (function (seq52224){
var G__52225 = cljs.core.first(seq52224);
var seq52224__$1 = cljs.core.next(seq52224);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52225,seq52224__$1);
}));

frontend.fs.mkdir_recur_BANG_ = (function frontend$fs$mkdir_recur_BANG_(dir){
return frontend.fs.protocol.mkdir_recur_BANG_(frontend.fs.get_fs(dir),dir);
});
/**
 * list all absolute paths in dir, absolute
 */
frontend.fs.readdir = (function frontend$fs$readdir(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52248 = arguments.length;
var i__5877__auto___52249 = (0);
while(true){
if((i__5877__auto___52249 < len__5876__auto___52248)){
args__5882__auto__.push((arguments[i__5877__auto___52249]));

var G__52250 = (i__5877__auto___52249 + (1));
i__5877__auto___52249 = G__52250;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.fs.readdir.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.fs.readdir.cljs$core$IFn$_invoke$arity$variadic = (function (dir,p__52230){
var map__52231 = p__52230;
var map__52231__$1 = cljs.core.__destructure_map(map__52231);
var path_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52231__$1,new cljs.core.Keyword(null,"path-only?","path-only?",-825545027));
if(cljs.core.truth_(path_only_QMARK_)){
} else {
console.error("BUG: (deprecation) path-only? is always true");
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.protocol.readdir(frontend.fs.get_fs(dir),dir)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(result)),(function (result__$1){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.common.util.path_normalize,result__$1));
}));
}));
}));
}));

(frontend.fs.readdir.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.fs.readdir.cljs$lang$applyTo = (function (seq52228){
var G__52229 = cljs.core.first(seq52228);
var seq52228__$1 = cljs.core.next(seq52228);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52229,seq52228__$1);
}));

/**
 * Should move the path to logseq/recycle instead of deleting it.
 */
frontend.fs.unlink_BANG_ = (function frontend$fs$unlink_BANG_(repo,fpath,opts){
return frontend.fs.protocol.unlink_BANG_(frontend.fs.get_fs(fpath),repo,fpath,opts);
});
/**
 * Remove the directory recursively.
 * Warning: only run it for browser cache.
 */
frontend.fs.rmdir_BANG_ = (function frontend$fs$rmdir_BANG_(dir){
var temp__5825__auto__ = frontend.fs.get_fs(dir);
if(cljs.core.truth_(temp__5825__auto__)){
var fs = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fs,frontend.fs.memory_backend)){
return frontend.fs.protocol.rmdir_BANG_(fs,dir);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Use it only for plain-text files, not binary
 */
frontend.fs.write_plain_text_file_BANG_ = (function frontend$fs$write_plain_text_file_BANG_(repo,dir,rpath,content,opts){
if(cljs.core.truth_(content)){
var path = logseq.common.util.path_normalize(rpath);
var fs_record = frontend.fs.get_fs.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"rpath","rpath",1489437835),rpath], null)], 0));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("write-file","failed","write-file/failed",325307384),new cljs.core.Keyword(null,"fs","fs",-2122926244),cljs.core.type(fs_record),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(cljs.core.truth_(navigator)?navigator.userAgent:null),new cljs.core.Keyword(null,"content-length","content-length",441319507),cljs.core.count(content)], null)], null)], null));
}))),(function (opts__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.protocol.write_file_BANG_(fs_record,repo,dir,path,content,opts__$1)),(function (_){
return promesa.impl.resolved(null);
}));
}));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-failed","file/write-failed",-229053199),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),97], null)),null);
} else {
}

throw error;
}));
} else {
return null;
}
});
frontend.fs.stat = (function frontend$fs$stat(var_args){
var G__52233 = arguments.length;
switch (G__52233) {
case 1:
return frontend.fs.stat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.fs.stat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.fs.stat.cljs$core$IFn$_invoke$arity$1 = (function (fpath){
return frontend.fs.protocol.stat(frontend.fs.get_fs(fpath),fpath);
}));

(frontend.fs.stat.cljs$core$IFn$_invoke$arity$2 = (function (dir,path){
var fpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
return frontend.fs.protocol.stat(frontend.fs.get_fs(dir),fpath);
}));

(frontend.fs.stat.cljs$lang$maxFixedArity = 2);

frontend.fs.mkdir_if_not_exists = (function frontend$fs$mkdir_if_not_exists(dir){
if(cljs.core.truth_(dir)){
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.stat.cljs$core$IFn$_invoke$arity$1(dir),(function (_stat){
return null;
}),(function (_error){
return frontend.fs.mkdir_recur_BANG_(dir);
}));
} else {
return null;
}
});
/**
 * A node only version of write-plain-text-file! to avoid using the fs-protocol
 * which has file graph assumptions. Creates the parent directory when missing
 * so first-save of sidecar files such as export.css does not fail with ENOENT.
 */
frontend.fs.write_file_BANG_ = (function frontend$fs$write_file_BANG_(path,content){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var file_fpath = logseq.common.util.path_normalize(path);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.mkdir_if_not_exists(logseq.common.path.parent(file_fpath))),(function (___27434__auto__){
return promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["writeFile",null,file_fpath,content], 0)));
}));
})),(function (error){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("write-file","failed","write-file/failed",325307384),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(cljs.core.truth_(navigator)?navigator.userAgent:null),new cljs.core.Keyword(null,"content-length","content-length",441319507),cljs.core.count(content)], null)], null)], null));
}));
} else {
return null;
}
});
frontend.fs.write_asset_file_BANG_ = (function frontend$fs$write_asset_file_BANG_(repo,file_name,data){
var repo_dir = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var assets_dir = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.common.config.local_assets_dir], 0));
var file_path = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_name], 0));
return window.apis.writeFileBytes(file_path,data);
} else {
var file_path = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(logseq.common.config.local_assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_name], 0));
return frontend.fs.write_plain_text_file_BANG_(repo,repo_dir,file_path,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"skip-transact?","skip-transact?",-1820887310),true,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
}
});
frontend.fs.read_file = (function frontend$fs$read_file(var_args){
var G__52235 = arguments.length;
switch (G__52235) {
case 2:
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2 = (function (dir,path){
var fs = frontend.fs.get_fs(dir);
var options = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fs,frontend.fs.memory_backend))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8"], null):cljs.core.PersistentArrayMap.EMPTY);
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(dir,path,options);
}));

(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3 = (function (dir,path,options){
return frontend.fs.protocol.read_file(frontend.fs.get_fs(dir),dir,path,options);
}));

(frontend.fs.read_file.cljs$lang$maxFixedArity = 3);

frontend.fs.read_file_raw = (function frontend$fs$read_file_raw(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52253 = arguments.length;
var i__5877__auto___52254 = (0);
while(true){
if((i__5877__auto___52254 < len__5876__auto___52253)){
args__5882__auto__.push((arguments[i__5877__auto___52254]));

var G__52255 = (i__5877__auto___52254 + (1));
i__5877__auto___52254 = G__52255;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.fs.read_file_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.fs.read_file_raw.cljs$core$IFn$_invoke$arity$variadic = (function (dir,path,p__52239){
var map__52240 = p__52239;
var map__52240__$1 = cljs.core.__destructure_map(map__52240);
var options = map__52240__$1;
var fs = frontend.fs.get_fs(dir);
return frontend.fs.protocol.read_file_raw(fs,dir,path,options);
}));

(frontend.fs.read_file_raw.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.fs.read_file_raw.cljs$lang$applyTo = (function (seq52236){
var G__52237 = cljs.core.first(seq52236);
var seq52236__$1 = cljs.core.next(seq52236);
var G__52238 = cljs.core.first(seq52236__$1);
var seq52236__$2 = cljs.core.next(seq52236__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52237,G__52238,seq52236__$2);
}));

/**
 * Create a file if it doesn't exist. return false on written, true on already exists
 */
frontend.fs.create_if_not_exists = (function frontend$fs$create_if_not_exists(var_args){
var G__52242 = arguments.length;
switch (G__52242) {
case 3:
return frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$3 = (function (repo,dir,path){
return frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo,dir,path,"");
}));

(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4 = (function (repo,dir,path,initial_content){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.stat.cljs$core$IFn$_invoke$arity$2(dir,path)),(function (_stat){
return promesa.protocols._promise(true);
}));
})),(function (_error){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.write_plain_text_file_BANG_(repo,dir,path,initial_content,null)),(function (_){
return promesa.protocols._promise(false);
}));
}));
}));
}));

(frontend.fs.create_if_not_exists.cljs$lang$maxFixedArity = 4);

frontend.fs.file_exists_QMARK_ = (function frontend$fs$file_exists_QMARK_(var_args){
var G__52244 = arguments.length;
switch (G__52244) {
case 1:
return frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (fpath){
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.stat.cljs$core$IFn$_invoke$arity$1(fpath),(function (stat_SINGLEQUOTE_){
return (!((stat_SINGLEQUOTE_ == null)));
}),(function (_e){
return false;
}));
}));

(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (dir,path){
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.stat.cljs$core$IFn$_invoke$arity$2(dir,path),(function (stat_SINGLEQUOTE_){
return (!((stat_SINGLEQUOTE_ == null)));
}),(function (_e){
return false;
}));
}));

(frontend.fs.file_exists_QMARK_.cljs$lang$maxFixedArity = 2);

frontend.fs.asset_path_normalize = (function frontend$fs$asset_path_normalize(path){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return logseq.common.path.url_to_path(path);
} else {
return path;

}
});

//# sourceMappingURL=frontend.fs.js.map
