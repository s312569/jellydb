// Compiled by ClojureScript 1.7.170 {}
goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.array');
goog.require('goog.object');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.repl');
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null,null);
clojure.browser.repl.print_queue = [];
clojure.browser.repl.flush_print_queue_BANG_ = (function clojure$browser$repl$flush_print_queue_BANG_(conn){
var seq__33286_33290 = cljs.core.seq.call(null,clojure.browser.repl.print_queue);
var chunk__33287_33291 = null;
var count__33288_33292 = (0);
var i__33289_33293 = (0);
while(true){
if((i__33289_33293 < count__33288_33292)){
var str_33294 = cljs.core._nth.call(null,chunk__33287_33291,i__33289_33293);
clojure.browser.net.transmit.call(null,conn,new cljs.core.Keyword(null,"print","print",1299562414),str_33294);

var G__33295 = seq__33286_33290;
var G__33296 = chunk__33287_33291;
var G__33297 = count__33288_33292;
var G__33298 = (i__33289_33293 + (1));
seq__33286_33290 = G__33295;
chunk__33287_33291 = G__33296;
count__33288_33292 = G__33297;
i__33289_33293 = G__33298;
continue;
} else {
var temp__4425__auto___33299 = cljs.core.seq.call(null,seq__33286_33290);
if(temp__4425__auto___33299){
var seq__33286_33300__$1 = temp__4425__auto___33299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33286_33300__$1)){
var c__30316__auto___33301 = cljs.core.chunk_first.call(null,seq__33286_33300__$1);
var G__33302 = cljs.core.chunk_rest.call(null,seq__33286_33300__$1);
var G__33303 = c__30316__auto___33301;
var G__33304 = cljs.core.count.call(null,c__30316__auto___33301);
var G__33305 = (0);
seq__33286_33290 = G__33302;
chunk__33287_33291 = G__33303;
count__33288_33292 = G__33304;
i__33289_33293 = G__33305;
continue;
} else {
var str_33306 = cljs.core.first.call(null,seq__33286_33300__$1);
clojure.browser.net.transmit.call(null,conn,new cljs.core.Keyword(null,"print","print",1299562414),str_33306);

var G__33307 = cljs.core.next.call(null,seq__33286_33300__$1);
var G__33308 = null;
var G__33309 = (0);
var G__33310 = (0);
seq__33286_33290 = G__33307;
chunk__33287_33291 = G__33308;
count__33288_33292 = G__33309;
i__33289_33293 = G__33310;
continue;
}
} else {
}
}
break;
}

return goog.array.clear(clojure.browser.repl.print_queue);
});
clojure.browser.repl.repl_print = (function clojure$browser$repl$repl_print(data){
clojure.browser.repl.print_queue.push(cljs.core.pr_str.call(null,data));

var temp__4425__auto__ = cljs.core.deref.call(null,clojure.browser.repl.xpc_connection);
if(cljs.core.truth_(temp__4425__auto__)){
var conn = temp__4425__auto__;
return clojure.browser.repl.flush_print_queue_BANG_.call(null,conn);
} else {
return null;
}
});
cljs.core._STAR_print_fn_STAR_ = clojure.browser.repl.repl_print;
cljs.core._STAR_print_err_fn_STAR_ = clojure.browser.repl.repl_print;
cljs.core._STAR_print_newline_STAR_ = true;
clojure.browser.repl.get_ua_product = (function clojure$browser$repl$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
/**
 * Process a single block of JavaScript received from the server
 */
clojure.browser.repl.evaluate_javascript = (function clojure$browser$repl$evaluate_javascript(conn,block){
var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(block))].join('')], null);
}catch (e33312){var e = e33312;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),clojure.browser.repl.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(e)].join(''),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
}})();
return cljs.core.pr_str.call(null,result);
});
clojure.browser.repl.send_result = (function clojure$browser$repl$send_result(connection,url,data){
return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,(0));
});
/**
 * Send data to be printed in the REPL. If there is an error, try again
 *   up to 10 times.
 */
clojure.browser.repl.send_print = (function clojure$browser$repl$send_print(var_args){
var args33313 = [];
var len__30571__auto___33316 = arguments.length;
var i__30572__auto___33317 = (0);
while(true){
if((i__30572__auto___33317 < len__30571__auto___33316)){
args33313.push((arguments[i__30572__auto___33317]));

var G__33318 = (i__30572__auto___33317 + (1));
i__30572__auto___33317 = G__33318;
continue;
} else {
}
break;
}

var G__33315 = args33313.length;
switch (G__33315) {
case 2:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33313.length)].join('')));

}
});

clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2 = (function (url,data){
return clojure.browser.repl.send_print.call(null,url,data,(0));
});

clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3 = (function (url,data,n){
var conn = clojure.browser.net.xhr_connection.call(null);
clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn){
return (function (_){
if((n < (10))){
return clojure.browser.repl.send_print.call(null,url,data,(n + (1)));
} else {
return console.log([cljs.core.str("Could not send "),cljs.core.str(data),cljs.core.str(" after "),cljs.core.str(n),cljs.core.str(" attempts.")].join(''));
}
});})(conn))
);

return clojure.browser.net.transmit.call(null,conn,url,"POST",data,null,(0));
});

clojure.browser.repl.send_print.cljs$lang$maxFixedArity = 3;
clojure.browser.repl.order = cljs.core.atom.call(null,(0));
clojure.browser.repl.wrap_message = (function clojure$browser$repl$wrap_message(t,data){
return cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"content","content",15833224),data,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.swap_BANG_.call(null,clojure.browser.repl.order,cljs.core.inc)], null));
});
/**
 * Start the REPL server connection.
 */
clojure.browser.repl.start_evaluator = (function clojure$browser$repl$start_evaluator(url){
var temp__4423__auto__ = clojure.browser.net.xpc_connection.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var repl_connection = temp__4423__auto__;
var connection = clojure.browser.net.xhr_connection.call(null);
clojure.browser.event.listen.call(null,connection,new cljs.core.Keyword(null,"success","success",1890645906),((function (connection,repl_connection,temp__4423__auto__){
return (function (e){
return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",-315749780),e.currentTarget.getResponseText(cljs.core.List.EMPTY));
});})(connection,repl_connection,temp__4423__auto__))
);

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"send-result","send-result",35388249),((function (connection,repl_connection,temp__4423__auto__){
return (function (data){
return clojure.browser.repl.send_result.call(null,connection,url,clojure.browser.repl.wrap_message.call(null,new cljs.core.Keyword(null,"result","result",1415092211),data));
});})(connection,repl_connection,temp__4423__auto__))
);

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"print","print",1299562414),((function (connection,repl_connection,temp__4423__auto__){
return (function (data){
return clojure.browser.repl.send_print.call(null,url,clojure.browser.repl.wrap_message.call(null,new cljs.core.Keyword(null,"print","print",1299562414),data));
});})(connection,repl_connection,temp__4423__auto__))
);

clojure.browser.net.connect.call(null,repl_connection,cljs.core.constantly.call(null,null));

return setTimeout(((function (connection,repl_connection,temp__4423__auto__){
return (function (){
return clojure.browser.repl.send_result.call(null,connection,url,clojure.browser.repl.wrap_message.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),"ready"));
});})(connection,repl_connection,temp__4423__auto__))
,(50));
} else {
return alert("No 'xpc' param provided to child iframe.");
}
});
clojure.browser.repl.load_queue = null;
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
clojure.browser.repl.bootstrap = (function clojure$browser$repl$bootstrap(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require__ = goog.require;

goog.isProvided_ = (function (name){
return false;
});

goog.constructNamespace_("cljs.user");

goog.writeScriptTag__ = (function (src,opt_sourceText){
var loaded = cljs.core.atom.call(null,false);
var onload = ((function (loaded){
return (function (){
if(cljs.core.truth_((function (){var and__29501__auto__ = clojure.browser.repl.load_queue;
if(cljs.core.truth_(and__29501__auto__)){
return cljs.core.deref.call(null,loaded) === false;
} else {
return and__29501__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,loaded,cljs.core.not);

if((clojure.browser.repl.load_queue.length === (0))){
return clojure.browser.repl.load_queue = null;
} else {
return goog.writeScriptTag__.apply(null,clojure.browser.repl.load_queue.shift());
}
} else {
return null;
}
});})(loaded))
;
return document.body.appendChild((function (){var script = document.createElement("script");
var script__$1 = (function (){var G__33323 = script;
goog.object.set(G__33323,"type","text/javascript");

goog.object.set(G__33323,"onload",onload);

goog.object.set(G__33323,"onreadystatechange",onload);

return G__33323;
})();
var script__$2 = (((opt_sourceText == null))?(function (){var G__33324 = script__$1;
goog.object.set(G__33324,"src",src);

return G__33324;
})():(function (){var G__33325 = script__$1;
goog.dom.setTextContext(G__33325,opt_sourceText);

return G__33325;
})());
return script__$2;
})());
});

goog.writeScriptTag_ = (function (src,opt_sourceText){
if(cljs.core.truth_(clojure.browser.repl.load_queue)){
return clojure.browser.repl.load_queue.push([src,opt_sourceText]);
} else {
clojure.browser.repl.load_queue = [];

return goog.writeScriptTag__(src,opt_sourceText);
}
});

return goog.require = (function (src,reload){
if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

var reload_QMARK_ = (function (){var or__29513__auto__ = reload;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return goog.cljsReloadAll__;
}
})();
if(cljs.core.truth_(reload_QMARK_)){
var path_33326 = (goog.dependencies_.nameToPath[src]);
goog.object.remove(goog.dependencies_.visited,path_33326);

goog.object.remove(goog.dependencies_.written,path_33326);

goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path_33326)].join(''));
} else {
}

var ret = goog.require__(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return ret;
});
}
});
/**
 * Connects to a REPL server from an HTML document. After the
 *   connection is made, the REPL will evaluate forms in the context of
 *   the document that called this function.
 */
clojure.browser.repl.connect = (function clojure$browser$repl$connect(repl_server_url){
var repl_connection = clojure.browser.net.xpc_connection.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"peer_uri","peer_uri",910305997),repl_server_url], null));
cljs.core.swap_BANG_.call(null,clojure.browser.repl.xpc_connection,cljs.core.constantly.call(null,repl_connection));

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",-315749780),((function (repl_connection){
return (function (js){
return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"send-result","send-result",35388249),clojure.browser.repl.evaluate_javascript.call(null,repl_connection,js));
});})(repl_connection))
);

clojure.browser.net.connect.call(null,repl_connection,cljs.core.constantly.call(null,null),((function (repl_connection){
return (function (iframe){
return iframe.style.display = "none";
});})(repl_connection))
);

clojure.browser.repl.bootstrap.call(null);

return repl_connection;
});

//# sourceMappingURL=repl.js.map