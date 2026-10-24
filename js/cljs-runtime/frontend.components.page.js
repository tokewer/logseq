goog.provide('frontend.components.page');
goog.scope(function(){
  frontend.components.page.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.page.get_page_name = (function frontend$components$page$get_page_name(route_match){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
frontend.components.page.get_block_route_name = (function frontend$components$page$get_block_route_name(route_match){
if(frontend.util.web_platform_QMARK_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"block-route-name","block-route-name",1558267328)], null));
} else {
return null;
}
});

frontend.components.page.add_button_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$page$add_button_inner(block,child_uuids,p__46253){
var map__46254 = p__46253;
var map__46254__$1 = cljs.core.__destructure_map(map__46254);
var config_STAR_ = map__46254__$1;
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword(null,"block?","block?",1102479923));
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var has_children_QMARK_ = cljs.core.seq(child_uuids);
var page_QMARK_ = frontend.util.entity.page_QMARK_(block);
var opacity_class = (cljs.core.truth_((function (){var and__5140__auto__ = editing_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return has_children_QMARK_;
} else {
return and__5140__auto__;
}
})())?"opacity-0":(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(has_children_QMARK_)) && (clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))));
} else {
return and__5140__auto__;
}
})())?"opacity-0":(cljs.core.truth_(frontend.util.mobile_QMARK_())?"opacity-50":((has_children_QMARK_)?"opacity-0":"opacity-50"
))));
var config = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(config_STAR_,new cljs.core.Keyword(null,"page","page",849072397));
if(cljs.core.truth_((function (){var or__5142__auto__ = page_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = block_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.util.mobile_QMARK_();
}
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-block.block-add-button.flex-1.flex-col.rounded-sm.cursor-text.transition-opacity.ease-in.duration-100.!py-0","div.ls-block.block-add-button.flex-1.flex-col.rounded-sm.cursor-text.transition-opacity.ease-in.duration-100.!py-0",-115879583),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opacity_class,new cljs.core.PersistentArrayMap(null, 1, ["ls-block-content-indent",block_QMARK_], null)], null)),new cljs.core.Keyword(null,"parentblockid","parentblockid",1382468055),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return editing_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
frontend.util.stop(e);

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","container-id","editor/container-id",1915616583),container_id);

return frontend.handler.editor.api_insert_new_block_BANG_("",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,(cljs.core.truth_(page_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null))], 0)));
}
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return editing_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
var ref = logseq.shui.hooks.deref(_STAR_ref);
var prev_block = frontend.util.get_prev_block_non_collapsed.cljs$core$IFn$_invoke$arity$2(logseq.shui.hooks.deref(_STAR_ref),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"up-down?","up-down?",1084256379),true], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = prev_block;
if(cljs.core.truth_(and__5140__auto__)){
return dommy.core.has_class_QMARK_(prev_block,"is-blank");
} else {
return and__5140__auto__;
}
})())){
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(ref,"opacity-0");
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = prev_block;
if(cljs.core.truth_(and__5140__auto__)){
return has_children_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(ref,"opacity-50");
} else {
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(ref,"opacity-100");

}
}
}
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.shui.hooks.deref(_STAR_ref),"opacity-50");

return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.shui.hooks.deref(_STAR_ref),"opacity-100");
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
frontend.util.stop(e);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return e.target.click();
} else {
return null;
}
}),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(28),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_((function (){var and__5140__auto__ = block_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.mobile_QMARK_());
} else {
return and__5140__auto__;
}
})())?(6):(cljs.core.truth_(frontend.util.mobile_QMARK_())?(cljs.core.truth_(page_QMARK_)?(0):(18)):(22)
))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet-container","span.bullet-container",-1847146553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet","span.bullet",1911638461)], null)], null)], null)], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$add_button_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46255 = cljs.core.first(args__31746__auto__);
var G__46256 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46255,G__46256) : io.factorhouse.hsx.core.obj_get.call(null,G__46255,G__46256));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"add-button-inner","add-button-inner",1214754371,null),args__31746__auto__),frontend$components$page$add_button_inner,args__31746__auto__,null);
}
};
var frontend$components$page$add_button_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46422__i = 0, G__46422__a = new Array(arguments.length -  0);
while (G__46422__i < G__46422__a.length) {G__46422__a[G__46422__i] = arguments[G__46422__i + 0]; ++G__46422__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46422__a,0,null);
} 
return frontend$components$page$add_button_inner__delegate.call(this,args__31746__auto__);};
frontend$components$page$add_button_inner.cljs$lang$maxFixedArity = 0;
frontend$components$page$add_button_inner.cljs$lang$applyTo = (function (arglist__46423){
var args__31746__auto__ = cljs.core.seq(arglist__46423);
return frontend$components$page$add_button_inner__delegate(args__31746__auto__);
});
frontend$components$page$add_button_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$add_button_inner__delegate;
return frontend$components$page$add_button_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46257 = comp__31745__auto__;
var G__46258 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46257,G__46258) : io.factorhouse.hsx.core.react_memo.call(null,G__46257,G__46258));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"add-button-inner");

return comp__31745__auto__;
})();
frontend.components.page.add_button = (function (){var render_fn__31744__auto__ = (function frontend$components$page$add_button(block,child_uuids,config){
var editing_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417)], null));
return frontend.components.page.add_button_inner(block,child_uuids,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_));
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$add_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46259 = cljs.core.first(args__31746__auto__);
var G__46260 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46259,G__46260) : io.factorhouse.hsx.core.obj_get.call(null,G__46259,G__46260));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"add-button","add-button",1978420884,null),args__31746__auto__),frontend$components$page$add_button,args__31746__auto__,null);
}
};
var frontend$components$page$add_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46424__i = 0, G__46424__a = new Array(arguments.length -  0);
while (G__46424__i < G__46424__a.length) {G__46424__a[G__46424__i] = arguments[G__46424__i + 0]; ++G__46424__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46424__a,0,null);
} 
return frontend$components$page$add_button__delegate.call(this,args__31746__auto__);};
frontend$components$page$add_button.cljs$lang$maxFixedArity = 0;
frontend$components$page$add_button.cljs$lang$applyTo = (function (arglist__46425){
var args__31746__auto__ = cljs.core.seq(arglist__46425);
return frontend$components$page$add_button__delegate(args__31746__auto__);
});
frontend$components$page$add_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$add_button__delegate;
return frontend$components$page$add_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46261 = comp__31745__auto__;
var G__46262 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46261,G__46262) : io.factorhouse.hsx.core.react_memo.call(null,G__46261,G__46262));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"add-button");

return comp__31745__auto__;
})();
frontend.components.page.page_membership_resource_key = (function frontend$components$page$page_membership_resource_key(page_uuid,membership_kind,user_uuid){
var G__46263 = membership_kind;
var G__46263__$1 = (((G__46263 instanceof cljs.core.Keyword))?G__46263.fqn:null);
switch (G__46263__$1) {
case "normal":
return null;

break;
case "class":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-membership","page-membership",65309453),page_uuid,new cljs.core.Keyword(null,"class","class",-2030961996)], null);

break;
case "property":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-membership","page-membership",65309453),page_uuid,new cljs.core.Keyword(null,"property","property",-1114278232)], null);

break;
case "quick-add":
if(cljs.core.uuid_QMARK_(user_uuid)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-membership","page-membership",65309453),page_uuid,new cljs.core.Keyword(null,"quick-add","quick-add",-1090634172),user_uuid], null);
} else {
return null;
}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported page membership kind",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"membership-kind","membership-kind",-1040361024),membership_kind], null));

}
});
frontend.components.page.page_membership_kind = (function frontend$components$page$page_membership_kind(page,user_uuid){
if(cljs.core.truth_(frontend.util.entity.class_QMARK_(page))){
return new cljs.core.Keyword(null,"class","class",-2030961996);
} else {
if(cljs.core.truth_(frontend.util.entity.property_QMARK_(page))){
return new cljs.core.Keyword(null,"property","property",-1114278232);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page),logseq.common.config.quick_add_page_name)) && (cljs.core.uuid_QMARK_(user_uuid)))){
return new cljs.core.Keyword(null,"quick-add","quick-add",-1090634172);
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);

}
}
}
});
frontend.components.page.page_render_config = (function frontend$components$page$page_render_config(page,option,document_mode_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"block?","block?",1102479923),cljs.core.not(frontend.util.entity.page_QMARK_(page)),new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword("document","mode?","document/mode?",-994203479),document_mode_QMARK_,new cljs.core.Keyword(null,"library?","library?",1697356991),(logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.library_QMARK_.call(null,page))], null),option], 0));
});
frontend.components.page.render_stable_page = (function frontend$components$page$render_stable_page(page){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], 0));
});
frontend.components.page.normal_page_root = (function (){var render_fn__31744__auto__ = (function frontend$components$page$normal_page_root(page_uuid,config,hide_add_button_QMARK_){
var page = frontend.db.hooks.use_block_projection(page_uuid,frontend.components.page.render_stable_page);
var child_uuids = frontend.db.hooks.use_children(page_uuid);
if(cljs.core.truth_(page)){
return frontend.components.block.with_library_child_uuids(config,child_uuids,(function (visible_uuids){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-blocks-inner.relative","div.page-blocks-inner.relative",-470905024),(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.seq(visible_uuids);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079).cljs$core$IFn$_invoke$arity$1(config);
}
})())?frontend.components.block.page_root_virtual_list(config,visible_uuids):null),(((((!(frontend.config.publishing_QMARK_))) && (((cljs.core.empty_QMARK_(visible_uuids)) || (cljs.core.not(hide_add_button_QMARK_))))))?frontend.components.page.add_button(page,visible_uuids,config):null)], null);
}));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$normal_page_root__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46264 = cljs.core.first(args__31746__auto__);
var G__46265 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46264,G__46265) : io.factorhouse.hsx.core.obj_get.call(null,G__46264,G__46265));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"normal-page-root","normal-page-root",-1231385853,null),args__31746__auto__),frontend$components$page$normal_page_root,args__31746__auto__,null);
}
};
var frontend$components$page$normal_page_root = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46427__i = 0, G__46427__a = new Array(arguments.length -  0);
while (G__46427__i < G__46427__a.length) {G__46427__a[G__46427__i] = arguments[G__46427__i + 0]; ++G__46427__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46427__a,0,null);
} 
return frontend$components$page$normal_page_root__delegate.call(this,args__31746__auto__);};
frontend$components$page$normal_page_root.cljs$lang$maxFixedArity = 0;
frontend$components$page$normal_page_root.cljs$lang$applyTo = (function (arglist__46428){
var args__31746__auto__ = cljs.core.seq(arglist__46428);
return frontend$components$page$normal_page_root__delegate(args__31746__auto__);
});
frontend$components$page$normal_page_root.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$normal_page_root__delegate;
return frontend$components$page$normal_page_root;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46266 = comp__31745__auto__;
var G__46267 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46266,G__46267) : io.factorhouse.hsx.core.react_memo.call(null,G__46266,G__46267));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"normal-page-root");

return comp__31745__auto__;
})();
frontend.components.page.special_page_root = (function (){var render_fn__31744__auto__ = (function frontend$components$page$special_page_root(page_uuid,membership_kind,user_uuid,config,hide_add_button_QMARK_){
var page = frontend.db.hooks.use_block_projection(page_uuid,frontend.components.page.render_stable_page);
var membership_key = frontend.components.page.page_membership_resource_key(page_uuid,membership_kind,user_uuid);
var child_uuids = frontend.db.hooks.use_resource(membership_key);
if(cljs.core.truth_(page)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-blocks-inner.relative","div.page-blocks-inner.relative",-470905024),(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.seq(child_uuids);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079).cljs$core$IFn$_invoke$arity$1(config);
}
})())?frontend.components.block.page_root_virtual_list(config,child_uuids):null),(((((!(frontend.config.publishing_QMARK_))) && (((cljs.core.empty_QMARK_(child_uuids)) || (cljs.core.not(hide_add_button_QMARK_))))))?frontend.components.page.add_button(page,child_uuids,config):null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$special_page_root__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46268 = cljs.core.first(args__31746__auto__);
var G__46269 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46268,G__46269) : io.factorhouse.hsx.core.obj_get.call(null,G__46268,G__46269));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"special-page-root","special-page-root",-968587250,null),args__31746__auto__),frontend$components$page$special_page_root,args__31746__auto__,null);
}
};
var frontend$components$page$special_page_root = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46429__i = 0, G__46429__a = new Array(arguments.length -  0);
while (G__46429__i < G__46429__a.length) {G__46429__a[G__46429__i] = arguments[G__46429__i + 0]; ++G__46429__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46429__a,0,null);
} 
return frontend$components$page$special_page_root__delegate.call(this,args__31746__auto__);};
frontend$components$page$special_page_root.cljs$lang$maxFixedArity = 0;
frontend$components$page$special_page_root.cljs$lang$applyTo = (function (arglist__46430){
var args__31746__auto__ = cljs.core.seq(arglist__46430);
return frontend$components$page$special_page_root__delegate(args__31746__auto__);
});
frontend$components$page$special_page_root.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$special_page_root__delegate;
return frontend$components$page$special_page_root;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46270 = comp__31745__auto__;
var G__46271 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46270,G__46271) : io.factorhouse.hsx.core.react_memo.call(null,G__46270,G__46271));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"special-page-root");

return comp__31745__auto__;
})();
/**
 * Leaf property values are not containers; do not offer a create-sub-block control.
 */
frontend.components.page.hide_block_route_add_button_QMARK_ = (function frontend$components$page$hide_block_route_add_button_QMARK_(block,hide_add_button_QMARK_){
var or__5142__auto__ = hide_add_button_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.entity.leaf_property_value_QMARK_(block);
}
});
frontend.components.page.block_route_root = (function (){var render_fn__31744__auto__ = (function frontend$components$page$block_route_root(block_uuid,block,config,hide_add_button_QMARK_){
var child_uuids = frontend.db.hooks.use_children(block_uuid);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-blocks-inner.relative","div.page-blocks-inner.relative",-470905024),frontend.components.block.page_root_virtual_list(config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid], null)),(cljs.core.truth_(frontend.components.page.hide_block_route_add_button_QMARK_(block,hide_add_button_QMARK_))?null:frontend.components.page.add_button(block,child_uuids,config))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$block_route_root__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46272 = cljs.core.first(args__31746__auto__);
var G__46273 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46272,G__46273) : io.factorhouse.hsx.core.obj_get.call(null,G__46272,G__46273));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-route-root","block-route-root",-1399346340,null),args__31746__auto__),frontend$components$page$block_route_root,args__31746__auto__,null);
}
};
var frontend$components$page$block_route_root = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46431__i = 0, G__46431__a = new Array(arguments.length -  0);
while (G__46431__i < G__46431__a.length) {G__46431__a[G__46431__i] = arguments[G__46431__i + 0]; ++G__46431__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46431__a,0,null);
} 
return frontend$components$page$block_route_root__delegate.call(this,args__31746__auto__);};
frontend$components$page$block_route_root.cljs$lang$maxFixedArity = 0;
frontend$components$page$block_route_root.cljs$lang$applyTo = (function (arglist__46432){
var args__31746__auto__ = cljs.core.seq(arglist__46432);
return frontend$components$page$block_route_root__delegate(args__31746__auto__);
});
frontend$components$page$block_route_root.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$block_route_root__delegate;
return frontend$components$page$block_route_root;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46274 = comp__31745__auto__;
var G__46275 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46274,G__46275) : io.factorhouse.hsx.core.react_memo.call(null,G__46274,G__46275));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-route-root");

return comp__31745__auto__;
})();
frontend.components.page.page_blocks_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$page$page_blocks_cp(page,p__46276){
var map__46277 = p__46276;
var map__46277__$1 = cljs.core.__destructure_map(map__46277);
var option = map__46277__$1;
var hide_add_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46277__$1,new cljs.core.Keyword(null,"hide-add-button?","hide-add-button?",-79770881));
var on_page_blocks_rendered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46277__$1,new cljs.core.Keyword(null,"on-page-blocks-rendered","on-page-blocks-rendered",-870983117));
logseq.shui.hooks.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.truth_(on_page_blocks_rendered)){
return (on_page_blocks_rendered.cljs$core$IFn$_invoke$arity$0 ? on_page_blocks_rendered.cljs$core$IFn$_invoke$arity$0() : on_page_blocks_rendered.call(null));
} else {
return null;
}
}));

var document_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","mode?","document/mode?",-994203479)], null));
var config = (function (){var G__46278 = frontend.components.page.page_render_config(page,option,document_mode_QMARK_);
if(cljs.core.truth_(new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079).cljs$core$IFn$_invoke$arity$1(option))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46278,new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848),true);
} else {
return G__46278;
}
})();
var page_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
var user_uuid_string = frontend.handler.user.user_uuid();
var user_uuid = (cljs.core.truth_((function (){var and__5140__auto__ = typeof user_uuid_string === 'string';
if(and__5140__auto__){
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(user_uuid_string) : frontend.util.uuid_string_QMARK_.call(null,user_uuid_string));
} else {
return and__5140__auto__;
}
})())?cljs.core.uuid(user_uuid_string):null);
var membership_kind = frontend.components.page.page_membership_kind(page,user_uuid);
if(cljs.core.truth_(frontend.util.entity.page_QMARK_(page))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"normal","normal",-1519123858),membership_kind)){
return frontend.components.page.normal_page_root(page_uuid,config,hide_add_button_QMARK_);
} else {
return frontend.components.page.special_page_root(page_uuid,membership_kind,user_uuid,config,hide_add_button_QMARK_);
}
} else {
return frontend.components.page.block_route_root(page_uuid,page,config,hide_add_button_QMARK_);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$page_blocks_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46279 = cljs.core.first(args__31746__auto__);
var G__46280 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46279,G__46280) : io.factorhouse.hsx.core.obj_get.call(null,G__46279,G__46280));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-blocks-cp","page-blocks-cp",-1560645564,null),args__31746__auto__),frontend$components$page$page_blocks_cp,args__31746__auto__,null);
}
};
var frontend$components$page$page_blocks_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46433__i = 0, G__46433__a = new Array(arguments.length -  0);
while (G__46433__i < G__46433__a.length) {G__46433__a[G__46433__i] = arguments[G__46433__i + 0]; ++G__46433__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46433__a,0,null);
} 
return frontend$components$page$page_blocks_cp__delegate.call(this,args__31746__auto__);};
frontend$components$page$page_blocks_cp.cljs$lang$maxFixedArity = 0;
frontend$components$page$page_blocks_cp.cljs$lang$applyTo = (function (arglist__46434){
var args__31746__auto__ = cljs.core.seq(arglist__46434);
return frontend$components$page$page_blocks_cp__delegate(args__31746__auto__);
});
frontend$components$page$page_blocks_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$page_blocks_cp__delegate;
return frontend$components$page$page_blocks_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46281 = comp__31745__auto__;
var G__46282 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46281,G__46282) : io.factorhouse.hsx.core.react_memo.call(null,G__46281,G__46282));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-blocks-cp");

return comp__31745__auto__;
})();
frontend.components.page.journal_page = (function (){var render_fn__31744__auto__ = (function frontend$components$page$journal_page(journal_uuid,option){
var page = frontend.db.hooks.use_block_projection(journal_uuid,frontend.components.page.render_stable_page);
var child_uuids = frontend.db.hooks.use_children(journal_uuid);
var document_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","mode?","document/mode?",-994203479)], null));
if(cljs.core.truth_(page)){
var container_id = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_container_id(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journal-page","journal-page",-892969635),journal_uuid], null));
}
})();
var config = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.components.page.page_render_config(page,option,document_mode_QMARK_),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id);
var page_blocks_content = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-blocks-inner.relative","div.page-blocks-inner.relative",-470905024),frontend.components.block.plain_block_list(config,child_uuids),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-add-button?","hide-add-button?",-79770881).cljs$core$IFn$_invoke$arity$1(option))?null:frontend.components.page.add_button(page,child_uuids,config))], null);
var G__46283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"page","page",849072397),page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"journals?","journals?",1584679180),true,new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"page-blocks-content","page-blocks-content",-1567372374),page_blocks_content], 0));
return (frontend.components.page.page_inner.cljs$core$IFn$_invoke$arity$1 ? frontend.components.page.page_inner.cljs$core$IFn$_invoke$arity$1(G__46283) : frontend.components.page.page_inner.call(null,G__46283));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$journal_page__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46284 = cljs.core.first(args__31746__auto__);
var G__46285 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46284,G__46285) : io.factorhouse.hsx.core.obj_get.call(null,G__46284,G__46285));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"journal-page","journal-page",747561892,null),args__31746__auto__),frontend$components$page$journal_page,args__31746__auto__,null);
}
};
var frontend$components$page$journal_page = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46435__i = 0, G__46435__a = new Array(arguments.length -  0);
while (G__46435__i < G__46435__a.length) {G__46435__a[G__46435__i] = arguments[G__46435__i + 0]; ++G__46435__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46435__a,0,null);
} 
return frontend$components$page$journal_page__delegate.call(this,args__31746__auto__);};
frontend$components$page$journal_page.cljs$lang$maxFixedArity = 0;
frontend$components$page$journal_page.cljs$lang$applyTo = (function (arglist__46436){
var args__31746__auto__ = cljs.core.seq(arglist__46436);
return frontend$components$page$journal_page__delegate(args__31746__auto__);
});
frontend$components$page$journal_page.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$journal_page__delegate;
return frontend$components$page$journal_page;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46286 = comp__31745__auto__;
var G__46287 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46286,G__46287) : io.factorhouse.hsx.core.react_memo.call(null,G__46286,G__46287));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"journal-page");

return comp__31745__auto__;
})();
frontend.components.page.today_queries = (function (){var render_fn__31744__auto__ = (function frontend$components$page$today_queries(repo,page,today_QMARK_,sidebar_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = today_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(sidebar_QMARK_);
} else {
return and__5140__auto__;
}
})())){
var queries = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.config_for_repo(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null)),repo),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-queries","default-queries",1508774260),new cljs.core.Keyword(null,"journals","journals",-1915761091)], null));
if(cljs.core.seq(queries)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#today-queries","div#today-queries",935035289),(function (){var iter__5628__auto__ = (function frontend$components$page$today_queries_$_iter__46288(s__46289){
return (new cljs.core.LazySeq(null,(function (){
var s__46289__$1 = s__46289;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46289__$1);
if(temp__5825__auto__){
var s__46289__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46289__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46289__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46291 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46290 = (0);
while(true){
if((i__46290 < size__5627__auto__)){
var query = cljs.core._nth(c__5626__auto__,i__46290);
cljs.core.chunk_append(b__46291,(function (){var query_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.catch_error(frontend.ui.component_error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","default-query-error","page/default-query-error",-1967472337)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_SINGLEQUOTE_], 0))], null)),frontend.components.query.custom_query(frontend.components.block.wrap_query_components(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"page","page",849072397),frontend.components.page.page_cp,new cljs.core.Keyword(null,"built-in-query?","built-in-query?",-1060650385),true,new cljs.core.Keyword(null,"today-query?","today-query?",-571404214),true,new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"today-day","today-day",2113928411),frontend.date.today_journal_day()], null)),query_SINGLEQUOTE_))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)+"-custom-query-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_SINGLEQUOTE_)))], null));
})());

var G__46437 = (i__46290 + (1));
i__46290 = G__46437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46291),frontend$components$page$today_queries_$_iter__46288(cljs.core.chunk_rest(s__46289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46291),null);
}
} else {
var query = cljs.core.first(s__46289__$2);
return cljs.core.cons((function (){var query_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.catch_error(frontend.ui.component_error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","default-query-error","page/default-query-error",-1967472337)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_SINGLEQUOTE_], 0))], null)),frontend.components.query.custom_query(frontend.components.block.wrap_query_components(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"page","page",849072397),frontend.components.page.page_cp,new cljs.core.Keyword(null,"built-in-query?","built-in-query?",-1060650385),true,new cljs.core.Keyword(null,"today-query?","today-query?",-571404214),true,new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"today-day","today-day",2113928411),frontend.date.today_journal_day()], null)),query_SINGLEQUOTE_))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)+"-custom-query-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_SINGLEQUOTE_)))], null));
})(),frontend$components$page$today_queries_$_iter__46288(cljs.core.rest(s__46289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(queries);
})()], null);
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$today_queries__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46292 = cljs.core.first(args__31746__auto__);
var G__46293 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46292,G__46293) : io.factorhouse.hsx.core.obj_get.call(null,G__46292,G__46293));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"today-queries","today-queries",390780636,null),args__31746__auto__),frontend$components$page$today_queries,args__31746__auto__,null);
}
};
var frontend$components$page$today_queries = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46438__i = 0, G__46438__a = new Array(arguments.length -  0);
while (G__46438__i < G__46438__a.length) {G__46438__a[G__46438__i] = arguments[G__46438__i + 0]; ++G__46438__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46438__a,0,null);
} 
return frontend$components$page$today_queries__delegate.call(this,args__31746__auto__);};
frontend$components$page$today_queries.cljs$lang$maxFixedArity = 0;
frontend$components$page$today_queries.cljs$lang$applyTo = (function (arglist__46439){
var args__31746__auto__ = cljs.core.seq(arglist__46439);
return frontend$components$page$today_queries__delegate(args__31746__auto__);
});
frontend$components$page$today_queries.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$today_queries__delegate;
return frontend$components$page$today_queries;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46294 = comp__31745__auto__;
var G__46295 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46294,G__46295) : io.factorhouse.hsx.core.react_memo.call(null,G__46294,G__46295));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"today-queries");

return comp__31745__auto__;
})();
frontend.components.page.db_page_title_actions = (function (){var render_fn__31744__auto__ = (function frontend$components$page$db_page_title_actions(page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-page-title-actions","div.ls-page-title-actions",-1318673608),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2","div.flex.flex-row.items-center.gap-2",212596841),(cljs.core.truth_(new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(page))?null:(function (){var G__46296 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-0 h-6 text-xs text-muted-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property-key","property-key",972402246),"Icon",new cljs.core.Keyword(null,"block","block",664686210),page,new cljs.core.Keyword(null,"target","target",253001721),e.currentTarget], null)], null));
})], null);
var G__46297 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("command.editor","add-property-icon","command.editor/add-property-icon",992527584)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46296,G__46297) : logseq.shui.ui.button.call(null,G__46296,G__46297));
})()),(function (){var G__46298 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-0 h-6 text-xs text-muted-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(frontend.util.entity.property_QMARK_(page))){
var G__46300 = e.currentTarget;
var G__46301 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-dropdown","div.ls-property-dropdown",-263769697),frontend.components.property.config.property_dropdown(page,null,cljs.core.PersistentArrayMap.EMPTY)], null);
});
var G__46302 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"dropdown-menu?","dropdown-menu?",-682398029),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__46300,G__46301,G__46302) : logseq.shui.ui.popup_show_BANG_.call(null,G__46300,G__46301,G__46302));
} else {
var opts = (function (){var G__46303 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),page,new cljs.core.Keyword(null,"target","target",253001721),e.currentTarget], null);
if(cljs.core.truth_(frontend.util.entity.class_QMARK_(page))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46303,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),true);
} else {
return G__46303;
}
})();
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),opts], null));
}
})], null);
var G__46299 = (cljs.core.truth_(frontend.util.entity.class_QMARK_(page))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("class","add-property","class/add-property",-870982079)], 0)):(cljs.core.truth_(frontend.util.entity.property_QMARK_(page))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","configure","ui/configure",1586828380)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-property","property/set-property",1457602755)], 0))
));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46298,G__46299) : logseq.shui.ui.button.call(null,G__46298,G__46299));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$db_page_title_actions__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46304 = cljs.core.first(args__31746__auto__);
var G__46305 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46304,G__46305) : io.factorhouse.hsx.core.obj_get.call(null,G__46304,G__46305));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"db-page-title-actions","db-page-title-actions",-1575894734,null),args__31746__auto__),frontend$components$page$db_page_title_actions,args__31746__auto__,null);
}
};
var frontend$components$page$db_page_title_actions = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46448__i = 0, G__46448__a = new Array(arguments.length -  0);
while (G__46448__i < G__46448__a.length) {G__46448__a[G__46448__i] = arguments[G__46448__i + 0]; ++G__46448__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46448__a,0,null);
} 
return frontend$components$page$db_page_title_actions__delegate.call(this,args__31746__auto__);};
frontend$components$page$db_page_title_actions.cljs$lang$maxFixedArity = 0;
frontend$components$page$db_page_title_actions.cljs$lang$applyTo = (function (arglist__46450){
var args__31746__auto__ = cljs.core.seq(arglist__46450);
return frontend$components$page$db_page_title_actions__delegate(args__31746__auto__);
});
frontend$components$page$db_page_title_actions.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$db_page_title_actions__delegate;
return frontend$components$page$db_page_title_actions;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46306 = comp__31745__auto__;
var G__46307 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46306,G__46307) : io.factorhouse.hsx.core.react_memo.call(null,G__46306,G__46307));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"db-page-title-actions");

return comp__31745__auto__;
})();
frontend.components.page.db_page_title = (function (){var render_fn__31744__auto__ = (function frontend$components$page$db_page_title(page,p__46308){
var map__46309 = p__46308;
var map__46309__$1 = cljs.core.__destructure_map(map__46309);
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46309__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var journals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46309__$1,new cljs.core.Keyword(null,"journals?","journals?",1584679180));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46309__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var tag_dialog_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46309__$1,new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494));
var display_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46309__$1,new cljs.core.Keyword(null,"display-title","display-title",773425144));
var block_metadata_ready_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46309__$1,new cljs.core.Keyword(null,"block-metadata-ready?","block-metadata-ready?",1488736426));
var with_actions_QMARK_ = (!(frontend.config.publishing_QMARK_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-page-title.flex.flex-1.w-full.content.items-start.title","div.ls-page-title.flex.flex-1.w-full.content.items-start.title",-2108156282),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"title","data-testid","page title",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(frontend.util.right_click_QMARK_(e)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("page-title","context","page-title/context",1788836745),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page-entity","page-entity",1168837897),page], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.relative","div.w-full.relative",-818161500),frontend.components.block.block_container(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"journal-page?","journal-page?",-1663876064),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"block-metadata-ready?","block-metadata-ready?",1488736426),new cljs.core.Keyword(null,"hide-title?","hide-title?",1631018350),new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494),new cljs.core.Keyword(null,"page-title-actions-cp","page-title-actions-cp",-1825610797),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"hide-children?","hide-children?",-2104598603),new cljs.core.Keyword(null,"on-title-click","on-title-click",-1700145163),new cljs.core.Keyword(null,"page-title?","page-title?",534381078),new cljs.core.Keyword(null,"show-tag-and-property-classes?","show-tag-and-property-classes?",-152227272),new cljs.core.Keyword(null,"display-title","display-title",773425144)],[frontend.util.entity.journal_QMARK_(page),sidebar_QMARK_,block_metadata_ready_QMARK_,sidebar_QMARK_,tag_dialog_QMARK_,((((with_actions_QMARK_) && (((cljs.core.not(frontend.util.mobile_QMARK_())) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)))))))?frontend.components.page.db_page_title_actions:null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))),container_id,true,(function (e){
if(cljs.core.truth_(frontend.components.page.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return journals_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page));
} else {
return null;

}
}
}),true,true,display_title]),page)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$db_page_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46310 = cljs.core.first(args__31746__auto__);
var G__46311 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46310,G__46311) : io.factorhouse.hsx.core.obj_get.call(null,G__46310,G__46311));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"db-page-title","db-page-title",1743161372,null),args__31746__auto__),frontend$components$page$db_page_title,args__31746__auto__,null);
}
};
var frontend$components$page$db_page_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46458__i = 0, G__46458__a = new Array(arguments.length -  0);
while (G__46458__i < G__46458__a.length) {G__46458__a[G__46458__i] = arguments[G__46458__i + 0]; ++G__46458__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46458__a,0,null);
} 
return frontend$components$page$db_page_title__delegate.call(this,args__31746__auto__);};
frontend$components$page$db_page_title.cljs$lang$maxFixedArity = 0;
frontend$components$page$db_page_title.cljs$lang$applyTo = (function (arglist__46459){
var args__31746__auto__ = cljs.core.seq(arglist__46459);
return frontend$components$page$db_page_title__delegate(args__31746__auto__);
});
frontend$components$page$db_page_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$db_page_title__delegate;
return frontend$components$page$db_page_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46312 = comp__31745__auto__;
var G__46313 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46312,G__46313) : io.factorhouse.hsx.core.react_memo.call(null,G__46312,G__46313));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"db-page-title");

return comp__31745__auto__;
})();
frontend.components.page.get_path_page_name = (function frontend$components$page$get_path_page_name(route_match,page_name,route_block_uuid){
var or__5142__auto__ = page_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = route_block_uuid;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = frontend.components.page.get_page_name(route_match);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return frontend.state.get_current_page();
}
}
}
});
frontend.components.page.get_sanity_page_name = (function frontend$components$page$get_sanity_page_name(route_match,page_name,route_block_uuid){
var temp__5825__auto__ = frontend.components.page.get_path_page_name(route_match,page_name,route_block_uuid);
if(cljs.core.truth_(temp__5825__auto__)){
var path_page_name = temp__5825__auto__;
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(path_page_name) : frontend.util.page_name_sanity_lc.call(null,path_page_name));
} else {
return null;
}
});
frontend.components.page.lsp_pagebar_slot = (function (){var render_fn__31744__auto__ = (function frontend$components$page$lsp_pagebar_slot(){
if((!(frontend.config.publishing_QMARK_))){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),frontend.components.plugins.hook_ui_slot(new cljs.core.Keyword(null,"page-head-actions-slotted","page-head-actions-slotted",1227457137),null),frontend.components.plugins.hook_ui_items(new cljs.core.Keyword(null,"pagebar","pagebar",-1992158385))], null);
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$lsp_pagebar_slot__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46314 = cljs.core.first(args__31746__auto__);
var G__46315 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46314,G__46315) : io.factorhouse.hsx.core.obj_get.call(null,G__46314,G__46315));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lsp-pagebar-slot","lsp-pagebar-slot",935474352,null),args__31746__auto__),frontend$components$page$lsp_pagebar_slot,args__31746__auto__,null);
}
};
var frontend$components$page$lsp_pagebar_slot = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46460__i = 0, G__46460__a = new Array(arguments.length -  0);
while (G__46460__i < G__46460__a.length) {G__46460__a[G__46460__i] = arguments[G__46460__i + 0]; ++G__46460__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46460__a,0,null);
} 
return frontend$components$page$lsp_pagebar_slot__delegate.call(this,args__31746__auto__);};
frontend$components$page$lsp_pagebar_slot.cljs$lang$maxFixedArity = 0;
frontend$components$page$lsp_pagebar_slot.cljs$lang$applyTo = (function (arglist__46461){
var args__31746__auto__ = cljs.core.seq(arglist__46461);
return frontend$components$page$lsp_pagebar_slot__delegate(args__31746__auto__);
});
frontend$components$page$lsp_pagebar_slot.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$lsp_pagebar_slot__delegate;
return frontend$components$page$lsp_pagebar_slot;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46316 = comp__31745__auto__;
var G__46317 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46316,G__46317) : io.factorhouse.hsx.core.react_memo.call(null,G__46316,G__46317));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lsp-pagebar-slot");

return comp__31745__auto__;
})();
frontend.components.page.tabs = (function (){var render_fn__31744__auto__ = (function frontend$components$page$tabs(page,opts,on_first_table_paint_BANG_){
var class_QMARK_ = frontend.util.entity.class_QMARK_(page);
var property_QMARK_ = frontend.util.entity.property_QMARK_(page);
var both_QMARK_ = (function (){var and__5140__auto__ = class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return property_QMARK_;
} else {
return and__5140__auto__;
}
})();
var default_tab = (cljs.core.truth_(both_QMARK_)?"tag":(cljs.core.truth_(class_QMARK_)?"tag":"property"
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-tabs","div.page-tabs",-2045041920),(function (){var G__46318 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),default_tab,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null);
var G__46319 = (cljs.core.truth_(both_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),(function (){var G__46322 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-8"], null);
var G__46323 = (cljs.core.truth_(class_QMARK_)?(function (){var G__46326 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"tag",new cljs.core.Keyword(null,"class","class",-2030961996),"py-1 text-xs"], null);
var G__46327 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("class","tagged-nodes","class/tagged-nodes",1894502488)], 0));
return (logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2(G__46326,G__46327) : logseq.shui.ui.tabs_trigger.call(null,G__46326,G__46327));
})():null);
var G__46324 = (cljs.core.truth_(property_QMARK_)?(function (){var G__46328 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"property",new cljs.core.Keyword(null,"class","class",-2030961996),"py-1 text-xs"], null);
var G__46329 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","nodes-with-property","property/nodes-with-property",1076894995)], 0));
return (logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2(G__46328,G__46329) : logseq.shui.ui.tabs_trigger.call(null,G__46328,G__46329));
})():null);
var G__46325 = (cljs.core.truth_(property_QMARK_)?frontend.components.db_based.page.configure_property(page):null);
return (logseq.shui.ui.tabs_list.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.tabs_list.cljs$core$IFn$_invoke$arity$4(G__46322,G__46323,G__46324,G__46325) : logseq.shui.ui.tabs_list.call(null,G__46322,G__46323,G__46324,G__46325));
})()], null):null);
var G__46320 = (cljs.core.truth_(class_QMARK_)?(function (){var G__46330 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"tag"], null);
var G__46331 = frontend.components.objects.class_objects(page,opts,on_first_table_paint_BANG_);
return (logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2(G__46330,G__46331) : logseq.shui.ui.tabs_content.call(null,G__46330,G__46331));
})():null);
var G__46321 = (cljs.core.truth_(property_QMARK_)?(function (){var G__46332 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"property"], null);
var G__46333 = frontend.components.objects.property_related_objects(page,opts);
return (logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2(G__46332,G__46333) : logseq.shui.ui.tabs_content.call(null,G__46332,G__46333));
})():null);
return (logseq.shui.ui.tabs.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.tabs.cljs$core$IFn$_invoke$arity$4(G__46318,G__46319,G__46320,G__46321) : logseq.shui.ui.tabs.call(null,G__46318,G__46319,G__46320,G__46321));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$tabs__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46334 = cljs.core.first(args__31746__auto__);
var G__46335 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46334,G__46335) : io.factorhouse.hsx.core.obj_get.call(null,G__46334,G__46335));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"tabs","tabs",860676173,null),args__31746__auto__),frontend$components$page$tabs,args__31746__auto__,null);
}
};
var frontend$components$page$tabs = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46462__i = 0, G__46462__a = new Array(arguments.length -  0);
while (G__46462__i < G__46462__a.length) {G__46462__a[G__46462__i] = arguments[G__46462__i + 0]; ++G__46462__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46462__a,0,null);
} 
return frontend$components$page$tabs__delegate.call(this,args__31746__auto__);};
frontend$components$page$tabs.cljs$lang$maxFixedArity = 0;
frontend$components$page$tabs.cljs$lang$applyTo = (function (arglist__46463){
var args__31746__auto__ = cljs.core.seq(arglist__46463);
return frontend$components$page$tabs__delegate(args__31746__auto__);
});
frontend$components$page$tabs.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$tabs__delegate;
return frontend$components$page$tabs;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46336 = comp__31745__auto__;
var G__46337 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46336,G__46337) : io.factorhouse.hsx.core.react_memo.call(null,G__46336,G__46337));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"tabs");

return comp__31745__auto__;
})();
frontend.components.page.sidebar_page_properties = (function (){var render_fn__31744__auto__ = (function frontend$components$page$sidebar_page_properties(config,page){
var vec__46338 = logseq.shui.hooks.use_state(cljs.core.not(frontend.util.entity.class_QMARK_(page)));
var collapsed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46338,(0),null);
var set_collapsed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46338,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-sidebar-page-properties.flex.flex-col.gap-2.mt-2","div.ls-sidebar-page-properties.flex.flex-col.gap-2.mt-2",1513506928),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__46341 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 text-muted-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__46343 = cljs.core.not(collapsed_QMARK_);
return (set_collapsed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_collapsed_BANG_.cljs$core$IFn$_invoke$arity$1(G__46343) : set_collapsed_BANG_.call(null,G__46343));
})], null);
var G__46342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs","span.text-xs",63518557),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(collapsed_QMARK_)?new cljs.core.Keyword("page","open-properties","page/open-properties",472038481):new cljs.core.Keyword("page","hide-properties","page/hide-properties",91919603))], 0))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46341,G__46342) : logseq.shui.ui.button.call(null,G__46341,G__46342));
})()], null),(cljs.core.truth_(collapsed_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.block.db_properties_cp(config,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar-properties?","sidebar-properties?",606274147),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-4","hr.my-4",-1603464789)], null)], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$sidebar_page_properties__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46344 = cljs.core.first(args__31746__auto__);
var G__46345 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46344,G__46345) : io.factorhouse.hsx.core.obj_get.call(null,G__46344,G__46345));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-page-properties","sidebar-page-properties",198666704,null),args__31746__auto__),frontend$components$page$sidebar_page_properties,args__31746__auto__,null);
}
};
var frontend$components$page$sidebar_page_properties = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46464__i = 0, G__46464__a = new Array(arguments.length -  0);
while (G__46464__i < G__46464__a.length) {G__46464__a[G__46464__i] = arguments[G__46464__i + 0]; ++G__46464__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46464__a,0,null);
} 
return frontend$components$page$sidebar_page_properties__delegate.call(this,args__31746__auto__);};
frontend$components$page$sidebar_page_properties.cljs$lang$maxFixedArity = 0;
frontend$components$page$sidebar_page_properties.cljs$lang$applyTo = (function (arglist__46465){
var args__31746__auto__ = cljs.core.seq(arglist__46465);
return frontend$components$page$sidebar_page_properties__delegate(args__31746__auto__);
});
frontend$components$page$sidebar_page_properties.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$sidebar_page_properties__delegate;
return frontend$components$page$sidebar_page_properties;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46346 = comp__31745__auto__;
var G__46347 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46346,G__46347) : io.factorhouse.hsx.core.react_memo.call(null,G__46346,G__46347));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-page-properties");

return comp__31745__auto__;
})();
/**
 * Tags/class objects are the first paint. Children trees and linked
 *   refs must not share that snapshot batch.
 */
frontend.components.page.defer_class_page_below_fold_QMARK_ = (function frontend$components$page$defer_class_page_below_fold_QMARK_(page,p__46348){
var map__46349 = p__46348;
var map__46349__$1 = cljs.core.__destructure_map(map__46349);
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46349__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var tag_dialog_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46349__$1,new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494));
return cljs.core.boolean$((function (){var and__5140__auto__ = frontend.util.entity.class_QMARK_(page);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(sidebar_QMARK_)) && (cljs.core.not(tag_dialog_QMARK_)));
} else {
return and__5140__auto__;
}
})());
});
frontend.components.page.class_page_below_fold_delay_ms = (800);
/**
 * A class page shows its body once the objects table reports its first
 *   window. That window's view-data has answered by then, so the body's
 *   snapshot requests queue behind it. The timer only caps the wait for a
 *   table that never reports. The release callback keeps its identity, so
 *   the memoized tabs do not re-render when the body is released.
 */
frontend.components.page.use_below_fold_ready = (function frontend$components$page$use_below_fold_ready(defer_QMARK_){
var vec__46350 = logseq.shui.hooks.use_state(false);
var released_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46350,(0),null);
var set_released_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46350,(1),null);
var ready_QMARK_ = (function (){var or__5142__auto__ = cljs.core.not(defer_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return released_QMARK_;
}
})();
var release_BANG_ = logseq.shui.hooks.use_callback((function (){
return (set_released_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_released_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_released_BANG_.call(null,true));
}),cljs.core.PersistentVector.EMPTY);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(ready_QMARK_)){
return null;
} else {
var timeout_id = setTimeout(release_BANG_,frontend.components.page.class_page_below_fold_delay_ms);
return (function (){
return clearTimeout(timeout_id);
});
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ready_QMARK_], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ready_QMARK_,release_BANG_], null);
});
frontend.components.page.maybe_after_first_paint = (function frontend$components$page$maybe_after_first_paint(ready_QMARK_,content){
if(cljs.core.truth_(ready_QMARK_)){
return content;
} else {
return null;
}
});
/**
 * React key for the page inner wrap, which owns the child block tree.
 */
frontend.components.page.page_inner_key = (function frontend$components$page$page_inner_key(page){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)));
});
frontend.components.page.page_references_key = (function frontend$components$page$page_references_key(page){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))+"-refs");
});
frontend.components.page.page_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$page$page_inner(p__46353){
var map__46354 = p__46353;
var map__46354__$1 = cljs.core.__destructure_map(map__46354);
var option = map__46354__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46354__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var unlinked_refs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46354__$1,new cljs.core.Keyword(null,"unlinked-refs?","unlinked-refs?",-1047663389));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46354__$1,new cljs.core.Keyword(null,"config","config",994861415));
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46354__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46354__$1,new cljs.core.Keyword(null,"preview?","preview?",590561578));
var journals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46354__$1,new cljs.core.Keyword(null,"journals?","journals?",1584679180));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46354__$1,new cljs.core.Keyword(null,"page","page",849072397));
var tag_dialog_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46354__$1,new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494));
var linked_refs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46354__$1,new cljs.core.Keyword(null,"linked-refs?","linked-refs?",-119740497));
var current_repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
var container_key = cljs.core.select_keys(option,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"embed?","embed?",-922305920),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"table?","table?",-1064705406),new cljs.core.Keyword(null,"block?","block?",1102479923),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"page-name","page-name",974981762)], null));
var container_id = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_container_id(container_key);
}
})();
var repo__$1 = (function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return current_repo;
}
})();
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))));
var block_QMARK_ = (!((new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(page) == null)));
var class_page_QMARK_ = frontend.util.entity.class_QMARK_(page);
var property_page_QMARK_ = frontend.util.entity.property_QMARK_(page);
var title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page);
var journal_QMARK_ = frontend.util.entity.journal_QMARK_(page);
var recycle_page_QMARK_ = (function (){var and__5140__auto__ = frontend.util.entity.page_QMARK_(page);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,logseq.common.config.recycle_page_name);
} else {
return and__5140__auto__;
}
})();
var fmt_journal_QMARK_ = cljs.core.boolean$(frontend.date.journal_title__GT_int(title));
var today_QMARK_ = (function (){var and__5140__auto__ = frontend.util.entity.journal_QMARK_(page);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page),frontend.date.today_journal_day());
} else {
return and__5140__auto__;
}
})();
var home_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),frontend.state.get_current_route());
var recycled_QMARK_ = (logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.recycled_QMARK_.call(null,page));
var page_display_title = (cljs.core.truth_(frontend.util.entity.page_QMARK_(page))?frontend.handler.route.built_in_page_title(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page)):null);
var show_tabs_QMARK_ = (function (){var and__5140__auto__ = (function (){var or__5142__auto__ = class_page_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.entity.property_QMARK_(page);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(tag_dialog_QMARK_);
} else {
return and__5140__auto__;
}
})();
var vec__46355 = frontend.components.page.use_below_fold_ready(frontend.components.page.defer_class_page_below_fold_QMARK_(page,option));
var body_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46355,(0),null);
var on_first_table_paint_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46355,(1),null);
if(cljs.core.truth_(page)){
if(cljs.core.truth_((function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block_QMARK_;
}
})())){
if(cljs.core.truth_(recycled_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.page.relative.cp__page-inner-wrap","div.flex-1.page.relative.cp__page-inner-wrap",-883092978),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.grid.gap-4.sm:gap-8.page-inner.mb-16","div.relative.grid.gap-4.sm:gap-8.page-inner.mb-16",1708456889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-75","div.opacity-75",588240867),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","moved-to-recycle","page/moved-to-recycle",853990901)], 0))], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.page.relative.cp__page-inner-wrap","div.flex-1.page.relative.cp__page-inner-wrap",-883092978),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page)))?(function (){var page_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page));
if(cljs.core.seq(page_names)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-page-tags","data-page-tags",347588105),frontend.util.text.build_data_value(page_names)], null);
} else {
return null;
}
})():cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.page.page_inner_key(page),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-journals","is-journals",-1555155588),(function (){var or__5142__auto__ = journal_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return fmt_journal_QMARK_;
}
})(),new cljs.core.Keyword(null,"is-today-page","is-today-page",1139482742),(((!(home_QMARK_))) && (cljs.core.boolean$(today_QMARK_))),new cljs.core.Keyword(null,"is-node-page","is-node-page",193741470),(function (){var or__5142__auto__ = class_page_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property_page_QMARK_;
}
})()], null)], null))], null)], 0)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.grid.gap-4.sm:gap-8.page-inner.mb-16","div.relative.grid.gap-4.sm:gap-8.page-inner.mb-16",1708456889),(cljs.core.truth_((function (){var or__5142__auto__ = block_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return sidebar_QMARK_;
}
})())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.space-between","div.flex.flex-row.space-between",1433228948),(cljs.core.truth_(frontend.util.entity.page_QMARK_(page))?frontend.components.page.db_page_title(page,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_,new cljs.core.Keyword(null,"journals?","journals?",1584679180),journals_QMARK_,new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"display-title","display-title",773425144),page_display_title,new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494),tag_dialog_QMARK_,new cljs.core.Keyword(null,"block-metadata-ready?","block-metadata-ready?",1488736426),(cljs.core.truth_(journals_QMARK_)?new cljs.core.Keyword("journal","render-data-ready?","journal/render-data-ready?",-1906443136).cljs$core$IFn$_invoke$arity$1(option):new cljs.core.Keyword(null,"block-metadata-ready?","block-metadata-ready?",1488736426).cljs$core$IFn$_invoke$arity$1(option))], null)):null),frontend.components.page.lsp_pagebar_slot()], null),(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.entity.page_QMARK_(page);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.library_QMARK_.call(null,page)));
} else {
return and__5140__auto__;
}
})())?frontend.components.page.maybe_after_first_paint(body_ready_QMARK_,frontend.components.property.bidirectional_properties_area(page,config__$1)):null)], null)),((((block_QMARK_) && (cljs.core.not(sidebar_QMARK_))))?frontend.components.block.breadcrumb.breadcrumb(cljs.core.PersistentArrayMap.EMPTY,repo__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),page], null)):null),(cljs.core.truth_((logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.library_QMARK_.call(null,page)))?frontend.components.library.add_pages(page):null),(cljs.core.truth_((function (){var and__5140__auto__ = sidebar_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.entity.page_QMARK_(page);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-mb-8","div.-mb-8",2042392003),frontend.components.page.sidebar_page_properties(config__$1,page)], null):null),(cljs.core.truth_(show_tabs_QMARK_)?frontend.components.page.tabs(page,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),option,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_], null),on_first_table_paint_BANG_):null),frontend.components.page.maybe_after_first_paint(body_ready_QMARK_,((cljs.core.not(tag_dialog_QMARK_))?(cljs.core.truth_(recycle_page_QMARK_)?frontend.components.recycle.recycle_page(page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-recycle-page-title-compact"], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-page-blocks","div.ls-page-blocks",1740155679),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(frontend.util.mobile_QMARK_())?(0):(-20))], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__5142__auto__ = sidebar_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.capacitor_QMARK_();
}
})())?null:"mt-4")], null),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"page-blocks-content","page-blocks-content",-1567372374).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.page.page_blocks_cp(page,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_,new cljs.core.Keyword(null,"on-page-blocks-rendered","on-page-blocks-rendered",-870983117),new cljs.core.Keyword(null,"on-page-blocks-rendered","on-page-blocks-rendered",-870983117).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null)], 0)));
}
})()], null)):null))], null),frontend.components.page.maybe_after_first_paint(body_ready_QMARK_,(cljs.core.truth_((function (){var or__5142__auto__ = preview_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return recycle_page_QMARK_;
}
})())?null:new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-8","div.flex.flex-col.gap-8",-1949008744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(frontend.util.mobile_QMARK_())?null:"ml-1")], null),(cljs.core.truth_(today_QMARK_)?frontend.components.page.today_queries(repo__$1,page,today_QMARK_,sidebar_QMARK_):null),(cljs.core.truth_(today_QMARK_)?frontend.components.scheduled_deadlines.scheduled_and_deadlines(title):null),(cljs.core.truth_(frontend.util.entity.class_QMARK_(page))?frontend.components.class$.class_children(page):null),((((cljs.core.not(tag_dialog_QMARK_)) && (cljs.core.not(linked_refs_QMARK_))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fade-in.delay","div.fade-in.delay",-1894366747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"page-references"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.reference.references,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_,new cljs.core.Keyword(null,"journals?","journals?",1584679180),journals_QMARK_,new cljs.core.Keyword(null,"refs-count","refs-count",643531144),new cljs.core.Keyword(null,"refs-count","refs-count",643531144).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"linked-refs-section?","linked-refs-section?",1054563452),true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.page.page_references_key(page)], null))], null):null),(cljs.core.truth_((function (){var or__5142__auto__ = unlinked_refs_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = sidebar_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = tag_dialog_QMARK_;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = home_QMARK_;
if(or__5142__auto____$3){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = class_page_QMARK_;
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return property_page_QMARK_;
}
}
}
}
}
})())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fade-in.delay","div.fade-in.delay",-1894366747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"page-unlinked-references"], null),frontend.components.reference.unlinked_references(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_], null))], null))], null)))], null);
}
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-75","div.opacity-75",588240867),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","not-found","page/not-found",-607527005)], 0))], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$page_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46358 = cljs.core.first(args__31746__auto__);
var G__46359 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46358,G__46359) : io.factorhouse.hsx.core.obj_get.call(null,G__46358,G__46359));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"page-inner","page-inner",-1896267027,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$page$page_inner,args__31746__auto__,null);
}
};
var frontend$components$page$page_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46466__i = 0, G__46466__a = new Array(arguments.length -  0);
while (G__46466__i < G__46466__a.length) {G__46466__a[G__46466__i] = arguments[G__46466__i + 0]; ++G__46466__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46466__a,0,null);
} 
return frontend$components$page$page_inner__delegate.call(this,args__31746__auto__);};
frontend$components$page$page_inner.cljs$lang$maxFixedArity = 0;
frontend$components$page$page_inner.cljs$lang$applyTo = (function (arglist__46467){
var args__31746__auto__ = cljs.core.seq(arglist__46467);
return frontend$components$page$page_inner__delegate(args__31746__auto__);
});
frontend$components$page$page_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$page_inner__delegate;
return frontend$components$page$page_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46360 = comp__31745__auto__;
var G__46361 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46360,G__46361) : io.factorhouse.hsx.core.react_memo.call(null,G__46360,G__46361));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-inner");

return comp__31745__auto__;
})();
frontend.components.page.page_resource_key = (function frontend$components$page$page_resource_key(option){
var route_page_name = frontend.components.page.get_page_name(option);
var block_route_name = frontend.components.page.get_block_route_name(option);
var page_lookup = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__46362 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(option);
if((G__46362 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__46362);
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.components.page.get_sanity_page_name(option,new cljs.core.Keyword(null,"page-name","page-name",974981762).cljs$core$IFn$_invoke$arity$1(option),null);
}
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = route_page_name;
if(cljs.core.truth_(and__5140__auto__)){
return block_route_name;
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-block","route-block",1777958485),route_page_name,block_route_name], null);
} else {
if(((cljs.core.uuid_QMARK_(page_lookup)) || (((typeof page_lookup === 'string') && ((!(clojure.string.blank_QMARK_(page_lookup)))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-identity","page-identity",-899314184),page_lookup], null);
} else {
return null;

}
}
});
frontend.components.page.loaded_page = (function (){var render_fn__31744__auto__ = (function frontend$components$page$loaded_page(option,page){
var class_page_QMARK_ = frontend.util.entity.class_QMARK_(page);
var vec__46363 = logseq.shui.hooks.use_state(null);
var refs_count_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46363,(0),null);
var set_refs_count_key_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46363,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var delay_ms = (cljs.core.truth_(class_page_QMARK_)?frontend.components.page.class_page_below_fold_delay_ms:(0));
var timeout_id = setTimeout((function (){
var G__46366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-ref-count","block-ref-count",524096085),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)], null);
return (set_refs_count_key_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_refs_count_key_BANG_.cljs$core$IFn$_invoke$arity$1(G__46366) : set_refs_count_key_BANG_.call(null,G__46366));
}),delay_ms);
return (function (){
return clearTimeout(timeout_id);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_page_QMARK_], null));

var refs_count = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(frontend.db.hooks.use_resource_snapshot(refs_count_key));
return frontend.components.page.page_inner(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"page","page",849072397),page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refs-count","refs-count",643531144),refs_count], 0)));
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$loaded_page__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46367 = cljs.core.first(args__31746__auto__);
var G__46368 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46367,G__46368) : io.factorhouse.hsx.core.obj_get.call(null,G__46367,G__46368));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"loaded-page","loaded-page",-1393849982,null),args__31746__auto__),frontend$components$page$loaded_page,args__31746__auto__,null);
}
};
var frontend$components$page$loaded_page = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46468__i = 0, G__46468__a = new Array(arguments.length -  0);
while (G__46468__i < G__46468__a.length) {G__46468__a[G__46468__i] = arguments[G__46468__i + 0]; ++G__46468__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46468__a,0,null);
} 
return frontend$components$page$loaded_page__delegate.call(this,args__31746__auto__);};
frontend$components$page$loaded_page.cljs$lang$maxFixedArity = 0;
frontend$components$page$loaded_page.cljs$lang$applyTo = (function (arglist__46469){
var args__31746__auto__ = cljs.core.seq(arglist__46469);
return frontend$components$page$loaded_page__delegate(args__31746__auto__);
});
frontend$components$page$loaded_page.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$loaded_page__delegate;
return frontend$components$page$loaded_page;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46369 = comp__31745__auto__;
var G__46370 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46369,G__46370) : io.factorhouse.hsx.core.react_memo.call(null,G__46369,G__46370));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"loaded-page");

return comp__31745__auto__;
})();
frontend.components.page.ready_value = (function frontend$components$page$ready_value(p__46371){
var map__46372 = p__46371;
var map__46372__$1 = cljs.core.__destructure_map(map__46372);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__46373 = status;
var G__46373__$1 = (((G__46373 instanceof cljs.core.Keyword))?G__46373.fqn:null);
switch (G__46373__$1) {
case "ready":
return value;

break;
case "loading":
case "missing":
return null;

break;
case "error":
throw error;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46373__$1))));

}
});
frontend.components.page.page_cp_option = (function frontend$components$page$page_cp_option(option){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"page-name","page-name",974981762),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"page-name","page-name",974981762).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.page.get_page_name(option);
}
})());
});
/**
 * React key for the page tree. Prefer a stable entity id over the route title.
 */
frontend.components.page.page_component_key = (function frontend$components$page$page_component_key(option,paint){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(paint,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.Keyword(null,"page-name","page-name",974981762).cljs$core$IFn$_invoke$arity$1(option);
}
}
}
})()));
});
/**
 * Everything a page needs before its first paint: the resolved page uuid,
 * the page itself and, for a zoomed block, its breadcrumb ancestors.
 * Loading them inside the page tree painted the body first and remounted
 * the breadcrumb once its data arrived. A nil option reads as :empty so the
 * router can gate every route through the same hooks.
 */
frontend.components.page.use_page_paint = (function frontend$components$page$use_page_paint(option){
var resource_key = (function (){var G__46375 = option;
var G__46375__$1 = (((G__46375 == null))?null:frontend.components.page.page_cp_option(G__46375));
if((G__46375__$1 == null)){
return null;
} else {
return frontend.components.page.page_resource_key(G__46375__$1);
}
})();
var identity_snapshot = frontend.db.hooks.use_resource_snapshot(resource_key);
var page_uuid = frontend.components.page.ready_value(identity_snapshot);
var page_snapshot = frontend.db.hooks.use_block_projection_snapshot(page_uuid,frontend.components.page.render_stable_page);
var page = frontend.components.page.ready_value(page_snapshot);
var breadcrumb_key = (cljs.core.truth_(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(page))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-breadcrumb","block-breadcrumb",1527541786),page_uuid,(16)], null):null);
var breadcrumb_snapshot = frontend.db.hooks.use_resource_snapshot(breadcrumb_key);
var breadcrumb_data = frontend.components.page.ready_value(breadcrumb_snapshot);
if((resource_key == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"empty","empty",767870958)], null);
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__46374_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__46374_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [identity_snapshot,page_snapshot,breadcrumb_snapshot], null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"page","page",849072397),(function (){var G__46376 = page;
if(cljs.core.truth_(breadcrumb_key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__46376,new cljs.core.Keyword("block.temp","breadcrumb","block.temp/breadcrumb",598913897),frontend.components.block.breadcrumb_model.resource_ancestors(breadcrumb_data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","breadcrumb-ref-titles","block.temp/breadcrumb-ref-titles",-797162198),new cljs.core.Keyword(null,"ref-titles","ref-titles",1814381807).cljs$core$IFn$_invoke$arity$1(breadcrumb_data)], 0));
} else {
return G__46376;
}
})()], null);

}
}
});
frontend.components.page.page_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$page$page_aux(option,p__46377){
var map__46378 = p__46377;
var map__46378__$1 = cljs.core.__destructure_map(map__46378);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378__$1,new cljs.core.Keyword(null,"page","page",849072397));
var G__46379 = status;
var G__46379__$1 = (((G__46379 instanceof cljs.core.Keyword))?G__46379.fqn:null);
switch (G__46379__$1) {
case "empty":
case "loading":
return null;

break;
case "ready":
if(cljs.core.truth_(page)){
return frontend.components.page.loaded_page(option,page);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-75","div.opacity-75",588240867),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","not-found","page/not-found",-607527005)], 0))], null);
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46379__$1))));

}
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$page_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46380 = cljs.core.first(args__31746__auto__);
var G__46381 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46380,G__46381) : io.factorhouse.hsx.core.obj_get.call(null,G__46380,G__46381));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-aux","page-aux",1952439636,null),args__31746__auto__),frontend$components$page$page_aux,args__31746__auto__,null);
}
};
var frontend$components$page$page_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46472__i = 0, G__46472__a = new Array(arguments.length -  0);
while (G__46472__i < G__46472__a.length) {G__46472__a[G__46472__i] = arguments[G__46472__i + 0]; ++G__46472__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46472__a,0,null);
} 
return frontend$components$page$page_aux__delegate.call(this,args__31746__auto__);};
frontend$components$page$page_aux.cljs$lang$maxFixedArity = 0;
frontend$components$page$page_aux.cljs$lang$applyTo = (function (arglist__46473){
var args__31746__auto__ = cljs.core.seq(arglist__46473);
return frontend$components$page$page_aux__delegate(args__31746__auto__);
});
frontend$components$page$page_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$page_aux__delegate;
return frontend$components$page$page_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46382 = comp__31745__auto__;
var G__46383 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46382,G__46383) : io.factorhouse.hsx.core.react_memo.call(null,G__46382,G__46383));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-aux");

return comp__31745__auto__;
})();
frontend.components.page.page_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$page$page_cp(option){
var option__$1 = frontend.components.page.page_cp_option(option);
var paint = frontend.components.page.use_page_paint(option__$1);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.page.page_aux,option__$1,paint], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.page.page_component_key(option__$1,paint)], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$page_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46384 = cljs.core.first(args__31746__auto__);
var G__46385 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46384,G__46385) : io.factorhouse.hsx.core.obj_get.call(null,G__46384,G__46385));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-cp","page-cp",-1587873174,null),args__31746__auto__),frontend$components$page$page_cp,args__31746__auto__,null);
}
};
var frontend$components$page$page_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46474__i = 0, G__46474__a = new Array(arguments.length -  0);
while (G__46474__i < G__46474__a.length) {G__46474__a[G__46474__i] = arguments[G__46474__i + 0]; ++G__46474__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46474__a,0,null);
} 
return frontend$components$page$page_cp__delegate.call(this,args__31746__auto__);};
frontend$components$page$page_cp.cljs$lang$maxFixedArity = 0;
frontend$components$page$page_cp.cljs$lang$applyTo = (function (arglist__46475){
var args__31746__auto__ = cljs.core.seq(arglist__46475);
return frontend$components$page$page_cp__delegate(args__31746__auto__);
});
frontend$components$page$page_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$page_cp__delegate;
return frontend$components$page$page_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46386 = comp__31745__auto__;
var G__46387 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46386,G__46387) : io.factorhouse.hsx.core.react_memo.call(null,G__46386,G__46387));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-cp");

return comp__31745__auto__;
})();
frontend.components.page.page_container = (function (){var render_fn__31744__auto__ = (function frontend$components$page$page_container(page_m,option){
return frontend.components.page.page_cp(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option,page_m], 0)));
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$page_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46388 = cljs.core.first(args__31746__auto__);
var G__46389 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46388,G__46389) : io.factorhouse.hsx.core.obj_get.call(null,G__46388,G__46389));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-container","page-container",-1761217801,null),args__31746__auto__),frontend$components$page$page_container,args__31746__auto__,null);
}
};
var frontend$components$page$page_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46476__i = 0, G__46476__a = new Array(arguments.length -  0);
while (G__46476__i < G__46476__a.length) {G__46476__a[G__46476__i] = arguments[G__46476__i + 0]; ++G__46476__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46476__a,0,null);
} 
return frontend$components$page$page_container__delegate.call(this,args__31746__auto__);};
frontend$components$page$page_container.cljs$lang$maxFixedArity = 0;
frontend$components$page$page_container.cljs$lang$applyTo = (function (arglist__46477){
var args__31746__auto__ = cljs.core.seq(arglist__46477);
return frontend$components$page$page_container__delegate(args__31746__auto__);
});
frontend$components$page$page_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$page_container__delegate;
return frontend$components$page$page_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46390 = comp__31745__auto__;
var G__46391 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46390,G__46391) : io.factorhouse.hsx.core.react_memo.call(null,G__46390,G__46391));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-container");

return comp__31745__auto__;
})();
frontend.components.page.page_graph_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$page$page_graph_inner(_page,graph,dark_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-graph-panel.flex.flex-col.w-full","div.page-graph-panel.flex.flex-col.w-full",904164000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"min(72vh, 860px)",new cljs.core.Keyword(null,"min-height","min-height",398480837),(560)], null)], null),frontend.extensions.graph.graph_2d(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-node-activate","on-node-activate",-186984250),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),new cljs.core.Keyword(null,"dark?","dark?",622933231),new cljs.core.Keyword(null,"show-arrows?","show-arrows?",1693952912),new cljs.core.Keyword(null,"show-edge-labels?","show-edge-labels?",1118080177),new cljs.core.Keyword(null,"on-node-preview","on-node-preview",169104498),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"links","links",-654507394)],[frontend.components.graph_actions.activate_node_BANG_,new cljs.core.Keyword(null,"page","page",849072397),dark_QMARK_,true,true,frontend.components.graph_actions.preview_node_BANG_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","canvas-label","graph/canvas-label",1477388341)], 0)),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph)]))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$page_graph_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46392 = cljs.core.first(args__31746__auto__);
var G__46393 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46392,G__46393) : io.factorhouse.hsx.core.obj_get.call(null,G__46392,G__46393));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-graph-inner","page-graph-inner",-1951709513,null),args__31746__auto__),frontend$components$page$page_graph_inner,args__31746__auto__,null);
}
};
var frontend$components$page$page_graph_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46478__i = 0, G__46478__a = new Array(arguments.length -  0);
while (G__46478__i < G__46478__a.length) {G__46478__a[G__46478__i] = arguments[G__46478__i + 0]; ++G__46478__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46478__a,0,null);
} 
return frontend$components$page$page_graph_inner__delegate.call(this,args__31746__auto__);};
frontend$components$page$page_graph_inner.cljs$lang$maxFixedArity = 0;
frontend$components$page$page_graph_inner.cljs$lang$applyTo = (function (arglist__46479){
var args__31746__auto__ = cljs.core.seq(arglist__46479);
return frontend$components$page$page_graph_inner__delegate(args__31746__auto__);
});
frontend$components$page$page_graph_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$page_graph_inner__delegate;
return frontend$components$page$page_graph_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46394 = comp__31745__auto__;
var G__46395 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46394,G__46395) : io.factorhouse.hsx.core.react_memo.call(null,G__46394,G__46395));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-graph-inner");

return comp__31745__auto__;
})();
frontend.components.page.page_graph_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$page$page_graph_aux(page,opts){
var vec__46396 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentVector.EMPTY], null));
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46396,(0),null);
var set_graph_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46396,(1),null);
var dark_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dark","dark",1818973999),null,"dark",null], null), null),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(opts));
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","build-graph","thread-api/build-graph",729373393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),opts], 0))),(function (result){
return promesa.protocols._promise((set_graph_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_graph_BANG_.cljs$core$IFn$_invoke$arity$1(result) : set_graph_BANG_.call(null,result)));
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts], null));

return frontend.components.page.page_graph_inner(page,graph,dark_QMARK_);
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$page_graph_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46399 = cljs.core.first(args__31746__auto__);
var G__46400 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46399,G__46400) : io.factorhouse.hsx.core.obj_get.call(null,G__46399,G__46400));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-graph-aux","page-graph-aux",311836409,null),args__31746__auto__),frontend$components$page$page_graph_aux,args__31746__auto__,null);
}
};
var frontend$components$page$page_graph_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46480__i = 0, G__46480__a = new Array(arguments.length -  0);
while (G__46480__i < G__46480__a.length) {G__46480__a[G__46480__i] = arguments[G__46480__i + 0]; ++G__46480__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46480__a,0,null);
} 
return frontend$components$page$page_graph_aux__delegate.call(this,args__31746__auto__);};
frontend$components$page$page_graph_aux.cljs$lang$maxFixedArity = 0;
frontend$components$page$page_graph_aux.cljs$lang$applyTo = (function (arglist__46481){
var args__31746__auto__ = cljs.core.seq(arglist__46481);
return frontend$components$page$page_graph_aux__delegate(args__31746__auto__);
});
frontend$components$page$page_graph_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$page_graph_aux__delegate;
return frontend$components$page$page_graph_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46401 = comp__31745__auto__;
var G__46402 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46401,G__46402) : io.factorhouse.hsx.core.react_memo.call(null,G__46401,G__46402));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-graph-aux");

return comp__31745__auto__;
})();
frontend.components.page.page_graph = (function (){var render_fn__31744__auto__ = (function frontend$components$page$page_graph(){
var route_name = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var route_path_name = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var theme = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)], null));
var route_page = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),route_name);
if(and__5140__auto__){
return route_path_name;
} else {
return and__5140__auto__;
}
})();
var vec__46403 = logseq.shui.hooks.use_state(route_page);
var current_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46403,(0),null);
var set_current_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46403,(1),null);
var vec__46406 = logseq.shui.hooks.use_state(null);
var page_entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46406,(0),null);
var set_page_entity_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46406,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(route_page)){
(set_current_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_BANG_.cljs$core$IFn$_invoke$arity$1(route_page) : set_current_page_BANG_.call(null,route_page));
} else {
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_today_journal_title(frontend.state.get_current_repo())),(function (today_title){
return promesa.protocols._promise((set_current_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_BANG_.cljs$core$IFn$_invoke$arity$1(today_title) : set_current_page_BANG_.call(null,today_title)));
}));
}));
}

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [route_page], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(current_page)){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),current_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise((set_page_entity_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_page_entity_BANG_.cljs$core$IFn$_invoke$arity$1(page) : set_page_entity_BANG_.call(null,page)));
}));
}));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page], null));

return frontend.components.page.page_graph_aux(current_page,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(frontend.util.entity.page_QMARK_(page_entity))?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"show-journal?","show-journal?",-2077862361),false], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$page$page_graph__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46409 = cljs.core.first(args__31746__auto__);
var G__46410 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46409,G__46410) : io.factorhouse.hsx.core.obj_get.call(null,G__46409,G__46410));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-graph","page-graph",-962526247,null),args__31746__auto__),frontend$components$page$page_graph,args__31746__auto__,null);
}
};
var frontend$components$page$page_graph = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46482__i = 0, G__46482__a = new Array(arguments.length -  0);
while (G__46482__i < G__46482__a.length) {G__46482__a[G__46482__i] = arguments[G__46482__i + 0]; ++G__46482__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46482__a,0,null);
} 
return frontend$components$page$page_graph__delegate.call(this,args__31746__auto__);};
frontend$components$page$page_graph.cljs$lang$maxFixedArity = 0;
frontend$components$page$page_graph.cljs$lang$applyTo = (function (arglist__46483){
var args__31746__auto__ = cljs.core.seq(arglist__46483);
return frontend$components$page$page_graph__delegate(args__31746__auto__);
});
frontend$components$page$page_graph.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page$page_graph__delegate;
return frontend$components$page$page_graph;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46411 = comp__31745__auto__;
var G__46412 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46411,G__46412) : io.factorhouse.hsx.core.react_memo.call(null,G__46411,G__46412));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-graph");

return comp__31745__auto__;
})();
frontend.components.page.batch_delete_dialog = (function frontend$components$page$batch_delete_dialog(pages,refresh_fn){
return (function (p__46413){
var map__46414 = p__46413;
var map__46414__$1 = cljs.core.__destructure_map(map__46414);
var close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46414__$1,new cljs.core.Keyword(null,"close","close",1835149582));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.items-center","div.sm:flex.items-center",1228718030),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-error.sm:mx-0.sm:h-10.sm:w-10","div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-error.sm:mx-0.sm:h-10.sm:w-10",434929029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-error.text-xl","span.text-error.text-xl",-1341009425),frontend.ui.icon("alert-triangle")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left","div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left",-1344715931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#modal-headline.text-lg.leading-6.font-medium","h3#modal-headline.text-lg.leading-6.font-medium",365314317),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.delete","batch-confirm-title","page.delete/batch-confirm-title",-1020044569)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.p-2.pt-4.max-h-80.overflow-y-auto","ol.p-2.pt-4.max-h-80.overflow-y-auto",-403073500),(function (){var iter__5628__auto__ = (function frontend$components$page$batch_delete_dialog_$_iter__46415(s__46416){
return (new cljs.core.LazySeq(null,(function (){
var s__46416__$1 = s__46416;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46416__$1);
if(temp__5825__auto__){
var s__46416__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46416__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46416__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46418 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46417 = (0);
while(true){
if((i__46417 < size__5627__auto__)){
var page_item = cljs.core._nth(c__5626__auto__,i__46417);
cljs.core.chunk_append(b__46418,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_item)], null))], null),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page_item)], null)], null));

var G__46484 = (i__46417 + (1));
i__46417 = G__46484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46418),frontend$components$page$batch_delete_dialog_$_iter__46415(cljs.core.chunk_rest(s__46416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46418),null);
}
} else {
var page_item = cljs.core.first(s__46416__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_item)], null))], null),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page_item)], null)], null),frontend$components$page$batch_delete_dialog_$_iter__46415(cljs.core.rest(s__46416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(pages);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.px-2.opacity-50","p.px-2.opacity-50",-888155029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.delete","total","page.delete/total",-46236004),cljs.core.count(pages)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-6.flex.justify-end.gap-4","div.pt-6.flex.justify-end.gap-4",-1914024520),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","yes","ui/yes",182843071)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(close.cljs$core$IFn$_invoke$arity$0 ? close.cljs$core$IFn$_invoke$arity$0() : close.call(null));

var failed_pages_46485 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var G__46419 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
var G__46420 = null;
var G__46421 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(failed_pages_46485,cljs.core.conj,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
})], null);
return (frontend.handler.page._LT_delete_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.page._LT_delete_BANG_.cljs$core$IFn$_invoke$arity$3(G__46419,G__46420,G__46421) : frontend.handler.page._LT_delete_BANG_.call(null,G__46419,G__46420,G__46421));
}),pages))),(function (_){
return promesa.protocols._promise(((cljs.core.seq(cljs.core.deref(failed_pages_46485)))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.delete","warning","page.delete/warning",41445675),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,cljs.core.deref(failed_pages_46485)))], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","all-done","ui/all-done",-163395345)], 0)),new cljs.core.Keyword(null,"success","success",1890645906))));
}));
}));

return setTimeout((function (){
return (refresh_fn.cljs$core$IFn$_invoke$arity$0 ? refresh_fn.cljs$core$IFn$_invoke$arity$0() : refresh_fn.call(null));
}),(200));
})], 0))], null)], null);
});
});

//# sourceMappingURL=frontend.components.page.js.map
