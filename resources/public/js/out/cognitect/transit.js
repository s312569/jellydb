// Compiled by ClojureScript 1.7.145 {}
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
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
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
var seq__12115_12119 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__12116_12120 = null;
var count__12117_12121 = (0);
var i__12118_12122 = (0);
while(true){
if((i__12118_12122 < count__12117_12121)){
var k_12123 = cljs.core._nth.call(null,chunk__12116_12120,i__12118_12122);
var v_12124 = (b[k_12123]);
(a[k_12123] = v_12124);

var G__12125 = seq__12115_12119;
var G__12126 = chunk__12116_12120;
var G__12127 = count__12117_12121;
var G__12128 = (i__12118_12122 + (1));
seq__12115_12119 = G__12125;
chunk__12116_12120 = G__12126;
count__12117_12121 = G__12127;
i__12118_12122 = G__12128;
continue;
} else {
var temp__4425__auto___12129 = cljs.core.seq.call(null,seq__12115_12119);
if(temp__4425__auto___12129){
var seq__12115_12130__$1 = temp__4425__auto___12129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12115_12130__$1)){
var c__5306__auto___12131 = cljs.core.chunk_first.call(null,seq__12115_12130__$1);
var G__12132 = cljs.core.chunk_rest.call(null,seq__12115_12130__$1);
var G__12133 = c__5306__auto___12131;
var G__12134 = cljs.core.count.call(null,c__5306__auto___12131);
var G__12135 = (0);
seq__12115_12119 = G__12132;
chunk__12116_12120 = G__12133;
count__12117_12121 = G__12134;
i__12118_12122 = G__12135;
continue;
} else {
var k_12136 = cljs.core.first.call(null,seq__12115_12130__$1);
var v_12137 = (b[k_12136]);
(a[k_12136] = v_12137);

var G__12138 = cljs.core.next.call(null,seq__12115_12130__$1);
var G__12139 = null;
var G__12140 = (0);
var G__12141 = (0);
seq__12115_12119 = G__12138;
chunk__12116_12120 = G__12139;
count__12117_12121 = G__12140;
i__12118_12122 = G__12141;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/VectorBuilder");
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
var args12142 = [];
var len__5561__auto___12145 = arguments.length;
var i__5562__auto___12146 = (0);
while(true){
if((i__5562__auto___12146 < len__5561__auto___12145)){
args12142.push((arguments[i__5562__auto___12146]));

var G__12147 = (i__5562__auto___12146 + (1));
i__5562__auto___12146 = G__12147;
continue;
} else {
}
break;
}

var G__12144 = args12142.length;
switch (G__12144) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12142.length)].join('')));

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
var G__12149 = (i + (2));
var G__12150 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__12149;
ret = G__12150;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/SymbolHandler");
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
var seq__12151_12155 = cljs.core.seq.call(null,v);
var chunk__12152_12156 = null;
var count__12153_12157 = (0);
var i__12154_12158 = (0);
while(true){
if((i__12154_12158 < count__12153_12157)){
var x_12159 = cljs.core._nth.call(null,chunk__12152_12156,i__12154_12158);
ret.push(x_12159);

var G__12160 = seq__12151_12155;
var G__12161 = chunk__12152_12156;
var G__12162 = count__12153_12157;
var G__12163 = (i__12154_12158 + (1));
seq__12151_12155 = G__12160;
chunk__12152_12156 = G__12161;
count__12153_12157 = G__12162;
i__12154_12158 = G__12163;
continue;
} else {
var temp__4425__auto___12164 = cljs.core.seq.call(null,seq__12151_12155);
if(temp__4425__auto___12164){
var seq__12151_12165__$1 = temp__4425__auto___12164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12151_12165__$1)){
var c__5306__auto___12166 = cljs.core.chunk_first.call(null,seq__12151_12165__$1);
var G__12167 = cljs.core.chunk_rest.call(null,seq__12151_12165__$1);
var G__12168 = c__5306__auto___12166;
var G__12169 = cljs.core.count.call(null,c__5306__auto___12166);
var G__12170 = (0);
seq__12151_12155 = G__12167;
chunk__12152_12156 = G__12168;
count__12153_12157 = G__12169;
i__12154_12158 = G__12170;
continue;
} else {
var x_12171 = cljs.core.first.call(null,seq__12151_12165__$1);
ret.push(x_12171);

var G__12172 = cljs.core.next.call(null,seq__12151_12165__$1);
var G__12173 = null;
var G__12174 = (0);
var G__12175 = (0);
seq__12151_12155 = G__12172;
chunk__12152_12156 = G__12173;
count__12153_12157 = G__12174;
i__12154_12158 = G__12175;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/MapHandler");
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
var seq__12176_12180 = cljs.core.seq.call(null,v);
var chunk__12177_12181 = null;
var count__12178_12182 = (0);
var i__12179_12183 = (0);
while(true){
if((i__12179_12183 < count__12178_12182)){
var x_12184 = cljs.core._nth.call(null,chunk__12177_12181,i__12179_12183);
ret.push(x_12184);

var G__12185 = seq__12176_12180;
var G__12186 = chunk__12177_12181;
var G__12187 = count__12178_12182;
var G__12188 = (i__12179_12183 + (1));
seq__12176_12180 = G__12185;
chunk__12177_12181 = G__12186;
count__12178_12182 = G__12187;
i__12179_12183 = G__12188;
continue;
} else {
var temp__4425__auto___12189 = cljs.core.seq.call(null,seq__12176_12180);
if(temp__4425__auto___12189){
var seq__12176_12190__$1 = temp__4425__auto___12189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12176_12190__$1)){
var c__5306__auto___12191 = cljs.core.chunk_first.call(null,seq__12176_12190__$1);
var G__12192 = cljs.core.chunk_rest.call(null,seq__12176_12190__$1);
var G__12193 = c__5306__auto___12191;
var G__12194 = cljs.core.count.call(null,c__5306__auto___12191);
var G__12195 = (0);
seq__12176_12180 = G__12192;
chunk__12177_12181 = G__12193;
count__12178_12182 = G__12194;
i__12179_12183 = G__12195;
continue;
} else {
var x_12196 = cljs.core.first.call(null,seq__12176_12190__$1);
ret.push(x_12196);

var G__12197 = cljs.core.next.call(null,seq__12176_12190__$1);
var G__12198 = null;
var G__12199 = (0);
var G__12200 = (0);
seq__12176_12180 = G__12197;
chunk__12177_12181 = G__12198;
count__12178_12182 = G__12199;
i__12179_12183 = G__12200;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/SetHandler");
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
var seq__12201_12205 = cljs.core.seq.call(null,v);
var chunk__12202_12206 = null;
var count__12203_12207 = (0);
var i__12204_12208 = (0);
while(true){
if((i__12204_12208 < count__12203_12207)){
var x_12209 = cljs.core._nth.call(null,chunk__12202_12206,i__12204_12208);
ret.push(x_12209);

var G__12210 = seq__12201_12205;
var G__12211 = chunk__12202_12206;
var G__12212 = count__12203_12207;
var G__12213 = (i__12204_12208 + (1));
seq__12201_12205 = G__12210;
chunk__12202_12206 = G__12211;
count__12203_12207 = G__12212;
i__12204_12208 = G__12213;
continue;
} else {
var temp__4425__auto___12214 = cljs.core.seq.call(null,seq__12201_12205);
if(temp__4425__auto___12214){
var seq__12201_12215__$1 = temp__4425__auto___12214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12201_12215__$1)){
var c__5306__auto___12216 = cljs.core.chunk_first.call(null,seq__12201_12215__$1);
var G__12217 = cljs.core.chunk_rest.call(null,seq__12201_12215__$1);
var G__12218 = c__5306__auto___12216;
var G__12219 = cljs.core.count.call(null,c__5306__auto___12216);
var G__12220 = (0);
seq__12201_12205 = G__12217;
chunk__12202_12206 = G__12218;
count__12203_12207 = G__12219;
i__12204_12208 = G__12220;
continue;
} else {
var x_12221 = cljs.core.first.call(null,seq__12201_12215__$1);
ret.push(x_12221);

var G__12222 = cljs.core.next.call(null,seq__12201_12215__$1);
var G__12223 = null;
var G__12224 = (0);
var G__12225 = (0);
seq__12201_12205 = G__12222;
chunk__12202_12206 = G__12223;
count__12203_12207 = G__12224;
i__12204_12208 = G__12225;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/UUIDHandler");
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
var args12226 = [];
var len__5561__auto___12237 = arguments.length;
var i__5562__auto___12238 = (0);
while(true){
if((i__5562__auto___12238 < len__5561__auto___12237)){
args12226.push((arguments[i__5562__auto___12238]));

var G__12239 = (i__5562__auto___12238 + (1));
i__5562__auto___12238 = G__12239;
continue;
} else {
}
break;
}

var G__12228 = args12226.length;
switch (G__12228) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12226.length)].join('')));

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
var G__12229 = obj;
G__12229.push(kfn.call(null,k),vfn.call(null,v));

return G__12229;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12230 = cljs.core.clone.call(null,handlers);
x12230.forEach = ((function (x12230,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12231 = cljs.core.seq.call(null,coll);
var chunk__12232 = null;
var count__12233 = (0);
var i__12234 = (0);
while(true){
if((i__12234 < count__12233)){
var vec__12235 = cljs.core._nth.call(null,chunk__12232,i__12234);
var k = cljs.core.nth.call(null,vec__12235,(0),null);
var v = cljs.core.nth.call(null,vec__12235,(1),null);
f.call(null,v,k);

var G__12241 = seq__12231;
var G__12242 = chunk__12232;
var G__12243 = count__12233;
var G__12244 = (i__12234 + (1));
seq__12231 = G__12241;
chunk__12232 = G__12242;
count__12233 = G__12243;
i__12234 = G__12244;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12231);
if(temp__4425__auto__){
var seq__12231__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12231__$1)){
var c__5306__auto__ = cljs.core.chunk_first.call(null,seq__12231__$1);
var G__12245 = cljs.core.chunk_rest.call(null,seq__12231__$1);
var G__12246 = c__5306__auto__;
var G__12247 = cljs.core.count.call(null,c__5306__auto__);
var G__12248 = (0);
seq__12231 = G__12245;
chunk__12232 = G__12246;
count__12233 = G__12247;
i__12234 = G__12248;
continue;
} else {
var vec__12236 = cljs.core.first.call(null,seq__12231__$1);
var k = cljs.core.nth.call(null,vec__12236,(0),null);
var v = cljs.core.nth.call(null,vec__12236,(1),null);
f.call(null,v,k);

var G__12249 = cljs.core.next.call(null,seq__12231__$1);
var G__12250 = null;
var G__12251 = (0);
var G__12252 = (0);
seq__12231 = G__12249;
chunk__12232 = G__12250;
count__12233 = G__12251;
i__12234 = G__12252;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12230,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12230;
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
var args12253 = [];
var len__5561__auto___12259 = arguments.length;
var i__5562__auto___12260 = (0);
while(true){
if((i__5562__auto___12260 < len__5561__auto___12259)){
args12253.push((arguments[i__5562__auto___12260]));

var G__12261 = (i__5562__auto___12260 + (1));
i__5562__auto___12260 = G__12261;
continue;
} else {
}
break;
}

var G__12255 = args12253.length;
switch (G__12255) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12253.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit12256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit12256 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta12257){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta12257 = meta12257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit12256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12258,meta12257__$1){
var self__ = this;
var _12258__$1 = this;
return (new cognitect.transit.t_cognitect$transit12256(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta12257__$1));
});

cognitect.transit.t_cognitect$transit12256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12258){
var self__ = this;
var _12258__$1 = this;
return self__.meta12257;
});

cognitect.transit.t_cognitect$transit12256.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12256.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12256.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12256.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta12257","meta12257",1521794980,null)], null);
});

cognitect.transit.t_cognitect$transit12256.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit12256.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit12256";

cognitect.transit.t_cognitect$transit12256.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cognitect.transit/t_cognitect$transit12256");
});

cognitect.transit.__GT_t_cognitect$transit12256 = (function cognitect$transit$__GT_t_cognitect$transit12256(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12257){
return (new cognitect.transit.t_cognitect$transit12256(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12257));
});

}

return (new cognitect.transit.t_cognitect$transit12256(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
return com.cognitect.transit.types.isUUID.call(null,x);
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

//# sourceMappingURL=transit.js.map