goog.provide('logseq.shui.demo');
logseq.shui.demo.section_item = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$section_item(title,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mb-4","section.mb-4",-1639068268),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-semibold.py-2.italic.opacity-50","h2.text-xl.font-semibold.py-2.italic.opacity-50",-254605213),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-4","div.py-4",1523486045),children], null)], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$section_item__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__99698 = cljs.core.first(args__47253__auto__);
var G__99699 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__99698,G__99699) : io.factorhouse.hsx.core.obj_get.call(null,G__99698,G__99699));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"section-item","section-item",-149621880,null),args__47253__auto__),logseq$shui$demo$section_item,args__47253__auto__,null);
}
};
var logseq$shui$demo$section_item = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100132__i = 0, G__100132__a = new Array(arguments.length -  0);
while (G__100132__i < G__100132__a.length) {G__100132__a[G__100132__i] = arguments[G__100132__i + 0]; ++G__100132__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100132__a,0,null);
} 
return logseq$shui$demo$section_item__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$section_item.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$section_item.cljs$lang$applyTo = (function (arglist__100133){
var args__47253__auto__ = cljs.core.seq(arglist__100133);
return logseq$shui$demo$section_item__delegate(args__47253__auto__);
});
logseq$shui$demo$section_item.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$section_item__delegate;
return logseq$shui$demo$section_item;
})()
;
var memo_comp__47254__auto__ = (function (){var G__99700 = comp__47252__auto__;
var G__99701 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__99700,G__99701) : io.factorhouse.hsx.core.react_memo.call(null,G__99700,G__99701));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"section-item");

return comp__47252__auto__;
})();
logseq.shui.demo.sample_dropdown_menu_content = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$sample_dropdown_menu_content(){
var icon = (function (p1__99702_SHARP_){
return logseq.shui.ui.tabler_icon(cljs.core.name(p1__99702_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"scale-90 pr-1 opacity-80"], null));
});
var G__99704 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-56",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__99715 = e.target;
var G__99715__$1 = (((G__99715 == null))?null:G__99715.innerText);
var G__99715__$2 = (((G__99715__$1 == null))?null:(function (p1__99703_SHARP_){
return cljs.core.identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You select: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.text-red-700","b.text-red-700",711663976),p1__99703_SHARP_], null)], null));
})(G__99715__$1));
if((G__99715__$2 == null)){
return null;
} else {
return (logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2(G__99715__$2,new cljs.core.Keyword(null,"info","info",-317069002)) : logseq.shui.ui.toast_BANG_.call(null,G__99715__$2,new cljs.core.Keyword(null,"info","info",-317069002)));
}
})], null);
var G__99705 = (logseq.shui.ui.dropdown_menu_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_label.cljs$core$IFn$_invoke$arity$1("My Account") : logseq.shui.ui.dropdown_menu_label.call(null,"My Account"));
var G__99706 = (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null));
var G__99707 = (function (){var G__99716 = (function (){var G__99720 = icon(new cljs.core.Keyword(null,"user","user",1532431356));
var G__99721 = "Profile";
var G__99722 = (logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u2318P") : logseq.shui.ui.dropdown_menu_shortcut.call(null,"\u2318P"));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__99720,G__99721,G__99722) : logseq.shui.ui.dropdown_menu_item.call(null,G__99720,G__99721,G__99722));
})();
var G__99717 = (function (){var G__99723 = icon(new cljs.core.Keyword(null,"brand-mastercard","brand-mastercard",-1200767505));
var G__99724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Billing"], null);
var G__99725 = (logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u2318B") : logseq.shui.ui.dropdown_menu_shortcut.call(null,"\u2318B"));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__99723,G__99724,G__99725) : logseq.shui.ui.dropdown_menu_item.call(null,G__99723,G__99724,G__99725));
})();
var G__99718 = (function (){var G__99726 = icon(new cljs.core.Keyword(null,"adjustments-alt","adjustments-alt",-549141142));
var G__99727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Settings"], null);
var G__99728 = (logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u2318,") : logseq.shui.ui.dropdown_menu_shortcut.call(null,"\u2318,"));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__99726,G__99727,G__99728) : logseq.shui.ui.dropdown_menu_item.call(null,G__99726,G__99727,G__99728));
})();
var G__99719 = (function (){var G__99729 = icon(new cljs.core.Keyword(null,"keyboard","keyboard",-617357087));
var G__99730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Keyboard shortcuts"], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__99729,G__99730) : logseq.shui.ui.dropdown_menu_item.call(null,G__99729,G__99730));
})();
return (logseq.shui.ui.dropdown_menu_group.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.dropdown_menu_group.cljs$core$IFn$_invoke$arity$4(G__99716,G__99717,G__99718,G__99719) : logseq.shui.ui.dropdown_menu_group.call(null,G__99716,G__99717,G__99718,G__99719));
})();
var G__99708 = (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null));
var G__99709 = (function (){var G__99731 = (function (){var G__99735 = icon(new cljs.core.Keyword(null,"users","users",-713552705));
var G__99736 = "Team";
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__99735,G__99736) : logseq.shui.ui.dropdown_menu_item.call(null,G__99735,G__99736));
})();
var G__99732 = (function (){var G__99737 = (function (){var G__99739 = icon(new cljs.core.Keyword(null,"user-plus","user-plus",-196932293));
var G__99740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Invite users"], null);
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$2(G__99739,G__99740) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__99739,G__99740));
})();
var G__99738 = (function (){var G__99741 = (function (){var G__99744 = icon(new cljs.core.Keyword(null,"mail","mail",795732905));
var G__99745 = "Email";
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__99744,G__99745) : logseq.shui.ui.dropdown_menu_item.call(null,G__99744,G__99745));
})();
var G__99742 = (function (){var G__99746 = icon(new cljs.core.Keyword(null,"message","message",-406056002));
var G__99747 = "Message";
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__99746,G__99747) : logseq.shui.ui.dropdown_menu_item.call(null,G__99746,G__99747));
})();
var G__99743 = (function (){var G__99748 = icon(new cljs.core.Keyword(null,"dots-circle-horizontal","dots-circle-horizontal",475474774));
var G__99749 = "More...";
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__99748,G__99749) : logseq.shui.ui.dropdown_menu_item.call(null,G__99748,G__99749));
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$3(G__99741,G__99742,G__99743) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__99741,G__99742,G__99743));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__99737,G__99738) : logseq.shui.ui.dropdown_menu_sub.call(null,G__99737,G__99738));
})();
var G__99733 = (function (){var G__99750 = icon(new cljs.core.Keyword(null,"plus","plus",211540661));
var G__99751 = "New Team";
var G__99752 = (logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u2318+T") : logseq.shui.ui.dropdown_menu_shortcut.call(null,"\u2318+T"));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__99750,G__99751,G__99752) : logseq.shui.ui.dropdown_menu_item.call(null,G__99750,G__99751,G__99752));
})();
return (logseq.shui.ui.dropdown_menu_group.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_group.cljs$core$IFn$_invoke$arity$3(G__99731,G__99732,G__99733) : logseq.shui.ui.dropdown_menu_group.call(null,G__99731,G__99732,G__99733));
})();
var G__99710 = (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null));
var G__99711 = (function (){var G__99753 = icon(new cljs.core.Keyword(null,"brand-github","brand-github",1626459759));
var G__99754 = "GitHub";
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__99753,G__99754) : logseq.shui.ui.dropdown_menu_item.call(null,G__99753,G__99754));
})();
var G__99712 = (function (){var G__99755 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null);
var G__99756 = icon(new cljs.core.Keyword(null,"cloud","cloud",-1976521303));
var G__99757 = "Cloud API";
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__99755,G__99756,G__99757) : logseq.shui.ui.dropdown_menu_item.call(null,G__99755,G__99756,G__99757));
})();
var G__99713 = (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null));
var G__99714 = (function (){var G__99758 = icon(new cljs.core.Keyword(null,"logout","logout",1418564329));
var G__99759 = "Logout";
var G__99760 = (logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u2318+Q") : logseq.shui.ui.dropdown_menu_shortcut.call(null,"\u2318+Q"));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__99758,G__99759,G__99760) : logseq.shui.ui.dropdown_menu_item.call(null,G__99758,G__99759,G__99760));
})();
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$11 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$11(G__99704,G__99705,G__99706,G__99707,G__99708,G__99709,G__99710,G__99711,G__99712,G__99713,G__99714) : logseq.shui.ui.dropdown_menu_content.call(null,G__99704,G__99705,G__99706,G__99707,G__99708,G__99709,G__99710,G__99711,G__99712,G__99713,G__99714));
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$sample_dropdown_menu_content__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__99761 = cljs.core.first(args__47253__auto__);
var G__99762 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__99761,G__99762) : io.factorhouse.hsx.core.obj_get.call(null,G__99761,G__99762));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sample-dropdown-menu-content","sample-dropdown-menu-content",10105,null),args__47253__auto__),logseq$shui$demo$sample_dropdown_menu_content,args__47253__auto__,null);
}
};
var logseq$shui$demo$sample_dropdown_menu_content = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100134__i = 0, G__100134__a = new Array(arguments.length -  0);
while (G__100134__i < G__100134__a.length) {G__100134__a[G__100134__i] = arguments[G__100134__i + 0]; ++G__100134__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100134__a,0,null);
} 
return logseq$shui$demo$sample_dropdown_menu_content__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$sample_dropdown_menu_content.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$sample_dropdown_menu_content.cljs$lang$applyTo = (function (arglist__100135){
var args__47253__auto__ = cljs.core.seq(arglist__100135);
return logseq$shui$demo$sample_dropdown_menu_content__delegate(args__47253__auto__);
});
logseq$shui$demo$sample_dropdown_menu_content.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$sample_dropdown_menu_content__delegate;
return logseq$shui$demo$sample_dropdown_menu_content;
})()
;
var memo_comp__47254__auto__ = (function (){var G__99763 = comp__47252__auto__;
var G__99764 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__99763,G__99764) : io.factorhouse.hsx.core.react_memo.call(null,G__99763,G__99764));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sample-dropdown-menu-content");

return comp__47252__auto__;
})();
logseq.shui.demo.sample_context_menu_content = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$sample_context_menu_content(){
var icon = (function (p1__99765_SHARP_){
return logseq.shui.ui.tabler_icon(cljs.core.name(p1__99765_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"scale-90 pr-1 opacity-80"], null));
});
var G__99768 = (function (){var G__99770 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.px-6.py-12.border-dashed.rounded.text-center.select-none","div.border.px-6.py-12.border-dashed.rounded.text-center.select-none",-933078702),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"ctx-menu-click"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50","span.opacity-50",949060710),"Right click here"], null)], null);
return (logseq.shui.ui.context_menu_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_trigger.cljs$core$IFn$_invoke$arity$1(G__99770) : logseq.shui.ui.context_menu_trigger.call(null,G__99770));
})();
var G__99769 = (function (){var G__99771 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-60 max-h-[80vh] overflow-auto"], null);
var G__99772 = (function (){var G__99781 = icon("arrow-left");
var G__99782 = "Back";
var G__99783 = (logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u2318[") : logseq.shui.ui.context_menu_shortcut.call(null,"\u2318["));
return (logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$3(G__99781,G__99782,G__99783) : logseq.shui.ui.context_menu_item.call(null,G__99781,G__99782,G__99783));
})();
var G__99773 = (function (){var G__99784 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null);
var G__99785 = icon("arrow-right");
var G__99786 = "Forward";
var G__99787 = (logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u2318]") : logseq.shui.ui.context_menu_shortcut.call(null,"\u2318]"));
return (logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$4(G__99784,G__99785,G__99786,G__99787) : logseq.shui.ui.context_menu_item.call(null,G__99784,G__99785,G__99786,G__99787));
})();
var G__99774 = (function (){var G__99788 = icon("refresh");
var G__99789 = "Reload";
var G__99790 = (logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u2318R") : logseq.shui.ui.context_menu_shortcut.call(null,"\u2318R"));
return (logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$3(G__99788,G__99789,G__99790) : logseq.shui.ui.context_menu_item.call(null,G__99788,G__99789,G__99790));
})();
var G__99775 = (function (){var G__99791 = (function (){var G__99793 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inset","inset",-396367740),true], null);
var G__99794 = "More tools";
return (logseq.shui.ui.context_menu_sub_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.context_menu_sub_trigger.cljs$core$IFn$_invoke$arity$2(G__99793,G__99794) : logseq.shui.ui.context_menu_sub_trigger.call(null,G__99793,G__99794));
})();
var G__99792 = (function (){var G__99795 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-48"], null);
var G__99796 = (function (){var G__99801 = "Save page As...";
var G__99802 = (logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u21E7\u2318S") : logseq.shui.ui.context_menu_shortcut.call(null,"\u21E7\u2318S"));
return (logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$2(G__99801,G__99802) : logseq.shui.ui.context_menu_item.call(null,G__99801,G__99802));
})();
var G__99797 = (logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$1("Create Shortcut...") : logseq.shui.ui.context_menu_item.call(null,"Create Shortcut..."));
var G__99798 = (logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$1("Name Window...") : logseq.shui.ui.context_menu_item.call(null,"Name Window..."));
var G__99799 = (logseq.shui.ui.context_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.context_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.context_menu_separator.call(null));
var G__99800 = (logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_item.cljs$core$IFn$_invoke$arity$1("Developer Tools") : logseq.shui.ui.context_menu_item.call(null,"Developer Tools"));
return (logseq.shui.ui.context_menu_sub_content.cljs$core$IFn$_invoke$arity$6 ? logseq.shui.ui.context_menu_sub_content.cljs$core$IFn$_invoke$arity$6(G__99795,G__99796,G__99797,G__99798,G__99799,G__99800) : logseq.shui.ui.context_menu_sub_content.call(null,G__99795,G__99796,G__99797,G__99798,G__99799,G__99800));
})();
return (logseq.shui.ui.context_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.context_menu_sub.cljs$core$IFn$_invoke$arity$2(G__99791,G__99792) : logseq.shui.ui.context_menu_sub.call(null,G__99791,G__99792));
})();
var G__99776 = (logseq.shui.ui.context_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.context_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.context_menu_separator.call(null));
var G__99777 = (function (){var G__99803 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),true], null);
var G__99804 = "Show Bookmarks Bar";
var G__99805 = (logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_shortcut.cljs$core$IFn$_invoke$arity$1("\u2318\u21E7B") : logseq.shui.ui.context_menu_shortcut.call(null,"\u2318\u21E7B"));
return (logseq.shui.ui.context_menu_checkbox_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.context_menu_checkbox_item.cljs$core$IFn$_invoke$arity$3(G__99803,G__99804,G__99805) : logseq.shui.ui.context_menu_checkbox_item.call(null,G__99803,G__99804,G__99805));
})();
var G__99778 = (logseq.shui.ui.context_menu_checkbox_item.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu_checkbox_item.cljs$core$IFn$_invoke$arity$1("Show Full URLs") : logseq.shui.ui.context_menu_checkbox_item.call(null,"Show Full URLs"));
var G__99779 = (logseq.shui.ui.context_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.context_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.context_menu_separator.call(null));
var G__99780 = (function (){var G__99806 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"pedro"], null);
var G__99807 = (function (){var G__99811 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inset","inset",-396367740),true], null);
var G__99812 = "People";
return (logseq.shui.ui.context_menu_label.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.context_menu_label.cljs$core$IFn$_invoke$arity$2(G__99811,G__99812) : logseq.shui.ui.context_menu_label.call(null,G__99811,G__99812));
})();
var G__99808 = (logseq.shui.ui.context_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.context_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.context_menu_separator.call(null));
var G__99809 = (function (){var G__99813 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"pedro"], null);
var G__99814 = "Pedro Duarte";
return (logseq.shui.ui.context_menu_radio_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.context_menu_radio_item.cljs$core$IFn$_invoke$arity$2(G__99813,G__99814) : logseq.shui.ui.context_menu_radio_item.call(null,G__99813,G__99814));
})();
var G__99810 = (function (){var G__99815 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"colm"], null);
var G__99816 = "Colm Tuite";
return (logseq.shui.ui.context_menu_radio_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.context_menu_radio_item.cljs$core$IFn$_invoke$arity$2(G__99815,G__99816) : logseq.shui.ui.context_menu_radio_item.call(null,G__99815,G__99816));
})();
return (logseq.shui.ui.context_menu_radio_group.cljs$core$IFn$_invoke$arity$5 ? logseq.shui.ui.context_menu_radio_group.cljs$core$IFn$_invoke$arity$5(G__99806,G__99807,G__99808,G__99809,G__99810) : logseq.shui.ui.context_menu_radio_group.call(null,G__99806,G__99807,G__99808,G__99809,G__99810));
})();
return (logseq.shui.ui.context_menu_content.cljs$core$IFn$_invoke$arity$10 ? logseq.shui.ui.context_menu_content.cljs$core$IFn$_invoke$arity$10(G__99771,G__99772,G__99773,G__99774,G__99775,G__99776,G__99777,G__99778,G__99779,G__99780) : logseq.shui.ui.context_menu_content.call(null,G__99771,G__99772,G__99773,G__99774,G__99775,G__99776,G__99777,G__99778,G__99779,G__99780));
})();
return (logseq.shui.ui.context_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.context_menu.cljs$core$IFn$_invoke$arity$2(G__99768,G__99769) : logseq.shui.ui.context_menu.call(null,G__99768,G__99769));
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$sample_context_menu_content__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__99817 = cljs.core.first(args__47253__auto__);
var G__99818 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__99817,G__99818) : io.factorhouse.hsx.core.obj_get.call(null,G__99817,G__99818));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sample-context-menu-content","sample-context-menu-content",-2079676497,null),args__47253__auto__),logseq$shui$demo$sample_context_menu_content,args__47253__auto__,null);
}
};
var logseq$shui$demo$sample_context_menu_content = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100136__i = 0, G__100136__a = new Array(arguments.length -  0);
while (G__100136__i < G__100136__a.length) {G__100136__a[G__100136__i] = arguments[G__100136__i + 0]; ++G__100136__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100136__a,0,null);
} 
return logseq$shui$demo$sample_context_menu_content__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$sample_context_menu_content.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$sample_context_menu_content.cljs$lang$applyTo = (function (arglist__100137){
var args__47253__auto__ = cljs.core.seq(arglist__100137);
return logseq$shui$demo$sample_context_menu_content__delegate(args__47253__auto__);
});
logseq$shui$demo$sample_context_menu_content.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$sample_context_menu_content__delegate;
return logseq$shui$demo$sample_context_menu_content;
})()
;
var memo_comp__47254__auto__ = (function (){var G__99819 = comp__47252__auto__;
var G__99820 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__99819,G__99820) : io.factorhouse.hsx.core.react_memo.call(null,G__99819,G__99820));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sample-context-menu-content");

return comp__47252__auto__;
})();
logseq.shui.demo.sample_tabs = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$sample_tabs(){
var G__99821 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"account",new cljs.core.Keyword(null,"className","className",-1983287057),"w-[400px]"], null);
var G__99822 = (function (){var G__99825 = (function (){var G__99827 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"account"], null);
var G__99828 = "Account";
return (logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2(G__99827,G__99828) : logseq.shui.ui.tabs_trigger.call(null,G__99827,G__99828));
})();
var G__99826 = (function (){var G__99829 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"password"], null);
var G__99830 = "Password";
return (logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2(G__99829,G__99830) : logseq.shui.ui.tabs_trigger.call(null,G__99829,G__99830));
})();
return (logseq.shui.ui.tabs_list.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_list.cljs$core$IFn$_invoke$arity$2(G__99825,G__99826) : logseq.shui.ui.tabs_list.call(null,G__99825,G__99826));
})();
var G__99823 = (function (){var G__99831 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"account"], null);
var G__99832 = "Make changes to your account here.";
return (logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2(G__99831,G__99832) : logseq.shui.ui.tabs_content.call(null,G__99831,G__99832));
})();
var G__99824 = (function (){var G__99833 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"password"], null);
var G__99834 = "Change your password here.";
return (logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2(G__99833,G__99834) : logseq.shui.ui.tabs_content.call(null,G__99833,G__99834));
})();
return (logseq.shui.ui.tabs.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.tabs.cljs$core$IFn$_invoke$arity$4(G__99821,G__99822,G__99823,G__99824) : logseq.shui.ui.tabs.call(null,G__99821,G__99822,G__99823,G__99824));
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$sample_tabs__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__99835 = cljs.core.first(args__47253__auto__);
var G__99836 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__99835,G__99836) : io.factorhouse.hsx.core.obj_get.call(null,G__99835,G__99836));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sample-tabs","sample-tabs",665446594,null),args__47253__auto__),logseq$shui$demo$sample_tabs,args__47253__auto__,null);
}
};
var logseq$shui$demo$sample_tabs = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100138__i = 0, G__100138__a = new Array(arguments.length -  0);
while (G__100138__i < G__100138__a.length) {G__100138__a[G__100138__i] = arguments[G__100138__i + 0]; ++G__100138__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100138__a,0,null);
} 
return logseq$shui$demo$sample_tabs__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$sample_tabs.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$sample_tabs.cljs$lang$applyTo = (function (arglist__100139){
var args__47253__auto__ = cljs.core.seq(arglist__100139);
return logseq$shui$demo$sample_tabs__delegate(args__47253__auto__);
});
logseq$shui$demo$sample_tabs.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$sample_tabs__delegate;
return logseq$shui$demo$sample_tabs;
})()
;
var memo_comp__47254__auto__ = (function (){var G__99837 = comp__47252__auto__;
var G__99838 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__99837,G__99838) : io.factorhouse.hsx.core.react_memo.call(null,G__99837,G__99838));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sample-tabs");

return comp__47252__auto__;
})();
logseq.shui.demo.sample_form_basic = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$sample_form_basic(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.p-6.rounded.bg-gray-01","div.border.p-6.rounded.bg-gray-01",-389339868),(function (){var form_ctx = logseq.shui.form.core.use_form.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultValues","defaultValues",422888972),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"agreement","agreement",-156381462),true,new cljs.core.Keyword(null,"notification","notification",-222338233),"all",new cljs.core.Keyword(null,"bio","bio",-331851886),""], null),new cljs.core.Keyword(null,"yupSchema","yupSchema",-1266946445),logseq.shui.form.core.yup.object().shape(({"username": logseq.shui.form.core.yup.string().required()})).required()], null));
var handle_submit = new cljs.core.Keyword(null,"handleSubmit","handleSubmit",65998088).cljs$core$IFn$_invoke$arity$1(form_ctx);
var on_submit_valid = (function (){var G__99860 = (function (e){
console.log("[form] submit: ",e);

return alert(JSON.stringify(e,null,(2)));
});
return (handle_submit.cljs$core$IFn$_invoke$arity$1 ? handle_submit.cljs$core$IFn$_invoke$arity$1(G__99860) : handle_submit.call(null,G__99860));
})();
var G__99861 = form_ctx;
var G__99862 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit_valid], null),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"username"], null),(function (field,error){
var G__99863 = (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1("Username") : logseq.shui.ui.form_label.call(null,"Username"));
var G__99864 = (function (){var G__99866 = (function (){var G__99867 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username"], null),field], 0));
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__99867) : logseq.shui.ui.input.call(null,G__99867));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__99866) : logseq.shui.ui.form_control.call(null,G__99866));
})();
var G__99865 = (function (){var G__99868 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.text-red-800","b.text-red-800",1802050661),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)], null):"This is your public display name.");
return (logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1(G__99868) : logseq.shui.ui.form_description.call(null,G__99868));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3(G__99863,G__99864,G__99865) : logseq.shui.ui.form_item.call(null,G__99863,G__99864,G__99865));
})),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"bio"], null),(function (field,_error){
var G__99869 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-4"], null);
var G__99870 = (function (){var G__99871 = (function (){var G__99872 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Bio text..."], null),field], 0));
return (logseq.shui.ui.textarea.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.textarea.cljs$core$IFn$_invoke$arity$1(G__99872) : logseq.shui.ui.textarea.call(null,G__99872));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__99871) : logseq.shui.ui.form_control.call(null,G__99871));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$2(G__99869,G__99870) : logseq.shui.ui.form_item.call(null,G__99869,G__99870));
})),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"notification"], null),(function (field){
var G__99873 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3 my-4"], null);
var G__99874 = (function (){var G__99875 = (function (){var G__99876 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),new cljs.core.Keyword(null,"onChange","onChange",-312891301).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col space-y-3"], null);
var G__99877 = (function (){var G__99879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row space-x-2 items-center space-y-0"], null);
var G__99880 = (function (){var G__99882 = (function (){var G__99883 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"all"], null);
return (logseq.shui.ui.radio_group_item.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.radio_group_item.cljs$core$IFn$_invoke$arity$1(G__99883) : logseq.shui.ui.radio_group_item.call(null,G__99883));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__99882) : logseq.shui.ui.form_control.call(null,G__99882));
})();
var G__99881 = (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1("All") : logseq.shui.ui.form_label.call(null,"All"));
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3(G__99879,G__99880,G__99881) : logseq.shui.ui.form_item.call(null,G__99879,G__99880,G__99881));
})();
var G__99878 = (function (){var G__99884 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row space-x-2 items-center space-y-0"], null);
var G__99885 = (function (){var G__99887 = (function (){var G__99888 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"direct"], null);
return (logseq.shui.ui.radio_group_item.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.radio_group_item.cljs$core$IFn$_invoke$arity$1(G__99888) : logseq.shui.ui.radio_group_item.call(null,G__99888));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__99887) : logseq.shui.ui.form_control.call(null,G__99887));
})();
var G__99886 = (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1("Direct messages and mentions") : logseq.shui.ui.form_label.call(null,"Direct messages and mentions"));
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3(G__99884,G__99885,G__99886) : logseq.shui.ui.form_item.call(null,G__99884,G__99885,G__99886));
})();
return (logseq.shui.ui.radio_group.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.radio_group.cljs$core$IFn$_invoke$arity$3(G__99876,G__99877,G__99878) : logseq.shui.ui.radio_group.call(null,G__99876,G__99877,G__99878));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__99875) : logseq.shui.ui.form_control.call(null,G__99875));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$2(G__99873,G__99874) : logseq.shui.ui.form_item.call(null,G__99873,G__99874));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"agreement"], null),(function (field){
var G__99889 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-start items-center space-x-2 space-y-0 my-3 pr-3"], null);
var G__99890 = (function (){var G__99892 = (function (){var G__99893 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),new cljs.core.Keyword(null,"onChange","onChange",-312891301).cljs$core$IFn$_invoke$arity$1(field)], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__99893) : logseq.shui.ui.checkbox.call(null,G__99893));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__99892) : logseq.shui.ui.form_control.call(null,G__99892));
})();
var G__99891 = (function (){var G__99894 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-normal cursor-pointer"], null);
var G__99895 = "Agreement terms";
return (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$2(G__99894,G__99895) : logseq.shui.ui.form_label.call(null,G__99894,G__99895));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3(G__99889,G__99890,G__99891) : logseq.shui.ui.form_item.call(null,G__99889,G__99890,G__99891));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.px-2","div.relative.px-2",-725893854),(function (){var G__99896 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"!absolute right-0 top-[-40px]"], null);
var G__99897 = "Submit";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99896,G__99897) : logseq.shui.ui.button.call(null,G__99896,G__99897));
})()], null)], null);
return (logseq.shui.ui.form_provider.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.form_provider.cljs$core$IFn$_invoke$arity$2(G__99861,G__99862) : logseq.shui.ui.form_provider.call(null,G__99861,G__99862));
})()], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$sample_form_basic__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__99898 = cljs.core.first(args__47253__auto__);
var G__99899 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__99898,G__99899) : io.factorhouse.hsx.core.obj_get.call(null,G__99898,G__99899));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sample-form-basic","sample-form-basic",-1429131894,null),args__47253__auto__),logseq$shui$demo$sample_form_basic,args__47253__auto__,null);
}
};
var logseq$shui$demo$sample_form_basic = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100144__i = 0, G__100144__a = new Array(arguments.length -  0);
while (G__100144__i < G__100144__a.length) {G__100144__a[G__100144__i] = arguments[G__100144__i + 0]; ++G__100144__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100144__a,0,null);
} 
return logseq$shui$demo$sample_form_basic__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$sample_form_basic.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$sample_form_basic.cljs$lang$applyTo = (function (arglist__100145){
var args__47253__auto__ = cljs.core.seq(arglist__100145);
return logseq$shui$demo$sample_form_basic__delegate(args__47253__auto__);
});
logseq$shui$demo$sample_form_basic.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$sample_form_basic__delegate;
return logseq$shui$demo$sample_form_basic;
})()
;
var memo_comp__47254__auto__ = (function (){var G__99900 = comp__47252__auto__;
var G__99901 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__99900,G__99901) : io.factorhouse.hsx.core.react_memo.call(null,G__99900,G__99901));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sample-form-basic");

return comp__47252__auto__;
})();
logseq.shui.demo.sample_date_picker = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$sample_date_picker(){
var vec__99904 = logseq.shui.hooks.use_state(false);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99904,(0),null);
var set_open_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99904,(1),null);
var vec__99907 = logseq.shui.hooks.use_state((new Date()));
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99907,(0),null);
var set_date_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99907,(1),null);
var G__99910 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),(function (o){
return (set_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_open_BANG_.cljs$core$IFn$_invoke$arity$1(o) : set_open_BANG_.call(null,o));
})], null);
var G__99911 = (function (){var G__99913 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true,new cljs.core.Keyword(null,"class","class",-2030961996),"w-2/3"], null);
var G__99914 = (function (){var G__99915 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"pick a date",new cljs.core.Keyword(null,"default-value","default-value",232220170),date.toDateString()], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__99915) : logseq.shui.ui.input.call(null,G__99915));
})();
return (logseq.shui.ui.popover_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.popover_trigger.cljs$core$IFn$_invoke$arity$2(G__99913,G__99914) : logseq.shui.ui.popover_trigger.call(null,G__99913,G__99914));
})();
var G__99912 = (function (){var G__99916 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open-auto-focus","on-open-auto-focus",391348920),(function (p1__99903_SHARP_){
return p1__99903_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"side-offset","side-offset",207149931),(8),new cljs.core.Keyword(null,"class","class",-2030961996),"p-0"], null);
var G__99917 = (function (){var G__99920 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),date,new cljs.core.Keyword(null,"on-day-click","on-day-click",1918658076),(function (d){
(set_date_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_date_BANG_.cljs$core$IFn$_invoke$arity$1(d) : set_date_BANG_.call(null,d));

return (set_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_open_BANG_.call(null,false));
})], null);
return (logseq.shui.ui.calendar.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.calendar.cljs$core$IFn$_invoke$arity$1(G__99920) : logseq.shui.ui.calendar.call(null,G__99920));
})();
return (logseq.shui.ui.popover_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.popover_content.cljs$core$IFn$_invoke$arity$2(G__99916,G__99917) : logseq.shui.ui.popover_content.call(null,G__99916,G__99917));
})();
return (logseq.shui.ui.popover.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popover.cljs$core$IFn$_invoke$arity$3(G__99910,G__99911,G__99912) : logseq.shui.ui.popover.call(null,G__99910,G__99911,G__99912));
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$sample_date_picker__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__99921 = cljs.core.first(args__47253__auto__);
var G__99922 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__99921,G__99922) : io.factorhouse.hsx.core.obj_get.call(null,G__99921,G__99922));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sample-date-picker","sample-date-picker",1508068247,null),args__47253__auto__),logseq$shui$demo$sample_date_picker,args__47253__auto__,null);
}
};
var logseq$shui$demo$sample_date_picker = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100148__i = 0, G__100148__a = new Array(arguments.length -  0);
while (G__100148__i < G__100148__a.length) {G__100148__a[G__100148__i] = arguments[G__100148__i + 0]; ++G__100148__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100148__a,0,null);
} 
return logseq$shui$demo$sample_date_picker__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$sample_date_picker.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$sample_date_picker.cljs$lang$applyTo = (function (arglist__100149){
var args__47253__auto__ = cljs.core.seq(arglist__100149);
return logseq$shui$demo$sample_date_picker__delegate(args__47253__auto__);
});
logseq$shui$demo$sample_date_picker.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$sample_date_picker__delegate;
return logseq$shui$demo$sample_date_picker;
})()
;
var memo_comp__47254__auto__ = (function (){var G__99925 = comp__47252__auto__;
var G__99926 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__99925,G__99926) : io.factorhouse.hsx.core.react_memo.call(null,G__99925,G__99926));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sample-date-picker");

return comp__47252__auto__;
})();
logseq.shui.demo.sample_dialog_basic = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$sample_dialog_basic(){
var vec__99928 = logseq.shui.hooks.use_state(false);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99928,(0),null);
var set_open_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99928,(1),null);
var G__99931 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),(function (p1__99927_SHARP_){
return (set_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_open_BANG_.cljs$core$IFn$_invoke$arity$1(p1__99927_SHARP_) : set_open_BANG_.call(null,p1__99927_SHARP_));
})], null);
var G__99932 = (function (){var G__99934 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null);
var G__99935 = (function (){var G__99936 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534)], null);
var G__99937 = logseq.shui.ui.tabler_icon("notification");
var G__99938 = "Open as modal locally";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__99936,G__99937,G__99938) : logseq.shui.ui.button.call(null,G__99936,G__99937,G__99938));
})();
return (logseq.shui.ui.dialog_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_trigger.cljs$core$IFn$_invoke$arity$2(G__99934,G__99935) : logseq.shui.ui.dialog_trigger.call(null,G__99934,G__99935));
})();
var G__99933 = (function (){var G__99939 = (function (){var G__99942 = (logseq.shui.ui.dialog_title.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_title.cljs$core$IFn$_invoke$arity$1("Header") : logseq.shui.ui.dialog_title.call(null,"Header"));
var G__99943 = (logseq.shui.ui.dialog_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_description.cljs$core$IFn$_invoke$arity$1("Description") : logseq.shui.ui.dialog_description.call(null,"Description"));
return (logseq.shui.ui.dialog_header.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_header.cljs$core$IFn$_invoke$arity$2(G__99942,G__99943) : logseq.shui.ui.dialog_header.call(null,G__99942,G__99943));
})();
var G__99940 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-h-96.overflow-y-auto","div.max-h-96.overflow-y-auto",-826451097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"-mx-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.px-6","section.px-6",-428609558),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((8),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your custom content"], null))], null)], null);
var G__99941 = (function (){var G__99944 = (function (){var G__99945 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_open_BANG_.call(null,false));
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655)], null);
var G__99946 = "\uD83C\uDF44 * Footer";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99945,G__99946) : logseq.shui.ui.button.call(null,G__99945,G__99946));
})();
return (logseq.shui.ui.dialog_footer.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_footer.cljs$core$IFn$_invoke$arity$1(G__99944) : logseq.shui.ui.dialog_footer.call(null,G__99944));
})();
return (logseq.shui.ui.dialog_content.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dialog_content.cljs$core$IFn$_invoke$arity$3(G__99939,G__99940,G__99941) : logseq.shui.ui.dialog_content.call(null,G__99939,G__99940,G__99941));
})();
return (logseq.shui.ui.dialog.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dialog.cljs$core$IFn$_invoke$arity$3(G__99931,G__99932,G__99933) : logseq.shui.ui.dialog.call(null,G__99931,G__99932,G__99933));
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$sample_dialog_basic__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__99947 = cljs.core.first(args__47253__auto__);
var G__99948 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__99947,G__99948) : io.factorhouse.hsx.core.obj_get.call(null,G__99947,G__99948));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sample-dialog-basic","sample-dialog-basic",554482139,null),args__47253__auto__),logseq$shui$demo$sample_dialog_basic,args__47253__auto__,null);
}
};
var logseq$shui$demo$sample_dialog_basic = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100152__i = 0, G__100152__a = new Array(arguments.length -  0);
while (G__100152__i < G__100152__a.length) {G__100152__a[G__100152__i] = arguments[G__100152__i + 0]; ++G__100152__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100152__a,0,null);
} 
return logseq$shui$demo$sample_dialog_basic__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$sample_dialog_basic.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$sample_dialog_basic.cljs$lang$applyTo = (function (arglist__100153){
var args__47253__auto__ = cljs.core.seq(arglist__100153);
return logseq$shui$demo$sample_dialog_basic__delegate(args__47253__auto__);
});
logseq$shui$demo$sample_dialog_basic.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$sample_dialog_basic__delegate;
return logseq$shui$demo$sample_dialog_basic;
})()
;
var memo_comp__47254__auto__ = (function (){var G__99951 = comp__47252__auto__;
var G__99952 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__99951,G__99952) : io.factorhouse.hsx.core.react_memo.call(null,G__99951,G__99952));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sample-dialog-basic");

return comp__47252__auto__;
})();
logseq.shui.demo.sample_notifications = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$sample_notifications(){
var vec__99953 = logseq.shui.hooks.use_state(null);
var last_dismissed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99953,(0),null);
var set_last_dismissed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99953,(1),null);
var progress_id = new cljs.core.Keyword("demo","notification-progress","demo/notification-progress",112003276);
var callback_id = new cljs.core.Keyword("demo","notification-callback","demo/notification-callback",171498602);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-3","div.flex.flex-col.gap-3",-1634021513),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.gap-2","div.flex.flex-row.flex-wrap.gap-2",-241247804),(function (){var G__99956 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Saved successfully",new cljs.core.Keyword(null,"success","success",1890645906));
})], null);
var G__99957 = "Success";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99956,G__99957) : logseq.shui.ui.button.call(null,G__99956,G__99957));
})(),(function (){var G__99958 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Background sync is running",new cljs.core.Keyword(null,"info","info",-317069002));
})], null);
var G__99959 = "Info";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99958,G__99959) : logseq.shui.ui.button.call(null,G__99958,G__99959));
})(),(function (){var G__99960 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Storage space is almost full",new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
})], null);
var G__99961 = "Warning";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99960,G__99961) : logseq.shui.ui.button.call(null,G__99960,G__99961));
})(),(function (){var G__99962 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Upload failed. Fix it before retrying.",new cljs.core.Keyword(null,"error","error",-978969032),false);
})], null);
var G__99963 = "Persistent error";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99962,G__99963) : logseq.shui.ui.button.call(null,G__99962,G__99963));
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.gap-2","div.flex.flex-row.flex-wrap.gap-2",-241247804),(function (){var G__99964 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"primary-green",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5("Syncing notifications demo...",new cljs.core.Keyword(null,"info","info",-317069002),true,progress_id,(10000));

return setTimeout((function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5("Notifications demo synced",new cljs.core.Keyword(null,"success","success",1890645906),true,progress_id,(1500));
}),(1200));
})], null);
var G__99965 = "Update same id";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99964,G__99965) : logseq.shui.ui.button.call(null,G__99964,G__99965));
})(),(function (){var G__99966 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.notification.clear_BANG_(progress_id);
})], null);
var G__99967 = "Clear updated one";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99966,G__99967) : logseq.shui.ui.button.call(null,G__99966,G__99967));
})(),(function (){var G__99968 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6("Dismiss me to trigger callback",new cljs.core.Keyword(null,"warning","warning",-1685650671),true,callback_id,(4000),(function (uid){
var G__99970 = cljs.core.name(uid);
return (set_last_dismissed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_last_dismissed_BANG_.cljs$core$IFn$_invoke$arity$1(G__99970) : set_last_dismissed_BANG_.call(null,G__99970));
}));
})], null);
var G__99969 = "Dismiss callback";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99968,G__99969) : logseq.shui.ui.button.call(null,G__99968,G__99969));
})(),(function (){var G__99971 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.notification.clear_all_BANG_], null);
var G__99972 = "Clear all";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99971,G__99972) : logseq.shui.ui.button.call(null,G__99971,G__99972));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-70","div.text-sm.opacity-70",630172022),"Last dismissed notification: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var or__5142__auto__ = last_dismissed;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "none";
}
})()], null)], null)], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$sample_notifications__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__99973 = cljs.core.first(args__47253__auto__);
var G__99974 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__99973,G__99974) : io.factorhouse.hsx.core.obj_get.call(null,G__99973,G__99974));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sample-notifications","sample-notifications",276657592,null),args__47253__auto__),logseq$shui$demo$sample_notifications,args__47253__auto__,null);
}
};
var logseq$shui$demo$sample_notifications = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100154__i = 0, G__100154__a = new Array(arguments.length -  0);
while (G__100154__i < G__100154__a.length) {G__100154__a[G__100154__i] = arguments[G__100154__i + 0]; ++G__100154__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100154__a,0,null);
} 
return logseq$shui$demo$sample_notifications__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$sample_notifications.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$sample_notifications.cljs$lang$applyTo = (function (arglist__100155){
var args__47253__auto__ = cljs.core.seq(arglist__100155);
return logseq$shui$demo$sample_notifications__delegate(args__47253__auto__);
});
logseq$shui$demo$sample_notifications.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$sample_notifications__delegate;
return logseq$shui$demo$sample_notifications;
})()
;
var memo_comp__47254__auto__ = (function (){var G__99975 = comp__47252__auto__;
var G__99976 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__99975,G__99976) : io.factorhouse.hsx.core.react_memo.call(null,G__99975,G__99976));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sample-notifications");

return comp__47252__auto__;
})();
logseq.shui.demo.page = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$page(){
var G__99984 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:p-10","div.sm:p-10",-1269750615),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__99977_SHARP_){
return console.log("===>> onChange:",p1__99977_SHARP_,p1__99977_SHARP_.target.value);
})], null)], null),(function (){var G__99985 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return console.log("==>> click:",(e.target.checked = e.target.dataset.state),e.target.checked);
}),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (p1__99978_SHARP_){
return console.log("==>> on checked change:",p1__99978_SHARP_);
})], null);
var G__99986 = "abc";
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$2(G__99985,G__99986) : logseq.shui.ui.checkbox.call(null,G__99985,G__99986));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.font-bold","h1.text-3xl.font-bold",728823614),"Logseq UI"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),logseq.shui.demo.section_item("Button",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.gap-2","div.flex.flex-row.flex-wrap.gap-2",-241247804),(function (){var vec__99987 = logseq.shui.hooks.use_state(false);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99987,(0),null);
var set_loading_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99987,(1),null);
var G__99990 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_loading_BANG_.call(null,true));

return setTimeout((function (){
return (set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_BANG_.call(null,false));
}),(5000));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading_QMARK_], null);
var G__99991 = (cljs.core.truth_(loading_QMARK_)?logseq.shui.ui.tabler_icon("loader2",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-spin"], null)):null);
var G__99992 = "Logseq Classic Button";
var G__99993 = logseq.shui.ui.tabler_icon("arrow-right");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$4(G__99990,G__99991,G__99992,G__99993) : logseq.shui.ui.button.call(null,G__99990,G__99991,G__99992,G__99993));
})(),(function (){var G__99994 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__99995 = "Outline";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99994,G__99995) : logseq.shui.ui.button.call(null,G__99994,G__99995));
})(),(function (){var G__99996 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__99997 = "Secondary";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99996,G__99997) : logseq.shui.ui.button.call(null,G__99996,G__99997));
})(),(function (){var G__99998 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__99999 = "Disabled";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99998,G__99999) : logseq.shui.ui.button.call(null,G__99998,G__99999));
})(),(function (){var G__100000 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__100001 = "Destructive";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100000,G__100001) : logseq.shui.ui.button.call(null,G__100000,G__100001));
})(),(function (){var G__100002 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"primary-green",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__100003 = "Custom (.primary-green)";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100002,G__100003) : logseq.shui.ui.button.call(null,G__100002,G__100003));
})(),(function (){var G__100004 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__100005 = "Ghost";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100004,G__100005) : logseq.shui.ui.button.call(null,G__100004,G__100005));
})(),(function (){var G__100006 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__100007 = "Link";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100006,G__100007) : logseq.shui.ui.button.call(null,G__100006,G__100007));
})(),(function (){var G__100008 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__100009 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.text-blue-rx-10.hover:text-blue-rx-10-alpha","a.flex.items-center.text-blue-rx-10.hover:text-blue-rx-10-alpha",939713394),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://x.com/logseq",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),logseq.shui.ui.tabler_icon("brand-twitter",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100008,G__100009) : logseq.shui.ui.button.call(null,G__100008,G__100009));
})()], null)),logseq.shui.demo.section_item("Toast",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.gap-2","div.flex.flex-row.flex-wrap.gap-2",-241247804),(function (){var G__100010 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__100013 = "Check for updates ...";
var G__100014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null),cljs.core.rand_int((3)));
var G__100015 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),((cljs.core.odd_QMARK_(Date.now()))?"History of China":""),new cljs.core.Keyword(null,"duration","duration",1444101068),(3000)], null);
return (logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$3(G__100013,G__100014,G__100015) : logseq.shui.ui.toast_BANG_.call(null,G__100013,G__100014,G__100015));
})], null);
var G__100011 = "Open random toast";
var G__100012 = logseq.shui.ui.tabler_icon("arrow-right");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__100010,G__100011,G__100012) : logseq.shui.ui.button.call(null,G__100010,G__100011,G__100012));
})(),(function (){var G__100016 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__100019 = (function (p__100022){
var map__100023 = p__100022;
var map__100023__$1 = cljs.core.__destructure_map(map__100023);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var dismiss_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100023__$1,new cljs.core.Keyword(null,"dismiss!","dismiss!",-2130034104));
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100023__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.text-red-700","b.text-red-700",711663976),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2","div.flex.items-center.gap-2",-1286016734),logseq.shui.ui.tabler_icon("info-circle"),(""+"#("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+") "),(new Date()).toLocaleString()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-2","div.flex.flex-row.gap-2",-1457313917),(function (){var G__100024 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (dismiss_BANG_.cljs$core$IFn$_invoke$arity$1 ? dismiss_BANG_.cljs$core$IFn$_invoke$arity$1(id) : dismiss_BANG_.call(null,id));
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__100025 = "x close";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100024,G__100025) : logseq.shui.ui.button.call(null,G__100024,G__100025));
})(),(function (){var G__100026 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__100028 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),Date.now(),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(function (){var G__100029 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.toast_dismiss_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.toast_dismiss_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.toast_dismiss_BANG_.call(null));
})], null);
var G__100030 = "clear all";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100029,G__100030) : logseq.shui.ui.button.call(null,G__100029,G__100030));
})()], null)], null);
return (update_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_BANG_.cljs$core$IFn$_invoke$arity$1(G__100028) : update_BANG_.call(null,G__100028));
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__100027 = "x update";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100026,G__100027) : logseq.shui.ui.button.call(null,G__100026,G__100027));
})()], null)], null);
});
var G__100020 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__100021 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(3000),new cljs.core.Keyword(null,"onDismiss","onDismiss",1209514337),(function (p1__99979_SHARP_){
return console.log("===>> dismiss?:",p1__99979_SHARP_);
})], null);
return (logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$3(G__100019,G__100020,G__100021) : logseq.shui.ui.toast_BANG_.call(null,G__100019,G__100020,G__100021));
})], null);
var G__100017 = logseq.shui.ui.tabler_icon("apps");
var G__100018 = "Toast callback handle";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__100016,G__100017,G__100018) : logseq.shui.ui.button.call(null,G__100016,G__100017,G__100018));
})(),(function (){var G__100031 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__100033 = "A message from SoundCloud...";
var G__100034 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-orange-rx-10",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.pl-1","b.pl-1",-1078600787),logseq.shui.ui.tabler_icon("brand-soundcloud",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(3000)], null);
return (logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2(G__100033,G__100034) : logseq.shui.ui.toast_BANG_.call(null,G__100033,G__100034));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"primary-orange",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655)], null);
var G__100032 = "Custom icon";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100031,G__100032) : logseq.shui.ui.button.call(null,G__100031,G__100032));
})()], null)),logseq.shui.demo.section_item("Notification",logseq.shui.demo.sample_notifications()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.space-x-16.items-center","div.flex.flex-row.space-x-16.items-center",-750513714),logseq.shui.demo.section_item("Tips",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.gap-2","div.flex.flex-row.flex-wrap.gap-2",-241247804),(function (){var G__100035 = (function (){var G__100036 = (function (){var G__100038 = (function (){var G__100039 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.shui.dialog.core.open_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-9xl.text-center.scale-110","h1.text-9xl.text-center.scale-110",1363418029),"\uD83C\uDF44"], null));
})], null);
var G__100040 = "Tip for hint?";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100039,G__100040) : logseq.shui.ui.button.call(null,G__100039,G__100040));
})();
return (logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$1(G__100038) : logseq.shui.ui.tooltip_trigger.call(null,G__100038));
})();
var G__100037 = (function (){var G__100041 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-42 px-8 py-4 text-xl border-green-rx-08 bg-green-rx-07-alpha"], null);
var G__100042 = "\uD83C\uDF44";
return (logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$2(G__100041,G__100042) : logseq.shui.ui.tooltip_content.call(null,G__100041,G__100042));
})();
return (logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$2(G__100036,G__100037) : logseq.shui.ui.tooltip.call(null,G__100036,G__100037));
})();
return (logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1(G__100035) : logseq.shui.ui.tooltip_provider.call(null,G__100035));
})()], null)),logseq.shui.demo.section_item("Avatar",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.space-x-6.items-center","div.flex.flex-row.space-x-6.items-center",86814234),(function (){var G__100043 = (function (){var G__100045 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://avatars.githubusercontent.com/u/63385289?s=200&v=4"], null);
return (logseq.shui.ui.avatar_image.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.avatar_image.cljs$core$IFn$_invoke$arity$1(G__100045) : logseq.shui.ui.avatar_image.call(null,G__100045));
})();
var G__100044 = (logseq.shui.ui.avatar_fallback.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.avatar_fallback.cljs$core$IFn$_invoke$arity$1("L") : logseq.shui.ui.avatar_fallback.call(null,"L"));
return (logseq.shui.ui.avatar.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.avatar.cljs$core$IFn$_invoke$arity$2(G__100043,G__100044) : logseq.shui.ui.avatar.call(null,G__100043,G__100044));
})(),(function (){var G__100046 = (logseq.shui.ui.avatar_fallback.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.avatar_fallback.cljs$core$IFn$_invoke$arity$1("CH") : logseq.shui.ui.avatar_fallback.call(null,"CH"));
return (logseq.shui.ui.avatar.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.avatar.cljs$core$IFn$_invoke$arity$1(G__100046) : logseq.shui.ui.avatar.call(null,G__100046));
})()], null))], null),logseq.shui.demo.section_item("Badge",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.gap-2","div.flex.flex-row.flex-wrap.gap-2",-241247804),(logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$1("Default") : logseq.shui.ui.badge.call(null,"Default")),(function (){var G__100047 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534)], null);
var G__100048 = "Outline";
return (logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$2(G__100047,G__100048) : logseq.shui.ui.badge.call(null,G__100047,G__100048));
})(),(function (){var G__100049 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null);
var G__100050 = "Secondary";
return (logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$2(G__100049,G__100050) : logseq.shui.ui.badge.call(null,G__100049,G__100050));
})(),(function (){var G__100051 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243)], null);
var G__100052 = "Destructive";
return (logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$2(G__100051,G__100052) : logseq.shui.ui.badge.call(null,G__100051,G__100052));
})(),(function (){var G__100053 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"primary-yellow"], null);
var G__100054 = "Custom (.primary-yellow)";
return (logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.badge.cljs$core$IFn$_invoke$arity$2(G__100053,G__100054) : logseq.shui.ui.badge.call(null,G__100053,G__100054));
})()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.sm:grid-cols-3.sm:gap-8","div.grid.sm:grid-cols-3.sm:gap-8",-1337390849),logseq.shui.demo.section_item("Dropdown",(function (){var G__100055 = (function (){var G__100057 = (function (){var G__100059 = (function (){var G__100060 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null);
var G__100061 = (function (){var G__100062 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534)], null);
var G__100063 = logseq.shui.ui.tabler_icon("list");
var G__100064 = "Open dropdown menu";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__100062,G__100063,G__100064) : logseq.shui.ui.button.call(null,G__100062,G__100063,G__100064));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__100060,G__100061) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__100060,G__100061));
})();
return (logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$1(G__100059) : logseq.shui.ui.tooltip_trigger.call(null,G__100059));
})();
var G__100058 = (logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$1("test hide?") : logseq.shui.ui.tooltip_content.call(null,"test hide?"));
return (logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$2(G__100057,G__100058) : logseq.shui.ui.tooltip.call(null,G__100057,G__100058));
})();
var G__100056 = logseq.shui.demo.sample_dropdown_menu_content();
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__100055,G__100056) : logseq.shui.ui.dropdown_menu.call(null,G__100055,G__100056));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),logseq.shui.demo.section_item("Context Menu",logseq.shui.demo.sample_context_menu_content())], null)], null),logseq.shui.demo.section_item("Tabs",logseq.shui.demo.sample_tabs()),logseq.shui.demo.section_item("Dialog",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.gap-2","div.flex.flex-row.flex-wrap.gap-2",-241247804),logseq.shui.demo.sample_dialog_basic(),(function (){var fc = (function (){
return logseq.shui.dialog.core.open_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-2","div.py-2",-1233160868),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"a modal dialog from `open!`"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can put any content here, and even use shui components!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__100065 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.shui.dialog.core.alert_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"nest"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0));
})], null);
var G__100066 = "open nested dialog";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100065,G__100066) : logseq.shui.ui.button.call(null,G__100065,G__100066));
})()], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Title"], null)], 0));
});
var G__100067 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),fc], null);
var G__100068 = "Imperative API: open!";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100067,G__100068) : logseq.shui.ui.button.call(null,G__100067,G__100068));
})(),(function (){var G__100069 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"primary-yellow",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(logseq.shui.dialog.core.alert_BANG_.cljs$core$IFn$_invoke$arity$variadic("a alert dialog from `alert!`",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.space-x-2.items-center","div.flex.flex-row.space-x-2.items-center",-1196930493),logseq.shui.ui.tabler_icon("alert-triangle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Alert"], null)], null)], null)], 0)),(function (p1__99980_SHARP_){
return console.log("=> alert (promise): ",p1__99980_SHARP_);
}));
})], null);
var G__100070 = "Imperative API: alert!";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100069,G__100070) : logseq.shui.ui.button.call(null,G__100069,G__100070));
})(),(function (){var G__100071 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"primary-green",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(logseq.shui.dialog.core.confirm_BANG_.cljs$core$IFn$_invoke$arity$variadic("a alert dialog from `confirm!`",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.space-x-2.items-center","div.flex.flex-row.space-x-2.items-center",-1196930493),logseq.shui.ui.tabler_icon("alert-triangle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Confirm"], null)], null)], null)], 0)),(function (p1__99981_SHARP_){
return console.log("=> confirm (promise): ",p1__99981_SHARP_);
})),(function (p1__99982_SHARP_){
return console.log("=> confirm (promise): ",p1__99982_SHARP_);
}));
})], null);
var G__100072 = "Imperative API: confirm!";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__100071,G__100072) : logseq.shui.ui.button.call(null,G__100071,G__100072));
})()], null)),logseq.shui.demo.section_item("Alert",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__100073 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-orange-rx-09 border-orange-rx-07-alpha mb-4"], null);
var G__100074 = logseq.shui.ui.tabler_icon("brand-soundcloud");
var G__100075 = (logseq.shui.ui.alert_title.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.alert_title.cljs$core$IFn$_invoke$arity$1("Title is SoundCloud") : logseq.shui.ui.alert_title.call(null,"Title is SoundCloud"));
var G__100076 = (logseq.shui.ui.alert_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.alert_description.cljs$core$IFn$_invoke$arity$1("content: radix colors for Logseq") : logseq.shui.ui.alert_description.call(null,"content: radix colors for Logseq"));
return (logseq.shui.ui.alert.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.alert.cljs$core$IFn$_invoke$arity$4(G__100073,G__100074,G__100075,G__100076) : logseq.shui.ui.alert.call(null,G__100073,G__100074,G__100075,G__100076));
})(),(function (){var G__100077 = logseq.shui.ui.tabler_icon("brand-github");
var G__100078 = (logseq.shui.ui.alert_title.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.alert_title.cljs$core$IFn$_invoke$arity$1("GitHub") : logseq.shui.ui.alert_title.call(null,"GitHub"));
var G__100079 = (logseq.shui.ui.alert_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.alert_description.cljs$core$IFn$_invoke$arity$1("content: radix colors for Logseq") : logseq.shui.ui.alert_description.call(null,"content: radix colors for Logseq"));
return (logseq.shui.ui.alert.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.alert.cljs$core$IFn$_invoke$arity$3(G__100077,G__100078,G__100079) : logseq.shui.ui.alert.call(null,G__100077,G__100078,G__100079));
})()], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.sm:grid-cols-8.gap-4","div.grid.sm:grid-cols-8.gap-4",-617331985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-4.mr-6","div.col-span-4.mr-6",-1406616105),logseq.shui.demo.section_item("Slider",(logseq.shui.ui.slider.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.slider.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.slider.call(null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-1","div.col-span-1",1379827151),logseq.shui.demo.section_item("Switch",(function (){var G__100080 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"relative top-[-8px]"], null);
return (logseq.shui.ui.switch$.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.switch$.cljs$core$IFn$_invoke$arity$1(G__100080) : logseq.shui.ui.switch$.call(null,G__100080));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3.pl-4.pr-2","div.col-span-3.pl-4.pr-2",81684556),logseq.shui.demo.section_item("Select",(function (){var G__100081 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (v){
return (logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"info","info",-317069002)) : logseq.shui.ui.toast_BANG_.call(null,v,new cljs.core.Keyword(null,"info","info",-317069002)));
})], null);
var G__100082 = (function (){var G__100084 = (function (){var G__100085 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select a fruit"], null);
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__100085) : logseq.shui.ui.select_value.call(null,G__100085));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$1(G__100084) : logseq.shui.ui.select_trigger.call(null,G__100084));
})();
var G__100083 = (function (){var G__100086 = (function (){var G__100087 = (logseq.shui.ui.select_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_label.cljs$core$IFn$_invoke$arity$1("Fruits") : logseq.shui.ui.select_label.call(null,"Fruits"));
var G__100088 = (function (){var G__100091 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"apple"], null);
var G__100092 = "Apple";
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__100091,G__100092) : logseq.shui.ui.select_item.call(null,G__100091,G__100092));
})();
var G__100089 = (function (){var G__100093 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"pear"], null);
var G__100094 = "Pear";
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__100093,G__100094) : logseq.shui.ui.select_item.call(null,G__100093,G__100094));
})();
var G__100090 = (function (){var G__100095 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"grapes"], null);
var G__100096 = "Grapes";
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__100095,G__100096) : logseq.shui.ui.select_item.call(null,G__100095,G__100096));
})();
return (logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$4(G__100087,G__100088,G__100089,G__100090) : logseq.shui.ui.select_group.call(null,G__100087,G__100088,G__100089,G__100090));
})();
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1(G__100086) : logseq.shui.ui.select_content.call(null,G__100086));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__100081,G__100082,G__100083) : logseq.shui.ui.select.call(null,G__100081,G__100082,G__100083));
})())], null)], null),logseq.shui.demo.section_item("Form",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),logseq.shui.demo.sample_form_basic()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.sm:grid-cols-2.sm:gap-8","div.grid.sm:grid-cols-2.sm:gap-8",-1152623032),logseq.shui.demo.section_item("Card",(function (){var G__100097 = (function (){var G__100100 = (logseq.shui.ui.card_title.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.card_title.cljs$core$IFn$_invoke$arity$1("Title") : logseq.shui.ui.card_title.call(null,"Title"));
var G__100101 = (logseq.shui.ui.card_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.card_description.cljs$core$IFn$_invoke$arity$1("Description") : logseq.shui.ui.card_description.call(null,"Description"));
return (logseq.shui.ui.card_header.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.card_header.cljs$core$IFn$_invoke$arity$2(G__100100,G__100101) : logseq.shui.ui.card_header.call(null,G__100100,G__100101));
})();
var G__100098 = (logseq.shui.ui.card_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.card_content.cljs$core$IFn$_invoke$arity$1("This is content") : logseq.shui.ui.card_content.call(null,"This is content"));
var G__100099 = (logseq.shui.ui.card_footer.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.card_footer.cljs$core$IFn$_invoke$arity$1("Footer") : logseq.shui.ui.card_footer.call(null,"Footer"));
return (logseq.shui.ui.card.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.card.cljs$core$IFn$_invoke$arity$3(G__100097,G__100098,G__100099) : logseq.shui.ui.card.call(null,G__100097,G__100098,G__100099));
})()),logseq.shui.demo.section_item("Skeleton",(function (){var G__100102 = (function (){var G__100105 = (function (){var G__100107 = (function (){var G__100108 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-4 w-1/2"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__100108) : logseq.shui.ui.skeleton.call(null,G__100108));
})();
return (logseq.shui.ui.card_title.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.card_title.cljs$core$IFn$_invoke$arity$1(G__100107) : logseq.shui.ui.card_title.call(null,G__100107));
})();
var G__100106 = (function (){var G__100109 = (function (){var G__100110 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-2 w-full"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__100110) : logseq.shui.ui.skeleton.call(null,G__100110));
})();
return (logseq.shui.ui.card_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.card_description.cljs$core$IFn$_invoke$arity$1(G__100109) : logseq.shui.ui.card_description.call(null,G__100109));
})();
return (logseq.shui.ui.card_header.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.card_header.cljs$core$IFn$_invoke$arity$2(G__100105,G__100106) : logseq.shui.ui.card_header.call(null,G__100105,G__100106));
})();
var G__100103 = (function (){var G__100111 = (function (){var G__100114 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-3 mb-1"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__100114) : logseq.shui.ui.skeleton.call(null,G__100114));
})();
var G__100112 = (function (){var G__100115 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-3 mb-1"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__100115) : logseq.shui.ui.skeleton.call(null,G__100115));
})();
var G__100113 = (function (){var G__100116 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-3 w-2/3"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__100116) : logseq.shui.ui.skeleton.call(null,G__100116));
})();
return (logseq.shui.ui.card_content.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.card_content.cljs$core$IFn$_invoke$arity$3(G__100111,G__100112,G__100113) : logseq.shui.ui.card_content.call(null,G__100111,G__100112,G__100113));
})();
var G__100104 = (function (){var G__100117 = (function (){var G__100118 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-4 w-full mb-2"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__100118) : logseq.shui.ui.skeleton.call(null,G__100118));
})();
return (logseq.shui.ui.card_footer.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.card_footer.cljs$core$IFn$_invoke$arity$1(G__100117) : logseq.shui.ui.card_footer.call(null,G__100117));
})();
return (logseq.shui.ui.card.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.card.cljs$core$IFn$_invoke$arity$3(G__100102,G__100103,G__100104) : logseq.shui.ui.card.call(null,G__100102,G__100103,G__100104));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.sm:grid-cols-2.sm:gap-8","div.grid.sm:grid-cols-2.sm:gap-8",-1152623032),logseq.shui.demo.section_item("Calendar",(function (){var G__100119 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex"], null);
var G__100120 = (function (){var G__100121 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-day-click","on-day-click",1918658076),(function (p1__99983_SHARP_){
var G__100122 = p1__99983_SHARP_.toString();
var G__100123 = new cljs.core.Keyword(null,"success","success",1890645906);
return (logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2(G__100122,G__100123) : logseq.shui.ui.toast_BANG_.call(null,G__100122,G__100123));
})], null);
return (logseq.shui.ui.calendar.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.calendar.cljs$core$IFn$_invoke$arity$1(G__100121) : logseq.shui.ui.calendar.call(null,G__100121));
})();
return (logseq.shui.ui.card.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.card.cljs$core$IFn$_invoke$arity$2(G__100119,G__100120) : logseq.shui.ui.card.call(null,G__100119,G__100120));
})()),logseq.shui.demo.section_item("Date Picker",logseq.shui.demo.sample_date_picker())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.mb-80","hr.mb-80",-1941534852)], null)], null);
return (logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1(G__99984) : logseq.shui.ui.tooltip_provider.call(null,G__99984));
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$page__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__100124 = cljs.core.first(args__47253__auto__);
var G__100125 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__100124,G__100125) : io.factorhouse.hsx.core.obj_get.call(null,G__100124,G__100125));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page","page",-1805363372,null),args__47253__auto__),logseq$shui$demo$page,args__47253__auto__,null);
}
};
var logseq$shui$demo$page = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100160__i = 0, G__100160__a = new Array(arguments.length -  0);
while (G__100160__i < G__100160__a.length) {G__100160__a[G__100160__i] = arguments[G__100160__i + 0]; ++G__100160__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100160__a,0,null);
} 
return logseq$shui$demo$page__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$page.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$page.cljs$lang$applyTo = (function (arglist__100161){
var args__47253__auto__ = cljs.core.seq(arglist__100161);
return logseq$shui$demo$page__delegate(args__47253__auto__);
});
logseq$shui$demo$page.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$page__delegate;
return logseq$shui$demo$page;
})()
;
var memo_comp__47254__auto__ = (function (){var G__100126 = comp__47252__auto__;
var G__100127 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__100126,G__100127) : io.factorhouse.hsx.core.react_memo.call(null,G__100126,G__100127));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"page");

return comp__47252__auto__;
})();
logseq.shui.demo.get_head_container = (function logseq$shui$demo$get_head_container(){
return document.getElementById("head");
});
logseq.shui.demo.get_main_scroll_container = (function logseq$shui$demo$get_main_scroll_container(){
return document.getElementById("main-content-container");
});
logseq.shui.demo.sticky_table = (function (){var render_fn__47251__auto__ = (function logseq$shui$demo$sticky_table(){
var el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
var container = logseq.shui.demo.get_main_scroll_container();
var el = logseq.shui.hooks.deref(el_ref);
var cls = el.classList;
var _STAR_ticking_QMARK_ = cljs.core.volatile_BANG_(false);
var el_top = el.getBoundingClientRect().top;
var head_top = parseInt(getComputedStyle(logseq.shui.demo.get_head_container()).height);
var translate = (function (offset){
(el.style.transform = (""+"translate3d(0, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)+"px , 0)"));

if((offset === (0))){
return cls.remove("translated");
} else {
return cls.add("translated");
}
});
var _STAR_last_offset = cljs.core.volatile_BANG_((0));
var handle = (function (){
var scroll_top = parseInt(container.scrollTop);
var offset = ((((scroll_top + head_top) > el_top))?(((scroll_top - el_top) + head_top) + (1)):(0));
var offset__$1 = parseInt(offset);
var last_offset = cljs.core.deref(_STAR_last_offset);
if((((!((last_offset === (0))))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(offset__$1,last_offset)))){
var dir_100162 = ((((offset__$1 - last_offset) < (0)))?(-1):(1));
var offset_SINGLEQUOTE__100163 = (last_offset + dir_100162);
while(true){
translate(offset_SINGLEQUOTE__100163);

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(offset__$1,offset_SINGLEQUOTE__100163)) && ((cljs.core.abs((offset__$1 - offset_SINGLEQUOTE__100163)) < (100))))){
var G__100164 = (offset_SINGLEQUOTE__100163 + dir_100162);
offset_SINGLEQUOTE__100163 = G__100164;
continue;
} else {
translate(offset__$1);
}
break;
}
} else {
translate(offset__$1);
}

return cljs.core.vreset_BANG_(_STAR_last_offset,offset__$1);
});
var handler = (function (_e){
if(cljs.core.not(cljs.core.deref(_STAR_ticking_QMARK_))){
window.requestAnimationFrame((function (){
handle();

return cljs.core.vreset_BANG_(_STAR_ticking_QMARK_,false);
}));

return cljs.core.vreset_BANG_(_STAR_ticking_QMARK_,true);
} else {
return null;
}
});
container.addEventListener("scroll",handler);

return (function (){
return container.removeEventListener("scroll",handler);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.charlie-table","div.charlie-table",2093431762),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.charlie-table-header","div.charlie-table-header",-254250646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),el_ref], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"header"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.charlie-table-content","div.charlie-table-content",-1347084017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"content"], null)], null)], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$demo$sticky_table__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__100128 = cljs.core.first(args__47253__auto__);
var G__100129 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__100128,G__100129) : io.factorhouse.hsx.core.obj_get.call(null,G__100128,G__100129));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sticky-table","sticky-table",699087769,null),args__47253__auto__),logseq$shui$demo$sticky_table,args__47253__auto__,null);
}
};
var logseq$shui$demo$sticky_table = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__100165__i = 0, G__100165__a = new Array(arguments.length -  0);
while (G__100165__i < G__100165__a.length) {G__100165__a[G__100165__i] = arguments[G__100165__i + 0]; ++G__100165__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__100165__a,0,null);
} 
return logseq$shui$demo$sticky_table__delegate.call(this,args__47253__auto__);};
logseq$shui$demo$sticky_table.cljs$lang$maxFixedArity = 0;
logseq$shui$demo$sticky_table.cljs$lang$applyTo = (function (arglist__100166){
var args__47253__auto__ = cljs.core.seq(arglist__100166);
return logseq$shui$demo$sticky_table__delegate(args__47253__auto__);
});
logseq$shui$demo$sticky_table.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$demo$sticky_table__delegate;
return logseq$shui$demo$sticky_table;
})()
;
var memo_comp__47254__auto__ = (function (){var G__100130 = comp__47252__auto__;
var G__100131 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__100130,G__100131) : io.factorhouse.hsx.core.react_memo.call(null,G__100130,G__100131));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sticky-table");

return comp__47252__auto__;
})();

//# sourceMappingURL=logseq.shui.demo.js.map
