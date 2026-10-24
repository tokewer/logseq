goog.provide('frontend.handler.db_based.property');
frontend.handler.db_based.property._LT_block_uuid = (function frontend$handler$db_based$property$_LT_block_uuid(block_id){
if(cljs.core.integer_QMARK_(block_id)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
}));
}));
} else {
return promesa.core.resolved(block_id);
}
});
frontend.handler.db_based.property._LT_property_ident = (function frontend$handler$db_based$property$_LT_property_ident(property_id){
if(cljs.core.integer_QMARK_(property_id)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),property_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (property){
return promesa.protocols._promise(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
}));
}));
} else {
return promesa.core.resolved(property_id);
}
});
frontend.handler.db_based.property._LT_block_uuids = (function frontend$handler$db_based$property$_LT_block_uuids(block_ids){
return promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.property._LT_block_uuid,block_ids));
});
frontend.handler.db_based.property.upsert_property_BANG_ = (function frontend$handler$db_based$property$upsert_property_BANG_(property_id,schema,property_opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.upsert_property_BANG_(property_id__$1,schema,property_opts);
} else {
var _STAR_outliner_ops_STAR__orig_val__61322 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61323 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61323);

try{frontend.modules.outliner.op.upsert_property_BANG_(property_id__$1,schema,property_opts);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"upsert-property","upsert-property",1682220994)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61322);
}}
})());
}));
}));
});
frontend.handler.db_based.property.set_block_property_BANG_ = (function frontend$handler$db_based$property$set_block_property_BANG_(block_id,property_id,value){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuid(block_id)),(function (block_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.set_block_property_BANG_(block_id__$1,property_id__$1,value);
} else {
var _STAR_outliner_ops_STAR__orig_val__61324 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61325 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61325);

try{frontend.modules.outliner.op.set_block_property_BANG_(block_id__$1,property_id__$1,value);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"set-block-property","set-block-property",-301154301)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61324);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.set_block_properties_BANG_ = (function frontend$handler$db_based$property$set_block_properties_BANG_(block_id,properties){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuid(block_id)),(function (block_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61326){
var vec__61327 = p__61326;
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61327,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61327,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_id__$1,value], null));
}));
}));
}),properties))),(function (properties__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
var seq__61330 = cljs.core.seq(properties__$1);
var chunk__61331 = null;
var count__61332 = (0);
var i__61333 = (0);
while(true){
if((i__61333 < count__61332)){
var vec__61340 = chunk__61331.cljs$core$IIndexed$_nth$arity$2(null,i__61333);
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61340,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61340,(1),null);
frontend.modules.outliner.op.set_block_property_BANG_(block_id__$1,property_id,value);


var G__61386 = seq__61330;
var G__61387 = chunk__61331;
var G__61388 = count__61332;
var G__61389 = (i__61333 + (1));
seq__61330 = G__61386;
chunk__61331 = G__61387;
count__61332 = G__61388;
i__61333 = G__61389;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61330);
if(temp__5825__auto__){
var seq__61330__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61330__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__61330__$1);
var G__61390 = cljs.core.chunk_rest(seq__61330__$1);
var G__61391 = c__5673__auto__;
var G__61392 = cljs.core.count(c__5673__auto__);
var G__61393 = (0);
seq__61330 = G__61390;
chunk__61331 = G__61391;
count__61332 = G__61392;
i__61333 = G__61393;
continue;
} else {
var vec__61343 = cljs.core.first(seq__61330__$1);
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61343,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61343,(1),null);
frontend.modules.outliner.op.set_block_property_BANG_(block_id__$1,property_id,value);


var G__61394 = cljs.core.next(seq__61330__$1);
var G__61395 = null;
var G__61396 = (0);
var G__61397 = (0);
seq__61330 = G__61394;
chunk__61331 = G__61395;
count__61332 = G__61396;
i__61333 = G__61397;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var _STAR_outliner_ops_STAR__orig_val__61346 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61347 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61347);

try{var seq__61348_61398 = cljs.core.seq(properties__$1);
var chunk__61349_61399 = null;
var count__61350_61400 = (0);
var i__61351_61401 = (0);
while(true){
if((i__61351_61401 < count__61350_61400)){
var vec__61358_61402 = chunk__61349_61399.cljs$core$IIndexed$_nth$arity$2(null,i__61351_61401);
var property_id_61403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61358_61402,(0),null);
var value_61404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61358_61402,(1),null);
frontend.modules.outliner.op.set_block_property_BANG_(block_id__$1,property_id_61403,value_61404);


var G__61405 = seq__61348_61398;
var G__61406 = chunk__61349_61399;
var G__61407 = count__61350_61400;
var G__61408 = (i__61351_61401 + (1));
seq__61348_61398 = G__61405;
chunk__61349_61399 = G__61406;
count__61350_61400 = G__61407;
i__61351_61401 = G__61408;
continue;
} else {
var temp__5825__auto___61409 = cljs.core.seq(seq__61348_61398);
if(temp__5825__auto___61409){
var seq__61348_61410__$1 = temp__5825__auto___61409;
if(cljs.core.chunked_seq_QMARK_(seq__61348_61410__$1)){
var c__5673__auto___61411 = cljs.core.chunk_first(seq__61348_61410__$1);
var G__61412 = cljs.core.chunk_rest(seq__61348_61410__$1);
var G__61413 = c__5673__auto___61411;
var G__61414 = cljs.core.count(c__5673__auto___61411);
var G__61415 = (0);
seq__61348_61398 = G__61412;
chunk__61349_61399 = G__61413;
count__61350_61400 = G__61414;
i__61351_61401 = G__61415;
continue;
} else {
var vec__61361_61416 = cljs.core.first(seq__61348_61410__$1);
var property_id_61417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61361_61416,(0),null);
var value_61418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61361_61416,(1),null);
frontend.modules.outliner.op.set_block_property_BANG_(block_id__$1,property_id_61417,value_61418);


var G__61419 = cljs.core.next(seq__61348_61410__$1);
var G__61420 = null;
var G__61421 = (0);
var G__61422 = (0);
seq__61348_61398 = G__61419;
chunk__61349_61399 = G__61420;
count__61350_61400 = G__61421;
i__61351_61401 = G__61422;
continue;
}
} else {
}
}
break;
}

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"set-block-properties","set-block-properties",-1338069568)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61346);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.remove_block_property_BANG_ = (function frontend$handler$db_based$property$remove_block_property_BANG_(block_id,property_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuid(block_id)),(function (block_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.remove_block_property_BANG_(block_id__$1,property_id__$1);
} else {
var _STAR_outliner_ops_STAR__orig_val__61364 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61365 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61365);

try{frontend.modules.outliner.op.remove_block_property_BANG_(block_id__$1,property_id__$1);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"remove-block-property","remove-block-property",-1355530334)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61364);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.delete_property_value_BANG_ = (function frontend$handler$db_based$property$delete_property_value_BANG_(block_id,property_id,property_value){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuid(block_id)),(function (block_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.delete_property_value_BANG_(block_id__$1,property_id__$1,property_value);
} else {
var _STAR_outliner_ops_STAR__orig_val__61366 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61367 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61367);

try{frontend.modules.outliner.op.delete_property_value_BANG_(block_id__$1,property_id__$1,property_value);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-property-value","delete-property-value",1921787953)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61366);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.batch_delete_property_value_BANG_ = (function frontend$handler$db_based$property$batch_delete_property_value_BANG_(block_ids,property_id,property_value){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuids(block_ids)),(function (block_ids__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.batch_delete_property_value_BANG_(block_ids__$1,property_id__$1,property_value);
} else {
var _STAR_outliner_ops_STAR__orig_val__61368 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61369 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61369);

try{frontend.modules.outliner.op.batch_delete_property_value_BANG_(block_ids__$1,property_id__$1,property_value);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-delete-property-value","batch-delete-property-value",-1068225046)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61368);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.create_property_text_block_BANG_ = (function frontend$handler$db_based$property$create_property_text_block_BANG_(block_id,property_id,value,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuid(block_id)),(function (block_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.create_property_text_block_BANG_(block_id__$1,property_id__$1,value,opts);
} else {
var _STAR_outliner_ops_STAR__orig_val__61370 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61371 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61371);

try{frontend.modules.outliner.op.create_property_text_block_BANG_(block_id__$1,property_id__$1,value,opts);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"create-property-text-block","create-property-text-block",1772697260)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61370);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.batch_set_property_BANG_ = (function frontend$handler$db_based$property$batch_set_property_BANG_(block_ids,property_id,value,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuids(block_ids)),(function (block_ids__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.batch_set_property_BANG_(block_ids__$1,property_id__$1,value,opts);
} else {
var _STAR_outliner_ops_STAR__orig_val__61372 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61373 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61373);

try{frontend.modules.outliner.op.batch_set_property_BANG_(block_ids__$1,property_id__$1,value,opts);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-set-property","batch-set-property",-617851002)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61372);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.batch_remove_property_BANG_ = (function frontend$handler$db_based$property$batch_remove_property_BANG_(block_ids,property_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuids(block_ids)),(function (block_ids__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.batch_remove_property_BANG_(block_ids__$1,property_id__$1);
} else {
var _STAR_outliner_ops_STAR__orig_val__61374 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61375 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61375);

try{frontend.modules.outliner.op.batch_remove_property_BANG_(block_ids__$1,property_id__$1);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-remove-property","batch-remove-property",-1380335108)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61374);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.class_add_property_BANG_ = (function frontend$handler$db_based$property$class_add_property_BANG_(class_id,property_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuid(class_id)),(function (class_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.class_add_property_BANG_(class_id__$1,property_id__$1);
} else {
var _STAR_outliner_ops_STAR__orig_val__61376 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61377 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61377);

try{frontend.modules.outliner.op.class_add_property_BANG_(class_id__$1,property_id__$1);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"class-add-property","class-add-property",991910065)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61376);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.class_remove_property_BANG_ = (function frontend$handler$db_based$property$class_remove_property_BANG_(class_id,property_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuid(class_id)),(function (class_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.class_remove_property_BANG_(class_id__$1,property_id__$1);
} else {
var _STAR_outliner_ops_STAR__orig_val__61378 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61379 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61379);

try{frontend.modules.outliner.op.class_remove_property_BANG_(class_id__$1,property_id__$1);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"class-remove-property","class-remove-property",457070573)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61378);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.batch_set_property_closed_value_BANG_ = (function frontend$handler$db_based$property$batch_set_property_closed_value_BANG_(block_ids,db_ident,closed_value){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_property_closed_values(frontend.state.get_current_repo(),db_ident)),(function (closed_values){
return promesa.protocols._promise((function (){var temp__5823__auto__ = cljs.core.some((function (entity){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.closed_value_content(entity),closed_value)){
return entity;
} else {
return null;
}
}),closed_values);
if(cljs.core.truth_(temp__5823__auto__)){
var closed_value_entity = temp__5823__auto__;
return frontend.handler.db_based.property.batch_set_property_BANG_(block_ids,db_ident,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(closed_value_entity),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),true], null));
} else {
return console.error((""+"No entity found for closed value "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([closed_value], 0)))));
}
})());
}));
}));
});
frontend.handler.db_based.property.upsert_closed_value_BANG_ = (function frontend$handler$db_based$property$upsert_closed_value_BANG_(property_id,closed_value_config){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.upsert_closed_value_BANG_(property_id__$1,closed_value_config);
} else {
var _STAR_outliner_ops_STAR__orig_val__61380 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61381 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61381);

try{frontend.modules.outliner.op.upsert_closed_value_BANG_(property_id__$1,closed_value_config);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"upsert-closed-value","upsert-closed-value",-392689675)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61380);
}}
})());
}));
}));
});
frontend.handler.db_based.property.delete_closed_value_BANG_ = (function frontend$handler$db_based$property$delete_closed_value_BANG_(property_id,value){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_block_uuid(value)),(function (value__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.delete_closed_value_BANG_(property_id__$1,value__$1);
} else {
var _STAR_outliner_ops_STAR__orig_val__61382 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61383 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61383);

try{frontend.modules.outliner.op.delete_closed_value_BANG_(property_id__$1,value__$1);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-closed-value","delete-closed-value",-133763456)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61382);
}}
})());
}));
}));
}));
});
frontend.handler.db_based.property.add_existing_values_to_closed_values_BANG_ = (function frontend$handler$db_based$property$add_existing_values_to_closed_values_BANG_(property_id,values){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property._LT_property_ident(property_id)),(function (property_id__$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.add_existing_values_to_closed_values_BANG_(property_id__$1,values);
} else {
var _STAR_outliner_ops_STAR__orig_val__61384 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__61385 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__61385);

try{frontend.modules.outliner.op.add_existing_values_to_closed_values_BANG_(property_id__$1,values);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"add-existing-values-to-closed-values","add-existing-values-to-closed-values",-712668508)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__61384);
}}
})());
}));
}));
});

//# sourceMappingURL=frontend.handler.db_based.property.js.map
