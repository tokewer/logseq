goog.provide('frontend.handler.property');
frontend.handler.property.remove_block_property_BANG_ = (function frontend$handler$property$remove_block_property_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___62847 = arguments.length;
var i__5877__auto___62848 = (0);
while(true){
if((i__5877__auto___62848 < len__5876__auto___62847)){
args__5882__auto__.push((arguments[i__5877__auto___62848]));

var G__62849 = (i__5877__auto___62848 + (1));
i__5877__auto___62848 = G__62849;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.property.remove_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.property.remove_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block_id,property_id_or_key,p__62823){
var vec__62824 = p__62823;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62824,(0),null);
if((!((property_id_or_key == null)))){
} else {
throw (new Error((""+"Assert failed: "+"remove-block-property! remove-block-property! is nil"+"\n"+"(some? property-id-or-key)")));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),property_id_or_key)){
return frontend.handler.db_based.property.batch_set_property_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),property_id_or_key,null,(function (){var or__5142__auto__ = opts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
} else {
return frontend.handler.db_based.property.remove_block_property_BANG_(block_id,property_id_or_key);
}
}));

(frontend.handler.property.remove_block_property_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.property.remove_block_property_BANG_.cljs$lang$applyTo = (function (seq62819){
var G__62820 = cljs.core.first(seq62819);
var seq62819__$1 = cljs.core.next(seq62819);
var G__62821 = cljs.core.first(seq62819__$1);
var seq62819__$2 = cljs.core.next(seq62819__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62820,G__62821,seq62819__$2);
}));

frontend.handler.property.set_block_property_BANG_ = (function frontend$handler$property$set_block_property_BANG_(block_id,key,v){
if((!((key == null)))){
} else {
throw (new Error((""+"Assert failed: "+"set-block-property! key is nil"+"\n"+"(some? key)")));
}

if((((v == null)) || (((cljs.core.coll_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))))){
return frontend.handler.property.remove_block_property_BANG_(block_id,key);
} else {
return frontend.handler.db_based.property.set_block_property_BANG_(block_id,key,v);
}
});
frontend.handler.property.batch_remove_block_property_BANG_ = (function frontend$handler$property$batch_remove_block_property_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___62850 = arguments.length;
var i__5877__auto___62851 = (0);
while(true){
if((i__5877__auto___62851 < len__5876__auto___62850)){
args__5882__auto__.push((arguments[i__5877__auto___62851]));

var G__62852 = (i__5877__auto___62851 + (1));
i__5877__auto___62851 = G__62852;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.property.batch_remove_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.property.batch_remove_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block_ids,key,p__62833){
var vec__62834 = p__62833;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62834,(0),null);
if((!((key == null)))){
} else {
throw (new Error((""+"Assert failed: "+"key is nil"+"\n"+"(some? key)")));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),key)){
return frontend.handler.db_based.property.batch_set_property_BANG_(block_ids,key,null,(function (){var or__5142__auto__ = opts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
} else {
return frontend.handler.db_based.property.batch_remove_property_BANG_(block_ids,key);
}
}));

(frontend.handler.property.batch_remove_block_property_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.property.batch_remove_block_property_BANG_.cljs$lang$applyTo = (function (seq62830){
var G__62831 = cljs.core.first(seq62830);
var seq62830__$1 = cljs.core.next(seq62830);
var G__62832 = cljs.core.first(seq62830__$1);
var seq62830__$2 = cljs.core.next(seq62830__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62831,G__62832,seq62830__$2);
}));

frontend.handler.property.batch_set_block_property_BANG_ = (function frontend$handler$property$batch_set_block_property_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___62853 = arguments.length;
var i__5877__auto___62854 = (0);
while(true){
if((i__5877__auto___62854 < len__5876__auto___62853)){
args__5882__auto__.push((arguments[i__5877__auto___62854]));

var G__62855 = (i__5877__auto___62854 + (1));
i__5877__auto___62854 = G__62855;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return frontend.handler.property.batch_set_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(frontend.handler.property.batch_set_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block_ids,key,value,p__62843){
var map__62844 = p__62843;
var map__62844__$1 = cljs.core.__destructure_map(map__62844);
var opts = map__62844__$1;
if((!((key == null)))){
} else {
throw (new Error((""+"Assert failed: "+"key is nil"+"\n"+"(some? key)")));
}

if((value == null)){
return frontend.handler.property.batch_remove_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_ids,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
} else {
return frontend.handler.db_based.property.batch_set_property_BANG_(block_ids,key,value,opts);
}
}));

(frontend.handler.property.batch_set_block_property_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(frontend.handler.property.batch_set_block_property_BANG_.cljs$lang$applyTo = (function (seq62838){
var G__62839 = cljs.core.first(seq62838);
var seq62838__$1 = cljs.core.next(seq62838);
var G__62840 = cljs.core.first(seq62838__$1);
var seq62838__$2 = cljs.core.next(seq62838__$1);
var G__62841 = cljs.core.first(seq62838__$2);
var seq62838__$3 = cljs.core.next(seq62838__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62839,G__62840,G__62841,seq62838__$3);
}));

frontend.handler.property.set_block_properties_BANG_ = (function frontend$handler$property$set_block_properties_BANG_(block_id,properties){
if(cljs.core.uuid_QMARK_(block_id)){
} else {
throw (new Error("Assert failed: (uuid? block-id)"));
}

return frontend.handler.db_based.property.set_block_properties_BANG_(block_id,properties);
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.property !== 'undefined') && (typeof frontend.handler.property.class_property_excludes !== 'undefined')){
} else {
frontend.handler.property.class_property_excludes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword("logseq.property.user","name","logseq.property.user/name",-1360026016),null,new cljs.core.Keyword("block","alias","block/alias",-2112644699),null,new cljs.core.Keyword("logseq.property.user","avatar","logseq.property.user/avatar",-416548858),null,new cljs.core.Keyword("logseq.property.class","enable-bidirectional?","logseq.property.class/enable-bidirectional?",-291786138),null,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),null,new cljs.core.Keyword("logseq.property","hide-empty-value","logseq.property/hide-empty-value",2062325899),null,new cljs.core.Keyword("logseq.property","publishing-public?","logseq.property/publishing-public?",-1094657939),null,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),null,new cljs.core.Keyword("logseq.property","enable-history?","logseq.property/enable-history?",-805859602),null,new cljs.core.Keyword("logseq.property","page-tags","logseq.property/page-tags",-2133531185),null,new cljs.core.Keyword("logseq.property.class","hide-from-node","logseq.property.class/hide-from-node",-26103727),null,new cljs.core.Keyword("logseq.property.user","email","logseq.property.user/email",-1655206063),null,new cljs.core.Keyword("block","tags","block/tags",1814948340),null,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),null,new cljs.core.Keyword("logseq.property.class","bidirectional-property-title","logseq.property.class/bidirectional-property-title",-605054187),null,new cljs.core.Keyword("logseq.property","exclude-from-graph-view","logseq.property/exclude-from-graph-view",-452433065),null,new cljs.core.Keyword("logseq.property","template-applied-to","logseq.property/template-applied-to",-429124322),null], null), null);
}
frontend.handler.property.get_class_property_choices = (function frontend$handler$property$get_class_property_choices(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_all_properties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-ui-non-suitable-properties?","remove-ui-non-suitable-properties?",603866281),true], 0))),(function (properties){
return promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (property){
return cljs.core.contains_QMARK_(frontend.handler.property.class_property_excludes,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
}),properties));
}));
}));
});

//# sourceMappingURL=frontend.handler.property.js.map
