// Compiled by ClojureScript 1.7.145 {}
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
if(cljs.core.truth_((function (){var and__4491__auto__ = v;
if(cljs.core.truth_(and__4491__auto__)){
return (v > (0));
} else {
return and__4491__auto__;
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
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__11756_SHARP_,p2__11755_SHARP_){
var vec__11758 = clojure.string.split.call(null,p2__11755_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__11758,(0),null);
var v = cljs.core.nth.call(null,vec__11758,(1),null);
return cljs.core.assoc.call(null,p1__11756_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__11759_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__11759_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__11760){
var vec__11762 = p__11760;
var k = cljs.core.nth.call(null,vec__11762,(0),null);
var v = cljs.core.nth.call(null,vec__11762,(1),null);
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
return (function (p1__11763_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__11763_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__4491__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4491__auto__){
var and__4491__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__4491__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4491__auto____$1;
}
} else {
return and__4491__auto__;
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
return cljs.core.async.map.call(null,(function (p1__11764_SHARP_){
return cljs_http.client.decode_body.call(null,p1__11764_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11769 = arguments.length;
var i__5562__auto___11770 = (0);
while(true){
if((i__5562__auto___11770 < len__5561__auto___11769)){
args__5568__auto__.push((arguments[i__5562__auto___11770]));

var G__11771 = (i__5562__auto___11770 + (1));
i__5562__auto___11770 = G__11771;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11767){
var vec__11768 = p__11767;
var default_headers = cljs.core.nth.call(null,vec__11768,(0),null);
return ((function (vec__11768,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__4503__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
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
;})(vec__11768,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq11765){
var G__11766 = cljs.core.first.call(null,seq11765);
var seq11765__$1 = cljs.core.next.call(null,seq11765);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__11766,seq11765__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11776 = arguments.length;
var i__5562__auto___11777 = (0);
while(true){
if((i__5562__auto___11777 < len__5561__auto___11776)){
args__5568__auto__.push((arguments[i__5562__auto___11777]));

var G__11778 = (i__5562__auto___11777 + (1));
i__5562__auto___11777 = G__11778;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11774){
var vec__11775 = p__11774;
var accept = cljs.core.nth.call(null,vec__11775,(0),null);
return ((function (vec__11775,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__4503__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
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
;})(vec__11775,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq11772){
var G__11773 = cljs.core.first.call(null,seq11772);
var seq11772__$1 = cljs.core.next.call(null,seq11772);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__11773,seq11772__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11783 = arguments.length;
var i__5562__auto___11784 = (0);
while(true){
if((i__5562__auto___11784 < len__5561__auto___11783)){
args__5568__auto__.push((arguments[i__5562__auto___11784]));

var G__11785 = (i__5562__auto___11784 + (1));
i__5562__auto___11784 = G__11785;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11781){
var vec__11782 = p__11781;
var content_type = cljs.core.nth.call(null,vec__11782,(0),null);
return ((function (vec__11782,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__4503__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
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
;})(vec__11782,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq11779){
var G__11780 = cljs.core.first.call(null,seq11779);
var seq11779__$1 = cljs.core.next.call(null,seq11779);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__11780,seq11779__$1);
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
var map__11788 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__11788__$1 = ((((!((map__11788 == null)))?((((map__11788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11788):map__11788);
var encoding = cljs.core.get.call(null,map__11788__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__11788__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__11794 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__11794__$1 = ((((!((map__11794 == null)))?((((map__11794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11794):map__11794);
var decoding = cljs.core.get.call(null,map__11794__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__11794__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__11794,map__11794__$1,decoding,decoding_opts){
return (function (p1__11790_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__11790_SHARP_,decoding,decoding_opts);
});})(map__11794,map__11794__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__11794,map__11794__$1,decoding,decoding_opts,transit_decode){
return (function (p1__11791_SHARP_){
return cljs_http.client.decode_body.call(null,p1__11791_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__11794,map__11794__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__11796_SHARP_){
return cljs_http.client.decode_body.call(null,p1__11796_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__11800){
var map__11801 = p__11800;
var map__11801__$1 = ((((!((map__11801 == null)))?((((map__11801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11801):map__11801);
var req = map__11801__$1;
var query_params = cljs.core.get.call(null,map__11801__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__11806){
var map__11807 = p__11806;
var map__11807__$1 = ((((!((map__11807 == null)))?((((map__11807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11807):map__11807);
var request = map__11807__$1;
var form_params = cljs.core.get.call(null,map__11807__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__11807__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__11807__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4491__auto__ = form_params;
if(cljs.core.truth_(and__4491__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4491__auto__;
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
var seq__11815_11821 = cljs.core.seq.call(null,params);
var chunk__11816_11822 = null;
var count__11817_11823 = (0);
var i__11818_11824 = (0);
while(true){
if((i__11818_11824 < count__11817_11823)){
var vec__11819_11825 = cljs.core._nth.call(null,chunk__11816_11822,i__11818_11824);
var k_11826 = cljs.core.nth.call(null,vec__11819_11825,(0),null);
var v_11827 = cljs.core.nth.call(null,vec__11819_11825,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_11827)){
form_data.append(cljs.core.name.call(null,k_11826),cljs.core.first.call(null,v_11827),cljs.core.second.call(null,v_11827));
} else {
form_data.append(cljs.core.name.call(null,k_11826),v_11827);
}

var G__11828 = seq__11815_11821;
var G__11829 = chunk__11816_11822;
var G__11830 = count__11817_11823;
var G__11831 = (i__11818_11824 + (1));
seq__11815_11821 = G__11828;
chunk__11816_11822 = G__11829;
count__11817_11823 = G__11830;
i__11818_11824 = G__11831;
continue;
} else {
var temp__4425__auto___11832 = cljs.core.seq.call(null,seq__11815_11821);
if(temp__4425__auto___11832){
var seq__11815_11833__$1 = temp__4425__auto___11832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11815_11833__$1)){
var c__5306__auto___11834 = cljs.core.chunk_first.call(null,seq__11815_11833__$1);
var G__11835 = cljs.core.chunk_rest.call(null,seq__11815_11833__$1);
var G__11836 = c__5306__auto___11834;
var G__11837 = cljs.core.count.call(null,c__5306__auto___11834);
var G__11838 = (0);
seq__11815_11821 = G__11835;
chunk__11816_11822 = G__11836;
count__11817_11823 = G__11837;
i__11818_11824 = G__11838;
continue;
} else {
var vec__11820_11839 = cljs.core.first.call(null,seq__11815_11833__$1);
var k_11840 = cljs.core.nth.call(null,vec__11820_11839,(0),null);
var v_11841 = cljs.core.nth.call(null,vec__11820_11839,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_11841)){
form_data.append(cljs.core.name.call(null,k_11840),cljs.core.first.call(null,v_11841),cljs.core.second.call(null,v_11841));
} else {
form_data.append(cljs.core.name.call(null,k_11840),v_11841);
}

var G__11842 = cljs.core.next.call(null,seq__11815_11833__$1);
var G__11843 = null;
var G__11844 = (0);
var G__11845 = (0);
seq__11815_11821 = G__11842;
chunk__11816_11822 = G__11843;
count__11817_11823 = G__11844;
i__11818_11824 = G__11845;
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
return (function (p__11849){
var map__11850 = p__11849;
var map__11850__$1 = ((((!((map__11850 == null)))?((((map__11850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11850):map__11850);
var request = map__11850__$1;
var multipart_params = cljs.core.get.call(null,map__11850__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__11850__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4491__auto__ = multipart_params;
if(cljs.core.truth_(and__4491__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4491__auto__;
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
return (function (p1__11852_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__11852_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__11857){
var map__11858 = p__11857;
var map__11858__$1 = ((((!((map__11858 == null)))?((((map__11858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11858):map__11858);
var req = map__11858__$1;
var query_params = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__11858,map__11858__$1,req,query_params){
return (function (p1__11853_SHARP_){
return cljs.core.merge.call(null,p1__11853_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__11858,map__11858__$1,req,query_params))
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
var args__5568__auto__ = [];
var len__5561__auto___11864 = arguments.length;
var i__5562__auto___11865 = (0);
while(true){
if((i__5562__auto___11865 < len__5561__auto___11864)){
args__5568__auto__.push((arguments[i__5562__auto___11865]));

var G__11866 = (i__5562__auto___11865 + (1));
i__5562__auto___11865 = G__11866;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11862){
var vec__11863 = p__11862;
var credentials = cljs.core.nth.call(null,vec__11863,(0),null);
return ((function (vec__11863,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4503__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
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
;})(vec__11863,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq11860){
var G__11861 = cljs.core.first.call(null,seq11860);
var seq11860__$1 = cljs.core.next.call(null,seq11860);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__11861,seq11860__$1);
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
var args__5568__auto__ = [];
var len__5561__auto___11871 = arguments.length;
var i__5562__auto___11872 = (0);
while(true){
if((i__5562__auto___11872 < len__5561__auto___11871)){
args__5568__auto__.push((arguments[i__5562__auto___11872]));

var G__11873 = (i__5562__auto___11872 + (1));
i__5562__auto___11872 = G__11873;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11869){
var vec__11870 = p__11869;
var req = cljs.core.nth.call(null,vec__11870,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq11867){
var G__11868 = cljs.core.first.call(null,seq11867);
var seq11867__$1 = cljs.core.next.call(null,seq11867);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__11868,seq11867__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11878 = arguments.length;
var i__5562__auto___11879 = (0);
while(true){
if((i__5562__auto___11879 < len__5561__auto___11878)){
args__5568__auto__.push((arguments[i__5562__auto___11879]));

var G__11880 = (i__5562__auto___11879 + (1));
i__5562__auto___11879 = G__11880;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11876){
var vec__11877 = p__11876;
var req = cljs.core.nth.call(null,vec__11877,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq11874){
var G__11875 = cljs.core.first.call(null,seq11874);
var seq11874__$1 = cljs.core.next.call(null,seq11874);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__11875,seq11874__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11885 = arguments.length;
var i__5562__auto___11886 = (0);
while(true){
if((i__5562__auto___11886 < len__5561__auto___11885)){
args__5568__auto__.push((arguments[i__5562__auto___11886]));

var G__11887 = (i__5562__auto___11886 + (1));
i__5562__auto___11886 = G__11887;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11883){
var vec__11884 = p__11883;
var req = cljs.core.nth.call(null,vec__11884,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq11881){
var G__11882 = cljs.core.first.call(null,seq11881);
var seq11881__$1 = cljs.core.next.call(null,seq11881);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__11882,seq11881__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11892 = arguments.length;
var i__5562__auto___11893 = (0);
while(true){
if((i__5562__auto___11893 < len__5561__auto___11892)){
args__5568__auto__.push((arguments[i__5562__auto___11893]));

var G__11894 = (i__5562__auto___11893 + (1));
i__5562__auto___11893 = G__11894;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11890){
var vec__11891 = p__11890;
var req = cljs.core.nth.call(null,vec__11891,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq11888){
var G__11889 = cljs.core.first.call(null,seq11888);
var seq11888__$1 = cljs.core.next.call(null,seq11888);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__11889,seq11888__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11899 = arguments.length;
var i__5562__auto___11900 = (0);
while(true){
if((i__5562__auto___11900 < len__5561__auto___11899)){
args__5568__auto__.push((arguments[i__5562__auto___11900]));

var G__11901 = (i__5562__auto___11900 + (1));
i__5562__auto___11900 = G__11901;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11897){
var vec__11898 = p__11897;
var req = cljs.core.nth.call(null,vec__11898,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq11895){
var G__11896 = cljs.core.first.call(null,seq11895);
var seq11895__$1 = cljs.core.next.call(null,seq11895);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__11896,seq11895__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11906 = arguments.length;
var i__5562__auto___11907 = (0);
while(true){
if((i__5562__auto___11907 < len__5561__auto___11906)){
args__5568__auto__.push((arguments[i__5562__auto___11907]));

var G__11908 = (i__5562__auto___11907 + (1));
i__5562__auto___11907 = G__11908;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11904){
var vec__11905 = p__11904;
var req = cljs.core.nth.call(null,vec__11905,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq11902){
var G__11903 = cljs.core.first.call(null,seq11902);
var seq11902__$1 = cljs.core.next.call(null,seq11902);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__11903,seq11902__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11913 = arguments.length;
var i__5562__auto___11914 = (0);
while(true){
if((i__5562__auto___11914 < len__5561__auto___11913)){
args__5568__auto__.push((arguments[i__5562__auto___11914]));

var G__11915 = (i__5562__auto___11914 + (1));
i__5562__auto___11914 = G__11915;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11911){
var vec__11912 = p__11911;
var req = cljs.core.nth.call(null,vec__11912,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq11909){
var G__11910 = cljs.core.first.call(null,seq11909);
var seq11909__$1 = cljs.core.next.call(null,seq11909);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__11910,seq11909__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11920 = arguments.length;
var i__5562__auto___11921 = (0);
while(true){
if((i__5562__auto___11921 < len__5561__auto___11920)){
args__5568__auto__.push((arguments[i__5562__auto___11921]));

var G__11922 = (i__5562__auto___11921 + (1));
i__5562__auto___11921 = G__11922;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11918){
var vec__11919 = p__11918;
var req = cljs.core.nth.call(null,vec__11919,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq11916){
var G__11917 = cljs.core.first.call(null,seq11916);
var seq11916__$1 = cljs.core.next.call(null,seq11916);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__11917,seq11916__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5568__auto__ = [];
var len__5561__auto___11927 = arguments.length;
var i__5562__auto___11928 = (0);
while(true){
if((i__5562__auto___11928 < len__5561__auto___11927)){
args__5568__auto__.push((arguments[i__5562__auto___11928]));

var G__11929 = (i__5562__auto___11928 + (1));
i__5562__auto___11928 = G__11929;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11925){
var vec__11926 = p__11925;
var req = cljs.core.nth.call(null,vec__11926,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq11923){
var G__11924 = cljs.core.first.call(null,seq11923);
var seq11923__$1 = cljs.core.next.call(null,seq11923);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__11924,seq11923__$1);
});

//# sourceMappingURL=client.js.map