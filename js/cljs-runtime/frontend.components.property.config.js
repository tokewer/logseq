goog.provide('frontend.components.property.config');
/**
 * Update commands after task status and priority's closed values has been changed
 */
frontend.components.property.config.re_init_commands_BANG_ = (function frontend$components$property$config$re_init_commands_BANG_(property){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),null,new cljs.core.Keyword("logseq.property","priority","logseq.property/priority",239228411),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("init","commands","init/commands",315507426)], null));
} else {
return null;
}
});
frontend.components.property.config.__GT_block_lookup_id = (function frontend$components$property$config$__GT_block_lookup_id(block){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
});
frontend.components.property.config._LT_worker_transact_BANG_ = (function frontend$components$property$config$_LT_worker_transact_BANG_(tx_data,tx_meta){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),tx_data,tx_meta,null], 0));
});
/**
 * Create new closed value and returns its block UUID.
 */
frontend.components.property.config._LT_upsert_closed_value_BANG_ = (function frontend$components$property$config$_LT_upsert_closed_value_BANG_(property,item){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.upsert_closed_value_BANG_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),item)),(function (___21901__auto__){
return promesa.protocols._promise(frontend.components.property.config.re_init_commands_BANG_(property));
}));
}));
});
frontend.components.property.config.__GT_closed_choice_scope_opts = (function frontend$components$property$config$__GT_closed_choice_scope_opts(p__45493){
var map__45494 = p__45493;
var map__45494__$1 = cljs.core.__destructure_map(map__45494);
var owner_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45494__$1,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933));
var scoped_to_owner_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45494__$1,new cljs.core.Keyword(null,"scoped-to-owner?","scoped-to-owner?",1725099729));
if(cljs.core.truth_((function (){var and__5140__auto__ = scoped_to_owner_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.entity.class_QMARK_(owner_block);
if(cljs.core.truth_(and__5140__auto____$1)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(owner_block);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-class-id","scoped-class-id",-1447241281),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(owner_block)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
frontend.components.property.config.__GT_remove_choice_scope_for_owner_tag_tx_data = (function frontend$components$property$config$__GT_remove_choice_scope_for_owner_tag_tx_data(p__45495){
var map__45496 = p__45495;
var map__45496__$1 = cljs.core.__destructure_map(map__45496);
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45496__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var owner_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45496__$1,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933));
var choice_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice);
var owner_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(owner_block);
var scoped_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219).cljs$core$IFn$_invoke$arity$1(choice)));
if(cljs.core.truth_((function (){var and__5140__auto__ = choice_id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = owner_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.contains_QMARK_(scoped_ids,owner_id);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),choice_id,new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219),owner_id], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
frontend.components.property.config.__GT_use_choice_in_owner_tag_tx_data = (function frontend$components$property$config$__GT_use_choice_in_owner_tag_tx_data(p__45497){
var map__45498 = p__45497;
var map__45498__$1 = cljs.core.__destructure_map(map__45498);
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45498__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var owner_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45498__$1,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933));
var choice_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice);
var owner_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(owner_block);
var scoped_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219).cljs$core$IFn$_invoke$arity$1(choice)));
if(cljs.core.truth_((function (){var and__5140__auto__ = choice_id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = owner_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.seq(scoped_ids)) && ((!(cljs.core.contains_QMARK_(scoped_ids,owner_id)))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),choice_id,new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219),owner_id], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
frontend.components.property.config.choice_scoped_from_other_tags_QMARK_ = (function frontend$components$property$config$choice_scoped_from_other_tags_QMARK_(p__45499){
var map__45500 = p__45499;
var map__45500__$1 = cljs.core.__destructure_map(map__45500);
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45500__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var owner_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45500__$1,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933));
var owner_class_QMARK_ = frontend.util.entity.class_QMARK_(owner_block);
var owner_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(owner_block);
var scope_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219).cljs$core$IFn$_invoke$arity$1(choice)));
return cljs.core.boolean$((function (){var and__5140__auto__ = owner_class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = owner_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.seq(scope_ids)) && ((!(cljs.core.contains_QMARK_(scope_ids,owner_id)))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
frontend.components.property.config.loop_focusable_elements_BANG_ = (function frontend$components$property$config$loop_focusable_elements_BANG_(var_args){
var G__45502 = arguments.length;
switch (G__45502) {
case 1:
return frontend.components.property.config.loop_focusable_elements_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.property.config.loop_focusable_elements_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.property.config.loop_focusable_elements_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (cnt){
return frontend.components.property.config.loop_focusable_elements_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,".ui__button:not([disabled]), .ui__input, .ui__textarea");
}));

(frontend.components.property.config.loop_focusable_elements_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cnt,selectors){
var temp__5825__auto__ = (function (){var G__45503 = cnt;
var G__45503__$1 = (((G__45503 == null))?null:G__45503.querySelectorAll(selectors));
if((G__45503__$1 == null)){
return null;
} else {
return cljs.core.seq(G__45503__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var els = temp__5825__auto__;
var active = document.activeElement;
var current_idx = els.indexOf(active);
var total_len = cljs.core.count(els);
var to_idx = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),current_idx)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_len,(current_idx + (1))))))?(0):(current_idx + (1))
);
var G__45504 = els;
var G__45504__$1 = (((G__45504 == null))?null:cljs.core.nth.cljs$core$IFn$_invoke$arity$2(G__45504,to_idx));
if((G__45504__$1 == null)){
return null;
} else {
return G__45504__$1.focus();
}
} else {
return null;
}
}));

(frontend.components.property.config.loop_focusable_elements_BANG_.cljs$lang$maxFixedArity = 2);

frontend.components.property.config.set_property_description_BANG_ = (function frontend$components$property$config$set_property_description_BANG_(property,description){
var temp__5823__auto__ = new cljs.core.Keyword("logseq.property","description","logseq.property/description",-336236200).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(temp__5823__auto__)){
var ent = temp__5823__auto__;
return frontend.components.property.config._LT_worker_transact_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.core.block_with_updated_at(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ent),new cljs.core.Keyword("block","title","block/title",710445684),description], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
} else {
if(clojure.string.blank_QMARK_(description)){
return null;
} else {
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","description","logseq.property/description",-336236200),description);
}
}
});
frontend.components.property.config._LT_create_class_if_not_exists_BANG_ = (function frontend$components$property$config$_LT_create_class_if_not_exists_BANG_(value){
if(typeof value === 'string'){
var page_name = clojure.string.trim(value);
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.page._LT_create_class_BANG_(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null))),(function (page){
return promesa.protocols._promise(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page));
}));
}));
}
} else {
return null;
}
});
frontend.components.property.config.class_select = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$class_select(property,p__45506){
var map__45507 = p__45506;
var map__45507__$1 = cljs.core.__destructure_map(map__45507);
var multiple_choices_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45507__$1,new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),true);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45507__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var default_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45507__$1,new cljs.core.Keyword(null,"default-open?","default-open?",-2082763144));
var no_class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45507__$1,new cljs.core.Keyword(null,"no-class?","no-class?",-42395826));
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45507__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var repo = frontend.state.get_current_repo();
var vec__45508 = logseq.shui.hooks.use_state(cljs.core.PersistentVector.EMPTY);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45508,(0),null);
var set_classes_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45508,(1),null);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(repo)){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_all_classes(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"except-root-class?","except-root-class?",-345353595),true,new cljs.core.Keyword(null,"except-private-tags?","except-private-tags?",1020635160),false], null))),(function (classes__$1){
return promesa.protocols._promise((set_classes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_classes_BANG_.cljs$core$IFn$_invoke$arity$1(classes__$1) : set_classes_BANG_.call(null,classes__$1)));
}));
}));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo], null));
var schema_classes = new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486).cljs$core$IFn$_invoke$arity$1(property);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.col-span-3","div.flex.flex-1.col-span-3",370041168),(function (){var content_fn = (function (p__45511){
var map__45512 = p__45511;
var map__45512__$1 = cljs.core.__destructure_map(map__45512);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45512__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var toggle_fn = (function (){
if(cljs.core.fn_QMARK_(on_hide)){
(on_hide.cljs$core$IFn$_invoke$arity$0 ? on_hide.cljs$core$IFn$_invoke$arity$0() : on_hide.call(null));
} else {
}

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
});
var options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (class$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(class$),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class$)], null);
}),classes);
var options__$1 = (cljs.core.truth_(no_class_QMARK_)?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","skip-choosing-tag","property/skip-choosing-tag",646529366)], 0)),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"no-tag","no-tag",-2051082798)], null),options):options);
var opts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),new cljs.core.Keyword(null,"dropdown?","dropdown?",-1027769147),new cljs.core.Keyword(null,"show-new-when-not-exact-match?","show-new-when-not-exact-match?",1510536201),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),new cljs.core.Keyword(null,"extract-chosen-fn","extract-chosen-fn",1058364622),new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317)],[(function (value,select_QMARK_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"no-tag","no-tag",-2051082798))){
return toggle_fn();
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.config._LT_create_class_if_not_exists_BANG_(value)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = result;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return value;
}
})()),(function (class_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(select_QMARK_)?new cljs.core.Keyword("db","add","db/add",235286841):new cljs.core.Keyword("db","retract","db/retract",-1549825231)),frontend.components.property.config.__GT_block_lookup_id(property),new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),class_uuid], null)], null)], null)),(function (tx_data){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.config._LT_worker_transact_BANG_(tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"update-property","update-property",348681633)], null))),(function (___$1){
return promesa.protocols._promise((cljs.core.truth_(multiple_choices_QMARK_)?null:toggle_fn()));
}));
}));
}));
}));
}));
}
}),false,true,new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(multiple_choices_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","choose-tags","property/choose-tags",-2127915149)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","choose-tag","property/choose-tag",1549945262)], 0))),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__45513 = frontend.util.ekey(e);
switch (G__45513) {
case "Escape":
frontend.util.stop(e);

return toggle_fn();

break;
default:
return null;

}
})], null),false,multiple_choices_QMARK_,options__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),schema_classes)]);
return frontend.components.select.select(opts);
});
if(cljs.core.truth_(default_open_QMARK_)){
return content_fn(null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.cursor-pointer","div.flex.flex-1.cursor-pointer",-774426367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(disabled_QMARK_)?cljs.core.constantly(null):(function (p1__45505_SHARP_){
var G__45514 = p1__45505_SHARP_.target;
var G__45515 = content_fn;
var G__45516 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-node-tags-sub-pane","ls-node-tags-sub-pane",-1694940447)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45514,G__45515,G__45516) : logseq.shui.ui.popup_show_BANG_.call(null,G__45514,G__45515,G__45516));
}))], null),((cljs.core.seq(schema_classes))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-row.items-center.flex-wrap.gap-2","div.flex.flex-1.flex-row.items-center.flex-wrap.gap-2",-862167387),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-[300px]"], null),(function (){var iter__5628__auto__ = (function frontend$components$property$config$class_select_$_iter__45517(s__45518){
return (new cljs.core.LazySeq(null,(function (){
var s__45518__$1 = s__45518;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45518__$1);
if(temp__5825__auto__){
var s__45518__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45518__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45518__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45520 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45519 = (0);
while(true){
if((i__45519 < size__5627__auto__)){
var class$ = cljs.core._nth(c__5626__auto__,i__45519);
cljs.core.chunk_append(b__45520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(class$)))], null));

var G__45757 = (i__45519 + (1));
i__45519 = G__45757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45520),frontend$components$property$config$class_select_$_iter__45517(cljs.core.chunk_rest(s__45518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45520),null);
}
} else {
var class$ = cljs.core.first(s__45518__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(class$)))], null),frontend$components$property$config$class_select_$_iter__45517(cljs.core.rest(s__45518__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(schema_classes);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60.pl-1.top-1.relative.hover:opacity-80.active:opacity-60","span.opacity-60.pl-1.top-1.relative.hover:opacity-80.active:opacity-60",-982812794),logseq.shui.ui.tabler_icon("edit")], null)], null):frontend.components.property.value.property_empty_btn_value(property))], null);
}
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$class_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45521 = cljs.core.first(args__31746__auto__);
var G__45522 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45521,G__45522) : io.factorhouse.hsx.core.obj_get.call(null,G__45521,G__45522));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"class-select","class-select",-1269363872,null),args__31746__auto__),frontend$components$property$config$class_select,args__31746__auto__,null);
}
};
var frontend$components$property$config$class_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45758__i = 0, G__45758__a = new Array(arguments.length -  0);
while (G__45758__i < G__45758__a.length) {G__45758__a[G__45758__i] = arguments[G__45758__i + 0]; ++G__45758__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45758__a,0,null);
} 
return frontend$components$property$config$class_select__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$class_select.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$class_select.cljs$lang$applyTo = (function (arglist__45759){
var args__31746__auto__ = cljs.core.seq(arglist__45759);
return frontend$components$property$config$class_select__delegate(args__31746__auto__);
});
frontend$components$property$config$class_select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$class_select__delegate;
return frontend$components$property$config$class_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45523 = comp__31745__auto__;
var G__45524 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45523,G__45524) : io.factorhouse.hsx.core.react_memo.call(null,G__45523,G__45524));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"class-select");

return comp__31745__auto__;
})();
frontend.components.property.config.name_edit_pane = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$name_edit_pane(property,p__45526){
var map__45527 = p__45526;
var map__45527__$1 = cljs.core.__destructure_map(map__45527);
var set_sub_open_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45527__$1,new cljs.core.Keyword(null,"set-sub-open!","set-sub-open!",-2053118824));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45527__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var _STAR_form_data = (function (){var G__45534 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5142__auto__ = logseq.db.frontend.property.property_value_content(new cljs.core.Keyword("logseq.property","description","logseq.property/description",-336236200).cljs$core$IFn$_invoke$arity$1(property));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()], null);
return (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__45534) : logseq.shui.hooks.use_ref.call(null,G__45534));
})();
var vec__45528 = logseq.shui.hooks.use_state(logseq.shui.hooks.deref(_STAR_form_data));
var form_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45528,(0),null);
var set_form_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45528,(1),null);
var vec__45531 = logseq.shui.hooks.use_state(false);
var saving_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45531,(0),null);
var set_saving_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45531,(1),null);
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_input_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var title = frontend.util.trim_safe(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(form_data));
var description = frontend.util.trim_safe(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(form_data));
logseq.shui.hooks.use_effect_BANG_((function (){
return setTimeout((function (){
var G__45535 = logseq.shui.hooks.deref(_STAR_el);
if((G__45535 == null)){
return null;
} else {
return G__45535.focus();
}
}),(32));
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-name-edit-pane.outline-none","div.ls-property-name-edit-pane.outline-none",-1062216901),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tab",e.key)){
return frontend.components.property.config.loop_focusable_elements_BANG_.cljs$core$IFn$_invoke$arity$1(logseq.shui.hooks.deref(_STAR_el));
} else {
return null;
}
}),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.input-wrap","div.flex.items-center.input-wrap",-1511877701),frontend.components.icon.icon_picker(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form_data),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_e,icon){
var G__45536 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_data,new cljs.core.Keyword(null,"icon","icon",1679606541),icon);
return (set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__45536) : set_form_data_BANG_.call(null,G__45536));
}),new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"start"], null),new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),cljs.core.boolean$(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form_data)),new cljs.core.Keyword(null,"empty-label","empty-label",-288358384),"?"], null)),(function (){var G__45537 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_input_ref,new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","name-placeholder","property/name-placeholder",1015728459)], 0)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowRight",null,"ArrowLeft",null], null), null),frontend.util.ekey(e))){
return frontend.util.stop_propagation(e);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__45538 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_data,new cljs.core.Keyword(null,"title","title",636505583),frontend.util.trim_safe(frontend.util.evalue(e)));
return (set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__45538) : set_form_data_BANG_.call(null,G__45538));
})], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__45537) : logseq.shui.ui.input.call(null,G__45537));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-2","div.pt-2",-1251443966),(function (){var G__45539 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","description-placeholder","property/description-placeholder",-1896063821)], 0)),new cljs.core.Keyword(null,"default-value","default-value",232220170),description,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__45540 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_data,new cljs.core.Keyword(null,"description","description",-1428560544),frontend.util.trim_safe(frontend.util.evalue(e)));
return (set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__45540) : set_form_data_BANG_.call(null,G__45540));
})], null);
return (logseq.shui.ui.textarea.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.textarea.cljs$core$IFn$_invoke$arity$1(G__45539) : logseq.shui.ui.textarea.call(null,G__45539));
})()], null),(function (){var dirty_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(logseq.shui.hooks.deref(_STAR_form_data),form_data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-2.flex.justify-end","div.pt-2.flex.justify-end",1007782928),(function (){var G__45541 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5142__auto__ = saving_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(dirty_QMARK_));
}
})(),new cljs.core.Keyword(null,"variant","variant",-424354234),((dirty_QMARK_)?new cljs.core.Keyword(null,"default","default",-1987822328):new cljs.core.Keyword(null,"secondary","secondary",-669381460)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(set_saving_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_saving_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_saving_BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.db_based.property.upsert_property_BANG_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-name","property-name",-1399851434),title,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form_data)], null)], null)),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(description,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(logseq.shui.hooks.deref(_STAR_form_data))))?frontend.components.property.config.set_property_description_BANG_(property,description):null)], null)),(function (){
return (set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_sub_open_BANG_.call(null,false));
})),(function (p1__45525_SHARP_){
var G__45543 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45525_SHARP_));
var G__45544 = new cljs.core.Keyword(null,"error","error",-978969032);
return (logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2(G__45543,G__45544) : logseq.shui.ui.toast_BANG_.call(null,G__45543,G__45544));
})),(function (){
return (set_saving_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_saving_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_saving_BANG_.call(null,false));
}));
})], null);
var G__45542 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","save","ui/save",1850075345)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45541,G__45542) : logseq.shui.ui.button.call(null,G__45541,G__45542));
})()], null);
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$name_edit_pane__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45545 = cljs.core.first(args__31746__auto__);
var G__45546 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45545,G__45546) : io.factorhouse.hsx.core.obj_get.call(null,G__45545,G__45546));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"name-edit-pane","name-edit-pane",572912052,null),args__31746__auto__),frontend$components$property$config$name_edit_pane,args__31746__auto__,null);
}
};
var frontend$components$property$config$name_edit_pane = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45760__i = 0, G__45760__a = new Array(arguments.length -  0);
while (G__45760__i < G__45760__a.length) {G__45760__a[G__45760__i] = arguments[G__45760__i + 0]; ++G__45760__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45760__a,0,null);
} 
return frontend$components$property$config$name_edit_pane__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$name_edit_pane.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$name_edit_pane.cljs$lang$applyTo = (function (arglist__45761){
var args__31746__auto__ = cljs.core.seq(arglist__45761);
return frontend$components$property$config$name_edit_pane__delegate(args__31746__auto__);
});
frontend$components$property$config$name_edit_pane.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$name_edit_pane__delegate;
return frontend$components$property$config$name_edit_pane;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45547 = comp__31745__auto__;
var G__45548 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45547,G__45548) : io.factorhouse.hsx.core.react_memo.call(null,G__45547,G__45548));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"name-edit-pane");

return comp__31745__auto__;
})();
frontend.components.property.config.choice_base_edit_form = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$choice_base_edit_form(own_property,block,owner_block){
var create_QMARK_ = new cljs.core.Keyword(null,"create?","create?",-1986446702).cljs$core$IFn$_invoke$arity$1(block);
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var _STAR_form_data = (function (){var G__45557 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.property.closed_value_content(block)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5142__auto__ = logseq.db.frontend.property.property_value_content(new cljs.core.Keyword("logseq.property","description","logseq.property/description",-336236200).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()], null);
return (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__45557) : logseq.shui.hooks.use_ref.call(null,G__45557));
})();
var vec__45551 = logseq.shui.hooks.use_state(logseq.shui.hooks.deref(_STAR_form_data));
var form_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45551,(0),null);
var set_form_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45551,(1),null);
var vec__45554 = logseq.shui.hooks.use_state((function (){var and__5140__auto__ = create_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.entity.class_QMARK_(owner_block);
} else {
return and__5140__auto__;
}
})());
var scoped_to_owner_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45554,(0),null);
var set_scoped_to_owner_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45554,(1),null);
var _STAR_input_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(create_QMARK_)){
return setTimeout((function (){
var G__45558 = logseq.shui.hooks.deref(_STAR_input_ref);
if((G__45558 == null)){
return null;
} else {
return G__45558.focus();
}
}),(60));
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-base-edit-form","div.ls-base-edit-form",-1938153342),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.input-wrap","div.flex.items-center.input-wrap",-1511877701),frontend.components.icon.icon_picker(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form_data),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_e,icon){
var G__45559 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_data,new cljs.core.Keyword(null,"icon","icon",1679606541),icon);
return (set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__45559) : set_form_data_BANG_.call(null,G__45559));
}),new cljs.core.Keyword(null,"empty-label","empty-label",-288358384),"?",new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),cljs.core.boolean$(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(form_data)),new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"start"], null)], null)),(function (){var G__45560 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_input_ref,new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(form_data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__45561 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_data,new cljs.core.Keyword(null,"value","value",305978217),frontend.util.trim_safe(frontend.util.evalue(e)));
return (set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__45561) : set_form_data_BANG_.call(null,G__45561));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","title-placeholder","property/title-placeholder",-163882073)], 0))], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__45560) : logseq.shui.ui.input.call(null,G__45560));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-2","div.pt-2",-1251443966),(function (){var G__45562 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","description-placeholder","property/description-placeholder",-1896063821)], 0)),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(form_data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__45563 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_data,new cljs.core.Keyword(null,"description","description",-1428560544),frontend.util.trim_safe(frontend.util.evalue(e)));
return (set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_form_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__45563) : set_form_data_BANG_.call(null,G__45563));
})], null);
return (logseq.shui.ui.textarea.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.textarea.cljs$core$IFn$_invoke$arity$1(G__45562) : logseq.shui.ui.textarea.call(null,G__45562));
})()], null),(cljs.core.truth_((function (){var and__5140__auto__ = create_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.entity.class_QMARK_(owner_block);
} else {
return and__5140__auto__;
}
})())?(function (){var tag_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(owner_block);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-2.flex.items-center.gap-2","div.pt-2.flex.items-center.gap-2",-1551327570),(function (){var G__45564 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"scope-choice-to-tag",new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"checked","checked",-50955819),scoped_to_owner_QMARK_,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (p1__45549_SHARP_){
var G__45565 = cljs.core.boolean$(p1__45549_SHARP_);
return (set_scoped_to_owner_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_scoped_to_owner_BANG_.cljs$core$IFn$_invoke$arity$1(G__45565) : set_scoped_to_owner_BANG_.call(null,G__45565));
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__45564) : logseq.shui.ui.checkbox.call(null,G__45564));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"scope-choice-to-tag",new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer text-sm"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","scope-choice-to-tag","property/scope-choice-to-tag",-1896888337),tag_title], 0))], null)], null);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-2.flex.justify-end","div.pt-2.flex.justify-end",1007782928),(function (){var dirty_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(logseq.shui.hooks.deref(_STAR_form_data),form_data);
var G__45566 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(dirty_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.components.property.config._LT_upsert_closed_value_BANG_(own_property,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__45568 = form_data;
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45568,new cljs.core.Keyword(null,"id","id",-1388402092),uuid);
} else {
return G__45568;
}
})(),frontend.components.property.config.__GT_closed_choice_scope_opts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner-block","owner-block",1197987933),owner_block,new cljs.core.Keyword(null,"scoped-to-owner?","scoped-to-owner?",1725099729),scoped_to_owner_QMARK_], null))], 0))),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})),(function (p1__45550_SHARP_){
var G__45569 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45550_SHARP_));
var G__45570 = new cljs.core.Keyword(null,"error","error",-978969032);
return (logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$2(G__45569,G__45570) : logseq.shui.ui.toast_BANG_.call(null,G__45569,G__45570));
}));
}),new cljs.core.Keyword(null,"variant","variant",-424354234),((dirty_QMARK_)?new cljs.core.Keyword(null,"default","default",-1987822328):new cljs.core.Keyword(null,"secondary","secondary",-669381460))], null);
var G__45567 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","save","ui/save",1850075345)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45566,G__45567) : logseq.shui.ui.button.call(null,G__45566,G__45567));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$choice_base_edit_form__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45571 = cljs.core.first(args__31746__auto__);
var G__45572 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45571,G__45572) : io.factorhouse.hsx.core.obj_get.call(null,G__45571,G__45572));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"choice-base-edit-form","choice-base-edit-form",628220907,null),args__31746__auto__),frontend$components$property$config$choice_base_edit_form,args__31746__auto__,null);
}
};
var frontend$components$property$config$choice_base_edit_form = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45762__i = 0, G__45762__a = new Array(arguments.length -  0);
while (G__45762__i < G__45762__a.length) {G__45762__a[G__45762__i] = arguments[G__45762__i + 0]; ++G__45762__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45762__a,0,null);
} 
return frontend$components$property$config$choice_base_edit_form__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$choice_base_edit_form.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$choice_base_edit_form.cljs$lang$applyTo = (function (arglist__45763){
var args__31746__auto__ = cljs.core.seq(arglist__45763);
return frontend$components$property$config$choice_base_edit_form__delegate(args__31746__auto__);
});
frontend$components$property$config$choice_base_edit_form.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$choice_base_edit_form__delegate;
return frontend$components$property$config$choice_base_edit_form;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45573 = comp__31745__auto__;
var G__45574 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45573,G__45574) : io.factorhouse.hsx.core.react_memo.call(null,G__45573,G__45574));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"choice-base-edit-form");

return comp__31745__auto__;
})();
frontend.components.property.config.restore_root_highlight_item_BANG_ = (function frontend$components$property$config$restore_root_highlight_item_BANG_(id){
return setTimeout((function (){
var G__45575 = goog.dom.getElement(id);
if((G__45575 == null)){
return null;
} else {
return G__45575.focus();
}
}),(32));
});
frontend.components.property.config.dropdown_editor_menuitem = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$dropdown_editor_menuitem(p__45580){
var map__45581 = p__45580;
var map__45581__$1 = cljs.core.__destructure_map(map__45581);
var toggle_checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"toggle-checked?","toggle-checked?",1549681434));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var submenu_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"submenu-content","submenu-content",-1896531140));
var on_toggle_checked_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"on-toggle-checked-change","on-toggle-checked-change",644403327));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var checkbox_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"checkbox?","checkbox?",2007099436));
var sub_content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"sub-content-props","sub-content-props",-1536970259));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"title","title",636505583));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var item_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45581__$1,new cljs.core.Keyword(null,"item-props","item-props",-1762062444));
var submenu_content__$1 = (cljs.core.truth_(disabled_QMARK_)?null:submenu_content);
var item_props_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5140__auto__ = disabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(item_props);
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item_props,new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (){
return null;
})):item_props);
var vec__45582 = logseq.shui.hooks.use_state(false);
var sub_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45582,(0),null);
var set_sub_open_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45582,(1),null);
var toggle_QMARK_ = cljs.core.boolean_QMARK_(toggle_checked_QMARK_);
var id1 = logseq.shui.hooks.use_memo((function (){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.random_uuid();
}
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var id2 = (""+"d2-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id1));
var or_close_menu_sub_BANG_ = (function (event_details){
if(cljs.core.truth_((function (){var or__5142__auto__ = logseq.shui.popup.core.get_popup(new cljs.core.Keyword(null,"ls-icon-picker","ls-icon-picker",1363108390));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.shui.popup.core.get_popup(new cljs.core.Keyword(null,"ls-base-edit-form","ls-base-edit-form",602084072));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = logseq.shui.popup.core.get_popup(new cljs.core.Keyword(null,"ls-node-tags-sub-pane","ls-node-tags-sub-pane",-1694940447));
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return logseq.shui.popup.core.get_popup(new cljs.core.Keyword(null,"ls-choice-more-settings","ls-choice-more-settings",-1015959751));
}
}
}
})())){
var G__45585 = event_details;
if((G__45585 == null)){
return null;
} else {
return G__45585.cancel();
}
} else {
(set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_sub_open_BANG_.call(null,false));

return frontend.components.property.config.restore_root_highlight_item_BANG_(id1);
}
});
var wrap_menuitem = (cljs.core.truth_(submenu_content__$1)?(function (p1__45576_SHARP_){
var G__45586 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),sub_open_QMARK_,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),(function (v,event_details){
if(cljs.core.truth_(v)){
return (set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_sub_open_BANG_.call(null,true));
} else {
return or_close_menu_sub_BANG_(event_details);
}
})], null);
var G__45587 = (function (){var G__45589 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id1], null),item_props_SINGLEQUOTE_], 0));
var G__45590 = p1__45576_SHARP_;
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$2(G__45589,G__45590) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__45589,G__45590));
})();
var G__45588 = (function (){var G__45591 = sub_content_props;
var G__45592 = ((cljs.core.fn_QMARK_(submenu_content__$1))?(function (){var G__45593 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-sub-open!","set-sub-open!",-2053118824),set_sub_open_BANG_,new cljs.core.Keyword(null,"id","id",-1388402092),id1], null);
return (submenu_content__$1.cljs$core$IFn$_invoke$arity$1 ? submenu_content__$1.cljs$core$IFn$_invoke$arity$1(G__45593) : submenu_content__$1.call(null,G__45593));
})():submenu_content__$1);
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$2(G__45591,G__45592) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__45591,G__45592));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$3(G__45586,G__45587,G__45588) : logseq.shui.ui.dropdown_menu_sub.call(null,G__45586,G__45587,G__45588));
}):(function (p1__45577_SHARP_){
var G__45594 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = toggle_QMARK_;
if(and__5140__auto__){
return on_toggle_checked_change;
} else {
return and__5140__auto__;
}
})())){
var G__45596 = cljs.core.not(toggle_checked_QMARK_);
return (on_toggle_checked_change.cljs$core$IFn$_invoke$arity$1 ? on_toggle_checked_change.cljs$core$IFn$_invoke$arity$1(G__45596) : on_toggle_checked_change.call(null,G__45596));
} else {
return null;
}
}),new cljs.core.Keyword(null,"id","id",-1388402092),id1], null),item_props_SINGLEQUOTE_], 0));
var G__45595 = p1__45577_SHARP_;
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__45594,G__45595) : logseq.shui.ui.dropdown_menu_item.call(null,G__45594,G__45595));
}));
return wrap_menuitem(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-wrap.cursor-pointer","div.inner-wrap.cursor-pointer",2113192722),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-setting-title","div.property-setting-title",-1456152546),(function (){var G__45597 = icon;
var G__45597__$1 = (((G__45597 == null))?null:cljs.core.name(G__45597));
if((G__45597__$1 == null)){
return null;
} else {
return logseq.shui.ui.tabler_icon(G__45597__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(14),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-1"], null)], null));
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null),title], null)], null),((cljs.core.fn_QMARK_(desc))?(desc.cljs$core$IFn$_invoke$arity$0 ? desc.cljs$core$IFn$_invoke$arity$0() : desc.call(null)):((cljs.core.boolean_QMARK_(toggle_checked_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__45578_SHARP_){
return frontend.util.stop_propagation(p1__45578_SHARP_);
})], null),(function (){var f = (cljs.core.truth_(checkbox_QMARK_)?logseq.shui.ui.checkbox:logseq.shui.ui.switch$);
var G__45598 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id2,new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"checked","checked",-50955819),toggle_checked_QMARK_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__45579_SHARP_){
return frontend.util.stop_propagation(p1__45579_SHARP_);
}),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (checked_QMARK_){
var fexpr__45599 = (function (){var or__5142__auto__ = on_toggle_checked_change;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.identity;
}
})();
return (fexpr__45599.cljs$core$IFn$_invoke$arity$1 ? fexpr__45599.cljs$core$IFn$_invoke$arity$1(checked_QMARK_) : fexpr__45599.call(null,checked_QMARK_));
})], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45598) : f.call(null,G__45598));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),desc], null),(cljs.core.truth_(disabled_QMARK_)?logseq.shui.ui.tabler_icon("forbid-2",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null)):null)], null)
))], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$dropdown_editor_menuitem__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45600 = cljs.core.first(args__31746__auto__);
var G__45601 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45600,G__45601) : io.factorhouse.hsx.core.obj_get.call(null,G__45600,G__45601));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"dropdown-editor-menuitem","dropdown-editor-menuitem",-806978048,null),args__31746__auto__),frontend$components$property$config$dropdown_editor_menuitem,args__31746__auto__,null);
}
};
var frontend$components$property$config$dropdown_editor_menuitem = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45764__i = 0, G__45764__a = new Array(arguments.length -  0);
while (G__45764__i < G__45764__a.length) {G__45764__a[G__45764__i] = arguments[G__45764__i + 0]; ++G__45764__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45764__a,0,null);
} 
return frontend$components$property$config$dropdown_editor_menuitem__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$dropdown_editor_menuitem.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$dropdown_editor_menuitem.cljs$lang$applyTo = (function (arglist__45765){
var args__31746__auto__ = cljs.core.seq(arglist__45765);
return frontend$components$property$config$dropdown_editor_menuitem__delegate(args__31746__auto__);
});
frontend$components$property$config$dropdown_editor_menuitem.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$dropdown_editor_menuitem__delegate;
return frontend$components$property$config$dropdown_editor_menuitem;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45602 = comp__31745__auto__;
var G__45603 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45602,G__45603) : io.factorhouse.hsx.core.react_memo.call(null,G__45602,G__45603));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"dropdown-editor-menuitem");

return comp__31745__auto__;
})();
frontend.components.property.config.resolve_owner_class_block = (function frontend$components$property$config$resolve_owner_class_block(owner_block){
var owner_class_QMARK_ = frontend.util.entity.class_QMARK_(owner_block);
var owner_id = (cljs.core.truth_((function (){var and__5140__auto__ = owner_class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(owner_block);
} else {
return and__5140__auto__;
}
})())?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(owner_block):null);
var owner_block_SINGLEQUOTE_ = (cljs.core.truth_(owner_id)?owner_block:null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner-class?","owner-class?",-954417145),owner_class_QMARK_,new cljs.core.Keyword(null,"owner-block'","owner-block'",843991070),owner_block_SINGLEQUOTE_,new cljs.core.Keyword(null,"owner-id","owner-id",-58940392),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(owner_block_SINGLEQUOTE_)], null);
});
frontend.components.property.config.transact_choice_scope_BANG_ = (function frontend$components$property$config$transact_choice_scope_BANG_(tx_data){
if(cljs.core.seq(tx_data)){
return frontend.components.property.config._LT_worker_transact_BANG_(tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"update-property","update-property",348681633)], null));
} else {
return null;
}
});
frontend.components.property.config._LT_delete_choice_BANG_ = (function frontend$components$property$config$_LT_delete_choice_BANG_(property,block){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.delete_closed_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))),(function (___21901__auto__){
return promesa.protocols._promise(frontend.components.property.config.re_init_commands_BANG_(property));
}));
}));
});
frontend.components.property.config.update_choice_icon_BANG_ = (function frontend$components$property$config$update_choice_icon_BANG_(block,icon){
return frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),cljs.core.select_keys(icon,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color","color",1011675173)], null)));
});
frontend.components.property.config.choice_default_menu_item = (function frontend$components$property$config$choice_default_menu_item(property,block,scoped_choice_from_other_tags_QMARK_){
var default_type_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
var default_value = ((default_type_QMARK_)?new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(property):null);
var default_value_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(default_value),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(((default_type_QMARK_) && (cljs.core.not(scoped_choice_from_other_tags_QMARK_)))){
var G__45604 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"default value",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var value = ((default_value_QMARK_)?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662),value);
})], null);
var G__45605 = (function (){var G__45607 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"default value",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-default-choice","property/set-default-choice",724728625)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"mr-1 opacity-50 hover:opacity-100",new cljs.core.Keyword(null,"checked","checked",-50955819),default_value_QMARK_], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__45607) : logseq.shui.ui.checkbox.call(null,G__45607));
})();
var G__45606 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-default-choice","property/set-default-choice",724728625)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__45604,G__45605,G__45606) : logseq.shui.ui.dropdown_menu_item.call(null,G__45604,G__45605,G__45606));
} else {
return null;
}
});
frontend.components.property.config.choice_exclude_for_tag_menu_item = (function frontend$components$property$config$choice_exclude_for_tag_menu_item(owner_class_QMARK_,owner_block,owner_block_SINGLEQUOTE_,block,global_choice_QMARK_,excluded_ids){
if(cljs.core.truth_((function (){var and__5140__auto__ = owner_class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = owner_block_SINGLEQUOTE_;
if(cljs.core.truth_(and__5140__auto____$1)){
return global_choice_QMARK_;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var excluded_QMARK_ = cljs.core.contains_QMARK_(excluded_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
var tag_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(owner_block_SINGLEQUOTE_);
var toggle_exclusion_BANG_ = (function (){
if(excluded_QMARK_){
return frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(owner_block),new cljs.core.Keyword("logseq.property","choice-exclusions","logseq.property/choice-exclusions",1233522946),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
} else {
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(owner_block),new cljs.core.Keyword("logseq.property","choice-exclusions","logseq.property/choice-exclusions",1233522946),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
}
});
var G__45608 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"exclude for tag",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_exclusion_BANG_], null);
var G__45609 = (function (){var G__45611 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"exclude for tag",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","hide-choice-for-tag","property/hide-choice-for-tag",-1505129410)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"mr-1 opacity-50 hover:opacity-100",new cljs.core.Keyword(null,"checked","checked",-50955819),excluded_QMARK_], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__45611) : logseq.shui.ui.checkbox.call(null,G__45611));
})();
var G__45610 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","hide-for-tag","property/hide-for-tag",2139148047),tag_title], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__45608,G__45609,G__45610) : logseq.shui.ui.dropdown_menu_item.call(null,G__45608,G__45609,G__45610));
} else {
return null;
}
});
frontend.components.property.config.empty_choice_content_QMARK_ = (function frontend$components$property$config$empty_choice_content_QMARK_(choice){
var content = logseq.db.frontend.property.closed_value_content(choice);
return (((content == null)) || (((typeof content === 'string') && (clojure.string.blank_QMARK_(content)))));
});
frontend.components.property.config.choice_deletable_QMARK_ = (function frontend$components$property$config$choice_deletable_QMARK_(p__45612){
var map__45613 = p__45612;
var map__45613__$1 = cljs.core.__destructure_map(map__45613);
var owner_class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45613__$1,new cljs.core.Keyword(null,"owner-class?","owner-class?",-954417145));
var global_choice_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45613__$1,new cljs.core.Keyword(null,"global-choice?","global-choice?",-912889970));
var scoped_choice_from_other_tags_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45613__$1,new cljs.core.Keyword(null,"scoped-choice-from-other-tags?","scoped-choice-from-other-tags?",-364181215));
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45613__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var and__5140__auto__ = cljs.core.not(scoped_choice_from_other_tags_QMARK_);
if(and__5140__auto__){
var or__5142__auto__ = cljs.core.not((function (){var and__5140__auto____$1 = owner_class_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return global_choice_QMARK_;
} else {
return and__5140__auto____$1;
}
})());
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto____$1 = choice;
if(cljs.core.truth_(and__5140__auto____$1)){
return frontend.components.property.config.empty_choice_content_QMARK_(choice);
} else {
return and__5140__auto____$1;
}
}
} else {
return and__5140__auto__;
}
});
frontend.components.property.config.choice_delete_menu_item = (function frontend$components$property$config$choice_delete_menu_item(owner_class_QMARK_,global_choice_QMARK_,scoped_choice_from_other_tags_QMARK_,choice,delete_choice_BANG_){
if(cljs.core.truth_(frontend.components.property.config.choice_deletable_QMARK_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"owner-class?","owner-class?",-954417145),owner_class_QMARK_,new cljs.core.Keyword(null,"global-choice?","global-choice?",-912889970),global_choice_QMARK_,new cljs.core.Keyword(null,"scoped-choice-from-other-tags?","scoped-choice-from-other-tags?",-364181215),scoped_choice_from_other_tags_QMARK_,new cljs.core.Keyword(null,"choice","choice",-1375170727),choice], null)))){
var G__45614 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete",new cljs.core.Keyword(null,"class","class",-2030961996),"del",new cljs.core.Keyword(null,"on-click","on-click",1632826543),delete_choice_BANG_], null);
var G__45615 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.w-full.text-red-rx-09.opacity-90.flex.items-center.hover:opacity-100","span.w-full.text-red-rx-09.opacity-90.flex.items-center.hover:opacity-100",1407808020),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"scale-90 pr-1"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","delete","ui/delete",-1768677056)], 0))], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__45614,G__45615) : logseq.shui.ui.dropdown_menu_item.call(null,G__45614,G__45615));
} else {
return null;
}
});
frontend.components.property.config.choice_item_content = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$choice_item_content(property,block,p__45616){
var map__45617 = p__45616;
var map__45617__$1 = cljs.core.__destructure_map(map__45617);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45617__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var owner_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45617__$1,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933));
var map__45618 = frontend.components.property.config.resolve_owner_class_block(owner_block);
var map__45618__$1 = cljs.core.__destructure_map(map__45618);
var owner_class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45618__$1,new cljs.core.Keyword(null,"owner-class?","owner-class?",-954417145));
var owner_block_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45618__$1,new cljs.core.Keyword(null,"owner-block'","owner-block'",843991070));
var owner_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45618__$1,new cljs.core.Keyword(null,"owner-id","owner-id",-58940392));
var scope_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219).cljs$core$IFn$_invoke$arity$1(block)));
var scoped_choice_from_other_tags_QMARK_ = frontend.components.property.config.choice_scoped_from_other_tags_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"choice","choice",-1375170727),block,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933),owner_block_SINGLEQUOTE_], null));
var scoped_choice_in_current_tag_QMARK_ = (function (){var and__5140__auto__ = owner_class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = owner_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.seq(scope_ids)) && (cljs.core.contains_QMARK_(scope_ids,owner_id)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var delete_choice_BANG_ = (function (){
return frontend.components.property.config._LT_delete_choice_BANG_(property,block);
});
var use_in_current_tag_BANG_ = (function (){
if(cljs.core.truth_(owner_block_SINGLEQUOTE_)){
var tx_data = frontend.components.property.config.__GT_use_choice_in_owner_tag_tx_data(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"choice","choice",-1375170727),block,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933),owner_block_SINGLEQUOTE_], null));
return frontend.components.property.config.transact_choice_scope_BANG_(tx_data);
} else {
return null;
}
});
var remove_scope_for_current_tag_BANG_ = (function (){
if(cljs.core.truth_(owner_block_SINGLEQUOTE_)){
return frontend.components.property.config.transact_choice_scope_BANG_(frontend.components.property.config.__GT_remove_choice_scope_for_owner_tag_tx_data(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"choice","choice",-1375170727),block,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933),owner_block_SINGLEQUOTE_], null)));
} else {
return null;
}
});
var icon = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(block);
var value = logseq.db.frontend.property.closed_value_content(block);
var excluded_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","choice-exclusions","logseq.property/choice-exclusions",1233522946).cljs$core$IFn$_invoke$arity$1(owner_block_SINGLEQUOTE_)));
var global_choice_QMARK_ = cljs.core.empty_QMARK_(new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219).cljs$core$IFn$_invoke$arity$1(block));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__45619 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","drag-to-reorder","property/drag-to-reorder",-1144688020)], 0))], null);
var G__45620 = logseq.shui.ui.tabler_icon("grip-vertical",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45619,G__45620) : logseq.shui.ui.button.call(null,G__45619,G__45620));
})(),frontend.components.icon.icon_picker(icon,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_e,icon__$1){
return frontend.components.property.config.update_choice_icon_BANG_(block,icon__$1);
}),new cljs.core.Keyword(null,"popup-opts","popup-opts",-1667184839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"start"], null),new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),cljs.core.boolean$(icon),new cljs.core.Keyword(null,"empty-label","empty-label",-288358384),"?",new cljs.core.Keyword(null,"button-opts","button-opts",1112045560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-icon","property/set-icon",2043092139)], 0))], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__45621 = e.target;
var G__45622 = (function (){
return frontend.components.property.config.choice_base_edit_form(property,block,owner_block);
});
var G__45623 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-base-edit-form","ls-base-edit-form",602084072),new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true,new cljs.core.Keyword(null,"align","align",1964212802),"start"], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45621,G__45622,G__45623) : logseq.shui.ui.popup_show_BANG_.call(null,G__45621,G__45622,G__45623));
}),new cljs.core.Keyword(null,"title","title",636505583),value], null),value], null),(function (){var G__45624 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","more-settings","property/more-settings",430542454)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(disabled_QMARK_)){
return null;
} else {
var G__45626 = e.currentTarget;
var G__45627 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.property.config.choice_default_menu_item(property,block,scoped_choice_from_other_tags_QMARK_),frontend.components.property.config.choice_exclude_for_tag_menu_item(owner_class_QMARK_,owner_block,owner_block_SINGLEQUOTE_,block,global_choice_QMARK_,excluded_ids),(cljs.core.truth_(scoped_choice_in_current_tag_QMARK_)?(function (){var G__45629 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"remove scope for tag",new cljs.core.Keyword(null,"on-click","on-click",1632826543),remove_scope_for_current_tag_BANG_], null);
var G__45630 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","remove-scope-for-tag","property/remove-scope-for-tag",2022301282),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(owner_block_SINGLEQUOTE_)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__45629,G__45630) : logseq.shui.ui.dropdown_menu_item.call(null,G__45629,G__45630));
})():null),((scoped_choice_from_other_tags_QMARK_)?(function (){var G__45631 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"use in current tag",new cljs.core.Keyword(null,"on-click","on-click",1632826543),use_in_current_tag_BANG_], null);
var G__45632 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","use-choice-in-tag","property/use-choice-in-tag",-2132978604),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(owner_block_SINGLEQUOTE_)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__45631,G__45632) : logseq.shui.ui.dropdown_menu_item.call(null,G__45631,G__45632));
})():null),frontend.components.property.config.choice_delete_menu_item(owner_class_QMARK_,global_choice_QMARK_,scoped_choice_from_other_tags_QMARK_,block,delete_choice_BANG_)], null);
});
var G__45628 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-choice-more-settings","ls-choice-more-settings",-1015959751),new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"align","align",1964212802),"end",new cljs.core.Keyword(null,"root-props","root-props",-1015460595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal","modal",-1031880850),false], null),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-choice-more-settings",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-choice-more-settings","ls-choice-more-settings",-1015959751)) : logseq.shui.ui.popup_hide_BANG_.call(null,new cljs.core.Keyword(null,"ls-choice-more-settings","ls-choice-more-settings",-1015959751)));
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45626,G__45627,G__45628) : logseq.shui.ui.popup_show_BANG_.call(null,G__45626,G__45627,G__45628));
}
})], null);
var G__45625 = logseq.shui.ui.tabler_icon("dots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45624,G__45625) : logseq.shui.ui.button.call(null,G__45624,G__45625));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$choice_item_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45633 = cljs.core.first(args__31746__auto__);
var G__45634 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45633,G__45634) : io.factorhouse.hsx.core.obj_get.call(null,G__45633,G__45634));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"choice-item-content","choice-item-content",-1302162705,null),args__31746__auto__),frontend$components$property$config$choice_item_content,args__31746__auto__,null);
}
};
var frontend$components$property$config$choice_item_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45766__i = 0, G__45766__a = new Array(arguments.length -  0);
while (G__45766__i < G__45766__a.length) {G__45766__a[G__45766__i] = arguments[G__45766__i + 0]; ++G__45766__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45766__a,0,null);
} 
return frontend$components$property$config$choice_item_content__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$choice_item_content.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$choice_item_content.cljs$lang$applyTo = (function (arglist__45767){
var args__31746__auto__ = cljs.core.seq(arglist__45767);
return frontend$components$property$config$choice_item_content__delegate(args__31746__auto__);
});
frontend$components$property$config$choice_item_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$choice_item_content__delegate;
return frontend$components$property$config$choice_item_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45635 = comp__31745__auto__;
var G__45636 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45635,G__45636) : io.factorhouse.hsx.core.react_memo.call(null,G__45635,G__45636));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"choice-item-content");

return comp__31745__auto__;
})();
frontend.components.property.config.add_existing_values = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$add_existing_values(property,values,p__45637){
var map__45638 = p__45637;
var map__45638__$1 = cljs.core.__destructure_map(map__45638);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45638__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.w-64.p-4.overflow-y-auto","div.flex.flex-col.gap-1.w-64.p-4.overflow-y-auto",-1959227566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-h-[50dvh]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","existing-values","property/existing-values",-1797090218)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5628__auto__ = (function frontend$components$property$config$add_existing_values_$_iter__45639(s__45640){
return (new cljs.core.LazySeq(null,(function (){
var s__45640__$1 = s__45640;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45640__$1);
if(temp__5825__auto__){
var s__45640__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45640__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45640__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45642 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45641 = (0);
while(true){
if((i__45641 < size__5627__auto__)){
var value = cljs.core._nth(c__5626__auto__,i__45641);
cljs.core.chunk_append(b__45642,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value))))], null)));

var G__45768 = (i__45641 + (1));
i__45641 = G__45768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45642),frontend$components$property$config$add_existing_values_$_iter__45639(cljs.core.chunk_rest(s__45640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45642),null);
}
} else {
var value = cljs.core.first(s__45640__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value))))], null)),frontend$components$property$config$add_existing_values_$_iter__45639(cljs.core.rest(s__45640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(values);
})()], null),(function (){var G__45643 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.add_existing_values_to_closed_values_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45645){
var map__45646 = p__45645;
var map__45646__$1 = cljs.core.__destructure_map(map__45646);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45646__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(value);
}),values))),(function (_){
return promesa.protocols._promise((toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null)));
}));
}));
})], null);
var G__45644 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","add-choices","property/add-choices",-1407979489)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45643,G__45644) : logseq.shui.ui.button.call(null,G__45643,G__45644));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$add_existing_values__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45647 = cljs.core.first(args__31746__auto__);
var G__45648 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45647,G__45648) : io.factorhouse.hsx.core.obj_get.call(null,G__45647,G__45648));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"add-existing-values","add-existing-values",1743357233,null),args__31746__auto__),frontend$components$property$config$add_existing_values,args__31746__auto__,null);
}
};
var frontend$components$property$config$add_existing_values = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45769__i = 0, G__45769__a = new Array(arguments.length -  0);
while (G__45769__i < G__45769__a.length) {G__45769__a[G__45769__i] = arguments[G__45769__i + 0]; ++G__45769__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45769__a,0,null);
} 
return frontend$components$property$config$add_existing_values__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$add_existing_values.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$add_existing_values.cljs$lang$applyTo = (function (arglist__45770){
var args__31746__auto__ = cljs.core.seq(arglist__45770);
return frontend$components$property$config$add_existing_values__delegate(args__31746__auto__);
});
frontend$components$property$config$add_existing_values.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$add_existing_values__delegate;
return frontend$components$property$config$add_existing_values;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45649 = comp__31745__auto__;
var G__45650 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45649,G__45650) : io.factorhouse.hsx.core.react_memo.call(null,G__45649,G__45650));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"add-existing-values");

return comp__31745__auto__;
})();
frontend.components.property.config.scoped_choices_from_other_tags = (function frontend$components$property$config$scoped_choices_from_other_tags(choices,owner_id){
if(cljs.core.truth_(owner_id)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (choice){
var scope_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219).cljs$core$IFn$_invoke$arity$1(choice)));
return ((cljs.core.seq(scope_ids)) && ((!(cljs.core.contains_QMARK_(scope_ids,owner_id)))));
}),choices);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
frontend.components.property.config.hidden_excluded_choice_QMARK_ = (function frontend$components$property$config$hidden_excluded_choice_QMARK_(excluded_ids,block){
return ((cljs.core.empty_QMARK_(new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219).cljs$core$IFn$_invoke$arity$1(block))) && (cljs.core.contains_QMARK_(excluded_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))));
});
frontend.components.property.config.with_react_key = (function frontend$components$property$config$with_react_key(prefix,idx,item){
if((((!((item == null))))?(((((item.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === item.cljs$core$IWithMeta$))))?true:(((!item.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,item):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,item))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(item,cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)));
} else {
return item;
}
});
frontend.components.property.config.maybe_show_add_choice_popup_BANG_ = (function frontend$components$property$config$maybe_show_add_choice_popup_BANG_(e,property,owner_block,values_SINGLEQUOTE_){
var G__45652 = e.target;
var G__45653 = (function (p__45655){
var map__45656 = p__45655;
var map__45656__$1 = cljs.core.__destructure_map(map__45656);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45656__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
})], null);
if(cljs.core.seq(values_SINGLEQUOTE_)){
return frontend.components.property.config.add_existing_values(property,values_SINGLEQUOTE_,opts);
} else {
return frontend.components.property.config.choice_base_edit_form(property,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create?","create?",-1986446702),true], null),owner_block);
}
});
var G__45654 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-base-edit-form","ls-base-edit-form",602084072),new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true,new cljs.core.Keyword(null,"align","align",1964212802),"start"], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45652,G__45653,G__45654) : logseq.shui.ui.popup_show_BANG_.call(null,G__45652,G__45653,G__45654));
});
frontend.components.property.config.add_choice_menuitem = (function frontend$components$property$config$add_choice_menuitem(property,owner_block){
return frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","add-choice","property/add-choice",1960342191)], 0)),new cljs.core.Keyword(null,"item-props","item-props",-1762062444),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close-on-click","close-on-click",613505375),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_property_values.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0))),(function (values){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))),(function (existing_values){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(existing_values))?(function (){var existing_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),existing_values));
var existing_titles = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.property_value_content,existing_values));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45657){
var map__45658 = p__45657;
var map__45658__$1 = cljs.core.__destructure_map(map__45658);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45658__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45658__$1,new cljs.core.Keyword(null,"value","value",305978217));
var or__5142__auto__ = (function (){var G__45659 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
return (existing_ids.cljs$core$IFn$_invoke$arity$1 ? existing_ids.cljs$core$IFn$_invoke$arity$1(G__45659) : existing_ids.call(null,G__45659));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (existing_titles.cljs$core$IFn$_invoke$arity$1 ? existing_titles.cljs$core$IFn$_invoke$arity$1(label) : existing_titles.call(null,label));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return clojure.string.blank_QMARK_(label);
}
}
}),values);
})():cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45660){
var map__45661 = p__45660;
var map__45661__$1 = cljs.core.__destructure_map(map__45661);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45661__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var _value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45661__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
return clojure.string.blank_QMARK_(label);
}),values))),(function (values_SINGLEQUOTE_){
return promesa.protocols._promise(frontend.components.property.config.maybe_show_add_choice_popup_BANG_(e,property,owner_block,values_SINGLEQUOTE_));
}));
}));
}));
}));
})], null)], null));
});
frontend.components.property.config.on_choice_drag_end = (function frontend$components$property$config$on_choice_drag_end(property,p__45665){
var map__45666 = p__45665;
var map__45666__$1 = cljs.core.__destructure_map(map__45666);
var active_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45666__$1,new cljs.core.Keyword(null,"active-id","active-id",-59238656));
var over_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45666__$1,new cljs.core.Keyword(null,"over-id","over-id",257293900));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45666__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var move_down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570));
var active_uuid = cljs.core.uuid(active_id);
var over_uuid = cljs.core.uuid(over_id);
var active = cljs.core.some((function (p1__45662_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__45662_SHARP_))){
return p1__45662_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property));
var choices = logseq.db.sort_by_order(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45663_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__45663_SHARP_));
}),new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property)));
var over = cljs.core.some((function (p1__45664_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(over_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__45664_SHARP_))){
return p1__45664_SHARP_;
} else {
return null;
}
}),choices);
var over_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,choice){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(over_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(choice))){
return idx;
} else {
return null;
}
}),choices));
var over_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(over);
var new_order = ((move_down_QMARK_)?(function (){var next_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(choices,(over_index + (1)),null));
return logseq.db.common.order.gen_key(over_order,next_order);
})():(function (){var prev_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(choices,(over_index - (1)),null));
return logseq.db.common.order.gen_key(prev_order,over_order);
})());
return frontend.components.property.config._LT_worker_transact_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(active),new cljs.core.Keyword("block","order","block/order",-1429282437),new_order], null),logseq.outliner.core.block_with_updated_at(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
});
frontend.components.property.config.__GT_choice_item = (function frontend$components$property$config$__GT_choice_item(property,owner_block,opts,block){
var id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"value","value",305978217),id,new cljs.core.Keyword(null,"content","content",15833224),frontend.components.property.config.choice_item_content(property,block,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933),owner_block))], null);
});
frontend.components.property.config.choices_sub_pane = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$choices_sub_pane(property,p__45667){
var map__45668 = p__45667;
var map__45668__$1 = cljs.core.__destructure_map(map__45668);
var opts = map__45668__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45668__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var owner_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45668__$1,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933));
var _STAR_show_hidden_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var vec__45669 = logseq.shui.hooks.use_atom(_STAR_show_hidden_QMARK_);
var show_hidden_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45669,(0),null);
var map__45672 = frontend.components.property.config.resolve_owner_class_block(owner_block);
var map__45672__$1 = cljs.core.__destructure_map(map__45672);
var owner_class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45672__$1,new cljs.core.Keyword(null,"owner-class?","owner-class?",-954417145));
var owner_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45672__$1,new cljs.core.Keyword(null,"owner-id","owner-id",-58940392));
var choices = (function (){var or__5142__auto__ = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property-choices","property-choices",1622250713),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.vec(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property));
}
})();
var property_with_choices = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(property,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952),choices);
var scoped_choices = logseq.db.frontend.property.scoped_closed_values.cljs$core$IFn$_invoke$arity$variadic(property_with_choices,owner_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),choices], null)], 0));
var scoped_from_other_tags = frontend.components.property.config.scoped_choices_from_other_tags(choices,owner_id);
var excluded_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","choice-exclusions","logseq.property/choice-exclusions",1233522946).cljs$core$IFn$_invoke$arity$1(owner_block)));
var hidden_excluded_choices = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.components.property.config.hidden_excluded_choice_QMARK_,excluded_ids),scoped_choices);
var hidden_choices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(hidden_excluded_choices,scoped_from_other_tags);
var visible_choices = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.components.property.config.hidden_excluded_choice_QMARK_,excluded_ids),scoped_choices);
var list_choices = (cljs.core.truth_(show_hidden_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(visible_choices,hidden_choices):visible_choices);
var choice_items = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(frontend.components.property.config.__GT_choice_item,property_with_choices,owner_block,opts),list_choices);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-dropdown.ls-property-choices-sub-pane","div.ls-property-dropdown.ls-property-choices-sub-pane",-1427300410),((cljs.core.seq(scoped_choices))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(hidden_choices);
if(and__5140__auto__){
return owner_class_QMARK_;
} else {
return and__5140__auto__;
}
})())?(function (){var G__45673 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_show_hidden_QMARK_,cljs.core.not);
})], null);
var G__45674 = (cljs.core.truth_(show_hidden_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","hide-hidden-choices","property/hide-hidden-choices",-1077848777)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","show-hidden-choices","property/show-hidden-choices",-1293658435)], 0)));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45673,G__45674) : logseq.shui.ui.button.call(null,G__45673,G__45674));
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.choices-list","ul.choices-list",434220868),frontend.components.dnd.items(choice_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-by-inner-element?","sort-by-inner-element?",235482267),false,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (_,data){
return frontend.components.property.config.on_choice_drag_end(property_with_choices,data);
})], null))], null),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null))], null):null),(cljs.core.truth_(disabled_QMARK_)?null:frontend.components.property.config.add_choice_menuitem(property_with_choices,owner_block))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$choices_sub_pane__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45675 = cljs.core.first(args__31746__auto__);
var G__45676 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45675,G__45676) : io.factorhouse.hsx.core.obj_get.call(null,G__45675,G__45676));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"choices-sub-pane","choices-sub-pane",1786952206,null),args__31746__auto__),frontend$components$property$config$choices_sub_pane,args__31746__auto__,null);
}
};
var frontend$components$property$config$choices_sub_pane = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45771__i = 0, G__45771__a = new Array(arguments.length -  0);
while (G__45771__i < G__45771__a.length) {G__45771__a[G__45771__i] = arguments[G__45771__i + 0]; ++G__45771__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45771__a,0,null);
} 
return frontend$components$property$config$choices_sub_pane__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$choices_sub_pane.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$choices_sub_pane.cljs$lang$applyTo = (function (arglist__45772){
var args__31746__auto__ = cljs.core.seq(arglist__45772);
return frontend$components$property$config$choices_sub_pane__delegate(args__31746__auto__);
});
frontend$components$property$config$choices_sub_pane.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$choices_sub_pane__delegate;
return frontend$components$property$config$choices_sub_pane;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45677 = comp__31745__auto__;
var G__45678 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45677,G__45678) : io.factorhouse.hsx.core.react_memo.call(null,G__45677,G__45678));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"choices-sub-pane");

return comp__31745__auto__;
})();
frontend.components.property.config.checkbox_state_mapping = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$checkbox_state_mapping(choices){
var select_cp = (function (opts){
var G__45679 = opts;
var G__45680 = (function (){var G__45682 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-8"], null);
var G__45683 = (function (){var G__45684 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","select-choice","property/select-choice",-1956774484)], 0))], null);
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__45684) : logseq.shui.ui.select_value.call(null,G__45684));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__45682,G__45683) : logseq.shui.ui.select_trigger.call(null,G__45682,G__45683));
})();
var G__45681 = (function (){var G__45685 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (choice){
var G__45686 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice))),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice)], null);
var G__45687 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(choice);
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__45686,G__45687) : logseq.shui.ui.select_item.call(null,G__45686,G__45687));
}),choices);
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1(G__45685) : logseq.shui.ui.select_content.call(null,G__45685));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__45679,G__45680,G__45681) : logseq.shui.ui.select.call(null,G__45679,G__45680,G__45681));
});
var checked_choice = cljs.core.some((function (choice){
if(new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863).cljs$core$IFn$_invoke$arity$1(choice) === true){
return choice;
} else {
return null;
}
}),choices);
var unchecked_choice = cljs.core.some((function (choice){
if(new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863).cljs$core$IFn$_invoke$arity$1(choice) === false){
return choice;
} else {
return null;
}
}),choices);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.text-sm.p-2","div.flex.flex-col.gap-4.text-sm.p-2",-29899571),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","map-unchecked-to","property/map-unchecked-to",542161787)], 0))], null),select_cp((function (){var G__45688 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (value){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.set_block_property_BANG_(value,new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863),false)),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_(unchecked_choice)?frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(unchecked_choice),new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863)):null));
}));
}));
})], null);
if(cljs.core.truth_(unchecked_choice)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45688,new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(unchecked_choice));
} else {
return G__45688;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2","div.mt-2",-701876875),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","map-checked-to","property/map-checked-to",265458647)], 0))], null),select_cp((function (){var G__45689 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (value){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.set_block_property_BANG_(value,new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863),true)),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_(checked_choice)?frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(checked_choice),new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863)):null));
}));
}));
})], null);
if(cljs.core.truth_(checked_choice)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45689,new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(checked_choice));
} else {
return G__45689;
}
})())], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$checkbox_state_mapping__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45690 = cljs.core.first(args__31746__auto__);
var G__45691 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45690,G__45691) : io.factorhouse.hsx.core.obj_get.call(null,G__45690,G__45691));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"checkbox-state-mapping","checkbox-state-mapping",-919876409,null),args__31746__auto__),frontend$components$property$config$checkbox_state_mapping,args__31746__auto__,null);
}
};
var frontend$components$property$config$checkbox_state_mapping = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45773__i = 0, G__45773__a = new Array(arguments.length -  0);
while (G__45773__i < G__45773__a.length) {G__45773__a[G__45773__i] = arguments[G__45773__i + 0]; ++G__45773__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45773__a,0,null);
} 
return frontend$components$property$config$checkbox_state_mapping__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$checkbox_state_mapping.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$checkbox_state_mapping.cljs$lang$applyTo = (function (arglist__45774){
var args__31746__auto__ = cljs.core.seq(arglist__45774);
return frontend$components$property$config$checkbox_state_mapping__delegate(args__31746__auto__);
});
frontend$components$property$config$checkbox_state_mapping.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$checkbox_state_mapping__delegate;
return frontend$components$property$config$checkbox_state_mapping;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45692 = comp__31745__auto__;
var G__45693 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45692,G__45693) : io.factorhouse.hsx.core.react_memo.call(null,G__45692,G__45693));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"checkbox-state-mapping");

return comp__31745__auto__;
})();
frontend.components.property.config.position_labels = (function frontend$components$property$config$position_labels(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"layout-distribute-horizontal","layout-distribute-horizontal",2032118826),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","ui-position-properties","property/ui-position-properties",-8439179)], 0))], null),new cljs.core.Keyword(null,"block-left","block-left",-1266158554),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"layout-align-right","layout-align-right",303903846),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","ui-position-block-left","property/ui-position-block-left",1106646732)], 0))], null),new cljs.core.Keyword(null,"block-right","block-right",-1578897705),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"layout-align-left","layout-align-left",630094119),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","ui-position-block-right","property/ui-position-block-right",1884829411)], 0))], null),new cljs.core.Keyword(null,"block-below","block-below",1808846787),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"layout-align-top","layout-align-top",735656807),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","ui-position-block-below","property/ui-position-block-below",495811090)], 0))], null)], null);
});
frontend.components.property.config.ui_position_sub_pane = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$ui_position_sub_pane(property,p__45694){
var map__45695 = p__45694;
var map__45695__$1 = cljs.core.__destructure_map(map__45695);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45695__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var set_sub_open_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45695__$1,new cljs.core.Keyword(null,"set-sub-open!","set-sub-open!",-2053118824));
var _ui_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45695__$1,new cljs.core.Keyword(null,"_ui-position","_ui-position",1799231441));
var handle_select_BANG_ = (function (e){
var temp__5825__auto__ = (function (){var G__45696 = e.target;
var G__45696__$1 = (((G__45696 == null))?null:G__45696.dataset);
if((G__45696__$1 == null)){
return null;
} else {
return G__45696__$1.value;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var v = temp__5825__auto__;
frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","ui-position","logseq.property/ui-position",1869200864),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v));

(set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_sub_open_BANG_.call(null,false));

return frontend.components.property.config.restore_root_highlight_item_BANG_(id);
} else {
return null;
}
});
var item_props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle_select_BANG_], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-dropdown.ls-property-ui-position-sub-pane","div.ls-property-dropdown.ls-property-ui-position-sub-pane",-1928370177),(function (){var iter__5628__auto__ = (function frontend$components$property$config$ui_position_sub_pane_$_iter__45697(s__45698){
return (new cljs.core.LazySeq(null,(function (){
var s__45698__$1 = s__45698;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45698__$1);
if(temp__5825__auto__){
var s__45698__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45698__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45698__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45700 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45699 = (0);
while(true){
if((i__45699 < size__5627__auto__)){
var vec__45701 = cljs.core._nth(c__5626__auto__,i__45699);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45701,(1),null);
cljs.core.chunk_append(b__45700,(function (){var item_props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item_props,new cljs.core.Keyword(null,"data-value","data-value",-1897915206),k);
return frontend.components.property.config.dropdown_editor_menuitem(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"item-props","item-props",-1762062444),item_props__$1));
})());

var G__45775 = (i__45699 + (1));
i__45699 = G__45775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45700),frontend$components$property$config$ui_position_sub_pane_$_iter__45697(cljs.core.chunk_rest(s__45698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45700),null);
}
} else {
var vec__45704 = cljs.core.first(s__45698__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45704,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45704,(1),null);
return cljs.core.cons((function (){var item_props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item_props,new cljs.core.Keyword(null,"data-value","data-value",-1897915206),k);
return frontend.components.property.config.dropdown_editor_menuitem(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"item-props","item-props",-1762062444),item_props__$1));
})(),frontend$components$property$config$ui_position_sub_pane_$_iter__45697(cljs.core.rest(s__45698__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.components.property.config.position_labels());
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$ui_position_sub_pane__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45707 = cljs.core.first(args__31746__auto__);
var G__45708 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45707,G__45708) : io.factorhouse.hsx.core.obj_get.call(null,G__45707,G__45708));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"ui-position-sub-pane","ui-position-sub-pane",1549060325,null),args__31746__auto__),frontend$components$property$config$ui_position_sub_pane,args__31746__auto__,null);
}
};
var frontend$components$property$config$ui_position_sub_pane = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45776__i = 0, G__45776__a = new Array(arguments.length -  0);
while (G__45776__i < G__45776__a.length) {G__45776__a[G__45776__i] = arguments[G__45776__i + 0]; ++G__45776__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45776__a,0,null);
} 
return frontend$components$property$config$ui_position_sub_pane__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$ui_position_sub_pane.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$ui_position_sub_pane.cljs$lang$applyTo = (function (arglist__45777){
var args__31746__auto__ = cljs.core.seq(arglist__45777);
return frontend$components$property$config$ui_position_sub_pane__delegate(args__31746__auto__);
});
frontend$components$property$config$ui_position_sub_pane.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$ui_position_sub_pane__delegate;
return frontend$components$property$config$ui_position_sub_pane;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45709 = comp__31745__auto__;
var G__45710 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45709,G__45710) : io.factorhouse.hsx.core.react_memo.call(null,G__45709,G__45710));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"ui-position-sub-pane");

return comp__31745__auto__;
})();
frontend.components.property.config.property_type_label = (function frontend$components$property$config$property_type_label(property_type){
var G__45711 = property_type;
var G__45711__$1 = (((G__45711 instanceof cljs.core.Keyword))?G__45711.fqn:null);
switch (G__45711__$1) {
case "default":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-text","property/type-text",-2109286815)], 0));

break;
case "number":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-number","property/type-number",-1800856723)], 0));

break;
case "date":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-date","property/type-date",993646056)], 0));

break;
case "datetime":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-datetime","property/type-datetime",-852720641)], 0));

break;
case "checkbox":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-checkbox","property/type-checkbox",966095270)], 0));

break;
case "url":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-url","property/type-url",34363263)], 0));

break;
case "node":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-node","property/type-node",-851482683)], 0));

break;
case "asset":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-asset","property/type-asset",-1812896156)], 0));

break;
default:
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,cljs.core.name)(property_type);

}
});
/**
 * Confirm dialog body when removing a property from a node or tag schema.
 */
frontend.components.property.config.delete_property_from_owner_confirm_content = (function frontend$components$property$config$delete_property_from_owner_confirm_content(property,p__45712){
var map__45713 = p__45712;
var map__45713__$1 = cljs.core.__destructure_map(map__45713);
var class_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45713__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900));
var property_name = logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t);
if(cljs.core.truth_(class_schema_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","delete-from-tag-confirm","property/delete-from-tag-confirm",698685440),property_name], 0))], null);
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","delete-from-node-confirm","property/delete-from-node-confirm",-1076482974),property_name], 0));
}
});
frontend.components.property.config.handle_delete_property_BANG_ = (function frontend$components$property$config$handle_delete_property_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___45779 = arguments.length;
var i__5877__auto___45780 = (0);
while(true){
if((i__5877__auto___45780 < len__5876__auto___45779)){
args__5882__auto__.push((arguments[i__5877__auto___45780]));

var G__45781 = (i__5877__auto___45780 + (1));
i__5877__auto___45780 = G__45781;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.components.property.config.handle_delete_property_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.components.property.config.handle_delete_property_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block,property,p__45717){
var map__45718 = p__45717;
var map__45718__$1 = cljs.core.__destructure_map(map__45718);
var class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45718__$1,new cljs.core.Keyword(null,"class?","class?",385834571));
var class_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45718__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900));
var class_QMARK___$1 = (function (){var or__5142__auto__ = class_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.entity.class_QMARK_(block);
}
})();
var remove_BANG_ = (function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = class_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return class_schema_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.db_based.property.class_remove_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
} else {
return frontend.handler.property.remove_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
}
});
var confirm_content = frontend.components.property.config.delete_property_from_owner_confirm_content(property,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),(function (){var and__5140__auto__ = class_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return class_schema_QMARK_;
} else {
return and__5140__auto__;
}
})()], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = class_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return class_schema_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__45719 = confirm_content;
var G__45720 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"delete-property-from-class","delete-property-from-class",-642796606),new cljs.core.Keyword(null,"data-reminder","data-reminder",1296338874),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"data-reminder-label","data-reminder-label",149396844),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","dont-remind-me-again","ui/dont-remind-me-again",-993434342)], 0)),new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__45719,G__45720) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__45719,G__45720));
})(),remove_BANG_);
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__45721 = confirm_content;
var G__45722 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"delete-property-from-node","delete-property-from-node",1320027558),new cljs.core.Keyword(null,"data-reminder","data-reminder",1296338874),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"data-reminder-label","data-reminder-label",149396844),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","dont-remind-me-again","ui/dont-remind-me-again",-993434342)], 0)),new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__45721,G__45722) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__45721,G__45722));
})(),remove_BANG_);
}
}));

(frontend.components.property.config.handle_delete_property_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.components.property.config.handle_delete_property_BANG_.cljs$lang$applyTo = (function (seq45714){
var G__45715 = cljs.core.first(seq45714);
var seq45714__$1 = cljs.core.next(seq45714);
var G__45716 = cljs.core.first(seq45714__$1);
var seq45714__$2 = cljs.core.next(seq45714__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45715,G__45716,seq45714__$2);
}));

frontend.components.property.config.property_type_sub_pane = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$property_type_sub_pane(property,p__45723){
var map__45724 = p__45723;
var map__45724__$1 = cljs.core.__destructure_map(map__45724);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45724__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var set_sub_open_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45724__$1,new cljs.core.Keyword(null,"set-sub-open!","set-sub-open!",-2053118824));
var _position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45724__$1,new cljs.core.Keyword(null,"_position","_position",-1032999486));
var handle_select_BANG_ = (function (e){
var temp__5825__auto__ = (function (){var G__45725 = e.currentTarget;
var G__45725__$1 = (((G__45725 == null))?null:G__45725.dataset);
if((G__45725__$1 == null)){
return null;
} else {
return G__45725__$1.value;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var v = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.upsert_property_BANG_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v)], null),cljs.core.PersistentArrayMap.EMPTY)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sub_open_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_sub_open_BANG_.call(null,false))),(function (___21901__auto____$1){
return promesa.protocols._promise(frontend.components.property.config.restore_root_highlight_item_BANG_(id));
}));
}));
}));
} else {
return null;
}
});
var item_props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle_select_BANG_], null);
var schema_types = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (type){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.property.config.property_type_label(type),new cljs.core.Keyword(null,"value","value",305978217),type], null);
}),logseq.db.frontend.property.type.user_built_in_property_types);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-dropdown.ls-property-type-sub-pane","div.ls-property-dropdown.ls-property-type-sub-pane",-1494397310),(function (){var iter__5628__auto__ = (function frontend$components$property$config$property_type_sub_pane_$_iter__45726(s__45727){
return (new cljs.core.LazySeq(null,(function (){
var s__45727__$1 = s__45727;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45727__$1);
if(temp__5825__auto__){
var s__45727__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45727__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45727__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45729 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45728 = (0);
while(true){
if((i__45728 < size__5627__auto__)){
var map__45730 = cljs.core._nth(c__5626__auto__,i__45728);
var map__45730__$1 = cljs.core.__destructure_map(map__45730);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45730__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45730__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.chunk_append(b__45729,(function (){var option = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),label,new cljs.core.Keyword(null,"title","title",636505583),label,new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"item-props","item-props",-1762062444),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item_props,new cljs.core.Keyword(null,"data-value","data-value",-1897915206),value)], null);
return frontend.components.property.config.dropdown_editor_menuitem(option);
})());

var G__45782 = (i__45728 + (1));
i__45728 = G__45782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45729),frontend$components$property$config$property_type_sub_pane_$_iter__45726(cljs.core.chunk_rest(s__45727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45729),null);
}
} else {
var map__45731 = cljs.core.first(s__45727__$2);
var map__45731__$1 = cljs.core.__destructure_map(map__45731);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45731__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45731__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.cons((function (){var option = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),label,new cljs.core.Keyword(null,"title","title",636505583),label,new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"item-props","item-props",-1762062444),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item_props,new cljs.core.Keyword(null,"data-value","data-value",-1897915206),value)], null);
return frontend.components.property.config.dropdown_editor_menuitem(option);
})(),frontend$components$property$config$property_type_sub_pane_$_iter__45726(cljs.core.rest(s__45727__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(schema_types);
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$property_type_sub_pane__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45732 = cljs.core.first(args__31746__auto__);
var G__45733 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45732,G__45733) : io.factorhouse.hsx.core.obj_get.call(null,G__45732,G__45733));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-type-sub-pane","property-type-sub-pane",934478635,null),args__31746__auto__),frontend$components$property$config$property_type_sub_pane,args__31746__auto__,null);
}
};
var frontend$components$property$config$property_type_sub_pane = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45783__i = 0, G__45783__a = new Array(arguments.length -  0);
while (G__45783__i < G__45783__a.length) {G__45783__a[G__45783__i] = arguments[G__45783__i + 0]; ++G__45783__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45783__a,0,null);
} 
return frontend$components$property$config$property_type_sub_pane__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$property_type_sub_pane.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$property_type_sub_pane.cljs$lang$applyTo = (function (arglist__45784){
var args__31746__auto__ = cljs.core.seq(arglist__45784);
return frontend$components$property$config$property_type_sub_pane__delegate(args__31746__auto__);
});
frontend$components$property$config$property_type_sub_pane.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$property_type_sub_pane__delegate;
return frontend$components$property$config$property_type_sub_pane;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45734 = comp__31745__auto__;
var G__45735 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45734,G__45735) : io.factorhouse.hsx.core.react_memo.call(null,G__45734,G__45735));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-type-sub-pane");

return comp__31745__auto__;
})();
frontend.components.property.config.default_value_subitem = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$default_value_subitem(property){
var property_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var option = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),property_type))?(function (){var default_value = new cljs.core.Keyword("logseq.property","scalar-default-value","logseq.property/scalar-default-value",1595723014).cljs$core$IFn$_invoke$arity$1(property);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"settings-2","settings-2",-602252974),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","default-value","property/default-value",1357185989)], 0)),new cljs.core.Keyword(null,"toggle-checked?","toggle-checked?",1549681434),cljs.core.boolean$(default_value),new cljs.core.Keyword(null,"checkbox?","checkbox?",2007099436),true,new cljs.core.Keyword(null,"on-toggle-checked-change","on-toggle-checked-change",644403327),(function (checked_QMARK_){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","scalar-default-value","logseq.property/scalar-default-value",1595723014),checked_QMARK_);
})], null);
})():(function (){var default_value = new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(property);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"settings-2","settings-2",-602252974),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","default-value","property/default-value",1357185989)], 0)),new cljs.core.Keyword(null,"desc","desc",2093485764),(cljs.core.truth_(default_value)?logseq.db.frontend.property.property_value_content(default_value):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-value","property/set-value",1469562403)], 0))),new cljs.core.Keyword(null,"submenu-content","submenu-content",-1896531140),(function (){
return frontend.components.property.default_value.default_value_config(property);
})], null);
})());
return frontend.components.property.config.dropdown_editor_menuitem(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),frontend.config.publishing_QMARK_));
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$default_value_subitem__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45736 = cljs.core.first(args__31746__auto__);
var G__45737 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45736,G__45737) : io.factorhouse.hsx.core.obj_get.call(null,G__45736,G__45737));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"default-value-subitem","default-value-subitem",-1328610646,null),args__31746__auto__),frontend$components$property$config$default_value_subitem,args__31746__auto__,null);
}
};
var frontend$components$property$config$default_value_subitem = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45785__i = 0, G__45785__a = new Array(arguments.length -  0);
while (G__45785__i < G__45785__a.length) {G__45785__a[G__45785__i] = arguments[G__45785__i + 0]; ++G__45785__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45785__a,0,null);
} 
return frontend$components$property$config$default_value_subitem__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$default_value_subitem.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$default_value_subitem.cljs$lang$applyTo = (function (arglist__45786){
var args__31746__auto__ = cljs.core.seq(arglist__45786);
return frontend$components$property$config$default_value_subitem__delegate(args__31746__auto__);
});
frontend$components$property$config$default_value_subitem.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$default_value_subitem__delegate;
return frontend$components$property$config$default_value_subitem;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45738 = comp__31745__auto__;
var G__45739 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45738,G__45739) : io.factorhouse.hsx.core.react_memo.call(null,G__45738,G__45739));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"default-value-subitem");

return comp__31745__auto__;
})();
/**
 * property: block entity
 */
frontend.components.property.config.property_dropdown_options = (function frontend$components$property$config$property_dropdown_options(property,owner_block,values,p__45741){
var map__45742 = p__45741;
var map__45742__$1 = cljs.core.__destructure_map(map__45742);
var class_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45742__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900));
var debug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45742__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));
var with_title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45742__$1,new cljs.core.Keyword(null,"with-title?","with-title?",-1110963321),true);
var more_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45742__$1,new cljs.core.Keyword(null,"more-options","more-options",1399478268));
var title = logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t);
var property_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var property_type_label_SINGLEQUOTE_ = (function (){var G__45743 = property_type;
if((G__45743 == null)){
return null;
} else {
return frontend.components.property.config.property_type_label(G__45743);
}
})();
var enable_closed_values_QMARK_ = cljs.core.contains_QMARK_(logseq.db.frontend.property.type.closed_value_property_types,(function (){var or__5142__auto__ = property_type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var icon = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(property);
var icon__$1 = (cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.float-left.w-4.h-4.overflow-hidden.leading-4.relative","span.float-left.w-4.h-4.overflow-hidden.leading-4.relative",2244377),frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null)], 0))], null):null);
var built_in_QMARK_ = (logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(property) : logseq.db.built_in_QMARK_.call(null,property));
var disabled_QMARK_ = (function (){var or__5142__auto__ = built_in_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.config.publishing_QMARK_;
}
})();
var class_schema_QMARK___$1 = (function (){var and__5140__auto__ = frontend.util.entity.class_QMARK_(owner_block);
if(cljs.core.truth_(and__5140__auto__)){
return class_schema_QMARK_;
} else {
return and__5140__auto__;
}
})();
var special_built_in_prop_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null,new cljs.core.Keyword("block","tags","block/tags",1814948340),null,new cljs.core.Keyword("block","title","block/title",710445684),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more_options,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(with_title_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.px-2.py-2.opacity-80.flex.items-center.gap-1","h3.px-2.py-2.opacity-80.flex.items-center.gap-1",505420547),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","configure","property/configure",-1448681573)], 0))], null):null),((special_built_in_prop_QMARK_)?null:frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"pencil","pencil",-217778832),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","name","property/name",563715604)], 0)),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),icon__$1,title], null),new cljs.core.Keyword(null,"submenu-content","submenu-content",-1896531140),(function (ops){
return frontend.components.property.config.name_edit_pane(property,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ops,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_));
})], null))),(function (){var disabled_QMARK__SINGLEQUOTE_ = (function (){var or__5142__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = property_type;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(values);
} else {
return and__5140__auto__;
}
}
})();
return frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"letter-t","letter-t",-1315844495),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type","property/type",-1706318991)], 0)),new cljs.core.Keyword(null,"desc","desc",2093485764),(cljs.core.truth_(disabled_QMARK__SINGLEQUOTE_)?frontend.ui.tooltip(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_type_label_SINGLEQUOTE_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-96","div.w-96",-1620230049),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-locked-help","property/type-locked-help",1981900748)], 0))], null)):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_type_label_SINGLEQUOTE_))),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK__SINGLEQUOTE_,new cljs.core.Keyword(null,"submenu-content","submenu-content",-1896531140),(function (ops){
return frontend.components.property.config.property_type_sub_pane(property,ops);
})], null));
})(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_type,new cljs.core.Keyword(null,"node","node",581201198))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))))))?frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","specify-node-tags","property/specify-node-tags",2014650463)], 0)),new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"submenu-content","submenu-content",-1896531140),(function (_ops){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4","div.px-4",472594622),frontend.components.property.config.class_select(property,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-open?","default-open?",-2082763144),false], null))], null);
})], null)):null),((((cljs.core.contains_QMARK_(logseq.db.frontend.property.type.default_value_ref_property_types,property_type)) && ((((!(logseq.db.frontend.property.many_QMARK_(property)))) && ((((!(((enable_closed_values_QMARK_) && (cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))))))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","enable-history?","logseq.property/enable-history?",-805859602),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))))))))?frontend.components.property.config.default_value_subitem(property):null),((enable_closed_values_QMARK_)?(function (){var values__$1 = new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property);
return frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","available-choices","property/available-choices",684286352)], 0)),new cljs.core.Keyword(null,"desc","desc",2093485764),((cljs.core.seq(values__$1))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","choices-count","property/choices-count",911584118),cljs.core.count(values__$1)], 0)):null),new cljs.core.Keyword(null,"submenu-content","submenu-content",-1896531140),(function (){
return frontend.components.property.config.choices_sub_pane(property,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"owner-block","owner-block",1197987933),owner_block,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),class_schema_QMARK___$1], null));
})], null));
})():null),((enable_closed_values_QMARK_)?(function (){var values__$1 = new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property);
if((cljs.core.count(values__$1) >= (2))){
return frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","checkbox-state-mapping","property/checkbox-state-mapping",582034507)], 0)),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"submenu-content","submenu-content",-1896531140),(function (){
return frontend.components.property.config.checkbox_state_mapping(values__$1);
})], null));
} else {
return null;
}
})():null),((((cljs.core.contains_QMARK_(logseq.db.frontend.property.type.cardinality_property_types,property_type)) && (cljs.core.not(disabled_QMARK_))))?(function (){var many_QMARK_ = logseq.db.frontend.property.many_QMARK_(property);
return frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"checks","checks",526134637),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","multiple-values","property/multiple-values",-993933271)], 0)),new cljs.core.Keyword(null,"toggle-checked?","toggle-checked?",1549681434),many_QMARK_,new cljs.core.Keyword(null,"on-toggle-checked-change","on-toggle-checked-change",644403327),(function (checked_QMARK_){
var update_cardinality_fn = (function (){
return frontend.handler.db_based.property.upsert_property_BANG_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),(cljs.core.truth_(checked_QMARK_)?new cljs.core.Keyword(null,"many","many",1092119164):new cljs.core.Keyword(null,"one","one",935007904))], null),cljs.core.PersistentArrayMap.EMPTY);
});
if(((cljs.core.seq(values)) && ((!(many_QMARK_))))){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__45744 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","multiple-values-confirm","property/multiple-values-confirm",604981992)], 0));
var G__45745 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__45744,G__45745) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__45744,G__45745));
})(),update_cardinality_fn);
} else {
return update_cardinality_fn();
}
})], null));
})():null),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","enable-history?","logseq.property/enable-history?",-805859602),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))) && ((!(special_built_in_prop_QMARK_)))))?(function (){var property_type__$1 = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var group_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),null,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))))) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"node","node",581201198),null], null), null),property_type__$1)) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),property_type__$1)) && (((cljs.core.empty_QMARK_(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"properties","properties",685819552),null], null), null),new cljs.core.Keyword("logseq.property","ui-position","logseq.property/ui-position",1869200864).cljs$core$IFn$_invoke$arity$1(property)))))))))))))?(function (){var position = new cljs.core.Keyword("logseq.property","ui-position","logseq.property/ui-position",1869200864).cljs$core$IFn$_invoke$arity$1(property);
return frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"float-left","float-left",915788932),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","ui-position","property/ui-position",-105630749)], 0)),new cljs.core.Keyword(null,"desc","desc",2093485764),(function (){var G__45746 = frontend.components.property.config.position_labels();
var G__45746__$1 = (((G__45746 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__45746,position));
if((G__45746__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(G__45746__$1);
}
})(),new cljs.core.Keyword(null,"item-props","item-props",-1762062444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui__position-trigger-item"], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"submenu-content","submenu-content",-1896531140),(function (ops){
return frontend.components.property.config.ui_position_sub_pane(property,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ops,new cljs.core.Keyword(null,"ui-position","ui-position",1013600792),position));
})], null));
})():null),(((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),null,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))))?frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"eye-off","eye-off",-2132727922),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","hide-by-default","property/hide-by-default",-1856939622)], 0)),new cljs.core.Keyword(null,"toggle-checked?","toggle-checked?",1549681434),cljs.core.boolean$(new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746).cljs$core$IFn$_invoke$arity$1(property)),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"on-toggle-checked-change","on-toggle-checked-change",644403327),(function (p1__45740_SHARP_){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746),p1__45740_SHARP_);
})], null)):null),(((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),null,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))))?frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"eye-off","eye-off",-2132727922),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","hide-empty-value","property/hide-empty-value",-518323616)], 0)),new cljs.core.Keyword(null,"toggle-checked?","toggle-checked?",1549681434),cljs.core.boolean$(new cljs.core.Keyword("logseq.property","hide-empty-value","logseq.property/hide-empty-value",2062325899).cljs$core$IFn$_invoke$arity$1(property)),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"on-toggle-checked-change","on-toggle-checked-change",644403327),(function (checked_QMARK_){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","hide-empty-value","logseq.property/hide-empty-value",2062325899),checked_QMARK_);
})], null)):null)], null));
if((cljs.core.count(group_SINGLEQUOTE_) > (0))){
return cljs.core.cons((logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),group_SINGLEQUOTE_);
} else {
return null;
}
})():null),(cljs.core.truth_((function (){var and__5140__auto__ = owner_block;
if(cljs.core.truth_(and__5140__auto__)){
return (!(special_built_in_prop_QMARK_));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"share-3","share-3",221428101),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","go-to-this-property","property/go-to-this-property",-647469006)], 0)),new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"item-props","item-props",-1762062444),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-90 focus:opacity-100",new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (){
(logseq.shui.ui.popup_hide_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_all_BANG_.call(null));

return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property));
})], null)], null))], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = enable_closed_values_QMARK_;
if(and__5140__auto__){
return owner_block;
} else {
return and__5140__auto__;
}
})())?(function (){var values__$1 = new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property);
if((cljs.core.count(values__$1) >= (2))){
var checked_QMARK_ = cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","checkbox-display-properties","logseq.property/checkbox-display-properties",-321532569).cljs$core$IFn$_invoke$arity$1(owner_block))),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
return frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(class_schema_QMARK___$1)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","show-as-checkbox-on-tagged-nodes","property/show-as-checkbox-on-tagged-nodes",1230676848)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","show-as-checkbox-on-node","property/show-as-checkbox-on-node",-99020518)], 0))),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"desc","desc",2093485764),(cljs.core.truth_(owner_block)?(function (){var G__45747 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"show as checkbox",new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (value){
if(cljs.core.truth_(value)){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(owner_block),new cljs.core.Keyword("logseq.property","checkbox-display-properties","logseq.property/checkbox-display-properties",-321532569),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
} else {
return frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(owner_block),new cljs.core.Keyword("logseq.property","checkbox-display-properties","logseq.property/checkbox-display-properties",-321532569),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
}
})], null);
return (logseq.shui.ui.switch$.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.switch$.cljs$core$IFn$_invoke$arity$1(G__45747) : logseq.shui.ui.switch$.call(null,G__45747));
})():null)], null));
} else {
return null;
}
})():null),(cljs.core.truth_((function (){var and__5140__auto__ = owner_block;
if(cljs.core.truth_(and__5140__auto__)){
if(cljs.core.truth_(class_schema_QMARK___$1)){
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1(owner_block))),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),null,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))));
}
} else {
return and__5140__auto__;
}
})())?frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"delete-property","delete-property",-1427299768),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(class_schema_QMARK___$1)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","delete-from-tag","property/delete-from-tag",-1999894884)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","delete-from-node","property/delete-from-node",-778664286)], 0))),new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false,new cljs.core.Keyword(null,"item-props","item-props",-1762062444),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-60 focus:!text-red-rx-09 focus:opacity-100",new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (e){
frontend.util.stop(e);

(logseq.shui.ui.popup_hide_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_all_BANG_.call(null));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.components.property.config.handle_delete_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(owner_block,property,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),class_schema_QMARK___$1], null)], 0)),(function (){
return null;
}));
})], null)], null)):null),(cljs.core.truth_(debug_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),frontend.components.property.config.dropdown_editor_menuitem(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"bug","bug",51265549),new cljs.core.Keyword(null,"title","title",636505583),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))),new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false,new cljs.core.Keyword(null,"item-props","item-props",-1762062444),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-60 focus:opacity-100 focus:!text-red-rx-08",new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (){
frontend.handler.common.developer.show_entity_data(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null)], null))], null):null)], null)));
});
frontend.components.property.config.property_dropdown_from_entity = (function (){var render_fn__31744__auto__ = (function frontend$components$property$config$property_dropdown_from_entity(property_STAR_,owner_block,opts){
var _STAR_values = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loading","loading",-737050189));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property_STAR_)], null));
var vec__45748 = logseq.shui.hooks.use_atom(_STAR_values);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45748,(0),null);
var property = frontend.db.hooks.use_block(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property_STAR_));
var owner_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(owner_block);
var owner_or_property = frontend.db.hooks.use_block((function (){var or__5142__auto__ = owner_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property_STAR_);
}
})());
var owner_block__$1 = (cljs.core.truth_(owner_uuid)?owner_or_property:null);
logseq.shui.hooks.use_effect_BANG_((function (){
cljs.core.reset_BANG_(_STAR_values,new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_property_values(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property_STAR_))),(function (result){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_values,result));
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property_STAR_)], null));

if(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),values);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.components.property.config.with_react_key,"property-dropdown")),frontend.components.property.config.property_dropdown_options(property,owner_block__$1,values,opts));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$config$property_dropdown_from_entity__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45751 = cljs.core.first(args__31746__auto__);
var G__45752 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45751,G__45752) : io.factorhouse.hsx.core.obj_get.call(null,G__45751,G__45752));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-dropdown-from-entity","property-dropdown-from-entity",-6248123,null),args__31746__auto__),frontend$components$property$config$property_dropdown_from_entity,args__31746__auto__,null);
}
};
var frontend$components$property$config$property_dropdown_from_entity = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45787__i = 0, G__45787__a = new Array(arguments.length -  0);
while (G__45787__i < G__45787__a.length) {G__45787__a[G__45787__i] = arguments[G__45787__i + 0]; ++G__45787__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45787__a,0,null);
} 
return frontend$components$property$config$property_dropdown_from_entity__delegate.call(this,args__31746__auto__);};
frontend$components$property$config$property_dropdown_from_entity.cljs$lang$maxFixedArity = 0;
frontend$components$property$config$property_dropdown_from_entity.cljs$lang$applyTo = (function (arglist__45788){
var args__31746__auto__ = cljs.core.seq(arglist__45788);
return frontend$components$property$config$property_dropdown_from_entity__delegate(args__31746__auto__);
});
frontend$components$property$config$property_dropdown_from_entity.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$config$property_dropdown_from_entity__delegate;
return frontend$components$property$config$property_dropdown_from_entity;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45753 = comp__31745__auto__;
var G__45754 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45753,G__45754) : io.factorhouse.hsx.core.react_memo.call(null,G__45753,G__45754));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-dropdown-from-entity");

return comp__31745__auto__;
})();
frontend.components.property.config.property_dropdown = (function frontend$components$property$config$property_dropdown(property_STAR_,owner_block,opts){
if(cljs.core.uuid_QMARK_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property_STAR_))){
return frontend.components.property.config.property_dropdown_from_entity(property_STAR_,owner_block,opts);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.components.property.config.with_react_key,"property-dropdown")),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"more-options","more-options",1399478268).cljs$core$IFn$_invoke$arity$1(opts)));
}
});

//# sourceMappingURL=frontend.components.property.config.js.map
