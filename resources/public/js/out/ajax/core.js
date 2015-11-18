// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30028__auto__,k__30029__auto__){
var self__ = this;
var this__30028__auto____$1 = this;
return cljs.core._lookup.call(null,this__30028__auto____$1,k__30029__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30030__auto__,k35785,else__30031__auto__){
var self__ = this;
var this__30030__auto____$1 = this;
var G__35787 = (((k35785 instanceof cljs.core.Keyword))?k35785.fqn:null);
switch (G__35787) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35785,else__30031__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__35788,opts){
var self__ = this;
var map__35789 = p__35788;
var map__35789__$1 = ((((!((map__35789 == null)))?((((map__35789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35789):map__35789);
var request__$1 = cljs.core.get.call(null,map__35789__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__35791 = this;
var map__35791__$1 = ((((!((map__35791 == null)))?((((map__35791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35791):map__35791);
var request__$2 = cljs.core.get.call(null,map__35791__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__35793,xhrio){
var self__ = this;
var map__35794 = p__35793;
var map__35794__$1 = ((((!((map__35794 == null)))?((((map__35794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35794):map__35794);
var response__$1 = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__35796 = this;
var map__35796__$1 = ((((!((map__35796 == null)))?((((map__35796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35796):map__35796);
var response__$2 = cljs.core.get.call(null,map__35796__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30042__auto__,writer__30043__auto__,opts__30044__auto__){
var self__ = this;
var this__30042__auto____$1 = this;
var pr_pair__30045__auto__ = ((function (this__30042__auto____$1){
return (function (keyval__30046__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,cljs.core.pr_writer,""," ","",opts__30044__auto__,keyval__30046__auto__);
});})(this__30042__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,pr_pair__30045__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__30044__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35784){
var self__ = this;
var G__35784__$1 = this;
return (new cljs.core.RecordIter((0),G__35784__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30026__auto__){
var self__ = this;
var this__30026__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30022__auto__){
var self__ = this;
var this__30022__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30032__auto__){
var self__ = this;
var this__30032__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30023__auto__){
var self__ = this;
var this__30023__auto____$1 = this;
var h__29849__auto__ = self__.__hash;
if(!((h__29849__auto__ == null))){
return h__29849__auto__;
} else {
var h__29849__auto____$1 = cljs.core.hash_imap.call(null,this__30023__auto____$1);
self__.__hash = h__29849__auto____$1;

return h__29849__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30024__auto__,other__30025__auto__){
var self__ = this;
var this__30024__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29402__auto__ = other__30025__auto__;
if(cljs.core.truth_(and__29402__auto__)){
var and__29402__auto____$1 = (this__30024__auto____$1.constructor === other__30025__auto__.constructor);
if(and__29402__auto____$1){
return cljs.core.equiv_map.call(null,this__30024__auto____$1,other__30025__auto__);
} else {
return and__29402__auto____$1;
}
} else {
return and__29402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30037__auto__,k__30038__auto__){
var self__ = this;
var this__30037__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__30038__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30037__auto____$1),self__.__meta),k__30038__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30038__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30035__auto__,k__30036__auto__,G__35784){
var self__ = this;
var this__30035__auto____$1 = this;
var pred__35798 = cljs.core.keyword_identical_QMARK_;
var expr__35799 = k__30036__auto__;
if(cljs.core.truth_(pred__35798.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__35799))){
return (new ajax.core.StandardInterceptor(G__35784,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35798.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__35799))){
return (new ajax.core.StandardInterceptor(self__.name,G__35784,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35798.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__35799))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__35784,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30036__auto__,G__35784),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30040__auto__){
var self__ = this;
var this__30040__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30027__auto__,G__35784){
var self__ = this;
var this__30027__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__35784,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30033__auto__,entry__30034__auto__){
var self__ = this;
var this__30033__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30034__auto__)){
return cljs.core._assoc.call(null,this__30033__auto____$1,cljs.core._nth.call(null,entry__30034__auto__,(0)),cljs.core._nth.call(null,entry__30034__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30033__auto____$1,entry__30034__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__30062__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__30062__auto__,writer__30063__auto__){
return cljs.core._write.call(null,writer__30063__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__35786){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__35786),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__35786),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__35786),null,cljs.core.dissoc.call(null,G__35786,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__29414__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__35802,xhrio){
var map__35805 = p__35802;
var map__35805__$1 = ((((!((map__35805 == null)))?((((map__35805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35805):map__35805);
var description = cljs.core.get.call(null,map__35805__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__30479__auto__ = [];
var len__30472__auto___35811 = arguments.length;
var i__30473__auto___35812 = (0);
while(true){
if((i__30473__auto___35812 < len__30472__auto___35811)){
args__30479__auto__.push((arguments[i__30473__auto___35812]));

var G__35813 = (i__30473__auto___35812 + (1));
i__30473__auto___35812 = G__35813;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((3) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30480__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq35807){
var G__35808 = cljs.core.first.call(null,seq35807);
var seq35807__$1 = cljs.core.next.call(null,seq35807);
var G__35809 = cljs.core.first.call(null,seq35807__$1);
var seq35807__$2 = cljs.core.next.call(null,seq35807__$1);
var G__35810 = cljs.core.first.call(null,seq35807__$2);
var seq35807__$3 = cljs.core.next.call(null,seq35807__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__35808,G__35809,G__35810,seq35807__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__35814_SHARP_){
return [cljs.core.str(p1__35814_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30028__auto__,k__30029__auto__){
var self__ = this;
var this__30028__auto____$1 = this;
return cljs.core._lookup.call(null,this__30028__auto____$1,k__30029__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30030__auto__,k35817,else__30031__auto__){
var self__ = this;
var this__30030__auto____$1 = this;
var G__35819 = (((k35817 instanceof cljs.core.Keyword))?k35817.fqn:null);
switch (G__35819) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35817,else__30031__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__35820,request){
var self__ = this;
var map__35821 = p__35820;
var map__35821__$1 = ((((!((map__35821 == null)))?((((map__35821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35821):map__35821);
var content_type__$1 = cljs.core.get.call(null,map__35821__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__35823 = this;
var map__35823__$1 = ((((!((map__35823 == null)))?((((map__35823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35823):map__35823);
var content_type__$2 = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__35823,map__35823__$1,content_type__$2,map__35821,map__35821__$1,content_type__$1){
return (function (p1__35815_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__29414__auto__ = p1__35815_SHARP_;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__35823,map__35823__$1,content_type__$2,map__35821,map__35821__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__35825,xhrio){
var self__ = this;
var map__35826 = p__35825;
var map__35826__$1 = ((((!((map__35826 == null)))?((((map__35826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35826):map__35826);
var format = map__35826__$1;
var read__$1 = cljs.core.get.call(null,map__35826__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__35828 = this;
var map__35828__$1 = ((((!((map__35828 == null)))?((((map__35828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35828):map__35828);
var format__$1 = map__35828__$1;
var read__$2 = cljs.core.get.call(null,map__35828__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__35831 = status;
switch (G__35831) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e35832){if((e35832 instanceof Object)){
var e = e35832;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e35832;

}
}
}
}catch (e35830){if((e35830 instanceof Object)){
var e = e35830;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e35830;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30042__auto__,writer__30043__auto__,opts__30044__auto__){
var self__ = this;
var this__30042__auto____$1 = this;
var pr_pair__30045__auto__ = ((function (this__30042__auto____$1){
return (function (keyval__30046__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,cljs.core.pr_writer,""," ","",opts__30044__auto__,keyval__30046__auto__);
});})(this__30042__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,pr_pair__30045__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__30044__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35816){
var self__ = this;
var G__35816__$1 = this;
return (new cljs.core.RecordIter((0),G__35816__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30026__auto__){
var self__ = this;
var this__30026__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30022__auto__){
var self__ = this;
var this__30022__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30032__auto__){
var self__ = this;
var this__30032__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30023__auto__){
var self__ = this;
var this__30023__auto____$1 = this;
var h__29849__auto__ = self__.__hash;
if(!((h__29849__auto__ == null))){
return h__29849__auto__;
} else {
var h__29849__auto____$1 = cljs.core.hash_imap.call(null,this__30023__auto____$1);
self__.__hash = h__29849__auto____$1;

return h__29849__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30024__auto__,other__30025__auto__){
var self__ = this;
var this__30024__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29402__auto__ = other__30025__auto__;
if(cljs.core.truth_(and__29402__auto__)){
var and__29402__auto____$1 = (this__30024__auto____$1.constructor === other__30025__auto__.constructor);
if(and__29402__auto____$1){
return cljs.core.equiv_map.call(null,this__30024__auto____$1,other__30025__auto__);
} else {
return and__29402__auto____$1;
}
} else {
return and__29402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30037__auto__,k__30038__auto__){
var self__ = this;
var this__30037__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__30038__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30037__auto____$1),self__.__meta),k__30038__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30038__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30035__auto__,k__30036__auto__,G__35816){
var self__ = this;
var this__30035__auto____$1 = this;
var pred__35833 = cljs.core.keyword_identical_QMARK_;
var expr__35834 = k__30036__auto__;
if(cljs.core.truth_(pred__35833.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__35834))){
return (new ajax.core.ResponseFormat(G__35816,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35833.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__35834))){
return (new ajax.core.ResponseFormat(self__.read,G__35816,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35833.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__35834))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__35816,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30036__auto__,G__35816),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30040__auto__){
var self__ = this;
var this__30040__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30027__auto__,G__35816){
var self__ = this;
var this__30027__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__35816,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30033__auto__,entry__30034__auto__){
var self__ = this;
var this__30033__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30034__auto__)){
return cljs.core._assoc.call(null,this__30033__auto____$1,cljs.core._nth.call(null,entry__30034__auto__,(0)),cljs.core._nth.call(null,entry__30034__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30033__auto____$1,entry__30034__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__30062__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__30062__auto__,writer__30063__auto__){
return cljs.core._write.call(null,writer__30063__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__35818){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__35818),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__35818),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__35818),null,cljs.core.dissoc.call(null,G__35818,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args35838 = [];
var len__30472__auto___35841 = arguments.length;
var i__30473__auto___35842 = (0);
while(true){
if((i__30473__auto___35842 < len__30472__auto___35841)){
args35838.push((arguments[i__30473__auto___35842]));

var G__35843 = (i__30473__auto___35842 + (1));
i__30473__auto___35842 = G__35843;
continue;
} else {
}
break;
}

var G__35840 = args35838.length;
switch (G__35840) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35838.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args35845 = [];
var len__30472__auto___35852 = arguments.length;
var i__30473__auto___35853 = (0);
while(true){
if((i__30473__auto___35853 < len__30472__auto___35852)){
args35845.push((arguments[i__30473__auto___35853]));

var G__35854 = (i__30473__auto___35853 + (1));
i__30473__auto___35853 = G__35854;
continue;
} else {
}
break;
}

var G__35847 = args35845.length;
switch (G__35847) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35845.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__35848){
var vec__35849 = p__35848;
var key = cljs.core.nth.call(null,vec__35849,(0),null);
var value = cljs.core.nth.call(null,vec__35849,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__35850){
var vec__35851 = p__35850;
var key = cljs.core.nth.call(null,vec__35851,(0),null);
var value = cljs.core.nth.call(null,vec__35851,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__35858){
var vec__35859 = p__35858;
var k = cljs.core.nth.call(null,vec__35859,(0),null);
var v = cljs.core.nth.call(null,vec__35859,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30028__auto__,k__30029__auto__){
var self__ = this;
var this__30028__auto____$1 = this;
return cljs.core._lookup.call(null,this__30028__auto____$1,k__30029__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30030__auto__,k35862,else__30031__auto__){
var self__ = this;
var this__30030__auto____$1 = this;
var G__35864 = k35862;
switch (G__35864) {
default:
return cljs.core.get.call(null,self__.__extmap,k35862,else__30031__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__35865){
var self__ = this;
var map__35866 = p__35865;
var map__35866__$1 = ((((!((map__35866 == null)))?((((map__35866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35866):map__35866);
var request = map__35866__$1;
var method = cljs.core.get.call(null,map__35866__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__35866,map__35866__$1,request,method){
return (function (p1__35860_SHARP_){
return ajax.core.uri_with_params.call(null,p1__35860_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__35866,map__35866__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30042__auto__,writer__30043__auto__,opts__30044__auto__){
var self__ = this;
var this__30042__auto____$1 = this;
var pr_pair__30045__auto__ = ((function (this__30042__auto____$1){
return (function (keyval__30046__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,cljs.core.pr_writer,""," ","",opts__30044__auto__,keyval__30046__auto__);
});})(this__30042__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,pr_pair__30045__auto__,"#ajax.core.ProcessGet{",", ","}",opts__30044__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35861){
var self__ = this;
var G__35861__$1 = this;
return (new cljs.core.RecordIter((0),G__35861__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30026__auto__){
var self__ = this;
var this__30026__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30022__auto__){
var self__ = this;
var this__30022__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30032__auto__){
var self__ = this;
var this__30032__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30023__auto__){
var self__ = this;
var this__30023__auto____$1 = this;
var h__29849__auto__ = self__.__hash;
if(!((h__29849__auto__ == null))){
return h__29849__auto__;
} else {
var h__29849__auto____$1 = cljs.core.hash_imap.call(null,this__30023__auto____$1);
self__.__hash = h__29849__auto____$1;

return h__29849__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30024__auto__,other__30025__auto__){
var self__ = this;
var this__30024__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29402__auto__ = other__30025__auto__;
if(cljs.core.truth_(and__29402__auto__)){
var and__29402__auto____$1 = (this__30024__auto____$1.constructor === other__30025__auto__.constructor);
if(and__29402__auto____$1){
return cljs.core.equiv_map.call(null,this__30024__auto____$1,other__30025__auto__);
} else {
return and__29402__auto____$1;
}
} else {
return and__29402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30037__auto__,k__30038__auto__){
var self__ = this;
var this__30037__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30038__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30037__auto____$1),self__.__meta),k__30038__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30038__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30035__auto__,k__30036__auto__,G__35861){
var self__ = this;
var this__30035__auto____$1 = this;
var pred__35868 = cljs.core.keyword_identical_QMARK_;
var expr__35869 = k__30036__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30036__auto__,G__35861),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30040__auto__){
var self__ = this;
var this__30040__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30027__auto__,G__35861){
var self__ = this;
var this__30027__auto____$1 = this;
return (new ajax.core.ProcessGet(G__35861,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30033__auto__,entry__30034__auto__){
var self__ = this;
var this__30033__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30034__auto__)){
return cljs.core._assoc.call(null,this__30033__auto____$1,cljs.core._nth.call(null,entry__30034__auto__,(0)),cljs.core._nth.call(null,entry__30034__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30033__auto____$1,entry__30034__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__30062__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__30062__auto__,writer__30063__auto__){
return cljs.core._write.call(null,writer__30063__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__35863){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__35863),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30028__auto__,k__30029__auto__){
var self__ = this;
var this__30028__auto____$1 = this;
return cljs.core._lookup.call(null,this__30028__auto____$1,k__30029__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30030__auto__,k35873,else__30031__auto__){
var self__ = this;
var this__30030__auto____$1 = this;
var G__35875 = k35873;
switch (G__35875) {
default:
return cljs.core.get.call(null,self__.__extmap,k35873,else__30031__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__35876){
var self__ = this;
var map__35877 = p__35876;
var map__35877__$1 = ((((!((map__35877 == null)))?((((map__35877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35877):map__35877);
var request = map__35877__$1;
var body = cljs.core.get.call(null,map__35877__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__35877__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30042__auto__,writer__30043__auto__,opts__30044__auto__){
var self__ = this;
var this__30042__auto____$1 = this;
var pr_pair__30045__auto__ = ((function (this__30042__auto____$1){
return (function (keyval__30046__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,cljs.core.pr_writer,""," ","",opts__30044__auto__,keyval__30046__auto__);
});})(this__30042__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,pr_pair__30045__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__30044__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35872){
var self__ = this;
var G__35872__$1 = this;
return (new cljs.core.RecordIter((0),G__35872__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30026__auto__){
var self__ = this;
var this__30026__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30022__auto__){
var self__ = this;
var this__30022__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30032__auto__){
var self__ = this;
var this__30032__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30023__auto__){
var self__ = this;
var this__30023__auto____$1 = this;
var h__29849__auto__ = self__.__hash;
if(!((h__29849__auto__ == null))){
return h__29849__auto__;
} else {
var h__29849__auto____$1 = cljs.core.hash_imap.call(null,this__30023__auto____$1);
self__.__hash = h__29849__auto____$1;

return h__29849__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30024__auto__,other__30025__auto__){
var self__ = this;
var this__30024__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29402__auto__ = other__30025__auto__;
if(cljs.core.truth_(and__29402__auto__)){
var and__29402__auto____$1 = (this__30024__auto____$1.constructor === other__30025__auto__.constructor);
if(and__29402__auto____$1){
return cljs.core.equiv_map.call(null,this__30024__auto____$1,other__30025__auto__);
} else {
return and__29402__auto____$1;
}
} else {
return and__29402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30037__auto__,k__30038__auto__){
var self__ = this;
var this__30037__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30038__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30037__auto____$1),self__.__meta),k__30038__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30038__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30035__auto__,k__30036__auto__,G__35872){
var self__ = this;
var this__30035__auto____$1 = this;
var pred__35879 = cljs.core.keyword_identical_QMARK_;
var expr__35880 = k__30036__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30036__auto__,G__35872),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30040__auto__){
var self__ = this;
var this__30040__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30027__auto__,G__35872){
var self__ = this;
var this__30027__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__35872,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30033__auto__,entry__30034__auto__){
var self__ = this;
var this__30033__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30034__auto__)){
return cljs.core._assoc.call(null,this__30033__auto____$1,cljs.core._nth.call(null,entry__30034__auto__,(0)),cljs.core._nth.call(null,entry__30034__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30033__auto____$1,entry__30034__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__30062__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__30062__auto__,writer__30063__auto__){
return cljs.core._write.call(null,writer__30063__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__35874){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__35874),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30028__auto__,k__30029__auto__){
var self__ = this;
var this__30028__auto____$1 = this;
return cljs.core._lookup.call(null,this__30028__auto____$1,k__30029__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30030__auto__,k35884,else__30031__auto__){
var self__ = this;
var this__30030__auto____$1 = this;
var G__35886 = k35884;
switch (G__35886) {
default:
return cljs.core.get.call(null,self__.__extmap,k35884,else__30031__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__35887){
var self__ = this;
var map__35888 = p__35887;
var map__35888__$1 = ((((!((map__35888 == null)))?((((map__35888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35888):map__35888);
var request = map__35888__$1;
var uri = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__35890 = ajax.core.get_request_format.call(null,format);
var map__35890__$1 = ((((!((map__35890 == null)))?((((map__35890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35890):map__35890);
var write = cljs.core.get.call(null,map__35890__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__35890__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__29414__auto__ = headers;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30042__auto__,writer__30043__auto__,opts__30044__auto__){
var self__ = this;
var this__30042__auto____$1 = this;
var pr_pair__30045__auto__ = ((function (this__30042__auto____$1){
return (function (keyval__30046__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,cljs.core.pr_writer,""," ","",opts__30044__auto__,keyval__30046__auto__);
});})(this__30042__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30043__auto__,pr_pair__30045__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__30044__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35883){
var self__ = this;
var G__35883__$1 = this;
return (new cljs.core.RecordIter((0),G__35883__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30026__auto__){
var self__ = this;
var this__30026__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30022__auto__){
var self__ = this;
var this__30022__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30032__auto__){
var self__ = this;
var this__30032__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30023__auto__){
var self__ = this;
var this__30023__auto____$1 = this;
var h__29849__auto__ = self__.__hash;
if(!((h__29849__auto__ == null))){
return h__29849__auto__;
} else {
var h__29849__auto____$1 = cljs.core.hash_imap.call(null,this__30023__auto____$1);
self__.__hash = h__29849__auto____$1;

return h__29849__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30024__auto__,other__30025__auto__){
var self__ = this;
var this__30024__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29402__auto__ = other__30025__auto__;
if(cljs.core.truth_(and__29402__auto__)){
var and__29402__auto____$1 = (this__30024__auto____$1.constructor === other__30025__auto__.constructor);
if(and__29402__auto____$1){
return cljs.core.equiv_map.call(null,this__30024__auto____$1,other__30025__auto__);
} else {
return and__29402__auto____$1;
}
} else {
return and__29402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30037__auto__,k__30038__auto__){
var self__ = this;
var this__30037__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30038__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30037__auto____$1),self__.__meta),k__30038__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30038__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30035__auto__,k__30036__auto__,G__35883){
var self__ = this;
var this__30035__auto____$1 = this;
var pred__35892 = cljs.core.keyword_identical_QMARK_;
var expr__35893 = k__30036__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30036__auto__,G__35883),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30040__auto__){
var self__ = this;
var this__30040__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30027__auto__,G__35883){
var self__ = this;
var this__30027__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__35883,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30033__auto__,entry__30034__auto__){
var self__ = this;
var this__30033__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30034__auto__)){
return cljs.core._assoc.call(null,this__30033__auto____$1,cljs.core._nth.call(null,entry__30034__auto__,(0)),cljs.core._nth.call(null,entry__30034__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30033__auto____$1,entry__30034__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__30062__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__30062__auto__,writer__30063__auto__){
return cljs.core._write.call(null,writer__30063__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__35885){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__35885),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__35896){
var map__35899 = p__35896;
var map__35899__$1 = ((((!((map__35899 == null)))?((((map__35899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35899):map__35899);
var type = cljs.core.get.call(null,map__35899__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__29414__auto__ = type;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__29414__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args35901 = [];
var len__30472__auto___35904 = arguments.length;
var i__30473__auto___35905 = (0);
while(true){
if((i__30473__auto___35905 < len__30472__auto___35904)){
args35901.push((arguments[i__30473__auto___35905]));

var G__35906 = (i__30473__auto___35905 + (1));
i__30473__auto___35905 = G__35906;
continue;
} else {
}
break;
}

var G__35903 = args35901.length;
switch (G__35903) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35901.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__29414__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args35908 = [];
var len__30472__auto___35911 = arguments.length;
var i__30473__auto___35912 = (0);
while(true){
if((i__30473__auto___35912 < len__30472__auto___35911)){
args35908.push((arguments[i__30473__auto___35912]));

var G__35913 = (i__30473__auto___35912 + (1));
i__30473__auto___35912 = G__35913;
continue;
} else {
}
break;
}

var G__35910 = args35908.length;
switch (G__35910) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35908.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args35915 = [];
var len__30472__auto___35918 = arguments.length;
var i__30473__auto___35919 = (0);
while(true){
if((i__30473__auto___35919 < len__30472__auto___35918)){
args35915.push((arguments[i__30473__auto___35919]));

var G__35920 = (i__30473__auto___35919 + (1));
i__30473__auto___35919 = G__35920;
continue;
} else {
}
break;
}

var G__35917 = args35915.length;
switch (G__35917) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35915.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__29402__auto__ = prefix;
if(cljs.core.truth_(and__29402__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__29402__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args35922 = [];
var len__30472__auto___35925 = arguments.length;
var i__30473__auto___35926 = (0);
while(true){
if((i__30473__auto___35926 < len__30472__auto___35925)){
args35922.push((arguments[i__30473__auto___35926]));

var G__35927 = (i__30473__auto___35926 + (1));
i__30473__auto___35926 = G__35927;
continue;
} else {
}
break;
}

var G__35924 = args35922.length;
switch (G__35924) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35922.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args35929 = [];
var len__30472__auto___35935 = arguments.length;
var i__30473__auto___35936 = (0);
while(true){
if((i__30473__auto___35936 < len__30472__auto___35935)){
args35929.push((arguments[i__30473__auto___35936]));

var G__35937 = (i__30473__auto___35936 + (1));
i__30473__auto___35936 = G__35937;
continue;
} else {
}
break;
}

var G__35931 = args35929.length;
switch (G__35931) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35929.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__35932){
var map__35933 = p__35932;
var map__35933__$1 = ((((!((map__35933 == null)))?((((map__35933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35933):map__35933);
var prefix = cljs.core.get.call(null,map__35933__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__35933__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__35933__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args35939 = [];
var len__30472__auto___35942 = arguments.length;
var i__30473__auto___35943 = (0);
while(true){
if((i__30473__auto___35943 < len__30472__auto___35942)){
args35939.push((arguments[i__30473__auto___35943]));

var G__35944 = (i__30473__auto___35943 + (1));
i__30473__auto___35943 = G__35944;
continue;
} else {
}
break;
}

var G__35941 = args35939.length;
switch (G__35941) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35939.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args35946 = [];
var len__30472__auto___35949 = arguments.length;
var i__30473__auto___35950 = (0);
while(true){
if((i__30473__auto___35950 < len__30472__auto___35949)){
args35946.push((arguments[i__30473__auto___35950]));

var G__35951 = (i__30473__auto___35950 + (1));
i__30473__auto___35950 = G__35951;
continue;
} else {
}
break;
}

var G__35948 = args35946.length;
switch (G__35948) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35946.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args35953 = [];
var len__30472__auto___35956 = arguments.length;
var i__30473__auto___35957 = (0);
while(true){
if((i__30473__auto___35957 < len__30472__auto___35956)){
args35953.push((arguments[i__30473__auto___35957]));

var G__35958 = (i__30473__auto___35957 + (1));
i__30473__auto___35957 = G__35958;
continue;
} else {
}
break;
}

var G__35955 = args35953.length;
switch (G__35955) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35953.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args35960 = [];
var len__30472__auto___35963 = arguments.length;
var i__30473__auto___35964 = (0);
while(true){
if((i__30473__auto___35964 < len__30472__auto___35963)){
args35960.push((arguments[i__30473__auto___35964]));

var G__35965 = (i__30473__auto___35964 + (1));
i__30473__auto___35964 = G__35965;
continue;
} else {
}
break;
}

var G__35962 = args35960.length;
switch (G__35962) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35960.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__35967){
var map__35970 = p__35967;
var map__35970__$1 = ((((!((map__35970 == null)))?((((map__35970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35970):map__35970);
var request = map__35970__$1;
var response_format = cljs.core.get.call(null,map__35970__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args35972 = [];
var len__30472__auto___35975 = arguments.length;
var i__30473__auto___35976 = (0);
while(true){
if((i__30473__auto___35976 < len__30472__auto___35975)){
args35972.push((arguments[i__30473__auto___35976]));

var G__35977 = (i__30473__auto___35976 + (1));
i__30473__auto___35976 = G__35977;
continue;
} else {
}
break;
}

var G__35974 = args35972.length;
switch (G__35974) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35972.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__35979){
var map__35982 = p__35979;
var map__35982__$1 = ((((!((map__35982 == null)))?((((map__35982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35982):map__35982);
var request = map__35982__$1;
var response_format = cljs.core.get.call(null,map__35982__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args35984 = [];
var len__30472__auto___35987 = arguments.length;
var i__30473__auto___35988 = (0);
while(true){
if((i__30473__auto___35988 < len__30472__auto___35987)){
args35984.push((arguments[i__30473__auto___35988]));

var G__35989 = (i__30473__auto___35988 + (1));
i__30473__auto___35988 = G__35989;
continue;
} else {
}
break;
}

var G__35986 = args35984.length;
switch (G__35986) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35984.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__35991){
var map__35994 = p__35991;
var map__35994__$1 = ((((!((map__35994 == null)))?((((map__35994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35994):map__35994);
var opts = map__35994__$1;
var response_format = cljs.core.get.call(null,map__35994__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args35996 = [];
var len__30472__auto___35999 = arguments.length;
var i__30473__auto___36000 = (0);
while(true){
if((i__30473__auto___36000 < len__30472__auto___35999)){
args35996.push((arguments[i__30473__auto___36000]));

var G__36001 = (i__30473__auto___36000 + (1));
i__30473__auto___36000 = G__36001;
continue;
} else {
}
break;
}

var G__35998 = args35996.length;
switch (G__35998) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35996.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__36003){
var map__36006 = p__36003;
var map__36006__$1 = ((((!((map__36006 == null)))?((((map__36006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36006):map__36006);
var handler = cljs.core.get.call(null,map__36006__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__36008_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__29414__auto__ = p1__36008_SHARP_;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__36009){
var map__36012 = p__36009;
var map__36012__$1 = ((((!((map__36012 == null)))?((((map__36012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36012):map__36012);
var request = map__36012__$1;
var interceptors = cljs.core.get.call(null,map__36012__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__29414__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__36015 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__36015) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__36018 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__36018) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__36020_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__36020_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args36021 = [];
var len__30472__auto___36034 = arguments.length;
var i__30473__auto___36035 = (0);
while(true){
if((i__30473__auto___36035 < len__30472__auto___36034)){
args36021.push((arguments[i__30473__auto___36035]));

var G__36036 = (i__30473__auto___36035 + (1));
i__30473__auto___36035 = G__36036;
continue;
} else {
}
break;
}

var G__36023 = args36021.length;
switch (G__36023) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36021.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__36024,p__36025){
var map__36026 = p__36024;
var map__36026__$1 = ((((!((map__36026 == null)))?((((map__36026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36026):map__36026);
var handler = cljs.core.get.call(null,map__36026__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__36026__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__36026__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__36027 = p__36025;
var ok = cljs.core.nth.call(null,vec__36027,(0),null);
var result = cljs.core.nth.call(null,vec__36027,(1),null);
var temp__4423__auto___36038 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___36038)){
var h_36039 = temp__4423__auto___36038;
h_36039.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__36029){
var map__36030 = p__36029;
var map__36030__$1 = ((((!((map__36030 == null)))?((((map__36030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36030):map__36030);
var handler = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__36030,map__36030__$1,handler,error_handler,finally$){
return (function (p__36032){
var vec__36033 = p__36032;
var ok = cljs.core.nth.call(null,vec__36033,(0),null);
var result = cljs.core.nth.call(null,vec__36033,(1),null);
var temp__4423__auto___36040 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___36040)){
var h_36041 = temp__4423__auto___36040;
h_36041.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__36030,map__36030__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__36042){
var map__36045 = p__36042;
var map__36045__$1 = ((((!((map__36045 == null)))?((((map__36045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36045):map__36045);
var opts = map__36045__$1;
var method = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__36045__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__29414__auto__ = format;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__30479__auto__ = [];
var len__30472__auto___36049 = arguments.length;
var i__30473__auto___36050 = (0);
while(true){
if((i__30473__auto___36050 < len__30472__auto___36049)){
args__30479__auto__.push((arguments[i__30473__auto___36050]));

var G__36051 = (i__30473__auto___36050 + (1));
i__30473__auto___36050 = G__36051;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31524__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__31524__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31524__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq36047){
var G__36048 = cljs.core.first.call(null,seq36047);
var seq36047__$1 = cljs.core.next.call(null,seq36047);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__36048,seq36047__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__30479__auto__ = [];
var len__30472__auto___36054 = arguments.length;
var i__30473__auto___36055 = (0);
while(true){
if((i__30473__auto___36055 < len__30472__auto___36054)){
args__30479__auto__.push((arguments[i__30473__auto___36055]));

var G__36056 = (i__30473__auto___36055 + (1));
i__30473__auto___36055 = G__36056;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31524__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__31524__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31524__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq36052){
var G__36053 = cljs.core.first.call(null,seq36052);
var seq36052__$1 = cljs.core.next.call(null,seq36052);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__36053,seq36052__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__30479__auto__ = [];
var len__30472__auto___36059 = arguments.length;
var i__30473__auto___36060 = (0);
while(true){
if((i__30473__auto___36060 < len__30472__auto___36059)){
args__30479__auto__.push((arguments[i__30473__auto___36060]));

var G__36061 = (i__30473__auto___36060 + (1));
i__30473__auto___36060 = G__36061;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31524__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__31524__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31524__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq36057){
var G__36058 = cljs.core.first.call(null,seq36057);
var seq36057__$1 = cljs.core.next.call(null,seq36057);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__36058,seq36057__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__30479__auto__ = [];
var len__30472__auto___36064 = arguments.length;
var i__30473__auto___36065 = (0);
while(true){
if((i__30473__auto___36065 < len__30472__auto___36064)){
args__30479__auto__.push((arguments[i__30473__auto___36065]));

var G__36066 = (i__30473__auto___36065 + (1));
i__30473__auto___36065 = G__36066;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31524__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__31524__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31524__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq36062){
var G__36063 = cljs.core.first.call(null,seq36062);
var seq36062__$1 = cljs.core.next.call(null,seq36062);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__36063,seq36062__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__30479__auto__ = [];
var len__30472__auto___36069 = arguments.length;
var i__30473__auto___36070 = (0);
while(true){
if((i__30473__auto___36070 < len__30472__auto___36069)){
args__30479__auto__.push((arguments[i__30473__auto___36070]));

var G__36071 = (i__30473__auto___36070 + (1));
i__30473__auto___36070 = G__36071;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31524__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__31524__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31524__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq36067){
var G__36068 = cljs.core.first.call(null,seq36067);
var seq36067__$1 = cljs.core.next.call(null,seq36067);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__36068,seq36067__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__30479__auto__ = [];
var len__30472__auto___36074 = arguments.length;
var i__30473__auto___36075 = (0);
while(true){
if((i__30473__auto___36075 < len__30472__auto___36074)){
args__30479__auto__.push((arguments[i__30473__auto___36075]));

var G__36076 = (i__30473__auto___36075 + (1));
i__30473__auto___36075 = G__36076;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31524__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__31524__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31524__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq36072){
var G__36073 = cljs.core.first.call(null,seq36072);
var seq36072__$1 = cljs.core.next.call(null,seq36072);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__36073,seq36072__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__30479__auto__ = [];
var len__30472__auto___36079 = arguments.length;
var i__30473__auto___36080 = (0);
while(true){
if((i__30473__auto___36080 < len__30472__auto___36079)){
args__30479__auto__.push((arguments[i__30473__auto___36080]));

var G__36081 = (i__30473__auto___36080 + (1));
i__30473__auto___36080 = G__36081;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31524__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__31524__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31524__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq36077){
var G__36078 = cljs.core.first.call(null,seq36077);
var seq36077__$1 = cljs.core.next.call(null,seq36077);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__36078,seq36077__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__30479__auto__ = [];
var len__30472__auto___36084 = arguments.length;
var i__30473__auto___36085 = (0);
while(true){
if((i__30473__auto___36085 < len__30472__auto___36084)){
args__30479__auto__.push((arguments[i__30473__auto___36085]));

var G__36086 = (i__30473__auto___36085 + (1));
i__30473__auto___36085 = G__36086;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31524__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__31524__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31524__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq36082){
var G__36083 = cljs.core.first.call(null,seq36082);
var seq36082__$1 = cljs.core.next.call(null,seq36082);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__36083,seq36082__$1);
});

//# sourceMappingURL=core.js.map