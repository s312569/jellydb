// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__29402__auto__ = v;
if(cljs.core.truth_(and__29402__auto__)){
return (v > (0));
} else {
return and__29402__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__39270_SHARP_,p2__39269_SHARP_){
var vec__39272 = clojure.string.split.call(null,p2__39269_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__39272,(0),null);
var v = cljs.core.nth.call(null,vec__39272,(1),null);
return cljs.core.assoc.call(null,p1__39270_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__39273_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__39273_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__39274){
var vec__39276 = p__39274;
var k = cljs.core.nth.call(null,vec__39276,(0),null);
var v = cljs.core.nth.call(null,vec__39276,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__39277_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__39277_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__29402__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__29402__auto__){
var and__29402__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__29402__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__29402__auto____$1;
}
} else {
return and__29402__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__39278_SHARP_){
return cljs_http.client.decode_body.call(null,p1__39278_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39283 = arguments.length;
var i__30473__auto___39284 = (0);
while(true){
if((i__30473__auto___39284 < len__30472__auto___39283)){
args__30479__auto__.push((arguments[i__30473__auto___39284]));

var G__39285 = (i__30473__auto___39284 + (1));
i__30473__auto___39284 = G__39285;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39281){
var vec__39282 = p__39281;
var default_headers = cljs.core.nth.call(null,vec__39282,(0),null);
return ((function (vec__39282,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__29414__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__39282,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq39279){
var G__39280 = cljs.core.first.call(null,seq39279);
var seq39279__$1 = cljs.core.next.call(null,seq39279);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__39280,seq39279__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39290 = arguments.length;
var i__30473__auto___39291 = (0);
while(true){
if((i__30473__auto___39291 < len__30472__auto___39290)){
args__30479__auto__.push((arguments[i__30473__auto___39291]));

var G__39292 = (i__30473__auto___39291 + (1));
i__30473__auto___39291 = G__39292;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39288){
var vec__39289 = p__39288;
var accept = cljs.core.nth.call(null,vec__39289,(0),null);
return ((function (vec__39289,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__29414__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__39289,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq39286){
var G__39287 = cljs.core.first.call(null,seq39286);
var seq39286__$1 = cljs.core.next.call(null,seq39286);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__39287,seq39286__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39297 = arguments.length;
var i__30473__auto___39298 = (0);
while(true){
if((i__30473__auto___39298 < len__30472__auto___39297)){
args__30479__auto__.push((arguments[i__30473__auto___39298]));

var G__39299 = (i__30473__auto___39298 + (1));
i__30473__auto___39298 = G__39299;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39295){
var vec__39296 = p__39295;
var content_type = cljs.core.nth.call(null,vec__39296,(0),null);
return ((function (vec__39296,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__29414__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__39296,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq39293){
var G__39294 = cljs.core.first.call(null,seq39293);
var seq39293__$1 = cljs.core.next.call(null,seq39293);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__39294,seq39293__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__39302 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__39302__$1 = ((((!((map__39302 == null)))?((((map__39302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39302):map__39302);
var encoding = cljs.core.get.call(null,map__39302__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__39302__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__39308 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__39308__$1 = ((((!((map__39308 == null)))?((((map__39308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39308):map__39308);
var decoding = cljs.core.get.call(null,map__39308__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__39308__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__39308,map__39308__$1,decoding,decoding_opts){
return (function (p1__39304_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__39304_SHARP_,decoding,decoding_opts);
});})(map__39308,map__39308__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__39308,map__39308__$1,decoding,decoding_opts,transit_decode){
return (function (p1__39305_SHARP_){
return cljs_http.client.decode_body.call(null,p1__39305_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__39308,map__39308__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__39310_SHARP_){
return cljs_http.client.decode_body.call(null,p1__39310_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__39314){
var map__39315 = p__39314;
var map__39315__$1 = ((((!((map__39315 == null)))?((((map__39315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39315):map__39315);
var req = map__39315__$1;
var query_params = cljs.core.get.call(null,map__39315__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__39320){
var map__39321 = p__39320;
var map__39321__$1 = ((((!((map__39321 == null)))?((((map__39321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39321):map__39321);
var request = map__39321__$1;
var form_params = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__29402__auto__ = form_params;
if(cljs.core.truth_(and__29402__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__29402__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__39329_39335 = cljs.core.seq.call(null,params);
var chunk__39330_39336 = null;
var count__39331_39337 = (0);
var i__39332_39338 = (0);
while(true){
if((i__39332_39338 < count__39331_39337)){
var vec__39333_39339 = cljs.core._nth.call(null,chunk__39330_39336,i__39332_39338);
var k_39340 = cljs.core.nth.call(null,vec__39333_39339,(0),null);
var v_39341 = cljs.core.nth.call(null,vec__39333_39339,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_39341)){
form_data.append(cljs.core.name.call(null,k_39340),cljs.core.first.call(null,v_39341),cljs.core.second.call(null,v_39341));
} else {
form_data.append(cljs.core.name.call(null,k_39340),v_39341);
}

var G__39342 = seq__39329_39335;
var G__39343 = chunk__39330_39336;
var G__39344 = count__39331_39337;
var G__39345 = (i__39332_39338 + (1));
seq__39329_39335 = G__39342;
chunk__39330_39336 = G__39343;
count__39331_39337 = G__39344;
i__39332_39338 = G__39345;
continue;
} else {
var temp__4425__auto___39346 = cljs.core.seq.call(null,seq__39329_39335);
if(temp__4425__auto___39346){
var seq__39329_39347__$1 = temp__4425__auto___39346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39329_39347__$1)){
var c__30217__auto___39348 = cljs.core.chunk_first.call(null,seq__39329_39347__$1);
var G__39349 = cljs.core.chunk_rest.call(null,seq__39329_39347__$1);
var G__39350 = c__30217__auto___39348;
var G__39351 = cljs.core.count.call(null,c__30217__auto___39348);
var G__39352 = (0);
seq__39329_39335 = G__39349;
chunk__39330_39336 = G__39350;
count__39331_39337 = G__39351;
i__39332_39338 = G__39352;
continue;
} else {
var vec__39334_39353 = cljs.core.first.call(null,seq__39329_39347__$1);
var k_39354 = cljs.core.nth.call(null,vec__39334_39353,(0),null);
var v_39355 = cljs.core.nth.call(null,vec__39334_39353,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_39355)){
form_data.append(cljs.core.name.call(null,k_39354),cljs.core.first.call(null,v_39355),cljs.core.second.call(null,v_39355));
} else {
form_data.append(cljs.core.name.call(null,k_39354),v_39355);
}

var G__39356 = cljs.core.next.call(null,seq__39329_39347__$1);
var G__39357 = null;
var G__39358 = (0);
var G__39359 = (0);
seq__39329_39335 = G__39356;
chunk__39330_39336 = G__39357;
count__39331_39337 = G__39358;
i__39332_39338 = G__39359;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__39363){
var map__39364 = p__39363;
var map__39364__$1 = ((((!((map__39364 == null)))?((((map__39364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39364):map__39364);
var request = map__39364__$1;
var multipart_params = cljs.core.get.call(null,map__39364__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__39364__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__29402__auto__ = multipart_params;
if(cljs.core.truth_(and__29402__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__29402__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__39366_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__39366_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__39371){
var map__39372 = p__39371;
var map__39372__$1 = ((((!((map__39372 == null)))?((((map__39372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39372):map__39372);
var req = map__39372__$1;
var query_params = cljs.core.get.call(null,map__39372__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__39372,map__39372__$1,req,query_params){
return (function (p1__39367_SHARP_){
return cljs.core.merge.call(null,p1__39367_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__39372,map__39372__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39378 = arguments.length;
var i__30473__auto___39379 = (0);
while(true){
if((i__30473__auto___39379 < len__30472__auto___39378)){
args__30479__auto__.push((arguments[i__30473__auto___39379]));

var G__39380 = (i__30473__auto___39379 + (1));
i__30473__auto___39379 = G__39380;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39376){
var vec__39377 = p__39376;
var credentials = cljs.core.nth.call(null,vec__39377,(0),null);
return ((function (vec__39377,credentials){
return (function (req){
var credentials__$1 = (function (){var or__29414__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__39377,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq39374){
var G__39375 = cljs.core.first.call(null,seq39374);
var seq39374__$1 = cljs.core.next.call(null,seq39374);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__39375,seq39374__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39385 = arguments.length;
var i__30473__auto___39386 = (0);
while(true){
if((i__30473__auto___39386 < len__30472__auto___39385)){
args__30479__auto__.push((arguments[i__30473__auto___39386]));

var G__39387 = (i__30473__auto___39386 + (1));
i__30473__auto___39386 = G__39387;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39383){
var vec__39384 = p__39383;
var req = cljs.core.nth.call(null,vec__39384,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq39381){
var G__39382 = cljs.core.first.call(null,seq39381);
var seq39381__$1 = cljs.core.next.call(null,seq39381);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__39382,seq39381__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39392 = arguments.length;
var i__30473__auto___39393 = (0);
while(true){
if((i__30473__auto___39393 < len__30472__auto___39392)){
args__30479__auto__.push((arguments[i__30473__auto___39393]));

var G__39394 = (i__30473__auto___39393 + (1));
i__30473__auto___39393 = G__39394;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39390){
var vec__39391 = p__39390;
var req = cljs.core.nth.call(null,vec__39391,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq39388){
var G__39389 = cljs.core.first.call(null,seq39388);
var seq39388__$1 = cljs.core.next.call(null,seq39388);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__39389,seq39388__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39399 = arguments.length;
var i__30473__auto___39400 = (0);
while(true){
if((i__30473__auto___39400 < len__30472__auto___39399)){
args__30479__auto__.push((arguments[i__30473__auto___39400]));

var G__39401 = (i__30473__auto___39400 + (1));
i__30473__auto___39400 = G__39401;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39397){
var vec__39398 = p__39397;
var req = cljs.core.nth.call(null,vec__39398,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq39395){
var G__39396 = cljs.core.first.call(null,seq39395);
var seq39395__$1 = cljs.core.next.call(null,seq39395);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__39396,seq39395__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39406 = arguments.length;
var i__30473__auto___39407 = (0);
while(true){
if((i__30473__auto___39407 < len__30472__auto___39406)){
args__30479__auto__.push((arguments[i__30473__auto___39407]));

var G__39408 = (i__30473__auto___39407 + (1));
i__30473__auto___39407 = G__39408;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39404){
var vec__39405 = p__39404;
var req = cljs.core.nth.call(null,vec__39405,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq39402){
var G__39403 = cljs.core.first.call(null,seq39402);
var seq39402__$1 = cljs.core.next.call(null,seq39402);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__39403,seq39402__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39413 = arguments.length;
var i__30473__auto___39414 = (0);
while(true){
if((i__30473__auto___39414 < len__30472__auto___39413)){
args__30479__auto__.push((arguments[i__30473__auto___39414]));

var G__39415 = (i__30473__auto___39414 + (1));
i__30473__auto___39414 = G__39415;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39411){
var vec__39412 = p__39411;
var req = cljs.core.nth.call(null,vec__39412,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq39409){
var G__39410 = cljs.core.first.call(null,seq39409);
var seq39409__$1 = cljs.core.next.call(null,seq39409);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__39410,seq39409__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39420 = arguments.length;
var i__30473__auto___39421 = (0);
while(true){
if((i__30473__auto___39421 < len__30472__auto___39420)){
args__30479__auto__.push((arguments[i__30473__auto___39421]));

var G__39422 = (i__30473__auto___39421 + (1));
i__30473__auto___39421 = G__39422;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39418){
var vec__39419 = p__39418;
var req = cljs.core.nth.call(null,vec__39419,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq39416){
var G__39417 = cljs.core.first.call(null,seq39416);
var seq39416__$1 = cljs.core.next.call(null,seq39416);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__39417,seq39416__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39427 = arguments.length;
var i__30473__auto___39428 = (0);
while(true){
if((i__30473__auto___39428 < len__30472__auto___39427)){
args__30479__auto__.push((arguments[i__30473__auto___39428]));

var G__39429 = (i__30473__auto___39428 + (1));
i__30473__auto___39428 = G__39429;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39425){
var vec__39426 = p__39425;
var req = cljs.core.nth.call(null,vec__39426,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq39423){
var G__39424 = cljs.core.first.call(null,seq39423);
var seq39423__$1 = cljs.core.next.call(null,seq39423);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__39424,seq39423__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39434 = arguments.length;
var i__30473__auto___39435 = (0);
while(true){
if((i__30473__auto___39435 < len__30472__auto___39434)){
args__30479__auto__.push((arguments[i__30473__auto___39435]));

var G__39436 = (i__30473__auto___39435 + (1));
i__30473__auto___39435 = G__39436;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39432){
var vec__39433 = p__39432;
var req = cljs.core.nth.call(null,vec__39433,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq39430){
var G__39431 = cljs.core.first.call(null,seq39430);
var seq39430__$1 = cljs.core.next.call(null,seq39430);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__39431,seq39430__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__30479__auto__ = [];
var len__30472__auto___39441 = arguments.length;
var i__30473__auto___39442 = (0);
while(true){
if((i__30473__auto___39442 < len__30472__auto___39441)){
args__30479__auto__.push((arguments[i__30473__auto___39442]));

var G__39443 = (i__30473__auto___39442 + (1));
i__30473__auto___39442 = G__39443;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39439){
var vec__39440 = p__39439;
var req = cljs.core.nth.call(null,vec__39440,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq39437){
var G__39438 = cljs.core.first.call(null,seq39437);
var seq39437__$1 = cljs.core.next.call(null,seq39437);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__39438,seq39437__$1);
});

//# sourceMappingURL=client.js.map