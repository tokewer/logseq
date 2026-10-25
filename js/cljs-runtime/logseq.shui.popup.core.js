goog.provide('logseq.shui.popup.core');
logseq.shui.popup.core.button = logseq.shui.util.ui_wrap("Button");
logseq.shui.popup.core.popover = logseq.shui.util.ui_wrap("Popover");
logseq.shui.popup.core.popover_trigger = logseq.shui.util.ui_wrap("PopoverTrigger");
logseq.shui.popup.core.popover_content = logseq.shui.util.ui_wrap("PopoverContent");
logseq.shui.popup.core.popover_arrow = logseq.shui.util.ui_wrap("PopoverArrow");
logseq.shui.popup.core.popover_close = logseq.shui.util.ui_wrap("PopoverClose");
logseq.shui.popup.core.popover_remove_scroll = logseq.shui.util.ui_wrap("PopoverRemoveScroll");
logseq.shui.popup.core.dropdown_menu = logseq.shui.util.ui_wrap("DropdownMenu");
logseq.shui.popup.core.dropdown_menu_trigger = logseq.shui.util.ui_wrap("DropdownMenuTrigger");
logseq.shui.popup.core.dropdown_menu_content = logseq.shui.util.ui_wrap("DropdownMenuContent");
logseq.shui.popup.core.dropdown_menu_arrow = logseq.shui.util.ui_wrap("DropdownMenuArrow");
logseq.shui.popup.core.dropdown_menu_group = logseq.shui.util.ui_wrap("DropdownMenuGroup");
logseq.shui.popup.core.dropdown_menu_item = logseq.shui.util.ui_wrap("DropdownMenuItem");
logseq.shui.popup.core.dropdown_menu_checkbox_item = logseq.shui.util.ui_wrap("DropdownMenuCheckboxItem");
logseq.shui.popup.core.dropdown_menu_radio_group = logseq.shui.util.ui_wrap("DropdownMenuRadioGroup");
logseq.shui.popup.core.dropdown_menu_radio_item = logseq.shui.util.ui_wrap("DropdownMenuRadioItem");
logseq.shui.popup.core.dropdown_menu_label = logseq.shui.util.ui_wrap("DropdownMenuLabel");
logseq.shui.popup.core.dropdown_menu_separator = logseq.shui.util.ui_wrap("DropdownMenuSeparator");
logseq.shui.popup.core.dropdown_menu_shortcut = logseq.shui.util.ui_wrap("DropdownMenuShortcut");
logseq.shui.popup.core.dropdown_menu_sub = logseq.shui.util.ui_wrap("DropdownMenuSub");
logseq.shui.popup.core.dropdown_menu_sub_content = logseq.shui.util.ui_wrap("DropdownMenuSubContent");
logseq.shui.popup.core.dropdown_menu_sub_trigger = logseq.shui.util.ui_wrap("DropdownMenuSubTrigger");
if((typeof logseq !== 'undefined') && (typeof logseq.shui !== 'undefined') && (typeof logseq.shui.popup !== 'undefined') && (typeof logseq.shui.popup.core !== 'undefined') && (typeof logseq.shui.popup.core._STAR_popups !== 'undefined')){
} else {
logseq.shui.popup.core._STAR_popups = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof logseq !== 'undefined') && (typeof logseq.shui !== 'undefined') && (typeof logseq.shui.popup !== 'undefined') && (typeof logseq.shui.popup.core !== 'undefined') && (typeof logseq.shui.popup.core._STAR_id !== 'undefined')){
} else {
logseq.shui.popup.core._STAR_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof logseq !== 'undefined') && (typeof logseq.shui !== 'undefined') && (typeof logseq.shui.popup !== 'undefined') && (typeof logseq.shui.popup.core !== 'undefined') && (typeof logseq.shui.popup.core.gen_id !== 'undefined')){
} else {
logseq.shui.popup.core.gen_id = (function logseq$shui$popup$core$gen_id(){
return cljs.core.reset_BANG_(logseq.shui.popup.core._STAR_id,(cljs.core.deref(logseq.shui.popup.core._STAR_id) + (1)));
});
}
if((typeof logseq !== 'undefined') && (typeof logseq.shui !== 'undefined') && (typeof logseq.shui.popup !== 'undefined') && (typeof logseq.shui.popup.core !== 'undefined') && (typeof logseq.shui.popup.core._STAR_last_hidden !== 'undefined')){
} else {
logseq.shui.popup.core._STAR_last_hidden = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
logseq.shui.popup.core._STAR_opened_sub_menus = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
logseq.shui.popup.core.get_popup = (function logseq$shui$popup$core$get_popup(id){
if(cljs.core.truth_(id)){
var G__49808 = medley.core.indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(logseq.shui.popup.core._STAR_popups));
var G__49808__$1 = (((G__49808 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49807_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__49807_SHARP_)));
}),G__49808));
if((G__49808__$1 == null)){
return null;
} else {
return cljs.core.first(G__49808__$1);
}
} else {
return null;
}
});
logseq.shui.popup.core.get_popups = (function logseq$shui$popup$core$get_popups(){
return cljs.core.deref(logseq.shui.popup.core._STAR_popups);
});
logseq.shui.popup.core.get_last_popup = (function logseq$shui$popup$core$get_last_popup(){
return cljs.core.last(cljs.core.deref(logseq.shui.popup.core._STAR_popups));
});
logseq.shui.popup.core.upsert_popup_BANG_ = (function logseq$shui$popup$core$upsert_popup_BANG_(config){
var temp__5825__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var temp__5823__auto___50096 = logseq.shui.popup.core.get_popup(id);
if(cljs.core.truth_(temp__5823__auto___50096)){
var vec__49825_50097 = temp__5823__auto___50096;
var index_50098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49825_50097,(0),null);
var config_SINGLEQUOTE__50099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49825_50097,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(logseq.shui.popup.core._STAR_popups,cljs.core.assoc,index_50098,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config_SINGLEQUOTE__50099,config], 0)));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(logseq.shui.popup.core._STAR_popups,cljs.core.conj,config);
}

return id;
} else {
return null;
}
});
logseq.shui.popup.core.update_popup_BANG_ = (function logseq$shui$popup$core$update_popup_BANG_(id,ks,val){
var temp__5825__auto__ = logseq.shui.popup.core.get_popup(id);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__49831 = temp__5825__auto__;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49831,(0),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49831,(1),null);
var ks__$1 = ((cljs.core.coll_QMARK_(ks))?ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks], null));
var config__$1 = (((val == null))?medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(config,ks__$1):cljs.core.assoc_in(config,ks__$1,val));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(logseq.shui.popup.core._STAR_popups,cljs.core.assoc,index,config__$1);
} else {
return null;
}
});
logseq.shui.popup.core.detach_popup_BANG_ = (function logseq$shui$popup$core$detach_popup_BANG_(var_args){
var G__49837 = arguments.length;
switch (G__49837) {
case 1:
return logseq.shui.popup.core.detach_popup_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.shui.popup.core.detach_popup_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.popup.core.detach_popup_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return logseq.shui.popup.core.detach_popup_BANG_.cljs$core$IFn$_invoke$arity$2(id,false);
}));

(logseq.shui.popup.core.detach_popup_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,skip_focus_QMARK_){
var vec__49839 = logseq.shui.popup.core.get_popup(id);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49839,(0),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49839,(1),null);
if(cljs.core.truth_(index)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.shui.popup.core._STAR_popups,(function (p1__49835_SHARP_){
return cljs.core.vec(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(index,p1__49835_SHARP_));
}));

var map__49843 = config;
var map__49843__$1 = cljs.core.__destructure_map(map__49843);
var auto_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49843__$1,new cljs.core.Keyword(null,"auto-focus?","auto-focus?",1021654593));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49843__$1,new cljs.core.Keyword(null,"target","target",253001721));
var trigger_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49843__$1,new cljs.core.Keyword(null,"trigger-id","trigger-id",-599381518));
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(skip_focus_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = auto_focus_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return target;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = (cljs.core.truth_(trigger_id)?document.getElementById(trigger_id):target);
if(cljs.core.truth_(temp__5825__auto__)){
var target__$1 = temp__5825__auto__;
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(target__$1,"ls-popup-closed");

return target__$1.focus();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(logseq.shui.popup.core.detach_popup_BANG_.cljs$lang$maxFixedArity = 2);

logseq.shui.popup.core.same_popup_target_QMARK_ = (function logseq$shui$popup$core$same_popup_target_QMARK_(target,target_SINGLEQUOTE_){
var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = target_SINGLEQUOTE_;
if(cljs.core.truth_(and__5140__auto____$1)){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,target_SINGLEQUOTE_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto____$2 = (target_SINGLEQUOTE_ instanceof Node);
if(and__5140__auto____$2){
var and__5140__auto____$3 = target.contains;
if(cljs.core.truth_(and__5140__auto____$3)){
return target.contains(target_SINGLEQUOTE_);
} else {
return and__5140__auto____$3;
}
} else {
return and__5140__auto____$2;
}
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
logseq.shui.popup.core.recently_hidden_target_QMARK_ = (function logseq$shui$popup$core$recently_hidden_target_QMARK_(target){
var map__49852 = cljs.core.deref(logseq.shui.popup.core._STAR_last_hidden);
var map__49852__$1 = cljs.core.__destructure_map(map__49852);
var hidden_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49852__$1,new cljs.core.Keyword(null,"target","target",253001721));
var until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49852__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = hidden_target;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = typeof until === 'number';
if(and__5140__auto____$2){
var and__5140__auto____$3 = (Date.now() < until);
if(and__5140__auto____$3){
return logseq.shui.popup.core.same_popup_target_QMARK_(hidden_target,target);
} else {
return and__5140__auto____$3;
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
logseq.shui.popup.core.element_QMARK_ = (function logseq$shui$popup$core$element_QMARK_(target){
return (((typeof Element !== 'undefined')) && ((target instanceof Element)));
});
/**
 * Anchor a popup to a live trigger rect. Re-measured after open so first
 *   paint is not stuck at (0, 0) when the trigger layout was not ready.
 */
logseq.shui.popup.core.element_anchor_position = (function logseq$shui$popup$core$element_anchor_position(target,align,as_mask_QMARK_){
var rect = target.getBoundingClientRect();
var left = rect.left;
var width = rect.width;
var height = rect.height;
var bottom = rect.bottom;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(left + (function (){var G__49865 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(align);
var G__49865__$1 = (((G__49865 instanceof cljs.core.Keyword))?G__49865.fqn:null);
switch (G__49865__$1) {
case "start":
return (0);

break;
case "end":
return width;

break;
default:
return (width / (2));

}
})()),((bottom - height) - (cljs.core.truth_(as_mask_QMARK_)?(6):(0))),width,(cljs.core.truth_(as_mask_QMARK_)?(1):height)], null);
});
logseq.shui.popup.core.refresh_anchor_position_BANG_ = (function logseq$shui$popup$core$refresh_anchor_position_BANG_(id,target,align,as_mask_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.shui.popup.core.get_popup(id);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = logseq.shui.popup.core.element_QMARK_(target);
if(and__5140__auto____$1){
return target.isConnected;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return logseq.shui.popup.core.update_popup_BANG_(id,new cljs.core.Keyword(null,"position","position",-2011731912),logseq.shui.popup.core.element_anchor_position(target,align,as_mask_QMARK_));
} else {
return null;
}
});
logseq.shui.popup.core.schedule_anchor_position_refresh_BANG_ = (function logseq$shui$popup$core$schedule_anchor_position_refresh_BANG_(id,target,align,as_mask_QMARK_){
if(logseq.shui.popup.core.element_QMARK_(target)){
return requestAnimationFrame((function (){
logseq.shui.popup.core.refresh_anchor_position_BANG_(id,target,align,as_mask_QMARK_);

return requestAnimationFrame((function (){
return logseq.shui.popup.core.refresh_anchor_position_BANG_(id,target,align,as_mask_QMARK_);
}));
}));
} else {
return null;
}
});
logseq.shui.popup.core.native_event = (function logseq$shui$popup$core$native_event(event){
var or__5142__auto__ = (function (){var G__49876 = event;
if((G__49876 == null)){
return null;
} else {
return G__49876.nativeEvent;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return event;
}
});
logseq.shui.popup.core.event_target = (function logseq$shui$popup$core$event_target(event){
var native_event = logseq.shui.popup.core.native_event(event);
var or__5142__auto__ = (function (){var G__49879 = event;
if((G__49879 == null)){
return null;
} else {
return G__49879.target;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__49880 = native_event;
if((G__49880 == null)){
return null;
} else {
return G__49880.target;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var G__49882 = event;
if((G__49882 == null)){
return null;
} else {
return G__49882.currentTarget;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var G__49884 = native_event;
if((G__49884 == null)){
return null;
} else {
return G__49884.currentTarget;
}
}
}
}
});
logseq.shui.popup.core.event_related_target = (function logseq$shui$popup$core$event_related_target(event){
var native_event = logseq.shui.popup.core.native_event(event);
var or__5142__auto__ = (function (){var G__49887 = event;
if((G__49887 == null)){
return null;
} else {
return G__49887.relatedTarget;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__49889 = native_event;
if((G__49889 == null)){
return null;
} else {
return G__49889.relatedTarget;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var G__49890 = event;
if((G__49890 == null)){
return null;
} else {
return G__49890.toElement;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var G__49891 = native_event;
if((G__49891 == null)){
return null;
} else {
return G__49891.toElement;
}
}
}
}
});
logseq.shui.popup.core.event_composed_path = (function logseq$shui$popup$core$event_composed_path(event){
var native_event = logseq.shui.popup.core.native_event(event);
if(cljs.core.fn_QMARK_((function (){var G__49895 = native_event;
if((G__49895 == null)){
return null;
} else {
return G__49895.composedPath;
}
})())){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(native_event.composedPath());
} else {
if(cljs.core.fn_QMARK_((function (){var G__49896 = event;
if((G__49896 == null)){
return null;
} else {
return G__49896.composedPath;
}
})())){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(event.composedPath());
} else {
return null;
}
}
});
logseq.shui.popup.core.close_targets = (function logseq$shui$popup$core$close_targets(event_details){
var event = (function (){var G__49897 = event_details;
if((G__49897 == null)){
return null;
} else {
return G__49897.event;
}
})();
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49899 = event_details;
if((G__49899 == null)){
return null;
} else {
return G__49899.trigger;
}
})(),logseq.shui.popup.core.event_related_target(event),logseq.shui.popup.core.event_target(event)], null),logseq.shui.popup.core.event_composed_path(event)));
});
logseq.shui.popup.core.focus_guard_target_QMARK_ = (function logseq$shui$popup$core$focus_guard_target_QMARK_(target){
return ((logseq.shui.popup.core.element_QMARK_(target)) && ((!((target.closest("[data-base-ui-focus-guard]") == null)))));
});
logseq.shui.popup.core.popup_content_target_QMARK_ = (function logseq$shui$popup$core$popup_content_target_QMARK_(target){
return ((logseq.shui.popup.core.element_QMARK_(target)) && ((!((target.closest(".ui__dropdown-menu-content, .ui__dropdown-menu-sub-content, .ui__popover-content, .ui__context-menu-content, .ui__context-menu-sub-content") == null)))));
});
/**
 * Retain (cancel) a focus-out close only when focus lands inside popup
 *   content — e.g. a stacked popup opened from a menu — and no Base UI focus
 *   guard is involved in the close.
 */
logseq.shui.popup.core.retain_focus_out_QMARK_ = (function logseq$shui$popup$core$retain_focus_out_QMARK_(event_details,targets){
return ((logseq.shui.popup.core.popup_content_target_QMARK_(logseq.shui.popup.core.event_related_target((function (){var G__49903 = event_details;
if((G__49903 == null)){
return null;
} else {
return G__49903.event;
}
})()))) && (cljs.core.not(cljs.core.some(logseq.shui.popup.core.focus_guard_target_QMARK_,targets))));
});
logseq.shui.popup.core.menu_transition_close_reasons = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["trigger-hover",null,"sibling-open",null,"trigger-focus",null,"list-navigation",null], null), null);
logseq.shui.popup.core.input_target_QMARK_ = (function logseq$shui$popup$core$input_target_QMARK_(target){
return ((logseq.shui.popup.core.element_QMARK_(target)) && ((((target instanceof HTMLInputElement)) || ((((target instanceof HTMLTextAreaElement)) || ((((target instanceof HTMLSelectElement)) || ((!((target.closest("[contenteditable='true']") == null)))))))))));
});
logseq.shui.popup.core.prevent_base_ui_handler_BANG_ = (function logseq$shui$popup$core$prevent_base_ui_handler_BANG_(event){
if(cljs.core.fn_QMARK_(event.preventBaseUIHandler)){
return event.preventBaseUIHandler();
} else {
return null;
}
});
logseq.shui.popup.core.menu_key_down_handler = (function logseq$shui$popup$core$menu_key_down_handler(content_props,disable_menu_handlers_QMARK_){
return (function (event){
var G__49910_50118 = content_props;
var G__49910_50119__$1 = (((G__49910_50118 == null))?null:new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765).cljs$core$IFn$_invoke$arity$1(G__49910_50118));
if((G__49910_50119__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__49910_50119__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
}

if(cljs.core.truth_((function (){var or__5142__auto__ = disable_menu_handlers_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.shui.popup.core.input_target_QMARK_(logseq.shui.popup.core.event_target(event));
}
})())){
return logseq.shui.popup.core.prevent_base_ui_handler_BANG_(event);
} else {
return null;
}
});
});
logseq.shui.popup.core.stop_toggle_event_BANG_ = (function logseq$shui$popup$core$stop_toggle_event_BANG_(event){
var native_event = logseq.shui.popup.core.native_event(event);
var seq__49911 = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,native_event], null))));
var chunk__49912 = null;
var count__49913 = (0);
var i__49914 = (0);
while(true){
if((i__49914 < count__49913)){
var e = chunk__49912.cljs$core$IIndexed$_nth$arity$2(null,i__49914);
if(cljs.core.fn_QMARK_(e.preventDefault)){
e.preventDefault();
} else {
}

if(cljs.core.fn_QMARK_(e.stopPropagation)){
e.stopPropagation();
} else {
}

if(cljs.core.fn_QMARK_(e.stopImmediatePropagation)){
e.stopImmediatePropagation();
} else {
}


var G__50120 = seq__49911;
var G__50121 = chunk__49912;
var G__50122 = count__49913;
var G__50123 = (i__49914 + (1));
seq__49911 = G__50120;
chunk__49912 = G__50121;
count__49913 = G__50122;
i__49914 = G__50123;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__49911);
if(temp__5825__auto__){
var seq__49911__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49911__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__49911__$1);
var G__50124 = cljs.core.chunk_rest(seq__49911__$1);
var G__50125 = c__5673__auto__;
var G__50126 = cljs.core.count(c__5673__auto__);
var G__50127 = (0);
seq__49911 = G__50124;
chunk__49912 = G__50125;
count__49913 = G__50126;
i__49914 = G__50127;
continue;
} else {
var e = cljs.core.first(seq__49911__$1);
if(cljs.core.fn_QMARK_(e.preventDefault)){
e.preventDefault();
} else {
}

if(cljs.core.fn_QMARK_(e.stopPropagation)){
e.stopPropagation();
} else {
}

if(cljs.core.fn_QMARK_(e.stopImmediatePropagation)){
e.stopImmediatePropagation();
} else {
}


var G__50128 = cljs.core.next(seq__49911__$1);
var G__50129 = null;
var G__50130 = (0);
var G__50131 = (0);
seq__49911 = G__50128;
chunk__49912 = G__50129;
count__49913 = G__50130;
i__49914 = G__50131;
continue;
}
} else {
return null;
}
}
break;
}
});
logseq.shui.popup.core.clear_selection_BANG_ = (function logseq$shui$popup$core$clear_selection_BANG_(){
var G__49917 = window;
var G__49917__$1 = (((G__49917 == null))?null:G__49917.getSelection());
if((G__49917__$1 == null)){
return null;
} else {
return G__49917__$1.removeAllRanges();
}
});
logseq.shui.popup.core.consume_toggle_event_BANG_ = (function logseq$shui$popup$core$consume_toggle_event_BANG_(event){
logseq.shui.popup.core.stop_toggle_event_BANG_(event);

return logseq.shui.popup.core.clear_selection_BANG_();
});
logseq.shui.popup.core.close_canceled_QMARK_ = (function logseq$shui$popup$core$close_canceled_QMARK_(handler,event_details){
var native_event = (function (){var G__49918 = event_details;
if((G__49918 == null)){
return null;
} else {
return G__49918.event;
}
})();
var result = ((cljs.core.fn_QMARK_(handler))?(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(native_event) : handler.call(null,native_event)):null);
if(cljs.core.truth_((function (){var or__5142__auto__ = result === false;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = cljs.core.fn_QMARK_(handler);
if(and__5140__auto__){
var G__49920 = native_event;
if((G__49920 == null)){
return null;
} else {
return G__49920.defaultPrevented;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var G__49924 = event_details;
if((G__49924 == null)){
return null;
} else {
return G__49924.isCanceled;
}
}
}
})())){
var G__49925_50133 = event_details;
if((G__49925_50133 == null)){
} else {
G__49925_50133.cancel();
}

return true;
} else {
return null;
}
});
logseq.shui.popup.core.show_BANG_ = (function logseq$shui$popup$core$show_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50134 = arguments.length;
var i__5877__auto___50135 = (0);
while(true){
if((i__5877__auto___50135 < len__5876__auto___50134)){
args__5882__auto__.push((arguments[i__5877__auto___50135]));

var G__50136 = (i__5877__auto___50135 + (1));
i__5877__auto___50135 = G__50136;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.shui.popup.core.show_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.shui.popup.core.show_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (event,content,p__49943){
var map__49948 = p__49943;
var map__49948__$1 = cljs.core.__destructure_map(map__49948);
var opts = map__49948__$1;
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
var as_dropdown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558));
var on_after_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"on-after-hide","on-after-hide",-1040754229));
var as_mask_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"as-mask?","as-mask?",1898009773));
var root_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"root-props","root-props",-1015460595));
var trigger_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"trigger-id","trigger-id",-599381518));
var focus_trigger_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826));
var on_before_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"on-before-hide","on-before-hide",782449747));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var as_content_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"as-content?","as-content?",-609445867));
var provided_id = id;
var id__$1 = (function (){var or__5142__auto__ = provided_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.shui.popup.core.gen_id();
}
})();
var _STAR_target = cljs.core.volatile_BANG_(null);
var pointer_event_QMARK_ = (((((typeof MouseEvent !== 'undefined')) && (((function (){var or__5142__auto__ = event.nativeEvent;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return event;
}
})() instanceof MouseEvent)))) || ((event instanceof goog.events.BrowserEvent)));
var position = ((cljs.core.vector_QMARK_(event))?event:((pointer_event_QMARK_)?(function (){var event_SINGLEQUOTE_ = (function (){var or__5142__auto__ = event.nativeEvent;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return event;
}
})();
cljs.core.vreset_BANG_(_STAR_target,(function (){var G__49949 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.currentTarget,event_SINGLEQUOTE_.currentTarget,event_SINGLEQUOTE_.target,event.target], null);
var G__49949__$1 = (((G__49949 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.shui.popup.core.element_QMARK_,G__49949));
if((G__49949__$1 == null)){
return null;
} else {
return cljs.core.first(G__49949__$1);
}
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_SINGLEQUOTE_.clientX,event_SINGLEQUOTE_.clientY], null);
})():(((((typeof Element !== 'undefined')) && ((event instanceof Element))))?(function (){
cljs.core.vreset_BANG_(_STAR_target,event);

return logseq.shui.popup.core.element_anchor_position(event,align,as_mask_QMARK_);
})()
:(cljs.core.truth_((function (){var and__5140__auto__ = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[event],null));
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(event),(2))) && (cljs.core.every_QMARK_(cljs.core.integer_QMARK_,event)));
} else {
return and__5140__auto__;
}
})())?event:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)
))));
var target = cljs.core.deref(_STAR_target);
var opened = (function (){var or__5142__auto__ = (function (){var G__49962 = logseq.shui.popup.core.get_popups();
var G__49962__$1 = (((G__49962 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49926_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49926_SHARP_));
}),G__49962));
if((G__49962__$1 == null)){
return null;
} else {
return cljs.core.first(G__49962__$1);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (provided_id == null);
if(and__5140__auto__){
return target;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.some((function (p1__49927_SHARP_){
if(cljs.core.truth_(logseq.shui.popup.core.same_popup_target_QMARK_(target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__49927_SHARP_)))){
return p1__49927_SHARP_;
} else {
return null;
}
}),logseq.shui.popup.core.get_popups());
} else {
return null;
}
}
})();
if(cljs.core.truth_(logseq.shui.popup.core.recently_hidden_target_QMARK_(target))){
cljs.core.reset_BANG_(logseq.shui.popup.core._STAR_last_hidden,null);

logseq.shui.popup.core.consume_toggle_event_BANG_(event);

return null;
} else {
if(cljs.core.truth_(opened)){
logseq.shui.popup.core.consume_toggle_event_BANG_(event);

if(((typeof new cljs.core.Keyword(null,"ignore-opening-outside-press-until","ignore-opening-outside-press-until",1860253990).cljs$core$IFn$_invoke$arity$1(opened) === 'number') && ((Date.now() < new cljs.core.Keyword(null,"ignore-opening-outside-press-until","ignore-opening-outside-press-until",1860253990).cljs$core$IFn$_invoke$arity$1(opened))))){
logseq.shui.popup.core.update_popup_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword(null,"ignore-opening-outside-press-until","ignore-opening-outside-press-until",1860253990),null);
} else {
var G__49966_50138 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opened);
var G__49967_50139 = (0);
var G__49968_50140 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"skip-focus?","skip-focus?",-969271680),true,new cljs.core.Keyword(null,"suppress-next-show?","suppress-next-show?",-200266120),true], null);
(logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$3(G__49966_50138,G__49967_50139,G__49968_50140) : logseq.shui.popup.core.hide_BANG_.call(null,G__49966_50138,G__49967_50139,G__49968_50140));
}

return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opened);
} else {
if(logseq.shui.popup.core.element_QMARK_(target)){
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(target,"ls-popup-closed");

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(target,"data-popup-active",(((id__$1 instanceof cljs.core.Keyword))?cljs.core.name(id__$1):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$1))));
} else {
}

logseq.shui.popup.core.upsert_popup_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.Keyword(null,"ignore-opening-outside-press-until","ignore-opening-outside-press-until",1860253990),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),new cljs.core.Keyword(null,"on-after-hide","on-after-hide",-1040754229),new cljs.core.Keyword(null,"root-props","root-props",-1015460595),new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),new cljs.core.Keyword(null,"trigger-id","trigger-id",-599381518),new cljs.core.Keyword(null,"on-before-hide","on-before-hide",782449747),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"as-content?","as-content?",-609445867),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"target","target",253001721)],[(function (){var G__49969 = content_props;
if((!((align == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49969,new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.name(align));
} else {
return G__49969;
}
})(),(Date.now() + (150)),content,as_dropdown_QMARK_,on_after_hide,root_props,focus_trigger_QMARK_,trigger_id,on_before_hide,id__$1,as_content_QMARK_,true,position,target])], 0)));

logseq.shui.popup.core.schedule_anchor_position_refresh_BANG_(id__$1,target,align,as_mask_QMARK_);

return id__$1;

}
}
}));

(logseq.shui.popup.core.show_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.shui.popup.core.show_BANG_.cljs$lang$applyTo = (function (seq49932){
var G__49933 = cljs.core.first(seq49932);
var seq49932__$1 = cljs.core.next(seq49932);
var G__49934 = cljs.core.first(seq49932__$1);
var seq49932__$2 = cljs.core.next(seq49932__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49933,G__49934,seq49932__$2);
}));

logseq.shui.popup.core.hide_BANG_ = (function logseq$shui$popup$core$hide_BANG_(var_args){
var G__49977 = arguments.length;
switch (G__49977) {
case 0:
return logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5825__auto__ = (function (){var G__49981 = logseq.shui.popup.core.get_popups();
var G__49981__$1 = (((G__49981 == null))?null:cljs.core.last(G__49981));
if((G__49981__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__49981__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$2(id,(0));
} else {
return null;
}
}));

(logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$3(id,(0),cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,delay){
return logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$3(id,delay,cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id,delay,p__49986){
var map__49987 = p__49986;
var map__49987__$1 = cljs.core.__destructure_map(map__49987);
var _all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49987__$1,new cljs.core.Keyword(null,"_all?","_all?",-2086727971));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49987__$1,new cljs.core.Keyword(null,"event","event",301435442));
var skip_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49987__$1,new cljs.core.Keyword(null,"skip-focus?","skip-focus?",-969271680));
var suppress_next_show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49987__$1,new cljs.core.Keyword(null,"suppress-next-show?","suppress-next-show?",-200266120));
var temp__5825__auto__ = logseq.shui.popup.core.get_popup(id);
if(cljs.core.truth_(temp__5825__auto__)){
var popup = temp__5825__auto__;
var config = cljs.core.last(popup);
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(config);
var f = (function (){
if(cljs.core.truth_(suppress_next_show_QMARK_)){
cljs.core.reset_BANG_(logseq.shui.popup.core._STAR_last_hidden,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"until","until",-1189166390),(Date.now() + (150))], null));
} else {
}

logseq.shui.popup.core.detach_popup_BANG_.cljs$core$IFn$_invoke$arity$2(id,skip_focus_QMARK_);

var G__49990 = new cljs.core.Keyword(null,"on-after-hide","on-after-hide",-1040754229).cljs$core$IFn$_invoke$arity$1(config);
if((G__49990 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__49990,cljs.core.PersistentVector.EMPTY);
}
});
if((!((function (){var G__49991 = new cljs.core.Keyword(null,"on-before-hide","on-before-hide",782449747).cljs$core$IFn$_invoke$arity$1(config);
if((G__49991 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__49991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
}
})() === false))){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(skip_focus_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = (!(new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826).cljs$core$IFn$_invoke$arity$1(config) === false));
if(and__5140__auto____$1){
var and__5140__auto____$2 = (!((target == null)));
if(and__5140__auto____$2){
var and__5140__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document,target.ownerDocument);
if(and__5140__auto____$3){
var and__5140__auto____$4 = target.isConnected;
if(cljs.core.truth_(and__5140__auto____$4)){
return cljs.core.fn_QMARK_(target.focus);
} else {
return and__5140__auto____$4;
}
} else {
return and__5140__auto____$3;
}
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
setTimeout((function (){
return target.focus();
}),(16));
} else {
}

var G__49993_50142 = target;
if((G__49993_50142 == null)){
} else {
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(G__49993_50142,"data-popup-active");
}

if(((typeof delay === 'number') && ((delay > (0))))){
return setTimeout(f,delay);
} else {
return f();
}
} else {
return null;
}
} else {
return null;
}
}));

(logseq.shui.popup.core.hide_BANG_.cljs$lang$maxFixedArity = 3);

logseq.shui.popup.core.hide_all_BANG_ = (function logseq$shui$popup$core$hide_all_BANG_(){
var seq__49995 = cljs.core.seq(cljs.core.deref(logseq.shui.popup.core._STAR_popups));
var chunk__49996 = null;
var count__49997 = (0);
var i__49998 = (0);
while(true){
if((i__49998 < count__49997)){
var map__50002 = chunk__49996.cljs$core$IIndexed$_nth$arity$2(null,i__49998);
var map__50002__$1 = cljs.core.__destructure_map(map__50002);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50002__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$3(id,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all?","all?",1103779750),true], null));


var G__50144 = seq__49995;
var G__50145 = chunk__49996;
var G__50146 = count__49997;
var G__50147 = (i__49998 + (1));
seq__49995 = G__50144;
chunk__49996 = G__50145;
count__49997 = G__50146;
i__49998 = G__50147;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__49995);
if(temp__5825__auto__){
var seq__49995__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49995__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__49995__$1);
var G__50150 = cljs.core.chunk_rest(seq__49995__$1);
var G__50151 = c__5673__auto__;
var G__50152 = cljs.core.count(c__5673__auto__);
var G__50153 = (0);
seq__49995 = G__50150;
chunk__49996 = G__50151;
count__49997 = G__50152;
i__49998 = G__50153;
continue;
} else {
var map__50005 = cljs.core.first(seq__49995__$1);
var map__50005__$1 = cljs.core.__destructure_map(map__50005);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50005__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$3(id,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all?","all?",1103779750),true], null));


var G__50154 = cljs.core.next(seq__49995__$1);
var G__50155 = null;
var G__50156 = (0);
var G__50157 = (0);
seq__49995 = G__50154;
chunk__49996 = G__50155;
count__49997 = G__50156;
i__49998 = G__50157;
continue;
}
} else {
return null;
}
}
break;
}
});
logseq.shui.popup.core.virtual_anchor = (function logseq$shui$popup$core$virtual_anchor(target,x,y,_width,height){
var height__$1 = ((((typeof height === 'number') && ((height > (0)))))?height:(1));
var rect = ({"x": x, "y": y, "left": x, "top": y, "right": (x + (1)), "bottom": (y + height__$1), "width": (1), "height": height__$1});
var anchor = ({"getBoundingClientRect": (function (){
return Object.assign(({}),rect);
})});
if(logseq.shui.popup.core.element_QMARK_(target)){
(anchor["contextElement"] = target);
} else {
}

return anchor;
});
logseq.shui.popup.core.anchor_props = (function logseq$shui$popup$core$anchor_props(content_props,target,position){
var vec__50012 = position;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50012,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50012,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50012,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50012,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),logseq.shui.popup.core.virtual_anchor(target,x,y,width,height),new cljs.core.Keyword(null,"position-method","position-method",-1348738348),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"position-method","position-method",-1348738348).cljs$core$IFn$_invoke$arity$1(content_props);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"positionMethod","positionMethod",-1128689535).cljs$core$IFn$_invoke$arity$1(content_props);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "fixed";
}
}
})()], null);
});
logseq.shui.popup.core.anchor_height = (function logseq$shui$popup$core$anchor_height(height){
if(((typeof height === 'number') && ((height > (0))))){
return height;
} else {
return (1);
}
});
logseq.shui.popup.core.x_popup = (function (){var render_fn__47251__auto__ = (function logseq$shui$popup$core$x_popup(p__50018){
var map__50019 = p__50018;
var map__50019__$1 = cljs.core.__destructure_map(map__50019);
var _props = map__50019__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"target","target",253001721));
var auto_side_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"auto-side?","auto-side?",-577583716));
var _on_before_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"_on-before-hide","_on-before-hide",2101953085));
var _on_after_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"_on-after-hide","_on-after-hide",1932954788));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
var ignore_opening_outside_press_until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"ignore-opening-outside-press-until","ignore-opening-outside-press-until",1860253990));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"content","content",15833224));
var as_dropdown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558));
var _auto_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"_auto-focus?","_auto-focus?",-2028945558));
var as_mask_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"as-mask?","as-mask?",1898009773));
var root_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"root-props","root-props",-1015460595));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var as_content_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"as-content?","as-content?",-609445867));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var force_popover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50019__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var temp__5825__auto__ = position;
if(cljs.core.truth_(temp__5825__auto__)){
var vec__50020 = temp__5825__auto__;
var _x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50020,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50020,(1),null);
var _width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50020,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50020,(3),null);
var use_menu_QMARK_ = cljs.core.not(force_popover_QMARK_);
var popup_root = ((use_menu_QMARK_)?logseq.shui.popup.core.dropdown_menu:logseq.shui.popup.core.popover);
var popup_trigger = ((use_menu_QMARK_)?logseq.shui.popup.core.dropdown_menu_trigger:logseq.shui.popup.core.popover_trigger);
var popup_content = ((use_menu_QMARK_)?logseq.shui.popup.core.dropdown_menu_content:logseq.shui.popup.core.popover_content);
var auto_side_fn = (function (){
var vh = window.innerHeight;
var height__$1 = logseq.shui.popup.core.anchor_height(height);
var vec__50027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(vh - (y + height__$1))], null);
var th = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50027,(0),null);
var bh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50027,(1),null);
if((bh > (280))){
return "bottom";
} else {
if(((th - bh) > (100))){
return "top";
} else {
return "bottom";
}
}
});
var auto_side_QMARK___$1 = ((cljs.core.boolean_QMARK_(auto_side_QMARK_))?auto_side_QMARK_:true);
var content_props__$1 = (function (){var G__50033 = content_props;
if(((cljs.core.not(as_mask_QMARK_)) && (auto_side_QMARK___$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50033,new cljs.core.Keyword(null,"side","side",389652279),auto_side_fn());
} else {
return G__50033;
}
})();
var handle_open_change_BANG_ = (function (open_QMARK___$1,e){
if((function (){var G__50034 = root_props;
var G__50034__$1 = (((G__50034 == null))?null:new cljs.core.Keyword(null,"onOpenChange","onOpenChange",-675762944).cljs$core$IFn$_invoke$arity$1(G__50034));
if((G__50034__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__50034__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK___$1,e], null));
}
})() === false){
return null;
} else {
if(cljs.core.truth_(open_QMARK___$1)){
return null;
} else {
var native_event = (function (){var G__50038 = e;
if((G__50038 == null)){
return null;
} else {
return G__50038.event;
}
})();
var last_popup_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(logseq.shui.popup.core.get_last_popup()),id);
var reason = (function (){var G__50039 = e;
if((G__50039 == null)){
return null;
} else {
return G__50039.reason;
}
})();
var targets = logseq.shui.popup.core.close_targets(e);
var target_toggle_QMARK_ = cljs.core.some((function (p1__50017_SHARP_){
return logseq.shui.popup.core.same_popup_target_QMARK_(target,p1__50017_SHARP_);
}),targets);
var opening_outside_press_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reason,"outside-press")) && (((typeof ignore_opening_outside_press_until === 'number') && ((Date.now() < ignore_opening_outside_press_until)))));
var focus_transition_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reason,"focus-out")) && (logseq.shui.popup.core.retain_focus_out_QMARK_(e,targets)));
var menu_transition_QMARK_ = ((use_menu_QMARK_) && (cljs.core.contains_QMARK_(logseq.shui.popup.core.menu_transition_close_reasons,reason)));
var handler = (function (){var G__50040 = reason;
switch (G__50040) {
case "escape-key":
return new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912).cljs$core$IFn$_invoke$arity$1(content_props__$1);

break;
case "outside-press":
return new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036).cljs$core$IFn$_invoke$arity$1(content_props__$1);

break;
default:
return null;

}
})();
if(cljs.core.truth_((function (){var or__5142__auto__ = (!(last_popup_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = target_toggle_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return ((opening_outside_press_QMARK_) || (((menu_transition_QMARK_) || (focus_transition_QMARK_))));
}
}
})())){
var G__50044 = e;
if((G__50044 == null)){
return null;
} else {
return G__50044.cancel();
}
} else {
if(cljs.core.truth_(logseq.shui.popup.core.close_canceled_QMARK_(handler,e))){
return null;
} else {
return logseq.shui.popup.core.hide_BANG_.cljs$core$IFn$_invoke$arity$3(id,(1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),native_event,new cljs.core.Keyword(null,"skip-focus?","skip-focus?",-969271680),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reason,"outside-press"),new cljs.core.Keyword(null,"suppress-next-show?","suppress-next-show?",-200266120),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reason,"outside-press")], null));
}
}
}
}
});
var disable_menu_handlers_QMARK_ = ((use_menu_QMARK_) && (cljs.core.not(as_dropdown_QMARK_)));
var content_props__$2 = (function (){var G__50048 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content_props__$1,logseq.shui.popup.core.anchor_props(content_props__$1,target,position)], 0));
var G__50048__$1 = (cljs.core.truth_(as_mask_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50048,new cljs.core.Keyword(null,"data-as-mask","data-as-mask",277341317),true):G__50048);
var G__50048__$2 = ((use_menu_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50048__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),logseq.shui.popup.core.menu_key_down_handler(content_props__$1,disable_menu_handlers_QMARK_)):G__50048__$1);
if(disable_menu_handlers_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50048__$2,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),logseq.shui.popup.core.prevent_base_ui_handler_BANG_);
} else {
return G__50048__$2;
}
})();
var content__$1 = ((cljs.core.fn_QMARK_(content))?(function (){var G__50049 = (function (){var G__50050 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
if(cljs.core.truth_(as_content_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50050,new cljs.core.Keyword(null,"content-props","content-props",687449284),content_props__$2);
} else {
return G__50050;
}
})();
return (content.cljs$core$IFn$_invoke$arity$1 ? content.cljs$core$IFn$_invoke$arity$1(G__50049) : content.call(null,G__50049));
})():content);
var G__50051 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"onOpenChange","onOpenChange",-675762944),handle_open_change_BANG_], null)], 0));
var G__50052 = (function (){var G__50054 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null);
var G__50055 = (function (){var G__50056 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed p-0 opacity-0 pointer-events-none",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"top","top",-1856271961),(-10000),new cljs.core.Keyword(null,"left","left",-399115937),(-10000)], null)], null);
var G__50057 = "";
return (logseq.shui.popup.core.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.popup.core.button.cljs$core$IFn$_invoke$arity$2(G__50056,G__50057) : logseq.shui.popup.core.button.call(null,G__50056,G__50057));
})();
return (popup_trigger.cljs$core$IFn$_invoke$arity$2 ? popup_trigger.cljs$core$IFn$_invoke$arity$2(G__50054,G__50055) : popup_trigger.call(null,G__50054,G__50055));
})();
var G__50053 = (cljs.core.truth_(as_content_QMARK_)?content__$1:(popup_content.cljs$core$IFn$_invoke$arity$2 ? popup_content.cljs$core$IFn$_invoke$arity$2(content_props__$2,content__$1) : popup_content.call(null,content_props__$2,content__$1)));
return (popup_root.cljs$core$IFn$_invoke$arity$3 ? popup_root.cljs$core$IFn$_invoke$arity$3(G__50051,G__50052,G__50053) : popup_root.call(null,G__50051,G__50052,G__50053));
} else {
return null;
}
});
var comp__47252__auto__ = (function() { 
var logseq$shui$popup$core$x_popup__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50060 = cljs.core.first(args__47253__auto__);
var G__50061 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50060,G__50061) : io.factorhouse.hsx.core.obj_get.call(null,G__50060,G__50061));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"x-popup","x-popup",-1094583280,null),args__47253__auto__),logseq$shui$popup$core$x_popup,args__47253__auto__,null);
}
};
var logseq$shui$popup$core$x_popup = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50175__i = 0, G__50175__a = new Array(arguments.length -  0);
while (G__50175__i < G__50175__a.length) {G__50175__a[G__50175__i] = arguments[G__50175__i + 0]; ++G__50175__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50175__a,0,null);
} 
return logseq$shui$popup$core$x_popup__delegate.call(this,args__47253__auto__);};
logseq$shui$popup$core$x_popup.cljs$lang$maxFixedArity = 0;
logseq$shui$popup$core$x_popup.cljs$lang$applyTo = (function (arglist__50176){
var args__47253__auto__ = cljs.core.seq(arglist__50176);
return logseq$shui$popup$core$x_popup__delegate(args__47253__auto__);
});
logseq$shui$popup$core$x_popup.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$popup$core$x_popup__delegate;
return logseq$shui$popup$core$x_popup;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50062 = comp__47252__auto__;
var G__50063 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50062,G__50063) : io.factorhouse.hsx.core.react_memo.call(null,G__50062,G__50063));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"x-popup");

return comp__47252__auto__;
})();
logseq.shui.popup.core.install_popups = (function (){var render_fn__47251__auto__ = (function logseq$shui$popup$core$install_popups(){
var vec__50066 = (logseq.shui.util.use_atom.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.util.use_atom.cljs$core$IFn$_invoke$arity$1(logseq.shui.popup.core._STAR_popups) : logseq.shui.util.use_atom.call(null,logseq.shui.popup.core._STAR_popups));
var popups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50066,(0),null);
var _set_popups_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50066,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__5628__auto__ = (function logseq$shui$popup$core$install_popups_$_iter__50070(s__50071){
return (new cljs.core.LazySeq(null,(function (){
var s__50071__$1 = s__50071;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50071__$1);
if(temp__5825__auto__){
var s__50071__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50071__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50071__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50073 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50072 = (0);
while(true){
if((i__50072 < size__5627__auto__)){
var config = cljs.core._nth(c__5626__auto__,i__50072);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(config);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"all?","all?",1103779750).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
cljs.core.chunk_append(b__50073,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.popup.core.x_popup,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config)], null)));

var G__50183 = (i__50072 + (1));
i__50072 = G__50183;
continue;
} else {
var G__50184 = (i__50072 + (1));
i__50072 = G__50184;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50073),logseq$shui$popup$core$install_popups_$_iter__50070(cljs.core.chunk_rest(s__50071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50073),null);
}
} else {
var config = cljs.core.first(s__50071__$2);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(config);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"all?","all?",1103779750).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.popup.core.x_popup,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config)], null)),logseq$shui$popup$core$install_popups_$_iter__50070(cljs.core.rest(s__50071__$2)));
} else {
var G__50186 = cljs.core.rest(s__50071__$2);
s__50071__$1 = G__50186;
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
return iter__5628__auto__(popups);
})()], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$popup$core$install_popups__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50082 = cljs.core.first(args__47253__auto__);
var G__50083 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50082,G__50083) : io.factorhouse.hsx.core.obj_get.call(null,G__50082,G__50083));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"install-popups","install-popups",2090793623,null),args__47253__auto__),logseq$shui$popup$core$install_popups,args__47253__auto__,null);
}
};
var logseq$shui$popup$core$install_popups = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50187__i = 0, G__50187__a = new Array(arguments.length -  0);
while (G__50187__i < G__50187__a.length) {G__50187__a[G__50187__i] = arguments[G__50187__i + 0]; ++G__50187__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50187__a,0,null);
} 
return logseq$shui$popup$core$install_popups__delegate.call(this,args__47253__auto__);};
logseq$shui$popup$core$install_popups.cljs$lang$maxFixedArity = 0;
logseq$shui$popup$core$install_popups.cljs$lang$applyTo = (function (arglist__50188){
var args__47253__auto__ = cljs.core.seq(arglist__50188);
return logseq$shui$popup$core$install_popups__delegate(args__47253__auto__);
});
logseq$shui$popup$core$install_popups.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$popup$core$install_popups__delegate;
return logseq$shui$popup$core$install_popups;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50084 = comp__47252__auto__;
var G__50085 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50084,G__50085) : io.factorhouse.hsx.core.react_memo.call(null,G__50084,G__50085));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"install-popups");

return comp__47252__auto__;
})();

//# sourceMappingURL=logseq.shui.popup.core.js.map
