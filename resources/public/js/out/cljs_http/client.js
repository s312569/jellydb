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
if(cljs.core.truth_((function (){var and__29501__auto__ = v;
if(cljs.core.truth_(and__29501__auto__)){
return (v > (0));
} else {
return and__29501__auto__;
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
return cljs.core.reduce.call(null,(function (p1__38285_SHARP_,p2__38284_SHARP_){
var vec__38287 = clojure.string.split.call(null,p2__38284_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__38287,(0),null);
var v = cljs.core.nth.call(null,vec__38287,(1),null);
return cljs.core.assoc.call(null,p1__38285_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__38288_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__38288_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__38289){
var vec__38291 = p__38289;
var k = cljs.core.nth.call(null,vec__38291,(0),null);
var v = cljs.core.nth.call(null,vec__38291,(1),null);
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
return (function (p1__38292_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__38292_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__29501__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__29501__auto__){
var and__29501__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__29501__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__29501__auto____$1;
}
} else {
return and__29501__auto__;
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
return cljs.core.async.map.call(null,(function (p1__38293_SHARP_){
return cljs_http.client.decode_body.call(null,p1__38293_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38298 = arguments.length;
var i__30572__auto___38299 = (0);
while(true){
if((i__30572__auto___38299 < len__30571__auto___38298)){
args__30578__auto__.push((arguments[i__30572__auto___38299]));

var G__38300 = (i__30572__auto___38299 + (1));
i__30572__auto___38299 = G__38300;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38296){
var vec__38297 = p__38296;
var default_headers = cljs.core.nth.call(null,vec__38297,(0),null);
return ((function (vec__38297,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__29513__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
;})(vec__38297,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq38294){
var G__38295 = cljs.core.first.call(null,seq38294);
var seq38294__$1 = cljs.core.next.call(null,seq38294);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__38295,seq38294__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38305 = arguments.length;
var i__30572__auto___38306 = (0);
while(true){
if((i__30572__auto___38306 < len__30571__auto___38305)){
args__30578__auto__.push((arguments[i__30572__auto___38306]));

var G__38307 = (i__30572__auto___38306 + (1));
i__30572__auto___38306 = G__38307;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38303){
var vec__38304 = p__38303;
var accept = cljs.core.nth.call(null,vec__38304,(0),null);
return ((function (vec__38304,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__29513__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
;})(vec__38304,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq38301){
var G__38302 = cljs.core.first.call(null,seq38301);
var seq38301__$1 = cljs.core.next.call(null,seq38301);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__38302,seq38301__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38312 = arguments.length;
var i__30572__auto___38313 = (0);
while(true){
if((i__30572__auto___38313 < len__30571__auto___38312)){
args__30578__auto__.push((arguments[i__30572__auto___38313]));

var G__38314 = (i__30572__auto___38313 + (1));
i__30572__auto___38313 = G__38314;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38310){
var vec__38311 = p__38310;
var content_type = cljs.core.nth.call(null,vec__38311,(0),null);
return ((function (vec__38311,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__29513__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
;})(vec__38311,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq38308){
var G__38309 = cljs.core.first.call(null,seq38308);
var seq38308__$1 = cljs.core.next.call(null,seq38308);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__38309,seq38308__$1);
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
var map__38317 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__38317__$1 = ((((!((map__38317 == null)))?((((map__38317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38317):map__38317);
var encoding = cljs.core.get.call(null,map__38317__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__38317__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__38323 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__38323__$1 = ((((!((map__38323 == null)))?((((map__38323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38323):map__38323);
var decoding = cljs.core.get.call(null,map__38323__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__38323__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__38323,map__38323__$1,decoding,decoding_opts){
return (function (p1__38319_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__38319_SHARP_,decoding,decoding_opts);
});})(map__38323,map__38323__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__38323,map__38323__$1,decoding,decoding_opts,transit_decode){
return (function (p1__38320_SHARP_){
return cljs_http.client.decode_body.call(null,p1__38320_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__38323,map__38323__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__38325_SHARP_){
return cljs_http.client.decode_body.call(null,p1__38325_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__38329){
var map__38330 = p__38329;
var map__38330__$1 = ((((!((map__38330 == null)))?((((map__38330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38330):map__38330);
var req = map__38330__$1;
var query_params = cljs.core.get.call(null,map__38330__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__38335){
var map__38336 = p__38335;
var map__38336__$1 = ((((!((map__38336 == null)))?((((map__38336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38336):map__38336);
var request = map__38336__$1;
var form_params = cljs.core.get.call(null,map__38336__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__38336__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__38336__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__29501__auto__ = form_params;
if(cljs.core.truth_(and__29501__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__29501__auto__;
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
var seq__38344_38350 = cljs.core.seq.call(null,params);
var chunk__38345_38351 = null;
var count__38346_38352 = (0);
var i__38347_38353 = (0);
while(true){
if((i__38347_38353 < count__38346_38352)){
var vec__38348_38354 = cljs.core._nth.call(null,chunk__38345_38351,i__38347_38353);
var k_38355 = cljs.core.nth.call(null,vec__38348_38354,(0),null);
var v_38356 = cljs.core.nth.call(null,vec__38348_38354,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_38356)){
form_data.append(cljs.core.name.call(null,k_38355),cljs.core.first.call(null,v_38356),cljs.core.second.call(null,v_38356));
} else {
form_data.append(cljs.core.name.call(null,k_38355),v_38356);
}

var G__38357 = seq__38344_38350;
var G__38358 = chunk__38345_38351;
var G__38359 = count__38346_38352;
var G__38360 = (i__38347_38353 + (1));
seq__38344_38350 = G__38357;
chunk__38345_38351 = G__38358;
count__38346_38352 = G__38359;
i__38347_38353 = G__38360;
continue;
} else {
var temp__4425__auto___38361 = cljs.core.seq.call(null,seq__38344_38350);
if(temp__4425__auto___38361){
var seq__38344_38362__$1 = temp__4425__auto___38361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38344_38362__$1)){
var c__30316__auto___38363 = cljs.core.chunk_first.call(null,seq__38344_38362__$1);
var G__38364 = cljs.core.chunk_rest.call(null,seq__38344_38362__$1);
var G__38365 = c__30316__auto___38363;
var G__38366 = cljs.core.count.call(null,c__30316__auto___38363);
var G__38367 = (0);
seq__38344_38350 = G__38364;
chunk__38345_38351 = G__38365;
count__38346_38352 = G__38366;
i__38347_38353 = G__38367;
continue;
} else {
var vec__38349_38368 = cljs.core.first.call(null,seq__38344_38362__$1);
var k_38369 = cljs.core.nth.call(null,vec__38349_38368,(0),null);
var v_38370 = cljs.core.nth.call(null,vec__38349_38368,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_38370)){
form_data.append(cljs.core.name.call(null,k_38369),cljs.core.first.call(null,v_38370),cljs.core.second.call(null,v_38370));
} else {
form_data.append(cljs.core.name.call(null,k_38369),v_38370);
}

var G__38371 = cljs.core.next.call(null,seq__38344_38362__$1);
var G__38372 = null;
var G__38373 = (0);
var G__38374 = (0);
seq__38344_38350 = G__38371;
chunk__38345_38351 = G__38372;
count__38346_38352 = G__38373;
i__38347_38353 = G__38374;
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
return (function (p__38378){
var map__38379 = p__38378;
var map__38379__$1 = ((((!((map__38379 == null)))?((((map__38379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38379):map__38379);
var request = map__38379__$1;
var multipart_params = cljs.core.get.call(null,map__38379__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__38379__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__29501__auto__ = multipart_params;
if(cljs.core.truth_(and__29501__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__29501__auto__;
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
return (function (p1__38381_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__38381_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__38386){
var map__38387 = p__38386;
var map__38387__$1 = ((((!((map__38387 == null)))?((((map__38387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38387):map__38387);
var req = map__38387__$1;
var query_params = cljs.core.get.call(null,map__38387__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__38387,map__38387__$1,req,query_params){
return (function (p1__38382_SHARP_){
return cljs.core.merge.call(null,p1__38382_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__38387,map__38387__$1,req,query_params))
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
var args__30578__auto__ = [];
var len__30571__auto___38393 = arguments.length;
var i__30572__auto___38394 = (0);
while(true){
if((i__30572__auto___38394 < len__30571__auto___38393)){
args__30578__auto__.push((arguments[i__30572__auto___38394]));

var G__38395 = (i__30572__auto___38394 + (1));
i__30572__auto___38394 = G__38395;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38391){
var vec__38392 = p__38391;
var credentials = cljs.core.nth.call(null,vec__38392,(0),null);
return ((function (vec__38392,credentials){
return (function (req){
var credentials__$1 = (function (){var or__29513__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
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
;})(vec__38392,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq38389){
var G__38390 = cljs.core.first.call(null,seq38389);
var seq38389__$1 = cljs.core.next.call(null,seq38389);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__38390,seq38389__$1);
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
var args__30578__auto__ = [];
var len__30571__auto___38400 = arguments.length;
var i__30572__auto___38401 = (0);
while(true){
if((i__30572__auto___38401 < len__30571__auto___38400)){
args__30578__auto__.push((arguments[i__30572__auto___38401]));

var G__38402 = (i__30572__auto___38401 + (1));
i__30572__auto___38401 = G__38402;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38398){
var vec__38399 = p__38398;
var req = cljs.core.nth.call(null,vec__38399,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq38396){
var G__38397 = cljs.core.first.call(null,seq38396);
var seq38396__$1 = cljs.core.next.call(null,seq38396);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__38397,seq38396__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38407 = arguments.length;
var i__30572__auto___38408 = (0);
while(true){
if((i__30572__auto___38408 < len__30571__auto___38407)){
args__30578__auto__.push((arguments[i__30572__auto___38408]));

var G__38409 = (i__30572__auto___38408 + (1));
i__30572__auto___38408 = G__38409;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38405){
var vec__38406 = p__38405;
var req = cljs.core.nth.call(null,vec__38406,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq38403){
var G__38404 = cljs.core.first.call(null,seq38403);
var seq38403__$1 = cljs.core.next.call(null,seq38403);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__38404,seq38403__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38414 = arguments.length;
var i__30572__auto___38415 = (0);
while(true){
if((i__30572__auto___38415 < len__30571__auto___38414)){
args__30578__auto__.push((arguments[i__30572__auto___38415]));

var G__38416 = (i__30572__auto___38415 + (1));
i__30572__auto___38415 = G__38416;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38412){
var vec__38413 = p__38412;
var req = cljs.core.nth.call(null,vec__38413,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq38410){
var G__38411 = cljs.core.first.call(null,seq38410);
var seq38410__$1 = cljs.core.next.call(null,seq38410);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__38411,seq38410__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38421 = arguments.length;
var i__30572__auto___38422 = (0);
while(true){
if((i__30572__auto___38422 < len__30571__auto___38421)){
args__30578__auto__.push((arguments[i__30572__auto___38422]));

var G__38423 = (i__30572__auto___38422 + (1));
i__30572__auto___38422 = G__38423;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38419){
var vec__38420 = p__38419;
var req = cljs.core.nth.call(null,vec__38420,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq38417){
var G__38418 = cljs.core.first.call(null,seq38417);
var seq38417__$1 = cljs.core.next.call(null,seq38417);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__38418,seq38417__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38428 = arguments.length;
var i__30572__auto___38429 = (0);
while(true){
if((i__30572__auto___38429 < len__30571__auto___38428)){
args__30578__auto__.push((arguments[i__30572__auto___38429]));

var G__38430 = (i__30572__auto___38429 + (1));
i__30572__auto___38429 = G__38430;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38426){
var vec__38427 = p__38426;
var req = cljs.core.nth.call(null,vec__38427,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq38424){
var G__38425 = cljs.core.first.call(null,seq38424);
var seq38424__$1 = cljs.core.next.call(null,seq38424);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__38425,seq38424__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38435 = arguments.length;
var i__30572__auto___38436 = (0);
while(true){
if((i__30572__auto___38436 < len__30571__auto___38435)){
args__30578__auto__.push((arguments[i__30572__auto___38436]));

var G__38437 = (i__30572__auto___38436 + (1));
i__30572__auto___38436 = G__38437;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38433){
var vec__38434 = p__38433;
var req = cljs.core.nth.call(null,vec__38434,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq38431){
var G__38432 = cljs.core.first.call(null,seq38431);
var seq38431__$1 = cljs.core.next.call(null,seq38431);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__38432,seq38431__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38442 = arguments.length;
var i__30572__auto___38443 = (0);
while(true){
if((i__30572__auto___38443 < len__30571__auto___38442)){
args__30578__auto__.push((arguments[i__30572__auto___38443]));

var G__38444 = (i__30572__auto___38443 + (1));
i__30572__auto___38443 = G__38444;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38440){
var vec__38441 = p__38440;
var req = cljs.core.nth.call(null,vec__38441,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq38438){
var G__38439 = cljs.core.first.call(null,seq38438);
var seq38438__$1 = cljs.core.next.call(null,seq38438);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__38439,seq38438__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38449 = arguments.length;
var i__30572__auto___38450 = (0);
while(true){
if((i__30572__auto___38450 < len__30571__auto___38449)){
args__30578__auto__.push((arguments[i__30572__auto___38450]));

var G__38451 = (i__30572__auto___38450 + (1));
i__30572__auto___38450 = G__38451;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38447){
var vec__38448 = p__38447;
var req = cljs.core.nth.call(null,vec__38448,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq38445){
var G__38446 = cljs.core.first.call(null,seq38445);
var seq38445__$1 = cljs.core.next.call(null,seq38445);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__38446,seq38445__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__30578__auto__ = [];
var len__30571__auto___38456 = arguments.length;
var i__30572__auto___38457 = (0);
while(true){
if((i__30572__auto___38457 < len__30571__auto___38456)){
args__30578__auto__.push((arguments[i__30572__auto___38457]));

var G__38458 = (i__30572__auto___38457 + (1));
i__30572__auto___38457 = G__38458;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38454){
var vec__38455 = p__38454;
var req = cljs.core.nth.call(null,vec__38455,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq38452){
var G__38453 = cljs.core.first.call(null,seq38452);
var seq38452__$1 = cljs.core.next.call(null,seq38452);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__38453,seq38452__$1);
});

//# sourceMappingURL=client.js.map