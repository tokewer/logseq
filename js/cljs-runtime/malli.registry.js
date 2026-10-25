goog.provide('malli.registry');
/**
 * @define {string}
 * @type {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 * @type {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_42621 = (function (this$,type){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (malli.registry._schema[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5499__auto__.call(null,this$,type));
} else {
var m__5497__auto__ = (malli.registry._schema["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5497__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_42621(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_42624 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (malli.registry._schemas[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (malli.registry._schemas["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_42624(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry42446 = (function (m,fm,meta42447){
this.m = m;
this.fm = fm;
this.meta42447 = meta42447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry42446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42448,meta42447__$1){
var self__ = this;
var _42448__$1 = this;
return (new malli.registry.t_malli$registry42446(self__.m,self__.fm,meta42447__$1));
}));

(malli.registry.t_malli$registry42446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42448){
var self__ = this;
var _42448__$1 = this;
return self__.meta42447;
}));

(malli.registry.t_malli$registry42446.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry42446.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry42446.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry42446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta42447","meta42447",-633050123,null)], null);
}));

(malli.registry.t_malli$registry42446.cljs$lang$type = true);

(malli.registry.t_malli$registry42446.cljs$lang$ctorStr = "malli.registry/t_malli$registry42446");

(malli.registry.t_malli$registry42446.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"malli.registry/t_malli$registry42446");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry42446.
 */
malli.registry.__GT_t_malli$registry42446 = (function malli$registry$__GT_t_malli$registry42446(m,fm,meta42447){
return (new malli.registry.t_malli$registry42446(m,fm,meta42447));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry42446(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry42458 = (function (m,meta42459){
this.m = m;
this.meta42459 = meta42459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry42458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42465,meta42459__$1){
var self__ = this;
var _42465__$1 = this;
return (new malli.registry.t_malli$registry42458(self__.m,meta42459__$1));
}));

(malli.registry.t_malli$registry42458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42465){
var self__ = this;
var _42465__$1 = this;
return self__.meta42459;
}));

(malli.registry.t_malli$registry42458.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry42458.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry42458.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry42458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta42459","meta42459",-1391342902,null)], null);
}));

(malli.registry.t_malli$registry42458.cljs$lang$type = true);

(malli.registry.t_malli$registry42458.cljs$lang$ctorStr = "malli.registry/t_malli$registry42458");

(malli.registry.t_malli$registry42458.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"malli.registry/t_malli$registry42458");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry42458.
 */
malli.registry.__GT_t_malli$registry42458 = (function malli$registry$__GT_t_malli$registry42458(m,meta42459){
return (new malli.registry.t_malli$registry42458(m,meta42459));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry42458(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry42491 = (function (meta42492){
this.meta42492 = meta42492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry42491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42493,meta42492__$1){
var self__ = this;
var _42493__$1 = this;
return (new malli.registry.t_malli$registry42491(meta42492__$1));
}));

(malli.registry.t_malli$registry42491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42493){
var self__ = this;
var _42493__$1 = this;
return self__.meta42492;
}));

(malli.registry.t_malli$registry42491.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry42491.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry42491.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry42491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42492","meta42492",1113888642,null)], null);
}));

(malli.registry.t_malli$registry42491.cljs$lang$type = true);

(malli.registry.t_malli$registry42491.cljs$lang$ctorStr = "malli.registry/t_malli$registry42491");

(malli.registry.t_malli$registry42491.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"malli.registry/t_malli$registry42491");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry42491.
 */
malli.registry.__GT_t_malli$registry42491 = (function malli$registry$__GT_t_malli$registry42491(meta42492){
return (new malli.registry.t_malli$registry42491(meta42492));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry42491(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry42511 = (function (_QMARK_registries,registries,meta42512){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta42512 = meta42512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry42511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42513,meta42512__$1){
var self__ = this;
var _42513__$1 = this;
return (new malli.registry.t_malli$registry42511(self__._QMARK_registries,self__.registries,meta42512__$1));
}));

(malli.registry.t_malli$registry42511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42513){
var self__ = this;
var _42513__$1 = this;
return self__.meta42512;
}));

(malli.registry.t_malli$registry42511.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry42511.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__42504_SHARP_){
return malli.registry._schema(p1__42504_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry42511.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry42511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta42512","meta42512",1140299804,null)], null);
}));

(malli.registry.t_malli$registry42511.cljs$lang$type = true);

(malli.registry.t_malli$registry42511.cljs$lang$ctorStr = "malli.registry/t_malli$registry42511");

(malli.registry.t_malli$registry42511.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"malli.registry/t_malli$registry42511");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry42511.
 */
malli.registry.__GT_t_malli$registry42511 = (function malli$registry$__GT_t_malli$registry42511(_QMARK_registries,registries,meta42512){
return (new malli.registry.t_malli$registry42511(_QMARK_registries,registries,meta42512));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5882__auto__ = [];
var len__5876__auto___42655 = arguments.length;
var i__5877__auto___42656 = (0);
while(true){
if((i__5877__auto___42656 < len__5876__auto___42655)){
args__5882__auto__.push((arguments[i__5877__auto___42656]));

var G__42658 = (i__5877__auto___42656 + (1));
i__5877__auto___42656 = G__42658;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry42511(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq42505){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42505));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry42546 = (function (db,meta42547){
this.db = db;
this.meta42547 = meta42547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry42546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42548,meta42547__$1){
var self__ = this;
var _42548__$1 = this;
return (new malli.registry.t_malli$registry42546(self__.db,meta42547__$1));
}));

(malli.registry.t_malli$registry42546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42548){
var self__ = this;
var _42548__$1 = this;
return self__.meta42547;
}));

(malli.registry.t_malli$registry42546.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry42546.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry42546.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry42546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta42547","meta42547",857798151,null)], null);
}));

(malli.registry.t_malli$registry42546.cljs$lang$type = true);

(malli.registry.t_malli$registry42546.cljs$lang$ctorStr = "malli.registry/t_malli$registry42546");

(malli.registry.t_malli$registry42546.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"malli.registry/t_malli$registry42546");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry42546.
 */
malli.registry.__GT_t_malli$registry42546 = (function malli$registry$__GT_t_malli$registry42546(db,meta42547){
return (new malli.registry.t_malli$registry42546(db,meta42547));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry42546(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry42558 = (function (meta42559){
this.meta42559 = meta42559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry42558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42560,meta42559__$1){
var self__ = this;
var _42560__$1 = this;
return (new malli.registry.t_malli$registry42558(meta42559__$1));
}));

(malli.registry.t_malli$registry42558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42560){
var self__ = this;
var _42560__$1 = this;
return self__.meta42559;
}));

(malli.registry.t_malli$registry42558.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry42558.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry42558.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry42558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42559","meta42559",-2146769312,null)], null);
}));

(malli.registry.t_malli$registry42558.cljs$lang$type = true);

(malli.registry.t_malli$registry42558.cljs$lang$ctorStr = "malli.registry/t_malli$registry42558");

(malli.registry.t_malli$registry42558.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"malli.registry/t_malli$registry42558");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry42558.
 */
malli.registry.__GT_t_malli$registry42558 = (function malli$registry$__GT_t_malli$registry42558(meta42559){
return (new malli.registry.t_malli$registry42558(meta42559));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry42558(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry42578 = (function (meta42579){
this.meta42579 = meta42579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry42578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42580,meta42579__$1){
var self__ = this;
var _42580__$1 = this;
return (new malli.registry.t_malli$registry42578(meta42579__$1));
}));

(malli.registry.t_malli$registry42578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42580){
var self__ = this;
var _42580__$1 = this;
return self__.meta42579;
}));

(malli.registry.t_malli$registry42578.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry42578.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry42578.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry42578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42579","meta42579",172127052,null)], null);
}));

(malli.registry.t_malli$registry42578.cljs$lang$type = true);

(malli.registry.t_malli$registry42578.cljs$lang$ctorStr = "malli.registry/t_malli$registry42578");

(malli.registry.t_malli$registry42578.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"malli.registry/t_malli$registry42578");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry42578.
 */
malli.registry.__GT_t_malli$registry42578 = (function malli$registry$__GT_t_malli$registry42578(meta42579){
return (new malli.registry.t_malli$registry42578(meta42579));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry42578(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry42594 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta42595){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta42595 = meta42595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry42594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42596,meta42595__$1){
var self__ = this;
var _42596__$1 = this;
return (new malli.registry.t_malli$registry42594(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta42595__$1));
}));

(malli.registry.t_malli$registry42594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42596){
var self__ = this;
var _42596__$1 = this;
return self__.meta42595;
}));

(malli.registry.t_malli$registry42594.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry42594.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5142__auto__ = (function (){var fexpr__42604 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__42604.cljs$core$IFn$_invoke$arity$1 ? fexpr__42604.cljs$core$IFn$_invoke$arity$1(name) : fexpr__42604.call(null,name));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = (function (){var G__42606 = name;
var G__42607 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__42606,G__42607) : self__.provider.call(null,G__42606,G__42607));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var schema = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry42594.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry42594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta42595","meta42595",-1751599155,null)], null);
}));

(malli.registry.t_malli$registry42594.cljs$lang$type = true);

(malli.registry.t_malli$registry42594.cljs$lang$ctorStr = "malli.registry/t_malli$registry42594");

(malli.registry.t_malli$registry42594.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"malli.registry/t_malli$registry42594");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry42594.
 */
malli.registry.__GT_t_malli$registry42594 = (function malli$registry$__GT_t_malli$registry42594(default_registry,provider,cache_STAR_,registry_STAR_,meta42595){
return (new malli.registry.t_malli$registry42594(default_registry,provider,cache_STAR_,registry_STAR_,meta42595));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry42594(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
