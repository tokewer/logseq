goog.provide('frontend.extensions.code');
goog.scope(function(){
  frontend.extensions.code.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
var module$node_modules$codemirror$addon$edit$closebrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$closebrackets", {});
var module$node_modules$codemirror$addon$edit$matchbrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$matchbrackets", {});
var module$node_modules$codemirror$addon$hint$show_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$show_hint", {});
var module$node_modules$codemirror$addon$selection$active_line=shadow.js.require("module$node_modules$codemirror$addon$selection$active_line", {});
var module$node_modules$codemirror$mode$apl$apl=shadow.js.require("module$node_modules$codemirror$mode$apl$apl", {});
var module$node_modules$codemirror$mode$asciiarmor$asciiarmor=shadow.js.require("module$node_modules$codemirror$mode$asciiarmor$asciiarmor", {});
var module$node_modules$codemirror$mode$asn_1$asn_1=shadow.js.require("module$node_modules$codemirror$mode$asn_1$asn_1", {});
var module$node_modules$codemirror$mode$asterisk$asterisk=shadow.js.require("module$node_modules$codemirror$mode$asterisk$asterisk", {});
var module$node_modules$codemirror$mode$brainfuck$brainfuck=shadow.js.require("module$node_modules$codemirror$mode$brainfuck$brainfuck", {});
var module$node_modules$codemirror$mode$clike$clike=shadow.js.require("module$node_modules$codemirror$mode$clike$clike", {});
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$codemirror$mode$cmake$cmake=shadow.js.require("module$node_modules$codemirror$mode$cmake$cmake", {});
var module$node_modules$codemirror$mode$cobol$cobol=shadow.js.require("module$node_modules$codemirror$mode$cobol$cobol", {});
var module$node_modules$codemirror$mode$coffeescript$coffeescript=shadow.js.require("module$node_modules$codemirror$mode$coffeescript$coffeescript", {});
var module$node_modules$codemirror$mode$commonlisp$commonlisp=shadow.js.require("module$node_modules$codemirror$mode$commonlisp$commonlisp", {});
var module$node_modules$codemirror$mode$crystal$crystal=shadow.js.require("module$node_modules$codemirror$mode$crystal$crystal", {});
var module$node_modules$codemirror$mode$css$css=shadow.js.require("module$node_modules$codemirror$mode$css$css", {});
var module$node_modules$codemirror$mode$cypher$cypher=shadow.js.require("module$node_modules$codemirror$mode$cypher$cypher", {});
var module$node_modules$codemirror$mode$d$d=shadow.js.require("module$node_modules$codemirror$mode$d$d", {});
var module$node_modules$codemirror$mode$dart$dart=shadow.js.require("module$node_modules$codemirror$mode$dart$dart", {});
var module$node_modules$codemirror$mode$diff$diff=shadow.js.require("module$node_modules$codemirror$mode$diff$diff", {});
var module$node_modules$codemirror$mode$django$django=shadow.js.require("module$node_modules$codemirror$mode$django$django", {});
var module$node_modules$codemirror$mode$dockerfile$dockerfile=shadow.js.require("module$node_modules$codemirror$mode$dockerfile$dockerfile", {});
var module$node_modules$codemirror$mode$dtd$dtd=shadow.js.require("module$node_modules$codemirror$mode$dtd$dtd", {});
var module$node_modules$codemirror$mode$dylan$dylan=shadow.js.require("module$node_modules$codemirror$mode$dylan$dylan", {});
var module$node_modules$codemirror$mode$ebnf$ebnf=shadow.js.require("module$node_modules$codemirror$mode$ebnf$ebnf", {});
var module$node_modules$codemirror$mode$ecl$ecl=shadow.js.require("module$node_modules$codemirror$mode$ecl$ecl", {});
var module$node_modules$codemirror$mode$eiffel$eiffel=shadow.js.require("module$node_modules$codemirror$mode$eiffel$eiffel", {});
var module$node_modules$codemirror$mode$elm$elm=shadow.js.require("module$node_modules$codemirror$mode$elm$elm", {});
var module$node_modules$codemirror$mode$erlang$erlang=shadow.js.require("module$node_modules$codemirror$mode$erlang$erlang", {});
var module$node_modules$codemirror$mode$factor$factor=shadow.js.require("module$node_modules$codemirror$mode$factor$factor", {});
var module$node_modules$codemirror$mode$fcl$fcl=shadow.js.require("module$node_modules$codemirror$mode$fcl$fcl", {});
var module$node_modules$codemirror$mode$forth$forth=shadow.js.require("module$node_modules$codemirror$mode$forth$forth", {});
var module$node_modules$codemirror$mode$fortran$fortran=shadow.js.require("module$node_modules$codemirror$mode$fortran$fortran", {});
var module$node_modules$codemirror$mode$gas$gas=shadow.js.require("module$node_modules$codemirror$mode$gas$gas", {});
var module$node_modules$codemirror$mode$gfm$gfm=shadow.js.require("module$node_modules$codemirror$mode$gfm$gfm", {});
var module$node_modules$codemirror$mode$gherkin$gherkin=shadow.js.require("module$node_modules$codemirror$mode$gherkin$gherkin", {});
var module$node_modules$codemirror$mode$go$go=shadow.js.require("module$node_modules$codemirror$mode$go$go", {});
var module$node_modules$codemirror$mode$groovy$groovy=shadow.js.require("module$node_modules$codemirror$mode$groovy$groovy", {});
var module$node_modules$codemirror$mode$haml$haml=shadow.js.require("module$node_modules$codemirror$mode$haml$haml", {});
var module$node_modules$codemirror$mode$handlebars$handlebars=shadow.js.require("module$node_modules$codemirror$mode$handlebars$handlebars", {});
var module$node_modules$codemirror$mode$haskell_literate$haskell_literate=shadow.js.require("module$node_modules$codemirror$mode$haskell_literate$haskell_literate", {});
var module$node_modules$codemirror$mode$haskell$haskell=shadow.js.require("module$node_modules$codemirror$mode$haskell$haskell", {});
var module$node_modules$codemirror$mode$haxe$haxe=shadow.js.require("module$node_modules$codemirror$mode$haxe$haxe", {});
var module$node_modules$codemirror$mode$htmlembedded$htmlembedded=shadow.js.require("module$node_modules$codemirror$mode$htmlembedded$htmlembedded", {});
var module$node_modules$codemirror$mode$htmlmixed$htmlmixed=shadow.js.require("module$node_modules$codemirror$mode$htmlmixed$htmlmixed", {});
var module$node_modules$codemirror$mode$http$http=shadow.js.require("module$node_modules$codemirror$mode$http$http", {});
var module$node_modules$codemirror$mode$idl$idl=shadow.js.require("module$node_modules$codemirror$mode$idl$idl", {});
var module$node_modules$codemirror$mode$javascript$javascript=shadow.js.require("module$node_modules$codemirror$mode$javascript$javascript", {});
var module$node_modules$codemirror$mode$jinja2$jinja2=shadow.js.require("module$node_modules$codemirror$mode$jinja2$jinja2", {});
var module$node_modules$codemirror$mode$jsx$jsx=shadow.js.require("module$node_modules$codemirror$mode$jsx$jsx", {});
var module$node_modules$codemirror$mode$julia$julia=shadow.js.require("module$node_modules$codemirror$mode$julia$julia", {});
var module$node_modules$codemirror$mode$livescript$livescript=shadow.js.require("module$node_modules$codemirror$mode$livescript$livescript", {});
var module$node_modules$codemirror$mode$lua$lua=shadow.js.require("module$node_modules$codemirror$mode$lua$lua", {});
var module$node_modules$codemirror$mode$markdown$markdown=shadow.js.require("module$node_modules$codemirror$mode$markdown$markdown", {});
var module$node_modules$codemirror$mode$mathematica$mathematica=shadow.js.require("module$node_modules$codemirror$mode$mathematica$mathematica", {});
var module$node_modules$codemirror$mode$mbox$mbox=shadow.js.require("module$node_modules$codemirror$mode$mbox$mbox", {});
var module$node_modules$codemirror$mode$meta=shadow.js.require("module$node_modules$codemirror$mode$meta", {});
var module$node_modules$codemirror$mode$mirc$mirc=shadow.js.require("module$node_modules$codemirror$mode$mirc$mirc", {});
var module$node_modules$codemirror$mode$mllike$mllike=shadow.js.require("module$node_modules$codemirror$mode$mllike$mllike", {});
var module$node_modules$codemirror$mode$modelica$modelica=shadow.js.require("module$node_modules$codemirror$mode$modelica$modelica", {});
var module$node_modules$codemirror$mode$mscgen$mscgen=shadow.js.require("module$node_modules$codemirror$mode$mscgen$mscgen", {});
var module$node_modules$codemirror$mode$mumps$mumps=shadow.js.require("module$node_modules$codemirror$mode$mumps$mumps", {});
var module$node_modules$codemirror$mode$nginx$nginx=shadow.js.require("module$node_modules$codemirror$mode$nginx$nginx", {});
var module$node_modules$codemirror$mode$nsis$nsis=shadow.js.require("module$node_modules$codemirror$mode$nsis$nsis", {});
var module$node_modules$codemirror$mode$ntriples$ntriples=shadow.js.require("module$node_modules$codemirror$mode$ntriples$ntriples", {});
var module$node_modules$codemirror$mode$octave$octave=shadow.js.require("module$node_modules$codemirror$mode$octave$octave", {});
var module$node_modules$codemirror$mode$oz$oz=shadow.js.require("module$node_modules$codemirror$mode$oz$oz", {});
var module$node_modules$codemirror$mode$pascal$pascal=shadow.js.require("module$node_modules$codemirror$mode$pascal$pascal", {});
var module$node_modules$codemirror$mode$pegjs$pegjs=shadow.js.require("module$node_modules$codemirror$mode$pegjs$pegjs", {});
var module$node_modules$codemirror$mode$perl$perl=shadow.js.require("module$node_modules$codemirror$mode$perl$perl", {});
var module$node_modules$codemirror$mode$php$php=shadow.js.require("module$node_modules$codemirror$mode$php$php", {});
var module$node_modules$codemirror$mode$pig$pig=shadow.js.require("module$node_modules$codemirror$mode$pig$pig", {});
var module$node_modules$codemirror$mode$powershell$powershell=shadow.js.require("module$node_modules$codemirror$mode$powershell$powershell", {});
var module$node_modules$codemirror$mode$properties$properties=shadow.js.require("module$node_modules$codemirror$mode$properties$properties", {});
var module$node_modules$codemirror$mode$protobuf$protobuf=shadow.js.require("module$node_modules$codemirror$mode$protobuf$protobuf", {});
var module$node_modules$codemirror$mode$pug$pug=shadow.js.require("module$node_modules$codemirror$mode$pug$pug", {});
var module$node_modules$codemirror$mode$puppet$puppet=shadow.js.require("module$node_modules$codemirror$mode$puppet$puppet", {});
var module$node_modules$codemirror$mode$python$python=shadow.js.require("module$node_modules$codemirror$mode$python$python", {});
var module$node_modules$codemirror$mode$q$q=shadow.js.require("module$node_modules$codemirror$mode$q$q", {});
var module$node_modules$codemirror$mode$r$r=shadow.js.require("module$node_modules$codemirror$mode$r$r", {});
var module$node_modules$codemirror$mode$rpm$rpm=shadow.js.require("module$node_modules$codemirror$mode$rpm$rpm", {});
var module$node_modules$codemirror$mode$rst$rst=shadow.js.require("module$node_modules$codemirror$mode$rst$rst", {});
var module$node_modules$codemirror$mode$ruby$ruby=shadow.js.require("module$node_modules$codemirror$mode$ruby$ruby", {});
var module$node_modules$codemirror$mode$rust$rust=shadow.js.require("module$node_modules$codemirror$mode$rust$rust", {});
var module$node_modules$codemirror$mode$sas$sas=shadow.js.require("module$node_modules$codemirror$mode$sas$sas", {});
var module$node_modules$codemirror$mode$sass$sass=shadow.js.require("module$node_modules$codemirror$mode$sass$sass", {});
var module$node_modules$codemirror$mode$scheme$scheme=shadow.js.require("module$node_modules$codemirror$mode$scheme$scheme", {});
var module$node_modules$codemirror$mode$shell$shell=shadow.js.require("module$node_modules$codemirror$mode$shell$shell", {});
var module$node_modules$codemirror$mode$sieve$sieve=shadow.js.require("module$node_modules$codemirror$mode$sieve$sieve", {});
var module$node_modules$codemirror$mode$slim$slim=shadow.js.require("module$node_modules$codemirror$mode$slim$slim", {});
var module$node_modules$codemirror$mode$smalltalk$smalltalk=shadow.js.require("module$node_modules$codemirror$mode$smalltalk$smalltalk", {});
var module$node_modules$codemirror$mode$smarty$smarty=shadow.js.require("module$node_modules$codemirror$mode$smarty$smarty", {});
var module$node_modules$codemirror$mode$solr$solr=shadow.js.require("module$node_modules$codemirror$mode$solr$solr", {});
var module$node_modules$codemirror$mode$soy$soy=shadow.js.require("module$node_modules$codemirror$mode$soy$soy", {});
var module$node_modules$codemirror$mode$sparql$sparql=shadow.js.require("module$node_modules$codemirror$mode$sparql$sparql", {});
var module$node_modules$codemirror$mode$spreadsheet$spreadsheet=shadow.js.require("module$node_modules$codemirror$mode$spreadsheet$spreadsheet", {});
var module$node_modules$codemirror$mode$sql$sql=shadow.js.require("module$node_modules$codemirror$mode$sql$sql", {});
var module$node_modules$codemirror$mode$stex$stex=shadow.js.require("module$node_modules$codemirror$mode$stex$stex", {});
var module$node_modules$codemirror$mode$stylus$stylus=shadow.js.require("module$node_modules$codemirror$mode$stylus$stylus", {});
var module$node_modules$codemirror$mode$swift$swift=shadow.js.require("module$node_modules$codemirror$mode$swift$swift", {});
var module$node_modules$codemirror$mode$tcl$tcl=shadow.js.require("module$node_modules$codemirror$mode$tcl$tcl", {});
var module$node_modules$codemirror$mode$textile$textile=shadow.js.require("module$node_modules$codemirror$mode$textile$textile", {});
var module$node_modules$codemirror$mode$tiddlywiki$tiddlywiki=shadow.js.require("module$node_modules$codemirror$mode$tiddlywiki$tiddlywiki", {});
var module$node_modules$codemirror$mode$tiki$tiki=shadow.js.require("module$node_modules$codemirror$mode$tiki$tiki", {});
var module$node_modules$codemirror$mode$toml$toml=shadow.js.require("module$node_modules$codemirror$mode$toml$toml", {});
var module$node_modules$codemirror$mode$tornado$tornado=shadow.js.require("module$node_modules$codemirror$mode$tornado$tornado", {});
var module$node_modules$codemirror$mode$troff$troff=shadow.js.require("module$node_modules$codemirror$mode$troff$troff", {});
var module$node_modules$codemirror$mode$ttcn_cfg$ttcn_cfg=shadow.js.require("module$node_modules$codemirror$mode$ttcn_cfg$ttcn_cfg", {});
var module$node_modules$codemirror$mode$ttcn$ttcn=shadow.js.require("module$node_modules$codemirror$mode$ttcn$ttcn", {});
var module$node_modules$codemirror$mode$turtle$turtle=shadow.js.require("module$node_modules$codemirror$mode$turtle$turtle", {});
var module$node_modules$codemirror$mode$twig$twig=shadow.js.require("module$node_modules$codemirror$mode$twig$twig", {});
var module$node_modules$codemirror$mode$vb$vb=shadow.js.require("module$node_modules$codemirror$mode$vb$vb", {});
var module$node_modules$codemirror$mode$vbscript$vbscript=shadow.js.require("module$node_modules$codemirror$mode$vbscript$vbscript", {});
var module$node_modules$codemirror$mode$velocity$velocity=shadow.js.require("module$node_modules$codemirror$mode$velocity$velocity", {});
var module$node_modules$codemirror$mode$verilog$verilog=shadow.js.require("module$node_modules$codemirror$mode$verilog$verilog", {});
var module$node_modules$codemirror$mode$vhdl$vhdl=shadow.js.require("module$node_modules$codemirror$mode$vhdl$vhdl", {});
var module$node_modules$codemirror$mode$vue$vue=shadow.js.require("module$node_modules$codemirror$mode$vue$vue", {});
var module$node_modules$codemirror$mode$wast$wast=shadow.js.require("module$node_modules$codemirror$mode$wast$wast", {});
var module$node_modules$codemirror$mode$webidl$webidl=shadow.js.require("module$node_modules$codemirror$mode$webidl$webidl", {});
var module$node_modules$codemirror$mode$xml$xml=shadow.js.require("module$node_modules$codemirror$mode$xml$xml", {});
var module$node_modules$codemirror$mode$xquery$xquery=shadow.js.require("module$node_modules$codemirror$mode$xquery$xquery", {});
var module$node_modules$codemirror$mode$yacas$yacas=shadow.js.require("module$node_modules$codemirror$mode$yacas$yacas", {});
var module$node_modules$codemirror$mode$yaml_frontmatter$yaml_frontmatter=shadow.js.require("module$node_modules$codemirror$mode$yaml_frontmatter$yaml_frontmatter", {});
var module$node_modules$codemirror$mode$yaml$yaml=shadow.js.require("module$node_modules$codemirror$mode$yaml$yaml", {});
var module$node_modules$codemirror$mode$z80$z80=shadow.js.require("module$node_modules$codemirror$mode$z80$z80", {});
frontend.extensions.code.from_textarea = frontend.extensions.code.goog$module$goog$object.get(module$node_modules$codemirror$lib$codemirror,"fromTextArea");
frontend.extensions.code.Pos = frontend.extensions.code.goog$module$goog$object.get(module$node_modules$codemirror$lib$codemirror,"Pos");
frontend.extensions.code.codemirror_ref_name = "codemirror-instance";
(window.CodeMirror = module$node_modules$codemirror$lib$codemirror);
/**
 * All tokens from the beginning of the document to the cursor(inclusive).
 */
frontend.extensions.code.all_tokens_by_cursor = (function frontend$extensions$code$all_tokens_by_cursor(cm){
var cur = cm.getCursor();
var line = cur.line;
var pos = cur.ch;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__64660_SHARP_){
return cm.getLineTokens(p1__64660_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(line)], 0)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64661_SHARP_){
return (p1__64661_SHARP_.end <= pos);
}),cm.getLineTokens(line)));
});
/**
 * Parse tokens into document state of the last token.
 */
frontend.extensions.code.tokens__GT_doc_state = (function frontend$extensions$code$tokens__GT_doc_state(tokens){
var init_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),(new cljs.core.List(null,new cljs.core.Keyword(null,"ok","ok",967785236),null,(1),null))], null);
var state = init_state;
var tokens__$1 = tokens;
while(true){
if(cljs.core.empty_QMARK_(tokens__$1)){
return state;
} else {
var token = cljs.core.first(tokens__$1);
var token_type = token.type;
var token_string = token.string;
var current_state = cljs.core.first(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state));
var next_state = (((((token_type == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"comment")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"meta")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"error","error",-978969032)))))))))?state:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"bracket"))?(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",token_string);
if(and__5140__auto__){
return cljs.core.some(((function (state,tokens__$1,and__5140__auto__,token,token_type,token_string,current_state,init_state){
return (function (p1__64662_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null], null), null),p1__64662_SHARP_);
});})(state,tokens__$1,and__5140__auto__,token,token_type,token_string,current_state,init_state))
,new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"ignore-map","ignore-map",-1199019590))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",token_string))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"map","map",1371690461))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",token_string))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"list","list",765357683))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",token_string))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"vector","vector",1902966158))):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ignore-map","ignore-map",-1199019590),current_state)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null),token_string))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.pop(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state))):((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",token_string)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),current_state)))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",token_string)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"list","list",765357683),current_state)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",token_string)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vector","vector",1902966158),current_state))))))))?(function (){var new_state_stack = cljs.core.pop(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new_state_stack),new cljs.core.Keyword(null,"key","key",-1516042587))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.pop(new_state_stack),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454),cljs.core.pop(new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454).cljs$core$IFn$_invoke$arity$1(state))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.pop(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state)));
}
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"error","error",-978969032)))
)))))):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"map","map",1371690461))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"atom"))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454).cljs$core$IFn$_invoke$arity$1(state),token_string)], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"key","key",-1516042587)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.pop(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454),cljs.core.pop(new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454).cljs$core$IFn$_invoke$arity$1(state))], 0)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"list","list",765357683))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"vector","vector",1902966158))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"ignore-map","ignore-map",-1199019590)))))))?state:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"error","error",-978969032)))
)))));
var G__64711 = next_state;
var G__64712 = cljs.core.rest(tokens__$1);
state = G__64711;
tokens__$1 = G__64712;
continue;
}
break;
}
});
/**
 * Parse tokens into document state of last token.
 */
frontend.extensions.code.doc_state_at_cursor = (function frontend$extensions$code$doc_state_at_cursor(cm){
var tokens = frontend.extensions.code.all_tokens_by_cursor(cm);
var map__64663 = frontend.extensions.code.tokens__GT_doc_state(tokens);
var map__64663__$1 = cljs.core.__destructure_map(map__64663);
var current_config_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64663__$1,new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454));
var state_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64663__$1,new cljs.core.Keyword(null,"state-stack","state-stack",489104326));
var doc_state = cljs.core.first(state_stack);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_config_path,doc_state], null);
});
frontend.extensions.code.malli_type__GT_completion_postfix = (function frontend$extensions$code$malli_type__GT_completion_postfix(type){
var G__64664 = type;
var G__64664__$1 = (((G__64664 instanceof cljs.core.Keyword))?G__64664.fqn:null);
switch (G__64664__$1) {
case "string":
return "\"\"";

break;
case "map-of":
return "{}";

break;
case "map":
return "{}";

break;
case "set":
return "#{}";

break;
case "vector":
return "[]";

break;
default:
return null;

}
});
frontend.extensions.code._map_syntax_walker = (function frontend$extensions$code$_map_syntax_walker(schema,_,children,___$1){
var properties = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var options = malli.core.options.cljs$core$IFn$_invoke$arity$1(schema);
var r = (cljs.core.truth_(properties)?(properties.cljs$core$IFn$_invoke$arity$1 ? properties.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"registry","registry",1021159018)) : properties.call(null,new cljs.core.Keyword(null,"registry","registry",1021159018))):null);
var properties__$1 = (cljs.core.truth_(r)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"registry","registry",1021159018),malli.core._property_registry(r,options,malli.core._form)):properties);
var G__64665 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema)], null);
var G__64665__$1 = ((cljs.core.seq(properties__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64665,new cljs.core.Keyword(null,"properties","properties",685819552),properties__$1):G__64665);
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64665__$1,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return G__64665__$1;
}
});
frontend.extensions.code.malli_to_map_syntax = (function frontend$extensions$code$malli_to_map_syntax(var_args){
var G__64667 = arguments.length;
switch (G__64667) {
case 1:
return frontend.extensions.code.malli_to_map_syntax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.code.malli_to_map_syntax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.code.malli_to_map_syntax.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return frontend.extensions.code.malli_to_map_syntax.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(frontend.extensions.code.malli_to_map_syntax.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,frontend.extensions.code._map_syntax_walker,options);
}));

(frontend.extensions.code.malli_to_map_syntax.cljs$lang$maxFixedArity = 2);

module$node_modules$codemirror$lib$codemirror.registerHelper("hint","clojure",(function (cm,_options){
var cur = cm.getCursor();
var token = cm.getTokenAt(cur);
var token_type = token.type;
var token_string = token.string;
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var vec__64668 = frontend.extensions.code.doc_state_at_cursor(cm);
var config_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64668,(0),null);
var doc_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64668,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"atom")) && (((clojure.string.starts_with_QMARK_(token_string,":")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(doc_state,new cljs.core.Keyword(null,"key","key",-1516042587))))))){
malli.core.walk.cljs$core$IFn$_invoke$arity$2(frontend.schema.handler.common_config.Config_edn,(function (schema,properties,_children,_opts){
var schema_path_64715 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,properties);
if(cljs.core.empty_QMARK_(schema_path_64715)){
} else {
if(cljs.core.empty_QMARK_(config_path)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,cljs.core.first(schema_path_64715),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(config_path),(1))){
if(clojure.string.starts_with_QMARK_(cljs.core.first(schema_path_64715),cljs.core.first(config_path))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,cljs.core.first(schema_path_64715),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(config_path),(2))){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(schema_path_64715),(2))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(schema_path_64715),cljs.core.first(config_path))) && (clojure.string.starts_with_QMARK_(cljs.core.second(schema_path_64715),cljs.core.second(config_path))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,cljs.core.second(schema_path_64715),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
} else {
}
} else {
}
}
}
}

return null;
}));

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(result)))){
var from = (new frontend.extensions.code.Pos(cur.line,token.start));
var to = (new frontend.extensions.code.Pos(cur.line,token.end));
var add_postfix_after_QMARK_ = (token.end <= cur.ch);
var doc = cm.getValue();
var list = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (text){
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(result),text);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((add_postfix_after_QMARK_)?(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.code.malli_type__GT_completion_postfix(type))):null))),new cljs.core.Keyword(null,"displayText","displayText",45566701),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)+"   "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))], null);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (text){
return cljs.core.re_find(cljs.core.re_pattern((""+"[^;]*"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)+"\\s")),doc);
}),cljs.core.keys(cljs.core.deref(result)))));
var completion = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),list,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null));
return completion;
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (token_type == null);
if(and__5140__auto__){
var and__5140__auto____$1 = clojure.string.blank_QMARK_(clojure.string.trim(token_string));
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs.core.not_empty(config_path);
if(cljs.core.truth_(and__5140__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(doc_state,new cljs.core.Keyword(null,"key","key",-1516042587));
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
malli.core.walk.cljs$core$IFn$_invoke$arity$2(frontend.schema.handler.common_config.Config_edn,(function (schema,properties,_children,_opts){
var schema_path = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,properties);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(config_path,schema_path)){
var G__64671_64716 = malli.core.type.cljs$core$IFn$_invoke$arity$1(schema);
var G__64671_64717__$1 = (((G__64671_64716 instanceof cljs.core.Keyword))?G__64671_64716.fqn:null);
switch (G__64671_64717__$1) {
case "boolean":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.assoc,"true",null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["false",null], 0));

break;
case "enum":
var map__64672_64719 = frontend.extensions.code.malli_to_map_syntax.cljs$core$IFn$_invoke$arity$1(schema);
var map__64672_64720__$1 = cljs.core.__destructure_map(map__64672_64719);
var children_64721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64672_64720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var seq__64673_64722 = cljs.core.seq(children_64721);
var chunk__64674_64723 = null;
var count__64675_64724 = (0);
var i__64676_64725 = (0);
while(true){
if((i__64676_64725 < count__64675_64724)){
var child_64726 = chunk__64674_64723.cljs$core$IIndexed$_nth$arity$2(null,i__64676_64725);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_64726)),null);


var G__64727 = seq__64673_64722;
var G__64728 = chunk__64674_64723;
var G__64729 = count__64675_64724;
var G__64730 = (i__64676_64725 + (1));
seq__64673_64722 = G__64727;
chunk__64674_64723 = G__64728;
count__64675_64724 = G__64729;
i__64676_64725 = G__64730;
continue;
} else {
var temp__5825__auto___64731 = cljs.core.seq(seq__64673_64722);
if(temp__5825__auto___64731){
var seq__64673_64732__$1 = temp__5825__auto___64731;
if(cljs.core.chunked_seq_QMARK_(seq__64673_64732__$1)){
var c__5673__auto___64733 = cljs.core.chunk_first(seq__64673_64732__$1);
var G__64734 = cljs.core.chunk_rest(seq__64673_64732__$1);
var G__64735 = c__5673__auto___64733;
var G__64736 = cljs.core.count(c__5673__auto___64733);
var G__64737 = (0);
seq__64673_64722 = G__64734;
chunk__64674_64723 = G__64735;
count__64675_64724 = G__64736;
i__64676_64725 = G__64737;
continue;
} else {
var child_64738 = cljs.core.first(seq__64673_64732__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_64738)),null);


var G__64739 = cljs.core.next(seq__64673_64732__$1);
var G__64740 = null;
var G__64741 = (0);
var G__64742 = (0);
seq__64673_64722 = G__64739;
chunk__64674_64723 = G__64740;
count__64675_64724 = G__64741;
i__64676_64725 = G__64742;
continue;
}
} else {
}
}
break;
}

break;
default:

}
} else {
}

return null;
}));

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(result)))){
var from = (new frontend.extensions.code.Pos(cur.line,cur.ch));
var to = (new frontend.extensions.code.Pos(cur.line,cur.ch));
var list = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"displayText","displayText",45566701),text], null);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(result))));
var completion = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),list,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null));
return completion;
} else {
return null;
}
} else {
return null;
}
}
}));
frontend.extensions.code.complete_after = (function frontend$extensions$code$complete_after(cm,pred){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(pred);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$0 ? pred.cljs$core$IFn$_invoke$arity$0() : pred.call(null));
}
})())){
setTimeout((function (){
if(cljs.core.not(cm.state.completionActive)){
return cm.showHint(({"completeSingle": false}));
} else {
return null;
}
}),(100));
} else {
}

return module$node_modules$codemirror$lib$codemirror.Pass;
});
frontend.extensions.code.extra_codemirror_options = (function frontend$extensions$code$extra_codemirror_options(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("editor","extra-codemirror-options","editor/extra-codemirror-options",388833047),cljs.core.PersistentArrayMap.EMPTY);
});
frontend.extensions.code.text__GT_cm_mode = (function frontend$extensions$code$text__GT_cm_mode(var_args){
var G__64678 = arguments.length;
switch (G__64678) {
case 1:
return frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$1 = (function (text){
return frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2(text,new cljs.core.Keyword(null,"name","name",1843675177));
}));

(frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2 = (function (text,by){
if(cljs.core.truth_(text)){
var mode = clojure.string.lower_case(text);
var find_fn_name = (function (){var G__64679 = by;
var G__64679__$1 = (((G__64679 instanceof cljs.core.Keyword))?G__64679.fqn:null);
switch (G__64679__$1) {
case "name":
return "findModeByName";

break;
case "ext":
return "findModeByExtension";

break;
case "file-name":
return "findModeByFileName";

break;
default:
return "findModeByName";

}
})();
var find_fn = frontend.extensions.code.goog$module$goog$object.get(module$node_modules$codemirror$lib$codemirror,find_fn_name);
var cm_mode = (find_fn.cljs$core$IFn$_invoke$arity$1 ? find_fn.cljs$core$IFn$_invoke$arity$1(mode) : find_fn.call(null,mode));
if(cljs.core.truth_(cm_mode)){
return cm_mode.mime;
} else {
return mode;
}
} else {
return null;
}
}));

(frontend.extensions.code.text__GT_cm_mode.cljs$lang$maxFixedArity = 2);

frontend.extensions.code.save_editor_BANG_ = (function frontend$extensions$code$save_editor_BANG_(config){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.code.save_code_editor_BANG_()),(function (___21901__auto__){
return promesa.protocols._promise((function (){var temp__5825__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"code-block","code-block",-2113425141).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","raw-mode-block","editor/raw-mode-block",-1788505944),block__$1)),(function (___21901__auto____$1){
return promesa.protocols._promise((function (){var G__64680 = block__$1;
var G__64681 = new cljs.core.Keyword(null,"max","max",61366548);
var G__64682 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),false], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__64680,G__64681,G__64682) : frontend.handler.editor.edit_block_BANG_.call(null,G__64680,G__64681,G__64682));
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
});
frontend.extensions.code.theme_name = (function frontend$extensions$code$theme_name(theme,radix_color_QMARK_){
if(cljs.core.truth_(radix_color_QMARK_)){
return (""+"lsradix "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme));
} else {
return (""+"solarized "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme));
}
});
frontend.extensions.code.render_BANG_ = (function frontend$extensions$code$render_BANG_(state){
var map__64683 = state;
var map__64683__$1 = cljs.core.__destructure_map(map__64683);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64683__$1,new cljs.core.Keyword(null,"config","config",994861415));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64683__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64683__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64683__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64683__$1,new cljs.core.Keyword(null,"options","options",99638489));
var radix_color_QMARK_ = new cljs.core.Keyword(null,"radix-color?","radix-color?",-23873203).cljs$core$IFn$_invoke$arity$1(state);
var user_options = options;
var edit_block = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
var code_block = new cljs.core.Keyword(null,"code-block","code-block",-2113425141).cljs$core$IFn$_invoke$arity$1(config);
var config_file_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(config),"logseq/config.edn");
var _ = frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","code-mode?","editor/code-mode?",1404453234),false);
var original_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"data-lang","data-lang",969460304));
var _STAR_editor_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"editor-ref","editor-ref",-487163370));
var mode = (cljs.core.truth_(new cljs.core.Keyword(null,"file?","file?",1755223728).cljs$core$IFn$_invoke$arity$1(config))?frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2(original_mode,new cljs.core.Keyword(null,"ext","ext",-996964541)):frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2(original_mode,new cljs.core.Keyword(null,"name","name",1843675177)));
var lisp_like_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["clojure",null,"lisp",null,"edn",null,"scheme",null], null), null),mode);
var config_edit_QMARK_ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"file?","file?",1755223728).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.ends_with_QMARK_(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(config),"config.edn");
} else {
return and__5140__auto__;
}
})();
var textarea = goog.dom.getElement(id);
var default_cm_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"theme","theme",-1247880880),frontend.extensions.code.theme_name(theme,radix_color_QMARK_),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),lisp_like_QMARK_,new cljs.core.Keyword(null,"styleActiveLine","styleActiveLine",-677594147),true], null);
var cm_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_cm_options,(function (){var G__64684 = frontend.extensions.code.extra_codemirror_options();
if(config_file_QMARK_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__64684,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317));
} else {
return G__64684;
}
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Esc",(function (cm){
frontend.extensions.code.goog$module$goog$object.set(cm,"escPressed",true);

return frontend.extensions.code.save_editor_BANG_(config);
})], null),(cljs.core.truth_(config_edit_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, ["':'",frontend.extensions.code.complete_after,"Ctrl-Space","autocomplete"], null):null)], 0))], null),((frontend.config.publishing_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"cursorBlinkRate","cursorBlinkRate",1916335188),(-1)], null):null),(cljs.core.truth_(config_edit_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hintOptions","hintOptions",-1460249832),cljs.core.PersistentArrayMap.EMPTY], null):null),user_options,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"calc"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),Infinity], null):null)], 0));
var editor = (cljs.core.truth_(textarea)?(function (){var G__64685 = textarea;
var G__64686 = cljs.core.clj__GT_js(cm_options);
return (frontend.extensions.code.from_textarea.cljs$core$IFn$_invoke$arity$2 ? frontend.extensions.code.from_textarea.cljs$core$IFn$_invoke$arity$2(G__64685,G__64686) : frontend.extensions.code.from_textarea.call(null,G__64685,G__64686));
})():null);
var ___$1 = (cljs.core.truth_((function (){var and__5140__auto__ = editor;
if(cljs.core.truth_(and__5140__auto__)){
return _STAR_editor_ref;
} else {
return and__5140__auto__;
}
})())?cljs.core.reset_BANG_(_STAR_editor_ref,editor):null);
if(cljs.core.truth_(editor)){
var element_64745 = editor.getWrapperElement();
var _STAR_cursor_prev_64746 = cljs.core.volatile_BANG_(null);
var _STAR_cursor_curr_64747 = cljs.core.volatile_BANG_(null);
var update_cursor_state_BANG__64748 = (function (){
var start_pos = editor.getCursor(true);
var end_pos = editor.getCursor(false);
var start_pos_SINGLEQUOTE_ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(JSON.stringify(start_pos)));
var end_pos_SINGLEQUOTE_ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(JSON.stringify(end_pos)));
var range = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.select_keys(start_pos_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)),new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.select_keys(end_pos_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"ch","ch",-554717905)], null))], null);
if(cljs.core.not(cljs.core.deref(_STAR_cursor_prev_64746))){
cljs.core.vreset_BANG_(_STAR_cursor_prev_64746,range);
} else {
cljs.core.vreset_BANG_(_STAR_cursor_prev_64746,cljs.core.deref(_STAR_cursor_curr_64747));
}

return cljs.core.vreset_BANG_(_STAR_cursor_curr_64747,range);
});
frontend.extensions.code.goog$module$goog$object.set(textarea,frontend.extensions.code.codemirror_ref_name,editor);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"calc")){
editor.on("change",(function (_cm,_e){
var new_code = editor.getValue();
var G__64688 = frontend.extensions.calc.eval_lines(new_code);
var fexpr__64687 = new cljs.core.Keyword(null,"set-calc-lines!","set-calc-lines!",-955947108).cljs$core$IFn$_invoke$arity$1(state);
return (fexpr__64687.cljs$core$IFn$_invoke$arity$1 ? fexpr__64687.cljs$core$IFn$_invoke$arity$1(G__64688) : fexpr__64687.call(null,G__64688));
}));
} else {
}

editor.on("blur",(function (cm,e){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

var esc_QMARK_ = frontend.extensions.code.goog$module$goog$object.get(cm,"escPressed");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),frontend.state.get_current_route())) || (cljs.core.not(esc_QMARK_)))){
frontend.handler.code.save_code_editor_BANG_();
} else {
}

frontend.state.set_block_component_editing_mode_BANG_(false);

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346),null);

if(((cljs.core.not(esc_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(edit_block))))){
frontend.state.clear_edit_BANG_();
} else {
}

cljs.core.vreset_BANG_(_STAR_cursor_curr_64747,null);

return cljs.core.vreset_BANG_(_STAR_cursor_prev_64746,null);
}));

editor.on("focus",(function (_e){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(code_block))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()))));
} else {
return and__5140__auto__;
}
})())){
var G__64689_64749 = (function (){var or__5142__auto__ = code_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return edit_block;
}
})();
var G__64690_64750 = new cljs.core.Keyword(null,"max","max",61366548);
var G__64691_64751 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config)], null);
(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__64689_64749,G__64690_64750,G__64691_64751) : frontend.handler.editor.edit_block_BANG_.call(null,G__64689_64749,G__64690_64750,G__64691_64751));
} else {
}

frontend.state.set_block_component_editing_mode_BANG_(true);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editor","editor",-989377770),editor,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
}));

editor.on("cursorActivity",update_cursor_state_BANG__64748);

element_64745.addEventListener("keydown",(function (e){
var key_code = e.code;
var meta_or_ctrl_pressed_QMARK_ = (function (){var or__5142__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return e.metaKey;
}
})();
var shifted_QMARK_ = e.shiftKey;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowRight",null,"ArrowLeft",null], null), null),key_code)){
var direction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowLeft",key_code))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cursor_prev_64746),cljs.core.deref(_STAR_cursor_curr_64747));
if(and__5140__auto__){
var or__5142__auto__ = (function (){var and__5140__auto____$1 = direction;
if(cljs.core.truth_(and__5140__auto____$1)){
return (cljs.core.deref(_STAR_cursor_curr_64747) == null);
} else {
return and__5140__auto____$1;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__64692 = direction;
var G__64692__$1 = (((G__64692 instanceof cljs.core.Keyword))?G__64692.fqn:null);
switch (G__64692__$1) {
case "left":
return (((new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747))) === (0))) && ((new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747))) === (0))));

break;
case "right":
var line = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747)));
if(cljs.core.truth_(temp__5825__auto__)){
var line = temp__5825__auto__;
return editor.doc.getLine(line);
} else {
return null;
}
})();
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747))),editor.lastLine())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747))),cljs.core.count(line))));

break;
default:
return false;

}
}
} else {
return and__5140__auto__;
}
})())){
frontend.handler.editor.move_to_block_when_cross_boundary(direction,cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return update_cursor_state_BANG__64748();
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null),key_code)){
var direction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowUp",key_code))?new cljs.core.Keyword(null,"up","up",-269712113):new cljs.core.Keyword(null,"down","down",1565245570));
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cursor_prev_64746),cljs.core.deref(_STAR_cursor_curr_64747));
if(and__5140__auto__){
var or__5142__auto__ = (function (){var and__5140__auto____$1 = direction;
if(cljs.core.truth_(and__5140__auto____$1)){
return (cljs.core.deref(_STAR_cursor_curr_64747) == null);
} else {
return and__5140__auto____$1;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__64693 = direction;
var G__64693__$1 = (((G__64693 instanceof cljs.core.Keyword))?G__64693.fqn:null);
switch (G__64693__$1) {
case "up":
return (((new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747))) === (0))) && ((new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747))) === (0))));

break;
case "down":
var line = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747)));
if(cljs.core.truth_(temp__5825__auto__)){
var line = temp__5825__auto__;
return editor.doc.getLine(line);
} else {
return null;
}
})();
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747))),editor.lastLine())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_cursor_curr_64747))),cljs.core.count(line))));

break;
default:
return false;

}
}
} else {
return and__5140__auto__;
}
})())){
frontend.handler.editor.move_cross_boundary_up_down(direction,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),textarea,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [direction,(0)], null)], null));
} else {
}

return update_cursor_state_BANG__64748();
} else {
if(cljs.core.truth_(meta_or_ctrl_pressed_QMARK_)){
var G__64694 = key_code;
switch (G__64694) {
case "BracketLeft":
return frontend.util.stop(e);

break;
case "BracketRight":
return frontend.util.stop(e);

break;
default:
return null;

}
} else {
if(cljs.core.truth_(shifted_QMARK_)){
var G__64695 = key_code;
switch (G__64695) {
case "Enter":
frontend.util.stop(e);

var temp__5825__auto__ = (function (){var G__64696 = e.target;
var G__64696__$1 = (((G__64696 == null))?null:G__64696.closest("[blockid]"));
if((G__64696__$1 == null)){
return null;
} else {
return G__64696__$1.getAttribute("blockid");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var blockid = temp__5825__auto__;
frontend.handler.code.save_code_editor_BANG_();

var G__64697 = (function (){
return frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),cljs.core.uuid(blockid),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null));
});
return (frontend.util.schedule.cljs$core$IFn$_invoke$arity$1 ? frontend.util.schedule.cljs$core$IFn$_invoke$arity$1(G__64697) : frontend.util.schedule.call(null,G__64697));
} else {
return null;
}

break;
default:
return null;

}
} else {
return null;
}
}
}
}
}));

element_64745.addEventListener("pointerdown",(function (e){
e.stopPropagation();

return frontend.state.clear_selection_BANG_();
}));

element_64745.addEventListener("touchstart",(function (e){
return e.stopPropagation();
}));

editor.save();

editor.refresh();
} else {
}

return editor;
});
frontend.extensions.code.load_and_render_BANG_ = (function frontend$extensions$code$load_and_render_BANG_(state){
var editor_atom = new cljs.core.Keyword(null,"editor-atom","editor-atom",1409591060).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.deref(editor_atom))){
return null;
} else {
var editor = frontend.extensions.code.render_BANG_(state);
return cljs.core.reset_BANG_(editor_atom,editor);
}
});
frontend.extensions.code.calc_mode_QMARK_ = (function frontend$extensions$code$calc_mode_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr),"calc");
});
frontend.extensions.code.sync_editor_code_BANG_ = (function frontend$extensions$code$sync_editor_code_BANG_(editor,code){
if(cljs.core.truth_((function (){var and__5140__auto__ = editor;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof code === 'string') && (((cljs.core.not(editor.hasFocus())) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(editor.getValue(),code)))));
} else {
return and__5140__auto__;
}
})())){
return editor.setValue(code);
} else {
return null;
}
});
frontend.extensions.code.editor = (function (){var render_fn__31744__auto__ = (function frontend$extensions$code$editor(config,id,attr,code,options){
var editor_atom = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var calc_QMARK_ = frontend.extensions.code.calc_mode_QMARK_(attr);
var vec__64698 = logseq.shui.hooks.use_state((function (){
if(calc_QMARK_){
return frontend.extensions.calc.eval_lines(code);
} else {
return null;
}
}));
var calc_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64698,(0),null);
var set_calc_lines_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64698,(1),null);
var current_theme = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)], null));
var radix_color_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984)], null));
var code_options = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(options);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var last_theme = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.code.theme_name(current_theme,radix_color_QMARK_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var component_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"last-theme","last-theme",-1086226741),new cljs.core.Keyword(null,"radix-color?","radix-color?",-23873203),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"editor-atom","editor-atom",1409591060),new cljs.core.Keyword(null,"code-options","code-options",1113362965),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"set-calc-lines!","set-calc-lines!",-955947108),new cljs.core.Keyword(null,"attr","attr",-604132353)],[config,last_theme,radix_color_QMARK_,current_theme,id,editor_atom,code_options,code,options,set_calc_lines_BANG_,attr]);
logseq.shui.hooks.use_effect_BANG_((function (){
return frontend.extensions.code.load_and_render_BANG_(component_state);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

logseq.shui.hooks.use_effect_BANG_((function (){
frontend.extensions.code.sync_editor_code_BANG_(cljs.core.deref(editor_atom),code);

if(calc_QMARK_){
var G__64701 = frontend.extensions.calc.eval_lines(code);
return (set_calc_lines_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_calc_lines_BANG_.cljs$core$IFn$_invoke$arity$1(G__64701) : set_calc_lines_BANG_.call(null,G__64701));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,code,calc_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var next_theme_64756 = frontend.extensions.code.theme_name(current_theme,radix_color_QMARK_);
var previous_theme_64757 = cljs.core.deref(last_theme);
var editor_SINGLEQUOTE__64758 = cljs.core.deref(editor_atom);
if(cljs.core.truth_((function (){var and__5140__auto__ = editor_SINGLEQUOTE__64758;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_theme_64756,previous_theme_64757);
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(last_theme,next_theme_64756);

editor_SINGLEQUOTE__64758.setOption("theme",next_theme_64756);
} else {
}

return cljs.core.reset_BANG_(code_options,options);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [options,current_theme,radix_color_QMARK_], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__code.flex.flex-1","div.extensions__code.flex.flex-1",1508599092),(function (){var G__64702 = cljs.core.PersistentArrayMap.EMPTY;
if(calc_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64702,new cljs.core.Keyword(null,"data-lang","data-lang",969460304),"calc");
} else {
return G__64702;
}
})(),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr);
if(cljs.core.truth_(temp__5825__auto__)){
var mode = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"calc")){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__code-lang","div.extensions__code-lang",1159233563),clojure.string.lower_case(mode)], null);
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-editor.flex.flex-1.flex-row.w-full","div.code-editor.flex.flex-1.flex-row.w-full",457515244),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"default-value","default-value",232220170),code], null),attr], 0))], null),((calc_QMARK_)?frontend.extensions.calc.results(calc_lines):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$code$editor__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__64703 = cljs.core.first(args__31746__auto__);
var G__64704 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__64703,G__64704) : io.factorhouse.hsx.core.obj_get.call(null,G__64703,G__64704));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"editor","editor",651153757,null),args__31746__auto__),frontend$extensions$code$editor,args__31746__auto__,null);
}
};
var frontend$extensions$code$editor = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__64759__i = 0, G__64759__a = new Array(arguments.length -  0);
while (G__64759__i < G__64759__a.length) {G__64759__a[G__64759__i] = arguments[G__64759__i + 0]; ++G__64759__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__64759__a,0,null);
} 
return frontend$extensions$code$editor__delegate.call(this,args__31746__auto__);};
frontend$extensions$code$editor.cljs$lang$maxFixedArity = 0;
frontend$extensions$code$editor.cljs$lang$applyTo = (function (arglist__64760){
var args__31746__auto__ = cljs.core.seq(arglist__64760);
return frontend$extensions$code$editor__delegate(args__31746__auto__);
});
frontend$extensions$code$editor.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$code$editor__delegate;
return frontend$extensions$code$editor;
})()
;
var memo_comp__31747__auto__ = (function (){var G__64705 = comp__31745__auto__;
var G__64706 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__64705,G__64706) : io.factorhouse.hsx.core.react_memo.call(null,G__64705,G__64706));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"editor");

return comp__31745__auto__;
})();
frontend.components.lazy_editor.register_editor_BANG_(frontend.extensions.code.editor);
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("codemirror","focus","codemirror/focus",-19393885),(function (p__64707){
var vec__64708 = p__64707;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64708,(0),null);
var block = frontend.state.get_edit_block();
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","save-current-block","editor/save-current-block",1864275336)], null))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.clear_edit_BANG_()),(function (___21901__auto____$1){
return promesa.protocols._promise(setTimeout((function (){
var block_node = frontend.util.get_first_block_by_id(block_uuid);
var textarea_ref = block_node.querySelector("textarea");
var temp__5825__auto__ = frontend.extensions.code.goog$module$goog$object.get(textarea_ref,frontend.extensions.code.codemirror_ref_name);
if(cljs.core.truth_(temp__5825__auto__)){
var codemirror_ref = temp__5825__auto__;
return codemirror_ref.focus();
} else {
return null;
}
}),(256)));
}));
}));
}));
}));

//# sourceMappingURL=frontend.extensions.code.js.map
