goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_96972 = ret;
var shift_96973__$1 = shift;
while(true){
var arr_96974 = n_96972.arr;
var subidx_96975 = (((cnt - (1)) >> shift_96973__$1) & (31));
if((shift_96973__$1 === (5))){
(arr_96974[subidx_96975] = tail_node);
} else {
var child_96976 = (arr_96974[subidx_96975]);
if((child_96976 == null)){
(arr_96974[subidx_96975] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_96973__$1 - (5)),tail_node));
} else {
var editable_child_96977 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_96976);
(arr_96974[subidx_96975] = editable_child_96977);

var G__96978 = editable_child_96977;
var G__96979 = (shift_96973__$1 - (5));
n_96972 = G__96978;
shift_96973__$1 = G__96979;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__96954 = (shift - (5));
var G__96955 = ccnt;
var G__96956 = root_edit;
var G__96957 = child;
var G__96958 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__96954,G__96955,G__96956,G__96957,G__96958) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__96954,G__96955,G__96956,G__96957,G__96958));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_96980 = (""+"Assigning index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))+" of vector"+" object array to become a node, when that"+" index should only be used for storing"+" range arrays.");
var data_96981 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_96980,data_96981);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__96959 = (shift - (5));
var G__96960 = cnt;
var G__96961 = root_edit;
var G__96962 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__96959,G__96960,G__96961,G__96962) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__96959,G__96960,G__96961,G__96962));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__96963 = (shift - (5));
var G__96964 = child_cnt;
var G__96965 = root_edit;
var G__96966 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__96963,G__96964,G__96965,G__96966) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__96963,G__96964,G__96965,G__96966));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_96982__$1 = shift;
var node_96983 = ret;
while(true){
if((shift_96982__$1 === (0))){
var arr_96984 = node_96983.arr;
(arr_96984[(i & (31))] = val);
} else {
var arr_96985 = node_96983.arr;
var subidx_96986 = ((i >> shift_96982__$1) & (31));
var child_96987 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_96985[subidx_96986]));
(arr_96985[subidx_96986] = child_96987);

var G__96988 = (shift_96982__$1 - (5));
var G__96989 = child_96987;
shift_96982__$1 = G__96988;
node_96983 = G__96989;
continue;
}
break;
}
} else {
var arr_96990 = ret.arr;
var rngs_96991 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_96992 = ((i >> shift) & (31));
var subidx_96993__$1 = (function (){var subidx_96993__$1 = subidx_96992;
while(true){
if((i < ((rngs_96991[subidx_96993__$1]) | 0))){
return subidx_96993__$1;
} else {
var G__96995 = (subidx_96993__$1 + (1));
subidx_96993__$1 = G__96995;
continue;
}
break;
}
})();
var i_96994__$1 = (((subidx_96993__$1 === (0)))?i:(i - (rngs_96991[(subidx_96993__$1 - (1))])));
(arr_96990[subidx_96993__$1] = (function (){var G__96967 = (shift - (5));
var G__96968 = root_edit;
var G__96969 = (arr_96990[subidx_96993__$1]);
var G__96970 = i_96994__$1;
var G__96971 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__96967,G__96968,G__96969,G__96970,G__96971) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__96967,G__96968,G__96969,G__96970,G__96971));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
