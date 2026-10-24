goog.provide('frontend.fs.node');
frontend.fs.node.write_file_impl_BANG_ = (function frontend$fs$node$write_file_impl_BANG_(repo,dir,rpath,content,p__52207,_stat){
var map__52208 = p__52207;
var map__52208__$1 = cljs.core.__destructure_map(map__52208);
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52208__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52208__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var file_fpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rpath], 0));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["writeFile",repo,file_fpath,content], 0))),(function (result){
return promesa.protocols._promise((cljs.core.truth_(ok_handler)?(ok_handler.cljs$core$IFn$_invoke$arity$3 ? ok_handler.cljs$core$IFn$_invoke$arity$3(repo,rpath,result) : ok_handler.call(null,repo,rpath,result)):null));
}));
})),(function (error){
if(cljs.core.truth_(error_handler)){
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(error) : error_handler.call(null,error));
} else {
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.node",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-file-failed","write-file-failed",1274270449),error,new cljs.core.Keyword(null,"line","line",212345235),23], null)),null);
} else {
return null;
}
}
}));
});
/**
 * Open a new directory
 */
frontend.fs.node.open_dir = (function frontend$fs$node$open_dir(dir){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = dir;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.mocked_open_dir_path();
}
})()),(function (dir_path){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(dir_path)?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOTE: Using mocked dir",dir_path], 0));

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getFiles",dir_path], 0));
})()
:electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openDir",cljs.core.PersistentArrayMap.EMPTY], 0)))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(result)),(function (result__$1){
return promesa.protocols._promise(result__$1);
}));
}));
}));
}));
});
frontend.fs.node.wrap_throw_ex_info = (function frontend$fs$node$wrap_throw_ex_info(p){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(p,(function (e){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)),cljs.core.PersistentArrayMap.EMPTY);
}));
});

/**
* @constructor
 * @implements {frontend.fs.protocol.Fs}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.fs.node.Node = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.node.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(frontend.fs.node.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k52210,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__52214 = k52210;
switch (G__52214) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52210,else__5451__auto__);

}
}));

(frontend.fs.node.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__52215){
var vec__52216 = p__52215;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52216,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52216,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(frontend.fs.node.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#frontend.fs.node.Node{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.node.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52209){
var self__ = this;
var G__52209__$1 = this;
return (new cljs.core.RecordIter((0),G__52209__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.node.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.node.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new frontend.fs.node.Node(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.node.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.node.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (1327458881 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(frontend.fs.node.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52211,other52212){
var self__ = this;
var this52211__$1 = this;
return (((!((other52212 == null)))) && ((((this52211__$1.constructor === other52212.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52211__$1.__extmap,other52212.__extmap)))));
}));

(frontend.fs.node.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new frontend.fs.node.Node(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(frontend.fs.node.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k52210){
var self__ = this;
var this__5455__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k52210);
}));

(frontend.fs.node.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__52209){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__52219 = cljs.core.keyword_identical_QMARK_;
var expr__52220 = k__5457__auto__;
return (new frontend.fs.node.Node(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__52209),null));
}));

(frontend.fs.node.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.node.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__52209){
var self__ = this;
var this__5447__auto____$1 = this;
return (new frontend.fs.node.Node(G__52209,self__.__extmap,self__.__hash));
}));

(frontend.fs.node.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["mkdir",dir], 0)),(function (_){
return console.log((""+"Directory created: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)));
})),(function (error){
if(clojure.string.includes_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)),"EEXIST")){
return null;
} else {
return console.error((""+"Error creating directory: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)),error);
}
}));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$unlink_BANG_$arity$4 = (function (_this,repo,path,_opts){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unlink",frontend.config.get_repo_dir(repo),path], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$get_files$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getFiles",dir], 0)),(function (result){
return new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(result));
}));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$rename_BANG_$arity$4 = (function (_this,_repo,old_path,new_path){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rename",old_path,new_path], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$readdir$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return frontend.fs.node.wrap_throw_ex_info(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["readdir",dir], 0)),cljs_bean.core.__GT_clj));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$stat$arity$2 = (function (_this,fpath){
var self__ = this;
var _this__$1 = this;
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stat",fpath], 0)),cljs_bean.core.__GT_clj);
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$3 = (function (_this,_dir,_options){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$unwatch_dir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$copy_BANG_$arity$4 = (function (_this,repo,old_path,new_path){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copyFile",repo,old_path,new_path], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$read_file_raw$arity$4 = (function (_this,dir,path,_options){
var self__ = this;
var _this__$1 = this;
var path__$1 = (((dir == null))?path:logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)));
return frontend.fs.node.wrap_throw_ex_info(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["readFileRaw",path__$1], 0)));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$write_file_BANG_$arity$6 = (function (this$,repo,dir,path,content,opts){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))),(function (fpath){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$stat$arity$2(null,fpath),(function (_e){
return new cljs.core.Keyword(null,"not-found","not-found",-629079980);
}))),(function (stat){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.common.path.parent(fpath)),(function (parent_dir){
return promesa.protocols._mcat(promesa.protocols._promise(this$__$1.frontend$fs$protocol$Fs$mkdir_recur_BANG_$arity$2(null,parent_dir)),(function (_){
return promesa.protocols._promise(frontend.fs.node.write_file_impl_BANG_(repo,dir,path,content,opts,stat));
}));
}));
}));
}));
}));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$open_dir$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return frontend.fs.node.open_dir(dir);
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$read_file$arity$4 = (function (_this,dir,path,_options){
var self__ = this;
var _this__$1 = this;
var path__$1 = (((dir == null))?path:logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)));
return frontend.fs.node.wrap_throw_ex_info(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["readFile",path__$1], 0)));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$mkdir_recur_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["mkdir-recur",dir], 0));
}));

(frontend.fs.node.Node.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.node.Node.cljs$lang$type = true);

(frontend.fs.node.Node.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"frontend.fs.node/Node",null,(1),null));
}));

(frontend.fs.node.Node.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"frontend.fs.node/Node");
}));

/**
 * Positional factory function for frontend.fs.node/Node.
 */
frontend.fs.node.__GT_Node = (function frontend$fs$node$__GT_Node(){
return (new frontend.fs.node.Node(null,null,null));
});

/**
 * Factory function for frontend.fs.node/Node, taking a map of keywords to field values.
 */
frontend.fs.node.map__GT_Node = (function frontend$fs$node$map__GT_Node(G__52213){
var extmap__5490__auto__ = (function (){var G__52222 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__52213);
if(cljs.core.record_QMARK_(G__52213)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52222);
} else {
return G__52222;
}
})();
return (new frontend.fs.node.Node(null,cljs.core.not_empty(extmap__5490__auto__),null));
});


//# sourceMappingURL=frontend.fs.node.js.map
