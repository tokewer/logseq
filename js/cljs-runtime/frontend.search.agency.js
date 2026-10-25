goog.provide('frontend.search.agency');
frontend.search.agency.get_registered_engines = (function frontend$search$agency$get_registered_engines(repo){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.search.browser.__GT_Browser(repo),(cljs.core.truth_(frontend.state.lsp_enabled_QMARK_)?(function (){var iter__5628__auto__ = (function frontend$search$agency$get_registered_engines_$_iter__61082(s__61083){
return (new cljs.core.LazySeq(null,(function (){
var s__61083__$1 = s__61083;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__61083__$1);
if(temp__5825__auto__){
var s__61083__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61083__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__61083__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__61085 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__61084 = (0);
while(true){
if((i__61084 < size__5627__auto__)){
var s = cljs.core._nth(c__5626__auto__,i__61084);
cljs.core.chunk_append(b__61085,frontend.search.plugin.__GT_Plugin(s,repo));

var G__61190 = (i__61084 + (1));
i__61084 = G__61190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61085),frontend$search$agency$get_registered_engines_$_iter__61082(cljs.core.chunk_rest(s__61083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61085),null);
}
} else {
var s = cljs.core.first(s__61083__$2);
return cljs.core.cons(frontend.search.plugin.__GT_Plugin(s,repo),frontend$search$agency$get_registered_engines_$_iter__61082(cljs.core.rest(s__61083__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.state.get_all_plugin_services_with_type(new cljs.core.Keyword(null,"search","search",1564939822)));
})():null)], null);
});
frontend.search.agency.get_flatten_registered_engines = (function frontend$search$agency$get_flatten_registered_engines(repo){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(frontend.search.agency.get_registered_engines(repo)));
});

/**
* @constructor
 * @implements {frontend.search.protocol.Engine}
*/
frontend.search.agency.Agency = (function (repo){
this.repo = repo;
});
(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$query$arity$3 = (function (_this,q,opts){
var self__ = this;
var _this__$1 = this;
var vec__61093 = frontend.search.agency.get_registered_engines(self__.repo);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61093,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61093,(1),null);
var seq__61096_61195 = cljs.core.seq(e2);
var chunk__61097_61196 = null;
var count__61098_61197 = (0);
var i__61099_61198 = (0);
while(true){
if((i__61099_61198 < count__61098_61197)){
var e_61199 = chunk__61097_61196.cljs$core$IIndexed$_nth$arity$2(null,i__61099_61198);
frontend.search.protocol.query(e_61199,q,opts);


var G__61200 = seq__61096_61195;
var G__61201 = chunk__61097_61196;
var G__61202 = count__61098_61197;
var G__61203 = (i__61099_61198 + (1));
seq__61096_61195 = G__61200;
chunk__61097_61196 = G__61201;
count__61098_61197 = G__61202;
i__61099_61198 = G__61203;
continue;
} else {
var temp__5825__auto___61204 = cljs.core.seq(seq__61096_61195);
if(temp__5825__auto___61204){
var seq__61096_61205__$1 = temp__5825__auto___61204;
if(cljs.core.chunked_seq_QMARK_(seq__61096_61205__$1)){
var c__5673__auto___61206 = cljs.core.chunk_first(seq__61096_61205__$1);
var G__61207 = cljs.core.chunk_rest(seq__61096_61205__$1);
var G__61208 = c__5673__auto___61206;
var G__61209 = cljs.core.count(c__5673__auto___61206);
var G__61210 = (0);
seq__61096_61195 = G__61207;
chunk__61097_61196 = G__61208;
count__61098_61197 = G__61209;
i__61099_61198 = G__61210;
continue;
} else {
var e_61211 = cljs.core.first(seq__61096_61205__$1);
frontend.search.protocol.query(e_61211,q,opts);


var G__61212 = cljs.core.next(seq__61096_61205__$1);
var G__61213 = null;
var G__61214 = (0);
var G__61215 = (0);
seq__61096_61195 = G__61212;
chunk__61097_61196 = G__61213;
count__61098_61197 = G__61214;
i__61099_61198 = G__61215;
continue;
}
} else {
}
}
break;
}

return frontend.search.protocol.query(e1,q,opts);
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var vec__61100 = frontend.search.agency.get_registered_engines(self__.repo);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61100,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61100,(1),null);
var seq__61103_61216 = cljs.core.seq(e2);
var chunk__61104_61217 = null;
var count__61105_61218 = (0);
var i__61106_61219 = (0);
while(true){
if((i__61106_61219 < count__61105_61218)){
var e_61220 = chunk__61104_61217.cljs$core$IIndexed$_nth$arity$2(null,i__61106_61219);
frontend.search.protocol.rebuild_blocks_indice_BANG_(e_61220);


var G__61221 = seq__61103_61216;
var G__61222 = chunk__61104_61217;
var G__61223 = count__61105_61218;
var G__61224 = (i__61106_61219 + (1));
seq__61103_61216 = G__61221;
chunk__61104_61217 = G__61222;
count__61105_61218 = G__61223;
i__61106_61219 = G__61224;
continue;
} else {
var temp__5825__auto___61225 = cljs.core.seq(seq__61103_61216);
if(temp__5825__auto___61225){
var seq__61103_61226__$1 = temp__5825__auto___61225;
if(cljs.core.chunked_seq_QMARK_(seq__61103_61226__$1)){
var c__5673__auto___61227 = cljs.core.chunk_first(seq__61103_61226__$1);
var G__61228 = cljs.core.chunk_rest(seq__61103_61226__$1);
var G__61229 = c__5673__auto___61227;
var G__61230 = cljs.core.count(c__5673__auto___61227);
var G__61231 = (0);
seq__61103_61216 = G__61228;
chunk__61104_61217 = G__61229;
count__61105_61218 = G__61230;
i__61106_61219 = G__61231;
continue;
} else {
var e_61232 = cljs.core.first(seq__61103_61226__$1);
frontend.search.protocol.rebuild_blocks_indice_BANG_(e_61232);


var G__61233 = cljs.core.next(seq__61103_61226__$1);
var G__61234 = null;
var G__61235 = (0);
var G__61236 = (0);
seq__61103_61216 = G__61233;
chunk__61104_61217 = G__61234;
count__61105_61218 = G__61235;
i__61106_61219 = G__61236;
continue;
}
} else {
}
}
break;
}

return frontend.search.protocol.rebuild_blocks_indice_BANG_(e1);
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$rebuild_pages_indice_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var vec__61108 = frontend.search.agency.get_registered_engines(self__.repo);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61108,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61108,(1),null);
var seq__61111_61237 = cljs.core.seq(e2);
var chunk__61112_61238 = null;
var count__61113_61239 = (0);
var i__61114_61240 = (0);
while(true){
if((i__61114_61240 < count__61113_61239)){
var e_61241 = chunk__61112_61238.cljs$core$IIndexed$_nth$arity$2(null,i__61114_61240);
frontend.search.protocol.rebuild_pages_indice_BANG_(e_61241);


var G__61242 = seq__61111_61237;
var G__61243 = chunk__61112_61238;
var G__61244 = count__61113_61239;
var G__61245 = (i__61114_61240 + (1));
seq__61111_61237 = G__61242;
chunk__61112_61238 = G__61243;
count__61113_61239 = G__61244;
i__61114_61240 = G__61245;
continue;
} else {
var temp__5825__auto___61246 = cljs.core.seq(seq__61111_61237);
if(temp__5825__auto___61246){
var seq__61111_61247__$1 = temp__5825__auto___61246;
if(cljs.core.chunked_seq_QMARK_(seq__61111_61247__$1)){
var c__5673__auto___61248 = cljs.core.chunk_first(seq__61111_61247__$1);
var G__61249 = cljs.core.chunk_rest(seq__61111_61247__$1);
var G__61250 = c__5673__auto___61248;
var G__61251 = cljs.core.count(c__5673__auto___61248);
var G__61252 = (0);
seq__61111_61237 = G__61249;
chunk__61112_61238 = G__61250;
count__61113_61239 = G__61251;
i__61114_61240 = G__61252;
continue;
} else {
var e_61253 = cljs.core.first(seq__61111_61247__$1);
frontend.search.protocol.rebuild_pages_indice_BANG_(e_61253);


var G__61254 = cljs.core.next(seq__61111_61247__$1);
var G__61255 = null;
var G__61256 = (0);
var G__61257 = (0);
seq__61111_61237 = G__61254;
chunk__61112_61238 = G__61255;
count__61113_61239 = G__61256;
i__61114_61240 = G__61257;
continue;
}
} else {
}
}
break;
}

return frontend.search.protocol.rebuild_pages_indice_BANG_(e1);
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 = (function (_this,data){
var self__ = this;
var _this__$1 = this;
var seq__61123 = cljs.core.seq(frontend.search.agency.get_flatten_registered_engines(self__.repo));
var chunk__61124 = null;
var count__61125 = (0);
var i__61126 = (0);
while(true){
if((i__61126 < count__61125)){
var e = chunk__61124.cljs$core$IIndexed$_nth$arity$2(null,i__61126);
frontend.search.protocol.transact_blocks_BANG_(e,data);


var G__61258 = seq__61123;
var G__61259 = chunk__61124;
var G__61260 = count__61125;
var G__61261 = (i__61126 + (1));
seq__61123 = G__61258;
chunk__61124 = G__61259;
count__61125 = G__61260;
i__61126 = G__61261;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61123);
if(temp__5825__auto__){
var seq__61123__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61123__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__61123__$1);
var G__61262 = cljs.core.chunk_rest(seq__61123__$1);
var G__61263 = c__5673__auto__;
var G__61264 = cljs.core.count(c__5673__auto__);
var G__61265 = (0);
seq__61123 = G__61262;
chunk__61124 = G__61263;
count__61125 = G__61264;
i__61126 = G__61265;
continue;
} else {
var e = cljs.core.first(seq__61123__$1);
frontend.search.protocol.transact_blocks_BANG_(e,data);


var G__61266 = cljs.core.next(seq__61123__$1);
var G__61267 = null;
var G__61268 = (0);
var G__61269 = (0);
seq__61123 = G__61266;
chunk__61124 = G__61267;
count__61125 = G__61268;
i__61126 = G__61269;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var seq__61134 = cljs.core.seq(frontend.search.agency.get_flatten_registered_engines(self__.repo));
var chunk__61135 = null;
var count__61136 = (0);
var i__61137 = (0);
while(true){
if((i__61137 < count__61136)){
var e = chunk__61135.cljs$core$IIndexed$_nth$arity$2(null,i__61137);
frontend.search.protocol.truncate_blocks_BANG_(e);


var G__61270 = seq__61134;
var G__61271 = chunk__61135;
var G__61272 = count__61136;
var G__61273 = (i__61137 + (1));
seq__61134 = G__61270;
chunk__61135 = G__61271;
count__61136 = G__61272;
i__61137 = G__61273;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61134);
if(temp__5825__auto__){
var seq__61134__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61134__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__61134__$1);
var G__61274 = cljs.core.chunk_rest(seq__61134__$1);
var G__61275 = c__5673__auto__;
var G__61276 = cljs.core.count(c__5673__auto__);
var G__61277 = (0);
seq__61134 = G__61274;
chunk__61135 = G__61275;
count__61136 = G__61276;
i__61137 = G__61277;
continue;
} else {
var e = cljs.core.first(seq__61134__$1);
frontend.search.protocol.truncate_blocks_BANG_(e);


var G__61278 = cljs.core.next(seq__61134__$1);
var G__61279 = null;
var G__61280 = (0);
var G__61281 = (0);
seq__61134 = G__61278;
chunk__61135 = G__61279;
count__61136 = G__61280;
i__61137 = G__61281;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$remove_db_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var seq__61139 = cljs.core.seq(frontend.search.agency.get_flatten_registered_engines(self__.repo));
var chunk__61140 = null;
var count__61141 = (0);
var i__61142 = (0);
while(true){
if((i__61142 < count__61141)){
var e = chunk__61140.cljs$core$IIndexed$_nth$arity$2(null,i__61142);
frontend.search.protocol.remove_db_BANG_(e);


var G__61282 = seq__61139;
var G__61283 = chunk__61140;
var G__61284 = count__61141;
var G__61285 = (i__61142 + (1));
seq__61139 = G__61282;
chunk__61140 = G__61283;
count__61141 = G__61284;
i__61142 = G__61285;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61139);
if(temp__5825__auto__){
var seq__61139__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61139__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__61139__$1);
var G__61286 = cljs.core.chunk_rest(seq__61139__$1);
var G__61287 = c__5673__auto__;
var G__61288 = cljs.core.count(c__5673__auto__);
var G__61289 = (0);
seq__61139 = G__61286;
chunk__61140 = G__61287;
count__61141 = G__61288;
i__61142 = G__61289;
continue;
} else {
var e = cljs.core.first(seq__61139__$1);
frontend.search.protocol.remove_db_BANG_(e);


var G__61290 = cljs.core.next(seq__61139__$1);
var G__61291 = null;
var G__61292 = (0);
var G__61293 = (0);
seq__61139 = G__61290;
chunk__61140 = G__61291;
count__61141 = G__61292;
i__61142 = G__61293;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.search.agency.Agency.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repo","repo",-358529152,null)], null);
}));

(frontend.search.agency.Agency.cljs$lang$type = true);

(frontend.search.agency.Agency.cljs$lang$ctorStr = "frontend.search.agency/Agency");

(frontend.search.agency.Agency.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"frontend.search.agency/Agency");
}));

/**
 * Positional factory function for frontend.search.agency/Agency.
 */
frontend.search.agency.__GT_Agency = (function frontend$search$agency$__GT_Agency(repo){
return (new frontend.search.agency.Agency(repo));
});


//# sourceMappingURL=frontend.search.agency.js.map
