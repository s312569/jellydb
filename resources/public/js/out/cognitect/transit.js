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
var seq__35594_35598 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__35595_35599 = null;
var count__35596_35600 = (0);
var i__35597_35601 = (0);
while(true){
if((i__35597_35601 < count__35596_35600)){
var k_35602 = cljs.core._nth.call(null,chunk__35595_35599,i__35597_35601);
var v_35603 = (b[k_35602]);
(a[k_35602] = v_35603);

var G__35604 = seq__35594_35598;
var G__35605 = chunk__35595_35599;
var G__35606 = count__35596_35600;
var G__35607 = (i__35597_35601 + (1));
seq__35594_35598 = G__35604;
chunk__35595_35599 = G__35605;
count__35596_35600 = G__35606;
i__35597_35601 = G__35607;
continue;
} else {
var temp__4657__auto___35608 = cljs.core.seq.call(null,seq__35594_35598);
if(temp__4657__auto___35608){
var seq__35594_35609__$1 = temp__4657__auto___35608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35594_35609__$1)){
var c__31895__auto___35610 = cljs.core.chunk_first.call(null,seq__35594_35609__$1);
var G__35611 = cljs.core.chunk_rest.call(null,seq__35594_35609__$1);
var G__35612 = c__31895__auto___35610;
var G__35613 = cljs.core.count.call(null,c__31895__auto___35610);
var G__35614 = (0);
seq__35594_35598 = G__35611;
chunk__35595_35599 = G__35612;
count__35596_35600 = G__35613;
i__35597_35601 = G__35614;
continue;
} else {
var k_35615 = cljs.core.first.call(null,seq__35594_35609__$1);
var v_35616 = (b[k_35615]);
(a[k_35615] = v_35616);

var G__35617 = cljs.core.next.call(null,seq__35594_35609__$1);
var G__35618 = null;
var G__35619 = (0);
var G__35620 = (0);
seq__35594_35598 = G__35617;
chunk__35595_35599 = G__35618;
count__35596_35600 = G__35619;
i__35597_35601 = G__35620;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/VectorBuilder");
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
var args35621 = [];
var len__32159__auto___35624 = arguments.length;
var i__32160__auto___35625 = (0);
while(true){
if((i__32160__auto___35625 < len__32159__auto___35624)){
args35621.push((arguments[i__32160__auto___35625]));

var G__35626 = (i__32160__auto___35625 + (1));
i__32160__auto___35625 = G__35626;
continue;
} else {
}
break;
}

var G__35623 = args35621.length;
switch (G__35623) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35621.length)].join('')));

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
var G__35628 = (i + (2));
var G__35629 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__35628;
ret = G__35629;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/SymbolHandler");
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
var seq__35630_35634 = cljs.core.seq.call(null,v);
var chunk__35631_35635 = null;
var count__35632_35636 = (0);
var i__35633_35637 = (0);
while(true){
if((i__35633_35637 < count__35632_35636)){
var x_35638 = cljs.core._nth.call(null,chunk__35631_35635,i__35633_35637);
ret.push(x_35638);

var G__35639 = seq__35630_35634;
var G__35640 = chunk__35631_35635;
var G__35641 = count__35632_35636;
var G__35642 = (i__35633_35637 + (1));
seq__35630_35634 = G__35639;
chunk__35631_35635 = G__35640;
count__35632_35636 = G__35641;
i__35633_35637 = G__35642;
continue;
} else {
var temp__4657__auto___35643 = cljs.core.seq.call(null,seq__35630_35634);
if(temp__4657__auto___35643){
var seq__35630_35644__$1 = temp__4657__auto___35643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35630_35644__$1)){
var c__31895__auto___35645 = cljs.core.chunk_first.call(null,seq__35630_35644__$1);
var G__35646 = cljs.core.chunk_rest.call(null,seq__35630_35644__$1);
var G__35647 = c__31895__auto___35645;
var G__35648 = cljs.core.count.call(null,c__31895__auto___35645);
var G__35649 = (0);
seq__35630_35634 = G__35646;
chunk__35631_35635 = G__35647;
count__35632_35636 = G__35648;
i__35633_35637 = G__35649;
continue;
} else {
var x_35650 = cljs.core.first.call(null,seq__35630_35644__$1);
ret.push(x_35650);

var G__35651 = cljs.core.next.call(null,seq__35630_35644__$1);
var G__35652 = null;
var G__35653 = (0);
var G__35654 = (0);
seq__35630_35634 = G__35651;
chunk__35631_35635 = G__35652;
count__35632_35636 = G__35653;
i__35633_35637 = G__35654;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/MapHandler");
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
var seq__35655_35659 = cljs.core.seq.call(null,v);
var chunk__35656_35660 = null;
var count__35657_35661 = (0);
var i__35658_35662 = (0);
while(true){
if((i__35658_35662 < count__35657_35661)){
var x_35663 = cljs.core._nth.call(null,chunk__35656_35660,i__35658_35662);
ret.push(x_35663);

var G__35664 = seq__35655_35659;
var G__35665 = chunk__35656_35660;
var G__35666 = count__35657_35661;
var G__35667 = (i__35658_35662 + (1));
seq__35655_35659 = G__35664;
chunk__35656_35660 = G__35665;
count__35657_35661 = G__35666;
i__35658_35662 = G__35667;
continue;
} else {
var temp__4657__auto___35668 = cljs.core.seq.call(null,seq__35655_35659);
if(temp__4657__auto___35668){
var seq__35655_35669__$1 = temp__4657__auto___35668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35655_35669__$1)){
var c__31895__auto___35670 = cljs.core.chunk_first.call(null,seq__35655_35669__$1);
var G__35671 = cljs.core.chunk_rest.call(null,seq__35655_35669__$1);
var G__35672 = c__31895__auto___35670;
var G__35673 = cljs.core.count.call(null,c__31895__auto___35670);
var G__35674 = (0);
seq__35655_35659 = G__35671;
chunk__35656_35660 = G__35672;
count__35657_35661 = G__35673;
i__35658_35662 = G__35674;
continue;
} else {
var x_35675 = cljs.core.first.call(null,seq__35655_35669__$1);
ret.push(x_35675);

var G__35676 = cljs.core.next.call(null,seq__35655_35669__$1);
var G__35677 = null;
var G__35678 = (0);
var G__35679 = (0);
seq__35655_35659 = G__35676;
chunk__35656_35660 = G__35677;
count__35657_35661 = G__35678;
i__35658_35662 = G__35679;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/SetHandler");
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
var seq__35680_35684 = cljs.core.seq.call(null,v);
var chunk__35681_35685 = null;
var count__35682_35686 = (0);
var i__35683_35687 = (0);
while(true){
if((i__35683_35687 < count__35682_35686)){
var x_35688 = cljs.core._nth.call(null,chunk__35681_35685,i__35683_35687);
ret.push(x_35688);

var G__35689 = seq__35680_35684;
var G__35690 = chunk__35681_35685;
var G__35691 = count__35682_35686;
var G__35692 = (i__35683_35687 + (1));
seq__35680_35684 = G__35689;
chunk__35681_35685 = G__35690;
count__35682_35686 = G__35691;
i__35683_35687 = G__35692;
continue;
} else {
var temp__4657__auto___35693 = cljs.core.seq.call(null,seq__35680_35684);
if(temp__4657__auto___35693){
var seq__35680_35694__$1 = temp__4657__auto___35693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35680_35694__$1)){
var c__31895__auto___35695 = cljs.core.chunk_first.call(null,seq__35680_35694__$1);
var G__35696 = cljs.core.chunk_rest.call(null,seq__35680_35694__$1);
var G__35697 = c__31895__auto___35695;
var G__35698 = cljs.core.count.call(null,c__31895__auto___35695);
var G__35699 = (0);
seq__35680_35684 = G__35696;
chunk__35681_35685 = G__35697;
count__35682_35686 = G__35698;
i__35683_35687 = G__35699;
continue;
} else {
var x_35700 = cljs.core.first.call(null,seq__35680_35694__$1);
ret.push(x_35700);

var G__35701 = cljs.core.next.call(null,seq__35680_35694__$1);
var G__35702 = null;
var G__35703 = (0);
var G__35704 = (0);
seq__35680_35684 = G__35701;
chunk__35681_35685 = G__35702;
count__35682_35686 = G__35703;
i__35683_35687 = G__35704;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/UUIDHandler");
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
var args35705 = [];
var len__32159__auto___35720 = arguments.length;
var i__32160__auto___35721 = (0);
while(true){
if((i__32160__auto___35721 < len__32159__auto___35720)){
args35705.push((arguments[i__32160__auto___35721]));

var G__35722 = (i__32160__auto___35721 + (1));
i__32160__auto___35721 = G__35722;
continue;
} else {
}
break;
}

var G__35707 = args35705.length;
switch (G__35707) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35705.length)].join('')));

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
var G__35708 = obj;
G__35708.push(kfn.call(null,k),vfn.call(null,v));

return G__35708;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x35709 = cljs.core.clone.call(null,handlers);
x35709.forEach = ((function (x35709,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__35710 = cljs.core.seq.call(null,coll);
var chunk__35711 = null;
var count__35712 = (0);
var i__35713 = (0);
while(true){
if((i__35713 < count__35712)){
var vec__35714 = cljs.core._nth.call(null,chunk__35711,i__35713);
var k = cljs.core.nth.call(null,vec__35714,(0),null);
var v = cljs.core.nth.call(null,vec__35714,(1),null);
f.call(null,v,k);

var G__35724 = seq__35710;
var G__35725 = chunk__35711;
var G__35726 = count__35712;
var G__35727 = (i__35713 + (1));
seq__35710 = G__35724;
chunk__35711 = G__35725;
count__35712 = G__35726;
i__35713 = G__35727;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35710);
if(temp__4657__auto__){
var seq__35710__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35710__$1)){
var c__31895__auto__ = cljs.core.chunk_first.call(null,seq__35710__$1);
var G__35728 = cljs.core.chunk_rest.call(null,seq__35710__$1);
var G__35729 = c__31895__auto__;
var G__35730 = cljs.core.count.call(null,c__31895__auto__);
var G__35731 = (0);
seq__35710 = G__35728;
chunk__35711 = G__35729;
count__35712 = G__35730;
i__35713 = G__35731;
continue;
} else {
var vec__35717 = cljs.core.first.call(null,seq__35710__$1);
var k = cljs.core.nth.call(null,vec__35717,(0),null);
var v = cljs.core.nth.call(null,vec__35717,(1),null);
f.call(null,v,k);

var G__35732 = cljs.core.next.call(null,seq__35710__$1);
var G__35733 = null;
var G__35734 = (0);
var G__35735 = (0);
seq__35710 = G__35732;
chunk__35711 = G__35733;
count__35712 = G__35734;
i__35713 = G__35735;
continue;
}
} else {
return null;
}
}
break;
}
});})(x35709,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x35709;
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
var args35736 = [];
var len__32159__auto___35742 = arguments.length;
var i__32160__auto___35743 = (0);
while(true){
if((i__32160__auto___35743 < len__32159__auto___35742)){
args35736.push((arguments[i__32160__auto___35743]));

var G__35744 = (i__32160__auto___35743 + (1));
i__32160__auto___35743 = G__35744;
continue;
} else {
}
break;
}

var G__35738 = args35736.length;
switch (G__35738) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35736.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit35739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit35739 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta35740){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta35740 = meta35740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit35739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35741,meta35740__$1){
var self__ = this;
var _35741__$1 = this;
return (new cognitect.transit.t_cognitect$transit35739(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta35740__$1));
});

cognitect.transit.t_cognitect$transit35739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35741){
var self__ = this;
var _35741__$1 = this;
return self__.meta35740;
});

cognitect.transit.t_cognitect$transit35739.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit35739.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit35739.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit35739.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit35739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta35740","meta35740",-212252897,null)], null);
});

cognitect.transit.t_cognitect$transit35739.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit35739.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit35739";

cognitect.transit.t_cognitect$transit35739.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cognitect.transit/t_cognitect$transit35739");
});

cognitect.transit.__GT_t_cognitect$transit35739 = (function cognitect$transit$__GT_t_cognitect$transit35739(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35740){
return (new cognitect.transit.t_cognitect$transit35739(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35740));
});

}

return (new cognitect.transit.t_cognitect$transit35739(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__31084__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1471077514849