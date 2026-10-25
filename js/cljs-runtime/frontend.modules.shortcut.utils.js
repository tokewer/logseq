goog.provide('frontend.modules.shortcut.utils');
frontend.modules.shortcut.utils.modifier_order = new cljs.core.PersistentArrayMap(null, 4, ["ctrl",(0),"alt",(1),"meta",(2),"shift",(3)], null);
frontend.modules.shortcut.utils.modifier_aliases = new cljs.core.PersistentArrayMap(null, 6, ["mod",(cljs.core.truth_(frontend.util.mac_QMARK_)?"meta":"ctrl"),"cmd","meta","command","meta","opt","alt","option","alt","\u2325","alt"], null);
frontend.modules.shortcut.utils.modifier_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["shift",null,"alt",null,"meta",null,"ctrl",null], null), null);
/**
 * Normalizes a binding string to canonical form:
 * - Resolves modifier aliases (mod/cmd/command → meta, opt/option → alt)
 * - Sorts modifiers into ctrl+alt+meta+shift order
 * - Lowercases everything
 * - Handles chord sequences (space-separated steps)
 */
frontend.modules.shortcut.utils.canonicalize_binding = (function frontend$modules$shortcut$utils$canonicalize_binding(binding){
if(typeof binding === 'string'){
var canonicalize_step = (function (step){
var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55990_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.utils.modifier_aliases,p1__55990_SHARP_,p1__55990_SHARP_);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(step,/\+/));
var mods = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.utils.modifier_set,parts);
var keys = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.utils.modifier_set,parts);
var sorted_mods = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__55991_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.utils.modifier_order,p1__55991_SHARP_,(99));
}),mods);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sorted_mods,keys));
});
var steps = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(clojure.string.trim(binding)),/ /);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(canonicalize_step,steps));
} else {
return null;
}
});
frontend.modules.shortcut.utils.safe_parse_string_binding = (function frontend$modules$shortcut$utils$safe_parse_string_binding(binding){
try{return goog.ui.KeyboardShortcutHandler.parseStringShortcut(binding);
}catch (e55995){if((e55995 instanceof Error)){
var e = e55995;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.utils",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","parse-key-error","shortcut/parse-key-error",-1287359687),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"binding","binding",539932593),binding], null),new cljs.core.Keyword(null,"line","line",212345235),44], null)),null);
} else {
}

return binding;
} else {
throw e55995;

}
}});
frontend.modules.shortcut.utils.mod_key = (function frontend$modules$shortcut$utils$mod_key(binding){
return clojure.string.replace(binding,/mod/i,(cljs.core.truth_(frontend.util.mac_QMARK_)?"meta":"ctrl"));
});
frontend.modules.shortcut.utils.undecorate_binding = (function frontend$modules$shortcut$utils$undecorate_binding(binding){
if(typeof binding === 'string'){
var keynames = cljs.core.PersistentHashMap.fromArrays(["]","\u2193","'",")","=","\u2192","~","\u2190","-","(","\u21E7","\u2325","\u2191",";","["],["close-square-bracket","down","single-quote","shift+0","equals","right","shift+`","left","dash","shift+9","shift","alt","up","semicolon","open-square-bracket"]);
return clojure.string.lower_case(frontend.modules.shortcut.utils.mod_key(clojure.string.replace(clojure.string.replace(binding,/[;=-\[\]'\(\)\~\→\←\⇧⌥]/,(function (p1__56000_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keynames,p1__56000_SHARP_);
})),/\s+/," ")));
} else {
return null;
}
});
frontend.modules.shortcut.utils.decorate_namespace = (function frontend$modules$shortcut$utils$decorate_namespace(k){
var n = cljs.core.name(k);
var ns = cljs.core.namespace(k);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((""+"command."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)),n);
});
frontend.modules.shortcut.utils.decorate_binding = (function frontend$modules$shortcut$utils$decorate_binding(binding){
if(((typeof binding === 'string') || (cljs.core.sequential_QMARK_(binding)))){
return clojure.string.lower_case(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(((typeof binding === 'string')?binding:clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",binding)),"mod",(cljs.core.truth_(frontend.util.mac_QMARK_)?"\u2318":"ctrl")),"meta",(cljs.core.truth_(frontend.util.mac_QMARK_)?"\u2318":"\u229E win")),"alt",(cljs.core.truth_(frontend.util.mac_QMARK_)?"\u2325":"alt")),"shift+/","?"),"left","\u2190"),"right","\u2192"),"up","\u2191"),"down","\u2193"),"shift","\u21E7"),"open-square-bracket","["),"close-square-bracket","]"),"equals","="),"semicolon",";"));
} else {
return null;
}
});

//# sourceMappingURL=frontend.modules.shortcut.utils.js.map
