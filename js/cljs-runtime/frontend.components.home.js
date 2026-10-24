goog.provide('frontend.components.home');
frontend.components.home.home = (function (){var render_fn__31744__auto__ = (function frontend$components$home$home(){
return frontend.components.container.main_content();
});
var comp__31745__auto__ = (function() { 
var frontend$components$home$home__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48103 = cljs.core.first(args__31746__auto__);
var G__48104 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48103,G__48104) : io.factorhouse.hsx.core.obj_get.call(null,G__48103,G__48104));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"home","home",1565974218,null),args__31746__auto__),frontend$components$home$home,args__31746__auto__,null);
}
};
var frontend$components$home$home = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48107__i = 0, G__48107__a = new Array(arguments.length -  0);
while (G__48107__i < G__48107__a.length) {G__48107__a[G__48107__i] = arguments[G__48107__i + 0]; ++G__48107__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48107__a,0,null);
} 
return frontend$components$home$home__delegate.call(this,args__31746__auto__);};
frontend$components$home$home.cljs$lang$maxFixedArity = 0;
frontend$components$home$home.cljs$lang$applyTo = (function (arglist__48108){
var args__31746__auto__ = cljs.core.seq(arglist__48108);
return frontend$components$home$home__delegate(args__31746__auto__);
});
frontend$components$home$home.cljs$core$IFn$_invoke$arity$variadic = frontend$components$home$home__delegate;
return frontend$components$home$home;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48105 = comp__31745__auto__;
var G__48106 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48105,G__48106) : io.factorhouse.hsx.core.react_memo.call(null,G__48105,G__48106));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"home");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.home.js.map
