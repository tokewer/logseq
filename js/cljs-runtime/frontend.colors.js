goog.provide('frontend.colors');
frontend.colors.color_list = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tomato","tomato",1086708254),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"crimson","crimson",-1192060857),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"plum","plum",2022177528),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"grass","grass",1213050421),new cljs.core.Keyword(null,"orange","orange",73816386)], null);
frontend.colors.variable = (function frontend$colors$variable(var_args){
var G__94826 = arguments.length;
switch (G__94826) {
case 2:
return frontend.colors.variable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.colors.variable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.colors.variable.cljs$core$IFn$_invoke$arity$2 = (function (color,value){
return frontend.colors.variable.cljs$core$IFn$_invoke$arity$3(color,value,false);
}));

(frontend.colors.variable.cljs$core$IFn$_invoke$arity$3 = (function (color,value,alpha_QMARK_){
return (""+"var(--rx-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__94828 = value;
if(cljs.core.truth_(cljs.core.keyword_QMARK_)){
return cljs.core.name(G__94828);
} else {
return G__94828;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(alpha_QMARK_)?"-alpha":""))+")");
}));

(frontend.colors.variable.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=frontend.colors.js.map
