goog.provide('frontend.extensions.handbooks.core');
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.handbooks !== 'undefined') && (typeof frontend.extensions.handbooks.core !== 'undefined') && (typeof frontend.extensions.handbooks.core._STAR_config !== 'undefined')){
} else {
frontend.extensions.handbooks.core._STAR_config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.extensions.handbooks.core.get_handbooks_endpoint = (function frontend$extensions$handbooks$core$get_handbooks_endpoint(resource){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frontend.storage.get(new cljs.core.Keyword(null,"handbooks-dev-watch?","handbooks-dev-watch?",-372916840)))?"http://localhost:1337":"https://handbooks.pages.dev"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource));
});
frontend.extensions.handbooks.core.resolve_asset_url = (function frontend$extensions$handbooks$core$resolve_asset_url(path){
if(clojure.string.starts_with_QMARK_(path,"http")){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.handbooks.core.get_handbooks_endpoint("/"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(clojure.string.replace_first(path,"./",""),/^\/+/,"")));
}
});
frontend.extensions.handbooks.core.inflate_content_assets_urls = (function frontend$extensions$handbooks$core$inflate_content_assets_urls(content){
var temp__5823__auto__ = (function (){var and__5140__auto__ = (!(clojure.string.blank_QMARK_(content)));
if(and__5140__auto__){
return cljs.core.re_seq(/src=\"([^\"]+)\"/,content);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var matches = temp__5823__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,matched){
var temp__5823__auto____$1 = cljs.core.second(matched);
if(cljs.core.truth_(temp__5823__auto____$1)){
var matched__$1 = temp__5823__auto____$1;
return clojure.string.replace(content__$1,matched__$1,frontend.extensions.handbooks.core.resolve_asset_url(matched__$1));
} else {
return content__$1;
}
}),content,matches);
} else {
return content;
}
});
frontend.extensions.handbooks.core.parse_key_from_href = (function frontend$extensions$handbooks$core$parse_key_from_href(href,base){
if(((typeof href === 'string') && ((!(clojure.string.blank_QMARK_(href)))))){
var temp__5825__auto__ = (function (){var G__56636 = href;
var G__56636__$1 = (((G__56636 == null))?null:clojure.string.trim(G__56636));
if((G__56636__$1 == null)){
return null;
} else {
return clojure.string.replace(G__56636__$1,/.edn$/,"");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var href__$1 = temp__5825__auto__;
var G__56637 = ((clojure.string.starts_with_QMARK_(href__$1,"@"))?clojure.string.replace(href__$1,/^[@\\/]+/,""):(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(base,href__$1) : frontend.util.node_path.join.call(null,base,href__$1)));
var G__56637__$1 = (((G__56637 == null))?null:clojure.string.lower_case(G__56637));
if((G__56637__$1 == null)){
return null;
} else {
return camel_snake_kebab.core.__GT_snake_case_string(G__56637__$1);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.handbooks.core.parse_parent_key = (function frontend$extensions$handbooks$core$parse_parent_key(s){
if(((typeof s === 'string') && (clojure.string.includes_QMARK_(s,"/")))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,"/"));
} else {
return s;
}
});
frontend.extensions.handbooks.core.bind_parent_key = (function frontend$extensions$handbooks$core$bind_parent_key(p__56642){
var map__56643 = p__56642;
var map__56643__$1 = cljs.core.__destructure_map(map__56643);
var node = map__56643__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56643__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__56644 = node;
if(((typeof key === 'string') && (clojure.string.includes_QMARK_(key,"/")))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56644,new cljs.core.Keyword(null,"parent","parent",-878878779),frontend.extensions.handbooks.core.parse_parent_key(key));
} else {
return G__56644;
}
});
frontend.extensions.handbooks.core.display_category_title = (function frontend$extensions$handbooks$core$display_category_title(p__56647){
var map__56648 = p__56647;
var map__56648__$1 = cljs.core.__destructure_map(map__56648);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"title","title",636505583));
var G__56649 = key;
switch (G__56649) {
case "1.getting_started":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","start","help/start",-352141778)], 0));

break;
case "2.sync":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","sync","help.handbook/sync",-1755798009)], 0));

break;
default:
return title;

}
});
frontend.extensions.handbooks.core.load_glide_assets_BANG_ = (function frontend$extensions$handbooks$core$load_glide_assets_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.util.css_load$.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.JS_ROOT)+"/glide/glide.core.min.css"))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.util.css_load$.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.JS_ROOT)+"/glide/glide.theme.min.css"))),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((window["Glide"]))?null:frontend.util.js_load$((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.JS_ROOT)+"/glide/glide.min.js")))),(function (___$2){
return promesa.impl.resolved(null);
}));
}));
}));
}));
});
frontend.extensions.handbooks.core.topic_card = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$topic_card(p__56656,nav_fn_BANG_,opts){
var map__56657 = p__56656;
var map__56657__$1 = cljs.core.__destructure_map(map__56657);
var _topic = map__56657__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56657__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56657__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56657__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var cover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56657__$1,new cljs.core.Keyword(null,"cover","cover",-823541365));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.topic-card.flex.text-left","button.w-full.topic-card.flex.text-left",271823907),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-click","on-click",1632826543),nav_fn_BANG_], null),opts], 0)),(cljs.core.truth_(cover)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.l.flex.items-center","div.l.flex.items-center",143430372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),frontend.extensions.handbooks.core.resolve_asset_url(cover)], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.r.flex.flex-col","div.r.flex.flex-col",995634413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),description], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$topic_card__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56659 = cljs.core.first(args__31746__auto__);
var G__56660 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56659,G__56660) : io.factorhouse.hsx.core.obj_get.call(null,G__56659,G__56660));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"topic-card","topic-card",87717310,null),args__31746__auto__),frontend$extensions$handbooks$core$topic_card,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$topic_card = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56956__i = 0, G__56956__a = new Array(arguments.length -  0);
while (G__56956__i < G__56956__a.length) {G__56956__a[G__56956__i] = arguments[G__56956__i + 0]; ++G__56956__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56956__a,0,null);
} 
return frontend$extensions$handbooks$core$topic_card__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$topic_card.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$topic_card.cljs$lang$applyTo = (function (arglist__56957){
var args__31746__auto__ = cljs.core.seq(arglist__56957);
return frontend$extensions$handbooks$core$topic_card__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$topic_card.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$topic_card__delegate;
return frontend$extensions$handbooks$core$topic_card;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56663 = comp__31745__auto__;
var G__56664 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56663,G__56664) : io.factorhouse.hsx.core.react_memo.call(null,G__56663,G__56664));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"topic-card");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.pane_category_topics = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$pane_category_topics(handbook_nodes,pane_state,nav_BANG_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane.pane-category-topics","div.pane.pane-category-topics",-1422718918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topics-list","div.topics-list",-199461940),(function (){var category_key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(pane_state));
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,category_key);
if(cljs.core.truth_(temp__5825__auto__)){
var category = temp__5825__auto__;
var iter__5628__auto__ = (function frontend$extensions$handbooks$core$pane_category_topics_$_iter__56665(s__56666){
return (new cljs.core.LazySeq(null,(function (){
var s__56666__$1 = s__56666;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__56666__$1);
if(temp__5825__auto____$1){
var s__56666__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56666__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56666__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56668 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56667 = (0);
while(true){
if((i__56667 < size__5627__auto__)){
var topic = cljs.core._nth(c__5626__auto__,i__56667);
cljs.core.chunk_append(b__56668,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.topic_card,topic,((function (i__56667,topic,c__5626__auto__,size__5627__auto__,b__56668,s__56666__$2,temp__5825__auto____$1,category,temp__5825__auto__,category_key){
return (function (){
var G__56669 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,frontend.extensions.handbooks.core.display_category_title(category)], null);
var G__56670 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__56669,G__56670) : nav_BANG_.call(null,G__56669,G__56670));
});})(i__56667,topic,c__5626__auto__,size__5627__auto__,b__56668,s__56666__$2,temp__5825__auto____$1,category,temp__5825__auto__,category_key))
,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)], null)));

var G__56958 = (i__56667 + (1));
i__56667 = G__56958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56668),frontend$extensions$handbooks$core$pane_category_topics_$_iter__56665(cljs.core.chunk_rest(s__56666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56668),null);
}
} else {
var topic = cljs.core.first(s__56666__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.topic_card,topic,((function (topic,s__56666__$2,temp__5825__auto____$1,category,temp__5825__auto__,category_key){
return (function (){
var G__56671 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,frontend.extensions.handbooks.core.display_category_title(category)], null);
var G__56672 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__56671,G__56672) : nav_BANG_.call(null,G__56671,G__56672));
});})(topic,s__56666__$2,temp__5825__auto____$1,category,temp__5825__auto__,category_key))
,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)], null)),frontend$extensions$handbooks$core$pane_category_topics_$_iter__56665(cljs.core.rest(s__56666__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(category));
} else {
return null;
}
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$pane_category_topics__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56673 = cljs.core.first(args__31746__auto__);
var G__56674 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56673,G__56674) : io.factorhouse.hsx.core.obj_get.call(null,G__56673,G__56674));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pane-category-topics","pane-category-topics",1792376510,null),args__31746__auto__),frontend$extensions$handbooks$core$pane_category_topics,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$pane_category_topics = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56959__i = 0, G__56959__a = new Array(arguments.length -  0);
while (G__56959__i < G__56959__a.length) {G__56959__a[G__56959__i] = arguments[G__56959__i + 0]; ++G__56959__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56959__a,0,null);
} 
return frontend$extensions$handbooks$core$pane_category_topics__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$pane_category_topics.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$pane_category_topics.cljs$lang$applyTo = (function (arglist__56960){
var args__31746__auto__ = cljs.core.seq(arglist__56960);
return frontend$extensions$handbooks$core$pane_category_topics__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$pane_category_topics.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$pane_category_topics__delegate;
return frontend$extensions$handbooks$core$pane_category_topics;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56675 = comp__31745__auto__;
var G__56676 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56675,G__56676) : io.factorhouse.hsx.core.react_memo.call(null,G__56675,G__56676));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pane-category-topics");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.media_render = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$media_render(src){
var src__$1 = frontend.util.trim_safe(src);
var extname = (function (){var G__56679 = src__$1;
var G__56679__$1 = (((G__56679 == null))?null:(frontend.util.full_path_extname.cljs$core$IFn$_invoke$arity$1 ? frontend.util.full_path_extname.cljs$core$IFn$_invoke$arity$1(G__56679) : frontend.util.full_path_extname.call(null,G__56679)));
if((G__56679__$1 == null)){
return null;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__56679__$1,(1));
}
})();
var youtube_id = (function (){var and__5140__auto__ = clojure.string.includes_QMARK_(src__$1,"youtube.com/watch?v=");
if(and__5140__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(src__$1,((2) + clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(src__$1,"v=")));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = extname;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(frontend.config.video_formats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(extname));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"controls","controls",1340701452),true], null)], null);
} else {
if(typeof youtube_id === 'string'){
return frontend.extensions.video.youtube.youtube_video(youtube_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(235)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1], null)], null);

}
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$media_render__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56680 = cljs.core.first(args__31746__auto__);
var G__56681 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56680,G__56681) : io.factorhouse.hsx.core.obj_get.call(null,G__56680,G__56681));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"media-render","media-render",-1883214460,null),args__31746__auto__),frontend$extensions$handbooks$core$media_render,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$media_render = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56961__i = 0, G__56961__a = new Array(arguments.length -  0);
while (G__56961__i < G__56961__a.length) {G__56961__a[G__56961__i] = arguments[G__56961__i + 0]; ++G__56961__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56961__a,0,null);
} 
return frontend$extensions$handbooks$core$media_render__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$media_render.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$media_render.cljs$lang$applyTo = (function (arglist__56962){
var args__31746__auto__ = cljs.core.seq(arglist__56962);
return frontend$extensions$handbooks$core$media_render__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$media_render.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$media_render__delegate;
return frontend$extensions$handbooks$core$media_render;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56682 = comp__31745__auto__;
var G__56683 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56682,G__56683) : io.factorhouse.hsx.core.react_memo.call(null,G__56682,G__56683));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"media-render");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.chapter_select = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$chapter_select(topic,children,on_select){
var vec__56689 = logseq.shui.hooks.use_state(false);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56689,(0),null);
var set_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56689,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = document.querySelector("[data-identity=logseq-handbooks]");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var h = (function (p1__56684_SHARP_){
if(cljs.core.truth_((function (){var G__56692 = p1__56684_SHARP_.target;
if((G__56692 == null)){
return null;
} else {
return document.querySelector(".chapters-select").contains(G__56692);
}
})())){
return null;
} else {
return (set_open_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_open_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_open_QMARK_.call(null,false));
}
});
el.addEventListener("click",h);

return (function (){
return el.removeEventListener("click",h);
});
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chapters-select.w-full","div.chapters-select.w-full",1217922101),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.select-trigger","a.select-trigger",-1873882531),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__56693 = cljs.core.not(open_QMARK_);
return (set_open_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_open_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56693) : set_open_QMARK_.call(null,G__56693));
}),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","current-chapter","help.handbook/current-chapter",-1692640890)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic)], null),(cljs.core.truth_(open_QMARK_)?frontend.ui.icon("chevron-down"):frontend.ui.icon("chevron-left")),(cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5628__auto__ = (function frontend$extensions$handbooks$core$chapter_select_$_iter__56695(s__56696){
return (new cljs.core.LazySeq(null,(function (){
var s__56696__$1 = s__56696;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56696__$1);
if(temp__5825__auto__){
var s__56696__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56696__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56696__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56698 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56697 = (0);
while(true){
if((i__56697 < size__5627__auto__)){
var c = cljs.core._nth(c__5626__auto__,i__56697);
cljs.core.chunk_append(b__56698,((((cljs.core.seq(c)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex","a.flex",-995526906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56697,c,c__5626__auto__,size__5627__auto__,b__56698,s__56696__$2,temp__5825__auto__,vec__56689,open_QMARK_,set_open_QMARK_){
return (function (){
var G__56699 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c);
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__56699) : on_select.call(null,G__56699));
});})(i__56697,c,c__5626__auto__,size__5627__auto__,b__56698,s__56696__$2,temp__5825__auto__,vec__56689,open_QMARK_,set_open_QMARK_))
], null),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c);
}
})()], null)], null):null));

var G__56963 = (i__56697 + (1));
i__56697 = G__56963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56698),frontend$extensions$handbooks$core$chapter_select_$_iter__56695(cljs.core.chunk_rest(s__56696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56698),null);
}
} else {
var c = cljs.core.first(s__56696__$2);
return cljs.core.cons(((((cljs.core.seq(c)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex","a.flex",-995526906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,s__56696__$2,temp__5825__auto__,vec__56689,open_QMARK_,set_open_QMARK_){
return (function (){
var G__56701 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c);
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__56701) : on_select.call(null,G__56701));
});})(c,s__56696__$2,temp__5825__auto__,vec__56689,open_QMARK_,set_open_QMARK_))
], null),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c);
}
})()], null)], null):null),frontend$extensions$handbooks$core$chapter_select_$_iter__56695(cljs.core.rest(s__56696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(children);
})()], null):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$chapter_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56702 = cljs.core.first(args__31746__auto__);
var G__56703 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56702,G__56703) : io.factorhouse.hsx.core.obj_get.call(null,G__56702,G__56703));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"chapter-select","chapter-select",400626450,null),args__31746__auto__),frontend$extensions$handbooks$core$chapter_select,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$chapter_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56964__i = 0, G__56964__a = new Array(arguments.length -  0);
while (G__56964__i < G__56964__a.length) {G__56964__a[G__56964__i] = arguments[G__56964__i + 0]; ++G__56964__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56964__a,0,null);
} 
return frontend$extensions$handbooks$core$chapter_select__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$chapter_select.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$chapter_select.cljs$lang$applyTo = (function (arglist__56965){
var args__31746__auto__ = cljs.core.seq(arglist__56965);
return frontend$extensions$handbooks$core$chapter_select__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$chapter_select.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$chapter_select__delegate;
return frontend$extensions$handbooks$core$chapter_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56704 = comp__31745__auto__;
var G__56705 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56704,G__56705) : io.factorhouse.hsx.core.react_memo.call(null,G__56704,G__56705));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"chapter-select");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.pane_topic_detail = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$pane_topic_detail(handbook_nodes,pane_state,nav_BANG_){
var vec__56707 = logseq.shui.hooks.use_state(false);
var deps_pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56707,(0),null);
var set_deps_pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56707,(1),null);
var _STAR_id_ref = (function (){var G__56714 = (""+"glide--"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now()));
return (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__56714) : logseq.shui.hooks.use_ref.call(null,G__56714));
})();
logseq.shui.hooks.use_effect_BANG_((function (){
(set_deps_pending_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_deps_pending_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_deps_pending_QMARK_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.extensions.handbooks.core.load_glide_assets_BANG_(),(function (){
return setTimeout((function (){
if(cljs.core.truth_(document.getElementById(logseq.shui.hooks.deref(_STAR_id_ref)))){
var G__56715 = (new window.Glide((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.hooks.deref(_STAR_id_ref)))));
G__56715.mount();

return G__56715;
} else {
return null;
}
}),(50));
})),(function (){
return (set_deps_pending_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_deps_pending_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_deps_pending_QMARK_.call(null,false));
}));
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
return setTimeout((function (){
var G__56718 = document.querySelector(".cp__handbooks-content");
if((G__56718 == null)){
return null;
} else {
return G__56718.scrollTo((0),(0));
}
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane_state], null));

var temp__5825__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(pane_state));
if(cljs.core.truth_(temp__5825__auto__)){
var topic_key = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,topic_key);
if(cljs.core.truth_(temp__5825__auto____$1)){
var topic = temp__5825__auto____$1;
var chapters = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(topic);
var has_chapters_QMARK_ = cljs.core.seq(chapters);
var topic__$1 = ((has_chapters_QMARK_)?cljs.core.first(chapters):topic);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(frontend.extensions.handbooks.core.bind_parent_key(topic__$1)));
var chapters__$1 = (function (){var or__5142__auto__ = chapters;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(parent);
}
})();
var parent_key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(parent);
var parent_category_QMARK_ = (!(clojure.string.includes_QMARK_(parent_key,"/")));
var show_chapters_QMARK_ = (((!(parent_category_QMARK_))) && (cljs.core.seq(chapters__$1)));
var chapters_len = cljs.core.count(chapters__$1);
var chapter_current_idx = (((chapters_len === (0)))?null:frontend.util.find_index((function (p1__56706_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__56706_SHARP_),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic__$1));
}),chapters__$1));
if(cljs.core.truth_(deps_pending_QMARK_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane.pane-topic-detail","div.pane.pane-topic-detail",-1359891875),((show_chapters_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-2xl.pb-3.font-semibold","h1.text-2xl.pb-3.font-semibold",1202289385),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic__$1)], null)),((show_chapters_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chapters-wrap.py-2","div.chapters-wrap.py-2",-36217700),frontend.extensions.handbooks.core.chapter_select(topic__$1,chapters__$1,(function (k){
var temp__5825__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,k);
if(cljs.core.truth_(temp__5825__auto____$2)){
var chapter = temp__5825__auto____$2;
var G__56721 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),chapter,frontend.extensions.handbooks.core.display_category_title(parent)], null);
var G__56722 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__56721,G__56722) : nav_BANG_.call(null,G__56721,G__56722));
} else {
return null;
}
}))], null):null),(function (){var temp__5825__auto____$2 = new cljs.core.Keyword(null,"demos","demos",2019929767).cljs$core$IFn$_invoke$arity$1(topic__$1);
if(cljs.core.truth_(temp__5825__auto____$2)){
var demos = temp__5825__auto____$2;
var demos__$1 = (function (){var G__56724 = demos;
if(typeof demos === 'string'){
return (new cljs.core.List(null,G__56724,null,(1),null));
} else {
return G__56724;
}
})();
if((cljs.core.count(demos__$1) > (1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.demos.glide","div.flex.demos.glide",-1625455235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),logseq.shui.hooks.deref(_STAR_id_ref)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.glide__track","div.glide__track",-633527809),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-glide-el","data-glide-el",-1091179891),"track"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.glide__slides","div.glide__slides",-999448224),(function (){var iter__5628__auto__ = (function frontend$extensions$handbooks$core$pane_topic_detail_$_iter__56725(s__56726){
return (new cljs.core.LazySeq(null,(function (){
var s__56726__$1 = s__56726;
while(true){
var temp__5825__auto____$3 = cljs.core.seq(s__56726__$1);
if(temp__5825__auto____$3){
var s__56726__$2 = temp__5825__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__56726__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56726__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56728 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56727 = (0);
while(true){
if((i__56727 < size__5627__auto__)){
var demo = cljs.core._nth(c__5626__auto__,i__56727);
cljs.core.chunk_append(b__56728,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item.glide__slide","div.item.glide__slide",-1497684829),frontend.extensions.handbooks.core.media_render(frontend.extensions.handbooks.core.resolve_asset_url(demo))], null));

var G__56976 = (i__56727 + (1));
i__56727 = G__56976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56728),frontend$extensions$handbooks$core$pane_topic_detail_$_iter__56725(cljs.core.chunk_rest(s__56726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56728),null);
}
} else {
var demo = cljs.core.first(s__56726__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item.glide__slide","div.item.glide__slide",-1497684829),frontend.extensions.handbooks.core.media_render(frontend.extensions.handbooks.core.resolve_asset_url(demo))], null),frontend$extensions$handbooks$core$pane_topic_detail_$_iter__56725(cljs.core.rest(s__56726__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(demos__$1);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.glide__bullets","div.glide__bullets",-2112036241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-glide-el","data-glide-el",-1091179891),"controls[nav]"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.glide__bullet","button.glide__bullet",-1928516082),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-glide-dir","data-glide-dir",653306489),(""+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null),(idx + (1))], null);
}),demos__$1)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.demos.pt-1","div.flex.demos.pt-1",1609910240),frontend.extensions.handbooks.core.media_render(frontend.extensions.handbooks.core.resolve_asset_url(cljs.core.first(demos__$1)))], null);
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content-wrap","div.content-wrap",1869004654),(function (){var temp__5825__auto____$2 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(topic__$1);
if(cljs.core.truth_(temp__5825__auto____$2)){
var content = temp__5825__auto____$2;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.markdown-body","div.content.markdown-body",1198787733),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.extensions.handbooks.core.inflate_content_assets_urls(content)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5825__auto____$3 = e.target;
if(cljs.core.truth_(temp__5825__auto____$3)){
var target = temp__5825__auto____$3;
var temp__5823__auto__ = target.closest("img");
if(cljs.core.truth_(temp__5823__auto__)){
var img = temp__5823__auto__;
return frontend.extensions.lightbox.preview_images_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),img.src,new cljs.core.Keyword(null,"w","w",354169001),img.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),img.naturalHeight], null)], null));
} else {
var temp__5825__auto____$4 = (function (){var G__56733 = target.closest("a");
if((G__56733 == null)){
return null;
} else {
return G__56733.getAttribute("href");
}
})();
if(cljs.core.truth_(temp__5825__auto____$4)){
var link = temp__5825__auto____$4;
var temp__5825__auto____$5 = (function (){var and__5140__auto__ = (!(clojure.string.starts_with_QMARK_(link,"http")));
if(and__5140__auto__){
return frontend.extensions.handbooks.core.parse_key_from_href(link,parent_key);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$5)){
var to_k = temp__5825__auto____$5;
var temp__5823__auto___56982__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,to_k);
if(cljs.core.truth_(temp__5823__auto___56982__$1)){
var to_56983 = temp__5823__auto___56982__$1;
var G__56734_56984 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),to_56983,frontend.extensions.handbooks.core.display_category_title(parent)], null);
var G__56735_56985 = pane_state;
(nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__56734_56984,G__56735_56985) : nav_BANG_.call(null,G__56734_56984,G__56735_56985));
} else {
console.error("ERROR: handbook link resource not found: ",to_k,link);
}

return frontend.util.stop(e);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
})], null)], null),(function (){var temp__5825__auto____$3 = (function (){var and__5140__auto__ = (chapters_len > (1));
if(and__5140__auto__){
return chapter_current_idx;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$3)){
var idx = temp__5825__auto____$3;
var prev = (((idx === (0)))?null:(idx - (1)));
var next = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(chapters_len - (1))))?null:(idx + (1)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls.flex.justify-between.pt-4","div.controls.flex.justify-between.pt-4",-1953435199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(prev)?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("arrow-left"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","prev-chapter","help.handbook/prev-chapter",-1288661836)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__56737 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chapters__$1,prev),frontend.extensions.handbooks.core.display_category_title(parent)], null);
var G__56738 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__56737,G__56738) : nav_BANG_.call(null,G__56737,G__56738));
})], 0)):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(next)?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","next-chapter","help.handbook/next-chapter",-2061996607)], 0)),frontend.ui.icon("arrow-right")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__56739 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chapters__$1,next),frontend.extensions.handbooks.core.display_category_title(parent)], null);
var G__56740 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__56739,G__56740) : nav_BANG_.call(null,G__56739,G__56740));
})], 0)):null)], null)], null);
} else {
return null;
}
})()], null);
} else {
return null;
}
})()], null)], null);
}
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$pane_topic_detail__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56743 = cljs.core.first(args__31746__auto__);
var G__56744 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56743,G__56744) : io.factorhouse.hsx.core.obj_get.call(null,G__56743,G__56744));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"pane-topic-detail","pane-topic-detail",-426575149,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$extensions$handbooks$core$pane_topic_detail,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$pane_topic_detail = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56991__i = 0, G__56991__a = new Array(arguments.length -  0);
while (G__56991__i < G__56991__a.length) {G__56991__a[G__56991__i] = arguments[G__56991__i + 0]; ++G__56991__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56991__a,0,null);
} 
return frontend$extensions$handbooks$core$pane_topic_detail__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$pane_topic_detail.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$pane_topic_detail.cljs$lang$applyTo = (function (arglist__56992){
var args__31746__auto__ = cljs.core.seq(arglist__56992);
return frontend$extensions$handbooks$core$pane_topic_detail__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$pane_topic_detail.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$pane_topic_detail__delegate;
return frontend$extensions$handbooks$core$pane_topic_detail;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56745 = comp__31745__auto__;
var G__56746 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56745,G__56746) : io.factorhouse.hsx.core.react_memo.call(null,G__56745,G__56746));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pane-topic-detail");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.pane_dashboard = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$pane_dashboard(handbooks_nodes,pane_state,nav_to_pane_BANG_){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,"__root");
if(cljs.core.truth_(temp__5825__auto__)){
var root = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane.dashboard-pane","div.pane.dashboard-pane",2038750316),(function (){var temp__5825__auto____$1 = new cljs.core.Keyword(null,"popular-topics","popular-topics",-562514196).cljs$core$IFn$_invoke$arity$1(root);
if(cljs.core.truth_(temp__5825__auto____$1)){
var popular_topics = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","popular-topics","help.handbook/popular-topics",-1556767001)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topics-list","div.topics-list",-199461940),(function (){var iter__5628__auto__ = (function frontend$extensions$handbooks$core$pane_dashboard_$_iter__56747(s__56748){
return (new cljs.core.LazySeq(null,(function (){
var s__56748__$1 = s__56748;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__56748__$1);
if(temp__5825__auto____$2){
var s__56748__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__56748__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56748__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56750 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56749 = (0);
while(true){
if((i__56749 < size__5627__auto__)){
var topic_key = cljs.core._nth(c__5626__auto__,i__56749);
cljs.core.chunk_append(b__56750,(function (){var temp__5825__auto____$3 = (function (){var and__5140__auto__ = typeof topic_key === 'string';
if(and__5140__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,camel_snake_kebab.core.__GT_snake_case_string(frontend.util.safe_lower_case(topic_key)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$3)){
var topic = temp__5825__auto____$3;
return frontend.extensions.handbooks.core.topic_card(topic,((function (i__56749,topic,temp__5825__auto____$3,topic_key,c__5626__auto__,size__5627__auto__,b__56750,s__56748__$2,temp__5825__auto____$2,popular_topics,temp__5825__auto____$1,root,temp__5825__auto__){
return (function (){
var G__56753 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","title","help.handbook/title",-526670324)], 0))], null);
var G__56754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null);
return (nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2(G__56753,G__56754) : nav_to_pane_BANG_.call(null,G__56753,G__56754));
});})(i__56749,topic,temp__5825__auto____$3,topic_key,c__5626__auto__,size__5627__auto__,b__56750,s__56748__$2,temp__5825__auto____$2,popular_topics,temp__5825__auto____$1,root,temp__5825__auto__))
,null);
} else {
return null;
}
})());

var G__56999 = (i__56749 + (1));
i__56749 = G__56999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56750),frontend$extensions$handbooks$core$pane_dashboard_$_iter__56747(cljs.core.chunk_rest(s__56748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56750),null);
}
} else {
var topic_key = cljs.core.first(s__56748__$2);
return cljs.core.cons((function (){var temp__5825__auto____$3 = (function (){var and__5140__auto__ = typeof topic_key === 'string';
if(and__5140__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,camel_snake_kebab.core.__GT_snake_case_string(frontend.util.safe_lower_case(topic_key)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$3)){
var topic = temp__5825__auto____$3;
return frontend.extensions.handbooks.core.topic_card(topic,((function (topic,temp__5825__auto____$3,topic_key,s__56748__$2,temp__5825__auto____$2,popular_topics,temp__5825__auto____$1,root,temp__5825__auto__){
return (function (){
var G__56755 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","title","help.handbook/title",-526670324)], 0))], null);
var G__56756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null);
return (nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2(G__56755,G__56756) : nav_to_pane_BANG_.call(null,G__56755,G__56756));
});})(topic,temp__5825__auto____$3,topic_key,s__56748__$2,temp__5825__auto____$2,popular_topics,temp__5825__auto____$1,root,temp__5825__auto__))
,null);
} else {
return null;
}
})(),frontend$extensions$handbooks$core$pane_dashboard_$_iter__56747(cljs.core.rest(s__56748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(popular_topics);
})()], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","help-categories","help.handbook/help-categories",-1328822928)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.categories-list","div.categories-list",-1909249109),(function (){var categories = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(root);
var categories__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(categories),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.shortcuts","label","help.shortcuts/label",827224244)], 0))], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","shortcuts-count","help.handbook/shortcuts-count",-2055899325),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.config._STAR_config))))], 0))], null),new cljs.core.Keyword(null,"color","color",1011675173),"#2563EB",new cljs.core.Keyword(null,"icon","icon",1679606541),"command"], null));
var iter__5628__auto__ = (function frontend$extensions$handbooks$core$pane_dashboard_$_iter__56759(s__56760){
return (new cljs.core.LazySeq(null,(function (){
var s__56760__$1 = s__56760;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__56760__$1);
if(temp__5825__auto____$1){
var s__56760__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56760__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56760__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56762 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56761 = (0);
while(true){
if((i__56761 < size__5627__auto__)){
var map__56763 = cljs.core._nth(c__5626__auto__,i__56761);
var map__56763__$1 = cljs.core.__destructure_map(map__56763);
var category = map__56763__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var _title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"_title","_title",-1401898184));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var total = (cljs.core.truth_(cljs.core.counted_QMARK_)?cljs.core.count(children):(0));
cljs.core.chunk_append(b__56762,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.category-card.text-left","button.category-card.text-left",-2091900834),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),(function (){var or__5142__auto__ = frontend.ui.__GT_block_background_color(color);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "var(--ls-secondary-background-color)";
}
})()], null),new cljs.core.Keyword(null,"data-total","data-total",1198476295),total,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56761,total,map__56763,map__56763__$1,category,key,_title,children,color,icon,c__5626__auto__,size__5627__auto__,b__56762,s__56760__$2,temp__5825__auto____$1,categories,categories__$1,root,temp__5825__auto__){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504))){
frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));

frontend.state.open_right_sidebar_BANG_();

return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),"shortcut-settings",new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734));
} else {
var G__56766 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topics","topics",625768208),category,frontend.extensions.handbooks.core.display_category_title(category)], null);
var G__56767 = pane_state;
return (nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2(G__56766,G__56767) : nav_to_pane_BANG_.call(null,G__56766,G__56767));
}
});})(i__56761,total,map__56763,map__56763__$1,category,key,_title,children,color,icon,c__5626__auto__,size__5627__auto__,b__56762,s__56760__$2,temp__5825__auto____$1,categories,categories__$1,root,temp__5825__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon-wrap","div.icon-wrap",1583346389),frontend.ui.icon((function (){var or__5142__auto__ = icon;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "chart-bubble";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-wrap","div.text-wrap",-1396076251),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.extensions.handbooks.core.display_category_title(category)], null),((cljs.core.vector_QMARK_(children))?children:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","topics","help.handbook/topics",-526418843)], 0)))))], null)
)], null)], null));

var G__57006 = (i__56761 + (1));
i__56761 = G__57006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56762),frontend$extensions$handbooks$core$pane_dashboard_$_iter__56759(cljs.core.chunk_rest(s__56760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56762),null);
}
} else {
var map__56770 = cljs.core.first(s__56760__$2);
var map__56770__$1 = cljs.core.__destructure_map(map__56770);
var category = map__56770__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56770__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var _title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56770__$1,new cljs.core.Keyword(null,"_title","_title",-1401898184));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56770__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56770__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var total = (cljs.core.truth_(cljs.core.counted_QMARK_)?cljs.core.count(children):(0));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.category-card.text-left","button.category-card.text-left",-2091900834),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),(function (){var or__5142__auto__ = frontend.ui.__GT_block_background_color(color);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "var(--ls-secondary-background-color)";
}
})()], null),new cljs.core.Keyword(null,"data-total","data-total",1198476295),total,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (total,map__56770,map__56770__$1,category,key,_title,children,color,icon,s__56760__$2,temp__5825__auto____$1,categories,categories__$1,root,temp__5825__auto__){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504))){
frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));

frontend.state.open_right_sidebar_BANG_();

return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),"shortcut-settings",new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734));
} else {
var G__56771 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topics","topics",625768208),category,frontend.extensions.handbooks.core.display_category_title(category)], null);
var G__56772 = pane_state;
return (nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2(G__56771,G__56772) : nav_to_pane_BANG_.call(null,G__56771,G__56772));
}
});})(total,map__56770,map__56770__$1,category,key,_title,children,color,icon,s__56760__$2,temp__5825__auto____$1,categories,categories__$1,root,temp__5825__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon-wrap","div.icon-wrap",1583346389),frontend.ui.icon((function (){var or__5142__auto__ = icon;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "chart-bubble";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-wrap","div.text-wrap",-1396076251),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.extensions.handbooks.core.display_category_title(category)], null),((cljs.core.vector_QMARK_(children))?children:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","topics","help.handbook/topics",-526418843)], 0)))))], null)
)], null)], null),frontend$extensions$handbooks$core$pane_dashboard_$_iter__56759(cljs.core.rest(s__56760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(categories__$1);
})()], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$pane_dashboard__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56775 = cljs.core.first(args__31746__auto__);
var G__56776 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56775,G__56776) : io.factorhouse.hsx.core.obj_get.call(null,G__56775,G__56776));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pane-dashboard","pane-dashboard",1899422740,null),args__31746__auto__),frontend$extensions$handbooks$core$pane_dashboard,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$pane_dashboard = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57013__i = 0, G__57013__a = new Array(arguments.length -  0);
while (G__57013__i < G__57013__a.length) {G__57013__a[G__57013__i] = arguments[G__57013__i + 0]; ++G__57013__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57013__a,0,null);
} 
return frontend$extensions$handbooks$core$pane_dashboard__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$pane_dashboard.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$pane_dashboard.cljs$lang$applyTo = (function (arglist__57014){
var args__31746__auto__ = cljs.core.seq(arglist__57014);
return frontend$extensions$handbooks$core$pane_dashboard__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$pane_dashboard.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$pane_dashboard__delegate;
return frontend$extensions$handbooks$core$pane_dashboard;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56777 = comp__31745__auto__;
var G__56778 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56777,G__56778) : io.factorhouse.hsx.core.react_memo.call(null,G__56777,G__56778));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pane-dashboard");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.pane_settings = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$pane_settings(dev_watch_QMARK_,set_dev_watch_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane.pane-settings","div.pane.pane-settings",526552091),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flex.items-center.space-x-3.mb-0","p.flex.items-center.space-x-3.mb-0",-958428664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","writing-mode","help.handbook/writing-mode",-812349596)], 0))], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(dev_watch_QMARK_,(function (){
var G__56779 = cljs.core.not(dev_watch_QMARK_);
return (set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56779) : set_dev_watch_QMARK_.call(null,G__56779));
}),true)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-30","small.opacity-30",1639840511),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","resources-from","help.handbook/resources-from",-603735296),frontend.extensions.handbooks.core.get_handbooks_endpoint("/")], 0))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$pane_settings__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56780 = cljs.core.first(args__31746__auto__);
var G__56781 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56780,G__56781) : io.factorhouse.hsx.core.obj_get.call(null,G__56780,G__56781));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pane-settings","pane-settings",1423077978,null),args__31746__auto__),frontend$extensions$handbooks$core$pane_settings,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$pane_settings = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57015__i = 0, G__57015__a = new Array(arguments.length -  0);
while (G__57015__i < G__57015__a.length) {G__57015__a[G__57015__i] = arguments[G__57015__i + 0]; ++G__57015__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57015__a,0,null);
} 
return frontend$extensions$handbooks$core$pane_settings__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$pane_settings.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$pane_settings.cljs$lang$applyTo = (function (arglist__57016){
var args__31746__auto__ = cljs.core.seq(arglist__57016);
return frontend$extensions$handbooks$core$pane_settings__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$pane_settings.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$pane_settings__delegate;
return frontend$extensions$handbooks$core$pane_settings;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56782 = comp__31745__auto__;
var G__56783 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56782,G__56783) : io.factorhouse.hsx.core.react_memo.call(null,G__56782,G__56783));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pane-settings");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.search_bar = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$search_bar(pane_state,nav_BANG_,handbooks_nodes,search_state,set_search_state_BANG_){
var _STAR_input_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__56790 = logseq.shui.hooks.use_state("");
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56790,(0),null);
var set_q_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56790,(1),null);
var vec__56793 = logseq.shui.hooks.use_state(null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56793,(0),null);
var set_results_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56793,(1),null);
var vec__56796 = logseq.shui.hooks.use_state((0));
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56796,(0),null);
var set_selected_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56796,(1),null);
var select_fn_BANG_ = (function (p1__56784_SHARP_){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(results);
if(and__5140__auto__){
return (cljs.core.count(results) - (1));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var ldx = temp__5825__auto__;
var G__56799 = (function (){var G__56800 = p1__56784_SHARP_;
var G__56800__$1 = (((G__56800 instanceof cljs.core.Keyword))?G__56800.fqn:null);
switch (G__56800__$1) {
case "up":
if((selected === (0))){
return ldx;
} else {
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((selected - (1)),(0));
}

break;
case "down":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,ldx)){
return (0);
} else {
return cljs.core.min.cljs$core$IFn$_invoke$arity$2((selected + (1)),ldx);
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
})();
return (set_selected_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_BANG_.cljs$core$IFn$_invoke$arity$1(G__56799) : set_selected_BANG_.call(null,G__56799));
} else {
return null;
}
});
var q__$1 = frontend.util.trim_safe(q);
var active_QMARK_ = (!(clojure.string.blank_QMARK_(frontend.util.trim_safe(q__$1))));
var reset_q_BANG_ = (function (){
var G__56803 = (logseq.shui.hooks.deref(_STAR_input_ref).value = "");
return (set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1(G__56803) : set_q_BANG_.call(null,G__56803));
});
var focus_q_BANG_ = (function (){
var G__56806 = logseq.shui.hooks.deref(_STAR_input_ref);
if((G__56806 == null)){
return null;
} else {
return G__56806.focus();
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
return focus_q_BANG_();
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane_state], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var pane_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.second(pane_state));
var pane_nodes__$1 = (function (){var and__5140__auto__ = cljs.core.seq(pane_nodes);
if(and__5140__auto__){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56785_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__56785_SHARP_),p1__56785_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_nodes], 0));
} else {
return and__5140__auto__;
}
})();
var G__56808_57018 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_], null)], 0));
(set_search_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__56808_57018) : set_search_state_BANG_.call(null,G__56808_57018));

if(((cljs.core.seq(handbooks_nodes)) && (active_QMARK_))){
var G__56809_57019 = (function (){var G__56810 = (function (){var or__5142__auto__ = pane_nodes__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,"__root"));
}
})();
var G__56811 = q__$1;
var G__56812 = new cljs.core.Keyword(null,"limit","limit",-1355822363);
var G__56813 = (30);
var G__56814 = new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723);
var G__56815 = new cljs.core.Keyword(null,"title","title",636505583);
return (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6(G__56810,G__56811,G__56812,G__56813,G__56814,G__56815) : frontend.search.fuzzy_search.call(null,G__56810,G__56811,G__56812,G__56813,G__56814,G__56815));
})();
(set_results_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_results_BANG_.cljs$core$IFn$_invoke$arity$1(G__56809_57019) : set_results_BANG_.call(null,G__56809_57019));
} else {
(set_results_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_results_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_results_BANG_.call(null,null));
}

return (set_selected_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_BANG_.cljs$core$IFn$_invoke$arity$1((0)) : set_selected_BANG_.call(null,(0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$1], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search","div.search",445557581),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-wrap.relative","div.input-wrap.relative",138977433),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.absolute.opacity-90","span.icon.absolute.opacity-90",-1332927795),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(6),new cljs.core.Keyword(null,"left","left",-399115937),(7)], null)], null),frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","search-placeholder","help.handbook/search-placeholder",-1090877804)], 0)),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"default-value","default-value",232220170),q__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56786_SHARP_){
var G__56817 = frontend.util.evalue(p1__56786_SHARP_);
return (set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1(G__56817) : set_q_BANG_.call(null,G__56817));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__56787_SHARP_){
var G__56818 = p1__56787_SHARP_.keyCode;
switch (G__56818) {
case (27):
if((!(active_QMARK_))){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));
} else {
return reset_q_BANG_();
}

break;
case (38):
frontend.util.stop(p1__56787_SHARP_);

return select_fn_BANG_(new cljs.core.Keyword(null,"up","up",-269712113));

break;
case (40):
frontend.util.stop(p1__56787_SHARP_);

return select_fn_BANG_(new cljs.core.Keyword(null,"down","down",1565245570));

break;
case (13):
var temp__5825__auto__ = (function (){var and__5140__auto__ = active_QMARK_;
if(and__5140__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,selected);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var topic = temp__5825__auto__;
frontend.util.stop(p1__56787_SHARP_);

var G__56819 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic)], null);
var G__56820 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__56819,G__56820) : nav_BANG_.call(null,G__56819,G__56820));
} else {
return null;
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
}),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_input_ref], null)], null),((active_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.icon.absolute.opacity-50.hover:opacity-80.select-none","button.icon.absolute.opacity-50.hover:opacity-80.select-none",617511826),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),(6),new cljs.core.Keyword(null,"top","top",-1856271961),(7)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
reset_q_BANG_();

return focus_q_BANG_();
})], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null))], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(search_state))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results-wrap","div.search-results-wrap",-535163367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.results-wrap","div.results-wrap",-1678336586),(function (){var iter__5628__auto__ = (function frontend$extensions$handbooks$core$search_bar_$_iter__56821(s__56822){
return (new cljs.core.LazySeq(null,(function (){
var s__56822__$1 = s__56822;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56822__$1);
if(temp__5825__auto__){
var s__56822__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56822__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56822__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56824 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56823 = (0);
while(true){
if((i__56823 < size__5627__auto__)){
var vec__56825 = cljs.core._nth(c__5626__auto__,i__56823);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56825,(0),null);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56825,(1),null);
cljs.core.chunk_append(b__56824,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.topic_card,topic,((function (i__56823,vec__56825,idx,topic,c__5626__auto__,size__5627__auto__,b__56824,s__56822__$2,temp__5825__auto__,_STAR_input_ref,vec__56790,q,set_q_BANG_,vec__56793,results,set_results_BANG_,vec__56796,selected,set_selected_BANG_,select_fn_BANG_,q__$1,active_QMARK_,reset_q_BANG_,focus_q_BANG_){
return (function (){
var G__56828 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic)], null);
var G__56829 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__56828,G__56829) : nav_BANG_.call(null,G__56828,G__56829));
});})(i__56823,vec__56825,idx,topic,c__5626__auto__,size__5627__auto__,b__56824,s__56822__$2,temp__5825__auto__,_STAR_input_ref,vec__56790,q,set_q_BANG_,vec__56793,results,set_results_BANG_,vec__56796,selected,set_selected_BANG_,select_fn_BANG_,q__$1,active_QMARK_,reset_q_BANG_,focus_q_BANG_))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,idx)], null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)], null)));

var G__57021 = (i__56823 + (1));
i__56823 = G__57021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56824),frontend$extensions$handbooks$core$search_bar_$_iter__56821(cljs.core.chunk_rest(s__56822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56824),null);
}
} else {
var vec__56831 = cljs.core.first(s__56822__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56831,(0),null);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56831,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.topic_card,topic,((function (vec__56831,idx,topic,s__56822__$2,temp__5825__auto__,_STAR_input_ref,vec__56790,q,set_q_BANG_,vec__56793,results,set_results_BANG_,vec__56796,selected,set_selected_BANG_,select_fn_BANG_,q__$1,active_QMARK_,reset_q_BANG_,focus_q_BANG_){
return (function (){
var G__56836 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic)], null);
var G__56837 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__56836,G__56837) : nav_BANG_.call(null,G__56836,G__56837));
});})(vec__56831,idx,topic,s__56822__$2,temp__5825__auto__,_STAR_input_ref,vec__56790,q,set_q_BANG_,vec__56793,results,set_results_BANG_,vec__56796,selected,set_selected_BANG_,select_fn_BANG_,q__$1,active_QMARK_,reset_q_BANG_,focus_q_BANG_))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,idx)], null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)], null)),frontend$extensions$handbooks$core$search_bar_$_iter__56821(cljs.core.rest(s__56822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(results));
})()], null)], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$search_bar__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56838 = cljs.core.first(args__31746__auto__);
var G__56839 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56838,G__56839) : io.factorhouse.hsx.core.obj_get.call(null,G__56838,G__56839));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search-bar","search-bar",1847890618,null),args__31746__auto__),frontend$extensions$handbooks$core$search_bar,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$search_bar = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57022__i = 0, G__57022__a = new Array(arguments.length -  0);
while (G__57022__i < G__57022__a.length) {G__57022__a[G__57022__i] = arguments[G__57022__i + 0]; ++G__57022__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57022__a,0,null);
} 
return frontend$extensions$handbooks$core$search_bar__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$search_bar.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$search_bar.cljs$lang$applyTo = (function (arglist__57023){
var args__31746__auto__ = cljs.core.seq(arglist__57023);
return frontend$extensions$handbooks$core$search_bar__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$search_bar.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$search_bar__delegate;
return frontend$extensions$handbooks$core$search_bar;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56840 = comp__31745__auto__;
var G__56841 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56840,G__56841) : io.factorhouse.hsx.core.react_memo.call(null,G__56840,G__56841));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search-bar");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.link_card = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$link_card(opts,child){
var map__56842 = opts;
var map__56842__$1 = cljs.core.__destructure_map(map__56842);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56842__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.link-card","div.link-card",1286249499),(function (){var G__56843 = opts;
if(typeof href === 'string'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56843,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.util.open_url(href);
}));
} else {
return G__56843;
}
})(),child], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$link_card__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56844 = cljs.core.first(args__31746__auto__);
var G__56845 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56844,G__56845) : io.factorhouse.hsx.core.obj_get.call(null,G__56844,G__56845));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"link-card","link-card",414695646,null),args__31746__auto__),frontend$extensions$handbooks$core$link_card,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$link_card = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57024__i = 0, G__57024__a = new Array(arguments.length -  0);
while (G__57024__i < G__57024__a.length) {G__57024__a[G__57024__i] = arguments[G__57024__i + 0]; ++G__57024__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57024__a,0,null);
} 
return frontend$extensions$handbooks$core$link_card__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$link_card.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$link_card.cljs$lang$applyTo = (function (arglist__57025){
var args__31746__auto__ = cljs.core.seq(arglist__57025);
return frontend$extensions$handbooks$core$link_card__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$link_card.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$link_card__delegate;
return frontend$extensions$handbooks$core$link_card;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56846 = comp__31745__auto__;
var G__56847 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56846,G__56847) : io.factorhouse.hsx.core.react_memo.call(null,G__56846,G__56847));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"link-card");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.panes_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.pane_dashboard], null),new cljs.core.Keyword(null,"topics","topics",625768208),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.pane_category_topics], null),new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.pane_topic_detail], null),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.pane_settings], null)], null);
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.handbooks !== 'undefined') && (typeof frontend.extensions.handbooks.core !== 'undefined') && (typeof frontend.extensions.handbooks.core.discord_endpoint !== 'undefined')){
} else {
frontend.extensions.handbooks.core.discord_endpoint = "https://plugins.logseq.io/ds";
}
frontend.extensions.handbooks.core.footer_link_cards = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$footer_link_cards(){
var vec__56850 = logseq.shui.hooks.use_atom(frontend.extensions.handbooks.core._STAR_config);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56850,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56850,(1),null);
var discord_count = new cljs.core.Keyword(null,"discord-online","discord-online",2134040021).cljs$core$IFn$_invoke$arity$1(config);
logseq.shui.hooks.use_effect_BANG_((function (){
if((((discord_count == null)) || (((Date.now() - new cljs.core.Keyword(null,"discord-online-created","discord-online-created",-1284739526).cljs$core$IFn$_invoke$arity$1(config)) > (((10) * (60)) * (1000)))))){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.fetch(frontend.extensions.handbooks.core.discord_endpoint),(function (p1__56848_SHARP_){
return p1__56848_SHARP_.json();
})),(function (p1__56849_SHARP_){
var temp__5825__auto__ = p1__56849_SHARP_.approximate_presence_count;
if(cljs.core.truth_(temp__5825__auto__)){
var count = temp__5825__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.extensions.handbooks.core._STAR_config,cljs.core.assoc,new cljs.core.Keyword(null,"discord-online","discord-online",2134040021),frontend.context.i18n.locale_format_number.cljs$core$IFn$_invoke$arity$1(count),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"discord-online-created","discord-online-created",-1284739526),Date.now()], 0));
} else {
return null;
}
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [discord_count], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.space-x-3","div.flex.space-x-3",1986561232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"4px"], null)], null),frontend.extensions.handbooks.core.link_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.gg/KpN4eHY"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner.flex.space-x-1.flex-col","div.inner.flex.space-x-1.flex-col",1191635754),frontend.ui.icon("brand-discord",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-30",new cljs.core.Keyword(null,"size","size",1098693007),(26)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.font-medium.py-1","h1.font-medium.py-1",255670902),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","chat-on-discord","help.handbook/chat-on-discord",-668890804)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xs.leading-4.opacity-40","h2.text-xs.leading-4.opacity-40",-972896950),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","chat-on-discord-desc","help.handbook/chat-on-discord-desc",186280418)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.flex.items-center.pt-1.5","small.flex.items-center.pt-1.5",-524446070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.block.rounded-full.bg-green-500","i.block.rounded-full.bg-green-500",1711595098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8px",new cljs.core.Keyword(null,"height","height",1025178622),"8px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-2.opacity-90","span.pl-2.opacity-90",-756222661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.opacity-60","strong.opacity-60",972256666),(function (){var or__5142__auto__ = discord_count;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "?";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70.font-light","span.opacity-70.font-light",1749010421),(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","users-online","help.handbook/users-online",1218235802)], 0))))], null)], null)], null)], null)),frontend.extensions.handbooks.core.link_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner.flex.space-x-1.flex-col","div.inner.flex.space-x-1.flex-col",1191635754),frontend.ui.icon("message-dots",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-30",new cljs.core.Keyword(null,"size","size",1098693007),(26)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.font-medium.py-1","h1.font-medium.py-1",255670902),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","visit-the-forum","help.handbook/visit-the-forum",-113066059)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xs.leading-4.opacity-40","h2.text-xs.leading-4.opacity-40",-972896950),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","visit-the-forum-desc","help.handbook/visit-the-forum-desc",2036020393)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.flex.items-center.pt-1.5","small.flex.items-center.pt-1.5",-524446070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.items-center.opacity-50","i.flex.items-center.opacity-50",279473892),frontend.ui.icon("bolt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1.opacity-90","span.pl-1.opacity-90",1964490413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.opacity-60","strong.opacity-60",972256666),"800+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70.font-light","span.opacity-70.font-light",1749010421),(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","monthly-posts","help.handbook/monthly-posts",-654603370)], 0))))], null)], null)], null)], null))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$footer_link_cards__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56853 = cljs.core.first(args__31746__auto__);
var G__56854 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56853,G__56854) : io.factorhouse.hsx.core.obj_get.call(null,G__56853,G__56854));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"footer-link-cards","footer-link-cards",1590781957,null),args__31746__auto__),frontend$extensions$handbooks$core$footer_link_cards,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$footer_link_cards = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57026__i = 0, G__57026__a = new Array(arguments.length -  0);
while (G__57026__i < G__57026__a.length) {G__57026__a[G__57026__i] = arguments[G__57026__i + 0]; ++G__57026__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57026__a,0,null);
} 
return frontend$extensions$handbooks$core$footer_link_cards__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$footer_link_cards.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$footer_link_cards.cljs$lang$applyTo = (function (arglist__57027){
var args__31746__auto__ = cljs.core.seq(arglist__57027);
return frontend$extensions$handbooks$core$footer_link_cards__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$footer_link_cards.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$footer_link_cards__delegate;
return frontend$extensions$handbooks$core$footer_link_cards;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56855 = comp__31745__auto__;
var G__56856 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56855,G__56856) : io.factorhouse.hsx.core.react_memo.call(null,G__56855,G__56856));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"footer-link-cards");

return comp__31745__auto__;
})();
frontend.extensions.handbooks.core.content = (function (){var render_fn__31744__auto__ = (function frontend$extensions$handbooks$core$content(){
var vec__56863 = logseq.shui.hooks.use_state(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),null,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","title","help.handbook/title",-526670324)], 0))], null));
var active_pane_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56863,(0),null);
var set_active_pane_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56863,(1),null);
var vec__56866 = logseq.shui.hooks.use_state(null);
var handbooks_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56866,(0),null);
var set_handbooks_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56866,(1),null);
var vec__56869 = logseq.shui.hooks.use_state(null);
var handbooks_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56869,(0),null);
var set_handbooks_nodes_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56869,(1),null);
var vec__56872 = logseq.shui.hooks.use_state(cljs.core.List.EMPTY);
var history_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56872,(0),null);
var set_history_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56872,(1),null);
var vec__56875 = logseq.shui.hooks.use_state(frontend.storage.get(new cljs.core.Keyword(null,"handbooks-dev-watch?","handbooks-dev-watch?",-372916840)));
var dev_watch_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56875,(0),null);
var set_dev_watch_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56875,(1),null);
var vec__56878 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null));
var search_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56878,(0),null);
var set_search_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56878,(1),null);
var reset_handbooks_BANG_ = (function (){
var G__56884 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"data","data",-232669377),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null);
return (set_handbooks_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_handbooks_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__56884) : set_handbooks_state_BANG_.call(null,G__56884));
});
var update_handbooks_BANG_ = (function (p1__56857_SHARP_){
var G__56885 = (function (v){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,p1__56857_SHARP_], 0));
});
return (set_handbooks_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_handbooks_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__56885) : set_handbooks_state_BANG_.call(null,G__56885));
});
var load_handbooks_BANG_ = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(handbooks_state))){
return null;
} else {
reset_handbooks_BANG_();

update_handbooks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"pending","pending",-220036727)], null));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch(frontend.extensions.handbooks.core.get_handbooks_endpoint("/handbooks.edn"))),(function (res){
return promesa.protocols._mcat(promesa.protocols._promise(res.text()),(function (data){
return promesa.protocols._promise(update_handbooks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(data)], null)));
}));
}));
})),(function (p1__56858_SHARP_){
return update_handbooks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56858_SHARP_))], null));
})),(function (){
return update_handbooks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503)], null));
}));
}
});
var active_pane_name = cljs.core.first(active_pane_state);
var pane_render = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.extensions.handbooks.core.panes_mapping,active_pane_name));
var pane_dashboard_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),active_pane_name);
var pane_settings_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings","settings",1556144875),active_pane_name);
var pane_topic_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),active_pane_name);
var force_nav_dashboard_BANG_ = (function (){
var G__56886_57028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null);
(set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__56886_57028) : set_active_pane_state_BANG_.call(null,G__56886_57028));

var G__56887 = cljs.core.List.EMPTY;
return (set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__56887) : set_history_state_BANG_.call(null,G__56887));
});
var handbooks_loaded_QMARK_ = ((cljs.core.seq(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(handbooks_state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(handbooks_state))));
var handbooks_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(handbooks_state);
var nav_to_pane_BANG_ = (function (next_state,prev_state){
var next_key_57029 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(next_state));
var prev_key_57030 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(prev_state));
var in_chapters_QMARK__57031 = (function (){var and__5140__auto__ = prev_key_57030;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = next_key_57029;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = clojure.string.includes_QMARK_(prev_key_57030,"/");
if(and__5140__auto____$2){
var or__5142__auto__ = clojure.string.starts_with_QMARK_(next_key_57029,prev_key_57030);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.handbooks.core.parse_parent_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_key_57030,next_key_57029], null)));
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(in_chapters_QMARK__57031)){
} else {
var G__56888_57032 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(history_state),prev_state);
(set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__56888_57032) : set_history_state_BANG_.call(null,G__56888_57032));
}

return (set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1(next_state) : set_active_pane_state_BANG_.call(null,next_state));
});
var vec__56881 = logseq.shui.hooks.use_state(false);
var scrolled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56881,(0),null);
var set_scrolled_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56881,(1),null);
var on_scroll = logseq.shui.hooks.use_memo((function (){
var G__56889 = (function (e){
var G__56891 = (!((e.target.scrollTop < (10))));
return (set_scrolled_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_scrolled_BANG_.cljs$core$IFn$_invoke$arity$1(G__56891) : set_scrolled_BANG_.call(null,G__56891));
});
var G__56890 = (100);
return (frontend.util.debounce.cljs$core$IFn$_invoke$arity$2 ? frontend.util.debounce.cljs$core$IFn$_invoke$arity$2(G__56889,G__56890) : frontend.util.debounce.call(null,G__56889,G__56890));
}),cljs.core.PersistentVector.EMPTY);
logseq.shui.hooks.use_effect_BANG_((function (){
return load_handbooks_BANG_();
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.seq(handbooks_nodes)){
var c = frontend.state.get_state(new cljs.core.Keyword("handbook","route-chan","handbook/route-chan",1649058330));
var c__23549__auto___57033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23550__auto__ = (function (){var switch__23444__auto__ = (function (state_56917){
var state_val_56918 = (state_56917[(1)]);
if((state_val_56918 === (7))){
var inst_56913 = (state_56917[(2)]);
var state_56917__$1 = state_56917;
var statearr_56919_57034 = state_56917__$1;
(statearr_56919_57034[(2)] = inst_56913);

(statearr_56919_57034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (1))){
var state_56917__$1 = state_56917;
var statearr_56920_57035 = state_56917__$1;
(statearr_56920_57035[(2)] = null);

(statearr_56920_57035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (4))){
var inst_56894 = (state_56917[(7)]);
var inst_56894__$1 = (state_56917[(2)]);
var inst_56895 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_56894__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var state_56917__$1 = (function (){var statearr_56921 = state_56917;
(statearr_56921[(7)] = inst_56894__$1);

return statearr_56921;
})();
if(inst_56895){
var statearr_56922_57036 = state_56917__$1;
(statearr_56922_57036[(1)] = (5));

} else {
var statearr_56923_57037 = state_56917__$1;
(statearr_56923_57037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (6))){
var state_56917__$1 = state_56917;
var statearr_56924_57038 = state_56917__$1;
(statearr_56924_57038[(2)] = null);

(statearr_56924_57038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (3))){
var inst_56915 = (state_56917[(2)]);
var state_56917__$1 = state_56917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56917__$1,inst_56915);
} else {
if((state_val_56918 === (2))){
var state_56917__$1 = state_56917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56917__$1,(4),c);
} else {
if((state_val_56918 === (9))){
var state_56917__$1 = state_56917;
var statearr_56925_57039 = state_56917__$1;
(statearr_56925_57039[(2)] = null);

(statearr_56925_57039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (5))){
var inst_56894 = (state_56917[(7)]);
var inst_56897 = (state_56917[(8)]);
var inst_56897__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,inst_56894);
var state_56917__$1 = (function (){var statearr_56926 = state_56917;
(statearr_56926[(8)] = inst_56897__$1);

return statearr_56926;
})();
if(cljs.core.truth_(inst_56897__$1)){
var statearr_56927_57040 = state_56917__$1;
(statearr_56927_57040[(1)] = (8));

} else {
var statearr_56928_57041 = state_56917__$1;
(statearr_56928_57041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (10))){
var inst_56909 = (state_56917[(2)]);
var state_56917__$1 = (function (){var statearr_56929 = state_56917;
(statearr_56929[(9)] = inst_56909);

return statearr_56929;
})();
var statearr_56930_57042 = state_56917__$1;
(statearr_56930_57042[(2)] = null);

(statearr_56930_57042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (8))){
var inst_56897 = (state_56917[(8)]);
var inst_56899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56900 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","title","help.handbook/title",-526670324)], 0));
var inst_56901 = [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),inst_56897,inst_56900];
var inst_56902 = (new cljs.core.PersistentVector(null,3,(5),inst_56899,inst_56901,null));
var inst_56903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56904 = [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)];
var inst_56905 = (new cljs.core.PersistentVector(null,1,(5),inst_56903,inst_56904,null));
var inst_56906 = nav_to_pane_BANG_(inst_56902,inst_56905);
var state_56917__$1 = state_56917;
var statearr_56931_57043 = state_56917__$1;
(statearr_56931_57043[(2)] = inst_56906);

(statearr_56931_57043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__ = null;
var frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____0 = (function (){
var statearr_56932 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56932[(0)] = frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__);

(statearr_56932[(1)] = (1));

return statearr_56932;
});
var frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____1 = (function (state_56917){
while(true){
var ret_value__23446__auto__ = (function (){try{while(true){
var result__23447__auto__ = switch__23444__auto__(state_56917);
if(cljs.core.keyword_identical_QMARK_(result__23447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23447__auto__;
}
break;
}
}catch (e56933){var ex__23448__auto__ = e56933;
var statearr_56934_57044 = state_56917;
(statearr_56934_57044[(2)] = ex__23448__auto__);


if(cljs.core.seq((state_56917[(4)]))){
var statearr_56935_57045 = state_56917;
(statearr_56935_57045[(1)] = cljs.core.first((state_56917[(4)])));

} else {
throw ex__23448__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57046 = state_56917;
state_56917 = G__57046;
continue;
} else {
return ret_value__23446__auto__;
}
break;
}
});
frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__ = function(state_56917){
switch(arguments.length){
case 0:
return frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____0.call(this);
case 1:
return frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____1.call(this,state_56917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____0;
frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____1;
return frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__;
})()
})();
var state__23551__auto__ = (function (){var statearr_56936 = f__23550__auto__();
(statearr_56936[(6)] = c__23549__auto___57033);

return statearr_56936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23551__auto__);
}));


return (function (){
var c__23549__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23550__auto__ = (function (){var switch__23444__auto__ = (function (state_56940){
var state_val_56941 = (state_56940[(1)]);
if((state_val_56941 === (1))){
var state_56940__$1 = state_56940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56940__$1,(2),c,new cljs.core.Keyword(null,"return","return",-1891502105));
} else {
if((state_val_56941 === (2))){
var inst_56938 = (state_56940[(2)]);
var state_56940__$1 = state_56940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56940__$1,inst_56938);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__ = null;
var frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____0 = (function (){
var statearr_56942 = [null,null,null,null,null,null,null];
(statearr_56942[(0)] = frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__);

(statearr_56942[(1)] = (1));

return statearr_56942;
});
var frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____1 = (function (state_56940){
while(true){
var ret_value__23446__auto__ = (function (){try{while(true){
var result__23447__auto__ = switch__23444__auto__(state_56940);
if(cljs.core.keyword_identical_QMARK_(result__23447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23447__auto__;
}
break;
}
}catch (e56943){var ex__23448__auto__ = e56943;
var statearr_56944_57047 = state_56940;
(statearr_56944_57047[(2)] = ex__23448__auto__);


if(cljs.core.seq((state_56940[(4)]))){
var statearr_56945_57048 = state_56940;
(statearr_56945_57048[(1)] = cljs.core.first((state_56940[(4)])));

} else {
throw ex__23448__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57049 = state_56940;
state_56940 = G__57049;
continue;
} else {
return ret_value__23446__auto__;
}
break;
}
});
frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__ = function(state_56940){
switch(arguments.length){
case 0:
return frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____0.call(this);
case 1:
return frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____1.call(this,state_56940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____0;
frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$handbooks$core$content_$_state_machine__23445__auto____1;
return frontend$extensions$handbooks$core$content_$_state_machine__23445__auto__;
})()
})();
var state__23551__auto__ = (function (){var statearr_56946 = f__23550__auto__();
(statearr_56946[(6)] = c__23549__auto__);

return statearr_56946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23551__auto__);
}));

return c__23549__auto__;
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handbooks_nodes], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var _STAR_cnt_len = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var check_BANG_ = (function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch(frontend.extensions.handbooks.core.get_handbooks_endpoint("/handbooks.edn"),({"method": "HEAD"}))),(function (res){
return promesa.protocols._promise((function (){var temp__5825__auto__ = res.headers.get("content-length");
if(cljs.core.truth_(temp__5825__auto__)){
var cl = temp__5825__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cnt_len),cl)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[Handbooks] dev reload!"], 0));

load_handbooks_BANG_();
} else {
}

return cljs.core.reset_BANG_(_STAR_cnt_len,cl);
} else {
return null;
}
})());
}));
})),(function (p1__56859_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[Handbooks] dev check Error:",p1__56859_SHARP_], 0));
}));
});
var timer0 = (cljs.core.truth_(dev_watch_QMARK_)?setInterval(check_BANG_,(2000)):(0));
return (function (){
return clearInterval(timer0);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dev_watch_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(handbooks_data)){
var nodes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56860_SHARP_,p2__56861_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56860_SHARP_,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__56861_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "__root";
}
})(),frontend.extensions.handbooks.core.bind_parent_key(p2__56861_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),handbooks_data));
(set_handbooks_nodes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_handbooks_nodes_BANG_.cljs$core$IFn$_invoke$arity$1(nodes) : set_handbooks_nodes_BANG_.call(null,nodes));

return (window.handbook_nodes = cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(nodes));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handbooks_data], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__handbooks-content","div.cp__handbooks-content",451699420),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search-active","search-active",913672682),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(search_state),new cljs.core.Keyword(null,"scrolled","scrolled",1345586855),scrolled_QMARK_], null)], null)),new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),on_scroll], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane-wrap","div.pane-wrap",-478929961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hd.flex.justify-between.select-none.draggable-handle","div.hd.flex.justify-between.select-none.draggable-handle",466667820),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xl.flex.items-center.font-bold","h1.text-xl.flex.items-center.font-bold",-558190775),((pane_dashboard_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","title","help.handbook/title",-526670324)], 0))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.active:opacity-80.flex.items-center.cursor-pointer","button.active:opacity-80.flex.items-center.cursor-pointer",42988709),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var prev = cljs.core.first(history_state);
var prev__$1 = (function (){var G__56947 = prev;
if((cljs.core.seq(prev) == null)){
var fexpr__56948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null);
return (fexpr__56948.cljs$core$IFn$_invoke$arity$1 ? fexpr__56948.cljs$core$IFn$_invoke$arity$1(G__56947) : fexpr__56948.call(null,G__56947));
} else {
return G__56947;
}
})();
(set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1(prev__$1) : set_active_pane_state_BANG_.call(null,prev__$1));

var G__56949 = cljs.core.rest(history_state);
return (set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__56949) : set_history_state_BANG_.call(null,G__56949));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-2.flex.items-center","span.pr-2.flex.items-center",1598272298),frontend.ui.icon("chevron-left")], null),(function (){var title = (function (){var or__5142__auto__ = cljs.core.last(active_pane_state);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","title","help.handbook/title",-526670324)], 0));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "";
}
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.truncate.title","span.truncate.title",900934232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null),title], null);
})()], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.space-x-3","div.flex.items-center.space-x-3",-322490863),(((cljs.core.count(history_state) > (1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","home","help.handbook/home",801447910)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return force_nav_dashboard_BANG_();
})], null),frontend.ui.icon("home")], null):null),((pane_topic_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","copy-topic-link","help.handbook/copy-topic-link",-778965248)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var s = (""+"logseq://handbook/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(active_pane_state))));
frontend.util.copy_to_clipboard_BANG_(s);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.block","strong.block",-1457813199),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.handbook","link-copied","help.handbook/link-copied",1254098816)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.opacity-50","label.opacity-50",-1137064458),s], null)], null),new cljs.core.Keyword(null,"success","success",1890645906));
})], null),frontend.ui.icon("copy")], null):null),(cljs.core.truth_(frontend.state.developer_mode_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","settings","nav/settings",1557080534)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return nav_to_pane_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),null,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","settings","nav/settings",1557080534)], 0))], null),active_pane_state);
})], null),frontend.ui.icon("settings")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","close","ui/close",1835153538)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));
})], null),frontend.ui.icon("x")], null)], null)], null),(((((!(pane_settings_QMARK_))) && ((!(handbooks_loaded_QMARK_)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.pt-32","div.flex.items-center.justify-center.pt-32",2082928963),((cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(handbooks_state)))?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","loading","ui/loading",-736989697)], 0))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(handbooks_state)], null))], null):null),((((pane_settings_QMARK_) || (handbooks_loaded_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((((pane_dashboard_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topics","topics",625768208),active_pane_name))))?frontend.extensions.handbooks.core.search_bar(active_pane_state,nav_to_pane_BANG_,handbooks_nodes,search_state,set_search_state_BANG_):null),(cljs.core.truth_(pane_render)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pane_render,(function (){var G__56950 = active_pane_name;
var G__56950__$1 = (((G__56950 instanceof cljs.core.Keyword))?G__56950.fqn:null);
switch (G__56950__$1) {
case "settings":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dev_watch_QMARK_,(function (p1__56862_SHARP_){
(set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__56862_SHARP_) : set_dev_watch_QMARK_.call(null,p1__56862_SHARP_));

return frontend.storage.set(new cljs.core.Keyword(null,"handbooks-dev-watch?","handbooks-dev-watch?",-372916840),p1__56862_SHARP_);
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handbooks_nodes,active_pane_state,nav_to_pane_BANG_], null);

}
})()):null)], null):null)], null),((handbooks_loaded_QMARK_)?((pane_dashboard_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ft","div.ft",883326131),frontend.extensions.handbooks.core.footer_link_cards()], null):null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$handbooks$core$content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56951 = cljs.core.first(args__31746__auto__);
var G__56952 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56951,G__56952) : io.factorhouse.hsx.core.obj_get.call(null,G__56951,G__56952));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","data-var","large-vars/data-var",1805150589),true], null)),args__31746__auto__),frontend$extensions$handbooks$core$content,args__31746__auto__,null);
}
};
var frontend$extensions$handbooks$core$content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57051__i = 0, G__57051__a = new Array(arguments.length -  0);
while (G__57051__i < G__57051__a.length) {G__57051__a[G__57051__i] = arguments[G__57051__i + 0]; ++G__57051__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57051__a,0,null);
} 
return frontend$extensions$handbooks$core$content__delegate.call(this,args__31746__auto__);};
frontend$extensions$handbooks$core$content.cljs$lang$maxFixedArity = 0;
frontend$extensions$handbooks$core$content.cljs$lang$applyTo = (function (arglist__57052){
var args__31746__auto__ = cljs.core.seq(arglist__57052);
return frontend$extensions$handbooks$core$content__delegate(args__31746__auto__);
});
frontend$extensions$handbooks$core$content.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$handbooks$core$content__delegate;
return frontend$extensions$handbooks$core$content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56953 = comp__31745__auto__;
var G__56954 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56953,G__56954) : io.factorhouse.hsx.core.react_memo.call(null,G__56953,G__56954));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"content");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.extensions.handbooks.core.js.map
