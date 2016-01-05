// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__32717,handler){
var map__32718 = p__32717;
var map__32718__$1 = ((((!((map__32718 == null)))?((((map__32718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32718):map__32718);
var uri = cljs.core.get.call(null,map__32718__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__32718__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__32718__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__32718__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__32718__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__32718__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__32718__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__32718,map__32718__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__32716_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__32716_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__32718,map__32718__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___32726 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___32726)){
var response_type_32727 = temp__4425__auto___32726;
this$__$1.responseType = cljs.core.name.call(null,response_type_32727);
} else {
}

var seq__32720_32728 = cljs.core.seq.call(null,headers);
var chunk__32721_32729 = null;
var count__32722_32730 = (0);
var i__32723_32731 = (0);
while(true){
if((i__32723_32731 < count__32722_32730)){
var vec__32724_32732 = cljs.core._nth.call(null,chunk__32721_32729,i__32723_32731);
var k_32733 = cljs.core.nth.call(null,vec__32724_32732,(0),null);
var v_32734 = cljs.core.nth.call(null,vec__32724_32732,(1),null);
this$__$1.setRequestHeader(k_32733,v_32734);

var G__32735 = seq__32720_32728;
var G__32736 = chunk__32721_32729;
var G__32737 = count__32722_32730;
var G__32738 = (i__32723_32731 + (1));
seq__32720_32728 = G__32735;
chunk__32721_32729 = G__32736;
count__32722_32730 = G__32737;
i__32723_32731 = G__32738;
continue;
} else {
var temp__4425__auto___32739 = cljs.core.seq.call(null,seq__32720_32728);
if(temp__4425__auto___32739){
var seq__32720_32740__$1 = temp__4425__auto___32739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32720_32740__$1)){
var c__30523__auto___32741 = cljs.core.chunk_first.call(null,seq__32720_32740__$1);
var G__32742 = cljs.core.chunk_rest.call(null,seq__32720_32740__$1);
var G__32743 = c__30523__auto___32741;
var G__32744 = cljs.core.count.call(null,c__30523__auto___32741);
var G__32745 = (0);
seq__32720_32728 = G__32742;
chunk__32721_32729 = G__32743;
count__32722_32730 = G__32744;
i__32723_32731 = G__32745;
continue;
} else {
var vec__32725_32746 = cljs.core.first.call(null,seq__32720_32740__$1);
var k_32747 = cljs.core.nth.call(null,vec__32725_32746,(0),null);
var v_32748 = cljs.core.nth.call(null,vec__32725_32746,(1),null);
this$__$1.setRequestHeader(k_32747,v_32748);

var G__32749 = cljs.core.next.call(null,seq__32720_32740__$1);
var G__32750 = null;
var G__32751 = (0);
var G__32752 = (0);
seq__32720_32728 = G__32749;
chunk__32721_32729 = G__32750;
count__32722_32730 = G__32751;
i__32723_32731 = G__32752;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__29720__auto__ = body;
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
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