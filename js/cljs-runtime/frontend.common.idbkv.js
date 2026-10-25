goog.provide('frontend.common.idbkv');
frontend.common.idbkv.get_indexeddb = (function frontend$common$idbkv$get_indexeddb(){
if((typeof window !== 'undefined')){
return window.indexedDB;
} else {
if((typeof indexedDB !== 'undefined')){
return indexedDB;
} else {
return null;

}
}
});
frontend.common.idbkv.make_store = (function frontend$common$idbkv$make_store(var_args){
var G__55830 = arguments.length;
switch (G__55830) {
case 0:
return frontend.common.idbkv.make_store.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return frontend.common.idbkv.make_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.common.idbkv.make_store.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.common.idbkv.make_store.cljs$core$IFn$_invoke$arity$3("keyval-store","keyval",(1));
}));

(frontend.common.idbkv.make_store.cljs$core$IFn$_invoke$arity$3 = (function (db_name,store_name,version){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"store-name","store-name",1423922810),store_name,new cljs.core.Keyword(null,"db-name","db-name",1157928745),db_name,new cljs.core.Keyword(null,"store-name*","store-name*",-1385580313),store_name,new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"id","id",-1388402092),(""+"dbName:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(db_name)+";;storeName:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(store_name)),new cljs.core.Keyword(null,"dbp","dbp",97963850),null], null));
var init_BANG_ = (function frontend$common$idbkv$init_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbp","dbp",97963850).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var p = (new Promise((function (resolve,reject){
var idb = frontend.common.idbkv.get_indexeddb();
if(cljs.core.not(idb)){
var G__55845 = (new Error("indexedDB is not available"));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__55845) : reject.call(null,G__55845));
} else {
var openreq = idb.open(db_name,version);
(openreq.onerror = (function (){
var G__55846 = openreq.error;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__55846) : reject.call(null,G__55846));
}));

(openreq.onsuccess = (function (){
var G__55847 = openreq.result;
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__55847) : resolve.call(null,G__55847));
}));

return (openreq.onupgradeneeded = (function (){
return openreq.result.createObjectStore(store_name);
}));
}
})));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"dbp","dbp",97963850),p);
}
});
var with_idb_store = (function frontend$common$idbkv$with_idb_store(tx_type,callback){
init_BANG_();

return new cljs.core.Keyword(null,"dbp","dbp",97963850).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)).then((function (db){
return (new Promise((function (resolve,reject){
var tx = db.transaction(new cljs.core.Keyword(null,"store-name","store-name",1423922810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),tx_type);
(tx.oncomplete = (function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));
}));

(tx.onabort = (function (){
var G__55850 = tx.error;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__55850) : reject.call(null,G__55850));
}));

(tx.onerror = (function (){
var G__55851 = tx.error;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__55851) : reject.call(null,G__55851));
}));

var G__55852 = tx.objectStore(new cljs.core.Keyword(null,"store-name","store-name",1423922810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__55852) : callback.call(null,G__55852));
})));
}));
});
var close_BANG_ = (function frontend$common$idbkv$close_BANG_(){
init_BANG_();

return new cljs.core.Keyword(null,"dbp","dbp",97963850).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)).then((function (db){
db.close();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"dbp","dbp",97963850),null);
}));
});
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"init!","init!",-1002079356),init_BANG_,new cljs.core.Keyword(null,"with-idb-store","with-idb-store",413461518),with_idb_store,new cljs.core.Keyword(null,"close!","close!",-2079310498),close_BANG_], null);
}));

(frontend.common.idbkv.make_store.cljs$lang$maxFixedArity = 3);

frontend.common.idbkv.new_store = (function frontend$common$idbkv$new_store(var_args){
var G__55856 = arguments.length;
switch (G__55856) {
case 0:
return frontend.common.idbkv.new_store.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return frontend.common.idbkv.new_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.common.idbkv.new_store.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.common.idbkv.make_store.cljs$core$IFn$_invoke$arity$0();
}));

(frontend.common.idbkv.new_store.cljs$core$IFn$_invoke$arity$3 = (function (db_name,store_name,version){
return frontend.common.idbkv.make_store.cljs$core$IFn$_invoke$arity$3(db_name,store_name,version);
}));

(frontend.common.idbkv.new_store.cljs$lang$maxFixedArity = 3);

if((typeof frontend !== 'undefined') && (typeof frontend.common !== 'undefined') && (typeof frontend.common.idbkv !== 'undefined') && (typeof frontend.common.idbkv.default_store_STAR_ !== 'undefined')){
} else {
frontend.common.idbkv.default_store_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.common.idbkv.get_default_store = (function frontend$common$idbkv$get_default_store(){
var or__5142__auto__ = cljs.core.deref(frontend.common.idbkv.default_store_STAR_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var s = frontend.common.idbkv.make_store.cljs$core$IFn$_invoke$arity$0();
cljs.core.reset_BANG_(frontend.common.idbkv.default_store_STAR_,s);

return s;
}
});
frontend.common.idbkv.store_id = (function frontend$common$idbkv$store_id(store){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(store)));
});
frontend.common.idbkv.get_item = (function frontend$common$idbkv$get_item(var_args){
var G__55860 = arguments.length;
switch (G__55860) {
case 1:
return frontend.common.idbkv.get_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.common.idbkv.get_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.common.idbkv.get_item.cljs$core$IFn$_invoke$arity$1 = (function (key){
return frontend.common.idbkv.get_item.cljs$core$IFn$_invoke$arity$2(key,frontend.common.idbkv.get_default_store());
}));

(frontend.common.idbkv.get_item.cljs$core$IFn$_invoke$arity$2 = (function (key,store){
var req_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){var G__55864 = "readwrite";
var G__55865 = (function (os){
return cljs.core.reset_BANG_(req_STAR_,os.get(key));
});
var fexpr__55863 = new cljs.core.Keyword(null,"with-idb-store","with-idb-store",413461518).cljs$core$IFn$_invoke$arity$1(store);
return (fexpr__55863.cljs$core$IFn$_invoke$arity$2 ? fexpr__55863.cljs$core$IFn$_invoke$arity$2(G__55864,G__55865) : fexpr__55863.call(null,G__55864,G__55865));
})().then((function (){
return cljs.core.deref(req_STAR_).result;
}));
}));

(frontend.common.idbkv.get_item.cljs$lang$maxFixedArity = 2);

frontend.common.idbkv.make_batcher = (function frontend$common$idbkv$make_batcher(executor){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),null], null));
var process_BANG_ = (function frontend$common$idbkv$make_batcher_$_process_BANG_(){
var to_process = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY);

return (function (){var G__55882 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item","item",249373802),to_process);
return (executor.cljs$core$IFn$_invoke$arity$1 ? executor.cljs$core$IFn$_invoke$arity$1(G__55882) : executor.call(null,G__55882));
})().then((function (){
var seq__55883_55928 = cljs.core.seq(to_process);
var chunk__55884_55929 = null;
var count__55885_55930 = (0);
var i__55886_55931 = (0);
while(true){
if((i__55886_55931 < count__55885_55930)){
var map__55890_55932 = chunk__55884_55929.cljs$core$IIndexed$_nth$arity$2(null,i__55886_55931);
var map__55890_55933__$1 = cljs.core.__destructure_map(map__55890_55932);
var on_processed_55934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55890_55933__$1,new cljs.core.Keyword(null,"on-processed","on-processed",-1668704957));
(on_processed_55934.cljs$core$IFn$_invoke$arity$0 ? on_processed_55934.cljs$core$IFn$_invoke$arity$0() : on_processed_55934.call(null));


var G__55935 = seq__55883_55928;
var G__55936 = chunk__55884_55929;
var G__55937 = count__55885_55930;
var G__55938 = (i__55886_55931 + (1));
seq__55883_55928 = G__55935;
chunk__55884_55929 = G__55936;
count__55885_55930 = G__55937;
i__55886_55931 = G__55938;
continue;
} else {
var temp__5825__auto___55939 = cljs.core.seq(seq__55883_55928);
if(temp__5825__auto___55939){
var seq__55883_55940__$1 = temp__5825__auto___55939;
if(cljs.core.chunked_seq_QMARK_(seq__55883_55940__$1)){
var c__5673__auto___55941 = cljs.core.chunk_first(seq__55883_55940__$1);
var G__55942 = cljs.core.chunk_rest(seq__55883_55940__$1);
var G__55943 = c__5673__auto___55941;
var G__55944 = cljs.core.count(c__5673__auto___55941);
var G__55945 = (0);
seq__55883_55928 = G__55942;
chunk__55884_55929 = G__55943;
count__55885_55930 = G__55944;
i__55886_55931 = G__55945;
continue;
} else {
var map__55892_55946 = cljs.core.first(seq__55883_55940__$1);
var map__55892_55947__$1 = cljs.core.__destructure_map(map__55892_55946);
var on_processed_55948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55892_55947__$1,new cljs.core.Keyword(null,"on-processed","on-processed",-1668704957));
(on_processed_55948.cljs$core$IFn$_invoke$arity$0 ? on_processed_55948.cljs$core$IFn$_invoke$arity$0() : on_processed_55948.call(null));


var G__55949 = cljs.core.next(seq__55883_55940__$1);
var G__55950 = null;
var G__55951 = (0);
var G__55952 = (0);
seq__55883_55928 = G__55949;
chunk__55884_55929 = G__55950;
count__55885_55930 = G__55951;
i__55886_55931 = G__55952;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
var p = frontend$common$idbkv$make_batcher_$_process_BANG_();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),p);

return p;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),null);

return null;
}
}));
});
var queue_BANG_ = (function frontend$common$idbkv$make_batcher_$_queue_BANG_(item){
var p = (new Promise((function (resolve,_reject){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"on-processed","on-processed",-1668704957),resolve], null)], 0));
})));
if(cljs.core.truth_(new cljs.core.Keyword(null,"ongoing","ongoing",-30673877).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
} else {
var ongoing_55953 = process_BANG_();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),ongoing_55953);
}

return p;
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"queue!","queue!",-1061064868),queue_BANG_,new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});
if((typeof frontend !== 'undefined') && (typeof frontend.common !== 'undefined') && (typeof frontend.common.idbkv !== 'undefined') && (typeof frontend.common.idbkv.set_batchers_STAR_ !== 'undefined')){
} else {
frontend.common.idbkv.set_batchers_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.common.idbkv.set_item = (function frontend$common$idbkv$set_item(var_args){
var G__55898 = arguments.length;
switch (G__55898) {
case 2:
return frontend.common.idbkv.set_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.common.idbkv.set_item.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.common.idbkv.set_item.cljs$core$IFn$_invoke$arity$2 = (function (key,value){
return frontend.common.idbkv.set_item.cljs$core$IFn$_invoke$arity$3(key,value,frontend.common.idbkv.get_default_store());
}));

(frontend.common.idbkv.set_item.cljs$core$IFn$_invoke$arity$3 = (function (key,value,store){
var sid = frontend.common.idbkv.store_id(store);
var batcher = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.common.idbkv.set_batchers_STAR_),sid);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var b = frontend.common.idbkv.make_batcher((function (items){
var G__55902 = "readwrite";
var G__55903 = (function (os){
var seq__55904 = cljs.core.seq(items);
var chunk__55905 = null;
var count__55906 = (0);
var i__55907 = (0);
while(true){
if((i__55907 < count__55906)){
var map__55912 = chunk__55905.cljs$core$IIndexed$_nth$arity$2(null,i__55907);
var map__55912__$1 = cljs.core.__destructure_map(map__55912);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55912__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55912__$1,new cljs.core.Keyword(null,"value","value",305978217));
os.put(value__$1,key__$1);


var G__55955 = seq__55904;
var G__55956 = chunk__55905;
var G__55957 = count__55906;
var G__55958 = (i__55907 + (1));
seq__55904 = G__55955;
chunk__55905 = G__55956;
count__55906 = G__55957;
i__55907 = G__55958;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__55904);
if(temp__5825__auto__){
var seq__55904__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55904__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__55904__$1);
var G__55959 = cljs.core.chunk_rest(seq__55904__$1);
var G__55960 = c__5673__auto__;
var G__55961 = cljs.core.count(c__5673__auto__);
var G__55962 = (0);
seq__55904 = G__55959;
chunk__55905 = G__55960;
count__55906 = G__55961;
i__55907 = G__55962;
continue;
} else {
var map__55914 = cljs.core.first(seq__55904__$1);
var map__55914__$1 = cljs.core.__destructure_map(map__55914);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55914__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55914__$1,new cljs.core.Keyword(null,"value","value",305978217));
os.put(value__$1,key__$1);


var G__55963 = cljs.core.next(seq__55904__$1);
var G__55964 = null;
var G__55965 = (0);
var G__55966 = (0);
seq__55904 = G__55963;
chunk__55905 = G__55964;
count__55906 = G__55965;
i__55907 = G__55966;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__55901 = new cljs.core.Keyword(null,"with-idb-store","with-idb-store",413461518).cljs$core$IFn$_invoke$arity$1(store);
return (fexpr__55901.cljs$core$IFn$_invoke$arity$2 ? fexpr__55901.cljs$core$IFn$_invoke$arity$2(G__55902,G__55903) : fexpr__55901.call(null,G__55902,G__55903));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.common.idbkv.set_batchers_STAR_,cljs.core.assoc,sid,b);

return b;
}
})();
var G__55917 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var fexpr__55916 = new cljs.core.Keyword(null,"queue!","queue!",-1061064868).cljs$core$IFn$_invoke$arity$1(batcher);
return (fexpr__55916.cljs$core$IFn$_invoke$arity$1 ? fexpr__55916.cljs$core$IFn$_invoke$arity$1(G__55917) : fexpr__55916.call(null,G__55917));
}));

(frontend.common.idbkv.set_item.cljs$lang$maxFixedArity = 3);

frontend.common.idbkv.del = (function frontend$common$idbkv$del(var_args){
var G__55919 = arguments.length;
switch (G__55919) {
case 1:
return frontend.common.idbkv.del.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.common.idbkv.del.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.common.idbkv.del.cljs$core$IFn$_invoke$arity$1 = (function (key){
return frontend.common.idbkv.del.cljs$core$IFn$_invoke$arity$2(key,frontend.common.idbkv.get_default_store());
}));

(frontend.common.idbkv.del.cljs$core$IFn$_invoke$arity$2 = (function (key,store){
var G__55923 = "readwrite";
var G__55924 = (function (os){
return os.delete(key);
});
var fexpr__55922 = new cljs.core.Keyword(null,"with-idb-store","with-idb-store",413461518).cljs$core$IFn$_invoke$arity$1(store);
return (fexpr__55922.cljs$core$IFn$_invoke$arity$2 ? fexpr__55922.cljs$core$IFn$_invoke$arity$2(G__55923,G__55924) : fexpr__55922.call(null,G__55923,G__55924));
}));

(frontend.common.idbkv.del.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=frontend.common.idbkv.js.map
