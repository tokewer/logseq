goog.provide('frontend.modules.shortcut.data_helper');
frontend.modules.shortcut.data_helper.flatten_bindings_by_id = (function frontend$modules$shortcut$data_helper$flatten_bindings_by_id(config,user_shortcuts,binding_only_QMARK_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37175){
var vec__37176 = p__37175;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37176,(0),null);
var map__37179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37176,(1),null);
var map__37179__$1 = cljs.core.__destructure_map(map__37179);
var opts = map__37179__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37179__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,(cljs.core.truth_(binding_only_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(user_shortcuts,id,binding):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"user-binding","user-binding",851596332),cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_shortcuts,id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),(frontend.modules.shortcut.data_helper.get_group.cljs$core$IFn$_invoke$arity$1 ? frontend.modules.shortcut.data_helper.get_group.cljs$core$IFn$_invoke$arity$1(id) : frontend.modules.shortcut.data_helper.get_group.call(null,id)),new cljs.core.Keyword(null,"id","id",-1388402092),id], 0)))]);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.vals(config))));
});
frontend.modules.shortcut.data_helper.flatten_bindings_by_key = (function frontend$modules$shortcut$data_helper$flatten_bindings_by_key(config,user_shortcuts){
return cljs.core.reduce_kv((function (r,handler_id,vs){
return cljs.core.reduce_kv((function (r__$1,id,p__37180){
var map__37181 = p__37180;
var map__37181__$1 = cljs.core.__destructure_map(map__37181);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37181__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(user_shortcuts,id,binding);
if(cljs.core.truth_(temp__5823__auto__)){
var ks = temp__5823__auto__;
var ks__$1 = ((cljs.core.sequential_QMARK_(ks))?ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,k){
var k__$1 = frontend.modules.shortcut.utils.undecorate_binding(k);
var k_SINGLEQUOTE_ = frontend.modules.shortcut.utils.safe_parse_string_binding(k__$1);
var k_SINGLEQUOTE___$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(k_SINGLEQUOTE_);
return cljs.core.assoc_in(cljs.core.assoc_in(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"key","key",-1516042587)], null),k__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"refs","refs",-1560051448),id], null),handler_id);
}),r__$1,ks__$1);
} else {
return r__$1;
}
}),r,vs);
}),cljs.core.PersistentArrayMap.EMPTY,config);
});
frontend.modules.shortcut.data_helper.m_flatten_bindings_by_id = frontend.util.memoize_last(frontend.modules.shortcut.data_helper.flatten_bindings_by_id);
frontend.modules.shortcut.data_helper.m_flatten_bindings_by_key = frontend.util.memoize_last(frontend.modules.shortcut.data_helper.flatten_bindings_by_key);
frontend.modules.shortcut.data_helper.get_bindings = (function frontend$modules$shortcut$data_helper$get_bindings(){
return frontend.modules.shortcut.data_helper.m_flatten_bindings_by_id(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),frontend.state.custom_shortcuts(),true);
});
frontend.modules.shortcut.data_helper.get_bindings_keys_map = (function frontend$modules$shortcut$data_helper$get_bindings_keys_map(){
return frontend.modules.shortcut.data_helper.m_flatten_bindings_by_key(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),frontend.state.custom_shortcuts());
});
frontend.modules.shortcut.data_helper.get_bindings_ids_map = (function frontend$modules$shortcut$data_helper$get_bindings_ids_map(){
return frontend.modules.shortcut.data_helper.m_flatten_bindings_by_id(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),frontend.state.custom_shortcuts(),false);
});
frontend.modules.shortcut.data_helper.get_shortcut_desc = (function frontend$modules$shortcut$data_helper$get_shortcut_desc(binding_map){
var map__37182 = binding_map;
var map__37182__$1 = cljs.core.__destructure_map(map__37182);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var cmd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var desc__$1 = (function (){var or__5142__auto__ = desc;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cmd);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var G__37183 = id;
var G__37183__$1 = (((G__37183 == null))?null:frontend.modules.shortcut.utils.decorate_namespace(G__37183));
if((G__37183__$1 == null)){
return null;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__37183__$1], 0));
}
}
}
})();
if((((desc__$1 == null)) || (((typeof desc__$1 === 'string') && (clojure.string.starts_with_QMARK_(desc__$1,"{Missing")))))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
} else {
return desc__$1;
}
});
frontend.modules.shortcut.data_helper.mod_key = (function frontend$modules$shortcut$data_helper$mod_key(shortcut){
if(typeof shortcut === 'string'){
return clojure.string.replace(shortcut,/mod/i,(cljs.core.truth_(frontend.util.mac_QMARK_)?"meta":"ctrl"));
} else {
return null;
}
});
/**
 * override by user custom binding
 */
frontend.modules.shortcut.data_helper.shortcut_binding = (function frontend$modules$shortcut$data_helper$shortcut_binding(id){
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.get_bindings(),id);
if((shortcut == null)){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.data-helper",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","binding-not-found","shortcut/binding-not-found",-1239068733),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),82], null)),null);
} else {
return null;
}
} else {
if(shortcut === false){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.data-helper",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","disabled","shortcut/disabled",-1351895776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),86], null)),null);
} else {
}

return false;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.mod_key,((typeof shortcut === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut], null):shortcut));

}
}
});
frontend.modules.shortcut.data_helper.shortcut_item = (function frontend$modules$shortcut$data_helper$shortcut_item(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.get_bindings_ids_map(),id);
});
frontend.modules.shortcut.data_helper.binding_by_category = (function frontend$modules$shortcut$data_helper$binding_by_category(name){
var dict = frontend.modules.shortcut.data_helper.get_bindings_ids_map();
var plugin_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword("shortcut.category","plugins","shortcut.category/plugins",-1801186145));
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dict,k);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"category","category",-593092832),name)], null);
} else {
return null;
}
}),((plugin_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37184_SHARP_){
return clojure.string.starts_with_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37184_SHARP_)),":plugin.");
}),cljs.core.keys(dict)):frontend.modules.shortcut.config.get_category_shortcuts(name))));
});
frontend.modules.shortcut.data_helper.shortcuts_map_full = (function frontend$modules$shortcut$data_helper$shortcuts_map_full(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.config._STAR_config)));
});
frontend.modules.shortcut.data_helper.shortcuts_map_by_handler_id = (function frontend$modules$shortcut$data_helper$shortcuts_map_by_handler_id(var_args){
var G__37186 = arguments.length;
switch (G__37186) {
case 1:
return frontend.modules.shortcut.data_helper.shortcuts_map_by_handler_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.data_helper.shortcuts_map_by_handler_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.modules.shortcut.data_helper.shortcuts_map_by_handler_id.cljs$core$IFn$_invoke$arity$1 = (function (handler_id){
return frontend.modules.shortcut.data_helper.shortcuts_map_by_handler_id.cljs$core$IFn$_invoke$arity$2(handler_id,null);
}));

(frontend.modules.shortcut.data_helper.shortcuts_map_by_handler_id.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,state){
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),handler_id);
var raw_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,raw);
var handler_m = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37187){
var vec__37188 = p__37187;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188,(0),null);
var map__37191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37188,(1),null);
var map__37191__$1 = cljs.core.__destructure_map(map__37191);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,fn]);
}),raw));
var before = new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(raw));
var G__37192 = handler_m;
var G__37192__$1 = (cljs.core.truth_(state)?cljs.core.reduce_kv((function (r,k,handle_fn){
var handle_fn_SINGLEQUOTE_ = ((cljs.core.volatile_QMARK_(state))?(function() { 
var G__37269__delegate = function (_STAR_state,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handle_fn,cljs.core.cons(cljs.core.deref(_STAR_state),args));
};
var G__37269 = function (_STAR_state,var_args){
var args = null;
if (arguments.length > 1) {
var G__37270__i = 0, G__37270__a = new Array(arguments.length -  1);
while (G__37270__i < G__37270__a.length) {G__37270__a[G__37270__i] = arguments[G__37270__i + 1]; ++G__37270__i;}
  args = new cljs.core.IndexedSeq(G__37270__a,0,null);
} 
return G__37269__delegate.call(this,_STAR_state,args);};
G__37269.cljs$lang$maxFixedArity = 1;
G__37269.cljs$lang$applyTo = (function (arglist__37271){
var _STAR_state = cljs.core.first(arglist__37271);
var args = cljs.core.rest(arglist__37271);
return G__37269__delegate(_STAR_state,args);
});
G__37269.cljs$core$IFn$_invoke$arity$variadic = G__37269__delegate;
return G__37269;
})()
:handle_fn);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_fn_SINGLEQUOTE_,state));
}),cljs.core.PersistentArrayMap.EMPTY,G__37192):G__37192);
if(cljs.core.truth_(before)){
return cljs.core.reduce_kv((function (r,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,(function (){var G__37193 = f;
var G__37194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(raw_SINGLEQUOTE_,k);
return (before.cljs$core$IFn$_invoke$arity$2 ? before.cljs$core$IFn$_invoke$arity$2(G__37193,G__37194) : before.call(null,G__37193,G__37194));
})());
}),cljs.core.PersistentArrayMap.EMPTY,G__37192__$1);
} else {
return G__37192__$1;
}
}));

(frontend.modules.shortcut.data_helper.shortcuts_map_by_handler_id.cljs$lang$maxFixedArity = 2);

frontend.modules.shortcut.data_helper.gen_shortcut_seq = (function frontend$modules$shortcut$data_helper$gen_shortcut_seq(id){
var bindings = frontend.modules.shortcut.data_helper.shortcut_binding(id);
if(bindings === false){
return cljs.core.PersistentVector.EMPTY;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.last(bindings),/ |\+/);
}
});
frontend.modules.shortcut.data_helper.binding_for_display = (function frontend$modules$shortcut$data_helper$binding_for_display(k,binding){
var tmp = ((binding === false)?(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","kill-line-after","editor/kill-line-after",-1948172258));
} else {
return and__5140__auto__;
}
})())?"ctrl k":(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","beginning-of-block","editor/beginning-of-block",-1731001628));
} else {
return and__5140__auto__;
}
})())?"ctrl a":(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","end-of-block","editor/end-of-block",87939440));
} else {
return and__5140__auto__;
}
})())?"ctrl e":(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","backward-kill-word","editor/backward-kill-word",2024635319));
} else {
return and__5140__auto__;
}
})())?"opt delete":frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0))
)))):((typeof binding === 'string')?frontend.modules.shortcut.utils.decorate_binding(binding):clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.utils.decorate_binding,binding))
));
return clojure.string.replace(tmp,"meta","cmd");
});
/**
 * Given shortcut key, return handler group
 *   eg: :editor/new-line -> :shortcut.handler/block-editing-only
 */
frontend.modules.shortcut.data_helper.get_group = (function frontend$modules$shortcut$data_helper$get_group(k){
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37195){
var vec__37196 = p__37195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37196,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37196,(1),null);
return cljs.core.contains_QMARK_(v,k);
}),cljs.core.deref(frontend.modules.shortcut.config._STAR_config))));
});
frontend.modules.shortcut.data_helper.should_be_included_to_global_handler = (function frontend$modules$shortcut$data_helper$should_be_included_to_global_handler(from_handler_id){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shortcut.handler","pdf","shortcut.handler/pdf",468089398),null], null), null),from_handler_id)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),from_handler_id]);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([from_handler_id]);
}
});
/**
 * Returns true when two parsed bindings share the same full prefix up to the
 * shorter binding, but are not exactly equal.
 */
frontend.modules.shortcut.data_helper.binding_prefix_overlap_QMARK_ = (function frontend$modules$shortcut$data_helper$binding_prefix_overlap_QMARK_(a,b){
var and__5140__auto__ = cljs.core.sequential_QMARK_(a);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.sequential_QMARK_(b);
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
if(and__5140__auto____$2){
var prefix_len = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b));
return (((prefix_len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(prefix_len,a),cljs.core.take.cljs$core$IFn$_invoke$arity$2(prefix_len,b))));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
/**
 * Two handler groups conflict (can be active simultaneously) unless one is
 * editing-only and the other is non-editing-only — those are mutually exclusive
 * at runtime.
 */
frontend.modules.shortcut.data_helper.handlers_co_active_QMARK_ = (function frontend$modules$shortcut$data_helper$handlers_co_active_QMARK_(h1,h2){
var editing_only = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),null,new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449),null], null), null);
var non_editing_only = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),null], null), null);
return (!(((((cljs.core.contains_QMARK_(editing_only,h1)) && (cljs.core.contains_QMARK_(non_editing_only,h2)))) || (((cljs.core.contains_QMARK_(non_editing_only,h1)) && (cljs.core.contains_QMARK_(editing_only,h2)))))));
});
frontend.modules.shortcut.data_helper.get_conflicts_by_keys = (function frontend$modules$shortcut$data_helper$get_conflicts_by_keys(var_args){
var G__37203 = arguments.length;
switch (G__37203) {
case 1:
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3(ks,new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group-global?","group-global?",188550543),true], null));
}));

(frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$2 = (function (ks,handler_id){
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3(ks,handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group-global?","group-global?",188550543),true], null));
}));

(frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3 = (function (ks,handler_id,p__37204){
var map__37205 = p__37204;
var map__37205__$1 = cljs.core.__destructure_map(map__37205);
var exclude_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37205__$1,new cljs.core.Keyword(null,"exclude-ids","exclude-ids",7408318));
var group_global_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37205__$1,new cljs.core.Keyword(null,"group-global?","group-global?",188550543));
var global_handlers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),null,new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),null,new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),null,new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449),null,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741),null], null), null);
var ks_bindings = frontend.modules.shortcut.data_helper.get_bindings_keys_map();
var handler_ids = (cljs.core.truth_(group_global_QMARK_)?frontend.modules.shortcut.data_helper.should_be_included_to_global_handler(handler_id):cljs.core.PersistentHashSet.createAsIfByAssoc([handler_id]));
var global_QMARK_ = (cljs.core.truth_(group_global_QMARK_)?cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(global_handlers,handler_ids)):null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37201_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.vals(cljs.core.second(p1__37201_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
var temp__5825__auto__ = frontend.modules.shortcut.utils.undecorate_binding(k);
if(cljs.core.truth_(temp__5825__auto__)){
var k_SINGLEQUOTE_ = temp__5825__auto__;
var input_binding = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.utils.safe_parse_string_binding(k_SINGLEQUOTE_));
var same_key_QMARK_ = (function (p__37206){
var vec__37207 = p__37206;
var k_SINGLEQUOTE___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(1),null);
if(cljs.core.sequential_QMARK_(input_binding)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_binding,k_SINGLEQUOTE___$1)) || (frontend.modules.shortcut.data_helper.binding_prefix_overlap_QMARK_(input_binding,k_SINGLEQUOTE___$1)));
} else {
return null;
}
});
var into_conflict_refs = (function (p__37210){
var vec__37211 = p__37210;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37211,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37211,(1),null);
var temp__5825__auto____$1 = o;
if(cljs.core.truth_(temp__5825__auto____$1)){
var map__37214 = temp__5825__auto____$1;
var map__37214__$1 = cljs.core.__destructure_map(map__37214);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37214__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37214__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.reduce_kv((function (r,id,handler_id_SINGLEQUOTE_){
var same_handler_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler_id,handler_id_SINGLEQUOTE_);
var handler_match_QMARK_ = (function (){var or__5142__auto__ = same_handler_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = group_global_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler_ids,cljs.core.PersistentHashSet.createAsIfByAssoc([handler_id_SINGLEQUOTE_]));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = ((cljs.core.set_QMARK_(handler_ids)) && (cljs.core.contains_QMARK_(handler_ids,handler_id_SINGLEQUOTE_)));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var and__5140__auto____$1 = global_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.contains_QMARK_(global_handlers,handler_id_SINGLEQUOTE_)) && (cljs.core.every_QMARK_((function (p1__37199_SHARP_){
return frontend.modules.shortcut.data_helper.handlers_co_active_QMARK_(p1__37199_SHARP_,handler_id_SINGLEQUOTE_);
}),handler_ids)));
} else {
return and__5140__auto____$1;
}
}
}
} else {
return and__5140__auto__;
}
}
})();
var binding_match_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_binding,k__$1)) || (((same_handler_QMARK_) && (frontend.modules.shortcut.data_helper.binding_prefix_overlap_QMARK_(input_binding,k__$1)))));
if(cljs.core.truth_((function (){var and__5140__auto__ = (!(cljs.core.contains_QMARK_(exclude_ids,id)));
if(and__5140__auto__){
var and__5140__auto____$1 = handler_match_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return binding_match_QMARK_;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,id,handler_id_SINGLEQUOTE_);
} else {
return r;
}
}),cljs.core.PersistentArrayMap.EMPTY,refs)], null)], null);
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37200_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.second(cljs.core.second(p1__37200_SHARP_)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(into_conflict_refs,cljs.core.filterv(same_key_QMARK_,ks_bindings))))], null);
} else {
return null;
}
}),((typeof ks === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks], null):ks))));
}));

(frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$lang$maxFixedArity = 3);

frontend.modules.shortcut.data_helper.handler_display_labels = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("shortcut.handler","date-picker","shortcut.handler/date-picker",139075040),new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),new cljs.core.Keyword("shortcut.handler","cards","shortcut.handler/cards",-979698196),new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449),new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741),new cljs.core.Keyword("shortcut.handler","pdf","shortcut.handler/pdf",468089398),new cljs.core.Keyword("shortcut.handler","auto-complete","shortcut.handler/auto-complete",1783376094)],["date picker","editor","global","navigation","flashcards","editing mode","global","PDF viewer","autocomplete"]);
/**
 * Like get-conflicts-by-keys but returns conflicts from OTHER handler contexts only.
 * Used for non-blocking amber warnings when a key is shared across contexts.
 */
frontend.modules.shortcut.data_helper.get_cross_context_conflicts = (function frontend$modules$shortcut$data_helper$get_cross_context_conflicts(ks,handler_id,p__37217){
var map__37218 = p__37217;
var map__37218__$1 = cljs.core.__destructure_map(map__37218);
var exclude_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37218__$1,new cljs.core.Keyword(null,"exclude-ids","exclude-ids",7408318));
var global_handlers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),null,new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),null,new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),null,new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449),null,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741),null], null), null);
var ks_bindings = frontend.modules.shortcut.data_helper.get_bindings_keys_map();
var caller_handlers = frontend.modules.shortcut.data_helper.should_be_included_to_global_handler(handler_id);
var caller_is_global_QMARK_ = cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(global_handlers,caller_handlers));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37216_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.vals(cljs.core.second(p1__37216_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
var temp__5825__auto__ = frontend.modules.shortcut.utils.undecorate_binding(k);
if(cljs.core.truth_(temp__5825__auto__)){
var k_SINGLEQUOTE_ = temp__5825__auto__;
var k_parsed = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.utils.safe_parse_string_binding(k_SINGLEQUOTE_));
var same_key_QMARK_ = (function (p__37219){
var vec__37220 = p__37219;
var k_SINGLEQUOTE___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37220,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37220,(1),null);
if(cljs.core.sequential_QMARK_(k_parsed)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_parsed,k_SINGLEQUOTE___$1);
} else {
return null;
}
});
var cross_context_ref = (function (p__37223){
var vec__37224 = p__37223;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37224,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37224,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_parsed,k__$1)){
var temp__5825__auto____$1 = o;
if(cljs.core.truth_(temp__5825__auto____$1)){
var map__37227 = temp__5825__auto____$1;
var map__37227__$1 = cljs.core.__destructure_map(map__37227);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.reduce_kv((function (r,id,handler_id_SINGLEQUOTE_){
if((((!(cljs.core.contains_QMARK_(exclude_ids,id)))) && ((((!(cljs.core.contains_QMARK_(caller_handlers,handler_id_SINGLEQUOTE_)))) && ((!(((caller_is_global_QMARK_) && (cljs.core.contains_QMARK_(global_handlers,handler_id_SINGLEQUOTE_)))))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,id,handler_id_SINGLEQUOTE_);
} else {
return r;
}
}),cljs.core.PersistentArrayMap.EMPTY,refs)], null)], null);
} else {
return null;
}
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37215_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.second(cljs.core.second(p1__37215_SHARP_)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cross_context_ref,cljs.core.filterv(same_key_QMARK_,ks_bindings))))], null);
} else {
return null;
}
}),((typeof ks === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks], null):ks))));
});
/**
 * Get the human-readable context label for the first conflict in a conflicts map.
 */
frontend.modules.shortcut.data_helper.conflict_context_label = (function frontend$modules$shortcut$data_helper$conflict_context_label(conflicts_map){
return cljs.core.first((function (){var iter__5628__auto__ = (function frontend$modules$shortcut$data_helper$conflict_context_label_$_iter__37228(s__37229){
return (new cljs.core.LazySeq(null,(function (){
var s__37229__$1 = s__37229;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37229__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__37236 = cljs.core.first(xs__6385__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236,(1),null);
var iterys__5624__auto__ = ((function (s__37229__$1,vec__37236,_,ks,xs__6385__auto__,temp__5825__auto__){
return (function frontend$modules$shortcut$data_helper$conflict_context_label_$_iter__37228_$_iter__37230(s__37231){
return (new cljs.core.LazySeq(null,((function (s__37229__$1,vec__37236,_,ks,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__37231__$1 = s__37231;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37231__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var v = cljs.core.first(xs__6385__auto____$1);
var refs = cljs.core.second(v);
var iterys__5624__auto__ = ((function (s__37231__$1,s__37229__$1,refs,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__37236,_,ks,xs__6385__auto__,temp__5825__auto__){
return (function frontend$modules$shortcut$data_helper$conflict_context_label_$_iter__37228_$_iter__37230_$_iter__37232(s__37233){
return (new cljs.core.LazySeq(null,((function (s__37231__$1,s__37229__$1,refs,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__37236,_,ks,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__37233__$1 = s__37233;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__37233__$1);
if(temp__5825__auto____$2){
var s__37233__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__37233__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__37233__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__37235 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__37234 = (0);
while(true){
if((i__37234 < size__5627__auto__)){
var vec__37239 = cljs.core._nth(c__5626__auto__,i__37234);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37239,(0),null);
var handler_id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37239,(1),null);
cljs.core.chunk_append(b__37235,cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.handler_display_labels,handler_id_SINGLEQUOTE_));

var G__37273 = (i__37234 + (1));
i__37234 = G__37273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37235),frontend$modules$shortcut$data_helper$conflict_context_label_$_iter__37228_$_iter__37230_$_iter__37232(cljs.core.chunk_rest(s__37233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37235),null);
}
} else {
var vec__37242 = cljs.core.first(s__37233__$2);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37242,(0),null);
var handler_id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37242,(1),null);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.handler_display_labels,handler_id_SINGLEQUOTE_),frontend$modules$shortcut$data_helper$conflict_context_label_$_iter__37228_$_iter__37230_$_iter__37232(cljs.core.rest(s__37233__$2)));
}
} else {
return null;
}
break;
}
});})(s__37231__$1,s__37229__$1,refs,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__37236,_,ks,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__37231__$1,s__37229__$1,refs,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__37236,_,ks,xs__6385__auto__,temp__5825__auto__))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(refs));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$modules$shortcut$data_helper$conflict_context_label_$_iter__37228_$_iter__37230(cljs.core.rest(s__37231__$1)));
} else {
var G__37274 = cljs.core.rest(s__37231__$1);
s__37231__$1 = G__37274;
continue;
}
} else {
return null;
}
break;
}
});})(s__37229__$1,vec__37236,_,ks,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__37229__$1,vec__37236,_,ks,xs__6385__auto__,temp__5825__auto__))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.vals(ks)));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$modules$shortcut$data_helper$conflict_context_label_$_iter__37228(cljs.core.rest(s__37229__$1)));
} else {
var G__37275 = cljs.core.rest(s__37229__$1);
s__37229__$1 = G__37275;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(conflicts_map);
})());
});
/**
 * Split a conflicts map into {:exact ... :prefix ...} sub-maps.
 * Exact = inner key equals the parsed input. Prefix = inner key is a prefix overlap.
 */
frontend.modules.shortcut.data_helper.partition_conflicts_by_type = (function frontend$modules$shortcut$data_helper$partition_conflicts_by_type(conflicts_map,input_key){
var input_binding = (function (){var G__37245 = input_key;
var G__37245__$1 = (((G__37245 == null))?null:frontend.modules.shortcut.utils.undecorate_binding(G__37245));
var G__37245__$2 = (((G__37245__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__37245__$1));
if((G__37245__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__37245__$2);
}
})();
if(cljs.core.sequential_QMARK_(input_binding)){
return cljs.core.reduce_kv((function (acc,outer_k,inner_map){
var grouped = cljs.core.group_by((function (p__37246){
var vec__37247 = p__37246;
var inner_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37247,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37247,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_binding,inner_k);
}),inner_map);
var exact_entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped,true);
var prefix_entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped,false);
var G__37250 = acc;
var G__37250__$1 = ((cljs.core.seq(exact_entries))?cljs.core.assoc_in(G__37250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exact","exact",1438022323),outer_k], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,exact_entries)):G__37250);
if(cljs.core.seq(prefix_entries)){
return cljs.core.assoc_in(G__37250__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),outer_k], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,prefix_entries));
} else {
return G__37250__$1;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exact","exact",1438022323),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.PersistentArrayMap.EMPTY], null),conflicts_map);
} else {
return null;
}
});
/**
 * Returns true if any conflict in the map is an exact match (not just prefix overlap).
 */
frontend.modules.shortcut.data_helper.conflict_has_exact_QMARK_ = (function frontend$modules$shortcut$data_helper$conflict_has_exact_QMARK_(conflicts_map,input_key){
var input_binding = (function (){var G__37251 = input_key;
var G__37251__$1 = (((G__37251 == null))?null:frontend.modules.shortcut.utils.undecorate_binding(G__37251));
var G__37251__$2 = (((G__37251__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__37251__$1));
if((G__37251__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__37251__$2);
}
})();
return cljs.core.boolean$((function (){var and__5140__auto__ = cljs.core.sequential_QMARK_(input_binding);
if(and__5140__auto__){
return cljs.core.some((function (p__37252){
var vec__37253 = p__37252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37253,(0),null);
var inner_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37253,(1),null);
return cljs.core.some((function (p__37256){
var vec__37257 = p__37256;
var inner_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37257,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37257,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_binding,inner_k);
}),inner_map);
}),conflicts_map);
} else {
return and__5140__auto__;
}
})());
});
frontend.modules.shortcut.data_helper.parse_conflicts_from_binding = (function frontend$modules$shortcut$data_helper$parse_conflicts_from_binding(from_binding,target){
var temp__5825__auto__ = ((typeof target === 'string') && (((cljs.core.sequential_QMARK_(from_binding)) && (cljs.core.seq(from_binding)))));
if(temp__5825__auto__){
var from_binding__$1 = temp__5825__auto__;
var temp__5825__auto____$1 = (function (){var G__37261 = target;
var G__37261__$1 = (((G__37261 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__37261));
var G__37261__$2 = (((G__37261__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__37261__$1));
if((G__37261__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__37261__$2);
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var target__$1 = temp__5825__auto____$1;
return cljs.core.filterv((function (p1__37260_SHARP_){
var temp__5825__auto____$2 = (function (){var G__37262 = p1__37260_SHARP_;
var G__37262__$1 = (((G__37262 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__37262));
var G__37262__$2 = (((G__37262__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__37262__$1));
if((G__37262__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__37262__$2);
}
})();
if(cljs.core.truth_(temp__5825__auto____$2)){
var from = temp__5825__auto____$2;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,target__$1)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(from),(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(target__$1),(1))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target__$1),cljs.core.first(from))))));
} else {
return null;
}
}),from_binding__$1);
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.shortcut.data_helper.shortcut_data_by_id = (function frontend$modules$shortcut$data_helper$shortcut_data_by_id(id){
var binding = frontend.modules.shortcut.data_helper.shortcut_binding(id);
var data = (function (){var G__37263 = frontend.modules.shortcut.data_helper.shortcuts_map_full();
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__37263) : id.call(null,G__37263));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"binding","binding",539932593),frontend.modules.shortcut.data_helper.binding_for_display(id,binding));
});
frontend.modules.shortcut.data_helper.shortcut_desc_by_id = (function frontend$modules$shortcut$data_helper$shortcut_desc_by_id(id){
return frontend.modules.shortcut.data_helper.get_shortcut_desc(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.data_helper.shortcut_data_by_id(id),new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
frontend.modules.shortcut.data_helper.shortcuts__GT_commands = (function frontend$modules$shortcut$data_helper$shortcuts__GT_commands(handler_id){
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),handler_id);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37264){
var vec__37265 = p__37264;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(1),null);
return clojure.set.rename_keys(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.shortcut_data_by_id(id),new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),handler_id], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"action","action",-811238024)], null));
}),m);
});

//# sourceMappingURL=frontend.modules.shortcut.data_helper.js.map
