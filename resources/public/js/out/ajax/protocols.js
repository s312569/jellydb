// Compiled by ClojureScript 1.9.93 {}
goog.provide('ajax.protocols');
goog.require('cljs.core');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.protocols.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.protocols._js_ajax_request = (function ajax$protocols$_js_ajax_request(this$,request,handler){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 == null)))){
return this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
var x__31523__auto__ = (((this$ == null))?null:this$);
var m__31524__auto__ = (ajax.protocols._js_ajax_request[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,this$,request,handler);
} else {
var m__31524__auto____$1 = (ajax.protocols._js_ajax_request["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,this$,request,handler);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.protocols.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.protocols._abort = (function ajax$protocols$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$protocols$AjaxRequest$_abort$arity$1(this$);
} else {
var x__31523__auto__ = (((this$ == null))?null:this$);
var m__31524__auto__ = (ajax.protocols._abort[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,this$);
} else {
var m__31524__auto____$1 = (ajax.protocols._abort["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.protocols.AjaxResponse = function(){};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.protocols._status = (function ajax$protocols$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status$arity$1(this$);
} else {
var x__31523__auto__ = (((this$ == null))?null:this$);
var m__31524__auto__ = (ajax.protocols._status[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,this$);
} else {
var m__31524__auto____$1 = (ajax.protocols._status["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.protocols._status_text = (function ajax$protocols$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__31523__auto__ = (((this$ == null))?null:this$);
var m__31524__auto__ = (ajax.protocols._status_text[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,this$);
} else {
var m__31524__auto____$1 = (ajax.protocols._status_text["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.
 */
ajax.protocols._body = (function ajax$protocols$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_body$arity$1(this$);
} else {
var x__31523__auto__ = (((this$ == null))?null:this$);
var m__31524__auto__ = (ajax.protocols._body[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,this$);
} else {
var m__31524__auto____$1 = (ajax.protocols._body["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.protocols._get_response_header = (function ajax$protocols$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__31523__auto__ = (((this$ == null))?null:this$);
var m__31524__auto__ = (ajax.protocols._get_response_header[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,this$,header);
} else {
var m__31524__auto____$1 = (ajax.protocols._get_response_header["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.protocols._was_aborted = (function ajax$protocols$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__31523__auto__ = (((this$ == null))?null:this$);
var m__31524__auto__ = (ajax.protocols._was_aborted[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,this$);
} else {
var m__31524__auto____$1 = (ajax.protocols._was_aborted["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
});


/**
 * An abstraction for something that processes requests and responses.
 * @interface
 */
ajax.protocols.Interceptor = function(){};

/**
 * Transforms the opts
 */
ajax.protocols._process_request = (function ajax$protocols$_process_request(this$,request){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_request$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_request$arity$2(this$,request);
} else {
var x__31523__auto__ = (((this$ == null))?null:this$);
var m__31524__auto__ = (ajax.protocols._process_request[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,this$,request);
} else {
var m__31524__auto____$1 = (ajax.protocols._process_request["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,this$,request);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-request",this$);
}
}
}
});

/**
 * Transforms the raw response (an implementation of AjaxResponse)
 */
ajax.protocols._process_response = (function ajax$protocols$_process_response(this$,response){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_response$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_response$arity$2(this$,response);
} else {
var x__31523__auto__ = (((this$ == null))?null:this$);
var m__31524__auto__ = (ajax.protocols._process_response[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,this$,response);
} else {
var m__31524__auto____$1 = (ajax.protocols._process_response["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,this$,response);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-response",this$);
}
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
 * @implements {ajax.protocols.AjaxResponse}
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
ajax.protocols.Response = (function (status,body,status_text,headers,was_aborted,__meta,__extmap,__hash){
this.status = status;
this.body = body;
this.status_text = status_text;
this.headers = headers;
this.was_aborted = was_aborted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31482__auto__,k__31483__auto__){
var self__ = this;
var this__31482__auto____$1 = this;
return cljs.core._lookup.call(null,this__31482__auto____$1,k__31483__auto__,null);
});

ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31484__auto__,k33839,else__31485__auto__){
var self__ = this;
var this__31484__auto____$1 = this;
var G__33841 = (((k33839 instanceof cljs.core.Keyword))?k33839.fqn:null);
switch (G__33841) {
case "status":
return self__.status;

break;
case "body":
return self__.body;

break;
case "status-text":
return self__.status_text;

break;
case "headers":
return self__.headers;

break;
case "was-aborted":
return self__.was_aborted;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33839,else__31485__auto__);

}
});

ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31496__auto__,writer__31497__auto__,opts__31498__auto__){
var self__ = this;
var this__31496__auto____$1 = this;
var pr_pair__31499__auto__ = ((function (this__31496__auto____$1){
return (function (keyval__31500__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31497__auto__,cljs.core.pr_writer,""," ","",opts__31498__auto__,keyval__31500__auto__);
});})(this__31496__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31497__auto__,pr_pair__31499__auto__,"#ajax.protocols.Response{",", ","}",opts__31498__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IIterable$ = true;

ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33838){
var self__ = this;
var G__33838__$1 = this;
return (new cljs.core.RecordIter((0),G__33838__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31480__auto__){
var self__ = this;
var this__31480__auto____$1 = this;
return self__.__meta;
});

ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31476__auto__){
var self__ = this;
var this__31476__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31486__auto__){
var self__ = this;
var this__31486__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31477__auto__){
var self__ = this;
var this__31477__auto____$1 = this;
var h__31295__auto__ = self__.__hash;
if(!((h__31295__auto__ == null))){
return h__31295__auto__;
} else {
var h__31295__auto____$1 = cljs.core.hash_imap.call(null,this__31477__auto____$1);
self__.__hash = h__31295__auto____$1;

return h__31295__auto____$1;
}
});

ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31478__auto__,other__31479__auto__){
var self__ = this;
var this__31478__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30848__auto__ = other__31479__auto__;
if(cljs.core.truth_(and__30848__auto__)){
var and__30848__auto____$1 = (this__31478__auto____$1.constructor === other__31479__auto__.constructor);
if(and__30848__auto____$1){
return cljs.core.equiv_map.call(null,this__31478__auto____$1,other__31479__auto__);
} else {
return and__30848__auto____$1;
}
} else {
return and__30848__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = true;

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1),header);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31491__auto__,k__31492__auto__){
var self__ = this;
var this__31491__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__31492__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31491__auto____$1),self__.__meta),k__31492__auto__);
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31492__auto__)),null));
}
});

ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31489__auto__,k__31490__auto__,G__33838){
var self__ = this;
var this__31489__auto____$1 = this;
var pred__33842 = cljs.core.keyword_identical_QMARK_;
var expr__33843 = k__31490__auto__;
if(cljs.core.truth_(pred__33842.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__33843))){
return (new ajax.protocols.Response(G__33838,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33842.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__33843))){
return (new ajax.protocols.Response(self__.status,G__33838,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33842.call(null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),expr__33843))){
return (new ajax.protocols.Response(self__.status,self__.body,G__33838,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33842.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__33843))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,G__33838,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33842.call(null,new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),expr__33843))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,G__33838,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31490__auto__,G__33838),null));
}
}
}
}
}
});

ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31494__auto__){
var self__ = this;
var this__31494__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31481__auto__,G__33838){
var self__ = this;
var this__31481__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,G__33838,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31487__auto__,entry__31488__auto__){
var self__ = this;
var this__31487__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31488__auto__)){
return cljs.core._assoc.call(null,this__31487__auto____$1,cljs.core._nth.call(null,entry__31488__auto__,(0)),cljs.core._nth.call(null,entry__31488__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31487__auto____$1,entry__31488__auto__);
}
});

ajax.protocols.Response.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"status-text","status-text",-193703951,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"was-aborted","was-aborted",-479553301,null)], null);
});

ajax.protocols.Response.cljs$lang$type = true;

ajax.protocols.Response.cljs$lang$ctorPrSeq = (function (this__31516__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.protocols/Response");
});

ajax.protocols.Response.cljs$lang$ctorPrWriter = (function (this__31516__auto__,writer__31517__auto__){
return cljs.core._write.call(null,writer__31517__auto__,"ajax.protocols/Response");
});

ajax.protocols.__GT_Response = (function ajax$protocols$__GT_Response(status,body,status_text,headers,was_aborted){
return (new ajax.protocols.Response(status,body,status_text,headers,was_aborted,null,null,null));
});

ajax.protocols.map__GT_Response = (function ajax$protocols$map__GT_Response(G__33840){
return (new ajax.protocols.Response(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__33840),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__33840),new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(G__33840),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__33840),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(G__33840),null,cljs.core.dissoc.call(null,G__33840,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)),null));
});


//# sourceMappingURL=protocols.js.map?rel=1471771437345