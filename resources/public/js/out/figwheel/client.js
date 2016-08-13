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
var args49278 = [];
var len__32159__auto___49281 = arguments.length;
var i__32160__auto___49282 = (0);
while(true){
if((i__32160__auto___49282 < len__32159__auto___49281)){
args49278.push((arguments[i__32160__auto___49282]));

var G__49283 = (i__32160__auto___49282 + (1));
i__32160__auto___49282 = G__49283;
continue;
} else {
}
break;
}

var G__49280 = args49278.length;
switch (G__49280) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49278.length)].join('')));

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
var args__32166__auto__ = [];
var len__32159__auto___49286 = arguments.length;
var i__32160__auto___49287 = (0);
while(true){
if((i__32160__auto___49287 < len__32159__auto___49286)){
args__32166__auto__.push((arguments[i__32160__auto___49287]));

var G__49288 = (i__32160__auto___49287 + (1));
i__32160__auto___49287 = G__49288;
continue;
} else {
}
break;
}

var argseq__32167__auto__ = ((((0) < args__32166__auto__.length))?(new cljs.core.IndexedSeq(args__32166__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__32167__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49285){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49285));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__32166__auto__ = [];
var len__32159__auto___49290 = arguments.length;
var i__32160__auto___49291 = (0);
while(true){
if((i__32160__auto___49291 < len__32159__auto___49290)){
args__32166__auto__.push((arguments[i__32160__auto___49291]));

var G__49292 = (i__32160__auto___49291 + (1));
i__32160__auto___49291 = G__49292;
continue;
} else {
}
break;
}

var argseq__32167__auto__ = ((((0) < args__32166__auto__.length))?(new cljs.core.IndexedSeq(args__32166__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__32167__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49289){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49289));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__49293 = cljs.core._EQ_;
var expr__49294 = (function (){var or__31084__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e49297){if((e49297 instanceof Error)){
var e = e49297;
return false;
} else {
throw e49297;

}
}})();
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__49293.call(null,"true",expr__49294))){
return true;
} else {
if(cljs.core.truth_(pred__49293.call(null,"false",expr__49294))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__49294)].join('')));
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
}catch (e49299){if((e49299 instanceof Error)){
var e = e49299;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e49299;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49300){
var map__49303 = p__49300;
var map__49303__$1 = ((((!((map__49303 == null)))?((((map__49303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49303):map__49303);
var message = cljs.core.get.call(null,map__49303__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49303__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__31084__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__31072__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__31072__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__31072__auto__;
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
var c__37489__auto___49465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___49465,ch){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___49465,ch){
return (function (state_49434){
var state_val_49435 = (state_49434[(1)]);
if((state_val_49435 === (7))){
var inst_49430 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
var statearr_49436_49466 = state_49434__$1;
(statearr_49436_49466[(2)] = inst_49430);

(statearr_49436_49466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (1))){
var state_49434__$1 = state_49434;
var statearr_49437_49467 = state_49434__$1;
(statearr_49437_49467[(2)] = null);

(statearr_49437_49467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (4))){
var inst_49387 = (state_49434[(7)]);
var inst_49387__$1 = (state_49434[(2)]);
var state_49434__$1 = (function (){var statearr_49438 = state_49434;
(statearr_49438[(7)] = inst_49387__$1);

return statearr_49438;
})();
if(cljs.core.truth_(inst_49387__$1)){
var statearr_49439_49468 = state_49434__$1;
(statearr_49439_49468[(1)] = (5));

} else {
var statearr_49440_49469 = state_49434__$1;
(statearr_49440_49469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (15))){
var inst_49394 = (state_49434[(8)]);
var inst_49409 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49394);
var inst_49410 = cljs.core.first.call(null,inst_49409);
var inst_49411 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49410);
var inst_49412 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_49411)].join('');
var inst_49413 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49412);
var state_49434__$1 = state_49434;
var statearr_49441_49470 = state_49434__$1;
(statearr_49441_49470[(2)] = inst_49413);

(statearr_49441_49470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (13))){
var inst_49418 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
var statearr_49442_49471 = state_49434__$1;
(statearr_49442_49471[(2)] = inst_49418);

(statearr_49442_49471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (6))){
var state_49434__$1 = state_49434;
var statearr_49443_49472 = state_49434__$1;
(statearr_49443_49472[(2)] = null);

(statearr_49443_49472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (17))){
var inst_49416 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
var statearr_49444_49473 = state_49434__$1;
(statearr_49444_49473[(2)] = inst_49416);

(statearr_49444_49473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (3))){
var inst_49432 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49434__$1,inst_49432);
} else {
if((state_val_49435 === (12))){
var inst_49393 = (state_49434[(9)]);
var inst_49407 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49393,opts);
var state_49434__$1 = state_49434;
if(cljs.core.truth_(inst_49407)){
var statearr_49445_49474 = state_49434__$1;
(statearr_49445_49474[(1)] = (15));

} else {
var statearr_49446_49475 = state_49434__$1;
(statearr_49446_49475[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (2))){
var state_49434__$1 = state_49434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49434__$1,(4),ch);
} else {
if((state_val_49435 === (11))){
var inst_49394 = (state_49434[(8)]);
var inst_49399 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49400 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49394);
var inst_49401 = cljs.core.async.timeout.call(null,(1000));
var inst_49402 = [inst_49400,inst_49401];
var inst_49403 = (new cljs.core.PersistentVector(null,2,(5),inst_49399,inst_49402,null));
var state_49434__$1 = state_49434;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49434__$1,(14),inst_49403);
} else {
if((state_val_49435 === (9))){
var inst_49394 = (state_49434[(8)]);
var inst_49420 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49421 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49394);
var inst_49422 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49421);
var inst_49423 = [cljs.core.str("Not loading: "),cljs.core.str(inst_49422)].join('');
var inst_49424 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49423);
var state_49434__$1 = (function (){var statearr_49447 = state_49434;
(statearr_49447[(10)] = inst_49420);

return statearr_49447;
})();
var statearr_49448_49476 = state_49434__$1;
(statearr_49448_49476[(2)] = inst_49424);

(statearr_49448_49476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (5))){
var inst_49387 = (state_49434[(7)]);
var inst_49389 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49390 = (new cljs.core.PersistentArrayMap(null,2,inst_49389,null));
var inst_49391 = (new cljs.core.PersistentHashSet(null,inst_49390,null));
var inst_49392 = figwheel.client.focus_msgs.call(null,inst_49391,inst_49387);
var inst_49393 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49392);
var inst_49394 = cljs.core.first.call(null,inst_49392);
var inst_49395 = figwheel.client.autoload_QMARK_.call(null);
var state_49434__$1 = (function (){var statearr_49449 = state_49434;
(statearr_49449[(8)] = inst_49394);

(statearr_49449[(9)] = inst_49393);

return statearr_49449;
})();
if(cljs.core.truth_(inst_49395)){
var statearr_49450_49477 = state_49434__$1;
(statearr_49450_49477[(1)] = (8));

} else {
var statearr_49451_49478 = state_49434__$1;
(statearr_49451_49478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (14))){
var inst_49405 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
var statearr_49452_49479 = state_49434__$1;
(statearr_49452_49479[(2)] = inst_49405);

(statearr_49452_49479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (16))){
var state_49434__$1 = state_49434;
var statearr_49453_49480 = state_49434__$1;
(statearr_49453_49480[(2)] = null);

(statearr_49453_49480[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (10))){
var inst_49426 = (state_49434[(2)]);
var state_49434__$1 = (function (){var statearr_49454 = state_49434;
(statearr_49454[(11)] = inst_49426);

return statearr_49454;
})();
var statearr_49455_49481 = state_49434__$1;
(statearr_49455_49481[(2)] = null);

(statearr_49455_49481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (8))){
var inst_49393 = (state_49434[(9)]);
var inst_49397 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49393,opts);
var state_49434__$1 = state_49434;
if(cljs.core.truth_(inst_49397)){
var statearr_49456_49482 = state_49434__$1;
(statearr_49456_49482[(1)] = (11));

} else {
var statearr_49457_49483 = state_49434__$1;
(statearr_49457_49483[(1)] = (12));

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
});})(c__37489__auto___49465,ch))
;
return ((function (switch__37377__auto__,c__37489__auto___49465,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37378__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37378__auto____0 = (function (){
var statearr_49461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49461[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37378__auto__);

(statearr_49461[(1)] = (1));

return statearr_49461;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37378__auto____1 = (function (state_49434){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_49434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e49462){if((e49462 instanceof Object)){
var ex__37381__auto__ = e49462;
var statearr_49463_49484 = state_49434;
(statearr_49463_49484[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49485 = state_49434;
state_49434 = G__49485;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37378__auto__ = function(state_49434){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37378__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37378__auto____1.call(this,state_49434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37378__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37378__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___49465,ch))
})();
var state__37491__auto__ = (function (){var statearr_49464 = f__37490__auto__.call(null);
(statearr_49464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___49465);

return statearr_49464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___49465,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49486_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49486_SHARP_));
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
var base_path_49489 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49489){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49488){if((e49488 instanceof Error)){
var e = e49488;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49489], null));
} else {
var e = e49488;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49489))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49490){
var map__49499 = p__49490;
var map__49499__$1 = ((((!((map__49499 == null)))?((((map__49499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49499):map__49499);
var opts = map__49499__$1;
var build_id = cljs.core.get.call(null,map__49499__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49499,map__49499__$1,opts,build_id){
return (function (p__49501){
var vec__49502 = p__49501;
var seq__49503 = cljs.core.seq.call(null,vec__49502);
var first__49504 = cljs.core.first.call(null,seq__49503);
var seq__49503__$1 = cljs.core.next.call(null,seq__49503);
var map__49505 = first__49504;
var map__49505__$1 = ((((!((map__49505 == null)))?((((map__49505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49505):map__49505);
var msg = map__49505__$1;
var msg_name = cljs.core.get.call(null,map__49505__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49503__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49502,seq__49503,first__49504,seq__49503__$1,map__49505,map__49505__$1,msg,msg_name,_,map__49499,map__49499__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49502,seq__49503,first__49504,seq__49503__$1,map__49505,map__49505__$1,msg,msg_name,_,map__49499,map__49499__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49499,map__49499__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49513){
var vec__49514 = p__49513;
var seq__49515 = cljs.core.seq.call(null,vec__49514);
var first__49516 = cljs.core.first.call(null,seq__49515);
var seq__49515__$1 = cljs.core.next.call(null,seq__49515);
var map__49517 = first__49516;
var map__49517__$1 = ((((!((map__49517 == null)))?((((map__49517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49517):map__49517);
var msg = map__49517__$1;
var msg_name = cljs.core.get.call(null,map__49517__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49515__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49519){
var map__49531 = p__49519;
var map__49531__$1 = ((((!((map__49531 == null)))?((((map__49531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49531):map__49531);
var on_compile_warning = cljs.core.get.call(null,map__49531__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49531__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49531,map__49531__$1,on_compile_warning,on_compile_fail){
return (function (p__49533){
var vec__49534 = p__49533;
var seq__49535 = cljs.core.seq.call(null,vec__49534);
var first__49536 = cljs.core.first.call(null,seq__49535);
var seq__49535__$1 = cljs.core.next.call(null,seq__49535);
var map__49537 = first__49536;
var map__49537__$1 = ((((!((map__49537 == null)))?((((map__49537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49537):map__49537);
var msg = map__49537__$1;
var msg_name = cljs.core.get.call(null,map__49537__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49535__$1;
var pred__49539 = cljs.core._EQ_;
var expr__49540 = msg_name;
if(cljs.core.truth_(pred__49539.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49540))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49539.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49540))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49531,map__49531__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto__,msg_hist,msg_names,msg){
return (function (state_49748){
var state_val_49749 = (state_49748[(1)]);
if((state_val_49749 === (7))){
var inst_49676 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
if(cljs.core.truth_(inst_49676)){
var statearr_49750_49796 = state_49748__$1;
(statearr_49750_49796[(1)] = (8));

} else {
var statearr_49751_49797 = state_49748__$1;
(statearr_49751_49797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (20))){
var inst_49742 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49752_49798 = state_49748__$1;
(statearr_49752_49798[(2)] = inst_49742);

(statearr_49752_49798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (27))){
var inst_49738 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49753_49799 = state_49748__$1;
(statearr_49753_49799[(2)] = inst_49738);

(statearr_49753_49799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (1))){
var inst_49669 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49748__$1 = state_49748;
if(cljs.core.truth_(inst_49669)){
var statearr_49754_49800 = state_49748__$1;
(statearr_49754_49800[(1)] = (2));

} else {
var statearr_49755_49801 = state_49748__$1;
(statearr_49755_49801[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (24))){
var inst_49740 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49756_49802 = state_49748__$1;
(statearr_49756_49802[(2)] = inst_49740);

(statearr_49756_49802[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (4))){
var inst_49746 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49748__$1,inst_49746);
} else {
if((state_val_49749 === (15))){
var inst_49744 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49757_49803 = state_49748__$1;
(statearr_49757_49803[(2)] = inst_49744);

(statearr_49757_49803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (21))){
var inst_49703 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49758_49804 = state_49748__$1;
(statearr_49758_49804[(2)] = inst_49703);

(statearr_49758_49804[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (31))){
var inst_49727 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49748__$1 = state_49748;
if(cljs.core.truth_(inst_49727)){
var statearr_49759_49805 = state_49748__$1;
(statearr_49759_49805[(1)] = (34));

} else {
var statearr_49760_49806 = state_49748__$1;
(statearr_49760_49806[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (32))){
var inst_49736 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49761_49807 = state_49748__$1;
(statearr_49761_49807[(2)] = inst_49736);

(statearr_49761_49807[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (33))){
var inst_49725 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49762_49808 = state_49748__$1;
(statearr_49762_49808[(2)] = inst_49725);

(statearr_49762_49808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (13))){
var inst_49690 = figwheel.client.heads_up.clear.call(null);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(16),inst_49690);
} else {
if((state_val_49749 === (22))){
var inst_49707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49708 = figwheel.client.heads_up.append_warning_message.call(null,inst_49707);
var state_49748__$1 = state_49748;
var statearr_49763_49809 = state_49748__$1;
(statearr_49763_49809[(2)] = inst_49708);

(statearr_49763_49809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (36))){
var inst_49734 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49764_49810 = state_49748__$1;
(statearr_49764_49810[(2)] = inst_49734);

(statearr_49764_49810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (29))){
var inst_49718 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49765_49811 = state_49748__$1;
(statearr_49765_49811[(2)] = inst_49718);

(statearr_49765_49811[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (6))){
var inst_49671 = (state_49748[(7)]);
var state_49748__$1 = state_49748;
var statearr_49766_49812 = state_49748__$1;
(statearr_49766_49812[(2)] = inst_49671);

(statearr_49766_49812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (28))){
var inst_49714 = (state_49748[(2)]);
var inst_49715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49716 = figwheel.client.heads_up.display_warning.call(null,inst_49715);
var state_49748__$1 = (function (){var statearr_49767 = state_49748;
(statearr_49767[(8)] = inst_49714);

return statearr_49767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(29),inst_49716);
} else {
if((state_val_49749 === (25))){
var inst_49712 = figwheel.client.heads_up.clear.call(null);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(28),inst_49712);
} else {
if((state_val_49749 === (34))){
var inst_49729 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(37),inst_49729);
} else {
if((state_val_49749 === (17))){
var inst_49696 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49768_49813 = state_49748__$1;
(statearr_49768_49813[(2)] = inst_49696);

(statearr_49768_49813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (3))){
var inst_49688 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49748__$1 = state_49748;
if(cljs.core.truth_(inst_49688)){
var statearr_49769_49814 = state_49748__$1;
(statearr_49769_49814[(1)] = (13));

} else {
var statearr_49770_49815 = state_49748__$1;
(statearr_49770_49815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (12))){
var inst_49684 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49771_49816 = state_49748__$1;
(statearr_49771_49816[(2)] = inst_49684);

(statearr_49771_49816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (2))){
var inst_49671 = (state_49748[(7)]);
var inst_49671__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49748__$1 = (function (){var statearr_49772 = state_49748;
(statearr_49772[(7)] = inst_49671__$1);

return statearr_49772;
})();
if(cljs.core.truth_(inst_49671__$1)){
var statearr_49773_49817 = state_49748__$1;
(statearr_49773_49817[(1)] = (5));

} else {
var statearr_49774_49818 = state_49748__$1;
(statearr_49774_49818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (23))){
var inst_49710 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49748__$1 = state_49748;
if(cljs.core.truth_(inst_49710)){
var statearr_49775_49819 = state_49748__$1;
(statearr_49775_49819[(1)] = (25));

} else {
var statearr_49776_49820 = state_49748__$1;
(statearr_49776_49820[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (35))){
var state_49748__$1 = state_49748;
var statearr_49777_49821 = state_49748__$1;
(statearr_49777_49821[(2)] = null);

(statearr_49777_49821[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (19))){
var inst_49705 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49748__$1 = state_49748;
if(cljs.core.truth_(inst_49705)){
var statearr_49778_49822 = state_49748__$1;
(statearr_49778_49822[(1)] = (22));

} else {
var statearr_49779_49823 = state_49748__$1;
(statearr_49779_49823[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (11))){
var inst_49680 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49780_49824 = state_49748__$1;
(statearr_49780_49824[(2)] = inst_49680);

(statearr_49780_49824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (9))){
var inst_49682 = figwheel.client.heads_up.clear.call(null);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(12),inst_49682);
} else {
if((state_val_49749 === (5))){
var inst_49673 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49748__$1 = state_49748;
var statearr_49781_49825 = state_49748__$1;
(statearr_49781_49825[(2)] = inst_49673);

(statearr_49781_49825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (14))){
var inst_49698 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49748__$1 = state_49748;
if(cljs.core.truth_(inst_49698)){
var statearr_49782_49826 = state_49748__$1;
(statearr_49782_49826[(1)] = (18));

} else {
var statearr_49783_49827 = state_49748__$1;
(statearr_49783_49827[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (26))){
var inst_49720 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49748__$1 = state_49748;
if(cljs.core.truth_(inst_49720)){
var statearr_49784_49828 = state_49748__$1;
(statearr_49784_49828[(1)] = (30));

} else {
var statearr_49785_49829 = state_49748__$1;
(statearr_49785_49829[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (16))){
var inst_49692 = (state_49748[(2)]);
var inst_49693 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49694 = figwheel.client.heads_up.display_exception.call(null,inst_49693);
var state_49748__$1 = (function (){var statearr_49786 = state_49748;
(statearr_49786[(9)] = inst_49692);

return statearr_49786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(17),inst_49694);
} else {
if((state_val_49749 === (30))){
var inst_49722 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49723 = figwheel.client.heads_up.display_warning.call(null,inst_49722);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(33),inst_49723);
} else {
if((state_val_49749 === (10))){
var inst_49686 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49787_49830 = state_49748__$1;
(statearr_49787_49830[(2)] = inst_49686);

(statearr_49787_49830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (18))){
var inst_49700 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49701 = figwheel.client.heads_up.display_exception.call(null,inst_49700);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(21),inst_49701);
} else {
if((state_val_49749 === (37))){
var inst_49731 = (state_49748[(2)]);
var state_49748__$1 = state_49748;
var statearr_49788_49831 = state_49748__$1;
(statearr_49788_49831[(2)] = inst_49731);

(statearr_49788_49831[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49749 === (8))){
var inst_49678 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49748__$1 = state_49748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49748__$1,(11),inst_49678);
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
});})(c__37489__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37377__auto__,c__37489__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto____0 = (function (){
var statearr_49792 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49792[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto__);

(statearr_49792[(1)] = (1));

return statearr_49792;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto____1 = (function (state_49748){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_49748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e49793){if((e49793 instanceof Object)){
var ex__37381__auto__ = e49793;
var statearr_49794_49832 = state_49748;
(statearr_49794_49832[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49833 = state_49748;
state_49748 = G__49833;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto__ = function(state_49748){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto____1.call(this,state_49748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto__,msg_hist,msg_names,msg))
})();
var state__37491__auto__ = (function (){var statearr_49795 = f__37490__auto__.call(null);
(statearr_49795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto__);

return statearr_49795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto__,msg_hist,msg_names,msg))
);

return c__37489__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37489__auto___49896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___49896,ch){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___49896,ch){
return (function (state_49879){
var state_val_49880 = (state_49879[(1)]);
if((state_val_49880 === (1))){
var state_49879__$1 = state_49879;
var statearr_49881_49897 = state_49879__$1;
(statearr_49881_49897[(2)] = null);

(statearr_49881_49897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49880 === (2))){
var state_49879__$1 = state_49879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49879__$1,(4),ch);
} else {
if((state_val_49880 === (3))){
var inst_49877 = (state_49879[(2)]);
var state_49879__$1 = state_49879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49879__$1,inst_49877);
} else {
if((state_val_49880 === (4))){
var inst_49867 = (state_49879[(7)]);
var inst_49867__$1 = (state_49879[(2)]);
var state_49879__$1 = (function (){var statearr_49882 = state_49879;
(statearr_49882[(7)] = inst_49867__$1);

return statearr_49882;
})();
if(cljs.core.truth_(inst_49867__$1)){
var statearr_49883_49898 = state_49879__$1;
(statearr_49883_49898[(1)] = (5));

} else {
var statearr_49884_49899 = state_49879__$1;
(statearr_49884_49899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49880 === (5))){
var inst_49867 = (state_49879[(7)]);
var inst_49869 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49867);
var state_49879__$1 = state_49879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49879__$1,(8),inst_49869);
} else {
if((state_val_49880 === (6))){
var state_49879__$1 = state_49879;
var statearr_49885_49900 = state_49879__$1;
(statearr_49885_49900[(2)] = null);

(statearr_49885_49900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49880 === (7))){
var inst_49875 = (state_49879[(2)]);
var state_49879__$1 = state_49879;
var statearr_49886_49901 = state_49879__$1;
(statearr_49886_49901[(2)] = inst_49875);

(statearr_49886_49901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49880 === (8))){
var inst_49871 = (state_49879[(2)]);
var state_49879__$1 = (function (){var statearr_49887 = state_49879;
(statearr_49887[(8)] = inst_49871);

return statearr_49887;
})();
var statearr_49888_49902 = state_49879__$1;
(statearr_49888_49902[(2)] = null);

(statearr_49888_49902[(1)] = (2));


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
});})(c__37489__auto___49896,ch))
;
return ((function (switch__37377__auto__,c__37489__auto___49896,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37378__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37378__auto____0 = (function (){
var statearr_49892 = [null,null,null,null,null,null,null,null,null];
(statearr_49892[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37378__auto__);

(statearr_49892[(1)] = (1));

return statearr_49892;
});
var figwheel$client$heads_up_plugin_$_state_machine__37378__auto____1 = (function (state_49879){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_49879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e49893){if((e49893 instanceof Object)){
var ex__37381__auto__ = e49893;
var statearr_49894_49903 = state_49879;
(statearr_49894_49903[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49904 = state_49879;
state_49879 = G__49904;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37378__auto__ = function(state_49879){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37378__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37378__auto____1.call(this,state_49879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37378__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37378__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___49896,ch))
})();
var state__37491__auto__ = (function (){var statearr_49895 = f__37490__auto__.call(null);
(statearr_49895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___49896);

return statearr_49895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___49896,ch))
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
var c__37489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto__){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto__){
return (function (state_49925){
var state_val_49926 = (state_49925[(1)]);
if((state_val_49926 === (1))){
var inst_49920 = cljs.core.async.timeout.call(null,(3000));
var state_49925__$1 = state_49925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49925__$1,(2),inst_49920);
} else {
if((state_val_49926 === (2))){
var inst_49922 = (state_49925[(2)]);
var inst_49923 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49925__$1 = (function (){var statearr_49927 = state_49925;
(statearr_49927[(7)] = inst_49922);

return statearr_49927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49925__$1,inst_49923);
} else {
return null;
}
}
});})(c__37489__auto__))
;
return ((function (switch__37377__auto__,c__37489__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37378__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37378__auto____0 = (function (){
var statearr_49931 = [null,null,null,null,null,null,null,null];
(statearr_49931[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37378__auto__);

(statearr_49931[(1)] = (1));

return statearr_49931;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37378__auto____1 = (function (state_49925){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_49925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e49932){if((e49932 instanceof Object)){
var ex__37381__auto__ = e49932;
var statearr_49933_49935 = state_49925;
(statearr_49933_49935[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49936 = state_49925;
state_49925 = G__49936;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37378__auto__ = function(state_49925){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37378__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37378__auto____1.call(this,state_49925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37378__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37378__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto__))
})();
var state__37491__auto__ = (function (){var statearr_49934 = f__37490__auto__.call(null);
(statearr_49934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto__);

return statearr_49934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto__))
);

return c__37489__auto__;
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
var c__37489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto__,figwheel_version,temp__4657__auto__){
return (function (state_49959){
var state_val_49960 = (state_49959[(1)]);
if((state_val_49960 === (1))){
var inst_49953 = cljs.core.async.timeout.call(null,(2000));
var state_49959__$1 = state_49959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49959__$1,(2),inst_49953);
} else {
if((state_val_49960 === (2))){
var inst_49955 = (state_49959[(2)]);
var inst_49956 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_49957 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49956);
var state_49959__$1 = (function (){var statearr_49961 = state_49959;
(statearr_49961[(7)] = inst_49955);

return statearr_49961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49959__$1,inst_49957);
} else {
return null;
}
}
});})(c__37489__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__37377__auto__,c__37489__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto____0 = (function (){
var statearr_49965 = [null,null,null,null,null,null,null,null];
(statearr_49965[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto__);

(statearr_49965[(1)] = (1));

return statearr_49965;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto____1 = (function (state_49959){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_49959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e49966){if((e49966 instanceof Object)){
var ex__37381__auto__ = e49966;
var statearr_49967_49969 = state_49959;
(statearr_49967_49969[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49970 = state_49959;
state_49959 = G__49970;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto__ = function(state_49959){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto____1.call(this,state_49959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto__,figwheel_version,temp__4657__auto__))
})();
var state__37491__auto__ = (function (){var statearr_49968 = f__37490__auto__.call(null);
(statearr_49968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto__);

return statearr_49968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto__,figwheel_version,temp__4657__auto__))
);

return c__37489__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49971){
var map__49975 = p__49971;
var map__49975__$1 = ((((!((map__49975 == null)))?((((map__49975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49975):map__49975);
var file = cljs.core.get.call(null,map__49975__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49975__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49975__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49977 = "";
var G__49977__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__49977),cljs.core.str("file "),cljs.core.str(file)].join(''):G__49977);
var G__49977__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__49977__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__49977__$1);
if(cljs.core.truth_((function (){var and__31072__auto__ = line;
if(cljs.core.truth_(and__31072__auto__)){
return column;
} else {
return and__31072__auto__;
}
})())){
return [cljs.core.str(G__49977__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__49977__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49978){
var map__49985 = p__49978;
var map__49985__$1 = ((((!((map__49985 == null)))?((((map__49985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49985):map__49985);
var ed = map__49985__$1;
var formatted_exception = cljs.core.get.call(null,map__49985__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49985__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49985__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49987_49991 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49988_49992 = null;
var count__49989_49993 = (0);
var i__49990_49994 = (0);
while(true){
if((i__49990_49994 < count__49989_49993)){
var msg_49995 = cljs.core._nth.call(null,chunk__49988_49992,i__49990_49994);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49995);

var G__49996 = seq__49987_49991;
var G__49997 = chunk__49988_49992;
var G__49998 = count__49989_49993;
var G__49999 = (i__49990_49994 + (1));
seq__49987_49991 = G__49996;
chunk__49988_49992 = G__49997;
count__49989_49993 = G__49998;
i__49990_49994 = G__49999;
continue;
} else {
var temp__4657__auto___50000 = cljs.core.seq.call(null,seq__49987_49991);
if(temp__4657__auto___50000){
var seq__49987_50001__$1 = temp__4657__auto___50000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49987_50001__$1)){
var c__31895__auto___50002 = cljs.core.chunk_first.call(null,seq__49987_50001__$1);
var G__50003 = cljs.core.chunk_rest.call(null,seq__49987_50001__$1);
var G__50004 = c__31895__auto___50002;
var G__50005 = cljs.core.count.call(null,c__31895__auto___50002);
var G__50006 = (0);
seq__49987_49991 = G__50003;
chunk__49988_49992 = G__50004;
count__49989_49993 = G__50005;
i__49990_49994 = G__50006;
continue;
} else {
var msg_50007 = cljs.core.first.call(null,seq__49987_50001__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50007);

var G__50008 = cljs.core.next.call(null,seq__49987_50001__$1);
var G__50009 = null;
var G__50010 = (0);
var G__50011 = (0);
seq__49987_49991 = G__50008;
chunk__49988_49992 = G__50009;
count__49989_49993 = G__50010;
i__49990_49994 = G__50011;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50012){
var map__50015 = p__50012;
var map__50015__$1 = ((((!((map__50015 == null)))?((((map__50015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50015):map__50015);
var w = map__50015__$1;
var message = cljs.core.get.call(null,map__50015__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__31072__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__31072__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__31072__auto__;
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
var seq__50027 = cljs.core.seq.call(null,plugins);
var chunk__50028 = null;
var count__50029 = (0);
var i__50030 = (0);
while(true){
if((i__50030 < count__50029)){
var vec__50031 = cljs.core._nth.call(null,chunk__50028,i__50030);
var k = cljs.core.nth.call(null,vec__50031,(0),null);
var plugin = cljs.core.nth.call(null,vec__50031,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50037 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50027,chunk__50028,count__50029,i__50030,pl_50037,vec__50031,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50037.call(null,msg_hist);
});})(seq__50027,chunk__50028,count__50029,i__50030,pl_50037,vec__50031,k,plugin))
);
} else {
}

var G__50038 = seq__50027;
var G__50039 = chunk__50028;
var G__50040 = count__50029;
var G__50041 = (i__50030 + (1));
seq__50027 = G__50038;
chunk__50028 = G__50039;
count__50029 = G__50040;
i__50030 = G__50041;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50027);
if(temp__4657__auto__){
var seq__50027__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50027__$1)){
var c__31895__auto__ = cljs.core.chunk_first.call(null,seq__50027__$1);
var G__50042 = cljs.core.chunk_rest.call(null,seq__50027__$1);
var G__50043 = c__31895__auto__;
var G__50044 = cljs.core.count.call(null,c__31895__auto__);
var G__50045 = (0);
seq__50027 = G__50042;
chunk__50028 = G__50043;
count__50029 = G__50044;
i__50030 = G__50045;
continue;
} else {
var vec__50034 = cljs.core.first.call(null,seq__50027__$1);
var k = cljs.core.nth.call(null,vec__50034,(0),null);
var plugin = cljs.core.nth.call(null,vec__50034,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50046 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50027,chunk__50028,count__50029,i__50030,pl_50046,vec__50034,k,plugin,seq__50027__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50046.call(null,msg_hist);
});})(seq__50027,chunk__50028,count__50029,i__50030,pl_50046,vec__50034,k,plugin,seq__50027__$1,temp__4657__auto__))
);
} else {
}

var G__50047 = cljs.core.next.call(null,seq__50027__$1);
var G__50048 = null;
var G__50049 = (0);
var G__50050 = (0);
seq__50027 = G__50047;
chunk__50028 = G__50048;
count__50029 = G__50049;
i__50030 = G__50050;
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
var args50051 = [];
var len__32159__auto___50058 = arguments.length;
var i__32160__auto___50059 = (0);
while(true){
if((i__32160__auto___50059 < len__32159__auto___50058)){
args50051.push((arguments[i__32160__auto___50059]));

var G__50060 = (i__32160__auto___50059 + (1));
i__32160__auto___50059 = G__50060;
continue;
} else {
}
break;
}

var G__50053 = args50051.length;
switch (G__50053) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50051.length)].join('')));

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

var seq__50054_50062 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50055_50063 = null;
var count__50056_50064 = (0);
var i__50057_50065 = (0);
while(true){
if((i__50057_50065 < count__50056_50064)){
var msg_50066 = cljs.core._nth.call(null,chunk__50055_50063,i__50057_50065);
figwheel.client.socket.handle_incoming_message.call(null,msg_50066);

var G__50067 = seq__50054_50062;
var G__50068 = chunk__50055_50063;
var G__50069 = count__50056_50064;
var G__50070 = (i__50057_50065 + (1));
seq__50054_50062 = G__50067;
chunk__50055_50063 = G__50068;
count__50056_50064 = G__50069;
i__50057_50065 = G__50070;
continue;
} else {
var temp__4657__auto___50071 = cljs.core.seq.call(null,seq__50054_50062);
if(temp__4657__auto___50071){
var seq__50054_50072__$1 = temp__4657__auto___50071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50054_50072__$1)){
var c__31895__auto___50073 = cljs.core.chunk_first.call(null,seq__50054_50072__$1);
var G__50074 = cljs.core.chunk_rest.call(null,seq__50054_50072__$1);
var G__50075 = c__31895__auto___50073;
var G__50076 = cljs.core.count.call(null,c__31895__auto___50073);
var G__50077 = (0);
seq__50054_50062 = G__50074;
chunk__50055_50063 = G__50075;
count__50056_50064 = G__50076;
i__50057_50065 = G__50077;
continue;
} else {
var msg_50078 = cljs.core.first.call(null,seq__50054_50072__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50078);

var G__50079 = cljs.core.next.call(null,seq__50054_50072__$1);
var G__50080 = null;
var G__50081 = (0);
var G__50082 = (0);
seq__50054_50062 = G__50079;
chunk__50055_50063 = G__50080;
count__50056_50064 = G__50081;
i__50057_50065 = G__50082;
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
var args__32166__auto__ = [];
var len__32159__auto___50087 = arguments.length;
var i__32160__auto___50088 = (0);
while(true){
if((i__32160__auto___50088 < len__32159__auto___50087)){
args__32166__auto__.push((arguments[i__32160__auto___50088]));

var G__50089 = (i__32160__auto___50088 + (1));
i__32160__auto___50088 = G__50089;
continue;
} else {
}
break;
}

var argseq__32167__auto__ = ((((0) < args__32166__auto__.length))?(new cljs.core.IndexedSeq(args__32166__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__32167__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50084){
var map__50085 = p__50084;
var map__50085__$1 = ((((!((map__50085 == null)))?((((map__50085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50085):map__50085);
var opts = map__50085__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50083){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50083));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50091){if((e50091 instanceof Error)){
var e = e50091;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50091;

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
return (function (p__50095){
var map__50096 = p__50095;
var map__50096__$1 = ((((!((map__50096 == null)))?((((map__50096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50096):map__50096);
var msg_name = cljs.core.get.call(null,map__50096__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471077529864