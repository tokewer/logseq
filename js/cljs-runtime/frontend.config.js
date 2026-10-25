goog.provide('frontend.config');
/**
 * @define {boolean}
 * @type {boolean}
 */
frontend.config.DEV_RELEASE = goog.define("frontend.config.DEV_RELEASE",false);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.dev_release_QMARK_ !== 'undefined')){
} else {
frontend.config.dev_release_QMARK_ = frontend.config.DEV_RELEASE;
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.dev_QMARK_ !== 'undefined')){
} else {
frontend.config.dev_QMARK_ = (function (){var or__5142__auto__ = frontend.config.dev_release_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return goog.DEBUG;
}
})();
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.publishing_QMARK_ !== 'undefined')){
} else {
frontend.config.publishing_QMARK_ = logseq.common.config.PUBLISHING;
}
frontend.config.ENABLE_SETTINGS_ACCOUNT_TAB = false;
frontend.config.COGNITO_CLIENT_ID = logseq.common.cognito_config.COGNITO_CLIENT_ID;
frontend.config.OAUTH_DOMAIN = logseq.common.cognito_config.OAUTH_DOMAIN;
frontend.config.API_DOMAIN = "api.logseq.com";
frontend.config.COGNITO_IDP = "https://cognito-idp.us-east-1.amazonaws.com/";
frontend.config.REGION = "us-east-1";
frontend.config.USER_POOL_ID = "us-east-1_dtagLnju8";
frontend.config.IDENTITY_POOL_ID = "us-east-1:d6d3b034-1631-402b-b838-b44513e93ee0";
frontend.config.default_publish_api_base = "https://logseq.io";
/**
 * @define {boolean}
 * @type {boolean}
 */
frontend.config.ENABLE_DB_SYNC_LOCAL = goog.define("frontend.config.ENABLE_DB_SYNC_LOCAL",false);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.db_sync_local_QMARK_ !== 'undefined')){
} else {
frontend.config.db_sync_local_QMARK_ = frontend.config.ENABLE_DB_SYNC_LOCAL;
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.default_db_sync_ws_url !== 'undefined')){
} else {
frontend.config.default_db_sync_ws_url = ((frontend.config.db_sync_local_QMARK_)?"ws://127.0.0.1:8787/sync/%s":"wss://api.logseq.io/sync/%s");
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.default_db_sync_http_base !== 'undefined')){
} else {
frontend.config.default_db_sync_http_base = ((frontend.config.db_sync_local_QMARK_)?"http://127.0.0.1:8787":"https://api.logseq.io");
}
/**
 * Read the user-configured custom sync server URL from localStorage.
 * Returns nil when not set or empty.
 */
frontend.config.get_custom_sync_server_url = (function frontend$config$get_custom_sync_server_url(){
if(frontend.util.node_test_QMARK_){
return null;
} else {
var v = localStorage.getItem("sync-server-url");
if(((typeof v === 'string') && ((!(clojure.string.blank_QMARK_(v)))))){
return v;
} else {
return null;
}
}
});
/**
 * Persist the custom sync server URL to localStorage. Pass nil or empty string to clear.
 */
frontend.config.set_custom_sync_server_url_BANG_ = (function frontend$config$set_custom_sync_server_url_BANG_(url){
if(frontend.util.node_test_QMARK_){
return null;
} else {
if((((url == null)) || (clojure.string.blank_QMARK_(url)))){
return localStorage.removeItem("sync-server-url");
} else {
return localStorage.setItem("sync-server-url",clojure.string.trim(url));
}
}
});
/**
 * Return true when `url` looks like a valid HTTP(S) base URL.
 */
frontend.config.valid_sync_server_url_QMARK_ = (function frontend$config$valid_sync_server_url_QMARK_(url){
var and__5140__auto__ = typeof url === 'string';
if(and__5140__auto__){
return cljs.core.re_find(/^https?:\/\//,url);
} else {
return and__5140__auto__;
}
});
/**
 * Derive a WebSocket sync URL from a custom HTTP base URL. Pure function.
 */
frontend.config.custom_url__GT_ws_url = (function frontend$config$custom_url__GT_ws_url(custom_url){
var scheme = ((clojure.string.starts_with_QMARK_(custom_url,"https"))?"wss":"ws");
var base = clojure.string.replace(clojure.string.replace(custom_url,/^https?:\/\//,""),/\/+$/,"");
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scheme)+"://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+"/sync/%s");
});
/**
 * Normalize a custom HTTP base URL by stripping trailing slashes. Pure function.
 */
frontend.config.custom_url__GT_http_base = (function frontend$config$custom_url__GT_http_base(custom_url){
return clojure.string.replace(custom_url,/\/+$/,"");
});
/**
 * Return the WebSocket sync URL. Uses custom server when configured, otherwise the default.
 */
frontend.config.db_sync_ws_url = (function frontend$config$db_sync_ws_url(){
var temp__5823__auto__ = frontend.config.get_custom_sync_server_url();
if(cljs.core.truth_(temp__5823__auto__)){
var custom = temp__5823__auto__;
return frontend.config.custom_url__GT_ws_url(custom);
} else {
return frontend.config.default_db_sync_ws_url;
}
});
/**
 * Return the HTTP base URL for sync. Uses custom server when configured, otherwise the default.
 */
frontend.config.db_sync_http_base = (function frontend$config$db_sync_http_base(){
var temp__5823__auto__ = frontend.config.get_custom_sync_server_url();
if(cljs.core.truth_(temp__5823__auto__)){
var custom = temp__5823__auto__;
return frontend.config.custom_url__GT_http_base(custom);
} else {
return frontend.config.default_db_sync_http_base;
}
});
/**
 * Read the user-configured custom publish server URL from localStorage.
 * Returns nil when not set or empty.
 */
frontend.config.get_custom_publish_server_url = (function frontend$config$get_custom_publish_server_url(){
if(frontend.util.node_test_QMARK_){
return null;
} else {
var v = localStorage.getItem("publish-server-url");
if(((typeof v === 'string') && ((!(clojure.string.blank_QMARK_(v)))))){
return v;
} else {
return null;
}
}
});
/**
 * Persist the custom publish server URL to localStorage. Pass nil or empty string to clear.
 */
frontend.config.set_custom_publish_server_url_BANG_ = (function frontend$config$set_custom_publish_server_url_BANG_(url){
if(frontend.util.node_test_QMARK_){
return null;
} else {
if((((url == null)) || (clojure.string.blank_QMARK_(url)))){
return localStorage.removeItem("publish-server-url");
} else {
return localStorage.setItem("publish-server-url",clojure.string.trim(url));
}
}
});
/**
 * Return true when `url` looks like a valid HTTP(S) base URL.
 */
frontend.config.valid_publish_server_url_QMARK_ = (function frontend$config$valid_publish_server_url_QMARK_(url){
var and__5140__auto__ = typeof url === 'string';
if(and__5140__auto__){
return cljs.core.re_find(/^https?:\/\//,url);
} else {
return and__5140__auto__;
}
});
/**
 * Normalize a custom publish base URL by stripping trailing slashes. Pure function.
 */
frontend.config.custom_url__GT_publish_api_base = (function frontend$config$custom_url__GT_publish_api_base(custom_url){
return clojure.string.replace(custom_url,/\/+$/,"");
});
/**
 * Return the base URL for the single-page publish service. Uses the user-configured
 * URL from localStorage when set, otherwise the default url above. Read on each call so URL changes take effect without a restart.
 */
frontend.config.publish_api_base = (function frontend$config$publish_api_base(){
var temp__5823__auto__ = frontend.config.get_custom_publish_server_url();
if(cljs.core.truth_(temp__5823__auto__)){
var custom = temp__5823__auto__;
return frontend.config.custom_url__GT_publish_api_base(custom);
} else {
return frontend.config.default_publish_api_base;
}
});
/**
 * @define {boolean}
 * @type {boolean}
 */
frontend.config.ENABLE_PLUGINS = goog.define("frontend.config.ENABLE_PLUGINS",true);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.feature_plugin_system_on_QMARK_ !== 'undefined')){
} else {
frontend.config.feature_plugin_system_on_QMARK_ = frontend.config.ENABLE_PLUGINS;
}
frontend.config.global_config_enabled_QMARK_ = frontend.util.electron_QMARK_;
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.lsp_enabled_QMARK_ !== 'undefined')){
} else {
frontend.config.lsp_enabled_QMARK_ = (function (){var and__5140__auto__ = frontend.util.plugin_platform_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (!(frontend.config.feature_plugin_system_on_QMARK_ === false));
if(and__5140__auto____$1){
return frontend.state.lsp_enabled_QMARK__or_theme();
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
}
frontend.config.plugin_config_enabled_QMARK_ = (function frontend$config$plugin_config_enabled_QMARK_(){
var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.config.global_config_enabled_QMARK_();
} else {
return and__5140__auto__;
}
});
frontend.config.app_name = logseq.common.config.app_name;
frontend.config.app_website = (cljs.core.truth_(frontend.config.dev_QMARK_)?"http://localhost:3001":(frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("https://%s.com",frontend.config.app_name) : frontend.util.format.call(null,"https://%s.com",frontend.config.app_name)));
frontend.config.markup_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"asciidoc","asciidoc",1736965296),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"rst","rst",-824162183),null,new cljs.core.Keyword(null,"adoc","adoc",-1288345346),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null);
frontend.config.doc_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"one","one",935007904),null,new cljs.core.Keyword(null,"pptx","pptx",1751889346),null,new cljs.core.Keyword(null,"ppt","ppt",976691076),null,new cljs.core.Keyword(null,"xlsx","xlsx",847128521),null,new cljs.core.Keyword(null,"pdf","pdf",1586765132),null,new cljs.core.Keyword(null,"epub","epub",-826123950),null,new cljs.core.Keyword(null,"xls","xls",732635219),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"docx","docx",-566057986),null], null), null);
frontend.config.image_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"cr2","cr2",681854944),null,new cljs.core.Keyword(null,"bmp","bmp",1866754050),null,new cljs.core.Keyword(null,"png","png",551930691),null,new cljs.core.Keyword(null,"gif","gif",1261828260),null,new cljs.core.Keyword(null,"heic","heic",-732723099),null,new cljs.core.Keyword(null,"webp","webp",1501869900),null,new cljs.core.Keyword(null,"avif","avif",125398964),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"jpeg","jpeg",-646816934),null,new cljs.core.Keyword(null,"jpg","jpg",-1835942949),null,new cljs.core.Keyword(null,"jxl","jxl",876495581),null], null), null);
frontend.config.audio_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"wav","wav",270623362),null,new cljs.core.Keyword(null,"aac","aac",-1635091669),null,new cljs.core.Keyword(null,"m4a","m4a",-91255727),null,new cljs.core.Keyword(null,"ogg","ogg",1456573938),null,new cljs.core.Keyword(null,"flac","flac",-535998251),null,new cljs.core.Keyword(null,"mpeg","mpeg",-1021588107),null,new cljs.core.Keyword(null,"wma","wma",1555140921),null,new cljs.core.Keyword(null,"mp3","mp3",-879934022),null], null), null);
frontend.config.video_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"webm","webm",-1239807004),null,new cljs.core.Keyword(null,"mp4","mp4",1038217575),null,new cljs.core.Keyword(null,"flv","flv",-1359021239),null,new cljs.core.Keyword(null,"mkv","mkv",-781662669),null,new cljs.core.Keyword(null,"mov","mov",605355799),null,new cljs.core.Keyword(null,"avi","avi",-1885261478),null], null), null);
frontend.config.media_formats = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(logseq.common.config.img_formats(),frontend.config.audio_formats,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.video_formats], 0));
/**
 * Triggering condition: Mobile phones
 * *** Warning!!! ***
 * For UX logic only! Don't use for FS logic
 * iPad / Android Pad doesn't trigger!
 * 
 * Same as config/mobile?
 */
frontend.config.mobile_QMARK_ = ((frontend.util.node_test_QMARK_)?null:(function (){var G__51872 = /Mobi/;
var G__51873 = navigator.userAgent;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__51872,G__51873) : frontend.util.safe_re_find.call(null,G__51872,G__51873));
})());
frontend.config.get_hr = (function frontend$config$get_hr(format){
var format__$1 = (function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format());
}
})();
var G__51879 = format__$1;
var G__51879__$1 = (((G__51879 instanceof cljs.core.Keyword))?G__51879.fqn:null);
switch (G__51879__$1) {
case "markdown":
return "---";

break;
default:
return "";

}
});
frontend.config.get_bold = (function frontend$config$get_bold(format){
var format__$1 = (function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format());
}
})();
var G__51889 = format__$1;
var G__51889__$1 = (((G__51889 instanceof cljs.core.Keyword))?G__51889.fqn:null);
switch (G__51889__$1) {
case "markdown":
return "**";

break;
default:
return "";

}
});
frontend.config.get_italic = (function frontend$config$get_italic(format){
var format__$1 = (function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format());
}
})();
var G__51896 = format__$1;
var G__51896__$1 = (((G__51896 instanceof cljs.core.Keyword))?G__51896.fqn:null);
switch (G__51896__$1) {
case "markdown":
return "*";

break;
default:
return "";

}
});
frontend.config.get_underline = (function frontend$config$get_underline(format){
var format__$1 = (function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format());
}
})();
var G__51898 = format__$1;
var G__51898__$1 = (((G__51898 instanceof cljs.core.Keyword))?G__51898.fqn:null);
switch (G__51898__$1) {
case "markdown":
return "";

break;
default:
return "";

}
});
frontend.config.get_strike_through = (function frontend$config$get_strike_through(format){
var format__$1 = (function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format());
}
})();
var G__51912 = format__$1;
var G__51912__$1 = (((G__51912 instanceof cljs.core.Keyword))?G__51912.fqn:null);
switch (G__51912__$1) {
case "markdown":
return "~~";

break;
default:
return "";

}
});
frontend.config.get_highlight = (function frontend$config$get_highlight(format){
var G__51926 = format;
var G__51926__$1 = (((G__51926 instanceof cljs.core.Keyword))?G__51926.fqn:null);
switch (G__51926__$1) {
case "markdown":
return "==";

break;
default:
return "";

}
});
frontend.config.get_code = (function frontend$config$get_code(format){
var format__$1 = (function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format());
}
})();
var G__51940 = format__$1;
var G__51940__$1 = (((G__51940 instanceof cljs.core.Keyword))?G__51940.fqn:null);
switch (G__51940__$1) {
case "markdown":
return "`";

break;
default:
return "";

}
});
frontend.config.get_empty_link_and_forward_pos = (function frontend$config$get_empty_link_and_forward_pos(format){
var G__51941 = format;
var G__51941__$1 = (((G__51941 instanceof cljs.core.Keyword))?G__51941.fqn:null);
switch (G__51941__$1) {
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[]()",(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.link_format = (function frontend$config$link_format(label,link){
if(cljs.core.truth_(cljs.core.not_empty(label))){
return (frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3("[%s](%s)",label,link) : frontend.util.format.call(null,"[%s](%s)",label,link));
} else {
return link;
}
});
frontend.config.with_default_link = (function frontend$config$with_default_link(format,link){
var G__51945 = format;
var G__51945__$1 = (((G__51945 instanceof cljs.core.Keyword))?G__51945.fqn:null);
switch (G__51945__$1) {
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("[](%s)",link) : frontend.util.format.call(null,"[](%s)",link)),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.with_label_link = (function frontend$config$with_label_link(format,label,link){
var G__51948 = format;
var G__51948__$1 = (((G__51948 instanceof cljs.core.Keyword))?G__51948.fqn:null);
switch (G__51948__$1) {
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3("[%s](%s)",label,link) : frontend.util.format.call(null,"[%s](%s)",label,link)),(((4) + cljs.core.count(link)) + cljs.core.count(label))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.with_default_label = (function frontend$config$with_default_label(format,label){
var G__51951 = format;
var G__51951__$1 = (((G__51951 instanceof cljs.core.Keyword))?G__51951.fqn:null);
switch (G__51951__$1) {
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("[%s]()",label) : frontend.util.format.call(null,"[%s]()",label)),((3) + cljs.core.count(label))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.demo_repo !== 'undefined')){
} else {
frontend.config.demo_repo = "Demo";
}
/**
 * Demo graph or nil graph?
 */
frontend.config.demo_graph_QMARK_ = (function frontend$config$demo_graph_QMARK_(var_args){
var G__51955 = arguments.length;
switch (G__51955) {
case 0:
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return (((repo_url == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo_url,frontend.config.demo_repo)) || (clojure.string.ends_with_QMARK_(repo_url,frontend.config.demo_repo)))));
}));

(frontend.config.demo_graph_QMARK_.cljs$lang$maxFixedArity = 1);

frontend.config.config_file = "config.edn";
frontend.config.custom_css_file = "custom.css";
frontend.config.export_css_file = "export.css";
frontend.config.custom_js_file = "custom.js";
frontend.config.config_default_content = "{:meta/version 1\n\n ;; Hide empty block properties\n ;; Default value: false\n ;; :ui/hide-empty-properties? false\n\n ;; Enable tooltip preview on hover.\n ;; Default value: true\n :ui/enable-tooltip? true\n\n ;; Display brackets [[]] around page references.\n ;; Default value: true\n ;; :ui/show-brackets? true\n\n ;; Display all lines of a block when referencing ((block)).\n ;; Default value: false\n :ui/show-full-blocks? false\n\n ;; Automatically expand block references when zooming in.\n ;; Default value: true\n :ui/auto-expand-block-refs? true\n\n ;; Disable accent marks when searching.\n ;; After changing this setting, rebuild the search index by pressing (^C ^S).\n ;; Default value: true\n :feature/enable-search-remove-accents? true\n\n ;; Enable flashcards.\n ;; Default value: true\n ;; :feature/enable-flashcards? true\n\n ;; Disable the journal's built-in 'Scheduled tasks and deadlines' query.\n ;; Default value: false\n ;; :feature/disable-scheduled-and-deadline-query? false\n\n ;; Specify the number of days displayed in the future for\n ;; the 'scheduled tasks and deadlines' query.\n ;; Example usage:\n ;; Display all scheduled and deadline blocks for the next 14 days:\n ;; :scheduled/future-days 14\n ;; Default value: 7\n ;; :scheduled/future-days 7\n\n ;; Specify the first day of the week.\n ;; Available options:\n ;;  - integer from 0 to 6 (Monday to Sunday)\n ;; Default value: 6 (Sunday)\n :start-of-week 6\n\n ;; Specify a custom CSS import.\n ;; This option takes precedence over the local `logseq/custom.css` file.\n ;; Example usage:\n ;; :custom-css-url \"@import url('https://cdn.jsdelivr.net/gh/dracula/logseq@master/custom.css');\"\n\n ;; Specify a custom JS import.\n ;; This option takes precedence over the local `logseq/custom.js` file.\n ;; Example usage:\n ;; :custom-js-url \"https://cdn.logseq.com/custom.js\"\n\n ;; Set bullet indentation when exporting\n ;; Available options:\n ;;  - `:eight-spaces` as eight spaces\n ;;  - `:four-spaces` as four spaces\n ;;  - `:two-spaces` as two spaces\n ;;  - `:tab` as a tab character (default)\n ;; :export/bullet-indentation :tab\n\n ;; Publish all pages within the Graph\n ;; Regardless of whether individual pages have been marked as public.\n ;; Default value: false\n ;; :publishing/all-pages-public? false\n\n ;; Define the default home page and sidebar status.\n ;; If unspecified, the journal page will be loaded on startup and the right sidebar will stay hidden.\n ;; The `:page` value represents the name of the page displayed at startup.\n ;; Available options for `:sidebar` are:\n ;; - \"Contents\" to display the Contents page in the right sidebar.\n ;; - A specific page name to display in the right sidebar.\n ;; - An array of multiple pages, e.g., [\"Contents\" \"Page A\" \"Page B\"].\n ;; If `:sidebar` remains unset, the right sidebar will stay hidden.\n ;; Examples:\n ;; 1. Set \"Changelog\" as the home page and display \"Contents\" in the right sidebar:\n ;; :default-home {:page \"Changelog\", :sidebar \"Contents\"}\n ;; 2. Set \"Jun 3rd, 2021\" as the home page without the right sidebar:\n ;; :default-home {:page \"Jun 3rd, 2021\"}\n ;; 3. Set \"home\" as the home page and display multiple pages in the right sidebar:\n ;; :default-home {:page \"home\", :sidebar [\"Page A\" \"Page B\"]}\n\n ;; Configure custom shortcuts.\n ;; Syntax:\n ;; 1. + indicates simultaneous key presses, e.g., `Ctrl+Shift+a`.\n ;; 2. A space between keys represents key chords, e.g., `t s` means\n ;;    pressing `t` followed by `s`.\n ;; 3. mod refers to `Ctrl` for Windows/Linux and `Command` for Mac.\n ;; 4. Use false to disable a specific shortcut.\n ;; 5. You can define multiple bindings for a single action, e.g., [\"ctrl+j\" \"down\"].\n ;; The full list of configurable shortcuts is available at:\n ;; https://github.com/logseq/logseq/blob/master/src/main/frontend/modules/shortcut/config.cljs\n ;; Example:\n ;; :shortcuts\n ;; {:editor/new-block       \"enter\"\n ;;  :editor/new-line        \"shift+enter\"\n ;;  :editor/insert-link     \"mod+shift+k\"\n ;;  :editor/highlight       false\n ;;  :ui/toggle-settings     \"t s\"\n ;;  :editor/up              [\"ctrl+k\" \"up\"]\n ;;  :editor/down            [\"ctrl+j\" \"down\"]\n ;;  :editor/left            [\"ctrl+h\" \"left\"]\n ;;  :editor/right           [\"ctrl+l\" \"right\"]}\n :shortcuts {}\n\n ;; Configure the behavior of pressing Enter in document mode.\n ;; if set to true, pressing Enter will create a new block.\n ;; Default value: false\n :shortcut/doc-mode-enter-for-new-block? false\n\n ;; Block content larger than `block/title-max-length` will not be searchable\n ;; or editable for performance.\n ;; Default value: 10000\n :block/title-max-length 10000\n\n ;; Display command documentation on hover.\n ;; Default value: true\n :ui/show-command-doc? true\n\n ;; Display empty bullet points.\n ;; Default value: false\n :ui/show-empty-bullets? false\n\n ;; Pre-defined :view function to use with advanced queries.\n :query/views\n {:pprint\n  (fn [r] [:pre.code (pprint r)])}\n\n ;; Advanced queries `:result-transform` function.\n ;; Transform the query result before displaying it.\n ;; Example usage for DB graphs:\n;;  :query/result-transforms\n;;  {:sort-by-priority\n;;   (fn [result] (sort-by (fn [h] (get h :logseq.property/priority \"Z\")) result))}\n\n;; Queries will be displayed at the bottom of today's journal page.\n;; Example usage:\n;; :default-queries\n;; {:journals []}\n\n ;; Add custom commands to the command palette\n ;; Example usage:\n ;; :commands\n ;; [\n ;;  [\"js\" \"Javascript\"]\n ;;  [\"md\" \"Markdown\"]\n ;;  ]\n :commands []\n\n ;; Enable collapsing blocks with titles but no children.\n ;; By default, only blocks with children can be collapsed.\n ;; Setting `:outliner/block-title-collapse-enabled?` to true allows collapsing\n ;; blocks with titles (multiple lines) and content. For example:\n ;; - block title\n ;;   block content\n ;; Default value: false\n :outliner/block-title-collapse-enabled? false\n\n ;; Macros replace texts and will make you more productive.\n ;; Example usage:\n ;; Change the :macros value below to:\n ;; {\"poem\" \"Rose is $1, violet's $2. Life's ordered: Org assists you.\"}\n ;; input \"{{poem red,blue}}\"\n ;; becomes\n ;; Rose is red, violet's blue. Life's ordered: Org assists you.\n :macros {}\n\n ;; Configure the default expansion level for linked references.\n ;; For example, consider the following block hierarchy:\n ;; - a [[page]] (level 1)\n ;;   - b        (level 2)\n ;;     - c      (level 3)\n ;;       - d    (level 4)\n ;;\n ;; With the default value of level 2, block b will be collapsed.\n ;; If the level's value is set to 3, block c will be collapsed.\n ;; Default value: 2\n :ref/default-open-blocks-level 2\n\n ;; Mobile photo upload configuration.\n ;; :mobile/photo\n ;; {:allow-editing? true\n ;;  :quality        80}\n\n ;; Mobile features options\n ;; Gestures\n ;; Example usage:\n ;; :mobile\n ;; {:gestures/disabled-in-block-with-tags [\"kanban\"]}\n\n ;; Extra CodeMirror options\n ;; See https://codemirror.net/5/doc/manual.html#config for possible options\n ;; Example usage:\n ;; :editor/extra-codemirror-options\n ;; {:lineWrapping  false  ; Default value: false\n ;;  :lineNumbers   true   ; Default value: true\n ;;  :readOnly      false} ; Default value: false\n\n ;; Enable logical outdenting\n ;; Default value: false\n ;; :editor/logical-outdenting? false\n\n ;; Prefer pasting the file when text and a file are in the clipboard.\n ;; Default value: false\n ;; :editor/preferred-pasting-file? false\n\n ;; Quick capture templates for receiving content from other apps.\n ;; Each template contains three elements {time}, {text} and {url}, which can be auto-expanded\n ;; by receiving content from other apps. Note: the {} cannot be omitted.\n ;; - {time}: capture time\n ;; - {date}: capture date using current date format, use `[[{date}]]` to get a page reference\n ;; - {text}: text that users selected before sharing.\n ;; - {url}: URL or assets path for media files stored in Logseq.\n ;; You can also reorder them or use only one or two of them in the template.\n ;; You can also insert or format any text in the template, as shown in the following examples.\n ;; :quick-capture-templates\n ;; {:text \"[[quick capture]] **{time}**: {text} from {url}\"\n ;;  :media \"[[quick capture]] **{time}**: {url}\"}\n\n ;; Quick capture options.\n ;; - insert-today?   Insert the capture at the end of today's journal page (boolean).\n ;; - redirect-page?  Redirect to the quick capture page after capturing (boolean).\n ;; - default-page    The default page to capture to if insert-today? is false (string).\n ;; - prettify-url?   Whether urls to YouTube or X should be wrapped with {{video ...}} or {{twitter ...}}\n ;; :quick-capture-options\n ;; {:insert-today? false           ;; Default value: true\n ;;  :redirect-page? false          ;; Default value: false\n ;;  :default-page \"quick capture\"  ;; Default page: \"quick capture\"\n ;;  :prettify-url? true}           ;; Default value: true\n\n }\n";
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.db_version_prefix !== 'undefined')){
} else {
frontend.config.db_version_prefix = logseq.common.config.db_version_prefix;
}
frontend.config.db_graph_name = (function frontend$config$db_graph_name(repo_with_prefix){
return logseq.common.config.strip_leading_db_version_prefix(repo_with_prefix);
});
frontend.config.db_based_graph_QMARK_ = (function frontend$config$db_based_graph_QMARK_(var_args){
var G__52068 = arguments.length;
switch (G__52068) {
case 0:
return frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.boolean$((function (){var and__5140__auto__ = typeof s === 'string';
if(and__5140__auto__){
return logseq.db.sqlite.util.db_based_graph_QMARK_(s);
} else {
return and__5140__auto__;
}
})());
}));

(frontend.config.db_based_graph_QMARK_.cljs$lang$maxFixedArity = 1);

frontend.config.get_local_asset_absolute_path = (function frontend$config$get_local_asset_absolute_path(s){
return (""+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(s,/^[.\/]*/,"")));
});
/**
 * Resolved DB graphs directory from Electron main (`:system/info :graphs-dir`).
 *   Falls back to `~/logseq/graphs` when the renderer has not received system info.
 */
frontend.config.local_graphs_dir = (function frontend$config$local_graphs_dir(){
var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system","info","system/info",-1203399931),new cljs.core.Keyword(null,"graphs-dir","graphs-dir",2084457744)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system","info","system/info",-1203399931),new cljs.core.Keyword(null,"home-dir","home-dir",1408715416)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["logseq","graphs"], 0));
}
});
frontend.config.get_local_dir = (function frontend$config$get_local_dir(repo){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.local_graphs_dir(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.common.graph_dir.repo__GT_encoded_graph_dir_name(repo)], 0));
});
frontend.config.get_electron_backup_dir = (function frontend$config$get_electron_backup_dir(repo){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_local_dir(repo),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["backup"], 0));
});
frontend.config.get_repo_dir = (function frontend$config$get_repo_dir(repo_url){
if(cljs.core.truth_(repo_url)){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.config.get_local_dir(repo_url);
} else {
return (""+"memory:///"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_graph_name(repo_url)));
}
} else {
return null;
}
});
frontend.config.get_repo_config_path = (function frontend$config$get_repo_config_path(){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.app_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.config_file], 0));
});
frontend.config.get_custom_css_path = (function frontend$config$get_custom_css_path(var_args){
var G__52104 = arguments.length;
switch (G__52104) {
case 0:
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(repo)){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.app_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.custom_css_file], 0));
} else {
var temp__5825__auto__ = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5825__auto__)){
var repo_dir = temp__5825__auto__;
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name,frontend.config.custom_css_file], 0));
} else {
return null;
}
}
}));

(frontend.config.get_custom_css_path.cljs$lang$maxFixedArity = 1);

/**
 * Absolute disk path for Electron local HTML export.
 *   Kept on disk (not in the DB) because publishing reads repo-dir/logseq/export.css.
 */
frontend.config.get_export_css_path = (function frontend$config$get_export_css_path(var_args){
var G__52114 = arguments.length;
switch (G__52114) {
case 0:
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
var temp__5825__auto__ = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5825__auto__)){
var repo_dir = temp__5825__auto__;
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name,frontend.config.export_css_file], 0));
} else {
return null;
}
}));

(frontend.config.get_export_css_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_repo_assets_root = (function frontend$config$get_repo_assets_root(repo){
var temp__5825__auto__ = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5825__auto__)){
var repo_dir = temp__5825__auto__;
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["assets"], 0));
} else {
return null;
}
});
frontend.config.get_current_repo_assets_root = (function frontend$config$get_current_repo_assets_root(){
return frontend.config.get_repo_assets_root(frontend.state.get_current_repo());
});
frontend.config.get_custom_js_path = (function frontend$config$get_custom_js_path(var_args){
var G__52119 = arguments.length;
switch (G__52119) {
case 0:
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(repo)){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.app_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.custom_js_file], 0));
} else {
var temp__5825__auto__ = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5825__auto__)){
var repo_dir = temp__5825__auto__;
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name,frontend.config.custom_js_file], 0));
} else {
return null;
}
}
}));

(frontend.config.get_custom_js_path.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=frontend.config.js.map
