goog.provide('frontend.components.block');
goog.scope(function(){
  frontend.components.block.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_dragging_QMARK_ !== 'undefined')){
} else {
frontend.components.block._STAR_dragging_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_dragging_block !== 'undefined')){
} else {
frontend.components.block._STAR_dragging_block = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_dragging_over_block !== 'undefined')){
} else {
frontend.components.block._STAR_dragging_over_block = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_drag_to_block !== 'undefined')){
} else {
frontend.components.block._STAR_drag_to_block = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.block._STAR_move_to = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.block.remove_nils = (function frontend$components$block$remove_nils(col){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,col);
});
frontend.components.block.vec_cat = (function frontend$components$block$vec_cat(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50919 = arguments.length;
var i__5877__auto___50920 = (0);
while(true){
if((i__5877__auto___50920 < len__5876__auto___50919)){
args__5882__auto__.push((arguments[i__5877__auto___50920]));

var G__50921 = (i__5877__auto___50920 + (1));
i__5877__auto___50920 = G__50921;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec(frontend.components.block.remove_nils(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,args)));
}));

(frontend.components.block.vec_cat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.components.block.vec_cat.cljs$lang$applyTo = (function (seq48217){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48217));
}));

frontend.components.block.__GT_elem = (function frontend$components$block$__GT_elem(var_args){
var G__48219 = arguments.length;
switch (G__48219) {
case 2:
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2 = (function (elem,items){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(elem,null,items);
}));

(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3 = (function (elem,attrs,items){
var elem__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(elem);
if(cljs.core.truth_(attrs)){
return cljs.core.vec(cljs.core.cons(elem__$1,cljs.core.cons(attrs,cljs.core.seq(items))));
} else {
return cljs.core.vec(cljs.core.cons(elem__$1,cljs.core.seq(items)));
}
}));

(frontend.components.block.__GT_elem.cljs$lang$maxFixedArity = 3);

frontend.components.block.join_lines = (function frontend$components$block$join_lines(l){
return clojure.string.trim(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,l));
});
frontend.components.block.string_of_url = (function frontend$components$block$string_of_url(url){
try{if(((cljs.core.vector_QMARK_(url)) && ((cljs.core.count(url) === 2)))){
try{var url_0__48221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__48221 === "File")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return clojure.string.replace(s,"file://","");
} else {
throw cljs.core.match.backtrack;

}
}catch (e48224){if((e48224 instanceof Error)){
var e__36180__auto__ = e48224;
if((e__36180__auto__ === cljs.core.match.backtrack)){
try{var url_0__48221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__48221 === "Complex")){
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
var map__48226 = m;
var map__48226__$1 = cljs.core.__destructure_map(map__48226);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48226__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48226__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"file")){
return link;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)+"://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(link));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e48225){if((e48225 instanceof Error)){
var e__36180__auto____$1 = e48225;
if((e__36180__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$1;
}
} else {
throw e48225;

}
}} else {
throw e__36180__auto__;
}
} else {
throw e48224;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48223){if((e48223 instanceof Error)){
var e__36180__auto__ = e48223;
if((e__36180__auto__ === cljs.core.match.backtrack)){
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url))));
} else {
throw e__36180__auto__;
}
} else {
throw e48223;

}
}});
frontend.components.block.open_lightbox_BANG_ = (function frontend$components$block$open_lightbox_BANG_(e){
var images = document.querySelectorAll(".asset-container img");
var images__$1 = cljs.core.to_array(images);
var images__$2 = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((images__$1).length),(1)))))?(function (){var image = e.target.closest(".asset-container");
var image__$1 = image.querySelector("img");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(cljs.core.split_with(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([image__$1])),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__48227_SHARP_){
return p1__48227_SHARP_.y;
}),(function (p1__48228_SHARP_){
return p1__48228_SHARP_.x;
})),images__$1))));
})():images__$1);
var images__$3 = (function (){var iter__5628__auto__ = (function frontend$components$block$open_lightbox_BANG__$_iter__48229(s__48230){
return (new cljs.core.LazySeq(null,(function (){
var s__48230__$1 = s__48230;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48230__$1);
if(temp__5825__auto__){
var s__48230__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48230__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__48230__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__48232 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__48231 = (0);
while(true){
if((i__48231 < size__5627__auto__)){
var it = cljs.core._nth(c__5626__auto__,i__48231);
cljs.core.chunk_append(b__48232,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null));

var G__50927 = (i__48231 + (1));
i__48231 = G__50927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48232),frontend$components$block$open_lightbox_BANG__$_iter__48229(cljs.core.chunk_rest(s__48230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48232),null);
}
} else {
var it = cljs.core.first(s__48230__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null),frontend$components$block$open_lightbox_BANG__$_iter__48229(cljs.core.rest(s__48230__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(images__$2);
})();
if(cljs.core.seq(images__$3)){
return frontend.extensions.lightbox.preview_images_BANG_(images__$3);
} else {
return null;
}
});
frontend.components.block.resize_image_handles = (function (){var render_fn__31744__auto__ = (function frontend$components$block$resize_image_handles(dx_fn){
var handle_props = cljs.core.PersistentArrayMap.EMPTY;
var add_resizing_class_BANG_ = (function (){
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.documentElement,"is-resizing-buf");
});
var remove_resizing_class_BANG_ = (function (){
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.documentElement,"is-resizing-buf");
});
var _STAR_handle_left = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_handle_right = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
var seq__48233 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.hooks.deref(_STAR_handle_left),logseq.shui.hooks.deref(_STAR_handle_right)], null));
var chunk__48234 = null;
var count__48235 = (0);
var i__48236 = (0);
while(true){
if((i__48236 < count__48235)){
var el = chunk__48234.cljs$core$IIndexed$_nth$arity$2(null,i__48236);
interact(el).draggable(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),((function (seq__48233,chunk__48234,count__48235,i__48236,el,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right){
return (function (e){
return (dx_fn.cljs$core$IFn$_invoke$arity$2 ? dx_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),e) : dx_fn.call(null,new cljs.core.Keyword(null,"start","start",-355208981),e));
});})(seq__48233,chunk__48234,count__48235,i__48236,el,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right))
,new cljs.core.Keyword(null,"move","move",-2110884309),((function (seq__48233,chunk__48234,count__48235,i__48236,el,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right){
return (function (e){
return (dx_fn.cljs$core$IFn$_invoke$arity$2 ? dx_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),e) : dx_fn.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),e));
});})(seq__48233,chunk__48234,count__48235,i__48236,el,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (seq__48233,chunk__48234,count__48235,i__48236,el,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right){
return (function (e){
return (dx_fn.cljs$core$IFn$_invoke$arity$2 ? dx_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),e) : dx_fn.call(null,new cljs.core.Keyword(null,"end","end",-268185958),e));
});})(seq__48233,chunk__48234,count__48235,i__48236,el,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right))
], null)], null))).styleCursor(false).on("dragstart",add_resizing_class_BANG_).on("dragend",remove_resizing_class_BANG_);


var G__50931 = seq__48233;
var G__50932 = chunk__48234;
var G__50933 = count__48235;
var G__50934 = (i__48236 + (1));
seq__48233 = G__50931;
chunk__48234 = G__50932;
count__48235 = G__50933;
i__48236 = G__50934;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48233);
if(temp__5825__auto__){
var seq__48233__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48233__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__48233__$1);
var G__50936 = cljs.core.chunk_rest(seq__48233__$1);
var G__50937 = c__5673__auto__;
var G__50938 = cljs.core.count(c__5673__auto__);
var G__50939 = (0);
seq__48233 = G__50936;
chunk__48234 = G__50937;
count__48235 = G__50938;
i__48236 = G__50939;
continue;
} else {
var el = cljs.core.first(seq__48233__$1);
interact(el).draggable(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),((function (seq__48233,chunk__48234,count__48235,i__48236,el,seq__48233__$1,temp__5825__auto__,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right){
return (function (e){
return (dx_fn.cljs$core$IFn$_invoke$arity$2 ? dx_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),e) : dx_fn.call(null,new cljs.core.Keyword(null,"start","start",-355208981),e));
});})(seq__48233,chunk__48234,count__48235,i__48236,el,seq__48233__$1,temp__5825__auto__,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right))
,new cljs.core.Keyword(null,"move","move",-2110884309),((function (seq__48233,chunk__48234,count__48235,i__48236,el,seq__48233__$1,temp__5825__auto__,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right){
return (function (e){
return (dx_fn.cljs$core$IFn$_invoke$arity$2 ? dx_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),e) : dx_fn.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),e));
});})(seq__48233,chunk__48234,count__48235,i__48236,el,seq__48233__$1,temp__5825__auto__,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (seq__48233,chunk__48234,count__48235,i__48236,el,seq__48233__$1,temp__5825__auto__,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right){
return (function (e){
return (dx_fn.cljs$core$IFn$_invoke$arity$2 ? dx_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),e) : dx_fn.call(null,new cljs.core.Keyword(null,"end","end",-268185958),e));
});})(seq__48233,chunk__48234,count__48235,i__48236,el,seq__48233__$1,temp__5825__auto__,handle_props,add_resizing_class_BANG_,remove_resizing_class_BANG_,_STAR_handle_left,_STAR_handle_right))
], null)], null))).styleCursor(false).on("dragstart",add_resizing_class_BANG_).on("dragend",remove_resizing_class_BANG_);


var G__50941 = cljs.core.next(seq__48233__$1);
var G__50942 = null;
var G__50943 = (0);
var G__50944 = (0);
seq__48233 = G__50941;
chunk__48234 = G__50942;
count__48235 = G__50943;
i__48236 = G__50944;
continue;
}
} else {
return null;
}
}
break;
}
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.handle-left.image-resize","span.handle-left.image-resize",1621173461),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(handle_props,new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_handle_left)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.handle-right.image-resize","span.handle-right.image-resize",-735721244),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(handle_props,new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_handle_right)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$resize_image_handles__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48237 = cljs.core.first(args__31746__auto__);
var G__48238 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48237,G__48238) : io.factorhouse.hsx.core.obj_get.call(null,G__48237,G__48238));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"resize-image-handles","resize-image-handles",1030355305,null),args__31746__auto__),frontend$components$block$resize_image_handles,args__31746__auto__,null);
}
};
var frontend$components$block$resize_image_handles = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__50946__i = 0, G__50946__a = new Array(arguments.length -  0);
while (G__50946__i < G__50946__a.length) {G__50946__a[G__50946__i] = arguments[G__50946__i + 0]; ++G__50946__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__50946__a,0,null);
} 
return frontend$components$block$resize_image_handles__delegate.call(this,args__31746__auto__);};
frontend$components$block$resize_image_handles.cljs$lang$maxFixedArity = 0;
frontend$components$block$resize_image_handles.cljs$lang$applyTo = (function (arglist__50947){
var args__31746__auto__ = cljs.core.seq(arglist__50947);
return frontend$components$block$resize_image_handles__delegate(args__31746__auto__);
});
frontend$components$block$resize_image_handles.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$resize_image_handles__delegate;
return frontend$components$block$resize_image_handles;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48239 = comp__31745__auto__;
var G__48240 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48239,G__48240) : io.factorhouse.hsx.core.react_memo.call(null,G__48239,G__48240));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"resize-image-handles");

return comp__31745__auto__;
})();
frontend.components.block.measure_image_BANG_ = (function frontend$components$block$measure_image_BANG_(url,on_dimensions){
var img = (new Image());
(img.onload = (function (){
var G__48241 = img.naturalWidth;
var G__48242 = img.naturalHeight;
return (on_dimensions.cljs$core$IFn$_invoke$arity$2 ? on_dimensions.cljs$core$IFn$_invoke$arity$2(G__48241,G__48242) : on_dimensions.call(null,G__48241,G__48242));
}));

return (img.src = url);
});
frontend.components.block.measure_video_BANG_ = (function frontend$components$block$measure_video_BANG_(url,on_dimensions){
var video = document.createElement("video");
(video.preload = "metadata");

(video.onloadedmetadata = (function (){
var G__48243 = video.videoWidth;
var G__48244 = video.videoHeight;
return (on_dimensions.cljs$core$IFn$_invoke$arity$2 ? on_dimensions.cljs$core$IFn$_invoke$arity$2(G__48243,G__48244) : on_dimensions.call(null,G__48243,G__48244));
}));

return (video.src = url);
});
frontend.components.block.normalize_asset_align = (function frontend$components$block$normalize_asset_align(asset_align){
if((asset_align instanceof cljs.core.Keyword)){
return asset_align;
} else {
if(typeof asset_align === 'string'){
var G__48245 = asset_align;
switch (G__48245) {
case "left":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "center":
return new cljs.core.Keyword(null,"center","center",-748944368);

break;
case "right":
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
default:
return null;

}
} else {
return null;

}
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_resizing_image_QMARK_ !== 'undefined')){
} else {
frontend.components.block._STAR_resizing_image_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.block.asset_container = (function (){var render_fn__31744__auto__ = (function frontend$components$block$asset_container(asset_block,src,title,metadata,p__48247){
var map__48248 = p__48247;
var map__48248__$1 = cljs.core.__destructure_map(map__48248);
var breadcrumb_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48248__$1,new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363));
var positioned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48248__$1,new cljs.core.Keyword(null,"positioned?","positioned?",-1765641955));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48248__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48248__$1,new cljs.core.Keyword(null,"full-text","full-text",1432444182));
var gallery_view_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48248__$1,new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224));
var asset_width = new cljs.core.Keyword("logseq.property.asset","width","logseq.property.asset/width",-1857865839).cljs$core$IFn$_invoke$arity$1(asset_block);
var asset_height = new cljs.core.Keyword("logseq.property.asset","height","logseq.property.asset/height",330616504).cljs$core$IFn$_invoke$arity$1(asset_block);
var asset_align = frontend.components.block.normalize_asset_align(new cljs.core.Keyword("logseq.property.asset","align","logseq.property.asset/align",713504128).cljs$core$IFn$_invoke$arity$1(asset_block));
var vec__48249 = logseq.shui.hooks.use_state(false);
var load_failed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249,(0),null);
var set_load_failed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249,(1),null);
var _STAR_prev_src = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(src) : logseq.shui.hooks.use_ref.call(null,src));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(logseq.shui.hooks.deref(_STAR_prev_src),src)){
logseq.shui.hooks.set_ref_BANG_(_STAR_prev_src,src);

(set_load_failed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_load_failed_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_load_failed_BANG_.call(null,false));
} else {
}

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(src);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(load_failed_QMARK_);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_((function (){var or__5142__auto__ = asset_width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return asset_height;
}
})())){
} else {
frontend.components.block.measure_image_BANG_(src,(function (width,height){
if((new cljs.core.Keyword("logseq.property.asset","width","logseq.property.asset/width",-1857865839).cljs$core$IFn$_invoke$arity$1(asset_block) == null)){
return frontend.handler.property.set_block_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.asset","width","logseq.property.asset/width",-1857865839),width,new cljs.core.Keyword("logseq.property.asset","height","logseq.property.asset/height",330616504),height], null));
} else {
return null;
}
}));
}
} else {
}

return (function (){
return null;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,load_failed_QMARK_], null));

var _STAR_el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var image_src = ((cljs.core.seq(src))?frontend.fs.asset_path_normalize(src):null);
var src_SINGLEQUOTE_ = ((((cljs.core.seq(src)) && (((clojure.string.starts_with_QMARK_(src,"/")) || (clojure.string.starts_with_QMARK_(src,"~"))))))?(""+"file://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)):src);
var get_blockid = (function (){
var G__48252 = logseq.shui.hooks.deref(_STAR_el_ref);
var G__48252__$1 = (((G__48252 == null))?null:G__48252.closest("[blockid]"));
var G__48252__$2 = (((G__48252__$1 == null))?null:G__48252__$1.getAttribute("blockid"));
if((G__48252__$2 == null)){
return null;
} else {
return cljs.core.uuid(G__48252__$2);
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-container","div.asset-container",1221095823),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"resize-asset-container",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(frontend.components.block.image.asset_fallback_link_event_QMARK_(e)){
return null;
} else {
return frontend.util.stop(e);
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(frontend.components.block.image.asset_fallback_link_event_QMARK_(e)){
return null;
} else {
frontend.util.stop(e);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("IMG",(function (){var G__48253 = e.target;
if((G__48253 == null)){
return null;
} else {
return G__48253.nodeName;
}
})())){
return frontend.components.block.open_lightbox_BANG_(e);
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_ref], null),frontend.components.block.image.image_or_fallback(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"src","src",-1651076051),src_SINGLEQUOTE_,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224),gallery_view_QMARK_,new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"load-failed?","load-failed?",-598313920),load_failed_QMARK_,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (_){
if(frontend.components.block.image.remote_image_url_QMARK_(src_SINGLEQUOTE_)){
return (set_load_failed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_load_failed_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_load_failed_BANG_.call(null,true));
} else {
return null;
}
})], null)),((((cljs.core.not(load_failed_QMARK_)) && (((cljs.core.not(breadcrumb_QMARK_)) && (cljs.core.not(positioned_QMARK_))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var handle_copy_BANG_ = (function (_e){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.seq(image_src)) && (((cljs.core.not(cljs.core.re_find(/^[a-z][a-z0-9+.-]+:/i,image_src))) && ((!(frontend.util.starts_with_QMARK_(src,"//")))))));
} else {
return and__5140__auto__;
}
})())){
var ext = (function (){var G__48254 = frontend.util.get_file_ext(image_src);
if((G__48254 == null)){
return null;
} else {
return clojure.string.lower_case(G__48254);
}
})();
var ext__GT_mime = cljs.core.PersistentHashMap.fromArrays(["gif","jxl","webp","svg","jpeg","ico","png","jpg","bmp"],["image/gif","image/jxl","image/webp","image/svg+xml","image/jpeg","image/x-icon","image/png","image/jpeg","image/bmp"]);
var mime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext__GT_mime,ext);
if(cljs.core.not(mime)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","copy-image-unsupported-extension","asset/copy-image-unsupported-extension",-30878479),(""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext))], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file_raw.cljs$core$IFn$_invoke$arity$variadic(null,image_src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0))),(function (binary){
return promesa.protocols._mcat(promesa.protocols._promise((new Blob([binary],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),mime], null))))),(function (blob){
return promesa.protocols._promise(frontend.util.copy_image_blob_to_clipboard(blob));
}));
}));
})),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("notification","copied","notification/copied",-1717318998)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (error){
console.error(error);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","missing-file","asset/missing-file",2087445095),image_src], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}));
}
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.util.copy_image_to_clipboard(src_SINGLEQUOTE_),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("notification","copied","notification/copied",-1717318998)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (error){
console.error(error);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","missing-file","asset/missing-file",2087445095),image_src], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}));
}
});
var handle_delete_BANG_ = (function (_e){
var temp__5825__auto__ = get_blockid();
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
var _STAR_local_selected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(local_QMARK_);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__48255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-60.-my-2","div.text-xs.opacity-60.-my-2",1598990931),(cljs.core.truth_((function (){var and__5140__auto__ = local_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block),block_id);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex.gap-1.items-center","label.flex.gap-1.items-center",668901120),(function (){var G__48257 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core.deref(_STAR_local_selected_QMARK_),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (p1__48246_SHARP_){
return cljs.core.reset_BANG_(_STAR_local_selected_QMARK_,p1__48246_SHARP_);
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__48257) : logseq.shui.ui.checkbox.call(null,G__48257));
})(),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","physical-delete","asset/physical-delete",1598822051)], 0))], null):null)], null);
var G__48256 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","confirm-delete-image","asset/confirm-delete-image",926083945)], 0)),new cljs.core.Keyword(null,"outside-cancel?","outside-cancel?",-1972964985),true,new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__48255,G__48256) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__48255,G__48256));
})(),(function (){
(logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));

return frontend.handler.editor.assets.delete_asset_of_block_BANG_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id,new cljs.core.Keyword(null,"asset-block","asset-block",1420117445),asset_block,new cljs.core.Keyword(null,"local?","local?",-1422786101),local_QMARK_,new cljs.core.Keyword(null,"delete-local?","delete-local?",1716577572),cljs.core.deref(_STAR_local_selected_QMARK_),new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"href","href",-793805698),src,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"full-text","full-text",1432444182),full_text], null));
}));
} else {
return null;
}
});
var handle_set_align_BANG_ = (function (align){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block);
if(cljs.core.truth_(temp__5825__auto__)){
var asset_id = temp__5825__auto__;
return frontend.handler.property.set_block_property_BANG_(asset_id,new cljs.core.Keyword("logseq.property.asset","align","logseq.property.asset/align",713504128),align);
} else {
return null;
}
});
if(cljs.core.truth_((function (){var or__5142__auto__ = asset_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(image_src);
} else {
return and__5140__auto__;
}
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".asset-action-bar",".asset-action-bar",1833566886),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return e.stopPropagation();
})], null),(function (){var G__48258 = (function (){var G__48260 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null);
var G__48261 = (function (){var G__48262 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996),"h-6 w-6"], null);
var G__48263 = logseq.shui.ui.tabler_icon("dots-vertical");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__48262,G__48263) : logseq.shui.ui.button.call(null,G__48262,G__48263));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__48260,G__48261) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__48260,G__48261));
})();
var G__48259 = (function (){var G__48264 = (cljs.core.truth_(asset_block)?(function (){var G__48268 = (function (){var G__48270 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("layout-align-left"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","align","asset/align",1902550898)], 0))], null);
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__48270) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__48270));
})();
var G__48269 = (function (){var G__48271 = (function (){var G__48274 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return handle_set_align_BANG_(new cljs.core.Keyword(null,"left","left",-399115937));
})], null);
var G__48275 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-2","span.flex.items-center.gap-2",1483050042),frontend.ui.icon("layout-align-left"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","align-left","asset/align-left",368111637)], 0)),(((((asset_align == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(asset_align,new cljs.core.Keyword(null,"left","left",-399115937)))))?frontend.ui.icon("check"):null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__48274,G__48275) : logseq.shui.ui.dropdown_menu_item.call(null,G__48274,G__48275));
})();
var G__48272 = (function (){var G__48276 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return handle_set_align_BANG_(new cljs.core.Keyword(null,"center","center",-748944368));
})], null);
var G__48277 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-2","span.flex.items-center.gap-2",1483050042),frontend.ui.icon("layout-align-center"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","align-center","asset/align-center",-460863747)], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(asset_align,new cljs.core.Keyword(null,"center","center",-748944368)))?frontend.ui.icon("check"):null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__48276,G__48277) : logseq.shui.ui.dropdown_menu_item.call(null,G__48276,G__48277));
})();
var G__48273 = (function (){var G__48278 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return handle_set_align_BANG_(new cljs.core.Keyword(null,"right","right",-452581833));
})], null);
var G__48279 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-2","span.flex.items-center.gap-2",1483050042),frontend.ui.icon("layout-align-right"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","align-right","asset/align-right",-155489880)], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(asset_align,new cljs.core.Keyword(null,"right","right",-452581833)))?frontend.ui.icon("check"):null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__48278,G__48279) : logseq.shui.ui.dropdown_menu_item.call(null,G__48278,G__48279));
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$3(G__48271,G__48272,G__48273) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__48271,G__48272,G__48273));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__48268,G__48269) : logseq.shui.ui.dropdown_menu_sub.call(null,G__48268,G__48269));
})():null);
var G__48265 = (function (){var G__48280 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_copy_BANG_], null);
var G__48281 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("copy"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","copy","asset/copy",-867708909)], 0))], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__48280,G__48281) : logseq.shui.ui.dropdown_menu_item.call(null,G__48280,G__48281));
})();
var G__48266 = (cljs.core.truth_(frontend.util.electron_QMARK_())?(function (){var remote_src_QMARK_ = (function (){var and__5140__auto__ = image_src;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.re_find(/^https?:/i,image_src);
} else {
return and__5140__auto__;
}
})();
var file_src_QMARK_ = (function (){var and__5140__auto__ = image_src;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(cljs.core.re_find(/^[a-z][a-z0-9+.-]+:/i,image_src))) && ((!(frontend.util.starts_with_QMARK_(src,"//")))));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var or__5142__auto__ = remote_src_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_src_QMARK_;
}
})())){
var G__48282 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(remote_src_QMARK_)){
return window.apis.openExternal(image_src);
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(image_src),(function (exists_QMARK_){
if(cljs.core.truth_(exists_QMARK_)){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openFileInFolder",image_src], 0));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","missing-file","asset/missing-file",2087445095),image_src], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}));
}
})], null);
var G__48283 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("folder-pin"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(remote_src_QMARK_)?new cljs.core.Keyword("asset","open-in-browser","asset/open-in-browser",-915076141):new cljs.core.Keyword("asset","show-file-in-folder","asset/show-file-in-folder",-1802838352))], 0))], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__48282,G__48283) : logseq.shui.ui.dropdown_menu_item.call(null,G__48282,G__48283));
} else {
return null;
}
})():null);
var G__48267 = (cljs.core.truth_((function (){var and__5140__auto__ = asset_block;
if(cljs.core.truth_(and__5140__auto__)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(function (){var G__48284 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_delete_BANG_], null);
var G__48285 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.text-red-700","span.flex.items-center.gap-1.text-red-700",1004940826),frontend.ui.icon("trash"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","delete","asset/delete",-1860190756)], 0))], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__48284,G__48285) : logseq.shui.ui.dropdown_menu_item.call(null,G__48284,G__48285));
})()], null):null);
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$4(G__48264,G__48265,G__48266,G__48267) : logseq.shui.ui.dropdown_menu_content.call(null,G__48264,G__48265,G__48266,G__48267));
})();
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__48258,G__48259) : logseq.shui.ui.dropdown_menu.call(null,G__48258,G__48259));
})()], null);
} else {
return null;
}
})()], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$asset_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48286 = cljs.core.first(args__31746__auto__);
var G__48287 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48286,G__48287) : io.factorhouse.hsx.core.obj_get.call(null,G__48286,G__48287));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"asset-container","asset-container",1744358080,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$block$asset_container,args__31746__auto__,null);
}
};
var frontend$components$block$asset_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__50967__i = 0, G__50967__a = new Array(arguments.length -  0);
while (G__50967__i < G__50967__a.length) {G__50967__a[G__50967__i] = arguments[G__50967__i + 0]; ++G__50967__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__50967__a,0,null);
} 
return frontend$components$block$asset_container__delegate.call(this,args__31746__auto__);};
frontend$components$block$asset_container.cljs$lang$maxFixedArity = 0;
frontend$components$block$asset_container.cljs$lang$applyTo = (function (arglist__50969){
var args__31746__auto__ = cljs.core.seq(arglist__50969);
return frontend$components$block$asset_container__delegate(args__31746__auto__);
});
frontend$components$block$asset_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$asset_container__delegate;
return frontend$components$block$asset_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48288 = comp__31745__auto__;
var G__48289 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48288,G__48289) : io.factorhouse.hsx.core.react_memo.call(null,G__48288,G__48289));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-container");

return comp__31745__auto__;
})();
frontend.components.block.resizable_image = (function (){var render_fn__31744__auto__ = (function frontend$components$block$resizable_image(config,title,src,metadata,full_text,local_QMARK_){
logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
return cljs.core.reset_BANG_(frontend.components.block._STAR_resizing_image_QMARK_,false);
});
}),cljs.core.PersistentVector.EMPTY);

var breadcrumb_QMARK_ = new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363).cljs$core$IFn$_invoke$arity$1(config);
var positioned_QMARK_ = new cljs.core.Keyword(null,"property-position","property-position",-1150084538).cljs$core$IFn$_invoke$arity$1(config);
var asset_block = new cljs.core.Keyword(null,"asset-block","asset-block",1420117445).cljs$core$IFn$_invoke$arity$1(config);
var asset_align = frontend.components.block.normalize_asset_align(new cljs.core.Keyword("logseq.property.asset","align","logseq.property.asset/align",713504128).cljs$core$IFn$_invoke$arity$1(asset_block));
var metadata__$1 = frontend.components.block.image.effective_image_metadata(config,asset_block,metadata);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metadata__$1);
var _STAR_width = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__48290 = logseq.shui.hooks.use_atom(_STAR_width);
var local_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48290,(0),null);
var width__$1 = (function (){var or__5142__auto__ = local_width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return width;
}
})();
var metadata_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metadata__$1,new cljs.core.Keyword(null,"width","width",-384071477),width__$1);
var resizable_QMARK_ = ((cljs.core.not(frontend.mobile.util.native_platform_QMARK_())) && (((cljs.core.not(breadcrumb_QMARK_)) && (cljs.core.not(positioned_QMARK_)))));
var asset_container_cp = frontend.components.block.asset_container(asset_block,src,title,metadata_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363),breadcrumb_QMARK_,new cljs.core.Keyword(null,"positioned?","positioned?",-1765641955),positioned_QMARK_,new cljs.core.Keyword(null,"local?","local?",-1422786101),local_QMARK_,new cljs.core.Keyword(null,"full-text","full-text",1432444182),full_text,new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224),new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224).cljs$core$IFn$_invoke$arity$1(config)], null));
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"disable-resize?","disable-resize?",-1998248527).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"table-view?","table-view?",2073887505).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (!(resizable_QMARK_));
}
}
})())){
return asset_container_cp;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-resize-inner.w-full.select-none","div.ls-resize-inner.w-full.select-none",333144336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (e){
var target = e.target;
var container = target.closest(".ls-resize-inner");
if(cljs.core.truth_((function (){var or__5142__auto__ = container;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,container);
}
})())){
var temp__5825__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__48293 = config;
var G__48293__$1 = (((G__48293 == null))?null:new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(G__48293));
if((G__48293__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__48293__$1);
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return frontend.handler.editor.select_block_BANG_(block_uuid);
} else {
return null;
}
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-resize-image.rounded-md","div.ls-resize-image.rounded-md",-718543657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__48294 = asset_align;
var G__48294__$1 = (((G__48294 instanceof cljs.core.Keyword))?G__48294.fqn:null);
switch (G__48294__$1) {
case "center":
return "align-center";

break;
case "right":
return "align-right";

break;
default:
return "align-left";

}
})()], null),asset_container_cp,frontend.components.block.resize_image_handles((function (k,event){
var dx = event.dx;
var target = event.target;
var G__48295 = k;
var G__48295__$1 = (((G__48295 instanceof cljs.core.Keyword))?G__48295.fqn:null);
switch (G__48295__$1) {
case "start":
var c = target.closest(".ls-resize-image");
cljs.core.reset_BANG_(_STAR_width,c.offsetWidth);

return cljs.core.reset_BANG_(frontend.components.block._STAR_resizing_image_QMARK_,true);

break;
case "move":
var width_SINGLEQUOTE_ = (cljs.core.deref(_STAR_width) + dx);
if((((width_SINGLEQUOTE_ > (60))) || ((!((dx < (0))))))){
return cljs.core.reset_BANG_(_STAR_width,width_SINGLEQUOTE_);
} else {
return null;
}

break;
case "end":
var width_SINGLEQUOTE_ = cljs.core.deref(_STAR_width);
if(cljs.core.truth_((function (){var and__5140__auto__ = width_SINGLEQUOTE_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_);
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto___50976 = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__48296 = config;
var G__48296__$1 = (((G__48296 == null))?null:new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(G__48296));
if((G__48296__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__48296__$1);
}
}
})();
if(cljs.core.truth_(temp__5825__auto___50976)){
var block_id_50977 = temp__5825__auto___50976;
frontend.handler.editor.resize_image_BANG_(config,block_id_50977,metadata__$1,full_text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width_SINGLEQUOTE_], null));
} else {
}
} else {
}

return cljs.core.reset_BANG_(frontend.components.block._STAR_resizing_image_QMARK_,false);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48295__$1))));

}
}))], null)], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$resizable_image__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48297 = cljs.core.first(args__31746__auto__);
var G__48298 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48297,G__48298) : io.factorhouse.hsx.core.obj_get.call(null,G__48297,G__48298));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"resizable-image","resizable-image",-1746181878,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$block$resizable_image,args__31746__auto__,null);
}
};
var frontend$components$block$resizable_image = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__50979__i = 0, G__50979__a = new Array(arguments.length -  0);
while (G__50979__i < G__50979__a.length) {G__50979__a[G__50979__i] = arguments[G__50979__i + 0]; ++G__50979__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__50979__a,0,null);
} 
return frontend$components$block$resizable_image__delegate.call(this,args__31746__auto__);};
frontend$components$block$resizable_image.cljs$lang$maxFixedArity = 0;
frontend$components$block$resizable_image.cljs$lang$applyTo = (function (arglist__50980){
var args__31746__auto__ = cljs.core.seq(arglist__50980);
return frontend$components$block$resizable_image__delegate(args__31746__auto__);
});
frontend$components$block$resizable_image.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$resizable_image__delegate;
return frontend$components$block$resizable_image;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48299 = comp__31745__auto__;
var G__48300 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48299,G__48300) : io.factorhouse.hsx.core.react_memo.call(null,G__48299,G__48300));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"resizable-image");

return comp__31745__auto__;
})();
frontend.components.block.audio_cp = (function (){var render_fn__31744__auto__ = (function() {
var frontend$components$block$audio_cp = null;
var frontend$components$block$audio_cp__1 = (function (src){
return frontend$components$block$audio_cp.cljs$core$IFn$_invoke$arity$2(src,null);
});
var frontend$components$block$audio_cp__2 = (function (src,ext){
if(cljs.core.truth_(src)){
var src__$1 = frontend.handler.assets.asset_protocol_url__GT_media_url(src);
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),(function (p1__48301_SHARP_){
return frontend.util.stop(p1__48301_SHARP_);
})], null);
var G__48302 = ext;
var G__48302__$1 = (((G__48302 instanceof cljs.core.Keyword))?G__48302.fqn:null);
switch (G__48302__$1) {
case "m4a":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"type","type",1174270348),"audio/mp4"], null)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"src","src",-1651076051),src__$1)], null);

}
} else {
return null;
}
});
frontend$components$block$audio_cp = function(src,ext){
switch(arguments.length){
case 1:
return frontend$components$block$audio_cp__1.call(this,src);
case 2:
return frontend$components$block$audio_cp__2.call(this,src,ext);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$block$audio_cp.cljs$core$IFn$_invoke$arity$1 = frontend$components$block$audio_cp__1;
frontend$components$block$audio_cp.cljs$core$IFn$_invoke$arity$2 = frontend$components$block$audio_cp__2;
return frontend$components$block$audio_cp;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$block$audio_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48303 = cljs.core.first(args__31746__auto__);
var G__48304 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48303,G__48304) : io.factorhouse.hsx.core.obj_get.call(null,G__48303,G__48304));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"audio-cp","audio-cp",469181696,null),args__31746__auto__),frontend$components$block$audio_cp,args__31746__auto__,null);
}
};
var frontend$components$block$audio_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__50985__i = 0, G__50985__a = new Array(arguments.length -  0);
while (G__50985__i < G__50985__a.length) {G__50985__a[G__50985__i] = arguments[G__50985__i + 0]; ++G__50985__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__50985__a,0,null);
} 
return frontend$components$block$audio_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$audio_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$audio_cp.cljs$lang$applyTo = (function (arglist__50986){
var args__31746__auto__ = cljs.core.seq(arglist__50986);
return frontend$components$block$audio_cp__delegate(args__31746__auto__);
});
frontend$components$block$audio_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$audio_cp__delegate;
return frontend$components$block$audio_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48305 = comp__31745__auto__;
var G__48306 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48305,G__48306) : io.factorhouse.hsx.core.react_memo.call(null,G__48305,G__48306));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"audio-cp");

return comp__31745__auto__;
})();
frontend.components.block.asset_video_style = (function frontend$components$block$asset_video_style(metadata,asset_width,asset_height){
var width = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return asset_width;
}
})();
var height = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return asset_height;
}
})();
var max_width = cljs.core.min.cljs$core$IFn$_invoke$arity$2((frontend.util.get_width() - (96)),(560));
var max_height = (557);
if(((typeof width === 'number') && (((typeof height === 'number') && ((((width > (0))) && ((height > (0))))))))){
var width_SINGLEQUOTE_ = cljs.core.min.cljs$core$IFn$_invoke$arity$2(width,max_width);
var height_SINGLEQUOTE_ = (width_SINGLEQUOTE_ * (height / width));
var vec__48307 = (((height_SINGLEQUOTE_ > max_height))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(max_height * (width / height)),max_height], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width_SINGLEQUOTE_,height_SINGLEQUOTE_], null));
var width_SINGLEQUOTE___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48307,(0),null);
var height_SINGLEQUOTE___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48307,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"height","height",1025178622),height_SINGLEQUOTE___$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null);
}
});
frontend.components.block.asset_video = (function (){var render_fn__31744__auto__ = (function frontend$components$block$asset_video(config,src,metadata){
var asset_block = new cljs.core.Keyword(null,"asset-block","asset-block",1420117445).cljs$core$IFn$_invoke$arity$1(config);
var asset_width = new cljs.core.Keyword("logseq.property.asset","width","logseq.property.asset/width",-1857865839).cljs$core$IFn$_invoke$arity$1(asset_block);
var asset_height = new cljs.core.Keyword("logseq.property.asset","height","logseq.property.asset/height",330616504).cljs$core$IFn$_invoke$arity$1(asset_block);
var metadata__$1 = frontend.components.block.image.effective_image_metadata(config,asset_block,metadata);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(src);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block);
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_((function (){var or__5142__auto__ = asset_width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return asset_height;
}
})())){
} else {
frontend.components.block.measure_video_BANG_(src,(function (width,height){
if((((width > (0))) && ((((height > (0))) && ((new cljs.core.Keyword("logseq.property.asset","width","logseq.property.asset/width",-1857865839).cljs$core$IFn$_invoke$arity$1(asset_block) == null)))))){
return frontend.handler.property.set_block_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.asset","width","logseq.property.asset/width",-1857865839),width,new cljs.core.Keyword("logseq.property.asset","height","logseq.property.asset/height",330616504),height], null));
} else {
return null;
}
}));
}
} else {
}

return (function (){
return null;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block)], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video.asset-video","video.asset-video",230178781),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"style","style",-496642736),frontend.components.block.asset_video_style(metadata__$1,asset_width,asset_height)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$asset_video__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48310 = cljs.core.first(args__31746__auto__);
var G__48311 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48310,G__48311) : io.factorhouse.hsx.core.obj_get.call(null,G__48310,G__48311));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-video","asset-video",1849713356,null),args__31746__auto__),frontend$components$block$asset_video,args__31746__auto__,null);
}
};
var frontend$components$block$asset_video = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__50990__i = 0, G__50990__a = new Array(arguments.length -  0);
while (G__50990__i < G__50990__a.length) {G__50990__a[G__50990__i] = arguments[G__50990__i + 0]; ++G__50990__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__50990__a,0,null);
} 
return frontend$components$block$asset_video__delegate.call(this,args__31746__auto__);};
frontend$components$block$asset_video.cljs$lang$maxFixedArity = 0;
frontend$components$block$asset_video.cljs$lang$applyTo = (function (arglist__50991){
var args__31746__auto__ = cljs.core.seq(arglist__50991);
return frontend$components$block$asset_video__delegate(args__31746__auto__);
});
frontend$components$block$asset_video.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$asset_video__delegate;
return frontend$components$block$asset_video;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48312 = comp__31745__auto__;
var G__48313 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48312,G__48313) : io.factorhouse.hsx.core.react_memo.call(null,G__48312,G__48313));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-video");

return comp__31745__auto__;
})();
frontend.components.block.open_pdf_file = (function frontend$components$block$open_pdf_file(e,block,href){
var href__$1 = (function (){var temp__5823__auto__ = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5823__auto__)){
var url = temp__5823__auto__;
if(clojure.string.starts_with_QMARK_(url,"zotero://")){
return frontend.extensions.pdf.assets.get_zotero_local_pdf_path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("logseq.property.asset","external-file-name","logseq.property.asset/external-file-name",-399529720).cljs$core$IFn$_invoke$arity$1(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\//))], 0));
} else {
return url;
}
} else {
return href;
}
})();
var temp__5825__auto__ = (function (){var or__5142__auto__ = href__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__48314 = e.target;
var G__48314__$1 = (((G__48314 == null))?null:G__48314.dataset);
if((G__48314__$1 == null)){
return null;
} else {
return G__48314__$1.href;
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
var load$ = (function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = href__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_((function (){var or__5142__auto____$1 = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.util.electron_QMARK_();
}
})())){
return s;
} else {
return frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1(s);
}
}
})()),(function (href__$2){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = frontend.extensions.pdf.assets.inflate_asset.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"href","href",-793805698),href__$2], null)], 0));
if(cljs.core.truth_(temp__5825__auto____$1)){
var current = temp__5825__auto____$1;
frontend.state.set_current_pdf_BANG_(current);

return frontend.util.stop(e);
} else {
return null;
}
})());
}));
}));
});
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(load$(),(function (_e){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(window.showOpenFilePicker(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),false,new cljs.core.Keyword(null,"startIn","startIn",-557546565),"documents",new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.PersistentArrayMap(null, 1, ["application/pdf",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".pdf"], null)], null)], null)], null)], null)))),(function (p__48315){
var vec__48316 = p__48315;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48316,(0),null);
return promesa.protocols._mcat(promesa.protocols._promise(handle.getFile()),(function (file){
return promesa.protocols._mcat(promesa.protocols._promise(file.arrayBuffer()),(function (buffer){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = (function (){var G__48319 = buffer;
if((G__48319 == null)){
return null;
} else {
return (new Uint8Array(G__48319));
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var content = temp__5825__auto____$1;
var repo = frontend.state.get_current_repo();
var file_rpath = clojure.string.replace(s,/^[.\\/\\]*assets[\\/\\]+/,"assets/");
var dir = frontend.config.get_repo_dir(repo);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_plain_text_file_BANG_(repo,dir,file_rpath,content,null),load$);
} else {
return null;
}
})());
}));
}));
}));
}));

return console.error(_e);
}));
} else {
return null;
}
});
frontend.components.block.asset_link = (function (){var render_fn__31744__auto__ = (function frontend$components$block$asset_link(config,title,href,metadata,full_text){
var src_STAR_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [href], null));
var vec__48322 = logseq.shui.hooks.use_atom(src_STAR_);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48322,(0),null);
var href__$1 = (function (){var G__48325 = href;
if(cljs.core.truth_(logseq.common.config.local_relative_asset_QMARK_(href))){
return frontend.config.get_local_asset_absolute_path(G__48325);
} else {
return G__48325;
}
})();
var js_url = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"link-js-url","link-js-url",1262093524).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(logseq.common.path.protocol_url_QMARK_(href__$1)){
try{return (new URL(href__$1));
}catch (e48326){var _ = e48326;
return null;
}} else {
return null;
}
}
})();
logseq.shui.hooks.use_effect_BANG_((function (){
if((cljs.core.deref(src_STAR_) == null)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$2(href__$1,js_url),(function (url){
return cljs.core.reset_BANG_(src_STAR_,logseq.common.util.safe_decode_uri_component(url));
})),(function (p1__48320_SHARP_){
return console.log("Failed to load asset:",p1__48320_SHARP_);
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [href__$1], null));

if((src == null)){
return null;
} else {
var asset_block = new cljs.core.Keyword(null,"asset-block","asset-block",1420117445).cljs$core$IFn$_invoke$arity$1(config);
var ext = frontend.components.block.asset.link_ext(src,href__$1,asset_block);
var repo = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo);
var share_fn = (function (event){
frontend.util.stop(event);

if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
var vec__48327 = frontend.util.get_dir_and_basename(href__$1);
var rel_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48327,(0),null);
var basename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48327,(1),null);
var rel_dir__$1 = clojure.string.replace(rel_dir,/^\/+/,"");
var asset_url = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rel_dir__$1,basename], 0));
return frontend.mobile.intent.open_or_share_file(asset_url);
} else {
return null;
}
});
if(((cljs.core.contains_QMARK_(frontend.config.audio_formats,ext)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext,new cljs.core.Keyword(null,"webm","webm",-1239807004))) && (clojure.string.starts_with_QMARK_(title,"Audio-")))))){
return frontend.components.block.audio_cp(src,ext);
} else {
if(cljs.core.contains_QMARK_(frontend.config.video_formats,ext)){
return frontend.components.block.asset_video(config,src,metadata);
} else {
if(cljs.core.contains_QMARK_(logseq.common.config.img_formats(),ext)){
return frontend.components.block.resizable_image(config,title,src,metadata,full_text,true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext,new cljs.core.Keyword(null,"pdf","pdf",1586765132))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.asset-ref.is-pdf","a.asset-ref.is-pdf",-297856376),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-href","data-href",299087184),href__$1,new cljs.core.Keyword(null,"data-url","data-url",-1627669834),src,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (p1__48321_SHARP_){
return frontend.components.block.goog$module$goog$object.get(p1__48321_SHARP_,"dataTransfer").setData("file",href__$1);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.components.block.open_pdf_file(e,new cljs.core.Keyword(null,"asset-block","asset-block",1420117445).cljs$core$IFn$_invoke$arity$1(config),src);
})], null),title], null);
} else {
if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.asset-ref","a.asset-ref",-1346816545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),src,new cljs.core.Keyword(null,"on-click","on-click",1632826543),share_fn], null),title], null);
} else {
if(frontend.util.web_platform_QMARK_){
var file_name = frontend.components.block.asset.link_file_name(asset_block,ext);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.asset-ref","a.asset-ref",-1346816545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),src,new cljs.core.Keyword(null,"download","download",-300081668),file_name], null),file_name], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return asset_block;
} else {
return and__5140__auto__;
}
})())){
var file_name = frontend.components.block.asset.link_file_name(asset_block,ext);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.asset-ref","a.asset-ref",-1346816545),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var repo_dir__$1 = frontend.config.get_repo_dir(repo);
var ext_url = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(asset_block);
var remote_ext_url_QMARK_ = (((!(clojure.string.blank_QMARK_(ext_url)))) && (((logseq.common.path.protocol_url_QMARK_(ext_url)) && (cljs.core.not(logseq.common.config.local_protocol_asset_QMARK_(ext_url))))));
var local_ext_url_QMARK_ = (function (){var and__5140__auto__ = (!(clojure.string.blank_QMARK_(ext_url)));
if(and__5140__auto__){
return logseq.common.config.local_relative_asset_QMARK_(ext_url);
} else {
return and__5140__auto__;
}
})();
var file_fpath = (cljs.core.truth_(local_ext_url_QMARK_)?logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.replace(ext_url,/^[.\/]+/,"")], 0)):logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ext)?(""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ext))):null)))], 0)));
if(remote_ext_url_QMARK_){
return window.apis.openExternal(ext_url);
} else {
return window.apis.openPath(file_fpath);
}
})], null),file_name], null);
} else {
return title;

}
}
}
}
}
}
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$asset_link__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48330 = cljs.core.first(args__31746__auto__);
var G__48331 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48330,G__48331) : io.factorhouse.hsx.core.obj_get.call(null,G__48330,G__48331));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-link","asset-link",-878963468,null),args__31746__auto__),frontend$components$block$asset_link,args__31746__auto__,null);
}
};
var frontend$components$block$asset_link = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51000__i = 0, G__51000__a = new Array(arguments.length -  0);
while (G__51000__i < G__51000__a.length) {G__51000__a[G__51000__i] = arguments[G__51000__i + 0]; ++G__51000__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51000__a,0,null);
} 
return frontend$components$block$asset_link__delegate.call(this,args__31746__auto__);};
frontend$components$block$asset_link.cljs$lang$maxFixedArity = 0;
frontend$components$block$asset_link.cljs$lang$applyTo = (function (arglist__51001){
var args__31746__auto__ = cljs.core.seq(arglist__51001);
return frontend$components$block$asset_link__delegate(args__31746__auto__);
});
frontend$components$block$asset_link.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$asset_link__delegate;
return frontend$components$block$asset_link;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48332 = comp__31745__auto__;
var G__48333 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48332,G__48333) : io.factorhouse.hsx.core.react_memo.call(null,G__48332,G__48333));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-link");

return comp__31745__auto__;
})();
frontend.components.block.image_link = (function frontend$components$block$image_link(config,url,href,label,metadata,full_text){
var metadata__$1 = ((clojure.string.blank_QMARK_(metadata))?null:logseq.common.util.safe_read_map_string.cljs$core$IFn$_invoke$arity$1(metadata));
var title = cljs.core.second(cljs.core.first(label));
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),full_text], null),(cljs.core.truth_(logseq.common.config.local_relative_asset_QMARK_(href))?frontend.components.block.asset_link(config,title,href,metadata__$1,full_text):(function (){var local_path_QMARK_ = ((frontend.util.starts_with_QMARK_(href,"/")) || (frontend.util.starts_with_QMARK_(href,"~")));
var href__$1 = ((frontend.util.starts_with_QMARK_(clojure.string.lower_case(href),"http"))?href:((frontend.util.starts_with_QMARK_(href,"//"))?href:((local_path_QMARK_)?(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.handler.assets.file_path__GT_assets_url(href):href):((frontend.config.publishing_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(href,(1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Embed_data",cljs.core.first(url)))?href:(cljs.core.truth_(frontend.handler.assets.check_alias_path_QMARK_(href))?frontend.handler.assets.normalize_asset_resource_url(href):(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.handler.assets.file_path__GT_assets_url(href):href
)))))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.as-plain-image-link","div.as-plain-image-link",-1619654616),frontend.components.block.resizable_image(config,title,href__$1,metadata__$1,full_text,false)], null);
})()));
});
frontend.components.block.timestamp = (function frontend$components$block$timestamp(p__48334,kind){
var map__48335 = p__48334;
var map__48335__$1 = cljs.core.__destructure_map(map__48335);
var t = map__48335__$1;
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48335__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var _date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48335__$1,new cljs.core.Keyword(null,"_date","_date",-937395064));
var _time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48335__$1,new cljs.core.Keyword(null,"_time","_time",-1976647311));
var _repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48335__$1,new cljs.core.Keyword(null,"_repetition","_repetition",922325838));
var _wday = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48335__$1,new cljs.core.Keyword(null,"_wday","_wday",-1455464025));
var prefix = (function (){var G__48336 = kind;
var G__48336__$1 = (((G__48336 instanceof cljs.core.Keyword))?G__48336.fqn:null);
switch (G__48336__$1) {
case "scheduled":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-calendar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null)], null);

break;
case "deadline":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-calendar-times-o",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null)], null);

break;
case "date":
return null;

break;
case "closed":
return null;

break;
case "started":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-clock-o",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null)], null);

break;
case "start":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","from","ui/from",1815280328)) : t.call(null,new cljs.core.Keyword("ui","from","ui/from",1815280328)));

break;
case "stop":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","to","ui/to",192098355)) : t.call(null,new cljs.core.Keyword("ui","to","ui/to",192098355)));

break;
default:
return null;

}
})();
var class$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"closed","closed",-919675359)))?"line-through":null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.timestamp","span.timestamp",1207246744),(function (){var G__48337 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(active))], null);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48337,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
} else {
return G__48337;
}
})(),prefix,(frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1(t) : frontend.handler.export$.common.timestamp_to_string.call(null,t))], null);
});
frontend.components.block.range = (function frontend$components$block$range(p__48338,stopped_QMARK_){
var map__48339 = p__48338;
var map__48339__$1 = cljs.core.__destructure_map(map__48339);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"timestamp-range",new cljs.core.Keyword(null,"stopped","stopped",-1490414640),stopped_QMARK_], null),frontend.components.block.timestamp(start,new cljs.core.Keyword(null,"start","start",-355208981)),frontend.components.block.timestamp(stop,new cljs.core.Keyword(null,"stop","stop",-2140911342))], null);
});
frontend.components.block.heading_value__GT_level = (function frontend$components$block$heading_value__GT_level(heading,level){
if(((cljs.core.integer_QMARK_(heading)) && (((((1) <= heading)) && ((heading <= (6))))))){
return heading;
} else {
if(heading === true){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(((function (){var or__5142__auto__ = level;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1)),(6));
} else {
return null;

}
}
});
frontend.components.block.block_heading_level = (function frontend$components$block$block_heading_level(block,level){
var or__5142__auto__ = (function (){var temp__5825__auto__ = new cljs.core.Keyword("block","heading-level","block/heading-level",661361785).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var heading_level = temp__5825__auto__;
if(((cljs.core.integer_QMARK_(heading_level)) && (((((1) <= heading_level)) && ((heading_level <= (6))))))){
return heading_level;
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.block.heading_value__GT_level((function (){var or__5142__auto____$1 = (frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415)) : frontend.handler.property.util.lookup.call(null,block,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415)));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("block.temp","heading","block.temp/heading",1137221906).cljs$core$IFn$_invoke$arity$1(block);
}
})(),level);
}
});
frontend.components.block.heading_icon_size = (function frontend$components$block$heading_icon_size(heading_level){
var G__48340 = heading_level;
switch (G__48340) {
case (1):
return (28);

break;
case (2):
return (24);

break;
case (3):
return (20);

break;
case (4):
return (16);

break;
case (5):
return (13);

break;
case (6):
return (12);

break;
default:
return (14);

}
});
/**
 * Tag/node icons in the block control share heading chrome size.
 * Non-heading blocks keep the existing collapsed/expanded sizes.
 */
frontend.components.block.block_control_icon_size = (function frontend$components$block$block_control_icon_size(block,config,collapsed_QMARK_){
var temp__5823__auto__ = frontend.components.block.block_heading_level(block,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(temp__5823__auto__)){
var heading = temp__5823__auto__;
return frontend.components.block.heading_icon_size(heading);
} else {
if(cljs.core.truth_(collapsed_QMARK_)){
return (12);
} else {
return (14);
}
}
});
frontend.components.block._LT_open_page_ref = (function frontend$components$block$_LT_open_page_ref(config,page_entity,e,page_name,contents_page_QMARK_){
if((!(frontend.util.right_click_QMARK_(e)))){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"ignore-alias?","ignore-alias?",1336725364).cljs$core$IFn$_invoke$arity$1(config)),(function (ignore_alias_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var and__5140__auto__ = cljs.core.not(ignore_alias_QMARK_);
if(and__5140__auto__){
var or__5142__auto__ = frontend.db.async._LT_get_alias_source_page(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.db.async._LT_get_block_source(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity));
}
} else {
return and__5140__auto__;
}
})()),(function (source_page){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = source_page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return page_entity;
}
})()),(function (page){
return promesa.protocols._promise((cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))?(cljs.core.truth_(page)?frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397)):null):(((page == null))?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),page_name], null)):((((cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138).cljs$core$IFn$_invoke$arity$1(config))) && (cljs.core.not((function (){var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(1));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = e.metaKey;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return e.ctrlKey;
}
}
})()))))?(function (){var fexpr__48341 = new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138).cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__48341.cljs$core$IFn$_invoke$arity$1 ? fexpr__48341.cljs$core$IFn$_invoke$arity$1(e) : fexpr__48341.call(null,e));
})():(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.page.entity_is_current_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.page.entity_is_current_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page_entity);
}
})())?null:(function (){var f = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"on-redirect-to-page","on-redirect-to-page",-1420791266).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.route.redirect_to_page_BANG_;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(frontend.handler.block._STAR_swiped_QMARK_);
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
var G__48342 = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
})();
var G__48343 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-alias?","ignore-alias?",1336725364),ignore_alias_QMARK_], null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48342,G__48343) : f.call(null,G__48342,G__48343));
}
})())
))));
}));
}));
}));
}));
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = contents_page_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto____$1)){
return frontend.state.get_left_sidebar_open_QMARK_();
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.ui.close_left_sidebar_BANG_();
} else {
return null;
}
});
/**
 * The inner div of page reference component
 * 
 * page-name-in-block is the overridable name of the page (legacy)
 * 
 * All page-names are sanitized except page-name-in-block
 */
frontend.components.block.page_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$block$page_inner(p__48344,page_entity,children,label){
var map__48345 = p__48344;
var map__48345__$1 = cljs.core.__destructure_map(map__48345);
var config = map__48345__$1;
var contents_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48345__$1,new cljs.core.Keyword(null,"contents-page?","contents-page?",2137383699));
var other_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48345__$1,new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322));
var on_context_menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48345__$1,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340));
var stop_event_propagation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48345__$1,new cljs.core.Keyword(null,"stop-event-propagation?","stop-event-propagation?",-1412945595));
var with_tags_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48345__$1,new cljs.core.Keyword(null,"with-tags?","with-tags?",551159510),true);
var show_unique_title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48345__$1,new cljs.core.Keyword(null,"show-unique-title?","show-unique-title?",-1545303427),true);
var _STAR_mouse_down_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var vec__48346 = logseq.shui.hooks.use_atom(_STAR_mouse_down_QMARK_);
var mouse_down_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48346,(0),null);
var tag_QMARK_ = new cljs.core.Keyword(null,"tag?","tag?",1714008252).cljs$core$IFn$_invoke$arity$1(config);
var recycled_QMARK_ = (logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(page_entity) : logseq.db.recycled_QMARK_.call(null,page_entity));
var page_name = (cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_entity))?(function (){var G__48349 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_entity);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__48349) : frontend.util.page_name_sanity_lc.call(null,G__48349));
})():null);
var untitled_QMARK_ = (function (){var and__5140__auto__ = page_name;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.entity.page_QMARK_(page_entity);
if(cljs.core.truth_(and__5140__auto____$1)){
return (((!((cljs.core.parse_uuid(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_entity)) == null)))) || (clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_entity))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var show_icon_QMARK_ = new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459).cljs$core$IFn$_invoke$arity$1(config);
var icon_size = frontend.components.block.heading_icon_size(new cljs.core.Keyword(null,"parent-heading","parent-heading",-1744367606).cljs$core$IFn$_invoke$arity$1(config));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.relative","a.relative",-1117491633),(function (){var G__48350 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"data-uuid","data-uuid",550264174),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138)],["0",(function (){var G__48351 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity);
if((G__48351 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48351));
}
})(),(cljs.core.truth_(recycled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","deleted","ui/deleted",-510068491)], 0)):null),(function (e){
if(cljs.core.truth_(mouse_down_QMARK_)){
frontend.handler.editor.save_current_block_before_navigate_BANG_();

if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-click?","disable-click?",-1186799869).cljs$core$IFn$_invoke$arity$1(config))){
} else {
frontend.components.block._LT_open_page_ref(config,page_entity,e,page_name,contents_page_QMARK_);
}

return cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,false);
} else {
return null;
}
}),(function (e){
if(cljs.core.truth_((function (){var and__5140__auto__ = e;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")) && (cljs.core.not(other_position_QMARK_)));
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(e);

frontend.handler.editor.save_current_block_before_navigate_BANG_();

return frontend.components.block._LT_open_page_ref(config,page_entity,e,page_name,contents_page_QMARK_);
} else {
return null;
}
}),(function (e){
return frontend.handler.editor.block__GT_data_transfer_BANG_(page_name,e,true);
}),true,(function (){var G__48352 = (cljs.core.truth_(tag_QMARK_)?"tag":"page-ref");
var G__48352__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(config))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48352)+" page-property-key block-property"):G__48352);
var G__48352__$2 = (cljs.core.truth_(recycled_QMARK_)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48352__$1)+" line-through opacity-70"):G__48352__$1);
if(cljs.core.truth_(untitled_QMARK_)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48352__$2)+" opacity-50");
} else {
return G__48352__$2;
}
})(),page_name,(function (e){
if(cljs.core.truth_(stop_event_propagation_QMARK_)){
frontend.util.stop_propagation(e);
} else {
}

if(frontend.util.link_QMARK_(e.target)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = on_context_menu;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button);
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = other_position_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.meta_key_QMARK_(e);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,true);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = other_position_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.shift_key_QMARK_(e));
} else {
return and__5140__auto__;
}
})())){
var G__48353 = e.target;
var G__48353__$1 = (((G__48353 == null))?null:G__48353.closest(".jtrigger"));
if((G__48353__$1 == null)){
return null;
} else {
return G__48353__$1.click();
}
} else {
e.preventDefault();

return cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,true);

}
}
}
}
})]);
if(cljs.core.truth_(on_context_menu)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48350,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),on_context_menu);
} else {
return G__48350;
}
})(),(cljs.core.truth_((function (){var and__5140__auto__ = show_icon_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(tag_QMARK_);
} else {
return and__5140__auto__;
}
})())?(function (){var own_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_entity,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
var emoji_QMARK_ = ((cljs.core.map_QMARK_(own_icon)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(own_icon),new cljs.core.Keyword(null,"emoji","emoji",1031230144))));
var temp__5825__auto__ = frontend.components.icon.get_node_icon_cp(page_entity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true,new cljs.core.Keyword(null,"not-text-or-page?","not-text-or-page?",1103352804),true,new cljs.core.Keyword(null,"size","size",1098693007),icon_size], null));
if(cljs.core.truth_(temp__5825__auto__)){
var icon = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"icon-emoji-wrap "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((emoji_QMARK_)?"as-emoji":null)))], null),icon], null);
} else {
return null;
}
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((((cljs.core.coll_QMARK_(children)) && (cljs.core.seq(children))))?(function (){var iter__5628__auto__ = (function frontend$components$block$page_inner_$_iter__48354(s__48355){
return (new cljs.core.LazySeq(null,(function (){
var s__48355__$1 = s__48355;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48355__$1);
if(temp__5825__auto__){
var s__48355__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48355__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__48355__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__48357 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__48356 = (0);
while(true){
if((i__48356 < size__5627__auto__)){
var child = cljs.core._nth(c__5626__auto__,i__48356);
cljs.core.chunk_append(b__48357,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(child),"Label"))?cljs.core.last(child):(function (){var map__48358 = cljs.core.last(child);
var map__48358__$1 = cljs.core.__destructure_map(map__48358);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48358__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var page_name__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.page_reference,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"children","children",-940561982),children__$1),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return page_name__$1;
}
})(),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page_name__$1], null));
})()));

var G__51020 = (i__48356 + (1));
i__48356 = G__51020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48357),frontend$components$block$page_inner_$_iter__48354(cljs.core.chunk_rest(s__48355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48357),null);
}
} else {
var child = cljs.core.first(s__48355__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(child),"Label"))?cljs.core.last(child):(function (){var map__48359 = cljs.core.last(child);
var map__48359__$1 = cljs.core.__destructure_map(map__48359);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48359__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var page_name__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.page_reference,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"children","children",-940561982),children__$1),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return page_name__$1;
}
})(),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page_name__$1], null));
})()),frontend$components$block$page_inner_$_iter__48354(cljs.core.rest(s__48355__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(children);
})():(cljs.core.truth_((function (){var and__5140__auto__ = label;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof label === 'string') && ((!(clojure.string.blank_QMARK_(label)))));
} else {
return and__5140__auto__;
}
})())?label:((cljs.core.coll_QMARK_(label))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label))):(cljs.core.truth_(frontend.util.entity.page_QMARK_(page_entity))?(cljs.core.truth_(untitled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","untitled","ui/untitled",301271588)], 0)):(function (){var s = frontend.util.trim_safe((cljs.core.truth_(show_unique_title_QMARK_)?frontend.handler.block.block_unique_title.cljs$core$IFn$_invoke$arity$variadic(page_entity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-tags?","with-tags?",551159510),with_tags_QMARK_], null)], 0)):new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_entity)));
if(cljs.core.truth_((function (){var and__5140__auto__ = tag_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"hide-tag-symbol?","hide-tag-symbol?",1083852788).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5140__auto__;
}
})())){
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return s;
}
})()):(function (){var G__48360 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"page-ref?","page-ref?",677685143),true);
var G__48361 = page_entity;
var G__48362 = cljs.core.PersistentArrayMap.EMPTY;
return (frontend.components.block.block_title.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.block_title.cljs$core$IFn$_invoke$arity$3(G__48360,G__48361,G__48362) : frontend.components.block.block_title.call(null,G__48360,G__48361,G__48362));
})()
))))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$page_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48363 = cljs.core.first(args__31746__auto__);
var G__48364 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48363,G__48364) : io.factorhouse.hsx.core.obj_get.call(null,G__48363,G__48364));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"page-inner","page-inner",-1896267027,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$block$page_inner,args__31746__auto__,null);
}
};
var frontend$components$block$page_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51024__i = 0, G__51024__a = new Array(arguments.length -  0);
while (G__51024__i < G__51024__a.length) {G__51024__a[G__51024__i] = arguments[G__51024__i + 0]; ++G__51024__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51024__a,0,null);
} 
return frontend$components$block$page_inner__delegate.call(this,args__31746__auto__);};
frontend$components$block$page_inner.cljs$lang$maxFixedArity = 0;
frontend$components$block$page_inner.cljs$lang$applyTo = (function (arglist__51025){
var args__31746__auto__ = cljs.core.seq(arglist__51025);
return frontend$components$block$page_inner__delegate(args__31746__auto__);
});
frontend$components$block$page_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$page_inner__delegate;
return frontend$components$block$page_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48365 = comp__31745__auto__;
var G__48366 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48365,G__48366) : io.factorhouse.hsx.core.react_memo.call(null,G__48365,G__48366));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-inner");

return comp__31745__auto__;
})();
frontend.components.block.popup_preview_impl = (function (){var render_fn__31744__auto__ = (function frontend$components$block$popup_preview_impl(children,p__48367){
var map__48368 = p__48367;
var map__48368__$1 = cljs.core.__destructure_map(map__48368);
var _STAR_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var _STAR_timer1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"*timer1","*timer1",605841781));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var set_visible_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"set-visible!","set-visible!",-1042705644));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var _STAR_el_popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"*el-popup","*el-popup",627144628));
var _STAR_el_trigger = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
if(visible_QMARK_ === true){
var G__48369_51027 = logseq.shui.hooks.deref(_STAR_el_trigger);
var G__48370_51028 = render;
var G__48371_51029 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root-props","root-props",-1015460595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onOpenChange","onOpenChange",-675762944),(function (v){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(v) : set_visible_BANG_.call(null,v));
}),new cljs.core.Keyword(null,"modal","modal",-1031880850),false], null),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-preview-popup",new cljs.core.Keyword(null,"onInteractOutside","onInteractOutside",-1720265251),(function (e){
return e.preventDefault();
}),new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (e){
if(frontend.state.editing_QMARK_()){
e.preventDefault();

var G__48372 = logseq.shui.hooks.deref(_STAR_el_popup);
if((G__48372 == null)){
return null;
} else {
return G__48372.focus();
}
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),false], null);
(logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__48369_51027,G__48370_51028,G__48371_51029) : logseq.shui.ui.popup_show_BANG_.call(null,G__48369_51027,G__48370_51028,G__48371_51029));
} else {
}

return (function (){
if(cljs.core.truth_(visible_QMARK_)){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
} else {
return null;
}
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [visible_QMARK_], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.preview-ref-link","span.preview-ref-link",-2139556942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_trigger,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__48373 = e.target;
if((G__48373 == null)){
return null;
} else {
return G__48373.closest(".preview-ref-link");
}
})(),logseq.shui.hooks.deref(_STAR_el_trigger))){
var timer = logseq.shui.hooks.deref(_STAR_timer);
var timer1 = logseq.shui.hooks.deref(_STAR_timer1);
if(cljs.core.truth_(timer)){
} else {
logseq.shui.hooks.set_ref_BANG_(_STAR_timer,setTimeout((function (){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_visible_BANG_.call(null,true));
}),(1000)));
}

if(cljs.core.truth_(timer1)){
clearTimeout(timer1);

return logseq.shui.hooks.set_ref_BANG_(_STAR_timer1,null);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
var timer = logseq.shui.hooks.deref(_STAR_timer);
var timer1 = logseq.shui.hooks.deref(_STAR_timer1);
if(((typeof timer === 'number') || (typeof timer1 === 'number'))){
if(cljs.core.truth_(timer)){
clearTimeout(timer);

logseq.shui.hooks.set_ref_BANG_(_STAR_timer,null);
} else {
}

if(cljs.core.truth_(timer1)){
return null;
} else {
return logseq.shui.hooks.set_ref_BANG_(_STAR_timer1,setTimeout((function (){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_visible_BANG_.call(null,false));
}),(300)));
}
} else {
return null;
}
})], null),children], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$popup_preview_impl__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48374 = cljs.core.first(args__31746__auto__);
var G__48375 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48374,G__48375) : io.factorhouse.hsx.core.obj_get.call(null,G__48374,G__48375));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"popup-preview-impl","popup-preview-impl",1558831646,null),args__31746__auto__),frontend$components$block$popup_preview_impl,args__31746__auto__,null);
}
};
var frontend$components$block$popup_preview_impl = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51033__i = 0, G__51033__a = new Array(arguments.length -  0);
while (G__51033__i < G__51033__a.length) {G__51033__a[G__51033__i] = arguments[G__51033__i + 0]; ++G__51033__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51033__a,0,null);
} 
return frontend$components$block$popup_preview_impl__delegate.call(this,args__31746__auto__);};
frontend$components$block$popup_preview_impl.cljs$lang$maxFixedArity = 0;
frontend$components$block$popup_preview_impl.cljs$lang$applyTo = (function (arglist__51034){
var args__31746__auto__ = cljs.core.seq(arglist__51034);
return frontend$components$block$popup_preview_impl__delegate(args__31746__auto__);
});
frontend$components$block$popup_preview_impl.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$popup_preview_impl__delegate;
return frontend$components$block$popup_preview_impl;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48376 = comp__31745__auto__;
var G__48377 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48376,G__48377) : io.factorhouse.hsx.core.react_memo.call(null,G__48376,G__48377));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"popup-preview-impl");

return comp__31745__auto__;
})();
frontend.components.block.page_preview_content = (function (){var render_fn__31744__auto__ = (function frontend$components$block$page_preview_content(p__48378,source_uuid){
var map__48379 = p__48378;
var map__48379__$1 = cljs.core.__destructure_map(map__48379);
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var _STAR_el_popup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379__$1,new cljs.core.Keyword(null,"*el-popup","*el-popup",627144628));
var _STAR_timer1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379__$1,new cljs.core.Keyword(null,"*timer1","*timer1",605841781));
var set_visible_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379__$1,new cljs.core.Keyword(null,"set-visible!","set-visible!",-1042705644));
var vec__48380 = logseq.shui.hooks.use_state(false);
var ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48380,(0),null);
var set_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48380,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var el_popup = logseq.shui.hooks.deref(_STAR_el_popup);
var focus_BANG_ = (function (){
return setTimeout((function (){
return el_popup.focus();
}));
});
(set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_BANG_.call(null,true));

focus_BANG_();

return (function (){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_visible_BANG_.call(null,false));
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tippy-wrapper.as-page","div.tippy-wrapper.as-page",-1396021158),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_popup,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(64)], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_timer1);
if(cljs.core.truth_(temp__5825__auto__)){
var timer1 = temp__5825__auto__;
return clearTimeout(timer1);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
if(frontend.ui.last_shui_preview_popup_QMARK_()){
return logseq.shui.hooks.set_ref_BANG_(_STAR_timer1,setTimeout((function (){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_visible_BANG_.call(null,false));
}),(500)));
} else {
return null;
}
})], null),(function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = ready_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.state.get_page_blocks_cp();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var page_cp = temp__5825__auto__;
var G__48383 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"page-name","page-name",974981762),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_uuid)),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_,new cljs.core.Keyword(null,"scroll-container","scroll-container",-1938238550),(function (){var G__48384 = logseq.shui.hooks.deref(_STAR_el_popup);
if((G__48384 == null)){
return null;
} else {
return G__48384.closest(".ls-preview-popup");
}
})(),new cljs.core.Keyword(null,"preview?","preview?",590561578),true], null);
return (page_cp.cljs$core$IFn$_invoke$arity$1 ? page_cp.cljs$core$IFn$_invoke$arity$1(G__48383) : page_cp.call(null,G__48383));
} else {
return null;
}
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$page_preview_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48385 = cljs.core.first(args__31746__auto__);
var G__48386 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48385,G__48386) : io.factorhouse.hsx.core.obj_get.call(null,G__48385,G__48386));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-preview-content","page-preview-content",-532935448,null),args__31746__auto__),frontend$components$block$page_preview_content,args__31746__auto__,null);
}
};
var frontend$components$block$page_preview_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51038__i = 0, G__51038__a = new Array(arguments.length -  0);
while (G__51038__i < G__51038__a.length) {G__51038__a[G__51038__i] = arguments[G__51038__i + 0]; ++G__51038__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51038__a,0,null);
} 
return frontend$components$block$page_preview_content__delegate.call(this,args__31746__auto__);};
frontend$components$block$page_preview_content.cljs$lang$maxFixedArity = 0;
frontend$components$block$page_preview_content.cljs$lang$applyTo = (function (arglist__51039){
var args__31746__auto__ = cljs.core.seq(arglist__51039);
return frontend$components$block$page_preview_content__delegate(args__31746__auto__);
});
frontend$components$block$page_preview_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$page_preview_content__delegate;
return frontend$components$block$page_preview_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48387 = comp__31745__auto__;
var G__48388 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48387,G__48388) : io.factorhouse.hsx.core.react_memo.call(null,G__48387,G__48388));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-preview-content");

return comp__31745__auto__;
})();
frontend.components.block.page_preview_trigger = (function (){var render_fn__31744__auto__ = (function frontend$components$block$page_preview_trigger(p__48389,page_entity){
var map__48390 = p__48389;
var map__48390__$1 = cljs.core.__destructure_map(map__48390);
var config = map__48390__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48390__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48390__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48390__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var manual_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48390__$1,new cljs.core.Keyword(null,"manual?","manual?",1839586876));
var _STAR_timer = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_timer1 = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_el_popup = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_el_wrap = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__48391 = logseq.shui.hooks.use_state(null);
var in_popup_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48391,(0),null);
var set_in_popup_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48391,(1),null);
var vec__48394 = logseq.shui.hooks.use_state(null);
var visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394,(0),null);
var set_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394,(1),null);
var _ = frontend.components.block.preview_render = (function (){var render_fn__31744__auto__ = (function frontend$components$block$page_preview_trigger_$_preview_render(){
var temp__5825__auto__ = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-preview-source","page-preview-source",985685741),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var source_uuid = temp__5825__auto__;
return frontend.components.block.page_preview_content(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_,new cljs.core.Keyword(null,"*el-popup","*el-popup",627144628),_STAR_el_popup,new cljs.core.Keyword(null,"*timer1","*timer1",605841781),_STAR_timer1,new cljs.core.Keyword(null,"set-visible!","set-visible!",-1042705644),set_visible_BANG_], null),source_uuid);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$page_preview_trigger_$_preview_render__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48397 = cljs.core.first(args__31746__auto__);
var G__48398 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48397,G__48398) : io.factorhouse.hsx.core.obj_get.call(null,G__48397,G__48398));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"preview-render","preview-render",-953719911,null),args__31746__auto__),frontend$components$block$page_preview_trigger_$_preview_render,args__31746__auto__,null);
}
};
var frontend$components$block$page_preview_trigger_$_preview_render = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51041__i = 0, G__51041__a = new Array(arguments.length -  0);
while (G__51041__i < G__51041__a.length) {G__51041__a[G__51041__i] = arguments[G__51041__i + 0]; ++G__51041__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51041__a,0,null);
} 
return frontend$components$block$page_preview_trigger_$_preview_render__delegate.call(this,args__31746__auto__);};
frontend$components$block$page_preview_trigger_$_preview_render.cljs$lang$maxFixedArity = 0;
frontend$components$block$page_preview_trigger_$_preview_render.cljs$lang$applyTo = (function (arglist__51043){
var args__31746__auto__ = cljs.core.seq(arglist__51043);
return frontend$components$block$page_preview_trigger_$_preview_render__delegate(args__31746__auto__);
});
frontend$components$block$page_preview_trigger_$_preview_render.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$page_preview_trigger_$_preview_render__delegate;
return frontend$components$block$page_preview_trigger_$_preview_render;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48399 = comp__31745__auto__;
var G__48400 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48399,G__48400) : io.factorhouse.hsx.core.react_memo.call(null,G__48399,G__48400));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"preview-render");

return comp__31745__auto__;
})();
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var G__48401 = logseq.shui.hooks.deref(_STAR_el_wrap);
if((G__48401 == null)){
return null;
} else {
return G__48401.closest(".ui__popover-content, .ui__dropdown-menu-content, .ui__context-menu-content");
}
})())){
return (set_in_popup_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_in_popup_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_in_popup_BANG_.call(null,true));
} else {
return (set_in_popup_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_in_popup_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_in_popup_BANG_.call(null,false));
}
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_wrap], null),((cljs.core.boolean_QMARK_(in_popup_QMARK_))?(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword(null,"preview?","preview?",590561578).cljs$core$IFn$_invoke$arity$1(config));
if(and__5140__auto__){
var and__5140__auto____$1 = (!(in_popup_QMARK_));
if(and__5140__auto____$1){
var or__5142__auto__ = cljs.core.not(manual_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return open_QMARK_;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?frontend.components.block.popup_preview_impl(children,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),visible_QMARK_,new cljs.core.Keyword(null,"set-visible!","set-visible!",-1042705644),set_visible_BANG_,new cljs.core.Keyword(null,"*timer","*timer",-637700106),_STAR_timer,new cljs.core.Keyword(null,"*timer1","*timer1",605841781),_STAR_timer1,new cljs.core.Keyword(null,"render","render",-1408033454),frontend.components.block.preview_render,new cljs.core.Keyword(null,"*el-popup","*el-popup",627144628),_STAR_el_popup], null)):children):children)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$page_preview_trigger__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48402 = cljs.core.first(args__31746__auto__);
var G__48403 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48402,G__48403) : io.factorhouse.hsx.core.obj_get.call(null,G__48402,G__48403));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-preview-trigger","page-preview-trigger",-1295628277,null),args__31746__auto__),frontend$components$block$page_preview_trigger,args__31746__auto__,null);
}
};
var frontend$components$block$page_preview_trigger = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51046__i = 0, G__51046__a = new Array(arguments.length -  0);
while (G__51046__i < G__51046__a.length) {G__51046__a[G__51046__i] = arguments[G__51046__i + 0]; ++G__51046__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51046__a,0,null);
} 
return frontend$components$block$page_preview_trigger__delegate.call(this,args__31746__auto__);};
frontend$components$block$page_preview_trigger.cljs$lang$maxFixedArity = 0;
frontend$components$block$page_preview_trigger.cljs$lang$applyTo = (function (arglist__51047){
var args__31746__auto__ = cljs.core.seq(arglist__51047);
return frontend$components$block$page_preview_trigger__delegate(args__31746__auto__);
});
frontend$components$block$page_preview_trigger.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$page_preview_trigger__delegate;
return frontend$components$block$page_preview_trigger;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48404 = comp__31745__auto__;
var G__48405 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48404,G__48405) : io.factorhouse.hsx.core.react_memo.call(null,G__48404,G__48405));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-preview-trigger");

return comp__31745__auto__;
})();
frontend.components.block.inline_text = (function frontend$components$block$inline_text(var_args){
var G__48407 = arguments.length;
switch (G__48407) {
case 2:
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2 = (function (format,v){
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,format,v);
}));

(frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3 = (function (config,format,v){
if(typeof v === 'string'){
var inline_list = logseq.graph_parser.mldoc.inline__GT_edn(v,frontend.format.mldoc.get_default_config(format));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline","div.inline",1736505598),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"add-margin?","add-margin?",-1261100339),true))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-1"], null):null),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,inline_list) : frontend.components.block.map_inline.call(null,config,inline_list))], null);
} else {
return null;
}
}));

(frontend.components.block.inline_text.cljs$lang$maxFixedArity = 3);

/**
 * Component for a page. `page` argument contains :block/name which can be (un)sanitized page name.
 *                          Keys for `config`:
 *                          - `:preview?`: Is this component under preview mode? (If true, `page-preview-trigger` won't be registered to this `page-cp`)
 */
frontend.components.block.page_cp_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$block$page_cp_inner(p__48408,page){
var map__48409 = p__48408;
var map__48409__$1 = cljs.core.__destructure_map(map__48409);
var config = map__48409__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48409__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48409__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48409__$1,new cljs.core.Keyword(null,"preview?","preview?",590561578));
var disable_preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48409__$1,new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365));
var show_non_exists_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48409__$1,new cljs.core.Keyword(null,"show-non-exists-page?","show-non-exists-page?",-1180311666));
var tag_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48409__$1,new cljs.core.Keyword(null,"tag?","tag?",1714008252));
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"block","block",664686210),page);
if(cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page))){
var page_name = (function (){var G__48410 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page);
if((G__48410 == null)){
return null;
} else {
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__48410) : frontend.util.page_name_sanity_lc.call(null,G__48410));
}
})();
var inner = frontend.components.block.page_inner(config__$1,page,children,label);
var dialog_QMARK_ = logseq.shui.dialog.core.has_dialog_QMARK_();
if(((cljs.core.not(frontend.util.mobile_QMARK_())) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config__$1))) && ((((!(preview_QMARK_ === false))) && (((cljs.core.not(disable_preview_QMARK_)) && ((!(dialog_QMARK_))))))))))){
return frontend.components.block.page_preview_trigger(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"children","children",-940561982),inner),page);
} else {
return inner;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(and__5140__auto__)){
return show_non_exists_page_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return frontend.components.block.page_inner(config__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null),page], 0)),children,label);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(tag_QMARK_)?"#":null),(cljs.core.truth_(tag_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.bracket","span.text-gray-500.bracket",-1550458538),logseq.common.util.page_ref.left_brackets], null)),(function (){var or__5142__auto__ = label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
})(),(cljs.core.truth_(tag_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.bracket","span.text-gray-500.bracket",-1550458538),logseq.common.util.page_ref.right_brackets], null))], null);
} else {
return null;

}
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$page_cp_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48411 = cljs.core.first(args__31746__auto__);
var G__48412 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48411,G__48412) : io.factorhouse.hsx.core.obj_get.call(null,G__48411,G__48412));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-cp-inner","page-cp-inner",433904194,null),args__31746__auto__),frontend$components$block$page_cp_inner,args__31746__auto__,null);
}
};
var frontend$components$block$page_cp_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51055__i = 0, G__51055__a = new Array(arguments.length -  0);
while (G__51055__i < G__51055__a.length) {G__51055__a[G__51055__i] = arguments[G__51055__i + 0]; ++G__51055__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51055__a,0,null);
} 
return frontend$components$block$page_cp_inner__delegate.call(this,args__31746__auto__);};
frontend$components$block$page_cp_inner.cljs$lang$maxFixedArity = 0;
frontend$components$block$page_cp_inner.cljs$lang$applyTo = (function (arglist__51056){
var args__31746__auto__ = cljs.core.seq(arglist__51056);
return frontend$components$block$page_cp_inner__delegate(args__31746__auto__);
});
frontend$components$block$page_cp_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$page_cp_inner__delegate;
return frontend$components$block$page_cp_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48413 = comp__31745__auto__;
var G__48414 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48413,G__48414) : io.factorhouse.hsx.core.react_memo.call(null,G__48413,G__48414));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-cp-inner");

return comp__31745__auto__;
})();
frontend.components.block.subscribed_page_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$subscribed_page_cp(config,page_uuid){
var temp__5825__auto__ = frontend.db.hooks.use_block(page_uuid);
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
return frontend.components.block.page_cp_inner(config,page);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$subscribed_page_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48415 = cljs.core.first(args__31746__auto__);
var G__48416 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48415,G__48416) : io.factorhouse.hsx.core.obj_get.call(null,G__48415,G__48416));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"subscribed-page-cp","subscribed-page-cp",2051631653,null),args__31746__auto__),frontend$components$block$subscribed_page_cp,args__31746__auto__,null);
}
};
var frontend$components$block$subscribed_page_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51058__i = 0, G__51058__a = new Array(arguments.length -  0);
while (G__51058__i < G__51058__a.length) {G__51058__a[G__51058__i] = arguments[G__51058__i + 0]; ++G__51058__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51058__a,0,null);
} 
return frontend$components$block$subscribed_page_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$subscribed_page_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$subscribed_page_cp.cljs$lang$applyTo = (function (arglist__51059){
var args__31746__auto__ = cljs.core.seq(arglist__51059);
return frontend$components$block$subscribed_page_cp__delegate(args__31746__auto__);
});
frontend$components$block$subscribed_page_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$subscribed_page_cp__delegate;
return frontend$components$block$subscribed_page_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48417 = comp__31745__auto__;
var G__48418 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48417,G__48418) : io.factorhouse.hsx.core.react_memo.call(null,G__48417,G__48418));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"subscribed-page-cp");

return comp__31745__auto__;
})();
frontend.components.block.page_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$page_cp(config,page){
var page_uuid = ((cljs.core.uuid_QMARK_(page))?page:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page));
var page_name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_((function (){var and__5140__auto__ = page_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var and__5140__auto____$1 = new cljs.core.Keyword(null,"skip-async-load?","skip-async-load?",168412205).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto____$1)){
var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block.temp","first-window-preview?","block.temp/first-window-preview?",1357846098).cljs$core$IFn$_invoke$arity$1(page) === true;
}
} else {
return and__5140__auto____$1;
}
})());
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.subscribed_page_cp,config,page_uuid], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.page_cp_inner,config,((cljs.core.map_QMARK_(page))?page:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid,new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null))], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$page_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48419 = cljs.core.first(args__31746__auto__);
var G__48420 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48419,G__48420) : io.factorhouse.hsx.core.obj_get.call(null,G__48419,G__48420));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-cp","page-cp",-1587873174,null),args__31746__auto__),frontend$components$block$page_cp,args__31746__auto__,null);
}
};
var frontend$components$block$page_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51062__i = 0, G__51062__a = new Array(arguments.length -  0);
while (G__51062__i < G__51062__a.length) {G__51062__a[G__51062__i] = arguments[G__51062__i + 0]; ++G__51062__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51062__a,0,null);
} 
return frontend$components$block$page_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$page_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$page_cp.cljs$lang$applyTo = (function (arglist__51063){
var args__31746__auto__ = cljs.core.seq(arglist__51063);
return frontend$components$block$page_cp__delegate(args__31746__auto__);
});
frontend$components$block$page_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$page_cp__delegate;
return frontend$components$block$page_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48421 = comp__31745__auto__;
var G__48422 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48421,G__48422) : io.factorhouse.hsx.core.react_memo.call(null,G__48421,G__48422));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-cp");

return comp__31745__auto__;
})();
frontend.components.block.asset_reference = (function (){var render_fn__31744__auto__ = (function frontend$components$block$asset_reference(config,title,path){
var repo = frontend.state.get_current_repo();
var real_path_url = ((logseq.common.util.url_QMARK_(path))?path:((logseq.common.path.absolute_QMARK_(path))?path:frontend.handler.assets.resolve_asset_real_path_url(repo,path)
));
var ext_name = frontend.util.get_file_ext(path);
var title_or_path = ((typeof title === 'string')?title:((cljs.core.seq(title))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : frontend.components.block.map_inline.call(null,config,title))):path
));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-ref-wrap","div.asset-ref-wrap",-1474584771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ext","data-ext",-1513571472),ext_name], null),((cljs.core.contains_QMARK_(frontend.config.video_formats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ext_name)))?frontend.components.block.asset_video(config,real_path_url,null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.asset-ref","a.asset-ref",-1346816545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),real_path_url], null),title_or_path], null)
)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$asset_reference__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48423 = cljs.core.first(args__31746__auto__);
var G__48424 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48423,G__48424) : io.factorhouse.hsx.core.obj_get.call(null,G__48423,G__48424));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-reference","asset-reference",1610931769,null),args__31746__auto__),frontend$components$block$asset_reference,args__31746__auto__,null);
}
};
var frontend$components$block$asset_reference = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51065__i = 0, G__51065__a = new Array(arguments.length -  0);
while (G__51065__i < G__51065__a.length) {G__51065__a[G__51065__i] = arguments[G__51065__i + 0]; ++G__51065__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51065__a,0,null);
} 
return frontend$components$block$asset_reference__delegate.call(this,args__31746__auto__);};
frontend$components$block$asset_reference.cljs$lang$maxFixedArity = 0;
frontend$components$block$asset_reference.cljs$lang$applyTo = (function (arglist__51066){
var args__31746__auto__ = cljs.core.seq(arglist__51066);
return frontend$components$block$asset_reference__delegate(args__31746__auto__);
});
frontend$components$block$asset_reference.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$asset_reference__delegate;
return frontend$components$block$asset_reference;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48425 = comp__31745__auto__;
var G__48426 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48425,G__48426) : io.factorhouse.hsx.core.react_memo.call(null,G__48425,G__48426));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-reference");

return comp__31745__auto__;
})();
frontend.components.block.maybe_request_asset_download_BANG_ = (function frontend$components$block$maybe_request_asset_download_BANG_(file_exists_QMARK_,requested_QMARK_,block){
var repo = frontend.state.get_current_repo();
var asset_file_write_finish = frontend.state.get_state(new cljs.core.Keyword("assets","asset-file-write-finish","assets/asset-file-write-finish",1870176846));
var asset_file_write_finished_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(asset_file_write_finish,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))], null));
var file_ready_QMARK_ = (function (){var or__5142__auto__ = file_exists_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return asset_file_write_finished_QMARK_;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(requested_QMARK_) === true;
if(and__5140__auto__){
return file_ready_QMARK_;
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(requested_QMARK_,false);
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(cljs.core.deref(requested_QMARK_));
if(and__5140__auto__){
return frontend.handler.assets.maybe_request_remote_asset_download_BANG_(repo,block,file_ready_QMARK_);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.reset_BANG_(requested_QMARK_,true);
} else {
return null;
}
});
frontend.components.block.retry_missing_asset_upload_BANG_ = (function frontend$components$block$retry_missing_asset_upload_BANG_(repo,block,file_exists_QMARK__STAR_){
var asset_rpath = frontend.components.block.asset.asset_relative_path(block);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo),asset_rpath)),(function (exists_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(file_exists_QMARK__STAR_,exists_QMARK_)),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_(exists_QMARK_)?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-retry-asset-upload","thread-api/db-sync-retry-asset-upload",1702194329),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0)):null));
}));
}));
}));
});
frontend.components.block.missing_asset_file = (function (){var render_fn__31744__auto__ = (function frontend$components$block$missing_asset_file(block,on_reload){
var asset_rpath = frontend.components.block.asset.asset_relative_path(block);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-missing-file.warning.flex.items-center.gap-2.text-sm","div.asset-missing-file.warning.flex.items-center.gap-2.text-sm",1666103135),frontend.ui.icon("alert-triangle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-1","span.flex-1",1756749525),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","missing-file","asset/missing-file",2087445095),asset_rpath], 0))], null),(function (){var G__48427 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_reload], null);
var G__48428 = frontend.ui.icon("refresh",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
var G__48429 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","reload-file","asset/reload-file",-672807928)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__48427,G__48428,G__48429) : logseq.shui.ui.button.call(null,G__48427,G__48428,G__48429));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$missing_asset_file__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48430 = cljs.core.first(args__31746__auto__);
var G__48431 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48430,G__48431) : io.factorhouse.hsx.core.obj_get.call(null,G__48430,G__48431));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"missing-asset-file","missing-asset-file",1901210063,null),args__31746__auto__),frontend$components$block$missing_asset_file,args__31746__auto__,null);
}
};
var frontend$components$block$missing_asset_file = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51070__i = 0, G__51070__a = new Array(arguments.length -  0);
while (G__51070__i < G__51070__a.length) {G__51070__a[G__51070__i] = arguments[G__51070__i + 0]; ++G__51070__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51070__a,0,null);
} 
return frontend$components$block$missing_asset_file__delegate.call(this,args__31746__auto__);};
frontend$components$block$missing_asset_file.cljs$lang$maxFixedArity = 0;
frontend$components$block$missing_asset_file.cljs$lang$applyTo = (function (arglist__51071){
var args__31746__auto__ = cljs.core.seq(arglist__51071);
return frontend$components$block$missing_asset_file__delegate(args__31746__auto__);
});
frontend$components$block$missing_asset_file.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$missing_asset_file__delegate;
return frontend$components$block$missing_asset_file;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48432 = comp__31745__auto__;
var G__48433 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48432,G__48433) : io.factorhouse.hsx.core.react_memo.call(null,G__48432,G__48433));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"missing-asset-file");

return comp__31745__auto__;
})();
frontend.components.block.asset_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$asset_cp(config,block){
var asset_type = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(block);
var file = frontend.components.block.asset.asset_file_name(block);
var file_exists_QMARK__STAR_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),asset_type], null));
var requested_QMARK__STAR_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null));
var vec__48434 = logseq.shui.hooks.use_atom(file_exists_QMARK__STAR_);
var file_exists_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48434,(0),null);
var repo = frontend.state.get_current_repo();
var asset_file_write_finished_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("assets","asset-file-write-finish","assets/asset-file-write-finish",1870176846),repo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))], null));
var file_ready_QMARK_ = (function (){var or__5142__auto__ = file_exists_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return asset_file_write_finished_QMARK_;
}
})();
var progress_entry = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","asset-upload-download-progress","rtc/asset-upload-download-progress",-940899343),repo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))], null));
var map__48437 = progress_entry;
var map__48437__$1 = cljs.core.__destructure_map(map__48437);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var in_progress_QMARK_ = ((typeof loaded === 'number') && (((typeof total === 'number') && ((((total > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loaded,total)))))));
var percent = ((in_progress_QMARK_)?(((100) * (loaded / total)) | 0):null);
var label = (function (){var G__48438 = direction;
var G__48438__$1 = (((G__48438 instanceof cljs.core.Keyword))?G__48438.fqn:null);
switch (G__48438__$1) {
case "upload":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","uploading","asset/uploading",1484067889)], 0));

break;
case "download":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","downloading","asset/downloading",-239412065)], 0));

break;
default:
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","syncing","asset/syncing",-165811086)], 0));

}
})();
var progress_view = ((in_progress_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-transfer-progress","div.asset-transfer-progress",1769466894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-transfer-progress-label","div.asset-transfer-progress-label",2039162044),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(percent)+"%")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-transfer-progress-bar","div.asset-transfer-progress-bar",1208926541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(percent)+"%")], null)], null)], null)], null)], null):null);
var image_QMARK_ = cljs.core.contains_QMARK_(logseq.common.config.img_formats(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(asset_type));
var gallery_image_QMARK_ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return image_QMARK_;
} else {
return and__5140__auto__;
}
})();
var width = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.asset","resize-metadata","logseq.property.asset/resize-metadata",-1297523055),new cljs.core.Keyword(null,"width","width",-384071477)], null));
var asset_width = new cljs.core.Keyword("logseq.property.asset","width","logseq.property.asset/width",-1857865839).cljs$core$IFn$_invoke$arity$1(block);
var asset_height = new cljs.core.Keyword("logseq.property.asset","height","logseq.property.asset/height",330616504).cljs$core$IFn$_invoke$arity$1(block);
var img_metadata = ((image_QMARK_)?(function (){var width__$1 = (function (){var or__5142__auto__ = width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (250);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return asset_width;
}
}
})();
var aspect_ratio = (cljs.core.truth_((function (){var and__5140__auto__ = asset_width;
if(cljs.core.truth_(and__5140__auto__)){
return asset_height;
} else {
return and__5140__auto__;
}
})())?(asset_width / asset_height):null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(width__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = width__$1;
if(cljs.core.truth_(and__5140__auto__)){
return aspect_ratio;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(width__$1 / aspect_ratio)], null):null)], 0));
})():null);
var img_placeholder = ((image_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img-placeholder.asset-container","div.img-placeholder.asset-container",683825971),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),img_metadata], null)], null):null);
var href = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic((""+"../"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.config.local_assets_dir)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file], 0));
}
})();
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
var external_url_QMARK_ = (!(clojure.string.blank_QMARK_(new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(block))));
var path = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(logseq.common.config.local_assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file], 0));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((((external_url_QMARK_) || (frontend.config.publishing_QMARK_)))?true:frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(frontend.state.get_current_repo()),path))),(function (result){
return promesa.protocols._promise(cljs.core.reset_BANG_(file_exists_QMARK__STAR_,result));
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
var ___$1 = logseq.shui.hooks.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.block.maybe_request_asset_download_BANG_(file_exists_QMARK_,requested_QMARK__STAR_,block);
}));
var content = (cljs.core.truth_((function (){var or__5142__auto__ = file_ready_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return gallery_image_QMARK_;
}
})())?frontend.components.block.asset_link((function (){var G__48439 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"asset-block","asset-block",1420117445),block);
if(cljs.core.not(gallery_image_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48439,new cljs.core.Keyword(null,"image-placeholder","image-placeholder",1072155610),img_placeholder);
} else {
return G__48439;
}
})(),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),href,img_metadata,null):((((cljs.core.not(gallery_image_QMARK_)) && (frontend.components.block.asset.show_missing_file_warning_QMARK_(block,file_exists_QMARK_))))?frontend.components.block.missing_asset_file(block,(function (){
return frontend.components.block.retry_missing_asset_upload_BANG_(repo,block,file_exists_QMARK__STAR_);
})):((frontend.components.block.asset.show_image_placeholder_QMARK_(block,file_ready_QMARK_,gallery_image_QMARK_))?img_placeholder:null)));
if(cljs.core.truth_(progress_view)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-transfer-shell","div.asset-transfer-shell",-1839731619),(function (){var or__5142__auto__ = content;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-transfer-placeholder","div.asset-transfer-placeholder",-2072356158),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","transfer-placeholder","asset/transfer-placeholder",-2080825478),label], 0))], null);
}
})(),progress_view], null);
} else {
return content;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$asset_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48440 = cljs.core.first(args__31746__auto__);
var G__48441 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48440,G__48441) : io.factorhouse.hsx.core.obj_get.call(null,G__48440,G__48441));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-cp","asset-cp",-1173031544,null),args__31746__auto__),frontend$components$block$asset_cp,args__31746__auto__,null);
}
};
var frontend$components$block$asset_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51078__i = 0, G__51078__a = new Array(arguments.length -  0);
while (G__51078__i < G__51078__a.length) {G__51078__a[G__51078__i] = arguments[G__51078__i + 0]; ++G__51078__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51078__a,0,null);
} 
return frontend$components$block$asset_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$asset_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$asset_cp.cljs$lang$applyTo = (function (arglist__51079){
var args__31746__auto__ = cljs.core.seq(arglist__51079);
return frontend$components$block$asset_cp__delegate(args__31746__auto__);
});
frontend$components$block$asset_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$asset_cp__delegate;
return frontend$components$block$asset_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48442 = comp__31745__auto__;
var G__48443 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48442,G__48443) : io.factorhouse.hsx.core.react_memo.call(null,G__48442,G__48443));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-cp");

return comp__31745__auto__;
})();
frontend.components.block.img_audio_video_QMARK_ = (function frontend$components$block$img_audio_video_QMARK_(block){
var asset_type = (function (){var G__48444 = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(block);
if((G__48444 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__48444);
}
})();
return ((cljs.core.contains_QMARK_(logseq.common.config.img_formats(),asset_type)) || (((cljs.core.contains_QMARK_(frontend.config.audio_formats,asset_type)) || (cljs.core.contains_QMARK_(frontend.config.video_formats,asset_type)))));
});
frontend.components.block.block_tagged_with_QMARK_ = (function frontend$components$block$block_tagged_with_QMARK_(block,tag_ident){
return cljs.core.some((function (tag){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_ident,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block));
});
frontend.components.block.task_block_QMARK_ = (function frontend$components$block$task_block_QMARK_(block){
var or__5142__auto__ = frontend.components.block.block_tagged_with_QMARK_(block,new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("logseq.property","priority","logseq.property/priority",239228411).cljs$core$IFn$_invoke$arity$1(block);
}
}
});
frontend.components.block.query_block_QMARK_ = (function frontend$components$block$query_block_QMARK_(block){
var or__5142__auto__ = frontend.components.block.block_tagged_with_QMARK_(block,new cljs.core.Keyword("logseq.class","Query","logseq.class/Query",-232480166));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block);
}
});
frontend.components.block.cards_block_QMARK_ = (function frontend$components$block$cards_block_QMARK_(block){
return frontend.components.block.block_tagged_with_QMARK_(block,new cljs.core.Keyword("logseq.class","Cards","logseq.class/Cards",-1284265167));
});
frontend.components.block.page_reference_content = (function frontend$components$block$page_reference_content(p__48445,uuid_or_title,label,block){
var map__48446 = p__48445;
var map__48446__$1 = cljs.core.__destructure_map(map__48446);
var config_STAR_ = map__48446__$1;
var html_export_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48446__$1,new cljs.core.Keyword(null,"html-export?","html-export?",504770426));
var nested_link_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48446__$1,new cljs.core.Keyword(null,"nested-link?","nested-link?",637882262));
var show_brackets_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48446__$1,new cljs.core.Keyword(null,"show-brackets?","show-brackets?",659769842));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var config = cljs.core.update.cljs$core$IFn$_invoke$arity$3(config_STAR_,new cljs.core.Keyword(null,"ref-set","ref-set",-818151549),(function (refs){
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config_STAR_));
if((refs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([block_uuid]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(refs,block_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uuid_or_title], 0));
}
}));
var show_brackets_QMARK___$1 = (((!((show_brackets_QMARK_ == null))))?show_brackets_QMARK_:frontend.state.show_brackets_QMARK_());
var contents_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("contents",clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))));
var config_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"label","label",1718410804),frontend.format.mldoc.plain__GT_text(label),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"contents-page?","contents-page?",2137383699),contents_page_QMARK_,new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459),cljs.core.true_QMARK_,new cljs.core.Keyword(null,"with-tags?","with-tags?",551159510),false], 0));
var asset_QMARK_ = (!((new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(block) == null)));
var brackets_QMARK_ = (function (){var and__5140__auto__ = (function (){var or__5142__auto__ = show_brackets_QMARK___$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return nested_link_QMARK_;
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(html_export_QMARK_)) && ((!(contents_page_QMARK_))));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
if(((asset_QMARK_) && (frontend.components.block.img_audio_video_QMARK_(block)))){
return frontend.components.block.asset_cp(config,block);
} else {
if(((typeof uuid_or_title === 'string') && (clojure.string.ends_with_QMARK_(uuid_or_title,".excalidraw")))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draw","div.draw",279333708),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","excalidraw-no-longer-supported","block/excalidraw-no-longer-supported",-374973018)], 0))], null)], null);
} else {
var blank_title_QMARK_ = clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-reference","span.page-reference",390731266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid_or_title))], null),(cljs.core.truth_((function (){var and__5140__auto__ = brackets_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(blank_title_QMARK_));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.bracket","span.text-gray-500.bracket",-1550458538),logseq.common.util.page_ref.left_brackets], null):null),(cljs.core.truth_(frontend.components.block.task_block_QMARK_(block))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(1),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(-2),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return frontend.util.stop(e);
})], null),(frontend.components.block.block_positioned_properties.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.block_positioned_properties.cljs$core$IFn$_invoke$arity$3(config,block,new cljs.core.Keyword(null,"block-left","block-left",-1266158554)) : frontend.components.block.block_positioned_properties.call(null,config,block,new cljs.core.Keyword(null,"block-left","block-left",-1266158554)))], null):null),(cljs.core.truth_(block)?frontend.components.block.page_cp_inner(config_SINGLEQUOTE_,block):frontend.components.block.page_cp(config_SINGLEQUOTE_,((cljs.core.uuid_QMARK_(uuid_or_title))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid_or_title], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),uuid_or_title], null)))),(cljs.core.truth_((function (){var and__5140__auto__ = brackets_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(blank_title_QMARK_));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.bracket","span.text-gray-500.bracket",-1550458538),logseq.common.util.page_ref.right_brackets], null):null)], null);

}
}
}
});
/**
 * Render a [[uuid]] ref whose entity doesn't exist.
 */
frontend.components.block.broken_page_reference = (function (){var render_fn__31744__auto__ = (function frontend$components$block$broken_page_reference(_config,uuid_or_title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.page-ref.broken","a.page-ref.broken",1664608484),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","ref-not-exist","block/ref-not-exist",446573681)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","ref-not-exist","block/ref-not-exist",446573681)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
})], null),(""+"[["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid_or_title)+"]]")], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$broken_page_reference__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48447 = cljs.core.first(args__31746__auto__);
var G__48448 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48447,G__48448) : io.factorhouse.hsx.core.obj_get.call(null,G__48447,G__48448));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"broken-page-reference","broken-page-reference",-1467850427,null),args__31746__auto__),frontend$components$block$broken_page_reference,args__31746__auto__,null);
}
};
var frontend$components$block$broken_page_reference = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51087__i = 0, G__51087__a = new Array(arguments.length -  0);
while (G__51087__i < G__51087__a.length) {G__51087__a[G__51087__i] = arguments[G__51087__i + 0]; ++G__51087__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51087__a,0,null);
} 
return frontend$components$block$broken_page_reference__delegate.call(this,args__31746__auto__);};
frontend$components$block$broken_page_reference.cljs$lang$maxFixedArity = 0;
frontend$components$block$broken_page_reference.cljs$lang$applyTo = (function (arglist__51088){
var args__31746__auto__ = cljs.core.seq(arglist__51088);
return frontend$components$block$broken_page_reference__delegate(args__31746__auto__);
});
frontend$components$block$broken_page_reference.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$broken_page_reference__delegate;
return frontend$components$block$broken_page_reference;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48449 = comp__31745__auto__;
var G__48450 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48449,G__48450) : io.factorhouse.hsx.core.react_memo.call(null,G__48449,G__48450));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"broken-page-reference");

return comp__31745__auto__;
})();
frontend.components.block.subscribed_page_reference = (function (){var render_fn__31744__auto__ = (function frontend$components$block$subscribed_page_reference(config,uuid_or_title,label,page_uuid,fallback_block){
var map__48451 = frontend.db.hooks.use_block_projection_snapshot(page_uuid,cljs.core.identity);
var map__48451__$1 = cljs.core.__destructure_map(map__48451);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48451__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48451__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48451__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__48452 = status;
var G__48452__$1 = (((G__48452 instanceof cljs.core.Keyword))?G__48452.fqn:null);
switch (G__48452__$1) {
case "error":
throw error;

break;
case "missing":
return frontend.components.block.broken_page_reference(config,uuid_or_title);

break;
default:
return frontend.components.block.page_reference_content(config,uuid_or_title,label,(function (){var or__5142__auto__ = value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return fallback_block;
}
})());

}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$subscribed_page_reference__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48453 = cljs.core.first(args__31746__auto__);
var G__48454 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48453,G__48454) : io.factorhouse.hsx.core.obj_get.call(null,G__48453,G__48454));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"subscribed-page-reference","subscribed-page-reference",568301309,null),args__31746__auto__),frontend$components$block$subscribed_page_reference,args__31746__auto__,null);
}
};
var frontend$components$block$subscribed_page_reference = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51092__i = 0, G__51092__a = new Array(arguments.length -  0);
while (G__51092__i < G__51092__a.length) {G__51092__a[G__51092__i] = arguments[G__51092__i + 0]; ++G__51092__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51092__a,0,null);
} 
return frontend$components$block$subscribed_page_reference__delegate.call(this,args__31746__auto__);};
frontend$components$block$subscribed_page_reference.cljs$lang$maxFixedArity = 0;
frontend$components$block$subscribed_page_reference.cljs$lang$applyTo = (function (arglist__51093){
var args__31746__auto__ = cljs.core.seq(arglist__51093);
return frontend$components$block$subscribed_page_reference__delegate(args__31746__auto__);
});
frontend$components$block$subscribed_page_reference.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$subscribed_page_reference__delegate;
return frontend$components$block$subscribed_page_reference;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48455 = comp__31745__auto__;
var G__48456 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48455,G__48456) : io.factorhouse.hsx.core.react_memo.call(null,G__48455,G__48456));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"subscribed-page-reference");

return comp__31745__auto__;
})();
frontend.components.block.referenced_block = (function frontend$components$block$referenced_block(block,uuid_or_title){
var lookup_name = ((typeof uuid_or_title === 'string')?clojure.string.lower_case(clojure.string.trim(uuid_or_title)):null);
return cljs.core.some((function (reference){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uuid_or_title,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(reference));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = lookup_name;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lookup_name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(reference))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lookup_name,(function (){var G__48457 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(reference);
if((G__48457 == null)){
return null;
} else {
return clojure.string.lower_case(G__48457);
}
})())));
} else {
return and__5140__auto__;
}
}
})())){
return reference;
} else {
return null;
}
}),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block));
});
frontend.components.block.looked_up_page_reference = (function (){var render_fn__31744__auto__ = (function frontend$components$block$looked_up_page_reference(config,uuid_or_title,label){
var page_uuid = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-identity","page-identity",-899314184),uuid_or_title], null));
if(cljs.core.truth_(page_uuid)){
return frontend.components.block.subscribed_page_reference(config,uuid_or_title,label,page_uuid,null);
} else {
return frontend.components.block.page_reference_content(config,uuid_or_title,label,null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$looked_up_page_reference__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48458 = cljs.core.first(args__31746__auto__);
var G__48459 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48458,G__48459) : io.factorhouse.hsx.core.obj_get.call(null,G__48458,G__48459));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"looked-up-page-reference","looked-up-page-reference",256607005,null),args__31746__auto__),frontend$components$block$looked_up_page_reference,args__31746__auto__,null);
}
};
var frontend$components$block$looked_up_page_reference = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51096__i = 0, G__51096__a = new Array(arguments.length -  0);
while (G__51096__i < G__51096__a.length) {G__51096__a[G__51096__i] = arguments[G__51096__i + 0]; ++G__51096__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51096__a,0,null);
} 
return frontend$components$block$looked_up_page_reference__delegate.call(this,args__31746__auto__);};
frontend$components$block$looked_up_page_reference.cljs$lang$maxFixedArity = 0;
frontend$components$block$looked_up_page_reference.cljs$lang$applyTo = (function (arglist__51097){
var args__31746__auto__ = cljs.core.seq(arglist__51097);
return frontend$components$block$looked_up_page_reference__delegate(args__31746__auto__);
});
frontend$components$block$looked_up_page_reference.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$looked_up_page_reference__delegate;
return frontend$components$block$looked_up_page_reference;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48460 = comp__31745__auto__;
var G__48461 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48460,G__48461) : io.factorhouse.hsx.core.react_memo.call(null,G__48460,G__48461));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"looked-up-page-reference");

return comp__31745__auto__;
})();
/**
 * Component for page reference
 */
frontend.components.block.page_reference = (function (){var render_fn__31744__auto__ = (function frontend$components$block$page_reference(config,uuid_or_title_STAR_,label){
if(cljs.core.truth_(uuid_or_title_STAR_)){
var uuid_or_title = ((typeof uuid_or_title_STAR_ === 'string')?(function (){var str_id = clojure.string.trim(uuid_or_title_STAR_);
if(cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(str_id) : frontend.util.uuid_string_QMARK_.call(null,str_id)))){
return cljs.core.parse_uuid(str_id);
} else {
return str_id;
}
})():uuid_or_title_STAR_);
var reference = frontend.components.block.referenced_block(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config),uuid_or_title);
var page_uuid = (function (){var or__5142__auto__ = ((cljs.core.uuid_QMARK_(uuid_or_title))?uuid_or_title:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(reference);
}
})();
var self_reference_QMARK_ = ((cljs.core.set_QMARK_(new cljs.core.Keyword(null,"ref-set","ref-set",-818151549).cljs$core$IFn$_invoke$arity$1(config)))?cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ref-set","ref-set",-818151549).cljs$core$IFn$_invoke$arity$1(config),uuid_or_title):null);
if(cljs.core.truth_(self_reference_QMARK_)){
return null;
} else {
if(cljs.core.truth_(page_uuid)){
return frontend.components.block.subscribed_page_reference(config,uuid_or_title,label,page_uuid,reference);
} else {
return frontend.components.block.looked_up_page_reference(config,uuid_or_title,label);
}
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$page_reference__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48462 = cljs.core.first(args__31746__auto__);
var G__48463 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48462,G__48463) : io.factorhouse.hsx.core.obj_get.call(null,G__48462,G__48463));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-reference","page-reference",569747493,null),args__31746__auto__),frontend$components$block$page_reference,args__31746__auto__,null);
}
};
var frontend$components$block$page_reference = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51101__i = 0, G__51101__a = new Array(arguments.length -  0);
while (G__51101__i < G__51101__a.length) {G__51101__a[G__51101__i] = arguments[G__51101__i + 0]; ++G__51101__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51101__a,0,null);
} 
return frontend$components$block$page_reference__delegate.call(this,args__31746__auto__);};
frontend$components$block$page_reference.cljs$lang$maxFixedArity = 0;
frontend$components$block$page_reference.cljs$lang$applyTo = (function (arglist__51102){
var args__31746__auto__ = cljs.core.seq(arglist__51102);
return frontend$components$block$page_reference__delegate(args__31746__auto__);
});
frontend$components$block$page_reference.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$page_reference__delegate;
return frontend$components$block$page_reference;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48464 = comp__31745__auto__;
var G__48465 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48464,G__48465) : io.factorhouse.hsx.core.react_memo.call(null,G__48464,G__48465));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-reference");

return comp__31745__auto__;
})();
frontend.components.block.latex_environment_content = (function frontend$components$block$latex_environment_content(name,option,content){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(name),"equation")){
return content;
} else {
var G__48466 = "\\begin%s\n%s\\end{%s}";
var G__48467 = (""+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"}"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(option));
var G__48468 = content;
var G__48469 = name;
return (frontend.util.format.cljs$core$IFn$_invoke$arity$4 ? frontend.util.format.cljs$core$IFn$_invoke$arity$4(G__48466,G__48467,G__48468,G__48469) : frontend.util.format.call(null,G__48466,G__48467,G__48468,G__48469));
}
});
frontend.components.block.get_label_text = (function frontend$components$block$get_label_text(label){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(label))) && (typeof cljs.core.last(cljs.core.first(label)) === 'string'))){
return logseq.common.util.safe_decode_uri_component(cljs.core.last(cljs.core.first(label)));
} else {
return null;
}
});
frontend.components.block.macro__GT_text = (function frontend$components$block$macro__GT_text(name,arguments$){
if(((cljs.core.seq(arguments$)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arguments$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["null"], null))))){
var G__48470 = "{{%s %s}}";
var G__48471 = name;
var G__48472 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$);
return (frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3(G__48470,G__48471,G__48472) : frontend.util.format.call(null,G__48470,G__48471,G__48472));
} else {
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("{{%s}}",name) : frontend.util.format.call(null,"{{%s}}",name));
}
});
frontend.components.block.block_reference = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_reference(config,id,label){
var block_id = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
if(cljs.core.uuid_QMARK_(id)){
return id;
} else {
return cljs.core.parse_uuid(id);
}
} else {
return and__5140__auto__;
}
})();
var self_reference_QMARK_ = ((cljs.core.set_QMARK_(new cljs.core.Keyword(null,"ref-set","ref-set",-818151549).cljs$core$IFn$_invoke$arity$1(config)))?cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ref-set","ref-set",-818151549).cljs$core$IFn$_invoke$arity$1(config),block_id):null);
if(cljs.core.truth_(self_reference_QMARK_)){
return null;
} else {
return frontend.components.block.page_reference(config,block_id,label);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_reference__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48473 = cljs.core.first(args__31746__auto__);
var G__48474 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48473,G__48474) : io.factorhouse.hsx.core.obj_get.call(null,G__48473,G__48474));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-reference","block-reference",1895388031,null),args__31746__auto__),frontend$components$block$block_reference,args__31746__auto__,null);
}
};
var frontend$components$block$block_reference = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51105__i = 0, G__51105__a = new Array(arguments.length -  0);
while (G__51105__i < G__51105__a.length) {G__51105__a[G__51105__i] = arguments[G__51105__i + 0]; ++G__51105__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51105__a,0,null);
} 
return frontend$components$block$block_reference__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_reference.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_reference.cljs$lang$applyTo = (function (arglist__51106){
var args__31746__auto__ = cljs.core.seq(arglist__51106);
return frontend$components$block$block_reference__delegate(args__31746__auto__);
});
frontend$components$block$block_reference.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_reference__delegate;
return frontend$components$block$block_reference;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48475 = comp__31745__auto__;
var G__48476 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48475,G__48476) : io.factorhouse.hsx.core.react_memo.call(null,G__48475,G__48476));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-reference");

return comp__31745__auto__;
})();
frontend.components.block.render_macro = (function frontend$components$block$render_macro(config,name,arguments$,macro_content,format){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.macro","div.macro",-2084098642)], null),(function (){var attributes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-macro-name","data-macro-name",548814604),name], null);
if(cljs.core.truth_(macro_content)){
var ast = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,frontend.format.mldoc.__GT_edn(macro_content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)));
var paragraph_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ast))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Paragraph",cljs.core.ffirst(ast))));
if(cljs.core.truth_((function (){var and__5140__auto__ = (!(paragraph_QMARK_));
if(and__5140__auto__){
var G__48477 = cljs.core.ffirst(ast);
return (frontend.format.mldoc.block_with_title_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.block_with_title_QMARK_.cljs$core$IFn$_invoke$arity$1(G__48477) : frontend.format.mldoc.block_with_title_QMARK_.call(null,G__48477));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attributes,(function (){var G__48478 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","format","block/format",-1212045901),format);
var G__48479 = ast;
return (frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(G__48478,G__48479) : frontend.components.block.markup_elements_cp.call(null,G__48478,G__48479));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attributes,new cljs.core.Keyword(null,"class","class",-2030961996),"inline"),frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-margin?","add-margin?",-1261100339),false], null),format,macro_content)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attributes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.macro","unsupported-name","block.macro/unsupported-name",-512866579),name], 0))], null),frontend.components.block.macro__GT_text(name,arguments$)], null)], null);
}
})());
});
frontend.components.block.nested_link = (function (){var render_fn__31744__auto__ = (function frontend$components$block$nested_link(config,html_export_QMARK_,link){
var show_brackets_QMARK_ = (!(new cljs.core.Keyword("ui","show-brackets?","ui/show-brackets?",659790606).cljs$core$IFn$_invoke$arity$1(frontend.state.config_for_repo(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null)),frontend.state.get_current_repo())) === false));
var map__48480 = link;
var map__48480__$1 = cljs.core.__destructure_map(map__48480);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48480__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-reference.nested","span.page-reference.nested",-1248504751),((((show_brackets_QMARK_) && (((cljs.core.not(html_export_QMARK_)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),"contents"))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),logseq.common.util.page_ref.left_brackets], null):null),(function (){var page_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
var page_uuid = ((clojure.string.blank_QMARK_(page_name))?null:frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-identity","page-identity",-899314184),page_name], null)));
if(cljs.core.truth_(page_uuid)){
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"nested-link?","nested-link?",637882262),true),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid], null));
} else {
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"children","children",-940561982),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-link?","nested-link?",637882262),true], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
}
})(),((((show_brackets_QMARK_) && (((cljs.core.not(html_export_QMARK_)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),"contents"))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),logseq.common.util.page_ref.right_brackets], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$nested_link__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48481 = cljs.core.first(args__31746__auto__);
var G__48482 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48481,G__48482) : io.factorhouse.hsx.core.obj_get.call(null,G__48481,G__48482));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"nested-link","nested-link",597926220,null),args__31746__auto__),frontend$components$block$nested_link,args__31746__auto__,null);
}
};
var frontend$components$block$nested_link = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51111__i = 0, G__51111__a = new Array(arguments.length -  0);
while (G__51111__i < G__51111__a.length) {G__51111__a[G__51111__i] = arguments[G__51111__i + 0]; ++G__51111__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51111__a,0,null);
} 
return frontend$components$block$nested_link__delegate.call(this,args__31746__auto__);};
frontend$components$block$nested_link.cljs$lang$maxFixedArity = 0;
frontend$components$block$nested_link.cljs$lang$applyTo = (function (arglist__51112){
var args__31746__auto__ = cljs.core.seq(arglist__51112);
return frontend$components$block$nested_link__delegate(args__31746__auto__);
});
frontend$components$block$nested_link.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$nested_link__delegate;
return frontend$components$block$nested_link;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48483 = comp__31745__auto__;
var G__48484 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48483,G__48484) : io.factorhouse.hsx.core.react_memo.call(null,G__48483,G__48484));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"nested-link");

return comp__31745__auto__;
})();
frontend.components.block.show_link_QMARK_ = (function frontend$components$block$show_link_QMARK_(s,full_text){
var media_formats = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,frontend.config.media_formats));
var or__5142__auto__ = clojure.string.starts_with_QMARK_(clojure.string.triml(full_text),"!");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = ((clojure.string.starts_with_QMARK_(full_text,"http://")) || (clojure.string.starts_with_QMARK_(full_text,"https://")));
if(and__5140__auto__){
return frontend.util.text.media_link_QMARK_(media_formats,s);
} else {
return and__5140__auto__;
}
}
});
frontend.components.block.relative_assets_path__GT_absolute_path = (function frontend$components$block$relative_assets_path__GT_absolute_path(path){
if(logseq.common.path.protocol_url_QMARK_(path)){
console.error("BUG: relative-assets-path->absolute-path called with protocol url",path);
} else {
}

if(((logseq.common.path.absolute_QMARK_(path)) || (logseq.common.path.protocol_url_QMARK_(path)))){
return path;
} else {
return frontend.util.node_path.join(frontend.config.get_repo_dir(frontend.state.get_current_repo()),frontend.config.get_local_asset_absolute_path(path));
}
});
frontend.components.block.file_link_path__GT_open_path = (function frontend$components$block$file_link_path__GT_open_path(file_path){
var file_path__$1 = logseq.common.path.file_url_or_path__GT_path(file_path);
var file_path__$2 = (cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.win32_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = typeof file_path__$1 === 'string';
if(and__5140__auto____$1){
return cljs.core.re_find(/^\/[A-Za-z]:(?:[\/\\]|$)/,file_path__$1);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(file_path__$1,(1)):file_path__$1);
if(((logseq.common.path.absolute_QMARK_(file_path__$2)) || (logseq.common.path.protocol_url_QMARK_(file_path__$2)))){
return file_path__$2;
} else {
return frontend.components.block.relative_assets_path__GT_absolute_path(file_path__$2);
}
});
frontend.components.block.audio_link = (function (){var render_fn__31744__auto__ = (function frontend$components$block$audio_link(config,url,href,_label,metadata,full_text){
if(cljs.core.truth_(logseq.common.config.local_relative_asset_QMARK_(href))){
return frontend.components.block.asset_link(config,null,href,metadata,full_text);
} else {
var href__$1 = ((frontend.util.starts_with_QMARK_(href,"http"))?href:((frontend.config.publishing_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(href,(1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Embed_data",cljs.core.first(url)))?href:(cljs.core.truth_(frontend.handler.assets.check_alias_path_QMARK_(href))?frontend.handler.assets.resolve_asset_real_path_url(frontend.state.get_current_repo(),href):href)
)));
return frontend.components.block.audio_cp(href__$1);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$audio_link__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48485 = cljs.core.first(args__31746__auto__);
var G__48486 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48485,G__48486) : io.factorhouse.hsx.core.obj_get.call(null,G__48485,G__48486));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"audio-link","audio-link",394837674,null),args__31746__auto__),frontend$components$block$audio_link,args__31746__auto__,null);
}
};
var frontend$components$block$audio_link = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51117__i = 0, G__51117__a = new Array(arguments.length -  0);
while (G__51117__i < G__51117__a.length) {G__51117__a[G__51117__i] = arguments[G__51117__i + 0]; ++G__51117__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51117__a,0,null);
} 
return frontend$components$block$audio_link__delegate.call(this,args__31746__auto__);};
frontend$components$block$audio_link.cljs$lang$maxFixedArity = 0;
frontend$components$block$audio_link.cljs$lang$applyTo = (function (arglist__51118){
var args__31746__auto__ = cljs.core.seq(arglist__51118);
return frontend$components$block$audio_link__delegate(args__31746__auto__);
});
frontend$components$block$audio_link.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$audio_link__delegate;
return frontend$components$block$audio_link;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48487 = comp__31745__auto__;
var G__48488 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48487,G__48488) : io.factorhouse.hsx.core.react_memo.call(null,G__48487,G__48488));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"audio-link");

return comp__31745__auto__;
})();
frontend.components.block.media_link = (function frontend$components$block$media_link(config,url,s,label,metadata,full_text){
var ext = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.get_file_ext(s));
var label_text = frontend.components.block.get_label_text(label);
if(cljs.core.contains_QMARK_(frontend.config.audio_formats,ext)){
return frontend.components.block.audio_link(config,url,s,label,metadata,full_text);
} else {
if(cljs.core.contains_QMARK_(frontend.config.doc_formats,ext)){
return frontend.components.block.asset_link(config,label_text,s,metadata,full_text);
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"webm","webm",-1239807004),null,new cljs.core.Keyword(null,"mp4","mp4",1038217575),null,new cljs.core.Keyword(null,"mov","mov",605355799),null], null), null),ext)))){
return frontend.components.block.image_link(config,url,s,label,metadata,full_text);
} else {
return frontend.components.block.asset_reference(config,label,s);

}
}
}
});
frontend.components.block.hashtag_search_tag_page_name = (function frontend$components$block$hashtag_search_tag_page_name(s){
if((((!(clojure.string.blank_QMARK_(s)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(s))))){
var G__48489 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1));
return (logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1(G__48489) : logseq.graph_parser.text.page_ref_un_brackets_BANG_.call(null,G__48489));
} else {
return null;
}
});
frontend.components.block.search_link_cp = (function frontend$components$block$search_link_cp(config,url,s,label,title,metadata,full_text){
if(clojure.string.blank_QMARK_(s)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","invalid-link","block/invalid-link",-1830865197)], 0))], null),full_text], null);
} else {
if(cljs.core.truth_(frontend.components.block.hashtag_search_tag_page_name(s))){
return frontend.components.block.page_reference(config,frontend.components.block.hashtag_search_tag_page_name(s),label);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(s))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_((function (){var G__48490 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1));
return (frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1(G__48490) : frontend.format.mldoc.anchorLink.call(null,G__48490));
})());
})], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.first(s))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.last(s))))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_((function (){var G__48491 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1));
return (frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1(G__48491) : frontend.format.mldoc.anchorLink.call(null,G__48491));
})());
})], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
if(logseq.common.util.block_ref.block_ref_QMARK_(s)){
var id = logseq.common.util.block_ref.get_block_ref_id(s);
return frontend.components.block.block_reference(config,id,label);
} else {
if((!(clojure.string.includes_QMARK_(s,".")))){
return frontend.components.block.page_reference(config,s,label);
} else {
if(logseq.common.path.protocol_url_QMARK_(s)){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),s,new cljs.core.Keyword(null,"data-href","data-href",299087184),s,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));
} else {
if(cljs.core.truth_(frontend.components.block.show_link_QMARK_(s,full_text))){
return frontend.components.block.media_link(config,url,s,label,metadata,full_text);
} else {
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var path = ((clojure.string.starts_with_QMARK_(s,"file://"))?s:((clojure.string.starts_with_QMARK_(s,"/"))?s:frontend.components.block.relative_assets_path__GT_absolute_path(s)
));
var path__$1 = frontend.components.block.file_link_path__GT_open_path(path);
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),(function (){var G__48492 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return window.apis.openPath(path__$1);
}),new cljs.core.Keyword(null,"data-href","data-href",299087184),path__$1], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48492,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__48492;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));
} else {
return frontend.components.block.page_reference(config,s,label);

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
frontend.components.block.link_cp = (function frontend$components$block$link_cp(config,link){
var map__48493 = link;
var map__48493__$1 = cljs.core.__destructure_map(map__48493);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493__$1,new cljs.core.Keyword(null,"url","url",276297046));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493__$1,new cljs.core.Keyword(null,"title","title",636505583));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493__$1,new cljs.core.Keyword(null,"full_text","full_text",1634289075));
try{if(((cljs.core.vector_QMARK_(url)) && ((cljs.core.count(url) === 2)))){
try{var url_0__48495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__48495 === "Block_ref")){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.block_ref.left_parens)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.block_ref.right_parens));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48511){if((e48511 instanceof Error)){
var e__36180__auto__ = e48511;
if((e__36180__auto__ === cljs.core.match.backtrack)){
try{var url_0__48495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__48495 === "Page_ref")){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
var label_STAR_ = ((cljs.core.seq(frontend.format.mldoc.plain__GT_text(label)))?label:null);
if(((typeof page === 'string') && (clojure.string.blank_QMARK_(page)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.ref.__GT_page_ref.call(null,page))], null);
} else {
return frontend.components.block.page_reference(config,page,label_STAR_);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e48513){if((e48513 instanceof Error)){
var e__36180__auto____$1 = e48513;
if((e__36180__auto____$1 === cljs.core.match.backtrack)){
try{var url_0__48495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__48495 === "Embed_data")){
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return frontend.components.block.image_link(config,url,src,null,metadata,full_text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48516){if((e48516 instanceof Error)){
var e__36180__auto____$2 = e48516;
if((e__36180__auto____$2 === cljs.core.match.backtrack)){
try{var url_0__48495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__48495 === "Search")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return frontend.components.block.search_link_cp(config,url,s,label,title,metadata,full_text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48518){if((e48518 instanceof Error)){
var e__36180__auto____$3 = e48518;
if((e__36180__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$3;
}
} else {
throw e48518;

}
}} else {
throw e__36180__auto____$2;
}
} else {
throw e48516;

}
}} else {
throw e__36180__auto____$1;
}
} else {
throw e48513;

}
}} else {
throw e__36180__auto__;
}
} else {
throw e48511;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48497){if((e48497 instanceof Error)){
var e__36180__auto__ = e48497;
if((e__36180__auto__ === cljs.core.match.backtrack)){
var href = frontend.components.block.string_of_url(url);
var vec__48498 = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Complex",cljs.core.first(url));
if(and__5140__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.second(url)),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(cljs.core.second(url))], null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("File",cljs.core.first(url));
if(and__5140__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["file",cljs.core.second(url)], null);
} else {
return and__5140__auto__;
}
}
})();
var protocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(0),null);
var _path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(1),null);
var config__$1 = (function (){var G__48501 = config;
if((!(clojure.string.blank_QMARK_(protocol)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48501,new cljs.core.Keyword(null,"link-js-url","link-js-url",1262093524),(function (){try{return (new URL(href));
}catch (e48502){var _ = e48502;
return null;
}})());
} else {
return G__48501;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"file")){
if(cljs.core.truth_(frontend.components.block.show_link_QMARK_(href,full_text))){
return frontend.components.block.media_link(config__$1,url,href,label,metadata,full_text);
} else {
var file_path = frontend.components.block.file_link_path__GT_open_path(href);
var href_STAR_ = (cljs.core.truth_(frontend.util.electron_QMARK_())?file_path:href);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),frontend.ui.icon("file",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50"], null)),frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),(function (){var G__48505 = (cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return window.apis.openPath(file_path);
}),new cljs.core.Keyword(null,"data-href","data-href",299087184),href_STAR_], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("file://",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([href_STAR_], 0)),new cljs.core.Keyword(null,"data-href","data-href",299087184),href_STAR_,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null));
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48505,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__48505;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$1,label) : frontend.components.block.map_inline.call(null,config__$1,label)))], null);
}
} else {
if(cljs.core.truth_(frontend.components.block.show_link_QMARK_(href,full_text))){
return frontend.components.block.media_link(config__$1,url,href,label,metadata,full_text);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"node-ref-link-only?","node-ref-link-only?",-2027015692).cljs$core$IFn$_invoke$arity$1(config__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$1,label) : frontend.components.block.map_inline.call(null,config__$1,label))], null);
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a.external-link","a.external-link",-654902016),(function (){var G__48510 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),href], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48510,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__48510;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$1,label) : frontend.components.block.map_inline.call(null,config__$1,label)));
}

}
}
} else {
throw e__36180__auto__;
}
} else {
throw e48497;

}
}});

frontend.components.block.wrap_query_components = (function frontend$components$block$wrap_query_components(config){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"->hiccup","->hiccup",1204690951),frontend.components.block.__GT_hiccup,new cljs.core.Keyword(null,"->elem","->elem",-260360654),frontend.components.block.__GT_elem,new cljs.core.Keyword(null,"page-cp","page-cp",1066562595),frontend.components.block.page_cp,new cljs.core.Keyword(null,"inline-text","inline-text",910915394),frontend.components.block.inline_text,new cljs.core.Keyword(null,"map-inline","map-inline",-1498071144),frontend.components.block.map_inline,new cljs.core.Keyword(null,"inline","inline",1399884222),frontend.components.block.inline], null)], 0));
});
frontend.components.block.macro_function_fallback_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$macro_function_fallback_cp(arguments$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),(function (){var G__48528 = "{{function %s}}";
var G__48529 = cljs.core.first(arguments$);
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2(G__48528,G__48529) : frontend.util.format.call(null,G__48528,G__48529));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$macro_function_fallback_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48534 = cljs.core.first(args__31746__auto__);
var G__48535 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48534,G__48535) : io.factorhouse.hsx.core.obj_get.call(null,G__48534,G__48535));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"macro-function-fallback-cp","macro-function-fallback-cp",-1413703740,null),args__31746__auto__),frontend$components$block$macro_function_fallback_cp,args__31746__auto__,null);
}
};
var frontend$components$block$macro_function_fallback_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51130__i = 0, G__51130__a = new Array(arguments.length -  0);
while (G__51130__i < G__51130__a.length) {G__51130__a[G__51130__i] = arguments[G__51130__i + 0]; ++G__51130__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51130__a,0,null);
} 
return frontend$components$block$macro_function_fallback_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$macro_function_fallback_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$macro_function_fallback_cp.cljs$lang$applyTo = (function (arglist__51131){
var args__31746__auto__ = cljs.core.seq(arglist__51131);
return frontend$components$block$macro_function_fallback_cp__delegate(args__31746__auto__);
});
frontend$components$block$macro_function_fallback_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$macro_function_fallback_cp__delegate;
return frontend$components$block$macro_function_fallback_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48536 = comp__31745__auto__;
var G__48537 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48536,G__48537) : io.factorhouse.hsx.core.react_memo.call(null,G__48536,G__48537));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"macro-function-fallback-cp");

return comp__31745__auto__;
})();
frontend.components.block.macro_function_result_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$macro_function_result_cp(query_result,arguments$){
var or__5142__auto__ = (function (){var G__48538 = query_result;
var G__48538__$1 = (((G__48538 == null))?null:frontend.components.block.macros.function_macro(G__48538,arguments$));
if((G__48538__$1 == null)){
return null;
} else {
return frontend.components.block.macros.function_result__GT_hiccup(G__48538__$1);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.block.macro_function_fallback_cp(arguments$);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$macro_function_result_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48539 = cljs.core.first(args__31746__auto__);
var G__48540 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48539,G__48540) : io.factorhouse.hsx.core.obj_get.call(null,G__48539,G__48540));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"macro-function-result-cp","macro-function-result-cp",52036755,null),args__31746__auto__),frontend$components$block$macro_function_result_cp,args__31746__auto__,null);
}
};
var frontend$components$block$macro_function_result_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51133__i = 0, G__51133__a = new Array(arguments.length -  0);
while (G__51133__i < G__51133__a.length) {G__51133__a[G__51133__i] = arguments[G__51133__i + 0]; ++G__51133__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51133__a,0,null);
} 
return frontend$components$block$macro_function_result_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$macro_function_result_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$macro_function_result_cp.cljs$lang$applyTo = (function (arglist__51134){
var args__31746__auto__ = cljs.core.seq(arglist__51134);
return frontend$components$block$macro_function_result_cp__delegate(args__31746__auto__);
});
frontend$components$block$macro_function_result_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$macro_function_result_cp__delegate;
return frontend$components$block$macro_function_result_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48541 = comp__31745__auto__;
var G__48542 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48541,G__48542) : io.factorhouse.hsx.core.react_memo.call(null,G__48541,G__48542));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"macro-function-result-cp");

return comp__31745__auto__;
})();
frontend.components.block.macro_function_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$macro_function_cp(config,arguments$){
var fallback_STAR_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var query_result_STAR_ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return fallback_STAR_;
}
})();
var vec__48543 = logseq.shui.hooks.use_atom(query_result_STAR_);
var query_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48543,(0),null);
return frontend.ui.catch_error(frontend.components.block.macro_function_fallback_cp(arguments$),frontend.components.block.macro_function_result_cp(query_result,arguments$));
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$macro_function_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48546 = cljs.core.first(args__31746__auto__);
var G__48547 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48546,G__48547) : io.factorhouse.hsx.core.obj_get.call(null,G__48546,G__48547));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"macro-function-cp","macro-function-cp",78263925,null),args__31746__auto__),frontend$components$block$macro_function_cp,args__31746__auto__,null);
}
};
var frontend$components$block$macro_function_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51137__i = 0, G__51137__a = new Array(arguments.length -  0);
while (G__51137__i < G__51137__a.length) {G__51137__a[G__51137__i] = arguments[G__51137__i + 0]; ++G__51137__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51137__a,0,null);
} 
return frontend$components$block$macro_function_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$macro_function_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$macro_function_cp.cljs$lang$applyTo = (function (arglist__51138){
var args__31746__auto__ = cljs.core.seq(arglist__51138);
return frontend$components$block$macro_function_cp__delegate(args__31746__auto__);
});
frontend$components$block$macro_function_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$macro_function_cp__delegate;
return frontend$components$block$macro_function_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48548 = comp__31745__auto__;
var G__48549 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48548,G__48549) : io.factorhouse.hsx.core.react_memo.call(null,G__48548,G__48549));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"macro-function-cp");

return comp__31745__auto__;
})();
frontend.components.block.default_video_embed_width = (560);
frontend.components.block.min_video_embed_width = (160);
frontend.components.block.video_embed_parent_width = (function frontend$components$block$video_embed_parent_width(_STAR_shell_ref){
var G__48550 = logseq.shui.hooks.deref(_STAR_shell_ref);
var G__48550__$1 = (((G__48550 == null))?null:G__48550.parentElement);
if((G__48550__$1 == null)){
return null;
} else {
return G__48550__$1.clientWidth;
}
});
frontend.components.block.clamp_video_embed_width = (function frontend$components$block$clamp_video_embed_width(width,max_width){
var max_width__$1 = (function (){var or__5142__auto__ = max_width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.block.default_video_embed_width;
}
})();
var upper_bound = cljs.core.max.cljs$core$IFn$_invoke$arity$2(frontend.components.block.min_video_embed_width,max_width__$1);
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(Math.round(width),frontend.components.block.min_video_embed_width),upper_bound);
});
frontend.components.block.video_resize_handle = (function (){var render_fn__31744__auto__ = (function frontend$components$block$video_resize_handle(p__48551){
var map__48552 = p__48551;
var map__48552__$1 = cljs.core.__destructure_map(map__48552);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48552__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var _STAR_shell_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48552__$1,new cljs.core.Keyword(null,"*shell-ref","*shell-ref",474549227));
var set_width_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48552__$1,new cljs.core.Keyword(null,"set-width!","set-width!",-84755235));
var on_width_change_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48552__$1,new cljs.core.Keyword(null,"on-width-change!","on-width-change!",-1709794157));
var _STAR_drag = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.documentElement,"is-resizing-video");
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-embed-resize-handle","div.video-embed-resize-handle",-1720049511),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"role","role",-736691072),"separator",new cljs.core.Keyword(null,"aria-orientation","aria-orientation",-218196331),"vertical",new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (e){
frontend.util.stop(e);

logseq.shui.hooks.set_ref_BANG_(_STAR_drag,null);

(set_width_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_width_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.block.default_video_embed_width) : set_width_BANG_.call(null,frontend.components.block.default_video_embed_width));

if(cljs.core.truth_(on_width_change_BANG_)){
return (on_width_change_BANG_.cljs$core$IFn$_invoke$arity$2 ? on_width_change_BANG_.cljs$core$IFn$_invoke$arity$2(null,e) : on_width_change_BANG_.call(null,null,e));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

e.preventDefault();

var G__48553_51140 = e.currentTarget;
if((G__48553_51140 == null)){
} else {
G__48553_51140.setPointerCapture(e.pointerId);
}

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.documentElement,"is-resizing-video");

return logseq.shui.hooks.set_ref_BANG_(_STAR_drag,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pointer-id","pointer-id",-441557299),e.pointerId,new cljs.core.Keyword(null,"start-x","start-x",-193941684),e.clientX,new cljs.core.Keyword(null,"start-width","start-width",471198432),width], null));
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_drag);
if(cljs.core.truth_(temp__5825__auto__)){
var map__48554 = temp__5825__auto__;
var map__48554__$1 = cljs.core.__destructure_map(map__48554);
var pointer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48554__$1,new cljs.core.Keyword(null,"pointer-id","pointer-id",-441557299));
var start_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48554__$1,new cljs.core.Keyword(null,"start-x","start-x",-193941684));
var start_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48554__$1,new cljs.core.Keyword(null,"start-width","start-width",471198432));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pointer_id,e.pointerId)){
var dx = (e.clientX - start_x);
var width_SINGLEQUOTE_ = frontend.components.block.clamp_video_embed_width((start_width + dx),frontend.components.block.video_embed_parent_width(_STAR_shell_ref));
logseq.shui.hooks.set_ref_BANG_(_STAR_drag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.shui.hooks.deref(_STAR_drag),new cljs.core.Keyword(null,"current-width","current-width",1056645825),width_SINGLEQUOTE_));

return (set_width_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_width_BANG_.cljs$core$IFn$_invoke$arity$1(width_SINGLEQUOTE_) : set_width_BANG_.call(null,width_SINGLEQUOTE_));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pointer-id","pointer-id",-441557299).cljs$core$IFn$_invoke$arity$1(logseq.shui.hooks.deref(_STAR_drag)),e.pointerId)){
var temp__5825__auto___51141 = new cljs.core.Keyword(null,"current-width","current-width",1056645825).cljs$core$IFn$_invoke$arity$1(logseq.shui.hooks.deref(_STAR_drag));
if(cljs.core.truth_(temp__5825__auto___51141)){
var current_width_51142 = temp__5825__auto___51141;
if(cljs.core.truth_(on_width_change_BANG_)){
(on_width_change_BANG_.cljs$core$IFn$_invoke$arity$2 ? on_width_change_BANG_.cljs$core$IFn$_invoke$arity$2(current_width_51142,e) : on_width_change_BANG_.call(null,current_width_51142,e));
} else {
}
} else {
}

logseq.shui.hooks.set_ref_BANG_(_STAR_drag,null);

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.documentElement,"is-resizing-video");

var target = e.currentTarget;
var pointer_id = e.pointerId;
if(cljs.core.truth_((function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
return target.hasPointerCapture(pointer_id);
} else {
return and__5140__auto__;
}
})())){
return target.releasePointerCapture(pointer_id);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-cancel","on-pointer-cancel",-1642281306),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pointer-id","pointer-id",-441557299).cljs$core$IFn$_invoke$arity$1(logseq.shui.hooks.deref(_STAR_drag)),e.pointerId)){
logseq.shui.hooks.set_ref_BANG_(_STAR_drag,null);

return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.documentElement,"is-resizing-video");
} else {
return null;
}
})], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$video_resize_handle__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48555 = cljs.core.first(args__31746__auto__);
var G__48556 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48555,G__48556) : io.factorhouse.hsx.core.obj_get.call(null,G__48555,G__48556));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"video-resize-handle","video-resize-handle",350218279,null),args__31746__auto__),frontend$components$block$video_resize_handle,args__31746__auto__,null);
}
};
var frontend$components$block$video_resize_handle = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51143__i = 0, G__51143__a = new Array(arguments.length -  0);
while (G__51143__i < G__51143__a.length) {G__51143__a[G__51143__i] = arguments[G__51143__i + 0]; ++G__51143__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51143__a,0,null);
} 
return frontend$components$block$video_resize_handle__delegate.call(this,args__31746__auto__);};
frontend$components$block$video_resize_handle.cljs$lang$maxFixedArity = 0;
frontend$components$block$video_resize_handle.cljs$lang$applyTo = (function (arglist__51144){
var args__31746__auto__ = cljs.core.seq(arglist__51144);
return frontend$components$block$video_resize_handle__delegate(args__31746__auto__);
});
frontend$components$block$video_resize_handle.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$video_resize_handle__delegate;
return frontend$components$block$video_resize_handle;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48557 = comp__31745__auto__;
var G__48558 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48557,G__48558) : io.factorhouse.hsx.core.react_memo.call(null,G__48557,G__48558));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"video-resize-handle");

return comp__31745__auto__;
})();
frontend.components.block.video_embed_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$video_embed_cp(p__48559){
var map__48560 = p__48559;
var map__48560__$1 = cljs.core.__destructure_map(map__48560);
var _embed = map__48560__$1;
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_width_change_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"on-width-change!","on-width-change!",-1709794157));
var embed_width = width;
var vec__48561 = logseq.shui.hooks.use_state(null);
var local_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48561,(0),null);
var set_local_width_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48561,(1),null);
var _STAR_shell_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var resizable_QMARK_ = cljs.core.not(frontend.mobile.util.native_platform_QMARK_());
var max_width = (function (){var or__5142__auto__ = frontend.components.block.video_embed_parent_width(_STAR_shell_ref);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(frontend.util.get_width() - (96)));
}
})();
var width__$1 = frontend.components.block.clamp_video_embed_width((function (){var or__5142__auto__ = local_width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = embed_width;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.components.block.default_video_embed_width;
}
}
})(),max_width);
var vec__48564 = (function (){var or__5142__auto__ = aspect_ratio;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null);
}
})();
var ratio_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48564,(0),null);
var ratio_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48564,(1),null);
var frame_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio_width)+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio_height))], null);
logseq.shui.hooks.use_layout_effect_BANG_((function (){
return (set_local_width_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_local_width_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_local_width_BANG_.call(null,null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_width], null));

var temp__5825__auto__ = (function (){var G__48567 = render;
var G__48567__$1 = (((G__48567 instanceof cljs.core.Keyword))?G__48567.fqn:null);
switch (G__48567__$1) {
case "youtube-player":
var opts = (function (){var G__48568 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iframe-only?","iframe-only?",713892444),true], null);
if(cljs.core.seq(start)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48568,new cljs.core.Keyword(null,"start","start",-355208981),start);
} else {
return G__48568;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.video.youtube.youtube_video,id,opts], null);

break;
case "iframe":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"allow-full-screen","allow-full-screen",-1219396017),true,new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope",new cljs.core.Keyword(null,"framespacing","framespacing",-63114747),"0",new cljs.core.Keyword(null,"frame-border","frame-border",-1868748185),"no",new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"scrolling","scrolling",349011090),"no",new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null);

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var iframe = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-embed-shell","div.video-embed-shell",-848349847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_shell_ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-embed-frame","div.video-embed-frame",1272468222),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),frame_style], null),iframe], null),((resizable_QMARK_)?frontend.components.block.video_resize_handle(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"*shell-ref","*shell-ref",474549227),_STAR_shell_ref,new cljs.core.Keyword(null,"set-width!","set-width!",-84755235),set_local_width_BANG_,new cljs.core.Keyword(null,"on-width-change!","on-width-change!",-1709794157),on_width_change_BANG_], null)):null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$video_embed_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48569 = cljs.core.first(args__31746__auto__);
var G__48570 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48569,G__48570) : io.factorhouse.hsx.core.obj_get.call(null,G__48569,G__48570));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"video-embed-cp","video-embed-cp",-722582563,null),args__31746__auto__),frontend$components$block$video_embed_cp,args__31746__auto__,null);
}
};
var frontend$components$block$video_embed_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51152__i = 0, G__51152__a = new Array(arguments.length -  0);
while (G__51152__i < G__51152__a.length) {G__51152__a[G__51152__i] = arguments[G__51152__i + 0]; ++G__51152__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51152__a,0,null);
} 
return frontend$components$block$video_embed_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$video_embed_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$video_embed_cp.cljs$lang$applyTo = (function (arglist__51153){
var args__31746__auto__ = cljs.core.seq(arglist__51153);
return frontend$components$block$video_embed_cp__delegate(args__31746__auto__);
});
frontend$components$block$video_embed_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$video_embed_cp__delegate;
return frontend$components$block$video_embed_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48571 = comp__31745__auto__;
var G__48572 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48571,G__48572) : io.factorhouse.hsx.core.react_memo.call(null,G__48571,G__48572));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"video-embed-cp");

return comp__31745__auto__;
})();
frontend.components.block.video_macro_dom_occurrence = (function frontend$components$block$video_macro_dom_occurrence(event,name,arguments$){
var target = event.target;
var current = (function (){var G__48573 = target;
if((G__48573 == null)){
return null;
} else {
return G__48573.closest(".video-embed-block");
}
})();
var block_node = (function (){var or__5142__auto__ = (function (){var G__48574 = current;
if((G__48574 == null)){
return null;
} else {
return G__48574.closest(".ls-block");
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__48575 = current;
if((G__48575 == null)){
return null;
} else {
return G__48575.closest("[blockid]");
}
}
})();
var nodes = (function (){var G__48576 = block_node;
if((G__48576 == null)){
return null;
} else {
return G__48576.querySelectorAll(".video-embed-block");
}
})();
var url_or_id = cljs.core.first(arguments$);
var G__48577 = nodes;
var G__48577__$1 = (((G__48577 == null))?null:cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(G__48577));
var G__48577__$2 = (((G__48577__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,node.getAttribute("data-video-macro-name"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_or_id,node.getAttribute("data-video-macro-id"))));
}),G__48577__$1));
var G__48577__$3 = (((G__48577__$2 == null))?null:cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,node)){
return idx;
} else {
return null;
}
}),G__48577__$2));
if((G__48577__$3 == null)){
return null;
} else {
return cljs.core.first(G__48577__$3);
}
});
frontend.components.block.editing_block_input = (function frontend$components$block$editing_block_input(block){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()))){
var G__48578 = frontend.state.get_edit_input_id();
if((G__48578 == null)){
return null;
} else {
return goog.dom.getElement(G__48578);
}
} else {
return null;
}
});
frontend.components.block.remap_video_edit_position = (function frontend$components$block$remap_video_edit_position(content,content_SINGLEQUOTE_,position){
if(typeof position === 'number'){
var change_start = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,content,content_SINGLEQUOTE_)));
var length_delta = (cljs.core.count(content_SINGLEQUOTE_) - cljs.core.count(content));
if((position <= change_start)){
return position;
} else {
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(change_start,(position + length_delta));
}
} else {
return null;
}
});
frontend.components.block.save_video_macro_width_BANG_ = (function frontend$components$block$save_video_macro_width_BANG_(config,name,arguments$,width,event){
var temp__5825__auto__ = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
var input = frontend.components.block.editing_block_input(block);
var content = (function (){var or__5142__auto__ = (function (){var G__48579 = input;
if((G__48579 == null)){
return null;
} else {
return G__48579.value;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
}
})();
var selection_start = (function (){var G__48580 = input;
if((G__48580 == null)){
return null;
} else {
return G__48580.selectionStart;
}
})();
var selection_end = (function (){var G__48581 = input;
if((G__48581 == null)){
return null;
} else {
return G__48581.selectionEnd;
}
})();
var selection_direction = (function (){var G__48582 = input;
if((G__48582 == null)){
return null;
} else {
return G__48582.selectionDirection;
}
})();
var occurrence = (function (){var or__5142__auto__ = frontend.components.block.video_macro_dom_occurrence(event,name,arguments$);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var content_SINGLEQUOTE_ = frontend.components.block.video.update_video_macro_width_in_content(content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),arguments$,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),occurrence], null),width);
if(((cljs.core.seq(content)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content,content_SINGLEQUOTE_)))){
if(cljs.core.truth_(input)){
var selection_start_SINGLEQUOTE__51159 = frontend.components.block.remap_video_edit_position(content,content_SINGLEQUOTE_,selection_start);
var selection_end_SINGLEQUOTE__51160 = frontend.components.block.remap_video_edit_position(content,content_SINGLEQUOTE_,selection_end);
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input.id,content_SINGLEQUOTE_);

if(cljs.core.truth_((function (){var and__5140__auto__ = selection_start_SINGLEQUOTE__51159;
if(cljs.core.truth_(and__5140__auto__)){
return selection_end_SINGLEQUOTE__51160;
} else {
return and__5140__auto__;
}
})())){
input.setSelectionRange(selection_start_SINGLEQUOTE__51159,selection_end_SINGLEQUOTE__51160,selection_direction);
} else {
}
} else {
}

return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,content_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.macro_video_cp = (function frontend$components$block$macro_video_cp(var_args){
var G__48584 = arguments.length;
switch (G__48584) {
case 3:
return frontend.components.block.macro_video_cp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.components.block.macro_video_cp.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.macro_video_cp.cljs$core$IFn$_invoke$arity$3 = (function (config,name,arguments$){
return frontend.components.block.macro_video_cp.cljs$core$IFn$_invoke$arity$4(config,name,arguments$,null);
}));

(frontend.components.block.macro_video_cp.cljs$core$IFn$_invoke$arity$4 = (function (config,name,arguments$,provider_hint){
var temp__5823__auto__ = cljs.core.first(arguments$);
if(cljs.core.truth_(temp__5823__auto__)){
var url_or_id = temp__5823__auto__;
if(cljs.core.truth_((function (){var or__5142__auto__ = provider_hint;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.util.url_QMARK_(url_or_id);
}
})())){
var width = frontend.components.block.video.video_width(arguments$);
var G__48585 = frontend.extensions.video.matched_video_embed.cljs$core$IFn$_invoke$arity$2(url_or_id,provider_hint);
var G__48585__$1 = (((G__48585 == null))?null:(function (){var G__48586 = G__48585;
var G__48586__$1 = (cljs.core.truth_(width)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48586,new cljs.core.Keyword(null,"width","width",-384071477),width):G__48586);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48586__$1,new cljs.core.Keyword(null,"on-width-change!","on-width-change!",-1709794157),(function (width__$1,event){
return frontend.components.block.save_video_macro_width_BANG_(config,name,arguments$,width__$1,event);
}));

})());
if((G__48585__$1 == null)){
return null;
} else {
return frontend.components.block.video_embed_cp(G__48585__$1);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning.mr-1","span.warning.mr-1",1091749305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","invalid-url","block/invalid-url",1871140339)], 0))], null),frontend.components.block.macro__GT_text("video",arguments$)], null);
}
} else {
if(cljs.core.truth_(provider_hint)){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning.mr-1","span.warning.mr-1",1091749305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","empty-url","block/empty-url",665612903)], 0))], null),frontend.components.block.macro__GT_text("video",arguments$)], null);
}
}
}));

(frontend.components.block.macro_video_cp.cljs$lang$maxFixedArity = 4);

frontend.components.block.macro_else_cp = (function frontend$components$block$macro_else_cp(name,config,arguments$){
var macro_content = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name));
}
})();
var macro_content__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(arguments$);
if(and__5140__auto__){
return macro_content;
} else {
return and__5140__auto__;
}
})())?logseq.common.util.macro.macro_subs(macro_content,arguments$):macro_content);
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return frontend.components.block.render_macro(config,name,arguments$,macro_content__$1,format);
});
frontend.components.block.macro_cp = (function frontend$components$block$macro_cp(config,options){
var map__48587 = options;
var map__48587__$1 = cljs.core.__destructure_map(map__48587);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48587__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48587__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var arguments$__$1 = (((((cljs.core.count(arguments$) >= (2))) && (((clojure.string.starts_with_QMARK_(cljs.core.first(arguments$),logseq.common.util.page_ref.left_brackets)) && (clojure.string.ends_with_QMARK_(cljs.core.last(arguments$),logseq.common.util.page_ref.right_brackets))))))?(function (){var title = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null);
})():arguments$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"query")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.macro","query-deprecated","block.macro/query-deprecated",2081401287)], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"function")){
return frontend.components.block.macro_function_cp(config,arguments$__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"namespace")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.macro","namespace-deprecated","block.macro/namespace-deprecated",-1337184812),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("library","title","library/title",667446050)], 0))], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"youtube")){
return frontend.components.block.macro_video_cp.cljs$core$IFn$_invoke$arity$4(config,name,arguments$__$1,new cljs.core.Keyword(null,"youtube","youtube",-1932361085));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"youtube-timestamp")){
var temp__5825__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var timestamp_SINGLEQUOTE_ = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.extensions.video.youtube.parse_timestamp(timestamp_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5825__auto____$1)){
var seconds = temp__5825__auto____$1;
return frontend.extensions.video.youtube.timestamp(seconds);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"zotero-imported-file")){
var vec__48588 = arguments$__$1;
var item_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48588,(0),null);
var filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48588,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = item_key;
if(cljs.core.truth_(and__5140__auto__)){
return filename;
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.extensions.zotero.zotero_imported_file(item_key,filename)], null);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"zotero-linked-file")){
var temp__5825__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var path = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.extensions.zotero.zotero_linked_file(path)], null);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"vimeo")){
return frontend.components.block.macro_video_cp.cljs$core$IFn$_invoke$arity$4(config,name,arguments$__$1,new cljs.core.Keyword(null,"vimeo","vimeo",-1217463574));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"bilibili")){
return frontend.components.block.macro_video_cp.cljs$core$IFn$_invoke$arity$4(config,name,arguments$__$1,new cljs.core.Keyword(null,"bilibili","bilibili",-500229174));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"video")){
return frontend.components.block.macro_video_cp.cljs$core$IFn$_invoke$arity$3(config,name,arguments$__$1);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["twitter",null,"tweet",null], null), null),name)){
var temp__5825__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var url = temp__5825__auto__;
var id_regex = /\/status\/(\d+)/;
if(cljs.core.truth_(new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config))){
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("{{twitter %s}}",url) : frontend.util.format.call(null,"{{twitter %s}}",url));
} else {
var temp__5825__auto____$1 = (((cljs.core.count(url) <= (15)))?url:cljs.core.last((frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(id_regex,url) : frontend.util.safe_re_find.call(null,id_regex,url)))
);
if(cljs.core.truth_(temp__5825__auto____$1)){
var id = temp__5825__auto____$1;
return frontend.ui.tweet_embed(id);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.macro","embed-deprecated","block.macro/embed-deprecated",-1037572335)], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"renderer")){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
var temp__5825__auto__ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config)));
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return frontend.components.plugins.hook_ui_slot(new cljs.core.Keyword(null,"macro-renderer-slotted","macro-renderer-slotted",-1582637864),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),block_uuid));
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.macro.macros),name))){
var fexpr__48591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.macro.macros),name);
return (fexpr__48591.cljs$core$IFn$_invoke$arity$2 ? fexpr__48591.cljs$core$IFn$_invoke$arity$2(config,options) : fexpr__48591.call(null,config,options));
} else {
return frontend.components.block.macro_else_cp(name,config,arguments$__$1);

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
}
}
}
}
});
frontend.components.block.emphasis_cp = (function frontend$components$block$emphasis_cp(config,kind,data){
var elem = (function (){var G__48592 = kind;
switch (G__48592) {
case "Bold":
return new cljs.core.Keyword(null,"b","b",1482224470);

break;
case "Italic":
return new cljs.core.Keyword(null,"i","i",-1386841315);

break;
case "Underline":
return new cljs.core.Keyword(null,"ins","ins",-1021983570);

break;
case "Strike_through":
return new cljs.core.Keyword(null,"del","del",574975584);

break;
case "Highlight":
return new cljs.core.Keyword(null,"mark","mark",-373816345);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48592))));

}
})();
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(elem,(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,data) : frontend.components.block.map_inline.call(null,config,data)));
});
frontend.components.block.hiccup__GT_html = (function frontend$components$block$hiccup__GT_html(s){
var result = logseq.common.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(s);
var result_SINGLEQUOTE_ = ((cljs.core.seq(result))?result:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","invalid-hiccup","block/invalid-hiccup",-1861591104)], 0))], null),s], null));
return frontend.security.sanitize_html((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(result_SINGLEQUOTE_))));
});
frontend.components.block.highlight_query_text = (function frontend$components$block$highlight_query_text(content,query){
if(((typeof content === 'string') && ((((!(clojure.string.blank_QMARK_(query)))) && (clojure.string.includes_QMARK_(clojure.string.lower_case(content),clojure.string.lower_case(query))))))){
return frontend.handler.search.highlight_exact_query(content,query);
} else {
return content;
}
});
frontend.components.block.preserve_heading_whitespace = (function frontend$components$block$preserve_heading_whitespace(config,s){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"parent-heading","parent-heading",-1744367606).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof s === 'string') && (clojure.string.blank_QMARK_(s)));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.whitespace-pre-wrap","span.whitespace-pre-wrap",-1392986320),s], null);
} else {
return s;
}
});
frontend.components.block.inline = (function frontend$components$block$inline(p__48612,item){
var map__48613 = p__48612;
var map__48613__$1 = cljs.core.__destructure_map(map__48613);
var config = map__48613__$1;
var html_export_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48613__$1,new cljs.core.Keyword(null,"html-export?","html-export?",504770426));
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Plain")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.preserve_heading_whitespace(config,frontend.components.block.highlight_query_text(s,new cljs.core.Keyword(null,"highlight-query","highlight-query",1703850880).cljs$core$IFn$_invoke$arity$1(config)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48732){if((e48732 instanceof Error)){
var e__36180__auto__ = e48732;
if((e__36180__auto__ === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Spaces")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.preserve_heading_whitespace(config,s);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48733){if((e48733 instanceof Error)){
var e__36180__auto____$1 = e48733;
if((e__36180__auto____$1 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Superscript")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sup","sup",-2039492346),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.map_inline.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48734){if((e48734 instanceof Error)){
var e__36180__auto____$2 = e48734;
if((e__36180__auto____$2 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Subscript")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.map_inline.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48735){if((e48735 instanceof Error)){
var e__36180__auto____$3 = e48735;
if((e__36180__auto____$3 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Tag")){
var temp__5825__auto__ = logseq.graph_parser.block.get_tag(item);
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
var s__$1 = (logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1(s) : logseq.graph_parser.text.page_ref_un_brackets_BANG_.call(null,s));
if(logseq.common.util.uuid_string_QMARK_(s__$1)){
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"tag?","tag?",1714008252),true),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(s__$1)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1))], null);
}
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e48736){if((e48736 instanceof Error)){
var e__36180__auto____$4 = e48736;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Emphasis")){
try{var item_1__48621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__48621)) && ((cljs.core.count(item_1__48621) === 2)))){
try{var item_1__48621_0__48626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48621,(0));
if(((cljs.core.vector_QMARK_(item_1__48621_0__48626)) && ((cljs.core.count(item_1__48621_0__48626) === 1)))){
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48621_0__48626,(0));
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48621,(1));
return frontend.components.block.emphasis_cp(config,kind,data);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48761){if((e48761 instanceof Error)){
var e__36180__auto____$5 = e48761;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$5;
}
} else {
throw e48761;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48759){if((e48759 instanceof Error)){
var e__36180__auto____$5 = e48759;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$5;
}
} else {
throw e48759;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48737){if((e48737 instanceof Error)){
var e__36180__auto____$5 = e48737;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Entity")){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(e))], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48738){if((e48738 instanceof Error)){
var e__36180__auto____$6 = e48738;
if((e__36180__auto____$6 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Latex_Fragment")){
try{var item_1__48621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__48621)) && ((cljs.core.count(item_1__48621) === 2)))){
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48621,(0));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48621,(1));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(s,false,true);
} else {
return frontend.extensions.latex.latex(s,false,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(display,"Inline"));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e48755){if((e48755 instanceof Error)){
var e__36180__auto____$7 = e48755;
if((e__36180__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$7;
}
} else {
throw e48755;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48739){if((e48739 instanceof Error)){
var e__36180__auto____$7 = e48739;
if((e__36180__auto____$7 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Target")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),s], null),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48741){if((e48741 instanceof Error)){
var e__36180__auto____$8 = e48741;
if((e__36180__auto____$8 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Radio_Target")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),s], null),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48743){if((e48743 instanceof Error)){
var e__36180__auto____$9 = e48743;
if((e__36180__auto____$9 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Email")){
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var map__48752 = address;
var map__48752__$1 = cljs.core.__destructure_map(map__48752);
var local_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48752__$1,new cljs.core.Keyword(null,"local_part","local_part",-1705904558));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48752__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var address__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_part)+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(address__$1))], null),address__$1], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48746){if((e48746 instanceof Error)){
var e__36180__auto____$10 = e48746;
if((e__36180__auto____$10 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Nested_link")){
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.nested_link(config,html_export_QMARK_,link);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48747){if((e48747 instanceof Error)){
var e__36180__auto____$11 = e48747;
if((e__36180__auto____$11 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Link")){
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.link_cp(config,link);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48748){if((e48748 instanceof Error)){
var e__36180__auto____$12 = e48748;
if((e__36180__auto____$12 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Verbatim")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48749){if((e48749 instanceof Error)){
var e__36180__auto____$13 = e48749;
if((e__36180__auto____$13 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Code")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48750){if((e48750 instanceof Error)){
var e__36180__auto____$14 = e48750;
if((e__36180__auto____$14 === cljs.core.match.backtrack)){
try{var item_0__48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48620 === "Inline_Source_Block")){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48751){if((e48751 instanceof Error)){
var e__36180__auto____$15 = e48751;
if((e__36180__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$15;
}
} else {
throw e48751;

}
}} else {
throw e__36180__auto____$14;
}
} else {
throw e48750;

}
}} else {
throw e__36180__auto____$13;
}
} else {
throw e48749;

}
}} else {
throw e__36180__auto____$12;
}
} else {
throw e48748;

}
}} else {
throw e__36180__auto____$11;
}
} else {
throw e48747;

}
}} else {
throw e__36180__auto____$10;
}
} else {
throw e48746;

}
}} else {
throw e__36180__auto____$9;
}
} else {
throw e48743;

}
}} else {
throw e__36180__auto____$8;
}
} else {
throw e48741;

}
}} else {
throw e__36180__auto____$7;
}
} else {
throw e48739;

}
}} else {
throw e__36180__auto____$6;
}
} else {
throw e48738;

}
}} else {
throw e__36180__auto____$5;
}
} else {
throw e48737;

}
}} else {
throw e__36180__auto____$4;
}
} else {
throw e48736;

}
}} else {
throw e__36180__auto____$3;
}
} else {
throw e48735;

}
}} else {
throw e__36180__auto____$2;
}
} else {
throw e48734;

}
}} else {
throw e__36180__auto____$1;
}
} else {
throw e48733;

}
}} else {
throw e__36180__auto__;
}
} else {
throw e48732;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48654){if((e48654 instanceof Error)){
var e__36180__auto__ = e48654;
if((e__36180__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__48635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48635 === "Export_Snippet")){
try{var item_1__48636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__48636 === "html")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(s)], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e48731){if((e48731 instanceof Error)){
var e__36180__auto____$1 = e48731;
if((e__36180__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$1;
}
} else {
throw e48731;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48730){if((e48730 instanceof Error)){
var e__36180__auto____$1 = e48730;
if((e__36180__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$1;
}
} else {
throw e48730;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48657){if((e48657 instanceof Error)){
var e__36180__auto____$1 = e48657;
if((e__36180__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__48638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48638 === "Inline_Hiccup")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","invalid-hiccup","block/invalid-hiccup",-1861591104)], 0))], null),s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.components.block.hiccup__GT_html(s)], null)], null)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48724){if((e48724 instanceof Error)){
var e__36180__auto____$2 = e48724;
if((e__36180__auto____$2 === cljs.core.match.backtrack)){
try{var item_0__48638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48638 === "Inline_Html")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(s)], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e48725){if((e48725 instanceof Error)){
var e__36180__auto____$3 = e48725;
if((e__36180__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$3;
}
} else {
throw e48725;

}
}} else {
throw e__36180__auto____$2;
}
} else {
throw e48724;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48676){if((e48676 instanceof Error)){
var e__36180__auto____$2 = e48676;
if((e__36180__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 1)))){
try{var item_0__48642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48642 === "Break_Line")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48719){if((e48719 instanceof Error)){
var e__36180__auto____$3 = e48719;
if((e__36180__auto____$3 === cljs.core.match.backtrack)){
try{var item_0__48642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48642 === "Hard_Break_Line")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48720){if((e48720 instanceof Error)){
var e__36180__auto____$4 = e48720;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$4;
}
} else {
throw e48720;

}
}} else {
throw e__36180__auto____$3;
}
} else {
throw e48719;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48677){if((e48677 instanceof Error)){
var e__36180__auto____$3 = e48677;
if((e__36180__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__48643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48643 === "Timestamp")){
try{var item_1__48644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__48644)) && ((cljs.core.count(item_1__48644) === 2)))){
try{var item_1__48644_0__48645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(0));
if((item_1__48644_0__48645 === "Scheduled")){
var _timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(1));
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e48693){if((e48693 instanceof Error)){
var e__36180__auto____$4 = e48693;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
try{var item_1__48644_0__48645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(0));
if((item_1__48644_0__48645 === "Deadline")){
var _timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(1));
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e48694){if((e48694 instanceof Error)){
var e__36180__auto____$5 = e48694;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
try{var item_1__48644_0__48645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(0));
if((item_1__48644_0__48645 === "Date")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(1));
return frontend.components.block.timestamp(t,new cljs.core.Keyword(null,"date","date",-1463434462));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48695){if((e48695 instanceof Error)){
var e__36180__auto____$6 = e48695;
if((e__36180__auto____$6 === cljs.core.match.backtrack)){
try{var item_1__48644_0__48645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(0));
if((item_1__48644_0__48645 === "Closed")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(1));
return frontend.components.block.timestamp(t,new cljs.core.Keyword(null,"closed","closed",-919675359));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48696){if((e48696 instanceof Error)){
var e__36180__auto____$7 = e48696;
if((e__36180__auto____$7 === cljs.core.match.backtrack)){
try{var item_1__48644_0__48645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(0));
if((item_1__48644_0__48645 === "Range")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(1));
return frontend.components.block.range(t,false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48701){if((e48701 instanceof Error)){
var e__36180__auto____$8 = e48701;
if((e__36180__auto____$8 === cljs.core.match.backtrack)){
try{var item_1__48644_0__48645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(0));
if((item_1__48644_0__48645 === "Clock")){
try{var item_1__48644_1__48646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(1));
if(((cljs.core.vector_QMARK_(item_1__48644_1__48646)) && ((cljs.core.count(item_1__48644_1__48646) === 2)))){
try{var item_1__48644_1__48646_0__48647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644_1__48646,(0));
if((item_1__48644_1__48646_0__48647 === "Stopped")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644_1__48646,(1));
return frontend.components.block.range(t,true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48706){if((e48706 instanceof Error)){
var e__36180__auto____$9 = e48706;
if((e__36180__auto____$9 === cljs.core.match.backtrack)){
try{var item_1__48644_1__48646_0__48647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644_1__48646,(0));
if((item_1__48644_1__48646_0__48647 === "Started")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644_1__48646,(1));
return frontend.components.block.timestamp(t,new cljs.core.Keyword(null,"started","started",585705024));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48707){if((e48707 instanceof Error)){
var e__36180__auto____$10 = e48707;
if((e__36180__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$10;
}
} else {
throw e48707;

}
}} else {
throw e__36180__auto____$9;
}
} else {
throw e48706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48703){if((e48703 instanceof Error)){
var e__36180__auto____$9 = e48703;
if((e__36180__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$9;
}
} else {
throw e48703;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48702){if((e48702 instanceof Error)){
var e__36180__auto____$9 = e48702;
if((e__36180__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$9;
}
} else {
throw e48702;

}
}} else {
throw e__36180__auto____$8;
}
} else {
throw e48701;

}
}} else {
throw e__36180__auto____$7;
}
} else {
throw e48696;

}
}} else {
throw e__36180__auto____$6;
}
} else {
throw e48695;

}
}} else {
throw e__36180__auto____$5;
}
} else {
throw e48694;

}
}} else {
throw e__36180__auto____$4;
}
} else {
throw e48693;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48692){if((e48692 instanceof Error)){
var e__36180__auto____$4 = e48692;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$4;
}
} else {
throw e48692;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48679){if((e48679 instanceof Error)){
var e__36180__auto____$4 = e48679;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
try{var item_0__48643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48643 === "Cookie")){
try{var item_1__48644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__48644)) && ((cljs.core.count(item_1__48644) === 2)))){
try{var item_1__48644_0__48649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(0));
if((item_1__48644_0__48649 === "Percent")){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cookie-percent"], null),(frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("[%d%%]",n) : frontend.util.format.call(null,"[%d%%]",n))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48691){if((e48691 instanceof Error)){
var e__36180__auto____$5 = e48691;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$5;
}
} else {
throw e48691;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48684){if((e48684 instanceof Error)){
var e__36180__auto____$5 = e48684;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
try{var item_1__48644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__48644)) && ((cljs.core.count(item_1__48644) === 3)))){
try{var item_1__48644_0__48651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(0));
if((item_1__48644_0__48651 === "Absolute")){
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(1));
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__48644,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cookie-absolute"], null),(frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3("[%d/%d]",current,total) : frontend.util.format.call(null,"[%d/%d]",current,total))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48686){if((e48686 instanceof Error)){
var e__36180__auto____$6 = e48686;
if((e__36180__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$6;
}
} else {
throw e48686;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48685){if((e48685 instanceof Error)){
var e__36180__auto____$6 = e48685;
if((e__36180__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$6;
}
} else {
throw e48685;

}
}} else {
throw e__36180__auto____$5;
}
} else {
throw e48684;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48680){if((e48680 instanceof Error)){
var e__36180__auto____$5 = e48680;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
try{var item_0__48643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48643 === "Footnote_Reference")){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var map__48683 = options;
var map__48683__$1 = cljs.core.__destructure_map(map__48683);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48683__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var encode_name = frontend.util.url_encode(name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.fn","sup.fn",403400163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"fnr."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encode_name)),new cljs.core.Keyword(null,"class","class",-2030961996),"footref",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_((""+"fn."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encode_name)));
})], null),name], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48681){if((e48681 instanceof Error)){
var e__36180__auto____$6 = e48681;
if((e__36180__auto____$6 === cljs.core.match.backtrack)){
try{var item_0__48643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__48643 === "Macro")){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.macro_cp(config,options);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48682){if((e48682 instanceof Error)){
var e__36180__auto____$7 = e48682;
if((e__36180__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$7;
}
} else {
throw e48682;

}
}} else {
throw e__36180__auto____$6;
}
} else {
throw e48681;

}
}} else {
throw e__36180__auto____$5;
}
} else {
throw e48680;

}
}} else {
throw e__36180__auto____$4;
}
} else {
throw e48679;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48678){if((e48678 instanceof Error)){
var e__36180__auto____$4 = e48678;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
return "";
} else {
throw e__36180__auto____$4;
}
} else {
throw e48678;

}
}} else {
throw e__36180__auto____$3;
}
} else {
throw e48677;

}
}} else {
throw e__36180__auto____$2;
}
} else {
throw e48676;

}
}} else {
throw e__36180__auto____$1;
}
} else {
throw e48657;

}
}} else {
throw e__36180__auto__;
}
} else {
throw e48654;

}
}});
frontend.components.block.video_inline_segments_cp = (function frontend$components$block$video_inline_segments_cp(config,items){
return frontend.components.block.video.video_inline_segments_cp((function (p1__48764_SHARP_){
return frontend.components.block.inline(config,p1__48764_SHARP_);
}),(function (p1__48765_SHARP_){
return (frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,p1__48765_SHARP_) : frontend.components.block.map_inline.call(null,config,p1__48765_SHARP_));
}),items);
});
frontend.components.block.block_child = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_child(block){
return block;
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_child__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48766 = cljs.core.first(args__31746__auto__);
var G__48767 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48766,G__48767) : io.factorhouse.hsx.core.obj_get.call(null,G__48766,G__48767));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-child","block-child",-2140682396,null),args__31746__auto__),frontend$components$block$block_child,args__31746__auto__,null);
}
};
var frontend$components$block$block_child = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51199__i = 0, G__51199__a = new Array(arguments.length -  0);
while (G__51199__i < G__51199__a.length) {G__51199__a[G__51199__i] = arguments[G__51199__i + 0]; ++G__51199__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51199__a,0,null);
} 
return frontend$components$block$block_child__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_child.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_child.cljs$lang$applyTo = (function (arglist__51200){
var args__31746__auto__ = cljs.core.seq(arglist__51200);
return frontend$components$block$block_child__delegate(args__31746__auto__);
});
frontend$components$block$block_child.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_child__delegate;
return frontend$components$block$block_child;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48772 = comp__31745__auto__;
var G__48773 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48772,G__48773) : io.factorhouse.hsx.core.react_memo.call(null,G__48772,G__48773));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-child");

return comp__31745__auto__;
})();
frontend.components.block.dnd_same_block_QMARK_ = (function frontend$components$block$dnd_same_block_QMARK_(uuid){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.components.block._STAR_dragging_block)),uuid);
});
frontend.components.block.on_drag_start = (function frontend$components$block$on_drag_start(event,block,block_id){
var selected = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48775_SHARP_){
return p1__48775_SHARP_.id;
}),frontend.state.get_selection_blocks()));
var selected_QMARK_ = cljs.core.contains_QMARK_(selected,block_id);
var block_uuid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(selected_QMARK_){
} else {
frontend.state.clear_selection_BANG_();

frontend.handler.editor.format.highlight_block_BANG_(block_uuid);
}

frontend.handler.editor.block__GT_data_transfer_BANG_(block_uuid,event,false);

frontend.components.block.goog$module$goog$object.get(event,"dataTransfer").setData("block-dom-id",block_id);

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,true);

return cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_block,block);
});
frontend.components.block.bullet_on_click = (function frontend$components$block$bullet_on_click(e,block,uuid,p__48776){
var map__48777 = p__48776;
var map__48777__$1 = cljs.core.__destructure_map(map__48777);
var on_redirect_to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48777__$1,new cljs.core.Keyword(null,"on-redirect-to-page","on-redirect-to-page",-1420791266));
if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block","block",664686210));

return frontend.util.stop(e);
} else {
if(cljs.core.truth_(uuid)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = on_redirect_to_page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.route.redirect_to_page_BANG_;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))], null));
} else {
return null;
}

}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_lazy_children_heights !== 'undefined')){
} else {
frontend.components.block._STAR_lazy_children_heights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.components.block.lazy_children_margin = (1200);
frontend.components.block.lazy_children_row_height = (32);
/**
 * Rough rendered height of an unmounted subtree: a fixed row height per
 * descendant, counting nested children through already-loaded children
 * slots.
 */
frontend.components.block.estimate_children_height = (function frontend$components$block$estimate_children_height(child_uuids,depth){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (height,uuid){
return ((height + frontend.components.block.lazy_children_row_height) + (((depth < (8)))?(function (){var temp__5823__auto__ = frontend.db.hooks.peek_children(uuid);
if(cljs.core.truth_(temp__5823__auto__)){
var nested = temp__5823__auto__;
var G__48781 = nested;
var G__48782 = (depth + (1));
return (frontend.components.block.estimate_children_height.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.estimate_children_height.cljs$core$IFn$_invoke$arity$2(G__48781,G__48782) : frontend.components.block.estimate_children_height.call(null,G__48781,G__48782));
} else {
return (0);
}
})():(0)));
}),(0),child_uuids);
});
frontend.components.block.near_block_viewport_QMARK_ = (function frontend$components$block$near_block_viewport_QMARK_(el){
if(cljs.core.truth_(el)){
var rect = el.getBoundingClientRect();
var viewport_height = (function (){var or__5142__auto__ = window.innerHeight;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__48783 = document;
var G__48783__$1 = (((G__48783 == null))?null:G__48783.documentElement);
if((G__48783__$1 == null)){
return null;
} else {
return G__48783__$1.clientHeight;
}
}
})();
return (((rect.top < (viewport_height + frontend.components.block.lazy_children_margin))) && ((rect.bottom > (- frontend.components.block.lazy_children_margin))));
} else {
return null;
}
});
/**
 * Mounts a block's children rows only once the subtree approaches the viewport.
 * Offscreen subtrees render an estimated-height placeholder instead, so
 * revisiting a long scrolled page doesn't synchronously mount thousands of
 * rows.
 */
frontend.components.block.lazy_block_children = (function (){var render_fn__31744__auto__ = (function frontend$components$block$lazy_block_children(config_SINGLEQUOTE_,block,child_uuids,collapsed_QMARK_,render_children){
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var height_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.resolve_container_id(new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config_SINGLEQUOTE_)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
var forced_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","anchor-mount","ui/anchor-mount",1065207909),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null));
var vec__48785 = logseq.shui.hooks.use_state(cljs.core.not(new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848).cljs$core$IFn$_invoke$arity$1(config_SINGLEQUOTE_)));
var near_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48785,(0),null);
var set_near_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48785,(1),null);
logseq.shui.hooks.use_layout_effect_BANG_((function (){
if(cljs.core.truth_(near_QMARK_)){
return null;
} else {
if(cljs.core.truth_(forced_QMARK_)){
return (set_near_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_near_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_near_BANG_.call(null,true));
} else {
if((logseq.shui.hooks.deref(_STAR_ref) == null)){
return (set_near_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_near_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_near_BANG_.call(null,true));
} else {
if(cljs.core.truth_(frontend.components.block.near_block_viewport_QMARK_(logseq.shui.hooks.deref(_STAR_ref)))){
return (set_near_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_near_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_near_BANG_.call(null,true));
} else {
if((typeof IntersectionObserver !== 'undefined')){
var el = logseq.shui.hooks.deref(_STAR_ref);
var observer = (new IntersectionObserver((function (entries){
if(cljs.core.truth_(cljs.core.some((function (p1__48784_SHARP_){
return p1__48784_SHARP_.isIntersecting;
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(entries)))){
return (set_near_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_near_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_near_BANG_.call(null,true));
} else {
return null;
}
}),({"rootMargin": (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.block.lazy_children_margin)+"px 0px")})));
observer.observe(el);

return (function (){
return observer.disconnect();
});
} else {
return (set_near_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_near_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_near_BANG_.call(null,true));

}
}
}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [near_QMARK_,forced_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = near_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (typeof ResizeObserver !== 'undefined');
} else {
return and__5140__auto__;
}
})())){
var temp__5823__auto__ = logseq.shui.hooks.deref(_STAR_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
var observer = (new ResizeObserver((function (entries){
var temp__5825__auto__ = (function (){var G__48788 = entries;
var G__48788__$1 = (((G__48788 == null))?null:(G__48788[(0)]));
var G__48788__$2 = (((G__48788__$1 == null))?null:G__48788__$1.contentRect);
if((G__48788__$2 == null)){
return null;
} else {
return G__48788__$2.height;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var height = temp__5825__auto__;
if((height > (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.block._STAR_lazy_children_heights,cljs.core.assoc,height_key,height);
} else {
return null;
}
} else {
return null;
}
})));
observer.observe(el);

return (function (){
return observer.disconnect();
});
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [near_QMARK_,height_key], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-children.w-full","div.block-children.w-full",1645859274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__48789 = cljs.core.PersistentArrayMap.EMPTY;
var G__48789__$1 = (cljs.core.truth_(collapsed_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48789,new cljs.core.Keyword(null,"display","display",242065432),"none"):G__48789);
if(cljs.core.not(near_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48789__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.block._STAR_lazy_children_heights),height_key);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.block.estimate_children_height(child_uuids,(0));
}
})())+"px"));
} else {
return G__48789__$1;
}
})()], null),(cljs.core.truth_(near_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_children,config_SINGLEQUOTE_,child_uuids], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$lazy_block_children__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48790 = cljs.core.first(args__31746__auto__);
var G__48791 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48790,G__48791) : io.factorhouse.hsx.core.obj_get.call(null,G__48790,G__48791));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lazy-block-children","lazy-block-children",1491118527,null),args__31746__auto__),frontend$components$block$lazy_block_children,args__31746__auto__,null);
}
};
var frontend$components$block$lazy_block_children = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51208__i = 0, G__51208__a = new Array(arguments.length -  0);
while (G__51208__i < G__51208__a.length) {G__51208__a[G__51208__i] = arguments[G__51208__i + 0]; ++G__51208__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51208__a,0,null);
} 
return frontend$components$block$lazy_block_children__delegate.call(this,args__31746__auto__);};
frontend$components$block$lazy_block_children.cljs$lang$maxFixedArity = 0;
frontend$components$block$lazy_block_children.cljs$lang$applyTo = (function (arglist__51210){
var args__31746__auto__ = cljs.core.seq(arglist__51210);
return frontend$components$block$lazy_block_children__delegate(args__31746__auto__);
});
frontend$components$block$lazy_block_children.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$lazy_block_children__delegate;
return frontend$components$block$lazy_block_children;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48792 = comp__31745__auto__;
var G__48793 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48792,G__48793) : io.factorhouse.hsx.core.react_memo.call(null,G__48792,G__48793));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lazy-block-children");

return comp__31745__auto__;
})();
frontend.components.block.block_children = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_children(config,block,child_uuids,collapsed_QMARK_,render_children){
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var query_QMARK_ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
var child_uuids__$1 = cljs.core.vec(child_uuids);
if(((cljs.core.seq(child_uuids__$1)) && (cljs.core.not(collapsed_QMARK_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-children-container.flex","div.block-children-container.flex",1168888678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-children-left-border","div.block-children-left-border",-1892417947),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return frontend.handler.editor.toggle_open_block_children_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
})], null)], null),(function (){var config_SINGLEQUOTE_ = (function (){var G__48794 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354)], 0));
var G__48794__$1 = (cljs.core.truth_((function (){var or__5142__auto__ = ref_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return query_QMARK_;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48794,new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933),true):G__48794);
if(cljs.core.integer_QMARK_(new cljs.core.Keyword(null,"block-level","block-level",390971879).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48794__$1,new cljs.core.Keyword(null,"block-level","block-level",390971879),cljs.core.inc);
} else {
return G__48794__$1;
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.lazy_block_children,config_SINGLEQUOTE_,block,child_uuids__$1,collapsed_QMARK_,render_children], null);
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_children__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48795 = cljs.core.first(args__31746__auto__);
var G__48796 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48795,G__48796) : io.factorhouse.hsx.core.obj_get.call(null,G__48795,G__48796));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-children","block-children",161117033,null),args__31746__auto__),frontend$components$block$block_children,args__31746__auto__,null);
}
};
var frontend$components$block$block_children = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51211__i = 0, G__51211__a = new Array(arguments.length -  0);
while (G__51211__i < G__51211__a.length) {G__51211__a[G__51211__i] = arguments[G__51211__i + 0]; ++G__51211__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51211__a,0,null);
} 
return frontend$components$block$block_children__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_children.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_children.cljs$lang$applyTo = (function (arglist__51212){
var args__31746__auto__ = cljs.core.seq(arglist__51212);
return frontend$components$block$block_children__delegate(args__31746__auto__);
});
frontend$components$block$block_children.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_children__delegate;
return frontend$components$block$block_children;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48797 = comp__31745__auto__;
var G__48798 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48797,G__48798) : io.factorhouse.hsx.core.react_memo.call(null,G__48797,G__48798));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-children");

return comp__31745__auto__;
})();
frontend.components.block.library_child_uuids = (function (){var render_fn__31744__auto__ = (function frontend$components$block$library_child_uuids(child_uuids,then){
var blocks = frontend.db.hooks.use_blocks(cljs.core.vec(child_uuids));
var G__48799 = (((blocks == null))?cljs.core.PersistentVector.EMPTY:frontend.util.entity.library_outline_child_uuids(blocks));
return (then.cljs$core$IFn$_invoke$arity$1 ? then.cljs$core$IFn$_invoke$arity$1(G__48799) : then.call(null,G__48799));
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$library_child_uuids__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48800 = cljs.core.first(args__31746__auto__);
var G__48801 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48800,G__48801) : io.factorhouse.hsx.core.obj_get.call(null,G__48800,G__48801));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"library-child-uuids","library-child-uuids",2096039594,null),args__31746__auto__),frontend$components$block$library_child_uuids,args__31746__auto__,null);
}
};
var frontend$components$block$library_child_uuids = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51213__i = 0, G__51213__a = new Array(arguments.length -  0);
while (G__51213__i < G__51213__a.length) {G__51213__a[G__51213__i] = arguments[G__51213__i + 0]; ++G__51213__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51213__a,0,null);
} 
return frontend$components$block$library_child_uuids__delegate.call(this,args__31746__auto__);};
frontend$components$block$library_child_uuids.cljs$lang$maxFixedArity = 0;
frontend$components$block$library_child_uuids.cljs$lang$applyTo = (function (arglist__51214){
var args__31746__auto__ = cljs.core.seq(arglist__51214);
return frontend$components$block$library_child_uuids__delegate(args__31746__auto__);
});
frontend$components$block$library_child_uuids.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$library_child_uuids__delegate;
return frontend$components$block$library_child_uuids;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48802 = comp__31745__auto__;
var G__48803 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48802,G__48803) : io.factorhouse.hsx.core.react_memo.call(null,G__48802,G__48803));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"library-child-uuids");

return comp__31745__auto__;
})();
/**
 * Library shows nested pages only; other pages keep every child.
 */
frontend.components.block.with_library_child_uuids = (function frontend$components$block$with_library_child_uuids(config,child_uuids,then){
if(cljs.core.truth_(new cljs.core.Keyword(null,"library?","library?",1697356991).cljs$core$IFn$_invoke$arity$1(config))){
return frontend.components.block.library_child_uuids(child_uuids,then);
} else {
return (then.cljs$core$IFn$_invoke$arity$1 ? then.cljs$core$IFn$_invoke$arity$1(child_uuids) : then.call(null,child_uuids));
}
});
frontend.components.block.block_content_empty_QMARK_ = (function frontend$components$block$block_content_empty_QMARK_(block){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
});
frontend.components.block.element_in_viewport_QMARK_ = (function frontend$components$block$element_in_viewport_QMARK_(el){
if(cljs.core.truth_(el)){
var rect = el.getBoundingClientRect();
var viewport_height = (function (){var or__5142__auto__ = window.innerHeight;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__48804 = document;
var G__48804__$1 = (((G__48804 == null))?null:G__48804.documentElement);
if((G__48804__$1 == null)){
return null;
} else {
return G__48804__$1.clientHeight;
}
}
})();
var viewport_width = (function (){var or__5142__auto__ = window.innerWidth;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__48805 = document;
var G__48805__$1 = (((G__48805 == null))?null:G__48805.documentElement);
if((G__48805__$1 == null)){
return null;
} else {
return G__48805__$1.clientWidth;
}
}
})();
return (((rect.top < viewport_height)) && ((((rect.bottom > (0))) && ((((rect.left < viewport_width)) && ((rect.right > (0))))))));
} else {
return null;
}
});
frontend.components.block.comments_area_in_viewport_QMARK_ = (function frontend$components$block$comments_area_in_viewport_QMARK_(comments_area){
var G__48806 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_area);
var G__48806__$1 = (((G__48806 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48806)));
var G__48806__$2 = (((G__48806__$1 == null))?null:(function (uuid){
return goog.dom.getElement((""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)));
})(G__48806__$1));
if((G__48806__$2 == null)){
return null;
} else {
return frontend.components.block.element_in_viewport_QMARK_(G__48806__$2);
}
});
frontend.components.block.selected_inline_comment_thread_uuid = (function frontend$components$block$selected_inline_comment_thread_uuid(inline_thread,target_block_uuid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target-block-uuid","target-block-uuid",1683909942).cljs$core$IFn$_invoke$arity$1(inline_thread),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_block_uuid)))){
var G__48807 = new cljs.core.Keyword(null,"comments-area-uuid","comments-area-uuid",-576841479).cljs$core$IFn$_invoke$arity$1(inline_thread);
if((G__48807 == null)){
return null;
} else {
return cljs.core.uuid(G__48807);
}
} else {
return null;
}
});
frontend.components.block.open_comment_thread_BANG_ = (function frontend$components$block$open_comment_thread_BANG_(target_block_uuid,comments_area){
var G__48808 = frontend.components.block.comments_model.comment_thread_click_action(frontend.components.block.comments_area_in_viewport_QMARK_(comments_area));
var G__48808__$1 = (((G__48808 instanceof cljs.core.Keyword))?G__48808.fqn:null);
switch (G__48808__$1) {
case "focus-comments-area":
frontend.state.set_state_BANG_(new cljs.core.Keyword("comments","inline-thread","comments/inline-thread",2063931272),null);

return frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$2(comments_area,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739),true], null));

break;
case "show-inline-comments":
frontend.handler.comments.expand_comments_area_BANG_(comments_area);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("comments","inline-thread","comments/inline-thread",2063931272),frontend.components.block.comments_model.next_inline_comment_thread(frontend.state.get_state(new cljs.core.Keyword("comments","inline-thread","comments/inline-thread",2063931272)),target_block_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_area)));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48808__$1))));

}
});
frontend.components.block.subscribed_comment_thread = (function (){var render_fn__31744__auto__ = (function frontend$components$block$subscribed_comment_thread(thread_uuid,render_fn){
var comment_thread = frontend.db.hooks.use_block(thread_uuid);
if(cljs.core.truth_(comment_thread)){
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(comment_thread) : render_fn.call(null,comment_thread));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$subscribed_comment_thread__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48809 = cljs.core.first(args__31746__auto__);
var G__48810 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48809,G__48810) : io.factorhouse.hsx.core.obj_get.call(null,G__48809,G__48810));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"subscribed-comment-thread","subscribed-comment-thread",1394342183,null),args__31746__auto__),frontend$components$block$subscribed_comment_thread,args__31746__auto__,null);
}
};
var frontend$components$block$subscribed_comment_thread = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51220__i = 0, G__51220__a = new Array(arguments.length -  0);
while (G__51220__i < G__51220__a.length) {G__51220__a[G__51220__i] = arguments[G__51220__i + 0]; ++G__51220__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51220__a,0,null);
} 
return frontend$components$block$subscribed_comment_thread__delegate.call(this,args__31746__auto__);};
frontend$components$block$subscribed_comment_thread.cljs$lang$maxFixedArity = 0;
frontend$components$block$subscribed_comment_thread.cljs$lang$applyTo = (function (arglist__51222){
var args__31746__auto__ = cljs.core.seq(arglist__51222);
return frontend$components$block$subscribed_comment_thread__delegate(args__31746__auto__);
});
frontend$components$block$subscribed_comment_thread.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$subscribed_comment_thread__delegate;
return frontend$components$block$subscribed_comment_thread;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48811 = comp__31745__auto__;
var G__48812 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48811,G__48812) : io.factorhouse.hsx.core.react_memo.call(null,G__48811,G__48812));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"subscribed-comment-thread");

return comp__31745__auto__;
})();
frontend.components.block.subscribed_comment_area = (function (){var render_fn__31744__auto__ = (function frontend$components$block$subscribed_comment_area(config,thread_uuid,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,renderers,opts){
var comment_thread = frontend.db.hooks.use_block(thread_uuid);
var comment_uuids = frontend.db.hooks.use_children(thread_uuid);
if(cljs.core.truth_(comment_thread)){
return frontend.components.block.comments.comments_area_view(config,comment_thread,comment_uuids,false,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,renderers,opts);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$subscribed_comment_area__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48813 = cljs.core.first(args__31746__auto__);
var G__48814 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48813,G__48814) : io.factorhouse.hsx.core.obj_get.call(null,G__48813,G__48814));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"subscribed-comment-area","subscribed-comment-area",-1986253298,null),args__31746__auto__),frontend$components$block$subscribed_comment_area,args__31746__auto__,null);
}
};
var frontend$components$block$subscribed_comment_area = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51224__i = 0, G__51224__a = new Array(arguments.length -  0);
while (G__51224__i < G__51224__a.length) {G__51224__a[G__51224__i] = arguments[G__51224__i + 0]; ++G__51224__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51224__a,0,null);
} 
return frontend$components$block$subscribed_comment_area__delegate.call(this,args__31746__auto__);};
frontend$components$block$subscribed_comment_area.cljs$lang$maxFixedArity = 0;
frontend$components$block$subscribed_comment_area.cljs$lang$applyTo = (function (arglist__51225){
var args__31746__auto__ = cljs.core.seq(arglist__51225);
return frontend$components$block$subscribed_comment_area__delegate(args__31746__auto__);
});
frontend$components$block$subscribed_comment_area.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$subscribed_comment_area__delegate;
return frontend$components$block$subscribed_comment_area;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48815 = comp__31745__auto__;
var G__48816 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48815,G__48816) : io.factorhouse.hsx.core.react_memo.call(null,G__48815,G__48816));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"subscribed-comment-area");

return comp__31745__auto__;
})();
frontend.components.block.block_comment_thread_button = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_comment_thread_button(block_uuid){
var thread_uuids = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-comment-threads","block-comment-threads",-345012801),block_uuid], null));
var temp__5825__auto__ = cljs.core.first(thread_uuids);
if(cljs.core.truth_(temp__5825__auto__)){
var thread_uuid = temp__5825__auto__;
return frontend.components.block.subscribed_comment_thread(thread_uuid,(function (comment_thread){
var G__48817 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996),"ls-block-comment-thread-button",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","label","block.comments/label",178653285)], 0)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","label","block.comments/label",178653285)], 0)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.components.block.open_comment_thread_BANG_(block_uuid,comment_thread);
})], null);
var G__48818 = logseq.shui.ui.tabler_icon("message-circle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__48817,G__48818) : logseq.shui.ui.button.call(null,G__48817,G__48818));
}));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_comment_thread_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48819 = cljs.core.first(args__31746__auto__);
var G__48820 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48819,G__48820) : io.factorhouse.hsx.core.obj_get.call(null,G__48819,G__48820));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-comment-thread-button","block-comment-thread-button",-1858825943,null),args__31746__auto__),frontend$components$block$block_comment_thread_button,args__31746__auto__,null);
}
};
var frontend$components$block$block_comment_thread_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51230__i = 0, G__51230__a = new Array(arguments.length -  0);
while (G__51230__i < G__51230__a.length) {G__51230__a[G__51230__i] = arguments[G__51230__i + 0]; ++G__51230__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51230__a,0,null);
} 
return frontend$components$block$block_comment_thread_button__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_comment_thread_button.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_comment_thread_button.cljs$lang$applyTo = (function (arglist__51231){
var args__31746__auto__ = cljs.core.seq(arglist__51231);
return frontend$components$block$block_comment_thread_button__delegate(args__31746__auto__);
});
frontend$components$block$block_comment_thread_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_comment_thread_button__delegate;
return frontend$components$block$block_comment_thread_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48821 = comp__31745__auto__;
var G__48822 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48821,G__48822) : io.factorhouse.hsx.core.react_memo.call(null,G__48821,G__48822));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-comment-thread-button");

return comp__31745__auto__;
})();
frontend.components.block.editing_user_avatar = (function frontend$components$block$editing_user_avatar(p__48823){
var map__48824 = p__48823;
var map__48824__$1 = cljs.core.__destructure_map(map__48824);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48824__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48824__$1,new cljs.core.Keyword("user","uuid","user/uuid",2146253734));
var user_name = (function (){var or__5142__auto__ = name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return uuid;
}
})();
if(cljs.core.truth_(frontend.components.avatar.initials.cljs$core$IFn$_invoke$arity$1(user_name))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.block-editing-avatar-wrap","span.block-editing-avatar-wrap",-1412328392),frontend.components.avatar.user_avatar(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-editing-avatar w-4 h-4 flex-none",new cljs.core.Keyword(null,"title","title",636505583),user_name,new cljs.core.Keyword(null,"name","name",1843675177),user_name,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid,new cljs.core.Keyword(null,"fallback-props","fallback-props",722648746),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(9)], null)], null)], null))], null);
} else {
return null;
}
});
/**
 * Replace the bullet with a node icon. In Library, pages only show their own
 * icon or a tag icon — the default page icon stays a bullet.
 */
frontend.components.block.block_control_with_icon_QMARK_ = (function frontend$components$block$block_control_with_icon_QMARK_(block,config,icon,link_QMARK_){
var and__5140__auto__ = (!((icon == null)));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"hide-block-icon?","hide-block-icon?",-1943840601).cljs$core$IFn$_invoke$arity$1(config));
if(and__5140__auto____$1){
var or__5142__auto__ = (function (){var and__5140__auto____$2 = frontend.util.entity.page_QMARK_(block);
if(cljs.core.truth_(and__5140__auto____$2)){
return cljs.core.not(new cljs.core.Keyword(null,"library?","library?",1697356991).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5140__auto____$2;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = link_QMARK_;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = cljs.core.some(new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pdf",new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(block));
}
}
}
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
frontend.components.block.block_control = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_control(config,block,p__48826){
var map__48827 = p__48826;
var map__48827__$1 = cljs.core.__destructure_map(map__48827);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var bottom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628));
var has_children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"has-children?","has-children?",1908432520));
var top_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var _STAR_control_show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"*control-show?","*control-show?",-2136402257));
var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48827__$1,new cljs.core.Keyword(null,"edit?","edit?",-842131310));
var _STAR_bullet_dragging_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var doc_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","mode?","document/mode?",-994203479)], null));
var vec__48828 = logseq.shui.hooks.use_atom(_STAR_control_show_QMARK_);
var control_show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48828,(0),null);
var editing_user = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","editing-users-by-block","rtc/editing-users-by-block",-1404947660),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))], null));
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var container_id = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
var empty_content_QMARK_ = frontend.components.block.block_content_empty_QMARK_(block);
var fold_button_right_QMARK_ = frontend.state.use_enable_fold_button_right_QMARK_();
var own_number_list_QMARK_ = new cljs.core.Keyword(null,"own-order-number-list?","own-order-number-list?",2048042976).cljs$core$IFn$_invoke$arity$1(config);
var order_list_QMARK_ = cljs.core.boolean$(own_number_list_QMARK_);
var order_list_idx = new cljs.core.Keyword(null,"own-order-list-index","own-order-list-index",2051635079).cljs$core$IFn$_invoke$arity$1(config);
var page_title_QMARK_ = new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config);
var collapsable_page_title_QMARK_ = (function (){var or__5142__auto__ = page_title_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"collapsable-page-title?","collapsable-page-title?",517261768).cljs$core$IFn$_invoke$arity$1(config);
}
})();
var collapsable_QMARK_ = (function (){var and__5140__auto__ = cljs.core.not(frontend.util.entity.leaf_property_value_QMARK_(block));
if(and__5140__auto__){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(uuid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),true,new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"ignore-children?","ignore-children?",1993539421),page_title_QMARK_,new cljs.core.Keyword(null,"page-title?","page-title?",534381078),collapsable_page_title_QMARK_], null));
} else {
return and__5140__auto__;
}
})();
var link_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(config));
var heading = frontend.components.block.block_heading_level(block,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config));
var icon_size = frontend.components.block.block_control_icon_size(block,config,collapsed_QMARK_);
var icon = frontend.components.icon.get_node_icon_cp(block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),icon_size,new cljs.core.Keyword(null,"color?","color?",-1891974356),true,new cljs.core.Keyword(null,"link?","link?",-1241171248),link_QMARK_], null));
var with_icon_QMARK_ = frontend.components.block.block_control_with_icon_QMARK_(block,config,icon,link_QMARK_);
var movable_QMARK_ = (!(frontend.components.block.comments_model.comment_block_QMARK_(block)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-control-wrap.flex.flex-row.items-center.h-6","div.block-control-wrap.flex.flex-row.items-center.h-6",446538750),(function (){var G__48833 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-has-children","data-has-children",440100735),cljs.core.boolean$(has_children_QMARK_),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"is-order-list","is-order-list",493359915),order_list_QMARK_,new cljs.core.Keyword(null,"is-with-icon","is-with-icon",1801728303),with_icon_QMARK_,new cljs.core.Keyword(null,"bullet-closed","bullet-closed",1327473821),collapsed_QMARK_,new cljs.core.Keyword(null,"bullet-hidden","bullet-hidden",-1622280410),new cljs.core.Keyword(null,"hide-bullet?","hide-bullet?",-990541419).cljs$core$IFn$_invoke$arity$1(config)], null)], null))], null);
if(cljs.core.truth_(heading)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__48833,new cljs.core.Keyword(null,"data-heading","data-heading",525742377),heading,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["--ls-block-icon-size",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_size)+"px")], null)], 0));
} else {
return G__48833;
}
})(),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(page_title_QMARK_);
if(and__5140__auto__){
return editing_user;
} else {
return and__5140__auto__;
}
})())?frontend.components.block.editing_user_avatar(editing_user):null),(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = cljs.core.not(fold_button_right_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = collapsable_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return collapsed_QMARK_;
}
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block-control","a.block-control",1414411950),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"control-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
frontend.util.stop(event);

frontend.state.clear_edit_BANG_();

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","container-id","editor/container-id",1915616583),container_id);

promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(ref_QMARK_)?frontend.state.toggle_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$2(uuid,container_id):(cljs.core.truth_(collapsed_QMARK_)?frontend.handler.editor.expand_block_BANG_(uuid):frontend.handler.editor.collapse_block_BANG_.cljs$core$IFn$_invoke$arity$1(uuid)))),(function (___21901__auto__){
return promesa.protocols._promise(frontend.mobile.haptics.haptics.cljs$core$IFn$_invoke$arity$0());
}));
}));

if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.state.developer_mode_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return event.metaKey;
} else {
return and__5140__auto__;
}
})())){
return console.debug("[block config]==",config);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = control_show_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return collapsable_QMARK_;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto____$1 = order_list_QMARK_;
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = frontend.config.publishing_QMARK_;
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
return frontend.util.mobile_QMARK_();
}
}
} else {
return and__5140__auto__;
}
}
})())?"control-show cursor-pointer":"control-hide")], null),frontend.ui.rotating_arrow(collapsed_QMARK_)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-bullet?","hide-bullet?",-990541419).cljs$core$IFn$_invoke$arity$1(config))?null:(function (){var bullet = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.bullet-link-wrap","a.bullet-link-wrap",1602419423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__48825_SHARP_){
return frontend.components.block.bullet_on_click(p1__48825_SHARP_,block,uuid,config);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet-container.cursor","span.bullet-container.cursor",-1172876867),(function (){var G__48838 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"dot-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),new cljs.core.Keyword(null,"blockid","blockid",-664467760),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(collapsed_QMARK_)?"bullet-closed":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(collapsed_QMARK_);
} else {
return and__5140__auto__;
}
})())?" hide-inner-bullet":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((order_list_QMARK_)?" as-order-list typed-list":null)))], null);
if(((movable_QMARK_) && (cljs.core.not(frontend.util.mobile_QMARK_())))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__48838,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (event){
cljs.core.reset_BANG_(_STAR_bullet_dragging_QMARK_,true);

frontend.util.stop_propagation(event);

return frontend.components.block.on_drag_start(event,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})(),block_id);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (_e){
return cljs.core.reset_BANG_(_STAR_bullet_dragging_QMARK_,false);
})], 0));
} else {
return G__48838;
}
})(),(cljs.core.truth_(with_icon_QMARK_)?icon:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet","span.bullet",1911638461),(function (){var G__48849 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blockid","blockid",-664467760),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))], null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48849,new cljs.core.Keyword(null,"class","class",-2030961996),"selected");
} else {
return G__48849;
}
})(),((order_list_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(order_list_idx)+".")], null):null)], null))], null)], null);
var bullet_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("ui","show-empty-bullets?","ui/show-empty-bullets?",1453722088).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = collapsed_QMARK_;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = collapsable_QMARK_;
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return (((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)) - new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block)) < (500));
}
}
}
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(doc_mode_QMARK_);
} else {
return and__5140__auto__;
}
})())?bullet:(cljs.core.truth_((function (){var or__5142__auto__ = ((empty_content_QMARK_) && (((cljs.core.not(edit_QMARK_)) && (((cljs.core.not(top_QMARK_)) && (((cljs.core.not(bottom_QMARK_)) && (((cljs.core.not(frontend.util.react(_STAR_control_show_QMARK_))) && (cljs.core.not(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block))))))))))));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = doc_mode_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(collapsed_QMARK_)) && (cljs.core.not(frontend.util.react(_STAR_control_show_QMARK_))));
} else {
return and__5140__auto__;
}
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet-container","span.bullet-container",-1847146553)], null):bullet
));
if(cljs.core.truth_(cljs.core.deref(_STAR_bullet_dragging_QMARK_))){
return bullet_SINGLEQUOTE_;
} else {
return frontend.ui.tooltip(bullet_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.p-2","div.flex.flex-col.gap-1.p-2",1834455748),(function (){var temp__5825__auto__ = new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var created_by = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(created_by)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","created-label","block/created-label",1630289650),frontend.date.int__GT_local_time_2(new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block))], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","last-edited-label","block/last-edited-label",167263356),frontend.date.int__GT_local_time_2(new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(block))], 0))], null)], null));
}
})())], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_control__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48889 = cljs.core.first(args__31746__auto__);
var G__48890 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48889,G__48890) : io.factorhouse.hsx.core.obj_get.call(null,G__48889,G__48890));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"block-control","block-control",-1724416832,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$block$block_control,args__31746__auto__,null);
}
};
var frontend$components$block$block_control = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51246__i = 0, G__51246__a = new Array(arguments.length -  0);
while (G__51246__i < G__51246__a.length) {G__51246__a[G__51246__i] = arguments[G__51246__i + 0]; ++G__51246__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51246__a,0,null);
} 
return frontend$components$block$block_control__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_control.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_control.cljs$lang$applyTo = (function (arglist__51247){
var args__31746__auto__ = cljs.core.seq(arglist__51247);
return frontend$components$block$block_control__delegate(args__31746__auto__);
});
frontend$components$block$block_control.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_control__delegate;
return frontend$components$block$block_control;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48895 = comp__31745__auto__;
var G__48896 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48895,G__48896) : io.factorhouse.hsx.core.react_memo.call(null,G__48895,G__48896));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-control");

return comp__31745__auto__;
})();
/**
 * Re-validate URL property values when the title changes so the error icon updates.
 */
frontend.components.block.url_property_validation_effect_deps = (function frontend$components$block$url_property_validation_effect_deps(block){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(function (){var G__48902 = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block);
if((G__48902 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__48902);
}
})(),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)], null);
});
frontend.components.block.block_control_with_children = (function frontend$components$block$block_control_with_children(config,block,opts,child_uuids){
var collapsed_QMARK_ = new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(config);
var has_children_QMARK_ = ((cljs.core.not(frontend.util.entity.leaf_property_value_QMARK_(block))) && (cljs.core.boolean$((cljs.core.truth_(collapsed_QMARK_)?new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725).cljs$core$IFn$_invoke$arity$1(block):cljs.core.seq(child_uuids)))));
var block_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725),has_children_QMARK_);
return frontend.components.block.block_control(config,block_SINGLEQUOTE_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"has-children?","has-children?",1908432520),has_children_QMARK_));
});
frontend.components.block.subscribed_block_control = (function (){var render_fn__31744__auto__ = (function frontend$components$block$subscribed_block_control(config,block,opts){
return frontend.components.block.with_library_child_uuids(config,new cljs.core.Keyword(null,"child-uuids","child-uuids",1901853269).cljs$core$IFn$_invoke$arity$1(opts),(function (visible_uuids){
return frontend.components.block.block_control_with_children(config,block,opts,visible_uuids);
}));
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$subscribed_block_control__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48941 = cljs.core.first(args__31746__auto__);
var G__48942 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48941,G__48942) : io.factorhouse.hsx.core.obj_get.call(null,G__48941,G__48942));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"subscribed-block-control","subscribed-block-control",1422159475,null),args__31746__auto__),frontend$components$block$subscribed_block_control,args__31746__auto__,null);
}
};
var frontend$components$block$subscribed_block_control = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51250__i = 0, G__51250__a = new Array(arguments.length -  0);
while (G__51250__i < G__51250__a.length) {G__51250__a[G__51250__i] = arguments[G__51250__i + 0]; ++G__51250__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51250__a,0,null);
} 
return frontend$components$block$subscribed_block_control__delegate.call(this,args__31746__auto__);};
frontend$components$block$subscribed_block_control.cljs$lang$maxFixedArity = 0;
frontend$components$block$subscribed_block_control.cljs$lang$applyTo = (function (arglist__51251){
var args__31746__auto__ = cljs.core.seq(arglist__51251);
return frontend$components$block$subscribed_block_control__delegate(args__31746__auto__);
});
frontend$components$block$subscribed_block_control.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$subscribed_block_control__delegate;
return frontend$components$block$subscribed_block_control;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48956 = comp__31745__auto__;
var G__48957 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48956,G__48957) : io.factorhouse.hsx.core.react_memo.call(null,G__48956,G__48957));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"subscribed-block-control");

return comp__31745__auto__;
})();
frontend.components.block.dnd_separator = (function (){var render_fn__31744__auto__ = (function frontend$components$block$dnd_separator(move_to){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dnd-separator.absolute","div.dnd-separator.absolute",20710081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(function (){var G__48967 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"nested","nested",18943849)))?(48):(20));
if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
return (G__48967 - (20));
} else {
return G__48967;
}
})(),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3)], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$dnd_separator__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48971 = cljs.core.first(args__31746__auto__);
var G__48972 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48971,G__48972) : io.factorhouse.hsx.core.obj_get.call(null,G__48971,G__48972));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"dnd-separator","dnd-separator",940832087,null),args__31746__auto__),frontend$components$block$dnd_separator,args__31746__auto__,null);
}
};
var frontend$components$block$dnd_separator = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51253__i = 0, G__51253__a = new Array(arguments.length -  0);
while (G__51253__i < G__51253__a.length) {G__51253__a[G__51253__i] = arguments[G__51253__i + 0]; ++G__51253__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51253__a,0,null);
} 
return frontend$components$block$dnd_separator__delegate.call(this,args__31746__auto__);};
frontend$components$block$dnd_separator.cljs$lang$maxFixedArity = 0;
frontend$components$block$dnd_separator.cljs$lang$applyTo = (function (arglist__51255){
var args__31746__auto__ = cljs.core.seq(arglist__51255);
return frontend$components$block$dnd_separator__delegate(args__31746__auto__);
});
frontend$components$block$dnd_separator.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$dnd_separator__delegate;
return frontend$components$block$dnd_separator;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48977 = comp__31745__auto__;
var G__48978 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48977,G__48978) : io.factorhouse.hsx.core.react_memo.call(null,G__48977,G__48978));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"dnd-separator");

return comp__31745__auto__;
})();
frontend.components.block.list_checkbox = (function frontend$components$block$list_checkbox(config,checked_QMARK_){
return frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(6)], null),new cljs.core.Keyword(null,"value","value",305978217),checked_QMARK_,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
var target = event.target;
var block = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
var item_content = target.nextSibling.data;
return frontend.handler.editor.toggle_list_checkbox(block,item_content);
})], null));
});
frontend.components.block.ast_displayed_math_formula = (function frontend$components$block$ast_displayed_math_formula(ast){
return cljs.core.some((function (form){
if(((cljs.core.vector_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Displayed_Math",cljs.core.first(form))))){
return cljs.core.not_empty(clojure.string.trim(cljs.core.second(form)));
} else {
return null;
}
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,ast));
});
frontend.components.block.page_ref_math_cp = (function frontend$components$block$page_ref_math_cp(formula){
return frontend.extensions.latex.latex(formula,false,true);
});
frontend.components.block.text_block_title = (function (){var render_fn__31744__auto__ = (function frontend$components$block$text_block_title(config,block){
var format = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
var block__$1 = ((cljs.core.not(new cljs.core.Keyword("block.temp","ast-title","block.temp/ast-title",-940352067).cljs$core$IFn$_invoke$arity$1(block)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$3(cljs.core.uuid,format,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))], 0)):block);
var block_ast_title = new cljs.core.Keyword("block.temp","ast-title","block.temp/ast-title",-940352067).cljs$core$IFn$_invoke$arity$1(block__$1);
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"block","block",664686210),block__$1);
var level = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config__$1);
var block_ref_QMARK_ = new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853).cljs$core$IFn$_invoke$arity$1(config__$1);
var block_type = (function (){var or__5142__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("logseq.property","ls-type","logseq.property/ls-type",326979345)) : frontend.handler.property.util.lookup.call(null,block__$1,new cljs.core.Keyword("logseq.property","ls-type","logseq.property/ls-type",326979345))));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var heading = frontend.components.block.block_heading_level(block__$1,level);
var video_title_QMARK_ = frontend.components.block.video.contains_video_macro_QMARK_(block_ast_title);
var elem = ((video_title_QMARK_)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"div.block-title-wrap.has-video-embed"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(heading)?".as-heading":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(block_ref_QMARK_)?".as-inline":null)))):(cljs.core.truth_(heading)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"h"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)+".block-title-wrap.as-heading"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(block_ref_QMARK_)?".as-inline":null)))):new cljs.core.Keyword(null,"span.block-title-wrap","span.block-title-wrap",547365639)
));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-hl-type","data-hl-type",890635169),(frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("logseq.property.pdf","hl-type","logseq.property.pdf/hl-type",-998437832)) : frontend.handler.property.util.lookup.call(null,block__$1,new cljs.core.Keyword("logseq.property.pdf","hl-type","logseq.property.pdf/hl-type",-998437832)))], null)], 0)),(function (){var area_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area","area",472007256),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("logseq.property.pdf","hl-type","logseq.property.pdf/hl-type",-998437832)) : frontend.handler.property.util.lookup.call(null,block__$1,new cljs.core.Keyword("logseq.property.pdf","hl-type","logseq.property.pdf/hl-type",-998437832)))));
var hl_ref = (function (){
if(cljs.core.not((function (){var fexpr__49033 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null);
return (fexpr__49033.cljs$core$IFn$_invoke$arity$1 ? fexpr__49033.cljs$core$IFn$_invoke$arity$1(block_type) : fexpr__49033.call(null,block_type));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prefix-link","div.prefix-link",1572303303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
var target = e.target;
var G__49039 = block_type;
var G__49039__$1 = (((G__49039 instanceof cljs.core.Keyword))?G__49039.fqn:null);
switch (G__49039__$1) {
case "annotation":
if(cljs.core.truth_((function (){var and__5140__auto__ = area_QMARK_;
if(and__5140__auto__){
return target.classList.contains("blank");
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword(null,"actions","actions",-812656882);
} else {
frontend.extensions.pdf.assets.open_block_ref_BANG_(block__$1);

return frontend.util.stop(e);
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hl-page","span.hl-page",-1375814803),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.forbid-edit","strong.forbid-edit",1321731345),(""+"P"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = (frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("logseq.property.pdf","hl-page","logseq.property.pdf/hl-page",-753284596)) : frontend.handler.property.util.lookup.call(null,block__$1,new cljs.core.Keyword("logseq.property.pdf","hl-page","logseq.property.pdf/hl-page",-753284596)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "?";
}
})()))], null)], null),(cljs.core.truth_((function (){var and__5140__auto__ = area_QMARK_;
if(and__5140__auto__){
return new cljs.core.Keyword("logseq.property.pdf","hl-image","logseq.property.pdf/hl-image",137767009).cljs$core$IFn$_invoke$arity$1(block__$1);
} else {
return and__5140__auto__;
}
})())?frontend.extensions.pdf.assets.area_display(block__$1):null)], null);
} else {
return null;
}
});
return frontend.components.block.remove_nils(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl_ref()], null),(function (){var config_SINGLEQUOTE_ = (function (){var G__49062 = config__$1;
var G__49062__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"page-ref?","page-ref?",677685143).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(block_ast_title))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.ffirst(block_ast_title))));
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49062,new cljs.core.Keyword(null,"node-ref-link-only?","node-ref-link-only?",-2027015692),true):G__49062);
if(cljs.core.integer_QMARK_(heading)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49062__$1,new cljs.core.Keyword(null,"parent-heading","parent-heading",-1744367606),heading);
} else {
return G__49062__$1;
}
})();
if(video_title_QMARK_){
return frontend.components.block.video_inline_segments_cp(config_SINGLEQUOTE_,block_ast_title);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"page-ref?","page-ref?",677685143).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.empty_QMARK_(block_ast_title);
} else {
return and__5140__auto__;
}
})())){
var temp__5823__auto__ = frontend.components.block.ast_displayed_math_formula(new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035).cljs$core$IFn$_invoke$arity$1(block__$1));
if(cljs.core.truth_(temp__5823__auto__)){
var formula = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.page_ref_math_cp(formula)], null);
} else {
return (frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config_SINGLEQUOTE_,block_ast_title) : frontend.components.block.map_inline.call(null,config_SINGLEQUOTE_,block_ast_title));
}
} else {
return (frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config_SINGLEQUOTE_,block_ast_title) : frontend.components.block.map_inline.call(null,config_SINGLEQUOTE_,block_ast_title));

}
}
})()));
})());
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$text_block_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__49067 = cljs.core.first(args__31746__auto__);
var G__49068 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49067,G__49068) : io.factorhouse.hsx.core.obj_get.call(null,G__49067,G__49068));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"text-block-title","text-block-title",-260640817,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$block$text_block_title,args__31746__auto__,null);
}
};
var frontend$components$block$text_block_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51265__i = 0, G__51265__a = new Array(arguments.length -  0);
while (G__51265__i < G__51265__a.length) {G__51265__a[G__51265__i] = arguments[G__51265__i + 0]; ++G__51265__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51265__a,0,null);
} 
return frontend$components$block$text_block_title__delegate.call(this,args__31746__auto__);};
frontend$components$block$text_block_title.cljs$lang$maxFixedArity = 0;
frontend$components$block$text_block_title.cljs$lang$applyTo = (function (arglist__51266){
var args__31746__auto__ = cljs.core.seq(arglist__51266);
return frontend$components$block$text_block_title__delegate(args__31746__auto__);
});
frontend$components$block$text_block_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$text_block_title__delegate;
return frontend$components$block$text_block_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__49073 = comp__31745__auto__;
var G__49074 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49073,G__49074) : io.factorhouse.hsx.core.react_memo.call(null,G__49073,G__49074));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"text-block-title");

return comp__31745__auto__;
})();
frontend.components.block.block_title_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_title_aux(config,block,p__49080){
var map__49082 = p__49080;
var map__49082__$1 = cljs.core.__destructure_map(map__49082);
var query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49082__$1,new cljs.core.Keyword(null,"query?","query?",1736700454));
var _STAR_show_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49082__$1,new cljs.core.Keyword(null,"*show-query?","*show-query?",279819510));
var vec__49084 = logseq.shui.hooks.use_state(false);
var hover_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49084,(0),null);
var set_hover_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49084,(1),null);
var blank_QMARK_ = clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
var opacity = (cljs.core.truth_(hover_QMARK_)?"opacity-100":"opacity-0");
var query = new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block);
var advanced_query_QMARK_ = (function (){var and__5140__auto__ = query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(query));
} else {
return and__5140__auto__;
}
})();
var show_query_QMARK_ = (function (){var and__5140__auto__ = _STAR_show_query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(_STAR_show_query_QMARK_);
} else {
return and__5140__auto__;
}
})();
var vec__49088 = logseq.shui.hooks.use_state(null);
var property_validation_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088,(0),null);
var set_property_validation_message_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088,(1),null);
var query_setting = (cljs.core.truth_(query_QMARK_)?frontend.ui.tooltip((function (){var G__49112 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"ls-query-setting ls-small-icon text-muted-foreground ml-2 w-6 h-6 transition-opacity ease-in duration-300 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(_STAR_show_query_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_show_query_QMARK_,cljs.core.not);
} else {
return null;
}
})], null);
var G__49113 = frontend.ui.icon("settings");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__49112,G__49113) : logseq.shui.ui.button.call(null,G__49112,G__49113));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-75","div.opacity-75",588240867),(cljs.core.truth_(show_query_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","hide-query","block/hide-query",-938772227)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","set-query","block/set-query",-1309099385)], 0)))], null)):null);
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5823__auto___51270 = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5823__auto___51270)){
var property_51271 = temp__5823__auto___51270;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property_51271))){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","validate-property-value","thread-api/validate-property-value",486354589),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),property_51271,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null)], 0))),(function (messages){
return promesa.protocols._promise((function (){var G__49128 = cljs.core.first(messages);
return (set_property_validation_message_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_property_validation_message_BANG_.cljs$core$IFn$_invoke$arity$1(G__49128) : set_property_validation_message_BANG_.call(null,G__49128));
})());
}));
}));
} else {
(set_property_validation_message_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_property_validation_message_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_property_validation_message_BANG_.call(null,null));
}
} else {
(set_property_validation_message_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_property_validation_message_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_property_validation_message_BANG_.call(null,null));
}

return null;
}),frontend.components.block.url_property_validation_effect_deps(block));

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(query_QMARK_)?"inline-flex":"w-full inline"),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return (set_hover_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_hover_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_hover_QMARK_.call(null,true));
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return (set_hover_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_hover_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_hover_QMARK_.call(null,false));
})], null),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"on-title-click","on-title-click",-1700145163).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5825__auto__)){
var on_title_click = temp__5825__auto__;
if(cljs.core.fn_QMARK_(on_title_click)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_title_click], null);
} else {
return null;
}
} else {
return null;
}
})()], 0)),(cljs.core.truth_((function (){var and__5140__auto__ = query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = blank_QMARK_;
if(and__5140__auto____$1){
var or__5142__auto__ = advanced_query_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return show_query_QMARK_;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-75.hover:opacity-100","span.opacity-75.hover:opacity-100",-67854886),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","untitled-query","block/untitled-query",-1852289495)], 0))], null):(cljs.core.truth_((function (){var and__5140__auto__ = query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return blank_QMARK_;
} else {
return and__5140__auto__;
}
})())?frontend.components.query.builder.builder(query,cljs.core.PersistentArrayMap.EMPTY):frontend.components.block.text_block_title(config,block)
)),query_setting,(cljs.core.truth_(frontend.components.block.cards_block_QMARK_(block))?frontend.ui.tooltip((function (){var G__49141 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"!px-1 text-xs text-muted-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null));
})], null);
var G__49142 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","practice","block/practice",-1548715381)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__49141,G__49142) : logseq.shui.ui.button.call(null,G__49141,G__49142));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","practice-cards","block/practice-cards",-661396316)], 0))], null)):null),(function (){var temp__5825__auto__ = property_validation_message;
if(cljs.core.truth_(temp__5825__auto__)){
var message = temp__5825__auto__;
return frontend.ui.tooltip((function (){var G__49148 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"ls-type-warning ls-small-icon px-1 !py-0 h-4 ml-1"], null);
var G__49149 = frontend.ui.icon("alert-triangle");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__49148,G__49149) : logseq.shui.ui.button.call(null,G__49148,G__49149));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-75","div.opacity-75",588240867),message], null));
} else {
return null;
}
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_title_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__49152 = cljs.core.first(args__31746__auto__);
var G__49153 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49152,G__49153) : io.factorhouse.hsx.core.obj_get.call(null,G__49152,G__49153));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-title-aux","block-title-aux",-1381994305,null),args__31746__auto__),frontend$components$block$block_title_aux,args__31746__auto__,null);
}
};
var frontend$components$block$block_title_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51275__i = 0, G__51275__a = new Array(arguments.length -  0);
while (G__51275__i < G__51275__a.length) {G__51275__a[G__51275__i] = arguments[G__51275__i + 0]; ++G__51275__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51275__a,0,null);
} 
return frontend$components$block$block_title_aux__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_title_aux.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_title_aux.cljs$lang$applyTo = (function (arglist__51276){
var args__31746__auto__ = cljs.core.seq(arglist__51276);
return frontend$components$block$block_title_aux__delegate(args__31746__auto__);
});
frontend$components$block$block_title_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_title_aux__delegate;
return frontend$components$block$block_title_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__49159 = comp__31745__auto__;
var G__49160 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49159,G__49160) : io.factorhouse.hsx.core.react_memo.call(null,G__49159,G__49160));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-title-aux");

return comp__31745__auto__;
})();
frontend.components.block.block_title = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_title(config,block,p__49167){
var map__49168 = p__49167;
var map__49168__$1 = cljs.core.__destructure_map(map__49168);
var _STAR_show_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49168__$1,new cljs.core.Keyword(null,"*show-query?","*show-query?",279819510));
var node_display_type = new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block);
var display_title = new cljs.core.Keyword(null,"display-title","display-title",773425144).cljs$core$IFn$_invoke$arity$1(config);
var query_QMARK_ = frontend.components.block.query_block_QMARK_(block);
if(cljs.core.truth_(display_title)){
return frontend.components.block.text_block_title(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"display-title","display-title",773425144)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","title","block/title",710445684),display_title),new cljs.core.Keyword("block.temp","ast-title","block.temp/ast-title",-940352067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035)], 0)));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.entity.page_QMARK_(block);
if(cljs.core.truth_(and__5140__auto____$1)){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-75","div.opacity-75",588240867),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","untitled","ui/untitled",301271588)], 0))], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.asset_QMARK_.call(null,block));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pdf","pdf",1586765132),(function (){var G__49181 = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(block);
var G__49181__$1 = (((G__49181 == null))?null:clojure.string.lower_case(G__49181));
if((G__49181__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__49181__$1);
}
})());
} else {
return and__5140__auto__;
}
})())){
return frontend.components.block.asset_cp(config,block);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw-title?","raw-title?",1309209409).cljs$core$IFn$_invoke$arity$1(config))){
return frontend.components.block.text_block_title(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"raw-title?","raw-title?",1309209409)),block);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),node_display_type)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.w-full","div.flex.flex-1.w-full",904254536),(function (){var G__49185 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),block);
var G__49186 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword("logseq.property.code","lang","logseq.property.code/lang",-857897165).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.components.block.src_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.src_cp.cljs$core$IFn$_invoke$arity$2(G__49185,G__49186) : frontend.components.block.src_cp.call(null,G__49185,G__49186));
})()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"math","math",-2026912803),node_display_type)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"page-ref?","page-ref?",677685143).cljs$core$IFn$_invoke$arity$1(config))){
return frontend.components.block.page_ref_math_cp(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math-block","div.math-block",1675652448),frontend.extensions.latex.latex(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),true,true)], null);
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","query-block?","logseq.property/query-block?",591561444).cljs$core$IFn$_invoke$arity$1(block))){
return frontend.components.query.builder.builder(block,cljs.core.PersistentArrayMap.EMPTY);
} else {
return frontend.components.block.block_title_aux(config,block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query?","query?",1736700454),query_QMARK_,new cljs.core.Keyword(null,"*show-query?","*show-query?",279819510),_STAR_show_query_QMARK_], null));

}
}
}
}
}
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__49191 = cljs.core.first(args__31746__auto__);
var G__49192 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49191,G__49192) : io.factorhouse.hsx.core.obj_get.call(null,G__49191,G__49192));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-title","block-title",-1431790482,null),args__31746__auto__),frontend$components$block$block_title,args__31746__auto__,null);
}
};
var frontend$components$block$block_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51282__i = 0, G__51282__a = new Array(arguments.length -  0);
while (G__51282__i < G__51282__a.length) {G__51282__a[G__51282__i] = arguments[G__51282__i + 0]; ++G__51282__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51282__a,0,null);
} 
return frontend$components$block$block_title__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_title.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_title.cljs$lang$applyTo = (function (arglist__51283){
var args__31746__auto__ = cljs.core.seq(arglist__51283);
return frontend$components$block$block_title__delegate(args__31746__auto__);
});
frontend$components$block$block_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_title__delegate;
return frontend$components$block$block_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__49193 = comp__31745__auto__;
var G__49194 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49193,G__49194) : io.factorhouse.hsx.core.react_memo.call(null,G__49193,G__49194));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-title");

return comp__31745__auto__;
})();
frontend.components.block.db_properties_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$db_properties_cp(config,block,opts){
var initial_container_id = logseq.shui.hooks.use_memo((function (){
var or__5142__auto__ = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_next_container_id();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config)], null));
return frontend.components.property.properties_area(block,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"inline-text","inline-text",910915394),frontend.components.block.inline_text,new cljs.core.Keyword(null,"page-cp","page-cp",1066562595),frontend.components.block.page_cp,new cljs.core.Keyword(null,"block-cp","block-cp",568894835),frontend.components.block.blocks_container,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.state.get_component(new cljs.core.Keyword("editor","box","editor/box",-1921770435)),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return initial_container_id;
}
})()], null),opts], 0)));
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$db_properties_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__49208 = cljs.core.first(args__31746__auto__);
var G__49209 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49208,G__49209) : io.factorhouse.hsx.core.obj_get.call(null,G__49208,G__49209));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"db-properties-cp","db-properties-cp",-532307265,null),args__31746__auto__),frontend$components$block$db_properties_cp,args__31746__auto__,null);
}
};
var frontend$components$block$db_properties_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51285__i = 0, G__51285__a = new Array(arguments.length -  0);
while (G__51285__i < G__51285__a.length) {G__51285__a[G__51285__i] = arguments[G__51285__i + 0]; ++G__51285__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51285__a,0,null);
} 
return frontend$components$block$db_properties_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$db_properties_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$db_properties_cp.cljs$lang$applyTo = (function (arglist__51286){
var args__31746__auto__ = cljs.core.seq(arglist__51286);
return frontend$components$block$db_properties_cp__delegate(args__31746__auto__);
});
frontend$components$block$db_properties_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$db_properties_cp__delegate;
return frontend$components$block$db_properties_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__49215 = comp__31745__auto__;
var G__49216 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49215,G__49216) : io.factorhouse.hsx.core.react_memo.call(null,G__49215,G__49216));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"db-properties-cp");

return comp__31745__auto__;
})();
frontend.components.block.target_forbidden_edit_QMARK_ = (function frontend$components$block$target_forbidden_edit_QMARK_(target){
var or__5142__auto__ = dommy.core.has_class_QMARK_(target,"forbid-edit");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = dommy.core.has_class_QMARK_(target,"bullet");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = dommy.core.has_class_QMARK_(target,"logbook");
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = dommy.core.has_class_QMARK_(target,"markdown-table");
if(or__5142__auto____$3){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = frontend.util.link_QMARK_(target);
if(or__5142__auto____$4){
return or__5142__auto____$4;
} else {
var or__5142__auto____$5 = frontend.util.time_QMARK_(target);
if(or__5142__auto____$5){
return or__5142__auto____$5;
} else {
var or__5142__auto____$6 = frontend.util.input_QMARK_(target);
if(cljs.core.truth_(or__5142__auto____$6)){
return or__5142__auto____$6;
} else {
var or__5142__auto____$7 = frontend.util.audio_QMARK_(target);
if(or__5142__auto____$7){
return or__5142__auto____$7;
} else {
var or__5142__auto____$8 = frontend.util.video_QMARK_(target);
if(or__5142__auto____$8){
return or__5142__auto____$8;
} else {
var or__5142__auto____$9 = frontend.util.details_or_summary_QMARK_(target);
if(cljs.core.truth_(or__5142__auto____$9)){
return or__5142__auto____$9;
} else {
var or__5142__auto____$10 = ((frontend.util.sup_QMARK_(target)) && (dommy.core.has_class_QMARK_(target,"fn")));
if(or__5142__auto____$10){
return or__5142__auto____$10;
} else {
var or__5142__auto____$11 = dommy.core.has_class_QMARK_(target,"image-resize");
if(or__5142__auto____$11){
return or__5142__auto____$11;
} else {
var or__5142__auto____$12 = dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,"a");
if(cljs.core.truth_(or__5142__auto____$12)){
return or__5142__auto____$12;
} else {
var or__5142__auto____$13 = dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,".cloze");
if(cljs.core.truth_(or__5142__auto____$13)){
return or__5142__auto____$13;
} else {
var or__5142__auto____$14 = dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,".cloze-revealed");
if(cljs.core.truth_(or__5142__auto____$14)){
return or__5142__auto____$14;
} else {
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,".query-table");
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
}
}
}
}
}
});
frontend.components.block.comments_area_target_QMARK_ = (function frontend$components$block$comments_area_target_QMARK_(target){
return cljs.core.boolean$(frontend.util.rec_get_node(target,"ls-comments-area"));
});
frontend.components.block.video_embed_target_QMARK_ = (function frontend$components$block$video_embed_target_QMARK_(target){
return cljs.core.boolean$((function (){var or__5142__auto__ = dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,".video-embed-shell");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,".video-embed-frame");
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,".video-embed-resize-handle");
}
}
})());
});
frontend.components.block.caret_range_from_point = (function frontend$components$block$caret_range_from_point(e,block_dom_element){
var temp__5825__auto__ = (function (){var G__49265 = block_dom_element;
var G__49265__$1 = (((G__49265 == null))?null:dommy.utils.__GT_Array(G__49265.getElementsByClassName("block-content-inner")));
if((G__49265__$1 == null)){
return null;
} else {
return cljs.core.first(G__49265__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var doc = (function (){var or__5142__auto__ = frontend.components.block.goog$module$goog$object.get(node,"ownerDocument");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return document;
}
})();
var win = (function (){var or__5142__auto__ = frontend.components.block.goog$module$goog$object.get(doc,"defaultView");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return window;
}
})();
var x = frontend.components.block.goog$module$goog$object.get(e,"clientX");
var y = frontend.components.block.goog$module$goog$object.get(e,"clientY");
var range = ((cljs.core.fn_QMARK_(frontend.components.block.goog$module$goog$object.get(doc,"caretRangeFromPoint")))?doc.caretRangeFromPoint(x,y):((cljs.core.fn_QMARK_(frontend.components.block.goog$module$goog$object.get(doc,"caretPositionFromPoint")))?(function (){var temp__5825__auto____$1 = doc.caretPositionFromPoint(x,y);
if(cljs.core.truth_(temp__5825__auto____$1)){
var pos = temp__5825__auto____$1;
var range = doc.createRange();
range.setStart(frontend.components.block.goog$module$goog$object.get(pos,"offsetNode"),frontend.components.block.goog$module$goog$object.get(pos,"offset"));

range.collapse(true);

return range;
} else {
return null;
}
})():null));
if(cljs.core.truth_(range)){
var selection = win.getSelection();
selection.removeAllRanges();

selection.addRange(range);

return frontend.util.caret_range(node);
} else {
return null;
}
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_block_last_mouse_event !== 'undefined')){
} else {
frontend.components.block._STAR_block_last_mouse_event = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.block.remember_block_pointer_BANG_ = (function frontend$components$block$remember_block_pointer_BANG_(e){
return cljs.core.reset_BANG_(frontend.components.block._STAR_block_last_mouse_event,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-x","client-x",37622273),e.clientX,new cljs.core.Keyword(null,"client-y","client-y",1123764704),e.clientY], null));
});
/**
 * A pointerdown during a scroll is the touch that scrolls on mobile, not a
 *   tap. On desktop it is a click: the page also scrolls by itself (moving a
 *   block scrolls it into view) and the click must still edit.
 */
frontend.components.block.touch_scroll_pointer_down_QMARK_ = (function frontend$components$block$touch_scroll_pointer_down_QMARK_(){
return cljs.core.boolean$((function (){var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return frontend.state.get_state(new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943));
} else {
return and__5140__auto__;
}
})());
});
frontend.components.block.block_content_on_pointer_down = (function frontend$components$block$block_content_on_pointer_down(e,block,block_id,edit_input_id,content,config){
if(frontend.components.block.touch_scroll_pointer_down_QMARK_()){
return null;
} else {
var target = e.target;
var selection_blocks = frontend.state.get_selection_blocks();
var starting_block = frontend.state.get_selection_start_block_or_first();
var mobile_QMARK_ = frontend.util.mobile_QMARK_();
var mobile_selection_QMARK_ = (function (){var and__5140__auto__ = mobile_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(selection_blocks);
} else {
return and__5140__auto__;
}
})();
var block_dom_element = frontend.util.rec_get_node(target,"ls-block");
if(cljs.core.truth_((function (){var and__5140__auto__ = mobile_selection_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(frontend.components.block.comments_area_target_QMARK_(target)));
} else {
return and__5140__auto__;
}
})())){
var ids = cljs.core.set(frontend.state.get_selection_block_ids());
if(cljs.core.contains_QMARK_(ids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
frontend.state.drop_selection_block_BANG_(block_dom_element);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ids))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),false);
} else {
return null;
}
} else {
return frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$1(block_dom_element);
}
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.components.block.comments_area_target_QMARK_(target);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"closed-values?","closed-values?",1147014059).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (cljs.core.count(content) > frontend.state.block_content_max_length(frontend.state.get_current_repo()));
}
}
})())){
return null;
} else {
var target__$1 = frontend.components.block.goog$module$goog$object.get(e,"target");
var button = frontend.components.block.goog$module$goog$object.get(e,"buttons");
var shift_QMARK_ = frontend.components.block.goog$module$goog$object.get(e,"shiftKey");
var meta_QMARK_ = frontend.util.meta_key_QMARK_(e);
var video_embed_QMARK_ = frontend.components.block.video_embed_target_QMARK_(target__$1);
var forbidden_edit_QMARK_ = (function (){var and__5140__auto__ = (!(video_embed_QMARK_));
if(and__5140__auto__){
return frontend.components.block.target_forbidden_edit_QMARK_(target__$1);
} else {
return and__5140__auto__;
}
})();
var get_cursor_range = (function (){
var G__49339 = block_dom_element;
var G__49339__$1 = (((G__49339 == null))?null:dommy.utils.__GT_Array(G__49339.getElementsByClassName("block-content-inner")));
var G__49339__$2 = (((G__49339__$1 == null))?null:cljs.core.first(G__49339__$1));
if((G__49339__$2 == null)){
return null;
} else {
return frontend.util.caret_range(G__49339__$2);
}
});
var mobile_range = (cljs.core.truth_(mobile_QMARK_)?get_cursor_range():null);
if(((cljs.core.not(forbidden_edit_QMARK_)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null),button)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),button)){
frontend.components.block.remember_block_pointer_BANG_(e);

frontend.components.block.selection.set_pointer_down_BANG_();
} else {
}

var temp__5825__auto___51296 = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto___51296)){
var editing_block_51297 = temp__5825__auto___51296;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editing_block_51297),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
} else {
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
}
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = meta_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return shift_QMARK_;
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.empty_QMARK_(selection_blocks)){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_id,block_dom_element,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"append?","append?",123923917),true], null)], 0));
}
} else {
if(cljs.core.truth_(meta_QMARK_)){
frontend.util.stop(e);

if(cljs.core.truth_(cljs.core.some((function (p1__49304_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_dom_element,p1__49304_SHARP_);
}),selection_blocks))){
frontend.state.drop_selection_block_BANG_(block_dom_element);
} else {
frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2(block_dom_element,new cljs.core.Keyword(null,"down","down",1565245570));
}

if(cljs.core.empty_QMARK_(frontend.state.get_selection_blocks())){
return frontend.state.clear_selection_BANG_();
} else {
return frontend.state.set_selection_start_block_BANG_(block_dom_element);
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = shift_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return starting_block;
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(e);

(frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.util.clear_selection_BANG_.call(null));

return frontend.handler.editor.highlight_selection_area_BANG_(block_id,block_dom_element);
} else {
if(cljs.core.truth_(shift_QMARK_)){
(frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.util.clear_selection_BANG_.call(null));

return frontend.state.set_selection_start_block_BANG_(block_dom_element);
} else {
if(video_embed_QMARK_){
frontend.util.stop(e);

var G__49376 = block;
var G__49377 = new cljs.core.Keyword(null,"max","max",61366548);
var G__49378 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config)], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__49376,G__49377,G__49378) : frontend.handler.editor.edit_block_BANG_.call(null,G__49376,G__49377,G__49378));
} else {
var point_cursor_range = (cljs.core.truth_(mobile_QMARK_)?null:frontend.components.block.caret_range_from_point(e,block_dom_element));
if(cljs.core.truth_(mobile_QMARK_)){
} else {
e.preventDefault();
}

frontend.mobile.util.mobile_focus_hidden_input();

(frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));

frontend.handler.editor.format.unhighlight_blocks_BANG_();

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","save-code-editor","editor/save-code-editor",-1356475475)], null))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var cursor_range = (function (){var or__5142__auto__ = point_cursor_range;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(mobile_QMARK_)){
return mobile_range;
} else {
return get_cursor_range();
}
}
})();
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$variadic(edit_input_id,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),block,cursor_range,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-cursor?","move-cursor?",-229137728),false,new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config)], null)], 0));
})()),(function (___21901__auto____$1){
return promesa.protocols._promise(frontend.state.set_selection_start_block_BANG_(block_dom_element));
}));
}));
}));
}

}
}
}
}
} else {
return null;
}
}
}
}
});
frontend.components.block.dnd_separator_wrapper = (function (){var render_fn__31744__auto__ = (function frontend$components$block$dnd_separator_wrapper(_block,block_id,top_QMARK_){
var vec__49397 = logseq.shui.hooks.use_atom(frontend.components.block._STAR_dragging_QMARK_);
var dragging_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49397,(0),null);
var vec__49400 = logseq.shui.hooks.use_atom(frontend.components.block._STAR_drag_to_block);
var drag_to_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49400,(0),null);
var vec__49403 = logseq.shui.hooks.use_atom(frontend.components.block._STAR_move_to);
var move_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49403,(0),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = dragging_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id,drag_to_block);
if(and__5140__auto____$1){
return move_to;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = top_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.not(top_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"top","top",-1856271961))));
}
})())){
return null;
} else {
return frontend.components.block.dnd_separator(move_to);
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$dnd_separator_wrapper__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__49418 = cljs.core.first(args__31746__auto__);
var G__49419 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49418,G__49419) : io.factorhouse.hsx.core.obj_get.call(null,G__49418,G__49419));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"dnd-separator-wrapper","dnd-separator-wrapper",2141895018,null),args__31746__auto__),frontend$components$block$dnd_separator_wrapper,args__31746__auto__,null);
}
};
var frontend$components$block$dnd_separator_wrapper = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51301__i = 0, G__51301__a = new Array(arguments.length -  0);
while (G__51301__i < G__51301__a.length) {G__51301__a[G__51301__i] = arguments[G__51301__i + 0]; ++G__51301__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51301__a,0,null);
} 
return frontend$components$block$dnd_separator_wrapper__delegate.call(this,args__31746__auto__);};
frontend$components$block$dnd_separator_wrapper.cljs$lang$maxFixedArity = 0;
frontend$components$block$dnd_separator_wrapper.cljs$lang$applyTo = (function (arglist__51302){
var args__31746__auto__ = cljs.core.seq(arglist__51302);
return frontend$components$block$dnd_separator_wrapper__delegate(args__31746__auto__);
});
frontend$components$block$dnd_separator_wrapper.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$dnd_separator_wrapper__delegate;
return frontend$components$block$dnd_separator_wrapper;
})()
;
var memo_comp__31747__auto__ = (function (){var G__49422 = comp__31745__auto__;
var G__49423 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49422,G__49423) : io.factorhouse.hsx.core.react_memo.call(null,G__49422,G__49423));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"dnd-separator-wrapper");

return comp__31745__auto__;
})();
frontend.components.block.block_content_inner = (function frontend$components$block$block_content_inner(config,block,body,plugin_slotted_QMARK_,collapsed_QMARK_,block_ref_with_title_QMARK_){
if(cljs.core.truth_(plugin_slotted_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-slotted-body","div.block-slotted-body",-118968467),frontend.components.plugins.hook_block_slot(new cljs.core.Keyword(null,"block-content-slotted","block-content-slotted",-1577364335),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","page","block/page",822314108)))], null);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"math","math",-2026912803),null], null), null),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block))){
return null;
} else {
var title_collapse_enabled_QMARK_ = new cljs.core.Keyword("outliner","block-title-collapse-enabled?","outliner/block-title-collapse-enabled?",1547538161).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(block_ref_with_title_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.seq(body);
if(and__5140__auto____$1){
var or__5142__auto__ = cljs.core.not(title_collapse_enabled_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto____$2 = title_collapse_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto____$2)){
return ((cljs.core.not(collapsed_QMARK_)) || ((!((frontend.format.mldoc.extract_first_query_from_ast(body) == null)))));
} else {
return and__5140__auto____$2;
}
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-body","div.block-body",-1586332448),(function (){var body__$1 = frontend.format.block.trim_break_lines_BANG_(new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035).cljs$core$IFn$_invoke$arity$1(block));
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var raw_content = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "";
}
}
})();
var deprecated_org_quote_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/^\s*#\+BEGIN_QUOTE/i,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_content))));
var config__$1 = ((deprecated_org_quote_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"deprecated-org-quote?","deprecated-org-quote?",1072036106),true):config);
var iter__5628__auto__ = (function frontend$components$block$block_content_inner_$_iter__49458(s__49459){
return (new cljs.core.LazySeq(null,(function (){
var s__49459__$1 = s__49459;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__49459__$1);
if(temp__5825__auto__){
var s__49459__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49459__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__49459__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__49461 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__49460 = (0);
while(true){
if((i__49460 < size__5627__auto__)){
var vec__49472 = cljs.core._nth(c__5626__auto__,i__49460);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49472,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49472,(1),null);
cljs.core.chunk_append(b__49461,(function (){var temp__5825__auto____$1 = (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(config__$1,child) : frontend.components.block.markup_element_cp.call(null,config__$1,child));
if(cljs.core.truth_(temp__5825__auto____$1)){
var block__$1 = temp__5825__auto____$1;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.block_child,block__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null));
} else {
return null;
}
})());

var G__51308 = (i__49460 + (1));
i__49460 = G__51308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49461),frontend$components$block$block_content_inner_$_iter__49458(cljs.core.chunk_rest(s__49459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49461),null);
}
} else {
var vec__49488 = cljs.core.first(s__49459__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49488,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49488,(1),null);
return cljs.core.cons((function (){var temp__5825__auto____$1 = (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(config__$1,child) : frontend.components.block.markup_element_cp.call(null,config__$1,child));
if(cljs.core.truth_(temp__5825__auto____$1)){
var block__$1 = temp__5825__auto____$1;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.block_child,block__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null));
} else {
return null;
}
})(),frontend$components$block$block_content_inner_$_iter__49458(cljs.core.rest(s__49459__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(body__$1));
})()], null);
} else {
return null;
}
}
}
});
frontend.components.block.block_tag = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_tag(block,tag,config,popup_opts){
var _STAR_hover_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_hover_container_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var vec__49509 = logseq.shui.hooks.use_atom(_STAR_hover_QMARK_);
var hover_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49509,(0),null);
var vec__49512 = logseq.shui.hooks.use_atom(_STAR_hover_container_QMARK_);
var _hover_container_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(0),null);
var private_tag_QMARK_ = (function (){var G__49518 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag);
return (logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1(G__49518) : logseq.db.private_tags.call(null,G__49518));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-tag","div.block-tag",1891822125),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"tag-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag))),new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(private_tag_QMARK_)?"private-tag ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(hover_QMARK_)?(cljs.core.truth_(private_tag_QMARK_)?"!px-1":"!pl-0"):null))),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.reset_BANG_(_STAR_hover_container_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.reset_BANG_(_STAR_hover_container_QMARK_,false);
})], null),(cljs.core.truth_(frontend.util.mobile_QMARK_())?frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag?","tag?",1714008252),true,new cljs.core.Keyword(null,"skip-async-load?","skip-async-load?",168412205),true], 0)),tag):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.reset_BANG_(_STAR_hover_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.reset_BANG_(_STAR_hover_QMARK_,false);
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
frontend.util.stop(e);

var G__49533 = e;
var G__49534 = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__49538 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Go to tag",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tag));
})], null);
var G__49539 = (""+"Go to #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag)));
var G__49540 = frontend.ui.dropdown_shortcut("mod+click");
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__49538,G__49539,G__49540) : logseq.shui.ui.dropdown_menu_item.call(null,G__49538,G__49539,G__49540));
})(),(function (){var G__49545 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Open tag in sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.Keyword(null,"page","page",849072397));
})], null);
var G__49546 = "Open in sidebar";
var G__49547 = frontend.ui.dropdown_shortcut("shift+click");
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__49545,G__49546,G__49547) : logseq.shui.ui.dropdown_menu_item.call(null,G__49545,G__49546,G__49547));
})(),(cljs.core.truth_((function (){var G__49551 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag);
return (logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1(G__49551) : logseq.db.private_tags.call(null,G__49551));
})())?null:(function (){var G__49554 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Remove tag",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag));
})], null);
var G__49555 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","remove-tag","block/remove-tag",-1599104843)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__49554,G__49555) : logseq.shui.ui.dropdown_menu_item.call(null,G__49554,G__49555));
})())], null);
});
var G__49535 = popup_opts;
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__49533,G__49534,G__49535) : logseq.shui.ui.popup_show_BANG_.call(null,G__49533,G__49534,G__49535));
})], null),(cljs.core.truth_((function (){var and__5140__auto__ = hover_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(private_tag_QMARK_)) && ((!(frontend.config.publishing_QMARK_))));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.inline-flex.text-muted-foreground","a.inline-flex.text-muted-foreground",1014966700),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","remove-this-tag","block/remove-this-tag",1881803804)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(1),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(2),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(2)], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

return frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag));
})], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(13)], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hash-symbol.select-none.flex","a.hash-symbol.select-none.flex",-103269628),"#"], null)),frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag?","tag?",1714008252),true,new cljs.core.Keyword(null,"skip-async-load?","skip-async-load?",168412205),true,new cljs.core.Keyword(null,"hide-tag-symbol?","hide-tag-symbol?",1083852788),true], 0)),tag)], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_tag__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__49571 = cljs.core.first(args__31746__auto__);
var G__49572 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49571,G__49572) : io.factorhouse.hsx.core.obj_get.call(null,G__49571,G__49572));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-tag","block-tag",1740828935,null),args__31746__auto__),frontend$components$block$block_tag,args__31746__auto__,null);
}
};
var frontend$components$block$block_tag = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51316__i = 0, G__51316__a = new Array(arguments.length -  0);
while (G__51316__i < G__51316__a.length) {G__51316__a[G__51316__i] = arguments[G__51316__i + 0]; ++G__51316__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51316__a,0,null);
} 
return frontend$components$block$block_tag__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_tag.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_tag.cljs$lang$applyTo = (function (arglist__51317){
var args__31746__auto__ = cljs.core.seq(arglist__51317);
return frontend$components$block$block_tag__delegate(args__31746__auto__);
});
frontend$components$block$block_tag.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_tag__delegate;
return frontend$components$block$block_tag;
})()
;
var memo_comp__31747__auto__ = (function (){var G__49575 = comp__31745__auto__;
var G__49576 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49575,G__49576) : io.factorhouse.hsx.core.react_memo.call(null,G__49575,G__49576));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-tag");

return comp__31745__auto__;
})();
/**
 * Tags without inline or hidden tags
 */
frontend.components.block.tags_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$tags_cp(config,block){
if(cljs.core.truth_(new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block))){
var hidden_internal_tags = (function (){var G__49589 = logseq.db.internal_tags;
if(cljs.core.truth_(new cljs.core.Keyword(null,"show-tag-and-property-classes?","show-tag-and-property-classes?",-152227272).cljs$core$IFn$_invoke$arity$1(config))){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__49589,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048),null,new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),null], null), null));
} else {
return G__49589;
}
})();
var block_tags = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (t){
var or__5142__auto__ = (function (){var G__49596 = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block);
var G__49597 = t;
return (logseq.db.inline_tag_QMARK_.cljs$core$IFn$_invoke$arity$2 ? logseq.db.inline_tag_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49596,G__49597) : logseq.db.inline_tag_QMARK_.call(null,G__49596,G__49597));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("logseq.property.class","hide-from-node","logseq.property.class/hide-from-node",-26103727).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core.contains_QMARK_(hidden_internal_tags,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(t));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457),null,new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__5140__auto__;
}
}
}
}
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block));
var popup_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-60"], null)], null);
var tags_count = cljs.core.count(block_tags);
if(cljs.core.seq(block_tags)){
if((tags_count < (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-tags.gap-1","div.block-tags.gap-1",-137665887),(function (){var iter__5628__auto__ = (function frontend$components$block$tags_cp_$_iter__49606(s__49607){
return (new cljs.core.LazySeq(null,(function (){
var s__49607__$1 = s__49607;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__49607__$1);
if(temp__5825__auto__){
var s__49607__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49607__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__49607__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__49609 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__49608 = (0);
while(true){
if((i__49608 < size__5627__auto__)){
var tag = cljs.core._nth(c__5626__auto__,i__49608);
cljs.core.chunk_append(b__49609,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.block_tag,block,tag,config,popup_opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"tag-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag)))], null)));

var G__51321 = (i__49608 + (1));
i__49608 = G__51321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49609),frontend$components$block$tags_cp_$_iter__49606(cljs.core.chunk_rest(s__49607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49609),null);
}
} else {
var tag = cljs.core.first(s__49607__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.block_tag,block,tag,config,popup_opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"tag-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag)))], null)),frontend$components$block$tags_cp_$_iter__49606(cljs.core.rest(s__49607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(block_tags);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-tags.cursor-pointer","div.block-tags.cursor-pointer",1353973896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
var G__49656 = e;
var G__49657 = (function (){
var iter__5628__auto__ = (function frontend$components$block$tags_cp_$_iter__49663(s__49664){
return (new cljs.core.LazySeq(null,(function (){
var s__49664__$1 = s__49664;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__49664__$1);
if(temp__5825__auto__){
var s__49664__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49664__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__49664__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__49666 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__49665 = (0);
while(true){
if((i__49665 < size__5627__auto__)){
var tag = cljs.core._nth(c__5626__auto__,i__49665);
cljs.core.chunk_append(b__49666,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),(cljs.core.truth_((function (){var G__49685 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag);
return (logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1(G__49685) : logseq.db.private_tags.call(null,G__49685));
})())?null:(function (){var G__49689 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","remove-tag","block/remove-tag",-1599104843)], 0)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 text-muted-foreground",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49665,tag,c__5626__auto__,size__5627__auto__,b__49666,s__49664__$2,temp__5825__auto__,G__49656,hidden_internal_tags,block_tags,popup_opts,tags_count){
return (function (){
return frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag));
});})(i__49665,tag,c__5626__auto__,size__5627__auto__,b__49666,s__49664__$2,temp__5825__auto__,G__49656,hidden_internal_tags,block_tags,popup_opts,tags_count))
], null);
var G__49690 = frontend.ui.icon("X",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__49689,G__49690) : logseq.shui.ui.button.call(null,G__49689,G__49690));
})()),frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"tag?","tag?",1714008252),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"skip-async-load?","skip-async-load?",168412205),true,new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true], 0)),tag)], null));

var G__51324 = (i__49665 + (1));
i__49665 = G__51324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49666),frontend$components$block$tags_cp_$_iter__49663(cljs.core.chunk_rest(s__49664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49666),null);
}
} else {
var tag = cljs.core.first(s__49664__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),(cljs.core.truth_((function (){var G__49708 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag);
return (logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1(G__49708) : logseq.db.private_tags.call(null,G__49708));
})())?null:(function (){var G__49711 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","remove-tag","block/remove-tag",-1599104843)], 0)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 text-muted-foreground",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,s__49664__$2,temp__5825__auto__,G__49656,hidden_internal_tags,block_tags,popup_opts,tags_count){
return (function (){
return frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag));
});})(tag,s__49664__$2,temp__5825__auto__,G__49656,hidden_internal_tags,block_tags,popup_opts,tags_count))
], null);
var G__49712 = frontend.ui.icon("X",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__49711,G__49712) : logseq.shui.ui.button.call(null,G__49711,G__49712));
})()),frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"tag?","tag?",1714008252),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"skip-async-load?","skip-async-load?",168412205),true,new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true], 0)),tag)], null),frontend$components$block$tags_cp_$_iter__49663(cljs.core.rest(s__49664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(block_tags);
});
var G__49658 = popup_opts;
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__49656,G__49657,G__49658) : logseq.shui.ui.popup_show_BANG_.call(null,G__49656,G__49657,G__49658));
})], null),(function (){var iter__5628__auto__ = (function frontend$components$block$tags_cp_$_iter__49725(s__49726){
return (new cljs.core.LazySeq(null,(function (){
var s__49726__$1 = s__49726;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__49726__$1);
if(temp__5825__auto__){
var s__49726__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49726__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__49726__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__49728 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__49727 = (0);
while(true){
if((i__49727 < size__5627__auto__)){
var tag = cljs.core._nth(c__5626__auto__,i__49727);
cljs.core.chunk_append(b__49728,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-tag.pl-2","div.block-tag.pl-2",1505144720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"tag-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag)))], null),frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"tag?","tag?",1714008252),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"skip-async-load?","skip-async-load?",168412205),true,new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,new cljs.core.Keyword(null,"disable-click?","disable-click?",-1186799869),true], 0)),tag)], null));

var G__51328 = (i__49727 + (1));
i__49727 = G__51328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49728),frontend$components$block$tags_cp_$_iter__49725(cljs.core.chunk_rest(s__49726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49728),null);
}
} else {
var tag = cljs.core.first(s__49726__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-tag.pl-2","div.block-tag.pl-2",1505144720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"tag-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag)))], null),frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"tag?","tag?",1714008252),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"skip-async-load?","skip-async-load?",168412205),true,new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,new cljs.core.Keyword(null,"disable-click?","disable-click?",-1186799869),true], 0)),tag)], null),frontend$components$block$tags_cp_$_iter__49725(cljs.core.rest(s__49726__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),block_tags));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-50.ml-1","div.text-sm.opacity-50.ml-1",-920723435),(""+"+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((tags_count - (2))))], null)], null);
}
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$tags_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__49763 = cljs.core.first(args__31746__auto__);
var G__49764 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49763,G__49764) : io.factorhouse.hsx.core.obj_get.call(null,G__49763,G__49764));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"tags-cp","tags-cp",-627343840,null),args__31746__auto__),frontend$components$block$tags_cp,args__31746__auto__,null);
}
};
var frontend$components$block$tags_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51330__i = 0, G__51330__a = new Array(arguments.length -  0);
while (G__51330__i < G__51330__a.length) {G__51330__a[G__51330__i] = arguments[G__51330__i + 0]; ++G__51330__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51330__a,0,null);
} 
return frontend$components$block$tags_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$tags_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$tags_cp.cljs$lang$applyTo = (function (arglist__51331){
var args__31746__auto__ = cljs.core.seq(arglist__51331);
return frontend$components$block$tags_cp__delegate(args__31746__auto__);
});
frontend$components$block$tags_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$tags_cp__delegate;
return frontend$components$block$tags_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__49769 = comp__31745__auto__;
var G__49770 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49769,G__49770) : io.factorhouse.hsx.core.react_memo.call(null,G__49769,G__49770));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"tags-cp");

return comp__31745__auto__;
})();
frontend.components.block.bottom_row_focus_elements = (function frontend$components$block$bottom_row_focus_elements(row){
return cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(row.querySelectorAll("[data-bottom-row-nav='true']")));
});
frontend.components.block.focus_bottom_row_item_BANG_ = (function frontend$components$block$focus_bottom_row_item_BANG_(row,index){
var temp__5825__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(frontend.components.block.bottom_row_focus_elements(row),index,null);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
el.focus();

return true;
} else {
return null;
}
});
frontend.components.block.move_bottom_row_focus_BANG_ = (function frontend$components$block$move_bottom_row_focus_BANG_(el,direction){
var temp__5825__auto__ = el.closest(".bottom-properties-row");
if(cljs.core.truth_(temp__5825__auto__)){
var row = temp__5825__auto__;
var items = frontend.components.block.bottom_row_focus_elements(row);
var current_index = (function (){var or__5142__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
if((item === el)){
return idx;
} else {
return null;
}
}),items));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var last_index = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) - (1)));
var next_index = (function (){var G__49832 = direction;
var G__49832__$1 = (((G__49832 instanceof cljs.core.Keyword))?G__49832.fqn:null);
switch (G__49832__$1) {
case "prev":
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(current_index - (1)));

break;
case "next":
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(last_index,(current_index + (1)));

break;
default:
return current_index;

}
})();
return frontend.components.block.focus_bottom_row_item_BANG_(row,next_index);
} else {
return null;
}
});
frontend.components.block.trigger_bottom_pill_edit_BANG_ = (function frontend$components$block$trigger_bottom_pill_edit_BANG_(pill){
var temp__5825__auto__ = (function (){var G__49855 = pill;
if((G__49855 == null)){
return null;
} else {
return G__49855.querySelector(".bottom-property-content .jtrigger");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var trigger = temp__5825__auto__;
if(cljs.core.truth_((function (){var G__49861 = pill;
if((G__49861 == null)){
return null;
} else {
return G__49861.querySelector(".bottom-property-content [data-popup-active]");
}
})())){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
} else {
trigger.click();
}

return true;
} else {
return null;
}
});
frontend.components.block.focus_block_editor_from_bottom_row_BANG_ = (function frontend$components$block$focus_block_editor_from_bottom_row_BANG_(row){
var temp__5825__auto__ = row.closest(".ls-block");
if(cljs.core.truth_(temp__5825__auto__)){
var current_block = temp__5825__auto__;
row.blur();

var temp__5825__auto____$1 = (function (){var G__49879 = dommy.core.attr(current_block,"blockid");
if((G__49879 == null)){
return null;
} else {
return cljs.core.uuid(G__49879);
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var block_id = temp__5825__auto____$1;
var container_id = (function (){var G__49880 = dommy.core.attr(current_block,"containerid");
if((G__49880 == null)){
return null;
} else {
return parseInt(G__49880);
}
})();
var G__49881 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
var G__49882 = new cljs.core.Keyword(null,"max","max",61366548);
var G__49883 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__49881,G__49882,G__49883) : frontend.handler.editor.edit_block_BANG_.call(null,G__49881,G__49882,G__49883));
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.handle_bottom_row_vertical_nav_BANG_ = (function frontend$components$block$handle_bottom_row_vertical_nav_BANG_(row,key){
var G__49884 = key;
switch (G__49884) {
case "ArrowUp":
return frontend.components.block.focus_block_editor_from_bottom_row_BANG_(row);

break;
case "ArrowDown":
return frontend.handler.editor.move_cross_boundary_up_down(new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exclude-property?","exclude-property?",1621722390),true], null));

break;
default:
return null;

}
});
frontend.components.block.handle_bottom_properties_row_key_down_BANG_ = (function frontend$components$block$handle_bottom_properties_row_key_down_BANG_(e){
var key = frontend.util.ekey(e);
var row = e.currentTarget;
var active_el = document.activeElement;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowUp",key)){
frontend.util.stop(e);

return frontend.components.block.handle_bottom_row_vertical_nav_BANG_(row,key);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowDown",key)){
frontend.util.stop(e);

return frontend.components.block.handle_bottom_row_vertical_nav_BANG_(row,key);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowRight",null,"ArrowLeft",null], null), null),key)){
frontend.util.stop(e);

if(cljs.core.truth_((function (){var and__5140__auto__ = active_el;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",active_el.getAttribute("data-bottom-row-nav"));
} else {
return and__5140__auto__;
}
})())){
return frontend.components.block.move_bottom_row_focus_BANG_(active_el,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowLeft"))?new cljs.core.Keyword(null,"prev","prev",-1597069226):new cljs.core.Keyword(null,"next","next",-117701485)));
} else {
var items = frontend.components.block.bottom_row_focus_elements(row);
if(cljs.core.seq(items)){
return cljs.core.first(items).focus();
} else {
return null;
}
}
} else {
return null;

}
}
}
});
frontend.components.block.handle_bottom_pill_key_down_BANG_ = (function frontend$components$block$handle_bottom_pill_key_down_BANG_(e){
var key = frontend.util.ekey(e);
var pill = e.currentTarget;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null),key)){
frontend.util.stop(e);

var G__49889 = pill;
var G__49889__$1 = (((G__49889 == null))?null:G__49889.closest(".bottom-properties-row"));
if((G__49889__$1 == null)){
return null;
} else {
return frontend.components.block.handle_bottom_row_vertical_nav_BANG_(G__49889__$1,key);
}
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"Enter",null], null), null),key)){
frontend.util.stop(e);

return frontend.components.block.trigger_bottom_pill_edit_BANG_(pill);
} else {
return null;

}
}
});
frontend.components.block.bottom_property_pill_cp = (function frontend$components$block$bottom_property_pill_cp(block,property,opts){
var many_node_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property))));
var property_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
var empty_placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property_value));
var has_value_QMARK_ = (((!((property_value == null)))) && ((!(empty_placeholder_QMARK_))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bottom-property-pill.bottom-property-pill-focusable","div.bottom-property-pill.bottom-property-pill-focusable",733443987),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property))),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom-property-pill-wrap","bottom-property-pill-wrap",1022778615),many_node_QMARK_], null)], null)),new cljs.core.Keyword(null,"data-bottom-pill-focusable","data-bottom-pill-focusable",1383987387),true,new cljs.core.Keyword(null,"data-bottom-row-nav","data-bottom-row-nav",165590860),true,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),frontend.components.block.handle_bottom_pill_key_down_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),frontend.components.property.property_key_cp(block,property,opts),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select-none","div.select-none",-628939929),":"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom-property-content property-value-container",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom-property-content-wrap","bottom-property-content-wrap",1563967839),many_node_QMARK_], null)], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(20)], null)], null),frontend.components.property.value.property_value(block,property,opts),((((has_value_QMARK_) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"datetime","datetime",494675702),null], null), null),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bottom-property-edit-icon.select-none","button.bottom-property-edit-icon.select-none",-440876317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var G__49936 = e.currentTarget;
var G__49936__$1 = (((G__49936 == null))?null:G__49936.closest(".bottom-property-pill"));
if((G__49936__$1 == null)){
return null;
} else {
return frontend.components.block.trigger_bottom_pill_edit_BANG_(G__49936__$1);
}
})], null),frontend.ui.icon("edit",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null))], null):null)], null)], null);
});
/**
 * Icon is rendered on the block itself, never as a bottom pill.
 */
frontend.components.block.hidden_block_below_property_QMARK_ = (function frontend$components$block$hidden_block_below_property_QMARK_(property){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
});
/**
 * True when this block is the focused block-route root (bullet zoom-in).
 */
frontend.components.block.zoom_in_root_block_QMARK_ = (function frontend$components$block$zoom_in_root_block_QMARK_(config,block){
var and__5140__auto__ = new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))));
} else {
return and__5140__auto__;
}
});
/**
 * Outliner blocks only show this control on the zoom-in root.
 */
frontend.components.block.show_block_below_hidden_properties_pill_toggle_QMARK_ = (function frontend$components$block$show_block_below_hidden_properties_pill_toggle_QMARK_(config,block,page_QMARK_,has_hidden_properties_QMARK_){
var and__5140__auto__ = has_hidden_properties_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(page_QMARK_);
if(and__5140__auto____$1){
return frontend.components.block.zoom_in_root_block_QMARK_(config,block);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
frontend.components.block.show_block_below_properties_row_QMARK_ = (function frontend$components$block$show_block_below_properties_row_QMARK_(visible_property_uuids,p__49983){
var map__49986 = p__49983;
var map__49986__$1 = cljs.core.__destructure_map(map__49986);
var show_hidden_properties_pill_toggle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49986__$1,new cljs.core.Keyword(null,"show-hidden-properties-pill-toggle?","show-hidden-properties-pill-toggle?",-254971516));
var show_hidden_properties_control_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49986__$1,new cljs.core.Keyword(null,"show-hidden-properties-control?","show-hidden-properties-control?",-46770709));
var show_add_property_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49986__$1,new cljs.core.Keyword(null,"show-add-property-button?","show-add-property-button?",1686221184));
return cljs.core.boolean$((function (){var or__5142__auto__ = cljs.core.seq(visible_property_uuids);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = show_hidden_properties_pill_toggle_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = show_hidden_properties_control_QMARK_;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return show_add_property_button_QMARK_;
}
}
}
})());
});
frontend.components.block.positioned_property_row = (function (){var render_fn__31744__auto__ = (function frontend$components$block$positioned_property_row(block,property,opts){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-below","block-below",1808846787),new cljs.core.Keyword(null,"property-position","property-position",-1150084538).cljs$core$IFn$_invoke$arity$1(opts))) && (frontend.components.block.hidden_block_below_property_QMARK_(property)))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-below","block-below",1808846787),new cljs.core.Keyword(null,"property-position","property-position",-1150084538).cljs$core$IFn$_invoke$arity$1(opts))){
return frontend.components.block.bottom_property_pill_cp(block,property,opts);
} else {
return frontend.components.property.value.property_value(block,property,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"show-tooltip?","show-tooltip?",-1214081087),true));
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$positioned_property_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50013 = cljs.core.first(args__31746__auto__);
var G__50014 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50013,G__50014) : io.factorhouse.hsx.core.obj_get.call(null,G__50013,G__50014));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"positioned-property-row","positioned-property-row",1787458786,null),args__31746__auto__),frontend$components$block$positioned_property_row,args__31746__auto__,null);
}
};
var frontend$components$block$positioned_property_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51347__i = 0, G__51347__a = new Array(arguments.length -  0);
while (G__51347__i < G__51347__a.length) {G__51347__a[G__51347__i] = arguments[G__51347__i + 0]; ++G__51347__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51347__a,0,null);
} 
return frontend$components$block$positioned_property_row__delegate.call(this,args__31746__auto__);};
frontend$components$block$positioned_property_row.cljs$lang$maxFixedArity = 0;
frontend$components$block$positioned_property_row.cljs$lang$applyTo = (function (arglist__51348){
var args__31746__auto__ = cljs.core.seq(arglist__51348);
return frontend$components$block$positioned_property_row__delegate(args__31746__auto__);
});
frontend$components$block$positioned_property_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$positioned_property_row__delegate;
return frontend$components$block$positioned_property_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50021 = comp__31745__auto__;
var G__50022 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50021,G__50022) : io.factorhouse.hsx.core.react_memo.call(null,G__50021,G__50022));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"positioned-property-row");

return comp__31745__auto__;
})();
frontend.components.block.bottom_property_pill_items = (function frontend$components$block$bottom_property_pill_items(block,properties,opts){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (property){
return frontend.components.block.positioned_property_row(block,property,opts);
}),properties);
});
frontend.components.block.measure_bottom_pills_overflow_BANG_ = (function frontend$components$block$measure_bottom_pills_overflow_BANG_(el,_STAR_overflow_QMARK_){
if(cljs.core.truth_(el)){
var overflow_QMARK_ = (el.scrollWidth > (el.clientWidth + (1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(overflow_QMARK_,cljs.core.deref(_STAR_overflow_QMARK_))){
return cljs.core.reset_BANG_(_STAR_overflow_QMARK_,overflow_QMARK_);
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.bottom_properties_expand_button = (function (){var render_fn__31744__auto__ = (function frontend$components$block$bottom_properties_expand_button(expanded_QMARK_,set_expanded_BANG_){
var label = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword("property","collapse-bottom-pills","property/collapse-bottom-pills",-2041705176):new cljs.core.Keyword("property","expand-bottom-pills","property/expand-bottom-pills",-1159545015))], 0));
var G__50027 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"bottom-property-control-btn bottom-property-expand-btn",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"data-bottom-row-nav","data-bottom-row-nav",165590860),true,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expanded_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var G__50030 = cljs.core.not(expanded_QMARK_);
return (set_expanded_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_expanded_BANG_.cljs$core$IFn$_invoke$arity$1(G__50030) : set_expanded_BANG_.call(null,G__50030));
})], null);
var G__50028 = frontend.ui.icon((cljs.core.truth_(expanded_QMARK_)?"chevron-up":"chevron-down"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"bottom-property-action-icon"], null));
var G__50029 = label;
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__50027,G__50028,G__50029) : logseq.shui.ui.button.call(null,G__50027,G__50028,G__50029));
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$bottom_properties_expand_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50031 = cljs.core.first(args__31746__auto__);
var G__50032 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50031,G__50032) : io.factorhouse.hsx.core.obj_get.call(null,G__50031,G__50032));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"bottom-properties-expand-button","bottom-properties-expand-button",-1547282302,null),args__31746__auto__),frontend$components$block$bottom_properties_expand_button,args__31746__auto__,null);
}
};
var frontend$components$block$bottom_properties_expand_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51351__i = 0, G__51351__a = new Array(arguments.length -  0);
while (G__51351__i < G__51351__a.length) {G__51351__a[G__51351__i] = arguments[G__51351__i + 0]; ++G__51351__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51351__a,0,null);
} 
return frontend$components$block$bottom_properties_expand_button__delegate.call(this,args__31746__auto__);};
frontend$components$block$bottom_properties_expand_button.cljs$lang$maxFixedArity = 0;
frontend$components$block$bottom_properties_expand_button.cljs$lang$applyTo = (function (arglist__51352){
var args__31746__auto__ = cljs.core.seq(arglist__51352);
return frontend$components$block$bottom_properties_expand_button__delegate(args__31746__auto__);
});
frontend$components$block$bottom_properties_expand_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$bottom_properties_expand_button__delegate;
return frontend$components$block$bottom_properties_expand_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50033 = comp__31745__auto__;
var G__50034 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50033,G__50034) : io.factorhouse.hsx.core.react_memo.call(null,G__50033,G__50034));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"bottom-properties-expand-button");

return comp__31745__auto__;
})();
frontend.components.block.block_below_positioned_properties_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_below_positioned_properties_cp(block,properties,opts,show_hidden_properties_pill_toggle_QMARK_,show_hidden_properties_control_QMARK_,show_add_property_button_QMARK_){
var _STAR_pills_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_overflow_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),cljs.core.count(properties)], null));
var vec__50040 = logseq.shui.hooks.use_atom(_STAR_overflow_QMARK_);
var overflow_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50040,(0),null);
var vec__50043 = logseq.shui.hooks.use_state(false);
var expanded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50043,(0),null);
var set_expanded_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50043,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var el = _STAR_pills_el.current;
var measure_BANG_ = (function (){
return frontend.components.block.measure_bottom_pills_overflow_BANG_(el,_STAR_overflow_QMARK_);
});
var observer = (cljs.core.truth_((function (){var and__5140__auto__ = el;
if(cljs.core.truth_(and__5140__auto__)){
return (typeof ResizeObserver !== 'undefined');
} else {
return and__5140__auto__;
}
})())?(new ResizeObserver(measure_BANG_)):null);
measure_BANG_();

if(cljs.core.truth_(observer)){
observer.observe(el);
} else {
}

window.addEventListener("resize",measure_BANG_);

return (function (){
if(cljs.core.truth_(observer)){
observer.disconnect();
} else {
}

return window.removeEventListener("resize",measure_BANG_);
});
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),properties,show_hidden_properties_pill_toggle_QMARK_,show_hidden_properties_control_QMARK_,show_add_property_button_QMARK_,expanded_QMARK_], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.positioned-properties.block-below.flex.flex-col.gap-1.text-sm.overflow-x-hidden.w-full.min-w-0","div.positioned-properties.block-below.flex.flex-col.gap-1.text-sm.overflow-x-hidden.w-full.min-w-0",896020223),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom-properties-row flex flex-row gap-2 items-center w-full min-w-0",(cljs.core.truth_(expanded_QMARK_)?"flex-wrap overflow-x-hidden":"flex-nowrap overflow-x-hidden")], null)),new cljs.core.Keyword(null,"data-expanded","data-expanded",-1733463200),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expanded_QMARK_)),new cljs.core.Keyword(null,"data-bottom-properties-row","data-bottom-properties-row",-1112222108),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),frontend.components.block.handle_bottom_properties_row_key_down_BANG_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bottom-properties-pills-strip.flex.flex-row.gap-2.items-center.min-w-0.flex-1.basis-0","div.bottom-properties-pills-strip.flex.flex-row.gap-2.items-center.min-w-0.flex-1.basis-0",1748245621),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expanded_QMARK_)?"flex-wrap overflow-x-hidden":"flex-nowrap overflow-x-hidden")], null)),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__50035_SHARP_){
return (_STAR_pills_el.current = p1__50035_SHARP_);
})], null),frontend.components.block.bottom_property_pill_items(block,properties,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_)),(cljs.core.truth_(show_hidden_properties_pill_toggle_QMARK_)?frontend.components.property.hidden_properties_toggle_button(block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bottom-pill?","bottom-pill?",-1605145468),true,new cljs.core.Keyword(null,"bottom-row-nav?","bottom-row-nav?",1987926131),true,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null)):null)], null),(cljs.core.truth_((function (){var or__5142__auto__ = overflow_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return expanded_QMARK_;
}
})())?frontend.components.block.bottom_properties_expand_button(expanded_QMARK_,set_expanded_BANG_):null),(cljs.core.truth_(show_hidden_properties_control_QMARK_)?frontend.components.property.hidden_properties_toggle_button(block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-only?","icon-only?",343876238),true,new cljs.core.Keyword(null,"bottom-row-nav?","bottom-row-nav?",1987926131),true,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0)], null)):null),(cljs.core.truth_(show_add_property_button_QMARK_)?frontend.components.property.new_property(block,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"property-position","property-position",-1150084538),new cljs.core.Keyword(null,"block-below","block-below",1808846787),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bottom-row-nav?","bottom-row-nav?",1987926131),true,new cljs.core.Keyword(null,"icon-only?","icon-only?",343876238),true,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0)], 0))):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_below_positioned_properties_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50060 = cljs.core.first(args__31746__auto__);
var G__50061 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50060,G__50061) : io.factorhouse.hsx.core.obj_get.call(null,G__50060,G__50061));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-below-positioned-properties-cp","block-below-positioned-properties-cp",876471081,null),args__31746__auto__),frontend$components$block$block_below_positioned_properties_cp,args__31746__auto__,null);
}
};
var frontend$components$block$block_below_positioned_properties_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51357__i = 0, G__51357__a = new Array(arguments.length -  0);
while (G__51357__i < G__51357__a.length) {G__51357__a[G__51357__i] = arguments[G__51357__i + 0]; ++G__51357__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51357__a,0,null);
} 
return frontend$components$block$block_below_positioned_properties_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_below_positioned_properties_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_below_positioned_properties_cp.cljs$lang$applyTo = (function (arglist__51358){
var args__31746__auto__ = cljs.core.seq(arglist__51358);
return frontend$components$block$block_below_positioned_properties_cp__delegate(args__31746__auto__);
});
frontend$components$block$block_below_positioned_properties_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_below_positioned_properties_cp__delegate;
return frontend$components$block$block_below_positioned_properties_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50062 = comp__31745__auto__;
var G__50063 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50062,G__50063) : io.factorhouse.hsx.core.react_memo.call(null,G__50062,G__50063));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-below-positioned-properties-cp");

return comp__31745__auto__;
})();
frontend.components.block.block_below_positioned_properties_gate = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_below_positioned_properties_gate(block,properties,opts,show_hidden_properties_pill_toggle_QMARK_,show_hidden_properties_control_QMARK_,show_add_property_button_QMARK_){
var visible_properties = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(frontend.components.block.hidden_block_below_property_QMARK_),properties);
if(frontend.components.block.show_block_below_properties_row_QMARK_(visible_properties,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-hidden-properties-pill-toggle?","show-hidden-properties-pill-toggle?",-254971516),show_hidden_properties_pill_toggle_QMARK_,new cljs.core.Keyword(null,"show-hidden-properties-control?","show-hidden-properties-control?",-46770709),show_hidden_properties_control_QMARK_,new cljs.core.Keyword(null,"show-add-property-button?","show-add-property-button?",1686221184),show_add_property_button_QMARK_], null))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.block_below_positioned_properties_cp,block,visible_properties,opts,show_hidden_properties_pill_toggle_QMARK_,show_hidden_properties_control_QMARK_,show_add_property_button_QMARK_], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_below_positioned_properties_gate__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50064 = cljs.core.first(args__31746__auto__);
var G__50065 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50064,G__50065) : io.factorhouse.hsx.core.obj_get.call(null,G__50064,G__50065));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-below-positioned-properties-gate","block-below-positioned-properties-gate",-2051327465,null),args__31746__auto__),frontend$components$block$block_below_positioned_properties_gate,args__31746__auto__,null);
}
};
var frontend$components$block$block_below_positioned_properties_gate = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51362__i = 0, G__51362__a = new Array(arguments.length -  0);
while (G__51362__i < G__51362__a.length) {G__51362__a[G__51362__i] = arguments[G__51362__i + 0]; ++G__51362__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51362__a,0,null);
} 
return frontend$components$block$block_below_positioned_properties_gate__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_below_positioned_properties_gate.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_below_positioned_properties_gate.cljs$lang$applyTo = (function (arglist__51363){
var args__31746__auto__ = cljs.core.seq(arglist__51363);
return frontend$components$block$block_below_positioned_properties_gate__delegate(args__31746__auto__);
});
frontend$components$block$block_below_positioned_properties_gate.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_below_positioned_properties_gate__delegate;
return frontend$components$block$block_below_positioned_properties_gate;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50066 = comp__31745__auto__;
var G__50067 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50066,G__50067) : io.factorhouse.hsx.core.react_memo.call(null,G__50066,G__50067));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-below-positioned-properties-gate");

return comp__31745__auto__;
})();
frontend.components.block.positioned_properties_content = (function (){var render_fn__31744__auto__ = (function frontend$components$block$positioned_properties_content(config,block,position,properties){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"icon?","icon?",-1663815703),true,new cljs.core.Keyword(null,"page-cp","page-cp",1066562595),frontend.components.block.page_cp,new cljs.core.Keyword(null,"block-cp","block-cp",568894835),frontend.components.block.blocks_container,new cljs.core.Keyword(null,"inline-text","inline-text",910915394),frontend.components.block.inline_text,new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322),true,new cljs.core.Keyword(null,"property-position","property-position",-1150084538),position], null)], 0));
var has_hidden_properties_QMARK_ = frontend.components.property.use_has_hidden_properties(block,config,(!(frontend.config.publishing_QMARK_)));
var page_QMARK_ = frontend.util.entity.page_QMARK_(block);
var show_hidden_properties_pill_toggle_QMARK_ = frontend.components.block.show_block_below_hidden_properties_pill_toggle_QMARK_(config,block,page_QMARK_,has_hidden_properties_QMARK_);
var show_hidden_properties_control_QMARK_ = (function (){var and__5140__auto__ = has_hidden_properties_QMARK_;
if(and__5140__auto__){
return page_QMARK_;
} else {
return and__5140__auto__;
}
})();
var show_add_property_button_QMARK_ = false;
var G__50073 = position;
var G__50073__$1 = (((G__50073 instanceof cljs.core.Keyword))?G__50073.fqn:null);
switch (G__50073__$1) {
case "block-below":
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.block_below_positioned_properties_gate,block,properties,opts,show_hidden_properties_pill_toggle_QMARK_,show_hidden_properties_control_QMARK_,show_add_property_button_QMARK_], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.positioned-properties.flex.flex-row.gap-1.select-none.h-6.self-start","div.positioned-properties.flex.flex-row.gap-1.select-none.h-6.self-start",-426489579),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(position)], null),(function (){var iter__5628__auto__ = (function frontend$components$block$positioned_properties_content_$_iter__50075(s__50076){
return (new cljs.core.LazySeq(null,(function (){
var s__50076__$1 = s__50076;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50076__$1);
if(temp__5825__auto__){
var s__50076__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50076__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50076__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50078 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50077 = (0);
while(true){
if((i__50077 < size__5627__auto__)){
var property = cljs.core._nth(c__5626__auto__,i__50077);
cljs.core.chunk_append(b__50078,frontend.components.block.positioned_property_row(block,property,opts));

var G__51367 = (i__50077 + (1));
i__50077 = G__51367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50078),frontend$components$block$positioned_properties_content_$_iter__50075(cljs.core.chunk_rest(s__50076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50078),null);
}
} else {
var property = cljs.core.first(s__50076__$2);
return cljs.core.cons(frontend.components.block.positioned_property_row(block,property,opts),frontend$components$block$positioned_properties_content_$_iter__50075(cljs.core.rest(s__50076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(properties);
})()], null);

}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$positioned_properties_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50084 = cljs.core.first(args__31746__auto__);
var G__50085 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50084,G__50085) : io.factorhouse.hsx.core.obj_get.call(null,G__50084,G__50085));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"positioned-properties-content","positioned-properties-content",-835712532,null),args__31746__auto__),frontend$components$block$positioned_properties_content,args__31746__auto__,null);
}
};
var frontend$components$block$positioned_properties_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51369__i = 0, G__51369__a = new Array(arguments.length -  0);
while (G__51369__i < G__51369__a.length) {G__51369__a[G__51369__i] = arguments[G__51369__i + 0]; ++G__51369__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51369__a,0,null);
} 
return frontend$components$block$positioned_properties_content__delegate.call(this,args__31746__auto__);};
frontend$components$block$positioned_properties_content.cljs$lang$maxFixedArity = 0;
frontend$components$block$positioned_properties_content.cljs$lang$applyTo = (function (arglist__51370){
var args__31746__auto__ = cljs.core.seq(arglist__51370);
return frontend$components$block$positioned_properties_content__delegate(args__31746__auto__);
});
frontend$components$block$positioned_properties_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$positioned_properties_content__delegate;
return frontend$components$block$positioned_properties_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50087 = comp__31745__auto__;
var G__50088 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50087,G__50088) : io.factorhouse.hsx.core.react_memo.call(null,G__50087,G__50088));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"positioned-properties-content");

return comp__31745__auto__;
})();
frontend.components.block.block_positioned_properties = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_positioned_properties(config,block,position){
var temp__5825__auto__ = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block.temp","positioned-properties","block.temp/positioned-properties",1836546803),position], null)));
if(temp__5825__auto__){
var properties = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.positioned_properties_content,config,block,position,properties], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_positioned_properties__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50092 = cljs.core.first(args__31746__auto__);
var G__50093 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50092,G__50093) : io.factorhouse.hsx.core.obj_get.call(null,G__50092,G__50093));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-positioned-properties","block-positioned-properties",1284011267,null),args__31746__auto__),frontend$components$block$block_positioned_properties,args__31746__auto__,null);
}
};
var frontend$components$block$block_positioned_properties = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51372__i = 0, G__51372__a = new Array(arguments.length -  0);
while (G__51372__i < G__51372__a.length) {G__51372__a[G__51372__i] = arguments[G__51372__i + 0]; ++G__51372__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51372__a,0,null);
} 
return frontend$components$block$block_positioned_properties__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_positioned_properties.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_positioned_properties.cljs$lang$applyTo = (function (arglist__51373){
var args__31746__auto__ = cljs.core.seq(arglist__51373);
return frontend$components$block$block_positioned_properties__delegate(args__31746__auto__);
});
frontend$components$block$block_positioned_properties.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_positioned_properties__delegate;
return frontend$components$block$block_positioned_properties;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50095 = comp__31745__auto__;
var G__50096 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50095,G__50096) : io.factorhouse.hsx.core.react_memo.call(null,G__50095,G__50096));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-positioned-properties");

return comp__31745__auto__;
})();
frontend.components.block.block_content = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_content(config,p__50100,edit_input_id,block_id,_STAR_show_query_QMARK_){
var map__50102 = p__50100;
var map__50102__$1 = cljs.core.__destructure_map(map__50102);
var block = map__50102__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50102__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var repo = frontend.state.get_current_repo();
var format = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
var collapsed_QMARK_ = new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(config);
var edit_block = block;
var content = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
}
})();
var content__$1 = ((typeof content === 'string')?clojure.string.trim(content):"");
var block_ref_QMARK_ = new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853).cljs$core$IFn$_invoke$arity$1(config);
var block__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$3(uuid,format,content__$1)], 0));
var ast_body = new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035).cljs$core$IFn$_invoke$arity$1(block__$1);
var ast_title = new cljs.core.Keyword("block.temp","ast-title","block.temp/ast-title",-940352067).cljs$core$IFn$_invoke$arity$1(block__$1);
var block__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$1,new cljs.core.Keyword("block","title","block/title",710445684),content__$1);
var plugin_slotted_QMARK_ = (function (){var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.state.slot_hook_exist_QMARK_(uuid);
} else {
return and__5140__auto__;
}
})();
var stop_events_QMARK_ = new cljs.core.Keyword(null,"stop-events?","stop-events?",-151471572).cljs$core$IFn$_invoke$arity$1(config);
var block_ref_with_title_QMARK_ = (function (){var and__5140__auto__ = block_ref_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(frontend.state.show_full_blocks_QMARK_())) && (cljs.core.seq(ast_title)));
} else {
return and__5140__auto__;
}
})();
var block_type = (function (){var or__5142__auto__ = (frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block__$2,new cljs.core.Keyword("logseq.property","ls-type","logseq.property/ls-type",326979345)) : frontend.handler.property.util.lookup.call(null,block__$2,new cljs.core.Keyword("logseq.property","ls-type","logseq.property/ls-type",326979345)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var mouse_down_key = (cljs.core.truth_(frontend.util.mobile_QMARK_())?new cljs.core.Keyword(null,"on-click","on-click",1632826543):new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var attrs = (function (){var G__50107 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"blockid","blockid",-664467760),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jtrigger","jtrigger",1514336398),new cljs.core.Keyword(null,"property-block?","property-block?",71503268).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"!cursor-pointer","!cursor-pointer",-662749770),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config);
}
})()], null)], null)),new cljs.core.Keyword(null,"containerid","containerid",-1132769612),new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"data-type","data-type",-326421468),cljs.core.name(block_type),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_(stop_events_QMARK_)?"none":null)], null)], null);
var G__50107__$1 = (((!(clojure.string.blank_QMARK_((frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block__$2,new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887)) : frontend.handler.property.util.lookup.call(null,block__$2,new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887)))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50107,new cljs.core.Keyword(null,"data-hl-color","data-hl-color",-1003439204),(frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block__$2,new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887)) : frontend.handler.property.util.lookup.call(null,block__$2,new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887)))):G__50107);
if(cljs.core.not(block_ref_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50107__$1,mouse_down_key,(function (e){
var journal_title_QMARK_ = new cljs.core.Keyword(null,"journal-page?","journal-page?",-1663876064).cljs$core$IFn$_invoke$arity$1(config);
if(frontend.util.right_click_QMARK_(e)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = journal_title_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.goog$module$goog$object.get(e,"shiftKey");
} else {
return and__5140__auto__;
}
})())){
e.preventDefault();

return frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$2),new cljs.core.Keyword(null,"page","page",849072397));
} else {
if(cljs.core.truth_(journal_title_QMARK_)){
e.preventDefault();

if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
return null;
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2));
}
} else {
if(cljs.core.truth_(frontend.util.entity.journal_QMARK_(block__$2))){
return e.preventDefault();
} else {
var f = new cljs.core.Keyword(null,"on-block-content-pointer-down","on-block-content-pointer-down",1185021460).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.fn_QMARK_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
} else {
return frontend.components.block.block_content_on_pointer_down(e,edit_block,block_id,edit_input_id,content__$1,config);
}

}
}
}
}
}));
} else {
return G__50107__$1;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-content.inline","div.block-content.inline",-1236211408),(function (){var G__50109 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"block-content-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),new cljs.core.Keyword(null,"key","key",-1516042587),(""+"block-content-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__50109,attrs], 0));

})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((((((content__$1).length) > frontend.state.block_content_max_length(frontend.state.get_current_repo()))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block__$2)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning.text-sm","div.warning.text-sm",-192579545),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","large-block-warning","block/large-block-warning",1443617352)], 0))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.block-content-inner","div.flex.flex-row.justify-between.block-content-inner",-1618510389),(cljs.core.truth_(plugin_slotted_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-head-wrap","div.block-head-wrap",568923500),frontend.components.block.block_title(config,block__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*show-query?","*show-query?",279819510),_STAR_show_query_QMARK_], null))], null)),(cljs.core.truth_(frontend.components.block.task_block_QMARK_(block__$2))?frontend.components.block.status_history.task_spent_time_cp(block__$2):null)], null),frontend.components.block.block_content_inner(config,block__$2,ast_body,plugin_slotted_QMARK_,collapsed_QMARK_,block_ref_with_title_QMARK_)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50110 = cljs.core.first(args__31746__auto__);
var G__50111 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50110,G__50111) : io.factorhouse.hsx.core.obj_get.call(null,G__50110,G__50111));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"block-content","block-content",2117451217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$block$block_content,args__31746__auto__,null);
}
};
var frontend$components$block$block_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51382__i = 0, G__51382__a = new Array(arguments.length -  0);
while (G__51382__i < G__51382__a.length) {G__51382__a[G__51382__i] = arguments[G__51382__i + 0]; ++G__51382__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51382__a,0,null);
} 
return frontend$components$block$block_content__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_content.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_content.cljs$lang$applyTo = (function (arglist__51383){
var args__31746__auto__ = cljs.core.seq(arglist__51383);
return frontend$components$block$block_content__delegate(args__31746__auto__);
});
frontend$components$block$block_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_content__delegate;
return frontend$components$block$block_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50112 = comp__31745__auto__;
var G__50113 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50112,G__50113) : io.factorhouse.hsx.core.react_memo.call(null,G__50112,G__50113));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-content");

return comp__31745__auto__;
})();
frontend.components.block.block_refs_count = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_refs_count(block,_STAR_hide_block_refs_QMARK_){
var bundled = new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499).cljs$core$IFn$_invoke$arity$1(block);
var fetched = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(frontend.db.hooks.use_resource_snapshot((cljs.core.truth_((function (){var and__5140__auto__ = (bundled == null);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-ref-count","block-ref-count",524096085),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null):null)));
var block_refs_count_SINGLEQUOTE_ = (function (){var or__5142__auto__ = bundled;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return fetched;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = block_refs_count_SINGLEQUOTE_;
if(cljs.core.truth_(and__5140__auto__)){
return (block_refs_count_SINGLEQUOTE_ > (0));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-6","div.h-6",237387168),(function (){var G__50117 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","open-block-references","block/open-block-references",573510332)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 py-0 w-5 h-5 opacity-70 hover:opacity-100",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_hide_block_refs_QMARK_,cljs.core.not);
}
})], null);
var G__50118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),block_refs_count_SINGLEQUOTE_], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__50117,G__50118) : logseq.shui.ui.button.call(null,G__50117,G__50118));
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_refs_count__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50122 = cljs.core.first(args__31746__auto__);
var G__50123 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50122,G__50123) : io.factorhouse.hsx.core.obj_get.call(null,G__50122,G__50123));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-refs-count","block-refs-count",1905387291,null),args__31746__auto__),frontend$components$block$block_refs_count,args__31746__auto__,null);
}
};
var frontend$components$block$block_refs_count = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51386__i = 0, G__51386__a = new Array(arguments.length -  0);
while (G__51386__i < G__51386__a.length) {G__51386__a[G__51386__i] = arguments[G__51386__i + 0]; ++G__51386__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51386__a,0,null);
} 
return frontend$components$block$block_refs_count__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_refs_count.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_refs_count.cljs$lang$applyTo = (function (arglist__51387){
var args__31746__auto__ = cljs.core.seq(arglist__51387);
return frontend$components$block$block_refs_count__delegate(args__31746__auto__);
});
frontend$components$block$block_refs_count.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_refs_count__delegate;
return frontend$components$block$block_refs_count;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50124 = comp__31745__auto__;
var G__50125 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50124,G__50125) : io.factorhouse.hsx.core.react_memo.call(null,G__50124,G__50125));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-refs-count");

return comp__31745__auto__;
})();
frontend.components.block.block_linked_references = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_linked_references(block){
var bundled = new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499).cljs$core$IFn$_invoke$arity$1(block);
var fetched = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(frontend.db.hooks.use_resource_snapshot((cljs.core.truth_((function (){var and__5140__auto__ = (bundled == null);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-ref-count","block-ref-count",524096085),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null):null)));
var refs_count = (function (){var or__5142__auto__ = bundled;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return fetched;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = refs_count;
if(cljs.core.truth_(and__5140__auto__)){
return (refs_count > (0));
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = frontend.state.get_component(new cljs.core.Keyword("block","linked-references","block/linked-references",-2022711478));
if(cljs.core.truth_(temp__5825__auto__)){
var refs_cp = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2.border.rounded.my-2.shadow-xs","div.px-4.py-2.border.rounded.my-2.shadow-xs",-227853613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(42)], null)], null),(function (){var G__50131 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var G__50132 = cljs.core.PersistentArrayMap.EMPTY;
return (refs_cp.cljs$core$IFn$_invoke$arity$2 ? refs_cp.cljs$core$IFn$_invoke$arity$2(G__50131,G__50132) : refs_cp.call(null,G__50131,G__50132));
})()], null);
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_linked_references__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50134 = cljs.core.first(args__31746__auto__);
var G__50135 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50134,G__50135) : io.factorhouse.hsx.core.obj_get.call(null,G__50134,G__50135));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-linked-references","block-linked-references",-1081047323,null),args__31746__auto__),frontend$components$block$block_linked_references,args__31746__auto__,null);
}
};
var frontend$components$block$block_linked_references = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51389__i = 0, G__51389__a = new Array(arguments.length -  0);
while (G__51389__i < G__51389__a.length) {G__51389__a[G__51389__i] = arguments[G__51389__i + 0]; ++G__51389__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51389__a,0,null);
} 
return frontend$components$block$block_linked_references__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_linked_references.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_linked_references.cljs$lang$applyTo = (function (arglist__51391){
var args__31746__auto__ = cljs.core.seq(arglist__51391);
return frontend$components$block$block_linked_references__delegate(args__31746__auto__);
});
frontend$components$block$block_linked_references.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_linked_references__delegate;
return frontend$components$block$block_linked_references;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50136 = comp__31745__auto__;
var G__50137 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50136,G__50137) : io.factorhouse.hsx.core.react_memo.call(null,G__50136,G__50137));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-linked-references");

return comp__31745__auto__;
})();
frontend.components.block.edit_block_content = (function frontend$components$block$edit_block_content(config,block,edit_input_id){
var content = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
(frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));

frontend.handler.editor.format.unhighlight_blocks_BANG_();

return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$variadic(edit_input_id,content,block,content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config)], null)], 0));
});
frontend.components.block.block_content_with_error = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_content_with_error(config,block,edit_input_id,block_id,_STAR_show_query_QMARK_,editor_box,custom_block_content){
var vec__50138 = logseq.shui.hooks.use_state(false);
var editing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50138,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50138,(1),null);
var query = new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block);
return frontend.ui.catch_error((cljs.core.truth_(query)?(cljs.core.truth_(editing_QMARK_)?(function (){var G__50143 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block","block",664686210),query,new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(query),new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550),cljs.core.uuid,new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089))], null);
var G__50144 = (""+"edit-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(query)));
var G__50145 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"editor-opts","editor-opts",-1306154715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return (set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null,false));
})], null));
return (editor_box.cljs$core$IFn$_invoke$arity$3 ? editor_box.cljs$core$IFn$_invoke$arity$3(G__50143,G__50144,G__50145) : editor_box.call(null,G__50143,G__50144,G__50145));
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_editing_BANG_.call(null,true));

var G__50146 = query;
var G__50147 = new cljs.core.Keyword(null,"max","max",61366548);
var G__50148 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config)], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__50146,G__50147,G__50148) : frontend.handler.editor.edit_block_BANG_.call(null,G__50146,G__50147,G__50148));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","click-to-fix-query","block/click-to-fix-query",-792607762),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(query)], 0))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-col.w-full.gap-2","div.flex.flex-1.flex-col.w-full.gap-2",1007423574),frontend.ui.block_error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","render-error","block/render-error",-822122681)], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
}
})(),new cljs.core.Keyword(null,"section-attrs","section-attrs",1373816150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.block.edit_block_content(config,block,edit_input_id);
})], null)], null))], null)),(function (){var or__5142__auto__ = custom_block_content;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.block.block_content(config,block,edit_input_id,block_id,_STAR_show_query_QMARK_);
}
})());
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_content_with_error__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50153 = cljs.core.first(args__31746__auto__);
var G__50154 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50153,G__50154) : io.factorhouse.hsx.core.obj_get.call(null,G__50153,G__50154));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-content-with-error","block-content-with-error",160940641,null),args__31746__auto__),frontend$components$block$block_content_with_error,args__31746__auto__,null);
}
};
var frontend$components$block$block_content_with_error = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51396__i = 0, G__51396__a = new Array(arguments.length -  0);
while (G__51396__i < G__51396__a.length) {G__51396__a[G__51396__i] = arguments[G__51396__i + 0]; ++G__51396__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51396__a,0,null);
} 
return frontend$components$block$block_content_with_error__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_content_with_error.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_content_with_error.cljs$lang$applyTo = (function (arglist__51397){
var args__31746__auto__ = cljs.core.seq(arglist__51397);
return frontend$components$block$block_content_with_error__delegate(args__31746__auto__);
});
frontend$components$block$block_content_with_error.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_content_with_error__delegate;
return frontend$components$block$block_content_with_error;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50157 = comp__31745__auto__;
var G__50158 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50157,G__50158) : io.factorhouse.hsx.core.react_memo.call(null,G__50157,G__50158));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-content-with-error");

return comp__31745__auto__;
})();
frontend.components.block.video_macro_block_QMARK_ = (function frontend$components$block$video_macro_block_QMARK_(block){
return frontend.components.block.video.contains_video_macro_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block.temp","ast-title","block.temp/ast-title",-940352067).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035).cljs$core$IFn$_invoke$arity$1(block)], null));
});
frontend.components.block.block_content_or_editor = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_content_or_editor(config,p__50165,p__50166){
var map__50167 = p__50165;
var map__50167__$1 = cljs.core.__destructure_map(map__50167);
var block = map__50167__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var map__50168 = p__50166;
var map__50168__$1 = cljs.core.__destructure_map(map__50168);
var edit_input_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50168__$1,new cljs.core.Keyword(null,"edit-input-id","edit-input-id",-1876858101));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50168__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50168__$1,new cljs.core.Keyword(null,"edit?","edit?",-842131310));
var hide_block_refs_count_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50168__$1,new cljs.core.Keyword(null,"hide-block-refs-count?","hide-block-refs-count?",-1723688145));
var _STAR_hide_block_refs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50168__$1,new cljs.core.Keyword(null,"*hide-block-refs?","*hide-block-refs?",-1362658712));
var _STAR_show_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50168__$1,new cljs.core.Keyword(null,"*show-query?","*show-query?",279819510));
var format = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
var editor_box = frontend.state.get_component(new cljs.core.Keyword("editor","box","editor/box",-1921770435));
var editor_id = (""+"editor-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(edit_input_id));
var block_reference_only_QMARK_ = (function (){var G__50173 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
var G__50173__$1 = (((G__50173 == null))?null:clojure.string.trim(G__50173));
if((G__50173__$1 == null)){
return null;
} else {
return logseq.common.util.block_ref.block_ref_QMARK_(G__50173__$1);
}
})();
var named_QMARK_ = (!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block) == null)));
var table_QMARK_ = new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config);
var raw_mode_block = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","raw-mode-block","editor/raw-mode-block",-1788505944)], null));
var type_block_editor_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(raw_mode_block))));
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550),block_id);
var bg_color = (frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606)) : frontend.handler.property.util.lookup.call(null,block,new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606)));
var video_macro_QMARK_ = frontend.components.block.video_macro_block_QMARK_(block);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-content-or-editor-wrap","div.block-content-or-editor-wrap",-1404159080),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["ls-page-title-container",new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1),"px-1 with-bg-color",bg_color], null)], null)),new cljs.core.Keyword(null,"data-node-type","data-node-type",-1570224248),(function (){var G__50176 = new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block);
if((G__50176 == null)){
return null;
} else {
return cljs.core.name(G__50176);
}
})()], null),(cljs.core.truth_(bg_color)?(function (){var built_in_color_QMARK_ = frontend.ui.built_in_color_QMARK_(bg_color);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(built_in_color_QMARK_)?(""+"var(--ls-highlight-color-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_color)+")"):bg_color),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(built_in_color_QMARK_)?null:"white")], null)], null);
})():null)], 0)),(cljs.core.truth_(table_QMARK_)?null:frontend.components.block.block_positioned_properties(config__$1,block,new cljs.core.Keyword(null,"block-left","block-left",-1266158554))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-content-or-editor-inner","div.block-content-or-editor-inner",-589024221),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-row.flex.flex-1.flex-row.gap-1.items-center","div.block-row.flex.flex-1.flex-row.gap-1.items-center",-386058265),(function (){var block_content_f = (function frontend$components$block$block_content_or_editor_$_block_content_f(p__50179){
var map__50180 = p__50179;
var map__50180__$1 = cljs.core.__destructure_map(map__50180);
var custom_block_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50180__$1,new cljs.core.Keyword(null,"custom-block-content","custom-block-content",52758486));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.w-full.block-content-wrapper","div.flex.flex-1.w-full.block-content-wrapper",1327018947),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"page-title-actions-cp","page-title-actions-cp",-1825610797).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var actions_cp = temp__5825__auto__;
return (actions_cp.cljs$core$IFn$_invoke$arity$1 ? actions_cp.cljs$core$IFn$_invoke$arity$1(block) : actions_cp.call(null,block));
} else {
return null;
}
})(),frontend.components.block.block_content_with_error(config__$1,block,edit_input_id,block_id,_STAR_show_query_QMARK_,editor_box,custom_block_content),((((cljs.core.not(hide_block_refs_count_QMARK_)) && ((((!(named_QMARK_))) && (cljs.core.not(new cljs.core.Keyword(null,"table-block-title?","table-block-title?",-1188462014).cljs$core$IFn$_invoke$arity$1(config__$1)))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354).cljs$core$IFn$_invoke$arity$1(config__$1);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.hover:opacity-100.svg-small.inline","a.opacity-70.hover:opacity-100.svg-small.inline",-454542425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

var temp__5825__auto__ = new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var block__$1 = temp__5825__auto__;
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword(null,"max","max",61366548)) : frontend.handler.editor.edit_block_BANG_.call(null,block__$1,new cljs.core.Keyword(null,"max","max",61366548)));
} else {
return null;
}
})], null),frontend.components.svg.edit], null):null),(cljs.core.truth_(block_reference_only_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.hover:opacity-100.svg-small.inline","a.opacity-70.hover:opacity-100.svg-small.inline",-454542425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword(null,"max","max",61366548)) : frontend.handler.editor.edit_block_BANG_.call(null,block,new cljs.core.Keyword(null,"max","max",61366548)));
})], null),frontend.components.svg.edit], null):null)], null):null),(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1);
}
}
})())?null:frontend.components.block.block_refs_count(block,_STAR_hide_block_refs_QMARK_))], null);
});
var editor_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-wrapper.flex.flex-1.w-full","div.editor-wrapper.flex.flex-1.w-full",-1067704408),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),editor_id,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity-50","opacity-50",-660022124),cljs.core.boolean$((function (){var or__5142__auto__ = (logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.built_in_QMARK_.call(null,block));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.entity.journal_QMARK_(block);
}
})())], null)], null))], null),frontend.ui.catch_error(frontend.ui.block_error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","something-wrong","sync/something-wrong",-1023459588)], 0)),cljs.core.PersistentArrayMap.EMPTY),(function (){var G__50187 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"block-id","block-id",-70582834),uuid,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550),block_id,new cljs.core.Keyword(null,"format","format",-1306924766),format], null);
var G__50188 = edit_input_id;
var G__50189 = config__$1;
return (editor_box.cljs$core$IFn$_invoke$arity$3 ? editor_box.cljs$core$IFn$_invoke$arity$3(G__50187,G__50188,G__50189) : editor_box.call(null,G__50187,G__50188,G__50189));
})())], null);
var show_editor_QMARK_ = (function (){var and__5140__auto__ = editor_box;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = edit_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return (!(type_block_editor_QMARK_));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = (logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.asset_QMARK_.call(null,block));
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.img_audio_video_QMARK_(block);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.asset-block-wrap.w-full","div.flex.flex-col.asset-block-wrap.w-full",489420209),block_content_f(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"custom-block-content","custom-block-content",52758486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1","div.flex.flex-1",-1659764687),frontend.components.block.asset_cp(config__$1,block)], null)], null)),(cljs.core.truth_(show_editor_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),editor_cp], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.components.block.asset.read_mode_title_attrs,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.block.edit_block_content(config__$1,block,edit_input_id);
})),frontend.components.block.text_block_title(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(config__$1,new cljs.core.Keyword(null,"raw-title?","raw-title?",1309209409)),block)], null))], null);
} else {
if(video_macro_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.video-macro-block-wrap.w-full","div.flex.flex-col.video-macro-block-wrap.w-full",1314544581),block_content_f(cljs.core.PersistentArrayMap.EMPTY),(cljs.core.truth_(show_editor_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),editor_cp], null):null)], null);
} else {
if(cljs.core.truth_(show_editor_QMARK_)){
return editor_cp;
} else {
return block_content_f(cljs.core.PersistentArrayMap.EMPTY);

}
}
}
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"table-block-title?","table-block-title?",-1188462014).cljs$core$IFn$_invoke$arity$1(config__$1))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-block-right.flex.flex-row.items-center.self-start.gap-1","div.ls-block-right.flex.flex-row.items-center.self-start.gap-1",-1482411605),(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(config__$1);
}
}
}
})())?null:frontend.components.block.sync_conflict.sync_conflicts_warning_button(block)),(cljs.core.truth_(table_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70.hover:opacity-100","div.opacity-70.hover:opacity-100",-76583246),frontend.components.block.block_positioned_properties(config__$1,block,new cljs.core.Keyword(null,"block-right","block-right",-1578897705))], null)),(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return new cljs.core.Keyword(null,"hide-block-tags?","hide-block-tags?",1725570958).cljs$core$IFn$_invoke$arity$1(config__$1);
}
}
}
}
})())?null:((cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)))?frontend.components.block.tags_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),block):null))], null))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_content_or_editor__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50194 = cljs.core.first(args__31746__auto__);
var G__50195 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50194,G__50195) : io.factorhouse.hsx.core.obj_get.call(null,G__50194,G__50195));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"block-content-or-editor","block-content-or-editor",-355528068,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$block$block_content_or_editor,args__31746__auto__,null);
}
};
var frontend$components$block$block_content_or_editor = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51406__i = 0, G__51406__a = new Array(arguments.length -  0);
while (G__51406__i < G__51406__a.length) {G__51406__a[G__51406__i] = arguments[G__51406__i + 0]; ++G__51406__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51406__a,0,null);
} 
return frontend$components$block$block_content_or_editor__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_content_or_editor.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_content_or_editor.cljs$lang$applyTo = (function (arglist__51408){
var args__31746__auto__ = cljs.core.seq(arglist__51408);
return frontend$components$block$block_content_or_editor__delegate(args__31746__auto__);
});
frontend$components$block$block_content_or_editor.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_content_or_editor__delegate;
return frontend$components$block$block_content_or_editor;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50198 = comp__31745__auto__;
var G__50199 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50198,G__50199) : io.factorhouse.hsx.core.react_memo.call(null,G__50198,G__50199));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-content-or-editor");

return comp__31745__auto__;
})();
frontend.components.block.non_dragging_QMARK_ = (function frontend$components$block$non_dragging_QMARK_(e){
return ((frontend.components.block.selection.pointer_down_QMARK_()) && ((((!(dommy.core.has_class_QMARK_(frontend.components.block.goog$module$goog$object.get(e,"target"),"bullet-container")))) && ((((!(dommy.core.has_class_QMARK_(frontend.components.block.goog$module$goog$object.get(e,"target"),"bullet")))) && (cljs.core.not(cljs.core.deref(frontend.components.block._STAR_dragging_QMARK_))))))));
});
frontend.components.block.block_drag_over = (function frontend$components$block$block_drag_over(event,uuid,top_QMARK_,block_id,_STAR_move_to_SINGLEQUOTE_){
frontend.util.stop(event);

if(frontend.components.block.dnd_same_block_QMARK_(uuid)){
return null;
} else {
var over_block = goog.dom.getElement(block_id);
var rect = module$frontend$utils.getOffsetRect(over_block);
var element_top = frontend.components.block.goog$module$goog$object.get(rect,"top");
var element_left = frontend.components.block.goog$module$goog$object.get(rect,"left");
var x_offset = (event.pageX - element_left);
var cursor_top = frontend.components.block.goog$module$goog$object.get(event,"clientY");
var move_to_value = (cljs.core.truth_((function (){var and__5140__auto__ = top_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (Math.abs((cursor_top - element_top)) <= (16));
} else {
return and__5140__auto__;
}
})())?new cljs.core.Keyword(null,"top","top",-1856271961):(((x_offset > (cljs.core.truth_(frontend.util.capacitor_QMARK_())?(100):(50))))?new cljs.core.Keyword(null,"nested","nested",18943849):new cljs.core.Keyword(null,"sibling","sibling",-1183865000)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uuid,cljs.core.deref(frontend.components.block._STAR_dragging_over_block))){
} else {
frontend.mobile.haptics.haptics.cljs$core$IFn$_invoke$arity$0();
}

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_over_block,uuid);

cljs.core.reset_BANG_(frontend.components.block._STAR_drag_to_block,block_id);

return cljs.core.reset_BANG_(_STAR_move_to_SINGLEQUOTE_,move_to_value);
}
});
frontend.components.block.block_drag_end = (function frontend$components$block$block_drag_end(var_args){
var G__50211 = arguments.length;
switch (G__50211) {
case 1:
return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$1 = (function (_event){
return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2(_event,frontend.components.block._STAR_move_to);
}));

(frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2 = (function (_event,_STAR_move_to_SINGLEQUOTE_){
var G__50214 = (function (){
cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,false);

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_block,null);

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_over_block,null);

cljs.core.reset_BANG_(frontend.components.block._STAR_drag_to_block,null);

cljs.core.reset_BANG_(_STAR_move_to_SINGLEQUOTE_,null);

return frontend.handler.editor.format.unhighlight_blocks_BANG_();
});
return (frontend.util.schedule.cljs$core$IFn$_invoke$arity$1 ? frontend.util.schedule.cljs$core$IFn$_invoke$arity$1(G__50214) : frontend.util.schedule.call(null,G__50214));
}));

(frontend.components.block.block_drag_end.cljs$lang$maxFixedArity = 2);

frontend.components.block.block_drag_leave = (function frontend$components$block$block_drag_leave(_event,_STAR_move_to_SINGLEQUOTE_){
return cljs.core.reset_BANG_(_STAR_move_to_SINGLEQUOTE_,null);
});
/**
 * Block on-drop handler
 */
frontend.components.block.block_drop = (function frontend$components$block$block_drop(event,uuid,target_block,original_block,_STAR_move_to_SINGLEQUOTE_){
if(frontend.components.block.dnd_same_block_QMARK_(uuid)){
return null;
} else {
frontend.util.stop_propagation(event);

frontend.mobile.haptics.haptics.cljs$core$IFn$_invoke$arity$0();

var block_uuids_51414 = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__50219_SHARP_){
var or__5142__auto__ = (function (){var G__50222 = dommy.core.attr(p1__50219_SHARP_,"originalblockid");
if((G__50222 == null)){
return null;
} else {
return (uuid.cljs$core$IFn$_invoke$arity$1 ? uuid.cljs$core$IFn$_invoke$arity$1(G__50222) : uuid.call(null,G__50222));
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.selection_node_block_id(p1__50219_SHARP_);
}
}),frontend.state.get_selection_blocks())));
var dragging_block_51415 = cljs.core.deref(frontend.components.block._STAR_dragging_block);
var repo_51416 = frontend.state.get_current_repo();
var move_to_51417 = cljs.core.deref(_STAR_move_to_SINGLEQUOTE_);
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(repo_51416,block_uuids_51414,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (selected){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(selected))?cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),selected):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dragging_block_51415], null))),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.block.remove_nils(blocks)),(function (blocks__$1){
return promesa.protocols._promise(((cljs.core.seq(blocks__$1))?(function (){
frontend.handler.dnd.move_blocks(event,blocks__$1,target_block,original_block,move_to_51417);

if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),false);

return frontend.state.clear_selection_BANG_();
} else {
return null;
}
})()
:frontend.components.block.drop.handle_data_transfer_drop_BANG_(event,uuid,target_block,move_to_51417)));
}));
}));
}));
}));

return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2(event,_STAR_move_to_SINGLEQUOTE_);
}
});
frontend.components.block.block_mouse_over = (function frontend$components$block$block_mouse_over(e,block,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_,selection_block_ids){
var last_client_y = new cljs.core.Keyword(null,"client-y","client-y",1123764704).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.components.block._STAR_block_last_mouse_event));
var client_y = e.clientY;
var target = e.target;
var block_dom_node = frontend.util.rec_get_node(target,"ls-block");
var active_selection_QMARK_ = cljs.core.boolean$(cljs.core.seq(frontend.state.get_selection_blocks()));
var select_QMARK_ = frontend.components.block.selection.select_on_hover_QMARK_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"last-client-y","last-client-y",574644122),last_client_y,new cljs.core.Keyword(null,"client-y","client-y",1123764704),client_y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),cljs.core.deref(frontend.components.block._STAR_dragging_QMARK_),new cljs.core.Keyword(null,"editing-same-block?","editing-same-block?",22530794),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())),new cljs.core.Keyword(null,"active-selection?","active-selection?",589915933),active_selection_QMARK_,new cljs.core.Keyword(null,"virtualized?","virtualized?",285216968),(!((selection_block_ids == null)))], null));
frontend.components.block.remember_block_pointer_BANG_(e);

cljs.core.reset_BANG_(_STAR_control_show_QMARK_,true);

if(cljs.core.truth_((function (){var and__5140__auto__ = (!(frontend.components.block.comments_area_target_QMARK_(target)));
if(and__5140__auto__){
return select_QMARK_;
} else {
return and__5140__auto__;
}
})())){
e.preventDefault();

var temp__5825__auto___51422 = goog.dom.getElement(block_id);
if(cljs.core.truth_(temp__5825__auto___51422)){
var parent_51423 = temp__5825__auto___51422;
var node_51424 = parent_51423.querySelector(".bullet-container");
if(cljs.core.truth_(doc_mode_QMARK_)){
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node_51424,"hide-inner-bullet");
} else {
}
} else {
}

if(frontend.components.block.non_dragging_QMARK_(e)){
var temp__5825__auto___51426 = goog.dom.getElement("app-container-wrapper");
if(cljs.core.truth_(temp__5825__auto___51426)){
var container_51427 = temp__5825__auto___51426;
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(container_51427,"blocks-selection-mode");
} else {
}

return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_id,block_dom_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"append?","append?",123923917),true,new cljs.core.Keyword(null,"block-ids","block-ids",557945592),selection_block_ids], null)], 0));
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.block_mouse_leave = (function frontend$components$block$block_mouse_leave(_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_){
cljs.core.reset_BANG_(_STAR_control_show_QMARK_,false);

if(cljs.core.truth_(doc_mode_QMARK_)){
var temp__5825__auto__ = goog.dom.getElement(block_id);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
var temp__5825__auto____$1 = parent.querySelector(".bullet-container");
if(cljs.core.truth_(temp__5825__auto____$1)){
var node = temp__5825__auto____$1;
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"hide-inner-bullet");
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
frontend.components.block.on_drag_and_mouse_attrs = (function frontend$components$block$on_drag_and_mouse_attrs(block,original_block,uuid,top_QMARK_,block_id,_STAR_move_to_SINGLEQUOTE_){
if(cljs.core.truth_(frontend.util.entity.journal_QMARK_(block))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (event){
return event.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (event){
return frontend.components.block.block_drag_over(event,uuid,top_QMARK_,block_id,_STAR_move_to_SINGLEQUOTE_);
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (event){
return frontend.components.block.block_drag_leave(event,_STAR_move_to_SINGLEQUOTE_);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (event){
return frontend.components.block.block_drop(event,uuid,block,original_block,_STAR_move_to_SINGLEQUOTE_);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (event){
var seq__50236_51430 = cljs.core.seq((function (){var or__5142__auto__ = cljs.core.seq(frontend.state.get_selection_blocks());
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.target], null);
}
})());
var chunk__50238_51431 = null;
var count__50239_51432 = (0);
var i__50240_51433 = (0);
while(true){
if((i__50240_51433 < count__50239_51432)){
var block_51435__$1 = chunk__50238_51431.cljs$core$IIndexed$_nth$arity$2(null,i__50240_51433);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(block_51435__$1,"dragging");


var G__51436 = seq__50236_51430;
var G__51437 = chunk__50238_51431;
var G__51438 = count__50239_51432;
var G__51439 = (i__50240_51433 + (1));
seq__50236_51430 = G__51436;
chunk__50238_51431 = G__51437;
count__50239_51432 = G__51438;
i__50240_51433 = G__51439;
continue;
} else {
var temp__5825__auto___51441 = cljs.core.seq(seq__50236_51430);
if(temp__5825__auto___51441){
var seq__50236_51442__$1 = temp__5825__auto___51441;
if(cljs.core.chunked_seq_QMARK_(seq__50236_51442__$1)){
var c__5673__auto___51443 = cljs.core.chunk_first(seq__50236_51442__$1);
var G__51444 = cljs.core.chunk_rest(seq__50236_51442__$1);
var G__51445 = c__5673__auto___51443;
var G__51446 = cljs.core.count(c__5673__auto___51443);
var G__51447 = (0);
seq__50236_51430 = G__51444;
chunk__50238_51431 = G__51445;
count__50239_51432 = G__51446;
i__50240_51433 = G__51447;
continue;
} else {
var block_51448__$1 = cljs.core.first(seq__50236_51442__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(block_51448__$1,"dragging");


var G__51450 = cljs.core.next(seq__50236_51442__$1);
var G__51451 = null;
var G__51452 = (0);
var G__51453 = (0);
seq__50236_51430 = G__51450;
chunk__50238_51431 = G__51451;
count__50239_51432 = G__51452;
i__50240_51433 = G__51453;
continue;
}
} else {
}
}
break;
}

var temp__5825__auto___51454 = document.getElementById("dragging-ghost-element");
if(cljs.core.truth_(temp__5825__auto___51454)){
var node_51455 = temp__5825__auto___51454;
dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(document.body,node_51455);
} else {
}

return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2(event,_STAR_move_to_SINGLEQUOTE_);
})], null);
}
});
frontend.components.block.root_block_QMARK_ = (function frontend$components$block$root_block_QMARK_(config,block){
var and__5140__auto__ = new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.collapsed_QMARK_(block);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
/**
 * Collapsed state combining transient UI overrides with the persisted flag.
 * Row-level children subscriptions gate on the same predicate so collapsed
 * rows never trigger a [:children] load.
 */
frontend.components.block.block_collapsed_QMARK_ = (function frontend$components$block$block_collapsed_QMARK_(config,block,temp_collapsed_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ignore-block-collapsed?","ignore-block-collapsed?",1690042331).cljs$core$IFn$_invoke$arity$1(config))){
return false;
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.boolean$(new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = new cljs.core.Keyword(null,"view?","view?",655244230).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = frontend.components.block.root_block_QMARK_(config,block);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var and__5140__auto__ = (function (){var or__5142__auto____$4 = frontend.util.entity.class_QMARK_(block);
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return frontend.util.entity.property_QMARK_(block);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config);
} else {
return and__5140__auto__;
}
}
}
}
}
})())){
return temp_collapsed_QMARK_;
} else {
if((!((temp_collapsed_QMARK_ == null)))){
return temp_collapsed_QMARK_;
} else {
return cljs.core.boolean$(frontend.handler.editor.block_default_collapsed_QMARK_(block,config));
}

}
}
});
frontend.components.block.build_config = (function frontend$components$block$build_config(config,block,p__50257){
var map__50258 = p__50257;
var map__50258__$1 = cljs.core.__destructure_map(map__50258);
var navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50258__$1,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122));
var navigated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50258__$1,new cljs.core.Keyword(null,"navigated?","navigated?",359191896));
var G__50259 = config;
var G__50259__$1 = (cljs.core.truth_(navigated_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50259,new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(navigating_block))):G__50259);
var G__50259__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50259__$1,new cljs.core.Keyword(null,"block","block",664686210),block)
;
var G__50259__$3 = (((new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50259__$2,new cljs.core.Keyword(null,"query-result","query-result",-833644142),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):G__50259__$2);
var G__50259__$4 = frontend.handler.block.attach_order_list_state(G__50259__$3,block)
;
if((new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50259__$4,new cljs.core.Keyword(null,"level","level",1290497552),(0));
} else {
return G__50259__$4;
}
});
frontend.components.block.query_result = (function (){var render_fn__31744__auto__ = (function frontend$components$block$query_result(config,block,query_block){
var query_block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(query_block);
var current_query_block = frontend.db.hooks.use_block(query_block_uuid);
var query = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(current_query_block);
var result = logseq.common.util.safe_read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"log-error?","log-error?",969837063),false], null),query);
var advanced_query_QMARK_ = cljs.core.map_QMARK_(result);
if(cljs.core.truth_(current_query_block)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(42)], null)], null),frontend.components.query.custom_query(frontend.components.block.wrap_query_components(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662),(!(advanced_query_QMARK_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cards?","cards?",1232384109),frontend.components.block.cards_block_QMARK_(block)], 0))),((advanced_query_QMARK_)?result:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"builder","builder",-2055262005),null,new cljs.core.Keyword(null,"query","query",-1288509510),frontend.components.query.builder.sanitize_q(query)], null)))], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$query_result__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50264 = cljs.core.first(args__31746__auto__);
var G__50265 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50264,G__50265) : io.factorhouse.hsx.core.obj_get.call(null,G__50264,G__50265));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"query-result","query-result",806887385,null),args__31746__auto__),frontend$components$block$query_result,args__31746__auto__,null);
}
};
var frontend$components$block$query_result = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51462__i = 0, G__51462__a = new Array(arguments.length -  0);
while (G__51462__i < G__51462__a.length) {G__51462__a[G__51462__i] = arguments[G__51462__i + 0]; ++G__51462__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51462__a,0,null);
} 
return frontend$components$block$query_result__delegate.call(this,args__31746__auto__);};
frontend$components$block$query_result.cljs$lang$maxFixedArity = 0;
frontend$components$block$query_result.cljs$lang$applyTo = (function (arglist__51463){
var args__31746__auto__ = cljs.core.seq(arglist__51463);
return frontend$components$block$query_result__delegate(args__31746__auto__);
});
frontend$components$block$query_result.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$query_result__delegate;
return frontend$components$block$query_result;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50266 = comp__31745__auto__;
var G__50267 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50266,G__50267) : io.factorhouse.hsx.core.react_memo.call(null,G__50266,G__50267));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"query-result");

return comp__31745__auto__;
})();
frontend.components.block.build_block = (function frontend$components$block$build_block(config,block_STAR_,p__50269){
var map__50271 = p__50269;
var map__50271__$1 = cljs.core.__destructure_map(map__50271);
var navigated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50271__$1,new cljs.core.Keyword(null,"navigated?","navigated?",359191896));
var linked_block = new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(block_STAR_);
var block = (cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725).cljs$core$IFn$_invoke$arity$1(block_STAR_))) && (cljs.core.not((function (){var and__5140__auto____$2 = new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto____$2)){
return clojure.string.includes_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(config),"not");
} else {
return and__5140__auto____$2;
}
})())));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return navigated_QMARK_;
}
})())?(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"navigating-block-entity","navigating-block-entity",1868721407).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block_STAR_;
}
})():(cljs.core.truth_(new cljs.core.Keyword(null,"loop-linked?","loop-linked?",-595769994).cljs$core$IFn$_invoke$arity$1(config))?block_STAR_:(cljs.core.truth_(linked_block)?linked_block:block_STAR_
)));
var result = block;
if(cljs.core.truth_(linked_block)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_STAR_,result], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,result], null);
}
});
frontend.components.block.build_block_renderer_children_props = (function frontend$components$block$build_block_renderer_children_props(child_uuids){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,child_uuids);
});
frontend.components.block.build_block_renderer_match_context = (function frontend$components$block$build_block_renderer_match_context(var_args){
var G__50278 = arguments.length;
switch (G__50278) {
case 1:
return frontend.components.block.build_block_renderer_match_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return frontend.components.block.build_block_renderer_match_context.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.build_block_renderer_match_context.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.components.block.build_block_renderer_match_context.cljs$core$IFn$_invoke$arity$3(block,false,cljs.core.PersistentVector.EMPTY);
}));

(frontend.components.block.build_block_renderer_match_context.cljs$core$IFn$_invoke$arity$3 = (function (block,include_children_QMARK_,child_uuids){
var uuid_str = (function (){var G__50280 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if((G__50280 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50280));
}
})();
var page_title = (function (){var or__5142__auto__ = (function (){var G__50282 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block);
if((G__50282 == null)){
return null;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(G__50282);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(frontend.util.entity.page_QMARK_(block))){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
} else {
return null;
}
}
})();
var properties_map = (cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__50284){
var vec__50285 = p__50284;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50285,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50285,(1),null);
if(((cljs.core.qualified_keyword_QMARK_(k)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
}),block)):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50289){
var vec__50291 = p__50289;
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50291,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50291,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050));
}),new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block))));
var children = (cljs.core.truth_(include_children_QMARK_)?frontend.components.block.build_block_renderer_children_props(child_uuids):null);
var props = (function (){var G__50294 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blockId","blockId",-1419159445),uuid_str,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50296){
var vec__50297 = p__50296;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50297,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50297,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),(1)),frontend.handler.plugin.serialize_property_value_for_plugin(v)], null);
}),properties_map))], null);
var G__50294__$1 = (cljs.core.truth_(uuid_str)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50294,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid_str):G__50294);
var G__50294__$2 = (cljs.core.truth_(page_title)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50294__$1,new cljs.core.Keyword(null,"page","page",849072397),page_title):G__50294__$1);
var G__50294__$3 = (cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50294__$2,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)):G__50294__$2);
var G__50294__$4 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50294__$3,new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)))):G__50294__$3);
if(cljs.core.truth_(include_children_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50294__$4,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return G__50294__$4;
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),uuid_str,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid_str,new cljs.core.Keyword(null,"page","page",849072397),page_title,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"format","format",-1306924766),(function (){var G__50301 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
if((G__50301 == null)){
return null;
} else {
return cljs.core.name(G__50301);
}
})(),new cljs.core.Keyword(null,"properties-map","properties-map",-1636902782),properties_map,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.clj__GT_js(props)], null);
}));

(frontend.components.block.build_block_renderer_match_context.cljs$lang$maxFixedArity = 3);

frontend.components.block.block_renderer_supported_view_QMARK_ = (function frontend$components$block$block_renderer_supported_view_QMARK_(p__50303,property_QMARK_,table_QMARK_){
var map__50304 = p__50303;
var map__50304__$1 = cljs.core.__destructure_map(map__50304);
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50304__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
return ((cljs.core.not(sidebar_QMARK_)) && (((cljs.core.not(property_QMARK_)) && (cljs.core.not(table_QMARK_)))));
});
frontend.components.block.block_renderer_display_mode = (function frontend$components$block$block_renderer_display_mode(p__50307){
var map__50308 = p__50307;
var map__50308__$1 = cljs.core.__destructure_map(map__50308);
var matched_block_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50308__$1,new cljs.core.Keyword(null,"matched-block-renderer","matched-block-renderer",-1783554139));
var use_plugin_renderer_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50308__$1,new cljs.core.Keyword(null,"use-plugin-renderer?","use-plugin-renderer?",1758903451));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50308__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var plugin_renderer_error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50308__$1,new cljs.core.Keyword(null,"plugin-renderer-error?","plugin-renderer-error?",1707865070));
if(cljs.core.truth_((function (){var and__5140__auto__ = matched_block_renderer;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = use_plugin_renderer_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.not(editing_QMARK_)) && (cljs.core.not(plugin_renderer_error_QMARK_)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword(null,"plugin","plugin",-1688841923);
} else {
return new cljs.core.Keyword(null,"outline","outline",793464534);
}
});
frontend.components.block.show_block_renderer_plugin_toggle_QMARK_ = (function frontend$components$block$show_block_renderer_plugin_toggle_QMARK_(display_mode,p__50311){
var map__50312 = p__50311;
var map__50312__$1 = cljs.core.__destructure_map(map__50312);
var matched_block_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword(null,"matched-block-renderer","matched-block-renderer",-1783554139));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
return cljs.core.boolean$((function (){var and__5140__auto__ = matched_block_renderer;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(editing_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outline","outline",793464534),display_mode)));
} else {
return and__5140__auto__;
}
})());
});
frontend.components.block.show_block_renderer_outline_toggle_QMARK_ = (function frontend$components$block$show_block_renderer_outline_toggle_QMARK_(display_mode){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin","plugin",-1688841923),display_mode);
});
frontend.components.block.setup_plugin_renderer_effects_BANG_ = (function (){var render_fn__31744__auto__ = (function frontend$components$block$setup_plugin_renderer_effects_BANG_(editing_QMARK_,switch_to_plugin_renderer_BANG_){
var _STAR_previous_editing_QMARK_ = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(editing_QMARK_) : logseq.shui.hooks.use_ref.call(null,editing_QMARK_));
logseq.shui.hooks.use_effect_BANG_((function (){
var previous_editing_QMARK__51471 = _STAR_previous_editing_QMARK_.current;
if(cljs.core.truth_((function (){var and__5140__auto__ = previous_editing_QMARK__51471;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(editing_QMARK_);
} else {
return and__5140__auto__;
}
})())){
(switch_to_plugin_renderer_BANG_.cljs$core$IFn$_invoke$arity$0 ? switch_to_plugin_renderer_BANG_.cljs$core$IFn$_invoke$arity$0() : switch_to_plugin_renderer_BANG_.call(null));
} else {
}

(_STAR_previous_editing_QMARK_.current = editing_QMARK_);

return (function (){
return null;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editing_QMARK_], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$setup_plugin_renderer_effects_BANG___delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50318 = cljs.core.first(args__31746__auto__);
var G__50319 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50318,G__50319) : io.factorhouse.hsx.core.obj_get.call(null,G__50318,G__50319));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"setup-plugin-renderer-effects!","setup-plugin-renderer-effects!",-1825504259,null),args__31746__auto__),frontend$components$block$setup_plugin_renderer_effects_BANG_,args__31746__auto__,null);
}
};
var frontend$components$block$setup_plugin_renderer_effects_BANG_ = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51474__i = 0, G__51474__a = new Array(arguments.length -  0);
while (G__51474__i < G__51474__a.length) {G__51474__a[G__51474__i] = arguments[G__51474__i + 0]; ++G__51474__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51474__a,0,null);
} 
return frontend$components$block$setup_plugin_renderer_effects_BANG___delegate.call(this,args__31746__auto__);};
frontend$components$block$setup_plugin_renderer_effects_BANG_.cljs$lang$maxFixedArity = 0;
frontend$components$block$setup_plugin_renderer_effects_BANG_.cljs$lang$applyTo = (function (arglist__51475){
var args__31746__auto__ = cljs.core.seq(arglist__51475);
return frontend$components$block$setup_plugin_renderer_effects_BANG___delegate(args__31746__auto__);
});
frontend$components$block$setup_plugin_renderer_effects_BANG_.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$setup_plugin_renderer_effects_BANG___delegate;
return frontend$components$block$setup_plugin_renderer_effects_BANG_;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50321 = comp__31745__auto__;
var G__50322 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50321,G__50322) : io.factorhouse.hsx.core.react_memo.call(null,G__50321,G__50322));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"setup-plugin-renderer-effects!");

return comp__31745__auto__;
})();
frontend.components.block.block_renderer_hides_outline_children_QMARK_ = (function frontend$components$block$block_renderer_hides_outline_children_QMARK_(display_mode,p__50324){
var map__50325 = p__50324;
var map__50325__$1 = cljs.core.__destructure_map(map__50325);
var matched_block_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50325__$1,new cljs.core.Keyword(null,"matched-block-renderer","matched-block-renderer",-1783554139));
return cljs.core.boolean$(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin","plugin",-1688841923),display_mode)) && (new cljs.core.Keyword(null,"include-children","include-children",-2064494275).cljs$core$IFn$_invoke$arity$1(matched_block_renderer) === true)));
});
frontend.components.block.block_renderer_outline_view = (function frontend$components$block$block_renderer_outline_view(config,block,child_uuids,uuid,title,table_QMARK_,property_QMARK_,edit_input_id,editing_QMARK_,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,page_icon,block_id,collapsed_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.w-full","div.flex.flex-col.w-full",-128137162),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-main-content.flex.flex-row.gap-2","div.block-main-content.flex.flex-row.gap-2",-1097214010),(cljs.core.truth_(page_icon)?page_icon:null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.w-full","div.flex.flex-col.w-full",-128137162),(function (){var comments_area_QMARK_ = frontend.components.block.comments_model.comments_area_QMARK_(block);
var parsed_block = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$3(uuid,cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),title)], 0));
var hide_block_refs_count_QMARK_ = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parsed_block),new cljs.core.Keyword(null,"embed-id","embed-id",717000009).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return table_QMARK_;
}
})();
if(comments_area_QMARK_){
return frontend.components.block.comments.comments_area_view(config,block,child_uuids,collapsed_QMARK_,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-content-or-editor","block-content-or-editor",-1996059595),frontend.components.block.block_content_or_editor,new cljs.core.Keyword(null,"block-reactions","block-reactions",76584951),frontend.components.block.reaction.block_reactions], null),cljs.core.PersistentArrayMap.EMPTY);
} else {
return frontend.components.block.block_content_or_editor(config,parsed_block,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"edit-input-id","edit-input-id",-1876858101),edit_input_id,new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id,new cljs.core.Keyword(null,"edit?","edit?",-842131310),editing_QMARK_,new cljs.core.Keyword(null,"*hide-block-refs?","*hide-block-refs?",-1362658712),_STAR_hide_block_refs_QMARK_,new cljs.core.Keyword(null,"hide-block-refs-count?","hide-block-refs-count?",-1723688145),hide_block_refs_count_QMARK_,new cljs.core.Keyword(null,"*show-query?","*show-query?",279819510),_STAR_show_query_QMARK_], null));
}
})()], null)], null),((((cljs.core.not(collapsed_QMARK_)) && (((cljs.core.not((function (){var or__5142__auto__ = table_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property_QMARK_;
}
})())) && (((cljs.core.not(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config))) && (cljs.core.not(new cljs.core.Keyword(null,"library?","library?",1697356991).cljs$core$IFn$_invoke$arity$1(config)))))))))?frontend.components.block.block_positioned_properties(config,block,new cljs.core.Keyword(null,"block-below","block-below",1808846787)):null),(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(config);
}
})())?null:frontend.components.block.reaction.block_reactions(block))], null);
});
frontend.components.block.block_renderer_error_boundary = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_renderer_error_boundary(p__50335,view){
var map__50336 = p__50335;
var map__50336__$1 = cljs.core.__destructure_map(map__50336);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50336__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var fallback_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50336__$1,new cljs.core.Keyword(null,"fallback-view","fallback-view",-2049869278));
return frontend.ui.error_boundary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fallback","fallback",761637929),cljs.core.constantly(fallback_view),new cljs.core.Keyword(null,"onError","onError",1669791984),(function (error,_component_stack,_event_id){
if(cljs.core.truth_(on_error)){
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(error) : on_error.call(null,error));
} else {
return null;
}
})], null),view);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_renderer_error_boundary__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50337 = cljs.core.first(args__31746__auto__);
var G__50338 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50337,G__50338) : io.factorhouse.hsx.core.obj_get.call(null,G__50337,G__50338));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-renderer-error-boundary","block-renderer-error-boundary",-822257552,null),args__31746__auto__),frontend$components$block$block_renderer_error_boundary,args__31746__auto__,null);
}
};
var frontend$components$block$block_renderer_error_boundary = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51483__i = 0, G__51483__a = new Array(arguments.length -  0);
while (G__51483__i < G__51483__a.length) {G__51483__a[G__51483__i] = arguments[G__51483__i + 0]; ++G__51483__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51483__a,0,null);
} 
return frontend$components$block$block_renderer_error_boundary__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_renderer_error_boundary.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_renderer_error_boundary.cljs$lang$applyTo = (function (arglist__51484){
var args__31746__auto__ = cljs.core.seq(arglist__51484);
return frontend$components$block$block_renderer_error_boundary__delegate(args__31746__auto__);
});
frontend$components$block$block_renderer_error_boundary.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_renderer_error_boundary__delegate;
return frontend$components$block$block_renderer_error_boundary;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50340 = comp__31745__auto__;
var G__50341 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50340,G__50341) : io.factorhouse.hsx.core.react_memo.call(null,G__50340,G__50341));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-renderer-error-boundary");

return comp__31745__auto__;
})();
frontend.components.block.block_container_inner_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_container_inner_aux(container_state,repo,config_STAR_,block,p__50347){
var map__50348 = p__50347;
var map__50348__$1 = cljs.core.__destructure_map(map__50348);
var opts = map__50348__$1;
var child_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"child-uuids","child-uuids",1901853269));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var navigated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"navigated?","navigated?",359191896));
var navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122));
var render_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"render-children","render-children",1702487194));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var current_block_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),frontend.state.get_current_page());
var embed_self_QMARK_ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config_STAR_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config_STAR_)));
} else {
return and__5140__auto__;
}
})();
var default_hide_QMARK_ = ((cljs.core.not((function (){var and__5140__auto__ = current_block_page_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.not(embed_self_QMARK_);
if(and__5140__auto____$1){
return frontend.state.auto_expand_block_refs_QMARK_();
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config_STAR_))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))))));
var _STAR_ref = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_hide_block_refs_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_hide_QMARK_);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_show_query_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_plugin_renderer_error_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_use_plugin_renderer_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}),cljs.core.PersistentVector.EMPTY);
var vec__50349 = logseq.shui.hooks.use_atom(_STAR_show_query_QMARK_);
var show_query_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50349,(0),null);
var vec__50352 = logseq.shui.hooks.use_atom(_STAR_plugin_renderer_error_QMARK_);
var plugin_renderer_error_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50352,(0),null);
var vec__50355 = logseq.shui.hooks.use_atom(_STAR_use_plugin_renderer_QMARK_);
var use_plugin_renderer_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50355,(0),null);
var vec__50358 = logseq.shui.hooks.use_atom(_STAR_hide_block_refs_QMARK_);
var hide_block_refs_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50358,(0),null);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())){
var temp__5825__auto__ = cljs.core.deref(_STAR_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
node.addEventListener("touchmove",frontend.handler.block.on_touch_move);

return (function (){
return node.removeEventListener("touchmove",frontend.handler.block.on_touch_move);
});
} else {
return null;
}
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);
var switch_to_plugin_renderer_BANG_ = (function (){
cljs.core.reset_BANG_(_STAR_plugin_renderer_error_QMARK_,false);

return cljs.core.reset_BANG_(_STAR_use_plugin_renderer_QMARK_,true);
});
var switch_to_outline_view_BANG_ = (function (){
cljs.core.reset_BANG_(_STAR_plugin_renderer_error_QMARK_,false);

return cljs.core.reset_BANG_(_STAR_use_plugin_renderer_QMARK_,false);
});
var set_plugin_renderer_error_BANG_ = (function (p1__50343_SHARP_){
return cljs.core.reset_BANG_(_STAR_plugin_renderer_error_QMARK_,p1__50343_SHARP_);
});
var vec__50361 = frontend.components.block.build_block(config_STAR_,block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),navigating_block,new cljs.core.Keyword(null,"navigated?","navigated?",359191896),navigated_QMARK_], null));
var original_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50361,(0),null);
var block__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50361,(1),null);
var _mounted_block_effect = logseq.shui.hooks.use_layout_effect_BANG_((function (){
var temp__5825__auto__ = cljs.core.deref(_STAR_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return frontend.components.block.goog$module$goog$object.set(node,"__logseqBlock",block__$1);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1], null));
var config_STAR___$1 = (cljs.core.truth_(original_block)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config_STAR_,new cljs.core.Keyword(null,"original-block","original-block",1808045862),original_block):config_STAR_);
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config_STAR___$1);
var edit_input_id = (""+"edit-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1)));
var container_id = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config_STAR___$1);
var table_QMARK_ = new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config_STAR___$1);
var property_QMARK_ = new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(config_STAR___$1);
var custom_query_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config_STAR___$1));
var _STAR_navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(container_state,new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175));
var map__50364 = block__$1;
var map__50364__$1 = cljs.core.__destructure_map(map__50364);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50364__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50364__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var config = frontend.components.block.build_config(config_STAR___$1,block__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigated?","navigated?",359191896),navigated_QMARK_,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),navigating_block], null));
var level = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_control_show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(container_state,new cljs.core.Keyword("frontend.components.block","control-show?","frontend.components.block/control-show?",1638613539));
var temp_collapsed_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),frontend.state.get_current_repo(),frontend.state.resolve_container_id(container_id),uuid], null));
var collapsed_QMARK_ = frontend.components.block.block_collapsed_QMARK_(config,block__$1,temp_collapsed_QMARK_);
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),collapsed_QMARK_);
var breadcrumb_show_QMARK_ = new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369).cljs$core$IFn$_invoke$arity$1(config__$1);
var doc_mode_QMARK_ = new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config__$1);
var embed_QMARK_ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config__$1);
var page_embed_QMARK_ = new cljs.core.Keyword(null,"page-embed?","page-embed?",-1714518279).cljs$core$IFn$_invoke$arity$1(config__$1);
var reference_QMARK_ = new cljs.core.Keyword(null,"reference?","reference?",983881698).cljs$core$IFn$_invoke$arity$1(config__$1);
var block_id = (""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
var has_child_QMARK_ = cljs.core.boolean$((function (){var or__5142__auto__ = cljs.core.seq(child_uuids);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})());
var top_QMARK_ = new cljs.core.Keyword(null,"top?","top?",-1883283796).cljs$core$IFn$_invoke$arity$1(config__$1);
var original_block__$1 = new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(config__$1);
var attrs = frontend.components.block.on_drag_and_mouse_attrs(block__$1,original_block__$1,uuid,top_QMARK_,block_id,frontend.components.block._STAR_move_to);
var own_number_list_QMARK_ = new cljs.core.Keyword(null,"own-order-number-list?","own-order-number-list?",2048042976).cljs$core$IFn$_invoke$arity$1(config__$1);
var order_list_QMARK_ = cljs.core.boolean$(own_number_list_QMARK_);
var comments_area_QMARK_ = frontend.components.block.comments_model.comments_area_QMARK_(block__$1);
var inline_thread = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("comments","inline-thread","comments/inline-thread",2063931272)], null));
var inline_comment_thread_uuid = ((comments_area_QMARK_)?null:frontend.components.block.selected_inline_comment_thread_uuid(inline_thread,uuid));
var page_icon = (cljs.core.truth_(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1))?(function (){var icon_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
var temp__5825__auto__ = (function (){var and__5140__auto__ = frontend.util.entity.page_QMARK_(block__$1);
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = icon_SINGLEQUOTE_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.some(new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block__$1));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (cljs.core.truth_(frontend.util.entity.class_QMARK_(block__$1))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),new cljs.core.Keyword(null,"id","id",-1388402092),"hash"], null):null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
if(cljs.core.truth_(frontend.util.entity.property_QMARK_(block__$1))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tabler-icon","tabler-icon",945975358),new cljs.core.Keyword(null,"id","id",-1388402092),"letter-p"], null);
} else {
return null;
}
}
}
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var icon = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-page-icon.flex.self-start","div.ls-page-icon.flex.self-start",-921491236),frontend.components.icon.icon_picker(icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_e,icon__$1){
if(cljs.core.truth_(icon__$1)){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),cljs.core.select_keys(icon__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color","color",1011675173)], null)));
} else {
return frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
}
}),new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),cljs.core.boolean$(icon_SINGLEQUOTE_),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"1lh",new cljs.core.Keyword(null,"height","height",1025178622),"1lh",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1);
} else {
return and__5140__auto__;
}
})())?(24):(cljs.core.truth_(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1))?(38):(18)
))], null)], null)], null))], null);
} else {
return null;
}
})():null);
var block_renderer_base_match_context = (cljs.core.truth_((function (){var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((frontend.handler.plugin.any_block_renderers_QMARK_()) && (frontend.components.block.block_renderer_supported_view_QMARK_(config__$1,property_QMARK_,table_QMARK_)));
} else {
return and__5140__auto__;
}
})())?frontend.components.block.build_block_renderer_match_context.cljs$core$IFn$_invoke$arity$3(block__$1,false,child_uuids):null);
var matched_block_renderer = (cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(block_renderer_base_match_context);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(editing_QMARK_);
} else {
return and__5140__auto__;
}
})())?frontend.handler.plugin.get_matched_block_renderer(block_renderer_base_match_context):null);
var block_renderer_match_context = ((new cljs.core.Keyword(null,"include-children","include-children",-2064494275).cljs$core$IFn$_invoke$arity$1(matched_block_renderer) === true)?frontend.components.block.build_block_renderer_match_context.cljs$core$IFn$_invoke$arity$3(block__$1,true,child_uuids):block_renderer_base_match_context);
var block_renderer_props_js = new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(block_renderer_match_context);
var renderer_display_mode = frontend.components.block.block_renderer_display_mode(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"matched-block-renderer","matched-block-renderer",-1783554139),matched_block_renderer,new cljs.core.Keyword(null,"use-plugin-renderer?","use-plugin-renderer?",1758903451),use_plugin_renderer_QMARK_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_,new cljs.core.Keyword(null,"plugin-renderer-error?","plugin-renderer-error?",1707865070),plugin_renderer_error_QMARK_], null));
var switch_to_plugin_renderer_title = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(plugin_renderer_error_QMARK_)?new cljs.core.Keyword("block","retry-plugin-renderer","block/retry-plugin-renderer",-978844716):new cljs.core.Keyword("block","switch-to-plugin-renderer","block/switch-to-plugin-renderer",158735492))], 0));
var switch_to_outline_view_title = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","switch-to-outline-view","block/switch-to-outline-view",-1647351973)], 0));
var outline_view_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.w-full","div.flex.flex-col.w-full",-128137162),frontend.components.block.block_renderer_outline_view(config__$1,block__$1,child_uuids,uuid,title,table_QMARK_,property_QMARK_,edit_input_id,editing_QMARK_,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,page_icon,block_id,collapsed_QMARK_),((frontend.components.block.show_block_renderer_plugin_toggle_QMARK_(renderer_display_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matched-block-renderer","matched-block-renderer",-1783554139),matched_block_renderer,new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_], null)))?(function (){var G__50383 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996),"self-start h-5 w-5 opacity-20 hover:opacity-70",new cljs.core.Keyword(null,"title","title",636505583),switch_to_plugin_renderer_title,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),switch_to_plugin_renderer_title,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return switch_to_plugin_renderer_BANG_();
})], null);
var G__50384 = logseq.shui.ui.tabler_icon("puzzle-piece",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(13)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__50383,G__50384) : logseq.shui.ui.button.call(null,G__50383,G__50384));
})():null)], null);
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-block.swipe-item","div.ls-block.swipe-item",632156087),(function (){var G__50385 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"data-block-title","data-block-title",1434049728),new cljs.core.Keyword(null,"haschild","haschild",1809599360),new cljs.core.Keyword(null,"data-is-property","data-is-property",584873025),new cljs.core.Keyword(null,"on-touch-cancel","on-touch-cancel",1125389250),new cljs.core.Keyword(null,"data-comment-item","data-comment-item",-755489084),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"data-comments-area","data-comments-area",1729329448),new cljs.core.Keyword(null,"blockid","blockid",-664467760),new cljs.core.Keyword(null,"data-collapsed","data-collapsed",1225882164),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"containerid","containerid",-1132769612),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"data-db-collapsable","data-db-collapsable",-2022097290),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),new cljs.core.Keyword(null,"data-block-format","data-block-format",1923018687)],[new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block__$1),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(has_child_QMARK_)),frontend.util.entity.property_QMARK_(block__$1),(function (e){
return frontend.handler.block.on_touch_cancel(e);
}),frontend.components.block.comments_model.comment_block_QMARK_(block__$1),(function (p1__50345_SHARP_){
if((cljs.core.deref(_STAR_ref) == null)){
return cljs.core.reset_BANG_(_STAR_ref,p1__50345_SHARP_);
} else {
return null;
}
}),comments_area_QMARK_,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),(function (){var and__5140__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return has_child_QMARK_;
} else {
return and__5140__auto__;
}
})(),(""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),container_id,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(selected_QMARK_)?"selected":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(block__$1) : logseq.db.recycled_QMARK_.call(null,block__$1)))?" line-through opacity-70":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((order_list_QMARK_)?" is-order-list":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((comments_area_QMARK_)?" is-comments-area":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(title))?" is-blank":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(original_block__$1)?" embed-block":null))),cljs.core.boolean$(frontend.handler.editor.db_collapsable_QMARK_(block__$1)),(function (event,uuid__$1){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.deref(frontend.components.block._STAR_dragging_QMARK_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.editing_QMARK_();
}
})())){
return null;
} else {
return frontend.handler.block.on_touch_start(event,uuid__$1);
}
}),(function (event){
if(cljs.core.truth_(cljs.core.deref(frontend.components.block._STAR_dragging_QMARK_))){
} else {
frontend.handler.block.on_touch_end(event);
}

return cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,false);
}),cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$3(block__$1,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)))]);
var G__50385__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.capacitor_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(frontend.util.entity.page_QMARK_(block__$1))) && ((!(frontend.components.block.comments_model.comment_block_QMARK_(block__$1)))));
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50385,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (event){
if(frontend.state.editing_QMARK_()){
return null;
} else {
frontend.util.stop_propagation(event);

var target = event.target;
var blocks = (function (){var or__5142__auto__ = cljs.core.seq(frontend.state.get_selection_blocks());
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
}
})();
var multiple_QMARK_ = (cljs.core.count(blocks) > (1));
var element = ((multiple_QMARK_)?(function (){var element = dommy.core.create_element.cljs$core$IFn$_invoke$arity$1("div");
dommy.core.set_class_BANG_(dommy.core.set_text_BANG_(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(element,"id","dragging-ghost-element"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","moving-blocks-count","editor/moving-blocks-count",877286422),cljs.core.count(blocks)], 0))),"p-2 rounded text-sm");

return element;
})():null);
var seq__50388_51499 = cljs.core.seq(blocks);
var chunk__50389_51500 = null;
var count__50390_51501 = (0);
var i__50391_51502 = (0);
while(true){
if((i__50391_51502 < count__50390_51501)){
var block_51503__$2 = chunk__50389_51500.cljs$core$IIndexed$_nth$arity$2(null,i__50391_51502);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block_51503__$2,"dragging");


var G__51504 = seq__50388_51499;
var G__51505 = chunk__50389_51500;
var G__51506 = count__50390_51501;
var G__51507 = (i__50391_51502 + (1));
seq__50388_51499 = G__51504;
chunk__50389_51500 = G__51505;
count__50390_51501 = G__51506;
i__50391_51502 = G__51507;
continue;
} else {
var temp__5825__auto___51508 = cljs.core.seq(seq__50388_51499);
if(temp__5825__auto___51508){
var seq__50388_51509__$1 = temp__5825__auto___51508;
if(cljs.core.chunked_seq_QMARK_(seq__50388_51509__$1)){
var c__5673__auto___51510 = cljs.core.chunk_first(seq__50388_51509__$1);
var G__51511 = cljs.core.chunk_rest(seq__50388_51509__$1);
var G__51512 = c__5673__auto___51510;
var G__51513 = cljs.core.count(c__5673__auto___51510);
var G__51514 = (0);
seq__50388_51499 = G__51511;
chunk__50389_51500 = G__51512;
count__50390_51501 = G__51513;
i__50391_51502 = G__51514;
continue;
} else {
var block_51515__$2 = cljs.core.first(seq__50388_51509__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block_51515__$2,"dragging");


var G__51516 = cljs.core.next(seq__50388_51509__$1);
var G__51517 = null;
var G__51518 = (0);
var G__51519 = (0);
seq__50388_51499 = G__51516;
chunk__50389_51500 = G__51517;
count__50390_51501 = G__51518;
i__50391_51502 = G__51519;
continue;
}
} else {
}
}
break;
}

frontend.components.block.on_drag_start(event,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block__$1;
}
})(),block_id);

if(cljs.core.truth_(element)){
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(document.body,element);

return frontend.handler.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$4(event,element,(target.offsetWidth / (2)),(target.offsetHeight / (2)));
} else {
return null;
}
}
})], 0)):G__50385);
var G__50385__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"property-default-value?","property-default-value?",769811896).cljs$core$IFn$_invoke$arity$1(config__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50385__$1,new cljs.core.Keyword(null,"data-is-property-default-value","data-is-property-default-value",-2109075218),new cljs.core.Keyword(null,"property-default-value?","property-default-value?",769811896).cljs$core$IFn$_invoke$arity$1(config__$1)):G__50385__$1);
var G__50385__$3 = (cljs.core.truth_(original_block__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50385__$2,new cljs.core.Keyword(null,"originalblockid","originalblockid",1038951526),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(original_block__$1)))):G__50385__$2);
var G__50385__$4 = (cljs.core.truth_(level)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50385__$3,new cljs.core.Keyword(null,"level","level",1290497552),level):G__50385__$3);
var G__50385__$5 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__50385__$4,attrs], 0))
;
var G__50385__$6 = (cljs.core.truth_((function (){var or__5142__auto__ = reference_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = embed_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(page_embed_QMARK_);
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50385__$5,new cljs.core.Keyword(null,"data-transclude","data-transclude",-1499995699),true):G__50385__$5);
var G__50385__$7 = (cljs.core.truth_(embed_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50385__$6,new cljs.core.Keyword(null,"data-embed","data-embed",-1493193393),true):G__50385__$6);
if(custom_query_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50385__$7,new cljs.core.Keyword(null,"data-query","data-query",369270450),true);
} else {
return G__50385__$7;
}
})(),(cljs.core.truth_((function (){var and__5140__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = breadcrumb_show_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not((function (){var or__5142__auto__ = table_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property_QMARK_;
}
})());
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?frontend.components.block.breadcrumb.breadcrumb(config__$1,repo,uuid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"show-page?","show-page?",792494155),false,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block,new cljs.core.Keyword(null,"block","block",664686210),block__$1], null)):null),(cljs.core.truth_((function (){var and__5140__auto__ = top_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var or__5142__auto__ = table_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property_QMARK_;
}
})());
} else {
return and__5140__auto__;
}
})())?frontend.components.block.dnd_separator_wrapper(block__$1,block_id,true):null),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-title?","hide-title?",1631018350).cljs$core$IFn$_invoke$arity$1(config__$1))?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-main-container.flex.flex-row.gap-1","div.block-main-container.flex.flex-row.gap-1",-1889768499),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1))?"is-page-title-row":null),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(frontend.util.capacitor_QMARK_())?(0):(cljs.core.truth_(page_icon)?(-36):(-30)
))], null):null),new cljs.core.Keyword(null,"data-has-heading","data-has-heading",1984007164),frontend.components.block.block_heading_level(block__$1,level),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (e){
return frontend.components.block.block_mouse_over(e,block__$1,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_,new cljs.core.Keyword("selection","block-ids","selection/block-ids",-1996881308).cljs$core$IFn$_invoke$arity$1(config__$1));
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (e){
return frontend.components.block.remember_block_pointer_BANG_(e);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (_e){
return frontend.components.block.block_mouse_leave(_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_);
})], null),((((cljs.core.not(property_QMARK_)) && (((cljs.core.not(new cljs.core.Keyword(null,"table-block-title?","table-block-title?",-1188462014).cljs$core$IFn$_invoke$arity$1(config__$1))) && (cljs.core.not(new cljs.core.Keyword(null,"hide-block-control?","hide-block-control?",1530346312).cljs$core$IFn$_invoke$arity$1(config__$1)))))))?(function (){var edit_QMARK_ = (function (){var or__5142__auto__ = editing_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()));
}
})();
return frontend.components.block.subscribed_block_control(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"hide-bullet?","hide-bullet?",-990541419),new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1)),block__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid,new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),collapsed_QMARK_,new cljs.core.Keyword(null,"*control-show?","*control-show?",-2136402257),_STAR_control_show_QMARK_,new cljs.core.Keyword(null,"edit?","edit?",-842131310),edit_QMARK_], null)], 0)));
})():null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin","plugin",-1688841923),renderer_display_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-renderer-container.flex.flex-col.w-full","div.block-renderer-container.flex.flex-col.w-full",803164885),((frontend.components.block.show_block_renderer_outline_toggle_QMARK_(renderer_display_mode))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-renderer-action-bar","div.block-renderer-action-bar",591631147),(function (){var G__50431 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"class","class",-2030961996),"block-renderer-action-btn h-6 w-6",new cljs.core.Keyword(null,"title","title",636505583),switch_to_outline_view_title,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),switch_to_outline_view_title,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return switch_to_outline_view_BANG_();
})], null);
var G__50432 = logseq.shui.ui.tabler_icon("list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(13)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__50431,G__50432) : logseq.shui.ui.button.call(null,G__50431,G__50432));
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-block-plugin-renderer","div.ls-block-plugin-renderer",1372497144),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.block_renderer_error_boundary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (_error){
return set_plugin_renderer_error_BANG_(true);
}),new cljs.core.Keyword(null,"fallback-view","fallback-view",-2049869278),outline_view_cp], null),(function (){var temp__5829__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(matched_block_renderer);
if((temp__5829__auto__ == null)){
return null;
} else {
var renderer = temp__5829__auto__;
return module$node_modules$react$index.createElement(renderer,block_renderer_props_js);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"block-renderer-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(matched_block_renderer))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))], null))], null)], null):outline_view_cp),(((((!(comments_area_QMARK_))) && ((((!(frontend.components.block.comments_model.protected_comment_block_QMARK_(block__$1)))) && (((cljs.core.not(table_QMARK_)) && (cljs.core.not(property_QMARK_))))))))?frontend.components.block.block_comment_thread_button(uuid):null)], null)),(cljs.core.truth_(inline_comment_thread_uuid)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-inline-comments","div.ls-inline-comments",-1146422666),(cljs.core.truth_(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-block-content-indent"], null)),frontend.components.block.subscribed_comment_area(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684),frontend.components.block.comments_model.inline_comment_container_id(new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config__$1))),inline_comment_thread_uuid,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-content-or-editor","block-content-or-editor",-1996059595),frontend.components.block.block_content_or_editor,new cljs.core.Keyword(null,"block-reactions","block-reactions",76584951),frontend.components.block.reaction.block_reactions], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739),true,new cljs.core.Keyword(null,"inline?","inline?",-1674483791),true], null))], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword(null,"library?","library?",1697356991).cljs$core$IFn$_invoke$arity$1(config__$1));
if(and__5140__auto__){
var or__5142__auto__ = new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.not(collapsed_QMARK_)) && (cljs.core.not((function (){var or__5142__auto____$1 = table_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return property_QMARK_;
}
})())));
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-block-content-indent"], null)),frontend.components.block.db_properties_cp(config__$1,block__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in-block-container?","in-block-container?",460158400),true,new cljs.core.Keyword(null,"skip-bidirectional-properties?","skip-bidirectional-properties?",-1547429475),new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1)], null))], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = show_query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config__$1));
} else {
return and__5140__auto__;
}
})())?(function (){var query_QMARK_ = frontend.components.block.query_block_QMARK_(block__$1);
var query = new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block__$1);
var advanced_query_QMARK_ = (function (){var and__5140__auto__ = query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(query));
} else {
return and__5140__auto__;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-6.my-1","div.ml-6.my-1",-1611549717),(cljs.core.truth_(advanced_query_QMARK_)?(function (){var G__50438 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),query);
var G__50439 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null);
return (frontend.components.block.src_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.src_cp.cljs$core$IFn$_invoke$arity$2(G__50438,G__50439) : frontend.components.block.src_cp.call(null,G__50438,G__50439));
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-75.ml-5.text-sm.mb-1","div.opacity-75.ml-5.text-sm.mb-1",-911928993),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","set-query-label","block/set-query-label",1321836458)], 0))], null),(frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2(config__$1,query) : frontend.components.block.block_container.call(null,config__$1,query))], null))], null);
})():null),((((cljs.core.not((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(config__$1);
}
})())) && (((cljs.core.not(hide_block_refs_QMARK_)) && (cljs.core.not(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config__$1)))))))?frontend.components.block.block_linked_references(block__$1):null),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(collapsed_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.not((function (){var or__5142__auto__ = table_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property_QMARK_;
}
})());
if(and__5140__auto____$1){
return frontend.components.block.query_block_QMARK_(block__$1);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?(function (){var query_block = new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(query_block)){
return frontend.components.block.query_result(config__$1,block__$1,query_block);
} else {
return null;
}
})():null),(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"hide-children?","hide-children?",-2104598603).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.util.entity.leaf_property_value_QMARK_(block__$1);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = table_QMARK_;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = property_QMARK_;
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return ((comments_area_QMARK_) || (frontend.components.block.block_renderer_hides_outline_children_QMARK_(renderer_display_mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"matched-block-renderer","matched-block-renderer",-1783554139),matched_block_renderer], null))));
}
}
}
}
})())?null:(function (){var config_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.inc),new cljs.core.Keyword(null,"original-block","original-block",1808045862),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
return frontend.components.block.block_children(config_SINGLEQUOTE_,block__$1,child_uuids,collapsed_QMARK_,render_children);
})()),(cljs.core.truth_((function (){var or__5142__auto__ = table_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property_QMARK_;
}
})())?null:frontend.components.block.dnd_separator_wrapper(block__$1,block_id,false)),(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)?frontend.components.block.setup_plugin_renderer_effects_BANG_(editing_QMARK_,switch_to_plugin_renderer_BANG_):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_container_inner_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50445 = cljs.core.first(args__31746__auto__);
var G__50446 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50445,G__50446) : io.factorhouse.hsx.core.obj_get.call(null,G__50445,G__50446));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"block-container-inner-aux","block-container-inner-aux",1530144654,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$block$block_container_inner_aux,args__31746__auto__,null);
}
};
var frontend$components$block$block_container_inner_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51536__i = 0, G__51536__a = new Array(arguments.length -  0);
while (G__51536__i < G__51536__a.length) {G__51536__a[G__51536__i] = arguments[G__51536__i + 0]; ++G__51536__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51536__a,0,null);
} 
return frontend$components$block$block_container_inner_aux__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_container_inner_aux.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_container_inner_aux.cljs$lang$applyTo = (function (arglist__51537){
var args__31746__auto__ = cljs.core.seq(arglist__51537);
return frontend$components$block$block_container_inner_aux__delegate(args__31746__auto__);
});
frontend$components$block$block_container_inner_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_container_inner_aux__delegate;
return frontend$components$block$block_container_inner_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50448 = comp__31745__auto__;
var G__50449 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50448,G__50449) : io.factorhouse.hsx.core.react_memo.call(null,G__50448,G__50449));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-container-inner-aux");

return comp__31745__auto__;
})();
frontend.components.block.same_block_revision_QMARK_ = (function frontend$components$block$same_block_revision_QMARK_(previous_block,next_block){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(previous_block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(next_block))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tx-id","block/tx-id",547556161).cljs$core$IFn$_invoke$arity$1(previous_block),new cljs.core.Keyword("block","tx-id","block/tx-id",547556161).cljs$core$IFn$_invoke$arity$1(next_block))));
});
frontend.components.block.block_container_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$block$block_container_inner(container_state,repo,config_STAR_,block,opts){
var container_id = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config_STAR_);
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var v1 = cljs.core.boolean$(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [container_id,block_id], null)], null)));
var v2 = cljs.core.boolean$(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473),block_id], null)], null)));
var selected_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selection","block-selected?","selection/block-selected?",-267929369),block_id], null));
var editing_QMARK_ = ((v1) || (v2));
return frontend.components.block.block_container_inner_aux(container_state,repo,config_STAR_,block,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_], 0)));
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_container_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50455 = cljs.core.first(args__31746__auto__);
var G__50456 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50455,G__50456) : io.factorhouse.hsx.core.obj_get.call(null,G__50455,G__50456));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-container-inner","block-container-inner",1906331959,null),args__31746__auto__),frontend$components$block$block_container_inner,args__31746__auto__,null);
}
};
var frontend$components$block$block_container_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51540__i = 0, G__51540__a = new Array(arguments.length -  0);
while (G__51540__i < G__51540__a.length) {G__51540__a[G__51540__i] = arguments[G__51540__i + 0]; ++G__51540__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51540__a,0,null);
} 
return frontend$components$block$block_container_inner__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_container_inner.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_container_inner.cljs$lang$applyTo = (function (arglist__51541){
var args__31746__auto__ = cljs.core.seq(arglist__51541);
return frontend$components$block$block_container_inner__delegate(args__31746__auto__);
});
frontend$components$block$block_container_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_container_inner__delegate;
return frontend$components$block$block_container_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50457 = comp__31745__auto__;
var G__50458 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50457,G__50458) : io.factorhouse.hsx.core.react_memo.call(null,G__50457,G__50458));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-container-inner");

return comp__31745__auto__;
})();
frontend.components.block.set_collapsed_block_BANG_ = (function frontend$components$block$set_collapsed_block_BANG_(block_id,v,container_id){
if(v === false){
frontend.handler.editor.expand_block_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"skip-db-collpsing?","skip-db-collpsing?",106617442),true,new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null)], 0));

return frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3(block_id,v,container_id);
} else {
return frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3(block_id,v,container_id);
}
});
frontend.components.block.generated_container_id_key = (function frontend$components$block$generated_container_id_key(config,block){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-container-inner","block-container-inner",265800432),new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"page-name","page-name",974981762).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"table?","table?",-1064705406).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"view?","view?",655244230).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),(function (){var G__50463 = new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(config);
if((G__50463 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__50463);
}
})()], null);
});
frontend.components.block.resolve_block_container_id = (function frontend$components$block$resolve_block_container_id(config,block,linked_block_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(linked_block_QMARK_);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
} else {
return frontend.state.get_container_id(frontend.components.block.generated_container_id_key(config,block));
}
});
frontend.components.block.loaded_block_container_inner = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$components$block$loaded_block_container_inner__delegate = function (config,block,p__50468){
var map__50469 = p__50468;
var map__50469__$1 = cljs.core.__destructure_map(map__50469);
var opts = map__50469__$1;
var repo = frontend.state.get_current_repo();
var linked_block_QMARK_ = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(config);
}
})();
var container_id = logseq.shui.hooks.use_memo((function (){
return frontend.components.block.resolve_block_container_id(config,block,linked_block_QMARK_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),(function (){var G__50474 = new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(config);
if((G__50474 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__50474);
}
})(),linked_block_QMARK_], null));
var _STAR_control_show_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_navigating_block = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null));
var vec__50470 = logseq.shui.hooks.use_atom(_STAR_navigating_block);
var navigating_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50470,(0),null);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(new cljs.core.Keyword(null,"property-block?","property-block?",71503268).cljs$core$IFn$_invoke$arity$1(config))){
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (function (){var or__5142__auto__ = frontend.util.entity.class_QMARK_(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.entity.property_QMARK_(block);
}
})();
if(cljs.core.truth_(and__5140__auto____$1)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var collapsed_QMARK__51544 = frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$2(block_id,container_id);
frontend.components.block.set_collapsed_block_BANG_(block_id,(((!((collapsed_QMARK__51544 == null))))?collapsed_QMARK__51544:true),container_id);
} else {
if(cljs.core.truth_(frontend.components.block.root_block_QMARK_(config,block))){
frontend.components.block.set_collapsed_block_BANG_(block_id,false,container_id);
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"view?","view?",655244230).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
}
})())){
frontend.components.block.set_collapsed_block_BANG_(block_id,cljs.core.boolean$(frontend.handler.editor.block_default_collapsed_QMARK_(block,config)),container_id);
} else {

}
}
}
}

return (function (){
if(cljs.core.truth_(frontend.components.block.root_block_QMARK_(config,block))){
return frontend.components.block.set_collapsed_block_BANG_(block_id,null,container_id);
} else {
return null;
}
});
}),cljs.core.PersistentVector.EMPTY);
var navigated_QMARK_ = (function (){var and__5140__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),navigating_block);
if(and__5140__auto__){
return navigating_block;
} else {
return and__5140__auto__;
}
})();
var config_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.block_container_inner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.components.block","control-show?","frontend.components.block/control-show?",1638613539),_STAR_control_show_QMARK_,new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175),_STAR_navigating_block], null),repo,config_SINGLEQUOTE_,block,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),navigating_block,new cljs.core.Keyword(null,"navigated?","navigated?",359191896),navigated_QMARK_], null)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"block-inner-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))], null));
} else {
return null;
}
};
var frontend$components$block$loaded_block_container_inner = function (config,block,var_args){
var p__50468 = null;
if (arguments.length > 2) {
var G__51545__i = 0, G__51545__a = new Array(arguments.length -  2);
while (G__51545__i < G__51545__a.length) {G__51545__a[G__51545__i] = arguments[G__51545__i + 2]; ++G__51545__i;}
  p__50468 = new cljs.core.IndexedSeq(G__51545__a,0,null);
} 
return frontend$components$block$loaded_block_container_inner__delegate.call(this,config,block,p__50468);};
frontend$components$block$loaded_block_container_inner.cljs$lang$maxFixedArity = 2;
frontend$components$block$loaded_block_container_inner.cljs$lang$applyTo = (function (arglist__51546){
var config = cljs.core.first(arglist__51546);
arglist__51546 = cljs.core.next(arglist__51546);
var block = cljs.core.first(arglist__51546);
var p__50468 = cljs.core.rest(arglist__51546);
return frontend$components$block$loaded_block_container_inner__delegate(config,block,p__50468);
});
frontend$components$block$loaded_block_container_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$loaded_block_container_inner__delegate;
return frontend$components$block$loaded_block_container_inner;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$block$loaded_block_container_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50480 = cljs.core.first(args__31746__auto__);
var G__50481 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50480,G__50481) : io.factorhouse.hsx.core.obj_get.call(null,G__50480,G__50481));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"loaded-block-container-inner","loaded-block-container-inner",614423848,null),args__31746__auto__),frontend$components$block$loaded_block_container_inner,args__31746__auto__,null);
}
};
var frontend$components$block$loaded_block_container_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51549__i = 0, G__51549__a = new Array(arguments.length -  0);
while (G__51549__i < G__51549__a.length) {G__51549__a[G__51549__i] = arguments[G__51549__i + 0]; ++G__51549__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51549__a,0,null);
} 
return frontend$components$block$loaded_block_container_inner__delegate.call(this,args__31746__auto__);};
frontend$components$block$loaded_block_container_inner.cljs$lang$maxFixedArity = 0;
frontend$components$block$loaded_block_container_inner.cljs$lang$applyTo = (function (arglist__51550){
var args__31746__auto__ = cljs.core.seq(arglist__51550);
return frontend$components$block$loaded_block_container_inner__delegate(args__31746__auto__);
});
frontend$components$block$loaded_block_container_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$loaded_block_container_inner__delegate;
return frontend$components$block$loaded_block_container_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50483 = comp__31745__auto__;
var G__50484 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50483,G__50484) : io.factorhouse.hsx.core.react_memo.call(null,G__50483,G__50484));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"loaded-block-container-inner");

return comp__31745__auto__;
})();
frontend.components.block.unloaded_block_placeholder = (function frontend$components$block$unloaded_block_placeholder(){
return module$node_modules$react$index.createElement("div",({"style": ({"minHeight": (28)})}));
});
frontend.components.block.block_container = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$components$block$block_container__delegate = function (config,block,p__50488){
var map__50490 = p__50488;
var map__50490__$1 = cljs.core.__destructure_map(map__50490);
var opts = map__50490__$1;
var block_uuid = ((cljs.core.uuid_QMARK_(block))?block:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(block_uuid)){
var G__50491 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848));
var G__50492 = block_uuid;
var G__50493 = opts;
return (frontend.components.block.subscribed_block_row.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.subscribed_block_row.cljs$core$IFn$_invoke$arity$3(G__50491,G__50492,G__50493) : frontend.components.block.subscribed_block_row.call(null,G__50491,G__50492,G__50493));
} else {
return null;
}
};
var frontend$components$block$block_container = function (config,block,var_args){
var p__50488 = null;
if (arguments.length > 2) {
var G__51553__i = 0, G__51553__a = new Array(arguments.length -  2);
while (G__51553__i < G__51553__a.length) {G__51553__a[G__51553__i] = arguments[G__51553__i + 2]; ++G__51553__i;}
  p__50488 = new cljs.core.IndexedSeq(G__51553__a,0,null);
} 
return frontend$components$block$block_container__delegate.call(this,config,block,p__50488);};
frontend$components$block$block_container.cljs$lang$maxFixedArity = 2;
frontend$components$block$block_container.cljs$lang$applyTo = (function (arglist__51554){
var config = cljs.core.first(arglist__51554);
arglist__51554 = cljs.core.next(arglist__51554);
var block = cljs.core.first(arglist__51554);
var p__50488 = cljs.core.rest(arglist__51554);
return frontend$components$block$block_container__delegate(config,block,p__50488);
});
frontend$components$block$block_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_container__delegate;
return frontend$components$block$block_container;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$block$block_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50494 = cljs.core.first(args__31746__auto__);
var G__50495 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50494,G__50495) : io.factorhouse.hsx.core.obj_get.call(null,G__50494,G__50495));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-container","block-container",1625463292,null),args__31746__auto__),frontend$components$block$block_container,args__31746__auto__,null);
}
};
var frontend$components$block$block_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51557__i = 0, G__51557__a = new Array(arguments.length -  0);
while (G__51557__i < G__51557__a.length) {G__51557__a[G__51557__i] = arguments[G__51557__i + 0]; ++G__51557__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51557__a,0,null);
} 
return frontend$components$block$block_container__delegate.call(this,args__31746__auto__);};
frontend$components$block$block_container.cljs$lang$maxFixedArity = 0;
frontend$components$block$block_container.cljs$lang$applyTo = (function (arglist__51558){
var args__31746__auto__ = cljs.core.seq(arglist__51558);
return frontend$components$block$block_container__delegate(args__31746__auto__);
});
frontend$components$block$block_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$block_container__delegate;
return frontend$components$block$block_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50497 = comp__31745__auto__;
var G__50498 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50497,G__50498) : io.factorhouse.hsx.core.react_memo.call(null,G__50497,G__50498));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-container");

return comp__31745__auto__;
})();
frontend.components.block.divide_lists = (function frontend$components$block$divide_lists(p__50501){
var vec__50502 = p__50501;
var seq__50503 = cljs.core.seq(vec__50502);
var first__50504 = cljs.core.first(seq__50503);
var seq__50503__$1 = cljs.core.next(seq__50503);
var f = first__50504;
var l = seq__50503__$1;
var l__$1 = l;
var ordered_QMARK_ = new cljs.core.Keyword(null,"ordered","ordered",1187041426).cljs$core$IFn$_invoke$arity$1(f);
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null)], null);
while(true){
if(cljs.core.seq(l__$1)){
var cur = cljs.core.first(l__$1);
var cur_ordered_QMARK_ = new cljs.core.Keyword(null,"ordered","ordered",1187041426).cljs$core$IFn$_invoke$arity$1(cur);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ordered_QMARK_,cur_ordered_QMARK_)){
var G__51559 = cljs.core.rest(l__$1);
var G__51560 = cur_ordered_QMARK_;
var G__51561 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,(cljs.core.count(result) - (1)),cljs.core.conj,cur);
l__$1 = G__51559;
ordered_QMARK_ = G__51560;
result = G__51561;
continue;
} else {
var G__51562 = cljs.core.rest(l__$1);
var G__51563 = cur_ordered_QMARK_;
var G__51564 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur], null));
l__$1 = G__51562;
ordered_QMARK_ = G__51563;
result = G__51564;
continue;
}
} else {
return result;
}
break;
}
});
frontend.components.block.list_element = (function frontend$components$block$list_element(l){
try{if(((cljs.core.vector_QMARK_(l)) && ((cljs.core.count(l) >= (1))))){
try{var l_left__50512 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(l,(0),(1));
if(((cljs.core.vector_QMARK_(l_left__50512)) && ((cljs.core.count(l_left__50512) === (1))))){
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l_left__50512,(0));
var _tl = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(l,(1));
var map__50520 = l1;
var map__50520__$1 = cljs.core.__destructure_map(map__50520);
var ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50520__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50520__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.seq(name)){
return new cljs.core.Keyword(null,"dl","dl",-2140151713);
} else {
if(cljs.core.truth_(ordered)){
return new cljs.core.Keyword(null,"ol","ol",932524051);
} else {
return new cljs.core.Keyword(null,"ul","ul",-1349521403);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50517){if((e50517 instanceof Error)){
var e__36180__auto__ = e50517;
if((e__36180__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto__;
}
} else {
throw e50517;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50516){if((e50516 instanceof Error)){
var e__36180__auto__ = e50516;
if((e__36180__auto__ === cljs.core.match.backtrack)){
return new cljs.core.Keyword(null,"ul","ul",-1349521403);
} else {
throw e__36180__auto__;
}
} else {
throw e50516;

}
}});
frontend.components.block.list_item = (function frontend$components$block$list_item(config,p__50521){
var map__50522 = p__50521;
var map__50522__$1 = cljs.core.__destructure_map(map__50522);
var _list = map__50522__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"content","content",15833224));
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var content__$1 = ((cljs.core.empty_QMARK_(content))?null:(function (){try{if(((cljs.core.vector_QMARK_(content)) && ((cljs.core.count(content) >= (1))))){
try{var content_left__50524 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(content,(0),(1));
if(((cljs.core.vector_QMARK_(content_left__50524)) && ((cljs.core.count(content_left__50524) === (1))))){
try{var content_left__50524_0__50526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content_left__50524,(0));
if(((cljs.core.vector_QMARK_(content_left__50524_0__50526)) && ((cljs.core.count(content_left__50524_0__50526) === 2)))){
try{var content_left__50524_0__50526_0__50527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content_left__50524_0__50526,(0));
if((content_left__50524_0__50526_0__50527 === "Paragraph")){
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content_left__50524_0__50526,(1));
var rest_SINGLEQUOTE_ = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(content,(1));
return frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,i) : frontend.components.block.map_inline.call(null,config,i)),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,rest_SINGLEQUOTE_) : frontend.components.block.markup_elements_cp.call(null,config,rest_SINGLEQUOTE_))], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50538){if((e50538 instanceof Error)){
var e__36180__auto__ = e50538;
if((e__36180__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto__;
}
} else {
throw e50538;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50533){if((e50533 instanceof Error)){
var e__36180__auto__ = e50533;
if((e__36180__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto__;
}
} else {
throw e50533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50530){if((e50530 instanceof Error)){
var e__36180__auto__ = e50530;
if((e__36180__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto__;
}
} else {
throw e50530;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50529){if((e50529 instanceof Error)){
var e__36180__auto__ = e50529;
if((e__36180__auto__ === cljs.core.match.backtrack)){
return (frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,content) : frontend.components.block.markup_elements_cp.call(null,config,content));
} else {
throw e__36180__auto__;
}
} else {
throw e50529;

}
}})());
var checked_QMARK_ = (!((checkbox == null)));
var items__$1 = ((cljs.core.seq(items))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(items),(function (){var iter__5628__auto__ = (function frontend$components$block$list_item_$_iter__50543(s__50544){
return (new cljs.core.LazySeq(null,(function (){
var s__50544__$1 = s__50544;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50544__$1);
if(temp__5825__auto__){
var s__50544__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50544__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50544__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50546 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50545 = (0);
while(true){
if((i__50545 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__50545);
cljs.core.chunk_append(b__50546,(frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2(config,item) : frontend.components.block.list_item.call(null,config,item)));

var G__51572 = (i__50545 + (1));
i__50545 = G__51572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50546),frontend$components$block$list_item_$_iter__50543(cljs.core.chunk_rest(s__50544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50546),null);
}
} else {
var item = cljs.core.first(s__50544__$2);
return cljs.core.cons((frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2(config,item) : frontend.components.block.list_item.call(null,config,item)),frontend$components$block$list_item_$_iter__50543(cljs.core.rest(s__50544__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(items);
})()):null);
if(cljs.core.seq(name)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,name) : frontend.components.block.map_inline.call(null,config,name))], null),frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dd","dd",-1340437629),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items__$1], null)], 0)))], null);
} else {
if((checkbox == null)){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__50551 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null);
if(cljs.core.truth_(number)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50551,new cljs.core.Keyword(null,"value","value",305978217),number);
} else {
return G__50551;
}
})(),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),content__$1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items__$1], null)], 0)));
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"p","p",151049309),frontend.components.block.list_checkbox(config,checkbox),content__$1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items__$1], null)], 0)));
}

}
});
frontend.components.block.table = (function frontend$components$block$table(config,p__50556){
var map__50557 = p__50556;
var map__50557__$1 = cljs.core.__destructure_map(map__50557);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50557__$1,new cljs.core.Keyword(null,"header","header",119441134));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50557__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var col_groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50557__$1,new cljs.core.Keyword(null,"col_groups","col_groups",409146122));
var tr = (function (elm,cols){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(elm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"class","class",-2030961996),"org-left"], null),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,col) : frontend.components.block.map_inline.call(null,config,col)));
}),cols));
});
var tb_col_groups = (function (){try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (number){
var col_elem = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"org-left"], null)], null);
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colgroup","colgroup",651118645),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(number,col_elem));
}),col_groups);
}catch (e50562){var _e = e50562;
return cljs.core.PersistentVector.EMPTY;
}})();
var head = (cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),tr(new cljs.core.Keyword(null,"th","th",-545608566),header)], null):null);
var groups__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (group){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50554_SHARP_){
return tr(new cljs.core.Keyword(null,"td","td",1479933353),p1__50554_SHARP_);
}),group));
}),groups);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-wrapper.classic-table.force-visible-scrollbar.markdown-table","div.table-wrapper.classic-table.force-visible-scrollbar.markdown-table",-1793106373),frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-auto",new cljs.core.Keyword(null,"border","border",1444987323),(2),new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),(0),new cljs.core.Keyword(null,"cell-padding","cell-padding",978029542),(6),new cljs.core.Keyword(null,"rules","rules",1198912366),"groups",new cljs.core.Keyword(null,"frame","frame",-1711082588),"hsides"], null),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tb_col_groups,cljs.core.cons(head,groups__$1)], 0)))], null);
});
frontend.components.block.map_inline = (function frontend$components$block$map_inline(config,col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50564_SHARP_){
return frontend.components.block.inline(config,p1__50564_SHARP_);
}),col);
});
frontend.components.block.inline_title = (function (){var render_fn__31744__auto__ = (function frontend$components$block$inline_title(config,title){
return frontend.components.block.map_inline(config,logseq.graph_parser.mldoc.inline__GT_edn(title,frontend.format.mldoc.get_default_config(new cljs.core.Keyword(null,"markdown","markdown",1227225089))));
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$inline_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50568 = cljs.core.first(args__31746__auto__);
var G__50569 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50568,G__50569) : io.factorhouse.hsx.core.obj_get.call(null,G__50568,G__50569));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"inline-title","inline-title",-2015310723,null),args__31746__auto__),frontend$components$block$inline_title,args__31746__auto__,null);
}
};
var frontend$components$block$inline_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51579__i = 0, G__51579__a = new Array(arguments.length -  0);
while (G__51579__i < G__51579__a.length) {G__51579__a[G__51579__i] = arguments[G__51579__i + 0]; ++G__51579__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51579__a,0,null);
} 
return frontend$components$block$inline_title__delegate.call(this,args__31746__auto__);};
frontend$components$block$inline_title.cljs$lang$maxFixedArity = 0;
frontend$components$block$inline_title.cljs$lang$applyTo = (function (arglist__51580){
var args__31746__auto__ = cljs.core.seq(arglist__51580);
return frontend$components$block$inline_title__delegate(args__31746__auto__);
});
frontend$components$block$inline_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$inline_title__delegate;
return frontend$components$block$inline_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50570 = comp__31745__auto__;
var G__50571 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50570,G__50571) : io.factorhouse.hsx.core.react_memo.call(null,G__50570,G__50571));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"inline-title");

return comp__31745__auto__;
})();
frontend.components.block.get_code_mode_by_lang = (function frontend$components$block$get_code_mode_by_lang(lang){
return cljs.core.some((function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.name,lang)){
return m.mode;
} else {
return null;
}
}),window.CodeMirror.modeInfo);
});
frontend.components.block.src_lang_picker = (function (){var render_fn__31744__auto__ = (function frontend$components$block$src_lang_picker(block,on_select_BANG_){
var temp__5825__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return m.name;
}),window.CodeMirror.modeInfo);
if(cljs.core.truth_(temp__5825__auto__)){
var langs = temp__5825__auto__;
var options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (lang){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),lang,new cljs.core.Keyword(null,"value","value",305978217),lang], null);
}),langs);
return frontend.components.select.select(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),options,new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","code-language-placeholder","editor/code-language-placeholder",-881804589)], 0)),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (chosen,_,___$1,e){
var lang_51584 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(chosen);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lang_51584,new cljs.core.Keyword("logseq.property.code","lang","logseq.property.code/lang",-857897165).cljs$core$IFn$_invoke$arity$1(block))))){
(on_select_BANG_.cljs$core$IFn$_invoke$arity$2 ? on_select_BANG_.cljs$core$IFn$_invoke$arity$2(lang_51584,e) : on_select_BANG_.call(null,lang_51584,e));
} else {
}

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$src_lang_picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50577 = cljs.core.first(args__31746__auto__);
var G__50578 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50577,G__50578) : io.factorhouse.hsx.core.obj_get.call(null,G__50577,G__50578));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"src-lang-picker","src-lang-picker",1861955000,null),args__31746__auto__),frontend$components$block$src_lang_picker,args__31746__auto__,null);
}
};
var frontend$components$block$src_lang_picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51586__i = 0, G__51586__a = new Array(arguments.length -  0);
while (G__51586__i < G__51586__a.length) {G__51586__a[G__51586__i] = arguments[G__51586__i + 0]; ++G__51586__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51586__a,0,null);
} 
return frontend$components$block$src_lang_picker__delegate.call(this,args__31746__auto__);};
frontend$components$block$src_lang_picker.cljs$lang$maxFixedArity = 0;
frontend$components$block$src_lang_picker.cljs$lang$applyTo = (function (arglist__51587){
var args__31746__auto__ = cljs.core.seq(arglist__51587);
return frontend$components$block$src_lang_picker__delegate(args__31746__auto__);
});
frontend$components$block$src_lang_picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$src_lang_picker__delegate;
return frontend$components$block$src_lang_picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50580 = comp__31745__auto__;
var G__50581 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50580,G__50581) : io.factorhouse.hsx.core.react_memo.call(null,G__50580,G__50581));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"src-lang-picker");

return comp__31745__auto__;
})();
frontend.components.block.src_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$src_cp(config,options){
var block = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"code-block","code-block",-2113425141).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
}
})();
var container_id = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
var editor_id = logseq.shui.hooks.use_memo((function (){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null));
var _STAR_mode_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_actions_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
if(cljs.core.truth_(options)){
var html_export_QMARK_ = new cljs.core.Keyword(null,"html-export?","html-export?",504770426).cljs$core$IFn$_invoke$arity$1(config);
var map__50585 = options;
var map__50585__$1 = cljs.core.__destructure_map(map__50585);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50585__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50585__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var attr = (cljs.core.truth_(language)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),language], null):null);
var code = (cljs.core.truth_(lines)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines):new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.highlight.html_export(attr,code);
} else {
var language__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljc",null,"cljs",null,"clj",null,"edn",null,"clojurescript",null], null), null),language))?"clojure":language);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-fenced-code-editor.flex.w-full","div.ui-fenced-code-editor.flex.w-full",-1677397925),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.shui.hooks.deref(_STAR_actions_ref),"!opacity-100");
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (e){
if(dommy.core.has_class_QMARK_(e.target,"code-editor")){
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.shui.hooks.deref(_STAR_actions_ref),"!opacity-100");
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-code-editor-wrap","div.ls-code-editor-wrap",1479302981),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-block-actions","div.code-block-actions",-278134414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_actions_ref], null),(function (){var G__50589 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"select-language",new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_mode_ref,new cljs.core.Keyword(null,"containerid","containerid",-1132769612),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id)),new cljs.core.Keyword(null,"blockid","blockid",-664467760),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop_propagation(e);

var target = e.target;
var G__50594 = target;
var G__50595 = (function (){
return frontend.components.block.src_lang_picker(block,(function (lang,_e){
var temp__5825__auto__ = frontend.util.get_cm_instance(frontend.util.rec_get_node(target,"ls-block"));
if(cljs.core.truth_(temp__5825__auto__)){
var cm = temp__5825__auto__;
var temp__5823__auto___51590 = frontend.components.block.get_code_mode_by_lang(lang);
if(cljs.core.truth_(temp__5823__auto___51590)){
var mode_51591 = temp__5823__auto___51590;
cm.setOption("mode",mode_51591);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("code mode not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null));
}

frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(logseq.db.kv.cljs$core$IFn$_invoke$arity$2 ? logseq.db.kv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.kv","latest-code-lang","logseq.kv/latest-code-lang",-73570328),lang) : logseq.db.kv.call(null,new cljs.core.Keyword("logseq.kv","latest-code-lang","logseq.kv/latest-code-lang",-73570328),lang))], null),null,null], 0));

return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property.code","lang","logseq.property.code/lang",-857897165),lang);
} else {
return null;
}
}));
});
var G__50596 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__50594,G__50595,G__50596) : logseq.shui.ui.popup_show_BANG_.call(null,G__50594,G__50595,G__50596));
})], null);
var G__50590 = (function (){var or__5142__auto__ = language__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","code-language-placeholder","editor/code-language-placeholder",-881804589)], 0));
}
})();
var G__50591 = frontend.ui.icon("chevron-down");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__50589,G__50590,G__50591) : logseq.shui.ui.button.call(null,G__50589,G__50590,G__50591));
})(),(function (){var G__50599 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop_propagation(e);

var temp__5825__auto__ = frontend.util.get_cm_instance(frontend.util.rec_get_node(e.target,"ls-block"));
if(cljs.core.truth_(temp__5825__auto__)){
var cm = temp__5825__auto__;
frontend.util.copy_to_clipboard_BANG_(cm.getValue());

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("notification","copied","notification/copied",-1717318998)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return null;
}
})], null);
var G__50600 = frontend.ui.icon("copy");
var G__50601 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","copy","ui/copy",-1077613577)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__50599,G__50600,G__50601) : logseq.shui.ui.button.call(null,G__50599,G__50600,G__50601));
})()], null),frontend.components.lazy_editor.editor(config,editor_id,attr,code,options),(function (){var options__$1 = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(options);
var block__$1 = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(language__$1,"clojure")) && (cljs.core.contains_QMARK_(cljs.core.set(options__$1),":results")))){
return frontend.extensions.sci.eval_result(code,block__$1);
} else {
return null;
}
})()], null)], null);

}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$src_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50606 = cljs.core.first(args__31746__auto__);
var G__50607 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50606,G__50607) : io.factorhouse.hsx.core.obj_get.call(null,G__50606,G__50607));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"src-cp","src-cp",-2139263701,null),args__31746__auto__),frontend$components$block$src_cp,args__31746__auto__,null);
}
};
var frontend$components$block$src_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51595__i = 0, G__51595__a = new Array(arguments.length -  0);
while (G__51595__i < G__51595__a.length) {G__51595__a[G__51595__i] = arguments[G__51595__i + 0]; ++G__51595__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51595__a,0,null);
} 
return frontend$components$block$src_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$src_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$src_cp.cljs$lang$applyTo = (function (arglist__51596){
var args__31746__auto__ = cljs.core.seq(arglist__51596);
return frontend$components$block$src_cp__delegate(args__31746__auto__);
});
frontend$components$block$src_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$src_cp__delegate;
return frontend$components$block$src_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50608 = comp__31745__auto__;
var G__50609 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50608,G__50609) : io.factorhouse.hsx.core.react_memo.call(null,G__50608,G__50609));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"src-cp");

return comp__31745__auto__;
})();
frontend.components.block.markup_element_cp = (function frontend$components$block$markup_element_cp(p__50614,item){
var map__50616 = p__50614;
var map__50616__$1 = cljs.core.__destructure_map(map__50616);
var config = map__50616__$1;
var html_export_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50616__$1,new cljs.core.Keyword(null,"html-export?","html-export?",504770426));
try{try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__50622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50622 === "Drawer")){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,"logbook")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer","div.drawer",757685167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-drawer-name","data-drawer-name",532418125),name], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50.font-medium.logbook","div.opacity-50.font-medium.logbook",-155596154),(function (){var G__50776 = ":%s:";
var G__50777 = clojure.string.upper_case(name);
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2(G__50776,G__50777) : frontend.util.format.call(null,G__50776,G__50777));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50.font-medium","div.opacity-50.font-medium",-1010985565),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),":END:"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null))], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50771){if((e50771 instanceof Error)){
var e__36180__auto__ = e50771;
if((e__36180__auto__ === cljs.core.match.backtrack)){
try{var item_0__50622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50622 === "Directive")){
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file-level-property","div.file-level-property",1092497644),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["caption",null], null), null),clojure.string.lower_case(key)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold","span.font-bold",-460884588),clojure.string.upper_case(key)], null),(""+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))], null):null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50773){if((e50773 instanceof Error)){
var e__36180__auto____$1 = e50773;
if((e__36180__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$1;
}
} else {
throw e50773;

}
}} else {
throw e__36180__auto__;
}
} else {
throw e50771;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50670){if((e50670 instanceof Error)){
var e__36180__auto__ = e50670;
if((e__36180__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__50626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50626 === "Paragraph")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var items = ((frontend.components.block.video.contains_video_macro_QMARK_(l))?frontend.components.block.video_inline_segments_cp(config,l):frontend.components.block.map_inline(config,l));
if(cljs.core.truth_((function (){var G__50768 = /\"Export_Snippet\" \"embed\"/;
var G__50769 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(l));
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__50768,G__50769) : frontend.util.safe_re_find.call(null,G__50768,G__50769));
})())){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),items);
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div.is-paragraph","div.is-paragraph",1619857502),items);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50767){if((e50767 instanceof Error)){
var e__36180__auto____$1 = e50767;
if((e__36180__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$1;
}
} else {
throw e50767;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50672){if((e50672 instanceof Error)){
var e__36180__auto____$1 = e50672;
if((e__36180__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 1)))){
try{var item_0__50629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50629 === "Horizontal_Rule")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50765){if((e50765 instanceof Error)){
var e__36180__auto____$2 = e50765;
if((e__36180__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$2;
}
} else {
throw e50765;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50673){if((e50673 instanceof Error)){
var e__36180__auto____$2 = e50673;
if((e__36180__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__50631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50631 === "Heading")){
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var map__50762 = h;
var map__50762__$1 = cljs.core.__destructure_map(map__50762);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50762__$1,new cljs.core.Keyword(null,"title","title",636505583));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"- "], null),frontend.components.block.map_inline(config,title)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50740){if((e50740 instanceof Error)){
var e__36180__auto____$3 = e50740;
if((e__36180__auto____$3 === cljs.core.match.backtrack)){
try{var item_0__50631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50631 === "List")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var lists = frontend.components.block.divide_lists(l);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lists))){
var l__$1 = cljs.core.first(lists);
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(l__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50611_SHARP_){
return frontend.components.block.list_item(config,p1__50611_SHARP_);
}),l__$1));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group","div.list-group",1215632197),(function (){var iter__5628__auto__ = (function frontend$components$block$markup_element_cp_$_iter__50755(s__50756){
return (new cljs.core.LazySeq(null,(function (){
var s__50756__$1 = s__50756;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50756__$1);
if(temp__5825__auto__){
var s__50756__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50756__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50756__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50758 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50757 = (0);
while(true){
if((i__50757 < size__5627__auto__)){
var l__$1 = cljs.core._nth(c__5626__auto__,i__50757);
cljs.core.chunk_append(b__50758,frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(l__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__50757,l__$1,c__5626__auto__,size__5627__auto__,b__50758,s__50756__$2,temp__5825__auto__,lists,l,item_0__50631,e__36180__auto____$3,e__36180__auto____$2,e__36180__auto____$1,e__36180__auto__,map__50616,map__50616__$1,config,html_export_QMARK_){
return (function (p1__50612_SHARP_){
return frontend.components.block.list_item(config,p1__50612_SHARP_);
});})(i__50757,l__$1,c__5626__auto__,size__5627__auto__,b__50758,s__50756__$2,temp__5825__auto__,lists,l,item_0__50631,e__36180__auto____$3,e__36180__auto____$2,e__36180__auto____$1,e__36180__auto__,map__50616,map__50616__$1,config,html_export_QMARK_))
,l__$1)));

var G__51607 = (i__50757 + (1));
i__50757 = G__51607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50758),frontend$components$block$markup_element_cp_$_iter__50755(cljs.core.chunk_rest(s__50756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50758),null);
}
} else {
var l__$1 = cljs.core.first(s__50756__$2);
return cljs.core.cons(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(l__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (l__$1,s__50756__$2,temp__5825__auto__,lists,l,item_0__50631,e__36180__auto____$3,e__36180__auto____$2,e__36180__auto____$1,e__36180__auto__,map__50616,map__50616__$1,config,html_export_QMARK_){
return (function (p1__50612_SHARP_){
return frontend.components.block.list_item(config,p1__50612_SHARP_);
});})(l__$1,s__50756__$2,temp__5825__auto__,lists,l,item_0__50631,e__36180__auto____$3,e__36180__auto____$2,e__36180__auto____$1,e__36180__auto__,map__50616,map__50616__$1,config,html_export_QMARK_))
,l__$1)),frontend$components$block$markup_element_cp_$_iter__50755(cljs.core.rest(s__50756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(lists);
})()], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50741){if((e50741 instanceof Error)){
var e__36180__auto____$4 = e50741;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
try{var item_0__50631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50631 === "Table")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.table(config,t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50743){if((e50743 instanceof Error)){
var e__36180__auto____$5 = e50743;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
try{var item_0__50631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50631 === "Math")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(s,true,true);
} else {
return frontend.extensions.latex.latex(s,true,true);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50744){if((e50744 instanceof Error)){
var e__36180__auto____$6 = e50744;
if((e__36180__auto____$6 === cljs.core.match.backtrack)){
try{var item_0__50631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50631 === "Example")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.pre-wrap-white-space","pre.pre-wrap-white-space",-614870903),frontend.components.block.join_lines(l)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50746){if((e50746 instanceof Error)){
var e__36180__auto____$7 = e50746;
if((e__36180__auto____$7 === cljs.core.match.backtrack)){
try{var item_0__50631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50631 === "Quote")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"deprecated-org-quote?","deprecated-org-quote?",1072036106).cljs$core$IFn$_invoke$arity$1(config))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","deprecated-quote","block/deprecated-quote",1050578045)], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote.ls-blockquote","blockquote.ls-blockquote",-674310730),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.markup_elements_cp.call(null,config,l))], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50747){if((e50747 instanceof Error)){
var e__36180__auto____$8 = e50747;
if((e__36180__auto____$8 === cljs.core.match.backtrack)){
try{var item_0__50631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50631 === "Raw_Html")){
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.raw_html.inline-block","div.raw_html.inline-block",-768377582),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(content)], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50748){if((e50748 instanceof Error)){
var e__36180__auto____$9 = e50748;
if((e__36180__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$9;
}
} else {
throw e50748;

}
}} else {
throw e__36180__auto____$8;
}
} else {
throw e50747;

}
}} else {
throw e__36180__auto____$7;
}
} else {
throw e50746;

}
}} else {
throw e__36180__auto____$6;
}
} else {
throw e50744;

}
}} else {
throw e__36180__auto____$5;
}
} else {
throw e50743;

}
}} else {
throw e__36180__auto____$4;
}
} else {
throw e50741;

}
}} else {
throw e__36180__auto____$3;
}
} else {
throw e50740;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50674){if((e50674 instanceof Error)){
var e__36180__auto____$3 = e50674;
if((e__36180__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 4)))){
try{var item_0__50633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50633 === "Export")){
try{var item_1__50634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50634 === "html")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.export_html","div.export_html",950208651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(content)], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50737){if((e50737 instanceof Error)){
var e__36180__auto____$4 = e50737;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$4;
}
} else {
throw e50737;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50736){if((e50736 instanceof Error)){
var e__36180__auto____$4 = e50736;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$4;
}
} else {
throw e50736;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50675){if((e50675 instanceof Error)){
var e__36180__auto____$4 = e50675;
if((e__36180__auto____$4 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__50637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50637 === "Hiccup")){
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","invalid-hiccup","block/invalid-hiccup",-1861591104)], 0))], null),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hiccup_html.inline","div.hiccup_html.inline",439785378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.components.block.hiccup__GT_html(content)], null)], null)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50734){if((e50734 instanceof Error)){
var e__36180__auto____$5 = e50734;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$5;
}
} else {
throw e50734;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50677){if((e50677 instanceof Error)){
var e__36180__auto____$5 = e50677;
if((e__36180__auto____$5 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 4)))){
try{var item_0__50639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50639 === "Export")){
try{var item_1__50640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50640 === "latex")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(content,true,false);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","deprecated-latex-export","block/deprecated-latex-export",-1833103635)], 0))], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50731){if((e50731 instanceof Error)){
var e__36180__auto____$6 = e50731;
if((e__36180__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$6;
}
} else {
throw e50731;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50729){if((e50729 instanceof Error)){
var e__36180__auto____$6 = e50729;
if((e__36180__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$6;
}
} else {
throw e50729;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50678){if((e50678 instanceof Error)){
var e__36180__auto____$6 = e50678;
if((e__36180__auto____$6 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 5)))){
try{var item_0__50643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50643 === "Custom")){
try{var item_1__50644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50644 === "query")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var _result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","deprecated-query-syntax","block/deprecated-query-syntax",1236054700)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50706){if((e50706 instanceof Error)){
var e__36180__auto____$7 = e50706;
if((e__36180__auto____$7 === cljs.core.match.backtrack)){
try{var item_1__50644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50644 === "note")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("note",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50707){if((e50707 instanceof Error)){
var e__36180__auto____$8 = e50707;
if((e__36180__auto____$8 === cljs.core.match.backtrack)){
try{var item_1__50644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50644 === "tip")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("tip",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50708){if((e50708 instanceof Error)){
var e__36180__auto____$9 = e50708;
if((e__36180__auto____$9 === cljs.core.match.backtrack)){
try{var item_1__50644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50644 === "important")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("important",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50710){if((e50710 instanceof Error)){
var e__36180__auto____$10 = e50710;
if((e__36180__auto____$10 === cljs.core.match.backtrack)){
try{var item_1__50644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50644 === "caution")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("caution",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50712){if((e50712 instanceof Error)){
var e__36180__auto____$11 = e50712;
if((e__36180__auto____$11 === cljs.core.match.backtrack)){
try{var item_1__50644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50644 === "warning")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("warning",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50713){if((e50713 instanceof Error)){
var e__36180__auto____$12 = e50713;
if((e__36180__auto____$12 === cljs.core.match.backtrack)){
try{var item_1__50644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50644 === "pinned")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("pinned",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50716){if((e50716 instanceof Error)){
var e__36180__auto____$13 = e50716;
if((e__36180__auto____$13 === cljs.core.match.backtrack)){
try{var item_1__50644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__50644 === "center")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.markup_elements_cp.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50718){if((e50718 instanceof Error)){
var e__36180__auto____$14 = e50718;
if((e__36180__auto____$14 === cljs.core.match.backtrack)){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),name], null),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.markup_elements_cp.call(null,config,l)));
} else {
throw e__36180__auto____$14;
}
} else {
throw e50718;

}
}} else {
throw e__36180__auto____$13;
}
} else {
throw e50716;

}
}} else {
throw e__36180__auto____$12;
}
} else {
throw e50713;

}
}} else {
throw e__36180__auto____$11;
}
} else {
throw e50712;

}
}} else {
throw e__36180__auto____$10;
}
} else {
throw e50710;

}
}} else {
throw e__36180__auto____$9;
}
} else {
throw e50708;

}
}} else {
throw e__36180__auto____$8;
}
} else {
throw e50707;

}
}} else {
throw e__36180__auto____$7;
}
} else {
throw e50706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50705){if((e50705 instanceof Error)){
var e__36180__auto____$7 = e50705;
if((e__36180__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$7;
}
} else {
throw e50705;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50679){if((e50679 instanceof Error)){
var e__36180__auto____$7 = e50679;
if((e__36180__auto____$7 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__50652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50652 === "Latex_Fragment")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.latex-fragment","p.latex-fragment",2044866246),frontend.components.block.inline(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Latex_Fragment",l], null))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50704){if((e50704 instanceof Error)){
var e__36180__auto____$8 = e50704;
if((e__36180__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$8;
}
} else {
throw e50704;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50680){if((e50680 instanceof Error)){
var e__36180__auto____$8 = e50680;
if((e__36180__auto____$8 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 4)))){
try{var item_0__50655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50655 === "Latex_Environment")){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var content__$1 = frontend.components.block.latex_environment_content(name,option,content);
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(content__$1,true,true);
} else {
return frontend.extensions.latex.latex(content__$1,true,true);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50702){if((e50702 instanceof Error)){
var e__36180__auto____$9 = e50702;
if((e__36180__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$9;
}
} else {
throw e50702;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50682){if((e50682 instanceof Error)){
var e__36180__auto____$9 = e50682;
if((e__36180__auto____$9 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__50660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50660 === "Displayed_Math")){
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(content,true,true);
} else {
return frontend.extensions.latex.latex(content,true,true);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e50700){if((e50700 instanceof Error)){
var e__36180__auto____$10 = e50700;
if((e__36180__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$10;
}
} else {
throw e50700;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50684){if((e50684 instanceof Error)){
var e__36180__auto____$10 = e50684;
if((e__36180__auto____$10 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__50662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50662 === "Footnote_Definition")){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var id = frontend.util.url_encode(name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footdef","div.footdef",1989065599),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footpara","div.footpara",-1143244552),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__50696 = config;
var G__50697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",definition], null);
return (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(G__50696,G__50697) : frontend.components.block.markup_element_cp.call(null,G__50696,G__50697));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ml-1","a.ml-1",1979802547),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"fn."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"footnum",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_((""+"fnr."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.fn","sup.fn",403400163),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"\u21A9\uFE0E")], null)], null))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50693){if((e50693 instanceof Error)){
var e__36180__auto____$11 = e50693;
if((e__36180__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$11;
}
} else {
throw e50693;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50685){if((e50685 instanceof Error)){
var e__36180__auto____$11 = e50685;
if((e__36180__auto____$11 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__50665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__50665 === "Src")){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var lang = frontend.util.safe_lower_case(new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(options));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__fenced-code-block","div.cp__fenced-code-block",-1897501160),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),lang], null),(function (){var temp__5823__auto__ = (frontend.handler.plugin.hook_fenced_code_by_lang.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.plugin.hook_fenced_code_by_lang.cljs$core$IFn$_invoke$arity$1(lang) : frontend.handler.plugin.hook_fenced_code_by_lang.call(null,lang));
if(cljs.core.truth_(temp__5823__auto__)){
var opts = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-fenced-code-wrap","div.ui-fenced-code-wrap",1049851534),frontend.components.block.src_cp(config,options),frontend.components.plugins.hook_ui_fenced_code(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config),clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(options)),opts)], null);
} else {
return frontend.components.block.src_cp(config,options);
}
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50689){if((e50689 instanceof Error)){
var e__36180__auto____$12 = e50689;
if((e__36180__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36180__auto____$12;
}
} else {
throw e50689;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50687){if((e50687 instanceof Error)){
var e__36180__auto____$12 = e50687;
if((e__36180__auto____$12 === cljs.core.match.backtrack)){
return "";
} else {
throw e__36180__auto____$12;
}
} else {
throw e50687;

}
}} else {
throw e__36180__auto____$11;
}
} else {
throw e50685;

}
}} else {
throw e__36180__auto____$10;
}
} else {
throw e50684;

}
}} else {
throw e__36180__auto____$9;
}
} else {
throw e50682;

}
}} else {
throw e__36180__auto____$8;
}
} else {
throw e50680;

}
}} else {
throw e__36180__auto____$7;
}
} else {
throw e50679;

}
}} else {
throw e__36180__auto____$6;
}
} else {
throw e50678;

}
}} else {
throw e__36180__auto____$5;
}
} else {
throw e50677;

}
}} else {
throw e__36180__auto____$4;
}
} else {
throw e50675;

}
}} else {
throw e__36180__auto____$3;
}
} else {
throw e50674;

}
}} else {
throw e__36180__auto____$2;
}
} else {
throw e50673;

}
}} else {
throw e__36180__auto____$1;
}
} else {
throw e50672;

}
}} else {
throw e__36180__auto__;
}
} else {
throw e50670;

}
}}catch (e50617){var e = e50617;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Convert to html failed, error: ",e], 0));

return "";
}});
frontend.components.block.markup_elements_cp = (function frontend$components$block$markup_elements_cp(config,col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50779_SHARP_){
return frontend.components.block.markup_element_cp(config,p1__50779_SHARP_);
}),col);
});
frontend.components.block.memoized_loaded_block_row = module$node_modules$react$index.memo((function (props){
var vec__50783 = props.args;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50783,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50783,(1),null);
var child_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50783,(2),null);
var render_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50783,(3),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50783,(4),null);
return frontend.components.block.loaded_block_container_inner(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"top?","top?",-1883283796),new cljs.core.Keyword(null,"top?","top?",-1883283796).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","meta","block/meta",1064819153)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"child-uuids","child-uuids",1901853269),child_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"render-children","render-children",1702487194),render_children], 0)));
}),(function (previous_props,next_props){
var vec__50786 = previous_props.args;
var _previous_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50786,(0),null);
var previous_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50786,(1),null);
var previous_child_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50786,(2),null);
var vec__50789 = next_props.args;
var _next_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50789,(0),null);
var next_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50789,(1),null);
var next_child_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50789,(2),null);
return ((frontend.components.block.same_block_revision_QMARK_(previous_block,next_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(previous_child_uuids,next_child_uuids)));
}));
frontend.components.block.render_loaded_block_row = (function frontend$components$block$render_loaded_block_row(config,block,child_uuids,render_children,opts){
return module$node_modules$react$index.createElement(frontend.components.block.memoized_loaded_block_row,({"args": new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,block,child_uuids,render_children,opts], null)}));
});
/**
 * Shared virtualized-list wiring for flat block-uuid lists: scroll container,
 * item identity, overscan, and selection-range bookkeeping. Only the
 * standalone page outliner (config :virtualize?) window-renders; pages shown
 * inside other containers (views, journals, references, sidebar, previews)
 * always render their block lists in full.
 */
frontend.components.block.use_virtual_list_opts = (function frontend$components$block$use_virtual_list_opts(config,block_uuids){
var disable_virtualized_QMARK_ = frontend.util.rtc_test_without_virtualization_QMARK_();
var block_uuids__$1 = cljs.core.vec(block_uuids);
var blocks_count = cljs.core.count(block_uuids__$1);
var virtualized_QMARK_ = (function (){var and__5140__auto__ = (!(disable_virtualized_QMARK_));
if(and__5140__auto__){
var or__5142__auto__ = frontend.util.force_virtualization_QMARK_();
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto____$1 = new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto____$1)){
return (blocks_count >= (64));
} else {
return and__5140__auto____$1;
}
}
} else {
return and__5140__auto__;
}
})();
var selection_block_ids = (function (){var or__5142__auto__ = new cljs.core.Keyword("selection","block-ids","selection/block-ids",-1996881308).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block_uuids__$1;
}
})();
var scroll_container = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"scroll-container","scroll-container",-1938238550).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5823__auto__ = document.getElementById(new cljs.core.Keyword(null,"blocks-node-id","blocks-node-id",-1095052634).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$1(node);
} else {
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();
}
}
})();
var scroll_container__$1 = ((cljs.core.fn_QMARK_(scroll_container))?(scroll_container.cljs$core$IFn$_invoke$arity$0 ? scroll_container.cljs$core$IFn$_invoke$arity$0() : scroll_container.call(null)):scroll_container);
var _STAR_virtualized_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_block_uuids_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(block_uuids__$1) : logseq.shui.hooks.use_ref.call(null,block_uuids__$1));
var _STAR_last_rendered_start = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var virtual_opts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"skipAnimationFrameInResizeObserver","skipAnimationFrameInResizeObserver",1677982016),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"increase-viewport-by","increase-viewport-by",1517073864),new cljs.core.Keyword(null,"item-content","item-content",1656730280),new cljs.core.Keyword(null,"compute-item-key","compute-item-key",-621146487),new cljs.core.Keyword(null,"custom-scroll-parent","custom-scroll-parent",1031485618),new cljs.core.Keyword(null,"overscan","overscan",309782420),new cljs.core.Keyword(null,"items-rendered","items-rendered",1483099102),new cljs.core.Keyword(null,"data","data",-232669377)],[true,_STAR_virtualized_ref,(254),(function (idx,block_uuid){
var G__50802 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("selection","block-ids","selection/block-ids",-1996881308),selection_block_ids);
var G__50803 = block_uuid;
var G__50804 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top?","top?",-1883283796),(idx === (0)),new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((blocks_count - (1)),idx)], null);
return (frontend.components.block.subscribed_block_row.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.subscribed_block_row.cljs$core$IFn$_invoke$arity$3(G__50802,G__50803,G__50804) : frontend.components.block.subscribed_block_row.call(null,G__50802,G__50803,G__50804));
}),(function (_idx,block_uuid){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid));
}),scroll_container__$1,(254),(function (rendered_items){
if((rendered_items.length > (0))){
var previous_start = _STAR_last_rendered_start.current;
var current_start = (rendered_items[(0)]).index;
var current_end = (rendered_items[(rendered_items.length - (1))]).index;
var direction = (((((previous_start == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(previous_start,current_start))))?null:(((previous_start < current_start))?new cljs.core.Keyword(null,"down","down",1565245570):new cljs.core.Keyword(null,"up","up",-269712113)
));
(_STAR_last_rendered_start.current = current_start);

if(cljs.core.truth_((function (){var and__5140__auto__ = direction;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.selection.pointer_down_QMARK_();
} else {
return and__5140__auto__;
}
})())){
var boundary_id = frontend.components.block.selection.virtual_range_boundary_id(block_uuids__$1,direction,current_start,current_end);
return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$variadic((""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(boundary_id)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(boundary_id)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"append?","append?",123923917),true,new cljs.core.Keyword(null,"block-ids","block-ids",557945592),selection_block_ids], null)], 0));
} else {
return null;
}
} else {
return null;
}
}),cljs.core.to_array(block_uuids__$1)]);
(_STAR_block_uuids_ref.current = block_uuids__$1);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"virtualized?","virtualized?",285216968),virtualized_QMARK_,new cljs.core.Keyword(null,"virtual-opts","virtual-opts",-708437043),virtual_opts,new cljs.core.Keyword(null,"*virtualized-ref","*virtualized-ref",-947594237),_STAR_virtualized_ref,new cljs.core.Keyword(null,"*block-uuids-ref","*block-uuids-ref",-388286033),_STAR_block_uuids_ref], null);
});
/**
 * Flat block list that switches to windowed rendering for large lists; used by
 * page roots and by nested children.
 */
frontend.components.block.virtualizable_block_list = (function (){var render_fn__31744__auto__ = (function frontend$components$block$virtualizable_block_list(config,block_uuids){
var map__50812 = frontend.components.block.use_virtual_list_opts(config,block_uuids);
var map__50812__$1 = cljs.core.__destructure_map(map__50812);
var virtualized_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50812__$1,new cljs.core.Keyword(null,"virtualized?","virtualized?",285216968));
var virtual_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50812__$1,new cljs.core.Keyword(null,"virtual-opts","virtual-opts",-708437043));
if(cljs.core.seq(block_uuids)){
if(cljs.core.truth_(virtualized_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blocks-list-wrap","div.blocks-list-wrap",-1080970966),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-level","data-level",1364295892),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"data-virtuoso-scroller","data-virtuoso-scroller",172478125),true], null),frontend.ui.virtualized_list(virtual_opts)], null);
} else {
return (frontend.components.block.plain_block_list.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.plain_block_list.cljs$core$IFn$_invoke$arity$2(config,block_uuids) : frontend.components.block.plain_block_list.call(null,config,block_uuids));
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$virtualizable_block_list__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50816 = cljs.core.first(args__31746__auto__);
var G__50817 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50816,G__50817) : io.factorhouse.hsx.core.obj_get.call(null,G__50816,G__50817));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"virtualizable-block-list","virtualizable-block-list",-1199997340,null),args__31746__auto__),frontend$components$block$virtualizable_block_list,args__31746__auto__,null);
}
};
var frontend$components$block$virtualizable_block_list = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51629__i = 0, G__51629__a = new Array(arguments.length -  0);
while (G__51629__i < G__51629__a.length) {G__51629__a[G__51629__i] = arguments[G__51629__i + 0]; ++G__51629__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51629__a,0,null);
} 
return frontend$components$block$virtualizable_block_list__delegate.call(this,args__31746__auto__);};
frontend$components$block$virtualizable_block_list.cljs$lang$maxFixedArity = 0;
frontend$components$block$virtualizable_block_list.cljs$lang$applyTo = (function (arglist__51630){
var args__31746__auto__ = cljs.core.seq(arglist__51630);
return frontend$components$block$virtualizable_block_list__delegate(args__31746__auto__);
});
frontend$components$block$virtualizable_block_list.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$virtualizable_block_list__delegate;
return frontend$components$block$virtualizable_block_list;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50819 = comp__31745__auto__;
var G__50820 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50819,G__50820) : io.factorhouse.hsx.core.react_memo.call(null,G__50819,G__50820));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"virtualizable-block-list");

return comp__31745__auto__;
})();
frontend.components.block.linked_block_row = (function (){var render_fn__31744__auto__ = (function frontend$components$block$linked_block_row(config,original_block,original_child_uuids,linked_uuid,opts){
var linked_block = frontend.db.hooks.use_block(linked_uuid);
var linked_child_uuids = frontend.db.hooks.use_children((cljs.core.truth_(new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(opts))?null:linked_uuid));
if(cljs.core.not(linked_block)){
return frontend.components.block.unloaded_block_placeholder();
} else {
var loop_linked_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(linked_block))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reference-view-parent-uuid","reference-view-parent-uuid",-1073705201).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(linked_block))));
var block = ((loop_linked_QMARK_)?original_block:linked_block);
var child_uuids = ((loop_linked_QMARK_)?original_child_uuids:linked_child_uuids);
var config_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"loop-linked?","loop-linked?",-595769994),loop_linked_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"original-block","original-block",1808045862),original_block], 0)),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(linked_block));
return frontend.components.block.with_library_child_uuids(config_SINGLEQUOTE_,child_uuids,(function (visible_uuids){
return frontend.components.block.render_loaded_block_row(config_SINGLEQUOTE_,block,visible_uuids,frontend.components.block.virtualizable_block_list,opts);
}));
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$linked_block_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50822 = cljs.core.first(args__31746__auto__);
var G__50823 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50822,G__50823) : io.factorhouse.hsx.core.obj_get.call(null,G__50822,G__50823));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"linked-block-row","linked-block-row",1343836029,null),args__31746__auto__),frontend$components$block$linked_block_row,args__31746__auto__,null);
}
};
var frontend$components$block$linked_block_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51635__i = 0, G__51635__a = new Array(arguments.length -  0);
while (G__51635__i < G__51635__a.length) {G__51635__a[G__51635__i] = arguments[G__51635__i + 0]; ++G__51635__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51635__a,0,null);
} 
return frontend$components$block$linked_block_row__delegate.call(this,args__31746__auto__);};
frontend$components$block$linked_block_row.cljs$lang$maxFixedArity = 0;
frontend$components$block$linked_block_row.cljs$lang$applyTo = (function (arglist__51636){
var args__31746__auto__ = cljs.core.seq(arglist__51636);
return frontend$components$block$linked_block_row__delegate(args__31746__auto__);
});
frontend$components$block$linked_block_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$linked_block_row__delegate;
return frontend$components$block$linked_block_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50824 = comp__31745__auto__;
var G__50825 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50824,G__50825) : io.factorhouse.hsx.core.react_memo.call(null,G__50824,G__50825));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"linked-block-row");

return comp__31745__auto__;
})();
frontend.components.block.subscribed_block_row = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$components$block$subscribed_block_row__delegate = function (config,block_uuid,p__50826){
var map__50827 = p__50826;
var map__50827__$1 = cljs.core.__destructure_map(map__50827);
var opts = map__50827__$1;
var block = frontend.db.hooks.use_block(block_uuid);
var temp_collapsed_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),frontend.state.get_current_repo(),frontend.state.resolve_container_id(new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config)),block_uuid], null));
var collapsed_QMARK_ = (function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.block_collapsed_QMARK_(config,block,temp_collapsed_QMARK_);
} else {
return and__5140__auto__;
}
})();
var child_uuids = frontend.db.hooks.use_children((cljs.core.truth_(collapsed_QMARK_)?null:block_uuid));
var linked_uuid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","link","block/link",-1872399993),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
if((block == null)){
return frontend.components.block.unloaded_block_placeholder();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"library?","library?",1697356991).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.entity.page_QMARK_(block));
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(linked_uuid)){
return frontend.components.block.linked_block_row(config,block,child_uuids,linked_uuid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),collapsed_QMARK_));
} else {
return frontend.components.block.with_library_child_uuids(config,child_uuids,(function (visible_uuids){
return frontend.components.block.render_loaded_block_row(config,block,visible_uuids,frontend.components.block.virtualizable_block_list,opts);
}));

}
}
}
};
var frontend$components$block$subscribed_block_row = function (config,block_uuid,var_args){
var p__50826 = null;
if (arguments.length > 2) {
var G__51641__i = 0, G__51641__a = new Array(arguments.length -  2);
while (G__51641__i < G__51641__a.length) {G__51641__a[G__51641__i] = arguments[G__51641__i + 2]; ++G__51641__i;}
  p__50826 = new cljs.core.IndexedSeq(G__51641__a,0,null);
} 
return frontend$components$block$subscribed_block_row__delegate.call(this,config,block_uuid,p__50826);};
frontend$components$block$subscribed_block_row.cljs$lang$maxFixedArity = 2;
frontend$components$block$subscribed_block_row.cljs$lang$applyTo = (function (arglist__51642){
var config = cljs.core.first(arglist__51642);
arglist__51642 = cljs.core.next(arglist__51642);
var block_uuid = cljs.core.first(arglist__51642);
var p__50826 = cljs.core.rest(arglist__51642);
return frontend$components$block$subscribed_block_row__delegate(config,block_uuid,p__50826);
});
frontend$components$block$subscribed_block_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$subscribed_block_row__delegate;
return frontend$components$block$subscribed_block_row;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$block$subscribed_block_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50833 = cljs.core.first(args__31746__auto__);
var G__50834 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50833,G__50834) : io.factorhouse.hsx.core.obj_get.call(null,G__50833,G__50834));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"subscribed-block-row","subscribed-block-row",362922476,null),args__31746__auto__),frontend$components$block$subscribed_block_row,args__31746__auto__,null);
}
};
var frontend$components$block$subscribed_block_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51643__i = 0, G__51643__a = new Array(arguments.length -  0);
while (G__51643__i < G__51643__a.length) {G__51643__a[G__51643__i] = arguments[G__51643__i + 0]; ++G__51643__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51643__a,0,null);
} 
return frontend$components$block$subscribed_block_row__delegate.call(this,args__31746__auto__);};
frontend$components$block$subscribed_block_row.cljs$lang$maxFixedArity = 0;
frontend$components$block$subscribed_block_row.cljs$lang$applyTo = (function (arglist__51645){
var args__31746__auto__ = cljs.core.seq(arglist__51645);
return frontend$components$block$subscribed_block_row__delegate(args__31746__auto__);
});
frontend$components$block$subscribed_block_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$subscribed_block_row__delegate;
return frontend$components$block$subscribed_block_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50836 = comp__31745__auto__;
var G__50837 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50836,G__50837) : io.factorhouse.hsx.core.react_memo.call(null,G__50836,G__50837));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"subscribed-block-row");

return comp__31745__auto__;
})();
frontend.components.block.plain_block_list = (function (){var render_fn__31744__auto__ = (function frontend$components$block$plain_block_list(config,block_uuids){
var block_uuids__$1 = cljs.core.vec(block_uuids);
var blocks_count = cljs.core.count(block_uuids__$1);
if(cljs.core.seq(block_uuids__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blocks-list-wrap","div.blocks-list-wrap",-1080970966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-level","data-level",1364295892),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,block_uuid){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.subscribed_block_row,config,block_uuid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top?","top?",-1883283796),(idx === (0)),new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((blocks_count - (1)),idx)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid))], null));
}),block_uuids__$1)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$plain_block_list__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50844 = cljs.core.first(args__31746__auto__);
var G__50845 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50844,G__50845) : io.factorhouse.hsx.core.obj_get.call(null,G__50844,G__50845));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"plain-block-list","plain-block-list",247586597,null),args__31746__auto__),frontend$components$block$plain_block_list,args__31746__auto__,null);
}
};
var frontend$components$block$plain_block_list = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51648__i = 0, G__51648__a = new Array(arguments.length -  0);
while (G__51648__i < G__51648__a.length) {G__51648__a[G__51648__i] = arguments[G__51648__i + 0]; ++G__51648__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51648__a,0,null);
} 
return frontend$components$block$plain_block_list__delegate.call(this,args__31746__auto__);};
frontend$components$block$plain_block_list.cljs$lang$maxFixedArity = 0;
frontend$components$block$plain_block_list.cljs$lang$applyTo = (function (arglist__51649){
var args__31746__auto__ = cljs.core.seq(arglist__51649);
return frontend$components$block$plain_block_list__delegate(args__31746__auto__);
});
frontend$components$block$plain_block_list.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$plain_block_list__delegate;
return frontend$components$block$plain_block_list;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50847 = comp__31745__auto__;
var G__50848 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50847,G__50848) : io.factorhouse.hsx.core.react_memo.call(null,G__50847,G__50848));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"plain-block-list");

return comp__31745__auto__;
})();
frontend.components.block.page_root_virtual_list = (function (){var render_fn__31744__auto__ = (function frontend$components$block$page_root_virtual_list(config,block_uuids){
var map__50850 = frontend.components.block.use_virtual_list_opts(config,block_uuids);
var map__50850__$1 = cljs.core.__destructure_map(map__50850);
var virtualized_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50850__$1,new cljs.core.Keyword(null,"virtualized?","virtualized?",285216968));
var virtual_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50850__$1,new cljs.core.Keyword(null,"virtual-opts","virtual-opts",-708437043));
var _STAR_virtualized_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50850__$1,new cljs.core.Keyword(null,"*virtualized-ref","*virtualized-ref",-947594237));
var _STAR_block_uuids_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50850__$1,new cljs.core.Keyword(null,"*block-uuids-ref","*block-uuids-ref",-388286033));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = virtualized_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.seq(block_uuids);
if(and__5140__auto____$1){
return new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079).cljs$core$IFn$_invoke$arity$1(config);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var ref_51652 = _STAR_virtualized_ref.current;
frontend.handler.ui.scroll_to_anchor_block(ref_51652,block_uuids,false);

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","virtualized-scroll-fn","editor/virtualized-scroll-fn",-343790237),(function (){
return frontend.handler.ui.scroll_to_anchor_block(ref_51652,_STAR_block_uuids_ref.current,false);
}));
} else {
}

return (function (){
return null;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [virtualized_QMARK_], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blocks-container.flex-1","div.blocks-container.flex-1",520515548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"containerid","containerid",-1132769612),new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config)], null),(cljs.core.truth_(virtualized_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blocks-list-wrap","div.blocks-list-wrap",-1080970966),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-level","data-level",1364295892),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"data-virtuoso-scroller","data-virtuoso-scroller",172478125),true], null),frontend.ui.virtualized_list(virtual_opts)], null):frontend.components.block.plain_block_list(config,block_uuids))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$page_root_virtual_list__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50855 = cljs.core.first(args__31746__auto__);
var G__50856 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50855,G__50856) : io.factorhouse.hsx.core.obj_get.call(null,G__50855,G__50856));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-root-virtual-list","page-root-virtual-list",1067731820,null),args__31746__auto__),frontend$components$block$page_root_virtual_list,args__31746__auto__,null);
}
};
var frontend$components$block$page_root_virtual_list = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51655__i = 0, G__51655__a = new Array(arguments.length -  0);
while (G__51655__i < G__51655__a.length) {G__51655__a[G__51655__i] = arguments[G__51655__i + 0]; ++G__51655__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51655__a,0,null);
} 
return frontend$components$block$page_root_virtual_list__delegate.call(this,args__31746__auto__);};
frontend$components$block$page_root_virtual_list.cljs$lang$maxFixedArity = 0;
frontend$components$block$page_root_virtual_list.cljs$lang$applyTo = (function (arglist__51656){
var args__31746__auto__ = cljs.core.seq(arglist__51656);
return frontend$components$block$page_root_virtual_list__delegate(args__31746__auto__);
});
frontend$components$block$page_root_virtual_list.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$page_root_virtual_list__delegate;
return frontend$components$block$page_root_virtual_list;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50858 = comp__31745__auto__;
var G__50859 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50858,G__50859) : io.factorhouse.hsx.core.react_memo.call(null,G__50858,G__50859));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-root-virtual-list");

return comp__31745__auto__;
})();
frontend.components.block.block_row_uuid = (function frontend$components$block$block_row_uuid(block){
var block_uuid = ((cljs.core.uuid_QMARK_(block))?block:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.uuid_QMARK_(block_uuid)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid block row",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null));
}

return block_uuid;
});
frontend.components.block.blocks_container = (function (){var render_fn__31744__auto__ = (function frontend$components$block$blocks_container(config,blocks){
var block_uuids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.components.block.block_row_uuid,blocks);
var doc_mode_QMARK_ = new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config);
var id = logseq.shui.hooks.use_memo((function (){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),cljs.core.PersistentVector.EMPTY);
var container_key = cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"embed?","embed?",-922305920),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"table?","table?",-1064705406),new cljs.core.Keyword(null,"block?","block?",1102479923),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"page-name","page-name",974981762)], null));
var container_id = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_container_id(container_key);
}
})();
if(cljs.core.seq(block_uuids)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blocks-container.flex-1","div.blocks-container.flex-1",520515548),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(doc_mode_QMARK_)?"document-mode":null),new cljs.core.Keyword(null,"containerid","containerid",-1132769612),container_id], null),frontend.components.block.plain_block_list(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848)),new cljs.core.Keyword(null,"blocks-node-id","blocks-node-id",-1095052634),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], 0)),block_uuids)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$blocks_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__50865 = cljs.core.first(args__31746__auto__);
var G__50866 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50865,G__50866) : io.factorhouse.hsx.core.obj_get.call(null,G__50865,G__50866));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"blocks-container","blocks-container",1099712016,null),args__31746__auto__),frontend$components$block$blocks_container,args__31746__auto__,null);
}
};
var frontend$components$block$blocks_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__51663__i = 0, G__51663__a = new Array(arguments.length -  0);
while (G__51663__i < G__51663__a.length) {G__51663__a[G__51663__i] = arguments[G__51663__i + 0]; ++G__51663__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__51663__a,0,null);
} 
return frontend$components$block$blocks_container__delegate.call(this,args__31746__auto__);};
frontend$components$block$blocks_container.cljs$lang$maxFixedArity = 0;
frontend$components$block$blocks_container.cljs$lang$applyTo = (function (arglist__51664){
var args__31746__auto__ = cljs.core.seq(arglist__51664);
return frontend$components$block$blocks_container__delegate(args__31746__auto__);
});
frontend$components$block$blocks_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$blocks_container__delegate;
return frontend$components$block$blocks_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__50868 = comp__31745__auto__;
var G__50869 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50868,G__50869) : io.factorhouse.hsx.core.react_memo.call(null,G__50868,G__50869));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"blocks-container");

return comp__31745__auto__;
})();
frontend.components.block.grouped_blocks_container = (function frontend$components$block$grouped_blocks_container(config,groups){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.references-blocks-wrap","div.flex.flex-col.references-blocks-wrap",-1419335530),(function (){var iter__5628__auto__ = (function frontend$components$block$grouped_blocks_container_$_iter__50871(s__50872){
return (new cljs.core.LazySeq(null,(function (){
var s__50872__$1 = s__50872;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50872__$1);
if(temp__5825__auto__){
var s__50872__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50872__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50872__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50874 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50873 = (0);
while(true){
if((i__50873 < size__5627__auto__)){
var vec__50877 = cljs.core._nth(c__5626__auto__,i__50873);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50877,(0),null);
var page_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50877,(1),null);
var page_blocks__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,page_blocks));
if(cljs.core.seq(page_blocks__$1)){
cljs.core.chunk_append(b__50874,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2.references-blocks-item","div.my-2.references-blocks-item",-1813100606),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)))], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.with-foldable-page","div.with-foldable-page",-1284568708),frontend.components.block.page_cp(config,page)], null),((function (i__50873,s__50872__$1,page_blocks__$1,vec__50877,page,page_blocks,c__5626__auto__,size__5627__auto__,b__50874,s__50872__$2,temp__5825__auto__){
return (function (){
return frontend.components.block.blocks_container(config,page_blocks__$1);
});})(i__50873,s__50872__$1,page_blocks__$1,vec__50877,page,page_blocks,c__5626__auto__,size__5627__auto__,b__50874,s__50872__$2,temp__5825__auto__))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-id","debug-id",-938947038),page], null))], null));

var G__51669 = (i__50873 + (1));
i__50873 = G__51669;
continue;
} else {
var G__51670 = (i__50873 + (1));
i__50873 = G__51670;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50874),frontend$components$block$grouped_blocks_container_$_iter__50871(cljs.core.chunk_rest(s__50872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50874),null);
}
} else {
var vec__50883 = cljs.core.first(s__50872__$2);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50883,(0),null);
var page_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50883,(1),null);
var page_blocks__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,page_blocks));
if(cljs.core.seq(page_blocks__$1)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2.references-blocks-item","div.my-2.references-blocks-item",-1813100606),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)))], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.with-foldable-page","div.with-foldable-page",-1284568708),frontend.components.block.page_cp(config,page)], null),((function (s__50872__$1,page_blocks__$1,vec__50883,page,page_blocks,s__50872__$2,temp__5825__auto__){
return (function (){
return frontend.components.block.blocks_container(config,page_blocks__$1);
});})(s__50872__$1,page_blocks__$1,vec__50883,page,page_blocks,s__50872__$2,temp__5825__auto__))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-id","debug-id",-938947038),page], null))], null),frontend$components$block$grouped_blocks_container_$_iter__50871(cljs.core.rest(s__50872__$2)));
} else {
var G__51671 = cljs.core.rest(s__50872__$2);
s__50872__$1 = G__51671;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(groups);
})()], null);
});
frontend.components.block.grouped_block_rows_QMARK_ = (function frontend$components$block$grouped_block_rows_QMARK_(blocks){
var or__5142__auto__ = cljs.core.map_QMARK_(blocks);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var row = cljs.core.first(blocks);
return ((cljs.core.sequential_QMARK_(row)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(row))) && (((cljs.core.map_QMARK_(cljs.core.first(row))) && (cljs.core.sequential_QMARK_(cljs.core.second(row))))))));
}
});
frontend.components.block.__GT_hiccup = (function frontend$components$block$__GT_hiccup(blocks,config,option){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(function (){var G__50889 = option;
if(cljs.core.truth_(new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50889,new cljs.core.Keyword(null,"class","class",-2030961996),"doc-mode");
} else {
return G__50889;
}
})(),(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.grouped_block_rows_QMARK_(blocks);
} else {
return and__5140__auto__;
}
})())?frontend.components.block.grouped_blocks_container(config,blocks):frontend.components.block.blocks_container(config,blocks))], null);
});

//# sourceMappingURL=frontend.components.block.js.map
