goog.provide('frontend.commands');
goog.scope(function(){
  frontend.commands.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands.hashtag !== 'undefined')){
} else {
frontend.commands.hashtag = "#";
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands.command_trigger !== 'undefined')){
} else {
frontend.commands.command_trigger = "/";
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands.command_ask !== 'undefined')){
} else {
frontend.commands.command_ask = "\\";
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_current_command !== 'undefined')){
} else {
frontend.commands._STAR_current_command = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.commands.query_doc = (function frontend$commands$query_doc(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-lg.mb-2","div.font-medium.text-lg.mb-2",-1087117546),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query","examples-title","query/examples-title",1217590636)], 0))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mb-1","ul.mb-1",682409297),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query #tag}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query [[page]]}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query \"full-text search\"}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (and [[project]] (task Todo Doing))}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (or [[page 1]] [[page 2]])}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (and (between -7d +7d) (task Done))}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (property key value)}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (tags #tag)}}"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.interpolate_sentence.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query","examples-desc","query/examples-desc",403586683)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.logseq.com/#/page/queries",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)], null)], 0))], null)], null);
});
frontend.commands.link_steps = (function frontend$commands$link_steps(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.commands.command_trigger)+"link")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","link","ui/link",-1769166976)], 0)),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","label","ui/label",1718406856)], 0))], null)], null)], null)], null);
});
frontend.commands.image_link_steps = (function frontend$commands$image_link_steps(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.commands.command_trigger)+"link")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"image-link","image-link",1877271958),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","link","ui/link",-1769166976)], 0)),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"image-link","image-link",1877271958),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","label","ui/label",1718406856)], 0))], null)], null)], null)], null);
});
frontend.commands._STAR_extend_slash_commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
frontend.commands.register_slash_command = (function frontend$commands$register_slash_command(cmd){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.commands._STAR_extend_slash_commands,cljs.core.conj,cmd);
});
frontend.commands.resolve_slash_command = (function frontend$commands$resolve_slash_command(command){
if(cljs.core.fn_QMARK_(command)){
return (command.cljs$core$IFn$_invoke$arity$0 ? command.cljs$core$IFn$_invoke$arity$0() : command.call(null));
} else {
return command;
}
});
frontend.commands.__GT_marker = (function frontend$commands$__GT_marker(marker){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-status","editor/set-status",-1514172914),marker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","move-cursor-to-end","editor/move-cursor-to-end",-95512412)], null)], null);
});
frontend.commands.__GT_priority = (function frontend$commands$__GT_priority(priority){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-priority","editor/set-priority",1313333042),priority], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","move-cursor-to-end","editor/move-cursor-to-end",-95512412)], null)], null);
});
frontend.commands.__GT_inline = (function frontend$commands$__GT_inline(type){
var template = (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("@@%s: @@",type) : frontend.util.format.call(null,"@@%s: @@",type));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null);
});
frontend.commands.db_based_statuses = (function frontend$commands$db_based_statuses(){
return frontend.handler.db_based.property.util.get_closed_property_values(new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853));
});
frontend.commands.db_based_embed_block = (function frontend$commands$db_based_embed_block(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),new cljs.core.Keyword(null,"embed","embed",-1354913349)], null)], null);
});
frontend.commands.db_based_query = (function frontend$commands$db_based_query(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","run-query-command","editor/run-query-command",1913684864)], null)], null);
});
frontend.commands.query_steps = (function frontend$commands$query_steps(){
return frontend.commands.db_based_query();
});
frontend.commands.calc_steps = (function frontend$commands$calc_steps(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","upsert-type-block","editor/upsert-type-block",-1673621559),new cljs.core.Keyword(null,"code","code",1586293142),"calc"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("codemirror","focus","codemirror/focus",-19393885)], null)], null);
});
frontend.commands.advanced_query_steps = (function frontend$commands$advanced_query_steps(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-property","editor/set-property",1218381211),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Query","logseq.class/Query",-232480166)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-property","editor/set-property",1218381211),new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-property-on-block-property","editor/set-property-on-block-property",-1549444895),new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-property-on-block-property","editor/set-property-on-block-property",-1549444895),new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),new cljs.core.Keyword("logseq.property.code","lang","logseq.property.code/lang",-857897165),"clojure"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","exit","editor/exit",1661791497)], null)], null);
});
frontend.commands.code_block_steps = (function frontend$commands$code_block_steps(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","upsert-type-block","editor/upsert-type-block",-1673621559),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","exit","editor/exit",1661791497)], null)], null);
});
frontend.commands.quote_block_steps = (function frontend$commands$quote_block_steps(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-property","editor/set-property",1218381211),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"quote","quote",-262615245)], null)], null);
});
frontend.commands.math_block_steps = (function frontend$commands$math_block_steps(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-property","editor/set-property",1218381211),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"math","math",-2026912803)], null)], null);
});
frontend.commands.get_statuses = (function frontend$commands$get_statuses(var_args){
var G__61434 = arguments.length;
switch (G__61434) {
case 0:
return frontend.commands.get_statuses.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.commands.get_statuses.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.commands.get_statuses.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.commands.get_statuses.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t);
}));

(frontend.commands.get_statuses.cljs$core$IFn$_invoke$arity$1 = (function (t_fn){
var group_label = (t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-task-status","editor.slash/group-task-status",-1551991772)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-task-status","editor.slash/group-task-status",-1551991772)));
var result = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (status){
var command = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(status);
var label = logseq.db.frontend.property.built_in_display_title(status,t_fn);
var icon = (function (){var G__61435 = command;
switch (G__61435) {
case "Canceled":
return "Cancelled";

break;
case "Doing":
return "InProgress50";

break;
default:
return command;

}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,frontend.commands.__GT_marker(command),(t_fn.cljs$core$IFn$_invoke$arity$2 ? t_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editor.slash","status-desc","editor.slash/status-desc",484731153),label) : t_fn.call(null,new cljs.core.Keyword("editor.slash","status-desc","editor.slash/status-desc",484731153),label)),icon], null);
}),frontend.commands.db_based_statuses());
if(cljs.core.seq(result)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,group_label);
}),result);
} else {
return null;
}
}));

(frontend.commands.get_statuses.cljs$lang$maxFixedArity = 1);

frontend.commands.db_based_priorities = (function frontend$commands$db_based_priorities(){
return frontend.handler.db_based.property.util.get_closed_property_values(new cljs.core.Keyword("logseq.property","priority","logseq.property/priority",239228411));
});
frontend.commands.get_priorities = (function frontend$commands$get_priorities(var_args){
var G__61438 = arguments.length;
switch (G__61438) {
case 0:
return frontend.commands.get_priorities.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.commands.get_priorities.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.commands.get_priorities.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.commands.get_priorities.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t);
}));

(frontend.commands.get_priorities.cljs$core$IFn$_invoke$arity$1 = (function (t_fn){
var group_label = (t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-priority","editor.slash/group-priority",1316518736)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-priority","editor.slash/group-priority",1316518736)));
var with_no_priority = (function (p1__61436_SHARP_){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","no-priority","editor.slash/no-priority",-1000787928)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","no-priority","editor.slash/no-priority",-1000787928))),frontend.commands.__GT_priority(null),"",new cljs.core.Keyword("icon","priorityLvlNone","icon/priorityLvlNone",85016980)], null),p1__61436_SHARP_);
});
var result = cljs.core.vec(with_no_priority(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (priority){
var value = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(priority);
var label = logseq.db.frontend.property.built_in_display_title(priority,t_fn);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$2 ? t_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editor.slash","priority-label","editor.slash/priority-label",2132966304),label) : t_fn.call(null,new cljs.core.Keyword("editor.slash","priority-label","editor.slash/priority-label",2132966304),label)),frontend.commands.__GT_priority(value),(t_fn.cljs$core$IFn$_invoke$arity$2 ? t_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editor.slash","priority-desc","editor.slash/priority-desc",1320841931),label) : t_fn.call(null,new cljs.core.Keyword("editor.slash","priority-desc","editor.slash/priority-desc",1320841931),label)),(""+"priorityLvl"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))], null);
}),frontend.commands.db_based_priorities())));
if(cljs.core.seq(result)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_label], null));
}),result);
} else {
return null;
}
}));

(frontend.commands.get_priorities.cljs$lang$maxFixedArity = 1);

frontend.commands.__GT_heading = (function frontend$commands$__GT_heading(heading){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-heading","editor/set-heading",-2004750659),heading], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","move-cursor-to-end","editor/move-cursor-to-end",-95512412)], null)], null);
});
frontend.commands.headings = (function frontend$commands$headings(var_args){
var G__61440 = arguments.length;
switch (G__61440) {
case 0:
return frontend.commands.headings.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.commands.headings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.commands.headings.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.commands.headings.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t);
}));

(frontend.commands.headings.cljs$core$IFn$_invoke$arity$1 = (function (t_fn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","normal-text","editor.slash/normal-text",-2104297606)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","normal-text","editor.slash/normal-text",-2104297606))),frontend.commands.__GT_heading(null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","normal-text-desc","editor.slash/normal-text-desc",-1097421651)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","normal-text-desc","editor.slash/normal-text-desc",-1097421651))),new cljs.core.Keyword("icon","text","icon/text",-1785467240),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-heading","editor.slash/group-heading",1452171982)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-heading","editor.slash/group-heading",1452171982)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","clear-heading","editor.slash/clear-heading",-742968696)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","clear-heading","editor.slash/clear-heading",-742968696))),frontend.commands.__GT_heading(null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","normal-text-desc","editor.slash/normal-text-desc",-1097421651)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","normal-text-desc","editor.slash/normal-text-desc",-1097421651))),new cljs.core.Keyword("icon","heading-off","icon/heading-off",-1467884920),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-heading","editor.slash/group-heading",1452171982)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-heading","editor.slash/group-heading",1452171982)))], null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (level){
var heading = (t_fn.cljs$core$IFn$_invoke$arity$2 ? t_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editor.slash","heading-label","editor.slash/heading-label",-1078311093),level) : t_fn.call(null,new cljs.core.Keyword("editor.slash","heading-label","editor.slash/heading-label",-1078311093),level));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading,frontend.commands.__GT_heading(level),heading,(""+"h-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-heading","editor.slash/group-heading",1452171982)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-heading","editor.slash/group-heading",1452171982)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7))));
}));

(frontend.commands.headings.cljs$lang$maxFixedArity = 1);

if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_latest_matched_command !== 'undefined')){
} else {
frontend.commands._STAR_latest_matched_command = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_matched_commands !== 'undefined')){
} else {
frontend.commands._STAR_matched_commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_initial_commands !== 'undefined')){
} else {
frontend.commands._STAR_initial_commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.commands._LT_journal_page_ref_text = (function frontend$commands$_LT_journal_page_ref_text(get_page_ref_text,journal_title){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_journal_page_title(frontend.state.get_current_repo(),journal_title)),(function (title){
return promesa.protocols._promise((get_page_ref_text.cljs$core$IFn$_invoke$arity$1 ? get_page_ref_text.cljs$core$IFn$_invoke$arity$1(title) : get_page_ref_text.call(null,title)));
}));
}));
});
frontend.commands.commands_map = (function frontend$commands$commands_map(var_args){
var G__61443 = arguments.length;
switch (G__61443) {
case 1:
return frontend.commands.commands_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.commands.commands_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.commands.commands_map.cljs$core$IFn$_invoke$arity$1 = (function (get_page_ref_text){
return frontend.commands.commands_map.cljs$core$IFn$_invoke$arity$2(get_page_ref_text,frontend.context.i18n.t);
}));

(frontend.commands.commands_map.cljs$core$IFn$_invoke$arity$2 = (function (get_page_ref_text,t_fn){
var embed_block = frontend.commands.db_based_embed_block;
var G__61444 = cljs.core.first;
var G__61445 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","node-reference","editor.slash/node-reference",-1571477510)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","node-reference","editor.slash/node-reference",-1571477510))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),logseq.common.util.page_ref.left_and_right_brackets,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null)], null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","node-reference-desc","editor.slash/node-reference-desc",592647138)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","node-reference-desc","editor.slash/node-reference-desc",592647138))),new cljs.core.Keyword("icon","pageRef","icon/pageRef",-802036133),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-basic","editor.slash/group-basic",1409404916)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-basic","editor.slash/group-basic",1409404916)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","node-embed","editor.slash/node-embed",80213695)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","node-embed","editor.slash/node-embed",80213695))),(embed_block.cljs$core$IFn$_invoke$arity$0 ? embed_block.cljs$core$IFn$_invoke$arity$0() : embed_block.call(null)),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","node-embed-desc","editor.slash/node-embed-desc",127712947)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","node-embed-desc","editor.slash/node-embed-desc",127712947))),new cljs.core.Keyword("icon","blockEmbed","icon/blockEmbed",-1814816409)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","link","ui/link",-1769166976)) : t_fn.call(null,new cljs.core.Keyword("ui","link","ui/link",-1769166976))),frontend.commands.link_steps(),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","link-desc","editor.slash/link-desc",-1803980770)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","link-desc","editor.slash/link-desc",-1803980770))),new cljs.core.Keyword("icon","link","icon/link",-1766065765),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-format","editor.slash/group-format",429825873)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-format","editor.slash/group-format",429825873)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","image-link","editor.slash/image-link",-257361198)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","image-link","editor.slash/image-link",-257361198))),frontend.commands.image_link_steps(),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","image-link-desc","editor.slash/image-link-desc",-777956854)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","image-link-desc","editor.slash/image-link-desc",-777956854))),new cljs.core.Keyword("icon","photoLink","icon/photoLink",-160648838)], null),((frontend.state.markdown_QMARK_())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","underline","editor.slash/underline",-99342637)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","underline","editor.slash/underline",-99342637))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"<ins></ins>",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(6)], null)], null)], null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","underline-desc","editor.slash/underline-desc",559140717)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","underline-desc","editor.slash/underline-desc",559140717))),new cljs.core.Keyword("icon","underline","icon/underline",2019457688)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","code-block","editor.slash/code-block",-11594025)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","code-block","editor.slash/code-block",-11594025))),frontend.commands.code_block_steps(),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","code-block-desc","editor.slash/code-block-desc",1904159939)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","code-block-desc","editor.slash/code-block-desc",1904159939))),new cljs.core.Keyword("icon","code","icon/code",-1648646899)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("class.built-in","quote-block","class.built-in/quote-block",-1757479764)) : t_fn.call(null,new cljs.core.Keyword("class.built-in","quote-block","class.built-in/quote-block",-1757479764))),frontend.commands.quote_block_steps(),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","quote-desc","editor.slash/quote-desc",-1847455465)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","quote-desc","editor.slash/quote-desc",-1847455465))),new cljs.core.Keyword("icon","quote","icon/quote",-232123732)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","math-block","editor.slash/math-block",-1679040688)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","math-block","editor.slash/math-block",-1679040688))),frontend.commands.math_block_steps(),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","math-block-desc","editor.slash/math-block-desc",600514335)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","math-block-desc","editor.slash/math-block-desc",600514335))),new cljs.core.Keyword("icon","math","icon/math",-2029844378)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.commands.headings.cljs$core$IFn$_invoke$arity$1(t_fn),frontend.commands.get_statuses.cljs$core$IFn$_invoke$arity$1(t_fn),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("property.built-in","deadline","property.built-in/deadline",1784131087)) : t_fn.call(null,new cljs.core.Keyword("property.built-in","deadline","property.built-in/deadline",1784131087))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-deadline","editor/set-deadline",1866374622)], null)], null),"",new cljs.core.Keyword("icon","calendar-stats","icon/calendar-stats",-1758926548),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-task-date","editor.slash/group-task-date",-171305763)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-task-date","editor.slash/group-task-date",-171305763)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("property.built-in","scheduled","property.built-in/scheduled",2011564268)) : t_fn.call(null,new cljs.core.Keyword("property.built-in","scheduled","property.built-in/scheduled",2011564268))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-scheduled","editor/set-scheduled",258538081)], null)], null),"",new cljs.core.Keyword("icon","calendar-month","icon/calendar-month",1156988022),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-task-date","editor.slash/group-task-date",-171305763)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-task-date","editor.slash/group-task-date",-171305763)))], null)], null),frontend.commands.get_priorities.cljs$core$IFn$_invoke$arity$1(t_fn),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("date.nlp","tomorrow","date.nlp/tomorrow",1532438515)) : t_fn.call(null,new cljs.core.Keyword("date.nlp","tomorrow","date.nlp/tomorrow",1532438515))),(function (){
return frontend.commands._LT_journal_page_ref_text(get_page_ref_text,frontend.date.tomorrow());
}),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","tomorrow-desc","editor.slash/tomorrow-desc",-1689781193)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","tomorrow-desc","editor.slash/tomorrow-desc",-1689781193))),new cljs.core.Keyword("icon","tomorrow","icon/tomorrow",-1507923540),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-time-and-date","editor.slash/group-time-and-date",-891390305)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-time-and-date","editor.slash/group-time-and-date",-891390305)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("date.nlp","yesterday","date.nlp/yesterday",-1519548575)) : t_fn.call(null,new cljs.core.Keyword("date.nlp","yesterday","date.nlp/yesterday",-1519548575))),(function (){
return frontend.commands._LT_journal_page_ref_text(get_page_ref_text,frontend.date.yesterday());
}),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","yesterday-desc","editor.slash/yesterday-desc",-1856647839)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","yesterday-desc","editor.slash/yesterday-desc",-1856647839))),new cljs.core.Keyword("icon","yesterday","icon/yesterday",283428778)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("date.nlp","today","date.nlp/today",-877807943)) : t_fn.call(null,new cljs.core.Keyword("date.nlp","today","date.nlp/today",-877807943))),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_today_journal_title(frontend.state.get_current_repo())),(function (title){
return promesa.protocols._promise((get_page_ref_text.cljs$core$IFn$_invoke$arity$1 ? get_page_ref_text.cljs$core$IFn$_invoke$arity$1(title) : get_page_ref_text.call(null,title)));
}));
}));
}),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","today-desc","editor.slash/today-desc",1257353937)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","today-desc","editor.slash/today-desc",1257353937))),new cljs.core.Keyword("icon","calendar","icon/calendar",63273881)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","current-time","editor.slash/current-time",508409638)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","current-time","editor.slash/current-time",508409638))),(function (){
return frontend.date.get_current_time();
}),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","current-time-desc","editor.slash/current-time-desc",1421879217)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","current-time-desc","editor.slash/current-time-desc",1421879217))),new cljs.core.Keyword("icon","clock","icon/clock",-897328958)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","date-picker","editor.slash/date-picker",-1293473130)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","date-picker","editor.slash/date-picker",-1293473130))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-date-picker","editor/show-date-picker",102681343)], null)], null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","date-picker-desc","editor.slash/date-picker-desc",1588931684)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","date-picker-desc","editor.slash/date-picker-desc",1588931684))),new cljs.core.Keyword("icon","calendar-dots","icon/calendar-dots",1530819262)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","number-list","editor.slash/number-list",2024543433)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","number-list","editor.slash/number-list",2024543433))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153)], null)], null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","number-list","editor.slash/number-list",2024543433)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","number-list","editor.slash/number-list",2024543433))),new cljs.core.Keyword("icon","numberedParents","icon/numberedParents",598755614),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-list-type","editor.slash/group-list-type",-2134943371)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-list-type","editor.slash/group-list-type",-2134943371)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","number-children","editor.slash/number-children",188155517)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","number-children","editor.slash/number-children",188155517))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-children-number-list","editor/toggle-children-number-list",-1804483433)], null)], null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","number-children","editor.slash/number-children",188155517)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","number-children","editor.slash/number-children",188155517))),new cljs.core.Keyword("icon","numberedChildren","icon/numberedChildren",-1490442552)], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block.comments","add-comment","block.comments/add-comment",-1902079159)) : t_fn.call(null,new cljs.core.Keyword("block.comments","add-comment","block.comments/add-comment",-1902079159))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","add-comment","editor/add-comment",-1940865903)], null)], null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block.comments","add-comment-command-desc","block.comments/add-comment-command-desc",-2131043276)) : t_fn.call(null,new cljs.core.Keyword("block.comments","add-comment-command-desc","block.comments/add-comment-command-desc",-2131043276))),new cljs.core.Keyword("icon","messageCircle","icon/messageCircle",560693461),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-advanced","editor.slash/group-advanced",929636253)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-advanced","editor.slash/group-advanced",929636253)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("property.built-in","query","property.built-in/query",-338643699)) : t_fn.call(null,new cljs.core.Keyword("property.built-in","query","property.built-in/query",-338643699))),frontend.commands.query_steps(),frontend.commands.query_doc(),new cljs.core.Keyword("icon","query","icon/query",-1285577663),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-advanced","editor.slash/group-advanced",929636253)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-advanced","editor.slash/group-advanced",929636253)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","advanced-query","editor.slash/advanced-query",517854849)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","advanced-query","editor.slash/advanced-query",517854849))),frontend.commands.advanced_query_steps(),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","advanced-query-desc","editor.slash/advanced-query-desc",-2096506229)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","advanced-query-desc","editor.slash/advanced-query-desc",-2096506229))),new cljs.core.Keyword("icon","query","icon/query",-1285577663)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","query-function","editor.slash/query-function",557406880)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","query-function","editor.slash/query-function",557406880))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{function }}",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","query-function-desc","editor.slash/query-function-desc",-177695794)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","query-function-desc","editor.slash/query-function-desc",-177695794))),new cljs.core.Keyword("icon","queryCode","icon/queryCode",1624759220)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","calculator","editor.slash/calculator",203197287)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","calculator","editor.slash/calculator",203197287))),frontend.commands.calc_steps(),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","calculator-desc","editor.slash/calculator-desc",-166109490)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","calculator-desc","editor.slash/calculator-desc",-166109490))),new cljs.core.Keyword("icon","calculator","icon/calculator",-1935595866)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","upload-asset","editor.slash/upload-asset",2041282496)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","upload-asset","editor.slash/upload-asset",2041282496))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","click-hidden-file-input","editor/click-hidden-file-input",1637282337),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","upload-asset-desc","editor.slash/upload-asset-desc",-1132971934)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","upload-asset-desc","editor.slash/upload-asset-desc",-1132971934))),new cljs.core.Keyword("icon","upload","icon/upload",-74481385)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("class.built-in","template","class.built-in/template",83626850)) : t_fn.call(null,new cljs.core.Keyword("class.built-in","template","class.built-in/template",83626850))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),frontend.commands.command_trigger,null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-template","editor/search-template",1915730318)], null)], null),(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","template-desc","editor.slash/template-desc",-933001874)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","template-desc","editor.slash/template-desc",-933001874))),new cljs.core.Keyword("icon","template","icon/template",-731125421)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","embed-html","editor.slash/embed-html",161525578)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","embed-html","editor.slash/embed-html",161525578))),frontend.commands.__GT_inline("html"),"",new cljs.core.Keyword("icon","htmlEmbed","icon/htmlEmbed",1289450821)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","embed-video-url","editor.slash/embed-video-url",305143704)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","embed-video-url","editor.slash/embed-video-url",305143704))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{video }}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null),"",new cljs.core.Keyword("icon","videoEmbed","icon/videoEmbed",-2013616609)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","embed-youtube-timestamp","editor.slash/embed-youtube-timestamp",-1552259059)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","embed-youtube-timestamp","editor.slash/embed-youtube-timestamp",-1552259059))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("youtube","insert-timestamp","youtube/insert-timestamp",-1631506319)], null)], null),"",new cljs.core.Keyword("icon","videoEmbed","icon/videoEmbed",-2013616609)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","embed-twitter-tweet","editor.slash/embed-twitter-tweet",-2057830479)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","embed-twitter-tweet","editor.slash/embed-twitter-tweet",-2057830479))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{tweet }}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.command_trigger,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null),"",new cljs.core.Keyword("icon","xEmbed","icon/xEmbed",-912866835)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("command.editor","add-property","command.editor/add-property",1501848121)) : t_fn.call(null,new cljs.core.Keyword("command.editor","add-property","command.editor/add-property",1501848121))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491)], null)], null),"",new cljs.core.Keyword("icon","cube-plus","icon/cube-plus",1921545377)], null)], null),(function (){var commands = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (command){
if(cljs.core.map_QMARK_(cljs.core.last(command))){
return new cljs.core.Keyword(null,"db-graph?","db-graph?",-533494876).cljs$core$IFn$_invoke$arity$1(cljs.core.last(command)) === false;
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.commands.resolve_slash_command,cljs.core.deref(frontend.commands._STAR_extend_slash_commands)));
return commands;
})(),frontend.state.get_commands(),(function (){var temp__5825__auto__ = cljs.core.seq((function (){var G__61446 = frontend.state.get_plugins_slash_commands();
if((G__61446 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61441_SHARP_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__61441_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword("icon","puzzle","icon/puzzle",-820666409)], null)));
}),G__61446);
}
})());
if(temp__5825__auto__){
var plugin_commands = temp__5825__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(plugin_commands),(0),(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor.slash","group-plugins","editor.slash/group-plugins",-61109326)) : t_fn.call(null,new cljs.core.Keyword("editor.slash","group-plugins","editor.slash/group-plugins",-61109326))));
}));
} else {
return null;
}
})()], 0)));
return (frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2(G__61444,G__61445) : frontend.util.distinct_by_last_wins.call(null,G__61444,G__61445));
}));

(frontend.commands.commands_map.cljs$lang$maxFixedArity = 2);

frontend.commands.init_commands_BANG_ = (function frontend$commands$init_commands_BANG_(get_page_ref_text){
var commands = frontend.commands.commands_map.cljs$core$IFn$_invoke$arity$1(get_page_ref_text);
var en_commands = frontend.commands.commands_map.cljs$core$IFn$_invoke$arity$2(get_page_ref_text,frontend.context.i18n.t_en);
var lang = (function (){var or__5142__auto__ = (function (){var G__61447 = new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
if((G__61447 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__61447);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"en","en",88457073);
}
})();
var zh_cn_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lang,new cljs.core.Keyword(null,"zh-CN","zh-CN",870973321));
var commands_with_meta = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (cmd,en_cmd){
var m = (function (){var G__61448 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en-text","en-text",-1214769465),cljs.core.first(en_cmd)], null);
if(zh_cn_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61448,new cljs.core.Keyword(null,"pinyin-text","pinyin-text",580471017),(function (){var G__61449 = cljs.core.first(cmd);
return (frontend.search.hanzi__GT_initials.cljs$core$IFn$_invoke$arity$1 ? frontend.search.hanzi__GT_initials.cljs$core$IFn$_invoke$arity$1(G__61449) : frontend.search.hanzi__GT_initials.call(null,G__61449));
})());
} else {
return G__61448;
}
})();
return cljs.core.with_meta(cmd,m);
}),commands,en_commands);
cljs.core.reset_BANG_(frontend.commands._STAR_latest_matched_command,"");

cljs.core.reset_BANG_(frontend.commands._STAR_initial_commands,commands_with_meta);

return cljs.core.reset_BANG_(frontend.commands._STAR_matched_commands,commands_with_meta);
});
frontend.commands.set_matched_commands_BANG_ = (function frontend$commands$set_matched_commands_BANG_(command,matched_commands){
cljs.core.reset_BANG_(frontend.commands._STAR_latest_matched_command,command);

return cljs.core.reset_BANG_(frontend.commands._STAR_matched_commands,matched_commands);
});
frontend.commands.reinit_matched_commands_BANG_ = (function frontend$commands$reinit_matched_commands_BANG_(){
return frontend.commands.set_matched_commands_BANG_("",cljs.core.deref(frontend.commands._STAR_initial_commands));
});
frontend.commands.restore_state = (function frontend$commands$restore_state(){
frontend.state.clear_editor_action_BANG_();

return frontend.commands.reinit_matched_commands_BANG_();
});
frontend.commands.insert_BANG_ = (function frontend$commands$insert_BANG_(id,value,p__61450){
var map__61451 = p__61450;
var map__61451__$1 = cljs.core.__destructure_map(map__61451);
var _option = map__61451__$1;
var last_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189));
var postfix_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"postfix-fn","postfix-fn",-1393704144));
var backward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133));
var end_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078));
var backward_truncate_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"backward-truncate-number","backward-truncate-number",-2044126744));
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var only_breakline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"only-breakline?","only-breakline?",-89332350));
var temp__5825__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
var last_pattern__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_pattern,new cljs.core.Keyword(null,"skip-check","skip-check",-1698571130)))?null:(cljs.core.truth_(backward_truncate_number)?null:(function (){var or__5142__auto__ = last_pattern;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.commands.command_trigger;
}
})()));
var edit_content = frontend.commands.goog$module$goog$object.get(input,"value");
var current_pos = frontend.util.cursor.pos(input);
var current_pos__$1 = (function (){var or__5142__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = end_pattern;
if(cljs.core.truth_(and__5140__auto__)){
return typeof end_pattern === 'string';
} else {
return and__5140__auto__;
}
})())?(function (){var temp__5825__auto____$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos),end_pattern);
if(cljs.core.truth_(temp__5825__auto____$1)){
var i = temp__5825__auto____$1;
return (current_pos + i);
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return current_pos;
}
})();
var orig_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos__$1);
var postfix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos__$1);
var postfix__$1 = (cljs.core.truth_(postfix_fn)?(postfix_fn.cljs$core$IFn$_invoke$arity$1 ? postfix_fn.cljs$core$IFn$_invoke$arity$1(postfix) : postfix_fn.call(null,postfix)):postfix);
var space_QMARK_ = (function (){var space_QMARK_ = (cljs.core.truth_((function (){var and__5140__auto__ = last_pattern__$1;
if(cljs.core.truth_(and__5140__auto__)){
return orig_prefix;
} else {
return and__5140__auto__;
}
})())?(function (){var s = (function (){var temp__5825__auto____$1 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(orig_prefix,last_pattern__$1);
if(cljs.core.truth_(temp__5825__auto____$1)){
var last_index = temp__5825__auto____$1;
return logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(orig_prefix,(0),last_index);
} else {
return null;
}
})();
return cljs.core.not((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151),command);
if(and__5140__auto__){
var and__5140__auto____$1 = frontend.util.cjk_string_QMARK_(value);
if(cljs.core.truth_(and__5140__auto____$1)){
var or__5142__auto__ = frontend.util.cjk_string_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(orig_prefix))));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.cjk_string_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(postfix__$1))));
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = s;
if(cljs.core.truth_(and__5140__auto__)){
return ((clojure.string.ends_with_QMARK_(s,"(")) && (((clojure.string.starts_with_QMARK_(last_pattern__$1,logseq.common.util.block_ref.left_parens)) || (clojure.string.starts_with_QMARK_(last_pattern__$1,logseq.common.util.page_ref.left_brackets)))));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var and__5140__auto__ = s;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.starts_with_QMARK_(s,"{{embed");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = (function (){var and__5140__auto__ = s;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(s),"#")) && (clojure.string.starts_with_QMARK_(last_pattern__$1,"[[")));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var and__5140__auto__ = last_pattern__$1;
if(cljs.core.truth_(and__5140__auto__)){
return ((clojure.string.ends_with_QMARK_(last_pattern__$1,logseq.graph_parser.property.colons)) || (clojure.string.starts_with_QMARK_(last_pattern__$1,logseq.graph_parser.property.colons)));
} else {
return and__5140__auto__;
}
}
}
}
}
})());
})():null);
if(cljs.core.truth_((function (){var and__5140__auto__ = space_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((clojure.string.starts_with_QMARK_(last_pattern__$1,"#[[")) || (clojure.string.starts_with_QMARK_(last_pattern__$1,"```")));
} else {
return and__5140__auto__;
}
})())){
return false;
} else {
return space_QMARK_;
}
})();
var prefix = (cljs.core.truth_((function (){var and__5140__auto__ = backward_truncate_number;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.integer_QMARK_(backward_truncate_number);
} else {
return and__5140__auto__;
}
})())?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(orig_prefix,(0),(((orig_prefix).length) - backward_truncate_number)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((backward_truncate_number === (0)))?null:value))):((clojure.string.blank_QMARK_(last_pattern__$1))?(cljs.core.truth_(space_QMARK_)?frontend.util.concat_without_spaces(orig_prefix,value):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(orig_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))):frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4(last_pattern__$1,orig_prefix,value,space_QMARK_)
));
var postfix__$2 = (function (){var G__61452 = postfix__$1;
if(cljs.core.truth_((function (){var and__5140__auto__ = only_breakline_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = postfix__$1;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(postfix__$1,(0)),"\n");
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return clojure.string.replace_first(G__61452,"\n","");
} else {
return G__61452;
}
})();
var new_value = ((clojure.string.blank_QMARK_(postfix__$2))?prefix:(cljs.core.truth_(space_QMARK_)?frontend.util.concat_without_spaces(prefix,postfix__$2):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix__$2))
));
var new_pos = (cljs.core.count(prefix) - (function (){var or__5142__auto__ = backward_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})());
if((((!(clojure.string.blank_QMARK_(value)))) && (clojure.string.blank_QMARK_(new_value)))){
return null;
} else {
frontend.state.set_block_content_and_last_pos_BANG_(id,new_value,new_pos);

return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,new_pos);
}
} else {
return null;
}
});
frontend.commands.simple_insert_BANG_ = (function frontend$commands$simple_insert_BANG_(id,value,p__61453){
var map__61454 = p__61453;
var map__61454__$1 = cljs.core.__destructure_map(map__61454);
var _option = map__61454__$1;
var backward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133));
var forward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715));
var check_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015));
var input = goog.dom.getElement(id);
var edit_content = frontend.commands.goog$module$goog$object.get(input,"value");
var current_pos = frontend.util.cursor.pos(input);
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos);
var surfix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos);
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(surfix));
var new_pos = (((((prefix).length) + cljs.core.count(value)) + (function (){var or__5142__auto__ = forward_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()) - (function (){var or__5142__auto__ = backward_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})());
frontend.state.set_block_content_and_last_pos_BANG_(id,new_value,new_pos);

frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,new_pos);

if(cljs.core.truth_(check_fn)){
var G__61455 = new_value;
var G__61456 = (((prefix).length) - (1));
var G__61457 = new_pos;
return (check_fn.cljs$core$IFn$_invoke$arity$3 ? check_fn.cljs$core$IFn$_invoke$arity$3(G__61455,G__61456,G__61457) : check_fn.call(null,G__61455,G__61456,G__61457));
} else {
return null;
}
});
frontend.commands.simple_replace_BANG_ = (function frontend$commands$simple_replace_BANG_(id,value,selected,p__61458){
var map__61459 = p__61458;
var map__61459__$1 = cljs.core.__destructure_map(map__61459);
var _option = map__61459__$1;
var backward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61459__$1,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133));
var forward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61459__$1,new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715));
var check_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61459__$1,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015));
var selected_QMARK_ = (!(clojure.string.blank_QMARK_(selected)));
var input = goog.dom.getElement(id);
var edit_content = frontend.commands.goog$module$goog$object.get(input,"value");
if(cljs.core.truth_(edit_content)){
var current_pos = frontend.util.cursor.pos(input);
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos);
var postfix = ((selected_QMARK_)?clojure.string.replace_first(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos),selected,""):cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos));
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix));
var new_pos = (((((prefix).length) + cljs.core.count(value)) + (function (){var or__5142__auto__ = forward_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()) - (function (){var or__5142__auto__ = backward_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})());
frontend.state.set_block_content_and_last_pos_BANG_(id,new_value,new_pos);

frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,new_pos);

if(selected_QMARK_){
input.setSelectionRange(new_pos,(new_pos + cljs.core.count(selected)));
} else {
}

if(cljs.core.truth_(check_fn)){
var G__61460 = new_value;
var G__61461 = (((prefix).length) - (1));
return (check_fn.cljs$core$IFn$_invoke$arity$2 ? check_fn.cljs$core$IFn$_invoke$arity$2(G__61460,G__61461) : check_fn.call(null,G__61460,G__61461));
} else {
return null;
}
} else {
return null;
}
});
frontend.commands.delete_pair_BANG_ = (function frontend$commands$delete_pair_BANG_(id){
var input = goog.dom.getElement(id);
var edit_content = frontend.commands.goog$module$goog$object.get(input,"value");
var current_pos = frontend.util.cursor.pos(input);
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),(current_pos - (1)));
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,(current_pos + (1)))));
var new_pos = ((prefix).length);
frontend.state.set_block_content_and_last_pos_BANG_(id,new_value,new_pos);

return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,new_pos);
});
frontend.commands.delete_selection_BANG_ = (function frontend$commands$delete_selection_BANG_(id){
var input = goog.dom.getElement(id);
var edit_content = frontend.commands.goog$module$goog$object.get(input,"value");
var start = frontend.util.get_selection_start(input);
var end = frontend.util.get_selection_end(input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
return null;
} else {
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),start);
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,end)));
var new_pos = ((prefix).length);
frontend.state.set_block_content_and_last_pos_BANG_(id,new_value,new_pos);

return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,new_pos);
}
});
frontend.commands.get_matched_commands = (function frontend$commands$get_matched_commands(var_args){
var G__61466 = arguments.length;
switch (G__61466) {
case 1:
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$1 = (function (text){
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$2(text,cljs.core.deref(frontend.commands._STAR_initial_commands));
}));

(frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$2 = (function (text,commands){
var lang = (function (){var or__5142__auto__ = (function (){var G__61467 = new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
if((G__61467 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__61467);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"en","en",88457073);
}
})();
var en_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lang,new cljs.core.Keyword(null,"en","en",88457073));
var zh_cn_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lang,new cljs.core.Keyword(null,"zh-CN","zh-CN",870973321));
var extract_fns = ((en_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first], null):((zh_cn_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first,(function (p1__61462_SHARP_){
return new cljs.core.Keyword(null,"en-text","en-text",-1214769465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__61462_SHARP_));
}),(function (p1__61463_SHARP_){
return new cljs.core.Keyword(null,"pinyin-text","pinyin-text",580471017).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__61463_SHARP_));
})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first,(function (p1__61464_SHARP_){
return new cljs.core.Keyword(null,"en-text","en-text",-1214769465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__61464_SHARP_));
})], null)
));
var G__61468 = commands;
var G__61469 = text;
var G__61470 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extract-fns","extract-fns",-1056675676),extract_fns,new cljs.core.Keyword(null,"limit","limit",-1355822363),(50)], null);
return (frontend.search.fuzzy_search_multi.cljs$core$IFn$_invoke$arity$3 ? frontend.search.fuzzy_search_multi.cljs$core$IFn$_invoke$arity$3(G__61468,G__61469,G__61470) : frontend.search.fuzzy_search_multi.call(null,G__61468,G__61469,G__61470));
}));

(frontend.commands.get_matched_commands.cljs$lang$maxFixedArity = 2);

if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands.handle_step !== 'undefined')){
} else {
frontend.commands.handle_step = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61471 = cljs.core.get_global_hierarchy;
return (fexpr__61471.cljs$core$IFn$_invoke$arity$0 ? fexpr__61471.cljs$core$IFn$_invoke$arity$0() : fexpr__61471.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.commands","handle-step"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","hook","editor/hook",-624147255),(function (p__61472,format){
var vec__61473 = p__61472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61473,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61473,(1),null);
var map__61476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61473,(2),null);
var map__61476__$1 = cljs.core.__destructure_map(map__61476);
var payload = map__61476__$1;
var pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61476__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61476__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$3(event,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(function (){var or__5142__auto__ = uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
}
})()], null)], 0)),pid);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","input","editor/input",-288966104),(function (p__61477){
var vec__61478 = p__61477;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61478,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61478,(1),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61478,(2),null);
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var input_id = temp__5825__auto__;
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(option);
var input = goog.dom.getElement(input_id);
var beginning_of_line_QMARK_ = (function (){var or__5142__auto__ = frontend.util.cursor.beginning_of_line_QMARK_(input);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_action_data())));
}
})();
var value__$1 = ((((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["properties",null,"block",null], null), null),type)) && ((!(beginning_of_line_QMARK_)))))?(""+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)):value);
frontend.commands.insert_BANG_(input_id,value__$1,option);

return frontend.state.clear_editor_action_BANG_();
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","cursor-back","editor/cursor-back",1400854436),(function (p__61481){
var vec__61482 = p__61481;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61482,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61482,(1),null);
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var input_id = temp__5825__auto__;
var temp__5825__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var current_input = temp__5825__auto____$1;
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(current_input,n);
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","cursor-forward","editor/cursor-forward",1606531112),(function (p__61485){
var vec__61486 = p__61485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61486,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61486,(1),null);
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var input_id = temp__5825__auto__;
var temp__5825__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var current_input = temp__5825__auto____$1;
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(current_input,n);
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","move-cursor-to-end","editor/move-cursor-to-end",-95512412),(function (p__61489){
var vec__61490 = p__61489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61490,(0),null);
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var input_id = temp__5825__auto__;
var temp__5825__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var current_input = temp__5825__auto____$1;
return frontend.util.cursor.move_cursor_to_end(current_input);
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","restore-saved-cursor","editor/restore-saved-cursor",-296466323),(function (p__61493){
var vec__61494 = p__61493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61494,(0),null);
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var input_id = temp__5825__auto__;
var temp__5825__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var current_input = temp__5825__auto____$1;
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(current_input,frontend.state.get_editor_last_pos());
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941),(function (p__61497){
var vec__61498 = p__61497;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61498,(0),null);
var space_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61498,(1),null);
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var input_id = temp__5825__auto__;
var temp__5825__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var current_input = temp__5825__auto____$1;
var edit_content = frontend.commands.goog$module$goog$object.get(current_input,"value");
var current_pos = frontend.util.cursor.pos(current_input);
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos);
var prefix__$1 = frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4(frontend.commands.command_trigger,prefix,"",cljs.core.boolean$(space_QMARK_));
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos)));
return frontend.state.set_block_content_and_last_pos_BANG_(input_id,new_value,cljs.core.count(prefix__$1));
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.db_based_set_status = (function frontend$commands$db_based_set_status(status){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return frontend.handler.db_based.property.batch_set_property_closed_value_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),status);
} else {
return null;
}
});
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-status","editor/set-status",-1514172914),(function (p__61501,_format){
var vec__61502 = p__61501;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61502,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61502,(1),null);
return frontend.commands.db_based_set_status(status);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-property","editor/set-property",1218381211),(function (p__61505){
var vec__61506 = p__61505;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61506,(0),null);
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61506,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61506,(2),null);
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),property_id,value);
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-property-on-block-property","editor/set-property-on-block-property",-1549444895),(function (p__61509){
var vec__61510 = p__61509;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61510,(0),null);
var block_property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61510,(1),null);
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61510,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61510,(3),null);
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_property_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)], 0))),(function (updated_block){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.get.cljs$core$IFn$_invoke$arity$2(updated_block,block_property_id)),(function (block_property_value){
return promesa.protocols._promise((cljs.core.truth_(block_property_value)?frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_property_value),property_id,value):null));
}));
}));
}));
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","upsert-type-block","editor/upsert-type-block",-1673621559),(function (p__61513){
var vec__61514 = p__61513;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61514,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61514,(1),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61514,(2),null);
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","upsert-type-block","editor/upsert-type-block",-1673621559),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null)], null));
} else {
return null;
}
}));
frontend.commands.db_based_set_priority = (function frontend$commands$db_based_set_priority(priority){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
if((priority == null)){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","priority","logseq.property/priority",239228411),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837));
} else {
return frontend.handler.db_based.property.batch_set_property_closed_value_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.Keyword("logseq.property","priority","logseq.property/priority",239228411),priority);
}
} else {
return null;
}
});
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-priority","editor/set-priority",1313333042),(function (p__61517,_format){
var vec__61518 = p__61517;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61518,(0),null);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61518,(1),null);
return frontend.commands.db_based_set_priority(priority);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-scheduled","editor/set-scheduled",258538081),(function (p__61521){
var vec__61522 = p__61521;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61522,(0),null);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-key","property-key",972402246),new cljs.core.Keyword("logseq.property","scheduled","logseq.property/scheduled",1644520943)], null)], null));
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-deadline","editor/set-deadline",1866374622),(function (p__61525){
var vec__61526 = p__61525;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61526,(0),null);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-key","property-key",972402246),new cljs.core.Keyword("logseq.property","deadline","logseq.property/deadline",1685901604)], null)], null));
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","run-query-command","editor/run-query-command",1913684864),(function (p__61529){
var vec__61530 = p__61529;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61530,(0),null);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","run-query-command","editor/run-query-command",1913684864)], null));
}));
frontend.commands.clear_markdown_heading = logseq.common.util.clear_markdown_heading;
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-heading","editor/set-heading",-2004750659),(function (p__61533){
var vec__61534 = p__61533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61534,(0),null);
var heading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61534,(1),null);
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
if((heading == null)){
return frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415));
} else {
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415),heading);
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812),(function (_){
return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"page-search","page-search",1842925280));
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","search-page-hashtag","editor/search-page-hashtag",2082188401),(function (p__61537){
var vec__61538 = p__61537;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61538,(0),null);
return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),(function (p__61541){
var vec__61542 = p__61541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61542,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61542,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"embed","embed",-1354913349))){
cljs.core.reset_BANG_(frontend.commands._STAR_current_command,"Block embed");

frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(frontend.state.get_input())], null));
} else {
}

return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"block-search","block-search",-897517253));
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","search-template","editor/search-template",1915730318),(function (p__61545){
var vec__61546 = p__61545;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61546,(0),null);
return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"template-search","template-search",-1861932888));
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241),(function (p__61549){
var vec__61550 = p__61549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61550,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61550,(1),null);
return frontend.state.set_editor_show_input_BANG_(option);
}));
frontend.commands.insert_youtube_timestamp = (function frontend$commands$insert_youtube_timestamp(){
var input_id = frontend.state.get_edit_input_id();
var macro = frontend.extensions.video.youtube.gen_youtube_ts_macro();
var temp__5825__auto__ = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
if(cljs.core.truth_(macro)){
return frontend.util.insert_at_current_position_BANG_(input,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro)+" "));
} else {
return null;
}
} else {
return null;
}
});
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("youtube","insert-timestamp","youtube/insert-timestamp",-1631506319),(function (p__61553){
var vec__61554 = p__61553;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61554,(0),null);
var input_id = frontend.state.get_edit_input_id();
var macro = frontend.extensions.video.youtube.gen_youtube_ts_macro();
return frontend.commands.insert_BANG_(input_id,macro,cljs.core.PersistentArrayMap.EMPTY);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","toggle-children-number-list","editor/toggle-children-number-list",-1804483433),(function (p__61557){
var vec__61558 = p__61557;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61558,(0),null);
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-children-number-list","editor/toggle-children-number-list",-1804483433),block], null));
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),(function (p__61561){
var vec__61562 = p__61561;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61562,(0),null);
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),block], null));
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","remove-own-number-list","editor/remove-own-number-list",-492965226),(function (p__61565){
var vec__61566 = p__61565;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61566,(0),null);
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","remove-own-number-list","editor/remove-own-number-list",-492965226),block], null));
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","show-date-picker","editor/show-date-picker",102681343),(function (p__61569){
var vec__61570 = p__61569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61570,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61570,(1),null);
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),null,new cljs.core.Keyword(null,"deadline","deadline",628964572),null], null), null),type)) && (clojure.string.blank_QMARK_(frontend.commands.goog$module$goog$object.get(frontend.state.get_input(),"value"))))){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","add-content-first-warning","editor/add-content-first-warning",-798807500)], 0))], null),new cljs.core.Keyword(null,"warning","warning",-1685650671));

return frontend.commands.restore_state();
} else {
frontend.state.set_timestamp_block_BANG_(null);

return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"datepicker","datepicker",821741450));
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","click-hidden-file-input","editor/click-hidden-file-input",1637282337),(function (p__61573){
var vec__61574 = p__61573;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61574,(0),null);
var _input_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61574,(1),null);
var temp__5825__auto__ = goog.dom.getElement("upload-file");
if(cljs.core.truth_(temp__5825__auto__)){
var input_file = temp__5825__auto__;
return input_file.click();
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","exit","editor/exit",1661791497),(function (p__61577){
var vec__61578 = p__61577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61578,(0),null);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","save-current-block","editor/save-current-block",1864275336)], null))),(function (___27434__auto__){
return promesa.protocols._promise(frontend.state.clear_edit_BANG_());
}));
}));
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),(function (p__61581){
var vec__61582 = p__61581;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61582,(0),null);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491)], null));
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","add-comment","editor/add-comment",-1940865903),(function (p__61585){
var vec__61586 = p__61585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61586,(0),null);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","add-comment","editor/add-comment",-1940865903)], null));
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__61589){
var vec__61590 = p__61589;
var seq__61591 = cljs.core.seq(vec__61590);
var first__61592 = cljs.core.first(seq__61591);
var seq__61591__$1 = cljs.core.next(seq__61591);
var type = first__61592;
var _args = seq__61591__$1;
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No handler for step: ",type], 0));
}));
frontend.commands.handle_steps = (function frontend$commands$handle_steps(vector_SINGLEQUOTE_,format){
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((function (step){
return promesa.protocols._promise(frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$2(step,format));
}),vector_SINGLEQUOTE_);
});
frontend.commands.exec_plugin_simple_command_BANG_ = (function frontend$commands$exec_plugin_simple_command_BANG_(pid,p__61593,action){
var map__61594 = p__61593;
var map__61594__$1 = cljs.core.__destructure_map(map__61594);
var cmd = map__61594__$1;
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61594__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(block_id)?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null)], 0)):null)),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var and__5140__auto__ = block_id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
} else {
return and__5140__auto__;
}
})()),(function (format){
return promesa.protocols._mcat(promesa.protocols._promise((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.conj.cljs$core$IFn$_invoke$arity$2(action,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"pid","pid",1018387698),pid))],null))),(function (inputs){
return promesa.protocols._promise(frontend.commands.handle_steps(inputs,format));
}));
}));
}));
}));
});

//# sourceMappingURL=frontend.commands.js.map
