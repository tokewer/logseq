goog.provide('frontend.mobile.util');
var module$node_modules$$capacitor$core$dist$index_cjs=shadow.js.require("module$node_modules$$capacitor$core$dist$index_cjs", {});
var module$node_modules$$capacitor$splash_screen$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$splash_screen$dist$plugin_cjs", {});
frontend.mobile.util.platform = (function frontend$mobile$util$platform(){
return module$node_modules$$capacitor$core$dist$index_cjs.Capacitor.getPlatform();
});
frontend.mobile.util.native_platform_QMARK_ = (function frontend$mobile$util$native_platform_QMARK_(){
return module$node_modules$$capacitor$core$dist$index_cjs.Capacitor.isNativePlatform();
});
frontend.mobile.util.native_ios_QMARK_ = (function frontend$mobile$util$native_ios_QMARK_(){
var and__5140__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.platform(),"ios");
} else {
return and__5140__auto__;
}
});
frontend.mobile.util.native_android_QMARK_ = (function frontend$mobile$util$native_android_QMARK_(){
var and__5140__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.platform(),"android");
} else {
return and__5140__auto__;
}
});
/**
 * Check if a native plugin is available from Capacitor.Plugins.
 */
frontend.mobile.util.plugin_available_QMARK_ = (function frontend$mobile$util$plugin_available_QMARK_(name){
return cljs.core.boolean$((Capacitor.Plugins[name]));
});
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.folder_picker !== 'undefined')){
} else {
frontend.mobile.util.folder_picker = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("FolderPicker");
}
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.ui_local !== 'undefined')){
} else {
frontend.mobile.util.ui_local = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("UILocal");
}
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.native_top_bar !== 'undefined')){
} else {
frontend.mobile.util.native_top_bar = (cljs.core.truth_((function (){var and__5140__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return frontend.mobile.util.plugin_available_QMARK_("NativeTopBarPlugin");
} else {
return and__5140__auto__;
}
})())?module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("NativeTopBarPlugin"):null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.native_bottom_sheet !== 'undefined')){
} else {
frontend.mobile.util.native_bottom_sheet = (cljs.core.truth_((function (){var and__5140__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return frontend.mobile.util.plugin_available_QMARK_("NativeBottomSheetPlugin");
} else {
return and__5140__auto__;
}
})())?module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("NativeBottomSheetPlugin"):null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.native_editor_toolbar !== 'undefined')){
} else {
frontend.mobile.util.native_editor_toolbar = (cljs.core.truth_((function (){var and__5140__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return frontend.mobile.util.plugin_available_QMARK_("NativeEditorToolbarPlugin");
} else {
return and__5140__auto__;
}
})())?module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("NativeEditorToolbarPlugin"):null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.native_selection_action_bar !== 'undefined')){
} else {
frontend.mobile.util.native_selection_action_bar = (cljs.core.truth_((function (){var and__5140__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return frontend.mobile.util.plugin_available_QMARK_("NativeSelectionActionBarPlugin");
} else {
return and__5140__auto__;
}
})())?module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("NativeSelectionActionBarPlugin"):null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.ios_utils !== 'undefined')){
} else {
frontend.mobile.util.ios_utils = (cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("Utils"):null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.android_utils !== 'undefined')){
} else {
frontend.mobile.util.android_utils = (cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("Utils"):null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.ios_content_size_listener !== 'undefined')){
} else {
frontend.mobile.util.ios_content_size_listener = null;
}
frontend.mobile.util.set_ios_font_scale_BANG_ = (function frontend$mobile$util$set_ios_font_scale_BANG_(scale){
var style = document.documentElement.style;
var scale__$1 = (function (){var or__5142__auto__ = scale;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})();
return style.setProperty("--ls-mobile-font-scale",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale__$1)));
});
/**
 * Fetch the current iOS Dynamic Type scale and sync it to CSS variables.
 * Also attaches a listener to keep it in sync when the user changes the setting.
 */
frontend.mobile.util.sync_ios_content_size_BANG_ = (function frontend$mobile$util$sync_ios_content_size_BANG_(){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
var apply_scale_BANG_ = (function (payload){
var payload__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(payload,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return frontend.mobile.util.set_ios_font_scale_BANG_(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(payload__$1));
});
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.ios_utils.getContentSize(),(function (p1__28071_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__28071_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}))),(function (payload){
return promesa.protocols._promise(frontend.mobile.util.set_ios_font_scale_BANG_(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(payload)));
}));
}));

if((frontend.mobile.util.ios_content_size_listener == null)){
return (frontend.mobile.util.ios_content_size_listener = frontend.mobile.util.ios_utils.addListener("contentSizeCategoryChanged",(function (payload){
return apply_scale_BANG_(payload);
})));
} else {
return null;
}
} else {
return null;
}
});
frontend.mobile.util.hide_splash = (function frontend$mobile$util$hide_splash(){
return module$node_modules$$capacitor$splash_screen$dist$plugin_cjs.SplashScreen.hide();
});
frontend.mobile.util.set_ios_interface_style_BANG_ = (function frontend$mobile$util$set_ios_interface_style_BANG_(mode,system_QMARK_){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._promise(frontend.mobile.util.ios_utils.setInterfaceStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"system","system",-29381724),system_QMARK_], null))));
}));
} else {
return null;
}
});
frontend.mobile.util.set_android_interface_style_BANG_ = (function frontend$mobile$util$set_android_interface_style_BANG_(mode,system_QMARK_){
if(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._promise(frontend.mobile.util.android_utils.setInterfaceStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"system","system",-29381724),system_QMARK_], null))));
}));
} else {
return null;
}
});
/**
 * Sync native light/dark/system appearance with Logseq theme mode.
 */
frontend.mobile.util.set_native_interface_style_BANG_ = (function frontend$mobile$util$set_native_interface_style_BANG_(mode,system_QMARK_){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return frontend.mobile.util.set_ios_interface_style_BANG_(mode,system_QMARK_);
} else {
if(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())){
return frontend.mobile.util.set_android_interface_style_BANG_(mode,system_QMARK_);
} else {
return null;

}
}
});
frontend.mobile.util.get_idevice_model = (function frontend$mobile$util$get_idevice_model(){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
var width = screen.width;
var height = screen.height;
var landscape_QMARK_ = (width > height);
var vec__28097 = ((landscape_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28097,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28097,(1),null);
var fallback_model = ((((((((320) <= width__$1)) && ((width__$1 <= (600))))) && (((((568) <= height__$1)) && ((height__$1 <= (1000)))))))?"iPhone":"Not a known Apple device!");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width__$1,height__$1], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(476),(847)], null),G__28104)){
return "iPhone7Plus";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(390),(844)], null),G__28104)){
return "iPhone12";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(834),(1112)], null),G__28104)){
return "iPadAir10.5";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(393),(852)], null),G__28104)){
return "iPhone14Pro";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(414),(736)], null),G__28104)){
return "iPhone8Plus";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(414),(896)], null),G__28104)){
return "iPhone11";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1024),(1366)], null),G__28104)){
return "iPadPro12.9";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(834),(1194)], null),G__28104)){
return "iPadPro11";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1032),(1376)], null),G__28104)){
return "iPadPro13(M4)";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(834),(1210)], null),G__28104)){
return "iPadPro11(M4)";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(820),(1180)], null),G__28104)){
return "iPad10.9";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(430),(932)], null),G__28104)){
return "iPhone14ProMax";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(375),(812)], null),G__28104)){
return "iPhoneX";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(744),(1133)], null),G__28104)){
return "iPadmini8.3";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(428),(926)], null),G__28104)){
return "iPhone13ProMax";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(375),(667)], null),G__28104)){
return "iPhone8";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(810),(1080)], null),G__28104)){
return "iPad10.2";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(320),(568)], null),G__28104)){
return "iPhoneSE4";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(768),(1024)], null),G__28104)){
return "iPad9.7";
} else {
return fallback_model;

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
})(),landscape_QMARK_], null);
} else {
return null;
}
});
frontend.mobile.util.native_iphone_without_notch_QMARK_ = (function frontend$mobile$util$native_iphone_without_notch_QMARK_(){
var temp__5825__auto__ = frontend.mobile.util.get_idevice_model();
if(cljs.core.truth_(temp__5825__auto__)){
var model = temp__5825__auto__;
return clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPhone8");
} else {
return null;
}
});
frontend.mobile.util.native_iphone_QMARK_ = (function frontend$mobile$util$native_iphone_QMARK_(){
var temp__5825__auto__ = frontend.mobile.util.get_idevice_model();
if(cljs.core.truth_(temp__5825__auto__)){
var model = temp__5825__auto__;
return ((clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPhone")) && ((!(clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPhone8")))));
} else {
return null;
}
});
frontend.mobile.util.native_ipad_QMARK_ = (function frontend$mobile$util$native_ipad_QMARK_(){
var temp__5825__auto__ = frontend.mobile.util.get_idevice_model();
if(cljs.core.truth_(temp__5825__auto__)){
var model = temp__5825__auto__;
return clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPad");
} else {
return null;
}
});
/**
 * Detect whether iOS device is in Zoom Display
 */
frontend.mobile.util.check_ios_zoomed_display = (function frontend$mobile$util$check_ios_zoomed_display(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.ios_utils.isZoomed(),(function (p1__28122_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__28122_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}))),(function (is_zoomed_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"isZoomed","isZoomed",789822872).cljs$core$IFn$_invoke$arity$1(is_zoomed_QMARK_))?(function (){var cl = document.documentElement.classList;
return cl.add("is-zoomed-native-ios");
})():null));
}));
}));
});
/**
 * Show a native drop alert on iOS.
 * Options: :title or :message (required), :subtitle, :type (info/success/warning/error),
 * :icon (SF Symbols name), :icon-color (hex string), :tint-color (alias for icon tint),
 * :position (:top/:bottom), :duration (seconds), :accessibility (VoiceOver text).
 */
frontend.mobile.util.alert = (function frontend$mobile$util$alert(p__28136){
var map__28137 = p__28136;
var map__28137__$1 = cljs.core.__destructure_map(map__28137);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var accessibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"accessibility","accessibility",-2088691226));
var icon_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var tint_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"tint-color","tint-color",-940062868));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28137__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var title__$1 = (function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return message;
}
})();
var type_str = (((type instanceof cljs.core.Keyword))?cljs.core.name(type):((typeof type === 'string')?type:null));
var position_str = (((position instanceof cljs.core.Keyword))?cljs.core.name(position):((typeof position === 'string')?position:null));
var payload = (function (){var G__28140 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title__$1], null);
var G__28140__$1 = (cljs.core.truth_(subtitle)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28140,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),subtitle):G__28140);
var G__28140__$2 = (cljs.core.truth_(type_str)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28140__$1,new cljs.core.Keyword(null,"type","type",1174270348),type_str):G__28140__$1);
var G__28140__$3 = (cljs.core.truth_(icon)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28140__$2,new cljs.core.Keyword(null,"icon","icon",1679606541),icon):G__28140__$2);
var G__28140__$4 = (cljs.core.truth_(icon_color)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28140__$3,new cljs.core.Keyword(null,"iconColor","iconColor",223874752),icon_color):G__28140__$3);
var G__28140__$5 = (cljs.core.truth_(tint_color)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28140__$4,new cljs.core.Keyword(null,"tintColor","tintColor",-1703064450),tint_color):G__28140__$4);
var G__28140__$6 = (cljs.core.truth_(position_str)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28140__$5,new cljs.core.Keyword(null,"position","position",-2011731912),position_str):G__28140__$5);
var G__28140__$7 = (cljs.core.truth_(duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28140__$6,new cljs.core.Keyword(null,"duration","duration",1444101068),duration):G__28140__$6);
if(cljs.core.truth_(accessibility)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28140__$7,new cljs.core.Keyword(null,"accessibility","accessibility",-2088691226),accessibility);
} else {
return G__28140__$7;
}
})();
if(cljs.core.not(title__$1)){
return promesa.core.rejected((new Error("title is required")));
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.mobile.util.ui_local.alert(cljs.core.clj__GT_js(payload));
} else {
return promesa.core.resolved(null);

}
}
});
frontend.mobile.util.hide_alert = (function frontend$mobile$util$hide_alert(){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.mobile.util.ui_local.hideAlert();
} else {
return promesa.core.resolved(null);
}
});
frontend.mobile.util.mobile_keyboard_anchor_id = "ls-mobile-kb-anchor";
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util._STAR_hidden_input_timeout !== 'undefined')){
} else {
frontend.mobile.util._STAR_hidden_input_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.mobile.util.mobile_focus_hidden_input = (function frontend$mobile$util$mobile_focus_hidden_input(){
var temp__5825__auto___28153 = cljs.core.deref(frontend.mobile.util._STAR_hidden_input_timeout);
if(cljs.core.truth_(temp__5825__auto___28153)){
var t_28154 = temp__5825__auto___28153;
clearTimeout(t_28154);
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
var temp__5825__auto__ = goog.dom.getElement(frontend.mobile.util.mobile_keyboard_anchor_id);
if(cljs.core.truth_(temp__5825__auto__)){
var anchor = temp__5825__auto__;
cljs.core.reset_BANG_(frontend.mobile.util._STAR_hidden_input_timeout,setTimeout((function (){
return anchor.blur();
}),(200)));

return anchor.focus();
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.mobile.util.js.map
