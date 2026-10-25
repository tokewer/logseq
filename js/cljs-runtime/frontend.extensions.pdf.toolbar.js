goog.provide('frontend.extensions.pdf.toolbar');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
frontend.extensions.pdf.toolbar._STAR_area_dashed_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,false)(frontend.storage.get("ls-pdf-area-is-dashed")));
frontend.extensions.pdf.toolbar._STAR_area_mode_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.extensions.pdf.toolbar._STAR_highlight_mode_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.toolbar !== 'undefined') && (typeof frontend.extensions.pdf.toolbar.highlights_ctx !== 'undefined')){
} else {
frontend.extensions.pdf.toolbar.highlights_ctx = module$node_modules$react$index.createContext(null);
}
frontend.extensions.pdf.toolbar.pdf_settings = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$toolbar$pdf_settings(viewer,theme,p__58031){
var map__58032 = p__58031;
var map__58032__$1 = cljs.core.__destructure_map(map__58032);
var hide_settings_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58032__$1,new cljs.core.Keyword(null,"hide-settings!","hide-settings!",-226708021));
var select_theme_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58032__$1,new cljs.core.Keyword(null,"select-theme!","select-theme!",1638110696));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58032__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var _STAR_el_popup = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__58033 = logseq.shui.hooks.use_atom(frontend.extensions.pdf.toolbar._STAR_area_dashed_QMARK_);
var area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58033,(0),null);
var set_area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58033,(1),null);
var hl_block_colored_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","block-highlight-colored?","pdf/block-highlight-colored?",1763046626)], null));
var auto_open_ctx_menu_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","auto-open-ctx-menu?","pdf/auto-open-ctx-menu?",-1579137381)], null));
logseq.shui.hooks.use_effect_BANG_((function (){
var el_popup = logseq.shui.hooks.deref(_STAR_el_popup);
var cb = (function (e){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.which,(27));
if(and__5140__auto__){
return (hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_settings_BANG_.call(null));
} else {
return and__5140__auto__;
}
});
setTimeout((function (){
return el_popup.focus();
}));

el_popup.addEventListener("keyup",cb);

return (function (){
return el_popup.removeEventListener("keyup",cb);
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
return frontend.storage.set("ls-pdf-area-is-dashed",cljs.core.boolean$(area_dashed_QMARK_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [area_dashed_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var b = cljs.core.boolean$(hl_block_colored_QMARK_);
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","block-highlight-colored?","pdf/block-highlight-colored?",1763046626),b);

return frontend.storage.set("ls-pdf-hl-block-is-colored",b);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl_block_colored_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var b = cljs.core.boolean$(auto_open_ctx_menu_QMARK_);
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","auto-open-ctx-menu?","pdf/auto-open-ctx-menu?",-1579137381),b);

return frontend.storage.set("ls-pdf-auto-open-ctx-menu",b);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [auto_open_ctx_menu_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var cb = (function (p1__58030_SHARP_){
var target = p1__58030_SHARP_.target;
if(((cljs.core.not((function (){var G__58036 = logseq.shui.hooks.deref(_STAR_el_popup);
if((G__58036 == null)){
return null;
} else {
return G__58036.contains(target);
}
})())) && ((target.closest(".ui__dialog-content") == null)))){
return (hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_settings_BANG_.call(null));
} else {
return null;
}
});
var doc = frontend.extensions.pdf.windows.resolve_own_container(viewer);
setTimeout((function (){
return doc.addEventListener("click",cb);
}));

return (function (){
return doc.removeEventListener("click",cb);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-settings.hls-popup-overlay.visible","div.extensions__pdf-settings.hls-popup-overlay.visible",343994973),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-settings-inner.hls-popup-box","div.extensions__pdf-settings-inner.hls-popup-box",-983785189),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_popup,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-settings-item.theme-picker","div.extensions__pdf-settings-item.theme-picker",-2093902972),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (it){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.items-center.justify-center","button.flex.items-center.justify-center",-1757945011),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),it,new cljs.core.Keyword(null,"class","class",-2030961996),it,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (select_theme_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_theme_BANG_.cljs$core$IFn$_invoke$arity$1(it) : select_theme_BANG_.call(null,it));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,it))?frontend.components.svg.check.cljs$core$IFn$_invoke$arity$0():null)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["light","warm","dark"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-settings-item.toggle-input","div.extensions__pdf-settings-item.toggle-input",-1205724374),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","toggle-dashed","pdf/toggle-dashed",431816058)) : t.call(null,new cljs.core.Keyword("pdf","toggle-dashed","pdf/toggle-dashed",431816058)))], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(area_dashed_QMARK_,(function (){
var G__58037 = cljs.core.not(area_dashed_QMARK_);
return (set_area_dashed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_area_dashed_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58037) : set_area_dashed_QMARK_.call(null,G__58037));
}),true)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-settings-item.toggle-input.is-between","div.extensions__pdf-settings-item.toggle-input.is-between",-557829485),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","hl-block-colored","pdf/hl-block-colored",1129335772)) : t.call(null,new cljs.core.Keyword("pdf","hl-block-colored","pdf/hl-block-colored",1129335772)))], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(hl_block_colored_QMARK_,(function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","block-highlight-colored?","pdf/block-highlight-colored?",1763046626),cljs.core.not(hl_block_colored_QMARK_));
}),true)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-settings-item.toggle-input.is-between","div.extensions__pdf-settings-item.toggle-input.is-between",-557829485),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","auto-open-context-menu","pdf/auto-open-context-menu",-1451551055)) : t.call(null,new cljs.core.Keyword("pdf","auto-open-context-menu","pdf/auto-open-context-menu",-1451551055)))], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(auto_open_ctx_menu_QMARK_,(function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","auto-open-ctx-menu?","pdf/auto-open-ctx-menu?",-1579137381),cljs.core.not(auto_open_ctx_menu_QMARK_));
}),true)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-settings-item.toggle-input","div.extensions__pdf-settings-item.toggle-input",-1205724374),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.is-info.w-full.text-gray-500","a.is-info.w-full.text-gray-500",-1343079651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","doc-metadata","pdf/doc-metadata",-356969852)) : t.call(null,new cljs.core.Keyword("pdf","doc-metadata","pdf/doc-metadata",-356969852))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.utils.get_meta_data$(viewer)),(function (ret){
return promesa.protocols._mcat(promesa.protocols._promise((hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_settings_BANG_.call(null))),(function (___21901__auto__){
return promesa.protocols._promise((function (){var G__58038 = (frontend.extensions.pdf.toolbar.make_docinfo_in_modal.cljs$core$IFn$_invoke$arity$1 ? frontend.extensions.pdf.toolbar.make_docinfo_in_modal.cljs$core$IFn$_invoke$arity$1(ret) : frontend.extensions.pdf.toolbar.make_docinfo_in_modal.call(null,ret));
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__58038) : logseq.shui.ui.dialog_open_BANG_.call(null,G__58038));
})());
}));
}));
}));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.justify-between.w-full","span.flex.items-center.justify-between.w-full",-1344563786),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","doc-metadata","pdf/doc-metadata",-356969852)) : t.call(null,new cljs.core.Keyword("pdf","doc-metadata","pdf/doc-metadata",-356969852))),frontend.components.svg.icon_info.cljs$core$IFn$_invoke$arity$0()], null)], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$toolbar$pdf_settings__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58039 = cljs.core.first(args__31746__auto__);
var G__58040 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58039,G__58040) : io.factorhouse.hsx.core.obj_get.call(null,G__58039,G__58040));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-settings","pdf-settings",324174100,null),args__31746__auto__),frontend$extensions$pdf$toolbar$pdf_settings,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$toolbar$pdf_settings = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58179__i = 0, G__58179__a = new Array(arguments.length -  0);
while (G__58179__i < G__58179__a.length) {G__58179__a[G__58179__i] = arguments[G__58179__i + 0]; ++G__58179__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58179__a,0,null);
} 
return frontend$extensions$pdf$toolbar$pdf_settings__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$toolbar$pdf_settings.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$toolbar$pdf_settings.cljs$lang$applyTo = (function (arglist__58180){
var args__31746__auto__ = cljs.core.seq(arglist__58180);
return frontend$extensions$pdf$toolbar$pdf_settings__delegate(args__31746__auto__);
});
frontend$extensions$pdf$toolbar$pdf_settings.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$toolbar$pdf_settings__delegate;
return frontend$extensions$pdf$toolbar$pdf_settings;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58041 = comp__31745__auto__;
var G__58042 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58041,G__58042) : io.factorhouse.hsx.core.react_memo.call(null,G__58041,G__58042));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-settings");

return comp__31745__auto__;
})();
frontend.extensions.pdf.toolbar.docinfo_display = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$toolbar$docinfo_display(info,close_fn_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pdf-docinfo.extensions__pdf-doc-info","div#pdf-docinfo.extensions__pdf-doc-info",1652471635),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-text","div.inner-text",-1821317579),(function (){var iter__5628__auto__ = (function frontend$extensions$pdf$toolbar$docinfo_display_$_iter__58043(s__58044){
return (new cljs.core.LazySeq(null,(function (){
var s__58044__$1 = s__58044;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58044__$1);
if(temp__5825__auto__){
var s__58044__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58044__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__58044__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__58046 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__58045 = (0);
while(true){
if((i__58045 < size__5627__auto__)){
var vec__58047 = cljs.core._nth(c__5626__auto__,i__58045);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58047,(1),null);
var k__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),/^\:/,""))+"::");
cljs.core.chunk_append(b__58046,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),k__$1], null),"  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null)], null));

var G__58181 = (i__58045 + (1));
i__58045 = G__58181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58046),frontend$extensions$pdf$toolbar$docinfo_display_$_iter__58043(cljs.core.chunk_rest(s__58044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58046),null);
}
} else {
var vec__58050 = cljs.core.first(s__58044__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58050,(1),null);
var k__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),/^\:/,""))+"::");
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),k__$1], null),"  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null)], null),frontend$extensions$pdf$toolbar$docinfo_display_$_iter__58043(cljs.core.rest(s__58044__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(info);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.pt-2.pb--2","div.flex.items-center.justify-center.pt-2.pb--2",-1704533872),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","copy-all","ui/copy-all",716338614)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var text = document.querySelector("#pdf-docinfo > .inner-text").innerText;
var text__$1 = clojure.string.replace(text,/[\n\t]+/,"\n");
frontend.util.copy_to_clipboard_BANG_(text__$1);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("notification","copied","notification/copied",-1717318998)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

return (close_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : close_fn_BANG_.call(null));
})], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$toolbar$docinfo_display__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58053 = cljs.core.first(args__31746__auto__);
var G__58054 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58053,G__58054) : io.factorhouse.hsx.core.obj_get.call(null,G__58053,G__58054));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"docinfo-display","docinfo-display",760719107,null),args__31746__auto__),frontend$extensions$pdf$toolbar$docinfo_display,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$toolbar$docinfo_display = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58182__i = 0, G__58182__a = new Array(arguments.length -  0);
while (G__58182__i < G__58182__a.length) {G__58182__a[G__58182__i] = arguments[G__58182__i + 0]; ++G__58182__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58182__a,0,null);
} 
return frontend$extensions$pdf$toolbar$docinfo_display__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$toolbar$docinfo_display.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$toolbar$docinfo_display.cljs$lang$applyTo = (function (arglist__58183){
var args__31746__auto__ = cljs.core.seq(arglist__58183);
return frontend$extensions$pdf$toolbar$docinfo_display__delegate(args__31746__auto__);
});
frontend$extensions$pdf$toolbar$docinfo_display.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$toolbar$docinfo_display__delegate;
return frontend$extensions$pdf$toolbar$docinfo_display;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58055 = comp__31745__auto__;
var G__58056 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58055,G__58056) : io.factorhouse.hsx.core.react_memo.call(null,G__58055,G__58056));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"docinfo-display");

return comp__31745__auto__;
})();
frontend.extensions.pdf.toolbar.make_docinfo_in_modal = (function frontend$extensions$pdf$toolbar$make_docinfo_in_modal(info){
return (function (close_fn_BANG_){
return frontend.extensions.pdf.toolbar.docinfo_display(info,close_fn_BANG_);
});
});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.toolbar !== 'undefined') && (typeof frontend.extensions.pdf.toolbar.find_status !== 'undefined')){
} else {
frontend.extensions.pdf.toolbar.find_status = new cljs.core.PersistentArrayMap(null, 4, [(0),new cljs.core.Keyword("frontend.extensions.pdf.toolbar","found","frontend.extensions.pdf.toolbar/found",-1623456267),(1),new cljs.core.Keyword("frontend.extensions.pdf.toolbar","not-found","frontend.extensions.pdf.toolbar/not-found",-283696299),(2),new cljs.core.Keyword("frontend.extensions.pdf.toolbar","wrapped","frontend.extensions.pdf.toolbar/wrapped",-1804262050),(3),new cljs.core.Keyword("frontend.extensions.pdf.toolbar","pending","frontend.extensions.pdf.toolbar/pending",526965392)], null);
}
frontend.extensions.pdf.toolbar.pdf_finder = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$toolbar$pdf_finder(viewer,p__58059){
var map__58060 = p__58059;
var map__58060__$1 = cljs.core.__destructure_map(map__58060);
var hide_finder_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58060__$1,new cljs.core.Keyword(null,"hide-finder!","hide-finder!",-491498619));
var _STAR_el_finder = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_el_input = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var bus = viewer.eventBus;
var vec__58061 = logseq.shui.hooks.use_state(null);
var case_sensitive_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58061,(0),null);
var set_case_sensitive_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58061,(1),null);
var vec__58064 = logseq.shui.hooks.use_state("");
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58064,(0),null);
var set_input_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58064,(1),null);
var vec__58067 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null));
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(0),null);
var set_matches_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(1),null);
var vec__58070 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"query","query",-1288509510),""], null));
var find_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58070,(0),null);
var set_find_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58070,(1),null);
var vec__58073 = logseq.shui.hooks.use_state(false);
var entered_active0_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58073,(0),null);
var set_entered_active0_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58073,(1),null);
var vec__58076 = logseq.shui.hooks.use_state(false);
var entered_active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076,(0),null);
var set_entered_active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076,(1),null);
var reset_finder_BANG_ = (function (){
bus.dispatch("findbarclose",null);

(set_matches_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_matches_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_matches_BANG_.call(null,null));

(set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_find_state_BANG_.call(null,null));

(set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_entered_active_QMARK_.call(null,false));

return (set_entered_active0_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active0_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_entered_active0_QMARK_.call(null,false));
});
var close_finder_BANG_ = (function (){
reset_finder_BANG_();

return (hide_finder_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_finder_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_finder_BANG_.call(null));
});
var do_find_BANG_ = (function (p__58079){
var map__58080 = p__58079;
var map__58080__$1 = cljs.core.__destructure_map(map__58080);
var opts = map__58080__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58080__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var prev_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58080__$1,new cljs.core.Keyword(null,"prev?","prev?",-1871077968));
var temp__5825__auto__ = (((opts instanceof cljs.core.Keyword))?opts:type);
if(cljs.core.truth_(temp__5825__auto__)){
var type__$1 = temp__5825__auto__;
return bus.dispatch("find",({"source": null, "type": cljs.core.name(type__$1), "query": input, "phraseSearch": true, "caseSensitive": case_sensitive_QMARK_, "highlightAll": true, "findPrevious": prev_QMARK_, "matchDiacritics": false}));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = frontend.extensions.pdf.windows.resolve_own_container(viewer);
if(cljs.core.truth_(temp__5825__auto__)){
var doc = temp__5825__auto__;
var handler = (function (e){
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = clojure.string.blank_QMARK_(logseq.shui.hooks.deref(_STAR_el_input).value);
if(and__5140__auto__){
return e.target;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var target = temp__5825__auto____$1;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Search",target.title)) && (cljs.core.not((function (){var G__58081 = logseq.shui.hooks.deref(_STAR_el_finder);
if((G__58081 == null)){
return null;
} else {
return G__58081.contains(target);
}
})())))){
return close_finder_BANG_();
} else {
return null;
}
} else {
return null;
}
});
doc.addEventListener("click",handler);

return (function (){
return doc.removeEventListener("click",handler);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = viewer.eventBus;
if(cljs.core.truth_(temp__5825__auto__)){
var bus__$1 = temp__5825__auto__;
bus__$1.on("updatefindmatchescount",(function (e){
var matches__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(e.matchesCount);
(set_matches_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_matches_BANG_.cljs$core$IFn$_invoke$arity$1(matches__$1) : set_matches_BANG_.call(null,matches__$1));

var G__58082 = (function (s){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,matches__$1], 0));
});
return (set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58082) : set_find_state_BANG_.call(null,G__58082));
}));

return bus__$1.on("updatefindcontrolstate",(function (e){
var G__58083 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.toolbar.find_status,e.state),new cljs.core.Keyword(null,"query","query",-1288509510),e.rawQuery], null),cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(e.matchesCount)], 0));
return (set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58083) : set_find_state_BANG_.call(null,G__58083));
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if((case_sensitive_QMARK_ == null)){
return null;
} else {
return do_find_BANG_(new cljs.core.Keyword(null,"casesensitivitychange","casesensitivitychange",-1978235756));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [case_sensitive_QMARK_], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-finder-wrap.hls-popup-overlay.visible","div.extensions__pdf-finder-wrap.hls-popup-overlay.visible",-109749815),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-finder.hls-popup-box","div.extensions__pdf-finder.hls-popup-box",574668221),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_finder,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-inner.flex.items-center","div.input-inner.flex.items-center",1950539779),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-wrap.relative","div.input-wrap.relative",138977433),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","search-placeholder","pdf/search-placeholder",2057682815)], 0)),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_input,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),input,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var val = e.target.value;
(set_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_BANG_.cljs$core$IFn$_invoke$arity$1(val) : set_input_BANG_.call(null,val));

var G__58084_58184 = (!(clojure.string.blank_QMARK_(frontend.util.trim_safe(val))));
(set_entered_active0_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active0_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58084_58184) : set_entered_active0_QMARK_.call(null,G__58084_58184));

return (set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_entered_active_QMARK_.call(null,false));
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
var G__58085 = e.which;
switch (G__58085) {
case (13):
var shift_QMARK_ = e.shiftKey;
do_find_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"again","again",1312602037),new cljs.core.Keyword(null,"prev?","prev?",-1871077968),shift_QMARK_], null));

return (set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_entered_active_QMARK_.call(null,true));

break;
case (27):
if(clojure.string.blank_QMARK_(input)){
return close_finder_BANG_();
} else {
reset_finder_BANG_();

return (set_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_BANG_.call(null,""));
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
})], null)], null),(cljs.core.truth_(entered_active0_QMARK_)?frontend.ui.button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),"arrow-back",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","enter-to-search","pdf/enter-to-search",2048184263)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"icon-enter",new cljs.core.Keyword(null,"small?","small?",95242445),true], null)):null)], null),frontend.ui.button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),"letter-case",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),case_sensitive_QMARK_], null)], null))),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58086 = cljs.core.not(case_sensitive_QMARK_);
return (set_case_sensitive_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_case_sensitive_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58086) : set_case_sensitive_QMARK_.call(null,G__58086));
})], null)),frontend.ui.button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"chevron-up",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__58057_SHARP_){
do_find_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"again","again",1312602037),new cljs.core.Keyword(null,"prev?","prev?",-1871077968),true], null));

return frontend.util.stop(p1__58057_SHARP_);
})], null)),frontend.ui.button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"chevron-down",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__58058_SHARP_){
do_find_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"again","again",1312602037)], null));

return frontend.util.stop(p1__58058_SHARP_);
})], null)),frontend.ui.button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"x",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_finder_BANG_], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-inner","div.result-inner",1082931959),(function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = entered_active_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (!(clojure.string.blank_QMARK_(input)));
if(and__5140__auto____$1){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(find_state);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var status = temp__5825__auto__;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.extensions.pdf.toolbar","not-found","frontend.extensions.pdf.toolbar/not-found",-283696299),status)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.px-3.py-3.text-xs.opacity-90","div.flex.px-3.py-3.text-xs.opacity-90",-1220455054),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","find-results","pdf/find-results",-320444715),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [find_state,matches], null))),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(find_state),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(find_state)], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-3.py-3.text-xs.opacity-80.text-red-600","div.px-3.py-3.text-xs.opacity-80.text-red-600",-1299877515),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","not-found","pdf/not-found",-629231290)], 0))], null);
}
} else {
return null;
}
})()], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$toolbar$pdf_finder__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58087 = cljs.core.first(args__31746__auto__);
var G__58088 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58087,G__58088) : io.factorhouse.hsx.core.obj_get.call(null,G__58087,G__58088));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"pdf-finder","pdf-finder",377800843,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","data-var","large-vars/data-var",1805150589),true], null)),args__31746__auto__),frontend$extensions$pdf$toolbar$pdf_finder,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$toolbar$pdf_finder = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58186__i = 0, G__58186__a = new Array(arguments.length -  0);
while (G__58186__i < G__58186__a.length) {G__58186__a[G__58186__i] = arguments[G__58186__i + 0]; ++G__58186__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58186__a,0,null);
} 
return frontend$extensions$pdf$toolbar$pdf_finder__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$toolbar$pdf_finder.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$toolbar$pdf_finder.cljs$lang$applyTo = (function (arglist__58187){
var args__31746__auto__ = cljs.core.seq(arglist__58187);
return frontend$extensions$pdf$toolbar$pdf_finder__delegate(args__31746__auto__);
});
frontend$extensions$pdf$toolbar$pdf_finder.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$toolbar$pdf_finder__delegate;
return frontend$extensions$pdf$toolbar$pdf_finder;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58089 = comp__31745__auto__;
var G__58090 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58089,G__58090) : io.factorhouse.hsx.core.react_memo.call(null,G__58089,G__58090));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-finder");

return comp__31745__auto__;
})();
frontend.extensions.pdf.toolbar.pdf_outline_item = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$toolbar$pdf_outline_item(viewer,p__58092,p__58093){
var map__58094 = p__58092;
var map__58094__$1 = cljs.core.__destructure_map(map__58094);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var dest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"dest","dest",-34569477));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var map__58095 = p__58093;
var map__58095__$1 = cljs.core.__destructure_map(map__58095);
var ops = map__58095__$1;
var upt_outline_node_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword(null,"upt-outline-node!","upt-outline-node!",-1463872689));
var has_child_QMARK_ = cljs.core.seq(items);
var expanded_QMARK_ = cljs.core.boolean$(expanded);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-outline-item","div.extensions__pdf-outline-item",-793598684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-children","has-children",-934485512),has_child_QMARK_,new cljs.core.Keyword(null,"is-expand","is-expand",-1852164794),expanded_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner","div.inner",-1581324128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-dest","data-dest",1713471540),JSON.stringify(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(dest)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var target = e.target;
if(cljs.core.truth_(target.closest("i"))){
var path = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58091_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/\d+/,p1__58091_SHARP_))){
return (p1__58091_SHARP_ | 0);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__58091_SHARP_);
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(parent,/\-/));
e.preventDefault();

var G__58096 = path;
var G__58097 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),(!(expanded_QMARK_))], null);
return (upt_outline_node_BANG_.cljs$core$IFn$_invoke$arity$2 ? upt_outline_node_BANG_.cljs$core$IFn$_invoke$arity$2(G__58096,G__58097) : upt_outline_node_BANG_.call(null,G__58096,G__58097));
} else {
var temp__5825__auto__ = (function (){var and__5140__auto__ = dest;
if(cljs.core.truth_(and__5140__auto__)){
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(dest);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var dest__$1 = temp__5825__auto__;
return viewer.linkService.goToDestination(dest__$1);
} else {
return null;
}
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.arrow","i.arrow",1427922439),frontend.components.svg.arrow_right_v2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null)], null),((((has_child_QMARK_) && (expanded_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.children","div.children",-784146860),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
var parent__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"-items-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend$extensions$pdf$toolbar$pdf_outline_item,viewer,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([itm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent__$1], null)], 0)),ops], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),parent__$1], null));
}),items)], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$toolbar$pdf_outline_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58098 = cljs.core.first(args__31746__auto__);
var G__58099 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58098,G__58099) : io.factorhouse.hsx.core.obj_get.call(null,G__58098,G__58099));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-outline-item","pdf-outline-item",-454098591,null),args__31746__auto__),frontend$extensions$pdf$toolbar$pdf_outline_item,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$toolbar$pdf_outline_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58188__i = 0, G__58188__a = new Array(arguments.length -  0);
while (G__58188__i < G__58188__a.length) {G__58188__a[G__58188__i] = arguments[G__58188__i + 0]; ++G__58188__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58188__a,0,null);
} 
return frontend$extensions$pdf$toolbar$pdf_outline_item__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$toolbar$pdf_outline_item.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$toolbar$pdf_outline_item.cljs$lang$applyTo = (function (arglist__58189){
var args__31746__auto__ = cljs.core.seq(arglist__58189);
return frontend$extensions$pdf$toolbar$pdf_outline_item__delegate(args__31746__auto__);
});
frontend$extensions$pdf$toolbar$pdf_outline_item.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$toolbar$pdf_outline_item__delegate;
return frontend$extensions$pdf$toolbar$pdf_outline_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58100 = comp__31745__auto__;
var G__58101 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58100,G__58101) : io.factorhouse.hsx.core.react_memo.call(null,G__58100,G__58101));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-outline-item");

return comp__31745__auto__;
})();
frontend.extensions.pdf.toolbar.pdf_outline = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$toolbar$pdf_outline(viewer,_visible_QMARK_,set_visible_BANG_){
var temp__5825__auto__ = (function (){var and__5140__auto__ = viewer;
if(cljs.core.truth_(and__5140__auto__)){
return viewer.pdfDocument;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pdf_doc = temp__5825__auto__;
var _STAR_el_outline = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__58102 = logseq.shui.hooks.use_state(cljs.core.PersistentVector.EMPTY);
var outline_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58102,(0),null);
var set_outline_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58102,(1),null);
var upt_outline_node_BANG_ = logseq.shui.hooks.use_callback((function (path,attrs){
var G__58105 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(outline_data,path,cljs.core.merge,attrs);
return (set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__58105) : set_outline_data_BANG_.call(null,G__58105));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [outline_data], null));
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(pdf_doc.getOutline()),(function (data){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto____$1 = (function (){var and__5140__auto__ = data;
if(cljs.core.truth_(and__5140__auto__)){
return data.map((function (it){
(it.href = viewer.linkService.getDestinationHash(it.dest));

(it.expanded = false);

return it;
}));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var data__$1 = temp__5825__auto____$1;
return null;
} else {
return null;
}
})()),(function (___21901__auto__){
return promesa.protocols._promise((function (){var G__58106 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
return (set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__58106) : set_outline_data_BANG_.call(null,G__58106));
})());
}));
}));
})),(function (e){
return console.error("[Load outline Error]",e);
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdf_doc], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var el_outline = logseq.shui.hooks.deref(_STAR_el_outline);
var cb = (function (e){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.which,(27));
if(and__5140__auto__){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_visible_BANG_.call(null,false));
} else {
return and__5140__auto__;
}
});
setTimeout((function (){
return el_outline.focus();
}));

el_outline.addEventListener("keyup",cb);

return (function (){
return el_outline.removeEventListener("keyup",cb);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-outline-list-content","div.extensions__pdf-outline-list-content",2044333538),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_outline,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),((cljs.core.seq(outline_data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.pdf.toolbar.pdf_outline_item,viewer,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([itm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),idx], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"upt-outline-node!","upt-outline-node!",-1463872689),upt_outline_node_BANG_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
}),outline_data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.is-empty","section.is-empty",-877953899),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","no-outlines","pdf/no-outlines",-1286704695)], 0))], null))], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$toolbar$pdf_outline__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58107 = cljs.core.first(args__31746__auto__);
var G__58108 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58107,G__58108) : io.factorhouse.hsx.core.obj_get.call(null,G__58107,G__58108));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-outline","pdf-outline",-1903187963,null),args__31746__auto__),frontend$extensions$pdf$toolbar$pdf_outline,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$toolbar$pdf_outline = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58190__i = 0, G__58190__a = new Array(arguments.length -  0);
while (G__58190__i < G__58190__a.length) {G__58190__a[G__58190__i] = arguments[G__58190__i + 0]; ++G__58190__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58190__a,0,null);
} 
return frontend$extensions$pdf$toolbar$pdf_outline__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$toolbar$pdf_outline.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$toolbar$pdf_outline.cljs$lang$applyTo = (function (arglist__58191){
var args__31746__auto__ = cljs.core.seq(arglist__58191);
return frontend$extensions$pdf$toolbar$pdf_outline__delegate(args__31746__auto__);
});
frontend$extensions$pdf$toolbar$pdf_outline.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$toolbar$pdf_outline__delegate;
return frontend$extensions$pdf$toolbar$pdf_outline;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58109 = comp__31745__auto__;
var G__58110 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58109,G__58110) : io.factorhouse.hsx.core.react_memo.call(null,G__58109,G__58110));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-outline");

return comp__31745__auto__;
})();
frontend.extensions.pdf.toolbar.area_image_for_db = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$toolbar$area_image_for_db(repo,id){
var vec__58112 = logseq.shui.hooks.use_state(null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58112,(0),null);
var set_src_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58112,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.assets.get_area_block_asset_url(block);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var asset_path_SINGLEQUOTE_ = temp__5825__auto__;
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1(asset_path_SINGLEQUOTE_),(function (p1__58111_SHARP_){
return (set_src_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_src_BANG_.cljs$core$IFn$_invoke$arity$1(p1__58111_SHARP_) : set_src_BANG_.call(null,p1__58111_SHARP_));
}));
} else {
return null;
}
})());
}));
}));
}),cljs.core.PersistentVector.EMPTY);

if(typeof src === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.area-wrap","p.area-wrap",-1526894037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$toolbar$area_image_for_db__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58115 = cljs.core.first(args__31746__auto__);
var G__58116 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58115,G__58116) : io.factorhouse.hsx.core.obj_get.call(null,G__58115,G__58116));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"area-image-for-db","area-image-for-db",-1847289784,null),args__31746__auto__),frontend$extensions$pdf$toolbar$area_image_for_db,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$toolbar$area_image_for_db = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58192__i = 0, G__58192__a = new Array(arguments.length -  0);
while (G__58192__i < G__58192__a.length) {G__58192__a[G__58192__i] = arguments[G__58192__i + 0]; ++G__58192__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58192__a,0,null);
} 
return frontend$extensions$pdf$toolbar$area_image_for_db__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$toolbar$area_image_for_db.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$toolbar$area_image_for_db.cljs$lang$applyTo = (function (arglist__58193){
var args__31746__auto__ = cljs.core.seq(arglist__58193);
return frontend$extensions$pdf$toolbar$area_image_for_db__delegate(args__31746__auto__);
});
frontend$extensions$pdf$toolbar$area_image_for_db.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$toolbar$area_image_for_db__delegate;
return frontend$extensions$pdf$toolbar$area_image_for_db;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58117 = comp__31745__auto__;
var G__58118 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58117,G__58118) : io.factorhouse.hsx.core.react_memo.call(null,G__58117,G__58118));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"area-image-for-db");

return comp__31745__auto__;
})();
frontend.extensions.pdf.toolbar.pdf_highlights_list = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$toolbar$pdf_highlights_list(viewer){
var vec__58119 = logseq.shui.hooks.use_state(false);
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58119,(0),null);
var set_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58119,(1),null);
var hls_state = module$node_modules$react$index.useContext(frontend.extensions.pdf.toolbar.highlights_ctx);
var hls = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),(function (){var or__5142__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820).cljs$core$IFn$_invoke$arity$1(hls_state));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948).cljs$core$IFn$_invoke$arity$1(hls_state);
}
})());
var repo = frontend.state.get_current_repo();
var iter__5628__auto__ = (function frontend$extensions$pdf$toolbar$pdf_highlights_list_$_iter__58122(s__58123){
return (new cljs.core.LazySeq(null,(function (){
var s__58123__$1 = s__58123;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58123__$1);
if(temp__5825__auto__){
var s__58123__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58123__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__58123__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__58125 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__58124 = (0);
while(true){
if((i__58124 < size__5627__auto__)){
var map__58126 = cljs.core._nth(c__5626__auto__,i__58124);
var map__58126__$1 = cljs.core.__destructure_map(map__58126);
var hl = map__58126__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword(null,"content","content",15833224));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword(null,"page","page",849072397));
var goto_ref_BANG_ = ((function (i__58124,map__58126,map__58126__$1,hl,id,content,properties,page,c__5626__auto__,size__5627__auto__,b__58125,s__58123__$2,temp__5825__auto__,vec__58119,active,set_active_BANG_,hls_state,hls,repo){
return (function (){
return frontend.extensions.pdf.assets.goto_block_ref_BANG_(hl);
});})(i__58124,map__58126,map__58126__$1,hl,id,content,properties,page,c__5626__auto__,size__5627__auto__,b__58125,s__58123__$2,temp__5825__auto__,vec__58119,active,set_active_BANG_,hls_state,hls,repo))
;
cljs.core.chunk_append(b__58125,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-highlights-list-item","div.extensions__pdf-highlights-list-item",-138381697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,id))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58124,goto_ref_BANG_,map__58126,map__58126__$1,hl,id,content,properties,page,c__5626__auto__,size__5627__auto__,b__58125,s__58123__$2,temp__5825__auto__,vec__58119,active,set_active_BANG_,hls_state,hls,repo){
return (function (){
frontend.extensions.pdf.utils.scroll_to_highlight(viewer,hl);

return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(id) : set_active_BANG_.call(null,id));
});})(i__58124,goto_ref_BANG_,map__58126,map__58126__$1,hl,id,content,properties,page,c__5626__auto__,size__5627__auto__,b__58125,s__58123__$2,temp__5825__auto__,vec__58119,active,set_active_BANG_,hls_state,hls,repo))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),goto_ref_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.flex","h6.flex",-1010640991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-color","data-color",-1132407184),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(properties)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","page-label","pdf/page-label",-519751993),page], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","linked-ref","pdf/linked-ref",-925157547)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),goto_ref_BANG_], null),frontend.ui.icon("external-link")], null)], null),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(temp__5823__auto__)){
var _img_stamp = temp__5823__auto__;
return frontend.extensions.pdf.toolbar.area_image_for_db(repo,id);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-wrap","p.text-wrap",-2026968505),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content)], null);
}
})()], null));

var G__58194 = (i__58124 + (1));
i__58124 = G__58194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58125),frontend$extensions$pdf$toolbar$pdf_highlights_list_$_iter__58122(cljs.core.chunk_rest(s__58123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58125),null);
}
} else {
var map__58127 = cljs.core.first(s__58123__$2);
var map__58127__$1 = cljs.core.__destructure_map(map__58127);
var hl = map__58127__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"content","content",15833224));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"page","page",849072397));
var goto_ref_BANG_ = ((function (map__58127,map__58127__$1,hl,id,content,properties,page,s__58123__$2,temp__5825__auto__,vec__58119,active,set_active_BANG_,hls_state,hls,repo){
return (function (){
return frontend.extensions.pdf.assets.goto_block_ref_BANG_(hl);
});})(map__58127,map__58127__$1,hl,id,content,properties,page,s__58123__$2,temp__5825__auto__,vec__58119,active,set_active_BANG_,hls_state,hls,repo))
;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-highlights-list-item","div.extensions__pdf-highlights-list-item",-138381697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,id))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (goto_ref_BANG_,map__58127,map__58127__$1,hl,id,content,properties,page,s__58123__$2,temp__5825__auto__,vec__58119,active,set_active_BANG_,hls_state,hls,repo){
return (function (){
frontend.extensions.pdf.utils.scroll_to_highlight(viewer,hl);

return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(id) : set_active_BANG_.call(null,id));
});})(goto_ref_BANG_,map__58127,map__58127__$1,hl,id,content,properties,page,s__58123__$2,temp__5825__auto__,vec__58119,active,set_active_BANG_,hls_state,hls,repo))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),goto_ref_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.flex","h6.flex",-1010640991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-color","data-color",-1132407184),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(properties)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","page-label","pdf/page-label",-519751993),page], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","linked-ref","pdf/linked-ref",-925157547)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),goto_ref_BANG_], null),frontend.ui.icon("external-link")], null)], null),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(temp__5823__auto__)){
var _img_stamp = temp__5823__auto__;
return frontend.extensions.pdf.toolbar.area_image_for_db(repo,id);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-wrap","p.text-wrap",-2026968505),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content)], null);
}
})()], null),frontend$extensions$pdf$toolbar$pdf_highlights_list_$_iter__58122(cljs.core.rest(s__58123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(hls);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$toolbar$pdf_highlights_list__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58128 = cljs.core.first(args__31746__auto__);
var G__58129 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58128,G__58129) : io.factorhouse.hsx.core.obj_get.call(null,G__58128,G__58129));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-highlights-list","pdf-highlights-list",1979617839,null),args__31746__auto__),frontend$extensions$pdf$toolbar$pdf_highlights_list,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$toolbar$pdf_highlights_list = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58195__i = 0, G__58195__a = new Array(arguments.length -  0);
while (G__58195__i < G__58195__a.length) {G__58195__a[G__58195__i] = arguments[G__58195__i + 0]; ++G__58195__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58195__a,0,null);
} 
return frontend$extensions$pdf$toolbar$pdf_highlights_list__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$toolbar$pdf_highlights_list.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$toolbar$pdf_highlights_list.cljs$lang$applyTo = (function (arglist__58196){
var args__31746__auto__ = cljs.core.seq(arglist__58196);
return frontend$extensions$pdf$toolbar$pdf_highlights_list__delegate(args__31746__auto__);
});
frontend$extensions$pdf$toolbar$pdf_highlights_list.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$toolbar$pdf_highlights_list__delegate;
return frontend$extensions$pdf$toolbar$pdf_highlights_list;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58130 = comp__31745__auto__;
var G__58131 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58130,G__58131) : io.factorhouse.hsx.core.react_memo.call(null,G__58130,G__58131));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-highlights-list");

return comp__31745__auto__;
})();
frontend.extensions.pdf.toolbar.pdf_outline__AMPERSAND__highlights = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights(viewer,visible_QMARK_,set_visible_BANG_){
var _STAR_el_container = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__58132 = logseq.shui.hooks.use_state("contents");
var active_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58132,(0),null);
var set_active_tab_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58132,(1),null);
var set_outline_visible_BANG_ = (function (){
return (set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1("contents") : set_active_tab_BANG_.call(null,"contents"));
});
var contents_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"contents");
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = frontend.extensions.pdf.windows.resolve_own_container(viewer);
if(cljs.core.truth_(temp__5825__auto__)){
var doc = temp__5825__auto__;
var cb = (function (e){
var temp__5825__auto____$1 = e.target;
if(cljs.core.truth_(temp__5825__auto____$1)){
var target = temp__5825__auto____$1;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Outline",target.title)) && (cljs.core.not((function (){var G__58135 = logseq.shui.hooks.deref(_STAR_el_container);
if((G__58135 == null)){
return null;
} else {
return G__58135.contains(target);
}
})())))){
(set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_visible_BANG_.call(null,false));

return set_outline_visible_BANG_();
} else {
return null;
}
} else {
return null;
}
});
doc.addEventListener("click",cb);

return (function (){
return doc.removeEventListener("click",cb);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-outline-wrap.hls-popup-overlay","div.extensions__pdf-outline-wrap.hls-popup-overlay",-997407656),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),visible_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-outline.hls-popup-box","div.extensions__pdf-outline.hls-popup-box",-1104419662),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_container,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-outline-tabs","div.extensions__pdf-outline-tabs",1927298883),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner","div.inner",-1581324128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((contents_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1("contents") : set_active_tab_BANG_.call(null,"contents"));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","contents","page/contents",-1566345974)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((contents_QMARK_)?null:"active"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1("highlights") : set_active_tab_BANG_.call(null,"highlights"));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","highlights","pdf/highlights",945254303)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-outline-panels","div.extensions__pdf-outline-panels",1314402952),((contents_QMARK_)?frontend.extensions.pdf.toolbar.pdf_outline(viewer,contents_QMARK_,set_outline_visible_BANG_):frontend.extensions.pdf.toolbar.pdf_highlights_list(viewer))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58136 = cljs.core.first(args__31746__auto__);
var G__58137 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58136,G__58137) : io.factorhouse.hsx.core.obj_get.call(null,G__58136,G__58137));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-outline-&-highlights","pdf-outline-&-highlights",1249251119,null),args__31746__auto__),frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58197__i = 0, G__58197__a = new Array(arguments.length -  0);
while (G__58197__i < G__58197__a.length) {G__58197__a[G__58197__i] = arguments[G__58197__i + 0]; ++G__58197__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58197__a,0,null);
} 
return frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights.cljs$lang$applyTo = (function (arglist__58198){
var args__31746__auto__ = cljs.core.seq(arglist__58198);
return frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights__delegate(args__31746__auto__);
});
frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights__delegate;
return frontend$extensions$pdf$toolbar$pdf_outline__AMPERSAND__highlights;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58138 = comp__31745__auto__;
var G__58139 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58138,G__58139) : io.factorhouse.hsx.core.react_memo.call(null,G__58138,G__58139));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-outline-&-highlights");

return comp__31745__auto__;
})();
frontend.extensions.pdf.toolbar.pdf_toolbar = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$toolbar$pdf_toolbar(viewer,p__58142){
var map__58143 = p__58142;
var map__58143__$1 = cljs.core.__destructure_map(map__58143);
var on_external_window_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword(null,"on-external-window!","on-external-window!",244908467));
var pdf_current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword(null,"pdf-current","pdf-current",-2103011214));
var vec__58144 = logseq.shui.hooks.use_atom(frontend.extensions.pdf.toolbar._STAR_area_mode_QMARK_);
var area_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58144,(0),null);
var set_area_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58144,(1),null);
var vec__58147 = logseq.shui.hooks.use_state(false);
var outline_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58147,(0),null);
var set_outline_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58147,(1),null);
var vec__58150 = logseq.shui.hooks.use_state(false);
var finder_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58150,(0),null);
var set_finder_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58150,(1),null);
var vec__58153 = logseq.shui.hooks.use_atom(frontend.extensions.pdf.toolbar._STAR_highlight_mode_QMARK_);
var highlight_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58153,(0),null);
var set_highlight_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58153,(1),null);
var vec__58156 = logseq.shui.hooks.use_state(false);
var settings_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58156,(0),null);
var set_settings_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58156,(1),null);
var _STAR_page_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__58159 = logseq.shui.hooks.use_state((1));
var current_page_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(0),null);
var set_current_page_num_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(1),null);
var vec__58162 = logseq.shui.hooks.use_state((1));
var total_page_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58162,(0),null);
var set_total_page_num_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58162,(1),null);
var vec__58165 = logseq.shui.hooks.use_state((function (){var or__5142__auto__ = frontend.storage.get("ls-pdf-viewer-theme");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "light";
}
})());
var viewer_theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58165,(0),null);
var set_viewer_theme_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58165,(1),null);
var group_id = viewer.$groupIdentity;
var in_system_window_QMARK_ = viewer.$inSystemWindow;
var doc = frontend.extensions.pdf.windows.resolve_own_document(viewer);
var asset_block = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(pdf_current);
var dispatch_extra_state_BANG_ = (function (){
return setTimeout((function (){
var scale = viewer.currentScaleValue;
return viewer.eventBus.dispatch(cljs.core.name(new cljs.core.Keyword(null,"ls-update-extra-state","ls-update-extra-state",893479284)),({"page": current_page_num, "scale": scale}));
}),(100));
});
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = (function (){var G__58168 = doc;
if((G__58168 == null)){
return null;
} else {
return G__58168.getElementById((""+"pdf-layout-container_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_id)));
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
(el.dataset.theme = viewer_theme);

frontend.storage.set("ls-pdf-viewer-theme",viewer_theme);

return (function (){
return delete el.dataset["theme"];
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer_theme], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(viewer)){
return dispatch_extra_state_BANG_();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer,current_page_num], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = (function (){var and__5140__auto__ = viewer;
if(cljs.core.truth_(and__5140__auto__)){
return viewer.pdfDocument.numPages;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var total = temp__5825__auto__;
var bus = viewer.eventBus;
var page_fn = (function (evt){
var num = evt.pageNumber;
return (set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(num) : set_current_page_num_BANG_.call(null,num));
});
(set_total_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_total_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(total) : set_total_page_num_BANG_.call(null,total));

var G__58169_58199 = viewer.currentPageNumber;
(set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(G__58169_58199) : set_current_page_num_BANG_.call(null,G__58169_58199));

bus.on("pagechanging",page_fn);

return (function (){
return bus.off("pagechanging",page_fn);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var input = logseq.shui.hooks.deref(_STAR_page_ref);
return (input.value = current_page_num);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page_num], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-header","div.extensions__pdf-header",-569373690),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-toolbar","div.extensions__pdf-toolbar",-1915137445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner","div.inner",-1581324128),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.r.flex.buttons","div.r.flex.buttons",236918919),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","more-settings","pdf/more-settings",-998915823)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58170 = cljs.core.not(settings_visible_QMARK_);
return (set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__58170) : set_settings_visible_BANG_.call(null,G__58170));
})], null),frontend.components.svg.adjustments.cljs$core$IFn$_invoke$arity$1((18))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","area-highlight-shortcut","pdf/area-highlight-shortcut",1330943299),(cljs.core.truth_(frontend.util.mac_QMARK_)?"\u2318":"Shift")], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(area_mode_QMARK_)?"is-active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58171 = cljs.core.not(area_mode_QMARK_);
return (set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__58171) : set_area_mode_BANG_.call(null,G__58171));
})], null),frontend.components.svg.icon_area.cljs$core$IFn$_invoke$arity$1((18))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","highlight-mode","pdf/highlight-mode",-1758182284)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(highlight_mode_QMARK_)?"is-active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58172 = cljs.core.not(highlight_mode_QMARK_);
return (set_highlight_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlight_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__58172) : set_highlight_mode_BANG_.call(null,G__58172));
})], null),frontend.components.svg.highlighter.cljs$core$IFn$_invoke$arity$1((16))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","zoom-out","pdf/zoom-out",681102693)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.extensions.pdf.utils.zoom_out_viewer(viewer);

return dispatch_extra_state_BANG_();
})], null),frontend.components.svg.zoom_out.cljs$core$IFn$_invoke$arity$1((18))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","zoom-in","pdf/zoom-in",1243855939)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.extensions.pdf.utils.zoom_in_viewer(viewer);

return dispatch_extra_state_BANG_();
})], null),frontend.components.svg.zoom_in.cljs$core$IFn$_invoke$arity$1((18))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","auto-fit","pdf/auto-fit",-873579939)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.extensions.pdf.utils.reset_viewer_auto_BANG_(viewer);

return dispatch_extra_state_BANG_();
})], null),frontend.components.svg.auto_fit.cljs$core$IFn$_invoke$arity$1((18))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","outline","pdf/outline",793369640)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58173 = cljs.core.not(outline_visible_QMARK_);
return (set_outline_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__58173) : set_outline_visible_BANG_.call(null,G__58173));
})], null),frontend.components.svg.view_list.cljs$core$IFn$_invoke$arity$1((16))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","search","pdf/search",1564789044)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58174 = cljs.core.not(finder_visible_QMARK_);
return (set_finder_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_finder_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__58174) : set_finder_visible_BANG_.call(null,G__58174));
})], null),frontend.components.svg.search2.cljs$core$IFn$_invoke$arity$1((19))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","annotations-page","pdf/annotations-page",-1381937794)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(asset_block)){
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1(pdf_current);
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("asset","dialog-edit-external-url","asset/dialog-edit-external-url",175071068),null,pdf_current], null));
}
})], null),frontend.components.svg.annotations.cljs$core$IFn$_invoke$arity$1((16))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(in_system_window_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","open-in-app-window","pdf/open-in-app-window",1578182799)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","open-in-external-window","pdf/open-in-external-window",-111369878)], 0))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(in_system_window_QMARK_)){
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1(true);
} else {
return (on_external_window_BANG_.cljs$core$IFn$_invoke$arity$0 ? on_external_window_BANG_.cljs$core$IFn$_invoke$arity$0() : on_external_window_BANG_.call(null));
}
})], null),frontend.ui.icon((cljs.core.truth_(in_system_window_QMARK_)?"window-minimize":"window-maximize"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pager.flex.items-center.ml-1","div.pager.flex.items-center.ml-1",1188476912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nu.flex.items-center.opacity-70","span.nu.flex.items-center.opacity-70",697925213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_page_ref,new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),total_page_num,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-long","is-long",31110883),(frontend.util.safe_parse_int(current_page_num) > (999))], null)], null)),new cljs.core.Keyword(null,"default-value","default-value",232220170),current_page_num,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (p1__58140_SHARP_){
return p1__58140_SHARP_.target.select();
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
var input = e.target;
var value = frontend.util.safe_parse_int(input.value);
(set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(value) : set_current_page_num_BANG_.call(null,value));

if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(13));
if(and__5140__auto__){
var and__5140__auto____$1 = value;
if(cljs.core.truth_(and__5140__auto____$1)){
return (value > (0));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return (viewer.currentPageNumber = (((value > total_page_num))?total_page_num:value));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"/ ",total_page_num], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ct.flex.items-center","span.ct.flex.items-center",1377616404),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return viewer.previousPage();
})], null),frontend.components.svg.up_narrow.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return viewer.nextPage();
})], null),frontend.components.svg.down_narrow.cljs$core$IFn$_invoke$arity$0()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(in_system_window_QMARK_)){
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1(false);
} else {
return frontend.state.set_current_pdf_BANG_(null);
}
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","close","ui/close",1835153538)], 0))], null)], null)], null)], null),frontend.extensions.pdf.toolbar.pdf_outline__AMPERSAND__highlights(viewer,outline_visible_QMARK_,set_outline_visible_BANG_),(cljs.core.truth_(finder_visible_QMARK_)?frontend.extensions.pdf.toolbar.pdf_finder(viewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-finder!","hide-finder!",-491498619),(function (){
return (set_finder_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_finder_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_finder_visible_BANG_.call(null,false));
})], null)):null),(cljs.core.truth_(settings_visible_QMARK_)?frontend.extensions.pdf.toolbar.pdf_settings(viewer,viewer_theme,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),frontend.context.i18n.t,new cljs.core.Keyword(null,"hide-settings!","hide-settings!",-226708021),(function (){
return (set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_settings_visible_BANG_.call(null,false));
}),new cljs.core.Keyword(null,"select-theme!","select-theme!",1638110696),(function (p1__58141_SHARP_){
return (set_viewer_theme_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_viewer_theme_BANG_.cljs$core$IFn$_invoke$arity$1(p1__58141_SHARP_) : set_viewer_theme_BANG_.call(null,p1__58141_SHARP_));
})], null)):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$toolbar$pdf_toolbar__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58175 = cljs.core.first(args__31746__auto__);
var G__58176 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58175,G__58176) : io.factorhouse.hsx.core.obj_get.call(null,G__58175,G__58176));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"pdf-toolbar","pdf-toolbar",-1928221012,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$extensions$pdf$toolbar$pdf_toolbar,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$toolbar$pdf_toolbar = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58200__i = 0, G__58200__a = new Array(arguments.length -  0);
while (G__58200__i < G__58200__a.length) {G__58200__a[G__58200__i] = arguments[G__58200__i + 0]; ++G__58200__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58200__a,0,null);
} 
return frontend$extensions$pdf$toolbar$pdf_toolbar__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$toolbar$pdf_toolbar.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$toolbar$pdf_toolbar.cljs$lang$applyTo = (function (arglist__58201){
var args__31746__auto__ = cljs.core.seq(arglist__58201);
return frontend$extensions$pdf$toolbar$pdf_toolbar__delegate(args__31746__auto__);
});
frontend$extensions$pdf$toolbar$pdf_toolbar.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$toolbar$pdf_toolbar__delegate;
return frontend$extensions$pdf$toolbar$pdf_toolbar;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58177 = comp__31745__auto__;
var G__58178 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58177,G__58178) : io.factorhouse.hsx.core.react_memo.call(null,G__58177,G__58178));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-toolbar");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.extensions.pdf.toolbar.js.map
