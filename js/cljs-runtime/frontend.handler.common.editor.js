goog.provide('frontend.handler.common.editor');
frontend.handler.common.editor.insert_command_BANG_ = (function frontend$handler$common$editor$insert_command_BANG_(id,command_output,format,p__63755){
var map__63756 = p__63755;
var map__63756__$1 = cljs.core.__destructure_map(map__63756);
var option = map__63756__$1;
var restore_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63756__$1,new cljs.core.Keyword(null,"restore?","restore?",1172240305),true);
var restore_BANG_ = (function frontend$handler$common$editor$insert_command_BANG__$_restore_BANG_(){
if(cljs.core.truth_(restore_QMARK_)){
return frontend.commands.restore_state();
} else {
return null;
}
});
var insert_value_BANG_ = (function frontend$handler$common$editor$insert_command_BANG__$_insert_value_BANG_(value){
frontend.commands.insert_BANG_(id,value,option);

return restore_BANG_();
});
if(typeof command_output === 'string'){
return insert_value_BANG_(command_output);
} else {
if(cljs.core.vector_QMARK_(command_output)){
frontend.commands.handle_steps(command_output,format);

return restore_BANG_();
} else {
if(promesa.core.promise_QMARK_(command_output)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(command_output,insert_value_BANG_);
} else {
if(cljs.core.fn_QMARK_(command_output)){
var value = (command_output.cljs$core$IFn$_invoke$arity$0 ? command_output.cljs$core$IFn$_invoke$arity$0() : command_output.call(null));
if(promesa.core.promise_QMARK_(value)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(value,insert_value_BANG_);
} else {
return insert_value_BANG_(value);
}
} else {
return restore_BANG_();

}
}
}
}
});

//# sourceMappingURL=frontend.handler.common.editor.js.map
