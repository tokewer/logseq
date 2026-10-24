goog.provide('frontend.components.shortcut');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shortcut !== 'undefined') && (typeof frontend.components.shortcut.categories !== 'undefined')){
} else {
frontend.components.shortcut.categories = (new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("shortcut.category","basics","shortcut.category/basics",-1775874746),new cljs.core.Keyword("shortcut.category","navigating","shortcut.category/navigating",-2030317791),new cljs.core.Keyword("shortcut.category","block-editing","shortcut.category/block-editing",-1150211354),new cljs.core.Keyword("shortcut.category","block-command-editing","shortcut.category/block-command-editing",1958480544),new cljs.core.Keyword("shortcut.category","block-selection","shortcut.category/block-selection",1439375136),new cljs.core.Keyword("shortcut.category","formatting","shortcut.category/formatting",-723875074),new cljs.core.Keyword("shortcut.category","toggle","shortcut.category/toggle",677164372),new cljs.core.Keyword("shortcut.category","plugins","shortcut.category/plugins",-1801186145),new cljs.core.Keyword("shortcut.category","others","shortcut.category/others",1492019197)],null));
}
frontend.components.shortcut.max_key_sequence_length = (5);
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shortcut !== 'undefined') && (typeof frontend.components.shortcut._STAR_refresh_sentry !== 'undefined')){
} else {
frontend.components.shortcut._STAR_refresh_sentry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.components.shortcut.refresh_shortcuts_list_BANG_ = (function frontend$components$shortcut$refresh_shortcuts_list_BANG_(){
return cljs.core.reset_BANG_(frontend.components.shortcut._STAR_refresh_sentry,(cljs.core.deref(frontend.components.shortcut._STAR_refresh_sentry) + (1)));
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shortcut !== 'undefined') && (typeof frontend.components.shortcut._STAR_global_listener_refcount !== 'undefined')){
} else {
frontend.components.shortcut._STAR_global_listener_refcount = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Manages KeyHandler lifecycle on a popup element: suppresses global shortcuts
 * while mounted, focuses the element, and disposes on unmount. Calls key-handler-fn
 * with each key event. Clears any timer refs on unmount.
 * 
 * Installs a bubble-phase keydown/keyup/keypress blocker on the popup element
 * so that key events never bubble to js/window — preventing
 * KeyboardShortcutHandler (including the :misc handler excluded from
 * unlisten-all!) and setup-active-keystroke! from firing during recording.
 * The blocker is registered in bubble phase (not capture) so that
 * goog.events.KeyHandler's listener on the same element fires first.
 */
frontend.components.shortcut.use_scoped_key_handler = (function frontend$components$shortcut$use_scoped_key_handler(_STAR_ref_el,key_handler_fn,timer_refs){
return logseq.shui.hooks.use_effect_BANG_((function (){
var el = logseq.shui.hooks.deref(_STAR_ref_el);
var key_handler = (new goog.events.KeyHandler(el));
var bubble_blocker = (function (e){
return e.stopPropagation();
});
var _ = el.addEventListener("keydown",bubble_blocker,false);
var ___$1 = el.addEventListener("keypress",bubble_blocker,false);
var ___$2 = el.addEventListener("keyup",bubble_blocker,false);
var ___$3 = (((cljs.core.deref(frontend.components.shortcut._STAR_global_listener_refcount) === (0)))?frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1(true):null);
var ___$4 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.shortcut._STAR_global_listener_refcount,cljs.core.inc);
goog.events.listen(key_handler,"key",key_handler_fn);

var focus_timer = setTimeout((function (){
return el.focus();
}),(128));
return (function (){
clearTimeout(focus_timer);

var seq__55509_55921 = cljs.core.seq(timer_refs);
var chunk__55510_55922 = null;
var count__55511_55923 = (0);
var i__55512_55924 = (0);
while(true){
if((i__55512_55924 < count__55511_55923)){
var _STAR_t_55925 = chunk__55510_55922.cljs$core$IIndexed$_nth$arity$2(null,i__55512_55924);
var temp__5825__auto___55926 = logseq.shui.hooks.deref(_STAR_t_55925);
if(cljs.core.truth_(temp__5825__auto___55926)){
var timer_55927 = temp__5825__auto___55926;
clearTimeout(timer_55927);
} else {
}


var G__55928 = seq__55509_55921;
var G__55929 = chunk__55510_55922;
var G__55930 = count__55511_55923;
var G__55931 = (i__55512_55924 + (1));
seq__55509_55921 = G__55928;
chunk__55510_55922 = G__55929;
count__55511_55923 = G__55930;
i__55512_55924 = G__55931;
continue;
} else {
var temp__5825__auto___55932 = cljs.core.seq(seq__55509_55921);
if(temp__5825__auto___55932){
var seq__55509_55933__$1 = temp__5825__auto___55932;
if(cljs.core.chunked_seq_QMARK_(seq__55509_55933__$1)){
var c__5673__auto___55934 = cljs.core.chunk_first(seq__55509_55933__$1);
var G__55935 = cljs.core.chunk_rest(seq__55509_55933__$1);
var G__55936 = c__5673__auto___55934;
var G__55937 = cljs.core.count(c__5673__auto___55934);
var G__55938 = (0);
seq__55509_55921 = G__55935;
chunk__55510_55922 = G__55936;
count__55511_55923 = G__55937;
i__55512_55924 = G__55938;
continue;
} else {
var _STAR_t_55939 = cljs.core.first(seq__55509_55933__$1);
var temp__5825__auto___55940__$1 = logseq.shui.hooks.deref(_STAR_t_55939);
if(cljs.core.truth_(temp__5825__auto___55940__$1)){
var timer_55941 = temp__5825__auto___55940__$1;
clearTimeout(timer_55941);
} else {
}


var G__55942 = cljs.core.next(seq__55509_55933__$1);
var G__55943 = null;
var G__55944 = (0);
var G__55945 = (0);
seq__55509_55921 = G__55942;
chunk__55510_55922 = G__55943;
count__55511_55923 = G__55944;
i__55512_55924 = G__55945;
continue;
}
} else {
}
}
break;
}

el.removeEventListener("keydown",bubble_blocker,false);

el.removeEventListener("keypress",bubble_blocker,false);

el.removeEventListener("keyup",bubble_blocker,false);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.shortcut._STAR_global_listener_refcount,(function (n){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(n - (1)));
})) === (0))){
frontend.modules.shortcut.core.listen_all_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
}

return key_handler.dispose();
});
}),cljs.core.PersistentVector.EMPTY);
});
frontend.components.shortcut.to_vector = (function frontend$components$shortcut$to_vector(v){
if((v == null)){
return null;
} else {
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.vec(v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}
});
frontend.components.shortcut.editable_binding_vec = (function frontend$components$shortcut$editable_binding_vec(binding){
if(binding === false){
return cljs.core.PersistentVector.EMPTY;
} else {
if((binding == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.sequential_QMARK_(binding)){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,binding));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding], null);

}
}
}
});
frontend.components.shortcut.keyboard_filter_remove_last_keystroke = (function frontend$components$shortcut$keyboard_filter_remove_last_keystroke(keystroke){
if(clojure.string.blank_QMARK_(keystroke)){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(keystroke,/ /);
var remaining = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.butlast(parts));
if(clojure.string.blank_QMARK_(remaining)){
return null;
} else {
return remaining;
}
}
});
frontend.components.shortcut.keyboard_filter_at_limit_QMARK_ = (function frontend$components$shortcut$keyboard_filter_at_limit_QMARK_(keystroke){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(keystroke),/ /);
return ((cljs.core.seq(cljs.core.first(parts))) && ((cljs.core.count(parts) >= frontend.components.shortcut.max_key_sequence_length)));
});
frontend.components.shortcut.handle_keyboard_filter_record_key_BANG_ = (function frontend$components$shortcut$handle_keyboard_filter_record_key_BANG_(e,close_fn,clear_BANG_,commit_BANG_,set_keystroke_BANG_,set_accumulating_BANG_,start_commit_timer_BANG_,_STAR_committed_ref,_STAR_keystroke_ref,_STAR_commit_timer){
e.preventDefault();

var key_code = e.keyCode;
var is_esc_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(27));
var is_backspace_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(8));
var has_modifier_QMARK_ = (function (){var or__5142__auto__ = e.metaKey;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = e.ctrlKey;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return e.altKey;
}
}
})();
if(is_esc_QMARK_){
e.stopPropagation();

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
} else {
if(((is_backspace_QMARK_) && (cljs.core.not(logseq.shui.hooks.deref(_STAR_committed_ref))))){
var temp__5823__auto__ = frontend.components.shortcut.keyboard_filter_remove_last_keystroke(logseq.shui.hooks.deref(_STAR_keystroke_ref));
if(cljs.core.truth_(temp__5823__auto__)){
var remaining = temp__5823__auto__;
(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1(remaining) : set_keystroke_BANG_.call(null,remaining));

return (start_commit_timer_BANG_.cljs$core$IFn$_invoke$arity$1 ? start_commit_timer_BANG_.cljs$core$IFn$_invoke$arity$1(remaining) : start_commit_timer_BANG_.call(null,remaining));
} else {
return (clear_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_BANG_.call(null));
}
} else {
if(is_backspace_QMARK_){
return (clear_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_BANG_.call(null));
} else {
var temp__5825__auto__ = (function (){var G__55513 = frontend.modules.shortcut.core.keyname(e);
if((G__55513 == null)){
return null;
} else {
return frontend.util.trim_safe(G__55513);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var kn = temp__5825__auto__;
if(cljs.core.truth_(has_modifier_QMARK_)){
var temp__5825__auto___55946__$1 = logseq.shui.hooks.deref(_STAR_commit_timer);
if(cljs.core.truth_(temp__5825__auto___55946__$1)){
var timer_55947 = temp__5825__auto___55946__$1;
clearTimeout(timer_55947);
} else {
}

return (commit_BANG_.cljs$core$IFn$_invoke$arity$1 ? commit_BANG_.cljs$core$IFn$_invoke$arity$1(kn) : commit_BANG_.call(null,kn));
} else {
if(cljs.core.truth_(logseq.shui.hooks.deref(_STAR_committed_ref))){
logseq.shui.hooks.set_ref_BANG_(_STAR_committed_ref,false);

(set_accumulating_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_accumulating_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_accumulating_BANG_.call(null,true));

(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1(kn) : set_keystroke_BANG_.call(null,kn));

return (start_commit_timer_BANG_.cljs$core$IFn$_invoke$arity$1 ? start_commit_timer_BANG_.cljs$core$IFn$_invoke$arity$1(kn) : start_commit_timer_BANG_.call(null,kn));
} else {
var current_keystroke = logseq.shui.hooks.deref(_STAR_keystroke_ref);
if(frontend.components.shortcut.keyboard_filter_at_limit_QMARK_(current_keystroke)){
return null;
} else {
var new_keystroke = frontend.util.trim_safe((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_keystroke)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kn)));
(set_accumulating_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_accumulating_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_accumulating_BANG_.call(null,true));

(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1(new_keystroke) : set_keystroke_BANG_.call(null,new_keystroke));

return (start_commit_timer_BANG_.cljs$core$IFn$_invoke$arity$1 ? start_commit_timer_BANG_.cljs$core$IFn$_invoke$arity$1(new_keystroke) : start_commit_timer_BANG_.call(null,new_keystroke));
}
}
}
} else {
return null;
}

}
}
}
});
frontend.components.shortcut.keyboard_filter_record_view = (function frontend$components$shortcut$keyboard_filter_record_view(_STAR_ref_el,keystroke,accumulating_QMARK_,clear_BANG_){
var has_keystroke_QMARK_ = (!(clojure.string.blank_QMARK_(keystroke)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-filter-popover","div.shortcut-filter-popover",939098483),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref_el], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-popover-title","div.shortcut-popover-title",-208147422),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","keystroke-filter","keymap/keystroke-filter",-601559587)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-input-field","div.shortcut-input-field",-1113903542),((has_keystroke_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"shortcut-input-binding"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(accumulating_QMARK_)?" shortcut-input-binding--pending":null)))], null),logseq.shui.ui.shortcut(keystroke),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-binding-remove","button.shortcut-binding-remove",-2106958720),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return (clear_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_BANG_.call(null));
}),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","remove-filter","keymap/remove-filter",-1377902895)], 0))], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null))], null)], null):null),((has_keystroke_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-input-placeholder","span.shortcut-input-placeholder",-61148353),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","press-keys-to-filter","keymap/press-keys-to-filter",2076547577)], 0))], null))], null),(logseq.shui.ui.separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.separator.call(null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-toolbar","div.shortcut-toolbar",1219219576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((has_keystroke_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-toolbar-action.shortcut-toolbar-reset","button.shortcut-toolbar-action.shortcut-toolbar-reset",-980387415),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),clear_BANG_], null),frontend.ui.icon("rotate",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","clear","keymap/clear",-1274821990)], 0))], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),((has_keystroke_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-toolbar-hint","span.shortcut-toolbar-hint",779417685),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","hint-remove","keymap/hint-remove",190145159)], 0)),logseq.shui.ui.shortcut("backspace",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-toolbar-hint","span.shortcut-toolbar-hint",779417685),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","hint-close","keymap/hint-close",211291731)], 0)),logseq.shui.ui.shortcut("escape",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null))], null)], null)], null)], null);
});
frontend.components.shortcut.keyboard_filter_record_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$shortcut$keyboard_filter_record_inner(initial_keystroke,parent_set_keystroke_BANG_,close_fn){
var _STAR_ref_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__55515 = logseq.shui.hooks.use_state(initial_keystroke);
var keystroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55515,(0),null);
var set_local_keystroke_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55515,(1),null);
var set_keystroke_BANG_ = (function (ks){
(set_local_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_local_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1(ks) : set_local_keystroke_BANG_.call(null,ks));

return (parent_set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? parent_set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1(ks) : parent_set_keystroke_BANG_.call(null,ks));
});
var vec__55518 = logseq.shui.hooks.use_state(false);
var accumulating_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55518,(0),null);
var set_accumulating_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55518,(1),null);
var _STAR_commit_timer = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_committed_ref = (function (){var G__55521 = (!(clojure.string.blank_QMARK_(keystroke)));
return (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__55521) : logseq.shui.hooks.use_ref.call(null,G__55521));
})();
var _STAR_keystroke_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(keystroke) : logseq.shui.hooks.use_ref.call(null,keystroke));
var commit_BANG_ = (function (ks){
set_keystroke_BANG_(ks);

(set_accumulating_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_accumulating_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_accumulating_BANG_.call(null,false));

return logseq.shui.hooks.set_ref_BANG_(_STAR_committed_ref,true);
});
var clear_BANG_ = (function (){
var temp__5825__auto___55948 = logseq.shui.hooks.deref(_STAR_commit_timer);
if(cljs.core.truth_(temp__5825__auto___55948)){
var timer_55949 = temp__5825__auto___55948;
clearTimeout(timer_55949);
} else {
}

set_keystroke_BANG_("");

(set_accumulating_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_accumulating_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_accumulating_BANG_.call(null,false));

return logseq.shui.hooks.set_ref_BANG_(_STAR_committed_ref,false);
});
var start_commit_timer_BANG_ = (function (ks){
var temp__5825__auto___55950 = logseq.shui.hooks.deref(_STAR_commit_timer);
if(cljs.core.truth_(temp__5825__auto___55950)){
var timer_55951 = temp__5825__auto___55950;
clearTimeout(timer_55951);
} else {
}

var timer = setTimeout((function (){
return commit_BANG_(ks);
}),(400));
return logseq.shui.hooks.set_ref_BANG_(_STAR_commit_timer,timer);
});
logseq.shui.hooks.set_ref_BANG_(_STAR_keystroke_ref,keystroke);

frontend.components.shortcut.use_scoped_key_handler(_STAR_ref_el,(function (p1__55514_SHARP_){
return frontend.components.shortcut.handle_keyboard_filter_record_key_BANG_(p1__55514_SHARP_,close_fn,clear_BANG_,commit_BANG_,set_keystroke_BANG_,set_accumulating_BANG_,start_commit_timer_BANG_,_STAR_committed_ref,_STAR_keystroke_ref,_STAR_commit_timer);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_STAR_commit_timer], null));

return frontend.components.shortcut.keyboard_filter_record_view(_STAR_ref_el,keystroke,accumulating_QMARK_,clear_BANG_);
});
var comp__31745__auto__ = (function() { 
var frontend$components$shortcut$keyboard_filter_record_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55522 = cljs.core.first(args__31746__auto__);
var G__55523 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55522,G__55523) : io.factorhouse.hsx.core.obj_get.call(null,G__55522,G__55523));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"keyboard-filter-record-inner","keyboard-filter-record-inner",1615929646,null),args__31746__auto__),frontend$components$shortcut$keyboard_filter_record_inner,args__31746__auto__,null);
}
};
var frontend$components$shortcut$keyboard_filter_record_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55952__i = 0, G__55952__a = new Array(arguments.length -  0);
while (G__55952__i < G__55952__a.length) {G__55952__a[G__55952__i] = arguments[G__55952__i + 0]; ++G__55952__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55952__a,0,null);
} 
return frontend$components$shortcut$keyboard_filter_record_inner__delegate.call(this,args__31746__auto__);};
frontend$components$shortcut$keyboard_filter_record_inner.cljs$lang$maxFixedArity = 0;
frontend$components$shortcut$keyboard_filter_record_inner.cljs$lang$applyTo = (function (arglist__55953){
var args__31746__auto__ = cljs.core.seq(arglist__55953);
return frontend$components$shortcut$keyboard_filter_record_inner__delegate(args__31746__auto__);
});
frontend$components$shortcut$keyboard_filter_record_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$shortcut$keyboard_filter_record_inner__delegate;
return frontend$components$shortcut$keyboard_filter_record_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55524 = comp__31745__auto__;
var G__55525 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55524,G__55525) : io.factorhouse.hsx.core.react_memo.call(null,G__55524,G__55525));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"keyboard-filter-record-inner");

return comp__31745__auto__;
})();
/**
 * Query all navigable items (category headers + non-disabled rows) from the <ul>, in DOM order.
 */
frontend.components.shortcut.navigable_items = (function frontend$components$shortcut$navigable_items(ul_el){
if(cljs.core.truth_(ul_el)){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(ul_el.querySelectorAll("li.th[tabindex], li.shortcut-row:not([aria-disabled])"));
} else {
return null;
}
});
/**
 * Scroll a row into view, accounting for sticky page header and category headers.
 */
frontend.components.shortcut.scroll_row_into_view_BANG_ = (function frontend$components$shortcut$scroll_row_into_view_BANG_(row_el){
var temp__5825__auto__ = row_el.closest(".cp__shortcut-page-x");
if(cljs.core.truth_(temp__5825__auto__)){
var page_el = temp__5825__auto__;
var temp__5825__auto____$1 = page_el.parentElement;
if(cljs.core.truth_(temp__5825__auto____$1)){
var scroll_parent = temp__5825__auto____$1;
var page_header = page_el.querySelector(":scope > header");
var sticky_h = ((cljs.core.truth_(page_header)?page_header.offsetHeight:(0)) + (40));
var row_rect = row_el.getBoundingClientRect();
var container_rect = scroll_parent.getBoundingClientRect();
var above_QMARK_ = (row_rect.top < (container_rect.top + sticky_h));
var below_QMARK_ = (row_rect.bottom > container_rect.bottom);
if(above_QMARK_){
return scroll_parent.scrollBy(({"top": (((row_rect.top - container_rect.top) - sticky_h) - (4)), "behavior": "instant"}));
} else {
if(below_QMARK_){
return scroll_parent.scrollBy(({"top": ((row_rect.bottom - container_rect.bottom) - (-4)), "behavior": "instant"}));
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
frontend.components.shortcut.pane_filter_keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"All","All",-2078402587),new cljs.core.Keyword(null,"Custom","Custom",-1084118283),new cljs.core.Keyword(null,"Unset","Unset",91993016),new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)], null);
frontend.components.shortcut.pane_filter_title = (function frontend$components$shortcut$pane_filter_title(k){
var G__55526 = k;
var G__55526__$1 = (((G__55526 instanceof cljs.core.Keyword))?G__55526.fqn:null);
switch (G__55526__$1) {
case "All":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","all","keymap/all",160385963)], 0));

break;
case "Custom":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0));

break;
case "Unset":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0));

break;
case "Disabled":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));

break;
default:
return cljs.core.name(k);

}
});
frontend.components.shortcut.pane_search_input = (function frontend$components$shortcut$pane_search_input(q,set_q_BANG_,set_keystroke_BANG_,_STAR_search_ref){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-input-wrap","span.search-input-wrap",-1426473243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-icon","span.search-icon",571206941),frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.is-small","input.form-input.is-small",-550503875),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","search-placeholder","keymap/search-placeholder",1040317772)], 0)),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_search_ref,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = q;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var kc = e.keyCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kc,(27))){
frontend.util.stop(e);

if(clojure.string.blank_QMARK_(q)){
var G__55528 = logseq.shui.hooks.deref(_STAR_search_ref);
if((G__55528 == null)){
return null;
} else {
return G__55528.blur();
}
} else {
return (set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_q_BANG_.call(null,""));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kc,(40))){
var temp__5825__auto__ = (function (){var G__55529 = logseq.shui.hooks.deref(_STAR_search_ref);
var G__55529__$1 = (((G__55529 == null))?null:G__55529.closest(".cp__shortcut-page-x"));
if((G__55529__$1 == null)){
return null;
} else {
return G__55529__$1.querySelector("ul li.shortcut-row:not([aria-disabled])");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var row = temp__5825__auto__;
e.preventDefault();

row.focus();

return frontend.components.shortcut.scroll_row_into_view_BANG_(row);
} else {
return null;
}
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55527_SHARP_){
var v = frontend.util.evalue(p1__55527_SHARP_);
if(clojure.string.blank_QMARK_(v)){
} else {
(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));
}

return (set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1(v) : set_q_BANG_.call(null,v));
})], null)], null),((clojure.string.blank_QMARK_(q))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.x","button.x",1470327960),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_q_BANG_.call(null,""));

return setTimeout((function (){
var G__55530 = logseq.shui.hooks.deref(_STAR_search_ref);
if((G__55530 == null)){
return null;
} else {
return G__55530.focus();
}
}),(50));
}),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","clear-search","keymap/clear-search",-1464820703)], 0))], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null))], null))], null);
});
frontend.components.shortcut.open_keystroke_filter_BANG_ = (function frontend$components$shortcut$open_keystroke_filter_BANG_(e,keystroke,set_q_BANG_,set_keystroke_BANG_){
var filter_popup_id = new cljs.core.Keyword(null,"shortcut-keystroke-filter","shortcut-keystroke-filter",1525648961);
var anchor_el = e.currentTarget;
(set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_q_BANG_.call(null,""));

var G__55532 = anchor_el;
var G__55533 = (function (_){
return frontend.components.shortcut.keyboard_filter_record_inner(keystroke,set_keystroke_BANG_,(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(filter_popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,filter_popup_id));
}));
});
var G__55534 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),filter_popup_id,new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true,new cljs.core.Keyword(null,"align","align",1964212802),"end",new cljs.core.Keyword(null,"on-after-hide","on-after-hide",-1040754229),(function (){
if(cljs.core.truth_(anchor_el)){
return anchor_el.focus();
} else {
return null;
}
}),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"shortcut-filter-popover-content p-0 w-auto",new cljs.core.Keyword(null,"collision-padding","collision-padding",1698110405),(12),new cljs.core.Keyword(null,"onOpenAutoFocus","onOpenAutoFocus",-99363202),(function (p1__55531_SHARP_){
return p1__55531_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (_){
return false;
}),new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),(function (_){
return null;
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__55532,G__55533,G__55534) : logseq.shui.ui.popup_show_BANG_.call(null,G__55532,G__55533,G__55534));
});
frontend.components.shortcut.pane_keystroke_filter_control = (function frontend$components$shortcut$pane_keystroke_filter_control(keystroke,set_q_BANG_,set_keystroke_BANG_){
var open_filter_BANG_ = (function (p1__55535_SHARP_){
return frontend.components.shortcut.open_keystroke_filter_BANG_(p1__55535_SHARP_,keystroke,set_q_BANG_,set_keystroke_BANG_);
});
if(clojure.string.blank_QMARK_(keystroke)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-keystroke-inactive","button.shortcut-keystroke-inactive",-96154088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_filter_BANG_], null),frontend.ui.icon("keyboard",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","search-by-keys","keymap/search-by-keys",584587881)], 0))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-keystroke-active","div.shortcut-keystroke-active",-418391611),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_filter_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-keystroke-keys","span.shortcut-keystroke-keys",1041283831),frontend.ui.icon("keyboard",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),logseq.shui.ui.shortcut(keystroke)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-keystroke-clear","button.shortcut-keystroke-clear",-256611217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return (set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));
}),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","clear-keystroke-filter","keymap/clear-keystroke-filter",1227063898)], 0))], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null))], null)], null);
}
});
frontend.components.shortcut.pane_filter_pills = (function frontend$components$shortcut$pane_filter_pills(filter_key,set_filter_key_BANG_,pill_counts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-filter-pills","div.shortcut-filter-pills",2130197920),(function (){var iter__5628__auto__ = (function frontend$components$shortcut$pane_filter_pills_$_iter__55536(s__55537){
return (new cljs.core.LazySeq(null,(function (){
var s__55537__$1 = s__55537;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55537__$1);
if(temp__5825__auto__){
var s__55537__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55537__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55537__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55539 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55538 = (0);
while(true){
if((i__55538 < size__5627__auto__)){
var k = cljs.core._nth(c__5626__auto__,i__55538);
var active_QMARK_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"All","All",-2078402587))) && ((filter_key == null)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_key,k)));
cljs.core.chunk_append(b__55539,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-filter-pill","button.shortcut-filter-pill",-1538892644),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(k),new cljs.core.Keyword(null,"class","class",-2030961996),((active_QMARK_)?"shortcut-filter-pill--active":null),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55538,active_QMARK_,k,c__5626__auto__,size__5627__auto__,b__55539,s__55537__$2,temp__5825__auto__){
return (function (){
var G__55540 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"All","All",-2078402587))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_key,k))))?null:k);
return (set_filter_key_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filter_key_BANG_.cljs$core$IFn$_invoke$arity$1(G__55540) : set_filter_key_BANG_.call(null,G__55540));
});})(i__55538,active_QMARK_,k,c__5626__auto__,size__5627__auto__,b__55539,s__55537__$2,temp__5825__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-filter-pill-title","span.shortcut-filter-pill-title",705905154),frontend.components.shortcut.pane_filter_title(k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-filter-pill-count","span.shortcut-filter-pill-count",182063687),(""+" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(pill_counts,k,(0))))], null)], null));

var G__55955 = (i__55538 + (1));
i__55538 = G__55955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55539),frontend$components$shortcut$pane_filter_pills_$_iter__55536(cljs.core.chunk_rest(s__55537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55539),null);
}
} else {
var k = cljs.core.first(s__55537__$2);
var active_QMARK_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"All","All",-2078402587))) && ((filter_key == null)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_key,k)));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-filter-pill","button.shortcut-filter-pill",-1538892644),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(k),new cljs.core.Keyword(null,"class","class",-2030961996),((active_QMARK_)?"shortcut-filter-pill--active":null),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_QMARK_,k,s__55537__$2,temp__5825__auto__){
return (function (){
var G__55541 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"All","All",-2078402587))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_key,k))))?null:k);
return (set_filter_key_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filter_key_BANG_.cljs$core$IFn$_invoke$arity$1(G__55541) : set_filter_key_BANG_.call(null,G__55541));
});})(active_QMARK_,k,s__55537__$2,temp__5825__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-filter-pill-title","span.shortcut-filter-pill-title",705905154),frontend.components.shortcut.pane_filter_title(k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-filter-pill-count","span.shortcut-filter-pill-count",182063687),(""+" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(pill_counts,k,(0))))], null)], null),frontend$components$shortcut$pane_filter_pills_$_iter__55536(cljs.core.rest(s__55537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.components.shortcut.pane_filter_keys);
})()], null);
});
frontend.components.shortcut.pane_secondary_actions = (function frontend$components$shortcut$pane_secondary_actions(q,toggle_categories_fn){
if(clojure.string.blank_QMARK_(q)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2","div.flex.items-center.gap-2",-1286016734),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.items-center.icon-link","button.flex.items-center.icon-link",1041086423),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_categories_fn,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","toggle-categories-pane","keymap/toggle-categories-pane",2046175581)], 0))], null),frontend.ui.icon("fold")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.items-center.icon-link","button.flex.items-center.icon-link",1041086423),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.components.shortcut.refresh_shortcuts_list_BANG_,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","refresh-all","keymap/refresh-all",-941618309)], 0))], null),frontend.ui.icon("refresh")], null)], null);
} else {
return null;
}
});
frontend.components.shortcut.pane_controls = (function (){var render_fn__31744__auto__ = (function frontend$components$shortcut$pane_controls(q,set_q_BANG_,filter_key,set_filter_key_BANG_,keystroke,set_keystroke_BANG_,toggle_categories_fn,pill_counts,_STAR_search_ref){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__shortcut-page-x-pane-controls","div.cp__shortcut-page-x-pane-controls",383278499),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-toolbar-row","div.shortcut-toolbar-row",854429757),frontend.components.shortcut.pane_search_input(q,set_q_BANG_,set_keystroke_BANG_,_STAR_search_ref),frontend.components.shortcut.pane_keystroke_filter_control(keystroke,set_q_BANG_,set_keystroke_BANG_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-pills-row","div.shortcut-pills-row",-760227014),frontend.components.shortcut.pane_filter_pills(filter_key,set_filter_key_BANG_,pill_counts),frontend.components.shortcut.pane_secondary_actions(q,toggle_categories_fn)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$shortcut$pane_controls__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55542 = cljs.core.first(args__31746__auto__);
var G__55543 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55542,G__55543) : io.factorhouse.hsx.core.obj_get.call(null,G__55542,G__55543));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pane-controls","pane-controls",456804531,null),args__31746__auto__),frontend$components$shortcut$pane_controls,args__31746__auto__,null);
}
};
var frontend$components$shortcut$pane_controls = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55956__i = 0, G__55956__a = new Array(arguments.length -  0);
while (G__55956__i < G__55956__a.length) {G__55956__a[G__55956__i] = arguments[G__55956__i + 0]; ++G__55956__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55956__a,0,null);
} 
return frontend$components$shortcut$pane_controls__delegate.call(this,args__31746__auto__);};
frontend$components$shortcut$pane_controls.cljs$lang$maxFixedArity = 0;
frontend$components$shortcut$pane_controls.cljs$lang$applyTo = (function (arglist__55957){
var args__31746__auto__ = cljs.core.seq(arglist__55957);
return frontend$components$shortcut$pane_controls__delegate(args__31746__auto__);
});
frontend$components$shortcut$pane_controls.cljs$core$IFn$_invoke$arity$variadic = frontend$components$shortcut$pane_controls__delegate;
return frontend$components$shortcut$pane_controls;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55544 = comp__31745__auto__;
var G__55545 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55544,G__55545) : io.factorhouse.hsx.core.react_memo.call(null,G__55544,G__55545));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pane-controls");

return comp__31745__auto__;
})();
frontend.components.shortcut.shortcut_desc_label = (function (){var render_fn__31744__auto__ = (function frontend$components$shortcut$shortcut_desc_label(id,binding_map){
var temp__5825__auto__ = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = binding_map;
if(cljs.core.truth_(and__5140__auto____$1)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var id_SINGLEQUOTE_ = temp__5825__auto__;
var plugin_QMARK_ = clojure.string.starts_with_QMARK_(id_SINGLEQUOTE_,":plugin.");
var id_SINGLEQUOTE___$1 = ((plugin_QMARK_)?(function (){var G__55546 = id_SINGLEQUOTE_;
if((G__55546 == null)){
return null;
} else {
return clojure.string.replace(G__55546,"plugin.","");
}
})():id_SINGLEQUOTE_);
var plugin_id = ((plugin_QMARK_)?cljs.core.namespace(id):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE___$1)+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__55548 = new cljs.core.Keyword(null,"handler-id","handler-id",1160395333).cljs$core$IFn$_invoke$arity$1(binding_map);
if((G__55548 == null)){
return null;
} else {
return cljs.core.name(G__55548);
}
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.px-1","span.px-1",-2108616757),frontend.modules.shortcut.data_helper.get_shortcut_desc(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(binding_map,new cljs.core.Keyword(null,"id","id",-1388402092),id))], null),((plugin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),plugin_id], null):null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$shortcut$shortcut_desc_label__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55549 = cljs.core.first(args__31746__auto__);
var G__55550 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55549,G__55550) : io.factorhouse.hsx.core.obj_get.call(null,G__55549,G__55550));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"shortcut-desc-label","shortcut-desc-label",-1999492826,null),args__31746__auto__),frontend$components$shortcut$shortcut_desc_label,args__31746__auto__,null);
}
};
var frontend$components$shortcut$shortcut_desc_label = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55958__i = 0, G__55958__a = new Array(arguments.length -  0);
while (G__55958__i < G__55958__a.length) {G__55958__a[G__55958__i] = arguments[G__55958__i + 0]; ++G__55958__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55958__a,0,null);
} 
return frontend$components$shortcut$shortcut_desc_label__delegate.call(this,args__31746__auto__);};
frontend$components$shortcut$shortcut_desc_label.cljs$lang$maxFixedArity = 0;
frontend$components$shortcut$shortcut_desc_label.cljs$lang$applyTo = (function (arglist__55959){
var args__31746__auto__ = cljs.core.seq(arglist__55959);
return frontend$components$shortcut$shortcut_desc_label__delegate(args__31746__auto__);
});
frontend$components$shortcut$shortcut_desc_label.cljs$core$IFn$_invoke$arity$variadic = frontend$components$shortcut$shortcut_desc_label__delegate;
return frontend$components$shortcut$shortcut_desc_label;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55551 = comp__31745__auto__;
var G__55552 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55551,G__55552) : io.factorhouse.hsx.core.react_memo.call(null,G__55551,G__55552));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"shortcut-desc-label");

return comp__31745__auto__;
})();
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shortcut !== 'undefined') && (typeof frontend.components.shortcut._STAR_active_shortcut_id !== 'undefined')){
} else {
frontend.components.shortcut._STAR_active_shortcut_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.shortcut.open_customize_shortcut_dialog_BANG_ = (function frontend$components$shortcut$open_customize_shortcut_dialog_BANG_(anchor_el,id){
var temp__5825__auto__ = frontend.modules.shortcut.data_helper.shortcut_item(id);
if(cljs.core.truth_(temp__5825__auto__)){
var map__55555 = temp__5825__auto__;
var map__55555__$1 = cljs.core.__destructure_map(map__55555);
var m = map__55555__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55555__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55555__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.editable_binding_vec(binding);
var user_binding__$1 = (((user_binding == null))?null:frontend.components.shortcut.editable_binding_vec(user_binding));
var popup_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"customize-shortcut-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
var label = frontend.modules.shortcut.data_helper.get_shortcut_desc(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"id","id",-1388402092),id));
var close_fn_BANG_ = (function (){
cljs.core.reset_BANG_(frontend.components.shortcut._STAR_active_shortcut_id,null);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
});
var args = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,label,binding__$1,user_binding__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saved-cb","saved-cb",-1362182471),(function (){
return setTimeout(frontend.components.shortcut.refresh_shortcuts_list_BANG_,(500));
}),new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),close_fn_BANG_], null)], null);
var temp__5825__auto___55960__$1 = cljs.core.deref(frontend.components.shortcut._STAR_active_shortcut_id);
if(cljs.core.truth_(temp__5825__auto___55960__$1)){
var prev_id_55961 = temp__5825__auto___55960__$1;
var prev_popup_id_55962 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"customize-shortcut-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prev_id_55961))));
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(prev_popup_id_55962) : logseq.shui.ui.popup_hide_BANG_.call(null,prev_popup_id_55962));
} else {
}

cljs.core.reset_BANG_(frontend.components.shortcut._STAR_active_shortcut_id,id);

var G__55556 = anchor_el;
var G__55557 = (function (_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.components.shortcut.customize_shortcut_dialog_inner,args);
});
var G__55558 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),popup_id,new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true,new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),false,new cljs.core.Keyword(null,"on-after-hide","on-after-hide",-1040754229),(function (){
cljs.core.reset_BANG_(frontend.components.shortcut._STAR_active_shortcut_id,null);

var temp__5825__auto____$1 = (function (){var G__55559 = anchor_el;
if((G__55559 == null)){
return null;
} else {
return G__55559.closest("li.shortcut-row");
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var row = temp__5825__auto____$1;
return row.focus(({"focusVisible": true}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-0 w-auto",new cljs.core.Keyword(null,"collision-padding","collision-padding",1698110405),(12),new cljs.core.Keyword(null,"onOpenAutoFocus","onOpenAutoFocus",-99363202),(function (p1__55553_SHARP_){
return p1__55553_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"onCloseAutoFocus","onCloseAutoFocus",-349969117),(function (p1__55554_SHARP_){
return p1__55554_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (_){
return false;
}),new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),(function (e){
var temp__5825__auto____$1 = (function (){var G__55560 = e;
var G__55560__$1 = (((G__55560 == null))?null:G__55560.detail);
var G__55560__$2 = (((G__55560__$1 == null))?null:G__55560__$1.originalEvent);
if((G__55560__$2 == null)){
return null;
} else {
return G__55560__$2.target;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var target = temp__5825__auto____$1;
if(cljs.core.truth_(target.closest(".shortcut-row.active"))){
e.preventDefault();

return false;
} else {
return null;
}
} else {
return null;
}
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__55556,G__55557,G__55558) : logseq.shui.ui.popup_show_BANG_.call(null,G__55556,G__55557,G__55558));
} else {
return null;
}
});
frontend.components.shortcut.canonical_binding_set = (function frontend$components$shortcut$canonical_binding_set(binding){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.utils.canonicalize_binding),frontend.components.shortcut.editable_binding_vec(binding));
});
/**
 * Check if a binding vector matches the default binding for an action.
 * Uses canonical comparison to handle platform-dependent modifier aliases.
 */
frontend.components.shortcut.matches_default_binding_QMARK_ = (function frontend$components$shortcut$matches_default_binding_QMARK_(action_id,binding_vec){
var temp__5825__auto__ = frontend.modules.shortcut.data_helper.shortcut_item(action_id);
if(cljs.core.truth_(temp__5825__auto__)){
var map__55561 = temp__5825__auto__;
var map__55561__$1 = cljs.core.__destructure_map(map__55561);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55561__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.shortcut.canonical_binding_set(binding),frontend.components.shortcut.canonical_binding_set(binding_vec));
} else {
return null;
}
});
/**
 * Build a persist update that strips reset keys from a conflicting action.
 * 
 * Keys that are also on the peer's default binding are kept so shared
 * defaults (e.g. Backspace on :editor/backspace and :editor/delete-selection)
 * survive reset. User-customized collisions are still stripped.
 * 
 * Returns nil when the peer should keep its current binding.
 */
frontend.components.shortcut.reset_conflict_update = (function frontend$components$shortcut$reset_conflict_update(conflicting_id,their_binding,keys_to_strip){
var peer_default_keys = frontend.components.shortcut.canonical_binding_set(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.data_helper.shortcut_item(conflicting_id)));
var canonical_keys = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(peer_default_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.utils.canonicalize_binding,keys_to_strip)));
if(cljs.core.seq(canonical_keys)){
var filtered = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.contains_QMARK_(canonical_keys,frontend.modules.shortcut.utils.canonicalize_binding(b));
}),their_binding));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),conflicting_id,new cljs.core.Keyword(null,"new-binding","new-binding",195685460),((cljs.core.empty_QMARK_(filtered))?cljs.core.PersistentVector.EMPTY:(cljs.core.truth_(frontend.components.shortcut.matches_default_binding_QMARK_(conflicting_id,filtered))?null:filtered
))], null);
} else {
return null;
}
});
/**
 * Returns the value that should be stored for a shortcut customization.
 */
frontend.components.shortcut.persisted_binding_value = (function frontend$components$shortcut$persisted_binding_value(action_id,binding_vec){
var binding_vec__$1 = frontend.components.shortcut.editable_binding_vec(binding_vec);
if(cljs.core.truth_(frontend.components.shortcut.matches_default_binding_QMARK_(action_id,binding_vec__$1))){
return null;
} else {
return binding_vec__$1;
}
});
frontend.components.shortcut.customizable_shortcut_row_QMARK_ = (function frontend$components$shortcut$customizable_shortcut_row_QMARK_(id,_disabled_QMARK_){
return cljs.core.boolean$(id);
});
/**
 * Restore previous bindings for all affected actions.
 */
frontend.components.shortcut.execute_undo_BANG_ = (function frontend$components$shortcut$execute_undo_BANG_(snapshot){
frontend.modules.shortcut.core.persist_user_shortcuts_batch_BANG_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__55562){
var map__55563 = p__55562;
var map__55563__$1 = cljs.core.__destructure_map(map__55563);
var action_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55563__$1,new cljs.core.Keyword(null,"action-id","action-id",-1727958578));
var previous_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55563__$1,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_id,(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.sequential_QMARK_(previous_binding);
if(and__5140__auto__){
return frontend.components.shortcut.matches_default_binding_QMARK_(action_id,previous_binding);
} else {
return and__5140__auto__;
}
})())?null:previous_binding)], null);
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(snapshot)));

return setTimeout((function (){
frontend.modules.shortcut.core.refresh_BANG_();

return frontend.components.shortcut.refresh_shortcuts_list_BANG_();
}),(50));
});
/**
 * Extract human-readable action names from a key-conflicts map.
 */
frontend.components.shortcut.conflict_action_names = (function frontend$components$shortcut$conflict_action_names(key_conflicts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55564_SHARP_){
return (""+"\u201C"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55564_SHARP_)+"\u201D");
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function frontend$components$shortcut$conflict_action_names_$_iter__55565(s__55566){
return (new cljs.core.LazySeq(null,(function (){
var s__55566__$1 = s__55566;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55566__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__55573 = cljs.core.first(xs__6385__auto__);
var _g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55573,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55573,(1),null);
var iterys__5624__auto__ = ((function (s__55566__$1,vec__55573,_g,ks,xs__6385__auto__,temp__5825__auto__){
return (function frontend$components$shortcut$conflict_action_names_$_iter__55565_$_iter__55567(s__55568){
return (new cljs.core.LazySeq(null,((function (s__55566__$1,vec__55573,_g,ks,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__55568__$1 = s__55568;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__55568__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var v = cljs.core.first(xs__6385__auto____$1);
var conflicts_ids_map = cljs.core.second(v);
var iterys__5624__auto__ = ((function (s__55568__$1,s__55566__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55573,_g,ks,xs__6385__auto__,temp__5825__auto__){
return (function frontend$components$shortcut$conflict_action_names_$_iter__55565_$_iter__55567_$_iter__55569(s__55570){
return (new cljs.core.LazySeq(null,((function (s__55568__$1,s__55566__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55573,_g,ks,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__55570__$1 = s__55570;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55570__$1);
if(temp__5825__auto____$2){
var s__55570__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55570__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55570__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55572 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55571 = (0);
while(true){
if((i__55571 < size__5627__auto__)){
var vec__55576 = cljs.core._nth(c__5626__auto__,i__55571);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55576,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55576,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if(cljs.core.truth_(m)){
cljs.core.chunk_append(b__55572,frontend.modules.shortcut.data_helper.get_shortcut_desc(m));

var G__55963 = (i__55571 + (1));
i__55571 = G__55963;
continue;
} else {
var G__55964 = (i__55571 + (1));
i__55571 = G__55964;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55572),frontend$components$shortcut$conflict_action_names_$_iter__55565_$_iter__55567_$_iter__55569(cljs.core.chunk_rest(s__55570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55572),null);
}
} else {
var vec__55579 = cljs.core.first(s__55570__$2);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55579,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55579,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if(cljs.core.truth_(m)){
return cljs.core.cons(frontend.modules.shortcut.data_helper.get_shortcut_desc(m),frontend$components$shortcut$conflict_action_names_$_iter__55565_$_iter__55567_$_iter__55569(cljs.core.rest(s__55570__$2)));
} else {
var G__55965 = cljs.core.rest(s__55570__$2);
s__55570__$1 = G__55965;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__55568__$1,s__55566__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55573,_g,ks,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__55568__$1,s__55566__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55573,_g,ks,xs__6385__auto__,temp__5825__auto__))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(conflicts_ids_map));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$conflict_action_names_$_iter__55565_$_iter__55567(cljs.core.rest(s__55568__$1)));
} else {
var G__55966 = cljs.core.rest(s__55568__$1);
s__55568__$1 = G__55966;
continue;
}
} else {
return null;
}
break;
}
});})(s__55566__$1,vec__55573,_g,ks,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__55566__$1,vec__55573,_g,ks,xs__6385__auto__,temp__5825__auto__))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.vals(ks)));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$conflict_action_names_$_iter__55565(cljs.core.rest(s__55566__$1)));
} else {
var G__55967 = cljs.core.rest(s__55566__$1);
s__55566__$1 = G__55967;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(key_conflicts);
})())));
});
/**
 * Extract [{:binding display-str :name action-name} ...] from a prefix conflicts map.
 */
frontend.components.shortcut.prefix_conflict_details = (function frontend$components$shortcut$prefix_conflict_details(key_conflicts){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function frontend$components$shortcut$prefix_conflict_details_$_iter__55582(s__55583){
return (new cljs.core.LazySeq(null,(function (){
var s__55583__$1 = s__55583;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55583__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__55590 = cljs.core.first(xs__6385__auto__);
var _g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55590,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55590,(1),null);
var iterys__5624__auto__ = ((function (s__55583__$1,vec__55590,_g,ks,xs__6385__auto__,temp__5825__auto__){
return (function frontend$components$shortcut$prefix_conflict_details_$_iter__55582_$_iter__55584(s__55585){
return (new cljs.core.LazySeq(null,((function (s__55583__$1,vec__55590,_g,ks,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__55585__$1 = s__55585;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__55585__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var vec__55593 = cljs.core.first(xs__6385__auto____$1);
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55593,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55593,(1),null);
var display_binding = cljs.core.first(v);
var conflicts_ids_map = cljs.core.second(v);
var iterys__5624__auto__ = ((function (s__55585__$1,s__55583__$1,display_binding,conflicts_ids_map,vec__55593,_k,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55590,_g,ks,xs__6385__auto__,temp__5825__auto__){
return (function frontend$components$shortcut$prefix_conflict_details_$_iter__55582_$_iter__55584_$_iter__55586(s__55587){
return (new cljs.core.LazySeq(null,((function (s__55585__$1,s__55583__$1,display_binding,conflicts_ids_map,vec__55593,_k,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55590,_g,ks,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__55587__$1 = s__55587;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55587__$1);
if(temp__5825__auto____$2){
var s__55587__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55587__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55587__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55589 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55588 = (0);
while(true){
if((i__55588 < size__5627__auto__)){
var vec__55596 = cljs.core._nth(c__5626__auto__,i__55588);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55596,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55596,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if(cljs.core.truth_(m)){
cljs.core.chunk_append(b__55589,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding","binding",539932593),display_binding,new cljs.core.Keyword(null,"name","name",1843675177),frontend.modules.shortcut.data_helper.get_shortcut_desc(m)], null));

var G__55968 = (i__55588 + (1));
i__55588 = G__55968;
continue;
} else {
var G__55969 = (i__55588 + (1));
i__55588 = G__55969;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55589),frontend$components$shortcut$prefix_conflict_details_$_iter__55582_$_iter__55584_$_iter__55586(cljs.core.chunk_rest(s__55587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55589),null);
}
} else {
var vec__55599 = cljs.core.first(s__55587__$2);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55599,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55599,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if(cljs.core.truth_(m)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding","binding",539932593),display_binding,new cljs.core.Keyword(null,"name","name",1843675177),frontend.modules.shortcut.data_helper.get_shortcut_desc(m)], null),frontend$components$shortcut$prefix_conflict_details_$_iter__55582_$_iter__55584_$_iter__55586(cljs.core.rest(s__55587__$2)));
} else {
var G__55970 = cljs.core.rest(s__55587__$2);
s__55587__$1 = G__55970;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__55585__$1,s__55583__$1,display_binding,conflicts_ids_map,vec__55593,_k,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55590,_g,ks,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__55585__$1,s__55583__$1,display_binding,conflicts_ids_map,vec__55593,_k,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55590,_g,ks,xs__6385__auto__,temp__5825__auto__))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(conflicts_ids_map));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$prefix_conflict_details_$_iter__55582_$_iter__55584(cljs.core.rest(s__55585__$1)));
} else {
var G__55971 = cljs.core.rest(s__55585__$1);
s__55585__$1 = G__55971;
continue;
}
} else {
return null;
}
break;
}
});})(s__55583__$1,vec__55590,_g,ks,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__55583__$1,vec__55590,_g,ks,xs__6385__auto__,temp__5825__auto__))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(ks));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$prefix_conflict_details_$_iter__55582(cljs.core.rest(s__55583__$1)));
} else {
var G__55972 = cljs.core.rest(s__55583__$1);
s__55583__$1 = G__55972;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(key_conflicts);
})()));
});
/**
 * Render a chord binding as compact keycaps with visual stroke grouping.
 */
frontend.components.shortcut.chord_keycap = (function frontend$components$shortcut$chord_keycap(binding_str){
var strokes = clojure.string.split.cljs$core$IFn$_invoke$arity$2(binding_str,/ /);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strokes),(1))){
return logseq.shui.ui.shortcut(cljs.core.first(strokes),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prefix-chord","div.prefix-chord",695524836),(function (){var iter__5628__auto__ = (function frontend$components$shortcut$chord_keycap_$_iter__55602(s__55603){
return (new cljs.core.LazySeq(null,(function (){
var s__55603__$1 = s__55603;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55603__$1);
if(temp__5825__auto__){
var s__55603__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55603__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55603__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55605 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55604 = (0);
while(true){
if((i__55604 < size__5627__auto__)){
var vec__55606 = cljs.core._nth(c__5626__auto__,i__55604);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55606,(0),null);
var stroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55606,(1),null);
cljs.core.chunk_append(b__55605,logseq.shui.ui.shortcut(stroke,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null)));

var G__55973 = (i__55604 + (1));
i__55604 = G__55973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55605),frontend$components$shortcut$chord_keycap_$_iter__55602(cljs.core.chunk_rest(s__55603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55605),null);
}
} else {
var vec__55609 = cljs.core.first(s__55603__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55609,(0),null);
var stroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55609,(1),null);
return cljs.core.cons(logseq.shui.ui.shortcut(stroke,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null)),frontend$components$shortcut$chord_keycap_$_iter__55602(cljs.core.rest(s__55603__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,strokes));
})()], null);
}
});
frontend.components.shortcut.feedback_inline_label = (function frontend$components$shortcut$feedback_inline_label(template,replacements){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$2(template,replacements));
});
/**
 * Render content for a prefix-conflict amber banner with inline keycaps.
 * n=1: keycap + quoted name inline. n=2-3: vertical list with keycap + name.
 * n≥4: count only.
 */
frontend.components.shortcut.prefix_conflict_label = (function frontend$components$shortcut$prefix_conflict_label(details){
var n = cljs.core.count(details);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
var map__55612 = cljs.core.first(details);
var map__55612__$1 = cljs.core.__destructure_map(map__55612);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55612__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-feedback-inline","span.shortcut-feedback-inline",158386828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","deactivates-chord","keymap/deactivates-chord",-1635546892)], 0))], null),frontend.components.shortcut.chord_keycap(binding),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-feedback-name","span.shortcut-feedback-name",516430041),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u201C")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u201D"))], null)], null);
} else {
if((n <= (3))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prefix-conflict-list","div.prefix-conflict-list",-1741450830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","deactivates-chord","keymap/deactivates-chord",-1635546892)], 0))], null),(function (){var iter__5628__auto__ = (function frontend$components$shortcut$prefix_conflict_label_$_iter__55613(s__55614){
return (new cljs.core.LazySeq(null,(function (){
var s__55614__$1 = s__55614;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55614__$1);
if(temp__5825__auto__){
var s__55614__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55614__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55614__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55616 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55615 = (0);
while(true){
if((i__55615 < size__5627__auto__)){
var vec__55617 = cljs.core._nth(c__5626__auto__,i__55615);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55617,(0),null);
var map__55620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55617,(1),null);
var map__55620__$1 = cljs.core.__destructure_map(map__55620);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55620__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55620__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__55616,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prefix-conflict-item","div.prefix-conflict-item",-373452542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"pc-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null),frontend.components.shortcut.chord_keycap(binding),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-feedback-name","span.shortcut-feedback-name",516430041),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u201C")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u201D"))], null)], null));

var G__55974 = (i__55615 + (1));
i__55615 = G__55974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55616),frontend$components$shortcut$prefix_conflict_label_$_iter__55613(cljs.core.chunk_rest(s__55614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55616),null);
}
} else {
var vec__55621 = cljs.core.first(s__55614__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55621,(0),null);
var map__55624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55621,(1),null);
var map__55624__$1 = cljs.core.__destructure_map(map__55624);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55624__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55624__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prefix-conflict-item","div.prefix-conflict-item",-373452542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"pc-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null),frontend.components.shortcut.chord_keycap(binding),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-feedback-name","span.shortcut-feedback-name",516430041),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u201C")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u201D"))], null)], null),frontend$components$shortcut$prefix_conflict_label_$_iter__55613(cljs.core.rest(s__55614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,details));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","deactivates-chords","keymap/deactivates-chords",860473925),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))], 0))], null);

}
}
});
/**
 * Compute the data needed to reassign a conflicting shortcut binding.
 * Pure function — reads current bindings via dh but performs no mutations.
 * 
 * Returns nil if conflicts or keystroke are empty, otherwise a map with:
 * :new-binding, :accepted-key, :undo-entries, :conflict-updates, :conflict-names
 */
frontend.components.shortcut.compute_override_plan = (function frontend$components$shortcut$compute_override_plan(action_id,conflicts,keystroke,current_binding){
if(((cljs.core.seq(conflicts)) && ((!(clojure.string.blank_QMARK_(keystroke)))))){
var accepted_key = keystroke;
var new_binding = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_binding,accepted_key);
var canonical_accepted = frontend.modules.shortcut.utils.canonicalize_binding(accepted_key);
var undo_entries = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),action_id,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),current_binding], null)], null),(function (){var iter__5628__auto__ = (function frontend$components$shortcut$compute_override_plan_$_iter__55626(s__55627){
return (new cljs.core.LazySeq(null,(function (){
var s__55627__$1 = s__55627;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55627__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__55634 = cljs.core.first(xs__6385__auto__);
var _g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55634,(0),null);
var kss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55634,(1),null);
var iterys__5624__auto__ = ((function (s__55627__$1,vec__55634,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted){
return (function frontend$components$shortcut$compute_override_plan_$_iter__55626_$_iter__55628(s__55629){
return (new cljs.core.LazySeq(null,((function (s__55627__$1,vec__55634,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted){
return (function (){
var s__55629__$1 = s__55629;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__55629__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var v = cljs.core.first(xs__6385__auto____$1);
var conflicts_ids_map = cljs.core.second(v);
var iterys__5624__auto__ = ((function (s__55629__$1,s__55627__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55634,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted){
return (function frontend$components$shortcut$compute_override_plan_$_iter__55626_$_iter__55628_$_iter__55630(s__55631){
return (new cljs.core.LazySeq(null,((function (s__55629__$1,s__55627__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55634,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted){
return (function (){
var s__55631__$1 = s__55631;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55631__$1);
if(temp__5825__auto____$2){
var s__55631__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55631__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55631__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55633 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55632 = (0);
while(true){
if((i__55632 < size__5627__auto__)){
var vec__55637 = cljs.core._nth(c__5626__auto__,i__55632);
var conflicting_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55637,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55637,(1),null);
cljs.core.chunk_append(b__55633,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),conflicting_id,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),frontend.modules.shortcut.data_helper.shortcut_binding(conflicting_id)], null));

var G__55975 = (i__55632 + (1));
i__55632 = G__55975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55633),frontend$components$shortcut$compute_override_plan_$_iter__55626_$_iter__55628_$_iter__55630(cljs.core.chunk_rest(s__55631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55633),null);
}
} else {
var vec__55640 = cljs.core.first(s__55631__$2);
var conflicting_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55640,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55640,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),conflicting_id,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),frontend.modules.shortcut.data_helper.shortcut_binding(conflicting_id)], null),frontend$components$shortcut$compute_override_plan_$_iter__55626_$_iter__55628_$_iter__55630(cljs.core.rest(s__55631__$2)));
}
} else {
return null;
}
break;
}
});})(s__55629__$1,s__55627__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55634,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted))
,null,null));
});})(s__55629__$1,s__55627__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55634,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(conflicts_ids_map));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$compute_override_plan_$_iter__55626_$_iter__55628(cljs.core.rest(s__55629__$1)));
} else {
var G__55976 = cljs.core.rest(s__55629__$1);
s__55629__$1 = G__55976;
continue;
}
} else {
return null;
}
break;
}
});})(s__55627__$1,vec__55634,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted))
,null,null));
});})(s__55627__$1,vec__55634,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.vals(kss)));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$compute_override_plan_$_iter__55626(cljs.core.rest(s__55627__$1)));
} else {
var G__55977 = cljs.core.rest(s__55627__$1);
s__55627__$1 = G__55977;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(conflicts);
})());
var conflict_updates = (function (){var iter__5628__auto__ = (function frontend$components$shortcut$compute_override_plan_$_iter__55643(s__55644){
return (new cljs.core.LazySeq(null,(function (){
var s__55644__$1 = s__55644;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55644__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__55651 = cljs.core.first(xs__6385__auto__);
var _g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55651,(0),null);
var kss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55651,(1),null);
var iterys__5624__auto__ = ((function (s__55644__$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries){
return (function frontend$components$shortcut$compute_override_plan_$_iter__55643_$_iter__55645(s__55646){
return (new cljs.core.LazySeq(null,((function (s__55644__$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries){
return (function (){
var s__55646__$1 = s__55646;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__55646__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var v = cljs.core.first(xs__6385__auto____$1);
var conflicts_ids_map = cljs.core.second(v);
var iterys__5624__auto__ = ((function (s__55646__$1,s__55644__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries){
return (function frontend$components$shortcut$compute_override_plan_$_iter__55643_$_iter__55645_$_iter__55647(s__55648){
return (new cljs.core.LazySeq(null,((function (s__55646__$1,s__55644__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries){
return (function (){
var s__55648__$1 = s__55648;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55648__$1);
if(temp__5825__auto____$2){
var s__55648__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55648__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55648__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55650 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55649 = (0);
while(true){
if((i__55649 < size__5627__auto__)){
var vec__55654 = cljs.core._nth(c__5626__auto__,i__55649);
var conflicting_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55654,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55654,(1),null);
cljs.core.chunk_append(b__55650,(function (){var their_binding = frontend.modules.shortcut.data_helper.shortcut_binding(conflicting_id);
var filtered = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__55649,s__55646__$1,s__55644__$1,their_binding,vec__55654,conflicting_id,_handler,c__5626__auto__,size__5627__auto__,b__55650,s__55648__$2,temp__5825__auto____$2,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries){
return (function (p1__55625_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.utils.canonicalize_binding(p1__55625_SHARP_),canonical_accepted);
});})(i__55649,s__55646__$1,s__55644__$1,their_binding,vec__55654,conflicting_id,_handler,c__5626__auto__,size__5627__auto__,b__55650,s__55648__$2,temp__5825__auto____$2,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries))
,their_binding));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),conflicting_id,new cljs.core.Keyword(null,"new-binding","new-binding",195685460),((cljs.core.empty_QMARK_(filtered))?cljs.core.PersistentVector.EMPTY:(cljs.core.truth_(frontend.components.shortcut.matches_default_binding_QMARK_(conflicting_id,filtered))?null:filtered
))], null);
})());

var G__55978 = (i__55649 + (1));
i__55649 = G__55978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55650),frontend$components$shortcut$compute_override_plan_$_iter__55643_$_iter__55645_$_iter__55647(cljs.core.chunk_rest(s__55648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55650),null);
}
} else {
var vec__55657 = cljs.core.first(s__55648__$2);
var conflicting_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(1),null);
return cljs.core.cons((function (){var their_binding = frontend.modules.shortcut.data_helper.shortcut_binding(conflicting_id);
var filtered = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (s__55646__$1,s__55644__$1,their_binding,vec__55657,conflicting_id,_handler,s__55648__$2,temp__5825__auto____$2,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries){
return (function (p1__55625_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.utils.canonicalize_binding(p1__55625_SHARP_),canonical_accepted);
});})(s__55646__$1,s__55644__$1,their_binding,vec__55657,conflicting_id,_handler,s__55648__$2,temp__5825__auto____$2,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries))
,their_binding));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),conflicting_id,new cljs.core.Keyword(null,"new-binding","new-binding",195685460),((cljs.core.empty_QMARK_(filtered))?cljs.core.PersistentVector.EMPTY:(cljs.core.truth_(frontend.components.shortcut.matches_default_binding_QMARK_(conflicting_id,filtered))?null:filtered
))], null);
})(),frontend$components$shortcut$compute_override_plan_$_iter__55643_$_iter__55645_$_iter__55647(cljs.core.rest(s__55648__$2)));
}
} else {
return null;
}
break;
}
});})(s__55646__$1,s__55644__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries))
,null,null));
});})(s__55646__$1,s__55644__$1,conflicts_ids_map,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(conflicts_ids_map));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$compute_override_plan_$_iter__55643_$_iter__55645(cljs.core.rest(s__55646__$1)));
} else {
var G__55979 = cljs.core.rest(s__55646__$1);
s__55646__$1 = G__55979;
continue;
}
} else {
return null;
}
break;
}
});})(s__55644__$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries))
,null,null));
});})(s__55644__$1,vec__55651,_g,kss,xs__6385__auto__,temp__5825__auto__,accepted_key,new_binding,canonical_accepted,undo_entries))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.vals(kss)));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$compute_override_plan_$_iter__55643(cljs.core.rest(s__55644__$1)));
} else {
var G__55980 = cljs.core.rest(s__55644__$1);
s__55644__$1 = G__55980;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(conflicts);
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"new-binding","new-binding",195685460),new_binding,new cljs.core.Keyword(null,"accepted-key","accepted-key",336831574),accepted_key,new cljs.core.Keyword(null,"undo-entries","undo-entries",261916517),undo_entries,new cljs.core.Keyword(null,"conflict-updates","conflict-updates",1946503363),conflict_updates,new cljs.core.Keyword(null,"conflict-names","conflict-names",1594798202),frontend.components.shortcut.conflict_action_names(conflicts)], null);
} else {
return null;
}
});
/**
 * Compute conflict-stripping data needed when resetting a shortcut to default.
 * For each key in the default binding, checks if another action currently owns
 * that key and plans to strip user-customized collisions.
 * 
 * Shared default keys are left on peer commands. Returns nil when nothing
 * should be stripped, otherwise a map with :undo-entries and :conflict-updates.
 */
frontend.components.shortcut.compute_reset_plan = (function frontend$components$shortcut$compute_reset_plan(action_id,handler_id,default_binding,current_binding){
var all_conflicts = (function (){var iter__5628__auto__ = (function frontend$components$shortcut$compute_reset_plan_$_iter__55660(s__55661){
return (new cljs.core.LazySeq(null,(function (){
var s__55661__$1 = s__55661;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55661__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var b = cljs.core.first(xs__6385__auto__);
if(typeof b === 'string'){
var raw_conflicts = frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3(b,handler_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exclude-ids","exclude-ids",7408318),cljs.core.PersistentHashSet.createAsIfByAssoc([action_id]),new cljs.core.Keyword(null,"group-global?","group-global?",188550543),true], null));
var conflicts = new cljs.core.Keyword(null,"exact","exact",1438022323).cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.data_helper.partition_conflicts_by_type(raw_conflicts,b));
if(cljs.core.seq(conflicts)){
var iterys__5624__auto__ = ((function (s__55661__$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__){
return (function frontend$components$shortcut$compute_reset_plan_$_iter__55660_$_iter__55662(s__55663){
return (new cljs.core.LazySeq(null,((function (s__55661__$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__55663__$1 = s__55663;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__55663__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var vec__55670 = cljs.core.first(xs__6385__auto____$1);
var _g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55670,(0),null);
var kss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55670,(1),null);
var iterys__5624__auto__ = ((function (s__55663__$1,s__55661__$1,vec__55670,_g,kss,xs__6385__auto____$1,temp__5825__auto____$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__){
return (function frontend$components$shortcut$compute_reset_plan_$_iter__55660_$_iter__55662_$_iter__55664(s__55665){
return (new cljs.core.LazySeq(null,((function (s__55663__$1,s__55661__$1,vec__55670,_g,kss,xs__6385__auto____$1,temp__5825__auto____$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__55665__$1 = s__55665;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55665__$1);
if(temp__5825__auto____$2){
var xs__6385__auto____$2 = temp__5825__auto____$2;
var v = cljs.core.first(xs__6385__auto____$2);
var conflicts_ids_map = cljs.core.second(v);
var iterys__5624__auto__ = ((function (s__55665__$1,s__55663__$1,s__55661__$1,conflicts_ids_map,v,xs__6385__auto____$2,temp__5825__auto____$2,vec__55670,_g,kss,xs__6385__auto____$1,temp__5825__auto____$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__){
return (function frontend$components$shortcut$compute_reset_plan_$_iter__55660_$_iter__55662_$_iter__55664_$_iter__55666(s__55667){
return (new cljs.core.LazySeq(null,((function (s__55665__$1,s__55663__$1,s__55661__$1,conflicts_ids_map,v,xs__6385__auto____$2,temp__5825__auto____$2,vec__55670,_g,kss,xs__6385__auto____$1,temp__5825__auto____$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__55667__$1 = s__55667;
while(true){
var temp__5825__auto____$3 = cljs.core.seq(s__55667__$1);
if(temp__5825__auto____$3){
var s__55667__$2 = temp__5825__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55667__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55667__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55669 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55668 = (0);
while(true){
if((i__55668 < size__5627__auto__)){
var vec__55673 = cljs.core._nth(c__5626__auto__,i__55668);
var conflicting_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55673,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55673,(1),null);
cljs.core.chunk_append(b__55669,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conflicting-id","conflicting-id",-1070750322),conflicting_id,new cljs.core.Keyword(null,"accepted-key","accepted-key",336831574),b], null));

var G__55981 = (i__55668 + (1));
i__55668 = G__55981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55669),frontend$components$shortcut$compute_reset_plan_$_iter__55660_$_iter__55662_$_iter__55664_$_iter__55666(cljs.core.chunk_rest(s__55667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55669),null);
}
} else {
var vec__55676 = cljs.core.first(s__55667__$2);
var conflicting_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55676,(0),null);
var _handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55676,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conflicting-id","conflicting-id",-1070750322),conflicting_id,new cljs.core.Keyword(null,"accepted-key","accepted-key",336831574),b], null),frontend$components$shortcut$compute_reset_plan_$_iter__55660_$_iter__55662_$_iter__55664_$_iter__55666(cljs.core.rest(s__55667__$2)));
}
} else {
return null;
}
break;
}
});})(s__55665__$1,s__55663__$1,s__55661__$1,conflicts_ids_map,v,xs__6385__auto____$2,temp__5825__auto____$2,vec__55670,_g,kss,xs__6385__auto____$1,temp__5825__auto____$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__55665__$1,s__55663__$1,s__55661__$1,conflicts_ids_map,v,xs__6385__auto____$2,temp__5825__auto____$2,vec__55670,_g,kss,xs__6385__auto____$1,temp__5825__auto____$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(conflicts_ids_map));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$compute_reset_plan_$_iter__55660_$_iter__55662_$_iter__55664(cljs.core.rest(s__55665__$1)));
} else {
var G__55982 = cljs.core.rest(s__55665__$1);
s__55665__$1 = G__55982;
continue;
}
} else {
return null;
}
break;
}
});})(s__55663__$1,s__55661__$1,vec__55670,_g,kss,xs__6385__auto____$1,temp__5825__auto____$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__55663__$1,s__55661__$1,vec__55670,_g,kss,xs__6385__auto____$1,temp__5825__auto____$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.vals(kss)));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$compute_reset_plan_$_iter__55660_$_iter__55662(cljs.core.rest(s__55663__$1)));
} else {
var G__55983 = cljs.core.rest(s__55663__$1);
s__55663__$1 = G__55983;
continue;
}
} else {
return null;
}
break;
}
});})(s__55661__$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__55661__$1,raw_conflicts,conflicts,b,xs__6385__auto__,temp__5825__auto__))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(conflicts));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,frontend$components$shortcut$compute_reset_plan_$_iter__55660(cljs.core.rest(s__55661__$1)));
} else {
var G__55984 = cljs.core.rest(s__55661__$1);
s__55661__$1 = G__55984;
continue;
}
} else {
var G__55985 = cljs.core.rest(s__55661__$1);
s__55661__$1 = G__55985;
continue;
}
} else {
var G__55986 = cljs.core.rest(s__55661__$1);
s__55661__$1 = G__55986;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(default_binding);
})();
var conflicts_by_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__55679){
var map__55680 = p__55679;
var map__55680__$1 = cljs.core.__destructure_map(map__55680);
var conflicting_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55680__$1,new cljs.core.Keyword(null,"conflicting-id","conflicting-id",-1070750322));
var accepted_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55680__$1,new cljs.core.Keyword(null,"accepted-key","accepted-key",336831574));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,conflicting_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),accepted_key);
}),cljs.core.PersistentArrayMap.EMPTY,all_conflicts);
var conflict_updates = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__55681){
var vec__55682 = p__55681;
var conflicting_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55682,(0),null);
var keys_to_strip = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55682,(1),null);
return frontend.components.shortcut.reset_conflict_update(conflicting_id,frontend.modules.shortcut.data_helper.shortcut_binding(conflicting_id),keys_to_strip);
}),conflicts_by_id);
if(cljs.core.seq(conflict_updates)){
var undo_entries = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),action_id,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),current_binding], null)], null),(function (){var iter__5628__auto__ = (function frontend$components$shortcut$compute_reset_plan_$_iter__55685(s__55686){
return (new cljs.core.LazySeq(null,(function (){
var s__55686__$1 = s__55686;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55686__$1);
if(temp__5825__auto__){
var s__55686__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55686__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55686__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55688 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55687 = (0);
while(true){
if((i__55687 < size__5627__auto__)){
var map__55689 = cljs.core._nth(c__5626__auto__,i__55687);
var map__55689__$1 = cljs.core.__destructure_map(map__55689);
var conflicting_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55689__$1,new cljs.core.Keyword(null,"action-id","action-id",-1727958578));
cljs.core.chunk_append(b__55688,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),conflicting_id,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),frontend.modules.shortcut.data_helper.shortcut_binding(conflicting_id)], null));

var G__55987 = (i__55687 + (1));
i__55687 = G__55987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55688),frontend$components$shortcut$compute_reset_plan_$_iter__55685(cljs.core.chunk_rest(s__55686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55688),null);
}
} else {
var map__55690 = cljs.core.first(s__55686__$2);
var map__55690__$1 = cljs.core.__destructure_map(map__55690);
var conflicting_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55690__$1,new cljs.core.Keyword(null,"action-id","action-id",-1727958578));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),conflicting_id,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),frontend.modules.shortcut.data_helper.shortcut_binding(conflicting_id)], null),frontend$components$shortcut$compute_reset_plan_$_iter__55685(cljs.core.rest(s__55686__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(conflict_updates);
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"undo-entries","undo-entries",261916517),undo_entries,new cljs.core.Keyword(null,"conflict-updates","conflict-updates",1946503363),conflict_updates], null);
} else {
return null;
}
});
/**
 * Key handler for the customize shortcut dialog, extracted for testability.
 * ctx is a map of refs, setters, and callbacks — see destructuring below.
 */
frontend.components.shortcut.customize_key_handler = (function frontend$components$shortcut$customize_key_handler(p__55692,e){
var map__55693 = p__55692;
var map__55693__$1 = cljs.core.__destructure_map(map__55693);
var _STAR_current_binding_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"*current-binding-ref","*current-binding-ref",-1295403847));
var set_undo_snapshot_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"set-undo-snapshot!","set-undo-snapshot!",-744144709));
var persist_binding_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"persist-binding!","persist-binding!",-1585098980));
var override_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"override-fn!","override-fn!",48868701));
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var set_keystroke_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"set-keystroke!","set-keystroke!",1235719393));
var set_key_conflicts_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"set-key-conflicts!","set-key-conflicts!",1191298854));
var set_current_binding_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"set-current-binding!","set-current-binding!",-2012119188));
var _STAR_rec_state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"*rec-state-ref","*rec-state-ref",-1065631636));
var _STAR_keystroke_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"*keystroke-ref","*keystroke-ref",1637113037));
var action_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"action-id","action-id",-1727958578));
var cancel_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"cancel-fn!","cancel-fn!",2091496754));
var set_rec_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"set-rec-state!","set-rec-state!",2084862612));
e.preventDefault();

var state = logseq.shui.hooks.deref(_STAR_rec_state_ref);
var key_code = e.keyCode;
var is_esc_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(27));
var is_backspace_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(8));
var is_cmd_enter_QMARK_ = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(13));
if(and__5140__auto__){
var or__5142__auto__ = e.metaKey;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return e.ctrlKey;
}
} else {
return and__5140__auto__;
}
})();
if(is_esc_QMARK_){
e.stopPropagation();

var G__55694 = state;
var G__55694__$1 = (((G__55694 instanceof cljs.core.Keyword))?G__55694.fqn:null);
switch (G__55694__$1) {
case "idle":
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

break;
case "accepted":
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

break;
case "esc-hint":
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

break;
case "removed":
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

break;
case "reset":
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

break;
case "dismissing":
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

break;
case "recording":
(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));

(set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_key_conflicts_BANG_.call(null,null));

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"esc-hint","esc-hint",-1370021852)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"esc-hint","esc-hint",-1370021852)));

break;
case "conflict-cross":
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

break;
case "conflict-same":
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

break;
default:
return null;

}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = is_backspace_QMARK_;
if(and__5140__auto__){
var fexpr__55695 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null], null), null);
return (fexpr__55695.cljs$core$IFn$_invoke$arity$1 ? fexpr__55695.cljs$core$IFn$_invoke$arity$1(state) : fexpr__55695.call(null,state));
} else {
return and__5140__auto__;
}
})())){
return (cancel_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? cancel_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : cancel_fn_BANG_.call(null));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = is_backspace_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = (function (){var fexpr__55696 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle","idle",-2007156861),null,new cljs.core.Keyword(null,"reset","reset",-800929946),null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374),null,new cljs.core.Keyword(null,"dismissing","dismissing",-1141658602),null,new cljs.core.Keyword(null,"removed","removed",609626430),null], null), null);
return (fexpr__55696.cljs$core$IFn$_invoke$arity$1 ? fexpr__55696.cljs$core$IFn$_invoke$arity$1(state) : fexpr__55696.call(null,state));
})();
if(cljs.core.truth_(and__5140__auto____$1)){
return clojure.string.blank_QMARK_(logseq.shui.hooks.deref(_STAR_keystroke_ref));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var cur_binding = logseq.shui.hooks.deref(_STAR_current_binding_ref);
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cur_binding))){
var new_binding = cljs.core.vec(cljs.core.butlast(cur_binding));
var undo_entries = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),action_id,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),cur_binding], null)], null);
(set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(new_binding) : set_current_binding_BANG_.call(null,new_binding));

(persist_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? persist_binding_BANG_.cljs$core$IFn$_invoke$arity$1(new_binding) : persist_binding_BANG_.call(null,new_binding));

var G__55697_55989 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),undo_entries], null);
(set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1(G__55697_55989) : set_undo_snapshot_BANG_.call(null,G__55697_55989));

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"removed","removed",609626430)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"removed","removed",609626430)));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = is_cmd_enter_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078));
} else {
return and__5140__auto__;
}
})())){
return (override_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? override_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : override_fn_BANG_.call(null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078))){
return null;
} else {
if(cljs.core.truth_((function (){var fexpr__55698 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"idle","idle",-2007156861),null,new cljs.core.Keyword(null,"esc-hint","esc-hint",-1370021852),null,new cljs.core.Keyword(null,"reset","reset",-800929946),null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374),null,new cljs.core.Keyword(null,"dismissing","dismissing",-1141658602),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null,new cljs.core.Keyword(null,"removed","removed",609626430),null], null), null);
return (fexpr__55698.cljs$core$IFn$_invoke$arity$1 ? fexpr__55698.cljs$core$IFn$_invoke$arity$1(state) : fexpr__55698.call(null,state));
})())){
var temp__5825__auto__ = frontend.modules.shortcut.core.keyname(e);
if(cljs.core.truth_(temp__5825__auto__)){
var kn = temp__5825__auto__;
(set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"recording","recording",322996097)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"recording","recording",322996097)));

var G__55699 = frontend.util.trim_safe(kn);
return (set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1(G__55699) : set_keystroke_BANG_.call(null,G__55699));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"recording","recording",322996097))){
var temp__5825__auto__ = frontend.modules.shortcut.core.keyname(e);
if(cljs.core.truth_(temp__5825__auto__)){
var kn = temp__5825__auto__;
var cur = logseq.shui.hooks.deref(_STAR_keystroke_ref);
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(cur),/ /);
var at_limit_QMARK_ = ((cljs.core.seq(cljs.core.first(parts))) && ((cljs.core.count(parts) >= frontend.components.shortcut.max_key_sequence_length)));
if(at_limit_QMARK_){
return null;
} else {
(set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_key_conflicts_BANG_.call(null,null));

var G__55700 = (function (p1__55691_SHARP_){
return frontend.util.trim_safe((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55691_SHARP_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kn)));
});
return (set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1(G__55700) : set_keystroke_BANG_.call(null,G__55700));
}
} else {
return null;
}
} else {
return null;
}
}
}
}
}
}
}
});
/**
 * user-binding: empty vector is for the unset state, nil is for the default binding
 */
frontend.components.shortcut.customize_shortcut_dialog_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$shortcut$customize_shortcut_dialog_inner(k,action_name,binding,user_binding,p__55702){
var map__55703 = p__55702;
var map__55703__$1 = cljs.core.__destructure_map(map__55703);
var saved_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55703__$1,new cljs.core.Keyword(null,"saved-cb","saved-cb",-1362182471));
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55703__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var _STAR_ref_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__55704 = logseq.shui.hooks.use_state("");
var keystroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55704,(0),null);
var set_keystroke_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55704,(1),null);
var vec__55707 = logseq.shui.hooks.use_state((((user_binding == null))?binding:user_binding));
var current_binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55707,(0),null);
var set_current_binding_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55707,(1),null);
var vec__55710 = logseq.shui.hooks.use_state(null);
var key_conflicts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55710,(0),null);
var set_key_conflicts_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55710,(1),null);
var vec__55713 = logseq.shui.hooks.use_state(new cljs.core.Keyword(null,"idle","idle",-2007156861));
var rec_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55713,(0),null);
var set_rec_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55713,(1),null);
var vec__55716 = logseq.shui.hooks.use_state(null);
var accepted_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55716,(0),null);
var set_accepted_info_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55716,(1),null);
var vec__55719 = logseq.shui.hooks.use_state(null);
var undo_snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55719,(0),null);
var set_undo_snapshot_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55719,(1),null);
var _STAR_auto_accept_timer = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_fade_timer = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_prev_rec_state = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_rec_state_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(rec_state) : logseq.shui.hooks.use_ref.call(null,rec_state));
var _STAR_keystroke_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(keystroke) : logseq.shui.hooks.use_ref.call(null,keystroke));
var _STAR_current_binding_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(current_binding) : logseq.shui.hooks.use_ref.call(null,current_binding));
var _STAR_key_conflicts_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(key_conflicts) : logseq.shui.hooks.use_ref.call(null,key_conflicts));
var handler_id = logseq.shui.hooks.use_memo((function (){
return frontend.modules.shortcut.data_helper.get_group(k);
}),cljs.core.PersistentVector.EMPTY);
var render_state = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rec_state,new cljs.core.Keyword(null,"dismissing","dismissing",-1141658602)))?new cljs.core.Keyword(null,"idle","idle",-2007156861):rec_state);
var has_bindings_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,current_binding)));
var persist_binding_BANG_ = (function (new_binding){
var binding_SINGLEQUOTE_ = frontend.components.shortcut.persisted_binding_value(k,new_binding);
frontend.modules.shortcut.core.persist_user_shortcut_BANG_(k,binding_SINGLEQUOTE_);

return setTimeout((function (){
frontend.modules.shortcut.core.refresh_BANG_();

if((cljs.core.deref(frontend.components.shortcut._STAR_global_listener_refcount) > (0))){
frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1(true);
} else {
}

return (saved_cb.cljs$core$IFn$_invoke$arity$0 ? saved_cb.cljs$core$IFn$_invoke$arity$0() : saved_cb.call(null));
}),(50));
});
var cancel_fn_BANG_ = (function (){
(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));

(set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_key_conflicts_BANG_.call(null,null));

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idle","idle",-2007156861)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861)));
});
var reset_fn_BANG_ = (function (){
var plan = frontend.components.shortcut.compute_reset_plan(k,handler_id,binding,current_binding);
var undo_entries = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"undo-entries","undo-entries",261916517).cljs$core$IFn$_invoke$arity$1(plan);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),k,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),current_binding], null)], null);
}
})();
var changes = (function (){var G__55722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,null], null)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"conflict-updates","conflict-updates",1946503363).cljs$core$IFn$_invoke$arity$1(plan))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__55722,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55723){
var map__55724 = p__55723;
var map__55724__$1 = cljs.core.__destructure_map(map__55724);
var action_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55724__$1,new cljs.core.Keyword(null,"action-id","action-id",-1727958578));
var new_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55724__$1,new cljs.core.Keyword(null,"new-binding","new-binding",195685460));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_id,new_binding], null);
}),new cljs.core.Keyword(null,"conflict-updates","conflict-updates",1946503363).cljs$core$IFn$_invoke$arity$1(plan)));
} else {
return G__55722;
}
})();
frontend.modules.shortcut.core.persist_user_shortcuts_batch_BANG_(changes);

(set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(binding) : set_current_binding_BANG_.call(null,binding));

setTimeout((function (){
frontend.modules.shortcut.core.refresh_BANG_();

if((cljs.core.deref(frontend.components.shortcut._STAR_global_listener_refcount) > (0))){
frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1(true);
} else {
}

return (saved_cb.cljs$core$IFn$_invoke$arity$0 ? saved_cb.cljs$core$IFn$_invoke$arity$0() : saved_cb.call(null));
}),(50));

var G__55725_55990 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),undo_entries], null);
(set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1(G__55725_55990) : set_undo_snapshot_BANG_.call(null,G__55725_55990));

(set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reset","reset",-800929946)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946)));

return setTimeout(close_fn,(300));
});
var override_fn_BANG_ = (function (){
var conflicts = logseq.shui.hooks.deref(_STAR_key_conflicts_ref);
var prefix_map = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(conflicts);
var exact_map = new cljs.core.Keyword(null,"exact","exact",1438022323).cljs$core$IFn$_invoke$arity$1(conflicts);
var ks = logseq.shui.hooks.deref(_STAR_keystroke_ref);
var cur_binding = logseq.shui.hooks.deref(_STAR_current_binding_ref);
var temp__5825__auto__ = frontend.components.shortcut.compute_override_plan(k,exact_map,ks,cur_binding);
if(cljs.core.truth_(temp__5825__auto__)){
var map__55726 = temp__5825__auto__;
var map__55726__$1 = cljs.core.__destructure_map(map__55726);
var new_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55726__$1,new cljs.core.Keyword(null,"new-binding","new-binding",195685460));
var accepted_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55726__$1,new cljs.core.Keyword(null,"accepted-key","accepted-key",336831574));
var undo_entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55726__$1,new cljs.core.Keyword(null,"undo-entries","undo-entries",261916517));
var conflict_updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55726__$1,new cljs.core.Keyword(null,"conflict-updates","conflict-updates",1946503363));
var conflict_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55726__$1,new cljs.core.Keyword(null,"conflict-names","conflict-names",1594798202));
var binding_SINGLEQUOTE__55991 = frontend.components.shortcut.persisted_binding_value(k,new_binding);
var changes_55992 = (function (){var G__55727 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,binding_SINGLEQUOTE__55991], null)], null);
if(cljs.core.seq(conflict_updates)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__55727,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55728){
var map__55729 = p__55728;
var map__55729__$1 = cljs.core.__destructure_map(map__55729);
var action_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55729__$1,new cljs.core.Keyword(null,"action-id","action-id",-1727958578));
var new_binding__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55729__$1,new cljs.core.Keyword(null,"new-binding","new-binding",195685460));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_id,new_binding__$1], null);
}),conflict_updates));
} else {
return G__55727;
}
})();
frontend.modules.shortcut.core.persist_user_shortcuts_batch_BANG_(changes_55992);

(set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(new_binding) : set_current_binding_BANG_.call(null,new_binding));

setTimeout((function (){
frontend.modules.shortcut.core.refresh_BANG_();

if((cljs.core.deref(frontend.components.shortcut._STAR_global_listener_refcount) > (0))){
frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1(true);
} else {
}

return (saved_cb.cljs$core$IFn$_invoke$arity$0 ? saved_cb.cljs$core$IFn$_invoke$arity$0() : saved_cb.call(null));
}),(50));

var G__55730_55993 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),undo_entries], null);
(set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1(G__55730_55993) : set_undo_snapshot_BANG_.call(null,G__55730_55993));

var prefix_details_SINGLEQUOTE__55994 = ((cljs.core.seq(prefix_map))?frontend.components.shortcut.prefix_conflict_details(prefix_map):null);
var G__55731_55995 = (function (){var G__55732 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),accepted_key,new cljs.core.Keyword(null,"from","from",1815293044),conflict_names], null);
if(cljs.core.seq(prefix_details_SINGLEQUOTE__55994)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55732,new cljs.core.Keyword(null,"prefix-details","prefix-details",616714076),prefix_details_SINGLEQUOTE__55994);
} else {
return G__55732;
}
})();
(set_accepted_info_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_accepted_info_BANG_.cljs$core$IFn$_invoke$arity$1(G__55731_55995) : set_accepted_info_BANG_.call(null,G__55731_55995));

(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));

(set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_key_conflicts_BANG_.call(null,null));

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"accepted","accepted",-1953464374)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374)));
} else {
return null;
}
});
logseq.shui.hooks.set_ref_BANG_(_STAR_rec_state_ref,rec_state);

logseq.shui.hooks.set_ref_BANG_(_STAR_keystroke_ref,keystroke);

logseq.shui.hooks.set_ref_BANG_(_STAR_current_binding_ref,current_binding);

logseq.shui.hooks.set_ref_BANG_(_STAR_key_conflicts_ref,key_conflicts);

logseq.shui.hooks.use_effect_BANG_((function (){
if(clojure.string.blank_QMARK_(keystroke)){
} else {
var timer_55996 = setTimeout((function (){
var cur_binding = logseq.shui.hooks.deref(_STAR_current_binding_ref);
var temp__5823__auto__ = cljs.core.seq(frontend.modules.shortcut.data_helper.parse_conflicts_from_binding(cur_binding,keystroke));
if(temp__5823__auto__){
var _current_conflicts = temp__5823__auto__;
(set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751)));

return (set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));
} else {
var conflicts_map = frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3(keystroke,handler_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exclude-ids","exclude-ids",7408318),cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.Keyword(null,"group-global?","group-global?",188550543),true], null));
if(cljs.core.not(cljs.core.seq(conflicts_map))){
var cross_conflicts = frontend.modules.shortcut.data_helper.get_cross_context_conflicts(keystroke,handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exclude-ids","exclude-ids",7408318),cljs.core.PersistentHashSet.createAsIfByAssoc([k])], null));
var accepted_key = keystroke;
var new_binding = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur_binding,accepted_key);
(set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(new_binding) : set_current_binding_BANG_.call(null,new_binding));

(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));

(set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_key_conflicts_BANG_.call(null,null));

persist_binding_BANG_(new_binding);

if(cljs.core.seq(cross_conflicts)){
var G__55733_55997 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),accepted_key,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"cross-context?","cross-context?",-1395601899),true,new cljs.core.Keyword(null,"cross-action-name","cross-action-name",1947814355),frontend.components.shortcut.conflict_action_names(cross_conflicts),new cljs.core.Keyword(null,"cross-context-label","cross-context-label",530643591),frontend.modules.shortcut.data_helper.conflict_context_label(cross_conflicts)], null);
(set_accepted_info_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_accepted_info_BANG_.cljs$core$IFn$_invoke$arity$1(G__55733_55997) : set_accepted_info_BANG_.call(null,G__55733_55997));
} else {
var G__55734_55998 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),accepted_key,new cljs.core.Keyword(null,"from","from",1815293044),null], null);
(set_accepted_info_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_accepted_info_BANG_.cljs$core$IFn$_invoke$arity$1(G__55734_55998) : set_accepted_info_BANG_.call(null,G__55734_55998));
}

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"accepted","accepted",-1953464374)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374)));
} else {
var map__55735 = frontend.modules.shortcut.data_helper.partition_conflicts_by_type(conflicts_map,keystroke);
var map__55735__$1 = cljs.core.__destructure_map(map__55735);
var exact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55735__$1,new cljs.core.Keyword(null,"exact","exact",1438022323));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55735__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
if(cljs.core.seq(exact)){
var G__55736_55999 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exact","exact",1438022323),exact,new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix], null);
(set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(G__55736_55999) : set_key_conflicts_BANG_.call(null,G__55736_55999));

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078)));
} else {
var accepted_key = keystroke;
var new_binding = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur_binding,accepted_key);
var details = frontend.components.shortcut.prefix_conflict_details(prefix);
var G__55737_56000 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),k,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),cur_binding], null)], null)], null);
(set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1(G__55737_56000) : set_undo_snapshot_BANG_.call(null,G__55737_56000));

(set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(new_binding) : set_current_binding_BANG_.call(null,new_binding));

(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));

(set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_key_conflicts_BANG_.call(null,null));

persist_binding_BANG_(new_binding);

var G__55738_56001 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),accepted_key,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"prefix-conflicts?","prefix-conflicts?",593668479),true,new cljs.core.Keyword(null,"prefix-details","prefix-details",616714076),details], null);
(set_accepted_info_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_accepted_info_BANG_.cljs$core$IFn$_invoke$arity$1(G__55738_56001) : set_accepted_info_BANG_.call(null,G__55738_56001));

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"accepted","accepted",-1953464374)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374)));
}
}
}
}),(400));
logseq.shui.hooks.set_ref_BANG_(_STAR_auto_accept_timer,timer_55996);
}

return (function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_auto_accept_timer);
if(cljs.core.truth_(temp__5825__auto__)){
var timer = temp__5825__auto__;
return clearTimeout(timer);
} else {
return null;
}
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keystroke], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var fexpr__55739 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"esc-hint","esc-hint",-1370021852),null,new cljs.core.Keyword(null,"reset","reset",-800929946),null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374),null,new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null,new cljs.core.Keyword(null,"removed","removed",609626430),null], null), null);
return (fexpr__55739.cljs$core$IFn$_invoke$arity$1 ? fexpr__55739.cljs$core$IFn$_invoke$arity$1(rec_state) : fexpr__55739.call(null,rec_state));
})())){
logseq.shui.hooks.set_ref_BANG_(_STAR_prev_rec_state,rec_state);
} else {
}

return undefined;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rec_state], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var fexpr__55740 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"esc-hint","esc-hint",-1370021852),null,new cljs.core.Keyword(null,"reset","reset",-800929946),null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null,new cljs.core.Keyword(null,"removed","removed",609626430),null], null), null);
return (fexpr__55740.cljs$core$IFn$_invoke$arity$1 ? fexpr__55740.cljs$core$IFn$_invoke$arity$1(rec_state) : fexpr__55740.call(null,rec_state));
})())){
var ms_56002 = (function (){var G__55741 = rec_state;
var G__55741__$1 = (((G__55741 instanceof cljs.core.Keyword))?G__55741.fqn:null);
switch (G__55741__$1) {
case "esc-hint":
return (2000);

break;
case "accepted":
var prefix_n = cljs.core.count(new cljs.core.Keyword(null,"prefix-details","prefix-details",616714076).cljs$core$IFn$_invoke$arity$1(accepted_info));
if(cljs.core.truth_(new cljs.core.Keyword(null,"cross-context?","cross-context?",-1395601899).cljs$core$IFn$_invoke$arity$1(accepted_info))){
return (6000);
} else {
if((prefix_n > (0))){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2((10000),((4000) + ((2000) * prefix_n)));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(accepted_info))){
return (6000);
} else {
return (2500);

}
}
}

break;
case "removed":
case "reset":
return (6000);

break;
default:
return (3500);

}
})();
var timer_56003 = setTimeout((function (){
return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dismissing","dismissing",-1141658602)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"dismissing","dismissing",-1141658602)));
}),ms_56002);
logseq.shui.hooks.set_ref_BANG_(_STAR_fade_timer,timer_56003);
} else {
}

return (function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_fade_timer);
if(cljs.core.truth_(temp__5825__auto__)){
var timer = temp__5825__auto__;
return clearTimeout(timer);
} else {
return null;
}
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rec_state], null));

frontend.components.shortcut.use_scoped_key_handler(_STAR_ref_el,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.components.shortcut.customize_key_handler,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),new cljs.core.Keyword(null,"set-keystroke!","set-keystroke!",1235719393),new cljs.core.Keyword(null,"set-key-conflicts!","set-key-conflicts!",1191298854),new cljs.core.Keyword(null,"*rec-state-ref","*rec-state-ref",-1065631636),new cljs.core.Keyword(null,"set-current-binding!","set-current-binding!",-2012119188),new cljs.core.Keyword(null,"*keystroke-ref","*keystroke-ref",1637113037),new cljs.core.Keyword(null,"action-id","action-id",-1727958578),new cljs.core.Keyword(null,"cancel-fn!","cancel-fn!",2091496754),new cljs.core.Keyword(null,"set-rec-state!","set-rec-state!",2084862612),new cljs.core.Keyword(null,"*current-binding-ref","*current-binding-ref",-1295403847),new cljs.core.Keyword(null,"set-undo-snapshot!","set-undo-snapshot!",-744144709),new cljs.core.Keyword(null,"persist-binding!","persist-binding!",-1585098980),new cljs.core.Keyword(null,"override-fn!","override-fn!",48868701)],[close_fn,set_keystroke_BANG_,set_key_conflicts_BANG_,_STAR_rec_state_ref,set_current_binding_BANG_,_STAR_keystroke_ref,k,cancel_fn_BANG_,set_rec_state_BANG_,_STAR_current_binding_ref,set_undo_snapshot_BANG_,persist_binding_BANG_,override_fn_BANG_])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_STAR_auto_accept_timer,_STAR_fade_timer], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_ref_el);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
if(cljs.core.truth_(el.contains(document.activeElement))){
return null;
} else {
return requestAnimationFrame((function (){
return el.focus();
}));
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rec_state], null));

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-popover","div.shortcut-popover",-265060223),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref_el,new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),action_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-popover-title","div.shortcut-popover-title",-208147422),action_name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-input-field","div.shortcut-input-field",-1113903542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__55742 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null], null), null);
return (fexpr__55742.cljs$core$IFn$_invoke$arity$1 ? fexpr__55742.cljs$core$IFn$_invoke$arity$1(render_state) : fexpr__55742.call(null,render_state));
})())?"conflict":null)], null),(function (){var iter__5628__auto__ = (function frontend$components$shortcut$customize_shortcut_dialog_inner_$_iter__55743(s__55744){
return (new cljs.core.LazySeq(null,(function (){
var s__55744__$1 = s__55744;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55744__$1);
if(temp__5825__auto__){
var s__55744__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55744__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55744__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55746 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55745 = (0);
while(true){
if((i__55745 < size__5627__auto__)){
var vec__55747 = cljs.core._nth(c__5626__auto__,i__55745);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55747,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55747,(1),null);
if(typeof x === 'string'){
cljs.core.chunk_append(b__55746,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-input-binding","div.shortcut-input-binding",57362413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),logseq.shui.ui.shortcut(x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null)),(cljs.core.truth_((function (){var fexpr__55750 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle","idle",-2007156861),null,new cljs.core.Keyword(null,"esc-hint","esc-hint",-1370021852),null,new cljs.core.Keyword(null,"reset","reset",-800929946),null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374),null,new cljs.core.Keyword(null,"removed","removed",609626430),null], null), null);
return (fexpr__55750.cljs$core$IFn$_invoke$arity$1 ? fexpr__55750.cljs$core$IFn$_invoke$arity$1(render_state) : fexpr__55750.call(null,render_state));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-binding-remove","button.shortcut-binding-remove",-2106958720),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","remove-binding","keymap/remove-binding",-374762845)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55745,s__55744__$1,vec__55747,idx,x,c__5626__auto__,size__5627__auto__,b__55746,s__55744__$2,temp__5825__auto__,_STAR_ref_el,vec__55704,keystroke,set_keystroke_BANG_,vec__55707,current_binding,set_current_binding_BANG_,vec__55710,key_conflicts,set_key_conflicts_BANG_,vec__55713,rec_state,set_rec_state_BANG_,vec__55716,accepted_info,set_accepted_info_BANG_,vec__55719,undo_snapshot,set_undo_snapshot_BANG_,_STAR_auto_accept_timer,_STAR_fade_timer,_STAR_prev_rec_state,_STAR_rec_state_ref,_STAR_keystroke_ref,_STAR_current_binding_ref,_STAR_key_conflicts_ref,handler_id,render_state,has_bindings_QMARK_,persist_binding_BANG_,cancel_fn_BANG_,reset_fn_BANG_,override_fn_BANG_,map__55703,map__55703__$1,saved_cb,close_fn){
return (function (e){
e.stopPropagation();

var new_binding = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(current_binding,(0),idx),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(current_binding,(idx + (1)))));
var undo_entries = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),k,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),current_binding], null)], null);
(set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(new_binding) : set_current_binding_BANG_.call(null,new_binding));

persist_binding_BANG_(new_binding);

var G__55751_56005 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),undo_entries], null);
(set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1(G__55751_56005) : set_undo_snapshot_BANG_.call(null,G__55751_56005));

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"removed","removed",609626430)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"removed","removed",609626430)));
});})(i__55745,s__55744__$1,vec__55747,idx,x,c__5626__auto__,size__5627__auto__,b__55746,s__55744__$2,temp__5825__auto__,_STAR_ref_el,vec__55704,keystroke,set_keystroke_BANG_,vec__55707,current_binding,set_current_binding_BANG_,vec__55710,key_conflicts,set_key_conflicts_BANG_,vec__55713,rec_state,set_rec_state_BANG_,vec__55716,accepted_info,set_accepted_info_BANG_,vec__55719,undo_snapshot,set_undo_snapshot_BANG_,_STAR_auto_accept_timer,_STAR_fade_timer,_STAR_prev_rec_state,_STAR_rec_state_ref,_STAR_keystroke_ref,_STAR_current_binding_ref,_STAR_key_conflicts_ref,handler_id,render_state,has_bindings_QMARK_,persist_binding_BANG_,cancel_fn_BANG_,reset_fn_BANG_,override_fn_BANG_,map__55703,map__55703__$1,saved_cb,close_fn))
], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null))], null):null)], null));

var G__56006 = (i__55745 + (1));
i__55745 = G__56006;
continue;
} else {
var G__56007 = (i__55745 + (1));
i__55745 = G__56007;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55746),frontend$components$shortcut$customize_shortcut_dialog_inner_$_iter__55743(cljs.core.chunk_rest(s__55744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55746),null);
}
} else {
var vec__55752 = cljs.core.first(s__55744__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(1),null);
if(typeof x === 'string'){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-input-binding","div.shortcut-input-binding",57362413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),logseq.shui.ui.shortcut(x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null)),(cljs.core.truth_((function (){var fexpr__55755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle","idle",-2007156861),null,new cljs.core.Keyword(null,"esc-hint","esc-hint",-1370021852),null,new cljs.core.Keyword(null,"reset","reset",-800929946),null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374),null,new cljs.core.Keyword(null,"removed","removed",609626430),null], null), null);
return (fexpr__55755.cljs$core$IFn$_invoke$arity$1 ? fexpr__55755.cljs$core$IFn$_invoke$arity$1(render_state) : fexpr__55755.call(null,render_state));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-binding-remove","button.shortcut-binding-remove",-2106958720),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","remove-binding","keymap/remove-binding",-374762845)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__55744__$1,vec__55752,idx,x,s__55744__$2,temp__5825__auto__,_STAR_ref_el,vec__55704,keystroke,set_keystroke_BANG_,vec__55707,current_binding,set_current_binding_BANG_,vec__55710,key_conflicts,set_key_conflicts_BANG_,vec__55713,rec_state,set_rec_state_BANG_,vec__55716,accepted_info,set_accepted_info_BANG_,vec__55719,undo_snapshot,set_undo_snapshot_BANG_,_STAR_auto_accept_timer,_STAR_fade_timer,_STAR_prev_rec_state,_STAR_rec_state_ref,_STAR_keystroke_ref,_STAR_current_binding_ref,_STAR_key_conflicts_ref,handler_id,render_state,has_bindings_QMARK_,persist_binding_BANG_,cancel_fn_BANG_,reset_fn_BANG_,override_fn_BANG_,map__55703,map__55703__$1,saved_cb,close_fn){
return (function (e){
e.stopPropagation();

var new_binding = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(current_binding,(0),idx),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(current_binding,(idx + (1)))));
var undo_entries = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),k,new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549),current_binding], null)], null);
(set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(new_binding) : set_current_binding_BANG_.call(null,new_binding));

persist_binding_BANG_(new_binding);

var G__55756_56008 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),undo_entries], null);
(set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1(G__55756_56008) : set_undo_snapshot_BANG_.call(null,G__55756_56008));

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"removed","removed",609626430)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"removed","removed",609626430)));
});})(s__55744__$1,vec__55752,idx,x,s__55744__$2,temp__5825__auto__,_STAR_ref_el,vec__55704,keystroke,set_keystroke_BANG_,vec__55707,current_binding,set_current_binding_BANG_,vec__55710,key_conflicts,set_key_conflicts_BANG_,vec__55713,rec_state,set_rec_state_BANG_,vec__55716,accepted_info,set_accepted_info_BANG_,vec__55719,undo_snapshot,set_undo_snapshot_BANG_,_STAR_auto_accept_timer,_STAR_fade_timer,_STAR_prev_rec_state,_STAR_rec_state_ref,_STAR_keystroke_ref,_STAR_current_binding_ref,_STAR_key_conflicts_ref,handler_id,render_state,has_bindings_QMARK_,persist_binding_BANG_,cancel_fn_BANG_,reset_fn_BANG_,override_fn_BANG_,map__55703,map__55703__$1,saved_cb,close_fn))
], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null))], null):null)], null),frontend$components$shortcut$customize_shortcut_dialog_inner_$_iter__55743(cljs.core.rest(s__55744__$2)));
} else {
var G__56009 = cljs.core.rest(s__55744__$2);
s__55744__$1 = G__56009;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,current_binding));
})(),(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var fexpr__55757 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"recording","recording",322996097),null,new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null], null), null);
return (fexpr__55757.cljs$core$IFn$_invoke$arity$1 ? fexpr__55757.cljs$core$IFn$_invoke$arity$1(render_state) : fexpr__55757.call(null,render_state));
})();
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(keystroke)));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-input-binding.shortcut-input-binding--pending","div.shortcut-input-binding.shortcut-input-binding--pending",1251441017),logseq.shui.ui.shortcut(keystroke,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null)),(cljs.core.truth_((function (){var fexpr__55758 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null], null), null);
return (fexpr__55758.cljs$core$IFn$_invoke$arity$1 ? fexpr__55758.cljs$core$IFn$_invoke$arity$1(render_state) : fexpr__55758.call(null,render_state));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-binding-remove","button.shortcut-binding-remove",-2106958720),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","remove-binding","keymap/remove-binding",-374762845)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return cancel_fn_BANG_();
})], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null))], null):null)], null):null),(cljs.core.truth_((function (){var fexpr__55759 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"recording","recording",322996097),null,new cljs.core.Keyword(null,"idle","idle",-2007156861),null,new cljs.core.Keyword(null,"reset","reset",-800929946),null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374),null,new cljs.core.Keyword(null,"removed","removed",609626430),null], null), null);
return (fexpr__55759.cljs$core$IFn$_invoke$arity$1 ? fexpr__55759.cljs$core$IFn$_invoke$arity$1(render_state) : fexpr__55759.call(null,render_state));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-input-placeholder","span.shortcut-input-placeholder",-61148353),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","press-a-shortcut","keymap/press-a-shortcut",-607163199)], 0))], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),(cljs.core.truth_((function (){var fexpr__55760 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null], null), null);
return (fexpr__55760.cljs$core$IFn$_invoke$arity$1 ? fexpr__55760.cljs$core$IFn$_invoke$arity$1(rec_state) : fexpr__55760.call(null,rec_state));
})())?"alert":"status"),new cljs.core.Keyword(null,"aria-live","aria-live",-467182502),(cljs.core.truth_((function (){var fexpr__55761 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null], null), null);
return (fexpr__55761.cljs$core$IFn$_invoke$arity$1 ? fexpr__55761.cljs$core$IFn$_invoke$arity$1(rec_state) : fexpr__55761.call(null,rec_state));
})())?"assertive":"polite")], null),(function (){var undo_link = (cljs.core.truth_(undo_snapshot)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-feedback-action","button.shortcut-feedback-action",1672779826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.components.shortcut.execute_undo_BANG_(undo_snapshot);

var temp__5825__auto___56010 = cljs.core.some((function (p1__55701_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-id","action-id",-1727958578).cljs$core$IFn$_invoke$arity$1(p1__55701_SHARP_),k)){
return p1__55701_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(undo_snapshot));
if(cljs.core.truth_(temp__5825__auto___56010)){
var own_56011 = temp__5825__auto___56010;
var G__55762_56012 = new cljs.core.Keyword(null,"previous-binding","previous-binding",-720969549).cljs$core$IFn$_invoke$arity$1(own_56011);
(set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(G__55762_56012) : set_current_binding_BANG_.call(null,G__55762_56012));
} else {
}

(set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_undo_snapshot_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_undo_snapshot_BANG_.call(null,null));

return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idle","idle",-2007156861)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861)));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","undo","keymap/undo",-805157809)], 0))], null):null);
var G__55763 = rec_state;
var G__55763__$1 = (((G__55763 instanceof cljs.core.Keyword))?G__55763.fqn:null);
switch (G__55763__$1) {
case "conflict-cross":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--error","div.shortcut-feedback.shortcut-feedback--error",1280541101),frontend.components.shortcut.feedback_inline_label(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","used-by-action","keymap/used-by-action",-147553053)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-feedback-name","span.shortcut-feedback-name",516430041),frontend.components.shortcut.conflict_action_names(new cljs.core.Keyword(null,"exact","exact",1438022323).cljs$core$IFn$_invoke$arity$1(key_conflicts))], null)], null)),frontend.ui.tooltip((function (){var G__55764 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),override_fn_BANG_], null);
var G__55765 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","reassign","keymap/reassign",-1255189802)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__55764,G__55765) : logseq.shui.ui.button.call(null,G__55764,G__55765));
})(),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","reassign-tooltip","keymap/reassign-tooltip",-311438501)], 0)))], null);

break;
case "conflict-same":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--error","div.shortcut-feedback.shortcut-feedback--error",1280541101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","already-bound","keymap/already-bound",1161969833)], 0))], null)], null);

break;
case "accepted":
if(cljs.core.truth_(new cljs.core.Keyword(null,"cross-context?","cross-context?",-1395601899).cljs$core$IFn$_invoke$arity$1(accepted_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--warning","div.shortcut-feedback.shortcut-feedback--warning",-2014414311),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"cross-context-label","cross-context-label",530643591).cljs$core$IFn$_invoke$arity$1(accepted_info);
if(cljs.core.truth_(temp__5823__auto__)){
var ctx = temp__5823__auto__;
return frontend.components.shortcut.feedback_inline_label(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","also-used-for-action-in-context","keymap/also-used-for-action-in-context",984942919)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-feedback-name","span.shortcut-feedback-name",516430041),new cljs.core.Keyword(null,"cross-action-name","cross-action-name",1947814355).cljs$core$IFn$_invoke$arity$1(accepted_info)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ctx], null)], null));
} else {
return frontend.components.shortcut.feedback_inline_label(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","also-used-for-action","keymap/also-used-for-action",741295054)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-feedback-name","span.shortcut-feedback-name",516430041),new cljs.core.Keyword(null,"cross-action-name","cross-action-name",1947814355).cljs$core$IFn$_invoke$arity$1(accepted_info)], null)], null));
}
})()], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"prefix-conflicts?","prefix-conflicts?",593668479).cljs$core$IFn$_invoke$arity$1(accepted_info))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--warning","div.shortcut-feedback.shortcut-feedback--warning",-2014414311),frontend.components.shortcut.prefix_conflict_label(new cljs.core.Keyword(null,"prefix-details","prefix-details",616714076).cljs$core$IFn$_invoke$arity$1(accepted_info)),undo_link], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(accepted_info))){
var reassigned_label = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","reassigned-from","keymap/reassigned-from",1598101341)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-feedback-name","span.shortcut-feedback-name",516430041),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(accepted_info)], null)], null)));
var temp__5823__auto__ = new cljs.core.Keyword(null,"prefix-details","prefix-details",616714076).cljs$core$IFn$_invoke$arity$1(accepted_info);
if(cljs.core.truth_(temp__5823__auto__)){
var prefix_details_SINGLEQUOTE_ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--success","div.shortcut-feedback.shortcut-feedback--success",1656330270),reassigned_label,undo_link], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--warning","div.shortcut-feedback.shortcut-feedback--warning",-2014414311),frontend.components.shortcut.prefix_conflict_label(prefix_details_SINGLEQUOTE_)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--success","div.shortcut-feedback.shortcut-feedback--success",1656330270),reassigned_label,undo_link], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--success","div.shortcut-feedback.shortcut-feedback--success",1656330270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","shortcut-added","keymap/shortcut-added",1710419553)], 0))], null)], null);

}
}
}

break;
case "removed":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--muted","div.shortcut-feedback.shortcut-feedback--muted",-1208642278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","shortcut-removed","keymap/shortcut-removed",555785346)], 0))], null),undo_link], null);

break;
case "reset":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--muted","div.shortcut-feedback.shortcut-feedback--muted",-1208642278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","reset-to-default","keymap/reset-to-default",550407376)], 0))], null),undo_link], null);

break;
case "esc-hint":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-feedback.shortcut-feedback--muted","div.shortcut-feedback.shortcut-feedback--muted",-1208642278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","esc-is-reserved","keymap/esc-is-reserved",724028846)], 0))], null)], null);

break;
case "dismissing":
var prev = logseq.shui.hooks.deref(_STAR_prev_rec_state);
var variant = (function (){var G__55766 = prev;
var G__55766__$1 = (((G__55766 instanceof cljs.core.Keyword))?G__55766.fqn:null);
switch (G__55766__$1) {
case "conflict-cross":
case "conflict-same":
return "shortcut-feedback--error";

break;
case "accepted":
if(cljs.core.truth_(new cljs.core.Keyword(null,"cross-context?","cross-context?",-1395601899).cljs$core$IFn$_invoke$arity$1(accepted_info))){
return "shortcut-feedback--warning";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"prefix-conflicts?","prefix-conflicts?",593668479).cljs$core$IFn$_invoke$arity$1(accepted_info))){
return "shortcut-feedback--warning";
} else {
return "shortcut-feedback--success";

}
}

break;
default:
return "shortcut-feedback--muted";

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"shortcut-feedback "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant)+" is-dismissing"),new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329),(function (){
return (set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rec_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idle","idle",-2007156861)) : set_rec_state_BANG_.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861)));
})], null)], null);

break;
default:
return null;

}
})()], null),(logseq.shui.ui.separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.separator.call(null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-toolbar","div.shortcut-toolbar",1219219576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-toolbar-left","div.shortcut-toolbar-left",-1206208211),(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var fexpr__55767 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idle","idle",-2007156861),null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374),null,new cljs.core.Keyword(null,"removed","removed",609626430),null], null), null);
return (fexpr__55767.cljs$core$IFn$_invoke$arity$1 ? fexpr__55767.cljs$core$IFn$_invoke$arity$1(render_state) : fexpr__55767.call(null,render_state));
})();
if(cljs.core.truth_(and__5140__auto__)){
return (!((frontend.components.shortcut.persisted_binding_value(k,current_binding) == null)));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shortcut-toolbar-action.shortcut-toolbar-reset","button.shortcut-toolbar-action.shortcut-toolbar-reset",-980387415),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_fn_BANG_], null),frontend.ui.icon("rotate",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","reset","keymap/reset",-1667142201)], 0))], null)], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-toolbar-right","div.shortcut-toolbar-right",147016523),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078),render_state))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-toolbar-hint","span.shortcut-toolbar-hint",779417685),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","hint-reassign","keymap/hint-reassign",2114552365)], 0)),logseq.shui.ui.shortcut((cljs.core.truth_(frontend.util.mac_QMARK_)?"meta+enter":"ctrl+enter"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null))], null):null),(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = (function (){var fexpr__55768 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"idle","idle",-2007156861),null,new cljs.core.Keyword(null,"reset","reset",-800929946),null,new cljs.core.Keyword(null,"accepted","accepted",-1953464374),null,new cljs.core.Keyword(null,"removed","removed",609626430),null], null), null);
return (fexpr__55768.cljs$core$IFn$_invoke$arity$1 ? fexpr__55768.cljs$core$IFn$_invoke$arity$1(render_state) : fexpr__55768.call(null,render_state));
})();
if(cljs.core.truth_(and__5140__auto__)){
return has_bindings_QMARK_;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var fexpr__55769 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conflict-cross","conflict-cross",-2048444078),null,new cljs.core.Keyword(null,"conflict-same","conflict-same",-1144075751),null], null), null);
return (fexpr__55769.cljs$core$IFn$_invoke$arity$1 ? fexpr__55769.cljs$core$IFn$_invoke$arity$1(render_state) : fexpr__55769.call(null,render_state));
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-toolbar-hint","span.shortcut-toolbar-hint",779417685),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","hint-remove","keymap/hint-remove",190145159)], 0)),logseq.shui.ui.shortcut("backspace",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-toolbar-hint","span.shortcut-toolbar-hint",779417685),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recording","recording",322996097),render_state))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","hint-cancel","keymap/hint-cancel",-2029119331)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","hint-close","keymap/hint-close",211291731)], 0))),logseq.shui.ui.shortcut("escape",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null))], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$shortcut$customize_shortcut_dialog_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55770 = cljs.core.first(args__31746__auto__);
var G__55771 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55770,G__55771) : io.factorhouse.hsx.core.obj_get.call(null,G__55770,G__55771));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"customize-shortcut-dialog-inner","customize-shortcut-dialog-inner",-2044172681,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$shortcut$customize_shortcut_dialog_inner,args__31746__auto__,null);
}
};
var frontend$components$shortcut$customize_shortcut_dialog_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56015__i = 0, G__56015__a = new Array(arguments.length -  0);
while (G__56015__i < G__56015__a.length) {G__56015__a[G__56015__i] = arguments[G__56015__i + 0]; ++G__56015__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56015__a,0,null);
} 
return frontend$components$shortcut$customize_shortcut_dialog_inner__delegate.call(this,args__31746__auto__);};
frontend$components$shortcut$customize_shortcut_dialog_inner.cljs$lang$maxFixedArity = 0;
frontend$components$shortcut$customize_shortcut_dialog_inner.cljs$lang$applyTo = (function (arglist__56016){
var args__31746__auto__ = cljs.core.seq(arglist__56016);
return frontend$components$shortcut$customize_shortcut_dialog_inner__delegate(args__31746__auto__);
});
frontend$components$shortcut$customize_shortcut_dialog_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$shortcut$customize_shortcut_dialog_inner__delegate;
return frontend$components$shortcut$customize_shortcut_dialog_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55772 = comp__31745__auto__;
var G__55773 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55772,G__55773) : io.factorhouse.hsx.core.react_memo.call(null,G__55772,G__55773));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"customize-shortcut-dialog-inner");

return comp__31745__auto__;
})();
/**
 * Return a set of category keywords (:Custom, :Disabled, :Unset) for a shortcut.
 */
frontend.components.shortcut.classify_shortcut = (function frontend$components$shortcut$classify_shortcut(p__55774){
var map__55775 = p__55774;
var map__55775__$1 = cljs.core.__destructure_map(map__55775);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55775__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55775__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5140__auto__ = user_binding;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5140__auto__;
}
})();
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || ((((((binding__$1 == null)) && ((user_binding__$1 == null)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))))));
var G__55776 = cljs.core.PersistentHashSet.EMPTY;
var G__55776__$1 = ((custom_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55776,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)):G__55776);
var G__55776__$2 = ((disabled_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55776__$1,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)):G__55776__$1);
if(unset_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55776__$2,new cljs.core.Keyword(null,"Unset","Unset",91993016));
} else {
return G__55776__$2;
}
});
/**
 * Count shortcuts per filter category in result-list-map.
 * Returns {:All n :Custom n :Unset n :Disabled n}.
 */
frontend.components.shortcut.count_shortcuts_by_filter = (function frontend$components$shortcut$count_shortcuts_by_filter(result_list_map){
var all_bindings = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__55777){
var vec__55778 = p__55777;
var _c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55778,(0),null);
var bm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55778,(1),null);
return cljs.core.vals(bm);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result_list_map], 0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,m){
var cats = frontend.components.shortcut.classify_shortcut(m);
var G__55781 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"All","All",-2078402587),cljs.core.inc);
var G__55781__$1 = ((cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__55781,new cljs.core.Keyword(null,"Custom","Custom",-1084118283),cljs.core.inc):G__55781);
var G__55781__$2 = ((cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__55781__$1,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627),cljs.core.inc):G__55781__$1);
if(cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__55781__$2,new cljs.core.Keyword(null,"Unset","Unset",91993016),cljs.core.inc);
} else {
return G__55781__$2;
}
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"All","All",-2078402587),(0),new cljs.core.Keyword(null,"Custom","Custom",-1084118283),(0),new cljs.core.Keyword(null,"Unset","Unset",91993016),(0),new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627),(0)], null),all_bindings);
});
/**
 * Check if any of the shortcut's bindings match the recorded keystroke filter.
 */
frontend.components.shortcut.matches_keystroke_QMARK_ = (function frontend$components$shortcut$matches_keystroke_QMARK_(binding,user_binding,keystroke){
var binding_SINGLEQUOTE_ = (function (){var or__5142__auto__ = user_binding;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return binding;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__55783 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__55783 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__55783);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some((function (p1__55782_SHARP_){
var temp__5825__auto__ = (function (){var G__55784 = p1__55782_SHARP_;
var G__55784__$1 = (((G__55784 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__55784));
var G__55784__$2 = (((G__55784__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__55784__$1));
if((G__55784__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__55784__$2);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core.sequential_QMARK_(s);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5140__auto____$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
} else {
return null;
}
}),binding_SINGLEQUOTE_);
} else {
return null;
}
});
/**
 * Count shortcuts visible after applying category filter and keystroke filter.
 */
frontend.components.shortcut.count_visible_shortcuts = (function frontend$components$shortcut$count_visible_shortcuts(result_list_map,filter_key,in_keystroke_QMARK_,keystroke){
return cljs.core.count(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__55785){
var vec__55786 = p__55785;
var _c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55786,(0),null);
var binding_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55786,(1),null);
var iter__5628__auto__ = (function frontend$components$shortcut$count_visible_shortcuts_$_iter__55789(s__55790){
return (new cljs.core.LazySeq(null,(function (){
var s__55790__$1 = s__55790;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55790__$1);
if(temp__5825__auto__){
var s__55790__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55790__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55790__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55792 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55791 = (0);
while(true){
if((i__55791 < size__5627__auto__)){
var vec__55793 = cljs.core._nth(c__5626__auto__,i__55791);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55793,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55793,(1),null);
var cats = frontend.components.shortcut.classify_shortcut(m);
var binding = frontend.components.shortcut.to_vector(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(m));
var user_binding = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"user-binding","user-binding",851596332).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.shortcut.to_vector(new cljs.core.Keyword(null,"user-binding","user-binding",851596332).cljs$core$IFn$_invoke$arity$1(m));
} else {
return and__5140__auto__;
}
})();
var disabled_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627));
var unset_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Unset","Unset",91993016));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_key,new cljs.core.Keyword(null,"All","All",-2078402587))) || ((((filter_key == null)) || (cljs.core.contains_QMARK_(cats,filter_key)))))){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(in_keystroke_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = (!(disabled_QMARK_));
if(and__5140__auto__){
var and__5140__auto____$1 = (!(unset_QMARK_));
if(and__5140__auto____$1){
return frontend.components.shortcut.matches_keystroke_QMARK_(binding,user_binding,keystroke);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
})())){
cljs.core.chunk_append(b__55792,id);

var G__56017 = (i__55791 + (1));
i__55791 = G__56017;
continue;
} else {
var G__56018 = (i__55791 + (1));
i__55791 = G__56018;
continue;
}
} else {
var G__56019 = (i__55791 + (1));
i__55791 = G__56019;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55792),frontend$components$shortcut$count_visible_shortcuts_$_iter__55789(cljs.core.chunk_rest(s__55790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55792),null);
}
} else {
var vec__55796 = cljs.core.first(s__55790__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55796,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55796,(1),null);
var cats = frontend.components.shortcut.classify_shortcut(m);
var binding = frontend.components.shortcut.to_vector(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(m));
var user_binding = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"user-binding","user-binding",851596332).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.shortcut.to_vector(new cljs.core.Keyword(null,"user-binding","user-binding",851596332).cljs$core$IFn$_invoke$arity$1(m));
} else {
return and__5140__auto__;
}
})();
var disabled_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627));
var unset_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Unset","Unset",91993016));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_key,new cljs.core.Keyword(null,"All","All",-2078402587))) || ((((filter_key == null)) || (cljs.core.contains_QMARK_(cats,filter_key)))))){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(in_keystroke_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = (!(disabled_QMARK_));
if(and__5140__auto__){
var and__5140__auto____$1 = (!(unset_QMARK_));
if(and__5140__auto____$1){
return frontend.components.shortcut.matches_keystroke_QMARK_(binding,user_binding,keystroke);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
})())){
return cljs.core.cons(id,frontend$components$shortcut$count_visible_shortcuts_$_iter__55789(cljs.core.rest(s__55790__$2)));
} else {
var G__56020 = cljs.core.rest(s__55790__$2);
s__55790__$1 = G__56020;
continue;
}
} else {
var G__56021 = cljs.core.rest(s__55790__$2);
s__55790__$1 = G__56021;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(binding_map);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result_list_map], 0)));
});
frontend.components.shortcut.build_categories_map = (function frontend$components$shortcut$build_categories_map(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55799_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__55799_SHARP_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),frontend.modules.shortcut.data_helper.binding_by_category(p1__55799_SHARP_))],null));
}),frontend.components.shortcut.categories);
});
frontend.components.shortcut.shortcut_keymap_x = (function (){var render_fn__31744__auto__ = (function frontend$components$shortcut$shortcut_keymap_x(){
var vec__55801 = logseq.shui.hooks.use_atom(frontend.components.shortcut._STAR_active_shortcut_id);
var active_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55801,(0),null);
var _ = logseq.shui.hooks.use_atom(frontend.modules.shortcut.config._STAR_category);
var ___$1 = logseq.shui.hooks.use_atom(frontend.components.shortcut._STAR_refresh_sentry);
var vec__55804 = logseq.shui.hooks.use_state(false);
var ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55804,(0),null);
var set_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55804,(1),null);
var vec__55807 = logseq.shui.hooks.use_state(null);
var filter_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55807,(0),null);
var set_filter_key_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55807,(1),null);
var vec__55810 = logseq.shui.hooks.use_state("");
var keystroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55810,(0),null);
var set_keystroke_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55810,(1),null);
var vec__55813 = logseq.shui.hooks.use_state(null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55813,(0),null);
var set_q_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55813,(1),null);
var categories_list_map = frontend.components.shortcut.build_categories_map();
var all_categories = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,categories_list_map));
var in_filter_QMARK_ = (!((filter_key == null)));
var in_query_QMARK_ = (!(clojure.string.blank_QMARK_(frontend.util.trim_safe(q))));
var in_keystroke_QMARK_ = (!(clojure.string.blank_QMARK_(keystroke)));
var vec__55816 = logseq.shui.hooks.use_state(cljs.core.PersistentHashSet.EMPTY);
var folded_categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55816,(0),null);
var set_folded_categories_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55816,(1),null);
var matched_list_map = ((((in_query_QMARK_) && ((!(in_keystroke_QMARK_)))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55819){
var vec__55820 = p__55819;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55820,(0),null);
var binding_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55820,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(function (){var G__55823 = binding_map;
var G__55824 = q;
var G__55825 = new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723);
var G__55826 = (function (p1__55800_SHARP_){
var vec__55827 = p1__55800_SHARP_;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55827,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55827,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.data_helper.get_shortcut_desc(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"id","id",-1388402092),id))));
});
return (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$4 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$4(G__55823,G__55824,G__55825,G__55826) : frontend.search.fuzzy_search.call(null,G__55823,G__55824,G__55825,G__55826));
})()], null);
}),categories_list_map):null);
var result_list_map = (function (){var or__5142__auto__ = matched_list_map;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return categories_list_map;
}
})();
var deduped_bindings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result_list_map], 0)));
var toggle_categories_BANG_ = (function (){
var folding_all_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(folded_categories,all_categories);
var active_el = document.activeElement;
var row_focused_QMARK_ = (function (){var and__5140__auto__ = active_el;
if(cljs.core.truth_(and__5140__auto__)){
var G__55830 = active_el;
if((G__55830 == null)){
return null;
} else {
return G__55830.closest("li.shortcut-row");
}
} else {
return and__5140__auto__;
}
})();
var G__55831_56022 = ((folding_all_QMARK_)?all_categories:cljs.core.PersistentHashSet.EMPTY);
(set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__55831_56022) : set_folded_categories_BANG_.call(null,G__55831_56022));

if(cljs.core.truth_((function (){var and__5140__auto__ = folding_all_QMARK_;
if(and__5140__auto__){
return row_focused_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return requestAnimationFrame((function (){
var temp__5825__auto__ = document.querySelector(".cp__shortcut-page-x .search-input-wrap input");
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
return input.focus();
} else {
return null;
}
}));
} else {
return null;
}
});
var pill_counts = frontend.components.shortcut.count_shortcuts_by_filter(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),deduped_bindings], null)], null));
var visible_count = ((((in_filter_QMARK_) || (in_keystroke_QMARK_)))?frontend.components.shortcut.count_visible_shortcuts(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),deduped_bindings], null)], null),filter_key,in_keystroke_QMARK_,keystroke):cljs.core.count(deduped_bindings));
var no_results_QMARK_ = (function (){var and__5140__auto__ = ready_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (visible_count === (0));
} else {
return and__5140__auto__;
}
})();
logseq.shui.hooks.use_effect_BANG_((function (){
var t = setTimeout((function (){
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_BANG_.call(null,true));
}),(100));
return (function (){
return clearTimeout(t);
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
cljs.core.reset_BANG_(frontend.components.shortcut._STAR_active_shortcut_id,null);

return (logseq.shui.ui.popup_hide_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_all_BANG_.call(null));
});
}),cljs.core.PersistentVector.EMPTY);

var _STAR_container_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_search_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_rescue_target_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var temp__5825__auto____$1 = el.querySelector(":scope > header");
if(cljs.core.truth_(temp__5825__auto____$1)){
var header = temp__5825__auto____$1;
var update_h_BANG_ = (function (){
var h = header.offsetHeight;
return el.style.setProperty("--shortcut-header-h",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+"px"));
});
var observer = (new ResizeObserver(update_h_BANG_));
observer.observe(header);

return (function (){
return observer.disconnect();
});
} else {
return null;
}
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var temp__5825__auto____$1 = el.closest(".ui__dialog-content");
if(cljs.core.truth_(temp__5825__auto____$1)){
var dialog = temp__5825__auto____$1;
var aside = dialog.querySelector("aside");
var inner = el.closest(".cp__settings-inner");
var sync_BANG_ = (function (){
var row_QMARK_ = (function (){var and__5140__auto__ = inner;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("row",getComputedStyle(inner).flexDirection);
} else {
return and__5140__auto__;
}
})();
var available = (dialog.clientWidth - (cljs.core.truth_((function (){var and__5140__auto__ = aside;
if(cljs.core.truth_(and__5140__auto__)){
return row_QMARK_;
} else {
return and__5140__auto__;
}
})())?aside.offsetWidth:(0)));
if((available > (0))){
return el.style.setProperty("max-width",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(available)+"px"));
} else {
return null;
}
});
var observer = (new ResizeObserver((function (___$2){
return sync_BANG_();
})));
observer.observe(dialog);

sync_BANG_();

return (function (){
observer.disconnect();

return el.style.removeProperty("max-width");
});
} else {
return null;
}
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_rescue_target_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var target = temp__5825__auto__;
logseq.shui.hooks.set_ref_BANG_(_STAR_rescue_target_ref,null);

if((((document.activeElement == null)) || ((document.activeElement === document.body)))){
target.focus(({"focusVisible": true}));

return frontend.components.shortcut.scroll_row_into_view_BANG_(target);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [folded_categories], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__shortcut-page-x","div.cp__shortcut-page-x",1416632171),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_container_ref], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),frontend.components.shortcut.pane_controls(q,set_q_BANG_,filter_key,set_filter_key_BANG_,keystroke,set_keystroke_BANG_,toggle_categories_BANG_,pill_counts,_STAR_search_ref)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),(cljs.core.truth_(ready_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-8.flex.justify-center","div.py-8.flex.justify-center",-1917851265),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("")], null)),(cljs.core.truth_((function (){var and__5140__auto__ = ready_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return no_results_QMARK_;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shortcut-empty-state","div.shortcut-empty-state",-856259692),frontend.ui.icon("list-search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","no-matching-shortcuts","keymap/no-matching-shortcuts",1234868485)], 0))], null)], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = ready_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(no_results_QMARK_);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-none.m-0.py-3","ul.list-none.m-0.py-3",-1445616298),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (e){
if((e.target === e.currentTarget)){
var ul = e.currentTarget;
var from = e.relatedTarget;
if(cljs.core.truth_((function (){var and__5140__auto__ = from;
if(cljs.core.truth_(and__5140__auto__)){
return ul.contains(from);
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = (function (){var G__55832 = ul.closest(".cp__shortcut-page-x");
var G__55832__$1 = (((G__55832 == null))?null:G__55832.querySelector(":scope > header"));
var G__55832__$2 = (((G__55832__$1 == null))?null:G__55832__$1.querySelectorAll(".shortcut-filter-pill"));
var G__55832__$3 = (((G__55832__$2 == null))?null:cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(G__55832__$2));
if((G__55832__$3 == null)){
return null;
} else {
return cljs.core.last(G__55832__$3);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pill = temp__5825__auto__;
return pill.focus();
} else {
return null;
}
} else {
var temp__5825__auto__ = cljs.core.first(frontend.components.shortcut.navigable_items(ul));
if(cljs.core.truth_(temp__5825__auto__)){
var first_item = temp__5825__auto__;
first_item.focus(({"focusVisible": true}));

return frontend.components.shortcut.scroll_row_into_view_BANG_(first_item);
} else {
return null;
}
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var key = e.key;
var ul_el = e.currentTarget;
var active_el = document.activeElement;
var active_item = (function (){var or__5142__auto__ = (function (){var G__55833 = active_el;
if((G__55833 == null)){
return null;
} else {
return G__55833.closest("li.shortcut-row");
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__55834 = active_el;
if((G__55834 == null)){
return null;
} else {
return G__55834.closest("li.th");
}
}
})();
var items = frontend.components.shortcut.navigable_items(ul_el);
if(((cljs.core.seq(items)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"End",null,"Home",null], null), null),key)))){
e.preventDefault();

var cur_idx = (cljs.core.truth_(active_item)?cljs.core.some((function (p__55835){
var vec__55836 = p__55835;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55836,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55836,(1),null);
if((el === active_item)){
return i;
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,items)):null);
var next_idx = (function (){var G__55839 = key;
switch (G__55839) {
case "ArrowDown":
if(cljs.core.truth_(cur_idx)){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2((cur_idx + (1)),(cljs.core.count(items) - (1)));
} else {
return (0);
}

break;
case "ArrowUp":
if((cur_idx == null)){
return (cljs.core.count(items) - (1));
} else {
if((cur_idx === (0))){
return null;
} else {
return (cur_idx - (1));

}
}

break;
case "Home":
return (0);

break;
case "End":
return (cljs.core.count(items) - (1));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55839))));

}
})();
if((next_idx == null)){
var G__55840 = logseq.shui.hooks.deref(_STAR_search_ref);
if((G__55840 == null)){
return null;
} else {
return G__55840.focus();
}
} else {
var temp__5825__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(items,next_idx,null);
if(cljs.core.truth_(temp__5825__auto__)){
var target = temp__5825__auto__;
target.focus(({"focusVisible": true}));

return frontend.components.shortcut.scroll_row_into_view_BANG_(target);
} else {
return null;
}
}
} else {
return null;
}
})], null),(function (){var iter__5628__auto__ = (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841(s__55842){
return (new cljs.core.LazySeq(null,(function (){
var s__55842__$1 = s__55842;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55842__$1);
if(temp__5825__auto__){
var s__55842__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55842__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55842__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55844 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55843 = (0);
while(true){
if((i__55843 < size__5627__auto__)){
var vec__55845 = cljs.core._nth(c__5626__auto__,i__55843);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55845,(0),null);
var binding_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55845,(1),null);
var folded_QMARK_ = cljs.core.contains_QMARK_(folded_categories,c);
cljs.core.chunk_append(b__55844,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((((!(in_query_QMARK_))) && ((((!(in_filter_QMARK_))) && ((!(in_keystroke_QMARK_)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.justify-between.th","li.flex.justify-between.th",-179015278),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)),new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((!(folded_QMARK_)))),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55843,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
var header_el = e.currentTarget;
var folding_QMARK_ = (!(folded_QMARK_));
var active_el = document.activeElement;
if(cljs.core.truth_((function (){var and__5140__auto__ = folding_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = active_el;
if(cljs.core.truth_(and__5140__auto____$1)){
var G__55848 = active_el;
if((G__55848 == null)){
return null;
} else {
return G__55848.closest("li.shortcut-row");
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
logseq.shui.hooks.set_ref_BANG_(_STAR_rescue_target_ref,header_el);
} else {
}

var G__55849 = (function (){var fexpr__55850 = ((folded_QMARK_)?cljs.core.disj:cljs.core.conj);
return (fexpr__55850.cljs$core$IFn$_invoke$arity$2 ? fexpr__55850.cljs$core$IFn$_invoke$arity$2(folded_categories,c) : fexpr__55850.call(null,folded_categories,c));
})();
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__55849) : set_folded_categories_BANG_.call(null,G__55849));
});})(i__55843,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (i__55843,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(32),null,(13),null], null), null),e.keyCode)){
e.preventDefault();

var G__55851 = (function (){var fexpr__55852 = ((folded_QMARK_)?cljs.core.disj:cljs.core.conj);
return (fexpr__55852.cljs$core$IFn$_invoke$arity$2 ? fexpr__55852.cljs$core$IFn$_invoke$arity$2(folded_categories,c) : fexpr__55852.call(null,folded_categories,c));
})();
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__55851) : set_folded_categories_BANG_.call(null,G__55851));
} else {
return null;
}
});})(i__55843,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.items-center","i.flex.items-center",1064024509),frontend.ui.icon(((folded_QMARK_)?"chevron-left":"chevron-down"))], null)], null):null),((((in_query_QMARK_) || (((in_filter_QMARK_) || ((!(folded_QMARK_)))))))?(function (){var iter__5628__auto__ = ((function (i__55843,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853(s__55854){
return (new cljs.core.LazySeq(null,((function (i__55843,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (){
var s__55854__$1 = s__55854;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__55854__$1);
if(temp__5825__auto____$1){
var s__55854__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55854__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__55854__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__55856 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__55855 = (0);
while(true){
if((i__55855 < size__5627__auto____$1)){
var vec__55857 = cljs.core._nth(c__5626__auto____$1,i__55855);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(0),null);
var map__55860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(1),null);
var map__55860__$1 = cljs.core.__destructure_map(map__55860);
var m = map__55860__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55860__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55860__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5140__auto__ = user_binding;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5140__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var cats = frontend.components.shortcut.classify_shortcut(m);
var disabled_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627));
var unset_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Unset","Unset",91993016));
cljs.core.chunk_append(b__55856,(((((filter_key == null)) || (cljs.core.contains_QMARK_(cats,filter_key))))?(cljs.core.truth_((function (){var or__5142__auto__ = (!(in_keystroke_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = (!(disabled_QMARK_));
if(and__5140__auto__){
var and__5140__auto____$1 = (!(unset_QMARK_));
if(and__5140__auto____$1){
return frontend.components.shortcut.matches_keystroke_QMARK_(binding__$1,user_binding__$1,keystroke);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
})())?(function (){var row_action = ((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?((function (i__55855,i__55843,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,id)){
var popup_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"customize-shortcut-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
cljs.core.reset_BANG_(frontend.components.shortcut._STAR_active_shortcut_id,null);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
} else {
var anchor_el = e.currentTarget.querySelector(".action-wrap");
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(anchor_el,id);
}
});})(i__55855,i__55843,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
:null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.shortcut-row.flex.items-start.justify-between.text-sm","li.shortcut-row.flex.items-start.justify-between.text-sm",503047828),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,id))?"active":null),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?(-1):null),new cljs.core.Keyword(null,"role","role",-736691072),(cljs.core.truth_(id)?"button":null),new cljs.core.Keyword(null,"aria-disabled","aria-disabled",-667357160),((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?null:"true"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),row_action,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(cljs.core.truth_(row_action)?((function (i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(32),null,(13),null], null), null),e.keyCode)){
e.preventDefault();

return row_action(e);
} else {
return null;
}
});})(i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
:null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label-wrap","span.label-wrap",1093919512),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.action-wrap","span.action-wrap",-1516720776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null),((unset_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0))], null):(cljs.core.truth_((function (){var or__5142__auto__ = user_binding__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return user_binding__$1 === false;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0)))+":")], null),((disabled_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0))], null):(function (){var iter__5628__auto__ = ((function (i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55861(s__55862){
return (new cljs.core.LazySeq(null,((function (i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (){
var s__55862__$1 = s__55862;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55862__$1);
if(temp__5825__auto____$2){
var s__55862__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55862__$2)){
var c__5626__auto____$2 = cljs.core.chunk_first(s__55862__$2);
var size__5627__auto____$2 = cljs.core.count(c__5626__auto____$2);
var b__55864 = cljs.core.chunk_buffer(size__5627__auto____$2);
if((function (){var i__55863 = (0);
while(true){
if((i__55863 < size__5627__auto____$2)){
var b = cljs.core._nth(c__5626__auto____$2,i__55863);
if(typeof b === 'string'){
cljs.core.chunk_append(b__55864,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null));

var G__56024 = (i__55863 + (1));
i__55863 = G__56024;
continue;
} else {
var G__56025 = (i__55863 + (1));
i__55863 = G__56025;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55864),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55861(cljs.core.chunk_rest(s__55862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55864),null);
}
} else {
var b = cljs.core.first(s__55862__$2);
if(typeof b === 'string'){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55861(cljs.core.rest(s__55862__$2)));
} else {
var G__56026 = cljs.core.rest(s__55862__$2);
s__55862__$1 = G__56026;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
,null,null));
});})(i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(user_binding__$1);
})())], null):(function (){var iter__5628__auto__ = ((function (i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55865(s__55866){
return (new cljs.core.LazySeq(null,((function (i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (){
var s__55866__$1 = s__55866;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55866__$1);
if(temp__5825__auto____$2){
var s__55866__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55866__$2)){
var c__5626__auto____$2 = cljs.core.chunk_first(s__55866__$2);
var size__5627__auto____$2 = cljs.core.count(c__5626__auto____$2);
var b__55868 = cljs.core.chunk_buffer(size__5627__auto____$2);
if((function (){var i__55867 = (0);
while(true){
if((i__55867 < size__5627__auto____$2)){
var b = cljs.core._nth(c__5626__auto____$2,i__55867);
if(typeof b === 'string'){
cljs.core.chunk_append(b__55868,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(frontend.modules.shortcut.data_helper.binding_for_display(id,b),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null),new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null));

var G__56027 = (i__55867 + (1));
i__55867 = G__56027;
continue;
} else {
var G__56028 = (i__55867 + (1));
i__55867 = G__56028;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55868),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55865(cljs.core.chunk_rest(s__55866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55868),null);
}
} else {
var b = cljs.core.first(s__55866__$2);
if(typeof b === 'string'){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(frontend.modules.shortcut.data_helper.binding_for_display(id,b),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null),new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55865(cljs.core.rest(s__55866__$2)));
} else {
var G__56029 = cljs.core.rest(s__55866__$2);
s__55866__$1 = G__56029;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
,null,null));
});})(i__55855,i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55857,id,map__55860,map__55860__$1,m,binding,user_binding,c__5626__auto____$1,size__5627__auto____$1,b__55856,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(binding__$1);
})()
))], null)], null);
})():null):null));

var G__56030 = (i__55855 + (1));
i__55855 = G__56030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55856),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853(cljs.core.chunk_rest(s__55854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55856),null);
}
} else {
var vec__55869 = cljs.core.first(s__55854__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55869,(0),null);
var map__55872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55869,(1),null);
var map__55872__$1 = cljs.core.__destructure_map(map__55872);
var m = map__55872__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55872__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55872__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5140__auto__ = user_binding;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5140__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var cats = frontend.components.shortcut.classify_shortcut(m);
var disabled_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627));
var unset_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Unset","Unset",91993016));
return cljs.core.cons((((((filter_key == null)) || (cljs.core.contains_QMARK_(cats,filter_key))))?(cljs.core.truth_((function (){var or__5142__auto__ = (!(in_keystroke_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = (!(disabled_QMARK_));
if(and__5140__auto__){
var and__5140__auto____$1 = (!(unset_QMARK_));
if(and__5140__auto____$1){
return frontend.components.shortcut.matches_keystroke_QMARK_(binding__$1,user_binding__$1,keystroke);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
})())?(function (){var row_action = ((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?((function (i__55843,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,id)){
var popup_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"customize-shortcut-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
cljs.core.reset_BANG_(frontend.components.shortcut._STAR_active_shortcut_id,null);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
} else {
var anchor_el = e.currentTarget.querySelector(".action-wrap");
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(anchor_el,id);
}
});})(i__55843,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
:null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.shortcut-row.flex.items-start.justify-between.text-sm","li.shortcut-row.flex.items-start.justify-between.text-sm",503047828),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,id))?"active":null),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?(-1):null),new cljs.core.Keyword(null,"role","role",-736691072),(cljs.core.truth_(id)?"button":null),new cljs.core.Keyword(null,"aria-disabled","aria-disabled",-667357160),((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?null:"true"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),row_action,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(cljs.core.truth_(row_action)?((function (i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(32),null,(13),null], null), null),e.keyCode)){
e.preventDefault();

return row_action(e);
} else {
return null;
}
});})(i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
:null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label-wrap","span.label-wrap",1093919512),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.action-wrap","span.action-wrap",-1516720776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null),((unset_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0))], null):(cljs.core.truth_((function (){var or__5142__auto__ = user_binding__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return user_binding__$1 === false;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0)))+":")], null),((disabled_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0))], null):(function (){var iter__5628__auto__ = ((function (i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55873(s__55874){
return (new cljs.core.LazySeq(null,((function (i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (){
var s__55874__$1 = s__55874;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55874__$1);
if(temp__5825__auto____$2){
var s__55874__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55874__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__55874__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__55876 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__55875 = (0);
while(true){
if((i__55875 < size__5627__auto____$1)){
var b = cljs.core._nth(c__5626__auto____$1,i__55875);
if(typeof b === 'string'){
cljs.core.chunk_append(b__55876,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null));

var G__56031 = (i__55875 + (1));
i__55875 = G__56031;
continue;
} else {
var G__56032 = (i__55875 + (1));
i__55875 = G__56032;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55876),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55873(cljs.core.chunk_rest(s__55874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55876),null);
}
} else {
var b = cljs.core.first(s__55874__$2);
if(typeof b === 'string'){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55873(cljs.core.rest(s__55874__$2)));
} else {
var G__56033 = cljs.core.rest(s__55874__$2);
s__55874__$1 = G__56033;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
,null,null));
});})(i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(user_binding__$1);
})())], null):(function (){var iter__5628__auto__ = ((function (i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55877(s__55878){
return (new cljs.core.LazySeq(null,((function (i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (){
var s__55878__$1 = s__55878;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55878__$1);
if(temp__5825__auto____$2){
var s__55878__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55878__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__55878__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__55880 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__55879 = (0);
while(true){
if((i__55879 < size__5627__auto____$1)){
var b = cljs.core._nth(c__5626__auto____$1,i__55879);
if(typeof b === 'string'){
cljs.core.chunk_append(b__55880,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(frontend.modules.shortcut.data_helper.binding_for_display(id,b),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null),new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null));

var G__56034 = (i__55879 + (1));
i__55879 = G__56034;
continue;
} else {
var G__56035 = (i__55879 + (1));
i__55879 = G__56035;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55880),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55877(cljs.core.chunk_rest(s__55878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55880),null);
}
} else {
var b = cljs.core.first(s__55878__$2);
if(typeof b === 'string'){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(frontend.modules.shortcut.data_helper.binding_for_display(id,b),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null),new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853_$_iter__55877(cljs.core.rest(s__55878__$2)));
} else {
var G__56036 = cljs.core.rest(s__55878__$2);
s__55878__$1 = G__56036;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
,null,null));
});})(i__55843,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55869,id,map__55872,map__55872__$1,m,binding,user_binding,s__55854__$2,temp__5825__auto____$1,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(binding__$1);
})()
))], null)], null);
})():null):null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55853(cljs.core.rest(s__55854__$2)));
}
} else {
return null;
}
break;
}
});})(i__55843,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
,null,null));
});})(i__55843,folded_QMARK_,vec__55845,c,binding_map,c__5626__auto__,size__5627__auto__,b__55844,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(binding_map);
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))], null)));

var G__56037 = (i__55843 + (1));
i__55843 = G__56037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55844),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841(cljs.core.chunk_rest(s__55842__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55844),null);
}
} else {
var vec__55881 = cljs.core.first(s__55842__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55881,(0),null);
var binding_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55881,(1),null);
var folded_QMARK_ = cljs.core.contains_QMARK_(folded_categories,c);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((((!(in_query_QMARK_))) && ((((!(in_filter_QMARK_))) && ((!(in_keystroke_QMARK_)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.justify-between.th","li.flex.justify-between.th",-179015278),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)),new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((!(folded_QMARK_)))),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
var header_el = e.currentTarget;
var folding_QMARK_ = (!(folded_QMARK_));
var active_el = document.activeElement;
if(cljs.core.truth_((function (){var and__5140__auto__ = folding_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = active_el;
if(cljs.core.truth_(and__5140__auto____$1)){
var G__55884 = active_el;
if((G__55884 == null)){
return null;
} else {
return G__55884.closest("li.shortcut-row");
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
logseq.shui.hooks.set_ref_BANG_(_STAR_rescue_target_ref,header_el);
} else {
}

var G__55885 = (function (){var fexpr__55886 = ((folded_QMARK_)?cljs.core.disj:cljs.core.conj);
return (fexpr__55886.cljs$core$IFn$_invoke$arity$2 ? fexpr__55886.cljs$core$IFn$_invoke$arity$2(folded_categories,c) : fexpr__55886.call(null,folded_categories,c));
})();
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__55885) : set_folded_categories_BANG_.call(null,G__55885));
});})(folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(32),null,(13),null], null), null),e.keyCode)){
e.preventDefault();

var G__55887 = (function (){var fexpr__55888 = ((folded_QMARK_)?cljs.core.disj:cljs.core.conj);
return (fexpr__55888.cljs$core$IFn$_invoke$arity$2 ? fexpr__55888.cljs$core$IFn$_invoke$arity$2(folded_categories,c) : fexpr__55888.call(null,folded_categories,c));
})();
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__55887) : set_folded_categories_BANG_.call(null,G__55887));
} else {
return null;
}
});})(folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.items-center","i.flex.items-center",1064024509),frontend.ui.icon(((folded_QMARK_)?"chevron-left":"chevron-down"))], null)], null):null),((((in_query_QMARK_) || (((in_filter_QMARK_) || ((!(folded_QMARK_)))))))?(function (){var iter__5628__auto__ = ((function (folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889(s__55890){
return (new cljs.core.LazySeq(null,(function (){
var s__55890__$1 = s__55890;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__55890__$1);
if(temp__5825__auto____$1){
var s__55890__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55890__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55890__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55892 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55891 = (0);
while(true){
if((i__55891 < size__5627__auto__)){
var vec__55893 = cljs.core._nth(c__5626__auto__,i__55891);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55893,(0),null);
var map__55896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55893,(1),null);
var map__55896__$1 = cljs.core.__destructure_map(map__55896);
var m = map__55896__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55896__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55896__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5140__auto__ = user_binding;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5140__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var cats = frontend.components.shortcut.classify_shortcut(m);
var disabled_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627));
var unset_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Unset","Unset",91993016));
cljs.core.chunk_append(b__55892,(((((filter_key == null)) || (cljs.core.contains_QMARK_(cats,filter_key))))?(cljs.core.truth_((function (){var or__5142__auto__ = (!(in_keystroke_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = (!(disabled_QMARK_));
if(and__5140__auto__){
var and__5140__auto____$1 = (!(unset_QMARK_));
if(and__5140__auto____$1){
return frontend.components.shortcut.matches_keystroke_QMARK_(binding__$1,user_binding__$1,keystroke);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
})())?(function (){var row_action = ((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?((function (i__55891,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,id)){
var popup_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"customize-shortcut-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
cljs.core.reset_BANG_(frontend.components.shortcut._STAR_active_shortcut_id,null);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
} else {
var anchor_el = e.currentTarget.querySelector(".action-wrap");
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(anchor_el,id);
}
});})(i__55891,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
:null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.shortcut-row.flex.items-start.justify-between.text-sm","li.shortcut-row.flex.items-start.justify-between.text-sm",503047828),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,id))?"active":null),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?(-1):null),new cljs.core.Keyword(null,"role","role",-736691072),(cljs.core.truth_(id)?"button":null),new cljs.core.Keyword(null,"aria-disabled","aria-disabled",-667357160),((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?null:"true"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),row_action,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(cljs.core.truth_(row_action)?((function (i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(32),null,(13),null], null), null),e.keyCode)){
e.preventDefault();

return row_action(e);
} else {
return null;
}
});})(i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
:null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label-wrap","span.label-wrap",1093919512),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.action-wrap","span.action-wrap",-1516720776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null),((unset_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0))], null):(cljs.core.truth_((function (){var or__5142__auto__ = user_binding__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return user_binding__$1 === false;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0)))+":")], null),((disabled_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0))], null):(function (){var iter__5628__auto__ = ((function (i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55897(s__55898){
return (new cljs.core.LazySeq(null,((function (i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (){
var s__55898__$1 = s__55898;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55898__$1);
if(temp__5825__auto____$2){
var s__55898__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55898__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__55898__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__55900 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__55899 = (0);
while(true){
if((i__55899 < size__5627__auto____$1)){
var b = cljs.core._nth(c__5626__auto____$1,i__55899);
if(typeof b === 'string'){
cljs.core.chunk_append(b__55900,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null));

var G__56038 = (i__55899 + (1));
i__55899 = G__56038;
continue;
} else {
var G__56039 = (i__55899 + (1));
i__55899 = G__56039;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55900),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55897(cljs.core.chunk_rest(s__55898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55900),null);
}
} else {
var b = cljs.core.first(s__55898__$2);
if(typeof b === 'string'){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55897(cljs.core.rest(s__55898__$2)));
} else {
var G__56040 = cljs.core.rest(s__55898__$2);
s__55898__$1 = G__56040;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
,null,null));
});})(i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(user_binding__$1);
})())], null):(function (){var iter__5628__auto__ = ((function (i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55901(s__55902){
return (new cljs.core.LazySeq(null,((function (i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (){
var s__55902__$1 = s__55902;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55902__$1);
if(temp__5825__auto____$2){
var s__55902__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55902__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__55902__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__55904 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__55903 = (0);
while(true){
if((i__55903 < size__5627__auto____$1)){
var b = cljs.core._nth(c__5626__auto____$1,i__55903);
if(typeof b === 'string'){
cljs.core.chunk_append(b__55904,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(frontend.modules.shortcut.data_helper.binding_for_display(id,b),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null),new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null));

var G__56041 = (i__55903 + (1));
i__55903 = G__56041;
continue;
} else {
var G__56042 = (i__55903 + (1));
i__55903 = G__56042;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55904),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55901(cljs.core.chunk_rest(s__55902__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55904),null);
}
} else {
var b = cljs.core.first(s__55902__$2);
if(typeof b === 'string'){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(frontend.modules.shortcut.data_helper.binding_for_display(id,b),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null),new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55901(cljs.core.rest(s__55902__$2)));
} else {
var G__56043 = cljs.core.rest(s__55902__$2);
s__55902__$1 = G__56043;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
,null,null));
});})(i__55891,row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55893,id,map__55896,map__55896__$1,m,binding,user_binding,c__5626__auto__,size__5627__auto__,b__55892,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(binding__$1);
})()
))], null)], null);
})():null):null));

var G__56044 = (i__55891 + (1));
i__55891 = G__56044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55892),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889(cljs.core.chunk_rest(s__55890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55892),null);
}
} else {
var vec__55905 = cljs.core.first(s__55890__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55905,(0),null);
var map__55908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55905,(1),null);
var map__55908__$1 = cljs.core.__destructure_map(map__55908);
var m = map__55908__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55908__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55908__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5140__auto__ = user_binding;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5140__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var cats = frontend.components.shortcut.classify_shortcut(m);
var disabled_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627));
var unset_QMARK_ = cljs.core.contains_QMARK_(cats,new cljs.core.Keyword(null,"Unset","Unset",91993016));
return cljs.core.cons((((((filter_key == null)) || (cljs.core.contains_QMARK_(cats,filter_key))))?(cljs.core.truth_((function (){var or__5142__auto__ = (!(in_keystroke_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = (!(disabled_QMARK_));
if(and__5140__auto__){
var and__5140__auto____$1 = (!(unset_QMARK_));
if(and__5140__auto____$1){
return frontend.components.shortcut.matches_keystroke_QMARK_(binding__$1,user_binding__$1,keystroke);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
})())?(function (){var row_action = ((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?((function (binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55905,id,map__55908,map__55908__$1,m,binding,user_binding,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,id)){
var popup_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"customize-shortcut-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
cljs.core.reset_BANG_(frontend.components.shortcut._STAR_active_shortcut_id,null);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
} else {
var anchor_el = e.currentTarget.querySelector(".action-wrap");
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(anchor_el,id);
}
});})(binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55905,id,map__55908,map__55908__$1,m,binding,user_binding,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
:null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.shortcut-row.flex.items-start.justify-between.text-sm","li.shortcut-row.flex.items-start.justify-between.text-sm",503047828),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,id))?"active":null),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?(-1):null),new cljs.core.Keyword(null,"role","role",-736691072),(cljs.core.truth_(id)?"button":null),new cljs.core.Keyword(null,"aria-disabled","aria-disabled",-667357160),((frontend.components.shortcut.customizable_shortcut_row_QMARK_(id,disabled_QMARK_))?null:"true"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),row_action,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(cljs.core.truth_(row_action)?((function (row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55905,id,map__55908,map__55908__$1,m,binding,user_binding,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(32),null,(13),null], null), null),e.keyCode)){
e.preventDefault();

return row_action(e);
} else {
return null;
}
});})(row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55905,id,map__55908,map__55908__$1,m,binding,user_binding,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
:null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label-wrap","span.label-wrap",1093919512),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.action-wrap","span.action-wrap",-1516720776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null),((unset_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0))], null):(cljs.core.truth_((function (){var or__5142__auto__ = user_binding__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return user_binding__$1 === false;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0)))+":")], null),((disabled_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shortcut-status-label","span.shortcut-status-label",-522565635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0))], null):(function (){var iter__5628__auto__ = ((function (row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55905,id,map__55908,map__55908__$1,m,binding,user_binding,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55909(s__55910){
return (new cljs.core.LazySeq(null,(function (){
var s__55910__$1 = s__55910;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55910__$1);
if(temp__5825__auto____$2){
var s__55910__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55910__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55910__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55912 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55911 = (0);
while(true){
if((i__55911 < size__5627__auto__)){
var b = cljs.core._nth(c__5626__auto__,i__55911);
if(typeof b === 'string'){
cljs.core.chunk_append(b__55912,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null));

var G__56045 = (i__55911 + (1));
i__55911 = G__56045;
continue;
} else {
var G__56046 = (i__55911 + (1));
i__55911 = G__56046;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55912),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55909(cljs.core.chunk_rest(s__55910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55912),null);
}
} else {
var b = cljs.core.first(s__55910__$2);
if(typeof b === 'string'){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55909(cljs.core.rest(s__55910__$2)));
} else {
var G__56047 = cljs.core.rest(s__55910__$2);
s__55910__$1 = G__56047;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55905,id,map__55908,map__55908__$1,m,binding,user_binding,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(user_binding__$1);
})())], null):(function (){var iter__5628__auto__ = ((function (row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55905,id,map__55908,map__55908__$1,m,binding,user_binding,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_){
return (function frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55913(s__55914){
return (new cljs.core.LazySeq(null,(function (){
var s__55914__$1 = s__55914;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__55914__$1);
if(temp__5825__auto____$2){
var s__55914__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55914__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55914__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55916 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55915 = (0);
while(true){
if((i__55915 < size__5627__auto__)){
var b = cljs.core._nth(c__5626__auto__,i__55915);
if(typeof b === 'string'){
cljs.core.chunk_append(b__55916,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(frontend.modules.shortcut.data_helper.binding_for_display(id,b),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null),new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null));

var G__56048 = (i__55915 + (1));
i__55915 = G__56048;
continue;
} else {
var G__56049 = (i__55915 + (1));
i__55915 = G__56049;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55916),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55913(cljs.core.chunk_rest(s__55914__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55916),null);
}
} else {
var b = cljs.core.first(s__55914__$2);
if(typeof b === 'string'){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"contents"], null)], null),logseq.shui.ui.shortcut(frontend.modules.shortcut.data_helper.binding_for_display(id,b),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null),new cljs.core.Keyword(null,"chord-separator","chord-separator",1001756809),"->"], null))], null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889_$_iter__55913(cljs.core.rest(s__55914__$2)));
} else {
var G__56050 = cljs.core.rest(s__55914__$2);
s__55914__$1 = G__56050;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_action,binding__$1,user_binding__$1,label,cats,disabled_QMARK_,unset_QMARK_,vec__55905,id,map__55908,map__55908__$1,m,binding,user_binding,s__55890__$2,temp__5825__auto____$1,folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(binding__$1);
})()
))], null)], null);
})():null):null),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841_$_iter__55889(cljs.core.rest(s__55890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(folded_QMARK_,vec__55881,c,binding_map,s__55842__$2,temp__5825__auto__,_STAR_container_ref,_STAR_search_ref,_STAR_rescue_target_ref,vec__55801,active_id,_,___$1,vec__55804,ready_QMARK_,set_ready_BANG_,vec__55807,filter_key,set_filter_key_BANG_,vec__55810,keystroke,set_keystroke_BANG_,vec__55813,q,set_q_BANG_,categories_list_map,all_categories,in_filter_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__55816,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,deduped_bindings,toggle_categories_BANG_,pill_counts,visible_count,no_results_QMARK_))
;
return iter__5628__auto__(binding_map);
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))], null)),frontend$components$shortcut$shortcut_keymap_x_$_iter__55841(cljs.core.rest(s__55842__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(((((in_filter_QMARK_) || (in_keystroke_QMARK_)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),deduped_bindings], null)], null):result_list_map));
})()], null):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$shortcut$shortcut_keymap_x__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55917 = cljs.core.first(args__31746__auto__);
var G__55918 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55917,G__55918) : io.factorhouse.hsx.core.obj_get.call(null,G__55917,G__55918));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"shortcut-keymap-x","shortcut-keymap-x",-797107961,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$shortcut$shortcut_keymap_x,args__31746__auto__,null);
}
};
var frontend$components$shortcut$shortcut_keymap_x = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56051__i = 0, G__56051__a = new Array(arguments.length -  0);
while (G__56051__i < G__56051__a.length) {G__56051__a[G__56051__i] = arguments[G__56051__i + 0]; ++G__56051__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56051__a,0,null);
} 
return frontend$components$shortcut$shortcut_keymap_x__delegate.call(this,args__31746__auto__);};
frontend$components$shortcut$shortcut_keymap_x.cljs$lang$maxFixedArity = 0;
frontend$components$shortcut$shortcut_keymap_x.cljs$lang$applyTo = (function (arglist__56052){
var args__31746__auto__ = cljs.core.seq(arglist__56052);
return frontend$components$shortcut$shortcut_keymap_x__delegate(args__31746__auto__);
});
frontend$components$shortcut$shortcut_keymap_x.cljs$core$IFn$_invoke$arity$variadic = frontend$components$shortcut$shortcut_keymap_x__delegate;
return frontend$components$shortcut$shortcut_keymap_x;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55919 = comp__31745__auto__;
var G__55920 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55919,G__55920) : io.factorhouse.hsx.core.react_memo.call(null,G__55919,G__55920));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"shortcut-keymap-x");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.shortcut.js.map
