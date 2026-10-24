goog.provide('frontend.components.block.video');
frontend.components.block.video.video_macro_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["youtube",null,"video",null,"bilibili",null,"vimeo",null], null), null);
frontend.components.block.video.video_macro_inline_QMARK_ = (function frontend$components$block$video$video_macro_inline_QMARK_(item){
return ((cljs.core.vector_QMARK_(item)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(item))) && (cljs.core.contains_QMARK_(frontend.components.block.video.video_macro_names,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"name","name",1843675177)], null)))))));
});
frontend.components.block.video.contains_video_macro_QMARK_ = (function frontend$components$block$video$contains_video_macro_QMARK_(x){
return cljs.core.boolean$(((frontend.components.block.video.video_macro_inline_QMARK_(x))?true:((cljs.core.coll_QMARK_(x))?cljs.core.some(frontend.components.block.video.contains_video_macro_QMARK_,x):false
)));
});
frontend.components.block.video.video_macro_key = (function frontend$components$block$video$video_macro_key(item){
var map__79065 = cljs.core.second(item);
var map__79065__$1 = cljs.core.__destructure_map(map__79065);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79065__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
return (""+"video-macro-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(arguments$)));
});
frontend.components.block.video.parse_positive_int = (function frontend$components$block$video$parse_positive_int(s){
if(typeof s === 'string'){
var n = parseInt(s,(10));
if(((cljs.core.not(isNaN(n))) && ((n > (0))))){
return n;
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.video.video_width_argument_QMARK_ = (function frontend$components$block$video$video_width_argument_QMARK_(argument){
return ((typeof argument === 'string') && (clojure.string.starts_with_QMARK_(argument,"w=")));
});
frontend.components.block.video.video_width = (function frontend$components$block$video$video_width(arguments$){
return cljs.core.some((function (argument){
var G__79089 = (function (){var and__5140__auto__ = typeof argument === 'string';
if(and__5140__auto__){
return cljs.core.second(cljs.core.re_matches(/^w=(\d+)$/,argument));
} else {
return and__5140__auto__;
}
})();
if((G__79089 == null)){
return null;
} else {
return frontend.components.block.video.parse_positive_int(G__79089);
}
}),arguments$);
});
frontend.components.block.video.set_video_width_argument = (function frontend$components$block$video$set_video_width_argument(arguments$,width){
var vec__79098 = cljs.core.vec(arguments$);
var seq__79099 = cljs.core.seq(vec__79098);
var first__79100 = cljs.core.first(seq__79099);
var seq__79099__$1 = cljs.core.next(seq__79099);
var url_or_id = first__79100;
var more = seq__79099__$1;
var more__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.components.block.video.video_width_argument_QMARK_,more);
var width__$1 = ((((typeof width === 'number') && ((width > (0)))))?Math.round(width):null);
if((url_or_id == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(width__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_or_id,(""+"w="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width__$1))], null),more__$1);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_or_id], null),more__$1);

}
}
});
frontend.components.block.video.video_macro_pattern = /(^|[\s])(\{\{(youtube|vimeo|bilibili|video)(?:\s+([^{}]*?))?\}\})/;
frontend.components.block.video.parse_raw_video_arguments = (function frontend$components$block$video$parse_raw_video_arguments(raw_arguments){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = raw_arguments;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),/\s*,\s*/)));
});
frontend.components.block.video.video_macro_text = (function frontend$components$block$video$video_macro_text(name,arguments$){
if(cljs.core.seq(arguments$)){
return (""+"{{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$))+"}}");
} else {
return (""+"{{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"}}");
}
});
frontend.components.block.video.update_video_macro_width_in_content = (function frontend$components$block$video$update_video_macro_width_in_content(content,p__79126,width){
var map__79129 = p__79126;
var map__79129__$1 = cljs.core.__destructure_map(map__79129);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79129__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79129__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var occurrence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79129__$1,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154));
if(((typeof content === 'string') && (((cljs.core.contains_QMARK_(frontend.components.block.video.video_macro_names,name)) && (cljs.core.seq(arguments$)))))){
var target_url_or_id = cljs.core.first(arguments$);
var target_occurrence = (function (){var or__5142__auto__ = occurrence;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var _STAR_occurrence = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
return clojure.string.replace(content,frontend.components.block.video.video_macro_pattern,(function (p__79133){
var vec__79134 = p__79133;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79134,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79134,(1),null);
var _macro = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79134,(2),null);
var raw_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79134,(3),null);
var raw_arguments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79134,(4),null);
var raw_arguments__$1 = frontend.components.block.video.parse_raw_video_arguments(raw_arguments);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,raw_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_url_or_id,cljs.core.first(raw_arguments__$1))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_occurrence,cljs.core.inc);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_occurrence),target_occurrence)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.block.video.video_macro_text(raw_name,frontend.components.block.video.set_video_width_argument(raw_arguments__$1,width))));
} else {
return match;
}
} else {
return match;
}
}));
} else {
return content;
}
});
frontend.components.block.video.video_inline_segments = (function frontend$components$block$video$video_inline_segments(items){
var remaining = items;
var inline_items = cljs.core.PersistentVector.EMPTY;
var segments = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(remaining);
if(cljs.core.truth_(temp__5823__auto__)){
var item = temp__5823__auto__;
if(frontend.components.block.video.video_macro_inline_QMARK_(item)){
var G__79231 = cljs.core.rest(remaining);
var G__79232 = cljs.core.PersistentVector.EMPTY;
var G__79233 = (function (){var G__79160 = segments;
var G__79160__$1 = ((cljs.core.seq(inline_items))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__79160,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"items","items",1031954938),inline_items], null)):G__79160);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__79160__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"item","item",249373802),item], null));

})();
remaining = G__79231;
inline_items = G__79232;
segments = G__79233;
continue;
} else {
var G__79234 = cljs.core.rest(remaining);
var G__79235 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inline_items,item);
var G__79236 = segments;
remaining = G__79234;
inline_items = G__79235;
segments = G__79236;
continue;
}
} else {
var G__79166 = segments;
if(cljs.core.seq(inline_items)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__79166,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"items","items",1031954938),inline_items], null));
} else {
return G__79166;
}
}
break;
}
});
frontend.components.block.video.video_inline_segments_cp = (function frontend$components$block$video$video_inline_segments_cp(inline_f,map_inline_f,items){
var iter__5628__auto__ = (function frontend$components$block$video$video_inline_segments_cp_$_iter__79176(s__79177){
return (new cljs.core.LazySeq(null,(function (){
var s__79177__$1 = s__79177;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__79177__$1);
if(temp__5825__auto__){
var s__79177__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79177__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__79177__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__79179 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__79178 = (0);
while(true){
if((i__79178 < size__5627__auto__)){
var vec__79184 = cljs.core._nth(c__5626__auto__,i__79178);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79184,(0),null);
var map__79187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79184,(1),null);
var map__79187__$1 = cljs.core.__destructure_map(map__79187);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79187__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79187__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79187__$1,new cljs.core.Keyword(null,"item","item",249373802));
cljs.core.chunk_append(b__79179,(function (){var G__79189 = type;
var G__79189__$1 = (((G__79189 instanceof cljs.core.Keyword))?G__79189.fqn:null);
switch (G__79189__$1) {
case "video":
var macro_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var macro_id = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"arguments","arguments",-1182834456)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-embed-block","div.video-embed-block",-1757960840),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),((cljs.core.seq(macro_id))?(""+"video-macro-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro_name)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro_id)):(""+"video-macro-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro_name)+"-idx-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))),new cljs.core.Keyword(null,"data-video-macro-name","data-video-macro-name",953796149),macro_name,new cljs.core.Keyword(null,"data-video-macro-id","data-video-macro-id",-75686781),macro_id], null),(inline_f.cljs$core$IFn$_invoke$arity$1 ? inline_f.cljs$core$IFn$_invoke$arity$1(item) : inline_f.call(null,item))], null);

break;
case "inline":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-inline-text","div.video-inline-text",344418984),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"video-inline-text-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null)], null),(map_inline_f.cljs$core$IFn$_invoke$arity$1 ? map_inline_f.cljs$core$IFn$_invoke$arity$1(items__$1) : map_inline_f.call(null,items__$1)));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79189__$1))));

}
})());

var G__79244 = (i__79178 + (1));
i__79178 = G__79244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79179),frontend$components$block$video$video_inline_segments_cp_$_iter__79176(cljs.core.chunk_rest(s__79177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79179),null);
}
} else {
var vec__79193 = cljs.core.first(s__79177__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79193,(0),null);
var map__79196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79193,(1),null);
var map__79196__$1 = cljs.core.__destructure_map(map__79196);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79196__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79196__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79196__$1,new cljs.core.Keyword(null,"item","item",249373802));
return cljs.core.cons((function (){var G__79197 = type;
var G__79197__$1 = (((G__79197 instanceof cljs.core.Keyword))?G__79197.fqn:null);
switch (G__79197__$1) {
case "video":
var macro_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var macro_id = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"arguments","arguments",-1182834456)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-embed-block","div.video-embed-block",-1757960840),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),((cljs.core.seq(macro_id))?(""+"video-macro-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro_name)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro_id)):(""+"video-macro-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro_name)+"-idx-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))),new cljs.core.Keyword(null,"data-video-macro-name","data-video-macro-name",953796149),macro_name,new cljs.core.Keyword(null,"data-video-macro-id","data-video-macro-id",-75686781),macro_id], null),(inline_f.cljs$core$IFn$_invoke$arity$1 ? inline_f.cljs$core$IFn$_invoke$arity$1(item) : inline_f.call(null,item))], null);

break;
case "inline":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-inline-text","div.video-inline-text",344418984),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"video-inline-text-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null)], null),(map_inline_f.cljs$core$IFn$_invoke$arity$1 ? map_inline_f.cljs$core$IFn$_invoke$arity$1(items__$1) : map_inline_f.call(null,items__$1)));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79197__$1))));

}
})(),frontend$components$block$video$video_inline_segments_cp_$_iter__79176(cljs.core.rest(s__79177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(frontend.components.block.video.video_inline_segments(items)));
});

//# sourceMappingURL=frontend.components.block.video.js.map
