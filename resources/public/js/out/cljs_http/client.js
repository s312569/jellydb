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
if(cljs.core.truth_((function (){var and__29996__auto__ = v;
if(cljs.core.truth_(and__29996__auto__)){
return (v > (0));
} else {
return and__29996__auto__;
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
return cljs.core.reduce.call(null,(function (p1__39918_SHARP_,p2__39917_SHARP_){
var vec__39922 = clojure.string.split.call(null,p2__39917_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__39922,(0),null);
var v = cljs.core.nth.call(null,vec__39922,(1),null);
return cljs.core.assoc.call(null,p1__39918_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__39925_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__39925_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__39926){
var vec__39930 = p__39926;
var k = cljs.core.nth.call(null,vec__39930,(0),null);
var v = cljs.core.nth.call(null,vec__39930,(1),null);
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
return (function (p1__39933_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__39933_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__29996__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__29996__auto__){
var and__29996__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__29996__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__29996__auto____$1;
}
} else {
return and__29996__auto__;
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
return cljs.core.async.map.call(null,(function (p1__39934_SHARP_){
return cljs_http.client.decode_body.call(null,p1__39934_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__31090__auto__ = [];
var len__31083__auto___39941 = arguments.length;
var i__31084__auto___39942 = (0);
while(true){
if((i__31084__auto___39942 < len__31083__auto___39941)){
args__31090__auto__.push((arguments[i__31084__auto___39942]));

var G__39943 = (i__31084__auto___39942 + (1));
i__31084__auto___39942 = G__39943;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39937){
var vec__39938 = p__39937;
var default_headers = cljs.core.nth.call(null,vec__39938,(0),null);
return ((function (vec__39938,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__30008__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
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
;})(vec__39938,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq39935){
var G__39936 = cljs.core.first.call(null,seq39935);
var seq39935__$1 = cljs.core.next.call(null,seq39935);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__39936,seq39935__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__31090__auto__ = [];
var len__31083__auto___39950 = arguments.length;
var i__31084__auto___39951 = (0);
while(true){
if((i__31084__auto___39951 < len__31083__auto___39950)){
args__31090__auto__.push((arguments[i__31084__auto___39951]));

var G__39952 = (i__31084__auto___39951 + (1));
i__31084__auto___39951 = G__39952;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39946){
var vec__39947 = p__39946;
var accept = cljs.core.nth.call(null,vec__39947,(0),null);
return ((function (vec__39947,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__30008__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
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
;})(vec__39947,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq39944){
var G__39945 = cljs.core.first.call(null,seq39944);
var seq39944__$1 = cljs.core.next.call(null,seq39944);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__39945,seq39944__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__31090__auto__ = [];
var len__31083__auto___39959 = arguments.length;
var i__31084__auto___39960 = (0);
while(true){
if((i__31084__auto___39960 < len__31083__auto___39959)){
args__31090__auto__.push((arguments[i__31084__auto___39960]));

var G__39961 = (i__31084__auto___39960 + (1));
i__31084__auto___39960 = G__39961;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__39955){
var vec__39956 = p__39955;
var content_type = cljs.core.nth.call(null,vec__39956,(0),null);
return ((function (vec__39956,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__30008__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
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
;})(vec__39956,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq39953){
var G__39954 = cljs.core.first.call(null,seq39953);
var seq39953__$1 = cljs.core.next.call(null,seq39953);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__39954,seq39953__$1);
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
var map__39964 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__39964__$1 = ((((!((map__39964 == null)))?((((map__39964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39964):map__39964);
var encoding = cljs.core.get.call(null,map__39964__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__39964__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__39970 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__39970__$1 = ((((!((map__39970 == null)))?((((map__39970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39970):map__39970);
var decoding = cljs.core.get.call(null,map__39970__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__39970__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__39970,map__39970__$1,decoding,decoding_opts){
return (function (p1__39966_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__39966_SHARP_,decoding,decoding_opts);
});})(map__39970,map__39970__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__39970,map__39970__$1,decoding,decoding_opts,transit_decode){
return (function (p1__39967_SHARP_){
return cljs_http.client.decode_body.call(null,p1__39967_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__39970,map__39970__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__39972_SHARP_){
return cljs_http.client.decode_body.call(null,p1__39972_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__39976){
var map__39977 = p__39976;
var map__39977__$1 = ((((!((map__39977 == null)))?((((map__39977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39977):map__39977);
var req = map__39977__$1;
var query_params = cljs.core.get.call(null,map__39977__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__39982){
var map__39983 = p__39982;
var map__39983__$1 = ((((!((map__39983 == null)))?((((map__39983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39983):map__39983);
var request = map__39983__$1;
var form_params = cljs.core.get.call(null,map__39983__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__39983__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__39983__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__29996__auto__ = form_params;
if(cljs.core.truth_(and__29996__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__29996__auto__;
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
var seq__39995_40005 = cljs.core.seq.call(null,params);
var chunk__39996_40006 = null;
var count__39997_40007 = (0);
var i__39998_40008 = (0);
while(true){
if((i__39998_40008 < count__39997_40007)){
var vec__39999_40009 = cljs.core._nth.call(null,chunk__39996_40006,i__39998_40008);
var k_40010 = cljs.core.nth.call(null,vec__39999_40009,(0),null);
var v_40011 = cljs.core.nth.call(null,vec__39999_40009,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_40011)){
form_data.append(cljs.core.name.call(null,k_40010),cljs.core.first.call(null,v_40011),cljs.core.second.call(null,v_40011));
} else {
form_data.append(cljs.core.name.call(null,k_40010),v_40011);
}

var G__40012 = seq__39995_40005;
var G__40013 = chunk__39996_40006;
var G__40014 = count__39997_40007;
var G__40015 = (i__39998_40008 + (1));
seq__39995_40005 = G__40012;
chunk__39996_40006 = G__40013;
count__39997_40007 = G__40014;
i__39998_40008 = G__40015;
continue;
} else {
var temp__4657__auto___40016 = cljs.core.seq.call(null,seq__39995_40005);
if(temp__4657__auto___40016){
var seq__39995_40017__$1 = temp__4657__auto___40016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39995_40017__$1)){
var c__30819__auto___40018 = cljs.core.chunk_first.call(null,seq__39995_40017__$1);
var G__40019 = cljs.core.chunk_rest.call(null,seq__39995_40017__$1);
var G__40020 = c__30819__auto___40018;
var G__40021 = cljs.core.count.call(null,c__30819__auto___40018);
var G__40022 = (0);
seq__39995_40005 = G__40019;
chunk__39996_40006 = G__40020;
count__39997_40007 = G__40021;
i__39998_40008 = G__40022;
continue;
} else {
var vec__40002_40023 = cljs.core.first.call(null,seq__39995_40017__$1);
var k_40024 = cljs.core.nth.call(null,vec__40002_40023,(0),null);
var v_40025 = cljs.core.nth.call(null,vec__40002_40023,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_40025)){
form_data.append(cljs.core.name.call(null,k_40024),cljs.core.first.call(null,v_40025),cljs.core.second.call(null,v_40025));
} else {
form_data.append(cljs.core.name.call(null,k_40024),v_40025);
}

var G__40026 = cljs.core.next.call(null,seq__39995_40017__$1);
var G__40027 = null;
var G__40028 = (0);
var G__40029 = (0);
seq__39995_40005 = G__40026;
chunk__39996_40006 = G__40027;
count__39997_40007 = G__40028;
i__39998_40008 = G__40029;
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
return (function (p__40033){
var map__40034 = p__40033;
var map__40034__$1 = ((((!((map__40034 == null)))?((((map__40034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40034):map__40034);
var request = map__40034__$1;
var multipart_params = cljs.core.get.call(null,map__40034__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__40034__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__29996__auto__ = multipart_params;
if(cljs.core.truth_(and__29996__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__29996__auto__;
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
return (function (p1__40036_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__40036_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__40041){
var map__40042 = p__40041;
var map__40042__$1 = ((((!((map__40042 == null)))?((((map__40042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40042):map__40042);
var req = map__40042__$1;
var query_params = cljs.core.get.call(null,map__40042__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__40042,map__40042__$1,req,query_params){
return (function (p1__40037_SHARP_){
return cljs.core.merge.call(null,p1__40037_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__40042,map__40042__$1,req,query_params))
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
var args__31090__auto__ = [];
var len__31083__auto___40050 = arguments.length;
var i__31084__auto___40051 = (0);
while(true){
if((i__31084__auto___40051 < len__31083__auto___40050)){
args__31090__auto__.push((arguments[i__31084__auto___40051]));

var G__40052 = (i__31084__auto___40051 + (1));
i__31084__auto___40051 = G__40052;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__40046){
var vec__40047 = p__40046;
var credentials = cljs.core.nth.call(null,vec__40047,(0),null);
return ((function (vec__40047,credentials){
return (function (req){
var credentials__$1 = (function (){var or__30008__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
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
;})(vec__40047,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq40044){
var G__40045 = cljs.core.first.call(null,seq40044);
var seq40044__$1 = cljs.core.next.call(null,seq40044);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__40045,seq40044__$1);
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
var args__31090__auto__ = [];
var len__31083__auto___40059 = arguments.length;
var i__31084__auto___40060 = (0);
while(true){
if((i__31084__auto___40060 < len__31083__auto___40059)){
args__31090__auto__.push((arguments[i__31084__auto___40060]));

var G__40061 = (i__31084__auto___40060 + (1));
i__31084__auto___40060 = G__40061;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40055){
var vec__40056 = p__40055;
var req = cljs.core.nth.call(null,vec__40056,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq40053){
var G__40054 = cljs.core.first.call(null,seq40053);
var seq40053__$1 = cljs.core.next.call(null,seq40053);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__40054,seq40053__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__31090__auto__ = [];
var len__31083__auto___40068 = arguments.length;
var i__31084__auto___40069 = (0);
while(true){
if((i__31084__auto___40069 < len__31083__auto___40068)){
args__31090__auto__.push((arguments[i__31084__auto___40069]));

var G__40070 = (i__31084__auto___40069 + (1));
i__31084__auto___40069 = G__40070;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40064){
var vec__40065 = p__40064;
var req = cljs.core.nth.call(null,vec__40065,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq40062){
var G__40063 = cljs.core.first.call(null,seq40062);
var seq40062__$1 = cljs.core.next.call(null,seq40062);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__40063,seq40062__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__31090__auto__ = [];
var len__31083__auto___40077 = arguments.length;
var i__31084__auto___40078 = (0);
while(true){
if((i__31084__auto___40078 < len__31083__auto___40077)){
args__31090__auto__.push((arguments[i__31084__auto___40078]));

var G__40079 = (i__31084__auto___40078 + (1));
i__31084__auto___40078 = G__40079;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40073){
var vec__40074 = p__40073;
var req = cljs.core.nth.call(null,vec__40074,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq40071){
var G__40072 = cljs.core.first.call(null,seq40071);
var seq40071__$1 = cljs.core.next.call(null,seq40071);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__40072,seq40071__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__31090__auto__ = [];
var len__31083__auto___40086 = arguments.length;
var i__31084__auto___40087 = (0);
while(true){
if((i__31084__auto___40087 < len__31083__auto___40086)){
args__31090__auto__.push((arguments[i__31084__auto___40087]));

var G__40088 = (i__31084__auto___40087 + (1));
i__31084__auto___40087 = G__40088;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40082){
var vec__40083 = p__40082;
var req = cljs.core.nth.call(null,vec__40083,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq40080){
var G__40081 = cljs.core.first.call(null,seq40080);
var seq40080__$1 = cljs.core.next.call(null,seq40080);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__40081,seq40080__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__31090__auto__ = [];
var len__31083__auto___40095 = arguments.length;
var i__31084__auto___40096 = (0);
while(true){
if((i__31084__auto___40096 < len__31083__auto___40095)){
args__31090__auto__.push((arguments[i__31084__auto___40096]));

var G__40097 = (i__31084__auto___40096 + (1));
i__31084__auto___40096 = G__40097;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40091){
var vec__40092 = p__40091;
var req = cljs.core.nth.call(null,vec__40092,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq40089){
var G__40090 = cljs.core.first.call(null,seq40089);
var seq40089__$1 = cljs.core.next.call(null,seq40089);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__40090,seq40089__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__31090__auto__ = [];
var len__31083__auto___40104 = arguments.length;
var i__31084__auto___40105 = (0);
while(true){
if((i__31084__auto___40105 < len__31083__auto___40104)){
args__31090__auto__.push((arguments[i__31084__auto___40105]));

var G__40106 = (i__31084__auto___40105 + (1));
i__31084__auto___40105 = G__40106;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40100){
var vec__40101 = p__40100;
var req = cljs.core.nth.call(null,vec__40101,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq40098){
var G__40099 = cljs.core.first.call(null,seq40098);
var seq40098__$1 = cljs.core.next.call(null,seq40098);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__40099,seq40098__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__31090__auto__ = [];
var len__31083__auto___40113 = arguments.length;
var i__31084__auto___40114 = (0);
while(true){
if((i__31084__auto___40114 < len__31083__auto___40113)){
args__31090__auto__.push((arguments[i__31084__auto___40114]));

var G__40115 = (i__31084__auto___40114 + (1));
i__31084__auto___40114 = G__40115;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40109){
var vec__40110 = p__40109;
var req = cljs.core.nth.call(null,vec__40110,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq40107){
var G__40108 = cljs.core.first.call(null,seq40107);
var seq40107__$1 = cljs.core.next.call(null,seq40107);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__40108,seq40107__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__31090__auto__ = [];
var len__31083__auto___40122 = arguments.length;
var i__31084__auto___40123 = (0);
while(true){
if((i__31084__auto___40123 < len__31083__auto___40122)){
args__31090__auto__.push((arguments[i__31084__auto___40123]));

var G__40124 = (i__31084__auto___40123 + (1));
i__31084__auto___40123 = G__40124;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40118){
var vec__40119 = p__40118;
var req = cljs.core.nth.call(null,vec__40119,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq40116){
var G__40117 = cljs.core.first.call(null,seq40116);
var seq40116__$1 = cljs.core.next.call(null,seq40116);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__40117,seq40116__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__31090__auto__ = [];
var len__31083__auto___40131 = arguments.length;
var i__31084__auto___40132 = (0);
while(true){
if((i__31084__auto___40132 < len__31083__auto___40131)){
args__31090__auto__.push((arguments[i__31084__auto___40132]));

var G__40133 = (i__31084__auto___40132 + (1));
i__31084__auto___40132 = G__40133;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40127){
var vec__40128 = p__40127;
var req = cljs.core.nth.call(null,vec__40128,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq40125){
var G__40126 = cljs.core.first.call(null,seq40125);
var seq40125__$1 = cljs.core.next.call(null,seq40125);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__40126,seq40125__$1);
});


//# sourceMappingURL=client.js.map?rel=1470795672843