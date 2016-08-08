// Compiled by ClojureScript 1.9.93 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args43205 = [];
var len__29354__auto___43208 = arguments.length;
var i__29355__auto___43209 = (0);
while(true){
if((i__29355__auto___43209 < len__29354__auto___43208)){
args43205.push((arguments[i__29355__auto___43209]));

var G__43210 = (i__29355__auto___43209 + (1));
i__29355__auto___43209 = G__43210;
continue;
} else {
}
break;
}

var G__43207 = args43205.length;
switch (G__43207) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43205.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29361__auto__ = [];
var len__29354__auto___43213 = arguments.length;
var i__29355__auto___43214 = (0);
while(true){
if((i__29355__auto___43214 < len__29354__auto___43213)){
args__29361__auto__.push((arguments[i__29355__auto___43214]));

var G__43215 = (i__29355__auto___43214 + (1));
i__29355__auto___43214 = G__43215;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((0) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29362__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43212){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43212));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29361__auto__ = [];
var len__29354__auto___43217 = arguments.length;
var i__29355__auto___43218 = (0);
while(true){
if((i__29355__auto___43218 < len__29354__auto___43217)){
args__29361__auto__.push((arguments[i__29355__auto___43218]));

var G__43219 = (i__29355__auto___43218 + (1));
i__29355__auto___43218 = G__43219;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((0) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29362__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43216){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43216));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__43220 = cljs.core._EQ_;
var expr__43221 = (function (){var or__28279__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e43224){if((e43224 instanceof Error)){
var e = e43224;
return false;
} else {
throw e43224;

}
}})();
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__43220.call(null,"true",expr__43221))){
return true;
} else {
if(cljs.core.truth_(pred__43220.call(null,"false",expr__43221))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43221)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e43226){if((e43226 instanceof Error)){
var e = e43226;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e43226;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43227){
var map__43230 = p__43227;
var map__43230__$1 = ((((!((map__43230 == null)))?((((map__43230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43230):map__43230);
var message = cljs.core.get.call(null,map__43230__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43230__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28279__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28267__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28267__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28267__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34572__auto___43392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___43392,ch){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___43392,ch){
return (function (state_43361){
var state_val_43362 = (state_43361[(1)]);
if((state_val_43362 === (7))){
var inst_43357 = (state_43361[(2)]);
var state_43361__$1 = state_43361;
var statearr_43363_43393 = state_43361__$1;
(statearr_43363_43393[(2)] = inst_43357);

(statearr_43363_43393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (1))){
var state_43361__$1 = state_43361;
var statearr_43364_43394 = state_43361__$1;
(statearr_43364_43394[(2)] = null);

(statearr_43364_43394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (4))){
var inst_43314 = (state_43361[(7)]);
var inst_43314__$1 = (state_43361[(2)]);
var state_43361__$1 = (function (){var statearr_43365 = state_43361;
(statearr_43365[(7)] = inst_43314__$1);

return statearr_43365;
})();
if(cljs.core.truth_(inst_43314__$1)){
var statearr_43366_43395 = state_43361__$1;
(statearr_43366_43395[(1)] = (5));

} else {
var statearr_43367_43396 = state_43361__$1;
(statearr_43367_43396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (15))){
var inst_43321 = (state_43361[(8)]);
var inst_43336 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43321);
var inst_43337 = cljs.core.first.call(null,inst_43336);
var inst_43338 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43337);
var inst_43339 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_43338)].join('');
var inst_43340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43339);
var state_43361__$1 = state_43361;
var statearr_43368_43397 = state_43361__$1;
(statearr_43368_43397[(2)] = inst_43340);

(statearr_43368_43397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (13))){
var inst_43345 = (state_43361[(2)]);
var state_43361__$1 = state_43361;
var statearr_43369_43398 = state_43361__$1;
(statearr_43369_43398[(2)] = inst_43345);

(statearr_43369_43398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (6))){
var state_43361__$1 = state_43361;
var statearr_43370_43399 = state_43361__$1;
(statearr_43370_43399[(2)] = null);

(statearr_43370_43399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (17))){
var inst_43343 = (state_43361[(2)]);
var state_43361__$1 = state_43361;
var statearr_43371_43400 = state_43361__$1;
(statearr_43371_43400[(2)] = inst_43343);

(statearr_43371_43400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (3))){
var inst_43359 = (state_43361[(2)]);
var state_43361__$1 = state_43361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43361__$1,inst_43359);
} else {
if((state_val_43362 === (12))){
var inst_43320 = (state_43361[(9)]);
var inst_43334 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43320,opts);
var state_43361__$1 = state_43361;
if(cljs.core.truth_(inst_43334)){
var statearr_43372_43401 = state_43361__$1;
(statearr_43372_43401[(1)] = (15));

} else {
var statearr_43373_43402 = state_43361__$1;
(statearr_43373_43402[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (2))){
var state_43361__$1 = state_43361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43361__$1,(4),ch);
} else {
if((state_val_43362 === (11))){
var inst_43321 = (state_43361[(8)]);
var inst_43326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43327 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43321);
var inst_43328 = cljs.core.async.timeout.call(null,(1000));
var inst_43329 = [inst_43327,inst_43328];
var inst_43330 = (new cljs.core.PersistentVector(null,2,(5),inst_43326,inst_43329,null));
var state_43361__$1 = state_43361;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43361__$1,(14),inst_43330);
} else {
if((state_val_43362 === (9))){
var inst_43321 = (state_43361[(8)]);
var inst_43347 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43348 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43321);
var inst_43349 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43348);
var inst_43350 = [cljs.core.str("Not loading: "),cljs.core.str(inst_43349)].join('');
var inst_43351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43350);
var state_43361__$1 = (function (){var statearr_43374 = state_43361;
(statearr_43374[(10)] = inst_43347);

return statearr_43374;
})();
var statearr_43375_43403 = state_43361__$1;
(statearr_43375_43403[(2)] = inst_43351);

(statearr_43375_43403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (5))){
var inst_43314 = (state_43361[(7)]);
var inst_43316 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43317 = (new cljs.core.PersistentArrayMap(null,2,inst_43316,null));
var inst_43318 = (new cljs.core.PersistentHashSet(null,inst_43317,null));
var inst_43319 = figwheel.client.focus_msgs.call(null,inst_43318,inst_43314);
var inst_43320 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43319);
var inst_43321 = cljs.core.first.call(null,inst_43319);
var inst_43322 = figwheel.client.autoload_QMARK_.call(null);
var state_43361__$1 = (function (){var statearr_43376 = state_43361;
(statearr_43376[(9)] = inst_43320);

(statearr_43376[(8)] = inst_43321);

return statearr_43376;
})();
if(cljs.core.truth_(inst_43322)){
var statearr_43377_43404 = state_43361__$1;
(statearr_43377_43404[(1)] = (8));

} else {
var statearr_43378_43405 = state_43361__$1;
(statearr_43378_43405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (14))){
var inst_43332 = (state_43361[(2)]);
var state_43361__$1 = state_43361;
var statearr_43379_43406 = state_43361__$1;
(statearr_43379_43406[(2)] = inst_43332);

(statearr_43379_43406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (16))){
var state_43361__$1 = state_43361;
var statearr_43380_43407 = state_43361__$1;
(statearr_43380_43407[(2)] = null);

(statearr_43380_43407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (10))){
var inst_43353 = (state_43361[(2)]);
var state_43361__$1 = (function (){var statearr_43381 = state_43361;
(statearr_43381[(11)] = inst_43353);

return statearr_43381;
})();
var statearr_43382_43408 = state_43361__$1;
(statearr_43382_43408[(2)] = null);

(statearr_43382_43408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (8))){
var inst_43320 = (state_43361[(9)]);
var inst_43324 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43320,opts);
var state_43361__$1 = state_43361;
if(cljs.core.truth_(inst_43324)){
var statearr_43383_43409 = state_43361__$1;
(statearr_43383_43409[(1)] = (11));

} else {
var statearr_43384_43410 = state_43361__$1;
(statearr_43384_43410[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34572__auto___43392,ch))
;
return ((function (switch__34460__auto__,c__34572__auto___43392,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34461__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34461__auto____0 = (function (){
var statearr_43388 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43388[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34461__auto__);

(statearr_43388[(1)] = (1));

return statearr_43388;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34461__auto____1 = (function (state_43361){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_43361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e43389){if((e43389 instanceof Object)){
var ex__34464__auto__ = e43389;
var statearr_43390_43411 = state_43361;
(statearr_43390_43411[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43412 = state_43361;
state_43361 = G__43412;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34461__auto__ = function(state_43361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34461__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34461__auto____1.call(this,state_43361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34461__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34461__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___43392,ch))
})();
var state__34574__auto__ = (function (){var statearr_43391 = f__34573__auto__.call(null);
(statearr_43391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___43392);

return statearr_43391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___43392,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43413_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43413_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
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
}
});
var base_path_43416 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43416){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e43415){if((e43415 instanceof Error)){
var e = e43415;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43416], null));
} else {
var e = e43415;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_43416))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43417){
var map__43426 = p__43417;
var map__43426__$1 = ((((!((map__43426 == null)))?((((map__43426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43426):map__43426);
var opts = map__43426__$1;
var build_id = cljs.core.get.call(null,map__43426__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43426,map__43426__$1,opts,build_id){
return (function (p__43428){
var vec__43429 = p__43428;
var seq__43430 = cljs.core.seq.call(null,vec__43429);
var first__43431 = cljs.core.first.call(null,seq__43430);
var seq__43430__$1 = cljs.core.next.call(null,seq__43430);
var map__43432 = first__43431;
var map__43432__$1 = ((((!((map__43432 == null)))?((((map__43432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43432):map__43432);
var msg = map__43432__$1;
var msg_name = cljs.core.get.call(null,map__43432__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43430__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43429,seq__43430,first__43431,seq__43430__$1,map__43432,map__43432__$1,msg,msg_name,_,map__43426,map__43426__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43429,seq__43430,first__43431,seq__43430__$1,map__43432,map__43432__$1,msg,msg_name,_,map__43426,map__43426__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43426,map__43426__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43440){
var vec__43441 = p__43440;
var seq__43442 = cljs.core.seq.call(null,vec__43441);
var first__43443 = cljs.core.first.call(null,seq__43442);
var seq__43442__$1 = cljs.core.next.call(null,seq__43442);
var map__43444 = first__43443;
var map__43444__$1 = ((((!((map__43444 == null)))?((((map__43444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43444):map__43444);
var msg = map__43444__$1;
var msg_name = cljs.core.get.call(null,map__43444__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43442__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43446){
var map__43458 = p__43446;
var map__43458__$1 = ((((!((map__43458 == null)))?((((map__43458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43458):map__43458);
var on_compile_warning = cljs.core.get.call(null,map__43458__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43458__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43458,map__43458__$1,on_compile_warning,on_compile_fail){
return (function (p__43460){
var vec__43461 = p__43460;
var seq__43462 = cljs.core.seq.call(null,vec__43461);
var first__43463 = cljs.core.first.call(null,seq__43462);
var seq__43462__$1 = cljs.core.next.call(null,seq__43462);
var map__43464 = first__43463;
var map__43464__$1 = ((((!((map__43464 == null)))?((((map__43464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43464):map__43464);
var msg = map__43464__$1;
var msg_name = cljs.core.get.call(null,map__43464__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43462__$1;
var pred__43466 = cljs.core._EQ_;
var expr__43467 = msg_name;
if(cljs.core.truth_(pred__43466.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43467))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43466.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43467))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43458,map__43458__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto__,msg_hist,msg_names,msg){
return (function (state_43675){
var state_val_43676 = (state_43675[(1)]);
if((state_val_43676 === (7))){
var inst_43603 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
if(cljs.core.truth_(inst_43603)){
var statearr_43677_43723 = state_43675__$1;
(statearr_43677_43723[(1)] = (8));

} else {
var statearr_43678_43724 = state_43675__$1;
(statearr_43678_43724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (20))){
var inst_43669 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43679_43725 = state_43675__$1;
(statearr_43679_43725[(2)] = inst_43669);

(statearr_43679_43725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (27))){
var inst_43665 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43680_43726 = state_43675__$1;
(statearr_43680_43726[(2)] = inst_43665);

(statearr_43680_43726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (1))){
var inst_43596 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43675__$1 = state_43675;
if(cljs.core.truth_(inst_43596)){
var statearr_43681_43727 = state_43675__$1;
(statearr_43681_43727[(1)] = (2));

} else {
var statearr_43682_43728 = state_43675__$1;
(statearr_43682_43728[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (24))){
var inst_43667 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43683_43729 = state_43675__$1;
(statearr_43683_43729[(2)] = inst_43667);

(statearr_43683_43729[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (4))){
var inst_43673 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43675__$1,inst_43673);
} else {
if((state_val_43676 === (15))){
var inst_43671 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43684_43730 = state_43675__$1;
(statearr_43684_43730[(2)] = inst_43671);

(statearr_43684_43730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (21))){
var inst_43630 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43685_43731 = state_43675__$1;
(statearr_43685_43731[(2)] = inst_43630);

(statearr_43685_43731[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (31))){
var inst_43654 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43675__$1 = state_43675;
if(cljs.core.truth_(inst_43654)){
var statearr_43686_43732 = state_43675__$1;
(statearr_43686_43732[(1)] = (34));

} else {
var statearr_43687_43733 = state_43675__$1;
(statearr_43687_43733[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (32))){
var inst_43663 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43688_43734 = state_43675__$1;
(statearr_43688_43734[(2)] = inst_43663);

(statearr_43688_43734[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (33))){
var inst_43652 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43689_43735 = state_43675__$1;
(statearr_43689_43735[(2)] = inst_43652);

(statearr_43689_43735[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (13))){
var inst_43617 = figwheel.client.heads_up.clear.call(null);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(16),inst_43617);
} else {
if((state_val_43676 === (22))){
var inst_43634 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43635 = figwheel.client.heads_up.append_warning_message.call(null,inst_43634);
var state_43675__$1 = state_43675;
var statearr_43690_43736 = state_43675__$1;
(statearr_43690_43736[(2)] = inst_43635);

(statearr_43690_43736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (36))){
var inst_43661 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43691_43737 = state_43675__$1;
(statearr_43691_43737[(2)] = inst_43661);

(statearr_43691_43737[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (29))){
var inst_43645 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43692_43738 = state_43675__$1;
(statearr_43692_43738[(2)] = inst_43645);

(statearr_43692_43738[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (6))){
var inst_43598 = (state_43675[(7)]);
var state_43675__$1 = state_43675;
var statearr_43693_43739 = state_43675__$1;
(statearr_43693_43739[(2)] = inst_43598);

(statearr_43693_43739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (28))){
var inst_43641 = (state_43675[(2)]);
var inst_43642 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43643 = figwheel.client.heads_up.display_warning.call(null,inst_43642);
var state_43675__$1 = (function (){var statearr_43694 = state_43675;
(statearr_43694[(8)] = inst_43641);

return statearr_43694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(29),inst_43643);
} else {
if((state_val_43676 === (25))){
var inst_43639 = figwheel.client.heads_up.clear.call(null);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(28),inst_43639);
} else {
if((state_val_43676 === (34))){
var inst_43656 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(37),inst_43656);
} else {
if((state_val_43676 === (17))){
var inst_43623 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43695_43740 = state_43675__$1;
(statearr_43695_43740[(2)] = inst_43623);

(statearr_43695_43740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (3))){
var inst_43615 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43675__$1 = state_43675;
if(cljs.core.truth_(inst_43615)){
var statearr_43696_43741 = state_43675__$1;
(statearr_43696_43741[(1)] = (13));

} else {
var statearr_43697_43742 = state_43675__$1;
(statearr_43697_43742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (12))){
var inst_43611 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43698_43743 = state_43675__$1;
(statearr_43698_43743[(2)] = inst_43611);

(statearr_43698_43743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (2))){
var inst_43598 = (state_43675[(7)]);
var inst_43598__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43675__$1 = (function (){var statearr_43699 = state_43675;
(statearr_43699[(7)] = inst_43598__$1);

return statearr_43699;
})();
if(cljs.core.truth_(inst_43598__$1)){
var statearr_43700_43744 = state_43675__$1;
(statearr_43700_43744[(1)] = (5));

} else {
var statearr_43701_43745 = state_43675__$1;
(statearr_43701_43745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (23))){
var inst_43637 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43675__$1 = state_43675;
if(cljs.core.truth_(inst_43637)){
var statearr_43702_43746 = state_43675__$1;
(statearr_43702_43746[(1)] = (25));

} else {
var statearr_43703_43747 = state_43675__$1;
(statearr_43703_43747[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (35))){
var state_43675__$1 = state_43675;
var statearr_43704_43748 = state_43675__$1;
(statearr_43704_43748[(2)] = null);

(statearr_43704_43748[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (19))){
var inst_43632 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43675__$1 = state_43675;
if(cljs.core.truth_(inst_43632)){
var statearr_43705_43749 = state_43675__$1;
(statearr_43705_43749[(1)] = (22));

} else {
var statearr_43706_43750 = state_43675__$1;
(statearr_43706_43750[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (11))){
var inst_43607 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43707_43751 = state_43675__$1;
(statearr_43707_43751[(2)] = inst_43607);

(statearr_43707_43751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (9))){
var inst_43609 = figwheel.client.heads_up.clear.call(null);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(12),inst_43609);
} else {
if((state_val_43676 === (5))){
var inst_43600 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43675__$1 = state_43675;
var statearr_43708_43752 = state_43675__$1;
(statearr_43708_43752[(2)] = inst_43600);

(statearr_43708_43752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (14))){
var inst_43625 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43675__$1 = state_43675;
if(cljs.core.truth_(inst_43625)){
var statearr_43709_43753 = state_43675__$1;
(statearr_43709_43753[(1)] = (18));

} else {
var statearr_43710_43754 = state_43675__$1;
(statearr_43710_43754[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (26))){
var inst_43647 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43675__$1 = state_43675;
if(cljs.core.truth_(inst_43647)){
var statearr_43711_43755 = state_43675__$1;
(statearr_43711_43755[(1)] = (30));

} else {
var statearr_43712_43756 = state_43675__$1;
(statearr_43712_43756[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (16))){
var inst_43619 = (state_43675[(2)]);
var inst_43620 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43621 = figwheel.client.heads_up.display_exception.call(null,inst_43620);
var state_43675__$1 = (function (){var statearr_43713 = state_43675;
(statearr_43713[(9)] = inst_43619);

return statearr_43713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(17),inst_43621);
} else {
if((state_val_43676 === (30))){
var inst_43649 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43650 = figwheel.client.heads_up.display_warning.call(null,inst_43649);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(33),inst_43650);
} else {
if((state_val_43676 === (10))){
var inst_43613 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43714_43757 = state_43675__$1;
(statearr_43714_43757[(2)] = inst_43613);

(statearr_43714_43757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (18))){
var inst_43627 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43628 = figwheel.client.heads_up.display_exception.call(null,inst_43627);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(21),inst_43628);
} else {
if((state_val_43676 === (37))){
var inst_43658 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43715_43758 = state_43675__$1;
(statearr_43715_43758[(2)] = inst_43658);

(statearr_43715_43758[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (8))){
var inst_43605 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(11),inst_43605);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34572__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34460__auto__,c__34572__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto____0 = (function (){
var statearr_43719 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43719[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto__);

(statearr_43719[(1)] = (1));

return statearr_43719;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto____1 = (function (state_43675){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_43675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e43720){if((e43720 instanceof Object)){
var ex__34464__auto__ = e43720;
var statearr_43721_43759 = state_43675;
(statearr_43721_43759[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43760 = state_43675;
state_43675 = G__43760;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto__ = function(state_43675){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto____1.call(this,state_43675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto__,msg_hist,msg_names,msg))
})();
var state__34574__auto__ = (function (){var statearr_43722 = f__34573__auto__.call(null);
(statearr_43722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto__);

return statearr_43722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto__,msg_hist,msg_names,msg))
);

return c__34572__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34572__auto___43823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___43823,ch){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___43823,ch){
return (function (state_43806){
var state_val_43807 = (state_43806[(1)]);
if((state_val_43807 === (1))){
var state_43806__$1 = state_43806;
var statearr_43808_43824 = state_43806__$1;
(statearr_43808_43824[(2)] = null);

(statearr_43808_43824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (2))){
var state_43806__$1 = state_43806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43806__$1,(4),ch);
} else {
if((state_val_43807 === (3))){
var inst_43804 = (state_43806[(2)]);
var state_43806__$1 = state_43806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43806__$1,inst_43804);
} else {
if((state_val_43807 === (4))){
var inst_43794 = (state_43806[(7)]);
var inst_43794__$1 = (state_43806[(2)]);
var state_43806__$1 = (function (){var statearr_43809 = state_43806;
(statearr_43809[(7)] = inst_43794__$1);

return statearr_43809;
})();
if(cljs.core.truth_(inst_43794__$1)){
var statearr_43810_43825 = state_43806__$1;
(statearr_43810_43825[(1)] = (5));

} else {
var statearr_43811_43826 = state_43806__$1;
(statearr_43811_43826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (5))){
var inst_43794 = (state_43806[(7)]);
var inst_43796 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43794);
var state_43806__$1 = state_43806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43806__$1,(8),inst_43796);
} else {
if((state_val_43807 === (6))){
var state_43806__$1 = state_43806;
var statearr_43812_43827 = state_43806__$1;
(statearr_43812_43827[(2)] = null);

(statearr_43812_43827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (7))){
var inst_43802 = (state_43806[(2)]);
var state_43806__$1 = state_43806;
var statearr_43813_43828 = state_43806__$1;
(statearr_43813_43828[(2)] = inst_43802);

(statearr_43813_43828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43807 === (8))){
var inst_43798 = (state_43806[(2)]);
var state_43806__$1 = (function (){var statearr_43814 = state_43806;
(statearr_43814[(8)] = inst_43798);

return statearr_43814;
})();
var statearr_43815_43829 = state_43806__$1;
(statearr_43815_43829[(2)] = null);

(statearr_43815_43829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__34572__auto___43823,ch))
;
return ((function (switch__34460__auto__,c__34572__auto___43823,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34461__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34461__auto____0 = (function (){
var statearr_43819 = [null,null,null,null,null,null,null,null,null];
(statearr_43819[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34461__auto__);

(statearr_43819[(1)] = (1));

return statearr_43819;
});
var figwheel$client$heads_up_plugin_$_state_machine__34461__auto____1 = (function (state_43806){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_43806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e43820){if((e43820 instanceof Object)){
var ex__34464__auto__ = e43820;
var statearr_43821_43830 = state_43806;
(statearr_43821_43830[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43831 = state_43806;
state_43806 = G__43831;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34461__auto__ = function(state_43806){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34461__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34461__auto____1.call(this,state_43806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34461__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34461__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___43823,ch))
})();
var state__34574__auto__ = (function (){var statearr_43822 = f__34573__auto__.call(null);
(statearr_43822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___43823);

return statearr_43822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___43823,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto__){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto__){
return (function (state_43852){
var state_val_43853 = (state_43852[(1)]);
if((state_val_43853 === (1))){
var inst_43847 = cljs.core.async.timeout.call(null,(3000));
var state_43852__$1 = state_43852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(2),inst_43847);
} else {
if((state_val_43853 === (2))){
var inst_43849 = (state_43852[(2)]);
var inst_43850 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43852__$1 = (function (){var statearr_43854 = state_43852;
(statearr_43854[(7)] = inst_43849);

return statearr_43854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43852__$1,inst_43850);
} else {
return null;
}
}
});})(c__34572__auto__))
;
return ((function (switch__34460__auto__,c__34572__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34461__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34461__auto____0 = (function (){
var statearr_43858 = [null,null,null,null,null,null,null,null];
(statearr_43858[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34461__auto__);

(statearr_43858[(1)] = (1));

return statearr_43858;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34461__auto____1 = (function (state_43852){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_43852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e43859){if((e43859 instanceof Object)){
var ex__34464__auto__ = e43859;
var statearr_43860_43862 = state_43852;
(statearr_43860_43862[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43863 = state_43852;
state_43852 = G__43863;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34461__auto__ = function(state_43852){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34461__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34461__auto____1.call(this,state_43852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34461__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34461__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto__))
})();
var state__34574__auto__ = (function (){var statearr_43861 = f__34573__auto__.call(null);
(statearr_43861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto__);

return statearr_43861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto__))
);

return c__34572__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto__,figwheel_version,temp__4657__auto__){
return (function (state_43886){
var state_val_43887 = (state_43886[(1)]);
if((state_val_43887 === (1))){
var inst_43880 = cljs.core.async.timeout.call(null,(2000));
var state_43886__$1 = state_43886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43886__$1,(2),inst_43880);
} else {
if((state_val_43887 === (2))){
var inst_43882 = (state_43886[(2)]);
var inst_43883 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_43884 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43883);
var state_43886__$1 = (function (){var statearr_43888 = state_43886;
(statearr_43888[(7)] = inst_43882);

return statearr_43888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43886__$1,inst_43884);
} else {
return null;
}
}
});})(c__34572__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__34460__auto__,c__34572__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto____0 = (function (){
var statearr_43892 = [null,null,null,null,null,null,null,null];
(statearr_43892[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto__);

(statearr_43892[(1)] = (1));

return statearr_43892;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto____1 = (function (state_43886){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_43886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e43893){if((e43893 instanceof Object)){
var ex__34464__auto__ = e43893;
var statearr_43894_43896 = state_43886;
(statearr_43894_43896[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43897 = state_43886;
state_43886 = G__43897;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto__ = function(state_43886){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto____1.call(this,state_43886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34574__auto__ = (function (){var statearr_43895 = f__34573__auto__.call(null);
(statearr_43895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto__);

return statearr_43895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto__,figwheel_version,temp__4657__auto__))
);

return c__34572__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43898){
var map__43902 = p__43898;
var map__43902__$1 = ((((!((map__43902 == null)))?((((map__43902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43902):map__43902);
var file = cljs.core.get.call(null,map__43902__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43902__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43902__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43904 = "";
var G__43904__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__43904),cljs.core.str("file "),cljs.core.str(file)].join(''):G__43904);
var G__43904__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__43904__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__43904__$1);
if(cljs.core.truth_((function (){var and__28267__auto__ = line;
if(cljs.core.truth_(and__28267__auto__)){
return column;
} else {
return and__28267__auto__;
}
})())){
return [cljs.core.str(G__43904__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__43904__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43905){
var map__43912 = p__43905;
var map__43912__$1 = ((((!((map__43912 == null)))?((((map__43912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43912):map__43912);
var ed = map__43912__$1;
var formatted_exception = cljs.core.get.call(null,map__43912__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43912__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43912__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43914_43918 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43915_43919 = null;
var count__43916_43920 = (0);
var i__43917_43921 = (0);
while(true){
if((i__43917_43921 < count__43916_43920)){
var msg_43922 = cljs.core._nth.call(null,chunk__43915_43919,i__43917_43921);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43922);

var G__43923 = seq__43914_43918;
var G__43924 = chunk__43915_43919;
var G__43925 = count__43916_43920;
var G__43926 = (i__43917_43921 + (1));
seq__43914_43918 = G__43923;
chunk__43915_43919 = G__43924;
count__43916_43920 = G__43925;
i__43917_43921 = G__43926;
continue;
} else {
var temp__4657__auto___43927 = cljs.core.seq.call(null,seq__43914_43918);
if(temp__4657__auto___43927){
var seq__43914_43928__$1 = temp__4657__auto___43927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43914_43928__$1)){
var c__29090__auto___43929 = cljs.core.chunk_first.call(null,seq__43914_43928__$1);
var G__43930 = cljs.core.chunk_rest.call(null,seq__43914_43928__$1);
var G__43931 = c__29090__auto___43929;
var G__43932 = cljs.core.count.call(null,c__29090__auto___43929);
var G__43933 = (0);
seq__43914_43918 = G__43930;
chunk__43915_43919 = G__43931;
count__43916_43920 = G__43932;
i__43917_43921 = G__43933;
continue;
} else {
var msg_43934 = cljs.core.first.call(null,seq__43914_43928__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43934);

var G__43935 = cljs.core.next.call(null,seq__43914_43928__$1);
var G__43936 = null;
var G__43937 = (0);
var G__43938 = (0);
seq__43914_43918 = G__43935;
chunk__43915_43919 = G__43936;
count__43916_43920 = G__43937;
i__43917_43921 = G__43938;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43939){
var map__43942 = p__43939;
var map__43942__$1 = ((((!((map__43942 == null)))?((((map__43942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43942):map__43942);
var w = map__43942__$1;
var message = cljs.core.get.call(null,map__43942__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28267__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28267__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28267__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43954 = cljs.core.seq.call(null,plugins);
var chunk__43955 = null;
var count__43956 = (0);
var i__43957 = (0);
while(true){
if((i__43957 < count__43956)){
var vec__43958 = cljs.core._nth.call(null,chunk__43955,i__43957);
var k = cljs.core.nth.call(null,vec__43958,(0),null);
var plugin = cljs.core.nth.call(null,vec__43958,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43964 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43954,chunk__43955,count__43956,i__43957,pl_43964,vec__43958,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43964.call(null,msg_hist);
});})(seq__43954,chunk__43955,count__43956,i__43957,pl_43964,vec__43958,k,plugin))
);
} else {
}

var G__43965 = seq__43954;
var G__43966 = chunk__43955;
var G__43967 = count__43956;
var G__43968 = (i__43957 + (1));
seq__43954 = G__43965;
chunk__43955 = G__43966;
count__43956 = G__43967;
i__43957 = G__43968;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43954);
if(temp__4657__auto__){
var seq__43954__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43954__$1)){
var c__29090__auto__ = cljs.core.chunk_first.call(null,seq__43954__$1);
var G__43969 = cljs.core.chunk_rest.call(null,seq__43954__$1);
var G__43970 = c__29090__auto__;
var G__43971 = cljs.core.count.call(null,c__29090__auto__);
var G__43972 = (0);
seq__43954 = G__43969;
chunk__43955 = G__43970;
count__43956 = G__43971;
i__43957 = G__43972;
continue;
} else {
var vec__43961 = cljs.core.first.call(null,seq__43954__$1);
var k = cljs.core.nth.call(null,vec__43961,(0),null);
var plugin = cljs.core.nth.call(null,vec__43961,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43973 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43954,chunk__43955,count__43956,i__43957,pl_43973,vec__43961,k,plugin,seq__43954__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43973.call(null,msg_hist);
});})(seq__43954,chunk__43955,count__43956,i__43957,pl_43973,vec__43961,k,plugin,seq__43954__$1,temp__4657__auto__))
);
} else {
}

var G__43974 = cljs.core.next.call(null,seq__43954__$1);
var G__43975 = null;
var G__43976 = (0);
var G__43977 = (0);
seq__43954 = G__43974;
chunk__43955 = G__43975;
count__43956 = G__43976;
i__43957 = G__43977;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args43978 = [];
var len__29354__auto___43985 = arguments.length;
var i__29355__auto___43986 = (0);
while(true){
if((i__29355__auto___43986 < len__29354__auto___43985)){
args43978.push((arguments[i__29355__auto___43986]));

var G__43987 = (i__29355__auto___43986 + (1));
i__29355__auto___43986 = G__43987;
continue;
} else {
}
break;
}

var G__43980 = args43978.length;
switch (G__43980) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43978.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__43981_43989 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43982_43990 = null;
var count__43983_43991 = (0);
var i__43984_43992 = (0);
while(true){
if((i__43984_43992 < count__43983_43991)){
var msg_43993 = cljs.core._nth.call(null,chunk__43982_43990,i__43984_43992);
figwheel.client.socket.handle_incoming_message.call(null,msg_43993);

var G__43994 = seq__43981_43989;
var G__43995 = chunk__43982_43990;
var G__43996 = count__43983_43991;
var G__43997 = (i__43984_43992 + (1));
seq__43981_43989 = G__43994;
chunk__43982_43990 = G__43995;
count__43983_43991 = G__43996;
i__43984_43992 = G__43997;
continue;
} else {
var temp__4657__auto___43998 = cljs.core.seq.call(null,seq__43981_43989);
if(temp__4657__auto___43998){
var seq__43981_43999__$1 = temp__4657__auto___43998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43981_43999__$1)){
var c__29090__auto___44000 = cljs.core.chunk_first.call(null,seq__43981_43999__$1);
var G__44001 = cljs.core.chunk_rest.call(null,seq__43981_43999__$1);
var G__44002 = c__29090__auto___44000;
var G__44003 = cljs.core.count.call(null,c__29090__auto___44000);
var G__44004 = (0);
seq__43981_43989 = G__44001;
chunk__43982_43990 = G__44002;
count__43983_43991 = G__44003;
i__43984_43992 = G__44004;
continue;
} else {
var msg_44005 = cljs.core.first.call(null,seq__43981_43999__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44005);

var G__44006 = cljs.core.next.call(null,seq__43981_43999__$1);
var G__44007 = null;
var G__44008 = (0);
var G__44009 = (0);
seq__43981_43989 = G__44006;
chunk__43982_43990 = G__44007;
count__43983_43991 = G__44008;
i__43984_43992 = G__44009;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29361__auto__ = [];
var len__29354__auto___44014 = arguments.length;
var i__29355__auto___44015 = (0);
while(true){
if((i__29355__auto___44015 < len__29354__auto___44014)){
args__29361__auto__.push((arguments[i__29355__auto___44015]));

var G__44016 = (i__29355__auto___44015 + (1));
i__29355__auto___44015 = G__44016;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((0) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29362__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44011){
var map__44012 = p__44011;
var map__44012__$1 = ((((!((map__44012 == null)))?((((map__44012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44012):map__44012);
var opts = map__44012__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44010){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44010));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44018){if((e44018 instanceof Error)){
var e = e44018;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44018;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44022){
var map__44023 = p__44022;
var map__44023__$1 = ((((!((map__44023 == null)))?((((map__44023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44023):map__44023);
var msg_name = cljs.core.get.call(null,map__44023__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1470645909213