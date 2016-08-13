// Compiled by ClojureScript 1.9.93 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__35548,handler){
var map__35549 = p__35548;
var map__35549__$1 = ((((!((map__35549 == null)))?((((map__35549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35549):map__35549);
var uri = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__35549,map__35549__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__35547_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__35547_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__35549,map__35549__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___35561 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___35561)){
var response_type_35562 = temp__4657__auto___35561;
this$__$1.responseType = cljs.core.name.call(null,response_type_35562);
} else {
}

var seq__35551_35563 = cljs.core.seq.call(null,headers);
var chunk__35552_35564 = null;
var count__35553_35565 = (0);
var i__35554_35566 = (0);
while(true){
if((i__35554_35566 < count__35553_35565)){
var vec__35555_35567 = cljs.core._nth.call(null,chunk__35552_35564,i__35554_35566);
var k_35568 = cljs.core.nth.call(null,vec__35555_35567,(0),null);
var v_35569 = cljs.core.nth.call(null,vec__35555_35567,(1),null);
this$__$1.setRequestHeader(k_35568,v_35569);

var G__35570 = seq__35551_35563;
var G__35571 = chunk__35552_35564;
var G__35572 = count__35553_35565;
var G__35573 = (i__35554_35566 + (1));
seq__35551_35563 = G__35570;
chunk__35552_35564 = G__35571;
count__35553_35565 = G__35572;
i__35554_35566 = G__35573;
continue;
} else {
var temp__4657__auto___35574 = cljs.core.seq.call(null,seq__35551_35563);
if(temp__4657__auto___35574){
var seq__35551_35575__$1 = temp__4657__auto___35574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35551_35575__$1)){
var c__31895__auto___35576 = cljs.core.chunk_first.call(null,seq__35551_35575__$1);
var G__35577 = cljs.core.chunk_rest.call(null,seq__35551_35575__$1);
var G__35578 = c__31895__auto___35576;
var G__35579 = cljs.core.count.call(null,c__31895__auto___35576);
var G__35580 = (0);
seq__35551_35563 = G__35577;
chunk__35552_35564 = G__35578;
count__35553_35565 = G__35579;
i__35554_35566 = G__35580;
continue;
} else {
var vec__35558_35581 = cljs.core.first.call(null,seq__35551_35575__$1);
var k_35582 = cljs.core.nth.call(null,vec__35558_35581,(0),null);
var v_35583 = cljs.core.nth.call(null,vec__35558_35581,(1),null);
this$__$1.setRequestHeader(k_35582,v_35583);

var G__35584 = cljs.core.next.call(null,seq__35551_35575__$1);
var G__35585 = null;
var G__35586 = (0);
var G__35587 = (0);
seq__35551_35563 = G__35584;
chunk__35552_35564 = G__35585;
count__35553_35565 = G__35586;
i__35554_35566 = G__35587;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__31084__auto__ = body;
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1471077514700