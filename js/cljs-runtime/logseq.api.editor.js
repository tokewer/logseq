goog.provide('logseq.api.editor');
logseq.api.editor._LT_get_block = (function logseq$api$editor$_LT_get_block(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48499 = arguments.length;
var i__5877__auto___48500 = (0);
while(true){
if((i__5877__auto___48500 < len__5876__auto___48499)){
args__5882__auto__.push((arguments[i__5877__auto___48500]));

var G__48501 = (i__5877__auto___48500 + (1));
i__5877__auto___48500 = G__48501;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic = (function (id_or_name,p__48209){
var map__48210 = p__48209;
var map__48210__$1 = cljs.core.__destructure_map(map__48210);
var opts = map__48210__$1;
if(cljs.core.truth_(id_or_name)){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),id_or_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
} else {
return null;
}
}));

(logseq.api.editor._LT_get_block.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.api.editor._LT_get_block.cljs$lang$applyTo = (function (seq48207){
var G__48208 = cljs.core.first(seq48207);
var seq48207__$1 = cljs.core.next(seq48207);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48208,seq48207__$1);
}));

logseq.api.editor.group_blocks_by_page = (function logseq$api$editor$group_blocks_by_page(blocks){
if(cljs.core.truth_(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)))){
var G__48211 = blocks;
if((G__48211 == null)){
return null;
} else {
return cljs.core.group_by(new cljs.core.Keyword("block","page","block/page",822314108),G__48211);
}
} else {
return blocks;
}
});
logseq.api.editor._LT_get_today_journal_title = (function logseq$api$editor$_LT_get_today_journal_title(){
return frontend.db.async._LT_get_today_journal_title(frontend.state.get_current_repo());
});
logseq.api.editor._LT_get_current_page_or_today = (function logseq$api$editor$_LT_get_current_page_or_today(){
var temp__5823__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5823__auto__)){
var page = temp__5823__auto__;
return promesa.core.resolved(page);
} else {
return logseq.api.editor._LT_get_today_journal_title();
}
});
logseq.api.editor.save_focused_code_editor_content = (function logseq$api$editor$save_focused_code_editor_content(){
return frontend.handler.code.save_code_editor_BANG_();
});
logseq.api.editor.check_editing = (function logseq$api$editor$check_editing(){
if(cljs.core.truth_(frontend.state.get_edit_input_id())){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())));
} else {
return false;
}
});
logseq.api.editor.exit_editing_mode = (function logseq$api$editor$exit_editing_mode(select_QMARK_){
frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select?","select?",-1012224063),select_QMARK_], null)], 0));

return null;
});
logseq.api.editor.insert_at_editing_cursor = (function logseq$api$editor$insert_at_editing_cursor(content){
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var input_id = temp__5825__auto__;
frontend.commands.simple_insert_BANG_(input_id,content,cljs.core.PersistentArrayMap.EMPTY);

var temp__5825__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var input = temp__5825__auto____$1;
return input.focus();
} else {
return null;
}
} else {
return null;
}
});
logseq.api.editor.restore_editing_cursor = (function logseq$api$editor$restore_editing_cursor(){
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var input_id = temp__5825__auto__;
var temp__5825__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var input = temp__5825__auto____$1;
if(cljs.core.truth_((frontend.util.el_visible_in_viewport_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.el_visible_in_viewport_QMARK_.cljs$core$IFn$_invoke$arity$1(input) : frontend.util.el_visible_in_viewport_QMARK_.call(null,input)))){
return input.focus();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
logseq.api.editor.get_editing_cursor_position = (function logseq$api$editor$get_editing_cursor_position(){
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var input_id = temp__5825__auto__;
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(goog.dom.getElement(input_id))));
} else {
return null;
}
});
logseq.api.editor.get_editing_block_content = (function logseq$api$editor$get_editing_block_content(){
return frontend.state.get_edit_content();
});
logseq.api.editor.get_selected_blocks = (function logseq$api$editor$get_selected_blocks(){
var temp__5825__auto__ = frontend.state.selection_QMARK_();
if(temp__5825__auto__){
var blocks = temp__5825__auto__;
var block_ids = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (el){
var G__48212 = el.getAttribute("blockid");
if((G__48212 == null)){
return null;
} else {
return cljs.core.uuid(G__48212);
}
}),blocks);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),block_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),results)));
}));
}));
} else {
return null;
}
});
logseq.api.editor.clear_selected_blocks = (function logseq$api$editor$clear_selected_blocks(){
return frontend.state.clear_selection_BANG_();
});
logseq.api.editor.get_current_page = (function logseq$api$editor$get_current_page(){
var temp__5825__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page__$1){
return promesa.protocols._promise((cljs.core.truth_(page__$1)?logseq.sdk.utils.result__GT_js(page__$1):null));
}));
}));
} else {
return null;
}
});
logseq.api.editor.get_page = (function logseq$api$editor$get_page(id_or_page_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id_or_page_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise((cljs.core.truth_(page)?logseq.sdk.utils.result__GT_js(page):null));
}));
}));
});
logseq.api.editor.get_today_page = (function logseq$api$editor$get_today_page(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_today_journal_title()),(function (today_title){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(today_title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise((function (){var G__48213 = page;
if((G__48213 == null)){
return null;
} else {
return logseq.sdk.utils.result__GT_js(G__48213);
}
})());
}));
}));
}));
});
logseq.api.editor.get_all_pages = (function logseq$api$editor$get_all_pages(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__48214 = frontend.state.get_current_repo();
var G__48215 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact-db?","transact-db?",1279612399),false], null);
var G__48216 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746),false),new cljs.core.Symbol(null,"?hide","?hide",430858172,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"?hide","?hide",430858172,null))], null)], null);
return (frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$3 ? frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$3(G__48214,G__48215,G__48216) : frontend.db.async._LT_q.call(null,G__48214,G__48215,G__48216));
})()),(function (result){
return promesa.protocols._promise(logseq.sdk.utils.result__GT_js(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),result)));
}));
}));
});
logseq.api.editor.create_page = (function logseq$api$editor$create_page(name,properties,opts){
var this$ = this;
var properties__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(properties);
var map__48217 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts);
var map__48217__$1 = cljs.core.__destructure_map(map__48217);
var redirect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217__$1,new cljs.core.Keyword(null,"redirect","redirect",-1975673286));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var journal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217__$1,new cljs.core.Keyword(null,"journal","journal",1585898830));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var customUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217__$1,new cljs.core.Keyword(null,"customUUID","customUUID",-1924598770));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page)?null:(function (){var G__48218 = name;
var G__48219 = (function (){var G__48220 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),((cljs.core.boolean_QMARK_(redirect))?redirect:true),new cljs.core.Keyword(null,"journal?","journal?",-897756522),journal,new cljs.core.Keyword(null,"class?","class?",385834571),class$,new cljs.core.Keyword(null,"format","format",-1306924766),format], null);
if(typeof customUUID === 'string'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48220,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.uuid(customUUID));
} else {
return G__48220;
}
})();
return (frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(G__48218,G__48219) : frontend.handler.page._LT_create_BANG_.call(null,G__48218,G__48219));
})())),(function (new_page){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new_page;
}
})()),(function (page_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(properties__$1))?logseq.api.block.db_based_save_block_properties_BANG_.cljs$core$IFn$_invoke$arity$variadic(new_page,properties__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),this$,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null)], 0)):null)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(((redirect === true)?frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_)):null)),(function (___$1){
return promesa.protocols._promise((function (){var G__48221 = page_SINGLEQUOTE_;
if((G__48221 == null)){
return null;
} else {
return logseq.sdk.utils.result__GT_js(G__48221);
}
})());
}));
}));
}));
}));
}));
}));
});
logseq.api.editor.date_only_yyyy_mm_dd_re = /(\d{4})-(\d{2})-(\d{2})/;
logseq.api.editor.valid_local_calendar_day_QMARK_ = (function logseq$api$editor$valid_local_calendar_day_QMARK_(year,month,day){
var local = (new Date(year,(month - (1)),day));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(year,local.getFullYear())) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((month - (1)),local.getMonth())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(day,local.getDate())))));
});
/**
 * Resolve createJournalPage input to a yyyy-MM-dd calendar day.
 * 
 *   A date-only YYYY-MM-DD string is that exact calendar day in every time zone.
 *   Date objects, local date-time strings, and numeric timestamps use the local
 *   calendar day of the parsed instant.
 */
logseq.api.editor.journal_page_input__GT_yyyy_mm_dd = (function logseq$api$editor$journal_page_input__GT_yyyy_mm_dd(date){
var temp__5823__auto__ = (function (){var and__5140__auto__ = typeof date === 'string';
if(and__5140__auto__){
return cljs.core.re_matches(logseq.api.editor.date_only_yyyy_mm_dd_re,date);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var vec__48222 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48222,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48222,(1),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48222,(2),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48222,(3),null);
var year = parseInt(ys,(10));
var month = parseInt(ms,(10));
var day = parseInt(ds,(10));
if(logseq.api.editor.valid_local_calendar_day_QMARK_(year,month,day)){
return date;
} else {
return null;
}
} else {
var parsed = (new Date(date));
if(cljs.core.truth_(isNaN(parsed.getTime()))){
return null;
} else {
return logseq.common.util.date_time.format((new goog.date.Date(parsed)),"yyyy-MM-dd");
}
}
});
logseq.api.editor.create_journal_page = (function logseq$api$editor$create_journal_page(date){
var temp__5825__auto__ = logseq.api.editor.journal_page_input__GT_yyyy_mm_dd(date);
if(cljs.core.truth_(temp__5825__auto__)){
var datestr = temp__5825__auto__;
return logseq.api.editor.create_page(datestr,null,({"journal": true, "redirect": false}));
} else {
return null;
}
});
logseq.api.editor.delete_page = (function logseq$api$editor$delete_page(name){
return (frontend.handler.page._LT_delete_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_delete_BANG_.cljs$core$IFn$_invoke$arity$2(name,null) : frontend.handler.page._LT_delete_BANG_.call(null,name,null));
});
logseq.api.editor.delete_recycled_page_permanently = (function logseq$api$editor$delete_recycled_page_permanently(id_or_page_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id_or_page_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = page;
if(cljs.core.truth_(and__5140__auto__)){
return (logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.recycled_QMARK_.call(null,page));
} else {
return and__5140__auto__;
}
})())?frontend.handler.page.delete_recycled_permanently_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)):null));
}));
}));
});
logseq.api.editor.restore_page = (function logseq$api$editor$restore_page(id_or_page_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id_or_page_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise((cljs.core.truth_(page)?frontend.handler.page.restore_recycled_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)):null));
}));
}));
});
logseq.api.editor.rename_page = frontend.handler.page.rename_BANG_;
logseq.api.editor.open_in_right_sidebar = (function logseq$api$editor$open_in_right_sidebar(block_id_or_uuid_or_key){
if(cljs.core.truth_((function (){var or__5142__auto__ = typeof block_id_or_uuid_or_key === 'number';
if(or__5142__auto__){
return or__5142__auto__;
} else {
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(block_id_or_uuid_or_key) : frontend.util.uuid_string_QMARK_.call(null,block_id_or_uuid_or_key));
}
})())){
return frontend.handler.editor.format.open_block_in_sidebar_BANG_(((typeof block_id_or_uuid_or_key === 'number')?block_id_or_uuid_or_key:logseq.sdk.utils.uuid_or_throw_error(block_id_or_uuid_or_key)));
} else {
var temp__5825__auto__ = logseq.api.plugin.get_caller_plugin_id();
if(cljs.core.truth_(temp__5825__auto__)){
var pid = temp__5825__auto__;
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(pid,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id_or_uuid_or_key))),new cljs.core.Keyword(null,"plugin","plugin",-1688841923));
} else {
return null;
}
}
});
logseq.api.editor.new_block_uuid = (function logseq$api$editor$new_block_uuid(){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.db.new_block_id()));
});
logseq.api.editor.select_block = (function logseq$api$editor$select_block(block_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(logseq.sdk.utils.uuid_or_throw_error(block_uuid),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?(function (){
frontend.handler.editor.select_block_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));

return null;
})()
:null));
}));
}));
});
logseq.api.editor.edit_block = (function logseq$api$editor$edit_block(block_uuid,opts){
var temp__5825__auto__ = (function (){var and__5140__auto__ = block_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return logseq.sdk.utils.uuid_or_throw_error(block_uuid);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid__$1 = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(block_uuid__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((function (){var map__48225 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts);
var map__48225__$1 = cljs.core.__destructure_map(map__48225);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48225__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_(block)){
var G__48226 = block;
var G__48227 = pos;
var G__48228 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473)], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__48226,G__48227,G__48228) : frontend.handler.editor.edit_block_BANG_.call(null,G__48226,G__48227,G__48228));
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
logseq.api.editor._LT_ensure_page_loaded = (function logseq$api$editor$_LT_ensure_page_loaded(block_uuid_or_page_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid_or_page_name)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),true], null)], 0))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(block)?frontend.db.async._LT_get_block_page_info(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)):null)),(function (page_info){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_info);
if(cljs.core.truth_(temp__5825__auto__)){
var page_uuid = temp__5825__auto__;
return frontend.db.async._LT_get_block(repo,page_uuid);
} else {
return null;
}
})()),(function (_){
return promesa.protocols._promise(block);
}));
}));
}));
}));
}));
});
logseq.api.editor.insert_block = (function logseq$api$editor$insert_block(id,content,opts){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block(id)),(function (block){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts)),(function (p__48229){
var map__48230 = p__48229;
var map__48230__$1 = cljs.core.__destructure_map(map__48230);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sibling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"sibling","sibling",-1183865000));
var customUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"customUUID","customUUID",-1924598770));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var autoOrderedList = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"autoOrderedList","autoOrderedList",154272789));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = customUUID;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(properties);
}
})()),(function (custom_uuid){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(custom_uuid)?logseq.sdk.utils.uuid_or_throw_error(custom_uuid):null)),(function (custom_uuid__$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(custom_uuid__$1)?logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(custom_uuid__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)):null)),(function (existing_custom_block){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(existing_custom_block)?(function(){throw (new Error((frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("Custom block UUID already exists (%s).",custom_uuid__$1) : frontend.util.format.call(null,"Custom block UUID already exists (%s).",custom_uuid__$1))))})():null)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(sibling);
if(and__5140__auto__){
var and__5140__auto____$1 = before;
if(cljs.core.truth_(and__5140__auto____$1)){
return block_uuid;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?frontend.db.async._LT_get_block_immediate_children(frontend.state.get_current_repo(),block_uuid):null)),(function (children){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(sibling);
if(and__5140__auto__){
var and__5140__auto____$1 = before;
if(cljs.core.truth_(and__5140__auto____$1)){
return block_uuid;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?(function (){var first_child = cljs.core.first(logseq.db.sort_by_order(children));
if(cljs.core.truth_(first_child)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_child);
} else {
return block_uuid;
}
})():block_uuid)),(function (block_uuid_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_uuid_SINGLEQUOTE_,block_uuid)),(function (insert_at_first_child_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(insert_at_first_child_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sibling,before], null))),(function (p__48231){
var vec__48232 = p__48231;
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48232,(0),null);
var before_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48232,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = sibling_QMARK_ === false;
if(and__5140__auto__){
var and__5140__auto____$1 = before_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(insert_at_first_child_QMARK_);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?false:before_QMARK_)),(function (before_QMARK___$1){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_uuid_SINGLEQUOTE_,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"before?","before?",765621039),before_QMARK___$1,new cljs.core.Keyword(null,"start?","start?",1440714206),start,new cljs.core.Keyword(null,"end?","end?",-1423391609),end,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430),custom_uuid__$1,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082),((cljs.core.boolean_QMARK_(autoOrderedList))?autoOrderedList:false)], null)),(function (opts_SINGLEQUOTE_){
return promesa.protocols._promise(logseq.api.db_based.insert_block(this$,content,properties,schema,opts_SINGLEQUOTE_));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
} else {
return null;
}
})());
}));
}));
});
logseq.api.editor.insert_batch_block = (function logseq$api$editor$insert_batch_block(block_uuid,batch_blocks_js,opts_js){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_ensure_page_loaded(block_uuid)),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?(function (){var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(batch_blocks_js);
if(cljs.core.truth_(temp__5825__auto__)){
var blocks = temp__5825__auto__;
var blocks_SINGLEQUOTE_ = (((!(cljs.core.vector_QMARK_(blocks))))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blocks],null)):blocks);
var opts = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts_js);
return logseq.api.db_based.insert_batch_blocks(this$,block,blocks_SINGLEQUOTE_,opts);
} else {
return null;
}
})():null));
}));
}));
});
logseq.api.editor.remove_block = (function logseq$api$editor$remove_block(id,_opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null));
} else {
return null;
}
})());
}));
}));
}));
});
logseq.api.editor.update_block = (function logseq$api$editor$update_block(id,content,opts){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts)),(function (opts_SINGLEQUOTE_){
return promesa.protocols._promise((cljs.core.truth_(block)?logseq.api.db_based.update_block(this$,block,content,opts_SINGLEQUOTE_):null));
}));
}));
}));
});
logseq.api.editor.move_block = (function logseq$api$editor$move_block(src_block_uuid,target_block_uuid,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(src_block_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (src_block){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(target_block_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (target_block){
return promesa.protocols._promise((function (){var map__48252 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts);
var map__48252__$1 = cljs.core.__destructure_map(map__48252);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48252__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48252__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var move_to = ((cljs.core.boolean$(before))?new cljs.core.Keyword(null,"top","top",-1856271961):((cljs.core.boolean$(children))?new cljs.core.Keyword(null,"nested","nested",18943849):null
));
return frontend.handler.dnd.move_blocks(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_block], null),target_block,null,move_to);
})());
}));
}));
}));
});
logseq.api.editor.get_block = (function logseq$api$editor$get_block(id,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),true], null)], 0))),(function (block){
return promesa.protocols._promise(logseq.api.block.get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(function (){var or__5142__auto__ = opts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ({"includePage": true});
}
})()));
}));
}));
});
logseq.api.editor.get_current_block = (function logseq$api$editor$get_current_block(opts){
var block = frontend.state.get_edit_block();
if(cljs.core.truth_(block)){
return logseq.api.editor.get_block(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),opts);
} else {
var temp__5825__auto__ = (function (){var G__48272 = (function (){var or__5142__auto__ = cljs.core.first(frontend.state.get_selection_blocks());
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_editor_block_container();
}
})();
if((G__48272 == null)){
return null;
} else {
return G__48272.getAttribute("blockid");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(cljs.core.uuid(block_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block__$1){
return promesa.protocols._promise(logseq.api.editor.get_block(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1),opts));
}));
}));
} else {
return null;
}
}
});
logseq.api.editor.get_previous_sibling_block = (function logseq$api$editor$get_previous_sibling_block(id,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block(id)),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.block._LT_sync_children_blocks_BANG_(block)),(function (_){
return promesa.protocols._promise((cljs.core.truth_(block)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_sibling(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"left","left",-399115937))),(function (sibling){
return promesa.protocols._promise((cljs.core.truth_(sibling)?logseq.api.editor.get_block(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(sibling),opts):null));
}));
})):null));
}));
}));
}));
});
logseq.api.editor.get_next_sibling_block = (function logseq$api$editor$get_next_sibling_block(id,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block(id)),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.block._LT_sync_children_blocks_BANG_(block)),(function (_){
return promesa.protocols._promise((cljs.core.truth_(block)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_sibling(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"right","right",-452581833))),(function (sibling){
return promesa.protocols._promise((cljs.core.truth_(sibling)?logseq.api.editor.get_block(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(sibling),opts):null));
}));
})):null));
}));
}));
}));
});
logseq.api.editor.set_block_collapsed = (function logseq$api$editor$set_block_collapsed(id,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?(function (){var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var opts__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts);
var opts__$2 = ((((typeof opts__$1 === 'string') || (cljs.core.boolean_QMARK_(opts__$1))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flag","flag",1088647881),opts__$1], null):opts__$1);
var map__48340 = opts__$2;
var map__48340__$1 = cljs.core.__destructure_map(map__48340);
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48340__$1,new cljs.core.Keyword(null,"flag","flag",1088647881));
var flag__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("toggle",flag))?cljs.core.not(frontend.util.collapsed_QMARK_(block)):cljs.core.boolean$(flag));
if(flag__$1){
frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$1(block_uuid);
} else {
frontend.handler.editor.expand_block_BANG_(block_uuid);
}

return null;
})():null));
}));
}));
});
logseq.api.editor.get_current_page_blocks_tree = (function logseq$api$editor$get_current_page_blocks_tree(){
var temp__5825__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5825__auto__)){
var page_uuid = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_ensure_page_loaded(page_uuid)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_page_blocks_tree.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),page_uuid)),(function (blocks){
return promesa.protocols._promise((function (){var G__48347 = cljs.core.seq(blocks);
var G__48347__$1 = (((G__48347 == null))?null:logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(G__48347));
if((G__48347__$1 == null)){
return null;
} else {
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(G__48347__$1);
}
})());
}));
}));
}));
} else {
return null;
}
});
logseq.api.editor.get_page_blocks_tree = (function logseq$api$editor$get_page_blocks_tree(id_or_page_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_ensure_page_loaded(id_or_page_name)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_page_blocks_tree.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),id_or_page_name)),(function (blocks){
return promesa.protocols._promise((function (){var G__48353 = blocks;
var G__48353__$1 = (((G__48353 == null))?null:logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(G__48353));
if((G__48353__$1 == null)){
return null;
} else {
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(G__48353__$1);
}
})());
}));
}));
}));
});
logseq.api.editor.get_page_linked_references = (function logseq$api$editor$get_page_linked_references(page_name_or_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(page_name_or_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_refs(repo,id)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor.group_blocks_by_page(result)),(function (ref_blocks){
return promesa.protocols._promise(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(ref_blocks)));
}));
}));
}));
} else {
return null;
}
})());
}));
}));
}));
});
logseq.api.editor.prepend_block_in_page = (function logseq$api$editor$prepend_block_in_page(uuid_or_page_name,content,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_current_page_or_today()),(function (current_page_or_today){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = uuid_or_page_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return current_page_or_today;
}
})()),(function (uuid_or_page_name__$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block(uuid_or_page_name__$1)),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(((((cljs.core.not(block)) && (cljs.core.not((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(uuid_or_page_name__$1) : frontend.util.uuid_string_QMARK_.call(null,uuid_or_page_name__$1))))))?(function (){var G__48355 = uuid_or_page_name__$1;
var G__48356 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"format","format",-1306924766),frontend.state.get_preferred_format()], null);
return (frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(G__48355,G__48356) : frontend.handler.page._LT_create_BANG_.call(null,G__48355,G__48356));
})():null)),(function (new_page){
return promesa.protocols._promise((function (){var block__$1 = (function (){var or__5142__auto__ = block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new_page;
}
})();
var opts__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts);
var opts_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts__$1,new cljs.core.Keyword(null,"before","before",-1633692388),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sibling","sibling",-1183865000),false,new cljs.core.Keyword(null,"start","start",-355208981),true], 0));
return logseq.api.editor.insert_block((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1))),content,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(opts_SINGLEQUOTE_));
})());
}));
}));
}));
}));
}));
});
logseq.api.editor.get_current_page_or_today = (function logseq$api$editor$get_current_page_or_today(){
return logseq.api.editor._LT_get_current_page_or_today();
});
logseq.api.editor.append_block_in_page = (function logseq$api$editor$append_block_in_page(var_args){
var G__48378 = arguments.length;
switch (G__48378) {
case 1:
return logseq.api.editor.append_block_in_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.api.editor.append_block_in_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.api.editor.append_block_in_page.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.api.editor.append_block_in_page.cljs$core$IFn$_invoke$arity$1 = (function (content){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor.get_current_page_or_today()),(function (current_page_or_today){
return promesa.protocols._promise(logseq.api.editor.append_block_in_page.cljs$core$IFn$_invoke$arity$3(current_page_or_today,content,null));
}));
}));
}));

(logseq.api.editor.append_block_in_page.cljs$core$IFn$_invoke$arity$2 = (function (uuid_or_page_name_or_content,content_or_opts){
if(typeof content_or_opts === 'string'){
return logseq.api.editor.append_block_in_page.cljs$core$IFn$_invoke$arity$3(uuid_or_page_name_or_content,content_or_opts,null);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor.get_current_page_or_today()),(function (current_page_or_today){
return promesa.protocols._promise(logseq.api.editor.append_block_in_page.cljs$core$IFn$_invoke$arity$3(current_page_or_today,uuid_or_page_name_or_content,content_or_opts));
}));
}));
}
}));

(logseq.api.editor.append_block_in_page.cljs$core$IFn$_invoke$arity$3 = (function (uuid_or_page_name,content,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_current_page_or_today()),(function (current_page_or_today){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = uuid_or_page_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return current_page_or_today;
}
})()),(function (uuid_or_page_name__$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_ensure_page_loaded(uuid_or_page_name__$1)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.not((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(uuid_or_page_name__$1) : frontend.util.uuid_string_QMARK_.call(null,uuid_or_page_name__$1)))),(function (page_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,uuid_or_page_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var and__5140__auto__ = page_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (page == null);
} else {
return and__5140__auto__;
}
})()),(function (page_not_exist_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_not_exist_QMARK_)?(function (){var G__48388 = uuid_or_page_name__$1;
var G__48389 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"format","format",-1306924766),frontend.state.get_preferred_format()], null);
return (frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(G__48388,G__48389) : frontend.handler.page._LT_create_BANG_.call(null,G__48388,G__48389));
})():null)),(function (new_page){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new_page;
}
})()),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page)?frontend.db.async._LT_get_block_immediate_children(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)):null)),(function (children){
return promesa.protocols._promise((function (){var vec__48398 = ((cljs.core.seq(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(logseq.db.sort_by_order(children)),true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,false], null));
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48398,(0),null);
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48398,(1),null);
var target_id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target)));
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"sibling","sibling",-1183865000),sibling_QMARK_);
return logseq.api.editor.insert_block(target_id,content,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(opts__$1));
})());
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));

(logseq.api.editor.append_block_in_page.cljs$lang$maxFixedArity = 3);

logseq.api.editor.download_graph_db = (function logseq$api$editor$download_graph_db(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.handler.export$.export_repo_as_sqlite_db_BANG_(repo);
} else {
return null;
}
});
logseq.api.editor.download_graph_pages = (function logseq$api$editor$download_graph_pages(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.handler.export$.export_repo_as_zip_BANG_(repo);
} else {
return null;
}
});
logseq.api.editor.upsert_block_property = (function logseq$api$editor$upsert_block_property(id,key,value,options){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(options)),(function (opts){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(value)),(function (value__$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__48404 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),new cljs.core.Keyword(null,"entityId","entityId",-705864579).cljs$core$IFn$_invoke$arity$1(opts) === true);
if(cljs.core.boolean_QMARK_(new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48404,new cljs.core.Keyword(null,"reset-property-values","reset-property-values",-1471461256),new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__48404;
}
})()),(function (opts__$1){
return promesa.protocols._promise((cljs.core.truth_(block)?logseq.api.db_based.upsert_block_property(this$,block,key,value__$1,opts__$1):null));
}));
}));
}));
}));
}));
});
logseq.api.editor.remove_block_property = (function logseq$api$editor$remove_block_property(id,key){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
var key__$1 = logseq.api.block.get_db_ident_from_property_name(key,this$);
return frontend.handler.property.remove_block_property_BANG_(block_uuid,key__$1);
} else {
return null;
}
})());
}));
}));
});
logseq.api.editor.get_block_classes_properties_has_default_value = (function logseq$api$editor$get_block_classes_properties_has_default_value(block_id){
return frontend.db.async._LT_get_block_class_default_properties(frontend.state.get_current_repo(),block_id);
});
logseq.api.editor.get_all_block_properties = (function logseq$api$editor$get_all_block_properties(id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var own_properties = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor.get_block_classes_properties_has_default_value(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))),(function (classes_properties){
return promesa.protocols._promise((function (){var classes_properties__$1 = (function (){var or__5142__auto__ = classes_properties;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var properties = ((cljs.core.seq(classes_properties__$1))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([classes_properties__$1,own_properties], 0)):own_properties);
return properties;
})());
}));
}));
} else {
return null;
}
})());
}));
}));
});
logseq.api.editor.property_value__GT_js = (function logseq$api$editor$property_value__GT_js(value){
return logseq.sdk.utils.result__GT_js(((cljs.core.set_QMARK_(value))?cljs.core.vec(value):value));
});
logseq.api.editor.get_block_property = (function logseq$api$editor$get_block_property(id,key){
var this$ = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor.get_all_block_properties(id)),(function (properties){
return promesa.protocols._promise(((cljs.core.seq(properties))?(function (){var property_name = logseq.api.block.sanitize_user_property_name(key);
var ident = logseq.api.block.get_db_ident_from_property_name(key,this$);
var property_value = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,property_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property_name));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,ident);
}
}
})();
var property_value__$1 = (function (){var G__48430 = property_value;
if(cljs.core.map_QMARK_(property_value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__48430,new cljs.core.Keyword("block","value","block/value",417668604),(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865).cljs$core$IFn$_invoke$arity$1(property_value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property_value);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("db","ident","db/ident",-737096),ident], 0));
} else {
return G__48430;
}
})();
if(((cljs.core.map_QMARK_(property_value__$1)) || (cljs.core.set_QMARK_(property_value__$1)))){
return logseq.api.editor.property_value__GT_js(property_value__$1);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.block.parse_property_json_value_if_need(ident,property_value__$1)),(function (parsed_value){
return promesa.protocols._promise((function (){var or__5142__auto__ = parsed_value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.api.editor.property_value__GT_js(property_value__$1);
}
})());
}));
}));
}
})():null));
}));
}));
});
logseq.api.editor.get_block_properties = (function logseq$api$editor$get_block_properties(id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor.get_all_block_properties(id)),(function (properties){
return promesa.protocols._promise((function (){var temp__5825__auto__ = (function (){var G__48438 = properties;
if((G__48438 == null)){
return null;
} else {
return logseq.api.block.into_readable_db_properties(G__48438);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var properties__$1 = temp__5825__auto__;
return logseq.sdk.utils.result__GT_js(properties__$1);
} else {
return null;
}
})());
}));
}));
});
logseq.api.editor.get_page_properties = (function logseq$api$editor$get_page_properties(id_or_page_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(id_or_page_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return logseq.api.editor.get_block_properties(id);
} else {
return null;
}
})());
}));
}));
});
logseq.api.editor.open_pdf_viewer = (function logseq$api$editor$open_pdf_viewer(block_identity_or_file_url){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((((typeof block_identity_or_file_url === 'string') && (((logseq.common.path.protocol_url_QMARK_(block_identity_or_file_url)) || (logseq.common.path.absolute_QMARK_(block_identity_or_file_url))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,block_identity_or_file_url], null):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.editor._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(block_identity_or_file_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,(cljs.core.truth_(block)?(function (){var G__48478 = "../assets/%s.pdf";
var G__48479 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2(G__48478,G__48479) : frontend.util.format.call(null,G__48478,G__48479));
})():block_identity_or_file_url)], null));
}));
})))),(function (p__48482){
var vec__48484 = p__48482;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48484,(0),null);
var href = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48484,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1(href)),(function (href_SINGLEQUOTE_){
return promesa.protocols._promise((function (){var temp__5825__auto__ = frontend.extensions.pdf.assets.inflate_asset.cljs$core$IFn$_invoke$arity$variadic(href,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"href","href",-793805698),href_SINGLEQUOTE_], null)], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var current = temp__5825__auto__;
return frontend.state.set_current_pdf_BANG_(current);
} else {
return null;
}
})());
}));
}));
}));
});

//# sourceMappingURL=logseq.api.editor.js.map
