goog.provide('frontend.extensions.graph.pixi.logic');
goog.scope(function(){
  frontend.extensions.graph.pixi.logic.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$emoji_mart$data$sets$15$native_json=shadow.js.require("module$node_modules$$emoji_mart$data$sets$15$native_json", {});
var module$node_modules$d3_force$src$index=shadow.js.require("module$node_modules$d3_force$src$index", {});
frontend.extensions.graph.pixi.logic.next_visibility_state = (function frontend$extensions$graph$pixi$logic$next_visibility_state(p__91043,scale,p__91044){
var map__91045 = p__91043;
var map__91045__$1 = cljs.core.__destructure_map(map__91045);
var label_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91045__$1,new cljs.core.Keyword(null,"label-visible?","label-visible?",252054009));
var map__91046 = p__91044;
var map__91046__$1 = cljs.core.__destructure_map(map__91046);
var show_label_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91046__$1,new cljs.core.Keyword(null,"show-label-scale","show-label-scale",-1449173001));
var hide_label_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91046__$1,new cljs.core.Keyword(null,"hide-label-scale","hide-label-scale",1323057777));
var detail_expanded_QMARK_ = true;
var label_visible_QMARK___$1 = ((((cljs.core.not(label_visible_QMARK_)) && ((scale >= show_label_scale))))?true:(cljs.core.truth_((function (){var and__5140__auto__ = label_visible_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (scale <= hide_label_scale);
} else {
return and__5140__auto__;
}
})())?false:label_visible_QMARK_
));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"detail-expanded?","detail-expanded?",1196791545),detail_expanded_QMARK_,new cljs.core.Keyword(null,"label-visible?","label-visible?",252054009),label_visible_QMARK___$1], null);
});
frontend.extensions.graph.pixi.logic.node_source_id = (function frontend$extensions$graph$pixi$logic$node_source_id(node){
var or__5142__auto__ = new cljs.core.Keyword(null,"source-id","source-id",-585995304).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
}
});
frontend.extensions.graph.pixi.logic.visual_node_id = (function frontend$extensions$graph$pixi$logic$visual_node_id(tag_id,node_id){
return (""+"tag-group:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_id)+":node:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_id));
});
frontend.extensions.graph.pixi.logic.node_priority = (function frontend$extensions$graph$pixi$logic$node_priority(pinned_node_ids,node){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(pinned_node_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node)))?(0):(1)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node)))?(0):(1)),(- (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"degree","degree",237107028).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = frontend.extensions.graph.pixi.logic.node_source_id(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()))], null);
});
frontend.extensions.graph.pixi.logic.visible_node_QMARK_ = (function frontend$extensions$graph$pixi$logic$visible_node_QMARK_(node,p__91047){
var map__91048 = p__91047;
var map__91048__$1 = cljs.core.__destructure_map(map__91048);
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91048__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91048__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91048__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91048__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
return ((typeof new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(node) === 'string') && ((((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(node))))) && ((((((min_x <= new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node) <= max_x)))) && ((((min_y <= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node) <= max_y)))))))));
});
frontend.extensions.graph.pixi.logic.occupancy_key = (function frontend$extensions$graph$pixi$logic$occupancy_key(node,p__91049,screen_cell_width,screen_cell_height){
var map__91050 = p__91049;
var map__91050__$1 = cljs.core.__destructure_map(map__91050);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91050__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91050__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91050__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var screen_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node) * scale) + x);
var screen_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node) * scale) + y);
var cx = Math.floor((screen_x / screen_cell_width));
var cy = Math.floor((screen_y / screen_cell_height));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cx)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cy));
});
frontend.extensions.graph.pixi.logic.select_label_node_ids = (function frontend$extensions$graph$pixi$logic$select_label_node_ids(nodes,p__91052){
var map__91053 = p__91052;
var map__91053__$1 = cljs.core.__destructure_map(map__91053);
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91053__$1,new cljs.core.Keyword(null,"viewport","viewport",443342715));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91053__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var screen_cell_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91053__$1,new cljs.core.Keyword(null,"screen-cell-width","screen-cell-width",-606503894),(132));
var screen_cell_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91053__$1,new cljs.core.Keyword(null,"screen-cell-height","screen-cell-height",-1827389973),(24));
var max_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91053__$1,new cljs.core.Keyword(null,"max-labels","max-labels",-1374849380),(180));
var pinned_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91053__$1,new cljs.core.Keyword(null,"pinned-node-ids","pinned-node-ids",551099745));
var pinned_node_ids__$1 = cljs.core.set(pinned_node_ids);
var remaining = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.logic.node_priority,pinned_node_ids__$1),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (pinned_node_ids__$1,map__91053,map__91053__$1,viewport,transform,screen_cell_width,screen_cell_height,max_labels,pinned_node_ids){
return (function (p1__91051_SHARP_){
return frontend.extensions.graph.pixi.logic.visible_node_QMARK_(p1__91051_SHARP_,viewport);
});})(pinned_node_ids__$1,map__91053,map__91053__$1,viewport,transform,screen_cell_width,screen_cell_height,max_labels,pinned_node_ids))
,nodes));
var occupied = cljs.core.PersistentHashSet.EMPTY;
var selected = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_(remaining)) || ((cljs.core.count(selected) >= max_labels)))){
return selected;
} else {
var node = cljs.core.first(remaining);
var k = frontend.extensions.graph.pixi.logic.occupancy_key(node,transform,screen_cell_width,screen_cell_height);
if(cljs.core.contains_QMARK_(occupied,k)){
var G__91388 = cljs.core.rest(remaining);
var G__91389 = occupied;
var G__91390 = selected;
remaining = G__91388;
occupied = G__91389;
selected = G__91390;
continue;
} else {
var G__91391 = cljs.core.rest(remaining);
var G__91392 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(occupied,k);
var G__91393 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
remaining = G__91391;
occupied = G__91392;
selected = G__91393;
continue;
}
}
break;
}
});
frontend.extensions.graph.pixi.logic.select_scoped_label_node_ids = (function frontend$extensions$graph$pixi$logic$select_scoped_label_node_ids(nodes,opts){
return frontend.extensions.graph.pixi.logic.select_label_node_ids(nodes,opts);
});
frontend.extensions.graph.pixi.logic.label_display_text = (function frontend$extensions$graph$pixi$logic$label_display_text(label,hovered_QMARK_){
var label__$1 = (function (){var or__5142__auto__ = label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var max_prefix_length = (cljs.core.truth_(hovered_QMARK_)?(96):(19));
if((cljs.core.count(label__$1) > max_prefix_length)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(label__$1,(0),max_prefix_length))+"...");
} else {
return label__$1;
}
});
frontend.extensions.graph.pixi.logic.renderer_init_options = (function frontend$extensions$graph$pixi$logic$renderer_init_options(device_pixel_ratio){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundAlpha","backgroundAlpha",1781763204),(0),new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"autoDensity","autoDensity",-1402489200),true,new cljs.core.Keyword(null,"resolution","resolution",-756075601),cljs.core.min.cljs$core$IFn$_invoke$arity$2((2),(function (){var or__5142__auto__ = device_pixel_ratio;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})()),new cljs.core.Keyword(null,"powerPreference","powerPreference",-1222807345),"high-performance"], null);
});
frontend.extensions.graph.pixi.logic.graph_target_fps = (120);
frontend.extensions.graph.pixi.logic.apply_graph_ticker_frame_rate_BANG_ = (function frontend$extensions$graph$pixi$logic$apply_graph_ticker_frame_rate_BANG_(ticker){
(ticker.maxFPS = frontend.extensions.graph.pixi.logic.graph_target_fps);

return ticker;
});
frontend.extensions.graph.pixi.logic.fps_overlay_position = (function frontend$extensions$graph$pixi$logic$fps_overlay_position(var_args){
var G__91055 = arguments.length;
switch (G__91055) {
case 4:
return frontend.extensions.graph.pixi.logic.fps_overlay_position.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.extensions.graph.pixi.logic.fps_overlay_position.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.logic.fps_overlay_position.cljs$core$IFn$_invoke$arity$4 = (function (width,height,text_width,text_height){
return frontend.extensions.graph.pixi.logic.fps_overlay_position.cljs$core$IFn$_invoke$arity$5(width,height,text_width,text_height,null);
}));

(frontend.extensions.graph.pixi.logic.fps_overlay_position.cljs$core$IFn$_invoke$arity$5 = (function (width,height,text_width,text_height,p__91056){
var map__91057 = p__91056;
var map__91057__$1 = cljs.core.__destructure_map(map__91057);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91057__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),(12));
var padding_x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91057__$1,new cljs.core.Keyword(null,"padding-x","padding-x",762313863),(8));
var padding_y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91057__$1,new cljs.core.Keyword(null,"padding-y","padding-y",-1258438186),(4));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.max.cljs$core$IFn$_invoke$arity$2(margin,((((function (){var or__5142__auto__ = width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() - margin) - padding_x) - (function (){var or__5142__auto__ = text_width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})())),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.max.cljs$core$IFn$_invoke$arity$2(margin,((((function (){var or__5142__auto__ = height;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() - margin) - padding_y) - (function (){var or__5142__auto__ = text_height;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()))], null);
}));

(frontend.extensions.graph.pixi.logic.fps_overlay_position.cljs$lang$maxFixedArity = 5);

frontend.extensions.graph.pixi.logic.fps_overlay_enabled_QMARK_ = (function frontend$extensions$graph$pixi$logic$fps_overlay_enabled_QMARK_(dev_QMARK_){
return dev_QMARK_ === true;
});
frontend.extensions.graph.pixi.logic.readable_edge_label_angle = (function frontend$extensions$graph$pixi$logic$readable_edge_label_angle(from_x,from_y,to_x,to_y){
var angle = Math.atan2((to_y - from_y),(to_x - from_x));
if((angle > (Math.PI / (2)))){
return (angle - Math.PI);
} else {
if((angle < (Math.PI / (-2)))){
return (angle + Math.PI);
} else {
return angle;

}
}
});
frontend.extensions.graph.pixi.logic.edge_render_runs = (function frontend$extensions$graph$pixi$logic$edge_render_runs(links,show_arrows_QMARK_){
var links__$1 = cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__91058,p__91059){
var vec__91060 = p__91058;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91060,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91060,(1),null);
var map__91063 = p__91059;
var map__91063__$1 = cljs.core.__destructure_map(map__91063);
var link = map__91063__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91063__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91063__$1,new cljs.core.Keyword(null,"target","target",253001721));
var endpoint = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,target], null);
if(cljs.core.contains_QMARK_(seen,endpoint)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,result], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,endpoint),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,link)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),links));
var directed_endpoints = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"target","target",253001721)),links__$1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__91064){
var map__91065 = p__91064;
var map__91065__$1 = cljs.core.__destructure_map(map__91065);
var link = map__91065__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91065__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91065__$1,new cljs.core.Keyword(null,"target","target",253001721));
var reciprocal_QMARK_ = cljs.core.contains_QMARK_(directed_endpoints,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,source], null));
var parallel_offset = ((reciprocal_QMARK_)?(1):(0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(link,new cljs.core.Keyword(null,"show-arrow?","show-arrow?",1849414819),cljs.core.boolean$(show_arrows_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parallel-offset","parallel-offset",325445442),parallel_offset], 0));
}),links__$1);
});
frontend.extensions.graph.pixi.logic.emoji_native = (function frontend$extensions$graph$pixi$logic$emoji_native(id){
if(typeof id === 'string'){
var temp__5825__auto__ = (function (){var G__91066 = frontend.extensions.graph.pixi.logic.goog$module$goog$object.get(module$node_modules$$emoji_mart$data$sets$15$native_json,"emojis");
if((G__91066 == null)){
return null;
} else {
return frontend.extensions.graph.pixi.logic.goog$module$goog$object.get(G__91066,id);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var emoji = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.extensions.graph.pixi.logic.goog$module$goog$object.get(emoji,"skins");
if(cljs.core.truth_(temp__5825__auto____$1)){
var skins = temp__5825__auto____$1;
var G__91067 = (skins[(0)]);
if((G__91067 == null)){
return null;
} else {
return frontend.extensions.graph.pixi.logic.goog$module$goog$object.get(G__91067,"native");
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.graph.pixi.logic.icon_display_text = (function frontend$extensions$graph$pixi$logic$icon_display_text(icon){
if(((typeof icon === 'string') && ((!(clojure.string.blank_QMARK_(icon)))))){
return icon;
} else {
if(cljs.core.map_QMARK_(icon)){
var type = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(icon);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(icon,"type");
}
})();
var id = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(icon,"id");
}
})();
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),null,"emoji",null], null), null),type)){
return frontend.extensions.graph.pixi.logic.emoji_native(id);
} else {
return null;
}
} else {
return null;

}
}
});
frontend.extensions.graph.pixi.logic.connected_drag_weights = (function frontend$extensions$graph$pixi$logic$connected_drag_weights(neighbor_map,start_id,p__91068){
var map__91069 = p__91068;
var map__91069__$1 = cljs.core.__destructure_map(map__91069);
var max_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91069__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793),(6));
var max_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91069__$1,new cljs.core.Keyword(null,"max-nodes","max-nodes",-591139157),(1200));
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91069__$1,new cljs.core.Keyword(null,"decay","decay",1036712184),0.72);
var min_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91069__$1,new cljs.core.Keyword(null,"min-weight","min-weight",-214061809),0.18);
var queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_id,(0)], null));
var depths = cljs.core.PersistentArrayMap.createAsIfByAssoc([start_id,(0)]);
while(true){
if(((cljs.core.empty_QMARK_(queue)) || ((cljs.core.count(depths) >= max_nodes)))){
return cljs.core.reduce_kv(((function (queue,depths,map__91069,map__91069__$1,max_depth,max_nodes,decay,min_weight){
return (function (m,node_id,depth){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,node_id,cljs.core.max.cljs$core$IFn$_invoke$arity$2(min_weight,Math.pow(decay,depth)));
});})(queue,depths,map__91069,map__91069__$1,max_depth,max_nodes,decay,min_weight))
,cljs.core.PersistentArrayMap.EMPTY,depths);
} else {
var vec__91080 = cljs.core.peek(queue);
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91080,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91080,(1),null);
var queue__$1 = cljs.core.pop(queue);
if((depth >= max_depth)){
var G__91398 = queue__$1;
var G__91399 = depths;
queue = G__91398;
depths = G__91399;
continue;
} else {
var vec__91083 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (queue,depths,vec__91080,node_id,depth,queue__$1,map__91069,map__91069__$1,max_depth,max_nodes,decay,min_weight){
return (function (p__91086,neighbor_id){
var vec__91087 = p__91086;
var queue_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91087,(0),null);
var depths_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91087,(1),null);
if(cljs.core.contains_QMARK_(depths_STAR_,neighbor_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [queue_STAR_,depths_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(queue_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neighbor_id,(depth + (1))], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(depths_STAR_,neighbor_id,(depth + (1)))], null);
}
});})(queue,depths,vec__91080,node_id,depth,queue__$1,map__91069,map__91069__$1,max_depth,max_nodes,decay,min_weight))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [queue__$1,depths], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(neighbor_map,node_id,cljs.core.PersistentVector.EMPTY));
var queue__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91083,(0),null);
var depths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91083,(1),null);
var G__91400 = queue__$2;
var G__91401 = depths__$1;
queue = G__91400;
depths = G__91401;
continue;
}
}
break;
}
});
frontend.extensions.graph.pixi.logic.merge_node_positions = (function frontend$extensions$graph$pixi$logic$merge_node_positions(layout_by_id,positions_by_id){
return cljs.core.reduce_kv((function (m,node_id,position){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,node_id);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,node_id,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node,position], 0)));
} else {
return m;
}
}),layout_by_id,positions_by_id);
});
frontend.extensions.graph.pixi.logic.current_layout_by_id = (function frontend$extensions$graph$pixi$logic$current_layout_by_id(layout_by_id,preview_layout_by_id){
var or__5142__auto__ = preview_layout_by_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return layout_by_id;
}
});
frontend.extensions.graph.pixi.logic.update_highlighted_node_ids = (function frontend$extensions$graph$pixi$logic$update_highlighted_node_ids(selected_ids,node_id,remove_QMARK_){
if(cljs.core.truth_(remove_QMARK_)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(selected_ids),node_id);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(selected_ids),node_id);
}
});
frontend.extensions.graph.pixi.logic.connected_node_ids = (function frontend$extensions$graph$pixi$logic$connected_node_ids(selected_ids,neighbor_map,depth){
var depth__$1 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = depth;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})(),(1)),(5));
var queue = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (depth__$1){
return (function (p1__91090_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__91090_SHARP_,(0)],null));
});})(depth__$1))
,selected_ids));
var seen = selected_ids;
while(true){
if(cljs.core.empty_QMARK_(queue)){
return seen;
} else {
var vec__91101 = cljs.core.peek(queue);
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91101,(0),null);
var current_depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91101,(1),null);
var queue__$1 = cljs.core.pop(queue);
if((current_depth >= depth__$1)){
var G__91404 = queue__$1;
var G__91405 = seen;
queue = G__91404;
seen = G__91405;
continue;
} else {
var vec__91104 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (queue,seen,vec__91101,node_id,current_depth,queue__$1,depth__$1){
return (function (p__91107,neighbor_id){
var vec__91108 = p__91107;
var queue_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91108,(0),null);
var seen_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91108,(1),null);
if(cljs.core.contains_QMARK_(seen_STAR_,neighbor_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [queue_STAR_,seen_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(queue_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neighbor_id,(current_depth + (1))], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_STAR_,neighbor_id)], null);
}
});})(queue,seen,vec__91101,node_id,current_depth,queue__$1,depth__$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [queue__$1,seen], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(neighbor_map,node_id,cljs.core.PersistentVector.EMPTY));
var queue__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91104,(0),null);
var seen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91104,(1),null);
var G__91406 = queue__$2;
var G__91407 = seen__$1;
queue = G__91406;
seen = G__91407;
continue;
}
}
break;
}
});
frontend.extensions.graph.pixi.logic.highlight_state = (function frontend$extensions$graph$pixi$logic$highlight_state(var_args){
var G__91112 = arguments.length;
switch (G__91112) {
case 2:
return frontend.extensions.graph.pixi.logic.highlight_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.graph.pixi.logic.highlight_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.logic.highlight_state.cljs$core$IFn$_invoke$arity$2 = (function (selected_ids,neighbor_map){
return frontend.extensions.graph.pixi.logic.highlight_state.cljs$core$IFn$_invoke$arity$3(selected_ids,neighbor_map,(1));
}));

(frontend.extensions.graph.pixi.logic.highlight_state.cljs$core$IFn$_invoke$arity$3 = (function (selected_ids,neighbor_map,depth){
var selected_ids__$1 = cljs.core.set(selected_ids);
var active_ids = frontend.extensions.graph.pixi.logic.connected_node_ids(selected_ids__$1,neighbor_map,depth);
var connected_ids = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(active_ids,selected_ids__$1);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),selected_ids__$1,new cljs.core.Keyword(null,"connected-ids","connected-ids",-763126269),connected_ids,new cljs.core.Keyword(null,"active-ids","active-ids",-958452414),active_ids,new cljs.core.Keyword(null,"select-mode?","select-mode?",625202898),cljs.core.seq(selected_ids__$1)], null);
}));

(frontend.extensions.graph.pixi.logic.highlight_state.cljs$lang$maxFixedArity = 3);

frontend.extensions.graph.pixi.logic.highlight_visible_links = (function frontend$extensions$graph$pixi$logic$highlight_visible_links(links,p__91113){
var map__91114 = p__91113;
var map__91114__$1 = cljs.core.__destructure_map(map__91114);
var active_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91114__$1,new cljs.core.Keyword(null,"active-ids","active-ids",-958452414));
var select_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91114__$1,new cljs.core.Keyword(null,"select-mode?","select-mode?",625202898));
if(cljs.core.truth_(select_mode_QMARK_)){
var active_ids__$1 = cljs.core.set(active_ids);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__91115){
var map__91116 = p__91115;
var map__91116__$1 = cljs.core.__destructure_map(map__91116);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91116__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91116__$1,new cljs.core.Keyword(null,"target","target",253001721));
return ((cljs.core.contains_QMARK_(active_ids__$1,source)) && (cljs.core.contains_QMARK_(active_ids__$1,target)));
}),links);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
frontend.extensions.graph.pixi.logic.node_emphasis = (function frontend$extensions$graph$pixi$logic$node_emphasis(p__91117,node_id){
var map__91118 = p__91117;
var map__91118__$1 = cljs.core.__destructure_map(map__91118);
var selected_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91118__$1,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141));
var connected_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91118__$1,new cljs.core.Keyword(null,"connected-ids","connected-ids",-763126269));
var preview_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91118__$1,new cljs.core.Keyword(null,"preview-ids","preview-ids",-1851224127));
var hovered_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91118__$1,new cljs.core.Keyword(null,"hovered-id","hovered-id",934850583));
var select_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91118__$1,new cljs.core.Keyword(null,"select-mode?","select-mode?",625202898));
var tag_focus_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91118__$1,new cljs.core.Keyword(null,"tag-focus-mode?","tag-focus-mode?",-477195063));
var tag_focus_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91118__$1,new cljs.core.Keyword(null,"tag-focus-ids","tag-focus-ids",-1138516798));
if(cljs.core.contains_QMARK_(selected_ids,node_id)){
return new cljs.core.Keyword(null,"selected","selected",574897764);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hovered_id,node_id)){
return new cljs.core.Keyword(null,"hovered","hovered",399068143);
} else {
if(cljs.core.contains_QMARK_(connected_ids,node_id)){
return new cljs.core.Keyword(null,"connected","connected",-169833045);
} else {
if(cljs.core.contains_QMARK_(preview_ids,node_id)){
return new cljs.core.Keyword(null,"preview","preview",451279890);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = tag_focus_mode_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(tag_focus_ids,node_id);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword(null,"preview","preview",451279890);
} else {
if(cljs.core.truth_(tag_focus_mode_QMARK_)){
return new cljs.core.Keyword(null,"background","background",-863952629);
} else {
if(cljs.core.truth_(select_mode_QMARK_)){
return new cljs.core.Keyword(null,"dimmed","dimmed",-791586346);
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);

}
}
}
}
}
}
}
});
frontend.extensions.graph.pixi.logic.double_click_ms = (320);
frontend.extensions.graph.pixi.logic.min_zoom_scale = 0.05;
frontend.extensions.graph.pixi.logic.max_zoom_scale = 3.6;
frontend.extensions.graph.pixi.logic.linked_label_visible_scale = 2.1;
frontend.extensions.graph.pixi.logic.clamp_zoom_scale = (function frontend$extensions$graph$pixi$logic$clamp_zoom_scale(scale){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(scale,frontend.extensions.graph.pixi.logic.min_zoom_scale),frontend.extensions.graph.pixi.logic.max_zoom_scale);
});
frontend.extensions.graph.pixi.logic.wheel_zoom_transform = (function frontend$extensions$graph$pixi$logic$wheel_zoom_transform(p__91119,p__91120){
var map__91121 = p__91119;
var map__91121__$1 = cljs.core.__destructure_map(map__91121);
var world_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91121__$1,new cljs.core.Keyword(null,"world-x","world-x",-907540079));
var world_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91121__$1,new cljs.core.Keyword(null,"world-y","world-y",401775680));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91121__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var map__91122 = p__91120;
var map__91122__$1 = cljs.core.__destructure_map(map__91122);
var screen_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91122__$1,new cljs.core.Keyword(null,"screen-x","screen-x",-438778187));
var screen_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91122__$1,new cljs.core.Keyword(null,"screen-y","screen-y",-773698245));
var delta_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91122__$1,new cljs.core.Keyword(null,"delta-y","delta-y",938971239));
var locked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91122__$1,new cljs.core.Keyword(null,"locked?","locked?",995448757));
if(cljs.core.truth_(locked_QMARK_)){
return null;
} else {
var current_scale = (function (){var or__5142__auto__ = scale;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})();
var factor = (((delta_y > (0)))?0.9:1.1);
var next_scale = frontend.extensions.graph.pixi.logic.clamp_zoom_scale((current_scale * factor));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(screen_x - (world_x * next_scale)),new cljs.core.Keyword(null,"y","y",-1757859776),(screen_y - (world_y * next_scale)),new cljs.core.Keyword(null,"scale","scale",-230427353),next_scale], null);
}
});
frontend.extensions.graph.pixi.logic.node_click_action = (function frontend$extensions$graph$pixi$logic$node_click_action(previous_click,node_id,p__91123,now){
var map__91124 = p__91123;
var map__91124__$1 = cljs.core.__destructure_map(map__91124);
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91124__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91124__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
if(cljs.core.truth_(open_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"next-click","next-click",381608337),null], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_id,new cljs.core.Keyword(null,"node-id","node-id",779482292).cljs$core$IFn$_invoke$arity$1(previous_click))) && (((now - new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(previous_click)) <= frontend.extensions.graph.pixi.logic.double_click_ms)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"next-click","next-click",381608337),null], null);
} else {
if(cljs.core.truth_(selected_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"unhighlight","unhighlight",-119726689),new cljs.core.Keyword(null,"next-click","next-click",381608337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"time","time",1385887882),now], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"next-click","next-click",381608337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"time","time",1385887882),now], null)], null);

}
}
}
});
frontend.extensions.graph.pixi.logic.label_state = (function frontend$extensions$graph$pixi$logic$label_state(target_alpha,update_QMARK_,hovered_only_QMARK_,include_select_scope_QMARK_,selected_only_QMARK_,active_only_QMARK_){
var G__91125 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target-alpha","target-alpha",-1045263460),target_alpha,new cljs.core.Keyword(null,"update?","update?",-693204702),update_QMARK_,new cljs.core.Keyword(null,"hovered-only?","hovered-only?",-501227248),hovered_only_QMARK_], null);
if(cljs.core.truth_(include_select_scope_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__91125,new cljs.core.Keyword(null,"selected-only?","selected-only?",-1810718071),selected_only_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active-only?","active-only?",-1370362401),active_only_QMARK_], 0));
} else {
return G__91125;
}
});
frontend.extensions.graph.pixi.logic.label_render_state = (function frontend$extensions$graph$pixi$logic$label_render_state(var_args){
var G__91127 = arguments.length;
switch (G__91127) {
case 3:
return frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$3 = (function (hovered_node_id,visibility_state,label_alpha){
return frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$6(hovered_node_id,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,visibility_state,label_alpha,false);
}));

(frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$4 = (function (hovered_node_id,active_node_ids,p__91128,label_alpha){
var map__91129 = p__91128;
var map__91129__$1 = cljs.core.__destructure_map(map__91129);
var label_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91129__$1,new cljs.core.Keyword(null,"label-visible?","label-visible?",252054009));
return frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$6(hovered_node_id,active_node_ids,active_node_ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label-visible?","label-visible?",252054009),label_visible_QMARK_], null),label_alpha,true);
}));

(frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$5 = (function (hovered_node_id,selected_node_ids,active_node_ids,visibility_state,label_alpha){
return frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$6(hovered_node_id,selected_node_ids,active_node_ids,visibility_state,label_alpha,true);
}));

(frontend.extensions.graph.pixi.logic.label_render_state.cljs$core$IFn$_invoke$arity$6 = (function (hovered_node_id,selected_node_ids,active_node_ids,p__91130,_,include_select_scope_QMARK_){
var map__91131 = p__91130;
var map__91131__$1 = cljs.core.__destructure_map(map__91131);
var label_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91131__$1,new cljs.core.Keyword(null,"label-visible?","label-visible?",252054009));
var linked_label_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91131__$1,new cljs.core.Keyword(null,"linked-label-visible?","linked-label-visible?",-1421723185));
var linked_label_visible_QMARK___$1 = (((!((linked_label_visible_QMARK_ == null))))?linked_label_visible_QMARK_:label_visible_QMARK_);
var select_mode_QMARK_ = cljs.core.seq(selected_node_ids);
var active_mode_QMARK_ = cljs.core.seq(active_node_ids);
var active_labels_only_QMARK_ = cljs.core.boolean$(select_mode_QMARK_);
if(cljs.core.truth_(hovered_node_id)){
return frontend.extensions.graph.pixi.logic.label_state(1.0,true,cljs.core.not((function (){var or__5142__auto__ = label_visible_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return active_mode_QMARK_;
}
})()),include_select_scope_QMARK_,false,(function (){var or__5142__auto__ = active_labels_only_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = active_mode_QMARK_;
if(and__5140__auto__){
return linked_label_visible_QMARK___$1;
} else {
return and__5140__auto__;
}
}
})());
} else {
if(cljs.core.truth_(label_visible_QMARK_)){
return frontend.extensions.graph.pixi.logic.label_state(1.0,true,false,include_select_scope_QMARK_,false,(function (){var or__5142__auto__ = active_labels_only_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = active_mode_QMARK_;
if(and__5140__auto__){
return linked_label_visible_QMARK___$1;
} else {
return and__5140__auto__;
}
}
})());
} else {
if(select_mode_QMARK_){
return frontend.extensions.graph.pixi.logic.label_state(1.0,true,false,include_select_scope_QMARK_,false,true);
} else {
return frontend.extensions.graph.pixi.logic.label_state(0.0,false,true,include_select_scope_QMARK_,false,false);

}
}
}
}));

(frontend.extensions.graph.pixi.logic.label_render_state.cljs$lang$maxFixedArity = 6);

frontend.extensions.graph.pixi.logic.focus_labels_only_QMARK_ = (function frontend$extensions$graph$pixi$logic$focus_labels_only_QMARK_(focused_node_ids,_visibility_state){
return cljs.core.boolean$(cljs.core.seq(cljs.core.set(focused_node_ids)));
});
frontend.extensions.graph.pixi.logic.focused_label_node_QMARK_ = (function frontend$extensions$graph$pixi$logic$focused_label_node_QMARK_(focused_node_ids,node){
return cljs.core.contains_QMARK_(cljs.core.set(focused_node_ids),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
});
frontend.extensions.graph.pixi.logic.tag_related_node_ids = (function frontend$extensions$graph$pixi$logic$tag_related_node_ids(tag_ids,neighbor_map,tag_id_QMARK_){
var tag_ids__$1 = cljs.core.set(tag_ids);
var tag_id_QMARK___$1 = cljs.core.set(tag_id_QMARK_);
var object_ids = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(tag_id_QMARK___$1,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__91132_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(neighbor_map,p1__91132_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_ids__$1], 0))));
var crossed_tag_ids = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tag_id_QMARK___$1,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__91133_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(neighbor_map,p1__91133_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_ids], 0))));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(tag_ids__$1,object_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([crossed_tag_ids], 0));
});
frontend.extensions.graph.pixi.logic.tag_focus_active_level_QMARK_ = (function frontend$extensions$graph$pixi$logic$tag_focus_active_level_QMARK_(focus_level){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734),focus_level);
});
frontend.extensions.graph.pixi.logic.tag_focus_active_node_ids = (function frontend$extensions$graph$pixi$logic$tag_focus_active_node_ids(_visible_tag_ids,focus_level,focused_tag_id,visible_object_ids,crossed_tag_ids){
var G__91134 = focus_level;
var G__91134__$1 = (((G__91134 instanceof cljs.core.Keyword))?G__91134.fqn:null);
switch (G__91134__$1) {
case "objects":
if(cljs.core.truth_(focused_tag_id)){
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentHashSet.createAsIfByAssoc([focused_tag_id]),cljs.core.set(visible_object_ids),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.set(crossed_tag_ids)], 0));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}

break;
default:
if(cljs.core.truth_(focused_tag_id)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([focused_tag_id]);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}

}
});
frontend.extensions.graph.pixi.logic.tag_focus_display_node_ids = (function frontend$extensions$graph$pixi$logic$tag_focus_display_node_ids(var_args){
var G__91136 = arguments.length;
switch (G__91136) {
case 5:
return frontend.extensions.graph.pixi.logic.tag_focus_display_node_ids.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return frontend.extensions.graph.pixi.logic.tag_focus_display_node_ids.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.logic.tag_focus_display_node_ids.cljs$core$IFn$_invoke$arity$5 = (function (visible_tag_ids,focus_level,focused_tag_id,visible_object_ids,crossed_tag_ids){
var visible_tag_ids__$1 = cljs.core.set(visible_tag_ids);
var G__91137 = focus_level;
var G__91137__$1 = (((G__91137 instanceof cljs.core.Keyword))?G__91137.fqn:null);
switch (G__91137__$1) {
case "objects":
if(cljs.core.truth_(focused_tag_id)){
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(visible_tag_ids__$1,cljs.core.set(visible_object_ids),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.set(crossed_tag_ids)], 0));
} else {
return visible_tag_ids__$1;
}

break;
default:
return visible_tag_ids__$1;

}
}));

(frontend.extensions.graph.pixi.logic.tag_focus_display_node_ids.cljs$core$IFn$_invoke$arity$6 = (function (visible_tag_ids,focus_level,focused_tag_id,visible_object_ids,crossed_tag_ids,_background_object_ids){
return frontend.extensions.graph.pixi.logic.tag_focus_active_node_ids(visible_tag_ids,focus_level,focused_tag_id,visible_object_ids,crossed_tag_ids);
}));

(frontend.extensions.graph.pixi.logic.tag_focus_display_node_ids.cljs$lang$maxFixedArity = 6);

frontend.extensions.graph.pixi.logic.tag_focus_context_node_ids = (function frontend$extensions$graph$pixi$logic$tag_focus_context_node_ids(_visible_tag_ids,focus_level,focused_tag_id,visible_object_ids,crossed_tag_ids,background_node_ids){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734),focus_level);
if(and__5140__auto__){
return focused_tag_id;
} else {
return and__5140__auto__;
}
})())){
return frontend.extensions.graph.pixi.logic.tag_focus_active_node_ids(null,focus_level,focused_tag_id,visible_object_ids,crossed_tag_ids);
} else {
return cljs.core.set(background_node_ids);
}
});
frontend.extensions.graph.pixi.logic.layout_bounds = (function frontend$extensions$graph$pixi$logic$layout_bounds(nodes){
if(cljs.core.seq(nodes)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (bounds,p__91138){
var map__91139 = p__91138;
var map__91139__$1 = cljs.core.__destructure_map(map__91139);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91139__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91139__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91139__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var radius__$1 = (function (){var or__5142__auto__ = radius;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-x","min-x",-1544012261),cljs.core.min.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min-x","min-x",-1544012261).cljs$core$IFn$_invoke$arity$1(bounds),(x - radius__$1)),new cljs.core.Keyword(null,"min-y","min-y",-1969872948),cljs.core.min.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min-y","min-y",-1969872948).cljs$core$IFn$_invoke$arity$1(bounds),(y - radius__$1)),new cljs.core.Keyword(null,"max-x","max-x",1609536425),cljs.core.max.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-x","max-x",1609536425).cljs$core$IFn$_invoke$arity$1(bounds),(x + radius__$1)),new cljs.core.Keyword(null,"max-y","max-y",1525628082),cljs.core.max.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-y","max-y",1525628082).cljs$core$IFn$_invoke$arity$1(bounds),(y + radius__$1))], null);
}),(function (){var map__91140 = cljs.core.first(nodes);
var map__91140__$1 = cljs.core.__destructure_map(map__91140);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91140__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91140__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91140__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var radius__$1 = (function (){var or__5142__auto__ = radius;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-x","min-x",-1544012261),(x - radius__$1),new cljs.core.Keyword(null,"min-y","min-y",-1969872948),(y - radius__$1),new cljs.core.Keyword(null,"max-x","max-x",1609536425),(x + radius__$1),new cljs.core.Keyword(null,"max-y","max-y",1525628082),(y + radius__$1)], null);
})(),cljs.core.rest(nodes));
} else {
return null;
}
});
frontend.extensions.graph.pixi.logic.fit_transform = (function frontend$extensions$graph$pixi$logic$fit_transform(nodes,width,height,p__91141){
var map__91142 = p__91141;
var map__91142__$1 = cljs.core.__destructure_map(map__91142);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91142__$1,new cljs.core.Keyword(null,"padding","padding",1660304693),(80));
var max_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91142__$1,new cljs.core.Keyword(null,"max-scale","max-scale",-1242050464),1.0);
var temp__5823__auto__ = frontend.extensions.graph.pixi.logic.layout_bounds(nodes);
if(cljs.core.truth_(temp__5823__auto__)){
var map__91143 = temp__5823__auto__;
var map__91143__$1 = cljs.core.__destructure_map(map__91143);
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91143__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91143__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91143__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91143__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var graph_width = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),(max_x - min_x));
var graph_height = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),(max_y - min_y));
var available_width = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),(width - ((2) * padding)));
var available_height = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),(height - ((2) * padding)));
var scale = frontend.extensions.graph.pixi.logic.clamp_zoom_scale(cljs.core.min.cljs$core$IFn$_invoke$arity$variadic(max_scale,(available_width / graph_width),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(available_height / graph_height)], 0)));
var center_x = ((min_x + max_x) / (2));
var center_y = ((min_y + max_y) / (2));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),scale,new cljs.core.Keyword(null,"x","x",2099068185),((width / (2)) - (center_x * scale)),new cljs.core.Keyword(null,"y","y",-1757859776),((height / (2)) - (center_y * scale))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.0,new cljs.core.Keyword(null,"x","x",2099068185),(width / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(height / (2))], null);
}
});
frontend.extensions.graph.pixi.logic.normalize_view_mode = (function frontend$extensions$graph$pixi$logic$normalize_view_mode(view_mode){
var G__91144 = view_mode;
var G__91144__$1 = (((G__91144 instanceof cljs.core.Keyword))?G__91144.fqn:null);
switch (G__91144__$1) {
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
frontend.extensions.graph.pixi.logic.labels_visible_by_default_QMARK_ = (function frontend$extensions$graph$pixi$logic$labels_visible_by_default_QMARK_(view_mode){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),frontend.extensions.graph.pixi.logic.normalize_view_mode(view_mode));
});
frontend.extensions.graph.pixi.logic.color__GT_int = (function frontend$extensions$graph$pixi$logic$color__GT_int(hex_color){
return parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex_color,(1)),(16));
});
frontend.extensions.graph.pixi.logic.tag_node_color = (function frontend$extensions$graph$pixi$logic$tag_node_color(dark_QMARK_){
if(cljs.core.truth_(dark_QMARK_)){
return "#8F78B8";
} else {
return "#B9A5E6";
}
});
frontend.extensions.graph.pixi.logic.node_color = (function frontend$extensions$graph$pixi$logic$node_color(kind,dark_QMARK_){
var G__91145 = kind;
switch (G__91145) {
case "tag":
return frontend.extensions.graph.pixi.logic.tag_node_color(dark_QMARK_);

break;
case "property":
if(cljs.core.truth_(dark_QMARK_)){
return "#A08D85";
} else {
return "#817068";
}

break;
default:
if(cljs.core.truth_(dark_QMARK_)){
return "#858D98";
} else {
return "#E6E6E6";
}

}
});
frontend.extensions.graph.pixi.logic.build_degree_map = (function frontend$extensions$graph$pixi$logic$build_degree_map(links){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__91146){
var map__91147 = p__91146;
var map__91147__$1 = cljs.core.__destructure_map(map__91147);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91147__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91147__$1,new cljs.core.Keyword(null,"target","target",253001721));
var source_degree = ((function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,source);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1));
var target_degree = ((function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,target);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,source,source_degree),target,target_degree);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),links));
});
frontend.extensions.graph.pixi.logic.keep_links_with_nodes = (function frontend$extensions$graph$pixi$logic$keep_links_with_nodes(links,node_id_set){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__91148){
var map__91149 = p__91148;
var map__91149__$1 = cljs.core.__destructure_map(map__91149);
var link = map__91149__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91149__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91149__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_((function (){var and__5140__auto__ = source;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = target;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.contains_QMARK_(node_id_set,source)) && (cljs.core.contains_QMARK_(node_id_set,target)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,link);
} else {
return result;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),links));
});
frontend.extensions.graph.pixi.logic.build_fast_degree_map = (function frontend$extensions$graph$pixi$logic$build_fast_degree_map(nodes,links){
var node_count = cljs.core.count(nodes);
var link_count = cljs.core.count(links);
var node_id_set = (new Set());
var degree = (new Map());
var idx_91453 = (0);
while(true){
if((idx_91453 < node_count)){
node_id_set.add(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodes,idx_91453)));

var G__91454 = (idx_91453 + (1));
idx_91453 = G__91454;
continue;
} else {
}
break;
}

var idx_91455 = (0);
while(true){
if((idx_91455 < link_count)){
var map__91150_91456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(links,idx_91455);
var map__91150_91457__$1 = cljs.core.__destructure_map(map__91150_91456);
var source_91458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91150_91457__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target_91459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91150_91457__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_((function (){var and__5140__auto__ = source_91458;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = target_91459;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = node_id_set.has(source_91458);
if(cljs.core.truth_(and__5140__auto____$2)){
return node_id_set.has(target_91459);
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
degree.set(source_91458,((function (){var or__5142__auto__ = degree.get(source_91458);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1)));

degree.set(target_91459,((function (){var or__5142__auto__ = degree.get(target_91459);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1)));
} else {
}

var G__91460 = (idx_91455 + (1));
idx_91455 = G__91460;
continue;
} else {
}
break;
}

return degree;
});
frontend.extensions.graph.pixi.logic.display_links = (function frontend$extensions$graph$pixi$logic$display_links(links,layouted_nodes){
var node_id_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),layouted_nodes));
var tag_id_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.logic.node_source_id,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91151_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91151_SHARP_));
}),layouted_nodes)));
var display_id_by_source_and_cluster = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,node){
var temp__5823__auto__ = new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5823__auto__)){
var cluster_id = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.graph.pixi.logic.node_source_id(node),cluster_id], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,layouted_nodes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__91152){
var map__91153 = p__91152;
var map__91153__$1 = cljs.core.__destructure_map(map__91153);
var link = map__91153__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91153__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91153__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.contains_QMARK_(tag_id_set,target)){
var temp__5825__auto__ = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(display_id_by_source_and_cluster,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,target], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(node_id_set,source)){
return source;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var source_id = temp__5825__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(link,new cljs.core.Keyword(null,"source","source",-433931539),source_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721),target], 0));
} else {
return null;
}
} else {
if(cljs.core.contains_QMARK_(tag_id_set,source)){
var temp__5825__auto__ = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(display_id_by_source_and_cluster,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,source], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(node_id_set,target)){
return target;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var target_id = temp__5825__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(link,new cljs.core.Keyword(null,"source","source",-433931539),source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721),target_id], 0));
} else {
return null;
}
} else {
if(((cljs.core.contains_QMARK_(node_id_set,source)) && (cljs.core.contains_QMARK_(node_id_set,target)))){
return link;
} else {
return null;
}
}
}
})),links);
});
frontend.extensions.graph.pixi.logic.tag_view_non_tag_radius = 4.2;
frontend.extensions.graph.pixi.logic.node_radius = (function frontend$extensions$graph$pixi$logic$node_radius(var_args){
var G__91155 = arguments.length;
switch (G__91155) {
case 2:
return frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$2 = (function (kind,degree){
return frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$4(kind,degree,false,false);
}));

(frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$3 = (function (kind,degree,grid_object_QMARK_){
return frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$4(kind,degree,grid_object_QMARK_,false);
}));

(frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$4 = (function (kind,degree,grid_object_QMARK_,tags_view_QMARK_){
var base = (function (){var G__91156 = kind;
switch (G__91156) {
case "tag":
return 7.4;

break;
case "object":
return 4.4;

break;
case "journal":
return 4.4;

break;
default:
return 3.8;

}
})();
var radius = (base + cljs.core.min.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,"tag"))?15.0:12.0),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,"tag"))?4.1:3.4) * Math.sqrt(degree))));
if(cljs.core.truth_((function (){var and__5140__auto__ = tags_view_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("tag",kind);
} else {
return and__5140__auto__;
}
})())){
return frontend.extensions.graph.pixi.logic.tag_view_non_tag_radius;
} else {
if(cljs.core.truth_(grid_object_QMARK_)){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(cljs.core.min.cljs$core$IFn$_invoke$arity$2(radius,5.8),3.2);
} else {
return radius;
}
}
}));

(frontend.extensions.graph.pixi.logic.node_radius.cljs$lang$maxFixedArity = 4);

frontend.extensions.graph.pixi.logic.decorate_node = (function frontend$extensions$graph$pixi$logic$decorate_node(var_args){
var G__91158 = arguments.length;
switch (G__91158) {
case 5:
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$5 = (function (node,degree,dark_QMARK_,x,y){
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$6(node,degree,dark_QMARK_,x,y,null);
}));

(frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$6 = (function (node,degree,dark_QMARK_,x,y,p__91159){
var map__91160 = p__91159;
var map__91160__$1 = cljs.core.__destructure_map(map__91160);
var tags_view_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91160__$1,new cljs.core.Keyword(null,"tags-view?","tags-view?",1974154270));
var kind = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node);
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$3(degree,frontend.extensions.graph.pixi.logic.node_source_id(node),(0));
var color = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.extensions.graph.pixi.logic.node_color(kind,dark_QMARK_);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$4(kind,d,new cljs.core.Keyword(null,"grid-object?","grid-object?",-933862505).cljs$core$IFn$_invoke$arity$1(node),tags_view_QMARK_),new cljs.core.Keyword(null,"degree","degree",237107028),d,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"color-int","color-int",-2037271210),frontend.extensions.graph.pixi.logic.color__GT_int(color)], 0));
}));

(frontend.extensions.graph.pixi.logic.decorate_node.cljs$lang$maxFixedArity = 6);

frontend.extensions.graph.pixi.logic.decorate_large_page_node = (function frontend$extensions$graph$pixi$logic$decorate_large_page_node(node,x,y,d,radius,color_int){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"degree","degree",237107028),d,new cljs.core.Keyword(null,"color-int","color-int",-2037271210),color_int], 0));
});
frontend.extensions.graph.pixi.logic.simulation_node = (function frontend$extensions$graph$pixi$logic$simulation_node(node,degree,idx){
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$3(degree,frontend.extensions.graph.pixi.logic.node_source_id(node),(0));
var result = ({"id": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node), "idx": idx, "kind": new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node), "degree": d, "radius": (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node),d);
}
})()});
if(typeof new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node) === 'number'){
(result.x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node));
} else {
}

if(typeof new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node) === 'number'){
(result.y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(node))){
(result.fx = (0));

(result.fy = (0));
} else {
}

return result;
});
frontend.extensions.graph.pixi.logic.simulation_link = (function frontend$extensions$graph$pixi$logic$simulation_link(p__91161){
var map__91162 = p__91161;
var map__91162__$1 = cljs.core.__destructure_map(map__91162);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91162__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91162__$1,new cljs.core.Keyword(null,"target","target",253001721));
return ({"source": source, "target": target});
});
frontend.extensions.graph.pixi.logic.large_graph_fast_layout_threshold = (10000);
frontend.extensions.graph.pixi.logic.all_pages_fast_layout_threshold = (2500);
frontend.extensions.graph.pixi.logic.large_graph_draw_edge_limit = (8000);
frontend.extensions.graph.pixi.logic.large_graph_render_node_limit = (12000);
frontend.extensions.graph.pixi.logic.all_pages_large_graph_draw_edge_limit = (3600);
frontend.extensions.graph.pixi.logic.all_pages_large_graph_render_node_limit = (2200);
frontend.extensions.graph.pixi.logic.regular_graph_draw_edge_limit = (28000);
frontend.extensions.graph.pixi.logic.tag_force_node_limit = (900);
frontend.extensions.graph.pixi.logic.layout_mode = (function frontend$extensions$graph$pixi$logic$layout_mode(node_count,view_mode){
var view_mode__$1 = frontend.extensions.graph.pixi.logic.normalize_view_mode(view_mode);
var threshold = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)))?frontend.extensions.graph.pixi.logic.all_pages_fast_layout_threshold:frontend.extensions.graph.pixi.logic.large_graph_fast_layout_threshold);
if((node_count >= threshold)){
return new cljs.core.Keyword(null,"fast","fast",-24391997);
} else {
return new cljs.core.Keyword(null,"force","force",781957286);
}
});
frontend.extensions.graph.pixi.logic.large_graph_threshold = (function frontend$extensions$graph$pixi$logic$large_graph_threshold(view_mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.logic.normalize_view_mode(view_mode),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))){
return frontend.extensions.graph.pixi.logic.all_pages_fast_layout_threshold;
} else {
return frontend.extensions.graph.pixi.logic.large_graph_fast_layout_threshold;
}
});
frontend.extensions.graph.pixi.logic.draw_edge_limit = (function frontend$extensions$graph$pixi$logic$draw_edge_limit(node_count,link_count,view_mode){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(link_count,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.logic.normalize_view_mode(view_mode),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))) && ((node_count >= frontend.extensions.graph.pixi.logic.large_graph_threshold(view_mode)))))?frontend.extensions.graph.pixi.logic.all_pages_large_graph_draw_edge_limit:(((node_count >= frontend.extensions.graph.pixi.logic.large_graph_threshold(view_mode)))?frontend.extensions.graph.pixi.logic.large_graph_draw_edge_limit:frontend.extensions.graph.pixi.logic.regular_graph_draw_edge_limit
)));
});
frontend.extensions.graph.pixi.logic.render_node_limit = (function frontend$extensions$graph$pixi$logic$render_node_limit(node_count,view_mode){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(node_count,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.logic.normalize_view_mode(view_mode),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))) && ((node_count >= frontend.extensions.graph.pixi.logic.large_graph_threshold(view_mode)))))?frontend.extensions.graph.pixi.logic.all_pages_large_graph_render_node_limit:(((node_count >= frontend.extensions.graph.pixi.logic.large_graph_threshold(view_mode)))?frontend.extensions.graph.pixi.logic.large_graph_render_node_limit:node_count
)));
});
frontend.extensions.graph.pixi.logic.point_cross = (function frontend$extensions$graph$pixi$logic$point_cross(o,a,b){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(o)) * (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(o))) - ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(o)) * (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(o))));
});
frontend.extensions.graph.pixi.logic.hull_half = (function frontend$extensions$graph$pixi$logic$hull_half(points){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (h,point){
var h__$1 = (function (){var h__$1 = h;
while(true){
if((((cljs.core.count(h__$1) >= (2))) && ((!((frontend.extensions.graph.pixi.logic.point_cross(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(h__$1,(cljs.core.count(h__$1) - (2))),cljs.core.peek(h__$1),point) > (0))))))){
var G__91470 = cljs.core.pop(h__$1);
h__$1 = G__91470;
continue;
} else {
return h__$1;
}
break;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(h__$1,point);
}),cljs.core.PersistentVector.EMPTY,points);
});
frontend.extensions.graph.pixi.logic.convex_hull = (function frontend$extensions$graph$pixi$logic$convex_hull(points){
var points__$1 = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(points)));
if((cljs.core.count(points__$1) < (3))){
return points__$1;
} else {
var lower = frontend.extensions.graph.pixi.logic.hull_half(points__$1);
var upper = frontend.extensions.graph.pixi.logic.hull_half(cljs.core.rseq(points__$1));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(lower),cljs.core.butlast(upper)));
}
});
frontend.extensions.graph.pixi.logic.cluster_boundary_points = (function frontend$extensions$graph$pixi$logic$cluster_boundary_points(nodes,center_x,center_y){
var points = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__91163){
var map__91164 = p__91163;
var map__91164__$1 = cljs.core.__destructure_map(map__91164);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91164__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91164__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91164__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var padding = ((function (){var or__5142__auto__ = radius;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (34));
var diagonal = (padding * 0.72);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + padding),new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + diagonal),new cljs.core.Keyword(null,"y","y",-1757859776),(y + diagonal)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + padding)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - diagonal),new cljs.core.Keyword(null,"y","y",-1757859776),(y + diagonal)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - padding),new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - diagonal),new cljs.core.Keyword(null,"y","y",-1757859776),(y - diagonal)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y - padding)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + diagonal),new cljs.core.Keyword(null,"y","y",-1757859776),(y - diagonal)], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var hull = frontend.extensions.graph.pixi.logic.convex_hull(points);
if((cljs.core.count(hull) >= (3))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__91165){
var map__91166 = p__91165;
var map__91166__$1 = cljs.core.__destructure_map(map__91166);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91166__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91166__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dx = (x - center_x);
var dy = (y - center_y);
var distance = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),Math.sqrt(((dx * dx) + (dy * dy))));
var soften = (16);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + ((dx / distance) * soften)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + ((dy / distance) * soften))], null);
}),hull));
} else {
return null;
}
});
frontend.extensions.graph.pixi.logic.tag_cluster_color_palette = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#3B82F6","#10B981","#F59E0B","#F43F5E","#8B5CF6","#06B6D4","#84CC16","#F97316","#14B8A6","#A855F7","#64748B","#EC4899"], null);
frontend.extensions.graph.pixi.logic.grid_group_object_limit = (36);
frontend.extensions.graph.pixi.logic.tag_title_color_int = (function frontend$extensions$graph$pixi$logic$tag_title_color_int(title){
var title__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
var hash = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,idx){
return cljs.core.mod(((result * (31)) + title__$1.charCodeAt(idx)),(2147483647));
}),(0),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((title__$1).length)));
return frontend.extensions.graph.pixi.logic.color__GT_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.logic.tag_cluster_color_palette,cljs.core.mod(hash,cljs.core.count(frontend.extensions.graph.pixi.logic.tag_cluster_color_palette))));
});
frontend.extensions.graph.pixi.logic.grid_layout_enabled_QMARK_ = (function frontend$extensions$graph$pixi$logic$grid_layout_enabled_QMARK_(opts){
return new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125).cljs$core$IFn$_invoke$arity$1(opts) === true;
});
frontend.extensions.graph.pixi.logic.tag_cluster_backgrounds = (function frontend$extensions$graph$pixi$logic$tag_cluster_backgrounds(var_args){
var G__91169 = arguments.length;
switch (G__91169) {
case 2:
return frontend.extensions.graph.pixi.logic.tag_cluster_backgrounds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.graph.pixi.logic.tag_cluster_backgrounds.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.logic.tag_cluster_backgrounds.cljs$core$IFn$_invoke$arity$2 = (function (nodes,view_mode){
return frontend.extensions.graph.pixi.logic.tag_cluster_backgrounds.cljs$core$IFn$_invoke$arity$3(nodes,view_mode,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.graph.pixi.logic.tag_cluster_backgrounds.cljs$core$IFn$_invoke$arity$3 = (function (nodes,view_mode,p__91170){
var map__91171 = p__91170;
var map__91171__$1 = cljs.core.__destructure_map(map__91171);
var grid_layout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91171__$1,new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884),frontend.extensions.graph.pixi.logic.normalize_view_mode(view_mode))){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__91172){
var vec__91173 = p__91172;
var cluster_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91173,(0),null);
var nodes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91173,(1),null);
var bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (bounds,p__91176){
var map__91177 = p__91176;
var map__91177__$1 = cljs.core.__destructure_map(map__91177);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91177__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91177__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91177__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var radius__$1 = (function (){var or__5142__auto__ = radius;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-x","min-x",-1544012261),cljs.core.min.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min-x","min-x",-1544012261).cljs$core$IFn$_invoke$arity$1(bounds),(x - radius__$1)),new cljs.core.Keyword(null,"min-y","min-y",-1969872948),cljs.core.min.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min-y","min-y",-1969872948).cljs$core$IFn$_invoke$arity$1(bounds),(y - radius__$1)),new cljs.core.Keyword(null,"max-x","max-x",1609536425),cljs.core.max.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-x","max-x",1609536425).cljs$core$IFn$_invoke$arity$1(bounds),(x + radius__$1)),new cljs.core.Keyword(null,"max-y","max-y",1525628082),cljs.core.max.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-y","max-y",1525628082).cljs$core$IFn$_invoke$arity$1(bounds),(y + radius__$1))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-x","min-x",-1544012261),Infinity,new cljs.core.Keyword(null,"min-y","min-y",-1969872948),Infinity,new cljs.core.Keyword(null,"max-x","max-x",1609536425),-Infinity,new cljs.core.Keyword(null,"max-y","max-y",1525628082),-Infinity], null),nodes__$1);
var tag_node = cljs.core.some((function (p1__91167_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91167_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cluster_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91167_SHARP_))))){
return p1__91167_SHARP_;
} else {
return null;
}
}),nodes__$1);
var center_x = (cljs.core.truth_((function (){var and__5140__auto__ = grid_layout_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return tag_node;
} else {
return and__5140__auto__;
}
})())?new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tag_node):((new cljs.core.Keyword(null,"min-x","min-x",-1544012261).cljs$core$IFn$_invoke$arity$1(bounds) + new cljs.core.Keyword(null,"max-x","max-x",1609536425).cljs$core$IFn$_invoke$arity$1(bounds)) / (2)));
var center_y = (cljs.core.truth_((function (){var and__5140__auto__ = grid_layout_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return tag_node;
} else {
return and__5140__auto__;
}
})())?new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tag_node):((new cljs.core.Keyword(null,"min-y","min-y",-1969872948).cljs$core$IFn$_invoke$arity$1(bounds) + new cljs.core.Keyword(null,"max-y","max-y",1525628082).cljs$core$IFn$_invoke$arity$1(bounds)) / (2)));
var radius = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(84),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__91178){
var map__91179 = p__91178;
var map__91179__$1 = cljs.core.__destructure_map(map__91179);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91179__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91179__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91179__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var dx = (x - center_x);
var dy = (y - center_y);
return ((Math.sqrt(((dx * dx) + (dy * dy))) + (function (){var or__5142__auto__ = radius;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()) + (44));
}),nodes__$1));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cluster_id,new cljs.core.Keyword(null,"x","x",2099068185),center_x,new cljs.core.Keyword(null,"y","y",-1757859776),center_y,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"points","points",-1486596883),frontend.extensions.graph.pixi.logic.cluster_boundary_points(nodes__$1,center_x,center_y),new cljs.core.Keyword(null,"color-int","color-int",-2037271210),frontend.extensions.graph.pixi.logic.tag_title_color_int(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(tag_node,cluster_id))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),nodes)))));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(frontend.extensions.graph.pixi.logic.tag_cluster_backgrounds.cljs$lang$maxFixedArity = 3);

frontend.extensions.graph.pixi.logic.link_distance = (function frontend$extensions$graph$pixi$logic$link_distance(view_mode,value){
if(typeof value === 'number'){
return value;
} else {
var G__91180 = view_mode;
var G__91180__$1 = (((G__91180 instanceof cljs.core.Keyword))?G__91180.fqn:null);
switch (G__91180__$1) {
case "tags-and-objects":
return (58);

break;
case "page":
return (118);

break;
default:
return (82);

}
}
});
frontend.extensions.graph.pixi.logic.charge_strength = (function frontend$extensions$graph$pixi$logic$charge_strength(view_mode){
var G__91181 = view_mode;
var G__91181__$1 = (((G__91181 instanceof cljs.core.Keyword))?G__91181.fqn:null);
switch (G__91181__$1) {
case "tags-and-objects":
return (-95);

break;
case "page":
return (-180);

break;
default:
return (-140);

}
});
frontend.extensions.graph.pixi.logic.y_strength = (function frontend$extensions$graph$pixi$logic$y_strength(view_mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))){
return 0.018;
} else {
return 0.0;
}
});
frontend.extensions.graph.pixi.logic.layout_tick_count = (function frontend$extensions$graph$pixi$logic$layout_tick_count(node_count,view_mode){
var view_mode__$1 = frontend.extensions.graph.pixi.logic.normalize_view_mode(view_mode);
if((node_count <= (120))){
return (160);
} else {
if((node_count <= (400))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))){
return (130);
} else {
return (110);
}
} else {
if((node_count <= (900))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))){
return (110);
} else {
return (90);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))) && ((node_count < frontend.extensions.graph.pixi.logic.large_graph_fast_layout_threshold)))){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))){
return (90);
} else {
return (70);
}

}
}
}
}
});
frontend.extensions.graph.pixi.logic.phyllotaxis_layout_nodes = (function frontend$extensions$graph$pixi$logic$phyllotaxis_layout_nodes(nodes,degree,dark_QMARK_){
var golden_angle = (Math.PI * ((3) - Math.sqrt((5))));
var spacing = (18);
var vec__91182 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__91185,node){
var vec__91186 = p__91185;
var linked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91186,(0),null);
var unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91186,(1),null);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(degree,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),(0)) > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(linked,node),unlinked], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [linked,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(unlinked,node)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),nodes);
var linked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91182,(0),null);
var unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91182,(1),null);
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,node){
var rank = (idx + (1));
var angle = (idx * golden_angle);
var radius = (spacing * Math.sqrt(rank));
var x = (radius * Math.cos(angle));
var y = (radius * Math.sin(angle));
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$5(node,degree,dark_QMARK_,x,y);
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked,unlinked)));
});
frontend.extensions.graph.pixi.logic.linked_node_QMARK_ = (function frontend$extensions$graph$pixi$logic$linked_node_QMARK_(degree,node){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$3(degree,frontend.extensions.graph.pixi.logic.node_source_id(node),(0)) > (0));
});
frontend.extensions.graph.pixi.logic.split_linked_nodes = (function frontend$extensions$graph$pixi$logic$split_linked_nodes(nodes,degree){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__91189,node){
var vec__91190 = p__91189;
var linked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91190,(0),null);
var isolated = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91190,(1),null);
if(frontend.extensions.graph.pixi.logic.linked_node_QMARK_(degree,node)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(linked,node),isolated], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [linked,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(isolated,node)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),nodes);
});
frontend.extensions.graph.pixi.logic.all_pages_node_priority = (function frontend$extensions$graph$pixi$logic$all_pages_node_priority(degree,node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node)))?(0):(1)),(- cljs.core.get.cljs$core$IFn$_invoke$arity$3(degree,frontend.extensions.graph.pixi.logic.node_source_id(node),(0))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()))], null);
});
frontend.extensions.graph.pixi.logic.graph_center = (function frontend$extensions$graph$pixi$logic$graph_center(nodes){
var temp__5823__auto__ = frontend.extensions.graph.pixi.logic.layout_bounds(nodes);
if(cljs.core.truth_(temp__5823__auto__)){
var map__91193 = temp__5823__auto__;
var map__91193__$1 = cljs.core.__destructure_map(map__91193);
var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91193__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91193__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91193__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91193__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((min_x + max_x) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),((min_y + max_y) / (2)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(cljs.core.max.cljs$core$IFn$_invoke$arity$2((max_x - min_x),(max_y - min_y)) / (2))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(0)], null);
}
});
frontend.extensions.graph.pixi.logic.place_isolated_ring_nodes = (function frontend$extensions$graph$pixi$logic$place_isolated_ring_nodes(nodes,degree,dark_QMARK_,start_radius){
var node_gap = (42);
var ring_gap = (58);
var sorted_nodes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__91194_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91194_SHARP_)));
}),nodes);
var remaining = sorted_nodes;
var ring = (0);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return cljs.core.vec(result);
} else {
var radius = (start_radius + (ring * ring_gap));
var capacity = cljs.core.max.cljs$core$IFn$_invoke$arity$2((14),Math.floor(((((2) * Math.PI) * radius) / node_gap)));
var ring_nodes = cljs.core.take.cljs$core$IFn$_invoke$arity$2(capacity,remaining);
var angle_offset = (ring * 0.41);
var G__91479 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(capacity,remaining);
var G__91480 = (ring + (1));
var G__91481 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (remaining,ring,result,radius,capacity,ring_nodes,angle_offset,node_gap,ring_gap,sorted_nodes){
return (function (idx,node){
var angle = (angle_offset + (idx * (((2) * Math.PI) / cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ring_nodes)))));
var x = (radius * Math.cos(angle));
var y = (radius * Math.sin(angle));
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$5(node,degree,dark_QMARK_,x,y);
});})(remaining,ring,result,radius,capacity,ring_nodes,angle_offset,node_gap,ring_gap,sorted_nodes))
,ring_nodes));
remaining = G__91479;
ring = G__91480;
result = G__91481;
continue;
}
break;
}
});
frontend.extensions.graph.pixi.logic.all_pages_layout_nodes = (function frontend$extensions$graph$pixi$logic$all_pages_layout_nodes(nodes,degree,dark_QMARK_){
var vec__91196 = frontend.extensions.graph.pixi.logic.split_linked_nodes(nodes,degree);
var linked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91196,(0),null);
var isolated = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91196,(1),null);
var golden_angle = (Math.PI * ((3) - Math.sqrt((5))));
var linked__$1 = (((cljs.core.count(nodes) >= frontend.extensions.graph.pixi.logic.all_pages_fast_layout_threshold))?linked:cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__91195_SHARP_){
return frontend.extensions.graph.pixi.logic.all_pages_node_priority(degree,p1__91195_SHARP_);
}),linked));
var linked_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (idx,node){
var rank = (idx + (1));
var angle = (idx * golden_angle);
var radius = ((15) * Math.sqrt(rank));
var x = (radius * Math.cos(angle));
var y = (radius * Math.sin(angle));
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$5(node,degree,dark_QMARK_,x,y);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),linked__$1);
var map__91199 = frontend.extensions.graph.pixi.logic.graph_center(linked_nodes);
var map__91199__$1 = cljs.core.__destructure_map(map__91199);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91199__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var isolated_start_radius = (cljs.core.max.cljs$core$IFn$_invoke$arity$2((180),radius) + (96));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(linked_nodes,frontend.extensions.graph.pixi.logic.place_isolated_ring_nodes(isolated,degree,dark_QMARK_,isolated_start_radius)));
});
frontend.extensions.graph.pixi.logic.all_pages_fast_layout_nodes = (function frontend$extensions$graph$pixi$logic$all_pages_fast_layout_nodes(nodes,degree,dark_QMARK_){
var node_count = cljs.core.count(nodes);
var columns = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),Math.ceil(Math.sqrt(node_count)));
var spacing = (24);
var origin_x = (((columns - (1)) * spacing) / (2));
var color_int = frontend.extensions.graph.pixi.logic.color__GT_int(frontend.extensions.graph.pixi.logic.node_color("page",dark_QMARK_));
var radius_by_degree = (new Map());
var idx = (0);
var col = (0);
var row = (0);
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,node_count)){
return cljs.core.persistent_BANG_(result);
} else {
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodes,idx);
var x = ((col * spacing) - origin_x);
var y = (row * spacing);
var layouted_node = (cljs.core.truth_(degree)?(function (){var d = (function (){var or__5142__auto__ = degree.get(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var cached_radius = radius_by_degree.get(d);
var radius = (((!((cached_radius == null))))?cached_radius:(function (){var radius = frontend.extensions.graph.pixi.logic.node_radius.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(node),d);
radius_by_degree.set(d,radius);

return radius;
})());
return frontend.extensions.graph.pixi.logic.decorate_large_page_node(node,x,y,d,radius,color_int);
})():frontend.extensions.graph.pixi.logic.decorate_large_page_node(node,x,y,(0),3.8,color_int));
var next_idx = (idx + (1));
var next_col = (col + (1));
var G__91488 = next_idx;
var G__91489 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_col,columns))?(0):next_col);
var G__91490 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_col,columns))?(row + (1)):row);
var G__91491 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,layouted_node);
idx = G__91488;
col = G__91489;
row = G__91490;
result = G__91491;
continue;
}
break;
}
});
frontend.extensions.graph.pixi.logic.stabilize_all_pages_layout = (function frontend$extensions$graph$pixi$logic$stabilize_all_pages_layout(nodes,degree,dark_QMARK_){
var vec__91200 = frontend.extensions.graph.pixi.logic.split_linked_nodes(nodes,degree);
var linked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91200,(0),null);
var isolated = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91200,(1),null);
if(cljs.core.not(cljs.core.seq(linked))){
return frontend.extensions.graph.pixi.logic.all_pages_layout_nodes(nodes,degree,dark_QMARK_);
} else {
var map__91203 = frontend.extensions.graph.pixi.logic.graph_center(linked);
var map__91203__$1 = cljs.core.__destructure_map(map__91203);
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91203__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91203__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91203__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var linked_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node) - center_x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node) - center_y)], 0));
}),linked);
var isolated_start_radius = (cljs.core.max.cljs$core$IFn$_invoke$arity$2((180),radius) + (96));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(linked_nodes,frontend.extensions.graph.pixi.logic.place_isolated_ring_nodes(isolated,degree,dark_QMARK_,isolated_start_radius)));
}
});
frontend.extensions.graph.pixi.logic.root_node_id = (function frontend$extensions$graph$pixi$logic$root_node_id(nodes){
return cljs.core.some((function (node){
if(cljs.core.truth_(new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
} else {
return null;
}
}),nodes);
});
frontend.extensions.graph.pixi.logic.graph_depths = (function frontend$extensions$graph$pixi$logic$graph_depths(links,root_id){
var neighbor_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__91204){
var map__91205 = p__91204;
var map__91205__$1 = cljs.core.__destructure_map(map__91205);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91205__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91205__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,source,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),target),target,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),source);
}),cljs.core.PersistentArrayMap.EMPTY,links);
var queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_id,(0)], null));
var depths = cljs.core.PersistentArrayMap.createAsIfByAssoc([root_id,(0)]);
while(true){
if(cljs.core.empty_QMARK_(queue)){
return depths;
} else {
var vec__91216 = cljs.core.peek(queue);
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91216,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91216,(1),null);
var queue__$1 = cljs.core.pop(queue);
var vec__91219 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (queue,depths,vec__91216,node_id,depth,queue__$1,neighbor_map){
return (function (p__91222,neighbor_id){
var vec__91223 = p__91222;
var queue_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91223,(0),null);
var depths_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91223,(1),null);
if(cljs.core.contains_QMARK_(depths_STAR_,neighbor_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [queue_STAR_,depths_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(queue_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neighbor_id,(depth + (1))], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(depths_STAR_,neighbor_id,(depth + (1)))], null);
}
});})(queue,depths,vec__91216,node_id,depth,queue__$1,neighbor_map))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [queue__$1,depths], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(neighbor_map,node_id,cljs.core.PersistentHashSet.EMPTY));
var queue__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91219,(0),null);
var depths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91219,(1),null);
var G__91499 = queue__$2;
var G__91500 = depths__$1;
queue = G__91499;
depths = G__91500;
continue;
}
break;
}
});
frontend.extensions.graph.pixi.logic.page_layout_nodes = (function frontend$extensions$graph$pixi$logic$page_layout_nodes(nodes,links,degree,dark_QMARK_){
var temp__5823__auto__ = frontend.extensions.graph.pixi.logic.root_node_id(nodes);
if(cljs.core.truth_(temp__5823__auto__)){
var root_id = temp__5823__auto__;
var depths = frontend.extensions.graph.pixi.logic.graph_depths(links,root_id);
var golden_angle = (Math.PI * ((3) - Math.sqrt((5))));
var nodes_by_depth = cljs.core.group_by((function (p1__91227_SHARP_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2((3),cljs.core.get.cljs$core$IFn$_invoke$arity$3(depths,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91227_SHARP_),(3)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__91226_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91226_SHARP_));
}),nodes));
return cljs.core.vec(cljs.core.cons(frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$5(cljs.core.some((function (p1__91228_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91228_SHARP_))){
return p1__91228_SHARP_;
} else {
return null;
}
}),nodes),degree,dark_QMARK_,(0),(0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (depth){
var ring_nodes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__91229_SHARP_){
return (- cljs.core.get.cljs$core$IFn$_invoke$arity$3(degree,frontend.extensions.graph.pixi.logic.node_source_id(p1__91229_SHARP_),(0)));
}),(function (p1__91230_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91230_SHARP_)));
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes_by_depth,depth));
var count_STAR_ = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ring_nodes));
var radius = (((150) + ((128) * (depth - (1)))) + ((10) * Math.sqrt(count_STAR_)));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,node){
var angle = (((idx * (((2) * Math.PI) / count_STAR_)) + (depth * 0.37)) + ((idx * golden_angle) * 0.08));
var x = (radius * Math.cos(angle));
var y = (radius * Math.sin(angle));
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$5(node,degree,dark_QMARK_,x,y);
}),ring_nodes);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(nodes_by_depth))], 0))));
} else {
return frontend.extensions.graph.pixi.logic.phyllotaxis_layout_nodes(nodes,degree,dark_QMARK_);
}
});
frontend.extensions.graph.pixi.logic.tag_links_by_node_id = (function frontend$extensions$graph$pixi$logic$tag_links_by_node_id(links,tag_ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__91232){
var map__91233 = p__91232;
var map__91233__$1 = cljs.core.__destructure_map(map__91233);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91233__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91233__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.contains_QMARK_(tag_ids,target)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,source,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),target);
} else {
if(cljs.core.contains_QMARK_(tag_ids,source)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,target,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),source);
} else {
return m;

}
}
}),cljs.core.PersistentArrayMap.EMPTY,links);
});
frontend.extensions.graph.pixi.logic.linked_tag_ids = (function frontend$extensions$graph$pixi$logic$linked_tag_ids(object_links,tag_ids,object_id){
return cljs.core.filterv(tag_ids,cljs.core.get.cljs$core$IFn$_invoke$arity$2(object_links,object_id));
});
frontend.extensions.graph.pixi.logic.group_spacing = (function frontend$extensions$graph$pixi$logic$group_spacing(_tag_count,max_object_count){
var object_count = cljs.core.min.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.logic.grid_group_object_limit,cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),max_object_count));
var group_radius = (((54) + ((10) * Math.sqrt(object_count))) + (48));
var center_distance = (((2) * group_radius) + (28));
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((210),center_distance);
});
frontend.extensions.graph.pixi.logic.tag_grid_position = (function frontend$extensions$graph$pixi$logic$tag_grid_position(idx,tag_count,spacing){
var columns = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),Math.ceil(Math.sqrt(tag_count)));
var rows = Math.ceil((tag_count / columns));
var col = cljs.core.mod(idx,columns);
var row = Math.floor((idx / columns));
var x = ((col * spacing) - (((columns - (1)) * spacing) / (2)));
var y = ((row * spacing) - (((rows - (1)) * spacing) / (2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
frontend.extensions.graph.pixi.logic.clustered_tags_force_layout_nodes = (function frontend$extensions$graph$pixi$logic$clustered_tags_force_layout_nodes(nodes,links,degree,dark_QMARK_){
var tag_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91235_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91235_SHARP_));
}),nodes)));
var tags = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91236_SHARP_){
return cljs.core.contains_QMARK_(tag_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91236_SHARP_));
}),nodes));
var objects = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__91237_SHARP_){
return cljs.core.contains_QMARK_(tag_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91237_SHARP_));
}),nodes));
var object_links = frontend.extensions.graph.pixi.logic.tag_links_by_node_id(links,tag_ids);
var tag_count = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(tags));
var cluster_radius = cljs.core.max.cljs$core$IFn$_invoke$arity$2((360),((72) * Math.sqrt(tag_count)));
var golden_angle = (Math.PI * ((3) - Math.sqrt((5))));
var tag_position_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,tag){
var angle = (((idx * (2)) * Math.PI) / tag_count);
var x = (cluster_radius * Math.cos(angle));
var y = (cluster_radius * Math.sin(angle));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
})),tags);
var tag_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tag){
var vec__91240 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(tag_position_by_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91240,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91240,(1),null);
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$6(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tag,new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cluster-root?","cluster-root?",1064192839),true,new cljs.core.Keyword(null,"cluster-x","cluster-x",-1478034201),x,new cljs.core.Keyword(null,"cluster-y","cluster-y",-1303029675),y], 0)),degree,dark_QMARK_,x,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags-view?","tags-view?",1974154270),true], null));
}),tags);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tag_nodes,(function (){var idx = (0);
var counters = cljs.core.PersistentArrayMap.EMPTY;
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.count(objects))){
return cljs.core.persistent_BANG_(result);
} else {
var object = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(objects,idx);
var linked_tag_id = cljs.core.some(tag_ids,cljs.core.get.cljs$core$IFn$_invoke$arity$2(object_links,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)));
var cluster_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$3(counters,linked_tag_id,(0));
var counters__$1 = (cljs.core.truth_(linked_tag_id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(counters,linked_tag_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))):counters);
var vec__91252 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(tag_position_by_id,linked_tag_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91252,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91252,(1),null);
var angle = ((idx * 0.11) + (cluster_idx * golden_angle));
var radius = (cljs.core.truth_(linked_tag_id)?((58) + ((10) * Math.sqrt((cluster_idx + (1))))):((160) + ((20) * Math.sqrt((idx + (1))))));
var x = (cx + (radius * Math.cos(angle)));
var y = (cy + (radius * Math.sin(angle)));
var node = frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$6((function (){var G__91260 = object;
if(cljs.core.truth_(linked_tag_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__91260,new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),linked_tag_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cluster-x","cluster-x",-1478034201),cx,new cljs.core.Keyword(null,"cluster-y","cluster-y",-1303029675),cy], 0));
} else {
return G__91260;
}
})(),degree,dark_QMARK_,x,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags-view?","tags-view?",1974154270),true], null));
var G__91517 = (idx + (1));
var G__91518 = counters__$1;
var G__91519 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,node);
idx = G__91517;
counters = G__91518;
result = G__91519;
continue;
}
break;
}
})()));
});
frontend.extensions.graph.pixi.logic.clustered_tags_grid_layout_nodes = (function frontend$extensions$graph$pixi$logic$clustered_tags_grid_layout_nodes(nodes,links,degree,dark_QMARK_){
var tag_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91261_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91261_SHARP_));
}),nodes)));
var tags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91262_SHARP_){
return cljs.core.contains_QMARK_(tag_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91262_SHARP_));
}),nodes);
var objects = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__91263_SHARP_){
return cljs.core.contains_QMARK_(tag_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91263_SHARP_));
}),nodes);
var object_links = frontend.extensions.graph.pixi.logic.tag_links_by_node_id(links,tag_ids);
var tag_count = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(tags));
var object_count_by_tag = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,object){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts__$1,tag_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(counts__$1,tag_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),counts,frontend.extensions.graph.pixi.logic.linked_tag_ids(object_links,tag_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)));
}),cljs.core.PersistentArrayMap.EMPTY,objects);
var max_object_count = ((cljs.core.seq(object_count_by_tag))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(object_count_by_tag)):(0));
var spacing = frontend.extensions.graph.pixi.logic.group_spacing(tag_count,max_object_count);
var golden_angle = (Math.PI * ((3) - Math.sqrt((5))));
var tag_position_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,tag){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag),frontend.extensions.graph.pixi.logic.tag_grid_position(idx,tag_count,spacing)], null);
})),tags);
var counters_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
var vec__91282 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(tag_position_by_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91282,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91282,(1),null);
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$6(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tag,new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cluster-root?","cluster-root?",1064192839),true,new cljs.core.Keyword(null,"cluster-x","cluster-x",-1478034201),x,new cljs.core.Keyword(null,"cluster-y","cluster-y",-1303029675),y], 0)),degree,dark_QMARK_,x,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags-view?","tags-view?",1974154270),true], null));
}),tags),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (idx,object){
var object_tag_ids = frontend.extensions.graph.pixi.logic.linked_tag_ids(object_links,tag_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object));
var group_ids = ((cljs.core.seq(object_tag_ids))?object_tag_ids:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (linked_tag_id){
var cluster_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(counters_STAR_),linked_tag_id,(0));
var _ = (cljs.core.truth_(linked_tag_id)?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counters_STAR_,cljs.core.update,linked_tag_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))):null);
var vec__91287 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(tag_position_by_id,linked_tag_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91287,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91287,(1),null);
var angle = ((idx * 0.11) + (cluster_idx * golden_angle));
var radius = (cljs.core.truth_(linked_tag_id)?((48) + ((10) * Math.sqrt((cluster_idx + (1))))):((160) + ((20) * Math.sqrt((idx + (1))))));
var x = (cx + (radius * Math.cos(angle)));
var y = (cy + (radius * Math.sin(angle)));
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$6((function (){var G__91291 = object;
if(cljs.core.truth_(linked_tag_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__91291,new cljs.core.Keyword(null,"id","id",-1388402092),frontend.extensions.graph.pixi.logic.visual_node_id(linked_tag_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source-id","source-id",-585995304),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"grid-object?","grid-object?",-933862505),true,new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593),linked_tag_id,new cljs.core.Keyword(null,"cluster-x","cluster-x",-1478034201),cx,new cljs.core.Keyword(null,"cluster-y","cluster-y",-1303029675),cy], 0));
} else {
return G__91291;
}
})(),degree,dark_QMARK_,x,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags-view?","tags-view?",1974154270),true], null));
}),group_ids);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$0(),objects], 0))));
});
frontend.extensions.graph.pixi.logic.clustered_tags_layout_nodes = (function frontend$extensions$graph$pixi$logic$clustered_tags_layout_nodes(nodes,links,degree,dark_QMARK_,opts){
if(frontend.extensions.graph.pixi.logic.grid_layout_enabled_QMARK_(opts)){
return frontend.extensions.graph.pixi.logic.clustered_tags_grid_layout_nodes(nodes,links,degree,dark_QMARK_);
} else {
return frontend.extensions.graph.pixi.logic.clustered_tags_force_layout_nodes(nodes,links,degree,dark_QMARK_);
}
});
frontend.extensions.graph.pixi.logic.bounded_tag_force_nodes = (function frontend$extensions$graph$pixi$logic$bounded_tag_force_nodes(nodes){
if((cljs.core.count(nodes) <= frontend.extensions.graph.pixi.logic.tag_force_node_limit)){
return nodes;
} else {
var tags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91298_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91298_SHARP_));
}),nodes);
var object_limit = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(frontend.extensions.graph.pixi.logic.tag_force_node_limit - cljs.core.count(tags)));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tags,cljs.core.take.cljs$core$IFn$_invoke$arity$2(object_limit,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__91308_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91308_SHARP_));
}),nodes))));
}
});
frontend.extensions.graph.pixi.logic.links_between_node_ids = (function frontend$extensions$graph$pixi$logic$links_between_node_ids(links,node_ids){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__91314){
var map__91315 = p__91314;
var map__91315__$1 = cljs.core.__destructure_map(map__91315);
var link = map__91315__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91315__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91315__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(((cljs.core.contains_QMARK_(node_ids,source)) && (cljs.core.contains_QMARK_(node_ids,target)))){
return link;
} else {
return null;
}
}),links);
});
frontend.extensions.graph.pixi.logic.merge_bounded_tag_force_layout = (function frontend$extensions$graph$pixi$logic$merge_bounded_tag_force_layout(nodes,force_layouted_nodes){
var node_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),nodes));
var force_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),force_layouted_nodes));
var cluster_delta_by_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__91321){
var map__91322 = p__91321;
var map__91322__$1 = cljs.core.__destructure_map(map__91322);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91322__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91322__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91322__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91322__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",kind)) && (cljs.core.contains_QMARK_(node_map,id)))){
var original = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_map,id);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dx","dx",-381796732),(x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(original)),new cljs.core.Keyword(null,"dy","dy",1719547243),(y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(original)),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,force_layouted_nodes);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__91329){
var map__91330 = p__91329;
var map__91330__$1 = cljs.core.__destructure_map(map__91330);
var node = map__91330__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91330__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var cluster_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91330__$1,new cljs.core.Keyword(null,"cluster-id","cluster-id",1386414593));
var node__$1 = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(force_by_id,id);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return node;
}
})();
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cluster_delta_by_id,cluster_id);
if(cljs.core.truth_(temp__5823__auto__)){
var map__91334 = temp__5823__auto__;
var map__91334__$1 = cljs.core.__destructure_map(map__91334);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91334__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91334__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91334__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91334__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__91339 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node__$1,new cljs.core.Keyword(null,"cluster-x","cluster-x",-1478034201),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cluster-y","cluster-y",-1303029675),y], 0));
if((!(cljs.core.contains_QMARK_(force_by_id,id)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__91339,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node__$1) + dx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node__$1) + dy)], 0));
} else {
return G__91339;
}
} else {
return node__$1;
}
}),nodes);
});
frontend.extensions.graph.pixi.logic.fast_layout_nodes = (function frontend$extensions$graph$pixi$logic$fast_layout_nodes(nodes,links,view_mode,degree,dark_QMARK_,opts){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"page","page",849072397))){
return frontend.extensions.graph.pixi.logic.page_layout_nodes(nodes,links,degree,dark_QMARK_);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884));
if(and__5140__auto__){
return cljs.core.some((function (p1__91342_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91342_SHARP_));
}),nodes);
} else {
return and__5140__auto__;
}
})())){
return frontend.extensions.graph.pixi.logic.clustered_tags_layout_nodes(nodes,links,degree,dark_QMARK_,opts);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))){
return frontend.extensions.graph.pixi.logic.all_pages_layout_nodes(nodes,degree,dark_QMARK_);
} else {
return frontend.extensions.graph.pixi.logic.phyllotaxis_layout_nodes(nodes,degree,dark_QMARK_);

}
}
}
});
frontend.extensions.graph.pixi.logic.force_seed_nodes = (function frontend$extensions$graph$pixi$logic$force_seed_nodes(nodes,links,view_mode,degree,dark_QMARK_,opts){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"page","page",849072397))){
return frontend.extensions.graph.pixi.logic.page_layout_nodes(nodes,links,degree,dark_QMARK_);
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))))) && ((((cljs.core.count(nodes) > (900))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"force","force",781957286),frontend.extensions.graph.pixi.logic.layout_mode(cljs.core.count(nodes),view_mode))))))){
return frontend.extensions.graph.pixi.logic.fast_layout_nodes(nodes,links,view_mode,degree,dark_QMARK_,opts);
} else {
return nodes;

}
}
});
frontend.extensions.graph.pixi.logic.layout_nodes = (function frontend$extensions$graph$pixi$logic$layout_nodes(var_args){
var G__91361 = arguments.length;
switch (G__91361) {
case 4:
return frontend.extensions.graph.pixi.logic.layout_nodes.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.extensions.graph.pixi.logic.layout_nodes.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.graph.pixi.logic.layout_nodes.cljs$core$IFn$_invoke$arity$4 = (function (nodes,links,view_mode,dark_QMARK_){
return frontend.extensions.graph.pixi.logic.layout_nodes.cljs$core$IFn$_invoke$arity$5(nodes,links,view_mode,dark_QMARK_,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.graph.pixi.logic.layout_nodes.cljs$core$IFn$_invoke$arity$5 = (function (nodes,links,view_mode,dark_QMARK_,opts){
var view_mode__$1 = frontend.extensions.graph.pixi.logic.normalize_view_mode(view_mode);
var mode = frontend.extensions.graph.pixi.logic.layout_mode(cljs.core.count(nodes),view_mode__$1);
var fast_all_pages_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fast","fast",-24391997),mode)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))));
if(fast_all_pages_QMARK_){
return frontend.extensions.graph.pixi.logic.all_pages_fast_layout_nodes(nodes,frontend.extensions.graph.pixi.logic.build_fast_degree_map(nodes,links),dark_QMARK_);
} else {
var node_id_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),nodes));
var filtered_links = frontend.extensions.graph.pixi.logic.keep_links_with_nodes(links,node_id_set);
var degree = frontend.extensions.graph.pixi.logic.build_degree_map(filtered_links);
var grid_layout_QMARK_ = frontend.extensions.graph.pixi.logic.grid_layout_enabled_QMARK_(opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fast","fast",-24391997),mode)){
return frontend.extensions.graph.pixi.logic.fast_layout_nodes(nodes,filtered_links,view_mode__$1,degree,dark_QMARK_,opts);
} else {
var tags_mode_QMARK_ = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884));
if(and__5140__auto__){
return cljs.core.some((function (p1__91355_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__91355_SHARP_));
}),nodes);
} else {
return and__5140__auto__;
}
})();
var nodes__$1 = (cljs.core.truth_(tags_mode_QMARK_)?frontend.extensions.graph.pixi.logic.clustered_tags_layout_nodes(nodes,filtered_links,degree,dark_QMARK_,opts):frontend.extensions.graph.pixi.logic.force_seed_nodes(nodes,filtered_links,view_mode__$1,degree,dark_QMARK_,opts));
if(cljs.core.truth_((function (){var and__5140__auto__ = tags_mode_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return grid_layout_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return nodes__$1;
} else {
var bounded_tag_force_QMARK_ = (function (){var and__5140__auto__ = tags_mode_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.count(nodes__$1) > frontend.extensions.graph.pixi.logic.tag_force_node_limit);
} else {
return and__5140__auto__;
}
})();
var force_nodes = (cljs.core.truth_(bounded_tag_force_QMARK_)?frontend.extensions.graph.pixi.logic.bounded_tag_force_nodes(nodes__$1):nodes__$1);
var force_node_ids = (cljs.core.truth_(bounded_tag_force_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),force_nodes)):null);
var force_links = (cljs.core.truth_(bounded_tag_force_QMARK_)?frontend.extensions.graph.pixi.logic.links_between_node_ids(filtered_links,force_node_ids):filtered_links);
var simulation_nodes = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__91358_SHARP_,p2__91357_SHARP_){
return frontend.extensions.graph.pixi.logic.simulation_node(p2__91357_SHARP_,degree,p1__91358_SHARP_);
}),force_nodes));
var simulation_links = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.logic.simulation_link,force_links));
var link_force = module$node_modules$d3_force$src$index.forceLink(simulation_links).id((function (node){
return node.id;
})).distance(frontend.extensions.graph.pixi.logic.link_distance(view_mode__$1,new cljs.core.Keyword(null,"link-distance","link-distance",1680735939).cljs$core$IFn$_invoke$arity$1(opts))).strength(0.82);
var collide_force = module$node_modules$d3_force$src$index.forceCollide().radius((function (node){
return ((10) + node.radius);
})).strength(0.86).iterations((2));
var y_force = module$node_modules$d3_force$src$index.forceY((0));
var _ = y_force.strength(frontend.extensions.graph.pixi.logic.y_strength(view_mode__$1));
var simulation = (function (){var G__91370 = module$node_modules$d3_force$src$index.forceSimulation(simulation_nodes).force("link",link_force).force("charge",module$node_modules$d3_force$src$index.forceManyBody().strength(frontend.extensions.graph.pixi.logic.charge_strength(view_mode__$1)).distanceMax((420))).force("collision",collide_force).force("y",y_force);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))) || ((!(grid_layout_QMARK_))))){
return G__91370.force("center",module$node_modules$d3_force$src$index.forceCenter((0),(0)));
} else {
return G__91370;
}
})();
var ___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884)))?(function (){
simulation.force("cluster-x",module$node_modules$d3_force$src$index.forceX((function (node){
var or__5142__auto__ = new cljs.core.Keyword(null,"cluster-x","cluster-x",-1478034201).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(force_nodes,node.idx));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})).strength(0.16));

return simulation.force("cluster-y",module$node_modules$d3_force$src$index.forceY((function (node){
var or__5142__auto__ = new cljs.core.Keyword(null,"cluster-y","cluster-y",-1303029675).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(force_nodes,node.idx));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})).strength(0.16));
})()
:null);
var ___$2 = simulation.stop();
var ticks = frontend.extensions.graph.pixi.logic.layout_tick_count(cljs.core.count(nodes__$1),view_mode__$1);
var n__5741__auto___91538 = ticks;
var __91539__$3 = (0);
while(true){
if((__91539__$3 < n__5741__auto___91538)){
simulation.tick();

var G__91540 = (__91539__$3 + (1));
__91539__$3 = G__91540;
continue;
} else {
}
break;
}

var layouted_nodes = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sim_node){
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(force_nodes,sim_node.idx);
return frontend.extensions.graph.pixi.logic.decorate_node.cljs$core$IFn$_invoke$arity$6(node,degree,dark_QMARK_,sim_node.x,sim_node.y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags-view?","tags-view?",1974154270),tags_mode_QMARK_], null));
}),simulation_nodes));
var layouted_nodes__$1 = (cljs.core.truth_(bounded_tag_force_QMARK_)?frontend.extensions.graph.pixi.logic.merge_bounded_tag_force_layout(nodes__$1,layouted_nodes):layouted_nodes);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode__$1,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))){
return frontend.extensions.graph.pixi.logic.stabilize_all_pages_layout(layouted_nodes__$1,degree,dark_QMARK_);
} else {
return layouted_nodes__$1;
}
}

}
}
}));

(frontend.extensions.graph.pixi.logic.layout_nodes.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=frontend.extensions.graph.pixi.logic.js.map
