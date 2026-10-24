goog.provide('logseq.outliner.tree');

/**
 * @interface
 */
logseq.outliner.tree.INode = function(){};

var logseq$outliner$tree$INode$_save$dyn_59676 = (function (this$,_STAR_txs_state,conn,opts){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (logseq.outliner.tree._save[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(this$,_STAR_txs_state,conn,opts) : m__5499__auto__.call(null,this$,_STAR_txs_state,conn,opts));
} else {
var m__5497__auto__ = (logseq.outliner.tree._save["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(this$,_STAR_txs_state,conn,opts) : m__5497__auto__.call(null,this$,_STAR_txs_state,conn,opts));
} else {
throw cljs.core.missing_protocol("INode.-save",this$);
}
}
});
logseq.outliner.tree._save = (function logseq$outliner$tree$_save(this$,_STAR_txs_state,conn,opts){
if((((!((this$ == null)))) && ((!((this$.logseq$outliner$tree$INode$_save$arity$4 == null)))))){
return this$.logseq$outliner$tree$INode$_save$arity$4(this$,_STAR_txs_state,conn,opts);
} else {
return logseq$outliner$tree$INode$_save$dyn_59676(this$,_STAR_txs_state,conn,opts);
}
});

var logseq$outliner$tree$INode$_del$dyn_59677 = (function (this$,_STAR_txs_state,db){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (logseq.outliner.tree._del[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,_STAR_txs_state,db) : m__5499__auto__.call(null,this$,_STAR_txs_state,db));
} else {
var m__5497__auto__ = (logseq.outliner.tree._del["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,_STAR_txs_state,db) : m__5497__auto__.call(null,this$,_STAR_txs_state,db));
} else {
throw cljs.core.missing_protocol("INode.-del",this$);
}
}
});
logseq.outliner.tree._del = (function logseq$outliner$tree$_del(this$,_STAR_txs_state,db){
if((((!((this$ == null)))) && ((!((this$.logseq$outliner$tree$INode$_del$arity$3 == null)))))){
return this$.logseq$outliner$tree$INode$_del$arity$3(this$,_STAR_txs_state,db);
} else {
return logseq$outliner$tree$INode$_del$dyn_59677(this$,_STAR_txs_state,db);
}
});

logseq.outliner.tree.blocks__GT_vec_tree_data = (function logseq$outliner$tree$blocks__GT_vec_tree_data(blocks,root,p__59634){
var map__59636 = p__59634;
var map__59636__$1 = cljs.core.__destructure_map(map__59636);
var include_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59636__$1,new cljs.core.Keyword(null,"include-root?","include-root?",62844936));
var keep_block_tx_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59636__$1,new cljs.core.Keyword(null,"keep-block-tx-id?","keep-block-tx-id?",1217938158));
if(cljs.core.not(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root))){
return blocks;
} else {
var root_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root);
var parent_blocks = cljs.core.group_by((function (p1__59633_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__59633_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
}),blocks);
var sort_fn = (function (parent){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent_blocks,parent);
if(cljs.core.truth_(temp__5825__auto__)){
var children = temp__5825__auto__;
return logseq.db.sort_by_order(children);
} else {
return null;
}
});
var block_children = (function logseq$outliner$tree$blocks__GT_vec_tree_data_$_block_children(parent,level){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(m);
var children = logseq$outliner$tree$blocks__GT_vec_tree_data_$_block_children(id,(level + (1)));
var G__59637 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("block","level","block/level",1182509971),level,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","children","block/children",-1040716209),children,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),parent], null)], 0));
if(cljs.core.not(keep_block_tx_id_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59637,new cljs.core.Keyword("block","tx-id","block/tx-id",547556161));
} else {
return G__59637;
}
}),sort_fn(parent));
});
var children = block_children(root_id,(1));
if(cljs.core.truth_(include_root_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59638 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword("block","children","block/children",-1040716209),children);
if(cljs.core.not(keep_block_tx_id_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59638,new cljs.core.Keyword("block","tx-id","block/tx-id",547556161));
} else {
return G__59638;
}
})()], null);
} else {
return children;
}
}
});
logseq.outliner.tree.get_root_and_page = (function logseq$outliner$tree$get_root_and_page(db,root_id){
if(cljs.core.uuid_QMARK_(root_id)){
var e = (function (){var G__59639 = db;
var G__59640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),root_id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59639,G__59640) : datascript.core.entity.call(null,G__59639,G__59640));
})();
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : logseq.db.page_QMARK_.call(null,e)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,e], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
}
} else {
if(typeof root_id === 'number'){
var e = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,root_id) : datascript.core.entity.call(null,db,root_id));
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : logseq.db.page_QMARK_.call(null,e)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,e], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
}
} else {
if(typeof root_id === 'string'){
var temp__5823__auto__ = cljs.core.parse_uuid(root_id);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,(function (){var G__59641 = db;
var G__59642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59641,G__59642) : datascript.core.entity.call(null,G__59641,G__59642));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,logseq.db.get_page(db,root_id)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,root_id], null);

}
}
}
});
/**
 * `blocks` need to be in the same page.
 */
logseq.outliner.tree.blocks__GT_vec_tree = (function logseq$outliner$tree$blocks__GT_vec_tree(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59679 = arguments.length;
var i__5877__auto___59680 = (0);
while(true){
if((i__5877__auto___59680 < len__5876__auto___59679)){
args__5882__auto__.push((arguments[i__5877__auto___59680]));

var G__59681 = (i__5877__auto___59680 + (1));
i__5877__auto___59680 = G__59681;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$variadic = (function (db,blocks,root_id,p__59651){
var map__59652 = p__59651;
var map__59652__$1 = cljs.core.__destructure_map(map__59652);
var option = map__59652__$1;
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
if(datascript.impl.entity.entity_QMARK_(b)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,b),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b));
} else {
return b;
}
}),blocks);
var vec__59653 = logseq.outliner.tree.get_root_and_page(db,root_id);
var page_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59653,(0),null);
var root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59653,(1),null);
if(cljs.core.not(root)){
return blocks__$1;
} else {
var include_root_QMARK_ = (function (){var or__5142__auto__ = cljs.core.not(page_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(option);
}
})();
var root__$1 = (cljs.core.truth_(include_root_QMARK_)?cljs.core.some((function (p1__59643_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__59643_SHARP_),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root))){
return p1__59643_SHARP_;
} else {
return null;
}
}),blocks__$1):root);
return logseq.outliner.tree.blocks__GT_vec_tree_data(blocks__$1,root__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-root?","include-root?",62844936),include_root_QMARK_], null));
}
}));

(logseq.outliner.tree.blocks__GT_vec_tree.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.outliner.tree.blocks__GT_vec_tree.cljs$lang$applyTo = (function (seq59644){
var G__59645 = cljs.core.first(seq59644);
var seq59644__$1 = cljs.core.next(seq59644);
var G__59646 = cljs.core.first(seq59644__$1);
var seq59644__$2 = cljs.core.next(seq59644__$1);
var G__59647 = cljs.core.first(seq59644__$2);
var seq59644__$3 = cljs.core.next(seq59644__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59645,G__59646,G__59647,seq59644__$3);
}));

logseq.outliner.tree.tree = (function logseq$outliner$tree$tree(parent__GT_children,root,default_level){
var root_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root);
var nodes = (function logseq$outliner$tree$tree_$_nodes(parent_id,level){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (b){
var b_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","level","block/level",1182509971),(level + (1)));
var children = logseq$outliner$tree$tree_$_nodes(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b),(level + (1)));
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b_SINGLEQUOTE_,new cljs.core.Keyword("block","children","block/children",-1040716209),children);
} else {
return b_SINGLEQUOTE_;
}
}),(function (){var parent = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),parent_id], null);
return logseq.db.sort_by_order(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent__GT_children,parent));
})());
});
var children = nodes(root_id,(1));
var root_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword("block","level","block/level",1182509971),(function (){var or__5142__auto__ = default_level;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})());
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(root_SINGLEQUOTE_,new cljs.core.Keyword("block","children","block/children",-1040716209),children);
} else {
return root_SINGLEQUOTE_;
}
});
logseq.outliner.tree.block_entity__GT_map = (function logseq$outliner$tree$block_entity__GT_map(e){
if(datascript.impl.entity.entity_QMARK_(e)){
var G__59660 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(e))], null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(e)], null);
var G__59660__$1 = (cljs.core.truth_(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59660,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(e)):G__59660);
if(cljs.core.truth_(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(e))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59660__$1,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(e));
} else {
return G__59660__$1;
}
} else {
var G__59661 = e;
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(e)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59661,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(e))], null));
} else {
return G__59661;
}
}
});
logseq.outliner.tree.filter_top_level_blocks = (function logseq$outliner$tree$filter_top_level_blocks(blocks){
var id__GT_blocks = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks),blocks);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59662_SHARP_){
return ((function (){var G__59663 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1((function (){var G__59664 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__59662_SHARP_);
return (id__GT_blocks.cljs$core$IFn$_invoke$arity$1 ? id__GT_blocks.cljs$core$IFn$_invoke$arity$1(G__59664) : id__GT_blocks.call(null,G__59664));
})()));
return (id__GT_blocks.cljs$core$IFn$_invoke$arity$1 ? id__GT_blocks.cljs$core$IFn$_invoke$arity$1(G__59663) : id__GT_blocks.call(null,G__59663));
})() == null);
}),blocks);
});
/**
 * `blocks` need to be in the same page.
 */
logseq.outliner.tree.non_consecutive_blocks__GT_vec_tree = (function logseq$outliner$tree$non_consecutive_blocks__GT_vec_tree(var_args){
var G__59667 = arguments.length;
switch (G__59667) {
case 1:
return logseq.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return logseq.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,(1));
}));

(logseq.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2 = (function (blocks,default_level){
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.outliner.tree.block_entity__GT_map,blocks);
var top_level_blocks = logseq.outliner.tree.filter_top_level_blocks(blocks__$1);
var top_level_blocks_SINGLEQUOTE_ = logseq.db.sort_by_order(top_level_blocks);
var parent__GT_children = cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),blocks__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59665_SHARP_){
return logseq.outliner.tree.tree(parent__GT_children,p1__59665_SHARP_,(function (){var or__5142__auto__ = default_level;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})());
}),top_level_blocks_SINGLEQUOTE_);
}));

(logseq.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$lang$maxFixedArity = 2);

logseq.outliner.tree.get_sorted_block_and_children = (function logseq$outliner$tree$get_sorted_block_and_children(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59696 = arguments.length;
var i__5877__auto___59697 = (0);
while(true){
if((i__5877__auto___59697 < len__5876__auto___59696)){
args__5882__auto__.push((arguments[i__5877__auto___59697]));

var G__59698 = (i__5877__auto___59697 + (1));
i__5877__auto___59697 = G__59698;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.outliner.tree.get_sorted_block_and_children.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.outliner.tree.get_sorted_block_and_children.cljs$core$IFn$_invoke$arity$variadic = (function (db,db_id,p__59674){
var map__59675 = p__59674;
var map__59675__$1 = cljs.core.__destructure_map(map__59675);
var opts = map__59675__$1;
if(cljs.core.truth_(db_id)){
var temp__5825__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_id) : datascript.core.entity.call(null,db,db_id));
if(cljs.core.truth_(temp__5825__auto__)){
var root_block = temp__5825__auto__;
return logseq.db.get_block_and_children.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
} else {
return null;
}
} else {
return null;
}
}));

(logseq.outliner.tree.get_sorted_block_and_children.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.outliner.tree.get_sorted_block_and_children.cljs$lang$applyTo = (function (seq59668){
var G__59669 = cljs.core.first(seq59668);
var seq59668__$1 = cljs.core.next(seq59668);
var G__59670 = cljs.core.first(seq59668__$1);
var seq59668__$2 = cljs.core.next(seq59668__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59669,G__59670,seq59668__$2);
}));


//# sourceMappingURL=logseq.outliner.tree.js.map
