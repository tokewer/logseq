goog.provide('frontend.handler.db_based.property.util');
/**
 * Get a property's name given its id
 */
frontend.handler.db_based.property.util.get_property_value = (function frontend$handler$db_based$property$util$get_property_value(e){
var temp__5823__auto__ = ((typeof e === 'number')?null:e);
if(cljs.core.truth_(temp__5823__auto__)){
var e__$1 = temp__5823__auto__;
return logseq.db.frontend.property.property_value_content(e__$1);
} else {
return e;
}
});
/**
 * Given a DB graph's properties, returns a readable properties map with keys as
 *   property names and property values dereferenced where possible. Has some
 *   overlap with block-macros/properties-by-name
 */
frontend.handler.db_based.property.util.readable_properties = (function frontend$handler$db_based$property$util$readable_properties(var_args){
var G__60214 = arguments.length;
switch (G__60214) {
case 1:
return frontend.handler.db_based.property.util.readable_properties.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.db_based.property.util.readable_properties.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.db_based.property.util.readable_properties.cljs$core$IFn$_invoke$arity$1 = (function (properties){
return frontend.handler.db_based.property.util.readable_properties.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"original-key?","original-key?",-219511082),true], null));
}));

(frontend.handler.db_based.property.util.readable_properties.cljs$core$IFn$_invoke$arity$2 = (function (properties,p__60216){
var map__60217 = p__60216;
var map__60217__$1 = cljs.core.__destructure_map(map__60217);
var original_key_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60217__$1,new cljs.core.Keyword(null,"original-key?","original-key?",-219511082));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60217__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60218){
var vec__60219 = p__60218;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60219,(1),null);
var property_key = (cljs.core.truth_(original_key_QMARK_)?k:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(property_key) : key_fn.call(null,property_key)),((cljs.core.set_QMARK_(v))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.property_value_content,v)):((cljs.core.sequential_QMARK_(v))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.property.util.get_property_value,v):((cljs.core.map_QMARK_(v))?frontend.handler.db_based.property.util.get_property_value(v):v
)))], null);
}),properties));
}));

(frontend.handler.db_based.property.util.readable_properties.cljs$lang$maxFixedArity = 2);

frontend.handler.db_based.property.util.get_closed_property_values = (function frontend$handler$db_based$property$util$get_closed_property_values(property_id){
var G__60233 = logseq.db.frontend.property.built_in_closed_values(property_id);
var G__60233__$1 = (((G__60233 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__60234){
var map__60235 = p__60234;
var map__60235__$1 = cljs.core.__destructure_map(map__60235);
var db_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60235__$1,new cljs.core.Keyword(null,"db-ident","db-ident",-992686073));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60235__$1,new cljs.core.Keyword(null,"value","value",305978217));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60235__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60235__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60235__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident,new cljs.core.Keyword("block","title","block/title",710445684),value,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","order","block/order",-1429282437),index], null),(cljs.core.truth_(icon)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),icon], null):null),properties], 0));
}),G__60233));
if((G__60233__$1 == null)){
return null;
} else {
return cljs.core.vec(G__60233__$1);
}
});

//# sourceMappingURL=frontend.handler.db_based.property.util.js.map
