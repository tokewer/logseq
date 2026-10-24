goog.provide('instaparse.line_col');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.line_col.Cursor = (function (index,line,column,__meta,__extmap,__hash){
this.index = index;
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k106630,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__106637 = k106630;
var G__106637__$1 = (((G__106637 instanceof cljs.core.Keyword))?G__106637.fqn:null);
switch (G__106637__$1) {
case "index":
return self__.index;

break;
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k106630,else__5451__auto__);

}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__106642){
var vec__106643 = p__106642;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106643,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106643,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#instaparse.line-col.Cursor{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null))], null),self__.__extmap));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__106629){
var self__ = this;
var G__106629__$1 = this;
return (new cljs.core.RecordIter((0),G__106629__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1036355234 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this106631,other106632){
var self__ = this;
var this106631__$1 = this;
return (((!((other106632 == null)))) && ((((this106631__$1.constructor === other106632.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this106631__$1.index,other106632.index)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this106631__$1.line,other106632.line)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this106631__$1.column,other106632.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this106631__$1.__extmap,other106632.__extmap)))))))))));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"line","line",212345235),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k106630){
var self__ = this;
var this__5455__auto____$1 = this;
var G__106672 = k106630;
var G__106672__$1 = (((G__106672 instanceof cljs.core.Keyword))?G__106672.fqn:null);
switch (G__106672__$1) {
case "index":
case "line":
case "column":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k106630);

}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__106629){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__106678 = cljs.core.keyword_identical_QMARK_;
var expr__106679 = k__5457__auto__;
if(cljs.core.truth_((pred__106678.cljs$core$IFn$_invoke$arity$2 ? pred__106678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),expr__106679) : pred__106678.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__106679)))){
return (new instaparse.line_col.Cursor(G__106629,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__106678.cljs$core$IFn$_invoke$arity$2 ? pred__106678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),expr__106679) : pred__106678.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__106679)))){
return (new instaparse.line_col.Cursor(self__.index,G__106629,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__106678.cljs$core$IFn$_invoke$arity$2 ? pred__106678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__106679) : pred__106678.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__106679)))){
return (new instaparse.line_col.Cursor(self__.index,self__.line,G__106629,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__106629),null));
}
}
}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"index","index",-1531685915),self__.index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"line","line",212345235),self__.line,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null))], null),self__.__extmap));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__106629){
var self__ = this;
var this__5447__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,G__106629,self__.__extmap,self__.__hash));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(instaparse.line_col.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"int","int",-100885395,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(instaparse.line_col.Cursor.cljs$lang$type = true);

(instaparse.line_col.Cursor.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"instaparse.line-col/Cursor",null,(1),null));
}));

(instaparse.line_col.Cursor.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"instaparse.line-col/Cursor");
}));

/**
 * Positional factory function for instaparse.line-col/Cursor.
 */
instaparse.line_col.__GT_Cursor = (function instaparse$line_col$__GT_Cursor(index,line,column){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
});

/**
 * Factory function for instaparse.line-col/Cursor, taking a map of keywords to field values.
 */
instaparse.line_col.map__GT_Cursor = (function instaparse$line_col$map__GT_Cursor(G__106634){
var extmap__5490__auto__ = (function (){var G__106694 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__106634,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], 0));
if(cljs.core.record_QMARK_(G__106634)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__106694);
} else {
return G__106694;
}
})();
return (new instaparse.line_col.Cursor(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__106634),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__106634),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__106634),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

instaparse.line_col.advance_cursor = (function instaparse$line_col$advance_cursor(cursor,text,new_index){
var new_index__$1 = (new_index | 0);
if((cursor.index <= new_index__$1)){
} else {
throw (new Error("Assert failed: (<= (.-index cursor) new-index)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor.index,new_index__$1)){
return cursor;
} else {
var index = cursor.index;
var line = cursor.line;
var column = cursor.column;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,new_index__$1)){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text.charAt(index),"\n")){
var G__106823 = (index + (1));
var G__106824 = (line + (1));
var G__106825 = (1);
index = G__106823;
line = G__106824;
column = G__106825;
continue;
} else {
var G__106826 = (index + (1));
var G__106827 = line;
var G__106828 = (column + (1));
index = G__106826;
line = G__106827;
column = G__106828;
continue;

}
}
break;
}
}
});
/**
 * Given a string `text`, returns a function that takes an index into the string,
 * and returns a cursor, including line and column information.  For efficiency,
 * inputs must be fed into the function in increasing order.
 */
instaparse.line_col.make_line_col_fn = (function instaparse$line_col$make_line_col_fn(text,start_line,start_column){
var cursor_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new instaparse.line_col.Cursor((0),start_line,start_column,null,null,null)));
return (function instaparse$line_col$make_line_col_fn_$_line_col(i){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor_state,instaparse.line_col.advance_cursor,text,i);

return cljs.core.deref(cursor_state);
});
});
instaparse.line_col.hiccup_add_line_col_spans = (function instaparse$line_col$hiccup_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta(parse_tree);
var start_index = new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620).cljs$core$IFn$_invoke$arity$1(m);
var end_index = new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__5140__auto__ = start_index;
if(cljs.core.truth_(and__5140__auto__)){
return end_index;
} else {
return and__5140__auto__;
}
})())){
var start_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(start_index) : line_col_fn.call(null,start_index));
var children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),cljs.core.next(parse_tree)));
var end_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(end_index) : line_col_fn.call(null,end_index));
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parse_tree)], null),children),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(parse_tree),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("instaparse.gll","start-line","instaparse.gll/start-line",768862483),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","start-column","instaparse.gll/start-column",-1490883898),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","end-line","instaparse.gll/end-line",-1706020282),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(end_cursor),new cljs.core.Keyword("instaparse.gll","end-column","instaparse.gll/end-column",942330297),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(end_cursor)], null)], 0)));
} else {
return parse_tree;
}
});
instaparse.line_col.enlive_add_line_col_spans = (function instaparse$line_col$enlive_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta(parse_tree);
var start_index = new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620).cljs$core$IFn$_invoke$arity$1(m);
var end_index = new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__5140__auto__ = start_index;
if(cljs.core.truth_(and__5140__auto__)){
return end_index;
} else {
return and__5140__auto__;
}
})())){
var start_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(start_index) : line_col_fn.call(null,start_index));
var children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.enlive_add_line_col_spans,line_col_fn),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(parse_tree)));
var end_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(end_index) : line_col_fn.call(null,end_index));
return cljs.core.with_meta(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_tree,new cljs.core.Keyword(null,"content","content",15833224),children),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(parse_tree),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("instaparse.gll","start-line","instaparse.gll/start-line",768862483),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","start-column","instaparse.gll/start-column",-1490883898),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","end-line","instaparse.gll/end-line",-1706020282),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(end_cursor),new cljs.core.Keyword("instaparse.gll","end-column","instaparse.gll/end-column",942330297),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(end_cursor)], null)], 0)));
} else {
return parse_tree;
}
});
/**
 * Given a string `text` and a `parse-tree` for text, return parse tree
 * with its metadata annotated with line and column info. The info can
 * then be found in the metadata map under the keywords:
 *  
 * :instaparse.gll/start-line, :instaparse.gll/start-column,
 * :instaparse.gll/end-line, :instaparse.gll/end-column
 * 
 * The start is inclusive, the end is exclusive. Lines and columns are 1-based.
 */
instaparse.line_col.add_line_col_spans = (function instaparse$line_col$add_line_col_spans(var_args){
var G__106729 = arguments.length;
switch (G__106729) {
case 2:
return instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$2 = (function (text,parse_tree){
return instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$4(text,(1),(1),parse_tree);
}));

(instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$4 = (function (text,start_line,start_column,parse_tree){
var line_col_fn = instaparse.line_col.make_line_col_fn(text,start_line,start_column);
if((parse_tree == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(parse_tree);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parse_tree);
} else {
return and__5140__auto__;
}
})())){
return instaparse.line_col.enlive_add_line_col_spans(line_col_fn,parse_tree);
} else {
if(((cljs.core.vector_QMARK_(parse_tree)) && ((cljs.core.first(parse_tree) instanceof cljs.core.Keyword)))){
return instaparse.line_col.hiccup_add_line_col_spans(line_col_fn,parse_tree);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.sequential_QMARK_(parse_tree);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.map_QMARK_(cljs.core.first(parse_tree));
if(and__5140__auto____$1){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first(parse_tree));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return instaparse.transform.map_preserving_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.enlive_add_line_col_spans,line_col_fn),parse_tree);
} else {
if(((cljs.core.sequential_QMARK_(parse_tree)) && (((cljs.core.vector_QMARK_(cljs.core.first(parse_tree))) && ((cljs.core.first(cljs.core.first(parse_tree)) instanceof cljs.core.Keyword)))))){
return instaparse.transform.map_preserving_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),parse_tree);
} else {
if((parse_tree instanceof instaparse.gll.Failure)){
return parse_tree;
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid parse-tree, not recognized as either enlive or hiccup format."], 0));

}
}
}
}
}
}
}));

(instaparse.line_col.add_line_col_spans.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=instaparse.line_col.js.map
