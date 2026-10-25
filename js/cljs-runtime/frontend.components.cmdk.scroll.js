goog.provide('frontend.components.cmdk.scroll');
/**
 * Builds normalized focus geometry from `container` and `target` DOM elements.
 * 
 *   Input:
 *   - `container`: scroll container element.
 *   - `target`: focused row element.
 * 
 *   Output:
 *   - `nil` if either input is missing.
 *   - A map with keys:
 *  `:scroll-top`, `:viewport-height`, `:scroll-height`, `:focus-top`, `:focus-height`.
 */
frontend.components.cmdk.scroll.focus_row_visible_rect = (function frontend$components$cmdk$scroll$focus_row_visible_rect(container,target){
if(cljs.core.truth_((function (){var and__5140__auto__ = container;
if(cljs.core.truth_(and__5140__auto__)){
return target;
} else {
return and__5140__auto__;
}
})())){
var container_rect = container.getBoundingClientRect();
var target_rect = target.getBoundingClientRect();
var scroll_top = container.scrollTop;
var focus_top = (scroll_top + (target_rect.top - container_rect.top));
var focus_height = target_rect.height;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"viewport-height","viewport-height",1948518883),container.clientHeight,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),container.scrollHeight,new cljs.core.Keyword(null,"focus-top","focus-top",-1380005451),focus_top,new cljs.core.Keyword(null,"focus-height","focus-height",-2072065941),focus_height], null);
} else {
return null;
}
});
/**
 * Returns the maximum valid scroll top for geometry map `data`.
 */
frontend.components.cmdk.scroll.max_scroll_top = (function frontend$components$cmdk$scroll$max_scroll_top(p__94295){
var map__94296 = p__94295;
var map__94296__$1 = cljs.core.__destructure_map(map__94296);
var scroll_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94296__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));
var viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94296__$1,new cljs.core.Keyword(null,"viewport-height","viewport-height",1948518883));
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),((function (){var or__5142__auto__ = scroll_height;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() - (function (){var or__5142__auto__ = viewport_height;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()));
});
/**
 * Clamps numeric `scroll-top` into valid range based on geometry map `data`.
 *   Always returns an integer.
 */
frontend.components.cmdk.scroll.clamp_scroll_top = (function frontend$components$cmdk$scroll$clamp_scroll_top(scroll_top,data){
var max_top = frontend.components.cmdk.scroll.max_scroll_top(data);
return Math.round(cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(scroll_top,(0)),max_top));
});
/**
 * Returns a corrected `scroll-top` that keeps the focus row visible in viewport,
 *   respecting optional scroll-padding insets.
 * 
 *   Input map keys:
 * 
 *   | key                       | description                                                |
 *   |---------------------------|------------------------------------------------------------|
 *   | `:scroll-top`             | Current container scroll top                               |
 *   | `:viewport-height`        | Container viewport height                                  |
 *   | `:focus-top`              | Focus row top in container scroll coordinates              |
 *   | `:focus-height`           | Focus row height                                           |
 *   | `:scroll-height`          | Full scroll height used for clamping                       |
 *   | `:scroll-padding-top`     | Optional clearance at top of viewport in px (default 0)    |
 *   | `:scroll-padding-bottom`  | Optional clearance at bottom of viewport in px (default 0) |
 * 
 *   Output:
 *   - A clamped numeric `scroll-top`.
 */
frontend.components.cmdk.scroll.ensure_focus_visible_scroll_top = (function frontend$components$cmdk$scroll$ensure_focus_visible_scroll_top(p__94297){
var map__94298 = p__94297;
var map__94298__$1 = cljs.core.__destructure_map(map__94298);
var data = map__94298__$1;
var scroll_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94298__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));
var viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94298__$1,new cljs.core.Keyword(null,"viewport-height","viewport-height",1948518883));
var focus_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94298__$1,new cljs.core.Keyword(null,"focus-top","focus-top",-1380005451));
var focus_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94298__$1,new cljs.core.Keyword(null,"focus-height","focus-height",-2072065941));
var scroll_padding_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94298__$1,new cljs.core.Keyword(null,"scroll-padding-top","scroll-padding-top",-1893186356),(0));
var scroll_padding_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94298__$1,new cljs.core.Keyword(null,"scroll-padding-bottom","scroll-padding-bottom",1640092791),(0));
var focus_bottom = (focus_top + focus_height);
var viewport_bottom = (scroll_top + viewport_height);
var target_top = (((focus_top == null))?scroll_top:(((focus_top < (scroll_top + scroll_padding_top)))?(focus_top - scroll_padding_top):(((focus_bottom > (viewport_bottom - scroll_padding_bottom)))?((focus_bottom - viewport_height) + scroll_padding_bottom):scroll_top
)));
return frontend.components.cmdk.scroll.clamp_scroll_top(target_top,data);
});
/**
 * Returns true when a mounted row should trigger deferred keyboard scroll correction.
 * 
 *   This guard prevents stale or mouse-driven mounts from unexpectedly scrolling.
 */
frontend.components.cmdk.scroll.should_scroll_on_item_mounted_QMARK_ = (function frontend$components$cmdk$scroll$should_scroll_on_item_mounted_QMARK_(focus_source,pending_item_index,highlighted_item_index,mounted_item_index){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),focus_source)) && ((((!((pending_item_index == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pending_item_index,mounted_item_index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highlighted_item_index,mounted_item_index)))))));
});

//# sourceMappingURL=frontend.components.cmdk.scroll.js.map
