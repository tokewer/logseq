goog.provide('io.factorhouse.hsx.core');
goog.scope(function(){
  io.factorhouse.hsx.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
io.factorhouse.hsx.core.react_memo = module$node_modules$react$index.memo;
io.factorhouse.hsx.core.react_element_QMARK_ = module$node_modules$react$index.isValidElement;
io.factorhouse.hsx.core.set_display_name = (function io$factorhouse$hsx$core$set_display_name(comp,display_name){
return io.factorhouse.hsx.core.goog$module$goog$object.set(comp,"displayName",display_name);
});
io.factorhouse.hsx.core.obj_get = io.factorhouse.hsx.core.goog$module$goog$object.get;
io.factorhouse.hsx.core.callable_component_prop = "__hsx_callable_component";
io.factorhouse.hsx.core.callable_component_props_prop = "__hsx_callable_component_props";
io.factorhouse.hsx.core.callable_component_memo_prop = "__hsx_callable_component_memo";
/**
 * @define {boolean}
 * @type {boolean}
 */
io.factorhouse.hsx.core.USE_MEMO = goog.define("io.factorhouse.hsx.core.USE_MEMO",true);
/**
 * @define {string}
 * @type {string}
 */
io.factorhouse.hsx.core.ERROR_HANDLER = goog.define("io.factorhouse.hsx.core.ERROR_HANDLER","throw-ex-info");
if((typeof io !== 'undefined') && (typeof io.factorhouse !== 'undefined') && (typeof io.factorhouse.hsx !== 'undefined') && (typeof io.factorhouse.hsx.core !== 'undefined') && (typeof io.factorhouse.hsx.core.handle_error !== 'undefined')){
} else {
io.factorhouse.hsx.core.handle_error = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47263 = cljs.core.get_global_hierarchy;
return (fexpr__47263.cljs$core$IFn$_invoke$arity$0 ? fexpr__47263.cljs$core$IFn$_invoke$arity$0() : fexpr__47263.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("io.factorhouse.hsx.core","handle-error"),(function (handler_id,_message,_ctx,_error){
return handler_id;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
io.factorhouse.hsx.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw-ex-info","throw-ex-info",1605797684),(function (_,message,ctx,error){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(message,ctx,error);
}));
io.factorhouse.hsx.core.handle_error_STAR_ = (function io$factorhouse$hsx$core$handle_error_STAR_(message,ctx,error){
return io.factorhouse.hsx.core.handle_error.cljs$core$IFn$_invoke$arity$4(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(io.factorhouse.hsx.core.ERROR_HANDLER),message,ctx,error);
});
io.factorhouse.hsx.core.multi_method_QMARK_ = (function io$factorhouse$hsx$core$multi_method_QMARK_(x){
return (x instanceof cljs.core.MultiFn);
});
io.factorhouse.hsx.core.anon_hsx_component_QMARK_ = (function io$factorhouse$hsx$core$anon_hsx_component_QMARK_(x){
return ((cljs.core.fn_QMARK_(x)) || (io.factorhouse.hsx.core.multi_method_QMARK_(x)));
});
io.factorhouse.hsx.core.hsx_component__GT_display_name = (function io$factorhouse$hsx$core$hsx_component__GT_display_name(f){
try{if(io.factorhouse.hsx.core.multi_method_QMARK_(f)){
var G__47269 = f.name;
if((G__47269 == null)){
return null;
} else {
return io.factorhouse.hsx.core.goog$module$goog$object.get(G__47269,"str");
}
} else {
var display_name = f.name;
if((!(clojure.string.blank_QMARK_(display_name)))){
var display_name__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(display_name,"_","-"),"$");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(display_name__$1))){
return (""+"$hoc/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(display_name__$1)));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(display_name__$1)))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(display_name__$1)));
}
} else {
return "$hoc";
}
}
}catch (e47268){var _ = e47268;
if(goog.DEBUG){
return console.warn("Failed to construct a display name from HSX component, returning nil.");
} else {
return null;
}
}});
io.factorhouse.hsx.core.react_special_components = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["react.suspense",null,"react.profiler",null,"react.strict_mode",null], null), null);
io.factorhouse.hsx.core.react_component_QMARK_ = (function io$factorhouse$hsx$core$react_component_QMARK_(x){
return ((cljs.core.fn_QMARK_(x)) || (((cljs.core.object_QMARK_(x)) || ((((cljs.core.type(x) === Symbol)) && (cljs.core.contains_QMARK_(io.factorhouse.hsx.core.react_special_components,x.description)))))));
});
io.factorhouse.hsx.core.create_react_element = (function io$factorhouse$hsx$core$create_react_element(original_hsx,elem,props,children){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,elem,props,children);
}catch (e47276){var e = e47276;
return io.factorhouse.hsx.core.handle_error_STAR_("Failed to create React Element from provided HSX: exception calling react/createElement.",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hsx","hsx",-1921897910),original_hsx,new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"error-type","error-type",1096890596),new cljs.core.Keyword(null,"react-error","react-error",307009990)], null),e);
}});
io.factorhouse.hsx.core.hsx_props__GT_react_props = (function io$factorhouse$hsx$core$hsx_props__GT_react_props(original_hsx,props){
try{return io.factorhouse.hsx.props.hsx_props__GT_react_props(props);
}catch (e47277){var e = e47277;
return io.factorhouse.hsx.core.handle_error_STAR_("Failed to create React Element from provided HSX: Clj->JS props serialization error.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hsx","hsx",-1921897910),original_hsx,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"error-type","error-type",1096890596),new cljs.core.Keyword(null,"props-serialization-error","props-serialization-error",-1360956679)], null),e);
}});
io.factorhouse.hsx.core.hsx_props_arg__GT_react_props = (function io$factorhouse$hsx$core$hsx_props_arg__GT_react_props(original_hsx,x){
if(cljs.core.truth_((io.factorhouse.hsx.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? io.factorhouse.hsx.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : io.factorhouse.hsx.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return io.factorhouse.hsx.core.hsx_props__GT_react_props(original_hsx,x);
}
});
io.factorhouse.hsx.core.anon_hsx_comp_factory = (function io$factorhouse$hsx$core$anon_hsx_comp_factory(elem_f){
var display_name = io.factorhouse.hsx.core.hsx_component__GT_display_name(elem_f);
var proxy_STAR_ = (function io$factorhouse$hsx$core$anon_hsx_comp_factory_$_anon_hsx_comp_proxy(props){
var elem_args = io.factorhouse.hsx.core.goog$module$goog$object.get(props,"args");
var comp_STAR_ = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(elem_f,elem_args);
}catch (e47279){var e = e47279;
return io.factorhouse.hsx.core.handle_error_STAR_((""+"Unhandled exception calling HSX component "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),elem_args,new cljs.core.Keyword(null,"error-type","error-type",1096890596),new cljs.core.Keyword(null,"unhandled-exception","unhandled-exception",551333875),new cljs.core.Keyword(null,"elem","elem",618631056),elem_f], null),e);
}})();
return (io.factorhouse.hsx.core.create_element.cljs$core$IFn$_invoke$arity$1 ? io.factorhouse.hsx.core.create_element.cljs$core$IFn$_invoke$arity$1(comp_STAR_) : io.factorhouse.hsx.core.create_element.call(null,comp_STAR_));
});
io.factorhouse.hsx.core.set_display_name(proxy_STAR_,display_name);

return proxy_STAR_;
});
io.factorhouse.hsx.core.are_props_equal_QMARK_ = (function io$factorhouse$hsx$core$are_props_equal_QMARK_(pred){
return (function io$factorhouse$hsx$core$are_props_equal_QMARK__$_are_props_equal_QMARK__STAR_(prev_props,next_props){
var G__47281 = io.factorhouse.hsx.core.goog$module$goog$object.get(prev_props,"args");
var G__47282 = io.factorhouse.hsx.core.goog$module$goog$object.get(next_props,"args");
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__47281,G__47282) : pred.call(null,G__47281,G__47282));
});
});
io.factorhouse.hsx.core.callable_component_props_QMARK_ = (function io$factorhouse$hsx$core$callable_component_props_QMARK_(props){
return ((cljs.core.object_QMARK_(props)) && (io.factorhouse.hsx.core.goog$module$goog$object.get(props,io.factorhouse.hsx.core.callable_component_props_prop) === true));
});
io.factorhouse.hsx.core.callable_component_QMARK_ = (function io$factorhouse$hsx$core$callable_component_QMARK_(x){
return ((cljs.core.fn_QMARK_(x)) && (io.factorhouse.hsx.core.goog$module$goog$object.get(x,io.factorhouse.hsx.core.callable_component_prop) === true));
});
io.factorhouse.hsx.core.mark_callable_component_BANG_ = (function io$factorhouse$hsx$core$mark_callable_component_BANG_(comp,memo_comp,display_name){
io.factorhouse.hsx.core.set_display_name(comp,display_name);

io.factorhouse.hsx.core.set_display_name(memo_comp,display_name);

io.factorhouse.hsx.core.goog$module$goog$object.set(comp,io.factorhouse.hsx.core.callable_component_prop,true);

io.factorhouse.hsx.core.goog$module$goog$object.set(comp,io.factorhouse.hsx.core.callable_component_memo_prop,memo_comp);

return comp;
});
io.factorhouse.hsx.core.create_callable_component_element = (function io$factorhouse$hsx$core$create_callable_component_element(original_hsx,comp,args,meta_props){
var outer_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memo?","memo?",519601726),io.factorhouse.hsx.core.USE_MEMO], null),meta_props], 0));
var returned_comp = (cljs.core.truth_(new cljs.core.Keyword(null,"memo?","memo?",519601726).cljs$core$IFn$_invoke$arity$1(outer_props))?(function (){var or__5142__auto__ = io.factorhouse.hsx.core.goog$module$goog$object.get(comp,io.factorhouse.hsx.core.callable_component_memo_prop);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return comp;
}
})():comp);
var props = (function (){var or__5142__auto__ = io.factorhouse.hsx.core.hsx_props__GT_react_props(original_hsx,outer_props);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ({});
}
})();
io.factorhouse.hsx.core.goog$module$goog$object.set(props,io.factorhouse.hsx.core.callable_component_props_prop,true);

io.factorhouse.hsx.core.goog$module$goog$object.set(props,"args",args);

return io.factorhouse.hsx.core.create_react_element(original_hsx,returned_comp,props,null);
});
if((typeof io !== 'undefined') && (typeof io.factorhouse !== 'undefined') && (typeof io.factorhouse.hsx !== 'undefined') && (typeof io.factorhouse.hsx.core !== 'undefined') && (typeof io.factorhouse.hsx.core.component_cache !== 'undefined')){
} else {
io.factorhouse.hsx.core.component_cache = cljs.core.volatile_BANG_((new WeakMap()));
}
io.factorhouse.hsx.core.anon_hsx_component = (function io$factorhouse$hsx$core$anon_hsx_component(elem_f,memo_QMARK_,memo_pred){
var weak_map = cljs.core.deref(io.factorhouse.hsx.core.component_cache);
var temp__5823__auto__ = weak_map.get(elem_f);
if(cljs.core.truth_(temp__5823__auto__)){
var proxy_comp = temp__5823__auto__;
return proxy_comp;
} else {
var proxy_comp = (function (){var G__47292 = io.factorhouse.hsx.core.anon_hsx_comp_factory(elem_f);
if(cljs.core.truth_(memo_QMARK_)){
return module$node_modules$react$index.memo(G__47292,io.factorhouse.hsx.core.are_props_equal_QMARK_(memo_pred));
} else {
return G__47292;
}
})();
weak_map.set(elem_f,proxy_comp);

return proxy_comp;
}
});
/**
 * Resets the component cache. Useful to call in dev after hot reloading.
 */
io.factorhouse.hsx.core.memo_clear_BANG_ = (function io$factorhouse$hsx$core$memo_clear_BANG_(){
return cljs.core.vreset_BANG_(io.factorhouse.hsx.core.component_cache,(new WeakMap()));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
io.factorhouse.hsx.core.Component = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(io.factorhouse.hsx.core.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k47294,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__47304 = k47294;
switch (G__47304) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47294,else__5451__auto__);

}
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__47311){
var vec__47312 = p__47311;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47312,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47312,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#io.factorhouse.hsx.core.Component{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47293){
var self__ = this;
var G__47293__$1 = this;
return (new cljs.core.RecordIter((0),G__47293__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new io.factorhouse.hsx.core.Component(self__.__meta,self__.__extmap,self__.__hash));
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1812246905 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47295,other47296){
var self__ = this;
var this47295__$1 = this;
return (((!((other47296 == null)))) && ((((this47295__$1.constructor === other47296.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47295__$1.__extmap,other47296.__extmap)))));
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new io.factorhouse.hsx.core.Component(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k47294){
var self__ = this;
var this__5455__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k47294);
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__47293){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__47323 = cljs.core.keyword_identical_QMARK_;
var expr__47324 = k__5457__auto__;
return (new io.factorhouse.hsx.core.Component(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__47293),null));
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__47293){
var self__ = this;
var this__5447__auto____$1 = this;
return (new io.factorhouse.hsx.core.Component(G__47293,self__.__extmap,self__.__hash));
}));

(io.factorhouse.hsx.core.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(io.factorhouse.hsx.core.Component.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(io.factorhouse.hsx.core.Component.cljs$lang$type = true);

(io.factorhouse.hsx.core.Component.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"io.factorhouse.hsx.core/Component",null,(1),null));
}));

(io.factorhouse.hsx.core.Component.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"io.factorhouse.hsx.core/Component");
}));

/**
 * Positional factory function for io.factorhouse.hsx.core/Component.
 */
io.factorhouse.hsx.core.__GT_Component = (function io$factorhouse$hsx$core$__GT_Component(){
return (new io.factorhouse.hsx.core.Component(null,null,null));
});

/**
 * Factory function for io.factorhouse.hsx.core/Component, taking a map of keywords to field values.
 */
io.factorhouse.hsx.core.map__GT_Component = (function io$factorhouse$hsx$core$map__GT_Component(G__47302){
var extmap__5490__auto__ = (function (){var G__47326 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__47302);
if(cljs.core.record_QMARK_(G__47302)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47326);
} else {
return G__47326;
}
})();
return (new io.factorhouse.hsx.core.Component(null,cljs.core.not_empty(extmap__5490__auto__),null));
});

io.factorhouse.hsx.core.hsx_component_QMARK_ = (function io$factorhouse$hsx$core$hsx_component_QMARK_(x){
return (x instanceof io.factorhouse.hsx.core.Component);
});
io.factorhouse.hsx.core.string_tag_pattern = /([a-z][A-Za-z0-9:_-]*|[.#][^\s.#]+)([.#][^\s.#]+)*/;
io.factorhouse.hsx.core.string_tag_QMARK_ = (function io$factorhouse$hsx$core$string_tag_QMARK_(x){
return ((typeof x === 'string') && (cljs.core.boolean$(cljs.core.re_matches(io.factorhouse.hsx.core.string_tag_pattern,x))));
});
io.factorhouse.hsx.core.hsx_element_type_QMARK_ = (function io$factorhouse$hsx$core$hsx_element_type_QMARK_(x){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<>","<>",1280186386),x)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f>","f>",1484564198),x)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),x)) || (((io.factorhouse.hsx.core.hsx_component_QMARK_(x)) || (((io.factorhouse.hsx.core.callable_component_QMARK_(x)) || (((io.factorhouse.hsx.core.anon_hsx_component_QMARK_(x)) || ((((x instanceof cljs.core.Keyword)) || (io.factorhouse.hsx.core.string_tag_QMARK_(x)))))))))))))));
});
io.factorhouse.hsx.core.hsx_element_vector_QMARK_ = (function io$factorhouse$hsx$core$hsx_element_vector_QMARK_(x){
return io.factorhouse.hsx.core.hsx_element_type_QMARK_(cljs.core.first(x));
});
io.factorhouse.hsx.core.create_child_elements = (function io$factorhouse$hsx$core$create_child_elements(child){
if(((cljs.core.vector_QMARK_(child)) && ((!(io.factorhouse.hsx.core.hsx_element_vector_QMARK_(child)))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(io.factorhouse.hsx.core.create_element,child);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(io.factorhouse.hsx.core.create_element.cljs$core$IFn$_invoke$arity$1 ? io.factorhouse.hsx.core.create_element.cljs$core$IFn$_invoke$arity$1(child) : io.factorhouse.hsx.core.create_element.call(null,child))], null);
}
});
io.factorhouse.hsx.core.create_children = (function io$factorhouse$hsx$core$create_children(children){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(io.factorhouse.hsx.core.create_child_elements,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
});
io.factorhouse.hsx.core.create_element_vector = (function io$factorhouse$hsx$core$create_element_vector(p__47337){
var vec__47338 = p__47337;
var seq__47339 = cljs.core.seq(vec__47338);
var first__47340 = cljs.core.first(seq__47339);
var seq__47339__$1 = cljs.core.next(seq__47339);
var elem_type = first__47340;
var args = seq__47339__$1;
var hsx = vec__47338;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<>","<>",1280186386),elem_type)){
return io.factorhouse.hsx.core.create_react_element(hsx,module$node_modules$react$index.Fragment,io.factorhouse.hsx.core.hsx_props__GT_react_props(hsx,cljs.core.meta(hsx)),io.factorhouse.hsx.core.create_children(args));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f>","f>",1484564198),elem_type)){
if(goog.DEBUG){
console.warn("Annotating components for hooks (:f>) is a Reagent thing. Just call the component directly: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [io.factorhouse.hsx.core.hsx_component__GT_display_name(cljs.core.second(hsx))], null),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),hsx))], 0)));
} else {
}

if(io.factorhouse.hsx.core.anon_hsx_component_QMARK_(cljs.core.first(args))){
} else {
io.factorhouse.hsx.core.handle_error_STAR_("Failed to create React Element from provided HSX: the second argument to :f> must be a ClojureScript function.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hsx","hsx",-1921897910),hsx,new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.second(args),new cljs.core.Keyword(null,"error-type","error-type",1096890596),new cljs.core.Keyword(null,"syntax-error","syntax-error",616555633)], null),null);
}

var G__47341 = cljs.core.with_meta(cljs.core.vec(args),cljs.core.meta(hsx));
return (io.factorhouse.hsx.core.create_element.cljs$core$IFn$_invoke$arity$1 ? io.factorhouse.hsx.core.create_element.cljs$core$IFn$_invoke$arity$1(G__47341) : io.factorhouse.hsx.core.create_element.call(null,G__47341));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),elem_type)){
var vec__47342 = args;
var seq__47343 = cljs.core.seq(vec__47342);
var first__47344 = cljs.core.first(seq__47343);
var seq__47343__$1 = cljs.core.next(seq__47343);
var f = first__47344;
var args__$1 = seq__47343__$1;
var props = io.factorhouse.hsx.core.hsx_props_arg__GT_react_props(hsx,cljs.core.first(args__$1));
var children = (cljs.core.truth_(props)?cljs.core.rest(args__$1):args__$1);
var props__$1 = (function (){var or__5142__auto__ = props;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ({});
}
})();
if(io.factorhouse.hsx.core.react_component_QMARK_(f)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Failed to create React Element from provided HSX: the second argument to :> must be a valid React component (a function or class that extends React.Component).",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hsx","hsx",-1921897910),hsx,new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.second(args__$1),new cljs.core.Keyword(null,"error-type","error-type",1096890596),new cljs.core.Keyword(null,"syntax-error","syntax-error",616555633),new cljs.core.Keyword(null,"docs","docs",-1974280502),"https://react.dev/reference/react/createElement#parameters"], null));
}

var temp__5825__auto___47372 = cljs.core.meta(hsx);
if(cljs.core.truth_(temp__5825__auto___47372)){
var meta_props_47373 = temp__5825__auto___47372;
io.factorhouse.hsx.core.goog$module$goog$object.extend(props__$1,io.factorhouse.hsx.core.hsx_props__GT_react_props(hsx,meta_props_47373));
} else {
}

return io.factorhouse.hsx.core.create_react_element(hsx,f,props__$1,io.factorhouse.hsx.core.create_children(children));
} else {
if(io.factorhouse.hsx.core.hsx_component_QMARK_(elem_type)){
var outer_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memo?","memo?",519601726),io.factorhouse.hsx.core.USE_MEMO], null),cljs.core.meta(hsx)], 0));
var returned_comp = (cljs.core.truth_(new cljs.core.Keyword(null,"memo?","memo?",519601726).cljs$core$IFn$_invoke$arity$1(outer_props))?new cljs.core.Keyword(null,"proxy-memo","proxy-memo",-1039224843).cljs$core$IFn$_invoke$arity$1(elem_type):new cljs.core.Keyword(null,"proxy","proxy",-117453614).cljs$core$IFn$_invoke$arity$1(elem_type));
var props = (function (){var or__5142__auto__ = io.factorhouse.hsx.core.hsx_props__GT_react_props(hsx,outer_props);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ({});
}
})();
io.factorhouse.hsx.core.goog$module$goog$object.extend(props,({"args": args}));

return io.factorhouse.hsx.core.create_react_element(hsx,returned_comp,props,null);
} else {
if(io.factorhouse.hsx.core.callable_component_QMARK_(elem_type)){
return io.factorhouse.hsx.core.create_callable_component_element(hsx,elem_type,args,cljs.core.meta(hsx));
} else {
if(io.factorhouse.hsx.core.anon_hsx_component_QMARK_(elem_type)){
var outer_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memo?","memo?",519601726),io.factorhouse.hsx.core.USE_MEMO], null),cljs.core.meta(hsx)], 0));
var returned_comp = io.factorhouse.hsx.core.anon_hsx_component(elem_type,new cljs.core.Keyword(null,"memo?","memo?",519601726).cljs$core$IFn$_invoke$arity$1(outer_props),(function (){var or__5142__auto__ = new cljs.core.Keyword("memo","predicate","memo/predicate",-1745816858).cljs$core$IFn$_invoke$arity$1(outer_props);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_;
}
})());
var props = (function (){var or__5142__auto__ = io.factorhouse.hsx.core.hsx_props__GT_react_props(hsx,outer_props);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ({});
}
})();
if(goog.DEBUG){
if(((io.factorhouse.hsx.core.multi_method_QMARK_(elem_type)) && (cljs.core.not(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(outer_props))))){
console.warn("HSX: multimethod component",io.factorhouse.hsx.core.hsx_component__GT_display_name(elem_type),"should be created with ^:key metadata.");
} else {
}

var display_name_47374 = io.factorhouse.hsx.core.hsx_component__GT_display_name(elem_type);
if(((clojure.string.starts_with_QMARK_(display_name_47374,"$hoc")) && (((cljs.core.not(new cljs.core.Keyword(null,"hoc","hoc",-1664120867).cljs$core$IFn$_invoke$arity$1(outer_props))) && (cljs.core.not(new cljs.core.Keyword(null,"hoc","hoc",-1664120867).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(elem_type)))))))){
console.warn("Higher-order components (HOC) are discouraged when using HSX. See: https://legacy.reactjs.org/docs/higher-order-components.html#dont-use-hocs-inside-the-render-method. If you know what you are doing, and want to ignore this warning, pass a ^:hoc key to your HOC. Hiccup: ^:hoc",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(display_name_47374)], null),args)], 0)),". If your anonymous function is not a HOC (but a closure captured in a top-level def) then you can wrap your component with the `hsx.core/component` macro: `(hsx/component \"MyDisplayName\" (fn [] ...))`.");
} else {
}
} else {
}

io.factorhouse.hsx.core.goog$module$goog$object.extend(props,({"args": args}));

return io.factorhouse.hsx.core.create_react_element(hsx,returned_comp,props,null);
} else {
if((((elem_type instanceof cljs.core.Keyword)) || (typeof elem_type === 'string'))){
var map__47349 = io.factorhouse.hsx.tag.cached_parse(elem_type);
var map__47349__$1 = cljs.core.__destructure_map(map__47349);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47349__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47349__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47349__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var props = io.factorhouse.hsx.core.hsx_props_arg__GT_react_props(hsx,cljs.core.first(args));
var children = (cljs.core.truth_(props)?cljs.core.rest(args):args);
var props__$1 = (function (){var or__5142__auto__ = props;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ({});
}
})();
var temp__5825__auto___47376 = cljs.core.meta(hsx);
if(cljs.core.truth_(temp__5825__auto___47376)){
var meta_props_47377 = temp__5825__auto___47376;
io.factorhouse.hsx.core.goog$module$goog$object.extend(props__$1,io.factorhouse.hsx.core.hsx_props__GT_react_props(hsx,meta_props_47377));
} else {
}

if(cljs.core.truth_(id)){
io.factorhouse.hsx.core.goog$module$goog$object.set(props__$1,"id",id);
} else {
}

if(cljs.core.truth_(className)){
io.factorhouse.hsx.core.goog$module$goog$object.set(props__$1,"className",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(io.factorhouse.hsx.core.goog$module$goog$object.get(props__$1,"className"))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(className)));
} else {
}

return io.factorhouse.hsx.core.create_react_element(hsx,tag,props__$1,io.factorhouse.hsx.core.create_children(children));
} else {
return io.factorhouse.hsx.core.handle_error_STAR_((""+"Failed to create React element from provided HSX: cannot create element from type '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(elem_type))+"'."),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hsx","hsx",-1921897910),hsx,new cljs.core.Keyword(null,"elem","elem",618631056),elem_type,new cljs.core.Keyword(null,"error-type","error-type",1096890596),new cljs.core.Keyword(null,"unknown-element-type","unknown-element-type",1319514657)], null),null);

}
}
}
}
}
}
}
});
/**
 * Like react/createElement, but takes in some HSX hiccup and returns a React element.
 * 
 *   Generally called at the root of your application, where you render your UI:
 * 
 *   ```clojure
 *   (defonce root
 *  (createRoot (.getElementById js/document "app")))
 * 
 *   (defn init []
 *  (.render root (hsx/create-element [:div "Hello world!"])))
 *   ```
 */
io.factorhouse.hsx.core.create_element = (function io$factorhouse$hsx$core$create_element(this$){
if(((cljs.core.vector_QMARK_(this$)) && (cljs.core.empty_QMARK_(this$)))){
return null;
} else {
if(cljs.core.vector_QMARK_(this$)){
if(io.factorhouse.hsx.core.hsx_element_vector_QMARK_(this$)){
return io.factorhouse.hsx.core.create_element_vector(this$);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(io.factorhouse.hsx.core.create_element,this$));
}
} else {
if(cljs.core.seq_QMARK_(this$)){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(io.factorhouse.hsx.core.create_element,this$));
} else {
if((this$ instanceof cljs.core.Keyword)){
return cljs.core.name(this$);
} else {
return this$;

}
}
}
}
});
/**
 * Returns a React Function component that can be called outside a HSX context.
 * 
 * This function is similar to reagent.core/reactify-component.
 * 
 * Requires that the HSX component accept everything in a single props map, including its children.
 * 
 * Second argument (optional): the props deserialization function. By default, is a shallow js->cljs.
 * 
 * ```clojure
 * (defn exported [props]
 *   [:div "Hi, " (:name props)])
 * 
 *   (def react-comp (reactify-component exported))
 * 
 *   (defn could-be-jsx []
 *  (react/createElement react-comp #js {:name "world"}))
 * ```
 */
io.factorhouse.hsx.core.reactify_component = (function io$factorhouse$hsx$core$reactify_component(var_args){
var G__47357 = arguments.length;
switch (G__47357) {
case 1:
return io.factorhouse.hsx.core.reactify_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.factorhouse.hsx.core.reactify_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(io.factorhouse.hsx.core.reactify_component.cljs$core$IFn$_invoke$arity$1 = (function (comp){
return io.factorhouse.hsx.core.reactify_component.cljs$core$IFn$_invoke$arity$2(comp,io.factorhouse.hsx.props.shallow_js__GT_cljs);
}));

(io.factorhouse.hsx.core.reactify_component.cljs$core$IFn$_invoke$arity$2 = (function (comp,props_deserialization_fn){
return (function io$factorhouse$hsx$core$reactify_component_proxy(props){
return io.factorhouse.hsx.core.create_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(props_deserialization_fn.cljs$core$IFn$_invoke$arity$1 ? props_deserialization_fn.cljs$core$IFn$_invoke$arity$1(props) : props_deserialization_fn.call(null,props))], null));
});
}));

(io.factorhouse.hsx.core.reactify_component.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=io.factorhouse.hsx.core.js.map
