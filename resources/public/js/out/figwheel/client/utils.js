// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__29402__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__29402__auto__)){
return (window["CustomEvent"]);
} else {
return and__29402__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj40117 = {"detail":data};
return obj40117;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args40122 = [];
var len__30472__auto___40128 = arguments.length;
var i__30473__auto___40129 = (0);
while(true){
if((i__30473__auto___40129 < len__30472__auto___40128)){
args40122.push((arguments[i__30473__auto___40129]));

var G__40130 = (i__30473__auto___40129 + (1));
i__30473__auto___40129 = G__40130;
continue;
} else {
}
break;
}

var G__40124 = args40122.length;
switch (G__40124) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40122.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__40125 = cljs.core._EQ_;
var expr__40126 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__40125.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__40126))){
return ((function (pred__40125,expr__40126){
return (function (p1__40118_SHARP_){
return console.warn(p1__40118_SHARP_);
});
;})(pred__40125,expr__40126))
} else {
if(cljs.core.truth_(pred__40125.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__40126))){
return ((function (pred__40125,expr__40126){
return (function (p1__40119_SHARP_){
return console.debug(p1__40119_SHARP_);
});
;})(pred__40125,expr__40126))
} else {
if(cljs.core.truth_(pred__40125.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__40126))){
return ((function (pred__40125,expr__40126){
return (function (p1__40120_SHARP_){
return console.error(p1__40120_SHARP_);
});
;})(pred__40125,expr__40126))
} else {
return ((function (pred__40125,expr__40126){
return (function (p1__40121_SHARP_){
return console.log(p1__40121_SHARP_);
});
;})(pred__40125,expr__40126))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__40132){
var map__40135 = p__40132;
var map__40135__$1 = ((((!((map__40135 == null)))?((((map__40135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40135):map__40135);
var opts = map__40135__$1;
var eval_fn = cljs.core.get.call(null,map__40135__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map