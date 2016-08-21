// Compiled by ClojureScript 1.9.93 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__33895_33899 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__33896_33900 = null;
var count__33897_33901 = (0);
var i__33898_33902 = (0);
while(true){
if((i__33898_33902 < count__33897_33901)){
var k_33903 = cljs.core._nth.call(null,chunk__33896_33900,i__33898_33902);
var v_33904 = (b[k_33903]);
(a[k_33903] = v_33904);

var G__33905 = seq__33895_33899;
var G__33906 = chunk__33896_33900;
var G__33907 = count__33897_33901;
var G__33908 = (i__33898_33902 + (1));
seq__33895_33899 = G__33905;
chunk__33896_33900 = G__33906;
count__33897_33901 = G__33907;
i__33898_33902 = G__33908;
continue;
} else {
var temp__4657__auto___33909 = cljs.core.seq.call(null,seq__33895_33899);
if(temp__4657__auto___33909){
var seq__33895_33910__$1 = temp__4657__auto___33909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33895_33910__$1)){
var c__31671__auto___33911 = cljs.core.chunk_first.call(null,seq__33895_33910__$1);
var G__33912 = cljs.core.chunk_rest.call(null,seq__33895_33910__$1);
var G__33913 = c__31671__auto___33911;
var G__33914 = cljs.core.count.call(null,c__31671__auto___33911);
var G__33915 = (0);
seq__33895_33899 = G__33912;
chunk__33896_33900 = G__33913;
count__33897_33901 = G__33914;
i__33898_33902 = G__33915;
continue;
} else {
var k_33916 = cljs.core.first.call(null,seq__33895_33910__$1);
var v_33917 = (b[k_33916]);
(a[k_33916] = v_33917);

var G__33918 = cljs.core.next.call(null,seq__33895_33910__$1);
var G__33919 = null;
var G__33920 = (0);
var G__33921 = (0);
seq__33895_33899 = G__33918;
chunk__33896_33900 = G__33919;
count__33897_33901 = G__33920;
i__33898_33902 = G__33921;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args33922 = [];
var len__31935__auto___33925 = arguments.length;
var i__31936__auto___33926 = (0);
while(true){
if((i__31936__auto___33926 < len__31935__auto___33925)){
args33922.push((arguments[i__31936__auto___33926]));

var G__33927 = (i__31936__auto___33926 + (1));
i__31936__auto___33926 = G__33927;
continue;
} else {
}
break;
}

var G__33924 = args33922.length;
switch (G__33924) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33922.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__33929 = (i + (2));
var G__33930 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__33929;
ret = G__33930;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33931_33935 = cljs.core.seq.call(null,v);
var chunk__33932_33936 = null;
var count__33933_33937 = (0);
var i__33934_33938 = (0);
while(true){
if((i__33934_33938 < count__33933_33937)){
var x_33939 = cljs.core._nth.call(null,chunk__33932_33936,i__33934_33938);
ret.push(x_33939);

var G__33940 = seq__33931_33935;
var G__33941 = chunk__33932_33936;
var G__33942 = count__33933_33937;
var G__33943 = (i__33934_33938 + (1));
seq__33931_33935 = G__33940;
chunk__33932_33936 = G__33941;
count__33933_33937 = G__33942;
i__33934_33938 = G__33943;
continue;
} else {
var temp__4657__auto___33944 = cljs.core.seq.call(null,seq__33931_33935);
if(temp__4657__auto___33944){
var seq__33931_33945__$1 = temp__4657__auto___33944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33931_33945__$1)){
var c__31671__auto___33946 = cljs.core.chunk_first.call(null,seq__33931_33945__$1);
var G__33947 = cljs.core.chunk_rest.call(null,seq__33931_33945__$1);
var G__33948 = c__31671__auto___33946;
var G__33949 = cljs.core.count.call(null,c__31671__auto___33946);
var G__33950 = (0);
seq__33931_33935 = G__33947;
chunk__33932_33936 = G__33948;
count__33933_33937 = G__33949;
i__33934_33938 = G__33950;
continue;
} else {
var x_33951 = cljs.core.first.call(null,seq__33931_33945__$1);
ret.push(x_33951);

var G__33952 = cljs.core.next.call(null,seq__33931_33945__$1);
var G__33953 = null;
var G__33954 = (0);
var G__33955 = (0);
seq__33931_33935 = G__33952;
chunk__33932_33936 = G__33953;
count__33933_33937 = G__33954;
i__33934_33938 = G__33955;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33956_33960 = cljs.core.seq.call(null,v);
var chunk__33957_33961 = null;
var count__33958_33962 = (0);
var i__33959_33963 = (0);
while(true){
if((i__33959_33963 < count__33958_33962)){
var x_33964 = cljs.core._nth.call(null,chunk__33957_33961,i__33959_33963);
ret.push(x_33964);

var G__33965 = seq__33956_33960;
var G__33966 = chunk__33957_33961;
var G__33967 = count__33958_33962;
var G__33968 = (i__33959_33963 + (1));
seq__33956_33960 = G__33965;
chunk__33957_33961 = G__33966;
count__33958_33962 = G__33967;
i__33959_33963 = G__33968;
continue;
} else {
var temp__4657__auto___33969 = cljs.core.seq.call(null,seq__33956_33960);
if(temp__4657__auto___33969){
var seq__33956_33970__$1 = temp__4657__auto___33969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33956_33970__$1)){
var c__31671__auto___33971 = cljs.core.chunk_first.call(null,seq__33956_33970__$1);
var G__33972 = cljs.core.chunk_rest.call(null,seq__33956_33970__$1);
var G__33973 = c__31671__auto___33971;
var G__33974 = cljs.core.count.call(null,c__31671__auto___33971);
var G__33975 = (0);
seq__33956_33960 = G__33972;
chunk__33957_33961 = G__33973;
count__33958_33962 = G__33974;
i__33959_33963 = G__33975;
continue;
} else {
var x_33976 = cljs.core.first.call(null,seq__33956_33970__$1);
ret.push(x_33976);

var G__33977 = cljs.core.next.call(null,seq__33956_33970__$1);
var G__33978 = null;
var G__33979 = (0);
var G__33980 = (0);
seq__33956_33960 = G__33977;
chunk__33957_33961 = G__33978;
count__33958_33962 = G__33979;
i__33959_33963 = G__33980;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33981_33985 = cljs.core.seq.call(null,v);
var chunk__33982_33986 = null;
var count__33983_33987 = (0);
var i__33984_33988 = (0);
while(true){
if((i__33984_33988 < count__33983_33987)){
var x_33989 = cljs.core._nth.call(null,chunk__33982_33986,i__33984_33988);
ret.push(x_33989);

var G__33990 = seq__33981_33985;
var G__33991 = chunk__33982_33986;
var G__33992 = count__33983_33987;
var G__33993 = (i__33984_33988 + (1));
seq__33981_33985 = G__33990;
chunk__33982_33986 = G__33991;
count__33983_33987 = G__33992;
i__33984_33988 = G__33993;
continue;
} else {
var temp__4657__auto___33994 = cljs.core.seq.call(null,seq__33981_33985);
if(temp__4657__auto___33994){
var seq__33981_33995__$1 = temp__4657__auto___33994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33981_33995__$1)){
var c__31671__auto___33996 = cljs.core.chunk_first.call(null,seq__33981_33995__$1);
var G__33997 = cljs.core.chunk_rest.call(null,seq__33981_33995__$1);
var G__33998 = c__31671__auto___33996;
var G__33999 = cljs.core.count.call(null,c__31671__auto___33996);
var G__34000 = (0);
seq__33981_33985 = G__33997;
chunk__33982_33986 = G__33998;
count__33983_33987 = G__33999;
i__33984_33988 = G__34000;
continue;
} else {
var x_34001 = cljs.core.first.call(null,seq__33981_33995__$1);
ret.push(x_34001);

var G__34002 = cljs.core.next.call(null,seq__33981_33995__$1);
var G__34003 = null;
var G__34004 = (0);
var G__34005 = (0);
seq__33981_33985 = G__34002;
chunk__33982_33986 = G__34003;
count__33983_33987 = G__34004;
i__33984_33988 = G__34005;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args34006 = [];
var len__31935__auto___34021 = arguments.length;
var i__31936__auto___34022 = (0);
while(true){
if((i__31936__auto___34022 < len__31935__auto___34021)){
args34006.push((arguments[i__31936__auto___34022]));

var G__34023 = (i__31936__auto___34022 + (1));
i__31936__auto___34022 = G__34023;
continue;
} else {
}
break;
}

var G__34008 = args34006.length;
switch (G__34008) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34006.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__34009 = obj;
G__34009.push(kfn.call(null,k),vfn.call(null,v));

return G__34009;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x34010 = cljs.core.clone.call(null,handlers);
x34010.forEach = ((function (x34010,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__34011 = cljs.core.seq.call(null,coll);
var chunk__34012 = null;
var count__34013 = (0);
var i__34014 = (0);
while(true){
if((i__34014 < count__34013)){
var vec__34015 = cljs.core._nth.call(null,chunk__34012,i__34014);
var k = cljs.core.nth.call(null,vec__34015,(0),null);
var v = cljs.core.nth.call(null,vec__34015,(1),null);
f.call(null,v,k);

var G__34025 = seq__34011;
var G__34026 = chunk__34012;
var G__34027 = count__34013;
var G__34028 = (i__34014 + (1));
seq__34011 = G__34025;
chunk__34012 = G__34026;
count__34013 = G__34027;
i__34014 = G__34028;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34011);
if(temp__4657__auto__){
var seq__34011__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34011__$1)){
var c__31671__auto__ = cljs.core.chunk_first.call(null,seq__34011__$1);
var G__34029 = cljs.core.chunk_rest.call(null,seq__34011__$1);
var G__34030 = c__31671__auto__;
var G__34031 = cljs.core.count.call(null,c__31671__auto__);
var G__34032 = (0);
seq__34011 = G__34029;
chunk__34012 = G__34030;
count__34013 = G__34031;
i__34014 = G__34032;
continue;
} else {
var vec__34018 = cljs.core.first.call(null,seq__34011__$1);
var k = cljs.core.nth.call(null,vec__34018,(0),null);
var v = cljs.core.nth.call(null,vec__34018,(1),null);
f.call(null,v,k);

var G__34033 = cljs.core.next.call(null,seq__34011__$1);
var G__34034 = null;
var G__34035 = (0);
var G__34036 = (0);
seq__34011 = G__34033;
chunk__34012 = G__34034;
count__34013 = G__34035;
i__34014 = G__34036;
continue;
}
} else {
return null;
}
}
break;
}
});})(x34010,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x34010;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args34037 = [];
var len__31935__auto___34043 = arguments.length;
var i__31936__auto___34044 = (0);
while(true){
if((i__31936__auto___34044 < len__31935__auto___34043)){
args34037.push((arguments[i__31936__auto___34044]));

var G__34045 = (i__31936__auto___34044 + (1));
i__31936__auto___34044 = G__34045;
continue;
} else {
}
break;
}

var G__34039 = args34037.length;
switch (G__34039) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34037.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit34040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit34040 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta34041){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta34041 = meta34041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit34040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34042,meta34041__$1){
var self__ = this;
var _34042__$1 = this;
return (new cognitect.transit.t_cognitect$transit34040(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta34041__$1));
});

cognitect.transit.t_cognitect$transit34040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34042){
var self__ = this;
var _34042__$1 = this;
return self__.meta34041;
});

cognitect.transit.t_cognitect$transit34040.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit34040.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit34040.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit34040.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit34040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta34041","meta34041",-1984561289,null)], null);
});

cognitect.transit.t_cognitect$transit34040.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit34040.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit34040";

cognitect.transit.t_cognitect$transit34040.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cognitect.transit/t_cognitect$transit34040");
});

cognitect.transit.__GT_t_cognitect$transit34040 = (function cognitect$transit$__GT_t_cognitect$transit34040(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta34041){
return (new cognitect.transit.t_cognitect$transit34040(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta34041));
});

}

return (new cognitect.transit.t_cognitect$transit34040(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__30860__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1471771437520