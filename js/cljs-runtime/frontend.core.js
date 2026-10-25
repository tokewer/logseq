goog.provide('frontend.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
frontend.core.build_router = (function frontend$core$build_router(){
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(frontend.components.plugins.hook_custom_routes(frontend.routes.routes),null);
});
frontend.core.on_navigate = (function frontend$core$on_navigate(route){
frontend.handler.route.set_route_match_BANG_(route);

return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.select_keys(route,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"parameters","parameters",-1229919748)], null)));
});
/**
 * Rebuilds the reitit router so route renderers registered by plugins after
 * the app started take effect. Safe to call repeatedly; `rfe/start!` stops the
 * previous history instance internally.
 */
frontend.core.refresh_router_BANG_ = (function frontend$core$refresh_router_BANG_(){
return reitit.frontend.easy.start_BANG_(frontend.core.build_router(),frontend.core.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
if((typeof frontend !== 'undefined') && (typeof frontend.core !== 'undefined') && (typeof frontend.core._STAR_popstate_installed_QMARK_ !== 'undefined')){
} else {
frontend.core._STAR_popstate_installed_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.core.set_router_BANG_ = (function frontend$core$set_router_BANG_(){
if(cljs.core.compare_and_set_BANG_(frontend.core._STAR_popstate_installed_QMARK_,false,true)){
window.addEventListener("popstate",frontend.handler.route.restore_scroll_pos);
} else {
}

frontend.core.refresh_router_BANG_();

return frontend.handler.plugin.set_route_renderer_refresh_fn_BANG_(frontend.core.refresh_router_BANG_);
});
frontend.core.display_welcome_message = (function frontend$core$display_welcome_message(){
return console.log("\n    Welcome to Logseq!\n    If you encounter any problem, feel free to file an issue on GitHub (https://github.com/logseq/logseq)\n    or join our forum (https://discuss.logseq.com).\n    .____\n    |    |    ____   ____  ______ ____  ______\n    |    |   /  _ \\ / ___\\/  ___// __ \\/ ____/\n    |    |__(  <_> ) /_/  >___ \\\\  ___< <_|  |\n    |_______ \\____/\\___  /____  >\\___  >__   |\n            \\/    /_____/     \\/     \\/   |__|\n     ");
});
if((typeof frontend !== 'undefined') && (typeof frontend.core !== 'undefined') && (typeof frontend.core.root !== 'undefined')){
} else {
frontend.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("root"));
}
frontend.core.start = (function frontend$core$start(){
if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
return null;
} else {
if(cljs.core.truth_(frontend.config.dev_QMARK_)){
malli.core._deregister_metadata_function_schemas_BANG_(new cljs.core.Keyword(null,"cljs","cljs",1492417629));

cljs.core.PersistentHashSet.createAsIfByAssoc([(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"logseq.common.util","logseq.common.util",-1275448095,null),new cljs.core.Symbol(null,"uuid-string?","uuid-string?",-299523545,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"metadata-schema?","metadata-schema?",-987777163),true], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("logseq.common.util","uuid-string?","logseq.common.util/uuid-string?",916454769,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"frontend.handler.export.text-impl","frontend.handler.export.text-impl",-1048195425,null),new cljs.core.Symbol(null,"block-ast->simple-ast","block-ast->simple-ast",-1358162335,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),logseq.graph_parser.schema.mldoc.block_ast_schema], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),frontend.handler.export$.common_impl.simple_ast_malli_schema], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),logseq.graph_parser.schema.mldoc.block_ast_schema], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),frontend.handler.export$.common_impl.simple_ast_malli_schema], null)], null),new cljs.core.Keyword(null,"metadata-schema?","metadata-schema?",-987777163),true], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("frontend.handler.export.text-impl","block-ast->simple-ast","frontend.handler.export.text-impl/block-ast->simple-ast",-1239375109,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"logseq.common.util","logseq.common.util",-1275448095,null),new cljs.core.Symbol(null,"safe-re-find","safe-re-find",1004821419,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.Keyword(null,"metadata-schema?","metadata-schema?",-987777163),true], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("logseq.common.util","safe-re-find","logseq.common.util/safe-re-find",-483485443,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"frontend.util","frontend.util",1240434992,null),new cljs.core.Symbol(null,"safe-parse-int","safe-parse-int",1787156350,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.Keyword(null,"metadata-schema?","metadata-schema?",-987777163),true], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("frontend.util","safe-parse-int","frontend.util/safe-parse-int",-95927844,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"frontend.state","frontend.state",-220330742,null),new cljs.core.Symbol(null,"pub-event!","pub-event!",-445951650,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),cljs.core.vector_QMARK_], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),cljs.core.vector_QMARK_], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.Keyword(null,"metadata-schema?","metadata-schema?",-987777163),true], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("frontend.state","pub-event!","frontend.state/pub-event!",510639761,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"frontend.util","frontend.util",1240434992,null),new cljs.core.Symbol(null,"safe-parse-float","safe-parse-float",1370284443,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.Keyword(null,"metadata-schema?","metadata-schema?",-987777163),true], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("frontend.util","safe-parse-float","frontend.util/safe-parse-float",-527365131,null);
})()
]);

malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"skip-instrumented?","skip-instrumented?",1366613843),true], null),new cljs.core.Keyword(null,"data","data",-232669377),malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cljs","cljs",1492417629))));

console.groupCollapsed("Instrumentation done");

console.groupEnd();
} else {
}

frontend.core.set_router_BANG_();

frontend.core.root.render(frontend.rfx.provider(frontend.page.current_page()));

return frontend.core.display_welcome_message();
}
});
goog.exportSymbol('frontend.core.start', frontend.core.start);
frontend.core.init = (function frontend$core$init(){
frontend.runtime.globals.install_BANG_();

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.core",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.core","init","frontend.core/init",-20786527),"App started",new cljs.core.Keyword(null,"line","line",212345235),91], null)),null);
} else {
}

return frontend.handler.start_BANG_(frontend.core.start);
});
goog.exportSymbol('frontend.core.init', frontend.core.init);
frontend.core.stop = (function frontend$core$stop(){
return console.log("stop");
});
goog.exportSymbol('frontend.core.stop', frontend.core.stop);
frontend.core.delay_remount = (function frontend$core$delay_remount(delay){
return setTimeout((function (){
return frontend.core.start();
}),delay);
});
goog.exportSymbol('frontend.core.delay_remount', frontend.core.delay_remount);

//# sourceMappingURL=frontend.core.js.map
