goog.provide('frontend.components.server');
/**
 * Adds an empty token row. Tokens stay a vector so rows can be edited by index,
 *   also when no token was saved yet (tokens is nil).
 */
frontend.components.server.add_token = (function frontend$components$server$add_token(tokens){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tokens),cljs.core.PersistentArrayMap.EMPTY);
});
frontend.components.server.update_token = (function frontend$components$server$update_token(tokens,idx,k,v){
return cljs.core.assoc_in(cljs.core.vec(tokens),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,k], null),v);
});
frontend.components.server.panel_of_tokens = (function (){var render_fn__31744__auto__ = (function frontend$components$server$panel_of_tokens(close_panel){
var server_state = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","server","electron/server",1484164422)], null));
var vec__57509 = logseq.shui.hooks.use_state(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(server_state));
var tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57509,(0),null);
var set_tokens_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57509,(1),null);
var changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tokens,new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(server_state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__server-tokens-panel.pt-6","div.cp__server-tokens-panel.pt-6",376357954),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-3xl.-translate-y-4","h2.text-3xl.-translate-y-4",137744473),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","title","server.token/title",-248088259)], 0))], null),(function (){var update_value_BANG_ = (function (idx,k,v){
var G__57512 = (function (p1__57504_SHARP_){
return frontend.components.server.update_token(p1__57504_SHARP_,idx,k,v);
});
return (set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1(G__57512) : set_tokens_BANG_.call(null,G__57512));
});
var iter__5628__auto__ = (function frontend$components$server$panel_of_tokens_$_iter__57513(s__57514){
return (new cljs.core.LazySeq(null,(function (){
var s__57514__$1 = s__57514;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57514__$1);
if(temp__5825__auto__){
var s__57514__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57514__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57514__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57516 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57515 = (0);
while(true){
if((i__57515 < size__5627__auto__)){
var vec__57517 = cljs.core._nth(c__5626__auto__,i__57515);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57517,(0),null);
var map__57520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57517,(1),null);
var map__57520__$1 = cljs.core.__destructure_map(map__57520);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57520__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57520__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__57516,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item.py-2.flex.space-x-2.items-center","div.item.py-2.flex.space-x-2.items-center",1362998704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.basis-36","input.form-input.basis-36",-1917408019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","name-placeholder","server.token/name-placeholder",175636494)], 0)),new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__57515,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_){
return (function (p1__57505_SHARP_){
var value__$1 = p1__57505_SHARP_.target.value;
return update_value_BANG_(idx,new cljs.core.Keyword(null,"name","name",1843675177),value__$1);
});})(i__57515,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","value-placeholder","server.token/value-placeholder",-958344509)], 0)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__57515,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_){
return (function (p1__57506_SHARP_){
var value__$1 = p1__57506_SHARP_.target.value;
return update_value_BANG_(idx,new cljs.core.Keyword(null,"value","value",305978217),value__$1);
});})(i__57515,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-2.opacity-50.hover:opacity-90.active:opacity-100","button.px-2.opacity-50.hover:opacity-90.active:opacity-100",895597537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57515,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_){
return (function (p1__57507_SHARP_){
var new_token = frontend.util.unique_id();
var input_el = (function (){var G__57521 = p1__57507_SHARP_.target;
var G__57521__$1 = (((G__57521 == null))?null:G__57521.closest(".item"));
if((G__57521__$1 == null)){
return null;
} else {
return G__57521__$1.querySelector("input.form-input:nth-child(2)");
}
})();
update_value_BANG_(idx,new cljs.core.Keyword(null,"value","value",305978217),new_token);

if(cljs.core.truth_(input_el)){
return setTimeout(((function (i__57515,new_token,input_el,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_){
return (function (){
return input_el.select();
});})(i__57515,new_token,input_el,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_))
,(64));
} else {
return null;
}
});})(i__57515,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_))
,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","regenerate-value","server.token/regenerate-value",-1292827735)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("refresh")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-2.opacity-50.hover:opacity-90.active:opacity-100","button.px-2.opacity-50.hover:opacity-90.active:opacity-100",895597537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57515,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_){
return (function (){
var G__57522 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(idx,tokens));
return (set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1(G__57522) : set_tokens_BANG_.call(null,G__57522));
});})(i__57515,vec__57517,idx,map__57520,map__57520__$1,value,name,c__5626__auto__,size__5627__auto__,b__57516,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("trash-x")], null)], null)], null));

var G__57577 = (i__57515 + (1));
i__57515 = G__57577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57516),frontend$components$server$panel_of_tokens_$_iter__57513(cljs.core.chunk_rest(s__57514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57516),null);
}
} else {
var vec__57523 = cljs.core.first(s__57514__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57523,(0),null);
var map__57526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57523,(1),null);
var map__57526__$1 = cljs.core.__destructure_map(map__57526);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57526__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57526__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item.py-2.flex.space-x-2.items-center","div.item.py-2.flex.space-x-2.items-center",1362998704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.basis-36","input.form-input.basis-36",-1917408019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","name-placeholder","server.token/name-placeholder",175636494)], 0)),new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__57523,idx,map__57526,map__57526__$1,value,name,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_){
return (function (p1__57505_SHARP_){
var value__$1 = p1__57505_SHARP_.target.value;
return update_value_BANG_(idx,new cljs.core.Keyword(null,"name","name",1843675177),value__$1);
});})(vec__57523,idx,map__57526,map__57526__$1,value,name,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","value-placeholder","server.token/value-placeholder",-958344509)], 0)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__57523,idx,map__57526,map__57526__$1,value,name,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_){
return (function (p1__57506_SHARP_){
var value__$1 = p1__57506_SHARP_.target.value;
return update_value_BANG_(idx,new cljs.core.Keyword(null,"value","value",305978217),value__$1);
});})(vec__57523,idx,map__57526,map__57526__$1,value,name,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-2.opacity-50.hover:opacity-90.active:opacity-100","button.px-2.opacity-50.hover:opacity-90.active:opacity-100",895597537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57523,idx,map__57526,map__57526__$1,value,name,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_){
return (function (p1__57507_SHARP_){
var new_token = frontend.util.unique_id();
var input_el = (function (){var G__57527 = p1__57507_SHARP_.target;
var G__57527__$1 = (((G__57527 == null))?null:G__57527.closest(".item"));
if((G__57527__$1 == null)){
return null;
} else {
return G__57527__$1.querySelector("input.form-input:nth-child(2)");
}
})();
update_value_BANG_(idx,new cljs.core.Keyword(null,"value","value",305978217),new_token);

if(cljs.core.truth_(input_el)){
return setTimeout((function (){
return input_el.select();
}),(64));
} else {
return null;
}
});})(vec__57523,idx,map__57526,map__57526__$1,value,name,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_))
,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","regenerate-value","server.token/regenerate-value",-1292827735)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("refresh")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-2.opacity-50.hover:opacity-90.active:opacity-100","button.px-2.opacity-50.hover:opacity-90.active:opacity-100",895597537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57523,idx,map__57526,map__57526__$1,value,name,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_){
return (function (){
var G__57528 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(idx,tokens));
return (set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1(G__57528) : set_tokens_BANG_.call(null,G__57528));
});})(vec__57523,idx,map__57526,map__57526__$1,value,name,s__57514__$2,temp__5825__auto__,update_value_BANG_,server_state,vec__57509,tokens,set_tokens_BANG_,changed_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("trash-x")], null)], null)], null),frontend$components$server$panel_of_tokens_$_iter__57513(cljs.core.rest(s__57514__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(tokens));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flex.justify-end.pt-6.space-x-3","p.flex.justify-end.pt-6.space-x-3",-1725467705),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","add-new","server.token/add-new",2061695180)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__57529 = frontend.components.server.add_token(tokens);
return (set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1(G__57529) : set_tokens_BANG_.call(null,G__57529));
}),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534)], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","save","ui/save",1850075345)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","set-config","server/set-config",1464784658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens], null)], 0)),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","update-success","server.token/update-success",1575276547)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (p1__57508_SHARP_){
return console.error(p1__57508_SHARP_);
})),(function (){
return (close_panel.cljs$core$IFn$_invoke$arity$0 ? close_panel.cljs$core$IFn$_invoke$arity$0() : close_panel.call(null));
}));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(changed_QMARK_))], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$server$panel_of_tokens__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57530 = cljs.core.first(args__31746__auto__);
var G__57531 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57530,G__57531) : io.factorhouse.hsx.core.obj_get.call(null,G__57530,G__57531));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"panel-of-tokens","panel-of-tokens",-1577417093,null),args__31746__auto__),frontend$components$server$panel_of_tokens,args__31746__auto__,null);
}
};
var frontend$components$server$panel_of_tokens = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57578__i = 0, G__57578__a = new Array(arguments.length -  0);
while (G__57578__i < G__57578__a.length) {G__57578__a[G__57578__i] = arguments[G__57578__i + 0]; ++G__57578__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57578__a,0,null);
} 
return frontend$components$server$panel_of_tokens__delegate.call(this,args__31746__auto__);};
frontend$components$server$panel_of_tokens.cljs$lang$maxFixedArity = 0;
frontend$components$server$panel_of_tokens.cljs$lang$applyTo = (function (arglist__57579){
var args__31746__auto__ = cljs.core.seq(arglist__57579);
return frontend$components$server$panel_of_tokens__delegate(args__31746__auto__);
});
frontend$components$server$panel_of_tokens.cljs$core$IFn$_invoke$arity$variadic = frontend$components$server$panel_of_tokens__delegate;
return frontend$components$server$panel_of_tokens;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57532 = comp__31745__auto__;
var G__57533 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57532,G__57533) : io.factorhouse.hsx.core.react_memo.call(null,G__57532,G__57533));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"panel-of-tokens");

return comp__31745__auto__;
})();
frontend.components.server.panel_of_configs = (function (){var render_fn__31744__auto__ = (function frontend$components$server$panel_of_configs(close_panel){
var server_state = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","server","electron/server",1484164422)], null));
var vec__57540 = logseq.shui.hooks.use_state(server_state);
var configs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57540,(0),null);
var set_configs_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57540,(1),null);
var map__57543 = configs;
var map__57543__$1 = cljs.core.__destructure_map(map__57543);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57543__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57543__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var autostart = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57543__$1,new cljs.core.Keyword(null,"autostart","autostart",-2028194117));
var hp_changed_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(host,new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(server_state))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_parse_int((function (){var or__5142__auto____$1 = port;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
})()),frontend.util.safe_parse_int((function (){var or__5142__auto____$1 = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(server_state);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
})()))));
var changed_QMARK_ = (function (){var or__5142__auto__ = hp_changed_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__57534_SHARP_){
var G__57544 = p1__57534_SHARP_;
if((p1__57534_SHARP_ == null)){
return cljs.core.boolean$(G__57544);
} else {
return G__57544;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [autostart,new cljs.core.Keyword(null,"autostart","autostart",-2028194117).cljs$core$IFn$_invoke$arity$1(server_state)], null)));
}
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__server-configs-panel.pt-5","div.cp__server-configs-panel.pt-5",1441124379),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-3xl.-translate-y-4","h2.text-3xl.-translate-y-4",137744473),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.config","title","server.config/title",745060020)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-end.gap-3","div.flex.items-end.gap-3",1383221531),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.flex-1","div.flex.flex-col.gap-1.flex-1",583315652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","host","ui/host",-1558481427)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = host;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__57535_SHARP_){
var value = p1__57535_SHARP_.target.value;
var G__57545 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(configs,new cljs.core.Keyword(null,"host","host",-1558485167),value);
return (set_configs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_configs_BANG_.cljs$core$IFn$_invoke$arity$1(G__57545) : set_configs_BANG_.call(null,G__57545));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-40"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.config","port-label","server.config/port-label",926719627)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = port;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"numeric",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[0-9]*",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__57536_SHARP_){
var value = frontend.util.evalue(p1__57536_SHARP_);
var port__$1 = ((clojure.string.blank_QMARK_(value))?(1):frontend.util.sanitize_port_input(value));
var G__57546 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(configs,new cljs.core.Keyword(null,"port","port",1534937262),port__$1);
return (set_configs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_configs_BANG_.cljs$core$IFn$_invoke$arity$1(G__57546) : set_configs_BANG_.call(null,G__57546));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__57537_SHARP_){
var value = p1__57537_SHARP_.target.value;
var G__57547 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(configs,new cljs.core.Keyword(null,"port","port",1534937262),frontend.util.normalize_port_input(value));
return (set_configs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_configs_BANG_.cljs$core$IFn$_invoke$arity$1(G__57547) : set_configs_BANG_.call(null,G__57547));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.py-3.px-1","p.py-3.px-1",-135661715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex.space-x-2.items-center","label.flex.space-x-2.items-center",-1657723129),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__57538_SHARP_){
var checked = p1__57538_SHARP_.target.checked;
var G__57548 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(configs,new cljs.core.Keyword(null,"autostart","autostart",-2028194117),checked);
return (set_configs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_configs_BANG_.cljs$core$IFn$_invoke$arity$1(G__57548) : set_configs_BANG_.call(null,G__57548));
}),new cljs.core.Keyword(null,"checked","checked",-50955819),(!(autostart === false))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.select-none","strong.select-none",-856081399),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.config","auto-start-label","server.config/auto-start-label",-465021917)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flex.justify-end.pt-6.space-x-3","p.flex.justify-end.pt-6.space-x-3",-1725467705),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.config","reset","server.config/reset",-742749161)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__57549 = cljs.core.select_keys(server_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"autostart","autostart",-2028194117)], null));
return (set_configs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_configs_BANG_.cljs$core$IFn$_invoke$arity$1(G__57549) : set_configs_BANG_.call(null,G__57549));
})], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.config","save-and-apply","server.config/save-and-apply",1653763)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(changed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var configs__$1 = cljs.core.select_keys(configs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"autostart","autostart",-2028194117)], null));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","set-config","server/set-config",1464784658),configs__$1], 0)),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((close_panel.cljs$core$IFn$_invoke$arity$0 ? close_panel.cljs$core$IFn$_invoke$arity$0() : close_panel.call(null))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000))),(function (___$1){
return promesa.protocols._promise(((hp_changed_QMARK_)?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"restart","restart",-1779883612)], 0)):null));
}));
}));
}));
})),(function (p1__57539_SHARP_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57539_SHARP_)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
})], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$server$panel_of_configs__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57550 = cljs.core.first(args__31746__auto__);
var G__57551 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57550,G__57551) : io.factorhouse.hsx.core.obj_get.call(null,G__57550,G__57551));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"panel-of-configs","panel-of-configs",-299411418,null),args__31746__auto__),frontend$components$server$panel_of_configs,args__31746__auto__,null);
}
};
var frontend$components$server$panel_of_configs = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57580__i = 0, G__57580__a = new Array(arguments.length -  0);
while (G__57580__i < G__57580__a.length) {G__57580__a[G__57580__i] = arguments[G__57580__i + 0]; ++G__57580__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57580__a,0,null);
} 
return frontend$components$server$panel_of_configs__delegate.call(this,args__31746__auto__);};
frontend$components$server$panel_of_configs.cljs$lang$maxFixedArity = 0;
frontend$components$server$panel_of_configs.cljs$lang$applyTo = (function (arglist__57581){
var args__31746__auto__ = cljs.core.seq(arglist__57581);
return frontend$components$server$panel_of_configs__delegate(args__31746__auto__);
});
frontend$components$server$panel_of_configs.cljs$core$IFn$_invoke$arity$variadic = frontend$components$server$panel_of_configs__delegate;
return frontend$components$server$panel_of_configs;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57552 = comp__31745__auto__;
var G__57553 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57552,G__57553) : io.factorhouse.hsx.core.react_memo.call(null,G__57552,G__57553));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"panel-of-configs");

return comp__31745__auto__;
})();
frontend.components.server.server_status_label = (function frontend$components$server$server_status_label(status){
return clojure.string.upper_case((function (){var G__57554 = status;
var G__57554__$1 = (((G__57554 instanceof cljs.core.Keyword))?G__57554.fqn:null);
switch (G__57554__$1) {
case "starting":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.status","starting","server.status/starting",880866663)], 0));

break;
case "running":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.status","running","server.status/running",-241117426)], 0));

break;
case "closing":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.status","closing","server.status/closing",2111894513)], 0));

break;
case "closed":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.status","closed","server.status/closed",-1474772192)], 0));

break;
case "error":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.status","error","server.status/error",413662513)], 0));

break;
default:
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.status","stopped","server.status/stopped",-836471101)], 0));

}
})());
});
frontend.components.server.server_indicator = (function (){var render_fn__31744__auto__ = (function frontend$components$server$server_indicator(server_state){
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","load-state","server/load-state",135727163)], 0))),(function (___$1){
return promesa.protocols._promise((function (){var t = setTimeout((function (){
if(cljs.core.truth_(frontend.state.get_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","server","electron/server",1484164422),new cljs.core.Keyword(null,"autostart","autostart",-2028194117)], null)))){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"restart","restart",-1779883612)], 0));
} else {
return null;
}
}),(1000));
return (function (){
return clearTimeout(t);
});
})());
}));
}));
}));
}),cljs.core.PersistentVector.EMPTY);

var map__57555 = server_state;
var map__57555__$1 = cljs.core.__destructure_map(map__57555);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57555__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57555__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var mcp_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57555__$1,new cljs.core.Keyword(null,"mcp-enabled?","mcp-enabled?",-1213528614));
var status__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(status));
var running_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"running","running",1554969103),status__$1);
var href = (function (){var and__5140__auto__ = running_QMARK_;
if(and__5140__auto__){
return (""+"http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(server_state))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(server_state)));
} else {
return and__5140__auto__;
}
})();
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(error)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","error-notification","server/error-notification",1597649696),error], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__server-indicator","div.cp__server-indicator",1250371151),logseq.shui.ui.button_ghost_icon(((running_QMARK_)?"api":"api-off"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__57556 = e.target;
var G__57557 = (function (p__57559){
var map__57560 = p__57559;
var map__57560__$1 = cljs.core.__destructure_map(map__57560);
var _close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57560__$1,new cljs.core.Keyword(null,"_close","_close",-1082869631));
var items = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr?","hr?",1767859540),true], null),((running_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","stop","server/stop",845551957)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"stop","stop",-2140911342)], 0));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-red-500.flex.items-center","span.text-red-500.flex.items-center",-491946714),frontend.ui.icon("player-stop")], null)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","start","server/start",349314608)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"restart","restart",-1779883612)], 0));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-green-500.flex.items-center","span.text-green-500.flex.items-center",-945500541),frontend.ui.icon("player-play")], null)], null)
),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.token","title","server.token/title",-248088259)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__57561 = (function (){
return frontend.components.server.panel_of_tokens(logseq.shui.ui.dialog_close_BANG_);
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__57561) : logseq.shui.ui.dialog_open_BANG_.call(null,G__57561));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("key")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server.config","title","server.config/title",745060020)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__57562 = (function (){
return frontend.components.server.panel_of_configs(logseq.shui.ui.dialog_close_BANG_);
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__57562) : logseq.shui.ui.dialog_open_BANG_.call(null,G__57562));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("server-cog")], null)], null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.links-header.flex.justify-center.py-2","div.links-header.flex.justify-center.py-2",62632997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1.text-sm.opacity-70","span.ml-1.text-sm.opacity-70",451201778),(((!(running_QMARK_)))?frontend.components.server.server_status_label(status__$1):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col.gap-1.text-xs.font-mono","span.flex.flex-col.gap-1.text-xs.font-mono",-56124786),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hover:underline.flex.items-center","a.hover:underline.flex.items-center",-1049349467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),href,logseq.shui.ui.tabler_icon("external-link",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(12),new cljs.core.Keyword(null,"class","class",-2030961996),"inline-block ml-1 pt-[1px]"], null))], null),(cljs.core.truth_(mcp_enabled_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hover:underline.flex.items-center","a.hover:underline.flex.items-center",-1049349467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.util.copy_to_clipboard_BANG_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(href)+"/mcp"));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","mcp-url-copied","server/mcp-url-copied",-283375514)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(href)+"/mcp"),logseq.shui.ui.tabler_icon("copy",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(12),new cljs.core.Keyword(null,"class","class",-2030961996),"inline-block ml-1 mt-[1px]"], null))], null):null)], null))], null)], null),(function (){var iter__5628__auto__ = (function frontend$components$server$server_indicator_$_iter__57563(s__57564){
return (new cljs.core.LazySeq(null,(function (){
var s__57564__$1 = s__57564;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57564__$1);
if(temp__5825__auto__){
var s__57564__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57564__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57564__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57566 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57565 = (0);
while(true){
if((i__57565 < size__5627__auto__)){
var map__57567 = cljs.core._nth(c__5626__auto__,i__57565);
var map__57567__$1 = cljs.core.__destructure_map(map__57567);
var hr_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57567__$1,new cljs.core.Keyword(null,"hr?","hr?",1767859540));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57567__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57567__$1,new cljs.core.Keyword(null,"options","options",99638489));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57567__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__57566,(cljs.core.truth_(hr_QMARK_)?(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)):(function (){var G__57568 = options;
var G__57569 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1","span.pl-1",-1236384439),title], null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__57568,G__57569) : logseq.shui.ui.dropdown_menu_item.call(null,G__57568,G__57569));
})()
));

var G__57583 = (i__57565 + (1));
i__57565 = G__57583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57566),frontend$components$server$server_indicator_$_iter__57563(cljs.core.chunk_rest(s__57564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57566),null);
}
} else {
var map__57570 = cljs.core.first(s__57564__$2);
var map__57570__$1 = cljs.core.__destructure_map(map__57570);
var hr_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57570__$1,new cljs.core.Keyword(null,"hr?","hr?",1767859540));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57570__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57570__$1,new cljs.core.Keyword(null,"options","options",99638489));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57570__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons((cljs.core.truth_(hr_QMARK_)?(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)):(function (){var G__57571 = options;
var G__57572 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1","span.pl-1",-1236384439),title], null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__57571,G__57572) : logseq.shui.ui.dropdown_menu_item.call(null,G__57571,G__57572));
})()
),frontend$components$server$server_indicator_$_iter__57563(cljs.core.rest(s__57564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(items);
})());
});
var G__57558 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__57556,G__57557,G__57558) : logseq.shui.ui.popup_show_BANG_.call(null,G__57556,G__57557,G__57558));
})], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$server$server_indicator__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57573 = cljs.core.first(args__31746__auto__);
var G__57574 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57573,G__57574) : io.factorhouse.hsx.core.obj_get.call(null,G__57573,G__57574));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"server-indicator","server-indicator",-1311023064,null),args__31746__auto__),frontend$components$server$server_indicator,args__31746__auto__,null);
}
};
var frontend$components$server$server_indicator = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57584__i = 0, G__57584__a = new Array(arguments.length -  0);
while (G__57584__i < G__57584__a.length) {G__57584__a[G__57584__i] = arguments[G__57584__i + 0]; ++G__57584__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57584__a,0,null);
} 
return frontend$components$server$server_indicator__delegate.call(this,args__31746__auto__);};
frontend$components$server$server_indicator.cljs$lang$maxFixedArity = 0;
frontend$components$server$server_indicator.cljs$lang$applyTo = (function (arglist__57585){
var args__31746__auto__ = cljs.core.seq(arglist__57585);
return frontend$components$server$server_indicator__delegate(args__31746__auto__);
});
frontend$components$server$server_indicator.cljs$core$IFn$_invoke$arity$variadic = frontend$components$server$server_indicator__delegate;
return frontend$components$server$server_indicator;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57575 = comp__31745__auto__;
var G__57576 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57575,G__57576) : io.factorhouse.hsx.core.react_memo.call(null,G__57575,G__57576));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"server-indicator");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.server.js.map
