goog.provide('frontend.components.block.breadcrumb_model');
frontend.components.block.breadcrumb_model.max_segment_text_length = (160);
frontend.components.block.breadcrumb_model.truncate_segment_text = (function frontend$components$block$breadcrumb_model$truncate_segment_text(text){
if(clojure.string.blank_QMARK_(text)){
return null;
} else {
if((cljs.core.count(text) > frontend.components.block.breadcrumb_model.max_segment_text_length)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),frontend.components.block.breadcrumb_model.max_segment_text_length))+"\u2026");
} else {
return text;
}
}
});
/**
 * Returns trimmed non-empty lines from a string.
 */
frontend.components.block.breadcrumb_model.normalized_lines = (function frontend$components$block$breadcrumb_model$normalized_lines(s){
if(typeof s === 'string'){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split_lines(s)));
} else {
return null;
}
});
frontend.components.block.breadcrumb_model.markdown_fence_line_QMARK_ = (function frontend$components$block$breadcrumb_model$markdown_fence_line_QMARK_(line){
return cljs.core.boolean$(cljs.core.re_matches(/^\s*```.*/,line));
});
frontend.components.block.breadcrumb_model.org_boundary_line_QMARK_ = (function frontend$components$block$breadcrumb_model$org_boundary_line_QMARK_(line){
return cljs.core.boolean$(cljs.core.re_matches(/^\s*#\+(BEGIN|END)_\w+.*/i,line));
});
frontend.components.block.breadcrumb_model.query_line_QMARK_ = (function frontend$components$block$breadcrumb_model$query_line_QMARK_(line){
return cljs.core.boolean$(cljs.core.re_matches(/^\s*\{\{query\b.*\}\}\s*$/is,line));
});
frontend.components.block.breadcrumb_model.structural_marker_line_QMARK_ = (function frontend$components$block$breadcrumb_model$structural_marker_line_QMARK_(line){
return ((frontend.components.block.breadcrumb_model.markdown_fence_line_QMARK_(line)) || (((frontend.components.block.breadcrumb_model.org_boundary_line_QMARK_(line)) || (frontend.components.block.breadcrumb_model.query_line_QMARK_(line)))));
});
frontend.components.block.breadcrumb_model.strip_code_comment_marker = (function frontend$components$block$breadcrumb_model$strip_code_comment_marker(line){
var temp__5825__auto__ = cljs.core.re_matches(/^\s*(?:;;|\/\/|#|--)\s+(.+)$/,line);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__69420 = temp__5825__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69420,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69420,(1),null);
return text;
} else {
return null;
}
});
frontend.components.block.breadcrumb_model.useful_query_line_QMARK_ = (function frontend$components$block$breadcrumb_model$useful_query_line_QMARK_(line){
return (!(frontend.components.block.breadcrumb_model.query_line_QMARK_(line)));
});
/**
 * Removes common markdown markup from a line, returning plain text.
 */
frontend.components.block.breadcrumb_model.strip_markdown_markup = (function frontend$components$block$breadcrumb_model$strip_markdown_markup(line){
return clojure.string.trim(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(line,/^\s*#{1,6}\s+/,""),/\*\*(.+?)\*\*/,"$1"),/__(.+?)__/,"$1"),/\*([^*]+?)\*/,"$1"),/_([^_]+?)_/,"$1"),/`(.+?)`/,"$1"),/\[(.+?)\]\(.+?\)/,"$1"),/\{\{query[^}]*\}\}/,""),/#\+BEGIN_\w+/i,""),/#\+END_\w+/i,""));
});
frontend.components.block.breadcrumb_model.resolve_uuid_refs = (function frontend$components$block$breadcrumb_model$resolve_uuid_refs(entity,text){
var or__5142__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = typeof text === 'string';
if(and__5140__auto__){
return cljs.core.re_find(logseq.db.frontend.content.id_ref_pattern,text);
} else {
return and__5140__auto__;
}
})())?logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("block","title","block/title",710445684),text),(10)):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return text;
}
});
/**
 * Extracts a short plain-text label from block raw-title.
 * Returns at most max-segment-text-length characters of the first
 * non-empty line (plus a trailing ellipsis if truncated).
 * Does NOT invoke mldoc parse or markup rendering.
 */
frontend.components.block.breadcrumb_model.normalize_breadcrumb_text = (function frontend$components$block$breadcrumb_model$normalize_breadcrumb_text(raw_title){
var line = cljs.core.some((function (line){
if(frontend.components.block.breadcrumb_model.structural_marker_line_QMARK_(line)){
return null;
} else {
return line;
}
}),frontend.components.block.breadcrumb_model.normalized_lines(raw_title));
var cleaned = (cljs.core.truth_(line)?frontend.components.block.breadcrumb_model.strip_markdown_markup(line):null);
return frontend.components.block.breadcrumb_model.truncate_segment_text(cleaned);
});
frontend.components.block.breadcrumb_model.first_content_line = (function frontend$components$block$breadcrumb_model$first_content_line(raw_title){
return cljs.core.some((function (line){
if(frontend.components.block.breadcrumb_model.structural_marker_line_QMARK_(line)){
return null;
} else {
return line;
}
}),frontend.components.block.breadcrumb_model.normalized_lines(raw_title));
});
frontend.components.block.breadcrumb_model.breadcrumb_label_line = (function frontend$components$block$breadcrumb_model$breadcrumb_label_line(raw_title,block_type){
if(typeof raw_title === 'string'){
var G__69434 = block_type;
var G__69434__$1 = (((G__69434 instanceof cljs.core.Keyword))?G__69434.fqn:null);
switch (G__69434__$1) {
case "code":
return cljs.core.some(frontend.components.block.breadcrumb_model.strip_code_comment_marker,frontend.components.block.breadcrumb_model.normalized_lines(raw_title));

break;
case "query":
return cljs.core.some((function (line){
if((((!(frontend.components.block.breadcrumb_model.structural_marker_line_QMARK_(line)))) && (frontend.components.block.breadcrumb_model.useful_query_line_QMARK_(line)))){
return line;
} else {
return null;
}
}),frontend.components.block.breadcrumb_model.normalized_lines(raw_title));

break;
case "note":
case "quote":
return frontend.components.block.breadcrumb_model.first_content_line(raw_title);

break;
default:
return frontend.components.block.breadcrumb_model.first_content_line(raw_title);

}
} else {
return null;
}
});
frontend.components.block.breadcrumb_model.normalize_breadcrumb_line = (function frontend$components$block$breadcrumb_model$normalize_breadcrumb_line(entity,line){
var line__$1 = frontend.components.block.breadcrumb_model.resolve_uuid_refs(entity,line);
var cleaned = (cljs.core.truth_(line__$1)?frontend.components.block.breadcrumb_model.strip_markdown_markup(line__$1):null);
return frontend.components.block.breadcrumb_model.truncate_segment_text(cleaned);
});
frontend.components.block.breadcrumb_model.normalize_typed_breadcrumb_text = (function frontend$components$block$breadcrumb_model$normalize_typed_breadcrumb_text(entity,raw_title,block_type){
return frontend.components.block.breadcrumb_model.normalize_breadcrumb_line(entity,frontend.components.block.breadcrumb_model.breadcrumb_label_line(raw_title,block_type));
});
/**
 * Detects the semantic type of a block based on its raw title/content.
 * Returns :page, :code, :query, :note, :quote, or :block.
 */
frontend.components.block.breadcrumb_model.detect_block_type = (function frontend$components$block$breadcrumb_model$detect_block_type(raw_title,page_QMARK_){
if(cljs.core.truth_(page_QMARK_)){
return new cljs.core.Keyword(null,"page","page",849072397);
} else {
if(typeof raw_title === 'string'){
var trimmed = clojure.string.trim(raw_title);
if(cljs.core.truth_((function (){var or__5142__auto__ = clojure.string.starts_with_QMARK_(trimmed,"```");
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.re_find(/#\+BEGIN_SRC/i,trimmed);
}
})())){
return new cljs.core.Keyword(null,"code","code",1586293142);
} else {
if(cljs.core.truth_(cljs.core.some(frontend.components.block.breadcrumb_model.query_line_QMARK_,frontend.components.block.breadcrumb_model.normalized_lines(raw_title)))){
return new cljs.core.Keyword(null,"query","query",-1288509510);
} else {
if(cljs.core.truth_(cljs.core.re_find(/#\+BEGIN_NOTE/i,trimmed))){
return new cljs.core.Keyword(null,"note","note",1426297904);
} else {
if(cljs.core.truth_(cljs.core.re_find(/#\+BEGIN_QUOTE/i,trimmed))){
return new cljs.core.Keyword(null,"quote","quote",-262615245);
} else {
return new cljs.core.Keyword(null,"block","block",664686210);

}
}
}
}
} else {
return null;
}
}
});
frontend.components.block.breadcrumb_model.query_class_idents = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.class","Cards","logseq.class/Cards",-1284265167),null,new cljs.core.Keyword("logseq.class","Query","logseq.class/Query",-232480166),null], null), null);
/**
 * Returns :query if entity has a Query-family tag (:logseq.class/Query or
 * :logseq.class/Cards). Returns nil otherwise.
 */
frontend.components.block.breadcrumb_model.entity_tags__GT_block_type = (function frontend$components$block$breadcrumb_model$entity_tags__GT_block_type(entity){
if(cljs.core.truth_(cljs.core.some((function (t){
var G__69440 = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return t;
}
})();
return (frontend.components.block.breadcrumb_model.query_class_idents.cljs$core$IFn$_invoke$arity$1 ? frontend.components.block.breadcrumb_model.query_class_idents.cljs$core$IFn$_invoke$arity$1(G__69440) : frontend.components.block.breadcrumb_model.query_class_idents.call(null,G__69440));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(entity)))){
return new cljs.core.Keyword(null,"query","query",-1288509510);
} else {
return null;
}
});
/**
 * Maps a DB :logseq.property.node/display-type keyword to a breadcrumb type.
 * Returns nil when display-type is not a recognised structural type.
 */
frontend.components.block.breadcrumb_model.display_type__GT_block_type = (function frontend$components$block$breadcrumb_model$display_type__GT_block_type(display_type){
var G__69441 = display_type;
var G__69441__$1 = (((G__69441 instanceof cljs.core.Keyword))?G__69441.fqn:null);
switch (G__69441__$1) {
case "code":
return new cljs.core.Keyword(null,"code","code",1586293142);

break;
case "quote":
return new cljs.core.Keyword(null,"quote","quote",-262615245);

break;
case "math":
return new cljs.core.Keyword(null,"math","math",-2026912803);

break;
default:
return null;

}
});
/**
 * Hydrates :block/refs titles from a breadcrumb ref-titles payload.
 * Ref-titles also covers [[uuid]] targets that appear inside titles but not
 * in :block/refs (e.g. nested in a page-ref name); those are appended as
 * shallow refs so uuid refs can be resolved for display.
 */
frontend.components.block.breadcrumb_model.with_breadcrumb_ref_titles = (function frontend$components$block$breadcrumb_model$with_breadcrumb_ref_titles(entity,ref_titles){
if(cljs.core.seq(ref_titles)){
var refs = new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(entity);
var known = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),refs);
var title_refs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__69442){
var vec__69443 = p__69442;
var ref_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69443,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69443,(1),null);
return ((cljs.core.uuid_QMARK_(ref_uuid)) && (((typeof title === 'string') && ((!(cljs.core.contains_QMARK_(known,ref_uuid)))))));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__69448){
var vec__69449 = p__69448;
var ref_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69449,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69449,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),ref_uuid,new cljs.core.Keyword("block","title","block/title",710445684),title], null);
}))),ref_titles);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ref){
var temp__5823__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(temp__5823__auto__)){
var ref_uuid = temp__5823__auto__;
if(cljs.core.contains_QMARK_(ref_titles,ref_uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ref,new cljs.core.Keyword("block","title","block/title",710445684),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref_titles,ref_uuid));
} else {
return ref;
}
} else {
return ref;
}
}),(function (){var or__5142__auto__ = refs;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()),title_refs));
} else {
return entity;
}
});
/**
 * Ancestor entity maps from a breadcrumb resource payload.
 * Prefers inline :ancestors so the first paint does not wait for use-block.
 */
frontend.components.block.breadcrumb_model.resource_ancestors = (function frontend$components$block$breadcrumb_model$resource_ancestors(breadcrumb_data){
if(cljs.core.contains_QMARK_(breadcrumb_data,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424))){
return new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(breadcrumb_data);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ancestor_uuid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),ancestor_uuid], null);
}),new cljs.core.Keyword(null,"ancestor-uuids","ancestor-uuids",-2052291099).cljs$core$IFn$_invoke$arity$1(breadcrumb_data));
}
});
/**
 * Converts a page or block entity map to a breadcrumb segment map.
 * 
 * Segment keys:
 *   :db/id         - DataScript entity id
 *   :block/uuid    - block uuid
 *   :type          - :page | :block | :code | :query | :note | :quote | :math
 *   :text          - short plain-text label (may be nil for empty blocks)
 *   :full-text     - full normalized single-line text for title/aria-label
 *   :title-ref-ids - UUID refs from the source line that can become the label
 *   :icon          - icon value from :logseq.property/icon, or nil
 *   :page?         - true for page segments
 */
frontend.components.block.breadcrumb_model.block__GT_breadcrumb_segment = (function frontend$components$block$breadcrumb_model$block__GT_breadcrumb_segment(entity){
if(cljs.core.truth_(entity)){
var page_QMARK_ = (!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity) == null)));
var raw_title = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity);
}
})();
var db_display_type = frontend.components.block.breadcrumb_model.display_type__GT_block_type(new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(entity));
var tag_type = ((page_QMARK_)?null:frontend.components.block.breadcrumb_model.entity_tags__GT_block_type(entity));
var block_type = (function (){var or__5142__auto__ = db_display_type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = tag_type;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.components.block.breadcrumb_model.detect_block_type(raw_title,page_QMARK_);
}
}
})();
var title_line = ((page_QMARK_)?null:frontend.components.block.breadcrumb_model.breadcrumb_label_line(raw_title,block_type));
var text = ((page_QMARK_)?(function (){var or__5142__auto__ = frontend.components.block.breadcrumb_model.resolve_uuid_refs(entity,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity);
}
})():frontend.components.block.breadcrumb_model.normalize_typed_breadcrumb_text(entity,raw_title,block_type));
var full_text = ((page_QMARK_)?(function (){var or__5142__auto__ = frontend.components.block.breadcrumb_model.resolve_uuid_refs(entity,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "";
}
}
})():(function (){var or__5142__auto__ = text;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var icon = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(entity);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword(null,"type","type",1174270348),block_type,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"full-text","full-text",1432444182),full_text,new cljs.core.Keyword(null,"title-ref-ids","title-ref-ids",1934887621),(((((!(page_QMARK_))) && (typeof title_line === 'string')))?logseq.db.frontend.content.get_matched_ids(title_line):null),new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_], null);
} else {
return null;
}
});
/**
 * Joins segment texts into a / separated path string for use in
 * title attribute or aria-label.
 */
frontend.components.block.breadcrumb_model.segments__GT_full_title = (function frontend$components$block$breadcrumb_model$segments__GT_full_title(segments){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69456_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__69456_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"full-text","full-text",1432444182).cljs$core$IFn$_invoke$arity$1(p1__69456_SHARP_);
}
}),segments)));
});
frontend.components.block.breadcrumb_model.navigated_between_parents_QMARK_ = (function frontend$components$block$breadcrumb_model$navigated_between_parents_QMARK_(initial_block,navigating_block,navigating_block_entity){
return cljs.core.boolean$((function (){var and__5140__auto__ = navigating_block;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = navigating_block_entity;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent-id","block/parent-id",320526152).cljs$core$IFn$_invoke$arity$1(initial_block),new cljs.core.Keyword("block","parent-id","block/parent-id",320526152).cljs$core$IFn$_invoke$arity$1(navigating_block_entity));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
frontend.components.block.breadcrumb_model.variant_defaults = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"block-page","block-page",-1504429860),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-visible","max-visible",-1761704140),(4),new cljs.core.Keyword(null,"nearest-count","nearest-count",945840742),(2),new cljs.core.Keyword(null,"load-depth","load-depth",1976537472),(16)], null),new cljs.core.Keyword(null,"app-header","app-header",-1928371793),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-visible","max-visible",-1761704140),(4),new cljs.core.Keyword(null,"nearest-count","nearest-count",945840742),(1),new cljs.core.Keyword(null,"load-depth","load-depth",1976537472),(4)], null),new cljs.core.Keyword(null,"search-result","search-result",528142443),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-visible","max-visible",-1761704140),(3),new cljs.core.Keyword(null,"nearest-count","nearest-count",945840742),(1),new cljs.core.Keyword(null,"load-depth","load-depth",1976537472),(4)], null),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-visible","max-visible",-1761704140),(3),new cljs.core.Keyword(null,"nearest-count","nearest-count",945840742),(1),new cljs.core.Keyword(null,"load-depth","load-depth",1976537472),(8)], null),new cljs.core.Keyword(null,"native-search","native-search",-369600364),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-visible","max-visible",-1761704140),(2),new cljs.core.Keyword(null,"nearest-count","nearest-count",945840742),(1),new cljs.core.Keyword(null,"load-depth","load-depth",1976537472),(3)], null)], null);
/**
 * Returns display options for a given variant keyword.
 * Falls back to :inline defaults if variant is unknown.
 * Merges with any extra-opts map provided.
 */
frontend.components.block.breadcrumb_model.variant_options = (function frontend$components$block$breadcrumb_model$variant_options(var_args){
var args__5882__auto__ = [];
var len__5876__auto___69480 = arguments.length;
var i__5877__auto___69481 = (0);
while(true){
if((i__5877__auto___69481 < len__5876__auto___69480)){
args__5882__auto__.push((arguments[i__5877__auto___69481]));

var G__69482 = (i__5877__auto___69481 + (1));
i__5877__auto___69481 = G__69482;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.components.block.breadcrumb_model.variant_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.components.block.breadcrumb_model.variant_options.cljs$core$IFn$_invoke$arity$variadic = (function (variant,p__69459){
var vec__69462 = p__69459;
var extra_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69462,(0),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.components.block.breadcrumb_model.variant_defaults,variant,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(frontend.components.block.breadcrumb_model.variant_defaults)),extra_opts], 0));
}));

(frontend.components.block.breadcrumb_model.variant_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.components.block.breadcrumb_model.variant_options.cljs$lang$applyTo = (function (seq69457){
var G__69458 = cljs.core.first(seq69457);
var seq69457__$1 = cljs.core.next(seq69457);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69458,seq69457__$1);
}));

frontend.components.block.breadcrumb_model.distinct_entities = (function frontend$components$block$breadcrumb_model$distinct_entities(segments){
return new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__69465,segment){
var map__69466 = p__69465;
var map__69466__$1 = cljs.core.__destructure_map(map__69466);
var result = map__69466__$1;
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69466__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var identity = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(segment);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(segment);
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = identity;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(seen,identity);
} else {
return and__5140__auto__;
}
})())){
return result;
} else {
var G__69468 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"segments","segments",1937535949),cljs.core.conj,segment);
if(cljs.core.truth_(identity)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__69468,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj,identity);
} else {
return G__69468;
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"segments","segments",1937535949),cljs.core.PersistentVector.EMPTY], null),segments));
});
/**
 * Applies the visibility budget to a sequence of segments.
 * 
 * `segments` are ordered from root (page) to nearest parent, with the root
 * segment first.
 * 
 * Options:
 *   :show-page?     - include the page segment (default true)
 *   :max-visible    - max visible segments before middle overflow (default 4)
 *   :nearest-count  - always show this many nearest-parent segments (default 2)
 * 
 * Returns:
 *   {:visible-prefix  [seg ...]   ; first segments that fit (includes page)
 *    :hidden          [seg ...]   ; middle segments folded into ellipsis
 *    :visible-suffix  [seg ...]   ; nearest parent(s) always visible
 *    :overflow?       bool}       ; true when any segments are hidden
 */
frontend.components.block.breadcrumb_model.build_breadcrumb_view = (function frontend$components$block$breadcrumb_model$build_breadcrumb_view(segments,p__69470){
var map__69471 = p__69470;
var map__69471__$1 = cljs.core.__destructure_map(map__69471);
var show_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69471__$1,new cljs.core.Keyword(null,"show-page?","show-page?",792494155),true);
var max_visible = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69471__$1,new cljs.core.Keyword(null,"max-visible","max-visible",-1761704140),(4));
var nearest_count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69471__$1,new cljs.core.Keyword(null,"nearest-count","nearest-count",945840742),(2));
var segments__$1 = frontend.components.block.breadcrumb_model.distinct_entities(segments);
var segs = (cljs.core.truth_(show_page_QMARK_)?segments__$1:cljs.core.vec(cljs.core.rest(segments__$1)));
var total = cljs.core.count(segs);
if((total === (0))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible-prefix","visible-prefix",-718434979),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"visible-suffix","visible-suffix",803263971),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"overflow?","overflow?",124924720),false], null);
} else {
if((total <= max_visible)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible-prefix","visible-prefix",-718434979),segs,new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"visible-suffix","visible-suffix",803263971),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"overflow?","overflow?",124924720),false], null);
} else {
var keep_first = (1);
var suffix_count = cljs.core.min.cljs$core$IFn$_invoke$arity$2(nearest_count,(total - keep_first));
var prefix = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(keep_first,segs));
var suffix = cljs.core.vec(cljs.core.take_last(suffix_count,segs));
var hidden = cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(segs,keep_first,(total - suffix_count)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(hidden))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible-prefix","visible-prefix",-718434979),cljs.core.into.cljs$core$IFn$_invoke$arity$2(prefix,hidden),new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"visible-suffix","visible-suffix",803263971),suffix,new cljs.core.Keyword(null,"overflow?","overflow?",124924720),false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible-prefix","visible-prefix",-718434979),prefix,new cljs.core.Keyword(null,"hidden","hidden",-312506092),hidden,new cljs.core.Keyword(null,"visible-suffix","visible-suffix",803263971),suffix,new cljs.core.Keyword(null,"overflow?","overflow?",124924720),true], null);
}

}
}
});

//# sourceMappingURL=frontend.components.block.breadcrumb_model.js.map
