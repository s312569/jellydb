// Compiled by ClojureScript 1.9.93 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__33808,handler){
var map__33809 = p__33808;
var map__33809__$1 = ((((!((map__33809 == null)))?((((map__33809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33809):map__33809);
var uri = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__33809,map__33809__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__33807_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__33807_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__33809,map__33809__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___33821 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___33821)){
var response_type_33822 = temp__4657__auto___33821;
this$__$1.responseType = cljs.core.name.call(null,response_type_33822);
} else {
}

var seq__33811_33823 = cljs.core.seq.call(null,headers);
var chunk__33812_33824 = null;
var count__33813_33825 = (0);
var i__33814_33826 = (0);
while(true){
if((i__33814_33826 < count__33813_33825)){
var vec__33815_33827 = cljs.core._nth.call(null,chunk__33812_33824,i__33814_33826);
var k_33828 = cljs.core.nth.call(null,vec__33815_33827,(0),null);
var v_33829 = cljs.core.nth.call(null,vec__33815_33827,(1),null);
this$__$1.setRequestHeader(k_33828,v_33829);

var G__33830 = seq__33811_33823;
var G__33831 = chunk__33812_33824;
var G__33832 = count__33813_33825;
var G__33833 = (i__33814_33826 + (1));
seq__33811_33823 = G__33830;
chunk__33812_33824 = G__33831;
count__33813_33825 = G__33832;
i__33814_33826 = G__33833;
continue;
} else {
var temp__4657__auto___33834 = cljs.core.seq.call(null,seq__33811_33823);
if(temp__4657__auto___33834){
var seq__33811_33835__$1 = temp__4657__auto___33834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33811_33835__$1)){
var c__31630__auto___33836 = cljs.core.chunk_first.call(null,seq__33811_33835__$1);
var G__33837 = cljs.core.chunk_rest.call(null,seq__33811_33835__$1);
var G__33838 = c__31630__auto___33836;
var G__33839 = cljs.core.count.call(null,c__31630__auto___33836);
var G__33840 = (0);
seq__33811_33823 = G__33837;
chunk__33812_33824 = G__33838;
count__33813_33825 = G__33839;
i__33814_33826 = G__33840;
continue;
} else {
var vec__33818_33841 = cljs.core.first.call(null,seq__33811_33835__$1);
var k_33842 = cljs.core.nth.call(null,vec__33818_33841,(0),null);
var v_33843 = cljs.core.nth.call(null,vec__33818_33841,(1),null);
this$__$1.setRequestHeader(k_33842,v_33843);

var G__33844 = cljs.core.next.call(null,seq__33811_33835__$1);
var G__33845 = null;
var G__33846 = (0);
var G__33847 = (0);
seq__33811_33823 = G__33844;
chunk__33812_33824 = G__33845;
count__33813_33825 = G__33846;
i__33814_33826 = G__33847;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__30819__auto__ = body;
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1471343700651