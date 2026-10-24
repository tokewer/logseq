goog.provide('logseq.api.db_based');
goog.scope(function(){
  logseq.api.db_based.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$emoji_mart$data$sets$15$native_json=shadow.js.require("module$node_modules$$emoji_mart$data$sets$15$native_json", {});
if((typeof logseq !== 'undefined') && (typeof logseq.api !== 'undefined') && (typeof logseq.api.db_based !== 'undefined') && (typeof logseq.api.db_based.name__GT_emoji !== 'undefined')){
} else {
logseq.api.db_based.name__GT_emoji = cljs.core.group_by(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.vals(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(logseq.api.db_based.goog$module$goog$object.get(module$node_modules$$emoji_mart$data$sets$15$native_json,"emojis"))));
}
logseq.api.db_based._LT_get_block = (function logseq$api$db_based$_LT_get_block(id){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
});
logseq.api.db_based._get_property = (function logseq$api$db_based$_get_property(plugin,k){
if(((typeof k === 'string') && ((!(clojure.string.blank_QMARK_(clojure.string.trim(k))))))){
var property_ident = logseq.api.block.get_db_ident_from_property_name(k,plugin);
return logseq.api.db_based._LT_get_block(property_ident);
} else {
return null;
}
});
logseq.api.db_based.get_favorites = (function logseq$api$db_based$get_favorites(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_get_favorites()),(function (favorites){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(favorites));
}));
}));
});
logseq.api.db_based.insert_batch_blocks = (function logseq$api$db_based$insert_batch_blocks(this$,target,blocks,opts){
var blocks_SINGLEQUOTE_ = clojure.walk.prewalk((function (f){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(f);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(and__5140__auto____$1)){
return (new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(f) == null);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.random_uuid());
} else {
return f;
}
}),blocks);
var map__48072 = opts;
var map__48072__$1 = cljs.core.__destructure_map(map__48072);
var sibling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48072__$1,new cljs.core.Keyword(null,"sibling","sibling",-1183865000));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48072__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48072__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var flat_blocks = logseq.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2(blocks_SINGLEQUOTE_,new cljs.core.Keyword(null,"children","children",-940561982));
var block_uuids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uuid","uuid",-2145095719),flat_blocks);
var uuid__GT_properties = (function (){var blocks__$1 = flat_blocks;
if(cljs.core.truth_(cljs.core.some((function (b){
return cljs.core.seq(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(b));
}),blocks__$1))){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uuid","uuid",-2145095719),blocks__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"properties","properties",685819552),blocks__$1));
} else {
return null;
}
})();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(before)?frontend.db.async._LT_get_block_sibling(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"left","left",-399115937)):target)),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.page_QMARK_(block))?false:sibling)),(function (sibling_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.entity.page_QMARK_(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block);
}
})())?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block):(function (){var page = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.map_QMARK_(page)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
} else {
return page;
}
})())),(function (page_id){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.insert_block_tree_after_target(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),sibling_QMARK_,blocks_SINGLEQUOTE_,new cljs.core.Keyword(null,"markdown","markdown",1227225089),true)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(uuid__GT_properties))?promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((function (id){
return promesa.protocols._promise((function (){var temp__5825__auto__ = cljs.core.seq((uuid__GT_properties.cljs$core$IFn$_invoke$arity$1 ? uuid__GT_properties.cljs$core$IFn$_invoke$arity$1(id) : uuid__GT_properties.call(null,id)));
if(temp__5825__auto__){
var properties = temp__5825__auto__;
return logseq.api.block.db_based_save_block_properties_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null),properties,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),this$,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null)], 0));
} else {
return null;
}
})());
}),block_uuids):null)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks(frontend.state.get_current_repo(),block_uuids)),(function (blocks_SINGLEQUOTE___$1){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),blocks_SINGLEQUOTE___$1)));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.db_based.insert_block = (function logseq$api$db_based$insert_block(this$,content,properties,schema,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.api_insert_new_block_BANG_(content,opts)),(function (new_block){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(properties))?logseq.api.block.db_based_save_block_properties_BANG_.cljs$core$IFn$_invoke$arity$variadic(new_block,properties,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),this$,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null)], 0)):null)),(function (___21901__auto__){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based._LT_get_block(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_block))),(function (block){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(block));
}));
})));
}));
}));
}));
});
logseq.api.db_based.update_block = (function logseq$api$db_based$update_block(this$,block,content,opts){
if(cljs.core.truth_(block)){
var repo = frontend.state.get_current_repo();
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(opts)))?logseq.api.block.db_based_save_block_properties_BANG_.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),this$,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"reset-property-values","reset-property-values",-1471461256),new cljs.core.Keyword(null,"reset-property-values","reset-property-values",-1471461256).cljs$core$IFn$_invoke$arity$1(opts)], null)], 0)):null)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4(repo,logseq.sdk.utils.uuid_or_throw_error(block_uuid),content,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"properties","properties",685819552)))),(function (___21901__auto____$1){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_uuid,(function (){var G__48073 = frontend.state.get_edit_block();
if((G__48073 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__48073);
}
})()))?frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$1(content):null));
}));
}));
}));
} else {
return null;
}
});
logseq.api.db_based.get_property = (function logseq$api$db_based$get_property(k){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based._get_property(this$,k)),(function (prop){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__48074 = prop;
if((G__48074 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48074,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(prop));
}
})()),(function (prop_SINGLEQUOTE_){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(prop_SINGLEQUOTE_));
}));
}));
}));
});
logseq.api.db_based.__GT_cardinality = (function logseq$api$db_based$__GT_cardinality(input){
var valid_input = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["db.cardinality/many",null,"db.cardinality/one",null,"many",null,"one",null], null), null);
if(cljs.core.contains_QMARK_(valid_input,input)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid cardinality, choices: \"one\" or \"many\"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));
}

var result = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(input);
var G__48075 = result;
var G__48075__$1 = (((G__48075 instanceof cljs.core.Keyword))?G__48075.fqn:null);
switch (G__48075__$1) {
case "one":
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);

break;
case "many":
return new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234);

break;
default:
return result;

}
});
logseq.api.db_based.schema_type_check_BANG_ = (function logseq$api$db_based$schema_type_check_BANG_(type){
var valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"datetime","datetime",494675702),null,new cljs.core.Keyword(null,"json","json",1279968570),null,new cljs.core.Keyword(null,"asset","asset",-280274466),null], null), null);
if(cljs.core.contains_QMARK_(valid_types,type)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invalid type, type should be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_types)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));
}
});
logseq.api.db_based.upsert_property_aux = (function logseq$api$db_based$upsert_property_aux(this$,k,schema,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.block.sanitize_user_property_name(k)),(function (k_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.block.get_db_ident_from_property_name(k,this$)),(function (property_ident){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.block.ensure_property_upsert_control(this$,property_ident,k_SINGLEQUOTE_)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = (function (){var G__48077 = schema;
if((G__48077 == null)){
return null;
} else {
return cljs.core.update_keys(G__48077,(function (p1__48076_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"public","public",1566243851),null], null), null),p1__48076_SHARP_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__48076_SHARP_))+"?"));
} else {
return p1__48076_SHARP_;
}
}));
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),(function (schema__$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema__$1))?logseq.api.db_based.schema_type_check_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema__$1))):null)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__48078 = schema__$1;
var G__48078__$1 = ((typeof new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema__$1) === 'string')?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48078,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),logseq.api.db_based.__GT_cardinality(new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema__$1))),new cljs.core.Keyword(null,"cardinality","cardinality",-104971109)):G__48078);
var G__48078__$2 = ((cljs.core.boolean_QMARK_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(schema__$1)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48078__$1,new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746),new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(schema__$1)),new cljs.core.Keyword(null,"hide","hide",-596913169)):G__48078__$1);
if(typeof new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema__$1) === 'string'){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48078__$2,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema__$1))),new cljs.core.Keyword(null,"type","type",1174270348));
} else {
return G__48078__$2;
}
})()),(function (schema__$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.upsert_property_BANG_(property_ident,schema__$2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),k_SINGLEQUOTE_))),(function (p){
return promesa.protocols._promise(logseq.api.db_based._LT_get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p)));
}));
}));
}));
}));
}));
}));
}));
}));
});
/**
 * schema:
 *  {:type :default | :number | :date | :datetime | :checkbox | :url | :node | :asset | :json | :string
 *   :cardinality :many | :one
 *   :hide? true
 *   :view-context :page
 *   :public? false}
 *   
 */
logseq.api.db_based.upsert_property = (function logseq$api$db_based$upsert_property(k,schema,opts){
var this$ = this;
if(clojure.string.blank_QMARK_(k)){
return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = (function (){var G__48079 = opts;
if((G__48079 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__48079);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),(function (opts_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = (function (){var G__48080 = schema;
if((G__48080 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__48080);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),(function (schema_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.upsert_property_aux(this$,k,schema_SINGLEQUOTE_,opts_SINGLEQUOTE_)),(function (property){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(property));
}));
}));
}));
}));
}
});
logseq.api.db_based.remove_property = (function logseq$api$db_based$remove_property(k){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based._get_property(this$,k)),(function (property){
return promesa.protocols._promise((cljs.core.truth_(property)?((logseq.api.block.plugin_property_key_QMARK_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))?frontend.handler.common.page._LT_delete_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Plugins can only remove their own properties",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),k,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)], null))})()):null));
}));
}));
});
logseq.api.db_based.upsert_block_property = (function logseq$api$db_based$upsert_block_property(this$,block,key_SINGLEQUOTE_,value,p__48081){
var map__48082 = p__48081;
var map__48082__$1 = cljs.core.__destructure_map(map__48082);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48082__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var reset_property_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48082__$1,new cljs.core.Keyword(null,"reset-property-values","reset-property-values",-1471461256));
var entity_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48082__$1,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382));
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),this$,new cljs.core.Keyword(null,"schema","schema",-1582001791),(cljs.core.truth_(schema)?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.key,schema]):null),new cljs.core.Keyword(null,"reset-property-values","reset-property-values",-1471461256),reset_property_values,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_], null);
return logseq.api.block.db_based_save_block_properties_BANG_.cljs$core$IFn$_invoke$arity$variadic(block,cljs.core.PersistentArrayMap.createAsIfByAssoc([key_SINGLEQUOTE_,value]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
});
logseq.api.db_based.get_all_tags = (function logseq$api$db_based$get_all_tags(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_all_classes(frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"except-root-class?","except-root-class?",-345353595),true], null))),(function (tags){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(tags));
}));
}));
});
logseq.api.db_based.get_all_properties = (function logseq$api$db_based$get_all_properties(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_all_properties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),cljs.core.PersistentArrayMap.EMPTY], 0))),(function (properties){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(properties));
}));
}));
});
logseq.api.db_based.get_tag_objects = (function logseq$api$db_based$get_tag_objects(class_uuid_or_ident_or_title){
var k = (cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(class_uuid_or_ident_or_title) : frontend.util.uuid_string_QMARK_.call(null,class_uuid_or_ident_or_title)))?null:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(logseq.api.block.sanitize_user_property_name(class_uuid_or_ident_or_title)));
var class_id = (cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(class_uuid_or_ident_or_title) : frontend.util.uuid_string_QMARK_.call(null,class_uuid_or_ident_or_title)))?logseq.sdk.utils.uuid_or_throw_error(class_uuid_or_ident_or_title):((cljs.core.qualified_keyword_QMARK_(k))?k:class_uuid_or_ident_or_title
));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((((cljs.core.uuid_QMARK_(class_id)) || (cljs.core.qualified_keyword_QMARK_(class_id))))?logseq.api.db_based._LT_get_block(class_id):frontend.db.async._LT_get_case_page(frontend.state.get_current_repo(),class_id))),(function (class$){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.class_QMARK_(class$))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a tag",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),class_uuid_or_ident_or_title], null))})())),(function (___21901__auto__){
return promesa.protocols._promise(((cljs.core.not(class$))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Tag not exists with id: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_id)),cljs.core.PersistentArrayMap.EMPTY)})():promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_class_objects_from_worker(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$))),(function (result){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(result));
}));
}))));
}));
}));
}));
});
logseq.api.db_based.create_tag = (function logseq$api$db_based$create_tag(title,opts){
var this$ = this;
if(typeof title === 'string'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Tag title should be a string",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null));
}

if(clojure.string.blank_QMARK_(title)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Tag title shouldn't be empty",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null));
} else {
}

if(cljs.core.truth_((logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1(title) : logseq.graph_parser.text.namespace_page_QMARK_.call(null,title)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Tag title shouldn't include forward slash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null));
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts)),(function (opts__$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.block.resolve_class_prefix_for_db(this$)),(function (class_ident_namespace){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__48083 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts__$1,new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class-ident-namespace","class-ident-namespace",1608586491),class_ident_namespace], 0));
if(((typeof new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(opts__$1) === 'string') && (logseq.common.util.uuid_string_QMARK_(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(opts__$1))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48083,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.uuid);
} else {
return G__48083;
}
})()),(function (opts_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"tagProperties","tagProperties",-1445955188).cljs$core$IFn$_invoke$arity$1(opts__$1)),(function (tag_properties){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.page._LT_create_class_BANG_(title,opts_SINGLEQUOTE_)),(function (tag){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(tag_properties))?promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48084){
var map__48085 = p__48084;
var map__48085__$1 = cljs.core.__destructure_map(map__48085);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48085__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48085__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48085__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var property_ident = logseq.api.block.get_db_ident_from_property_name(name,this$);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based._LT_get_block(property_ident)),(function (property_entity){
return promesa.protocols._promise((function (){var or__5142__auto__ = property_entity;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.api.db_based.upsert_property_aux(this$,name,schema,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
}
})());
}));
}));
}),tag_properties)):null)),(function (properties){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(properties))?frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),properties)):null)),(function (___21901__auto__){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based._LT_get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag))),(function (tag__$1){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(tag__$1));
}));
})));
}));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.db_based.throw_error_if_not_tag_BANG_ = (function logseq$api$db_based$throw_error_if_not_tag_BANG_(tag,tag_id){
if(cljs.core.truth_(frontend.util.entity.class_QMARK_(tag))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Not a tag: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null));
}
});
logseq.api.db_based.add_tag_extends = (function logseq$api$db_based$add_tag_extends(tag_id,extend_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(frontend.state.get_current_repo(),tag_id)),(function (tag){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(frontend.state.get_current_repo(),extend_id)),(function (extend){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.throw_error_if_not_tag_BANG_(tag,tag_id)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.throw_error_if_not_tag_BANG_(extend,extend_id)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(tag) : logseq.db.built_in_QMARK_.call(null,tag)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Built-in tag's extends can't be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null))})():null)),(function (___21901__auto____$2){
return promesa.protocols._promise(frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(extend)));
}));
}));
}));
}));
}));
}));
});
logseq.api.db_based.remove_tag_extends = (function logseq$api$db_based$remove_tag_extends(tag_id,extend_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(frontend.state.get_current_repo(),tag_id)),(function (tag){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(frontend.state.get_current_repo(),extend_id)),(function (extend){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.throw_error_if_not_tag_BANG_(tag,tag_id)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.throw_error_if_not_tag_BANG_(extend,extend_id)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(tag) : logseq.db.built_in_QMARK_.call(null,tag)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Built-in tag's extends can't be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null))})():null)),(function (___21901__auto____$2){
return promesa.protocols._promise(frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(extend)));
}));
}));
}));
}));
}));
}));
});
logseq.api.db_based.resolve_eid = (function logseq$api$db_based$resolve_eid(plugin,uuid_or_ident_or_title,prefix_resolver){
var eid = ((typeof uuid_or_ident_or_title === 'number')?uuid_or_ident_or_title:(function (){var title_or_ident = clojure.string.replace((((!(typeof uuid_or_ident_or_title === 'string')))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid_or_ident_or_title)):uuid_or_ident_or_title),/^:+/,"");
if(cljs.core.truth_((logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1(title_or_ident) : logseq.graph_parser.text.namespace_page_QMARK_.call(null,title_or_ident)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(title_or_ident);
} else {
if(cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(title_or_ident) : frontend.util.uuid_string_QMARK_.call(null,title_or_ident)))){
return logseq.sdk.utils.uuid_or_throw_error(title_or_ident);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((prefix_resolver.cljs$core$IFn$_invoke$arity$1 ? prefix_resolver.cljs$core$IFn$_invoke$arity$1(plugin) : prefix_resolver.call(null,plugin)),title_or_ident);
}
}
})());
return eid;
});
logseq.api.db_based.resolve_tag_eid = (function logseq$api$db_based$resolve_tag_eid(this$,class_uuid_or_ident_or_title){
return logseq.api.db_based.resolve_eid(this$,class_uuid_or_ident_or_title,logseq.api.block.resolve_class_prefix_for_db);
});
logseq.api.db_based.resolve_property_eid = (function logseq$api$db_based$resolve_property_eid(this$,prop_uuid_or_ident_or_title){
return logseq.api.db_based.resolve_eid(this$,prop_uuid_or_ident_or_title,logseq.api.block.resolve_property_prefix_for_db);
});
logseq.api.db_based.get_tags = (function logseq$api$db_based$get_tags(name){
return frontend.db.async._LT_get_tags_by_name(frontend.state.get_current_repo(),name);
});
logseq.api.db_based.get_tag = (function logseq$api$db_based$get_tag(class_uuid_or_ident_or_title){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.resolve_tag_eid(this$,class_uuid_or_ident_or_title)),(function (eid){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based._LT_get_block(eid)),(function (tag){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(tag)?null:logseq.api.db_based.get_tags(class_uuid_or_ident_or_title))),(function (tags_by_name){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = tag;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.first(tags_by_name);
}
})()),(function (tag__$1){
return promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.class_QMARK_(tag__$1))?logseq.sdk.utils.result__GT_js(tag__$1):null));
}));
}));
}));
}));
}));
});
logseq.api.db_based.get_tags_by_name = (function logseq$api$db_based$get_tags_by_name(name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.get_tags(name)),(function (tags){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(tags));
}));
}));
});
logseq.api.db_based.tag_add_property = (function logseq$api$db_based$tag_add_property(tag_id,property_id_or_name){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_case_page(frontend.state.get_current_repo(),tag_id)),(function (tag){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.resolve_property_eid(this$,property_id_or_name)),(function (eid){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based._LT_get_block(eid)),(function (property){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.class_QMARK_(tag))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a valid tag",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_id], null))})())),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.property_QMARK_(property))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a valid property",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),property_id_or_name], null))})())),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not((logseq.db.public_built_in_property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.public_built_in_property_QMARK_.cljs$core$IFn$_invoke$arity$1(property) : logseq.db.public_built_in_property_QMARK_.call(null,property)));
if(and__5140__auto__){
return (logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(property) : logseq.db.built_in_QMARK_.call(null,property));
} else {
return and__5140__auto__;
}
})())?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This is a private built-in property that can't be used.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),property], null))})():null)),(function (___21901__auto____$2){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.class_add_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))),(function (___21901__auto____$3){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_case_page(frontend.state.get_current_repo(),tag_id)),(function (tag__$1){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(tag__$1));
}));
})));
}));
})));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.db_based.tag_remove_property = (function logseq$api$db_based$tag_remove_property(tag_id,property_id_or_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_case_page(repo,tag_id)),(function (tag){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_case_page(repo,property_id_or_name)),(function (property){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.class_QMARK_(tag))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a valid tag",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_id], null))})())),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.property_QMARK_(property))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a valid property",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),property_id_or_name], null))})())),(function (___21901__auto____$1){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.class_remove_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))),(function (___21901__auto____$2){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_case_page(repo,tag_id)),(function (tag__$1){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(tag__$1));
}));
})));
}));
})));
}));
}));
}));
}));
}));
}));
});
logseq.api.db_based.add_block_tag = (function logseq$api$db_based$add_block_tag(id_or_name,tag_id){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(repo,id_or_name)),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.resolve_tag_eid(this$,tag_id)),(function (tag_eid){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(repo,tag_eid)),(function (tag_by_eid){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = tag_by_eid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.db.async._LT_get_block(repo,tag_id);
}
})()),(function (tag){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.class_QMARK_(tag))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Not a tag: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag], 0))], null))})())),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = tag;
if(cljs.core.truth_(and__5140__auto__)){
return block;
} else {
return and__5140__auto__;
}
})())?frontend.handler.db_based.page.add_tag(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),tag):null));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.db_based.remove_block_tag = (function logseq$api$db_based$remove_block_tag(id_or_name,tag_id){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(repo,id_or_name)),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based.resolve_tag_eid(this$,tag_id)),(function (tag_eid){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(repo,tag_eid)),(function (tag_by_eid){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = tag_by_eid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.db.async._LT_get_block(repo,tag_id);
}
})()),(function (tag){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.class_QMARK_(tag))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Not a tag: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null))})())),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return tag;
} else {
return and__5140__auto__;
}
})())?frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag)):null));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.db_based.set_block_icon = (function logseq$api$db_based$set_block_icon(block_id,icon_type,icon_name){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["tabler-icon",null,"emoji",null], null), null),icon_type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("icon-type should be one of [tabler-icon, emoji]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon-type","icon-type",-1460110256),icon_type], null));
}

if((((!(typeof icon_name === 'string'))) || (clojure.string.blank_QMARK_(icon_name)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("icon-name should be a non-blank string",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),icon_name], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(icon_type,"emoji")){
if(cljs.core.truth_((logseq.api.db_based.name__GT_emoji.cljs$core$IFn$_invoke$arity$1 ? logseq.api.db_based.name__GT_emoji.cljs$core$IFn$_invoke$arity$1(icon_name) : logseq.api.db_based.name__GT_emoji.call(null,icon_name)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Can't find emoji for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_name)),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(repo,block_id)),(function (block){
return promesa.protocols._promise(frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(icon_type),new cljs.core.Keyword(null,"id","id",-1388402092),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(icon_type,"emoji"))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first((logseq.api.db_based.name__GT_emoji.cljs$core$IFn$_invoke$arity$1 ? logseq.api.db_based.name__GT_emoji.cljs$core$IFn$_invoke$arity$1(icon_name) : logseq.api.db_based.name__GT_emoji.call(null,icon_name)))):icon_name)], null)));
}));
}));
}));
});
logseq.api.db_based.remove_block_icon = (function logseq$api$db_based$remove_block_icon(block_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(repo,block_id)),(function (block){
return promesa.protocols._promise(frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285)));
}));
}));
}));
});
logseq.api.db_based.block_identity__GT_uuid = (function logseq$api$db_based$block_identity__GT_uuid(block_identity){
var block_uuid = ((cljs.core.map_QMARK_(block_identity))?new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block_identity):block_identity);
return logseq.sdk.utils.uuid_or_throw_error(block_uuid);
});
logseq.api.db_based.add_property_value_choices = (function logseq$api$db_based$add_property_value_choices(property_id,choices){
var temp__5825__auto__ = (function (){var and__5140__auto__ = property_id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(choices);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var values = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.db_based._LT_get_block(logseq.api.db_based.block_identity__GT_uuid(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(property_id)))),(function (property){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.property_QMARK_(property))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a valid property",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),property_id], null))})())),(function (___21901__auto__){
return promesa.protocols._promise(frontend.handler.db_based.property.add_existing_values_to_closed_values_BANG_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(logseq.api.db_based.block_identity__GT_uuid,values)));
}));
}));
}));
} else {
return null;
}
});
logseq.api.db_based.set_property_node_tags = (function logseq$api$db_based$set_property_node_tags(property_id,tag_ids){
var tag_ids__$1 = (function (){var and__5140__auto__ = property_id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(tag_ids));
} else {
return and__5140__auto__;
}
})();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(repo,property_id)),(function (property){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.property_QMARK_(property))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a valid property",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),property_id], null))})())),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var seq__48086 = cljs.core.seq(tag_ids__$1);
var chunk__48087 = null;
var count__48088 = (0);
var i__48089 = (0);
while(true){
if((i__48089 < count__48088)){
var tag_id = chunk__48087.cljs$core$IIndexed$_nth$arity$2(null,i__48089);
if(typeof tag_id === 'number'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Tag id should be a number",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag-id","tag-id",-1311228547),tag_id], null));
}


var G__48091 = seq__48086;
var G__48092 = chunk__48087;
var G__48093 = count__48088;
var G__48094 = (i__48089 + (1));
seq__48086 = G__48091;
chunk__48087 = G__48092;
count__48088 = G__48093;
i__48089 = G__48094;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48086);
if(temp__5825__auto__){
var seq__48086__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48086__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__48086__$1);
var G__48095 = cljs.core.chunk_rest(seq__48086__$1);
var G__48096 = c__5673__auto__;
var G__48097 = cljs.core.count(c__5673__auto__);
var G__48098 = (0);
seq__48086 = G__48095;
chunk__48087 = G__48096;
count__48088 = G__48097;
i__48089 = G__48098;
continue;
} else {
var tag_id = cljs.core.first(seq__48086__$1);
if(typeof tag_id === 'number'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Tag id should be a number",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag-id","tag-id",-1311228547),tag_id], null));
}


var G__48099 = cljs.core.next(seq__48086__$1);
var G__48100 = null;
var G__48101 = (0);
var G__48102 = (0);
seq__48086 = G__48099;
chunk__48087 = G__48100;
count__48088 = G__48101;
i__48089 = G__48102;
continue;
}
} else {
return null;
}
}
break;
}
})()),(function (___21901__auto____$1){
return promesa.protocols._promise(frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486),tag_ids__$1));
}));
}));
}));
}));
}));
});

//# sourceMappingURL=logseq.api.db_based.js.map
