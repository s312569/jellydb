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
if(cljs.core.truth_((function (){var and__28267__auto__ = v;
if(cljs.core.truth_(and__28267__auto__)){
return (v > (0));
} else {
return and__28267__auto__;
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
return cljs.core.reduce.call(null,(function (p1__37702_SHARP_,p2__37701_SHARP_){
var vec__37706 = clojure.string.split.call(null,p2__37701_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__37706,(0),null);
var v = cljs.core.nth.call(null,vec__37706,(1),null);
return cljs.core.assoc.call(null,p1__37702_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__37709_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__37709_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__37710){
var vec__37714 = p__37710;
var k = cljs.core.nth.call(null,vec__37714,(0),null);
var v = cljs.core.nth.call(null,vec__37714,(1),null);
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
return (function (p1__37717_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__37717_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__28267__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__28267__auto__){
var and__28267__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__28267__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__28267__auto____$1;
}
} else {
return and__28267__auto__;
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
return cljs.core.async.map.call(null,(function (p1__37718_SHARP_){
return cljs_http.client.decode_body.call(null,p1__37718_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37725 = arguments.length;
var i__29355__auto___37726 = (0);
while(true){
if((i__29355__auto___37726 < len__29354__auto___37725)){
args__29361__auto__.push((arguments[i__29355__auto___37726]));

var G__37727 = (i__29355__auto___37726 + (1));
i__29355__auto___37726 = G__37727;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__37721){
var vec__37722 = p__37721;
var default_headers = cljs.core.nth.call(null,vec__37722,(0),null);
return ((function (vec__37722,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__28279__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
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
;})(vec__37722,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq37719){
var G__37720 = cljs.core.first.call(null,seq37719);
var seq37719__$1 = cljs.core.next.call(null,seq37719);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__37720,seq37719__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37734 = arguments.length;
var i__29355__auto___37735 = (0);
while(true){
if((i__29355__auto___37735 < len__29354__auto___37734)){
args__29361__auto__.push((arguments[i__29355__auto___37735]));

var G__37736 = (i__29355__auto___37735 + (1));
i__29355__auto___37735 = G__37736;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__37730){
var vec__37731 = p__37730;
var accept = cljs.core.nth.call(null,vec__37731,(0),null);
return ((function (vec__37731,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__28279__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
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
;})(vec__37731,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq37728){
var G__37729 = cljs.core.first.call(null,seq37728);
var seq37728__$1 = cljs.core.next.call(null,seq37728);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__37729,seq37728__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37743 = arguments.length;
var i__29355__auto___37744 = (0);
while(true){
if((i__29355__auto___37744 < len__29354__auto___37743)){
args__29361__auto__.push((arguments[i__29355__auto___37744]));

var G__37745 = (i__29355__auto___37744 + (1));
i__29355__auto___37744 = G__37745;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__37739){
var vec__37740 = p__37739;
var content_type = cljs.core.nth.call(null,vec__37740,(0),null);
return ((function (vec__37740,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__28279__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
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
;})(vec__37740,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq37737){
var G__37738 = cljs.core.first.call(null,seq37737);
var seq37737__$1 = cljs.core.next.call(null,seq37737);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__37738,seq37737__$1);
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
var map__37748 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__37748__$1 = ((((!((map__37748 == null)))?((((map__37748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37748):map__37748);
var encoding = cljs.core.get.call(null,map__37748__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__37748__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__37754 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__37754__$1 = ((((!((map__37754 == null)))?((((map__37754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37754):map__37754);
var decoding = cljs.core.get.call(null,map__37754__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__37754__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__37754,map__37754__$1,decoding,decoding_opts){
return (function (p1__37750_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__37750_SHARP_,decoding,decoding_opts);
});})(map__37754,map__37754__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__37754,map__37754__$1,decoding,decoding_opts,transit_decode){
return (function (p1__37751_SHARP_){
return cljs_http.client.decode_body.call(null,p1__37751_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__37754,map__37754__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__37756_SHARP_){
return cljs_http.client.decode_body.call(null,p1__37756_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__37760){
var map__37761 = p__37760;
var map__37761__$1 = ((((!((map__37761 == null)))?((((map__37761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37761):map__37761);
var req = map__37761__$1;
var query_params = cljs.core.get.call(null,map__37761__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__37766){
var map__37767 = p__37766;
var map__37767__$1 = ((((!((map__37767 == null)))?((((map__37767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37767):map__37767);
var request = map__37767__$1;
var form_params = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__28267__auto__ = form_params;
if(cljs.core.truth_(and__28267__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__28267__auto__;
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
var seq__37779_37789 = cljs.core.seq.call(null,params);
var chunk__37780_37790 = null;
var count__37781_37791 = (0);
var i__37782_37792 = (0);
while(true){
if((i__37782_37792 < count__37781_37791)){
var vec__37783_37793 = cljs.core._nth.call(null,chunk__37780_37790,i__37782_37792);
var k_37794 = cljs.core.nth.call(null,vec__37783_37793,(0),null);
var v_37795 = cljs.core.nth.call(null,vec__37783_37793,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_37795)){
form_data.append(cljs.core.name.call(null,k_37794),cljs.core.first.call(null,v_37795),cljs.core.second.call(null,v_37795));
} else {
form_data.append(cljs.core.name.call(null,k_37794),v_37795);
}

var G__37796 = seq__37779_37789;
var G__37797 = chunk__37780_37790;
var G__37798 = count__37781_37791;
var G__37799 = (i__37782_37792 + (1));
seq__37779_37789 = G__37796;
chunk__37780_37790 = G__37797;
count__37781_37791 = G__37798;
i__37782_37792 = G__37799;
continue;
} else {
var temp__4657__auto___37800 = cljs.core.seq.call(null,seq__37779_37789);
if(temp__4657__auto___37800){
var seq__37779_37801__$1 = temp__4657__auto___37800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37779_37801__$1)){
var c__29090__auto___37802 = cljs.core.chunk_first.call(null,seq__37779_37801__$1);
var G__37803 = cljs.core.chunk_rest.call(null,seq__37779_37801__$1);
var G__37804 = c__29090__auto___37802;
var G__37805 = cljs.core.count.call(null,c__29090__auto___37802);
var G__37806 = (0);
seq__37779_37789 = G__37803;
chunk__37780_37790 = G__37804;
count__37781_37791 = G__37805;
i__37782_37792 = G__37806;
continue;
} else {
var vec__37786_37807 = cljs.core.first.call(null,seq__37779_37801__$1);
var k_37808 = cljs.core.nth.call(null,vec__37786_37807,(0),null);
var v_37809 = cljs.core.nth.call(null,vec__37786_37807,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_37809)){
form_data.append(cljs.core.name.call(null,k_37808),cljs.core.first.call(null,v_37809),cljs.core.second.call(null,v_37809));
} else {
form_data.append(cljs.core.name.call(null,k_37808),v_37809);
}

var G__37810 = cljs.core.next.call(null,seq__37779_37801__$1);
var G__37811 = null;
var G__37812 = (0);
var G__37813 = (0);
seq__37779_37789 = G__37810;
chunk__37780_37790 = G__37811;
count__37781_37791 = G__37812;
i__37782_37792 = G__37813;
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
return (function (p__37817){
var map__37818 = p__37817;
var map__37818__$1 = ((((!((map__37818 == null)))?((((map__37818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37818):map__37818);
var request = map__37818__$1;
var multipart_params = cljs.core.get.call(null,map__37818__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__37818__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__28267__auto__ = multipart_params;
if(cljs.core.truth_(and__28267__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__28267__auto__;
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
return (function (p1__37820_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__37820_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__37825){
var map__37826 = p__37825;
var map__37826__$1 = ((((!((map__37826 == null)))?((((map__37826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37826):map__37826);
var req = map__37826__$1;
var query_params = cljs.core.get.call(null,map__37826__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__37826,map__37826__$1,req,query_params){
return (function (p1__37821_SHARP_){
return cljs.core.merge.call(null,p1__37821_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__37826,map__37826__$1,req,query_params))
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
var args__29361__auto__ = [];
var len__29354__auto___37834 = arguments.length;
var i__29355__auto___37835 = (0);
while(true){
if((i__29355__auto___37835 < len__29354__auto___37834)){
args__29361__auto__.push((arguments[i__29355__auto___37835]));

var G__37836 = (i__29355__auto___37835 + (1));
i__29355__auto___37835 = G__37836;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__37830){
var vec__37831 = p__37830;
var credentials = cljs.core.nth.call(null,vec__37831,(0),null);
return ((function (vec__37831,credentials){
return (function (req){
var credentials__$1 = (function (){var or__28279__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
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
;})(vec__37831,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq37828){
var G__37829 = cljs.core.first.call(null,seq37828);
var seq37828__$1 = cljs.core.next.call(null,seq37828);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__37829,seq37828__$1);
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
var args__29361__auto__ = [];
var len__29354__auto___37843 = arguments.length;
var i__29355__auto___37844 = (0);
while(true){
if((i__29355__auto___37844 < len__29354__auto___37843)){
args__29361__auto__.push((arguments[i__29355__auto___37844]));

var G__37845 = (i__29355__auto___37844 + (1));
i__29355__auto___37844 = G__37845;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37839){
var vec__37840 = p__37839;
var req = cljs.core.nth.call(null,vec__37840,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq37837){
var G__37838 = cljs.core.first.call(null,seq37837);
var seq37837__$1 = cljs.core.next.call(null,seq37837);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__37838,seq37837__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37852 = arguments.length;
var i__29355__auto___37853 = (0);
while(true){
if((i__29355__auto___37853 < len__29354__auto___37852)){
args__29361__auto__.push((arguments[i__29355__auto___37853]));

var G__37854 = (i__29355__auto___37853 + (1));
i__29355__auto___37853 = G__37854;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37848){
var vec__37849 = p__37848;
var req = cljs.core.nth.call(null,vec__37849,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq37846){
var G__37847 = cljs.core.first.call(null,seq37846);
var seq37846__$1 = cljs.core.next.call(null,seq37846);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__37847,seq37846__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37861 = arguments.length;
var i__29355__auto___37862 = (0);
while(true){
if((i__29355__auto___37862 < len__29354__auto___37861)){
args__29361__auto__.push((arguments[i__29355__auto___37862]));

var G__37863 = (i__29355__auto___37862 + (1));
i__29355__auto___37862 = G__37863;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37857){
var vec__37858 = p__37857;
var req = cljs.core.nth.call(null,vec__37858,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq37855){
var G__37856 = cljs.core.first.call(null,seq37855);
var seq37855__$1 = cljs.core.next.call(null,seq37855);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__37856,seq37855__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37870 = arguments.length;
var i__29355__auto___37871 = (0);
while(true){
if((i__29355__auto___37871 < len__29354__auto___37870)){
args__29361__auto__.push((arguments[i__29355__auto___37871]));

var G__37872 = (i__29355__auto___37871 + (1));
i__29355__auto___37871 = G__37872;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37866){
var vec__37867 = p__37866;
var req = cljs.core.nth.call(null,vec__37867,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq37864){
var G__37865 = cljs.core.first.call(null,seq37864);
var seq37864__$1 = cljs.core.next.call(null,seq37864);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__37865,seq37864__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37879 = arguments.length;
var i__29355__auto___37880 = (0);
while(true){
if((i__29355__auto___37880 < len__29354__auto___37879)){
args__29361__auto__.push((arguments[i__29355__auto___37880]));

var G__37881 = (i__29355__auto___37880 + (1));
i__29355__auto___37880 = G__37881;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37875){
var vec__37876 = p__37875;
var req = cljs.core.nth.call(null,vec__37876,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq37873){
var G__37874 = cljs.core.first.call(null,seq37873);
var seq37873__$1 = cljs.core.next.call(null,seq37873);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__37874,seq37873__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37888 = arguments.length;
var i__29355__auto___37889 = (0);
while(true){
if((i__29355__auto___37889 < len__29354__auto___37888)){
args__29361__auto__.push((arguments[i__29355__auto___37889]));

var G__37890 = (i__29355__auto___37889 + (1));
i__29355__auto___37889 = G__37890;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37884){
var vec__37885 = p__37884;
var req = cljs.core.nth.call(null,vec__37885,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq37882){
var G__37883 = cljs.core.first.call(null,seq37882);
var seq37882__$1 = cljs.core.next.call(null,seq37882);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__37883,seq37882__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37897 = arguments.length;
var i__29355__auto___37898 = (0);
while(true){
if((i__29355__auto___37898 < len__29354__auto___37897)){
args__29361__auto__.push((arguments[i__29355__auto___37898]));

var G__37899 = (i__29355__auto___37898 + (1));
i__29355__auto___37898 = G__37899;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37893){
var vec__37894 = p__37893;
var req = cljs.core.nth.call(null,vec__37894,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq37891){
var G__37892 = cljs.core.first.call(null,seq37891);
var seq37891__$1 = cljs.core.next.call(null,seq37891);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__37892,seq37891__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37906 = arguments.length;
var i__29355__auto___37907 = (0);
while(true){
if((i__29355__auto___37907 < len__29354__auto___37906)){
args__29361__auto__.push((arguments[i__29355__auto___37907]));

var G__37908 = (i__29355__auto___37907 + (1));
i__29355__auto___37907 = G__37908;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37902){
var vec__37903 = p__37902;
var req = cljs.core.nth.call(null,vec__37903,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq37900){
var G__37901 = cljs.core.first.call(null,seq37900);
var seq37900__$1 = cljs.core.next.call(null,seq37900);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__37901,seq37900__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__29361__auto__ = [];
var len__29354__auto___37915 = arguments.length;
var i__29355__auto___37916 = (0);
while(true){
if((i__29355__auto___37916 < len__29354__auto___37915)){
args__29361__auto__.push((arguments[i__29355__auto___37916]));

var G__37917 = (i__29355__auto___37916 + (1));
i__29355__auto___37916 = G__37917;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37911){
var vec__37912 = p__37911;
var req = cljs.core.nth.call(null,vec__37912,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq37909){
var G__37910 = cljs.core.first.call(null,seq37909);
var seq37909__$1 = cljs.core.next.call(null,seq37909);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__37910,seq37909__$1);
});


//# sourceMappingURL=client.js.map?rel=1470645902383