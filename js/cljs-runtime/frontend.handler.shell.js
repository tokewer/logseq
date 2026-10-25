goog.provide('frontend.handler.shell');
frontend.handler.shell.run_cli_command_BANG_ = (function frontend$handler$shell$run_cli_command_BANG_(command,args){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"runCli","runCli",1169978825),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"returnResult","returnResult",-1537585855),true], null)], 0));
});
frontend.handler.shell.commands_denylist = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["rm",null,"rename",null,"command",null,"mv",null,"dd",null,"sudo",null,">",null], null), null);
frontend.handler.shell.run_command_BANG_ = (function frontend$handler$shell$run_command_BANG_(command){
var vec__93577 = ((((typeof command === 'string') && (clojure.string.includes_QMARK_(command," "))))?logseq.common.util.split_first(" ",command):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [command,""], null));
var command__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93577,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93577,(1),null);
var command__$2 = (function (){var and__5140__auto__ = command__$1;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.lower_case(command__$1);
} else {
return and__5140__auto__;
}
})();
var args__$1 = clojure.string.trim((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)));
if(clojure.string.blank_QMARK_(command__$2)){
return null;
} else {
if(cljs.core.contains_QMARK_(frontend.handler.shell.commands_denylist,command__$2)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(command__$2)+" is too dangerous!")], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return frontend.handler.shell.run_cli_command_BANG_(command__$2,args__$1);

}
}
});
frontend.handler.shell.run_cli_command_wrapper_BANG_ = (function frontend$handler$shell$run_cli_command_wrapper_BANG_(command,content){
var args = (function (){var G__93580 = command;
switch (G__93580) {
case "alda":
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("play -c \"%s\"",content) : frontend.util.format.call(null,"play -c \"%s\"",content));

break;
default:
return content;

}
})();
return frontend.handler.shell.run_cli_command_BANG_(command,args);
});

//# sourceMappingURL=frontend.handler.shell.js.map
