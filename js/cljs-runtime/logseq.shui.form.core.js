goog.provide('logseq.shui.form.core');
logseq.shui.form.core.form_provider = logseq.shui.util.ui_wrap("Form",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static?","static?",-1639874822),false], null));
logseq.shui.form.core.form_field_SINGLEQUOTE_ = logseq.shui.util.ui_wrap("FormField",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static?","static?",-1639874822),false], null));
logseq.shui.form.core.form_field = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$form$core$form_field__delegate = function (render_SINGLEQUOTE_,args){
var vec__48843 = ((cljs.core.map_QMARK_(render_SINGLEQUOTE_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_SINGLEQUOTE_,cljs.core.first(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),render_SINGLEQUOTE_], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48843,(0),null);
var render_SINGLEQUOTE___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48843,(1),null);
var _ = ((cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"name","name",1843675177)))?null:(function(){throw (new Error((""+"Assert failed: "+":name is required for <ui/form-field>"+"\n"+"(contains? props :name)")))})());
var render = (function (ctx){
var G__48850 = cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(ctx.field);
var G__48851 = (function (){var G__48857 = ctx.fieldState;
var G__48857__$1 = (((G__48857 == null))?null:G__48857.error);
if((G__48857__$1 == null)){
return null;
} else {
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(G__48857__$1);
}
})();
var G__48852 = cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(ctx.fieldState);
var G__48853 = ctx;
return (render_SINGLEQUOTE___$1.cljs$core$IFn$_invoke$arity$4 ? render_SINGLEQUOTE___$1.cljs$core$IFn$_invoke$arity$4(G__48850,G__48851,G__48852,G__48853) : render_SINGLEQUOTE___$1.call(null,G__48850,G__48851,G__48852,G__48853));
});
var G__48858 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"render","render",-1408033454),render);
return (logseq.shui.form.core.form_field_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.form.core.form_field_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__48858) : logseq.shui.form.core.form_field_SINGLEQUOTE_.call(null,G__48858));
};
var logseq$shui$form$core$form_field = function (render_SINGLEQUOTE_,var_args){
var args = null;
if (arguments.length > 1) {
var G__48898__i = 0, G__48898__a = new Array(arguments.length -  1);
while (G__48898__i < G__48898__a.length) {G__48898__a[G__48898__i] = arguments[G__48898__i + 1]; ++G__48898__i;}
  args = new cljs.core.IndexedSeq(G__48898__a,0,null);
} 
return logseq$shui$form$core$form_field__delegate.call(this,render_SINGLEQUOTE_,args);};
logseq$shui$form$core$form_field.cljs$lang$maxFixedArity = 1;
logseq$shui$form$core$form_field.cljs$lang$applyTo = (function (arglist__48899){
var render_SINGLEQUOTE_ = cljs.core.first(arglist__48899);
var args = cljs.core.rest(arglist__48899);
return logseq$shui$form$core$form_field__delegate(render_SINGLEQUOTE_,args);
});
logseq$shui$form$core$form_field.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$form$core$form_field__delegate;
return logseq$shui$form$core$form_field;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$form$core$form_field__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__48862 = cljs.core.first(args__47253__auto__);
var G__48863 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48862,G__48863) : io.factorhouse.hsx.core.obj_get.call(null,G__48862,G__48863));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"form-field","form-field",1321615805,null),args__47253__auto__),logseq$shui$form$core$form_field,args__47253__auto__,null);
}
};
var logseq$shui$form$core$form_field = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__48904__i = 0, G__48904__a = new Array(arguments.length -  0);
while (G__48904__i < G__48904__a.length) {G__48904__a[G__48904__i] = arguments[G__48904__i + 0]; ++G__48904__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__48904__a,0,null);
} 
return logseq$shui$form$core$form_field__delegate.call(this,args__47253__auto__);};
logseq$shui$form$core$form_field.cljs$lang$maxFixedArity = 0;
logseq$shui$form$core$form_field.cljs$lang$applyTo = (function (arglist__48906){
var args__47253__auto__ = cljs.core.seq(arglist__48906);
return logseq$shui$form$core$form_field__delegate(args__47253__auto__);
});
logseq$shui$form$core$form_field.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$form$core$form_field__delegate;
return logseq$shui$form$core$form_field;
})()
;
var memo_comp__47254__auto__ = (function (){var G__48866 = comp__47252__auto__;
var G__48867 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48866,G__48867) : io.factorhouse.hsx.core.react_memo.call(null,G__48866,G__48867));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"form-field");

return comp__47252__auto__;
})();
logseq.shui.form.core.form_control = logseq.shui.util.ui_wrap("FormControl",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static?","static?",-1639874822),false], null));
logseq.shui.form.core.yup = logseq.shui.util.ui_get("yup");
logseq.shui.form.core.yup_resolver = logseq.shui.util.ui_get("yupResolver");
logseq.shui.form.core.use_form_SINGLEQUOTE_ = logseq.shui.util.ui_get("useForm");
logseq.shui.form.core.use_form_context = logseq.shui.util.ui_get("useFormContext");
logseq.shui.form.core.use_form = (function logseq$shui$form$core$use_form(var_args){
var G__48879 = arguments.length;
switch (G__48879) {
case 0:
return logseq.shui.form.core.use_form.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.shui.form.core.use_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.form.core.use_form.cljs$core$IFn$_invoke$arity$0 = (function (){
return logseq.shui.form.core.use_form.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.shui.form.core.use_form.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var yup_schema = new cljs.core.Keyword(null,"yupSchema","yupSchema",-1266946445).cljs$core$IFn$_invoke$arity$1(opts);
var form_methods = (function (){var G__48881 = cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1((function (){var G__48882 = opts;
if((!((yup_schema == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48882,new cljs.core.Keyword(null,"resolver","resolver",-1740553583),(logseq.shui.form.core.yup_resolver.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.form.core.yup_resolver.cljs$core$IFn$_invoke$arity$1(yup_schema) : logseq.shui.form.core.yup_resolver.call(null,yup_schema)));
} else {
return G__48882;
}
})());
return (logseq.shui.form.core.use_form_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.form.core.use_form_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__48881) : logseq.shui.form.core.use_form_SINGLEQUOTE_.call(null,G__48881));
})();
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(form_methods);
}));

(logseq.shui.form.core.use_form.cljs$lang$maxFixedArity = 1);

logseq.shui.form.core.form_item = logseq.shui.util.ui_wrap("FormItem");
logseq.shui.form.core.form_label = logseq.shui.util.ui_wrap("FormLabel");
logseq.shui.form.core.form_description = logseq.shui.util.ui_wrap("FormDescription");
logseq.shui.form.core.form_message = logseq.shui.util.ui_wrap("FormMessage");
logseq.shui.form.core.input = logseq.shui.util.ui_wrap("Input");
logseq.shui.form.core.textarea = logseq.shui.util.ui_wrap("Textarea");
logseq.shui.form.core.switch$ = logseq.shui.util.ui_wrap("Switch");
logseq.shui.form.core.checkbox = logseq.shui.util.ui_wrap("Checkbox");
logseq.shui.form.core.radio_group = logseq.shui.util.ui_wrap("RadioGroup");
logseq.shui.form.core.radio_group_item = logseq.shui.util.ui_wrap("RadioGroupItem");

//# sourceMappingURL=logseq.shui.form.core.js.map
