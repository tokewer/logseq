goog.provide('frontend.extensions.srs.handler');
frontend.extensions.srs.handler.click = (function frontend$extensions$srs$handler$click(id){
var nodes = dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#cards-modal","#cards-modal",-1829868740),(""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null))));
var seq__63473 = cljs.core.seq(nodes);
var chunk__63474 = null;
var count__63475 = (0);
var i__63476 = (0);
while(true){
if((i__63476 < count__63475)){
var node = chunk__63474.cljs$core$IIndexed$_nth$arity$2(null,i__63476);
node.click();


var G__63479 = seq__63473;
var G__63480 = chunk__63474;
var G__63481 = count__63475;
var G__63482 = (i__63476 + (1));
seq__63473 = G__63479;
chunk__63474 = G__63480;
count__63475 = G__63481;
i__63476 = G__63482;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__63473);
if(temp__5825__auto__){
var seq__63473__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63473__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__63473__$1);
var G__63487 = cljs.core.chunk_rest(seq__63473__$1);
var G__63488 = c__5673__auto__;
var G__63489 = cljs.core.count(c__5673__auto__);
var G__63490 = (0);
seq__63473 = G__63487;
chunk__63474 = G__63488;
count__63475 = G__63489;
i__63476 = G__63490;
continue;
} else {
var node = cljs.core.first(seq__63473__$1);
node.click();


var G__63491 = cljs.core.next(seq__63473__$1);
var G__63492 = null;
var G__63493 = (0);
var G__63494 = (0);
seq__63473 = G__63491;
chunk__63474 = G__63492;
count__63475 = G__63493;
i__63476 = G__63494;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.extensions.srs.handler.toggle_answers = (function frontend$extensions$srs$handler$toggle_answers(){
return frontend.extensions.srs.handler.click("card-answers");
});
frontend.extensions.srs.handler.card_again = (function frontend$extensions$srs$handler$card_again(){
return frontend.extensions.srs.handler.click("card-again");
});
frontend.extensions.srs.handler.card_hard = (function frontend$extensions$srs$handler$card_hard(){
return frontend.extensions.srs.handler.click("card-hard");
});
frontend.extensions.srs.handler.card_good = (function frontend$extensions$srs$handler$card_good(){
return frontend.extensions.srs.handler.click("card-good");
});
frontend.extensions.srs.handler.card_easy = (function frontend$extensions$srs$handler$card_easy(){
return frontend.extensions.srs.handler.click("card-easy");
});

//# sourceMappingURL=frontend.extensions.srs.handler.js.map
