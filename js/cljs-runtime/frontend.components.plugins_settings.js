goog.provide('frontend.components.plugins_settings');
frontend.components.plugins_settings.html_content = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$html_content(html){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.html-content.pl-1.flex-1.text-sm","div.html-content.pl-1.flex-1.text-sm",1199475858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(html)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$html_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38414 = cljs.core.first(args__31746__auto__);
var G__38415 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38414,G__38415) : io.factorhouse.hsx.core.obj_get.call(null,G__38414,G__38415));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"html-content","html-content",439019923,null),args__31746__auto__),frontend$components$plugins_settings$html_content,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$html_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38556__i = 0, G__38556__a = new Array(arguments.length -  0);
while (G__38556__i < G__38556__a.length) {G__38556__a[G__38556__i] = arguments[G__38556__i + 0]; ++G__38556__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38556__a,0,null);
} 
return frontend$components$plugins_settings$html_content__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$html_content.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$html_content.cljs$lang$applyTo = (function (arglist__38557){
var args__31746__auto__ = cljs.core.seq(arglist__38557);
return frontend$components$plugins_settings$html_content__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$html_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$html_content__delegate;
return frontend$components$plugins_settings$html_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38416 = comp__31745__auto__;
var G__38417 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38416,G__38417) : io.factorhouse.hsx.core.react_memo.call(null,G__38416,G__38417));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"html-content");

return comp__31745__auto__;
})();
frontend.components.plugins_settings.edit_settings_file = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$edit_settings_file(pid,p__38420){
var map__38421 = p__38420;
var map__38421__$1 = cljs.core.__destructure_map(map__38421);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var edit_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
var set_edit_mode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword(null,"set-edit-mode!","set-edit-mode!",948556739));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm.hover:underline","a.text-sm.hover:underline",13939695),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(pid);
} else {
var G__38423 = (function (p1__38419_SHARP_){
if(cljs.core.truth_(p1__38419_SHARP_)){
return null;
} else {
return new cljs.core.Keyword(null,"code","code",1586293142);
}
});
return (set_edit_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_edit_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__38423) : set_edit_mode_BANG_.call(null,G__38423));
}
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"code","code",1586293142)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.settings","exit-code-mode","plugin.settings/exit-code-mode",195479398)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.settings","edit-settings-json","plugin.settings/edit-settings-json",-1052431401)], 0)))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$edit_settings_file__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38428 = cljs.core.first(args__31746__auto__);
var G__38429 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38428,G__38429) : io.factorhouse.hsx.core.obj_get.call(null,G__38428,G__38429));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"edit-settings-file","edit-settings-file",-836590445,null),args__31746__auto__),frontend$components$plugins_settings$edit_settings_file,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$edit_settings_file = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38558__i = 0, G__38558__a = new Array(arguments.length -  0);
while (G__38558__i < G__38558__a.length) {G__38558__a[G__38558__i] = arguments[G__38558__i + 0]; ++G__38558__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38558__a,0,null);
} 
return frontend$components$plugins_settings$edit_settings_file__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$edit_settings_file.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$edit_settings_file.cljs$lang$applyTo = (function (arglist__38559){
var args__31746__auto__ = cljs.core.seq(arglist__38559);
return frontend$components$plugins_settings$edit_settings_file__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$edit_settings_file.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$edit_settings_file__delegate;
return frontend$components$plugins_settings$edit_settings_file;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38430 = comp__31745__auto__;
var G__38431 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38430,G__38431) : io.factorhouse.hsx.core.react_memo.call(null,G__38430,G__38431));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"edit-settings-file");

return comp__31745__auto__;
})();
frontend.components.plugins_settings.render_item_input = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$render_item_input(val,p__38434,update_setting_BANG_){
var map__38435 = p__38434;
var map__38435__$1 = cljs.core.__destructure_map(map__38435);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword(null,"title","title",636505583));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var inputAs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword(null,"inputAs","inputAs",1243305598));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.desc-item.as-input","div.desc-item.as-input",1089130927),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),key,new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),key], null),frontend.ui.icon("caret-right"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form-control","label.form-control",776148254),frontend.components.plugins_settings.html_content(description),(function (){var input_as = frontend.util.safe_lower_case((function (){var or__5142__auto__ = inputAs;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.name(type);
}
})());
var input_as__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_as,"string"))?new cljs.core.Keyword(null,"text","text",-1790561697):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(input_as));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_as__$1,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?new cljs.core.Keyword(null,"textarea","textarea",-650375824):new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-input","form-input",-226883230),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),input_as__$1)))], null)], null)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.name(input_as__$1),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(function (){var or__5142__auto__ = val;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
})(),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__38432_SHARP_){
return p1__38432_SHARP_.stopPropagation();
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),goog.functions.debounce((function (p1__38433_SHARP_){
var G__38438 = key;
var G__38439 = frontend.util.evalue(p1__38433_SHARP_);
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__38438,G__38439) : update_setting_BANG_.call(null,G__38438,G__38439));
}),(1000))], null)], null);
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$render_item_input__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38440 = cljs.core.first(args__31746__auto__);
var G__38441 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38440,G__38441) : io.factorhouse.hsx.core.obj_get.call(null,G__38440,G__38441));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-item-input","render-item-input",-1495447575,null),args__31746__auto__),frontend$components$plugins_settings$render_item_input,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$render_item_input = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38560__i = 0, G__38560__a = new Array(arguments.length -  0);
while (G__38560__i < G__38560__a.length) {G__38560__a[G__38560__i] = arguments[G__38560__i + 0]; ++G__38560__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38560__a,0,null);
} 
return frontend$components$plugins_settings$render_item_input__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$render_item_input.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$render_item_input.cljs$lang$applyTo = (function (arglist__38561){
var args__31746__auto__ = cljs.core.seq(arglist__38561);
return frontend$components$plugins_settings$render_item_input__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$render_item_input.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$render_item_input__delegate;
return frontend$components$plugins_settings$render_item_input;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38443 = comp__31745__auto__;
var G__38444 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38443,G__38444) : io.factorhouse.hsx.core.react_memo.call(null,G__38443,G__38444));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-item-input");

return comp__31745__auto__;
})();
frontend.components.plugins_settings.render_item_toggle = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$render_item_toggle(val,p__38446,update_setting_BANG_){
var map__38447 = p__38446;
var map__38447__$1 = cljs.core.__destructure_map(map__38447);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var val__$1 = ((cljs.core.boolean_QMARK_(val))?val:cljs.core.boolean$(default$));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.desc-item.as-toggle","div.desc-item.as-toggle",970781442),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),key], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),key], null),frontend.ui.icon("caret-right"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form-control","label.form-control",776148254),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),val__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__38450 = key;
var G__38451 = (!(val__$1));
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__38450,G__38451) : update_setting_BANG_.call(null,G__38450,G__38451));
})], null)),frontend.components.plugins_settings.html_content(description)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$render_item_toggle__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38452 = cljs.core.first(args__31746__auto__);
var G__38453 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38452,G__38453) : io.factorhouse.hsx.core.obj_get.call(null,G__38452,G__38453));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-item-toggle","render-item-toggle",-663819730,null),args__31746__auto__),frontend$components$plugins_settings$render_item_toggle,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$render_item_toggle = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38562__i = 0, G__38562__a = new Array(arguments.length -  0);
while (G__38562__i < G__38562__a.length) {G__38562__a[G__38562__i] = arguments[G__38562__i + 0]; ++G__38562__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38562__a,0,null);
} 
return frontend$components$plugins_settings$render_item_toggle__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$render_item_toggle.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$render_item_toggle.cljs$lang$applyTo = (function (arglist__38563){
var args__31746__auto__ = cljs.core.seq(arglist__38563);
return frontend$components$plugins_settings$render_item_toggle__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$render_item_toggle.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$render_item_toggle__delegate;
return frontend$components$plugins_settings$render_item_toggle;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38456 = comp__31745__auto__;
var G__38457 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38456,G__38457) : io.factorhouse.hsx.core.react_memo.call(null,G__38456,G__38457));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-item-toggle");

return comp__31745__auto__;
})();
frontend.components.plugins_settings.render_item_enum = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$render_item_enum(val,p__38461,update_setting_BANG_){
var map__38463 = p__38461;
var map__38463__$1 = cljs.core.__destructure_map(map__38463);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38463__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38463__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38463__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38463__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var enumChoices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38463__$1,new cljs.core.Keyword(null,"enumChoices","enumChoices",-177859500));
var enumPicker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38463__$1,new cljs.core.Keyword(null,"enumPicker","enumPicker",-719781503));
var val__$1 = (function (){var or__5142__auto__ = val;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
})();
var vals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,((cljs.core.sequential_QMARK_(val__$1))?val__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val__$1], null)));
var options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),v,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_(vals,v)], null);
}),enumChoices);
var picker = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(enumPicker);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.desc-item.as-enum","div.desc-item.as-enum",-1849754748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),key], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),key], null),frontend.ui.icon("caret-right"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control","div.form-control",-2082825974),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radio","radio",1323726374),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null], null), null),picker))?new cljs.core.Keyword(null,"div.wrap","div.wrap",1832950772):new cljs.core.Keyword(null,"label.wrap","label.wrap",-1504723647)),frontend.components.plugins_settings.html_content(description),(function (){var G__38464 = picker;
var G__38464__$1 = (((G__38464 instanceof cljs.core.Keyword))?G__38464.fqn:null);
switch (G__38464__$1) {
case "radio":
return frontend.ui.radio_list(options,(function (p1__38458_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__38458_SHARP_) : update_setting_BANG_.call(null,key,p1__38458_SHARP_));
}),null);

break;
case "checkbox":
return frontend.ui.checkbox_list(options,(function (p1__38459_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__38459_SHARP_) : update_setting_BANG_.call(null,key,p1__38459_SHARP_));
}),null);

break;
default:
return frontend.ui.select(options,(function (_,value){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,value) : update_setting_BANG_.call(null,key,value));
}));

}
})()], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$render_item_enum__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38465 = cljs.core.first(args__31746__auto__);
var G__38466 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38465,G__38466) : io.factorhouse.hsx.core.obj_get.call(null,G__38465,G__38466));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-item-enum","render-item-enum",1343404403,null),args__31746__auto__),frontend$components$plugins_settings$render_item_enum,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$render_item_enum = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38565__i = 0, G__38565__a = new Array(arguments.length -  0);
while (G__38565__i < G__38565__a.length) {G__38565__a[G__38565__i] = arguments[G__38565__i + 0]; ++G__38565__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38565__a,0,null);
} 
return frontend$components$plugins_settings$render_item_enum__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$render_item_enum.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$render_item_enum.cljs$lang$applyTo = (function (arglist__38566){
var args__31746__auto__ = cljs.core.seq(arglist__38566);
return frontend$components$plugins_settings$render_item_enum__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$render_item_enum.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$render_item_enum__delegate;
return frontend$components$plugins_settings$render_item_enum;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38467 = comp__31745__auto__;
var G__38468 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38467,G__38468) : io.factorhouse.hsx.core.react_memo.call(null,G__38467,G__38468));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-item-enum");

return comp__31745__auto__;
})();
frontend.components.plugins_settings.render_item_object = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$render_item_object(_val,p__38471,pid){
var map__38472 = p__38471;
var map__38472__$1 = cljs.core.__destructure_map(map__38472);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var _default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"_default","_default",308892991));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.desc-item.as-object","div.desc-item.as-object",-758587191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),key], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),key], null),frontend.ui.icon("caret-right"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control","div.form-control",-2082825974),frontend.components.plugins_settings.html_content(description),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pl-1","div.pl-1",1689460253),frontend.components.plugins_settings.edit_settings_file(pid,null)], null):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$render_item_object__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38473 = cljs.core.first(args__31746__auto__);
var G__38474 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38473,G__38474) : io.factorhouse.hsx.core.obj_get.call(null,G__38473,G__38474));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-item-object","render-item-object",1812927439,null),args__31746__auto__),frontend$components$plugins_settings$render_item_object,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$render_item_object = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38567__i = 0, G__38567__a = new Array(arguments.length -  0);
while (G__38567__i < G__38567__a.length) {G__38567__a[G__38567__i] = arguments[G__38567__i + 0]; ++G__38567__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38567__a,0,null);
} 
return frontend$components$plugins_settings$render_item_object__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$render_item_object.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$render_item_object.cljs$lang$applyTo = (function (arglist__38568){
var args__31746__auto__ = cljs.core.seq(arglist__38568);
return frontend$components$plugins_settings$render_item_object__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$render_item_object.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$render_item_object__delegate;
return frontend$components$plugins_settings$render_item_object;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38475 = comp__31745__auto__;
var G__38476 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38475,G__38476) : io.factorhouse.hsx.core.react_memo.call(null,G__38475,G__38476));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-item-object");

return comp__31745__auto__;
})();
frontend.components.plugins_settings.render_item_heading = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$render_item_heading(p__38477){
var map__38478 = p__38477;
var map__38478__$1 = cljs.core.__destructure_map(map__38478);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading-item","div.heading-item",1360360664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),frontend.components.plugins_settings.html_content(description)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$render_item_heading__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38479 = cljs.core.first(args__31746__auto__);
var G__38480 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38479,G__38480) : io.factorhouse.hsx.core.obj_get.call(null,G__38479,G__38480));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-item-heading","render-item-heading",1647019876,null),args__31746__auto__),frontend$components$plugins_settings$render_item_heading,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$render_item_heading = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38569__i = 0, G__38569__a = new Array(arguments.length -  0);
while (G__38569__i < G__38569__a.length) {G__38569__a[G__38569__i] = arguments[G__38569__i + 0]; ++G__38569__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38569__a,0,null);
} 
return frontend$components$plugins_settings$render_item_heading__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$render_item_heading.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$render_item_heading.cljs$lang$applyTo = (function (arglist__38570){
var args__31746__auto__ = cljs.core.seq(arglist__38570);
return frontend$components$plugins_settings$render_item_heading__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$render_item_heading.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$render_item_heading__delegate;
return frontend$components$plugins_settings$render_item_heading;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38482 = comp__31745__auto__;
var G__38483 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38482,G__38483) : io.factorhouse.hsx.core.react_memo.call(null,G__38482,G__38483));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-item-heading");

return comp__31745__auto__;
})();
frontend.components.plugins_settings.invoke_button_action_BANG_ = (function frontend$components$plugins_settings$invoke_button_action_BANG_(pid,button_action,key){
return frontend.handler.plugin.call_plugin_user_model_BANG_(pid,button_action,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"click",new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)], null)], null));
});
frontend.components.plugins_settings.render_item_button = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$render_item_button(pid,p__38485){
var map__38486 = p__38485;
var map__38486__$1 = cljs.core.__destructure_map(map__38486);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486__$1,new cljs.core.Keyword(null,"title","title",636505583));
var buttonText = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486__$1,new cljs.core.Keyword(null,"buttonText","buttonText",282861744));
var buttonAction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486__$1,new cljs.core.Keyword(null,"buttonAction","buttonAction",461240944));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.desc-item.as-button","div.desc-item.as-button",571584831),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),key], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),key], null),frontend.ui.icon("caret-right"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control","div.form-control",-2082825974),(cljs.core.truth_(description)?frontend.components.plugins_settings.html_content(description):null),(function (){var G__38488 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.plugins_settings.invoke_button_action_BANG_(pid,buttonAction,key);
})], null);
var G__38489 = buttonText;
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38488,G__38489) : logseq.shui.ui.button.call(null,G__38488,G__38489));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$render_item_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38491 = cljs.core.first(args__31746__auto__);
var G__38492 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38491,G__38492) : io.factorhouse.hsx.core.obj_get.call(null,G__38491,G__38492));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-item-button","render-item-button",-49224426,null),args__31746__auto__),frontend$components$plugins_settings$render_item_button,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$render_item_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38571__i = 0, G__38571__a = new Array(arguments.length -  0);
while (G__38571__i < G__38571__a.length) {G__38571__a[G__38571__i] = arguments[G__38571__i + 0]; ++G__38571__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38571__a,0,null);
} 
return frontend$components$plugins_settings$render_item_button__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$render_item_button.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$render_item_button.cljs$lang$applyTo = (function (arglist__38572){
var args__31746__auto__ = cljs.core.seq(arglist__38572);
return frontend$components$plugins_settings$render_item_button__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$render_item_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$render_item_button__delegate;
return frontend$components$plugins_settings$render_item_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38493 = comp__31745__auto__;
var G__38494 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38493,G__38494) : io.factorhouse.hsx.core.react_memo.call(null,G__38493,G__38494));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-item-button");

return comp__31745__auto__;
})();
frontend.components.plugins_settings.render_item_not_handled = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$render_item_not_handled(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","setting-not-handled","plugin/setting-not-handled",-572789347),s], 0))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$render_item_not_handled__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38496 = cljs.core.first(args__31746__auto__);
var G__38497 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38496,G__38497) : io.factorhouse.hsx.core.obj_get.call(null,G__38496,G__38497));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-item-not-handled","render-item-not-handled",288556570,null),args__31746__auto__),frontend$components$plugins_settings$render_item_not_handled,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$render_item_not_handled = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38573__i = 0, G__38573__a = new Array(arguments.length -  0);
while (G__38573__i < G__38573__a.length) {G__38573__a[G__38573__i] = arguments[G__38573__i + 0]; ++G__38573__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38573__a,0,null);
} 
return frontend$components$plugins_settings$render_item_not_handled__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$render_item_not_handled.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$render_item_not_handled.cljs$lang$applyTo = (function (arglist__38574){
var args__31746__auto__ = cljs.core.seq(arglist__38574);
return frontend$components$plugins_settings$render_item_not_handled__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$render_item_not_handled.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$render_item_not_handled__delegate;
return frontend$components$plugins_settings$render_item_not_handled;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38498 = comp__31745__auto__;
var G__38499 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38498,G__38499) : io.factorhouse.hsx.core.react_memo.call(null,G__38498,G__38499));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-item-not-handled");

return comp__31745__auto__;
})();
frontend.components.plugins_settings.settings_container = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins_settings$settings_container(schema,pl){
var plugin_settings = pl.settings;
var pid = pl.id;
var vec__38502 = logseq.shui.hooks.use_state((function (){var G__38508 = plugin_settings;
var G__38508__$1 = (((G__38508 == null))?null:G__38508.toJSON());
if((G__38508__$1 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__38508__$1);
}
})());
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38502,(0),null);
var set_settings_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38502,(1),null);
var vec__38505 = logseq.shui.hooks.use_state(null);
var edit_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(0),null);
var set_edit_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(1),null);
var update_setting_BANG_ = (function (k,v){
if(cljs.core.truth_(plugin_settings)){
return plugin_settings.set(cljs.core.name(k),cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(v));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(plugin_settings)){
var on_change = (function (s){
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5825__auto__)){
var s__$1 = temp__5825__auto__;
return (set_settings_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_BANG_.cljs$core$IFn$_invoke$arity$1(s__$1) : set_settings_BANG_.call(null,s__$1));
} else {
return null;
}
});
plugin_settings.on("change",on_change);

return (function (){
return plugin_settings.off("change",on_change);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid], null));

if(cljs.core.seq(schema)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.px-2.pt-1.opacity-90","h2.text-xl.px-2.pt-1.opacity-90",2068717235),"ID: ",pid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-settings-inner","div.cp__plugins-settings-inner",-950746209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-mode","data-mode",-1228453420),(function (){var G__38511 = edit_mode;
if((G__38511 == null)){
return null;
} else {
return cljs.core.name(G__38511);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.edit-file","span.edit-file",461662528),frontend.components.plugins_settings.edit_settings_file(pid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-edit-mode!","set-edit-mode!",948556739),set_edit_mode_BANG_,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),edit_mode], null))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"code","code",1586293142)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-mode-wrap.pl-3.pr-1.py-1.mb-8.-ml-1","div.code-mode-wrap.pl-3.pr-1.py-1.mb-8.-ml-1",-1707364349),(function (){var content_SINGLEQUOTE_ = JSON.stringify(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(settings),null,(2));
return frontend.components.lazy_editor.editor(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file?","file?",1755223728),false], null),"code-edit-lsp-settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),"json"], null),content_SINGLEQUOTE_,cljs.core.PersistentArrayMap.EMPTY);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.pt-2.gap-2","div.flex.justify-end.pt-2.gap-2",-1049504290),(function (){var G__38512 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var cm = frontend.util.get_cm_instance(e.target.closest(".code-mode-wrap"));
var content_SINGLEQUOTE_ = (function (){var G__38514 = plugin_settings.toJSON();
if((G__38514 == null)){
return null;
} else {
return JSON.stringify(G__38514,null,(2));
}
})();
return cm.setValue(content_SINGLEQUOTE_);
})], null);
var G__38513 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","reset","ui/reset",-800926262)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38512,G__38513) : logseq.shui.ui.button.call(null,G__38512,G__38513));
})(),(function (){var G__38515 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
try{var cm = frontend.util.get_cm_instance(e.target.closest(".code-mode-wrap"));
var content = cm.getValue();
var content_SINGLEQUOTE_ = JSON.parse(content);
(plugin_settings.settings = content_SINGLEQUOTE_);

return (set_edit_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_edit_mode_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_edit_mode_BANG_.call(null,null));
}catch (e38517){if((e38517 instanceof Error)){
var e__$1 = e38517;
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e__$1.message,new cljs.core.Keyword(null,"error","error",-978969032));
} else {
throw e38517;

}
}})], null);
var G__38516 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","save","ui/save",1850075345)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38515,G__38516) : logseq.shui.ui.button.call(null,G__38515,G__38516));
})()], null)], null):(function (){var iter__5628__auto__ = (function frontend$components$plugins_settings$settings_container_$_iter__38518(s__38519){
return (new cljs.core.LazySeq(null,(function (){
var s__38519__$1 = s__38519;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38519__$1);
if(temp__5825__auto__){
var s__38519__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38519__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38519__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38521 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38520 = (0);
while(true){
if((i__38520 < size__5627__auto__)){
var desc = cljs.core._nth(c__5626__auto__,i__38520);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
var desc__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"description","description",-1428560544),((function (i__38520,key,val,type,desc,c__5626__auto__,size__5627__auto__,b__38521,s__38519__$2,temp__5825__auto__,plugin_settings,pid,vec__38502,settings,set_settings_BANG_,vec__38505,edit_mode,set_edit_mode_BANG_,update_setting_BANG_){
return (function (p1__38501_SHARP_){
return frontend.handler.plugin.markdown_to_html(p1__38501_SHARP_);
});})(i__38520,key,val,type,desc,c__5626__auto__,size__5627__auto__,b__38521,s__38519__$2,temp__5825__auto__,plugin_settings,pid,vec__38502,settings,set_settings_BANG_,vec__38505,edit_mode,set_edit_mode_BANG_,update_setting_BANG_))
);
cljs.core.chunk_append(b__38521,(function (){var pred__38522 = cljs.core.contains_QMARK_;
var expr__38523 = type;
if(cljs.core.truth_((function (){var G__38525 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__38526 = expr__38523;
return (pred__38522.cljs$core$IFn$_invoke$arity$2 ? pred__38522.cljs$core$IFn$_invoke$arity$2(G__38525,G__38526) : pred__38522.call(null,G__38525,G__38526));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_input,val,desc__$1,update_setting_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38527 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__38528 = expr__38523;
return (pred__38522.cljs$core$IFn$_invoke$arity$2 ? pred__38522.cljs$core$IFn$_invoke$arity$2(G__38527,G__38528) : pred__38522.call(null,G__38527,G__38528));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_toggle,val,desc__$1,update_setting_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38529 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__38530 = expr__38523;
return (pred__38522.cljs$core$IFn$_invoke$arity$2 ? pred__38522.cljs$core$IFn$_invoke$arity$2(G__38529,G__38530) : pred__38522.call(null,G__38529,G__38530));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_enum,val,desc__$1,update_setting_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38531 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__38532 = expr__38523;
return (pred__38522.cljs$core$IFn$_invoke$arity$2 ? pred__38522.cljs$core$IFn$_invoke$arity$2(G__38531,G__38532) : pred__38522.call(null,G__38531,G__38532));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_object,val,desc__$1,pid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38533 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null);
var G__38534 = expr__38523;
return (pred__38522.cljs$core$IFn$_invoke$arity$2 ? pred__38522.cljs$core$IFn$_invoke$arity$2(G__38533,G__38534) : pred__38522.call(null,G__38533,G__38534));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_heading,desc__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"button","button",1456579943),null], null), null);
var G__38536 = expr__38523;
return (pred__38522.cljs$core$IFn$_invoke$arity$2 ? pred__38522.cljs$core$IFn$_invoke$arity$2(G__38535,G__38536) : pred__38522.call(null,G__38535,G__38536));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_button,pid,desc__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_not_handled,key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}
}
}
}
}
}
})());

var G__38575 = (i__38520 + (1));
i__38520 = G__38575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38521),frontend$components$plugins_settings$settings_container_$_iter__38518(cljs.core.chunk_rest(s__38519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38521),null);
}
} else {
var desc = cljs.core.first(s__38519__$2);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
var desc__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"description","description",-1428560544),((function (key,val,type,desc,s__38519__$2,temp__5825__auto__,plugin_settings,pid,vec__38502,settings,set_settings_BANG_,vec__38505,edit_mode,set_edit_mode_BANG_,update_setting_BANG_){
return (function (p1__38501_SHARP_){
return frontend.handler.plugin.markdown_to_html(p1__38501_SHARP_);
});})(key,val,type,desc,s__38519__$2,temp__5825__auto__,plugin_settings,pid,vec__38502,settings,set_settings_BANG_,vec__38505,edit_mode,set_edit_mode_BANG_,update_setting_BANG_))
);
return cljs.core.cons((function (){var pred__38537 = cljs.core.contains_QMARK_;
var expr__38538 = type;
if(cljs.core.truth_((function (){var G__38540 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__38541 = expr__38538;
return (pred__38537.cljs$core$IFn$_invoke$arity$2 ? pred__38537.cljs$core$IFn$_invoke$arity$2(G__38540,G__38541) : pred__38537.call(null,G__38540,G__38541));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_input,val,desc__$1,update_setting_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38542 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__38543 = expr__38538;
return (pred__38537.cljs$core$IFn$_invoke$arity$2 ? pred__38537.cljs$core$IFn$_invoke$arity$2(G__38542,G__38543) : pred__38537.call(null,G__38542,G__38543));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_toggle,val,desc__$1,update_setting_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38544 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__38545 = expr__38538;
return (pred__38537.cljs$core$IFn$_invoke$arity$2 ? pred__38537.cljs$core$IFn$_invoke$arity$2(G__38544,G__38545) : pred__38537.call(null,G__38544,G__38545));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_enum,val,desc__$1,update_setting_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38546 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__38547 = expr__38538;
return (pred__38537.cljs$core$IFn$_invoke$arity$2 ? pred__38537.cljs$core$IFn$_invoke$arity$2(G__38546,G__38547) : pred__38537.call(null,G__38546,G__38547));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_object,val,desc__$1,pid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38548 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null);
var G__38549 = expr__38538;
return (pred__38537.cljs$core$IFn$_invoke$arity$2 ? pred__38537.cljs$core$IFn$_invoke$arity$2(G__38548,G__38549) : pred__38537.call(null,G__38548,G__38549));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_heading,desc__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
if(cljs.core.truth_((function (){var G__38550 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"button","button",1456579943),null], null), null);
var G__38551 = expr__38538;
return (pred__38537.cljs$core$IFn$_invoke$arity$2 ? pred__38537.cljs$core$IFn$_invoke$arity$2(G__38550,G__38551) : pred__38537.call(null,G__38550,G__38551));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_button,pid,desc__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins_settings.render_item_not_handled,key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}
}
}
}
}
}
})(),frontend$components$plugins_settings$settings_container_$_iter__38518(cljs.core.rest(s__38519__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(schema);
})())], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold.text-lg.py-4.warning","h2.font-bold.text-lg.py-4.warning",1245607094),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","no-settings-schema","plugin/no-settings-schema",428919345)], 0))], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins_settings$settings_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38552 = cljs.core.first(args__31746__auto__);
var G__38553 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38552,G__38553) : io.factorhouse.hsx.core.obj_get.call(null,G__38552,G__38553));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-container","settings-container",1905368503,null),args__31746__auto__),frontend$components$plugins_settings$settings_container,args__31746__auto__,null);
}
};
var frontend$components$plugins_settings$settings_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38576__i = 0, G__38576__a = new Array(arguments.length -  0);
while (G__38576__i < G__38576__a.length) {G__38576__a[G__38576__i] = arguments[G__38576__i + 0]; ++G__38576__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38576__a,0,null);
} 
return frontend$components$plugins_settings$settings_container__delegate.call(this,args__31746__auto__);};
frontend$components$plugins_settings$settings_container.cljs$lang$maxFixedArity = 0;
frontend$components$plugins_settings$settings_container.cljs$lang$applyTo = (function (arglist__38577){
var args__31746__auto__ = cljs.core.seq(arglist__38577);
return frontend$components$plugins_settings$settings_container__delegate(args__31746__auto__);
});
frontend$components$plugins_settings$settings_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins_settings$settings_container__delegate;
return frontend$components$plugins_settings$settings_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38554 = comp__31745__auto__;
var G__38555 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38554,G__38555) : io.factorhouse.hsx.core.react_memo.call(null,G__38554,G__38555));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-container");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.plugins_settings.js.map
