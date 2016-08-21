// Compiled by ClojureScript 1.9.93 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__33849,handler){
var map__33850 = p__33849;
var map__33850__$1 = ((((!((map__33850 == null)))?((((map__33850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33850):map__33850);
var uri = cljs.core.get.call(null,map__33850__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__33850__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__33850__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__33850__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__33850__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__33850__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__33850__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__33850,map__33850__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__33848_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__33848_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__33850,map__33850__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___33862 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___33862)){
var response_type_33863 = temp__4657__auto___33862;
this$__$1.responseType = cljs.core.name.call(null,response_type_33863);
} else {
}

var seq__33852_33864 = cljs.core.seq.call(null,headers);
var chunk__33853_33865 = null;
var count__33854_33866 = (0);
var i__33855_33867 = (0);
while(true){
if((i__33855_33867 < count__33854_33866)){
var vec__33856_33868 = cljs.core._nth.call(null,chunk__33853_33865,i__33855_33867);
var k_33869 = cljs.core.nth.call(null,vec__33856_33868,(0),null);
var v_33870 = cljs.core.nth.call(null,vec__33856_33868,(1),null);
this$__$1.setRequestHeader(k_33869,v_33870);

var G__33871 = seq__33852_33864;
var G__33872 = chunk__33853_33865;
var G__33873 = count__33854_33866;
var G__33874 = (i__33855_33867 + (1));
seq__33852_33864 = G__33871;
chunk__33853_33865 = G__33872;
count__33854_33866 = G__33873;
i__33855_33867 = G__33874;
continue;
} else {
var temp__4657__auto___33875 = cljs.core.seq.call(null,seq__33852_33864);
if(temp__4657__auto___33875){
var seq__33852_33876__$1 = temp__4657__auto___33875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33852_33876__$1)){
var c__31671__auto___33877 = cljs.core.chunk_first.call(null,seq__33852_33876__$1);
var G__33878 = cljs.core.chunk_rest.call(null,seq__33852_33876__$1);
var G__33879 = c__31671__auto___33877;
var G__33880 = cljs.core.count.call(null,c__31671__auto___33877);
var G__33881 = (0);
seq__33852_33864 = G__33878;
chunk__33853_33865 = G__33879;
count__33854_33866 = G__33880;
i__33855_33867 = G__33881;
continue;
} else {
var vec__33859_33882 = cljs.core.first.call(null,seq__33852_33876__$1);
var k_33883 = cljs.core.nth.call(null,vec__33859_33882,(0),null);
var v_33884 = cljs.core.nth.call(null,vec__33859_33882,(1),null);
this$__$1.setRequestHeader(k_33883,v_33884);

var G__33885 = cljs.core.next.call(null,seq__33852_33876__$1);
var G__33886 = null;
var G__33887 = (0);
var G__33888 = (0);
seq__33852_33864 = G__33885;
chunk__33853_33865 = G__33886;
count__33854_33866 = G__33887;
i__33855_33867 = G__33888;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__30860__auto__ = body;
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1471771437378