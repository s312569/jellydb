// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var seq__39090 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__39095 = null;
var count__39096 = (0);
var i__39097 = (0);
while(true){
if((i__39097 < count__39096)){
var h_name = cljs.core._nth.call(null,chunk__39095,i__39097);
var seq__39098_39102 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__39099_39103 = null;
var count__39100_39104 = (0);
var i__39101_39105 = (0);
while(true){
if((i__39101_39105 < count__39100_39104)){
var h_val_39106 = cljs.core._nth.call(null,chunk__39099_39103,i__39101_39105);
xhr.headers.set(h_name,h_val_39106);

var G__39107 = seq__39098_39102;
var G__39108 = chunk__39099_39103;
var G__39109 = count__39100_39104;
var G__39110 = (i__39101_39105 + (1));
seq__39098_39102 = G__39107;
chunk__39099_39103 = G__39108;
count__39100_39104 = G__39109;
i__39101_39105 = G__39110;
continue;
} else {
var temp__4425__auto___39111 = cljs.core.seq.call(null,seq__39098_39102);
if(temp__4425__auto___39111){
var seq__39098_39112__$1 = temp__4425__auto___39111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39098_39112__$1)){
var c__30217__auto___39113 = cljs.core.chunk_first.call(null,seq__39098_39112__$1);
var G__39114 = cljs.core.chunk_rest.call(null,seq__39098_39112__$1);
var G__39115 = c__30217__auto___39113;
var G__39116 = cljs.core.count.call(null,c__30217__auto___39113);
var G__39117 = (0);
seq__39098_39102 = G__39114;
chunk__39099_39103 = G__39115;
count__39100_39104 = G__39116;
i__39101_39105 = G__39117;
continue;
} else {
var h_val_39118 = cljs.core.first.call(null,seq__39098_39112__$1);
xhr.headers.set(h_name,h_val_39118);

var G__39119 = cljs.core.next.call(null,seq__39098_39112__$1);
var G__39120 = null;
var G__39121 = (0);
var G__39122 = (0);
seq__39098_39102 = G__39119;
chunk__39099_39103 = G__39120;
count__39100_39104 = G__39121;
i__39101_39105 = G__39122;
continue;
}
} else {
}
}
break;
}

var G__39123 = seq__39090;
var G__39124 = chunk__39095;
var G__39125 = count__39096;
var G__39126 = (i__39097 + (1));
seq__39090 = G__39123;
chunk__39095 = G__39124;
count__39096 = G__39125;
i__39097 = G__39126;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39090);
if(temp__4425__auto__){
var seq__39090__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39090__$1)){
var c__30217__auto__ = cljs.core.chunk_first.call(null,seq__39090__$1);
var G__39127 = cljs.core.chunk_rest.call(null,seq__39090__$1);
var G__39128 = c__30217__auto__;
var G__39129 = cljs.core.count.call(null,c__30217__auto__);
var G__39130 = (0);
seq__39090 = G__39127;
chunk__39095 = G__39128;
count__39096 = G__39129;
i__39097 = G__39130;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__39090__$1);
var seq__39091_39131 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__39092_39132 = null;
var count__39093_39133 = (0);
var i__39094_39134 = (0);
while(true){
if((i__39094_39134 < count__39093_39133)){
var h_val_39135 = cljs.core._nth.call(null,chunk__39092_39132,i__39094_39134);
xhr.headers.set(h_name,h_val_39135);

var G__39136 = seq__39091_39131;
var G__39137 = chunk__39092_39132;
var G__39138 = count__39093_39133;
var G__39139 = (i__39094_39134 + (1));
seq__39091_39131 = G__39136;
chunk__39092_39132 = G__39137;
count__39093_39133 = G__39138;
i__39094_39134 = G__39139;
continue;
} else {
var temp__4425__auto___39140__$1 = cljs.core.seq.call(null,seq__39091_39131);
if(temp__4425__auto___39140__$1){
var seq__39091_39141__$1 = temp__4425__auto___39140__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39091_39141__$1)){
var c__30217__auto___39142 = cljs.core.chunk_first.call(null,seq__39091_39141__$1);
var G__39143 = cljs.core.chunk_rest.call(null,seq__39091_39141__$1);
var G__39144 = c__30217__auto___39142;
var G__39145 = cljs.core.count.call(null,c__30217__auto___39142);
var G__39146 = (0);
seq__39091_39131 = G__39143;
chunk__39092_39132 = G__39144;
count__39093_39133 = G__39145;
i__39094_39134 = G__39146;
continue;
} else {
var h_val_39147 = cljs.core.first.call(null,seq__39091_39141__$1);
xhr.headers.set(h_name,h_val_39147);

var G__39148 = cljs.core.next.call(null,seq__39091_39141__$1);
var G__39149 = null;
var G__39150 = (0);
var G__39151 = (0);
seq__39091_39131 = G__39148;
chunk__39092_39132 = G__39149;
count__39093_39133 = G__39150;
i__39094_39134 = G__39151;
continue;
}
} else {
}
}
break;
}

var G__39152 = cljs.core.next.call(null,seq__39090__$1);
var G__39153 = null;
var G__39154 = (0);
var G__39155 = (0);
seq__39090 = G__39152;
chunk__39095 = G__39153;
count__39096 = G__39154;
i__39097 = G__39155;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__39157 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__39157)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__39157)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__39157)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__39157)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__39157)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__39157)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__39158){
var map__39162 = p__39158;
var map__39162__$1 = ((((!((map__39162 == null)))?((((map__39162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39162):map__39162);
var request = map__39162__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__39162__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__39162__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__39162__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__29414__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__39164 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__39164,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__39164,response_type);

G__39164.setTimeoutInterval(timeout);

G__39164.setWithCredentials(send_credentials);

return G__39164;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__39165){
var map__39192 = p__39165;
var map__39192__$1 = ((((!((map__39192 == null)))?((((map__39192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39192):map__39192);
var request = map__39192__$1;
var request_method = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__29414__auto__ = request_method;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__39192,map__39192__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__39192,map__39192__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__31439__auto___39218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___39218,channel,request_url,method,headers__$1,xhr__$1,map__39192,map__39192__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___39218,channel,request_url,method,headers__$1,xhr__$1,map__39192,map__39192__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_39204){
var state_val_39205 = (state_39204[(1)]);
if((state_val_39205 === (1))){
var state_39204__$1 = state_39204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39204__$1,(2),cancel);
} else {
if((state_val_39205 === (2))){
var inst_39195 = (state_39204[(2)]);
var inst_39196 = xhr__$1.isComplete();
var inst_39197 = cljs.core.not.call(null,inst_39196);
var state_39204__$1 = (function (){var statearr_39206 = state_39204;
(statearr_39206[(7)] = inst_39195);

return statearr_39206;
})();
if(inst_39197){
var statearr_39207_39219 = state_39204__$1;
(statearr_39207_39219[(1)] = (3));

} else {
var statearr_39208_39220 = state_39204__$1;
(statearr_39208_39220[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39205 === (3))){
var inst_39199 = xhr__$1.abort();
var state_39204__$1 = state_39204;
var statearr_39209_39221 = state_39204__$1;
(statearr_39209_39221[(2)] = inst_39199);

(statearr_39209_39221[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39205 === (4))){
var state_39204__$1 = state_39204;
var statearr_39210_39222 = state_39204__$1;
(statearr_39210_39222[(2)] = null);

(statearr_39210_39222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39205 === (5))){
var inst_39202 = (state_39204[(2)]);
var state_39204__$1 = state_39204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39204__$1,inst_39202);
} else {
return null;
}
}
}
}
}
});})(c__31439__auto___39218,channel,request_url,method,headers__$1,xhr__$1,map__39192,map__39192__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__31418__auto__,c__31439__auto___39218,channel,request_url,method,headers__$1,xhr__$1,map__39192,map__39192__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__31419__auto__ = null;
var cljs_http$core$xhr_$_state_machine__31419__auto____0 = (function (){
var statearr_39214 = [null,null,null,null,null,null,null,null];
(statearr_39214[(0)] = cljs_http$core$xhr_$_state_machine__31419__auto__);

(statearr_39214[(1)] = (1));

return statearr_39214;
});
var cljs_http$core$xhr_$_state_machine__31419__auto____1 = (function (state_39204){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_39204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e39215){if((e39215 instanceof Object)){
var ex__31422__auto__ = e39215;
var statearr_39216_39223 = state_39204;
(statearr_39216_39223[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39224 = state_39204;
state_39204 = G__39224;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__31419__auto__ = function(state_39204){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__31419__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__31419__auto____1.call(this,state_39204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__31419__auto____0;
cljs_http$core$xhr_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__31419__auto____1;
return cljs_http$core$xhr_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___39218,channel,request_url,method,headers__$1,xhr__$1,map__39192,map__39192__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__31441__auto__ = (function (){var statearr_39217 = f__31440__auto__.call(null);
(statearr_39217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___39218);

return statearr_39217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___39218,channel,request_url,method,headers__$1,xhr__$1,map__39192,map__39192__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__39225){
var map__39242 = p__39225;
var map__39242__$1 = ((((!((map__39242 == null)))?((((map__39242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39242):map__39242);
var request = map__39242__$1;
var timeout = cljs.core.get.call(null,map__39242__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__39242__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__39242__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_39258 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_39258], null));

if(cljs.core.truth_(cancel)){
var c__31439__auto___39259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___39259,req_39258,channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___39259,req_39258,channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel){
return (function (state_39248){
var state_val_39249 = (state_39248[(1)]);
if((state_val_39249 === (1))){
var state_39248__$1 = state_39248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39248__$1,(2),cancel);
} else {
if((state_val_39249 === (2))){
var inst_39245 = (state_39248[(2)]);
var inst_39246 = jsonp__$1.cancel(req_39258);
var state_39248__$1 = (function (){var statearr_39250 = state_39248;
(statearr_39250[(7)] = inst_39245);

return statearr_39250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39248__$1,inst_39246);
} else {
return null;
}
}
});})(c__31439__auto___39259,req_39258,channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__31418__auto__,c__31439__auto___39259,req_39258,channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__31419__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__31419__auto____0 = (function (){
var statearr_39254 = [null,null,null,null,null,null,null,null];
(statearr_39254[(0)] = cljs_http$core$jsonp_$_state_machine__31419__auto__);

(statearr_39254[(1)] = (1));

return statearr_39254;
});
var cljs_http$core$jsonp_$_state_machine__31419__auto____1 = (function (state_39248){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_39248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e39255){if((e39255 instanceof Object)){
var ex__31422__auto__ = e39255;
var statearr_39256_39260 = state_39248;
(statearr_39256_39260[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39261 = state_39248;
state_39248 = G__39261;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__31419__auto__ = function(state_39248){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__31419__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__31419__auto____1.call(this,state_39248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__31419__auto____0;
cljs_http$core$jsonp_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__31419__auto____1;
return cljs_http$core$jsonp_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___39259,req_39258,channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel))
})();
var state__31441__auto__ = (function (){var statearr_39257 = f__31440__auto__.call(null);
(statearr_39257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___39259);

return statearr_39257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___39259,req_39258,channel,jsonp__$1,map__39242,map__39242__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__39262){
var map__39265 = p__39262;
var map__39265__$1 = ((((!((map__39265 == null)))?((((map__39265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39265):map__39265);
var request__$1 = map__39265__$1;
var request_method = cljs.core.get.call(null,map__39265__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map