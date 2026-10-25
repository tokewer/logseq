goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__5142__auto__ = elem.textContent;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__29882 = arguments.length;
switch (G__29882) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5823__auto__ = elem.classList;
if(cljs.core.truth_(temp__5823__auto__)){
var class_list = temp__5823__auto__;
return class_list.contains(c__$1);
} else {
var temp__5825__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5825__auto__)){
var class_name = temp__5825__auto__;
var temp__5825__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5825__auto____$1)){
var i = temp__5825__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__29929 = arguments.length;
switch (G__29929) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__29947 = arguments.length;
switch (G__29947) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__29943_SHARP_){
return (!((p1__29943_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___31111 = arguments.length;
var i__5877__auto___31112 = (0);
while(true){
if((i__5877__auto___31112 < len__5876__auto___31111)){
args__5882__auto__.push((arguments[i__5877__auto___31112]));

var G__31113 = (i__5877__auto___31112 + (1));
i__5877__auto___31112 = G__31113;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__29989_31118 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__29990_31119 = null;
var count__29991_31120 = (0);
var i__29992_31121 = (0);
while(true){
if((i__29992_31121 < count__29991_31120)){
var vec__30001_31123 = chunk__29990_31119.cljs$core$IIndexed$_nth$arity$2(null,i__29992_31121);
var k_31124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30001_31123,(0),null);
var v_31125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30001_31123,(1),null);
style.setProperty(dommy.utils.as_str(k_31124),v_31125);


var G__31127 = seq__29989_31118;
var G__31128 = chunk__29990_31119;
var G__31129 = count__29991_31120;
var G__31130 = (i__29992_31121 + (1));
seq__29989_31118 = G__31127;
chunk__29990_31119 = G__31128;
count__29991_31120 = G__31129;
i__29992_31121 = G__31130;
continue;
} else {
var temp__5825__auto___31131 = cljs.core.seq(seq__29989_31118);
if(temp__5825__auto___31131){
var seq__29989_31132__$1 = temp__5825__auto___31131;
if(cljs.core.chunked_seq_QMARK_(seq__29989_31132__$1)){
var c__5673__auto___31133 = cljs.core.chunk_first(seq__29989_31132__$1);
var G__31134 = cljs.core.chunk_rest(seq__29989_31132__$1);
var G__31135 = c__5673__auto___31133;
var G__31136 = cljs.core.count(c__5673__auto___31133);
var G__31137 = (0);
seq__29989_31118 = G__31134;
chunk__29990_31119 = G__31135;
count__29991_31120 = G__31136;
i__29992_31121 = G__31137;
continue;
} else {
var vec__30008_31139 = cljs.core.first(seq__29989_31132__$1);
var k_31140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30008_31139,(0),null);
var v_31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30008_31139,(1),null);
style.setProperty(dommy.utils.as_str(k_31140),v_31141);


var G__31143 = cljs.core.next(seq__29989_31132__$1);
var G__31144 = null;
var G__31145 = (0);
var G__31146 = (0);
seq__29989_31118 = G__31143;
chunk__29990_31119 = G__31144;
count__29991_31120 = G__31145;
i__29992_31121 = G__31146;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq29982){
var G__29983 = cljs.core.first(seq29982);
var seq29982__$1 = cljs.core.next(seq29982);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29983,seq29982__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___31148 = arguments.length;
var i__5877__auto___31149 = (0);
while(true){
if((i__5877__auto___31149 < len__5876__auto___31148)){
args__5882__auto__.push((arguments[i__5877__auto___31149]));

var G__31151 = (i__5877__auto___31149 + (1));
i__5877__auto___31149 = G__31151;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__30018_31154 = cljs.core.seq(keywords);
var chunk__30019_31155 = null;
var count__30020_31156 = (0);
var i__30021_31157 = (0);
while(true){
if((i__30021_31157 < count__30020_31156)){
var kw_31158 = chunk__30019_31155.cljs$core$IIndexed$_nth$arity$2(null,i__30021_31157);
style.removeProperty(dommy.utils.as_str(kw_31158));


var G__31159 = seq__30018_31154;
var G__31160 = chunk__30019_31155;
var G__31161 = count__30020_31156;
var G__31162 = (i__30021_31157 + (1));
seq__30018_31154 = G__31159;
chunk__30019_31155 = G__31160;
count__30020_31156 = G__31161;
i__30021_31157 = G__31162;
continue;
} else {
var temp__5825__auto___31163 = cljs.core.seq(seq__30018_31154);
if(temp__5825__auto___31163){
var seq__30018_31164__$1 = temp__5825__auto___31163;
if(cljs.core.chunked_seq_QMARK_(seq__30018_31164__$1)){
var c__5673__auto___31165 = cljs.core.chunk_first(seq__30018_31164__$1);
var G__31166 = cljs.core.chunk_rest(seq__30018_31164__$1);
var G__31167 = c__5673__auto___31165;
var G__31168 = cljs.core.count(c__5673__auto___31165);
var G__31169 = (0);
seq__30018_31154 = G__31166;
chunk__30019_31155 = G__31167;
count__30020_31156 = G__31168;
i__30021_31157 = G__31169;
continue;
} else {
var kw_31170 = cljs.core.first(seq__30018_31164__$1);
style.removeProperty(dommy.utils.as_str(kw_31170));


var G__31171 = cljs.core.next(seq__30018_31164__$1);
var G__31172 = null;
var G__31173 = (0);
var G__31174 = (0);
seq__30018_31154 = G__31171;
chunk__30019_31155 = G__31172;
count__30020_31156 = G__31173;
i__30021_31157 = G__31174;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq30016){
var G__30017 = cljs.core.first(seq30016);
var seq30016__$1 = cljs.core.next(seq30016);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30017,seq30016__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___31175 = arguments.length;
var i__5877__auto___31176 = (0);
while(true){
if((i__5877__auto___31176 < len__5876__auto___31175)){
args__5882__auto__.push((arguments[i__5877__auto___31176]));

var G__31177 = (i__5877__auto___31176 + (1));
i__5877__auto___31176 = G__31177;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__30035_31178 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__30036_31179 = null;
var count__30037_31180 = (0);
var i__30038_31181 = (0);
while(true){
if((i__30038_31181 < count__30037_31180)){
var vec__30050_31182 = chunk__30036_31179.cljs$core$IIndexed$_nth$arity$2(null,i__30038_31181);
var k_31183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30050_31182,(0),null);
var v_31184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30050_31182,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31183,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31184)+"px")], 0));


var G__31186 = seq__30035_31178;
var G__31187 = chunk__30036_31179;
var G__31188 = count__30037_31180;
var G__31189 = (i__30038_31181 + (1));
seq__30035_31178 = G__31186;
chunk__30036_31179 = G__31187;
count__30037_31180 = G__31188;
i__30038_31181 = G__31189;
continue;
} else {
var temp__5825__auto___31190 = cljs.core.seq(seq__30035_31178);
if(temp__5825__auto___31190){
var seq__30035_31191__$1 = temp__5825__auto___31190;
if(cljs.core.chunked_seq_QMARK_(seq__30035_31191__$1)){
var c__5673__auto___31192 = cljs.core.chunk_first(seq__30035_31191__$1);
var G__31193 = cljs.core.chunk_rest(seq__30035_31191__$1);
var G__31194 = c__5673__auto___31192;
var G__31195 = cljs.core.count(c__5673__auto___31192);
var G__31196 = (0);
seq__30035_31178 = G__31193;
chunk__30036_31179 = G__31194;
count__30037_31180 = G__31195;
i__30038_31181 = G__31196;
continue;
} else {
var vec__30054_31198 = cljs.core.first(seq__30035_31191__$1);
var k_31200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30054_31198,(0),null);
var v_31201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30054_31198,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31200,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31201)+"px")], 0));


var G__31202 = cljs.core.next(seq__30035_31191__$1);
var G__31203 = null;
var G__31204 = (0);
var G__31205 = (0);
seq__30035_31178 = G__31202;
chunk__30036_31179 = G__31203;
count__30037_31180 = G__31204;
i__30038_31181 = G__31205;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq30030){
var G__30031 = cljs.core.first(seq30030);
var seq30030__$1 = cljs.core.next(seq30030);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30031,seq30030__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__30069 = arguments.length;
switch (G__30069) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___31209 = arguments.length;
var i__5877__auto___31210 = (0);
while(true){
if((i__5877__auto___31210 < len__5876__auto___31209)){
args_arr__5901__auto__.push((arguments[i__5877__auto___31210]));

var G__31211 = (i__5877__auto___31210 + (1));
i__5877__auto___31210 = G__31211;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((3) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((3)),(0),null)):null);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5902__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__30072 = elem;
(G__30072[k__$1] = v);

return G__30072;
} else {
var G__30073 = elem;
G__30073.setAttribute(k__$1,v);

return G__30073;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__30074_31214 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__30075_31215 = null;
var count__30076_31216 = (0);
var i__30077_31217 = (0);
while(true){
if((i__30077_31217 < count__30076_31216)){
var vec__30089_31218 = chunk__30075_31215.cljs$core$IIndexed$_nth$arity$2(null,i__30077_31217);
var k_31219__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30089_31218,(0),null);
var v_31220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30089_31218,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_31219__$1,v_31220__$1);


var G__31222 = seq__30074_31214;
var G__31223 = chunk__30075_31215;
var G__31224 = count__30076_31216;
var G__31225 = (i__30077_31217 + (1));
seq__30074_31214 = G__31222;
chunk__30075_31215 = G__31223;
count__30076_31216 = G__31224;
i__30077_31217 = G__31225;
continue;
} else {
var temp__5825__auto___31226 = cljs.core.seq(seq__30074_31214);
if(temp__5825__auto___31226){
var seq__30074_31227__$1 = temp__5825__auto___31226;
if(cljs.core.chunked_seq_QMARK_(seq__30074_31227__$1)){
var c__5673__auto___31228 = cljs.core.chunk_first(seq__30074_31227__$1);
var G__31229 = cljs.core.chunk_rest(seq__30074_31227__$1);
var G__31230 = c__5673__auto___31228;
var G__31231 = cljs.core.count(c__5673__auto___31228);
var G__31232 = (0);
seq__30074_31214 = G__31229;
chunk__30075_31215 = G__31230;
count__30076_31216 = G__31231;
i__30077_31217 = G__31232;
continue;
} else {
var vec__30094_31233 = cljs.core.first(seq__30074_31227__$1);
var k_31234__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30094_31233,(0),null);
var v_31235__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30094_31233,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_31234__$1,v_31235__$1);


var G__31236 = cljs.core.next(seq__30074_31227__$1);
var G__31237 = null;
var G__31238 = (0);
var G__31239 = (0);
seq__30074_31214 = G__31236;
chunk__30075_31215 = G__31237;
count__30076_31216 = G__31238;
i__30077_31217 = G__31239;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq30063){
var G__30064 = cljs.core.first(seq30063);
var seq30063__$1 = cljs.core.next(seq30063);
var G__30065 = cljs.core.first(seq30063__$1);
var seq30063__$2 = cljs.core.next(seq30063__$1);
var G__30066 = cljs.core.first(seq30063__$2);
var seq30063__$3 = cljs.core.next(seq30063__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30064,G__30065,G__30066,seq30063__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__30101 = arguments.length;
switch (G__30101) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___31243 = arguments.length;
var i__5877__auto___31244 = (0);
while(true){
if((i__5877__auto___31244 < len__5876__auto___31243)){
args_arr__5901__auto__.push((arguments[i__5877__auto___31244]));

var G__31245 = (i__5877__auto___31244 + (1));
i__5877__auto___31244 = G__31245;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_31246__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__30103 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__30103.cljs$core$IFn$_invoke$arity$1 ? fexpr__30103.cljs$core$IFn$_invoke$arity$1(k_31246__$1) : fexpr__30103.call(null,k_31246__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_31246__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__30104_31249 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__30105_31250 = null;
var count__30106_31251 = (0);
var i__30107_31252 = (0);
while(true){
if((i__30107_31252 < count__30106_31251)){
var k_31253__$1 = chunk__30105_31250.cljs$core$IIndexed$_nth$arity$2(null,i__30107_31252);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_31253__$1);


var G__31254 = seq__30104_31249;
var G__31255 = chunk__30105_31250;
var G__31256 = count__30106_31251;
var G__31257 = (i__30107_31252 + (1));
seq__30104_31249 = G__31254;
chunk__30105_31250 = G__31255;
count__30106_31251 = G__31256;
i__30107_31252 = G__31257;
continue;
} else {
var temp__5825__auto___31258 = cljs.core.seq(seq__30104_31249);
if(temp__5825__auto___31258){
var seq__30104_31259__$1 = temp__5825__auto___31258;
if(cljs.core.chunked_seq_QMARK_(seq__30104_31259__$1)){
var c__5673__auto___31260 = cljs.core.chunk_first(seq__30104_31259__$1);
var G__31261 = cljs.core.chunk_rest(seq__30104_31259__$1);
var G__31262 = c__5673__auto___31260;
var G__31263 = cljs.core.count(c__5673__auto___31260);
var G__31264 = (0);
seq__30104_31249 = G__31261;
chunk__30105_31250 = G__31262;
count__30106_31251 = G__31263;
i__30107_31252 = G__31264;
continue;
} else {
var k_31265__$1 = cljs.core.first(seq__30104_31259__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_31265__$1);


var G__31266 = cljs.core.next(seq__30104_31259__$1);
var G__31267 = null;
var G__31268 = (0);
var G__31269 = (0);
seq__30104_31249 = G__31266;
chunk__30105_31250 = G__31267;
count__30106_31251 = G__31268;
i__30107_31252 = G__31269;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq30098){
var G__30099 = cljs.core.first(seq30098);
var seq30098__$1 = cljs.core.next(seq30098);
var G__30100 = cljs.core.first(seq30098__$1);
var seq30098__$2 = cljs.core.next(seq30098__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30099,G__30100,seq30098__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__30119 = arguments.length;
switch (G__30119) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__30125 = arguments.length;
switch (G__30125) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___31272 = arguments.length;
var i__5877__auto___31273 = (0);
while(true){
if((i__5877__auto___31273 < len__5876__auto___31272)){
args_arr__5901__auto__.push((arguments[i__5877__auto___31273]));

var G__31274 = (i__5877__auto___31273 + (1));
i__5877__auto___31273 = G__31274;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5823__auto___31275 = elem.classList;
if(cljs.core.truth_(temp__5823__auto___31275)){
var class_list_31276 = temp__5823__auto___31275;
var seq__30126_31277 = cljs.core.seq(classes__$1);
var chunk__30127_31278 = null;
var count__30128_31279 = (0);
var i__30129_31280 = (0);
while(true){
if((i__30129_31280 < count__30128_31279)){
var c_31281 = chunk__30127_31278.cljs$core$IIndexed$_nth$arity$2(null,i__30129_31280);
class_list_31276.add(c_31281);


var G__31282 = seq__30126_31277;
var G__31283 = chunk__30127_31278;
var G__31284 = count__30128_31279;
var G__31285 = (i__30129_31280 + (1));
seq__30126_31277 = G__31282;
chunk__30127_31278 = G__31283;
count__30128_31279 = G__31284;
i__30129_31280 = G__31285;
continue;
} else {
var temp__5825__auto___31286 = cljs.core.seq(seq__30126_31277);
if(temp__5825__auto___31286){
var seq__30126_31287__$1 = temp__5825__auto___31286;
if(cljs.core.chunked_seq_QMARK_(seq__30126_31287__$1)){
var c__5673__auto___31288 = cljs.core.chunk_first(seq__30126_31287__$1);
var G__31289 = cljs.core.chunk_rest(seq__30126_31287__$1);
var G__31290 = c__5673__auto___31288;
var G__31291 = cljs.core.count(c__5673__auto___31288);
var G__31292 = (0);
seq__30126_31277 = G__31289;
chunk__30127_31278 = G__31290;
count__30128_31279 = G__31291;
i__30129_31280 = G__31292;
continue;
} else {
var c_31293 = cljs.core.first(seq__30126_31287__$1);
class_list_31276.add(c_31293);


var G__31294 = cljs.core.next(seq__30126_31287__$1);
var G__31295 = null;
var G__31296 = (0);
var G__31297 = (0);
seq__30126_31277 = G__31294;
chunk__30127_31278 = G__31295;
count__30128_31279 = G__31296;
i__30129_31280 = G__31297;
continue;
}
} else {
}
}
break;
}
} else {
var seq__30131_31298 = cljs.core.seq(classes__$1);
var chunk__30132_31299 = null;
var count__30133_31300 = (0);
var i__30134_31301 = (0);
while(true){
if((i__30134_31301 < count__30133_31300)){
var c_31302 = chunk__30132_31299.cljs$core$IIndexed$_nth$arity$2(null,i__30134_31301);
var class_name_31303 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_31303,c_31302))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_31303 === ""))?c_31302:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_31303)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_31302))));
}


var G__31304 = seq__30131_31298;
var G__31305 = chunk__30132_31299;
var G__31306 = count__30133_31300;
var G__31307 = (i__30134_31301 + (1));
seq__30131_31298 = G__31304;
chunk__30132_31299 = G__31305;
count__30133_31300 = G__31306;
i__30134_31301 = G__31307;
continue;
} else {
var temp__5825__auto___31308 = cljs.core.seq(seq__30131_31298);
if(temp__5825__auto___31308){
var seq__30131_31309__$1 = temp__5825__auto___31308;
if(cljs.core.chunked_seq_QMARK_(seq__30131_31309__$1)){
var c__5673__auto___31310 = cljs.core.chunk_first(seq__30131_31309__$1);
var G__31311 = cljs.core.chunk_rest(seq__30131_31309__$1);
var G__31312 = c__5673__auto___31310;
var G__31313 = cljs.core.count(c__5673__auto___31310);
var G__31315 = (0);
seq__30131_31298 = G__31311;
chunk__30132_31299 = G__31312;
count__30133_31300 = G__31313;
i__30134_31301 = G__31315;
continue;
} else {
var c_31317 = cljs.core.first(seq__30131_31309__$1);
var class_name_31318 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_31318,c_31317))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_31318 === ""))?c_31317:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_31318)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_31317))));
}


var G__31319 = cljs.core.next(seq__30131_31309__$1);
var G__31320 = null;
var G__31321 = (0);
var G__31322 = (0);
seq__30131_31298 = G__31319;
chunk__30132_31299 = G__31320;
count__30133_31300 = G__31321;
i__30134_31301 = G__31322;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__30143_31323 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__30144_31324 = null;
var count__30145_31325 = (0);
var i__30146_31326 = (0);
while(true){
if((i__30146_31326 < count__30145_31325)){
var c_31327 = chunk__30144_31324.cljs$core$IIndexed$_nth$arity$2(null,i__30146_31326);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_31327);


var G__31329 = seq__30143_31323;
var G__31330 = chunk__30144_31324;
var G__31331 = count__30145_31325;
var G__31332 = (i__30146_31326 + (1));
seq__30143_31323 = G__31329;
chunk__30144_31324 = G__31330;
count__30145_31325 = G__31331;
i__30146_31326 = G__31332;
continue;
} else {
var temp__5825__auto___31333 = cljs.core.seq(seq__30143_31323);
if(temp__5825__auto___31333){
var seq__30143_31334__$1 = temp__5825__auto___31333;
if(cljs.core.chunked_seq_QMARK_(seq__30143_31334__$1)){
var c__5673__auto___31335 = cljs.core.chunk_first(seq__30143_31334__$1);
var G__31336 = cljs.core.chunk_rest(seq__30143_31334__$1);
var G__31337 = c__5673__auto___31335;
var G__31338 = cljs.core.count(c__5673__auto___31335);
var G__31339 = (0);
seq__30143_31323 = G__31336;
chunk__30144_31324 = G__31337;
count__30145_31325 = G__31338;
i__30146_31326 = G__31339;
continue;
} else {
var c_31340 = cljs.core.first(seq__30143_31334__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_31340);


var G__31341 = cljs.core.next(seq__30143_31334__$1);
var G__31342 = null;
var G__31343 = (0);
var G__31344 = (0);
seq__30143_31323 = G__31341;
chunk__30144_31324 = G__31342;
count__30145_31325 = G__31343;
i__30146_31326 = G__31344;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq30122){
var G__30123 = cljs.core.first(seq30122);
var seq30122__$1 = cljs.core.next(seq30122);
var G__30124 = cljs.core.first(seq30122__$1);
var seq30122__$2 = cljs.core.next(seq30122__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30123,G__30124,seq30122__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__30159 = arguments.length;
switch (G__30159) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___31346 = arguments.length;
var i__5877__auto___31347 = (0);
while(true){
if((i__5877__auto___31347 < len__5876__auto___31346)){
args_arr__5901__auto__.push((arguments[i__5877__auto___31347]));

var G__31348 = (i__5877__auto___31347 + (1));
i__5877__auto___31347 = G__31348;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5823__auto___31349 = elem.classList;
if(cljs.core.truth_(temp__5823__auto___31349)){
var class_list_31350 = temp__5823__auto___31349;
class_list_31350.remove(c__$1);
} else {
var class_name_31351 = dommy.core.class$(elem);
var new_class_name_31352 = dommy.utils.remove_class_str(class_name_31351,c__$1);
if((class_name_31351 === new_class_name_31352)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_31352);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__30170 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__30171 = null;
var count__30172 = (0);
var i__30173 = (0);
while(true){
if((i__30173 < count__30172)){
var c = chunk__30171.cljs$core$IIndexed$_nth$arity$2(null,i__30173);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__31353 = seq__30170;
var G__31354 = chunk__30171;
var G__31355 = count__30172;
var G__31356 = (i__30173 + (1));
seq__30170 = G__31353;
chunk__30171 = G__31354;
count__30172 = G__31355;
i__30173 = G__31356;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30170);
if(temp__5825__auto__){
var seq__30170__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30170__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__30170__$1);
var G__31357 = cljs.core.chunk_rest(seq__30170__$1);
var G__31358 = c__5673__auto__;
var G__31359 = cljs.core.count(c__5673__auto__);
var G__31360 = (0);
seq__30170 = G__31357;
chunk__30171 = G__31358;
count__30172 = G__31359;
i__30173 = G__31360;
continue;
} else {
var c = cljs.core.first(seq__30170__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__31361 = cljs.core.next(seq__30170__$1);
var G__31362 = null;
var G__31363 = (0);
var G__31364 = (0);
seq__30170 = G__31361;
chunk__30171 = G__31362;
count__30172 = G__31363;
i__30173 = G__31364;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq30156){
var G__30157 = cljs.core.first(seq30156);
var seq30156__$1 = cljs.core.next(seq30156);
var G__30158 = cljs.core.first(seq30156__$1);
var seq30156__$2 = cljs.core.next(seq30156__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30157,G__30158,seq30156__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__30187 = arguments.length;
switch (G__30187) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5823__auto___31366 = elem.classList;
if(cljs.core.truth_(temp__5823__auto___31366)){
var class_list_31367 = temp__5823__auto___31366;
class_list_31367.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__30207 = arguments.length;
switch (G__30207) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__30234 = arguments.length;
switch (G__30234) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__30255 = arguments.length;
switch (G__30255) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___31375 = arguments.length;
var i__5877__auto___31376 = (0);
while(true){
if((i__5877__auto___31376 < len__5876__auto___31375)){
args_arr__5901__auto__.push((arguments[i__5877__auto___31376]));

var G__31378 = (i__5877__auto___31376 + (1));
i__5877__auto___31376 = G__31378;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__30259 = parent;
G__30259.appendChild(child);

return G__30259;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__30264_31379 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__30265_31380 = null;
var count__30266_31381 = (0);
var i__30267_31382 = (0);
while(true){
if((i__30267_31382 < count__30266_31381)){
var c_31383 = chunk__30265_31380.cljs$core$IIndexed$_nth$arity$2(null,i__30267_31382);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_31383);


var G__31384 = seq__30264_31379;
var G__31385 = chunk__30265_31380;
var G__31386 = count__30266_31381;
var G__31387 = (i__30267_31382 + (1));
seq__30264_31379 = G__31384;
chunk__30265_31380 = G__31385;
count__30266_31381 = G__31386;
i__30267_31382 = G__31387;
continue;
} else {
var temp__5825__auto___31389 = cljs.core.seq(seq__30264_31379);
if(temp__5825__auto___31389){
var seq__30264_31390__$1 = temp__5825__auto___31389;
if(cljs.core.chunked_seq_QMARK_(seq__30264_31390__$1)){
var c__5673__auto___31391 = cljs.core.chunk_first(seq__30264_31390__$1);
var G__31392 = cljs.core.chunk_rest(seq__30264_31390__$1);
var G__31393 = c__5673__auto___31391;
var G__31394 = cljs.core.count(c__5673__auto___31391);
var G__31395 = (0);
seq__30264_31379 = G__31392;
chunk__30265_31380 = G__31393;
count__30266_31381 = G__31394;
i__30267_31382 = G__31395;
continue;
} else {
var c_31396 = cljs.core.first(seq__30264_31390__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_31396);


var G__31397 = cljs.core.next(seq__30264_31390__$1);
var G__31398 = null;
var G__31399 = (0);
var G__31400 = (0);
seq__30264_31379 = G__31397;
chunk__30265_31380 = G__31398;
count__30266_31381 = G__31399;
i__30267_31382 = G__31400;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq30251){
var G__30252 = cljs.core.first(seq30251);
var seq30251__$1 = cljs.core.next(seq30251);
var G__30253 = cljs.core.first(seq30251__$1);
var seq30251__$2 = cljs.core.next(seq30251__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30252,G__30253,seq30251__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__30275 = arguments.length;
switch (G__30275) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___31402 = arguments.length;
var i__5877__auto___31403 = (0);
while(true){
if((i__5877__auto___31403 < len__5876__auto___31402)){
args_arr__5901__auto__.push((arguments[i__5877__auto___31403]));

var G__31404 = (i__5877__auto___31403 + (1));
i__5877__auto___31403 = G__31404;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__30287 = parent;
G__30287.insertBefore(child,parent.firstChild);

return G__30287;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__30288_31407 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__30289_31408 = null;
var count__30290_31409 = (0);
var i__30291_31410 = (0);
while(true){
if((i__30291_31410 < count__30290_31409)){
var c_31411 = chunk__30289_31408.cljs$core$IIndexed$_nth$arity$2(null,i__30291_31410);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_31411);


var G__31413 = seq__30288_31407;
var G__31414 = chunk__30289_31408;
var G__31415 = count__30290_31409;
var G__31416 = (i__30291_31410 + (1));
seq__30288_31407 = G__31413;
chunk__30289_31408 = G__31414;
count__30290_31409 = G__31415;
i__30291_31410 = G__31416;
continue;
} else {
var temp__5825__auto___31417 = cljs.core.seq(seq__30288_31407);
if(temp__5825__auto___31417){
var seq__30288_31418__$1 = temp__5825__auto___31417;
if(cljs.core.chunked_seq_QMARK_(seq__30288_31418__$1)){
var c__5673__auto___31419 = cljs.core.chunk_first(seq__30288_31418__$1);
var G__31420 = cljs.core.chunk_rest(seq__30288_31418__$1);
var G__31421 = c__5673__auto___31419;
var G__31422 = cljs.core.count(c__5673__auto___31419);
var G__31423 = (0);
seq__30288_31407 = G__31420;
chunk__30289_31408 = G__31421;
count__30290_31409 = G__31422;
i__30291_31410 = G__31423;
continue;
} else {
var c_31424 = cljs.core.first(seq__30288_31418__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_31424);


var G__31425 = cljs.core.next(seq__30288_31418__$1);
var G__31426 = null;
var G__31427 = (0);
var G__31428 = (0);
seq__30288_31407 = G__31425;
chunk__30289_31408 = G__31426;
count__30290_31409 = G__31427;
i__30291_31410 = G__31428;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq30272){
var G__30273 = cljs.core.first(seq30272);
var seq30272__$1 = cljs.core.next(seq30272);
var G__30274 = cljs.core.first(seq30272__$1);
var seq30272__$2 = cljs.core.next(seq30272__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30273,G__30274,seq30272__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error((""+"Assert failed: "+"Target element must have a parent"+"\n"+"p")));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5823__auto___31429 = other.nextSibling;
if(cljs.core.truth_(temp__5823__auto___31429)){
var next_31430 = temp__5823__auto___31429;
dommy.core.insert_before_BANG_(elem,next_31430);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error((""+"Assert failed: "+"Target element must have a parent"+"\n"+"p")));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__30349 = arguments.length;
switch (G__30349) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error((""+"Assert failed: "+"Target element must have a parent"+"\n"+"p")));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__30365 = p;
G__30365.removeChild(elem);

return G__30365;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30370){
var vec__30372 = p__30370;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30372,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30372,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__5142__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = related_target;
if(cljs.core.truth_(and__5140__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__5140__auto__ = selected_target;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__5140__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__5142__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___31432 = arguments.length;
var i__5877__auto___31433 = (0);
while(true){
if((i__5877__auto___31433 < len__5876__auto___31432)){
args__5882__auto__.push((arguments[i__5877__auto___31433]));

var G__31434 = (i__5877__auto___31433 + (1));
i__5877__auto___31433 = G__31434;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq30395){
var G__30396 = cljs.core.first(seq30395);
var seq30395__$1 = cljs.core.next(seq30395);
var G__30397 = cljs.core.first(seq30395__$1);
var seq30395__$2 = cljs.core.next(seq30395__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30396,G__30397,seq30395__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___31437 = arguments.length;
var i__5877__auto___31438 = (0);
while(true){
if((i__5877__auto___31438 < len__5876__auto___31437)){
args__5882__auto__.push((arguments[i__5877__auto___31438]));

var G__31439 = (i__5877__auto___31438 + (1));
i__5877__auto___31438 = G__31439;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__30420_31440 = dommy.core.elem_and_selector(elem_sel);
var elem_31441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30420_31440,(0),null);
var selector_31442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30420_31440,(1),null);
var seq__30423_31443 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__30430_31444 = null;
var count__30431_31445 = (0);
var i__30432_31446 = (0);
while(true){
if((i__30432_31446 < count__30431_31445)){
var vec__30573_31447 = chunk__30430_31444.cljs$core$IIndexed$_nth$arity$2(null,i__30432_31446);
var orig_type_31448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30573_31447,(0),null);
var f_31449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30573_31447,(1),null);
var seq__30433_31450 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_31448,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_31448,cljs.core.identity])));
var chunk__30435_31451 = null;
var count__30436_31452 = (0);
var i__30437_31453 = (0);
while(true){
if((i__30437_31453 < count__30436_31452)){
var vec__30624_31459 = chunk__30435_31451.cljs$core$IIndexed$_nth$arity$2(null,i__30437_31453);
var actual_type_31460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30624_31459,(0),null);
var factory_31461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30624_31459,(1),null);
var canonical_f_31462 = (function (){var G__30628 = (factory_31461.cljs$core$IFn$_invoke$arity$1 ? factory_31461.cljs$core$IFn$_invoke$arity$1(f_31449) : factory_31461.call(null,f_31449));
var fexpr__30627 = (cljs.core.truth_(selector_31442)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_31441,selector_31442):cljs.core.identity);
return (fexpr__30627.cljs$core$IFn$_invoke$arity$1 ? fexpr__30627.cljs$core$IFn$_invoke$arity$1(G__30628) : fexpr__30627.call(null,G__30628));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31441,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31442,actual_type_31460,f_31449], null),canonical_f_31462], 0));

if(cljs.core.truth_(elem_31441.addEventListener)){
elem_31441.addEventListener(cljs.core.name(actual_type_31460),canonical_f_31462);
} else {
elem_31441.attachEvent(cljs.core.name(actual_type_31460),canonical_f_31462);
}


var G__31463 = seq__30433_31450;
var G__31464 = chunk__30435_31451;
var G__31465 = count__30436_31452;
var G__31466 = (i__30437_31453 + (1));
seq__30433_31450 = G__31463;
chunk__30435_31451 = G__31464;
count__30436_31452 = G__31465;
i__30437_31453 = G__31466;
continue;
} else {
var temp__5825__auto___31467 = cljs.core.seq(seq__30433_31450);
if(temp__5825__auto___31467){
var seq__30433_31468__$1 = temp__5825__auto___31467;
if(cljs.core.chunked_seq_QMARK_(seq__30433_31468__$1)){
var c__5673__auto___31469 = cljs.core.chunk_first(seq__30433_31468__$1);
var G__31470 = cljs.core.chunk_rest(seq__30433_31468__$1);
var G__31471 = c__5673__auto___31469;
var G__31472 = cljs.core.count(c__5673__auto___31469);
var G__31473 = (0);
seq__30433_31450 = G__31470;
chunk__30435_31451 = G__31471;
count__30436_31452 = G__31472;
i__30437_31453 = G__31473;
continue;
} else {
var vec__30642_31474 = cljs.core.first(seq__30433_31468__$1);
var actual_type_31475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30642_31474,(0),null);
var factory_31476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30642_31474,(1),null);
var canonical_f_31477 = (function (){var G__30646 = (factory_31476.cljs$core$IFn$_invoke$arity$1 ? factory_31476.cljs$core$IFn$_invoke$arity$1(f_31449) : factory_31476.call(null,f_31449));
var fexpr__30645 = (cljs.core.truth_(selector_31442)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_31441,selector_31442):cljs.core.identity);
return (fexpr__30645.cljs$core$IFn$_invoke$arity$1 ? fexpr__30645.cljs$core$IFn$_invoke$arity$1(G__30646) : fexpr__30645.call(null,G__30646));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31441,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31442,actual_type_31475,f_31449], null),canonical_f_31477], 0));

if(cljs.core.truth_(elem_31441.addEventListener)){
elem_31441.addEventListener(cljs.core.name(actual_type_31475),canonical_f_31477);
} else {
elem_31441.attachEvent(cljs.core.name(actual_type_31475),canonical_f_31477);
}


var G__31480 = cljs.core.next(seq__30433_31468__$1);
var G__31481 = null;
var G__31482 = (0);
var G__31483 = (0);
seq__30433_31450 = G__31480;
chunk__30435_31451 = G__31481;
count__30436_31452 = G__31482;
i__30437_31453 = G__31483;
continue;
}
} else {
}
}
break;
}

var G__31484 = seq__30423_31443;
var G__31485 = chunk__30430_31444;
var G__31486 = count__30431_31445;
var G__31487 = (i__30432_31446 + (1));
seq__30423_31443 = G__31484;
chunk__30430_31444 = G__31485;
count__30431_31445 = G__31486;
i__30432_31446 = G__31487;
continue;
} else {
var temp__5825__auto___31488 = cljs.core.seq(seq__30423_31443);
if(temp__5825__auto___31488){
var seq__30423_31489__$1 = temp__5825__auto___31488;
if(cljs.core.chunked_seq_QMARK_(seq__30423_31489__$1)){
var c__5673__auto___31490 = cljs.core.chunk_first(seq__30423_31489__$1);
var G__31491 = cljs.core.chunk_rest(seq__30423_31489__$1);
var G__31492 = c__5673__auto___31490;
var G__31493 = cljs.core.count(c__5673__auto___31490);
var G__31494 = (0);
seq__30423_31443 = G__31491;
chunk__30430_31444 = G__31492;
count__30431_31445 = G__31493;
i__30432_31446 = G__31494;
continue;
} else {
var vec__30700_31495 = cljs.core.first(seq__30423_31489__$1);
var orig_type_31496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30700_31495,(0),null);
var f_31497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30700_31495,(1),null);
var seq__30424_31498 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_31496,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_31496,cljs.core.identity])));
var chunk__30426_31499 = null;
var count__30427_31500 = (0);
var i__30428_31501 = (0);
while(true){
if((i__30428_31501 < count__30427_31500)){
var vec__30732_31502 = chunk__30426_31499.cljs$core$IIndexed$_nth$arity$2(null,i__30428_31501);
var actual_type_31503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30732_31502,(0),null);
var factory_31504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30732_31502,(1),null);
var canonical_f_31505 = (function (){var G__30738 = (factory_31504.cljs$core$IFn$_invoke$arity$1 ? factory_31504.cljs$core$IFn$_invoke$arity$1(f_31497) : factory_31504.call(null,f_31497));
var fexpr__30737 = (cljs.core.truth_(selector_31442)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_31441,selector_31442):cljs.core.identity);
return (fexpr__30737.cljs$core$IFn$_invoke$arity$1 ? fexpr__30737.cljs$core$IFn$_invoke$arity$1(G__30738) : fexpr__30737.call(null,G__30738));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31441,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31442,actual_type_31503,f_31497], null),canonical_f_31505], 0));

if(cljs.core.truth_(elem_31441.addEventListener)){
elem_31441.addEventListener(cljs.core.name(actual_type_31503),canonical_f_31505);
} else {
elem_31441.attachEvent(cljs.core.name(actual_type_31503),canonical_f_31505);
}


var G__31510 = seq__30424_31498;
var G__31511 = chunk__30426_31499;
var G__31512 = count__30427_31500;
var G__31513 = (i__30428_31501 + (1));
seq__30424_31498 = G__31510;
chunk__30426_31499 = G__31511;
count__30427_31500 = G__31512;
i__30428_31501 = G__31513;
continue;
} else {
var temp__5825__auto___31514__$1 = cljs.core.seq(seq__30424_31498);
if(temp__5825__auto___31514__$1){
var seq__30424_31515__$1 = temp__5825__auto___31514__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30424_31515__$1)){
var c__5673__auto___31516 = cljs.core.chunk_first(seq__30424_31515__$1);
var G__31517 = cljs.core.chunk_rest(seq__30424_31515__$1);
var G__31518 = c__5673__auto___31516;
var G__31519 = cljs.core.count(c__5673__auto___31516);
var G__31520 = (0);
seq__30424_31498 = G__31517;
chunk__30426_31499 = G__31518;
count__30427_31500 = G__31519;
i__30428_31501 = G__31520;
continue;
} else {
var vec__30749_31521 = cljs.core.first(seq__30424_31515__$1);
var actual_type_31522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30749_31521,(0),null);
var factory_31523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30749_31521,(1),null);
var canonical_f_31524 = (function (){var G__30755 = (factory_31523.cljs$core$IFn$_invoke$arity$1 ? factory_31523.cljs$core$IFn$_invoke$arity$1(f_31497) : factory_31523.call(null,f_31497));
var fexpr__30754 = (cljs.core.truth_(selector_31442)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_31441,selector_31442):cljs.core.identity);
return (fexpr__30754.cljs$core$IFn$_invoke$arity$1 ? fexpr__30754.cljs$core$IFn$_invoke$arity$1(G__30755) : fexpr__30754.call(null,G__30755));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31441,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31442,actual_type_31522,f_31497], null),canonical_f_31524], 0));

if(cljs.core.truth_(elem_31441.addEventListener)){
elem_31441.addEventListener(cljs.core.name(actual_type_31522),canonical_f_31524);
} else {
elem_31441.attachEvent(cljs.core.name(actual_type_31522),canonical_f_31524);
}


var G__31525 = cljs.core.next(seq__30424_31515__$1);
var G__31526 = null;
var G__31527 = (0);
var G__31528 = (0);
seq__30424_31498 = G__31525;
chunk__30426_31499 = G__31526;
count__30427_31500 = G__31527;
i__30428_31501 = G__31528;
continue;
}
} else {
}
}
break;
}

var G__31530 = cljs.core.next(seq__30423_31489__$1);
var G__31531 = null;
var G__31532 = (0);
var G__31533 = (0);
seq__30423_31443 = G__31530;
chunk__30430_31444 = G__31531;
count__30431_31445 = G__31532;
i__30432_31446 = G__31533;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq30410){
var G__30411 = cljs.core.first(seq30410);
var seq30410__$1 = cljs.core.next(seq30410);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30411,seq30410__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___31544 = arguments.length;
var i__5877__auto___31549 = (0);
while(true){
if((i__5877__auto___31549 < len__5876__auto___31544)){
args__5882__auto__.push((arguments[i__5877__auto___31549]));

var G__31551 = (i__5877__auto___31549 + (1));
i__5877__auto___31549 = G__31551;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__30771_31559 = dommy.core.elem_and_selector(elem_sel);
var elem_31560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30771_31559,(0),null);
var selector_31561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30771_31559,(1),null);
var seq__30774_31564 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__30781_31565 = null;
var count__30782_31566 = (0);
var i__30783_31567 = (0);
while(true){
if((i__30783_31567 < count__30782_31566)){
var vec__30902_31573 = chunk__30781_31565.cljs$core$IIndexed$_nth$arity$2(null,i__30783_31567);
var orig_type_31574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30902_31573,(0),null);
var f_31575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30902_31573,(1),null);
var seq__30784_31579 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_31574,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_31574,cljs.core.identity])));
var chunk__30786_31580 = null;
var count__30787_31581 = (0);
var i__30788_31582 = (0);
while(true){
if((i__30788_31582 < count__30787_31581)){
var vec__30926_31585 = chunk__30786_31580.cljs$core$IIndexed$_nth$arity$2(null,i__30788_31582);
var actual_type_31586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30926_31585,(0),null);
var __31587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30926_31585,(1),null);
var keys_31588 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31561,actual_type_31586,f_31575], null);
var canonical_f_31589 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_31560),keys_31588);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31560,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_31588], 0));

if(cljs.core.truth_(elem_31560.removeEventListener)){
elem_31560.removeEventListener(cljs.core.name(actual_type_31586),canonical_f_31589);
} else {
elem_31560.detachEvent(cljs.core.name(actual_type_31586),canonical_f_31589);
}


var G__31592 = seq__30784_31579;
var G__31593 = chunk__30786_31580;
var G__31594 = count__30787_31581;
var G__31595 = (i__30788_31582 + (1));
seq__30784_31579 = G__31592;
chunk__30786_31580 = G__31593;
count__30787_31581 = G__31594;
i__30788_31582 = G__31595;
continue;
} else {
var temp__5825__auto___31597 = cljs.core.seq(seq__30784_31579);
if(temp__5825__auto___31597){
var seq__30784_31598__$1 = temp__5825__auto___31597;
if(cljs.core.chunked_seq_QMARK_(seq__30784_31598__$1)){
var c__5673__auto___31599 = cljs.core.chunk_first(seq__30784_31598__$1);
var G__31600 = cljs.core.chunk_rest(seq__30784_31598__$1);
var G__31601 = c__5673__auto___31599;
var G__31602 = cljs.core.count(c__5673__auto___31599);
var G__31603 = (0);
seq__30784_31579 = G__31600;
chunk__30786_31580 = G__31601;
count__30787_31581 = G__31602;
i__30788_31582 = G__31603;
continue;
} else {
var vec__30939_31605 = cljs.core.first(seq__30784_31598__$1);
var actual_type_31606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30939_31605,(0),null);
var __31607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30939_31605,(1),null);
var keys_31611 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31561,actual_type_31606,f_31575], null);
var canonical_f_31612 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_31560),keys_31611);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31560,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_31611], 0));

if(cljs.core.truth_(elem_31560.removeEventListener)){
elem_31560.removeEventListener(cljs.core.name(actual_type_31606),canonical_f_31612);
} else {
elem_31560.detachEvent(cljs.core.name(actual_type_31606),canonical_f_31612);
}


var G__31619 = cljs.core.next(seq__30784_31598__$1);
var G__31620 = null;
var G__31621 = (0);
var G__31622 = (0);
seq__30784_31579 = G__31619;
chunk__30786_31580 = G__31620;
count__30787_31581 = G__31621;
i__30788_31582 = G__31622;
continue;
}
} else {
}
}
break;
}

var G__31625 = seq__30774_31564;
var G__31626 = chunk__30781_31565;
var G__31627 = count__30782_31566;
var G__31628 = (i__30783_31567 + (1));
seq__30774_31564 = G__31625;
chunk__30781_31565 = G__31626;
count__30782_31566 = G__31627;
i__30783_31567 = G__31628;
continue;
} else {
var temp__5825__auto___31629 = cljs.core.seq(seq__30774_31564);
if(temp__5825__auto___31629){
var seq__30774_31631__$1 = temp__5825__auto___31629;
if(cljs.core.chunked_seq_QMARK_(seq__30774_31631__$1)){
var c__5673__auto___31636 = cljs.core.chunk_first(seq__30774_31631__$1);
var G__31637 = cljs.core.chunk_rest(seq__30774_31631__$1);
var G__31638 = c__5673__auto___31636;
var G__31639 = cljs.core.count(c__5673__auto___31636);
var G__31640 = (0);
seq__30774_31564 = G__31637;
chunk__30781_31565 = G__31638;
count__30782_31566 = G__31639;
i__30783_31567 = G__31640;
continue;
} else {
var vec__30950_31648 = cljs.core.first(seq__30774_31631__$1);
var orig_type_31649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30950_31648,(0),null);
var f_31650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30950_31648,(1),null);
var seq__30775_31653 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_31649,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_31649,cljs.core.identity])));
var chunk__30777_31654 = null;
var count__30778_31655 = (0);
var i__30779_31656 = (0);
while(true){
if((i__30779_31656 < count__30778_31655)){
var vec__30990_31660 = chunk__30777_31654.cljs$core$IIndexed$_nth$arity$2(null,i__30779_31656);
var actual_type_31661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990_31660,(0),null);
var __31662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990_31660,(1),null);
var keys_31665 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31561,actual_type_31661,f_31650], null);
var canonical_f_31666 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_31560),keys_31665);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31560,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_31665], 0));

if(cljs.core.truth_(elem_31560.removeEventListener)){
elem_31560.removeEventListener(cljs.core.name(actual_type_31661),canonical_f_31666);
} else {
elem_31560.detachEvent(cljs.core.name(actual_type_31661),canonical_f_31666);
}


var G__31681 = seq__30775_31653;
var G__31682 = chunk__30777_31654;
var G__31683 = count__30778_31655;
var G__31684 = (i__30779_31656 + (1));
seq__30775_31653 = G__31681;
chunk__30777_31654 = G__31682;
count__30778_31655 = G__31683;
i__30779_31656 = G__31684;
continue;
} else {
var temp__5825__auto___31687__$1 = cljs.core.seq(seq__30775_31653);
if(temp__5825__auto___31687__$1){
var seq__30775_31689__$1 = temp__5825__auto___31687__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30775_31689__$1)){
var c__5673__auto___31693 = cljs.core.chunk_first(seq__30775_31689__$1);
var G__31697 = cljs.core.chunk_rest(seq__30775_31689__$1);
var G__31698 = c__5673__auto___31693;
var G__31699 = cljs.core.count(c__5673__auto___31693);
var G__31700 = (0);
seq__30775_31653 = G__31697;
chunk__30777_31654 = G__31698;
count__30778_31655 = G__31699;
i__30779_31656 = G__31700;
continue;
} else {
var vec__31006_31701 = cljs.core.first(seq__30775_31689__$1);
var actual_type_31702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31006_31701,(0),null);
var __31703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31006_31701,(1),null);
var keys_31707 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31561,actual_type_31702,f_31650], null);
var canonical_f_31708 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_31560),keys_31707);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31560,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_31707], 0));

if(cljs.core.truth_(elem_31560.removeEventListener)){
elem_31560.removeEventListener(cljs.core.name(actual_type_31702),canonical_f_31708);
} else {
elem_31560.detachEvent(cljs.core.name(actual_type_31702),canonical_f_31708);
}


var G__31710 = cljs.core.next(seq__30775_31689__$1);
var G__31711 = null;
var G__31712 = (0);
var G__31713 = (0);
seq__30775_31653 = G__31710;
chunk__30777_31654 = G__31711;
count__30778_31655 = G__31712;
i__30779_31656 = G__31713;
continue;
}
} else {
}
}
break;
}

var G__31714 = cljs.core.next(seq__30774_31631__$1);
var G__31715 = null;
var G__31716 = (0);
var G__31717 = (0);
seq__30774_31564 = G__31714;
chunk__30781_31565 = G__31715;
count__30782_31566 = G__31716;
i__30783_31567 = G__31717;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq30763){
var G__30764 = cljs.core.first(seq30763);
var seq30763__$1 = cljs.core.next(seq30763);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30764,seq30763__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___31722 = arguments.length;
var i__5877__auto___31723 = (0);
while(true){
if((i__5877__auto___31723 < len__5876__auto___31722)){
args__5882__auto__.push((arguments[i__5877__auto___31723]));

var G__31724 = (i__5877__auto___31723 + (1));
i__5877__auto___31723 = G__31724;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__31027_31728 = dommy.core.elem_and_selector(elem_sel);
var elem_31729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31027_31728,(0),null);
var selector_31730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31027_31728,(1),null);
var seq__31031_31733 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__31033_31734 = null;
var count__31034_31735 = (0);
var i__31035_31736 = (0);
while(true){
if((i__31035_31736 < count__31034_31735)){
var vec__31049_31740 = chunk__31033_31734.cljs$core$IIndexed$_nth$arity$2(null,i__31035_31736);
var type_31741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31049_31740,(0),null);
var f_31742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31049_31740,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_31741,((function (seq__31031_31733,chunk__31033_31734,count__31034_31735,i__31035_31736,vec__31049_31740,type_31741,f_31742,vec__31027_31728,elem_31729,selector_31730){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_31741,dommy$core$this_fn], 0));

return (f_31742.cljs$core$IFn$_invoke$arity$1 ? f_31742.cljs$core$IFn$_invoke$arity$1(e) : f_31742.call(null,e));
});})(seq__31031_31733,chunk__31033_31734,count__31034_31735,i__31035_31736,vec__31049_31740,type_31741,f_31742,vec__31027_31728,elem_31729,selector_31730))
], 0));


var G__31751 = seq__31031_31733;
var G__31752 = chunk__31033_31734;
var G__31753 = count__31034_31735;
var G__31754 = (i__31035_31736 + (1));
seq__31031_31733 = G__31751;
chunk__31033_31734 = G__31752;
count__31034_31735 = G__31753;
i__31035_31736 = G__31754;
continue;
} else {
var temp__5825__auto___31755 = cljs.core.seq(seq__31031_31733);
if(temp__5825__auto___31755){
var seq__31031_31756__$1 = temp__5825__auto___31755;
if(cljs.core.chunked_seq_QMARK_(seq__31031_31756__$1)){
var c__5673__auto___31757 = cljs.core.chunk_first(seq__31031_31756__$1);
var G__31758 = cljs.core.chunk_rest(seq__31031_31756__$1);
var G__31759 = c__5673__auto___31757;
var G__31760 = cljs.core.count(c__5673__auto___31757);
var G__31761 = (0);
seq__31031_31733 = G__31758;
chunk__31033_31734 = G__31759;
count__31034_31735 = G__31760;
i__31035_31736 = G__31761;
continue;
} else {
var vec__31057_31762 = cljs.core.first(seq__31031_31756__$1);
var type_31763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31057_31762,(0),null);
var f_31764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31057_31762,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_31763,((function (seq__31031_31733,chunk__31033_31734,count__31034_31735,i__31035_31736,vec__31057_31762,type_31763,f_31764,seq__31031_31756__$1,temp__5825__auto___31755,vec__31027_31728,elem_31729,selector_31730){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_31763,dommy$core$this_fn], 0));

return (f_31764.cljs$core$IFn$_invoke$arity$1 ? f_31764.cljs$core$IFn$_invoke$arity$1(e) : f_31764.call(null,e));
});})(seq__31031_31733,chunk__31033_31734,count__31034_31735,i__31035_31736,vec__31057_31762,type_31763,f_31764,seq__31031_31756__$1,temp__5825__auto___31755,vec__31027_31728,elem_31729,selector_31730))
], 0));


var G__31776 = cljs.core.next(seq__31031_31756__$1);
var G__31777 = null;
var G__31778 = (0);
var G__31779 = (0);
seq__31031_31733 = G__31776;
chunk__31033_31734 = G__31777;
count__31034_31735 = G__31778;
i__31035_31736 = G__31779;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq31020){
var G__31021 = cljs.core.first(seq31020);
var seq31020__$1 = cljs.core.next(seq31020);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31021,seq31020__$1);
}));


//# sourceMappingURL=dommy.core.js.map
