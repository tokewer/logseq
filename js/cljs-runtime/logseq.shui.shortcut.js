goog.provide('logseq.shui.shortcut');
logseq.shui.shortcut.mac_QMARK_ = goog.userAgent.MAC;
/**
 * Maps logical keys to display keys, with platform-specific handling.
 * Supports :mod for platform-agnostic modifier key.
 * Automatically uppercases single letter keys (a-z) while preserving
 * multi-character keys like Ctrl, Backspace, Delete, Opt, etc.
 */
logseq.shui.shortcut.print_shortcut_key = (function logseq$shui$shortcut$print_shortcut_key(key){
var result = ((cljs.core.coll_QMARK_(key))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",key):(function (){var G__50556 = ((typeof key === 'string')?clojure.string.lower_case(key):key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__50556)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2193",G__50556)){
return "\u2193";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("space",G__50556)){
return "Space";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tab",G__50556)){
return "Tab";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2318",G__50556)){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "\u2318";
} else {
return "Ctrl";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("right",G__50556)){
return "\u2192";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("up",G__50556)){
return "\u2191";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("comma",G__50556)){
return ",";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("opt",G__50556)){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "\u2325";
} else {
return "Alt";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("command",G__50556)){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "\u2318";
} else {
return "Ctrl";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2192",G__50556)){
return "\u2192";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2303",G__50556)){
return "Ctrl";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u23CE",G__50556)){
return "\u23CE";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("delete",G__50556)){
return "Delete";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2190",G__50556)){
return "\u2190";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("return",G__50556)){
return "\u23CE";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("grave-accent",G__50556)){
return "`";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("option",G__50556)){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "\u2325";
} else {
return "Alt";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("single-quote",G__50556)){
return "'";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backspace",G__50556)){
return "\u232B";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u21E7",G__50556)){
return "\u21E7";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("caps-lock",G__50556)){
return "\u21EA";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("capslock",G__50556)){
return "\u21EA";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("escape",G__50556)){
return "Esc";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("page-up",G__50556)){
return "PgUp";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("open-square-bracket",G__50556)){
return "[";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("semicolon",G__50556)){
return ";";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__50556)){
return "\u21E7";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dash",G__50556)){
return "-";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__50556)){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "\u2325";
} else {
return "Alt";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2325",G__50556)){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "\u2325";
} else {
return "Alt";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("control",G__50556)){
return "Ctrl";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("slash",G__50556)){
return "/";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("mod",G__50556)){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "\u2318";
} else {
return "Ctrl";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cmd",G__50556)){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "\u2318";
} else {
return "Ctrl";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("down",G__50556)){
return "\u2193";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2191",G__50556)){
return "\u2191";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("meta",G__50556)){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "\u2318";
} else {
return "\u229E";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("page-down",G__50556)){
return "PgDn";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__50556)){
return "Ctrl";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("period",G__50556)){
return ".";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backslash",G__50556)){
return "\\";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("close-square-bracket",G__50556)){
return "]";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",G__50556)){
return "Space";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("enter",G__50556)){
return "\u23CE";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("equals",G__50556)){
return "=";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("esc",G__50556)){
return "Esc";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("left",G__50556)){
return "\u2190";
} else {
return cljs.core.name(key);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})());
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((result).length),(1));
if(and__5140__auto__){
return cljs.core.re_matches(/[a-z]/,result);
} else {
return and__5140__auto__;
}
})())){
return clojure.string.upper_case(result);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((result).length),(1))){
return result;
} else {
return clojure.string.capitalize(result);

}
}
});
/**
 * Recursively flattens nested collections, preserving strings.
 */
logseq.shui.shortcut.flatten_keys = (function logseq$shui$shortcut$flatten_keys(coll){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(((cljs.core.coll_QMARK_(x)) && ((!(typeof x === 'string'))))){
return (logseq.shui.shortcut.flatten_keys.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.shortcut.flatten_keys.cljs$core$IFn$_invoke$arity$1(x) : logseq.shui.shortcut.flatten_keys.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0));
});
/**
 * Normalizes a shortcut binding to a string format for data attributes.
 * Examples: 'cmd+k', 'shift+cmd+k', 'cmd up'
 * Handles 'mod' -> 'meta' on Mac, 'ctrl' on Windows/Linux for consistency with shortcut system.
 */
logseq.shui.shortcut.normalize_binding = (function logseq$shui$shortcut$normalize_binding(binding){
var normalize_key = (function (k){
if(typeof k === 'string'){
var lowered = clojure.string.lower_case(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lowered,"mod")){
if(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)){
return "meta";
} else {
return "ctrl";
}
} else {
return lowered;
}
} else {
if((k instanceof cljs.core.Keyword)){
return cljs.core.name(k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.name(k);
} else {
if(typeof k === 'number'){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));

}
}
}
}
});
if(typeof binding === 'string'){
var trimmed = clojure.string.trim(binding);
var normalized = clojure.string.lower_case(trimmed);
return clojure.string.replace(clojure.string.replace(clojure.string.replace(normalized,/\bmod\b/,(cljs.core.truth_(logseq.shui.shortcut.mac_QMARK_)?"meta":"ctrl")),/\b(?:cmd|command)\b/,"meta"),/(?:\bopt\b|\boption\b|⌥)/,"alt");
} else {
if(cljs.core.coll_QMARK_(binding)){
if(((cljs.core.coll_QMARK_(cljs.core.first(binding))) && ((((cljs.core.count(binding) > (1))) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,binding)))))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (group){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.map.cljs$core$IFn$_invoke$arity$2(normalize_key,logseq.shui.shortcut.flatten_keys(group)));
}),binding));
} else {
var keys = logseq.shui.shortcut.flatten_keys(binding);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.map.cljs$core$IFn$_invoke$arity$2(normalize_key,keys));
}
} else {
if((binding instanceof cljs.core.Keyword)){
return cljs.core.name(binding);
} else {
if((binding instanceof cljs.core.Symbol)){
return cljs.core.name(binding);
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(binding));

}
}
}
}
});
/**
 * Automatically detects style from shortcut format.
 * Returns :combo, :separate, or :compact
 */
logseq.shui.shortcut.detect_style = (function logseq$shui$shortcut$detect_style(shortcut){
if(typeof shortcut === 'string'){
if(clojure.string.includes_QMARK_(shortcut,"+")){
return new cljs.core.Keyword(null,"combo","combo",-521653490);
} else {
return new cljs.core.Keyword(null,"separate","separate",-1624828409);
}
} else {
if(cljs.core.coll_QMARK_(shortcut)){
var first_item = cljs.core.first(shortcut);
if(cljs.core.coll_QMARK_(first_item)){
return new cljs.core.Keyword(null,"combo","combo",-521653490);
} else {
if(clojure.string.includes_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_item)),"+")){
return new cljs.core.Keyword(null,"combo","combo",-521653490);
} else {
return new cljs.core.Keyword(null,"separate","separate",-1624828409);

}
}
} else {
return new cljs.core.Keyword(null,"separate","separate",-1624828409);

}
}
});
/**
 * Parses shortcut string into structured format.
 * Handles ' | ' separator for multiple shortcuts.
 */
logseq.shui.shortcut.parse_shortcuts = (function logseq$shui$shortcut$parse_shortcuts(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50561_SHARP_){
if(clojure.string.includes_QMARK_(p1__50561_SHARP_,"+")){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__50561_SHARP_,/\+/);
} else {
return p1__50561_SHARP_;
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(x,/ /));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ \| /));
});
logseq.shui.shortcut.press_animation_ms = (160);
logseq.shui.shortcut.row_shimmer_ms = (750);
/**
 * Add or remove the row highlight class on the closest shortcut row ancestor.
 * On first trigger, forces a reflow to start the CSS animation.
 * On repeated triggers, the class stays applied (no reflow) and the
 * removal timer is reset so it fires after the last trigger.
 */
logseq.shui.shortcut.highlight_row_BANG_ = (function logseq$shui$shortcut$highlight_row_BANG_(container,add_QMARK_){
var temp__5825__auto__ = (function (){var or__5142__auto__ = container.closest(".shui-shortcut-row, .shortcut-row");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return container.parentElement;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var row = temp__5825__auto__;
if(cljs.core.truth_(add_QMARK_)){
var already_QMARK_ = row.classList.contains("shui-shortcut-row--pressed");
var temp__5825__auto___50861__$1 = row.__sweepTimer;
if(cljs.core.truth_(temp__5825__auto___50861__$1)){
var t_50862 = temp__5825__auto___50861__$1;
clearTimeout(t_50862);

(row.__sweepTimer = null);
} else {
}

if(cljs.core.truth_(already_QMARK_)){
} else {
row.classList.add("shui-shortcut-row--pressed");
}

return (row.__sweepTimer = setTimeout((function (){
row.classList.remove("shui-shortcut-row--pressed");

return (row.__sweepTimer = null);
}),logseq.shui.shortcut.row_shimmer_ms));
} else {
var temp__5825__auto___50863__$1 = row.__sweepTimer;
if(cljs.core.truth_(temp__5825__auto___50863__$1)){
var t_50864 = temp__5825__auto___50863__$1;
clearTimeout(t_50864);

(row.__sweepTimer = null);
} else {
}

return row.classList.remove("shui-shortcut-row--pressed");
}
} else {
return null;
}
});
/**
 * Add pressed class, optionally highlight row, then auto-reset after animation.
 * Key badge uses a simple clearTimeout+reset pattern to avoid stale removals.
 */
logseq.shui.shortcut.animate_element_BANG_ = (function logseq$shui$shortcut$animate_element_BANG_(el,container,highlight_row_QMARK_){
el.classList.add("shui-shortcut-key-pressed");

if(cljs.core.truth_(highlight_row_QMARK_)){
logseq.shui.shortcut.highlight_row_BANG_(container,true);
} else {
}

var temp__5825__auto___50865 = el.__badgeTimer;
if(cljs.core.truth_(temp__5825__auto___50865)){
var t_50866 = temp__5825__auto___50865;
clearTimeout(t_50866);
} else {
}

return (el.__badgeTimer = setTimeout((function (){
el.classList.remove("shui-shortcut-key-pressed");

return (el.__badgeTimer = null);
}),logseq.shui.shortcut.press_animation_ms));
});
/**
 * Central helper to trigger key press animation.
 * For combo keys, animates the container (the whole keycap depresses).
 * For separate keys, animates individual kbd elements.
 * Optionally highlights parent row.
 * 
 * Args:
 * - binding: normalized shortcut binding string (e.g., "cmd+k")
 * - highlight-row?: if true, also highlights parent row (default: false)
 */
logseq.shui.shortcut.shortcut_press_BANG_ = (function logseq$shui$shortcut$shortcut_press_BANG_(var_args){
var G__50563 = arguments.length;
switch (G__50563) {
case 1:
return logseq.shui.shortcut.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.shui.shortcut.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.shortcut.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (binding){
return logseq.shui.shortcut.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2(binding,false);
}));

(logseq.shui.shortcut.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (binding,highlight_row_QMARK_){
var normalized = logseq.shui.shortcut.normalize_binding(binding);
var selector = (""+"[data-shortcut-binding=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(normalized)+"\"]");
var containers = document.querySelectorAll(selector);
var seq__50564 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(containers));
var chunk__50565 = null;
var count__50566 = (0);
var i__50567 = (0);
while(true){
if((i__50567 < count__50566)){
var container = chunk__50565.cljs$core$IIndexed$_nth$arity$2(null,i__50567);
if(cljs.core.truth_(container.classList.contains("shui-shortcut-combo"))){
logseq.shui.shortcut.animate_element_BANG_(container,container,highlight_row_QMARK_);
} else {
var keys_50868 = container.querySelectorAll("kbd.shui-shortcut-key");
if((keys_50868.length > (0))){
var seq__50578_50869 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(keys_50868));
var chunk__50579_50870 = null;
var count__50580_50871 = (0);
var i__50581_50872 = (0);
while(true){
if((i__50581_50872 < count__50580_50871)){
var key_el_50873 = chunk__50579_50870.cljs$core$IIndexed$_nth$arity$2(null,i__50581_50872);
logseq.shui.shortcut.animate_element_BANG_(key_el_50873,container,highlight_row_QMARK_);


var G__50874 = seq__50578_50869;
var G__50875 = chunk__50579_50870;
var G__50876 = count__50580_50871;
var G__50877 = (i__50581_50872 + (1));
seq__50578_50869 = G__50874;
chunk__50579_50870 = G__50875;
count__50580_50871 = G__50876;
i__50581_50872 = G__50877;
continue;
} else {
var temp__5825__auto___50878 = cljs.core.seq(seq__50578_50869);
if(temp__5825__auto___50878){
var seq__50578_50879__$1 = temp__5825__auto___50878;
if(cljs.core.chunked_seq_QMARK_(seq__50578_50879__$1)){
var c__5673__auto___50880 = cljs.core.chunk_first(seq__50578_50879__$1);
var G__50881 = cljs.core.chunk_rest(seq__50578_50879__$1);
var G__50882 = c__5673__auto___50880;
var G__50883 = cljs.core.count(c__5673__auto___50880);
var G__50884 = (0);
seq__50578_50869 = G__50881;
chunk__50579_50870 = G__50882;
count__50580_50871 = G__50883;
i__50581_50872 = G__50884;
continue;
} else {
var key_el_50885 = cljs.core.first(seq__50578_50879__$1);
logseq.shui.shortcut.animate_element_BANG_(key_el_50885,container,highlight_row_QMARK_);


var G__50886 = cljs.core.next(seq__50578_50879__$1);
var G__50887 = null;
var G__50888 = (0);
var G__50889 = (0);
seq__50578_50869 = G__50886;
chunk__50579_50870 = G__50887;
count__50580_50871 = G__50888;
i__50581_50872 = G__50889;
continue;
}
} else {
}
}
break;
}
} else {
logseq.shui.shortcut.animate_element_BANG_(container,container,highlight_row_QMARK_);
}
}


var G__50890 = seq__50564;
var G__50891 = chunk__50565;
var G__50892 = count__50566;
var G__50893 = (i__50567 + (1));
seq__50564 = G__50890;
chunk__50565 = G__50891;
count__50566 = G__50892;
i__50567 = G__50893;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__50564);
if(temp__5825__auto__){
var seq__50564__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50564__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__50564__$1);
var G__50894 = cljs.core.chunk_rest(seq__50564__$1);
var G__50895 = c__5673__auto__;
var G__50896 = cljs.core.count(c__5673__auto__);
var G__50897 = (0);
seq__50564 = G__50894;
chunk__50565 = G__50895;
count__50566 = G__50896;
i__50567 = G__50897;
continue;
} else {
var container = cljs.core.first(seq__50564__$1);
if(cljs.core.truth_(container.classList.contains("shui-shortcut-combo"))){
logseq.shui.shortcut.animate_element_BANG_(container,container,highlight_row_QMARK_);
} else {
var keys_50898 = container.querySelectorAll("kbd.shui-shortcut-key");
if((keys_50898.length > (0))){
var seq__50582_50899 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(keys_50898));
var chunk__50583_50900 = null;
var count__50584_50901 = (0);
var i__50585_50902 = (0);
while(true){
if((i__50585_50902 < count__50584_50901)){
var key_el_50903 = chunk__50583_50900.cljs$core$IIndexed$_nth$arity$2(null,i__50585_50902);
logseq.shui.shortcut.animate_element_BANG_(key_el_50903,container,highlight_row_QMARK_);


var G__50904 = seq__50582_50899;
var G__50905 = chunk__50583_50900;
var G__50906 = count__50584_50901;
var G__50907 = (i__50585_50902 + (1));
seq__50582_50899 = G__50904;
chunk__50583_50900 = G__50905;
count__50584_50901 = G__50906;
i__50585_50902 = G__50907;
continue;
} else {
var temp__5825__auto___50908__$1 = cljs.core.seq(seq__50582_50899);
if(temp__5825__auto___50908__$1){
var seq__50582_50909__$1 = temp__5825__auto___50908__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50582_50909__$1)){
var c__5673__auto___50910 = cljs.core.chunk_first(seq__50582_50909__$1);
var G__50911 = cljs.core.chunk_rest(seq__50582_50909__$1);
var G__50912 = c__5673__auto___50910;
var G__50913 = cljs.core.count(c__5673__auto___50910);
var G__50914 = (0);
seq__50582_50899 = G__50911;
chunk__50583_50900 = G__50912;
count__50584_50901 = G__50913;
i__50585_50902 = G__50914;
continue;
} else {
var key_el_50915 = cljs.core.first(seq__50582_50909__$1);
logseq.shui.shortcut.animate_element_BANG_(key_el_50915,container,highlight_row_QMARK_);


var G__50916 = cljs.core.next(seq__50582_50909__$1);
var G__50917 = null;
var G__50918 = (0);
var G__50919 = (0);
seq__50582_50899 = G__50916;
chunk__50583_50900 = G__50917;
count__50584_50901 = G__50918;
i__50585_50902 = G__50919;
continue;
}
} else {
}
}
break;
}
} else {
logseq.shui.shortcut.animate_element_BANG_(container,container,highlight_row_QMARK_);
}
}


var G__50920 = cljs.core.next(seq__50564__$1);
var G__50921 = null;
var G__50922 = (0);
var G__50923 = (0);
seq__50564 = G__50920;
chunk__50565 = G__50921;
count__50566 = G__50922;
i__50567 = G__50923;
continue;
}
} else {
return null;
}
}
break;
}
}));

(logseq.shui.shortcut.shortcut_press_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Renders combo keys (simultaneous key combinations) with separator.
 */
logseq.shui.shortcut.combo_keys = (function (){var render_fn__47251__auto__ = (function logseq$shui$shortcut$combo_keys(keys,binding,p__50590){
var map__50592 = p__50590;
var map__50592__$1 = cljs.core.__destructure_map(map__50592);
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50592__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50592__$1,new cljs.core.Keyword(null,"aria-hidden?","aria-hidden?",592108098));
var glow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50592__$1,new cljs.core.Keyword(null,"glow?","glow?",565751582));
var key_elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.shui.shortcut.print_shortcut_key,keys);
var normalized_binding = logseq.shui.shortcut.normalize_binding(binding);
var container_class = (""+"shui-shortcut-combo"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(glow_QMARK_)?" shui-shortcut-glow":null)));
var container_attrs = (function (){var G__50594 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),container_class,new cljs.core.Keyword(null,"data-shortcut-binding","data-shortcut-binding",-271976730),normalized_binding,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null);
var G__50594__$1 = (cljs.core.truth_(aria_label)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50594,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),aria_label):G__50594);
if(cljs.core.truth_(aria_hidden_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50594__$1,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true");
} else {
return G__50594__$1;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),container_attrs,(function (){var iter__5628__auto__ = (function logseq$shui$shortcut$combo_keys_$_iter__50596(s__50597){
return (new cljs.core.LazySeq(null,(function (){
var s__50597__$1 = s__50597;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50597__$1);
if(temp__5825__auto__){
var s__50597__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50597__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50597__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50599 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50598 = (0);
while(true){
if((i__50598 < size__5627__auto__)){
var vec__50601 = cljs.core._nth(c__5626__auto__,i__50598);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50601,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50601,(1),null);
cljs.core.chunk_append(b__50599,(new cljs.core.List(null,((((0) < index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shui-shortcut-separator","span.shui-shortcut-separator",-1163381263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"sep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))], null)], null):null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd.shui-shortcut-key","kbd.shui-shortcut-key",-1340706727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"combo-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),(cljs.core.truth_(aria_label)?"true":"false")], null),key_text], null),null,(1),null)),(2),null)));

var G__50924 = (i__50598 + (1));
i__50598 = G__50924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50599),logseq$shui$shortcut$combo_keys_$_iter__50596(cljs.core.chunk_rest(s__50597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50599),null);
}
} else {
var vec__50609 = cljs.core.first(s__50597__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50609,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50609,(1),null);
return cljs.core.cons((new cljs.core.List(null,((((0) < index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shui-shortcut-separator","span.shui-shortcut-separator",-1163381263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"sep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))], null)], null):null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd.shui-shortcut-key","kbd.shui-shortcut-key",-1340706727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"combo-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),(cljs.core.truth_(aria_label)?"true":"false")], null),key_text], null),null,(1),null)),(2),null)),logseq$shui$shortcut$combo_keys_$_iter__50596(cljs.core.rest(s__50597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,key_elements));
})()], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$shortcut$combo_keys__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50618 = cljs.core.first(args__47253__auto__);
var G__50619 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50618,G__50619) : io.factorhouse.hsx.core.obj_get.call(null,G__50618,G__50619));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"combo-keys","combo-keys",-536429081,null),args__47253__auto__),logseq$shui$shortcut$combo_keys,args__47253__auto__,null);
}
};
var logseq$shui$shortcut$combo_keys = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50925__i = 0, G__50925__a = new Array(arguments.length -  0);
while (G__50925__i < G__50925__a.length) {G__50925__a[G__50925__i] = arguments[G__50925__i + 0]; ++G__50925__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50925__a,0,null);
} 
return logseq$shui$shortcut$combo_keys__delegate.call(this,args__47253__auto__);};
logseq$shui$shortcut$combo_keys.cljs$lang$maxFixedArity = 0;
logseq$shui$shortcut$combo_keys.cljs$lang$applyTo = (function (arglist__50926){
var args__47253__auto__ = cljs.core.seq(arglist__50926);
return logseq$shui$shortcut$combo_keys__delegate(args__47253__auto__);
});
logseq$shui$shortcut$combo_keys.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$shortcut$combo_keys__delegate;
return logseq$shui$shortcut$combo_keys;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50626 = comp__47252__auto__;
var G__50627 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50626,G__50627) : io.factorhouse.hsx.core.react_memo.call(null,G__50626,G__50627));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"combo-keys");

return comp__47252__auto__;
})();
/**
 * Renders separate keys (sequential key presses) with 4px gap.
 */
logseq.shui.shortcut.separate_keys = (function (){var render_fn__47251__auto__ = (function logseq$shui$shortcut$separate_keys(keys,binding,p__50635){
var map__50636 = p__50635;
var map__50636__$1 = cljs.core.__destructure_map(map__50636);
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50636__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50636__$1,new cljs.core.Keyword(null,"aria-hidden?","aria-hidden?",592108098));
var glow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50636__$1,new cljs.core.Keyword(null,"glow?","glow?",565751582));
var key_elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.shui.shortcut.print_shortcut_key,keys);
var normalized_binding = logseq.shui.shortcut.normalize_binding(binding);
var container_class = (""+"shui-shortcut-separate"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(glow_QMARK_)?" shui-shortcut-glow":null)));
var container_attrs = (function (){var G__50639 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),container_class,new cljs.core.Keyword(null,"data-shortcut-binding","data-shortcut-binding",-271976730),normalized_binding,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null)], null);
var G__50639__$1 = (cljs.core.truth_(aria_label)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50639,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),aria_label):G__50639);
if(cljs.core.truth_(aria_hidden_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50639__$1,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true");
} else {
return G__50639__$1;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),container_attrs,(function (){var iter__5628__auto__ = (function logseq$shui$shortcut$separate_keys_$_iter__50641(s__50642){
return (new cljs.core.LazySeq(null,(function (){
var s__50642__$1 = s__50642;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50642__$1);
if(temp__5825__auto__){
var s__50642__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50642__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50642__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50644 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50643 = (0);
while(true){
if((i__50643 < size__5627__auto__)){
var vec__50658 = cljs.core._nth(c__5626__auto__,i__50643);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50658,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50658,(1),null);
cljs.core.chunk_append(b__50644,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd.shui-shortcut-key","kbd.shui-shortcut-key",-1340706727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"separate-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),(cljs.core.truth_(aria_label)?"true":"false")], null),key_text], null));

var G__50927 = (i__50643 + (1));
i__50643 = G__50927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50644),logseq$shui$shortcut$separate_keys_$_iter__50641(cljs.core.chunk_rest(s__50642__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50644),null);
}
} else {
var vec__50665 = cljs.core.first(s__50642__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50665,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50665,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd.shui-shortcut-key","kbd.shui-shortcut-key",-1340706727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"separate-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),(cljs.core.truth_(aria_label)?"true":"false")], null),key_text], null),logseq$shui$shortcut$separate_keys_$_iter__50641(cljs.core.rest(s__50642__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,key_elements));
})()], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$shortcut$separate_keys__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50672 = cljs.core.first(args__47253__auto__);
var G__50673 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50672,G__50673) : io.factorhouse.hsx.core.obj_get.call(null,G__50672,G__50673));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"separate-keys","separate-keys",-1259459791,null),args__47253__auto__),logseq$shui$shortcut$separate_keys,args__47253__auto__,null);
}
};
var logseq$shui$shortcut$separate_keys = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50928__i = 0, G__50928__a = new Array(arguments.length -  0);
while (G__50928__i < G__50928__a.length) {G__50928__a[G__50928__i] = arguments[G__50928__i + 0]; ++G__50928__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50928__a,0,null);
} 
return logseq$shui$shortcut$separate_keys__delegate.call(this,args__47253__auto__);};
logseq$shui$shortcut$separate_keys.cljs$lang$maxFixedArity = 0;
logseq$shui$shortcut$separate_keys.cljs$lang$applyTo = (function (arglist__50929){
var args__47253__auto__ = cljs.core.seq(arglist__50929);
return logseq$shui$shortcut$separate_keys__delegate(args__47253__auto__);
});
logseq$shui$shortcut$separate_keys.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$shortcut$separate_keys__delegate;
return logseq$shui$shortcut$separate_keys;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50679 = comp__47252__auto__;
var G__50680 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50679,G__50680) : io.factorhouse.hsx.core.react_memo.call(null,G__50679,G__50680));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"separate-keys");

return comp__47252__auto__;
})();
/**
 * Renders compact style (text-only, minimal styling).
 */
logseq.shui.shortcut.compact_keys = (function (){var render_fn__47251__auto__ = (function logseq$shui$shortcut$compact_keys(keys,binding,p__50682){
var map__50683 = p__50682;
var map__50683__$1 = cljs.core.__destructure_map(map__50683);
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50683__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50683__$1,new cljs.core.Keyword(null,"aria-hidden?","aria-hidden?",592108098));
var key_elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.shui.shortcut.print_shortcut_key,keys);
var normalized_binding = logseq.shui.shortcut.normalize_binding(binding);
var container_attrs = (function (){var G__50684 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"shui-shortcut-compact",new cljs.core.Keyword(null,"data-shortcut-binding","data-shortcut-binding",-271976730),normalized_binding,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null);
var G__50684__$1 = (cljs.core.truth_(aria_label)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50684,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),aria_label):G__50684);
if(cljs.core.truth_(aria_hidden_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50684__$1,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true");
} else {
return G__50684__$1;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),container_attrs,(function (){var iter__5628__auto__ = (function logseq$shui$shortcut$compact_keys_$_iter__50685(s__50686){
return (new cljs.core.LazySeq(null,(function (){
var s__50686__$1 = s__50686;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50686__$1);
if(temp__5825__auto__){
var s__50686__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50686__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50686__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50688 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50687 = (0);
while(true){
if((i__50687 < size__5627__auto__)){
var vec__50714 = cljs.core._nth(c__5626__auto__,i__50687);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50714,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50714,(1),null);
cljs.core.chunk_append(b__50688,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"compact-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"2px"], null)], null),key_text], null));

var G__50930 = (i__50687 + (1));
i__50687 = G__50930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50688),logseq$shui$shortcut$compact_keys_$_iter__50685(cljs.core.chunk_rest(s__50686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50688),null);
}
} else {
var vec__50717 = cljs.core.first(s__50686__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50717,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50717,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"compact-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"2px"], null)], null),key_text], null),logseq$shui$shortcut$compact_keys_$_iter__50685(cljs.core.rest(s__50686__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,key_elements));
})()], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$shortcut$compact_keys__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50729 = cljs.core.first(args__47253__auto__);
var G__50730 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50729,G__50730) : io.factorhouse.hsx.core.obj_get.call(null,G__50729,G__50730));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"compact-keys","compact-keys",-830276768,null),args__47253__auto__),logseq$shui$shortcut$compact_keys,args__47253__auto__,null);
}
};
var logseq$shui$shortcut$compact_keys = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50931__i = 0, G__50931__a = new Array(arguments.length -  0);
while (G__50931__i < G__50931__a.length) {G__50931__a[G__50931__i] = arguments[G__50931__i + 0]; ++G__50931__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50931__a,0,null);
} 
return logseq$shui$shortcut$compact_keys__delegate.call(this,args__47253__auto__);};
logseq$shui$shortcut$compact_keys.cljs$lang$maxFixedArity = 0;
logseq$shui$shortcut$compact_keys.cljs$lang$applyTo = (function (arglist__50932){
var args__47253__auto__ = cljs.core.seq(arglist__50932);
return logseq$shui$shortcut$compact_keys__delegate(args__47253__auto__);
});
logseq$shui$shortcut$compact_keys.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$shortcut$compact_keys__delegate;
return logseq$shui$shortcut$compact_keys;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50734 = comp__47252__auto__;
var G__50735 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50734,G__50735) : io.factorhouse.hsx.core.react_memo.call(null,G__50734,G__50735));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"compact-keys");

return comp__47252__auto__;
})();
/**
 * Renders a chord sequence (multi-step key combinations) with 'then' separators.
 * E.g., [['⌘' 'c'] ['⌘' 'r']] renders as: [⌘ C] then [⌘ R]
 */
logseq.shui.shortcut.chord_sequence_keys = (function (){var render_fn__47251__auto__ = (function logseq$shui$shortcut$chord_sequence_keys(groups,binding,p__50738){
var map__50739 = p__50738;
var map__50739__$1 = cljs.core.__destructure_map(map__50739);
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50739__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50739__$1,new cljs.core.Keyword(null,"aria-hidden?","aria-hidden?",592108098));
var glow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50739__$1,new cljs.core.Keyword(null,"glow?","glow?",565751582));
var chord_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50739__$1,new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"then");
var normalized_binding = logseq.shui.shortcut.normalize_binding(binding);
var container_attrs = (function (){var G__50740 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"shui-shortcut-chord",new cljs.core.Keyword(null,"data-shortcut-binding","data-shortcut-binding",-271976730),normalized_binding,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"8px"], null)], null);
var G__50740__$1 = (cljs.core.truth_(aria_label)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50740,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),aria_label):G__50740);
if(cljs.core.truth_(aria_hidden_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50740__$1,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true");
} else {
return G__50740__$1;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),container_attrs,(function (){var iter__5628__auto__ = (function logseq$shui$shortcut$chord_sequence_keys_$_iter__50743(s__50744){
return (new cljs.core.LazySeq(null,(function (){
var s__50744__$1 = s__50744;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50744__$1);
if(temp__5825__auto__){
var s__50744__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50744__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50744__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50746 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50745 = (0);
while(true){
if((i__50745 < size__5627__auto__)){
var vec__50747 = cljs.core._nth(c__5626__auto__,i__50745);
var gi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50747,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50747,(1),null);
cljs.core.chunk_append(b__50746,(new cljs.core.List(null,(((gi > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shui-shortcut-chord-sep","span.shui-shortcut-chord-sep",-976491433),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"chord-sep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.45], null)], null),chord_separator], null):null),(new cljs.core.List(null,(function (){var key_elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.shui.shortcut.print_shortcut_key,group);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"chord-group-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"shui-shortcut-combo"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(glow_QMARK_)?" shui-shortcut-glow":null))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null),(function (){var iter__5628__auto__ = ((function (i__50745,key_elements,vec__50747,gi,group,c__5626__auto__,size__5627__auto__,b__50746,s__50744__$2,temp__5825__auto__,normalized_binding,container_attrs,map__50739,map__50739__$1,aria_label,aria_hidden_QMARK_,glow_QMARK_,chord_separator){
return (function logseq$shui$shortcut$chord_sequence_keys_$_iter__50743_$_iter__50754(s__50755){
return (new cljs.core.LazySeq(null,((function (i__50745,key_elements,vec__50747,gi,group,c__5626__auto__,size__5627__auto__,b__50746,s__50744__$2,temp__5825__auto__,normalized_binding,container_attrs,map__50739,map__50739__$1,aria_label,aria_hidden_QMARK_,glow_QMARK_,chord_separator){
return (function (){
var s__50755__$1 = s__50755;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50755__$1);
if(temp__5825__auto____$1){
var s__50755__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50755__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__50755__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__50757 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__50756 = (0);
while(true){
if((i__50756 < size__5627__auto____$1)){
var vec__50763 = cljs.core._nth(c__5626__auto____$1,i__50756);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(1),null);
cljs.core.chunk_append(b__50757,(new cljs.core.List(null,((((0) < ki))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shui-shortcut-separator","span.shui-shortcut-separator",-1163381263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gsep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ki))], null)], null):null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd.shui-shortcut-key","kbd.shui-shortcut-key",-1340706727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"chord-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ki)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),(cljs.core.truth_(aria_label)?"true":"false")], null),key_text], null),null,(1),null)),(2),null)));

var G__50933 = (i__50756 + (1));
i__50756 = G__50933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50757),logseq$shui$shortcut$chord_sequence_keys_$_iter__50743_$_iter__50754(cljs.core.chunk_rest(s__50755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50757),null);
}
} else {
var vec__50768 = cljs.core.first(s__50755__$2);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50768,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50768,(1),null);
return cljs.core.cons((new cljs.core.List(null,((((0) < ki))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shui-shortcut-separator","span.shui-shortcut-separator",-1163381263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gsep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ki))], null)], null):null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd.shui-shortcut-key","kbd.shui-shortcut-key",-1340706727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"chord-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ki)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),(cljs.core.truth_(aria_label)?"true":"false")], null),key_text], null),null,(1),null)),(2),null)),logseq$shui$shortcut$chord_sequence_keys_$_iter__50743_$_iter__50754(cljs.core.rest(s__50755__$2)));
}
} else {
return null;
}
break;
}
});})(i__50745,key_elements,vec__50747,gi,group,c__5626__auto__,size__5627__auto__,b__50746,s__50744__$2,temp__5825__auto__,normalized_binding,container_attrs,map__50739,map__50739__$1,aria_label,aria_hidden_QMARK_,glow_QMARK_,chord_separator))
,null,null));
});})(i__50745,key_elements,vec__50747,gi,group,c__5626__auto__,size__5627__auto__,b__50746,s__50744__$2,temp__5825__auto__,normalized_binding,container_attrs,map__50739,map__50739__$1,aria_label,aria_hidden_QMARK_,glow_QMARK_,chord_separator))
;
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,key_elements));
})()], null);
})(),null,(1),null)),(2),null)));

var G__50934 = (i__50745 + (1));
i__50745 = G__50934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50746),logseq$shui$shortcut$chord_sequence_keys_$_iter__50743(cljs.core.chunk_rest(s__50744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50746),null);
}
} else {
var vec__50776 = cljs.core.first(s__50744__$2);
var gi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(1),null);
return cljs.core.cons((new cljs.core.List(null,(((gi > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shui-shortcut-chord-sep","span.shui-shortcut-chord-sep",-976491433),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"chord-sep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.45], null)], null),chord_separator], null):null),(new cljs.core.List(null,(function (){var key_elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.shui.shortcut.print_shortcut_key,group);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"chord-group-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"shui-shortcut-combo"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(glow_QMARK_)?" shui-shortcut-glow":null))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null),(function (){var iter__5628__auto__ = ((function (key_elements,vec__50776,gi,group,s__50744__$2,temp__5825__auto__,normalized_binding,container_attrs,map__50739,map__50739__$1,aria_label,aria_hidden_QMARK_,glow_QMARK_,chord_separator){
return (function logseq$shui$shortcut$chord_sequence_keys_$_iter__50743_$_iter__50781(s__50782){
return (new cljs.core.LazySeq(null,(function (){
var s__50782__$1 = s__50782;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50782__$1);
if(temp__5825__auto____$1){
var s__50782__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50782__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50782__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50784 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50783 = (0);
while(true){
if((i__50783 < size__5627__auto__)){
var vec__50790 = cljs.core._nth(c__5626__auto__,i__50783);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50790,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50790,(1),null);
cljs.core.chunk_append(b__50784,(new cljs.core.List(null,((((0) < ki))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shui-shortcut-separator","span.shui-shortcut-separator",-1163381263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gsep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ki))], null)], null):null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd.shui-shortcut-key","kbd.shui-shortcut-key",-1340706727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"chord-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ki)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),(cljs.core.truth_(aria_label)?"true":"false")], null),key_text], null),null,(1),null)),(2),null)));

var G__50935 = (i__50783 + (1));
i__50783 = G__50935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50784),logseq$shui$shortcut$chord_sequence_keys_$_iter__50743_$_iter__50781(cljs.core.chunk_rest(s__50782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50784),null);
}
} else {
var vec__50795 = cljs.core.first(s__50782__$2);
var ki = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50795,(0),null);
var key_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50795,(1),null);
return cljs.core.cons((new cljs.core.List(null,((((0) < ki))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shui-shortcut-separator","span.shui-shortcut-separator",-1163381263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gsep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ki))], null)], null):null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd.shui-shortcut-key","kbd.shui-shortcut-key",-1340706727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"chord-key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gi)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ki)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),(cljs.core.truth_(aria_label)?"true":"false")], null),key_text], null),null,(1),null)),(2),null)),logseq$shui$shortcut$chord_sequence_keys_$_iter__50743_$_iter__50781(cljs.core.rest(s__50782__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(key_elements,vec__50776,gi,group,s__50744__$2,temp__5825__auto__,normalized_binding,container_attrs,map__50739,map__50739__$1,aria_label,aria_hidden_QMARK_,glow_QMARK_,chord_separator))
;
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,key_elements));
})()], null);
})(),null,(1),null)),(2),null)),logseq$shui$shortcut$chord_sequence_keys_$_iter__50743(cljs.core.rest(s__50744__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,groups));
})()], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$shortcut$chord_sequence_keys__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50798 = cljs.core.first(args__47253__auto__);
var G__50799 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50798,G__50799) : io.factorhouse.hsx.core.obj_get.call(null,G__50798,G__50799));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"chord-sequence-keys","chord-sequence-keys",-1773921650,null),args__47253__auto__),logseq$shui$shortcut$chord_sequence_keys,args__47253__auto__,null);
}
};
var logseq$shui$shortcut$chord_sequence_keys = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50936__i = 0, G__50936__a = new Array(arguments.length -  0);
while (G__50936__i < G__50936__a.length) {G__50936__a[G__50936__i] = arguments[G__50936__i + 0]; ++G__50936__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50936__a,0,null);
} 
return logseq$shui$shortcut$chord_sequence_keys__delegate.call(this,args__47253__auto__);};
logseq$shui$shortcut$chord_sequence_keys.cljs$lang$maxFixedArity = 0;
logseq$shui$shortcut$chord_sequence_keys.cljs$lang$applyTo = (function (arglist__50937){
var args__47253__auto__ = cljs.core.seq(arglist__50937);
return logseq$shui$shortcut$chord_sequence_keys__delegate(args__47253__auto__);
});
logseq$shui$shortcut$chord_sequence_keys.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$shortcut$chord_sequence_keys__delegate;
return logseq$shui$shortcut$chord_sequence_keys;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50800 = comp__47252__auto__;
var G__50801 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50800,G__50801) : io.factorhouse.hsx.core.react_memo.call(null,G__50800,G__50801));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"chord-sequence-keys");

return comp__47252__auto__;
})();
/**
 * Main shortcut component with automatic style detection.
 * 
 * Props:
 * - :style - :combo, :separate, :compact, or :auto (default: :auto)
 * - :aria-label - accessibility label for container
 * - :aria-hidden? - if true, hides from screen readers (default: false for decorative hints)
 * - :glow? - if true, adds inner glow effect to combo/separate keys (default: true)
 * - :raw-binding - raw binding format for data-shortcut-binding (for animation matching).
 *                  If not provided, will normalize from shortcut prop.
 */
logseq.shui.shortcut.root = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$shortcut$root__delegate = function (shortcut,p__50802){
var map__50803 = p__50802;
var map__50803__$1 = cljs.core.__destructure_map(map__50803);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50803__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"auto","auto",-566279492));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50803__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50803__$1,new cljs.core.Keyword(null,"aria-hidden?","aria-hidden?",592108098),false);
var glow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50803__$1,new cljs.core.Keyword(null,"glow?","glow?",565751582),true);
var raw_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50803__$1,new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702));
var chord_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50803__$1,new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809));
if(cljs.core.truth_((function (){var and__5140__auto__ = shortcut;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(shortcut);
} else {
return and__5140__auto__;
}
})())){
var shortcuts = ((cljs.core.coll_QMARK_(shortcut))?((cljs.core.every_QMARK_(cljs.core.string_QMARK_,shortcut))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut], null):((typeof cljs.core.first(shortcut) === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut], null):shortcut)):logseq.shui.shortcut.parse_shortcuts(shortcut));
var opts = (function (){var G__50804 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),aria_label,new cljs.core.Keyword(null,"aria-hidden?","aria-hidden?",592108098),aria_hidden_QMARK_,new cljs.core.Keyword(null,"glow?","glow?",565751582),glow_QMARK_], null);
if(cljs.core.truth_(chord_separator)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50804,new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),chord_separator);
} else {
return G__50804;
}
})();
var iter__5628__auto__ = (function logseq$shui$shortcut$root_$_iter__50805(s__50806){
return (new cljs.core.LazySeq(null,(function (){
var s__50806__$1 = s__50806;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50806__$1);
if(temp__5825__auto__){
var s__50806__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50806__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50806__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50808 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50807 = (0);
while(true){
if((i__50807 < size__5627__auto__)){
var vec__50809 = cljs.core._nth(c__5626__auto__,i__50807);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50809,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50809,(1),null);
cljs.core.chunk_append(b__50808,(function (){var chord_sequence_QMARK_ = ((cljs.core.coll_QMARK_(binding)) && ((((cljs.core.count(binding) > (1))) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,binding)))));
var detected_style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"auto","auto",-566279492)))?logseq.shui.shortcut.detect_style(binding):style);
var keys = ((typeof binding === 'string')?((clojure.string.includes_QMARK_(binding,"+"))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(binding,/\+/):clojure.string.split.cljs$core$IFn$_invoke$arity$2(binding,/ /)):((((cljs.core.coll_QMARK_(binding)) && (cljs.core.coll_QMARK_(cljs.core.first(binding)))))?cljs.core.first(binding):((cljs.core.coll_QMARK_(binding))?(function (){var flattened = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__50807,chord_sequence_QMARK_,detected_style,vec__50809,index,binding,c__5626__auto__,size__5627__auto__,b__50808,s__50806__$2,temp__5825__auto__,shortcuts,opts,map__50803,map__50803__$1,style,aria_label,aria_hidden_QMARK_,glow_QMARK_,raw_binding,chord_separator){
return (function (item){
if(cljs.core.coll_QMARK_(item)){
return item;
} else {
if(((typeof item === 'string') && (clojure.string.includes_QMARK_(item,"+")))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(item,/\+/);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);

}
}
});})(i__50807,chord_sequence_QMARK_,detected_style,vec__50809,index,binding,c__5626__auto__,size__5627__auto__,b__50808,s__50806__$2,temp__5825__auto__,shortcuts,opts,map__50803,map__50803__$1,style,aria_label,aria_hidden_QMARK_,glow_QMARK_,raw_binding,chord_separator))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([binding], 0));
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,flattened)){
return flattened;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,flattened);
}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(binding))], null)
)));
var binding_for_data = (((raw_binding == null))?binding:((((cljs.core.coll_QMARK_(raw_binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(raw_binding),(1)))))?cljs.core.first(raw_binding):raw_binding
));
var render_fn = (function (){var G__50816 = detected_style;
var G__50816__$1 = (((G__50816 instanceof cljs.core.Keyword))?G__50816.fqn:null);
switch (G__50816__$1) {
case "combo":
return logseq.shui.shortcut.combo_keys;

break;
case "separate":
return logseq.shui.shortcut.separate_keys;

break;
case "compact":
return logseq.shui.shortcut.compact_keys;

break;
default:
return logseq.shui.shortcut.separate_keys;

}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"shortcut-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null),((((0) < index))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-11.text-sm","span.text-gray-11.text-sm",468110254),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"sep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 4px"], null)], null),"|"], null):null),((chord_sequence_QMARK_)?logseq.shui.shortcut.chord_sequence_keys(binding,binding_for_data,opts):(render_fn.cljs$core$IFn$_invoke$arity$3 ? render_fn.cljs$core$IFn$_invoke$arity$3(keys,binding_for_data,opts) : render_fn.call(null,keys,binding_for_data,opts)))], null);
})());

var G__50939 = (i__50807 + (1));
i__50807 = G__50939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50808),logseq$shui$shortcut$root_$_iter__50805(cljs.core.chunk_rest(s__50806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50808),null);
}
} else {
var vec__50829 = cljs.core.first(s__50806__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50829,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50829,(1),null);
return cljs.core.cons((function (){var chord_sequence_QMARK_ = ((cljs.core.coll_QMARK_(binding)) && ((((cljs.core.count(binding) > (1))) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,binding)))));
var detected_style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"auto","auto",-566279492)))?logseq.shui.shortcut.detect_style(binding):style);
var keys = ((typeof binding === 'string')?((clojure.string.includes_QMARK_(binding,"+"))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(binding,/\+/):clojure.string.split.cljs$core$IFn$_invoke$arity$2(binding,/ /)):((((cljs.core.coll_QMARK_(binding)) && (cljs.core.coll_QMARK_(cljs.core.first(binding)))))?cljs.core.first(binding):((cljs.core.coll_QMARK_(binding))?(function (){var flattened = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (chord_sequence_QMARK_,detected_style,vec__50829,index,binding,s__50806__$2,temp__5825__auto__,shortcuts,opts,map__50803,map__50803__$1,style,aria_label,aria_hidden_QMARK_,glow_QMARK_,raw_binding,chord_separator){
return (function (item){
if(cljs.core.coll_QMARK_(item)){
return item;
} else {
if(((typeof item === 'string') && (clojure.string.includes_QMARK_(item,"+")))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(item,/\+/);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);

}
}
});})(chord_sequence_QMARK_,detected_style,vec__50829,index,binding,s__50806__$2,temp__5825__auto__,shortcuts,opts,map__50803,map__50803__$1,style,aria_label,aria_hidden_QMARK_,glow_QMARK_,raw_binding,chord_separator))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([binding], 0));
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,flattened)){
return flattened;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,flattened);
}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(binding))], null)
)));
var binding_for_data = (((raw_binding == null))?binding:((((cljs.core.coll_QMARK_(raw_binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(raw_binding),(1)))))?cljs.core.first(raw_binding):raw_binding
));
var render_fn = (function (){var G__50840 = detected_style;
var G__50840__$1 = (((G__50840 instanceof cljs.core.Keyword))?G__50840.fqn:null);
switch (G__50840__$1) {
case "combo":
return logseq.shui.shortcut.combo_keys;

break;
case "separate":
return logseq.shui.shortcut.separate_keys;

break;
case "compact":
return logseq.shui.shortcut.compact_keys;

break;
default:
return logseq.shui.shortcut.separate_keys;

}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"shortcut-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null),((((0) < index))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-11.text-sm","span.text-gray-11.text-sm",468110254),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"sep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 4px"], null)], null),"|"], null):null),((chord_sequence_QMARK_)?logseq.shui.shortcut.chord_sequence_keys(binding,binding_for_data,opts):(render_fn.cljs$core$IFn$_invoke$arity$3 ? render_fn.cljs$core$IFn$_invoke$arity$3(keys,binding_for_data,opts) : render_fn.call(null,keys,binding_for_data,opts)))], null);
})(),logseq$shui$shortcut$root_$_iter__50805(cljs.core.rest(s__50806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,shortcuts));
} else {
return null;
}
};
var logseq$shui$shortcut$root = function (shortcut,var_args){
var p__50802 = null;
if (arguments.length > 1) {
var G__50941__i = 0, G__50941__a = new Array(arguments.length -  1);
while (G__50941__i < G__50941__a.length) {G__50941__a[G__50941__i] = arguments[G__50941__i + 1]; ++G__50941__i;}
  p__50802 = new cljs.core.IndexedSeq(G__50941__a,0,null);
} 
return logseq$shui$shortcut$root__delegate.call(this,shortcut,p__50802);};
logseq$shui$shortcut$root.cljs$lang$maxFixedArity = 1;
logseq$shui$shortcut$root.cljs$lang$applyTo = (function (arglist__50942){
var shortcut = cljs.core.first(arglist__50942);
var p__50802 = cljs.core.rest(arglist__50942);
return logseq$shui$shortcut$root__delegate(shortcut,p__50802);
});
logseq$shui$shortcut$root.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$shortcut$root__delegate;
return logseq$shui$shortcut$root;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$shortcut$root__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50845 = cljs.core.first(args__47253__auto__);
var G__50846 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50845,G__50846) : io.factorhouse.hsx.core.obj_get.call(null,G__50845,G__50846));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"root","root",1191874074,null),args__47253__auto__),logseq$shui$shortcut$root,args__47253__auto__,null);
}
};
var logseq$shui$shortcut$root = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50943__i = 0, G__50943__a = new Array(arguments.length -  0);
while (G__50943__i < G__50943__a.length) {G__50943__a[G__50943__i] = arguments[G__50943__i + 0]; ++G__50943__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50943__a,0,null);
} 
return logseq$shui$shortcut$root__delegate.call(this,args__47253__auto__);};
logseq$shui$shortcut$root.cljs$lang$maxFixedArity = 0;
logseq$shui$shortcut$root.cljs$lang$applyTo = (function (arglist__50944){
var args__47253__auto__ = cljs.core.seq(arglist__50944);
return logseq$shui$shortcut$root__delegate(args__47253__auto__);
});
logseq$shui$shortcut$root.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$shortcut$root__delegate;
return logseq$shui$shortcut$root;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50849 = comp__47252__auto__;
var G__50850 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50849,G__50850) : io.factorhouse.hsx.core.react_memo.call(null,G__50849,G__50850));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"root");

return comp__47252__auto__;
})();

//# sourceMappingURL=logseq.shui.shortcut.js.map
