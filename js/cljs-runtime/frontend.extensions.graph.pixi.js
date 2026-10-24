goog.provide('frontend.extensions.graph.pixi');
goog.scope(function(){
  frontend.extensions.graph.pixi.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_graph_instances !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_graph_instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_render_tokens !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_render_tokens = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_tabler_icon_codepoint_cache !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_tabler_icon_codepoint_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.extensions.graph.pixi.icon_texture_font_size = (96);
frontend.extensions.graph.pixi.destroy_instance_data_BANG_ = (function frontend$extensions$graph$pixi$destroy_instance_data_BANG_(p__91409){
var map__91410 = p__91409;
var map__91410__$1 = cljs.core.__destructure_map(map__91410);
var cleanup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91410__$1,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91410__$1,new cljs.core.Keyword(null,"app","app",-560961707));
if(cljs.core.fn_QMARK_(cleanup)){
(cleanup.cljs$core$IFn$_invoke$arity$0 ? cleanup.cljs$core$IFn$_invoke$arity$0() : cleanup.call(null));
} else {
}

var temp__5825__auto__ = app;
if(cljs.core.truth_(temp__5825__auto__)){
var app__$1 = temp__5825__auto__;
try{return app__$1.destroy();
}catch (e91411){var _e = e91411;
return null;
}} else {
return null;
}
});
frontend.extensions.graph.pixi.destroy_instance_BANG_ = (function frontend$extensions$graph$pixi$destroy_instance_BANG_(var_args){
var G__91413 = arguments.length;
switch (G__91413) {
case 0:
return frontend.extensions.graph.pixi.destroy_instance_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.extensions.graph.pixi.destroy_instance_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.destroy_instance_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
var seq__91416_92266 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instances)));
var chunk__91417_92267 = null;
var count__91418_92268 = (0);
var i__91419_92269 = (0);
while(true){
if((i__91419_92269 < count__91418_92268)){
var instance_92270 = chunk__91417_92267.cljs$core$IIndexed$_nth$arity$2(null,i__91419_92269);
frontend.extensions.graph.pixi.destroy_instance_data_BANG_(instance_92270);


var G__92271 = seq__91416_92266;
var G__92272 = chunk__91417_92267;
var G__92273 = count__91418_92268;
var G__92274 = (i__91419_92269 + (1));
seq__91416_92266 = G__92271;
chunk__91417_92267 = G__92272;
count__91418_92268 = G__92273;
i__91419_92269 = G__92274;
continue;
} else {
var temp__5825__auto___92275 = cljs.core.seq(seq__91416_92266);
if(temp__5825__auto___92275){
var seq__91416_92276__$1 = temp__5825__auto___92275;
if(cljs.core.chunked_seq_QMARK_(seq__91416_92276__$1)){
var c__5673__auto___92277 = cljs.core.chunk_first(seq__91416_92276__$1);
var G__92278 = cljs.core.chunk_rest(seq__91416_92276__$1);
var G__92279 = c__5673__auto___92277;
var G__92280 = cljs.core.count(c__5673__auto___92277);
var G__92281 = (0);
seq__91416_92266 = G__92278;
chunk__91417_92267 = G__92279;
count__91418_92268 = G__92280;
i__91419_92269 = G__92281;
continue;
} else {
var instance_92282 = cljs.core.first(seq__91416_92276__$1);
frontend.extensions.graph.pixi.destroy_instance_data_BANG_(instance_92282);


var G__92283 = cljs.core.next(seq__91416_92276__$1);
var G__92284 = null;
var G__92285 = (0);
var G__92286 = (0);
seq__91416_92266 = G__92283;
chunk__91417_92267 = G__92284;
count__91418_92268 = G__92285;
i__91419_92269 = G__92286;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instances,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_render_tokens,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.graph.pixi.destroy_instance_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (container){
if(cljs.core.truth_(container)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.extensions.graph.pixi._STAR_render_tokens,cljs.core.update,container,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

var temp__5825__auto___92287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instances),container);
if(cljs.core.truth_(temp__5825__auto___92287)){
var instance_92288 = temp__5825__auto___92287;
frontend.extensions.graph.pixi.destroy_instance_data_BANG_(instance_92288);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.extensions.graph.pixi._STAR_graph_instances,cljs.core.dissoc,container);
} else {
return null;
}
}));

(frontend.extensions.graph.pixi.destroy_instance_BANG_.cljs$lang$maxFixedArity = 1);

frontend.extensions.graph.pixi.normalize_view_mode = (function frontend$extensions$graph$pixi$normalize_view_mode(view_mode){
var G__91426 = view_mode;
var G__91426__$1 = (((G__91426 instanceof cljs.core.Keyword))?G__91426.fqn:null);
switch (G__91426__$1) {
case "all-pages":
return new cljs.core.Keyword(null,"all-pages","all-pages",1017563062);

break;
case "page":
return new cljs.core.Keyword(null,"page","page",849072397);

break;
default:
return new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884);

}
});
frontend.extensions.graph.pixi.color__GT_int = (function frontend$extensions$graph$pixi$color__GT_int(hex_color){
return parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex_color,(1)),(16));
});
frontend.extensions.graph.pixi.edge_color = (function frontend$extensions$graph$pixi$edge_color(dark_QMARK_){
if(cljs.core.truth_(dark_QMARK_)){
return "#64748B";
} else {
return "#94A3B8";
}
});
frontend.extensions.graph.pixi.label_color = (function frontend$extensions$graph$pixi$label_color(dark_QMARK_){
if(cljs.core.truth_(dark_QMARK_)){
return "#E2E8F0";
} else {
return "#0F172A";
}
});
frontend.extensions.graph.pixi.edge_label_color = (function frontend$extensions$graph$pixi$edge_label_color(dark_QMARK_){
if(cljs.core.truth_(dark_QMARK_)){
return "#CBD5E1";
} else {
return "#334155";
}
});
frontend.extensions.graph.pixi.layout_nodes = (function frontend$extensions$graph$pixi$layout_nodes(nodes,links,view_mode,dark_QMARK_,opts){
return frontend.extensions.graph.pixi.logic.layout_nodes.cljs$core$IFn$_invoke$arity$5(nodes,links,view_mode,dark_QMARK_,opts);
});
frontend.extensions.graph.pixi.index_layouted_nodes = (function frontend$extensions$graph$pixi$index_layouted_nodes(layouted_nodes){
var cell_size = (42);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size,new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grid,node){
var cx = Math.floor((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node) / cell_size));
var cy = Math.floor((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node) / cell_size));
var k = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cx)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cy));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(grid,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),node);
}),cljs.core.PersistentArrayMap.EMPTY,layouted_nodes)], null);
});
frontend.extensions.graph.pixi.hit_test_node = (function frontend$extensions$graph$pixi$hit_test_node(p__91438,world_x,world_y,scale){
var map__91439 = p__91438;
var map__91439__$1 = cljs.core.__destructure_map(map__91439);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91439__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91439__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var cx = Math.floor((world_x / cell_size));
var cy = Math.floor((world_y / cell_size));
var cells = (function (){var iter__5628__auto__ = (function frontend$extensions$graph$pixi$hit_test_node_$_iter__91440(s__91441){
return (new cljs.core.LazySeq(null,(function (){
var s__91441__$1 = s__91441;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__91441__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var dx = cljs.core.first(xs__6385__auto__);
var iterys__5624__auto__ = ((function (s__91441__$1,dx,xs__6385__auto__,temp__5825__auto__,cx,cy,map__91439,map__91439__$1,grid,cell_size){
return (function frontend$extensions$graph$pixi$hit_test_node_$_iter__91440_$_iter__91442(s__91443){
return (new cljs.core.LazySeq(null,((function (s__91441__$1,dx,xs__6385__auto__,temp__5825__auto__,cx,cy,map__91439,map__91439__$1,grid,cell_size){
return (function (){
var s__91443__$1 = s__91443;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__91443__$1);
if(temp__5825__auto____$1){
var s__91443__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__91443__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__91443__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__91445 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__91444 = (0);
while(true){
if((i__91444 < size__5627__auto__)){
var dy = cljs.core._nth(c__5626__auto__,i__91444);
cljs.core.chunk_append(b__91445,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cx + dx))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cy + dy))));

var G__92297 = (i__91444 + (1));
i__91444 = G__92297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91445),frontend$extensions$graph$pixi$hit_test_node_$_iter__91440_$_iter__91442(cljs.core.chunk_rest(s__91443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91445),null);
}
} else {
var dy = cljs.core.first(s__91443__$2);
return cljs.core.cons((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cx + dx))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cy + dy))),frontend$extensions$graph$pixi$hit_test_node_$_iter__91440_$_iter__91442(cljs.core.rest(s__91443__$2)));
}
} else {
return null;
}
break;
}
});})(s__91441__$1,dx,xs__6385__auto__,temp__5825__auto__,cx,cy,map__91439,map__91439__$1,grid,cell_size))
,null,null));
});})(s__91441__$1,dx,xs__6385__auto__,temp__5825__auto__,cx,cy,map__91439,map__91439__$1,grid,cell_size))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$extensions$graph$pixi$hit_test_node_$_iter__91440(cljs.core.rest(s__91441__$1)));
} else {
var G__92298 = cljs.core.rest(s__91441__$1);
s__91441__$1 = G__92298;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})();
var candidates = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__91433_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grid,p1__91433_SHARP_,cljs.core.PersistentVector.EMPTY);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cells], 0));
var max_dist = ((24) / cljs.core.max.cljs$core$IFn$_invoke$arity$2(scale,0.5));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (best,node){
var dx = (world_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node));
var dy = (world_y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node));
var dist = Math.sqrt(((dx * dx) + (dy * dy)));
var threshold = (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(node) + max_dist);
var rank = (function (){var G__91449 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
switch (G__91449) {
case "collapsed":
return (0);

break;
default:
return (1);

}
})();
var best_rank = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(best);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return Number.POSITIVE_INFINITY;
}
})();
var best_dist = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"dist","dist",-1401837144).cljs$core$IFn$_invoke$arity$1(best);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return Number.POSITIVE_INFINITY;
}
})();
if((((dist <= threshold)) && ((((rank < best_rank)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rank,best_rank)) && ((dist < best_dist)))))))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"dist","dist",-1401837144),dist,new cljs.core.Keyword(null,"rank","rank",-1706728502),rank], null);
} else {
return best;
}
}),null,candidates);
});
frontend.extensions.graph.pixi.create_circle_texture = (function frontend$extensions$graph$pixi$create_circle_texture(){
var size = (96);
var radius = (47);
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
(canvas.width = size);

(canvas.height = size);

(ctx.fillStyle = "#ffffff");

ctx.beginPath();

ctx.arc((size / (2)),(size / (2)),radius,(0),((2) * Math.PI));

ctx.fill();

return module$node_modules$pixi_DOT_js$lib$index.Texture.from(canvas);
});
frontend.extensions.graph.pixi.build_label_candidates = (function frontend$extensions$graph$pixi$build_label_candidates(layouted_nodes,view_mode,large_graph_QMARK_){
var view_mode__$1 = frontend.extensions.graph.pixi.normalize_view_mode(view_mode);
var ranked = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node)))?(0):(1)),(- new cljs.core.Keyword(null,"degree","degree",237107028).cljs$core$IFn$_invoke$arity$2(node,(0)))], null);
}),layouted_nodes);
var ranked__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = large_graph_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884));
} else {
return and__5140__auto__;
}
})())?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91452_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91452_SHARP_));
}),ranked):ranked);
var max_labels = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884)))?(1400):(900));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_labels,ranked__$1);
});
frontend.extensions.graph.pixi.world_viewport_rect = (function frontend$extensions$graph$pixi$world_viewport_rect(world,width,height){
var scale = world.scale.x;
var x = world.x;
var y = world.y;
var padding = ((24) / cljs.core.max.cljs$core$IFn$_invoke$arity$2(scale,0.5));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-x","min-x",-1544012261),((((0) - x) / scale) - padding),new cljs.core.Keyword(null,"min-y","min-y",-1969872948),((((0) - y) / scale) - padding),new cljs.core.Keyword(null,"max-x","max-x",1609536425),(((width - x) / scale) + padding),new cljs.core.Keyword(null,"max-y","max-y",1525628082),(((height - y) / scale) + padding)], null);
});
frontend.extensions.graph.pixi.expand_viewport = (function frontend$extensions$graph$pixi$expand_viewport(p__91461,amount){
var map__91462 = p__91461;
var map__91462__$1 = cljs.core.__destructure_map(map__91462);
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91462__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91462__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91462__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91462__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-x","min-x",-1544012261),(min_x - amount),new cljs.core.Keyword(null,"min-y","min-y",-1969872948),(min_y - amount),new cljs.core.Keyword(null,"max-x","max-x",1609536425),(max_x + amount),new cljs.core.Keyword(null,"max-y","max-y",1525628082),(max_y + amount)], null);
});
frontend.extensions.graph.pixi.node_in_viewport_QMARK_ = (function frontend$extensions$graph$pixi$node_in_viewport_QMARK_(p__91463,p__91464){
var map__91466 = p__91463;
var map__91466__$1 = cljs.core.__destructure_map(map__91466);
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91466__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91466__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91466__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91466__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var map__91467 = p__91464;
var map__91467__$1 = cljs.core.__destructure_map(map__91467);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91467__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91467__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91467__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var radius__$1 = (function (){var or__5142__auto__ = radius;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
return (((min_x <= (x + radius__$1))) && (((((x - radius__$1) <= max_x)) && ((((min_y <= (y + radius__$1))) && (((y - radius__$1) <= max_y)))))));
});
frontend.extensions.graph.pixi.render_viewport = (function frontend$extensions$graph$pixi$render_viewport(world,width,height){
var scale = world.scale.x;
return frontend.extensions.graph.pixi.expand_viewport(frontend.extensions.graph.pixi.world_viewport_rect(world,width,height),((220) / cljs.core.max.cljs$core$IFn$_invoke$arity$2(scale,0.5)));
});
frontend.extensions.graph.pixi.screen_point = (function frontend$extensions$graph$pixi$screen_point(world,x,y){
var scale = world.scale.x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((x * scale) + world.x),new cljs.core.Keyword(null,"y","y",-1757859776),((y * scale) + world.y),new cljs.core.Keyword(null,"scale","scale",-230427353),scale], null);
});
frontend.extensions.graph.pixi.tag_focus_name_scale = 0.56;
frontend.extensions.graph.pixi.tag_focus_isolate_scale = 0.92;
frontend.extensions.graph.pixi.tag_focus_objects_scale = 1.28;
frontend.extensions.graph.pixi.tag_focus_max_screen_distance = (180);
frontend.extensions.graph.pixi.tag_object_min_display_count = (28);
frontend.extensions.graph.pixi.tag_object_max_display_count = (220);
frontend.extensions.graph.pixi.tag_object_screen_area_per_node = (1500);
frontend.extensions.graph.pixi.tag_object_grid_columns = (9);
frontend.extensions.graph.pixi.tag_object_grid_rows = (7);
frontend.extensions.graph.pixi.grid_tag_object_max_per_group = (36);
frontend.extensions.graph.pixi.grid_tag_object_max_total = (900);
frontend.extensions.graph.pixi.page_node_scale = 0.72;
frontend.extensions.graph.pixi.edge_label_visible_scale = 0.82;
frontend.extensions.graph.pixi.navigation_idle_ms = (90);
frontend.extensions.graph.pixi.node_transition_speed = 0.22;
frontend.extensions.graph.pixi.tag_focus_level = (function frontend$extensions$graph$pixi$tag_focus_level(scale){
if((scale >= frontend.extensions.graph.pixi.tag_focus_objects_scale)){
return new cljs.core.Keyword(null,"objects","objects",2099713734);
} else {
if((scale >= frontend.extensions.graph.pixi.tag_focus_isolate_scale)){
return new cljs.core.Keyword(null,"isolate","isolate",-446503149);
} else {
if((scale >= frontend.extensions.graph.pixi.tag_focus_name_scale)){
return new cljs.core.Keyword(null,"name","name",1843675177);
} else {
return null;

}
}
}
});
frontend.extensions.graph.pixi.edge_detail_view_mode_QMARK_ = (function frontend$extensions$graph$pixi$edge_detail_view_mode_QMARK_(view_mode){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),null], null), null),view_mode);
});
frontend.extensions.graph.pixi.distance_squared = (function frontend$extensions$graph$pixi$distance_squared(ax,ay,bx,by){
var dx = (ax - bx);
var dy = (ay - by);
return ((dx * dx) + (dy * dy));
});
frontend.extensions.graph.pixi.tag_context_radius = (function frontend$extensions$graph$pixi$tag_context_radius(layout_by_id,tag_id,node_ids){
var tag_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,tag_id);
var center_x = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"cluster-x","cluster-x",-1478034201).cljs$core$IFn$_invoke$arity$1(tag_node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tag_node);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
}
})();
var center_y = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"cluster-y","cluster-y",-1303029675).cljs$core$IFn$_invoke$arity$1(tag_node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tag_node);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(84),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__91473){
var map__91474 = p__91473;
var map__91474__$1 = cljs.core.__destructure_map(map__91474);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91474__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91474__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91474__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return ((Math.sqrt(frontend.extensions.graph.pixi.distance_squared((function (){var or__5142__auto__ = x;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return center_x;
}
})(),(function (){var or__5142__auto__ = y;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return center_y;
}
})(),center_x,center_y)) + (function (){var or__5142__auto__ = radius;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()) + (44));
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__91471_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,p1__91471_SHARP_);
}),node_ids)));
});
frontend.extensions.graph.pixi.tag_object_display_budget = (function frontend$extensions$graph$pixi$tag_object_display_budget(layout_by_id,tag_id,context_node_ids,object_count,scale,width,height){
var screen_radius = (scale * frontend.extensions.graph.pixi.tag_context_radius(layout_by_id,tag_id,context_node_ids));
var viewport_radius = (0.48 * cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),cljs.core.min.cljs$core$IFn$_invoke$arity$2(width,height)));
var effective_radius = cljs.core.max.cljs$core$IFn$_invoke$arity$2(cljs.core.min.cljs$core$IFn$_invoke$arity$2(screen_radius,viewport_radius),(128));
var area = ((Math.PI * effective_radius) * effective_radius);
var budget = Math.floor((area / frontend.extensions.graph.pixi.tag_object_screen_area_per_node));
var budget__$1 = ((12) * Math.ceil((budget / (12))));
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(budget__$1,frontend.extensions.graph.pixi.tag_object_min_display_count),frontend.extensions.graph.pixi.tag_object_max_display_count),object_count);
});
frontend.extensions.graph.pixi.tag_object_grid_cell = (function frontend$extensions$graph$pixi$tag_object_grid_cell(p__91477,node){
var map__91478 = p__91477;
var map__91478__$1 = cljs.core.__destructure_map(map__91478);
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91478__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91478__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91478__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91478__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x_ratio = (((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return min_x;
}
})() - min_x) / width);
var y_ratio = (((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return min_y;
}
})() - min_y) / height);
var col = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(Math.floor((x_ratio * frontend.extensions.graph.pixi.tag_object_grid_columns)),(0)),(frontend.extensions.graph.pixi.tag_object_grid_columns - (1)));
var row = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(Math.floor((y_ratio * frontend.extensions.graph.pixi.tag_object_grid_rows)),(0)),(frontend.extensions.graph.pixi.tag_object_grid_rows - (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
});
frontend.extensions.graph.pixi.balanced_object_node_ids = (function frontend$extensions$graph$pixi$balanced_object_node_ids(layout_by_id,tag_id,object_ids,limit){
var tag_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,tag_id);
var center_x = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"cluster-x","cluster-x",-1478034201).cljs$core$IFn$_invoke$arity$1(tag_node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tag_node);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
}
})();
var center_y = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"cluster-y","cluster-y",-1303029675).cljs$core$IFn$_invoke$arity$1(tag_node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tag_node);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
}
})();
var objects = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,id);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return null;
}
}),object_ids);
var bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (bounds,p__91482){
var map__91483 = p__91482;
var map__91483__$1 = cljs.core.__destructure_map(map__91483);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91483__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91483__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-x","min-x",-1544012261),cljs.core.min.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min-x","min-x",-1544012261).cljs$core$IFn$_invoke$arity$1(bounds),(function (){var or__5142__auto__ = x;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return center_x;
}
})()),new cljs.core.Keyword(null,"min-y","min-y",-1969872948),cljs.core.min.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min-y","min-y",-1969872948).cljs$core$IFn$_invoke$arity$1(bounds),(function (){var or__5142__auto__ = y;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return center_y;
}
})()),new cljs.core.Keyword(null,"max-x","max-x",1609536425),cljs.core.max.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-x","max-x",1609536425).cljs$core$IFn$_invoke$arity$1(bounds),(function (){var or__5142__auto__ = x;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return center_x;
}
})()),new cljs.core.Keyword(null,"max-y","max-y",1525628082),cljs.core.max.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-y","max-y",1525628082).cljs$core$IFn$_invoke$arity$1(bounds),(function (){var or__5142__auto__ = y;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return center_y;
}
})())], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-x","min-x",-1544012261),Infinity,new cljs.core.Keyword(null,"min-y","min-y",-1969872948),Infinity,new cljs.core.Keyword(null,"max-x","max-x",1609536425),-Infinity,new cljs.core.Keyword(null,"max-y","max-y",1525628082),-Infinity], null),objects);
var bounds__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(bounds,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),(new cljs.core.Keyword(null,"max-x","max-x",1609536425).cljs$core$IFn$_invoke$arity$1(bounds) - new cljs.core.Keyword(null,"min-x","min-x",-1544012261).cljs$core$IFn$_invoke$arity$1(bounds))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),(new cljs.core.Keyword(null,"max-y","max-y",1525628082).cljs$core$IFn$_invoke$arity$1(bounds) - new cljs.core.Keyword(null,"min-y","min-y",-1969872948).cljs$core$IFn$_invoke$arity$1(bounds)))], 0));
var buckets = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__91484){
var vec__91485 = p__91484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91485,(0),null);
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91485,(1),null);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rank","rank",-1706728502),entries);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(new cljs.core.Keyword(null,"cell","cell",764245084),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"cell","cell",764245084),frontend.extensions.graph.pixi.tag_object_grid_cell(bounds__$1,node),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.graph.pixi.distance_squared((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return center_x;
}
})(),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return center_y;
}
})(),center_x,center_y),(- (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"degree","degree",237107028).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node)))], null)], null);
}),objects))));
var buckets__$1 = buckets;
var selected = cljs.core.PersistentVector.EMPTY;
while(true){
if((((cljs.core.count(selected) >= limit)) || (cljs.core.every_QMARK_(cljs.core.empty_QMARK_,buckets__$1)))){
return cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,selected));
} else {
var vec__91501 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (buckets__$1,selected,tag_node,center_x,center_y,objects,bounds,bounds__$1,buckets){
return (function (p__91504,bucket){
var vec__91505 = p__91504;
var next_buckets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91505,(0),null);
var selected__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91505,(1),null);
if(((cljs.core.empty_QMARK_(bucket)) || ((cljs.core.count(selected__$1) >= limit)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_buckets,bucket),selected__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_buckets,cljs.core.rest(bucket)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(bucket)))], null);
}
});})(buckets__$1,selected,tag_node,center_x,center_y,objects,bounds,bounds__$1,buckets))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,selected], null),buckets__$1);
var next_buckets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91501,(0),null);
var next_selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91501,(1),null);
var G__92314 = next_buckets;
var G__92315 = next_selected;
buckets__$1 = G__92314;
selected = G__92315;
continue;
}
break;
}
});
frontend.extensions.graph.pixi.grid_layout_display_node_ids = (function frontend$extensions$graph$pixi$grid_layout_display_node_ids(nodes,visible_node_ids_STAR_){
var visible_nodes_SINGLEQUOTE_ = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91508_SHARP_){
return (frontend.extensions.graph.pixi.visible_node_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.extensions.graph.pixi.visible_node_QMARK_.cljs$core$IFn$_invoke$arity$2(visible_node_ids_STAR_,p1__91508_SHARP_) : frontend.extensions.graph.pixi.visible_node_QMARK_.call(null,visible_node_ids_STAR_,p1__91508_SHARP_));
}),nodes);
var tag_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91509_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91509_SHARP_));
}),visible_nodes_SINGLEQUOTE_)));
var object_groups = cljs.core.group_by(new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91510_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"grid-object?","grid-object?",-933862505).cljs$core$IFn$_invoke$arity$1(p1__91510_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(tag_ids,new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593).cljs$core$IFn$_invoke$arity$1(p1__91510_SHARP_));
} else {
return and__5140__auto__;
}
}),visible_nodes_SINGLEQUOTE_));
var tag_count = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(tag_ids));
var per_group_limit = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(Math.floor((frontend.extensions.graph.pixi.grid_tag_object_max_total / tag_count)),(8)),frontend.extensions.graph.pixi.grid_tag_object_max_per_group);
var object_ids = cljs.core.take.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.grid_tag_object_max_total,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__91513){
var vec__91514 = p__91513;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91514,(0),null);
var nodes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91514,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_group_limit,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__91511_SHARP_){
return (- (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"degree","degree",237107028).cljs$core$IFn$_invoke$arity$1(p1__91511_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})());
}),(function (p1__91512_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91512_SHARP_)));
})),nodes__$1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,object_groups)], 0)));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(tag_ids,cljs.core.set(object_ids));
});
frontend.extensions.graph.pixi.nearest_indexed_node_id = (function frontend$extensions$graph$pixi$nearest_indexed_node_id(p__91520,world_x,world_y,scale,max_screen_distance){
var map__91521 = p__91520;
var map__91521__$1 = cljs.core.__destructure_map(map__91521);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91521__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91521__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
if(cljs.core.truth_((function (){var and__5140__auto__ = grid;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cell_size;
if(cljs.core.truth_(and__5140__auto____$1)){
return (scale > (0));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var world_radius = (max_screen_distance / scale);
var cell_radius = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(Math.ceil((world_radius / cell_size)),(1)),(18));
var cx = Math.floor((world_x / cell_size));
var cy = Math.floor((world_y / cell_size));
var max_dist_sq = (max_screen_distance * max_screen_distance);
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (best,node){
var dx = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node) - world_x) * scale);
var dy = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node) - world_y) * scale);
var dist_sq = ((dx * dx) + (dy * dy));
var best_dist_sq = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"dist-sq","dist-sq",-1822801405).cljs$core$IFn$_invoke$arity$1(best);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return Number.POSITIVE_INFINITY;
}
})();
if((((dist_sq <= max_dist_sq)) && ((dist_sq < best_dist_sq)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"dist-sq","dist-sq",-1822801405),dist_sq);
} else {
return best;
}
}),null,(function (){var iter__5628__auto__ = (function frontend$extensions$graph$pixi$nearest_indexed_node_id_$_iter__91522(s__91523){
return (new cljs.core.LazySeq(null,(function (){
var s__91523__$1 = s__91523;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__91523__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var dx = cljs.core.first(xs__6385__auto__);
var iterys__5624__auto__ = ((function (s__91523__$1,dx,xs__6385__auto__,temp__5825__auto__,world_radius,cell_radius,cx,cy,max_dist_sq,map__91521,map__91521__$1,grid,cell_size){
return (function frontend$extensions$graph$pixi$nearest_indexed_node_id_$_iter__91522_$_iter__91524(s__91525){
return (new cljs.core.LazySeq(null,((function (s__91523__$1,dx,xs__6385__auto__,temp__5825__auto__,world_radius,cell_radius,cx,cy,max_dist_sq,map__91521,map__91521__$1,grid,cell_size){
return (function (){
var s__91525__$1 = s__91525;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__91525__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var dy = cljs.core.first(xs__6385__auto____$1);
var iterys__5624__auto__ = ((function (s__91525__$1,s__91523__$1,dy,xs__6385__auto____$1,temp__5825__auto____$1,dx,xs__6385__auto__,temp__5825__auto__,world_radius,cell_radius,cx,cy,max_dist_sq,map__91521,map__91521__$1,grid,cell_size){
return (function frontend$extensions$graph$pixi$nearest_indexed_node_id_$_iter__91522_$_iter__91524_$_iter__91526(s__91527){
return (new cljs.core.LazySeq(null,((function (s__91525__$1,s__91523__$1,dy,xs__6385__auto____$1,temp__5825__auto____$1,dx,xs__6385__auto__,temp__5825__auto__,world_radius,cell_radius,cx,cy,max_dist_sq,map__91521,map__91521__$1,grid,cell_size){
return (function (){
var s__91527__$1 = s__91527;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__91527__$1);
if(temp__5825__auto____$2){
var s__91527__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__91527__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__91527__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__91529 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__91528 = (0);
while(true){
if((i__91528 < size__5627__auto__)){
var node = cljs.core._nth(c__5626__auto__,i__91528);
cljs.core.chunk_append(b__91529,node);

var G__92320 = (i__91528 + (1));
i__91528 = G__92320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91529),frontend$extensions$graph$pixi$nearest_indexed_node_id_$_iter__91522_$_iter__91524_$_iter__91526(cljs.core.chunk_rest(s__91527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91529),null);
}
} else {
var node = cljs.core.first(s__91527__$2);
return cljs.core.cons(node,frontend$extensions$graph$pixi$nearest_indexed_node_id_$_iter__91522_$_iter__91524_$_iter__91526(cljs.core.rest(s__91527__$2)));
}
} else {
return null;
}
break;
}
});})(s__91525__$1,s__91523__$1,dy,xs__6385__auto____$1,temp__5825__auto____$1,dx,xs__6385__auto__,temp__5825__auto__,world_radius,cell_radius,cx,cy,max_dist_sq,map__91521,map__91521__$1,grid,cell_size))
,null,null));
});})(s__91525__$1,s__91523__$1,dy,xs__6385__auto____$1,temp__5825__auto____$1,dx,xs__6385__auto__,temp__5825__auto__,world_radius,cell_radius,cx,cy,max_dist_sq,map__91521,map__91521__$1,grid,cell_size))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cx + dx))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cy + dy))))));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$extensions$graph$pixi$nearest_indexed_node_id_$_iter__91522_$_iter__91524(cljs.core.rest(s__91525__$1)));
} else {
var G__92321 = cljs.core.rest(s__91525__$1);
s__91525__$1 = G__92321;
continue;
}
} else {
return null;
}
break;
}
});})(s__91523__$1,dx,xs__6385__auto__,temp__5825__auto__,world_radius,cell_radius,cx,cy,max_dist_sq,map__91521,map__91521__$1,grid,cell_size))
,null,null));
});})(s__91523__$1,dx,xs__6385__auto__,temp__5825__auto__,world_radius,cell_radius,cx,cy,max_dist_sq,map__91521,map__91521__$1,grid,cell_size))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- cell_radius),(cell_radius + (1)))));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$extensions$graph$pixi$nearest_indexed_node_id_$_iter__91522(cljs.core.rest(s__91523__$1)));
} else {
var G__92322 = cljs.core.rest(s__91523__$1);
s__91523__$1 = G__92322;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- cell_radius),(cell_radius + (1))));
})()));
} else {
return null;
}
});
frontend.extensions.graph.pixi.distinct_nodes_by_id = (function frontend$extensions$graph$pixi$distinct_nodes_by_id(nodes){
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__91530,node){
var vec__91531 = p__91530;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91531,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91531,(1),null);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.contains_QMARK_(seen,id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,result], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,id),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,node)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),nodes));
});
frontend.extensions.graph.pixi.create_label_manager_BANG_ = (function frontend$extensions$graph$pixi$create_label_manager_BANG_(label_parent,dark_QMARK_,candidate_node_ids,get_node_by_id){
var label_layer = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var style = (new module$node_modules$pixi_DOT_js$lib$index.TextStyle(({"fontFamily": "Inter, Avenir Next, system-ui, sans-serif", "fontSize": (11), "fill": frontend.extensions.graph.pixi.label_color(dark_QMARK_), "alpha": 0.98})));
var bg_color = frontend.extensions.graph.pixi.color__GT_int((cljs.core.truth_(dark_QMARK_)?"#123F49":"#FFFFFF"));
var border_color = frontend.extensions.graph.pixi.color__GT_int((cljs.core.truth_(dark_QMARK_)?"#5E7D88":"#CBD5E1"));
var entry_by_id_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var visible_ids_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var position_entry_BANG_ = (function (world,id,hovered_node_id,focused_node_id){
var temp__5825__auto__ = (get_node_by_id.cljs$core$IFn$_invoke$arity$1 ? get_node_by_id.cljs$core$IFn$_invoke$arity$1(id) : get_node_by_id.call(null,id));
if(cljs.core.truth_(temp__5825__auto__)){
var map__91541 = temp__5825__auto__;
var map__91541__$1 = cljs.core.__destructure_map(map__91541);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91541__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91541__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91541__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91541__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var temp__5825__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entry_by_id_STAR_),id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var entry = temp__5825__auto____$1;
var text_node = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(entry);
var container_node = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(entry);
var scale = world.scale.x;
var tag_label_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",kind);
var inverse_scale = ((1) / cljs.core.max.cljs$core$IFn$_invoke$arity$2(scale,1.0E-4));
var hovered_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,hovered_node_id);
var focused_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focused_node_id);
var title_scale = ((hovered_QMARK_)?1.22:((focused_QMARK_)?1.16:((tag_label_QMARK_)?1.08:1.0
)));
var label_scale = (title_scale * inverse_scale);
var label_width = (text_node.width + (8));
var label_height = (text_node.height + (4));
var label_world_width = (label_width * label_scale);
var label_world_height = (label_height * label_scale);
(text_node.x = (1));

(text_node.y = (0));

(container_node.scale.x = label_scale);

(container_node.scale.y = label_scale);

if(tag_label_QMARK_){
(container_node.x = (x - (label_world_width / (2))));

return (container_node.y = (y - (label_world_height / (2))));
} else {
(container_node.x = ((x + radius) + (8)));

return (container_node.y = (y - (label_world_height / (2))));
}
} else {
return null;
}
} else {
return null;
}
});
(label_layer.alpha = (0));

(label_layer.visible = false);

label_parent.addChild(label_layer);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container","container",-1736937707),label_layer,new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (world,width,height,hovered_node_id,p__91542){
var map__91543 = p__91542;
var map__91543__$1 = cljs.core.__destructure_map(map__91543);
var focused_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91543__$1,new cljs.core.Keyword(null,"focused-node-ids","focused-node-ids",-417685702),cljs.core.PersistentHashSet.EMPTY);
var focused_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91543__$1,new cljs.core.Keyword(null,"focused-only?","focused-only?",501797403),false);
var active_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91543__$1,new cljs.core.Keyword(null,"active-only?","active-only?",-1370362401),false);
var selected_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91543__$1,new cljs.core.Keyword(null,"selected-node-ids","selected-node-ids",-1282933857),cljs.core.PersistentHashSet.EMPTY);
var active_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91543__$1,new cljs.core.Keyword(null,"active-node-ids","active-node-ids",-398210751),cljs.core.PersistentHashSet.EMPTY);
var focused_node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91543__$1,new cljs.core.Keyword(null,"focused-node-id","focused-node-id",1658701319));
var selected_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91543__$1,new cljs.core.Keyword(null,"selected-only?","selected-only?",-1810718071),false);
var node_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91543__$1,new cljs.core.Keyword(null,"node-visible?","node-visible?",-202013520));
var hovered_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91543__$1,new cljs.core.Keyword(null,"hovered-only?","hovered-only?",-501227248),false);
var node_visible_QMARK___$1 = (function (){var or__5142__auto__ = node_visible_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var scale = world.scale.x;
var viewport = frontend.extensions.graph.pixi.world_viewport_rect(world,width,height);
var transform = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),scale,new cljs.core.Keyword(null,"x","x",2099068185),world.x,new cljs.core.Keyword(null,"y","y",-1757859776),world.y], null);
var base_candidates = (cljs.core.truth_(focused_only_QMARK_)?cljs.core.PersistentVector.EMPTY:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(node_visible_QMARK___$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(get_node_by_id,candidate_node_ids)));
var active_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(node_visible_QMARK___$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(get_node_by_id,active_node_ids));
var focused_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(node_visible_QMARK___$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(get_node_by_id,focused_node_ids));
var selected_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(node_visible_QMARK___$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(get_node_by_id,selected_node_ids));
var hovered_node = (cljs.core.truth_(hovered_node_id)?(get_node_by_id.cljs$core$IFn$_invoke$arity$1 ? get_node_by_id.cljs$core$IFn$_invoke$arity$1(hovered_node_id) : get_node_by_id.call(null,hovered_node_id)):null);
var hovered_node__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = hovered_node;
if(cljs.core.truth_(and__5140__auto__)){
return (node_visible_QMARK___$1.cljs$core$IFn$_invoke$arity$1 ? node_visible_QMARK___$1.cljs$core$IFn$_invoke$arity$1(hovered_node) : node_visible_QMARK___$1.call(null,hovered_node));
} else {
return and__5140__auto__;
}
})())?hovered_node:null);
var candidates = frontend.extensions.graph.pixi.distinct_nodes_by_id((function (){var G__91544 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(base_candidates,active_nodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([focused_nodes], 0)));
if(cljs.core.truth_(hovered_node__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91544,hovered_node__$1);
} else {
return G__91544;
}
})());
var candidate_id_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),candidates));
var label_selection_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"viewport","viewport",443342715),viewport,new cljs.core.Keyword(null,"transform","transform",1381301764),transform,new cljs.core.Keyword(null,"screen-cell-width","screen-cell-width",-606503894),(140),new cljs.core.Keyword(null,"screen-cell-height","screen-cell-height",-1827389973),(26),new cljs.core.Keyword(null,"max-labels","max-labels",-1374849380),(((scale > 2.1))?(240):(170))], null);
var base_label_ids = frontend.extensions.graph.pixi.logic.select_label_node_ids(candidates,label_selection_opts);
var focused_label_ids = (cljs.core.truth_((function (){var and__5140__auto__ = focused_node_id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(candidate_id_set,focused_node_id);
} else {
return and__5140__auto__;
}
})())?frontend.extensions.graph.pixi.logic.select_scoped_label_node_ids(focused_nodes,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(label_selection_opts,new cljs.core.Keyword(null,"pinned-node-ids","pinned-node-ids",551099745),cljs.core.PersistentHashSet.createAsIfByAssoc([focused_node_id]))):null);
var selected_label_ids = frontend.extensions.graph.pixi.logic.select_scoped_label_node_ids(selected_nodes,label_selection_opts);
var active_label_ids = frontend.extensions.graph.pixi.logic.select_scoped_label_node_ids(active_nodes,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(label_selection_opts,new cljs.core.Keyword(null,"pinned-node-ids","pinned-node-ids",551099745),(function (){var G__91545 = cljs.core.set(selected_node_ids);
if(cljs.core.truth_(hovered_node_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91545,hovered_node_id);
} else {
return G__91545;
}
})()));
var label_ids = (cljs.core.truth_(selected_only_QMARK_)?(function (){var G__91546 = cljs.core.vec(selected_label_ids);
if(cljs.core.truth_((function (){var and__5140__auto__ = hovered_node_id;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.contains_QMARK_(candidate_id_set,hovered_node_id)) && (cljs.core.not(cljs.core.some((function (p1__91535_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hovered_node_id,p1__91535_SHARP_);
}),selected_label_ids))));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91546,hovered_node_id);
} else {
return G__91546;
}
})():(cljs.core.truth_(active_only_QMARK_)?(function (){var G__91547 = cljs.core.vec(active_label_ids);
if(cljs.core.truth_((function (){var and__5140__auto__ = hovered_node_id;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.contains_QMARK_(candidate_id_set,hovered_node_id)) && (cljs.core.not(cljs.core.some((function (p1__91536_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hovered_node_id,p1__91536_SHARP_);
}),active_label_ids))));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91547,hovered_node_id);
} else {
return G__91547;
}
})():(cljs.core.truth_((function (){var and__5140__auto__ = hovered_only_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = hovered_node_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.contains_QMARK_(candidate_id_set,hovered_node_id);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hovered_node_id], null):(cljs.core.truth_((function (){var and__5140__auto__ = hovered_node_id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(candidate_id_set,hovered_node_id);
} else {
return and__5140__auto__;
}
})())?cljs.core.cons(hovered_node_id,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__91537_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hovered_node_id,p1__91537_SHARP_);
}),(function (){var or__5142__auto__ = focused_label_ids;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return base_label_ids;
}
})())):(cljs.core.truth_(focused_label_ids)?focused_label_ids:base_label_ids
)))));
var label_id_set = cljs.core.set(label_ids);
var seq__91548_92328 = cljs.core.seq(label_ids);
var chunk__91549_92329 = null;
var count__91550_92330 = (0);
var i__91551_92331 = (0);
while(true){
if((i__91551_92331 < count__91550_92330)){
var id_92332 = chunk__91549_92329.cljs$core$IIndexed$_nth$arity$2(null,i__91551_92331);
var temp__5825__auto___92333 = (get_node_by_id.cljs$core$IFn$_invoke$arity$1 ? get_node_by_id.cljs$core$IFn$_invoke$arity$1(id_92332) : get_node_by_id.call(null,id_92332));
if(cljs.core.truth_(temp__5825__auto___92333)){
var map__91554_92334 = temp__5825__auto___92333;
var map__91554_92335__$1 = cljs.core.__destructure_map(map__91554_92334);
var label_92336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91554_92335__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var entry_92337 = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entry_by_id_STAR_),id_92332);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var entry_container = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var bg = (new module$node_modules$pixi_DOT_js$lib$index.Graphics());
var text = (new module$node_modules$pixi_DOT_js$lib$index.Text(({"text": "", "style": style})));
entry_container.addChild(bg);

entry_container.addChild(text);

label_layer.addChild(entry_container);

var entry_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),entry_container,new cljs.core.Keyword(null,"background","background",-863952629),bg,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"hovered?","hovered?",-540460631),false], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entry_by_id_STAR_,cljs.core.assoc,id_92332,entry_STAR_);

return entry_STAR_;
}
})();
var hovered_QMARK__92338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_92332,hovered_node_id);
var text_node_92339 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(entry_92337);
var bg_node_92340 = new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(entry_92337);
var container_node_92341 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(entry_92337);
var focused_QMARK__92342 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_92332,focused_node_id);
var full_label_QMARK__92343 = ((hovered_QMARK__92338) || (focused_QMARK__92342));
var display_text_92344 = frontend.extensions.graph.pixi.logic.label_display_text(label_92336,full_label_QMARK__92343);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(display_text_92344,text_node_92339.text)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(full_label_QMARK__92343,new cljs.core.Keyword(null,"hovered?","hovered?",-540460631).cljs$core$IFn$_invoke$arity$1(entry_92337))))){
(text_node_92339.text = display_text_92344);

bg_node_92340.clear();

bg_node_92340.roundRect((-3),(-2),(text_node_92339.width + (8)),(text_node_92339.height + (4)),(4));

bg_node_92340.fill(({"color": bg_color, "alpha": ((full_label_QMARK__92343)?0.88:0.68)}));

bg_node_92340.setStrokeStyle(({"width": (1), "color": border_color, "alpha": ((full_label_QMARK__92343)?0.36:0.18)}));

bg_node_92340.stroke();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entry_by_id_STAR_,cljs.core.assoc,id_92332,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry_92337,new cljs.core.Keyword(null,"hovered?","hovered?",-540460631),full_label_QMARK__92343));
} else {
}

position_entry_BANG_(world,id_92332,hovered_node_id,focused_node_id);

if(hovered_QMARK__92338){
label_layer.setChildIndex(container_node_92341,(label_layer.children.length - (1)));

(container_node_92341.alpha = (1));
} else {
}

(container_node_92341.visible = true);
} else {
}


var G__92349 = seq__91548_92328;
var G__92350 = chunk__91549_92329;
var G__92351 = count__91550_92330;
var G__92352 = (i__91551_92331 + (1));
seq__91548_92328 = G__92349;
chunk__91549_92329 = G__92350;
count__91550_92330 = G__92351;
i__91551_92331 = G__92352;
continue;
} else {
var temp__5825__auto___92353 = cljs.core.seq(seq__91548_92328);
if(temp__5825__auto___92353){
var seq__91548_92354__$1 = temp__5825__auto___92353;
if(cljs.core.chunked_seq_QMARK_(seq__91548_92354__$1)){
var c__5673__auto___92355 = cljs.core.chunk_first(seq__91548_92354__$1);
var G__92356 = cljs.core.chunk_rest(seq__91548_92354__$1);
var G__92357 = c__5673__auto___92355;
var G__92358 = cljs.core.count(c__5673__auto___92355);
var G__92359 = (0);
seq__91548_92328 = G__92356;
chunk__91549_92329 = G__92357;
count__91550_92330 = G__92358;
i__91551_92331 = G__92359;
continue;
} else {
var id_92360 = cljs.core.first(seq__91548_92354__$1);
var temp__5825__auto___92361__$1 = (get_node_by_id.cljs$core$IFn$_invoke$arity$1 ? get_node_by_id.cljs$core$IFn$_invoke$arity$1(id_92360) : get_node_by_id.call(null,id_92360));
if(cljs.core.truth_(temp__5825__auto___92361__$1)){
var map__91555_92362 = temp__5825__auto___92361__$1;
var map__91555_92363__$1 = cljs.core.__destructure_map(map__91555_92362);
var label_92364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91555_92363__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var entry_92365 = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entry_by_id_STAR_),id_92360);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var entry_container = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var bg = (new module$node_modules$pixi_DOT_js$lib$index.Graphics());
var text = (new module$node_modules$pixi_DOT_js$lib$index.Text(({"text": "", "style": style})));
entry_container.addChild(bg);

entry_container.addChild(text);

label_layer.addChild(entry_container);

var entry_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),entry_container,new cljs.core.Keyword(null,"background","background",-863952629),bg,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"hovered?","hovered?",-540460631),false], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entry_by_id_STAR_,cljs.core.assoc,id_92360,entry_STAR_);

return entry_STAR_;
}
})();
var hovered_QMARK__92366 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_92360,hovered_node_id);
var text_node_92367 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(entry_92365);
var bg_node_92368 = new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(entry_92365);
var container_node_92369 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(entry_92365);
var focused_QMARK__92370 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_92360,focused_node_id);
var full_label_QMARK__92371 = ((hovered_QMARK__92366) || (focused_QMARK__92370));
var display_text_92372 = frontend.extensions.graph.pixi.logic.label_display_text(label_92364,full_label_QMARK__92371);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(display_text_92372,text_node_92367.text)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(full_label_QMARK__92371,new cljs.core.Keyword(null,"hovered?","hovered?",-540460631).cljs$core$IFn$_invoke$arity$1(entry_92365))))){
(text_node_92367.text = display_text_92372);

bg_node_92368.clear();

bg_node_92368.roundRect((-3),(-2),(text_node_92367.width + (8)),(text_node_92367.height + (4)),(4));

bg_node_92368.fill(({"color": bg_color, "alpha": ((full_label_QMARK__92371)?0.88:0.68)}));

bg_node_92368.setStrokeStyle(({"width": (1), "color": border_color, "alpha": ((full_label_QMARK__92371)?0.36:0.18)}));

bg_node_92368.stroke();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entry_by_id_STAR_,cljs.core.assoc,id_92360,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry_92365,new cljs.core.Keyword(null,"hovered?","hovered?",-540460631),full_label_QMARK__92371));
} else {
}

position_entry_BANG_(world,id_92360,hovered_node_id,focused_node_id);

if(hovered_QMARK__92366){
label_layer.setChildIndex(container_node_92369,(label_layer.children.length - (1)));

(container_node_92369.alpha = (1));
} else {
}

(container_node_92369.visible = true);
} else {
}


var G__92377 = cljs.core.next(seq__91548_92354__$1);
var G__92378 = null;
var G__92379 = (0);
var G__92380 = (0);
seq__91548_92328 = G__92377;
chunk__91549_92329 = G__92378;
count__91550_92330 = G__92379;
i__91551_92331 = G__92380;
continue;
}
} else {
}
}
break;
}

var seq__91556_92381 = cljs.core.seq(cljs.core.deref(visible_ids_STAR_));
var chunk__91557_92382 = null;
var count__91558_92383 = (0);
var i__91559_92384 = (0);
while(true){
if((i__91559_92384 < count__91558_92383)){
var id_92385 = chunk__91557_92382.cljs$core$IIndexed$_nth$arity$2(null,i__91559_92384);
if(cljs.core.contains_QMARK_(label_id_set,id_92385)){
} else {
var temp__5825__auto___92386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entry_by_id_STAR_),id_92385);
if(cljs.core.truth_(temp__5825__auto___92386)){
var entry_92387 = temp__5825__auto___92386;
(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(entry_92387).visible = false);
} else {
}
}


var G__92388 = seq__91556_92381;
var G__92389 = chunk__91557_92382;
var G__92390 = count__91558_92383;
var G__92391 = (i__91559_92384 + (1));
seq__91556_92381 = G__92388;
chunk__91557_92382 = G__92389;
count__91558_92383 = G__92390;
i__91559_92384 = G__92391;
continue;
} else {
var temp__5825__auto___92392 = cljs.core.seq(seq__91556_92381);
if(temp__5825__auto___92392){
var seq__91556_92393__$1 = temp__5825__auto___92392;
if(cljs.core.chunked_seq_QMARK_(seq__91556_92393__$1)){
var c__5673__auto___92394 = cljs.core.chunk_first(seq__91556_92393__$1);
var G__92395 = cljs.core.chunk_rest(seq__91556_92393__$1);
var G__92396 = c__5673__auto___92394;
var G__92397 = cljs.core.count(c__5673__auto___92394);
var G__92398 = (0);
seq__91556_92381 = G__92395;
chunk__91557_92382 = G__92396;
count__91558_92383 = G__92397;
i__91559_92384 = G__92398;
continue;
} else {
var id_92399 = cljs.core.first(seq__91556_92393__$1);
if(cljs.core.contains_QMARK_(label_id_set,id_92399)){
} else {
var temp__5825__auto___92400__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entry_by_id_STAR_),id_92399);
if(cljs.core.truth_(temp__5825__auto___92400__$1)){
var entry_92401 = temp__5825__auto___92400__$1;
(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(entry_92401).visible = false);
} else {
}
}


var G__92402 = cljs.core.next(seq__91556_92393__$1);
var G__92403 = null;
var G__92404 = (0);
var G__92405 = (0);
seq__91556_92381 = G__92402;
chunk__91557_92382 = G__92403;
count__91558_92383 = G__92404;
i__91559_92384 = G__92405;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(visible_ids_STAR_,label_id_set);
}),new cljs.core.Keyword(null,"sync-transform!","sync-transform!",347099875),(function (world,hovered_node_id,focused_node_id){
var seq__91560 = cljs.core.seq(cljs.core.deref(visible_ids_STAR_));
var chunk__91561 = null;
var count__91562 = (0);
var i__91563 = (0);
while(true){
if((i__91563 < count__91562)){
var id = chunk__91561.cljs$core$IIndexed$_nth$arity$2(null,i__91563);
position_entry_BANG_(world,id,hovered_node_id,focused_node_id);


var G__92406 = seq__91560;
var G__92407 = chunk__91561;
var G__92408 = count__91562;
var G__92409 = (i__91563 + (1));
seq__91560 = G__92406;
chunk__91561 = G__92407;
count__91562 = G__92408;
i__91563 = G__92409;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__91560);
if(temp__5825__auto__){
var seq__91560__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91560__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__91560__$1);
var G__92410 = cljs.core.chunk_rest(seq__91560__$1);
var G__92411 = c__5673__auto__;
var G__92412 = cljs.core.count(c__5673__auto__);
var G__92413 = (0);
seq__91560 = G__92410;
chunk__91561 = G__92411;
count__91562 = G__92412;
i__91563 = G__92413;
continue;
} else {
var id = cljs.core.first(seq__91560__$1);
position_entry_BANG_(world,id,hovered_node_id,focused_node_id);


var G__92414 = cljs.core.next(seq__91560__$1);
var G__92415 = null;
var G__92416 = (0);
var G__92417 = (0);
seq__91560 = G__92414;
chunk__91561 = G__92415;
count__91562 = G__92416;
i__91563 = G__92417;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"has-visible-labels?","has-visible-labels?",-2102770242),(function (){
return cljs.core.seq(cljs.core.deref(visible_ids_STAR_));
}),new cljs.core.Keyword(null,"destroy!","destroy!",2116525762),(function (){
var seq__91564_92424 = cljs.core.seq(cljs.core.deref(entry_by_id_STAR_));
var chunk__91565_92425 = null;
var count__91566_92426 = (0);
var i__91567_92427 = (0);
while(true){
if((i__91567_92427 < count__91566_92426)){
var vec__91576_92428 = chunk__91565_92425.cljs$core$IIndexed$_nth$arity$2(null,i__91567_92427);
var __92429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91576_92428,(0),null);
var map__91579_92430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91576_92428,(1),null);
var map__91579_92431__$1 = cljs.core.__destructure_map(map__91579_92430);
var container_92432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91579_92431__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
container_92432.destroy();


var G__92436 = seq__91564_92424;
var G__92437 = chunk__91565_92425;
var G__92438 = count__91566_92426;
var G__92439 = (i__91567_92427 + (1));
seq__91564_92424 = G__92436;
chunk__91565_92425 = G__92437;
count__91566_92426 = G__92438;
i__91567_92427 = G__92439;
continue;
} else {
var temp__5825__auto___92440 = cljs.core.seq(seq__91564_92424);
if(temp__5825__auto___92440){
var seq__91564_92441__$1 = temp__5825__auto___92440;
if(cljs.core.chunked_seq_QMARK_(seq__91564_92441__$1)){
var c__5673__auto___92444 = cljs.core.chunk_first(seq__91564_92441__$1);
var G__92445 = cljs.core.chunk_rest(seq__91564_92441__$1);
var G__92446 = c__5673__auto___92444;
var G__92447 = cljs.core.count(c__5673__auto___92444);
var G__92448 = (0);
seq__91564_92424 = G__92445;
chunk__91565_92425 = G__92446;
count__91566_92426 = G__92447;
i__91567_92427 = G__92448;
continue;
} else {
var vec__91580_92450 = cljs.core.first(seq__91564_92441__$1);
var __92451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91580_92450,(0),null);
var map__91583_92452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91580_92450,(1),null);
var map__91583_92453__$1 = cljs.core.__destructure_map(map__91583_92452);
var container_92454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91583_92453__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
container_92454.destroy();


var G__92455 = cljs.core.next(seq__91564_92441__$1);
var G__92456 = null;
var G__92457 = (0);
var G__92458 = (0);
seq__91564_92424 = G__92455;
chunk__91565_92425 = G__92456;
count__91566_92426 = G__92457;
i__91567_92427 = G__92458;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(entry_by_id_STAR_,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_(visible_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);
})], null);
});
frontend.extensions.graph.pixi.edge_alpha = (function frontend$extensions$graph$pixi$edge_alpha(p__91584,p__91585){
var map__91586 = p__91584;
var map__91586__$1 = cljs.core.__destructure_map(map__91586);
var selected_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91586__$1,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141));
var active_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91586__$1,new cljs.core.Keyword(null,"active-ids","active-ids",-958452414));
var select_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91586__$1,new cljs.core.Keyword(null,"select-mode?","select-mode?",625202898));
var map__91587 = p__91585;
var map__91587__$1 = cljs.core.__destructure_map(map__91587);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91587__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91587__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not(select_mode_QMARK_)){
return 0.54;
} else {
if(((((cljs.core.contains_QMARK_(selected_ids,source)) && (cljs.core.contains_QMARK_(active_ids,target)))) || (((cljs.core.contains_QMARK_(selected_ids,target)) && (cljs.core.contains_QMARK_(active_ids,source)))))){
return 0.82;
} else {
if(((cljs.core.contains_QMARK_(active_ids,source)) && (cljs.core.contains_QMARK_(active_ids,target)))){
return 0.46;
} else {
return 0.18;

}
}
}
});
frontend.extensions.graph.pixi.edge_stroke_width = (function frontend$extensions$graph$pixi$edge_stroke_width(_type,select_mode_QMARK_){
if(cljs.core.truth_(select_mode_QMARK_)){
return 1.25;
} else {
return (1);
}
});
frontend.extensions.graph.pixi.edge_curve_offset = (function frontend$extensions$graph$pixi$edge_curve_offset(_type){
return (0);
});
frontend.extensions.graph.pixi.edge_label_display_scale = (function frontend$extensions$graph$pixi$edge_label_display_scale(world_scale){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(((1) + (0.16 * (cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),world_scale) - (1)))),(1)),1.42);
});
frontend.extensions.graph.pixi.edge_label_gap_width = (function frontend$extensions$graph$pixi$edge_label_gap_width(label){
var label__$1 = frontend.extensions.graph.pixi.logic.label_display_text(label,false);
var width = ((8) + (3.2 * cljs.core.count(label__$1)));
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(width,(20)),(72));
});
frontend.extensions.graph.pixi.edge_segment = (function frontend$extensions$graph$pixi$edge_segment(from_node,to_node,parallel_offset){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_node) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_node));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_node) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_node));
var distance = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),Math.sqrt(((dx * dx) + (dy * dy))));
var ux = (dx / distance);
var uy = (dy / distance);
var normal_x = (- uy);
var normal_y = ux;
var line_offset = ((function (){var or__5142__auto__ = parallel_offset;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() * (5));
var start_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_node) + (ux * (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$2(from_node,(0)) + (3)))) + (normal_x * line_offset));
var start_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_node) + (uy * (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$2(from_node,(0)) + (3)))) + (normal_y * line_offset));
var end_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_node) - (ux * (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$2(to_node,(0)) + (5)))) + (normal_x * line_offset));
var end_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_node) - (uy * (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$2(to_node,(0)) + (5)))) + (normal_y * line_offset));
var segment_dx = (end_x - start_x);
var segment_dy = (end_y - start_y);
var segment_distance = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),Math.sqrt(((segment_dx * segment_dx) + (segment_dy * segment_dy))));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"segment-distance","segment-distance",-1943612158),new cljs.core.Keyword(null,"start-x","start-x",-193941684),new cljs.core.Keyword(null,"end-y","end-y",859881965),new cljs.core.Keyword(null,"ux","ux",-422693584),new cljs.core.Keyword(null,"uy","uy",2081831409),new cljs.core.Keyword(null,"end-x","end-x",-1323983821),new cljs.core.Keyword(null,"mid-x","mid-x",-1079680749),new cljs.core.Keyword(null,"mid-y","mid-y",-546656108),new cljs.core.Keyword(null,"start-y","start-y",-771244577)],[segment_distance,start_x,end_y,ux,uy,end_x,((start_x + end_x) / (2)),((start_y + end_y) / (2)),start_y]);
});
frontend.extensions.graph.pixi.point_segment_distance_squared = (function frontend$extensions$graph$pixi$point_segment_distance_squared(px,py,ax,ay,bx,by){
var dx = (bx - ax);
var dy = (by - ay);
var length_squared = ((dx * dx) + (dy * dy));
var t = (((length_squared > (0)))?cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(((((px - ax) * dx) + ((py - ay) * dy)) / length_squared),(0)),(1)):(0));
var closest_x = (ax + (t * dx));
var closest_y = (ay + (t * dy));
return frontend.extensions.graph.pixi.distance_squared(px,py,closest_x,closest_y);
});
frontend.extensions.graph.pixi.hit_test_edge = (function frontend$extensions$graph$pixi$hit_test_edge(layout_by_id,links,world_x,world_y,scale){
var threshold = ((10) / cljs.core.max.cljs$core$IFn$_invoke$arity$2(scale,0.1));
var threshold_squared = (threshold * threshold);
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hit-distance-squared","hit-distance-squared",1879836375),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__91589){
var map__91590 = p__91589;
var map__91590__$1 = cljs.core.__destructure_map(map__91590);
var link = map__91590__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91590__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91590__$1,new cljs.core.Keyword(null,"target","target",253001721));
var parallel_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91590__$1,new cljs.core.Keyword(null,"parallel-offset","parallel-offset",325445442));
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,source);
if(cljs.core.truth_(temp__5825__auto__)){
var from_node = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,target);
if(cljs.core.truth_(temp__5825__auto____$1)){
var to_node = temp__5825__auto____$1;
var map__91591 = frontend.extensions.graph.pixi.edge_segment(from_node,to_node,parallel_offset);
var map__91591__$1 = cljs.core.__destructure_map(map__91591);
var start_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91591__$1,new cljs.core.Keyword(null,"start-x","start-x",-193941684));
var start_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91591__$1,new cljs.core.Keyword(null,"start-y","start-y",-771244577));
var end_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91591__$1,new cljs.core.Keyword(null,"end-x","end-x",-1323983821));
var end_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91591__$1,new cljs.core.Keyword(null,"end-y","end-y",859881965));
var edge_distance_squared = frontend.extensions.graph.pixi.point_segment_distance_squared(world_x,world_y,start_x,start_y,end_x,end_y);
if((edge_distance_squared <= threshold_squared)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(link,new cljs.core.Keyword(null,"hit-distance-squared","hit-distance-squared",1879836375),edge_distance_squared);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),frontend.extensions.graph.pixi.logic.edge_render_runs(links,false))));
});
frontend.extensions.graph.pixi.draw_edges_BANG_ = (function frontend$extensions$graph$pixi$draw_edges_BANG_(var_args){
var G__91593 = arguments.length;
switch (G__91593) {
case 5:
return frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (graphics,layout_by_id,links,dark_QMARK_,view_mode){
return frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$7(graphics,layout_by_id,links,dark_QMARK_,view_mode,frontend.extensions.graph.pixi.logic.highlight_state.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY),cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (graphics,layout_by_id,links,dark_QMARK_,view_mode,highlight_state){
return frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$7(graphics,layout_by_id,links,dark_QMARK_,view_mode,highlight_state,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (graphics,layout_by_id,links,dark_QMARK_,view_mode,highlight_state,p__91594){
var map__91595 = p__91594;
var map__91595__$1 = cljs.core.__destructure_map(map__91595);
var show_arrows_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91595__$1,new cljs.core.Keyword(null,"show-arrows?","show-arrows?",1693952912));
var show_edge_labels_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91595__$1,new cljs.core.Keyword(null,"show-edge-labels?","show-edge-labels?",1118080177));
var max_edges = frontend.extensions.graph.pixi.logic.draw_edge_limit(cljs.core.count(layout_by_id),cljs.core.count(links),view_mode);
var links_STAR_ = (((cljs.core.count(links) > max_edges))?cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_edges,links):links);
var stroke_color = frontend.extensions.graph.pixi.color__GT_int(frontend.extensions.graph.pixi.edge_color(dark_QMARK_));
var runs = frontend.extensions.graph.pixi.logic.edge_render_runs(links_STAR_,show_arrows_QMARK_);
graphics.clear();

var seq__91596_92478 = cljs.core.seq(runs);
var chunk__91597_92479 = null;
var count__91598_92480 = (0);
var i__91599_92481 = (0);
while(true){
if((i__91599_92481 < count__91598_92480)){
var map__91604_92482 = chunk__91597_92479.cljs$core$IIndexed$_nth$arity$2(null,i__91599_92481);
var map__91604_92483__$1 = cljs.core.__destructure_map(map__91604_92482);
var run_92484 = map__91604_92483__$1;
var source_92485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91604_92483__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target_92486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91604_92483__$1,new cljs.core.Keyword(null,"target","target",253001721));
var label_92487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91604_92483__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var show_arrow_QMARK__92488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91604_92483__$1,new cljs.core.Keyword(null,"show-arrow?","show-arrow?",1849414819));
var parallel_offset_92489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91604_92483__$1,new cljs.core.Keyword(null,"parallel-offset","parallel-offset",325445442));
var type_92490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91604_92483__$1,new cljs.core.Keyword("edge","type","edge/type",1177506633));
var temp__5825__auto___92493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,source_92485);
if(cljs.core.truth_(temp__5825__auto___92493)){
var from_node_92495 = temp__5825__auto___92493;
var temp__5825__auto___92496__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,target_92486);
if(cljs.core.truth_(temp__5825__auto___92496__$1)){
var to_node_92498 = temp__5825__auto___92496__$1;
var map__91605_92499 = frontend.extensions.graph.pixi.edge_segment(from_node_92495,to_node_92498,parallel_offset_92489);
var map__91605_92500__$1 = cljs.core.__destructure_map(map__91605_92499);
var start_y_92501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91605_92500__$1,new cljs.core.Keyword(null,"start-y","start-y",-771244577));
var segment_distance_92502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91605_92500__$1,new cljs.core.Keyword(null,"segment-distance","segment-distance",-1943612158));
var start_x_92503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91605_92500__$1,new cljs.core.Keyword(null,"start-x","start-x",-193941684));
var end_y_92504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91605_92500__$1,new cljs.core.Keyword(null,"end-y","end-y",859881965));
var ux_92505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91605_92500__$1,new cljs.core.Keyword(null,"ux","ux",-422693584));
var uy_92506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91605_92500__$1,new cljs.core.Keyword(null,"uy","uy",2081831409));
var end_x_92507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91605_92500__$1,new cljs.core.Keyword(null,"end-x","end-x",-1323983821));
var mid_x_92508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91605_92500__$1,new cljs.core.Keyword(null,"mid-x","mid-x",-1079680749));
var mid_y_92509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91605_92500__$1,new cljs.core.Keyword(null,"mid-y","mid-y",-546656108));
var label_gap_QMARK__92510 = (function (){var and__5140__auto__ = show_edge_labels_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(label_92487);
} else {
return and__5140__auto__;
}
})();
var half_gap_92511 = (cljs.core.truth_(label_gap_QMARK__92510)?cljs.core.min.cljs$core$IFn$_invoke$arity$2((frontend.extensions.graph.pixi.edge_label_gap_width(label_92487) / (2)),(segment_distance_92502 / (3))):null);
var gap_start_x_92512 = (cljs.core.truth_(half_gap_92511)?(mid_x_92508 - (ux_92505 * half_gap_92511)):null);
var gap_start_y_92513 = (cljs.core.truth_(half_gap_92511)?(mid_y_92509 - (uy_92506 * half_gap_92511)):null);
var gap_end_x_92514 = (cljs.core.truth_(half_gap_92511)?(mid_x_92508 + (ux_92505 * half_gap_92511)):null);
var gap_end_y_92515 = (cljs.core.truth_(half_gap_92511)?(mid_y_92509 + (uy_92506 * half_gap_92511)):null);
var stroke_width_92516 = frontend.extensions.graph.pixi.edge_stroke_width(type_92490,new cljs.core.Keyword(null,"select-mode?","select-mode?",625202898).cljs$core$IFn$_invoke$arity$1(highlight_state));
var curve_offset_92517 = frontend.extensions.graph.pixi.edge_curve_offset(type_92490);
var curved_QMARK__92518 = (curve_offset_92517 > (0));
var curve_sign_92519 = (((Math.sin(((start_x_92503 * 0.017) + (end_y_92504 * 0.013))) < (0)))?(-1):(1));
var control_x_92520 = (mid_x_92508 + (((- uy_92506) * curve_offset_92517) * curve_sign_92519));
var control_y_92521 = (mid_y_92509 + ((ux_92505 * curve_offset_92517) * curve_sign_92519));
var alpha_92522 = frontend.extensions.graph.pixi.edge_alpha(highlight_state,run_92484);
var arrow_BANG__92523 = ((function (seq__91596_92478,chunk__91597_92479,count__91598_92480,i__91599_92481,map__91605_92499,map__91605_92500__$1,start_y_92501,segment_distance_92502,start_x_92503,end_y_92504,ux_92505,uy_92506,end_x_92507,mid_x_92508,mid_y_92509,label_gap_QMARK__92510,half_gap_92511,gap_start_x_92512,gap_start_y_92513,gap_end_x_92514,gap_end_y_92515,stroke_width_92516,curve_offset_92517,curved_QMARK__92518,curve_sign_92519,control_x_92520,control_y_92521,alpha_92522,to_node_92498,temp__5825__auto___92496__$1,from_node_92495,temp__5825__auto___92493,map__91604_92482,map__91604_92483__$1,run_92484,source_92485,target_92486,label_92487,show_arrow_QMARK__92488,parallel_offset_92489,type_92490,max_edges,links_STAR_,stroke_color,runs,map__91595,map__91595__$1,show_arrows_QMARK_,show_edge_labels_QMARK_){
return (function (tip_x,tip_y,dir_x,dir_y){
var length = 6.8;
var width = 3.3;
var base_x = (tip_x - (dir_x * length));
var base_y = (tip_y - (dir_y * length));
var normal_x = (- dir_y);
var normal_y = dir_x;
graphics.setStrokeStyle(({"width": stroke_width_92516, "color": stroke_color, "alpha": alpha_92522, "cap": "round", "join": "round"}));

graphics.moveTo(tip_x,tip_y);

graphics.lineTo((base_x + (normal_x * width)),(base_y + (normal_y * width)));

graphics.moveTo(tip_x,tip_y);

graphics.lineTo((base_x - (normal_x * width)),(base_y - (normal_y * width)));

return graphics.stroke();
});})(seq__91596_92478,chunk__91597_92479,count__91598_92480,i__91599_92481,map__91605_92499,map__91605_92500__$1,start_y_92501,segment_distance_92502,start_x_92503,end_y_92504,ux_92505,uy_92506,end_x_92507,mid_x_92508,mid_y_92509,label_gap_QMARK__92510,half_gap_92511,gap_start_x_92512,gap_start_y_92513,gap_end_x_92514,gap_end_y_92515,stroke_width_92516,curve_offset_92517,curved_QMARK__92518,curve_sign_92519,control_x_92520,control_y_92521,alpha_92522,to_node_92498,temp__5825__auto___92496__$1,from_node_92495,temp__5825__auto___92493,map__91604_92482,map__91604_92483__$1,run_92484,source_92485,target_92486,label_92487,show_arrow_QMARK__92488,parallel_offset_92489,type_92490,max_edges,links_STAR_,stroke_color,runs,map__91595,map__91595__$1,show_arrows_QMARK_,show_edge_labels_QMARK_))
;
graphics.setStrokeStyle(({"width": stroke_width_92516, "color": stroke_color, "alpha": alpha_92522, "cap": "round", "join": "round"}));

if(cljs.core.truth_(half_gap_92511)){
graphics.moveTo(start_x_92503,start_y_92501);

graphics.lineTo(gap_start_x_92512,gap_start_y_92513);

graphics.moveTo(gap_end_x_92514,gap_end_y_92515);

graphics.lineTo(end_x_92507,end_y_92504);
} else {
if(curved_QMARK__92518){
graphics.moveTo(start_x_92503,start_y_92501);

graphics.quadraticCurveTo(control_x_92520,control_y_92521,end_x_92507,end_y_92504);
} else {
graphics.moveTo(start_x_92503,start_y_92501);

graphics.lineTo(end_x_92507,end_y_92504);
}
}

graphics.stroke();

if(cljs.core.truth_(show_arrow_QMARK__92488)){
arrow_BANG__92523(end_x_92507,end_y_92504,ux_92505,uy_92506);
} else {
}
} else {
}
} else {
}


var G__92552 = seq__91596_92478;
var G__92553 = chunk__91597_92479;
var G__92554 = count__91598_92480;
var G__92555 = (i__91599_92481 + (1));
seq__91596_92478 = G__92552;
chunk__91597_92479 = G__92553;
count__91598_92480 = G__92554;
i__91599_92481 = G__92555;
continue;
} else {
var temp__5825__auto___92556 = cljs.core.seq(seq__91596_92478);
if(temp__5825__auto___92556){
var seq__91596_92557__$1 = temp__5825__auto___92556;
if(cljs.core.chunked_seq_QMARK_(seq__91596_92557__$1)){
var c__5673__auto___92560 = cljs.core.chunk_first(seq__91596_92557__$1);
var G__92561 = cljs.core.chunk_rest(seq__91596_92557__$1);
var G__92562 = c__5673__auto___92560;
var G__92563 = cljs.core.count(c__5673__auto___92560);
var G__92564 = (0);
seq__91596_92478 = G__92561;
chunk__91597_92479 = G__92562;
count__91598_92480 = G__92563;
i__91599_92481 = G__92564;
continue;
} else {
var map__91606_92566 = cljs.core.first(seq__91596_92557__$1);
var map__91606_92567__$1 = cljs.core.__destructure_map(map__91606_92566);
var run_92568 = map__91606_92567__$1;
var source_92569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91606_92567__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target_92570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91606_92567__$1,new cljs.core.Keyword(null,"target","target",253001721));
var label_92571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91606_92567__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var show_arrow_QMARK__92572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91606_92567__$1,new cljs.core.Keyword(null,"show-arrow?","show-arrow?",1849414819));
var parallel_offset_92573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91606_92567__$1,new cljs.core.Keyword(null,"parallel-offset","parallel-offset",325445442));
var type_92574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91606_92567__$1,new cljs.core.Keyword("edge","type","edge/type",1177506633));
var temp__5825__auto___92575__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,source_92569);
if(cljs.core.truth_(temp__5825__auto___92575__$1)){
var from_node_92576 = temp__5825__auto___92575__$1;
var temp__5825__auto___92577__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,target_92570);
if(cljs.core.truth_(temp__5825__auto___92577__$2)){
var to_node_92578 = temp__5825__auto___92577__$2;
var map__91607_92579 = frontend.extensions.graph.pixi.edge_segment(from_node_92576,to_node_92578,parallel_offset_92573);
var map__91607_92580__$1 = cljs.core.__destructure_map(map__91607_92579);
var start_y_92581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91607_92580__$1,new cljs.core.Keyword(null,"start-y","start-y",-771244577));
var segment_distance_92582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91607_92580__$1,new cljs.core.Keyword(null,"segment-distance","segment-distance",-1943612158));
var start_x_92583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91607_92580__$1,new cljs.core.Keyword(null,"start-x","start-x",-193941684));
var end_y_92584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91607_92580__$1,new cljs.core.Keyword(null,"end-y","end-y",859881965));
var ux_92585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91607_92580__$1,new cljs.core.Keyword(null,"ux","ux",-422693584));
var uy_92586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91607_92580__$1,new cljs.core.Keyword(null,"uy","uy",2081831409));
var end_x_92587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91607_92580__$1,new cljs.core.Keyword(null,"end-x","end-x",-1323983821));
var mid_x_92588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91607_92580__$1,new cljs.core.Keyword(null,"mid-x","mid-x",-1079680749));
var mid_y_92589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91607_92580__$1,new cljs.core.Keyword(null,"mid-y","mid-y",-546656108));
var label_gap_QMARK__92590 = (function (){var and__5140__auto__ = show_edge_labels_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(label_92571);
} else {
return and__5140__auto__;
}
})();
var half_gap_92591 = (cljs.core.truth_(label_gap_QMARK__92590)?cljs.core.min.cljs$core$IFn$_invoke$arity$2((frontend.extensions.graph.pixi.edge_label_gap_width(label_92571) / (2)),(segment_distance_92582 / (3))):null);
var gap_start_x_92592 = (cljs.core.truth_(half_gap_92591)?(mid_x_92588 - (ux_92585 * half_gap_92591)):null);
var gap_start_y_92593 = (cljs.core.truth_(half_gap_92591)?(mid_y_92589 - (uy_92586 * half_gap_92591)):null);
var gap_end_x_92594 = (cljs.core.truth_(half_gap_92591)?(mid_x_92588 + (ux_92585 * half_gap_92591)):null);
var gap_end_y_92595 = (cljs.core.truth_(half_gap_92591)?(mid_y_92589 + (uy_92586 * half_gap_92591)):null);
var stroke_width_92596 = frontend.extensions.graph.pixi.edge_stroke_width(type_92574,new cljs.core.Keyword(null,"select-mode?","select-mode?",625202898).cljs$core$IFn$_invoke$arity$1(highlight_state));
var curve_offset_92597 = frontend.extensions.graph.pixi.edge_curve_offset(type_92574);
var curved_QMARK__92598 = (curve_offset_92597 > (0));
var curve_sign_92599 = (((Math.sin(((start_x_92583 * 0.017) + (end_y_92584 * 0.013))) < (0)))?(-1):(1));
var control_x_92600 = (mid_x_92588 + (((- uy_92586) * curve_offset_92597) * curve_sign_92599));
var control_y_92601 = (mid_y_92589 + ((ux_92585 * curve_offset_92597) * curve_sign_92599));
var alpha_92602 = frontend.extensions.graph.pixi.edge_alpha(highlight_state,run_92568);
var arrow_BANG__92603 = ((function (seq__91596_92478,chunk__91597_92479,count__91598_92480,i__91599_92481,map__91607_92579,map__91607_92580__$1,start_y_92581,segment_distance_92582,start_x_92583,end_y_92584,ux_92585,uy_92586,end_x_92587,mid_x_92588,mid_y_92589,label_gap_QMARK__92590,half_gap_92591,gap_start_x_92592,gap_start_y_92593,gap_end_x_92594,gap_end_y_92595,stroke_width_92596,curve_offset_92597,curved_QMARK__92598,curve_sign_92599,control_x_92600,control_y_92601,alpha_92602,to_node_92578,temp__5825__auto___92577__$2,from_node_92576,temp__5825__auto___92575__$1,map__91606_92566,map__91606_92567__$1,run_92568,source_92569,target_92570,label_92571,show_arrow_QMARK__92572,parallel_offset_92573,type_92574,seq__91596_92557__$1,temp__5825__auto___92556,max_edges,links_STAR_,stroke_color,runs,map__91595,map__91595__$1,show_arrows_QMARK_,show_edge_labels_QMARK_){
return (function (tip_x,tip_y,dir_x,dir_y){
var length = 6.8;
var width = 3.3;
var base_x = (tip_x - (dir_x * length));
var base_y = (tip_y - (dir_y * length));
var normal_x = (- dir_y);
var normal_y = dir_x;
graphics.setStrokeStyle(({"width": stroke_width_92596, "color": stroke_color, "alpha": alpha_92602, "cap": "round", "join": "round"}));

graphics.moveTo(tip_x,tip_y);

graphics.lineTo((base_x + (normal_x * width)),(base_y + (normal_y * width)));

graphics.moveTo(tip_x,tip_y);

graphics.lineTo((base_x - (normal_x * width)),(base_y - (normal_y * width)));

return graphics.stroke();
});})(seq__91596_92478,chunk__91597_92479,count__91598_92480,i__91599_92481,map__91607_92579,map__91607_92580__$1,start_y_92581,segment_distance_92582,start_x_92583,end_y_92584,ux_92585,uy_92586,end_x_92587,mid_x_92588,mid_y_92589,label_gap_QMARK__92590,half_gap_92591,gap_start_x_92592,gap_start_y_92593,gap_end_x_92594,gap_end_y_92595,stroke_width_92596,curve_offset_92597,curved_QMARK__92598,curve_sign_92599,control_x_92600,control_y_92601,alpha_92602,to_node_92578,temp__5825__auto___92577__$2,from_node_92576,temp__5825__auto___92575__$1,map__91606_92566,map__91606_92567__$1,run_92568,source_92569,target_92570,label_92571,show_arrow_QMARK__92572,parallel_offset_92573,type_92574,seq__91596_92557__$1,temp__5825__auto___92556,max_edges,links_STAR_,stroke_color,runs,map__91595,map__91595__$1,show_arrows_QMARK_,show_edge_labels_QMARK_))
;
graphics.setStrokeStyle(({"width": stroke_width_92596, "color": stroke_color, "alpha": alpha_92602, "cap": "round", "join": "round"}));

if(cljs.core.truth_(half_gap_92591)){
graphics.moveTo(start_x_92583,start_y_92581);

graphics.lineTo(gap_start_x_92592,gap_start_y_92593);

graphics.moveTo(gap_end_x_92594,gap_end_y_92595);

graphics.lineTo(end_x_92587,end_y_92584);
} else {
if(curved_QMARK__92598){
graphics.moveTo(start_x_92583,start_y_92581);

graphics.quadraticCurveTo(control_x_92600,control_y_92601,end_x_92587,end_y_92584);
} else {
graphics.moveTo(start_x_92583,start_y_92581);

graphics.lineTo(end_x_92587,end_y_92584);
}
}

graphics.stroke();

if(cljs.core.truth_(show_arrow_QMARK__92572)){
arrow_BANG__92603(end_x_92587,end_y_92584,ux_92585,uy_92586);
} else {
}
} else {
}
} else {
}


var G__92613 = cljs.core.next(seq__91596_92557__$1);
var G__92614 = null;
var G__92615 = (0);
var G__92616 = (0);
seq__91596_92478 = G__92613;
chunk__91597_92479 = G__92614;
count__91598_92480 = G__92615;
i__91599_92481 = G__92616;
continue;
}
} else {
}
}
break;
}

return cljs.core.count(links_STAR_);
}));

(frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$lang$maxFixedArity = 7);

frontend.extensions.graph.pixi.render_edges_BANG_ = (function frontend$extensions$graph$pixi$render_edges_BANG_(container,layout_by_id,links,dark_QMARK_,view_mode,render_opts){
var graphics = (new module$node_modules$pixi_DOT_js$lib$index.Graphics());
var drawn_links = frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$7(graphics,layout_by_id,links,dark_QMARK_,view_mode,frontend.extensions.graph.pixi.logic.highlight_state.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY),render_opts);
container.addChild(graphics);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graphics","graphics",-2079995979),graphics,new cljs.core.Keyword(null,"drawn-links","drawn-links",-335765168),drawn_links], null);
});
frontend.extensions.graph.pixi.destroy_children_BANG_ = (function frontend$extensions$graph$pixi$destroy_children_BANG_(container){
var seq__91608 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(container.removeChildren()));
var chunk__91609 = null;
var count__91610 = (0);
var i__91611 = (0);
while(true){
if((i__91611 < count__91610)){
var child = chunk__91609.cljs$core$IIndexed$_nth$arity$2(null,i__91611);
child.destroy(({"children": true}));


var G__92617 = seq__91608;
var G__92618 = chunk__91609;
var G__92619 = count__91610;
var G__92620 = (i__91611 + (1));
seq__91608 = G__92617;
chunk__91609 = G__92618;
count__91610 = G__92619;
i__91611 = G__92620;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__91608);
if(temp__5825__auto__){
var seq__91608__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91608__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__91608__$1);
var G__92621 = cljs.core.chunk_rest(seq__91608__$1);
var G__92622 = c__5673__auto__;
var G__92623 = cljs.core.count(c__5673__auto__);
var G__92624 = (0);
seq__91608 = G__92621;
chunk__91609 = G__92622;
count__91610 = G__92623;
i__91611 = G__92624;
continue;
} else {
var child = cljs.core.first(seq__91608__$1);
child.destroy(({"children": true}));


var G__92625 = cljs.core.next(seq__91608__$1);
var G__92626 = null;
var G__92627 = (0);
var G__92628 = (0);
seq__91608 = G__92625;
chunk__91609 = G__92626;
count__91610 = G__92627;
i__91611 = G__92628;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.extensions.graph.pixi.draw_fps_overlay_background_BANG_ = (function frontend$extensions$graph$pixi$draw_fps_overlay_background_BANG_(background,text,dark_QMARK_){
background.clear();

background.roundRect((-8),(-4),(text.width + (16)),(text.height + (8)),(7));

background.fill(({"color": frontend.extensions.graph.pixi.color__GT_int((cljs.core.truth_(dark_QMARK_)?"#020617":"#F8FAFC")), "alpha": (cljs.core.truth_(dark_QMARK_)?0.54:0.7)}));

background.setStrokeStyle(({"width": (1), "color": frontend.extensions.graph.pixi.color__GT_int((cljs.core.truth_(dark_QMARK_)?"#38BDF8":"#0F766E")), "alpha": (cljs.core.truth_(dark_QMARK_)?0.26:0.22)}));

return background.stroke();
});
frontend.extensions.graph.pixi.create_fps_overlay_BANG_ = (function frontend$extensions$graph$pixi$create_fps_overlay_BANG_(dark_QMARK_){
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var background = (new module$node_modules$pixi_DOT_js$lib$index.Graphics());
var text = (new module$node_modules$pixi_DOT_js$lib$index.Text(({"text": "FPS --", "style": (new module$node_modules$pixi_DOT_js$lib$index.TextStyle(({"fontFamily": "Inter, Avenir Next, system-ui, sans-serif", "fontSize": (11), "fontWeight": "650", "letterSpacing": (0), "fill": frontend.extensions.graph.pixi.edge_label_color(dark_QMARK_)})))})));
(container.eventMode = "none");

(container.alpha = 0.82);

container.addChild(background);

container.addChild(text);

frontend.extensions.graph.pixi.draw_fps_overlay_background_BANG_(background,text,dark_QMARK_);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"sync-position!","sync-position!",1870272703),(function (width,height){
var map__91612 = frontend.extensions.graph.pixi.logic.fps_overlay_position.cljs$core$IFn$_invoke$arity$4(width,height,text.width,text.height);
var map__91612__$1 = cljs.core.__destructure_map(map__91612);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91612__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91612__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
(container.x = x);

return (container.y = y);
}),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (fps){
var next_text = (""+"FPS "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(fps)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_text,text.text)){
return null;
} else {
(text.text = next_text);

return frontend.extensions.graph.pixi.draw_fps_overlay_background_BANG_(background,text,dark_QMARK_);
}
})], null);
});
frontend.extensions.graph.pixi.tick_fps_overlay_BANG_ = (function frontend$extensions$graph$pixi$tick_fps_overlay_BANG_(fps_overlay,last_ms_STAR_,frame_count_STAR_,width,height){
var now = performance.now();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frame_count_STAR_,cljs.core.inc);

var fexpr__91613_92634 = new cljs.core.Keyword(null,"sync-position!","sync-position!",1870272703).cljs$core$IFn$_invoke$arity$1(fps_overlay);
(fexpr__91613_92634.cljs$core$IFn$_invoke$arity$2 ? fexpr__91613_92634.cljs$core$IFn$_invoke$arity$2(width,height) : fexpr__91613_92634.call(null,width,height));

if(((now - cljs.core.deref(last_ms_STAR_)) >= (250))){
var elapsed = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),(now - cljs.core.deref(last_ms_STAR_)));
var fps = ((cljs.core.deref(frame_count_STAR_) * (1000)) / elapsed);
cljs.core.reset_BANG_(last_ms_STAR_,now);

cljs.core.reset_BANG_(frame_count_STAR_,(0));

var fexpr__91614 = new cljs.core.Keyword(null,"update!","update!",-1453508586).cljs$core$IFn$_invoke$arity$1(fps_overlay);
return (fexpr__91614.cljs$core$IFn$_invoke$arity$1 ? fexpr__91614.cljs$core$IFn$_invoke$arity$1(fps) : fexpr__91614.call(null,fps));
} else {
return null;
}
});
frontend.extensions.graph.pixi.icon_value = (function frontend$extensions$graph$pixi$icon_value(icon,k){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(icon,k);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(icon,cljs.core.name(k));
}
});
frontend.extensions.graph.pixi.tabler_icon_spec = (function frontend$extensions$graph$pixi$tabler_icon_spec(icon){
if(((typeof icon === 'string') && ((!(clojure.string.blank_QMARK_(icon)))))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),icon,new cljs.core.Keyword(null,"class-prefix","class-prefix",59998977),"ti",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"tabler-icons, system-ui, sans-serif"], null);
} else {
if(cljs.core.map_QMARK_(icon)){
var type = frontend.extensions.graph.pixi.icon_value(icon,new cljs.core.Keyword(null,"type","type",1174270348));
var id = frontend.extensions.graph.pixi.icon_value(icon,new cljs.core.Keyword(null,"id","id",-1388402092));
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["tabler-icon",null,new cljs.core.Keyword(null,"tabler-ext-icon","tabler-ext-icon",-178768731),null,"tabler-ext-icon",null,new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),null], null), null),type)) && (((typeof id === 'string') && ((!(clojure.string.blank_QMARK_(id)))))))){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabler-ext-icon","tabler-ext-icon",-178768731),null,"tabler-ext-icon",null], null), null),type)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class-prefix","class-prefix",59998977),"tie",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"tabler-icons-extension, system-ui, sans-serif"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class-prefix","class-prefix",59998977),"ti",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"tabler-icons, system-ui, sans-serif"], null);
}
} else {
return null;
}
} else {
return null;

}
}
});
frontend.extensions.graph.pixi.css_content__GT_text = (function frontend$extensions$graph$pixi$css_content__GT_text(content){
if(((typeof content === 'string') && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content,"none")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content,"normal")))))){
var content__$1 = clojure.string.trim(content);
var content__$2 = (((((((content__$1).length) >= (2))) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\"",null,"'",null], null), null),cljs.core.first(content__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(content__$1),cljs.core.last(content__$1)))))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content__$1,(1),(((content__$1).length) - (1))):content__$1);
return clojure.string.replace(content__$2,/\\([0-9a-fA-F]{4,6}) ?/,(function (p__91615){
var vec__91616 = p__91615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91616,(0),null);
var hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91616,(1),null);
return String.fromCodePoint(parseInt(hex,(16)));
}));
} else {
return null;
}
});
frontend.extensions.graph.pixi.stylesheet_rules = (function frontend$extensions$graph$pixi$stylesheet_rules(stylesheet){
try{var G__91620 = stylesheet.cssRules;
if((G__91620 == null)){
return null;
} else {
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(G__91620);
}
}catch (e91619){var _e = e91619;
return null;
}});
frontend.extensions.graph.pixi.tabler_icon_codepoint = (function frontend$extensions$graph$pixi$tabler_icon_codepoint(p__91621){
var map__91622 = p__91621;
var map__91622__$1 = cljs.core.__destructure_map(map__91622);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91622__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91622__$1,new cljs.core.Keyword(null,"class-prefix","class-prefix",59998977));
if(cljs.core.truth_((function (){var and__5140__auto__ = (typeof document !== 'undefined');
if(and__5140__auto__){
var and__5140__auto____$1 = id;
if(cljs.core.truth_(and__5140__auto____$1)){
return class_prefix;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var cache_key = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_prefix)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
var cache = cljs.core.deref(frontend.extensions.graph.pixi._STAR_tabler_icon_codepoint_cache);
if(cljs.core.contains_QMARK_(cache,cache_key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,cache_key);
} else {
var selector = (""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_prefix)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+":before");
var codepoint = cljs.core.some((function (stylesheet){
return cljs.core.some((function (rule){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selector,rule.selectorText)){
return frontend.extensions.graph.pixi.css_content__GT_text(rule.style.content);
} else {
return null;
}
}),frontend.extensions.graph.pixi.stylesheet_rules(stylesheet));
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.styleSheets));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.extensions.graph.pixi._STAR_tabler_icon_codepoint_cache,cljs.core.assoc,cache_key,codepoint);

return codepoint;
}
} else {
return null;
}
});
frontend.extensions.graph.pixi.icon_display_spec = (function frontend$extensions$graph$pixi$icon_display_spec(node){
var temp__5823__auto__ = frontend.extensions.graph.pixi.logic.icon_display_text(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(temp__5823__auto__)){
var text = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),"emoji",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
} else {
var temp__5825__auto__ = frontend.extensions.graph.pixi.tabler_icon_spec(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(temp__5825__auto__)){
var icon_spec = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.extensions.graph.pixi.tabler_icon_codepoint(icon_spec);
if(cljs.core.truth_(temp__5825__auto____$1)){
var text = temp__5825__auto____$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),"icon",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(icon_spec),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
} else {
return null;
}
} else {
return null;
}
}
});
frontend.extensions.graph.pixi.node_sprite_kind = (function frontend$extensions$graph$pixi$node_sprite_kind(_node){
return "circle";
});
frontend.extensions.graph.pixi.create_node_display_BANG_ = (function frontend$extensions$graph$pixi$create_node_display_BANG_(p__91623,icon_styles,node){
var map__91624 = p__91623;
var map__91624__$1 = cljs.core.__destructure_map(map__91624);
var circle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91624__$1,new cljs.core.Keyword(null,"circle","circle",1903212362));
var temp__5823__auto__ = frontend.extensions.graph.pixi.icon_display_spec(node);
if(cljs.core.truth_(temp__5823__auto__)){
var map__91625 = temp__5823__auto__;
var map__91625__$1 = cljs.core.__destructure_map(map__91625);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91625__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91625__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91625__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text__$1 = (new module$node_modules$pixi_DOT_js$lib$index.Text(({"text": text, "style": cljs.core.get.cljs$core$IFn$_invoke$arity$2(icon_styles,style)})));
frontend.extensions.graph.pixi.goog$module$goog$object.set(text__$1,"logseqGraphNodeDisplay",kind);

return text__$1;
} else {
var kind = frontend.extensions.graph.pixi.node_sprite_kind(node);
var sprite = (new module$node_modules$pixi_DOT_js$lib$index.Sprite(circle));
frontend.extensions.graph.pixi.goog$module$goog$object.set(sprite,"logseqGraphNodeDisplay",kind);

return sprite;
}
});
frontend.extensions.graph.pixi.create_icon_text_style = (function frontend$extensions$graph$pixi$create_icon_text_style(font_family){
return (new module$node_modules$pixi_DOT_js$lib$index.TextStyle(({"fontFamily": font_family, "fontSize": frontend.extensions.graph.pixi.icon_texture_font_size, "align": "center"})));
});
frontend.extensions.graph.pixi.create_icon_text_styles = (function frontend$extensions$graph$pixi$create_icon_text_styles(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),frontend.extensions.graph.pixi.create_icon_text_style("Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, system-ui, sans-serif"),"tabler-icons, system-ui, sans-serif",frontend.extensions.graph.pixi.create_icon_text_style("tabler-icons, system-ui, sans-serif"),"tabler-icons-extension, system-ui, sans-serif",frontend.extensions.graph.pixi.create_icon_text_style("tabler-icons-extension, system-ui, sans-serif")], null);
});
frontend.extensions.graph.pixi.display_kind = (function frontend$extensions$graph$pixi$display_kind(display){
return frontend.extensions.graph.pixi.goog$module$goog$object.get(display,"logseqGraphNodeDisplay");
});
frontend.extensions.graph.pixi.node_display_kind = (function frontend$extensions$graph$pixi$node_display_kind(node){
var temp__5823__auto__ = frontend.extensions.graph.pixi.icon_display_spec(node);
if(cljs.core.truth_(temp__5823__auto__)){
var map__91626 = temp__5823__auto__;
var map__91626__$1 = cljs.core.__destructure_map(map__91626);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91626__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
return kind;
} else {
return frontend.extensions.graph.pixi.node_sprite_kind(node);
}
});
frontend.extensions.graph.pixi.node_density_alpha = (function frontend$extensions$graph$pixi$node_density_alpha(node,emphasis,scale){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node))){
return 1.0;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"connected","connected",-169833045),null,new cljs.core.Keyword(null,"hovered","hovered",399068143),null,new cljs.core.Keyword(null,"preview","preview",451279890),null], null), null),emphasis)){
return 1.0;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"grid-object?","grid-object?",-933862505).cljs$core$IFn$_invoke$arity$1(node))){
return 0.82;
} else {
if((scale >= 0.72)){
return 1.0;
} else {
if((new cljs.core.Keyword(null,"degree","degree",237107028).cljs$core$IFn$_invoke$arity$2(node,(0)) >= (8))){
return 0.88;
} else {
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(0.32,cljs.core.min.cljs$core$IFn$_invoke$arity$2(1.0,(0.3 + (scale * 0.76))));

}
}
}
}
}
});
frontend.extensions.graph.pixi.configure_node_display_BANG_ = (function frontend$extensions$graph$pixi$configure_node_display_BANG_(var_args){
var G__91628 = arguments.length;
switch (G__91628) {
case 3:
return frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (display,node,emphasis){
return frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display,node,emphasis,1.0,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884));
}));

(frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (display,node,emphasis,world_scale){
return frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display,node,emphasis,world_scale,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884));
}));

(frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (display,node,emphasis,world_scale,view_mode){
var kind = frontend.extensions.graph.pixi.display_kind(display);
var icon_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["emoji",null,"icon",null], null), null),kind);
var emoji_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("emoji",kind);
var tag_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node));
var tag_circle_QMARK_ = ((tag_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("circle",kind)));
var display_radius = ((tag_circle_QMARK_)?8.5:new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(node));
var scale = (((2) * display_radius) / ((icon_QMARK_)?frontend.extensions.graph.pixi.icon_texture_font_size:(96)));
var base_scale = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"page","page",849072397)))?frontend.extensions.graph.pixi.page_node_scale:1.0) * ((((tag_QMARK_) && ((!(tag_circle_QMARK_)))))?1.18:1.0));
var emphasis_scale = (function (){var G__91629 = emphasis;
var G__91629__$1 = (((G__91629 instanceof cljs.core.Keyword))?G__91629.fqn:null);
switch (G__91629__$1) {
case "selected":
return 1.55;

break;
case "hovered":
return 1.42;

break;
case "connected":
return 1.22;

break;
case "preview":
return 1.16;

break;
case "background":
return 0.88;

break;
default:
return 1.0;

}
})();
var alpha = (function (){var G__91630 = emphasis;
var G__91630__$1 = (((G__91630 instanceof cljs.core.Keyword))?G__91630.fqn:null);
switch (G__91630__$1) {
case "selected":
return 1.0;

break;
case "hovered":
return 1.0;

break;
case "connected":
return 0.95;

break;
case "preview":
return 0.92;

break;
case "background":
return 0.16;

break;
case "dimmed":
return 0.16;

break;
default:
return 1.0;

}
})();
var alpha__$1 = (alpha * frontend.extensions.graph.pixi.node_density_alpha(node,emphasis,world_scale));
var temp__5825__auto___92665 = display.anchor;
if(cljs.core.truth_(temp__5825__auto___92665)){
var anchor_92666 = temp__5825__auto___92665;
(anchor_92666.x = 0.5);

(anchor_92666.y = 0.5);
} else {
}

(display.x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node));

(display.y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node));

(display.tint = ((emoji_QMARK_)?(16777215):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emphasis,new cljs.core.Keyword(null,"background","background",-863952629)))?(6583435):new cljs.core.Keyword(null,"color-int","color-int",-2037271210).cljs$core$IFn$_invoke$arity$1(node)
)));

(display.filters = null);

frontend.extensions.graph.pixi.goog$module$goog$object.set(display,"logseqGraphBaseAlpha",alpha__$1);

(display.scale.x = ((scale * base_scale) * emphasis_scale));

(display.scale.y = ((scale * base_scale) * emphasis_scale));

return (display.visible = true);
}));

(frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$lang$maxFixedArity = 5);

frontend.extensions.graph.pixi.display_base_alpha = (function frontend$extensions$graph$pixi$display_base_alpha(display){
var alpha = frontend.extensions.graph.pixi.goog$module$goog$object.get(display,"logseqGraphBaseAlpha");
if(typeof alpha === 'number'){
return alpha;
} else {
return 1.0;
}
});
frontend.extensions.graph.pixi.set_display_transition_target_BANG_ = (function frontend$extensions$graph$pixi$set_display_transition_target_BANG_(display,target){
frontend.extensions.graph.pixi.goog$module$goog$object.set(display,"logseqGraphTransitionTarget",target);

if((target > (0))){
return (display.visible = true);
} else {
return null;
}
});
frontend.extensions.graph.pixi.hide_display_now_BANG_ = (function frontend$extensions$graph$pixi$hide_display_now_BANG_(display){
frontend.extensions.graph.pixi.goog$module$goog$object.set(display,"logseqGraphTransitionTarget",0.0);

(display.alpha = (0));

return (display.visible = false);
});
frontend.extensions.graph.pixi.display_transition_target = (function frontend$extensions$graph$pixi$display_transition_target(display){
var target = frontend.extensions.graph.pixi.goog$module$goog$object.get(display,"logseqGraphTransitionTarget");
if(typeof target === 'number'){
return target;
} else {
return 1.0;
}
});
frontend.extensions.graph.pixi.tick_display_transition_BANG_ = (function frontend$extensions$graph$pixi$tick_display_transition_BANG_(display){
var target = frontend.extensions.graph.pixi.display_transition_target(display);
var base_alpha = frontend.extensions.graph.pixi.display_base_alpha(display);
var current_transition = (((base_alpha > (0)))?(display.alpha / base_alpha):target);
var next_transition = (current_transition + ((target - current_transition) * frontend.extensions.graph.pixi.node_transition_speed));
(display.alpha = (base_alpha * next_transition));

if((((target === (0))) && ((next_transition < 0.02)))){
(display.alpha = (0));

(display.visible = false);
} else {
}

return (Math.abs((target - next_transition)) > 0.02);
});
frontend.extensions.graph.pixi.remove_display_from_parent_BANG_ = (function frontend$extensions$graph$pixi$remove_display_from_parent_BANG_(display){
var temp__5825__auto__ = display.parent;
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
return parent.removeChild(display);
} else {
return null;
}
});
frontend.extensions.graph.pixi.visible_node_id_set = (function frontend$extensions$graph$pixi$visible_node_id_set(var_args){
var G__91643 = arguments.length;
switch (G__91643) {
case 2:
return frontend.extensions.graph.pixi.visible_node_id_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.graph.pixi.visible_node_id_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.visible_node_id_set.cljs$core$IFn$_invoke$arity$2 = (function (nodes,visible_node_ids){
return frontend.extensions.graph.pixi.visible_node_id_set.cljs$core$IFn$_invoke$arity$3(nodes,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),nodes)),visible_node_ids);
}));

(frontend.extensions.graph.pixi.visible_node_id_set.cljs$core$IFn$_invoke$arity$3 = (function (nodes,all_node_id_set,visible_node_ids){
if((!((visible_node_ids == null)))){
var source_id_set = cljs.core.set(visible_node_ids);
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91641_SHARP_){
return cljs.core.contains_QMARK_(source_id_set,frontend.extensions.graph.pixi.logic.node_source_id(p1__91641_SHARP_));
}),nodes)));
} else {
return all_node_id_set;
}
}));

(frontend.extensions.graph.pixi.visible_node_id_set.cljs$lang$maxFixedArity = 3);

frontend.extensions.graph.pixi.visible_node_QMARK_ = (function frontend$extensions$graph$pixi$visible_node_QMARK_(visible_node_ids_STAR_,node){
return cljs.core.contains_QMARK_(cljs.core.deref(visible_node_ids_STAR_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
});
frontend.extensions.graph.pixi.visible_links = (function frontend$extensions$graph$pixi$visible_links(links,visible_node_ids){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91644_SHARP_){
return ((cljs.core.contains_QMARK_(visible_node_ids,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__91644_SHARP_))) && (cljs.core.contains_QMARK_(visible_node_ids,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__91644_SHARP_))));
}),links);
});
frontend.extensions.graph.pixi.draw_closed_points_BANG_ = (function frontend$extensions$graph$pixi$draw_closed_points_BANG_(graphics,points){
var temp__5825__auto__ = cljs.core.first(points);
if(cljs.core.truth_(temp__5825__auto__)){
var map__91645 = temp__5825__auto__;
var map__91645__$1 = cljs.core.__destructure_map(map__91645);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91645__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91645__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
graphics.moveTo(x,y);

var seq__91646_92672 = cljs.core.seq(cljs.core.rest(points));
var chunk__91647_92673 = null;
var count__91648_92674 = (0);
var i__91649_92675 = (0);
while(true){
if((i__91649_92675 < count__91648_92674)){
var map__91656_92676 = chunk__91647_92673.cljs$core$IIndexed$_nth$arity$2(null,i__91649_92675);
var map__91656_92677__$1 = cljs.core.__destructure_map(map__91656_92676);
var x_92678__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91656_92677__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_92679__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91656_92677__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
graphics.lineTo(x_92678__$1,y_92679__$1);


var G__92680 = seq__91646_92672;
var G__92681 = chunk__91647_92673;
var G__92682 = count__91648_92674;
var G__92683 = (i__91649_92675 + (1));
seq__91646_92672 = G__92680;
chunk__91647_92673 = G__92681;
count__91648_92674 = G__92682;
i__91649_92675 = G__92683;
continue;
} else {
var temp__5825__auto___92684__$1 = cljs.core.seq(seq__91646_92672);
if(temp__5825__auto___92684__$1){
var seq__91646_92685__$1 = temp__5825__auto___92684__$1;
if(cljs.core.chunked_seq_QMARK_(seq__91646_92685__$1)){
var c__5673__auto___92686 = cljs.core.chunk_first(seq__91646_92685__$1);
var G__92687 = cljs.core.chunk_rest(seq__91646_92685__$1);
var G__92688 = c__5673__auto___92686;
var G__92689 = cljs.core.count(c__5673__auto___92686);
var G__92690 = (0);
seq__91646_92672 = G__92687;
chunk__91647_92673 = G__92688;
count__91648_92674 = G__92689;
i__91649_92675 = G__92690;
continue;
} else {
var map__91657_92695 = cljs.core.first(seq__91646_92685__$1);
var map__91657_92696__$1 = cljs.core.__destructure_map(map__91657_92695);
var x_92697__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91657_92696__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_92698__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91657_92696__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
graphics.lineTo(x_92697__$1,y_92698__$1);


var G__92703 = cljs.core.next(seq__91646_92685__$1);
var G__92704 = null;
var G__92705 = (0);
var G__92706 = (0);
seq__91646_92672 = G__92703;
chunk__91647_92673 = G__92704;
count__91648_92674 = G__92705;
i__91649_92675 = G__92706;
continue;
}
} else {
}
}
break;
}

return graphics.closePath();
} else {
return null;
}
});
frontend.extensions.graph.pixi.cluster_alpha = (function frontend$extensions$graph$pixi$cluster_alpha(dark_QMARK_,radius,emphasis){
var base = (function (){var G__91658 = emphasis;
var G__91658__$1 = (((G__91658 instanceof cljs.core.Keyword))?G__91658.fqn:null);
switch (G__91658__$1) {
case "selected":
if(cljs.core.truth_(dark_QMARK_)){
return 0.185;
} else {
return 0.12;
}

break;
case "preview":
if(cljs.core.truth_(dark_QMARK_)){
return 0.15;
} else {
return 0.095;
}

break;
case "dimmed":
if(cljs.core.truth_(dark_QMARK_)){
return 0.036;
} else {
return 0.024;
}

break;
default:
if(cljs.core.truth_(dark_QMARK_)){
return 0.125;
} else {
return 0.115;
}

}
})();
var falloff = cljs.core.max.cljs$core$IFn$_invoke$arity$2(0.38,(1.0 - (cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(radius - (260))) / (1400))));
return (base * falloff);
});
frontend.extensions.graph.pixi.cluster_emphasis = (function frontend$extensions$graph$pixi$cluster_emphasis(cluster_id,active_cluster_ids,selected_cluster_ids,preview_cluster_ids,interaction_QMARK_){
if(cljs.core.contains_QMARK_(selected_cluster_ids,cluster_id)){
return new cljs.core.Keyword(null,"selected","selected",574897764);
} else {
if(cljs.core.contains_QMARK_(preview_cluster_ids,cluster_id)){
return new cljs.core.Keyword(null,"preview","preview",451279890);
} else {
if(cljs.core.contains_QMARK_(active_cluster_ids,cluster_id)){
return new cljs.core.Keyword(null,"preview","preview",451279890);
} else {
if(cljs.core.truth_(interaction_QMARK_)){
return new cljs.core.Keyword(null,"dimmed","dimmed",-791586346);
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);

}
}
}
}
});
frontend.extensions.graph.pixi.draw_cluster_backgrounds_BANG_ = (function frontend$extensions$graph$pixi$draw_cluster_backgrounds_BANG_(var_args){
var G__91675 = arguments.length;
switch (G__91675) {
case 6:
return frontend.extensions.graph.pixi.draw_cluster_backgrounds_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return frontend.extensions.graph.pixi.draw_cluster_backgrounds_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.draw_cluster_backgrounds_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (graphics,nodes,view_mode,dark_QMARK_,visible_node_ids_STAR_,grid_layout_QMARK_){
return frontend.extensions.graph.pixi.draw_cluster_backgrounds_BANG_.cljs$core$IFn$_invoke$arity$7(graphics,nodes,view_mode,dark_QMARK_,visible_node_ids_STAR_,grid_layout_QMARK_,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.graph.pixi.draw_cluster_backgrounds_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (graphics,nodes,view_mode,dark_QMARK_,visible_node_ids_STAR_,grid_layout_QMARK_,p__91676){
var map__91677 = p__91676;
var map__91677__$1 = cljs.core.__destructure_map(map__91677);
var active_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91677__$1,new cljs.core.Keyword(null,"active-ids","active-ids",-958452414));
var selected_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91677__$1,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141));
var preview_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91677__$1,new cljs.core.Keyword(null,"preview-ids","preview-ids",-1851224127));
var hovered_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91677__$1,new cljs.core.Keyword(null,"hovered-id","hovered-id",934850583));
graphics.clear();

var active_ids__$1 = cljs.core.set(active_ids);
var selected_ids__$1 = cljs.core.set(selected_ids);
var preview_ids__$1 = (function (){var G__91678 = cljs.core.set(preview_ids);
if(cljs.core.truth_(hovered_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91678,hovered_id);
} else {
return G__91678;
}
})();
var visible_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91665_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__91665_SHARP_);
}),nodes);
var active_cluster_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91666_SHARP_){
return cljs.core.contains_QMARK_(active_ids__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91666_SHARP_));
}),visible_nodes)));
var selected_cluster_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(selected_ids__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91667_SHARP_){
return cljs.core.contains_QMARK_(selected_ids__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91667_SHARP_));
}),visible_nodes)));
var preview_cluster_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(preview_ids__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91669_SHARP_){
return cljs.core.contains_QMARK_(preview_ids__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91669_SHARP_));
}),visible_nodes)));
var interaction_QMARK_ = cljs.core.seq(selected_ids__$1);
var seq__91679 = cljs.core.seq(frontend.extensions.graph.pixi.logic.tag_cluster_backgrounds.cljs$core$IFn$_invoke$arity$3(visible_nodes,view_mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125),grid_layout_QMARK_], null)));
var chunk__91680 = null;
var count__91681 = (0);
var i__91682 = (0);
while(true){
if((i__91682 < count__91681)){
var map__91690 = chunk__91680.cljs$core$IIndexed$_nth$arity$2(null,i__91682);
var map__91690__$1 = cljs.core.__destructure_map(map__91690);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91690__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91690__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91690__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91690__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var color_int = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91690__$1,new cljs.core.Keyword(null,"color-int","color-int",-2037271210));
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91690__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var color_92727 = (function (){var or__5142__auto__ = color_int;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.extensions.graph.pixi.color__GT_int((cljs.core.truth_(dark_QMARK_)?"#34D399":"#047857"));
}
})();
var emphasis_92728 = frontend.extensions.graph.pixi.cluster_emphasis(id,active_cluster_ids,selected_cluster_ids,preview_cluster_ids,interaction_QMARK_);
var fill_alpha_92729 = frontend.extensions.graph.pixi.cluster_alpha(dark_QMARK_,radius,emphasis_92728);
var stroke_alpha_92730 = (function (){var G__91691 = emphasis_92728;
var G__91691__$1 = (((G__91691 instanceof cljs.core.Keyword))?G__91691.fqn:null);
switch (G__91691__$1) {
case "selected":
if(cljs.core.truth_(dark_QMARK_)){
return 0.42;
} else {
return 0.27;
}

break;
case "preview":
if(cljs.core.truth_(dark_QMARK_)){
return 0.34;
} else {
return 0.21;
}

break;
case "dimmed":
if(cljs.core.truth_(dark_QMARK_)){
return 0.078;
} else {
return 0.055;
}

break;
default:
if(cljs.core.truth_(dark_QMARK_)){
return 0.26;
} else {
return 0.24;
}

}
})();
if(cljs.core.seq(points)){
frontend.extensions.graph.pixi.draw_closed_points_BANG_(graphics,points);
} else {
graphics.circle(x,y,radius);
}

graphics.fill(({"color": color_92727, "alpha": fill_alpha_92729}));

graphics.setStrokeStyle(({"width": (function (){var G__91695 = emphasis_92728;
var G__91695__$1 = (((G__91695 instanceof cljs.core.Keyword))?G__91695.fqn:null);
switch (G__91695__$1) {
case "selected":
return 1.7;

break;
case "preview":
return 1.35;

break;
default:
return 1.0;

}
})(), "color": color_92727, "alpha": stroke_alpha_92730, "join": "round"}));

graphics.stroke();


var G__92737 = seq__91679;
var G__92738 = chunk__91680;
var G__92739 = count__91681;
var G__92740 = (i__91682 + (1));
seq__91679 = G__92737;
chunk__91680 = G__92738;
count__91681 = G__92739;
i__91682 = G__92740;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__91679);
if(temp__5825__auto__){
var seq__91679__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91679__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__91679__$1);
var G__92741 = cljs.core.chunk_rest(seq__91679__$1);
var G__92742 = c__5673__auto__;
var G__92743 = cljs.core.count(c__5673__auto__);
var G__92744 = (0);
seq__91679 = G__92741;
chunk__91680 = G__92742;
count__91681 = G__92743;
i__91682 = G__92744;
continue;
} else {
var map__91699 = cljs.core.first(seq__91679__$1);
var map__91699__$1 = cljs.core.__destructure_map(map__91699);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91699__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91699__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91699__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91699__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var color_int = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91699__$1,new cljs.core.Keyword(null,"color-int","color-int",-2037271210));
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91699__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var color_92745 = (function (){var or__5142__auto__ = color_int;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.extensions.graph.pixi.color__GT_int((cljs.core.truth_(dark_QMARK_)?"#34D399":"#047857"));
}
})();
var emphasis_92746 = frontend.extensions.graph.pixi.cluster_emphasis(id,active_cluster_ids,selected_cluster_ids,preview_cluster_ids,interaction_QMARK_);
var fill_alpha_92747 = frontend.extensions.graph.pixi.cluster_alpha(dark_QMARK_,radius,emphasis_92746);
var stroke_alpha_92748 = (function (){var G__91700 = emphasis_92746;
var G__91700__$1 = (((G__91700 instanceof cljs.core.Keyword))?G__91700.fqn:null);
switch (G__91700__$1) {
case "selected":
if(cljs.core.truth_(dark_QMARK_)){
return 0.42;
} else {
return 0.27;
}

break;
case "preview":
if(cljs.core.truth_(dark_QMARK_)){
return 0.34;
} else {
return 0.21;
}

break;
case "dimmed":
if(cljs.core.truth_(dark_QMARK_)){
return 0.078;
} else {
return 0.055;
}

break;
default:
if(cljs.core.truth_(dark_QMARK_)){
return 0.26;
} else {
return 0.24;
}

}
})();
if(cljs.core.seq(points)){
frontend.extensions.graph.pixi.draw_closed_points_BANG_(graphics,points);
} else {
graphics.circle(x,y,radius);
}

graphics.fill(({"color": color_92745, "alpha": fill_alpha_92747}));

graphics.setStrokeStyle(({"width": (function (){var G__91702 = emphasis_92746;
var G__91702__$1 = (((G__91702 instanceof cljs.core.Keyword))?G__91702.fqn:null);
switch (G__91702__$1) {
case "selected":
return 1.7;

break;
case "preview":
return 1.35;

break;
default:
return 1.0;

}
})(), "color": color_92745, "alpha": stroke_alpha_92748, "join": "round"}));

graphics.stroke();


var G__92753 = cljs.core.next(seq__91679__$1);
var G__92754 = null;
var G__92755 = (0);
var G__92756 = (0);
seq__91679 = G__92753;
chunk__91680 = G__92754;
count__91681 = G__92755;
i__91682 = G__92756;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.extensions.graph.pixi.draw_cluster_backgrounds_BANG_.cljs$lang$maxFixedArity = 7);

frontend.extensions.graph.pixi.render_nodes_BANG_ = (function frontend$extensions$graph$pixi$render_nodes_BANG_(tag_container,detail_container,layouted_nodes_STAR_,view_mode,highlight_state_STAR_,visible_node_ids_STAR_,current_layout_nodes){
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var textures = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circle","circle",1903212362),frontend.extensions.graph.pixi.create_circle_texture()], null);
var icon_styles = frontend.extensions.graph.pixi.create_icon_text_styles();
var node_count = cljs.core.count(cljs.core.deref(layouted_nodes_STAR_));
var max_nodes = frontend.extensions.graph.pixi.logic.render_node_limit(node_count,view_mode);
var virtual_QMARK_ = (max_nodes < node_count);
var world_scale_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(1.0);
detail_container.addChild(container);

if((!(virtual_QMARK_))){
var displays = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,node){
var display = frontend.extensions.graph.pixi.create_node_display_BANG_(textures,icon_styles,node);
var display_container = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node)))?tag_container:container);
if(frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,node)){
frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display,node,frontend.extensions.graph.pixi.logic.node_emphasis(cljs.core.deref(highlight_state_STAR_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node)),cljs.core.deref(world_scale_STAR_),view_mode);

frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,1.0);

(display.alpha = frontend.extensions.graph.pixi.display_base_alpha(display));
} else {
frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,0.0);

(display.alpha = (0));

(display.visible = false);
}

display_container.addChild(display);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),display);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref(layouted_nodes_STAR_));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"textures","textures",560681081),textures,new cljs.core.Keyword(null,"displays","displays",1485464189),displays,new cljs.core.Keyword(null,"drawn-node-count","drawn-node-count",-1057152275),cljs.core.count(displays),new cljs.core.Keyword(null,"sync!","sync!",348990713),(function (world,_width,_height,_hovered_node_id){
cljs.core.reset_BANG_(world_scale_STAR_,world.scale.x);

var seen_ids = (new Set());
var seq__91716_92760 = cljs.core.seq((current_layout_nodes.cljs$core$IFn$_invoke$arity$0 ? current_layout_nodes.cljs$core$IFn$_invoke$arity$0() : current_layout_nodes.call(null)));
var chunk__91718_92761 = null;
var count__91719_92762 = (0);
var i__91720_92763 = (0);
while(true){
if((i__91720_92763 < count__91719_92762)){
var node_92764 = chunk__91718_92761.cljs$core$IIndexed$_nth$arity$2(null,i__91720_92763);
var id_92765 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node_92764);
seen_ids.add(id_92765);

var temp__5825__auto___92766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(displays,id_92765);
if(cljs.core.truth_(temp__5825__auto___92766)){
var display_92767 = temp__5825__auto___92766;
if(frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,node_92764)){
frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display_92767,node_92764,frontend.extensions.graph.pixi.logic.node_emphasis(cljs.core.deref(highlight_state_STAR_),id_92765),cljs.core.deref(world_scale_STAR_),view_mode);

frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display_92767,1.0);
} else {
frontend.extensions.graph.pixi.hide_display_now_BANG_(display_92767);
}
} else {
}


var G__92768 = seq__91716_92760;
var G__92769 = chunk__91718_92761;
var G__92770 = count__91719_92762;
var G__92771 = (i__91720_92763 + (1));
seq__91716_92760 = G__92768;
chunk__91718_92761 = G__92769;
count__91719_92762 = G__92770;
i__91720_92763 = G__92771;
continue;
} else {
var temp__5825__auto___92772 = cljs.core.seq(seq__91716_92760);
if(temp__5825__auto___92772){
var seq__91716_92773__$1 = temp__5825__auto___92772;
if(cljs.core.chunked_seq_QMARK_(seq__91716_92773__$1)){
var c__5673__auto___92774 = cljs.core.chunk_first(seq__91716_92773__$1);
var G__92775 = cljs.core.chunk_rest(seq__91716_92773__$1);
var G__92776 = c__5673__auto___92774;
var G__92777 = cljs.core.count(c__5673__auto___92774);
var G__92778 = (0);
seq__91716_92760 = G__92775;
chunk__91718_92761 = G__92776;
count__91719_92762 = G__92777;
i__91720_92763 = G__92778;
continue;
} else {
var node_92779 = cljs.core.first(seq__91716_92773__$1);
var id_92780 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node_92779);
seen_ids.add(id_92780);

var temp__5825__auto___92781__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(displays,id_92780);
if(cljs.core.truth_(temp__5825__auto___92781__$1)){
var display_92782 = temp__5825__auto___92781__$1;
if(frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,node_92779)){
frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display_92782,node_92779,frontend.extensions.graph.pixi.logic.node_emphasis(cljs.core.deref(highlight_state_STAR_),id_92780),cljs.core.deref(world_scale_STAR_),view_mode);

frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display_92782,1.0);
} else {
frontend.extensions.graph.pixi.hide_display_now_BANG_(display_92782);
}
} else {
}


var G__92783 = cljs.core.next(seq__91716_92773__$1);
var G__92784 = null;
var G__92785 = (0);
var G__92786 = (0);
seq__91716_92760 = G__92783;
chunk__91718_92761 = G__92784;
count__91719_92762 = G__92785;
i__91720_92763 = G__92786;
continue;
}
} else {
}
}
break;
}

var seq__91740 = cljs.core.seq(displays);
var chunk__91741 = null;
var count__91742 = (0);
var i__91743 = (0);
while(true){
if((i__91743 < count__91742)){
var vec__91771 = chunk__91741.cljs$core$IIndexed$_nth$arity$2(null,i__91743);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91771,(0),null);
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91771,(1),null);
if(cljs.core.truth_(seen_ids.has(id))){
} else {
frontend.extensions.graph.pixi.hide_display_now_BANG_(display);
}


var G__92787 = seq__91740;
var G__92788 = chunk__91741;
var G__92789 = count__91742;
var G__92790 = (i__91743 + (1));
seq__91740 = G__92787;
chunk__91741 = G__92788;
count__91742 = G__92789;
i__91743 = G__92790;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__91740);
if(temp__5825__auto__){
var seq__91740__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91740__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__91740__$1);
var G__92791 = cljs.core.chunk_rest(seq__91740__$1);
var G__92792 = c__5673__auto__;
var G__92793 = cljs.core.count(c__5673__auto__);
var G__92794 = (0);
seq__91740 = G__92791;
chunk__91741 = G__92792;
count__91742 = G__92793;
i__91743 = G__92794;
continue;
} else {
var vec__91782 = cljs.core.first(seq__91740__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91782,(0),null);
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91782,(1),null);
if(cljs.core.truth_(seen_ids.has(id))){
} else {
frontend.extensions.graph.pixi.hide_display_now_BANG_(display);
}


var G__92798 = cljs.core.next(seq__91740__$1);
var G__92799 = null;
var G__92800 = (0);
var G__92801 = (0);
seq__91740 = G__92798;
chunk__91741 = G__92799;
count__91742 = G__92800;
i__91743 = G__92801;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"sync-styles!","sync-styles!",360119950),(function (){
var node_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),node], null);
}),(current_layout_nodes.cljs$core$IFn$_invoke$arity$0 ? current_layout_nodes.cljs$core$IFn$_invoke$arity$0() : current_layout_nodes.call(null))));
var seq__91785 = cljs.core.seq(displays);
var chunk__91786 = null;
var count__91787 = (0);
var i__91788 = (0);
while(true){
if((i__91788 < count__91787)){
var vec__91795 = chunk__91786.cljs$core$IIndexed$_nth$arity$2(null,i__91788);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91795,(0),null);
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91795,(1),null);
var temp__5825__auto___92804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_by_id,id);
if(cljs.core.truth_(temp__5825__auto___92804)){
var node_92805 = temp__5825__auto___92804;
if(frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,node_92805)){
frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display,node_92805,frontend.extensions.graph.pixi.logic.node_emphasis(cljs.core.deref(highlight_state_STAR_),id),cljs.core.deref(world_scale_STAR_),view_mode);

frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,1.0);
} else {
frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,0.0);
}
} else {
}


var G__92806 = seq__91785;
var G__92807 = chunk__91786;
var G__92808 = count__91787;
var G__92809 = (i__91788 + (1));
seq__91785 = G__92806;
chunk__91786 = G__92807;
count__91787 = G__92808;
i__91788 = G__92809;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__91785);
if(temp__5825__auto__){
var seq__91785__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91785__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__91785__$1);
var G__92814 = cljs.core.chunk_rest(seq__91785__$1);
var G__92815 = c__5673__auto__;
var G__92816 = cljs.core.count(c__5673__auto__);
var G__92817 = (0);
seq__91785 = G__92814;
chunk__91786 = G__92815;
count__91787 = G__92816;
i__91788 = G__92817;
continue;
} else {
var vec__91814 = cljs.core.first(seq__91785__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91814,(0),null);
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91814,(1),null);
var temp__5825__auto___92818__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_by_id,id);
if(cljs.core.truth_(temp__5825__auto___92818__$1)){
var node_92819 = temp__5825__auto___92818__$1;
if(frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,node_92819)){
frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display,node_92819,frontend.extensions.graph.pixi.logic.node_emphasis(cljs.core.deref(highlight_state_STAR_),id),cljs.core.deref(world_scale_STAR_),view_mode);

frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,1.0);
} else {
frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,0.0);
}
} else {
}


var G__92820 = cljs.core.next(seq__91785__$1);
var G__92821 = null;
var G__92822 = (0);
var G__92823 = (0);
seq__91785 = G__92820;
chunk__91786 = G__92821;
count__91787 = G__92822;
i__91788 = G__92823;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"tick-transitions!","tick-transitions!",954430757),(function (){
return cljs.core.boolean$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (running_QMARK_,p__91821){
var vec__91822 = p__91821;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91822,(0),null);
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91822,(1),null);
var or__5142__auto__ = frontend.extensions.graph.pixi.tick_display_transition_BANG_(display);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return running_QMARK_;
}
}),false,displays));
})], null);
} else {
var displays_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var pool_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["circle",cljs.core.PersistentVector.EMPTY], null));
var drawn_node_count_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var acquire_sprite_BANG_ = (function (kind){
var temp__5823__auto__ = cljs.core.peek(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pool_STAR_),kind));
if(cljs.core.truth_(temp__5823__auto__)){
var display = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pool_STAR_,cljs.core.update,kind,cljs.core.pop);

return display;
} else {
return (new module$node_modules$pixi_DOT_js$lib$index.Sprite(cljs.core.get.cljs$core$IFn$_invoke$arity$2(textures,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kind))));
}
});
var acquire_display_BANG_ = (function (node){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["emoji",null,"icon",null], null), null),frontend.extensions.graph.pixi.node_display_kind(node))){
return frontend.extensions.graph.pixi.create_node_display_BANG_(textures,icon_styles,node);
} else {
var kind = frontend.extensions.graph.pixi.node_sprite_kind(node);
var display = acquire_sprite_BANG_(kind);
frontend.extensions.graph.pixi.goog$module$goog$object.set(display,"logseqGraphNodeDisplay",kind);

return display;
}
});
var release_display_BANG_ = (function() {
var frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG_ = null;
var frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG___1 = (function (id){
return frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG_.cljs$core$IFn$_invoke$arity$2(id,false);
});
var frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG___2 = (function (id,destroy_QMARK_){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(displays_STAR_),id);
if(cljs.core.truth_(temp__5825__auto__)){
var display = temp__5825__auto__;
frontend.extensions.graph.pixi.remove_display_from_parent_BANG_(display);

(display.visible = false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(displays_STAR_,cljs.core.dissoc,id);

if(((cljs.core.not(destroy_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("circle",frontend.extensions.graph.pixi.display_kind(display))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(pool_STAR_,cljs.core.update,frontend.extensions.graph.pixi.display_kind(display),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([display], 0));
} else {
return display.destroy();
}
} else {
return null;
}
});
frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG_ = function(id,destroy_QMARK_){
switch(arguments.length){
case 1:
return frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG___1.call(this,id);
case 2:
return frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG___2.call(this,id,destroy_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG_.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG___1;
frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG_.cljs$core$IFn$_invoke$arity$2 = frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG___2;
return frontend$extensions$graph$pixi$render_nodes_BANG__$_release_display_BANG_;
})()
;
var mount_display_BANG_ = (function (node){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
var kind = frontend.extensions.graph.pixi.node_display_kind(node);
var existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(displays_STAR_),id);
var display = (cljs.core.truth_((function (){var and__5140__auto__ = existing;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,frontend.extensions.graph.pixi.display_kind(existing));
} else {
return and__5140__auto__;
}
})())?existing:(function (){
if(cljs.core.truth_(existing)){
release_display_BANG_(id);
} else {
}

var display = acquire_display_BANG_(node);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(displays_STAR_,cljs.core.assoc,id,display);

return display;
})()
);
var display_container = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node)))?tag_container:container);
frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display,node,frontend.extensions.graph.pixi.logic.node_emphasis(cljs.core.deref(highlight_state_STAR_),id),cljs.core.deref(world_scale_STAR_),view_mode);

frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,1.0);

if((display.parent === display_container)){
return null;
} else {
frontend.extensions.graph.pixi.remove_display_from_parent_BANG_(display);

return display_container.addChild(display);
}
});
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"textures","textures",560681081),textures,new cljs.core.Keyword(null,"displays*","displays*",-1705291058),displays_STAR_,new cljs.core.Keyword(null,"drawn-node-count","drawn-node-count",-1057152275),drawn_node_count_STAR_,new cljs.core.Keyword(null,"sync-styles!","sync-styles!",360119950),(function (){
var seq__91828 = cljs.core.seq(cljs.core.deref(displays_STAR_));
var chunk__91829 = null;
var count__91830 = (0);
var i__91831 = (0);
while(true){
if((i__91831 < count__91830)){
var vec__91839 = chunk__91829.cljs$core$IIndexed$_nth$arity$2(null,i__91831);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91839,(0),null);
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91839,(1),null);
var temp__5825__auto___92838 = cljs.core.some(((function (seq__91828,chunk__91829,count__91830,i__91831,vec__91839,id,display,displays_STAR_,pool_STAR_,drawn_node_count_STAR_,acquire_sprite_BANG_,acquire_display_BANG_,release_display_BANG_,mount_display_BANG_,container,textures,icon_styles,node_count,max_nodes,virtual_QMARK_,world_scale_STAR_){
return (function (p1__91705_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91705_SHARP_))){
return p1__91705_SHARP_;
} else {
return null;
}
});})(seq__91828,chunk__91829,count__91830,i__91831,vec__91839,id,display,displays_STAR_,pool_STAR_,drawn_node_count_STAR_,acquire_sprite_BANG_,acquire_display_BANG_,release_display_BANG_,mount_display_BANG_,container,textures,icon_styles,node_count,max_nodes,virtual_QMARK_,world_scale_STAR_))
,(current_layout_nodes.cljs$core$IFn$_invoke$arity$0 ? current_layout_nodes.cljs$core$IFn$_invoke$arity$0() : current_layout_nodes.call(null)));
if(cljs.core.truth_(temp__5825__auto___92838)){
var node_92843 = temp__5825__auto___92838;
if(frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,node_92843)){
frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display,node_92843,frontend.extensions.graph.pixi.logic.node_emphasis(cljs.core.deref(highlight_state_STAR_),id),cljs.core.deref(world_scale_STAR_),view_mode);

frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,1.0);
} else {
frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,0.0);
}
} else {
}


var G__92844 = seq__91828;
var G__92845 = chunk__91829;
var G__92846 = count__91830;
var G__92847 = (i__91831 + (1));
seq__91828 = G__92844;
chunk__91829 = G__92845;
count__91830 = G__92846;
i__91831 = G__92847;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__91828);
if(temp__5825__auto__){
var seq__91828__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91828__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__91828__$1);
var G__92851 = cljs.core.chunk_rest(seq__91828__$1);
var G__92852 = c__5673__auto__;
var G__92853 = cljs.core.count(c__5673__auto__);
var G__92854 = (0);
seq__91828 = G__92851;
chunk__91829 = G__92852;
count__91830 = G__92853;
i__91831 = G__92854;
continue;
} else {
var vec__91843 = cljs.core.first(seq__91828__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91843,(0),null);
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91843,(1),null);
var temp__5825__auto___92855__$1 = cljs.core.some(((function (seq__91828,chunk__91829,count__91830,i__91831,vec__91843,id,display,seq__91828__$1,temp__5825__auto__,displays_STAR_,pool_STAR_,drawn_node_count_STAR_,acquire_sprite_BANG_,acquire_display_BANG_,release_display_BANG_,mount_display_BANG_,container,textures,icon_styles,node_count,max_nodes,virtual_QMARK_,world_scale_STAR_){
return (function (p1__91705_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91705_SHARP_))){
return p1__91705_SHARP_;
} else {
return null;
}
});})(seq__91828,chunk__91829,count__91830,i__91831,vec__91843,id,display,seq__91828__$1,temp__5825__auto__,displays_STAR_,pool_STAR_,drawn_node_count_STAR_,acquire_sprite_BANG_,acquire_display_BANG_,release_display_BANG_,mount_display_BANG_,container,textures,icon_styles,node_count,max_nodes,virtual_QMARK_,world_scale_STAR_))
,(current_layout_nodes.cljs$core$IFn$_invoke$arity$0 ? current_layout_nodes.cljs$core$IFn$_invoke$arity$0() : current_layout_nodes.call(null)));
if(cljs.core.truth_(temp__5825__auto___92855__$1)){
var node_92856 = temp__5825__auto___92855__$1;
if(frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,node_92856)){
frontend.extensions.graph.pixi.configure_node_display_BANG_.cljs$core$IFn$_invoke$arity$5(display,node_92856,frontend.extensions.graph.pixi.logic.node_emphasis(cljs.core.deref(highlight_state_STAR_),id),cljs.core.deref(world_scale_STAR_),view_mode);

frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,1.0);
} else {
frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display,0.0);
}
} else {
}


var G__92860 = cljs.core.next(seq__91828__$1);
var G__92861 = null;
var G__92862 = (0);
var G__92863 = (0);
seq__91828 = G__92860;
chunk__91829 = G__92861;
count__91830 = G__92862;
i__91831 = G__92863;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"sync!","sync!",348990713),(function (world,width,height,hovered_node_id){
var scale = world.scale.x;
var _ = cljs.core.reset_BANG_(world_scale_STAR_,scale);
var viewport = frontend.extensions.graph.pixi.render_viewport(world,width,height);
var layouted_nodes = (current_layout_nodes.cljs$core$IFn$_invoke$arity$0 ? current_layout_nodes.cljs$core$IFn$_invoke$arity$0() : current_layout_nodes.call(null));
var visible_nodes = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_nodes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91708_SHARP_){
return frontend.extensions.graph.pixi.node_in_viewport_QMARK_(viewport,p1__91708_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91707_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__91707_SHARP_);
}),layouted_nodes))));
var visible_nodes__$1 = (cljs.core.truth_(hovered_node_id)?(function (){var temp__5823__auto__ = cljs.core.some((function (node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hovered_node_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))){
return node;
} else {
return null;
}
}),layouted_nodes);
if(cljs.core.truth_(temp__5823__auto__)){
var hovered_node = temp__5823__auto__;
if(frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,hovered_node)){
return cljs.core.vec(cljs.core.cons(hovered_node,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__91709_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hovered_node_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91709_SHARP_));
}),visible_nodes)));
} else {
return visible_nodes;
}
} else {
return visible_nodes;
}
})():visible_nodes);
var selected_id_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),visible_nodes__$1));
var seq__91848_92864 = cljs.core.seq(visible_nodes__$1);
var chunk__91849_92865 = null;
var count__91850_92866 = (0);
var i__91851_92867 = (0);
while(true){
if((i__91851_92867 < count__91850_92866)){
var node_92871 = chunk__91849_92865.cljs$core$IIndexed$_nth$arity$2(null,i__91851_92867);
mount_display_BANG_(node_92871);


var G__92872 = seq__91848_92864;
var G__92873 = chunk__91849_92865;
var G__92874 = count__91850_92866;
var G__92875 = (i__91851_92867 + (1));
seq__91848_92864 = G__92872;
chunk__91849_92865 = G__92873;
count__91850_92866 = G__92874;
i__91851_92867 = G__92875;
continue;
} else {
var temp__5825__auto___92876 = cljs.core.seq(seq__91848_92864);
if(temp__5825__auto___92876){
var seq__91848_92877__$1 = temp__5825__auto___92876;
if(cljs.core.chunked_seq_QMARK_(seq__91848_92877__$1)){
var c__5673__auto___92878 = cljs.core.chunk_first(seq__91848_92877__$1);
var G__92879 = cljs.core.chunk_rest(seq__91848_92877__$1);
var G__92880 = c__5673__auto___92878;
var G__92881 = cljs.core.count(c__5673__auto___92878);
var G__92882 = (0);
seq__91848_92864 = G__92879;
chunk__91849_92865 = G__92880;
count__91850_92866 = G__92881;
i__91851_92867 = G__92882;
continue;
} else {
var node_92883 = cljs.core.first(seq__91848_92877__$1);
mount_display_BANG_(node_92883);


var G__92884 = cljs.core.next(seq__91848_92877__$1);
var G__92885 = null;
var G__92886 = (0);
var G__92887 = (0);
seq__91848_92864 = G__92884;
chunk__91849_92865 = G__92885;
count__91850_92866 = G__92886;
i__91851_92867 = G__92887;
continue;
}
} else {
}
}
break;
}

var seq__91855_92888 = cljs.core.seq(cljs.core.keys(cljs.core.deref(displays_STAR_)));
var chunk__91856_92889 = null;
var count__91857_92890 = (0);
var i__91858_92891 = (0);
while(true){
if((i__91858_92891 < count__91857_92890)){
var id_92892 = chunk__91856_92889.cljs$core$IIndexed$_nth$arity$2(null,i__91858_92891);
if(cljs.core.contains_QMARK_(selected_id_set,id_92892)){
} else {
var temp__5825__auto___92893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(displays_STAR_),id_92892);
if(cljs.core.truth_(temp__5825__auto___92893)){
var display_92894 = temp__5825__auto___92893;
frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display_92894,0.0);
} else {
}
}


var G__92895 = seq__91855_92888;
var G__92896 = chunk__91856_92889;
var G__92897 = count__91857_92890;
var G__92898 = (i__91858_92891 + (1));
seq__91855_92888 = G__92895;
chunk__91856_92889 = G__92896;
count__91857_92890 = G__92897;
i__91858_92891 = G__92898;
continue;
} else {
var temp__5825__auto___92899 = cljs.core.seq(seq__91855_92888);
if(temp__5825__auto___92899){
var seq__91855_92902__$1 = temp__5825__auto___92899;
if(cljs.core.chunked_seq_QMARK_(seq__91855_92902__$1)){
var c__5673__auto___92907 = cljs.core.chunk_first(seq__91855_92902__$1);
var G__92908 = cljs.core.chunk_rest(seq__91855_92902__$1);
var G__92909 = c__5673__auto___92907;
var G__92910 = cljs.core.count(c__5673__auto___92907);
var G__92911 = (0);
seq__91855_92888 = G__92908;
chunk__91856_92889 = G__92909;
count__91857_92890 = G__92910;
i__91858_92891 = G__92911;
continue;
} else {
var id_92912 = cljs.core.first(seq__91855_92902__$1);
if(cljs.core.contains_QMARK_(selected_id_set,id_92912)){
} else {
var temp__5825__auto___92913__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(displays_STAR_),id_92912);
if(cljs.core.truth_(temp__5825__auto___92913__$1)){
var display_92916 = temp__5825__auto___92913__$1;
frontend.extensions.graph.pixi.set_display_transition_target_BANG_(display_92916,0.0);
} else {
}
}


var G__92917 = cljs.core.next(seq__91855_92902__$1);
var G__92918 = null;
var G__92919 = (0);
var G__92920 = (0);
seq__91855_92888 = G__92917;
chunk__91856_92889 = G__92918;
count__91857_92890 = G__92919;
i__91858_92891 = G__92920;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(drawn_node_count_STAR_,cljs.core.count(selected_id_set));
}),new cljs.core.Keyword(null,"tick-transitions!","tick-transitions!",954430757),(function (){
var running_QMARK_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (running_QMARK_,p__91861){
var vec__91862 = p__91861;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91862,(0),null);
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91862,(1),null);
var running_QMARK___$1 = (function (){var or__5142__auto__ = frontend.extensions.graph.pixi.tick_display_transition_BANG_(display);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return running_QMARK_;
}
})();
if((((frontend.extensions.graph.pixi.display_transition_target(display) === (0))) && (cljs.core.not(display.visible)))){
release_display_BANG_(id,true);
} else {
}

return running_QMARK___$1;
}),false,cljs.core.deref(displays_STAR_));
return cljs.core.boolean$(running_QMARK_);
})], null);
}
});
frontend.extensions.graph.pixi.build_neighbor_map = (function frontend$extensions$graph$pixi$build_neighbor_map(links){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__91865){
var map__91866 = p__91865;
var map__91866__$1 = cljs.core.__destructure_map(map__91866);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91866__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91866__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,source,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),target),target,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),source);
}),cljs.core.PersistentArrayMap.EMPTY,links);
});
frontend.extensions.graph.pixi.rendered_sprite = (function frontend$extensions$graph$pixi$rendered_sprite(node_render_info,node_id){
var temp__5823__auto__ = new cljs.core.Keyword(null,"displays*","displays*",-1705291058).cljs$core$IFn$_invoke$arity$1(node_render_info);
if(cljs.core.truth_(temp__5823__auto__)){
var displays_STAR_ = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(displays_STAR_),node_id);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"displays","displays",1485464189).cljs$core$IFn$_invoke$arity$1(node_render_info),node_id);
}
});
frontend.extensions.graph.pixi.update_node_position = (function frontend$extensions$graph$pixi$update_node_position(layouted_nodes,node_index_by_id,node_id,x,y){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_index_by_id,node_id);
if(cljs.core.truth_(temp__5823__auto__)){
var idx = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(layouted_nodes,idx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layouted_nodes,idx),new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0)));
} else {
return layouted_nodes;
}
});
frontend.extensions.graph.pixi.update_node_positions = (function frontend$extensions$graph$pixi$update_node_positions(layouted_nodes,node_index_by_id,positions_by_id){
return cljs.core.reduce_kv((function (nodes,node_id,p__91875){
var map__91876 = p__91875;
var map__91876__$1 = cljs.core.__destructure_map(map__91876);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91876__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91876__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return frontend.extensions.graph.pixi.update_node_position(nodes,node_index_by_id,node_id,x,y);
}),layouted_nodes,positions_by_id);
});
frontend.extensions.graph.pixi.setup_pan_and_zoom_BANG_ = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG_(canvas,world,p__91877){
var map__91878 = p__91877;
var map__91878__$1 = cljs.core.__destructure_map(map__91878);
var on_node_drag_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-node-drag-end","on-node-drag-end",-1645102978));
var gesture_locked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"gesture-locked?","gesture-locked?",810606718));
var on_edge_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-edge-select","on-edge-select",1944821024));
var node_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"node-selected?","node-selected?",-1118851615));
var on_scale_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-scale-change","on-scale-change",-970233501));
var on_gesture_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-gesture-start","on-gesture-start",767182374));
var on_node_activate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-node-activate","on-node-activate",-186984250));
var on_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-transform","on-transform",-1205343866));
var get_edge_hit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"get-edge-hit","get-edge-hit",-2113423929));
var on_gesture_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-gesture-point","on-gesture-point",-1379371702));
var on_node_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-node-drag","on-node-drag",-1985760501));
var get_node_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"get-node-index","get-node-index",1305447148));
var on_selection_clear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-selection-clear","on-selection-clear",705262254));
var on_node_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-node-select","on-node-select",958753519));
var on_hover_node_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-hover-node-change","on-hover-node-change",439461264));
var on_node_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91878__$1,new cljs.core.Keyword(null,"on-node-preview","on-node-preview",169104498));
var dragging_world_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_node_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var moved_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_start = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
var hover_node_id_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var last_click_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var emit_gesture_point_BANG_ = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_emit_gesture_point_BANG_(sx,sy){
if(cljs.core.fn_QMARK_(on_gesture_point)){
var vec__91935 = screen__GT_world(sx,sy);
var world_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91935,(0),null);
var world_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91935,(1),null);
var G__91938 = world_x;
var G__91939 = world_y;
var G__91940 = world.scale.x;
return (on_gesture_point.cljs$core$IFn$_invoke$arity$3 ? on_gesture_point.cljs$core$IFn$_invoke$arity$3(G__91938,G__91939,G__91940) : on_gesture_point.call(null,G__91938,G__91939,G__91940));
} else {
return null;
}
});
var on_pointer_down = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_on_pointer_down(e){
var vec__91941 = canvas_point(e);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91941,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91941,(1),null);
var vec__91944 = screen__GT_world(sx,sy);
var world_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91944,(0),null);
var world_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91944,(1),null);
var scale = world.scale.x;
var hit = frontend.extensions.graph.pixi.hit_test_node((get_node_index.cljs$core$IFn$_invoke$arity$0 ? get_node_index.cljs$core$IFn$_invoke$arity$0() : get_node_index.call(null)),world_x,world_y,scale);
var locked_QMARK_ = gesture_locked_now_QMARK_();
var locked_QMARK___$1 = (cljs.core.truth_((function (){var and__5140__auto__ = locked_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(hit);
} else {
return and__5140__auto__;
}
})())?(function (){
if(cljs.core.fn_QMARK_(on_gesture_start)){
(on_gesture_start.cljs$core$IFn$_invoke$arity$0 ? on_gesture_start.cljs$core$IFn$_invoke$arity$0() : on_gesture_start.call(null));
} else {
}

return false;
})()
:locked_QMARK_);
if(cljs.core.truth_(locked_QMARK___$1)){
e.preventDefault();

cljs.core.reset_BANG_(drag_node_STAR_,null);

cljs.core.reset_BANG_(dragging_world_QMARK_,false);

return cljs.core.reset_BANG_(moved_QMARK_,false);
} else {
emit_gesture_point_BANG_(sx,sy);

set_hover_node_BANG_(null);

cljs.core.reset_BANG_(moved_QMARK_,false);

var temp__5823__auto__ = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(hit);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
return cljs.core.reset_BANG_(drag_node_STAR_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),(world_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),(world_y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"current-x","current-x",-1475109667),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"current-y","current-y",1208809287),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node)], null));
} else {
cljs.core.reset_BANG_(dragging_world_QMARK_,true);

return cljs.core.reset_BANG_(drag_start,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy,world.x,world.y], null));
}
}
});
var on_key_down = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_on_key_down(_e){
return null;
});
var on_pointer_move = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_on_pointer_move(e){
if(cljs.core.truth_(gesture_locked_now_QMARK_())){
return null;
} else {
if(cljs.core.truth_(cljs.core.deref(drag_node_STAR_))){
var vec__91947 = canvas_point(e);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91947,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91947,(1),null);
var vec__91950 = screen__GT_world(sx,sy);
var world_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91950,(0),null);
var world_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91950,(1),null);
var map__91953 = cljs.core.deref(drag_node_STAR_);
var map__91953__$1 = cljs.core.__destructure_map(map__91953);
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91953__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91953__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var current_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91953__$1,new cljs.core.Keyword(null,"current-x","current-x",-1475109667));
var current_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91953__$1,new cljs.core.Keyword(null,"current-y","current-y",1208809287));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91953__$1,new cljs.core.Keyword(null,"node","node",581201198));
var next_x = (world_x - offset_x);
var next_y = (world_y - offset_y);
var dx = (next_x - current_x);
var dy = (next_y - current_y);
if((((Math.abs(dx) > 0.45)) || ((Math.abs(dy) > 0.45)))){
cljs.core.reset_BANG_(moved_QMARK_,true);
} else {
}

cljs.core.reset_BANG_(drag_node_STAR_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),offset_x,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),offset_y,new cljs.core.Keyword(null,"current-x","current-x",-1475109667),next_x,new cljs.core.Keyword(null,"current-y","current-y",1208809287),next_y], null));

if(cljs.core.fn_QMARK_(on_node_drag)){
(on_node_drag.cljs$core$IFn$_invoke$arity$3 ? on_node_drag.cljs$core$IFn$_invoke$arity$3(node,next_x,next_y) : on_node_drag.call(null,node,next_x,next_y));
} else {
}

if(cljs.core.fn_QMARK_(on_transform)){
return (on_transform.cljs$core$IFn$_invoke$arity$0 ? on_transform.cljs$core$IFn$_invoke$arity$0() : on_transform.call(null));
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.deref(dragging_world_QMARK_))){
var vec__91954 = canvas_point(e);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91954,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91954,(1),null);
var vec__91957 = cljs.core.deref(drag_start);
var start_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91957,(0),null);
var start_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91957,(1),null);
var world_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91957,(2),null);
var world_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91957,(3),null);
var dx = (sx - start_x);
var dy = (sy - start_y);
if((((Math.abs(dx) > (2))) || ((Math.abs(dy) > (2))))){
cljs.core.reset_BANG_(moved_QMARK_,true);
} else {
}

(world.x = (world_x + dx));

(world.y = (world_y + dy));

if(cljs.core.fn_QMARK_(on_transform)){
return (on_transform.cljs$core$IFn$_invoke$arity$0 ? on_transform.cljs$core$IFn$_invoke$arity$0() : on_transform.call(null));
} else {
return null;
}
} else {
var vec__91960 = canvas_point(e);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91960,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91960,(1),null);
var vec__91963 = screen__GT_world(sx,sy);
var world_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91963,(0),null);
var world_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91963,(1),null);
var scale = world.scale.x;
var hit = frontend.extensions.graph.pixi.hit_test_node((get_node_index.cljs$core$IFn$_invoke$arity$0 ? get_node_index.cljs$core$IFn$_invoke$arity$0() : get_node_index.call(null)),world_x,world_y,scale);
emit_gesture_point_BANG_(sx,sy);

return set_hover_node_BANG_((function (){var G__91966 = hit;
var G__91966__$1 = (((G__91966 == null))?null:new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__91966));
if((G__91966__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__91966__$1);
}
})());

}
}
}
});
var on_pointer_leave = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_on_pointer_leave(e){
on_pointer_up(e);

return set_hover_node_BANG_(null);
});
var handle_node_click_BANG_ = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_handle_node_click_BANG_(node,e){
if(cljs.core.truth_(frontend.util.meta_key_QMARK_(e))){
e.preventDefault();

e.stopPropagation();

cljs.core.reset_BANG_(last_click_STAR_,null);

if(cljs.core.fn_QMARK_(on_node_preview)){
return (on_node_preview.cljs$core$IFn$_invoke$arity$2 ? on_node_preview.cljs$core$IFn$_invoke$arity$2(node,e) : on_node_preview.call(null,node,e));
} else {
return null;
}
} else {
var map__91967 = frontend.extensions.graph.pixi.logic.node_click_action(cljs.core.deref(last_click_STAR_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),(function (){var and__5140__auto__ = cljs.core.fn_QMARK_(node_selected_QMARK_);
if(and__5140__auto__){
var G__91969 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
return (node_selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? node_selected_QMARK_.cljs$core$IFn$_invoke$arity$1(G__91969) : node_selected_QMARK_.call(null,G__91969));
} else {
return and__5140__auto__;
}
})(),new cljs.core.Keyword(null,"open?","open?",1238443125),e.shiftKey], null),performance.now());
var map__91967__$1 = cljs.core.__destructure_map(map__91967);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91967__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var next_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91967__$1,new cljs.core.Keyword(null,"next-click","next-click",381608337));
cljs.core.reset_BANG_(last_click_STAR_,next_click);

var G__91970 = action;
var G__91970__$1 = (((G__91970 instanceof cljs.core.Keyword))?G__91970.fqn:null);
switch (G__91970__$1) {
case "open":
if(cljs.core.fn_QMARK_(on_node_activate)){
return (on_node_activate.cljs$core$IFn$_invoke$arity$2 ? on_node_activate.cljs$core$IFn$_invoke$arity$2(node,e) : on_node_activate.call(null,node,e));
} else {
return null;
}

break;
case "unhighlight":
if(cljs.core.fn_QMARK_(on_node_select)){
return (on_node_select.cljs$core$IFn$_invoke$arity$2 ? on_node_select.cljs$core$IFn$_invoke$arity$2(node,true) : on_node_select.call(null,node,true));
} else {
return null;
}

break;
case "highlight":
if(cljs.core.fn_QMARK_(on_node_select)){
return (on_node_select.cljs$core$IFn$_invoke$arity$2 ? on_node_select.cljs$core$IFn$_invoke$arity$2(node,false) : on_node_select.call(null,node,false));
} else {
return null;
}

break;
default:
return null;

}
}
});
var screen__GT_world = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_screen__GT_world(sx,sy){
var scale = world.scale.x;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((sx - world.x) / scale),((sy - world.y) / scale)], null);
});
var canvas_point = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_canvas_point(e){
var rect = canvas.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - rect.left),(e.clientY - rect.top)], null);
});
var set_hover_node_BANG_ = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_set_hover_node_BANG_(node_id){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_id,cljs.core.deref(hover_node_id_STAR_))){
cljs.core.reset_BANG_(hover_node_id_STAR_,node_id);

if(cljs.core.fn_QMARK_(on_hover_node_change)){
return (on_hover_node_change.cljs$core$IFn$_invoke$arity$1 ? on_hover_node_change.cljs$core$IFn$_invoke$arity$1(node_id) : on_hover_node_change.call(null,node_id));
} else {
return null;
}
} else {
return null;
}
});
var on_wheel = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_on_wheel(e){
e.preventDefault();

if(cljs.core.fn_QMARK_(on_gesture_start)){
(on_gesture_start.cljs$core$IFn$_invoke$arity$0 ? on_gesture_start.cljs$core$IFn$_invoke$arity$0() : on_gesture_start.call(null));
} else {
}

var vec__91972 = canvas_point(e);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91972,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91972,(1),null);
var vec__91975 = screen__GT_world(sx,sy);
var before_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91975,(0),null);
var before_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91975,(1),null);
var transform = frontend.extensions.graph.pixi.logic.wheel_zoom_transform(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"world-x","world-x",-907540079),before_x,new cljs.core.Keyword(null,"world-y","world-y",401775680),before_y,new cljs.core.Keyword(null,"scale","scale",-230427353),world.scale.x], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen-x","screen-x",-438778187),sx,new cljs.core.Keyword(null,"screen-y","screen-y",-773698245),sy,new cljs.core.Keyword(null,"delta-y","delta-y",938971239),e.deltaY,new cljs.core.Keyword(null,"locked?","locked?",995448757),gesture_locked_now_QMARK_()], null));
if(cljs.core.truth_(transform)){
var map__91978 = transform;
var map__91978__$1 = cljs.core.__destructure_map(map__91978);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91978__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91978__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91978__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
(world.scale.x = scale);

(world.scale.y = scale);

(world.x = x);

(world.y = y);

if(cljs.core.fn_QMARK_(on_gesture_point)){
(on_gesture_point.cljs$core$IFn$_invoke$arity$3 ? on_gesture_point.cljs$core$IFn$_invoke$arity$3(before_x,before_y,scale) : on_gesture_point.call(null,before_x,before_y,scale));
} else {
}

if(cljs.core.fn_QMARK_(on_scale_change)){
var G__91979_92958 = scale;
var G__91980_92959 = e.deltaY;
(on_scale_change.cljs$core$IFn$_invoke$arity$2 ? on_scale_change.cljs$core$IFn$_invoke$arity$2(G__91979_92958,G__91980_92959) : on_scale_change.call(null,G__91979_92958,G__91980_92959));
} else {
}

if(cljs.core.fn_QMARK_(on_transform)){
return (on_transform.cljs$core$IFn$_invoke$arity$0 ? on_transform.cljs$core$IFn$_invoke$arity$0() : on_transform.call(null));
} else {
return null;
}
} else {
return null;
}
});
var on_pointer_up = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_on_pointer_up(e){
if(cljs.core.truth_(gesture_locked_now_QMARK_())){
cljs.core.reset_BANG_(drag_node_STAR_,null);

cljs.core.reset_BANG_(dragging_world_QMARK_,false);

return cljs.core.reset_BANG_(moved_QMARK_,false);
} else {
if(cljs.core.truth_(cljs.core.deref(drag_node_STAR_))){
var map__91983 = cljs.core.deref(drag_node_STAR_);
var map__91983__$1 = cljs.core.__destructure_map(map__91983);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91983__$1,new cljs.core.Keyword(null,"node","node",581201198));
var current_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91983__$1,new cljs.core.Keyword(null,"current-x","current-x",-1475109667));
var current_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91983__$1,new cljs.core.Keyword(null,"current-y","current-y",1208809287));
cljs.core.reset_BANG_(drag_node_STAR_,null);

if(cljs.core.truth_(cljs.core.deref(moved_QMARK_))){
if(cljs.core.fn_QMARK_(on_node_drag_end)){
return (on_node_drag_end.cljs$core$IFn$_invoke$arity$3 ? on_node_drag_end.cljs$core$IFn$_invoke$arity$3(node,current_x,current_y) : on_node_drag_end.call(null,node,current_x,current_y));
} else {
return null;
}
} else {
return handle_node_click_BANG_(node,e);
}
} else {
if(cljs.core.truth_(cljs.core.deref(dragging_world_QMARK_))){
cljs.core.reset_BANG_(dragging_world_QMARK_,false);

if(cljs.core.truth_(cljs.core.deref(moved_QMARK_))){
return null;
} else {
var vec__91984 = canvas_point(e);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91984,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91984,(1),null);
var vec__91987 = screen__GT_world(sx,sy);
var world_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91987,(0),null);
var world_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91987,(1),null);
var scale = world.scale.x;
var hit = frontend.extensions.graph.pixi.hit_test_node((get_node_index.cljs$core$IFn$_invoke$arity$0 ? get_node_index.cljs$core$IFn$_invoke$arity$0() : get_node_index.call(null)),world_x,world_y,scale);
var temp__5823__auto__ = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(hit);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
return handle_node_click_BANG_(node,e);
} else {
var temp__5823__auto____$1 = (function (){var and__5140__auto__ = cljs.core.fn_QMARK_(get_edge_hit);
if(and__5140__auto__){
return (get_edge_hit.cljs$core$IFn$_invoke$arity$3 ? get_edge_hit.cljs$core$IFn$_invoke$arity$3(world_x,world_y,scale) : get_edge_hit.call(null,world_x,world_y,scale));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto____$1)){
var edge = temp__5823__auto____$1;
cljs.core.reset_BANG_(last_click_STAR_,null);

if(cljs.core.fn_QMARK_(on_edge_select)){
return (on_edge_select.cljs$core$IFn$_invoke$arity$1 ? on_edge_select.cljs$core$IFn$_invoke$arity$1(edge) : on_edge_select.call(null,edge));
} else {
return null;
}
} else {
if(cljs.core.fn_QMARK_(on_selection_clear)){
cljs.core.reset_BANG_(last_click_STAR_,null);

return (on_selection_clear.cljs$core$IFn$_invoke$arity$0 ? on_selection_clear.cljs$core$IFn$_invoke$arity$0() : on_selection_clear.call(null));
} else {
return null;
}
}
}
}
} else {
return null;
}
}
}
});
var gesture_locked_now_QMARK_ = (function frontend$extensions$graph$pixi$setup_pan_and_zoom_BANG__$_gesture_locked_now_QMARK_(){
var and__5140__auto__ = cljs.core.fn_QMARK_(gesture_locked_QMARK_);
if(and__5140__auto__){
return (gesture_locked_QMARK_.cljs$core$IFn$_invoke$arity$0 ? gesture_locked_QMARK_.cljs$core$IFn$_invoke$arity$0() : gesture_locked_QMARK_.call(null));
} else {
return and__5140__auto__;
}
});
canvas.addEventListener("pointerdown",on_pointer_down);

canvas.addEventListener("pointermove",on_pointer_move);

canvas.addEventListener("pointerup",on_pointer_up);

canvas.addEventListener("pointerleave",on_pointer_leave);

canvas.addEventListener("wheel",on_wheel,({"passive": false}));

window.addEventListener("keydown",on_key_down);

return (function (){
canvas.removeEventListener("pointerdown",on_pointer_down);

canvas.removeEventListener("pointermove",on_pointer_move);

canvas.removeEventListener("pointerup",on_pointer_up);

canvas.removeEventListener("pointerleave",on_pointer_leave);

canvas.removeEventListener("wheel",on_wheel);

return window.removeEventListener("keydown",on_key_down);
});
});
frontend.extensions.graph.pixi.edge_label_limit = (420);
frontend.extensions.graph.pixi.position_edge_label_entry_BANG_ = (function frontend$extensions$graph$pixi$position_edge_label_entry_BANG_(entry,world,width,height,layout_by_id){
var source = frontend.extensions.graph.pixi.goog$module$goog$object.get(entry,"logseqGraphEdgeSource");
var target = frontend.extensions.graph.pixi.goog$module$goog$object.get(entry,"logseqGraphEdgeTarget");
var parallel_offset = frontend.extensions.graph.pixi.goog$module$goog$object.get(entry,"logseqGraphEdgeParallelOffset");
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,source);
if(cljs.core.truth_(temp__5823__auto__)){
var from_node = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_by_id,target);
if(cljs.core.truth_(temp__5823__auto____$1)){
var to_node = temp__5823__auto____$1;
var map__91992 = frontend.extensions.graph.pixi.edge_segment(from_node,to_node,parallel_offset);
var map__91992__$1 = cljs.core.__destructure_map(map__91992);
var start_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91992__$1,new cljs.core.Keyword(null,"start-x","start-x",-193941684));
var start_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91992__$1,new cljs.core.Keyword(null,"start-y","start-y",-771244577));
var end_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91992__$1,new cljs.core.Keyword(null,"end-x","end-x",-1323983821));
var end_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91992__$1,new cljs.core.Keyword(null,"end-y","end-y",859881965));
var mid_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91992__$1,new cljs.core.Keyword(null,"mid-x","mid-x",-1079680749));
var mid_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91992__$1,new cljs.core.Keyword(null,"mid-y","mid-y",-546656108));
var map__91993 = frontend.extensions.graph.pixi.screen_point(world,start_x,start_y);
var map__91993__$1 = cljs.core.__destructure_map(map__91993);
var from_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91993__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var from_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91993__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__91994 = frontend.extensions.graph.pixi.screen_point(world,end_x,end_y);
var map__91994__$1 = cljs.core.__destructure_map(map__91994);
var to_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91994__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var to_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91994__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__91995 = frontend.extensions.graph.pixi.screen_point(world,mid_x,mid_y);
var map__91995__$1 = cljs.core.__destructure_map(map__91995);
var label_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91995__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var label_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91995__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dx = (to_x - from_x);
var dy = (to_y - from_y);
var distance = Math.sqrt(((dx * dx) + (dy * dy)));
var visible_QMARK_ = (((distance > (68))) && (((((((-80) <= label_x)) && ((label_x <= (width + (80)))))) && (((((-40) <= label_y)) && ((label_y <= (height + (40)))))))));
(entry.x = label_x);

(entry.y = label_y);

var label_scale_92993 = frontend.extensions.graph.pixi.edge_label_display_scale(world.scale.x);
(entry.scale.x = label_scale_92993);

(entry.scale.y = label_scale_92993);

(entry.rotation = frontend.extensions.graph.pixi.logic.readable_edge_label_angle(from_x,from_y,to_x,to_y));

return (entry.visible = visible_QMARK_);
} else {
return (entry.visible = false);
}
} else {
return (entry.visible = false);
}
});
frontend.extensions.graph.pixi.sync_edge_label_transform_BANG_ = (function frontend$extensions$graph$pixi$sync_edge_label_transform_BANG_(label_layer,world,width,height,layout_by_id){
var seq__92000 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(label_layer.children));
var chunk__92001 = null;
var count__92002 = (0);
var i__92003 = (0);
while(true){
if((i__92003 < count__92002)){
var entry = chunk__92001.cljs$core$IIndexed$_nth$arity$2(null,i__92003);
frontend.extensions.graph.pixi.position_edge_label_entry_BANG_(entry,world,width,height,layout_by_id);


var G__92994 = seq__92000;
var G__92995 = chunk__92001;
var G__92996 = count__92002;
var G__92997 = (i__92003 + (1));
seq__92000 = G__92994;
chunk__92001 = G__92995;
count__92002 = G__92996;
i__92003 = G__92997;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__92000);
if(temp__5825__auto__){
var seq__92000__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__92000__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__92000__$1);
var G__93002 = cljs.core.chunk_rest(seq__92000__$1);
var G__93003 = c__5673__auto__;
var G__93004 = cljs.core.count(c__5673__auto__);
var G__93005 = (0);
seq__92000 = G__93002;
chunk__92001 = G__93003;
count__92002 = G__93004;
i__92003 = G__93005;
continue;
} else {
var entry = cljs.core.first(seq__92000__$1);
frontend.extensions.graph.pixi.position_edge_label_entry_BANG_(entry,world,width,height,layout_by_id);


var G__93006 = cljs.core.next(seq__92000__$1);
var G__93007 = null;
var G__93008 = (0);
var G__93009 = (0);
seq__92000 = G__93006;
chunk__92001 = G__93007;
count__92002 = G__93008;
i__92003 = G__93009;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.extensions.graph.pixi.sync_edge_labels_BANG_ = (function frontend$extensions$graph$pixi$sync_edge_labels_BANG_(label_layer,world,width,height,layout_by_id,links,dark_QMARK_,view_mode,show_edge_labels_QMARK_){
frontend.extensions.graph.pixi.destroy_children_BANG_(label_layer);

if(cljs.core.truth_(show_edge_labels_QMARK_)){
var max_edges_93010 = frontend.extensions.graph.pixi.logic.draw_edge_limit(cljs.core.count(layout_by_id),cljs.core.count(links),view_mode);
var style_93011 = (new module$node_modules$pixi_DOT_js$lib$index.TextStyle(({"fontFamily": "Inter, Avenir Next, system-ui, sans-serif", "fontSize": (10), "fontStyle": "italic", "fill": frontend.extensions.graph.pixi.edge_label_color(dark_QMARK_), "alpha": 0.76})));
var labeled_links_93012 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.edge_label_limit,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92008_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__92008_SHARP_));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_edges_93010,links)));
var labeled_runs_93013 = frontend.extensions.graph.pixi.logic.edge_render_runs(labeled_links_93012,false);
var seq__92009_93014 = cljs.core.seq(labeled_runs_93013);
var chunk__92010_93015 = null;
var count__92011_93016 = (0);
var i__92012_93017 = (0);
while(true){
if((i__92012_93017 < count__92011_93016)){
var map__92019_93021 = chunk__92010_93015.cljs$core$IIndexed$_nth$arity$2(null,i__92012_93017);
var map__92019_93022__$1 = cljs.core.__destructure_map(map__92019_93021);
var source_93023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92019_93022__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target_93024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92019_93022__$1,new cljs.core.Keyword(null,"target","target",253001721));
var label_93025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92019_93022__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var parallel_offset_93026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92019_93022__$1,new cljs.core.Keyword(null,"parallel-offset","parallel-offset",325445442));
if(((cljs.core.contains_QMARK_(layout_by_id,source_93023)) && (cljs.core.contains_QMARK_(layout_by_id,target_93024)))){
var entry_93027 = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var text_93028 = (new module$node_modules$pixi_DOT_js$lib$index.Text(({"text": frontend.extensions.graph.pixi.logic.label_display_text(label_93025,false), "style": style_93011})));
frontend.extensions.graph.pixi.goog$module$goog$object.set(entry_93027,"logseqGraphEdgeSource",source_93023);

frontend.extensions.graph.pixi.goog$module$goog$object.set(entry_93027,"logseqGraphEdgeTarget",target_93024);

frontend.extensions.graph.pixi.goog$module$goog$object.set(entry_93027,"logseqGraphEdgeParallelOffset",parallel_offset_93026);

var temp__5825__auto___93029 = text_93028.anchor;
if(cljs.core.truth_(temp__5825__auto___93029)){
var anchor_93030 = temp__5825__auto___93029;
(anchor_93030.x = 0.5);

(anchor_93030.y = 0.5);
} else {
}

(text_93028.x = (0));

(text_93028.y = (0));

entry_93027.addChild(text_93028);

(entry_93027.alpha = 0.78);

frontend.extensions.graph.pixi.position_edge_label_entry_BANG_(entry_93027,world,width,height,layout_by_id);

label_layer.addChild(entry_93027);
} else {
}


var G__93031 = seq__92009_93014;
var G__93032 = chunk__92010_93015;
var G__93033 = count__92011_93016;
var G__93034 = (i__92012_93017 + (1));
seq__92009_93014 = G__93031;
chunk__92010_93015 = G__93032;
count__92011_93016 = G__93033;
i__92012_93017 = G__93034;
continue;
} else {
var temp__5825__auto___93035 = cljs.core.seq(seq__92009_93014);
if(temp__5825__auto___93035){
var seq__92009_93036__$1 = temp__5825__auto___93035;
if(cljs.core.chunked_seq_QMARK_(seq__92009_93036__$1)){
var c__5673__auto___93037 = cljs.core.chunk_first(seq__92009_93036__$1);
var G__93038 = cljs.core.chunk_rest(seq__92009_93036__$1);
var G__93039 = c__5673__auto___93037;
var G__93040 = cljs.core.count(c__5673__auto___93037);
var G__93041 = (0);
seq__92009_93014 = G__93038;
chunk__92010_93015 = G__93039;
count__92011_93016 = G__93040;
i__92012_93017 = G__93041;
continue;
} else {
var map__92020_93042 = cljs.core.first(seq__92009_93036__$1);
var map__92020_93043__$1 = cljs.core.__destructure_map(map__92020_93042);
var source_93044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92020_93043__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target_93045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92020_93043__$1,new cljs.core.Keyword(null,"target","target",253001721));
var label_93046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92020_93043__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var parallel_offset_93047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92020_93043__$1,new cljs.core.Keyword(null,"parallel-offset","parallel-offset",325445442));
if(((cljs.core.contains_QMARK_(layout_by_id,source_93044)) && (cljs.core.contains_QMARK_(layout_by_id,target_93045)))){
var entry_93048 = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var text_93049 = (new module$node_modules$pixi_DOT_js$lib$index.Text(({"text": frontend.extensions.graph.pixi.logic.label_display_text(label_93046,false), "style": style_93011})));
frontend.extensions.graph.pixi.goog$module$goog$object.set(entry_93048,"logseqGraphEdgeSource",source_93044);

frontend.extensions.graph.pixi.goog$module$goog$object.set(entry_93048,"logseqGraphEdgeTarget",target_93045);

frontend.extensions.graph.pixi.goog$module$goog$object.set(entry_93048,"logseqGraphEdgeParallelOffset",parallel_offset_93047);

var temp__5825__auto___93052__$1 = text_93049.anchor;
if(cljs.core.truth_(temp__5825__auto___93052__$1)){
var anchor_93053 = temp__5825__auto___93052__$1;
(anchor_93053.x = 0.5);

(anchor_93053.y = 0.5);
} else {
}

(text_93049.x = (0));

(text_93049.y = (0));

entry_93048.addChild(text_93049);

(entry_93048.alpha = 0.78);

frontend.extensions.graph.pixi.position_edge_label_entry_BANG_(entry_93048,world,width,height,layout_by_id);

label_layer.addChild(entry_93048);
} else {
}


var G__93056 = cljs.core.next(seq__92009_93036__$1);
var G__93057 = null;
var G__93058 = (0);
var G__93059 = (0);
seq__92009_93014 = G__93056;
chunk__92010_93015 = G__93057;
count__92011_93016 = G__93058;
i__92012_93017 = G__93059;
continue;
}
} else {
}
}
break;
}

return null;
} else {
return null;
}
});
frontend.extensions.graph.pixi.render_edge_labels_BANG_ = (function frontend$extensions$graph$pixi$render_edge_labels_BANG_(container,world,width,height,layout_by_id,edge_links,dark_QMARK_,view_mode,show_edge_labels_QMARK_){
var label_layer = (new module$node_modules$pixi_DOT_js$lib$index.Container());
container.addChild(label_layer);

frontend.extensions.graph.pixi.sync_edge_labels_BANG_(label_layer,world,width,height,layout_by_id,edge_links,dark_QMARK_,view_mode,show_edge_labels_QMARK_);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),label_layer,new cljs.core.Keyword(null,"sync!","sync!",348990713),(function() {
var G__93060 = null;
var G__93060__5 = (function (world__$1,width__$1,height__$1,layout_by_id__$1,visible_edge_links){
return frontend.extensions.graph.pixi.sync_edge_labels_BANG_(label_layer,world__$1,width__$1,height__$1,layout_by_id__$1,visible_edge_links,dark_QMARK_,view_mode,show_edge_labels_QMARK_);
});
var G__93060__6 = (function (world__$1,width__$1,height__$1,layout_by_id__$1,visible_edge_links,next_show_edge_labels_QMARK_){
return frontend.extensions.graph.pixi.sync_edge_labels_BANG_(label_layer,world__$1,width__$1,height__$1,layout_by_id__$1,visible_edge_links,dark_QMARK_,view_mode,next_show_edge_labels_QMARK_);
});
G__93060 = function(world__$1,width__$1,height__$1,layout_by_id__$1,visible_edge_links,next_show_edge_labels_QMARK_){
switch(arguments.length){
case 5:
return G__93060__5.call(this,world__$1,width__$1,height__$1,layout_by_id__$1,visible_edge_links);
case 6:
return G__93060__6.call(this,world__$1,width__$1,height__$1,layout_by_id__$1,visible_edge_links,next_show_edge_labels_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__93060.cljs$core$IFn$_invoke$arity$5 = G__93060__5;
G__93060.cljs$core$IFn$_invoke$arity$6 = G__93060__6;
return G__93060;
})()
,new cljs.core.Keyword(null,"sync-transform!","sync-transform!",347099875),(function (world__$1,width__$1,height__$1,layout_by_id__$1){
return frontend.extensions.graph.pixi.sync_edge_label_transform_BANG_(label_layer,world__$1,width__$1,height__$1,layout_by_id__$1);
}),new cljs.core.Keyword(null,"destroy!","destroy!",2116525762),(function (){
return frontend.extensions.graph.pixi.destroy_children_BANG_(label_layer);
})], null);
});
frontend.extensions.graph.pixi.setup_scene_BANG_ = (function frontend$extensions$graph$pixi$setup_scene_BANG_(app,container,p__92057,render_start){
var map__92059 = p__92057;
var map__92059__$1 = cljs.core.__destructure_map(map__92059);
var on_focus_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"on-focus-change","on-focus-change",1545385979));
var grid_layout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var link_distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"link-distance","link-distance",1680735939));
var on_rendered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"on-rendered","on-rendered",369446405));
var on_node_activate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"on-node-activate","on-node-activate",-186984250));
var background_visible_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695));
var visible_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033));
var view_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427));
var dark_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"dark?","dark?",622933231));
var show_arrows_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"show-arrows?","show-arrows?",1693952912));
var show_edge_labels_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"show-edge-labels?","show-edge-labels?",1118080177));
var on_selection_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910));
var on_node_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"on-node-preview","on-node-preview",169104498));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92059__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
(container.innerHTML = "");

var canvas = (function (){var or__5142__auto__ = app.canvas;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return app.view;
}
})();
var stage = app.stage;
var world = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var detail_layer = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var tag_layer = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var edge_label_layer_wrapper = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var node_label_layer = (new module$node_modules$pixi_DOT_js$lib$index.Container());
var cluster_background_layer = (new module$node_modules$pixi_DOT_js$lib$index.Graphics());
var fps_overlay = ((frontend.extensions.graph.pixi.logic.fps_overlay_enabled_QMARK_(frontend.config.dev_QMARK_))?frontend.extensions.graph.pixi.create_fps_overlay_BANG_(dark_QMARK_):null);
var _ = container.appendChild(canvas);
var ___$1 = stage.addChild(world);
var ___$2 = world.addChild(detail_layer);
var ___$3 = world.addChild(tag_layer);
var ___$4 = world.addChild(node_label_layer);
var ___$5 = stage.addChild(edge_label_layer_wrapper);
var ___$6 = (cljs.core.truth_(fps_overlay)?stage.addChild(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(fps_overlay)):null);
var width = container.clientWidth;
var height = container.clientHeight;
var size_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
var fps_last_ms_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(performance.now());
var fps_frame_count_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var normalized_view_mode = frontend.extensions.graph.pixi.normalize_view_mode(view_mode);
var depth_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = depth;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})(),(1)),(5)));
var grid_layout_QMARK___$1 = grid_layout_QMARK_ === true;
var link_distance_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(link_distance);
var show_arrows_QMARK__STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(show_arrows_QMARK_ === true);
var show_edge_labels_QMARK__STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(show_edge_labels_QMARK_ === true);
var layouted_nodes_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.graph.pixi.layout_nodes(nodes,links,view_mode,dark_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link-distance","link-distance",1680735939),link_distance,new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125),grid_layout_QMARK___$1], null)));
var display_links_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.graph.pixi.logic.display_links(links,cljs.core.deref(layouted_nodes_STAR_)));
var all_node_id_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref(layouted_nodes_STAR_)));
var visible_node_ids_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.graph.pixi.visible_node_id_set.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(layouted_nodes_STAR_),all_node_id_set,visible_node_ids));
var background_visible_node_ids_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.graph.pixi.visible_node_id_set.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(layouted_nodes_STAR_),all_node_id_set,(function (){var or__5142__auto__ = background_visible_node_ids;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return visible_node_ids;
}
})()));
var node_index_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),idx], null);
}),cljs.core.deref(layouted_nodes_STAR_)));
var layout_by_id_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),node], null);
}),cljs.core.deref(layouted_nodes_STAR_))));
var preview_layout_by_id_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var initial_transform = frontend.extensions.graph.pixi.logic.fit_transform(cljs.core.deref(layouted_nodes_STAR_),width,height,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(72)], null));
var ___$7 = (world.x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(initial_transform));
var ___$8 = (world.y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(initial_transform));
var ___$9 = (world.scale.x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(initial_transform));
var ___$10 = (world.scale.y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(initial_transform));
var effective_show_arrows_QMARK_ = (function (){
if(frontend.extensions.graph.pixi.edge_detail_view_mode_QMARK_(normalized_view_mode)){
return true;
} else {
return cljs.core.deref(show_arrows_QMARK__STAR_);
}
});
var effective_show_edge_labels_QMARK_ = (function (){
var and__5140__auto__ = (world.scale.x >= frontend.extensions.graph.pixi.edge_label_visible_scale);
if(and__5140__auto__){
if(frontend.extensions.graph.pixi.edge_detail_view_mode_QMARK_(normalized_view_mode)){
return true;
} else {
return cljs.core.deref(show_edge_labels_QMARK__STAR_);
}
} else {
return and__5140__auto__;
}
});
var edge_render_opts = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-arrows?","show-arrows?",1693952912),effective_show_arrows_QMARK_(),new cljs.core.Keyword(null,"show-edge-labels?","show-edge-labels?",1118080177),effective_show_edge_labels_QMARK_()], null);
});
var neighbor_map = frontend.extensions.graph.pixi.build_neighbor_map(cljs.core.deref(display_links_STAR_));
var highlighted_node_ids_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var hovered_node_id_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var tag_focus_node_id_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var tag_focus_active_node_ids_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var world_transform_target_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var node_kind = (function (node_id){
return new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(layout_by_id_STAR_),node_id));
});
var overlapping_tag_ids = (function (node_ids){
var object_ids = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92023_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("tag",node_kind(p1__92023_SHARP_));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__92022_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(neighbor_map,p1__92022_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_ids], 0))));
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92025_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",node_kind(p1__92025_SHARP_));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__92024_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(neighbor_map,p1__92024_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_ids], 0))));
});
var highlight_state_value = (function (){
var base = frontend.extensions.graph.pixi.logic.highlight_state.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(highlighted_node_ids_STAR_),neighbor_map,cljs.core.deref(depth_STAR_));
var selected_tag_ids = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92026_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",node_kind(p1__92026_SHARP_));
}),cljs.core.deref(highlighted_node_ids_STAR_)));
var overlapping_tags = overlapping_tag_ids(selected_tag_ids);
var active_ids = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"active-ids","active-ids",-958452414).cljs$core$IFn$_invoke$arity$1(base),overlapping_tags);
var connected_ids = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(active_ids,cljs.core.deref(highlighted_node_ids_STAR_));
var G__92070 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"active-ids","active-ids",-958452414),active_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"connected-ids","connected-ids",-763126269),connected_ids,new cljs.core.Keyword(null,"hovered-id","hovered-id",934850583),cljs.core.deref(hovered_node_id_STAR_)], 0));
if(cljs.core.seq(cljs.core.deref(tag_focus_active_node_ids_STAR_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__92070,new cljs.core.Keyword(null,"tag-focus-mode?","tag-focus-mode?",-477195063),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag-focus-ids","tag-focus-ids",-1138516798),cljs.core.deref(tag_focus_active_node_ids_STAR_)], 0));
} else {
return G__92070;
}
});
var highlight_state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(highlight_state_value());
var display_visible_node_ids_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(normalized_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884)))?((grid_layout_QMARK___$1)?frontend.extensions.graph.pixi.grid_layout_display_node_ids(cljs.core.deref(layouted_nodes_STAR_),visible_node_ids_STAR_):cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92027_SHARP_){
return ((frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92027_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__92027_SHARP_))));
}),cljs.core.deref(layouted_nodes_STAR_))))):cljs.core.deref(visible_node_ids_STAR_)));
var context_visible_node_ids_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(normalized_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884)))?((grid_layout_QMARK___$1)?cljs.core.deref(display_visible_node_ids_STAR_):cljs.core.deref(background_visible_node_ids_STAR_)):cljs.core.deref(visible_node_ids_STAR_)));
var visible_link_list = (function (){
var links__$1 = frontend.extensions.graph.pixi.visible_links(cljs.core.deref(display_links_STAR_),cljs.core.deref(display_visible_node_ids_STAR_));
if(((frontend.extensions.graph.pixi.edge_detail_view_mode_QMARK_(normalized_view_mode)) && (cljs.core.not(new cljs.core.Keyword(null,"select-mode?","select-mode?",625202898).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(highlight_state_STAR_)))))){
return links__$1;
} else {
return frontend.extensions.graph.pixi.logic.highlight_visible_links(links__$1,cljs.core.deref(highlight_state_STAR_));
}
});
var display_node_index_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92028_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(display_visible_node_ids_STAR_,p1__92028_SHARP_);
}),cljs.core.deref(layouted_nodes_STAR_))));
var full_node_index_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92029_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92029_SHARP_);
}),cljs.core.deref(layouted_nodes_STAR_))));
var ___$11 = detail_layer.addChild(cluster_background_layer);
var ___$12 = frontend.extensions.graph.pixi.draw_cluster_backgrounds_BANG_.cljs$core$IFn$_invoke$arity$7(cluster_background_layer,cljs.core.deref(layouted_nodes_STAR_),normalized_view_mode,dark_QMARK_,context_visible_node_ids_STAR_,grid_layout_QMARK___$1,cljs.core.deref(highlight_state_STAR_));
var current_layout_nodes = (function (){
return cljs.core.vals(frontend.extensions.graph.pixi.logic.current_layout_by_id(cljs.core.deref(layout_by_id_STAR_),cljs.core.deref(preview_layout_by_id_STAR_)));
});
var sync_cluster_backgrounds_BANG_ = (function (nodes__$1){
return frontend.extensions.graph.pixi.draw_cluster_backgrounds_BANG_.cljs$core$IFn$_invoke$arity$7(cluster_background_layer,nodes__$1,normalized_view_mode,dark_QMARK_,context_visible_node_ids_STAR_,grid_layout_QMARK___$1,cljs.core.deref(highlight_state_STAR_));
});
var edge_render_info = frontend.extensions.graph.pixi.render_edges_BANG_(detail_layer,cljs.core.deref(layout_by_id_STAR_),visible_link_list(),dark_QMARK_,normalized_view_mode,edge_render_opts());
var edge_label_render_info = frontend.extensions.graph.pixi.render_edge_labels_BANG_(edge_label_layer_wrapper,world,width,height,cljs.core.deref(layout_by_id_STAR_),visible_link_list(),dark_QMARK_,normalized_view_mode,effective_show_edge_labels_QMARK_());
var node_render_info = frontend.extensions.graph.pixi.render_nodes_BANG_(tag_layer,detail_layer,layouted_nodes_STAR_,normalized_view_mode,highlight_state_STAR_,display_visible_node_ids_STAR_,current_layout_nodes);
var ___$13 = (function (){var fexpr__92080 = new cljs.core.Keyword(null,"sync!","sync!",348990713).cljs$core$IFn$_invoke$arity$1(node_render_info);
return (fexpr__92080.cljs$core$IFn$_invoke$arity$4 ? fexpr__92080.cljs$core$IFn$_invoke$arity$4(world,width,height,null) : fexpr__92080.call(null,world,width,height,null));
})();
var tag_node_index_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92030_SHARP_){
return ((frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92030_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__92030_SHARP_))));
}),cljs.core.deref(layouted_nodes_STAR_))));
var large_graph_QMARK_ = (cljs.core.count(cljs.core.deref(layouted_nodes_STAR_)) >= frontend.extensions.graph.pixi.logic.large_graph_fast_layout_threshold);
var label_candidate_ids = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),frontend.extensions.graph.pixi.build_label_candidates(cljs.core.deref(layouted_nodes_STAR_),normalized_view_mode,large_graph_QMARK_)));
var label_manager = frontend.extensions.graph.pixi.create_label_manager_BANG_(node_label_layer,dark_QMARK_,label_candidate_ids,(function (id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.logic.current_layout_by_id(cljs.core.deref(layout_by_id_STAR_),cljs.core.deref(preview_layout_by_id_STAR_)),id);
}));
var drag_session_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var detail_target_alpha = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(1.0);
var label_target_alpha = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var visibility_state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"detail-expanded?","detail-expanded?",1196791545),true,new cljs.core.Keyword(null,"label-visible?","label-visible?",252054009),false], null));
var transform_dirty_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var display_visible_key_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var navigation_active_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var last_navigation_ms_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var show_detail_scale = ((large_graph_QMARK_)?0.88:0.7);
var hide_detail_scale = ((large_graph_QMARK_)?0.8:0.62);
var show_label_scale = ((large_graph_QMARK_)?1.32:1.05);
var hide_label_scale = ((large_graph_QMARK_)?1.18:0.92);
var thresholds = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"show-detail-scale","show-detail-scale",-249477409),show_detail_scale,new cljs.core.Keyword(null,"hide-detail-scale","hide-detail-scale",-816591978),hide_detail_scale,new cljs.core.Keyword(null,"show-label-scale","show-label-scale",-1449173001),show_label_scale,new cljs.core.Keyword(null,"hide-label-scale","hide-label-scale",1323057777),hide_label_scale], null);
var mark_transform_BANG_ = (function (){
return cljs.core.reset_BANG_(transform_dirty_QMARK_,true);
});
var mark_scene_BANG_ = (function (){
return cljs.core.reset_BANG_(transform_dirty_QMARK_,true);
});
var mark_navigation_BANG_ = (function (){
cljs.core.reset_BANG_(navigation_active_QMARK_,true);

cljs.core.reset_BANG_(last_navigation_ms_STAR_,performance.now());

return cljs.core.reset_BANG_(transform_dirty_QMARK_,true);
});
var emit_selection_BANG_ = (function (){
if(cljs.core.fn_QMARK_(on_selection_change)){
var G__92081 = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92032_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92032_SHARP_);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__92031_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(layout_by_id_STAR_),p1__92031_SHARP_);
}),cljs.core.deref(highlighted_node_ids_STAR_))));
return (on_selection_change.cljs$core$IFn$_invoke$arity$1 ? on_selection_change.cljs$core$IFn$_invoke$arity$1(G__92081) : on_selection_change.call(null,G__92081));
} else {
return null;
}
});
var emit_focus_BANG_ = (function (){
if(cljs.core.fn_QMARK_(on_focus_change)){
var G__92084 = (function (){var G__92085 = cljs.core.deref(tag_focus_node_id_STAR_);
if((G__92085 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__92085,cljs.core.deref(layout_by_id_STAR_));
}
})();
return (on_focus_change.cljs$core$IFn$_invoke$arity$1 ? on_focus_change.cljs$core$IFn$_invoke$arity$1(G__92084) : on_focus_change.call(null,G__92084));
} else {
return null;
}
});
var resize_to_container_BANG_ = (function (){
var width__$1 = container.clientWidth;
var height__$1 = container.clientHeight;
var size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null);
if((((width__$1 > (0))) && ((((height__$1 > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(size,cljs.core.deref(size_STAR_))))))){
cljs.core.reset_BANG_(size_STAR_,size);

app.renderer.resize(width__$1,height__$1);

return mark_transform_BANG_();
} else {
return null;
}
});
var sync_edges_and_labels_BANG_ = (function (layout_by_id){
frontend.extensions.graph.pixi.draw_edges_BANG_.cljs$core$IFn$_invoke$arity$7(new cljs.core.Keyword(null,"graphics","graphics",-2079995979).cljs$core$IFn$_invoke$arity$1(edge_render_info),layout_by_id,visible_link_list(),dark_QMARK_,normalized_view_mode,cljs.core.deref(highlight_state_STAR_),edge_render_opts());

var map__92086 = cljs.core.deref(size_STAR_);
var map__92086__$1 = cljs.core.__destructure_map(map__92086);
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92086__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92086__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__92088 = world;
var G__92089 = width__$1;
var G__92090 = height__$1;
var G__92091 = layout_by_id;
var G__92092 = visible_link_list();
var G__92093 = effective_show_edge_labels_QMARK_();
var fexpr__92087 = new cljs.core.Keyword(null,"sync!","sync!",348990713).cljs$core$IFn$_invoke$arity$1(edge_label_render_info);
return (fexpr__92087.cljs$core$IFn$_invoke$arity$6 ? fexpr__92087.cljs$core$IFn$_invoke$arity$6(G__92088,G__92089,G__92090,G__92091,G__92092,G__92093) : fexpr__92087.call(null,G__92088,G__92089,G__92090,G__92091,G__92092,G__92093));
});
var update_edge_display_fn = (function (next_show_arrows_QMARK_,next_show_edge_labels_QMARK_){
var next_show_arrows_QMARK___$1 = next_show_arrows_QMARK_ === true;
var next_show_edge_labels_QMARK___$1 = next_show_edge_labels_QMARK_ === true;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_show_arrows_QMARK___$1,cljs.core.deref(show_arrows_QMARK__STAR_))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_show_edge_labels_QMARK___$1,cljs.core.deref(show_edge_labels_QMARK__STAR_))))){
cljs.core.reset_BANG_(show_arrows_QMARK__STAR_,next_show_arrows_QMARK___$1);

cljs.core.reset_BANG_(show_edge_labels_QMARK__STAR_,next_show_edge_labels_QMARK___$1);

sync_edges_and_labels_BANG_(frontend.extensions.graph.pixi.logic.current_layout_by_id(cljs.core.deref(layout_by_id_STAR_),cljs.core.deref(preview_layout_by_id_STAR_)));

return mark_transform_BANG_();
} else {
return null;
}
});
var current_world_transform = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),world.x,new cljs.core.Keyword(null,"y","y",-1757859776),world.y,new cljs.core.Keyword(null,"scale","scale",-230427353),world.scale.x], null);
});
var set_world_transform_BANG_ = (function (p__92094){
var map__92095 = p__92094;
var map__92095__$1 = cljs.core.__destructure_map(map__92095);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92095__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92095__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92095__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
(world.x = x);

(world.y = y);

(world.scale.x = scale);

return (world.scale.y = scale);
});
var sync_highlight_BANG_ = (function (){
cljs.core.reset_BANG_(highlight_state_STAR_,highlight_state_value());

sync_cluster_backgrounds_BANG_(current_layout_nodes());

sync_edges_and_labels_BANG_(frontend.extensions.graph.pixi.logic.current_layout_by_id(cljs.core.deref(layout_by_id_STAR_),cljs.core.deref(preview_layout_by_id_STAR_)));

var temp__5823__auto___93092 = new cljs.core.Keyword(null,"sync-styles!","sync-styles!",360119950).cljs$core$IFn$_invoke$arity$1(node_render_info);
if(cljs.core.truth_(temp__5823__auto___93092)){
var sync_styles_BANG__93093 = temp__5823__auto___93092;
(sync_styles_BANG__93093.cljs$core$IFn$_invoke$arity$0 ? sync_styles_BANG__93093.cljs$core$IFn$_invoke$arity$0() : sync_styles_BANG__93093.call(null));
} else {
var map__92096_93094 = cljs.core.deref(size_STAR_);
var map__92096_93095__$1 = cljs.core.__destructure_map(map__92096_93094);
var width_93096__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92096_93095__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_93097__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92096_93095__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__92098_93099 = world;
var G__92099_93100 = width_93096__$1;
var G__92100_93101 = height_93097__$1;
var G__92101_93102 = cljs.core.deref(hovered_node_id_STAR_);
var fexpr__92097_93103 = new cljs.core.Keyword(null,"sync!","sync!",348990713).cljs$core$IFn$_invoke$arity$1(node_render_info);
(fexpr__92097_93103.cljs$core$IFn$_invoke$arity$4 ? fexpr__92097_93103.cljs$core$IFn$_invoke$arity$4(G__92098_93099,G__92099_93100,G__92100_93101,G__92101_93102) : fexpr__92097_93103.call(null,G__92098_93099,G__92099_93100,G__92100_93101,G__92101_93102));
}

return mark_transform_BANG_();
});
var update_link_distance_BANG_ = (function (next_link_distance){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_link_distance,cljs.core.deref(link_distance_STAR_))){
cljs.core.reset_BANG_(link_distance_STAR_,next_link_distance);

cljs.core.reset_BANG_(preview_layout_by_id_STAR_,null);

cljs.core.reset_BANG_(drag_session_STAR_,null);

var next_layouted_nodes = frontend.extensions.graph.pixi.layout_nodes(nodes,links,view_mode,dark_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link-distance","link-distance",1680735939),next_link_distance,new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125),grid_layout_QMARK___$1], null));
cljs.core.reset_BANG_(layouted_nodes_STAR_,next_layouted_nodes);

cljs.core.reset_BANG_(display_visible_key_STAR_,null);

cljs.core.reset_BANG_(layout_by_id_STAR_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),node], null);
}),next_layouted_nodes)));

cljs.core.reset_BANG_(display_links_STAR_,frontend.extensions.graph.pixi.logic.display_links(links,next_layouted_nodes));

cljs.core.reset_BANG_(tag_node_index_STAR_,frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92033_SHARP_){
return ((frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92033_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__92033_SHARP_))));
}),next_layouted_nodes)));

cljs.core.reset_BANG_(display_node_index_STAR_,frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92034_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(display_visible_node_ids_STAR_,p1__92034_SHARP_);
}),next_layouted_nodes)));

cljs.core.reset_BANG_(full_node_index_STAR_,frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92035_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92035_SHARP_);
}),next_layouted_nodes)));

return sync_highlight_BANG_();
} else {
return null;
}
});
var tag_focus_enabled_QMARK_ = (function (scale){
var focus_level = frontend.extensions.graph.pixi.tag_focus_level(scale);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(normalized_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))) && (((cljs.core.empty_QMARK_(cljs.core.deref(highlighted_node_ids_STAR_))) && (frontend.extensions.graph.pixi.logic.tag_focus_active_level_QMARK_(focus_level)))));
});
var clear_tag_focus_BANG_ = (function (){
if(cljs.core.truth_(cljs.core.deref(tag_focus_node_id_STAR_))){
cljs.core.reset_BANG_(tag_focus_node_id_STAR_,null);

cljs.core.reset_BANG_(tag_focus_active_node_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);

emit_focus_BANG_();

return mark_transform_BANG_();
} else {
return null;
}
});
var visible_tag_ids = (function (){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92036_SHARP_){
return ((frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92036_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__92036_SHARP_))));
}),cljs.core.deref(layouted_nodes_STAR_))));
});
var focused_tag_id_for_scale = (function (scale){
var focus_level = frontend.extensions.graph.pixi.tag_focus_level(scale);
var visible_tag_id_set = visible_tag_ids();
if(cljs.core.truth_((function (){var and__5140__auto__ = focus_level;
if(cljs.core.truth_(and__5140__auto__)){
return ((frontend.extensions.graph.pixi.logic.tag_focus_active_level_QMARK_(focus_level)) && (cljs.core.contains_QMARK_(visible_tag_id_set,cljs.core.deref(tag_focus_node_id_STAR_))));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.deref(tag_focus_node_id_STAR_);
} else {
return null;
}
});
var tag_context_node_ids = (function (tag_id){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92037_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(background_visible_node_ids_STAR_),p1__92037_SHARP_);
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(neighbor_map,tag_id)),tag_id)));
});
var crossed_tag_node_ids = (function (object_ids){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92039_SHARP_){
return ((cljs.core.contains_QMARK_(cljs.core.deref(visible_node_ids_STAR_),p1__92039_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",node_kind(p1__92039_SHARP_))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__92038_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(neighbor_map,p1__92038_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_ids], 0))));
});
var selected_tag_ids = (function (){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92040_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",node_kind(p1__92040_SHARP_));
}),cljs.core.deref(highlighted_node_ids_STAR_)));
});
var tag_related_visible_node_ids = (function (tag_ids){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92041_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(visible_node_ids_STAR_),p1__92041_SHARP_);
}),frontend.extensions.graph.pixi.logic.tag_related_node_ids(tag_ids,neighbor_map,visible_tag_ids())));
});
var tag_drill_visible_node_ids = (function (scale){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(normalized_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))) || (cljs.core.seq(cljs.core.deref(highlighted_node_ids_STAR_))))){
cljs.core.reset_BANG_(tag_focus_active_node_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);

if(grid_layout_QMARK___$1){
return frontend.extensions.graph.pixi.grid_layout_display_node_ids(cljs.core.deref(layouted_nodes_STAR_),visible_node_ids_STAR_);
} else {
var temp__5823__auto__ = cljs.core.seq(selected_tag_ids());
if(temp__5823__auto__){
var tag_ids = temp__5823__auto__;
return tag_related_visible_node_ids(tag_ids);
} else {
return cljs.core.deref(visible_node_ids_STAR_);
}
}
} else {
if(grid_layout_QMARK___$1){
cljs.core.reset_BANG_(tag_focus_active_node_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);

return frontend.extensions.graph.pixi.grid_layout_display_node_ids(cljs.core.deref(layouted_nodes_STAR_),visible_node_ids_STAR_);
} else {
var visible_tag_id_set = visible_tag_ids();
var focus_level = frontend.extensions.graph.pixi.tag_focus_level(scale);
var focused_tag_id = focused_tag_id_for_scale(scale);
var G__92109 = focus_level;
var G__92109__$1 = (((G__92109 instanceof cljs.core.Keyword))?G__92109.fqn:null);
switch (G__92109__$1) {
case "isolate":
cljs.core.reset_BANG_(tag_focus_active_node_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);

return visible_tag_id_set;

break;
case "objects":
if(cljs.core.truth_(focused_tag_id)){
var context_node_ids = tag_context_node_ids(focused_tag_id);
var object_ids = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92042_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("tag",node_kind(p1__92042_SHARP_));
}),context_node_ids));
var map__92110 = cljs.core.deref(size_STAR_);
var map__92110__$1 = cljs.core.__destructure_map(map__92110);
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92110__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92110__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var object_budget = frontend.extensions.graph.pixi.tag_object_display_budget(cljs.core.deref(layout_by_id_STAR_),focused_tag_id,context_node_ids,cljs.core.count(object_ids),scale,width__$1,height__$1);
var visible_object_ids = frontend.extensions.graph.pixi.balanced_object_node_ids(cljs.core.deref(layout_by_id_STAR_),focused_tag_id,object_ids,object_budget);
var active_node_ids = frontend.extensions.graph.pixi.logic.tag_focus_active_node_ids(visible_tag_id_set,focus_level,focused_tag_id,visible_object_ids,crossed_tag_node_ids(visible_object_ids));
cljs.core.reset_BANG_(tag_focus_active_node_ids_STAR_,active_node_ids);

return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92043_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(visible_node_ids_STAR_),p1__92043_SHARP_);
}),frontend.extensions.graph.pixi.logic.tag_focus_display_node_ids.cljs$core$IFn$_invoke$arity$6(visible_tag_id_set,focus_level,focused_tag_id,visible_object_ids,crossed_tag_node_ids(visible_object_ids),cljs.core.PersistentHashSet.EMPTY)));
} else {
cljs.core.reset_BANG_(tag_focus_active_node_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);

return visible_tag_id_set;
}

break;
default:
cljs.core.reset_BANG_(tag_focus_active_node_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);

return visible_tag_id_set;

}
}
}
});
var tag_drill_context_node_ids = (function (scale){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(normalized_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))) || (cljs.core.seq(cljs.core.deref(highlighted_node_ids_STAR_))))){
if(grid_layout_QMARK___$1){
return frontend.extensions.graph.pixi.grid_layout_display_node_ids(cljs.core.deref(layouted_nodes_STAR_),visible_node_ids_STAR_);
} else {
var temp__5823__auto__ = cljs.core.seq(selected_tag_ids());
if(temp__5823__auto__){
var tag_ids = temp__5823__auto__;
return tag_related_visible_node_ids(tag_ids);
} else {
return cljs.core.deref(background_visible_node_ids_STAR_);
}
}
} else {
if(grid_layout_QMARK___$1){
return frontend.extensions.graph.pixi.grid_layout_display_node_ids(cljs.core.deref(layouted_nodes_STAR_),visible_node_ids_STAR_);
} else {
var focus_level = frontend.extensions.graph.pixi.tag_focus_level(scale);
var focused_tag_id = focused_tag_id_for_scale(scale);
if(cljs.core.truth_((function (){var and__5140__auto__ = focused_tag_id;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.extensions.graph.pixi.logic.tag_focus_active_level_QMARK_(focus_level);
} else {
return and__5140__auto__;
}
})())){
var context_node_ids = tag_context_node_ids(focused_tag_id);
var object_ids = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92044_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("tag",node_kind(p1__92044_SHARP_));
}),context_node_ids));
var map__92111 = cljs.core.deref(size_STAR_);
var map__92111__$1 = cljs.core.__destructure_map(map__92111);
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92111__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92111__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var object_budget = frontend.extensions.graph.pixi.tag_object_display_budget(cljs.core.deref(layout_by_id_STAR_),focused_tag_id,context_node_ids,cljs.core.count(object_ids),scale,width__$1,height__$1);
var visible_object_ids = frontend.extensions.graph.pixi.balanced_object_node_ids(cljs.core.deref(layout_by_id_STAR_),focused_tag_id,object_ids,object_budget);
var crossed_tag_ids = crossed_tag_node_ids(visible_object_ids);
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92045_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(visible_node_ids_STAR_),p1__92045_SHARP_);
}),frontend.extensions.graph.pixi.logic.tag_focus_context_node_ids(visible_tag_ids(),focus_level,focused_tag_id,visible_object_ids,crossed_tag_ids,cljs.core.deref(background_visible_node_ids_STAR_))));
} else {
return cljs.core.deref(background_visible_node_ids_STAR_);
}
}
}
});
var display_visible_key = (function (scale){
var focus_level = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(normalized_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884)))?frontend.extensions.graph.pixi.tag_focus_level(scale):null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),normalized_view_mode,new cljs.core.Keyword(null,"focus-level","focus-level",1656801968),focus_level,new cljs.core.Keyword(null,"focused-tag-id","focused-tag-id",-1611698116),cljs.core.deref(tag_focus_node_id_STAR_),new cljs.core.Keyword(null,"highlighted-node-ids","highlighted-node-ids",783206883),cljs.core.deref(highlighted_node_ids_STAR_),new cljs.core.Keyword(null,"object-scale-bucket","object-scale-bucket",136621200),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focus_level,new cljs.core.Keyword(null,"objects","objects",2099713734)))?Math.floor((scale * (12))):null)], null);
});
var update_display_visible_BANG_ = (function (scale){
var next_key = display_visible_key(scale);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_key,cljs.core.deref(display_visible_key_STAR_))){
return false;
} else {
var next_visible_node_ids = tag_drill_visible_node_ids(scale);
var next_context_node_ids = tag_drill_context_node_ids(scale);
cljs.core.reset_BANG_(display_visible_key_STAR_,next_key);

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_visible_node_ids,cljs.core.deref(display_visible_node_ids_STAR_))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_context_node_ids,cljs.core.deref(context_visible_node_ids_STAR_))))){
cljs.core.reset_BANG_(display_visible_node_ids_STAR_,next_visible_node_ids);

cljs.core.reset_BANG_(context_visible_node_ids_STAR_,next_context_node_ids);

cljs.core.reset_BANG_(highlight_state_STAR_,highlight_state_value());

cljs.core.reset_BANG_(display_node_index_STAR_,frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92046_SHARP_){
return cljs.core.contains_QMARK_(next_visible_node_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__92046_SHARP_));
}),current_layout_nodes())));

cljs.core.reset_BANG_(full_node_index_STAR_,frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92047_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92047_SHARP_);
}),cljs.core.deref(layouted_nodes_STAR_))));

sync_cluster_backgrounds_BANG_(cljs.core.deref(layouted_nodes_STAR_));

sync_edges_and_labels_BANG_(frontend.extensions.graph.pixi.logic.current_layout_by_id(cljs.core.deref(layout_by_id_STAR_),cljs.core.deref(preview_layout_by_id_STAR_)));

return true;
} else {
return false;
}
}
});
var sync_hover_preview_BANG_ = (function (node_id){
cljs.core.reset_BANG_(hovered_node_id_STAR_,node_id);

return mark_transform_BANG_();
});
var update_tag_focus_BANG_ = (function (world_x,world_y,scale){
var focus_level = frontend.extensions.graph.pixi.tag_focus_level(scale);
var focused_tag_id = focused_tag_id_for_scale(scale);
if((!(tag_focus_enabled_QMARK_(scale)))){
return clear_tag_focus_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = focused_tag_id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objects","objects",2099713734),null,new cljs.core.Keyword(null,"isolate","isolate",-446503149),null], null), null),focus_level);
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
var next_id = frontend.extensions.graph.pixi.nearest_indexed_node_id(cljs.core.deref(tag_node_index_STAR_),world_x,world_y,scale,frontend.extensions.graph.pixi.tag_focus_max_screen_distance);
var next_id__$1 = (function (){var or__5142__auto__ = next_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return focused_tag_id;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_id__$1,cljs.core.deref(tag_focus_node_id_STAR_))){
cljs.core.reset_BANG_(tag_focus_node_id_STAR_,next_id__$1);

cljs.core.reset_BANG_(tag_focus_active_node_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);

emit_focus_BANG_();

mark_transform_BANG_();
} else {
}

return null;

}
}
});
var update_highlight_BANG_ = (function (node,remove_QMARK_){
clear_tag_focus_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(highlighted_node_ids_STAR_,frontend.extensions.graph.pixi.logic.update_highlighted_node_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),remove_QMARK_);

emit_selection_BANG_();

return sync_highlight_BANG_();
});
var clear_highlight_BANG_ = (function (){
if(cljs.core.seq(cljs.core.deref(highlighted_node_ids_STAR_))){
cljs.core.reset_BANG_(highlighted_node_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);

emit_selection_BANG_();

clear_tag_focus_BANG_();

return sync_highlight_BANG_();
} else {
return null;
}
});
var reset_interaction_BANG_ = (function (){
cljs.core.reset_BANG_(world_transform_target_STAR_,initial_transform);

cljs.core.reset_BANG_(hovered_node_id_STAR_,null);

if(cljs.core.seq(cljs.core.deref(highlighted_node_ids_STAR_))){
cljs.core.reset_BANG_(highlighted_node_ids_STAR_,cljs.core.PersistentHashSet.EMPTY);

emit_selection_BANG_();
} else {
}

clear_tag_focus_BANG_();

cljs.core.reset_BANG_(preview_layout_by_id_STAR_,null);

cljs.core.reset_BANG_(drag_session_STAR_,null);

cljs.core.reset_BANG_(display_visible_key_STAR_,null);

update_display_visible_BANG_(world.scale.x);

return sync_highlight_BANG_();
});
var update_edge_highlight_BANG_ = (function (p__92118){
var map__92119 = p__92118;
var map__92119__$1 = cljs.core.__destructure_map(map__92119);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92119__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92119__$1,new cljs.core.Keyword(null,"target","target",253001721));
clear_tag_focus_BANG_();

cljs.core.reset_BANG_(highlighted_node_ids_STAR_,cljs.core.PersistentHashSet.createAsIfByAssoc([target,source]));

emit_selection_BANG_();

return sync_highlight_BANG_();
});
var ensure_drag_session_BANG_ = (function (root_node){
var root_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_node);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(drag_session_STAR_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_id,new cljs.core.Keyword(null,"root-id","root-id",1294683809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drag_session_STAR_)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.deref(drag_session_STAR_);
} else {
var weights = frontend.extensions.graph.pixi.logic.connected_drag_weights(neighbor_map,root_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-depth","max-depth",127060793),cljs.core.deref(depth_STAR_),new cljs.core.Keyword(null,"max-nodes","max-nodes",-591139157),(1200),new cljs.core.Keyword(null,"decay","decay",1036712184),0.72,new cljs.core.Keyword(null,"min-weight","min-weight",-214061809),0.2], null));
var root_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(layout_by_id_STAR_),root_id);
var base_by_id = cljs.core.reduce_kv((function (m,node_id,_weight){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(layout_by_id_STAR_),node_id);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,node_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node)], null));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,weights);
var session = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"root-id","root-id",1294683809),root_id,new cljs.core.Keyword(null,"root-start","root-start",1299285584),root_start,new cljs.core.Keyword(null,"weights","weights",-1097626197),weights,new cljs.core.Keyword(null,"base-by-id","base-by-id",-92274829),base_by_id,new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentArrayMap.EMPTY], null);
cljs.core.reset_BANG_(drag_session_STAR_,session);

return session;
}
});
var apply_node_drag_BANG_ = (function (node,next_x,next_y){
var session = ensure_drag_session_BANG_(node);
var root_start = new cljs.core.Keyword(null,"root-start","root-start",1299285584).cljs$core$IFn$_invoke$arity$1(session);
var dx = (next_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(root_start));
var dy = (next_y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(root_start));
var positions = cljs.core.reduce_kv((function (m,node_id,weight){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-by-id","base-by-id",-92274829).cljs$core$IFn$_invoke$arity$1(session),node_id);
if(cljs.core.truth_(temp__5823__auto__)){
var base = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,node_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base) + (dx * weight)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base) + (dy * weight))], null));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"weights","weights",-1097626197).cljs$core$IFn$_invoke$arity$1(session));
cljs.core.reset_BANG_(drag_session_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(session,new cljs.core.Keyword(null,"positions","positions",-1380538434),positions));

var seq__92120_93136 = cljs.core.seq(positions);
var chunk__92121_93137 = null;
var count__92122_93138 = (0);
var i__92123_93139 = (0);
while(true){
if((i__92123_93139 < count__92122_93138)){
var vec__92132_93140 = chunk__92121_93137.cljs$core$IIndexed$_nth$arity$2(null,i__92123_93139);
var node_id_93141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92132_93140,(0),null);
var map__92135_93142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92132_93140,(1),null);
var map__92135_93143__$1 = cljs.core.__destructure_map(map__92135_93142);
var x_93144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92135_93143__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_93145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92135_93143__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var temp__5825__auto___93146 = frontend.extensions.graph.pixi.rendered_sprite(node_render_info,node_id_93141);
if(cljs.core.truth_(temp__5825__auto___93146)){
var sprite_93147 = temp__5825__auto___93146;
(sprite_93147.x = x_93144);

(sprite_93147.y = y_93145);
} else {
}


var G__93148 = seq__92120_93136;
var G__93149 = chunk__92121_93137;
var G__93150 = count__92122_93138;
var G__93151 = (i__92123_93139 + (1));
seq__92120_93136 = G__93148;
chunk__92121_93137 = G__93149;
count__92122_93138 = G__93150;
i__92123_93139 = G__93151;
continue;
} else {
var temp__5825__auto___93152 = cljs.core.seq(seq__92120_93136);
if(temp__5825__auto___93152){
var seq__92120_93153__$1 = temp__5825__auto___93152;
if(cljs.core.chunked_seq_QMARK_(seq__92120_93153__$1)){
var c__5673__auto___93154 = cljs.core.chunk_first(seq__92120_93153__$1);
var G__93155 = cljs.core.chunk_rest(seq__92120_93153__$1);
var G__93156 = c__5673__auto___93154;
var G__93157 = cljs.core.count(c__5673__auto___93154);
var G__93158 = (0);
seq__92120_93136 = G__93155;
chunk__92121_93137 = G__93156;
count__92122_93138 = G__93157;
i__92123_93139 = G__93158;
continue;
} else {
var vec__92139_93159 = cljs.core.first(seq__92120_93153__$1);
var node_id_93160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92139_93159,(0),null);
var map__92142_93161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92139_93159,(1),null);
var map__92142_93162__$1 = cljs.core.__destructure_map(map__92142_93161);
var x_93163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92142_93162__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_93164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92142_93162__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var temp__5825__auto___93166__$1 = frontend.extensions.graph.pixi.rendered_sprite(node_render_info,node_id_93160);
if(cljs.core.truth_(temp__5825__auto___93166__$1)){
var sprite_93167 = temp__5825__auto___93166__$1;
(sprite_93167.x = x_93163);

(sprite_93167.y = y_93164);
} else {
}


var G__93168 = cljs.core.next(seq__92120_93153__$1);
var G__93169 = null;
var G__93170 = (0);
var G__93171 = (0);
seq__92120_93136 = G__93168;
chunk__92121_93137 = G__93169;
count__92122_93138 = G__93170;
i__92123_93139 = G__93171;
continue;
}
} else {
}
}
break;
}

var preview_layout_by_id = frontend.extensions.graph.pixi.logic.merge_node_positions(cljs.core.deref(layout_by_id_STAR_),positions);
cljs.core.reset_BANG_(preview_layout_by_id_STAR_,preview_layout_by_id);

return sync_edges_and_labels_BANG_(preview_layout_by_id);
});
var commit_node_drag_BANG_ = (function (node,next_x,next_y){
var node_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
var positions = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drag_session_STAR_));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),next_x,new cljs.core.Keyword(null,"y","y",-1757859776),next_y], null)]);
}
})();
var next_layouted_nodes = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(layouted_nodes_STAR_,frontend.extensions.graph.pixi.update_node_positions,node_index_by_id,positions);
var seq__92143_93178 = cljs.core.seq(positions);
var chunk__92144_93179 = null;
var count__92145_93180 = (0);
var i__92146_93181 = (0);
while(true){
if((i__92146_93181 < count__92145_93180)){
var vec__92162_93182 = chunk__92144_93179.cljs$core$IIndexed$_nth$arity$2(null,i__92146_93181);
var moved_node_id_93183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92162_93182,(0),null);
var __93184__$14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92162_93182,(1),null);
var temp__5825__auto___93185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_index_by_id,moved_node_id_93183);
if(cljs.core.truth_(temp__5825__auto___93185)){
var idx_93186 = temp__5825__auto___93185;
var temp__5825__auto___93187__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_layouted_nodes,idx_93186);
if(cljs.core.truth_(temp__5825__auto___93187__$1)){
var moved_node_93188 = temp__5825__auto___93187__$1;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(layout_by_id_STAR_,cljs.core.assoc,moved_node_id_93183,moved_node_93188);
} else {
}
} else {
}


var G__93189 = seq__92143_93178;
var G__93190 = chunk__92144_93179;
var G__93191 = count__92145_93180;
var G__93192 = (i__92146_93181 + (1));
seq__92143_93178 = G__93189;
chunk__92144_93179 = G__93190;
count__92145_93180 = G__93191;
i__92146_93181 = G__93192;
continue;
} else {
var temp__5825__auto___93193 = cljs.core.seq(seq__92143_93178);
if(temp__5825__auto___93193){
var seq__92143_93194__$1 = temp__5825__auto___93193;
if(cljs.core.chunked_seq_QMARK_(seq__92143_93194__$1)){
var c__5673__auto___93195 = cljs.core.chunk_first(seq__92143_93194__$1);
var G__93196 = cljs.core.chunk_rest(seq__92143_93194__$1);
var G__93197 = c__5673__auto___93195;
var G__93198 = cljs.core.count(c__5673__auto___93195);
var G__93199 = (0);
seq__92143_93178 = G__93196;
chunk__92144_93179 = G__93197;
count__92145_93180 = G__93198;
i__92146_93181 = G__93199;
continue;
} else {
var vec__92171_93200 = cljs.core.first(seq__92143_93194__$1);
var moved_node_id_93201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92171_93200,(0),null);
var __93202__$14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92171_93200,(1),null);
var temp__5825__auto___93203__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_index_by_id,moved_node_id_93201);
if(cljs.core.truth_(temp__5825__auto___93203__$1)){
var idx_93204 = temp__5825__auto___93203__$1;
var temp__5825__auto___93205__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_layouted_nodes,idx_93204);
if(cljs.core.truth_(temp__5825__auto___93205__$2)){
var moved_node_93206 = temp__5825__auto___93205__$2;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(layout_by_id_STAR_,cljs.core.assoc,moved_node_id_93201,moved_node_93206);
} else {
}
} else {
}


var G__93207 = cljs.core.next(seq__92143_93194__$1);
var G__93208 = null;
var G__93209 = (0);
var G__93210 = (0);
seq__92143_93178 = G__93207;
chunk__92144_93179 = G__93208;
count__92145_93180 = G__93209;
i__92146_93181 = G__93210;
continue;
}
} else {
}
}
break;
}

sync_cluster_backgrounds_BANG_(cljs.core.deref(layouted_nodes_STAR_));

sync_edges_and_labels_BANG_(cljs.core.deref(layout_by_id_STAR_));

cljs.core.reset_BANG_(preview_layout_by_id_STAR_,null);

cljs.core.reset_BANG_(drag_session_STAR_,null);

cljs.core.reset_BANG_(tag_node_index_STAR_,frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92048_SHARP_){
return ((frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92048_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__92048_SHARP_))));
}),cljs.core.deref(layouted_nodes_STAR_))));

cljs.core.reset_BANG_(display_node_index_STAR_,frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92049_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(display_visible_node_ids_STAR_,p1__92049_SHARP_);
}),current_layout_nodes())));

cljs.core.reset_BANG_(full_node_index_STAR_,frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92050_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92050_SHARP_);
}),cljs.core.deref(layouted_nodes_STAR_))));

return mark_transform_BANG_();
});
var ticker_step = (function (layer,target_alpha){
var alpha = layer.alpha;
var target = ((typeof target_alpha === 'number')?target_alpha:cljs.core.deref(target_alpha));
var next = (alpha + ((target - alpha) * 0.2));
(layer.alpha = next);

return (layer.visible = (next > 0.01));
});
var tick_world_transform_BANG_ = (function (){
var temp__5825__auto__ = cljs.core.deref(world_transform_target_STAR_);
if(cljs.core.truth_(temp__5825__auto__)){
var map__92175 = temp__5825__auto__;
var map__92175__$1 = cljs.core.__destructure_map(map__92175);
var target_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92175__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var target_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92175__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var target_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92175__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var current = current_world_transform();
var next = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(current) + ((target_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(current)) * 0.18)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(current) + ((target_y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(current)) * 0.18)),new cljs.core.Keyword(null,"scale","scale",-230427353),(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(current) + ((target_scale - new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(current)) * 0.18))], null);
var done_QMARK_ = (((Math.abs((target_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(next))) < 0.6)) && ((((Math.abs((target_y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(next))) < 0.6)) && ((Math.abs((target_scale - new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next))) < 0.006)))));
set_world_transform_BANG_(((done_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),target_x,new cljs.core.Keyword(null,"y","y",-1757859776),target_y,new cljs.core.Keyword(null,"scale","scale",-230427353),target_scale], null):next));

if(done_QMARK_){
cljs.core.reset_BANG_(world_transform_target_STAR_,null);
} else {
}

return true;
} else {
return null;
}
});
var animate_layer = (function (){
var now_93218 = performance.now();
var map__92183_93219 = cljs.core.deref(size_STAR_);
var map__92183_93220__$1 = cljs.core.__destructure_map(map__92183_93219);
var width_93221__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92183_93220__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_93222__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92183_93220__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(fps_overlay)){
frontend.extensions.graph.pixi.tick_fps_overlay_BANG_(fps_overlay,fps_last_ms_STAR_,fps_frame_count_STAR_,width_93221__$1,height_93222__$1);
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(navigation_active_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return ((now_93218 - cljs.core.deref(last_navigation_ms_STAR_)) > frontend.extensions.graph.pixi.navigation_idle_ms);
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(navigation_active_QMARK_,false);

mark_scene_BANG_();
} else {
}

ticker_step(detail_layer,detail_target_alpha);

if(cljs.core.truth_(tick_world_transform_BANG_())){
cljs.core.reset_BANG_(transform_dirty_QMARK_,true);
} else {
}

var dirty_QMARK_ = cljs.core.deref(transform_dirty_QMARK_);
var navigation_QMARK_ = cljs.core.deref(navigation_active_QMARK_);
var scale = world.scale.x;
var transition_running_QMARK_ = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"tick-transitions!","tick-transitions!",954430757).cljs$core$IFn$_invoke$arity$1(node_render_info);
if(cljs.core.truth_(temp__5825__auto__)){
var tick_transitions_BANG_ = temp__5825__auto__;
return (tick_transitions_BANG_.cljs$core$IFn$_invoke$arity$0 ? tick_transitions_BANG_.cljs$core$IFn$_invoke$arity$0() : tick_transitions_BANG_.call(null));
} else {
return null;
}
})();
var display_changed_QMARK_ = (cljs.core.truth_(dirty_QMARK_)?update_display_visible_BANG_(scale):null);
var heavy_sync_QMARK_ = (function (){var and__5140__auto__ = dirty_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = display_changed_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not(navigation_QMARK_);
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(dirty_QMARK_)){
if(cljs.core.truth_(heavy_sync_QMARK_)){
var map__92184_93229 = cljs.core.deref(size_STAR_);
var map__92184_93230__$1 = cljs.core.__destructure_map(map__92184_93229);
var width_93231__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92184_93230__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_93232__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92184_93230__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__92186_93235 = world;
var G__92187_93236 = width_93231__$1;
var G__92188_93237 = height_93232__$1;
var G__92189_93238 = cljs.core.deref(hovered_node_id_STAR_);
var fexpr__92185_93239 = new cljs.core.Keyword(null,"sync!","sync!",348990713).cljs$core$IFn$_invoke$arity$1(node_render_info);
(fexpr__92185_93239.cljs$core$IFn$_invoke$arity$4 ? fexpr__92185_93239.cljs$core$IFn$_invoke$arity$4(G__92186_93235,G__92187_93236,G__92188_93237,G__92189_93238) : fexpr__92185_93239.call(null,G__92186_93235,G__92187_93236,G__92188_93237,G__92189_93238));

if(cljs.core.truth_(navigation_QMARK_)){
} else {
sync_edges_and_labels_BANG_(frontend.extensions.graph.pixi.logic.current_layout_by_id(cljs.core.deref(layout_by_id_STAR_),cljs.core.deref(preview_layout_by_id_STAR_)));
}
} else {
}

var temp__5825__auto___93240 = new cljs.core.Keyword(null,"sync-transform!","sync-transform!",347099875).cljs$core$IFn$_invoke$arity$1(edge_label_render_info);
if(cljs.core.truth_(temp__5825__auto___93240)){
var sync_edge_label_transform_fn_93241 = temp__5825__auto___93240;
var map__92190_93242 = cljs.core.deref(size_STAR_);
var map__92190_93243__$1 = cljs.core.__destructure_map(map__92190_93242);
var width_93244__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92190_93243__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_93245__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92190_93243__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__92191_93246 = world;
var G__92192_93247 = width_93244__$1;
var G__92193_93248 = height_93245__$1;
var G__92194_93249 = frontend.extensions.graph.pixi.logic.current_layout_by_id(cljs.core.deref(layout_by_id_STAR_),cljs.core.deref(preview_layout_by_id_STAR_));
(sync_edge_label_transform_fn_93241.cljs$core$IFn$_invoke$arity$4 ? sync_edge_label_transform_fn_93241.cljs$core$IFn$_invoke$arity$4(G__92191_93246,G__92192_93247,G__92193_93248,G__92194_93249) : sync_edge_label_transform_fn_93241.call(null,G__92191_93246,G__92192_93247,G__92193_93248,G__92194_93249));
} else {
}
} else {
}

var temp__5825__auto___93250 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(label_manager);
if(cljs.core.truth_(temp__5825__auto___93250)){
var label_layer_93251 = temp__5825__auto___93250;
var focus_level_93252 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(normalized_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))) && (cljs.core.empty_QMARK_(cljs.core.deref(highlighted_node_ids_STAR_)))))?frontend.extensions.graph.pixi.tag_focus_level(scale):null);
var focused_tag_id_93253 = focused_tag_id_for_scale(scale);
var focused_node_ids_93254 = ((cljs.core.seq(cljs.core.deref(tag_focus_active_node_ids_STAR_)))?cljs.core.deref(tag_focus_active_node_ids_STAR_):(cljs.core.truth_(focused_tag_id_93253)?cljs.core.PersistentHashSet.createAsIfByAssoc([focused_tag_id_93253]):cljs.core.PersistentHashSet.EMPTY));
var label_hovered_node_id_93255 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(normalized_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))) && (((cljs.core.empty_QMARK_(cljs.core.deref(highlighted_node_ids_STAR_))) && ((focus_level_93252 == null))))))?null:cljs.core.deref(hovered_node_id_STAR_));
var label_visibility_state_93256 = (function (){var G__92196 = cljs.core.deref(visibility_state_STAR_);
var G__92196__$1 = ((frontend.extensions.graph.pixi.logic.labels_visible_by_default_QMARK_(normalized_view_mode))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__92196,new cljs.core.Keyword(null,"label-visible?","label-visible?",252054009),true):G__92196);
var G__92196__$2 = ((cljs.core.seq(focused_node_ids_93254))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__92196__$1,new cljs.core.Keyword(null,"label-visible?","label-visible?",252054009),true):G__92196__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__92196__$2,new cljs.core.Keyword(null,"linked-label-visible?","linked-label-visible?",-1421723185),(scale >= frontend.extensions.graph.pixi.logic.linked_label_visible_scale));

})();
var map__92195_93257 = frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$5(label_hovered_node_id_93255,cljs.core.deref(highlighted_node_ids_STAR_),new cljs.core.Keyword(null,"active-ids","active-ids",-958452414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(highlight_state_STAR_)),label_visibility_state_93256,label_layer_93251.alpha);
var map__92195_93258__$1 = cljs.core.__destructure_map(map__92195_93257);
var target_alpha_93259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92195_93258__$1,new cljs.core.Keyword(null,"target-alpha","target-alpha",-1045263460));
var update_QMARK__93260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92195_93258__$1,new cljs.core.Keyword(null,"update?","update?",-693204702));
var hovered_only_QMARK__93261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92195_93258__$1,new cljs.core.Keyword(null,"hovered-only?","hovered-only?",-501227248));
var selected_only_QMARK__93262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92195_93258__$1,new cljs.core.Keyword(null,"selected-only?","selected-only?",-1810718071));
var active_only_QMARK__93263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92195_93258__$1,new cljs.core.Keyword(null,"active-only?","active-only?",-1370362401));
var focus_labels_only_QMARK__93264 = frontend.extensions.graph.pixi.logic.focus_labels_only_QMARK_(focused_node_ids_93254,label_visibility_state_93256);
var force_label_update_QMARK__93265 = (((target_alpha_93259 > (0))) && (cljs.core.not((function (){var fexpr__92197 = new cljs.core.Keyword(null,"has-visible-labels?","has-visible-labels?",-2102770242).cljs$core$IFn$_invoke$arity$1(label_manager);
return (fexpr__92197.cljs$core$IFn$_invoke$arity$0 ? fexpr__92197.cljs$core$IFn$_invoke$arity$0() : fexpr__92197.call(null));
})())));
ticker_step(label_layer_93251,target_alpha_93259);

if(cljs.core.truth_((function (){var and__5140__auto__ = dirty_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return update_QMARK__93260;
} else {
return and__5140__auto__;
}
})())){
if(((cljs.core.not(navigation_QMARK_)) || (((focus_labels_only_QMARK__93264) || (force_label_update_QMARK__93265))))){
var map__92198_93269 = cljs.core.deref(size_STAR_);
var map__92198_93270__$1 = cljs.core.__destructure_map(map__92198_93269);
var width_93271__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92198_93270__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_93272__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92198_93270__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__92200_93274 = world;
var G__92201_93275 = width_93271__$1;
var G__92202_93276 = height_93272__$1;
var G__92203_93277 = label_hovered_node_id_93255;
var G__92204_93278 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active-node-ids","active-node-ids",-398210751),new cljs.core.Keyword(null,"focused-node-id","focused-node-id",1658701319),new cljs.core.Keyword(null,"selected-only?","selected-only?",-1810718071),new cljs.core.Keyword(null,"node-visible?","node-visible?",-202013520),new cljs.core.Keyword(null,"hovered-only?","hovered-only?",-501227248),new cljs.core.Keyword(null,"focused-node-ids","focused-node-ids",-417685702),new cljs.core.Keyword(null,"focused-only?","focused-only?",501797403),new cljs.core.Keyword(null,"active-only?","active-only?",-1370362401),new cljs.core.Keyword(null,"selected-node-ids","selected-node-ids",-1282933857)],[new cljs.core.Keyword(null,"active-ids","active-ids",-958452414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(highlight_state_STAR_)),focused_tag_id_93253,selected_only_QMARK__93262,((focus_labels_only_QMARK__93264)?(function (p1__92051_SHARP_){
return ((frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92051_SHARP_)) && (frontend.extensions.graph.pixi.logic.focused_label_node_QMARK_(focused_node_ids_93254,p1__92051_SHARP_)));
}):(cljs.core.truth_(new cljs.core.Keyword(null,"detail-expanded?","detail-expanded?",1196791545).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(visibility_state_STAR_)))?(function (p1__92052_SHARP_){
return frontend.extensions.graph.pixi.visible_node_QMARK_(display_visible_node_ids_STAR_,p1__92052_SHARP_);
}):(function (p1__92053_SHARP_){
return ((frontend.extensions.graph.pixi.visible_node_QMARK_(display_visible_node_ids_STAR_,p1__92053_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__92053_SHARP_))));
})
)),hovered_only_QMARK__93261,focused_node_ids_93254,focus_labels_only_QMARK__93264,active_only_QMARK__93263,cljs.core.deref(highlighted_node_ids_STAR_)]);
var fexpr__92199_93279 = new cljs.core.Keyword(null,"update!","update!",-1453508586).cljs$core$IFn$_invoke$arity$1(label_manager);
(fexpr__92199_93279.cljs$core$IFn$_invoke$arity$5 ? fexpr__92199_93279.cljs$core$IFn$_invoke$arity$5(G__92200_93274,G__92201_93275,G__92202_93276,G__92203_93277,G__92204_93278) : fexpr__92199_93279.call(null,G__92200_93274,G__92201_93275,G__92202_93276,G__92203_93277,G__92204_93278));
} else {
var temp__5825__auto___93280__$1 = new cljs.core.Keyword(null,"sync-transform!","sync-transform!",347099875).cljs$core$IFn$_invoke$arity$1(label_manager);
if(cljs.core.truth_(temp__5825__auto___93280__$1)){
var sync_transform_BANG__93281 = temp__5825__auto___93280__$1;
(sync_transform_BANG__93281.cljs$core$IFn$_invoke$arity$3 ? sync_transform_BANG__93281.cljs$core$IFn$_invoke$arity$3(world,label_hovered_node_id_93255,focused_tag_id_93253) : sync_transform_BANG__93281.call(null,world,label_hovered_node_id_93255,focused_tag_id_93253));
} else {
}
}
} else {
}
} else {
}

if(cljs.core.truth_(dirty_QMARK_)){
return cljs.core.reset_BANG_(transform_dirty_QMARK_,cljs.core.boolean$(transition_running_QMARK_));
} else {
return null;
}
});
var update_visibility_BANG_ = (function (next_visible_node_ids,next_background_visible_node_ids){
var next_visible_node_ids__$1 = (((!((next_visible_node_ids == null))))?frontend.extensions.graph.pixi.visible_node_id_set.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(layouted_nodes_STAR_),all_node_id_set,next_visible_node_ids):all_node_id_set);
var next_background_visible_node_ids__$1 = (((!((next_background_visible_node_ids == null))))?frontend.extensions.graph.pixi.visible_node_id_set.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(layouted_nodes_STAR_),all_node_id_set,next_background_visible_node_ids):next_visible_node_ids__$1);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_visible_node_ids__$1,cljs.core.deref(visible_node_ids_STAR_))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_background_visible_node_ids__$1,cljs.core.deref(background_visible_node_ids_STAR_))))){
cljs.core.reset_BANG_(visible_node_ids_STAR_,next_visible_node_ids__$1);

cljs.core.reset_BANG_(background_visible_node_ids_STAR_,next_background_visible_node_ids__$1);

var next_highlighted_node_ids_93284 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(highlighted_node_ids_STAR_),next_visible_node_ids__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_highlighted_node_ids_93284,cljs.core.deref(highlighted_node_ids_STAR_))){
cljs.core.reset_BANG_(highlighted_node_ids_STAR_,next_highlighted_node_ids_93284);

emit_selection_BANG_();
} else {
}

if(cljs.core.contains_QMARK_(next_visible_node_ids__$1,cljs.core.deref(hovered_node_id_STAR_))){
} else {
cljs.core.reset_BANG_(hovered_node_id_STAR_,null);
}

cljs.core.reset_BANG_(preview_layout_by_id_STAR_,null);

cljs.core.reset_BANG_(drag_session_STAR_,null);

cljs.core.reset_BANG_(display_visible_key_STAR_,null);

cljs.core.reset_BANG_(tag_node_index_STAR_,frontend.extensions.graph.pixi.index_layouted_nodes(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__92054_SHARP_){
return ((frontend.extensions.graph.pixi.visible_node_QMARK_(visible_node_ids_STAR_,p1__92054_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__92054_SHARP_))));
}),cljs.core.deref(layouted_nodes_STAR_))));

update_display_visible_BANG_(world.scale.x);

sync_cluster_backgrounds_BANG_(cljs.core.deref(layouted_nodes_STAR_));

return sync_highlight_BANG_();
} else {
return null;
}
});
var update_depth_BANG_ = (function (next_depth){
var next_depth__$1 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = next_depth;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})(),(1)),(5));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_depth__$1,cljs.core.deref(depth_STAR_))){
cljs.core.reset_BANG_(depth_STAR_,next_depth__$1);

if(cljs.core.seq(cljs.core.deref(highlighted_node_ids_STAR_))){
cljs.core.reset_BANG_(preview_layout_by_id_STAR_,null);

cljs.core.reset_BANG_(drag_session_STAR_,null);

return sync_highlight_BANG_();
} else {
return null;
}
} else {
return null;
}
});
var update_detail_visibility_BANG_ = (function() {
var frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG_ = null;
var frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG___1 = (function (scale){
return frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG_.cljs$core$IFn$_invoke$arity$2(scale,null);
});
var frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG___2 = (function (scale,_delta_y){
if((!(tag_focus_enabled_QMARK_(scale)))){
clear_tag_focus_BANG_();
} else {
}

var prev = cljs.core.deref(visibility_state_STAR_);
var next = frontend.extensions.graph.pixi.logic.next_visibility_state(prev,scale,thresholds);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
cljs.core.reset_BANG_(visibility_state_STAR_,next);

cljs.core.reset_BANG_(detail_target_alpha,(cljs.core.truth_(new cljs.core.Keyword(null,"detail-expanded?","detail-expanded?",1196791545).cljs$core$IFn$_invoke$arity$1(next))?1.0:0.0));

cljs.core.reset_BANG_(label_target_alpha,(cljs.core.truth_(new cljs.core.Keyword(null,"label-visible?","label-visible?",252054009).cljs$core$IFn$_invoke$arity$1(next))?1.0:0.0));

return mark_transform_BANG_();
} else {
return null;
}
});
frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG_ = function(scale,_delta_y){
switch(arguments.length){
case 1:
return frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG___1.call(this,scale);
case 2:
return frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG___2.call(this,scale,_delta_y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG_.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG___1;
frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG_.cljs$core$IFn$_invoke$arity$2 = frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG___2;
return frontend$extensions$graph$pixi$setup_scene_BANG__$_update_detail_visibility_BANG_;
})()
;
var get_node_index = (function (){
return cljs.core.deref(display_node_index_STAR_);
});
var get_edge_hit = (function (world_x,world_y,scale){
return frontend.extensions.graph.pixi.hit_test_edge(frontend.extensions.graph.pixi.logic.current_layout_by_id(cljs.core.deref(layout_by_id_STAR_),cljs.core.deref(preview_layout_by_id_STAR_)),visible_link_list(),world_x,world_y,scale);
});
var event_cleanup = frontend.extensions.graph.pixi.setup_pan_and_zoom_BANG_(canvas,world,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-edge-select","on-edge-select",1944821024),new cljs.core.Keyword(null,"node-selected?","node-selected?",-1118851615),new cljs.core.Keyword(null,"on-scale-change","on-scale-change",-970233501),new cljs.core.Keyword(null,"on-node-activate","on-node-activate",-186984250),new cljs.core.Keyword(null,"on-transform","on-transform",-1205343866),new cljs.core.Keyword(null,"on-gesture-start","on-gesture-start",767182374),new cljs.core.Keyword(null,"get-edge-hit","get-edge-hit",-2113423929),new cljs.core.Keyword(null,"on-gesture-point","on-gesture-point",-1379371702),new cljs.core.Keyword(null,"on-node-drag","on-node-drag",-1985760501),new cljs.core.Keyword(null,"get-node-index","get-node-index",1305447148),new cljs.core.Keyword(null,"on-selection-clear","on-selection-clear",705262254),new cljs.core.Keyword(null,"on-node-select","on-node-select",958753519),new cljs.core.Keyword(null,"on-hover-node-change","on-hover-node-change",439461264),new cljs.core.Keyword(null,"on-node-preview","on-node-preview",169104498),new cljs.core.Keyword(null,"on-node-drag-end","on-node-drag-end",-1645102978),new cljs.core.Keyword(null,"gesture-locked?","gesture-locked?",810606718)],[update_edge_highlight_BANG_,(function (p1__92055_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(highlighted_node_ids_STAR_),p1__92055_SHARP_);
}),update_detail_visibility_BANG_,on_node_activate,mark_navigation_BANG_,(function (){
return cljs.core.reset_BANG_(world_transform_target_STAR_,null);
}),get_edge_hit,update_tag_focus_BANG_,apply_node_drag_BANG_,get_node_index,clear_highlight_BANG_,update_highlight_BANG_,sync_hover_preview_BANG_,on_node_preview,commit_node_drag_BANG_,(function (){
return (!((cljs.core.deref(world_transform_target_STAR_) == null)));
})]));
var resize_observer = (((typeof ResizeObserver !== 'undefined'))?(function (){var observer = (new ResizeObserver(resize_to_container_BANG_));
observer.observe(container);

return observer;
})():null);
var render_elapsed = (performance.now() - render_start);
frontend.extensions.graph.pixi.logic.apply_graph_ticker_frame_rate_BANG_(app.ticker);

app.ticker.add(animate_layer);

mark_transform_BANG_();

update_detail_visibility_BANG_(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(initial_transform));

if(cljs.core.fn_QMARK_(on_rendered)){
var G__92212_93287 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"render-ms","render-ms",514118310),render_elapsed,new cljs.core.Keyword(null,"drawn-nodes","drawn-nodes",1528037168),cljs.core.count(cljs.core.deref(layouted_nodes_STAR_)),new cljs.core.Keyword(null,"visible-nodes","visible-nodes",1361897651),(function (){var drawn_node_count = new cljs.core.Keyword(null,"drawn-node-count","drawn-node-count",-1057152275).cljs$core$IFn$_invoke$arity$1(node_render_info);
if(typeof drawn_node_count === 'number'){
return drawn_node_count;
} else {
return cljs.core.deref(drawn_node_count);
}
})(),new cljs.core.Keyword(null,"drawn-links","drawn-links",-335765168),new cljs.core.Keyword(null,"drawn-links","drawn-links",-335765168).cljs$core$IFn$_invoke$arity$1(edge_render_info),new cljs.core.Keyword(null,"auto-collapse?","auto-collapse?",-866574803),large_graph_QMARK_], null);
(on_rendered.cljs$core$IFn$_invoke$arity$1 ? on_rendered.cljs$core$IFn$_invoke$arity$1(G__92212_93287) : on_rendered.call(null,G__92212_93287));
} else {
}

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"app","app",-560961707),app,new cljs.core.Keyword(null,"update-visibility!","update-visibility!",1375289282),update_visibility_BANG_,new cljs.core.Keyword(null,"update-depth!","update-depth!",-854515778),update_depth_BANG_,new cljs.core.Keyword(null,"update-link-distance!","update-link-distance!",1182486850),update_link_distance_BANG_,new cljs.core.Keyword(null,"update-edge-display!","update-edge-display!",2120500038),update_edge_display_fn,new cljs.core.Keyword(null,"reset-interaction!","reset-interaction!",-847982591),reset_interaction_BANG_,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),(function (){
(event_cleanup.cljs$core$IFn$_invoke$arity$0 ? event_cleanup.cljs$core$IFn$_invoke$arity$0() : event_cleanup.call(null));

var temp__5825__auto___93290 = resize_observer;
if(cljs.core.truth_(temp__5825__auto___93290)){
var observer_93291 = temp__5825__auto___93290;
observer_93291.disconnect();
} else {
}

app.ticker.remove(animate_layer);

var fexpr__92213_93292 = new cljs.core.Keyword(null,"destroy!","destroy!",2116525762).cljs$core$IFn$_invoke$arity$1(label_manager);
(fexpr__92213_93292.cljs$core$IFn$_invoke$arity$0 ? fexpr__92213_93292.cljs$core$IFn$_invoke$arity$0() : fexpr__92213_93292.call(null));

var fexpr__92214_93293 = new cljs.core.Keyword(null,"destroy!","destroy!",2116525762).cljs$core$IFn$_invoke$arity$1(edge_label_render_info);
(fexpr__92214_93293.cljs$core$IFn$_invoke$arity$0 ? fexpr__92214_93293.cljs$core$IFn$_invoke$arity$0() : fexpr__92214_93293.call(null));

var seq__92215 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"textures","textures",560681081).cljs$core$IFn$_invoke$arity$1(node_render_info)));
var chunk__92216 = null;
var count__92217 = (0);
var i__92218 = (0);
while(true){
if((i__92218 < count__92217)){
var texture = chunk__92216.cljs$core$IIndexed$_nth$arity$2(null,i__92218);
texture.destroy(true);


var G__93294 = seq__92215;
var G__93295 = chunk__92216;
var G__93296 = count__92217;
var G__93297 = (i__92218 + (1));
seq__92215 = G__93294;
chunk__92216 = G__93295;
count__92217 = G__93296;
i__92218 = G__93297;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__92215);
if(temp__5825__auto__){
var seq__92215__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__92215__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__92215__$1);
var G__93298 = cljs.core.chunk_rest(seq__92215__$1);
var G__93299 = c__5673__auto__;
var G__93300 = cljs.core.count(c__5673__auto__);
var G__93301 = (0);
seq__92215 = G__93298;
chunk__92216 = G__93299;
count__92217 = G__93300;
i__92218 = G__93301;
continue;
} else {
var texture = cljs.core.first(seq__92215__$1);
texture.destroy(true);


var G__93302 = cljs.core.next(seq__92215__$1);
var G__93303 = null;
var G__93304 = (0);
var G__93305 = (0);
seq__92215 = G__93302;
chunk__92216 = G__93303;
count__92217 = G__93304;
i__92218 = G__93305;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas], null);
});
frontend.extensions.graph.pixi.update_visibility_BANG_ = (function frontend$extensions$graph$pixi$update_visibility_BANG_(var_args){
var G__92242 = arguments.length;
switch (G__92242) {
case 2:
return frontend.extensions.graph.pixi.update_visibility_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.graph.pixi.update_visibility_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.update_visibility_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (container,visible_node_ids){
return frontend.extensions.graph.pixi.update_visibility_BANG_.cljs$core$IFn$_invoke$arity$3(container,visible_node_ids,null);
}));

(frontend.extensions.graph.pixi.update_visibility_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (container,visible_node_ids,background_visible_node_ids){
var temp__5825__auto___93307 = (function (){var G__92245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instances),container);
if((G__92245 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"update-visibility!","update-visibility!",1375289282).cljs$core$IFn$_invoke$arity$1(G__92245);
}
})();
if(cljs.core.truth_(temp__5825__auto___93307)){
var update_visibility_fn_93308 = temp__5825__auto___93307;
(update_visibility_fn_93308.cljs$core$IFn$_invoke$arity$2 ? update_visibility_fn_93308.cljs$core$IFn$_invoke$arity$2(visible_node_ids,background_visible_node_ids) : update_visibility_fn_93308.call(null,visible_node_ids,background_visible_node_ids));
} else {
}

return null;
}));

(frontend.extensions.graph.pixi.update_visibility_BANG_.cljs$lang$maxFixedArity = 3);

frontend.extensions.graph.pixi.update_depth_BANG_ = (function frontend$extensions$graph$pixi$update_depth_BANG_(container,depth){
var temp__5825__auto___93309 = (function (){var G__92248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instances),container);
if((G__92248 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"update-depth!","update-depth!",-854515778).cljs$core$IFn$_invoke$arity$1(G__92248);
}
})();
if(cljs.core.truth_(temp__5825__auto___93309)){
var update_depth_fn_93310 = temp__5825__auto___93309;
(update_depth_fn_93310.cljs$core$IFn$_invoke$arity$1 ? update_depth_fn_93310.cljs$core$IFn$_invoke$arity$1(depth) : update_depth_fn_93310.call(null,depth));
} else {
}

return null;
});
frontend.extensions.graph.pixi.update_link_distance_BANG_ = (function frontend$extensions$graph$pixi$update_link_distance_BANG_(container,link_distance){
var temp__5825__auto___93311 = (function (){var G__92249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instances),container);
if((G__92249 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"update-link-distance!","update-link-distance!",1182486850).cljs$core$IFn$_invoke$arity$1(G__92249);
}
})();
if(cljs.core.truth_(temp__5825__auto___93311)){
var update_link_distance_fn_93312 = temp__5825__auto___93311;
(update_link_distance_fn_93312.cljs$core$IFn$_invoke$arity$1 ? update_link_distance_fn_93312.cljs$core$IFn$_invoke$arity$1(link_distance) : update_link_distance_fn_93312.call(null,link_distance));
} else {
}

return null;
});
frontend.extensions.graph.pixi.update_edge_display_BANG_ = (function frontend$extensions$graph$pixi$update_edge_display_BANG_(container,show_arrows_QMARK_,show_edge_labels_QMARK_){
var temp__5825__auto___93313 = (function (){var G__92253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instances),container);
if((G__92253 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"update-edge-display!","update-edge-display!",2120500038).cljs$core$IFn$_invoke$arity$1(G__92253);
}
})();
if(cljs.core.truth_(temp__5825__auto___93313)){
var update_edge_display_fn_93314 = temp__5825__auto___93313;
(update_edge_display_fn_93314.cljs$core$IFn$_invoke$arity$2 ? update_edge_display_fn_93314.cljs$core$IFn$_invoke$arity$2(show_arrows_QMARK_,show_edge_labels_QMARK_) : update_edge_display_fn_93314.call(null,show_arrows_QMARK_,show_edge_labels_QMARK_));
} else {
}

return null;
});
frontend.extensions.graph.pixi.reset_interaction_BANG_ = (function frontend$extensions$graph$pixi$reset_interaction_BANG_(container){
var temp__5825__auto___93315 = (function (){var G__92254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instances),container);
if((G__92254 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"reset-interaction!","reset-interaction!",-847982591).cljs$core$IFn$_invoke$arity$1(G__92254);
}
})();
if(cljs.core.truth_(temp__5825__auto___93315)){
var reset_interaction_fn_93316 = temp__5825__auto___93315;
(reset_interaction_fn_93316.cljs$core$IFn$_invoke$arity$0 ? reset_interaction_fn_93316.cljs$core$IFn$_invoke$arity$0() : reset_interaction_fn_93316.call(null));
} else {
}

return null;
});
frontend.extensions.graph.pixi.render_container_BANG_ = (function frontend$extensions$graph$pixi$render_container_BANG_(container,p__92255){
var map__92256 = p__92255;
var map__92256__$1 = cljs.core.__destructure_map(map__92256);
var on_focus_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"on-focus-change","on-focus-change",1545385979));
var grid_layout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var link_distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"link-distance","link-distance",1680735939));
var on_rendered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"on-rendered","on-rendered",369446405));
var on_node_activate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"on-node-activate","on-node-activate",-186984250));
var background_visible_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695));
var visible_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033));
var view_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427));
var dark_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"dark?","dark?",622933231));
var show_arrows_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"show-arrows?","show-arrows?",1693952912));
var show_edge_labels_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"show-edge-labels?","show-edge-labels?",1118080177));
var on_selection_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910));
var on_node_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"on-node-preview","on-node-preview",169104498));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92256__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
if(cljs.core.truth_(container)){
var token_93317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.extensions.graph.pixi._STAR_render_tokens,cljs.core.update,container,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),container);
var render_start_93318 = performance.now();
var app_93319 = (new module$node_modules$pixi_DOT_js$lib$index.Application());
app_93319.init(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.extensions.graph.pixi.logic.renderer_init_options(window.devicePixelRatio),new cljs.core.Keyword(null,"resizeTo","resizeTo",-57804037),container))).then((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_93317,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.extensions.graph.pixi._STAR_render_tokens),container))){
var old_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instances),container);
frontend.extensions.graph.pixi.destroy_instance_data_BANG_(old_instance);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.extensions.graph.pixi._STAR_graph_instances,cljs.core.assoc,container,frontend.extensions.graph.pixi.setup_scene_BANG_(app_93319,container,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"link-distance","link-distance",1680735939),new cljs.core.Keyword(null,"on-rendered","on-rendered",369446405),new cljs.core.Keyword(null,"on-node-activate","on-node-activate",-186984250),new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695),new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),new cljs.core.Keyword(null,"dark?","dark?",622933231),new cljs.core.Keyword(null,"show-arrows?","show-arrows?",1693952912),new cljs.core.Keyword(null,"show-edge-labels?","show-edge-labels?",1118080177),new cljs.core.Keyword(null,"on-node-preview","on-node-preview",169104498),new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125),new cljs.core.Keyword(null,"on-focus-change","on-focus-change",1545385979),new cljs.core.Keyword(null,"links","links",-654507394)],[link_distance,on_rendered,on_node_activate,background_visible_node_ids,visible_node_ids,view_mode,dark_QMARK_,show_arrows_QMARK_,show_edge_labels_QMARK_,on_node_preview,on_selection_change,nodes,depth,grid_layout_QMARK_,on_focus_change,links]),render_start_93318));
} else {
return app_93319.destroy();
}
})).catch((function (error){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.extensions.graph.pixi",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("graph","render-failed","graph/render-failed",-1323077285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),2676], null)),null);
} else {
return null;
}
}));
} else {
}

return null;
});

//# sourceMappingURL=frontend.extensions.graph.pixi.js.map
