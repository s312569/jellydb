// Compiled by ClojureScript 1.9.93 {}
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
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
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
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__38639){
var vec__38640 = p__38639;
var k = cljs.core.nth.call(null,vec__38640,(0),null);
var v = cljs.core.nth.call(null,vec__38640,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__38644 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__38644)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__38644)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__38644)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__38644)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__38644)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__38644)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__38645){
var map__38649 = p__38645;
var map__38649__$1 = ((((!((map__38649 == null)))?((((map__38649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38649):map__38649);
var request = map__38649__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__38649__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__38649__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__38649__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__30860__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__38651 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__38651,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__38651,response_type);

G__38651.setTimeoutInterval(timeout);

G__38651.setWithCredentials(send_credentials);

return G__38651;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__38652){
var map__38680 = p__38652;
var map__38680__$1 = ((((!((map__38680 == null)))?((((map__38680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38680):map__38680);
var request = map__38680__$1;
var request_method = cljs.core.get.call(null,map__38680__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__38680__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__38680__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__38680__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__38680__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__38680__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__30860__auto__ = request_method;
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_38707 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__38682_38708 = xhr__$1;
G__38682_38708.setProgressEventsEnabled(true);

G__38682_38708.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_38707,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__38682_38708.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_38707,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__35839__auto___38709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___38709,channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___38709,channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_38693){
var state_val_38694 = (state_38693[(1)]);
if((state_val_38694 === (1))){
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38693__$1,(2),cancel);
} else {
if((state_val_38694 === (2))){
var inst_38684 = (state_38693[(2)]);
var inst_38685 = xhr__$1.isComplete();
var inst_38686 = cljs.core.not.call(null,inst_38685);
var state_38693__$1 = (function (){var statearr_38695 = state_38693;
(statearr_38695[(7)] = inst_38684);

return statearr_38695;
})();
if(inst_38686){
var statearr_38696_38710 = state_38693__$1;
(statearr_38696_38710[(1)] = (3));

} else {
var statearr_38697_38711 = state_38693__$1;
(statearr_38697_38711[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (3))){
var inst_38688 = xhr__$1.abort();
var state_38693__$1 = state_38693;
var statearr_38698_38712 = state_38693__$1;
(statearr_38698_38712[(2)] = inst_38688);

(statearr_38698_38712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (4))){
var state_38693__$1 = state_38693;
var statearr_38699_38713 = state_38693__$1;
(statearr_38699_38713[(2)] = null);

(statearr_38699_38713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (5))){
var inst_38691 = (state_38693[(2)]);
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38693__$1,inst_38691);
} else {
return null;
}
}
}
}
}
});})(c__35839__auto___38709,channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__35727__auto__,c__35839__auto___38709,channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__35728__auto__ = null;
var cljs_http$core$xhr_$_state_machine__35728__auto____0 = (function (){
var statearr_38703 = [null,null,null,null,null,null,null,null];
(statearr_38703[(0)] = cljs_http$core$xhr_$_state_machine__35728__auto__);

(statearr_38703[(1)] = (1));

return statearr_38703;
});
var cljs_http$core$xhr_$_state_machine__35728__auto____1 = (function (state_38693){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_38693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e38704){if((e38704 instanceof Object)){
var ex__35731__auto__ = e38704;
var statearr_38705_38714 = state_38693;
(statearr_38705_38714[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38715 = state_38693;
state_38693 = G__38715;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__35728__auto__ = function(state_38693){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__35728__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__35728__auto____1.call(this,state_38693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__35728__auto____0;
cljs_http$core$xhr_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__35728__auto____1;
return cljs_http$core$xhr_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___38709,channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__35841__auto__ = (function (){var statearr_38706 = f__35840__auto__.call(null);
(statearr_38706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___38709);

return statearr_38706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___38709,channel,request_url,method,headers__$1,xhr__$1,map__38680,map__38680__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__38716){
var map__38733 = p__38716;
var map__38733__$1 = ((((!((map__38733 == null)))?((((map__38733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38733):map__38733);
var request = map__38733__$1;
var timeout = cljs.core.get.call(null,map__38733__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__38733__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__38733__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__38733__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_38749 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_38749], null));

if(cljs.core.truth_(cancel)){
var c__35839__auto___38750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___38750,req_38749,channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___38750,req_38749,channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_38739){
var state_val_38740 = (state_38739[(1)]);
if((state_val_38740 === (1))){
var state_38739__$1 = state_38739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38739__$1,(2),cancel);
} else {
if((state_val_38740 === (2))){
var inst_38736 = (state_38739[(2)]);
var inst_38737 = jsonp__$1.cancel(req_38749);
var state_38739__$1 = (function (){var statearr_38741 = state_38739;
(statearr_38741[(7)] = inst_38736);

return statearr_38741;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38739__$1,inst_38737);
} else {
return null;
}
}
});})(c__35839__auto___38750,req_38749,channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__35727__auto__,c__35839__auto___38750,req_38749,channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__35728__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__35728__auto____0 = (function (){
var statearr_38745 = [null,null,null,null,null,null,null,null];
(statearr_38745[(0)] = cljs_http$core$jsonp_$_state_machine__35728__auto__);

(statearr_38745[(1)] = (1));

return statearr_38745;
});
var cljs_http$core$jsonp_$_state_machine__35728__auto____1 = (function (state_38739){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_38739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e38746){if((e38746 instanceof Object)){
var ex__35731__auto__ = e38746;
var statearr_38747_38751 = state_38739;
(statearr_38747_38751[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38752 = state_38739;
state_38739 = G__38752;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__35728__auto__ = function(state_38739){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__35728__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__35728__auto____1.call(this,state_38739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__35728__auto____0;
cljs_http$core$jsonp_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__35728__auto____1;
return cljs_http$core$jsonp_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___38750,req_38749,channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__35841__auto__ = (function (){var statearr_38748 = f__35840__auto__.call(null);
(statearr_38748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___38750);

return statearr_38748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___38750,req_38749,channel,jsonp__$1,map__38733,map__38733__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__38753){
var map__38756 = p__38753;
var map__38756__$1 = ((((!((map__38756 == null)))?((((map__38756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38756):map__38756);
var request__$1 = map__38756__$1;
var request_method = cljs.core.get.call(null,map__38756__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1471771440810