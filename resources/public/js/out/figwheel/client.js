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
var args48782 = [];
var len__31935__auto___48785 = arguments.length;
var i__31936__auto___48786 = (0);
while(true){
if((i__31936__auto___48786 < len__31935__auto___48785)){
args48782.push((arguments[i__31936__auto___48786]));

var G__48787 = (i__31936__auto___48786 + (1));
i__31936__auto___48786 = G__48787;
continue;
} else {
}
break;
}

var G__48784 = args48782.length;
switch (G__48784) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48782.length)].join('')));

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
var args__31942__auto__ = [];
var len__31935__auto___48790 = arguments.length;
var i__31936__auto___48791 = (0);
while(true){
if((i__31936__auto___48791 < len__31935__auto___48790)){
args__31942__auto__.push((arguments[i__31936__auto___48791]));

var G__48792 = (i__31936__auto___48791 + (1));
i__31936__auto___48791 = G__48792;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((0) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31943__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48789){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48789));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31942__auto__ = [];
var len__31935__auto___48794 = arguments.length;
var i__31936__auto___48795 = (0);
while(true){
if((i__31936__auto___48795 < len__31935__auto___48794)){
args__31942__auto__.push((arguments[i__31936__auto___48795]));

var G__48796 = (i__31936__auto___48795 + (1));
i__31936__auto___48795 = G__48796;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((0) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31943__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48793){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48793));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__48797 = cljs.core._EQ_;
var expr__48798 = (function (){var or__30860__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e48801){if((e48801 instanceof Error)){
var e = e48801;
return false;
} else {
throw e48801;

}
}})();
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__48797.call(null,"true",expr__48798))){
return true;
} else {
if(cljs.core.truth_(pred__48797.call(null,"false",expr__48798))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48798)].join('')));
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
}catch (e48803){if((e48803 instanceof Error)){
var e = e48803;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e48803;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48804){
var map__48807 = p__48804;
var map__48807__$1 = ((((!((map__48807 == null)))?((((map__48807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48807):map__48807);
var message = cljs.core.get.call(null,map__48807__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48807__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30860__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30848__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30848__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30848__auto__;
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
var c__35839__auto___48969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___48969,ch){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___48969,ch){
return (function (state_48938){
var state_val_48939 = (state_48938[(1)]);
if((state_val_48939 === (7))){
var inst_48934 = (state_48938[(2)]);
var state_48938__$1 = state_48938;
var statearr_48940_48970 = state_48938__$1;
(statearr_48940_48970[(2)] = inst_48934);

(statearr_48940_48970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (1))){
var state_48938__$1 = state_48938;
var statearr_48941_48971 = state_48938__$1;
(statearr_48941_48971[(2)] = null);

(statearr_48941_48971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (4))){
var inst_48891 = (state_48938[(7)]);
var inst_48891__$1 = (state_48938[(2)]);
var state_48938__$1 = (function (){var statearr_48942 = state_48938;
(statearr_48942[(7)] = inst_48891__$1);

return statearr_48942;
})();
if(cljs.core.truth_(inst_48891__$1)){
var statearr_48943_48972 = state_48938__$1;
(statearr_48943_48972[(1)] = (5));

} else {
var statearr_48944_48973 = state_48938__$1;
(statearr_48944_48973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (15))){
var inst_48898 = (state_48938[(8)]);
var inst_48913 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48898);
var inst_48914 = cljs.core.first.call(null,inst_48913);
var inst_48915 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48914);
var inst_48916 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_48915)].join('');
var inst_48917 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48916);
var state_48938__$1 = state_48938;
var statearr_48945_48974 = state_48938__$1;
(statearr_48945_48974[(2)] = inst_48917);

(statearr_48945_48974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (13))){
var inst_48922 = (state_48938[(2)]);
var state_48938__$1 = state_48938;
var statearr_48946_48975 = state_48938__$1;
(statearr_48946_48975[(2)] = inst_48922);

(statearr_48946_48975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (6))){
var state_48938__$1 = state_48938;
var statearr_48947_48976 = state_48938__$1;
(statearr_48947_48976[(2)] = null);

(statearr_48947_48976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (17))){
var inst_48920 = (state_48938[(2)]);
var state_48938__$1 = state_48938;
var statearr_48948_48977 = state_48938__$1;
(statearr_48948_48977[(2)] = inst_48920);

(statearr_48948_48977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (3))){
var inst_48936 = (state_48938[(2)]);
var state_48938__$1 = state_48938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48938__$1,inst_48936);
} else {
if((state_val_48939 === (12))){
var inst_48897 = (state_48938[(9)]);
var inst_48911 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48897,opts);
var state_48938__$1 = state_48938;
if(cljs.core.truth_(inst_48911)){
var statearr_48949_48978 = state_48938__$1;
(statearr_48949_48978[(1)] = (15));

} else {
var statearr_48950_48979 = state_48938__$1;
(statearr_48950_48979[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (2))){
var state_48938__$1 = state_48938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48938__$1,(4),ch);
} else {
if((state_val_48939 === (11))){
var inst_48898 = (state_48938[(8)]);
var inst_48903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48904 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48898);
var inst_48905 = cljs.core.async.timeout.call(null,(1000));
var inst_48906 = [inst_48904,inst_48905];
var inst_48907 = (new cljs.core.PersistentVector(null,2,(5),inst_48903,inst_48906,null));
var state_48938__$1 = state_48938;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48938__$1,(14),inst_48907);
} else {
if((state_val_48939 === (9))){
var inst_48898 = (state_48938[(8)]);
var inst_48924 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48925 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48898);
var inst_48926 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48925);
var inst_48927 = [cljs.core.str("Not loading: "),cljs.core.str(inst_48926)].join('');
var inst_48928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48927);
var state_48938__$1 = (function (){var statearr_48951 = state_48938;
(statearr_48951[(10)] = inst_48924);

return statearr_48951;
})();
var statearr_48952_48980 = state_48938__$1;
(statearr_48952_48980[(2)] = inst_48928);

(statearr_48952_48980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (5))){
var inst_48891 = (state_48938[(7)]);
var inst_48893 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48894 = (new cljs.core.PersistentArrayMap(null,2,inst_48893,null));
var inst_48895 = (new cljs.core.PersistentHashSet(null,inst_48894,null));
var inst_48896 = figwheel.client.focus_msgs.call(null,inst_48895,inst_48891);
var inst_48897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48896);
var inst_48898 = cljs.core.first.call(null,inst_48896);
var inst_48899 = figwheel.client.autoload_QMARK_.call(null);
var state_48938__$1 = (function (){var statearr_48953 = state_48938;
(statearr_48953[(9)] = inst_48897);

(statearr_48953[(8)] = inst_48898);

return statearr_48953;
})();
if(cljs.core.truth_(inst_48899)){
var statearr_48954_48981 = state_48938__$1;
(statearr_48954_48981[(1)] = (8));

} else {
var statearr_48955_48982 = state_48938__$1;
(statearr_48955_48982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (14))){
var inst_48909 = (state_48938[(2)]);
var state_48938__$1 = state_48938;
var statearr_48956_48983 = state_48938__$1;
(statearr_48956_48983[(2)] = inst_48909);

(statearr_48956_48983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (16))){
var state_48938__$1 = state_48938;
var statearr_48957_48984 = state_48938__$1;
(statearr_48957_48984[(2)] = null);

(statearr_48957_48984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (10))){
var inst_48930 = (state_48938[(2)]);
var state_48938__$1 = (function (){var statearr_48958 = state_48938;
(statearr_48958[(11)] = inst_48930);

return statearr_48958;
})();
var statearr_48959_48985 = state_48938__$1;
(statearr_48959_48985[(2)] = null);

(statearr_48959_48985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48939 === (8))){
var inst_48897 = (state_48938[(9)]);
var inst_48901 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48897,opts);
var state_48938__$1 = state_48938;
if(cljs.core.truth_(inst_48901)){
var statearr_48960_48986 = state_48938__$1;
(statearr_48960_48986[(1)] = (11));

} else {
var statearr_48961_48987 = state_48938__$1;
(statearr_48961_48987[(1)] = (12));

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
});})(c__35839__auto___48969,ch))
;
return ((function (switch__35727__auto__,c__35839__auto___48969,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35728__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35728__auto____0 = (function (){
var statearr_48965 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48965[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35728__auto__);

(statearr_48965[(1)] = (1));

return statearr_48965;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35728__auto____1 = (function (state_48938){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_48938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e48966){if((e48966 instanceof Object)){
var ex__35731__auto__ = e48966;
var statearr_48967_48988 = state_48938;
(statearr_48967_48988[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48989 = state_48938;
state_48938 = G__48989;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35728__auto__ = function(state_48938){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35728__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35728__auto____1.call(this,state_48938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35728__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35728__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___48969,ch))
})();
var state__35841__auto__ = (function (){var statearr_48968 = f__35840__auto__.call(null);
(statearr_48968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___48969);

return statearr_48968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___48969,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48990_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48990_SHARP_));
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
var base_path_48993 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48993){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48992){if((e48992 instanceof Error)){
var e = e48992;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48993], null));
} else {
var e = e48992;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48993))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48994){
var map__49003 = p__48994;
var map__49003__$1 = ((((!((map__49003 == null)))?((((map__49003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49003):map__49003);
var opts = map__49003__$1;
var build_id = cljs.core.get.call(null,map__49003__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49003,map__49003__$1,opts,build_id){
return (function (p__49005){
var vec__49006 = p__49005;
var seq__49007 = cljs.core.seq.call(null,vec__49006);
var first__49008 = cljs.core.first.call(null,seq__49007);
var seq__49007__$1 = cljs.core.next.call(null,seq__49007);
var map__49009 = first__49008;
var map__49009__$1 = ((((!((map__49009 == null)))?((((map__49009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49009):map__49009);
var msg = map__49009__$1;
var msg_name = cljs.core.get.call(null,map__49009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49007__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49006,seq__49007,first__49008,seq__49007__$1,map__49009,map__49009__$1,msg,msg_name,_,map__49003,map__49003__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49006,seq__49007,first__49008,seq__49007__$1,map__49009,map__49009__$1,msg,msg_name,_,map__49003,map__49003__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49003,map__49003__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49017){
var vec__49018 = p__49017;
var seq__49019 = cljs.core.seq.call(null,vec__49018);
var first__49020 = cljs.core.first.call(null,seq__49019);
var seq__49019__$1 = cljs.core.next.call(null,seq__49019);
var map__49021 = first__49020;
var map__49021__$1 = ((((!((map__49021 == null)))?((((map__49021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49021):map__49021);
var msg = map__49021__$1;
var msg_name = cljs.core.get.call(null,map__49021__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49019__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49023){
var map__49035 = p__49023;
var map__49035__$1 = ((((!((map__49035 == null)))?((((map__49035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49035):map__49035);
var on_compile_warning = cljs.core.get.call(null,map__49035__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49035__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49035,map__49035__$1,on_compile_warning,on_compile_fail){
return (function (p__49037){
var vec__49038 = p__49037;
var seq__49039 = cljs.core.seq.call(null,vec__49038);
var first__49040 = cljs.core.first.call(null,seq__49039);
var seq__49039__$1 = cljs.core.next.call(null,seq__49039);
var map__49041 = first__49040;
var map__49041__$1 = ((((!((map__49041 == null)))?((((map__49041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49041):map__49041);
var msg = map__49041__$1;
var msg_name = cljs.core.get.call(null,map__49041__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49039__$1;
var pred__49043 = cljs.core._EQ_;
var expr__49044 = msg_name;
if(cljs.core.truth_(pred__49043.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49044))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49043.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49044))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49035,map__49035__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35839__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto__,msg_hist,msg_names,msg){
return (function (state_49252){
var state_val_49253 = (state_49252[(1)]);
if((state_val_49253 === (7))){
var inst_49180 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
if(cljs.core.truth_(inst_49180)){
var statearr_49254_49300 = state_49252__$1;
(statearr_49254_49300[(1)] = (8));

} else {
var statearr_49255_49301 = state_49252__$1;
(statearr_49255_49301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (20))){
var inst_49246 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49256_49302 = state_49252__$1;
(statearr_49256_49302[(2)] = inst_49246);

(statearr_49256_49302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (27))){
var inst_49242 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49257_49303 = state_49252__$1;
(statearr_49257_49303[(2)] = inst_49242);

(statearr_49257_49303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (1))){
var inst_49173 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49252__$1 = state_49252;
if(cljs.core.truth_(inst_49173)){
var statearr_49258_49304 = state_49252__$1;
(statearr_49258_49304[(1)] = (2));

} else {
var statearr_49259_49305 = state_49252__$1;
(statearr_49259_49305[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (24))){
var inst_49244 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49260_49306 = state_49252__$1;
(statearr_49260_49306[(2)] = inst_49244);

(statearr_49260_49306[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (4))){
var inst_49250 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49252__$1,inst_49250);
} else {
if((state_val_49253 === (15))){
var inst_49248 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49261_49307 = state_49252__$1;
(statearr_49261_49307[(2)] = inst_49248);

(statearr_49261_49307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (21))){
var inst_49207 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49262_49308 = state_49252__$1;
(statearr_49262_49308[(2)] = inst_49207);

(statearr_49262_49308[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (31))){
var inst_49231 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49252__$1 = state_49252;
if(cljs.core.truth_(inst_49231)){
var statearr_49263_49309 = state_49252__$1;
(statearr_49263_49309[(1)] = (34));

} else {
var statearr_49264_49310 = state_49252__$1;
(statearr_49264_49310[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (32))){
var inst_49240 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49265_49311 = state_49252__$1;
(statearr_49265_49311[(2)] = inst_49240);

(statearr_49265_49311[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (33))){
var inst_49229 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49266_49312 = state_49252__$1;
(statearr_49266_49312[(2)] = inst_49229);

(statearr_49266_49312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (13))){
var inst_49194 = figwheel.client.heads_up.clear.call(null);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49252__$1,(16),inst_49194);
} else {
if((state_val_49253 === (22))){
var inst_49211 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49212 = figwheel.client.heads_up.append_warning_message.call(null,inst_49211);
var state_49252__$1 = state_49252;
var statearr_49267_49313 = state_49252__$1;
(statearr_49267_49313[(2)] = inst_49212);

(statearr_49267_49313[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (36))){
var inst_49238 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49268_49314 = state_49252__$1;
(statearr_49268_49314[(2)] = inst_49238);

(statearr_49268_49314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (29))){
var inst_49222 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49269_49315 = state_49252__$1;
(statearr_49269_49315[(2)] = inst_49222);

(statearr_49269_49315[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (6))){
var inst_49175 = (state_49252[(7)]);
var state_49252__$1 = state_49252;
var statearr_49270_49316 = state_49252__$1;
(statearr_49270_49316[(2)] = inst_49175);

(statearr_49270_49316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (28))){
var inst_49218 = (state_49252[(2)]);
var inst_49219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49220 = figwheel.client.heads_up.display_warning.call(null,inst_49219);
var state_49252__$1 = (function (){var statearr_49271 = state_49252;
(statearr_49271[(8)] = inst_49218);

return statearr_49271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49252__$1,(29),inst_49220);
} else {
if((state_val_49253 === (25))){
var inst_49216 = figwheel.client.heads_up.clear.call(null);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49252__$1,(28),inst_49216);
} else {
if((state_val_49253 === (34))){
var inst_49233 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49252__$1,(37),inst_49233);
} else {
if((state_val_49253 === (17))){
var inst_49200 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49272_49317 = state_49252__$1;
(statearr_49272_49317[(2)] = inst_49200);

(statearr_49272_49317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (3))){
var inst_49192 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49252__$1 = state_49252;
if(cljs.core.truth_(inst_49192)){
var statearr_49273_49318 = state_49252__$1;
(statearr_49273_49318[(1)] = (13));

} else {
var statearr_49274_49319 = state_49252__$1;
(statearr_49274_49319[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (12))){
var inst_49188 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49275_49320 = state_49252__$1;
(statearr_49275_49320[(2)] = inst_49188);

(statearr_49275_49320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (2))){
var inst_49175 = (state_49252[(7)]);
var inst_49175__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49252__$1 = (function (){var statearr_49276 = state_49252;
(statearr_49276[(7)] = inst_49175__$1);

return statearr_49276;
})();
if(cljs.core.truth_(inst_49175__$1)){
var statearr_49277_49321 = state_49252__$1;
(statearr_49277_49321[(1)] = (5));

} else {
var statearr_49278_49322 = state_49252__$1;
(statearr_49278_49322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (23))){
var inst_49214 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49252__$1 = state_49252;
if(cljs.core.truth_(inst_49214)){
var statearr_49279_49323 = state_49252__$1;
(statearr_49279_49323[(1)] = (25));

} else {
var statearr_49280_49324 = state_49252__$1;
(statearr_49280_49324[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (35))){
var state_49252__$1 = state_49252;
var statearr_49281_49325 = state_49252__$1;
(statearr_49281_49325[(2)] = null);

(statearr_49281_49325[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (19))){
var inst_49209 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49252__$1 = state_49252;
if(cljs.core.truth_(inst_49209)){
var statearr_49282_49326 = state_49252__$1;
(statearr_49282_49326[(1)] = (22));

} else {
var statearr_49283_49327 = state_49252__$1;
(statearr_49283_49327[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (11))){
var inst_49184 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49284_49328 = state_49252__$1;
(statearr_49284_49328[(2)] = inst_49184);

(statearr_49284_49328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (9))){
var inst_49186 = figwheel.client.heads_up.clear.call(null);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49252__$1,(12),inst_49186);
} else {
if((state_val_49253 === (5))){
var inst_49177 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49252__$1 = state_49252;
var statearr_49285_49329 = state_49252__$1;
(statearr_49285_49329[(2)] = inst_49177);

(statearr_49285_49329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (14))){
var inst_49202 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49252__$1 = state_49252;
if(cljs.core.truth_(inst_49202)){
var statearr_49286_49330 = state_49252__$1;
(statearr_49286_49330[(1)] = (18));

} else {
var statearr_49287_49331 = state_49252__$1;
(statearr_49287_49331[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (26))){
var inst_49224 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49252__$1 = state_49252;
if(cljs.core.truth_(inst_49224)){
var statearr_49288_49332 = state_49252__$1;
(statearr_49288_49332[(1)] = (30));

} else {
var statearr_49289_49333 = state_49252__$1;
(statearr_49289_49333[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (16))){
var inst_49196 = (state_49252[(2)]);
var inst_49197 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49198 = figwheel.client.heads_up.display_exception.call(null,inst_49197);
var state_49252__$1 = (function (){var statearr_49290 = state_49252;
(statearr_49290[(9)] = inst_49196);

return statearr_49290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49252__$1,(17),inst_49198);
} else {
if((state_val_49253 === (30))){
var inst_49226 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49227 = figwheel.client.heads_up.display_warning.call(null,inst_49226);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49252__$1,(33),inst_49227);
} else {
if((state_val_49253 === (10))){
var inst_49190 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49291_49334 = state_49252__$1;
(statearr_49291_49334[(2)] = inst_49190);

(statearr_49291_49334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (18))){
var inst_49204 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49205 = figwheel.client.heads_up.display_exception.call(null,inst_49204);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49252__$1,(21),inst_49205);
} else {
if((state_val_49253 === (37))){
var inst_49235 = (state_49252[(2)]);
var state_49252__$1 = state_49252;
var statearr_49292_49335 = state_49252__$1;
(statearr_49292_49335[(2)] = inst_49235);

(statearr_49292_49335[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49253 === (8))){
var inst_49182 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49252__$1 = state_49252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49252__$1,(11),inst_49182);
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
});})(c__35839__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35727__auto__,c__35839__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto____0 = (function (){
var statearr_49296 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49296[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto__);

(statearr_49296[(1)] = (1));

return statearr_49296;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto____1 = (function (state_49252){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_49252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e49297){if((e49297 instanceof Object)){
var ex__35731__auto__ = e49297;
var statearr_49298_49336 = state_49252;
(statearr_49298_49336[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49337 = state_49252;
state_49252 = G__49337;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto__ = function(state_49252){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto____1.call(this,state_49252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto__,msg_hist,msg_names,msg))
})();
var state__35841__auto__ = (function (){var statearr_49299 = f__35840__auto__.call(null);
(statearr_49299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto__);

return statearr_49299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto__,msg_hist,msg_names,msg))
);

return c__35839__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35839__auto___49400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___49400,ch){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___49400,ch){
return (function (state_49383){
var state_val_49384 = (state_49383[(1)]);
if((state_val_49384 === (1))){
var state_49383__$1 = state_49383;
var statearr_49385_49401 = state_49383__$1;
(statearr_49385_49401[(2)] = null);

(statearr_49385_49401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (2))){
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49383__$1,(4),ch);
} else {
if((state_val_49384 === (3))){
var inst_49381 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49383__$1,inst_49381);
} else {
if((state_val_49384 === (4))){
var inst_49371 = (state_49383[(7)]);
var inst_49371__$1 = (state_49383[(2)]);
var state_49383__$1 = (function (){var statearr_49386 = state_49383;
(statearr_49386[(7)] = inst_49371__$1);

return statearr_49386;
})();
if(cljs.core.truth_(inst_49371__$1)){
var statearr_49387_49402 = state_49383__$1;
(statearr_49387_49402[(1)] = (5));

} else {
var statearr_49388_49403 = state_49383__$1;
(statearr_49388_49403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (5))){
var inst_49371 = (state_49383[(7)]);
var inst_49373 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49371);
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49383__$1,(8),inst_49373);
} else {
if((state_val_49384 === (6))){
var state_49383__$1 = state_49383;
var statearr_49389_49404 = state_49383__$1;
(statearr_49389_49404[(2)] = null);

(statearr_49389_49404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (7))){
var inst_49379 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49390_49405 = state_49383__$1;
(statearr_49390_49405[(2)] = inst_49379);

(statearr_49390_49405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (8))){
var inst_49375 = (state_49383[(2)]);
var state_49383__$1 = (function (){var statearr_49391 = state_49383;
(statearr_49391[(8)] = inst_49375);

return statearr_49391;
})();
var statearr_49392_49406 = state_49383__$1;
(statearr_49392_49406[(2)] = null);

(statearr_49392_49406[(1)] = (2));


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
});})(c__35839__auto___49400,ch))
;
return ((function (switch__35727__auto__,c__35839__auto___49400,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35728__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35728__auto____0 = (function (){
var statearr_49396 = [null,null,null,null,null,null,null,null,null];
(statearr_49396[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35728__auto__);

(statearr_49396[(1)] = (1));

return statearr_49396;
});
var figwheel$client$heads_up_plugin_$_state_machine__35728__auto____1 = (function (state_49383){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_49383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e49397){if((e49397 instanceof Object)){
var ex__35731__auto__ = e49397;
var statearr_49398_49407 = state_49383;
(statearr_49398_49407[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49408 = state_49383;
state_49383 = G__49408;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35728__auto__ = function(state_49383){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35728__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35728__auto____1.call(this,state_49383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35728__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35728__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___49400,ch))
})();
var state__35841__auto__ = (function (){var statearr_49399 = f__35840__auto__.call(null);
(statearr_49399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___49400);

return statearr_49399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___49400,ch))
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
var c__35839__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto__){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto__){
return (function (state_49429){
var state_val_49430 = (state_49429[(1)]);
if((state_val_49430 === (1))){
var inst_49424 = cljs.core.async.timeout.call(null,(3000));
var state_49429__$1 = state_49429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49429__$1,(2),inst_49424);
} else {
if((state_val_49430 === (2))){
var inst_49426 = (state_49429[(2)]);
var inst_49427 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49429__$1 = (function (){var statearr_49431 = state_49429;
(statearr_49431[(7)] = inst_49426);

return statearr_49431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49429__$1,inst_49427);
} else {
return null;
}
}
});})(c__35839__auto__))
;
return ((function (switch__35727__auto__,c__35839__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35728__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35728__auto____0 = (function (){
var statearr_49435 = [null,null,null,null,null,null,null,null];
(statearr_49435[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35728__auto__);

(statearr_49435[(1)] = (1));

return statearr_49435;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35728__auto____1 = (function (state_49429){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_49429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e49436){if((e49436 instanceof Object)){
var ex__35731__auto__ = e49436;
var statearr_49437_49439 = state_49429;
(statearr_49437_49439[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49440 = state_49429;
state_49429 = G__49440;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35728__auto__ = function(state_49429){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35728__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35728__auto____1.call(this,state_49429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35728__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35728__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto__))
})();
var state__35841__auto__ = (function (){var statearr_49438 = f__35840__auto__.call(null);
(statearr_49438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto__);

return statearr_49438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto__))
);

return c__35839__auto__;
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
var c__35839__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto__,figwheel_version,temp__4657__auto__){
return (function (state_49463){
var state_val_49464 = (state_49463[(1)]);
if((state_val_49464 === (1))){
var inst_49457 = cljs.core.async.timeout.call(null,(2000));
var state_49463__$1 = state_49463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49463__$1,(2),inst_49457);
} else {
if((state_val_49464 === (2))){
var inst_49459 = (state_49463[(2)]);
var inst_49460 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_49461 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49460);
var state_49463__$1 = (function (){var statearr_49465 = state_49463;
(statearr_49465[(7)] = inst_49459);

return statearr_49465;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49463__$1,inst_49461);
} else {
return null;
}
}
});})(c__35839__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__35727__auto__,c__35839__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto____0 = (function (){
var statearr_49469 = [null,null,null,null,null,null,null,null];
(statearr_49469[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto__);

(statearr_49469[(1)] = (1));

return statearr_49469;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto____1 = (function (state_49463){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_49463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e49470){if((e49470 instanceof Object)){
var ex__35731__auto__ = e49470;
var statearr_49471_49473 = state_49463;
(statearr_49471_49473[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49474 = state_49463;
state_49463 = G__49474;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto__ = function(state_49463){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto____1.call(this,state_49463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto__,figwheel_version,temp__4657__auto__))
})();
var state__35841__auto__ = (function (){var statearr_49472 = f__35840__auto__.call(null);
(statearr_49472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto__);

return statearr_49472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto__,figwheel_version,temp__4657__auto__))
);

return c__35839__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49475){
var map__49479 = p__49475;
var map__49479__$1 = ((((!((map__49479 == null)))?((((map__49479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49479):map__49479);
var file = cljs.core.get.call(null,map__49479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49479__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49479__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49481 = "";
var G__49481__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__49481),cljs.core.str("file "),cljs.core.str(file)].join(''):G__49481);
var G__49481__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__49481__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__49481__$1);
if(cljs.core.truth_((function (){var and__30848__auto__ = line;
if(cljs.core.truth_(and__30848__auto__)){
return column;
} else {
return and__30848__auto__;
}
})())){
return [cljs.core.str(G__49481__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__49481__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49482){
var map__49489 = p__49482;
var map__49489__$1 = ((((!((map__49489 == null)))?((((map__49489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49489):map__49489);
var ed = map__49489__$1;
var formatted_exception = cljs.core.get.call(null,map__49489__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49489__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49489__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49491_49495 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49492_49496 = null;
var count__49493_49497 = (0);
var i__49494_49498 = (0);
while(true){
if((i__49494_49498 < count__49493_49497)){
var msg_49499 = cljs.core._nth.call(null,chunk__49492_49496,i__49494_49498);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49499);

var G__49500 = seq__49491_49495;
var G__49501 = chunk__49492_49496;
var G__49502 = count__49493_49497;
var G__49503 = (i__49494_49498 + (1));
seq__49491_49495 = G__49500;
chunk__49492_49496 = G__49501;
count__49493_49497 = G__49502;
i__49494_49498 = G__49503;
continue;
} else {
var temp__4657__auto___49504 = cljs.core.seq.call(null,seq__49491_49495);
if(temp__4657__auto___49504){
var seq__49491_49505__$1 = temp__4657__auto___49504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49491_49505__$1)){
var c__31671__auto___49506 = cljs.core.chunk_first.call(null,seq__49491_49505__$1);
var G__49507 = cljs.core.chunk_rest.call(null,seq__49491_49505__$1);
var G__49508 = c__31671__auto___49506;
var G__49509 = cljs.core.count.call(null,c__31671__auto___49506);
var G__49510 = (0);
seq__49491_49495 = G__49507;
chunk__49492_49496 = G__49508;
count__49493_49497 = G__49509;
i__49494_49498 = G__49510;
continue;
} else {
var msg_49511 = cljs.core.first.call(null,seq__49491_49505__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49511);

var G__49512 = cljs.core.next.call(null,seq__49491_49505__$1);
var G__49513 = null;
var G__49514 = (0);
var G__49515 = (0);
seq__49491_49495 = G__49512;
chunk__49492_49496 = G__49513;
count__49493_49497 = G__49514;
i__49494_49498 = G__49515;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49516){
var map__49519 = p__49516;
var map__49519__$1 = ((((!((map__49519 == null)))?((((map__49519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49519):map__49519);
var w = map__49519__$1;
var message = cljs.core.get.call(null,map__49519__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__30848__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30848__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30848__auto__;
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
var seq__49531 = cljs.core.seq.call(null,plugins);
var chunk__49532 = null;
var count__49533 = (0);
var i__49534 = (0);
while(true){
if((i__49534 < count__49533)){
var vec__49535 = cljs.core._nth.call(null,chunk__49532,i__49534);
var k = cljs.core.nth.call(null,vec__49535,(0),null);
var plugin = cljs.core.nth.call(null,vec__49535,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49541 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49531,chunk__49532,count__49533,i__49534,pl_49541,vec__49535,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49541.call(null,msg_hist);
});})(seq__49531,chunk__49532,count__49533,i__49534,pl_49541,vec__49535,k,plugin))
);
} else {
}

var G__49542 = seq__49531;
var G__49543 = chunk__49532;
var G__49544 = count__49533;
var G__49545 = (i__49534 + (1));
seq__49531 = G__49542;
chunk__49532 = G__49543;
count__49533 = G__49544;
i__49534 = G__49545;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49531);
if(temp__4657__auto__){
var seq__49531__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49531__$1)){
var c__31671__auto__ = cljs.core.chunk_first.call(null,seq__49531__$1);
var G__49546 = cljs.core.chunk_rest.call(null,seq__49531__$1);
var G__49547 = c__31671__auto__;
var G__49548 = cljs.core.count.call(null,c__31671__auto__);
var G__49549 = (0);
seq__49531 = G__49546;
chunk__49532 = G__49547;
count__49533 = G__49548;
i__49534 = G__49549;
continue;
} else {
var vec__49538 = cljs.core.first.call(null,seq__49531__$1);
var k = cljs.core.nth.call(null,vec__49538,(0),null);
var plugin = cljs.core.nth.call(null,vec__49538,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49550 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49531,chunk__49532,count__49533,i__49534,pl_49550,vec__49538,k,plugin,seq__49531__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49550.call(null,msg_hist);
});})(seq__49531,chunk__49532,count__49533,i__49534,pl_49550,vec__49538,k,plugin,seq__49531__$1,temp__4657__auto__))
);
} else {
}

var G__49551 = cljs.core.next.call(null,seq__49531__$1);
var G__49552 = null;
var G__49553 = (0);
var G__49554 = (0);
seq__49531 = G__49551;
chunk__49532 = G__49552;
count__49533 = G__49553;
i__49534 = G__49554;
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
var args49555 = [];
var len__31935__auto___49562 = arguments.length;
var i__31936__auto___49563 = (0);
while(true){
if((i__31936__auto___49563 < len__31935__auto___49562)){
args49555.push((arguments[i__31936__auto___49563]));

var G__49564 = (i__31936__auto___49563 + (1));
i__31936__auto___49563 = G__49564;
continue;
} else {
}
break;
}

var G__49557 = args49555.length;
switch (G__49557) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49555.length)].join('')));

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

var seq__49558_49566 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49559_49567 = null;
var count__49560_49568 = (0);
var i__49561_49569 = (0);
while(true){
if((i__49561_49569 < count__49560_49568)){
var msg_49570 = cljs.core._nth.call(null,chunk__49559_49567,i__49561_49569);
figwheel.client.socket.handle_incoming_message.call(null,msg_49570);

var G__49571 = seq__49558_49566;
var G__49572 = chunk__49559_49567;
var G__49573 = count__49560_49568;
var G__49574 = (i__49561_49569 + (1));
seq__49558_49566 = G__49571;
chunk__49559_49567 = G__49572;
count__49560_49568 = G__49573;
i__49561_49569 = G__49574;
continue;
} else {
var temp__4657__auto___49575 = cljs.core.seq.call(null,seq__49558_49566);
if(temp__4657__auto___49575){
var seq__49558_49576__$1 = temp__4657__auto___49575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49558_49576__$1)){
var c__31671__auto___49577 = cljs.core.chunk_first.call(null,seq__49558_49576__$1);
var G__49578 = cljs.core.chunk_rest.call(null,seq__49558_49576__$1);
var G__49579 = c__31671__auto___49577;
var G__49580 = cljs.core.count.call(null,c__31671__auto___49577);
var G__49581 = (0);
seq__49558_49566 = G__49578;
chunk__49559_49567 = G__49579;
count__49560_49568 = G__49580;
i__49561_49569 = G__49581;
continue;
} else {
var msg_49582 = cljs.core.first.call(null,seq__49558_49576__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49582);

var G__49583 = cljs.core.next.call(null,seq__49558_49576__$1);
var G__49584 = null;
var G__49585 = (0);
var G__49586 = (0);
seq__49558_49566 = G__49583;
chunk__49559_49567 = G__49584;
count__49560_49568 = G__49585;
i__49561_49569 = G__49586;
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
var args__31942__auto__ = [];
var len__31935__auto___49591 = arguments.length;
var i__31936__auto___49592 = (0);
while(true){
if((i__31936__auto___49592 < len__31935__auto___49591)){
args__31942__auto__.push((arguments[i__31936__auto___49592]));

var G__49593 = (i__31936__auto___49592 + (1));
i__31936__auto___49592 = G__49593;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((0) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31943__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49588){
var map__49589 = p__49588;
var map__49589__$1 = ((((!((map__49589 == null)))?((((map__49589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49589):map__49589);
var opts = map__49589__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49587){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49587));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49595){if((e49595 instanceof Error)){
var e = e49595;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49595;

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
return (function (p__49599){
var map__49600 = p__49599;
var map__49600__$1 = ((((!((map__49600 == null)))?((((map__49600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49600):map__49600);
var msg_name = cljs.core.get.call(null,map__49600__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471771453518