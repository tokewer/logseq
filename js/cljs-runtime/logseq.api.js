goog.provide('logseq.api');
logseq.api.get_caller_plugin_id = logseq.api.plugin.get_caller_plugin_id;
goog.exportSymbol('logseq.api.get_caller_plugin_id', logseq.api.get_caller_plugin_id);
logseq.api.install_plugin_hook = logseq.api.plugin.install_plugin_hook;
goog.exportSymbol('logseq.api.install_plugin_hook', logseq.api.install_plugin_hook);
logseq.api.uninstall_plugin_hook = logseq.api.plugin.uninstall_plugin_hook;
goog.exportSymbol('logseq.api.uninstall_plugin_hook', logseq.api.uninstall_plugin_hook);
logseq.api.should_exec_plugin_hook = logseq.api.plugin.should_exec_plugin_hook;
goog.exportSymbol('logseq.api.should_exec_plugin_hook', logseq.api.should_exec_plugin_hook);
logseq.api.load_plugin_config = logseq.api.plugin.load_plugin_config;
goog.exportSymbol('logseq.api.load_plugin_config', logseq.api.load_plugin_config);
logseq.api.load_plugin_readme = logseq.api.plugin.load_plugin_readme;
goog.exportSymbol('logseq.api.load_plugin_readme', logseq.api.load_plugin_readme);
logseq.api.save_plugin_package_json = logseq.api.plugin.save_plugin_package_json;
goog.exportSymbol('logseq.api.save_plugin_package_json', logseq.api.save_plugin_package_json);
logseq.api.write_dotdir_file = logseq.api.plugin.write_dotdir_file;
goog.exportSymbol('logseq.api.write_dotdir_file', logseq.api.write_dotdir_file);
logseq.api.write_assetsdir_file = logseq.api.plugin.write_assetsdir_file;
goog.exportSymbol('logseq.api.write_assetsdir_file', logseq.api.write_assetsdir_file);
logseq.api.write_user_tmp_file = logseq.api.plugin.write_user_tmp_file;
goog.exportSymbol('logseq.api.write_user_tmp_file', logseq.api.write_user_tmp_file);
logseq.api.write_plugin_storage_file = logseq.api.plugin.write_plugin_storage_file;
goog.exportSymbol('logseq.api.write_plugin_storage_file', logseq.api.write_plugin_storage_file);
logseq.api.read_plugin_storage_file = logseq.api.plugin.read_plugin_storage_file;
goog.exportSymbol('logseq.api.read_plugin_storage_file', logseq.api.read_plugin_storage_file);
logseq.api.unlink_plugin_storage_file = logseq.api.plugin.unlink_plugin_storage_file;
goog.exportSymbol('logseq.api.unlink_plugin_storage_file', logseq.api.unlink_plugin_storage_file);
logseq.api.exist_plugin_storage_file = logseq.api.plugin.exist_plugin_storage_file;
goog.exportSymbol('logseq.api.exist_plugin_storage_file', logseq.api.exist_plugin_storage_file);
logseq.api.clear_plugin_storage_files = logseq.api.plugin.clear_plugin_storage_files;
goog.exportSymbol('logseq.api.clear_plugin_storage_files', logseq.api.clear_plugin_storage_files);
logseq.api.list_plugin_storage_files = logseq.api.plugin.list_plugin_storage_files;
goog.exportSymbol('logseq.api.list_plugin_storage_files', logseq.api.list_plugin_storage_files);
logseq.api.load_user_preferences = logseq.api.plugin.load_user_preferences;
goog.exportSymbol('logseq.api.load_user_preferences', logseq.api.load_user_preferences);
logseq.api.save_user_preferences = logseq.api.plugin.save_user_preferences;
goog.exportSymbol('logseq.api.save_user_preferences', logseq.api.save_user_preferences);
logseq.api.load_plugin_user_settings = logseq.api.plugin.load_plugin_user_settings;
goog.exportSymbol('logseq.api.load_plugin_user_settings', logseq.api.load_plugin_user_settings);
logseq.api.save_plugin_user_settings = logseq.api.plugin.save_plugin_user_settings;
goog.exportSymbol('logseq.api.save_plugin_user_settings', logseq.api.save_plugin_user_settings);
logseq.api.load_installed_web_plugins = logseq.api.plugin.load_installed_web_plugins;
goog.exportSymbol('logseq.api.load_installed_web_plugins', logseq.api.load_installed_web_plugins);
logseq.api.save_installed_web_plugin = logseq.api.plugin.save_installed_web_plugin;
goog.exportSymbol('logseq.api.save_installed_web_plugin', logseq.api.save_installed_web_plugin);
logseq.api.unlink_installed_web_plugin = logseq.api.plugin.unlink_installed_web_plugin;
goog.exportSymbol('logseq.api.unlink_installed_web_plugin', logseq.api.unlink_installed_web_plugin);
logseq.api.unlink_plugin_user_settings = logseq.api.plugin.unlink_plugin_user_settings;
goog.exportSymbol('logseq.api.unlink_plugin_user_settings', logseq.api.unlink_plugin_user_settings);
logseq.api.register_plugin_slash_command = logseq.api.plugin.register_plugin_slash_command;
goog.exportSymbol('logseq.api.register_plugin_slash_command', logseq.api.register_plugin_slash_command);
logseq.api.unregister_plugin_slash_command = logseq.api.plugin.unregister_plugin_slash_command;
goog.exportSymbol('logseq.api.unregister_plugin_slash_command', logseq.api.unregister_plugin_slash_command);
logseq.api.register_plugin_simple_command = logseq.api.plugin.register_plugin_simple_command;
goog.exportSymbol('logseq.api.register_plugin_simple_command', logseq.api.register_plugin_simple_command);
logseq.api.unregister_plugin_simple_command = logseq.api.plugin.unregister_plugin_simple_command;
goog.exportSymbol('logseq.api.unregister_plugin_simple_command', logseq.api.unregister_plugin_simple_command);
logseq.api.register_search_service = logseq.api.plugin.register_search_service;
goog.exportSymbol('logseq.api.register_search_service', logseq.api.register_search_service);
logseq.api.unregister_search_services = logseq.api.plugin.unregister_search_services;
goog.exportSymbol('logseq.api.unregister_search_services', logseq.api.unregister_search_services);
logseq.api.register_plugin_ui_item = logseq.api.plugin.register_plugin_ui_item;
goog.exportSymbol('logseq.api.register_plugin_ui_item', logseq.api.register_plugin_ui_item);
logseq.api.get_external_plugin = logseq.api.plugin.get_external_plugin;
goog.exportSymbol('logseq.api.get_external_plugin', logseq.api.get_external_plugin);
logseq.api.invoke_external_plugin_cmd = logseq.api.plugin.invoke_external_plugin_cmd;
goog.exportSymbol('logseq.api.invoke_external_plugin_cmd', logseq.api.invoke_external_plugin_cmd);
logseq.api.validate_external_plugins = logseq.api.plugin.validate_external_plugins;
goog.exportSymbol('logseq.api.validate_external_plugins', logseq.api.validate_external_plugins);
logseq.api.__install_plugin = logseq.api.plugin.__install_plugin;
goog.exportSymbol('logseq.api.__install_plugin', logseq.api.__install_plugin);
logseq.api.check_current_is_db_graph = frontend.config.db_based_graph_QMARK_;
goog.exportSymbol('logseq.api.check_current_is_db_graph', logseq.api.check_current_is_db_graph);
logseq.api.get_state_from_store = logseq.api.app.get_state_from_store;
goog.exportSymbol('logseq.api.get_state_from_store', logseq.api.get_state_from_store);
logseq.api.set_state_from_store = logseq.api.app.set_state_from_store;
goog.exportSymbol('logseq.api.set_state_from_store', logseq.api.set_state_from_store);
logseq.api.get_app_info = logseq.api.app.get_app_info;
goog.exportSymbol('logseq.api.get_app_info', logseq.api.get_app_info);
logseq.api.get_user_configs = logseq.api.app.get_user_configs;
goog.exportSymbol('logseq.api.get_user_configs', logseq.api.get_user_configs);
logseq.api.get_current_graph_configs = logseq.api.app.get_current_graph_configs;
goog.exportSymbol('logseq.api.get_current_graph_configs', logseq.api.get_current_graph_configs);
logseq.api.set_current_graph_configs = logseq.api.app.set_current_graph_configs;
goog.exportSymbol('logseq.api.set_current_graph_configs', logseq.api.set_current_graph_configs);
logseq.api.get_current_graph_favorites = logseq.api.app.get_current_graph_favorites;
goog.exportSymbol('logseq.api.get_current_graph_favorites', logseq.api.get_current_graph_favorites);
logseq.api.get_current_graph_recent = logseq.api.app.get_current_graph_recent;
goog.exportSymbol('logseq.api.get_current_graph_recent', logseq.api.get_current_graph_recent);
logseq.api.get_current_graph = logseq.api.app.get_current_graph;
goog.exportSymbol('logseq.api.get_current_graph', logseq.api.get_current_graph);
logseq.api.show_themes = logseq.api.app.show_themes;
goog.exportSymbol('logseq.api.show_themes', logseq.api.show_themes);
logseq.api.set_theme_mode = logseq.api.app.set_theme_mode;
goog.exportSymbol('logseq.api.set_theme_mode', logseq.api.set_theme_mode);
logseq.api.relaunch = logseq.api.app.relaunch;
goog.exportSymbol('logseq.api.relaunch', logseq.api.relaunch);
logseq.api.quit = logseq.api.app.quit;
goog.exportSymbol('logseq.api.quit', logseq.api.quit);
logseq.api.open_external_link = logseq.api.app.open_external_link;
goog.exportSymbol('logseq.api.open_external_link', logseq.api.open_external_link);
logseq.api.invoke_external_command = logseq.api.app.invoke_external_command;
goog.exportSymbol('logseq.api.invoke_external_command', logseq.api.invoke_external_command);
logseq.api.set_left_sidebar_visible = logseq.api.app.set_left_sidebar_visible;
goog.exportSymbol('logseq.api.set_left_sidebar_visible', logseq.api.set_left_sidebar_visible);
logseq.api.set_right_sidebar_visible = logseq.api.app.set_right_sidebar_visible;
goog.exportSymbol('logseq.api.set_right_sidebar_visible', logseq.api.set_right_sidebar_visible);
logseq.api.clear_right_sidebar_blocks = logseq.api.app.clear_right_sidebar_blocks;
goog.exportSymbol('logseq.api.clear_right_sidebar_blocks', logseq.api.clear_right_sidebar_blocks);
logseq.api.push_state = logseq.api.app.push_state;
goog.exportSymbol('logseq.api.push_state', logseq.api.push_state);
logseq.api.replace_state = logseq.api.app.replace_state;
goog.exportSymbol('logseq.api.replace_state', logseq.api.replace_state);
logseq.api.get_current_route = logseq.api.app.get_current_route;
goog.exportSymbol('logseq.api.get_current_route', logseq.api.get_current_route);
logseq.api.q = logseq.api.db.q;
goog.exportSymbol('logseq.api.q', logseq.api.q);
logseq.api.datascript_query = logseq.api.db.datascript_query;
goog.exportSymbol('logseq.api.datascript_query', logseq.api.datascript_query);
logseq.api.custom_query = logseq.api.db.custom_query;
goog.exportSymbol('logseq.api.custom_query', logseq.api.custom_query);
logseq.api.set_file_content = logseq.api.db.set_file_content;
goog.exportSymbol('logseq.api.set_file_content', logseq.api.set_file_content);
logseq.api.get_file_content = logseq.api.db.get_file_content;
goog.exportSymbol('logseq.api.get_file_content', logseq.api.get_file_content);
logseq.api.prepend_block_in_page = logseq.api.editor.prepend_block_in_page;
goog.exportSymbol('logseq.api.prepend_block_in_page', logseq.api.prepend_block_in_page);
logseq.api.append_block_in_page = logseq.api.editor.append_block_in_page;
goog.exportSymbol('logseq.api.append_block_in_page', logseq.api.append_block_in_page);
logseq.api.check_editing = logseq.api.editor.check_editing;
goog.exportSymbol('logseq.api.check_editing', logseq.api.check_editing);
logseq.api.clear_selected_blocks = logseq.api.editor.clear_selected_blocks;
goog.exportSymbol('logseq.api.clear_selected_blocks', logseq.api.clear_selected_blocks);
logseq.api.create_journal_page = logseq.api.editor.create_journal_page;
goog.exportSymbol('logseq.api.create_journal_page', logseq.api.create_journal_page);
logseq.api.create_page = logseq.api.editor.create_page;
goog.exportSymbol('logseq.api.create_page', logseq.api.create_page);
logseq.api.delete_page = logseq.api.editor.delete_page;
goog.exportSymbol('logseq.api.delete_page', logseq.api.delete_page);
logseq.api.delete_recycled_page_permanently = logseq.api.editor.delete_recycled_page_permanently;
goog.exportSymbol('logseq.api.delete_recycled_page_permanently', logseq.api.delete_recycled_page_permanently);
logseq.api.download_graph_db = logseq.api.editor.download_graph_db;
goog.exportSymbol('logseq.api.download_graph_db', logseq.api.download_graph_db);
logseq.api.download_graph_pages = logseq.api.editor.download_graph_pages;
goog.exportSymbol('logseq.api.download_graph_pages', logseq.api.download_graph_pages);
logseq.api.edit_block = logseq.api.editor.edit_block;
goog.exportSymbol('logseq.api.edit_block', logseq.api.edit_block);
logseq.api.exit_editing_mode = logseq.api.editor.exit_editing_mode;
goog.exportSymbol('logseq.api.exit_editing_mode', logseq.api.exit_editing_mode);
logseq.api.get_all_pages = logseq.api.editor.get_all_pages;
goog.exportSymbol('logseq.api.get_all_pages', logseq.api.get_all_pages);
logseq.api.get_block = logseq.api.editor.get_block;
goog.exportSymbol('logseq.api.get_block', logseq.api.get_block);
logseq.api.get_block_properties = logseq.api.editor.get_block_properties;
goog.exportSymbol('logseq.api.get_block_properties', logseq.api.get_block_properties);
logseq.api.get_block_property = logseq.api.editor.get_block_property;
goog.exportSymbol('logseq.api.get_block_property', logseq.api.get_block_property);
logseq.api.get_current_block = logseq.api.editor.get_current_block;
goog.exportSymbol('logseq.api.get_current_block', logseq.api.get_current_block);
logseq.api.get_current_page = logseq.api.editor.get_current_page;
goog.exportSymbol('logseq.api.get_current_page', logseq.api.get_current_page);
logseq.api.get_current_page_blocks_tree = logseq.api.editor.get_current_page_blocks_tree;
goog.exportSymbol('logseq.api.get_current_page_blocks_tree', logseq.api.get_current_page_blocks_tree);
logseq.api.get_editing_block_content = logseq.api.editor.get_editing_block_content;
goog.exportSymbol('logseq.api.get_editing_block_content', logseq.api.get_editing_block_content);
logseq.api.get_editing_cursor_position = logseq.api.editor.get_editing_cursor_position;
goog.exportSymbol('logseq.api.get_editing_cursor_position', logseq.api.get_editing_cursor_position);
logseq.api.get_next_sibling_block = logseq.api.editor.get_next_sibling_block;
goog.exportSymbol('logseq.api.get_next_sibling_block', logseq.api.get_next_sibling_block);
logseq.api.get_page = logseq.api.editor.get_page;
goog.exportSymbol('logseq.api.get_page', logseq.api.get_page);
logseq.api.get_today_page = logseq.api.editor.get_today_page;
goog.exportSymbol('logseq.api.get_today_page', logseq.api.get_today_page);
logseq.api.get_page_blocks_tree = logseq.api.editor.get_page_blocks_tree;
goog.exportSymbol('logseq.api.get_page_blocks_tree', logseq.api.get_page_blocks_tree);
logseq.api.get_page_linked_references = logseq.api.editor.get_page_linked_references;
goog.exportSymbol('logseq.api.get_page_linked_references', logseq.api.get_page_linked_references);
logseq.api.get_page_properties = logseq.api.editor.get_page_properties;
goog.exportSymbol('logseq.api.get_page_properties', logseq.api.get_page_properties);
logseq.api.get_previous_sibling_block = logseq.api.editor.get_previous_sibling_block;
goog.exportSymbol('logseq.api.get_previous_sibling_block', logseq.api.get_previous_sibling_block);
logseq.api.get_selected_blocks = logseq.api.editor.get_selected_blocks;
goog.exportSymbol('logseq.api.get_selected_blocks', logseq.api.get_selected_blocks);
logseq.api.insert_at_editing_cursor = logseq.api.editor.insert_at_editing_cursor;
goog.exportSymbol('logseq.api.insert_at_editing_cursor', logseq.api.insert_at_editing_cursor);
logseq.api.insert_batch_block = logseq.api.editor.insert_batch_block;
goog.exportSymbol('logseq.api.insert_batch_block', logseq.api.insert_batch_block);
logseq.api.insert_block = logseq.api.editor.insert_block;
goog.exportSymbol('logseq.api.insert_block', logseq.api.insert_block);
logseq.api.move_block = logseq.api.editor.move_block;
goog.exportSymbol('logseq.api.move_block', logseq.api.move_block);
logseq.api.new_block_uuid = logseq.api.editor.new_block_uuid;
goog.exportSymbol('logseq.api.new_block_uuid', logseq.api.new_block_uuid);
logseq.api.open_in_right_sidebar = logseq.api.editor.open_in_right_sidebar;
goog.exportSymbol('logseq.api.open_in_right_sidebar', logseq.api.open_in_right_sidebar);
logseq.api.remove_block = logseq.api.editor.remove_block;
goog.exportSymbol('logseq.api.remove_block', logseq.api.remove_block);
logseq.api.remove_block_property = logseq.api.editor.remove_block_property;
goog.exportSymbol('logseq.api.remove_block_property', logseq.api.remove_block_property);
logseq.api.rename_page = logseq.api.editor.rename_page;
goog.exportSymbol('logseq.api.rename_page', logseq.api.rename_page);
logseq.api.restore_page = logseq.api.editor.restore_page;
goog.exportSymbol('logseq.api.restore_page', logseq.api.restore_page);
logseq.api.restore_editing_cursor = logseq.api.editor.restore_editing_cursor;
goog.exportSymbol('logseq.api.restore_editing_cursor', logseq.api.restore_editing_cursor);
logseq.api.save_focused_code_editor_content = logseq.api.editor.save_focused_code_editor_content;
goog.exportSymbol('logseq.api.save_focused_code_editor_content', logseq.api.save_focused_code_editor_content);
logseq.api.select_block = logseq.api.editor.select_block;
goog.exportSymbol('logseq.api.select_block', logseq.api.select_block);
logseq.api.set_block_collapsed = logseq.api.editor.set_block_collapsed;
goog.exportSymbol('logseq.api.set_block_collapsed', logseq.api.set_block_collapsed);
logseq.api.update_block = logseq.api.editor.update_block;
goog.exportSymbol('logseq.api.update_block', logseq.api.update_block);
logseq.api.upsert_block_property = logseq.api.editor.upsert_block_property;
goog.exportSymbol('logseq.api.upsert_block_property', logseq.api.upsert_block_property);
logseq.api.open_pdf_viewer = logseq.api.editor.open_pdf_viewer;
goog.exportSymbol('logseq.api.open_pdf_viewer', logseq.api.open_pdf_viewer);
logseq.api.show_msg = logseq.sdk.ui._show_msg;
goog.exportSymbol('logseq.api.show_msg', logseq.api.show_msg);
logseq.api.query_element_rect = logseq.sdk.ui.query_element_rect;
goog.exportSymbol('logseq.api.query_element_rect', logseq.api.query_element_rect);
logseq.api.query_element_by_id = logseq.sdk.ui.query_element_by_id;
goog.exportSymbol('logseq.api.query_element_by_id', logseq.api.query_element_by_id);
logseq.api.make_asset_url = logseq.sdk.assets.make_url;
goog.exportSymbol('logseq.api.make_asset_url', logseq.api.make_asset_url);
logseq.api.exper_register_fenced_code_renderer = logseq.sdk.experiments.register_fenced_code_renderer;
goog.exportSymbol('logseq.api.exper_register_fenced_code_renderer', logseq.api.exper_register_fenced_code_renderer);
logseq.api.exper_load_scripts = (function logseq$api$exper_load_scripts(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50181 = arguments.length;
var i__5877__auto___50182 = (0);
while(true){
if((i__5877__auto___50182 < len__5876__auto___50181)){
args__5882__auto__.push((arguments[i__5877__auto___50182]));

var G__50183 = (i__5877__auto___50182 + (1));
i__5877__auto___50182 = G__50183;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.api.exper_load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});
goog.exportSymbol('logseq.api.exper_load_scripts', logseq.api.exper_load_scripts);

(logseq.api.exper_load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (pid,scripts){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var _pl = temp__5825__auto__;
var G__50160 = (function (){var iter__5628__auto__ = (function logseq$api$iter__50161(s__50162){
return (new cljs.core.LazySeq(null,(function (){
var s__50162__$1 = s__50162;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50162__$1);
if(temp__5825__auto____$1){
var s__50162__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50162__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50162__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50164 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50163 = (0);
while(true){
if((i__50163 < size__5627__auto__)){
var s = cljs.core._nth(c__5626__auto__,i__50163);
var upt_status = ((function (i__50163,s,c__5626__auto__,size__5627__auto__,b__50164,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__){
return (function (p1__50157_SHARP_){
return frontend.state.upt_plugin_resource(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),s,new cljs.core.Keyword(null,"status","status",-1997798413),p1__50157_SHARP_);
});})(i__50163,s,c__5626__auto__,size__5627__auto__,b__50164,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__))
;
var init_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(frontend.state.get_plugin_resource(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),s)));
cljs.core.chunk_append(b__50164,((init_QMARK_)?(function (){
frontend.handler.plugin.register_plugin_resources(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"src","src",-1651076051),s], null));

upt_status(new cljs.core.Keyword(null,"pending","pending",-220036727));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.loader.load.cljs$core$IFn$_invoke$arity$3(s,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),cljs.core.name(pid)], null)], null)),((function (i__50163,upt_status,init_QMARK_,s,c__5626__auto__,size__5627__auto__,b__50164,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__){
return (function (){
return upt_status(new cljs.core.Keyword(null,"done","done",-889844188));
});})(i__50163,upt_status,init_QMARK_,s,c__5626__auto__,size__5627__auto__,b__50164,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__))
),((function (i__50163,upt_status,init_QMARK_,s,c__5626__auto__,size__5627__auto__,b__50164,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__){
return (function (){
return upt_status(new cljs.core.Keyword(null,"error","error",-978969032));
});})(i__50163,upt_status,init_QMARK_,s,c__5626__auto__,size__5627__auto__,b__50164,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__))
);
})()
:null));

var G__50190 = (i__50163 + (1));
i__50163 = G__50190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50164),logseq$api$iter__50161(cljs.core.chunk_rest(s__50162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50164),null);
}
} else {
var s = cljs.core.first(s__50162__$2);
var upt_status = ((function (s,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__){
return (function (p1__50157_SHARP_){
return frontend.state.upt_plugin_resource(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),s,new cljs.core.Keyword(null,"status","status",-1997798413),p1__50157_SHARP_);
});})(s,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__))
;
var init_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(frontend.state.get_plugin_resource(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),s)));
return cljs.core.cons(((init_QMARK_)?(function (){
frontend.handler.plugin.register_plugin_resources(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"src","src",-1651076051),s], null));

upt_status(new cljs.core.Keyword(null,"pending","pending",-220036727));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.loader.load.cljs$core$IFn$_invoke$arity$3(s,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),cljs.core.name(pid)], null)], null)),((function (upt_status,init_QMARK_,s,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__){
return (function (){
return upt_status(new cljs.core.Keyword(null,"done","done",-889844188));
});})(upt_status,init_QMARK_,s,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__))
),((function (upt_status,init_QMARK_,s,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__){
return (function (){
return upt_status(new cljs.core.Keyword(null,"error","error",-978969032));
});})(upt_status,init_QMARK_,s,s__50162__$2,temp__5825__auto____$1,_pl,temp__5825__auto__))
);
})()
:null),logseq$api$iter__50161(cljs.core.rest(s__50162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(scripts);
})();
var G__50160__$1 = (((G__50160 == null))?null:cljs.core.vec(G__50160));
if((G__50160__$1 == null)){
return null;
} else {
return promesa.core.all(G__50160__$1);
}
} else {
return null;
}
}));

(logseq.api.exper_load_scripts.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.api.exper_load_scripts.cljs$lang$applyTo = (function (seq50158){
var G__50159 = cljs.core.first(seq50158);
var seq50158__$1 = cljs.core.next(seq50158);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50159,seq50158__$1);
}));

if((typeof logseq !== 'undefined') && (typeof logseq.api !== 'undefined') && (typeof logseq.api._STAR_request_k !== 'undefined')){
} else {
logseq.api._STAR_request_k = cljs.core.volatile_BANG_((0));
}
logseq.api.exper_request = (function logseq$api$exper_request(pid,options){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pl = temp__5825__auto__;
var req_id = cljs.core.vreset_BANG_(logseq.api._STAR_request_k,(cljs.core.deref(logseq.api._STAR_request_k) + (1)));
var req_cb = (function (p1__50165_SHARP_){
return frontend.handler.plugin.request_callback(pl,req_id,p1__50165_SHARP_);
});
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"httpRequest","httpRequest",-179408648),req_id,options], 0)),(function (p1__50166_SHARP_){
return req_cb(p1__50166_SHARP_);
})),(function (p1__50167_SHARP_){
return req_cb(p1__50167_SHARP_);
}));

return req_id;
} else {
return null;
}
});
goog.exportSymbol('logseq.api.exper_request', logseq.api.exper_request);
logseq.api.http_request_abort = (function logseq$api$http_request_abort(req_id){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"httpRequestAbort","httpRequestAbort",777669509),req_id], 0));
});
goog.exportSymbol('logseq.api.http_request_abort', logseq.api.http_request_abort);
logseq.api.search = (function logseq$api$search(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50191 = arguments.length;
var i__5877__auto___50192 = (0);
while(true){
if((i__5877__auto___50192 < len__5876__auto___50191)){
args__5882__auto__.push((arguments[i__5877__auto___50192]));

var G__50193 = (i__5877__auto___50192 + (1));
i__5877__auto___50192 = G__50193;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.api.search.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});
goog.exportSymbol('logseq.api.search', logseq.api.search);

(logseq.api.search.cljs$core$IFn$_invoke$arity$variadic = (function (q_SINGLEQUOTE_,p__50171){
var vec__50172 = p__50171;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50172,(0),null);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),q_SINGLEQUOTE_,(cljs.core.truth_(opts)?cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)):cljs.core.PersistentArrayMap.EMPTY)),(function (p1__50168_SHARP_){
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(p1__50168_SHARP_));
}));
}));

(logseq.api.search.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.api.search.cljs$lang$applyTo = (function (seq50169){
var G__50170 = cljs.core.first(seq50169);
var seq50169__$1 = cljs.core.next(seq50169);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50170,seq50169__$1);
}));

logseq.api.set_focused_settings = (function logseq$api$set_focused_settings(pid){
var temp__5825__auto__ = frontend.state.get_plugin_by_id(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var plugin = temp__5825__auto__;
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),pid);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),pid,false,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plugin);
}
})()], null));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.set_focused_settings', logseq.api.set_focused_settings);
logseq.api.force_save_graph = (function logseq$api$force_save_graph(){
return true;
});
goog.exportSymbol('logseq.api.force_save_graph', logseq.api.force_save_graph);
logseq.api.get_property = logseq.api.db_based.get_property;
goog.exportSymbol('logseq.api.get_property', logseq.api.get_property);
logseq.api.upsert_property = logseq.api.db_based.upsert_property;
goog.exportSymbol('logseq.api.upsert_property', logseq.api.upsert_property);
logseq.api.remove_property = logseq.api.db_based.remove_property;
goog.exportSymbol('logseq.api.remove_property', logseq.api.remove_property);
logseq.api.get_all_tags = logseq.api.db_based.get_all_tags;
goog.exportSymbol('logseq.api.get_all_tags', logseq.api.get_all_tags);
logseq.api.get_all_properties = logseq.api.db_based.get_all_properties;
goog.exportSymbol('logseq.api.get_all_properties', logseq.api.get_all_properties);
logseq.api.get_tag_objects = logseq.api.db_based.get_tag_objects;
goog.exportSymbol('logseq.api.get_tag_objects', logseq.api.get_tag_objects);
logseq.api.create_tag = logseq.api.db_based.create_tag;
goog.exportSymbol('logseq.api.create_tag', logseq.api.create_tag);
logseq.api.get_tag = logseq.api.db_based.get_tag;
goog.exportSymbol('logseq.api.get_tag', logseq.api.get_tag);
logseq.api.get_tags_by_name = logseq.api.db_based.get_tags_by_name;
goog.exportSymbol('logseq.api.get_tags_by_name', logseq.api.get_tags_by_name);
logseq.api.add_tag_extends = logseq.api.db_based.add_tag_extends;
goog.exportSymbol('logseq.api.add_tag_extends', logseq.api.add_tag_extends);
logseq.api.remove_tag_extends = logseq.api.db_based.remove_tag_extends;
goog.exportSymbol('logseq.api.remove_tag_extends', logseq.api.remove_tag_extends);
logseq.api.add_block_tag = logseq.api.db_based.add_block_tag;
goog.exportSymbol('logseq.api.add_block_tag', logseq.api.add_block_tag);
logseq.api.remove_block_tag = logseq.api.db_based.remove_block_tag;
goog.exportSymbol('logseq.api.remove_block_tag', logseq.api.remove_block_tag);
logseq.api.add_tag_property = logseq.api.db_based.tag_add_property;
goog.exportSymbol('logseq.api.add_tag_property', logseq.api.add_tag_property);
logseq.api.remove_tag_property = logseq.api.db_based.tag_remove_property;
goog.exportSymbol('logseq.api.remove_tag_property', logseq.api.remove_tag_property);
logseq.api.set_block_icon = logseq.api.db_based.set_block_icon;
goog.exportSymbol('logseq.api.set_block_icon', logseq.api.set_block_icon);
logseq.api.remove_block_icon = logseq.api.db_based.remove_block_icon;
goog.exportSymbol('logseq.api.remove_block_icon', logseq.api.remove_block_icon);
logseq.api.add_property_value_choices = logseq.api.db_based.add_property_value_choices;
goog.exportSymbol('logseq.api.add_property_value_choices', logseq.api.add_property_value_choices);
logseq.api.set_property_node_tags = logseq.api.db_based.set_property_node_tags;
goog.exportSymbol('logseq.api.set_property_node_tags', logseq.api.set_property_node_tags);
logseq.api.ensure_db_graph = (function logseq$api$ensure_db_graph(f){
return (function() { 
var logseq$api$ensure_db_graph_$_ensure_db_graph_wrapper__delegate = function (args){
if(cljs.core.truth_(logseq.db.sqlite.util.db_based_graph_QMARK_(frontend.state.get_current_repo()))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This endpoint must be called on a DB graph",cljs.core.PersistentArrayMap.EMPTY);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
};
var logseq$api$ensure_db_graph_$_ensure_db_graph_wrapper = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50198__i = 0, G__50198__a = new Array(arguments.length -  0);
while (G__50198__i < G__50198__a.length) {G__50198__a[G__50198__i] = arguments[G__50198__i + 0]; ++G__50198__i;}
  args = new cljs.core.IndexedSeq(G__50198__a,0,null);
} 
return logseq$api$ensure_db_graph_$_ensure_db_graph_wrapper__delegate.call(this,args);};
logseq$api$ensure_db_graph_$_ensure_db_graph_wrapper.cljs$lang$maxFixedArity = 0;
logseq$api$ensure_db_graph_$_ensure_db_graph_wrapper.cljs$lang$applyTo = (function (arglist__50199){
var args = cljs.core.seq(arglist__50199);
return logseq$api$ensure_db_graph_$_ensure_db_graph_wrapper__delegate(args);
});
logseq$api$ensure_db_graph_$_ensure_db_graph_wrapper.cljs$core$IFn$_invoke$arity$variadic = logseq$api$ensure_db_graph_$_ensure_db_graph_wrapper__delegate;
return logseq$api$ensure_db_graph_$_ensure_db_graph_wrapper;
})()
;
});
logseq.api.list_tags = logseq.api.db_based.cli.list_tags;
goog.exportSymbol('logseq.api.list_tags', logseq.api.list_tags);
logseq.api.list_properties = logseq.api.db_based.cli.list_properties;
goog.exportSymbol('logseq.api.list_properties', logseq.api.list_properties);
logseq.api.list_pages = logseq.api.db_based.cli.list_pages;
goog.exportSymbol('logseq.api.list_pages', logseq.api.list_pages);
logseq.api.get_page_data = logseq.api.db_based.cli.get_page_data;
goog.exportSymbol('logseq.api.get_page_data', logseq.api.get_page_data);
logseq.api.upsert_nodes = logseq.api.db_based.cli.upsert_nodes;
goog.exportSymbol('logseq.api.upsert_nodes', logseq.api.upsert_nodes);
logseq.api.import_edn = logseq.api.ensure_db_graph(logseq.api.db_based.cli.import_edn);
goog.exportSymbol('logseq.api.import_edn', logseq.api.import_edn);
logseq.api.export_edn = logseq.api.ensure_db_graph(logseq.api.db_based.cli.export_edn);
goog.exportSymbol('logseq.api.export_edn', logseq.api.export_edn);

//# sourceMappingURL=logseq.api.js.map
