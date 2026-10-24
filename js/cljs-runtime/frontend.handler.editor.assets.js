goog.provide('frontend.handler.editor.assets');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.handler.editor.assets.delete_asset_of_block_BANG_ = (function frontend$handler$editor$assets$delete_asset_of_block_BANG_(p__66844){
var map__66845 = p__66844;
var map__66845__$1 = cljs.core.__destructure_map(map__66845);
var _opts = map__66845__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66845__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var asset_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66845__$1,new cljs.core.Keyword(null,"asset-block","asset-block",1420117445));
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66845__$1,new cljs.core.Keyword(null,"full-text","full-text",1432444182));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66845__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66845__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var delete_local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66845__$1,new cljs.core.Keyword(null,"delete-local?","delete-local?",1716577572));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)+" not exists"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id], null));
}
})()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)),(function (text){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(asset_block)?clojure.string.replace(text,(function (){var G__66848 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block);
return (frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(G__66848) : frontend.util.ref.__GT_page_ref.call(null,G__66848));
})(),""):clojure.string.replace(text,full_text,""))),(function (content){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,block,content)),(function (___27434__auto__){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = local_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return delete_local_QMARK_;
} else {
return and__5140__auto__;
}
})())?(cljs.core.truth_(asset_block)?frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(asset_block):null):null));
}));
}));
}));
}));
}));
}));
});
frontend.handler.editor.assets.db_based_write_asset_BANG_ = (function frontend$handler$editor$assets$db_based_write_asset_BANG_(repo,file_path,file){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(file.arrayBuffer()),(function (buffer){
return promesa.protocols._promise(frontend.fs.write_asset_file_BANG_(repo,file_path,buffer));
}));
}));
});
frontend.handler.editor.assets.new_asset_block = (function frontend$handler$editor$assets$new_asset_block(repo,file,p__66857){
var map__66858 = p__66857;
var map__66858__$1 = cljs.core.__destructure_map(map__66858);
var opts = map__66858__$1;
var external_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66858__$1,new cljs.core.Keyword(null,"external-url","external-url",-1665502145));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.map_QMARK_(file))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(file)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,null], null))),(function (p__66859){
var vec__66860 = p__66859;
var file__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66860,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66860,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise(((typeof file__$1 === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,file__$1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file__$1,external_url], null))),(function (p__66864){
var vec__66865 = p__66864;
var file__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66865,(0),null);
var external_url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66865,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise(module$node_modules$path$path.basename((function (){var or__5142__auto__ = (function (){var G__66868 = file__$2;
if((G__66868 == null)){
return null;
} else {
return G__66868.name;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(external_url__$1));
}
})())),(function (file_name){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.db.frontend.asset.asset_name__GT_title(file_name)),(function (file_name_without_ext_STAR_){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_name_without_ext_STAR_,"image"))?frontend.date.get_date_time_string_2.cljs$core$IFn$_invoke$arity$0():file_name_without_ext_STAR_)),(function (file_name_without_ext){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__66869 = (function (){var or__5142__auto__ = file__$2;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return external_url__$1;
}
})();
if((G__66869 == null)){
return null;
} else {
return frontend.handler.assets.get_file_checksum(G__66869);
}
})()),(function (checksum){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = (function (){var G__66870 = file__$2;
if((G__66870 == null)){
return null;
} else {
return G__66870.size;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()),(function (size){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__66871 = checksum;
if((G__66871 == null)){
return null;
} else {
return frontend.db.async._LT_get_asset_with_checksum(repo,G__66871);
}
})()),(function (existing_asset){
return promesa.protocols._promise((cljs.core.truth_(existing_asset)?(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","already-exists","asset/already-exists",1854838445),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(existing_asset),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(existing_asset)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return null;
})()
:(function (){var block_id = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.new_block_id();
}
})();
var ext = (cljs.core.truth_(file_name)?logseq.db.frontend.asset.asset_path__GT_type(file_name):null);
var _ = ((clojure.string.blank_QMARK_(ext))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File doesn't have a valid ext.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name], null))})():null);
var ___$1 = (cljs.core.truth_((function (){var G__66875 = file__$2;
if((G__66875 == null)){
return null;
} else {
return frontend.handler.assets.exceed_limit_size_QMARK_(G__66875);
}
})())?(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","size-too-large","asset/size-too-large",-817597484)], 0))], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Asset size shouldn't be larger than 100M",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name], null));
})()
:null);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(file__$2)?(function (){var file_path = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext));
return frontend.handler.editor.assets.db_based_write_asset_BANG_(repo,file_path,file__$2);
})():null)),(function (___27434__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("block","title","block/title",710445684),(function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_name_without_ext;
}
})(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id,new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098),ext,new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163),external_url__$1,new cljs.core.Keyword("logseq.property.asset","size","logseq.property.asset/size",-116786219),size,new cljs.core.Keyword("logseq.property.asset","checksum","logseq.property.asset/checksum",-1011416979),checksum,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970),null], null), null)], null));
}));
}));
})()));
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
/**
 * Save incoming(pasted) assets to assets directory.
 * 
 * Returns: asset entities
 */
frontend.handler.editor.assets.db_based_save_assets_BANG_ = (function frontend$handler$editor$assets$db_based_save_assets_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___66939 = arguments.length;
var i__5877__auto___66940 = (0);
while(true){
if((i__5877__auto___66940 < len__5876__auto___66939)){
args__5882__auto__.push((arguments[i__5877__auto___66940]));

var G__66941 = (i__5877__auto___66940 + (1));
i__5877__auto___66940 = G__66941;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.editor.assets.db_based_save_assets_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.editor.assets.db_based_save_assets_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (repo,files,p__66881){
var map__66882 = p__66881;
var map__66882__$1 = cljs.core.__destructure_map(map__66882);
var pdf_area_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66882__$1,new cljs.core.Keyword(null,"pdf-area?","pdf-area?",770305490));
var last_edit_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66882__$1,new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316));
var save_to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66882__$1,new cljs.core.Keyword(null,"save-to-page","save-to-page",603367270));
var target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66882__$1,new cljs.core.Keyword(null,"target-block","target-block",348392017));
var state_edit_block = (cljs.core.truth_(target_block)?null:frontend.state.get_edit_block());
var edit_content = (cljs.core.truth_(state_edit_block)?frontend.state.get_edit_content():null);
var edit_block = (cljs.core.truth_(target_block)?null:(cljs.core.truth_(state_edit_block)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_edit_block,new cljs.core.Keyword("block","title","block/title",710445684),edit_content):last_edit_block));
var has_unsaved_edit_QMARK_ = (function (){var and__5140__auto__ = state_edit_block;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(state_edit_block),edit_content);
} else {
return and__5140__auto__;
}
})();
var empty_target_QMARK_ = (cljs.core.truth_(target_block)?false:(cljs.core.truth_(state_edit_block)?clojure.string.blank_QMARK_(edit_content):(cljs.core.truth_(last_edit_block)?clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(last_edit_block)):false
)));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets.ensure_assets_dir_BANG_(repo)),(function (p__66883){
var vec__66884 = p__66883;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66884,(0),null);
var asset_dir_rpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66884,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970)], 0))),(function (asset_page){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(has_unsaved_edit_QMARK_)?frontend.handler.editor.save_block_aux_BANG_(state_edit_block,edit_content,null):null)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all((function (){var iter__5628__auto__ = (function frontend$handler$editor$assets$iter__66887(s__66888){
return (new cljs.core.LazySeq(null,(function (){
var s__66888__$1 = s__66888;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__66888__$1);
if(temp__5825__auto__){
var s__66888__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66888__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__66888__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__66890 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__66889 = (0);
while(true){
if((i__66889 < size__5627__auto__)){
var vec__66891 = cljs.core._nth(c__5626__auto__,i__66889);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66891,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66891,(1),null);
cljs.core.chunk_append(b__66890,frontend.handler.editor.assets.new_asset_block(repo,file,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repo-dir","repo-dir",1336250959),repo_dir,new cljs.core.Keyword(null,"asset-dir-rpath","asset-dir-rpath",1087588690),asset_dir_rpath,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(((((idx === (0))) && (empty_target_QMARK_)))?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block):null)], null)));

var G__66975 = (i__66889 + (1));
i__66889 = G__66975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66890),frontend$handler$editor$assets$iter__66887(cljs.core.chunk_rest(s__66888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66890),null);
}
} else {
var vec__66899 = cljs.core.first(s__66888__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66899,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66899,(1),null);
return cljs.core.cons(frontend.handler.editor.assets.new_asset_block(repo,file,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repo-dir","repo-dir",1336250959),repo_dir,new cljs.core.Keyword(null,"asset-dir-rpath","asset-dir-rpath",1087588690),asset_dir_rpath,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(((((idx === (0))) && (empty_target_QMARK_)))?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block):null)], null)),frontend$handler$editor$assets$iter__66887(cljs.core.rest(s__66888__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(files));
})())),(function (blocks_STAR_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks_STAR_)),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.boolean$((function (){var and__5140__auto__ = cljs.core.not(target_block);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(pdf_area_QMARK_);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())),(function (insert_to_current_block_page_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(target_block)?target_block:(cljs.core.truth_(insert_to_current_block_page_QMARK_)?edit_block:(cljs.core.truth_(save_to_page)?save_to_page:asset_page
)))),(function (target){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(target)?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid target",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"files","files",-472457450),files,new cljs.core.Keyword(null,"asset-page","asset-page",-149154249),asset_page,new cljs.core.Keyword(null,"edit-block","edit-block",1334417168),edit_block], null))})())),(function (___27434__auto__){
return promesa.protocols._promise(((cljs.core.seq(blocks))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.insert_blocks_BANG_(blocks,target,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),true,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),cljs.core.boolean$((function (){var and__5140__auto__ = edit_block;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_block,target);
} else {
return and__5140__auto__;
}
})()),new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),insert_to_current_block_page_QMARK_], null));
} else {
var _STAR_outliner_ops_STAR__orig_val__66902 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__66903 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__66903);

try{frontend.modules.outliner.op.insert_blocks_BANG_(blocks,target,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),true,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),cljs.core.boolean$((function (){var and__5140__auto__ = edit_block;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_block,target);
} else {
return and__5140__auto__;
}
})()),new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),insert_to_current_block_page_QMARK_], null));

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__66902);
}}
})()),(function (___27434__auto____$1){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.unwrap_block_results(results)),(function (blocks__$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = cljs.core.some((function (block){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block))){
return block;
} else {
return null;
}
}),blocks__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword(null,"max","max",61366548)) : frontend.handler.editor.edit_block_BANG_.call(null,block,new cljs.core.Keyword(null,"max","max",61366548)));
} else {
return null;
}
})()),(function (___27434__auto____$2){
return promesa.protocols._promise(blocks__$1);
}));
}));
}));
})));
}));
})):null));
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

(frontend.handler.editor.assets.db_based_save_assets_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.editor.assets.db_based_save_assets_BANG_.cljs$lang$applyTo = (function (seq66878){
var G__66879 = cljs.core.first(seq66878);
var seq66878__$1 = cljs.core.next(seq66878);
var G__66880 = cljs.core.first(seq66878__$1);
var seq66878__$2 = cljs.core.next(seq66878__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66879,G__66880,seq66878__$2);
}));

/**
 * Paste asset for db graph and insert link to current editing block
 */
frontend.handler.editor.assets.db_upload_assets_BANG_ = (function frontend$handler$editor$assets$db_upload_assets_BANG_(repo,id,files,format,uploading_QMARK_,drop_or_paste_QMARK_){
var G__66933_66977 = id;
var G__66934_66978 = "";
var G__66935_66979 = format;
var G__66936_66980 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),(cljs.core.truth_(drop_or_paste_QMARK_)?"":frontend.commands.command_trigger),new cljs.core.Keyword(null,"restore?","restore?",1172240305),true,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"insert-asset","insert-asset",1232083817)], null);
(frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__66933_66977,G__66934_66978,G__66935_66979,G__66936_66980) : frontend.handler.editor.insert_command_BANG_.call(null,G__66933_66977,G__66934_66978,G__66935_66979,G__66936_66980));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.assets.db_based_save_assets_BANG_(repo,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(files)),(function (e){
return console.error(e);
})),(function (){
cljs.core.reset_BANG_(uploading_QMARK_,false);

cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_QMARK_,false);

return cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_process,(0));
}));
});
/**
 * Paste asset and insert link to current editing block
 */
frontend.handler.editor.assets.upload_asset_BANG_ = (function frontend$handler$editor$assets$upload_asset_BANG_(id,files,format,uploading_QMARK_,drop_or_paste_QMARK_){
var repo = frontend.state.get_current_repo();
return frontend.handler.editor.assets.db_upload_assets_BANG_(repo,id,files,format,uploading_QMARK_,drop_or_paste_QMARK_);
});

//# sourceMappingURL=frontend.handler.editor.assets.js.map
