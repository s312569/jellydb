// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__33391,handler){
var map__33392 = p__33391;
var map__33392__$1 = ((((!((map__33392 == null)))?((((map__33392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33392):map__33392);
var uri = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__33392,map__33392__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__33390_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__33390_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__33392,map__33392__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___33400 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___33400)){
var response_type_33401 = temp__4425__auto___33400;
this$__$1.responseType = cljs.core.name.call(null,response_type_33401);
} else {
}

var seq__33394_33402 = cljs.core.seq.call(null,headers);
var chunk__33395_33403 = null;
var count__33396_33404 = (0);
var i__33397_33405 = (0);
while(true){
if((i__33397_33405 < count__33396_33404)){
var vec__33398_33406 = cljs.core._nth.call(null,chunk__33395_33403,i__33397_33405);
var k_33407 = cljs.core.nth.call(null,vec__33398_33406,(0),null);
var v_33408 = cljs.core.nth.call(null,vec__33398_33406,(1),null);
this$__$1.setRequestHeader(k_33407,v_33408);

var G__33409 = seq__33394_33402;
var G__33410 = chunk__33395_33403;
var G__33411 = count__33396_33404;
var G__33412 = (i__33397_33405 + (1));
seq__33394_33402 = G__33409;
chunk__33395_33403 = G__33410;
count__33396_33404 = G__33411;
i__33397_33405 = G__33412;
continue;
} else {
var temp__4425__auto___33413 = cljs.core.seq.call(null,seq__33394_33402);
if(temp__4425__auto___33413){
var seq__33394_33414__$1 = temp__4425__auto___33413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33394_33414__$1)){
var c__30316__auto___33415 = cljs.core.chunk_first.call(null,seq__33394_33414__$1);
var G__33416 = cljs.core.chunk_rest.call(null,seq__33394_33414__$1);
var G__33417 = c__30316__auto___33415;
var G__33418 = cljs.core.count.call(null,c__30316__auto___33415);
var G__33419 = (0);
seq__33394_33402 = G__33416;
chunk__33395_33403 = G__33417;
count__33396_33404 = G__33418;
i__33397_33405 = G__33419;
continue;
} else {
var vec__33399_33420 = cljs.core.first.call(null,seq__33394_33414__$1);
var k_33421 = cljs.core.nth.call(null,vec__33399_33420,(0),null);
var v_33422 = cljs.core.nth.call(null,vec__33399_33420,(1),null);
this$__$1.setRequestHeader(k_33421,v_33422);

var G__33423 = cljs.core.next.call(null,seq__33394_33414__$1);
var G__33424 = null;
var G__33425 = (0);
var G__33426 = (0);
seq__33394_33402 = G__33423;
chunk__33395_33403 = G__33424;
count__33396_33404 = G__33425;
i__33397_33405 = G__33426;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__29513__auto__ = body;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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