// Compiled by ClojureScript 1.7.145 {}
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
var seq__12316 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__12321 = null;
var count__12322 = (0);
var i__12323 = (0);
while(true){
if((i__12323 < count__12322)){
var h_name = cljs.core._nth.call(null,chunk__12321,i__12323);
var seq__12324_12328 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__12325_12329 = null;
var count__12326_12330 = (0);
var i__12327_12331 = (0);
while(true){
if((i__12327_12331 < count__12326_12330)){
var h_val_12332 = cljs.core._nth.call(null,chunk__12325_12329,i__12327_12331);
xhr.headers.set(h_name,h_val_12332);

var G__12333 = seq__12324_12328;
var G__12334 = chunk__12325_12329;
var G__12335 = count__12326_12330;
var G__12336 = (i__12327_12331 + (1));
seq__12324_12328 = G__12333;
chunk__12325_12329 = G__12334;
count__12326_12330 = G__12335;
i__12327_12331 = G__12336;
continue;
} else {
var temp__4425__auto___12337 = cljs.core.seq.call(null,seq__12324_12328);
if(temp__4425__auto___12337){
var seq__12324_12338__$1 = temp__4425__auto___12337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12324_12338__$1)){
var c__5306__auto___12339 = cljs.core.chunk_first.call(null,seq__12324_12338__$1);
var G__12340 = cljs.core.chunk_rest.call(null,seq__12324_12338__$1);
var G__12341 = c__5306__auto___12339;
var G__12342 = cljs.core.count.call(null,c__5306__auto___12339);
var G__12343 = (0);
seq__12324_12328 = G__12340;
chunk__12325_12329 = G__12341;
count__12326_12330 = G__12342;
i__12327_12331 = G__12343;
continue;
} else {
var h_val_12344 = cljs.core.first.call(null,seq__12324_12338__$1);
xhr.headers.set(h_name,h_val_12344);

var G__12345 = cljs.core.next.call(null,seq__12324_12338__$1);
var G__12346 = null;
var G__12347 = (0);
var G__12348 = (0);
seq__12324_12328 = G__12345;
chunk__12325_12329 = G__12346;
count__12326_12330 = G__12347;
i__12327_12331 = G__12348;
continue;
}
} else {
}
}
break;
}

var G__12349 = seq__12316;
var G__12350 = chunk__12321;
var G__12351 = count__12322;
var G__12352 = (i__12323 + (1));
seq__12316 = G__12349;
chunk__12321 = G__12350;
count__12322 = G__12351;
i__12323 = G__12352;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12316);
if(temp__4425__auto__){
var seq__12316__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12316__$1)){
var c__5306__auto__ = cljs.core.chunk_first.call(null,seq__12316__$1);
var G__12353 = cljs.core.chunk_rest.call(null,seq__12316__$1);
var G__12354 = c__5306__auto__;
var G__12355 = cljs.core.count.call(null,c__5306__auto__);
var G__12356 = (0);
seq__12316 = G__12353;
chunk__12321 = G__12354;
count__12322 = G__12355;
i__12323 = G__12356;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__12316__$1);
var seq__12317_12357 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__12318_12358 = null;
var count__12319_12359 = (0);
var i__12320_12360 = (0);
while(true){
if((i__12320_12360 < count__12319_12359)){
var h_val_12361 = cljs.core._nth.call(null,chunk__12318_12358,i__12320_12360);
xhr.headers.set(h_name,h_val_12361);

var G__12362 = seq__12317_12357;
var G__12363 = chunk__12318_12358;
var G__12364 = count__12319_12359;
var G__12365 = (i__12320_12360 + (1));
seq__12317_12357 = G__12362;
chunk__12318_12358 = G__12363;
count__12319_12359 = G__12364;
i__12320_12360 = G__12365;
continue;
} else {
var temp__4425__auto___12366__$1 = cljs.core.seq.call(null,seq__12317_12357);
if(temp__4425__auto___12366__$1){
var seq__12317_12367__$1 = temp__4425__auto___12366__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12317_12367__$1)){
var c__5306__auto___12368 = cljs.core.chunk_first.call(null,seq__12317_12367__$1);
var G__12369 = cljs.core.chunk_rest.call(null,seq__12317_12367__$1);
var G__12370 = c__5306__auto___12368;
var G__12371 = cljs.core.count.call(null,c__5306__auto___12368);
var G__12372 = (0);
seq__12317_12357 = G__12369;
chunk__12318_12358 = G__12370;
count__12319_12359 = G__12371;
i__12320_12360 = G__12372;
continue;
} else {
var h_val_12373 = cljs.core.first.call(null,seq__12317_12367__$1);
xhr.headers.set(h_name,h_val_12373);

var G__12374 = cljs.core.next.call(null,seq__12317_12367__$1);
var G__12375 = null;
var G__12376 = (0);
var G__12377 = (0);
seq__12317_12357 = G__12374;
chunk__12318_12358 = G__12375;
count__12319_12359 = G__12376;
i__12320_12360 = G__12377;
continue;
}
} else {
}
}
break;
}

var G__12378 = cljs.core.next.call(null,seq__12316__$1);
var G__12379 = null;
var G__12380 = (0);
var G__12381 = (0);
seq__12316 = G__12378;
chunk__12321 = G__12379;
count__12322 = G__12380;
i__12323 = G__12381;
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
return xhr.setResponseType((function (){var G__12383 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__12383)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__12383)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__12383)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__12383)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__12383)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__12383)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__12384){
var map__12388 = p__12384;
var map__12388__$1 = ((((!((map__12388 == null)))?((((map__12388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12388):map__12388);
var request = map__12388__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__12388__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__12388__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__12388__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4503__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__12390 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__12390,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__12390,response_type);

G__12390.setTimeoutInterval(timeout);

G__12390.setWithCredentials(send_credentials);

return G__12390;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__12391){
var map__12418 = p__12391;
var map__12418__$1 = ((((!((map__12418 == null)))?((((map__12418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12418):map__12418);
var request = map__12418__$1;
var request_method = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4503__auto__ = request_method;
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__12418,map__12418__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__12418,map__12418__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__7026__auto___12444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___12444,channel,request_url,method,headers__$1,xhr__$1,map__12418,map__12418__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___12444,channel,request_url,method,headers__$1,xhr__$1,map__12418,map__12418__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_12430){
var state_val_12431 = (state_12430[(1)]);
if((state_val_12431 === (1))){
var state_12430__$1 = state_12430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12430__$1,(2),cancel);
} else {
if((state_val_12431 === (2))){
var inst_12421 = (state_12430[(2)]);
var inst_12422 = xhr__$1.isComplete();
var inst_12423 = cljs.core.not.call(null,inst_12422);
var state_12430__$1 = (function (){var statearr_12432 = state_12430;
(statearr_12432[(7)] = inst_12421);

return statearr_12432;
})();
if(inst_12423){
var statearr_12433_12445 = state_12430__$1;
(statearr_12433_12445[(1)] = (3));

} else {
var statearr_12434_12446 = state_12430__$1;
(statearr_12434_12446[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12431 === (3))){
var inst_12425 = xhr__$1.abort();
var state_12430__$1 = state_12430;
var statearr_12435_12447 = state_12430__$1;
(statearr_12435_12447[(2)] = inst_12425);

(statearr_12435_12447[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12431 === (4))){
var state_12430__$1 = state_12430;
var statearr_12436_12448 = state_12430__$1;
(statearr_12436_12448[(2)] = null);

(statearr_12436_12448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12431 === (5))){
var inst_12428 = (state_12430[(2)]);
var state_12430__$1 = state_12430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12430__$1,inst_12428);
} else {
return null;
}
}
}
}
}
});})(c__7026__auto___12444,channel,request_url,method,headers__$1,xhr__$1,map__12418,map__12418__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__6961__auto__,c__7026__auto___12444,channel,request_url,method,headers__$1,xhr__$1,map__12418,map__12418__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__6962__auto__ = null;
var cljs_http$core$xhr_$_state_machine__6962__auto____0 = (function (){
var statearr_12440 = [null,null,null,null,null,null,null,null];
(statearr_12440[(0)] = cljs_http$core$xhr_$_state_machine__6962__auto__);

(statearr_12440[(1)] = (1));

return statearr_12440;
});
var cljs_http$core$xhr_$_state_machine__6962__auto____1 = (function (state_12430){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_12430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e12441){if((e12441 instanceof Object)){
var ex__6965__auto__ = e12441;
var statearr_12442_12449 = state_12430;
(statearr_12442_12449[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12450 = state_12430;
state_12430 = G__12450;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__6962__auto__ = function(state_12430){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__6962__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__6962__auto____1.call(this,state_12430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__6962__auto____0;
cljs_http$core$xhr_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__6962__auto____1;
return cljs_http$core$xhr_$_state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___12444,channel,request_url,method,headers__$1,xhr__$1,map__12418,map__12418__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__7028__auto__ = (function (){var statearr_12443 = f__7027__auto__.call(null);
(statearr_12443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___12444);

return statearr_12443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___12444,channel,request_url,method,headers__$1,xhr__$1,map__12418,map__12418__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__12451){
var map__12468 = p__12451;
var map__12468__$1 = ((((!((map__12468 == null)))?((((map__12468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12468):map__12468);
var request = map__12468__$1;
var timeout = cljs.core.get.call(null,map__12468__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__12468__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__12468__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_12484 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_12484], null));

if(cljs.core.truth_(cancel)){
var c__7026__auto___12485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___12485,req_12484,channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___12485,req_12484,channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel){
return (function (state_12474){
var state_val_12475 = (state_12474[(1)]);
if((state_val_12475 === (1))){
var state_12474__$1 = state_12474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12474__$1,(2),cancel);
} else {
if((state_val_12475 === (2))){
var inst_12471 = (state_12474[(2)]);
var inst_12472 = jsonp__$1.cancel(req_12484);
var state_12474__$1 = (function (){var statearr_12476 = state_12474;
(statearr_12476[(7)] = inst_12471);

return statearr_12476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12474__$1,inst_12472);
} else {
return null;
}
}
});})(c__7026__auto___12485,req_12484,channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__6961__auto__,c__7026__auto___12485,req_12484,channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__6962__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__6962__auto____0 = (function (){
var statearr_12480 = [null,null,null,null,null,null,null,null];
(statearr_12480[(0)] = cljs_http$core$jsonp_$_state_machine__6962__auto__);

(statearr_12480[(1)] = (1));

return statearr_12480;
});
var cljs_http$core$jsonp_$_state_machine__6962__auto____1 = (function (state_12474){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_12474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e12481){if((e12481 instanceof Object)){
var ex__6965__auto__ = e12481;
var statearr_12482_12486 = state_12474;
(statearr_12482_12486[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12487 = state_12474;
state_12474 = G__12487;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__6962__auto__ = function(state_12474){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__6962__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__6962__auto____1.call(this,state_12474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__6962__auto____0;
cljs_http$core$jsonp_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__6962__auto____1;
return cljs_http$core$jsonp_$_state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___12485,req_12484,channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel))
})();
var state__7028__auto__ = (function (){var statearr_12483 = f__7027__auto__.call(null);
(statearr_12483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___12485);

return statearr_12483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___12485,req_12484,channel,jsonp__$1,map__12468,map__12468__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__12488){
var map__12491 = p__12488;
var map__12491__$1 = ((((!((map__12491 == null)))?((((map__12491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12491):map__12491);
var request__$1 = map__12491__$1;
var request_method = cljs.core.get.call(null,map__12491__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map