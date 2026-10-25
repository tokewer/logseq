goog.provide('logseq.db.frontend.block_title');
logseq.db.frontend.block_title.resolve_entity = (function logseq$db$frontend$block_title$resolve_entity(db,lookup_ref){
if(cljs.core.truth_(db)){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,lookup_ref) : datascript.core.entity.call(null,db,lookup_ref));
} else {
return null;
}
});
logseq.db.frontend.block_title.needs_resolved_block_QMARK_ = (function logseq$db$frontend$block_title$needs_resolved_block_QMARK_(block){
var or__5142__auto__ = (new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block) == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.db.frontend.entity_util.class_QMARK_(block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.some(cljs.core.number_QMARK_,new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block));
}
}
});
logseq.db.frontend.block_title.resolve_block = (function logseq$db$frontend$block_title$resolve_block(db,block){
if(datascript.impl.entity.entity_QMARK_(block)){
return block;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.db.frontend.block_title.needs_resolved_block_QMARK_(block);
if(cljs.core.truth_(and__5140__auto__)){
return typeof new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block) === 'number';
} else {
return and__5140__auto__;
}
})())){
var or__5142__auto__ = logseq.db.frontend.block_title.resolve_entity(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.db.frontend.block_title.needs_resolved_block_QMARK_(block);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.uuid_QMARK_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5140__auto__;
}
})())){
var or__5142__auto__ = logseq.db.frontend.block_title.resolve_entity(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
} else {
return block;

}
}
}
});
logseq.db.frontend.block_title.class_title_conflicts_QMARK_ = (function logseq$db$frontend$block_title$class_title_conflicts_QMARK_(db,class_entity){
var class_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(class_entity);
var class_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class_entity);
if(cljs.core.truth_((function (){var and__5140__auto__ = db;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = class_title;
if(cljs.core.truth_(and__5140__auto____$1)){
return class_id;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.boolean$((function (){var G__63669 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?other","?other",1919141623,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?class-title","?class-title",234033806,null),new cljs.core.Symbol(null,"?class-id","?class-id",-1653001743,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?other","?other",1919141623,null),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Symbol(null,"?class-title","?class-title",234033806,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?other","?other",1919141623,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?other","?other",1919141623,null),new cljs.core.Symbol(null,"?class-id","?class-id",-1653001743,null))], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?other","?other",1919141623,null),new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751)], null))], null);
var G__63670 = db;
var G__63671 = class_title;
var G__63672 = class_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__63669,G__63670,G__63671,G__63672) : datascript.core.q.call(null,G__63669,G__63670,G__63671,G__63672));
})());
} else {
return null;
}
});
logseq.db.frontend.block_title.class_title_with_extends = (function logseq$db$frontend$block_title$class_title_with_extends(class_entity,title){
var extends$ = (function (){var G__63673 = new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803).cljs$core$IFn$_invoke$arity$1(class_entity);
var G__63673__$1 = (((G__63673 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (extend){
var or__5142__auto__ = new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(extend);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(class_entity),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(extend));
}
}),G__63673));
if((G__63673__$1 == null)){
return null;
} else {
return cljs.core.vec(G__63673__$1);
}
})();
if(cljs.core.seq(extends$)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(extends$)))?new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(cljs.core.first(extends$)):clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),extends$)))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.namespace.parent_char)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title));
} else {
return title;
}
});
logseq.db.frontend.block_title.resolve_tag = (function logseq$db$frontend$block_title$resolve_tag(db,tag){
if(typeof tag === 'number'){
return logseq.db.frontend.block_title.resolve_entity(db,tag);
} else {
return tag;
}
});
/**
 * Return a display title that disambiguates duplicate class titles and appends
 *   user-visible tags.
 * 
 *   `title` may be supplied when a caller has already prepared a display title,
 *   such as a search snippet with highlight markers.
 */
logseq.db.frontend.block_title.block_unique_title = (function logseq$db$frontend$block_title$block_unique_title(db,block,p__63675){
var map__63676 = p__63675;
var map__63676__$1 = cljs.core.__destructure_map(map__63676);
var with_tags_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63676__$1,new cljs.core.Keyword(null,"with-tags?","with-tags?",551159510),true);
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63676__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var truncate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63676__$1,new cljs.core.Keyword(null,"truncate?","truncate?",135673334),true);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63676__$1,new cljs.core.Keyword(null,"title","title",636505583));
var block_e = logseq.db.frontend.block_title.resolve_block(db,block);
if(cljs.core.truth_(logseq.db.frontend.entity_util.built_in_QMARK_(block_e))){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_e);
} else {
var class_QMARK_ = logseq.db.frontend.entity_util.class_QMARK_(block_e);
var tags = (cljs.core.truth_((function (){var and__5140__auto__ = with_tags_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(class_QMARK_);
} else {
return and__5140__auto__;
}
})())?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (tag){
var or__5142__auto__ = (function (){var G__63677 = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block_e);
if((G__63677 == null)){
return null;
} else {
return logseq.db.frontend.db.inline_tag_QMARK_(G__63677,tag);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__63678 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag);
return (logseq.db.frontend.class$.private_tags.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.class$.private_tags.cljs$core$IFn$_invoke$arity$1(G__63678) : logseq.db.frontend.class$.private_tags.call(null,G__63678));
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63674_SHARP_){
return logseq.db.frontend.block_title.resolve_tag(db,p1__63674_SHARP_);
}),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block_e);
}
})())):null);
var base_title = (cljs.core.truth_(class_QMARK_)?(function (){var display_title = (function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_e);
}
})();
if(cljs.core.truth_(logseq.db.frontend.block_title.class_title_conflicts_QMARK_(db,block_e))){
return logseq.db.frontend.block_title.class_title_with_extends(block_e,display_title);
} else {
return display_title;
}
})():(function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_e);
}
})());
var trunc_title = (cljs.core.truth_((function (){var and__5140__auto__ = truncate_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = base_title;
if(cljs.core.truth_(and__5140__auto____$1)){
return (cljs.core.count(base_title) > (256));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base_title,(0),(256)):base_title);
var title__$1 = ((cljs.core.seq(tags))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = trunc_title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (tag){
var temp__5825__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag);
if(cljs.core.truth_(temp__5825__auto__)){
var title__$1 = temp__5825__auto__;
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title__$1));
} else {
return null;
}
}),tags)))):trunc_title);
if(cljs.core.truth_(title__$1)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(alias)?(""+" -> alias: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)):null)));
} else {
return null;
}
}
});

//# sourceMappingURL=logseq.db.frontend.block_title.js.map
