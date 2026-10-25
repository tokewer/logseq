goog.provide('frontend.util.page');
/**
 * Fetch the current page's uuid with same approach as get-current-page-id
 */
frontend.util.page.get_current_page_uuid = (function frontend$util$page$get_current_page_uuid(){
var current_page = frontend.state.get_current_page();
var or__5142__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = typeof current_page === 'string';
if(and__5140__auto__){
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(current_page) : frontend.util.uuid_string_QMARK_.call(null,current_page));
} else {
return and__5140__auto__;
}
})())?cljs.core.uuid(current_page):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(frontend.state.get_editor_args()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
}
});
/**
 * Fetches the current page id. Looks up page based on latest route and if
 *   nothing is found, gets page of last edited block
 */
frontend.util.page.get_current_page_id = (function frontend$util$page$get_current_page_id(){
var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(frontend.state.get_editor_args()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(frontend.state.get_editor_args()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
}
});
/**
 * True when the page-ref/tag entity is the page currently being viewed.
 * `current-page` is typically `state/get-current-page` (uuid string or page name).
 */
frontend.util.page.entity_is_current_page_QMARK_ = (function frontend$util$page$entity_is_current_page_QMARK_(var_args){
var G__67342 = arguments.length;
switch (G__67342) {
case 1:
return frontend.util.page.entity_is_current_page_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.page.entity_is_current_page_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.page.entity_is_current_page_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (entity){
return frontend.util.page.entity_is_current_page_QMARK_.cljs$core$IFn$_invoke$arity$2(entity,frontend.state.get_current_page());
}));

(frontend.util.page.entity_is_current_page_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (entity,current_page){
return cljs.core.boolean$((cljs.core.truth_((function (){var and__5140__auto__ = entity;
if(cljs.core.truth_(and__5140__auto__)){
return current_page;
} else {
return and__5140__auto__;
}
})())?(function (){var current = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_page));
var ids = ((cljs.core.uuid_QMARK_(entity))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity))], null):((typeof entity === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null):((cljs.core.map_QMARK_(entity))?cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67343 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity);
if((G__67343 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67343));
}
})(),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity)], null)):null
)));
return cljs.core.some((function (p1__67340_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,p1__67340_SHARP_);
}),ids);
})():null));
}));

(frontend.util.page.entity_is_current_page_QMARK_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=frontend.util.page.js.map
