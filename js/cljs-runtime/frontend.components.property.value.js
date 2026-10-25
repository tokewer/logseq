goog.provide('frontend.components.property.value');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.property !== 'undefined') && (typeof frontend.components.property.value !== 'undefined') && (typeof frontend.components.property.value.string_value_on_click !== 'undefined')){
} else {
frontend.components.property.value.string_value_on_click = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163),(function (block,property){
if(clojure.string.starts_with_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)),"zotero://")){
return null;
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("asset","dialog-edit-external-url","asset/dialog-edit-external-url",175071068),block], null));
}
})], null);
}
frontend.components.property.value.editor_navigation_trigger_class = "jtrigger";
frontend.components.property.value.property_value_block_container_class = (function frontend$components$property$value$property_value_block_container_class(){
return (""+"property-block-container content w-full "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.property.value.editor_navigation_trigger_class));
});
frontend.components.property.value.editing_navigation_QMARK_ = (function frontend$components$property$value$editing_navigation_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("edit",(function (){var G__44849 = e.currentTarget;
if((G__44849 == null)){
return null;
} else {
return G__44849.getAttribute("data-property-nav-mode");
}
})());
});
frontend.components.property.value.move_property_value_boundary_BANG_ = (function frontend$components$property$value$move_property_value_boundary_BANG_(e,direction){
frontend.util.stop(e);

if(frontend.components.property.value.editing_navigation_QMARK_(e)){
return frontend.handler.editor.move_cross_boundary_up_down(direction,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),null], null));
} else {
return frontend.handler.editor.move_property_focus_up_down(direction);
}
});
frontend.components.property.value.default_value_property_ident_QMARK_ = (function frontend$components$property$value$default_value_property_ident_QMARK_(property){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
});
frontend.components.property.value.property_value_block_container_props = (function frontend$components$property$value$property_value_block_container_props(property){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.components.property.value.property_value_block_container_class(),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.currentTarget,document.activeElement)){
var G__44850 = frontend.util.ekey(e);
switch (G__44850) {
case "ArrowUp":
return frontend.components.property.value.move_property_value_boundary_BANG_(e,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case "ArrowDown":
return frontend.components.property.value.move_property_value_boundary_BANG_(e,new cljs.core.Keyword(null,"down","down",1565245570));

break;
default:
return null;

}
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),((frontend.components.property.value.default_value_property_ident_QMARK_(property))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),(300)], null):cljs.core.PersistentArrayMap.EMPTY)], null);
});
frontend.components.property.value.show_inline_asset_picker_QMARK_ = (function frontend$components$property$value$show_inline_asset_picker_QMARK_(editing_QMARK_,value){
var and__5140__auto__ = editing_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var and__5140__auto____$1 = value;
if(cljs.core.truth_(and__5140__auto____$1)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto____$1;
}
})());
} else {
return and__5140__auto__;
}
});
frontend.components.property.value.entity_map_QMARK_ = (function frontend$components$property$value$entity_map_QMARK_(m){
var and__5140__auto__ = cljs.core.map_QMARK_(m);
if(and__5140__auto__){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(m);
} else {
return and__5140__auto__;
}
});
/**
 * Canonical rows inline empty-placeholder as a shallow identity map.
 *   select-item only painted the dashed icon for the bare keyword.
 */
frontend.components.property.value.empty_placeholder_value_QMARK_ = (function frontend$components$property$value$empty_placeholder_value_QMARK_(value){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837))) || (((cljs.core.map_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837))))));
});
/**
 * Entity maps are colls, so cardinality-many checks must exclude them.
 */
frontend.components.property.value.property_value_collection_QMARK_ = (function frontend$components$property$value$property_value_collection_QMARK_(value){
return ((cljs.core.set_QMARK_(value)) || (((cljs.core.sequential_QMARK_(value)) && ((!(typeof value === 'string'))))));
});
frontend.components.property.value.property_value_empty_for_render_QMARK_ = (function frontend$components$property$value$property_value_empty_for_render_QMARK_(value){
return (((value == null)) || (((frontend.components.property.value.empty_placeholder_value_QMARK_(value)) || (((frontend.components.property.value.property_value_collection_QMARK_(value)) && (((cljs.core.empty_QMARK_(value)) || (cljs.core.every_QMARK_(frontend.components.property.value.empty_placeholder_value_QMARK_,value)))))))));
});
/**
 * Blocks that can be mounted in the property value editor.
 * 
 *   After Backspace on an empty many-valued url/default slot the row can still
 *   contain empty-placeholder, nil, or a snapshot without :block/uuid.
 *   blocks-container throws Invalid block row for those (db-test#1340).
 */
frontend.components.property.value.property_value_blocks = (function frontend$components$property$value$property_value_blocks(value_block){
var items = ((frontend.components.property.value.property_value_collection_QMARK_(value_block))?value_block:((((cljs.core.map_QMARK_(value_block)) || (cljs.core.uuid_QMARK_(value_block))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_block], null):cljs.core.PersistentVector.EMPTY
));
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (item){
if(frontend.components.property.value.empty_placeholder_value_QMARK_(item)){
return null;
} else {
if(cljs.core.uuid_QMARK_(item)){
return item;
} else {
if(((cljs.core.map_QMARK_(item)) && (cljs.core.uuid_QMARK_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item))))){
return item;
} else {
return null;

}
}
}
}),items));
});
/**
 * Show the Set default value trigger only when no value entity exists.
 * 
 *   Canonical snapshots can omit :block/title on a just-created default-value
 *   block. Treating a missing title as unset kept the trigger instead of the
 *   existing block editor.
 */
frontend.components.property.value.unset_default_value_QMARK_ = (function frontend$components$property$value$unset_default_value_QMARK_(property,value){
return ((frontend.components.property.value.default_value_property_ident_QMARK_(property)) && ((((value == null)) || (frontend.components.property.value.empty_placeholder_value_QMARK_(value)))));
});
/**
 * True when the value itself carries closed-choice identity.
 */
frontend.components.property.value.closed_choice_value_QMARK_ = (function frontend$components$property$value$closed_choice_value_QMARK_(value){
return cljs.core.boolean$(((cljs.core.map_QMARK_(value)) && ((((!(frontend.components.property.value.empty_placeholder_value_QMARK_(value)))) && ((!((new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(value) == null))))))));
});
frontend.components.property.value.value__GT_db_id = (function frontend$components$property$value$value__GT_db_id(value){
if(cljs.core.truth_(frontend.components.property.value.entity_map_QMARK_(value))){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
if(cljs.core.integer_QMARK_(value)){
return value;
} else {
return null;

}
}
});
frontend.components.property.value.property_value__GT_ids = (function frontend$components$property$value$property_value__GT_ids(value){
if(((cljs.core.coll_QMARK_(value)) && ((!(cljs.core.map_QMARK_(value)))))){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.components.property.value.value__GT_db_id,value);
} else {
var G__44851 = value;
var G__44851__$1 = (((G__44851 == null))?null:frontend.components.property.value.value__GT_db_id(G__44851));
if((G__44851__$1 == null)){
return null;
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__44851__$1],null));
}
}
});
frontend.components.property.value.property_value_selected_QMARK_ = (function frontend$components$property$value$property_value_selected_QMARK_(property_value,value){
return cljs.core.contains_QMARK_(cljs.core.set(frontend.components.property.value.property_value__GT_ids(property_value)),value);
});
frontend.components.property.value.property_multiple_values_QMARK_ = (function frontend$components$property$value$property_multiple_values_QMARK_(property){
return ((logseq.db.frontend.property.many_QMARK_(property)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("block","tags","block/tags",1814948340))));
});
frontend.components.property.value.property_value_popup_blocked_link_QMARK_ = (function frontend$components$property$value$property_value_popup_blocked_link_QMARK_(target){
var temp__5825__auto__ = (function (){var G__44852 = target;
if((G__44852 == null)){
return null;
} else {
return G__44852.closest("a");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return (!(((dommy.core.has_class_QMARK_(node,"page-ref")) || (dommy.core.has_class_QMARK_(node,"tag")))));
} else {
return null;
}
});
frontend.components.property.value.page_ref_entity_from_event_target = (function frontend$components$property$value$page_ref_entity_from_event_target(target){
var temp__5825__auto__ = (function (){var G__44853 = target;
if((G__44853 == null)){
return null;
} else {
return G__44853.closest("a");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
if(((dommy.core.has_class_QMARK_(node,"page-ref")) || (dommy.core.has_class_QMARK_(node,"tag")))){
var uuid_str = cljs.core.not_empty(node.getAttribute("data-uuid"));
var page_name = cljs.core.not_empty(node.getAttribute("data-ref"));
if(cljs.core.truth_((function (){var or__5142__auto__ = uuid_str;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return page_name;
}
})())){
var G__44854 = cljs.core.PersistentArrayMap.EMPTY;
var G__44854__$1 = (cljs.core.truth_(uuid_str)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44854,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5142__auto__ = cljs.core.parse_uuid(uuid_str);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return uuid_str;
}
})()):G__44854);
if(cljs.core.truth_(page_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44854__$1,new cljs.core.Keyword("block","name","block/name",1619760316),page_name);
} else {
return G__44854__$1;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Handle a table tag/page-ref cell click.
 * Returns :noop when the entity is the current page so we don't flash a popup
 * or re-navigate to the page the user is already on.
 */
frontend.components.property.value.page_ref_cell_click = (function frontend$components$property$value$page_ref_cell_click(p__44855){
var map__44856 = p__44855;
var map__44856__$1 = cljs.core.__destructure_map(map__44856);
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44856__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44856__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var open_popup_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44856__$1,new cljs.core.Keyword(null,"open-popup!","open-popup!",2030305834));
var redirect_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44856__$1,new cljs.core.Keyword(null,"redirect!","redirect!",532589246));
if(frontend.util.page.entity_is_current_page_QMARK_.cljs$core$IFn$_invoke$arity$2(entity,current_page)){
return new cljs.core.Keyword(null,"noop","noop",-673731258);
} else {
if(cljs.core.fn_QMARK_(open_popup_BANG_)){
(open_popup_BANG_.cljs$core$IFn$_invoke$arity$0 ? open_popup_BANG_.cljs$core$IFn$_invoke$arity$0() : open_popup_BANG_.call(null));
} else {
}

if(cljs.core.fn_QMARK_(redirect_BANG_)){
(redirect_BANG_.cljs$core$IFn$_invoke$arity$0 ? redirect_BANG_.cljs$core$IFn$_invoke$arity$0() : redirect_BANG_.call(null));
} else {
}

return new cljs.core.Keyword(null,"open","open",-1763596448);
}
});
frontend.components.property.value.alias_value_on_pointer_down = (function frontend$components$property$value$alias_value_on_pointer_down(property,show_popup_BANG_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("block","alias","block/alias",-2112644699))) && (cljs.core.fn_QMARK_(show_popup_BANG_)))){
return (function (e){
frontend.util.stop(e);

return (show_popup_BANG_.cljs$core$IFn$_invoke$arity$1 ? show_popup_BANG_.cljs$core$IFn$_invoke$arity$1(e) : show_popup_BANG_.call(null,e));
});
} else {
return null;
}
});
frontend.components.property.value.property_empty_btn_value = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$components$property$value$property_empty_btn_value__delegate = function (property,p__44857){
var vec__44858 = p__44857;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44858,(0),null);
var text = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","description","logseq.property/description",-336236200)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","add-description","property/add-description",-2055903227)], 0)):frontend.ui.icon("line-dashed"));
var G__44861 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"empty-btn",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697)], null),(function (){var or__5142__auto__ = opts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
var G__44862 = text;
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__44861,G__44862) : logseq.shui.ui.button.call(null,G__44861,G__44862));
};
var frontend$components$property$value$property_empty_btn_value = function (property,var_args){
var p__44857 = null;
if (arguments.length > 1) {
var G__45377__i = 0, G__45377__a = new Array(arguments.length -  1);
while (G__45377__i < G__45377__a.length) {G__45377__a[G__45377__i] = arguments[G__45377__i + 1]; ++G__45377__i;}
  p__44857 = new cljs.core.IndexedSeq(G__45377__a,0,null);
} 
return frontend$components$property$value$property_empty_btn_value__delegate.call(this,property,p__44857);};
frontend$components$property$value$property_empty_btn_value.cljs$lang$maxFixedArity = 1;
frontend$components$property$value$property_empty_btn_value.cljs$lang$applyTo = (function (arglist__45378){
var property = cljs.core.first(arglist__45378);
var p__44857 = cljs.core.rest(arglist__45378);
return frontend$components$property$value$property_empty_btn_value__delegate(property,p__44857);
});
frontend$components$property$value$property_empty_btn_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_empty_btn_value__delegate;
return frontend$components$property$value$property_empty_btn_value;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$property_empty_btn_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44863 = cljs.core.first(args__31746__auto__);
var G__44864 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44863,G__44864) : io.factorhouse.hsx.core.obj_get.call(null,G__44863,G__44864));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-empty-btn-value","property-empty-btn-value",496980767,null),args__31746__auto__),frontend$components$property$value$property_empty_btn_value,args__31746__auto__,null);
}
};
var frontend$components$property$value$property_empty_btn_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45379__i = 0, G__45379__a = new Array(arguments.length -  0);
while (G__45379__i < G__45379__a.length) {G__45379__a[G__45379__i] = arguments[G__45379__i + 0]; ++G__45379__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45379__a,0,null);
} 
return frontend$components$property$value$property_empty_btn_value__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$property_empty_btn_value.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$property_empty_btn_value.cljs$lang$applyTo = (function (arglist__45380){
var args__31746__auto__ = cljs.core.seq(arglist__45380);
return frontend$components$property$value$property_empty_btn_value__delegate(args__31746__auto__);
});
frontend$components$property$value$property_empty_btn_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_empty_btn_value__delegate;
return frontend$components$property$value$property_empty_btn_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44865 = comp__31745__auto__;
var G__44866 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44865,G__44866) : io.factorhouse.hsx.core.react_memo.call(null,G__44865,G__44866));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-empty-btn-value");

return comp__31745__auto__;
})();
frontend.components.property.value.property_empty_text_value = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$property_empty_text_value(property,p__44867){
var map__44868 = p__44867;
var map__44868__$1 = cljs.core.__destructure_map(map__44868);
var property_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44868__$1,new cljs.core.Keyword(null,"property-position","property-position",-1150084538));
var table_view_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44868__$1,new cljs.core.Keyword(null,"table-view?","table-view?",2073887505));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex.items-center.cursor-pointer.w-full","span.inline-flex.items-center.cursor-pointer.w-full",465775973),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"empty-text-btn",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], 0)),(cljs.core.truth_(table_view_QMARK_)?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_position,new cljs.core.Keyword(null,"block-below","block-below",1808846787)))?frontend.ui.icon("line-dashed"):(function (){var temp__5823__auto__ = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(temp__5823__auto__)){
var icon = temp__5823__auto__;
return frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null)], 0));
} else {
return frontend.ui.icon("line-dashed");
}
})()))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$property_empty_text_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44869 = cljs.core.first(args__31746__auto__);
var G__44870 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44869,G__44870) : io.factorhouse.hsx.core.obj_get.call(null,G__44869,G__44870));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-empty-text-value","property-empty-text-value",585857029,null),args__31746__auto__),frontend$components$property$value$property_empty_text_value,args__31746__auto__,null);
}
};
var frontend$components$property$value$property_empty_text_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45381__i = 0, G__45381__a = new Array(arguments.length -  0);
while (G__45381__i < G__45381__a.length) {G__45381__a[G__45381__i] = arguments[G__45381__i + 0]; ++G__45381__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45381__a,0,null);
} 
return frontend$components$property$value$property_empty_text_value__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$property_empty_text_value.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$property_empty_text_value.cljs$lang$applyTo = (function (arglist__45382){
var args__31746__auto__ = cljs.core.seq(arglist__45382);
return frontend$components$property$value$property_empty_text_value__delegate(args__31746__auto__);
});
frontend$components$property$value$property_empty_text_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_empty_text_value__delegate;
return frontend$components$property$value$property_empty_text_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44871 = comp__31745__auto__;
var G__44872 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44871,G__44872) : io.factorhouse.hsx.core.react_memo.call(null,G__44871,G__44872));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-empty-text-value");

return comp__31745__auto__;
})();
frontend.components.property.value.get_selected_blocks = (function frontend$components$property$value$get_selected_blocks(){
var G__44873 = frontend.state.get_selection_block_ids();
var G__44873__$1 = (((G__44873 == null))?null:cljs.core.seq(G__44873));
var G__44873__$2 = (((G__44873__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),G__44873__$1));
var G__44873__$3 = (((G__44873__$2 == null))?null:frontend.handler.block.get_top_level_blocks(G__44873__$2));
if((G__44873__$3 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.util.entity.property_QMARK_,G__44873__$3);
}
});
frontend.components.property.value.operating_block_id = (function frontend$components$property$value$operating_block_id(block_or_id){
var id = ((cljs.core.uuid_QMARK_(block_or_id))?block_or_id:((cljs.core.integer_QMARK_(block_or_id))?block_or_id:((cljs.core.map_QMARK_(block_or_id))?(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_or_id);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block_or_id);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_or_id);
}
}
})():null)));
if(((cljs.core.uuid_QMARK_(id)) || (cljs.core.integer_QMARK_(id)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"operating block is missing an id: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_or_id], 0)))))+"\n"+"(or (uuid? id) (integer? id))")));
}

return id;
});
frontend.components.property.value.operating_block_ids = (function frontend$components$property$value$operating_block_ids(blocks){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.components.property.value.operating_block_id,blocks);
});
frontend.components.property.value.get_operating_blocks = (function frontend$components$property$value$get_operating_blocks(block){
var selected_blocks = frontend.components.property.value.get_selected_blocks();
var view_selected_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.util.entity.as_block_map,frontend.state.get_state(new cljs.core.Keyword("view","selected-blocks","view/selected-blocks",-92053027)));
var or__5142__auto__ = cljs.core.seq(view_selected_blocks);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (((cljs.core.count(selected_blocks) > (1)))?cljs.core.seq(selected_blocks):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.entity.as_block_map(block)], null);
}
}
});
frontend.components.property.value.batch_operation_QMARK_ = (function frontend$components$property$value$batch_operation_QMARK_(){
var selected_blocks = frontend.components.property.value.get_selected_blocks();
var view_selected_blocks = frontend.state.get_state(new cljs.core.Keyword("view","selected-blocks","view/selected-blocks",-92053027));
return ((cljs.core.seq(view_selected_blocks)) || ((cljs.core.count(selected_blocks) > (1))));
});
frontend.components.property.value.icon_row = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$icon_row(block,editing_QMARK_){
logseq.shui.hooks.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return (function (){
if(cljs.core.truth_(editing_QMARK_)){
return frontend.handler.editor.restore_last_saved_cursor_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
});
}));

var icon_value = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(block);
var clear_overlay_BANG_ = (function (){
return (logseq.shui.ui.popup_hide_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_all_BANG_.call(null));
});
var on_chosen_BANG_ = (function (_e,icon){
var blocks_45383 = frontend.components.property.value.get_operating_blocks(block);
frontend.handler.property.batch_set_block_property_BANG_(frontend.components.property.value.operating_block_ids(blocks_45383),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),(cljs.core.truth_(icon)?cljs.core.select_keys(icon,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"color","color",1011675173)], null)):null));

clear_overlay_BANG_();

if(cljs.core.truth_(editing_QMARK_)){
return frontend.handler.editor.restore_last_saved_cursor_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
});
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
if(cljs.core.truth_(editing_QMARK_)){
return frontend.components.icon.icon_search(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),on_chosen_BANG_,new cljs.core.Keyword(null,"icon-value","icon-value",-510636889),icon,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),(!((icon == null)))], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3.flex.flex-row.items-center.gap-2","div.col-span-3.flex.flex-row.items-center.gap-2",333577856),frontend.components.icon.icon_picker(icon_value,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),(!((icon_value == null))),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),on_chosen_BANG_], null))], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$icon_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44874 = cljs.core.first(args__31746__auto__);
var G__44875 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44874,G__44875) : io.factorhouse.hsx.core.obj_get.call(null,G__44874,G__44875));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"icon-row","icon-row",2059115085,null),args__31746__auto__),frontend$components$property$value$icon_row,args__31746__auto__,null);
}
};
var frontend$components$property$value$icon_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45384__i = 0, G__45384__a = new Array(arguments.length -  0);
while (G__45384__i < G__45384__a.length) {G__45384__a[G__45384__i] = arguments[G__45384__i + 0]; ++G__45384__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45384__a,0,null);
} 
return frontend$components$property$value$icon_row__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$icon_row.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$icon_row.cljs$lang$applyTo = (function (arglist__45385){
var args__31746__auto__ = cljs.core.seq(arglist__45385);
return frontend$components$property$value$icon_row__delegate(args__31746__auto__);
});
frontend$components$property$value$icon_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$icon_row__delegate;
return frontend$components$property$value$icon_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44876 = comp__31745__auto__;
var G__44877 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44876,G__44877) : io.factorhouse.hsx.core.react_memo.call(null,G__44876,G__44877));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"icon-row");

return comp__31745__auto__;
})();
frontend.components.property.value.select_type_QMARK_ = (function frontend$components$property$value$select_type_QMARK_(block,property){
var type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"property","property",-1114278232),null,new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null), null),type)) || (((cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"number","number",1570378438))))))));
});
frontend.components.property.value.built_in_closed_choice_property_QMARK_ = (function frontend$components$property$value$built_in_closed_choice_property_QMARK_(property){
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"closed-values","closed-values",364658811).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))));
});
frontend.components.property.value.built_in_closed_choice_value_QMARK_ = (function frontend$components$property$value$built_in_closed_choice_value_QMARK_(property,value){
return cljs.core.boolean$(((frontend.components.property.value.built_in_closed_choice_property_QMARK_(property)) && (((cljs.core.map_QMARK_(value)) && ((((!(frontend.components.property.value.empty_placeholder_value_QMARK_(value)))) && ((!((new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(value) == null))))))))));
});
frontend.components.property.value.property_closed_choice_value_QMARK_ = (function frontend$components$property$value$property_closed_choice_value_QMARK_(property,value){
return ((frontend.components.property.value.closed_choice_value_QMARK_(value)) || (frontend.components.property.value.built_in_closed_choice_value_QMARK_(property,value)));
});
/**
 * select-type? only sees :property/closed-values. Positioned chips load the
 * property through use-block, which is a canonical snapshot without that key.
 * Empty-placeholder alone is not enough: unused text properties then rendered
 * a 0-width nested ls-block that open-last-block tried to click.
 */
frontend.components.property.value.property_value_select_type_QMARK_ = (function frontend$components$property$value$property_value_select_type_QMARK_(block,property,value){
return ((frontend.components.property.value.select_type_QMARK_(block,property)) || (((frontend.components.property.value.property_closed_choice_value_QMARK_(property,value)) || (((frontend.components.property.value.empty_placeholder_value_QMARK_(value)) && (frontend.components.property.value.built_in_closed_choice_property_QMARK_(property)))))));
});
frontend.components.property.value.direct_value_picker_type_QMARK_ = (function frontend$components$property$value$direct_value_picker_type_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"datetime","datetime",494675702),null,new cljs.core.Keyword(null,"asset","asset",-280274466),null], null), null),type);
});
/**
 * Prefer :db/ident so worker writes skip an extra id->ident lookup.
 *   Built-in editors such as :logseq.property/default-value can be loaded as
 *   ident-only maps before :db/id arrives.
 */
frontend.components.property.value.property_write_id = (function frontend$components$property$value$property_write_id(property){
var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property);
}
});
frontend.components.property.value._LT_create_new_block_BANG_ = (function frontend$components$property$value$_LT_create_new_block_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___45386 = arguments.length;
var i__5877__auto___45387 = (0);
while(true){
if((i__5877__auto___45387 < len__5876__auto___45386)){
args__5882__auto__.push((arguments[i__5877__auto___45387]));

var G__45388 = (i__5877__auto___45387 + (1));
i__5877__auto___45387 = G__45388;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return frontend.components.property.value._LT_create_new_block_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(frontend.components.property.value._LT_create_new_block_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block,property,value,p__44882){
var map__44883 = p__44882;
var map__44883__$1 = cljs.core.__destructure_map(map__44883);
var edit_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44883__$1,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true);
var batch_op_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44883__$1,new cljs.core.Keyword(null,"batch-op?","batch-op?",-2122405648));
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662));
}
})())){
} else {
frontend.ui.hide_popups_until_preview_popup_BANG_();
}

var property_id = frontend.components.property.value.property_write_id(property);
var _LT_create_block = (function (block__$1){
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))) && ((!(logseq.db.frontend.property.many_QMARK_(property)))))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(property)),(function (default_value){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.db.new_block_id()),(function (new_block_id){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var value_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5140__auto__ = default_value;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof value === 'string') && (clojure.string.blank_QMARK_(value)));
} else {
return and__5140__auto__;
}
})())?logseq.db.frontend.property.property_value_content(default_value):value);
return frontend.handler.db_based.property.create_property_text_block_BANG_(frontend.components.property.value.operating_block_id(block__$1),property_id,value_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-block-id","new-block-id",2138942695),new_block_id], null));
})()),(function (_){
return promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),new_block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)));
}));
}));
}));
}));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.db.new_block_id()),(function (new_block_id){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.create_property_text_block_BANG_(frontend.components.property.value.operating_block_id(block__$1),property_id,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-block-id","new-block-id",2138942695),new_block_id], null))),(function (_){
return promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),new_block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)));
}));
}));
}));
}
});
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(batch_op_QMARK_)?promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(_LT_create_block,frontend.components.property.value.get_operating_blocks(block))):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(_LT_create_block(block)),(function (new_block){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null));
}));
})))),(function (blocks){
return promesa.protocols._promise((function (){var first_block = cljs.core.first(blocks);
if(cljs.core.truth_(edit_block_QMARK_)){
var G__44884_45389 = first_block;
var G__44885_45390 = new cljs.core.Keyword(null,"max","max",61366548);
var G__44886_45391 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473)], null);
(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__44884_45389,G__44885_45390,G__44886_45391) : frontend.handler.editor.edit_block_BANG_.call(null,G__44884_45389,G__44885_45390,G__44886_45391));
} else {
}

return first_block;
})());
}));
}));
}));

(frontend.components.property.value._LT_create_new_block_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(frontend.components.property.value._LT_create_new_block_BANG_.cljs$lang$applyTo = (function (seq44878){
var G__44879 = cljs.core.first(seq44878);
var seq44878__$1 = cljs.core.next(seq44878);
var G__44880 = cljs.core.first(seq44878__$1);
var seq44878__$2 = cljs.core.next(seq44878__$1);
var G__44881 = cljs.core.first(seq44878__$2);
var seq44878__$3 = cljs.core.next(seq44878__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44879,G__44880,G__44881,seq44878__$3);
}));

/**
 * If a class and in a class schema context, add the property to its schema.
 *   Otherwise, add a block's property and its value
 */
frontend.components.property.value._LT_add_property_BANG_ = (function frontend$components$property$value$_LT_add_property_BANG_(var_args){
var G__44888 = arguments.length;
switch (G__44888) {
case 3:
return frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (block,property_id,property_value){
return frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4(block,property_id,property_value,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (block,property_id,property_value,p__44889){
var map__44890 = p__44889;
var map__44890__$1 = cljs.core.__destructure_map(map__44890);
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44890__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var exit_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44890__$1,new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059),true);
var class_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44890__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900));
var entity_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44890__$1,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.util.entity.class_QMARK_(block)),(function (class_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,property_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (property){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.db.frontend.property.many_QMARK_(property)),(function (many_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))),(function (checkbox_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value.get_operating_blocks(block)),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword("logseq.property.view","type.list","logseq.property.view/type.list",-1164828502)], 0))),(function (list_view_type){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword("block","page","block/page",822314108)], 0))),(function (block_page_property){
return promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.class_QMARK_(property))?null:(function (){
if(cljs.core.qualified_keyword_QMARK_(property_id)){
} else {
throw (new Error((""+"Assert failed: "+"property to add must be a keyword"+"\n"+"(qualified-keyword? property-id)")));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return class_schema_QMARK_;
} else {
return and__5140__auto__;
}
})())?frontend.handler.db_based.property.class_add_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),property_id):(function (){var block_ids = frontend.components.property.value.operating_block_ids(blocks);
var set_query_list_view_QMARK_ = (function (){var and__5140__auto__ = new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_value,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(list_view_type))));
} else {
return and__5140__auto__;
}
})();
var test_QMARK___35655__auto__ = frontend.util.node_test_QMARK_;
var ops__35656__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__35657__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__35657__auto__);

if(cljs.core.truth_(ops__35656__auto__)){
frontend.handler.property.batch_set_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_ids,property_id,property_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_], null)], 0));

if(cljs.core.truth_((function (){var and__5140__auto__ = set_query_list_view_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236).cljs$core$IFn$_invoke$arity$1(block) == null);
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.property.batch_set_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_ids,new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_page_property),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_], null)], 0));
} else {
return null;
}
} else {
var _STAR_outliner_ops_STAR__orig_val__44891 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__44892 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__44892);

try{frontend.handler.property.batch_set_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_ids,property_id,property_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_], null)], 0));

if(cljs.core.truth_((function (){var and__5140__auto__ = set_query_list_view_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236).cljs$core$IFn$_invoke$arity$1(block) == null);
} else {
return and__5140__auto__;
}
})())){
frontend.handler.property.batch_set_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_ids,new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_page_property),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_], null)], 0));
} else {
}

var r__35658__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__35658__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"set-block-property","set-block-property",-301154301)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__44891);
}}
})())),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(frontend.state.get_state(new cljs.core.Keyword("view","selected-blocks","view/selected-blocks",-92053027))))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","update-success","property/update-success",-940501522)], 0)),new cljs.core.Keyword(null,"success","success",1890645906)):null)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(many_QMARK_)?null:(cljs.core.truth_(exit_edit_QMARK_)?frontend.ui.hide_popups_until_preview_popup_BANG_():(cljs.core.truth_(selected_QMARK_)?(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null)):null)))),(function (___21901__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = many_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return checkbox_QMARK_;
}
})())?null:(function (){var temp__5825__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
return input.focus();
} else {
return null;
}
})())),(function (___21901__auto____$3){
return promesa.protocols._promise((cljs.core.truth_(checkbox_QMARK_)?frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"focus-property-value","focus-property-value",1385743147),new cljs.core.Keyword(null,"property","property",-1114278232),property], null)):null));
}));
}));
}));
}));
}));
})()
));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));

(frontend.components.property.value._LT_add_property_BANG_.cljs$lang$maxFixedArity = 4);

frontend.components.property.value.add_or_remove_property_value = (function frontend$components$property$value$add_or_remove_property_value(block,property,value,selected_QMARK_,p__44893){
var map__44894 = p__44893;
var map__44894__$1 = cljs.core.__destructure_map(map__44894);
var opts = map__44894__$1;
var refresh_result_f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44894__$1,new cljs.core.Keyword(null,"refresh-result-f","refresh-result-f",-1242092515));
var entity_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44894__$1,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382));
var many_QMARK_ = frontend.components.property.value.property_multiple_values_QMARK_(property);
var entity_id_QMARK___$1 = (function (){var or__5142__auto__ = entity_id_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core.integer_QMARK_(value)));
}
})();
var blocks = frontend.components.property.value.get_operating_blocks(block);
var current_block_ref = frontend.components.property.value.operating_block_id((function (){var or__5142__auto__ = cljs.core.first(blocks);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})());
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,current_block_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (current_block){
return promesa.protocols._mcat(promesa.protocols._promise(((many_QMARK_)?(!(frontend.components.property.value.property_value_selected_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)),value))):selected_QMARK_)),(function (selected_QMARK___$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(selected_QMARK___$1)?((many_QMARK_)?frontend.handler.db_based.property.batch_set_property_BANG_(frontend.components.property.value.operating_block_ids(blocks),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK___$1], null)):frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),value,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK___$1,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK___$1,new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059),(((!((new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059).cljs$core$IFn$_invoke$arity$1(opts) == null))))?new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059).cljs$core$IFn$_invoke$arity$1(opts):(!(many_QMARK_)))], null))):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.batch_delete_property_value_BANG_(frontend.components.property.value.operating_block_ids(blocks),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),value)),(function (___21901__auto__){
return promesa.protocols._promise((((((!(many_QMARK_))) || (((many_QMARK_) && ((cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))) <= (1)))))))?(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null)):null));
}));
})))),(function (___21901__auto__){
return promesa.protocols._promise(((cljs.core.fn_QMARK_(refresh_result_f))?(refresh_result_f.cljs$core$IFn$_invoke$arity$0 ? refresh_result_f.cljs$core$IFn$_invoke$arity$0() : refresh_result_f.call(null)):null));
}));
}));
}));
}));
});
frontend.components.property.value._LT_property_with_closed_values = (function frontend$components$property$value$_LT_property_with_closed_values(repo,property_ident){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),property_ident], 0))),(function (property){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_property_closed_values(repo,property_ident)),(function (closed_values){
return promesa.protocols._promise((function (){var G__44895 = property;
if(cljs.core.seq(closed_values)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44895,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952),closed_values);
} else {
return G__44895;
}
})());
}));
}));
}));
});
frontend.components.property.value.datetime_only_recur_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.repeat","recur-unit.minute","logseq.property.repeat/recur-unit.minute",-1513655085),null,new cljs.core.Keyword("logseq.property.repeat","recur-unit.hour","logseq.property.repeat/recur-unit.hour",1438884954),null], null), null);
frontend.components.property.value.choice_db_ident = (function frontend$components$property$value$choice_db_ident(choice){
var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(choice);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"db-ident","db-ident",-992686073).cljs$core$IFn$_invoke$arity$1(choice);
}
});
frontend.components.property.value.property_ref_id = (function frontend$components$property$value$property_ref_id(value){
if(cljs.core.map_QMARK_(value)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
if(typeof value === 'number'){
return value;
} else {
return null;

}
}
});
frontend.components.property.value.parse_positive_int = (function frontend$components$property$value$parse_positive_int(raw){
var s = (function (){var G__44896 = raw;
var G__44896__$1 = (((G__44896 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44896)));
if((G__44896__$1 == null)){
return null;
} else {
return clojure.string.trim(G__44896__$1);
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = typeof s === 'string';
if(and__5140__auto__){
return cljs.core.re_matches(/\d+/,s);
} else {
return and__5140__auto__;
}
})())){
var n = parseInt(s,(10));
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
frontend.components.property.value.select_ref_id = (function frontend$components$property$value$select_ref_id(value){
if((value == null)){
return null;
} else {
if(typeof value === 'number'){
if((value > (0))){
return value;
} else {
return null;
}
} else {
if(typeof value === 'string'){
return frontend.components.property.value.parse_positive_int(value);
} else {
if(cljs.core.map_QMARK_(value)){
var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__44897 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value);
return (frontend.components.property.value.select_ref_id.cljs$core$IFn$_invoke$arity$1 ? frontend.components.property.value.select_ref_id.cljs$core$IFn$_invoke$arity$1(G__44897) : frontend.components.property.value.select_ref_id.call(null,G__44897));
}
} else {
if(cljs.core.boolean_QMARK_(value)){
return null;
} else {
if((value instanceof cljs.core.Keyword)){
return null;
} else {
var G__44898 = (value["value"]);
return (frontend.components.property.value.select_ref_id.cljs$core$IFn$_invoke$arity$1 ? frontend.components.property.value.select_ref_id.cljs$core$IFn$_invoke$arity$1(G__44898) : frontend.components.property.value.select_ref_id.call(null,G__44898));

}
}
}
}
}
}
});
frontend.components.property.value.property_select_label = (function frontend$components$property$value$property_select_label(property){
var or__5142__auto__ = logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property);
}
});
frontend.components.property.value.repeat_closed_select = (function frontend$components$property$value$repeat_closed_select(p__44899){
var map__44900 = p__44899;
var map__44900__$1 = cljs.core.__destructure_map(map__44900);
var selected_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"options","options",99638489));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var labelledby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"labelledby","labelledby",-1087072718));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var selected = (function (){var or__5142__auto__ = cljs.core.some((function (option){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(option))){
return option;
} else {
return null;
}
}),options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.first(options);
}
})();
var selected_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(selected);
var selected_value = (cljs.core.truth_(selected_id)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_id)):null);
var G__44901 = (function (){var G__44904 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (v){
var temp__5825__auto__ = frontend.components.property.value.select_ref_id(v);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(id) : on_select.call(null,id));
} else {
return null;
}
})], null);
var G__44904__$1 = (cljs.core.truth_(selected_value)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44904,new cljs.core.Keyword(null,"value","value",305978217),selected_value):G__44904);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44904__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__44904__$1;
}
})();
var G__44902 = (function (){var G__44905 = (function (){var G__44907 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 w-full"], null);
if(cljs.core.truth_(labelledby)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44907,new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),labelledby);
} else {
return G__44907;
}
})();
var G__44906 = (cljs.core.truth_(selected_label)?(function (){var G__44908 = cljs.core.PersistentArrayMap.EMPTY;
var G__44909 = selected_label;
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$2(G__44908,G__44909) : logseq.shui.ui.select_value.call(null,G__44908,G__44909));
})():(function (){var G__44910 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var or__5142__auto__ = placeholder;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()], null);
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__44910) : logseq.shui.ui.select_value.call(null,G__44910));
})());
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__44905,G__44906) : logseq.shui.ui.select_trigger.call(null,G__44905,G__44906));
})();
var G__44903 = (function (){var G__44911 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44912){
var map__44913 = p__44912;
var map__44913__$1 = cljs.core.__destructure_map(map__44913);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44913__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44913__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var G__44914 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"value","value",305978217),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null);
var G__44915 = label;
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__44914,G__44915) : logseq.shui.ui.select_item.call(null,G__44914,G__44915));
}),options);
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1(G__44911) : logseq.shui.ui.select_content.call(null,G__44911));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__44901,G__44902,G__44903) : logseq.shui.ui.select.call(null,G__44901,G__44902,G__44903));
});
frontend.components.property.value.repeat_frequency_value = (function frontend$components$property$value$repeat_frequency_value(block){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property.repeat","recur-frequency","logseq.property.repeat/recur-frequency",871615922));
var or__5142__auto__ = ((typeof v === 'number')?v:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.db.frontend.property.property_value_content(v);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (1);
}
}
});
frontend.components.property.value.repeat_unit_value_id = (function frontend$components$property$value$repeat_unit_value_id(block,recur_unit_property){
var or__5142__auto__ = frontend.components.property.value.property_ref_id(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property.repeat","recur-unit","logseq.property.repeat/recur-unit",690306247)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.components.property.value.property_ref_id(new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(recur_unit_property));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.some((function (choice){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property.repeat","recur-unit.day","logseq.property.repeat/recur-unit.day",392417858),frontend.components.property.value.choice_db_ident(choice))){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice);
} else {
return null;
}
}),new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(recur_unit_property));
}
}
});
frontend.components.property.value.repeat_unit_choices = (function frontend$components$property$value$repeat_unit_choices(block,property,recur_unit_property){
var date_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
var current_id = frontend.components.property.value.property_ref_id(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property.repeat","recur-unit","logseq.property.repeat/recur-unit",690306247)));
var G__44916 = logseq.db.frontend.property.scoped_closed_values.cljs$core$IFn$_invoke$arity$variadic(recur_unit_property,block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(recur_unit_property)], null)], 0));
if(date_QMARK_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (choice){
return ((cljs.core.contains_QMARK_(frontend.components.property.value.datetime_only_recur_units,frontend.components.property.value.choice_db_ident(choice))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice),current_id)));
}),G__44916);
} else {
return G__44916;
}
});
frontend.components.property.value.repeat_unit_label = (function frontend$components$property$value$repeat_unit_label(choice){
var or__5142__auto__ = logseq.db.frontend.property.built_in_display_title(choice,frontend.context.i18n.t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.property.closed_value_content(choice);
}
});
frontend.components.property.value.repeat_every_controls = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$repeat_every_controls(block,property,recur_frequency_property,recur_unit_property){
var frequency = frontend.components.property.value.repeat_frequency_value(block);
var vec__44917 = logseq.shui.hooks.use_state((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frequency)));
var frequency_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44917,(0),null);
var set_frequency_str_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44917,(1),null);
var label_id = logseq.shui.hooks.use_memo((function (){
return (""+"ls-repeat-every-label-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),cljs.core.PersistentVector.EMPTY);
var frequency_id = logseq.shui.hooks.use_memo((function (){
return (""+"ls-repeat-frequency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),cljs.core.PersistentVector.EMPTY);
var unit_choices = frontend.components.property.value.repeat_unit_choices(block,property,recur_unit_property);
var persisted_unit_id = frontend.components.property.value.repeat_unit_value_id(block,recur_unit_property);
var vec__44920 = logseq.shui.hooks.use_state(persisted_unit_id);
var unit_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44920,(0),null);
var set_unit_id_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44920,(1),null);
var selected_choice = (function (){var or__5142__auto__ = cljs.core.some((function (choice){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice))){
return choice;
} else {
return null;
}
}),unit_choices);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.some((function (choice){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property.repeat","recur-unit.day","logseq.property.repeat/recur-unit.day",392417858),frontend.components.property.value.choice_db_ident(choice))){
return choice;
} else {
return null;
}
}),unit_choices);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.first(unit_choices);
}
}
})();
var selected_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(selected_choice);
var save_frequency_BANG_ = (function (raw){
var temp__5823__auto__ = frontend.components.property.value.parse_positive_int(raw);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
var G__44923_45393 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
(set_frequency_str_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_frequency_str_BANG_.cljs$core$IFn$_invoke$arity$1(G__44923_45393) : set_frequency_str_BANG_.call(null,G__44923_45393));

if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(recur_frequency_property),n);
} else {
return null;
}
} else {
var G__44924 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frequency));
return (set_frequency_str_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_frequency_str_BANG_.cljs$core$IFn$_invoke$arity$1(G__44924) : set_frequency_str_BANG_.call(null,G__44924));
}
});
var persist_unit_BANG_ = (function (v){
var temp__5825__auto__ = frontend.components.property.value.select_ref_id(v);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
(set_unit_id_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_unit_id_BANG_.cljs$core$IFn$_invoke$arity$1(id) : set_unit_id_BANG_.call(null,id));

if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(recur_unit_property),id);
} else {
return null;
}
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
var G__44925_45394 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frequency));
(set_frequency_str_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_frequency_str_BANG_.cljs$core$IFn$_invoke$arity$1(G__44925_45394) : set_frequency_str_BANG_.call(null,G__44925_45394));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frequency], null));

logseq.shui.hooks.use_effect_BANG_((function (){
(set_unit_id_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_unit_id_BANG_.cljs$core$IFn$_invoke$arity$1(persisted_unit_id) : set_unit_id_BANG_.call(null,persisted_unit_id));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [persisted_unit_id], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2.ls-repeat-task-frequency.text-sm","div.flex.flex-row.items-center.gap-2.ls-repeat-task-frequency.text-sm",1325232900),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex-none.text-muted-foreground","label.flex-none.text-muted-foreground",460818961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),label_id,new cljs.core.Keyword(null,"for","for",-1323786319),frequency_id], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property.repeat","every","property.repeat/every",982297102)], 0))], null),(function (){var G__44926 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),new cljs.core.Keyword(null,"step","step",1288888124)],[(1),frontend.config.publishing_QMARK_,frequency_str,(function (e){
return save_frequency_BANG_(frontend.util.evalue(e));
}),label_id,"number",frontend.util.stop_propagation,frequency_id,"ls-repeat-frequency-input !h-8 !w-14 !px-2 !py-0",(function (e){
var G__44927 = frontend.util.evalue(e);
return (set_frequency_str_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_frequency_str_BANG_.cljs$core$IFn$_invoke$arity$1(G__44927) : set_frequency_str_BANG_.call(null,G__44927));
}),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
e.target.blur();

return frontend.util.stop(e);
} else {
return null;
}
}),(1)]);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__44926) : logseq.shui.ui.input.call(null,G__44926));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.min-w-0","div.flex-1.min-w-0",706651627),frontend.components.property.value.repeat_closed_select(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),selected_id,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (choice){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice),new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.property.value.repeat_unit_label(choice)], null);
}),unit_choices),new cljs.core.Keyword(null,"labelledby","labelledby",-1087072718),label_id,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"on-select","on-select",-192407950),persist_unit_BANG_], null))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$repeat_every_controls__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44928 = cljs.core.first(args__31746__auto__);
var G__44929 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44928,G__44929) : io.factorhouse.hsx.core.obj_get.call(null,G__44928,G__44929));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"repeat-every-controls","repeat-every-controls",-53932970,null),args__31746__auto__),frontend$components$property$value$repeat_every_controls,args__31746__auto__,null);
}
};
var frontend$components$property$value$repeat_every_controls = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45395__i = 0, G__45395__a = new Array(arguments.length -  0);
while (G__45395__i < G__45395__a.length) {G__45395__a[G__45395__i] = arguments[G__45395__i + 0]; ++G__45395__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45395__a,0,null);
} 
return frontend$components$property$value$repeat_every_controls__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$repeat_every_controls.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$repeat_every_controls.cljs$lang$applyTo = (function (arglist__45396){
var args__31746__auto__ = cljs.core.seq(arglist__45396);
return frontend$components$property$value$repeat_every_controls__delegate(args__31746__auto__);
});
frontend$components$property$value$repeat_every_controls.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$repeat_every_controls__delegate;
return frontend$components$property$value$repeat_every_controls;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44930 = comp__31745__auto__;
var G__44931 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44930,G__44931) : io.factorhouse.hsx.core.react_memo.call(null,G__44930,G__44931));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"repeat-every-controls");

return comp__31745__auto__;
})();
frontend.components.property.value.repeat_when_controls = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$repeat_when_controls(block,status_property,status_done,full_properties,when_id,set_when_id_BANG_){
var properties = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var G__44932 = new cljs.core.Keyword("db","id","db/id",-1388397098);
var G__44933 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_property], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (property_SINGLEQUOTE_){
return ((cljs.core.not((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(property_SINGLEQUOTE_) : logseq.db.built_in_QMARK_.call(null,property_SINGLEQUOTE_)))) && ((cljs.core.count(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property_SINGLEQUOTE_)) >= (2))));
}),full_properties));
return (frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2(G__44932,G__44933) : frontend.util.distinct_by.call(null,G__44932,G__44933));
})());
var property_options = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (property_SINGLEQUOTE_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property_SINGLEQUOTE_),new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.property.value.property_select_label(property_SINGLEQUOTE_)], null);
}),properties);
var selected_when_id = (function (){var or__5142__auto__ = when_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(status_property);
}
})();
var when_property = (function (){var or__5142__auto__ = cljs.core.some((function (property_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_when_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property_SINGLEQUOTE_))){
return property_SINGLEQUOTE_;
} else {
return null;
}
}),properties);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return status_property;
}
})();
var done_choice = (function (){var or__5142__auto__ = cljs.core.some((function (choice){
if(new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863).cljs$core$IFn$_invoke$arity$1(choice) === true){
return choice;
} else {
return null;
}
}),new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(when_property));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return status_done;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.text-sm","div.flex.flex-col.gap-2.text-sm",-1005565861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted-foreground","div.text-muted-foreground",-1086610897),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property.repeat","when","property.repeat/when",319368754)], 0))], null),frontend.components.property.value.repeat_closed_select(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),selected_when_id,new cljs.core.Keyword(null,"options","options",99638489),property_options,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","select-property-placeholder","property/select-property-placeholder",-1186050512)], 0)),new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (id){
(set_when_id_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_when_id_BANG_.cljs$core$IFn$_invoke$arity$1(id) : set_when_id_BANG_.call(null,id));

if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property.repeat","checked-property","logseq.property.repeat/checked-property",1866365553),id);
} else {
return null;
}
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.text-sm","div.flex.flex-row.gap-1.text-sm",-1707860686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted-foreground","div.text-muted-foreground",-1086610897),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property.repeat","is-label","property.repeat/is-label",-998962592)], 0))], null),(cljs.core.truth_(done_choice)?(function (){var or__5142__auto__ = logseq.db.frontend.property.built_in_display_title(done_choice,frontend.context.i18n.t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(done_choice);
}
})():null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$repeat_when_controls__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44934 = cljs.core.first(args__31746__auto__);
var G__44935 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44934,G__44935) : io.factorhouse.hsx.core.obj_get.call(null,G__44934,G__44935));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"repeat-when-controls","repeat-when-controls",1696714976,null),args__31746__auto__),frontend$components$property$value$repeat_when_controls,args__31746__auto__,null);
}
};
var frontend$components$property$value$repeat_when_controls = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45397__i = 0, G__45397__a = new Array(arguments.length -  0);
while (G__45397__i < G__45397__a.length) {G__45397__a[G__45397__i] = arguments[G__45397__i + 0]; ++G__45397__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45397__a,0,null);
} 
return frontend$components$property$value$repeat_when_controls__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$repeat_when_controls.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$repeat_when_controls.cljs$lang$applyTo = (function (arglist__45398){
var args__31746__auto__ = cljs.core.seq(arglist__45398);
return frontend$components$property$value$repeat_when_controls__delegate(args__31746__auto__);
});
frontend$components$property$value$repeat_when_controls.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$repeat_when_controls__delegate;
return frontend$components$property$value$repeat_when_controls;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44936 = comp__31745__auto__;
var G__44937 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44936,G__44937) : io.factorhouse.hsx.core.react_memo.call(null,G__44936,G__44937));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"repeat-when-controls");

return comp__31745__auto__;
})();
frontend.components.property.value.repeat_setting = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$repeat_setting(block_STAR_,property){
var block = (function (){var or__5142__auto__ = frontend.db.hooks.use_block(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_STAR_));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block_STAR_;
}
})();
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059),false], null);
var repo = frontend.state.get_current_repo();
var db_repeated_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword("logseq.property.repeat","repeated?","logseq.property.repeat/repeated?",1908121789).cljs$core$IFn$_invoke$arity$1(block));
var vec__44938 = logseq.shui.hooks.use_state(db_repeated_QMARK_);
var checked_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44938,(0),null);
var set_checked_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44938,(1),null);
var persisted_when_id = frontend.components.property.value.property_ref_id(new cljs.core.Keyword("logseq.property.repeat","checked-property","logseq.property.repeat/checked-property",1866365553).cljs$core$IFn$_invoke$arity$1(block));
var vec__44941 = logseq.shui.hooks.use_state(persisted_when_id);
var when_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941,(0),null);
var set_when_id_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941,(1),null);
var vec__44944 = logseq.shui.hooks.use_state(null);
var repeat_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44944,(0),null);
var set_repeat_properties_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44944,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
(set_checked_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_checked_BANG_.cljs$core$IFn$_invoke$arity$1(db_repeated_QMARK_) : set_checked_BANG_.call(null,db_repeated_QMARK_));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_repeated_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
(set_when_id_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_when_id_BANG_.cljs$core$IFn$_invoke$arity$1(persisted_when_id) : set_when_id_BANG_.call(null,persisted_when_id));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [persisted_when_id], null));

logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value._LT_property_with_closed_values(repo,new cljs.core.Keyword("logseq.property.repeat","repeated?","logseq.property.repeat/repeated?",1908121789))),(function (repeated_property){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value._LT_property_with_closed_values(repo,new cljs.core.Keyword("logseq.property.repeat","recur-frequency","logseq.property.repeat/recur-frequency",871615922))),(function (recur_frequency_property){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value._LT_property_with_closed_values(repo,new cljs.core.Keyword("logseq.property.repeat","recur-unit","logseq.property.repeat/recur-unit",690306247))),(function (recur_unit_property){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value._LT_property_with_closed_values(repo,new cljs.core.Keyword("logseq.property.repeat","repeat-type","logseq.property.repeat/repeat-type",-1984297281))),(function (repeat_type_property){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value._LT_property_with_closed_values(repo,new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853))),(function (status_property){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword("logseq.property","status.done","logseq.property/status.done",-1827582082)], 0))),(function (status_done){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_display_properties(repo,block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"publishing?","publishing?",1526914455),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"state-hide-empty-properties?","state-hide-empty-properties?",2051042635),new cljs.core.Keyword("ui","hide-empty-properties?","ui/hide-empty-properties?",-2048102776).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())], null),true)),(function (p__44947){
var map__44948 = p__44947;
var map__44948__$1 = cljs.core.__destructure_map(map__44948);
var full_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44948__$1,new cljs.core.Keyword(null,"full-properties","full-properties",-22614160));
return promesa.protocols._promise((function (){var G__44949 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"repeated-property","repeated-property",1446631222),repeated_property,new cljs.core.Keyword(null,"recur-frequency-property","recur-frequency-property",1087049153),recur_frequency_property,new cljs.core.Keyword(null,"recur-unit-property","recur-unit-property",1191761143),recur_unit_property,new cljs.core.Keyword(null,"repeat-type-property","repeat-type-property",501443469),repeat_type_property,new cljs.core.Keyword(null,"status-property","status-property",-1245718351),status_property,new cljs.core.Keyword(null,"status-done","status-done",-381661862),status_done,new cljs.core.Keyword(null,"full-properties","full-properties",-22614160),full_properties], null);
return (set_repeat_properties_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_repeat_properties_BANG_.cljs$core$IFn$_invoke$arity$1(G__44949) : set_repeat_properties_BANG_.call(null,G__44949));
})());
}));
}));
}));
}));
}));
}));
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null));

var temp__5825__auto__ = repeat_properties;
if(cljs.core.truth_(temp__5825__auto__)){
var map__44950 = temp__5825__auto__;
var map__44950__$1 = cljs.core.__destructure_map(map__44950);
var recur_frequency_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44950__$1,new cljs.core.Keyword(null,"recur-frequency-property","recur-frequency-property",1087049153));
var recur_unit_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44950__$1,new cljs.core.Keyword(null,"recur-unit-property","recur-unit-property",1191761143));
var repeat_type_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44950__$1,new cljs.core.Keyword(null,"repeat-type-property","repeat-type-property",501443469));
var status_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44950__$1,new cljs.core.Keyword(null,"status-property","status-property",-1245718351));
var status_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44950__$1,new cljs.core.Keyword(null,"status-done","status-done",-381661862));
var full_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44950__$1,new cljs.core.Keyword(null,"full-properties","full-properties",-22614160));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.hidden.sm:flex.flex-col.gap-4.w-64.text-sm","div.p-4.hidden.sm:flex.flex-col.gap-4.w-64.text-sm",96477247),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-4","div.w-4",-1388282971),(function (){var G__44951 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"jtrigger flex flex-row items-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(16)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(checked_QMARK_),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (value){
var on_QMARK_ = cljs.core.boolean$(value);
(set_checked_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_checked_BANG_.cljs$core$IFn$_invoke$arity$1(on_QMARK_) : set_checked_BANG_.call(null,on_QMARK_));

if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__5140__auto__;
}
})())){
frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4(block,new cljs.core.Keyword("logseq.property.repeat","repeated?","logseq.property.repeat/repeated?",1908121789),on_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059),false], null));

if(on_QMARK_){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property.repeat","temporal-property","logseq.property.repeat/temporal-property",834610784),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
} else {
return frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property.repeat","temporal-property","logseq.property.repeat/temporal-property",834610784));
}
} else {
return null;
}
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__44951) : logseq.shui.ui.checkbox.call(null,G__44951));
})()], null),(cljs.core.truth_((function (){var G__44953 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
var fexpr__44952 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","deadline","logseq.property/deadline",1685901604),null,new cljs.core.Keyword("logseq.property","scheduled","logseq.property/scheduled",1644520943),null], null), null);
return (fexpr__44952.cljs$core$IFn$_invoke$arity$1 ? fexpr__44952.cljs$core$IFn$_invoke$arity$1(G__44953) : fexpr__44952.call(null,G__44953));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property.repeat","task","property.repeat/task",1587645779)], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property)))?new cljs.core.Keyword("property.repeat","date","property.repeat/date",-821250314):new cljs.core.Keyword("property.repeat","datetime","property.repeat/datetime",1405602970))], 0))], null))], null)], null),frontend.components.property.value.repeat_every_controls(block,property,recur_frequency_property,recur_unit_property),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.min-w-0.ls-repeat-type-setting.text-sm","div.flex.flex-col.gap-1.min-w-0.ls-repeat-type-setting.text-sm",-798882311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted-foreground","div.text-muted-foreground",-1086610897),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property.repeat","next-date","property.repeat/next-date",202747557)], 0))], null),(frontend.components.property.value.property_value.cljs$core$IFn$_invoke$arity$3 ? frontend.components.property.value.property_value.cljs$core$IFn$_invoke$arity$3(block,repeat_type_property,opts) : frontend.components.property.value.property_value.call(null,block,repeat_type_property,opts))], null),frontend.components.property.value.repeat_when_controls(block,status_property,status_done,full_properties,when_id,set_when_id_BANG_)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$repeat_setting__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44954 = cljs.core.first(args__31746__auto__);
var G__44955 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44954,G__44955) : io.factorhouse.hsx.core.obj_get.call(null,G__44954,G__44955));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"repeat-setting","repeat-setting",738757384,null),args__31746__auto__),frontend$components$property$value$repeat_setting,args__31746__auto__,null);
}
};
var frontend$components$property$value$repeat_setting = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45399__i = 0, G__45399__a = new Array(arguments.length -  0);
while (G__45399__i < G__45399__a.length) {G__45399__a[G__45399__i] = arguments[G__45399__i + 0]; ++G__45399__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45399__a,0,null);
} 
return frontend$components$property$value$repeat_setting__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$repeat_setting.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$repeat_setting.cljs$lang$applyTo = (function (arglist__45400){
var args__31746__auto__ = cljs.core.seq(arglist__45400);
return frontend$components$property$value$repeat_setting__delegate(args__31746__auto__);
});
frontend$components$property$value$repeat_setting.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$repeat_setting__delegate;
return frontend$components$property$value$repeat_setting;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44956 = comp__31745__auto__;
var G__44957 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44956,G__44957) : io.factorhouse.hsx.core.react_memo.call(null,G__44956,G__44957));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"repeat-setting");

return comp__31745__auto__;
})();
frontend.components.property.value._LT_resolve_journal_page_for_date = (function frontend$components$property$value$_LT_resolve_journal_page_for_date(var_args){
var G__44959 = arguments.length;
switch (G__44959) {
case 1:
return frontend.components.property.value._LT_resolve_journal_page_for_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 5:
return frontend.components.property.value._LT_resolve_journal_page_for_date.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.property.value._LT_resolve_journal_page_for_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
return frontend.components.property.value._LT_resolve_journal_page_for_date.cljs$core$IFn$_invoke$arity$5(d,frontend.state.get_current_repo,frontend.db.async._LT_get_block,frontend.handler.page._LT_create_BANG_,frontend.date.js_date__GT_journal_title);
}));

(frontend.components.property.value._LT_resolve_journal_page_for_date.cljs$core$IFn$_invoke$arity$5 = (function (d,get_current_repo_f,get_block_f,create_page_f,journal_title_f){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((journal_title_f.cljs$core$IFn$_invoke$arity$1 ? journal_title_f.cljs$core$IFn$_invoke$arity$1(d) : journal_title_f.call(null,d))),(function (journal){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__44960 = (get_current_repo_f.cljs$core$IFn$_invoke$arity$0 ? get_current_repo_f.cljs$core$IFn$_invoke$arity$0() : get_current_repo_f.call(null));
var G__44961 = journal;
var G__44962 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null);
return (get_block_f.cljs$core$IFn$_invoke$arity$3 ? get_block_f.cljs$core$IFn$_invoke$arity$3(G__44960,G__44961,G__44962) : get_block_f.call(null,G__44960,G__44961,G__44962));
})()),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page))?page:null)),(function (journal_page){
return promesa.protocols._promise((cljs.core.truth_(journal_page)?journal_page:(function (){var G__44963 = journal;
var G__44964 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null);
return (create_page_f.cljs$core$IFn$_invoke$arity$2 ? create_page_f.cljs$core$IFn$_invoke$arity$2(G__44963,G__44964) : create_page_f.call(null,G__44963,G__44964));
})()));
}));
}));
}));
}));
}));

(frontend.components.property.value._LT_resolve_journal_page_for_date.cljs$lang$maxFixedArity = 5);

frontend.components.property.value.selected_day_selector = "[role='gridcell'][aria-selected='true'] button, [role='gridcell'] button[tabindex='0']";
frontend.components.property.value.calendar_default_month = (function frontend$components$property$value$calendar_default_month(d){
return (new Date(d.getFullYear(),d.getMonth(),(1)));
});
frontend.components.property.value.focus_selected_day_BANG_ = (function frontend$components$property$value$focus_selected_day_BANG_(id,remaining){
if((remaining > (0))){
var temp__5823__auto__ = (function (){var G__44965 = id;
var G__44965__$1 = (((G__44965 == null))?null:document.getElementById(G__44965));
if((G__44965__$1 == null)){
return null;
} else {
return G__44965__$1.querySelector(frontend.components.property.value.selected_day_selector);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var selected_day = temp__5823__auto__;
return selected_day.focus();
} else {
return setTimeout((function (){
var G__44966 = id;
var G__44967 = (remaining - (1));
return (frontend.components.property.value.focus_selected_day_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.property.value.focus_selected_day_BANG_.cljs$core$IFn$_invoke$arity$2(G__44966,G__44967) : frontend.components.property.value.focus_selected_day_BANG_.call(null,G__44966,G__44967));
}),(16));
}
} else {
return null;
}
});
frontend.components.property.value.calendar_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$calendar_inner(id,p__44968){
var map__44969 = p__44968;
var map__44969__$1 = cljs.core.__destructure_map(map__44969);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"block","block",664686210));
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var datetime_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var del_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362));
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
var value__$1 = ((cljs.core.map_QMARK_(value))?(function (){var temp__5825__auto__ = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(temp__5825__auto__)){
var day = temp__5825__auto__;
var t = (frontend.date.journal_day__GT_utc_ms.cljs$core$IFn$_invoke$arity$1 ? frontend.date.journal_day__GT_utc_ms.cljs$core$IFn$_invoke$arity$1(day) : frontend.date.journal_day__GT_utc_ms.call(null,day));
return (new Date(t));
} else {
return null;
}
})():((typeof value === 'number')?(new Date(value)):(function (){var d = (new Date());
d.setHours((0),(0),(0));

return d;
})()
));
var _STAR_ident = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((""+"calendar-inner-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now())));
}),cljs.core.PersistentVector.EMPTY);
var initial_day = value__$1;
var initial_month = (cljs.core.truth_(value__$1)?frontend.components.property.value.calendar_default_month(value__$1):null);
var select_handler_BANG_ = logseq.shui.hooks.use_callback((function (d){
if(cljs.core.truth_(d)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value._LT_resolve_journal_page_for_date.cljs$core$IFn$_invoke$arity$1(d)),(function (journal_page){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.fn_QMARK_(on_change))?(function (){var value__$2 = (cljs.core.truth_(datetime_QMARK_)?cljs_time.coerce.to_long(d):journal_page);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value__$2) : on_change.call(null,value__$2));
})():null)),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_(datetime_QMARK_)?null:(function (){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));

return frontend.ui.hide_popups_until_preview_popup_BANG_();
})()
));
}));
})));
}));
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,datetime_QMARK_,on_change], null));
logseq.shui.hooks.use_window_keydown.cljs$core$IFn$_invoke$arity$2((function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))) && ((!(frontend.ui.date_picker_form_target_QMARK_(e)))))){
(select_handler_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_handler_BANG_.cljs$core$IFn$_invoke$arity$1(initial_day) : select_handler_BANG_.call(null,initial_day));

return frontend.util.stop(e);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_day,select_handler_BANG_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"property-set-date","property-set-date",-266599778));

setTimeout((function (){
return frontend.components.property.value.focus_selected_day_BANG_(cljs.core.deref(_STAR_ident),(10));
}),(16));

return (function (){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

return frontend.state.set_editor_action_BANG_(null);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-date-picker.flex.flex-row.gap-2","div.ls-property-date-picker.flex.flex-row.gap-2",-1245279500),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),frontend.ui.nlp_calendar((function (){var G__44970 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"initial-focus","initial-focus",1154999719),true,new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100),datetime_QMARK_,new cljs.core.Keyword(null,"selected","selected",574897764),initial_day,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref(_STAR_ident),new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),del_btn_QMARK_,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),on_delete,new cljs.core.Keyword(null,"on-day-click","on-day-click",1918658076),select_handler_BANG_], null);
if(cljs.core.truth_(initial_month)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44970,new cljs.core.Keyword(null,"default-month","default-month",-187077446),initial_month);
} else {
return G__44970;
}
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.sm:initial","div.hidden.sm:initial",-102282513),(function (){var G__44971 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),"vertical"], null);
return (logseq.shui.ui.separator.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.separator.cljs$core$IFn$_invoke$arity$1(G__44971) : logseq.shui.ui.separator.call(null,G__44971));
})()], null),frontend.components.property.value.repeat_setting(block,property)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$calendar_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44972 = cljs.core.first(args__31746__auto__);
var G__44973 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44972,G__44973) : io.factorhouse.hsx.core.obj_get.call(null,G__44972,G__44973));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"calendar-inner","calendar-inner",551753869,null),args__31746__auto__),frontend$components$property$value$calendar_inner,args__31746__auto__,null);
}
};
var frontend$components$property$value$calendar_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45402__i = 0, G__45402__a = new Array(arguments.length -  0);
while (G__45402__i < G__45402__a.length) {G__45402__a[G__45402__i] = arguments[G__45402__i + 0]; ++G__45402__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45402__a,0,null);
} 
return frontend$components$property$value$calendar_inner__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$calendar_inner.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$calendar_inner.cljs$lang$applyTo = (function (arglist__45403){
var args__31746__auto__ = cljs.core.seq(arglist__45403);
return frontend$components$property$value$calendar_inner__delegate(args__31746__auto__);
});
frontend$components$property$value$calendar_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$calendar_inner__delegate;
return frontend$components$property$value$calendar_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44974 = comp__31745__auto__;
var G__44975 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44974,G__44975) : io.factorhouse.hsx.core.react_memo.call(null,G__44974,G__44975));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"calendar-inner");

return comp__31745__auto__;
})();
frontend.components.property.value.overdue = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$overdue(date,content){
var vec__44976 = logseq.shui.hooks.use_state(cljs_time.core.now());
var current_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44976,(0),null);
var set_current_time_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44976,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var timer = setInterval((function (){
var G__44979 = cljs_time.core.now();
return (set_current_time_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_time_BANG_.cljs$core$IFn$_invoke$arity$1(G__44979) : set_current_time_BANG_.call(null,G__44979));
}),(((1000) * (60)) * (3)));
return (function (){
return clearInterval(timer);
});
}),cljs.core.PersistentVector.EMPTY);

var overdue_QMARK_ = (cljs.core.truth_(date)?cljs_time.core.after_QMARK_(current_time,cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((59)))):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__44980 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(overdue_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__44980,new cljs.core.Keyword(null,"class","class",-2030961996),"overdue",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","overdue","property/overdue",-463061411)], 0))], 0));
} else {
return G__44980;
}
})(),content], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$overdue__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44981 = cljs.core.first(args__31746__auto__);
var G__44982 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44981,G__44982) : io.factorhouse.hsx.core.obj_get.call(null,G__44981,G__44982));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"overdue","overdue",219981465,null),args__31746__auto__),frontend$components$property$value$overdue,args__31746__auto__,null);
}
};
var frontend$components$property$value$overdue = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45404__i = 0, G__45404__a = new Array(arguments.length -  0);
while (G__45404__i < G__45404__a.length) {G__45404__a[G__45404__i] = arguments[G__45404__i + 0]; ++G__45404__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45404__a,0,null);
} 
return frontend$components$property$value$overdue__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$overdue.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$overdue.cljs$lang$applyTo = (function (arglist__45405){
var args__31746__auto__ = cljs.core.seq(arglist__45405);
return frontend$components$property$value$overdue__delegate(args__31746__auto__);
});
frontend$components$property$value$overdue.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$overdue__delegate;
return frontend$components$property$value$overdue;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44983 = comp__31745__auto__;
var G__44984 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44983,G__44984) : io.factorhouse.hsx.core.react_memo.call(null,G__44983,G__44984));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"overdue");

return comp__31745__auto__;
})();
frontend.components.property.value.start_of_local_day = (function frontend$components$property$value$start_of_local_day(d){
var G__44985 = (new Date(d));
G__44985.setHours((0),(0),(0),(0));

return G__44985;
});
frontend.components.property.value.human_date_label = (function frontend$components$property$value$human_date_label(utc_ms){
var given_date = frontend.components.property.value.start_of_local_day((new Date(utc_ms)));
var today = frontend.components.property.value.start_of_local_day((new Date()));
var ms_in_day = ((((24) * (60)) * (60)) * (1000));
var tomorrow = (new Date((today.getTime() + ms_in_day)));
var yesterday = (new Date((today.getTime() - ms_in_day)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(given_date.getTime(),yesterday.getTime())){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("date.nlp","yesterday","date.nlp/yesterday",-1519548575)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(given_date.getTime(),today.getTime())){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("date.nlp","today","date.nlp/today",-877807943)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(given_date.getTime(),tomorrow.getTime())){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("date.nlp","tomorrow","date.nlp/tomorrow",1532438515)], 0));
} else {
return null;

}
}
}
});
frontend.components.property.value.date_page_link_props = (function frontend$components$property$value$date_page_link_props(other_position_QMARK_){
var G__44986 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(other_position_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44986,new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.util.stop_propagation);
} else {
return G__44986;
}
});
frontend.components.property.value.datetime_value = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$datetime_value(value,property_id,repeated_task_QMARK_,p__44987){
var map__44988 = p__44987;
var map__44988__$1 = cljs.core.__destructure_map(map__44988);
var datetime_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44988__$1,new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100));
var other_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44988__$1,new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322));
var suppress_inline_edit_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44988__$1,new cljs.core.Keyword(null,"suppress-inline-edit-icon?","suppress-inline-edit-icon?",-890762700));
var temp__5825__auto__ = cljs_time.core.to_default_time_zone(cljs_time.coerce.from_long(value));
if(cljs.core.truth_(temp__5825__auto__)){
var date = temp__5825__auto__;
var content = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-datetime.flex.flex-row.gap-1.items-center","div.ls-datetime.flex.flex-row.gap-1.items-center",-1207539895),(function (){var temp__5825__auto____$1 = frontend.state.get_component(new cljs.core.Keyword("block","page-cp","block/page-cp",975876274));
if(cljs.core.truth_(temp__5825__auto____$1)){
var page_cp = temp__5825__auto____$1;
var page_title = frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(date);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex","span.inline-flex",788533488),frontend.components.property.value.date_page_link_props(other_position_QMARK_),(function (){var G__44989 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,new cljs.core.Keyword(null,"show-non-exists-page?","show-non-exists-page?",-1180311666),true,new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.property.value.human_date_label(value)], null);
var G__44990 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_title], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__44989,G__44990) : page_cp.call(null,G__44989,G__44990));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page_title], null));
} else {
return null;
}
})(),(cljs.core.truth_(datetime_QMARK_)?(function (){var date__$1 = (new Date(value));
var hours = date__$1.getHours();
var minutes = date__$1.getMinutes();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.select-none","span.select-none",461310438),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),hours,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([minutes], 0)))?(cljs.core.truth_((function (){var or__5142__auto__ = other_position_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return suppress_inline_edit_icon_QMARK_;
}
})())?null:frontend.ui.icon("edit",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(14),new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground hover:text-foreground align-middle"], null))):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.zero_pad.cljs$core$IFn$_invoke$arity$1 ? frontend.util.zero_pad.cljs$core$IFn$_invoke$arity$1(hours) : frontend.util.zero_pad.call(null,hours)))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.zero_pad.cljs$core$IFn$_invoke$arity$1 ? frontend.util.zero_pad.cljs$core$IFn$_invoke$arity$1(minutes) : frontend.util.zero_pad.call(null,minutes)))))], null);
})():null)], null);
if(cljs.core.truth_((function (){var or__5142__auto__ = repeated_task_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","deadline","logseq.property/deadline",1685901604),null,new cljs.core.Keyword("logseq.property","scheduled","logseq.property/scheduled",1644520943),null], null), null),property_id);
}
})())){
return frontend.components.property.value.overdue(date,content);
} else {
return content;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$datetime_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44991 = cljs.core.first(args__31746__auto__);
var G__44992 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44991,G__44992) : io.factorhouse.hsx.core.obj_get.call(null,G__44991,G__44992));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"datetime-value","datetime-value",1242746443,null),args__31746__auto__),frontend$components$property$value$datetime_value,args__31746__auto__,null);
}
};
var frontend$components$property$value$datetime_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45406__i = 0, G__45406__a = new Array(arguments.length -  0);
while (G__45406__i < G__45406__a.length) {G__45406__a[G__45406__i] = arguments[G__45406__i + 0]; ++G__45406__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45406__a,0,null);
} 
return frontend$components$property$value$datetime_value__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$datetime_value.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$datetime_value.cljs$lang$applyTo = (function (arglist__45407){
var args__31746__auto__ = cljs.core.seq(arglist__45407);
return frontend$components$property$value$datetime_value__delegate(args__31746__auto__);
});
frontend$components$property$value$datetime_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$datetime_value__delegate;
return frontend$components$property$value$datetime_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44993 = comp__31745__auto__;
var G__44994 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44993,G__44994) : io.factorhouse.hsx.core.react_memo.call(null,G__44993,G__44994));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"datetime-value");

return comp__31745__auto__;
})();
frontend.components.property.value.delete_block_property_BANG_ = (function frontend$components$property$value$delete_block_property_BANG_(block,property,opts){
frontend.handler.editor.move_cross_boundary_up_down(new cljs.core.Keyword(null,"up","up",-269712113),cljs.core.PersistentArrayMap.EMPTY);

return frontend.handler.property.remove_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preserve-task-tag?","preserve-task-tag?",422655630),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view-parent","view-parent",675596601).cljs$core$IFn$_invoke$arity$1(opts)))], null)], 0));
});
/**
 * True when a date/datetime property has a real value, not an empty placeholder.
 */
frontend.components.property.value.date_property_value_present_QMARK_ = (function frontend$components$property$value$date_property_value_present_QMARK_(value){
return cljs.core.boolean$((((!((value == null)))) && ((!(frontend.components.property.value.empty_placeholder_value_QMARK_(value))))));
});
/**
 * Clear a date/datetime value while keeping the property on the node.
 */
frontend.components.property.value.clear_date_property_value_BANG_ = (function frontend$components$property$value$clear_date_property_value_BANG_(block,property){
var blocks = frontend.components.property.value.get_operating_blocks(block);
return frontend.handler.property.batch_set_block_property_BANG_(frontend.components.property.value.operating_block_ids(blocks),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837));
});
/**
 * Backspace/Delete clears a set date; an already-empty value removes the property.
 */
frontend.components.property.value.date_picker_handle_delete_BANG_ = (function frontend$components$property$value$date_picker_handle_delete_BANG_(e,p__44995){
var map__44996 = p__44995;
var map__44996__$1 = cljs.core.__destructure_map(map__44996);
var opts = map__44996__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44996__$1,new cljs.core.Keyword(null,"block","block",664686210));
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44996__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44996__$1,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355));
var del_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44996__$1,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362));
if(cljs.core.truth_((function (){var and__5140__auto__ = del_btn_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.fn_QMARK_(on_delete);
} else {
return and__5140__auto__;
}
})())){
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(e) : on_delete.call(null,e));
} else {
return frontend.components.property.value.delete_block_property_BANG_(block,property,opts);
}
});
frontend.components.property.value.prevent_bottom_property_edit_pointer_dismiss = (function frontend$components$property$value$prevent_bottom_property_edit_pointer_dismiss(e){
if(cljs.core.truth_((function (){var G__44997 = e.target;
if((G__44997 == null)){
return null;
} else {
return G__44997.closest(".bottom-property-edit-icon");
}
})())){
e.preventDefault();

return false;
} else {
return null;
}
});
frontend.components.property.value.date_picker = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$date_picker(value,p__44998){
var map__44999 = p__44998;
var map__44999__$1 = cljs.core.__destructure_map(map__44999);
var opts = map__44999__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var datetime_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100));
var other_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"block","block",664686210));
var property_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"property-position","property-position",-1150084538));
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355));
var suppress_inline_edit_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"suppress-inline-edit-icon?","suppress-inline-edit-icon?",-890762700));
var del_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362));
var multiple_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,new cljs.core.Keyword(null,"multiple-values?","multiple-values?",1567692022));
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var content_fn = (function (p__45000){
var map__45001 = p__45000;
var map__45001__$1 = cljs.core.__destructure_map(map__45001);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45001__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.property.value.calendar_inner(id,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),del_btn_QMARK_,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),on_delete,new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100),datetime_QMARK_], null));
});
var open_popup_BANG_ = (function (e){
if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.meta_key_QMARK_(e);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.shift_key_QMARK_(e);
}
})())){
return null;
} else {
frontend.util.stop(e);

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

if(frontend.config.publishing_QMARK_){
return null;
} else {
var G__45002 = e.target;
var G__45003 = content_fn;
var G__45004 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"auto-focus?","auto-focus?",1021654593),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"without-animation","without-animation",-1847940594),true,new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),frontend.components.property.value.prevent_bottom_property_edit_pointer_dismiss], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45002,G__45003,G__45004) : logseq.shui.ui.popup_show_BANG_.call(null,G__45002,G__45003,G__45004));
}
}
});
var repeated_task_QMARK_ = new cljs.core.Keyword("logseq.property.repeat","repeated?","logseq.property.repeat/repeated?",1908121789).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(editing_QMARK_)){
return content_fn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-picker","date-picker",882557010)], null));
} else {
if(cljs.core.truth_(multiple_values_QMARK_)){
var G__45005 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"jtrigger h-6 empty-btn",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_popup_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Backspace",null,"Delete",null], null), null),frontend.util.ekey(e))){
return frontend.components.property.value.date_picker_handle_delete_BANG_(e,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"block","block",664686210),block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),on_delete,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),del_btn_QMARK_], 0)));
} else {
return null;
}
})], null);
var G__45006 = frontend.ui.icon("calendar-plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45005,G__45006) : logseq.shui.ui.button.call(null,G__45005,G__45006));
} else {
var G__45007 = new cljs.core.Keyword(null,"div.flex.flex-1.flex-row.gap-1.items-center.flex-wrap","div.flex.flex-1.flex-row.gap-1.items-center.flex-wrap",418909079);
var G__45008 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"jtrigger min-h-[24px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_popup_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__45010 = frontend.util.ekey(e);
switch (G__45010) {
case "Backspace":
case "Delete":
return frontend.components.property.value.date_picker_handle_delete_BANG_(e,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"block","block",664686210),block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),on_delete,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),del_btn_QMARK_], 0)));

break;
case " ":
case "Enter":
var G__45011_45409 = logseq.shui.hooks.deref(_STAR_el);
if((G__45011_45409 == null)){
} else {
G__45011_45409.click();
}

return frontend.util.stop(e);

break;
default:
return null;

}
})], null);
var G__45009 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),(cljs.core.truth_(repeated_task_QMARK_)?frontend.ui.icon("repeat",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(14),new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-40"], null)):null),(((!(frontend.components.property.value.date_property_value_present_QMARK_(value))))?frontend.components.property.value.property_empty_btn_value(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-position","property-position",-1150084538),property_position], null)):((cljs.core.map_QMARK_(value))?(function (){var date = cljs_time.coerce.to_date_time((function (){var G__45012 = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(value);
return (frontend.date.journal_day__GT_utc_ms.cljs$core$IFn$_invoke$arity$1 ? frontend.date.journal_day__GT_utc_ms.cljs$core$IFn$_invoke$arity$1(G__45012) : frontend.date.journal_day__GT_utc_ms.call(null,G__45012));
})());
var compare_value = (function (){var G__45013 = date;
var G__45013__$1 = (((G__45013 == null))?null:cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(G__45013,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
if((G__45013__$1 == null)){
return null;
} else {
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(G__45013__$1,cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((1)));
}
})();
var content = (function (){var temp__5825__auto__ = frontend.state.get_component(new cljs.core.Keyword("block","page-cp","block/page-cp",975876274));
if(cljs.core.truth_(temp__5825__auto__)){
var page_cp = temp__5825__auto__;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex","span.inline-flex",788533488),frontend.components.property.value.date_page_link_props(other_position_QMARK_),(function (){var G__45014 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.property.value.human_date_label(value)], null);
var G__45015 = value;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__45014,G__45015) : page_cp.call(null,G__45014,G__45015));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value)], null));
} else {
return null;
}
})();
if(cljs.core.truth_((function (){var or__5142__auto__ = repeated_task_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","deadline","logseq.property/deadline",1685901604),null,new cljs.core.Keyword("logseq.property","scheduled","logseq.property/scheduled",1644520943),null], null), null),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
}
})())){
return frontend.components.property.value.overdue(compare_value,content);
} else {
return content;
}
})():((typeof value === 'number')?frontend.components.property.value.datetime_value(value,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),repeated_task_QMARK_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100),datetime_QMARK_,new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322),other_position_QMARK_,new cljs.core.Keyword(null,"suppress-inline-edit-icon?","suppress-inline-edit-icon?",-890762700),suppress_inline_edit_icon_QMARK_], null)):frontend.components.property.value.property_empty_btn_value(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-position","property-position",-1150084538),property_position], null))
)))], null);
return (logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3(G__45007,G__45008,G__45009) : logseq.shui.ui.trigger_as.call(null,G__45007,G__45008,G__45009));
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$date_picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45016 = cljs.core.first(args__31746__auto__);
var G__45017 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45016,G__45017) : io.factorhouse.hsx.core.obj_get.call(null,G__45016,G__45017));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"date-picker","date-picker",-1771878759,null),args__31746__auto__),frontend$components$property$value$date_picker,args__31746__auto__,null);
}
};
var frontend$components$property$value$date_picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45410__i = 0, G__45410__a = new Array(arguments.length -  0);
while (G__45410__i < G__45410__a.length) {G__45410__a[G__45410__i] = arguments[G__45410__i + 0]; ++G__45410__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45410__a,0,null);
} 
return frontend$components$property$value$date_picker__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$date_picker.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$date_picker.cljs$lang$applyTo = (function (arglist__45411){
var args__31746__auto__ = cljs.core.seq(arglist__45411);
return frontend$components$property$value$date_picker__delegate(args__31746__auto__);
});
frontend$components$property$value$date_picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$date_picker__delegate;
return frontend$components$property$value$date_picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45018 = comp__31745__auto__;
var G__45019 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45018,G__45019) : io.factorhouse.hsx.core.react_memo.call(null,G__45018,G__45019));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"date-picker");

return comp__31745__auto__;
})();
frontend.components.property.value.property_value_date_picker = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$property_value_date_picker(block,property,value,opts){
var multiple_values_QMARK_ = logseq.db.frontend.property.many_QMARK_(property);
var datetime_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
return frontend.components.property.value.date_picker(value,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100),datetime_QMARK_,new cljs.core.Keyword(null,"multiple-values?","multiple-values?",1567692022),multiple_values_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (value__$1){
var blocks = frontend.components.property.value.get_operating_blocks(block);
return frontend.handler.property.batch_set_block_property_BANG_(frontend.components.property.value.operating_block_ids(blocks),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),((datetime_QMARK_)?value__$1:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value__$1)));
}),new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),frontend.components.property.value.date_property_value_present_QMARK_(value),new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),(function (e){
frontend.util.stop_propagation(e);

frontend.components.property.value.clear_date_property_value_BANG_(block,property);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null)], 0)));
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$property_value_date_picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45020 = cljs.core.first(args__31746__auto__);
var G__45021 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45020,G__45021) : io.factorhouse.hsx.core.obj_get.call(null,G__45020,G__45021));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-value-date-picker","property-value-date-picker",1288468583,null),args__31746__auto__),frontend$components$property$value$property_value_date_picker,args__31746__auto__,null);
}
};
var frontend$components$property$value$property_value_date_picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45412__i = 0, G__45412__a = new Array(arguments.length -  0);
while (G__45412__i < G__45412__a.length) {G__45412__a[G__45412__i] = arguments[G__45412__i + 0]; ++G__45412__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45412__a,0,null);
} 
return frontend$components$property$value$property_value_date_picker__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$property_value_date_picker.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$property_value_date_picker.cljs$lang$applyTo = (function (arglist__45413){
var args__31746__auto__ = cljs.core.seq(arglist__45413);
return frontend$components$property$value$property_value_date_picker__delegate(args__31746__auto__);
});
frontend$components$property$value$property_value_date_picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_value_date_picker__delegate;
return frontend$components$property$value$property_value_date_picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45022 = comp__31745__auto__;
var G__45023 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45022,G__45023) : io.factorhouse.hsx.core.react_memo.call(null,G__45022,G__45023));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-value-date-picker");

return comp__31745__auto__;
})();
frontend.components.property.value.broad_scoped_node_class_idents = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null], null), null);
frontend.components.property.value.broad_scoped_node_property_QMARK_ = (function frontend$components$property$value$broad_scoped_node_property_QMARK_(property,classes){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
if(and__5140__auto__){
return cljs.core.some((function (p1__45024_SHARP_){
return cljs.core.contains_QMARK_(frontend.components.property.value.broad_scoped_node_class_idents,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__45024_SHARP_));
}),classes);
} else {
return and__5140__auto__;
}
});
frontend.components.property.value.scoped_class_ids = (function frontend$components$property$value$scoped_class_ids(classes,structured_children_by_class_id){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (class$){
return cljs.core.cons(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$),cljs.core.get.cljs$core$IFn$_invoke$arity$2(structured_children_by_class_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([classes], 0)));
});
/**
 * Returns the oldest page named `page-name` that is tagged with one of `class-ids`
 */
frontend.components.property.value._LT_get_scoped_page_id = (function frontend$components$property$value$_LT_get_scoped_page_id(repo,page_name,class_ids){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__45025 = repo;
var G__45026 = cljs.core.PersistentArrayMap.EMPTY;
var G__45027 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?class","?class",919269736,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?class","?class",919269736,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751)], null))], null);
var G__45028 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var G__45029 = cljs.core.vec(class_ids);
return (frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$5 ? frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$5(G__45025,G__45026,G__45027,G__45028,G__45029) : frontend.db.async._LT_q.call(null,G__45025,G__45026,G__45027,G__45028,G__45029));
})()),(function (ids){
return promesa.protocols._promise(cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(ids)));
}));
}));
});
frontend.components.property.value._LT_create_page_if_not_exists_BANG_ = (function frontend$components$property$value$_LT_create_page_if_not_exists_BANG_(block,property,classes,p__45030,page){
var map__45031 = p__45030;
var map__45031__$1 = cljs.core.__destructure_map(map__45031);
var extends_by_class_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"extends-by-class-id","extends-by-class-id",631811706));
var structured_children_by_class_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"structured-children-by-class-id","structured-children-by-class-id",-744368325));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(clojure.string.trim(page)),(function (page_STAR_){
return promesa.protocols._mcat(promesa.protocols._promise(((((cljs.core.seq(classes)) && ((!(cljs.core.contains_QMARK_(logseq.db.frontend.property.db_attribute_properties,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))))))?(function (){var or__5142__auto__ = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.rest(cljs.core.re_find(/(.*)#(.*)$/,page_STAR_))));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_STAR_,null], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_STAR_,null], null))),(function (p__45032){
var vec__45033 = p__45032;
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45033,(0),null);
var inline_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45033,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
if(and__5140__auto__){
return frontend.util.entity.class_QMARK_(block);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var classes__$1 = new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486).cljs$core$IFn$_invoke$arity$1(property);
return ((cljs.core.seq(classes__$1)) && (cljs.core.every_QMARK_((function (class$){
var or__5142__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
return cljs.core.some((function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(e));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(extends_by_class_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$)));
}
}),classes__$1)));
}
}
})()),(function (class_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(((((cljs.core.seq(classes)) && (((cljs.core.not(class_QMARK_)) && (cljs.core.not(frontend.components.property.value.broad_scoped_node_property_QMARK_(property,classes)))))))?frontend.components.property.value.scoped_class_ids(classes,structured_children_by_class_id):null)),(function (scope_class_ids){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(scope_class_ids)?null:frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,page__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)))),(function (page_entity){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(scope_class_ids)?frontend.components.property.value._LT_get_scoped_page_id(repo,page__$1,scope_class_ids):new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity))),(function (id){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.util.entity.internal_page_QMARK_(page_entity)),(function (page_QMARK_){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = (id == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(page_QMARK_);
} else {
return and__5140__auto__;
}
}
})())?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(inline_class)?frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,inline_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)):null)),(function (inline_class_entity){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(inline_class)?(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(inline_class_entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.property.value",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Given inline class does not exist",new cljs.core.Keyword(null,"inline-class","inline-class",1765361162),inline_class,new cljs.core.Keyword(null,"line","line",212345235),1190], null)),null);
} else {
}

return null;
}
})():null)),(function (inline_class_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"tags","tags",1771418977),(cljs.core.truth_(inline_class_uuid)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_class_uuid], null):(function (){var classes_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),classes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)], null)))?classes:cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(c));
}),classes)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),classes_SINGLEQUOTE_);
})())], null)),(function (create_options){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(class_QMARK_)?frontend.handler.db_based.page._LT_create_class_BANG_(page__$1,create_options):(frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(page__$1,create_options) : frontend.handler.page._LT_create_BANG_.call(null,page__$1,create_options)))),(function (page__$2){
return promesa.protocols._promise(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$2));
}));
})));
}));
}));
}));
})):(cljs.core.truth_((function (){var and__5140__auto__ = class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = page_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return id;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.page.convert_page_to_tag_BANG_(page_entity)),(function (_){
return promesa.protocols._promise(id);
}));
})):id
)));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
frontend.components.property.value.sort_select_items = (function frontend$components$property$value$sort_select_items(property,selected_choices,items){
if(cljs.core.truth_(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))){
return items;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.not((function (){var G__45036 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item);
return (selected_choices.cljs$core$IFn$_invoke$arity$1 ? selected_choices.cljs$core$IFn$_invoke$arity$1(G__45036) : selected_choices.call(null,G__45036));
})());
}),logseq.db.frontend.property.property_value_content),items);
}
});
frontend.components.property.value.select_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$select_aux(block,property,p__45039){
var map__45040 = p__45039;
var map__45040__$1 = cljs.core.__destructure_map(map__45040);
var opts = map__45040__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var selected_choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317));
var multiple_choices_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490));
var selected_choices__$1 = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45037_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),p1__45037_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,selected_choices)));
var clear_value = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","clear-value","property/clear-value",-778956640)], 0));
var clear_value_label = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1.text-sm","div.flex.flex-row.items-center.gap-1.text-sm",1556443449),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clear_value], null)], null);
var sorted_items = logseq.shui.hooks.use_memo((function (){
return frontend.components.property.value.sort_select_items(property,selected_choices__$1,items);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,selected_choices__$1,items], null));
var items_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45038_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__45038_SHARP_));
}),((((cljs.core.seq(selected_choices__$1)) && (((cljs.core.not(multiple_choices_QMARK_)) && (((cljs.core.not((function (){var and__5140__auto____$2 = frontend.util.entity.class_QMARK_(block);
if(cljs.core.truth_(and__5140__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803));
} else {
return and__5140__auto____$2;
}
})())) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607)))))))))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sorted_items,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(property),cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","scalar-default-value","logseq.property/scalar-default-value",1595723014).cljs$core$IFn$_invoke$arity$1(property),cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))))))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),clear_value,new cljs.core.Keyword(null,"label","label",1718410804),clear_value_label,new cljs.core.Keyword(null,"clear?","clear?",1363344639),true], null)], null))):sorted_items));
var k = new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,k);
var f_SINGLEQUOTE_ = (function (chosen,selected_QMARK_){
if(cljs.core.truth_((function (){var or__5142__auto__ = ((cljs.core.not(multiple_choices_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chosen,clear_value)));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = multiple_choices_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chosen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clear_value], null));
} else {
return and__5140__auto__;
}
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var blocks = frontend.components.property.value.get_operating_blocks(block);
var block_ids = frontend.components.property.value.operating_block_ids(blocks);
return frontend.handler.property.batch_remove_block_property_BANG_(block_ids,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
})()),(function (___21901__auto__){
return promesa.protocols._promise(((new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059).cljs$core$IFn$_invoke$arity$1(opts) === false)?null:(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null))));
}));
}));
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(chosen,selected_QMARK_) : f.call(null,chosen,selected_QMARK_));
}
});
return frontend.components.select.select(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317),selected_choices__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"items","items",1031954938),items_SINGLEQUOTE_,new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),false,k,f_SINGLEQUOTE_], 0)));
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$select_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45041 = cljs.core.first(args__31746__auto__);
var G__45042 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45041,G__45042) : io.factorhouse.hsx.core.obj_get.call(null,G__45041,G__45042));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"select-aux","select-aux",428891192,null),args__31746__auto__),frontend$components$property$value$select_aux,args__31746__auto__,null);
}
};
var frontend$components$property$value$select_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45414__i = 0, G__45414__a = new Array(arguments.length -  0);
while (G__45414__i < G__45414__a.length) {G__45414__a[G__45414__i] = arguments[G__45414__i + 0]; ++G__45414__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45414__a,0,null);
} 
return frontend$components$property$value$select_aux__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$select_aux.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$select_aux.cljs$lang$applyTo = (function (arglist__45415){
var args__31746__auto__ = cljs.core.seq(arglist__45415);
return frontend$components$property$value$select_aux__delegate(args__31746__auto__);
});
frontend$components$property$value$select_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$select_aux__delegate;
return frontend$components$property$value$select_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45043 = comp__31745__auto__;
var G__45044 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45043,G__45044) : io.factorhouse.hsx.core.react_memo.call(null,G__45043,G__45044));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"select-aux");

return comp__31745__auto__;
})();
frontend.components.property.value.add_initial_node_choice = (function frontend$components$property$value$add_initial_node_choice(initial_choices,new_choice){
var choice_node_value = (function (choice){
var or__5142__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(choice);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return choice;
}
});
var node_choice_match_QMARK_ = (function (choice){
var choice_value = choice_node_value(choice);
var new_value = choice_node_value(new_choice);
var or__5142__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice_value);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice_value),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new_value));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(choice_value);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(choice_value),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_value));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice_value,new_value);
}
}
});
var initial_choices_SINGLEQUOTE_ = cljs.core.vec(initial_choices);
if(cljs.core.truth_(cljs.core.some(node_choice_match_QMARK_,initial_choices_SINGLEQUOTE_))){
return initial_choices_SINGLEQUOTE_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(initial_choices_SINGLEQUOTE_,new_choice);
}
});
frontend.components.property.value.node_matches_scoped_classes_QMARK_ = (function frontend$components$property$value$node_matches_scoped_classes_QMARK_(class_ids,node){
var node_value = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return node;
}
})();
var node_SINGLEQUOTE_ = node_value;
return cljs.core.some((function (p1__45045_SHARP_){
return cljs.core.contains_QMARK_(class_ids,((cljs.core.integer_QMARK_(p1__45045_SHARP_))?p1__45045_SHARP_:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__45045_SHARP_)));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(node_SINGLEQUOTE_));
});
frontend.components.property.value.scoped_class_nodes = (function frontend$components$property$value$scoped_class_nodes(property,classes,result,structured_children_by_class_id){
var broad_scope_QMARK_ = frontend.components.property.value.broad_scoped_node_property_QMARK_(property,classes);
if((!((result == null)))){
var class_ids = frontend.components.property.value.scoped_class_ids(classes,structured_children_by_class_id);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45046_SHARP_){
return frontend.components.property.value.node_matches_scoped_classes_QMARK_(class_ids,p1__45046_SHARP_);
}),result);
} else {
if(cljs.core.truth_(broad_scope_QMARK_)){
return cljs.core.PersistentVector.EMPTY;
} else {
return null;
}
}
});
frontend.components.property.value._LT_load_initial_node_choices = (function frontend$components$property$value$_LT_load_initial_node_choices(var_args){
var G__45048 = arguments.length;
switch (G__45048) {
case 3:
return frontend.components.property.value._LT_load_initial_node_choices.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return frontend.components.property.value._LT_load_initial_node_choices.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.property.value._LT_load_initial_node_choices.cljs$core$IFn$_invoke$arity$3 = (function (repo,property,non_root_classes){
return frontend.components.property.value._LT_load_initial_node_choices.cljs$core$IFn$_invoke$arity$5(repo,property,non_root_classes,frontend.db.async._LT_get_property_values,frontend.db.async._LT_get_tag_objects);
}));

(frontend.components.property.value._LT_load_initial_node_choices.cljs$core$IFn$_invoke$arity$5 = (function (repo,property,non_root_classes,_LT_get_property_values,_LT_get_tag_objects){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))){
return frontend.handler.property.get_class_property_choices();
} else {
if(cljs.core.seq(non_root_classes)){
if(cljs.core.truth_(frontend.components.property.value.broad_scoped_node_property_QMARK_(property,non_root_classes))){
var G__45049 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
return (_LT_get_property_values.cljs$core$IFn$_invoke$arity$1 ? _LT_get_property_values.cljs$core$IFn$_invoke$arity$1(G__45049) : _LT_get_property_values.call(null,G__45049));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (class$){
var G__45050 = repo;
var G__45051 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$);
return (_LT_get_tag_objects.cljs$core$IFn$_invoke$arity$2 ? _LT_get_tag_objects.cljs$core$IFn$_invoke$arity$2(G__45050,G__45051) : _LT_get_tag_objects.call(null,G__45050,G__45051));
}),non_root_classes))),(function (result){
return promesa.protocols._promise(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,result)));
}));
}));
}
} else {
var G__45052 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
return (_LT_get_property_values.cljs$core$IFn$_invoke$arity$1 ? _LT_get_property_values.cljs$core$IFn$_invoke$arity$1(G__45052) : _LT_get_property_values.call(null,G__45052));
}
}
}));

(frontend.components.property.value._LT_load_initial_node_choices.cljs$lang$maxFixedArity = 5);

frontend.components.property.value.select_node = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$select_node(property,p__45059,result){
var map__45060 = p__45059;
var map__45060__$1 = cljs.core.__destructure_map(map__45060);
var opts = map__45060__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"block","block",664686210));
var multiple_choices_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490));
var dropdown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"dropdown?","dropdown?",-1027769147));
var input_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135));
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var add_new_choice_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"add-new-choice!","add-new-choice!",-1703027977));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"target","target",253001721));
var vec__45061 = logseq.shui.hooks.use_state(null);
var _STAR_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45061,(0),null);
var set_input_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45061,(1),null);
var vec__45064 = logseq.shui.hooks.use_state(null);
var _STAR_selected_choices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45064,(0),null);
var set__STAR_selected_choices_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45064,(1),null);
var map__45067 = new cljs.core.Keyword(null,"class-data","class-data",1102939556).cljs$core$IFn$_invoke$arity$1(opts);
var map__45067__$1 = cljs.core.__destructure_map(map__45067);
var all_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45067__$1,new cljs.core.Keyword(null,"all-classes","all-classes",-2040626813));
var class_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45067__$1,new cljs.core.Keyword(null,"class-options","class-options",1504375333));
var extends_class_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45067__$1,new cljs.core.Keyword(null,"extends-class-options","extends-class-options",-1953028329));
var structured_children_by_class_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45067__$1,new cljs.core.Keyword(null,"structured-children-by-class-id","structured-children-by-class-id",-744368325));
var extends_by_class_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45067__$1,new cljs.core.Keyword(null,"extends-by-class-id","extends-by-class-id",631811706));
var classes = new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486).cljs$core$IFn$_invoke$arity$1(property);
var tags_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
var page_class = cljs.core.some((function (class$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$))){
return class$;
} else {
return null;
}
}),all_classes);
var page_class_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_class);
var page_class_title = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_class);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.block.block_unique_title(page_class);
}
})();
var page_option = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label-value","label-value",-1719020519),page_class_title,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),page_class_title], null)], null),new cljs.core.Keyword(null,"value","value",305978217),page_class_id], null);
var alias_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
var tags_or_alias_QMARK_ = ((tags_QMARK_) || (alias_QMARK_));
var block__$1 = block;
var alias_source_page = ((alias_QMARK_)?(function (){var or__5142__auto__ = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block__$1;
}
})():null);
var alias_source_page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(alias_source_page);
var alias_source_page_owned_QMARK_ = (function (){var and__5140__auto__ = alias_QMARK_;
if(and__5140__auto__){
return new cljs.core.Keyword("block","alias-source-page-id","block/alias-source-page-id",-1864867404).cljs$core$IFn$_invoke$arity$1(alias_source_page);
} else {
return and__5140__auto__;
}
})();
var selected_choices = (cljs.core.truth_(block__$1)?frontend.components.property.value.property_value__GT_ids(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))):null);
var selected_choice_ids = cljs.core.set(selected_choices);
var extends_property_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803));
var children_pages = ((extends_property_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(structured_children_by_class_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1)):null);
var property_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var nodes = ((extends_property_QMARK_)?(function (){var extends$ = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__45053_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(extends_by_class_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__45053_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803).cljs$core$IFn$_invoke$arity$1(block__$1)], 0)));
var exclude_ids = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(children_pages),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),extends$)));
var options = (cljs.core.truth_(frontend.util.entity.class_QMARK_(block__$1))?extends_class_options:result);
var excluded_options = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.contains_QMARK_(exclude_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e));
}),options);
return excluded_options;
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996),property_type))?(function (){var include_page_class_QMARK_ = ((cljs.core.contains_QMARK_(selected_choice_ids,page_class_id)) || (cljs.core.not((function (){var or__5142__auto____$1 = (function (){var and__5140__auto__ = frontend.util.entity.page_QMARK_(block__$1);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.entity.internal_page_QMARK_(block__$1));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())));
var G__45068 = class_options;
if(include_page_class_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45068,page_class);
} else {
return G__45068;
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property","property",-1114278232),property_type))?result:((cljs.core.seq(classes))?frontend.components.property.value.scoped_class_nodes(property,classes,result,structured_children_by_class_id):((cljs.core.empty_QMARK_(result))?(function (){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45054_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__45054_SHARP_));
}),((cljs.core.every_QMARK_(frontend.components.property.value.entity_map_QMARK_,v))?v:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)));
})():cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (node){
var node_SINGLEQUOTE_ = (cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(node)):node);
var node__$1 = node_SINGLEQUOTE_;
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node__$1));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = ((alias_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(alias_source_page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node__$1))));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var and__5140__auto__ = alias_QMARK_;
if(and__5140__auto__){
var temp__5825__auto__ = new cljs.core.Keyword("block","alias-source-page-id","block/alias-source-page-id",-1864867404).cljs$core$IFn$_invoke$arity$1(node__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var owner_id = temp__5825__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(owner_id,alias_source_page_id);
} else {
return null;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = ((alias_QMARK_) && (cljs.core.seq(new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(node__$1))));
if(or__5142__auto____$3){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = alias_source_page_owned_QMARK_;
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
var or__5142__auto____$5 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(node__$1));
if(or__5142__auto____$5){
return or__5142__auto____$5;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_type,new cljs.core.Keyword(null,"class","class",-2030961996))){
var G__45069 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(node__$1);
return (logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1(G__45069) : logseq.db.private_tags.call(null,G__45069));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = property_type;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(property_type,new cljs.core.Keyword(null,"node","node",581201198));
} else {
return and__5140__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_type,new cljs.core.Keyword(null,"page","page",849072397))){
return cljs.core.not(frontend.util.entity.page_QMARK_(node__$1));
} else {
return (!(cljs.core.contains_QMARK_(frontend.util.entity.get_entity_types(node__$1),property_type)));
}
} else {
return false;

}
}
}
}
}
}
}
}
}),result))
))));
var nodes__$1 = (function (){var G__45070 = nodes;
if(tags_QMARK_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.util.entity.property_QMARK_,G__45070);
} else {
return G__45070;
}
})();
var options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
var node__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(node)):node);
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node__$1);
var title = ((cljs.core.integer_QMARK_(id))?((cljs.core.seq(new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486).cljs$core$IFn$_invoke$arity$1(property)))?(function (){var G__45074 = logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$1(node__$1);
if((G__45074 == null)){
return null;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(G__45074,(0),(256));
}
})():frontend.handler.block.block_unique_title(node__$1)):null);
var vec__45071 = ((cljs.core.integer_QMARK_(id))?(cljs.core.truth_(title)?(function (){var node__$2 = node__$1;
var header = (cljs.core.truth_(frontend.util.entity.page_QMARK_(node__$2))?null:(function (){var temp__5825__auto__ = frontend.state.get_component(new cljs.core.Keyword("block","breadcrumb","block/breadcrumb",1725167425));
if(cljs.core.truth_(temp__5825__auto__)){
var breadcrumb = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-70","div.text-xs.opacity-70",-1130707358),(function (){var G__45075 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search?","search?",785472524),true], null);
var G__45076 = frontend.state.get_current_repo();
var G__45077 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(node__$2);
var G__45078 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"block","block",664686210),node__$2], null);
return (breadcrumb.cljs$core$IFn$_invoke$arity$4 ? breadcrumb.cljs$core$IFn$_invoke$arity$4(G__45075,G__45076,G__45077,G__45078) : breadcrumb.call(null,G__45075,G__45076,G__45077,G__45078));
})()], null);
} else {
return null;
}
})());
var label = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null), null),property_type);
}
})())?null:frontend.components.icon.get_node_icon_cp(node__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-current-icon?","ignore-current-icon?",-1279467710),true], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),null,new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null), null),property_type))?title:frontend.handler.block.block_title_with_icon(node__$2,title,frontend.components.icon.icon))], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header,label], null);
})():null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(node__$1)], null));
var header = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45071,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45071,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node__$1,new cljs.core.Keyword(null,"header","header",119441134),header,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label-value","label-value",-1719020519),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(node__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return title;
}
})(),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"value","value",305978217),id,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),((tags_QMARK_) && (cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081),null], null), null),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(logseq.db.internal_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null], null), null))),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(node__$1))))], 0));
}),nodes__$1);
var options__$1 = (function (){var allow_page_class_QMARK_ = ((cljs.core.contains_QMARK_(selected_choice_ids,page_class_id)) || (cljs.core.not((function (){var or__5142__auto____$1 = (function (){var and__5140__auto__ = frontend.util.entity.page_QMARK_(block__$1);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.entity.internal_page_QMARK_(block__$1));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())));
if(cljs.core.truth_((function (){var and__5140__auto__ = tags_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = allow_page_class_QMARK_;
if(and__5140__auto____$1){
var and__5140__auto____$2 = page_class;
if(cljs.core.truth_(and__5140__auto____$2)){
return page_class_title;
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.cons(page_option,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45055_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__45055_SHARP_),page_class_id);
}),options));
} else {
return options;
}
})();
var classes_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (class$){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Root","logseq.class/Root",273783827),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$));
}),classes);
var opts_SINGLEQUOTE_ = (function (){var G__45079 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tap-*input-val","tap-*input-val",1531539652),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),new cljs.core.Keyword(null,"dropdown?","dropdown?",-1027769147),new cljs.core.Keyword(null,"show-new-when-not-exact-match?","show-new-when-not-exact-match?",1510536201),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),new cljs.core.Keyword(null,"extract-chosen-fn","extract-chosen-fn",1058364622),new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"on-input","on-input",-267523366),new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317),new cljs.core.Keyword(null,"tap-*selected-choices","tap-*selected-choices",1550705437)],[set_input_BANG_,(function (chosen,selected_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050))) && ((!(cljs.core.integer_QMARK_(chosen)))))),(function (add_tag_property_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.integer_QMARK_(chosen))?chosen:((clojure.string.blank_QMARK_(clojure.string.trim(chosen)))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050)))?(function (){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block","block",664686210),block__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),true,new cljs.core.Keyword(null,"property-key","property-key",972402246),chosen,new cljs.core.Keyword(null,"target","target",253001721),target], null)], null));
})()
:frontend.components.property.value._LT_create_page_if_not_exists_BANG_(block__$1,property,classes_SINGLEQUOTE_,new cljs.core.Keyword(null,"class-data","class-data",1102939556).cljs$core$IFn$_invoke$arity$1(opts),chosen))))),(function (id){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.integer_QMARK_(id))?frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)):null)),(function (entity){
return promesa.protocols._promise((cljs.core.truth_(id)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value.add_or_remove_property_value(block__$1,property,id,selected_QMARK_,cljs.core.PersistentArrayMap.EMPTY)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.fn_QMARK_(add_new_choice_BANG_))?(function (){var G__45080 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity)], null);
return (add_new_choice_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_new_choice_BANG_.cljs$core$IFn$_invoke$arity$1(G__45080) : add_new_choice_BANG_.call(null,G__45080));
})():null)),(function (___21901__auto____$1){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = _STAR_selected_choices;
if(cljs.core.truth_(and__5140__auto____$1)){
return (!(cljs.core.integer_QMARK_(chosen)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_selected_choices,(function (choices){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(choices),chosen),id);
})):null));
}));
}));
})):(cljs.core.truth_(add_tag_property_QMARK_)?null:((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.property.value",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"No :db/id found or created for chosen",new cljs.core.Keyword(null,"chosen","chosen",-1422409985),chosen,new cljs.core.Keyword(null,"line","line",212345235),1516], null)),null):null))));
}));
}));
}));
}));
}),dropdown_QMARK_,cljs.core.not((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = extends_property_QMARK_;
if(and__5140__auto__){
var or__5142__auto__ = cljs.core.contains_QMARK_(cljs.core.set(children_pages),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var temp__5825__auto__ = (cljs.core.truth_(_STAR_input)?cljs.core.deref(_STAR_input):null);
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
if(clojure.string.blank_QMARK_(input)){
return null;
} else {
return cljs.core.some((function (ident){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,cljs.core.name(ident));
}),logseq.db.extends_hidden_tags);
}
} else {
return null;
}
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),classes_SINGLEQUOTE_)),logseq.db.private_tags))));
}
})()),(function (x){
var or__5142__auto__ = new cljs.core.Keyword(null,"label-value","label-value",-1719020519).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(x);
}
}),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-placeholder","property/set-placeholder",1496216379),logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t)], 0)),new cljs.core.Keyword(null,"value","value",305978217),input_opts,multiple_choices_QMARK_,options__$1,goog.functions.debounce(on_input,(50)),selected_choices,set__STAR_selected_choices_BANG_])], 0));
var G__45079__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__45079,new cljs.core.Keyword(null,"exact-match-exclude-items","exact-match-exclude-items",-668398850),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,logseq.db.private_tags)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (results,input){
if(cljs.core.truth_((function (){var and__5140__auto__ = page_class_id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = page_class_title;
if(cljs.core.truth_(and__5140__auto____$1)){
return clojure.string.includes_QMARK_(clojure.string.lower_case(page_class_title),clojure.string.lower_case((function (){var or__5142__auto__ = input;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.cons(page_option,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45056_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__45056_SHARP_),page_class_id);
}),results));
} else {
return results;
}
})], 0)):G__45079);
if(((cljs.core.seq(classes_SINGLEQUOTE_)) && ((!(tags_or_alias_QMARK_))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45079__$1,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (results,input){
var temp__5823__auto__ = (function (){var and__5140__auto__ = cljs.core.empty_QMARK_(results);
if(and__5140__auto__){
return cljs.core.re_find(/(.*)#(.*)$/,input);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var vec__45081 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45081,(0),null);
var new_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45081,(1),null);
var class_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45081,(2),null);
var descendent_classes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
return cljs.core.some((function (class$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$))){
return class$;
} else {
return null;
}
}),all_classes);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__45057_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(structured_children_by_class_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__45057_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([classes_SINGLEQUOTE_], 0)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_page)+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"label","label",1718410804),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_page)+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p)))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45058_SHARP_){
return clojure.string.includes_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__45058_SHARP_),class_input);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(classes_SINGLEQUOTE_,descendent_classes)));
} else {
return results;
}
}));
} else {
return G__45079__$1;
}
})();
return frontend.components.property.value.select_aux(block__$1,property,opts_SINGLEQUOTE_);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$select_node__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45084 = cljs.core.first(args__31746__auto__);
var G__45085 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45084,G__45085) : io.factorhouse.hsx.core.obj_get.call(null,G__45084,G__45085));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"select-node","select-node",-599311578,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$property$value$select_node,args__31746__auto__,null);
}
};
var frontend$components$property$value$select_node = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45417__i = 0, G__45417__a = new Array(arguments.length -  0);
while (G__45417__i < G__45417__a.length) {G__45417__a[G__45417__i] = arguments[G__45417__i + 0]; ++G__45417__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45417__a,0,null);
} 
return frontend$components$property$value$select_node__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$select_node.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$select_node.cljs$lang$applyTo = (function (arglist__45418){
var args__31746__auto__ = cljs.core.seq(arglist__45418);
return frontend$components$property$value$select_node__delegate(args__31746__auto__);
});
frontend$components$property$value$select_node.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$select_node__delegate;
return frontend$components$property$value$select_node;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45086 = comp__31745__auto__;
var G__45087 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45086,G__45087) : io.factorhouse.hsx.core.react_memo.call(null,G__45086,G__45087));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"select-node");

return comp__31745__auto__;
})();
frontend.components.property.value.class_by_ident = (function frontend$components$property$value$class_by_ident(classes,ident){
return cljs.core.some((function (class$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ident,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$))){
return class$;
} else {
return null;
}
}),classes);
});
frontend.components.property.value.property_value_select_node = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$property_value_select_node(block,property,opts,p__45088){
var map__45089 = p__45088;
var map__45089__$1 = cljs.core.__destructure_map(map__45089);
var _STAR_show_new_property_config_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword(null,"*show-new-property-config?","*show-new-property-config?",-1054571618));
var vec__45090 = logseq.shui.hooks.use_state(null);
var initial_choices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45090,(0),null);
var set_initial_choices_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45090,(1),null);
var vec__45093 = logseq.shui.hooks.use_state(null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45093,(0),null);
var set_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45093,(1),null);
var _STAR_initial_choices = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var current_initial_choices = (function (){
var or__5142__auto__ = logseq.shui.hooks.deref(_STAR_initial_choices);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return initial_choices;
}
});
var set_initial_choices_BANG_ = (function (value){
logseq.shui.hooks.set_ref_BANG_(_STAR_initial_choices,value);

return (set_initial_choices_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_initial_choices_state_BANG_.cljs$core$IFn$_invoke$arity$1(value) : set_initial_choices_state_BANG_.call(null,value));
});
var set_result_and_initial_choices_BANG_ = (function (value){
set_initial_choices_BANG_(value);

return (set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(value) : set_result_BANG_.call(null,value));
});
var repo = frontend.state.get_current_repo();
var vec__45096 = logseq.shui.hooks.use_state(null);
var class_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45096,(0),null);
var set_class_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45096,(1),null);
var all_classes = new cljs.core.Keyword(null,"all-classes","all-classes",-2040626813).cljs$core$IFn$_invoke$arity$1(class_data);
var page_class = frontend.components.property.value.class_by_ident(all_classes,new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329));
var input_opts = (function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(_STAR_show_new_property_config_QMARK_)){
return cljs.core.reset_BANG_(_STAR_show_new_property_config_QMARK_,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.meta_key_QMARK_(e);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = e.shiftKey;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("m",clojure.string.lower_case(frontend.util.ekey(e)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

return frontend.handler.editor.move_selected_blocks(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Escape",frontend.util.ekey(e))){
var temp__5825__auto__ = new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
} else {
return null;

}
}
})], null);
});
var opts_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"block","block",664686210),block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class-data","class-data",1102939556),class_data,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),input_opts,new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (v){
if(clojure.string.blank_QMARK_(v)){
var G__45099 = current_initial_choices();
return (set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(G__45099) : set_result_BANG_.call(null,G__45099));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.block_search(frontend.state.get_current_repo(),v,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enable-snippet?","enable-snippet?",-692858749),false,new cljs.core.Keyword(null,"include-breadcrumb?","include-breadcrumb?",1524429524),true,new cljs.core.Keyword(null,"built-in?","built-in?",2078421512),false], null))),(function (result__$1){
return promesa.protocols._promise((function (){var G__45100 = (function (){var G__45101 = result__$1;
if(cljs.core.truth_((function (){var and__5140__auto__ = page_class;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))) && (clojure.string.includes_QMARK_(clojure.string.lower_case("Page"),clojure.string.lower_case(v))));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45101,page_class);
} else {
return G__45101;
}
})();
return (set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(G__45100) : set_result_BANG_.call(null,G__45100));
})());
}));
}));
}
}),new cljs.core.Keyword(null,"add-new-choice!","add-new-choice!",-1703027977),(function (new_choice){
var choices_SINGLEQUOTE_ = frontend.components.property.value.add_initial_node_choice(current_initial_choices(),new_choice);
set_initial_choices_BANG_(choices_SINGLEQUOTE_);

return (set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(choices_SINGLEQUOTE_) : set_result_BANG_.call(null,choices_SINGLEQUOTE_));
})], 0));
var extends_property_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803));
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_property_node_selector_data(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"block","block",664686210),block], null))),(function (p__45102){
var map__45103 = p__45102;
var map__45103__$1 = cljs.core.__destructure_map(map__45103);
var selector_data = map__45103__$1;
var initial_choices__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45103__$1,new cljs.core.Keyword(null,"initial-choices","initial-choices",-200150118));
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property)))?frontend.components.property.value._LT_load_initial_node_choices.cljs$core$IFn$_invoke$arity$3(repo,property,null):initial_choices__$1)),(function (initial_choices__$2){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__45104 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(selector_data,new cljs.core.Keyword(null,"initial-choices","initial-choices",-200150118));
return (set_class_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_class_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__45104) : set_class_data_BANG_.call(null,G__45104));
})()),(function (___21901__auto__){
return promesa.protocols._promise(((extends_property_QMARK_)?null:set_result_and_initial_choices_BANG_(initial_choices__$2)));
}));
}));
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null));

if(cljs.core.truth_(class_data)){
return frontend.components.property.value.select_node(property,opts_SINGLEQUOTE_,result);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$property_value_select_node__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45105 = cljs.core.first(args__31746__auto__);
var G__45106 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45105,G__45106) : io.factorhouse.hsx.core.obj_get.call(null,G__45105,G__45106));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-value-select-node","property-value-select-node",1804451497,null),args__31746__auto__),frontend$components$property$value$property_value_select_node,args__31746__auto__,null);
}
};
var frontend$components$property$value$property_value_select_node = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45419__i = 0, G__45419__a = new Array(arguments.length -  0);
while (G__45419__i < G__45419__a.length) {G__45419__a[G__45419__i] = arguments[G__45419__i + 0]; ++G__45419__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45419__a,0,null);
} 
return frontend$components$property$value$property_value_select_node__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$property_value_select_node.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$property_value_select_node.cljs$lang$applyTo = (function (arglist__45420){
var args__31746__auto__ = cljs.core.seq(arglist__45420);
return frontend$components$property$value$property_value_select_node__delegate(args__31746__auto__);
});
frontend$components$property$value$property_value_select_node.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_value_select_node__delegate;
return frontend$components$property$value$property_value_select_node;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45107 = comp__31745__auto__;
var G__45108 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45107,G__45108) : io.factorhouse.hsx.core.react_memo.call(null,G__45107,G__45108));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-value-select-node");

return comp__31745__auto__;
})();
/**
 * Snapshots may include only the current choice (with :db/id), so the picker
 *   always reloads the full closed-value set instead of trusting that list.
 */
frontend.components.property.value.closed_values_need_worker_load_QMARK_ = (function frontend$components$property$value$closed_values_need_worker_load_QMARK_(property){
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property)));
});
frontend.components.property.value.select = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$select(block,property,p__45109,p__45110){
var map__45111 = p__45109;
var map__45111__$1 = cljs.core.__destructure_map(map__45111);
var select_opts = map__45111__$1;
var multiple_choices_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45111__$1,new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490));
var dropdown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45111__$1,new cljs.core.Keyword(null,"dropdown?","dropdown?",-1027769147));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45111__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
var map__45112 = p__45110;
var map__45112__$1 = cljs.core.__destructure_map(map__45112);
var opts = map__45112__$1;
var _STAR_show_new_property_config_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45112__$1,new cljs.core.Keyword(null,"*show-new-property-config?","*show-new-property-config?",-1054571618));
var exit_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45112__$1,new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059));
var repo = frontend.state.get_current_repo();
var load_closed_values_QMARK_ = frontend.components.property.value.closed_values_need_worker_load_QMARK_(property);
var _STAR_values = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loading","loading",-737050189));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)], null));
var vec__45113 = logseq.shui.hooks.use_atom(_STAR_values);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45113,(0),null);
var refresh_result_f = logseq.shui.hooks.use_callback((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))?new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(block):new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))),(function (property_ident){
return promesa.protocols._mcat(promesa.protocols._promise(((load_closed_values_QMARK_)?frontend.db.async._LT_get_property_closed_values(repo,property_ident):frontend.db.async._LT_get_property_values(property_ident))),(function (result){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_values,result));
}));
}));
}));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),load_closed_values_QMARK_], null));
logseq.shui.hooks.use_effect_BANG_((function (){
cljs.core.reset_BANG_(_STAR_values,new cljs.core.Keyword(null,"loading","loading",-737050189));

return (refresh_result_f.cljs$core$IFn$_invoke$arity$0 ? refresh_result_f.cljs$core$IFn$_invoke$arity$0() : refresh_result_f.call(null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refresh_result_f], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),values)){
return null;
} else {
var type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var closed_values_QMARK_ = cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property));
var items = ((closed_values_QMARK_)?(function (){var date_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property.repeat","recur-unit","logseq.property.repeat/recur-unit",690306247))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(opts)))));
var values__$1 = (function (){var G__45116 = logseq.db.frontend.property.scoped_closed_values.cljs$core$IFn$_invoke$arity$variadic(property,block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),((load_closed_values_QMARK_)?values:new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))], null)], 0));
if(date_QMARK_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.repeat","recur-unit.minute","logseq.property.repeat/recur-unit.minute",-1513655085),null,new cljs.core.Keyword("logseq.property.repeat","recur-unit.hour","logseq.property.repeat/recur-unit.hour",1438884954),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(b));
}),G__45116);
} else {
return G__45116;
}
})();
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block__$1){
var icon = frontend.handler.property.util.get_block_property_value(block__$1,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
var value = (function (){var or__5142__auto__ = logseq.db.frontend.property.built_in_display_title(block__$1,frontend.context.i18n.t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.property.closed_value_content(block__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null)], 0)),value], null):value),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1),new cljs.core.Keyword(null,"label-value","label-value",-1719020519),value], null);
}),values__$1);
})():cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45117){
var map__45118 = p__45117;
var map__45118__$1 = cljs.core.__destructure_map(map__45118);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value)], null);
}),values)));
var items__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","true","ui/true",-1114206346)], 0)),new cljs.core.Keyword(null,"value","value",305978217),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","false","ui/false",1277709361)], 0)),new cljs.core.Keyword(null,"value","value",305978217),false], null)], null):items
));
var on_chosen = (function (chosen,selected_QMARK_){
var value = ((cljs.core.map_QMARK_(chosen))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(chosen):chosen);
return frontend.components.property.value.add_or_remove_property_value(block,property,value,selected_QMARK_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),((cljs.core.integer_QMARK_(value))?true:null),new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059),exit_edit_QMARK_,new cljs.core.Keyword(null,"refresh-result-f","refresh-result-f",-1242092515),refresh_result_f], null));
});
var selected_choices_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
var selected_choices = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)))?null:frontend.components.property.value.property_value__GT_ids(selected_choices_SINGLEQUOTE_));
return frontend.components.property.value.select_aux(block,property,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),new cljs.core.Keyword(null,"dropdown?","dropdown?",-1027769147),new cljs.core.Keyword(null,"show-new-when-not-exact-match?","show-new-when-not-exact-match?",1510536201),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),new cljs.core.Keyword(null,"extract-chosen-fn","extract-chosen-fn",1058364622),new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317)],[content_props,on_chosen,dropdown_QMARK_,(!(((closed_values_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),type))))),(function (x){
var or__5142__auto__ = new cljs.core.Keyword(null,"label-value","label-value",-1719020519).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(x);
}
}),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-placeholder","property/set-placeholder",1496216379),logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t)], 0)),new cljs.core.Keyword(null,"value","value",305978217),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
var temp__5825__auto__ = new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900).cljs$core$IFn$_invoke$arity$1(select_opts);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(_STAR_show_new_property_config_QMARK_)){
return cljs.core.reset_BANG_(_STAR_show_new_property_config_QMARK_,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__45119 = frontend.util.ekey(e);
switch (G__45119) {
case "Escape":
var temp__5825__auto__ = new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900).cljs$core$IFn$_invoke$arity$1(select_opts);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}

break;
default:
return null;

}
})], null);
}),multiple_choices_QMARK_,items__$1,selected_choices]));
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45120 = cljs.core.first(args__31746__auto__);
var G__45121 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45120,G__45121) : io.factorhouse.hsx.core.obj_get.call(null,G__45120,G__45121));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"select","select",-1506602266,null),args__31746__auto__),frontend$components$property$value$select,args__31746__auto__,null);
}
};
var frontend$components$property$value$select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45422__i = 0, G__45422__a = new Array(arguments.length -  0);
while (G__45422__i < G__45422__a.length) {G__45422__a[G__45422__i] = arguments[G__45422__i + 0]; ++G__45422__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45422__a,0,null);
} 
return frontend$components$property$value$select__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$select.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$select.cljs$lang$applyTo = (function (arglist__45423){
var args__31746__auto__ = cljs.core.seq(arglist__45423);
return frontend$components$property$value$select__delegate(args__31746__auto__);
});
frontend$components$property$value$select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$select__delegate;
return frontend$components$property$value$select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45122 = comp__31745__auto__;
var G__45123 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45122,G__45123) : io.factorhouse.hsx.core.react_memo.call(null,G__45122,G__45123));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"select");

return comp__31745__auto__;
})();
frontend.components.property.value.property_normal_block_value = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$property_normal_block_value(block,property,value_block,opts){
var container_id = frontend.state.use_container_id.cljs$core$IFn$_invoke$arity$0();
var multiple_values_QMARK_ = logseq.db.frontend.property.many_QMARK_(property);
var block_container = frontend.state.get_component(new cljs.core.Keyword("block","container","block/container",510671002));
var blocks_container = frontend.state.get_component(new cljs.core.Keyword("block","blocks-container","block/blocks-container",409697112));
var value_blocks = frontend.components.property.value.property_value_blocks(value_block);
var value_block__$1 = ((cljs.core.empty_QMARK_(value_blocks))?null:((((multiple_values_QMARK_) || (frontend.components.property.value.property_value_collection_QMARK_(value_block))))?cljs.core.set(value_blocks):cljs.core.first(value_blocks)
));
var default_value = new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(property);
var default_value_QMARK_ = (function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(default_value);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value_block__$1),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(default_value))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662))));
} else {
return and__5140__auto__;
}
})();
var table_text_property_render = new cljs.core.Keyword(null,"table-text-property-render","table-text-property-render",-261105507).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(table_text_property_render)){
var G__45124 = value_block__$1;
var G__45125 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"create-new-block","create-new-block",1377747253),(function (){
return frontend.components.property.value._LT_create_new_block_BANG_(block,property,"");
}),new cljs.core.Keyword(null,"property-ident","property-ident",697145839),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)], null);
return (table_text_property_render.cljs$core$IFn$_invoke$arity$2 ? table_text_property_render.cljs$core$IFn$_invoke$arity$2(G__45124,G__45125) : table_text_property_render.call(null,G__45124,G__45125));
} else {
if(cljs.core.seq(value_block__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.property.value.property_value_block_container_props(property),(function (){var config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"property-block?","property-block?",71503268),new cljs.core.Keyword(null,"p-property","p-property",-435865980),new cljs.core.Keyword("block-tree","root*","block-tree/root*",2142458692),new cljs.core.Keyword(null,"view?","view?",655244230),new cljs.core.Keyword(null,"p-block","p-block",1335284937),new cljs.core.Keyword(null,"on-block-content-pointer-down","on-block-content-pointer-down",1185021460),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"hide-children?","hide-children?",-2104598603),new cljs.core.Keyword(null,"editor-box","editor-box",708759870)],[true,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("block-tree","root*","block-tree/root*",2142458692).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"view?","view?",655244230).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(cljs.core.truth_(default_value_QMARK_)?(function (_e){
return frontend.components.property.value._LT_create_new_block_BANG_(block,property,(function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(default_value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
}):null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((multiple_values_QMARK_)?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block):new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(value_block__$1)))),container_id,frontend.components.property.value.default_value_property_ident_QMARK_(property),frontend.state.get_component(new cljs.core.Keyword("editor","box","editor/box",-1921770435))]);
if(cljs.core.set_QMARK_(value_block__$1)){
var G__45126 = config;
var G__45127 = logseq.db.sort_by_order(value_block__$1);
return (blocks_container.cljs$core$IFn$_invoke$arity$2 ? blocks_container.cljs$core$IFn$_invoke$arity$2(G__45126,G__45127) : blocks_container.call(null,G__45126,G__45127));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__45128 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(value_block__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"property-default-value?","property-default-value?",769811896),default_value_QMARK_], 0));
var G__45129 = value_block__$1;
return (block_container.cljs$core$IFn$_invoke$arity$2 ? block_container.cljs$core$IFn$_invoke$arity$2(G__45128,G__45129) : block_container.call(null,G__45128,G__45129));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value_block__$1)))], null));
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.h-full.jtrigger.ls-empty-text-property.text-muted-foreground","div.w-full.h-full.jtrigger.ls-empty-text-property.text-muted-foreground",-141589129),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"table-view?","table-view?",2073887505).cljs$core$IFn$_invoke$arity$1(opts))?"cursor-pointer":"cursor-text"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(20),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(3)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.property.value._LT_create_new_block_BANG_(block,property,"");
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Backspace",null,"Delete",null], null), null),frontend.util.ekey(e))){
frontend.util.stop(e);

return frontend.components.property.value.delete_block_property_BANG_(block,property,opts);
} else {
return null;
}
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900).cljs$core$IFn$_invoke$arity$1(opts))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","add-description","property/add-description",-2055903227)], 0)):null)], null);

}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$property_normal_block_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45130 = cljs.core.first(args__31746__auto__);
var G__45131 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45130,G__45131) : io.factorhouse.hsx.core.obj_get.call(null,G__45130,G__45131));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-normal-block-value","property-normal-block-value",-1793914375,null),args__31746__auto__),frontend$components$property$value$property_normal_block_value,args__31746__auto__,null);
}
};
var frontend$components$property$value$property_normal_block_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45424__i = 0, G__45424__a = new Array(arguments.length -  0);
while (G__45424__i < G__45424__a.length) {G__45424__a[G__45424__i] = arguments[G__45424__i + 0]; ++G__45424__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45424__a,0,null);
} 
return frontend$components$property$value$property_normal_block_value__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$property_normal_block_value.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$property_normal_block_value.cljs$lang$applyTo = (function (arglist__45425){
var args__31746__auto__ = cljs.core.seq(arglist__45425);
return frontend$components$property$value$property_normal_block_value__delegate(args__31746__auto__);
});
frontend$components$property$value$property_normal_block_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_normal_block_value__delegate;
return frontend$components$property$value$property_normal_block_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45132 = comp__31745__auto__;
var G__45133 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45132,G__45133) : io.factorhouse.hsx.core.react_memo.call(null,G__45132,G__45133));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-normal-block-value");

return comp__31745__auto__;
})();
frontend.components.property.value.property_block_value = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$property_block_value(value,block,property,page_cp,opts){
var v_block = value;
var class_QMARK_ = frontend.util.entity.class_QMARK_(v_block);
if(cljs.core.truth_(frontend.util.entity.page_QMARK_(v_block))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__45134 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,new cljs.core.Keyword(null,"tag?","tag?",1714008252),class_QMARK_,new cljs.core.Keyword(null,"with-tags?","with-tags?",551159510),false], null);
var G__45135 = v_block;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__45134,G__45135) : page_cp.call(null,G__45134,G__45135));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v_block)], null));
} else {
return frontend.components.property.value.property_normal_block_value(block,property,v_block,opts);

}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$property_block_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45136 = cljs.core.first(args__31746__auto__);
var G__45137 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45136,G__45137) : io.factorhouse.hsx.core.obj_get.call(null,G__45136,G__45137));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-block-value","property-block-value",-259984239,null),args__31746__auto__),frontend$components$property$value$property_block_value,args__31746__auto__,null);
}
};
var frontend$components$property$value$property_block_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45426__i = 0, G__45426__a = new Array(arguments.length -  0);
while (G__45426__i < G__45426__a.length) {G__45426__a[G__45426__i] = arguments[G__45426__i + 0]; ++G__45426__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45426__a,0,null);
} 
return frontend$components$property$value$property_block_value__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$property_block_value.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$property_block_value.cljs$lang$applyTo = (function (arglist__45427){
var args__31746__auto__ = cljs.core.seq(arglist__45427);
return frontend$components$property$value$property_block_value__delegate(args__31746__auto__);
});
frontend$components$property$value$property_block_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_block_value__delegate;
return frontend$components$property$value$property_block_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45138 = comp__31745__auto__;
var G__45139 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45138,G__45139) : io.factorhouse.hsx.core.react_memo.call(null,G__45138,G__45139));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-block-value");

return comp__31745__auto__;
})();
frontend.components.property.value.single_string_input = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$single_string_input(block,property,value,table_view_QMARK_){
var vec__45140 = logseq.shui.hooks.use_state(false);
var editing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45140,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45140,(1),null);
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var string_value = ((typeof value === 'string')?value:(((!((value == null))))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.property.property_value_content(value))):""
));
var vec__45143 = logseq.shui.hooks.use_state(string_value);
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45143,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45143,(1),null);
var set_property_value_BANG_ = (function() { 
var G__45428__delegate = function (value__$2,p__45146){
var map__45147 = p__45146;
var map__45147__$1 = cljs.core.__destructure_map(map__45147);
var exit_editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45147__$1,new cljs.core.Keyword(null,"exit-editing?","exit-editing?",101580309),true);
var next_value = (function (){var or__5142__auto__ = value__$2;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var blank_QMARK_ = clojure.string.blank_QMARK_(next_value);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((blank_QMARK_)?(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))?frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)):null):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(string_value,next_value))?frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),next_value):null))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__45148 = ((blank_QMARK_)?"":next_value);
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__45148) : set_value_BANG_.call(null,G__45148));
})()),(function (___21901__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(exit_editing_QMARK_)?(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null,false)):null));
}));
}));
}));
};
var G__45428 = function (value__$2,var_args){
var p__45146 = null;
if (arguments.length > 1) {
var G__45429__i = 0, G__45429__a = new Array(arguments.length -  1);
while (G__45429__i < G__45429__a.length) {G__45429__a[G__45429__i] = arguments[G__45429__i + 1]; ++G__45429__i;}
  p__45146 = new cljs.core.IndexedSeq(G__45429__a,0,null);
} 
return G__45428__delegate.call(this,value__$2,p__45146);};
G__45428.cljs$lang$maxFixedArity = 1;
G__45428.cljs$lang$applyTo = (function (arglist__45430){
var value__$2 = cljs.core.first(arglist__45430);
var p__45146 = cljs.core.rest(arglist__45430);
return G__45428__delegate(value__$2,p__45146);
});
G__45428.cljs$core$IFn$_invoke$arity$variadic = G__45428__delegate;
return G__45428;
})()
;
logseq.shui.hooks.use_effect_BANG_((function (){
(set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(string_value) : set_value_BANG_.call(null,string_value));

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [string_value], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-string.flex.flex-1.jtrigger","div.ls-string.flex.flex-1.jtrigger",-2029526388),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.clear_selection_BANG_();

return (set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_editing_BANG_.call(null,true));
})], null),(cljs.core.truth_(editing_QMARK_)?(function (){var G__45149 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"class","class",-2030961996),(""+"ls-string-input h-6 px-0 py-0 border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(table_view_QMARK_)?" text-sm":null))),new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__45150 = frontend.util.evalue(e);
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__45150) : set_value_BANG_.call(null,G__45150));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (_e){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._promise(set_property_value_BANG_(value__$1));
}));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__45151 = frontend.util.ekey(e);
switch (G__45151) {
case "Enter":
frontend.util.stop(e);

return set_property_value_BANG_(value__$1);

break;
case "Escape":
frontend.util.stop(e);

(set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(string_value) : set_value_BANG_.call(null,string_value));

(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null,false));

var G__45152 = logseq.shui.hooks.deref(_STAR_ref);
if((G__45152 == null)){
return null;
} else {
return G__45152.focus();
}

break;
default:
return null;

}
})], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__45149) : logseq.shui.ui.input.call(null,G__45149));
})():((clojure.string.blank_QMARK_(string_value))?frontend.components.property.value.property_empty_text_value(property,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table-view?","table-view?",2073887505),table_view_QMARK_], null)):string_value))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$single_string_input__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45153 = cljs.core.first(args__31746__auto__);
var G__45154 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45153,G__45154) : io.factorhouse.hsx.core.obj_get.call(null,G__45153,G__45154));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"single-string-input","single-string-input",-1469954647,null),args__31746__auto__),frontend$components$property$value$single_string_input,args__31746__auto__,null);
}
};
var frontend$components$property$value$single_string_input = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45432__i = 0, G__45432__a = new Array(arguments.length -  0);
while (G__45432__i < G__45432__a.length) {G__45432__a[G__45432__i] = arguments[G__45432__i + 0]; ++G__45432__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45432__a,0,null);
} 
return frontend$components$property$value$single_string_input__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$single_string_input.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$single_string_input.cljs$lang$applyTo = (function (arglist__45433){
var args__31746__auto__ = cljs.core.seq(arglist__45433);
return frontend$components$property$value$single_string_input__delegate(args__31746__auto__);
});
frontend$components$property$value$single_string_input.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$single_string_input__delegate;
return frontend$components$property$value$single_string_input;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45155 = comp__31745__auto__;
var G__45156 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45155,G__45156) : io.factorhouse.hsx.core.react_memo.call(null,G__45155,G__45156));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"single-string-input");

return comp__31745__auto__;
})();
frontend.components.property.value.closed_value_item = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$closed_value_item(value,p__45157){
var map__45158 = p__45157;
var map__45158__$1 = cljs.core.__destructure_map(map__45158);
var inline_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45158__$1,new cljs.core.Keyword(null,"inline-text","inline-text",910915394));
var icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45158__$1,new cljs.core.Keyword(null,"icon?","icon?",-1663815703));
var block = value;
if(cljs.core.truth_(value)){
var property_block_QMARK_ = logseq.db.frontend.property.property_created_block_QMARK_(block);
var value_SINGLEQUOTE_ = (function (){var or__5142__auto__ = logseq.db.frontend.property.built_in_display_title(block,frontend.context.i18n.t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.property.closed_value_content(block);
}
})();
var icon = frontend.handler.property.util.get_block_property_value(block,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
if(cljs.core.truth_(icon)){
if(cljs.core.truth_(icon_QMARK_)){
return frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null)], 0));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1.h-6","div.flex.flex-row.items-center.gap-1.h-6",-2141663353),frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null)], 0)),(cljs.core.truth_(value_SINGLEQUOTE_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),value_SINGLEQUOTE_], null):null)], null);
}
} else {
if(cljs.core.truth_(property_block_QMARK_)){
return value_SINGLEQUOTE_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type,new cljs.core.Keyword(null,"number","number",1570378438))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.number","span.number",1244984954),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_SINGLEQUOTE_))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex.w-full","span.inline-flex.w-full",-2041056630),(function (){var value_SINGLEQUOTE___$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_SINGLEQUOTE_));
var value_SINGLEQUOTE___$2 = ((clojure.string.blank_QMARK_(value_SINGLEQUOTE___$1))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","empty","ui/empty",767898386)], 0)):value_SINGLEQUOTE___$1);
var G__45159 = cljs.core.PersistentArrayMap.EMPTY;
var G__45160 = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
var G__45161 = value_SINGLEQUOTE___$2;
return (inline_text.cljs$core$IFn$_invoke$arity$3 ? inline_text.cljs$core$IFn$_invoke$arity$3(G__45159,G__45160,G__45161) : inline_text.call(null,G__45159,G__45160,G__45161));
})()], null);

}
}
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$closed_value_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45162 = cljs.core.first(args__31746__auto__);
var G__45163 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45162,G__45163) : io.factorhouse.hsx.core.obj_get.call(null,G__45162,G__45163));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"closed-value-item","closed-value-item",1863049970,null),args__31746__auto__),frontend$components$property$value$closed_value_item,args__31746__auto__,null);
}
};
var frontend$components$property$value$closed_value_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45434__i = 0, G__45434__a = new Array(arguments.length -  0);
while (G__45434__i < G__45434__a.length) {G__45434__a[G__45434__i] = arguments[G__45434__i + 0]; ++G__45434__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45434__a,0,null);
} 
return frontend$components$property$value$closed_value_item__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$closed_value_item.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$closed_value_item.cljs$lang$applyTo = (function (arglist__45435){
var args__31746__auto__ = cljs.core.seq(arglist__45435);
return frontend$components$property$value$closed_value_item__delegate(args__31746__auto__);
});
frontend$components$property$value$closed_value_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$closed_value_item__delegate;
return frontend$components$property$value$closed_value_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45164 = comp__31745__auto__;
var G__45165 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45164,G__45165) : io.factorhouse.hsx.core.react_memo.call(null,G__45164,G__45165));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"closed-value-item");

return comp__31745__auto__;
})();
frontend.components.property.value.multiple_values_trigger_class = (function frontend$components$property$value$multiple_values_trigger_class(p__45166){
var map__45167 = p__45166;
var map__45167__$1 = cljs.core.__destructure_map(map__45167);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45167__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var other_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45167__$1,new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322));
var page_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45167__$1,new cljs.core.Keyword(null,"page-property?","page-property?",838444754));
return (""+"flex flex-1 min-w-0 flex-row items-center gap-1 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__5140__auto__ = other_position_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(expanded_QMARK_)) && (cljs.core.not(page_property_QMARK_)));
} else {
return and__5140__auto__;
}
})())?"flex-nowrap multi-values-nowrap":(""+"flex-wrap "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?"multi-values-expanded":null))))));
});
frontend.components.property.value.multiple_value_item_class = (function frontend$components$property$value$multiple_value_item_class(p__45168){
var map__45169 = p__45168;
var map__45169__$1 = cljs.core.__destructure_map(map__45169);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var other_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322));
var page_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,new cljs.core.Keyword(null,"page-property?","page-property?",838444754));
var show_popup_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,new cljs.core.Keyword(null,"show-popup!","show-popup!",791580912));
if(cljs.core.truth_((function (){var and__5140__auto__ = show_popup_BANG_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = other_position_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.not(expanded_QMARK_)) && (cljs.core.not(page_property_QMARK_)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return "shrink-0";
} else {
return null;
}
});
frontend.components.property.value.select_item = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$select_item(property,type,value,p__45170){
var map__45171 = p__45170;
var map__45171__$1 = cljs.core.__destructure_map(map__45171);
var opts = map__45171__$1;
var page_cp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"page-cp","page-cp",1066562595));
var inline_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"inline-text","inline-text",910915394));
var other_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322));
var property_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"property-position","property-position",-1150084538));
var table_view_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"table-view?","table-view?",2073887505));
var _icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"_icon?","_icon?",341031076));
var closed_values_QMARK_ = cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property));
var tag_QMARK_ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"tag?","tag?",1714008252).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("block","tags","block/tags",1814948340));
}
})();
var alias_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("block","alias","block/alias",-2112644699));
var inline_text_cp = (function (content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),(function (){var G__45172 = cljs.core.PersistentArrayMap.EMPTY;
var G__45173 = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
var G__45174 = logseq.common.util.macro.expand_value_if_macro(content,frontend.state.get_macros());
return (inline_text.cljs$core$IFn$_invoke$arity$3 ? inline_text.cljs$core$IFn$_invoke$arity$3(G__45172,G__45173,G__45174) : inline_text.call(null,G__45172,G__45173,G__45174));
})()], null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select-item.cursor-pointer","div.select-item.cursor-pointer",2051477678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.components.property.value.multiple_value_item_class(opts)], null),((frontend.components.property.value.empty_placeholder_value_QMARK_(value))?frontend.components.property.value.property_empty_btn_value(property,opts):((((closed_values_QMARK_) || (frontend.components.property.value.property_closed_choice_value_QMARK_(property,value))))?frontend.components.property.value.closed_value_item(value,opts):(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.entity.page_QMARK_(value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(value));
}
})())?(cljs.core.truth_(value)?(function (){var opts__$1 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"property-position","property-position",-1150084538),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),new cljs.core.Keyword(null,"table-view?","table-view?",2073887505),new cljs.core.Keyword(null,"ignore-alias?","ignore-alias?",1336725364),new cljs.core.Keyword(null,"with-tags?","with-tags?",551159510),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),new cljs.core.Keyword(null,"tag?","tag?",1714008252),new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322)],[property_position,(function (e){
frontend.util.stop(e);

var G__45175 = e.target;
var G__45176 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__45178 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"open",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(value));
})], null);
var G__45179 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","open-named","ui/open-named",1137737088),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(value)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__45178,G__45179) : logseq.shui.ui.dropdown_menu_item.call(null,G__45178,G__45179));
})(),(function (){var G__45180 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"open sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"page","page",849072397));
})], null);
var G__45181 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","open","sidebar.right/open",1036509782)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__45180,G__45181) : logseq.shui.ui.dropdown_menu_item.call(null,G__45180,G__45181));
})()], null);
});
var G__45177 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null),new cljs.core.Keyword(null,"align","align",1964212802),"start"], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45175,G__45176,G__45177) : logseq.shui.ui.popup_show_BANG_.call(null,G__45175,G__45176,G__45177));
}),table_view_QMARK_,alias_QMARK_,false,frontend.components.property.value.alias_value_on_pointer_down(property,new cljs.core.Keyword(null,"show-popup!","show-popup!",791580912).cljs$core$IFn$_invoke$arity$1(opts)),tag_QMARK_,true,other_position_QMARK_]);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(opts__$1,value) : page_cp.call(null,opts__$1,value))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value)], null));
})():null):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"property","property",-1114278232),null,new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"asset","asset",-280274466),null], null), null),type))?(function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = value;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.state.get_component(new cljs.core.Keyword("block","reference","block/reference",1588749254));
if(cljs.core.truth_(temp__5825__auto____$1)){
var reference = temp__5825__auto____$1;
var G__45182 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table-view?","table-view?",2073887505),table_view_QMARK_], null);
var G__45183 = block_uuid;
return (reference.cljs$core$IFn$_invoke$arity$2 ? reference.cljs$core$IFn$_invoke$arity$2(G__45182,G__45183) : reference.call(null,G__45182,G__45183));
} else {
return null;
}
} else {
return null;
}
})():((((cljs.core.map_QMARK_(value)) && ((!((logseq.db.frontend.property.property_value_content(value) == null))))))?(function (){var content = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.property.property_value_content(value)));
return inline_text_cp(content);
})():inline_text_cp((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)))
)))))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$select_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45184 = cljs.core.first(args__31746__auto__);
var G__45185 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45184,G__45185) : io.factorhouse.hsx.core.obj_get.call(null,G__45184,G__45185));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"select-item","select-item",-1412604867,null),args__31746__auto__),frontend$components$property$value$select_item,args__31746__auto__,null);
}
};
var frontend$components$property$value$select_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45436__i = 0, G__45436__a = new Array(arguments.length -  0);
while (G__45436__i < G__45436__a.length) {G__45436__a[G__45436__i] = arguments[G__45436__i + 0]; ++G__45436__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45436__a,0,null);
} 
return frontend$components$property$value$select_item__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$select_item.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$select_item.cljs$lang$applyTo = (function (arglist__45437){
var args__31746__auto__ = cljs.core.seq(arglist__45437);
return frontend$components$property$value$select_item__delegate(args__31746__auto__);
});
frontend$components$property$value$select_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$select_item__delegate;
return frontend$components$property$value$select_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45186 = comp__31745__auto__;
var G__45187 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45186,G__45187) : io.factorhouse.hsx.core.react_memo.call(null,G__45186,G__45187));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"select-item");

return comp__31745__auto__;
})();
frontend.components.property.value.single_value_select = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$single_value_select(block,property,value,select_opts,p__45188){
var map__45189 = p__45188;
var map__45189__$1 = cljs.core.__destructure_map(map__45189);
var opts = map__45189__$1;
var value_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45189__$1,new cljs.core.Keyword(null,"value-render","value-render",882962329));
var popup_focus_trigger_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45189__$1,new cljs.core.Keyword(null,"popup-focus-trigger?","popup-focus-trigger?",546503552));
var popup_auto_focus_trigger_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45189__$1,new cljs.core.Keyword(null,"popup-auto-focus-trigger?","popup-auto-focus-trigger?",-486269712));
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var editing_QMARK_ = new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(opts);
var type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var select_opts_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(select_opts,new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),false);
var popup_content = (function frontend$components$property$value$single_value_select_$_content_fn(target){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-select","div.property-select",-1891938982),(function (){var G__45190 = type;
var G__45190__$1 = (((G__45190 instanceof cljs.core.Keyword))?G__45190.fqn:null);
switch (G__45190__$1) {
case "entity":
case "number":
case "default":
case "url":
case "checkbox":
return frontend.components.property.value.select(block,property,select_opts_SINGLEQUOTE_,opts);

break;
case "node":
case "class":
case "property":
case "page":
case "date":
return frontend.components.property.value.property_value_select_node(block,property,select_opts_SINGLEQUOTE_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"target","target",253001721),target));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45190__$1))));

}
})()], null);
});
var trigger_id = (""+"trigger-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(opts))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property)));
var show_popup_BANG_ = (function (target){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_el);
if(cljs.core.truth_(temp__5825__auto__)){
var anchor = temp__5825__auto__;
var G__45191 = anchor;
var G__45192 = (function (){
return popup_content(target);
});
var G__45193 = (function (){var G__45194 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"auto-focus?","auto-focus?",1021654593),(!(popup_auto_focus_trigger_QMARK_ === false)),new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true,new cljs.core.Keyword(null,"trigger-id","trigger-id",-599381518),trigger_id], null);
if((!((popup_focus_trigger_QMARK_ == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45194,new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),popup_focus_trigger_QMARK_);
} else {
return G__45194;
}
})();
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45191,G__45192,G__45193) : logseq.shui.ui.popup_show_BANG_.call(null,G__45191,G__45192,G__45193));
} else {
return null;
}
});
if(cljs.core.truth_(editing_QMARK_)){
return popup_content(null);
} else {
var show_BANG_ = (function (e){
frontend.util.stop(e);

frontend.state.clear_selection_BANG_();

var target = (cljs.core.truth_(e)?e.target:null);
if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.config.publishing_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.util.shift_key_QMARK_(e);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = frontend.util.meta_key_QMARK_(e);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return frontend.components.property.value.property_value_popup_blocked_link_QMARK_(target);
}
}
}
})())){
return null;
} else {
return frontend.components.property.value.page_ref_cell_click(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity","entity",-450970276),frontend.components.property.value.page_ref_entity_from_event_target(target),new cljs.core.Keyword(null,"current-page","current-page",-101294180),frontend.state.get_current_page(),new cljs.core.Keyword(null,"open-popup!","open-popup!",2030305834),(function (){
return show_popup_BANG_(target);
})], null));
}
});
var G__45195 = (cljs.core.truth_(new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"div.jtrigger","div.jtrigger",49308519):new cljs.core.Keyword(null,"div.jtrigger.flex.flex-1.w-full.cursor-pointer","div.jtrigger.flex.flex-1.w-full.cursor-pointer",-1585419265));
var G__45196 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"id","id",-1388402092),trigger_id,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__45198 = frontend.util.ekey(e);
switch (G__45198) {
case "Backspace":
case "Delete":
return frontend.components.property.value.delete_block_property_BANG_(block,property,opts);

break;
case " ":
case "Enter":
var G__45199_45440 = logseq.shui.hooks.deref(_STAR_el);
if((G__45199_45440 == null)){
} else {
G__45199_45440.click();
}

return frontend.util.stop(e);

break;
default:
return null;

}
})], null);
var G__45197 = ((clojure.string.blank_QMARK_(value))?frontend.components.property.value.property_empty_text_value(property,opts):(value_render.cljs$core$IFn$_invoke$arity$0 ? value_render.cljs$core$IFn$_invoke$arity$0() : value_render.call(null)));
return (logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3(G__45195,G__45196,G__45197) : logseq.shui.ui.trigger_as.call(null,G__45195,G__45196,G__45197));
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$single_value_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45200 = cljs.core.first(args__31746__auto__);
var G__45201 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45200,G__45201) : io.factorhouse.hsx.core.obj_get.call(null,G__45200,G__45201));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"single-value-select","single-value-select",-2056416830,null),args__31746__auto__),frontend$components$property$value$single_value_select,args__31746__auto__,null);
}
};
var frontend$components$property$value$single_value_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45441__i = 0, G__45441__a = new Array(arguments.length -  0);
while (G__45441__i < G__45441__a.length) {G__45441__a[G__45441__i] = arguments[G__45441__i + 0]; ++G__45441__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45441__a,0,null);
} 
return frontend$components$property$value$single_value_select__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$single_value_select.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$single_value_select.cljs$lang$applyTo = (function (arglist__45442){
var args__31746__auto__ = cljs.core.seq(arglist__45442);
return frontend$components$property$value$single_value_select__delegate(args__31746__auto__);
});
frontend$components$property$value$single_value_select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$single_value_select__delegate;
return frontend$components$property$value$single_value_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45202 = comp__31745__auto__;
var G__45203 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45202,G__45203) : io.factorhouse.hsx.core.react_memo.call(null,G__45202,G__45203));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"single-value-select");

return comp__31745__auto__;
})();
frontend.components.property.value.property_value_inner = (function frontend$components$property$value$property_value_inner(block,property,value,p__45204){
var map__45205 = p__45204;
var map__45205__$1 = cljs.core.__destructure_map(map__45205);
var opts = map__45205__$1;
var inline_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205__$1,new cljs.core.Keyword(null,"inline-text","inline-text",910915394));
var page_cp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205__$1,new cljs.core.Keyword(null,"page-cp","page-cp",1066562595));
var dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205__$1,new cljs.core.Keyword(null,"dom-id","dom-id",-1588236703));
var row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205__$1,new cljs.core.Keyword(null,"row?","row?",394970415));
var multiple_values_QMARK_ = logseq.db.frontend.property.many_QMARK_(property);
var class$ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(row_QMARK_)?null:"flex flex-1 "))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((multiple_values_QMARK_)?"property-value-content":null)));
var type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var text_ref_type_QMARK_ = (logseq.db.frontend.property.type.text_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.text_ref_property_types.cljs$core$IFn$_invoke$arity$1(type) : logseq.db.frontend.property.type.text_ref_property_types.call(null,type));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cursor-text","div.cursor-text",-691769383),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5142__auto__ = dom_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.random_uuid();
}
})(),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(text_ref_type_QMARK_)?null:"jtrigger"))),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core.truth_(text_ref_type_QMARK_)){
return null;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Backspace",null,"Delete",null], null), null),frontend.util.ekey(e))){
return frontend.components.property.value.delete_block_property_BANG_(block,property,opts);
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(24)], null)], null),((frontend.components.property.value.unset_default_value_QMARK_(property,value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jtrigger.cursor-pointer.text-sm.px-2","div.jtrigger.cursor-pointer.text-sm.px-2",402431559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.property.value._LT_create_new_block_BANG_(block,property,"");
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-default-value","property/set-default-value",1225444306)], 0))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property.publish","published-url","logseq.property.publish/published-url",2045182501)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.w-full","div.flex.items-center.gap-2.w-full",-224445376),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(value)], null),((frontend.config.publishing_QMARK_)?null:(function (){var G__45206 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.handler.publish.unpublish_page_BANG_(block);
})], null);
var G__45207 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","unpublish","publish/unpublish",-826932015)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45206,G__45207) : logseq.shui.ui.button.call(null,G__45206,G__45207));
})())], null):(cljs.core.truth_(text_ref_type_QMARK_)?frontend.components.property.value.property_block_value(value,block,property,page_cp,opts):(function (){var content = (function (){var G__45208 = cljs.core.PersistentArrayMap.EMPTY;
var G__45209 = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
var G__45210 = logseq.common.util.macro.expand_value_if_macro((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)),frontend.state.get_macros());
return (inline_text.cljs$core$IFn$_invoke$arity$3 ? inline_text.cljs$core$IFn$_invoke$arity$3(G__45208,G__45209,G__45210) : inline_text.call(null,G__45208,G__45209,G__45210));
})();
if(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.keys(frontend.components.property.value.string_value_on_click)),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full","div.w-full",-1626749092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.components.property.value.string_value_on_click,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(block,property) : f.call(null,block,property));
})], null),content], null);
} else {
return content;

}
})()
)))], null);
});
frontend.components.property.value.single_number_input = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$single_number_input(block,property,value_block,table_view_QMARK_){
var vec__45211 = logseq.shui.hooks.use_state(false);
var editing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45211,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45211,(1),null);
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_input_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var number_value = logseq.db.frontend.property.property_value_content(value_block);
var number_value_str = (((!((number_value == null))))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(number_value)):"");
var vec__45214 = logseq.shui.hooks.use_state(number_value_str);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45214,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45214,(1),null);
var vec__45217 = logseq.shui.hooks.use_state(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value));
var _STAR_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45217,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45217,(1),null);
var set_property_value_BANG_ = (function() { 
var G__45443__delegate = function (value__$1,p__45220){
var map__45221 = p__45220;
var map__45221__$1 = cljs.core.__destructure_map(map__45221);
var exit_editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45221__$1,new cljs.core.Keyword(null,"exit-editing?","exit-editing?",101580309),true);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((clojure.string.blank_QMARK_(value__$1))?(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))?frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)):null):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(number_value))),clojure.string.trim((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)))))?frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),value__$1):null))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__45222 = ((clojure.string.blank_QMARK_(value__$1))?"":(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)));
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__45222) : set_value_BANG_.call(null,G__45222));
})()),(function (___21901__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(exit_editing_QMARK_)?(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null,false)):null));
}));
}));
}));
};
var G__45443 = function (value__$1,var_args){
var p__45220 = null;
if (arguments.length > 1) {
var G__45444__i = 0, G__45444__a = new Array(arguments.length -  1);
while (G__45444__i < G__45444__a.length) {G__45444__a[G__45444__i] = arguments[G__45444__i + 1]; ++G__45444__i;}
  p__45220 = new cljs.core.IndexedSeq(G__45444__a,0,null);
} 
return G__45443__delegate.call(this,value__$1,p__45220);};
G__45443.cljs$lang$maxFixedArity = 1;
G__45443.cljs$lang$applyTo = (function (arglist__45445){
var value__$1 = cljs.core.first(arglist__45445);
var p__45220 = cljs.core.rest(arglist__45445);
return G__45443__delegate(value__$1,p__45220);
});
G__45443.cljs$core$IFn$_invoke$arity$variadic = G__45443__delegate;
return G__45443;
})()
;
logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
return set_property_value_BANG_(cljs.core.deref(_STAR_value));
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
(set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(number_value_str) : set_value_BANG_.call(null,number_value_str));

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [number_value_str], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-number.flex.flex-1.jtrigger","div.ls-number.flex.flex-1.jtrigger",67996557),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.clear_selection_BANG_();

return (set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_editing_BANG_.call(null,true));
})], null),(cljs.core.truth_(editing_QMARK_)?(function (){var G__45223 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_input_ref,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"class","class",-2030961996),(""+"ls-number-input !h-6 min-h-0 px-0 !py-0 border-none bg-transparent leading-6 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(table_view_QMARK_)?" text-sm":null))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__45224_45446 = frontend.util.evalue(e);
(set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__45224_45446) : set_value_BANG_.call(null,G__45224_45446));

return cljs.core.reset_BANG_(_STAR_value,frontend.util.evalue(e));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (_e){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._promise(set_property_value_BANG_(value));
}));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var input = logseq.shui.hooks.deref(_STAR_input_ref);
var pos = frontend.util.cursor.pos(input);
var k = frontend.util.ekey(e);
if(frontend.util.input_text_selected_QMARK_(input)){
return null;
} else {
var G__45225 = k;
switch (G__45225) {
case "ArrowUp":
case "ArrowDown":
frontend.util.stop_propagation(e);

(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null,false));

frontend.handler.editor.move_cross_boundary_up_down(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowUp",frontend.util.ekey(e)))?new cljs.core.Keyword(null,"up","up",-269712113):new cljs.core.Keyword(null,"down","down",1565245570)),cljs.core.PersistentArrayMap.EMPTY);

return set_property_value_BANG_(value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-editing?","exit-editing?",101580309),false], null));

break;
case "Backspace":
if((pos === (0))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))),(function (___21901__auto__){
return promesa.protocols._promise(frontend.handler.editor.move_cross_boundary_up_down(new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"max","max",61366548)], null)));
}));
}));
} else {
return null;
}

break;
case "Escape":
case "Enter":
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(set_property_value_BANG_(value)),(function (___21901__auto__){
return promesa.protocols._promise(logseq.shui.hooks.deref(_STAR_ref).focus());
}));
}));

break;
default:
return null;

}
}
})], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__45223) : logseq.shui.ui.input.call(null,G__45223));
})():((clojure.string.blank_QMARK_(value))?frontend.components.property.value.property_empty_btn_value(property):value))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$single_number_input__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45226 = cljs.core.first(args__31746__auto__);
var G__45227 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45226,G__45227) : io.factorhouse.hsx.core.obj_get.call(null,G__45226,G__45227));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"single-number-input","single-number-input",1954578543,null),args__31746__auto__),frontend$components$property$value$single_number_input,args__31746__auto__,null);
}
};
var frontend$components$property$value$single_number_input = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45448__i = 0, G__45448__a = new Array(arguments.length -  0);
while (G__45448__i < G__45448__a.length) {G__45448__a[G__45448__i] = arguments[G__45448__i + 0]; ++G__45448__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45448__a,0,null);
} 
return frontend$components$property$value$single_number_input__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$single_number_input.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$single_number_input.cljs$lang$applyTo = (function (arglist__45449){
var args__31746__auto__ = cljs.core.seq(arglist__45449);
return frontend$components$property$value$single_number_input__delegate(args__31746__auto__);
});
frontend$components$property$value$single_number_input.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$single_number_input__delegate;
return frontend$components$property$value$single_number_input;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45228 = comp__31745__auto__;
var G__45229 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45228,G__45229) : io.factorhouse.hsx.core.react_memo.call(null,G__45228,G__45229));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"single-number-input");

return comp__31745__auto__;
})();
/**
 * Returns a tabler-icon name for a given asset file extension string.
 */
frontend.components.property.value.asset_icon_for_type = (function frontend$components$property$value$asset_icon_for_type(asset_type){
var kw = (function (){var G__45230 = asset_type;
if((G__45230 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__45230);
}
})();
if(cljs.core.contains_QMARK_(logseq.common.config.img_formats(),kw)){
return "photo";
} else {
if(cljs.core.contains_QMARK_(frontend.config.audio_formats,kw)){
return "music";
} else {
if(cljs.core.contains_QMARK_(frontend.config.video_formats,kw)){
return "movie";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pdf","pdf",1586765132),kw)){
return "file-type-pdf";
} else {
return "file";

}
}
}
}
});
frontend.components.property.value.asset_image_QMARK_ = (function frontend$components$property$value$asset_image_QMARK_(asset_type){
return cljs.core.contains_QMARK_(logseq.common.config.img_formats(),(function (){var G__45231 = asset_type;
if((G__45231 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__45231);
}
})());
});
frontend.components.property.value.asset_video_QMARK_ = (function frontend$components$property$value$asset_video_QMARK_(asset_type){
return cljs.core.contains_QMARK_(frontend.config.video_formats,(function (){var G__45232 = asset_type;
if((G__45232 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__45232);
}
})());
});
frontend.components.property.value.asset_embedded_control_selector = ".asset-action-bar, .ui__popover-content, .ui__dropdown-menu-content, .ui__context-menu-content, [role='menu'], [role='menuitem'], button, a, input, textarea, select";
frontend.components.property.value.asset_embedded_control_click_QMARK_ = (function frontend$components$property$value$asset_embedded_control_click_QMARK_(target){
return (!(((function (){var G__45233 = target;
if((G__45233 == null)){
return null;
} else {
return G__45233.closest(frontend.components.property.value.asset_embedded_control_selector);
}
})() == null)));
});
/**
 * CSS escape hatch that makes asset-cp's output fit the wrapper's bounding box.
 *   asset-cp wraps the <img> in a div.asset-container with no size constraint of
 *   its own, so max-h-full on the img resolves against an auto-sized parent and
 *   never actually caps height. Forcing .asset-container to w-full h-full (plus
 *   flex centering) gives the img a real bounded parent; the !w-auto/!h-auto +
 *   !max-w-full/!max-h-full + object-contain rules then shrink it proportionally
 *   to fit without cropping any aspect ratio.
 */
frontend.components.property.value.asset_thumb_fit_class = (""+"[&_.asset-container]:!w-full [&_.asset-container]:!h-full "+"[&_.asset-container]:flex [&_.asset-container]:items-center [&_.asset-container]:justify-center "+"[&_img]:!w-auto [&_img]:!h-auto [&_img]:!max-w-full [&_img]:!max-h-full [&_img]:object-contain");
frontend.components.property.value.asset_picker_grid_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"min(640px, calc(100vw - 32px))",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"min(480px, calc(100vh - 96px))",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null);
frontend.components.property.value.asset_picker_items_grid_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat(auto-fill, minmax(140px, 1fr))"], null);
frontend.components.property.value.asset_value_id = (function frontend$components$property$value$asset_value_id(value){
if(cljs.core.map_QMARK_(value)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
if(typeof value === 'number'){
return value;
} else {
return null;

}
}
});
frontend.components.property.value.asset_selected_ids = (function frontend$components$property$value$asset_selected_ids(block,property){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
if((value == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.map_QMARK_(value)){
var temp__5823__auto__ = frontend.components.property.value.asset_value_id(value);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return cljs.core.PersistentHashSet.createAsIfByAssoc([id]);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
} else {
if(cljs.core.coll_QMARK_(value)){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.components.property.value.asset_value_id,value));
} else {
var temp__5823__auto__ = frontend.components.property.value.asset_value_id(value);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return cljs.core.PersistentHashSet.createAsIfByAssoc([id]);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}

}
}
}
});
frontend.components.property.value.assets_selected_first = (function frontend$components$property$value$assets_selected_first(assets,selected_ids){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__45234){
var vec__45235 = p__45234;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45235,(0),null);
var asset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45235,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(selected_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset)))?(0):(1)),idx], null);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,assets)));
});
frontend.components.property.value.show_asset_picker_error_BANG_ = (function frontend$components$property$value$show_asset_picker_error_BANG_(message,err){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.property.value",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),message,new cljs.core.Keyword(null,"error","error",-978969032),err,new cljs.core.Keyword(null,"line","line",212345235),2268], null)),null);
} else {
}

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","picker-set-failed","asset/picker-set-failed",1051491718)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
});
frontend.components.property.value.asset_value_content = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$asset_value_content(value){
var asset_type = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(value);
var image_QMARK_ = frontend.components.property.value.asset_image_QMARK_(asset_type);
var video_QMARK_ = frontend.components.property.value.asset_video_QMARK_(asset_type);
var preview_BANG_ = (function (e){
if(frontend.components.property.value.asset_embedded_control_click_QMARK_(e.target)){
return null;
} else {
frontend.util.stop(e);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("asset","show-preview","asset/show-preview",-1843236874),value], null));
}
});
var preview_key_BANG_ = (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"Enter",null], null), null),frontend.util.ekey(e))){
return preview_BANG_(e);
} else {
return null;
}
});
if(video_QMARK_){
var G__45238 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"gap-1 h-auto whitespace-normal text-left",new cljs.core.Keyword(null,"data-asset-preview-trigger","data-asset-preview-trigger",1678953908),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),preview_BANG_], null);
var G__45239 = frontend.ui.icon("movie",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
var G__45240 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(value)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__45238,G__45239,G__45240) : logseq.shui.ui.button.call(null,G__45238,G__45239,G__45240));
} else {
var temp__5825__auto__ = frontend.state.get_component(new cljs.core.Keyword("block","asset-cp","block/asset-cp",1438941908));
if(cljs.core.truth_(temp__5825__auto__)){
var asset_cp = temp__5825__auto__;
if(image_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-value-thumb.flex-shrink-0.rounded.overflow-hidden.flex.items-center.justify-center","div.asset-value-thumb.flex-shrink-0.rounded.overflow-hidden.flex.items-center.justify-center",907329355),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.components.property.value.asset_thumb_fit_class,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80)], null),new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"data-asset-preview-trigger","data-asset-preview-trigger",1678953908),true,new cljs.core.Keyword(null,"onClickCapture","onClickCapture",-166364237),preview_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),preview_key_BANG_], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__45241 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-resize?","disable-resize?",-1998248527),true], null);
var G__45242 = value;
return (asset_cp.cljs$core$IFn$_invoke$arity$2 ? asset_cp.cljs$core$IFn$_invoke$arity$2(G__45241,G__45242) : asset_cp.call(null,G__45241,G__45242));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"asset-cp-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(value)))], null))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-value-thumb.flex-shrink-0.flex.items-center","div.asset-value-thumb.flex-shrink-0.flex.items-center",255545474),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"data-asset-preview-trigger","data-asset-preview-trigger",1678953908),true,new cljs.core.Keyword(null,"onClickCapture","onClickCapture",-166364237),preview_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),preview_key_BANG_], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__45243 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-resize?","disable-resize?",-1998248527),true], null);
var G__45244 = value;
return (asset_cp.cljs$core$IFn$_invoke$arity$2 ? asset_cp.cljs$core$IFn$_invoke$arity$2(G__45243,G__45244) : asset_cp.call(null,G__45243,G__45244));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"asset-cp-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(value)))], null))], null);
}
} else {
return null;
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$asset_value_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45245 = cljs.core.first(args__31746__auto__);
var G__45246 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45245,G__45246) : io.factorhouse.hsx.core.obj_get.call(null,G__45245,G__45246));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-value-content","asset-value-content",776906529,null),args__31746__auto__),frontend$components$property$value$asset_value_content,args__31746__auto__,null);
}
};
var frontend$components$property$value$asset_value_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45450__i = 0, G__45450__a = new Array(arguments.length -  0);
while (G__45450__i < G__45450__a.length) {G__45450__a[G__45450__i] = arguments[G__45450__i + 0]; ++G__45450__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45450__a,0,null);
} 
return frontend$components$property$value$asset_value_content__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$asset_value_content.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$asset_value_content.cljs$lang$applyTo = (function (arglist__45451){
var args__31746__auto__ = cljs.core.seq(arglist__45451);
return frontend$components$property$value$asset_value_content__delegate(args__31746__auto__);
});
frontend$components$property$value$asset_value_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$asset_value_content__delegate;
return frontend$components$property$value$asset_value_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45247 = comp__31745__auto__;
var G__45248 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45247,G__45248) : io.factorhouse.hsx.core.react_memo.call(null,G__45247,G__45248));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-value-content");

return comp__31745__auto__;
})();
frontend.components.property.value._LT_select_assets_BANG_ = (function frontend$components$property$value$_LT_select_assets_BANG_(block,property,many_QMARK_,selected_ids,set_selected_ids_BANG_,on_chosen,assets){
var asset_ids = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),assets));
if(cljs.core.seq(asset_ids)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(many_QMARK_)?promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (asset_id){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),asset_id);
}),asset_ids)):frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),cljs.core.first(asset_ids))),(function (){
var G__45250_45452 = (cljs.core.truth_(many_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(selected_ids,asset_ids):cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(asset_ids)]));
(set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1(G__45250_45452) : set_selected_ids_BANG_.call(null,G__45250_45452));

if(cljs.core.truth_(many_QMARK_)){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
}
})),(function (){
if(cljs.core.truth_(on_chosen)){
return (on_chosen.cljs$core$IFn$_invoke$arity$0 ? on_chosen.cljs$core$IFn$_invoke$arity$0() : on_chosen.call(null));
} else {
return null;
}
})),(function (p1__45249_SHARP_){
return frontend.components.property.value.show_asset_picker_error_BANG_("Failed to set asset property",p1__45249_SHARP_);
}));
} else {
return null;
}
});
frontend.components.property.value._LT_unselect_asset_BANG_ = (function frontend$components$property$value$_LT_unselect_asset_BANG_(block,property,many_QMARK_,selected_ids,set_selected_ids_BANG_,on_chosen,asset){
var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset);
if(cljs.core.truth_(temp__5825__auto__)){
var asset_id = temp__5825__auto__;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(many_QMARK_)?frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),asset_id):frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))),(function (){
var G__45252_45453 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected_ids,asset_id);
(set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1(G__45252_45453) : set_selected_ids_BANG_.call(null,G__45252_45453));

if(cljs.core.truth_(on_chosen)){
return (on_chosen.cljs$core$IFn$_invoke$arity$0 ? on_chosen.cljs$core$IFn$_invoke$arity$0() : on_chosen.call(null));
} else {
return null;
}
})),(function (p1__45251_SHARP_){
return frontend.components.property.value.show_asset_picker_error_BANG_("Failed to unset asset property",p1__45251_SHARP_);
}));
} else {
return null;
}
});
frontend.components.property.value.open_asset_file_picker_BANG_ = (function frontend$components$property$value$open_asset_file_picker_BANG_(upload_files_BANG_){
var input = document.createElement("input");
var cleanup_BANG_ = (function (){
var G__45253 = input.parentNode;
if((G__45253 == null)){
return null;
} else {
return G__45253.removeChild(input);
}
});
(input.type = "file");

(input.multiple = true);

(input.style.display = "none");

input.addEventListener("change",(function (e){
var input__$1 = e.target;
var G__45254_45454 = input__$1.files;
(upload_files_BANG_.cljs$core$IFn$_invoke$arity$1 ? upload_files_BANG_.cljs$core$IFn$_invoke$arity$1(G__45254_45454) : upload_files_BANG_.call(null,G__45254_45454));

return cleanup_BANG_();
}));

input.addEventListener("cancel",cleanup_BANG_);

document.body.appendChild(input);

return input.click();
});
frontend.components.property.value.asset_grid_upload_button = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$asset_grid_upload_button(saving_QMARK_,open_file_picker_BANG_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-end.mb-2.min-w-0","div.flex.items-center.justify-end.mb-2.min-w-0",1034322874),(function (){var G__45255 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-full whitespace-nowrap",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),saving_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return (open_file_picker_BANG_.cljs$core$IFn$_invoke$arity$0 ? open_file_picker_BANG_.cljs$core$IFn$_invoke$arity$0() : open_file_picker_BANG_.call(null));
})], null);
var G__45256 = frontend.ui.icon("upload",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
var G__45257 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","add-assets","asset/add-assets",-239692904)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__45255,G__45256,G__45257) : logseq.shui.ui.button.call(null,G__45255,G__45256,G__45257));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$asset_grid_upload_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45258 = cljs.core.first(args__31746__auto__);
var G__45259 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45258,G__45259) : io.factorhouse.hsx.core.obj_get.call(null,G__45258,G__45259));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-grid-upload-button","asset-grid-upload-button",-1215001484,null),args__31746__auto__),frontend$components$property$value$asset_grid_upload_button,args__31746__auto__,null);
}
};
var frontend$components$property$value$asset_grid_upload_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45455__i = 0, G__45455__a = new Array(arguments.length -  0);
while (G__45455__i < G__45455__a.length) {G__45455__a[G__45455__i] = arguments[G__45455__i + 0]; ++G__45455__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45455__a,0,null);
} 
return frontend$components$property$value$asset_grid_upload_button__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$asset_grid_upload_button.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$asset_grid_upload_button.cljs$lang$applyTo = (function (arglist__45456){
var args__31746__auto__ = cljs.core.seq(arglist__45456);
return frontend$components$property$value$asset_grid_upload_button__delegate(args__31746__auto__);
});
frontend$components$property$value$asset_grid_upload_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$asset_grid_upload_button__delegate;
return frontend$components$property$value$asset_grid_upload_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45260 = comp__31745__auto__;
var G__45261 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45260,G__45261) : io.factorhouse.hsx.core.react_memo.call(null,G__45260,G__45261));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-grid-upload-button");

return comp__31745__auto__;
})();
frontend.components.property.value.asset_grid_cell = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$asset_grid_cell(asset,selected_QMARK_,toggle_asset_BANG_){
var asset_type = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(asset);
var image_QMARK_ = frontend.components.property.value.asset_image_QMARK_(asset_type);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-picker-cell.relative.rounded.overflow-hidden.border.flex.flex-col.p-0.hover:bg-gray-03.cursor-pointer","div.asset-picker-cell.relative.rounded.overflow-hidden.border.flex.flex-col.p-0.hover:bg-gray-03.cursor-pointer",-842890898),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],["button",(0),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset))),(function (){
return (toggle_asset_BANG_.cljs$core$IFn$_invoke$arity$1 ? toggle_asset_BANG_.cljs$core$IFn$_invoke$arity$1(asset) : toggle_asset_BANG_.call(null,asset));
}),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(asset),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),"1 / 1"], null),(cljs.core.truth_(selected_QMARK_)?"ring-2 ring-primary border-primary":null),selected_QMARK_,(function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"Enter",null], null), null),frontend.util.ekey(e))){
frontend.util.stop(e);

return (toggle_asset_BANG_.cljs$core$IFn$_invoke$arity$1 ? toggle_asset_BANG_.cljs$core$IFn$_invoke$arity$1(asset) : toggle_asset_BANG_.call(null,asset));
} else {
return null;
}
})]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-picker-title.w-full.px-1.py-0.5.text-xs.truncate.text-left.border-b.opacity-80","div.asset-picker-title.w-full.px-1.py-0.5.text-xs.truncate.text-left.border-b.opacity-80",810596003),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(asset)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.items-center.justify-center.w-full.overflow-hidden.p-1.pointer-events-none","div.flex.flex-1.items-center.justify-center.w-full.overflow-hidden.p-1.pointer-events-none",1608479863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(0)], null)], null),((image_QMARK_)?(function (){var temp__5825__auto__ = frontend.state.get_component(new cljs.core.Keyword("block","asset-cp","block/asset-cp",1438941908));
if(cljs.core.truth_(temp__5825__auto__)){
var asset_cp = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.w-full.h-full","div.flex.items-center.justify-center.w-full.h-full",-1157676867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.components.property.value.asset_thumb_fit_class], null),(function (){var G__45262 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-resize?","disable-resize?",-1998248527),true], null);
var G__45263 = asset;
return (asset_cp.cljs$core$IFn$_invoke$arity$2 ? asset_cp.cljs$core$IFn$_invoke$arity$2(G__45262,G__45263) : asset_cp.call(null,G__45262,G__45263));
})()], null);
} else {
return null;
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.justify-center.gap-1.opacity-70","div.flex.flex-col.items-center.justify-center.gap-1.opacity-70",-461894590),frontend.ui.icon(frontend.components.property.value.asset_icon_for_type(asset_type),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(40)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.uppercase","span.text-xs.uppercase",1219984513),(function (){var or__5142__auto__ = asset_type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","picker-fallback-type","asset/picker-fallback-type",1380800554)], 0));
}
})()], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.right-1.bottom-1.pointer-events-none.rounded.bg-popover.shadow-sm","div.absolute.right-1.bottom-1.pointer-events-none.rounded.bg-popover.shadow-sm",-419535325),(function (){var G__45264 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),selected_QMARK_,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__45264) : logseq.shui.ui.checkbox.call(null,G__45264));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$asset_grid_cell__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45265 = cljs.core.first(args__31746__auto__);
var G__45266 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45265,G__45266) : io.factorhouse.hsx.core.obj_get.call(null,G__45265,G__45266));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-grid-cell","asset-grid-cell",1822778261,null),args__31746__auto__),frontend$components$property$value$asset_grid_cell,args__31746__auto__,null);
}
};
var frontend$components$property$value$asset_grid_cell = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45457__i = 0, G__45457__a = new Array(arguments.length -  0);
while (G__45457__i < G__45457__a.length) {G__45457__a[G__45457__i] = arguments[G__45457__i + 0]; ++G__45457__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45457__a,0,null);
} 
return frontend$components$property$value$asset_grid_cell__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$asset_grid_cell.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$asset_grid_cell.cljs$lang$applyTo = (function (arglist__45458){
var args__31746__auto__ = cljs.core.seq(arglist__45458);
return frontend$components$property$value$asset_grid_cell__delegate(args__31746__auto__);
});
frontend$components$property$value$asset_grid_cell.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$asset_grid_cell__delegate;
return frontend$components$property$value$asset_grid_cell;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45267 = comp__31745__auto__;
var G__45268 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45267,G__45268) : io.factorhouse.hsx.core.react_memo.call(null,G__45267,G__45268));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-grid-cell");

return comp__31745__auto__;
})();
frontend.components.property.value.asset_grid_assets = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$asset_grid_assets(assets,selected_ids,toggle_asset_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.gap-2","div.grid.gap-2",1824853550),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),frontend.components.property.value.asset_picker_items_grid_style], null),(function (){var iter__5628__auto__ = (function frontend$components$property$value$asset_grid_assets_$_iter__45269(s__45270){
return (new cljs.core.LazySeq(null,(function (){
var s__45270__$1 = s__45270;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45270__$1);
if(temp__5825__auto__){
var s__45270__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45270__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45270__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45272 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45271 = (0);
while(true){
if((i__45271 < size__5627__auto__)){
var asset = cljs.core._nth(c__5626__auto__,i__45271);
cljs.core.chunk_append(b__45272,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.value.asset_grid_cell,asset,cljs.core.contains_QMARK_(selected_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset)),toggle_asset_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset)))], null)));

var G__45459 = (i__45271 + (1));
i__45271 = G__45459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45272),frontend$components$property$value$asset_grid_assets_$_iter__45269(cljs.core.chunk_rest(s__45270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45272),null);
}
} else {
var asset = cljs.core.first(s__45270__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.value.asset_grid_cell,asset,cljs.core.contains_QMARK_(selected_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset)),toggle_asset_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset)))], null)),frontend$components$property$value$asset_grid_assets_$_iter__45269(cljs.core.rest(s__45270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.components.property.value.assets_selected_first(assets,selected_ids));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$asset_grid_assets__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45273 = cljs.core.first(args__31746__auto__);
var G__45274 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45273,G__45274) : io.factorhouse.hsx.core.obj_get.call(null,G__45273,G__45274));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-grid-assets","asset-grid-assets",284110738,null),args__31746__auto__),frontend$components$property$value$asset_grid_assets,args__31746__auto__,null);
}
};
var frontend$components$property$value$asset_grid_assets = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45460__i = 0, G__45460__a = new Array(arguments.length -  0);
while (G__45460__i < G__45460__a.length) {G__45460__a[G__45460__i] = arguments[G__45460__i + 0]; ++G__45460__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45460__a,0,null);
} 
return frontend$components$property$value$asset_grid_assets__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$asset_grid_assets.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$asset_grid_assets.cljs$lang$applyTo = (function (arglist__45461){
var args__31746__auto__ = cljs.core.seq(arglist__45461);
return frontend$components$property$value$asset_grid_assets__delegate(args__31746__auto__);
});
frontend$components$property$value$asset_grid_assets.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$asset_grid_assets__delegate;
return frontend$components$property$value$asset_grid_assets;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45275 = comp__31745__auto__;
var G__45276 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45275,G__45276) : io.factorhouse.hsx.core.react_memo.call(null,G__45275,G__45276));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-grid-assets");

return comp__31745__auto__;
})();
frontend.components.property.value.asset_grid_popup_content = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$asset_grid_popup_content(block,property,p__45280){
var map__45281 = p__45280;
var map__45281__$1 = cljs.core.__destructure_map(map__45281);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45281__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var vec__45282 = logseq.shui.hooks.use_state(null);
var assets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45282,(0),null);
var set_assets_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45282,(1),null);
var vec__45285 = logseq.shui.hooks.use_state(frontend.components.property.value.asset_selected_ids(block,property));
var selected_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45285,(0),null);
var set_selected_ids_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45285,(1),null);
var vec__45288 = logseq.shui.hooks.use_state(false);
var saving_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45288,(0),null);
var set_saving_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45288,(1),null);
var repo = frontend.state.get_current_repo();
var many_QMARK_ = logseq.db.frontend.property.many_QMARK_(property);
var select_assets_BANG_ = (function (p1__45277_SHARP_){
return frontend.components.property.value._LT_select_assets_BANG_(block,property,many_QMARK_,selected_ids,set_selected_ids_BANG_,on_chosen,p1__45277_SHARP_);
});
var unselect_asset_BANG_ = (function (p1__45278_SHARP_){
return frontend.components.property.value._LT_unselect_asset_BANG_(block,property,many_QMARK_,selected_ids,set_selected_ids_BANG_,on_chosen,p1__45278_SHARP_);
});
var toggle_asset_BANG_ = (function (asset){
if(cljs.core.contains_QMARK_(selected_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset))){
return unselect_asset_BANG_(asset);
} else {
return select_assets_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asset], null));
}
});
var upload_files_BANG_ = (function (files){
var files__$1 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(files);
if(cljs.core.seq(files__$1)){
(set_saving_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_saving_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_saving_BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.assets.db_based_save_assets_BANG_(repo,files__$1),(function (saved_assets){
var saved_assets__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,saved_assets));
if(cljs.core.seq(saved_assets__$1)){
var G__45291_45462 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = assets;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),saved_assets__$1));
(set_assets_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_assets_BANG_.cljs$core$IFn$_invoke$arity$1(G__45291_45462) : set_assets_BANG_.call(null,G__45291_45462));

return select_assets_BANG_(saved_assets__$1);
} else {
return null;
}
})),(function (p1__45279_SHARP_){
return frontend.components.property.value.show_asset_picker_error_BANG_("Failed to add assets from picker",p1__45279_SHARP_);
})),(function (){
return (set_saving_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_saving_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_saving_BANG_.call(null,false));
}));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970)], 0))),(function (asset_class){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(asset_class)?frontend.db.async._LT_get_tag_objects(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset_class)):null)),(function (result){
return promesa.protocols._promise((function (){var G__45292 = cljs.core.vec(result);
return (set_assets_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_assets_BANG_.cljs$core$IFn$_invoke$arity$1(G__45292) : set_assets_BANG_.call(null,G__45292));
})());
}));
}));
}));
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-picker-grid.p-3","div.asset-picker-grid.p-3",186901700),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),frontend.components.property.value.asset_picker_grid_style], null),frontend.components.property.value.asset_grid_upload_button(saving_QMARK_,(function (){
return frontend.components.property.value.open_asset_file_picker_BANG_(upload_files_BANG_);
})),(((assets == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.opacity-60","div.p-4.opacity-60",-1993842960),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","loading","ui/loading",-736989697)], 0))], null):((cljs.core.empty_QMARK_(assets))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.opacity-60.flex.flex-col.gap-1","div.p-4.opacity-60.flex.flex-col.gap-1",-1838090882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","picker-empty","asset/picker-empty",1904822266)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","picker-empty-hint","asset/picker-empty-hint",-1254700436)], 0))], null)], null):frontend.components.property.value.asset_grid_assets(assets,selected_ids,toggle_asset_BANG_)
))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$asset_grid_popup_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45293 = cljs.core.first(args__31746__auto__);
var G__45294 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45293,G__45294) : io.factorhouse.hsx.core.obj_get.call(null,G__45293,G__45294));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-grid-popup-content","asset-grid-popup-content",312102890,null),args__31746__auto__),frontend$components$property$value$asset_grid_popup_content,args__31746__auto__,null);
}
};
var frontend$components$property$value$asset_grid_popup_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45463__i = 0, G__45463__a = new Array(arguments.length -  0);
while (G__45463__i < G__45463__a.length) {G__45463__a[G__45463__i] = arguments[G__45463__i + 0]; ++G__45463__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45463__a,0,null);
} 
return frontend$components$property$value$asset_grid_popup_content__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$asset_grid_popup_content.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$asset_grid_popup_content.cljs$lang$applyTo = (function (arglist__45464){
var args__31746__auto__ = cljs.core.seq(arglist__45464);
return frontend$components$property$value$asset_grid_popup_content__delegate(args__31746__auto__);
});
frontend$components$property$value$asset_grid_popup_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$asset_grid_popup_content__delegate;
return frontend$components$property$value$asset_grid_popup_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45295 = comp__31745__auto__;
var G__45296 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45295,G__45296) : io.factorhouse.hsx.core.react_memo.call(null,G__45295,G__45296));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-grid-popup-content");

return comp__31745__auto__;
})();
frontend.components.property.value.asset_value_picker = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$asset_value_picker(block,property,value,opts){
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var editing_QMARK_ = new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(opts);
var show_grid_BANG_ = (function (target){
if(frontend.config.publishing_QMARK_){
return null;
} else {
var G__45297 = target;
var G__45298 = (function (){
return frontend.components.property.value.asset_grid_popup_content(block,property,opts);
});
var G__45299 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"auto-focus?","auto-focus?",1021654593),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45297,G__45298,G__45299) : logseq.shui.ui.popup_show_BANG_.call(null,G__45297,G__45298,G__45299));
}
});
var show_grid_from_click_BANG_ = (function (e){
if(cljs.core.truth_((function (){var G__45300 = e.target;
if((G__45300 == null)){
return null;
} else {
return G__45300.closest((""+"[data-asset-preview-trigger], "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.property.value.asset_embedded_control_selector)));
}
})())){
return null;
} else {
frontend.util.stop(e);

return show_grid_BANG_((function (){var or__5142__auto__ = e.currentTarget;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.shui.hooks.deref(_STAR_el);
}
})());
}
});
if(cljs.core.truth_(frontend.components.property.value.show_inline_asset_picker_QMARK_(editing_QMARK_,value))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-select.w-full","div.property-select.w-full",1225532045),frontend.components.property.value.asset_grid_popup_content(block,property,opts)], null);
} else {
var G__45301 = new cljs.core.Keyword(null,"div.jtrigger.flex.flex-1.w-full","div.jtrigger.flex.flex-1.w-full",1514731524);
var G__45302 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","picker-open","asset/picker-open",-1857223247)], 0)),new cljs.core.Keyword(null,"onClickCapture","onClickCapture",-166364237),show_grid_from_click_BANG_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_grid_from_click_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__45304 = frontend.util.ekey(e);
switch (G__45304) {
case "ArrowUp":
return frontend.components.property.value.move_property_value_boundary_BANG_(e,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case "ArrowDown":
return frontend.components.property.value.move_property_value_boundary_BANG_(e,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case "Backspace":
case "Delete":
if(frontend.config.publishing_QMARK_){
return null;
} else {
return frontend.components.property.value.delete_block_property_BANG_(block,property,opts);
}

break;
case " ":
case "Enter":
show_grid_BANG_((function (){var or__5142__auto__ = e.currentTarget;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.shui.hooks.deref(_STAR_el);
}
})());

return frontend.util.stop(e);

break;
default:
return null;

}
})], null);
var G__45303 = (cljs.core.truth_((function (){var and__5140__auto__ = value;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.w-full.flex-wrap","div.flex.items-center.gap-2.w-full.flex-wrap",-2112524187),frontend.components.property.value.asset_value_content(value)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.cursor-pointer","div.w-full.cursor-pointer",-1803963685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_grid_from_click_BANG_], null),frontend.components.property.value.property_empty_text_value(property,opts)], null));
return (logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3(G__45301,G__45302,G__45303) : logseq.shui.ui.trigger_as.call(null,G__45301,G__45302,G__45303));
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$asset_value_picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45305 = cljs.core.first(args__31746__auto__);
var G__45306 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45305,G__45306) : io.factorhouse.hsx.core.obj_get.call(null,G__45305,G__45306));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"asset-value-picker","asset-value-picker",663609533,null),args__31746__auto__),frontend$components$property$value$asset_value_picker,args__31746__auto__,null);
}
};
var frontend$components$property$value$asset_value_picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45466__i = 0, G__45466__a = new Array(arguments.length -  0);
while (G__45466__i < G__45466__a.length) {G__45466__a[G__45466__i] = arguments[G__45466__i + 0]; ++G__45466__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45466__a,0,null);
} 
return frontend$components$property$value$asset_value_picker__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$asset_value_picker.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$asset_value_picker.cljs$lang$applyTo = (function (arglist__45467){
var args__31746__auto__ = cljs.core.seq(arglist__45467);
return frontend$components$property$value$asset_value_picker__delegate(args__31746__auto__);
});
frontend$components$property$value$asset_value_picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$asset_value_picker__delegate;
return frontend$components$property$value$asset_value_picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45307 = comp__31745__auto__;
var G__45308 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45307,G__45308) : io.factorhouse.hsx.core.react_memo.call(null,G__45307,G__45308));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"asset-value-picker");

return comp__31745__auto__;
})();
frontend.components.property.value.property_scalar_value_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$property_scalar_value_aux(block,property,value_STAR_,p__45309){
var map__45310 = p__45309;
var map__45310__$1 = cljs.core.__destructure_map(map__45310);
var opts = map__45310__$1;
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45310__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45310__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var batch_QMARK_ = frontend.components.property.value.batch_operation_QMARK_();
var closed_values_QMARK_ = cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property));
var select_type_QMARK__SINGLEQUOTE_ = (function (){var or__5142__auto__ = frontend.components.property.value.property_value_select_type_QMARK_(block,property,value_STAR_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = editing_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((batch_QMARK_) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),type)) && (cljs.core.not(closed_values_QMARK_)))));
} else {
return and__5140__auto__;
}
}
})();
var select_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),on_chosen], null);
var empty_placeholder_QMARK_ = frontend.components.property.value.empty_placeholder_value_QMARK_(value_STAR_);
var value = ((empty_placeholder_QMARK_)?null:value_STAR_);
var select_value = ((empty_placeholder_QMARK_)?new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837):value);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))){
return frontend.components.property.value.icon_row(block,editing_QMARK_);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"number","number",1570378438))) && (((cljs.core.not(editing_QMARK_)) && (cljs.core.not(closed_values_QMARK_)))))){
return frontend.components.property.value.single_number_input(block,property,value,new cljs.core.Keyword(null,"table-view?","table-view?",2073887505).cljs$core$IFn$_invoke$arity$1(opts));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"string","string",-1989541586))){
return frontend.components.property.value.single_string_input(block,property,value,new cljs.core.Keyword(null,"table-view?","table-view?",2073887505).cljs$core$IFn$_invoke$arity$1(opts));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"asset","asset",-280274466))){
return frontend.components.property.value.asset_value_picker(block,property,value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = select_type_QMARK__SINGLEQUOTE_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(((cljs.core.not(closed_values_QMARK_)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"datetime","datetime",494675702),null], null), null),type)))));
} else {
return and__5140__auto__;
}
})())){
var classes = new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block);
var display_as_checkbox_QMARK_ = (function (){var and__5140__auto__ = cljs.core.some((function (block__$1){
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","checkbox-display-properties","logseq.property/checkbox-display-properties",-321532569).cljs$core$IFn$_invoke$arity$1(block__$1))),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,block));
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core.boolean_QMARK_(new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863).cljs$core$IFn$_invoke$arity$1(value_STAR_))));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(display_as_checkbox_QMARK_)){
var checked_QMARK_ = new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863).cljs$core$IFn$_invoke$arity$1(value_STAR_);
var G__45311 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"class","class",-2030961996),"mt-1",new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (value__$1){
var choices = new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property);
var choice = cljs.core.some((function (choice){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,new cljs.core.Keyword("logseq.property","choice-checkbox-state","logseq.property/choice-checkbox-state",-1272422863).cljs$core$IFn$_invoke$arity$1(choice))){
return choice;
} else {
return null;
}
}),choices);
if(cljs.core.truth_(choice)){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice));
} else {
return null;
}
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__45311) : logseq.shui.ui.checkbox.call(null,G__45311));
} else {
return frontend.components.property.value.single_value_select(block,property,select_value,select_opts,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value-render","value-render",882962329),(function (){
return frontend.components.property.value.select_item(property,type,select_value,opts);
})], 0)));
}
} else {
var G__45312 = type;
var G__45312__$1 = (((G__45312 instanceof cljs.core.Keyword))?G__45312.fqn:null);
switch (G__45312__$1) {
case "date":
case "datetime":
return frontend.components.property.value.property_value_date_picker(block,property,value,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing_QMARK_], null)], 0)));

break;
case "checkbox":
var add_property_BANG_ = (function (value__$1){
frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),value__$1,opts);

var temp__5825__auto__ = new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var on_checked_change = temp__5825__auto__;
return (on_checked_change.cljs$core$IFn$_invoke$arity$1 ? on_checked_change.cljs$core$IFn$_invoke$arity$1(value__$1) : on_checked_change.call(null,value__$1));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex.w-full.items-center.as-scalar-value-wrap.cursor-pointer","label.flex.w-full.items-center.as-scalar-value-wrap.cursor-pointer",-1561018728),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__45313 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"jtrigger flex flex-row items-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(16)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),editing_QMARK_,new cljs.core.Keyword(null,"checked","checked",-50955819),value,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (){
return add_property_BANG_(cljs.core.not(value));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.ekey(e),"Enter")){
add_property_BANG_(cljs.core.not(value));
} else {
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Backspace",null,"Delete",null], null), null),frontend.util.ekey(e))){
return frontend.components.property.value.delete_block_property_BANG_(block,property,opts);
} else {
return null;
}
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__45313) : logseq.shui.ui.checkbox.call(null,G__45313));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"checkbox"], null))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1","div.flex.flex-1",-1659764687),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.property.value.property_value_inner(block,property,value,opts)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"property-value-inner"], null))], null);

}
}

}
}
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$property_scalar_value_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45314 = cljs.core.first(args__31746__auto__);
var G__45315 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45314,G__45315) : io.factorhouse.hsx.core.obj_get.call(null,G__45314,G__45315));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-scalar-value-aux","property-scalar-value-aux",676482375,null),args__31746__auto__),frontend$components$property$value$property_scalar_value_aux,args__31746__auto__,null);
}
};
var frontend$components$property$value$property_scalar_value_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45469__i = 0, G__45469__a = new Array(arguments.length -  0);
while (G__45469__i < G__45469__a.length) {G__45469__a[G__45469__i] = arguments[G__45469__i + 0]; ++G__45469__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45469__a,0,null);
} 
return frontend$components$property$value$property_scalar_value_aux__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$property_scalar_value_aux.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$property_scalar_value_aux.cljs$lang$applyTo = (function (arglist__45470){
var args__31746__auto__ = cljs.core.seq(arglist__45470);
return frontend$components$property$value$property_scalar_value_aux__delegate(args__31746__auto__);
});
frontend$components$property$value$property_scalar_value_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_scalar_value_aux__delegate;
return frontend$components$property$value$property_scalar_value_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45316 = comp__31745__auto__;
var G__45317 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45316,G__45317) : io.factorhouse.hsx.core.react_memo.call(null,G__45316,G__45317));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-scalar-value-aux");

return comp__31745__auto__;
})();
frontend.components.property.value.property_scalar_value = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$property_scalar_value(block,property,value_STAR_,p__45318){
var map__45319 = p__45318;
var map__45319__$1 = cljs.core.__destructure_map(map__45319);
var opts = map__45319__$1;
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45319__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45319__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var block_editing_QMARK_ = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [container_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null)));
var editing = (function (){var or__5142__auto__ = editing_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((block_editing_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_action_data())))));
}
})();
return frontend.components.property.value.property_scalar_value_aux(block,property,value_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"editing?","editing?",1646440800),editing));
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$property_scalar_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45320 = cljs.core.first(args__31746__auto__);
var G__45321 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45320,G__45321) : io.factorhouse.hsx.core.obj_get.call(null,G__45320,G__45321));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-scalar-value","property-scalar-value",1672048448,null),args__31746__auto__),frontend$components$property$value$property_scalar_value,args__31746__auto__,null);
}
};
var frontend$components$property$value$property_scalar_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45471__i = 0, G__45471__a = new Array(arguments.length -  0);
while (G__45471__i < G__45471__a.length) {G__45471__a[G__45471__i] = arguments[G__45471__i + 0]; ++G__45471__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45471__a,0,null);
} 
return frontend$components$property$value$property_scalar_value__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$property_scalar_value.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$property_scalar_value.cljs$lang$applyTo = (function (arglist__45472){
var args__31746__auto__ = cljs.core.seq(arglist__45472);
return frontend$components$property$value$property_scalar_value__delegate(args__31746__auto__);
});
frontend$components$property$value$property_scalar_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_scalar_value__delegate;
return frontend$components$property$value$property_scalar_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45322 = comp__31745__auto__;
var G__45323 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45322,G__45323) : io.factorhouse.hsx.core.react_memo.call(null,G__45322,G__45323));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-scalar-value");

return comp__31745__auto__;
})();
frontend.components.property.value.multiple_values_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$multiple_values_inner(block,property,v,p__45324){
var map__45325 = p__45324;
var map__45325__$1 = cljs.core.__destructure_map(map__45325);
var opts = map__45325__$1;
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45325__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45325__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var date_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"datetime","datetime",494675702),null], null), null),type);
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var items = (function (){var G__45326 = (cljs.core.truth_(frontend.components.property.value.entity_map_QMARK_(v))?cljs.core.PersistentHashSet.createAsIfByAssoc([v]):v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("block","tags","block/tags",1814948340))){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (v__$1){
return cljs.core.contains_QMARK_(logseq.db.hidden_tags,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(v__$1));
}),G__45326);
} else {
return G__45326;
}
})();
var select_cp = (function (select_opts,target){
var select_opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),true,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (){
if(cljs.core.truth_(on_chosen)){
return (on_chosen.cljs$core$IFn$_invoke$arity$0 ? on_chosen.cljs$core$IFn$_invoke$arity$0() : on_chosen.call(null));
} else {
return null;
}
})], null),select_opts,(cljs.core.truth_(editing_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown?","dropdown?",-1027769147),false], null))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-select","div.property-select",-1891938982),(function (){var G__45327 = type;
var G__45327__$1 = (((G__45327 instanceof cljs.core.Keyword))?G__45327.fqn:null);
switch (G__45327__$1) {
case "asset":
return frontend.components.property.value.asset_grid_popup_content(block,property,select_opts__$1);

break;
case "node":
case "page":
case "class":
case "property":
return frontend.components.property.value.property_value_select_node(block,property,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(select_opts__$1,new cljs.core.Keyword(null,"target","target",253001721),target),opts);

break;
default:
return frontend.components.property.value.select(block,property,select_opts__$1,opts);

}
})()], null);
});
if(cljs.core.truth_(editing_QMARK_)){
if(date_QMARK_){
return frontend.components.property.value.property_value_date_picker(block,property,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true));
} else {
return select_cp(cljs.core.PersistentArrayMap.EMPTY,null);
}
} else {
var toggle_fn = logseq.shui.ui.popup_hide_BANG_;
var content_fn = (function (p__45328,target){
var map__45329 = p__45328;
var map__45329__$1 = cljs.core.__destructure_map(map__45329);
var _id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45329__$1,new cljs.core.Keyword(null,"_id","_id",-789960287));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45329__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
return select_cp(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-props","content-props",687449284),content_props], null),target);
});
var show_popup_BANG_ = (function (e){
var target = e.target;
if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.config.publishing_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.components.property.value.property_value_popup_blocked_link_QMARK_(target);
}
})())){
return null;
} else {
return frontend.components.property.value.page_ref_cell_click(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity","entity",-450970276),frontend.components.property.value.page_ref_entity_from_event_target(target),new cljs.core.Keyword(null,"current-page","current-page",-101294180),frontend.state.get_current_page(),new cljs.core.Keyword(null,"open-popup!","open-popup!",2030305834),(function (){
var G__45330 = logseq.shui.hooks.deref(_STAR_el);
var G__45331 = (function (opts__$1){
return content_fn(opts__$1,target);
});
var G__45332 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"as-content?","as-content?",-609445867),false,new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"auto-focus?","auto-focus?",1021654593),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45330,G__45331,G__45332) : logseq.shui.ui.popup_show_BANG_.call(null,G__45330,G__45331,G__45332));
})], null));
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.multi-values.jtrigger","div.multi-values.jtrigger",1585292408),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),"0",new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_popup_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__45333 = e.key;
switch (G__45333) {
case " ":
case "Enter":
var G__45334_45475 = logseq.shui.hooks.deref(_STAR_el);
if((G__45334_45475 == null)){
} else {
G__45334_45475.click();
}

return frontend.util.stop(e);

break;
case "Backspace":
case "Delete":
return frontend.components.property.value.delete_block_property_BANG_(block,property,opts);

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
}),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.components.property.value.multiple_values_trigger_class(opts)], null),(function (){var items_SINGLEQUOTE_ = cljs.core.vec(items);
var not_empty_value_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),items_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837)], null));
if(((cljs.core.seq(items)) && (not_empty_value_QMARK_))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"asset","asset",-280274466))){
var iter__5628__auto__ = (function frontend$components$property$value$multiple_values_inner_$_iter__45335(s__45336){
return (new cljs.core.LazySeq(null,(function (){
var s__45336__$1 = s__45336;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45336__$1);
if(temp__5825__auto__){
var s__45336__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45336__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45336__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45338 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45337 = (0);
while(true){
if((i__45337 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__45337);
cljs.core.chunk_append(b__45338,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.value.asset_value_content,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(item));
}
})()], null)));

var G__45476 = (i__45337 + (1));
i__45337 = G__45476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45338),frontend$components$property$value$multiple_values_inner_$_iter__45335(cljs.core.chunk_rest(s__45336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45338),null);
}
} else {
var item = cljs.core.first(s__45336__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.value.asset_value_content,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(item));
}
})()], null)),frontend$components$property$value$multiple_values_inner_$_iter__45335(cljs.core.rest(s__45336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(items_SINGLEQUOTE_);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5628__auto__ = (function frontend$components$property$value$multiple_values_inner_$_iter__45339(s__45340){
return (new cljs.core.LazySeq(null,(function (){
var s__45340__$1 = s__45340;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45340__$1);
if(temp__5825__auto__){
var s__45340__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45340__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45340__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45342 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45341 = (0);
while(true){
if((i__45341 < size__5627__auto__)){
var vec__45343 = cljs.core._nth(c__5626__auto__,i__45341);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45343,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45343,(1),null);
cljs.core.chunk_append(b__45342,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.value.select_item,property,type,item,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"show-popup!","show-popup!",791580912),show_popup_BANG_)], null),(((idx < (cljs.core.count(items_SINGLEQUOTE_) - (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50.-ml-1","span.opacity-50.-ml-1",1632216631),","], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"value-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return item;
}
})())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null)));

var G__45480 = (i__45341 + (1));
i__45341 = G__45480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45342),frontend$components$property$value$multiple_values_inner_$_iter__45339(cljs.core.chunk_rest(s__45340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45342),null);
}
} else {
var vec__45346 = cljs.core.first(s__45340__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45346,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45346,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.value.select_item,property,type,item,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"show-popup!","show-popup!",791580912),show_popup_BANG_)], null),(((idx < (cljs.core.count(items_SINGLEQUOTE_) - (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50.-ml-1","span.opacity-50.-ml-1",1632216631),","], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"value-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return item;
}
})())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null)),frontend$components$property$value$multiple_values_inner_$_iter__45339(cljs.core.rest(s__45340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,items_SINGLEQUOTE_));
})(),((date_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.value.property_value_date_picker(block,property,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),toggle_fn], null))], null):null));
}
} else {
if(date_QMARK_){
return frontend.components.property.value.property_value_date_picker(block,property,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),toggle_fn], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"asset","asset",-280274466))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.cursor-pointer","div.w-full.cursor-pointer",-1803963685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_popup_BANG_], null),frontend.components.property.value.property_empty_text_value(property,opts)], null);
} else {
return frontend.components.property.value.property_empty_text_value(property,opts);
}
}
}
})()], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$multiple_values_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45349 = cljs.core.first(args__31746__auto__);
var G__45350 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45349,G__45350) : io.factorhouse.hsx.core.obj_get.call(null,G__45349,G__45350));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"multiple-values-inner","multiple-values-inner",-758899255,null),args__31746__auto__),frontend$components$property$value$multiple_values_inner,args__31746__auto__,null);
}
};
var frontend$components$property$value$multiple_values_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45481__i = 0, G__45481__a = new Array(arguments.length -  0);
while (G__45481__i < G__45481__a.length) {G__45481__a[G__45481__i] = arguments[G__45481__i + 0]; ++G__45481__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45481__a,0,null);
} 
return frontend$components$property$value$multiple_values_inner__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$multiple_values_inner.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$multiple_values_inner.cljs$lang$applyTo = (function (arglist__45482){
var args__31746__auto__ = cljs.core.seq(arglist__45482);
return frontend$components$property$value$multiple_values_inner__delegate(args__31746__auto__);
});
frontend$components$property$value$multiple_values_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$multiple_values_inner__delegate;
return frontend$components$property$value$multiple_values_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45351 = comp__31745__auto__;
var G__45352 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45351,G__45352) : io.factorhouse.hsx.core.react_memo.call(null,G__45351,G__45352));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"multiple-values-inner");

return comp__31745__auto__;
})();
frontend.components.property.value.multiple_values = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$multiple_values(block,property,opts){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
var value_SINGLEQUOTE_ = ((frontend.components.property.value.property_value_collection_QMARK_(value))?value:(((!((value == null))))?cljs.core.PersistentHashSet.createAsIfByAssoc([value]):null
));
return frontend.components.property.value.multiple_values_inner(block,property,value_SINGLEQUOTE_,opts);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$multiple_values__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45353 = cljs.core.first(args__31746__auto__);
var G__45354 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45353,G__45354) : io.factorhouse.hsx.core.obj_get.call(null,G__45353,G__45354));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"multiple-values","multiple-values",2111597637,null),args__31746__auto__),frontend$components$property$value$multiple_values,args__31746__auto__,null);
}
};
var frontend$components$property$value$multiple_values = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45487__i = 0, G__45487__a = new Array(arguments.length -  0);
while (G__45487__i < G__45487__a.length) {G__45487__a[G__45487__i] = arguments[G__45487__i + 0]; ++G__45487__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45487__a,0,null);
} 
return frontend$components$property$value$multiple_values__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$multiple_values.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$multiple_values.cljs$lang$applyTo = (function (arglist__45488){
var args__31746__auto__ = cljs.core.seq(arglist__45488);
return frontend$components$property$value$multiple_values__delegate(args__31746__auto__);
});
frontend$components$property$value$multiple_values.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$multiple_values__delegate;
return frontend$components$property$value$multiple_values;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45355 = comp__31745__auto__;
var G__45356 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45355,G__45356) : io.factorhouse.hsx.core.react_memo.call(null,G__45355,G__45356));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"multiple-values");

return comp__31745__auto__;
})();
frontend.components.property.value.resolved_property_value_for_render = (function frontend$components$property$value$resolved_property_value_for_render(block,property,multiple_values_QMARK_){
var property_ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,property_ident);
var block_loaded_QMARK_ = (!((new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block) == null)));
var or__5142__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = multiple_values_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((frontend.components.property.value.property_value_collection_QMARK_(v)) || ((v == null)));
} else {
return and__5140__auto__;
}
})())?v:(cljs.core.truth_(multiple_values_QMARK_)?cljs.core.PersistentHashSet.createAsIfByAssoc([v]):((cljs.core.set_QMARK_(v))?cljs.core.first(v):v
)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(((block_loaded_QMARK_) && (((cljs.core.contains_QMARK_(new cljs.core.Keyword("block.temp","class-property-idents","block.temp/class-property-idents",-551726866).cljs$core$IFn$_invoke$arity$1(block),property_ident)) || (cljs.core.not(new cljs.core.Keyword("block.temp","class-declared?","block.temp/class-declared?",-1062953131).cljs$core$IFn$_invoke$arity$1(property))))))){
return new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(property);
} else {
return null;
}
}
});
frontend.components.property.value.property_value = (function (){var render_fn__31744__auto__ = (function frontend$components$property$value$property_value(block,property,p__45359){
var map__45360 = p__45359;
var map__45360__$1 = cljs.core.__destructure_map(map__45360);
var opts = map__45360__$1;
var show_tooltip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45360__$1,new cljs.core.Keyword(null,"show-tooltip?","show-tooltip?",-1214081087));
var p_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45360__$1,new cljs.core.Keyword(null,"p-block","p-block",1335284937));
var p_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45360__$1,new cljs.core.Keyword(null,"p-property","p-property",-435865980));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45360__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
return frontend.ui.catch_error(frontend.ui.block_error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","something-wrong","sync/something-wrong",-1023459588)], 0)),cljs.core.PersistentArrayMap.EMPTY),(function (){var block_cp = frontend.state.get_component(new cljs.core.Keyword("block","blocks-container","block/blocks-container",409697112));
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page-cp","page-cp",1066562595),frontend.state.get_component(new cljs.core.Keyword("block","page-cp","block/page-cp",975876274)),new cljs.core.Keyword(null,"inline-text","inline-text",910915394),frontend.state.get_component(new cljs.core.Keyword("block","inline-text","block/inline-text",607091413)),new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.state.get_component(new cljs.core.Keyword("editor","box","editor/box",-1921770435)),new cljs.core.Keyword(null,"block-cp","block-cp",568894835),block_cp,new cljs.core.Keyword(null,"properties-cp","properties-cp",-1837867914),new cljs.core.Keyword(null,"properties-cp","properties-cp",-1837867914)], null)], 0));
var dom_id = (""+"ls-property-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property)));
var editor_id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom_id)+"-editor");
var type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var multiple_values_QMARK_ = logseq.db.frontend.property.many_QMARK_(property);
var v = frontend.components.property.value.resolved_property_value_for_render(block,property,multiple_values_QMARK_);
var self_value_or_embedded_QMARK_ = (function (v__$1){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","link-id","block/link-id",-94551135).cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5140__auto__;
}
}
});
if(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = frontend.components.property.value.entity_map_QMARK_(v);
if(cljs.core.truth_(and__5140__auto__)){
return self_value_or_embedded_QMARK_(v);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = cljs.core.coll_QMARK_(v);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.every_QMARK_(frontend.components.property.value.entity_map_QMARK_,v);
if(and__5140__auto____$1){
return cljs.core.some(self_value_or_embedded_QMARK_,v);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p_block,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p_property,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property))));
} else {
return and__5140__auto__;
}
}
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some((function (p1__45357_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__45357_SHARP_));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","self-reference","property/self-reference",-260955897)], 0))], null),(function (){var G__45361 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"h-5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
})], null);
var G__45362 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","fix","ui/fix",-1031769965)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45361,G__45362) : logseq.shui.ui.button.call(null,G__45361,G__45362));
})()], null);
} else {
var empty_value_QMARK_ = frontend.components.property.value.property_value_empty_for_render_QMARK_(v);
var closed_values_QMARK_ = cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property));
var value_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-value-inner","div.property-value-inner",-696636967),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),type,new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((empty_value_QMARK_)?"empty-value":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322).cljs$core$IFn$_invoke$arity$1(opts__$1))?null:" w-full"))),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core.truth_((function (){var G__45363 = e.target;
if((G__45363 == null)){
return null;
} else {
return G__45363.closest(".ui__popover-content, .ui__dropdown-menu-content, .ui__context-menu-content");
}
})())){
return null;
} else {
return frontend.state.clear_selection_BANG_();
}
})], null),((((multiple_values_QMARK_) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),type)) && (((cljs.core.not(closed_values_QMARK_)) && (cljs.core.not(editing_QMARK_))))))))?frontend.components.property.value.property_normal_block_value(block,property,v,opts__$1):((multiple_values_QMARK_)?frontend.components.property.value.multiple_values(block,property,opts__$1):frontend.components.property.value.property_scalar_value(block,property,v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor-id","editor-id",1107175985),editor_id,new cljs.core.Keyword(null,"dom-id","dom-id",-1588236703),dom_id], null)], 0)))
))], null);
if(cljs.core.truth_(show_tooltip_QMARK_)){
var G__45364 = (function (){var G__45365 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delay","delay",-574225219),(1200)], null);
var G__45366 = (function (){var G__45368 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onFocusCapture","onFocusCapture",-1273942772),(function (p1__45358_SHARP_){
return frontend.util.stop_propagation(p1__45358_SHARP_);
}),new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null);
var G__45369 = value_cp;
return (logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$2(G__45368,G__45369) : logseq.shui.ui.tooltip_trigger.call(null,G__45368,G__45369));
})();
var G__45367 = (function (){var G__45370 = (function (){var G__45371 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","change-tooltip","property/change-tooltip",1279607832),logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t)], 0));
return (logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$1(G__45371) : logseq.shui.ui.tooltip_content.call(null,G__45371));
})();
return (logseq.shui.ui.tooltip_portal.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_portal.cljs$core$IFn$_invoke$arity$1(G__45370) : logseq.shui.ui.tooltip_portal.call(null,G__45370));
})();
return (logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$3(G__45365,G__45366,G__45367) : logseq.shui.ui.tooltip.call(null,G__45365,G__45366,G__45367));
})();
return (logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1(G__45364) : logseq.shui.ui.tooltip_provider.call(null,G__45364));
} else {
return value_cp;
}
}
})());
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$value$property_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45372 = cljs.core.first(args__31746__auto__);
var G__45373 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45372,G__45373) : io.factorhouse.hsx.core.obj_get.call(null,G__45372,G__45373));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"property-value","property-value",-1138272462,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$property$value$property_value,args__31746__auto__,null);
}
};
var frontend$components$property$value$property_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45491__i = 0, G__45491__a = new Array(arguments.length -  0);
while (G__45491__i < G__45491__a.length) {G__45491__a[G__45491__i] = arguments[G__45491__i + 0]; ++G__45491__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45491__a,0,null);
} 
return frontend$components$property$value$property_value__delegate.call(this,args__31746__auto__);};
frontend$components$property$value$property_value.cljs$lang$maxFixedArity = 0;
frontend$components$property$value$property_value.cljs$lang$applyTo = (function (arglist__45492){
var args__31746__auto__ = cljs.core.seq(arglist__45492);
return frontend$components$property$value$property_value__delegate(args__31746__auto__);
});
frontend$components$property$value$property_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$value$property_value__delegate;
return frontend$components$property$value$property_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45374 = comp__31745__auto__;
var G__45375 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45374,G__45375) : io.factorhouse.hsx.core.react_memo.call(null,G__45374,G__45375));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-value");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.property.value.js.map
