goog.provide('logseq.db.frontend.asset');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
logseq.db.frontend.asset.decode_digest = (function logseq$db$frontend$asset$decode_digest(digest){
return Array.from(digest).map((function (s){
return s.toString((16)).padStart((2),"0");
})).join("");
});
/**
 * Given a file's ArrayBuffer or String, returns its checksum in a promise
 */
logseq.db.frontend.asset._LT_get_file_array_buffer_checksum = (function logseq$db$frontend$asset$_LT_get_file_array_buffer_checksum(s){
var array_buffer = ((typeof s === 'string')?(new TextEncoder()).encode(s):s);
return crypto.subtle.digest("SHA-256",array_buffer).then((function (dig){
return (new Uint8Array(dig));
})).then(logseq.db.frontend.asset.decode_digest);
});
/**
 * Create asset type given asset path
 */
logseq.db.frontend.asset.asset_path__GT_type = (function logseq$db$frontend$asset$asset_path__GT_type(path){
return clojure.string.lower_case(module$node_modules$path$path.extname(path).substr((1)));
});
/**
 * Create asset title given asset path's basename
 */
logseq.db.frontend.asset.asset_name__GT_title = (function logseq$db$frontend$asset$asset_name__GT_title(path_basename){
return module$node_modules$path$path.parse(path_basename).name;
});

//# sourceMappingURL=logseq.db.frontend.asset.js.map
