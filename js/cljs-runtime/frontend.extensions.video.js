goog.provide('frontend.extensions.video');
frontend.extensions.video.bilibili_regex = /^((?:https?:)?\/\/)?((?:www).)?((?:bilibili.com))(\/(?:video\/)?)([\w-]+)(\?p=(\d+))?(\S+)?$/;
frontend.extensions.video.loom_regex = /^((?:https?:)?\/\/)?((?:www).)?((?:loom.com))(\/(?:share\/|embed\/))([\w-]+)(\S+)?$/;
frontend.extensions.video.vimeo_regex = /^((?:https?:)?\/\/)?((?:www).)?((?:player.vimeo.com|vimeo.com))(\/(?:video\/)?)([\w-]+)(\S+)?$/;
frontend.extensions.video.youtube_regex = /^((?:https?:)?\/\/)?((?:www|m).)?((?:youtube.com|youtu.be|y2u.be|youtube-nocookie.com))(\/(?:shorts\/|[\w-]+\?v=|embed\/|v\/)?)([\w-]+)([\S^\?]+)?$/;
frontend.extensions.video.default_aspect_ratio = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null);
frontend.extensions.video.youtube_providers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["y2u.be",null,"youtube.com",null,"youtu.be",null], null), null);
frontend.extensions.video.get_matched_video = (function frontend$extensions$video$get_matched_video(url){
if(cljs.core.truth_(cljs.core.not_empty(url))){
var or__5142__auto__ = cljs.core.re_find(frontend.extensions.video.youtube_regex,url);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.re_find(frontend.extensions.video.bilibili_regex,url);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core.re_find(frontend.extensions.video.vimeo_regex,url);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.re_find(frontend.extensions.video.loom_regex,url);
}
}
}
} else {
return null;
}
});
frontend.extensions.video.matched_video_provider = (function frontend$extensions$video$matched_video_provider(match){
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(match,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("youtube-nocookie.com",domain)){
return new cljs.core.Keyword(null,"youtube-nocookie","youtube-nocookie",711256186);
} else {
if(cljs.core.contains_QMARK_(frontend.extensions.video.youtube_providers,domain)){
return new cljs.core.Keyword(null,"youtube","youtube",-1932361085);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bilibili.com",domain)){
return new cljs.core.Keyword(null,"bilibili","bilibili",-500229174);
} else {
if(((typeof domain === 'string') && (clojure.string.ends_with_QMARK_(domain,"vimeo.com")))){
return new cljs.core.Keyword(null,"vimeo","vimeo",-1217463574);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loom.com",domain)){
return new cljs.core.Keyword(null,"loom","loom",1998784953);
} else {
return null;

}
}
}
}
}
});
frontend.extensions.video.matched_video_id = (function frontend$extensions$video$matched_video_id(match){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(match,(5),null);
});
frontend.extensions.video.matched_video_page = (function frontend$extensions$video$matched_video_page(match){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(match,(7),null);
});
frontend.extensions.video.video_start = (function frontend$extensions$video$video_start(input){
var G__67434 = cljs.core.re_find(/[?&]t=(\d+)/,input);
if((G__67434 == null)){
return null;
} else {
return cljs.core.second(G__67434);
}
});
frontend.extensions.video.input_video = (function frontend$extensions$video$input_video(input,provider_hint){
if(typeof input === 'string'){
var temp__5823__auto__ = frontend.extensions.video.get_matched_video(input);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"provider","provider",-302056900),frontend.extensions.video.matched_video_provider(match),new cljs.core.Keyword(null,"id","id",-1388402092),frontend.extensions.video.matched_video_id(match),new cljs.core.Keyword(null,"page","page",849072397),frontend.extensions.video.matched_video_page(match),new cljs.core.Keyword(null,"start","start",-355208981),frontend.extensions.video.video_start(input)], null);
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(provider_hint,new cljs.core.Keyword(null,"youtube","youtube",-1932361085))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),((input).length))));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(provider_hint,new cljs.core.Keyword(null,"bilibili","bilibili",-500229174))) && ((((input).length) <= (15))));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(provider_hint,new cljs.core.Keyword(null,"vimeo","vimeo",-1217463574));
if(and__5140__auto__){
return cljs.core.re_matches(/\d+/,input);
} else {
return and__5140__auto__;
}
}
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"provider","provider",-302056900),provider_hint,new cljs.core.Keyword(null,"id","id",-1388402092),input], null);
} else {
return null;
}
}
} else {
return null;
}
});
frontend.extensions.video.matched_video_embed = (function frontend$extensions$video$matched_video_embed(var_args){
var G__67436 = arguments.length;
switch (G__67436) {
case 1:
return frontend.extensions.video.matched_video_embed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.video.matched_video_embed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.video.matched_video_embed.cljs$core$IFn$_invoke$arity$1 = (function (input){
return frontend.extensions.video.matched_video_embed.cljs$core$IFn$_invoke$arity$2(input,null);
}));

(frontend.extensions.video.matched_video_embed.cljs$core$IFn$_invoke$arity$2 = (function (input,provider_hint){
var map__67438 = frontend.extensions.video.input_video(input,provider_hint);
var map__67438__$1 = cljs.core.__destructure_map(map__67438);
var provider = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67438__$1,new cljs.core.Keyword(null,"provider","provider",-302056900));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67438__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67438__$1,new cljs.core.Keyword(null,"page","page",849072397));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67438__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__5140__auto__ = provider;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(id)));
} else {
return and__5140__auto__;
}
})())){
var G__67441 = provider;
var G__67441__$1 = (((G__67441 instanceof cljs.core.Keyword))?G__67441.fqn:null);
switch (G__67441__$1) {
case "youtube":
var G__67442 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"youtube-player","youtube-player",2092075785),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),frontend.extensions.video.default_aspect_ratio], null);
if(cljs.core.truth_(start)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67442,new cljs.core.Keyword(null,"start","start",-355208981),start);
} else {
return G__67442;
}

break;
case "youtube-nocookie":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"src","src",-1651076051),(""+"https://www.youtube-nocookie.com/embed/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(start)?(""+"?t="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)):null))),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),frontend.extensions.video.default_aspect_ratio], null);

break;
case "bilibili":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"src","src",-1651076051),(""+"https://player.bilibili.com/player.html?bvid="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&high_quality=1&autoplay=0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(page)?(""+"&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(start)?(""+"&t="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)):null))),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),frontend.extensions.video.default_aspect_ratio], null);

break;
case "vimeo":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"src","src",-1651076051),(""+"https://player.vimeo.com/video/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),frontend.extensions.video.default_aspect_ratio], null);

break;
case "loom":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"src","src",-1651076051),(""+"https://www.loom.com/embed/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),frontend.extensions.video.default_aspect_ratio], null);

break;
default:
return null;

}
} else {
return null;
}
}));

(frontend.extensions.video.matched_video_embed.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=frontend.extensions.video.js.map
