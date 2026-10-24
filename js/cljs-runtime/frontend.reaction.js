goog.provide('frontend.reaction');
goog.scope(function(){
  frontend.reaction.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$emoji_mart$data$sets$15$native_json=shadow.js.require("module$node_modules$$emoji_mart$data$sets$15$native_json", {});
if((typeof frontend !== 'undefined') && (typeof frontend.reaction !== 'undefined') && (typeof frontend.reaction.emoji_id_set !== 'undefined')){
} else {
frontend.reaction.emoji_id_set = (function (){var emojis = frontend.reaction.goog$module$goog$object.get(module$node_modules$$emoji_mart$data$sets$15$native_json,"emojis");
return cljs.core.set(Object.keys(emojis));
})();
}
frontend.reaction.emoji_id_valid_QMARK_ = (function frontend$reaction$emoji_id_valid_QMARK_(emoji_id){
return ((typeof emoji_id === 'string') && ((((!(clojure.string.blank_QMARK_(emoji_id)))) && (cljs.core.contains_QMARK_(frontend.reaction.emoji_id_set,emoji_id)))));
});
frontend.reaction.summarize = frontend.common.reaction.summarize;

//# sourceMappingURL=frontend.reaction.js.map
