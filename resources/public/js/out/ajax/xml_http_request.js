// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__35533,handler){
var map__35534 = p__35533;
var map__35534__$1 = ((((!((map__35534 == null)))?((((map__35534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35534):map__35534);
var uri = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__35534,map__35534__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__35532_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__35532_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__35534,map__35534__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___35542 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___35542)){
var response_type_35543 = temp__4425__auto___35542;
this$__$1.responseType = cljs.core.name.call(null,response_type_35543);
} else {
}

var seq__35536_35544 = cljs.core.seq.call(null,headers);
var chunk__35537_35545 = null;
var count__35538_35546 = (0);
var i__35539_35547 = (0);
while(true){
if((i__35539_35547 < count__35538_35546)){
var vec__35540_35548 = cljs.core._nth.call(null,chunk__35537_35545,i__35539_35547);
var k_35549 = cljs.core.nth.call(null,vec__35540_35548,(0),null);
var v_35550 = cljs.core.nth.call(null,vec__35540_35548,(1),null);
this$__$1.setRequestHeader(k_35549,v_35550);

var G__35551 = seq__35536_35544;
var G__35552 = chunk__35537_35545;
var G__35553 = count__35538_35546;
var G__35554 = (i__35539_35547 + (1));
seq__35536_35544 = G__35551;
chunk__35537_35545 = G__35552;
count__35538_35546 = G__35553;
i__35539_35547 = G__35554;
continue;
} else {
var temp__4425__auto___35555 = cljs.core.seq.call(null,seq__35536_35544);
if(temp__4425__auto___35555){
var seq__35536_35556__$1 = temp__4425__auto___35555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35536_35556__$1)){
var c__30217__auto___35557 = cljs.core.chunk_first.call(null,seq__35536_35556__$1);
var G__35558 = cljs.core.chunk_rest.call(null,seq__35536_35556__$1);
var G__35559 = c__30217__auto___35557;
var G__35560 = cljs.core.count.call(null,c__30217__auto___35557);
var G__35561 = (0);
seq__35536_35544 = G__35558;
chunk__35537_35545 = G__35559;
count__35538_35546 = G__35560;
i__35539_35547 = G__35561;
continue;
} else {
var vec__35541_35562 = cljs.core.first.call(null,seq__35536_35556__$1);
var k_35563 = cljs.core.nth.call(null,vec__35541_35562,(0),null);
var v_35564 = cljs.core.nth.call(null,vec__35541_35562,(1),null);
this$__$1.setRequestHeader(k_35563,v_35564);

var G__35565 = cljs.core.next.call(null,seq__35536_35556__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__35536_35544 = G__35565;
chunk__35537_35545 = G__35566;
count__35538_35546 = G__35567;
i__35539_35547 = G__35568;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__29414__auto__ = body;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
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

//# sourceMappingURL=xml_http_request.js.map