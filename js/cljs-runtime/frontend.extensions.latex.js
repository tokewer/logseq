goog.provide('frontend.extensions.latex');
frontend.extensions.latex.loaded_QMARK_ = (function frontend$extensions$latex$loaded_QMARK_(){
return window.katex;
});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.latex !== 'undefined') && (typeof frontend.extensions.latex._STAR_loading_QMARK_ !== 'undefined')){
} else {
frontend.extensions.latex._STAR_loading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.extensions.latex.render_BANG_ = (function frontend$extensions$latex$render_BANG_(id,s,display_QMARK_){
try{var temp__5825__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5825__auto__)){
var elem = temp__5825__auto__;
return katex.render(s,elem,({"displayMode": display_QMARK_, "throwOnError": false, "strict": false}));
} else {
return null;
}
}catch (e46404){var e = e46404;
return console.error(e);
}});
frontend.extensions.latex.load_and_render_BANG_ = (function frontend$extensions$latex$load_and_render_BANG_(id,s,display_QMARK_){
if(cljs.core.truth_(frontend.extensions.latex.loaded_QMARK_())){
cljs.core.reset_BANG_(frontend.extensions.latex._STAR_loading_QMARK_,false);

return frontend.extensions.latex.render_BANG_(id,s,display_QMARK_);
} else {
if(cljs.core.truth_(cljs.core.deref(frontend.extensions.latex._STAR_loading_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(frontend.extensions.latex._STAR_loading_QMARK_,true);

return frontend.loader.load.cljs$core$IFn$_invoke$arity$2("./js/katex.min.js",(function (){
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2("./js/mhchem.min.js",(function (){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.all((function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(frontend.handler.plugin.hook_extensions_enhancers_by_key(new cljs.core.Keyword(null,"katex","katex",648363779)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var enhancers = temp__5825__auto__;
var iter__5628__auto__ = (function frontend$extensions$latex$load_and_render_BANG__$_iter__46409(s__46410){
return (new cljs.core.LazySeq(null,(function (){
var s__46410__$1 = s__46410;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__46410__$1);
if(temp__5825__auto____$1){
var s__46410__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46410__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46410__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46412 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46411 = (0);
while(true){
if((i__46411 < size__5627__auto__)){
var map__46413 = cljs.core._nth(c__5626__auto__,i__46411);
var map__46413__$1 = cljs.core.__destructure_map(map__46413);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46413__$1,new cljs.core.Keyword(null,"enhancer","enhancer",-929020171));
cljs.core.chunk_append(b__46412,((cljs.core.fn_QMARK_(f))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(window.katex) : f.call(null,window.katex)):null));

var G__46439 = (i__46411 + (1));
i__46411 = G__46439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46412),frontend$extensions$latex$load_and_render_BANG__$_iter__46409(cljs.core.chunk_rest(s__46410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46412),null);
}
} else {
var map__46414 = cljs.core.first(s__46410__$2);
var map__46414__$1 = cljs.core.__destructure_map(map__46414);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46414__$1,new cljs.core.Keyword(null,"enhancer","enhancer",-929020171));
return cljs.core.cons(((cljs.core.fn_QMARK_(f))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(window.katex) : f.call(null,window.katex)):null),frontend$extensions$latex$load_and_render_BANG__$_iter__46409(cljs.core.rest(s__46410__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(enhancers);
} else {
return null;
}
})()),(function (){
cljs.core.reset_BANG_(frontend.extensions.latex._STAR_loading_QMARK_,false);

return frontend.extensions.latex.render_BANG_(id,s,display_QMARK_);
}));
}));
}));
}
}
});
frontend.extensions.latex.latex = (function (){var render_fn__31744__auto__ = (function frontend$extensions$latex$latex(s,block_QMARK_,display_QMARK_){
var id = logseq.shui.hooks.use_memo((function (){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),cljs.core.PersistentVector.EMPTY);
var loading_QMARK_ = cljs.core.first(logseq.shui.hooks.use_atom(frontend.extensions.latex._STAR_loading_QMARK_));
logseq.shui.hooks.use_effect_BANG_((function (){
return frontend.extensions.latex.load_and_render_BANG_(id,s,display_QMARK_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,s,display_QMARK_,loading_QMARK_], null));

if(cljs.core.truth_(loading_QMARK_)){
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$0();
} else {
var element = (cljs.core.truth_(block_QMARK_)?new cljs.core.Keyword(null,"div.latex","div.latex",1964645203):new cljs.core.Keyword(null,"span.latex-inline","span.latex-inline",2007517054));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),"initial"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-0","span.opacity-0",-1794624548),s], null)], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$latex$latex__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46423 = cljs.core.first(args__31746__auto__);
var G__46424 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46423,G__46424) : io.factorhouse.hsx.core.obj_get.call(null,G__46423,G__46424));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"latex","latex",-179629617,null),args__31746__auto__),frontend$extensions$latex$latex,args__31746__auto__,null);
}
};
var frontend$extensions$latex$latex = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46440__i = 0, G__46440__a = new Array(arguments.length -  0);
while (G__46440__i < G__46440__a.length) {G__46440__a[G__46440__i] = arguments[G__46440__i + 0]; ++G__46440__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46440__a,0,null);
} 
return frontend$extensions$latex$latex__delegate.call(this,args__31746__auto__);};
frontend$extensions$latex$latex.cljs$lang$maxFixedArity = 0;
frontend$extensions$latex$latex.cljs$lang$applyTo = (function (arglist__46441){
var args__31746__auto__ = cljs.core.seq(arglist__46441);
return frontend$extensions$latex$latex__delegate(args__31746__auto__);
});
frontend$extensions$latex$latex.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$latex$latex__delegate;
return frontend$extensions$latex$latex;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46427 = comp__31745__auto__;
var G__46428 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46427,G__46428) : io.factorhouse.hsx.core.react_memo.call(null,G__46427,G__46428));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"latex");

return comp__31745__auto__;
})();
frontend.extensions.latex.html_export = (function frontend$extensions$latex$html_export(s,block_QMARK_,display_QMARK_){
var element = (cljs.core.truth_(block_QMARK_)?new cljs.core.Keyword(null,"div.latex","div.latex",1964645203):new cljs.core.Keyword(null,"span.latex-inline","span.latex-inline",2007517054));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,(cljs.core.truth_((function (){var or__5142__auto__ = block_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return display_QMARK_;
}
})())?(frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("$$%s$$",s) : frontend.util.format.call(null,"$$%s$$",s)):(frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("$%s$",s) : frontend.util.format.call(null,"$%s$",s)))], null);
});

//# sourceMappingURL=frontend.extensions.latex.js.map
