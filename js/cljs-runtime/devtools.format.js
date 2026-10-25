goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_23152 = (function (value){
var x__5498__auto__ = (((value == null))?null:value);
var m__5499__auto__ = (devtools.format._header[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5499__auto__.call(null,value));
} else {
var m__5497__auto__ = (devtools.format._header["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5497__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_23152(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_23153 = (function (value){
var x__5498__auto__ = (((value == null))?null:value);
var m__5499__auto__ = (devtools.format._has_body[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5499__auto__.call(null,value));
} else {
var m__5497__auto__ = (devtools.format._has_body["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5497__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_23153(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_23157 = (function (value){
var x__5498__auto__ = (((value == null))?null:value);
var m__5499__auto__ = (devtools.format._body[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5499__auto__.call(null,value));
} else {
var m__5497__auto__ = (devtools.format._body["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5497__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_23157(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o23014 = temp__5823__auto__;
var temp__5823__auto____$1 = (o23014["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o23015 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o23015["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o23016 = temp__5823__auto____$2;
return (o23016["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o23021 = temp__5823__auto__;
var temp__5823__auto____$1 = (o23021["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o23023 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o23023["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o23024 = temp__5823__auto____$2;
return (o23024["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o23029 = temp__5823__auto__;
var temp__5823__auto____$1 = (o23029["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o23030 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o23030["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o23031 = temp__5823__auto____$2;
return (o23031["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o23037 = temp__5823__auto__;
var temp__5823__auto____$1 = (o23037["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o23038 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o23038["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o23039 = temp__5823__auto____$2;
return (o23039["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o23042 = temp__5823__auto__;
var temp__5823__auto____$1 = (o23042["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o23043 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o23043["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o23044 = temp__5823__auto____$2;
return (o23044["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o23050 = temp__5823__auto__;
var temp__5823__auto____$1 = (o23050["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o23051 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o23051["markup"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o23052 = temp__5823__auto____$2;
return (o23052["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o23055 = temp__5823__auto__;
var temp__5823__auto____$1 = (o23055["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o23056 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o23056["markup"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o23057 = temp__5823__auto____$2;
return (o23057["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23179 = arguments.length;
var i__5877__auto___23180 = (0);
while(true){
if((i__5877__auto___23180 < len__5876__auto___23179)){
args__5882__auto__.push((arguments[i__5877__auto___23180]));

var G__23181 = (i__5877__auto___23180 + (1));
i__5877__auto___23180 = G__23181;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq23058){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23058));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23182 = arguments.length;
var i__5877__auto___23183 = (0);
while(true){
if((i__5877__auto___23183 < len__5876__auto___23182)){
args__5882__auto__.push((arguments[i__5877__auto___23183]));

var G__23184 = (i__5877__auto___23183 + (1));
i__5877__auto___23183 = G__23184;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq23059){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23059));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23185 = arguments.length;
var i__5877__auto___23186 = (0);
while(true){
if((i__5877__auto___23186 < len__5876__auto___23185)){
args__5882__auto__.push((arguments[i__5877__auto___23186]));

var G__23187 = (i__5877__auto___23186 + (1));
i__5877__auto___23186 = G__23187;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq23064){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23064));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23192 = arguments.length;
var i__5877__auto___23193 = (0);
while(true){
if((i__5877__auto___23193 < len__5876__auto___23192)){
args__5882__auto__.push((arguments[i__5877__auto___23193]));

var G__23194 = (i__5877__auto___23193 + (1));
i__5877__auto___23193 = G__23194;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq23069){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23069));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23201 = arguments.length;
var i__5877__auto___23202 = (0);
while(true){
if((i__5877__auto___23202 < len__5876__auto___23201)){
args__5882__auto__.push((arguments[i__5877__auto___23202]));

var G__23203 = (i__5877__auto___23202 + (1));
i__5877__auto___23202 = G__23203;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq23070){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23070));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23205 = arguments.length;
var i__5877__auto___23206 = (0);
while(true){
if((i__5877__auto___23206 < len__5876__auto___23205)){
args__5882__auto__.push((arguments[i__5877__auto___23206]));

var G__23207 = (i__5877__auto___23206 + (1));
i__5877__auto___23206 = G__23207;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq23077){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23077));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23208 = arguments.length;
var i__5877__auto___23209 = (0);
while(true){
if((i__5877__auto___23209 < len__5876__auto___23208)){
args__5882__auto__.push((arguments[i__5877__auto___23209]));

var G__23211 = (i__5877__auto___23209 + (1));
i__5877__auto___23209 = G__23211;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq23084){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23084));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23221 = arguments.length;
var i__5877__auto___23222 = (0);
while(true){
if((i__5877__auto___23222 < len__5876__auto___23221)){
args__5882__auto__.push((arguments[i__5877__auto___23222]));

var G__23226 = (i__5877__auto___23222 + (1));
i__5877__auto___23222 = G__23226;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__23105){
var vec__23106 = p__23105;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23106,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__23098_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__23098_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq23100){
var G__23101 = cljs.core.first(seq23100);
var seq23100__$1 = cljs.core.next(seq23100);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23101,seq23100__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__23118 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__23119 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__23120 = (function (){var G__23122 = new cljs.core.Keyword(null,"li","li",723558921);
var G__23123 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__23124 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__23122,G__23123,G__23124) : devtools.format.make_template_fn.call(null,G__23122,G__23123,G__23124));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__23118,G__23119,G__23120) : devtools.format.make_template_fn.call(null,G__23118,G__23119,G__23120));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23241 = arguments.length;
var i__5877__auto___23242 = (0);
while(true){
if((i__5877__auto___23242 < len__5876__auto___23241)){
args__5882__auto__.push((arguments[i__5877__auto___23242]));

var G__23243 = (i__5877__auto___23242 + (1));
i__5877__auto___23242 = G__23243;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq23128){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23128));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23248 = arguments.length;
var i__5877__auto___23249 = (0);
while(true){
if((i__5877__auto___23249 < len__5876__auto___23248)){
args__5882__auto__.push((arguments[i__5877__auto___23249]));

var G__23250 = (i__5877__auto___23249 + (1));
i__5877__auto___23249 = G__23250;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq23139){
var G__23140 = cljs.core.first(seq23139);
var seq23139__$1 = cljs.core.next(seq23139);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23140,seq23139__$1);
}));


//# sourceMappingURL=devtools.format.js.map
