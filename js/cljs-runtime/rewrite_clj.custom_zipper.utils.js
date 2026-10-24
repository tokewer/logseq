goog.provide('rewrite_clj.custom_zipper.utils');
rewrite_clj.custom_zipper.utils.update_in_path = (function rewrite_clj$custom_zipper$utils$update_in_path(p__53617,k,f){
var vec__53620 = p__53617;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53620,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53620,(1),null);
var loc = vec__53620;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,k);
if(cljs.core.seq(v)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_right = (function rewrite_clj$custom_zipper$utils$remove_right(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__53626 = loc;
var map__53626__$1 = cljs.core.__destructure_map(map__53626);
var vec__53627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53626__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__53628 = cljs.core.seq(vec__53627);
var first__53629 = cljs.core.first(seq__53628);
var seq__53628__$1 = cljs.core.next(seq__53628);
var _r = first__53629;
var rs = seq__53628__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,new cljs.core.Keyword(null,"right","right",-452581833),rs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0));
} else {
return rewrite_clj.custom_zipper.utils.update_in_path(loc,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.next);
}
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_left = (function rewrite_clj$custom_zipper$utils$remove_left(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__53632 = loc;
var map__53632__$1 = cljs.core.__destructure_map(map__53632);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53632__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var temp__5823__auto__ = cljs.core.peek(left);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__53634 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53634,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53634,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0));
} else {
return loc;
}
} else {
return rewrite_clj.custom_zipper.utils.update_in_path(loc,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop);
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.custom_zipper.utils.remove_right_while = (function rewrite_clj$custom_zipper$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5823__auto__ = rewrite_clj.custom_zipper.core.right(zloc__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var rloc = temp__5823__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(rloc) : p_QMARK_.call(null,rloc)))){
var G__53666 = rewrite_clj.custom_zipper.utils.remove_right(zloc__$1);
zloc__$1 = G__53666;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.custom_zipper.utils.remove_left_while = (function rewrite_clj$custom_zipper$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5823__auto__ = rewrite_clj.custom_zipper.core.left(zloc__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var lloc = temp__5823__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(lloc) : p_QMARK_.call(null,lloc)))){
var G__53667 = rewrite_clj.custom_zipper.utils.remove_left(zloc__$1);
zloc__$1 = G__53667;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.custom_zipper.utils.remove_and_move_left = (function rewrite_clj$custom_zipper$utils$remove_and_move_left(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__53640 = loc;
var map__53640__$1 = cljs.core.__destructure_map(map__53640);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53640__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.seq(left)){
var vec__53641 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53641,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53641,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left)], 0));
} else {
return null;
}
} else {
var vec__53644 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53644,(0),null);
var map__53647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53644,(1),null);
var map__53647__$1 = cljs.core.__destructure_map(map__53647);
var path = map__53647__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53647__$1,new cljs.core.Keyword(null,"l","l",1395893423));
if(cljs.core.seq(l)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta(loc));
} else {
return null;
}
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.custom_zipper.utils.remove_and_move_right = (function rewrite_clj$custom_zipper$utils$remove_and_move_right(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__53650 = loc;
var map__53650__$1 = cljs.core.__destructure_map(map__53650);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53650__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.seq(right)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),cljs.core.first(right),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.next(right)], 0));
} else {
return null;
}
} else {
var vec__53651 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53651,(0),null);
var map__53654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53651,(1),null);
var map__53654__$1 = cljs.core.__destructure_map(map__53654);
var path = map__53654__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53654__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.seq(r)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta(loc));
} else {
return null;
}
}
});
/**
 * Remove the current node and move up.
 *  `[a [b |c d]] -> [a |[b d]]`
 *  `[a [|b c d]] -> [a |[c d]]`
 */
rewrite_clj.custom_zipper.utils.remove_and_move_up = (function rewrite_clj$custom_zipper$utils$remove_and_move_up(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__53655 = loc;
var map__53655__$1 = cljs.core.__destructure_map(map__53655);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53655__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53655__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53655__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if((new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq(left)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node(loc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,left),right))], 0));
} else {
return rewrite_clj.custom_zipper.core.remove(loc);
}
}
} else {
var vec__53658 = loc;
var _node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53658,(0),null);
var map__53661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53658,(1),null);
var map__53661__$1 = cljs.core.__destructure_map(map__53661);
var path = map__53661__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53661__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53661__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53661__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53661__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((ppath == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((cljs.core.count(l) > (0))){
return rewrite_clj.custom_zipper.core.up(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0))], null),cljs.core.meta(loc)));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.custom_zipper.core.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__5140__auto__ = ppath;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__5140__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
}
});

//# sourceMappingURL=rewrite_clj.custom_zipper.utils.js.map
