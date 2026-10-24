goog.provide('frontend.modules.outliner.tree');
frontend.modules.outliner.tree.block_page = (function frontend$modules$outliner$tree$block_page(block){
var page = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block);
if(typeof page === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),page], null);
} else {
return page;
}
});
frontend.modules.outliner.tree.same_root_QMARK_ = (function frontend$modules$outliner$tree$same_root_QMARK_(block,root_id){
if(cljs.core.uuid_QMARK_(root_id)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),root_id);
} else {
if(typeof root_id === 'number'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),root_id);
} else {
if(typeof root_id === 'string'){
var temp__5823__auto__ = cljs.core.parse_uuid(root_id);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),id);
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block),root_id)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),root_id)));
}
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root_id));

}
}
}
});
frontend.modules.outliner.tree.root_block = (function frontend$modules$outliner$tree$root_block(blocks,root_id){
var or__5142__auto__ = cljs.core.some((function (p1__66056_SHARP_){
if(frontend.modules.outliner.tree.same_root_QMARK_(p1__66056_SHARP_,root_id)){
return p1__66056_SHARP_;
} else {
return null;
}
}),blocks);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = cljs.core.some(frontend.modules.outliner.tree.block_page,blocks);
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5142__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = ((cljs.core.uuid_QMARK_(root_id))?root_id:null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = typeof root_id === 'string';
if(and__5140__auto__){
return cljs.core.parse_uuid(root_id);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.parse_uuid(root_id);
} else {
return null;
}
}
}
})());
} else {
return null;
}
}
});
/**
 * `blocks` need to be in the same page.
 */
frontend.modules.outliner.tree.blocks__GT_vec_tree = (function frontend$modules$outliner$tree$blocks__GT_vec_tree(var_args){
var args__5882__auto__ = [];
var len__5876__auto___66067 = arguments.length;
var i__5877__auto___66068 = (0);
while(true){
if((i__5877__auto___66068 < len__5876__auto___66067)){
args__5882__auto__.push((arguments[i__5877__auto___66068]));

var G__66069 = (i__5877__auto___66068 + (1));
i__5877__auto___66068 = G__66069;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$variadic = (function (blocks,root_id,p__66060){
var map__66061 = p__66060;
var map__66061__$1 = cljs.core.__destructure_map(map__66061);
var option = map__66061__$1;
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.outliner.tree.block_entity__GT_map,blocks);
var temp__5823__auto__ = frontend.modules.outliner.tree.root_block(blocks__$1,root_id);
if(cljs.core.truth_(temp__5823__auto__)){
var root = temp__5823__auto__;
return logseq.outliner.tree.blocks__GT_vec_tree_data(blocks__$1,root,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-root?","include-root?",62844936),(function (){var or__5142__auto__ = cljs.core.not(frontend.util.entity.page_QMARK_(root));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(option);
}
})(),new cljs.core.Keyword(null,"keep-block-tx-id?","keep-block-tx-id?",1217938158),true], null));
} else {
return blocks__$1;
}
}));

(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$lang$applyTo = (function (seq66057){
var G__66058 = cljs.core.first(seq66057);
var seq66057__$1 = cljs.core.next(seq66057);
var G__66059 = cljs.core.first(seq66057__$1);
var seq66057__$2 = cljs.core.next(seq66057__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66058,G__66059,seq66057__$2);
}));

frontend.modules.outliner.tree.filter_top_level_blocks = logseq.outliner.tree.filter_top_level_blocks;
frontend.modules.outliner.tree.non_consecutive_blocks__GT_vec_tree = logseq.outliner.tree.non_consecutive_blocks__GT_vec_tree;
frontend.modules.outliner.tree.get_sorted_block_and_children = (function frontend$modules$outliner$tree$get_sorted_block_and_children(var_args){
var args__5882__auto__ = [];
var len__5876__auto___66070 = arguments.length;
var i__5877__auto___66071 = (0);
while(true){
if((i__5877__auto___66071 < len__5876__auto___66070)){
args__5882__auto__.push((arguments[i__5877__auto___66071]));

var G__66072 = (i__5877__auto___66071 + (1));
i__5877__auto___66071 = G__66072;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.modules.outliner.tree.get_sorted_block_and_children.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.modules.outliner.tree.get_sorted_block_and_children.cljs$core$IFn$_invoke$arity$variadic = (function (db,db_id,p__66065){
var map__66066 = p__66065;
var map__66066__$1 = cljs.core.__destructure_map(map__66066);
var opts = map__66066__$1;
return logseq.outliner.tree.get_sorted_block_and_children.cljs$core$IFn$_invoke$arity$variadic(db,db_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));

(frontend.modules.outliner.tree.get_sorted_block_and_children.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.modules.outliner.tree.get_sorted_block_and_children.cljs$lang$applyTo = (function (seq66062){
var G__66063 = cljs.core.first(seq66062);
var seq66062__$1 = cljs.core.next(seq66062);
var G__66064 = cljs.core.first(seq66062__$1);
var seq66062__$2 = cljs.core.next(seq66062__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66063,G__66064,seq66062__$2);
}));


//# sourceMappingURL=frontend.modules.outliner.tree.js.map
