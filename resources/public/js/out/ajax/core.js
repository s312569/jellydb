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
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30127__auto__,k__30128__auto__){
var self__ = this;
var this__30127__auto____$1 = this;
return cljs.core._lookup.call(null,this__30127__auto____$1,k__30128__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30129__auto__,k33643,else__30130__auto__){
var self__ = this;
var this__30129__auto____$1 = this;
var G__33645 = (((k33643 instanceof cljs.core.Keyword))?k33643.fqn:null);
switch (G__33645) {
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
return cljs.core.get.call(null,self__.__extmap,k33643,else__30130__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__33646,opts){
var self__ = this;
var map__33647 = p__33646;
var map__33647__$1 = ((((!((map__33647 == null)))?((((map__33647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33647):map__33647);
var request__$1 = cljs.core.get.call(null,map__33647__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__33649 = this;
var map__33649__$1 = ((((!((map__33649 == null)))?((((map__33649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33649):map__33649);
var request__$2 = cljs.core.get.call(null,map__33649__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__33651,xhrio){
var self__ = this;
var map__33652 = p__33651;
var map__33652__$1 = ((((!((map__33652 == null)))?((((map__33652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33652):map__33652);
var response__$1 = cljs.core.get.call(null,map__33652__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__33654 = this;
var map__33654__$1 = ((((!((map__33654 == null)))?((((map__33654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33654):map__33654);
var response__$2 = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30141__auto__,writer__30142__auto__,opts__30143__auto__){
var self__ = this;
var this__30141__auto____$1 = this;
var pr_pair__30144__auto__ = ((function (this__30141__auto____$1){
return (function (keyval__30145__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,cljs.core.pr_writer,""," ","",opts__30143__auto__,keyval__30145__auto__);
});})(this__30141__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,pr_pair__30144__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__30143__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33642){
var self__ = this;
var G__33642__$1 = this;
return (new cljs.core.RecordIter((0),G__33642__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30125__auto__){
var self__ = this;
var this__30125__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30121__auto__){
var self__ = this;
var this__30121__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30131__auto__){
var self__ = this;
var this__30131__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30122__auto__){
var self__ = this;
var this__30122__auto____$1 = this;
var h__29948__auto__ = self__.__hash;
if(!((h__29948__auto__ == null))){
return h__29948__auto__;
} else {
var h__29948__auto____$1 = cljs.core.hash_imap.call(null,this__30122__auto____$1);
self__.__hash = h__29948__auto____$1;

return h__29948__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30123__auto__,other__30124__auto__){
var self__ = this;
var this__30123__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29501__auto__ = other__30124__auto__;
if(cljs.core.truth_(and__29501__auto__)){
var and__29501__auto____$1 = (this__30123__auto____$1.constructor === other__30124__auto__.constructor);
if(and__29501__auto____$1){
return cljs.core.equiv_map.call(null,this__30123__auto____$1,other__30124__auto__);
} else {
return and__29501__auto____$1;
}
} else {
return and__29501__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30136__auto__,k__30137__auto__){
var self__ = this;
var this__30136__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__30137__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30136__auto____$1),self__.__meta),k__30137__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30137__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30134__auto__,k__30135__auto__,G__33642){
var self__ = this;
var this__30134__auto____$1 = this;
var pred__33656 = cljs.core.keyword_identical_QMARK_;
var expr__33657 = k__30135__auto__;
if(cljs.core.truth_(pred__33656.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__33657))){
return (new ajax.core.StandardInterceptor(G__33642,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33656.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__33657))){
return (new ajax.core.StandardInterceptor(self__.name,G__33642,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33656.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__33657))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__33642,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30135__auto__,G__33642),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30139__auto__){
var self__ = this;
var this__30139__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30126__auto__,G__33642){
var self__ = this;
var this__30126__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__33642,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30132__auto__,entry__30133__auto__){
var self__ = this;
var this__30132__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30133__auto__)){
return cljs.core._assoc.call(null,this__30132__auto____$1,cljs.core._nth.call(null,entry__30133__auto__,(0)),cljs.core._nth.call(null,entry__30133__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30132__auto____$1,entry__30133__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__30161__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__30161__auto__,writer__30162__auto__){
return cljs.core._write.call(null,writer__30162__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__33644){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__33644),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__33644),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__33644),null,cljs.core.dissoc.call(null,G__33644,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__29513__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__33660,xhrio){
var map__33663 = p__33660;
var map__33663__$1 = ((((!((map__33663 == null)))?((((map__33663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33663):map__33663);
var description = cljs.core.get.call(null,map__33663__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
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
var args__30578__auto__ = [];
var len__30571__auto___33669 = arguments.length;
var i__30572__auto___33670 = (0);
while(true){
if((i__30572__auto___33670 < len__30571__auto___33669)){
args__30578__auto__.push((arguments[i__30572__auto___33670]));

var G__33671 = (i__30572__auto___33670 + (1));
i__30572__auto___33670 = G__33671;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((3) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30579__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq33665){
var G__33666 = cljs.core.first.call(null,seq33665);
var seq33665__$1 = cljs.core.next.call(null,seq33665);
var G__33667 = cljs.core.first.call(null,seq33665__$1);
var seq33665__$2 = cljs.core.next.call(null,seq33665__$1);
var G__33668 = cljs.core.first.call(null,seq33665__$2);
var seq33665__$3 = cljs.core.next.call(null,seq33665__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__33666,G__33667,G__33668,seq33665__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__33672_SHARP_){
return [cljs.core.str(p1__33672_SHARP_),cljs.core.str("; charset=utf-8")].join('');
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
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30127__auto__,k__30128__auto__){
var self__ = this;
var this__30127__auto____$1 = this;
return cljs.core._lookup.call(null,this__30127__auto____$1,k__30128__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30129__auto__,k33675,else__30130__auto__){
var self__ = this;
var this__30129__auto____$1 = this;
var G__33677 = (((k33675 instanceof cljs.core.Keyword))?k33675.fqn:null);
switch (G__33677) {
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
return cljs.core.get.call(null,self__.__extmap,k33675,else__30130__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__33678,request){
var self__ = this;
var map__33679 = p__33678;
var map__33679__$1 = ((((!((map__33679 == null)))?((((map__33679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33679):map__33679);
var content_type__$1 = cljs.core.get.call(null,map__33679__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__33681 = this;
var map__33681__$1 = ((((!((map__33681 == null)))?((((map__33681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33681):map__33681);
var content_type__$2 = cljs.core.get.call(null,map__33681__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__33681,map__33681__$1,content_type__$2,map__33679,map__33679__$1,content_type__$1){
return (function (p1__33673_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__29513__auto__ = p1__33673_SHARP_;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__33681,map__33681__$1,content_type__$2,map__33679,map__33679__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__33683,xhrio){
var self__ = this;
var map__33684 = p__33683;
var map__33684__$1 = ((((!((map__33684 == null)))?((((map__33684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33684):map__33684);
var format = map__33684__$1;
var read__$1 = cljs.core.get.call(null,map__33684__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__33686 = this;
var map__33686__$1 = ((((!((map__33686 == null)))?((((map__33686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33686):map__33686);
var format__$1 = map__33686__$1;
var read__$2 = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__33689 = status;
switch (G__33689) {
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
}catch (e33690){if((e33690 instanceof Object)){
var e = e33690;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e33690;

}
}
}
}catch (e33688){if((e33688 instanceof Object)){
var e = e33688;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e33688;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30141__auto__,writer__30142__auto__,opts__30143__auto__){
var self__ = this;
var this__30141__auto____$1 = this;
var pr_pair__30144__auto__ = ((function (this__30141__auto____$1){
return (function (keyval__30145__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,cljs.core.pr_writer,""," ","",opts__30143__auto__,keyval__30145__auto__);
});})(this__30141__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,pr_pair__30144__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__30143__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33674){
var self__ = this;
var G__33674__$1 = this;
return (new cljs.core.RecordIter((0),G__33674__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30125__auto__){
var self__ = this;
var this__30125__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30121__auto__){
var self__ = this;
var this__30121__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30131__auto__){
var self__ = this;
var this__30131__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30122__auto__){
var self__ = this;
var this__30122__auto____$1 = this;
var h__29948__auto__ = self__.__hash;
if(!((h__29948__auto__ == null))){
return h__29948__auto__;
} else {
var h__29948__auto____$1 = cljs.core.hash_imap.call(null,this__30122__auto____$1);
self__.__hash = h__29948__auto____$1;

return h__29948__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30123__auto__,other__30124__auto__){
var self__ = this;
var this__30123__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29501__auto__ = other__30124__auto__;
if(cljs.core.truth_(and__29501__auto__)){
var and__29501__auto____$1 = (this__30123__auto____$1.constructor === other__30124__auto__.constructor);
if(and__29501__auto____$1){
return cljs.core.equiv_map.call(null,this__30123__auto____$1,other__30124__auto__);
} else {
return and__29501__auto____$1;
}
} else {
return and__29501__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30136__auto__,k__30137__auto__){
var self__ = this;
var this__30136__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__30137__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30136__auto____$1),self__.__meta),k__30137__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30137__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30134__auto__,k__30135__auto__,G__33674){
var self__ = this;
var this__30134__auto____$1 = this;
var pred__33691 = cljs.core.keyword_identical_QMARK_;
var expr__33692 = k__30135__auto__;
if(cljs.core.truth_(pred__33691.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__33692))){
return (new ajax.core.ResponseFormat(G__33674,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33691.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__33692))){
return (new ajax.core.ResponseFormat(self__.read,G__33674,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33691.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__33692))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__33674,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30135__auto__,G__33674),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30139__auto__){
var self__ = this;
var this__30139__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30126__auto__,G__33674){
var self__ = this;
var this__30126__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__33674,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30132__auto__,entry__30133__auto__){
var self__ = this;
var this__30132__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30133__auto__)){
return cljs.core._assoc.call(null,this__30132__auto____$1,cljs.core._nth.call(null,entry__30133__auto__,(0)),cljs.core._nth.call(null,entry__30133__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30132__auto____$1,entry__30133__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__30161__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__30161__auto__,writer__30162__auto__){
return cljs.core._write.call(null,writer__30162__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__33676){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__33676),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__33676),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__33676),null,cljs.core.dissoc.call(null,G__33676,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
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
var args33696 = [];
var len__30571__auto___33699 = arguments.length;
var i__30572__auto___33700 = (0);
while(true){
if((i__30572__auto___33700 < len__30571__auto___33699)){
args33696.push((arguments[i__30572__auto___33700]));

var G__33701 = (i__30572__auto___33700 + (1));
i__30572__auto___33700 = G__33701;
continue;
} else {
}
break;
}

var G__33698 = args33696.length;
switch (G__33698) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33696.length)].join('')));

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
var args33703 = [];
var len__30571__auto___33710 = arguments.length;
var i__30572__auto___33711 = (0);
while(true){
if((i__30572__auto___33711 < len__30571__auto___33710)){
args33703.push((arguments[i__30572__auto___33711]));

var G__33712 = (i__30572__auto___33711 + (1));
i__30572__auto___33711 = G__33712;
continue;
} else {
}
break;
}

var G__33705 = args33703.length;
switch (G__33705) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33703.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__33706){
var vec__33707 = p__33706;
var key = cljs.core.nth.call(null,vec__33707,(0),null);
var value = cljs.core.nth.call(null,vec__33707,(1),null);
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
return (function (p__33708){
var vec__33709 = p__33708;
var key = cljs.core.nth.call(null,vec__33709,(0),null);
var value = cljs.core.nth.call(null,vec__33709,(1),null);
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__33716){
var vec__33717 = p__33716;
var k = cljs.core.nth.call(null,vec__33717,(0),null);
var v = cljs.core.nth.call(null,vec__33717,(1),null);
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
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30127__auto__,k__30128__auto__){
var self__ = this;
var this__30127__auto____$1 = this;
return cljs.core._lookup.call(null,this__30127__auto____$1,k__30128__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30129__auto__,k33720,else__30130__auto__){
var self__ = this;
var this__30129__auto____$1 = this;
var G__33722 = k33720;
switch (G__33722) {
default:
return cljs.core.get.call(null,self__.__extmap,k33720,else__30130__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__33723){
var self__ = this;
var map__33724 = p__33723;
var map__33724__$1 = ((((!((map__33724 == null)))?((((map__33724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33724):map__33724);
var request = map__33724__$1;
var method = cljs.core.get.call(null,map__33724__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__33724,map__33724__$1,request,method){
return (function (p1__33718_SHARP_){
return ajax.core.uri_with_params.call(null,p1__33718_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__33724,map__33724__$1,request,method))
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

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30141__auto__,writer__30142__auto__,opts__30143__auto__){
var self__ = this;
var this__30141__auto____$1 = this;
var pr_pair__30144__auto__ = ((function (this__30141__auto____$1){
return (function (keyval__30145__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,cljs.core.pr_writer,""," ","",opts__30143__auto__,keyval__30145__auto__);
});})(this__30141__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,pr_pair__30144__auto__,"#ajax.core.ProcessGet{",", ","}",opts__30143__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33719){
var self__ = this;
var G__33719__$1 = this;
return (new cljs.core.RecordIter((0),G__33719__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30125__auto__){
var self__ = this;
var this__30125__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30121__auto__){
var self__ = this;
var this__30121__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30131__auto__){
var self__ = this;
var this__30131__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30122__auto__){
var self__ = this;
var this__30122__auto____$1 = this;
var h__29948__auto__ = self__.__hash;
if(!((h__29948__auto__ == null))){
return h__29948__auto__;
} else {
var h__29948__auto____$1 = cljs.core.hash_imap.call(null,this__30122__auto____$1);
self__.__hash = h__29948__auto____$1;

return h__29948__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30123__auto__,other__30124__auto__){
var self__ = this;
var this__30123__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29501__auto__ = other__30124__auto__;
if(cljs.core.truth_(and__29501__auto__)){
var and__29501__auto____$1 = (this__30123__auto____$1.constructor === other__30124__auto__.constructor);
if(and__29501__auto____$1){
return cljs.core.equiv_map.call(null,this__30123__auto____$1,other__30124__auto__);
} else {
return and__29501__auto____$1;
}
} else {
return and__29501__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30136__auto__,k__30137__auto__){
var self__ = this;
var this__30136__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30137__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30136__auto____$1),self__.__meta),k__30137__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30137__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30134__auto__,k__30135__auto__,G__33719){
var self__ = this;
var this__30134__auto____$1 = this;
var pred__33726 = cljs.core.keyword_identical_QMARK_;
var expr__33727 = k__30135__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30135__auto__,G__33719),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30139__auto__){
var self__ = this;
var this__30139__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30126__auto__,G__33719){
var self__ = this;
var this__30126__auto____$1 = this;
return (new ajax.core.ProcessGet(G__33719,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30132__auto__,entry__30133__auto__){
var self__ = this;
var this__30132__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30133__auto__)){
return cljs.core._assoc.call(null,this__30132__auto____$1,cljs.core._nth.call(null,entry__30133__auto__,(0)),cljs.core._nth.call(null,entry__30133__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30132__auto____$1,entry__30133__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__30161__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__30161__auto__,writer__30162__auto__){
return cljs.core._write.call(null,writer__30162__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__33721){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__33721),null));
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
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30127__auto__,k__30128__auto__){
var self__ = this;
var this__30127__auto____$1 = this;
return cljs.core._lookup.call(null,this__30127__auto____$1,k__30128__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30129__auto__,k33731,else__30130__auto__){
var self__ = this;
var this__30129__auto____$1 = this;
var G__33733 = k33731;
switch (G__33733) {
default:
return cljs.core.get.call(null,self__.__extmap,k33731,else__30130__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__33734){
var self__ = this;
var map__33735 = p__33734;
var map__33735__$1 = ((((!((map__33735 == null)))?((((map__33735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33735):map__33735);
var request = map__33735__$1;
var body = cljs.core.get.call(null,map__33735__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__33735__$1,new cljs.core.Keyword(null,"params","params",710516235));
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

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30141__auto__,writer__30142__auto__,opts__30143__auto__){
var self__ = this;
var this__30141__auto____$1 = this;
var pr_pair__30144__auto__ = ((function (this__30141__auto____$1){
return (function (keyval__30145__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,cljs.core.pr_writer,""," ","",opts__30143__auto__,keyval__30145__auto__);
});})(this__30141__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,pr_pair__30144__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__30143__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33730){
var self__ = this;
var G__33730__$1 = this;
return (new cljs.core.RecordIter((0),G__33730__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30125__auto__){
var self__ = this;
var this__30125__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30121__auto__){
var self__ = this;
var this__30121__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30131__auto__){
var self__ = this;
var this__30131__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30122__auto__){
var self__ = this;
var this__30122__auto____$1 = this;
var h__29948__auto__ = self__.__hash;
if(!((h__29948__auto__ == null))){
return h__29948__auto__;
} else {
var h__29948__auto____$1 = cljs.core.hash_imap.call(null,this__30122__auto____$1);
self__.__hash = h__29948__auto____$1;

return h__29948__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30123__auto__,other__30124__auto__){
var self__ = this;
var this__30123__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29501__auto__ = other__30124__auto__;
if(cljs.core.truth_(and__29501__auto__)){
var and__29501__auto____$1 = (this__30123__auto____$1.constructor === other__30124__auto__.constructor);
if(and__29501__auto____$1){
return cljs.core.equiv_map.call(null,this__30123__auto____$1,other__30124__auto__);
} else {
return and__29501__auto____$1;
}
} else {
return and__29501__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30136__auto__,k__30137__auto__){
var self__ = this;
var this__30136__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30137__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30136__auto____$1),self__.__meta),k__30137__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30137__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30134__auto__,k__30135__auto__,G__33730){
var self__ = this;
var this__30134__auto____$1 = this;
var pred__33737 = cljs.core.keyword_identical_QMARK_;
var expr__33738 = k__30135__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30135__auto__,G__33730),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30139__auto__){
var self__ = this;
var this__30139__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30126__auto__,G__33730){
var self__ = this;
var this__30126__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__33730,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30132__auto__,entry__30133__auto__){
var self__ = this;
var this__30132__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30133__auto__)){
return cljs.core._assoc.call(null,this__30132__auto____$1,cljs.core._nth.call(null,entry__30133__auto__,(0)),cljs.core._nth.call(null,entry__30133__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30132__auto____$1,entry__30133__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__30161__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__30161__auto__,writer__30162__auto__){
return cljs.core._write.call(null,writer__30162__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__33732){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__33732),null));
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
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30127__auto__,k__30128__auto__){
var self__ = this;
var this__30127__auto____$1 = this;
return cljs.core._lookup.call(null,this__30127__auto____$1,k__30128__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30129__auto__,k33742,else__30130__auto__){
var self__ = this;
var this__30129__auto____$1 = this;
var G__33744 = k33742;
switch (G__33744) {
default:
return cljs.core.get.call(null,self__.__extmap,k33742,else__30130__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__33745){
var self__ = this;
var map__33746 = p__33745;
var map__33746__$1 = ((((!((map__33746 == null)))?((((map__33746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33746):map__33746);
var request = map__33746__$1;
var uri = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__33748 = ajax.core.get_request_format.call(null,format);
var map__33748__$1 = ((((!((map__33748 == null)))?((((map__33748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33748):map__33748);
var write = cljs.core.get.call(null,map__33748__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__33748__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__29513__auto__ = headers;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30141__auto__,writer__30142__auto__,opts__30143__auto__){
var self__ = this;
var this__30141__auto____$1 = this;
var pr_pair__30144__auto__ = ((function (this__30141__auto____$1){
return (function (keyval__30145__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,cljs.core.pr_writer,""," ","",opts__30143__auto__,keyval__30145__auto__);
});})(this__30141__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30142__auto__,pr_pair__30144__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__30143__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33741){
var self__ = this;
var G__33741__$1 = this;
return (new cljs.core.RecordIter((0),G__33741__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30125__auto__){
var self__ = this;
var this__30125__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30121__auto__){
var self__ = this;
var this__30121__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30131__auto__){
var self__ = this;
var this__30131__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30122__auto__){
var self__ = this;
var this__30122__auto____$1 = this;
var h__29948__auto__ = self__.__hash;
if(!((h__29948__auto__ == null))){
return h__29948__auto__;
} else {
var h__29948__auto____$1 = cljs.core.hash_imap.call(null,this__30122__auto____$1);
self__.__hash = h__29948__auto____$1;

return h__29948__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30123__auto__,other__30124__auto__){
var self__ = this;
var this__30123__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29501__auto__ = other__30124__auto__;
if(cljs.core.truth_(and__29501__auto__)){
var and__29501__auto____$1 = (this__30123__auto____$1.constructor === other__30124__auto__.constructor);
if(and__29501__auto____$1){
return cljs.core.equiv_map.call(null,this__30123__auto____$1,other__30124__auto__);
} else {
return and__29501__auto____$1;
}
} else {
return and__29501__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30136__auto__,k__30137__auto__){
var self__ = this;
var this__30136__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30137__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30136__auto____$1),self__.__meta),k__30137__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30137__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30134__auto__,k__30135__auto__,G__33741){
var self__ = this;
var this__30134__auto____$1 = this;
var pred__33750 = cljs.core.keyword_identical_QMARK_;
var expr__33751 = k__30135__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30135__auto__,G__33741),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30139__auto__){
var self__ = this;
var this__30139__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30126__auto__,G__33741){
var self__ = this;
var this__30126__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__33741,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30132__auto__,entry__30133__auto__){
var self__ = this;
var this__30132__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30133__auto__)){
return cljs.core._assoc.call(null,this__30132__auto____$1,cljs.core._nth.call(null,entry__30133__auto__,(0)),cljs.core._nth.call(null,entry__30133__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30132__auto____$1,entry__30133__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__30161__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__30161__auto__,writer__30162__auto__){
return cljs.core._write.call(null,writer__30162__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__33743){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__33743),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__33754){
var map__33757 = p__33754;
var map__33757__$1 = ((((!((map__33757 == null)))?((((map__33757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33757):map__33757);
var type = cljs.core.get.call(null,map__33757__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__29513__auto__ = type;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__29513__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
var args33759 = [];
var len__30571__auto___33762 = arguments.length;
var i__30572__auto___33763 = (0);
while(true){
if((i__30572__auto___33763 < len__30571__auto___33762)){
args33759.push((arguments[i__30572__auto___33763]));

var G__33764 = (i__30572__auto___33763 + (1));
i__30572__auto___33763 = G__33764;
continue;
} else {
}
break;
}

var G__33761 = args33759.length;
switch (G__33761) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33759.length)].join('')));

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
var reader = (function (){var or__29513__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
var args33766 = [];
var len__30571__auto___33769 = arguments.length;
var i__30572__auto___33770 = (0);
while(true){
if((i__30572__auto___33770 < len__30571__auto___33769)){
args33766.push((arguments[i__30572__auto___33770]));

var G__33771 = (i__30572__auto___33770 + (1));
i__30572__auto___33770 = G__33771;
continue;
} else {
}
break;
}

var G__33768 = args33766.length;
switch (G__33768) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33766.length)].join('')));

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
var args33773 = [];
var len__30571__auto___33776 = arguments.length;
var i__30572__auto___33777 = (0);
while(true){
if((i__30572__auto___33777 < len__30571__auto___33776)){
args33773.push((arguments[i__30572__auto___33777]));

var G__33778 = (i__30572__auto___33777 + (1));
i__30572__auto___33777 = G__33778;
continue;
} else {
}
break;
}

var G__33775 = args33773.length;
switch (G__33775) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33773.length)].join('')));

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
if(cljs.core.truth_((function (){var and__29501__auto__ = prefix;
if(cljs.core.truth_(and__29501__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__29501__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args33780 = [];
var len__30571__auto___33783 = arguments.length;
var i__30572__auto___33784 = (0);
while(true){
if((i__30572__auto___33784 < len__30571__auto___33783)){
args33780.push((arguments[i__30572__auto___33784]));

var G__33785 = (i__30572__auto___33784 + (1));
i__30572__auto___33784 = G__33785;
continue;
} else {
}
break;
}

var G__33782 = args33780.length;
switch (G__33782) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33780.length)].join('')));

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
var args33787 = [];
var len__30571__auto___33793 = arguments.length;
var i__30572__auto___33794 = (0);
while(true){
if((i__30572__auto___33794 < len__30571__auto___33793)){
args33787.push((arguments[i__30572__auto___33794]));

var G__33795 = (i__30572__auto___33794 + (1));
i__30572__auto___33794 = G__33795;
continue;
} else {
}
break;
}

var G__33789 = args33787.length;
switch (G__33789) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33787.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__33790){
var map__33791 = p__33790;
var map__33791__$1 = ((((!((map__33791 == null)))?((((map__33791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33791):map__33791);
var prefix = cljs.core.get.call(null,map__33791__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__33791__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__33791__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args33797 = [];
var len__30571__auto___33800 = arguments.length;
var i__30572__auto___33801 = (0);
while(true){
if((i__30572__auto___33801 < len__30571__auto___33800)){
args33797.push((arguments[i__30572__auto___33801]));

var G__33802 = (i__30572__auto___33801 + (1));
i__30572__auto___33801 = G__33802;
continue;
} else {
}
break;
}

var G__33799 = args33797.length;
switch (G__33799) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33797.length)].join('')));

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
var args33804 = [];
var len__30571__auto___33807 = arguments.length;
var i__30572__auto___33808 = (0);
while(true){
if((i__30572__auto___33808 < len__30571__auto___33807)){
args33804.push((arguments[i__30572__auto___33808]));

var G__33809 = (i__30572__auto___33808 + (1));
i__30572__auto___33808 = G__33809;
continue;
} else {
}
break;
}

var G__33806 = args33804.length;
switch (G__33806) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33804.length)].join('')));

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
var args33811 = [];
var len__30571__auto___33814 = arguments.length;
var i__30572__auto___33815 = (0);
while(true){
if((i__30572__auto___33815 < len__30571__auto___33814)){
args33811.push((arguments[i__30572__auto___33815]));

var G__33816 = (i__30572__auto___33815 + (1));
i__30572__auto___33815 = G__33816;
continue;
} else {
}
break;
}

var G__33813 = args33811.length;
switch (G__33813) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33811.length)].join('')));

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
var args33818 = [];
var len__30571__auto___33821 = arguments.length;
var i__30572__auto___33822 = (0);
while(true){
if((i__30572__auto___33822 < len__30571__auto___33821)){
args33818.push((arguments[i__30572__auto___33822]));

var G__33823 = (i__30572__auto___33822 + (1));
i__30572__auto___33822 = G__33823;
continue;
} else {
}
break;
}

var G__33820 = args33818.length;
switch (G__33820) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33818.length)].join('')));

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
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__33825){
var map__33828 = p__33825;
var map__33828__$1 = ((((!((map__33828 == null)))?((((map__33828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33828):map__33828);
var request = map__33828__$1;
var response_format = cljs.core.get.call(null,map__33828__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args33830 = [];
var len__30571__auto___33833 = arguments.length;
var i__30572__auto___33834 = (0);
while(true){
if((i__30572__auto___33834 < len__30571__auto___33833)){
args33830.push((arguments[i__30572__auto___33834]));

var G__33835 = (i__30572__auto___33834 + (1));
i__30572__auto___33834 = G__33835;
continue;
} else {
}
break;
}

var G__33832 = args33830.length;
switch (G__33832) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33830.length)].join('')));

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
ajax.core.accept_header = (function ajax$core$accept_header(p__33837){
var map__33840 = p__33837;
var map__33840__$1 = ((((!((map__33840 == null)))?((((map__33840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33840):map__33840);
var request = map__33840__$1;
var response_format = cljs.core.get.call(null,map__33840__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args33842 = [];
var len__30571__auto___33845 = arguments.length;
var i__30572__auto___33846 = (0);
while(true){
if((i__30572__auto___33846 < len__30571__auto___33845)){
args33842.push((arguments[i__30572__auto___33846]));

var G__33847 = (i__30572__auto___33846 + (1));
i__30572__auto___33846 = G__33847;
continue;
} else {
}
break;
}

var G__33844 = args33842.length;
switch (G__33844) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33842.length)].join('')));

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
ajax.core.get_response_format = (function ajax$core$get_response_format(p__33849){
var map__33852 = p__33849;
var map__33852__$1 = ((((!((map__33852 == null)))?((((map__33852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33852):map__33852);
var opts = map__33852__$1;
var response_format = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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
var args33854 = [];
var len__30571__auto___33857 = arguments.length;
var i__30572__auto___33858 = (0);
while(true){
if((i__30572__auto___33858 < len__30571__auto___33857)){
args33854.push((arguments[i__30572__auto___33858]));

var G__33859 = (i__30572__auto___33858 + (1));
i__30572__auto___33858 = G__33859;
continue;
} else {
}
break;
}

var G__33856 = args33854.length;
switch (G__33856) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33854.length)].join('')));

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
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__33861){
var map__33864 = p__33861;
var map__33864__$1 = ((((!((map__33864 == null)))?((((map__33864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33864):map__33864);
var handler = cljs.core.get.call(null,map__33864__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
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
return (function (p1__33866_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__29513__auto__ = p1__33866_SHARP_;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__33867){
var map__33870 = p__33867;
var map__33870__$1 = ((((!((map__33870 == null)))?((((map__33870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33870):map__33870);
var request = map__33870__$1;
var interceptors = cljs.core.get.call(null,map__33870__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__29513__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
var G__33873 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__33873) {
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
var G__33876 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__33876) {
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
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__33878_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__33878_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args33879 = [];
var len__30571__auto___33892 = arguments.length;
var i__30572__auto___33893 = (0);
while(true){
if((i__30572__auto___33893 < len__30571__auto___33892)){
args33879.push((arguments[i__30572__auto___33893]));

var G__33894 = (i__30572__auto___33893 + (1));
i__30572__auto___33893 = G__33894;
continue;
} else {
}
break;
}

var G__33881 = args33879.length;
switch (G__33881) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33879.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__33882,p__33883){
var map__33884 = p__33882;
var map__33884__$1 = ((((!((map__33884 == null)))?((((map__33884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33884):map__33884);
var handler = cljs.core.get.call(null,map__33884__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__33884__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__33884__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__33885 = p__33883;
var ok = cljs.core.nth.call(null,vec__33885,(0),null);
var result = cljs.core.nth.call(null,vec__33885,(1),null);
var temp__4423__auto___33896 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___33896)){
var h_33897 = temp__4423__auto___33896;
h_33897.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__33887){
var map__33888 = p__33887;
var map__33888__$1 = ((((!((map__33888 == null)))?((((map__33888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33888):map__33888);
var handler = cljs.core.get.call(null,map__33888__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__33888__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__33888__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__33888,map__33888__$1,handler,error_handler,finally$){
return (function (p__33890){
var vec__33891 = p__33890;
var ok = cljs.core.nth.call(null,vec__33891,(0),null);
var result = cljs.core.nth.call(null,vec__33891,(1),null);
var temp__4423__auto___33898 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___33898)){
var h_33899 = temp__4423__auto___33898;
h_33899.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__33888,map__33888__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__33900){
var map__33903 = p__33900;
var map__33903__$1 = ((((!((map__33903 == null)))?((((map__33903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33903):map__33903);
var opts = map__33903__$1;
var method = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__33903__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__29513__auto__ = format;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
var args__30578__auto__ = [];
var len__30571__auto___33907 = arguments.length;
var i__30572__auto___33908 = (0);
while(true){
if((i__30572__auto___33908 < len__30571__auto___33907)){
args__30578__auto__.push((arguments[i__30572__auto___33908]));

var G__33909 = (i__30572__auto___33908 + (1));
i__30572__auto___33908 = G__33909;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30631__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__30631__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30631__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq33905){
var G__33906 = cljs.core.first.call(null,seq33905);
var seq33905__$1 = cljs.core.next.call(null,seq33905);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__33906,seq33905__$1);
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
var args__30578__auto__ = [];
var len__30571__auto___33912 = arguments.length;
var i__30572__auto___33913 = (0);
while(true){
if((i__30572__auto___33913 < len__30571__auto___33912)){
args__30578__auto__.push((arguments[i__30572__auto___33913]));

var G__33914 = (i__30572__auto___33913 + (1));
i__30572__auto___33913 = G__33914;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30631__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__30631__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30631__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq33910){
var G__33911 = cljs.core.first.call(null,seq33910);
var seq33910__$1 = cljs.core.next.call(null,seq33910);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__33911,seq33910__$1);
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
var args__30578__auto__ = [];
var len__30571__auto___33917 = arguments.length;
var i__30572__auto___33918 = (0);
while(true){
if((i__30572__auto___33918 < len__30571__auto___33917)){
args__30578__auto__.push((arguments[i__30572__auto___33918]));

var G__33919 = (i__30572__auto___33918 + (1));
i__30572__auto___33918 = G__33919;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30631__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__30631__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30631__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq33915){
var G__33916 = cljs.core.first.call(null,seq33915);
var seq33915__$1 = cljs.core.next.call(null,seq33915);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__33916,seq33915__$1);
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
var args__30578__auto__ = [];
var len__30571__auto___33922 = arguments.length;
var i__30572__auto___33923 = (0);
while(true){
if((i__30572__auto___33923 < len__30571__auto___33922)){
args__30578__auto__.push((arguments[i__30572__auto___33923]));

var G__33924 = (i__30572__auto___33923 + (1));
i__30572__auto___33923 = G__33924;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30631__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__30631__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30631__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq33920){
var G__33921 = cljs.core.first.call(null,seq33920);
var seq33920__$1 = cljs.core.next.call(null,seq33920);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__33921,seq33920__$1);
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
var args__30578__auto__ = [];
var len__30571__auto___33927 = arguments.length;
var i__30572__auto___33928 = (0);
while(true){
if((i__30572__auto___33928 < len__30571__auto___33927)){
args__30578__auto__.push((arguments[i__30572__auto___33928]));

var G__33929 = (i__30572__auto___33928 + (1));
i__30572__auto___33928 = G__33929;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30631__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__30631__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30631__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq33925){
var G__33926 = cljs.core.first.call(null,seq33925);
var seq33925__$1 = cljs.core.next.call(null,seq33925);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__33926,seq33925__$1);
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
var args__30578__auto__ = [];
var len__30571__auto___33932 = arguments.length;
var i__30572__auto___33933 = (0);
while(true){
if((i__30572__auto___33933 < len__30571__auto___33932)){
args__30578__auto__.push((arguments[i__30572__auto___33933]));

var G__33934 = (i__30572__auto___33933 + (1));
i__30572__auto___33933 = G__33934;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30631__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__30631__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30631__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq33930){
var G__33931 = cljs.core.first.call(null,seq33930);
var seq33930__$1 = cljs.core.next.call(null,seq33930);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__33931,seq33930__$1);
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
var args__30578__auto__ = [];
var len__30571__auto___33937 = arguments.length;
var i__30572__auto___33938 = (0);
while(true){
if((i__30572__auto___33938 < len__30571__auto___33937)){
args__30578__auto__.push((arguments[i__30572__auto___33938]));

var G__33939 = (i__30572__auto___33938 + (1));
i__30572__auto___33938 = G__33939;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30631__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__30631__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30631__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq33935){
var G__33936 = cljs.core.first.call(null,seq33935);
var seq33935__$1 = cljs.core.next.call(null,seq33935);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__33936,seq33935__$1);
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
var args__30578__auto__ = [];
var len__30571__auto___33942 = arguments.length;
var i__30572__auto___33943 = (0);
while(true){
if((i__30572__auto___33943 < len__30571__auto___33942)){
args__30578__auto__.push((arguments[i__30572__auto___33943]));

var G__33944 = (i__30572__auto___33943 + (1));
i__30572__auto___33943 = G__33944;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30631__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__30631__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30631__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq33940){
var G__33941 = cljs.core.first.call(null,seq33940);
var seq33940__$1 = cljs.core.next.call(null,seq33940);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__33941,seq33940__$1);
});

//# sourceMappingURL=core.js.map