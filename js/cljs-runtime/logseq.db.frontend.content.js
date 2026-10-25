goog.provide('logseq.db.frontend.content');
logseq.db.frontend.content.id_ref_pattern = cljs.core.re_pattern((""+"\\[\\["+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.uuid_pattern)+")"+"\\]\\]"));
logseq.db.frontend.content.id_or_tag_ref_pattern = cljs.core.re_pattern((""+"(#?)"+"\\[\\["+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.uuid_pattern)+")"+"\\]\\]"));
/**
 * Convert id ref backs to page name using refs.
 */
logseq.db.frontend.content.content_id_ref__GT_page = (function logseq$db$frontend$content$content_id_ref__GT_page(content,refs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,ref){
if(cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref))){
return clojure.string.replace(content__$1,logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref)),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref));
} else {
return content__$1;
}
}),content,refs);
});
/**
 * Nested pages first
 */
logseq.db.frontend.content.sort_refs = (function logseq$db$frontend$content$sort_refs(refs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (ref){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.map_QMARK_(ref);
if(and__5140__auto__){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var title = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean$(cljs.core.re_find(logseq.common.util.page_ref.page_ref_without_nested_re,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref))),title], null);
} else {
return null;
}
}),cljs.core._GT_,refs);
});
/**
 * Convert id ref backs to page name refs using refs.
 */
logseq.db.frontend.content.id_ref__GT_title_ref = (function logseq$db$frontend$content$id_ref__GT_title_ref(var_args){
var args__5882__auto__ = [];
var len__5876__auto___41660 = arguments.length;
var i__5877__auto___41661 = (0);
while(true){
if((i__5877__auto___41661 < len__5876__auto___41660)){
args__5882__auto__.push((arguments[i__5877__auto___41661]));

var G__41662 = (i__5877__auto___41661 + (1));
i__5877__auto___41661 = G__41662;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.db.frontend.content.id_ref__GT_title_ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.db.frontend.content.id_ref__GT_title_ref.cljs$core$IFn$_invoke$arity$variadic = (function (content_STAR_,refs_STAR_,p__41591){
var map__41595 = p__41591;
var map__41595__$1 = cljs.core.__destructure_map(map__41595);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41595__$1,new cljs.core.Keyword(null,"db","db",993250759));
var replace_block_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41595__$1,new cljs.core.Keyword(null,"replace-block-id?","replace-block-id?",296788113),false);
var replace_pages_with_same_name_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41595__$1,new cljs.core.Keyword(null,"replace-pages-with-same-name?","replace-pages-with-same-name?",-679714117),true);
if(typeof content_STAR_ === 'string'){
var refs = (cljs.core.truth_(replace_block_id_QMARK_)?refs_STAR_:(function (){var G__41596 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.entity_util.page_QMARK_,refs_STAR_);
if(cljs.core.truth_((function (){var and__5140__auto__ = db;
if(cljs.core.truth_(and__5140__auto__)){
return replace_pages_with_same_name_QMARK_ === false;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return (cljs.core.count(logseq.db.frontend.entity_util.get_pages_by_name(db,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(e))) > (1));
}),G__41596);
} else {
return G__41596;
}
})());
var content = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_STAR_));
if(cljs.core.truth_(cljs.core.re_find(logseq.db.frontend.content.id_ref_pattern,content))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,ref){
if(cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref))){
var content_SINGLEQUOTE_ = (((!(clojure.string.includes_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref)," "))))?clojure.string.replace(content__$1,(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref)))),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref)))):content__$1);
return clojure.string.replace(content_SINGLEQUOTE_,logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref)),logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref)));
} else {
return content__$1;
}
}),content,logseq.db.frontend.content.sort_refs(refs));
} else {
return content;
}
} else {
return null;
}
}));

(logseq.db.frontend.content.id_ref__GT_title_ref.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.db.frontend.content.id_ref__GT_title_ref.cljs$lang$applyTo = (function (seq41587){
var G__41588 = cljs.core.first(seq41587);
var seq41587__$1 = cljs.core.next(seq41587);
var G__41589 = cljs.core.first(seq41587__$1);
var seq41587__$2 = cljs.core.next(seq41587__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41588,G__41589,seq41587__$2);
}));

logseq.db.frontend.content.get_matched_ids = (function logseq$db$frontend$content$get_matched_ids(content){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.uuid,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.re_seq(logseq.db.frontend.content.id_ref_pattern,content))));
});
logseq.db.frontend.content.title_has_id_ref_QMARK_ = (function logseq$db$frontend$content$title_has_id_ref_QMARK_(title){
return cljs.core.boolean$((function (){var G__41599 = title;
if((G__41599 == null)){
return null;
} else {
return cljs.core.re_find(logseq.db.frontend.content.id_ref_pattern,G__41599);
}
})());
});
logseq.db.frontend.content.replace_tag_ref = (function logseq$db$frontend$content$replace_tag_ref(content,page_name,id){
var page = ((clojure.string.includes_QMARK_(page_name," "))?logseq.common.util.page_ref.__GT_page_ref(page_name):page_name);
var wrapped_id = logseq.common.util.page_ref.__GT_page_ref(id);
var page_name__$1 = logseq.common.util.format.cljs$core$IFn$_invoke$arity$variadic("#%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page], 0));
var r = logseq.common.util.format.cljs$core$IFn$_invoke$arity$variadic("#%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([wrapped_id], 0));
return clojure.string.replace(content,cljs.core.re_pattern((""+"(?i)(^|\\s|\\()("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.escape_regex_chars(page_name__$1))+")(?=[,\\.\\)]*($|\\s|\\)))")),(function (p__41606){
var vec__41608 = p__41606;
var _match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41608,(0),null);
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41608,(1),null);
var _grp2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41608,(2),null);
var _grp3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41608,(3),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lhs)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));
}));
});
logseq.db.frontend.content.replace_page_ref = (function logseq$db$frontend$content$replace_page_ref(content,page_name,id){
var vec__41612 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.common.util.page_ref.__GT_page_ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name,id], null));
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41612,(0),null);
var wrapped_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41612,(1),null);
return clojure.string.replace(content,cljs.core.re_pattern((""+"(?i)"+"(^|[^#])"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.escape_regex_chars(page)))),(""+"$1"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(wrapped_id)));
});
logseq.db.frontend.content.replace_page_ref_with_id = (function logseq$db$frontend$content$replace_page_ref_with_id(content,page_name,id,replace_tag_QMARK_){
var page_name__$1 = clojure.string.replace((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)),"HashTag-","#");
var id__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
var content_SINGLEQUOTE_ = logseq.db.frontend.content.replace_page_ref(content,page_name__$1,id__$1);
if(cljs.core.truth_(replace_tag_QMARK_)){
return logseq.db.frontend.content.replace_tag_ref(content_SINGLEQUOTE_,page_name__$1,id__$1);
} else {
return content_SINGLEQUOTE_;
}
});
logseq.db.frontend.content.ref_replacement_title = (function logseq$db$frontend$content$ref_replacement_title(p__41615){
var map__41616 = p__41615;
var map__41616__$1 = cljs.core.__destructure_map(map__41616);
var original_page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41616__$1,new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41616__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var or__5142__auto__ = ((((typeof original_page_name === 'string') && ((!(logseq.common.util.uuid_string_QMARK_(original_page_name))))))?original_page_name:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return title;
}
});
/**
 * Convert ref to id refs e.g. `[[page name]] -> [[uuid]].
 */
logseq.db.frontend.content.title_ref__GT_id_ref = (function logseq$db$frontend$content$title_ref__GT_id_ref(var_args){
var args__5882__auto__ = [];
var len__5876__auto___41677 = arguments.length;
var i__5877__auto___41678 = (0);
while(true){
if((i__5877__auto___41678 < len__5876__auto___41677)){
args__5882__auto__.push((arguments[i__5877__auto___41678]));

var G__41685 = (i__5877__auto___41678 + (1));
i__5877__auto___41678 = G__41685;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.db.frontend.content.title_ref__GT_id_ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.db.frontend.content.title_ref__GT_id_ref.cljs$core$IFn$_invoke$arity$variadic = (function (title,refs,p__41621){
var map__41622 = p__41621;
var map__41622__$1 = cljs.core.__destructure_map(map__41622);
var replace_tag_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41622__$1,new cljs.core.Keyword(null,"replace-tag?","replace-tag?",-1653793949),true);
if(typeof title === 'string'){
} else {
throw (new Error("Assert failed: (string? title)"));
}

var refs_SINGLEQUOTE_ = logseq.db.frontend.content.sort_refs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
if(((cljs.core.vector_QMARK_(ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ref))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.second(ref),new cljs.core.Keyword("block","title","block/title",710445684),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ref)))], null);
} else {
return ref;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(ref);
if(and__5140__auto__){
var G__41623 = new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508).cljs$core$IFn$_invoke$arity$1(ref);
if((G__41623 == null)){
return null;
} else {
return logseq.common.util.uuid_string_QMARK_(G__41623);
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508));
} else {
return ref;
}
}),refs)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content,p__41624){
var map__41625 = p__41624;
var map__41625__$1 = cljs.core.__destructure_map(map__41625);
var ref = map__41625__$1;
var uuid_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41625__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
return logseq.db.frontend.content.replace_page_ref_with_id(content,logseq.db.frontend.content.ref_replacement_title(ref),uuid_SINGLEQUOTE_,replace_tag_QMARK_);
}),title,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41617_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__41617_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__41617_SHARP_);
} else {
return and__5140__auto__;
}
}),refs_SINGLEQUOTE_));
}));

(logseq.db.frontend.content.title_ref__GT_id_ref.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.db.frontend.content.title_ref__GT_id_ref.cljs$lang$applyTo = (function (seq41618){
var G__41619 = cljs.core.first(seq41618);
var seq41618__$1 = cljs.core.next(seq41618);
var G__41620 = cljs.core.first(seq41618__$1);
var seq41618__$2 = cljs.core.next(seq41618__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41619,G__41620,seq41618__$2);
}));

/**
 * Replace `[[internal-id]]` with `[[page name]]`
 */
logseq.db.frontend.content.update_block_content = (function logseq$db$frontend$content$update_block_content(db,item,eid){
var temp__5823__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5823__auto__)){
var content = temp__5823__auto__;
var refs = new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword("block","title","block/title",710445684),logseq.db.frontend.content.id_ref__GT_title_ref(content,refs));
} else {
return item;
}
});
/**
 * Replace tag names in content with page-ref ids e.g. #TAG -> [[UUID]].
 * Ignore case because tags in content can have any case and still have a valid ref
 */
logseq.db.frontend.content.replace_tags_with_id_refs = (function logseq$db$frontend$content$replace_tags_with_id_refs(content,tags){
return clojure.string.trim(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,tag){
var id_ref = logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tag));
return logseq.common.util.replace_ignore_case(logseq.common.util.replace_ignore_case(content__$1,(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag)))),id_ref),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag))),id_ref);
}),content,logseq.db.frontend.content.sort_refs(tags)));
});
/**
 * Replace tag refs in content with page refs e.g. #[[UUID]] -> [[UUID]]
 */
logseq.db.frontend.content.replace_tag_refs_with_page_refs = (function logseq$db$frontend$content$replace_tag_refs_with_page_refs(content,tags){
return clojure.string.trim(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,tag){
var id_ref = logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tag));
return logseq.common.util.replace_ignore_case(logseq.common.util.replace_ignore_case(content__$1,(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_ref)),id_ref),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_ref)),id_ref);
}),content,logseq.db.frontend.content.sort_refs(tags)));
});
logseq.db.frontend.content.title_ref_replacement = (function logseq$db$frontend$content$title_ref_replacement(id__GT_title,matched,hash_prefix,id){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_title,id);
if(cljs.core.truth_(temp__5823__auto__)){
var ref_title = temp__5823__auto__;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",hash_prefix)) && ((!(clojure.string.includes_QMARK_(ref_title," ")))))){
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_title));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.__GT_page_ref(ref_title)));
}
} else {
return matched;
}
});
logseq.db.frontend.content.replace_title_refs_once = (function logseq$db$frontend$content$replace_title_refs_once(content,id__GT_title){
return clojure.string.replace(content,logseq.db.frontend.content.id_or_tag_ref_pattern,(function (p1__41627_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.db.frontend.content.title_ref_replacement,id__GT_title,p1__41627_SHARP_);
}));
});
logseq.db.frontend.content.ref__GT_title_entry = (function logseq$db$frontend$content$ref__GT_title_entry(replace_block_refs_QMARK_,p__41628){
var map__41629 = p__41628;
var map__41629__$1 = cljs.core.__destructure_map(map__41629);
var ref = map__41629__$1;
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41629__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41629__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.truth_((function (){var and__5140__auto__ = block_uuid;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = typeof title === 'string';
if(and__5140__auto____$1){
var or__5142__auto__ = replace_block_refs_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.entity_util.page_QMARK_(ref);
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid)),title], null);
} else {
return null;
}
});
/**
 * Id refs are self-contained in the title, so their targets can be resolved
 * directly without relying on :block/refs being up to date.
 */
logseq.db.frontend.content.title_ref_entities = (function logseq$db$frontend$content$title_ref_entities(ent){
if(datascript.impl.entity.entity_QMARK_(ent)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__41630_SHARP_){
var G__41634 = ent.db;
var G__41635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__41630_SHARP_], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__41634,G__41635) : datascript.core.entity.call(null,G__41634,G__41635));
}),logseq.db.frontend.content.get_matched_ids(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ent)));
} else {
return null;
}
});
logseq.db.frontend.content.block_ref_id__GT_title = (function logseq$db$frontend$content$block_ref_id__GT_title(ent,max_depth,replace_block_refs_QMARK_){
var frontier = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(ent)),logseq.db.frontend.content.title_ref_entities(ent));
var seen_ids = cljs.core.PersistentHashSet.EMPTY;
var id__GT_title = cljs.core.PersistentArrayMap.EMPTY;
var depth = (0);
while(true){
if((((depth >= max_depth)) || (cljs.core.empty_QMARK_(frontier)))){
return id__GT_title;
} else {
var ref_entity_QMARK_ = ((function (frontier,seen_ids,id__GT_title,depth){
return (function (ref){
return ((cljs.core.map_QMARK_(ref)) || (datascript.impl.entity.entity_QMARK_(ref)));
});})(frontier,seen_ids,id__GT_title,depth))
;
var refs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(ref_entity_QMARK_,frontier);
var new_refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (frontier,seen_ids,id__GT_title,depth,ref_entity_QMARK_,refs){
return (function (ref){
return cljs.core.contains_QMARK_(seen_ids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref));
});})(frontier,seen_ids,id__GT_title,depth,ref_entity_QMARK_,refs))
,refs);
var seen_ids_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(seen_ids,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),new_refs);
var id__GT_title_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(id__GT_title,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (frontier,seen_ids,id__GT_title,depth,ref_entity_QMARK_,refs,new_refs,seen_ids_SINGLEQUOTE_){
return (function (p1__41636_SHARP_){
return logseq.db.frontend.content.ref__GT_title_entry(replace_block_refs_QMARK_,p1__41636_SHARP_);
});})(frontier,seen_ids,id__GT_title,depth,ref_entity_QMARK_,refs,new_refs,seen_ids_SINGLEQUOTE_))
),new_refs);
var next_frontier = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(ref_entity_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (frontier,seen_ids,id__GT_title,depth,ref_entity_QMARK_,refs,new_refs,seen_ids_SINGLEQUOTE_,id__GT_title_SINGLEQUOTE_){
return (function (ref){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(ref),logseq.db.frontend.content.title_ref_entities(ref));
});})(frontier,seen_ids,id__GT_title,depth,ref_entity_QMARK_,refs,new_refs,seen_ids_SINGLEQUOTE_,id__GT_title_SINGLEQUOTE_))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_refs], 0))));
var G__41698 = next_frontier;
var G__41699 = seen_ids_SINGLEQUOTE_;
var G__41700 = id__GT_title_SINGLEQUOTE_;
var G__41701 = (depth + (1));
frontier = G__41698;
seen_ids = G__41699;
id__GT_title = G__41700;
depth = G__41701;
continue;
}
break;
}
});
/**
 * Convert id ref (recursively) backs to page name refs, returns replaced title
 */
logseq.db.frontend.content.recur_replace_uuid_in_block_title = (function logseq$db$frontend$content$recur_replace_uuid_in_block_title(var_args){
var G__41642 = arguments.length;
switch (G__41642) {
case 1:
return logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$1 = (function (ent){
return logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$2(ent,(10));
}));

(logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$2 = (function (ent,max_depth){
return logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$3(ent,max_depth,cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$3 = (function (ent,max_depth,p__41643){
var map__41644 = p__41643;
var map__41644__$1 = cljs.core.__destructure_map(map__41644);
var replace_block_refs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41644__$1,new cljs.core.Keyword(null,"replace-block-refs?","replace-block-refs?",-1336416798),true);
var title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ent);
if(cljs.core.truth_((function (){var G__41645 = title;
if((G__41645 == null)){
return null;
} else {
return cljs.core.re_find(logseq.db.frontend.content.id_ref_pattern,G__41645);
}
})())){
var id__GT_title = logseq.db.frontend.content.block_ref_id__GT_title(ent,max_depth,replace_block_refs_QMARK_);
var result = title;
var depth = (0);
while(true){
if((((depth >= max_depth)) || (cljs.core.not(cljs.core.re_find(logseq.db.frontend.content.id_ref_pattern,result))))){
return result;
} else {
var next_result = logseq.db.frontend.content.replace_title_refs_once(result,id__GT_title);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,next_result)){
return result;
} else {
var G__41703 = next_result;
var G__41704 = (depth + (1));
result = G__41703;
depth = G__41704;
continue;
}
}
break;
}
} else {
return title;
}
}));

(logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=logseq.db.frontend.content.js.map
