goog.provide('frontend.handler.editor');
goog.scope(function(){
  frontend.handler.editor.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_asset_uploading_QMARK_ !== 'undefined')){
} else {
frontend.handler.editor._STAR_asset_uploading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_asset_uploading_process !== 'undefined')){
} else {
frontend.handler.editor._STAR_asset_uploading_process = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.handler.editor.clear_selection_BANG_ = frontend.state.clear_selection_BANG_;
frontend.handler.editor.edit_block_BANG_ = frontend.handler.block.edit_block_BANG_;
frontend.handler.editor.event_code = (function frontend$handler$editor$event_code(e){
var or__5142__auto__ = frontend.handler.editor.goog$module$goog$object.getValueByKeys(e,"event_","code");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.goog$module$goog$object.get(e,"code");
}
});
frontend.handler.editor.outliner_save_block_BANG_ = (function frontend$handler$editor$outliner_save_block_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___66854 = arguments.length;
var i__5877__auto___66855 = (0);
while(true){
if((i__5877__auto___66855 < len__5876__auto___66854)){
args__5882__auto__.push((arguments[i__5877__auto___66855]));

var G__66856 = (i__5877__auto___66855 + (1));
i__5877__auto___66855 = G__66856;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.editor.outliner_save_block_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.editor.outliner_save_block_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block,p__66075){
var map__66076 = p__66075;
var map__66076__$1 = cljs.core.__destructure_map(map__66076);
var opts = map__66076__$1;
return frontend.modules.outliner.op.save_block_BANG_.cljs$core$IFn$_invoke$arity$variadic(block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));

(frontend.handler.editor.outliner_save_block_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.editor.outliner_save_block_BANG_.cljs$lang$applyTo = (function (seq66073){
var G__66074 = cljs.core.first(seq66073);
var seq66073__$1 = cljs.core.next(seq66073);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66074,seq66073__$1);
}));

frontend.handler.editor.get_block_own_order_list_type = (function frontend$handler$editor$get_block_own_order_list_type(block){
return (frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111)) : frontend.handler.property.util.lookup.call(null,block,new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111)));
});
frontend.handler.editor.set_block_own_order_list_type_BANG_ = (function frontend$handler$editor$set_block_own_order_list_type_BANG_(block,type){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var uuid = temp__5825__auto__;
return frontend.handler.property.set_block_property_BANG_(uuid,new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111),cljs.core.name(type));
} else {
return null;
}
});
frontend.handler.editor.remove_block_own_order_list_type_BANG_ = (function frontend$handler$editor$remove_block_own_order_list_type_BANG_(block){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var uuid = temp__5825__auto__;
return frontend.handler.property.remove_block_property_BANG_(uuid,new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111));
} else {
return null;
}
});
frontend.handler.editor.own_order_number_list_QMARK_ = (function frontend$handler$editor$own_order_number_list_QMARK_(block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_block_own_order_list_type(block),"number");
});
frontend.handler.editor.make_block_as_own_order_list_BANG_ = (function frontend$handler$editor$make_block_as_own_order_list_BANG_(block){
var G__66077 = block;
if((G__66077 == null)){
return null;
} else {
return frontend.handler.editor.set_block_own_order_list_type_BANG_(G__66077,"number");
}
});
frontend.handler.editor.toggle_blocks_as_own_order_list_BANG_ = (function frontend$handler$editor$toggle_blocks_as_own_order_list_BANG_(blocks){
if(cljs.core.seq(blocks)){
var has_ordered_QMARK_ = cljs.core.some(frontend.handler.editor.own_order_number_list_QMARK_,blocks);
var blocks_uuids = (function (){var G__66078 = blocks;
var G__66078__$1 = (((G__66078 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),G__66078));
if((G__66078__$1 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__66078__$1);
}
})();
var order_list_prop = new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111);
if(cljs.core.truth_(has_ordered_QMARK_)){
return frontend.handler.property.batch_remove_block_property_BANG_(blocks_uuids,order_list_prop);
} else {
return frontend.handler.property.batch_set_block_property_BANG_(blocks_uuids,order_list_prop,"number");
}
} else {
return null;
}
});
frontend.handler.editor.wrap_parse_block = (function frontend$handler$editor$wrap_parse_block(block){
return frontend.handler.db_based.editor.wrap_parse_block(block);
});
frontend.handler.editor.save_block_inner_BANG_ = (function frontend$handler$editor$save_block_inner_BANG_(block,value,opts){
var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189)], null)),new cljs.core.Keyword("block","title","block/title",710445684),value);
var block_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.editor.wrap_parse_block(block__$1),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1));
var opts_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560));
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.handler.editor.outliner_save_block_BANG_(block_SINGLEQUOTE_);
} else {
var _STAR_outliner_ops_STAR__orig_val__66079 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66080 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66080);

try{frontend.handler.editor.outliner_save_block_BANG_(block_SINGLEQUOTE_);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,opts_SINGLEQUOTE_);
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66079);
}}
});
frontend.handler.editor.latest_renderer_block = (function frontend$handler$editor$latest_renderer_block(block){
var map__66081 = frontend.db.subs.block_snapshot(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var map__66081__$1 = cljs.core.__destructure_map(map__66081);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66081__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66081__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ready","ready",1086465795),status)){
return value;
} else {
return block;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_pending_block_save_titles !== 'undefined')){
} else {
frontend.handler.editor._STAR_pending_block_save_titles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.handler.editor.clear_pending_block_save_title_BANG_ = (function frontend$handler$editor$clear_pending_block_save_title_BANG_(block_uuid,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor._STAR_pending_block_save_titles,(function (pending_titles){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_titles,block_uuid))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(pending_titles,block_uuid);
} else {
return pending_titles;
}
}));
});
frontend.handler.editor.save_block_with_pending_title_BANG_ = (function frontend$handler$editor$save_block_with_pending_title_BANG_(block,value,opts){
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.editor._STAR_pending_block_save_titles,cljs.core.assoc,block_uuid,value);

try{var result = frontend.handler.editor.save_block_inner_BANG_(block,value,opts);
if(promesa.core.promise_QMARK_(result)){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(result,(function (_){
return frontend.handler.editor.clear_pending_block_save_title_BANG_(block_uuid,value);
})),(function (_){
return frontend.handler.editor.clear_pending_block_save_title_BANG_(block_uuid,value);
}));
} else {
frontend.handler.editor.clear_pending_block_save_title_BANG_(block_uuid,value);
}

return result;
}catch (e66082){var error = e66082;
frontend.handler.editor.clear_pending_block_save_title_BANG_(block_uuid,value);

throw error;
}});
frontend.handler.editor.save_block_if_changed_BANG_ = (function frontend$handler$editor$save_block_if_changed_BANG_(var_args){
var G__66084 = arguments.length;
switch (G__66084) {
case 2:
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block,value){
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3(block,value,null);
}));

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (block,value,p__66085){
var map__66086 = p__66085;
var map__66086__$1 = cljs.core.__destructure_map(map__66086);
var opts = map__66086__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66086__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var block__$1 = frontend.handler.editor.latest_renderer_block(block);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.handler.editor._STAR_pending_block_save_titles),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block__$1));
if(cljs.core.truth_(force_QMARK_)){
return frontend.handler.editor.save_block_with_pending_title_BANG_(block__$1,value,opts);
} else {
if(cljs.core.truth_(content)){
var content_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),clojure.string.trim(value));
if(content_changed_QMARK_){
return frontend.handler.editor.save_block_with_pending_title_BANG_(block__$1,value,opts);
} else {
return null;
}
} else {
return null;
}

}
}));

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.compute_fst_snd_block_text = (function frontend$handler$editor$compute_fst_snd_block_text(value,selection_start,selection_end){
if(typeof value === 'string'){
var fst_block_text = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start);
var snd_block_text = clojure.string.triml(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fst_block_text,snd_block_text], null);
} else {
return null;
}
});
frontend.handler.editor.block_map_has_children_QMARK_ = (function frontend$handler$editor$block_map_has_children_QMARK_(block){
return cljs.core.boolean$((function (){var or__5142__auto__ = new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.seq(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block));
}
})());
});
frontend.handler.editor.ref_db_id = (function frontend$handler$editor$ref_db_id(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
frontend.handler.editor.block_parent_id = (function frontend$handler$editor$block_parent_id(block){
return frontend.handler.editor.ref_db_id(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
});
frontend.handler.editor.block_page_id = (function frontend$handler$editor$block_page_id(block){
return frontend.handler.editor.ref_db_id(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
});
frontend.handler.editor.worker_children = (function frontend$handler$editor$worker_children(block){
var or__5142__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block);
}
});
frontend.handler.editor.worker_block_with_children = (function frontend$handler$editor$worker_block_with_children(result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(result))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(result));
} else {
return result;
}
});
frontend.handler.editor.worker_has_children_QMARK_ = (function frontend$handler$editor$worker_has_children_QMARK_(block){
return cljs.core.boolean$((function (){var or__5142__auto__ = cljs.core.seq(frontend.handler.editor.worker_children(block));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725).cljs$core$IFn$_invoke$arity$1(block);
}
})());
});
frontend.handler.editor.block_with_worker_children = (function frontend$handler$editor$block_with_worker_children(block,result){
var temp__5823__auto__ = (function (){var G__66087 = result;
if((G__66087 == null)){
return null;
} else {
return frontend.handler.editor.worker_block_with_children(G__66087);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var loaded_block = temp__5823__auto__;
var children = cljs.core.vec(frontend.handler.editor.worker_children(loaded_block));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword(null,"children","children",-940561982),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725),cljs.core.boolean$(cljs.core.seq(children))], 0));
} else {
return block;
}
});
frontend.handler.editor.boundary_merge_allowed_QMARK_ = (function frontend$handler$editor$boundary_merge_allowed_QMARK_(source_block,target_block){
var and__5140__auto__ = source_block;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = target_block;
if(cljs.core.truth_(and__5140__auto____$1)){
return (((!(frontend.components.block.comments_model.protected_comment_block_QMARK_(source_block)))) && ((((!(frontend.components.block.comments_model.protected_comment_block_QMARK_(target_block)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.block_parent_id(source_block),frontend.handler.editor.block_parent_id(target_block))) || ((!(frontend.handler.editor.worker_has_children_QMARK_(source_block)))))))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});



/**
 * Library Enter always creates a sibling of the current page block. Do not
 *   use entity/page? here: insert-new-block-aux! retracts :block/tags first.
 */
frontend.handler.editor.insert_as_sibling_QMARK_ = (function frontend$handler$editor$insert_as_sibling_QMARK_(config,current_block,sibling_QMARK_){
var ref_query_top_block_QMARK_ = (function (){var and__5140__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5140__auto__;
}
})();
var has_children_QMARK_ = frontend.handler.editor.block_map_has_children_QMARK_(current_block);
var library_QMARK_ = new cljs.core.Keyword(null,"library?","library?",1697356991).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(ref_query_top_block_QMARK_)){
return false;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = library_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1(current_block) : logseq.db.library_QMARK_.call(null,current_block)));
} else {
return and__5140__auto__;
}
})())){
return true;
} else {
if(cljs.core.boolean_QMARK_(sibling_QMARK_)){
return sibling_QMARK_;
} else {
if(cljs.core.truth_(frontend.util.collapsed_QMARK_(current_block))){
return true;
} else {
return (!(has_children_QMARK_));

}
}
}
}
});
frontend.handler.editor.outliner_insert_block_BANG_ = (function frontend$handler$editor$outliner_insert_block_BANG_(config,current_block,new_block,p__66088){
var map__66089 = p__66088;
var map__66089__$1 = cljs.core.__destructure_map(map__66089);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var ordered_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089__$1,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var skip_save_current_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089__$1,new cljs.core.Keyword(null,"skip-save-current-block?","skip-save-current-block?",515354840));
var library_QMARK_ = new cljs.core.Keyword(null,"library?","library?",1697356991).cljs$core$IFn$_invoke$arity$1(config);
var sibling_QMARK___$1 = frontend.handler.editor.insert_as_sibling_QMARK_(config,current_block,sibling_QMARK_);
var new_block_SINGLEQUOTE_ = (cljs.core.truth_(library_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new_block,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null], null), null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var G__66090 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(new_block);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__66090) : frontend.util.page_name_sanity_lc.call(null,G__66090));
})()], 0)),new cljs.core.Keyword("block","page","block/page",822314108)):new_block);
var insert_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082),ordered_list_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),outliner_op], null);
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
if(cljs.core.truth_(skip_save_current_block_QMARK_)){
} else {
var G__66091_66876 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__66091_66876) : frontend.handler.editor.save_current_block_BANG_.call(null,G__66091_66876));
}

return frontend.modules.outliner.op.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block_SINGLEQUOTE_], null),current_block,insert_opts);
} else {
var _STAR_outliner_ops_STAR__orig_val__66092 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66093 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66093);

try{if(cljs.core.truth_(skip_save_current_block_QMARK_)){
} else {
var G__66094_66877 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__66094_66877) : frontend.handler.editor.save_current_block_BANG_.call(null,G__66094_66877));
}

frontend.modules.outliner.op.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block_SINGLEQUOTE_], null),current_block,insert_opts);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,(function (){var G__66095 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$2(current_block,config)], 0));
var G__66095__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = outliner_op;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013));
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66095,new cljs.core.Keyword(null,"source-outliner-op","source-outliner-op",725708356),outliner_op):G__66095);
if(cljs.core.truth_(new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66095__$1,new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801).cljs$core$IFn$_invoke$arity$1(config));
} else {
return G__66095__$1;
}
})());
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66092);
}}
});
frontend.handler.editor.block_self_alone_when_insert_QMARK_ = (function frontend$handler$editor$block_self_alone_when_insert_QMARK_(config,uuid){
var current_page = frontend.state.get_current_page();
var block_id = (function (){var or__5142__auto__ = (function (){var G__66096 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if((G__66096 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__66096);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__66097 = current_page;
if((G__66097 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__66097);
}
}
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uuid,block_id);
});
frontend.handler.editor.url_property_value_insert_blocked_QMARK_ = (function frontend$handler$editor$url_property_value_insert_blocked_QMARK_(config,block){
return ((frontend.util.entity.url_property_value_QMARK_(block)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block)))) || (frontend.handler.editor.block_self_alone_when_insert_QMARK_(config,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))))));
});
/**
 * Default-value blocks and single URL values keep the editor but reject children.
 */
frontend.handler.editor.leaf_property_value_insert_blocked_QMARK_ = (function frontend$handler$editor$leaf_property_value_insert_blocked_QMARK_(config,block){
var or__5142__auto__ = frontend.util.entity.default_value_block_QMARK_(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.url_property_value_insert_blocked_QMARK_(config,block);
}
});
/**
 * Save and exit when insertion would create a URL child or a single-value sibling.
 */
frontend.handler.editor.skip_insert_for_url_property_value_BANG_ = (function frontend$handler$editor$skip_insert_for_url_property_value_BANG_(config,block){
if(frontend.handler.editor.leaf_property_value_insert_blocked_QMARK_(config,block)){
(frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.escape_editing.call(null));

return promesa.core.resolved(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null));
} else {
return null;
}
});
frontend.handler.editor.start_pending_new_block_BANG_ = (function frontend$handler$editor$start_pending_new_block_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","pending-new-block","editor/pending-new-block",893096339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"typed-text","typed-text",98904531),""], null));
});
frontend.handler.editor.pending_new_block = (function frontend$handler$editor$pending_new_block(){
return frontend.state.get_state(new cljs.core.Keyword("editor","pending-new-block","editor/pending-new-block",893096339));
});
frontend.handler.editor.pending_new_block_QMARK_ = (function frontend$handler$editor$pending_new_block_QMARK_(){
return (!((frontend.handler.editor.pending_new_block() == null)));
});
frontend.handler.editor.append_pending_new_block_text_BANG_ = (function frontend$handler$editor$append_pending_new_block_text_BANG_(text){
if(frontend.handler.editor.pending_new_block_QMARK_()){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("editor","pending-new-block","editor/pending-new-block",893096339),(function (p1__66098_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__66098_SHARP_,new cljs.core.Keyword(null,"typed-text","typed-text",98904531),cljs.core.str,text);
}));
} else {
return null;
}
});
frontend.handler.editor.queue_pending_new_block_tab_BANG_ = (function frontend$handler$editor$queue_pending_new_block_tab_BANG_(indent_QMARK_){
if(frontend.handler.editor.pending_new_block_QMARK_()){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("editor","pending-new-block","editor/pending-new-block",893096339),(function (p1__66099_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66099_SHARP_,new cljs.core.Keyword(null,"tab-indent?","tab-indent?",1575779352),indent_QMARK_);
}));
} else {
return null;
}
});
frontend.handler.editor.backspace_pending_new_block_BANG_ = (function frontend$handler$editor$backspace_pending_new_block_BANG_(delete_block_QMARK_){
if(frontend.handler.editor.pending_new_block_QMARK_()){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("editor","pending-new-block","editor/pending-new-block",893096339),(function (p__66100){
var map__66101 = p__66100;
var map__66101__$1 = cljs.core.__destructure_map(map__66101);
var pending = map__66101__$1;
var typed_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66101__$1,new cljs.core.Keyword(null,"typed-text","typed-text",98904531));
if(((cljs.core.seq(typed_text)) && (cljs.core.not(delete_block_QMARK_)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending,new cljs.core.Keyword(null,"typed-text","typed-text",98904531),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(typed_text,(0),(cljs.core.count(typed_text) - (1))));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending,new cljs.core.Keyword(null,"delete?","delete?",789956376),true);
}
}));
} else {
return null;
}
});
frontend.handler.editor.clear_pending_new_block_BANG_ = (function frontend$handler$editor$clear_pending_new_block_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","pending-new-block","editor/pending-new-block",893096339),null);
});
frontend.handler.editor.inserted_block_edit_fn = (function frontend$handler$editor$inserted_block_edit_fn(source_block,block,container_id){
return (function (rows){
var block_SINGLEQUOTE_ = (function (){var or__5142__auto__ = cljs.core.some((function (p1__66102_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__66102_SHARP_))){
return p1__66102_SHARP_;
} else {
return null;
}
}),rows);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})();
var source_block_SINGLEQUOTE_ = (function (){var or__5142__auto__ = cljs.core.some((function (p1__66104_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(source_block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__66104_SHARP_))){
return p1__66104_SHARP_;
} else {
return null;
}
}),rows);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return source_block;
}
})();
var map__66105 = frontend.handler.editor.pending_new_block();
var map__66105__$1 = cljs.core.__destructure_map(map__66105);
var typed_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"typed-text","typed-text",98904531));
var tab_indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"tab-indent?","tab-indent?",1575779352));
var delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"delete?","delete?",789956376));
if(cljs.core.truth_(delete_QMARK_)){
var source_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(source_block_SINGLEQUOTE_);
var block_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__66113 = source_block_SINGLEQUOTE_;
var G__66114 = (cljs.core.count(source_title) + cljs.core.count(typed_text));
var G__66115 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_title)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(typed_text)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_title)),new cljs.core.Keyword(null,"tail-len","tail-len",699304522),cljs.core.count(block_title),new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false,new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false,new cljs.core.Keyword(null,"skip-load?","skip-load?",1029467451),true], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66113,G__66114,G__66115) : frontend.handler.editor.edit_block_BANG_.call(null,G__66113,G__66114,G__66115));
})()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_) : frontend.handler.editor.delete_block_aux_BANG_.call(null,block_SINGLEQUOTE_))),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var latest_text = new cljs.core.Keyword(null,"typed-text","typed-text",98904531).cljs$core$IFn$_invoke$arity$1(frontend.handler.editor.pending_new_block());
var G__66123 = source_block_SINGLEQUOTE_;
var G__66124 = (cljs.core.count(source_title) + cljs.core.count(latest_text));
var G__66125 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_title)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(latest_text)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_title)),new cljs.core.Keyword(null,"tail-len","tail-len",699304522),cljs.core.count(block_title),new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false,new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false,new cljs.core.Keyword(null,"skip-load?","skip-load?",1029467451),true], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66123,G__66124,G__66125) : frontend.handler.editor.edit_block_BANG_.call(null,G__66123,G__66124,G__66125));
})()),(function (___27434__auto____$2){
return promesa.protocols._promise(frontend.handler.editor.clear_pending_new_block_BANG_());
}));
}));
}));
}));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((tab_indent_QMARK_ === true)?(frontend.handler.editor.expand_collapsed_indent_target_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.expand_collapsed_indent_target_BANG_.cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_) : frontend.handler.editor.expand_collapsed_indent_target_BANG_.call(null,block_SINGLEQUOTE_)):null)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((((!((tab_indent_QMARK_ == null))))?frontend.handler.block.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_SINGLEQUOTE_], null),tab_indent_QMARK_,null):null)),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__66126 = block_SINGLEQUOTE_;
var G__66127 = cljs.core.count(typed_text);
var G__66128 = (function (){var G__66129 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false,new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false,new cljs.core.Keyword(null,"skip-load?","skip-load?",1029467451),true], null);
if(cljs.core.seq(typed_text)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66129,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(typed_text)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_))));
} else {
return G__66129;
}
})();
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66126,G__66127,G__66128) : frontend.handler.editor.edit_block_BANG_.call(null,G__66126,G__66127,G__66128));
})()),(function (___27434__auto____$2){
return promesa.protocols._promise(frontend.handler.editor.clear_pending_new_block_BANG_());
}));
}));
}));
}));
}
});
});
frontend.handler.editor.insert_new_block_before_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_before_block_aux_BANG_(config,block,value){
var or__5142__auto__ = frontend.handler.editor.skip_insert_for_url_property_value_BANG_(config,block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var edit_input_id = frontend.state.get_edit_input_id();
var input = goog.dom.getElement(edit_input_id);
var input_text_selected_QMARK_ = frontend.util.input_text_selected_QMARK_(input);
var new_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.db.new_block_id(),new cljs.core.Keyword("block","title","block/title",710445684),""], null);
var prev_block = frontend.handler.editor.wrap_parse_block(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108)], null)),new_m], 0)));
var repo = frontend.state.get_current_repo();
if(input_text_selected_QMARK_){
var selection_start_66894 = frontend.util.get_selection_start(input);
var selection_end_66895 = frontend.util.get_selection_end(input);
var vec__66142_66896 = frontend.handler.editor.compute_fst_snd_block_text(value,selection_start_66894,selection_end_66895);
var __66897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66142_66896,(0),null);
var new_content_66898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66142_66896,(1),null);
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input_id,new_content_66898);
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$2(repo,block) : frontend.handler.editor._LT_left_sibling_or_parent.call(null,repo,block))),(function (left_or_parent){
return promesa.protocols._promise((function (){var sibling_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_or_parent),frontend.handler.editor.block_parent_id(block));
var container_id = (function (){var or__5142__auto____$1 = (function (){var G__66145 = new cljs.core.Keyword(null,"insert","insert",1286475395);
var G__66146 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null);
return (frontend.handler.editor.get_new_container_id.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor.get_new_container_id.cljs$core$IFn$_invoke$arity$2(G__66145,G__66146) : frontend.handler.editor.get_new_container_id.call(null,G__66145,G__66146));
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
}
})();
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),frontend.handler.editor.inserted_block_edit_fn(block,prev_block,container_id));
var result = frontend.handler.editor.outliner_insert_block_BANG_(config__$1,left_or_parent,prev_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,sibling_QMARK_,prev_block], null);
})());
}));
}));
}
});
frontend.handler.editor.retract_attributes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","alias","block/alias",-2112644699),null,new cljs.core.Keyword("block","warning","block/warning",2131709542),null,new cljs.core.Keyword("block","properties","block/properties",708347145),null,new cljs.core.Keyword("block","tags","block/tags",1814948340),null], null), null);
frontend.handler.editor.current_block_with_title = (function frontend$handler$editor$current_block_with_title(block,title){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","title","block/title",710445684),title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090),title], 0));
});
frontend.handler.editor.insert_new_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_aux_BANG_(config,p__66147,value){
var map__66148 = p__66147;
var map__66148__$1 = cljs.core.__destructure_map(map__66148);
var block = map__66148__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66148__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var or__5142__auto__ = frontend.handler.editor.skip_insert_for_url_property_value_BANG_(config,block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var repo = frontend.state.get_current_repo();
var block_self_QMARK_ = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config,uuid);
var input = goog.dom.getElement(frontend.state.get_edit_input_id());
var selection_start = frontend.util.get_selection_start(input);
var selection_end = frontend.util.get_selection_end(input);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
return frontend.db.async._LT_get_block_with_children.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),true], null)], 0));
} else {
return null;
}
})()),(function (worker_result){
return promesa.protocols._promise((function (){var block__$1 = frontend.handler.editor.block_with_worker_children(block,worker_result);
var vec__66149 = frontend.handler.editor.compute_fst_snd_block_text(value,selection_start,selection_end);
var fst_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66149,(0),null);
var snd_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66149,(1),null);
var current_block = frontend.handler.editor.current_block_with_title(block__$1,fst_block_text);
var current_block__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,current_block,frontend.handler.editor.retract_attributes);
var new_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.db.new_block_id(),new cljs.core.Keyword("block","title","block/title",710445684),snd_block_text], null);
var next_block = frontend.handler.editor.wrap_parse_block(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(block__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108)], null)),new_m], 0)));
var sibling_QMARK_ = (function (){var or__5142__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","link","block/link",-1872399993),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991)], null));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
if(block_self_QMARK_){
return false;
} else {
return null;
}
}
})();
var container_id = (function (){var or__5142__auto____$1 = (function (){var G__66152 = new cljs.core.Keyword(null,"insert","insert",1286475395);
var G__66153 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null);
return (frontend.handler.editor.get_new_container_id.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor.get_new_container_id.cljs$core$IFn$_invoke$arity$2(G__66152,G__66153) : frontend.handler.editor.get_new_container_id.call(null,G__66152,G__66153));
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
}
})();
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),frontend.handler.editor.inserted_block_edit_fn(current_block__$1,next_block,container_id));
var result = frontend.handler.editor.outliner_insert_block_BANG_(config__$1,current_block__$1,next_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,sibling_QMARK_,next_block], null);
})());
}));
}));
}
});
frontend.handler.editor.clear_when_saved_BANG_ = (function frontend$handler$editor$clear_when_saved_BANG_(){
return frontend.commands.restore_state();
});
frontend.handler.editor.get_state = (function frontend$handler$editor$get_state(){
var vec__66154 = frontend.state.get_editor_args();
var map__66157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66154,(0),null);
var map__66157__$1 = cljs.core.__destructure_map(map__66157);
var block_parent_dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66157__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66157__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66157__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66157__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66157__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66157__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66154,(1),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66154,(2),null);
var node = goog.dom.getElement(id);
if(cljs.core.truth_(node)){
var value = frontend.handler.editor.goog$module$goog$object.get(node,"value");
var pos = frontend.util.get_selection_start(node);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"block-container","block-container",-15068235),new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550)],[format,block,config,sidebar_QMARK_,value,pos,on_hide,node,block_id,id,frontend.util.rec_get_node(node,"ls-block"),block_parent_dom_id]);
} else {
return null;
}
});
frontend.handler.editor.get_node_container_id = (function frontend$handler$editor$get_node_container_id(node){
var G__66158 = dommy.core.attr(node,"containerid");
if((G__66158 == null)){
return null;
} else {
return frontend.util.safe_parse_int(G__66158);
}
});
frontend.handler.editor.get_node_parent = (function frontend$handler$editor$get_node_parent(node){
var G__66159 = frontend.handler.editor.goog$module$goog$object.get(node,"parentNode");
if((G__66159 == null)){
return null;
} else {
return frontend.util.rec_get_node(G__66159,"ls-block");
}
});
frontend.handler.editor.get_node_prev_sibling = (function frontend$handler$editor$get_node_prev_sibling(node){
var parent = frontend.handler.editor.goog$module$goog$object.get(node,"parentNode");
if((!(dommy.core.has_class_QMARK_(parent,"blocks-list-wrap")))){
var G__66160 = parent.previousSibling;
if((G__66160 == null)){
return null;
} else {
return (dommy.utils.__GT_Array(G__66160.getElementsByClassName("ls-block"))[(0)]);
}
} else {
return node.previousSibling;
}
});
frontend.handler.editor.get_node_next_sibling = (function frontend$handler$editor$get_node_next_sibling(node){
var parent = frontend.handler.editor.goog$module$goog$object.get(node,"parentNode");
if((!(dommy.core.has_class_QMARK_(parent,"blocks-list-wrap")))){
var G__66161 = parent.nextSibling;
if((G__66161 == null)){
return null;
} else {
return (dommy.utils.__GT_Array(G__66161.getElementsByClassName("ls-block"))[(0)]);
}
} else {
return node.nextSibling;
}
});
/**
 * Indenting under a collapsed block expands it in the db, but the
 *   `:ui/collapsed-blocks` override written when collapsing it takes precedence
 *   and would keep hiding the indented blocks, unmounting the editor. Clear the
 *   override on the new parent in every view that renders `block`.
 */
frontend.handler.editor.expand_collapsed_indent_target_BANG_ = (function frontend$handler$editor$expand_collapsed_indent_target_BANG_(block){
var seq__66162 = cljs.core.seq(frontend.util.get_blocks_by_id(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
var chunk__66166 = null;
var count__66167 = (0);
var i__66168 = (0);
while(true){
if((i__66168 < count__66167)){
var node = chunk__66166.cljs$core$IIndexed$_nth$arity$2(null,i__66168);
if(dommy.core.has_class_QMARK_(node,"ls-block")){
var target = frontend.handler.editor.get_node_prev_sibling(node);
var target_id = (function (){var G__66176 = target;
var G__66176__$1 = (((G__66176 == null))?null:dommy.core.attr(G__66176,"blockid"));
if((G__66176__$1 == null)){
return null;
} else {
return cljs.core.uuid(G__66176__$1);
}
})();
var container_id = (function (){var G__66177 = target;
if((G__66177 == null)){
return null;
} else {
return frontend.handler.editor.get_node_container_id(G__66177);
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = target_id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = container_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$2(target_id,container_id) === true;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3(target_id,false,container_id);


var G__66904 = seq__66162;
var G__66905 = chunk__66166;
var G__66906 = count__66167;
var G__66907 = (i__66168 + (1));
seq__66162 = G__66904;
chunk__66166 = G__66905;
count__66167 = G__66906;
i__66168 = G__66907;
continue;
} else {
var G__66908 = seq__66162;
var G__66909 = chunk__66166;
var G__66910 = count__66167;
var G__66911 = (i__66168 + (1));
seq__66162 = G__66908;
chunk__66166 = G__66909;
count__66167 = G__66910;
i__66168 = G__66911;
continue;
}
} else {
var G__66912 = seq__66162;
var G__66913 = chunk__66166;
var G__66914 = count__66167;
var G__66915 = (i__66168 + (1));
seq__66162 = G__66912;
chunk__66166 = G__66913;
count__66167 = G__66914;
i__66168 = G__66915;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66162);
if(temp__5825__auto__){
var seq__66162__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66162__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66162__$1);
var G__66916 = cljs.core.chunk_rest(seq__66162__$1);
var G__66917 = c__5673__auto__;
var G__66918 = cljs.core.count(c__5673__auto__);
var G__66919 = (0);
seq__66162 = G__66916;
chunk__66166 = G__66917;
count__66167 = G__66918;
i__66168 = G__66919;
continue;
} else {
var node = cljs.core.first(seq__66162__$1);
if(dommy.core.has_class_QMARK_(node,"ls-block")){
var target = frontend.handler.editor.get_node_prev_sibling(node);
var target_id = (function (){var G__66178 = target;
var G__66178__$1 = (((G__66178 == null))?null:dommy.core.attr(G__66178,"blockid"));
if((G__66178__$1 == null)){
return null;
} else {
return cljs.core.uuid(G__66178__$1);
}
})();
var container_id = (function (){var G__66179 = target;
if((G__66179 == null)){
return null;
} else {
return frontend.handler.editor.get_node_container_id(G__66179);
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = target_id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = container_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$2(target_id,container_id) === true;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3(target_id,false,container_id);


var G__66920 = cljs.core.next(seq__66162__$1);
var G__66921 = null;
var G__66922 = (0);
var G__66923 = (0);
seq__66162 = G__66920;
chunk__66166 = G__66921;
count__66167 = G__66922;
i__66168 = G__66923;
continue;
} else {
var G__66924 = cljs.core.next(seq__66162__$1);
var G__66925 = null;
var G__66926 = (0);
var G__66927 = (0);
seq__66162 = G__66924;
chunk__66166 = G__66925;
count__66167 = G__66926;
i__66168 = G__66927;
continue;
}
} else {
var G__66928 = cljs.core.next(seq__66162__$1);
var G__66929 = null;
var G__66930 = (0);
var G__66931 = (0);
seq__66162 = G__66928;
chunk__66166 = G__66929;
count__66167 = G__66930;
i__66168 = G__66931;
continue;
}
}
} else {
return null;
}
}
break;
}
});
frontend.handler.editor.get_new_container_id = (function frontend$handler$editor$get_new_container_id(op,data){
var map__66180 = frontend.handler.editor.get_state();
var map__66180__$1 = cljs.core.__destructure_map(map__66180);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66180__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66180__$1,new cljs.core.Keyword(null,"block-container","block-container",-15068235));
if(cljs.core.truth_(block)){
var node = block_container;
var linked_QMARK_ = (!((dommy.core.attr(node,"originalblockid") == null)));
var G__66181 = op;
var G__66181__$1 = (((G__66181 instanceof cljs.core.Keyword))?G__66181.fqn:null);
switch (G__66181__$1) {
case "insert":
if(((linked_QMARK_) && ((!(new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060).cljs$core$IFn$_invoke$arity$1(data) === false))))){
var G__66182 = frontend.util.rec_get_node(node,"blocks-container");
if((G__66182 == null)){
return null;
} else {
return frontend.handler.editor.get_node_container_id(G__66182);
}
} else {
return null;
}

break;
case "indent":
var temp__5825__auto__ = frontend.handler.editor.get_node_prev_sibling(node);
if(cljs.core.truth_(temp__5825__auto__)){
var prev = temp__5825__auto__;
if(cljs.core.truth_(dommy.core.attr(prev,"originalblockid"))){
return frontend.handler.editor.get_node_container_id(prev);
} else {
return null;
}
} else {
return null;
}

break;
case "move-up":
var parent = frontend.handler.editor.get_node_parent(node);
var prev = (cljs.core.truth_(parent)?frontend.handler.editor.get_node_prev_sibling(parent):null);
if(cljs.core.truth_((function (){var and__5140__auto__ = prev;
if(cljs.core.truth_(and__5140__auto__)){
return dommy.core.attr(prev,"originalblockid");
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.get_node_container_id(prev);
} else {
return null;
}

break;
case "move-down":
var parent = frontend.handler.editor.get_node_parent(node);
var next = (cljs.core.truth_(parent)?frontend.handler.editor.get_node_next_sibling(parent):null);
if(cljs.core.truth_((function (){var and__5140__auto__ = next;
if(cljs.core.truth_(and__5140__auto__)){
return dommy.core.attr(next,"originalblockid");
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.get_node_container_id(next);
} else {
return null;
}

break;
case "outdent":
var temp__5825__auto__ = (function (){var G__66183 = frontend.handler.editor.goog$module$goog$object.get(node,"parentNode");
if((G__66183 == null)){
return null;
} else {
return frontend.util.rec_get_node(G__66183,"ls-block");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
if(cljs.core.truth_(dommy.core.attr(parent,"originalblockid"))){
var G__66184 = frontend.util.rec_get_node(parent,"blocks-container");
if((G__66184 == null)){
return null;
} else {
return frontend.handler.editor.get_node_container_id(G__66184);
}
} else {
return null;
}
} else {
return null;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66181__$1))));

}
} else {
return null;
}
});
/**
 * Won't save previous block content - remember to save!
 */
frontend.handler.editor.insert_new_block_BANG_ = (function frontend$handler$editor$insert_new_block_BANG_(var_args){
var G__66186 = arguments.length;
switch (G__66186) {
case 2:
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,_right_sibling){
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$3(state,null,null);
}));

(frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,block_value,_right_sibling){
if((!(frontend.config.publishing_QMARK_))){
if(cljs.core.truth_(state)){
if(frontend.handler.editor.leaf_property_value_insert_blocked_QMARK_(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(state))){
return (frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.escape_editing.call(null));
} else {
frontend.handler.editor.start_pending_new_block_BANG_();

var map__66187 = state;
var map__66187__$1 = cljs.core.__destructure_map(map__66187);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66187__$1,new cljs.core.Keyword(null,"block","block",664686210));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66187__$1,new cljs.core.Keyword(null,"value","value",305978217));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66187__$1,new cljs.core.Keyword(null,"config","config",994861415));
var value__$1 = ((typeof block_value === 'string')?block_value:value);
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var block_self_QMARK_ = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config,block_id);
var input = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(state);
var selection_start = frontend.util.get_selection_start(input);
var selection_end = frontend.util.get_selection_end(input);
var vec__66188 = frontend.handler.editor.compute_fst_snd_block_text(value__$1,selection_start,selection_end);
var fst_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66188,(0),null);
var snd_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66188,(1),null);
var insert_above_QMARK_ = ((clojure.string.blank_QMARK_(fst_block_text)) && ((!(clojure.string.blank_QMARK_(snd_block_text)))));
var block_SINGLEQUOTE_ = block;
var original_block = new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(config);
var block_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var or__5142__auto__ = (cljs.core.truth_(original_block)?(function (){var e = block_SINGLEQUOTE_;
if(((frontend.handler.editor.worker_has_children_QMARK_(e)) && (cljs.core.not(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(e))))){
return block_SINGLEQUOTE_;
} else {
return original_block;
}
})():null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block_SINGLEQUOTE_;
}
})();
var insert_fn = ((block_self_QMARK_)?frontend.handler.editor.insert_new_block_aux_BANG_:((insert_above_QMARK_)?frontend.handler.editor.insert_new_block_before_block_aux_BANG_:frontend.handler.editor.insert_new_block_aux_BANG_
));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((insert_fn.cljs$core$IFn$_invoke$arity$3 ? insert_fn.cljs$core$IFn$_invoke$arity$3(config,block_SINGLEQUOTE__SINGLEQUOTE_,value__$1) : insert_fn.call(null,config,block_SINGLEQUOTE__SINGLEQUOTE_,value__$1))),(function (insert_result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.first(insert_result)),(function (_){
return promesa.protocols._promise(frontend.handler.editor.clear_when_saved_BANG_());
}));
}));
})),(function (error){
frontend.handler.editor.clear_pending_new_block_BANG_();

throw error;
}));
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.handler.editor.insert_new_block_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.api_insert_new_block_BANG_ = (function frontend$handler$editor$api_insert_new_block_BANG_(content,p__66191){
var map__66192 = p__66191;
var map__66192__$1 = cljs.core.__destructure_map(map__66192);
var config = map__66192__$1;
var custom_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66192__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false);
var start_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"start?","start?",1440714206));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"end?","end?",-1423391609));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var other_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"other-attrs","other-attrs",-951608726));
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"page","page",849072397));
var before_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66192__$1,new cljs.core.Keyword(null,"before?","before?",765621039),false);
var edit_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66192__$1,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true);
var ordered_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082));
var skip_save_current_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66192__$1,new cljs.core.Keyword(null,"skip-save-current-block?","skip-save-current-block?",515354840));
if(cljs.core.truth_((function (){var or__5142__auto__ = page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block_uuid;
}
})())){
var before_QMARK___$1 = (cljs.core.truth_(page)?false:before_QMARK_);
var sibling_QMARK___$1 = cljs.core.boolean$(sibling_QMARK_);
var sibling_QMARK___$2 = (cljs.core.truth_(before_QMARK___$1)?true:(cljs.core.truth_(page)?false:sibling_QMARK___$1));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,(function (){var or__5142__auto__ = page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block_uuid;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?(cljs.core.truth_((logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.recycled_QMARK_.call(null,block)))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage.recycle","readonly","storage.recycle/readonly",-95866230)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671)):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(before_QMARK___$1)?(frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$2(repo,block) : frontend.handler.editor._LT_left_sibling_or_parent.call(null,repo,block)):null)),(function (left_or_parent){
return promesa.protocols._mcat(promesa.protocols._promise((((((!(sibling_QMARK___$2))) && (cljs.core.not(start_QMARK_))))?frontend.db.async._LT_get_block_sibling(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"last-child","last-child",1330670325)):null)),(function (last_block){
return promesa.protocols._promise((function (){var new_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108)], null)),new cljs.core.Keyword("block","title","block/title",710445684),content);
var new_block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_block,new cljs.core.Keyword("block","page","block/page",822314108),(cljs.core.truth_(page)?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block):frontend.handler.editor.block_page_id(new_block)));
var new_block__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.editor.wrap_parse_block(new_block__$1),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5142__auto__ = custom_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.new_block_id();
}
})());
var new_block__$3 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block__$2,other_attrs], 0));
var block_SINGLEQUOTE_ = block;
var vec__66193 = (cljs.core.truth_(before_QMARK___$1)?(function (){var sibling_QMARK___$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.block_parent_id(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_or_parent)))?false:sibling_QMARK___$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_or_parent,sibling_QMARK___$3], null);
})():((sibling_QMARK___$2)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_SINGLEQUOTE_,sibling_QMARK___$2], null):(cljs.core.truth_(start_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_SINGLEQUOTE_,false], null):(cljs.core.truth_(end_QMARK_)?(cljs.core.truth_(last_block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_block,true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_SINGLEQUOTE_,false], null)):(cljs.core.truth_(last_block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_block,true], null):(cljs.core.truth_(block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_SINGLEQUOTE_,sibling_QMARK___$2], null):null
))))));
var target_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66193,(0),null);
var sibling_QMARK___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66193,(1),null);
var edit_existing_block_QMARK_ = (function (){var and__5140__auto__ = edit_block_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = replace_empty_target_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(last_block));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var config__$1 = (function (){var G__66199 = config;
if(cljs.core.truth_((function (){var and__5140__auto__ = edit_block_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(edit_existing_block_QMARK_);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66199,new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),(function (_rows){
var G__66201 = new_block__$3;
var G__66202 = new cljs.core.Keyword(null,"max","max",61366548);
var G__66203 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66201,G__66202,G__66203) : frontend.handler.editor.edit_block_BANG_.call(null,G__66201,G__66202,G__66203));
}));
} else {
return G__66199;
}
})();
if(cljs.core.truth_(target_block)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var new_block_SINGLEQUOTE_ = ((cljs.core.seq(properties))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_block__$3,properties):new_block__$3);
return frontend.handler.editor.outliner_insert_block_BANG_(config__$1,target_block,new_block_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$3,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082),ordered_list_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),outliner_op,new cljs.core.Keyword(null,"skip-save-current-block?","skip-save-current-block?",515354840),skip_save_current_block_QMARK_], null));
})()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(edit_existing_block_QMARK_)?(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2(last_block,new cljs.core.Keyword(null,"max","max",61366548)) : frontend.handler.editor.edit_block_BANG_.call(null,last_block,new cljs.core.Keyword(null,"max","max",61366548))):null)),(function (___27434__auto____$1){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_block__$3);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
return null;
}
})());
}));
}));
}));
} else {
return null;
}
})());
}));
}));
}))):null));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.editor.get_selected_blocks = (function frontend$handler$editor$get_selected_blocks(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(frontend.state.get_selection_blocks()));
});
frontend.handler.editor.unwrap_block_results = (function frontend$handler$editor$unwrap_block_results(results){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),results));
});
frontend.handler.editor.db_based_cycle_todo_BANG_ = (function frontend$handler$editor$db_based_cycle_todo_BANG_(block){
var status_value = new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853).cljs$core$IFn$_invoke$arity$1(block);
var next_status = (function (){var G__66206 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(status_value);
var G__66206__$1 = (((G__66206 instanceof cljs.core.Keyword))?G__66206.fqn:null);
switch (G__66206__$1) {
case "logseq.property/status.todo":
return new cljs.core.Keyword("logseq.property","status.doing","logseq.property/status.doing",1840122908);

break;
case "logseq.property/status.doing":
return new cljs.core.Keyword("logseq.property","status.done","logseq.property/status.done",-1827582082);

break;
case "logseq.property/status.done":
return null;

break;
default:
return new cljs.core.Keyword("logseq.property","status.todo","logseq.property/status.todo",-1615585377);

}
})();
return frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),next_status);
});
frontend.handler.editor.cycle_todos_BANG_ = (function frontend$handler$editor$cycle_todos_BANG_(){
var temp__5825__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5825__auto__){
var blocks = temp__5825__auto__;
var ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66207_SHARP_){
var temp__5825__auto____$1 = dommy.core.attr(p1__66207_SHARP_,"blockid");
if(cljs.core.truth_(temp__5825__auto____$1)){
var id = temp__5825__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
var seq__66214 = cljs.core.seq(frontend.handler.editor.unwrap_block_results(results));
var chunk__66215 = null;
var count__66216 = (0);
var i__66217 = (0);
while(true){
if((i__66217 < count__66216)){
var block = chunk__66215.cljs$core$IIndexed$_nth$arity$2(null,i__66217);
if(cljs.core.truth_(block)){
frontend.handler.editor.db_based_cycle_todo_BANG_(block);
} else {
}


var G__66942 = seq__66214;
var G__66943 = chunk__66215;
var G__66944 = count__66216;
var G__66945 = (i__66217 + (1));
seq__66214 = G__66942;
chunk__66215 = G__66943;
count__66216 = G__66944;
i__66217 = G__66945;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__66214);
if(temp__5825__auto____$1){
var seq__66214__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__66214__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66214__$1);
var G__66946 = cljs.core.chunk_rest(seq__66214__$1);
var G__66947 = c__5673__auto__;
var G__66948 = cljs.core.count(c__5673__auto__);
var G__66949 = (0);
seq__66214 = G__66946;
chunk__66215 = G__66947;
count__66216 = G__66948;
i__66217 = G__66949;
continue;
} else {
var block = cljs.core.first(seq__66214__$1);
if(cljs.core.truth_(block)){
frontend.handler.editor.db_based_cycle_todo_BANG_(block);
} else {
}


var G__66950 = cljs.core.next(seq__66214__$1);
var G__66951 = null;
var G__66952 = (0);
var G__66953 = (0);
seq__66214 = G__66950;
chunk__66215 = G__66951;
count__66216 = G__66952;
i__66217 = G__66953;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var _STAR_outliner_ops_STAR__orig_val__66218 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66219 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66219);

try{var seq__66220_66954 = cljs.core.seq(frontend.handler.editor.unwrap_block_results(results));
var chunk__66221_66955 = null;
var count__66222_66956 = (0);
var i__66223_66957 = (0);
while(true){
if((i__66223_66957 < count__66222_66956)){
var block_66958 = chunk__66221_66955.cljs$core$IIndexed$_nth$arity$2(null,i__66223_66957);
if(cljs.core.truth_(block_66958)){
frontend.handler.editor.db_based_cycle_todo_BANG_(block_66958);
} else {
}


var G__66959 = seq__66220_66954;
var G__66960 = chunk__66221_66955;
var G__66961 = count__66222_66956;
var G__66962 = (i__66223_66957 + (1));
seq__66220_66954 = G__66959;
chunk__66221_66955 = G__66960;
count__66222_66956 = G__66961;
i__66223_66957 = G__66962;
continue;
} else {
var temp__5825__auto___66963__$1 = cljs.core.seq(seq__66220_66954);
if(temp__5825__auto___66963__$1){
var seq__66220_66964__$1 = temp__5825__auto___66963__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66220_66964__$1)){
var c__5673__auto___66965 = cljs.core.chunk_first(seq__66220_66964__$1);
var G__66966 = cljs.core.chunk_rest(seq__66220_66964__$1);
var G__66967 = c__5673__auto___66965;
var G__66968 = cljs.core.count(c__5673__auto___66965);
var G__66969 = (0);
seq__66220_66954 = G__66966;
chunk__66221_66955 = G__66967;
count__66222_66956 = G__66968;
i__66223_66957 = G__66969;
continue;
} else {
var block_66970 = cljs.core.first(seq__66220_66964__$1);
if(cljs.core.truth_(block_66970)){
frontend.handler.editor.db_based_cycle_todo_BANG_(block_66970);
} else {
}


var G__66971 = cljs.core.next(seq__66220_66964__$1);
var G__66972 = null;
var G__66973 = (0);
var G__66974 = (0);
seq__66220_66954 = G__66971;
chunk__66221_66955 = G__66972;
count__66222_66956 = G__66973;
i__66223_66957 = G__66974;
continue;
}
} else {
}
}
break;
}

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"cycle-todos","cycle-todos",-1473215654)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66218);
}}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.editor.cycle_todo_BANG_ = (function frontend$handler$editor$cycle_todo_BANG_(){
if(cljs.core.truth_(frontend.state.get_editor_action())){
return null;
} else {
var temp__5823__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5823__auto__){
var blocks = temp__5823__auto__;
return frontend.handler.editor.cycle_todos_BANG_();
} else {
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var edit_block = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?(function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.handler.editor.db_based_cycle_todo_BANG_(block);
} else {
var _STAR_outliner_ops_STAR__orig_val__66229 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66230 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66230);

try{frontend.handler.editor.db_based_cycle_todo_BANG_(block);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"cycle-todos","cycle-todos",-1473215654)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66229);
}}
})():null));
}));
}));
} else {
return null;
}
}
}
});
frontend.handler.editor.delete_block_aux_BANG_ = (function frontend$handler$editor$delete_block_aux_BANG_(var_args){
var G__66236 = arguments.length;
switch (G__66236) {
case 1:
return frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$2(block,null);
}));

(frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block,edit_block_f){
if(cljs.core.truth_(block)){
var blocks = frontend.handler.block.get_top_level_blocks(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);
} else {
var _STAR_outliner_ops_STAR__orig_val__66237 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66238 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66238);

try{frontend.modules.outliner.op.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,(function (){var G__66239 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1(block)], 0));
if(cljs.core.truth_(edit_block_f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66239,new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),(function (_rows){
return (edit_block_f.cljs$core$IFn$_invoke$arity$0 ? edit_block_f.cljs$core$IFn$_invoke$arity$0() : edit_block_f.call(null));
}));
} else {
return G__66239;
}
})());
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66237);
}}
} else {
return null;
}
}));

(frontend.handler.editor.delete_block_aux_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.previous_block_edit = (function frontend$handler$editor$previous_block_edit(block,value,container_id,node){
if(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev-block","prev-block",116851678),block,new cljs.core.Keyword(null,"new-value","new-value",1087038368),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"edit-block-f","edit-block-f",1407202990),(cljs.core.truth_(frontend.util.entity.journal_QMARK_(block))?(function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = node;
if(cljs.core.truth_(and__5140__auto__)){
return node.isConnected;
} else {
return and__5140__auto__;
}
})())){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
} else {
return null;
}
}):(function (){
var G__66240 = block;
var G__66241 = new cljs.core.Keyword(null,"max","max",61366548);
var G__66242 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false,new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false,new cljs.core.Keyword(null,"skip-load?","skip-load?",1029467451),true], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66240,G__66241,G__66242) : frontend.handler.editor.edit_block_BANG_.call(null,G__66240,G__66241,G__66242));
}))], null);
} else {
var original_content = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())))?frontend.state.get_edit_content():new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(original_content)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
var tail_len = cljs.core.count(value);
var pos = cljs.core.max.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(original_content)?frontend.handler.editor.goog$module$goog$object.get(logseq.graph_parser.utf8.encode(original_content),"length"):(0)),(0));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prev-block","prev-block",116851678),block,new cljs.core.Keyword(null,"new-content","new-content",525291180),new_value,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"edit-block-f","edit-block-f",1407202990),(function (){
var G__66243 = block;
var G__66244 = pos;
var G__66245 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),new_value,new cljs.core.Keyword(null,"tail-len","tail-len",699304522),tail_len,new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false,new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false,new cljs.core.Keyword(null,"skip-load?","skip-load?",1029467451),true], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66243,G__66244,G__66245) : frontend.handler.editor.edit_block_BANG_.call(null,G__66243,G__66244,G__66245));
})], null);
}
});
frontend.handler.editor.previous_block_node = (function frontend$handler$editor$previous_block_node(block_container,config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config))){
return frontend.util.get_prev_block_non_collapsed.cljs$core$IFn$_invoke$arity$2(block_container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),frontend.util.rec_get_blocks_container(block_container)], null));
} else {
return frontend.util.get_prev_block_non_collapsed_non_embed(block_container);
}
});
frontend.handler.editor.mounted_block = (function frontend$handler$editor$mounted_block(node){
if(cljs.core.truth_(node)){
return frontend.handler.editor.goog$module$goog$object.get(node,"__logseqBlock");
} else {
return null;
}
});
frontend.handler.editor.move_to_prev_block = (function frontend$handler$editor$move_to_prev_block(repo,sibling_block,value){
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return sibling_block;
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5825__auto__)){
var sibling_block_id = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = frontend.handler.editor.mounted_block(sibling_block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.uuid(sibling_block_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
}
})()),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?frontend.handler.editor.previous_block_edit(block,value,(function (){var G__66247 = dommy.core.attr(sibling_block,"containerid");
if((G__66247 == null)){
return null;
} else {
return frontend.util.safe_parse_int(G__66247);
}
})(),sibling_block):null));
}));
}));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.edit_previous_window_block_fn = (function frontend$handler$editor$edit_previous_window_block_fn(sibling_block){
var temp__5825__auto__ = (function (){var G__66261 = dommy.core.attr(sibling_block,"blockid");
if((G__66261 == null)){
return null;
} else {
return cljs.core.uuid(G__66261);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
var container_id = (function (){var G__66262 = dommy.core.attr(sibling_block,"containerid");
if((G__66262 == null)){
return null;
} else {
return frontend.util.safe_parse_int(G__66262);
}
})();
var mounted = frontend.handler.editor.mounted_block(sibling_block);
return (function (rows){
var temp__5825__auto____$1 = (function (){var or__5142__auto__ = cljs.core.some((function (p1__66252_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__66252_SHARP_))){
return p1__66252_SHARP_;
} else {
return null;
}
}),rows);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return mounted;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var block = temp__5825__auto____$1;
var temp__5825__auto____$2 = new cljs.core.Keyword(null,"edit-block-f","edit-block-f",1407202990).cljs$core$IFn$_invoke$arity$1(frontend.handler.editor.previous_block_edit(block,"",container_id,sibling_block));
if(cljs.core.truth_(temp__5825__auto____$2)){
var edit_block_f = temp__5825__auto____$2;
return (edit_block_f.cljs$core$IFn$_invoke$arity$0 ? edit_block_f.cljs$core$IFn$_invoke$arity$0() : edit_block_f.call(null));
} else {
return null;
}
} else {
return null;
}
});
} else {
return null;
}
});
frontend.handler.editor.loaded_block_edit = (function frontend$handler$editor$loaded_block_edit(block,value,container_id){
if(cljs.core.truth_(block)){
return frontend.handler.editor.previous_block_edit(block,value,container_id,null);
} else {
return null;
}
});
frontend.handler.editor.one_page_another_block = (function frontend$handler$editor$one_page_another_block(block1,block2){
var and__5140__auto__ = (!(cljs.core.every_QMARK_(frontend.util.entity.page_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block1,block2], null))));
if(and__5140__auto__){
var or__5142__auto__ = frontend.util.entity.page_QMARK_(block1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.entity.page_QMARK_(block2);
}
} else {
return and__5140__auto__;
}
});
frontend.handler.editor.editor_block_preserved_on_empty_title_merge_QMARK_ = (function frontend$handler$editor$editor_block_preserved_on_empty_title_merge_QMARK_(block){
var or__5142__auto__ = (logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.asset_QMARK_.call(null,block));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.block.comments_model.comments_area_QMARK_(block);
}
});
frontend.handler.editor.block_ref_key = (function frontend$handler$editor$block_ref_key(block_ref){
if(cljs.core.map_QMARK_(block_ref)){
var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_ref);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_ref);
}
} else {
return block_ref;
}
});
frontend.handler.editor.mounted_left_sibling_or_parent = (function frontend$handler$editor$mounted_left_sibling_or_parent(block,previous_block){
var parent_key = frontend.handler.editor.block_ref_key(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_((function (){var and__5140__auto__ = parent_key;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = previous_block;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.block_ref_key(block),frontend.handler.editor.block_ref_key(previous_block))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_key,frontend.handler.editor.block_ref_key(previous_block))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_key,frontend.handler.editor.block_ref_key(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(previous_block)))))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return previous_block;
} else {
return null;
}
});
frontend.handler.editor._LT_left_sibling_or_parent = (function frontend$handler$editor$_LT_left_sibling_or_parent(var_args){
var G__66276 = arguments.length;
switch (G__66276) {
case 2:
return frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$2 = (function (repo,block){
return frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$3(repo,block,null);
}));

(frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$3 = (function (repo,block,previous_block){
var or__5142__auto__ = frontend.handler.editor.mounted_left_sibling_or_parent(block,previous_block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
return frontend.db.async._LT_get_block_sibling(repo,block_id,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return null;
}
})()),(function (left){
return promesa.protocols._promise((function (){var or__5142__auto____$1 = left;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
}
})());
}));
}));
}
}));

(frontend.handler.editor._LT_left_sibling_or_parent.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.delete_block_with_previous_BANG_ = (function frontend$handler$editor$delete_block_with_previous_BANG_(p__66278){
var map__66279 = p__66278;
var map__66279__$1 = cljs.core.__destructure_map(map__66279);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"block","block",664686210));
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var next_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"next-block","next-block",-53854328));
var prev_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"prev-block","prev-block",116851678));
var new_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"new-content","new-content",525291180));
var edit_block_f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"edit-block-f","edit-block-f",1407202990));
var input_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"input-empty?","input-empty?",-1700462189));
var delete_concat_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"delete-concat?","delete-concat?",48076305));
var concat_prev_block_QMARK_ = cljs.core.boolean$((function (){var and__5140__auto__ = prev_block;
if(cljs.core.truth_(and__5140__auto__)){
return new_content;
} else {
return and__5140__auto__;
}
})());
if(cljs.core.truth_((function (){var and__5140__auto__ = prev_block;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(prev_block);
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(prev_block),frontend.handler.editor.block_parent_id(block));
if(and__5140__auto____$2){
var G__66280 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block);
return (logseq.db.hidden_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.hidden_QMARK_.cljs$core$IFn$_invoke$arity$1(G__66280) : logseq.db.hidden_QMARK_.call(null,G__66280));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = concat_prev_block_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = input_empty_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = cljs.core.not(frontend.handler.editor.editor_block_preserved_on_empty_title_merge_QMARK_(prev_block));
if(and__5140__auto____$2){
return delete_concat_QMARK_;
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var children = frontend.handler.editor.worker_children(current_block);
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
if(cljs.core.seq(children)){
frontend.modules.outliner.op.move_blocks_BANG_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66277_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__66277_SHARP_),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(next_block));
}),children),next_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(current_block),frontend.handler.editor.block_parent_id(next_block))){
frontend.modules.outliner.op.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_block], null),current_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null));
} else {
}

return frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(current_block);
} else {
var _STAR_outliner_ops_STAR__orig_val__66281 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66282 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66282);

try{if(cljs.core.seq(children)){
frontend.modules.outliner.op.move_blocks_BANG_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66277_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__66277_SHARP_),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(next_block));
}),children),next_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(current_block),frontend.handler.editor.block_parent_id(next_block))){
frontend.modules.outliner.op.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_block], null),current_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null));
} else {
}

frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(current_block);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1(current_block)], 0)),new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),(function (_rows){
var G__66283 = next_block;
var G__66284 = (0);
var G__66285 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false,new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false,new cljs.core.Keyword(null,"skip-load?","skip-load?",1029467451),true], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66283,G__66284,G__66285) : frontend.handler.editor.edit_block_BANG_.call(null,G__66283,G__66284,G__66285));
})));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66281);
}}
} else {
if(((concat_prev_block_QMARK_) && (((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(prev_block))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(prev_block),frontend.handler.editor.block_parent_id(block))) && (((cljs.core.not(frontend.handler.editor.editor_block_preserved_on_empty_title_merge_QMARK_(prev_block))) && (cljs.core.not(delete_concat_QMARK_)))))))))){
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.block_parent_id(block),frontend.handler.editor.block_parent_id(prev_block))){
} else {
frontend.modules.outliner.op.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),prev_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null));
}

return frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(prev_block);
} else {
var _STAR_outliner_ops_STAR__orig_val__66286 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66287 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66287);

try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.block_parent_id(block),frontend.handler.editor.block_parent_id(prev_block))){
} else {
frontend.modules.outliner.op.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),prev_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null));
}

frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(prev_block);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1(prev_block)], 0)),new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),(function (_rows){
var G__66288 = frontend.handler.editor.current_block_with_title(current_block,new_content);
var G__66289 = (0);
var G__66290 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false,new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false,new cljs.core.Keyword(null,"skip-load?","skip-load?",1029467451),true], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66288,G__66289,G__66290) : frontend.handler.editor.edit_block_BANG_.call(null,G__66288,G__66289,G__66290));
})));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66286);
}}
} else {
if(concat_prev_block_QMARK_){
var preserve_prev_block_QMARK_ = frontend.handler.editor.editor_block_preserved_on_empty_title_merge_QMARK_(prev_block);
var delete_target = (cljs.core.truth_(delete_concat_QMARK_)?next_block:(cljs.core.truth_((function (){var and__5140__auto__ = preserve_prev_block_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = next_block;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(prev_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?next_block:block
));
var children = frontend.handler.editor.worker_children(delete_target);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.mobile.util.mobile_focus_hidden_input()),(function (___27434__auto__){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
if(cljs.core.seq(children)){
frontend.modules.outliner.op.move_blocks_BANG_(children,prev_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
} else {
}

frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(delete_target);

var G__66291 = prev_block;
var G__66292 = new_content;
var G__66293 = (function (){var G__66294 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(preserve_prev_block_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66294,new cljs.core.Keyword(null,"retract-attributes?","retract-attributes?",188593703),false);
} else {
return G__66294;
}
})();
return (frontend.handler.editor.save_block_aux_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.save_block_aux_BANG_.cljs$core$IFn$_invoke$arity$3(G__66291,G__66292,G__66293) : frontend.handler.editor.save_block_aux_BANG_.call(null,G__66291,G__66292,G__66293));
} else {
var _STAR_outliner_ops_STAR__orig_val__66295 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66296 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66296);

try{if(cljs.core.seq(children)){
frontend.modules.outliner.op.move_blocks_BANG_(children,prev_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
} else {
}

frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(delete_target);

var G__66297_66991 = prev_block;
var G__66298_66992 = new_content;
var G__66299_66993 = (function (){var G__66300 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(preserve_prev_block_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66300,new cljs.core.Keyword(null,"retract-attributes?","retract-attributes?",188593703),false);
} else {
return G__66300;
}
})();
(frontend.handler.editor.save_block_aux_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.save_block_aux_BANG_.cljs$core$IFn$_invoke$arity$3(G__66297_66991,G__66298_66992,G__66299_66993) : frontend.handler.editor.save_block_aux_BANG_.call(null,G__66297_66991,G__66298_66992,G__66299_66993));

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,(function (){var G__66301 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1(delete_target)], 0));
if(cljs.core.truth_(edit_block_f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66301,new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),(function (_rows){
return (edit_block_f.cljs$core$IFn$_invoke$arity$0 ? edit_block_f.cljs$core$IFn$_invoke$arity$0() : edit_block_f.call(null));
}));
} else {
return G__66301;
}
})());
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66295);
}}
})());
}));
}));
} else {
return frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$2(block,edit_block_f);

}
}
}
}
});
frontend.handler.editor.delete_block_inner_BANG_ = (function frontend$handler$editor$delete_block_inner_BANG_(repo,p__66302){
var map__66303 = p__66302;
var map__66303__$1 = cljs.core.__destructure_map(map__66303);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"value","value",305978217));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"config","config",994861415));
var block_container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"block-container","block-container",-15068235));
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var next_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"next-block","next-block",-53854328));
var delete_concat_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"delete-concat?","delete-concat?",48076305));
if(cljs.core.truth_((function (){var and__5140__auto__ = block_id;
if(cljs.core.truth_(and__5140__auto__)){
return (((!(frontend.components.block.comments_model.protected_comment_block_QMARK_((function (){var or__5142__auto__ = current_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})())))) && (((cljs.core.not((function (){var and__5140__auto____$2 = delete_concat_QMARK_;
if(cljs.core.truth_(and__5140__auto____$2)){
return frontend.components.block.comments_model.protected_comment_block_QMARK_(next_block);
} else {
return and__5140__auto____$2;
}
})())) && (cljs.core.not(frontend.handler.editor.one_page_another_block(current_block,next_block))))));
} else {
return and__5140__auto__;
}
})())){
var input_empty_QMARK_ = clojure.string.blank_QMARK_(frontend.state.get_edit_content());
var loaded_block = (cljs.core.truth_(delete_concat_QMARK_)?current_block:null);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.loaded_block_edit(loaded_block,value,new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config))),(function (loaded_previous_edit){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = current_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})()),(function (editor_block){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(delete_concat_QMARK_)?null:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_with_children.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),true], null)], 0))),(function (result){
return promesa.protocols._promise(frontend.handler.editor.worker_block_with_children(result));
}));
})))),(function (persisted_source){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(delete_concat_QMARK_)?next_block:(cljs.core.truth_(persisted_source)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([persisted_source,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(editor_block,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725)], 0))], 0)):editor_block))),(function (source_block){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(source_block))?(function (){var current_block__$1 = (function (){var or__5142__auto__ = current_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return source_block;
}
})();
var sibling_or_parent_node = frontend.handler.editor.previous_block_node(block_container,config);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = loaded_previous_edit;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.move_to_prev_block(repo,sibling_or_parent_node,value);
}
})()),(function (p__66304){
var map__66305 = p__66304;
var map__66305__$1 = cljs.core.__destructure_map(map__66305);
var prev_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66305__$1,new cljs.core.Keyword(null,"prev-block","prev-block",116851678));
var new_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66305__$1,new cljs.core.Keyword(null,"new-content","new-content",525291180));
var edit_block_f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66305__$1,new cljs.core.Keyword(null,"edit-block-f","edit-block-f",1407202990));
return promesa.protocols._promise((cljs.core.truth_(frontend.handler.editor.boundary_merge_allowed_QMARK_(source_block,prev_block))?frontend.handler.editor.delete_block_with_previous_BANG_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"block","block",664686210),source_block,new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block__$1,new cljs.core.Keyword(null,"next-block","next-block",-53854328),next_block,new cljs.core.Keyword(null,"prev-block","prev-block",116851678),prev_block,new cljs.core.Keyword(null,"new-content","new-content",525291180),new_content,new cljs.core.Keyword(null,"edit-block-f","edit-block-f",1407202990),edit_block_f,new cljs.core.Keyword(null,"input-empty?","input-empty?",-1700462189),input_empty_QMARK_,new cljs.core.Keyword(null,"delete-concat?","delete-concat?",48076305),delete_concat_QMARK_], null)):null));
}));
}));
})():null));
}));
}));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.editor.move_blocks_BANG_ = (function frontend$handler$editor$move_blocks_BANG_(blocks,target,opts){
if(frontend.components.block.comments_model.move_allowed_QMARK_.cljs$core$IFn$_invoke$arity$3(blocks,target,opts)){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.some(logseq.db.recycled_QMARK_,blocks);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(target) : logseq.db.recycled_QMARK_.call(null,target));
}
})())){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage.recycle","readonly","storage.recycle/readonly",-95866230)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.move_blocks_BANG_(blocks,target,opts);
} else {
var _STAR_outliner_ops_STAR__orig_val__66306 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66307 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66307);

try{frontend.modules.outliner.op.move_blocks_BANG_(blocks,target,opts);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks))], 0)));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66306);
}}
}
} else {
return null;
}
});
frontend.handler.editor.move_selected_blocks = (function frontend$handler$editor$move_selected_blocks(e){
frontend.util.stop(e);

var block_ids = cljs.core.seq(frontend.state.get_selection_block_ids());
var edit_block = ((block_ids)?null:frontend.state.get_edit_block());
if(cljs.core.truth_((function (){var or__5142__auto__ = block_ids;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return edit_block;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(edit_block)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edit_block], null):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),block_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._promise(frontend.handler.editor.unwrap_block_results(results));
}));
})))),(function (loaded_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.vec(frontend.handler.block.get_top_level_blocks(loaded_blocks))),(function (blocks){
return promesa.protocols._promise(frontend.handler.route.go_to_search_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"trigger","trigger",103466139),(function (chosen){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));

frontend.state.clear_selection_BANG_();

return frontend.handler.editor.move_blocks_BANG_(blocks,new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(chosen),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),true], null));
})], null)));
}));
}));
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","no-block-selected-warning","editor/no-block-selected-warning",-1520973528)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
frontend.handler.editor.delete_block_BANG_ = (function frontend$handler$editor$delete_block_BANG_(repo){
return frontend.handler.editor.delete_block_inner_BANG_(repo,frontend.handler.editor.get_state());
});
frontend.handler.editor.delete_blocks_BANG_ = (function frontend$handler$editor$delete_blocks_BANG_(_repo,block_uuids,blocks,dom_blocks,mobile_action_bar_QMARK_){
if(cljs.core.seq(block_uuids)){
var uuid__GT_dom_block = cljs.core.zipmap(block_uuids,dom_blocks);
var block = cljs.core.first(blocks);
var block_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuid__GT_dom_block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var sibling_block = (cljs.core.truth_(block_parent)?frontend.util.get_prev_block_non_collapsed_non_embed(block_parent):null);
var blocks_SINGLEQUOTE_ = frontend.handler.block.get_top_level_blocks(blocks);
var mobile_QMARK_ = frontend.util.capacitor_QMARK_();
var edit_block_fn = (cljs.core.truth_((function (){var and__5140__auto__ = sibling_block;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(mobile_QMARK_);
} else {
return and__5140__auto__;
}
})())?frontend.handler.editor.edit_previous_window_block_fn(sibling_block):null);
var journals = (function (){var and__5140__auto__ = mobile_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.util.entity.journal_QMARK_,blocks_SINGLEQUOTE_);
} else {
return and__5140__auto__;
}
})();
var blocks__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),journals)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b));
}),blocks);
if(((cljs.core.seq(journals)) || (cljs.core.seq(blocks__$1)))){
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
if(cljs.core.seq(blocks__$1)){
frontend.modules.outliner.op.delete_blocks_BANG_(blocks__$1,null);
} else {
}

if(cljs.core.seq(journals)){
var seq__66308 = cljs.core.seq(journals);
var chunk__66309 = null;
var count__66310 = (0);
var i__66311 = (0);
while(true){
if((i__66311 < count__66310)){
var journal = chunk__66309.cljs$core$IIndexed$_nth$arity$2(null,i__66311);
frontend.modules.outliner.op.delete_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(journal));


var G__66995 = seq__66308;
var G__66996 = chunk__66309;
var G__66997 = count__66310;
var G__66998 = (i__66311 + (1));
seq__66308 = G__66995;
chunk__66309 = G__66996;
count__66310 = G__66997;
i__66311 = G__66998;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66308);
if(temp__5825__auto__){
var seq__66308__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66308__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66308__$1);
var G__66999 = cljs.core.chunk_rest(seq__66308__$1);
var G__67000 = c__5673__auto__;
var G__67001 = cljs.core.count(c__5673__auto__);
var G__67002 = (0);
seq__66308 = G__66999;
chunk__66309 = G__67000;
count__66310 = G__67001;
i__66311 = G__67002;
continue;
} else {
var journal = cljs.core.first(seq__66308__$1);
frontend.modules.outliner.op.delete_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(journal));


var G__67004 = cljs.core.next(seq__66308__$1);
var G__67005 = null;
var G__67006 = (0);
var G__67007 = (0);
seq__66308 = G__67004;
chunk__66309 = G__67005;
count__66310 = G__67006;
i__66311 = G__67007;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
var _STAR_outliner_ops_STAR__orig_val__66312 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66313 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66313);

try{if(cljs.core.seq(blocks__$1)){
frontend.modules.outliner.op.delete_blocks_BANG_(blocks__$1,null);
} else {
}

if(cljs.core.seq(journals)){
var seq__66314_67008 = cljs.core.seq(journals);
var chunk__66315_67009 = null;
var count__66316_67010 = (0);
var i__66317_67011 = (0);
while(true){
if((i__66317_67011 < count__66316_67010)){
var journal_67012 = chunk__66315_67009.cljs$core$IIndexed$_nth$arity$2(null,i__66317_67011);
frontend.modules.outliner.op.delete_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(journal_67012));


var G__67013 = seq__66314_67008;
var G__67014 = chunk__66315_67009;
var G__67015 = count__66316_67010;
var G__67016 = (i__66317_67011 + (1));
seq__66314_67008 = G__67013;
chunk__66315_67009 = G__67014;
count__66316_67010 = G__67015;
i__66317_67011 = G__67016;
continue;
} else {
var temp__5825__auto___67017 = cljs.core.seq(seq__66314_67008);
if(temp__5825__auto___67017){
var seq__66314_67018__$1 = temp__5825__auto___67017;
if(cljs.core.chunked_seq_QMARK_(seq__66314_67018__$1)){
var c__5673__auto___67019 = cljs.core.chunk_first(seq__66314_67018__$1);
var G__67020 = cljs.core.chunk_rest(seq__66314_67018__$1);
var G__67021 = c__5673__auto___67019;
var G__67022 = cljs.core.count(c__5673__auto___67019);
var G__67023 = (0);
seq__66314_67008 = G__67020;
chunk__66315_67009 = G__67021;
count__66316_67010 = G__67022;
i__66317_67011 = G__67023;
continue;
} else {
var journal_67024 = cljs.core.first(seq__66314_67018__$1);
frontend.modules.outliner.op.delete_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(journal_67024));


var G__67025 = cljs.core.next(seq__66314_67018__$1);
var G__67026 = null;
var G__67027 = (0);
var G__67028 = (0);
seq__66314_67008 = G__67025;
chunk__66315_67009 = G__67026;
count__66316_67010 = G__67027;
i__66317_67011 = G__67028;
continue;
}
} else {
}
}
break;
}
} else {
}

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,(function (){var G__66318 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.Keyword(null,"mobile-action-bar?","mobile-action-bar?",921992889),mobile_action_bar_QMARK_], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1))], 0));
if(cljs.core.truth_(edit_block_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66318,new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),edit_block_fn);
} else {
return G__66318;
}
})());
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66312);
}}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.copy_block_ref_BANG_ = (function frontend$handler$editor$copy_block_ref_BANG_(var_args){
var G__66321 = arguments.length;
switch (G__66321) {
case 1:
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__66319_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66319_SHARP_));
}));
}));

(frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,tap_clipboard){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.save_current_block_BANG_.call(null))),(function (___27434__auto__){
return promesa.protocols._promise(frontend.util.copy_to_clipboard_BANG_((tap_clipboard.cljs$core$IFn$_invoke$arity$1 ? tap_clipboard.cljs$core$IFn$_invoke$arity$1(block_id) : tap_clipboard.call(null,block_id))));
}));
}));
}));

(frontend.handler.editor.copy_block_ref_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.select_block_BANG_ = (function frontend$handler$editor$select_block_BANG_(block_uuid){
return frontend.handler.block.select_block_BANG_(block_uuid);
});
frontend.handler.editor.compose_copied_blocks_contents = (function frontend$handler$editor$compose_copied_blocks_contents(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67030 = arguments.length;
var i__5877__auto___67031 = (0);
while(true){
if((i__5877__auto___67031 < len__5876__auto___67030)){
args__5882__auto__.push((arguments[i__5877__auto___67031]));

var G__67032 = (i__5877__auto___67031 + (1));
i__5877__auto___67031 = G__67032;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.editor.compose_copied_blocks_contents.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.editor.compose_copied_blocks_contents.cljs$core$IFn$_invoke$arity$variadic = (function (repo,block_ids,p__66325){
var map__66326 = p__66325;
var map__66326__$1 = cljs.core.__destructure_map(map__66326);
var opts = map__66326__$1;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_summaries(repo,block_ids)),(function (blocks){
return promesa.protocols._promise(((cljs.core.not(cljs.core.seq(blocks)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"",cljs.core.PersistentVector.EMPTY], null):(function (){var top_level_blocks = frontend.handler.block.get_top_level_blocks(blocks);
var top_level_block_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),top_level_blocks);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.text.export_blocks_as_markdown(repo,top_level_block_uuids,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"quick-copy?","quick-copy?",970915425)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent-style","indent-style",855468755),frontend.state.get_export_block_text_indent_style(),new cljs.core.Keyword(null,"remove-options","remove-options",768737839),cljs.core.set(frontend.state.get_export_block_text_remove_options())], null)], 0)))),(function (content){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [top_level_block_uuids,content,blocks], null));
}));
}));
})()));
}));
}));
}));

(frontend.handler.editor.compose_copied_blocks_contents.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.editor.compose_copied_blocks_contents.cljs$lang$applyTo = (function (seq66322){
var G__66323 = cljs.core.first(seq66322);
var seq66322__$1 = cljs.core.next(seq66322);
var G__66324 = cljs.core.first(seq66322__$1);
var seq66322__$2 = cljs.core.next(seq66322__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66323,G__66324,seq66322__$2);
}));

frontend.handler.editor.copy_cached_selection_text_BANG_ = (function frontend$handler$editor$copy_cached_selection_text_BANG_(block_uuids){
var blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__66327_SHARP_){
var snapshot = frontend.db.subs.block_snapshot(p1__66327_SHARP_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(snapshot))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(snapshot);
} else {
return null;
}
}),block_uuids);
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,blocks)){
var content = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),frontend.handler.block.get_top_level_blocks(blocks))));
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
return frontend.util.copy_to_clipboard_BANG_(content);
}
} else {
return null;
}
});
frontend.handler.editor._LT_sorted_block_and_children = (function frontend$handler$editor$_LT_sorted_block_and_children(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67033 = arguments.length;
var i__5877__auto___67034 = (0);
while(true){
if((i__5877__auto___67034 < len__5876__auto___67033)){
args__5882__auto__.push((arguments[i__5877__auto___67034]));

var G__67035 = (i__5877__auto___67034 + (1));
i__5877__auto___67034 = G__67035;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.editor._LT_sorted_block_and_children.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.editor._LT_sorted_block_and_children.cljs$core$IFn$_invoke$arity$variadic = (function (repo,block,p__66331){
var map__66332 = p__66331;
var map__66332__$1 = cljs.core.__destructure_map(map__66332);
var opts = map__66332__$1;
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_with_children.cljs$core$IFn$_invoke$arity$variadic(repo,block_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0))),(function (result){
return promesa.protocols._promise((function (){var root = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(result);
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(frontend.util.entity.page_QMARK_(root))){
return children;
} else {
return cljs.core.cons(root,children);
}
})());
}));
}));
} else {
return null;
}
}));

(frontend.handler.editor._LT_sorted_block_and_children.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.editor._LT_sorted_block_and_children.cljs$lang$applyTo = (function (seq66328){
var G__66329 = cljs.core.first(seq66328);
var seq66328__$1 = cljs.core.next(seq66328);
var G__66330 = cljs.core.first(seq66328__$1);
var seq66328__$2 = cljs.core.next(seq66328__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66329,G__66330,seq66328__$2);
}));

frontend.handler.editor._LT_get_all_blocks_by_ids = (function frontend$handler$editor$_LT_get_all_blocks_by_ids(repo,ids){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(repo,ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (loaded_blocks){
return promesa.protocols._promise((function (){var loaded_blocks__$1 = frontend.handler.editor.unwrap_block_results(loaded_blocks);
var blocks_by_uuid = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),loaded_blocks__$1),loaded_blocks__$1);
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_66337,reject_fn_66336){
var loop_fn_66333 = (function frontend$handler$editor$_LT_get_all_blocks_by_ids_$_loop_fn_66333(ids__$1,result,seen){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_66334,err_66335){
if((!((err_66335 == null)))){
return (reject_fn_66336.cljs$core$IFn$_invoke$arity$1 ? reject_fn_66336.cljs$core$IFn$_invoke$arity$1(err_66335) : reject_fn_66336.call(null,err_66335));
} else {
if(promesa.core.recur_QMARK_(res_66334)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend$handler$editor$_LT_get_all_blocks_by_ids_$_loop_fn_66333,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(res_66334));
})));

return null;
} else {
return (resolve_fn_66337.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_66337.cljs$core$IFn$_invoke$arity$1(res_66334) : resolve_fn_66337.call(null,res_66334));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(ids__$1),(function (ids__$2){
return promesa.protocols._mcat(promesa.protocols._promise(result),(function (result__$1){
return promesa.protocols._mcat(promesa.protocols._promise(seen),(function (seen__$1){
return promesa.protocols._promise(((cljs.core.seq(ids__$2))?(function (){var block_id = cljs.core.first(ids__$2);
if(cljs.core.contains_QMARK_(seen__$1,block_id)){
return promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(ids__$2),result__$1,seen__$1], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_sorted_block_and_children.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks_by_uuid,block_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"all?","all?",1103779750),true,new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),true,new cljs.core.Keyword(null,"include-property-block?","include-property-block?",-211563499),true,new cljs.core.Keyword(null,"render-data?","render-data?",493490624),null], null)], 0))),(function (blocks){
return promesa.protocols._promise(promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(ids__$2),cljs.core.into.cljs$core$IFn$_invoke$arity$2(result__$1,blocks),cljs.core.into.cljs$core$IFn$_invoke$arity$3(seen__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),blocks)], null)));
}));
}));
}
})():result__$1));
}));
}));
}));
})));
});
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return loop_fn_66333(ids,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY);
})));
}));
})());
}));
}));
});
frontend.handler.editor.copied_block_derived_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword("logseq.property.view","type-ident","logseq.property.view/type-ident",-293234207),null,new cljs.core.Keyword("logseq.property.view","type-id","logseq.property.view/type-id",-1609325695),null,new cljs.core.Keyword("block","link-id","block/link-id",-94551135),null,new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090),null,new cljs.core.Keyword("logseq.property.recycle","original-page-title","logseq.property.recycle/original-page-title",1351501156),null,new cljs.core.Keyword("logseq.property","query-block?","logseq.property/query-block?",591561444),null,new cljs.core.Keyword("block","alias-source-page-class?","block/alias-source-page-class?",-1466843803),null,new cljs.core.Keyword("logseq.property","views","logseq.property/views",426707495),null,new cljs.core.Keyword("block","page-uuid","block/page-uuid",1191907496),null,new cljs.core.Keyword("block","parent-id","block/parent-id",320526152),null,new cljs.core.Keyword("block","parent-uuid","block/parent-uuid",-1973648822),null,new cljs.core.Keyword("block","page-name","block/page-name",780489999),null,new cljs.core.Keyword("logseq.property","view-for-id","logseq.property/view-for-id",640196239),null,new cljs.core.Keyword("logseq.property","query-id","logseq.property/query-id",-1763590126),null,new cljs.core.Keyword("logseq.property.view","gallery-asset-property-ident","logseq.property.view/gallery-asset-property-ident",1795561010),null,new cljs.core.Keyword("block","page-id","block/page-id",-1366221549),null,new cljs.core.Keyword("block","alias-source-page-id","block/alias-source-page-id",-1864867404),null,new cljs.core.Keyword("logseq.property","description-title","logseq.property/description-title",-495212427),null,new cljs.core.Keyword("block","comment-threads","block/comment-threads",1910898038),null,new cljs.core.Keyword("block","alias-source-page-uuid","block/alias-source-page-uuid",1120495486),null], null), null);
frontend.handler.editor.copied_block_canonical_attrs = (function frontend$handler$editor$copied_block_canonical_attrs(block){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__66338){
var vec__66339 = p__66338;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66339,(0),null);
return ((cljs.core.contains_QMARK_(frontend.handler.editor.copied_block_derived_attrs,attr)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("block.temp",cljs.core.namespace(attr))));
})),block);
});
frontend.handler.editor.blocks_for_clipboard = (function frontend$handler$editor$blocks_for_clipboard(blocks){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
var b = frontend.handler.editor.copied_block_canonical_attrs(block);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__66343){
var vec__66344 = p__66343;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66344,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(v);
if(and__5140__auto__){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v)], null):((((cljs.core.coll_QMARK_(v)) && (cljs.core.every_QMARK_((function (p1__66342_SHARP_){
var and__5140__auto____$1 = cljs.core.map_QMARK_(p1__66342_SHARP_);
if(and__5140__auto____$1){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__66342_SHARP_);
} else {
return and__5140__auto____$1;
}
}),v))))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(i)], null);
}),v)):v
))], null);
})),b),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b));
}),blocks);
});
frontend.handler.editor.selection_copy_ids = (function frontend$handler$editor$selection_copy_ids(selected_blocks,selected_ids){
return ((cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.util.entity.as_block_map),selected_blocks))) || (((cljs.core.seq(selected_ids)) || (cljs.core.seq(frontend.state.get_selection_block_ids())))));
});
frontend.handler.editor.copy_selection_blocks = (function frontend$handler$editor$copy_selection_blocks(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67037 = arguments.length;
var i__5877__auto___67038 = (0);
while(true){
if((i__5877__auto___67038 < len__5876__auto___67037)){
args__5882__auto__.push((arguments[i__5877__auto___67038]));

var G__67039 = (i__5877__auto___67038 + (1));
i__5877__auto___67038 = G__67039;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.editor.copy_selection_blocks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.editor.copy_selection_blocks.cljs$core$IFn$_invoke$arity$variadic = (function (html_QMARK_,p__66349){
var map__66350 = p__66349;
var map__66350__$1 = cljs.core.__destructure_map(map__66350);
var opts = map__66350__$1;
var selected_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66350__$1,new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948));
var selected_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66350__$1,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66350__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var repo = frontend.state.get_current_repo();
var ids = frontend.handler.editor.selection_copy_ids(selected_blocks,selected_ids);
var block_op = (function (){var or__5142__auto__ = op;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"copy","copy",-1077617309);
}
})();
if(cljs.core.seq(ids)){
frontend.handler.editor.copy_cached_selection_text_BANG_(ids);
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.compose_copied_blocks_contents.cljs$core$IFn$_invoke$arity$variadic(repo,ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),new cljs.core.Keyword(null,"op","op",-1882987955)], 0)),new cljs.core.Keyword(null,"quick-copy?","quick-copy?",970915425),true)], 0))),(function (p__66351){
var vec__66352 = p__66351;
var top_level_block_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66352,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66352,(1),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66352,(2),null);
return promesa.protocols._promise(((cljs.core.seq(blocks))?(function (){
frontend.util.copy_to_clipboard_BANG_(content);

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_get_all_blocks_by_ids(repo,top_level_block_uuids)),(function (copied_source_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.html.export_blocks_as_html(repo,top_level_block_uuids,null)),(function (html){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.common.copy_to_clipboard_without_id_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(repo,content,(cljs.core.truth_(html_QMARK_)?html:null),frontend.handler.editor.blocks_for_clipboard(copied_source_blocks),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op","op",-1882987955),block_op], 0))),(function (___27434__auto__){
return promesa.protocols._promise(frontend.state.set_block_op_type_BANG_(block_op));
}));
}));
}));
}));
})()
:null));
}));
}));
}));

(frontend.handler.editor.copy_selection_blocks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.editor.copy_selection_blocks.cljs$lang$applyTo = (function (seq66347){
var G__66348 = cljs.core.first(seq66347);
var seq66347__$1 = cljs.core.next(seq66347);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66348,seq66347__$1);
}));

frontend.handler.editor.copy_block_refs = (function frontend$handler$editor$copy_block_refs(){
var temp__5825__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5825__auto__){
var selected_blocks = temp__5825__auto__;
var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
var temp__5825__auto____$1 = frontend.util.selection_node_block_id(node);
if(cljs.core.truth_(temp__5825__auto____$1)){
var id = temp__5825__auto____$1;
var level = dommy.core.attr(frontend.util.unwrap_property_value_container(node),"level");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"level","level",1290497552),(level | 0)], null);
} else {
return null;
}
}),selected_blocks)));
var first_block = cljs.core.first(blocks);
var first_root_level_index = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__66355){
var vec__66356 = p__66355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66356,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66356,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block),(1));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,blocks)));
var root_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(first_block));
var adjusted_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__66359){
var map__66360 = p__66359;
var map__66360__$1 = cljs.core.__destructure_map(map__66360);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66360__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66360__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"level","level",1290497552),(((index < first_root_level_index))?(((level < cljs.core.deref(root_level)))?(function (){
cljs.core.reset_BANG_(root_level,level);

return (1);
})()
:((level - cljs.core.deref(root_level)) + (1))):level)], null);
}),blocks);
var copy_str = (function (){var G__66361 = adjusted_blocks;
var G__66361__$1 = (((G__66361 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66362){
var map__66363 = p__66362;
var map__66363__$1 = cljs.core.__destructure_map(map__66363);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66363__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66363__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level - (1)),"\t")))+"- "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(id) : frontend.util.ref.__GT_page_ref.call(null,id))));
}),G__66361));
if((G__66361__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",G__66361__$1);
}
})();
return frontend.util.copy_to_clipboard_BANG_(copy_str);
} else {
return null;
}
});
frontend.handler.editor.get_selected_toplevel_block_uuids = (function frontend$handler$editor$get_selected_toplevel_block_uuids(){
var temp__5825__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5825__auto__){
var blocks = temp__5825__auto__;
var repo = frontend.state.get_current_repo();
var block_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.util.selection_node_block_id,blocks)));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(repo,block_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.unwrap_block_results(results)),(function (blocks__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.block_page_id(cljs.core.first(blocks__$1))),(function (page_id){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var G__66364 = frontend.handler.editor.block_page_id(block);
if((G__66364 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__66364,page_id);
}
}),blocks__$1)),(function (blocks_STAR_){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.handler.block.get_top_level_blocks(blocks_STAR_)));
}));
}));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.editor.cut_selection_blocks = (function frontend$handler$editor$cut_selection_blocks(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67041 = arguments.length;
var i__5877__auto___67042 = (0);
while(true){
if((i__5877__auto___67042 < len__5876__auto___67041)){
args__5882__auto__.push((arguments[i__5877__auto___67042]));

var G__67043 = (i__5877__auto___67042 + (1));
i__5877__auto___67042 = G__67043;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.editor.cut_selection_blocks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.editor.cut_selection_blocks.cljs$core$IFn$_invoke$arity$variadic = (function (copy_QMARK_,p__66367){
var map__66368 = p__66367;
var map__66368__$1 = cljs.core.__destructure_map(map__66368);
var mobile_action_bar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66368__$1,new cljs.core.Keyword(null,"mobile-action-bar?","mobile-action-bar?",921992889));
var selected_ids = frontend.state.get_selection_block_ids();
var selected_blocks = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(block,"data-query"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(block,"data-transclude"))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.unwrap_property_value_container,frontend.handler.editor.get_selected_blocks())))));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(copy_QMARK_)?frontend.handler.editor.copy_selection_blocks.cljs$core$IFn$_invoke$arity$variadic(true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),selected_ids,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cut","cut",-1042666209)], 0)):null)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_block_op_type_BANG_(new cljs.core.Keyword(null,"cut","cut",-1042666209))),(function (___27434__auto____$1){
return promesa.protocols._promise((function (){var temp__5825__auto__ = selected_blocks;
if(temp__5825__auto__){
var blocks = temp__5825__auto__;
var dom_blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(block,"data-query"));
}),blocks);
if(cljs.core.seq(dom_blocks)){
var repo = frontend.state.get_current_repo();
var block_uuids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.util.selection_node_block_id,dom_blocks));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(repo,block_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._promise((function (){var blocks__$1 = frontend.handler.editor.unwrap_block_results(results);
var top_level_blocks = frontend.handler.block.get_top_level_blocks(blocks__$1);
if(cljs.core.every_QMARK_(logseq.db.recycled_QMARK_,top_level_blocks)){
return null;
} else {
if(cljs.core.seq(top_level_blocks)){
return frontend.handler.editor.delete_blocks_BANG_(repo,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),top_level_blocks),top_level_blocks,dom_blocks,mobile_action_bar_QMARK_);
} else {
return null;
}
}
})());
}));
}));
} else {
return null;
}
} else {
return null;
}
})());
}));
}));
}));
}));

(frontend.handler.editor.cut_selection_blocks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.editor.cut_selection_blocks.cljs$lang$applyTo = (function (seq66365){
var G__66366 = cljs.core.first(seq66365);
var seq66365__$1 = cljs.core.next(seq66365);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66366,seq66365__$1);
}));

/**
 * Didn't use link/plain-link as it is incorrectly detects words as urls.
 */
frontend.handler.editor.url_regex = /[^\s\(\[]+:\/\/[^\s\)\]]+/;
frontend.handler.editor.extract_nearest_link_from_text = (function frontend$handler$editor$extract_nearest_link_from_text(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67047 = arguments.length;
var i__5877__auto___67048 = (0);
while(true){
if((i__5877__auto___67048 < len__5876__auto___67047)){
args__5882__auto__.push((arguments[i__5877__auto___67048]));

var G__67049 = (i__5877__auto___67048 + (1));
i__5877__auto___67048 = G__67049;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic = (function (text,pos,additional_patterns){
var page_pattern = /\[\[([^\]]+)]]/;
var tag_pattern = /#\S+/;
var page_matches = frontend.util.re_pos(page_pattern,text);
var block_matches = frontend.util.re_pos(logseq.common.util.block_ref.block_ref_re,text);
var tag_matches = frontend.util.re_pos(tag_pattern,text);
var additional_matches = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__66369_SHARP_){
return frontend.util.re_pos(p1__66369_SHARP_,text);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([additional_patterns], 0));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(page_matches,block_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_matches,additional_matches], 0)));
var vec__66374 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p__66377){
var vec__66378 = p__66377;
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66378,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66378,(1),null);
var end_pos = (start_pos + cljs.core.count(content));
if((pos < start_pos)){
return (pos - start_pos);
} else {
if((pos > end_pos)){
return (end_pos - pos);
} else {
return (0);

}
}
}),cljs.core._GT_,matches));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66374,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66374,(1),null);
if(cljs.core.truth_(match)){
if(cljs.core.truth_(cljs.core.some((function (p1__66370_SHARP_){
return cljs.core.re_find(p1__66370_SHARP_,match);
}),additional_patterns))){
return match;
} else {
if(clojure.string.starts_with_QMARK_(match,"#")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(1),cljs.core.count(match));
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(2),(cljs.core.count(match) - (2)));

}
}
} else {
return null;
}
}));

(frontend.handler.editor.extract_nearest_link_from_text.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.editor.extract_nearest_link_from_text.cljs$lang$applyTo = (function (seq66371){
var G__66372 = cljs.core.first(seq66371);
var seq66371__$1 = cljs.core.next(seq66371);
var G__66373 = cljs.core.first(seq66371__$1);
var seq66371__$2 = cljs.core.next(seq66371__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66372,G__66373,seq66371__$2);
}));

/**
 * Return the nearest page-name (not dereferenced, may be an alias), block, tag or url
 */
frontend.handler.editor.get_nearest_page_or_url = (function frontend$handler$editor$get_nearest_page_or_url(){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
var temp__5825__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto____$1)){
var edit_id = temp__5825__auto____$1;
var temp__5825__auto____$2 = goog.dom.getElement(edit_id);
if(cljs.core.truth_(temp__5825__auto____$2)){
var input = temp__5825__auto____$2;
var temp__5825__auto____$3 = frontend.util.cursor.pos(input);
if(cljs.core.truth_(temp__5825__auto____$3)){
var pos = temp__5825__auto____$3;
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
return frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic(value,pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.editor.url_regex], 0));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Return the nearest page-name (not dereferenced, may be an alias), block or tag
 */
frontend.handler.editor.get_nearest_page = (function frontend$handler$editor$get_nearest_page(){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
var temp__5825__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto____$1)){
var edit_id = temp__5825__auto____$1;
var temp__5825__auto____$2 = goog.dom.getElement(edit_id);
if(cljs.core.truth_(temp__5825__auto____$2)){
var input = temp__5825__auto____$2;
var temp__5825__auto____$3 = frontend.util.cursor.pos(input);
if(cljs.core.truth_(temp__5825__auto____$3)){
var pos = temp__5825__auto____$3;
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
return frontend.handler.editor.extract_nearest_link_from_text(value,pos);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor._LT_follow_page_link_BANG_ = (function frontend$handler$editor$_LT_follow_page_link_BANG_(page){
frontend.state.clear_edit_BANG_();

if(cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.uuid_string_QMARK_.call(null,page)))){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page_entity){
return promesa.protocols._promise((cljs.core.truth_(page_entity)?frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page):frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),page], null))));
}));
}));
}
});
frontend.handler.editor.follow_link_under_cursor_BANG_ = (function frontend$handler$editor$follow_link_under_cursor_BANG_(){
var temp__5825__auto__ = frontend.handler.editor.get_nearest_page_or_url();
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
if(clojure.string.blank_QMARK_(page)){
return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.clear_editor_action_BANG_()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.save_current_block_BANG_.call(null))),(function (___27434__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(cljs.core.re_find(frontend.handler.editor.url_regex,page))?window.open(page):frontend.handler.editor._LT_follow_page_link_BANG_(page)));
}));
}));
}));
}
} else {
return null;
}
});
frontend.handler.editor.sidebar_link_lookup_ref = (function frontend$handler$editor$sidebar_link_lookup_ref(page_name){
if(cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.uuid_string_QMARK_.call(null,page_name)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(page_name)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
}
});
frontend.handler.editor.open_link_in_sidebar_BANG_ = (function frontend$handler$editor$open_link_in_sidebar_BANG_(){
var temp__5825__auto__ = frontend.handler.editor.get_nearest_page();
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
var page_name = clojure.string.lower_case(page);
var block_QMARK_ = (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.uuid_string_QMARK_.call(null,page_name));
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),frontend.handler.editor.sidebar_link_lookup_ref(page_name)], 0))),(function (page__$1){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1);
if(cljs.core.truth_(temp__5825__auto____$1)){
var db_id = temp__5825__auto____$1;
return frontend.state.sidebar_add_block_BANG_(repo,db_id,(cljs.core.truth_(block_QMARK_)?new cljs.core.Keyword(null,"block","block",664686210):new cljs.core.Keyword(null,"page","page",849072397)));
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.editor.zoom_in_BANG_ = (function frontend$handler$editor$zoom_in_BANG_(){
if(frontend.state.editing_QMARK_()){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
frontend.state.clear_editor_action_BANG_();

frontend.state.set_editing_block_id_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473),id], null));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.save_current_block_BANG_.call(null))),(function (___27434__auto__){
return promesa.protocols._promise(frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(id));
}));
}));
} else {
return null;
}
} else {
return window.history.forward();
}
});
frontend.handler.editor.zoom_out_BANG_ = (function frontend$handler$editor$zoom_out_BANG_(){
if(frontend.state.editing_QMARK_()){
var repo = frontend.state.get_current_repo();
var page = frontend.state.get_current_page();
var block_id = (function (){var and__5140__auto__ = typeof page === 'string';
if(and__5140__auto__){
return cljs.core.parse_uuid(page);
} else {
return and__5140__auto__;
}
})();
frontend.state.clear_editor_action_BANG_();

var saved = (frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.save_current_block_BANG_.call(null));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(saved),(function (_){
return promesa.protocols._promise((cljs.core.truth_(block_id)?(function (){
frontend.state.set_editing_block_id_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())], null));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_parents(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(1))),(function (block_parents){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.first(block_parents)),(function (block_parent){
return promesa.protocols._promise((function (){var temp__5823__auto__ = (function (){var and__5140__auto__ = (new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block_parent) == null);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_parent);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(id);
} else {
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var page_id = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,page_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page__$1){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page__$1);
if(cljs.core.truth_(temp__5825__auto____$1)){
var page_uuid = temp__5825__auto____$1;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_uuid);
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
}
})());
}));
}));
}));
}));
})()
:null));
}));
}));
} else {
return window.history.back();
}
});
frontend.handler.editor.cut_block_BANG_ = (function frontend$handler$editor$cut_block_BANG_(block_id){
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.compose_copied_blocks_contents(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null))),(function (p__66381){
var vec__66382 = p__66381;
var _top_level_block_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66382,(0),null);
var md_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66382,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.html.export_blocks_as_html(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),null)),(function (html){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_get_all_blocks_by_ids(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null))),(function (copied_source_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.common.copy_to_clipboard_without_id_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(repo,md_content,html,frontend.handler.editor.blocks_for_clipboard(copied_source_blocks),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cut","cut",-1042666209)], 0))),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_block_op_type_BANG_(new cljs.core.Keyword(null,"cut","cut",-1042666209))),(function (___27434__auto____$1){
return promesa.protocols._promise(frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(block));
}));
}));
}));
}));
}));
})):null));
}));
}));
});
frontend.handler.editor.selection_node_block_id = (function frontend$handler$editor$selection_node_block_id(node){
var or__5142__auto__ = frontend.util.selection_node_block_id(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var id = ((typeof node === 'string')?(function (){var G__66385 = node;
if((G__66385 == null)){
return null;
} else {
return clojure.string.replace(G__66385,/^ls-block-/,"");
}
})():(cljs.core.truth_((function (){var G__66386 = node;
if((G__66386 == null)){
return null;
} else {
return G__66386.getAttribute;
}
})())?(function (){var G__66387 = node;
var G__66387__$1 = (((G__66387 == null))?null:dommy.core.attr(G__66387,"id"));
if((G__66387__$1 == null)){
return null;
} else {
return clojure.string.replace(G__66387__$1,/^ls-block-/,"");
}
})():null));
if(cljs.core.truth_((function (){var and__5140__auto__ = typeof id === 'string';
if(and__5140__auto__){
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(id) : frontend.util.uuid_string_QMARK_.call(null,id));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.uuid(id);
} else {
return null;
}
}
});
frontend.handler.editor.selection_node_for_block_id = (function frontend$handler$editor$selection_node_for_block_id(block_id){
var or__5142__auto__ = cljs.core.first(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector((frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("[blockid='%s']",block_id) : frontend.util.format.call(null,"[blockid='%s']",block_id))))));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var node = document.createElement("div");
node.setAttribute("blockid",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)));

node.setAttribute("id",(""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)));

return node;
}
});
frontend.handler.editor.selection_blocks_by_block_ids = (function frontend$handler$editor$selection_blocks_by_block_ids(block_ids,start_node,end_node){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(block_ids);
if(and__5140__auto__){
return frontend.components.block.selection.block_id_range(block_ids,frontend.handler.editor.selection_node_block_id(start_node),frontend.handler.editor.selection_node_block_id(end_node));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var range = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(range),new cljs.core.Keyword(null,"block-ids","block-ids",557945592),new cljs.core.Keyword(null,"block-ids","block-ids",557945592).cljs$core$IFn$_invoke$arity$1(range),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.selection_node_for_block_id,new cljs.core.Keyword(null,"block-ids","block-ids",557945592).cljs$core$IFn$_invoke$arity$1(range))], null);
} else {
return null;
}
});
frontend.handler.editor.highlight_selection_area_BANG_ = (function frontend$handler$editor$highlight_selection_area_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67050 = arguments.length;
var i__5877__auto___67051 = (0);
while(true){
if((i__5877__auto___67051 < len__5876__auto___67050)){
args__5882__auto__.push((arguments[i__5877__auto___67051]));

var G__67052 = (i__5877__auto___67051 + (1));
i__5877__auto___67051 = G__67052;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (end_block_id,block_dom_element,p__66391){
var map__66392 = p__66391;
var map__66392__$1 = cljs.core.__destructure_map(map__66392);
var append_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66392__$1,new cljs.core.Keyword(null,"append?","append?",123923917));
var block_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66392__$1,new cljs.core.Keyword(null,"block-ids","block-ids",557945592));
var temp__5825__auto__ = frontend.state.get_selection_start_block_or_first();
if(cljs.core.truth_(temp__5825__auto__)){
var start_node = temp__5825__auto__;
var end_block_node = block_dom_element;
var select_direction = frontend.state.get_selection_direction();
var selected_blocks = frontend.state.get_unsorted_selection_blocks();
var block_id_set = cljs.core.set(block_ids);
var boundary_id = cljs.core.some(block_id_set,cljs.core.reverse(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.selection_node_block_id,selected_blocks)));
var appended_selection = (cljs.core.truth_((function (){var and__5140__auto__ = append_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return boundary_id;
} else {
return and__5140__auto__;
}
})())?frontend.handler.editor.selection_blocks_by_block_ids(block_ids,frontend.handler.editor.selection_node_for_block_id(boundary_id),end_block_node):null);
var selection = frontend.handler.editor.selection_blocks_by_block_ids(block_ids,start_node,end_block_node);
var last_node = cljs.core.last(selected_blocks);
var latest_visible_block = (function (){var or__5142__auto__ = last_node;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return start_node;
}
})();
var latest_block_id = (cljs.core.truth_(latest_visible_block)?latest_visible_block.id:null);
if(cljs.core.truth_(selection)){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(selection),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(selection));
} else {
if(cljs.core.truth_(appended_selection)){
var map__66393 = appended_selection;
var map__66393__$1 = cljs.core.__destructure_map(map__66393);
var block_ids__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66393__$1,new cljs.core.Keyword(null,"block-ids","block-ids",557945592));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66393__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var selected_block_ids = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.selection_node_block_id,selected_blocks);
var block_ids__$2 = frontend.components.block.selection.unselected_block_ids(selected_block_ids,cljs.core.rest(block_ids__$1));
frontend.state.clear_edit_BANG_();

if(cljs.core.seq(block_ids__$2)){
return frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.selection_node_for_block_id,block_ids__$2),(function (){var or__5142__auto__ = select_direction;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return direction;
}
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = start_node;
if(cljs.core.truth_(and__5140__auto__)){
return end_block_node;
} else {
return and__5140__auto__;
}
})())){
var blocks = frontend.util.get_nodes_between_two_nodes(start_node,end_block_node,"ls-block");
var direction = frontend.util.get_direction_between_two_nodes(start_node,end_block_node,"ls-block");
var blocks__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113)))?cljs.core.reverse(blocks):blocks);
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks__$1,direction);
} else {
if(cljs.core.truth_(latest_visible_block)){
var blocks = frontend.util.get_nodes_between_two_nodes(latest_visible_block,end_block_node,"ls-block");
var direction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(latest_block_id,end_block_id))?select_direction:frontend.util.get_direction_between_two_nodes(latest_visible_block,end_block_node,"ls-block"));
var blocks__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113)))?cljs.core.reverse(frontend.util.sort_by_height(blocks)):frontend.util.sort_by_height(blocks));
if(cljs.core.truth_(append_QMARK_)){
frontend.state.clear_edit_BANG_();

if(cljs.core.truth_((function (){var and__5140__auto__ = select_direction;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(direction,select_direction);
} else {
return and__5140__auto__;
}
})())){
return frontend.state.drop_selection_blocks_starts_with_BANG_(end_block_node);
} else {
return frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2(blocks__$1,direction);
}
} else {
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks__$1,direction);
}
} else {
return null;
}
}
}
}
} else {
return null;
}
}));

(frontend.handler.editor.highlight_selection_area_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.editor.highlight_selection_area_BANG_.cljs$lang$applyTo = (function (seq66388){
var G__66389 = cljs.core.first(seq66388);
var seq66388__$1 = cljs.core.next(seq66388);
var G__66390 = cljs.core.first(seq66388__$1);
var seq66388__$2 = cljs.core.next(seq66388__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66389,G__66390,seq66388__$2);
}));

if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_action_bar_timeout !== 'undefined')){
} else {
frontend.handler.editor._STAR_action_bar_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.editor.popup_exists_QMARK_ = (function frontend$handler$editor$popup_exists_QMARK_(id){
var G__66395 = logseq.shui.popup.core.get_popups();
if((G__66395 == null)){
return null;
} else {
return cljs.core.some((function (p1__66394_SHARP_){
var G__66396 = p1__66394_SHARP_;
var G__66396__$1 = (((G__66396 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__66396));
var G__66396__$2 = (((G__66396__$1 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66396__$1)));
if((G__66396__$2 == null)){
return null;
} else {
return clojure.string.includes_QMARK_(G__66396__$2,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
}
}),G__66395);
}
});
frontend.handler.editor.dialog_exists_QMARK_ = (function frontend$handler$editor$dialog_exists_QMARK_(id){
return logseq.shui.dialog.core.get_dialog(id);
});
frontend.handler.editor.show_action_bar_BANG_ = (function frontend$handler$editor$show_action_bar_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67053 = arguments.length;
var i__5877__auto___67054 = (0);
while(true){
if((i__5877__auto___67054 < len__5876__auto___67053)){
args__5882__auto__.push((arguments[i__5877__auto___67054]));

var G__67055 = (i__5877__auto___67054 + (1));
i__5877__auto___67054 = G__67055;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.handler.editor.show_action_bar_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.handler.editor.show_action_bar_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__66398){
var map__66399 = p__66398;
var map__66399__$1 = cljs.core.__destructure_map(map__66399);
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66399__$1,new cljs.core.Keyword(null,"delay","delay",-574225219),(200));
if(cljs.core.truth_(frontend.handler.editor.popup_exists_QMARK_(new cljs.core.Keyword(null,"selection-action-bar","selection-action-bar",885868555)))){
return null;
} else {
var temp__5825__auto___67056 = cljs.core.deref(frontend.handler.editor._STAR_action_bar_timeout);
if(cljs.core.truth_(temp__5825__auto___67056)){
var timeout_67057 = temp__5825__auto___67056;
clearTimeout(timeout_67057);
} else {
}

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));

if(cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return dommy.core.has_class_QMARK_(b,"ls-table-cell");
}),frontend.state.get_selection_blocks()))){
var timeout = setTimeout((function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-action-bar","editor/show-action-bar",-1302945332)], null));
}),delay);
return cljs.core.reset_BANG_(frontend.handler.editor._STAR_action_bar_timeout,timeout);
} else {
return null;
}
}
}));

(frontend.handler.editor.show_action_bar_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.handler.editor.show_action_bar_BANG_.cljs$lang$applyTo = (function (seq66397){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66397));
}));

/**
 * Whether the editor open now is `input-id`, the one an exit started from.
 *   An exit saves the block first, and the save waits for the worker: a click
 *   meanwhile opens another block's editor, which the exit must leave open.
 */
frontend.handler.editor.still_editing_QMARK_ = (function frontend$handler$editor$still_editing_QMARK_(input_id){
return (((input_id == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_id,frontend.state.get_edit_input_id())));
});
frontend.handler.editor.select_block_up_down = (function frontend$handler$editor$select_block_up_down(direction){
if(frontend.state.editing_QMARK_()){
var temp__5825__auto___67058 = frontend.state.get_editor_block_container();
if(cljs.core.truth_(temp__5825__auto___67058)){
var element_67059 = temp__5825__auto___67058;
if(cljs.core.truth_(element_67059)){
var input_id_67060 = frontend.state.get_edit_input_id();
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.save_current_block_BANG_.call(null))),(function (___27434__auto__){
return promesa.protocols._promise(((frontend.handler.editor.still_editing_QMARK_(input_id_67060))?(function (){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(element_67059);

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element_67059], null));
})()
:null));
}));
}));
} else {
}
} else {
}
} else {
if(((frontend.state.selection_QMARK_()) && (((1) === cljs.core.count(frontend.state.get_selection_blocks()))))){
var f_67061 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:(function (block,_opts){
return frontend.util.get_next_block_non_collapsed_skip(block);
}));
var element_67062 = (function (){var G__66400 = cljs.core.first(frontend.state.get_selection_blocks());
var G__66401 = f_67061;
var G__66402 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up-down?","up-down?",1084256379),true,new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"exclude-property?","exclude-property?",1621722390),true], null);
return (frontend.handler.editor.navigable_sibling_block.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.navigable_sibling_block.cljs$core$IFn$_invoke$arity$3(G__66400,G__66401,G__66402) : frontend.handler.editor.navigable_sibling_block.call(null,G__66400,G__66401,G__66402));
})();
if(cljs.core.truth_(element_67062)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(element_67062);

frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2(element_67062,direction);
} else {
}
} else {
if(((frontend.state.selection_QMARK_()) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,frontend.state.get_selection_direction())))){
var f_67063 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:(function (block,_opts){
return frontend.util.get_next_block_non_collapsed_skip(block);
}));
var first_last_67064 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.first:cljs.core.last);
var element_67065 = (function (){var G__66403 = (function (){var G__66406 = frontend.state.get_selection_blocks();
return (first_last_67064.cljs$core$IFn$_invoke$arity$1 ? first_last_67064.cljs$core$IFn$_invoke$arity$1(G__66406) : first_last_67064.call(null,G__66406));
})();
var G__66404 = f_67063;
var G__66405 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up-down?","up-down?",1084256379),true,new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"exclude-property?","exclude-property?",1621722390),true], null);
return (frontend.handler.editor.navigable_sibling_block.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.navigable_sibling_block.cljs$core$IFn$_invoke$arity$3(G__66403,G__66404,G__66405) : frontend.handler.editor.navigable_sibling_block.call(null,G__66403,G__66404,G__66405));
})();
if(cljs.core.truth_(element_67065)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(element_67065);

frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2(element_67065,direction);
} else {
}
} else {
if(frontend.state.selection_QMARK_()){
var f_67066 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed);
var last_first_67067 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.last:cljs.core.first);
var element_67068 = (function (){var G__66407 = (function (){var G__66410 = frontend.state.get_selection_blocks();
return (last_first_67067.cljs$core$IFn$_invoke$arity$1 ? last_first_67067.cljs$core$IFn$_invoke$arity$1(G__66410) : last_first_67067.call(null,G__66410));
})();
var G__66408 = f_67066;
var G__66409 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up-down?","up-down?",1084256379),true,new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"exclude-property?","exclude-property?",1621722390),true], null);
return (frontend.handler.editor.navigable_sibling_block.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.navigable_sibling_block.cljs$core$IFn$_invoke$arity$3(G__66407,G__66408,G__66409) : frontend.handler.editor.navigable_sibling_block.call(null,G__66407,G__66408,G__66409));
})();
if(cljs.core.truth_(element_67068)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(element_67068);

frontend.state.drop_last_selection_block_BANG_();
} else {
}
} else {
}
}
}
}

frontend.handler.editor.show_action_bar_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delay","delay",-574225219),(200)], null)], 0));

return null;
});
frontend.handler.editor.on_select_block = (function frontend$handler$editor$on_select_block(direction){
return (function (_event){
return frontend.handler.editor.select_block_up_down(direction);
});
});
frontend.handler.editor.save_block_aux_BANG_ = (function frontend$handler$editor$save_block_aux_BANG_(block,value,opts){
var entity = block;
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.built_in_QMARK_.call(null,entity)));
} else {
return and__5140__auto__;
}
})())){
var value__$1 = clojure.string.trim(value);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3(block,value__$1,opts);
} else {
return null;
}
});
frontend.handler.editor.save_block_BANG_ = (function frontend$handler$editor$save_block_BANG_(var_args){
var G__66412 = arguments.length;
switch (G__66412) {
case 3:
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo,block_or_uuid,content){
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4(repo,block_or_uuid,content,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (repo,block_or_uuid,content,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((((cljs.core.uuid_QMARK_(block_or_uuid)) || (typeof block_or_uuid === 'string')))?frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_or_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)):block_or_uuid)),(function (block){
return promesa.protocols._promise(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null),content));
}));
}));
}));

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__66413,value){
var map__66414 = p__66413;
var map__66414__$1 = cljs.core.__destructure_map(map__66414);
var _state = map__66414__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66414__$1,new cljs.core.Keyword(null,"block","block",664686210));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66414__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66414__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var repo__$1 = (function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = repo__$1;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.save_block_aux_BANG_(block,value,opts);
} else {
return null;
}
}));

(frontend.handler.editor.save_block_BANG_.cljs$lang$maxFixedArity = 4);

if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_auto_save_timeout !== 'undefined')){
} else {
frontend.handler.editor._STAR_auto_save_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.editor.clear_block_auto_save_timeout_BANG_ = (function frontend$handler$editor$clear_block_auto_save_timeout_BANG_(){
if(cljs.core.truth_(cljs.core.deref(frontend.handler.editor._STAR_auto_save_timeout))){
return clearTimeout(cljs.core.deref(frontend.handler.editor._STAR_auto_save_timeout));
} else {
return null;
}
});
frontend.handler.editor.editor_input_value = (function frontend$handler$editor$editor_input_value(input_id){
var temp__5825__auto__ = (function (){var and__5140__auto__ = input_id;
if(cljs.core.truth_(and__5140__auto__)){
return goog.dom.getElement(input_id);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var elem = temp__5825__auto__;
return frontend.handler.editor.goog$module$goog$object.get(elem,"value");
} else {
return null;
}
});
frontend.handler.editor.current_editor_value = (function frontend$handler$editor$current_editor_value(input_id,current_block,edit_block){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block))){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(current_block);
} else {
return frontend.handler.editor.editor_input_value(input_id);
}
});
frontend.handler.editor.save_current_block_BANG_ = (function frontend$handler$editor$save_current_block_BANG_(var_args){
var G__66416 = arguments.length;
switch (G__66416) {
case 0:
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__66417){
var map__66418 = p__66417;
var map__66418__$1 = cljs.core.__destructure_map(map__66418);
var opts = map__66418__$1;
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66418__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var flush_input_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66418__$1,new cljs.core.Keyword(null,"flush-input?","flush-input?",691997124));
frontend.handler.editor.clear_block_auto_save_timeout_BANG_();

if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.state.editor_in_composition_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core.not(flush_input_QMARK_);
if(and__5140__auto__){
return frontend.state.get_editor_action();
} else {
return and__5140__auto__;
}
}
})())){
return null;
} else {
if(cljs.core.truth_(frontend.state.get_current_repo())){
try{var input_id = frontend.state.get_edit_input_id();
var block = frontend.state.get_edit_block();
var value = (cljs.core.truth_(flush_input_QMARK_)?frontend.handler.editor.editor_input_value(input_id):frontend.handler.editor.current_editor_value(input_id,current_block,block));
if(cljs.core.truth_(value)){
return frontend.handler.editor.save_block_aux_BANG_(block,value,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"flush-input?","flush-input?",691997124)));
} else {
return null;
}
}catch (e66419){var error = e66419;
console.error(error);

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.editor",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-block-failed","save-block-failed",610684026),error,new cljs.core.Keyword(null,"line","line",212345235),1692], null)),null);
} else {
return null;
}
}} else {
return null;
}
}
}));

(frontend.handler.editor.save_current_block_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Closes any open editor popup so the raw textarea value is persisted,
 * then exits editing.
 */
frontend.handler.editor.save_current_block_before_navigate_BANG_ = (function frontend$handler$editor$save_current_block_before_navigate_BANG_(){
frontend.state.clear_editor_action_BANG_();

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.state.clear_edit_BANG_();
});
frontend.handler.editor.insert_command_BANG_ = frontend.handler.common.editor.insert_command_BANG_;
/**
 * Return matched classes except the root tag
 */
frontend.handler.editor.get_matched_classes = (function frontend$handler$editor$get_matched_classes(q){
var editing_block = frontend.state.get_edit_block();
var non_page_block_QMARK_ = (function (){var and__5140__auto__ = editing_block;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.entity.page_QMARK_(editing_block));
} else {
return and__5140__auto__;
}
})();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_all_classes(frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"except-root-class?","except-root-class?",-345353595),true], null))),(function (all_classes){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(non_page_block_QMARK_)?frontend.db.async._LT_get_all_classes(frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"except-root-class?","except-root-class?",-345353595),true,new cljs.core.Keyword(null,"except-private-tags?","except-private-tags?",1020635160),false], null)):null)),(function (private_classes){
return promesa.protocols._promise((function (){var page_class = cljs.core.some((function (p1__66422_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__66422_SHARP_))){
return p1__66422_SHARP_;
} else {
return null;
}
}),private_classes);
var all_classes__$1 = (function (){var G__66423 = all_classes;
if(cljs.core.truth_((function (){var and__5140__auto__ = non_page_block_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return page_class;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66423,page_class);
} else {
return G__66423;
}
})();
var classes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.select_keys(e,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684)], null));
}),logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (class$){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(class$),class$);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_classes__$1], 0))));
var G__66424 = classes;
var G__66425 = q;
var G__66426 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword("block","title","block/title",710445684)], null);
return (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$3 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$3(G__66424,G__66425,G__66426) : frontend.search.fuzzy_search.call(null,G__66424,G__66425,G__66426));
})());
}));
}));
}));
});
/**
 * Return matched blocks, optionally including public built-ins
 */
frontend.handler.editor._LT_get_matched_blocks = (function frontend$handler$editor$_LT_get_matched_blocks(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67071 = arguments.length;
var i__5877__auto___67072 = (0);
while(true){
if((i__5877__auto___67072 < len__5876__auto___67071)){
args__5882__auto__.push((arguments[i__5877__auto___67072]));

var G__67073 = (i__5877__auto___67072 + (1));
i__5877__auto___67072 = G__67073;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.editor._LT_get_matched_blocks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.editor._LT_get_matched_blocks.cljs$core$IFn$_invoke$arity$variadic = (function (q,p__66430){
var vec__66431 = p__66430;
var map__66434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66431,(0),null);
var map__66434__$1 = cljs.core.__destructure_map(map__66434);
var nlp_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66434__$1,new cljs.core.Keyword(null,"nlp-pages?","nlp-pages?",-1155813873));
var page_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66434__$1,new cljs.core.Keyword(null,"page-only?","page-only?",654695800));
var built_in_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66434__$1,new cljs.core.Keyword(null,"built-in?","built-in?",2078421512));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_edit_block()),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.block_search(frontend.state.get_current_repo(),q,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"built-in?","built-in?",2078421512),cljs.core.boolean$(built_in_QMARK_),new cljs.core.Keyword(null,"limit","limit",-1355822363),(20),new cljs.core.Keyword(null,"search-limit","search-limit",301495639),(100),new cljs.core.Keyword(null,"enable-snippet?","enable-snippet?",-692858749),false,new cljs.core.Keyword(null,"include-breadcrumb?","include-breadcrumb?",1524429524),true,new cljs.core.Keyword(null,"page-only?","page-only?",654695800),page_only_QMARK_], null))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
}),result)),(function (matched){
return promesa.protocols._mcat(promesa.protocols._promise((function (p1__66427_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__66427_SHARP_))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nlp-original-title","nlp-original-title",2141342504).cljs$core$IFn$_invoke$arity$1(p1__66427_SHARP_)));
})),(function (extract_fn){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__66435 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(matched,(cljs.core.truth_(nlp_pages_QMARK_)?frontend.date.nlp_pages_i18n.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nlp-date?","nlp-date?",1961584384),true,new cljs.core.Keyword(null,"page?","page?",644039860),true], 0)):null));
var G__66436 = q;
var G__66437 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),extract_fn,new cljs.core.Keyword(null,"limit","limit",-1355822363),(50)], null);
return (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$3 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$3(G__66435,G__66436,G__66437) : frontend.search.fuzzy_search.call(null,G__66435,G__66436,G__66437));
})()),(function (result_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),result_SINGLEQUOTE_));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result_SINGLEQUOTE_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (item){
var G__66438 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item);
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__66438) : ids.call(null,G__66438));
}),matched));
})()),(function (result_SINGLEQUOTE__SINGLEQUOTE_){
return promesa.protocols._promise(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"page?","page?",644039860)),result_SINGLEQUOTE__SINGLEQUOTE_));
}));
}));
}));
}));
}));
}));
}));
}));

(frontend.handler.editor._LT_get_matched_blocks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.editor._LT_get_matched_blocks.cljs$lang$applyTo = (function (seq66428){
var G__66429 = cljs.core.first(seq66428);
var seq66428__$1 = cljs.core.next(seq66428);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66429,seq66428__$1);
}));

frontend.handler.editor._LT_get_matched_templates = (function frontend$handler$editor$_LT_get_matched_templates(q){
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$1(q);
});
frontend.handler.editor.get_last_command = (function frontend$handler$editor$get_last_command(input){
try{var edit_content = (function (){var or__5142__auto__ = frontend.handler.editor.goog$module$goog$object.get(input,"value");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var pos = frontend.util.cursor.pos(input);
var last_slash_caret_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_action_data()));
var last_command = (function (){var and__5140__auto__ = last_slash_caret_pos;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,last_slash_caret_pos,pos);
} else {
return and__5140__auto__;
}
})();
if((pos > (0))){
return last_command;
} else {
return null;
}
}catch (e66439){var e = e66439;
console.error(e);

return null;
}});
frontend.handler.editor.get_matched_commands = (function frontend$handler$editor$get_matched_commands(command){
var pred__66440 = cljs.core._EQ_;
var expr__66441 = command;
if(cljs.core.truth_((pred__66440.cljs$core$IFn$_invoke$arity$2 ? pred__66440.cljs$core$IFn$_invoke$arity$2(null,expr__66441) : pred__66440.call(null,null,expr__66441)))){
return null;
} else {
if(cljs.core.truth_((pred__66440.cljs$core$IFn$_invoke$arity$2 ? pred__66440.cljs$core$IFn$_invoke$arity$2("",expr__66441) : pred__66440.call(null,"",expr__66441)))){
return cljs.core.deref(frontend.commands._STAR_initial_commands);
} else {
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$1(command);
}
}
});
frontend.handler.editor.auto_complete_QMARK_ = (function frontend$handler$editor$auto_complete_QMARK_(){
var or__5142__auto__ = cljs.core.deref(frontend.handler.editor._STAR_asset_uploading_QMARK_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_editor_action();
}
});
frontend.handler.editor.focus_in_shui_popup_QMARK_ = (function frontend$handler$editor$focus_in_shui_popup_QMARK_(){
var G__66447 = document.activeElement;
if((G__66447 == null)){
return null;
} else {
return G__66447.closest(".ui__dropdown-menu-content, .ui__popover-content, .ui__context-menu-content");
}
});
/**
 * True when Tab should leave a menu instead of indenting. The selection
 *   action bar is a popover, so it is intentionally excluded.
 */
frontend.handler.editor.focus_in_shui_menu_QMARK_ = (function frontend$handler$editor$focus_in_shui_menu_QMARK_(){
var G__66448 = document.activeElement;
if((G__66448 == null)){
return null;
} else {
return G__66448.closest(".ui__dropdown-menu-content, .ui__dropdown-menu-sub-content, .ui__context-menu-content, .ui__context-menu-sub-content");
}
});
frontend.handler.editor.get_current_input_char = (function frontend$handler$editor$get_current_input_char(input){
var temp__5825__auto__ = frontend.util.cursor.pos(input);
if(cljs.core.truth_(temp__5825__auto__)){
var pos = temp__5825__auto__;
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
if((((cljs.core.count(value) >= (pos + (1)))) && ((pos >= (1))))){
return frontend.util.nth_safe(value,pos);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.get_focused_root_block = (function frontend$handler$editor$get_focused_root_block(){
var page = frontend.state.get_current_page();
if(cljs.core.truth_((function (){var and__5140__auto__ = page;
if(cljs.core.truth_(and__5140__auto__)){
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.uuid_string_QMARK_.call(null,page));
} else {
return and__5140__auto__;
}
})())){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),cljs.core.parse_uuid(page),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
return null;
}
});
frontend.handler.editor.focused_root_block_QMARK_ = (function frontend$handler$editor$focused_root_block_QMARK_(block,root_block){
var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = root_block;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root_block));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
frontend.handler.editor.outdent_past_focused_root_QMARK_ = (function frontend$handler$editor$outdent_past_focused_root_QMARK_(block,root_block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.block_parent_id(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root_block));
});
frontend.handler.editor.block_eligible_for_indent_outdent_QMARK_ = (function frontend$handler$editor$block_eligible_for_indent_outdent_QMARK_(block,indent_QMARK_,root_block){
var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (!(frontend.components.block.comments_model.protected_comment_block_QMARK_(block)));
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs.core.not(frontend.handler.editor.focused_root_block_QMARK_(block,root_block));
if(and__5140__auto____$2){
var or__5142__auto__ = indent_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(frontend.handler.editor.outdent_past_focused_root_QMARK_(block,root_block)));
}
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
frontend.handler.editor.block_eligible_for_move_up_down_QMARK_ = (function frontend$handler$editor$block_eligible_for_move_up_down_QMARK_(block,root_block){
var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return (((!(frontend.components.block.comments_model.protected_comment_block_QMARK_(block)))) && (cljs.core.not(frontend.handler.editor.focused_root_block_QMARK_(block,root_block))));
} else {
return and__5140__auto__;
}
});
frontend.handler.editor.row_container_id = (function frontend$handler$editor$row_container_id(node){
var G__66450 = frontend.util.rec_get_node(node,"blocks-container");
if((G__66450 == null)){
return null;
} else {
return frontend.handler.editor.get_node_container_id(G__66450);
}
});
/**
 * block id -> the container its selected row is drawn in (a block can also
 *   be drawn in an embed or the sidebar).
 */
frontend.handler.editor.row_container_ids = (function frontend$handler$editor$row_container_ids(rows){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (node){
var temp__5825__auto__ = dommy.core.attr(node,"blockid");
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,frontend.handler.editor.row_container_id(node)], null);
} else {
return null;
}
})),rows);
});
/**
 * Of `rows` (the rows drawn for block `id`), the one in the container the
 *   block was selected in, else the first.
 */
frontend.handler.editor.row_in_container = (function frontend$handler$editor$row_in_container(id,rows,container_ids){
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(container_ids,id);
var or__5142__auto__ = (cljs.core.truth_(container_id)?cljs.core.some((function (p1__66451_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(container_id,frontend.handler.editor.row_container_id(p1__66451_SHARP_))){
return p1__66451_SHARP_;
} else {
return null;
}
}),rows):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.first(rows);
}
});
/**
 * Select the moved rows only when each was found and the selection is still
 *   the one that was moved: a click or Escape during the move wins.
 */
frontend.handler.editor.reselect_moved_rows_QMARK_ = (function frontend$handler$editor$reselect_moved_rows_QMARK_(ids,nodes,selected_before,selected_now){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(nodes),cljs.core.count(ids))) && ((selected_before === selected_now)));
});
frontend.handler.editor._LT_move_up_down_BANG_ = (function frontend$handler$editor$_LT_move_up_down_BANG_(up_QMARK_){
var repo = frontend.state.get_current_repo();
var edit_block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
var move_nodes = (function (blocks){
var blocks_SINGLEQUOTE_ = frontend.handler.block.get_top_level_blocks(blocks);
var result = (function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.move_blocks_up_down_BANG_(blocks_SINGLEQUOTE_,up_QMARK_);
} else {
var _STAR_outliner_ops_STAR__orig_val__66459 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66460 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66460);

try{frontend.modules.outliner.op.move_blocks_up_down_BANG_(blocks_SINGLEQUOTE_,up_QMARK_);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks_SINGLEQUOTE_))], 0)));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66459);
}}
})();
var temp__5825__auto___67074 = frontend.util.get_first_block_by_id(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
if(cljs.core.truth_(temp__5825__auto___67074)){
var block_node_67075 = temp__5825__auto___67074;
block_node_67075.scrollIntoView(({"behavior": "smooth", "block": "nearest"}));
} else {
}

return result;
});
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.get_focused_root_block()),(function (root_block){
return promesa.protocols._promise((cljs.core.truth_(edit_block_id)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,edit_block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((function (){var blocks = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","title","block/title",710445684),frontend.state.get_edit_content())], null);
var blocks__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66456_SHARP_){
return frontend.handler.editor.block_eligible_for_move_up_down_QMARK_(p1__66456_SHARP_,root_block);
}),blocks);
var container_id = frontend.handler.editor.get_new_container_id((cljs.core.truth_(up_QMARK_)?new cljs.core.Keyword(null,"move-up","move-up",-1153137133):new cljs.core.Keyword(null,"move-down","move-down",-1149356017)),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.seq(blocks__$1)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(move_nodes(blocks__$1)),(function (___27434__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(container_id)?frontend.state.set_editing_block_id_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [container_id,edit_block_id], null)):(function (){var temp__5825__auto__ = (function (){var G__66465 = frontend.state.get_edit_input_id();
if((G__66465 == null)){
return null;
} else {
return goog.dom.getElement(G__66465);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
input.focus();

return frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$1(input);
} else {
return null;
}
})()));
}));
}));
}));
} else {
return null;
}
})());
}));
})):(function (){var ids = frontend.state.get_selection_block_ids();
var direction = frontend.state.get_selection_direction();
var selected_before = frontend.state.get_unsorted_selection_blocks();
var container_ids = frontend.handler.editor.row_container_ids(selected_before);
var new_row = (function (p1__66457_SHARP_){
return frontend.handler.editor.row_in_container((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66457_SHARP_)),frontend.util.get_blocks_by_id(p1__66457_SHARP_),container_ids);
});
if(cljs.core.seq(ids)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(repo,ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.unwrap_block_results(results)),(function (loaded_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66458_SHARP_){
return frontend.handler.editor.block_eligible_for_move_up_down_QMARK_(p1__66458_SHARP_,root_block);
}),loaded_blocks)),(function (blocks){
return promesa.protocols._promise(((cljs.core.seq(blocks))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(move_nodes(blocks)),(function (___27434__auto__){
return promesa.protocols._promise((function (){var nodes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new_row,ids);
var nodes__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113)))?cljs.core.reverse(nodes):nodes);
if(frontend.handler.editor.reselect_moved_rows_QMARK_(ids,nodes__$1,selected_before,frontend.state.get_unsorted_selection_blocks())){
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(nodes__$1,direction);
} else {
return null;
}
})());
}));
})):null));
}));
}));
}));
}));
} else {
return null;
}
})()));
}));
}));
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_move_up_down_tail !== 'undefined')){
} else {
frontend.handler.editor._STAR_move_up_down_tail = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.editor.move_up_down = (function frontend$handler$editor$move_up_down(up_QMARK_){
return (function (event){
frontend.util.stop(event);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));

var previous = (function (){var or__5142__auto__ = cljs.core.deref(frontend.handler.editor._STAR_move_up_down_tail);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return promesa.core.resolved(null);
}
})();
var result = promesa.core.then.cljs$core$IFn$_invoke$arity$2(previous,(function (_){
return frontend.handler.editor._LT_move_up_down_BANG_(up_QMARK_);
}));
var tail = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(result,cljs.core.constantly(null));
cljs.core.reset_BANG_(frontend.handler.editor._STAR_move_up_down_tail,tail);

promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(tail,(function (){
if((cljs.core.deref(frontend.handler.editor._STAR_move_up_down_tail) === tail)){
return cljs.core.reset_BANG_(frontend.handler.editor._STAR_move_up_down_tail,null);
} else {
return null;
}
}));

return result;
});
});
frontend.handler.editor.get_selected_ordered_blocks = (function frontend$handler$editor$get_selected_ordered_blocks(){
var repo = frontend.state.get_current_repo();
var ids = frontend.state.get_selection_block_ids();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(repo,ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._promise(frontend.handler.editor.unwrap_block_results(results));
}));
}));
});
/**
 * `direction` = :left | :right.
 */
frontend.handler.editor.on_tab = (function frontend$handler$editor$on_tab(direction){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.get_selected_ordered_blocks()),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.get_focused_root_block()),(function (root_block){
return promesa.protocols._promise((function (){var indent_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833));
var blocks__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66466_SHARP_){
return frontend.handler.editor.block_eligible_for_indent_outdent_QMARK_(p1__66466_SHARP_,indent_QMARK_,root_block);
}),blocks);
if(cljs.core.seq(blocks__$1)){
if(indent_QMARK_){
frontend.handler.editor.expand_collapsed_indent_target_BANG_(cljs.core.first(blocks__$1));
} else {
}

return frontend.handler.block.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$3(blocks__$1,indent_QMARK_,null);
} else {
return null;
}
})());
}));
}));
}));
});
frontend.handler.editor.get_link = (function frontend$handler$editor$get_link(format,link,label){
var link__$1 = (function (){var or__5142__auto__ = link;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var label__$1 = (function (){var or__5142__auto__ = label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var G__66471 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__66471__$1 = (((G__66471 instanceof cljs.core.Keyword))?G__66471.fqn:null);
switch (G__66471__$1) {
case "markdown":
return (frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3("[%s](%s)",label__$1,link__$1) : frontend.util.format.call(null,"[%s](%s)",label__$1,link__$1));

break;
default:
return null;

}
});
frontend.handler.editor.get_image_link = (function frontend$handler$editor$get_image_link(format,link,label){
var link__$1 = (function (){var or__5142__auto__ = link;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var label__$1 = (function (){var or__5142__auto__ = label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var G__66472 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__66472__$1 = (((G__66472 instanceof cljs.core.Keyword))?G__66472.fqn:null);
switch (G__66472__$1) {
case "markdown":
return (frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3("![%s](%s)",label__$1,link__$1) : frontend.util.format.call(null,"![%s](%s)",label__$1,link__$1));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66472__$1))));

}
});
frontend.handler.editor.handle_command_input_close = (function frontend$handler$editor$handle_command_input_close(id){
frontend.state.set_editor_show_input_BANG_(null);

var temp__5825__auto__ = frontend.state.get_editor_last_pos();
if(cljs.core.truth_(temp__5825__auto__)){
var saved_cursor = temp__5825__auto__;
var temp__5825__auto____$1 = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var input = temp__5825__auto____$1;
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$3(input,saved_cursor,true);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.handle_command_input = (function frontend$handler$editor$handle_command_input(command,id,format,m){
var G__66473_67078 = command;
var G__66473_67079__$1 = (((G__66473_67078 instanceof cljs.core.Keyword))?G__66473_67078.fqn:null);
switch (G__66473_67079__$1) {
case "link":
var map__66474_67081 = m;
var map__66474_67082__$1 = cljs.core.__destructure_map(map__66474_67081);
var link_67083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66474_67082__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_67084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66474_67082__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(((clojure.string.blank_QMARK_(link_67083)) || (clojure.string.blank_QMARK_(label_67084)))){
} else {
var G__66475_67085 = id;
var G__66476_67086 = frontend.handler.editor.get_link(format,link_67083,label_67084);
var G__66477_67087 = format;
var G__66478_67088 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.commands.command_trigger)+"link"),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"link","link",-1769163468)], null);
(frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__66475_67085,G__66476_67086,G__66477_67087,G__66478_67088) : frontend.handler.editor.insert_command_BANG_.call(null,G__66475_67085,G__66476_67086,G__66477_67087,G__66478_67088));
}

break;
case "image-link":
var map__66479_67089 = m;
var map__66479_67090__$1 = cljs.core.__destructure_map(map__66479_67089);
var link_67091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66479_67090__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_67092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66479_67090__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if((!(clojure.string.blank_QMARK_(link_67091)))){
var G__66480_67093 = id;
var G__66481_67094 = frontend.handler.editor.get_image_link(format,link_67091,label_67092);
var G__66482_67095 = format;
var G__66483_67096 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.commands.command_trigger)+"link"),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"image-link","image-link",1877271958)], null);
(frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__66480_67093,G__66481_67094,G__66482_67095,G__66483_67096) : frontend.handler.editor.insert_command_BANG_.call(null,G__66480_67093,G__66481_67094,G__66482_67095,G__66483_67096));
} else {
}

break;
default:

}

return frontend.handler.editor.handle_command_input_close(id);
});
frontend.handler.editor.restore_last_saved_cursor_BANG_ = (function frontend$handler$editor$restore_last_saved_cursor_BANG_(var_args){
var G__66485 = arguments.length;
switch (G__66485) {
case 0:
return frontend.handler.editor.restore_last_saved_cursor_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.restore_last_saved_cursor_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.restore_last_saved_cursor_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.restore_last_saved_cursor_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_input());
}));

(frontend.handler.editor.restore_last_saved_cursor_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (input){
var temp__5825__auto__ = (function (){var and__5140__auto__ = input;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.state.get_editor_last_pos();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var saved_cursor = temp__5825__auto__;
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$3(input,saved_cursor,true);
} else {
return null;
}
}));

(frontend.handler.editor.restore_last_saved_cursor_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.close_autocomplete_if_outside = (function frontend$handler$editor$close_autocomplete_if_outside(input){
if(cljs.core.truth_((function (){var and__5140__auto__ = input;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-search","page-search",1842925280),null,new cljs.core.Keyword(null,"block-search","block-search",-897517253),null,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573),null], null), null),frontend.state.get_editor_action())) && (((cljs.core.not(frontend.handler.editor.autopair.wrapped_by_QMARK_(input,logseq.common.util.page_ref.left_brackets,logseq.common.util.page_ref.right_brackets))) && (((cljs.core.not(frontend.handler.editor.autopair.wrapped_by_QMARK_(input,logseq.common.util.block_ref.left_parens,logseq.common.util.block_ref.right_parens))) && ((((!(frontend.util.text.wrapped_by_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input.value,(0),frontend.util.cursor.pos(input)),frontend.util.cursor.pos(input),frontend.commands.hashtag,"")))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-search","block-search",-897517253),frontend.state.get_editor_action())))))))))));
} else {
return and__5140__auto__;
}
})())){
return frontend.state.clear_editor_action_BANG_();
} else {
return null;
}
});
frontend.handler.editor.resize_image_BANG_ = (function frontend$handler$editor$resize_image_BANG_(config,block_id,_metadata,_full_text,size){
var asset = new cljs.core.Keyword(null,"asset-block","asset-block",1420117445).cljs$core$IFn$_invoke$arity$1(config);
return frontend.handler.property.set_block_property_BANG_((cljs.core.truth_(asset)?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset):block_id),new cljs.core.Keyword("logseq.property.asset","resize-metadata","logseq.property.asset/resize-metadata",-1297523055),size);
});
frontend.handler.editor.current_edit_block_QMARK_ = (function frontend$handler$editor$current_edit_block_QMARK_(block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()));
});
frontend.handler.editor.edit_box_on_change_BANG_ = (function frontend$handler$editor$edit_box_on_change_BANG_(e,block,id){
if(frontend.handler.editor.current_edit_block_QMARK_(block)){
var value = frontend.util.evalue(e);
var repo = frontend.state.get_current_repo();
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3(id,value,false);

frontend.handler.editor.clear_block_auto_save_timeout_BANG_();

frontend.handler.block.mark_last_input_time_BANG_(repo);

cljs.core.reset_BANG_(frontend.handler.editor._STAR_auto_save_timeout,setTimeout((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.state.input_idle_QMARK_.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"diff","diff",2135942783),(450)], 0));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.re_find(/#\S+/,value));
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-properties?","skip-properties?",329398686),true], null));
} else {
return null;
}
}),(450)));

if(cljs.core.truth_(frontend.state.get_state(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579)))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),false);
} else {
return (frontend.handler.editor.handle_last_input.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.handle_last_input.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.handle_last_input.call(null));
}
} else {
return null;
}
});
frontend.handler.editor.start_of_new_word_QMARK_ = (function frontend$handler$editor$start_of_new_word_QMARK_(input,pos){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\t",null," ",null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(input.value,(pos - (2))));
});
/**
 * True when the `#` at or before `pos` starts an org keyword such as `#+BEGIN_NOTE`.
 */
frontend.handler.editor.org_directive_hashtag_QMARK_ = (function frontend$handler$editor$org_directive_hashtag_QMARK_(content,pos){
return cljs.core.boolean$(((((typeof content === 'string') && (((typeof pos === 'number') && ((pos >= (2)))))))?(function (){var from_start = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),pos);
var hash_idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(from_start,frontend.commands.hashtag);
return ((typeof hash_idx === 'number') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("+",frontend.util.nth_safe(from_start,(hash_idx + (1))))));
})():null));
});
/**
 * True when a hashtag-search query is an org keyword (`+BEGIN_NOTE`, `#+END_QUOTE`).
 */
frontend.handler.editor.org_directive_hashtag_query_QMARK_ = (function frontend$handler$editor$org_directive_hashtag_query_QMARK_(q){
return cljs.core.boolean$(((typeof q === 'string')?cljs.core.re_find(/^#?\+[A-Za-z]/,clojure.string.trim(q)):null));
});
frontend.handler.editor.handle_last_input = (function frontend$handler$editor$handle_last_input(){
var input = frontend.state.get_input();
var input_id = frontend.state.get_edit_input_id();
var edit_block = frontend.state.get_edit_block();
var vec__66486 = frontend.state.get_editor_args();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66486,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66486,(1),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66486,(2),null);
var pos = frontend.util.cursor.pos(input);
var content = input.value;
var last_input_char = frontend.util.nth_safe(content,(pos - (1)));
var last_prev_input_char = frontend.util.nth_safe(content,((pos - (1)) - (1)));
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(content,"1. ");
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char," ");
if(and__5140__auto____$1){
var and__5140__auto____$2 = input_id;
if(cljs.core.truth_(and__5140__auto____$2)){
var and__5140__auto____$3 = edit_block;
if(cljs.core.truth_(and__5140__auto____$3)){
return (!(frontend.handler.editor.own_order_number_list_QMARK_(edit_block)));
} else {
return and__5140__auto____$3;
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),edit_block], null))),(function (___$2){
return promesa.protocols._promise(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,""));
}));
}));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword(null,"comment-editor?","comment-editor?",-485501961).cljs$core$IFn$_invoke$arity$1(config));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char,frontend.commands.command_trigger);
if(and__5140__auto____$1){
var or__5142__auto__ = cljs.core.re_find(/^\//m,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input.value)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.start_of_new_word_QMARK_(input,pos);
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));

frontend.commands.reinit_matched_commands_BANG_();

return frontend.state.set_editor_show_commands_BANG_();
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(last_input_char,last_prev_input_char,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.commands.hashtag], 0))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_prev_input_char,frontend.commands.hashtag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char," ")))) || (frontend.handler.editor.org_directive_hashtag_QMARK_(content,pos)))))){
return frontend.state.clear_editor_action_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword(null,"comment-editor?","comment-editor?",-485501961).cljs$core$IFn$_invoke$arity$1(config));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char,frontend.commands.hashtag);
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("+",frontend.util.nth_safe(content,pos));
if(and__5140__auto____$2){
var or__5142__auto__ = cljs.core.re_find(/^#/m,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input.value)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((frontend.handler.editor.start_of_new_word_QMARK_(input,pos)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.util.page_ref.right_brackets,logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input.value)),(pos - (3)),(pos - (1))))));
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));

frontend.state.set_editor_last_pos_BANG_(pos);

return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
} else {
return null;

}
}
}
}
});
frontend.handler.editor.get_selected_text = (function frontend$handler$editor$get_selected_text(){
var text = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_action_data());
if(clojure.string.blank_QMARK_(text)){
return null;
} else {
return text;
}
});
frontend.handler.editor.block_on_chosen_handler = (function frontend$handler$editor$block_on_chosen_handler(id,q,format,selected_text){
return (function (chosen,_click_QMARK_){
frontend.state.clear_editor_action_BANG_();

var uuid_string = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(chosen)));
var G__66489_67098 = id;
var G__66490_67099 = frontend.util.ref.__GT_block_ref(uuid_string);
var G__66491_67100 = format;
var G__66492_67101 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.block_ref.left_parens)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(selected_text)?"":q))),new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),logseq.common.util.block_ref.right_parens,new cljs.core.Keyword(null,"postfix-fn","postfix-fn",-1393704144),(function (s){
return frontend.util.replace_first(logseq.common.util.block_ref.right_parens,s,"");
}),new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715),(3),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"block-ref","block-ref",362929756)], null);
(frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__66489_67098,G__66490_67099,G__66491_67100,G__66492_67101) : frontend.handler.editor.insert_command_BANG_.call(null,G__66489_67098,G__66490_67099,G__66491_67100,G__66492_67101));

var temp__5825__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
return input.focus();
} else {
return null;
}
});
});
frontend.handler.editor.block_non_exist_handler = (function frontend$handler$editor$block_non_exist_handler(input){
return (function (){
frontend.state.clear_editor_action_BANG_();

return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(input,(2));
});
});
frontend.handler.editor.paste_block_cleanup = (function frontend$handler$editor$paste_block_cleanup(_repo,block,page,_exclude_properties,_format,content_update_fn,keep_uuid_QMARK_){
var new_content = (cljs.core.truth_(content_update_fn)?(function (){var G__66493 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
return (content_update_fn.cljs$core$IFn$_invoke$arity$1 ? content_update_fn.cljs$core$IFn$_invoke$arity$1(G__66493) : content_update_fn.call(null,G__66493));
})():new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__66494 = block;
if(cljs.core.not(keep_uuid_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66494,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
} else {
return G__66494;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)], null)], null),new cljs.core.Keyword("block","title","block/title",710445684),new_content], null)], 0));
});
frontend.handler.editor.edit_last_block_after_inserted_BANG_ = (function frontend$handler$editor$edit_last_block_after_inserted_BANG_(result){
var G__66495 = (function (){
var temp__5825__auto__ = cljs.core.last(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(result));
if(cljs.core.truth_(temp__5825__auto__)){
var last_block = temp__5825__auto__;
frontend.handler.editor.clear_when_saved_BANG_();

var G__66496 = last_block;
var G__66497 = new cljs.core.Keyword(null,"max","max",61366548);
var G__66498 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66496,G__66497,G__66498) : frontend.handler.editor.edit_block_BANG_.call(null,G__66496,G__66497,G__66498));
} else {
return null;
}
});
return (frontend.util.schedule.cljs$core$IFn$_invoke$arity$1 ? frontend.util.schedule.cljs$core$IFn$_invoke$arity$1(G__66495) : frontend.util.schedule.call(null,G__66495));
});
frontend.handler.editor.nested_blocks = (function frontend$handler$editor$nested_blocks(blocks){
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
return (!((cljs.core.some((function (p1__66499_SHARP_){
var G__66500 = frontend.handler.editor.block_parent_id(p1__66499_SHARP_);
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__66500) : ids.call(null,G__66500));
}),blocks) == null)));
});
frontend.handler.editor.unrecycle_tx_data = (function frontend$handler$editor$unrecycle_tx_data(root){
var root_id = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),root_id,new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),root_id,new cljs.core.Keyword("logseq.property","deleted-by-ref","logseq.property/deleted-by-ref",-1998043112)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),root_id,new cljs.core.Keyword("logseq.property.recycle","original-parent","logseq.property.recycle/original-parent",497003994)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),root_id,new cljs.core.Keyword("logseq.property.recycle","original-page","logseq.property.recycle/original-page",-1658789799)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),root_id,new cljs.core.Keyword("logseq.property.recycle","original-order","logseq.property.recycle/original-order",-869925370)], null)], null);
});
/**
 * Given a vec of blocks, insert them into the target page.
 * keep-uuid?: if true, keep the uuid provided in the block structure.
 */
frontend.handler.editor.paste_blocks = (function frontend$handler$editor$paste_blocks(blocks,p__66501){
var map__66502 = p__66501;
var map__66502__$1 = cljs.core.__destructure_map(map__66502);
var opts = map__66502__$1;
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66502__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66502__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var skip_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66502__$1,new cljs.core.Keyword(null,"skip-empty-target?","skip-empty-target?",-1452855908));
var exclude_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66502__$1,new cljs.core.Keyword(null,"exclude-properties","exclude-properties",1449787201),cljs.core.PersistentVector.EMPTY);
var content_update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66502__$1,new cljs.core.Keyword(null,"content-update-fn","content-update-fn",132456615));
var ops_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66502__$1,new cljs.core.Keyword(null,"ops-only?","ops-only?",389405419));
var revert_cut_txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66502__$1,new cljs.core.Keyword(null,"revert-cut-txs","revert-cut-txs",1919904845));
var target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66502__$1,new cljs.core.Keyword(null,"target-block","target-block",348392017));
var outliner_real_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66502__$1,new cljs.core.Keyword(null,"outliner-real-op","outliner-real-op",1093934358));
var editing_block = (function (){var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var editing_block = temp__5825__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(editing_block,new cljs.core.Keyword("block","title","block/title",710445684),frontend.state.get_edit_content());
} else {
return null;
}
})();
var has_unsaved_edits = (function (){var and__5140__auto__ = editing_block;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()),frontend.state.get_edit_content());
} else {
return and__5140__auto__;
}
})();
var target_block__$1 = (function (){var or__5142__auto__ = target_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return editing_block;
}
})();
var block = target_block__$1;
var page = (cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?block:(cljs.core.truth_(target_block__$1)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target_block__$1):null));
var empty_target_QMARK_ = ((skip_empty_target_QMARK_ === true)?false:clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(target_block__$1)));
var paste_nested_blocks_QMARK_ = frontend.handler.editor.nested_blocks(blocks);
var target_block_has_children_QMARK_ = frontend.handler.editor.block_map_has_children_QMARK_(target_block__$1);
var replace_empty_target_QMARK_ = ((empty_target_QMARK_) && ((((!(target_block_has_children_QMARK_))) || (((target_block_has_children_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),(1))))))));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((((empty_target_QMARK_) && (((target_block_has_children_QMARK_) && (paste_nested_blocks_QMARK_)))))?frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),target_block__$1):target_block__$1)),(function (target_block_SINGLEQUOTE_){
return promesa.protocols._promise((function (){var existing_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks);
var move_from_recycle_QMARK_ = (function (){var and__5140__auto__ = keep_uuid_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.seq(existing_blocks)) && (((cljs.core.seq(revert_cut_txs)) || (cljs.core.every_QMARK_(logseq.db.recycled_QMARK_,existing_blocks)))));
} else {
return and__5140__auto__;
}
})();
var sibling_QMARK___$1 = ((((paste_nested_blocks_QMARK_) && (empty_target_QMARK_)))?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.block_parent_id(target_block_SINGLEQUOTE_),frontend.handler.editor.block_parent_id(target_block__$1)):(((!((sibling_QMARK_ == null))))?sibling_QMARK_:((target_block_has_children_QMARK_)?false:true
)));
var transact_blocks_BANG_ = (function (){
if(cljs.core.truth_(move_from_recycle_QMARK_)){
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
if(cljs.core.truth_(target_block_SINGLEQUOTE_)){
var top_level_blocks = frontend.handler.block.get_top_level_blocks(existing_blocks);
var unrecycle_tx = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.editor.unrecycle_tx_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_level_blocks], 0));
if(cljs.core.seq(unrecycle_tx)){
frontend.modules.outliner.op.transact_BANG_(unrecycle_tx,null);
} else {
}

return frontend.modules.outliner.op.move_blocks_BANG_(top_level_blocks,target_block_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"paste","paste",1975741548)], null));
} else {
return null;
}
} else {
var _STAR_outliner_ops_STAR__orig_val__66503 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66504 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66504);

try{if(cljs.core.truth_(target_block_SINGLEQUOTE_)){
var top_level_blocks_67102 = frontend.handler.block.get_top_level_blocks(existing_blocks);
var unrecycle_tx_67103 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.editor.unrecycle_tx_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_level_blocks_67102], 0));
if(cljs.core.seq(unrecycle_tx_67103)){
frontend.modules.outliner.op.transact_BANG_(unrecycle_tx_67103,null);
} else {
}

frontend.modules.outliner.op.move_blocks_BANG_(top_level_blocks_67102,target_block_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"paste","paste",1975741548)], null));
} else {
}

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),revert_cut_txs,new cljs.core.Keyword("ui","page-id","ui/page-id",-872945956),new cljs.core.Keyword("ui","page-id","ui/page-id",-872945956).cljs$core$IFn$_invoke$arity$1(opts)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66503);
}}
} else {
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
if(cljs.core.truth_(target_block_SINGLEQUOTE_)){
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(target_block_SINGLEQUOTE_,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var repo = frontend.state.get_current_repo();
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(repo,block__$1,page,exclude_properties,format,content_update_fn,keep_uuid_QMARK_);
}),blocks);
return frontend.modules.outliner.op.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target_block_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"paste","paste",1975741548),new cljs.core.Keyword(null,"outliner-real-op","outliner-real-op",1093934358),outliner_real_op,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_], null));
} else {
return null;
}
} else {
var _STAR_outliner_ops_STAR__orig_val__66505 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66506 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66506);

try{if(cljs.core.truth_(target_block_SINGLEQUOTE_)){
var format_67104 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(target_block_SINGLEQUOTE_,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var repo_67105 = frontend.state.get_current_repo();
var blocks_SINGLEQUOTE__67106 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(repo_67105,block__$1,page,exclude_properties,format_67104,content_update_fn,keep_uuid_QMARK_);
}),blocks);
frontend.modules.outliner.op.insert_blocks_BANG_(blocks_SINGLEQUOTE__67106,target_block_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"paste","paste",1975741548),new cljs.core.Keyword(null,"outliner-real-op","outliner-real-op",1093934358),outliner_real_op,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_], null));
} else {
}

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),revert_cut_txs,new cljs.core.Keyword("ui","page-id","ui/page-id",-872945956),new cljs.core.Keyword("ui","page-id","ui/page-id",-872945956).cljs$core$IFn$_invoke$arity$1(opts)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66505);
}}
}
});
if(cljs.core.truth_(ops_only_QMARK_)){
return transact_blocks_BANG_();
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(has_unsaved_edits)?frontend.handler.editor.save_block_inner_BANG_(editing_block,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(editing_block),cljs.core.PersistentArrayMap.EMPTY):null)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(transact_blocks_BANG_()),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_block_op_type_BANG_(null)),(function (___27434__auto__){
return promesa.protocols._promise((cljs.core.truth_(result)?(function (){
frontend.handler.editor.edit_last_block_after_inserted_BANG_(result);

return result;
})()
:null));
}));
}));
}));
}));
}
})());
}));
}));
});
/**
 * keep-uuid? - maintain the existing :uuid in tree vec
 */
frontend.handler.editor.block_tree__GT_blocks = (function frontend$handler$editor$block_tree__GT_blocks(tree_vec,format,keep_uuid_QMARK_,page_name){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block);
var content_STAR_ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format))?"- ":"* "))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content));
var ast = frontend.format.mldoc.__GT_edn(content_STAR_,format);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.wrap_parse_block,frontend.format.block.extract_blocks(ast,content_STAR_,format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name], null)));
var fst_block = cljs.core.first(blocks);
var fst_block__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = keep_uuid_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fst_block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block)):fst_block);
if(cljs.core.truth_(fst_block__$1)){
} else {
throw (new Error((""+"Assert failed: "+"fst-block shouldn't be nil"+"\n"+"fst-block")));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fst_block__$1,new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block));
}),logseq.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$1(tree_vec));
});
/**
 * `tree-vec`: a vector of blocks.
 * A block element: {:content :properties :children [block-1, block-2, ...]}
 */
frontend.handler.editor.insert_block_tree = (function frontend$handler$editor$insert_block_tree(tree_vec,format,p__66507){
var map__66508 = p__66507;
var map__66508__$1 = cljs.core.__destructure_map(map__66508);
var opts = map__66508__$1;
var target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66508__$1,new cljs.core.Keyword(null,"target-block","target-block",348392017));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66508__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var page_id = (function (){var or__5142__auto__ = frontend.handler.editor.block_page_id(target_block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_((function (){var or__5142__auto____$1 = frontend.util.entity.page_QMARK_(target_block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(target_block);
}
})())){
var or__5142__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(target_block);
}
} else {
return null;
}
}
})();
var page_name = (function (){var G__66509 = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target_block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(frontend.util.entity.page_QMARK_(target_block))){
return target_block;
} else {
return null;
}
}
})();
if((G__66509 == null)){
return null;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(G__66509);
}
})();
var blocks = frontend.handler.editor.block_tree__GT_blocks(tree_vec,format,keep_uuid_QMARK_,page_name);
var blocks__$1 = logseq.graph_parser.block.with_parent_and_order(page_id,blocks);
return frontend.handler.editor.paste_blocks(blocks__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops-only?","ops-only?",389405419),true,new cljs.core.Keyword("ui","page-id","ui/page-id",-872945956),page_id], null)], 0)));
});
/**
 * `tree-vec`: a vector of blocks.
 * A block element: {:content :properties :children [block-1, block-2, ...]}
 */
frontend.handler.editor.insert_block_tree_after_target = (function frontend$handler$editor$insert_block_tree_after_target(target_block_id,sibling_QMARK_,tree_vec,format,keep_uuid_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),target_block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (target_block){
return promesa.protocols._promise(frontend.handler.editor.insert_block_tree(tree_vec,format,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target-block","target-block",348392017),target_block,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"skip-empty-target?","skip-empty-target?",-1452855908),true,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null)));
}));
}));
});
frontend.handler.editor.insert_template_BANG_ = (function frontend$handler$editor$insert_template_BANG_(var_args){
var G__66511 = arguments.length;
switch (G__66511) {
case 2:
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (element_id,db_id){
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(element_id,db_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (element_id,db_id,p__66512){
var map__66513 = p__66512;
var map__66513__$1 = cljs.core.__destructure_map(map__66513);
var opts = map__66513__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66513__$1,new cljs.core.Keyword(null,"target","target",253001721));
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,db_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))?(function (){var journal_QMARK_ = frontend.util.entity.journal_QMARK_(target);
var target__$1 = (function (){var or__5142__auto__ = target;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_edit_block();
}
})();
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
if(cljs.core.truth_(element_id)){
var G__66514_67108 = element_id;
var G__66515_67109 = "";
var G__66516_67110 = format;
var G__66517_67111 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),frontend.commands.command_trigger], null);
(frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__66514_67108,G__66515_67109,G__66516_67110,G__66517_67111) : frontend.handler.editor.insert_command_BANG_.call(null,G__66514_67108,G__66515_67109,G__66516_67110,G__66517_67111));
} else {
}

try{return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
if(clojure.string.blank_QMARK_(frontend.state.get_edit_content())){
} else {
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
}

return frontend.modules.outliner.op.apply_template_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),target__$1,opts);
} else {
var _STAR_outliner_ops_STAR__orig_val__66519 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66520 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66520);

try{if(clojure.string.blank_QMARK_(frontend.state.get_edit_content())){
} else {
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
}

frontend.modules.outliner.op.apply_template_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),target__$1,opts);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"apply-template","apply-template",169070311),new cljs.core.Keyword(null,"created-from-journal-template?","created-from-journal-template?",-2127356314),journal_QMARK_], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66519);
}}
})()),(function (result){
return promesa.protocols._promise((cljs.core.truth_(result)?frontend.handler.editor.edit_last_block_after_inserted_BANG_(result):null));
}));
}));
}catch (e66518){var e = e66518;
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","template-insert-error","editor/template-insert-error",612615339),e.message], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}})():null));
}));
}));
}));

(frontend.handler.editor.insert_template_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.template_on_chosen_handler = (function frontend$handler$editor$template_on_chosen_handler(element_id){
return (function (template_block){
var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(template_block);
if(cljs.core.truth_(temp__5825__auto__)){
var db_id = temp__5825__auto__;
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(element_id,db_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null));
} else {
return null;
}
});
});
frontend.handler.editor.last_top_level_child_QMARK_ = (function frontend$handler$editor$last_top_level_child_QMARK_(p__66521,block){
var map__66522 = p__66521;
var map__66522__$1 = cljs.core.__destructure_map(map__66522);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66522__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66522__$1,new cljs.core.Keyword(null,"page","page",849072397));
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
var id__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
var and__5140__auto__ = parent;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id__$1,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.util.page_name_sanity_lc(id__$1),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(parent))))));
} else {
return and__5140__auto__;
}
});
frontend.handler.editor.insert = (function frontend$handler$editor$insert(var_args){
var G__66524 = arguments.length;
switch (G__66524) {
case 1:
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1 = (function (insertion){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2(insertion,false);
}));

(frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2 = (function (insertion,auto_complete_enabled_QMARK_){
if(cljs.core.truth_((function (){var or__5142__auto__ = auto_complete_enabled_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not(frontend.handler.editor.auto_complete_QMARK_());
}
})())){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var value = input.value;
var s1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selected_start);
var s2 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selected_end);
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(insertion)));

var scroll_container = frontend.util.nearest_scrollable_container(input);
var scroll_pos = scroll_container.scrollTop;
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(insertion)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2)));

frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,(selected_start + cljs.core.count(insertion)));

return (scroll_container.scrollTop = scroll_pos);
} else {
return null;
}
}));

(frontend.handler.editor.insert.cljs$lang$maxFixedArity = 2);

/**
 * Insert newline to current cursor position
 */
frontend.handler.editor.keydown_new_line = (function frontend$handler$editor$keydown_new_line(){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1("\n");
});
frontend.handler.editor.toggle_list_checkbox = (function frontend$handler$editor$toggle_list_checkbox(p__66525,item_content){
var map__66526 = p__66525;
var map__66526__$1 = cljs.core.__destructure_map(map__66526);
var block = map__66526__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66526__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var toggle_fn = (function (m,x_mark){
var G__66527 = clojure.string.lower_case(x_mark);
switch (G__66527) {
case "[ ]":
return (""+"[x] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_content));

break;
case "[x]":
return (""+"[ ] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_content));

break;
default:
return m;

}
});
var pattern = cljs.core.re_pattern((""+"(\\[[xX ]\\])\\s+?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.regExpEscape(item_content))));
var new_content = clojure.string.replace_first(title,pattern,toggle_fn);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
});
frontend.handler.editor.keydown_new_block = (function frontend$handler$editor$keydown_new_block(state){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__66528 = state;
var map__66528__$1 = cljs.core.__destructure_map(map__66528);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66528__$1,new cljs.core.Keyword(null,"block","block",664686210));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66528__$1,new cljs.core.Keyword(null,"config","config",994861415));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66528__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(block)){
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"keydown-new-block","keydown-new-block",-676183329),true);
var content = value;
if(((clojure.string.blank_QMARK_(content)) && (((frontend.handler.editor.own_order_number_list_QMARK_(block)) && (cljs.core.not((function (){var G__66529 = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
if((G__66529 == null)){
return null;
} else {
return frontend.handler.editor.own_order_number_list_QMARK_(G__66529);
}
})())))))){
return frontend.handler.editor.remove_block_own_order_list_type_BANG_(block);
} else {
if((!(clojure.string.blank_QMARK_(content)))){
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$3(state,content,null);
} else {
if(cljs.core.truth_(frontend.handler.editor.last_top_level_child_QMARK_(config__$1,block))){
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$3(state,content,null);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
return frontend.db.async._LT_get_block_sibling(frontend.state.get_current_repo(),block_id,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return null;
}
})()),(function (right_sibling){
return promesa.protocols._promise((cljs.core.truth_(right_sibling)?frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$3(state,content,right_sibling):(frontend.handler.editor.indent_outdent.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.indent_outdent.cljs$core$IFn$_invoke$arity$1(false) : frontend.handler.editor.indent_outdent.call(null,false))));
}));
}));
}

}
}
} else {
return null;
}
}
});
/**
 * When we are in a single block wrapper, we should always insert a new line instead of new block
 */
frontend.handler.editor.inside_of_single_block = (function frontend$handler$editor$inside_of_single_block(el){
return (!((dommy.core.closest.cljs$core$IFn$_invoke$arity$2(el,".single-block") == null)));
});
frontend.handler.editor.inside_of_editor_block = (function frontend$handler$editor$inside_of_editor_block(el){
return (!((dommy.core.closest.cljs$core$IFn$_invoke$arity$2(el,".block-editor") == null)));
});
frontend.handler.editor.keydown_new_block_handler = (function frontend$handler$editor$keydown_new_block_handler(e){
var target = (cljs.core.truth_(e)?e.target:null);
var state = (function (){var G__66530 = frontend.handler.editor.get_state();
if(cljs.core.truth_(target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__66530,new cljs.core.Keyword(null,"node","node",581201198),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),frontend.handler.editor.goog$module$goog$object.get(target,"value"),new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.get_selection_start(target)], 0));
} else {
return G__66530;
}
})();
if(((cljs.core.not(frontend.handler.editor.auto_complete_QMARK_())) && ((((target == null)) || (frontend.handler.editor.inside_of_editor_block(target)))))){
if(frontend.handler.editor.pending_new_block_QMARK_()){
if(cljs.core.truth_(e)){
return e.preventDefault();
} else {
return null;
}
} else {
var new_line_QMARK_ = (function (){var or__5142__auto__ = frontend.state.doc_mode_enter_for_new_line_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.inside_of_single_block(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(state));
}
})();
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"page-title?","page-title?",534381078)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.leaf_property_value_insert_blocked_QMARK_(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(state));
}
})())){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

return (frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.escape_editing.call(null));
} else {
if(cljs.core.truth_(new_line_QMARK_)){
return frontend.handler.editor.keydown_new_line();
} else {
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

return frontend.handler.editor.keydown_new_block(state);

}
}
}
} else {
return null;
}
});
frontend.handler.editor.keydown_new_line_handler = (function frontend$handler$editor$keydown_new_line_handler(e){
var state = frontend.handler.editor.get_state();
if((((e.target == null)) || (frontend.handler.editor.inside_of_editor_block(e.target)))){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.state.doc_mode_enter_for_new_line_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return (!(frontend.handler.editor.inside_of_single_block(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(state))));
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.keydown_new_block(state);
} else {
e.preventDefault();

return frontend.handler.editor.keydown_new_line();
}
} else {
return null;
}
});
/**
 * Select first or last block in viewport
 */
frontend.handler.editor.select_first_last = (function frontend$handler$editor$select_first_last(direction){
var f = (function (){var G__66531 = direction;
var G__66531__$1 = (((G__66531 instanceof cljs.core.Keyword))?G__66531.fqn:null);
switch (G__66531__$1) {
case "up":
return cljs.core.last;

break;
case "down":
return cljs.core.first;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66531__$1))));

}
})();
var container = (cljs.core.truth_((function (){var G__66532 = document.activeElement;
if((G__66532 == null)){
return null;
} else {
return G__66532.querySelector(".blocks-container");
}
})())?document.activeElement:document.body);
var block = (function (){var G__66533 = frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$1(container);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66533) : f.call(null,G__66533));
})();
if(cljs.core.truth_(block)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(block);

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));
} else {
return null;
}
});


frontend.handler.editor.select_up_down = (function frontend$handler$editor$select_up_down(direction){
var selected_blocks = frontend.state.get_selection_blocks();
var selected = (function (){var G__66534 = direction;
var G__66534__$1 = (((G__66534 instanceof cljs.core.Keyword))?G__66534.fqn:null);
switch (G__66534__$1) {
case "up":
return cljs.core.first(selected_blocks);

break;
case "down":
return cljs.core.last(selected_blocks);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66534__$1))));

}
})();
var f = (function (){var G__66535 = direction;
var G__66535__$1 = (((G__66535 instanceof cljs.core.Keyword))?G__66535.fqn:null);
switch (G__66535__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66535__$1))));

}
})();
var sibling_block = (function (){var G__66536 = selected;
var G__66537 = f;
var G__66538 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up-down?","up-down?",1084256379),true,new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null);
return (frontend.handler.editor.navigable_sibling_block.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.navigable_sibling_block.cljs$core$IFn$_invoke$arity$3(G__66536,G__66537,G__66538) : frontend.handler.editor.navigable_sibling_block.call(null,G__66536,G__66537,G__66538));
})();
var property_value_container = (cljs.core.truth_((frontend.handler.editor.property_value_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.property_value_node_QMARK_.cljs$core$IFn$_invoke$arity$1(sibling_block) : frontend.handler.editor.property_value_node_QMARK_.call(null,sibling_block)))?sibling_block:null);
var sibling_block__$1 = (function (){var or__5142__auto__ = (frontend.handler.editor.property_value_inner_block.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.property_value_inner_block.cljs$core$IFn$_invoke$arity$1(property_value_container) : frontend.handler.editor.property_value_inner_block.call(null,property_value_container));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return sibling_block;
}
})();
if(cljs.core.truth_(property_value_container)){
frontend.state.clear_selection_BANG_();

frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(property_value_container);

var G__66539 = selected;
var G__66540 = property_value_container;
var G__66541 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-navigation?","edit-navigation?",-2134504313),false], null);
return (frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$3(G__66539,G__66540,G__66541) : frontend.handler.editor.focus_trigger.call(null,G__66539,G__66540,G__66541));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = sibling_block__$1;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = dommy.core.attr(sibling_block__$1,"blockid");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return dommy.core.attr(sibling_block__$1,"parentblockid");
}
} else {
return and__5140__auto__;
}
})())){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(sibling_block__$1);

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sibling_block__$1], null));
} else {
return null;
}
}
});
frontend.handler.editor.property_value_node_QMARK_ = (function frontend$handler$editor$property_value_node_QMARK_(node){
var G__66542 = node;
if((G__66542 == null)){
return null;
} else {
return dommy.core.has_class_QMARK_(G__66542,"property-value-container");
}
});
frontend.handler.editor.property_value_inner_block = (function frontend$handler$editor$property_value_inner_block(node){
return frontend.util.property_value_inner_block(node);
});
frontend.handler.editor.property_value_container_node = (function frontend$handler$editor$property_value_container_node(node){
var or__5142__auto__ = (cljs.core.truth_(frontend.handler.editor.property_value_node_QMARK_(node))?node:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__66543 = node;
if((G__66543 == null)){
return null;
} else {
return G__66543.closest(".property-value-container");
}
}
});
frontend.handler.editor.bottom_properties_row_node = (function frontend$handler$editor$bottom_properties_row_node(node){
var G__66544 = node;
if((G__66544 == null)){
return null;
} else {
return G__66544.closest(".bottom-properties-row");
}
});
frontend.handler.editor.focus_bottom_properties_row_BANG_ = (function frontend$handler$editor$focus_bottom_properties_row_BANG_(row){
if(cljs.core.truth_(row)){
var temp__5823__auto__ = row.querySelector("[data-bottom-pill-focusable='true']");
if(cljs.core.truth_(temp__5823__auto__)){
var first_pill = temp__5823__auto__;
return first_pill.focus();
} else {
return row.focus();
}
} else {
return null;
}
});
frontend.handler.editor.node_attr = (function frontend$handler$editor$node_attr(node,attr){
var or__5142__auto__ = (function (){var G__66545 = node;
if((G__66545 == null)){
return null;
} else {
return frontend.handler.editor.goog$module$goog$object.get(G__66545,attr);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = node;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.editor.goog$module$goog$object.get(node,"getAttribute");
} else {
return and__5140__auto__;
}
})())){
return dommy.core.attr(node,attr);
} else {
return null;
}
}
});
/**
 * Find the bottom-properties row owned by this block, not a descendant child.
 */
frontend.handler.editor.bottom_properties_row_in_block = (function frontend$handler$editor$bottom_properties_row_in_block(block_node){
var temp__5825__auto__ = frontend.handler.editor.node_attr(block_node,"blockid");
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
var G__66546 = block_node;
if((G__66546 == null)){
return null;
} else {
return G__66546.querySelector((""+"[data-bottom-properties-row=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)+"\"]"));
}
} else {
return null;
}
});
frontend.handler.editor.comment_item_node_QMARK_ = (function frontend$handler$editor$comment_item_node_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",frontend.handler.editor.node_attr(node,"data-comment-item"));
});
frontend.handler.editor.comments_area_node_QMARK_ = (function frontend$handler$editor$comments_area_node_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",frontend.handler.editor.node_attr(node,"data-comments-area"));
});
frontend.handler.editor.comments_area_ancestor_node = (function frontend$handler$editor$comments_area_ancestor_node(node){
var or__5142__auto__ = ((frontend.handler.editor.comments_area_node_QMARK_(node))?node:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__66547 = node;
if((G__66547 == null)){
return null;
} else {
return frontend.util.rec_get_node(G__66547,"is-comments-area");
}
}
});
frontend.handler.editor.comments_area_collapsed_node_QMARK_ = (function frontend$handler$editor$comments_area_collapsed_node_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",frontend.handler.editor.node_attr(node,"data-collapsed"));
});
frontend.handler.editor.node_contains_QMARK_ = (function frontend$handler$editor$node_contains_QMARK_(parent,child){
return cljs.core.boolean$(goog.dom.contains(parent,child));
});
frontend.handler.editor.block_node_outside_comments_area = (function frontend$handler$editor$block_node_outside_comments_area(comments_node,direction){
if(cljs.core.truth_(direction)){
var blocks = cljs.core.vec(frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$0());
var index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(comments_node,node)){
return idx;
} else {
return null;
}
}),blocks));
var step = (function (){var G__66548 = direction;
var G__66548__$1 = (((G__66548 instanceof cljs.core.Keyword))?G__66548.fqn:null);
switch (G__66548__$1) {
case "up":
case "left":
return (-1);

break;
case "down":
case "right":
return (1);

break;
default:
return (1);

}
})();
var idx = (function (){var G__66549 = index;
if((G__66549 == null)){
return null;
} else {
return (G__66549 + step);
}
})();
while(true){
if(cljs.core.truth_((function (){var and__5140__auto__ = idx;
if(cljs.core.truth_(and__5140__auto__)){
return ((((0) <= idx)) && ((idx < cljs.core.count(blocks))));
} else {
return and__5140__auto__;
}
})())){
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,idx);
if(frontend.handler.editor.node_contains_QMARK_(comments_node,node)){
var G__67118 = (idx + step);
idx = G__67118;
continue;
} else {
return node;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
frontend.handler.editor.horizontal_direction_QMARK_ = (function frontend$handler$editor$horizontal_direction_QMARK_(direction){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),direction);
});
frontend.handler.editor.comment_navigation_node_QMARK_ = (function frontend$handler$editor$comment_navigation_node_QMARK_(node){
return cljs.core.boolean$((function (){var or__5142__auto__ = frontend.handler.editor.comments_area_ancestor_node(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.comment_item_node_QMARK_(node);
}
})());
});
frontend.handler.editor.block_node_outside_comments = (function frontend$handler$editor$block_node_outside_comments(node,direction){
if(cljs.core.truth_((function (){var and__5140__auto__ = node;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.editor.horizontal_direction_QMARK_(direction);
} else {
return and__5140__auto__;
}
})())){
var blocks = cljs.core.vec(frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$0());
var index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,block_node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,block_node)){
return idx;
} else {
return null;
}
}),blocks));
var step = (function (){var G__66550 = direction;
var G__66550__$1 = (((G__66550 instanceof cljs.core.Keyword))?G__66550.fqn:null);
switch (G__66550__$1) {
case "left":
return (-1);

break;
case "right":
return (1);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66550__$1))));

}
})();
var idx = index;
while(true){
if(cljs.core.truth_((function (){var and__5140__auto__ = idx;
if(cljs.core.truth_(and__5140__auto__)){
return ((((0) <= idx)) && ((idx < cljs.core.count(blocks))));
} else {
return and__5140__auto__;
}
})())){
var block_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,idx);
if(frontend.handler.editor.comment_navigation_node_QMARK_(block_node)){
var G__67120 = (idx + step);
idx = G__67120;
continue;
} else {
return block_node;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
frontend.handler.editor.navigable_sibling_block = (function frontend$handler$editor$navigable_sibling_block(block,sibling_f,p__66551){
var map__66552 = p__66551;
var map__66552__$1 = cljs.core.__destructure_map(map__66552);
var opts = map__66552__$1;
var up_down_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66552__$1,new cljs.core.Keyword(null,"up-down?","up-down?",1084256379));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66552__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var sibling_block = (sibling_f.cljs$core$IFn$_invoke$arity$2 ? sibling_f.cljs$core$IFn$_invoke$arity$2(block,opts) : sibling_f.call(null,block,opts));
while(true){
if((sibling_block == null)){
return null;
} else {
if(cljs.core.truth_(frontend.handler.editor.comments_area_ancestor_node(sibling_block))){
var comments_node = frontend.handler.editor.comments_area_ancestor_node(sibling_block);
if(cljs.core.truth_(up_down_QMARK_)){
return comments_node;
} else {
var or__5142__auto__ = frontend.handler.editor.block_node_outside_comments_area(comments_node,direction);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.handler.editor.block_node_outside_comments(sibling_block,direction);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var G__67121 = (sibling_f.cljs$core$IFn$_invoke$arity$2 ? sibling_f.cljs$core$IFn$_invoke$arity$2(sibling_block,opts) : sibling_f.call(null,sibling_block,opts));
sibling_block = G__67121;
continue;
}
}
}
} else {
if(frontend.handler.editor.comment_item_node_QMARK_(sibling_block)){
if(cljs.core.truth_(up_down_QMARK_)){
var G__67122 = (sibling_f.cljs$core$IFn$_invoke$arity$2 ? sibling_f.cljs$core$IFn$_invoke$arity$2(sibling_block,opts) : sibling_f.call(null,sibling_block,opts));
sibling_block = G__67122;
continue;
} else {
var or__5142__auto__ = frontend.handler.editor.block_node_outside_comments(sibling_block,direction);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__67123 = (sibling_f.cljs$core$IFn$_invoke$arity$2 ? sibling_f.cljs$core$IFn$_invoke$arity$2(sibling_block,opts) : sibling_f.call(null,sibling_block,opts));
sibling_block = G__67123;
continue;
}
}
} else {
return sibling_block;

}
}
}
break;
}
});
frontend.handler.editor.comments_reply_input = (function frontend$handler$editor$comments_reply_input(comments_node){
var G__66553 = comments_node;
if((G__66553 == null)){
return null;
} else {
return G__66553.querySelector(".ls-comment-add textarea, .ls-comment-box textarea, .ls-comment-box input, .ls-comment-box [contenteditable='true']");
}
});
frontend.handler.editor.comments_reply_placeholder = (function frontend$handler$editor$comments_reply_placeholder(comments_node){
var G__66554 = comments_node;
if((G__66554 == null)){
return null;
} else {
return G__66554.querySelector(".ls-comment-reply-placeholder");
}
});
frontend.handler.editor.enter_comments_area_node_BANG_ = (function frontend$handler$editor$enter_comments_area_node_BANG_(comments_node){
frontend.state.clear_edit_BANG_();

if(frontend.handler.editor.comments_area_collapsed_node_QMARK_(comments_node)){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [comments_node], null));
} else {
var temp__5823__auto__ = frontend.handler.editor.comments_reply_input(comments_node);
if(cljs.core.truth_(temp__5823__auto__)){
var input = temp__5823__auto__;
return input.focus();
} else {
var temp__5823__auto____$1 = frontend.handler.editor.comments_reply_placeholder(comments_node);
if(cljs.core.truth_(temp__5823__auto____$1)){
var placeholder = temp__5823__auto____$1;
return placeholder.click();
} else {
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [comments_node], null));
}
}
}
});
frontend.handler.editor.focus_trigger = (function frontend$handler$editor$focus_trigger(var_args){
var G__66556 = arguments.length;
switch (G__66556) {
case 2:
return frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$2 = (function (current_block,sibling_block){
return frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$3(current_block,sibling_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-navigation?","edit-navigation?",-2134504313),true], null));
}));

(frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$3 = (function (_current_block,sibling_block,p__66557){
var map__66558 = p__66557;
var map__66558__$1 = cljs.core.__destructure_map(map__66558);
var edit_navigation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66558__$1,new cljs.core.Keyword(null,"edit-navigation?","edit-navigation?",-2134504313));
var temp__5823__auto__ = cljs.core.first(dommy.utils.__GT_Array(sibling_block.getElementsByClassName("jtrigger")));
if(cljs.core.truth_(temp__5823__auto__)){
var trigger = temp__5823__auto__;
trigger.setAttribute("data-property-nav-mode",(cljs.core.truth_(edit_navigation_QMARK_)?"edit":"focus"));

frontend.state.clear_edit_BANG_();

if(((dommy.core.has_class_QMARK_(trigger,"ls-number")) || (dommy.core.has_class_QMARK_(trigger,"ls-empty-text-property")))){
return trigger.click();
} else {
return trigger.focus();
}
} else {
var temp__5825__auto__ = frontend.handler.editor.bottom_properties_row_node(sibling_block);
if(cljs.core.truth_(temp__5825__auto__)){
var row = temp__5825__auto__;
return frontend.handler.editor.focus_bottom_properties_row_BANG_(row);
} else {
return null;
}
}
}));

(frontend.handler.editor.focus_trigger.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.move_property_focus_up_down = (function frontend$handler$editor$move_property_focus_up_down(direction){
var active_element = document.activeElement;
var f = (function (){var G__66559 = direction;
var G__66559__$1 = (((G__66559 instanceof cljs.core.Keyword))?G__66559.fqn:null);
switch (G__66559__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66559__$1))));

}
})();
var current_block = frontend.util.rec_get_node(active_element,"ls-block");
var sibling_block = frontend.handler.editor.navigable_sibling_block(current_block,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up-down?","up-down?",1084256379),true,new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null));
var property_value_container = frontend.handler.editor.property_value_container_node(sibling_block);
var sibling_block__$1 = (function (){var or__5142__auto__ = frontend.handler.editor.property_value_inner_block(property_value_container);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return sibling_block;
}
})();
var bottom_properties_row = frontend.handler.editor.bottom_properties_row_node(sibling_block__$1);
if(cljs.core.truth_(property_value_container)){
frontend.state.clear_selection_BANG_();

frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(property_value_container);

return frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$3(current_block,property_value_container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-navigation?","edit-navigation?",-2134504313),false], null));
} else {
if(cljs.core.truth_(bottom_properties_row)){
frontend.state.clear_edit_BANG_();

return frontend.handler.editor.focus_bottom_properties_row_BANG_(bottom_properties_row);
} else {
if(frontend.handler.editor.comments_area_node_QMARK_(sibling_block__$1)){
return frontend.handler.editor.enter_comments_area_node_BANG_(sibling_block__$1);
} else {
var temp__5825__auto__ = frontend.handler.editor.node_attr(sibling_block__$1,"blockid");
if(cljs.core.truth_(temp__5825__auto__)){
var sibling_block_id = temp__5825__auto__;
var container_id = (function (){var G__66560 = frontend.handler.editor.node_attr(sibling_block__$1,"containerid");
if((G__66560 == null)){
return null;
} else {
return parseInt(G__66560);
}
})();
var block = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
var G__66561 = block;
var G__66562 = (0);
var G__66563 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66561,G__66562,G__66563) : frontend.handler.editor.edit_block_BANG_.call(null,G__66561,G__66562,G__66563));
} else {
return null;
}

}
}
}
});
frontend.handler.editor.move_cross_boundary_up_down = (function frontend$handler$editor$move_cross_boundary_up_down(direction,move_opts){
var input = ((cljs.core.contains_QMARK_(move_opts,new cljs.core.Keyword(null,"input","input",556931961)))?new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(move_opts):frontend.state.get_input());
var active_element = document.activeElement;
var input_or_active_element = (function (){var or__5142__auto__ = input;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return active_element;
}
})();
if(cljs.core.truth_(input_or_active_element)){
var repo = frontend.state.get_current_repo();
var f = (function (){var G__66565 = direction;
var G__66565__$1 = (((G__66565 instanceof cljs.core.Keyword))?G__66565.fqn:null);
switch (G__66565__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66565__$1))));

}
})();
var current_block = frontend.util.rec_get_node(input_or_active_element,"ls-block");
var sibling_block = frontend.handler.editor.navigable_sibling_block(current_block,f,(function (){var G__66566 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up-down?","up-down?",1084256379),true,new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"exclude-property?","exclude-property?",1621722390).cljs$core$IFn$_invoke$arity$1(move_opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66566,new cljs.core.Keyword(null,"exclude-property?","exclude-property?",1621722390),true);
} else {
return G__66566;
}
})());
var map__66564 = frontend.state.get_edit_block();
var map__66564__$1 = cljs.core.__destructure_map(map__66564);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66564__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66564__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var property_value_container = (cljs.core.truth_(frontend.handler.editor.property_value_node_QMARK_(sibling_block))?sibling_block:null);
var sibling_block__$1 = (function (){var or__5142__auto__ = frontend.handler.editor.property_value_inner_block(property_value_container);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return sibling_block;
}
})();
var current_bottom_properties_row = frontend.handler.editor.bottom_properties_row_in_block(current_block);
var bottom_properties_row = frontend.handler.editor.bottom_properties_row_node(sibling_block__$1);
var sibling_bottom_properties_row = frontend.handler.editor.bottom_properties_row_in_block(sibling_block__$1);
var property_value_container_QMARK_ = (function (){var and__5140__auto__ = property_value_container;
if(cljs.core.truth_(and__5140__auto__)){
return (frontend.handler.editor.property_value_inner_block(property_value_container) == null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(sibling_block__$1)){
var value = frontend.state.get_edit_content();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = uuid;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(frontend.state.block_component_editing_QMARK_())) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(title,clojure.string.trim(value))));
} else {
return and__5140__auto__;
}
})())?frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value):null)),(function (___27434__auto__){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction);
if(and__5140__auto__){
var and__5140__auto____$1 = input;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_element,input);
if(and__5140__auto____$2){
return current_bottom_properties_row;
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?(function (){
frontend.state.clear_edit_BANG_();

return frontend.handler.editor.focus_bottom_properties_row_BANG_(current_bottom_properties_row);
})()
:(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction);
if(and__5140__auto__){
return sibling_bottom_properties_row;
} else {
return and__5140__auto__;
}
})())?(function (){
frontend.state.clear_edit_BANG_();

return frontend.handler.editor.focus_bottom_properties_row_BANG_(sibling_bottom_properties_row);
})()
:(cljs.core.truth_((function (){var and__5140__auto__ = dommy.core.has_class_QMARK_(sibling_block__$1,"block-add-button");
if(and__5140__auto__){
return frontend.util.rec_get_node(current_block,"ls-page-title");
} else {
return and__5140__auto__;
}
})())?sibling_block__$1.click():(cljs.core.truth_(bottom_properties_row)?(function (){
frontend.state.clear_edit_BANG_();

return frontend.handler.editor.focus_bottom_properties_row_BANG_(bottom_properties_row);
})()
:(cljs.core.truth_(property_value_container_QMARK_)?frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$3(current_block,sibling_block__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-navigation?","edit-navigation?",-2134504313),true], null)):((frontend.handler.editor.comments_area_node_QMARK_(sibling_block__$1))?frontend.handler.editor.enter_comments_area_node_BANG_(sibling_block__$1):(function (){var temp__5825__auto__ = frontend.handler.editor.node_attr(sibling_block__$1,"blockid");
if(cljs.core.truth_(temp__5825__auto__)){
var sibling_block_id = temp__5825__auto__;
var container_id = (function (){var G__66567 = frontend.handler.editor.node_attr(sibling_block__$1,"containerid");
if((G__66567 == null)){
return null;
} else {
return parseInt(G__66567);
}
})();
var new_uuid = cljs.core.uuid(sibling_block_id);
var block = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_uuid], null);
var G__66568 = block;
var G__66569 = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(move_opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (cljs.core.truth_(input)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [direction,frontend.util.get_line_pos(input.value,frontend.util.get_selection_start(input))], null):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
}
})();
var G__66570 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66568,G__66569,G__66570) : frontend.handler.editor.edit_block_BANG_.call(null,G__66568,G__66569,G__66570));
} else {
return null;
}
})()
)))))));
}));
}));
} else {
var G__66571 = direction;
var G__66571__$1 = (((G__66571 instanceof cljs.core.Keyword))?G__66571.fqn:null);
switch (G__66571__$1) {
case "up":
if(cljs.core.truth_(input)){
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,(0));
} else {
if(cljs.core.truth_(current_block)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(current_block);

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_block], null));
} else {
return null;
}
}

break;
case "down":
if(cljs.core.truth_(input)){
return frontend.util.cursor.move_cursor_to_end(input);
} else {
return null;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66571__$1))));

}
}
} else {
return null;
}
});
frontend.handler.editor.keydown_up_down_handler = (function frontend$handler$editor$keydown_up_down_handler(direction,p__66572){
var map__66573 = p__66572;
var map__66573__$1 = cljs.core.__destructure_map(map__66573);
var move_opts = map__66573__$1;
var _pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66573__$1,new cljs.core.Keyword(null,"_pos","_pos",-761936726));
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113));
var down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
if(up_QMARK_){
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,selected_start);
} else {
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,selected_end);
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = input;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = (function (){var and__5140__auto____$1 = up_QMARK_;
if(and__5140__auto____$1){
return frontend.util.cursor.textarea_cursor_first_row_QMARK_(input);
} else {
return and__5140__auto____$1;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto____$1 = down_QMARK_;
if(and__5140__auto____$1){
return frontend.util.cursor.textarea_cursor_last_row_QMARK_(input);
} else {
return and__5140__auto____$1;
}
}
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.move_cross_boundary_up_down(direction,move_opts);
} else {
if(cljs.core.truth_(input)){
if(up_QMARK_){
return frontend.util.cursor.move_cursor_up(input);
} else {
return frontend.util.cursor.move_cursor_down(input);
}
} else {
return null;
}

}
}
});
frontend.handler.editor.move_to_block_when_cross_boundary = (function frontend$handler$editor$move_to_block_when_cross_boundary(direction,p__66574){
var map__66575 = p__66574;
var map__66575__$1 = cljs.core.__destructure_map(map__66575);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66575__$1,new cljs.core.Keyword(null,"block","block",664686210));
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),direction);
var pos = ((up_QMARK_)?new cljs.core.Keyword(null,"max","max",61366548):(0));
var map__66576 = (function (){var or__5142__auto__ = block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_edit_block();
}
})();
var map__66576__$1 = cljs.core.__destructure_map(map__66576);
var block__$1 = map__66576__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66576__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var repo = frontend.state.get_current_repo();
var editing_block = frontend.state.get_editor_block_container();
var f = ((up_QMARK_)?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed);
var sibling_block = frontend.handler.editor.navigable_sibling_block(editing_block,f,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null));
var property_value_container = (cljs.core.truth_((function (){var and__5140__auto__ = sibling_block;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.editor.property_value_node_QMARK_(sibling_block);
} else {
return and__5140__auto__;
}
})())?sibling_block:null);
var sibling_block__$1 = (function (){var or__5142__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = up_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = editing_block;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = property_value_container;
if(cljs.core.truth_(and__5140__auto____$2)){
return goog.dom.contains(property_value_container,editing_block);
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?frontend.handler.editor.navigable_sibling_block(property_value_container,f,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null)):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.handler.editor.property_value_inner_block(property_value_container);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return sibling_block;
}
}
})();
if(cljs.core.truth_(sibling_block__$1)){
var content_67128 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block__$1);
var value_67129 = frontend.state.get_edit_content();
if(cljs.core.truth_((function (){var and__5140__auto__ = value_67129;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content_67128,clojure.string.trim(value_67129));
} else {
return and__5140__auto__;
}
})())){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value_67129);
} else {
}

var sibling_block_id = frontend.handler.editor.node_attr(sibling_block__$1,"blockid");
if(cljs.core.truth_(sibling_block_id)){
var container_id = (function (){var G__66577 = frontend.handler.editor.node_attr(sibling_block__$1,"containerid");
if((G__66577 == null)){
return null;
} else {
return parseInt(G__66577);
}
})();
var block__$2 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
var G__66578 = block__$2;
var G__66579 = pos;
var G__66580 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66578,G__66579,G__66580) : frontend.handler.editor.edit_block_BANG_.call(null,G__66578,G__66579,G__66580));
} else {
if(cljs.core.truth_(frontend.handler.editor.property_value_node_QMARK_(sibling_block__$1))){
return frontend.handler.editor.focus_trigger.cljs$core$IFn$_invoke$arity$2(editing_block,sibling_block__$1);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = dommy.core.has_class_QMARK_(sibling_block__$1,"block-add-button");
if(and__5140__auto__){
return frontend.util.rec_get_node(editing_block,"ls-page-title");
} else {
return and__5140__auto__;
}
})())){
return sibling_block__$1.click();
} else {
return null;

}
}
}
} else {
return null;
}
});
frontend.handler.editor.keydown_arrow_handler = (function frontend$handler$editor$keydown_arrow_handler(direction){
var input = frontend.state.get_input();
var element = document.activeElement;
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937));
var right_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833));
var block = frontend.state.get_edit_block();
var property_QMARK_ = frontend.util.entity.property_QMARK_(block);
if(cljs.core.truth_((function (){var and__5140__auto__ = input;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(input,element);
} else {
return and__5140__auto__;
}
})())){
return input.focus();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,element)){
if(cljs.core.truth_((function (){var and__5140__auto__ = property_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((right_QMARK_) && (cljs.core.not(frontend.util.cursor.end_QMARK_(input))));
} else {
return and__5140__auto__;
}
})())){
return frontend.util.cursor.move_cursor_to_end(input);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = property_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((left_QMARK_) && (cljs.core.not(frontend.util.cursor.start_QMARK_(input))));
} else {
return and__5140__auto__;
}
})())){
return frontend.util.cursor.move_cursor_to_start(input);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
if(left_QMARK_){
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,selected_start);
} else {
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,selected_end);

}
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = left_QMARK_;
if(and__5140__auto__){
return frontend.util.cursor.start_QMARK_(input);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = right_QMARK_;
if(and__5140__auto__){
return frontend.util.cursor.end_QMARK_(input);
} else {
return and__5140__auto__;
}
}
})())){
return frontend.handler.editor.move_to_block_when_cross_boundary(direction,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(left_QMARK_){
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$1(input);
} else {
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1(input);
}

}
}
}
}
} else {
return null;

}
}
});
frontend.handler.editor.delete_and_update = (function frontend$handler$editor$delete_and_update(input,start,end){
frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",start,end);

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),input.value);
});
frontend.handler.editor.delete_concat = (function frontend$handler$editor$delete_concat(current_block){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = (function (){var G__66581 = frontend.state.get_input();
var G__66581__$1 = (((G__66581 == null))?null:frontend.util.rec_get_node(G__66581,"ls-block"));
var G__66581__$2 = (((G__66581__$1 == null))?null:dommy.core.attr(G__66581__$1,"blockid"));
if((G__66581__$2 == null)){
return null;
} else {
return cljs.core.uuid(G__66581__$2);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
}
})()),(function (current_block_id){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_with_children.cljs$core$IFn$_invoke$arity$variadic(repo,current_block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),true], null)], 0))),(function (current_block_result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.worker_block_with_children(current_block_result)),(function (hydrated_current_block){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.util.collapsed_QMARK_(hydrated_current_block)),(function (collapsed_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(collapsed_QMARK_)?null:frontend.util.get_next_block_non_collapsed(frontend.util.rec_get_node(frontend.state.get_input(),"ls-block"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exclude-property?","exclude-property?",1621722390),true], null)))),(function (next_node){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = (function (){var G__66582 = dommy.core.attr(next_node,"blockid");
if((G__66582 == null)){
return null;
} else {
return cljs.core.uuid(G__66582);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var next_block_id = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_with_children.cljs$core$IFn$_invoke$arity$variadic(repo,next_block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),true], null)], 0))),(function (result){
return promesa.protocols._promise(frontend.handler.editor.worker_block_with_children(result));
}));
}));
} else {
return null;
}
})()),(function (next_block){
return promesa.protocols._promise((cljs.core.truth_(collapsed_QMARK_)?null:(((next_block == null))?null:(function (){var repo__$1 = frontend.state.get_current_repo();
var editor_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.editor.get_state(),new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(next_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(next_block),new cljs.core.Keyword(null,"block-container","block-container",-15068235),next_node,new cljs.core.Keyword(null,"current-block","current-block",1027687970),hydrated_current_block,new cljs.core.Keyword(null,"next-block","next-block",-53854328),next_block,new cljs.core.Keyword(null,"delete-concat?","delete-concat?",48076305),true], 0));
return frontend.handler.editor.delete_block_inner_BANG_(repo__$1,editor_state);
})()
)));
}));
}));
}));
}));
}));
}));
}));
}));
});
frontend.handler.editor.keydown_delete_handler = (function frontend$handler$editor$keydown_delete_handler(_e){
var temp__5825__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var end_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_pos,cljs.core.count(value));
var current_block = frontend.state.get_edit_block();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
if(cljs.core.truth_(current_block)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
return frontend.handler.editor.delete_and_update(input,selected_start,selected_end);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = end_QMARK_;
if(and__5140__auto__){
return current_block;
} else {
return and__5140__auto__;
}
})())){
var editor_state = frontend.handler.editor.get_state();
var custom_query_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(editor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951)], null));
if(cljs.core.truth_(custom_query_QMARK_)){
return null;
} else {
return frontend.handler.editor.delete_concat(current_block);
}
} else {
return frontend.handler.editor.delete_and_update(input,current_pos,frontend.util.safe_inc_current_pos_from_start(input.value,current_pos));

}
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.delete_block_when_zero_pos_BANG_ = (function frontend$handler$editor$delete_block_when_zero_pos_BANG_(e){
var input = frontend.state.get_input();
var current_pos = frontend.util.cursor.pos(input);
if((current_pos === (0))){
frontend.util.stop(e);

var repo = frontend.state.get_current_repo();
var block = frontend.state.get_edit_block();
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var editor_state = frontend.handler.editor.get_state();
var editor_config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(editor_state);
var previous_block = (function (){var G__66583 = frontend.handler.editor.previous_block_node(new cljs.core.Keyword(null,"block-container","block-container",-15068235).cljs$core$IFn$_invoke$arity$1(editor_state),editor_config);
if((G__66583 == null)){
return null;
} else {
return frontend.handler.editor.mounted_block(G__66583);
}
})();
var custom_query_QMARK_ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(editor_config);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_left_sibling_or_parent.cljs$core$IFn$_invoke$arity$3(repo,block,previous_block)),(function (left_or_parent){
return promesa.protocols._promise((function (){var top_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_or_parent),frontend.handler.editor.block_page_id(block));
var single_block_QMARK_ = (cljs.core.truth_(e)?frontend.handler.editor.inside_of_single_block(e.target):false);
var root_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block.temp","container","block.temp/container",-493626206).cljs$core$IFn$_invoke$arity$1(block),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))));
if(((cljs.core.not((function (){var and__5140__auto__ = top_block_QMARK_;
if(and__5140__auto__){
var or__5142__auto__ = frontend.util.entity.journal_QMARK_(left_or_parent);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(clojure.string.blank_QMARK_(value)));
}
} else {
return and__5140__auto__;
}
})())) && (((cljs.core.not(frontend.handler.editor.editor_block_preserved_on_empty_title_merge_QMARK_(block))) && ((((!(root_block_QMARK_))) && ((((!(single_block_QMARK_))) && (cljs.core.not(custom_query_QMARK_)))))))))){
if(frontend.handler.editor.own_order_number_list_QMARK_(block)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___27434__auto__){
return promesa.protocols._promise(frontend.handler.editor.remove_block_own_order_list_type_BANG_(block));
}));
}));
} else {
return frontend.handler.editor.delete_block_inner_BANG_(repo,editor_state);
}
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.editor.keydown_backspace_handler = (function frontend$handler$editor$keydown_backspace_handler(cut_QMARK_,e){
var input = frontend.state.get_input();
var element = document.activeElement;
if(frontend.handler.editor.pending_new_block_QMARK_()){
frontend.util.stop(e);

return frontend.handler.editor.backspace_pending_new_block_BANG_((frontend.util.get_selection_start(e.target) === (0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,element)){
var id = frontend.state.get_edit_input_id();
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var deleted = (function (){var and__5140__auto__ = (current_pos > (0));
if(and__5140__auto__){
return frontend.util.nth_safe(value,(current_pos - (1)));
} else {
return and__5140__auto__;
}
})();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var repo = frontend.state.get_current_repo();
frontend.handler.block.mark_last_input_time_BANG_(repo);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
frontend.util.stop(e);

if(cljs.core.truth_(cut_QMARK_)){
document.execCommand("copy");
} else {
}

return frontend.handler.editor.delete_and_update(input,selected_start,selected_end);
} else {
if((current_pos === (0))){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return null;
} else {
return frontend.handler.editor.delete_block_when_zero_pos_BANG_(e);
}
} else {
if((((current_pos > (0))) && (cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([frontend.commands.command_ask,frontend.commands.command_trigger]),frontend.util.nth_safe(value,(current_pos - (1))))))){
frontend.util.stop(e);

frontend.commands.restore_state();

return frontend.handler.editor.delete_and_update(input,(current_pos - (1)),current_pos);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = deleted;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.contains_QMARK_(cljs.core.set(cljs.core.keys(frontend.handler.editor.autopair.delete_map)),deleted)) && ((((cljs.core.count(value) >= (current_pos + (1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,current_pos),cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.autopair.delete_map,deleted))))));
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(e);

frontend.commands.delete_pair_BANG_(id);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"[")) && (frontend.state.get_editor_show_page_search_QMARK_()))){
return frontend.state.clear_editor_action_BANG_();
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"(")) && (frontend.state.get_editor_show_block_search_QMARK_()))){
return frontend.state.clear_editor_action_BANG_();
} else {
return null;

}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"#")) && (frontend.state.get_editor_show_page_search_hashtag_QMARK_()))){
frontend.state.clear_editor_action_BANG_();

return frontend.handler.editor.delete_and_update(input,(current_pos - (1)),current_pos);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = input;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.mobile.util.native_ios_QMARK_());
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(e);

return frontend.handler.editor.delete_and_update(input,frontend.util.safe_dec_current_pos_from_end(input.value,current_pos),current_pos);
} else {
return null;
}

}
}
}
}
}
} else {
return false;

}
}
});
frontend.handler.editor.moved_block_edit_fn = (function frontend$handler$editor$moved_block_edit_fn(block,pos,content,container_id){
return (function (rows){
var block_SINGLEQUOTE_ = (function (){var or__5142__auto__ = cljs.core.some((function (p1__66584_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__66584_SHARP_))){
return p1__66584_SHARP_;
} else {
return null;
}
}),rows);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})();
var G__66585 = block_SINGLEQUOTE_;
var G__66586 = pos;
var G__66587 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),content,new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false,new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false,new cljs.core.Keyword(null,"skip-load?","skip-load?",1029467451),true], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66585,G__66586,G__66587) : frontend.handler.editor.edit_block_BANG_.call(null,G__66585,G__66586,G__66587));
});
});
frontend.handler.editor.indent_outdent = (function frontend$handler$editor$indent_outdent(indent_QMARK_){
var map__66588 = frontend.handler.editor.get_state();
var map__66588__$1 = cljs.core.__destructure_map(map__66588);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66588__$1,new cljs.core.Keyword(null,"block","block",664686210));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66588__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66588__$1,new cljs.core.Keyword(null,"value","value",305978217));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66588__$1,new cljs.core.Keyword(null,"config","config",994861415));
var container_id = frontend.handler.editor.get_new_container_id((cljs.core.truth_(indent_QMARK_)?new cljs.core.Keyword(null,"indent","indent",-148200125):new cljs.core.Keyword(null,"outdent","outdent",467209411)),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(block)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.get_focused_root_block()),(function (root_block){
return promesa.protocols._promise((cljs.core.truth_(frontend.handler.editor.block_eligible_for_indent_outdent_QMARK_(block,indent_QMARK_,root_block))?(function (){var block__$1 = frontend.handler.editor.current_block_with_title(block,value);
var edit_block_fn = frontend.handler.editor.moved_block_edit_fn(block__$1,pos,value,(function (){var or__5142__auto__ = container_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
}
})());
if(cljs.core.truth_(indent_QMARK_)){
frontend.handler.editor.expand_collapsed_indent_target_BANG_(block__$1);
} else {
}

return frontend.handler.block.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1], null),indent_QMARK_,frontend.handler.editor.save_current_block_BANG_,edit_block_fn);
})():null));
}));
}));
} else {
return null;
}
});
frontend.handler.editor.keydown_tab_handler = (function frontend$handler$editor$keydown_tab_handler(direction){
return (function (e){
if(cljs.core.truth_(frontend.handler.editor.focus_in_shui_menu_QMARK_())){
} else {
if(frontend.handler.editor.pending_new_block_QMARK_()){
frontend.util.stop(e);

frontend.handler.editor.queue_pending_new_block_tab_BANG_(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),direction));
} else {
if(frontend.state.editing_QMARK_()){
if(cljs.core.truth_(frontend.state.get_editor_action())){
} else {
frontend.util.stop(e);

frontend.handler.editor.indent_outdent((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),direction))));
}
} else {
if(frontend.state.selection_QMARK_()){
frontend.util.stop(e);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));

frontend.handler.editor.on_tab(direction);
} else {
}
}
}
}

return null;
});
});
frontend.handler.editor.double_chars_typed_QMARK_ = (function frontend$handler$editor$double_chars_typed_QMARK_(value,pos,key,sym){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sym);
if(and__5140__auto__){
var and__5140__auto____$1 = (cljs.core.count(value) >= (1));
if(and__5140__auto____$1){
var and__5140__auto____$2 = (pos > (0));
if(and__5140__auto____$2){
var and__5140__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(pos - (1))),sym);
if(and__5140__auto____$3){
if((cljs.core.count(value) > pos)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,pos),sym);
} else {
return true;
}
} else {
return and__5140__auto____$3;
}
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
 * NOTE: Keydown cannot be used on Android platform
 */
frontend.handler.editor.keydown_not_matched_handler = (function frontend$handler$editor$keydown_not_matched_handler(format){
return (function (e,_key_code){
var input_id = frontend.state.get_edit_input_id();
var input = frontend.state.get_input();
var key = frontend.handler.editor.goog$module$goog$object.get(e,"key");
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var ctrlKey = frontend.handler.editor.goog$module$goog$object.get(e,"ctrlKey");
var metaKey = frontend.handler.editor.goog$module$goog$object.get(e,"metaKey");
var pos = frontend.util.cursor.pos(input);
var hashtag_QMARK_ = (function (){var or__5142__auto__ = frontend.handler.editor.autopair.surround_by_QMARK_(input,"#"," ");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.handler.editor.autopair.surround_by_QMARK_(input,"#",new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#");
}
}
})();
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(frontend.state.get_state(new cljs.core.Keyword("editor","start-pos","editor/start-pos",-40843537)));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.starts_with_QMARK_(key,"Arrow");
} else {
return and__5140__auto__;
}
}
})())){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","start-pos","editor/start-pos",-40843537),pos);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-search","page-search",1842925280),frontend.state.get_editor_action())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,frontend.commands.hashtag)))){
frontend.util.stop(e);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.validation","name-no-hash","page.validation/name-no-hash",867711017)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
if(frontend.handler.editor.pending_new_block_QMARK_()){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))).length))){
frontend.handler.editor.append_pending_new_block_text_BANG_(key);
} else {
}

return frontend.util.stop(e);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowRight",null,"ArrowLeft",null], null), null),key)){
return frontend.state.clear_editor_action_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.native_event_is_composing_QMARK_(e);
if(cljs.core.truth_(and__5140__auto__)){
return (((!(hashtag_QMARK_))) && ((!(frontend.state.get_editor_show_page_search_hashtag_QMARK_()))));
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = ctrlKey;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return metaKey;
}
})())){
return null;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#")) && ((((pos > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",frontend.util.nth_safe(value,(pos - (1))))))))){
return frontend.state.clear_editor_action_BANG_();
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",key)) && (clojure.string.blank_QMARK_(frontend.util.get_selected_text())))){
frontend.util.stop(e);

return frontend.commands.simple_insert_BANG_(input_id,"$$",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(1)], null));
} else {
if(((cljs.core.contains_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(frontend.handler.editor.autopair.reversed_autopair_map)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["`",null], null), null)),key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_current_input_char(input),key)))){
frontend.util.stop(e);

return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1(input);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (frontend.handler.editor.autopair.autopair_when_selected.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.autopair.autopair_when_selected.cljs$core$IFn$_invoke$arity$1(key) : frontend.handler.editor.autopair.autopair_when_selected.call(null,key));
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.blank_QMARK_(frontend.util.get_selected_text());
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
if((!((frontend.state.get_state(new cljs.core.Keyword("editor","action","editor/action",449993861)) == null)))){
return null;
} else {
if((((!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())))) && (cljs.core.contains_QMARK_(frontend.util.keycode.left_square_brackets_keys,key)))){
frontend.handler.editor.autopair.autopair(input_id,"[",format,null);

return frontend.util.stop(e);
} else {
if((((!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())))) && (cljs.core.contains_QMARK_(frontend.util.keycode.left_paren_keys,key)))){
frontend.util.stop(e);

return frontend.handler.editor.autopair.autopair(input_id,"(",format,null);
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.contains_QMARK_(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(frontend.handler.editor.autopair.autopair_map)),"("),key);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.handler.editor.autopair.autopair_left_paren_QMARK_(input,key);
}
})())){
var curr = frontend.handler.editor.get_current_input_char(input);
var prev = frontend.util.nth_safe(value,(pos - (1)));
frontend.util.stop(e);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"`")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",curr)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("`",prev)))))){
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1(input);
} else {
return frontend.handler.editor.autopair.autopair(input_id,key,format,null);
}
} else {
if((function (){var sym = ";";
return frontend.handler.editor.double_chars_typed_QMARK_(value,pos,key,sym);
})()){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491)], null));
} else {
if((function (){var sym = "^";
return frontend.handler.editor.double_chars_typed_QMARK_(value,pos,key,sym);
})()){
return frontend.commands.simple_insert_BANG_(input_id,"^^",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null));
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
});
frontend.handler.editor.block_ref_trigger_keys = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frontend.util.keycode.left_square_brackets_keys,"Process");
frontend.handler.editor.block_ref_trigger_key_QMARK_ = (function frontend$handler$editor$block_ref_trigger_key_QMARK_(k){
return cljs.core.contains_QMARK_(frontend.handler.editor.block_ref_trigger_keys,k);
});
frontend.handler.editor.replacement_edit = (function frontend$handler$editor$replacement_edit(value,replacement,p__66608){
var map__66609 = p__66608;
var map__66609__$1 = cljs.core.__destructure_map(map__66609);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66609__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66609__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(replacement)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end))),new cljs.core.Keyword(null,"pos","pos",-864607220),(start + (2))], null);
});
frontend.handler.editor.double_left_trigger_edit = (function frontend$handler$editor$double_left_trigger_edit(value,current_pos,left,replacement){
var start = (current_pos - ((2) * cljs.core.count(left)));
if((((start >= (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,start,current_pos),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left)))))){
return frontend.handler.editor.replacement_edit(value,replacement,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),current_pos], null));
} else {
return null;
}
});
frontend.handler.editor.fullwidth_block_ref_patterns = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["\u3010\u3010\u3011\u3011",null,"\u3010\u3010\u3011",null,"\u3010\u3011\u3010\u3011",null,"\u3010\u3011\u3010",null,"\u3010\u3010",null], null), null);
frontend.handler.editor.fullwidth_block_ref_trigger_range = (function frontend$handler$editor$fullwidth_block_ref_trigger_range(value,current_pos){
var min_start = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(current_pos - (4)));
var max_end = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.count(value),(current_pos + (4)));
var candidates = (function (){var iter__5628__auto__ = (function frontend$handler$editor$fullwidth_block_ref_trigger_range_$_iter__66611(s__66612){
return (new cljs.core.LazySeq(null,(function (){
var s__66612__$1 = s__66612;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__66612__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var start = cljs.core.first(xs__6385__auto__);
var iterys__5624__auto__ = ((function (s__66612__$1,start,xs__6385__auto__,temp__5825__auto__,min_start,max_end){
return (function frontend$handler$editor$fullwidth_block_ref_trigger_range_$_iter__66611_$_iter__66613(s__66614){
return (new cljs.core.LazySeq(null,((function (s__66612__$1,start,xs__6385__auto__,temp__5825__auto__,min_start,max_end){
return (function (){
var s__66614__$1 = s__66614;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__66614__$1);
if(temp__5825__auto____$1){
var s__66614__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__66614__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__66614__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__66616 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__66615 = (0);
while(true){
if((i__66615 < size__5627__auto__)){
var end = cljs.core._nth(c__5626__auto__,i__66615);
var text = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,start,end);
if(cljs.core.contains_QMARK_(frontend.handler.editor.fullwidth_block_ref_patterns,text)){
cljs.core.chunk_append(b__66616,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null));

var G__67130 = (i__66615 + (1));
i__66615 = G__67130;
continue;
} else {
var G__67131 = (i__66615 + (1));
i__66615 = G__67131;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66616),frontend$handler$editor$fullwidth_block_ref_trigger_range_$_iter__66611_$_iter__66613(cljs.core.chunk_rest(s__66614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66616),null);
}
} else {
var end = cljs.core.first(s__66614__$2);
var text = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,start,end);
if(cljs.core.contains_QMARK_(frontend.handler.editor.fullwidth_block_ref_patterns,text)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null),frontend$handler$editor$fullwidth_block_ref_trigger_range_$_iter__66611_$_iter__66613(cljs.core.rest(s__66614__$2)));
} else {
var G__67132 = cljs.core.rest(s__66614__$2);
s__66614__$1 = G__67132;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__66612__$1,start,xs__6385__auto__,temp__5825__auto__,min_start,max_end))
,null,null));
});})(s__66612__$1,start,xs__6385__auto__,temp__5825__auto__,min_start,max_end))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(current_pos,(max_end + (1)))));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$handler$editor$fullwidth_block_ref_trigger_range_$_iter__66611(cljs.core.rest(s__66612__$1)));
} else {
var G__67133 = cljs.core.rest(s__66612__$1);
s__66612__$1 = G__67133;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_start,current_pos));
})();
if(cljs.core.seq(candidates)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,(function (p1__66610_SHARP_){
return (new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__66610_SHARP_) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__66610_SHARP_));
}),candidates);
} else {
return null;
}
});
frontend.handler.editor.fullwidth_block_ref_trigger_edit = (function frontend$handler$editor$fullwidth_block_ref_trigger_edit(value,current_pos){
var temp__5825__auto__ = frontend.handler.editor.fullwidth_block_ref_trigger_range(value,current_pos);
if(cljs.core.truth_(temp__5825__auto__)){
var range = temp__5825__auto__;
return frontend.handler.editor.replacement_edit(value,logseq.common.util.page_ref.left_and_right_brackets,range);
} else {
return null;
}
});
frontend.handler.editor.block_ref_trigger_edit = (function frontend$handler$editor$block_ref_trigger_edit(value,current_pos,k){
var or__5142__auto__ = frontend.handler.editor.fullwidth_block_ref_trigger_edit(value,current_pos);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(frontend.util.keycode.left_square_brackets_keys,k)){
return frontend.handler.editor.double_left_trigger_edit(value,current_pos,"[",logseq.common.util.page_ref.left_and_right_brackets);
} else {
return null;
}
}
});
frontend.handler.editor.apply_bracket_trigger_BANG_ = (function frontend$handler$editor$apply_bracket_trigger_BANG_(input,p__66620,command_step){
var map__66621 = p__66620;
var map__66621__$1 = cljs.core.__destructure_map(map__66621);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66621__$1,new cljs.core.Keyword(null,"value","value",305978217));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66621__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
frontend.state.set_block_content_and_last_pos_BANG_(input.id,value,pos);

frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(command_step);

frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,pos);

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));
});
frontend.handler.editor.default_case_for_keyup_handler = (function frontend$handler$editor$default_case_for_keyup_handler(input,current_pos,k,code,is_processed_QMARK_){
var blank_selected_QMARK_ = clojure.string.blank_QMARK_(frontend.util.get_selected_text());
var non_enter_processed_QMARK_ = (function (){var and__5140__auto__ = is_processed_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(code,frontend.util.keycode.enter_code);
} else {
return and__5140__auto__;
}
})();
var editor_action = frontend.state.get_editor_action();
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var block_ref_trigger_QMARK_ = ((blank_selected_QMARK_) && (frontend.handler.editor.block_ref_trigger_key_QMARK_(k)));
var block_ref_edit = ((block_ref_trigger_QMARK_)?frontend.handler.editor.block_ref_trigger_edit(value,current_pos,k):null);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editor_action,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
if(and__5140__auto__){
return block_ref_edit;
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.apply_bracket_trigger_BANG_(input,block_ref_edit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page-hashtag","editor/search-page-hashtag",2082188401)], null));
} else {
if(cljs.core.truth_(editor_action)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = block_ref_edit;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.handler.editor.autopair.wrapped_by_QMARK_(input,logseq.common.util.page_ref.left_brackets,logseq.common.util.page_ref.right_brackets));
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.apply_bracket_trigger_BANG_(input,block_ref_edit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(non_enter_processed_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null,"Escape",null], null), null),k)));
if(and__5140__auto____$1){
return frontend.handler.editor.autopair.wrapped_by_QMARK_(input,logseq.common.util.page_ref.left_brackets,logseq.common.util.page_ref.right_brackets);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var orig_pos = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var square_pos = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(orig_pos)),logseq.common.util.page_ref.left_brackets);
var pos = (square_pos + (2));
var _ = frontend.state.set_editor_last_pos_BANG_(pos);
var pos__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(orig_pos,new cljs.core.Keyword(null,"pos","pos",-864607220),pos);
var command_step = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",frontend.util.nth_safe(value,(square_pos - (1)))))?new cljs.core.Keyword("editor","search-page-hashtag","editor/search-page-hashtag",2082188401):new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812));
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_step], null));

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos__$1], null));
} else {
return null;

}
}
}
}
});
frontend.handler.editor.keyup_handler = (function frontend$handler$editor$keyup_handler(_state,input){
return (function (e,key_code){
if(cljs.core.truth_(frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$1(e))){
return null;
} else {
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var c = frontend.util.nth_safe(value,(current_pos - (1)));
var vec__66625 = (cljs.core.truth_((function (){var and__5140__auto__ = c;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(229))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(0))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [value.charCodeAt((current_pos - (1))),c,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c," "))?"Space":(cljs.core.truth_(cljs.core.parse_long(c))?(""+"Digit"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)):(""+"Key"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(c)))
)),false], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_code,frontend.handler.editor.goog$module$goog$object.get(e,"key"),(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?frontend.handler.editor.goog$module$goog$object.get(e,"key"):frontend.handler.editor.event_code(e)),frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2(e,true)], null));
var key_code__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66625,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66625,(1),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66625,(2),null);
var is_processed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66625,(3),null);
var comment_editor_QMARK_ = new cljs.core.Keyword(null,"comment-editor?","comment-editor?",-485501961).cljs$core$IFn$_invoke$arity$1(cljs.core.last(frontend.state.get_editor_args()));
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["``````",null,"```",null], null), null),value)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["`",null,"Dead",null,"Process",null," ",null,"Unidentified",null], null), null),k)))){
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input.id,"");

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","upsert-type-block","editor/upsert-type-block",-1673621559),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.state.get_edit_block(),new cljs.core.Keyword("block","title","block/title",710445684),""),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"update-current-block?","update-current-block?",-507726186),true], null)], null));
} else {
if(((cljs.core.not(comment_editor_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,">")))){
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input.id,"");

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","upsert-type-block","editor/upsert-type-block",-1673621559),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.state.get_edit_block(),new cljs.core.Keyword("block","title","block/title",710445684),""),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"update-current-block?","update-current-block?",-507726186),true], null)], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"commands","commands",161008658),frontend.state.get_editor_action())) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,frontend.commands.command_trigger)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.commands.command_trigger,cljs.core.second(cljs.core.re_find(/(\S+)\s+$/,value)))){
frontend.state.clear_editor_action_BANG_();
} else {
var command_67134 = frontend.handler.editor.get_last_command(input);
var matched_commands_67135 = frontend.handler.editor.get_matched_commands(command_67134);
if(cljs.core.seq(matched_commands_67135)){
frontend.commands.set_matched_commands_BANG_(command_67134,matched_commands_67135);
} else {
if(((cljs.core.count(command_67134) - cljs.core.count(cljs.core.deref(frontend.commands._STAR_latest_matched_command))) > (2))){
frontend.state.clear_editor_action_BANG_();
} else {
cljs.core.reset_BANG_(frontend.commands._STAR_matched_commands,null);
}
}
}
} else {
frontend.handler.editor.default_case_for_keyup_handler(input,current_pos,k,code,is_processed_QMARK_);

}
}
}

frontend.handler.editor.close_autocomplete_if_outside(input);

if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"Shift");
if(or__5142__auto__){
return or__5142__auto__;
} else {
return is_processed_QMARK_;
}
})())){
} else {
frontend.state.set_last_key_code_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key_code__$1,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"shift?","shift?",-1034734696),e.shiftKey], null));
}

if(cljs.core.truth_(frontend.state.get_editor_action())){
return null;
} else {
return frontend.state.set_editor_last_pos_BANG_(frontend.util.cursor.pos(input));
}
}
});
});
frontend.handler.editor.editor_on_click_BANG_ = (function frontend$handler$editor$editor_on_click_BANG_(id){
return (function (_e){
var input = goog.dom.getElement(id);
frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$1(input);

return frontend.handler.editor.close_autocomplete_if_outside(input);
});
});
frontend.handler.editor.editor_on_change_BANG_ = (function frontend$handler$editor$editor_on_change_BANG_(block,id,search_timeout){
return (function (e){
var editor_action = frontend.state.get_editor_action();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-search","block-search",-897517253),editor_action)){
var timeout = (50);
if(cljs.core.truth_(cljs.core.deref(search_timeout))){
clearTimeout(cljs.core.deref(search_timeout));
} else {
}

return cljs.core.reset_BANG_(search_timeout,setTimeout((function (){
return frontend.handler.editor.edit_box_on_change_BANG_(e,block,id);
}),timeout));
} else {
var input = goog.dom.getElement(id);
frontend.handler.editor.edit_box_on_change_BANG_(e,block,id);

if(cljs.core.truth_(editor_action)){
return null;
} else {
return frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$1(input);
}
}
});
});
frontend.handler.editor.context_menu_popup_QMARK_ = (function frontend$handler$editor$context_menu_popup_QMARK_(popup){
var class$ = (function (){var G__66631 = popup;
var G__66631__$1 = (((G__66631 == null))?null:new cljs.core.Keyword(null,"content-props","content-props",687449284).cljs$core$IFn$_invoke$arity$1(G__66631));
if((G__66631__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(G__66631__$1);
}
})();
return ((typeof class$ === 'string') && (clojure.string.includes_QMARK_(class$,"ls-context-menu-content")));
});
/**
 * Close the block context menu after cut/delete so it cannot act on a removed block.
 */
frontend.handler.editor.hide_block_context_popup_BANG_ = (function frontend$handler$editor$hide_block_context_popup_BANG_(){
frontend.state.hide_custom_context_menu_BANG_();

var seq__66632 = cljs.core.seq(logseq.shui.popup.core.get_popups());
var chunk__66633 = null;
var count__66634 = (0);
var i__66635 = (0);
while(true){
if((i__66635 < count__66634)){
var map__66638 = chunk__66633.cljs$core$IIndexed$_nth$arity$2(null,i__66635);
var map__66638__$1 = cljs.core.__destructure_map(map__66638);
var popup = map__66638__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(frontend.handler.editor.context_menu_popup_QMARK_(popup)){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
} else {
}


var G__67136 = seq__66632;
var G__67137 = chunk__66633;
var G__67138 = count__66634;
var G__67139 = (i__66635 + (1));
seq__66632 = G__67136;
chunk__66633 = G__67137;
count__66634 = G__67138;
i__66635 = G__67139;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66632);
if(temp__5825__auto__){
var seq__66632__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66632__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66632__$1);
var G__67140 = cljs.core.chunk_rest(seq__66632__$1);
var G__67141 = c__5673__auto__;
var G__67142 = cljs.core.count(c__5673__auto__);
var G__67143 = (0);
seq__66632 = G__67140;
chunk__66633 = G__67141;
count__66634 = G__67142;
i__66635 = G__67143;
continue;
} else {
var map__66639 = cljs.core.first(seq__66632__$1);
var map__66639__$1 = cljs.core.__destructure_map(map__66639);
var popup = map__66639__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66639__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(frontend.handler.editor.context_menu_popup_QMARK_(popup)){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
} else {
}


var G__67144 = cljs.core.next(seq__66632__$1);
var G__67145 = null;
var G__67146 = (0);
var G__67147 = (0);
seq__66632 = G__67144;
chunk__66633 = G__67145;
count__66634 = G__67146;
i__66635 = G__67147;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.editor.cut_blocks_and_clear_selections_BANG_ = (function frontend$handler$editor$cut_blocks_and_clear_selections_BANG_(copy_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state(new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467))))){
return null;
} else {
var cut_p = frontend.handler.editor.cut_selection_blocks(copy_QMARK_);
frontend.handler.editor.hide_block_context_popup_BANG_();

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cut_p),(function (___27434__auto__){
return promesa.protocols._promise((frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null)));
}));
}));
}
});
frontend.handler.editor.shortcut_copy_selection = (function frontend$handler$editor$shortcut_copy_selection(e){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

return frontend.handler.editor.copy_selection_blocks(true);
});
frontend.handler.editor.shortcut_cut_selection = (function frontend$handler$editor$shortcut_cut_selection(e){
if(cljs.core.truth_(frontend.util.input_QMARK_(e.target))){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.editor.cut_blocks_and_clear_selections_BANG_(true);
}
});
frontend.handler.editor.shortcut_delete_selection = (function frontend$handler$editor$shortcut_delete_selection(e){
if(cljs.core.truth_(frontend.util.input_QMARK_(e.target))){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.editor.cut_blocks_and_clear_selections_BANG_(false);
}
});
frontend.handler.editor.copy_current_block_ref = (function frontend$handler$editor$copy_current_block_ref(format){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var current_block = temp__5825__auto__;
var temp__5825__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
if(cljs.core.truth_(temp__5825__auto____$1)){
var block_id = temp__5825__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,"embed")){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___27434__auto__){
return promesa.protocols._promise(frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic((frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.util.ref.__GT_page_ref.call(null,block_id)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph","graph",1558099509),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block)], null)], null),new cljs.core.Keyword(null,"embed-block?","embed-block?",402074593),true], null)], 0)));
}));
}));
} else {
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,frontend.util.ref.__GT_page_ref);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.copy_current_block_embed = (function frontend$handler$editor$copy_current_block_embed(){
return frontend.handler.editor.copy_current_block_ref("embed");
});
/**
 * shortcut copy action:
 *   * when in selection mode, copy selected blocks
 *   * when in edit mode but no text selected, copy current block ref
 *   * when in edit mode with text selected, copy selected text as normal
 *   * when text is selected on a PDF, copy the highlighted text
 */
frontend.handler.editor.shortcut_copy = (function frontend$handler$editor$shortcut_copy(e){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
if(frontend.state.selection_QMARK_()){
return frontend.handler.editor.shortcut_copy_selection(e);
} else {
if(((frontend.state.editing_QMARK_()) && ((frontend.state.get_state(new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346)) == null)))){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
return frontend.handler.editor.copy_current_block_ref("ref");
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.state.get_current_pdf();
if(cljs.core.truth_(and__5140__auto__)){
return window.getSelection().baseNode.parentElement.closest(".pdfViewer");
} else {
return and__5140__auto__;
}
})())){
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.extensions.pdf.utils.fix_selection_text_breakline(window.getSelection().toString()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
} else {
return null;
}
}
}
}
});
/**
 * shortcut copy action:
 *   * when in selection mode, copy selected blocks
 *   * when in edit mode with text selected, copy selected text as normal
 */
frontend.handler.editor.shortcut_copy_text = (function frontend$handler$editor$shortcut_copy_text(_e){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
if(frontend.state.selection_QMARK_()){
return frontend.handler.editor.copy_selection_blocks(false);
} else {
return document.execCommand("copy");

}
}
});
/**
 * shortcut cut action:
 *   * when in selection mode, cut selected blocks
 *   * when in edit mode with text selected, cut selected text
 *   * otherwise nothing need to be handled.
 */
frontend.handler.editor.shortcut_cut = (function frontend$handler$editor$shortcut_cut(e){
if(frontend.state.selection_QMARK_()){
return frontend.handler.editor.shortcut_cut_selection(e);
} else {
if(((frontend.state.editing_QMARK_()) && (frontend.util.input_text_selected_QMARK_(goog.dom.getElement(frontend.state.get_edit_input_id()))))){
return frontend.handler.editor.keydown_backspace_handler(true,e);
} else {
return null;

}
}
});
frontend.handler.editor.delete_selection = (function frontend$handler$editor$delete_selection(e){
if(frontend.state.selection_QMARK_()){
return frontend.handler.editor.shortcut_delete_selection(e);
} else {
return null;

}
});
frontend.handler.editor.editor_delete = (function frontend$handler$editor$editor_delete(e){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.state.editing_QMARK_();
if(and__5140__auto__){
return frontend.state.get_input();
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(e);

return frontend.handler.editor.keydown_delete_handler(e);
} else {
return null;
}
});
frontend.handler.editor.editor_backspace = (function frontend$handler$editor$editor_backspace(e){
if(frontend.state.editing_QMARK_()){
return frontend.handler.editor.keydown_backspace_handler(false,e);
} else {
return null;
}
});
frontend.handler.editor.in_page_preview_QMARK_ = (function frontend$handler$editor$in_page_preview_QMARK_(){
var G__66652 = document.activeElement;
var G__66652__$1 = (((G__66652 == null))?null:G__66652.closest(".ls-preview-popup"));
var G__66652__$2 = (((G__66652__$1 == null))?null:(G__66652__$1 == null));
if((G__66652__$2 == null)){
return null;
} else {
return cljs.core.not(G__66652__$2);
}
});
frontend.handler.editor.shortcut_up_down = (function frontend$handler$editor$shortcut_up_down(direction){
return (function (e){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));

if((function (){var and__5140__auto__ = cljs.core.not(frontend.handler.editor.auto_complete_QMARK_());
if(and__5140__auto__){
var and__5140__auto____$1 = (function (){var or__5142__auto__ = frontend.handler.editor.in_page_preview_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not(frontend.handler.editor.focus_in_shui_popup_QMARK_());
}
})();
if(and__5140__auto____$1){
return cljs.core.not(frontend.state.get_timestamp_block());
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})()){
frontend.util.stop(e);

if(frontend.state.editing_QMARK_()){
frontend.handler.editor.keydown_up_down_handler(direction,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(frontend.state.selection_QMARK_()){
frontend.handler.editor.select_up_down(direction);
} else {
if(cljs.core.not(frontend.state.get_edit_input_id())){
frontend.handler.editor.select_first_last(direction);
} else {
}
}
}
} else {
}

return null;
});
});
frontend.handler.editor.shortcut_select_up_down = (function frontend$handler$editor$shortcut_select_up_down(direction){
return (function (e){
frontend.util.stop(e);

if(frontend.state.editing_QMARK_()){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var vec__66660 = (function (){var G__66663 = frontend.util.get_selection_direction(input);
switch (G__66663) {
case "backward":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_end,selected_start], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_start,selected_end], null);

}
})();
var anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66660,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66660,(1),null);
var cursor_rect = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$2(input,cursor);
if(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113));
if(and__5140__auto__){
return frontend.util.cursor.textarea_cursor_rect_first_row_QMARK_(cursor_rect,input);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570));
if(and__5140__auto__){
return frontend.util.cursor.textarea_cursor_rect_last_row_QMARK_(cursor_rect,input);
} else {
return and__5140__auto__;
}
}
})())){
return frontend.handler.editor.select_block_up_down(direction);
} else {
return frontend.util.cursor.select_up_down(input,direction,anchor,cursor_rect);
}
} else {
return frontend.handler.editor.select_block_up_down(direction);
}
});
});
frontend.handler.editor.editor_commands_popup_exists_QMARK_ = (function frontend$handler$editor$editor_commands_popup_exists_QMARK_(){
return frontend.handler.editor.popup_exists_QMARK_("editor.commands");
});
frontend.handler.editor.open_selected_blocks_in_sidebar_BANG_ = (function frontend$handler$editor$open_selected_blocks_in_sidebar_BANG_(){
var seq__66665 = cljs.core.seq(frontend.state.get_selection_block_ids());
var chunk__66666 = null;
var count__66667 = (0);
var i__66668 = (0);
while(true){
if((i__66668 < count__66667)){
var id = chunk__66666.cljs$core$IIndexed$_nth$arity$2(null,i__66668);
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),id,new cljs.core.Keyword(null,"block","block",664686210));


var G__67149 = seq__66665;
var G__67150 = chunk__66666;
var G__67151 = count__66667;
var G__67152 = (i__66668 + (1));
seq__66665 = G__67149;
chunk__66666 = G__67150;
count__66667 = G__67151;
i__66668 = G__67152;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66665);
if(temp__5825__auto__){
var seq__66665__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66665__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66665__$1);
var G__67153 = cljs.core.chunk_rest(seq__66665__$1);
var G__67154 = c__5673__auto__;
var G__67155 = cljs.core.count(c__5673__auto__);
var G__67156 = (0);
seq__66665 = G__67153;
chunk__66666 = G__67154;
count__66667 = G__67155;
i__66668 = G__67156;
continue;
} else {
var id = cljs.core.first(seq__66665__$1);
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),id,new cljs.core.Keyword(null,"block","block",664686210));


var G__67157 = cljs.core.next(seq__66665__$1);
var G__67158 = null;
var G__67159 = (0);
var G__67160 = (0);
seq__66665 = G__67157;
chunk__66666 = G__67158;
count__66667 = G__67159;
i__66668 = G__67160;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.editor.open_selected_block_BANG_ = (function frontend$handler$editor$open_selected_block_BANG_(direction,e){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var selected_blocks = frontend.state.get_selection_blocks();
var f = (function (){var G__66673 = direction;
var G__66673__$1 = (((G__66673 instanceof cljs.core.Keyword))?G__66673.fqn:null);
switch (G__66673__$1) {
case "left":
return cljs.core.first;

break;
case "right":
return cljs.core.last;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66673__$1))));

}
})();
var node = (function (){var G__66674 = selected_blocks;
if((G__66674 == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66674) : f.call(null,G__66674));
}
})();
if(cljs.core.truth_((function (){var G__66675 = node;
if((G__66675 == null)){
return null;
} else {
return dommy.core.has_class_QMARK_(G__66675,"block-add-button");
}
})())){
return node.click();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.entity.journal_QMARK_(frontend.handler.editor.mounted_block(node));
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.rec_get_node(node,"ls-page-title");
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(e);

return frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.handler.editor.mounted_block(node))], null));
} else {
var temp__5825__auto__ = (function (){var G__66676 = node;
var G__66676__$1 = (((G__66676 == null))?null:dommy.core.attr(G__66676,"blockid"));
if((G__66676__$1 == null)){
return null;
} else {
return cljs.core.uuid(G__66676__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
frontend.util.stop(e);

var block = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937));
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),(function (){var G__66677 = node;
var G__66677__$1 = (((G__66677 == null))?null:dommy.core.attr(G__66677,"containerid"));
if((G__66677__$1 == null)){
return null;
} else {
return cljs.core.parse_long(G__66677__$1);
}
})(),new cljs.core.Keyword(null,"event","event",301435442),e], null);
var G__66678 = block;
var G__66679 = ((left_QMARK_)?(0):new cljs.core.Keyword(null,"max","max",61366548));
var G__66680 = opts;
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66678,G__66679,G__66680) : frontend.handler.editor.edit_block_BANG_.call(null,G__66678,G__66679,G__66680));
} else {
return null;
}

}
}
}
});
frontend.handler.editor.shortcut_left_right = (function frontend$handler$editor$shortcut_left_right(direction){
return (function (e){
if(((cljs.core.not(frontend.handler.editor.auto_complete_QMARK_())) && (cljs.core.not(frontend.state.get_timestamp_block())))){
if(frontend.state.editing_QMARK_()){
frontend.util.stop(e);

return frontend.handler.editor.keydown_arrow_handler(direction);
} else {
if(frontend.state.selection_QMARK_()){
frontend.util.stop(e);

return frontend.handler.editor.open_selected_block_BANG_(direction,e);
} else {
return null;

}
}
} else {
return null;
}
});
});
frontend.handler.editor.clear_block_content_BANG_ = (function frontend$handler$editor$clear_block_content_BANG_(){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),"");
});
frontend.handler.editor.kill_line_before_BANG_ = (function frontend$handler$editor$kill_line_before_BANG_(){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

return frontend.util.kill_line_before_BANG_(frontend.state.get_input());
});
frontend.handler.editor.kill_line_after_BANG_ = (function frontend$handler$editor$kill_line_after_BANG_(){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

return frontend.util.kill_line_after_BANG_(frontend.state.get_input());
});
frontend.handler.editor.beginning_of_block = (function frontend$handler$editor$beginning_of_block(){
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(frontend.state.get_input(),(0));
});
frontend.handler.editor.end_of_block = (function frontend$handler$editor$end_of_block(){
return frontend.util.cursor.move_cursor_to_end(frontend.state.get_input());
});
frontend.handler.editor.cursor_forward_word = (function frontend$handler$editor$cursor_forward_word(){
return frontend.util.cursor.move_cursor_forward_by_word(frontend.state.get_input());
});
frontend.handler.editor.cursor_backward_word = (function frontend$handler$editor$cursor_backward_word(){
return frontend.util.cursor.move_cursor_backward_by_word(frontend.state.get_input());
});
frontend.handler.editor.backward_kill_word = (function frontend$handler$editor$backward_kill_word(){
var input = frontend.state.get_input();
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

frontend.util.backward_kill_word(input);

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),input.value);
});
frontend.handler.editor.forward_kill_word = (function frontend$handler$editor$forward_kill_word(){
var input = frontend.state.get_input();
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

frontend.util.forward_kill_word(input);

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),input.value);
});
frontend.handler.editor.block_with_title_QMARK_ = (function frontend$handler$editor$block_with_title_QMARK_(format,content,semantic_QMARK_){
var and__5140__auto__ = clojure.string.includes_QMARK_(content,"\n");
if(and__5140__auto__){
if(cljs.core.truth_(semantic_QMARK_)){
var ast = frontend.format.mldoc.__GT_edn(content,format);
var first_elem_type = cljs.core.first(cljs.core.ffirst(ast));
return (frontend.format.mldoc.block_with_title_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.block_with_title_QMARK_.cljs$core$IFn$_invoke$arity$1(first_elem_type) : frontend.format.mldoc.block_with_title_QMARK_.call(null,first_elem_type));
} else {
return true;
}
} else {
return and__5140__auto__;
}
});
frontend.handler.editor.db_collapsable_QMARK_ = (function frontend$handler$editor$db_collapsable_QMARK_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67162 = arguments.length;
var i__5877__auto___67163 = (0);
while(true){
if((i__5877__auto___67163 < len__5876__auto___67162)){
args__5882__auto__.push((arguments[i__5877__auto___67163]));

var G__67164 = (i__5877__auto___67163 + (1));
i__5877__auto___67163 = G__67164;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.editor.db_collapsable_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.editor.db_collapsable_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (block,_opts){
var property_keys = (function (){var or__5142__auto__ = cljs.core.seq(new cljs.core.Keyword("block.temp","property-keys","block.temp/property-keys",2093695024).cljs$core$IFn$_invoke$arity$1(block));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.property_QMARK_,cljs.core.keys(block));
}
})();
var properties = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908),null,new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267),null], null), null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.db_attribute_properties,property_keys)));
var or__5142__auto__ = cljs.core.seq(properties);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block);
}
}));

(frontend.handler.editor.db_collapsable_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.editor.db_collapsable_QMARK_.cljs$lang$applyTo = (function (seq66681){
var G__66682 = cljs.core.first(seq66681);
var seq66681__$1 = cljs.core.next(seq66681);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66682,seq66681__$1);
}));

frontend.handler.editor.block_has_children_QMARK_ = (function frontend$handler$editor$block_has_children_QMARK_(block,node){
return ((frontend.handler.editor.worker_has_children_QMARK_(block)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",frontend.handler.editor.node_attr(node,"haschild"))) || ((!(((function (){var G__66683 = node;
if((G__66683 == null)){
return null;
} else {
return G__66683.querySelector("[data-has-children='true']");
}
})() == null)))))));
});
frontend.handler.editor.block_node_for_id = (function frontend$handler$editor$block_node_for_id(block_id){
return cljs.core.first(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector((frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("[blockid='%s']",block_id) : frontend.util.format.call(null,"[blockid='%s']",block_id))))));
});
frontend.handler.editor.collapsable_QMARK_ = (function frontend$handler$editor$collapsable_QMARK_(var_args){
var G__66685 = arguments.length;
switch (G__66685) {
case 1:
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(block_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,p__66686){
var map__66687 = p__66686;
var map__66687__$1 = cljs.core.__destructure_map(map__66687);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66687__$1,new cljs.core.Keyword(null,"block","block",664686210));
var semantic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66687__$1,new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),false);
var ignore_children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66687__$1,new cljs.core.Keyword(null,"ignore-children?","ignore-children?",1993539421),false);
var page_title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66687__$1,new cljs.core.Keyword(null,"page-title?","page-title?",534381078));
if(cljs.core.truth_(block_id)){
var node = frontend.handler.editor.block_node_for_id(block_id);
var title = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.node_attr(node,"data-block-title");
}
})();
var format = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__66688 = frontend.handler.editor.node_attr(node,"data-block-format");
if((G__66688 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__66688);
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
}
})();
var or__5142__auto__ = ((cljs.core.not(ignore_children_QMARK_)) && (frontend.handler.editor.block_has_children_QMARK_(block,node)));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.handler.editor.db_collapsable_QMARK_.cljs$core$IFn$_invoke$arity$variadic(block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-title?","page-title?",534381078),page_title_QMARK_], null)], 0));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",frontend.handler.editor.node_attr(node,"data-db-collapsable"));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var and__5140__auto__ = new cljs.core.Keyword("outliner","block-title-collapse-enabled?","outliner/block-title-collapse-enabled?",1547538161).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.editor.block_with_title_QMARK_(format,title,semantic_QMARK_);
} else {
return and__5140__auto__;
}
}
}
}
} else {
return null;
}
}));

(frontend.handler.editor.collapsable_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Return all blocks associated with correct level
 * if :root-block is not nil, only return root block with its children
 * if :expanded? true, return expanded children
 * if :collapse? true, return without any collapsed children
 * if :incremental? true, collapse/expand will be step by step
 * for example:
 * - a
 *  - b (collapsed)
 *   - c
 *   - d
 *  - e
 * return:
 *  blocks
 *  [{:block a :level 1}
 *   {:block b :level 2}
 *   {:block e :level 2}]
 */
frontend.handler.editor._LT_all_blocks_with_level = (function frontend$handler$editor$_LT_all_blocks_with_level(p__66689){
var map__66690 = p__66689;
var map__66690__$1 = cljs.core.__destructure_map(map__66690);
var collapse_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66690__$1,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),false);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66690__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),false);
var incremental_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66690__$1,new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),true);
var root_block = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66690__$1,new cljs.core.Keyword(null,"root-block","root-block",-645043721),null);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66690__$1,new cljs.core.Keyword(null,"page","page",849072397));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_current_page();
}
})())?null:frontend.db.async._LT_get_today_journal_title(repo))),(function (today_page_title){
return promesa.protocols._promise((function (){var temp__5825__auto__ = (function (){var or__5142__auto__ = page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.state.get_current_page();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return today_page_title;
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var page__$1 = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = root_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(page__$1) : frontend.util.uuid_string_QMARK_.call(null,page__$1)))?cljs.core.parse_uuid(page__$1):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return page__$1;
}
}
})()),(function (target_id){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_with_children.cljs$core$IFn$_invoke$arity$variadic(repo,target_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),true], null)], 0))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(result)),(function (entity){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(result)),(function (child_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.util.entity.page_QMARK_(entity)),(function (page_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_QMARK_)?child_blocks:cljs.core.cons(entity,child_blocks))),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity)),(function (root_id){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_QMARK_)?null:root_id)),(function (root_block__$1){
return promesa.protocols._promise((cljs.core.truth_(incremental_QMARK_)?(function (){var blocks__$1 = frontend.modules.outliner.tree.blocks__GT_vec_tree(blocks,root_id);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var G__66691 = blocks__$1;
var G__66691__$1 = (cljs.core.truth_(root_block__$1)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function frontend$handler$editor$_LT_all_blocks_with_level_$_find(root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_block__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root))){
return root;
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend$handler$editor$_LT_all_blocks_with_level_$_find,new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$2(root,cljs.core.PersistentVector.EMPTY)));
}
}),G__66691):G__66691);
var G__66691__$2 = (cljs.core.truth_(collapse_QMARK_)?clojure.walk.postwalk((function (b){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(b);
if(and__5140__auto__){
var and__5140__auto____$1 = frontend.util.collapsed_QMARK_(b);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(root_block__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY);
} else {
return b;
}
}),G__66691__$1):G__66691__$1);
var G__66691__$3 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
return cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword("block","children","block/children",-1040716209),x);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__66691__$2], 0))
;
var G__66691__$4 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),b], null));
}),G__66691__$3):G__66691__$3);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("block","children","block/children",-1040716209));
}),G__66691__$4);

})());
})():(function (){var G__66692 = blocks;
var G__66692__$1 = (cljs.core.truth_(collapse_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.util.collapsed_QMARK_,G__66692):G__66692);
var G__66692__$2 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),b], null));
}),G__66692__$1):G__66692__$1);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__66692__$2);

})()));
}));
}));
}));
}));
}));
}));
}));
}));
}));
} else {
return null;
}
})());
}));
}));
}));
});
frontend.handler.editor.skip_collapsing_in_db_QMARK_ = (function frontend$handler$editor$skip_collapsing_in_db_QMARK_(){
var config = cljs.core.last(frontend.state.get_editor_args());
return new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
});
frontend.handler.editor.collapse_block_opts = (function frontend$handler$editor$collapse_block_opts(){
var config = cljs.core.last(frontend.state.get_editor_args());
var collapsable_page_title_QMARK_ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"collapsable-page-title?","collapsable-page-title?",517261768).cljs$core$IFn$_invoke$arity$1(config);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-title?","page-title?",534381078),collapsable_page_title_QMARK_], null);
});
frontend.handler.editor.current_editor_container_id = (function frontend$handler$editor$current_editor_container_id(){
var G__66693 = frontend.state.get_editor_args();
var G__66693__$1 = (((G__66693 == null))?null:cljs.core.last(G__66693));
if((G__66693__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(G__66693__$1);
}
});
frontend.handler.editor.comment_editor_QMARK_ = (function frontend$handler$editor$comment_editor_QMARK_(){
return new cljs.core.Keyword(null,"comment-editor?","comment-editor?",-485501961).cljs$core$IFn$_invoke$arity$1(cljs.core.last(frontend.state.get_editor_args()));
});
frontend.handler.editor.set_blocks_collapsed_BANG_ = (function frontend$handler$editor$set_blocks_collapsed_BANG_(block_ids,value){
var block_ids__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block_id){
if(typeof block_id === 'string'){
return cljs.core.uuid(block_id);
} else {
return block_id;
}
}),block_ids);
var repo = frontend.state.get_current_repo();
var value__$1 = cljs.core.boolean$(value);
if(cljs.core.truth_(repo)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var test_QMARK___61309__auto___67166 = frontend.util.node_test_QMARK_;
var ops__61310__auto___67167 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto___67168 = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto___67168);

if(cljs.core.truth_(ops__61310__auto___67167)){
frontend.modules.outliner.op.collapse_expand_blocks_BANG_(block_ids__$1,value__$1);
} else {
var _STAR_outliner_ops_STAR__orig_val__66694_67169 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66695_67170 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66695_67170);

try{frontend.modules.outliner.op.collapse_expand_blocks_BANG_(block_ids__$1,value__$1);

var r__61312__auto___67171 = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
frontend.db.transact.apply_outliner_ops(null,r__61312__auto___67171,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())], 0)));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66694_67169);
}}

var seq__66696 = cljs.core.seq(block_ids__$1);
var chunk__66697 = null;
var count__66698 = (0);
var i__66699 = (0);
while(true){
if((i__66699 < count__66698)){
var block_id = chunk__66697.cljs$core$IIndexed$_nth$arity$2(null,i__66699);
frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,value__$1);


var G__67172 = seq__66696;
var G__67173 = chunk__66697;
var G__67174 = count__66698;
var G__67175 = (i__66699 + (1));
seq__66696 = G__67172;
chunk__66697 = G__67173;
count__66698 = G__67174;
i__66699 = G__67175;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66696);
if(temp__5825__auto__){
var seq__66696__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66696__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66696__$1);
var G__67176 = cljs.core.chunk_rest(seq__66696__$1);
var G__67177 = c__5673__auto__;
var G__67178 = cljs.core.count(c__5673__auto__);
var G__67179 = (0);
seq__66696 = G__67176;
chunk__66697 = G__67177;
count__66698 = G__67178;
i__66699 = G__67179;
continue;
} else {
var block_id = cljs.core.first(seq__66696__$1);
frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,value__$1);


var G__67180 = cljs.core.next(seq__66696__$1);
var G__67181 = null;
var G__67182 = (0);
var G__67183 = (0);
seq__66696 = G__67180;
chunk__66697 = G__67181;
count__66698 = G__67182;
i__66699 = G__67183;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
frontend.handler.editor.collapse_block_BANG_ = (function frontend$handler$editor$collapse_block_BANG_(var_args){
var G__66701 = arguments.length;
switch (G__66701) {
case 1:
return frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,null);
}));

(frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,container_id){
if(cljs.core.truth_(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(block_id,frontend.handler.editor.collapse_block_opts()))){
if(cljs.core.truth_(frontend.handler.editor.skip_collapsing_in_db_QMARK_())){
} else {
frontend.handler.editor.set_blocks_collapsed_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),true);
}

return frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3(block_id,true,(function (){var or__5142__auto__ = container_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.current_editor_container_id();
}
})());
} else {
return null;
}
}));

(frontend.handler.editor.collapse_block_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.expand_block_BANG_ = (function frontend$handler$editor$expand_block_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67185 = arguments.length;
var i__5877__auto___67186 = (0);
while(true){
if((i__5877__auto___67186 < len__5876__auto___67185)){
args__5882__auto__.push((arguments[i__5877__auto___67186]));

var G__67187 = (i__5877__auto___67186 + (1));
i__5877__auto___67186 = G__67187;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.editor.expand_block_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.editor.expand_block_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block_id,p__66704){
var map__66705 = p__66704;
var map__66705__$1 = cljs.core.__destructure_map(map__66705);
var skip_db_collpsing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66705__$1,new cljs.core.Keyword(null,"skip-db-collpsing?","skip-db-collpsing?",106617442));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66705__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),true], null)], 0))),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = skip_db_collpsing_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.skip_collapsing_in_db_QMARK_();
}
})())?null:frontend.handler.editor.set_blocks_collapsed_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),false))),(function (___27434__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(skip_db_collpsing_QMARK_)?(cljs.core.truth_(container_id)?frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3(block_id,false,container_id):null):frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3(block_id,false,(function (){var or__5142__auto__ = container_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.current_editor_container_id();
}
})())
));
}));
}));
}));
}));

(frontend.handler.editor.expand_block_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.editor.expand_block_BANG_.cljs$lang$applyTo = (function (seq66702){
var G__66703 = cljs.core.first(seq66702);
var seq66702__$1 = cljs.core.next(seq66702);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66703,seq66702__$1);
}));

frontend.handler.editor.blocks_at_shallowest_collapsed_level = (function frontend$handler$editor$blocks_at_shallowest_collapsed_level(blocks){
return new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66706,block){
var map__66707 = p__66706;
var map__66707__$1 = cljs.core.__destructure_map(map__66707);
var result = map__66707__$1;
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66707__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var block_level = new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.not((function (){var and__5140__auto__ = cljs.core.pos_int_QMARK_(block_level);
if(and__5140__auto__){
return frontend.util.collapsed_QMARK_(block);
} else {
return and__5140__auto__;
}
})())){
return result;
} else {
if((((level == null)) || ((block_level < level)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),block_level,new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_level,level)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.conj,block);
} else {
return result;

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY], null),blocks));
});
frontend.handler.editor.expand_BANG_ = (function frontend$handler$editor$expand_BANG_(var_args){
var G__66709 = arguments.length;
switch (G__66709) {
case 1:
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,clear_selection_QMARK_){
frontend.util.stop(e);

if(frontend.state.editing_QMARK_()){
if(cljs.core.truth_(frontend.handler.editor.comment_editor_QMARK_())){
return null;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
return frontend.handler.editor.expand_block_BANG_(block_id);
} else {
return null;
}
}
} else {
if(frontend.state.selection_QMARK_()){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dom){
var block_id = (function (){var G__66710 = dommy.core.attr(dom,"blockid");
if((G__66710 == null)){
return null;
} else {
return cljs.core.uuid(G__66710);
}
})();
var container_id = dommy.core.attr(dom,"containerid");
if(cljs.core.truth_(block_id)){
return frontend.handler.editor.expand_block_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], 0));
} else {
return null;
}
}),frontend.handler.editor.get_selected_blocks()));

var and__5140__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));
} else {
return and__5140__auto__;
}
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_all_blocks_with_level(cljs.core.PersistentArrayMap.EMPTY)),(function (blocks_with_level){
return promesa.protocols._promise((function (){var seq__66711 = cljs.core.seq(frontend.handler.editor.blocks_at_shallowest_collapsed_level(blocks_with_level));
var chunk__66712 = null;
var count__66713 = (0);
var i__66714 = (0);
while(true){
if((i__66714 < count__66713)){
var map__66717 = chunk__66712.cljs$core$IIndexed$_nth$arity$2(null,i__66714);
var map__66717__$1 = cljs.core.__destructure_map(map__66717);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66717__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__67189 = seq__66711;
var G__67190 = chunk__66712;
var G__67191 = count__66713;
var G__67192 = (i__66714 + (1));
seq__66711 = G__67189;
chunk__66712 = G__67190;
count__66713 = G__67191;
i__66714 = G__67192;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66711);
if(temp__5825__auto__){
var seq__66711__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66711__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66711__$1);
var G__67193 = cljs.core.chunk_rest(seq__66711__$1);
var G__67194 = c__5673__auto__;
var G__67195 = cljs.core.count(c__5673__auto__);
var G__67196 = (0);
seq__66711 = G__67193;
chunk__66712 = G__67194;
count__66713 = G__67195;
i__66714 = G__67196;
continue;
} else {
var map__66718 = cljs.core.first(seq__66711__$1);
var map__66718__$1 = cljs.core.__destructure_map(map__66718);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66718__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__67197 = cljs.core.next(seq__66711__$1);
var G__67198 = null;
var G__67199 = (0);
var G__67200 = (0);
seq__66711 = G__67197;
chunk__66712 = G__67198;
count__66713 = G__67199;
i__66714 = G__67200;
continue;
}
} else {
return null;
}
}
break;
}
})());
}));
}));

}
}
}));

(frontend.handler.editor.expand_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.collapse_BANG_ = (function frontend$handler$editor$collapse_BANG_(var_args){
var G__66720 = arguments.length;
switch (G__66720) {
case 1:
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,clear_selection_QMARK_){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

if(frontend.state.editing_QMARK_()){
if(cljs.core.truth_(frontend.handler.editor.comment_editor_QMARK_())){
return null;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
return frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
} else {
return null;
}
}
} else {
if(frontend.state.selection_QMARK_()){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dom){
var block_id = (function (){var G__66721 = dommy.core.attr(dom,"blockid");
if((G__66721 == null)){
return null;
} else {
return cljs.core.uuid(G__66721);
}
})();
var container_id = dommy.core.attr(dom,"containerid");
if(cljs.core.truth_(block_id)){
return frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,container_id);
} else {
return null;
}
}),frontend.handler.editor.get_selected_blocks()));

var and__5140__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));
} else {
return and__5140__auto__;
}
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null))),(function (blocks_with_level){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971),blocks_with_level));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (99);
}
})()),(function (max_level){
return promesa.protocols._promise((function (){var level = max_level;
while(true){
if((level === (0))){
return null;
} else {
var blocks_to_collapse = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (level){
return (function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),b], null));
});})(level))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (level){
return (function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b),level);
});})(level))
,blocks_with_level));
if(cljs.core.empty_QMARK_(blocks_to_collapse)){
var G__67202 = (level - (1));
level = G__67202;
continue;
} else {
var seq__66723 = cljs.core.seq(blocks_to_collapse);
var chunk__66724 = null;
var count__66725 = (0);
var i__66726 = (0);
while(true){
if((i__66726 < count__66725)){
var map__66733 = chunk__66724.cljs$core$IIndexed$_nth$arity$2(null,i__66726);
var map__66733__$1 = cljs.core.__destructure_map(map__66733);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66733__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$1(uuid);


var G__67203 = seq__66723;
var G__67204 = chunk__66724;
var G__67205 = count__66725;
var G__67206 = (i__66726 + (1));
seq__66723 = G__67203;
chunk__66724 = G__67204;
count__66725 = G__67205;
i__66726 = G__67206;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66723);
if(temp__5825__auto__){
var seq__66723__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66723__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66723__$1);
var G__67207 = cljs.core.chunk_rest(seq__66723__$1);
var G__67208 = c__5673__auto__;
var G__67209 = cljs.core.count(c__5673__auto__);
var G__67210 = (0);
seq__66723 = G__67207;
chunk__66724 = G__67208;
count__66725 = G__67209;
i__66726 = G__67210;
continue;
} else {
var map__66736 = cljs.core.first(seq__66723__$1);
var map__66736__$1 = cljs.core.__destructure_map(map__66736);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66736__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$1(uuid);


var G__67211 = cljs.core.next(seq__66723__$1);
var G__67212 = null;
var G__67213 = (0);
var G__67214 = (0);
seq__66723 = G__67211;
chunk__66724 = G__67212;
count__66725 = G__67213;
i__66726 = G__67214;
continue;
}
} else {
return null;
}
}
break;
}
}
}
break;
}
})());
}));
}));
}));

}
}
}));

(frontend.handler.editor.collapse_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.toggle_collapse_BANG_ = (function frontend$handler$editor$toggle_collapse_BANG_(var_args){
var G__66739 = arguments.length;
switch (G__66739) {
case 1:
return frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,clear_selection_QMARK_){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

if(frontend.state.editing_QMARK_()){
var temp__5825__auto__ = (cljs.core.truth_(frontend.handler.editor.comment_editor_QMARK_())?null:frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block__$1){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block__$1))?frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2(e,clear_selection_QMARK_):frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2(e,clear_selection_QMARK_)));
}));
}));
} else {
return null;
}
} else {
if(frontend.state.selection_QMARK_()){
var block_ids_67216 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.util.selection_node_block_id,frontend.handler.editor.get_selected_blocks()));
var first_block_id_67217 = cljs.core.first(block_ids_67216);
if(cljs.core.truth_(first_block_id_67217)){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),first_block_id_67217,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (first_block){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(first_block))?(function (){var seq__66743 = cljs.core.seq(block_ids_67216);
var chunk__66744 = null;
var count__66745 = (0);
var i__66746 = (0);
while(true){
if((i__66746 < count__66745)){
var block_id = chunk__66744.cljs$core$IIndexed$_nth$arity$2(null,i__66746);
frontend.handler.editor.expand_block_BANG_(block_id);


var G__67218 = seq__66743;
var G__67219 = chunk__66744;
var G__67220 = count__66745;
var G__67221 = (i__66746 + (1));
seq__66743 = G__67218;
chunk__66744 = G__67219;
count__66745 = G__67220;
i__66746 = G__67221;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66743);
if(temp__5825__auto__){
var seq__66743__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66743__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66743__$1);
var G__67222 = cljs.core.chunk_rest(seq__66743__$1);
var G__67223 = c__5673__auto__;
var G__67224 = cljs.core.count(c__5673__auto__);
var G__67225 = (0);
seq__66743 = G__67222;
chunk__66744 = G__67223;
count__66745 = G__67224;
i__66746 = G__67225;
continue;
} else {
var block_id = cljs.core.first(seq__66743__$1);
frontend.handler.editor.expand_block_BANG_(block_id);


var G__67226 = cljs.core.next(seq__66743__$1);
var G__67227 = null;
var G__67228 = (0);
var G__67229 = (0);
seq__66743 = G__67226;
chunk__66744 = G__67227;
count__66745 = G__67228;
i__66746 = G__67229;
continue;
}
} else {
return null;
}
}
break;
}
})():(function (){var seq__66752 = cljs.core.seq(block_ids_67216);
var chunk__66753 = null;
var count__66754 = (0);
var i__66755 = (0);
while(true){
if((i__66755 < count__66754)){
var block_id = chunk__66753.cljs$core$IIndexed$_nth$arity$2(null,i__66755);
frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);


var G__67230 = seq__66752;
var G__67231 = chunk__66753;
var G__67232 = count__66754;
var G__67233 = (i__66755 + (1));
seq__66752 = G__67230;
chunk__66753 = G__67231;
count__66754 = G__67232;
i__66755 = G__67233;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66752);
if(temp__5825__auto__){
var seq__66752__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66752__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66752__$1);
var G__67234 = cljs.core.chunk_rest(seq__66752__$1);
var G__67235 = c__5673__auto__;
var G__67236 = cljs.core.count(c__5673__auto__);
var G__67237 = (0);
seq__66752 = G__67234;
chunk__66753 = G__67235;
count__66754 = G__67236;
i__66755 = G__67237;
continue;
} else {
var block_id = cljs.core.first(seq__66752__$1);
frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);


var G__67238 = cljs.core.next(seq__66752__$1);
var G__67239 = null;
var G__67240 = (0);
var G__67241 = (0);
seq__66752 = G__67238;
chunk__66753 = G__67239;
count__66754 = G__67240;
i__66755 = G__67241;
continue;
}
} else {
return null;
}
}
break;
}
})()));
}));
}));
} else {
}

var and__5140__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));
} else {
return and__5140__auto__;
}
} else {
return null;

}
}
}));

(frontend.handler.editor.toggle_collapse_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.collapse_all_BANG_ = (function frontend$handler$editor$collapse_all_BANG_(var_args){
var G__66760 = arguments.length;
switch (G__66760) {
case 0:
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,p__66763){
var map__66764 = p__66763;
var map__66764__$1 = cljs.core.__destructure_map(map__66764);
var collapse_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66764__$1,new cljs.core.Keyword(null,"collapse-self?","collapse-self?",1736127396),true);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),block_id], null))),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__66765 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks);
if(cljs.core.not(collapse_self_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([block_id]),G__66765);
} else {
return G__66765;
}
})()),(function (block_ids){
return promesa.protocols._promise(frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,true));
}));
}));
}));
}));

(frontend.handler.editor.collapse_all_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.expand_all_BANG_ = (function frontend$handler$editor$expand_all_BANG_(var_args){
var G__66770 = arguments.length;
switch (G__66770) {
case 0:
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),block_id], null))),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks)),(function (block_ids){
return promesa.protocols._promise(frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,false));
}));
}));
}));
}));

(frontend.handler.editor.expand_all_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.collapse_all_selection_BANG_ = (function frontend$handler$editor$collapse_all_selection_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.get_selected_toplevel_block_uuids()),(function (select_ids){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66773_SHARP_){
return frontend.handler.editor._LT_all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),p1__66773_SHARP_], null));
}),select_ids))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,result)))),(function (block_ids){
return promesa.protocols._promise(frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,true));
}));
}));
}));
}));
});
frontend.handler.editor.expand_all_selection_BANG_ = (function frontend$handler$editor$expand_all_selection_BANG_(){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.get_selected_toplevel_block_uuids()),(function (select_ids){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66777_SHARP_){
return frontend.handler.editor._LT_all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),p1__66777_SHARP_], null));
}),select_ids))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,result)))),(function (block_ids){
return promesa.protocols._promise(frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,false));
}));
}));
}));
})),(function (e){
return console.error(e);
}));
});
frontend.handler.editor.toggle_open_BANG_ = (function frontend$handler$editor$toggle_open_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null))),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.empty_QMARK_(blocks)),(function (all_expanded_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(all_expanded_QMARK_)?frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0():frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0()));
}));
}));
}));
});
frontend.handler.editor.toggle_open_block_children_BANG_ = (function frontend$handler$editor$toggle_open_block_children_BANG_(block_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),block_id], null))),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66783_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__66783_SHARP_));
}),blocks)),(function (children_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(frontend.util.collapsed_QMARK_),children_blocks))),(function (any_expanded_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(any_expanded_QMARK_)?frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapse-self?","collapse-self?",1736127396),false], null)):frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1(block_id)));
}));
}));
}));
}));
});
frontend.handler.editor.select_all_blocks_BANG_ = (function frontend$handler$editor$select_all_blocks_BANG_(p__66788){
var map__66789 = p__66788;
var map__66789__$1 = cljs.core.__destructure_map(map__66789);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66789__$1,new cljs.core.Keyword(null,"page","page",849072397));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5823__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5823__auto__)){
var current_input_id = temp__5823__auto__;
var input = goog.dom.getElement(current_input_id);
var blocks_container = frontend.util.rec_get_blocks_container(input);
var blocks = dommy.utils.__GT_Array(blocks_container.getElementsByClassName("ls-block"));
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(blocks);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null))),(function (blocks){
return promesa.protocols._promise(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (b){
return frontend.util.get_blocks_by_id(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
var or__5142__auto__ = new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return b;
}
}),blocks)], 0))));
}));
}));
}
})()),(function (___27434__auto__){
return promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("selection","selected-all?","selection/selected-all?",208605839),true));
}));
}));
});
frontend.handler.editor.select_parent = (function frontend$handler$editor$select_parent(e){
var edit_input = (function (){var G__66791 = frontend.state.get_edit_input_id();
if((G__66791 == null)){
return null;
} else {
return goog.dom.getElement(G__66791);
}
})();
var edit_block = frontend.state.get_edit_block();
var target_element = e.target.nodeName;
if(cljs.core.truth_((function (){var and__5140__auto__ = edit_block;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = edit_input;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.get_selected_text(),edit_input.value);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(e);

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.get_first_block_by_id(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block))], null));
} else {
if(cljs.core.truth_(edit_block)){
return null;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["INPUT",null,"TEXTAREA",null], null), null),target_element)){
return null;
} else {
frontend.util.stop(e);

if(cljs.core.truth_(frontend.state.get_state(new cljs.core.Keyword("selection","selected-all?","selection/selected-all?",208605839)))){
return null;
} else {
var temp__5823__auto__ = (function (){var G__66800 = cljs.core.first(frontend.state.get_selection_blocks());
var G__66800__$1 = (((G__66800 == null))?null:dommy.core.attr(G__66800,"blockid"));
if((G__66800__$1 == null)){
return null;
} else {
return cljs.core.uuid(G__66800__$1);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var block_id = temp__5823__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(frontend.state.get_current_repo(),block_id)),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?(function (){var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_page(),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))))){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = parent;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent);
} else {
return and__5140__auto__;
}
})())){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.get_first_block_by_id(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent))], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(parent))){
return frontend.handler.editor.select_all_blocks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(parent)], null));
} else {
return null;
}
}
}
})():null));
}));
}));
} else {
return frontend.handler.editor.select_all_blocks_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
}

}
}
}
});
frontend.handler.editor.escape_editing = (function frontend$handler$editor$escape_editing(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67244 = arguments.length;
var i__5877__auto___67245 = (0);
while(true){
if((i__5877__auto___67245 < len__5876__auto___67244)){
args__5882__auto__.push((arguments[i__5877__auto___67245]));

var G__67246 = (i__5877__auto___67245 + (1));
i__5877__auto___67245 = G__67246;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$variadic = (function (p__66804){
var map__66805 = p__66804;
var map__66805__$1 = cljs.core.__destructure_map(map__66805);
var select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66805__$1,new cljs.core.Keyword(null,"select?","select?",-1012224063));
var save_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66805__$1,new cljs.core.Keyword(null,"save-block?","save-block?",-809783538),true);
var editing_another_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66805__$1,new cljs.core.Keyword(null,"editing-another-block?","editing-another-block?",-1574709757));
var input_id = frontend.state.get_edit_input_id();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(save_block_QMARK_)?frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0():null)),(function (___27434__auto__){
return promesa.protocols._promise(((frontend.handler.editor.still_editing_QMARK_(input_id))?(cljs.core.truth_(select_QMARK_)?(function (){var temp__5825__auto__ = (function (){var G__66806 = frontend.state.get_input();
if((G__66806 == null)){
return null;
} else {
return frontend.util.rec_get_node(G__66806,"ls-block");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
} else {
return null;
}
})():(cljs.core.truth_(editing_another_block_QMARK_)?null:frontend.state.clear_edit_BANG_())):null));
}));
}));
}));

(frontend.handler.editor.escape_editing.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.handler.editor.escape_editing.cljs$lang$applyTo = (function (seq66803){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66803));
}));

frontend.handler.editor.copy_current_ref = (function frontend$handler$editor$copy_current_ref(block_id){
if(cljs.core.truth_(block_id)){
return frontend.util.copy_to_clipboard_BANG_(frontend.util.ref.__GT_block_ref(block_id));
} else {
return null;
}
});
frontend.handler.editor.delete_current_ref_BANG_ = (function frontend$handler$editor$delete_current_ref_BANG_(block,ref_id){
if(cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return ref_id;
} else {
return and__5140__auto__;
}
})())){
var content = clojure.string.replace(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),(frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(ref_id) : frontend.util.ref.__GT_page_ref.call(null,ref_id)),"");
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),content);
} else {
return null;
}
});
frontend.handler.editor.replace_ref_with_text_BANG_ = (function frontend$handler$editor$replace_ref_with_text_BANG_(block,ref_id){
if(cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return ref_id;
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),ref_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (ref_block){
return promesa.protocols._promise((function (){var match = frontend.util.ref.__GT_block_ref(ref_id);
var block_ref_content = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref_block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var content = clojure.string.replace_first(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),match,block_ref_content);
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),content);
})());
}));
}));
} else {
return null;
}
});
frontend.handler.editor.replace_ref_with_embed_BANG_ = (function frontend$handler$editor$replace_ref_with_embed_BANG_(block,ref_id){
if(cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return ref_id;
} else {
return and__5140__auto__;
}
})())){
var match = frontend.util.ref.__GT_block_ref(ref_id);
var content = clojure.string.replace_first(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),match,(function (){var G__66812 = "{{embed ((%s))}}";
var G__66813 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_id));
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2(G__66812,G__66813) : frontend.util.format.call(null,G__66812,G__66813));
})());
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),content);
} else {
return null;
}
});
/**
 * Whether a block should be collapsed by default.
 *   Currently, this handles all the kinds of views.
 */
frontend.handler.editor.block_default_collapsed_QMARK_ = (function frontend$handler$editor$block_default_collapsed_QMARK_(block,config){
var block__$1 = block;
if(cljs.core.truth_(new cljs.core.Keyword(null,"bidirectional?","bidirectional?",-1903635769).cljs$core$IFn$_invoke$arity$1(config))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933).cljs$core$IFn$_invoke$arity$1(config))){
var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword(null,"ignore-block-collapsed?","ignore-block-collapsed?",1690042331).cljs$core$IFn$_invoke$arity$1(config));
if(and__5140__auto__){
return frontend.util.collapsed_QMARK_(block__$1);
} else {
return and__5140__auto__;
}
} else {
return true;
}
} else {
var or__5142__auto__ = (function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword(null,"ignore-block-collapsed?","ignore-block-collapsed?",1690042331).cljs$core$IFn$_invoke$arity$1(config));
if(and__5140__auto__){
return frontend.util.collapsed_QMARK_(block__$1);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block__$1);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var and__5140__auto__ = (function (){var or__5142__auto____$2 = new cljs.core.Keyword(null,"list-view?","list-view?",499477951).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return ((frontend.handler.editor.worker_has_children_QMARK_(block__$1)) && (((cljs.core.integer_QMARK_(new cljs.core.Keyword(null,"block-level","block-level",390971879).cljs$core$IFn$_invoke$arity$1(config))) && ((new cljs.core.Keyword(null,"block-level","block-level",390971879).cljs$core$IFn$_invoke$arity$1(config) >= frontend.state.get_ref_open_blocks_level())))));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = (function (){var and__5140__auto__ = (function (){var or__5142__auto____$4 = new cljs.core.Keyword(null,"view?","view?",655244230).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return new cljs.core.Keyword(null,"popup?","popup?",-266197002).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto____$4 = frontend.util.entity.page_QMARK_(block__$1);
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return new cljs.core.Keyword(null,"table-block-title?","table-block-title?",-1188462014).cljs$core$IFn$_invoke$arity$1(config);
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
var and__5140__auto__ = frontend.util.entity.page_QMARK_(block__$1);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(new cljs.core.Keyword(null,"library?","library?",1697356991).cljs$core$IFn$_invoke$arity$1(config))) && (((cljs.core.not(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config))) && (((cljs.core.not(new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(config))) && (cljs.core.not(new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config))))))));
} else {
return and__5140__auto__;
}
}
}
}
}
}
}
});
frontend.handler.editor.load_children_QMARK_ = (function frontend$handler$editor$load_children_QMARK_(block,temporary_collapsed_state,ignore_block_collapsed_QMARK_){
var or__5142__auto__ = ignore_block_collapsed_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not((function (){var temp__5827__auto__ = temporary_collapsed_state;
if((temp__5827__auto__ == null)){
return new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block);
} else {
var result = temp__5827__auto__;
return result;
}
})());
}
});
frontend.handler.editor.batch_set_heading_BANG_ = (function frontend$handler$editor$batch_set_heading_BANG_(block_ids,heading){
return frontend.handler.db_based.editor.batch_set_heading_BANG_(block_ids,heading);
});
frontend.handler.editor.set_heading_BANG_ = (function frontend$handler$editor$set_heading_BANG_(block_id,heading){
return frontend.handler.editor.batch_set_heading_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),heading);
});
frontend.handler.editor.remove_heading_BANG_ = (function frontend$handler$editor$remove_heading_BANG_(block_id){
return frontend.handler.editor.set_heading_BANG_(block_id,null);
});
frontend.handler.editor.batch_remove_heading_BANG_ = (function frontend$handler$editor$batch_remove_heading_BANG_(block_ids){
return frontend.handler.editor.batch_set_heading_BANG_(block_ids,null);
});
/**
 * Set block or page name to the given event's dataTransfer. Used in dnd.
 */
frontend.handler.editor.block__GT_data_transfer_BANG_ = (function frontend$handler$editor$block__GT_data_transfer_BANG_(block_or_page_name,event,page_QMARK_){
return frontend.handler.editor.goog$module$goog$object.get(event,"dataTransfer").setData((cljs.core.truth_(page_QMARK_)?"page-name":"block-uuid"),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_or_page_name)));
});
frontend.handler.editor.run_query_command_BANG_ = (function frontend$handler$editor$run_query_command_BANG_(){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.clear_edit_BANG_()),(function (___27434__auto____$1){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),"")),(function (___27434__auto____$2){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block_SINGLEQUOTE_){
return promesa.protocols._promise(new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_));
}));
})));
}));
}));
}
})()),(function (query_block){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)),(function (current_query){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto____$1){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Query","logseq.class/Query",-232480166));

if(cljs.core.truth_(query_block)){
frontend.handler.editor.save_block_inner_BANG_(query_block,current_query,cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return frontend.handler.editor.save_block_inner_BANG_(block,"",cljs.core.PersistentArrayMap.EMPTY);
} else {
var _STAR_outliner_ops_STAR__orig_val__66834 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66835 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66835);

try{frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Query","logseq.class/Query",-232480166));

if(cljs.core.truth_(query_block)){
frontend.handler.editor.save_block_inner_BANG_(query_block,current_query,cljs.core.PersistentArrayMap.EMPTY);
} else {
}

frontend.handler.editor.save_block_inner_BANG_(block,"",cljs.core.PersistentArrayMap.EMPTY);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66834);
}}
})());
})));
}));
}));
})));
}));
}));
}));
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.editor.js.map
