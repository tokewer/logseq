goog.provide('frontend.components.cmdk.core');
goog.scope(function(){
  frontend.components.cmdk.core.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.cmdk.core.get_action = (function frontend$components$cmdk$core$get_action(){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state(new cljs.core.Keyword("search","args","search/args",-462145864)));
});
frontend.components.cmdk.core.translate = (function frontend$components$cmdk$core$translate(t_fn,p__54816){
var map__54817 = p__54816;
var map__54817__$1 = cljs.core.__destructure_map(map__54817);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54817__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54817__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
if(cljs.core.truth_(id)){
var desc_i18n = (function (){var G__54818 = frontend.modules.shortcut.utils.decorate_namespace(id);
return (t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(G__54818) : t_fn.call(null,G__54818));
})();
if(clojure.string.starts_with_QMARK_(desc_i18n,"{Missing key")){
return desc;
} else {
return desc_i18n;
}
} else {
return null;
}
});
frontend.components.cmdk.core.get_group_limit = (function frontend$components$cmdk$core$get_group_limit(group){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"nodes","nodes",-2099585805))){
return (10);
} else {
return (5);
}
});
frontend.components.cmdk.core.filters = (function frontend$components$cmdk$core$filters(){
var current_page = frontend.state.get_current_page();
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(current_page)?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","current-page","cmdk.filter/current-page",317275415)], 0)),new cljs.core.Keyword(null,"info","info",-317069002),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","add","cmdk.filter/add",-788702110)], 0)),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"file"], null):null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","nodes","cmdk.filter/nodes",937542714)], 0)),new cljs.core.Keyword(null,"info","info",-317069002),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","add","cmdk.filter/add",-788702110)], 0)),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"point-filled"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"codes","codes",-760505543)], null),new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","codes","cmdk.filter/codes",-1195735626)], 0)),new cljs.core.Keyword(null,"info","info",-317069002),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","add","cmdk.filter/add",-788702110)], 0)),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"code"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"commands","commands",161008658)], null),new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","commands","cmdk.filter/commands",-1265635749)], 0)),new cljs.core.Keyword(null,"info","info",-317069002),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","add","cmdk.filter/add",-788702110)], 0)),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"command"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"files","files",-472457450)], null),new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","files","cmdk.filter/files",80468385)], 0)),new cljs.core.Keyword(null,"info","info",-317069002),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","add","cmdk.filter/add",-788702110)], 0)),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"file"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"themes","themes",-702786642)], null),new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","themes","cmdk.filter/themes",2032479523)], 0)),new cljs.core.Keyword(null,"info","info",-317069002),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","add","cmdk.filter/add",-788702110)], 0)),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"palette"], null)], null));
});
frontend.components.cmdk.core.group_label = (function frontend$components$cmdk$core$group_label(group){
var G__54819 = group;
var G__54819__$1 = (((G__54819 instanceof cljs.core.Keyword))?G__54819.fqn:null);
switch (G__54819__$1) {
case "filters":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.group","filters","cmdk.group/filters",-1808591815)], 0));

break;
case "current-page":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.group","current-page","cmdk.group/current-page",-1744038938)], 0));

break;
case "nodes":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.group","nodes","cmdk.group/nodes",-1530516427)], 0));

break;
case "codes":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.group","codes","cmdk.group/codes",882330759)], 0));

break;
case "files":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.group","files","cmdk.group/files",-1733775916)], 0));

break;
case "create":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.group","create","cmdk.group/create",-1739136314)], 0));

break;
case "recently-updated-pages":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.group","recently-updated","cmdk.group/recently-updated",-486921270)], 0));

break;
case "commands":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.group","commands","cmdk.group/commands",666310488)], 0));

break;
case "themes":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.group","themes","cmdk.group/themes",-272210832)], 0));

break;
default:
return cljs.core.name(group);

}
});
frontend.components.cmdk.core.default_results = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"recently-updated-pages","recently-updated-pages",-1385487647),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.Keyword(null,"themes","themes",-702786642),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"codes","codes",-760505543),new cljs.core.Keyword(null,"current-page","current-page",-101294180)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null)]);
frontend.components.cmdk.core.get_class_from_input = (function frontend$components$cmdk$core$get_class_from_input(input){
return clojure.string.replace(input,/^#+/,"");
});
frontend.components.cmdk.core.create_items = (function frontend$components$cmdk$core$create_items(q){
if((((!(clojure.string.blank_QMARK_(q)))) && (((cljs.core.not((function (){var fexpr__54820 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["custom.js",null,"config.edn",null,"custom.css",null], null), null);
return (fexpr__54820.cljs$core$IFn$_invoke$arity$1 ? fexpr__54820.cljs$core$IFn$_invoke$arity$1(q) : fexpr__54820.call(null,q));
})())) && ((!(frontend.config.publishing_QMARK_))))))){
var class_QMARK_ = clojure.string.starts_with_QMARK_(q,"#");
var class_name = frontend.components.cmdk.core.get_class_from_input(q);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text","text",-1790561697),((class_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.create","tag","cmdk.create/tag",-794093662)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.create","page","cmdk.create/page",434657800)], 0))
),new cljs.core.Keyword(null,"icon","icon",1679606541),"new-page",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"info","info",-317069002),((class_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.info","create-tag","cmdk.info/create-tag",-122573629),class_name], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.info","create-page","cmdk.info/create-page",-1195771956),q], 0))
),new cljs.core.Keyword(null,"source-create","source-create",-1664647972),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"class","class",-2030961996),null], null)], null));
} else {
return null;
}
});
frontend.components.cmdk.core.insert_create_after_first_match = (function frontend$components$cmdk$core$insert_create_after_first_match(groups){
var creation_items = cljs.core.some((function (p__54826){
var vec__54827 = p__54826;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54827,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54827,(1),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54827,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256))){
return items;
} else {
return null;
}
}),groups);
var first_match = (function (result_type){
return cljs.core.some((function (p__54830){
var vec__54831 = p__54830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54831,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54831,(1),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54831,(2),null);
var temp__5825__auto__ = cljs.core.some((function (p1__54821_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_type,new cljs.core.Keyword(null,"result-type","result-type",-982013227).cljs$core$IFn$_invoke$arity$1(p1__54821_SHARP_))){
return p1__54821_SHARP_;
} else {
return null;
}
}),items);
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,item], null);
} else {
return null;
}
}),groups);
});
var vec__54823 = (function (){var or__5142__auto__ = first_match(new cljs.core.Keyword(null,"page","page",849072397));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return first_match(new cljs.core.Keyword(null,"block","block",664686210));
}
})();
var matched_group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54823,(0),null);
var matched_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54823,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(creation_items);
if(and__5140__auto__){
return matched_group;
} else {
return and__5140__auto__;
}
})())){
var iter__5628__auto__ = (function frontend$components$cmdk$core$insert_create_after_first_match_$_iter__54834(s__54835){
return (new cljs.core.LazySeq(null,(function (){
var s__54835__$1 = s__54835;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54835__$1);
if(temp__5825__auto__){
var s__54835__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54835__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54835__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54837 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54836 = (0);
while(true){
if((i__54836 < size__5627__auto__)){
var vec__54838 = cljs.core._nth(c__5626__auto__,i__54836);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54838,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54838,(1),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54838,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256))){
cljs.core.chunk_append(b__54837,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,group,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,matched_group))?(function (){var vec__54843 = cljs.core.split_with(((function (i__54836,s__54835__$1,vec__54838,title,group,items,c__5626__auto__,size__5627__auto__,b__54837,s__54835__$2,temp__5825__auto__,creation_items,first_match,vec__54823,matched_group,matched_item){
return (function (p1__54822_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(matched_item,p1__54822_SHARP_);
});})(i__54836,s__54835__$1,vec__54838,title,group,items,c__5626__auto__,size__5627__auto__,b__54837,s__54835__$2,temp__5825__auto__,creation_items,first_match,vec__54823,matched_group,matched_item))
,items);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54843,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54843,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(after)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([creation_items,cljs.core.rest(after)], 0));
})():items)], null));

var G__55213 = (i__54836 + (1));
i__54836 = G__55213;
continue;
} else {
var G__55214 = (i__54836 + (1));
i__54836 = G__55214;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54837),frontend$components$cmdk$core$insert_create_after_first_match_$_iter__54834(cljs.core.chunk_rest(s__54835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54837),null);
}
} else {
var vec__54846 = cljs.core.first(s__54835__$2);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54846,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54846,(1),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54846,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,group,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,matched_group))?(function (){var vec__54849 = cljs.core.split_with(((function (s__54835__$1,vec__54846,title,group,items,s__54835__$2,temp__5825__auto__,creation_items,first_match,vec__54823,matched_group,matched_item){
return (function (p1__54822_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(matched_item,p1__54822_SHARP_);
});})(s__54835__$1,vec__54846,title,group,items,s__54835__$2,temp__5825__auto__,creation_items,first_match,vec__54823,matched_group,matched_item))
,items);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54849,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54849,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(after)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([creation_items,cljs.core.rest(after)], 0));
})():items)], null),frontend$components$cmdk$core$insert_create_after_first_match_$_iter__54834(cljs.core.rest(s__54835__$2)));
} else {
var G__55215 = cljs.core.rest(s__54835__$2);
s__54835__$1 = G__55215;
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
} else {
return groups;
}
});
frontend.components.cmdk.core.state__GT_results_ordered = (function frontend$components$cmdk$core$state__GT_results_ordered(state){
var sidebar_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672)], null));
var results = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state));
var input = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state));
var filter_SINGLEQUOTE_ = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state));
var filter_group = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(filter_SINGLEQUOTE_);
var index = cljs.core.volatile_BANG_((-1));
var visible_items = (function (group){
var map__54857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,group);
var map__54857__$1 = cljs.core.__destructure_map(map__54857);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54857__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54857__$1,new cljs.core.Keyword(null,"show","show",-576705889));
if(cljs.core.truth_((function (){var or__5142__auto__ = sidebar_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,filter_group);
}
})())){
return items;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"more","more",-2058821800),show)){
return items;
} else {
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(frontend.components.cmdk.core.get_group_limit(group),items);

}
}
});
var node_exists_QMARK_ = (function (){var blocks_result = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source-block","source-block",-878290804),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"items","items",1031954938)], null)));
if(clojure.string.blank_QMARK_(input)){
return null;
} else {
return cljs.core.some((function (block){
var and__5140__auto__ = new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(input) : frontend.util.page_name_sanity_lc.call(null,input)),(function (){var G__54862 = new cljs.core.Keyword("block.temp","original-title","block.temp/original-title",-1205887270).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__54862) : frontend.util.page_name_sanity_lc.call(null,G__54862));
})());
} else {
return and__5140__auto__;
}
}),blocks_result);
}
})();
var include_slash_QMARK_ = clojure.string.includes_QMARK_(input,"/");
var start_with_slash_QMARK_ = clojure.string.starts_with_QMARK_(input,"/");
var order_STAR_ = ((start_with_slash_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"filters","filters",974726919)),new cljs.core.Keyword(null,"filters","filters",974726919),visible_items(new cljs.core.Keyword(null,"filters","filters",974726919))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"current-page","current-page",-101294180)),new cljs.core.Keyword(null,"current-page","current-page",-101294180),visible_items(new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"nodes","nodes",-2099585805)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),visible_items(new cljs.core.Keyword(null,"nodes","nodes",-2099585805))], null)], null):((include_slash_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"current-page","current-page",-101294180)),new cljs.core.Keyword(null,"current-page","current-page",-101294180),visible_items(new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"nodes","nodes",-2099585805)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),visible_items(new cljs.core.Keyword(null,"nodes","nodes",-2099585805))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"files","files",-472457450)),new cljs.core.Keyword(null,"files","files",-472457450),visible_items(new cljs.core.Keyword(null,"files","files",-472457450))], null),(cljs.core.truth_(node_exists_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"create","create",-1301499256)),new cljs.core.Keyword(null,"create","create",-1301499256),frontend.components.cmdk.core.create_items(input)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"filters","filters",974726919)),new cljs.core.Keyword(null,"filters","filters",974726919),visible_items(new cljs.core.Keyword(null,"filters","filters",974726919))], null)], null):(cljs.core.truth_(filter_group)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_group,new cljs.core.Keyword(null,"nodes","nodes",-2099585805)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"current-page","current-page",-101294180)),new cljs.core.Keyword(null,"current-page","current-page",-101294180),visible_items(new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(filter_group),filter_group,visible_items(filter_group)], null),(cljs.core.truth_(node_exists_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"create","create",-1301499256)),new cljs.core.Keyword(null,"create","create",-1301499256),frontend.components.cmdk.core.create_items(input)], null))], null):cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"current-page","current-page",-101294180)),new cljs.core.Keyword(null,"current-page","current-page",-101294180),visible_items(new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"nodes","nodes",-2099585805)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),visible_items(new cljs.core.Keyword(null,"nodes","nodes",-2099585805))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"recently-updated-pages","recently-updated-pages",-1385487647)),new cljs.core.Keyword(null,"recently-updated-pages","recently-updated-pages",-1385487647),visible_items(new cljs.core.Keyword(null,"recently-updated-pages","recently-updated-pages",-1385487647))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"commands","commands",161008658)),new cljs.core.Keyword(null,"commands","commands",161008658),visible_items(new cljs.core.Keyword(null,"commands","commands",161008658))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"files","files",-472457450)),new cljs.core.Keyword(null,"files","files",-472457450),visible_items(new cljs.core.Keyword(null,"files","files",-472457450))], null),(cljs.core.truth_(node_exists_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"create","create",-1301499256)),new cljs.core.Keyword(null,"create","create",-1301499256),frontend.components.cmdk.core.create_items(input)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.group_label(new cljs.core.Keyword(null,"filters","filters",974726919)),new cljs.core.Keyword(null,"filters","filters",974726919),visible_items(new cljs.core.Keyword(null,"filters","filters",974726919))], null)], null))
)));
var order = frontend.components.cmdk.core.insert_create_after_first_match(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,order_STAR_));
var iter__5628__auto__ = (function frontend$components$cmdk$core$state__GT_results_ordered_$_iter__54865(s__54866){
return (new cljs.core.LazySeq(null,(function (){
var s__54866__$1 = s__54866;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54866__$1);
if(temp__5825__auto__){
var s__54866__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54866__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54866__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54868 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54867 = (0);
while(true){
if((i__54867 < size__5627__auto__)){
var vec__54869 = cljs.core._nth(c__5626__auto__,i__54867);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54869,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54869,(1),null);
var group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54869,(2),null);
cljs.core.chunk_append(b__54868,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_name,group_key,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_key,new cljs.core.Keyword(null,"create","create",-1301499256)))?cljs.core.count(group_items):(function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_key,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_key,new cljs.core.Keyword(null,"items","items",1031954938)], null)));
}
})()),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__54867,vec__54869,group_name,group_key,group_items,c__5626__auto__,size__5627__auto__,b__54868,s__54866__$2,temp__5825__auto__,sidebar_QMARK_,results,input,filter_SINGLEQUOTE_,filter_group,index,visible_items,node_exists_QMARK_,include_slash_QMARK_,start_with_slash_QMARK_,order_STAR_,order){
return (function (p1__54852_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__54852_SHARP_,new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(new cljs.core.Keyword(null,"source-create","source-create",-1664647972).cljs$core$IFn$_invoke$arity$1(p1__54852_SHARP_))?new cljs.core.Keyword(null,"create","create",-1301499256):group_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"item-index","item-index",411110314),index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(index.cljs$core$IDeref$_deref$arity$1(null) + (1)))], 0));
});})(i__54867,vec__54869,group_name,group_key,group_items,c__5626__auto__,size__5627__auto__,b__54868,s__54866__$2,temp__5825__auto__,sidebar_QMARK_,results,input,filter_SINGLEQUOTE_,filter_group,index,visible_items,node_exists_QMARK_,include_slash_QMARK_,start_with_slash_QMARK_,order_STAR_,order))
,group_items)], null));

var G__55235 = (i__54867 + (1));
i__54867 = G__55235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54868),frontend$components$cmdk$core$state__GT_results_ordered_$_iter__54865(cljs.core.chunk_rest(s__54866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54868),null);
}
} else {
var vec__54872 = cljs.core.first(s__54866__$2);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54872,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54872,(1),null);
var group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54872,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_name,group_key,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_key,new cljs.core.Keyword(null,"create","create",-1301499256)))?cljs.core.count(group_items):(function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_key,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_key,new cljs.core.Keyword(null,"items","items",1031954938)], null)));
}
})()),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__54872,group_name,group_key,group_items,s__54866__$2,temp__5825__auto__,sidebar_QMARK_,results,input,filter_SINGLEQUOTE_,filter_group,index,visible_items,node_exists_QMARK_,include_slash_QMARK_,start_with_slash_QMARK_,order_STAR_,order){
return (function (p1__54852_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__54852_SHARP_,new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(new cljs.core.Keyword(null,"source-create","source-create",-1664647972).cljs$core$IFn$_invoke$arity$1(p1__54852_SHARP_))?new cljs.core.Keyword(null,"create","create",-1301499256):group_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"item-index","item-index",411110314),index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(index.cljs$core$IDeref$_deref$arity$1(null) + (1)))], 0));
});})(vec__54872,group_name,group_key,group_items,s__54866__$2,temp__5825__auto__,sidebar_QMARK_,results,input,filter_SINGLEQUOTE_,filter_group,index,visible_items,node_exists_QMARK_,include_slash_QMARK_,start_with_slash_QMARK_,order_STAR_,order))
,group_items)], null),frontend$components$cmdk$core$state__GT_results_ordered_$_iter__54865(cljs.core.rest(s__54866__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(order);
});
frontend.components.cmdk.core.state__GT_highlighted_item = (function frontend$components$cmdk$core$state__GT_highlighted_item(var_args){
var G__54876 = arguments.length;
switch (G__54876) {
case 1:
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1 = (function (state){
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.cmdk.core","fallback-item","frontend.components.cmdk.core/fallback-item",-503163357).cljs$core$IFn$_invoke$arity$1(state));
}));

(frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$2 = (function (state,fallback_item){
var or__5142__auto__ = (function (){var G__54877 = state;
var G__54877__$1 = (((G__54877 == null))?null:new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(G__54877));
if((G__54877__$1 == null)){
return null;
} else {
return cljs.core.deref(G__54877__$1);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = fallback_item;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.first(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","all-items-cache","frontend.components.cmdk.core/all-items-cache",453921838).cljs$core$IFn$_invoke$arity$1(state)));
}
}
}));

(frontend.components.cmdk.core.state__GT_highlighted_item.cljs$lang$maxFixedArity = 2);

frontend.components.cmdk.core.state__GT_action = (function frontend$components$cmdk$core$state__GT_action(var_args){
var G__54879 = arguments.length;
switch (G__54879) {
case 1:
return frontend.components.cmdk.core.state__GT_action.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.cmdk.core.state__GT_action.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.cmdk.core.state__GT_action.cljs$core$IFn$_invoke$arity$1 = (function (state){
return frontend.components.cmdk.core.state__GT_action.cljs$core$IFn$_invoke$arity$2(state,null);
}));

(frontend.components.cmdk.core.state__GT_action.cljs$core$IFn$_invoke$arity$2 = (function (state,fallback_item){
var highlighted_item = frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$2(state,fallback_item);
var action = frontend.components.cmdk.core.get_action();
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(highlighted_item);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword(null,"trigger","trigger",103466139);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-search","source-search",-401166475).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"search","search",1564939822);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-command","source-command",969630731).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"trigger","trigger",103466139);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-create","source-create",-1664647972).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"create","create",-1301499256);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"filter","filter",-948537934);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-theme","source-theme",984403400).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"theme","theme",-1247880880);
} else {
return null;

}
}
}
}
}
}
}
}
}));

(frontend.components.cmdk.core.state__GT_action.cljs$lang$maxFixedArity = 2);

if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.cmdk !== 'undefined') && (typeof frontend.components.cmdk.core !== 'undefined') && (typeof frontend.components.cmdk.core.load_results !== 'undefined')){
} else {
frontend.components.cmdk.core.load_results = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54880 = cljs.core.get_global_hierarchy;
return (fexpr__54880.cljs$core$IFn$_invoke$arity$0 ? fexpr__54880.cljs$core$IFn$_invoke$arity$0() : fexpr__54880.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.components.cmdk.core","load-results"),(function (group,_state){
return group;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
frontend.components.cmdk.core.recent_page_items = (function frontend$components$cmdk$core$recent_page_items(pages){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var text = frontend.handler.block.block_unique_title.cljs$core$IFn$_invoke$arity$variadic(block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"truncate?","truncate?",135673334),false], 0));
var icon = frontend.components.icon.get_node_icon_cp(block,cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"hide-inline-icon?","hide-inline-icon?",2041502557),true,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"result-type","result-type",-982013227),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"source-block","source-block",-878290804),block], null);
}),pages);
});
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"initial","initial",1854648214),(function (_,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.recent.get_recent_pages()),(function (recent_pages){
return promesa.protocols._promise(((((clojure.string.blank_QMARK_(cljs.core.deref(_BANG_input))) && (cljs.core.not(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state)))))))?cljs.core.reset_BANG_(_BANG_results,cljs.core.assoc_in(frontend.components.cmdk.core.default_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recently-updated-pages","recently-updated-pages",-1385487647),new cljs.core.Keyword(null,"items","items",1031954938)], null),frontend.components.cmdk.core.recent_page_items(recent_pages))):null));
}));
}));
}));
/**
 * Return the locale-only translation for a command.
 *   Returns nil when the locale is :en or the key has no translation in the
 *   current locale — no English fallback is applied.
 */
frontend.components.cmdk.core.translate_locale = (function frontend$components$cmdk$core$translate_locale(p__54881){
var map__54882 = p__54881;
var map__54882__$1 = cljs.core.__destructure_map(map__54882);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54882__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
return frontend.context.i18n.t_locale.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.modules.shortcut.utils.decorate_namespace(id)], 0));
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.cmdk !== 'undefined') && (typeof frontend.components.cmdk.core !== 'undefined') && (typeof frontend.components.cmdk.core._BANG_commands_cache !== 'undefined')){
} else {
frontend.components.cmdk.core._BANG_commands_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),null,new cljs.core.Keyword(null,"commands","commands",161008658),null], null));
}
/**
 * Return commands with locale, English, and (for :zh-CN) pinyin-initial fields.
 *   :locale-t — locale-only translation; nil when locale is :en or key has no
 *            locale entry (no English fallback).
 *   :en-t     — English translation; always present.
 *   :pinyin-t — Simplified Chinese pinyin initials; present only for :zh-CN.
 *   Cached by language — rebuilt only when preferred-language changes.
 */
frontend.components.cmdk.core.get_commands_for_search = (function frontend$components$cmdk$core$get_commands_for_search(){
var lang = (function (){var or__5142__auto__ = (function (){var G__54883 = frontend.state.get_state(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017));
if((G__54883 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__54883);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"en","en",88457073);
}
})();
var cache = cljs.core.deref(frontend.components.cmdk.core._BANG_commands_cache);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cache),lang)){
return new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(cache);
} else {
var zh_cn_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lang,new cljs.core.Keyword(null,"zh-CN","zh-CN",870973321));
var cmds = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (cmd){
var locale_t = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lang,new cljs.core.Keyword(null,"en","en",88457073)))?null:frontend.components.cmdk.core.translate_locale(cmd));
var en_t = frontend.components.cmdk.core.translate(frontend.context.i18n.t_en,cmd);
var G__54884 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"en-t","en-t",-1181431028),en_t);
var G__54884__$1 = (cljs.core.truth_(locale_t)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54884,new cljs.core.Keyword(null,"locale-t","locale-t",1382911509),locale_t):G__54884);
if(cljs.core.truth_((function (){var and__5140__auto__ = zh_cn_QMARK_;
if(and__5140__auto__){
return locale_t;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54884__$1,new cljs.core.Keyword(null,"pinyin-t","pinyin-t",228562898),(frontend.search.hanzi__GT_initials.cljs$core$IFn$_invoke$arity$1 ? frontend.search.hanzi__GT_initials.cljs$core$IFn$_invoke$arity$1(locale_t) : frontend.search.hanzi__GT_initials.call(null,locale_t)));
} else {
return G__54884__$1;
}
}),frontend.handler.command_palette.top_commands((1000)));
cljs.core.reset_BANG_(frontend.components.cmdk.core._BANG_commands_cache,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang,new cljs.core.Keyword(null,"commands","commands",161008658),cmds], null));

return cmds;
}
});
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"commands","commands",161008658),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

var lang = (function (){var or__5142__auto__ = (function (){var G__54886 = frontend.state.get_state(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017));
if((G__54886 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__54886);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"en","en",88457073);
}
})();
var en_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lang,new cljs.core.Keyword(null,"en","en",88457073));
var zh_cn_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lang,new cljs.core.Keyword(null,"zh-CN","zh-CN",870973321));
var commands = frontend.components.cmdk.core.get_commands_for_search();
var extract_fns = ((en_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"en-t","en-t",-1181431028)], null):((zh_cn_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale-t","locale-t",1382911509),new cljs.core.Keyword(null,"en-t","en-t",-1181431028),new cljs.core.Keyword(null,"pinyin-t","pinyin-t",228562898)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale-t","locale-t",1382911509),new cljs.core.Keyword(null,"en-t","en-t",-1181431028)], null)
));
var search_results = ((clojure.string.blank_QMARK_(cljs.core.deref(_BANG_input)))?commands:(function (){var G__54887 = commands;
var G__54888 = cljs.core.deref(_BANG_input);
var G__54889 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extract-fns","extract-fns",-1056675676),extract_fns], null);
return (frontend.search.fuzzy_search_multi.cljs$core$IFn$_invoke$arity$3 ? frontend.search.fuzzy_search_multi.cljs$core$IFn$_invoke$arity$3(G__54887,G__54888,G__54889) : frontend.search.fuzzy_search_multi.call(null,G__54887,G__54888,G__54889));
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"items","items",1031954938)],[new cljs.core.Keyword(null,"success","success",1890645906),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54885_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword(null,"source-command","source-command",969630731)],["command",new cljs.core.Keyword(null,"gray","gray",1013268388),frontend.components.cmdk.core.translate(frontend.context.i18n.t,p1__54885_SHARP_),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697).cljs$core$IFn$_invoke$arity$1(p1__54885_SHARP_),p1__54885_SHARP_]);
}),search_results)])], 0));
}));
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recently-updated-pages","recently-updated-pages",-1385487647),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.recent.get_recent_pages()),(function (recent_pages){
return promesa.protocols._mcat(promesa.protocols._promise(((clojure.string.blank_QMARK_(cljs.core.deref(_BANG_input)))?recent_pages:(function (){var G__54890 = recent_pages;
var G__54891 = cljs.core.deref(_BANG_input);
var G__54892 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword("block","title","block/title",710445684)], null);
return (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$3 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$3(G__54890,G__54891,G__54892) : frontend.search.fuzzy_search.call(null,G__54890,G__54891,G__54892));
})())),(function (search_results){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"items","items",1031954938)],[new cljs.core.Keyword(null,"success","success",1890645906),frontend.components.cmdk.core.recent_page_items(search_results)])], 0)));
}));
}));
}));
}));
/**
 * Return hiccup of highlighted content FTS result
 */
frontend.components.cmdk.core.highlight_content_query = (function frontend$components$cmdk$core$highlight_content_query(content,q){
if(((clojure.string.blank_QMARK_(content)) || (clojure.string.blank_QMARK_(q)))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var content__$1 = content;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__54896 = frontend.util.text.cut_by(content__$1,"$pfts_2lqh>$","$<pfts_2lqh$");
var b_cut = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54896,(0),null);
var hl_cut = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54896,(1),null);
var e_cut = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54896,(2),null);
var hiccups_add = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),b_cut], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(0)], null)], null),hl_cut], null)], null);
var hiccups_add__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,hiccups_add);
var new_result = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,hiccups_add__$1);
if((!(clojure.string.blank_QMARK_(e_cut)))){
var G__55263 = e_cut;
var G__55264 = new_result;
content__$1 = G__55263;
result = G__55264;
continue;
} else {
return new_result;
}
break;
}
})()], null);
}
});
frontend.components.cmdk.core.page_item = (function frontend$components$cmdk$core$page_item(repo,page,current_page_uuid,input){
var entity = page;
var source_page = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(page);
var result_page_id = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(source_page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
}
}
})();
var current_page_QMARK_ = (function (){var and__5140__auto__ = current_page_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page_uuid,result_page_id);
} else {
return and__5140__auto__;
}
})();
var icon = frontend.components.icon.get_node_icon_cp(entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-current-icon?","ignore-current-icon?",-1279467710),true], null));
var title = new cljs.core.Keyword("block.temp","unique-title","block.temp/unique-title",-957782103).cljs$core$IFn$_invoke$arity$1(page);
var plain_title = frontend.handler.block.block_unique_title.cljs$core$IFn$_invoke$arity$variadic(entity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(source_page),new cljs.core.Keyword(null,"truncate?","truncate?",135673334),false], 0));
var test_title = (function (){var or__5142__auto__ = new cljs.core.Keyword("block.temp","original-title","block.temp/original-title",-1205887270).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return plain_title;
}
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"result-type","result-type",-982013227),new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword(null,"source-block","source-block",-878290804)],[icon,new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, ["data-testid",test_title], null),((clojure.string.includes_QMARK_(title,"$pfts_2lqh>$"))?frontend.components.cmdk.core.highlight_content_query(title,input):title)], null),(cljs.core.truth_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(entity))?frontend.components.block.breadcrumb.breadcrumb(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,new cljs.core.Keyword(null,"search?","search?",785472524),true], null),repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"search-result","search-result",528142443),new cljs.core.Keyword(null,"block","block",664686210),page], null)):null),new cljs.core.Keyword(null,"page","page",849072397),current_page_QMARK_,new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(page),(function (){var or__5142__auto__ = source_page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return page;
}
})()]);
});
frontend.components.cmdk.core.block_item = (function frontend$components$cmdk$core$block_item(repo,block,current_page_uuid,input){
var id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var text = new cljs.core.Keyword("block.temp","unique-title","block.temp/unique-title",-957782103).cljs$core$IFn$_invoke$arity$1(block);
var icon = frontend.components.icon.get_node_icon_cp(block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-current-icon?","ignore-current-icon?",-1279467710),true], null));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"text","text",-1790561697),frontend.components.cmdk.core.highlight_content_query(text,input),new cljs.core.Keyword(null,"header","header",119441134),frontend.components.block.breadcrumb.breadcrumb(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,new cljs.core.Keyword(null,"search?","search?",785472524),true], null),repo,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"search-result","search-result",528142443),new cljs.core.Keyword(null,"block","block",664686210),block], null)),new cljs.core.Keyword(null,"result-type","result-type",-982013227),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),(function (){var temp__5825__auto__ = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var page_id = temp__5825__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,current_page_uuid);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"source-block","source-block",-878290804),block], null);
});
frontend.components.cmdk.core.block_search_result__GT_items = (function frontend$components$cmdk$core$block_search_result__GT_items(result){
if(cljs.core.map_QMARK_(result)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(result));
}
})()], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),result,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368),cljs.core.count(result)], null);
}
});
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state);
var repo = frontend.state.get_current_repo();
var current_page = (function (){var or__5142__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.page.get_current_page_uuid();
}
})();
var expanded_QMARK_ = new cljs.core.Keyword("frontend.components.cmdk.core","expanded?","frontend.components.cmdk.core/expanded?",616367464).cljs$core$IFn$_invoke$arity$1(state);
var opts = frontend.components.cmdk.state.cmdk_block_search_options(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter-group","filter-group",869589094),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"dev?","dev?",-613971064),frontend.config.dev_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.cmdk.core.get_action(),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.components.cmdk.core._LT_page_uuid.cljs$core$IFn$_invoke$arity$2 ? frontend.components.cmdk.core._LT_page_uuid.cljs$core$IFn$_invoke$arity$2(repo,current_page) : frontend.components.cmdk.core._LT_page_uuid.call(null,repo,current_page))),(function (current_page_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.block_search(repo,cljs.core.deref(_BANG_input),opts)),(function (search_result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.cmdk.core.block_search_result__GT_items(search_result)),(function (p__54899){
var map__54900 = p__54899;
var map__54900__$1 = cljs.core.__destructure_map(map__54900);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54900__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var matched_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54900__$1,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368));
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks)),(function (blocks__$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core.truth_(new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(block))){
return frontend.components.cmdk.core.page_item(repo,block,current_page_uuid,cljs.core.deref(_BANG_input));
} else {
return frontend.components.cmdk.core.block_item(repo,block,current_page_uuid,cljs.core.deref(_BANG_input));
}
}),blocks__$1)),(function (items){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"current-page","current-page",-101294180)))?(function (){var items_on_current_page = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),items);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items_on_current_page,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368),cljs.core.count(items_on_current_page),new cljs.core.Keyword(null,"has-more?","has-more?",-1528440566),false], null)], 0));
})():cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368),matched_count,new cljs.core.Keyword(null,"has-more?","has-more?",-1528440566),(matched_count > cljs.core.count(items))], null)], 0))));
}));
}));
}));
}));
}));
}));
}));
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"codes","codes",-760505543),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state);
var repo = frontend.state.get_current_repo();
var current_page = (function (){var or__5142__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.page.get_current_page_uuid();
}
})();
var opts = frontend.components.cmdk.state.cmdk_block_search_options(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-group","filter-group",869589094),new cljs.core.Keyword(null,"codes","codes",-760505543),new cljs.core.Keyword(null,"dev?","dev?",-613971064),frontend.config.dev_QMARK_], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.components.cmdk.core._LT_page_uuid.cljs$core$IFn$_invoke$arity$2 ? frontend.components.cmdk.core._LT_page_uuid.cljs$core$IFn$_invoke$arity$2(repo,current_page) : frontend.components.cmdk.core._LT_page_uuid.call(null,repo,current_page))),(function (current_page_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.block_search(repo,cljs.core.deref(_BANG_input),opts)),(function (search_result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.cmdk.core.block_search_result__GT_items(search_result)),(function (p__54901){
var map__54902 = p__54901;
var map__54902__$1 = cljs.core.__destructure_map(map__54902);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54902__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var matched_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54902__$1,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368));
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks)),(function (blocks__$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return frontend.components.cmdk.core.block_item(repo,block,current_page_uuid,cljs.core.deref(_BANG_input));
}),blocks__$1)),(function (items){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368),matched_count,new cljs.core.Keyword(null,"has-more?","has-more?",-1528440566),(matched_count > cljs.core.count(items))], null)], 0)));
}));
}));
}));
}));
}));
}));
}));
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.file_search.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_input),(99))),(function (files){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"file-path","file-path",-2005501162)],["file",new cljs.core.Keyword(null,"gray","gray",1013268388),file,file]);
}),files)),(function (items){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items], null)], 0)));
}));
}));
}));
}));
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"themes","themes",-702786642),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state);
var themes = frontend.state.get_state(new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197));
var themes__$1 = ((clojure.string.blank_QMARK_(cljs.core.deref(_BANG_input)))?themes:(function (){var G__54903 = themes;
var G__54904 = cljs.core.deref(_BANG_input);
var G__54905 = new cljs.core.Keyword(null,"limit","limit",-1355822363);
var G__54906 = (100);
var G__54907 = new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723);
var G__54908 = new cljs.core.Keyword(null,"name","name",1843675177);
return (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6(G__54903,G__54904,G__54905,G__54906,G__54907,G__54908) : frontend.search.fuzzy_search.call(null,G__54903,G__54904,G__54905,G__54906,G__54907,G__54908));
})());
var themes__$2 = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("theme","logseq-default","theme/logseq-default",-2061082345)], 0)),new cljs.core.Keyword(null,"pid","pid",1018387698),"logseq-classic-theme",new cljs.core.Keyword(null,"mode","mode",654403691),frontend.state.get_state(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)),new cljs.core.Keyword(null,"url","url",276297046),null], null),themes__$1);
var selected = frontend.state.get_state(new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

var items = (function (){var iter__5628__auto__ = (function frontend$components$cmdk$core$iter__54909(s__54910){
return (new cljs.core.LazySeq(null,(function (){
var s__54910__$1 = s__54910;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54910__$1);
if(temp__5825__auto__){
var s__54910__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54910__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54910__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54912 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54911 = (0);
while(true){
if((i__54911 < size__5627__auto__)){
var t = cljs.core._nth(c__5626__auto__,i__54911);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(t),selected);
cljs.core.chunk_append(b__54912,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"info","info",-317069002),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(t))+" #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(t))),new cljs.core.Keyword(null,"icon","icon",1679606541),((selected_QMARK_)?"checkbox":"palette"),new cljs.core.Keyword(null,"source-theme","source-theme",984403400),t,new cljs.core.Keyword(null,"selected","selected",574897764),selected_QMARK_], null));

var G__55310 = (i__54911 + (1));
i__54911 = G__55310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54912),frontend$components$cmdk$core$iter__54909(cljs.core.chunk_rest(s__54910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54912),null);
}
} else {
var t = cljs.core.first(s__54910__$2);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(t),selected);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"info","info",-317069002),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(t))+" #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(t))),new cljs.core.Keyword(null,"icon","icon",1679606541),((selected_QMARK_)?"checkbox":"palette"),new cljs.core.Keyword(null,"source-theme","source-theme",984403400),t,new cljs.core.Keyword(null,"selected","selected",574897764),selected_QMARK_], null),frontend$components$cmdk$core$iter__54909(cljs.core.rest(s__54910__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(themes__$2);
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items], null)], 0));
}));
frontend.components.cmdk.core.get_filter_q = (function frontend$components$cmdk$core$get_filter_q(input){
var or__5142__auto__ = ((clojure.string.starts_with_QMARK_(input,"/"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(input,(1)):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.last(logseq.common.util.split_last("/",input));
}
});
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"filters","filters",974726919),(function (group,state){
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var input = cljs.core.deref(_BANG_input);
var q = (function (){var or__5142__auto__ = frontend.components.cmdk.core.get_filter_q(input);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var matched_items = ((clojure.string.blank_QMARK_(q))?frontend.components.cmdk.core.filters():(function (){var G__54913 = frontend.components.cmdk.core.filters();
var G__54914 = q;
var G__54915 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"text","text",-1790561697)], null);
return (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$3 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$3(G__54913,G__54914,G__54915) : frontend.search.fuzzy_search.call(null,G__54913,G__54914,G__54915));
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),matched_items], null)], 0));
}));
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(function (group,state){
var temp__5823__auto__ = (function (){var or__5142__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.page.get_current_page_uuid();
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var current_page = temp__5823__auto__;
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var repo = frontend.state.get_current_repo();
var expanded_QMARK_ = new cljs.core.Keyword("frontend.components.cmdk.core","expanded?","frontend.components.cmdk.core/expanded?",616367464).cljs$core$IFn$_invoke$arity$1(state);
var opts = frontend.components.cmdk.state.cmdk_block_search_options(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-group","filter-group",869589094),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"dev?","dev?",-613971064),frontend.config.dev_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.components.cmdk.core._LT_page_uuid.cljs$core$IFn$_invoke$arity$2 ? frontend.components.cmdk.core._LT_page_uuid.cljs$core$IFn$_invoke$arity$2(repo,current_page) : frontend.components.cmdk.core._LT_page_uuid.call(null,repo,current_page))),(function (current_page_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915),current_page_uuid)),(function (opts__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.block_search(repo,cljs.core.deref(_BANG_input),opts__$1)),(function (search_result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.cmdk.core.block_search_result__GT_items(search_result)),(function (p__54916){
var map__54917 = p__54916;
var map__54917__$1 = cljs.core.__destructure_map(map__54917);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54917__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var matched_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54917__$1,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368));
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks)),(function (blocks__$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var id = ((cljs.core.uuid_QMARK_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block):cljs.core.uuid(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"icon","icon",1679606541),"node",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"text","text",-1790561697),frontend.components.cmdk.core.highlight_content_query(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),cljs.core.deref(_BANG_input)),new cljs.core.Keyword(null,"header","header",119441134),frontend.components.block.breadcrumb.breadcrumb(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search?","search?",785472524),true], null),repo,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"search-result","search-result",528142443),new cljs.core.Keyword(null,"block","block",664686210),block], null)),new cljs.core.Keyword(null,"result-type","result-type",-982013227),(cljs.core.truth_(new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(block))?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210)),new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),true,new cljs.core.Keyword(null,"source-block","source-block",-878290804),block], null);
}),blocks__$1)),(function (items){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368),matched_count,new cljs.core.Keyword(null,"has-more?","has-more?",-1528440566),(matched_count > cljs.core.count(items))], null)], 0)));
}));
}));
}));
}));
}));
}));
}));
} else {
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state),null);
}
}));
frontend.components.cmdk.core.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,state){
var filter_group = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state)));
if(((cljs.core.not((function (){var G__54918 = state;
var G__54918__$1 = (((G__54918 == null))?null:new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(G__54918));
var G__54918__$2 = (((G__54918__$1 == null))?null:cljs.core.deref(G__54918__$1));
if((G__54918__$2 == null)){
return null;
} else {
return cljs.core.seq(G__54918__$2);
}
})())) && (cljs.core.not(filter_group)))){
frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initial","initial",1854648214),state);

return frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filters","filters",974726919),state);
} else {
if(cljs.core.truth_(filter_group)){
return frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(filter_group,state);
} else {
frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"commands","commands",161008658),state);

frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodes","nodes",-2099585805),state);

frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filters","filters",974726919),state);

frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"files","files",-472457450),state);

return frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recently-updated-pages","recently-updated-pages",-1385487647),state);
}
}
}));
frontend.components.cmdk.core.refresh_results_key = (function frontend$components$cmdk$core$refresh_results_key(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state))),frontend.components.cmdk.core.get_action()], null);
});
frontend.components.cmdk.core.copy_block_ref = (function frontend$components$cmdk$core$copy_block_ref(state){
var temp__5825__auto__ = (function (){var G__54919 = state;
var G__54919__$1 = (((G__54919 == null))?null:frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54919));
var G__54919__$2 = (((G__54919__$1 == null))?null:new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(G__54919__$1));
if((G__54919__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__54919__$2);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_uuid,frontend.util.ref.__GT_block_ref);

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)));
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.cmdk !== 'undefined') && (typeof frontend.components.cmdk.core !== 'undefined') && (typeof frontend.components.cmdk.core.handle_action !== 'undefined')){
} else {
frontend.components.cmdk.core.handle_action = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54920 = cljs.core.get_global_hierarchy;
return (fexpr__54920.cljs$core$IFn$_invoke$arity$0 ? fexpr__54920.cljs$core$IFn$_invoke$arity$0() : fexpr__54920.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.components.cmdk.core","handle-action"),(function (action,_state,_event){
return action;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
frontend.components.cmdk.core.get_highlighted_page_uuid_or_name = (function frontend$components$cmdk$core$get_highlighted_page_uuid_or_name(state){
var highlighted_item = (function (){var G__54921 = state;
if((G__54921 == null)){
return null;
} else {
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54921);
}
})();
var block = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(highlighted_item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(highlighted_item);
}
})();
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
});
frontend.components.cmdk.core._LT_page_uuid = (function frontend$components$cmdk$core$_LT_page_uuid(repo,page_id_name_or_uuid){
if(cljs.core.uuid_QMARK_(page_id_name_or_uuid)){
return promesa.core.resolved(page_id_name_or_uuid);
} else {
if((page_id_name_or_uuid == null)){
return promesa.core.resolved(null);
} else {
var lookup_ref = ((((typeof page_id_name_or_uuid === 'string') && (logseq.common.util.uuid_string_QMARK_(page_id_name_or_uuid))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(page_id_name_or_uuid)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(page_id_name_or_uuid)], null));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),lookup_ref], 0))),(function (page){
return promesa.protocols._promise(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page));
}));
}));

}
}
});
frontend.components.cmdk.core.block_page_uuid = (function frontend$components$cmdk$core$block_page_uuid(block){
var page = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.uuid_QMARK_(page)){
return page;
} else {
if(cljs.core.map_QMARK_(page)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
} else {
return null;
}
}
});
frontend.components.cmdk.core._LT_block_parent_page_uuid = (function frontend$components$cmdk$core$_LT_block_parent_page_uuid(repo,block){
var or__5142__auto__ = frontend.components.cmdk.core.block_page_uuid(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null)], 0))),(function (block_SINGLEQUOTE_){
return promesa.protocols._promise(frontend.components.cmdk.core.block_page_uuid(block_SINGLEQUOTE_));
}));
}));
}
});
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open-page","open-page",408877301),(function (_,state,_event){
var temp__5825__auto__ = frontend.components.cmdk.core.get_highlighted_page_uuid_or_name(state);
if(cljs.core.truth_(temp__5825__auto__)){
var page_name = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.cmdk.core._LT_page_uuid(frontend.state.get_current_repo(),page_name)),(function (page_uuid){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_uuid)?frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_uuid):null)),(function (___21901__auto__){
return promesa.protocols._promise((logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560))));
}));
}));
}));
} else {
return null;
}
}));
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open-block","open-block",1952534985),(function (_,state,_event){
var temp__5825__auto__ = (function (){var G__54922 = state;
var G__54922__$1 = (((G__54922 == null))?null:frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54922));
var G__54922__$2 = (((G__54922__$1 == null))?null:new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(G__54922__$1));
if((G__54922__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__54922__$2);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children?","children?",-1199594108),false], 0))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_parents(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(1000))),(function (parents){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.some((function (block_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_))){
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
} else {
return null;
}
}),parents)),(function (created_from_block){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(created_from_block)?(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(created_from_block))?created_from_block:frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null)], null),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(created_from_block)], 0))):null)),(function (created_from_block__$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = created_from_block__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})()),(function (block__$1){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1)),(function (block_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.cmdk.core._LT_block_parent_page_uuid(repo,block__$1)),(function (page_uuid){
return promesa.protocols._promise((cljs.core.truth_(block__$1)?(function (){
if(cljs.core.truth_(cljs.core.some(frontend.util.collapsed_QMARK_,parents))){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(block_id__$1);
} else {
if(cljs.core.truth_(page_uuid)){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(page_uuid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),(""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id__$1))], null));
} else {
}
}

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)));
})()
:null));
}));
}));
}));
}));
}));
}));
}));
}));
}));
} else {
return null;
}
}));
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open-page-right","open-page-right",1037849418),(function (_,state,_event){
var temp__5825__auto__ = frontend.components.cmdk.core.get_highlighted_page_uuid_or_name(state);
if(cljs.core.truth_(temp__5825__auto__)){
var page_name = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.cmdk.core._LT_page_uuid(frontend.state.get_current_repo(),page_name)),(function (page_uuid){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_uuid)?frontend.handler.editor.format.open_block_in_sidebar_BANG_(page_uuid):null)),(function (___21901__auto__){
return promesa.protocols._promise((logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560))));
}));
}));
}));
} else {
return null;
}
}));
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open-block-right","open-block-right",-1593533049),(function (_,state,_event){
var temp__5825__auto__ = (function (){var G__54923 = state;
var G__54923__$1 = (((G__54923 == null))?null:frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54923));
var G__54923__$2 = (((G__54923__$1 == null))?null:new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(G__54923__$1));
if((G__54923__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__54923__$2);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children?","children?",-1199594108),false], 0))),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.format.open_block_in_sidebar_BANG_(block_uuid)),(function (___21901__auto__){
return promesa.protocols._promise((logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560))));
}));
}));
}));
}));
} else {
return null;
}
}));
frontend.components.cmdk.core.open_file = (function frontend$components$cmdk$core$open_file(file_path){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),file_path], null)], null));
});
frontend.components.cmdk.core.page_item_QMARK_ = (function frontend$components$cmdk$core$page_item_QMARK_(item){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"result-type","result-type",-982013227).cljs$core$IFn$_invoke$arity$1(item))) || (((new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(item)) === true) || ((!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(item)) == null)))))));
});
frontend.components.cmdk.core.event_shift_QMARK_ = (function frontend$components$cmdk$core$event_shift_QMARK_(event){
return cljs.core.boolean$(((cljs.core.map_QMARK_(event))?new cljs.core.Keyword(null,"shift?","shift?",-1034734696).cljs$core$IFn$_invoke$arity$1(event):frontend.components.cmdk.core.goog$module$goog$object.getValueByKeys(event,"shiftKey")
));
});
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open","open",-1763596448),(function (_,state,event){
var temp__5825__auto__ = (function (){var G__54924 = state;
if((G__54924 == null)){
return null;
} else {
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54924);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
var page_QMARK_ = frontend.components.cmdk.core.page_item_QMARK_(item);
var block_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(item));
var shift_QMARK_ = frontend.components.cmdk.core.event_shift_QMARK_(event);
var shift_or_sidebar_QMARK_ = ((shift_QMARK_) || (cljs.core.boolean$(new cljs.core.Keyword(null,"open-sidebar?","open-sidebar?",1933561166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(state)))));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(item))){
frontend.components.cmdk.core.open_file(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(item));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)));
} else {
if(((shift_or_sidebar_QMARK_) && (page_QMARK_))){
return frontend.components.cmdk.core.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"open-page-right","open-page-right",1037849418),state,event);
} else {
if(((shift_or_sidebar_QMARK_) && (block_QMARK_))){
return frontend.components.cmdk.core.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"open-block-right","open-block-right",-1593533049),state,event);
} else {
if(page_QMARK_){
return frontend.components.cmdk.core.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"open-page","open-page",408877301),state,event);
} else {
if(block_QMARK_){
return frontend.components.cmdk.core.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"open-block","open-block",1952534985),state,event);
} else {
return null;
}
}
}
}
}
} else {
return null;
}
}));
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"search","search",1564939822),(function (_,state,_event){
var temp__5825__auto__ = (function (){var G__54925 = state;
if((G__54925 == null)){
return null;
} else {
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54925);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
var search_query = new cljs.core.Keyword(null,"source-search","source-search",-401166475).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state),search_query);
} else {
return null;
}
}));
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"trigger","trigger",103466139),(function (_,state,_event){
var highlighted_item = (function (){var G__54926 = state;
if((G__54926 == null)){
return null;
} else {
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54926);
}
})();
var command = new cljs.core.Keyword(null,"source-command","source-command",969630731).cljs$core$IFn$_invoke$arity$1(highlighted_item);
var dont_close_commands = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("graph","open","graph/open",-1870468846),null,new cljs.core.Keyword("misc","import-edn-data","misc/import-edn-data",36006165),null,new cljs.core.Keyword("graph","remove","graph/remove",-246951656),null,new cljs.core.Keyword("editor","move-blocks","editor/move-blocks",421853852),null,new cljs.core.Keyword("dev","replace-graph-with-db-file","dev/replace-graph-with-db-file",1809442556),null], null), null);
var search_args = frontend.state.get_state(new cljs.core.Keyword("search","args","search/args",-462145864));
var action = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(command);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = new cljs.core.Keyword(null,"trigger","trigger",103466139).cljs$core$IFn$_invoke$arity$1(search_args);
if(cljs.core.truth_(temp__5825__auto__)){
var trigger = temp__5825__auto__;
return (function (){
return (trigger.cljs$core$IFn$_invoke$arity$1 ? trigger.cljs$core$IFn$_invoke$arity$1(highlighted_item) : trigger.call(null,highlighted_item));
});
} else {
return null;
}
}
})();
var input_ref = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input-ref","frontend.components.cmdk.core/input-ref",-581377366).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(action)){
(input_ref.value = "");

input_ref.focus();

(action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));

if(cljs.core.contains_QMARK_(dont_close_commands,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(command))){
return null;
} else {
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)));
}
} else {
return null;
}
}));
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (_,state,_event){
var item = frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(state);
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var input = cljs.core.deref(_BANG_input);
var create_class_QMARK_ = clojure.string.starts_with_QMARK_(cljs.core.deref(_BANG_input),"#");
var create_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"source-create","source-create",-1664647972).cljs$core$IFn$_invoke$arity$1(item));
var class$ = ((create_class_QMARK_)?frontend.components.cmdk.core.get_class_from_input(cljs.core.deref(_BANG_input)):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dialog","show-block","dialog/show-block",-1728519561),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494),true], null)], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((create_class_QMARK_)?frontend.handler.db_based.page._LT_create_class_BANG_(class$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null)):((create_page_QMARK_)?(function (){var G__54927 = input;
var G__54928 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),true,new cljs.core.Keyword(null,"edit?","edit?",-842131310),false], null);
return (frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(G__54927,G__54928) : frontend.handler.page._LT_create_BANG_.call(null,G__54927,G__54928));
})():null))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((create_page_QMARK_)?(function (){var G__54929 = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return input;
}
})();
return (frontend.handler.page.edit_page_when_present_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.page.edit_page_when_present_BANG_.cljs$core$IFn$_invoke$arity$1(G__54929) : frontend.handler.page.edit_page_when_present_BANG_.call(null,G__54929));
})():null)),(function (___21901__auto____$1){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = create_class_QMARK_;
if(and__5140__auto__){
return result;
} else {
return and__5140__auto__;
}
})())?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dialog","show-block","dialog/show-block",-1728519561),result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494),true], null)], null)):null));
}));
}));
}));
}));
}
}));
frontend.components.cmdk.core.get_filter_user_input = (function frontend$components$cmdk$core$get_filter_user_input(input){
if(clojure.string.includes_QMARK_(input,"/")){
return cljs.core.first(logseq.common.util.split_last("/",input));
} else {
if(clojure.string.starts_with_QMARK_(input,"/")){
return "";
} else {
return input;

}
}
});
frontend.components.cmdk.core.persist_cmdk_query_state_BANG_ = (function frontend$components$cmdk$core$persist_cmdk_query_state_BANG_(state){
var input_ref = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input-ref","frontend.components.cmdk.core/input-ref",-581377366).cljs$core$IFn$_invoke$arity$1(state));
var input_value = (function (){var or__5142__auto__ = (function (){var G__54930 = input_ref;
if((G__54930 == null)){
return null;
} else {
return G__54930.value;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state));
}
})();
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(input_value,cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state))))?cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state),input_value):null);
var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(state);
return frontend.components.cmdk.state.persist_last_cmdk_search_BANG_(opts,frontend.state.get_state(new cljs.core.Keyword("search","mode","search/mode",1628111395)),frontend.state.get_state(new cljs.core.Keyword("search","args","search/args",-462145864)),frontend.state.get_current_repo(),input_value,cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state)));
});
frontend.components.cmdk.core.clear_filter_and_refresh_BANG_ = (function frontend$components$cmdk$core$clear_filter_and_refresh_BANG_(state){
var filter_group = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state)));
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state),null);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087));

frontend.state.set_state_BANG_(new cljs.core.Keyword("search","mode","search/mode",1628111395),new cljs.core.Keyword(null,"global","global",93595047));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_group,new cljs.core.Keyword(null,"items","items",1031954938)], null),null);

frontend.components.cmdk.core.persist_cmdk_query_state_BANG_(state);

frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),state);

return cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input-ref","frontend.components.cmdk.core/input-ref",-581377366).cljs$core$IFn$_invoke$arity$1(state)).focus();
});
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"filter","filter",-948537934),(function (_,state,_event){
var item = (function (){var G__54931 = state;
if((G__54931 == null)){
return null;
} else {
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54931);
}
})();
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var input_ref = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input-ref","frontend.components.cmdk.core/input-ref",-581377366).cljs$core$IFn$_invoke$arity$1(state));
var value_55340 = frontend.components.cmdk.core.get_filter_user_input(cljs.core.deref(_BANG_input));
cljs.core.reset_BANG_(_BANG_input,value_55340);

(input_ref.value = value_55340);

var _BANG_filter = new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state);
var group = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"group","group",582596132)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_filter,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087));

frontend.components.cmdk.core.persist_cmdk_query_state_BANG_(state);

frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(group,state);

return input_ref.focus();
}));
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"theme","theme",-1247880880),(function (_,state,_event){
var temp__5825__auto__ = (function (){var G__54932 = state;
if((G__54932 == null)){
return null;
} else {
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54932);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
LSPluginCore.selectTheme(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-theme","source-theme",984403400).cljs$core$IFn$_invoke$arity$1(item)));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
} else {
return null;
}
}));
frontend.components.cmdk.core.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,state,event){
var temp__5825__auto__ = frontend.components.cmdk.core.state__GT_action.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var action = temp__5825__auto__;
return frontend.components.cmdk.core.handle_action.cljs$core$IFn$_invoke$arity$3(action,state,event);
} else {
return null;
}
}));
/**
 * Pixel clearance reserved at the top and bottom of the scroll container.
 */
frontend.components.cmdk.core.scroll_padding = (32);
/**
 * Synchronously toggles [data-kb-highlighted] on the DOM, with CSS
 *   transition suppressed to prevent flicker.
 */
frontend.components.cmdk.core.sync_keyboard_highlight_BANG_ = (function frontend$components$cmdk$core$sync_keyboard_highlight_BANG_(container,old_item_idx,new_item_idx){
var temp__5825__auto___55341 = (((!((old_item_idx == null))))?container.querySelector((""+"[data-item-index='"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_item_idx)+"'] [data-cmdk-item]")):container.querySelector("[data-kb-highlighted]"));
if(cljs.core.truth_(temp__5825__auto___55341)){
var old_el_55342 = temp__5825__auto___55341;
(old_el_55342.style.transition = "none");

old_el_55342.removeAttribute("data-kb-highlighted");

requestAnimationFrame((function (){
return (old_el_55342.style.transition = "");
}));
} else {
}

var temp__5825__auto__ = container.querySelector((""+"[data-item-index='"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_item_idx)+"'] [data-cmdk-item]"));
if(cljs.core.truth_(temp__5825__auto__)){
var new_el = temp__5825__auto__;
(new_el.style.transition = "none");

new_el.setAttribute("data-kb-highlighted","true");

return requestAnimationFrame((function (){
return (new_el.style.transition = "");
}));
} else {
return null;
}
});
/**
 * Updates the scroll position to bring the highlighted row into view.
 * 
 *   - Row not yet rendered (lazy-visible placeholder, no [data-cmdk-item] child)
 *  -> defers scrolling until item mount callback re-enters this function.
 *  No scroll is attempted until the item is present.
 *  (`focus-height <= 4` serves as a structural fallback for edge cases.)
 * 
 *   - Row outside viewport -> instant snap (`scrollTop` assignment).
 *  During rapid key-repeat (~30 ms) even native smooth scroll cannot converge
 *  before the next event fires, leaving the row partially or fully out of view.
 * 
 *   - Row inside viewport but within scroll-padding zone -> browser-native smooth
 *  scroll via `scrollTo {behavior: 'smooth'}` for a small (<=32 px) nudge.
 * 
 *   - Wrap-around (first -> last): in long lists the target is outside the current
 *  viewport and instant snap applies. In short lists where all items are visible
 *  the item may remain in viewport; logic is unified via item-in-viewport?.
 */
frontend.components.cmdk.core.scroll_to_highlight_BANG_ = (function frontend$components$cmdk$core$scroll_to_highlight_BANG_(state,row_el){
var temp__5825__auto__ = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","scroll-container-ref","frontend.components.cmdk.core/scroll-container-ref",1170500984).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5825__auto__)){
var container = temp__5825__auto__;
if(cljs.core.truth_(row_el)){
var highlighted_item_idx = (function (){var G__54933 = state;
var G__54933__$1 = (((G__54933 == null))?null:frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54933));
if((G__54933__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"item-index","item-index",411110314).cljs$core$IFn$_invoke$arity$1(G__54933__$1);
}
})();
var row_item_idx = (function (){var G__54934 = row_el.closest("[data-item-index]");
if((G__54934 == null)){
return null;
} else {
return G__54934.getAttribute("data-item-index");
}
})();
var stale_row_QMARK_ = (((!((highlighted_item_idx == null)))) && ((((!((row_item_idx == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(highlighted_item_idx)),row_item_idx)))));
if(stale_row_QMARK_){
return null;
} else {
var temp__5825__auto____$1 = frontend.components.cmdk.scroll.focus_row_visible_rect(container,row_el);
if(cljs.core.truth_(temp__5825__auto____$1)){
var rect = temp__5825__auto____$1;
var focus_height = new cljs.core.Keyword(null,"focus-height","focus-height",-2072065941).cljs$core$IFn$_invoke$arity$1(rect);
var not_rendered_QMARK_ = ((cljs.core.not(row_el.querySelector("[data-cmdk-item]"))) || ((focus_height <= (4))));
if(not_rendered_QMARK_){
return null;
} else {
var current_top = container.scrollTop;
var viewport_h = container.clientHeight;
var focus_top = new cljs.core.Keyword(null,"focus-top","focus-top",-1380005451).cljs$core$IFn$_invoke$arity$1(rect);
var focus_bottom = (focus_top + focus_height);
var item_in_viewport_QMARK_ = (((focus_top >= current_top)) && ((focus_bottom <= (current_top + viewport_h))));
var target_top = frontend.components.cmdk.scroll.ensure_focus_visible_scroll_top(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rect,new cljs.core.Keyword(null,"scroll-padding-top","scroll-padding-top",-1893186356),frontend.components.cmdk.core.scroll_padding,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scroll-padding-bottom","scroll-padding-bottom",1640092791),frontend.components.cmdk.core.scroll_padding], 0)));
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","pending-scroll-item-idx","frontend.components.cmdk.core/pending-scroll-item-idx",-1627184973).cljs$core$IFn$_invoke$arity$1(state),null);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_top,Math.round(current_top))){
if(item_in_viewport_QMARK_){
return container.scrollTo(({"top": target_top, "behavior": "smooth"}));
} else {
return (container.scrollTop = target_top);
}
} else {
return null;
}
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Runs deferred keyboard scroll correction when the highlighted row mounts.
 */
frontend.components.cmdk.core.on_item_mounted_scroll_BANG_ = (function frontend$components$cmdk$core$on_item_mounted_scroll_BANG_(state,item_idx,item_el){
if(cljs.core.truth_((function (){var and__5140__auto__ = item_el;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.cmdk.scroll.should_scroll_on_item_mounted_QMARK_(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","pending-scroll-item-idx","frontend.components.cmdk.core/pending-scroll-item-idx",-1627184973).cljs$core$IFn$_invoke$arity$1(state)),(function (){var G__54935 = state;
var G__54935__$1 = (((G__54935 == null))?null:frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54935));
if((G__54935__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"item-index","item-index",411110314).cljs$core$IFn$_invoke$arity$1(G__54935__$1);
}
})(),item_idx);
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = item_el.closest("[data-item-index]");
if(cljs.core.truth_(temp__5825__auto__)){
var row_el = temp__5825__auto__;
return frontend.components.cmdk.core.scroll_to_highlight_BANG_(state,row_el);
} else {
return null;
}
} else {
return null;
}
});
frontend.components.cmdk.core.render_result_list_item = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$render_result_list_item(state,group,highlighted_QMARK_,mouse_mode_QMARK_,item,hls_page_QMARK_,text,input){
var item_idx = new cljs.core.Keyword(null,"item-index","item-index",411110314).cljs$core$IFn$_invoke$arity$1(item);
var scroll_root = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","scroll-container-ref","frontend.components.cmdk.core/scroll-container-ref",1170500984).cljs$core$IFn$_invoke$arity$1(state));
var item__$1 = frontend.components.cmdk.list_item.root(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"group","group",582596132),group,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256)))?null:input),new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(hls_page_QMARK_)?frontend.extensions.pdf.utils.fix_local_asset_pagename(text):text),new cljs.core.Keyword(null,"hls-page?","hls-page?",491762704),hls_page_QMARK_,new cljs.core.Keyword(null,"compact","compact",-348732150),true,new cljs.core.Keyword(null,"rounded","rounded",85415706),true,new cljs.core.Keyword(null,"hoverable","hoverable",1153998892),mouse_mode_QMARK_,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),highlighted_QMARK_,new cljs.core.Keyword(null,"on-mounted","on-mounted",-1980352058),(function (item_el){
return frontend.components.cmdk.core.on_item_mounted_scroll_BANG_(state,item_idx,item_el);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop_propagation(e);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state),item);

frontend.components.cmdk.core.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.cmdk.core","fallback-item","frontend.components.cmdk.core/fallback-item",-503163357),item),e);

var temp__5825__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5825__auto__)){
var on_click = temp__5825__auto__;
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(e) : on_click.call(null,e));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (e){
var dx = (function (){var or__5142__auto__ = e.movementX;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var dy = (function (){var or__5142__auto__ = e.movementY;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var real_pointer_move_QMARK_ = (((!((dx === (0))))) || ((!((dy === (0))))));
if(real_pointer_move_QMARK_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mouse","mouse",478628972),cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state)))){
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"mouse","mouse",478628972));
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state)))){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state),item);
} else {
return null;
}
} else {
return null;
}
})], 0)),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-item-index","data-item-index",-1397199346),item_idx], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"nodes","nodes",-2099585805)))?frontend.ui.lazy_visible((function (){
return item__$1;
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),scroll_root,new cljs.core.Keyword(null,"root-margin","root-margin",-1598874814),"500px 0px"], null)):item__$1)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$render_result_list_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54936 = cljs.core.first(args__31746__auto__);
var G__54937 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54936,G__54937) : io.factorhouse.hsx.core.obj_get.call(null,G__54936,G__54937));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-result-list-item","render-result-list-item",-216559860,null),args__31746__auto__),frontend$components$cmdk$core$render_result_list_item,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$render_result_list_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55343__i = 0, G__55343__a = new Array(arguments.length -  0);
while (G__55343__i < G__55343__a.length) {G__55343__a[G__55343__i] = arguments[G__55343__i + 0]; ++G__55343__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55343__a,0,null);
} 
return frontend$components$cmdk$core$render_result_list_item__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$render_result_list_item.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$render_result_list_item.cljs$lang$applyTo = (function (arglist__55344){
var args__31746__auto__ = cljs.core.seq(arglist__55344);
return frontend$components$cmdk$core$render_result_list_item__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$render_result_list_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$render_result_list_item__delegate;
return frontend$components$cmdk$core$render_result_list_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54939 = comp__31745__auto__;
var G__54940 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54939,G__54940) : io.factorhouse.hsx.core.react_memo.call(null,G__54939,G__54940));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-result-list-item");

return comp__31745__auto__;
})();
frontend.components.cmdk.core.show_more_results_BANG_ = (function frontend$components$cmdk$core$show_more_results_BANG_(state,group){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.Keyword(null,"more","more",-2058821800));

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),null], null), null),group)){
return frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(group,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.cmdk.core","expanded?","frontend.components.cmdk.core/expanded?",616367464),true));
} else {
return null;
}
});
frontend.components.cmdk.core.result_group = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$result_group(state,title,group,visible_items,first_item,sidebar_QMARK_){
var vec__54953 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state));
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54953,(0),null);
var vec__54956 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state));
var focus_source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54956,(0),null);
var vec__54959 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state));
var highlighted_item_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54959,(0),null);
var vec__54962 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state));
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54962,(0),null);
var vec__54965 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state));
var filter_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54965,(0),null);
var map__54968 = (function (){var G__54969 = results;
if((G__54969 == null)){
return null;
} else {
return (group.cljs$core$IFn$_invoke$arity$1 ? group.cljs$core$IFn$_invoke$arity$1(G__54969) : group.call(null,G__54969));
}
})();
var map__54968__$1 = cljs.core.__destructure_map(map__54968);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54968__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54968__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var matched_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54968__$1,new cljs.core.Keyword(null,"matched-count","matched-count",-1974895368));
var has_more_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54968__$1,new cljs.core.Keyword(null,"has-more?","has-more?",-1528440566));
var highlighted_item = (function (){var or__5142__auto__ = highlighted_item_STAR_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),focus_source)){
return first_item;
} else {
return null;
}
}
})();
var mouse_mode_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mouse","mouse",478628972),focus_source);
var visible_result_count = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source-create","source-create",-1664647972),visible_items));
var can_show_less_QMARK_ = (frontend.components.cmdk.core.get_group_limit(group) < visible_result_count);
var can_show_more_QMARK_ = (function (){var or__5142__auto__ = has_more_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (visible_result_count < cljs.core.count(items));
}
})();
var show_less = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.Keyword(null,"less","less",-428869198));
});
var show_more = (function (){
return frontend.components.cmdk.core.show_more_results_BANG_(state,group);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256)))?"border-b border-gray-06 last:border-b-0":"border-b border-gray-06 pb-1 last:border-b-0")], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256)))?null:new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs py-1.5 px-3 flex justify-between items-center gap-2 text-gray-11 bg-gray-02 h-8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-gray-11 pl-0.5 cursor-pointer select-none",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show,new cljs.core.Keyword(null,"more","more",-2058821800))){
return show_less();
} else {
return show_more();
}
})], null),title], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256)))?(function (){var display_count = (function (){var or__5142__auto__ = matched_count;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(items);
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pl-1.5 text-gray-12 rounded-full",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7rem"], null)], null),((((99) <= display_count))?"99+":display_count)], null);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null),(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = can_show_more_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return can_show_less_QMARK_;
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.empty_QMARK_(filter_SINGLEQUOTE_)) && (cljs.core.not(sidebar_QMARK_)));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-link.select-node.opacity-50.hover:opacity-90","a.text-link.select-node.opacity-50.hover:opacity-90",-1472646826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"mouse","mouse",478628972));

cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input-ref","frontend.components.cmdk.core/input-ref",-581377366).cljs$core$IFn$_invoke$arity$1(state)).focus();

return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show,new cljs.core.Keyword(null,"more","more",-2058821800)))?show_less:show_more)();
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show,new cljs.core.Keyword(null,"more","more",-2058821800)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","show-less","ui/show-less",1579669561)], 0)),logseq.shui.ui.shortcut("mod up",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","show-more","ui/show-more",-559919272)], 0)),logseq.shui.ui.shortcut("mod down",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"compact","compact",-348732150)], null))], null))], null):null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),(function (){var iter__5628__auto__ = (function frontend$components$cmdk$core$result_group_$_iter__54972(s__54973){
return (new cljs.core.LazySeq(null,(function (){
var s__54973__$1 = s__54973;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54973__$1);
if(temp__5825__auto__){
var s__54973__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54973__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54973__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54975 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54974 = (0);
while(true){
if((i__54974 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__54974);
var highlighted_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,highlighted_item);
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",(function (){var G__54976 = item;
if((G__54976 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(G__54976);
}
})());
var text = (function (){var G__54977 = item;
if((G__54977 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__54977);
}
})();
var source_block = (function (){var G__54978 = item;
if((G__54978 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(G__54978);
}
})();
var hls_page_QMARK_ = (function (){var and__5140__auto__ = page_QMARK_;
if(and__5140__auto__){
return frontend.extensions.pdf.utils.hls_file_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(source_block));
} else {
return and__5140__auto__;
}
})();
cljs.core.chunk_append(b__54975,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.render_result_list_item,state,new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(item),highlighted_QMARK_,mouse_mode_QMARK_,item,hls_page_QMARK_,text,input], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"item-index","item-index",411110314).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__55345 = (i__54974 + (1));
i__54974 = G__55345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54975),frontend$components$cmdk$core$result_group_$_iter__54972(cljs.core.chunk_rest(s__54973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54975),null);
}
} else {
var item = cljs.core.first(s__54973__$2);
var highlighted_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,highlighted_item);
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",(function (){var G__54979 = item;
if((G__54979 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(G__54979);
}
})());
var text = (function (){var G__54980 = item;
if((G__54980 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__54980);
}
})();
var source_block = (function (){var G__54981 = item;
if((G__54981 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(G__54981);
}
})();
var hls_page_QMARK_ = (function (){var and__5140__auto__ = page_QMARK_;
if(and__5140__auto__){
return frontend.extensions.pdf.utils.hls_file_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(source_block));
} else {
return and__5140__auto__;
}
})();
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.render_result_list_item,state,new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(item),highlighted_QMARK_,mouse_mode_QMARK_,item,hls_page_QMARK_,text,input], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"item-index","item-index",411110314).cljs$core$IFn$_invoke$arity$1(item)], null)),frontend$components$cmdk$core$result_group_$_iter__54972(cljs.core.rest(s__54973__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(visible_items);
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$result_group__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54982 = cljs.core.first(args__31746__auto__);
var G__54983 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54982,G__54983) : io.factorhouse.hsx.core.obj_get.call(null,G__54982,G__54983));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"result-group","result-group",-352802766,null),args__31746__auto__),frontend$components$cmdk$core$result_group,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$result_group = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55346__i = 0, G__55346__a = new Array(arguments.length -  0);
while (G__55346__i < G__55346__a.length) {G__55346__a[G__55346__i] = arguments[G__55346__i + 0]; ++G__55346__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55346__a,0,null);
} 
return frontend$components$cmdk$core$result_group__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$result_group.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$result_group.cljs$lang$applyTo = (function (arglist__55347){
var args__31746__auto__ = cljs.core.seq(arglist__55347);
return frontend$components$cmdk$core$result_group__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$result_group.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$result_group__delegate;
return frontend$components$cmdk$core$result_group;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54984 = comp__31745__auto__;
var G__54985 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54984,G__54985) : io.factorhouse.hsx.core.react_memo.call(null,G__54984,G__54985));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"result-group");

return comp__31745__auto__;
})();
frontend.components.cmdk.core.move_highlight = (function frontend$components$cmdk$core$move_highlight(state,n){
var items = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","all-items-cache","frontend.components.cmdk.core/all-items-cache",453921838).cljs$core$IFn$_invoke$arity$1(state));
var focus_source = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state));
var highlighted_item = (function (){var G__54986 = state;
var G__54986__$1 = (((G__54986 == null))?null:new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(G__54986));
if((G__54986__$1 == null)){
return null;
} else {
return cljs.core.deref(G__54986__$1);
}
})();
var old_item_idx = (function (){var G__54987 = highlighted_item;
if((G__54987 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"item-index","item-index",411110314).cljs$core$IFn$_invoke$arity$1(G__54987);
}
})();
var fallback_highlighted_QMARK_ = (((highlighted_item == null)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),focus_source)) && (cljs.core.seq(items)))));
var cur_item_idx = (cljs.core.truth_(highlighted_item)?(function (){var idx = new cljs.core.Keyword(null,"item-index","item-index",411110314).cljs$core$IFn$_invoke$arity$1(highlighted_item);
if((((!((idx == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highlighted_item,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(items,idx,null))))){
return idx;
} else {
return items.indexOf(highlighted_item);
}
})():((fallback_highlighted_QMARK_)?(0):null
));
var items_count = cljs.core.count(items);
if((items_count > (0))){
var base_idx = (((!((cur_item_idx == null))))?cur_item_idx:(((n > (0)))?(-1):(0)));
var raw_idx = (base_idx + n);
var next_item_idx = cljs.core.mod(raw_idx,items_count);
var next_highlighted_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(items,next_item_idx,null);
if(cljs.core.truth_(next_highlighted_item)){
var container = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","scroll-container-ref","frontend.components.cmdk.core/scroll-container-ref",1170500984).cljs$core$IFn$_invoke$arity$1(state));
var next_idx = new cljs.core.Keyword(null,"item-index","item-index",411110314).cljs$core$IFn$_invoke$arity$1(next_highlighted_item);
if(cljs.core.truth_((function (){var and__5140__auto__ = container;
if(cljs.core.truth_(and__5140__auto__)){
return next_idx;
} else {
return and__5140__auto__;
}
})())){
frontend.components.cmdk.core.sync_keyboard_highlight_BANG_(container,old_item_idx,next_idx);
} else {
}

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state),next_highlighted_item);

if(cljs.core.truth_((function (){var and__5140__auto__ = container;
if(cljs.core.truth_(and__5140__auto__)){
return next_idx;
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","pending-scroll-item-idx","frontend.components.cmdk.core/pending-scroll-item-idx",-1627184973).cljs$core$IFn$_invoke$arity$1(state),next_idx);

var temp__5825__auto__ = container.querySelector((""+"[data-item-index='"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_idx)+"']"));
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return frontend.components.cmdk.core.scroll_to_highlight_BANG_(state,el);
} else {
return null;
}
} else {
return null;
}
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","pending-scroll-item-idx","frontend.components.cmdk.core/pending-scroll-item-idx",-1627184973).cljs$core$IFn$_invoke$arity$1(state),null);

return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state),null);
}
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","pending-scroll-item-idx","frontend.components.cmdk.core/pending-scroll-item-idx",-1627184973).cljs$core$IFn$_invoke$arity$1(state),null);

return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state),null);
}
});
frontend.components.cmdk.core.refresh_results_BANG_ = (function frontend$components$cmdk$core$refresh_results_BANG_(state){
var refresh_key = frontend.components.cmdk.core.refresh_results_key(state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(refresh_key,cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","last-refresh-key","frontend.components.cmdk.core/last-refresh-key",1672599119).cljs$core$IFn$_invoke$arity$1(state)))){
return null;
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","last-refresh-key","frontend.components.cmdk.core/last-refresh-key",1672599119).cljs$core$IFn$_invoke$arity$1(state),refresh_key);

frontend.components.cmdk.core.persist_cmdk_query_state_BANG_(state);

return frontend.components.cmdk.core.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),state);
}
});
frontend.components.cmdk.core.search_debounce_ms = (300);
frontend.components.cmdk.core.make_search_debouncer = (function frontend$components$cmdk$core$make_search_debouncer(refresh_fn){
return frontend.util.cancelable_debounce(refresh_fn,frontend.components.cmdk.core.search_debounce_ms);
});
/**
 * Typing updates the input immediately. Search waits for the debounced
 *   refresh, except for an explicit refresh after composition ends.
 */
frontend.components.cmdk.core.search_on_input_event_QMARK_ = (function frontend$components$cmdk$core$search_on_input_event_QMARK_(refresh_QMARK_,composing_QMARK_,composing_end_QMARK_){
var and__5140__auto__ = refresh_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = cljs.core.not(composing_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return composing_end_QMARK_;
}
} else {
return and__5140__auto__;
}
});
frontend.components.cmdk.core.handle_input_change = (function frontend$components$cmdk$core$handle_input_change(var_args){
var G__54989 = arguments.length;
switch (G__54989) {
case 2:
return frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$2 = (function (state,e){
return frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$4(state,e,e.target.value,true);
}));

(frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$3 = (function (state,e,input){
return frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$4(state,e,input,true);
}));

(frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$4 = (function (state,e,input,refresh_QMARK_){
var composing_QMARK_ = frontend.util.native_event_is_composing_QMARK_(e);
var e_type = frontend.components.cmdk.core.goog$module$goog$object.getValueByKeys(e,"type");
var composing_end_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e_type,"compositionend");
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var input_ref = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input-ref","frontend.components.cmdk.core/input-ref",-581377366).cljs$core$IFn$_invoke$arity$1(state));
var container = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","scroll-container-ref","frontend.components.cmdk.core/scroll-container-ref",1170500984).cljs$core$IFn$_invoke$arity$1(state));
cljs.core.reset_BANG_(_BANG_input,input);

(input_ref.value = input);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087));

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state),null);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","pending-scroll-item-idx","frontend.components.cmdk.core/pending-scroll-item-idx",-1627184973).cljs$core$IFn$_invoke$arity$1(state),null);

if(cljs.core.truth_(container)){
(container.scrollTop = (0));
} else {
}

if(cljs.core.truth_(frontend.components.cmdk.core.search_on_input_event_QMARK_(refresh_QMARK_,composing_QMARK_,composing_end_QMARK_))){
return frontend.components.cmdk.core.refresh_results_BANG_(state);
} else {
return null;
}
}));

(frontend.components.cmdk.core.handle_input_change.cljs$lang$maxFixedArity = 4);

/**
 * Opens a link for the current item if a page or block. For pages, opens the
 *   first :url property
 */
frontend.components.cmdk.core.open_current_item_link = (function frontend$components$cmdk$core$open_current_item_link(state){
var item = (function (){var G__54990 = state;
if((G__54990 == null)){
return null;
} else {
return frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(G__54990);
}
})();
var repo = frontend.state.get_current_repo();
if(frontend.components.cmdk.core.page_item_QMARK_(item)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.cmdk.core._LT_page_uuid(repo,frontend.components.cmdk.core.get_highlighted_page_uuid_or_name(state))),(function (page_uuid){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_uuid)?frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,page_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children?","children?",-1199594108),false], 0)):null)),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto__)){
var page_id = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-first-url-property-value","thread-api/get-first-url-property-value",-884924679),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,page_id], 0));
} else {
return null;
}
})()),(function (link){
return promesa.protocols._promise((cljs.core.truth_(link)?window.open(link):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.error","no-page-link","cmdk.error/no-page-link",424455899)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671))));
}));
}));
}));
}));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(item))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(item))),(function (block_id){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children?","children?",-1199594108),false], 0));
}
})()),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.re_find(frontend.handler.editor.url_regex,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))),(function (link){
return promesa.protocols._promise((cljs.core.truth_(link)?window.open(link):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.error","no-block-link","cmdk.error/no-block-link",695356417)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671))));
}));
}));
}));
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.error","no-search-item-link","cmdk.error/no-search-item-link",-371169338)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));

}
}
});
frontend.components.cmdk.core.keydown_handler = (function frontend$components$cmdk$core$keydown_handler(state,e){
var meta_QMARK_ = frontend.util.meta_key_QMARK_(e);
var ctrl_QMARK_ = e.ctrlKey;
var keyname = e.key;
var enter_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"Enter");
var esc_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"Escape");
var composing_QMARK_ = frontend.util.native_event_is_composing_QMARK_(e);
var shift_QMARK_ = e.shiftKey;
var highlighted_group = (function (){var G__55000 = frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$1(state);
if((G__55000 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(G__55000);
}
})();
var show_less = (function (){
if(cljs.core.truth_(highlighted_group)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlighted_group,new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.Keyword(null,"less","less",-428869198));
} else {
return null;
}
});
var show_more = (function (){
if(cljs.core.truth_(highlighted_group)){
return frontend.components.cmdk.core.show_more_results_BANG_(state,highlighted_group);
} else {
return null;
}
});
var input = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state));
var as_keydown_QMARK_ = (function (){var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"ArrowDown");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = ctrl_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"n");
} else {
return and__5140__auto__;
}
}
})();
var as_keyup_QMARK_ = (function (){var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"ArrowUp");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = ctrl_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"p");
} else {
return and__5140__auto__;
}
}
})();
if(cljs.core.truth_((function (){var or__5142__auto__ = as_keydown_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return as_keyup_QMARK_;
}
})())){
frontend.util.stop(e);
} else {
}

if(cljs.core.truth_(frontend.components.cmdk.state.consume_open_search_sidebar_keydown_BANG_(e,(function (){
var repo = frontend.state.get_current_repo();
(logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)));

return frontend.state.sidebar_add_block_BANG_(repo,input,new cljs.core.Keyword(null,"search","search",1564939822));
})))){
return null;
} else {
if(cljs.core.truth_(as_keydown_QMARK_)){
if(cljs.core.truth_(meta_QMARK_)){
return show_more();
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087));

return frontend.components.cmdk.core.move_highlight(state,(1));
}
} else {
if(cljs.core.truth_(as_keyup_QMARK_)){
if(cljs.core.truth_(meta_QMARK_)){
return show_less();
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087));

return frontend.components.cmdk.core.move_highlight(state,(-1));
}
} else {
if(((enter_QMARK_) && (cljs.core.not(composing_QMARK_)))){
if(cljs.core.truth_(shift_QMARK_)){
(logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2("shift+return",true) : logseq.shui.ui.shortcut_press_BANG_.call(null,"shift+return",true));
} else {
}

if(cljs.core.truth_(shift_QMARK_)){
} else {
(logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2("return",true) : logseq.shui.ui.shortcut_press_BANG_.call(null,"return",true));
}

frontend.components.cmdk.core.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"default","default",-1987822328),state,e);

return frontend.util.stop_propagation(e);
} else {
if(esc_QMARK_){
var filter_SINGLEQUOTE_ = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state));
var action = frontend.components.cmdk.core.get_action();
var move_blocks_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),action);
if(((move_blocks_QMARK_) && (clojure.string.blank_QMARK_(input)))){
return frontend.state.close_dialog_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = filter_SINGLEQUOTE_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(move_blocks_QMARK_));
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(e);

return frontend.components.cmdk.core.clear_filter_and_refresh_BANG_(state);
} else {
if((!(clojure.string.blank_QMARK_(input)))){
frontend.util.stop(e);

return frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$3(state,null,"");
} else {
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)));

}
}
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = meta_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"c");
} else {
return and__5140__auto__;
}
})())){
var G__55017_55349 = (cljs.core.truth_(frontend.util.mac_QMARK_)?"cmd+c":"ctrl+c");
var G__55018_55350 = true;
(logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2(G__55017_55349,G__55018_55350) : logseq.shui.ui.shortcut_press_BANG_.call(null,G__55017_55349,G__55018_55350));

frontend.components.cmdk.core.copy_block_ref(state);

return frontend.util.stop_propagation(e);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = meta_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"o");
} else {
return and__5140__auto__;
}
})())){
return frontend.components.cmdk.core.open_current_item_link(state);
} else {
return null;

}
}
}
}
}
}
}
});
frontend.components.cmdk.core.keyup_handler = (function frontend$components$cmdk$core$keyup_handler(state,e){
var keyname = e.key;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"ArrowDown")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"ArrowUp")))){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","accel-start-ts","frontend.components.cmdk.core/accel-start-ts",525460766).cljs$core$IFn$_invoke$arity$1(state),null);
} else {
return null;
}
});
frontend.components.cmdk.core.input_placeholder = (function frontend$components$cmdk$core$input_placeholder(){
var action = frontend.components.cmdk.core.get_action();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999))){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.input","move-blocks-placeholder","cmdk.input/move-blocks-placeholder",877946418)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"new-page","new-page",1691458376))){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.input","type-page-name-placeholder","cmdk.input/type-page-name-placeholder",-1023545199)], 0));
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.input","default-placeholder","cmdk.input/default-placeholder",1193895246)], 0));

}
}
});
frontend.components.cmdk.core.input_row = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$input_row(state,all_items,opts){
var highlighted_item = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state));
var input = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state));
var input_ref = new cljs.core.Keyword("frontend.components.cmdk.core","input-ref","frontend.components.cmdk.core/input-ref",-581377366).cljs$core$IFn$_invoke$arity$1(state);
var vec__55025 = logseq.shui.hooks.use_memo((function (){
return frontend.components.cmdk.core.make_search_debouncer((function (){
return frontend.components.cmdk.core.refresh_results_BANG_(state);
}));
}),cljs.core.PersistentVector.EMPTY);
var debounced_refresh_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55025,(0),null);
var cancel_refresh_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55025,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","all-items-cache","frontend.components.cmdk.core/all-items-cache",453921838).cljs$core$IFn$_invoke$arity$1(state),cljs.core.vec(all_items));

if(cljs.core.truth_(highlighted_item)){
var idx = new cljs.core.Keyword(null,"item-index","item-index",411110314).cljs$core$IFn$_invoke$arity$1(highlighted_item);
var item_present_QMARK_ = (((((!((idx == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highlighted_item,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(all_items,idx,null))))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),all_items.indexOf(highlighted_item))));
if(item_present_QMARK_){
return null;
} else {
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state),null);
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [all_items], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var timeout_id = (cljs.core.truth_(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(opts))?null:setTimeout((function (){
var temp__5825__auto__ = cljs.core.deref(input_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
el.focus();

return el.select();
} else {
return null;
}
}),(0)));
frontend.components.cmdk.core.refresh_results_BANG_(state);

return (function (){
if(cljs.core.truth_(timeout_id)){
return clearTimeout(timeout_id);
} else {
return null;
}
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
return cancel_refresh_results;
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__cmdk-input-row","div.cp__cmdk-input-row",1287555592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-02 border-b border-1 border-gray-07"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.cp__cmdk-search-input","input.cp__cmdk-search-input",801439050),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-composition-end","on-composition-end",581757376),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742)],[(function (e){
frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$4(state,e,e.target.value,false);

return (debounced_refresh_results.cljs$core$IFn$_invoke$arity$0 ? debounced_refresh_results.cljs$core$IFn$_invoke$arity$0() : debounced_refresh_results.call(null));
}),frontend.components.cmdk.core.input_placeholder(),(function (p1__55020_SHARP_){
if(cljs.core.truth_(cljs.core.deref(input_ref))){
return null;
} else {
return cljs.core.reset_BANG_(input_ref,p1__55020_SHARP_);
}
}),"off",input,(function (_e){
var temp__5825__auto__ = new cljs.core.Keyword(null,"on-input-blur","on-input-blur",938716471).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var on_blur = temp__5825__auto__;
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(input) : on_blur.call(null,input));
} else {
return null;
}
}),"text-xl bg-transparent !border-none w-full !outline-none !shadow-none px-3 py-3 focus:!border-none focus:!outline-none focus:!shadow-none focus-visible:!outline-none focus-visible:!shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0",true,(function (e){
var new_value = e.target.value;
var composing_QMARK_ = frontend.util.native_event_is_composing_QMARK_(e);
frontend.components.cmdk.core.handle_input_change.cljs$core$IFn$_invoke$arity$4(state,e,new_value,false);

if(cljs.core.truth_(composing_QMARK_)){
} else {
(debounced_refresh_results.cljs$core$IFn$_invoke$arity$0 ? debounced_refresh_results.cljs$core$IFn$_invoke$arity$0() : debounced_refresh_results.call(null));
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"on-input-change","on-input-change",-1203383147).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var on_change = temp__5825__auto__;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
return null;
}
}),"off"])], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$input_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55047 = cljs.core.first(args__31746__auto__);
var G__55048 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55047,G__55048) : io.factorhouse.hsx.core.obj_get.call(null,G__55047,G__55048));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"input-row","input-row",-2044825679,null),args__31746__auto__),frontend$components$cmdk$core$input_row,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$input_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55360__i = 0, G__55360__a = new Array(arguments.length -  0);
while (G__55360__i < G__55360__a.length) {G__55360__a[G__55360__i] = arguments[G__55360__i + 0]; ++G__55360__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55360__a,0,null);
} 
return frontend$components$cmdk$core$input_row__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$input_row.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$input_row.cljs$lang$applyTo = (function (arglist__55361){
var args__31746__auto__ = cljs.core.seq(arglist__55361);
return frontend$components$cmdk$core$input_row__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$input_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$input_row__delegate;
return frontend$components$cmdk$core$input_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55052 = comp__31745__auto__;
var G__55053 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55052,G__55053) : io.factorhouse.hsx.core.react_memo.call(null,G__55052,G__55053));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"input-row");

return comp__31745__auto__;
})();
frontend.components.cmdk.core.tip_with_shortcut = (function frontend$components$cmdk$core$tip_with_shortcut(var_args){
var args__5882__auto__ = [];
var len__5876__auto___55362 = arguments.length;
var i__5877__auto___55363 = (0);
while(true){
if((i__5877__auto___55363 < len__5876__auto___55362)){
args__5882__auto__.push((arguments[i__5877__auto___55363]));

var G__55364 = (i__5877__auto___55363 + (1));
i__5877__auto___55363 = G__55364;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.components.cmdk.core.tip_with_shortcut.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.components.cmdk.core.tip_with_shortcut.cljs$core$IFn$_invoke$arity$variadic = (function (template,shortcut,p__55067){
var vec__55068 = p__55067;
var shortcut_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55068,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center.opacity-50.hover:opacity-100","div.flex.flex-row.gap-1.items-center.opacity-50.hover:opacity-100",815335268)], null),frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$2(template,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.ui.shortcut(shortcut,shortcut_opts)], null)));
}));

(frontend.components.cmdk.core.tip_with_shortcut.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.components.cmdk.core.tip_with_shortcut.cljs$lang$applyTo = (function (seq55057){
var G__55058 = cljs.core.first(seq55057);
var seq55057__$1 = cljs.core.next(seq55057);
var G__55059 = cljs.core.first(seq55057__$1);
var seq55057__$2 = cljs.core.next(seq55057__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55058,G__55059,seq55057__$2);
}));

frontend.components.cmdk.core.rand_tip = (function frontend$components$cmdk$core$rand_tip(){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-results","filter-results",344747585),new cljs.core.Keyword(null,"open-sidebar","open-sidebar",1707349707)], null));
});
frontend.components.cmdk.core.tip_content = (function frontend$components$cmdk$core$tip_content(tip_id){
var G__55071 = tip_id;
var G__55071__$1 = (((G__55071 instanceof cljs.core.Keyword))?G__55071.fqn:null);
switch (G__55071__$1) {
case "open-sidebar":
return frontend.components.cmdk.core.tip_with_shortcut.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.tip","open-sidebar","cmdk.tip/open-sidebar",57255785)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod","enter"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"combo","combo",-521653490)], null)], 0));

break;
default:
return frontend.components.cmdk.core.tip_with_shortcut(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.tip","filter-results","cmdk.tip/filter-results",784539103)], 0)),"/");

}
});
frontend.components.cmdk.core.tip = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$tip(state){
var vec__55074 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state));
var filter_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55074,(0),null);
var tip_id = logseq.shui.hooks.use_memo(frontend.components.cmdk.core.rand_tip,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(filter_SINGLEQUOTE_)){
return frontend.components.cmdk.core.tip_with_shortcut(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.tip","clear-filter","cmdk.tip/clear-filter",-952842915)], 0)),"esc");
} else {
return frontend.components.cmdk.core.tip_content(tip_id);

}
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$tip__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55079 = cljs.core.first(args__31746__auto__);
var G__55080 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55079,G__55080) : io.factorhouse.hsx.core.obj_get.call(null,G__55079,G__55080));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"tip","tip",-1432624909,null),args__31746__auto__),frontend$components$cmdk$core$tip,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$tip = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55366__i = 0, G__55366__a = new Array(arguments.length -  0);
while (G__55366__i < G__55366__a.length) {G__55366__a[G__55366__i] = arguments[G__55366__i + 0]; ++G__55366__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55366__a,0,null);
} 
return frontend$components$cmdk$core$tip__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$tip.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$tip.cljs$lang$applyTo = (function (arglist__55367){
var args__31746__auto__ = cljs.core.seq(arglist__55367);
return frontend$components$cmdk$core$tip__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$tip.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$tip__delegate;
return frontend$components$cmdk$core$tip;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55081 = comp__31745__auto__;
var G__55082 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55081,G__55082) : io.factorhouse.hsx.core.react_memo.call(null,G__55081,G__55082));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"tip");

return comp__31745__auto__;
})();
frontend.components.cmdk.core.hint_button = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$hint_button(text,shortcut,opts){
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint-button [&>span:first-child]:hover:opacity-100 opacity-40 hover:opacity-80",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null),opts], 0));
var children = (function (){var G__55095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60","span.opacity-60",-1080417386),text], null)], null);
if(cljs.core.truth_(cljs.core.not_empty(shortcut))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55095,(function (){var has_modifier_QMARK_ = (function (){var and__5140__auto__ = cljs.core.coll_QMARK_(shortcut);
if(and__5140__auto__){
return cljs.core.some((function (p1__55083_SHARP_){
var G__55111 = clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55083_SHARP_)));
var fexpr__55110 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["\u2318",null,"\u2303",null,"shift",null,"alt",null,"\u2325",null,"mod",null,"cmd",null,"ctrl",null], null), null);
return (fexpr__55110.cljs$core$IFn$_invoke$arity$1 ? fexpr__55110.cljs$core$IFn$_invoke$arity$1(G__55111) : fexpr__55110.call(null,G__55111));
}),shortcut);
} else {
return and__5140__auto__;
}
})();
var style = (cljs.core.truth_((function (){var and__5140__auto__ = (cljs.core.count(shortcut) > (1));
if(and__5140__auto__){
return has_modifier_QMARK_;
} else {
return and__5140__auto__;
}
})())?new cljs.core.Keyword(null,"combo","combo",-521653490):new cljs.core.Keyword(null,"auto","auto",-566279492));
return logseq.shui.ui.shortcut(shortcut,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"aria-hidden?","aria-hidden?",592108098),true], null));
})());
} else {
return G__55095;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.shui.ui.button,props,children);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$hint_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55120 = cljs.core.first(args__31746__auto__);
var G__55121 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55120,G__55121) : io.factorhouse.hsx.core.obj_get.call(null,G__55120,G__55121));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"hint-button","hint-button",1789406026,null),args__31746__auto__),frontend$components$cmdk$core$hint_button,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$hint_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55368__i = 0, G__55368__a = new Array(arguments.length -  0);
while (G__55368__i < G__55368__a.length) {G__55368__a[G__55368__i] = arguments[G__55368__i + 0]; ++G__55368__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55368__a,0,null);
} 
return frontend$components$cmdk$core$hint_button__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$hint_button.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$hint_button.cljs$lang$applyTo = (function (arglist__55369){
var args__31746__auto__ = cljs.core.seq(arglist__55369);
return frontend$components$cmdk$core$hint_button__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$hint_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$hint_button__delegate;
return frontend$components$cmdk$core$hint_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55126 = comp__31745__auto__;
var G__55127 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55126,G__55127) : io.factorhouse.hsx.core.react_memo.call(null,G__55126,G__55127));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"hint-button");

return comp__31745__auto__;
})();
frontend.components.cmdk.core.hints = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$hints(state,fallback_item){
var action = frontend.components.cmdk.core.state__GT_action.cljs$core$IFn$_invoke$arity$2(state,fallback_item);
var button_fn = (function() { 
var G__55370__delegate = function (text,shortcut,p__55129){
var map__55130 = p__55129;
var map__55130__$1 = cljs.core.__destructure_map(map__55130);
var opts = map__55130__$1;
return frontend.components.cmdk.core.hint_button(text,shortcut,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__55128_SHARP_){
return frontend.components.cmdk.core.handle_action.cljs$core$IFn$_invoke$arity$3(action,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"opts","opts",155075701),opts),p1__55128_SHARP_);
}),new cljs.core.Keyword(null,"muted","muted",1275109029),true], null));
};
var G__55370 = function (text,shortcut,var_args){
var p__55129 = null;
if (arguments.length > 2) {
var G__55371__i = 0, G__55371__a = new Array(arguments.length -  2);
while (G__55371__i < G__55371__a.length) {G__55371__a[G__55371__i] = arguments[G__55371__i + 2]; ++G__55371__i;}
  p__55129 = new cljs.core.IndexedSeq(G__55371__a,0,null);
} 
return G__55370__delegate.call(this,text,shortcut,p__55129);};
G__55370.cljs$lang$maxFixedArity = 2;
G__55370.cljs$lang$applyTo = (function (arglist__55372){
var text = cljs.core.first(arglist__55372);
arglist__55372 = cljs.core.next(arglist__55372);
var shortcut = cljs.core.first(arglist__55372);
var p__55129 = cljs.core.rest(arglist__55372);
return G__55370__delegate(text,shortcut,p__55129);
});
G__55370.cljs$core$IFn$_invoke$arity$variadic = G__55370__delegate;
return G__55370;
})()
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hints","div.hints",1438246636),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.leading-6","div.text-sm.leading-6",1197853614),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.text-gray-12","span.font-medium.text-gray-12",-1807533703),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.tip","label","cmdk.tip/label",-911790642)], 0))], null),frontend.components.cmdk.core.tip(state)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gap-2.hidden.md:flex","div.gap-2.hidden.md:flex",1635368383),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(-6)], null)], null),(function (){var G__55131 = action;
var G__55131__$1 = (((G__55131 instanceof cljs.core.Keyword))?G__55131.fqn:null);
switch (G__55131__$1) {
case "open":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),button_fn(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.action","open","cmdk.action/open",2093423117)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null)),button_fn(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.action","open-in-sidebar","cmdk.action/open-in-sidebar",167445098)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shift","return"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-sidebar?","open-sidebar?",1933561166),true], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(frontend.components.cmdk.core.state__GT_highlighted_item.cljs$core$IFn$_invoke$arity$2(state,fallback_item)))?button_fn(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.action","copy-ref","cmdk.action/copy-ref",544031135)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cmd","c"], null)):null)], null);

break;
case "search":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),button_fn(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.action","search","cmdk.action/search",1672011153)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null))], null);

break;
case "trigger":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),button_fn(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.action","trigger","cmdk.action/trigger",-334938000)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null))], null);

break;
case "create":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),button_fn(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.action","create","cmdk.action/create",475219573)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null))], null);

break;
case "filter":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),button_fn(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.action","filter","cmdk.action/filter",-309006011)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null))], null);

break;
case "theme":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),button_fn(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.action","apply-theme","cmdk.action/apply-theme",1757171436)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null))], null);

break;
default:
return null;

}
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$hints__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55134 = cljs.core.first(args__31746__auto__);
var G__55135 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55134,G__55135) : io.factorhouse.hsx.core.obj_get.call(null,G__55134,G__55135));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"hints","hints",649418376,null),args__31746__auto__),frontend$components$cmdk$core$hints,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$hints = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55374__i = 0, G__55374__a = new Array(arguments.length -  0);
while (G__55374__i < G__55374__a.length) {G__55374__a[G__55374__i] = arguments[G__55374__i + 0]; ++G__55374__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55374__a,0,null);
} 
return frontend$components$cmdk$core$hints__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$hints.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$hints.cljs$lang$applyTo = (function (arglist__55375){
var args__31746__auto__ = cljs.core.seq(arglist__55375);
return frontend$components$cmdk$core$hints__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$hints.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$hints__delegate;
return frontend$components$cmdk$core$hints;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55136 = comp__31745__auto__;
var G__55137 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55136,G__55137) : io.factorhouse.hsx.core.react_memo.call(null,G__55136,G__55137));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"hints");

return comp__31745__auto__;
})();
frontend.components.cmdk.core.search_only = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$search_only(state,group_name){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cmdk.filter","only-label","cmdk.filter/only-label",1264362642)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),group_name], null),(function (){var G__55138 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 scale-75",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.cmdk.core.clear_filter_and_refresh_BANG_(state);
})], null);
var G__55139 = logseq.shui.ui.tabler_icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__55138,G__55139) : logseq.shui.ui.button.call(null,G__55138,G__55139));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$search_only__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55140 = cljs.core.first(args__31746__auto__);
var G__55141 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55140,G__55141) : io.factorhouse.hsx.core.obj_get.call(null,G__55140,G__55141));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search-only","search-only",894645848,null),args__31746__auto__),frontend$components$cmdk$core$search_only,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$search_only = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55377__i = 0, G__55377__a = new Array(arguments.length -  0);
while (G__55377__i < G__55377__a.length) {G__55377__a[G__55377__i] = arguments[G__55377__i + 0]; ++G__55377__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55377__a,0,null);
} 
return frontend$components$cmdk$core$search_only__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$search_only.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$search_only.cljs$lang$applyTo = (function (arglist__55378){
var args__31746__auto__ = cljs.core.seq(arglist__55378);
return frontend$components$cmdk$core$search_only__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$search_only.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$search_only__delegate;
return frontend$components$cmdk$core$search_only;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55142 = comp__31745__auto__;
var G__55143 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55142,G__55143) : io.factorhouse.hsx.core.react_memo.call(null,G__55142,G__55143));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search-only");

return comp__31745__auto__;
})();
/**
 * Initialize cmdk component state atoms.
 */
frontend.components.cmdk.core.cmdk_init_state = (function frontend$components$cmdk$core$cmdk_init_state(opts){
cljs.core.reset_BANG_(frontend.components.cmdk.core._BANG_commands_cache,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),null,new cljs.core.Keyword(null,"commands","commands",161008658),null], null));

var raw_search_mode = frontend.state.get_state(new cljs.core.Keyword("search","mode","search/mode",1628111395));
var search_mode = (function (){var or__5142__auto__ = raw_search_mode;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})();
var search_args = frontend.state.get_state(new cljs.core.Keyword("search","args","search/args",-462145864));
var map__55146 = frontend.components.cmdk.state.build_initial_cmdk_search(opts,search_mode,search_args,frontend.state.get_current_repo());
var map__55146__$1 = cljs.core.__destructure_map(map__55146);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55146__$1,new cljs.core.Keyword(null,"input","input",556931961));
var filter_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55146__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100),new cljs.core.Keyword("frontend.components.cmdk.core","ref","frontend.components.cmdk.core/ref",-1767389561),new cljs.core.Keyword("frontend.components.cmdk.core","input-ref","frontend.components.cmdk.core/input-ref",-581377366),new cljs.core.Keyword("frontend.components.cmdk.core","all-items-cache","frontend.components.cmdk.core/all-items-cache",453921838),new cljs.core.Keyword("frontend.components.cmdk.core","last-refresh-key","frontend.components.cmdk.core/last-refresh-key",1672599119),new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674),new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674),new cljs.core.Keyword("frontend.components.cmdk.core","pending-scroll-item-idx","frontend.components.cmdk.core/pending-scroll-item-idx",-1627184973),new cljs.core.Keyword("frontend.components.cmdk.core","scroll-container-ref","frontend.components.cmdk.core/scroll-container-ref",1170500984),new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815),new cljs.core.Keyword("frontend.components.cmdk.core","accel-start-ts","frontend.components.cmdk.core/accel-start-ts",525460766),new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969)],[cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keyboard","keyboard",-617357087)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(filter_group),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(input),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.components.cmdk.core.default_results)]);
});
/**
 * Clean up cmdk component: persist state, clear search mode.
 */
frontend.components.cmdk.core.cmdk_will_unmount = (function frontend$components$cmdk$core$cmdk_will_unmount(state){
frontend.components.cmdk.core.persist_cmdk_query_state_BANG_(state);

frontend.state.set_state_BANG_(new cljs.core.Keyword("search","mode","search/mode",1628111395),null);

frontend.state.set_state_BANG_(new cljs.core.Keyword("search","args","search/args",-462145864),null);

return state;
});
frontend.components.cmdk.core.cmdk = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$cmdk(p__55153){
var map__55154 = p__55153;
var map__55154__$1 = cljs.core.__destructure_map(map__55154);
var opts = map__55154__$1;
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55154__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var state = logseq.shui.hooks.use_memo((function (){
return frontend.components.cmdk.core.cmdk_init_state(opts);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_input = new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state);
var search_mode = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","mode","search/mode",1628111395)], null));
var search_args = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","args","search/args",-462145864)], null));
var vec__55155 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state));
var filter_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55155,(0),null);
var vec__55158 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state));
var _results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55158,(0),null);
var vec__55161 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state));
var _highlighted_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55161,(0),null);
var vec__55164 = logseq.shui.hooks.use_atom(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state));
var _focus_source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55164,(0),null);
var group_filter = (function (){var or__5142__auto__ = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"global","global",93595047),search_mode)) && (cljs.core.not(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(opts)))))?search_mode:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(filter_SINGLEQUOTE_);
}
})();
var results_ordered = frontend.components.cmdk.core.state__GT_results_ordered(state);
var all_items = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.last,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results_ordered], 0));
var first_item = cljs.core.first(all_items);
logseq.shui.hooks.use_effect_BANG_((function (){
if((search_mode == null)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","mode","search/mode",1628111395),new cljs.core.Keyword(null,"global","global",93595047));
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
var map__55167 = frontend.components.cmdk.state.build_initial_cmdk_search(opts,(function (){var or__5142__auto__ = search_mode;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})(),search_args,frontend.state.get_current_repo());
var map__55167__$1 = cljs.core.__destructure_map(map__55167);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55167__$1,new cljs.core.Keyword(null,"input","input",556931961));
var filter_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55167__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","input","frontend.components.cmdk.core/input",-1679319815).cljs$core$IFn$_invoke$arity$1(state),input);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","filter","frontend.components.cmdk.core/filter",279770674).cljs$core$IFn$_invoke$arity$1(state),filter_group);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","highlighted-item","frontend.components.cmdk.core/highlighted-item",-2037503100).cljs$core$IFn$_invoke$arity$1(state),null);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","focus-source","frontend.components.cmdk.core/focus-source",1365482674).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087));

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","results","frontend.components.cmdk.core/results",-2086115969).cljs$core$IFn$_invoke$arity$1(state),frontend.components.cmdk.core.default_results);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","last-refresh-key","frontend.components.cmdk.core/last-refresh-key",1672599119).cljs$core$IFn$_invoke$arity$1(state),null);

var temp__5825__auto___55381 = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","input-ref","frontend.components.cmdk.core/input-ref",-581377366).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5825__auto___55381)){
var input_ref_55382 = temp__5825__auto___55381;
(input_ref_55382.value = input);
} else {
}

return frontend.components.cmdk.core.refresh_results_BANG_(state);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [search_mode,search_args], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(sidebar_QMARK_)){
} else {
frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$0();
}

return (function (){
frontend.components.cmdk.core.cmdk_will_unmount(state);

if(cljs.core.truth_(sidebar_QMARK_)){
return null;
} else {
return frontend.modules.shortcut.core.listen_all_BANG_.cljs$core$IFn$_invoke$arity$0();
}
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","ref","frontend.components.cmdk.core/ref",-1767389561).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5825__auto__)){
var ref = temp__5825__auto__;
var keydown_fn = (function (p1__55149_SHARP_){
return frontend.components.cmdk.core.keydown_handler(state,p1__55149_SHARP_);
});
var keyup_fn = (function (p1__55150_SHARP_){
return frontend.components.cmdk.core.keyup_handler(state,p1__55150_SHARP_);
});
ref.addEventListener("keydown",keydown_fn);

window.addEventListener("keyup",keyup_fn);

return (function (){
ref.removeEventListener("keydown",keydown_fn);

return window.removeEventListener("keyup",keyup_fn);
});
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__cmdk","div.cp__cmdk",-1889913835),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__55151_SHARP_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk.core","ref","frontend.components.cmdk.core/ref",-1767389561).cljs$core$IFn$_invoke$arity$1(state)))){
return null;
} else {
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk.core","ref","frontend.components.cmdk.core/ref",-1767389561).cljs$core$IFn$_invoke$arity$1(state),p1__55151_SHARP_);
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__55168 = "w-full h-full relative flex flex-col justify-start";
if(cljs.core.not(sidebar_QMARK_)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55168)+" rounded-lg");
} else {
return G__55168;
}
})()], null),frontend.components.cmdk.core.input_row(state,all_items,opts),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__55169 = "w-full flex-1 overflow-y-auto min-h-[65dvh] max-h-[65dvh]";
if(cljs.core.not(sidebar_QMARK_)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55169)+" pb-14");
} else {
return G__55169;
}
})(),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__55152_SHARP_){
var _STAR_ref = new cljs.core.Keyword("frontend.components.cmdk.core","scroll-container-ref","frontend.components.cmdk.core/scroll-container-ref",1170500984).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.deref(_STAR_ref))){
return null;
} else {
return cljs.core.reset_BANG_(_STAR_ref,p1__55152_SHARP_);
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--lx-gray-02)",new cljs.core.Keyword(null,"scroll-padding-block","scroll-padding-block",1047366889),frontend.components.cmdk.core.scroll_padding], null)], null),(cljs.core.truth_(group_filter)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.px-3.py-1.opacity-70.text-sm","div.flex.flex-col.px-3.py-1.opacity-70.text-sm",640103870),frontend.components.cmdk.core.search_only(state,frontend.components.cmdk.core.group_label(group_filter))], null):null),(function (){var items = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__55170){
var vec__55171 = p__55170;
var _group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55171,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55171,(1),null);
var group_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55171,(2),null);
var _group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55171,(3),null);
var and__5140__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),group_count);
if(and__5140__auto__){
if(cljs.core.not(group_filter)){
return true;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_filter,group_key)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_filter,new cljs.core.Keyword(null,"nodes","nodes",-2099585805))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_key,new cljs.core.Keyword(null,"current-page","current-page",-101294180))))) || (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create","create",-1301499256),null], null), null),group_filter)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_key,new cljs.core.Keyword(null,"create","create",-1301499256))))))));
}
} else {
return and__5140__auto__;
}
}),results_ordered);
if(cljs.core.seq(items)){
var iter__5628__auto__ = (function frontend$components$cmdk$core$cmdk_$_iter__55176(s__55177){
return (new cljs.core.LazySeq(null,(function (){
var s__55177__$1 = s__55177;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55177__$1);
if(temp__5825__auto__){
var s__55177__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55177__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55177__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55179 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55178 = (0);
while(true){
if((i__55178 < size__5627__auto__)){
var vec__55180 = cljs.core._nth(c__5626__auto__,i__55178);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55180,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55180,(1),null);
var _group_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55180,(2),null);
var group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55180,(3),null);
cljs.core.chunk_append(b__55179,(function (){var title = clojure.string.capitalize(group_name);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.result_group,state,title,group_key,group_items,first_item,sidebar_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"cmdk-group-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(group_key)))], null));
})());

var G__55385 = (i__55178 + (1));
i__55178 = G__55385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55179),frontend$components$cmdk$core$cmdk_$_iter__55176(cljs.core.chunk_rest(s__55177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55179),null);
}
} else {
var vec__55183 = cljs.core.first(s__55177__$2);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55183,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55183,(1),null);
var _group_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55183,(2),null);
var group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55183,(3),null);
return cljs.core.cons((function (){var title = clojure.string.capitalize(group_name);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.result_group,state,title,group_key,group_items,first_item,sidebar_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"cmdk-group-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(group_key)))], null));
})(),frontend$components$cmdk$core$cmdk_$_iter__55176(cljs.core.rest(s__55177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(items);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.p-4.opacity-50","div.flex.flex-col.p-4.opacity-50",632905554),((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_input)))?null:frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","no-result","search/no-result",-1350101243)], 0)))], null);
}
})()], null),(cljs.core.truth_(sidebar_QMARK_)?null:frontend.components.cmdk.core.hints(state,first_item))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$cmdk__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55186 = cljs.core.first(args__31746__auto__);
var G__55187 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55186,G__55187) : io.factorhouse.hsx.core.obj_get.call(null,G__55186,G__55187));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"cmdk","cmdk",-986893824,null),args__31746__auto__),frontend$components$cmdk$core$cmdk,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$cmdk = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55386__i = 0, G__55386__a = new Array(arguments.length -  0);
while (G__55386__i < G__55386__a.length) {G__55386__a[G__55386__i] = arguments[G__55386__i + 0]; ++G__55386__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55386__a,0,null);
} 
return frontend$components$cmdk$core$cmdk__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$cmdk.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$cmdk.cljs$lang$applyTo = (function (arglist__55387){
var args__31746__auto__ = cljs.core.seq(arglist__55387);
return frontend$components$cmdk$core$cmdk__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$cmdk.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$cmdk__delegate;
return frontend$components$cmdk$core$cmdk;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55188 = comp__31745__auto__;
var G__55189 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55188,G__55189) : io.factorhouse.hsx.core.react_memo.call(null,G__55188,G__55189));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"cmdk");

return comp__31745__auto__;
})();
frontend.components.cmdk.core.cmdk_modal = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$cmdk_modal(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cp__cmdk__modal rounded-lg w-[90dvw] max-w-4xl relative",new cljs.core.Keyword(null,"data-keep-selection","data-keep-selection",-2035432191),true], null),frontend.components.cmdk.core.cmdk(props)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$cmdk_modal__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55190 = cljs.core.first(args__31746__auto__);
var G__55191 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55190,G__55191) : io.factorhouse.hsx.core.obj_get.call(null,G__55190,G__55191));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"cmdk-modal","cmdk-modal",226636285,null),args__31746__auto__),frontend$components$cmdk$core$cmdk_modal,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$cmdk_modal = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55388__i = 0, G__55388__a = new Array(arguments.length -  0);
while (G__55388__i < G__55388__a.length) {G__55388__a[G__55388__i] = arguments[G__55388__i + 0]; ++G__55388__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55388__a,0,null);
} 
return frontend$components$cmdk$core$cmdk_modal__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$cmdk_modal.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$cmdk_modal.cljs$lang$applyTo = (function (arglist__55389){
var args__31746__auto__ = cljs.core.seq(arglist__55389);
return frontend$components$cmdk$core$cmdk_modal__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$cmdk_modal.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$cmdk_modal__delegate;
return frontend$components$cmdk$core$cmdk_modal;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55192 = comp__31745__auto__;
var G__55193 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55192,G__55193) : io.factorhouse.hsx.core.react_memo.call(null,G__55192,G__55193));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"cmdk-modal");

return comp__31745__auto__;
})();
frontend.components.cmdk.core.cmdk_block = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$core$cmdk_block(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cp__cmdk__block rounded-md"], null),frontend.components.cmdk.core.cmdk(props)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$core$cmdk_block__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55194 = cljs.core.first(args__31746__auto__);
var G__55195 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55194,G__55195) : io.factorhouse.hsx.core.obj_get.call(null,G__55194,G__55195));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"cmdk-block","cmdk-block",-187347396,null),args__31746__auto__),frontend$components$cmdk$core$cmdk_block,args__31746__auto__,null);
}
};
var frontend$components$cmdk$core$cmdk_block = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55390__i = 0, G__55390__a = new Array(arguments.length -  0);
while (G__55390__i < G__55390__a.length) {G__55390__a[G__55390__i] = arguments[G__55390__i + 0]; ++G__55390__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55390__a,0,null);
} 
return frontend$components$cmdk$core$cmdk_block__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$core$cmdk_block.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$core$cmdk_block.cljs$lang$applyTo = (function (arglist__55391){
var args__31746__auto__ = cljs.core.seq(arglist__55391);
return frontend$components$cmdk$core$cmdk_block__delegate(args__31746__auto__);
});
frontend$components$cmdk$core$cmdk_block.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$core$cmdk_block__delegate;
return frontend$components$cmdk$core$cmdk_block;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55198 = comp__31745__auto__;
var G__55199 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55198,G__55199) : io.factorhouse.hsx.core.react_memo.call(null,G__55198,G__55199));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"cmdk-block");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.cmdk.core.js.map
