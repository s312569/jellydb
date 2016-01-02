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
var seq__36948 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__36953 = null;
var count__36954 = (0);
var i__36955 = (0);
while(true){
if((i__36955 < count__36954)){
var h_name = cljs.core._nth.call(null,chunk__36953,i__36955);
var seq__36956_36960 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__36957_36961 = null;
var count__36958_36962 = (0);
var i__36959_36963 = (0);
while(true){
if((i__36959_36963 < count__36958_36962)){
var h_val_36964 = cljs.core._nth.call(null,chunk__36957_36961,i__36959_36963);
xhr.headers.set(h_name,h_val_36964);

var G__36965 = seq__36956_36960;
var G__36966 = chunk__36957_36961;
var G__36967 = count__36958_36962;
var G__36968 = (i__36959_36963 + (1));
seq__36956_36960 = G__36965;
chunk__36957_36961 = G__36966;
count__36958_36962 = G__36967;
i__36959_36963 = G__36968;
continue;
} else {
var temp__4425__auto___36969 = cljs.core.seq.call(null,seq__36956_36960);
if(temp__4425__auto___36969){
var seq__36956_36970__$1 = temp__4425__auto___36969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36956_36970__$1)){
var c__30316__auto___36971 = cljs.core.chunk_first.call(null,seq__36956_36970__$1);
var G__36972 = cljs.core.chunk_rest.call(null,seq__36956_36970__$1);
var G__36973 = c__30316__auto___36971;
var G__36974 = cljs.core.count.call(null,c__30316__auto___36971);
var G__36975 = (0);
seq__36956_36960 = G__36972;
chunk__36957_36961 = G__36973;
count__36958_36962 = G__36974;
i__36959_36963 = G__36975;
continue;
} else {
var h_val_36976 = cljs.core.first.call(null,seq__36956_36970__$1);
xhr.headers.set(h_name,h_val_36976);

var G__36977 = cljs.core.next.call(null,seq__36956_36970__$1);
var G__36978 = null;
var G__36979 = (0);
var G__36980 = (0);
seq__36956_36960 = G__36977;
chunk__36957_36961 = G__36978;
count__36958_36962 = G__36979;
i__36959_36963 = G__36980;
continue;
}
} else {
}
}
break;
}

var G__36981 = seq__36948;
var G__36982 = chunk__36953;
var G__36983 = count__36954;
var G__36984 = (i__36955 + (1));
seq__36948 = G__36981;
chunk__36953 = G__36982;
count__36954 = G__36983;
i__36955 = G__36984;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36948);
if(temp__4425__auto__){
var seq__36948__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36948__$1)){
var c__30316__auto__ = cljs.core.chunk_first.call(null,seq__36948__$1);
var G__36985 = cljs.core.chunk_rest.call(null,seq__36948__$1);
var G__36986 = c__30316__auto__;
var G__36987 = cljs.core.count.call(null,c__30316__auto__);
var G__36988 = (0);
seq__36948 = G__36985;
chunk__36953 = G__36986;
count__36954 = G__36987;
i__36955 = G__36988;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__36948__$1);
var seq__36949_36989 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__36950_36990 = null;
var count__36951_36991 = (0);
var i__36952_36992 = (0);
while(true){
if((i__36952_36992 < count__36951_36991)){
var h_val_36993 = cljs.core._nth.call(null,chunk__36950_36990,i__36952_36992);
xhr.headers.set(h_name,h_val_36993);

var G__36994 = seq__36949_36989;
var G__36995 = chunk__36950_36990;
var G__36996 = count__36951_36991;
var G__36997 = (i__36952_36992 + (1));
seq__36949_36989 = G__36994;
chunk__36950_36990 = G__36995;
count__36951_36991 = G__36996;
i__36952_36992 = G__36997;
continue;
} else {
var temp__4425__auto___36998__$1 = cljs.core.seq.call(null,seq__36949_36989);
if(temp__4425__auto___36998__$1){
var seq__36949_36999__$1 = temp__4425__auto___36998__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36949_36999__$1)){
var c__30316__auto___37000 = cljs.core.chunk_first.call(null,seq__36949_36999__$1);
var G__37001 = cljs.core.chunk_rest.call(null,seq__36949_36999__$1);
var G__37002 = c__30316__auto___37000;
var G__37003 = cljs.core.count.call(null,c__30316__auto___37000);
var G__37004 = (0);
seq__36949_36989 = G__37001;
chunk__36950_36990 = G__37002;
count__36951_36991 = G__37003;
i__36952_36992 = G__37004;
continue;
} else {
var h_val_37005 = cljs.core.first.call(null,seq__36949_36999__$1);
xhr.headers.set(h_name,h_val_37005);

var G__37006 = cljs.core.next.call(null,seq__36949_36999__$1);
var G__37007 = null;
var G__37008 = (0);
var G__37009 = (0);
seq__36949_36989 = G__37006;
chunk__36950_36990 = G__37007;
count__36951_36991 = G__37008;
i__36952_36992 = G__37009;
continue;
}
} else {
}
}
break;
}

var G__37010 = cljs.core.next.call(null,seq__36948__$1);
var G__37011 = null;
var G__37012 = (0);
var G__37013 = (0);
seq__36948 = G__37010;
chunk__36953 = G__37011;
count__36954 = G__37012;
i__36955 = G__37013;
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
return xhr.setResponseType((function (){var G__37015 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__37015)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__37015)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__37015)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__37015)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__37015)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__37015)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__37016){
var map__37020 = p__37016;
var map__37020__$1 = ((((!((map__37020 == null)))?((((map__37020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37020):map__37020);
var request = map__37020__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__37020__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__37020__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__37020__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__29513__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__37022 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__37022,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__37022,response_type);

G__37022.setTimeoutInterval(timeout);

G__37022.setWithCredentials(send_credentials);

return G__37022;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__37023){
var map__37050 = p__37023;
var map__37050__$1 = ((((!((map__37050 == null)))?((((map__37050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37050):map__37050);
var request = map__37050__$1;
var request_method = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__29513__auto__ = request_method;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__37050,map__37050__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__37050,map__37050__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__32314__auto___37076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___37076,channel,request_url,method,headers__$1,xhr__$1,map__37050,map__37050__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___37076,channel,request_url,method,headers__$1,xhr__$1,map__37050,map__37050__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_37062){
var state_val_37063 = (state_37062[(1)]);
if((state_val_37063 === (1))){
var state_37062__$1 = state_37062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37062__$1,(2),cancel);
} else {
if((state_val_37063 === (2))){
var inst_37053 = (state_37062[(2)]);
var inst_37054 = xhr__$1.isComplete();
var inst_37055 = cljs.core.not.call(null,inst_37054);
var state_37062__$1 = (function (){var statearr_37064 = state_37062;
(statearr_37064[(7)] = inst_37053);

return statearr_37064;
})();
if(inst_37055){
var statearr_37065_37077 = state_37062__$1;
(statearr_37065_37077[(1)] = (3));

} else {
var statearr_37066_37078 = state_37062__$1;
(statearr_37066_37078[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (3))){
var inst_37057 = xhr__$1.abort();
var state_37062__$1 = state_37062;
var statearr_37067_37079 = state_37062__$1;
(statearr_37067_37079[(2)] = inst_37057);

(statearr_37067_37079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (4))){
var state_37062__$1 = state_37062;
var statearr_37068_37080 = state_37062__$1;
(statearr_37068_37080[(2)] = null);

(statearr_37068_37080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (5))){
var inst_37060 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37062__$1,inst_37060);
} else {
return null;
}
}
}
}
}
});})(c__32314__auto___37076,channel,request_url,method,headers__$1,xhr__$1,map__37050,map__37050__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__32293__auto__,c__32314__auto___37076,channel,request_url,method,headers__$1,xhr__$1,map__37050,map__37050__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__32294__auto__ = null;
var cljs_http$core$xhr_$_state_machine__32294__auto____0 = (function (){
var statearr_37072 = [null,null,null,null,null,null,null,null];
(statearr_37072[(0)] = cljs_http$core$xhr_$_state_machine__32294__auto__);

(statearr_37072[(1)] = (1));

return statearr_37072;
});
var cljs_http$core$xhr_$_state_machine__32294__auto____1 = (function (state_37062){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_37062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e37073){if((e37073 instanceof Object)){
var ex__32297__auto__ = e37073;
var statearr_37074_37081 = state_37062;
(statearr_37074_37081[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37082 = state_37062;
state_37062 = G__37082;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__32294__auto__ = function(state_37062){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__32294__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__32294__auto____1.call(this,state_37062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__32294__auto____0;
cljs_http$core$xhr_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__32294__auto____1;
return cljs_http$core$xhr_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___37076,channel,request_url,method,headers__$1,xhr__$1,map__37050,map__37050__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__32316__auto__ = (function (){var statearr_37075 = f__32315__auto__.call(null);
(statearr_37075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___37076);

return statearr_37075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___37076,channel,request_url,method,headers__$1,xhr__$1,map__37050,map__37050__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__37083){
var map__37100 = p__37083;
var map__37100__$1 = ((((!((map__37100 == null)))?((((map__37100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37100):map__37100);
var request = map__37100__$1;
var timeout = cljs.core.get.call(null,map__37100__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__37100__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__37100__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_37116 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_37116], null));

if(cljs.core.truth_(cancel)){
var c__32314__auto___37117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___37117,req_37116,channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___37117,req_37116,channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel){
return (function (state_37106){
var state_val_37107 = (state_37106[(1)]);
if((state_val_37107 === (1))){
var state_37106__$1 = state_37106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37106__$1,(2),cancel);
} else {
if((state_val_37107 === (2))){
var inst_37103 = (state_37106[(2)]);
var inst_37104 = jsonp__$1.cancel(req_37116);
var state_37106__$1 = (function (){var statearr_37108 = state_37106;
(statearr_37108[(7)] = inst_37103);

return statearr_37108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37106__$1,inst_37104);
} else {
return null;
}
}
});})(c__32314__auto___37117,req_37116,channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__32293__auto__,c__32314__auto___37117,req_37116,channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__32294__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__32294__auto____0 = (function (){
var statearr_37112 = [null,null,null,null,null,null,null,null];
(statearr_37112[(0)] = cljs_http$core$jsonp_$_state_machine__32294__auto__);

(statearr_37112[(1)] = (1));

return statearr_37112;
});
var cljs_http$core$jsonp_$_state_machine__32294__auto____1 = (function (state_37106){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_37106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e37113){if((e37113 instanceof Object)){
var ex__32297__auto__ = e37113;
var statearr_37114_37118 = state_37106;
(statearr_37114_37118[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37119 = state_37106;
state_37106 = G__37119;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__32294__auto__ = function(state_37106){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__32294__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__32294__auto____1.call(this,state_37106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__32294__auto____0;
cljs_http$core$jsonp_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__32294__auto____1;
return cljs_http$core$jsonp_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___37117,req_37116,channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel))
})();
var state__32316__auto__ = (function (){var statearr_37115 = f__32315__auto__.call(null);
(statearr_37115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___37117);

return statearr_37115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___37117,req_37116,channel,jsonp__$1,map__37100,map__37100__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__37120){
var map__37123 = p__37120;
var map__37123__$1 = ((((!((map__37123 == null)))?((((map__37123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37123):map__37123);
var request__$1 = map__37123__$1;
var request_method = cljs.core.get.call(null,map__37123__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map