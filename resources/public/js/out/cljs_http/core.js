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
var seq__37379 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__37384 = null;
var count__37385 = (0);
var i__37386 = (0);
while(true){
if((i__37386 < count__37385)){
var h_name = cljs.core._nth.call(null,chunk__37384,i__37386);
var seq__37387_37391 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__37388_37392 = null;
var count__37389_37393 = (0);
var i__37390_37394 = (0);
while(true){
if((i__37390_37394 < count__37389_37393)){
var h_val_37395 = cljs.core._nth.call(null,chunk__37388_37392,i__37390_37394);
xhr.headers.set(h_name,h_val_37395);

var G__37396 = seq__37387_37391;
var G__37397 = chunk__37388_37392;
var G__37398 = count__37389_37393;
var G__37399 = (i__37390_37394 + (1));
seq__37387_37391 = G__37396;
chunk__37388_37392 = G__37397;
count__37389_37393 = G__37398;
i__37390_37394 = G__37399;
continue;
} else {
var temp__4425__auto___37400 = cljs.core.seq.call(null,seq__37387_37391);
if(temp__4425__auto___37400){
var seq__37387_37401__$1 = temp__4425__auto___37400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37387_37401__$1)){
var c__30523__auto___37402 = cljs.core.chunk_first.call(null,seq__37387_37401__$1);
var G__37403 = cljs.core.chunk_rest.call(null,seq__37387_37401__$1);
var G__37404 = c__30523__auto___37402;
var G__37405 = cljs.core.count.call(null,c__30523__auto___37402);
var G__37406 = (0);
seq__37387_37391 = G__37403;
chunk__37388_37392 = G__37404;
count__37389_37393 = G__37405;
i__37390_37394 = G__37406;
continue;
} else {
var h_val_37407 = cljs.core.first.call(null,seq__37387_37401__$1);
xhr.headers.set(h_name,h_val_37407);

var G__37408 = cljs.core.next.call(null,seq__37387_37401__$1);
var G__37409 = null;
var G__37410 = (0);
var G__37411 = (0);
seq__37387_37391 = G__37408;
chunk__37388_37392 = G__37409;
count__37389_37393 = G__37410;
i__37390_37394 = G__37411;
continue;
}
} else {
}
}
break;
}

var G__37412 = seq__37379;
var G__37413 = chunk__37384;
var G__37414 = count__37385;
var G__37415 = (i__37386 + (1));
seq__37379 = G__37412;
chunk__37384 = G__37413;
count__37385 = G__37414;
i__37386 = G__37415;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37379);
if(temp__4425__auto__){
var seq__37379__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37379__$1)){
var c__30523__auto__ = cljs.core.chunk_first.call(null,seq__37379__$1);
var G__37416 = cljs.core.chunk_rest.call(null,seq__37379__$1);
var G__37417 = c__30523__auto__;
var G__37418 = cljs.core.count.call(null,c__30523__auto__);
var G__37419 = (0);
seq__37379 = G__37416;
chunk__37384 = G__37417;
count__37385 = G__37418;
i__37386 = G__37419;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__37379__$1);
var seq__37380_37420 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__37381_37421 = null;
var count__37382_37422 = (0);
var i__37383_37423 = (0);
while(true){
if((i__37383_37423 < count__37382_37422)){
var h_val_37424 = cljs.core._nth.call(null,chunk__37381_37421,i__37383_37423);
xhr.headers.set(h_name,h_val_37424);

var G__37425 = seq__37380_37420;
var G__37426 = chunk__37381_37421;
var G__37427 = count__37382_37422;
var G__37428 = (i__37383_37423 + (1));
seq__37380_37420 = G__37425;
chunk__37381_37421 = G__37426;
count__37382_37422 = G__37427;
i__37383_37423 = G__37428;
continue;
} else {
var temp__4425__auto___37429__$1 = cljs.core.seq.call(null,seq__37380_37420);
if(temp__4425__auto___37429__$1){
var seq__37380_37430__$1 = temp__4425__auto___37429__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37380_37430__$1)){
var c__30523__auto___37431 = cljs.core.chunk_first.call(null,seq__37380_37430__$1);
var G__37432 = cljs.core.chunk_rest.call(null,seq__37380_37430__$1);
var G__37433 = c__30523__auto___37431;
var G__37434 = cljs.core.count.call(null,c__30523__auto___37431);
var G__37435 = (0);
seq__37380_37420 = G__37432;
chunk__37381_37421 = G__37433;
count__37382_37422 = G__37434;
i__37383_37423 = G__37435;
continue;
} else {
var h_val_37436 = cljs.core.first.call(null,seq__37380_37430__$1);
xhr.headers.set(h_name,h_val_37436);

var G__37437 = cljs.core.next.call(null,seq__37380_37430__$1);
var G__37438 = null;
var G__37439 = (0);
var G__37440 = (0);
seq__37380_37420 = G__37437;
chunk__37381_37421 = G__37438;
count__37382_37422 = G__37439;
i__37383_37423 = G__37440;
continue;
}
} else {
}
}
break;
}

var G__37441 = cljs.core.next.call(null,seq__37379__$1);
var G__37442 = null;
var G__37443 = (0);
var G__37444 = (0);
seq__37379 = G__37441;
chunk__37384 = G__37442;
count__37385 = G__37443;
i__37386 = G__37444;
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
return xhr.setResponseType((function (){var G__37446 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__37446)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__37446)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__37446)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__37446)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__37446)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__37446)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__37447){
var map__37451 = p__37447;
var map__37451__$1 = ((((!((map__37451 == null)))?((((map__37451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37451):map__37451);
var request = map__37451__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__29720__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__37453 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__37453,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__37453,response_type);

G__37453.setTimeoutInterval(timeout);

G__37453.setWithCredentials(send_credentials);

return G__37453;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__37454){
var map__37481 = p__37454;
var map__37481__$1 = ((((!((map__37481 == null)))?((((map__37481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37481):map__37481);
var request = map__37481__$1;
var request_method = cljs.core.get.call(null,map__37481__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__37481__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__37481__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__37481__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__37481__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__29720__auto__ = request_method;
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__37481,map__37481__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__37481,map__37481__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__34593__auto___37507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___37507,channel,request_url,method,headers__$1,xhr__$1,map__37481,map__37481__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___37507,channel,request_url,method,headers__$1,xhr__$1,map__37481,map__37481__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_37493){
var state_val_37494 = (state_37493[(1)]);
if((state_val_37494 === (1))){
var state_37493__$1 = state_37493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37493__$1,(2),cancel);
} else {
if((state_val_37494 === (2))){
var inst_37484 = (state_37493[(2)]);
var inst_37485 = xhr__$1.isComplete();
var inst_37486 = cljs.core.not.call(null,inst_37485);
var state_37493__$1 = (function (){var statearr_37495 = state_37493;
(statearr_37495[(7)] = inst_37484);

return statearr_37495;
})();
if(inst_37486){
var statearr_37496_37508 = state_37493__$1;
(statearr_37496_37508[(1)] = (3));

} else {
var statearr_37497_37509 = state_37493__$1;
(statearr_37497_37509[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (3))){
var inst_37488 = xhr__$1.abort();
var state_37493__$1 = state_37493;
var statearr_37498_37510 = state_37493__$1;
(statearr_37498_37510[(2)] = inst_37488);

(statearr_37498_37510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (4))){
var state_37493__$1 = state_37493;
var statearr_37499_37511 = state_37493__$1;
(statearr_37499_37511[(2)] = null);

(statearr_37499_37511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (5))){
var inst_37491 = (state_37493[(2)]);
var state_37493__$1 = state_37493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37493__$1,inst_37491);
} else {
return null;
}
}
}
}
}
});})(c__34593__auto___37507,channel,request_url,method,headers__$1,xhr__$1,map__37481,map__37481__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__34481__auto__,c__34593__auto___37507,channel,request_url,method,headers__$1,xhr__$1,map__37481,map__37481__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__34482__auto__ = null;
var cljs_http$core$xhr_$_state_machine__34482__auto____0 = (function (){
var statearr_37503 = [null,null,null,null,null,null,null,null];
(statearr_37503[(0)] = cljs_http$core$xhr_$_state_machine__34482__auto__);

(statearr_37503[(1)] = (1));

return statearr_37503;
});
var cljs_http$core$xhr_$_state_machine__34482__auto____1 = (function (state_37493){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_37493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e37504){if((e37504 instanceof Object)){
var ex__34485__auto__ = e37504;
var statearr_37505_37512 = state_37493;
(statearr_37505_37512[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37513 = state_37493;
state_37493 = G__37513;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__34482__auto__ = function(state_37493){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__34482__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__34482__auto____1.call(this,state_37493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__34482__auto____0;
cljs_http$core$xhr_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__34482__auto____1;
return cljs_http$core$xhr_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___37507,channel,request_url,method,headers__$1,xhr__$1,map__37481,map__37481__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__34595__auto__ = (function (){var statearr_37506 = f__34594__auto__.call(null);
(statearr_37506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___37507);

return statearr_37506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___37507,channel,request_url,method,headers__$1,xhr__$1,map__37481,map__37481__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__37514){
var map__37531 = p__37514;
var map__37531__$1 = ((((!((map__37531 == null)))?((((map__37531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37531):map__37531);
var request = map__37531__$1;
var timeout = cljs.core.get.call(null,map__37531__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__37531__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__37531__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_37547 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_37547], null));

if(cljs.core.truth_(cancel)){
var c__34593__auto___37548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___37548,req_37547,channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___37548,req_37547,channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel){
return (function (state_37537){
var state_val_37538 = (state_37537[(1)]);
if((state_val_37538 === (1))){
var state_37537__$1 = state_37537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37537__$1,(2),cancel);
} else {
if((state_val_37538 === (2))){
var inst_37534 = (state_37537[(2)]);
var inst_37535 = jsonp__$1.cancel(req_37547);
var state_37537__$1 = (function (){var statearr_37539 = state_37537;
(statearr_37539[(7)] = inst_37534);

return statearr_37539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37537__$1,inst_37535);
} else {
return null;
}
}
});})(c__34593__auto___37548,req_37547,channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__34481__auto__,c__34593__auto___37548,req_37547,channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__34482__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__34482__auto____0 = (function (){
var statearr_37543 = [null,null,null,null,null,null,null,null];
(statearr_37543[(0)] = cljs_http$core$jsonp_$_state_machine__34482__auto__);

(statearr_37543[(1)] = (1));

return statearr_37543;
});
var cljs_http$core$jsonp_$_state_machine__34482__auto____1 = (function (state_37537){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_37537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e37544){if((e37544 instanceof Object)){
var ex__34485__auto__ = e37544;
var statearr_37545_37549 = state_37537;
(statearr_37545_37549[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37550 = state_37537;
state_37537 = G__37550;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__34482__auto__ = function(state_37537){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__34482__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__34482__auto____1.call(this,state_37537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__34482__auto____0;
cljs_http$core$jsonp_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__34482__auto____1;
return cljs_http$core$jsonp_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___37548,req_37547,channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel))
})();
var state__34595__auto__ = (function (){var statearr_37546 = f__34594__auto__.call(null);
(statearr_37546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___37548);

return statearr_37546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___37548,req_37547,channel,jsonp__$1,map__37531,map__37531__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__37551){
var map__37554 = p__37551;
var map__37554__$1 = ((((!((map__37554 == null)))?((((map__37554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37554):map__37554);
var request__$1 = map__37554__$1;
var request_method = cljs.core.get.call(null,map__37554__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map