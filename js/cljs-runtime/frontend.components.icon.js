goog.provide('frontend.components.icon');
goog.scope(function(){
  frontend.components.icon.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$emoji_mart$data$sets$15$native_json=shadow.js.require("module$node_modules$$emoji_mart$data$sets$15$native_json", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$tabler$icons_react$dist$cjs$tabler_icons_react_cjs=shadow.js.require("module$node_modules$$tabler$icons_react$dist$cjs$tabler_icons_react_cjs", {});
var module$node_modules$emoji_mart$dist$main=shadow.js.require("module$node_modules$emoji_mart$dist$main", {});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.icon !== 'undefined') && (typeof frontend.components.icon.emojis !== 'undefined')){
} else {
frontend.components.icon.emojis = cljs.core.vals(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(frontend.components.icon.goog$module$goog$object.get(module$node_modules$$emoji_mart$data$sets$15$native_json,"emojis")));
}
frontend.components.icon.icon = (function frontend$components$icon$icon(var_args){
var args__5882__auto__ = [];
var len__5876__auto___38392 = arguments.length;
var i__5877__auto___38393 = (0);
while(true){
if((i__5877__auto___38393 < len__5876__auto___38392)){
args__5882__auto__.push((arguments[i__5877__auto___38393]));

var G__38394 = (i__5877__auto___38393 + (1));
i__5877__auto___38393 = G__38394;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic = (function (icon_SINGLEQUOTE_,p__38199){
var vec__38200 = p__38199;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38200,(0),null);
var icon_SINGLEQUOTE___$1 = ((((typeof icon_SINGLEQUOTE_ === 'string') || ((icon_SINGLEQUOTE_ instanceof cljs.core.Keyword))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(icon_SINGLEQUOTE_)], null):icon_SINGLEQUOTE_);
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),null,new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1))) && (((typeof new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1) === 'string') && ((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1))))))))){
var color_QMARK_ = new cljs.core.Keyword(null,"color?","color?",-1891974356).cljs$core$IFn$_invoke$arity$1(opts);
var opts__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"color?","color?",-1891974356));
var item = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ui__icon","span.ui__icon",-681203515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em-emoji","em-emoji",1985182592),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(1)], null)], null),cljs.core.select_keys(icon_SINGLEQUOTE___$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skin","skin",2146317821)], null)),opts__$1], 0))], null)], null):(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1);
} else {
return and__5140__auto__;
}
})())?frontend.ui.icon(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1),opts__$1):icon_SINGLEQUOTE___$1
));
if(cljs.core.truth_(color_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex.items-center.ls-icon-color-wrap","span.inline-flex.items-center.ls-icon-color-wrap",1409953162),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5142__auto__ = (function (){var G__38206 = icon_SINGLEQUOTE___$1;
if((G__38206 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__38206);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "inherit";
}
})()], null)], null),item], null);
} else {
return item;
}
} else {
console.error("Invalid icon");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
}));

(frontend.components.icon.icon.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.components.icon.icon.cljs$lang$applyTo = (function (seq38195){
var G__38196 = cljs.core.first(seq38195);
var seq38195__$1 = cljs.core.next(seq38195);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38196,seq38195__$1);
}));

frontend.components.icon.get_node_icon = (function frontend$components$icon$get_node_icon(node_entity,p__38207){
var map__38208 = p__38207;
var map__38208__$1 = cljs.core.__destructure_map(map__38208);
var ignore_current_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38208__$1,new cljs.core.Keyword(null,"ignore-current-icon?","ignore-current-icon?",-1279467710),false);
var or__5142__auto__ = (cljs.core.truth_(ignore_current_icon_QMARK_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_entity,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var asset_type = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(node_entity);
var first_tag_icon = cljs.core.some(new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(node_entity)));
if(cljs.core.truth_(frontend.util.entity.class_QMARK_(node_entity))){
return "hash";
} else {
if(cljs.core.truth_(frontend.util.entity.property_QMARK_(node_entity))){
return "letter-p";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(asset_type,"pdf")){
return "book";
} else {
if((!((first_tag_icon == null)))){
return first_tag_icon;
} else {
if(cljs.core.truth_(frontend.util.entity.page_QMARK_(node_entity))){
return "file";
} else {
return "point-filled";

}
}
}
}
}
}
});
frontend.components.icon.get_node_icon_cp = (function frontend$components$icon$get_node_icon_cp(node_entity,opts){
var opts_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null),opts], 0));
var node_icon = (cljs.core.truth_(new cljs.core.Keyword(null,"link?","link?",-1241171248).cljs$core$IFn$_invoke$arity$1(opts))?"arrow-narrow-right":frontend.components.icon.get_node_icon(node_entity,opts));
if(cljs.core.truth_((function (){var or__5142__auto__ = clojure.string.blank_QMARK_(node_icon);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["hash",null,"letter-p",null,"point-filled",null,"file",null], null), null),node_icon);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"not-text-or-page?","not-text-or-page?",1103352804).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__5140__auto__;
}
}
})())){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon-cp-container.flex.items-center","div.icon-cp-container.flex.items-center",598158841),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(node_icon);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "inherit";
}
})()], null)], null),cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null))], 0)),frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(node_icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts_SINGLEQUOTE_,new cljs.core.Keyword(null,"not-text-or-page?","not-text-or-page?",1103352804),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"link?","link?",-1241171248),new cljs.core.Keyword(null,"ignore-current-icon?","ignore-current-icon?",-1279467710)], 0))], 0))], null);
}
});
frontend.components.icon.search_emojis = (function frontend$components$icon$search_emojis(q){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(module$node_modules$emoji_mart$dist$main.SearchIndex.search(q)),(function (result){
return promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(result));
}));
}));
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.icon !== 'undefined') && (typeof frontend.components.icon._STAR_tabler_icons !== 'undefined')){
} else {
frontend.components.icon._STAR_tabler_icons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.icon.get_tabler_icons = (function frontend$components$icon$get_tabler_icons(){
if(cljs.core.truth_(cljs.core.deref(frontend.components.icon._STAR_tabler_icons))){
return cljs.core.deref(frontend.components.icon._STAR_tabler_icons);
} else {
var result = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Ab 2",null,"Ab",null,"Ab Off",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return clojure.string.replace_first(clojure.string.replace(camel_snake_kebab.core.__GT_Camel_Snake_Case(cljs.core.name(k)),"_"," "),"Icon ","");
}),cljs.core.keys(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(module$node_modules$$tabler$icons_react$dist$cjs$tabler_icons_react_cjs))));
cljs.core.reset_BANG_(frontend.components.icon._STAR_tabler_icons,result);

return result;
}
});
frontend.components.icon.search_tabler_icons = (function frontend$components$icon$search_tabler_icons(q){
var G__38216 = frontend.components.icon.get_tabler_icons();
var G__38217 = q;
var G__38218 = new cljs.core.Keyword(null,"limit","limit",-1355822363);
var G__38219 = (100);
return (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$4 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$4(G__38216,G__38217,G__38218,G__38219) : frontend.search.fuzzy_search.call(null,G__38216,G__38217,G__38218,G__38219));
});
frontend.components.icon.search = (function frontend$components$icon$search(q,tab){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"emoji","emoji",1031230144)))?frontend.components.icon.search_tabler_icons(q):null)),(function (icons){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"icon","icon",1679606541)))?frontend.components.icon.search_emojis(q):null)),(function (emojis_SINGLEQUOTE_){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icons","icons",-297140977),icons,new cljs.core.Keyword(null,"emojis","emojis",-2098458463),emojis_SINGLEQUOTE_], null));
}));
}));
}));
});
frontend.components.icon.icons_row = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$icons_row(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.its.icons-row","div.its.icons-row",1841979735),items], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$icons_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38220 = cljs.core.first(args__31746__auto__);
var G__38221 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38220,G__38221) : io.factorhouse.hsx.core.obj_get.call(null,G__38220,G__38221));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"icons-row","icons-row",833883670,null),args__31746__auto__),frontend$components$icon$icons_row,args__31746__auto__,null);
}
};
var frontend$components$icon$icons_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38395__i = 0, G__38395__a = new Array(arguments.length -  0);
while (G__38395__i < G__38395__a.length) {G__38395__a[G__38395__i] = arguments[G__38395__i + 0]; ++G__38395__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38395__a,0,null);
} 
return frontend$components$icon$icons_row__delegate.call(this,args__31746__auto__);};
frontend$components$icon$icons_row.cljs$lang$maxFixedArity = 0;
frontend$components$icon$icons_row.cljs$lang$applyTo = (function (arglist__38396){
var args__31746__auto__ = cljs.core.seq(arglist__38396);
return frontend$components$icon$icons_row__delegate(args__31746__auto__);
});
frontend$components$icon$icons_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$icons_row__delegate;
return frontend$components$icon$icons_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38222 = comp__31745__auto__;
var G__38223 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38222,G__38223) : io.factorhouse.hsx.core.react_memo.call(null,G__38222,G__38223));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"icons-row");

return comp__31745__auto__;
})();
frontend.components.icon.icon_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$icon_cp(icon_SINGLEQUOTE_,p__38224){
var map__38225 = p__38224;
var map__38225__$1 = cljs.core.__destructure_map(map__38225);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38225__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38225__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-9.h-9.transition-opacity","button.w-9.h-9.transition-opacity",-1425828220),(function (){var temp__5825__auto__ = (function (){var G__38226 = icon_SINGLEQUOTE_;
if(typeof icon_SINGLEQUOTE_ === 'string'){
return clojure.string.replace(G__38226," ","");
} else {
return G__38226;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var icon_SINGLEQUOTE___$1 = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"tabler-icon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_SINGLEQUOTE___$1)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"title","title",636505583),icon_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__38227 = e;
var G__38228 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),new cljs.core.Keyword(null,"id","id",-1388402092),icon_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"name","name",1843675177),icon_SINGLEQUOTE___$1], null);
return (on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(G__38227,G__38228) : on_chosen.call(null,G__38227,G__38228));
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
var G__38229 = hover;
if((G__38229 == null)){
return null;
} else {
return cljs.core.reset_BANG_(G__38229,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),new cljs.core.Keyword(null,"id","id",-1388402092),icon_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"name","name",1843675177),icon_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"icon","icon",1679606541),icon_SINGLEQUOTE___$1], null));
}
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.List.EMPTY;
})], null);
} else {
return null;
}
})(),frontend.ui.icon(icon_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(24)], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$icon_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38230 = cljs.core.first(args__31746__auto__);
var G__38231 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38230,G__38231) : io.factorhouse.hsx.core.obj_get.call(null,G__38230,G__38231));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"icon-cp","icon-cp",1649858005,null),args__31746__auto__),frontend$components$icon$icon_cp,args__31746__auto__,null);
}
};
var frontend$components$icon$icon_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38397__i = 0, G__38397__a = new Array(arguments.length -  0);
while (G__38397__i < G__38397__a.length) {G__38397__a[G__38397__i] = arguments[G__38397__i + 0]; ++G__38397__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38397__a,0,null);
} 
return frontend$components$icon$icon_cp__delegate.call(this,args__31746__auto__);};
frontend$components$icon$icon_cp.cljs$lang$maxFixedArity = 0;
frontend$components$icon$icon_cp.cljs$lang$applyTo = (function (arglist__38398){
var args__31746__auto__ = cljs.core.seq(arglist__38398);
return frontend$components$icon$icon_cp__delegate(args__31746__auto__);
});
frontend$components$icon$icon_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$icon_cp__delegate;
return frontend$components$icon$icon_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38232 = comp__31745__auto__;
var G__38233 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38232,G__38233) : io.factorhouse.hsx.core.react_memo.call(null,G__38232,G__38233));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"icon-cp");

return comp__31745__auto__;
})();
frontend.components.icon.emoji_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$emoji_cp(p__38234,p__38235){
var map__38236 = p__38234;
var map__38236__$1 = cljs.core.__destructure_map(map__38236);
var emoji = map__38236__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__38237 = p__38235;
var map__38237__$1 = cljs.core.__destructure_map(map__38237);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38237__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38237__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-2xl.w-9.h-9.transition-opacity","button.text-2xl.w-9.h-9.transition-opacity",-472365443),(function (){var G__38238 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"key","key",-1516042587),(""+"emoji-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__38239 = e;
var G__38240 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(emoji,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"emoji","emoji",1031230144));
return (on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(G__38239,G__38240) : on_chosen.call(null,G__38239,G__38240));
}),(!((hover == null))),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.reset_BANG_(hover,emoji);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.List.EMPTY;
})], null)], 0))]);
return G__38238;
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em-emoji","em-emoji",1985182592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(1),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$emoji_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38241 = cljs.core.first(args__31746__auto__);
var G__38242 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38241,G__38242) : io.factorhouse.hsx.core.obj_get.call(null,G__38241,G__38242));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"emoji-cp","emoji-cp",1435461171,null),args__31746__auto__),frontend$components$icon$emoji_cp,args__31746__auto__,null);
}
};
var frontend$components$icon$emoji_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38399__i = 0, G__38399__a = new Array(arguments.length -  0);
while (G__38399__i < G__38399__a.length) {G__38399__a[G__38399__i] = arguments[G__38399__i + 0]; ++G__38399__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38399__a,0,null);
} 
return frontend$components$icon$emoji_cp__delegate.call(this,args__31746__auto__);};
frontend$components$icon$emoji_cp.cljs$lang$maxFixedArity = 0;
frontend$components$icon$emoji_cp.cljs$lang$applyTo = (function (arglist__38400){
var args__31746__auto__ = cljs.core.seq(arglist__38400);
return frontend$components$icon$emoji_cp__delegate(args__31746__auto__);
});
frontend$components$icon$emoji_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$emoji_cp__delegate;
return frontend$components$icon$emoji_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38243 = comp__31745__auto__;
var G__38244 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38243,G__38244) : io.factorhouse.hsx.core.react_memo.call(null,G__38243,G__38244));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"emoji-cp");

return comp__31745__auto__;
})();
frontend.components.icon.item_render = (function frontend$components$icon$item_render(item,opts){
if(((typeof item === 'string') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))))){
return frontend.components.icon.icon_cp(((typeof item === 'string')?item:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),opts);
} else {
return frontend.components.icon.emoji_cp(item,opts);
}
});
frontend.components.icon.item_render_key = (function frontend$components$icon$item_render_key(item,idx){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof item === 'string')?"tabler-icon":(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item)):"item"
)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = item;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return idx;
}
}
})()));
});
frontend.components.icon.keyed_item_render = (function frontend$components$icon$keyed_item_render(idx,item,opts){
return module$node_modules$react$index.cloneElement(frontend.components.icon.item_render(item,opts),({"key": frontend.components.icon.item_render_key(item,idx)}));
});
frontend.components.icon.pane_section = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$components$icon$pane_section__delegate = function (label,items,p__38245){
var map__38246 = p__38245;
var map__38246__$1 = cljs.core.__destructure_map(map__38246);
var opts = map__38246__$1;
var searching_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38246__$1,new cljs.core.Keyword(null,"searching?","searching?",1889514722));
var virtual_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38246__$1,new cljs.core.Keyword(null,"virtual-list?","virtual-list?",-1922275028),true);
var _STAR_el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane-section","div.pane-section",-1292163882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_ref,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-virtual-list","has-virtual-list",-939554329),virtual_list_QMARK_,new cljs.core.Keyword(null,"searching-result","searching-result",-38269107),searching_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hd.px-1.pb-1.leading-none","div.hd.px-1.pb-1.leading-none",525235001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-xs.font-medium.text-gray-07.dark:opacity-80","strong.text-xs.font-medium.text-gray-07.dark:opacity-80",552431241),label], null)], null),(cljs.core.truth_(virtual_list_QMARK_)?(function (){var items_per_row = (9);
var rows = cljs.core.vec(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(items_per_row,items));
return frontend.ui.virtualized_list((function (){var G__38247 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total-count","total-count",-1999441386),cljs.core.count(rows),new cljs.core.Keyword(null,"item-content","item-content",1656730280),(function (idx){
return frontend.components.icon.icons_row(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (item_idx,item){
return frontend.components.icon.keyed_item_render(item_idx,item,opts);
}),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(rows,idx,cljs.core.PersistentVector.EMPTY)));
})], null);
if(cljs.core.truth_(searching_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38247,new cljs.core.Keyword(null,"custom-scroll-parent","custom-scroll-parent",1031485618),(function (){var G__38248 = logseq.shui.hooks.deref(_STAR_el_ref);
if((G__38248 == null)){
return null;
} else {
return G__38248.closest(".bd-scroll");
}
})());
} else {
return G__38247;
}
})());
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.its","div.its",317336953),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return frontend.components.icon.keyed_item_render(idx,item,opts);
}),items)], null))], null);
};
var frontend$components$icon$pane_section = function (label,items,var_args){
var p__38245 = null;
if (arguments.length > 2) {
var G__38401__i = 0, G__38401__a = new Array(arguments.length -  2);
while (G__38401__i < G__38401__a.length) {G__38401__a[G__38401__i] = arguments[G__38401__i + 2]; ++G__38401__i;}
  p__38245 = new cljs.core.IndexedSeq(G__38401__a,0,null);
} 
return frontend$components$icon$pane_section__delegate.call(this,label,items,p__38245);};
frontend$components$icon$pane_section.cljs$lang$maxFixedArity = 2;
frontend$components$icon$pane_section.cljs$lang$applyTo = (function (arglist__38402){
var label = cljs.core.first(arglist__38402);
arglist__38402 = cljs.core.next(arglist__38402);
var items = cljs.core.first(arglist__38402);
var p__38245 = cljs.core.rest(arglist__38402);
return frontend$components$icon$pane_section__delegate(label,items,p__38245);
});
frontend$components$icon$pane_section.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$pane_section__delegate;
return frontend$components$icon$pane_section;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$icon$pane_section__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38249 = cljs.core.first(args__31746__auto__);
var G__38250 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38249,G__38250) : io.factorhouse.hsx.core.obj_get.call(null,G__38249,G__38250));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pane-section","pane-section",-674295263,null),args__31746__auto__),frontend$components$icon$pane_section,args__31746__auto__,null);
}
};
var frontend$components$icon$pane_section = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38403__i = 0, G__38403__a = new Array(arguments.length -  0);
while (G__38403__i < G__38403__a.length) {G__38403__a[G__38403__i] = arguments[G__38403__i + 0]; ++G__38403__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38403__a,0,null);
} 
return frontend$components$icon$pane_section__delegate.call(this,args__31746__auto__);};
frontend$components$icon$pane_section.cljs$lang$maxFixedArity = 0;
frontend$components$icon$pane_section.cljs$lang$applyTo = (function (arglist__38404){
var args__31746__auto__ = cljs.core.seq(arglist__38404);
return frontend$components$icon$pane_section__delegate(args__31746__auto__);
});
frontend$components$icon$pane_section.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$pane_section__delegate;
return frontend$components$icon$pane_section;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38251 = comp__31745__auto__;
var G__38252 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38251,G__38252) : io.factorhouse.hsx.core.react_memo.call(null,G__38251,G__38252));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pane-section");

return comp__31745__auto__;
})();
frontend.components.icon.normalize_tabs = (function frontend$components$icon$normalize_tabs(tabs,default_tab){
var tabs__$1 = (function (){var or__5142__auto__ = tabs;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","tab-all","icon/tab-all",-237389298)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","tab-emojis","icon/tab-emojis",-1889512558)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","tab-icons","icon/tab-icons",905160285)], 0))], null)], null);
}
})();
var default_tab__$1 = (function (){var or__5142__auto__ = default_tab;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.ffirst(tabs__$1);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"all","all",892129742);
}
}
})();
var default_tab__$2 = (cljs.core.truth_(cljs.core.some((function (p1__38253_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__38253_SHARP_),default_tab__$1);
}),tabs__$1))?default_tab__$1:cljs.core.ffirst(tabs__$1));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs__$1,new cljs.core.Keyword(null,"default-tab","default-tab",-566872037),default_tab__$2,new cljs.core.Keyword(null,"has-icon-tab?","has-icon-tab?",-1462839933),cljs.core.boolean$(cljs.core.some((function (p1__38254_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__38254_SHARP_),new cljs.core.Keyword(null,"icon","icon",1679606541));
}),tabs__$1))], null);
});
frontend.components.icon.emoji_sections = (function frontend$components$icon$emoji_sections(emojis_STAR_,used_items,show_used_QMARK_){
var emoji_used_items = ((cljs.core.seq(used_items))?cljs.core.filterv((function (p1__38255_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__38255_SHARP_));
}),used_items):null);
var sections = (function (){var G__38256 = cljs.core.PersistentVector.EMPTY;
var G__38256__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = show_used_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(emoji_used_items);
} else {
return and__5140__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__38256,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","frequently-used","ui/frequently-used",1577026133)], 0)),new cljs.core.Keyword(null,"items","items",1031954938),emoji_used_items,new cljs.core.Keyword(null,"virtual-list?","virtual-list?",-1922275028),false], null)):G__38256);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__38256__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","emojis-count","icon/emojis-count",148359026),cljs.core.count(emojis_STAR_)], 0)),new cljs.core.Keyword(null,"items","items",1031954938),emojis_STAR_,new cljs.core.Keyword(null,"virtual-list?","virtual-list?",-1922275028),true], null));

})();
return sections;
});
frontend.components.icon.get_used_items = (function frontend$components$icon$get_used_items(){
return frontend.storage.get(new cljs.core.Keyword("ui","ls-icons-used","ui/ls-icons-used",750017965));
});
frontend.components.icon.add_used_item_BANG_ = (function frontend$components$icon$add_used_item_BANG_(m){
var s = (function (){var G__38259 = (function (){var or__5142__auto__ = frontend.components.icon.get_used_items();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var G__38259__$1 = (((G__38259 == null))?null:cljs.core.take.cljs$core$IFn$_invoke$arity$2((24),G__38259));
var G__38259__$2 = (((G__38259__$1 == null))?null:logseq.common.util.distinct_by((function (p1__38257_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__38257_SHARP_))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38257_SHARP_)));
}),G__38259__$1));
var G__38259__$3 = (((G__38259__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38258_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,p1__38258_SHARP_);
}),G__38259__$2));
if((G__38259__$3 == null)){
return null;
} else {
return cljs.core.cons(m,G__38259__$3);
}
})();
return frontend.storage.set(new cljs.core.Keyword("ui","ls-icons-used","ui/ls-icons-used",750017965),s);
});
frontend.components.icon.emojis_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$emojis_cp(emojis_STAR_,opts){
var sections = frontend.components.icon.emoji_sections(emojis_STAR_,frontend.components.icon.get_used_items(),new cljs.core.Keyword(null,"show-used?","show-used?",4329186).cljs$core$IFn$_invoke$arity$1(opts));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-col.gap-1","div.flex.flex-1.flex-col.gap-1",742206800),(function (){var iter__5628__auto__ = (function frontend$components$icon$emojis_cp_$_iter__38260(s__38261){
return (new cljs.core.LazySeq(null,(function (){
var s__38261__$1 = s__38261;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38261__$1);
if(temp__5825__auto__){
var s__38261__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38261__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38261__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38263 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38262 = (0);
while(true){
if((i__38262 < size__5627__auto__)){
var map__38264 = cljs.core._nth(c__5626__auto__,i__38262);
var map__38264__$1 = cljs.core.__destructure_map(map__38264);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38264__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38264__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var virtual_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38264__$1,new cljs.core.Keyword(null,"virtual-list?","virtual-list?",-1922275028));
cljs.core.chunk_append(b__38263,frontend.components.icon.pane_section(title,items,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"virtual-list?","virtual-list?",-1922275028),virtual_list_QMARK_)));

var G__38405 = (i__38262 + (1));
i__38262 = G__38405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38263),frontend$components$icon$emojis_cp_$_iter__38260(cljs.core.chunk_rest(s__38261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38263),null);
}
} else {
var map__38265 = cljs.core.first(s__38261__$2);
var map__38265__$1 = cljs.core.__destructure_map(map__38265);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38265__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38265__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var virtual_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38265__$1,new cljs.core.Keyword(null,"virtual-list?","virtual-list?",-1922275028));
return cljs.core.cons(frontend.components.icon.pane_section(title,items,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"virtual-list?","virtual-list?",-1922275028),virtual_list_QMARK_)),frontend$components$icon$emojis_cp_$_iter__38260(cljs.core.rest(s__38261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(sections);
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$emojis_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38266 = cljs.core.first(args__31746__auto__);
var G__38267 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38266,G__38267) : io.factorhouse.hsx.core.obj_get.call(null,G__38266,G__38267));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"emojis-cp","emojis-cp",608959402,null),args__31746__auto__),frontend$components$icon$emojis_cp,args__31746__auto__,null);
}
};
var frontend$components$icon$emojis_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38406__i = 0, G__38406__a = new Array(arguments.length -  0);
while (G__38406__i < G__38406__a.length) {G__38406__a[G__38406__i] = arguments[G__38406__i + 0]; ++G__38406__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38406__a,0,null);
} 
return frontend$components$icon$emojis_cp__delegate.call(this,args__31746__auto__);};
frontend$components$icon$emojis_cp.cljs$lang$maxFixedArity = 0;
frontend$components$icon$emojis_cp.cljs$lang$applyTo = (function (arglist__38407){
var args__31746__auto__ = cljs.core.seq(arglist__38407);
return frontend$components$icon$emojis_cp__delegate(args__31746__auto__);
});
frontend$components$icon$emojis_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$emojis_cp__delegate;
return frontend$components$icon$emojis_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38268 = comp__31745__auto__;
var G__38269 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38268,G__38269) : io.factorhouse.hsx.core.react_memo.call(null,G__38268,G__38269));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"emojis-cp");

return comp__31745__auto__;
})();
frontend.components.icon.icons_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$icons_cp(icons,opts){
return frontend.components.icon.pane_section(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","icons-count","icon/icons-count",-103706035),cljs.core.count(icons)], 0)),icons,opts);
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$icons_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38270 = cljs.core.first(args__31746__auto__);
var G__38271 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38270,G__38271) : io.factorhouse.hsx.core.obj_get.call(null,G__38270,G__38271));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"icons-cp","icons-cp",708552955,null),args__31746__auto__),frontend$components$icon$icons_cp,args__31746__auto__,null);
}
};
var frontend$components$icon$icons_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38408__i = 0, G__38408__a = new Array(arguments.length -  0);
while (G__38408__i < G__38408__a.length) {G__38408__a[G__38408__i] = arguments[G__38408__i + 0]; ++G__38408__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38408__a,0,null);
} 
return frontend$components$icon$icons_cp__delegate.call(this,args__31746__auto__);};
frontend$components$icon$icons_cp.cljs$lang$maxFixedArity = 0;
frontend$components$icon$icons_cp.cljs$lang$applyTo = (function (arglist__38409){
var args__31746__auto__ = cljs.core.seq(arglist__38409);
return frontend$components$icon$icons_cp__delegate(args__31746__auto__);
});
frontend$components$icon$icons_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$icons_cp__delegate;
return frontend$components$icon$icons_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38272 = comp__31745__auto__;
var G__38273 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38272,G__38273) : io.factorhouse.hsx.core.react_memo.call(null,G__38272,G__38273));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"icons-cp");

return comp__31745__auto__;
})();
frontend.components.icon.all_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$all_cp(opts){
var used_items = frontend.components.icon.get_used_items();
var emoji_items = cljs.core.take.cljs$core$IFn$_invoke$arity$2((32),frontend.components.icon.emojis);
var icon_items = cljs.core.take.cljs$core$IFn$_invoke$arity$2((48),frontend.components.icon.get_tabler_icons());
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"virtual-list?","virtual-list?",-1922275028),false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.all-pane.pb-10","div.all-pane.pb-10",369025619),((cljs.core.seq(used_items))?frontend.components.icon.pane_section(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","frequently-used","ui/frequently-used",1577026133)], 0)),used_items,opts__$1):null),frontend.components.icon.pane_section(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","emojis-count","icon/emojis-count",148359026),cljs.core.count(frontend.components.icon.emojis)], 0)),emoji_items,opts__$1),frontend.components.icon.pane_section(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","icons-count","icon/icons-count",-103706035),cljs.core.count(frontend.components.icon.get_tabler_icons())], 0)),icon_items,opts__$1)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$all_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38274 = cljs.core.first(args__31746__auto__);
var G__38275 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38274,G__38275) : io.factorhouse.hsx.core.obj_get.call(null,G__38274,G__38275));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"all-cp","all-cp",-1082694585,null),args__31746__auto__),frontend$components$icon$all_cp,args__31746__auto__,null);
}
};
var frontend$components$icon$all_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38410__i = 0, G__38410__a = new Array(arguments.length -  0);
while (G__38410__i < G__38410__a.length) {G__38410__a[G__38410__i] = arguments[G__38410__i + 0]; ++G__38410__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38410__a,0,null);
} 
return frontend$components$icon$all_cp__delegate.call(this,args__31746__auto__);};
frontend$components$icon$all_cp.cljs$lang$maxFixedArity = 0;
frontend$components$icon$all_cp.cljs$lang$applyTo = (function (arglist__38411){
var args__31746__auto__ = cljs.core.seq(arglist__38411);
return frontend$components$icon$all_cp__delegate(args__31746__auto__);
});
frontend$components$icon$all_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$all_cp__delegate;
return frontend$components$icon$all_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38276 = comp__31745__auto__;
var G__38277 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38276,G__38277) : io.factorhouse.hsx.core.react_memo.call(null,G__38276,G__38277));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"all-cp");

return comp__31745__auto__;
})();
frontend.components.icon.tab_observer = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$tab_observer(tab,p__38278){
var map__38279 = p__38278;
var map__38279__$1 = cljs.core.__destructure_map(map__38279);
var reset_q_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38279__$1,new cljs.core.Keyword(null,"reset-q!","reset-q!",1334474852));
logseq.shui.hooks.use_effect_BANG_((function (){
return (reset_q_BANG_.cljs$core$IFn$_invoke$arity$0 ? reset_q_BANG_.cljs$core$IFn$_invoke$arity$0() : reset_q_BANG_.call(null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab], null));

return null;
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$tab_observer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38280 = cljs.core.first(args__31746__auto__);
var G__38281 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38280,G__38281) : io.factorhouse.hsx.core.obj_get.call(null,G__38280,G__38281));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"tab-observer","tab-observer",309320116,null),args__31746__auto__),frontend$components$icon$tab_observer,args__31746__auto__,null);
}
};
var frontend$components$icon$tab_observer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38412__i = 0, G__38412__a = new Array(arguments.length -  0);
while (G__38412__i < G__38412__a.length) {G__38412__a[G__38412__i] = arguments[G__38412__i + 0]; ++G__38412__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38412__a,0,null);
} 
return frontend$components$icon$tab_observer__delegate.call(this,args__31746__auto__);};
frontend$components$icon$tab_observer.cljs$lang$maxFixedArity = 0;
frontend$components$icon$tab_observer.cljs$lang$applyTo = (function (arglist__38413){
var args__31746__auto__ = cljs.core.seq(arglist__38413);
return frontend$components$icon$tab_observer__delegate(args__31746__auto__);
});
frontend$components$icon$tab_observer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$tab_observer__delegate;
return frontend$components$icon$tab_observer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38282 = comp__31745__auto__;
var G__38283 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38282,G__38283) : io.factorhouse.hsx.core.react_memo.call(null,G__38282,G__38283));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"tab-observer");

return comp__31745__auto__;
})();
frontend.components.icon.select_observer = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$select_observer(_STAR_input_ref){
var _STAR_el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_items_ref = (function (){var G__38286 = cljs.core.PersistentVector.EMPTY;
return (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__38286) : logseq.shui.hooks.use_ref.call(null,G__38286));
})();
var _STAR_current_ref = (function (){var G__38287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null);
return (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__38287) : logseq.shui.hooks.use_ref.call(null,G__38287));
})();
var set_current_BANG_ = (function (idx,node){
return (_STAR_current_ref.current = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,node], null));
});
var get_cnt = (function (){
var G__38288 = logseq.shui.hooks.deref(_STAR_el_ref);
if((G__38288 == null)){
return null;
} else {
return G__38288.closest(".cp__emoji-icon-picker");
}
});
var focus_BANG_ = (function (idx,dir){
var items = logseq.shui.hooks.deref(_STAR_items_ref);
var popup = (function (){var G__38289 = get_cnt();
if((G__38289 == null)){
return null;
} else {
return G__38289.parentNode;
}
})();
var idx__$1 = (function (){var n = idx;
while(true){
if(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(items,n,null) === false){
var G__38418 = (n + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"prev","prev",-1597069226)))?(-1):(1)));
n = G__38418;
continue;
} else {
return n;
}
break;
}
})();
var temp__5823__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(items,idx__$1,null);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
node.focus(({"preventScroll": true, "focusVisible": true}));

node.scrollIntoView(({"block": "center"}));

if(cljs.core.truth_(popup)){
(popup.scrollTop = (0));
} else {
}

return set_current_BANG_(idx__$1,node);
} else {
logseq.shui.hooks.deref(_STAR_input_ref).focus();

return set_current_BANG_((-1),null);
}
});
var down_handler_BANG_ = logseq.shui.hooks.use_callback((function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),e.keyCode)){
var G__38290 = cljs.core.second(logseq.shui.hooks.deref(_STAR_current_ref));
if((G__38290 == null)){
return null;
} else {
return G__38290.click();
}
} else {
var vec__38291 = logseq.shui.hooks.deref(_STAR_current_ref);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38291,(0),null);
var _node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38291,(1),null);
var G__38294 = e.keyCode;
switch (G__38294) {
case (37):
return focus_BANG_((idx - (1)),new cljs.core.Keyword(null,"prev","prev",-1597069226));

break;
case (9):
case (39):
return focus_BANG_((idx + (1)),new cljs.core.Keyword(null,"next","next",-117701485));

break;
case (38):
focus_BANG_((idx - (9)),new cljs.core.Keyword(null,"prev","prev",-1597069226));

return frontend.util.stop(e);

break;
case (40):
focus_BANG_((idx + (9)),new cljs.core.Keyword(null,"next","next",-117701485));

return frontend.util.stop(e);

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
}
}),cljs.core.PersistentVector.EMPTY);
logseq.shui.hooks.use_effect_BANG_((function (){
var sections_38424 = get_cnt().querySelectorAll(".pane-section");
var items_38425 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38284_SHARP_){
var G__38295 = p1__38284_SHARP_.querySelectorAll(".its > button");
var G__38295__$1 = (((G__38295 == null))?null:Array.from(G__38295));
if((G__38295__$1 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__38295__$1);
}
}),sections_38424);
var step_38426 = (9);
var items_38427__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38285_SHARP_){
var count = cljs.core.count(p1__38285_SHARP_);
var m = cljs.core.mod(count,step_38426);
if((m > (0))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__38285_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((step_38426 - m),false));
} else {
return p1__38285_SHARP_;
}
}),items_38425);
(_STAR_items_ref.current = cljs.core.flatten(items_38427__$1));

focus_BANG_((0),new cljs.core.Keyword(null,"next","next",-117701485));

var cnt = get_cnt();
cnt.addEventListener("keydown",down_handler_BANG_,false);

return (function (){
return cnt.removeEventListener("keydown",down_handler_BANG_);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.absolute.hidden","span.absolute.hidden",-1815040602),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_ref], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$select_observer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38296 = cljs.core.first(args__31746__auto__);
var G__38297 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38296,G__38297) : io.factorhouse.hsx.core.obj_get.call(null,G__38296,G__38297));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"select-observer","select-observer",-698959744,null),args__31746__auto__),frontend$components$icon$select_observer,args__31746__auto__,null);
}
};
var frontend$components$icon$select_observer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38436__i = 0, G__38436__a = new Array(arguments.length -  0);
while (G__38436__i < G__38436__a.length) {G__38436__a[G__38436__i] = arguments[G__38436__i + 0]; ++G__38436__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38436__a,0,null);
} 
return frontend$components$icon$select_observer__delegate.call(this,args__31746__auto__);};
frontend$components$icon$select_observer.cljs$lang$maxFixedArity = 0;
frontend$components$icon$select_observer.cljs$lang$applyTo = (function (arglist__38437){
var args__31746__auto__ = cljs.core.seq(arglist__38437);
return frontend$components$icon$select_observer__delegate(args__31746__auto__);
});
frontend$components$icon$select_observer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$select_observer__delegate;
return frontend$components$icon$select_observer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38298 = comp__31745__auto__;
var G__38299 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38298,G__38299) : io.factorhouse.hsx.core.react_memo.call(null,G__38298,G__38299));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"select-observer");

return comp__31745__auto__;
})();
frontend.components.icon.color_picker = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$color_picker(_STAR_color,on_select_BANG_){
var vec__38300 = logseq.shui.hooks.use_state(cljs.core.deref(_STAR_color));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38300,(0),null);
var set_color_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38300,(1),null);
var vec__38303 = logseq.shui.hooks.use_state(false);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38303,(0),null);
var set_open_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38303,(1),null);
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var content_fn = (function (){
var colors = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#6e7b8b","#5e69d2","#00b5ed","#00b55b","#f2be00","#e47a00","#f38e81","#fb434c",null], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-picker-presets.p-2","div.color-picker-presets.p-2",1248063739),(function (){var iter__5628__auto__ = (function frontend$components$icon$color_picker_$_iter__38306(s__38307){
return (new cljs.core.LazySeq(null,(function (){
var s__38307__$1 = s__38307;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38307__$1);
if(temp__5825__auto__){
var s__38307__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38307__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38307__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38309 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38308 = (0);
while(true){
if((i__38308 < size__5627__auto__)){
var c = cljs.core._nth(c__5626__auto__,i__38308);
cljs.core.chunk_append(b__38309,(function (){var G__38310 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38308,c,c__5626__auto__,size__5627__auto__,b__38309,s__38307__$2,temp__5825__auto__,colors,vec__38300,color,set_color_BANG_,vec__38303,open_QMARK_,set_open_BANG_,_STAR_el){
return (function (){
(set_color_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_color_BANG_.cljs$core$IFn$_invoke$arity$1(c) : set_color_BANG_.call(null,c));

var G__38312_38442 = on_select_BANG_;
if((G__38312_38442 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__38312_38442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
}

return (set_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_open_BANG_.call(null,false));
});})(i__38308,c,c__5626__auto__,size__5627__auto__,b__38309,s__38307__$2,temp__5825__auto__,colors,vec__38300,color,set_color_BANG_,vec__38303,open_QMARK_,set_open_BANG_,_STAR_el))
,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"class","class",-2030961996),"it",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),c], null)], null);
var G__38311 = (cljs.core.truth_(c)?"":logseq.shui.ui.tabler_icon("minus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"scale-75 opacity-70"], null)));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38310,G__38311) : logseq.shui.ui.button.call(null,G__38310,G__38311));
})());

var G__38445 = (i__38308 + (1));
i__38308 = G__38445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38309),frontend$components$icon$color_picker_$_iter__38306(cljs.core.chunk_rest(s__38307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38309),null);
}
} else {
var c = cljs.core.first(s__38307__$2);
return cljs.core.cons((function (){var G__38313 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,s__38307__$2,temp__5825__auto__,colors,vec__38300,color,set_color_BANG_,vec__38303,open_QMARK_,set_open_BANG_,_STAR_el){
return (function (){
(set_color_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_color_BANG_.cljs$core$IFn$_invoke$arity$1(c) : set_color_BANG_.call(null,c));

var G__38315_38448 = on_select_BANG_;
if((G__38315_38448 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__38315_38448,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
}

return (set_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_open_BANG_.call(null,false));
});})(c,s__38307__$2,temp__5825__auto__,colors,vec__38300,color,set_color_BANG_,vec__38303,open_QMARK_,set_open_BANG_,_STAR_el))
,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"class","class",-2030961996),"it",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),c], null)], null);
var G__38314 = (cljs.core.truth_(c)?"":logseq.shui.ui.tabler_icon("minus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"scale-75 opacity-70"], null)));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38313,G__38314) : logseq.shui.ui.button.call(null,G__38313,G__38314));
})(),frontend$components$icon$color_picker_$_iter__38306(cljs.core.rest(s__38307__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(colors);
})()], null);
});
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto___38449 = (function (){var G__38316 = logseq.shui.hooks.deref(_STAR_el);
if((G__38316 == null)){
return null;
} else {
return G__38316.closest(".cp__emoji-icon-picker");
}
})();
if(cljs.core.truth_(temp__5825__auto___38449)){
var picker_38454 = temp__5825__auto___38449;
var color_38455__$1 = ((clojure.string.blank_QMARK_(color))?"inherit":color);
picker_38454.style.setProperty("--ls-color-icon-preset",color_38455__$1);

frontend.storage.set(new cljs.core.Keyword(null,"ls-icon-color-preset","ls-icon-color-preset",-574354162),color_38455__$1);
} else {
}

return cljs.core.reset_BANG_(_STAR_color,color);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [color], null));

var G__38317 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"onOpenChange","onOpenChange",-675762944),(function (a){
return (set_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_open_BANG_.cljs$core$IFn$_invoke$arity$1(a) : set_open_BANG_.call(null,a));
})], null);
var G__38318 = (function (){var G__38320 = (function (){var G__38321 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"class","class",-2030961996),"color-picker",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534)], null);
var G__38322 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5142__auto__ = color;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "inherit";
}
})()], null)], null),logseq.shui.ui.tabler_icon("palette")], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38321,G__38322) : logseq.shui.ui.button.call(null,G__38321,G__38322));
})();
return (logseq.shui.ui.popover_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popover_trigger.cljs$core$IFn$_invoke$arity$1(G__38320) : logseq.shui.ui.popover_trigger.call(null,G__38320));
})();
var G__38319 = (function (){var G__38323 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"icons-color-picker","icons-color-picker",-691438129)], null);
var G__38324 = content_fn();
return (logseq.shui.ui.popover_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.popover_content.cljs$core$IFn$_invoke$arity$2(G__38323,G__38324) : logseq.shui.ui.popover_content.call(null,G__38323,G__38324));
})();
return (logseq.shui.ui.popover.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popover.cljs$core$IFn$_invoke$arity$3(G__38317,G__38318,G__38319) : logseq.shui.ui.popover.call(null,G__38317,G__38318,G__38319));
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$color_picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38325 = cljs.core.first(args__31746__auto__);
var G__38326 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38325,G__38326) : io.factorhouse.hsx.core.obj_get.call(null,G__38325,G__38326));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"color-picker","color-picker",-1543597516,null),args__31746__auto__),frontend$components$icon$color_picker,args__31746__auto__,null);
}
};
var frontend$components$icon$color_picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38460__i = 0, G__38460__a = new Array(arguments.length -  0);
while (G__38460__i < G__38460__a.length) {G__38460__a[G__38460__i] = arguments[G__38460__i + 0]; ++G__38460__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38460__a,0,null);
} 
return frontend$components$icon$color_picker__delegate.call(this,args__31746__auto__);};
frontend$components$icon$color_picker.cljs$lang$maxFixedArity = 0;
frontend$components$icon$color_picker.cljs$lang$applyTo = (function (arglist__38462){
var args__31746__auto__ = cljs.core.seq(arglist__38462);
return frontend$components$icon$color_picker__delegate(args__31746__auto__);
});
frontend$components$icon$color_picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$color_picker__delegate;
return frontend$components$icon$color_picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38327 = comp__31745__auto__;
var G__38328 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38327,G__38328) : io.factorhouse.hsx.core.react_memo.call(null,G__38327,G__38328));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"color-picker");

return comp__31745__auto__;
})();
frontend.components.icon.icon_search_keydown = (function frontend$components$icon$icon_search_keydown(e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowRight",null,"ArrowLeft",null], null), null),e.key)){
return frontend.util.stop_propagation(e);
} else {
return null;
}
});
frontend.components.icon.icon_search = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$icon_search(p__38330){
var map__38331 = p__38330;
var map__38331__$1 = cljs.core.__destructure_map(map__38331);
var opts = map__38331__$1;
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var del_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331__$1,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362));
var color_auto_chosen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331__$1,new cljs.core.Keyword(null,"color-auto-chosen?","color-auto-chosen?",841472508));
var icon_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331__$1,new cljs.core.Keyword(null,"icon-value","icon-value",-510636889));
var vec__38332 = logseq.shui.hooks.use_state("");
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38332,(0),null);
var set_q_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38332,(1),null);
var vec__38335 = logseq.shui.hooks.use_state(null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38335,(0),null);
var set_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38335,(1),null);
var vec__38338 = logseq.shui.hooks.use_state(false);
var select_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38338,(0),null);
var set_select_mode_QMARK__BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38338,(1),null);
var vec__38341 = logseq.shui.hooks.use_state(null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38341,(0),null);
var set_tab_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38341,(1),null);
var _STAR_color = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.storage.get(new cljs.core.Keyword(null,"ls-icon-color-preset","ls-icon-color-preset",-574354162)));
}),cljs.core.PersistentVector.EMPTY);
var _STAR_input_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_result_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var map__38344 = frontend.components.icon.normalize_tabs(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default-tab","default-tab",-566872037).cljs$core$IFn$_invoke$arity$1(opts));
var map__38344__$1 = cljs.core.__destructure_map(map__38344);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38344__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var default_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38344__$1,new cljs.core.Keyword(null,"default-tab","default-tab",-566872037));
var has_icon_tab_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38344__$1,new cljs.core.Keyword(null,"has-icon-tab?","has-icon-tab?",-1462839933));
var show_tabs_QMARK_ = ((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"show-tabs?","show-tabs?",624498070)))?new cljs.core.Keyword(null,"show-tabs?","show-tabs?",624498070).cljs$core$IFn$_invoke$arity$1(opts):true);
var tab__$1 = (((((tab == null)) || (cljs.core.not(cljs.core.some((function (p1__38329_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__38329_SHARP_),tab);
}),tabs)))))?default_tab:tab);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (e,m){
var icon_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358));
var m__$1 = ((((icon_QMARK_) && ((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_color)))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref(_STAR_color)):m);
var and__5140__auto___38469 = on_chosen;
if(cljs.core.truth_(and__5140__auto___38469)){
(on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(e,m__$1) : on_chosen.call(null,e,m__$1));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m__$1))){
return frontend.components.icon.add_used_item_BANG_(m__$1);
} else {
return null;
}
}));
var reset_q_BANG_ = (function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_input_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
(set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_q_BANG_.call(null,""));

var G__38345_38470 = cljs.core.PersistentArrayMap.EMPTY;
(set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(G__38345_38470) : set_result_BANG_.call(null,G__38345_38470));

(set_select_mode_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_select_mode_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_select_mode_QMARK__BANG_.call(null,false));

(input.value = "");

var G__38346 = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(document.activeElement,input)){
input.focus();
} else {
}

return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(logseq.shui.hooks.deref(_STAR_result_ref),(0),false);
});
return (frontend.util.schedule.cljs$core$IFn$_invoke$arity$1 ? frontend.util.schedule.cljs$core$IFn$_invoke$arity$1(G__38346) : frontend.util.schedule.call(null,G__38346));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tab__$1,default_tab)){
return (set_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tab_BANG_.cljs$core$IFn$_invoke$arity$1(tab__$1) : set_tab_BANG_.call(null,tab__$1));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab__$1,default_tab], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__emoji-icon-picker","div.cp__emoji-icon-picker",-827090219),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-keep-selection","data-keep-selection",-2035432191),true,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),frontend.components.icon.icon_search_keydown], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hd.bg-popover","div.hd.bg-popover",841501818),frontend.components.icon.tab_observer(tab__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-q!","reset-q!",1334474852),reset_q_BANG_], null)),(cljs.core.truth_(select_mode_QMARK_)?frontend.components.icon.select_observer(_STAR_input_ref):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-input","div.search-input",959718150),logseq.shui.ui.tabler_icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)),(function (){var G__38347 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_input_ref,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var G__38348 = tab__$1;
var G__38348__$1 = (((G__38348 instanceof cljs.core.Keyword))?G__38348.fqn:null);
switch (G__38348__$1) {
case "emoji":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","search-emojis","icon/search-emojis",1661462551)], 0));

break;
case "icon":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","search-icons","icon/search-icons",265378466)], 0));

break;
default:
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","search-all","icon/search-all",795893294)], 0));

}
})(),new cljs.core.Keyword(null,"default-value","default-value",232220170),"",new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return (set_select_mode_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_select_mode_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_select_mode_QMARK__BANG_.call(null,false));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__38349 = e.keyCode;
switch (G__38349) {
case (27):
frontend.util.stop(e);

if(clojure.string.blank_QMARK_(q)){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
} else {
return reset_q_BANG_();
}

break;
case (38):
return frontend.util.stop(e);

break;
case (9):
case (40):
(set_select_mode_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_select_mode_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_select_mode_QMARK__BANG_.call(null,true));

return frontend.util.stop(e);

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),goog.functions.debounce((function (e){
var q_SINGLEQUOTE_ = frontend.util.evalue(e);
(set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1(q_SINGLEQUOTE_) : set_q_BANG_.call(null,q_SINGLEQUOTE_));

(set_select_mode_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_select_mode_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_select_mode_QMARK__BANG_.call(null,false));

if(clojure.string.blank_QMARK_(q_SINGLEQUOTE_)){
var G__38350 = cljs.core.PersistentArrayMap.EMPTY;
return (set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(G__38350) : set_result_BANG_.call(null,G__38350));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.icon.search(q_SINGLEQUOTE_,tab__$1)),(function (result__$1){
return promesa.protocols._promise((set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(result__$1) : set_result_BANG_.call(null,result__$1)));
}));
}));
}
}),(200))], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__38347) : logseq.shui.ui.input.call(null,G__38347));
})(),((clojure.string.blank_QMARK_(q))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.x","a.x",-211019252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_q_BANG_], null),logseq.shui.ui.tabler_icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null))], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bd.bd-scroll","div.bd.bd-scroll",2034907389),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_result_ref,new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__5142__auto__ = (function (){var G__38351 = tab__$1;
if((G__38351 == null)){
return null;
} else {
return cljs.core.name(G__38351);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "other";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content-pane","div.content-pane",769981393),((cljs.core.seq(result))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-col.gap-1.search-result","div.flex.flex-1.flex-col.gap-1.search-result",761669577),(function (){var matched = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"emojis","emojis",-2098458463).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(result));
if(cljs.core.seq(matched)){
return frontend.components.icon.pane_section(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","matched-count","icon/matched-count",-1968912015),cljs.core.count(matched)], 0)),matched,opts__$1);
} else {
return null;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-col.gap-1","div.flex.flex-1.flex-col.gap-1",742206800),(function (){var G__38352 = tab__$1;
var G__38352__$1 = (((G__38352 instanceof cljs.core.Keyword))?G__38352.fqn:null);
switch (G__38352__$1) {
case "emoji":
return frontend.components.icon.emojis_cp(frontend.components.icon.emojis,opts__$1);

break;
case "icon":
return frontend.components.icon.icons_cp(frontend.components.icon.get_tabler_icons(),opts__$1);

break;
default:
return frontend.components.icon.all_cp(opts__$1);

}
})()], null))], null)], null),(cljs.core.truth_((function (){var or__5142__auto__ = show_tabs_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = del_btn_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = has_icon_tab_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"emoji","emoji",1031230144),tab__$1);
} else {
return and__5140__auto__;
}
}
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ft","div.ft",883326131),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(show_tabs_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-row.items-center.gap-2","div.flex.flex-1.flex-row.items-center.gap-2",-2117646962),(function (){var iter__5628__auto__ = (function frontend$components$icon$icon_search_$_iter__38353(s__38354){
return (new cljs.core.LazySeq(null,(function (){
var s__38354__$1 = s__38354;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38354__$1);
if(temp__5825__auto__){
var s__38354__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38354__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38354__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38356 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38355 = (0);
while(true){
if((i__38355 < size__5627__auto__)){
var vec__38357 = cljs.core._nth(c__5626__auto__,i__38355);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(1),null);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab__$1,id);
cljs.core.chunk_append(b__38356,(function (){var G__38360 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),active_QMARK_], null),"tab-item"], null)),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__38355,active_QMARK_,vec__38357,id,label,c__5626__auto__,size__5627__auto__,b__38356,s__38354__$2,temp__5825__auto__,vec__38332,q,set_q_BANG_,vec__38335,result,set_result_BANG_,vec__38338,select_mode_QMARK_,set_select_mode_QMARK__BANG_,vec__38341,tab,set_tab_BANG_,_STAR_color,_STAR_input_ref,_STAR_result_ref,map__38344,map__38344__$1,tabs,default_tab,has_icon_tab_QMARK_,show_tabs_QMARK_,tab__$1,opts__$1,reset_q_BANG_,map__38331,map__38331__$1,opts,on_chosen,del_btn_QMARK_,color_auto_chosen_QMARK_,icon_value){
return (function (e){
frontend.util.stop(e);

return (set_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tab_BANG_.cljs$core$IFn$_invoke$arity$1(id) : set_tab_BANG_.call(null,id));
});})(i__38355,active_QMARK_,vec__38357,id,label,c__5626__auto__,size__5627__auto__,b__38356,s__38354__$2,temp__5825__auto__,vec__38332,q,set_q_BANG_,vec__38335,result,set_result_BANG_,vec__38338,select_mode_QMARK_,set_select_mode_QMARK__BANG_,vec__38341,tab,set_tab_BANG_,_STAR_color,_STAR_input_ref,_STAR_result_ref,map__38344,map__38344__$1,tabs,default_tab,has_icon_tab_QMARK_,show_tabs_QMARK_,tab__$1,opts__$1,reset_q_BANG_,map__38331,map__38331__$1,opts,on_chosen,del_btn_QMARK_,color_auto_chosen_QMARK_,icon_value))
], null);
var G__38361 = label;
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38360,G__38361) : logseq.shui.ui.button.call(null,G__38360,G__38361));
})());

var G__38490 = (i__38355 + (1));
i__38355 = G__38490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38356),frontend$components$icon$icon_search_$_iter__38353(cljs.core.chunk_rest(s__38354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38356),null);
}
} else {
var vec__38362 = cljs.core.first(s__38354__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38362,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38362,(1),null);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab__$1,id);
return cljs.core.cons((function (){var G__38365 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),active_QMARK_], null),"tab-item"], null)),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (active_QMARK_,vec__38362,id,label,s__38354__$2,temp__5825__auto__,vec__38332,q,set_q_BANG_,vec__38335,result,set_result_BANG_,vec__38338,select_mode_QMARK_,set_select_mode_QMARK__BANG_,vec__38341,tab,set_tab_BANG_,_STAR_color,_STAR_input_ref,_STAR_result_ref,map__38344,map__38344__$1,tabs,default_tab,has_icon_tab_QMARK_,show_tabs_QMARK_,tab__$1,opts__$1,reset_q_BANG_,map__38331,map__38331__$1,opts,on_chosen,del_btn_QMARK_,color_auto_chosen_QMARK_,icon_value){
return (function (e){
frontend.util.stop(e);

return (set_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tab_BANG_.cljs$core$IFn$_invoke$arity$1(id) : set_tab_BANG_.call(null,id));
});})(active_QMARK_,vec__38362,id,label,s__38354__$2,temp__5825__auto__,vec__38332,q,set_q_BANG_,vec__38335,result,set_result_BANG_,vec__38338,select_mode_QMARK_,set_select_mode_QMARK__BANG_,vec__38341,tab,set_tab_BANG_,_STAR_color,_STAR_input_ref,_STAR_result_ref,map__38344,map__38344__$1,tabs,default_tab,has_icon_tab_QMARK_,show_tabs_QMARK_,tab__$1,opts__$1,reset_q_BANG_,map__38331,map__38331__$1,opts,on_chosen,del_btn_QMARK_,color_auto_chosen_QMARK_,icon_value))
], null);
var G__38366 = label;
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38365,G__38366) : logseq.shui.ui.button.call(null,G__38365,G__38366));
})(),frontend$components$icon$icon_search_$_iter__38353(cljs.core.rest(s__38354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(tabs);
})()], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = show_tabs_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = has_icon_tab_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"emoji","emoji",1031230144),tab__$1);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?frontend.components.icon.color_picker(_STAR_color,(function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),(function (){var G__38367 = icon_value;
if((G__38367 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__38367);
}
})())){
if((!(color_auto_chosen_QMARK_ === false))){
var G__38368 = null;
var G__38369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(icon_value,new cljs.core.Keyword(null,"color","color",1011675173),c);
var G__38370 = true;
return (on_chosen.cljs$core$IFn$_invoke$arity$3 ? on_chosen.cljs$core$IFn$_invoke$arity$3(G__38368,G__38369,G__38370) : on_chosen.call(null,G__38368,G__38369,G__38370));
} else {
return null;
}
} else {
return null;
}
})):null),(cljs.core.truth_(del_btn_QMARK_)?(function (){var G__38371 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"data-action","data-action",821237678),"del",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(null) : on_chosen.call(null,null));
})], null);
var G__38372 = logseq.shui.ui.tabler_icon("trash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(17)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38371,G__38372) : logseq.shui.ui.button.call(null,G__38371,G__38372));
})():null)], null)], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$icon_search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38373 = cljs.core.first(args__31746__auto__);
var G__38374 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38373,G__38374) : io.factorhouse.hsx.core.obj_get.call(null,G__38373,G__38374));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"icon-search","icon-search",-2098834276,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$icon$icon_search,args__31746__auto__,null);
}
};
var frontend$components$icon$icon_search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38495__i = 0, G__38495__a = new Array(arguments.length -  0);
while (G__38495__i < G__38495__a.length) {G__38495__a[G__38495__i] = arguments[G__38495__i + 0]; ++G__38495__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38495__a,0,null);
} 
return frontend$components$icon$icon_search__delegate.call(this,args__31746__auto__);};
frontend$components$icon$icon_search.cljs$lang$maxFixedArity = 0;
frontend$components$icon$icon_search.cljs$lang$applyTo = (function (arglist__38500){
var args__31746__auto__ = cljs.core.seq(arglist__38500);
return frontend$components$icon$icon_search__delegate(args__31746__auto__);
});
frontend$components$icon$icon_search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$icon_search__delegate;
return frontend$components$icon$icon_search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38375 = comp__31745__auto__;
var G__38376 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38375,G__38376) : io.factorhouse.hsx.core.react_memo.call(null,G__38375,G__38376));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"icon-search");

return comp__31745__auto__;
})();
frontend.components.icon.icon_picker = (function (){var render_fn__31744__auto__ = (function frontend$components$icon$icon_picker(icon_value,p__38378){
var map__38379 = p__38378;
var map__38379__$1 = cljs.core.__destructure_map(map__38379);
var empty_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38379__$1,new cljs.core.Keyword(null,"empty-label","empty-label",-288358384));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38379__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var initial_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38379__$1,new cljs.core.Keyword(null,"initial-open?","initial-open?",1869534108));
var del_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38379__$1,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362));
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38379__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var icon_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38379__$1,new cljs.core.Keyword(null,"icon-props","icon-props",-895221875));
var popup_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38379__$1,new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839));
var button_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38379__$1,new cljs.core.Keyword(null,"button-opts","button-opts",1112045560));
var _STAR_trigger_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var content_fn = ((frontend.config.publishing_QMARK_)?cljs.core.constantly(cljs.core.PersistentVector.EMPTY):(function (p__38380){
var map__38381 = p__38380;
var map__38381__$1 = cljs.core.__destructure_map(map__38381);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38381__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.icon.icon_search(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (e,icon_value__$1,keep_popup_QMARK_){
(on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(e,icon_value__$1) : on_chosen.call(null,e,icon_value__$1));

if(keep_popup_QMARK_ === true){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
}
}),new cljs.core.Keyword(null,"icon-value","icon-value",-510636889),icon_value,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),del_btn_QMARK_], null));
}));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(initial_open_QMARK_)){
return setTimeout((function (){
var G__38382 = logseq.shui.hooks.deref(_STAR_trigger_ref);
if((G__38382 == null)){
return null;
} else {
return G__38382.click();
}
}),(32));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_open_QMARK_], null));

var has_icon_QMARK_ = (!((icon_value == null)));
var G__38383 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_trigger_ref,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),((has_icon_QMARK_)?"px-1 leading-none text-muted-foreground hover:text-foreground":"font-normal text-sm px-[0.5px] text-muted-foreground hover:text-foreground"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(disabled_QMARK_)){
return null;
} else {
var G__38385 = e.currentTarget;
var G__38386 = content_fn;
var G__38387 = medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-icon-picker","ls-icon-picker",1363108390),new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-icon-picker",new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (p1__38377_SHARP_){
return p1__38377_SHARP_.preventDefault();
})], null)], null),popup_opts);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__38385,G__38386,G__38387) : logseq.shui.ui.popup_show_BANG_.call(null,G__38385,G__38386,G__38387));
}
})], null),button_opts], 0));
var G__38384 = ((has_icon_QMARK_)?((cljs.core.vector_QMARK_(icon_value))?icon_value:frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null),icon_props], 0))], 0))):(function (){var or__5142__auto__ = empty_label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","empty","ui/empty",767898386)], 0));
}
})());
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38383,G__38384) : logseq.shui.ui.button.call(null,G__38383,G__38384));
});
var comp__31745__auto__ = (function() { 
var frontend$components$icon$icon_picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38388 = cljs.core.first(args__31746__auto__);
var G__38389 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38388,G__38389) : io.factorhouse.hsx.core.obj_get.call(null,G__38388,G__38389));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"icon-picker","icon-picker",-1722711753,null),args__31746__auto__),frontend$components$icon$icon_picker,args__31746__auto__,null);
}
};
var frontend$components$icon$icon_picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38509__i = 0, G__38509__a = new Array(arguments.length -  0);
while (G__38509__i < G__38509__a.length) {G__38509__a[G__38509__i] = arguments[G__38509__i + 0]; ++G__38509__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38509__a,0,null);
} 
return frontend$components$icon$icon_picker__delegate.call(this,args__31746__auto__);};
frontend$components$icon$icon_picker.cljs$lang$maxFixedArity = 0;
frontend$components$icon$icon_picker.cljs$lang$applyTo = (function (arglist__38510){
var args__31746__auto__ = cljs.core.seq(arglist__38510);
return frontend$components$icon$icon_picker__delegate(args__31746__auto__);
});
frontend$components$icon$icon_picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$icon$icon_picker__delegate;
return frontend$components$icon$icon_picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38390 = comp__31745__auto__;
var G__38391 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38390,G__38391) : io.factorhouse.hsx.core.react_memo.call(null,G__38390,G__38391));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"icon-picker");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.icon.js.map
