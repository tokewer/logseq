goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__76148 = arguments.length;
switch (G__76148) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__76158 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__76159 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__76159);

try{var G__76160 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__76160);

return G__76160;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__76158);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__76161 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__76162 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__76162);

try{var G__76163 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__76163);

return G__76163;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__76161);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__76165 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__76166 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__76166);

try{var G__76168 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__76168);

return G__76168;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__76165);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__76170 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__76171 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__76171);

try{var G__76172 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__76172);

return G__76172;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__76170);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__76176 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__76177 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__76177);

try{var G__76181 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__76181);

return G__76181;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__76176);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__76219 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__76220 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__76220);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__76219);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5882__auto__ = [];
var len__5876__auto___76438 = arguments.length;
var i__5877__auto___76439 = (0);
while(true){
if((i__5877__auto___76439 < len__5876__auto___76438)){
args__5882__auto__.push((arguments[i__5877__auto___76439]));

var G__76440 = (i__5877__auto___76439 + (1));
i__5877__auto___76439 = G__76440;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__76234 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__76235 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__76236 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__76237 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__76238 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__76239 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__76240 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__76241 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__76242 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__76243 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__76244 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__76245 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__76246 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__76247 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__76248 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__76249 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__76242);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__76243);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__76244);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__76245);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__76246);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__76247);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76248);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__76249);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__76241);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76240);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__76239);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__76238);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__76237);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__76236);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__76235);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__76234);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq76227){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76227));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__76269 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__76270 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__76270);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__76269);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5882__auto__ = [];
var len__5876__auto___76441 = arguments.length;
var i__5877__auto___76442 = (0);
while(true){
if((i__5877__auto___76442 < len__5876__auto___76441)){
args__5882__auto__.push((arguments[i__5877__auto___76442]));

var G__76443 = (i__5877__auto___76442 + (1));
i__5877__auto___76442 = G__76443;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__76278 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__76279 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__76280 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__76281 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__76282 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__76283 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__76284 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__76285 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__76286 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__76287 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__76288 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__76289 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__76290 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__76291 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__76285);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__76286);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__76287);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__76288);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__76289);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76290);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__76291);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__76284);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76283);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__76282);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__76281);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__76280);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__76279);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__76278);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq76277){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76277));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5882__auto__ = [];
var len__5876__auto___76446 = arguments.length;
var i__5877__auto___76447 = (0);
while(true){
if((i__5877__auto___76447 < len__5876__auto___76446)){
args__5882__auto__.push((arguments[i__5877__auto___76447]));

var G__76448 = (i__5877__auto___76447 + (1));
i__5877__auto___76447 = G__76448;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__76306 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__76307 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__76308 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__76309 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__76310 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__76311 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__76312 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__76313 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__76314 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__76315 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__76316 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__76317 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__76318 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__76319 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__76320 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__76321 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__76314);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__76315);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__76316);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__76317);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__76318);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__76319);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76320);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__76321);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__76313);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76312);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__76311);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__76310);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__76309);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__76308);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__76307);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__76306);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq76298){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76298));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5882__auto__ = [];
var len__5876__auto___76449 = arguments.length;
var i__5877__auto___76450 = (0);
while(true){
if((i__5877__auto___76450 < len__5876__auto___76449)){
args__5882__auto__.push((arguments[i__5877__auto___76450]));

var G__76451 = (i__5877__auto___76450 + (1));
i__5877__auto___76450 = G__76451;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__76337 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__76338 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__76339 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__76340 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__76341 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__76342 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__76343 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__76344 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__76345 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__76346 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__76347 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__76348 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__76349 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__76350 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__76344);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__76345);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__76346);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__76347);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__76348);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76349);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__76350);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__76343);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76342);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__76341);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__76340);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__76339);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__76338);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__76337);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq76330){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76330));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5882__auto__ = [];
var len__5876__auto___76452 = arguments.length;
var i__5877__auto___76453 = (0);
while(true){
if((i__5877__auto___76453 < len__5876__auto___76452)){
args__5882__auto__.push((arguments[i__5877__auto___76453]));

var G__76454 = (i__5877__auto___76453 + (1));
i__5877__auto___76453 = G__76454;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__76363 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__76364 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__76365 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__76366 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__76367 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__76368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__76369 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__76370 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__76371 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__76372 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__76373 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__76374 = null;
var _STAR_print_newline_STAR__temp_val__76375 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__76376 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__76370);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__76371);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__76372);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__76373);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__76374);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76375);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__76376);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__76369);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76368);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__76367);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__76366);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__76365);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__76364);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__76363);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq76361){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76361));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5882__auto__ = [];
var len__5876__auto___76457 = arguments.length;
var i__5877__auto___76458 = (0);
while(true){
if((i__5877__auto___76458 < len__5876__auto___76457)){
args__5882__auto__.push((arguments[i__5877__auto___76458]));

var G__76459 = (i__5877__auto___76458 + (1));
i__5877__auto___76458 = G__76459;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__76385 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__76386 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__76387 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__76388 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__76389 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__76390 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__76391 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__76392 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__76393 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__76394 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__76395 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__76396 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__76397 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__76398 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__76392);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__76393);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__76394);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__76395);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__76396);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76397);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__76398);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__76391);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76390);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__76389);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__76388);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__76387);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__76386);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__76385);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq76382){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76382));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5882__auto__ = [];
var len__5876__auto___76460 = arguments.length;
var i__5877__auto___76461 = (0);
while(true){
if((i__5877__auto___76461 < len__5876__auto___76460)){
args__5882__auto__.push((arguments[i__5877__auto___76461]));

var G__76462 = (i__5877__auto___76461 + (1));
i__5877__auto___76461 = G__76462;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__76400 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__76401 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__76402 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__76403 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__76404 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__76405 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__76406 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__76407 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__76408 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__76409 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__76410 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__76411 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__76412 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__76413 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__76414 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__76415 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__76408);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__76409);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__76410);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__76411);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__76412);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__76413);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76414);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__76415);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__76407);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76406);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__76405);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__76404);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__76403);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__76402);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__76401);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__76400);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq76399){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76399));
}));

/**
 * println to a string, returning it
 */
sci.impl.io.println_str = (function sci$impl$io$println_str(var_args){
var args__5882__auto__ = [];
var len__5876__auto___76463 = arguments.length;
var i__5877__auto___76464 = (0);
while(true){
if((i__5877__auto___76464 < len__5876__auto___76463)){
args__5882__auto__.push((arguments[i__5877__auto___76464]));

var G__76465 = (i__5877__auto___76464 + (1));
i__5877__auto___76464 = G__76465;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(sci.impl.io.println_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__76417 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__76418 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__76419 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__76420 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__76421 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__76422 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__76423 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__76424 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__76425 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__76426 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__76427 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__76428 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__76429 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__76430 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__76424);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__76425);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__76426);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__76427);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__76428);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76429);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__76430);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__76423);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76422);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__76421);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__76420);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__76419);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__76418);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__76417);
}}));

(sci.impl.io.println_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println_str.cljs$lang$applyTo = (function (seq76416){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76416));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5882__auto__ = [];
var len__5876__auto___76467 = arguments.length;
var i__5877__auto___76468 = (0);
while(true){
if((i__5877__auto___76468 < len__5876__auto___76467)){
args__5882__auto__.push((arguments[i__5877__auto___76468]));

var G__76469 = (i__5877__auto___76468 + (1));
i__5877__auto___76468 = G__76469;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__76431__auto__","s__76431__auto__",-841105855,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__76432__auto__","x__76432__auto__",1640140007,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__76431__auto__","s__76431__auto__",-841105855,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__76432__auto__","x__76432__auto__",1640140007,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__76431__auto__","s__76431__auto__",-841105855,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq76433){
var G__76434 = cljs.core.first(seq76433);
var seq76433__$1 = cljs.core.next(seq76433);
var G__76435 = cljs.core.first(seq76433__$1);
var seq76433__$2 = cljs.core.next(seq76433__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76434,G__76435,seq76433__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
