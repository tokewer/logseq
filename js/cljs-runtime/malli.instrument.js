goog.provide('malli.instrument');
goog.scope(function(){
  malli.instrument.goog$module$goog$object = goog.module.get('goog.object');
});
malli.instrument._ns_js_path = (function malli$instrument$_ns_js_path(ns){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,clojure.string.split.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)),/\./)));
});
malli.instrument._prop_js_path = (function malli$instrument$_prop_js_path(ns,prop){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)),/\./),cljs.core.name(prop))));
});
malli.instrument._get_prop = (function malli$instrument$_get_prop(ns,prop){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._prop_js_path(ns,prop));
});
malli.instrument._get_ns = (function malli$instrument$_get_ns(ns){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._ns_js_path(ns));
});
malli.instrument._find_var = (function malli$instrument$_find_var(n,s){
return malli.instrument._get_prop(n,s);
});
malli.instrument._original = (function malli$instrument$_original(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$original");
});
malli.instrument._instrumented_QMARK_ = (function malli$instrument$_instrumented_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$instrumented?") === true;
});
malli.instrument.meta_fn = (function malli$instrument$meta_fn(f,m){
var new_f = goog.bind(f,({}));
Object.assign(new_f,f);

var x103055_103700 = new_f;
(x103055_103700.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x103055_103700.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return m;
}));


return new_f;
});
malli.instrument._filter_ns = (function malli$instrument$_filter_ns(var_args){
var args__5882__auto__ = [];
var len__5876__auto___103701 = arguments.length;
var i__5877__auto___103702 = (0);
while(true){
if((i__5877__auto___103702 < len__5876__auto___103701)){
args__5882__auto__.push((arguments[i__5877__auto___103702]));

var G__103703 = (i__5877__auto___103702 + (1));
i__5877__auto___103702 = G__103703;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic = (function (ns){
return (function (n,_,___$1){
var fexpr__103058 = cljs.core.set(ns);
return (fexpr__103058.cljs$core$IFn$_invoke$arity$1 ? fexpr__103058.cljs$core$IFn$_invoke$arity$1(n) : fexpr__103058.call(null,n));
});
}));

(malli.instrument._filter_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.instrument._filter_ns.cljs$lang$applyTo = (function (seq103057){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq103057));
}));

malli.instrument._filter_var = (function malli$instrument$_filter_var(f){
return (function (n,s,d){
var G__103059 = (new cljs.core.Var(cljs.core.constantly(malli.instrument._find_var(n,s)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s),d));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103059) : f.call(null,G__103059));
});
});
malli.instrument._filter_schema = (function malli$instrument$_filter_schema(f){
return (function (_,___$1,p__103063){
var map__103064 = p__103063;
var map__103064__$1 = cljs.core.__destructure_map(map__103064);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103064__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(schema) : f.call(null,schema));
});
});
malli.instrument._arity__GT_schema = (function malli$instrument$_arity__GT_schema(fn_schema){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(malli.core._function_info(malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema))),schema], null);
}),cljs.core.rest(fn_schema)));
});
malli.instrument._variadic_QMARK_ = (function malli$instrument$_variadic_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$core$IFn$_invoke$arity$variadic");
});
malli.instrument._max_fixed_arity = (function malli$instrument$_max_fixed_arity(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$lang$maxFixedArity");
});
malli.instrument._pure_variadic_QMARK_ = (function malli$instrument$_pure_variadic_QMARK_(f){
var max_fixed_arity = malli.instrument._max_fixed_arity(f);
var and__5140__auto__ = max_fixed_arity;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = malli.instrument._variadic_QMARK_(f);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.every_QMARK_((function (p1__103068_SHARP_){
return (!(cljs.core.fn_QMARK_(malli.instrument.goog$module$goog$object.get(f,(""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__103068_SHARP_))))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
malli.instrument._replace_variadic_fn = (function malli$instrument$_replace_variadic_fn(original_fn,n,s,opts){
var accessor = "cljs$core$IFn$_invoke$arity$variadic";
var arity_fn = malli.instrument.goog$module$goog$object.get(original_fn,accessor);
if(cljs.core.truth_(arity_fn)){
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

var max_fixed_arity = malli.instrument._max_fixed_arity(original_fn);
var instrumented_variadic_fn = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,(function() { 
var G__103706__delegate = function (args){
var vec__103070 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103070,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103070,(1),null);
var final_args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(rest_args)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(arity_fn,final_args);
};
var G__103706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__103707__i = 0, G__103707__a = new Array(arguments.length -  0);
while (G__103707__i < G__103707__a.length) {G__103707__a[G__103707__i] = arguments[G__103707__i + 0]; ++G__103707__i;}
  args = new cljs.core.IndexedSeq(G__103707__a,0,null);
} 
return G__103706__delegate.call(this,args);};
G__103706.cljs$lang$maxFixedArity = 0;
G__103706.cljs$lang$applyTo = (function (arglist__103708){
var args = cljs.core.seq(arglist__103708);
return G__103706__delegate(args);
});
G__103706.cljs$core$IFn$_invoke$arity$variadic = G__103706__delegate;
return G__103706;
})()
);
var instrumented_wrapper = (function() { 
var G__103709__delegate = function (args){
var vec__103075 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103075,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103075,(1),null);
var final_args = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list_STAR_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),cljs.core.not_empty(rest_args))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instrumented_variadic_fn,final_args);
};
var G__103709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__103711__i = 0, G__103711__a = new Array(arguments.length -  0);
while (G__103711__i < G__103711__a.length) {G__103711__a[G__103711__i] = arguments[G__103711__i + 0]; ++G__103711__i;}
  args = new cljs.core.IndexedSeq(G__103711__a,0,null);
} 
return G__103709__delegate.call(this,args);};
G__103709.cljs$lang$maxFixedArity = 0;
G__103709.cljs$lang$applyTo = (function (arglist__103712){
var args = cljs.core.seq(arglist__103712);
return G__103709__delegate(args);
});
G__103709.cljs$core$IFn$_invoke$arity$variadic = G__103709__delegate;
return G__103709;
})()
;
malli.instrument.goog$module$goog$object.set(instrumented_wrapper,"malli$instrument$original",arity_fn);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor,instrumented_wrapper);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));
} else {
return null;
}
});
malli.instrument._replace_multi_arity = (function malli$instrument$_replace_multi_arity(original_fn,n,s,opts){
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(opts);
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));

var seq__103085 = cljs.core.seq(malli.instrument._arity__GT_schema(schema));
var chunk__103086 = null;
var count__103087 = (0);
var i__103088 = (0);
while(true){
if((i__103088 < count__103087)){
var vec__103099 = chunk__103086.cljs$core$IIndexed$_nth$arity$2(null,i__103088);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103099,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103099,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_103716 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity));
var arity_fn_103717 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_103716);
if(cljs.core.truth_(arity_fn_103717)){
var instrumented_fn_103718 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_103717);
malli.instrument.goog$module$goog$object.set(instrumented_fn_103718,"malli$instrument$original",arity_fn_103717);

malli.instrument.goog$module$goog$object.set(instrumented_fn_103718,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_103716,instrumented_fn_103718);
} else {
}
}


var G__103719 = seq__103085;
var G__103720 = chunk__103086;
var G__103721 = count__103087;
var G__103722 = (i__103088 + (1));
seq__103085 = G__103719;
chunk__103086 = G__103720;
count__103087 = G__103721;
i__103088 = G__103722;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__103085);
if(temp__5825__auto__){
var seq__103085__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__103085__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__103085__$1);
var G__103723 = cljs.core.chunk_rest(seq__103085__$1);
var G__103724 = c__5673__auto__;
var G__103725 = cljs.core.count(c__5673__auto__);
var G__103726 = (0);
seq__103085 = G__103723;
chunk__103086 = G__103724;
count__103087 = G__103725;
i__103088 = G__103726;
continue;
} else {
var vec__103104 = cljs.core.first(seq__103085__$1);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103104,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103104,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_103727 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity));
var arity_fn_103728 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_103727);
if(cljs.core.truth_(arity_fn_103728)){
var instrumented_fn_103729 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_103728);
malli.instrument.goog$module$goog$object.set(instrumented_fn_103729,"malli$instrument$original",arity_fn_103728);

malli.instrument.goog$module$goog$object.set(instrumented_fn_103729,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_103727,instrumented_fn_103729);
} else {
}
}


var G__103730 = cljs.core.next(seq__103085__$1);
var G__103731 = null;
var G__103732 = (0);
var G__103733 = (0);
seq__103085 = G__103730;
chunk__103086 = G__103731;
count__103087 = G__103732;
i__103088 = G__103733;
continue;
}
} else {
return null;
}
}
break;
}
});
malli.instrument._replace_fn = (function malli$instrument$_replace_fn(original_fn,n,s,opts){
try{if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn))){
return malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn))){
return malli.instrument._replace_multi_arity(original_fn,n,s,opts);
} else {
var instrumented_fn = malli.instrument.meta_fn(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,original_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s))], null));
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$original",original_fn);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s)),instrumented_fn);

}
}
}catch (e103107){var e = e103107;
if((e instanceof cljs.core.ExceptionInfo)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Schema error when instrumenting function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))),cljs.core.ex_data(e));
} else {
throw (new Error((""+"Schema error when instrumenting function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))+". "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e))));
}
}});
malli.instrument._strument_BANG_ = (function malli$instrument$_strument_BANG_(var_args){
var G__103110 = arguments.length;
switch (G__103110) {
case 0:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__103112){
var map__103113 = p__103112;
var map__103113__$1 = cljs.core.__destructure_map(map__103113);
var options = map__103113__$1;
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103113__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103113__$1,new cljs.core.Keyword(null,"data","data",-232669377),malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cljs","cljs",1492417629)));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103113__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103113__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103113__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var skip_instrumented_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103113__$1,new cljs.core.Keyword(null,"skip-instrumented?","skip-instrumented?",1366613843),false);
var seq__103114 = cljs.core.seq(data);
var chunk__103119 = null;
var count__103120 = (0);
var i__103121 = (0);
while(true){
if((i__103121 < count__103120)){
var vec__103398 = chunk__103119.cljs$core$IIndexed$_nth$arity$2(null,i__103121);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103398,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103398,(1),null);
var seq__103122_103735 = cljs.core.seq(d);
var chunk__103123_103736 = null;
var count__103124_103737 = (0);
var i__103125_103738 = (0);
while(true){
if((i__103125_103738 < count__103124_103737)){
var vec__103466_103739 = chunk__103123_103736.cljs$core$IIndexed$_nth$arity$2(null,i__103125_103738);
var s_103740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103466_103739,(0),null);
var d_103741__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103466_103739,(1),null);
var temp__5825__auto___103742 = malli.instrument._find_var(n,s_103740);
if(cljs.core.truth_(temp__5825__auto___103742)){
var v_103743 = temp__5825__auto___103742;
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(filters);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.some(((function (seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,or__5142__auto__,v_103743,temp__5825__auto___103742,vec__103466_103739,s_103740,d_103741__$1,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__103108_SHARP_){
return (p1__103108_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__103108_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_103740,d_103741__$1) : p1__103108_SHARP_.call(null,n,s_103740,d_103741__$1));
});})(seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,or__5142__auto__,v_103743,temp__5825__auto___103742,vec__103466_103739,s_103740,d_103741__$1,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__103469_103744 = mode;
var G__103469_103745__$1 = (((G__103469_103744 instanceof cljs.core.Keyword))?G__103469_103744.fqn:null);
switch (G__103469_103745__$1) {
case "instrument":
var original_fn_103747 = (function (){var or__5142__auto__ = malli.instrument._original(v_103743);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return v_103743;
}
})();
var dgen_103748 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__103471 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__103471,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,G__103471,$,original_fn_103747,G__103469_103744,G__103469_103745__$1,v_103743,temp__5825__auto___103742,vec__103466_103739,s_103740,d_103741__$1,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,G__103471,$,original_fn_103747,G__103469_103744,G__103469_103745__$1,v_103743,temp__5825__auto___103742,vec__103466_103739,s_103740,d_103741__$1,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__103473 = t;
var G__103474 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_103740)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__103473,G__103474) : r.call(null,G__103473,G__103474));
});
;})(seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,G__103471,$,original_fn_103747,G__103469_103744,G__103469_103745__$1,v_103743,temp__5825__auto___103742,vec__103466_103739,s_103740,d_103741__$1,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,G__103471,$,original_fn_103747,G__103469_103744,G__103469_103745__$1,v_103743,temp__5825__auto___103742,vec__103466_103739,s_103740,d_103741__$1,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__103471;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_103741__$1], 0));
if(cljs.core.truth_((function (){var and__5140__auto__ = gen;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_103741__$1) === true;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_103741__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = original_fn_103747;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var and__5140__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_103743);
} else {
return and__5140__auto____$1;
}
})());
} else {
return and__5140__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_103747,n,s_103740,dgen_103748);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_103743)){
var original_fn_103752 = (function (){var or__5142__auto__ = malli.instrument._original(v_103743);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return v_103743;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_103752))){
var accessor_103753 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_103754 = malli.instrument.goog$module$goog$object.get(v_103743,accessor_103753);
var orig_variadic_fn_103755 = malli.instrument.goog$module$goog$object.get(variadic_fn_103754,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103752,accessor_103753,orig_variadic_fn_103755);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_103752))){
var seq__103478_103757 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__103481_103758 = null;
var count__103482_103759 = (0);
var i__103483_103760 = (0);
while(true){
if((i__103483_103760 < count__103482_103759)){
var arity_103762 = chunk__103481_103758.cljs$core$IIndexed$_nth$arity$2(null,i__103483_103760);
var accessor_103763 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_103762));
var arity_fn_103764 = malli.instrument.goog$module$goog$object.get(original_fn_103752,accessor_103763);
if(cljs.core.truth_(arity_fn_103764)){
var orig_103765 = malli.instrument.goog$module$goog$object.get(arity_fn_103764,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103752,accessor_103763,orig_103765);


var G__103767 = seq__103478_103757;
var G__103768 = chunk__103481_103758;
var G__103769 = count__103482_103759;
var G__103770 = (i__103483_103760 + (1));
seq__103478_103757 = G__103767;
chunk__103481_103758 = G__103768;
count__103482_103759 = G__103769;
i__103483_103760 = G__103770;
continue;
} else {
var G__103771 = seq__103478_103757;
var G__103772 = chunk__103481_103758;
var G__103773 = count__103482_103759;
var G__103774 = (i__103483_103760 + (1));
seq__103478_103757 = G__103771;
chunk__103481_103758 = G__103772;
count__103482_103759 = G__103773;
i__103483_103760 = G__103774;
continue;
}
} else {
var temp__5825__auto___103775__$1 = cljs.core.seq(seq__103478_103757);
if(temp__5825__auto___103775__$1){
var seq__103478_103776__$1 = temp__5825__auto___103775__$1;
if(cljs.core.chunked_seq_QMARK_(seq__103478_103776__$1)){
var c__5673__auto___103777 = cljs.core.chunk_first(seq__103478_103776__$1);
var G__103778 = cljs.core.chunk_rest(seq__103478_103776__$1);
var G__103779 = c__5673__auto___103777;
var G__103780 = cljs.core.count(c__5673__auto___103777);
var G__103781 = (0);
seq__103478_103757 = G__103778;
chunk__103481_103758 = G__103779;
count__103482_103759 = G__103780;
i__103483_103760 = G__103781;
continue;
} else {
var arity_103782 = cljs.core.first(seq__103478_103776__$1);
var accessor_103783 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_103782));
var arity_fn_103784 = malli.instrument.goog$module$goog$object.get(original_fn_103752,accessor_103783);
if(cljs.core.truth_(arity_fn_103784)){
var orig_103785 = malli.instrument.goog$module$goog$object.get(arity_fn_103784,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103752,accessor_103783,orig_103785);


var G__103786 = cljs.core.next(seq__103478_103776__$1);
var G__103787 = null;
var G__103788 = (0);
var G__103789 = (0);
seq__103478_103757 = G__103786;
chunk__103481_103758 = G__103787;
count__103482_103759 = G__103788;
i__103483_103760 = G__103789;
continue;
} else {
var G__103790 = cljs.core.next(seq__103478_103776__$1);
var G__103791 = null;
var G__103792 = (0);
var G__103793 = (0);
seq__103478_103757 = G__103790;
chunk__103481_103758 = G__103791;
count__103482_103759 = G__103792;
i__103483_103760 = G__103793;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_103740)),original_fn_103752);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_103743,d_103741__$1) : mode.call(null,v_103743,d_103741__$1));

}
} else {
}
} else {
}


var G__103794 = seq__103122_103735;
var G__103795 = chunk__103123_103736;
var G__103796 = count__103124_103737;
var G__103797 = (i__103125_103738 + (1));
seq__103122_103735 = G__103794;
chunk__103123_103736 = G__103795;
count__103124_103737 = G__103796;
i__103125_103738 = G__103797;
continue;
} else {
var temp__5825__auto___103798 = cljs.core.seq(seq__103122_103735);
if(temp__5825__auto___103798){
var seq__103122_103799__$1 = temp__5825__auto___103798;
if(cljs.core.chunked_seq_QMARK_(seq__103122_103799__$1)){
var c__5673__auto___103800 = cljs.core.chunk_first(seq__103122_103799__$1);
var G__103801 = cljs.core.chunk_rest(seq__103122_103799__$1);
var G__103802 = c__5673__auto___103800;
var G__103803 = cljs.core.count(c__5673__auto___103800);
var G__103804 = (0);
seq__103122_103735 = G__103801;
chunk__103123_103736 = G__103802;
count__103124_103737 = G__103803;
i__103125_103738 = G__103804;
continue;
} else {
var vec__103513_103805 = cljs.core.first(seq__103122_103799__$1);
var s_103806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103513_103805,(0),null);
var d_103807__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103513_103805,(1),null);
var temp__5825__auto___103808__$1 = malli.instrument._find_var(n,s_103806);
if(cljs.core.truth_(temp__5825__auto___103808__$1)){
var v_103809 = temp__5825__auto___103808__$1;
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(filters);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.some(((function (seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,or__5142__auto__,v_103809,temp__5825__auto___103808__$1,vec__103513_103805,s_103806,d_103807__$1,seq__103122_103799__$1,temp__5825__auto___103798,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__103108_SHARP_){
return (p1__103108_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__103108_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_103806,d_103807__$1) : p1__103108_SHARP_.call(null,n,s_103806,d_103807__$1));
});})(seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,or__5142__auto__,v_103809,temp__5825__auto___103808__$1,vec__103513_103805,s_103806,d_103807__$1,seq__103122_103799__$1,temp__5825__auto___103798,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__103517_103811 = mode;
var G__103517_103812__$1 = (((G__103517_103811 instanceof cljs.core.Keyword))?G__103517_103811.fqn:null);
switch (G__103517_103812__$1) {
case "instrument":
var original_fn_103816 = (function (){var or__5142__auto__ = malli.instrument._original(v_103809);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return v_103809;
}
})();
var dgen_103817 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__103518 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__103518,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,G__103518,$,original_fn_103816,G__103517_103811,G__103517_103812__$1,v_103809,temp__5825__auto___103808__$1,vec__103513_103805,s_103806,d_103807__$1,seq__103122_103799__$1,temp__5825__auto___103798,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,G__103518,$,original_fn_103816,G__103517_103811,G__103517_103812__$1,v_103809,temp__5825__auto___103808__$1,vec__103513_103805,s_103806,d_103807__$1,seq__103122_103799__$1,temp__5825__auto___103798,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__103521 = t;
var G__103522 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_103806)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__103521,G__103522) : r.call(null,G__103521,G__103522));
});
;})(seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,G__103518,$,original_fn_103816,G__103517_103811,G__103517_103812__$1,v_103809,temp__5825__auto___103808__$1,vec__103513_103805,s_103806,d_103807__$1,seq__103122_103799__$1,temp__5825__auto___103798,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__103122_103735,chunk__103123_103736,count__103124_103737,i__103125_103738,seq__103114,chunk__103119,count__103120,i__103121,G__103518,$,original_fn_103816,G__103517_103811,G__103517_103812__$1,v_103809,temp__5825__auto___103808__$1,vec__103513_103805,s_103806,d_103807__$1,seq__103122_103799__$1,temp__5825__auto___103798,vec__103398,n,d,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__103518;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_103807__$1], 0));
if(cljs.core.truth_((function (){var and__5140__auto__ = gen;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_103807__$1) === true;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_103807__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = original_fn_103816;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var and__5140__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_103809);
} else {
return and__5140__auto____$1;
}
})());
} else {
return and__5140__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_103816,n,s_103806,dgen_103817);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_103809)){
var original_fn_103820 = (function (){var or__5142__auto__ = malli.instrument._original(v_103809);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return v_103809;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_103820))){
var accessor_103821 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_103822 = malli.instrument.goog$module$goog$object.get(v_103809,accessor_103821);
var orig_variadic_fn_103823 = malli.instrument.goog$module$goog$object.get(variadic_fn_103822,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103820,accessor_103821,orig_variadic_fn_103823);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_103820))){
var seq__103530_103824 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__103533_103825 = null;
var count__103534_103826 = (0);
var i__103535_103827 = (0);
while(true){
if((i__103535_103827 < count__103534_103826)){
var arity_103828 = chunk__103533_103825.cljs$core$IIndexed$_nth$arity$2(null,i__103535_103827);
var accessor_103829 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_103828));
var arity_fn_103830 = malli.instrument.goog$module$goog$object.get(original_fn_103820,accessor_103829);
if(cljs.core.truth_(arity_fn_103830)){
var orig_103831 = malli.instrument.goog$module$goog$object.get(arity_fn_103830,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103820,accessor_103829,orig_103831);


var G__103832 = seq__103530_103824;
var G__103833 = chunk__103533_103825;
var G__103834 = count__103534_103826;
var G__103835 = (i__103535_103827 + (1));
seq__103530_103824 = G__103832;
chunk__103533_103825 = G__103833;
count__103534_103826 = G__103834;
i__103535_103827 = G__103835;
continue;
} else {
var G__103836 = seq__103530_103824;
var G__103837 = chunk__103533_103825;
var G__103838 = count__103534_103826;
var G__103839 = (i__103535_103827 + (1));
seq__103530_103824 = G__103836;
chunk__103533_103825 = G__103837;
count__103534_103826 = G__103838;
i__103535_103827 = G__103839;
continue;
}
} else {
var temp__5825__auto___103840__$2 = cljs.core.seq(seq__103530_103824);
if(temp__5825__auto___103840__$2){
var seq__103530_103841__$1 = temp__5825__auto___103840__$2;
if(cljs.core.chunked_seq_QMARK_(seq__103530_103841__$1)){
var c__5673__auto___103842 = cljs.core.chunk_first(seq__103530_103841__$1);
var G__103843 = cljs.core.chunk_rest(seq__103530_103841__$1);
var G__103844 = c__5673__auto___103842;
var G__103845 = cljs.core.count(c__5673__auto___103842);
var G__103846 = (0);
seq__103530_103824 = G__103843;
chunk__103533_103825 = G__103844;
count__103534_103826 = G__103845;
i__103535_103827 = G__103846;
continue;
} else {
var arity_103848 = cljs.core.first(seq__103530_103841__$1);
var accessor_103849 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_103848));
var arity_fn_103850 = malli.instrument.goog$module$goog$object.get(original_fn_103820,accessor_103849);
if(cljs.core.truth_(arity_fn_103850)){
var orig_103851 = malli.instrument.goog$module$goog$object.get(arity_fn_103850,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103820,accessor_103849,orig_103851);


var G__103852 = cljs.core.next(seq__103530_103841__$1);
var G__103853 = null;
var G__103854 = (0);
var G__103855 = (0);
seq__103530_103824 = G__103852;
chunk__103533_103825 = G__103853;
count__103534_103826 = G__103854;
i__103535_103827 = G__103855;
continue;
} else {
var G__103856 = cljs.core.next(seq__103530_103841__$1);
var G__103857 = null;
var G__103858 = (0);
var G__103859 = (0);
seq__103530_103824 = G__103856;
chunk__103533_103825 = G__103857;
count__103534_103826 = G__103858;
i__103535_103827 = G__103859;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_103806)),original_fn_103820);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_103809,d_103807__$1) : mode.call(null,v_103809,d_103807__$1));

}
} else {
}
} else {
}


var G__103860 = cljs.core.next(seq__103122_103799__$1);
var G__103861 = null;
var G__103862 = (0);
var G__103863 = (0);
seq__103122_103735 = G__103860;
chunk__103123_103736 = G__103861;
count__103124_103737 = G__103862;
i__103125_103738 = G__103863;
continue;
}
} else {
}
}
break;
}

var G__103864 = seq__103114;
var G__103865 = chunk__103119;
var G__103866 = count__103120;
var G__103867 = (i__103121 + (1));
seq__103114 = G__103864;
chunk__103119 = G__103865;
count__103120 = G__103866;
i__103121 = G__103867;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__103114);
if(temp__5825__auto__){
var seq__103114__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__103114__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__103114__$1);
var G__103868 = cljs.core.chunk_rest(seq__103114__$1);
var G__103869 = c__5673__auto__;
var G__103870 = cljs.core.count(c__5673__auto__);
var G__103871 = (0);
seq__103114 = G__103868;
chunk__103119 = G__103869;
count__103120 = G__103870;
i__103121 = G__103871;
continue;
} else {
var vec__103542 = cljs.core.first(seq__103114__$1);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103542,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103542,(1),null);
var seq__103115_103873 = cljs.core.seq(d);
var chunk__103116_103874 = null;
var count__103117_103875 = (0);
var i__103118_103876 = (0);
while(true){
if((i__103118_103876 < count__103117_103875)){
var vec__103603_103877 = chunk__103116_103874.cljs$core$IIndexed$_nth$arity$2(null,i__103118_103876);
var s_103878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103603_103877,(0),null);
var d_103879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103603_103877,(1),null);
var temp__5825__auto___103882__$1 = malli.instrument._find_var(n,s_103878);
if(cljs.core.truth_(temp__5825__auto___103882__$1)){
var v_103883 = temp__5825__auto___103882__$1;
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(filters);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.some(((function (seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,or__5142__auto__,v_103883,temp__5825__auto___103882__$1,vec__103603_103877,s_103878,d_103879__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__103108_SHARP_){
return (p1__103108_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__103108_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_103878,d_103879__$1) : p1__103108_SHARP_.call(null,n,s_103878,d_103879__$1));
});})(seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,or__5142__auto__,v_103883,temp__5825__auto___103882__$1,vec__103603_103877,s_103878,d_103879__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__103606_103885 = mode;
var G__103606_103886__$1 = (((G__103606_103885 instanceof cljs.core.Keyword))?G__103606_103885.fqn:null);
switch (G__103606_103886__$1) {
case "instrument":
var original_fn_103888 = (function (){var or__5142__auto__ = malli.instrument._original(v_103883);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return v_103883;
}
})();
var dgen_103889 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__103610 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__103610,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,G__103610,$,original_fn_103888,G__103606_103885,G__103606_103886__$1,v_103883,temp__5825__auto___103882__$1,vec__103603_103877,s_103878,d_103879__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,G__103610,$,original_fn_103888,G__103606_103885,G__103606_103886__$1,v_103883,temp__5825__auto___103882__$1,vec__103603_103877,s_103878,d_103879__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__103611 = t;
var G__103612 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_103878)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__103611,G__103612) : r.call(null,G__103611,G__103612));
});
;})(seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,G__103610,$,original_fn_103888,G__103606_103885,G__103606_103886__$1,v_103883,temp__5825__auto___103882__$1,vec__103603_103877,s_103878,d_103879__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,G__103610,$,original_fn_103888,G__103606_103885,G__103606_103886__$1,v_103883,temp__5825__auto___103882__$1,vec__103603_103877,s_103878,d_103879__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__103610;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_103879__$1], 0));
if(cljs.core.truth_((function (){var and__5140__auto__ = gen;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_103879__$1) === true;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_103879__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = original_fn_103888;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var and__5140__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_103883);
} else {
return and__5140__auto____$1;
}
})());
} else {
return and__5140__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_103888,n,s_103878,dgen_103889);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_103883)){
var original_fn_103892 = (function (){var or__5142__auto__ = malli.instrument._original(v_103883);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return v_103883;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_103892))){
var accessor_103893 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_103894 = malli.instrument.goog$module$goog$object.get(v_103883,accessor_103893);
var orig_variadic_fn_103895 = malli.instrument.goog$module$goog$object.get(variadic_fn_103894,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103892,accessor_103893,orig_variadic_fn_103895);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_103892))){
var seq__103617_103896 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__103620_103898 = null;
var count__103621_103899 = (0);
var i__103622_103900 = (0);
while(true){
if((i__103622_103900 < count__103621_103899)){
var arity_103901 = chunk__103620_103898.cljs$core$IIndexed$_nth$arity$2(null,i__103622_103900);
var accessor_103902 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_103901));
var arity_fn_103903 = malli.instrument.goog$module$goog$object.get(original_fn_103892,accessor_103902);
if(cljs.core.truth_(arity_fn_103903)){
var orig_103904 = malli.instrument.goog$module$goog$object.get(arity_fn_103903,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103892,accessor_103902,orig_103904);


var G__103905 = seq__103617_103896;
var G__103906 = chunk__103620_103898;
var G__103907 = count__103621_103899;
var G__103908 = (i__103622_103900 + (1));
seq__103617_103896 = G__103905;
chunk__103620_103898 = G__103906;
count__103621_103899 = G__103907;
i__103622_103900 = G__103908;
continue;
} else {
var G__103909 = seq__103617_103896;
var G__103910 = chunk__103620_103898;
var G__103911 = count__103621_103899;
var G__103912 = (i__103622_103900 + (1));
seq__103617_103896 = G__103909;
chunk__103620_103898 = G__103910;
count__103621_103899 = G__103911;
i__103622_103900 = G__103912;
continue;
}
} else {
var temp__5825__auto___103913__$2 = cljs.core.seq(seq__103617_103896);
if(temp__5825__auto___103913__$2){
var seq__103617_103914__$1 = temp__5825__auto___103913__$2;
if(cljs.core.chunked_seq_QMARK_(seq__103617_103914__$1)){
var c__5673__auto___103915 = cljs.core.chunk_first(seq__103617_103914__$1);
var G__103916 = cljs.core.chunk_rest(seq__103617_103914__$1);
var G__103917 = c__5673__auto___103915;
var G__103918 = cljs.core.count(c__5673__auto___103915);
var G__103919 = (0);
seq__103617_103896 = G__103916;
chunk__103620_103898 = G__103917;
count__103621_103899 = G__103918;
i__103622_103900 = G__103919;
continue;
} else {
var arity_103921 = cljs.core.first(seq__103617_103914__$1);
var accessor_103922 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_103921));
var arity_fn_103923 = malli.instrument.goog$module$goog$object.get(original_fn_103892,accessor_103922);
if(cljs.core.truth_(arity_fn_103923)){
var orig_103924 = malli.instrument.goog$module$goog$object.get(arity_fn_103923,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103892,accessor_103922,orig_103924);


var G__103925 = cljs.core.next(seq__103617_103914__$1);
var G__103926 = null;
var G__103927 = (0);
var G__103928 = (0);
seq__103617_103896 = G__103925;
chunk__103620_103898 = G__103926;
count__103621_103899 = G__103927;
i__103622_103900 = G__103928;
continue;
} else {
var G__103929 = cljs.core.next(seq__103617_103914__$1);
var G__103930 = null;
var G__103931 = (0);
var G__103932 = (0);
seq__103617_103896 = G__103929;
chunk__103620_103898 = G__103930;
count__103621_103899 = G__103931;
i__103622_103900 = G__103932;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_103878)),original_fn_103892);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_103883,d_103879__$1) : mode.call(null,v_103883,d_103879__$1));

}
} else {
}
} else {
}


var G__103933 = seq__103115_103873;
var G__103934 = chunk__103116_103874;
var G__103935 = count__103117_103875;
var G__103936 = (i__103118_103876 + (1));
seq__103115_103873 = G__103933;
chunk__103116_103874 = G__103934;
count__103117_103875 = G__103935;
i__103118_103876 = G__103936;
continue;
} else {
var temp__5825__auto___103937__$1 = cljs.core.seq(seq__103115_103873);
if(temp__5825__auto___103937__$1){
var seq__103115_103938__$1 = temp__5825__auto___103937__$1;
if(cljs.core.chunked_seq_QMARK_(seq__103115_103938__$1)){
var c__5673__auto___103939 = cljs.core.chunk_first(seq__103115_103938__$1);
var G__103940 = cljs.core.chunk_rest(seq__103115_103938__$1);
var G__103941 = c__5673__auto___103939;
var G__103942 = cljs.core.count(c__5673__auto___103939);
var G__103943 = (0);
seq__103115_103873 = G__103940;
chunk__103116_103874 = G__103941;
count__103117_103875 = G__103942;
i__103118_103876 = G__103943;
continue;
} else {
var vec__103628_103944 = cljs.core.first(seq__103115_103938__$1);
var s_103945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103628_103944,(0),null);
var d_103946__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103628_103944,(1),null);
var temp__5825__auto___103947__$2 = malli.instrument._find_var(n,s_103945);
if(cljs.core.truth_(temp__5825__auto___103947__$2)){
var v_103948 = temp__5825__auto___103947__$2;
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(filters);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.some(((function (seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,or__5142__auto__,v_103948,temp__5825__auto___103947__$2,vec__103628_103944,s_103945,d_103946__$1,seq__103115_103938__$1,temp__5825__auto___103937__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__103108_SHARP_){
return (p1__103108_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__103108_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_103945,d_103946__$1) : p1__103108_SHARP_.call(null,n,s_103945,d_103946__$1));
});})(seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,or__5142__auto__,v_103948,temp__5825__auto___103947__$2,vec__103628_103944,s_103945,d_103946__$1,seq__103115_103938__$1,temp__5825__auto___103937__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__103637_103949 = mode;
var G__103637_103950__$1 = (((G__103637_103949 instanceof cljs.core.Keyword))?G__103637_103949.fqn:null);
switch (G__103637_103950__$1) {
case "instrument":
var original_fn_103952 = (function (){var or__5142__auto__ = malli.instrument._original(v_103948);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return v_103948;
}
})();
var dgen_103953 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__103641 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__103641,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,G__103641,$,original_fn_103952,G__103637_103949,G__103637_103950__$1,v_103948,temp__5825__auto___103947__$2,vec__103628_103944,s_103945,d_103946__$1,seq__103115_103938__$1,temp__5825__auto___103937__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,G__103641,$,original_fn_103952,G__103637_103949,G__103637_103950__$1,v_103948,temp__5825__auto___103947__$2,vec__103628_103944,s_103945,d_103946__$1,seq__103115_103938__$1,temp__5825__auto___103937__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__103646 = t;
var G__103647 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_103945)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__103646,G__103647) : r.call(null,G__103646,G__103647));
});
;})(seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,G__103641,$,original_fn_103952,G__103637_103949,G__103637_103950__$1,v_103948,temp__5825__auto___103947__$2,vec__103628_103944,s_103945,d_103946__$1,seq__103115_103938__$1,temp__5825__auto___103937__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__103115_103873,chunk__103116_103874,count__103117_103875,i__103118_103876,seq__103114,chunk__103119,count__103120,i__103121,G__103641,$,original_fn_103952,G__103637_103949,G__103637_103950__$1,v_103948,temp__5825__auto___103947__$2,vec__103628_103944,s_103945,d_103946__$1,seq__103115_103938__$1,temp__5825__auto___103937__$1,vec__103542,n,d,seq__103114__$1,temp__5825__auto__,map__103113,map__103113__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__103641;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_103946__$1], 0));
if(cljs.core.truth_((function (){var and__5140__auto__ = gen;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_103946__$1) === true;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_103946__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = original_fn_103952;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var and__5140__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_103948);
} else {
return and__5140__auto____$1;
}
})());
} else {
return and__5140__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_103952,n,s_103945,dgen_103953);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_103948)){
var original_fn_103957 = (function (){var or__5142__auto__ = malli.instrument._original(v_103948);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return v_103948;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_103957))){
var accessor_103960 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_103961 = malli.instrument.goog$module$goog$object.get(v_103948,accessor_103960);
var orig_variadic_fn_103962 = malli.instrument.goog$module$goog$object.get(variadic_fn_103961,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103957,accessor_103960,orig_variadic_fn_103962);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_103957))){
var seq__103658_103963 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__103661_103964 = null;
var count__103662_103965 = (0);
var i__103663_103966 = (0);
while(true){
if((i__103663_103966 < count__103662_103965)){
var arity_103967 = chunk__103661_103964.cljs$core$IIndexed$_nth$arity$2(null,i__103663_103966);
var accessor_103968 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_103967));
var arity_fn_103969 = malli.instrument.goog$module$goog$object.get(original_fn_103957,accessor_103968);
if(cljs.core.truth_(arity_fn_103969)){
var orig_103970 = malli.instrument.goog$module$goog$object.get(arity_fn_103969,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103957,accessor_103968,orig_103970);


var G__103971 = seq__103658_103963;
var G__103972 = chunk__103661_103964;
var G__103973 = count__103662_103965;
var G__103974 = (i__103663_103966 + (1));
seq__103658_103963 = G__103971;
chunk__103661_103964 = G__103972;
count__103662_103965 = G__103973;
i__103663_103966 = G__103974;
continue;
} else {
var G__103975 = seq__103658_103963;
var G__103976 = chunk__103661_103964;
var G__103977 = count__103662_103965;
var G__103978 = (i__103663_103966 + (1));
seq__103658_103963 = G__103975;
chunk__103661_103964 = G__103976;
count__103662_103965 = G__103977;
i__103663_103966 = G__103978;
continue;
}
} else {
var temp__5825__auto___103979__$3 = cljs.core.seq(seq__103658_103963);
if(temp__5825__auto___103979__$3){
var seq__103658_103981__$1 = temp__5825__auto___103979__$3;
if(cljs.core.chunked_seq_QMARK_(seq__103658_103981__$1)){
var c__5673__auto___103982 = cljs.core.chunk_first(seq__103658_103981__$1);
var G__103983 = cljs.core.chunk_rest(seq__103658_103981__$1);
var G__103984 = c__5673__auto___103982;
var G__103985 = cljs.core.count(c__5673__auto___103982);
var G__103986 = (0);
seq__103658_103963 = G__103983;
chunk__103661_103964 = G__103984;
count__103662_103965 = G__103985;
i__103663_103966 = G__103986;
continue;
} else {
var arity_103987 = cljs.core.first(seq__103658_103981__$1);
var accessor_103988 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_103987));
var arity_fn_103989 = malli.instrument.goog$module$goog$object.get(original_fn_103957,accessor_103988);
if(cljs.core.truth_(arity_fn_103989)){
var orig_103990 = malli.instrument.goog$module$goog$object.get(arity_fn_103989,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_103957,accessor_103988,orig_103990);


var G__103991 = cljs.core.next(seq__103658_103981__$1);
var G__103992 = null;
var G__103993 = (0);
var G__103994 = (0);
seq__103658_103963 = G__103991;
chunk__103661_103964 = G__103992;
count__103662_103965 = G__103993;
i__103663_103966 = G__103994;
continue;
} else {
var G__103995 = cljs.core.next(seq__103658_103981__$1);
var G__103996 = null;
var G__103997 = (0);
var G__103998 = (0);
seq__103658_103963 = G__103995;
chunk__103661_103964 = G__103996;
count__103662_103965 = G__103997;
i__103663_103966 = G__103998;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_103945)),original_fn_103957);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_103948,d_103946__$1) : mode.call(null,v_103948,d_103946__$1));

}
} else {
}
} else {
}


var G__104000 = cljs.core.next(seq__103115_103938__$1);
var G__104001 = null;
var G__104002 = (0);
var G__104003 = (0);
seq__103115_103873 = G__104000;
chunk__103116_103874 = G__104001;
count__103117_103875 = G__104002;
i__103118_103876 = G__104003;
continue;
}
} else {
}
}
break;
}

var G__104004 = cljs.core.next(seq__103114__$1);
var G__104005 = null;
var G__104006 = (0);
var G__104007 = (0);
seq__103114 = G__104004;
chunk__103119 = G__104005;
count__103120 = G__104006;
i__103121 = G__104007;
continue;
}
} else {
return null;
}
}
break;
}
}));

(malli.instrument._strument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Checks all registered function schemas using generative testing.
 * Returns nil or a map of symbol -> explanation in case of errors.
 */
malli.instrument.check = (function malli$instrument$check(var_args){
var G__103675 = arguments.length;
switch (G__103675) {
case 0:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument.check.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.check.cljs$core$IFn$_invoke$arity$1 = (function (options){
var res_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),(function (v,p__103677){
var map__103678 = p__103677;
var map__103678__$1 = cljs.core.__destructure_map(map__103678);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103678__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103678__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103678__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var G__103679 = malli.generator.check.cljs$core$IFn$_invoke$arity$2(schema,malli.instrument._original(v));
if((G__103679 == null)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res_STAR_,cljs.core.assoc,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name),G__103679);
}
})));

return cljs.core.not_empty(cljs.core.deref(res_STAR_));
}));

(malli.instrument.check.cljs$lang$maxFixedArity = 1);

/**
 * Applies instrumentation for a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.instrument_BANG_ = (function malli$instrument$instrument_BANG_(var_args){
var G__103683 = arguments.length;
switch (G__103683) {
case 0:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844)));
}));

(malli.instrument.instrument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Removes instrumentation from a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.unstrument_BANG_ = (function malli$instrument$unstrument_BANG_(var_args){
var G__103694 = arguments.length;
switch (G__103694) {
case 0:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"unstrument","unstrument",-312041116)));
}));

(malli.instrument.unstrument_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=malli.instrument.js.map
