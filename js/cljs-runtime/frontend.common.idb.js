goog.provide('frontend.common.idb');
if((typeof frontend !== 'undefined') && (typeof frontend.common !== 'undefined') && (typeof frontend.common.idb !== 'undefined') && (typeof frontend.common.idb.store !== 'undefined')){
} else {
frontend.common.idb.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.common.idb.remove_item_BANG_ = (function frontend$common$idb$remove_item_BANG_(key){
if(cljs.core.truth_((function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(frontend.common.idb.store);
} else {
return and__5140__auto__;
}
})())){
return frontend.common.idbkv.del.cljs$core$IFn$_invoke$arity$2(key,cljs.core.deref(frontend.common.idb.store));
} else {
return null;
}
});
frontend.common.idb.set_item_BANG_ = (function frontend$common$idb$set_item_BANG_(key,value){
if(cljs.core.truth_((function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(frontend.common.idb.store);
} else {
return and__5140__auto__;
}
})())){
return frontend.common.idbkv.set_item.cljs$core$IFn$_invoke$arity$3(key,value,cljs.core.deref(frontend.common.idb.store));
} else {
return null;
}
});
frontend.common.idb.get_item = (function frontend$common$idb$get_item(key){
if(cljs.core.truth_((function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(frontend.common.idb.store);
} else {
return and__5140__auto__;
}
})())){
return frontend.common.idbkv.get_item.cljs$core$IFn$_invoke$arity$2(key,cljs.core.deref(frontend.common.idb.store));
} else {
return null;
}
});
/**
 * This component's only responsibility is to create a Store object
 */
frontend.common.idb.start = (function frontend$common$idb$start(){
if((cljs.core.deref(frontend.common.idb.store) == null)){
return cljs.core.reset_BANG_(frontend.common.idb.store,frontend.common.idbkv.new_store.cljs$core$IFn$_invoke$arity$3("localforage","keyvaluepairs",(2)));
} else {
return null;
}
});

//# sourceMappingURL=frontend.common.idb.js.map
