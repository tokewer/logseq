goog.provide('frontend.components.left_sidebar_util');
frontend.components.left_sidebar_util.mobile_navigation_target_QMARK_ = (function frontend$components$left_sidebar_util$mobile_navigation_target_QMARK_(target){
return cljs.core.boolean$(cljs.core.some((function (selector){
return target.closest(selector);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".sidebar-navigations a",".favorites .bd",".recent .bd",".nav-header"], null)));
});

//# sourceMappingURL=frontend.components.left_sidebar_util.js.map
