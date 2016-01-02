// Compiled by ClojureScript 1.7.170 {}
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
var seq__33433_33437 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__33434_33438 = null;
var count__33435_33439 = (0);
var i__33436_33440 = (0);
while(true){
if((i__33436_33440 < count__33435_33439)){
var k_33441 = cljs.core._nth.call(null,chunk__33434_33438,i__33436_33440);
var v_33442 = (b[k_33441]);
(a[k_33441] = v_33442);

var G__33443 = seq__33433_33437;
var G__33444 = chunk__33434_33438;
var G__33445 = count__33435_33439;
var G__33446 = (i__33436_33440 + (1));
seq__33433_33437 = G__33443;
chunk__33434_33438 = G__33444;
count__33435_33439 = G__33445;
i__33436_33440 = G__33446;
continue;
} else {
var temp__4425__auto___33447 = cljs.core.seq.call(null,seq__33433_33437);
if(temp__4425__auto___33447){
var seq__33433_33448__$1 = temp__4425__auto___33447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33433_33448__$1)){
var c__30316__auto___33449 = cljs.core.chunk_first.call(null,seq__33433_33448__$1);
var G__33450 = cljs.core.chunk_rest.call(null,seq__33433_33448__$1);
var G__33451 = c__30316__auto___33449;
var G__33452 = cljs.core.count.call(null,c__30316__auto___33449);
var G__33453 = (0);
seq__33433_33437 = G__33450;
chunk__33434_33438 = G__33451;
count__33435_33439 = G__33452;
i__33436_33440 = G__33453;
continue;
} else {
var k_33454 = cljs.core.first.call(null,seq__33433_33448__$1);
var v_33455 = (b[k_33454]);
(a[k_33454] = v_33455);

var G__33456 = cljs.core.next.call(null,seq__33433_33448__$1);
var G__33457 = null;
var G__33458 = (0);
var G__33459 = (0);
seq__33433_33437 = G__33456;
chunk__33434_33438 = G__33457;
count__33435_33439 = G__33458;
i__33436_33440 = G__33459;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/VectorBuilder");
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
var args33460 = [];
var len__30571__auto___33463 = arguments.length;
var i__30572__auto___33464 = (0);
while(true){
if((i__30572__auto___33464 < len__30571__auto___33463)){
args33460.push((arguments[i__30572__auto___33464]));

var G__33465 = (i__30572__auto___33464 + (1));
i__30572__auto___33464 = G__33465;
continue;
} else {
}
break;
}

var G__33462 = args33460.length;
switch (G__33462) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33460.length)].join('')));

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
var G__33467 = (i + (2));
var G__33468 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__33467;
ret = G__33468;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/SymbolHandler");
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
var seq__33469_33473 = cljs.core.seq.call(null,v);
var chunk__33470_33474 = null;
var count__33471_33475 = (0);
var i__33472_33476 = (0);
while(true){
if((i__33472_33476 < count__33471_33475)){
var x_33477 = cljs.core._nth.call(null,chunk__33470_33474,i__33472_33476);
ret.push(x_33477);

var G__33478 = seq__33469_33473;
var G__33479 = chunk__33470_33474;
var G__33480 = count__33471_33475;
var G__33481 = (i__33472_33476 + (1));
seq__33469_33473 = G__33478;
chunk__33470_33474 = G__33479;
count__33471_33475 = G__33480;
i__33472_33476 = G__33481;
continue;
} else {
var temp__4425__auto___33482 = cljs.core.seq.call(null,seq__33469_33473);
if(temp__4425__auto___33482){
var seq__33469_33483__$1 = temp__4425__auto___33482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33469_33483__$1)){
var c__30316__auto___33484 = cljs.core.chunk_first.call(null,seq__33469_33483__$1);
var G__33485 = cljs.core.chunk_rest.call(null,seq__33469_33483__$1);
var G__33486 = c__30316__auto___33484;
var G__33487 = cljs.core.count.call(null,c__30316__auto___33484);
var G__33488 = (0);
seq__33469_33473 = G__33485;
chunk__33470_33474 = G__33486;
count__33471_33475 = G__33487;
i__33472_33476 = G__33488;
continue;
} else {
var x_33489 = cljs.core.first.call(null,seq__33469_33483__$1);
ret.push(x_33489);

var G__33490 = cljs.core.next.call(null,seq__33469_33483__$1);
var G__33491 = null;
var G__33492 = (0);
var G__33493 = (0);
seq__33469_33473 = G__33490;
chunk__33470_33474 = G__33491;
count__33471_33475 = G__33492;
i__33472_33476 = G__33493;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/MapHandler");
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
var seq__33494_33498 = cljs.core.seq.call(null,v);
var chunk__33495_33499 = null;
var count__33496_33500 = (0);
var i__33497_33501 = (0);
while(true){
if((i__33497_33501 < count__33496_33500)){
var x_33502 = cljs.core._nth.call(null,chunk__33495_33499,i__33497_33501);
ret.push(x_33502);

var G__33503 = seq__33494_33498;
var G__33504 = chunk__33495_33499;
var G__33505 = count__33496_33500;
var G__33506 = (i__33497_33501 + (1));
seq__33494_33498 = G__33503;
chunk__33495_33499 = G__33504;
count__33496_33500 = G__33505;
i__33497_33501 = G__33506;
continue;
} else {
var temp__4425__auto___33507 = cljs.core.seq.call(null,seq__33494_33498);
if(temp__4425__auto___33507){
var seq__33494_33508__$1 = temp__4425__auto___33507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33494_33508__$1)){
var c__30316__auto___33509 = cljs.core.chunk_first.call(null,seq__33494_33508__$1);
var G__33510 = cljs.core.chunk_rest.call(null,seq__33494_33508__$1);
var G__33511 = c__30316__auto___33509;
var G__33512 = cljs.core.count.call(null,c__30316__auto___33509);
var G__33513 = (0);
seq__33494_33498 = G__33510;
chunk__33495_33499 = G__33511;
count__33496_33500 = G__33512;
i__33497_33501 = G__33513;
continue;
} else {
var x_33514 = cljs.core.first.call(null,seq__33494_33508__$1);
ret.push(x_33514);

var G__33515 = cljs.core.next.call(null,seq__33494_33508__$1);
var G__33516 = null;
var G__33517 = (0);
var G__33518 = (0);
seq__33494_33498 = G__33515;
chunk__33495_33499 = G__33516;
count__33496_33500 = G__33517;
i__33497_33501 = G__33518;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/SetHandler");
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
var seq__33519_33523 = cljs.core.seq.call(null,v);
var chunk__33520_33524 = null;
var count__33521_33525 = (0);
var i__33522_33526 = (0);
while(true){
if((i__33522_33526 < count__33521_33525)){
var x_33527 = cljs.core._nth.call(null,chunk__33520_33524,i__33522_33526);
ret.push(x_33527);

var G__33528 = seq__33519_33523;
var G__33529 = chunk__33520_33524;
var G__33530 = count__33521_33525;
var G__33531 = (i__33522_33526 + (1));
seq__33519_33523 = G__33528;
chunk__33520_33524 = G__33529;
count__33521_33525 = G__33530;
i__33522_33526 = G__33531;
continue;
} else {
var temp__4425__auto___33532 = cljs.core.seq.call(null,seq__33519_33523);
if(temp__4425__auto___33532){
var seq__33519_33533__$1 = temp__4425__auto___33532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33519_33533__$1)){
var c__30316__auto___33534 = cljs.core.chunk_first.call(null,seq__33519_33533__$1);
var G__33535 = cljs.core.chunk_rest.call(null,seq__33519_33533__$1);
var G__33536 = c__30316__auto___33534;
var G__33537 = cljs.core.count.call(null,c__30316__auto___33534);
var G__33538 = (0);
seq__33519_33523 = G__33535;
chunk__33520_33524 = G__33536;
count__33521_33525 = G__33537;
i__33522_33526 = G__33538;
continue;
} else {
var x_33539 = cljs.core.first.call(null,seq__33519_33533__$1);
ret.push(x_33539);

var G__33540 = cljs.core.next.call(null,seq__33519_33533__$1);
var G__33541 = null;
var G__33542 = (0);
var G__33543 = (0);
seq__33519_33523 = G__33540;
chunk__33520_33524 = G__33541;
count__33521_33525 = G__33542;
i__33522_33526 = G__33543;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/UUIDHandler");
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
var args33544 = [];
var len__30571__auto___33555 = arguments.length;
var i__30572__auto___33556 = (0);
while(true){
if((i__30572__auto___33556 < len__30571__auto___33555)){
args33544.push((arguments[i__30572__auto___33556]));

var G__33557 = (i__30572__auto___33556 + (1));
i__30572__auto___33556 = G__33557;
continue;
} else {
}
break;
}

var G__33546 = args33544.length;
switch (G__33546) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33544.length)].join('')));

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
var G__33547 = obj;
G__33547.push(kfn.call(null,k),vfn.call(null,v));

return G__33547;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x33548 = cljs.core.clone.call(null,handlers);
x33548.forEach = ((function (x33548,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__33549 = cljs.core.seq.call(null,coll);
var chunk__33550 = null;
var count__33551 = (0);
var i__33552 = (0);
while(true){
if((i__33552 < count__33551)){
var vec__33553 = cljs.core._nth.call(null,chunk__33550,i__33552);
var k = cljs.core.nth.call(null,vec__33553,(0),null);
var v = cljs.core.nth.call(null,vec__33553,(1),null);
f.call(null,v,k);

var G__33559 = seq__33549;
var G__33560 = chunk__33550;
var G__33561 = count__33551;
var G__33562 = (i__33552 + (1));
seq__33549 = G__33559;
chunk__33550 = G__33560;
count__33551 = G__33561;
i__33552 = G__33562;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33549);
if(temp__4425__auto__){
var seq__33549__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33549__$1)){
var c__30316__auto__ = cljs.core.chunk_first.call(null,seq__33549__$1);
var G__33563 = cljs.core.chunk_rest.call(null,seq__33549__$1);
var G__33564 = c__30316__auto__;
var G__33565 = cljs.core.count.call(null,c__30316__auto__);
var G__33566 = (0);
seq__33549 = G__33563;
chunk__33550 = G__33564;
count__33551 = G__33565;
i__33552 = G__33566;
continue;
} else {
var vec__33554 = cljs.core.first.call(null,seq__33549__$1);
var k = cljs.core.nth.call(null,vec__33554,(0),null);
var v = cljs.core.nth.call(null,vec__33554,(1),null);
f.call(null,v,k);

var G__33567 = cljs.core.next.call(null,seq__33549__$1);
var G__33568 = null;
var G__33569 = (0);
var G__33570 = (0);
seq__33549 = G__33567;
chunk__33550 = G__33568;
count__33551 = G__33569;
i__33552 = G__33570;
continue;
}
} else {
return null;
}
}
break;
}
});})(x33548,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x33548;
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
var args33571 = [];
var len__30571__auto___33577 = arguments.length;
var i__30572__auto___33578 = (0);
while(true){
if((i__30572__auto___33578 < len__30571__auto___33577)){
args33571.push((arguments[i__30572__auto___33578]));

var G__33579 = (i__30572__auto___33578 + (1));
i__30572__auto___33578 = G__33579;
continue;
} else {
}
break;
}

var G__33573 = args33571.length;
switch (G__33573) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33571.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit33574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit33574 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta33575){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta33575 = meta33575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit33574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33576,meta33575__$1){
var self__ = this;
var _33576__$1 = this;
return (new cognitect.transit.t_cognitect$transit33574(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta33575__$1));
});

cognitect.transit.t_cognitect$transit33574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33576){
var self__ = this;
var _33576__$1 = this;
return self__.meta33575;
});

cognitect.transit.t_cognitect$transit33574.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit33574.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit33574.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit33574.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit33574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta33575","meta33575",1040913398,null)], null);
});

cognitect.transit.t_cognitect$transit33574.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit33574.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit33574";

cognitect.transit.t_cognitect$transit33574.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cognitect.transit/t_cognitect$transit33574");
});

cognitect.transit.__GT_t_cognitect$transit33574 = (function cognitect$transit$__GT_t_cognitect$transit33574(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta33575){
return (new cognitect.transit.t_cognitect$transit33574(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta33575));
});

}

return (new cognitect.transit.t_cognitect$transit33574(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__29513__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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

//# sourceMappingURL=transit.js.map