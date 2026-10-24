goog.provide('frontend.components.recycle');
frontend.components.recycle.group_title = (function frontend$components$recycle$group_title(root){
if(cljs.core.truth_(frontend.util.entity.page_QMARK_(root))){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(root);
} else {
var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.recycle","original-page","logseq.property.recycle/original-page",-1658789799),new cljs.core.Keyword("block","title","block/title",710445684)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","unknown","page/unknown",-941980198)], 0));
}
}
});
frontend.components.recycle.deleted_by = (function frontend$components$recycle$deleted_by(root){
return new cljs.core.Keyword("logseq.property","deleted-by-ref","logseq.property/deleted-by-ref",-1998043112).cljs$core$IFn$_invoke$arity$1(root);
});
frontend.components.recycle.deleted_by_avatar = (function frontend$components$recycle$deleted_by_avatar(user){
return frontend.components.avatar.user_avatar(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4",new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.user","name","logseq.property.user/name",-1360026016).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "U";
}
}
})(),new cljs.core.Keyword(null,"avatar-src","avatar-src",2143818962),new cljs.core.Keyword("logseq.property.user","avatar","logseq.property.user/avatar",-416548858).cljs$core$IFn$_invoke$arity$1(user)], null));
});
frontend.components.recycle.deleted_root_header = (function frontend$components$recycle$deleted_root_header(root){
var user = frontend.components.recycle.deleted_by(root);
var deleted_at = new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751).cljs$core$IFn$_invoke$arity$1(root);
var root_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root);
var delete_message = (""+"Permanently delete this "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frontend.util.entity.page_QMARK_(root))?"page":"block"))+" from Recycle? This cannot be undone.");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.gap-4.text-xs.text-muted-foreground","div.flex.items-center.justify-between.gap-4.text-xs.text-muted-foreground",-727203388),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-1.min-w-0.flex-1","div.flex.items-center.gap-1.min-w-0.flex-1",-1573984388),frontend.components.recycle.deleted_by_avatar(user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-w-0","div.min-w-0",75606986),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.truncate","div.truncate",1617213540),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.util.entity.page_QMARK_(root))?new cljs.core.Keyword("storage.recycle","page-deleted-at","storage.recycle/page-deleted-at",368956305):new cljs.core.Keyword("storage.recycle","block-deleted-at","storage.recycle/block-deleted-at",1492001170)),frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1((new Date(deleted_at)))], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-1","div.flex.items-center.gap-1",768866371),(function (){var G__53534 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),"!py-0 !px-1 h-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.restore_recycled_BANG_(root_uuid);
})], null);
var G__53535 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage.recycle","restore","storage.recycle/restore",1673259048)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__53534,G__53535) : logseq.shui.ui.button.call(null,G__53534,G__53535));
})(),(function (){var G__53536 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),"!py-0 !px-1 h-4 hover:text-red-rx-09 dark:hover:text-red-rx-10 hover:bg-red-rx-04-alpha dark:hover:bg-red-rx-06-alpha",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(confirm(delete_message))){
return frontend.handler.page.delete_recycled_permanently_BANG_(root_uuid);
} else {
return null;
}
})], null);
var G__53537 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","delete","ui/delete",-1768677056)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__53536,G__53537) : logseq.shui.ui.button.call(null,G__53536,G__53537));
})()], null)], null);
});
frontend.components.recycle.deleted_root_outliner = (function frontend$components$recycle$deleted_root_outliner(root){
return frontend.components.block.block_container(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"view?","view?",655244230),true,new cljs.core.Keyword(null,"block?","block?",1102479923),true,new cljs.core.Keyword(null,"publishing?","publishing?",1526914455),true,new cljs.core.Keyword(null,"stop-events?","stop-events?",-151471572),true,new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),cljs.core.boolean$(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),true], null))),new cljs.core.Keyword(null,"container-id","container-id",1274665684),frontend.state.get_container_id(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recycle-root","recycle-root",826418142),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root)], null)),new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root)))], null),root);
});
frontend.components.recycle.recycle_page = (function (){var render_fn__31744__auto__ = (function frontend$components$recycle$recycle_page(_page,p__53544){
var map__53545 = p__53544;
var map__53545__$1 = cljs.core.__destructure_map(map__53545);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53545__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var roots = (function (){var or__5142__auto__ = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recycle-roots","recycle-roots",-491688588)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var groups = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p__53548){
var vec__53549 = p__53548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53549,(0),null);
var roots__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53549,(1),null);
return new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751).cljs$core$IFn$_invoke$arity$1(cljs.core.first(roots__$1));
}),(function (p1__53543_SHARP_,p2__53542_SHARP_){
return cljs.core.compare(p2__53542_SHARP_,p1__53543_SHARP_);
}),cljs.core.group_by(frontend.components.recycle.group_title,roots));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-col","gap-8","ls-recycle-page-content",class$], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-muted-foreground.ls-recycle-page-description.ml-1","div.text-sm.text-muted-foreground.ls-recycle-page-description.ml-1",703183393),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage.recycle","retention-desc","storage.recycle/retention-desc",-1285899678)], 0))], null),((cljs.core.seq(groups))?(function (){var iter__5628__auto__ = (function frontend$components$recycle$recycle_page_$_iter__53554(s__53555){
return (new cljs.core.LazySeq(null,(function (){
var s__53555__$1 = s__53555;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53555__$1);
if(temp__5825__auto__){
var s__53555__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53555__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__53555__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__53557 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__53556 = (0);
while(true){
if((i__53556 < size__5627__auto__)){
var vec__53560 = cljs.core._nth(c__5626__auto__,i__53556);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53560,(0),null);
var roots__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53560,(1),null);
cljs.core.chunk_append(b__53557,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),(cljs.core.truth_(cljs.core.some(frontend.util.entity.page_QMARK_,roots__$1))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-lg.font-medium.mb-3","h2.text-lg.font-medium.mb-3",747676436),title], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),(function (){var iter__5628__auto__ = ((function (i__53556,vec__53560,title,roots__$1,c__5626__auto__,size__5627__auto__,b__53557,s__53555__$2,temp__5825__auto__,roots,groups,map__53545,map__53545__$1,class$){
return (function frontend$components$recycle$recycle_page_$_iter__53554_$_iter__53567(s__53568){
return (new cljs.core.LazySeq(null,((function (i__53556,vec__53560,title,roots__$1,c__5626__auto__,size__5627__auto__,b__53557,s__53555__$2,temp__5825__auto__,roots,groups,map__53545,map__53545__$1,class$){
return (function (){
var s__53568__$1 = s__53568;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__53568__$1);
if(temp__5825__auto____$1){
var s__53568__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53568__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__53568__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__53570 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__53569 = (0);
while(true){
if((i__53569 < size__5627__auto____$1)){
var root = cljs.core._nth(c__5626__auto____$1,i__53569);
cljs.core.chunk_append(b__53570,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root)))], null),frontend.components.recycle.deleted_root_header(root),frontend.components.recycle.deleted_root_outliner(root)], null));

var G__53585 = (i__53569 + (1));
i__53569 = G__53585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53570),frontend$components$recycle$recycle_page_$_iter__53554_$_iter__53567(cljs.core.chunk_rest(s__53568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53570),null);
}
} else {
var root = cljs.core.first(s__53568__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root)))], null),frontend.components.recycle.deleted_root_header(root),frontend.components.recycle.deleted_root_outliner(root)], null),frontend$components$recycle$recycle_page_$_iter__53554_$_iter__53567(cljs.core.rest(s__53568__$2)));
}
} else {
return null;
}
break;
}
});})(i__53556,vec__53560,title,roots__$1,c__5626__auto__,size__5627__auto__,b__53557,s__53555__$2,temp__5825__auto__,roots,groups,map__53545,map__53545__$1,class$))
,null,null));
});})(i__53556,vec__53560,title,roots__$1,c__5626__auto__,size__5627__auto__,b__53557,s__53555__$2,temp__5825__auto__,roots,groups,map__53545,map__53545__$1,class$))
;
return iter__5628__auto__(roots__$1);
})()], null)], null));

var G__53586 = (i__53556 + (1));
i__53556 = G__53586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53557),frontend$components$recycle$recycle_page_$_iter__53554(cljs.core.chunk_rest(s__53555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53557),null);
}
} else {
var vec__53571 = cljs.core.first(s__53555__$2);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53571,(0),null);
var roots__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53571,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),(cljs.core.truth_(cljs.core.some(frontend.util.entity.page_QMARK_,roots__$1))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-lg.font-medium.mb-3","h2.text-lg.font-medium.mb-3",747676436),title], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),(function (){var iter__5628__auto__ = ((function (vec__53571,title,roots__$1,s__53555__$2,temp__5825__auto__,roots,groups,map__53545,map__53545__$1,class$){
return (function frontend$components$recycle$recycle_page_$_iter__53554_$_iter__53574(s__53575){
return (new cljs.core.LazySeq(null,(function (){
var s__53575__$1 = s__53575;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__53575__$1);
if(temp__5825__auto____$1){
var s__53575__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53575__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__53575__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__53577 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__53576 = (0);
while(true){
if((i__53576 < size__5627__auto__)){
var root = cljs.core._nth(c__5626__auto__,i__53576);
cljs.core.chunk_append(b__53577,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root)))], null),frontend.components.recycle.deleted_root_header(root),frontend.components.recycle.deleted_root_outliner(root)], null));

var G__53587 = (i__53576 + (1));
i__53576 = G__53587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53577),frontend$components$recycle$recycle_page_$_iter__53554_$_iter__53574(cljs.core.chunk_rest(s__53575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53577),null);
}
} else {
var root = cljs.core.first(s__53575__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root)))], null),frontend.components.recycle.deleted_root_header(root),frontend.components.recycle.deleted_root_outliner(root)], null),frontend$components$recycle$recycle_page_$_iter__53554_$_iter__53574(cljs.core.rest(s__53575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__53571,title,roots__$1,s__53555__$2,temp__5825__auto__,roots,groups,map__53545,map__53545__$1,class$))
;
return iter__5628__auto__(roots__$1);
})()], null)], null),frontend$components$recycle$recycle_page_$_iter__53554(cljs.core.rest(s__53555__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(groups);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-muted-foreground","div.text-sm.text-muted-foreground",-1734181862),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage.recycle","empty","storage.recycle/empty",-97247346)], 0))], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$recycle$recycle_page__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53578 = cljs.core.first(args__31746__auto__);
var G__53579 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53578,G__53579) : io.factorhouse.hsx.core.obj_get.call(null,G__53578,G__53579));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"recycle-page","recycle-page",659926684,null),args__31746__auto__),frontend$components$recycle$recycle_page,args__31746__auto__,null);
}
};
var frontend$components$recycle$recycle_page = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53588__i = 0, G__53588__a = new Array(arguments.length -  0);
while (G__53588__i < G__53588__a.length) {G__53588__a[G__53588__i] = arguments[G__53588__i + 0]; ++G__53588__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53588__a,0,null);
} 
return frontend$components$recycle$recycle_page__delegate.call(this,args__31746__auto__);};
frontend$components$recycle$recycle_page.cljs$lang$maxFixedArity = 0;
frontend$components$recycle$recycle_page.cljs$lang$applyTo = (function (arglist__53589){
var args__31746__auto__ = cljs.core.seq(arglist__53589);
return frontend$components$recycle$recycle_page__delegate(args__31746__auto__);
});
frontend$components$recycle$recycle_page.cljs$core$IFn$_invoke$arity$variadic = frontend$components$recycle$recycle_page__delegate;
return frontend$components$recycle$recycle_page;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53581 = comp__31745__auto__;
var G__53582 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53581,G__53582) : io.factorhouse.hsx.core.react_memo.call(null,G__53581,G__53582));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"recycle-page");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.recycle.js.map
