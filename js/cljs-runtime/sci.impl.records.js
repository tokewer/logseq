goog.provide('sci.impl.records');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.records !== 'undefined') && (typeof sci.impl.records.to_string !== 'undefined')){
} else {
sci.impl.records.to_string = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__72750 = cljs.core.get_global_hierarchy;
return (fexpr__72750.cljs$core$IFn$_invoke$arity$0 ? fexpr__72750.cljs$core$IFn$_invoke$arity$0() : fexpr__72750.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.records","to-string"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
sci.impl.records.to_string.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$){
var t = sci.impl.types.type_impl(this$);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(t))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(t))+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(this$).toString((16))));
}));
sci.impl.records.clojure_str = (function sci$impl$records$clojure_str(v){
var t = sci.impl.types.type_impl(v);
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,v)));
});

/**
 * @interface
 */
sci.impl.records.SciPrintMethod = function(){};

var sci$impl$records$SciPrintMethod$_sci_print_method$dyn_73111 = (function (x,w){
var x__5498__auto__ = (((x == null))?null:x);
var m__5499__auto__ = (sci.impl.records._sci_print_method[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(x,w) : m__5499__auto__.call(null,x,w));
} else {
var m__5497__auto__ = (sci.impl.records._sci_print_method["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(x,w) : m__5497__auto__.call(null,x,w));
} else {
throw cljs.core.missing_protocol("SciPrintMethod.-sci-print-method",x);
}
}
});
sci.impl.records._sci_print_method = (function sci$impl$records$_sci_print_method(x,w){
if((((!((x == null)))) && ((!((x.sci$impl$records$SciPrintMethod$_sci_print_method$arity$2 == null)))))){
return x.sci$impl$records$SciPrintMethod$_sci_print_method$arity$2(x,w);
} else {
return sci$impl$records$SciPrintMethod$_sci_print_method$dyn_73111(x,w);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {sci.impl.types.SciTypeInstance}
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
sci.impl.records.SciRecord = (function (rec_name,type,basis_fields,var$,ext_map,my_hash){
this.rec_name = rec_name;
this.type = type;
this.basis_fields = basis_fields;
this.var$ = var$;
this.ext_map = ext_map;
this.my_hash = my_hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.records.SciRecord.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return sci.impl.records.to_string.cljs$core$IFn$_invoke$arity$1(this$);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.ext_map,k);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,else$){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.ext_map,k,else$);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,p__72778){
var vec__72779 = p__72778;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72779,(1),null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f.call(null,ret,k,v));
}),init,this$__$1);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,opts){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = self__.var$;
if(cljs.core.truth_(temp__5823__auto__)){
var rv = temp__5823__auto__;
var m = cljs.core.meta(rv);
var temp__5823__auto____$1 = new cljs.core.Keyword("sci.impl","print-method","sci.impl/print-method",281191566).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto____$1)){
var pm = temp__5823__auto____$1;
return (pm.cljs$core$IFn$_invoke$arity$3 ? pm.cljs$core$IFn$_invoke$arity$3(this$__$1,w,opts) : pm.call(null,this$__$1,w,opts));
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.records.clojure_str(this$__$1)], 0));
}
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.records.clojure_str(this$__$1)], 0));
}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._iterator(self__.ext_map);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.ext_map);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sci.impl.records.SciRecord(self__.rec_name,self__.type,self__.basis_fields,self__.var$,self__.ext_map,self__.my_hash));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.ext_map);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var hq = self__.my_hash;
if((!((hq == null)))){
var type_hash = cljs.core.hash((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(self__.rec_name))));
var h = (type_hash ^ cljs.core.hash_unordered_coll(self__.ext_map));
(self__.my_hash = h);

return h;
} else {
return hq;
}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((!((other == null)))) && ((((this$__$1.constructor === other.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.rec_name,other.rec_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.ext_map,other.ext_map)))))));
}));

(sci.impl.records.SciRecord.prototype.sci$impl$types$SciTypeInstance$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.records.SciRecord.prototype.sci$impl$types$SciTypeInstance$_get_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.basis_fields,k)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.ext_map,k);
} else {
return (new sci.impl.records.SciRecord(self__.rec_name,self__.type,self__.basis_fields,self__.var$,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.ext_map,k),null));
}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.ext_map,k);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new sci.impl.records.SciRecord(self__.rec_name,self__.type,self__.basis_fields,self__.var$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ext_map,k,v),null));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._seq(self__.ext_map);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new sci.impl.records.SciRecord(self__.rec_name,self__.type,self__.basis_fields,self__.var$,cljs.core.with_meta(self__.ext_map,m),self__.my_hash));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(sci.impl.records.SciRecord.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rec-name","rec-name",407587896,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"basis-fields","basis-fields",1738159662,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"ext-map","ext-map",-1560591553,null),cljs.core.with_meta(new cljs.core.Symbol(null,"my_hash","my_hash",-1166068909,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.records.SciRecord.cljs$lang$type = true);

(sci.impl.records.SciRecord.cljs$lang$ctorStr = "sci.impl.records/SciRecord");

(sci.impl.records.SciRecord.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"sci.impl.records/SciRecord");
}));

/**
 * Positional factory function for sci.impl.records/SciRecord.
 */
sci.impl.records.__GT_SciRecord = (function sci$impl$records$__GT_SciRecord(rec_name,type,basis_fields,var$,ext_map,my_hash){
return (new sci.impl.records.SciRecord(rec_name,type,basis_fields,var$,ext_map,my_hash));
});

sci.impl.records.__GT_record_impl = (function sci$impl$records$__GT_record_impl(rec_name,type,basis_fields,var$,m){
return (new sci.impl.records.SciRecord(rec_name,type,basis_fields,var$,m,null));
});
sci.impl.records.defrecord = (function sci$impl$records$defrecord(var_args){
var args__5882__auto__ = [];
var len__5876__auto___73154 = arguments.length;
var i__5877__auto___73155 = (0);
while(true){
if((i__5877__auto___73155 < len__5876__auto___73154)){
args__5882__auto__.push((arguments[i__5877__auto___73155]));

var G__73156 = (i__5877__auto___73155 + (1));
i__5877__auto___73155 = G__73156;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((4) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((4)),(0),null)):null);
return sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5883__auto__);
});

(sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (p__72935,_,record_name,fields,raw_protocol_impls){
var vec__72936 = p__72935;
var seq__72937 = cljs.core.seq(vec__72936);
var first__72938 = cljs.core.first(seq__72937);
var seq__72937__$1 = cljs.core.next(seq__72937);
var _fname = first__72938;
var ___$1 = seq__72937__$1;
var form = vec__72936;
var ctx = sci.ctx_store.get_ctx();
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),cljs.core.rest(form));
} else {
var factory_fn_str = (""+"->"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name));
var factory_fn_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(factory_fn_str);
var constructor_fn_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+"__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(factory_fn_str)+"__ctor__"));
var map_factory_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+"map"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(factory_fn_str)));
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var key_set = cljs.core.set(keys);
var rec_type = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(sci.impl.utils.current_ns_name()))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name)));
var protocol_impls = sci.impl.utils.split_when(cljs.core.symbol_QMARK_,raw_protocol_impls);
var field_set = cljs.core.set(fields);
var protocol_impls__$1 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__72957,expr){
var vec__72958 = p__72957;
var seq__72959 = cljs.core.seq(vec__72958);
var first__72960 = cljs.core.first(seq__72959);
var seq__72959__$1 = cljs.core.next(seq__72959);
var protocol_name = first__72960;
var impls = seq__72959__$1;
var impls__$1 = cljs.core.group_by(cljs.core.first,impls);
var protocol = (function (){var G__72981 = ctx;
var G__72982 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__72983 = protocol_name;
var fexpr__72980 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__72980.cljs$core$IFn$_invoke$arity$3 ? fexpr__72980.cljs$core$IFn$_invoke$arity$3(G__72981,G__72982,G__72983) : fexpr__72980.call(null,G__72981,G__72982,G__72983));
})();
var protocol__$1 = (function (){var or__5142__auto__ = protocol;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),protocol_name)){
return new cljs.core.Keyword("sci.impl.records","object","sci.impl.records/object",-590699738);
} else {
return null;
}
}
})();
var ___$2 = (cljs.core.truth_(protocol__$1)?null:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((""+"Protocol not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name)),expr));
var protocol__$2 = ((sci.impl.utils.var_QMARK_(protocol__$1))?cljs.core.deref(protocol__$1):protocol__$1);
var protocol_var = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(protocol__$2);
var ___$3 = (cljs.core.truth_(protocol_var)?sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic(protocol_var,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"satisfies","satisfies",-311664218),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),sci.impl.protocols.type__GT_str(rec_type)], 0)):null);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol__$2);
var pns = (cljs.core.truth_(protocol_ns)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.types.getName(protocol_ns))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.records","object","sci.impl.records/object",-590699738),protocol__$2))?"sci.impl.records":null));
var fq_meth_name = (function (p1__72892_SHARP_){
if(cljs.core.simple_symbol_QMARK_(p1__72892_SHARP_)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__72892_SHARP_)));
} else {
return p1__72892_SHARP_;
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__73004){
var vec__73005 = p__73004;
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73005,(0),null);
var bodies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73005,(1),null);
var bodies__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (impl){
var args = cljs.core.first(impl);
var body = cljs.core.rest(impl);
var destr = sci.impl.utils.maybe_destructured(args,body);
var args__$1 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(destr);
var body__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(destr);
var orig_this_sym = cljs.core.first(args__$1);
var rest_args = cljs.core.rest(args__$1);
var shadows_this_QMARK_ = cljs.core.some((function (p1__72893_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_this_sym,p1__72893_SHARP_);
}),rest_args);
var this_sym = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("this_"):orig_this_sym);
var args__$2 = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.vec(cljs.core.cons(this_sym,rest_args)):args__$1);
var bindings = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (field){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field),(new cljs.core.List(null,this_sym,null,(1),null)),(2),null))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,field_set,args__$2)], 0));
var bindings__$1 = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_this_sym,this_sym], null)):bindings);
var bindings__$2 = cljs.core.vec(bindings__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args__$2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body__$1], 0)))),null,(1),null)))));
}),bodies__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(method_name),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,rec_type,null,(1),null)),bodies__$2], 0))));
}),impls__$1);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([protocol_impls,raw_protocol_impls], 0));
var nil_map = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,field_set),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,factory_fn_sym,null,(1),null)),(new cljs.core.List(null,constructor_fn_sym,null,(1),null)),(new cljs.core.List(null,map_factory_sym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(record_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci","record","sci/record",-778731026),true], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.records","-create-record-type","sci.impl.records/-create-record-type",558578550,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","type-name","sci.impl/type-name",-1528979388),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,rec_type,null,(1),null)),(2),null)),new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),true,new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666),(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,constructor_fn_sym,null,(1),null)),(2),null)),new cljs.core.Keyword("sci.impl","var","sci.impl/var",-2041185552),(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,record_name,null,(1),null)),(2),null)),new cljs.core.Keyword("sci.impl.record","map-constructor","sci.impl.record/map-constructor",1072184780),(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,map_factory_sym,null,(1),null)),(2),null))], null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,constructor_fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,fields,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,constructor_fn_sym,null,(1),null)),fields,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(fields,(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__72910__auto__","meta__72910__auto__",-478166921,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ext__72911__auto__","ext__72911__auto__",-351198093,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.records","->record-impl","sci.impl.records/->record-impl",-1005013370,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,rec_type,null,(1),null)),(new cljs.core.List(null,key_set,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fields,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ext__72911__auto__","ext__72911__auto__",-351198093,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",-822184067,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ext__72911__auto__","ext__72911__auto__",-351198093,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__72910__auto__","meta__72910__auto__",-478166921,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__72910__auto__","meta__72910__auto__",-478166921,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,fields,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,constructor_fn_sym,null,(1),null)),fields,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,map_factory_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"m__72912__auto__","m__72912__auto__",-973741899,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.records","->record-impl","sci.impl.records/->record-impl",-1005013370,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,rec_type,null,(1),null)),(new cljs.core.List(null,key_set,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",-822184067,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,nil_map,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m__72912__auto__","m__72912__auto__",-973741899,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),protocol_impls__$1,(new cljs.core.List(null,record_name,null,(1),null))], 0))));
}
}));

(sci.impl.records.defrecord.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.records.defrecord.cljs$lang$applyTo = (function (seq72913){
var G__72914 = cljs.core.first(seq72913);
var seq72913__$1 = cljs.core.next(seq72913);
var G__72915 = cljs.core.first(seq72913__$1);
var seq72913__$2 = cljs.core.next(seq72913__$1);
var G__72916 = cljs.core.first(seq72913__$2);
var seq72913__$3 = cljs.core.next(seq72913__$2);
var G__72917 = cljs.core.first(seq72913__$3);
var seq72913__$4 = cljs.core.next(seq72913__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72914,G__72915,G__72916,G__72917,seq72913__$4);
}));

/**
 * A record class is represented by a symbol with metadata (currently). This is only an implementation detail.
 * A protocol is represented by a map with :ns, :methods and optionally :class. This is also an implementation detail.
 */
sci.impl.records.resolve_record_or_protocol_class = (function sci$impl$records$resolve_record_or_protocol_class(var_args){
var G__73060 = arguments.length;
switch (G__73060) {
case 2:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym_str = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym));
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(sym_str,".");
var class_name = (cljs.core.truth_(last_dot)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(last_dot + (1)),((sym_str).length)):sym_str);
var namespace = (cljs.core.truth_(last_dot)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(0),last_dot)):sci.impl.utils.current_ns_name());
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,namespace,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name));
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3 = (function (ctx,package$,class$){
var namespace = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$)),"_","-"));
var temp__5825__auto__ = (function (){var ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespace], null));
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,class$);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(ns),class$);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var sci_var = temp__5825__auto__;
if(sci.impl.utils.var_QMARK_(sci_var)){
return cljs.core.deref(sci_var);
} else {
return sci_var;
}
} else {
return null;
}
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$lang$maxFixedArity = 3);

sci.impl.records.resolve_record_class = (function sci$impl$records$resolve_record_class(ctx,class_sym){
var temp__5825__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,class_sym);
if(cljs.core.truth_(temp__5825__auto__)){
var x = temp__5825__auto__;
if((x instanceof sci.lang.Type)){
return x;
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=sci.impl.records.js.map
