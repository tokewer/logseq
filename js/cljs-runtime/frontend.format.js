goog.provide('frontend.format');
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc_record !== 'undefined')){
} else {
frontend.format.mldoc_record = frontend.format.mldoc.__GT_MldocMode();
}
frontend.format.to_html = (function frontend$format$to_html(content,config){
if(clojure.string.blank_QMARK_(content)){
return "";
} else {
return frontend.format.mldoc_record.frontend$format$protocol$Format$toHtml$arity$4(null,content,config,logseq.graph_parser.mldoc.default_references);
}
});
frontend.format.to_edn = (function frontend$format$to_edn(content,config){
return frontend.format.mldoc_record.frontend$format$protocol$Format$toEdn$arity$3(null,content,config);
});

//# sourceMappingURL=frontend.format.js.map
