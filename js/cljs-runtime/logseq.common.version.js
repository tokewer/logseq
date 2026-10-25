goog.provide('logseq.common.version');
/**
 * @define {string}
 * @type {string}
 */
logseq.common.version.BUILD_TIME = goog.define("logseq.common.version.BUILD_TIME","unknown");
/**
 * @define {string}
 * @type {string}
 */
logseq.common.version.REVISION = goog.define("logseq.common.version.REVISION","dev");
logseq.common.version.build_time = (function logseq$common$version$build_time(){
return logseq.common.version.BUILD_TIME;
});
logseq.common.version.revision = (function logseq$common$version$revision(){
return logseq.common.version.REVISION;
});
logseq.common.version.format_version = (function logseq$common$version$format_version(){
return (""+"Build time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.version.build_time())+"\n"+"Revision: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.version.revision()));
});

//# sourceMappingURL=logseq.common.version.js.map
