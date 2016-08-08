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
var seq__32738_32742 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__32739_32743 = null;
var count__32740_32744 = (0);
var i__32741_32745 = (0);
while(true){
if((i__32741_32745 < count__32740_32744)){
var k_32746 = cljs.core._nth.call(null,chunk__32739_32743,i__32741_32745);
var v_32747 = (b[k_32746]);
(a[k_32746] = v_32747);

var G__32748 = seq__32738_32742;
var G__32749 = chunk__32739_32743;
var G__32750 = count__32740_32744;
var G__32751 = (i__32741_32745 + (1));
seq__32738_32742 = G__32748;
chunk__32739_32743 = G__32749;
count__32740_32744 = G__32750;
i__32741_32745 = G__32751;
continue;
} else {
var temp__4657__auto___32752 = cljs.core.seq.call(null,seq__32738_32742);
if(temp__4657__auto___32752){
var seq__32738_32753__$1 = temp__4657__auto___32752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32738_32753__$1)){
var c__29090__auto___32754 = cljs.core.chunk_first.call(null,seq__32738_32753__$1);
var G__32755 = cljs.core.chunk_rest.call(null,seq__32738_32753__$1);
var G__32756 = c__29090__auto___32754;
var G__32757 = cljs.core.count.call(null,c__29090__auto___32754);
var G__32758 = (0);
seq__32738_32742 = G__32755;
chunk__32739_32743 = G__32756;
count__32740_32744 = G__32757;
i__32741_32745 = G__32758;
continue;
} else {
var k_32759 = cljs.core.first.call(null,seq__32738_32753__$1);
var v_32760 = (b[k_32759]);
(a[k_32759] = v_32760);

var G__32761 = cljs.core.next.call(null,seq__32738_32753__$1);
var G__32762 = null;
var G__32763 = (0);
var G__32764 = (0);
seq__32738_32742 = G__32761;
chunk__32739_32743 = G__32762;
count__32740_32744 = G__32763;
i__32741_32745 = G__32764;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/VectorBuilder");
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
var args32765 = [];
var len__29354__auto___32768 = arguments.length;
var i__29355__auto___32769 = (0);
while(true){
if((i__29355__auto___32769 < len__29354__auto___32768)){
args32765.push((arguments[i__29355__auto___32769]));

var G__32770 = (i__29355__auto___32769 + (1));
i__29355__auto___32769 = G__32770;
continue;
} else {
}
break;
}

var G__32767 = args32765.length;
switch (G__32767) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32765.length)].join('')));

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
var G__32772 = (i + (2));
var G__32773 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__32772;
ret = G__32773;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/SymbolHandler");
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
var seq__32774_32778 = cljs.core.seq.call(null,v);
var chunk__32775_32779 = null;
var count__32776_32780 = (0);
var i__32777_32781 = (0);
while(true){
if((i__32777_32781 < count__32776_32780)){
var x_32782 = cljs.core._nth.call(null,chunk__32775_32779,i__32777_32781);
ret.push(x_32782);

var G__32783 = seq__32774_32778;
var G__32784 = chunk__32775_32779;
var G__32785 = count__32776_32780;
var G__32786 = (i__32777_32781 + (1));
seq__32774_32778 = G__32783;
chunk__32775_32779 = G__32784;
count__32776_32780 = G__32785;
i__32777_32781 = G__32786;
continue;
} else {
var temp__4657__auto___32787 = cljs.core.seq.call(null,seq__32774_32778);
if(temp__4657__auto___32787){
var seq__32774_32788__$1 = temp__4657__auto___32787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32774_32788__$1)){
var c__29090__auto___32789 = cljs.core.chunk_first.call(null,seq__32774_32788__$1);
var G__32790 = cljs.core.chunk_rest.call(null,seq__32774_32788__$1);
var G__32791 = c__29090__auto___32789;
var G__32792 = cljs.core.count.call(null,c__29090__auto___32789);
var G__32793 = (0);
seq__32774_32778 = G__32790;
chunk__32775_32779 = G__32791;
count__32776_32780 = G__32792;
i__32777_32781 = G__32793;
continue;
} else {
var x_32794 = cljs.core.first.call(null,seq__32774_32788__$1);
ret.push(x_32794);

var G__32795 = cljs.core.next.call(null,seq__32774_32788__$1);
var G__32796 = null;
var G__32797 = (0);
var G__32798 = (0);
seq__32774_32778 = G__32795;
chunk__32775_32779 = G__32796;
count__32776_32780 = G__32797;
i__32777_32781 = G__32798;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/MapHandler");
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
var seq__32799_32803 = cljs.core.seq.call(null,v);
var chunk__32800_32804 = null;
var count__32801_32805 = (0);
var i__32802_32806 = (0);
while(true){
if((i__32802_32806 < count__32801_32805)){
var x_32807 = cljs.core._nth.call(null,chunk__32800_32804,i__32802_32806);
ret.push(x_32807);

var G__32808 = seq__32799_32803;
var G__32809 = chunk__32800_32804;
var G__32810 = count__32801_32805;
var G__32811 = (i__32802_32806 + (1));
seq__32799_32803 = G__32808;
chunk__32800_32804 = G__32809;
count__32801_32805 = G__32810;
i__32802_32806 = G__32811;
continue;
} else {
var temp__4657__auto___32812 = cljs.core.seq.call(null,seq__32799_32803);
if(temp__4657__auto___32812){
var seq__32799_32813__$1 = temp__4657__auto___32812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32799_32813__$1)){
var c__29090__auto___32814 = cljs.core.chunk_first.call(null,seq__32799_32813__$1);
var G__32815 = cljs.core.chunk_rest.call(null,seq__32799_32813__$1);
var G__32816 = c__29090__auto___32814;
var G__32817 = cljs.core.count.call(null,c__29090__auto___32814);
var G__32818 = (0);
seq__32799_32803 = G__32815;
chunk__32800_32804 = G__32816;
count__32801_32805 = G__32817;
i__32802_32806 = G__32818;
continue;
} else {
var x_32819 = cljs.core.first.call(null,seq__32799_32813__$1);
ret.push(x_32819);

var G__32820 = cljs.core.next.call(null,seq__32799_32813__$1);
var G__32821 = null;
var G__32822 = (0);
var G__32823 = (0);
seq__32799_32803 = G__32820;
chunk__32800_32804 = G__32821;
count__32801_32805 = G__32822;
i__32802_32806 = G__32823;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/SetHandler");
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
var seq__32824_32828 = cljs.core.seq.call(null,v);
var chunk__32825_32829 = null;
var count__32826_32830 = (0);
var i__32827_32831 = (0);
while(true){
if((i__32827_32831 < count__32826_32830)){
var x_32832 = cljs.core._nth.call(null,chunk__32825_32829,i__32827_32831);
ret.push(x_32832);

var G__32833 = seq__32824_32828;
var G__32834 = chunk__32825_32829;
var G__32835 = count__32826_32830;
var G__32836 = (i__32827_32831 + (1));
seq__32824_32828 = G__32833;
chunk__32825_32829 = G__32834;
count__32826_32830 = G__32835;
i__32827_32831 = G__32836;
continue;
} else {
var temp__4657__auto___32837 = cljs.core.seq.call(null,seq__32824_32828);
if(temp__4657__auto___32837){
var seq__32824_32838__$1 = temp__4657__auto___32837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32824_32838__$1)){
var c__29090__auto___32839 = cljs.core.chunk_first.call(null,seq__32824_32838__$1);
var G__32840 = cljs.core.chunk_rest.call(null,seq__32824_32838__$1);
var G__32841 = c__29090__auto___32839;
var G__32842 = cljs.core.count.call(null,c__29090__auto___32839);
var G__32843 = (0);
seq__32824_32828 = G__32840;
chunk__32825_32829 = G__32841;
count__32826_32830 = G__32842;
i__32827_32831 = G__32843;
continue;
} else {
var x_32844 = cljs.core.first.call(null,seq__32824_32838__$1);
ret.push(x_32844);

var G__32845 = cljs.core.next.call(null,seq__32824_32838__$1);
var G__32846 = null;
var G__32847 = (0);
var G__32848 = (0);
seq__32824_32828 = G__32845;
chunk__32825_32829 = G__32846;
count__32826_32830 = G__32847;
i__32827_32831 = G__32848;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/UUIDHandler");
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
var args32849 = [];
var len__29354__auto___32864 = arguments.length;
var i__29355__auto___32865 = (0);
while(true){
if((i__29355__auto___32865 < len__29354__auto___32864)){
args32849.push((arguments[i__29355__auto___32865]));

var G__32866 = (i__29355__auto___32865 + (1));
i__29355__auto___32865 = G__32866;
continue;
} else {
}
break;
}

var G__32851 = args32849.length;
switch (G__32851) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32849.length)].join('')));

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
var G__32852 = obj;
G__32852.push(kfn.call(null,k),vfn.call(null,v));

return G__32852;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x32853 = cljs.core.clone.call(null,handlers);
x32853.forEach = ((function (x32853,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__32854 = cljs.core.seq.call(null,coll);
var chunk__32855 = null;
var count__32856 = (0);
var i__32857 = (0);
while(true){
if((i__32857 < count__32856)){
var vec__32858 = cljs.core._nth.call(null,chunk__32855,i__32857);
var k = cljs.core.nth.call(null,vec__32858,(0),null);
var v = cljs.core.nth.call(null,vec__32858,(1),null);
f.call(null,v,k);

var G__32868 = seq__32854;
var G__32869 = chunk__32855;
var G__32870 = count__32856;
var G__32871 = (i__32857 + (1));
seq__32854 = G__32868;
chunk__32855 = G__32869;
count__32856 = G__32870;
i__32857 = G__32871;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32854);
if(temp__4657__auto__){
var seq__32854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32854__$1)){
var c__29090__auto__ = cljs.core.chunk_first.call(null,seq__32854__$1);
var G__32872 = cljs.core.chunk_rest.call(null,seq__32854__$1);
var G__32873 = c__29090__auto__;
var G__32874 = cljs.core.count.call(null,c__29090__auto__);
var G__32875 = (0);
seq__32854 = G__32872;
chunk__32855 = G__32873;
count__32856 = G__32874;
i__32857 = G__32875;
continue;
} else {
var vec__32861 = cljs.core.first.call(null,seq__32854__$1);
var k = cljs.core.nth.call(null,vec__32861,(0),null);
var v = cljs.core.nth.call(null,vec__32861,(1),null);
f.call(null,v,k);

var G__32876 = cljs.core.next.call(null,seq__32854__$1);
var G__32877 = null;
var G__32878 = (0);
var G__32879 = (0);
seq__32854 = G__32876;
chunk__32855 = G__32877;
count__32856 = G__32878;
i__32857 = G__32879;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32853,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x32853;
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
var args32880 = [];
var len__29354__auto___32886 = arguments.length;
var i__29355__auto___32887 = (0);
while(true){
if((i__29355__auto___32887 < len__29354__auto___32886)){
args32880.push((arguments[i__29355__auto___32887]));

var G__32888 = (i__29355__auto___32887 + (1));
i__29355__auto___32887 = G__32888;
continue;
} else {
}
break;
}

var G__32882 = args32880.length;
switch (G__32882) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32880.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit32883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit32883 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta32884){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta32884 = meta32884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit32883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32885,meta32884__$1){
var self__ = this;
var _32885__$1 = this;
return (new cognitect.transit.t_cognitect$transit32883(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta32884__$1));
});

cognitect.transit.t_cognitect$transit32883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32885){
var self__ = this;
var _32885__$1 = this;
return self__.meta32884;
});

cognitect.transit.t_cognitect$transit32883.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32883.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32883.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32883.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta32884","meta32884",-1275401594,null)], null);
});

cognitect.transit.t_cognitect$transit32883.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit32883.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit32883";

cognitect.transit.t_cognitect$transit32883.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cognitect.transit/t_cognitect$transit32883");
});

cognitect.transit.__GT_t_cognitect$transit32883 = (function cognitect$transit$__GT_t_cognitect$transit32883(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32884){
return (new cognitect.transit.t_cognitect$transit32883(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32884));
});

}

return (new cognitect.transit.t_cognitect$transit32883(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__28279__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1470645898920