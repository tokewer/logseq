goog.provide('logseq.outliner.validate');
/**
 * Validates a page title doesn't include hashtag character
 */
logseq.outliner.validate.validate_page_title_no_hashtag = (function logseq$outliner$validate$validate_page_title_no_hashtag(page_title,meta_m){
if(clojure.string.includes_QMARK_(page_title,"#")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Page name can't include \"#\".",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Page name can't include \"#\".",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","name-no-hash","page.validation/name-no-hash",867711017),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null)], 0)));
} else {
return null;
}
});
/**
 * Validates characters that must not be in a page title
 */
logseq.outliner.validate.validate_page_title_characters = (function logseq$outliner$validate$validate_page_title_characters(page_title,meta_m){
logseq.outliner.validate.validate_page_title_no_hashtag(page_title,meta_m);

if(((clojure.string.includes_QMARK_(page_title,logseq.common.util.namespace.parent_char)) && (cljs.core.not(logseq.common.date.normalize_date(page_title,null))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Page name can't include \"/\".",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Page name can't include \"/\".",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","name-no-slash","page.validation/name-no-slash",1457712305),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null)], 0)));
} else {
return null;
}
});
logseq.outliner.validate.validate_page_title = (function logseq$outliner$validate$validate_page_title(page_title,meta_m){
if(clojure.string.blank_QMARK_(page_title)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Page name can't be blank",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Page name can't be blank.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","name-blank","page.validation/name-blank",-128176006),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null)], 0)));
} else {
return null;
}
});
/**
 * Properties and tags keep exact-title uniqueness. Ordinary pages match create
 * via :block/name (page-name-sanity-lc).
 */
logseq.outliner.validate.case_sensitive_title_QMARK_ = (function logseq$outliner$validate$case_sensitive_title_QMARK_(entity){
var or__5142__auto__ = (logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.property_QMARK_.call(null,entity));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.class_QMARK_.call(null,entity));
}
});
/**
 * Query that finds other ids given the id to ignore, title or lc name to look up, and tags to consider.
 * Properties and tags match by exact :block/title; ordinary pages match by :block/name
 * (page-name-sanity-lc, same as page creation). Entities with a parent are scoped to
 * that parent; top-level pages only match other top-level pages.
 */
logseq.outliner.validate.find_other_ids_with_title_and_tags = (function logseq$outliner$validate$find_other_ids_with_title_and_tags(entity){
var case_sensitive_QMARK_ = logseq.outliner.validate.case_sensitive_title_QMARK_(entity);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tag-id","?tag-id",-748587738,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Symbol(null,"?b","?b",1575118075,null),(cljs.core.truth_(case_sensitive_QMARK_)?new cljs.core.Keyword("block","title","block/title",710445684):new cljs.core.Keyword("block","name","block/name",1619760316)),new cljs.core.Symbol(null,"?title","?title",-835622503,null)],null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?tag-id","?tag-id",-748587738,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.property_QMARK_.call(null,entity)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160))], null)], null):(cljs.core.truth_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(entity))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"?bp","?bp",-568502339,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"?ep","?ep",-340206877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?bp","?bp",-568502339,null),new cljs.core.Symbol(null,"?ep","?ep",-340206877,null))], null)], null):((cljs.core.not(case_sensitive_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","parent","block/parent",-918309064))], null)], null):null)))], 0)));
});
logseq.outliner.validate.throw_duplicate = (function logseq$outliner$validate$throw_duplicate(title,payload){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(title,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null));
});
/**
 * Shared tag idents of the first colliding entity. An entity is exempt when it
 * shares the name under different tags e.g. Apple #Company and Apple #Fruit.
 */
logseq.outliner.validate.colliding_tag_ids = (function logseq$outliner$validate$colliding_tag_ids(db,entity,lookup,tags){
var this_tags = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),tags));
return cljs.core.some((function (another_id){
var another_tags = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,another_id) : datascript.core.entity.call(null,db,another_id)))));
var common_tags = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(this_tags,another_tags);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(common_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null], null), null))) && ((((cljs.core.count(this_tags) > (1))) && ((cljs.core.count(another_tags) > (1))))))){
return null;
} else {
return common_tags;
}
}),(function (){var G__59275 = logseq.outliner.validate.find_other_ids_with_title_and_tags(entity);
var G__59276 = db;
var G__59277 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var G__59278 = lookup;
var G__59279 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),tags);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__59275,G__59276,G__59277,G__59278,G__59279) : datascript.core.q.call(null,G__59275,G__59276,G__59277,G__59278,G__59279));
})());
});
logseq.outliner.validate.validate_unique_for_page = (function logseq$outliner$validate$validate_unique_for_page(db,new_title,p__59283){
var map__59284 = p__59283;
var map__59284__$1 = cljs.core.__destructure_map(map__59284);
var entity = map__59284__$1;
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59284__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340));
if(cljs.core.seq(tags)){
var lookup = (cljs.core.truth_(logseq.outliner.validate.case_sensitive_title_QMARK_(entity))?new_title:logseq.common.util.page_name_sanity_lc(new_title));
var common_tag_ids = logseq.outliner.validate.colliding_tag_ids(db,entity,lookup,tags);
if(cljs.core.truth_(common_tag_ids)){
if(cljs.core.truth_((logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.property_QMARK_.call(null,entity)))){
return logseq.outliner.validate.throw_duplicate("Duplicate property",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Another property named "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_title], 0)))+" already exists."),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.validation","duplicate","property.validation/duplicate",1348622314),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_title], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null));
} else {
if(cljs.core.truth_((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.class_QMARK_.call(null,entity)))){
return logseq.outliner.validate.throw_duplicate("Duplicate class",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Another tag named "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_title], 0)))+" already exists."),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("class.validation","duplicate","class.validation/duplicate",-1421284499),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_title], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(common_tag_ids,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null], null), null))){
return logseq.outliner.validate.throw_duplicate("Duplicate page",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Another page named "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_title], 0)))+" already exists."),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","duplicate-name","page.validation/duplicate-name",-1285808131),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_title], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null));
} else {
var common_tags_str = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id)))));
}),common_tag_ids));
return logseq.outliner.validate.throw_duplicate("Duplicate page",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Another page named "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_title], 0)))+" already exists for tags: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(common_tags_str)),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","duplicate","page.validation/duplicate",1504931064),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_title,common_tags_str], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null));

}
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Validates uniqueness of nodes for the following cases:
 * - Ordinary page names are unique by :block/name (case-insensitive) for the same parent or among top-level pages
 * - Page names are unique for a tag e.g. their can be Apple #Company and Apple #Fruit
 * - Property names are unique with user properties being allowed to have the same name as built-in ones
 * - Class names are unique regardless of their extends or if they're built-in
 */
logseq.outliner.validate.validate_unique_by_name_and_tags = (function logseq$outliner$validate$validate_unique_by_name_and_tags(db,new_title,entity){
if(cljs.core.truth_(logseq.db.frontend.entity_util.page_QMARK_(entity))){
return logseq.outliner.validate.validate_unique_for_page(db,new_title,entity);
} else {
return null;
}
});
/**
 * Validates a non-journal page renamed to journal format
 */
logseq.outliner.validate.validate_disallow_page_with_journal_name = (function logseq$outliner$validate$validate_disallow_page_with_journal_name(new_title,entity){
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.db.frontend.entity_util.page_QMARK_(entity);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(logseq.db.frontend.entity_util.journal_QMARK_(entity));
if(and__5140__auto____$1){
return logseq.common.date.normalize_date(new_title,null);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Page can't be renamed to a journal",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"This page can't be changed to a journal page",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("journal","page-cant-convert-warning","journal/page-cant-convert-warning",-1313116689),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null));
} else {
return null;
}
});
/**
 * Validates a block title when it has changed for a entity-util/page? or tagged node
 */
logseq.outliner.validate.validate_block_title = (function logseq$outliner$validate$validate_block_title(db,new_title,existing_block_entity){
logseq.outliner.validate.validate_unique_by_name_and_tags(db,new_title,existing_block_entity);

return logseq.outliner.validate.validate_disallow_page_with_journal_name(new_title,existing_block_entity);
});
/**
 * Validates a property's title when it has changed
 */
logseq.outliner.validate.validate_property_title = (function logseq$outliner$validate$validate_property_title(var_args){
var G__59298 = arguments.length;
switch (G__59298) {
case 1:
return logseq.outliner.validate.validate_property_title.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.outliner.validate.validate_property_title.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.validate.validate_property_title.cljs$core$IFn$_invoke$arity$1 = (function (new_title){
return logseq.outliner.validate.validate_property_title.cljs$core$IFn$_invoke$arity$2(new_title,cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.outliner.validate.validate_property_title.cljs$core$IFn$_invoke$arity$2 = (function (new_title,meta_m){
if(logseq.db.frontend.property.valid_property_name_QMARK_(new_title)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Property name is invalid",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"This is an invalid property name. A property name cannot start with page reference characters '#' or '[['.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.validation","invalid-name","property.validation/invalid-name",-1629565033),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null)], 0)));
}
}));

(logseq.outliner.validate.validate_property_title.cljs$lang$maxFixedArity = 2);

/**
 * Validates if built-in property entity is editable for the given attributes to be updated
 */
logseq.outliner.validate.validate_editing_built_in_property = (function logseq$outliner$validate$validate_editing_built_in_property(entity,attribute_map_to_update){
var allowed_attributes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","hide-empty-value","logseq.property/hide-empty-value",2062325899),null,new cljs.core.Keyword("logseq.property","description","logseq.property/description",-336236200),null], null), null);
var temp__5825__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attribute_map_to_update)),allowed_attributes));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var disallowed = temp__5825__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Given built-in property's attributes are not editable",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Can't change the given attributes for a built-in property",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword(null,"disallowed-attributes","disallowed-attributes",1636137108),disallowed], null)], 0)));
} else {
return null;
}
});
/**
 * Validates whether given parent and children are classes
 */
logseq.outliner.validate.validate_extends_property_have_correct_type = (function logseq$outliner$validate$validate_extends_property_have_correct_type(parent_ent,child_ents){
if(((cljs.core.not((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(parent_ent) : logseq.db.class_QMARK_.call(null,parent_ent)))) || ((!(cljs.core.every_QMARK_(logseq.db.class_QMARK_,child_ents)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't extend this page since either it is not a tag or is extending from a page that is not a tag",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Can't extend this page since either it is not a tag or is extending from a page that is not a tag",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("class.validation","invalid-extends-type","class.validation/invalid-extends-type",-491548775),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59308_SHARP_){
return cljs.core.select_keys(p1__59308_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","title","block/title",710445684)], null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.class_QMARK_,child_ents))], null));
} else {
return null;
}
});
logseq.outliner.validate.disallow_built_in_class_extends_change = (function logseq$outliner$validate$disallow_built_in_class_extends_change(_parent_ent,child_ents){
if(cljs.core.truth_(cljs.core.some((function (p1__59311_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.class$.built_in_classes,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__59311_SHARP_));
}),child_ents))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't change the extends of a built-in tag",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Can't change the extends of a built-in tag",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("class.validation","built-in-extends-change","class.validation/built-in-extends-change",207574422),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
return null;
}
});
logseq.outliner.validate.disallow_extends_cycle = (function logseq$outliner$validate$disallow_extends_cycle(db,parent_ent,child_ents){
var seq__59318 = cljs.core.seq(child_ents);
var chunk__59319 = null;
var count__59320 = (0);
var i__59321 = (0);
while(true){
if((i__59321 < count__59320)){
var child = chunk__59319.cljs$core$IIndexed$_nth$arity$2(null,i__59321);
var children_ids_59420 = cljs.core.set(cljs.core.cons(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),logseq.db.frontend.class$.get_structured_children(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child))));
if(cljs.core.contains_QMARK_(children_ids_59420,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent_ent))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Extends cycle",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),"Tag extends cycle",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("class.validation","extends-cycle","class.validation/extends-cycle",-362868629),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__59318,chunk__59319,count__59320,i__59321,children_ids_59420,child){
return (function (p1__59314_SHARP_){
return cljs.core.select_keys(p1__59314_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","title","block/title",710445684)], null));
});})(seq__59318,chunk__59319,count__59320,i__59321,children_ids_59420,child))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null))], null)], null));
} else {
}


var G__59422 = seq__59318;
var G__59423 = chunk__59319;
var G__59424 = count__59320;
var G__59425 = (i__59321 + (1));
seq__59318 = G__59422;
chunk__59319 = G__59423;
count__59320 = G__59424;
i__59321 = G__59425;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59318);
if(temp__5825__auto__){
var seq__59318__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59318__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__59318__$1);
var G__59426 = cljs.core.chunk_rest(seq__59318__$1);
var G__59427 = c__5673__auto__;
var G__59428 = cljs.core.count(c__5673__auto__);
var G__59429 = (0);
seq__59318 = G__59426;
chunk__59319 = G__59427;
count__59320 = G__59428;
i__59321 = G__59429;
continue;
} else {
var child = cljs.core.first(seq__59318__$1);
var children_ids_59430 = cljs.core.set(cljs.core.cons(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),logseq.db.frontend.class$.get_structured_children(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child))));
if(cljs.core.contains_QMARK_(children_ids_59430,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent_ent))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Extends cycle",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),"Tag extends cycle",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("class.validation","extends-cycle","class.validation/extends-cycle",-362868629),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__59318,chunk__59319,count__59320,i__59321,children_ids_59430,child,seq__59318__$1,temp__5825__auto__){
return (function (p1__59314_SHARP_){
return cljs.core.select_keys(p1__59314_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","title","block/title",710445684)], null));
});})(seq__59318,chunk__59319,count__59320,i__59321,children_ids_59430,child,seq__59318__$1,temp__5825__auto__))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null))], null)], null));
} else {
}


var G__59431 = cljs.core.next(seq__59318__$1);
var G__59432 = null;
var G__59433 = (0);
var G__59434 = (0);
seq__59318 = G__59431;
chunk__59319 = G__59432;
count__59320 = G__59433;
i__59321 = G__59434;
continue;
}
} else {
return null;
}
}
break;
}
});
logseq.outliner.validate.validate_extends_property = (function logseq$outliner$validate$validate_extends_property(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59435 = arguments.length;
var i__5877__auto___59436 = (0);
while(true){
if((i__5877__auto___59436 < len__5876__auto___59435)){
args__5882__auto__.push((arguments[i__5877__auto___59436]));

var G__59437 = (i__5877__auto___59436 + (1));
i__5877__auto___59436 = G__59437;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.outliner.validate.validate_extends_property.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.outliner.validate.validate_extends_property.cljs$core$IFn$_invoke$arity$variadic = (function (db,parent_ent_STAR_,child_ents,p__59332){
var map__59333 = p__59332;
var map__59333__$1 = cljs.core.__destructure_map(map__59333);
var built_in_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59333__$1,new cljs.core.Keyword(null,"built-in?","built-in?",2078421512),true);
var parent_ent = ((cljs.core.integer_QMARK_(parent_ent_STAR_))?(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,parent_ent_STAR_) : datascript.core.entity.call(null,db,parent_ent_STAR_)):parent_ent_STAR_);
if(cljs.core.truth_(built_in_QMARK_)){
logseq.outliner.validate.disallow_built_in_class_extends_change(parent_ent,child_ents);
} else {
}

logseq.outliner.validate.disallow_extends_cycle(db,parent_ent,child_ents);

return logseq.outliner.validate.validate_extends_property_have_correct_type(parent_ent,child_ents);
}));

(logseq.outliner.validate.validate_extends_property.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.outliner.validate.validate_extends_property.cljs$lang$applyTo = (function (seq59328){
var G__59329 = cljs.core.first(seq59328);
var seq59328__$1 = cljs.core.next(seq59328);
var G__59330 = cljs.core.first(seq59328__$1);
var seq59328__$2 = cljs.core.next(seq59328__$1);
var G__59331 = cljs.core.first(seq59328__$2);
var seq59328__$3 = cljs.core.next(seq59328__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59329,G__59330,G__59331,seq59328__$3);
}));

logseq.outliner.validate.disallow_node_cant_tag_with_built_in_non_tags = (function logseq$outliner$validate$disallow_node_cant_tag_with_built_in_non_tags(db,_block_eids,v){
var tag_ent = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.core.entity.call(null,db,v));
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(tag_ent);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(tag_ent) : logseq.db.class_QMARK_.call(null,tag_ent)));
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Can't set tag with built-in page that isn't a tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag_ent)], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Can't set tag with built-in page that isn't a tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag_ent)], 0)))),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("class.validation","tag-with-non-tag","class.validation/tag-with-non-tag",1483382419),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag_ent)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.Keyword(null,"property-value","property-value",1516163307),v], null));
} else {
return null;
}
});
logseq.outliner.validate.disallow_node_cant_tag_with_private_tags = (function logseq$outliner$validate$disallow_node_cant_tag_with_private_tags(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59438 = arguments.length;
var i__5877__auto___59439 = (0);
while(true){
if((i__5877__auto___59439 < len__5876__auto___59438)){
args__5882__auto__.push((arguments[i__5877__auto___59439]));

var G__59440 = (i__5877__auto___59439 + (1));
i__5877__auto___59439 = G__59440;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.outliner.validate.disallow_node_cant_tag_with_private_tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.outliner.validate.disallow_node_cant_tag_with_private_tags.cljs$core$IFn$_invoke$arity$variadic = (function (db,block_eids,v,p__59351){
var map__59352 = p__59351;
var map__59352__$1 = cljs.core.__destructure_map(map__59352);
var delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59352__$1,new cljs.core.Keyword(null,"delete?","delete?",789956376));
if(((cljs.core.contains_QMARK_(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(logseq.db.private_tags,new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.core.entity.call(null,db,v))))) && ((!(((cljs.core.every_QMARK_((function (id){
var G__59353 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
return (logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1(G__59353) : logseq.db.asset_QMARK_.call(null,G__59353));
}),block_eids)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.core.entity.call(null,db,v))))))))))){
var tag_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.core.entity.call(null,db,v)));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(delete_QMARK_)?"Can't remove tag":"Can't set tag"))+" with built-in #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_title)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(delete_QMARK_)?"Can't remove tag":"Can't set tag"))+" with built-in #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_title)),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),(cljs.core.truth_(delete_QMARK_)?new cljs.core.Keyword("class.validation","cant-remove-tag-built-in","class.validation/cant-remove-tag-built-in",693840116):new cljs.core.Keyword("class.validation","cant-set-tag-built-in","class.validation/cant-set-tag-built-in",1423720252)),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_title], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.Keyword(null,"property-id","property-id",404996975),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword(null,"property-value","property-value",1516163307),v], null));
} else {
return null;
}
}));

(logseq.outliner.validate.disallow_node_cant_tag_with_private_tags.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.outliner.validate.disallow_node_cant_tag_with_private_tags.cljs$lang$applyTo = (function (seq59334){
var G__59335 = cljs.core.first(seq59334);
var seq59334__$1 = cljs.core.next(seq59334);
var G__59336 = cljs.core.first(seq59334__$1);
var seq59334__$2 = cljs.core.next(seq59334__$1);
var G__59337 = cljs.core.first(seq59334__$2);
var seq59334__$3 = cljs.core.next(seq59334__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59335,G__59336,G__59337,seq59334__$3);
}));

/**
 * Returns true when the entity is a built-in. Ideally checking
 *   :logseq.property/built-in? would be enough but not all built-in nodes have
 *   that property. Covers:
 *   - entities marked with :logseq.property/built-in?  (built-in pages, classes, properties)
 *   - file entities  (logseq/config.edn, custom.css, etc.)
 *   - entities whose :db/ident belongs to an internal namespace  (KV entries, empty-placeholder)
 */
logseq.outliner.validate.built_in_entity_QMARK_ = (function logseq$outliner$validate$built_in_entity_QMARK_(ent){
var or__5142__auto__ = new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(ent);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(ent);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var G__59355 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ent);
if((G__59355 == null)){
return null;
} else {
return logseq.db.frontend.malli_schema.internal_ident_QMARK_(G__59355);
}
}
}
});
logseq.outliner.validate.disallow_tagging_a_built_in_entity = (function logseq$outliner$validate$disallow_tagging_a_built_in_entity(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59441 = arguments.length;
var i__5877__auto___59442 = (0);
while(true){
if((i__5877__auto___59442 < len__5876__auto___59441)){
args__5882__auto__.push((arguments[i__5877__auto___59442]));

var G__59443 = (i__5877__auto___59442 + (1));
i__5877__auto___59442 = G__59443;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.outliner.validate.disallow_tagging_a_built_in_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.outliner.validate.disallow_tagging_a_built_in_entity.cljs$core$IFn$_invoke$arity$variadic = (function (db,block_eids,p__59361){
var map__59372 = p__59361;
var map__59372__$1 = cljs.core.__destructure_map(map__59372);
var delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59372__$1,new cljs.core.Keyword(null,"delete?","delete?",789956376));
var temp__5825__auto__ = cljs.core.some((function (p1__59356_SHARP_){
if(cljs.core.truth_(logseq.outliner.validate.built_in_entity_QMARK_(p1__59356_SHARP_))){
return p1__59356_SHARP_;
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59357_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59357_SHARP_) : datascript.core.entity.call(null,db,p1__59357_SHARP_));
}),block_eids));
if(cljs.core.truth_(temp__5825__auto__)){
var built_in_ent = temp__5825__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(delete_QMARK_)?"Can't remove tag":"Can't add tag"))+" on built-in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(built_in_ent)], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(delete_QMARK_)?"Can't remove tag":"Can't add tag"))+" on built-in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(built_in_ent)], 0)))),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),(cljs.core.truth_(delete_QMARK_)?new cljs.core.Keyword("class.validation","cant-remove-tag-on-built-in","class.validation/cant-remove-tag-on-built-in",-106883341):new cljs.core.Keyword("class.validation","cant-add-tag-on-built-in","class.validation/cant-add-tag-on-built-in",-438039388)),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(built_in_ent)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
return null;
}
}));

(logseq.outliner.validate.disallow_tagging_a_built_in_entity.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.outliner.validate.disallow_tagging_a_built_in_entity.cljs$lang$applyTo = (function (seq59358){
var G__59359 = cljs.core.first(seq59358);
var seq59358__$1 = cljs.core.next(seq59358);
var G__59360 = cljs.core.first(seq59358__$1);
var seq59358__$2 = cljs.core.next(seq59358__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59359,G__59360,seq59358__$2);
}));

/**
 * Disallow page->block when
 *   1. this page doesn't have :block/parent
 *   2. its parent is Library
 *   3. it has page child
 */
logseq.outliner.validate.disallow_removing_page_tag = (function logseq$outliner$validate$disallow_removing_page_tag(db,eids,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.core.entity.call(null,db,v))),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329))){
var library_page = logseq.db.get_library_page(db);
var seq__59374 = cljs.core.seq(eids);
var chunk__59375 = null;
var count__59376 = (0);
var i__59377 = (0);
while(true){
if((i__59377 < count__59376)){
var eid = chunk__59375.cljs$core$IIndexed$_nth$arity$2(null,i__59377);
var entity_59444 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
if(cljs.core.truth_((logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1(entity_59444) : logseq.db.internal_page_QMARK_.call(null,entity_59444)))){
if(cljs.core.not(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(entity_59444))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This page cannot be converted to a block",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59444)], 0)))+" cannot be converted to a block"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.convert","cant-be-block","page.convert/cant-be-block",638689794),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59444)], null),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,entity_59444),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(library_page),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(entity_59444)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This page cannot be converted to a block",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59444)], 0)))+" cannot be converted to a block, please move it to another page first"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.convert","cant-be-block-move-first","page.convert/cant-be-block-move-first",1114919904),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59444)], null),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,entity_59444),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null));
} else {
if(cljs.core.truth_(cljs.core.some(logseq.db.frontend.entity_util.page_QMARK_,new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(entity_59444)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This page cannot be converted to a block",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59444)], 0)))+" cannot be converted to a block because it has page children"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.convert","cant-be-block-has-children","page.convert/cant-be-block-has-children",1682656165),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59444)], null),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,entity_59444),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null));
} else {
}
}
}
} else {
}


var G__59445 = seq__59374;
var G__59446 = chunk__59375;
var G__59447 = count__59376;
var G__59448 = (i__59377 + (1));
seq__59374 = G__59445;
chunk__59375 = G__59446;
count__59376 = G__59447;
i__59377 = G__59448;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59374);
if(temp__5825__auto__){
var seq__59374__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59374__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__59374__$1);
var G__59449 = cljs.core.chunk_rest(seq__59374__$1);
var G__59450 = c__5673__auto__;
var G__59451 = cljs.core.count(c__5673__auto__);
var G__59452 = (0);
seq__59374 = G__59449;
chunk__59375 = G__59450;
count__59376 = G__59451;
i__59377 = G__59452;
continue;
} else {
var eid = cljs.core.first(seq__59374__$1);
var entity_59453 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
if(cljs.core.truth_((logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1(entity_59453) : logseq.db.internal_page_QMARK_.call(null,entity_59453)))){
if(cljs.core.not(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(entity_59453))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This page cannot be converted to a block",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59453)], 0)))+" cannot be converted to a block"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.convert","cant-be-block","page.convert/cant-be-block",638689794),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59453)], null),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,entity_59453),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(library_page),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(entity_59453)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This page cannot be converted to a block",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59453)], 0)))+" cannot be converted to a block, please move it to another page first"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.convert","cant-be-block-move-first","page.convert/cant-be-block-move-first",1114919904),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59453)], null),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,entity_59453),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null));
} else {
if(cljs.core.truth_(cljs.core.some(logseq.db.frontend.entity_util.page_QMARK_,new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(entity_59453)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This page cannot be converted to a block",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59453)], 0)))+" cannot be converted to a block because it has page children"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.convert","cant-be-block-has-children","page.convert/cant-be-block-has-children",1682656165),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity_59453)], null),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,entity_59453),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null));
} else {
}
}
}
} else {
}


var G__59454 = cljs.core.next(seq__59374__$1);
var G__59455 = null;
var G__59456 = (0);
var G__59457 = (0);
seq__59374 = G__59454;
chunk__59375 = G__59455;
count__59376 = G__59456;
i__59377 = G__59457;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Validates block can convert to page by adding #Page for allowed scenarios
 */
logseq.outliner.validate.validate_block_can_tag_with_page_tag = (function logseq$outliner$validate$validate_block_can_tag_with_page_tag(db,eids,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.core.entity.call(null,db,v))),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329))){
var seq__59381 = cljs.core.seq(eids);
var chunk__59382 = null;
var count__59383 = (0);
var i__59384 = (0);
while(true){
if((i__59384 < count__59383)){
var eid = chunk__59382.cljs$core$IIndexed$_nth$arity$2(null,i__59384);
var block_59458 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
if(cljs.core.truth_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block_59458))){
logseq.outliner.validate.validate_page_title(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_59458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),block_59458], null));

logseq.outliner.validate.validate_page_title_characters(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_59458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),block_59458], null));

if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(logseq.db.frontend.entity_util.page_QMARK_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block_59458)));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block_59458);
}
})())){
var message_59459 = (cljs.core.truth_(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block_59458))?"Can't convert property value to page.":"Can't convert this block to page since its parent is not a page.");
var i18n_key_59460 = (cljs.core.truth_(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block_59458))?new cljs.core.Keyword("page.convert","property-value-to-page","page.convert/property-value-to-page",-334182177):new cljs.core.Keyword("page.convert","block-parent-not-page","page.convert/block-parent-not-page",652119879));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message_59459,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),message_59459,new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),i18n_key_59460,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"block","block",664686210),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,block_59458)], null)], null));
} else {
}
} else {
}


var G__59461 = seq__59381;
var G__59462 = chunk__59382;
var G__59463 = count__59383;
var G__59464 = (i__59384 + (1));
seq__59381 = G__59461;
chunk__59382 = G__59462;
count__59383 = G__59463;
i__59384 = G__59464;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59381);
if(temp__5825__auto__){
var seq__59381__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59381__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__59381__$1);
var G__59465 = cljs.core.chunk_rest(seq__59381__$1);
var G__59466 = c__5673__auto__;
var G__59467 = cljs.core.count(c__5673__auto__);
var G__59468 = (0);
seq__59381 = G__59465;
chunk__59382 = G__59466;
count__59383 = G__59467;
i__59384 = G__59468;
continue;
} else {
var eid = cljs.core.first(seq__59381__$1);
var block_59469 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
if(cljs.core.truth_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block_59469))){
logseq.outliner.validate.validate_page_title(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_59469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),block_59469], null));

logseq.outliner.validate.validate_page_title_characters(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_59469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),block_59469], null));

if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(logseq.db.frontend.entity_util.page_QMARK_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block_59469)));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block_59469);
}
})())){
var message_59470 = (cljs.core.truth_(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block_59469))?"Can't convert property value to page.":"Can't convert this block to page since its parent is not a page.");
var i18n_key_59471 = (cljs.core.truth_(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block_59469))?new cljs.core.Keyword("page.convert","property-value-to-page","page.convert/property-value-to-page",-334182177):new cljs.core.Keyword("page.convert","block-parent-not-page","page.convert/block-parent-not-page",652119879));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message_59470,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),message_59470,new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),i18n_key_59471,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"block","block",664686210),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,block_59469)], null)], null));
} else {
}
} else {
}


var G__59474 = cljs.core.next(seq__59381__$1);
var G__59475 = null;
var G__59476 = (0);
var G__59477 = (0);
seq__59381 = G__59474;
chunk__59382 = G__59475;
count__59383 = G__59476;
i__59384 = G__59477;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Validates adding a property value to :block/tags for given blocks
 */
logseq.outliner.validate.validate_tags_property = (function logseq$outliner$validate$validate_tags_property(db,block_eids,v){
logseq.outliner.validate.disallow_tagging_a_built_in_entity(db,block_eids);

logseq.outliner.validate.disallow_node_cant_tag_with_private_tags(db,block_eids,v);

logseq.outliner.validate.validate_block_can_tag_with_page_tag(db,block_eids,v);

return logseq.outliner.validate.disallow_node_cant_tag_with_built_in_non_tags(db,block_eids,v);
});
/**
 * Validates deleting a property value from :block/tags for given blocks
 */
logseq.outliner.validate.validate_tags_property_deletion = (function logseq$outliner$validate$validate_tags_property_deletion(db,block_eids,v){
logseq.outliner.validate.disallow_tagging_a_built_in_entity.cljs$core$IFn$_invoke$arity$variadic(db,block_eids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete?","delete?",789956376),true], null)], 0));

logseq.outliner.validate.disallow_node_cant_tag_with_private_tags.cljs$core$IFn$_invoke$arity$variadic(db,block_eids,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete?","delete?",789956376),true], null)], 0));

return logseq.outliner.validate.disallow_removing_page_tag(db,block_eids,v);
});
/**
 * Namespaced pages (pages with a parent, including Library-parented
 * namespace roots) cannot become properties. Retracting #Page would
 * otherwise be treated as page->block and drop :block/name.
 */
logseq.outliner.validate.validate_page_to_property_conversion = (function logseq$outliner$validate$validate_page_to_property_conversion(page){
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.db.frontend.entity_util.internal_page_QMARK_(page);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(page);
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Namespaced pages can't be properties",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Namespaced pages can't be properties",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.convert","page-to-property-namespaced","page.convert/page-to-property-namespaced",2070677392),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
return null;
}
});
/**
 * Disallow editing private :built-in nodes. This explicit validation is needed for contexts
 * like CLI and API which allow users to edit any built-in entity whereas the app guards this
 * by not allowing users to navigate to private built-in nodes
 */
logseq.outliner.validate.disallow_editing_private_built_in_nodes = (function logseq$outliner$validate$disallow_editing_private_built_in_nodes(entities){
var seq__59391 = cljs.core.seq(entities);
var chunk__59392 = null;
var count__59393 = (0);
var i__59394 = (0);
while(true){
if((i__59394 < count__59393)){
var entity = chunk__59392.cljs$core$IIndexed$_nth$arity$2(null,i__59394);
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.outliner.validate.built_in_entity_QMARK_(entity);
if(cljs.core.truth_(and__5140__auto__)){
return (logseq.db.private_built_in_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_built_in_page_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.private_built_in_page_QMARK_.call(null,entity));
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Built-in private nodes can't be modified",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Built-in private nodes can't be modified",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
}


var G__59479 = seq__59391;
var G__59480 = chunk__59392;
var G__59481 = count__59393;
var G__59482 = (i__59394 + (1));
seq__59391 = G__59479;
chunk__59392 = G__59480;
count__59393 = G__59481;
i__59394 = G__59482;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59391);
if(temp__5825__auto__){
var seq__59391__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59391__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__59391__$1);
var G__59483 = cljs.core.chunk_rest(seq__59391__$1);
var G__59484 = c__5673__auto__;
var G__59485 = cljs.core.count(c__5673__auto__);
var G__59486 = (0);
seq__59391 = G__59483;
chunk__59392 = G__59484;
count__59393 = G__59485;
i__59394 = G__59486;
continue;
} else {
var entity = cljs.core.first(seq__59391__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.outliner.validate.built_in_entity_QMARK_(entity);
if(cljs.core.truth_(and__5140__auto__)){
return (logseq.db.private_built_in_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_built_in_page_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.private_built_in_page_QMARK_.call(null,entity));
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Built-in private nodes can't be modified",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Built-in private nodes can't be modified",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
}


var G__59487 = cljs.core.next(seq__59391__$1);
var G__59488 = null;
var G__59489 = (0);
var G__59490 = (0);
seq__59391 = G__59487;
chunk__59392 = G__59488;
count__59393 = G__59489;
i__59394 = G__59490;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=logseq.outliner.validate.js.map
