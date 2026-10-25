goog.provide('frontend.components.avatar');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.avatar !== 'undefined') && (typeof frontend.components.avatar.latin_or_number_re !== 'undefined')){
} else {
frontend.components.avatar.latin_or_number_re = (new RegExp("^[\\p{Script=Latin}\\p{Number}]","u"));
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.avatar !== 'undefined') && (typeof frontend.components.avatar.grapheme_segmenter !== 'undefined')){
} else {
frontend.components.avatar.grapheme_segmenter = (((typeof Intl !== 'undefined') && (typeof Intl.Segmenter !== 'undefined'))?(new Intl.Segmenter(undefined,({"granularity": "grapheme"}))):null);
}
frontend.components.avatar.graphemes = (function frontend$components$avatar$graphemes(s){
if(cljs.core.truth_(frontend.components.avatar.grapheme_segmenter)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69041_SHARP_){
return p1__69041_SHARP_.segment;
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(Array.from(frontend.components.avatar.grapheme_segmenter.segment(s))));
} else {
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(Array.from(s));
}
});
frontend.components.avatar.latin_or_number_QMARK_ = (function frontend$components$avatar$latin_or_number_QMARK_(s){
return frontend.components.avatar.latin_or_number_re.test(s);
});
frontend.components.avatar.fallback_grapheme_count = (function frontend$components$avatar$fallback_grapheme_count(letters,n){
if(cljs.core.truth_((function (){var G__69046 = letters;
var G__69046__$1 = (((G__69046 == null))?null:cljs.core.first(G__69046));
if((G__69046__$1 == null)){
return null;
} else {
return frontend.components.avatar.latin_or_number_QMARK_(G__69046__$1);
}
})())){
return n;
} else {
return (1);
}
});
frontend.components.avatar.initials = (function frontend$components$avatar$initials(var_args){
var G__69048 = arguments.length;
switch (G__69048) {
case 1:
return frontend.components.avatar.initials.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.avatar.initials.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.avatar.initials.cljs$core$IFn$_invoke$arity$1 = (function (name){
return frontend.components.avatar.initials.cljs$core$IFn$_invoke$arity$2(name,(2));
}));

(frontend.components.avatar.initials.cljs$core$IFn$_invoke$arity$2 = (function (name,n){
if((!((name == null)))){
var name__$1 = clojure.string.trim((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(clojure.string.blank_QMARK_(name__$1)){
return null;
} else {
var letters = frontend.components.avatar.graphemes(name__$1);
return clojure.string.upper_case(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(frontend.components.avatar.fallback_grapheme_count(letters,n),letters)));
}
} else {
return null;
}
}));

(frontend.components.avatar.initials.cljs$lang$maxFixedArity = 2);

frontend.components.avatar.user_avatar = (function (){var render_fn__47251__auto__ = (function frontend$components$avatar$user_avatar(p__69054){
var map__69056 = p__69054;
var map__69056__$1 = cljs.core.__destructure_map(map__69056);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69056__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var fallback_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69056__$1,new cljs.core.Keyword(null,"fallback-length","fallback-length",-926578751),(2));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69056__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69056__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var fallback_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69056__$1,new cljs.core.Keyword(null,"fallback-props","fallback-props",722648746));
var image_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69056__$1,new cljs.core.Keyword(null,"image-props","image-props",390986155));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69056__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69056__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var avatar_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69056__$1,new cljs.core.Keyword(null,"avatar-src","avatar-src",2143818962));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69056__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var color = (cljs.core.truth_(uuid)?logseq.shui.util.uuid_color(uuid):null);
var fallback_text = (function (){var or__5142__auto__ = fallback;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.avatar.initials.cljs$core$IFn$_invoke$arity$2(name,fallback_length);
}
})();
var fallback_style = (function (){var G__69057 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(fallback_props);
if(cljs.core.truth_((function (){var and__5140__auto__ = color;
if(cljs.core.truth_(and__5140__auto__)){
return (new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(fallback_props)) == null);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69057,new cljs.core.Keyword(null,"background-color","background-color",570434026),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+"50"));
} else {
return G__69057;
}
})();
var fallback_props_SINGLEQUOTE_ = (function (){var G__69059 = fallback_props;
if(cljs.core.seq(fallback_style)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69059,new cljs.core.Keyword(null,"style","style",-496642736),fallback_style);
} else {
return G__69059;
}
})();
var G__69060 = (function (){var G__69063 = cljs.core.PersistentArrayMap.EMPTY;
var G__69063__$1 = (cljs.core.truth_(class$)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69063,new cljs.core.Keyword(null,"class","class",-2030961996),class$):G__69063);
var G__69063__$2 = (cljs.core.truth_(style)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69063__$1,new cljs.core.Keyword(null,"style","style",-496642736),style):G__69063__$1);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69063__$2,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__69063__$2;
}
})();
var G__69061 = ((cljs.core.seq(avatar_src))?(function (){var G__69065 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),avatar_src], null),image_props], 0));
return (logseq.shui.ui.avatar_image.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.avatar_image.cljs$core$IFn$_invoke$arity$1(G__69065) : logseq.shui.ui.avatar_image.call(null,G__69065));
})():null);
var G__69062 = ((cljs.core.seq(fallback_props_SINGLEQUOTE_))?(logseq.shui.ui.avatar_fallback.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.avatar_fallback.cljs$core$IFn$_invoke$arity$2(fallback_props_SINGLEQUOTE_,fallback_text) : logseq.shui.ui.avatar_fallback.call(null,fallback_props_SINGLEQUOTE_,fallback_text)):(logseq.shui.ui.avatar_fallback.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.avatar_fallback.cljs$core$IFn$_invoke$arity$1(fallback_text) : logseq.shui.ui.avatar_fallback.call(null,fallback_text)));
return (logseq.shui.ui.avatar.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.avatar.cljs$core$IFn$_invoke$arity$3(G__69060,G__69061,G__69062) : logseq.shui.ui.avatar.call(null,G__69060,G__69061,G__69062));
});
var comp__47252__auto__ = (function() { 
var frontend$components$avatar$user_avatar__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__69066 = cljs.core.first(args__47253__auto__);
var G__69067 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__69066,G__69067) : io.factorhouse.hsx.core.obj_get.call(null,G__69066,G__69067));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"user-avatar","user-avatar",1207822127,null),args__47253__auto__),frontend$components$avatar$user_avatar,args__47253__auto__,null);
}
};
var frontend$components$avatar$user_avatar = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__69085__i = 0, G__69085__a = new Array(arguments.length -  0);
while (G__69085__i < G__69085__a.length) {G__69085__a[G__69085__i] = arguments[G__69085__i + 0]; ++G__69085__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__69085__a,0,null);
} 
return frontend$components$avatar$user_avatar__delegate.call(this,args__47253__auto__);};
frontend$components$avatar$user_avatar.cljs$lang$maxFixedArity = 0;
frontend$components$avatar$user_avatar.cljs$lang$applyTo = (function (arglist__69086){
var args__47253__auto__ = cljs.core.seq(arglist__69086);
return frontend$components$avatar$user_avatar__delegate(args__47253__auto__);
});
frontend$components$avatar$user_avatar.cljs$core$IFn$_invoke$arity$variadic = frontend$components$avatar$user_avatar__delegate;
return frontend$components$avatar$user_avatar;
})()
;
var memo_comp__47254__auto__ = (function (){var G__69068 = comp__47252__auto__;
var G__69069 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__69068,G__69069) : io.factorhouse.hsx.core.react_memo.call(null,G__69068,G__69069));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"user-avatar");

return comp__47252__auto__;
})();

//# sourceMappingURL=frontend.components.avatar.js.map
