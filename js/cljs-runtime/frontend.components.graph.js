goog.provide('frontend.components.graph');
frontend.components.graph.default_open_groups = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layout","layout",-2120940921),null,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),null,new cljs.core.Keyword(null,"displayed-tags","displayed-tags",-1686827375),null], null), null);
frontend.components.graph.default_depth = (1);
frontend.components.graph.default_link_distance = (72);
frontend.components.graph.default_grid_layout_QMARK_ = false;
frontend.components.graph.default_show_journals_QMARK_ = false;
frontend.components.graph.graph_show_arrows_QMARK_ = false;
frontend.components.graph.graph_show_edge_labels_QMARK_ = true;
frontend.components.graph.default_settings = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884),new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179),null,new cljs.core.Keyword(null,"created-at-filter","created-at-filter",708262492),null,new cljs.core.Keyword(null,"depth","depth",1768663640),frontend.components.graph.default_depth,new cljs.core.Keyword(null,"link-distance","link-distance",1680735939),frontend.components.graph.default_link_distance,new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125),frontend.components.graph.default_grid_layout_QMARK_,new cljs.core.Keyword(null,"show-journals?","show-journals?",-206531986),frontend.components.graph.default_show_journals_QMARK_,new cljs.core.Keyword(null,"open-groups","open-groups",1010222446),frontend.components.graph.default_open_groups], null);
frontend.components.graph.storage_key = (function frontend$components$graph$storage_key(repo){
return (""+"logseq.graph.settings."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo));
});
frontend.components.graph.valid_view_mode = (function frontend$components$graph$valid_view_mode(view_mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))){
return new cljs.core.Keyword(null,"all-pages","all-pages",1017563062);
} else {
return new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884);
}
});
frontend.components.graph.clamp_number = (function frontend$components$graph$clamp_number(value,min_value,max_value,default_value){
if(typeof value === 'number'){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(value,min_value),max_value);
} else {
return default_value;
}
});
frontend.components.graph.valid_depth = (function frontend$components$graph$valid_depth(value){
return (frontend.components.graph.clamp_number(value,(1),(5),frontend.components.graph.default_depth) | 0);
});
frontend.components.graph.valid_link_distance = (function frontend$components$graph$valid_link_distance(value){
return (frontend.components.graph.clamp_number(value,(36),(180),frontend.components.graph.default_link_distance) | 0);
});
frontend.components.graph.encode_settings = (function frontend$components$graph$encode_settings(p__59112){
var map__59113 = p__59112;
var map__59113__$1 = cljs.core.__destructure_map(map__59113);
var view_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427));
var selected_tag_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var link_distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"link-distance","link-distance",1680735939));
var grid_layout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125));
var show_journals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"show-journals?","show-journals?",-206531986));
var open_groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"open-groups","open-groups",1010222446));
return cljs.core.clj__GT_js((function (){var G__59114 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"viewMode","viewMode",-86592409),cljs.core.name(frontend.components.graph.valid_view_mode(view_mode)),new cljs.core.Keyword(null,"depth","depth",1768663640),frontend.components.graph.valid_depth(depth),new cljs.core.Keyword(null,"linkDistance","linkDistance",-1662859649),frontend.components.graph.valid_link_distance(link_distance),new cljs.core.Keyword(null,"gridLayout","gridLayout",451946992),cljs.core.boolean$(grid_layout_QMARK_),new cljs.core.Keyword(null,"showJournals","showJournals",1543832309),(!(show_journals_QMARK_ === false)),new cljs.core.Keyword(null,"openGroups","openGroups",2111639918),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.name,(function (){var or__5142__auto__ = open_groups;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.graph.default_open_groups;
}
})())], null);
if((!((selected_tag_ids == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59114,new cljs.core.Keyword(null,"selectedTagIds","selectedTagIds",1821097107),cljs.core.vec(selected_tag_ids));
} else {
return G__59114;
}
})());
});
frontend.components.graph.decode_settings = (function frontend$components$graph$decode_settings(data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.components.graph.default_settings,((cljs.core.map_QMARK_(data))?(function (){var G__59115 = cljs.core.PersistentArrayMap.EMPTY;
var G__59115__$1 = ((cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"viewMode","viewMode",-86592409)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59115,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),frontend.components.graph.valid_view_mode(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewMode","viewMode",-86592409).cljs$core$IFn$_invoke$arity$1(data)))):G__59115);
var G__59115__$2 = ((((cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"selectedTagIds","selectedTagIds",1821097107))) && ((!((new cljs.core.Keyword(null,"selectedTagIds","selectedTagIds",1821097107).cljs$core$IFn$_invoke$arity$1(data) == null))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59115__$1,new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179),cljs.core.vec(new cljs.core.Keyword(null,"selectedTagIds","selectedTagIds",1821097107).cljs$core$IFn$_invoke$arity$1(data))):G__59115__$1);
var G__59115__$3 = ((cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"depth","depth",1768663640)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59115__$2,new cljs.core.Keyword(null,"depth","depth",1768663640),frontend.components.graph.valid_depth(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(data))):G__59115__$2);
var G__59115__$4 = ((cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"linkDistance","linkDistance",-1662859649)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59115__$3,new cljs.core.Keyword(null,"link-distance","link-distance",1680735939),frontend.components.graph.valid_link_distance(new cljs.core.Keyword(null,"linkDistance","linkDistance",-1662859649).cljs$core$IFn$_invoke$arity$1(data))):G__59115__$3);
var G__59115__$5 = ((cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"gridLayout","gridLayout",451946992)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59115__$4,new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125),new cljs.core.Keyword(null,"gridLayout","gridLayout",451946992).cljs$core$IFn$_invoke$arity$1(data) === true):G__59115__$4);
var G__59115__$6 = ((cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"showJournals","showJournals",1543832309)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59115__$5,new cljs.core.Keyword(null,"show-journals?","show-journals?",-206531986),(!(new cljs.core.Keyword(null,"showJournals","showJournals",1543832309).cljs$core$IFn$_invoke$arity$1(data) === false))):G__59115__$5);
if(cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"openGroups","openGroups",2111639918))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59115__$6,new cljs.core.Keyword(null,"open-groups","open-groups",1010222446),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"openGroups","openGroups",2111639918).cljs$core$IFn$_invoke$arity$1(data))));
} else {
return G__59115__$6;
}
})():null)], 0));
});
frontend.components.graph.load_graph_settings = (function frontend$components$graph$load_graph_settings(repo){
try{var temp__5823__auto__ = (function (){var G__59117 = localStorage;
if((G__59117 == null)){
return null;
} else {
return G__59117.getItem(frontend.components.graph.storage_key(repo));
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var raw = temp__5823__auto__;
return frontend.components.graph.decode_settings(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(raw),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return frontend.components.graph.default_settings;
}
}catch (e59116){var _e = e59116;
return frontend.components.graph.default_settings;
}});
frontend.components.graph.save_graph_settings_BANG_ = (function frontend$components$graph$save_graph_settings_BANG_(repo,settings){
try{var G__59119 = localStorage;
if((G__59119 == null)){
return null;
} else {
return G__59119.setItem(frontend.components.graph.storage_key(repo),JSON.stringify(frontend.components.graph.encode_settings(settings)));
}
}catch (e59118){var _e = e59118;
return null;
}});
frontend.components.graph.parse_hex_color = (function frontend$components$graph$parse_hex_color(value){
var temp__5825__auto__ = cljs.core.re_matches(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i,value);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__59120 = temp__5825__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59120,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59120,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59120,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59120,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(r,(16)),parseInt(g,(16)),parseInt(b,(16))], null);
} else {
return null;
}
});
frontend.components.graph.parse_short_hex_color = (function frontend$components$graph$parse_short_hex_color(value){
var temp__5825__auto__ = cljs.core.re_matches(/#([0-9a-f])([0-9a-f])([0-9a-f])/i,value);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__59123 = temp__5825__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59123,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59123,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59123,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59123,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)),(16)),parseInt((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)),(16)),parseInt((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)),(16))], null);
} else {
return null;
}
});
frontend.components.graph.parse_rgb_color = (function frontend$components$graph$parse_rgb_color(value){
var temp__5825__auto__ = cljs.core.re_find(/rgba?\(\s*([0-9.]+)[,\s]+([0-9.]+)[,\s]+([0-9.]+)/,value);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__59126 = temp__5825__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59126,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59126,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59126,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59126,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(r),parseFloat(g),parseFloat(b)], null);
} else {
return null;
}
});
frontend.components.graph.parse_css_color = (function frontend$components$graph$parse_css_color(value){
var value__$1 = clojure.string.trim((function (){var or__5142__auto__ = value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var or__5142__auto__ = frontend.components.graph.parse_hex_color(value__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.components.graph.parse_short_hex_color(value__$1);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.components.graph.parse_rgb_color(value__$1);
}
}
});
frontend.components.graph.color_dark_QMARK_ = (function frontend$components$graph$color_dark_QMARK_(p__59129){
var vec__59130 = p__59129;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59130,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59130,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59130,(2),null);
return ((((0.2126 * r) + (0.7152 * g)) + (0.0722 * b)) < (128));
});
frontend.components.graph.css_var_value = (function frontend$components$graph$css_var_value(el,var_name){
if(cljs.core.truth_(el)){
var G__59133 = getComputedStyle(el);
var G__59133__$1 = (((G__59133 == null))?null:G__59133.getPropertyValue(var_name));
var G__59133__$2 = (((G__59133__$1 == null))?null:clojure.string.trim(G__59133__$1));
if((G__59133__$2 == null)){
return null;
} else {
return cljs.core.not_empty(G__59133__$2);
}
} else {
return null;
}
});
frontend.components.graph.effective_dark_theme_QMARK_ = (function frontend$components$graph$effective_dark_theme_QMARK_(theme,_theme_token){
var doc_el = document.documentElement;
var body = document.body;
var bg_color = (function (){var or__5142__auto__ = frontend.components.graph.css_var_value(body,"--ls-primary-background-color");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.graph.css_var_value(doc_el,"--ls-primary-background-color");
}
})();
var temp__5823__auto__ = frontend.components.graph.parse_css_color(bg_color);
if(cljs.core.truth_(temp__5823__auto__)){
var rgb = temp__5823__auto__;
return frontend.components.graph.color_dark_QMARK_(rgb);
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dark","dark",1818973999),null,"dark",null], null), null),(function (){var or__5142__auto__ = (function (){var G__59134 = doc_el;
var G__59134__$1 = (((G__59134 == null))?null:G__59134.dataset);
if((G__59134__$1 == null)){
return null;
} else {
return G__59134__$1.theme;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return theme;
}
})());
}
});
frontend.components.graph.use_theme_token = (function frontend$components$graph$use_theme_token(){
var vec__59135 = logseq.shui.hooks.use_state((0));
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59135,(0),null);
var set_token_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59135,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
if((typeof MutationObserver !== 'undefined')){
var observer = (new MutationObserver((function (_mutations,_observer){
var G__59138 = Date.now();
return (set_token_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_token_BANG_.cljs$core$IFn$_invoke$arity$1(G__59138) : set_token_BANG_.call(null,G__59138));
})));
var opts = ({"attributes": true, "attributeFilter": ["class","style","data-theme","data-color"]});
var temp__5825__auto___59271 = document.documentElement;
if(cljs.core.truth_(temp__5825__auto___59271)){
var doc_el_59272 = temp__5825__auto___59271;
observer.observe(doc_el_59272,opts);
} else {
}

var temp__5825__auto___59273 = document.body;
if(cljs.core.truth_(temp__5825__auto___59273)){
var body_59274 = temp__5825__auto___59273;
observer.observe(body_59274,opts);
} else {
}

return (function (){
return observer.disconnect();
});
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return token;
});
frontend.components.graph.tag_options = (function frontend$components$graph$tag_options(graph_data){
var tag_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59139_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__59139_SHARP_));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data))));
var counts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__59141){
var map__59142 = p__59141;
var map__59142__$1 = cljs.core.__destructure_map(map__59142);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59142__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59142__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.contains_QMARK_(tag_ids,target)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result,target,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
} else {
if(cljs.core.contains_QMARK_(tag_ids,source)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result,source,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
} else {
return result;

}
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph_data));
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,new cljs.core.Keyword(null,"count","count",2139924085)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,new cljs.core.Keyword(null,"label","label",1718410804))),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59143){
var map__59144 = p__59143;
var map__59144__$1 = cljs.core.__destructure_map(map__59144);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59144__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59144__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,id,(0))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59140_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__59140_SHARP_));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data)))));
});
frontend.components.graph.selected_tag_id_set = (function frontend$components$graph$selected_tag_id_set(settings,available_tags){
var available_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),available_tags));
if((!((new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179).cljs$core$IFn$_invoke$arity$1(settings) == null)))){
var selected_tag_ids = new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179).cljs$core$IFn$_invoke$arity$1(settings);
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(available_ids,selected_tag_ids));
} else {
return available_ids;
}
});
frontend.components.graph.toggle_selected_tag_id = (function frontend$components$graph$toggle_selected_tag_id(settings,available_tags,tag_id){
var selected_tag_ids = frontend.components.graph.selected_tag_id_set(settings,available_tags);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179),cljs.core.vec(((cljs.core.contains_QMARK_(selected_tag_ids,tag_id))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected_tag_ids,tag_id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_tag_ids,tag_id))));
});
frontend.components.graph.selected_node_status = (function frontend$components$graph$selected_node_status(selected_nodes){
var labels = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),selected_nodes)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-a11y-panel","div.graph-a11y-panel",1288571222),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-live","aria-live",-467182502),"polite"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),((cljs.core.seq(selected_nodes))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","selected-nodes-status","graph/selected-nodes-status",-1689232687),cljs.core.count(selected_nodes),labels], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","no-selected-node","graph/no-selected-node",-1459394888)], 0)))], null),((cljs.core.seq(selected_nodes))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__59145){
var map__59146 = p__59145;
var map__59146__$1 = cljs.core.__destructure_map(map__59146);
var node = map__59146__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59146__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.graph_actions.redirect_to_node_BANG_(node);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","open-selected-node","graph/open-selected-node",-1165813073),label], 0))], null)], null);
})),selected_nodes):null)], null);
});
frontend.components.graph.filter_tags_and_objects_graph = (function frontend$components$graph$filter_tags_and_objects_graph(graph_data,selected_tag_ids){
var selected_tag_ids__$1 = cljs.core.set(selected_tag_ids);
var tag_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59147_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__59147_SHARP_));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tag_ids__$1,tag_ids)){
return graph_data;
} else {
var selected_links = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59149){
var map__59150 = p__59149;
var map__59150__$1 = cljs.core.__destructure_map(map__59150);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59150__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59150__$1,new cljs.core.Keyword(null,"target","target",253001721));
return ((cljs.core.contains_QMARK_(selected_tag_ids__$1,target)) || (cljs.core.contains_QMARK_(selected_tag_ids__$1,source)));
}),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph_data)));
var linked_node_ids = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"target","target",253001721)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_links], 0)));
var visible_node_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(selected_tag_ids__$1,linked_node_ids);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(graph_data,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59148_SHARP_){
return cljs.core.contains_QMARK_(visible_node_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__59148_SHARP_));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"links","links",-654507394),selected_links], 0));
}
});
frontend.components.graph.settings_toggle = (function frontend$components$graph$settings_toggle(settings,group_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"open-groups","open-groups",1010222446),(function (open_groups){
var open_groups__$1 = (function (){var or__5142__auto__ = open_groups;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(open_groups__$1,group_id)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(open_groups__$1,group_id);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(open_groups__$1,group_id);
}
}));
});
frontend.components.graph.settings_close_group = (function frontend$components$graph$settings_close_group(settings,group_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"open-groups","open-groups",1010222446),(function (open_groups){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = open_groups;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),group_id);
}));
});
frontend.components.graph.settings_group = (function frontend$components$graph$settings_group(p__59151){
var map__59152 = p__59151;
var map__59152__$1 = cljs.core.__destructure_map(map__59152);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59152__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var set_settings_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59152__$1,new cljs.core.Keyword(null,"set-settings!","set-settings!",1788044418));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59152__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59152__$1,new cljs.core.Keyword(null,"title","title",636505583));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59152__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59152__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var open_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"open-groups","open-groups",1010222446).cljs$core$IFn$_invoke$arity$1(settings),id);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.graph-settings-group","section.graph-settings-group",-799638519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((open_QMARK_)?"is-open":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.graph-settings-group-header","button.graph-settings-group-header",-1681387723),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(open_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__59153 = frontend.components.graph.settings_toggle(settings,id);
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(G__59153) : set_settings_BANG_.call(null,G__59153));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.graph-settings-group-title","span.graph-settings-group-title",-712121273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.graph-settings-group-chevron","span.graph-settings-group-chevron",-2105323443),frontend.ui.icon("chevron-right",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),(cljs.core.truth_(meta)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.graph-settings-group-meta","span.graph-settings-group-meta",-1454023165),meta], null):null)], null),((open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-settings-group-body","div.graph-settings-group-body",1642298515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-settings-group-body-inner","div.graph-settings-group-body-inner",-760783930),children], null)], null):null)], null);
});
frontend.components.graph.view_mode_tab_label = (function frontend$components$graph$view_mode_tab_label(label,loading_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.graph-mode-tab-label","span.graph-mode-tab-label",1747291777),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.graph-mode-tab-loading","span.graph-mode-tab-loading",1321408425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),frontend.components.svg.loader_fn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 h-3"], null))], null):null)], null);
});
frontend.components.graph.view_mode_group = (function frontend$components$graph$view_mode_group(settings,set_settings_BANG_,view_mode,set_view_mode_BANG_,loading_QMARK_){
return frontend.components.graph.settings_group(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"settings","settings",1556144875),settings,new cljs.core.Keyword(null,"set-settings!","set-settings!",1788044418),set_settings_BANG_,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","view-mode","graph/view-mode",-1991124519)], 0)),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__59155 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(view_mode),new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (p1__59154_SHARP_){
var G__59157 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__59154_SHARP_);
return (set_view_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_view_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__59157) : set_view_mode_BANG_.call(null,G__59157));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"graph-mode-tabs"], null);
var G__59156 = (function (){var G__59158 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"graph-mode-tabs-list"], null);
var G__59159 = (function (){var G__59161 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"tags-and-objects",new cljs.core.Keyword(null,"class","class",-2030961996),"graph-mode-tab"], null);
var G__59162 = frontend.components.graph.view_mode_tab_label(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","view-mode-tags","graph/view-mode-tags",-1681803234)], 0)),(function (){var and__5140__auto__ = loading_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884));
} else {
return and__5140__auto__;
}
})());
return (logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2(G__59161,G__59162) : logseq.shui.ui.tabs_trigger.call(null,G__59161,G__59162));
})();
var G__59160 = (function (){var G__59163 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"all-pages",new cljs.core.Keyword(null,"class","class",-2030961996),"graph-mode-tab"], null);
var G__59164 = frontend.components.graph.view_mode_tab_label(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","view-mode-all-pages","graph/view-mode-all-pages",1901010482)], 0)),(function (){var and__5140__auto__ = loading_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062));
} else {
return and__5140__auto__;
}
})());
return (logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2(G__59163,G__59164) : logseq.shui.ui.tabs_trigger.call(null,G__59163,G__59164));
})();
return (logseq.shui.ui.tabs_list.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.tabs_list.cljs$core$IFn$_invoke$arity$3(G__59158,G__59159,G__59160) : logseq.shui.ui.tabs_list.call(null,G__59158,G__59159,G__59160));
})();
return (logseq.shui.ui.tabs.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs.cljs$core$IFn$_invoke$arity$2(G__59155,G__59156) : logseq.shui.ui.tabs.call(null,G__59155,G__59156));
})()], null));
});
frontend.components.graph.tags_group = (function frontend$components$graph$tags_group(settings,set_settings_BANG_,available_tags,selected_tag_ids,tag_query,set_tag_query_BANG_){
var query = clojure.string.lower_case(clojure.string.trim((function (){var or__5142__auto__ = tag_query;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
var shown_tags = (function (){var G__59167 = available_tags;
if(cljs.core.seq(query)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59165_SHARP_){
return clojure.string.includes_QMARK_(clojure.string.lower_case(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__59165_SHARP_)),query);
}),G__59167);
} else {
return G__59167;
}
})();
var selected_count = cljs.core.count(selected_tag_ids);
return frontend.components.graph.settings_group(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"settings","settings",1556144875),settings,new cljs.core.Keyword(null,"set-settings!","set-settings!",1788044418),set_settings_BANG_,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"displayed-tags","displayed-tags",-1686827375),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","displayed-tags","graph/displayed-tags",-1760145085)], 0)),new cljs.core.Keyword(null,"meta","meta",1499536964),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","displayed-tags-count","graph/displayed-tags-count",707589443),selected_count,cljs.core.count(available_tags)], 0)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-tags-control","div.graph-tags-control",-1214502218),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-tag-search","div.graph-tag-search",-1949945179),frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)),(function (){var G__59168 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),tag_query,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","search-tags","graph/search-tags",707338607)], 0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__59166_SHARP_){
var G__59169 = p1__59166_SHARP_.target.value;
return (set_tag_query_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tag_query_BANG_.cljs$core$IFn$_invoke$arity$1(G__59169) : set_tag_query_BANG_.call(null,G__59169));
})], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__59168) : logseq.shui.ui.input.call(null,G__59168));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-tag-actions","div.graph-tag-actions",-1457024435),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","select-all-tags","graph/select-all-tags",-903277153)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__59170 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179),null);
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(G__59170) : set_settings_BANG_.call(null,G__59170));
}),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341)], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","clear-tags","graph/clear-tags",1103653764)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__59171 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179),cljs.core.PersistentVector.EMPTY);
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(G__59171) : set_settings_BANG_.call(null,G__59171));
}),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341)], 0))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-tag-list","div.graph-tag-list",1544502675)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__59172){
var map__59173 = p__59172;
var map__59173__$1 = cljs.core.__destructure_map(map__59173);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59173__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59173__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59173__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var checked_QMARK_ = cljs.core.contains_QMARK_(selected_tag_ids,id);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.graph-tag-row","label.graph-tag-row",121780191),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),((checked_QMARK_)?"is-selected":null)], null),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","toggle-tag","graph/toggle-tag",-1677896032),label], 0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__59174 = frontend.components.graph.toggle_selected_tag_id(settings,available_tags,id);
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(G__59174) : set_settings_BANG_.call(null,G__59174));
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.graph-tag-content","span.graph-tag-content",-522908791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.graph-tag-name","span.graph-tag-name",-345400305),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.graph-tag-count","span.graph-tag-count",-210225888),count], null)], null)], null);
})),shown_tags)], null)], null));
});
frontend.components.graph.graph_error = (function frontend$components$graph$graph_error(retry_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-error","div.graph-error",-1948942110),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-error-title","div.graph-error-title",462470149),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","build-error","graph/build-error",-606098312)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","retry","graph/retry",-717216054)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),retry_BANG_,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], 0))], null);
});
frontend.components.graph.depth_control_disabled_QMARK_ = (function frontend$components$graph$depth_control_disabled_QMARK_(selected_nodes){
return cljs.core.empty_QMARK_(selected_nodes);
});
frontend.components.graph.layout_slider = (function frontend$components$graph$layout_slider(p__59175){
var map__59176 = p__59175;
var map__59176__$1 = cljs.core.__destructure_map(map__59176);
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59176__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59176__$1,new cljs.core.Keyword(null,"max","max",61366548));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59176__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59176__$1,new cljs.core.Keyword(null,"value","value",305978217));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59176__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59176__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59176__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.graph-layout-control","label.graph-layout-control",-453364854),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(disabled_QMARK_)?"is-disabled":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.graph-layout-control-header","span.graph-layout-control-header",-1563215358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),value], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.graph-layout-slider","input.graph-layout-slider",536417862),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min_value,new cljs.core.Keyword(null,"max","max",61366548),max_value,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
var G__59177 = parseInt(event.target.value,(10));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__59177) : on_change.call(null,G__59177));
})], null)], null)], null);
});
frontend.components.graph.layout_toggle = (function frontend$components$graph$layout_toggle(label,checked_QMARK_,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.graph-layout-toggle","label.graph-layout-toggle",-1646406928),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__59178 = cljs.core.not(checked_QMARK_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__59178) : on_change.call(null,G__59178));
})], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null);
});
frontend.components.graph.layout_group = (function frontend$components$graph$layout_group(settings,set_settings_BANG_,graph_data,selected_nodes,view_mode){
var depth = frontend.components.graph.valid_depth(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(settings));
var link_distance = frontend.components.graph.valid_link_distance(new cljs.core.Keyword(null,"link-distance","link-distance",1680735939).cljs$core$IFn$_invoke$arity$1(settings));
var grid_layout_QMARK_ = new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125).cljs$core$IFn$_invoke$arity$1(settings) === true;
var show_journals_QMARK_ = (!(new cljs.core.Keyword(null,"show-journals?","show-journals?",-206531986).cljs$core$IFn$_invoke$arity$1(settings) === false));
var depth_disabled_QMARK_ = frontend.components.graph.depth_control_disabled_QMARK_(selected_nodes);
return frontend.components.graph.settings_group(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"settings","settings",1556144875),settings,new cljs.core.Keyword(null,"set-settings!","set-settings!",1788044418),set_settings_BANG_,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","layout","graph/layout",2075542325)], 0)),new cljs.core.Keyword(null,"meta","meta",1499536964),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","layout-force","graph/layout-force",-1238703786)], 0)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-layout-controls","div.graph-layout-controls",511673277),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-layout-stats","div.graph-layout-stats",-1716989160),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","node-count","graph/node-count",-441366089),cljs.core.count(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data))], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","link-count","graph/link-count",-1454064156),cljs.core.count(new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph_data))], 0))], null)], null),frontend.components.graph.layout_slider(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","layout-depth","graph/layout-depth",-403125717)], 0)),new cljs.core.Keyword(null,"value","value",305978217),depth,new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),depth_disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__59179_SHARP_){
var G__59183 = (function (settings__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),frontend.components.graph.valid_depth(p1__59179_SHARP_));
});
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(G__59183) : set_settings_BANG_.call(null,G__59183));
})], null)),frontend.components.graph.layout_slider(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","layout-link-distance","graph/layout-link-distance",737762743)], 0)),new cljs.core.Keyword(null,"value","value",305978217),link_distance,new cljs.core.Keyword(null,"min","min",444991522),(36),new cljs.core.Keyword(null,"max","max",61366548),(180),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__59180_SHARP_){
var G__59184 = (function (settings__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings__$1,new cljs.core.Keyword(null,"link-distance","link-distance",1680735939),frontend.components.graph.valid_link_distance(p1__59180_SHARP_));
});
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(G__59184) : set_settings_BANG_.call(null,G__59184));
})], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.graph.layout_toggle(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","layout-grid-layout","graph/layout-grid-layout",-289425604)], 0)),grid_layout_QMARK_,(function (p1__59181_SHARP_){
var G__59185 = (function (settings__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings__$1,new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125),p1__59181_SHARP_);
});
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(G__59185) : set_settings_BANG_.call(null,G__59185));
}))], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)))?frontend.components.graph.layout_toggle(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","layout-show-journals","graph/layout-show-journals",-445951201)], 0)),show_journals_QMARK_,(function (p1__59182_SHARP_){
var G__59186 = (function (settings__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings__$1,new cljs.core.Keyword(null,"show-journals?","show-journals?",-206531986),p1__59182_SHARP_);
});
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(G__59186) : set_settings_BANG_.call(null,G__59186));
})):null)], null)], null));
});
frontend.components.graph.time_travel_range = (function frontend$components$graph$time_travel_range(graph_data){
var map__59187 = new cljs.core.Keyword(null,"all-pages","all-pages",1017563062).cljs$core$IFn$_invoke$arity$1(graph_data);
var map__59187__$1 = cljs.core.__destructure_map(map__59187);
var created_at_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59187__$1,new cljs.core.Keyword(null,"created-at-min","created-at-min",355144021));
var created_at_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59187__$1,new cljs.core.Keyword(null,"created-at-max","created-at-max",259911175));
var vec__59188 = ((((typeof created_at_min === 'number') && (typeof created_at_max === 'number')))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [created_at_min,created_at_max], null):(function (){var created_ats = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(created_ats))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,created_ats):null),((cljs.core.seq(created_ats))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,created_ats):null)], null);
})());
var created_at_min__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59188,(0),null);
var created_at_max__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59188,(1),null);
var duration = (cljs.core.truth_((function (){var and__5140__auto__ = created_at_min__$1;
if(cljs.core.truth_(and__5140__auto__)){
return created_at_max__$1;
} else {
return and__5140__auto__;
}
})())?(created_at_max__$1 - created_at_min__$1):null);
if(cljs.core.truth_((function (){var and__5140__auto__ = duration;
if(cljs.core.truth_(and__5140__auto__)){
return (duration > (0));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"created-at-min","created-at-min",355144021),created_at_min__$1,new cljs.core.Keyword(null,"created-at-max","created-at-max",259911175),created_at_max__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null);
} else {
return null;
}
});
frontend.components.graph.time_travel_slider_value = (function frontend$components$graph$time_travel_slider_value(settings,graph_data){
var temp__5825__auto__ = frontend.components.graph.time_travel_range(graph_data);
if(cljs.core.truth_(temp__5825__auto__)){
var map__59191 = temp__5825__auto__;
var map__59191__$1 = cljs.core.__destructure_map(map__59191);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59191__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"created-at-filter","created-at-filter",708262492).cljs$core$IFn$_invoke$arity$1(settings);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return duration;
}
})(),(0)),duration);
} else {
return null;
}
});
frontend.components.graph.filter_graph_by_created_at = (function frontend$components$graph$filter_graph_by_created_at(graph_data,created_at_filter){
var temp__5823__auto__ = (((!((created_at_filter == null))))?frontend.components.graph.time_travel_range(graph_data):null);
if(cljs.core.truth_(temp__5823__auto__)){
var map__59193 = temp__5823__auto__;
var map__59193__$1 = cljs.core.__destructure_map(map__59193);
var created_at_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59193__$1,new cljs.core.Keyword(null,"created-at-min","created-at-min",355144021));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59193__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var offset = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = created_at_filter;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return duration;
}
})(),(0)),duration);
var cutoff = (created_at_min + offset);
var visible_node_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
var created_at = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(node);
return (((created_at == null)) || ((created_at <= cutoff)));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(graph_data,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59192_SHARP_){
return cljs.core.contains_QMARK_(visible_node_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__59192_SHARP_));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59194){
var map__59195 = p__59194;
var map__59195__$1 = cljs.core.__destructure_map(map__59195);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59195__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59195__$1,new cljs.core.Keyword(null,"target","target",253001721));
return ((cljs.core.contains_QMARK_(visible_node_ids,source)) && (cljs.core.contains_QMARK_(visible_node_ids,target)));
}),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph_data)))], 0));
} else {
return graph_data;
}
});
frontend.components.graph.filter_all_pages_journals = (function frontend$components$graph$filter_all_pages_journals(graph_data,show_journals_QMARK_){
if(cljs.core.truth_(show_journals_QMARK_)){
return graph_data;
} else {
var visible_node_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59196_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("journal",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__59196_SHARP_));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(graph_data,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59197_SHARP_){
return cljs.core.contains_QMARK_(visible_node_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__59197_SHARP_));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph_data))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59198){
var map__59199 = p__59198;
var map__59199__$1 = cljs.core.__destructure_map(map__59199);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59199__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59199__$1,new cljs.core.Keyword(null,"target","target",253001721));
return ((cljs.core.contains_QMARK_(visible_node_ids,source)) && (cljs.core.contains_QMARK_(visible_node_ids,target)));
}),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph_data)))], 0));
}
});
frontend.components.graph.filter_graph_by_layout_settings = (function frontend$components$graph$filter_graph_by_layout_settings(graph_data,view_mode,show_journals_QMARK_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))){
return frontend.components.graph.filter_all_pages_journals(graph_data,show_journals_QMARK_);
} else {
return graph_data;
}
});
frontend.components.graph.graph_visible_node_ids = (function frontend$components$graph$graph_visible_node_ids(source_graph_data,visible_graph_data){
if(cljs.core.truth_((function (){var and__5140__auto__ = visible_graph_data;
if(cljs.core.truth_(and__5140__auto__)){
return (!((source_graph_data === visible_graph_data)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(visible_graph_data)));
} else {
return null;
}
});
frontend.components.graph.format_time_travel_date = (function frontend$components$graph$format_time_travel_date(timestamp){
if(typeof timestamp === 'number'){
return (new Date(timestamp)).toLocaleDateString(undefined,({"year": "numeric", "month": "short", "day": "numeric"}));
} else {
return null;
}
});
frontend.components.graph.set_time_travel_filter_BANG_ = (function frontend$components$graph$set_time_travel_filter_BANG_(set_settings_BANG_,value,duration){
var G__59200 = (function (settings){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"created-at-filter","created-at-filter",708262492),(((value < duration))?value:null));
});
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(G__59200) : set_settings_BANG_.call(null,G__59200));
});
frontend.components.graph.cancel_time_travel_animation_BANG_ = (function frontend$components$graph$cancel_time_travel_animation_BANG_(animation_frame_ref){
var temp__5825__auto__ = logseq.shui.hooks.deref(animation_frame_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var animation_frame_id = temp__5825__auto__;
cancelAnimationFrame(animation_frame_id);

return logseq.shui.hooks.set_ref_BANG_(animation_frame_ref,null);
} else {
return null;
}
});
frontend.components.graph.time_travel_animation_ms = (4500);
frontend.components.graph.animate_time_travel_to_now_BANG_ = (function frontend$components$graph$animate_time_travel_to_now_BANG_(settings,set_settings_BANG_,graph_data,animation_frame_ref){
var temp__5825__auto__ = frontend.components.graph.time_travel_range(graph_data);
if(cljs.core.truth_(temp__5825__auto__)){
var map__59201 = temp__5825__auto__;
var map__59201__$1 = cljs.core.__destructure_map(map__59201);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
frontend.components.graph.cancel_time_travel_animation_BANG_(animation_frame_ref);

var start_value = frontend.components.graph.time_travel_slider_value(settings,graph_data);
if((start_value >= duration)){
return frontend.components.graph.set_time_travel_filter_BANG_(set_settings_BANG_,duration,duration);
} else {
var started_at = performance.now();
var step_BANG_ = (function frontend$components$graph$animate_time_travel_to_now_BANG__$_step_BANG_(timestamp){
var progress = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(((timestamp - started_at) / frontend.components.graph.time_travel_animation_ms),(0)),(1));
var value = (start_value + ((duration - start_value) * progress));
if((progress < (1))){
frontend.components.graph.set_time_travel_filter_BANG_(set_settings_BANG_,value,duration);

return logseq.shui.hooks.set_ref_BANG_(animation_frame_ref,requestAnimationFrame(frontend$components$graph$animate_time_travel_to_now_BANG__$_step_BANG_));
} else {
logseq.shui.hooks.set_ref_BANG_(animation_frame_ref,null);

return frontend.components.graph.set_time_travel_filter_BANG_(set_settings_BANG_,duration,duration);
}
});
return logseq.shui.hooks.set_ref_BANG_(animation_frame_ref,requestAnimationFrame(step_BANG_));
}
} else {
return null;
}
});
frontend.components.graph.time_travel_control = (function frontend$components$graph$time_travel_control(settings,set_settings_BANG_,graph_data,animation_frame_ref,open_QMARK_,set_open_BANG_){
var temp__5825__auto__ = frontend.components.graph.time_travel_range(graph_data);
if(cljs.core.truth_(temp__5825__auto__)){
var map__59202 = temp__5825__auto__;
var map__59202__$1 = cljs.core.__destructure_map(map__59202);
var created_at_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59202__$1,new cljs.core.Keyword(null,"created-at-min","created-at-min",355144021));
var created_at_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59202__$1,new cljs.core.Keyword(null,"created-at-max","created-at-max",259911175));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59202__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var value = frontend.components.graph.time_travel_slider_value(settings,graph_data);
var at_now_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,duration);
var current_timestamp = (created_at_min + value);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-time-travel","div.graph-time-travel",2086311443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(open_QMARK_)?"is-open":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.graph-time-travel-toggle.graph-toolbar-button","button.graph-time-travel-toggle.graph-toolbar-button",164033066),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","time-travel","graph/time-travel",-684254861)], 0)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","time-travel","graph/time-travel",-684254861)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__59203 = cljs.core.not(open_QMARK_);
return (set_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__59203) : set_open_BANG_.call(null,G__59203));
})], null),frontend.ui.icon((cljs.core.truth_(open_QMARK_)?"chevron-down":"history"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-time-travel-panel","div.graph-time-travel-panel",-999262593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),cljs.core.not(open_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.graph-time-travel-reset","button.graph-time-travel-reset",-1066415260),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","time-travel-now","graph/time-travel-now",1342029419)], 0)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","time-travel-now","graph/time-travel-now",1342029419)], 0)),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(cljs.core.truth_(open_QMARK_)?(0):(-1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.graph.animate_time_travel_to_now_BANG_(settings,set_settings_BANG_,graph_data,animation_frame_ref);
})], null),frontend.ui.icon("player-play",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-time-travel-body","div.graph-time-travel-body",703532265),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-time-travel-label","div.graph-time-travel-label",611699808),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","time-travel","graph/time-travel",-684254861)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),((at_now_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","time-travel-now","graph/time-travel-now",1342029419)], 0)):frontend.components.graph.format_time_travel_date(current_timestamp))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.graph-time-travel-slider","input.graph-time-travel-slider",-551662856),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),duration,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),Math.floor((duration / (240)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","time-travel","graph/time-travel",-684254861)], 0)),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(cljs.core.truth_(open_QMARK_)?(0):(-1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
frontend.components.graph.cancel_time_travel_animation_BANG_(animation_frame_ref);

var next_value = parseFloat(event.target.value);
return frontend.components.graph.set_time_travel_filter_BANG_(set_settings_BANG_,next_value,duration);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-time-travel-ticks","div.graph-time-travel-ticks",225270120),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.components.graph.format_time_travel_date(created_at_min)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.components.graph.format_time_travel_date(created_at_max)], null)], null)], null)], null)], null);
} else {
return null;
}
});
frontend.components.graph.settings_panel = (function frontend$components$graph$settings_panel(settings_open_QMARK_,set_settings_open_BANG_,settings,set_settings_BANG_,view_mode,set_view_mode_BANG_,loading_QMARK_,filtered_graph_data,available_tags,selected_tag_ids,tag_query,set_tag_query_BANG_,selected_nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-settings","div.graph-settings",679813579),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(settings_open_QMARK_)?"is-open":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.graph-settings-toggle.graph-toolbar-button","button.graph-settings-toggle.graph-toolbar-button",-618480504),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","settings","graph/settings",1067459097)], 0)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","settings","graph/settings",1067459097)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__59204 = cljs.core.not(settings_open_QMARK_);
return (set_settings_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__59204) : set_settings_open_BANG_.call(null,G__59204));
})], null),frontend.ui.icon((cljs.core.truth_(settings_open_QMARK_)?"chevron-down":"settings"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null))], null),(cljs.core.truth_(settings_open_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-settings-panel","div.graph-settings-panel",-1046009655),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-settings-panel-header","div.graph-settings-panel-header",1343914217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-settings-title","div.graph-settings-title",2040618017),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","settings","graph/settings",1067459097)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-settings-subtitle","div.graph-settings-subtitle",1594343248),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","settings-saved-per-graph","graph/settings-saved-per-graph",-1570726451)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.graph-settings-close","button.graph-settings-close",-1580442776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","close","ui/close",1835153538)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_settings_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_settings_open_BANG_.call(null,false));
})], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null))], null)], null),frontend.components.graph.view_mode_group(settings,set_settings_BANG_,view_mode,set_view_mode_BANG_,loading_QMARK_),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884)))?frontend.components.graph.tags_group(settings,set_settings_BANG_,available_tags,selected_tag_ids,tag_query,set_tag_query_BANG_):null),frontend.components.graph.layout_group(settings,set_settings_BANG_,filtered_graph_data,selected_nodes,view_mode)], null):null)], null);
});
frontend.components.graph.graph_interaction_reset = (function frontend$components$graph$graph_interaction_reset(selected_nodes,focused_tag_node,on_reset){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.seq(selected_nodes);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return focused_tag_node;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.graph-interaction-reset.graph-toolbar-button","button.graph-interaction-reset.graph-toolbar-button",959926205),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","reset-view","graph/reset-view",-1216163740)], 0)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","reset-view","graph/reset-view",-1216163740)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_reset], null),frontend.ui.icon("refresh",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null))], null);
} else {
return null;
}
});
frontend.components.graph.graph_bottom_toolbar = (function frontend$components$graph$graph_bottom_toolbar(settings_open_QMARK_,set_settings_open_BANG_,settings,set_settings_BANG_,view_mode,switch_view_mode_BANG_,loading_QMARK_,filtered_graph_data,available_tags,selected_tag_ids,tag_query,set_tag_query_BANG_,selected_nodes,time_travel_animation_ref,time_travel_open_QMARK_,set_time_travel_open_BANG_,mode_graph_data,focused_tag_node,on_reset){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-bottom-toolbar","div.graph-bottom-toolbar",-1262950160),frontend.components.graph.settings_panel(settings_open_QMARK_,set_settings_open_BANG_,settings,set_settings_BANG_,view_mode,switch_view_mode_BANG_,loading_QMARK_,filtered_graph_data,available_tags,selected_tag_ids,tag_query,set_tag_query_BANG_,selected_nodes),frontend.components.graph.time_travel_control(settings,set_settings_BANG_,mode_graph_data,time_travel_animation_ref,time_travel_open_QMARK_,set_time_travel_open_BANG_),frontend.components.graph.graph_interaction_reset(selected_nodes,focused_tag_node,on_reset)], null);
});
frontend.components.graph.global_graph_content = (function frontend$components$graph$global_graph_content(p__59205){
var map__59206 = p__59205;
var map__59206__$1 = cljs.core.__destructure_map(map__59206);
var available_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"available-tags","available-tags",-530714086));
var selected_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var settings_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"settings-open?","settings-open?",1491874651));
var retry_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"retry!","retry!",-552216581));
var on_reset_interaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"on-reset-interaction","on-reset-interaction",-2117066725));
var set_time_travel_open_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"set-time-travel-open!","set-time-travel-open!",-379733283));
var set_focused_tag_node_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"set-focused-tag-node!","set-focused-tag-node!",-1642432739));
var filtered_graph_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"filtered-graph-data","filtered-graph-data",1428134334));
var focused_tag_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"focused-tag-node","focused-tag-node",1638438366));
var reset_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"reset-token","reset-token",1188936255));
var set_settings_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"set-settings!","set-settings!",1788044418));
var set_tag_query_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"set-tag-query!","set-tag-query!",-265219322));
var build_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"build-error","build-error",-1509855322));
var background_visible_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695));
var graph_view_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"graph-view-mode","graph-view-mode",700204391));
var switch_view_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"switch-view-mode!","switch-view-mode!",952908008));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var visible_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033));
var time_travel_animation_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"time-travel-animation-ref","time-travel-animation-ref",1080922730));
var time_travel_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"time-travel-open?","time-travel-open?",-925068278));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var view_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427));
var tag_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"tag-query","tag-query",-453631059));
var dark_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"dark?","dark?",622933231));
var canvas_settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"canvas-settings","canvas-settings",594279695));
var selected_tag_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179));
var set_selected_nodes_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"set-selected-nodes!","set-selected-nodes!",-132623179));
var set_settings_open_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"set-settings-open!","set-settings-open!",1938084214));
var mode_graph_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"mode-graph-data","mode-graph-data",527776888));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#global-graph.graph-root","div#global-graph.graph-root",-2051142946),frontend.components.graph.selected_node_status(selected_nodes),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_((function (){var and__5140__auto__ = build_error;
if(cljs.core.truth_(and__5140__auto__)){
return (mode_graph_data == null);
} else {
return and__5140__auto__;
}
})())?frontend.components.graph.graph_error(retry_BANG_):(((mode_graph_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-loading","div.graph-loading",-247192879),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","preparing","graph/preparing",1413494195)], 0))], null):frontend.extensions.graph.graph_2d(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"link-distance","link-distance",1680735939),new cljs.core.Keyword(null,"on-node-activate","on-node-activate",-186984250),new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695),new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),new cljs.core.Keyword(null,"dark?","dark?",622933231),new cljs.core.Keyword(null,"show-arrows?","show-arrows?",1693952912),new cljs.core.Keyword(null,"show-edge-labels?","show-edge-labels?",1118080177),new cljs.core.Keyword(null,"on-node-preview","on-node-preview",169104498),new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125),new cljs.core.Keyword(null,"on-focus-change","on-focus-change",1545385979),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.Keyword(null,"reset-token","reset-token",1188936255)],[frontend.components.graph.valid_link_distance(new cljs.core.Keyword(null,"link-distance","link-distance",1680735939).cljs$core$IFn$_invoke$arity$1(canvas_settings)),frontend.components.graph_actions.activate_node_BANG_,background_visible_node_ids,visible_node_ids,graph_view_mode,dark_QMARK_,frontend.components.graph.graph_show_arrows_QMARK_,frontend.components.graph.graph_show_edge_labels_QMARK_,frontend.components.graph_actions.preview_node_BANG_,set_selected_nodes_BANG_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(mode_graph_data),frontend.components.graph.valid_depth(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(canvas_settings)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","canvas-label","graph/canvas-label",1477388341)], 0)),new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125).cljs$core$IFn$_invoke$arity$1(canvas_settings) === true,set_focused_tag_node_BANG_,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(mode_graph_data),reset_token]))
)),(cljs.core.truth_((function (){var and__5140__auto__ = loading_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return mode_graph_data;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-loading.graph-loading-inline","div.graph-loading.graph-loading-inline",372405516),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","preparing","graph/preparing",1413494195)], 0))], null):null),frontend.components.graph.graph_bottom_toolbar(settings_open_QMARK_,set_settings_open_BANG_,settings,set_settings_BANG_,view_mode,switch_view_mode_BANG_,loading_QMARK_,(cljs.core.truth_(loading_QMARK_)?null:filtered_graph_data),available_tags,selected_tag_ids,tag_query,set_tag_query_BANG_,selected_nodes,time_travel_animation_ref,time_travel_open_QMARK_,set_time_travel_open_BANG_,mode_graph_data,focused_tag_node,on_reset_interaction)], null)], null);
});
frontend.components.graph.load_global_graph_BANG_ = (function frontend$components$graph$load_global_graph_BANG_(repo,theme,view_mode,set_graph_data_by_mode_BANG_,set_loading_modes_BANG_,set_build_errors_BANG_,set_selected_nodes_BANG_){
var cancelled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var G__59207_59275 = (function (loading_modes){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = loading_modes;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),view_mode);
});
(set_loading_modes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_modes_BANG_.cljs$core$IFn$_invoke$arity$1(G__59207_59275) : set_loading_modes_BANG_.call(null,G__59207_59275));

var G__59208_59276 = (function (errors){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = errors;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),view_mode);
});
(set_build_errors_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_build_errors_BANG_.cljs$core$IFn$_invoke$arity$1(G__59208_59276) : set_build_errors_BANG_.call(null,G__59208_59276));

var G__59209_59277 = cljs.core.PersistentVector.EMPTY;
(set_selected_nodes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_nodes_BANG_.cljs$core$IFn$_invoke$arity$1(G__59209_59277) : set_selected_nodes_BANG_.call(null,G__59209_59277));

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","build-graph","thread-api/build-graph",729373393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),view_mode,new cljs.core.Keyword(null,"journal?","journal?",-897756522),true], null)], 0)),(function (result){
if(cljs.core.truth_(cljs.core.deref(cancelled_QMARK_))){
return null;
} else {
var G__59210_59278 = (function (data_by_mode){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5142__auto__ = data_by_mode;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),view_mode,result);
});
(set_graph_data_by_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_graph_data_by_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__59210_59278) : set_graph_data_by_mode_BANG_.call(null,G__59210_59278));

var G__59211 = (function (loading_modes){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = loading_modes;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),view_mode);
});
return (set_loading_modes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_modes_BANG_.cljs$core$IFn$_invoke$arity$1(G__59211) : set_loading_modes_BANG_.call(null,G__59211));
}
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.graph",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("graph","build-failed","graph/build-failed",1301584019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),796], null)),null);
} else {
}

if(cljs.core.truth_(cljs.core.deref(cancelled_QMARK_))){
return null;
} else {
var G__59212_59279 = (function (errors){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5142__auto__ = errors;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),view_mode,error);
});
(set_build_errors_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_build_errors_BANG_.cljs$core$IFn$_invoke$arity$1(G__59212_59279) : set_build_errors_BANG_.call(null,G__59212_59279));

var G__59213 = (function (loading_modes){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = loading_modes;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),view_mode);
});
return (set_loading_modes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_modes_BANG_.cljs$core$IFn$_invoke$arity$1(G__59213) : set_loading_modes_BANG_.call(null,G__59213));
}
}));

return (function (){
return cljs.core.reset_BANG_(cancelled_QMARK_,true);
});
});
frontend.components.graph.use_global_graph_effects_BANG_ = (function frontend$components$graph$use_global_graph_effects_BANG_(p__59214){
var map__59215 = p__59214;
var map__59215__$1 = cljs.core.__destructure_map(map__59215);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var settings_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"settings-state","settings-state",-915754342));
var set_build_errors_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"set-build-errors!","set-build-errors!",-1537893382));
var retry_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"retry-token","retry-token",1632572955));
var graph_data_by_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"graph-data-by-mode","graph-data-by-mode",2087929980));
var time_travel_animation_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"time-travel-animation-ref","time-travel-animation-ref",1080922730));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var view_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427));
var set_settings_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"set-settings-state!","set-settings-state!",717212013));
var set_loading_modes_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"set-loading-modes!","set-loading-modes!",953023952));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var set_graph_data_by_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"set-graph-data-by-mode!","set-graph-data-by-mode!",-607348812));
var set_selected_nodes_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"set-selected-nodes!","set-selected-nodes!",-132623179));
var set_visible_view_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword(null,"set-visible-view-mode!","set-visible-view-mode!",942407606));
logseq.shui.hooks.use_effect_BANG_((function (){
var G__59216 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"settings","settings",1556144875),frontend.components.graph.load_graph_settings(repo)], null);
return (set_settings_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__59216) : set_settings_state_BANG_.call(null,G__59216));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var G__59217_59280 = cljs.core.PersistentArrayMap.EMPTY;
(set_graph_data_by_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_graph_data_by_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__59217_59280) : set_graph_data_by_mode_BANG_.call(null,G__59217_59280));

var G__59218_59281 = cljs.core.PersistentHashSet.EMPTY;
(set_loading_modes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_modes_BANG_.cljs$core$IFn$_invoke$arity$1(G__59218_59281) : set_loading_modes_BANG_.call(null,G__59218_59281));

var G__59219_59282 = cljs.core.PersistentArrayMap.EMPTY;
(set_build_errors_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_build_errors_BANG_.cljs$core$IFn$_invoke$arity$1(G__59219_59282) : set_build_errors_BANG_.call(null,G__59219_59282));

return (set_visible_view_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_view_mode_BANG_.cljs$core$IFn$_invoke$arity$1(view_mode) : set_visible_view_mode_BANG_.call(null,view_mode));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,theme], null));

logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
return frontend.components.graph.cancel_time_travel_animation_BANG_(time_travel_animation_ref);
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(settings_state))){
return frontend.components.graph.save_graph_settings_BANG_(repo,settings);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,settings_state], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph_data_by_mode,view_mode) == null)){
return frontend.components.graph.load_global_graph_BANG_(repo,theme,view_mode,set_graph_data_by_mode_BANG_,set_loading_modes_BANG_,set_build_errors_BANG_,set_selected_nodes_BANG_);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,theme,view_mode,retry_token,graph_data_by_mode], null));

return logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph_data_by_mode,view_mode))){
return (set_visible_view_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_view_mode_BANG_.cljs$core$IFn$_invoke$arity$1(view_mode) : set_visible_view_mode_BANG_.call(null,view_mode));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_data_by_mode,view_mode], null));
});
frontend.components.graph.global_graph_content_props = (function frontend$components$graph$global_graph_content_props(settings_props,graph_props,tag_props,time_travel_props,action_props){
var map__59220 = settings_props;
var map__59220__$1 = cljs.core.__destructure_map(map__59220);
var settings_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"settings-open?","settings-open?",1491874651));
var retry_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"retry!","retry!",-552216581));
var set_settings_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"set-settings!","set-settings!",1788044418));
var build_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"build-error","build-error",-1509855322));
var switch_view_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"switch-view-mode!","switch-view-mode!",952908008));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var view_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427));
var set_settings_open_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"set-settings-open!","set-settings-open!",1938084214));
var map__59221 = graph_props;
var map__59221__$1 = cljs.core.__destructure_map(map__59221);
var filtered_graph_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"filtered-graph-data","filtered-graph-data",1428134334));
var mode_graph_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"mode-graph-data","mode-graph-data",527776888));
var canvas_settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"canvas-settings","canvas-settings",594279695));
var visible_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033));
var background_visible_node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695));
var dark_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"dark?","dark?",622933231));
var graph_view_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"graph-view-mode","graph-view-mode",700204391));
var map__59222 = tag_props;
var map__59222__$1 = cljs.core.__destructure_map(map__59222);
var available_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"available-tags","available-tags",-530714086));
var selected_tag_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179));
var tag_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"tag-query","tag-query",-453631059));
var set_tag_query_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"set-tag-query!","set-tag-query!",-265219322));
var map__59223 = time_travel_props;
var map__59223__$1 = cljs.core.__destructure_map(map__59223);
var time_travel_animation_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59223__$1,new cljs.core.Keyword(null,"time-travel-animation-ref","time-travel-animation-ref",1080922730));
var time_travel_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59223__$1,new cljs.core.Keyword(null,"time-travel-open?","time-travel-open?",-925068278));
var set_time_travel_open_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59223__$1,new cljs.core.Keyword(null,"set-time-travel-open!","set-time-travel-open!",-379733283));
var map__59224 = action_props;
var map__59224__$1 = cljs.core.__destructure_map(map__59224);
var selected_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59224__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var set_selected_nodes_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59224__$1,new cljs.core.Keyword(null,"set-selected-nodes!","set-selected-nodes!",-132623179));
var focused_tag_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59224__$1,new cljs.core.Keyword(null,"focused-tag-node","focused-tag-node",1638438366));
var set_focused_tag_node_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59224__$1,new cljs.core.Keyword(null,"set-focused-tag-node!","set-focused-tag-node!",-1642432739));
var reset_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59224__$1,new cljs.core.Keyword(null,"reset-token","reset-token",1188936255));
var on_reset_interaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59224__$1,new cljs.core.Keyword(null,"on-reset-interaction","on-reset-interaction",-2117066725));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"set-settings!","set-settings!",1788044418),new cljs.core.Keyword(null,"set-tag-query!","set-tag-query!",-265219322),new cljs.core.Keyword(null,"build-error","build-error",-1509855322),new cljs.core.Keyword(null,"graph-view-mode","graph-view-mode",700204391),new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695),new cljs.core.Keyword(null,"switch-view-mode!","switch-view-mode!",952908008),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033),new cljs.core.Keyword(null,"time-travel-open?","time-travel-open?",-925068278),new cljs.core.Keyword(null,"time-travel-animation-ref","time-travel-animation-ref",1080922730),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),new cljs.core.Keyword(null,"tag-query","tag-query",-453631059),new cljs.core.Keyword(null,"dark?","dark?",622933231),new cljs.core.Keyword(null,"canvas-settings","canvas-settings",594279695),new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179),new cljs.core.Keyword(null,"set-selected-nodes!","set-selected-nodes!",-132623179),new cljs.core.Keyword(null,"set-settings-open!","set-settings-open!",1938084214),new cljs.core.Keyword(null,"mode-graph-data","mode-graph-data",527776888),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"available-tags","available-tags",-530714086),new cljs.core.Keyword(null,"on-reset-interaction","on-reset-interaction",-2117066725),new cljs.core.Keyword(null,"settings-open?","settings-open?",1491874651),new cljs.core.Keyword(null,"retry!","retry!",-552216581),new cljs.core.Keyword(null,"set-time-travel-open!","set-time-travel-open!",-379733283),new cljs.core.Keyword(null,"set-focused-tag-node!","set-focused-tag-node!",-1642432739),new cljs.core.Keyword(null,"filtered-graph-data","filtered-graph-data",1428134334),new cljs.core.Keyword(null,"focused-tag-node","focused-tag-node",1638438366),new cljs.core.Keyword(null,"reset-token","reset-token",1188936255)],[set_settings_BANG_,set_tag_query_BANG_,build_error,graph_view_mode,background_visible_node_ids,switch_view_mode_BANG_,loading_QMARK_,visible_node_ids,time_travel_open_QMARK_,time_travel_animation_ref,settings,view_mode,tag_query,dark_QMARK_,canvas_settings,selected_tag_ids,set_selected_nodes_BANG_,set_settings_open_BANG_,mode_graph_data,selected_nodes,available_tags,on_reset_interaction,settings_open_QMARK_,retry_BANG_,set_time_travel_open_BANG_,set_focused_tag_node_BANG_,filtered_graph_data,focused_tag_node,reset_token]);
});
frontend.components.graph.make_set_settings_BANG_ = (function frontend$components$graph$make_set_settings_BANG_(repo,set_settings_state_BANG_){
return (function (settings_or_fn){
var G__59225 = (function (state){
var current_settings = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(state)))?new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(state):frontend.components.graph.load_graph_settings(repo));
var next_settings = ((cljs.core.fn_QMARK_(settings_or_fn))?(settings_or_fn.cljs$core$IFn$_invoke$arity$1 ? settings_or_fn.cljs$core$IFn$_invoke$arity$1(current_settings) : settings_or_fn.call(null,current_settings)):settings_or_fn);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"settings","settings",1556144875),next_settings], null);
});
return (set_settings_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__59225) : set_settings_state_BANG_.call(null,G__59225));
});
});
frontend.components.graph.global_graph = (function (){var render_fn__31744__auto__ = (function frontend$components$graph$global_graph(){
var repo = frontend.state.get_current_repo();
var theme = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)], null));
var theme_token = frontend.components.graph.use_theme_token();
var dark_QMARK_ = frontend.components.graph.effective_dark_theme_QMARK_(theme,theme_token);
var vec__59226 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"settings","settings",1556144875),frontend.components.graph.load_graph_settings(repo)], null));
var settings_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59226,(0),null);
var set_settings_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59226,(1),null);
var vec__59229 = logseq.shui.hooks.use_state(false);
var settings_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59229,(0),null);
var set_settings_open_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59229,(1),null);
var vec__59232 = logseq.shui.hooks.use_state("");
var tag_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59232,(0),null);
var set_tag_query_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59232,(1),null);
var vec__59235 = logseq.shui.hooks.use_state(cljs.core.PersistentArrayMap.EMPTY);
var graph_data_by_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59235,(0),null);
var set_graph_data_by_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59235,(1),null);
var vec__59238 = logseq.shui.hooks.use_state(cljs.core.PersistentHashSet.EMPTY);
var loading_modes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59238,(0),null);
var set_loading_modes_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59238,(1),null);
var vec__59241 = logseq.shui.hooks.use_state(cljs.core.PersistentArrayMap.EMPTY);
var build_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59241,(0),null);
var set_build_errors_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59241,(1),null);
var vec__59244 = logseq.shui.hooks.use_state((0));
var retry_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59244,(0),null);
var set_retry_token_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59244,(1),null);
var vec__59247 = logseq.shui.hooks.use_state(cljs.core.PersistentVector.EMPTY);
var selected_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59247,(0),null);
var set_selected_nodes_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59247,(1),null);
var vec__59250 = logseq.shui.hooks.use_state(null);
var focused_tag_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59250,(0),null);
var set_focused_tag_node_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59250,(1),null);
var vec__59253 = logseq.shui.hooks.use_state((0));
var reset_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59253,(0),null);
var set_reset_token_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59253,(1),null);
var vec__59256 = logseq.shui.hooks.use_state(false);
var time_travel_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59256,(0),null);
var set_time_travel_open_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59256,(1),null);
var vec__59259 = logseq.shui.hooks.use_state(new cljs.core.Keyword(null,"view-mode","view-mode",2138348427).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(settings_state)));
var visible_view_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59259,(0),null);
var set_visible_view_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59259,(1),null);
var time_travel_animation_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var canvas_settings_ref = (function (){var G__59262 = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(settings_state);
return (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__59262) : logseq.shui.hooks.use_ref.call(null,G__59262));
})();
var settings = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(settings_state);
var set_settings_BANG_ = frontend.components.graph.make_set_settings_BANG_(repo,set_settings_state_BANG_);
var view_mode = new cljs.core.Keyword(null,"view-mode","view-mode",2138348427).cljs$core$IFn$_invoke$arity$1(settings);
var switch_view_mode_BANG_ = (function (mode){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(mode,view_mode)){
var G__59263_59283 = cljs.core.PersistentVector.EMPTY;
(set_selected_nodes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_nodes_BANG_.cljs$core$IFn$_invoke$arity$1(G__59263_59283) : set_selected_nodes_BANG_.call(null,G__59263_59283));

(set_focused_tag_node_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_focused_tag_node_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_focused_tag_node_BANG_.call(null,null));

return set_settings_BANG_((function (settings__$1){
return frontend.components.graph.settings_close_group(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings__$1,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),mode),new cljs.core.Keyword(null,"displayed-tags","displayed-tags",-1686827375));
}));
} else {
return null;
}
});
frontend.components.graph.use_global_graph_effects_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"time-travel-animation-ref","time-travel-animation-ref",1080922730),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),new cljs.core.Keyword(null,"set-settings-state!","set-settings-state!",717212013),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"set-loading-modes!","set-loading-modes!",953023952),new cljs.core.Keyword(null,"set-graph-data-by-mode!","set-graph-data-by-mode!",-607348812),new cljs.core.Keyword(null,"set-selected-nodes!","set-selected-nodes!",-132623179),new cljs.core.Keyword(null,"set-visible-view-mode!","set-visible-view-mode!",942407606),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"settings-state","settings-state",-915754342),new cljs.core.Keyword(null,"set-build-errors!","set-build-errors!",-1537893382),new cljs.core.Keyword(null,"retry-token","retry-token",1632572955),new cljs.core.Keyword(null,"graph-data-by-mode","graph-data-by-mode",2087929980)],[time_travel_animation_ref,settings,view_mode,set_settings_state_BANG_,theme,set_loading_modes_BANG_,set_graph_data_by_mode_BANG_,set_selected_nodes_BANG_,set_visible_view_mode_BANG_,repo,settings_state,set_build_errors_BANG_,retry_token,graph_data_by_mode]));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,visible_view_mode)){
return logseq.shui.hooks.set_ref_BANG_(canvas_settings_ref,settings);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [settings,view_mode,visible_view_mode], null));

var graph_view_mode = visible_view_mode;
var switching_view_mode_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,graph_view_mode);
var canvas_settings = ((switching_view_mode_QMARK_)?logseq.shui.hooks.deref(canvas_settings_ref):settings);
var show_journals_QMARK_ = (!(new cljs.core.Keyword(null,"show-journals?","show-journals?",-206531986).cljs$core$IFn$_invoke$arity$1(canvas_settings) === false));
var graph_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph_data_by_mode,graph_view_mode);
var tags_graph_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph_data_by_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884));
var loading_QMARK_ = cljs.core.contains_QMARK_(loading_modes,view_mode);
var build_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(build_errors,view_mode);
var available_tags = logseq.shui.hooks.use_memo((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884));
if(and__5140__auto__){
return tags_graph_data;
} else {
return and__5140__auto__;
}
})())){
return frontend.components.graph.tag_options(tags_graph_data);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_mode,tags_graph_data], null));
var canvas_available_tags = logseq.shui.hooks.use_memo((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884));
if(and__5140__auto__){
return graph_data;
} else {
return and__5140__auto__;
}
})())){
return frontend.components.graph.tag_options(graph_data);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_view_mode,graph_data], null));
var selected_tag_ids = frontend.components.graph.selected_tag_id_set(canvas_settings,canvas_available_tags);
var selected_tag_key = (((!((new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179).cljs$core$IFn$_invoke$arity$1(canvas_settings) == null))))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\u0000",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179).cljs$core$IFn$_invoke$arity$1(canvas_settings))):"__all__");
var mode_graph_data = logseq.shui.hooks.use_memo((function (){
if(cljs.core.truth_(graph_data)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_view_mode,new cljs.core.Keyword(null,"tags-and-objects","tags-and-objects",-1802452884))){
return frontend.components.graph.filter_tags_and_objects_graph(graph_data,selected_tag_ids);
} else {
return graph_data;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_data,graph_view_mode,selected_tag_key], null));
var layout_filtered_graph_data = logseq.shui.hooks.use_memo((function (){
if(cljs.core.truth_(mode_graph_data)){
return frontend.components.graph.filter_graph_by_layout_settings(mode_graph_data,graph_view_mode,show_journals_QMARK_);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode_graph_data,graph_view_mode,show_journals_QMARK_], null));
var filtered_graph_data = (cljs.core.truth_(mode_graph_data)?frontend.components.graph.filter_graph_by_created_at(layout_filtered_graph_data,new cljs.core.Keyword(null,"created-at-filter","created-at-filter",708262492).cljs$core$IFn$_invoke$arity$1(canvas_settings)):null);
var visible_node_ids = frontend.components.graph.graph_visible_node_ids(mode_graph_data,filtered_graph_data);
var background_visible_node_ids = visible_node_ids;
return frontend.components.graph.global_graph_content(frontend.components.graph.global_graph_content_props(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"set-settings!","set-settings!",1788044418),new cljs.core.Keyword(null,"build-error","build-error",-1509855322),new cljs.core.Keyword(null,"switch-view-mode!","switch-view-mode!",952908008),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),new cljs.core.Keyword(null,"set-settings-open!","set-settings-open!",1938084214),new cljs.core.Keyword(null,"settings-open?","settings-open?",1491874651),new cljs.core.Keyword(null,"retry!","retry!",-552216581)],[set_settings_BANG_,build_error,switch_view_mode_BANG_,loading_QMARK_,settings,view_mode,set_settings_open_BANG_,settings_open_QMARK_,(function (){
var G__59264 = (retry_token + (1));
return (set_retry_token_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_retry_token_BANG_.cljs$core$IFn$_invoke$arity$1(G__59264) : set_retry_token_BANG_.call(null,G__59264));
})]),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filtered-graph-data","filtered-graph-data",1428134334),filtered_graph_data,new cljs.core.Keyword(null,"mode-graph-data","mode-graph-data",527776888),mode_graph_data,new cljs.core.Keyword(null,"canvas-settings","canvas-settings",594279695),canvas_settings,new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033),visible_node_ids,new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695),background_visible_node_ids,new cljs.core.Keyword(null,"dark?","dark?",622933231),dark_QMARK_,new cljs.core.Keyword(null,"graph-view-mode","graph-view-mode",700204391),graph_view_mode], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"available-tags","available-tags",-530714086),available_tags,new cljs.core.Keyword(null,"selected-tag-ids","selected-tag-ids",630180179),selected_tag_ids,new cljs.core.Keyword(null,"tag-query","tag-query",-453631059),tag_query,new cljs.core.Keyword(null,"set-tag-query!","set-tag-query!",-265219322),set_tag_query_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time-travel-animation-ref","time-travel-animation-ref",1080922730),time_travel_animation_ref,new cljs.core.Keyword(null,"time-travel-open?","time-travel-open?",-925068278),time_travel_open_QMARK_,new cljs.core.Keyword(null,"set-time-travel-open!","set-time-travel-open!",-379733283),set_time_travel_open_BANG_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),selected_nodes,new cljs.core.Keyword(null,"set-selected-nodes!","set-selected-nodes!",-132623179),set_selected_nodes_BANG_,new cljs.core.Keyword(null,"focused-tag-node","focused-tag-node",1638438366),focused_tag_node,new cljs.core.Keyword(null,"set-focused-tag-node!","set-focused-tag-node!",-1642432739),set_focused_tag_node_BANG_,new cljs.core.Keyword(null,"reset-token","reset-token",1188936255),reset_token,new cljs.core.Keyword(null,"on-reset-interaction","on-reset-interaction",-2117066725),(function (){
var G__59265_59284 = cljs.core.PersistentVector.EMPTY;
(set_selected_nodes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_nodes_BANG_.cljs$core$IFn$_invoke$arity$1(G__59265_59284) : set_selected_nodes_BANG_.call(null,G__59265_59284));

(set_focused_tag_node_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_focused_tag_node_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_focused_tag_node_BANG_.call(null,null));

var G__59266 = (reset_token + (1));
return (set_reset_token_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_reset_token_BANG_.cljs$core$IFn$_invoke$arity$1(G__59266) : set_reset_token_BANG_.call(null,G__59266));
})], null)));
});
var comp__31745__auto__ = (function() { 
var frontend$components$graph$global_graph__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59267 = cljs.core.first(args__31746__auto__);
var G__59268 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59267,G__59268) : io.factorhouse.hsx.core.obj_get.call(null,G__59267,G__59268));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"global-graph","global-graph",-1893056743,null),args__31746__auto__),frontend$components$graph$global_graph,args__31746__auto__,null);
}
};
var frontend$components$graph$global_graph = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59285__i = 0, G__59285__a = new Array(arguments.length -  0);
while (G__59285__i < G__59285__a.length) {G__59285__a[G__59285__i] = arguments[G__59285__i + 0]; ++G__59285__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59285__a,0,null);
} 
return frontend$components$graph$global_graph__delegate.call(this,args__31746__auto__);};
frontend$components$graph$global_graph.cljs$lang$maxFixedArity = 0;
frontend$components$graph$global_graph.cljs$lang$applyTo = (function (arglist__59286){
var args__31746__auto__ = cljs.core.seq(arglist__59286);
return frontend$components$graph$global_graph__delegate(args__31746__auto__);
});
frontend$components$graph$global_graph.cljs$core$IFn$_invoke$arity$variadic = frontend$components$graph$global_graph__delegate;
return frontend$components$graph$global_graph;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59269 = comp__31745__auto__;
var G__59270 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59269,G__59270) : io.factorhouse.hsx.core.react_memo.call(null,G__59269,G__59270));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"global-graph");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.graph.js.map
