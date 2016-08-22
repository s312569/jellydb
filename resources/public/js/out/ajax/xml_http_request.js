// Compiled by ClojureScript 1.9.93 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__33851,handler){
var map__33852 = p__33851;
var map__33852__$1 = ((((!((map__33852 == null)))?((((map__33852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33852):map__33852);
var uri = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__33852,map__33852__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__33850_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__33850_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__33852,map__33852__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___33864 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___33864)){
var response_type_33865 = temp__4657__auto___33864;
this$__$1.responseType = cljs.core.name.call(null,response_type_33865);
} else {
}

var seq__33854_33866 = cljs.core.seq.call(null,headers);
var chunk__33855_33867 = null;
var count__33856_33868 = (0);
var i__33857_33869 = (0);
while(true){
if((i__33857_33869 < count__33856_33868)){
var vec__33858_33870 = cljs.core._nth.call(null,chunk__33855_33867,i__33857_33869);
var k_33871 = cljs.core.nth.call(null,vec__33858_33870,(0),null);
var v_33872 = cljs.core.nth.call(null,vec__33858_33870,(1),null);
this$__$1.setRequestHeader(k_33871,v_33872);

var G__33873 = seq__33854_33866;
var G__33874 = chunk__33855_33867;
var G__33875 = count__33856_33868;
var G__33876 = (i__33857_33869 + (1));
seq__33854_33866 = G__33873;
chunk__33855_33867 = G__33874;
count__33856_33868 = G__33875;
i__33857_33869 = G__33876;
continue;
} else {
var temp__4657__auto___33877 = cljs.core.seq.call(null,seq__33854_33866);
if(temp__4657__auto___33877){
var seq__33854_33878__$1 = temp__4657__auto___33877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33854_33878__$1)){
var c__31672__auto___33879 = cljs.core.chunk_first.call(null,seq__33854_33878__$1);
var G__33880 = cljs.core.chunk_rest.call(null,seq__33854_33878__$1);
var G__33881 = c__31672__auto___33879;
var G__33882 = cljs.core.count.call(null,c__31672__auto___33879);
var G__33883 = (0);
seq__33854_33866 = G__33880;
chunk__33855_33867 = G__33881;
count__33856_33868 = G__33882;
i__33857_33869 = G__33883;
continue;
} else {
var vec__33861_33884 = cljs.core.first.call(null,seq__33854_33878__$1);
var k_33885 = cljs.core.nth.call(null,vec__33861_33884,(0),null);
var v_33886 = cljs.core.nth.call(null,vec__33861_33884,(1),null);
this$__$1.setRequestHeader(k_33885,v_33886);

var G__33887 = cljs.core.next.call(null,seq__33854_33878__$1);
var G__33888 = null;
var G__33889 = (0);
var G__33890 = (0);
seq__33854_33866 = G__33887;
chunk__33855_33867 = G__33888;
count__33856_33868 = G__33889;
i__33857_33869 = G__33890;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__30861__auto__ = body;
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1471840463456