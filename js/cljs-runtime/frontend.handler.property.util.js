goog.provide('frontend.handler.property.util');
/**
 * Get the property value by a built-in property's db-ident from block.
 */
frontend.handler.property.util.lookup = logseq.db.frontend.property.lookup;
/**
 * Get the value of a built-in block's property by its db-ident
 */
frontend.handler.property.util.get_block_property_value = (function frontend$handler$property$util$get_block_property_value(block,db_ident){
return logseq.db.frontend.property.lookup(block,db_ident);
});

//# sourceMappingURL=frontend.handler.property.util.js.map
