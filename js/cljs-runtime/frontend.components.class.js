goog.provide('frontend.components.class$');
frontend.components.class$.class_children_aux = (function frontend$components$class$class_children_aux(children,p__53128){
var map__53129 = p__53128;
var map__53129__$1 = cljs.core.__destructure_map(map__53129);
var opts = map__53129__$1;
var default_collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53129__$1,new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823));
if(cljs.core.seq(children)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5628__auto__ = (function frontend$components$class$class_children_aux_$_iter__53130(s__53131){
return (new cljs.core.LazySeq(null,(function (){
var s__53131__$1 = s__53131;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53131__$1);
if(temp__5825__auto__){
var s__53131__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53131__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__53131__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__53133 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__53132 = (0);
while(true){
if((i__53132 < size__5627__auto__)){
var child = cljs.core._nth(c__5626__auto__,i__53132);
cljs.core.chunk_append(b__53133,(function (){var title = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.ml-2","li.ml-2",540554485),frontend.components.block.page_reference(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-brackets?","show-brackets?",659769842),false,new cljs.core.Keyword(null,"show-unique-title?","show-unique-title?",-1545303427),false], null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child),null)], null);
if(cljs.core.seq(new cljs.core.Keyword("class","children","class/children",-1039559878).cljs$core$IFn$_invoke$arity$1(child))){
return frontend.ui.foldable(title,(function (){var G__53134 = new cljs.core.Keyword("class","children","class/children",-1039559878).cljs$core$IFn$_invoke$arity$1(child);
var G__53135 = opts;
return (frontend.components.class$.class_children_aux.cljs$core$IFn$_invoke$arity$2 ? frontend.components.class$.class_children_aux.cljs$core$IFn$_invoke$arity$2(G__53134,G__53135) : frontend.components.class$.class_children_aux.call(null,G__53134,G__53135));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),default_collapsed_QMARK_], null));
} else {
return title;
}
})());

var G__53146 = (i__53132 + (1));
i__53132 = G__53146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53133),frontend$components$class$class_children_aux_$_iter__53130(cljs.core.chunk_rest(s__53131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53133),null);
}
} else {
var child = cljs.core.first(s__53131__$2);
return cljs.core.cons((function (){var title = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.ml-2","li.ml-2",540554485),frontend.components.block.page_reference(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-brackets?","show-brackets?",659769842),false,new cljs.core.Keyword(null,"show-unique-title?","show-unique-title?",-1545303427),false], null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child),null)], null);
if(cljs.core.seq(new cljs.core.Keyword("class","children","class/children",-1039559878).cljs$core$IFn$_invoke$arity$1(child))){
return frontend.ui.foldable(title,(function (){var G__53136 = new cljs.core.Keyword("class","children","class/children",-1039559878).cljs$core$IFn$_invoke$arity$1(child);
var G__53137 = opts;
return (frontend.components.class$.class_children_aux.cljs$core$IFn$_invoke$arity$2 ? frontend.components.class$.class_children_aux.cljs$core$IFn$_invoke$arity$2(G__53136,G__53137) : frontend.components.class$.class_children_aux.call(null,G__53136,G__53137));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),default_collapsed_QMARK_], null));
} else {
return title;
}
})(),frontend$components$class$class_children_aux_$_iter__53130(cljs.core.rest(s__53131__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(children);
})()], null);
} else {
return null;
}
});
frontend.components.class$.class_children_count = (function frontend$components$class$class_children_count(children){
return cljs.core.count(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__53138_SHARP_){
return cljs.core.tree_seq(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Keyword("class","children","class/children",-1039559878)),new cljs.core.Keyword("class","children","class/children",-1039559878),p1__53138_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)));
});
frontend.components.class$.class_children = (function (){var render_fn__31744__auto__ = (function frontend$components$class$class_children(class$){
var vec__53139 = logseq.shui.hooks.use_state(null);
var children_pages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53139,(0),null);
var set_children_pages_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53139,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_class_extends_children_tree(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$))),(function (children){
return promesa.protocols._promise((set_children_pages_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_children_pages_BANG_.cljs$core$IFn$_invoke$arity$1(children) : set_children_pages_BANG_.call(null,children)));
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$)], null));

if(cljs.core.seq(children_pages)){
var children_count = frontend.components.class$.class_children_count(children_pages);
var default_collapsed_QMARK_ = (children_count > (30));
return frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.opacity-50","div.font-medium.opacity-50",-844969190),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","children-count","property/children-count",832525609),children_count], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-1.mt-2","div.ml-1.mt-2",-72616519),frontend.components.class$.class_children_aux(children_pages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),default_collapsed_QMARK_], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),false,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$class$class_children__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53142 = cljs.core.first(args__31746__auto__);
var G__53143 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53142,G__53143) : io.factorhouse.hsx.core.obj_get.call(null,G__53142,G__53143));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"class-children","class-children",1340926409,null),args__31746__auto__),frontend$components$class$class_children,args__31746__auto__,null);
}
};
var frontend$components$class$class_children = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53147__i = 0, G__53147__a = new Array(arguments.length -  0);
while (G__53147__i < G__53147__a.length) {G__53147__a[G__53147__i] = arguments[G__53147__i + 0]; ++G__53147__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53147__a,0,null);
} 
return frontend$components$class$class_children__delegate.call(this,args__31746__auto__);};
frontend$components$class$class_children.cljs$lang$maxFixedArity = 0;
frontend$components$class$class_children.cljs$lang$applyTo = (function (arglist__53148){
var args__31746__auto__ = cljs.core.seq(arglist__53148);
return frontend$components$class$class_children__delegate(args__31746__auto__);
});
frontend$components$class$class_children.cljs$core$IFn$_invoke$arity$variadic = frontend$components$class$class_children__delegate;
return frontend$components$class$class_children;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53144 = comp__31745__auto__;
var G__53145 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53144,G__53145) : io.factorhouse.hsx.core.react_memo.call(null,G__53144,G__53145));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"class-children");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.class.js.map
