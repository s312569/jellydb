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
var args48833 = [];
var len__31936__auto___48836 = arguments.length;
var i__31937__auto___48837 = (0);
while(true){
if((i__31937__auto___48837 < len__31936__auto___48836)){
args48833.push((arguments[i__31937__auto___48837]));

var G__48838 = (i__31937__auto___48837 + (1));
i__31937__auto___48837 = G__48838;
continue;
} else {
}
break;
}

var G__48835 = args48833.length;
switch (G__48835) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48833.length)].join('')));

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
var args__31943__auto__ = [];
var len__31936__auto___48841 = arguments.length;
var i__31937__auto___48842 = (0);
while(true){
if((i__31937__auto___48842 < len__31936__auto___48841)){
args__31943__auto__.push((arguments[i__31937__auto___48842]));

var G__48843 = (i__31937__auto___48842 + (1));
i__31937__auto___48842 = G__48843;
continue;
} else {
}
break;
}

var argseq__31944__auto__ = ((((0) < args__31943__auto__.length))?(new cljs.core.IndexedSeq(args__31943__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31944__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48840){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48840));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31943__auto__ = [];
var len__31936__auto___48845 = arguments.length;
var i__31937__auto___48846 = (0);
while(true){
if((i__31937__auto___48846 < len__31936__auto___48845)){
args__31943__auto__.push((arguments[i__31937__auto___48846]));

var G__48847 = (i__31937__auto___48846 + (1));
i__31937__auto___48846 = G__48847;
continue;
} else {
}
break;
}

var argseq__31944__auto__ = ((((0) < args__31943__auto__.length))?(new cljs.core.IndexedSeq(args__31943__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31944__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48844){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48844));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__48848 = cljs.core._EQ_;
var expr__48849 = (function (){var or__30861__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e48852){if((e48852 instanceof Error)){
var e = e48852;
return false;
} else {
throw e48852;

}
}})();
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__48848.call(null,"true",expr__48849))){
return true;
} else {
if(cljs.core.truth_(pred__48848.call(null,"false",expr__48849))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48849)].join('')));
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
}catch (e48854){if((e48854 instanceof Error)){
var e = e48854;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e48854;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48855){
var map__48858 = p__48855;
var map__48858__$1 = ((((!((map__48858 == null)))?((((map__48858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48858):map__48858);
var message = cljs.core.get.call(null,map__48858__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48858__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30861__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30849__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30849__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30849__auto__;
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
var c__35841__auto___49020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___49020,ch){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___49020,ch){
return (function (state_48989){
var state_val_48990 = (state_48989[(1)]);
if((state_val_48990 === (7))){
var inst_48985 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_48991_49021 = state_48989__$1;
(statearr_48991_49021[(2)] = inst_48985);

(statearr_48991_49021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (1))){
var state_48989__$1 = state_48989;
var statearr_48992_49022 = state_48989__$1;
(statearr_48992_49022[(2)] = null);

(statearr_48992_49022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (4))){
var inst_48942 = (state_48989[(7)]);
var inst_48942__$1 = (state_48989[(2)]);
var state_48989__$1 = (function (){var statearr_48993 = state_48989;
(statearr_48993[(7)] = inst_48942__$1);

return statearr_48993;
})();
if(cljs.core.truth_(inst_48942__$1)){
var statearr_48994_49023 = state_48989__$1;
(statearr_48994_49023[(1)] = (5));

} else {
var statearr_48995_49024 = state_48989__$1;
(statearr_48995_49024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (15))){
var inst_48949 = (state_48989[(8)]);
var inst_48964 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48949);
var inst_48965 = cljs.core.first.call(null,inst_48964);
var inst_48966 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48965);
var inst_48967 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_48966)].join('');
var inst_48968 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48967);
var state_48989__$1 = state_48989;
var statearr_48996_49025 = state_48989__$1;
(statearr_48996_49025[(2)] = inst_48968);

(statearr_48996_49025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (13))){
var inst_48973 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_48997_49026 = state_48989__$1;
(statearr_48997_49026[(2)] = inst_48973);

(statearr_48997_49026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (6))){
var state_48989__$1 = state_48989;
var statearr_48998_49027 = state_48989__$1;
(statearr_48998_49027[(2)] = null);

(statearr_48998_49027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (17))){
var inst_48971 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_48999_49028 = state_48989__$1;
(statearr_48999_49028[(2)] = inst_48971);

(statearr_48999_49028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (3))){
var inst_48987 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48989__$1,inst_48987);
} else {
if((state_val_48990 === (12))){
var inst_48948 = (state_48989[(9)]);
var inst_48962 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48948,opts);
var state_48989__$1 = state_48989;
if(cljs.core.truth_(inst_48962)){
var statearr_49000_49029 = state_48989__$1;
(statearr_49000_49029[(1)] = (15));

} else {
var statearr_49001_49030 = state_48989__$1;
(statearr_49001_49030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (2))){
var state_48989__$1 = state_48989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48989__$1,(4),ch);
} else {
if((state_val_48990 === (11))){
var inst_48949 = (state_48989[(8)]);
var inst_48954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48955 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48949);
var inst_48956 = cljs.core.async.timeout.call(null,(1000));
var inst_48957 = [inst_48955,inst_48956];
var inst_48958 = (new cljs.core.PersistentVector(null,2,(5),inst_48954,inst_48957,null));
var state_48989__$1 = state_48989;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48989__$1,(14),inst_48958);
} else {
if((state_val_48990 === (9))){
var inst_48949 = (state_48989[(8)]);
var inst_48975 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48976 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48949);
var inst_48977 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48976);
var inst_48978 = [cljs.core.str("Not loading: "),cljs.core.str(inst_48977)].join('');
var inst_48979 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48978);
var state_48989__$1 = (function (){var statearr_49002 = state_48989;
(statearr_49002[(10)] = inst_48975);

return statearr_49002;
})();
var statearr_49003_49031 = state_48989__$1;
(statearr_49003_49031[(2)] = inst_48979);

(statearr_49003_49031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (5))){
var inst_48942 = (state_48989[(7)]);
var inst_48944 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48945 = (new cljs.core.PersistentArrayMap(null,2,inst_48944,null));
var inst_48946 = (new cljs.core.PersistentHashSet(null,inst_48945,null));
var inst_48947 = figwheel.client.focus_msgs.call(null,inst_48946,inst_48942);
var inst_48948 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48947);
var inst_48949 = cljs.core.first.call(null,inst_48947);
var inst_48950 = figwheel.client.autoload_QMARK_.call(null);
var state_48989__$1 = (function (){var statearr_49004 = state_48989;
(statearr_49004[(9)] = inst_48948);

(statearr_49004[(8)] = inst_48949);

return statearr_49004;
})();
if(cljs.core.truth_(inst_48950)){
var statearr_49005_49032 = state_48989__$1;
(statearr_49005_49032[(1)] = (8));

} else {
var statearr_49006_49033 = state_48989__$1;
(statearr_49006_49033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (14))){
var inst_48960 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_49007_49034 = state_48989__$1;
(statearr_49007_49034[(2)] = inst_48960);

(statearr_49007_49034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (16))){
var state_48989__$1 = state_48989;
var statearr_49008_49035 = state_48989__$1;
(statearr_49008_49035[(2)] = null);

(statearr_49008_49035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (10))){
var inst_48981 = (state_48989[(2)]);
var state_48989__$1 = (function (){var statearr_49009 = state_48989;
(statearr_49009[(11)] = inst_48981);

return statearr_49009;
})();
var statearr_49010_49036 = state_48989__$1;
(statearr_49010_49036[(2)] = null);

(statearr_49010_49036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (8))){
var inst_48948 = (state_48989[(9)]);
var inst_48952 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48948,opts);
var state_48989__$1 = state_48989;
if(cljs.core.truth_(inst_48952)){
var statearr_49011_49037 = state_48989__$1;
(statearr_49011_49037[(1)] = (11));

} else {
var statearr_49012_49038 = state_48989__$1;
(statearr_49012_49038[(1)] = (12));

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
});})(c__35841__auto___49020,ch))
;
return ((function (switch__35729__auto__,c__35841__auto___49020,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35730__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35730__auto____0 = (function (){
var statearr_49016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49016[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35730__auto__);

(statearr_49016[(1)] = (1));

return statearr_49016;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35730__auto____1 = (function (state_48989){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_48989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e49017){if((e49017 instanceof Object)){
var ex__35733__auto__ = e49017;
var statearr_49018_49039 = state_48989;
(statearr_49018_49039[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49040 = state_48989;
state_48989 = G__49040;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35730__auto__ = function(state_48989){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35730__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35730__auto____1.call(this,state_48989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35730__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35730__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___49020,ch))
})();
var state__35843__auto__ = (function (){var statearr_49019 = f__35842__auto__.call(null);
(statearr_49019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___49020);

return statearr_49019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___49020,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49041_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49041_SHARP_));
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
var base_path_49044 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49044){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49043){if((e49043 instanceof Error)){
var e = e49043;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49044], null));
} else {
var e = e49043;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49044))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49045){
var map__49054 = p__49045;
var map__49054__$1 = ((((!((map__49054 == null)))?((((map__49054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49054):map__49054);
var opts = map__49054__$1;
var build_id = cljs.core.get.call(null,map__49054__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49054,map__49054__$1,opts,build_id){
return (function (p__49056){
var vec__49057 = p__49056;
var seq__49058 = cljs.core.seq.call(null,vec__49057);
var first__49059 = cljs.core.first.call(null,seq__49058);
var seq__49058__$1 = cljs.core.next.call(null,seq__49058);
var map__49060 = first__49059;
var map__49060__$1 = ((((!((map__49060 == null)))?((((map__49060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49060):map__49060);
var msg = map__49060__$1;
var msg_name = cljs.core.get.call(null,map__49060__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49058__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49057,seq__49058,first__49059,seq__49058__$1,map__49060,map__49060__$1,msg,msg_name,_,map__49054,map__49054__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49057,seq__49058,first__49059,seq__49058__$1,map__49060,map__49060__$1,msg,msg_name,_,map__49054,map__49054__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49054,map__49054__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49068){
var vec__49069 = p__49068;
var seq__49070 = cljs.core.seq.call(null,vec__49069);
var first__49071 = cljs.core.first.call(null,seq__49070);
var seq__49070__$1 = cljs.core.next.call(null,seq__49070);
var map__49072 = first__49071;
var map__49072__$1 = ((((!((map__49072 == null)))?((((map__49072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49072):map__49072);
var msg = map__49072__$1;
var msg_name = cljs.core.get.call(null,map__49072__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49070__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49074){
var map__49086 = p__49074;
var map__49086__$1 = ((((!((map__49086 == null)))?((((map__49086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49086):map__49086);
var on_compile_warning = cljs.core.get.call(null,map__49086__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49086__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49086,map__49086__$1,on_compile_warning,on_compile_fail){
return (function (p__49088){
var vec__49089 = p__49088;
var seq__49090 = cljs.core.seq.call(null,vec__49089);
var first__49091 = cljs.core.first.call(null,seq__49090);
var seq__49090__$1 = cljs.core.next.call(null,seq__49090);
var map__49092 = first__49091;
var map__49092__$1 = ((((!((map__49092 == null)))?((((map__49092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49092):map__49092);
var msg = map__49092__$1;
var msg_name = cljs.core.get.call(null,map__49092__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49090__$1;
var pred__49094 = cljs.core._EQ_;
var expr__49095 = msg_name;
if(cljs.core.truth_(pred__49094.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49095))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49094.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49095))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49086,map__49086__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto__,msg_hist,msg_names,msg){
return (function (state_49303){
var state_val_49304 = (state_49303[(1)]);
if((state_val_49304 === (7))){
var inst_49231 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49231)){
var statearr_49305_49351 = state_49303__$1;
(statearr_49305_49351[(1)] = (8));

} else {
var statearr_49306_49352 = state_49303__$1;
(statearr_49306_49352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (20))){
var inst_49297 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49307_49353 = state_49303__$1;
(statearr_49307_49353[(2)] = inst_49297);

(statearr_49307_49353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (27))){
var inst_49293 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49308_49354 = state_49303__$1;
(statearr_49308_49354[(2)] = inst_49293);

(statearr_49308_49354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (1))){
var inst_49224 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49224)){
var statearr_49309_49355 = state_49303__$1;
(statearr_49309_49355[(1)] = (2));

} else {
var statearr_49310_49356 = state_49303__$1;
(statearr_49310_49356[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (24))){
var inst_49295 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49311_49357 = state_49303__$1;
(statearr_49311_49357[(2)] = inst_49295);

(statearr_49311_49357[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (4))){
var inst_49301 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49303__$1,inst_49301);
} else {
if((state_val_49304 === (15))){
var inst_49299 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49312_49358 = state_49303__$1;
(statearr_49312_49358[(2)] = inst_49299);

(statearr_49312_49358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (21))){
var inst_49258 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49313_49359 = state_49303__$1;
(statearr_49313_49359[(2)] = inst_49258);

(statearr_49313_49359[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (31))){
var inst_49282 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49282)){
var statearr_49314_49360 = state_49303__$1;
(statearr_49314_49360[(1)] = (34));

} else {
var statearr_49315_49361 = state_49303__$1;
(statearr_49315_49361[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (32))){
var inst_49291 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49316_49362 = state_49303__$1;
(statearr_49316_49362[(2)] = inst_49291);

(statearr_49316_49362[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (33))){
var inst_49280 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49317_49363 = state_49303__$1;
(statearr_49317_49363[(2)] = inst_49280);

(statearr_49317_49363[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (13))){
var inst_49245 = figwheel.client.heads_up.clear.call(null);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(16),inst_49245);
} else {
if((state_val_49304 === (22))){
var inst_49262 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49263 = figwheel.client.heads_up.append_warning_message.call(null,inst_49262);
var state_49303__$1 = state_49303;
var statearr_49318_49364 = state_49303__$1;
(statearr_49318_49364[(2)] = inst_49263);

(statearr_49318_49364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (36))){
var inst_49289 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49319_49365 = state_49303__$1;
(statearr_49319_49365[(2)] = inst_49289);

(statearr_49319_49365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (29))){
var inst_49273 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49320_49366 = state_49303__$1;
(statearr_49320_49366[(2)] = inst_49273);

(statearr_49320_49366[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (6))){
var inst_49226 = (state_49303[(7)]);
var state_49303__$1 = state_49303;
var statearr_49321_49367 = state_49303__$1;
(statearr_49321_49367[(2)] = inst_49226);

(statearr_49321_49367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (28))){
var inst_49269 = (state_49303[(2)]);
var inst_49270 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49271 = figwheel.client.heads_up.display_warning.call(null,inst_49270);
var state_49303__$1 = (function (){var statearr_49322 = state_49303;
(statearr_49322[(8)] = inst_49269);

return statearr_49322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(29),inst_49271);
} else {
if((state_val_49304 === (25))){
var inst_49267 = figwheel.client.heads_up.clear.call(null);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(28),inst_49267);
} else {
if((state_val_49304 === (34))){
var inst_49284 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(37),inst_49284);
} else {
if((state_val_49304 === (17))){
var inst_49251 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49323_49368 = state_49303__$1;
(statearr_49323_49368[(2)] = inst_49251);

(statearr_49323_49368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (3))){
var inst_49243 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49243)){
var statearr_49324_49369 = state_49303__$1;
(statearr_49324_49369[(1)] = (13));

} else {
var statearr_49325_49370 = state_49303__$1;
(statearr_49325_49370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (12))){
var inst_49239 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49326_49371 = state_49303__$1;
(statearr_49326_49371[(2)] = inst_49239);

(statearr_49326_49371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (2))){
var inst_49226 = (state_49303[(7)]);
var inst_49226__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49303__$1 = (function (){var statearr_49327 = state_49303;
(statearr_49327[(7)] = inst_49226__$1);

return statearr_49327;
})();
if(cljs.core.truth_(inst_49226__$1)){
var statearr_49328_49372 = state_49303__$1;
(statearr_49328_49372[(1)] = (5));

} else {
var statearr_49329_49373 = state_49303__$1;
(statearr_49329_49373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (23))){
var inst_49265 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49265)){
var statearr_49330_49374 = state_49303__$1;
(statearr_49330_49374[(1)] = (25));

} else {
var statearr_49331_49375 = state_49303__$1;
(statearr_49331_49375[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (35))){
var state_49303__$1 = state_49303;
var statearr_49332_49376 = state_49303__$1;
(statearr_49332_49376[(2)] = null);

(statearr_49332_49376[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (19))){
var inst_49260 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49260)){
var statearr_49333_49377 = state_49303__$1;
(statearr_49333_49377[(1)] = (22));

} else {
var statearr_49334_49378 = state_49303__$1;
(statearr_49334_49378[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (11))){
var inst_49235 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49335_49379 = state_49303__$1;
(statearr_49335_49379[(2)] = inst_49235);

(statearr_49335_49379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (9))){
var inst_49237 = figwheel.client.heads_up.clear.call(null);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(12),inst_49237);
} else {
if((state_val_49304 === (5))){
var inst_49228 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49303__$1 = state_49303;
var statearr_49336_49380 = state_49303__$1;
(statearr_49336_49380[(2)] = inst_49228);

(statearr_49336_49380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (14))){
var inst_49253 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49253)){
var statearr_49337_49381 = state_49303__$1;
(statearr_49337_49381[(1)] = (18));

} else {
var statearr_49338_49382 = state_49303__$1;
(statearr_49338_49382[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (26))){
var inst_49275 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49275)){
var statearr_49339_49383 = state_49303__$1;
(statearr_49339_49383[(1)] = (30));

} else {
var statearr_49340_49384 = state_49303__$1;
(statearr_49340_49384[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (16))){
var inst_49247 = (state_49303[(2)]);
var inst_49248 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49249 = figwheel.client.heads_up.display_exception.call(null,inst_49248);
var state_49303__$1 = (function (){var statearr_49341 = state_49303;
(statearr_49341[(9)] = inst_49247);

return statearr_49341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(17),inst_49249);
} else {
if((state_val_49304 === (30))){
var inst_49277 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49278 = figwheel.client.heads_up.display_warning.call(null,inst_49277);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(33),inst_49278);
} else {
if((state_val_49304 === (10))){
var inst_49241 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49342_49385 = state_49303__$1;
(statearr_49342_49385[(2)] = inst_49241);

(statearr_49342_49385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (18))){
var inst_49255 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49256 = figwheel.client.heads_up.display_exception.call(null,inst_49255);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(21),inst_49256);
} else {
if((state_val_49304 === (37))){
var inst_49286 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49343_49386 = state_49303__$1;
(statearr_49343_49386[(2)] = inst_49286);

(statearr_49343_49386[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (8))){
var inst_49233 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(11),inst_49233);
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
});})(c__35841__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35729__auto__,c__35841__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto____0 = (function (){
var statearr_49347 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49347[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto__);

(statearr_49347[(1)] = (1));

return statearr_49347;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto____1 = (function (state_49303){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_49303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e49348){if((e49348 instanceof Object)){
var ex__35733__auto__ = e49348;
var statearr_49349_49387 = state_49303;
(statearr_49349_49387[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49388 = state_49303;
state_49303 = G__49388;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto__ = function(state_49303){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto____1.call(this,state_49303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto__,msg_hist,msg_names,msg))
})();
var state__35843__auto__ = (function (){var statearr_49350 = f__35842__auto__.call(null);
(statearr_49350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto__);

return statearr_49350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto__,msg_hist,msg_names,msg))
);

return c__35841__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35841__auto___49451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___49451,ch){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___49451,ch){
return (function (state_49434){
var state_val_49435 = (state_49434[(1)]);
if((state_val_49435 === (1))){
var state_49434__$1 = state_49434;
var statearr_49436_49452 = state_49434__$1;
(statearr_49436_49452[(2)] = null);

(statearr_49436_49452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (2))){
var state_49434__$1 = state_49434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49434__$1,(4),ch);
} else {
if((state_val_49435 === (3))){
var inst_49432 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49434__$1,inst_49432);
} else {
if((state_val_49435 === (4))){
var inst_49422 = (state_49434[(7)]);
var inst_49422__$1 = (state_49434[(2)]);
var state_49434__$1 = (function (){var statearr_49437 = state_49434;
(statearr_49437[(7)] = inst_49422__$1);

return statearr_49437;
})();
if(cljs.core.truth_(inst_49422__$1)){
var statearr_49438_49453 = state_49434__$1;
(statearr_49438_49453[(1)] = (5));

} else {
var statearr_49439_49454 = state_49434__$1;
(statearr_49439_49454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (5))){
var inst_49422 = (state_49434[(7)]);
var inst_49424 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49422);
var state_49434__$1 = state_49434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49434__$1,(8),inst_49424);
} else {
if((state_val_49435 === (6))){
var state_49434__$1 = state_49434;
var statearr_49440_49455 = state_49434__$1;
(statearr_49440_49455[(2)] = null);

(statearr_49440_49455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (7))){
var inst_49430 = (state_49434[(2)]);
var state_49434__$1 = state_49434;
var statearr_49441_49456 = state_49434__$1;
(statearr_49441_49456[(2)] = inst_49430);

(statearr_49441_49456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49435 === (8))){
var inst_49426 = (state_49434[(2)]);
var state_49434__$1 = (function (){var statearr_49442 = state_49434;
(statearr_49442[(8)] = inst_49426);

return statearr_49442;
})();
var statearr_49443_49457 = state_49434__$1;
(statearr_49443_49457[(2)] = null);

(statearr_49443_49457[(1)] = (2));


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
});})(c__35841__auto___49451,ch))
;
return ((function (switch__35729__auto__,c__35841__auto___49451,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35730__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35730__auto____0 = (function (){
var statearr_49447 = [null,null,null,null,null,null,null,null,null];
(statearr_49447[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35730__auto__);

(statearr_49447[(1)] = (1));

return statearr_49447;
});
var figwheel$client$heads_up_plugin_$_state_machine__35730__auto____1 = (function (state_49434){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_49434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e49448){if((e49448 instanceof Object)){
var ex__35733__auto__ = e49448;
var statearr_49449_49458 = state_49434;
(statearr_49449_49458[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49459 = state_49434;
state_49434 = G__49459;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35730__auto__ = function(state_49434){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35730__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35730__auto____1.call(this,state_49434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35730__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35730__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___49451,ch))
})();
var state__35843__auto__ = (function (){var statearr_49450 = f__35842__auto__.call(null);
(statearr_49450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___49451);

return statearr_49450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___49451,ch))
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
var c__35841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto__){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto__){
return (function (state_49480){
var state_val_49481 = (state_49480[(1)]);
if((state_val_49481 === (1))){
var inst_49475 = cljs.core.async.timeout.call(null,(3000));
var state_49480__$1 = state_49480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49480__$1,(2),inst_49475);
} else {
if((state_val_49481 === (2))){
var inst_49477 = (state_49480[(2)]);
var inst_49478 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49480__$1 = (function (){var statearr_49482 = state_49480;
(statearr_49482[(7)] = inst_49477);

return statearr_49482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49480__$1,inst_49478);
} else {
return null;
}
}
});})(c__35841__auto__))
;
return ((function (switch__35729__auto__,c__35841__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35730__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35730__auto____0 = (function (){
var statearr_49486 = [null,null,null,null,null,null,null,null];
(statearr_49486[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35730__auto__);

(statearr_49486[(1)] = (1));

return statearr_49486;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35730__auto____1 = (function (state_49480){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_49480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e49487){if((e49487 instanceof Object)){
var ex__35733__auto__ = e49487;
var statearr_49488_49490 = state_49480;
(statearr_49488_49490[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49491 = state_49480;
state_49480 = G__49491;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35730__auto__ = function(state_49480){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35730__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35730__auto____1.call(this,state_49480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35730__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35730__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto__))
})();
var state__35843__auto__ = (function (){var statearr_49489 = f__35842__auto__.call(null);
(statearr_49489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto__);

return statearr_49489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto__))
);

return c__35841__auto__;
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
var c__35841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto__,figwheel_version,temp__4657__auto__){
return (function (state_49514){
var state_val_49515 = (state_49514[(1)]);
if((state_val_49515 === (1))){
var inst_49508 = cljs.core.async.timeout.call(null,(2000));
var state_49514__$1 = state_49514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49514__$1,(2),inst_49508);
} else {
if((state_val_49515 === (2))){
var inst_49510 = (state_49514[(2)]);
var inst_49511 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_49512 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49511);
var state_49514__$1 = (function (){var statearr_49516 = state_49514;
(statearr_49516[(7)] = inst_49510);

return statearr_49516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49514__$1,inst_49512);
} else {
return null;
}
}
});})(c__35841__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__35729__auto__,c__35841__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto____0 = (function (){
var statearr_49520 = [null,null,null,null,null,null,null,null];
(statearr_49520[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto__);

(statearr_49520[(1)] = (1));

return statearr_49520;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto____1 = (function (state_49514){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_49514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e49521){if((e49521 instanceof Object)){
var ex__35733__auto__ = e49521;
var statearr_49522_49524 = state_49514;
(statearr_49522_49524[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49525 = state_49514;
state_49514 = G__49525;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto__ = function(state_49514){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto____1.call(this,state_49514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto__,figwheel_version,temp__4657__auto__))
})();
var state__35843__auto__ = (function (){var statearr_49523 = f__35842__auto__.call(null);
(statearr_49523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto__);

return statearr_49523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto__,figwheel_version,temp__4657__auto__))
);

return c__35841__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49526){
var map__49530 = p__49526;
var map__49530__$1 = ((((!((map__49530 == null)))?((((map__49530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49530):map__49530);
var file = cljs.core.get.call(null,map__49530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49530__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49530__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49532 = "";
var G__49532__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__49532),cljs.core.str("file "),cljs.core.str(file)].join(''):G__49532);
var G__49532__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__49532__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__49532__$1);
if(cljs.core.truth_((function (){var and__30849__auto__ = line;
if(cljs.core.truth_(and__30849__auto__)){
return column;
} else {
return and__30849__auto__;
}
})())){
return [cljs.core.str(G__49532__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__49532__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49533){
var map__49540 = p__49533;
var map__49540__$1 = ((((!((map__49540 == null)))?((((map__49540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49540):map__49540);
var ed = map__49540__$1;
var formatted_exception = cljs.core.get.call(null,map__49540__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49540__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49540__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49542_49546 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49543_49547 = null;
var count__49544_49548 = (0);
var i__49545_49549 = (0);
while(true){
if((i__49545_49549 < count__49544_49548)){
var msg_49550 = cljs.core._nth.call(null,chunk__49543_49547,i__49545_49549);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49550);

var G__49551 = seq__49542_49546;
var G__49552 = chunk__49543_49547;
var G__49553 = count__49544_49548;
var G__49554 = (i__49545_49549 + (1));
seq__49542_49546 = G__49551;
chunk__49543_49547 = G__49552;
count__49544_49548 = G__49553;
i__49545_49549 = G__49554;
continue;
} else {
var temp__4657__auto___49555 = cljs.core.seq.call(null,seq__49542_49546);
if(temp__4657__auto___49555){
var seq__49542_49556__$1 = temp__4657__auto___49555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49542_49556__$1)){
var c__31672__auto___49557 = cljs.core.chunk_first.call(null,seq__49542_49556__$1);
var G__49558 = cljs.core.chunk_rest.call(null,seq__49542_49556__$1);
var G__49559 = c__31672__auto___49557;
var G__49560 = cljs.core.count.call(null,c__31672__auto___49557);
var G__49561 = (0);
seq__49542_49546 = G__49558;
chunk__49543_49547 = G__49559;
count__49544_49548 = G__49560;
i__49545_49549 = G__49561;
continue;
} else {
var msg_49562 = cljs.core.first.call(null,seq__49542_49556__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49562);

var G__49563 = cljs.core.next.call(null,seq__49542_49556__$1);
var G__49564 = null;
var G__49565 = (0);
var G__49566 = (0);
seq__49542_49546 = G__49563;
chunk__49543_49547 = G__49564;
count__49544_49548 = G__49565;
i__49545_49549 = G__49566;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49567){
var map__49570 = p__49567;
var map__49570__$1 = ((((!((map__49570 == null)))?((((map__49570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49570):map__49570);
var w = map__49570__$1;
var message = cljs.core.get.call(null,map__49570__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__30849__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30849__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30849__auto__;
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
var seq__49582 = cljs.core.seq.call(null,plugins);
var chunk__49583 = null;
var count__49584 = (0);
var i__49585 = (0);
while(true){
if((i__49585 < count__49584)){
var vec__49586 = cljs.core._nth.call(null,chunk__49583,i__49585);
var k = cljs.core.nth.call(null,vec__49586,(0),null);
var plugin = cljs.core.nth.call(null,vec__49586,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49592 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49582,chunk__49583,count__49584,i__49585,pl_49592,vec__49586,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49592.call(null,msg_hist);
});})(seq__49582,chunk__49583,count__49584,i__49585,pl_49592,vec__49586,k,plugin))
);
} else {
}

var G__49593 = seq__49582;
var G__49594 = chunk__49583;
var G__49595 = count__49584;
var G__49596 = (i__49585 + (1));
seq__49582 = G__49593;
chunk__49583 = G__49594;
count__49584 = G__49595;
i__49585 = G__49596;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49582);
if(temp__4657__auto__){
var seq__49582__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49582__$1)){
var c__31672__auto__ = cljs.core.chunk_first.call(null,seq__49582__$1);
var G__49597 = cljs.core.chunk_rest.call(null,seq__49582__$1);
var G__49598 = c__31672__auto__;
var G__49599 = cljs.core.count.call(null,c__31672__auto__);
var G__49600 = (0);
seq__49582 = G__49597;
chunk__49583 = G__49598;
count__49584 = G__49599;
i__49585 = G__49600;
continue;
} else {
var vec__49589 = cljs.core.first.call(null,seq__49582__$1);
var k = cljs.core.nth.call(null,vec__49589,(0),null);
var plugin = cljs.core.nth.call(null,vec__49589,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49601 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49582,chunk__49583,count__49584,i__49585,pl_49601,vec__49589,k,plugin,seq__49582__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49601.call(null,msg_hist);
});})(seq__49582,chunk__49583,count__49584,i__49585,pl_49601,vec__49589,k,plugin,seq__49582__$1,temp__4657__auto__))
);
} else {
}

var G__49602 = cljs.core.next.call(null,seq__49582__$1);
var G__49603 = null;
var G__49604 = (0);
var G__49605 = (0);
seq__49582 = G__49602;
chunk__49583 = G__49603;
count__49584 = G__49604;
i__49585 = G__49605;
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
var args49606 = [];
var len__31936__auto___49613 = arguments.length;
var i__31937__auto___49614 = (0);
while(true){
if((i__31937__auto___49614 < len__31936__auto___49613)){
args49606.push((arguments[i__31937__auto___49614]));

var G__49615 = (i__31937__auto___49614 + (1));
i__31937__auto___49614 = G__49615;
continue;
} else {
}
break;
}

var G__49608 = args49606.length;
switch (G__49608) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49606.length)].join('')));

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

var seq__49609_49617 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49610_49618 = null;
var count__49611_49619 = (0);
var i__49612_49620 = (0);
while(true){
if((i__49612_49620 < count__49611_49619)){
var msg_49621 = cljs.core._nth.call(null,chunk__49610_49618,i__49612_49620);
figwheel.client.socket.handle_incoming_message.call(null,msg_49621);

var G__49622 = seq__49609_49617;
var G__49623 = chunk__49610_49618;
var G__49624 = count__49611_49619;
var G__49625 = (i__49612_49620 + (1));
seq__49609_49617 = G__49622;
chunk__49610_49618 = G__49623;
count__49611_49619 = G__49624;
i__49612_49620 = G__49625;
continue;
} else {
var temp__4657__auto___49626 = cljs.core.seq.call(null,seq__49609_49617);
if(temp__4657__auto___49626){
var seq__49609_49627__$1 = temp__4657__auto___49626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49609_49627__$1)){
var c__31672__auto___49628 = cljs.core.chunk_first.call(null,seq__49609_49627__$1);
var G__49629 = cljs.core.chunk_rest.call(null,seq__49609_49627__$1);
var G__49630 = c__31672__auto___49628;
var G__49631 = cljs.core.count.call(null,c__31672__auto___49628);
var G__49632 = (0);
seq__49609_49617 = G__49629;
chunk__49610_49618 = G__49630;
count__49611_49619 = G__49631;
i__49612_49620 = G__49632;
continue;
} else {
var msg_49633 = cljs.core.first.call(null,seq__49609_49627__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49633);

var G__49634 = cljs.core.next.call(null,seq__49609_49627__$1);
var G__49635 = null;
var G__49636 = (0);
var G__49637 = (0);
seq__49609_49617 = G__49634;
chunk__49610_49618 = G__49635;
count__49611_49619 = G__49636;
i__49612_49620 = G__49637;
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
var args__31943__auto__ = [];
var len__31936__auto___49642 = arguments.length;
var i__31937__auto___49643 = (0);
while(true){
if((i__31937__auto___49643 < len__31936__auto___49642)){
args__31943__auto__.push((arguments[i__31937__auto___49643]));

var G__49644 = (i__31937__auto___49643 + (1));
i__31937__auto___49643 = G__49644;
continue;
} else {
}
break;
}

var argseq__31944__auto__ = ((((0) < args__31943__auto__.length))?(new cljs.core.IndexedSeq(args__31943__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31944__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49639){
var map__49640 = p__49639;
var map__49640__$1 = ((((!((map__49640 == null)))?((((map__49640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49640):map__49640);
var opts = map__49640__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49638){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49638));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49646){if((e49646 instanceof Error)){
var e = e49646;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49646;

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
return (function (p__49650){
var map__49651 = p__49650;
var map__49651__$1 = ((((!((map__49651 == null)))?((((map__49651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49651):map__49651);
var msg_name = cljs.core.get.call(null,map__49651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471840479633