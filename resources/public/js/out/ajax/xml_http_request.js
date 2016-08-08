// Compiled by ClojureScript 1.9.93 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__32692,handler){
var map__32693 = p__32692;
var map__32693__$1 = ((((!((map__32693 == null)))?((((map__32693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32693):map__32693);
var uri = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__32693,map__32693__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__32691_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__32691_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__32693,map__32693__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___32705 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___32705)){
var response_type_32706 = temp__4657__auto___32705;
this$__$1.responseType = cljs.core.name.call(null,response_type_32706);
} else {
}

var seq__32695_32707 = cljs.core.seq.call(null,headers);
var chunk__32696_32708 = null;
var count__32697_32709 = (0);
var i__32698_32710 = (0);
while(true){
if((i__32698_32710 < count__32697_32709)){
var vec__32699_32711 = cljs.core._nth.call(null,chunk__32696_32708,i__32698_32710);
var k_32712 = cljs.core.nth.call(null,vec__32699_32711,(0),null);
var v_32713 = cljs.core.nth.call(null,vec__32699_32711,(1),null);
this$__$1.setRequestHeader(k_32712,v_32713);

var G__32714 = seq__32695_32707;
var G__32715 = chunk__32696_32708;
var G__32716 = count__32697_32709;
var G__32717 = (i__32698_32710 + (1));
seq__32695_32707 = G__32714;
chunk__32696_32708 = G__32715;
count__32697_32709 = G__32716;
i__32698_32710 = G__32717;
continue;
} else {
var temp__4657__auto___32718 = cljs.core.seq.call(null,seq__32695_32707);
if(temp__4657__auto___32718){
var seq__32695_32719__$1 = temp__4657__auto___32718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32695_32719__$1)){
var c__29090__auto___32720 = cljs.core.chunk_first.call(null,seq__32695_32719__$1);
var G__32721 = cljs.core.chunk_rest.call(null,seq__32695_32719__$1);
var G__32722 = c__29090__auto___32720;
var G__32723 = cljs.core.count.call(null,c__29090__auto___32720);
var G__32724 = (0);
seq__32695_32707 = G__32721;
chunk__32696_32708 = G__32722;
count__32697_32709 = G__32723;
i__32698_32710 = G__32724;
continue;
} else {
var vec__32702_32725 = cljs.core.first.call(null,seq__32695_32719__$1);
var k_32726 = cljs.core.nth.call(null,vec__32702_32725,(0),null);
var v_32727 = cljs.core.nth.call(null,vec__32702_32725,(1),null);
this$__$1.setRequestHeader(k_32726,v_32727);

var G__32728 = cljs.core.next.call(null,seq__32695_32719__$1);
var G__32729 = null;
var G__32730 = (0);
var G__32731 = (0);
seq__32695_32707 = G__32728;
chunk__32696_32708 = G__32729;
count__32697_32709 = G__32730;
i__32698_32710 = G__32731;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__28279__auto__ = body;
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1470645898776