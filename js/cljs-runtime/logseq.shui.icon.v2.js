goog.provide('logseq.shui.icon.v2');
goog.scope(function(){
  logseq.shui.icon.v2.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$tabler$icons_react$dist$cjs$tabler_icons_react_cjs=shadow.js.require("module$node_modules$$tabler$icons_react$dist$cjs$tabler_icons_react_cjs", {});
logseq.shui.icon.v2.tabler_extension_icon_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 31, ["whiteboard",null,"new-whiteboard-element",null,"app-feature",null,"select-cursor",null,"ungroup",null,"new-whiteboard",null,"new-page",null,"object-expanded",null,"group",null,"cloud-exclamation",null,"move-to-sidebar-right",null,"whiteboard-element",null,"heading-off",null,"block",null,"references-show",null,"add-link",null,"block-search",null,"page-search",null,"text",null,"h-auto",null,"new-block",null,"object-compact",null,"internal-link",null,"whiteboard-search",null,"open-as-page",null,"page",null,"connector",null,"link-to-page",null,"link-to-block",null,"references-hide",null,"link-to-whiteboard",null], null), null);
logseq.shui.icon.v2.font_icon = (function logseq$shui$icon$v2$font_icon(name,extension_QMARK_,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ui__icon","span.ui__icon",-681203515),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),goog.string.format((""+"%s-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))?(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts)))):null))),(cljs.core.truth_(extension_QMARK_)?"tie tie":"ti ti"))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extension?","extension?",-1574402873),new cljs.core.Keyword(null,"font?","font?",-1448494423)], 0))], 0))], null);
});
logseq.shui.icon.v2.svg_icon = (function logseq$shui$icon$v2$svg_icon(icons,name,icon_component_name,class$,opts){
var f = logseq.shui.util.component_wrap(icons,icon_component_name);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ui__icon.ti","span.ui__icon.ti",1689748997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"ls-icon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$))], null),f(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null),logseq.shui.util.map_keys__GT_camel_case(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extension?","extension?",-1574402873),new cljs.core.Keyword(null,"font?","font?",-1448494423)], 0)))], 0)))], null);
});
logseq.shui.icon.v2.root = (function (){var render_fn__47251__auto__ = (function() {
var logseq$shui$icon$v2$root = null;
var logseq$shui$icon$v2$root__1 = (function (name){
return logseq$shui$icon$v2$root.cljs$core$IFn$_invoke$arity$2(name,null);
});
var logseq$shui$icon$v2$root__2 = (function (name,p__48530){
var map__48531 = p__48530;
var map__48531__$1 = cljs.core.__destructure_map(map__48531);
var opts = map__48531__$1;
var extension_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48531__$1,new cljs.core.Keyword(null,"extension?","extension?",-1574402873));
var font_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48531__$1,new cljs.core.Keyword(null,"font?","font?",-1448494423));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48531__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(((typeof name === 'string') && ((!(clojure.string.blank_QMARK_(name)))))){
var js_tabler_icons = logseq.shui.icon.v2.goog$module$goog$object.get(window,"tablerIcons");
var icon_component_name = (""+"Icon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.core.__GT_PascalCase(name)));
if(cljs.core.truth_(font_QMARK_)){
return logseq.shui.icon.v2.font_icon(name,extension_QMARK_,opts);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = js_tabler_icons;
if(cljs.core.truth_(and__5140__auto__)){
return logseq.shui.icon.v2.goog$module$goog$object.get(js_tabler_icons,icon_component_name);
} else {
return and__5140__auto__;
}
})())){
return logseq.shui.icon.v2.svg_icon(js_tabler_icons,name,icon_component_name,class$,opts);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(extension_QMARK_);
if(and__5140__auto__){
return logseq.shui.icon.v2.goog$module$goog$object.get(module$node_modules$$tabler$icons_react$dist$cjs$tabler_icons_react_cjs,icon_component_name);
} else {
return and__5140__auto__;
}
})())){
return logseq.shui.icon.v2.svg_icon(module$node_modules$$tabler$icons_react$dist$cjs$tabler_icons_react_cjs,name,icon_component_name,class$,opts);
} else {
return logseq.shui.icon.v2.font_icon(name,(function (){var or__5142__auto__ = extension_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(logseq.shui.icon.v2.tabler_extension_icon_names,name);
}
})(),opts);

}
}
}
} else {
return null;
}
});
logseq$shui$icon$v2$root = function(name,p__48530){
switch(arguments.length){
case 1:
return logseq$shui$icon$v2$root__1.call(this,name);
case 2:
return logseq$shui$icon$v2$root__2.call(this,name,p__48530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
logseq$shui$icon$v2$root.cljs$core$IFn$_invoke$arity$1 = logseq$shui$icon$v2$root__1;
logseq$shui$icon$v2$root.cljs$core$IFn$_invoke$arity$2 = logseq$shui$icon$v2$root__2;
return logseq$shui$icon$v2$root;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$icon$v2$root__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__48532 = cljs.core.first(args__47253__auto__);
var G__48533 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48532,G__48533) : io.factorhouse.hsx.core.obj_get.call(null,G__48532,G__48533));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"root","root",1191874074,null),args__47253__auto__),logseq$shui$icon$v2$root,args__47253__auto__,null);
}
};
var logseq$shui$icon$v2$root = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__48539__i = 0, G__48539__a = new Array(arguments.length -  0);
while (G__48539__i < G__48539__a.length) {G__48539__a[G__48539__i] = arguments[G__48539__i + 0]; ++G__48539__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__48539__a,0,null);
} 
return logseq$shui$icon$v2$root__delegate.call(this,args__47253__auto__);};
logseq$shui$icon$v2$root.cljs$lang$maxFixedArity = 0;
logseq$shui$icon$v2$root.cljs$lang$applyTo = (function (arglist__48540){
var args__47253__auto__ = cljs.core.seq(arglist__48540);
return logseq$shui$icon$v2$root__delegate(args__47253__auto__);
});
logseq$shui$icon$v2$root.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$icon$v2$root__delegate;
return logseq$shui$icon$v2$root;
})()
;
var memo_comp__47254__auto__ = (function (){var G__48534 = comp__47252__auto__;
var G__48535 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48534,G__48535) : io.factorhouse.hsx.core.react_memo.call(null,G__48534,G__48535));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"root");

return comp__47252__auto__;
})();

//# sourceMappingURL=logseq.shui.icon.v2.js.map
