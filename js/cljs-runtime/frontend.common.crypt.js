goog.provide('frontend.common.crypt');
if((typeof frontend !== 'undefined') && (typeof frontend.common !== 'undefined') && (typeof frontend.common.crypt !== 'undefined') && (typeof frontend.common.crypt.subtle !== 'undefined')){
} else {
frontend.common.crypt.subtle = crypto.subtle;
}
frontend.common.crypt.expected_crypto_operation_error_QMARK_ = (function frontend$common$crypt$expected_crypto_operation_error_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("OperationError",(function (){var or__5142__auto__ = (function (){var G__66420 = e;
if((G__66420 == null)){
return null;
} else {
return G__66420.name;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__66421 = e;
var G__66421__$1 = (((G__66421 == null))?null:cljs.core.ex_cause(G__66421));
if((G__66421__$1 == null)){
return null;
} else {
return G__66421__$1.name;
}
}
})());
});
frontend.common.crypt._LT_export_aes_key = (function frontend$common$crypt$_LT_export_aes_key(aes_key){
if((aes_key instanceof CryptoKey)){
} else {
throw (new Error("Assert failed: (instance? js/CryptoKey aes-key)"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.exportKey("raw",aes_key)),(function (exported){
return promesa.protocols._promise((new Uint8Array(exported)));
}));
}));
});
frontend.common.crypt._LT_import_aes_key = (function frontend$common$crypt$_LT_import_aes_key(exported_aes_key){
if((exported_aes_key instanceof Uint8Array)){
} else {
throw (new Error("Assert failed: (instance? js/Uint8Array exported-aes-key)"));
}

return frontend.common.crypt.subtle.importKey("raw",exported_aes_key,"AES-GCM",true,["encrypt","decrypt"]);
});
frontend.common.crypt._LT_export_public_key = (function frontend$common$crypt$_LT_export_public_key(public_key){
if((public_key instanceof CryptoKey)){
} else {
throw (new Error("Assert failed: (instance? js/CryptoKey public-key)"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.exportKey("spki",public_key)),(function (exported){
return promesa.protocols._promise((new Uint8Array(exported)));
}));
}));
});
frontend.common.crypt._LT_import_public_key = (function frontend$common$crypt$_LT_import_public_key(exported_public_key){
if((exported_public_key instanceof Uint8Array)){
} else {
throw (new Error("Assert failed: (instance? js/Uint8Array exported-public-key)"));
}

return frontend.common.crypt.subtle.importKey("spki",exported_public_key,({"name": "RSA-OAEP", "hash": "SHA-256"}),true,["encrypt"]);
});
frontend.common.crypt._LT_export_private_key = (function frontend$common$crypt$_LT_export_private_key(private_key){
if((private_key instanceof CryptoKey)){
} else {
throw (new Error("Assert failed: (instance? js/CryptoKey private-key)"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.exportKey("pkcs8",private_key)),(function (exported){
return promesa.protocols._promise((new Uint8Array(exported)));
}));
}));
});
/**
 * Generates a new RSA public/private key pair.
 *   Return
 *   {:publicKey #object [CryptoKey [object CryptoKey]],
 * :privateKey #object [CryptoKey [object CryptoKey]]}
 */
frontend.common.crypt._LT_generate_rsa_key_pair = (function frontend$common$crypt$_LT_generate_rsa_key_pair(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.generateKey(({"name": "RSA-OAEP", "modulusLength": (4096), "publicExponent": (new Uint8Array(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null))), "hash": "SHA-256"}),true,["encrypt","decrypt"])),(function (r){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"publicKey","publicKey",1004767313),r.publicKey,new cljs.core.Keyword(null,"privateKey","privateKey",1845961641),r.privateKey], null));
}));
}));
});
/**
 * Generates a new AES-GCM-256 key.
 */
frontend.common.crypt._LT_generate_aes_key = (function frontend$common$crypt$_LT_generate_aes_key(){
return frontend.common.crypt.subtle.generateKey(({"name": "AES-GCM", "length": (256)}),true,["encrypt","decrypt"]);
});
/**
 * Encrypts a private key with a password.
 *   Return encrypted-data which is a vector of [version, salt, iv, encrypted-private-key]
 */
frontend.common.crypt._LT_encrypt_private_key = (function frontend$common$crypt$_LT_encrypt_private_key(password,private_key){
if(((typeof password === 'string') && ((private_key instanceof CryptoKey)))){
} else {
throw (new Error("Assert failed: (and (string? password) (instance? js/CryptoKey private-key))"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(crypto.getRandomValues((new Uint8Array((16))))),(function (salt){
return promesa.protocols._mcat(promesa.protocols._promise(crypto.getRandomValues((new Uint8Array((12))))),(function (iv){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.importKey("raw",(new TextEncoder()).encode(password),"PBKDF2",false,["deriveKey"])),(function (password_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.deriveKey(({"name": "PBKDF2", "salt": salt, "iterations": (600000), "hash": "SHA-256"}),password_key,({"name": "AES-GCM", "length": (256)}),true,["encrypt","decrypt"])),(function (derived_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.exportKey("pkcs8",private_key)),(function (exported_private_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.encrypt(({"name": "AES-GCM", "iv": iv}),derived_key,exported_private_key)),(function (encrypted_private_key){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["20251210",salt,iv,(new Uint8Array(encrypted_private_key))], null));
}));
}));
}));
}));
}));
}));
}));
});
/**
 * Decrypts a private key with a password.
 *   encrypted-key-data is vector of
 *   [version, salt, iv, encrypted-private-key-data]
 *   or (old version)
 *   [salt, iv, encrypted-private-key-data]
 */
frontend.common.crypt._LT_decrypt_private_key = (function frontend$common$crypt$_LT_decrypt_private_key(password,encrypted_key_data){
if(((cljs.core.vector_QMARK_(encrypted_key_data)) && (((3) <= cljs.core.count(encrypted_key_data))))){
} else {
throw (new Error("Assert failed: (and (vector? encrypted-key-data) (<= 3 (count encrypted-key-data)))"));
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.count(encrypted_key_data)),(function (len){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(3)))?encrypted_key_data:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),encrypted_key_data))),(function (p__66443){
var vec__66444 = p__66443;
var salt_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66444,(0),null);
var iv_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66444,(1),null);
var encrypted_private_key_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66444,(2),null);
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(4)))?cljs.core.first(encrypted_key_data):null)),(function (version){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.compare(version,"20251210") >= (0))),(function (version_GT__EQ_20251210){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(salt_data))),(function (salt){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(iv_data))),(function (iv){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(encrypted_private_key_data))),(function (encrypted_private_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.importKey("raw",(new TextEncoder()).encode(password),"PBKDF2",false,["deriveKey"])),(function (password_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.deriveKey(({"name": "PBKDF2", "salt": salt, "iterations": (cljs.core.truth_(version_GT__EQ_20251210)?(600000):(100000)), "hash": "SHA-256"}),password_key,({"name": "AES-GCM", "length": (256)}),true,["encrypt","decrypt"])),(function (derived_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.decrypt(({"name": "AES-GCM", "iv": iv}),derived_key,encrypted_private_key)),(function (decrypted_private_key_data){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.importKey("pkcs8",decrypted_private_key_data,({"name": "RSA-OAEP", "hash": "SHA-256"}),true,["decrypt"])),(function (private_key){
return promesa.protocols._promise(private_key);
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
}));
})),(function (e){
var invalid_password_QMARK_ = frontend.common.crypt.expected_crypto_operation_error_QMARK_(e);
if(invalid_password_QMARK_){
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.common.crypt",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, ["decrypt-private-key",e,new cljs.core.Keyword(null,"line","line",212345235),158], null)),null);
} else {
}
}

return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("decrypt-private-key",(function (){var G__66449 = cljs.core.PersistentArrayMap.EMPTY;
if(invalid_password_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66449,new cljs.core.Keyword(null,"invalid-password?","invalid-password?",-863962961),true);
} else {
return G__66449;
}
})(),e);
}));
});
/**
 * Encrypts an AES key with a public key.
 */
frontend.common.crypt._LT_encrypt_aes_key = (function frontend$common$crypt$_LT_encrypt_aes_key(public_key,aes_key){
if((((public_key instanceof CryptoKey)) && ((aes_key instanceof CryptoKey)))){
} else {
throw (new Error("Assert failed: (and (instance? js/CryptoKey public-key) (instance? js/CryptoKey aes-key))"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt._LT_export_aes_key(aes_key)),(function (exported_aes_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.encrypt(({"name": "RSA-OAEP"}),public_key,exported_aes_key)),(function (encrypted_aes_key){
return promesa.protocols._promise((new Uint8Array(encrypted_aes_key)));
}));
}));
}));
});
/**
 * Decrypts an AES key with a private key.
 */
frontend.common.crypt._LT_decrypt_aes_key = (function frontend$common$crypt$_LT_decrypt_aes_key(private_key,encrypted_aes_key_data){
if((((private_key instanceof CryptoKey)) && ((encrypted_aes_key_data instanceof Uint8Array)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [private_key,encrypted_aes_key_data], null))+"\n"+"(and (instance? js/CryptoKey private-key) (instance? js/Uint8Array encrypted-aes-key-data))")));
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(encrypted_aes_key_data))),(function (encrypted_aes_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.decrypt(({"name": "RSA-OAEP"}),private_key,encrypted_aes_key)),(function (decrypted_key_data){
return promesa.protocols._promise(frontend.common.crypt._LT_import_aes_key((new Uint8Array(decrypted_key_data))));
}));
}));
})),(function (e){
if(frontend.common.crypt.expected_crypto_operation_error_QMARK_(e)){
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.common.crypt",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, ["decrypt-aes-key failed",e,new cljs.core.Keyword(null,"line","line",212345235),191], null)),null);
} else {
}
}

return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("decrypt-aes-key",cljs.core.PersistentArrayMap.EMPTY,e);
}));
});
frontend.common.crypt._LT_encrypt_uint8array = (function frontend$common$crypt$_LT_encrypt_uint8array(aes_key,arr){
if((((aes_key instanceof CryptoKey)) && ((arr instanceof Uint8Array)))){
} else {
throw (new Error("Assert failed: (and (instance? js/CryptoKey aes-key) (instance? js/Uint8Array arr))"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(crypto.getRandomValues((new Uint8Array((12))))),(function (iv){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.encrypt(({"name": "AES-GCM", "iv": iv}),aes_key,arr)),(function (encrypted_data){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [iv,(new Uint8Array(encrypted_data))], null));
}));
}));
}));
});
frontend.common.crypt._LT_decrypt_uint8array = (function frontend$common$crypt$_LT_decrypt_uint8array(aes_key,encrypted_data_vector){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(encrypted_data_vector),(function (p__66452){
var vec__66453 = p__66452;
var iv_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66453,(0),null);
var encrypted_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66453,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise((((encrypted_data instanceof Uint8Array))?null:(function(){throw (new Error("Assert failed: (instance? js/Uint8Array encrypted-data)"))})())),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(iv_data))),(function (iv){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.decrypt(({"name": "AES-GCM", "iv": iv}),aes_key,encrypted_data)),(function (decrypted_data){
return promesa.protocols._promise((new Uint8Array(decrypted_data)));
}));
}));
}));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.common.crypt",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, ["decrypt-uint8array",e,new cljs.core.Keyword(null,"line","line",212345235),217], null)),null);
} else {
}

return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("decrypt-uint8array",cljs.core.PersistentArrayMap.EMPTY,e);
}));
});
/**
 * Encrypts text with an AES key.
 */
frontend.common.crypt._LT_encrypt_text = (function frontend$common$crypt$_LT_encrypt_text(aes_key,text){
if(cljs.core.truth_((function (){var and__5140__auto__ = typeof text === 'string';
if(and__5140__auto__){
return logseq.db.read_transit_str(text);
} else {
return and__5140__auto__;
}
})())){
} else {
throw (new Error((""+"Assert failed: "+"text must be transit-encoded"+"\n"+"(and (string? text) (ldb/read-transit-str text))")));
}

if((aes_key instanceof CryptoKey)){
} else {
throw (new Error("Assert failed: (instance? js/CryptoKey aes-key)"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(crypto.getRandomValues((new Uint8Array((12))))),(function (iv){
return promesa.protocols._mcat(promesa.protocols._promise((new TextEncoder()).encode(text)),(function (encoded_text){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.encrypt(({"name": "AES-GCM", "iv": iv}),aes_key,encoded_text)),(function (encrypted_data){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [iv,(new Uint8Array(encrypted_data))], null));
}));
}));
}));
}));
});
/**
 * Decrypts text with an AES key.
 */
frontend.common.crypt._LT_decrypt_text = (function frontend$common$crypt$_LT_decrypt_text(aes_key,encrypted_text_data_vector){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(encrypted_text_data_vector),(function (p__66461){
var vec__66462 = p__66461;
var iv_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66462,(0),null);
var encrypted_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66462,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(iv_data))),(function (iv){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(encrypted_data))),(function (encrypted_data__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.decrypt(({"name": "AES-GCM", "iv": iv}),aes_key,encrypted_data__$1)),(function (decrypted_data){
return promesa.protocols._mcat(promesa.protocols._promise((new TextDecoder()).decode(decrypted_data)),(function (decoded_text){
return promesa.protocols._promise(decoded_text);
}));
}));
}));
}));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.common.crypt",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, ["decrypt-text",e,new cljs.core.Keyword(null,"line","line",212345235),247], null)),null);
} else {
}

return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("decrypt-text",cljs.core.PersistentArrayMap.EMPTY,e);
}));
});
/**
 * return nil if not a encrypted-package
 */
frontend.common.crypt._LT_decrypt_text_if_encrypted = (function frontend$common$crypt$_LT_decrypt_text_if_encrypted(aes_key,maybe_encrypted_package){
if(((cljs.core.vector_QMARK_(maybe_encrypted_package)) && (((2) <= cljs.core.count(maybe_encrypted_package))))){
return frontend.common.crypt._LT_decrypt_text(aes_key,maybe_encrypted_package);
} else {
return null;
}
});
frontend.common.crypt._LT_encrypt_text_by_text_password = (function frontend$common$crypt$_LT_encrypt_text_by_text_password(text_password,text){
if(((typeof text_password === 'string') && (typeof text === 'string'))){
} else {
throw (new Error("Assert failed: (and (string? text-password) (string? text))"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(crypto.getRandomValues((new Uint8Array((16))))),(function (salt){
return promesa.protocols._mcat(promesa.protocols._promise(crypto.getRandomValues((new Uint8Array((12))))),(function (iv){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.importKey("raw",(new TextEncoder()).encode(text_password),"PBKDF2",false,["deriveKey"])),(function (password_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.deriveKey(({"name": "PBKDF2", "salt": salt, "iterations": (600000), "hash": "SHA-256"}),password_key,({"name": "AES-GCM", "length": (256)}),true,["encrypt","decrypt"])),(function (derived_key){
return promesa.protocols._mcat(promesa.protocols._promise((new TextEncoder()).encode(text)),(function (encoded_text){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.encrypt(({"name": "AES-GCM", "iv": iv}),derived_key,encoded_text)),(function (encrypted_text){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [salt,iv,(new Uint8Array(encrypted_text))], null));
}));
}));
}));
}));
}));
}));
}));
});
frontend.common.crypt._LT_decrypt_text_by_text_password = (function frontend$common$crypt$_LT_decrypt_text_by_text_password(text_password,encrypted_data_vector){
if(((typeof text_password === 'string') && (cljs.core.vector_QMARK_(encrypted_data_vector)))){
} else {
throw (new Error("Assert failed: (and (string? text-password) (vector? encrypted-data-vector))"));
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(encrypted_data_vector),(function (p__66467){
var vec__66468 = p__66467;
var salt_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66468,(0),null);
var iv_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66468,(1),null);
var encrypted_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66468,(2),null);
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(salt_data))),(function (salt){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(iv_data))),(function (iv){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(encrypted_data))),(function (encrypted_data__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.importKey("raw",(new TextEncoder()).encode(text_password),"PBKDF2",false,["deriveKey"])),(function (password_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.deriveKey(({"name": "PBKDF2", "salt": salt, "iterations": (600000), "hash": "SHA-256"}),password_key,({"name": "AES-GCM", "length": (256)}),true,["encrypt","decrypt"])),(function (derived_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt.subtle.decrypt(({"name": "AES-GCM", "iv": iv}),derived_key,encrypted_data__$1)),(function (decrypted_data){
return promesa.protocols._promise((new TextDecoder()).decode(decrypted_data));
}));
}));
}));
}));
}));
}));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.common.crypt",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, ["decrypt-text-by-text-password",e,new cljs.core.Keyword(null,"line","line",212345235),312], null)),null);
} else {
}

return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("decrypt-text-by-text-password",cljs.core.PersistentArrayMap.EMPTY,e);
}));
});

//# sourceMappingURL=frontend.common.crypt.js.map
