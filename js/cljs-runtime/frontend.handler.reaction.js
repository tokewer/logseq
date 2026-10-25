goog.provide('frontend.handler.reaction');
frontend.handler.reaction.toggle_reaction_BANG_ = (function frontend$handler$reaction$toggle_reaction_BANG_(target_uuid,emoji_id){
if(frontend.reaction.emoji_id_valid_QMARK_(emoji_id)){
var user_uuid = (function (){var temp__5825__auto__ = frontend.handler.user.user_uuid();
if(cljs.core.truth_(temp__5825__auto__)){
var id_str = temp__5825__auto__;
return cljs.core.uuid(id_str);
} else {
return null;
}
})();
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.toggle_reaction_BANG_(target_uuid,emoji_id,user_uuid);
} else {
var _STAR_outliner_ops_STAR__orig_val__69916 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__69917 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__69917);

try{frontend.modules.outliner.op.toggle_reaction_BANG_(target_uuid,emoji_id,user_uuid);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"toggle-reaction","toggle-reaction",1368365763)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__69916);
}}
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.reaction","unsupported-emoji-warning","block.reaction/unsupported-emoji-warning",-276561178)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));

return false;
}
});

//# sourceMappingURL=frontend.handler.reaction.js.map
