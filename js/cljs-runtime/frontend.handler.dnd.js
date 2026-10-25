goog.provide('frontend.handler.dnd');
frontend.handler.dnd.top_move_target = (function frontend$handler$dnd$top_move_target(target_block){
var temp__5825__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top?","top?",-1883283796),true], null)], null);
} else {
return null;
}
});
frontend.handler.dnd.move_target = (function frontend$handler$dnd$move_target(target_block,top_QMARK_,nested_QMARK_){
if(cljs.core.truth_(top_QMARK_)){
return frontend.handler.dnd.top_move_target(target_block);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),cljs.core.not(nested_QMARK_)], null)], null);
}
});
frontend.handler.dnd.set_drag_image_BANG_ = (function frontend$handler$dnd$set_drag_image_BANG_(var_args){
var G__83637 = arguments.length;
switch (G__83637) {
case 2:
return frontend.handler.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return frontend.handler.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,image){
return frontend.handler.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$4(e,image,(0),(0));
}));

(frontend.handler.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (e,image,offset_x,offset_y){
var dt = e.dataTransfer;
dt.setDragImage(image,offset_x,offset_y);

return e;
}));

(frontend.handler.dnd.set_drag_image_BANG_.cljs$lang$maxFixedArity = 4);

frontend.handler.dnd.move_blocks = (function frontend$handler$dnd$move_blocks(event,blocks,target_block,original_block,move_to){
var blocks_SINGLEQUOTE_ = blocks;
var first_block = cljs.core.first(blocks_SINGLEQUOTE_);
var top_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"top","top",-1856271961));
var nested_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"nested","nested",18943849));
var alt_key_QMARK_ = (function (){var and__5140__auto__ = event;
if(cljs.core.truth_(and__5140__auto__)){
return event.altKey;
} else {
return and__5140__auto__;
}
})();
var target_block__$1 = ((nested_QMARK_)?target_block:(function (){var or__5142__auto__ = original_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return target_block;
}
})());
if(cljs.core.truth_((function (){var and__5140__auto__ = alt_key_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),(1));
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.api_insert_new_block_BANG_(frontend.util.ref.__GT_block_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_block)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block__$1),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),(!(nested_QMARK_)),new cljs.core.Keyword(null,"before?","before?",765621039),top_QMARK_], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(blocks_SINGLEQUOTE_,target_block__$1))){
var blocks_SINGLEQUOTE___$1 = frontend.handler.block.get_top_level_blocks(blocks_SINGLEQUOTE_);
var temp__5825__auto__ = frontend.handler.dnd.move_target(target_block__$1,top_QMARK_,nested_QMARK_);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__83643 = temp__5825__auto__;
var target_block__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83643,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83643,(1),null);
if(frontend.components.block.comments_model.move_allowed_QMARK_.cljs$core$IFn$_invoke$arity$3(blocks_SINGLEQUOTE___$1,target_block__$2,opts)){
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.modules.outliner.op.move_blocks_BANG_(blocks_SINGLEQUOTE___$1,target_block__$2,opts);
} else {
var _STAR_outliner_ops_STAR__orig_val__83648 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__83649 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__83649);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.op.move_blocks_BANG_(blocks_SINGLEQUOTE___$1,target_block__$2,opts);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__83648);
}}
} else {
return null;
}
} else {
return null;
}
} else {
return null;

}
}
});

//# sourceMappingURL=frontend.handler.dnd.js.map
