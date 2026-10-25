goog.provide('frontend.handler.editor.autopair');
goog.scope(function(){
  frontend.handler.editor.autopair.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.editor.autopair.autopair_map = cljs.core.PersistentHashMap.fromArrays(["=","`","*","~","/","(","_","{","[","^","+","$"],["=","`","*","~","/",")","_","}","]","^","+","$"]);
frontend.handler.editor.autopair.reversed_autopair_map = cljs.core.zipmap(cljs.core.vals(frontend.handler.editor.autopair.autopair_map),cljs.core.keys(frontend.handler.editor.autopair.autopair_map));
frontend.handler.editor.autopair.autopair_when_selected = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["=",null,"*",null,"/",null,"_",null,"^",null,"+",null], null), null);
frontend.handler.editor.autopair.delete_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.editor.autopair.autopair_map,":",":");
frontend.handler.editor.autopair.autopair = (function frontend$handler$editor$autopair$autopair(input_id,prefix,_format,_option){
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.autopair.autopair_map,prefix);
var selected = frontend.util.get_selected_text();
var postfix = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix));
var value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix));
var input = goog.dom.getElement(input_id);
if(cljs.core.truth_(value)){
var vec__63763 = frontend.commands.simple_replace_BANG_(input_id,value,selected,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),((postfix).length),new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),(function (new_value,prefix_pos){
if((prefix_pos >= (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new_value,prefix_pos,(prefix_pos + (2))),(prefix_pos + (2))], null);
} else {
return null;
}
})], null));
var prefix__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63763,(0),null);
var _pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63763,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix__$1,logseq.common.util.page_ref.left_brackets)){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null));

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input),new cljs.core.Keyword(null,"selected","selected",574897764),selected], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix__$1,logseq.common.util.block_ref.left_parens)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","reference-node-use-page-ref","editor/reference-node-use-page-ref",2040689937)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix__$1,logseq.common.util.block_ref.left_parens)){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),new cljs.core.Keyword(null,"reference","reference",-1711695023)], null));

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input),new cljs.core.Keyword(null,"selected","selected",574897764),selected], null));
} else {
return null;
}
}
}
} else {
return null;
}
});
frontend.handler.editor.autopair.surround_by_QMARK_ = (function frontend$handler$editor$autopair$surround_by_QMARK_(input,before,end){
if(cljs.core.truth_(input)){
var value = frontend.handler.editor.autopair.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
return frontend.util.text.surround_by_QMARK_(value,pos,before,end);
} else {
return null;
}
});
frontend.handler.editor.autopair.autopair_left_paren_QMARK_ = (function frontend$handler$editor$autopair$autopair_left_paren_QMARK_(input,key){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"(");
if(and__5140__auto__){
var or__5142__auto__ = frontend.handler.editor.autopair.surround_by_QMARK_(input,new cljs.core.Keyword(null,"start","start",-355208981),"");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.handler.editor.autopair.surround_by_QMARK_(input,"\n","");
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = frontend.handler.editor.autopair.surround_by_QMARK_(input," ","");
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = frontend.handler.editor.autopair.surround_by_QMARK_(input,"]","");
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return frontend.handler.editor.autopair.surround_by_QMARK_(input,"(","");
}
}
}
}
} else {
return and__5140__auto__;
}
});
frontend.handler.editor.autopair.wrapped_by_QMARK_ = (function frontend$handler$editor$autopair$wrapped_by_QMARK_(input,before,end){
if(cljs.core.truth_(input)){
var value = frontend.handler.editor.autopair.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
if((pos >= (0))){
return frontend.util.text.wrapped_by_QMARK_(value,pos,before,end);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.editor.autopair.js.map
