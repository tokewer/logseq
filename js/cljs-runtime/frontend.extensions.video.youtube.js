goog.provide('frontend.extensions.video.youtube');
goog.scope(function(){
  frontend.extensions.video.youtube.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.extensions.video.youtube.load_yt_script = (function frontend$extensions$video$youtube$load_yt_script(){
console.log("load yt script");

var tag = document.createElement("script");
var first_script_tag = cljs.core.first(document.getElementsByTagName("script"));
var parent_node = first_script_tag.parentNode;
(tag.src = "https://www.youtube.com/iframe_api");

return parent_node.insertBefore(tag,first_script_tag);
});
frontend.extensions.video.youtube.load_youtube_api = (function frontend$extensions$video$youtube$load_youtube_api(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(window.YT)){
cljs.core.async.close_BANG_(c);
} else {
(window.onYouTubeIframeAPIReady = (function (){
return cljs.core.async.close_BANG_(c);
}));

frontend.extensions.video.youtube.load_yt_script();
}

return c;
});
frontend.extensions.video.youtube.use_youtube_wrapper_QMARK_ = (function frontend$extensions$video$youtube$use_youtube_wrapper_QMARK_(){
return frontend.mobile.util.native_platform_QMARK_();
});
frontend.extensions.video.youtube.register_player = (function frontend$extensions$video$youtube$register_player(id,node){
try{if(cljs.core.truth_(node)){
var _STAR_player = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var player = (new window.YT.Player(node,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, ["onReady",(function (_e){
frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("youtube","players","youtube/players",1844913740)], null),(function (players){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(players,id,cljs.core.deref(_STAR_player));
}));

return console.log(id," ready");
})], null)], null))));
cljs.core.reset_BANG_(_STAR_player,player);

return player;
} else {
return null;
}
}catch (e56291){var _e = e56291;
return null;
}});
frontend.extensions.video.youtube.default_video_width = (560);
frontend.extensions.video.youtube.default_video_height = (315);
frontend.extensions.video.youtube.youtube_video = (function (){var render_fn__47251__auto__ = (function frontend$extensions$video$youtube$youtube_video(id,p__56300){
var map__56301 = p__56300;
var map__56301__$1 = cljs.core.__destructure_map(map__56301);
var _opts = map__56301__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56301__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56301__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56301__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var iframe_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56301__$1,new cljs.core.Keyword(null,"iframe-only?","iframe-only?",713892444));
var width__$1 = (function (){var or__5142__auto__ = width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.extensions.video.youtube.default_video_width;
}
})();
var height__$1 = (function (){var or__5142__auto__ = height;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.extensions.video.youtube.default_video_height;
}
})();
var origin = window.location.origin;
var origin_valid_QMARK_ = (function (){var and__5140__auto__ = typeof origin === 'string';
if(and__5140__auto__){
return cljs.core.re_matches(/^https?:\/\/.+/,origin);
} else {
return and__5140__auto__;
}
})();
var base_url = (""+"https://www.youtube.com/embed/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(id))+"?enablejsapi=1"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(origin_valid_QMARK_)?(""+"&origin="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(origin))):null)));
var direct_url = (cljs.core.truth_(start)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)):base_url);
var wrapper_url = (""+"https://logseq.com/youtube.html?v="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&enablejsapi=1");
var wrapper_url__$1 = (cljs.core.truth_(start)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(wrapper_url)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)):wrapper_url);
var url = (cljs.core.truth_(frontend.extensions.video.youtube.use_youtube_wrapper_QMARK_())?wrapper_url__$1:direct_url);
var _STAR_iframe_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(frontend.extensions.video.youtube.use_youtube_wrapper_QMARK_())){
return null;
} else {
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_56308){
var state_val_56309 = (state_56308[(1)]);
if((state_val_56309 === (1))){
var inst_56302 = frontend.extensions.video.youtube.load_youtube_api();
var state_56308__$1 = state_56308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56308__$1,(2),inst_56302);
} else {
if((state_val_56309 === (2))){
var inst_56304 = (state_56308[(2)]);
var inst_56305 = logseq.shui.hooks.deref(_STAR_iframe_ref);
var inst_56306 = frontend.extensions.video.youtube.register_player(id,inst_56305);
var state_56308__$1 = (function (){var statearr_56313 = state_56308;
(statearr_56313[(7)] = inst_56304);

return statearr_56313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56308__$1,inst_56306);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto__ = null;
var frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto____0 = (function (){
var statearr_56314 = [null,null,null,null,null,null,null,null];
(statearr_56314[(0)] = frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto__);

(statearr_56314[(1)] = (1));

return statearr_56314;
});
var frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto____1 = (function (state_56308){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_56308);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e56316){var ex__29706__auto__ = e56316;
var statearr_56317_56401 = state_56308;
(statearr_56317_56401[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_56308[(4)]))){
var statearr_56318_56402 = state_56308;
(statearr_56318_56402[(1)] = cljs.core.first((state_56308[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56403 = state_56308;
state_56308 = G__56403;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto__ = function(state_56308){
switch(arguments.length){
case 0:
return frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto____0.call(this);
case 1:
return frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto____1.call(this,state_56308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto____0;
frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto____1;
return frontend$extensions$video$youtube$youtube_video_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_56319 = f__29892__auto__();
(statearr_56319[(6)] = c__29891__auto__);

return statearr_56319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

var iframe = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"youtube-player-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_iframe_ref,new cljs.core.Keyword(null,"allow-full-screen","allow-full-screen",-1219396017),"allowfullscreen",new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",new cljs.core.Keyword(null,"referrer-policy","referrer-policy",-504499278),"strict-origin-when-cross-origin",new cljs.core.Keyword(null,"referer","referer",-1272312796),"https://logseq.com",new cljs.core.Keyword(null,"frame-border","frame-border",-1868748185),"0",new cljs.core.Keyword(null,"src","src",-1651076051),url], null)], null);
if(cljs.core.truth_(iframe_only_QMARK_)){
return iframe;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-embed-shell","div.video-embed-shell",-848349847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-embed-frame","div.video-embed-frame",1272468222),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null)], null),iframe], null)], null);
}
});
var comp__47252__auto__ = (function() { 
var frontend$extensions$video$youtube$youtube_video__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__56320 = cljs.core.first(args__47253__auto__);
var G__56321 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56320,G__56321) : io.factorhouse.hsx.core.obj_get.call(null,G__56320,G__56321));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"youtube-video","youtube-video",-1095462489,null),args__47253__auto__),frontend$extensions$video$youtube$youtube_video,args__47253__auto__,null);
}
};
var frontend$extensions$video$youtube$youtube_video = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__56405__i = 0, G__56405__a = new Array(arguments.length -  0);
while (G__56405__i < G__56405__a.length) {G__56405__a[G__56405__i] = arguments[G__56405__i + 0]; ++G__56405__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__56405__a,0,null);
} 
return frontend$extensions$video$youtube$youtube_video__delegate.call(this,args__47253__auto__);};
frontend$extensions$video$youtube$youtube_video.cljs$lang$maxFixedArity = 0;
frontend$extensions$video$youtube$youtube_video.cljs$lang$applyTo = (function (arglist__56406){
var args__47253__auto__ = cljs.core.seq(arglist__56406);
return frontend$extensions$video$youtube$youtube_video__delegate(args__47253__auto__);
});
frontend$extensions$video$youtube$youtube_video.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$video$youtube$youtube_video__delegate;
return frontend$extensions$video$youtube$youtube_video;
})()
;
var memo_comp__47254__auto__ = (function (){var G__56322 = comp__47252__auto__;
var G__56323 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56322,G__56323) : io.factorhouse.hsx.core.react_memo.call(null,G__56322,G__56323));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"youtube-video");

return comp__47252__auto__;
})();
frontend.extensions.video.youtube.seconds__GT_display = (function frontend$extensions$video$youtube$seconds__GT_display(seconds){
var seconds__$1 = (seconds | 0);
var hours = cljs.core.quot(seconds__$1,(3600));
var minutes = cljs.core.mod(cljs.core.quot(seconds__$1,(60)),(60));
var seconds__$2 = cljs.core.mod(seconds__$1,(60));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
if((((idx > (0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"00")))){
return v;
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
if((v < (10))){
return (""+"0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hours,minutes,seconds__$2], null))));
});
frontend.extensions.video.youtube.dom_after_video_node_QMARK_ = (function frontend$extensions$video$youtube$dom_after_video_node_QMARK_(video_node,target){
return (!(((video_node.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING) === (0))));
});
frontend.extensions.video.youtube.get_player = (function frontend$extensions$video$youtube$get_player(target){
if(cljs.core.truth_(frontend.extensions.video.youtube.use_youtube_wrapper_QMARK_())){
return null;
} else {
var temp__5825__auto__ = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56332_SHARP_){
return frontend.extensions.video.youtube.dom_after_video_node_QMARK_(p1__56332_SHARP_,target);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
var src = frontend.extensions.video.youtube.goog$module$goog$object.get(node,"src","");
return ((clojure.string.includes_QMARK_(src,"youtube-nocookie.com/embed")) || (((clojure.string.includes_QMARK_(src,"youtube.com/embed")) || (clojure.string.includes_QMARK_(src,"youtube.com")))));
}),document.getElementsByTagName("iframe"))));
if(cljs.core.truth_(temp__5825__auto__)){
var iframe = temp__5825__auto__;
var id = frontend.extensions.video.youtube.goog$module$goog$object.get(iframe,"id","");
var id__$1 = clojure.string.replace_first(id,/youtube-player-/,"");
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state(new cljs.core.Keyword("youtube","players","youtube/players",1844913740)),id__$1);
} else {
return null;
}
}
});
frontend.extensions.video.youtube.notify_timestamp_unavailable_BANG_ = (function frontend$extensions$video$youtube$notify_timestamp_unavailable_BANG_(){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("youtube","timestamps-not-available-mobile","youtube/timestamps-not-available-mobile",-1509703307)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
});
frontend.extensions.video.youtube.player_method = (function frontend$extensions$video$youtube$player_method(player,method){
var f = frontend.extensions.video.youtube.goog$module$goog$object.get(player,method);
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
return null;
}
});
frontend.extensions.video.youtube.timestamp = (function (){var render_fn__47251__auto__ = (function frontend$extensions$video$youtube$timestamp(seconds){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.youtube-timestamp","a.youtube-timestamp",-801845519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(frontend.extensions.video.youtube.use_youtube_wrapper_QMARK_())){
return frontend.extensions.video.youtube.notify_timestamp_unavailable_BANG_();
} else {
var temp__5825__auto__ = frontend.extensions.video.youtube.get_player(e.target);
if(cljs.core.truth_(temp__5825__auto__)){
var player = temp__5825__auto__;
var temp__5823__auto__ = frontend.extensions.video.youtube.player_method(player,"seekTo");
if(cljs.core.truth_(temp__5823__auto__)){
var seek_to = temp__5823__auto__;
return seek_to.call(player,seconds,true);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("youtube","player-not-ready","youtube/player-not-ready",-284368416)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
}
} else {
return null;
}
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.youtube-timestamp-icon","span.youtube-timestamp-icon",285281650),frontend.components.svg.clock], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.youtube-timestamp-label","span.youtube-timestamp-label",-1756616631),frontend.extensions.video.youtube.seconds__GT_display(seconds)], null)], null);
});
var comp__47252__auto__ = (function() { 
var frontend$extensions$video$youtube$timestamp__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__56359 = cljs.core.first(args__47253__auto__);
var G__56360 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56359,G__56360) : io.factorhouse.hsx.core.obj_get.call(null,G__56359,G__56360));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),args__47253__auto__),frontend$extensions$video$youtube$timestamp,args__47253__auto__,null);
}
};
var frontend$extensions$video$youtube$timestamp = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__56417__i = 0, G__56417__a = new Array(arguments.length -  0);
while (G__56417__i < G__56417__a.length) {G__56417__a[G__56417__i] = arguments[G__56417__i + 0]; ++G__56417__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__56417__a,0,null);
} 
return frontend$extensions$video$youtube$timestamp__delegate.call(this,args__47253__auto__);};
frontend$extensions$video$youtube$timestamp.cljs$lang$maxFixedArity = 0;
frontend$extensions$video$youtube$timestamp.cljs$lang$applyTo = (function (arglist__56418){
var args__47253__auto__ = cljs.core.seq(arglist__56418);
return frontend$extensions$video$youtube$timestamp__delegate(args__47253__auto__);
});
frontend$extensions$video$youtube$timestamp.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$video$youtube$timestamp__delegate;
return frontend$extensions$video$youtube$timestamp;
})()
;
var memo_comp__47254__auto__ = (function (){var G__56363 = comp__47252__auto__;
var G__56364 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56363,G__56364) : io.factorhouse.hsx.core.react_memo.call(null,G__56363,G__56364));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"timestamp");

return comp__47252__auto__;
})();
frontend.extensions.video.youtube.gen_youtube_ts_macro = (function frontend$extensions$video$youtube$gen_youtube_ts_macro(){
if(cljs.core.truth_(frontend.extensions.video.youtube.use_youtube_wrapper_QMARK_())){
frontend.extensions.video.youtube.notify_timestamp_unavailable_BANG_();

return null;
} else {
var temp__5823__auto__ = frontend.extensions.video.youtube.get_player(frontend.state.get_input());
if(cljs.core.truth_(temp__5823__auto__)){
var player = temp__5823__auto__;
var temp__5823__auto____$1 = frontend.extensions.video.youtube.player_method(player,"getCurrentTime");
if(cljs.core.truth_(temp__5823__auto____$1)){
var get_current_time = temp__5823__auto____$1;
var G__56368 = "{{youtube-timestamp %s}}";
var G__56369 = Math.floor(get_current_time.call(player));
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2(G__56368,G__56369) : frontend.util.format.call(null,G__56368,G__56369));
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("youtube","player-not-ready","youtube/player-not-ready",-284368416)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return null;
}
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("youtube","embed-first-reminder-mobile","youtube/embed-first-reminder-mobile",880058194)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return null;
} else {
return null;
}
}
}
});
frontend.extensions.video.youtube.parse_timestamp = (function frontend$extensions$video$youtube$parse_timestamp(timestamp_SINGLEQUOTE_){
var reg = /^(?:(\d+):)?([0-5]?\d):([0-5]?\d)$/;
var reg_number = /^\d+$/;
var timestamp_SINGLEQUOTE__SINGLEQUOTE_ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(timestamp_SINGLEQUOTE_));
var total_seconds = (function (){var G__56383 = cljs.core.re_matches(reg_number,timestamp_SINGLEQUOTE__SINGLEQUOTE_);
if((G__56383 == null)){
return null;
} else {
return frontend.util.safe_parse_int(G__56383);
}
})();
var vec__56377 = cljs.core.re_matches(reg,timestamp_SINGLEQUOTE__SINGLEQUOTE_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(0),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(1),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(2),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(3),null);
var vec__56380 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56373_SHARP_){
if((p1__56373_SHARP_ == null)){
return (0);
} else {
return frontend.util.safe_parse_int(p1__56373_SHARP_);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hours,minutes,seconds], null));
var hours__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56380,(0),null);
var minutes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56380,(1),null);
var seconds__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56380,(2),null);
if(cljs.core.truth_(total_seconds)){
return total_seconds;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = minutes__$1;
if(cljs.core.truth_(and__5140__auto__)){
return seconds__$1;
} else {
return and__5140__auto__;
}
})())){
return ((((3600) * hours__$1) + ((60) * minutes__$1)) + seconds__$1);
} else {
return null;

}
}
});

//# sourceMappingURL=frontend.extensions.video.youtube.js.map
