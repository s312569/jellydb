// Compiled by ClojureScript 1.9.93 {}
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
if(cljs.core.truth_((function (){var and__30848__auto__ = v;
if(cljs.core.truth_(and__30848__auto__)){
return (v > (0));
} else {
return and__30848__auto__;
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
return cljs.core.reduce.call(null,(function (p1__39396_SHARP_,p2__39395_SHARP_){
var vec__39400 = clojure.string.split.call(null,p2__39395_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__39400,(0),null);
var v = cljs.core.nth.call(null,vec__39400,(1),null);
return cljs.core.assoc.call(null,p1__39396_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__39403_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__39403_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__39404){
var vec__39408 = p__39404;
var k = cljs.core.nth.call(null,vec__39408,(0),null);
var v = cljs.core.nth.call(null,vec__39408,(1),null);
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
return (function (p1__39411_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__39411_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__30848__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__30848__auto__){
var and__30848__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__30848__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__30848__auto____$1;
}
} else {
return and__30848__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
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
return cljs.core.async.map.call(null,(function (p1__39412_SHARP_){
return cljs_http.client.decode_body.call(null,p1__39412_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39419 = arguments.length;
var i__31936__auto___39420 = (0);
while(true){
if((i__31936__auto___39420 < len__31935__auto___39419)){
args__31942__auto__.push((arguments[i__31936__auto___39420]));

var G__39421 = (i__31936__auto___39420 + (1));
i__31936__auto___39420 = G__39421;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39415){
var vec__39416 = p__39415;
var default_headers = cljs.core.nth.call(null,vec__39416,(0),null);
return ((function (vec__39416,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__30860__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__39416,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq39413){
var G__39414 = cljs.core.first.call(null,seq39413);
var seq39413__$1 = cljs.core.next.call(null,seq39413);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__39414,seq39413__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39428 = arguments.length;
var i__31936__auto___39429 = (0);
while(true){
if((i__31936__auto___39429 < len__31935__auto___39428)){
args__31942__auto__.push((arguments[i__31936__auto___39429]));

var G__39430 = (i__31936__auto___39429 + (1));
i__31936__auto___39429 = G__39430;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39424){
var vec__39425 = p__39424;
var accept = cljs.core.nth.call(null,vec__39425,(0),null);
return ((function (vec__39425,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__30860__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__39425,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq39422){
var G__39423 = cljs.core.first.call(null,seq39422);
var seq39422__$1 = cljs.core.next.call(null,seq39422);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__39423,seq39422__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39437 = arguments.length;
var i__31936__auto___39438 = (0);
while(true){
if((i__31936__auto___39438 < len__31935__auto___39437)){
args__31942__auto__.push((arguments[i__31936__auto___39438]));

var G__39439 = (i__31936__auto___39438 + (1));
i__31936__auto___39438 = G__39439;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39433){
var vec__39434 = p__39433;
var content_type = cljs.core.nth.call(null,vec__39434,(0),null);
return ((function (vec__39434,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__30860__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__39434,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq39431){
var G__39432 = cljs.core.first.call(null,seq39431);
var seq39431__$1 = cljs.core.next.call(null,seq39431);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__39432,seq39431__$1);
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__39442 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__39442__$1 = ((((!((map__39442 == null)))?((((map__39442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39442):map__39442);
var encoding = cljs.core.get.call(null,map__39442__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__39442__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__39448 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__39448__$1 = ((((!((map__39448 == null)))?((((map__39448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39448):map__39448);
var decoding = cljs.core.get.call(null,map__39448__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__39448__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__39448,map__39448__$1,decoding,decoding_opts){
return (function (p1__39444_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__39444_SHARP_,decoding,decoding_opts);
});})(map__39448,map__39448__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__39448,map__39448__$1,decoding,decoding_opts,transit_decode){
return (function (p1__39445_SHARP_){
return cljs_http.client.decode_body.call(null,p1__39445_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__39448,map__39448__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
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
return cljs.core.async.map.call(null,(function (p1__39450_SHARP_){
return cljs_http.client.decode_body.call(null,p1__39450_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__39454){
var map__39455 = p__39454;
var map__39455__$1 = ((((!((map__39455 == null)))?((((map__39455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39455):map__39455);
var req = map__39455__$1;
var query_params = cljs.core.get.call(null,map__39455__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__39460){
var map__39461 = p__39460;
var map__39461__$1 = ((((!((map__39461 == null)))?((((map__39461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39461):map__39461);
var request = map__39461__$1;
var form_params = cljs.core.get.call(null,map__39461__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__39461__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__39461__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__30848__auto__ = form_params;
if(cljs.core.truth_(and__30848__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__30848__auto__;
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
var seq__39473_39483 = cljs.core.seq.call(null,params);
var chunk__39474_39484 = null;
var count__39475_39485 = (0);
var i__39476_39486 = (0);
while(true){
if((i__39476_39486 < count__39475_39485)){
var vec__39477_39487 = cljs.core._nth.call(null,chunk__39474_39484,i__39476_39486);
var k_39488 = cljs.core.nth.call(null,vec__39477_39487,(0),null);
var v_39489 = cljs.core.nth.call(null,vec__39477_39487,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_39489)){
form_data.append(cljs.core.name.call(null,k_39488),cljs.core.first.call(null,v_39489),cljs.core.second.call(null,v_39489));
} else {
form_data.append(cljs.core.name.call(null,k_39488),v_39489);
}

var G__39490 = seq__39473_39483;
var G__39491 = chunk__39474_39484;
var G__39492 = count__39475_39485;
var G__39493 = (i__39476_39486 + (1));
seq__39473_39483 = G__39490;
chunk__39474_39484 = G__39491;
count__39475_39485 = G__39492;
i__39476_39486 = G__39493;
continue;
} else {
var temp__4657__auto___39494 = cljs.core.seq.call(null,seq__39473_39483);
if(temp__4657__auto___39494){
var seq__39473_39495__$1 = temp__4657__auto___39494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39473_39495__$1)){
var c__31671__auto___39496 = cljs.core.chunk_first.call(null,seq__39473_39495__$1);
var G__39497 = cljs.core.chunk_rest.call(null,seq__39473_39495__$1);
var G__39498 = c__31671__auto___39496;
var G__39499 = cljs.core.count.call(null,c__31671__auto___39496);
var G__39500 = (0);
seq__39473_39483 = G__39497;
chunk__39474_39484 = G__39498;
count__39475_39485 = G__39499;
i__39476_39486 = G__39500;
continue;
} else {
var vec__39480_39501 = cljs.core.first.call(null,seq__39473_39495__$1);
var k_39502 = cljs.core.nth.call(null,vec__39480_39501,(0),null);
var v_39503 = cljs.core.nth.call(null,vec__39480_39501,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_39503)){
form_data.append(cljs.core.name.call(null,k_39502),cljs.core.first.call(null,v_39503),cljs.core.second.call(null,v_39503));
} else {
form_data.append(cljs.core.name.call(null,k_39502),v_39503);
}

var G__39504 = cljs.core.next.call(null,seq__39473_39495__$1);
var G__39505 = null;
var G__39506 = (0);
var G__39507 = (0);
seq__39473_39483 = G__39504;
chunk__39474_39484 = G__39505;
count__39475_39485 = G__39506;
i__39476_39486 = G__39507;
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
return (function (p__39511){
var map__39512 = p__39511;
var map__39512__$1 = ((((!((map__39512 == null)))?((((map__39512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39512):map__39512);
var request = map__39512__$1;
var multipart_params = cljs.core.get.call(null,map__39512__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__39512__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__30848__auto__ = multipart_params;
if(cljs.core.truth_(and__30848__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__30848__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__39514_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__39514_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__39519){
var map__39520 = p__39519;
var map__39520__$1 = ((((!((map__39520 == null)))?((((map__39520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39520):map__39520);
var req = map__39520__$1;
var query_params = cljs.core.get.call(null,map__39520__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__39520,map__39520__$1,req,query_params){
return (function (p1__39515_SHARP_){
return cljs.core.merge.call(null,p1__39515_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__39520,map__39520__$1,req,query_params))
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
var args__31942__auto__ = [];
var len__31935__auto___39528 = arguments.length;
var i__31936__auto___39529 = (0);
while(true){
if((i__31936__auto___39529 < len__31935__auto___39528)){
args__31942__auto__.push((arguments[i__31936__auto___39529]));

var G__39530 = (i__31936__auto___39529 + (1));
i__31936__auto___39529 = G__39530;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39524){
var vec__39525 = p__39524;
var credentials = cljs.core.nth.call(null,vec__39525,(0),null);
return ((function (vec__39525,credentials){
return (function (req){
var credentials__$1 = (function (){var or__30860__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
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
;})(vec__39525,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq39522){
var G__39523 = cljs.core.first.call(null,seq39522);
var seq39522__$1 = cljs.core.next.call(null,seq39522);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__39523,seq39522__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
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
var args__31942__auto__ = [];
var len__31935__auto___39537 = arguments.length;
var i__31936__auto___39538 = (0);
while(true){
if((i__31936__auto___39538 < len__31935__auto___39537)){
args__31942__auto__.push((arguments[i__31936__auto___39538]));

var G__39539 = (i__31936__auto___39538 + (1));
i__31936__auto___39538 = G__39539;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39533){
var vec__39534 = p__39533;
var req = cljs.core.nth.call(null,vec__39534,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq39531){
var G__39532 = cljs.core.first.call(null,seq39531);
var seq39531__$1 = cljs.core.next.call(null,seq39531);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__39532,seq39531__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39546 = arguments.length;
var i__31936__auto___39547 = (0);
while(true){
if((i__31936__auto___39547 < len__31935__auto___39546)){
args__31942__auto__.push((arguments[i__31936__auto___39547]));

var G__39548 = (i__31936__auto___39547 + (1));
i__31936__auto___39547 = G__39548;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39542){
var vec__39543 = p__39542;
var req = cljs.core.nth.call(null,vec__39543,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq39540){
var G__39541 = cljs.core.first.call(null,seq39540);
var seq39540__$1 = cljs.core.next.call(null,seq39540);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__39541,seq39540__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39555 = arguments.length;
var i__31936__auto___39556 = (0);
while(true){
if((i__31936__auto___39556 < len__31935__auto___39555)){
args__31942__auto__.push((arguments[i__31936__auto___39556]));

var G__39557 = (i__31936__auto___39556 + (1));
i__31936__auto___39556 = G__39557;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39551){
var vec__39552 = p__39551;
var req = cljs.core.nth.call(null,vec__39552,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq39549){
var G__39550 = cljs.core.first.call(null,seq39549);
var seq39549__$1 = cljs.core.next.call(null,seq39549);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__39550,seq39549__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39564 = arguments.length;
var i__31936__auto___39565 = (0);
while(true){
if((i__31936__auto___39565 < len__31935__auto___39564)){
args__31942__auto__.push((arguments[i__31936__auto___39565]));

var G__39566 = (i__31936__auto___39565 + (1));
i__31936__auto___39565 = G__39566;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39560){
var vec__39561 = p__39560;
var req = cljs.core.nth.call(null,vec__39561,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq39558){
var G__39559 = cljs.core.first.call(null,seq39558);
var seq39558__$1 = cljs.core.next.call(null,seq39558);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__39559,seq39558__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39573 = arguments.length;
var i__31936__auto___39574 = (0);
while(true){
if((i__31936__auto___39574 < len__31935__auto___39573)){
args__31942__auto__.push((arguments[i__31936__auto___39574]));

var G__39575 = (i__31936__auto___39574 + (1));
i__31936__auto___39574 = G__39575;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39569){
var vec__39570 = p__39569;
var req = cljs.core.nth.call(null,vec__39570,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq39567){
var G__39568 = cljs.core.first.call(null,seq39567);
var seq39567__$1 = cljs.core.next.call(null,seq39567);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__39568,seq39567__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39582 = arguments.length;
var i__31936__auto___39583 = (0);
while(true){
if((i__31936__auto___39583 < len__31935__auto___39582)){
args__31942__auto__.push((arguments[i__31936__auto___39583]));

var G__39584 = (i__31936__auto___39583 + (1));
i__31936__auto___39583 = G__39584;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39578){
var vec__39579 = p__39578;
var req = cljs.core.nth.call(null,vec__39579,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq39576){
var G__39577 = cljs.core.first.call(null,seq39576);
var seq39576__$1 = cljs.core.next.call(null,seq39576);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__39577,seq39576__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39591 = arguments.length;
var i__31936__auto___39592 = (0);
while(true){
if((i__31936__auto___39592 < len__31935__auto___39591)){
args__31942__auto__.push((arguments[i__31936__auto___39592]));

var G__39593 = (i__31936__auto___39592 + (1));
i__31936__auto___39592 = G__39593;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39587){
var vec__39588 = p__39587;
var req = cljs.core.nth.call(null,vec__39588,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq39585){
var G__39586 = cljs.core.first.call(null,seq39585);
var seq39585__$1 = cljs.core.next.call(null,seq39585);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__39586,seq39585__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39600 = arguments.length;
var i__31936__auto___39601 = (0);
while(true){
if((i__31936__auto___39601 < len__31935__auto___39600)){
args__31942__auto__.push((arguments[i__31936__auto___39601]));

var G__39602 = (i__31936__auto___39601 + (1));
i__31936__auto___39601 = G__39602;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39596){
var vec__39597 = p__39596;
var req = cljs.core.nth.call(null,vec__39597,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq39594){
var G__39595 = cljs.core.first.call(null,seq39594);
var seq39594__$1 = cljs.core.next.call(null,seq39594);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__39595,seq39594__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__31942__auto__ = [];
var len__31935__auto___39609 = arguments.length;
var i__31936__auto___39610 = (0);
while(true){
if((i__31936__auto___39610 < len__31935__auto___39609)){
args__31942__auto__.push((arguments[i__31936__auto___39610]));

var G__39611 = (i__31936__auto___39610 + (1));
i__31936__auto___39610 = G__39611;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39605){
var vec__39606 = p__39605;
var req = cljs.core.nth.call(null,vec__39606,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq39603){
var G__39604 = cljs.core.first.call(null,seq39603);
var seq39603__$1 = cljs.core.next.call(null,seq39603);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__39604,seq39603__$1);
});


//# sourceMappingURL=client.js.map?rel=1471771442100