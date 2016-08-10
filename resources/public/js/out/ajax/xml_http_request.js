// Compiled by ClojureScript 1.9.93 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__34421,handler){
var map__34422 = p__34421;
var map__34422__$1 = ((((!((map__34422 == null)))?((((map__34422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34422):map__34422);
var uri = cljs.core.get.call(null,map__34422__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__34422__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__34422__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__34422__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__34422__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__34422__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__34422__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__34422,map__34422__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__34420_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__34420_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__34422,map__34422__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___34434 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___34434)){
var response_type_34435 = temp__4657__auto___34434;
this$__$1.responseType = cljs.core.name.call(null,response_type_34435);
} else {
}

var seq__34424_34436 = cljs.core.seq.call(null,headers);
var chunk__34425_34437 = null;
var count__34426_34438 = (0);
var i__34427_34439 = (0);
while(true){
if((i__34427_34439 < count__34426_34438)){
var vec__34428_34440 = cljs.core._nth.call(null,chunk__34425_34437,i__34427_34439);
var k_34441 = cljs.core.nth.call(null,vec__34428_34440,(0),null);
var v_34442 = cljs.core.nth.call(null,vec__34428_34440,(1),null);
this$__$1.setRequestHeader(k_34441,v_34442);

var G__34443 = seq__34424_34436;
var G__34444 = chunk__34425_34437;
var G__34445 = count__34426_34438;
var G__34446 = (i__34427_34439 + (1));
seq__34424_34436 = G__34443;
chunk__34425_34437 = G__34444;
count__34426_34438 = G__34445;
i__34427_34439 = G__34446;
continue;
} else {
var temp__4657__auto___34447 = cljs.core.seq.call(null,seq__34424_34436);
if(temp__4657__auto___34447){
var seq__34424_34448__$1 = temp__4657__auto___34447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34424_34448__$1)){
var c__30819__auto___34449 = cljs.core.chunk_first.call(null,seq__34424_34448__$1);
var G__34450 = cljs.core.chunk_rest.call(null,seq__34424_34448__$1);
var G__34451 = c__30819__auto___34449;
var G__34452 = cljs.core.count.call(null,c__30819__auto___34449);
var G__34453 = (0);
seq__34424_34436 = G__34450;
chunk__34425_34437 = G__34451;
count__34426_34438 = G__34452;
i__34427_34439 = G__34453;
continue;
} else {
var vec__34431_34454 = cljs.core.first.call(null,seq__34424_34448__$1);
var k_34455 = cljs.core.nth.call(null,vec__34431_34454,(0),null);
var v_34456 = cljs.core.nth.call(null,vec__34431_34454,(1),null);
this$__$1.setRequestHeader(k_34455,v_34456);

var G__34457 = cljs.core.next.call(null,seq__34424_34448__$1);
var G__34458 = null;
var G__34459 = (0);
var G__34460 = (0);
seq__34424_34436 = G__34457;
chunk__34425_34437 = G__34458;
count__34426_34438 = G__34459;
i__34427_34439 = G__34460;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__30008__auto__ = body;
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1470795668035