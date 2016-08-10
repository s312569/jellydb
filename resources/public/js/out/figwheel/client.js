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
var args48026 = [];
var len__31083__auto___48029 = arguments.length;
var i__31084__auto___48030 = (0);
while(true){
if((i__31084__auto___48030 < len__31083__auto___48029)){
args48026.push((arguments[i__31084__auto___48030]));

var G__48031 = (i__31084__auto___48030 + (1));
i__31084__auto___48030 = G__48031;
continue;
} else {
}
break;
}

var G__48028 = args48026.length;
switch (G__48028) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48026.length)].join('')));

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
var args__31090__auto__ = [];
var len__31083__auto___48034 = arguments.length;
var i__31084__auto___48035 = (0);
while(true){
if((i__31084__auto___48035 < len__31083__auto___48034)){
args__31090__auto__.push((arguments[i__31084__auto___48035]));

var G__48036 = (i__31084__auto___48035 + (1));
i__31084__auto___48035 = G__48036;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((0) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31091__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48033){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48033));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31090__auto__ = [];
var len__31083__auto___48038 = arguments.length;
var i__31084__auto___48039 = (0);
while(true){
if((i__31084__auto___48039 < len__31083__auto___48038)){
args__31090__auto__.push((arguments[i__31084__auto___48039]));

var G__48040 = (i__31084__auto___48039 + (1));
i__31084__auto___48039 = G__48040;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((0) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31091__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48037){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48037));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__48041 = cljs.core._EQ_;
var expr__48042 = (function (){var or__30008__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e48045){if((e48045 instanceof Error)){
var e = e48045;
return false;
} else {
throw e48045;

}
}})();
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__48041.call(null,"true",expr__48042))){
return true;
} else {
if(cljs.core.truth_(pred__48041.call(null,"false",expr__48042))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48042)].join('')));
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
}catch (e48047){if((e48047 instanceof Error)){
var e = e48047;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e48047;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48048){
var map__48051 = p__48048;
var map__48051__$1 = ((((!((map__48051 == null)))?((((map__48051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48051):map__48051);
var message = cljs.core.get.call(null,map__48051__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48051__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30008__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29996__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29996__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29996__auto__;
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
var c__36362__auto___48213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___48213,ch){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___48213,ch){
return (function (state_48182){
var state_val_48183 = (state_48182[(1)]);
if((state_val_48183 === (7))){
var inst_48178 = (state_48182[(2)]);
var state_48182__$1 = state_48182;
var statearr_48184_48214 = state_48182__$1;
(statearr_48184_48214[(2)] = inst_48178);

(statearr_48184_48214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (1))){
var state_48182__$1 = state_48182;
var statearr_48185_48215 = state_48182__$1;
(statearr_48185_48215[(2)] = null);

(statearr_48185_48215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (4))){
var inst_48135 = (state_48182[(7)]);
var inst_48135__$1 = (state_48182[(2)]);
var state_48182__$1 = (function (){var statearr_48186 = state_48182;
(statearr_48186[(7)] = inst_48135__$1);

return statearr_48186;
})();
if(cljs.core.truth_(inst_48135__$1)){
var statearr_48187_48216 = state_48182__$1;
(statearr_48187_48216[(1)] = (5));

} else {
var statearr_48188_48217 = state_48182__$1;
(statearr_48188_48217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (15))){
var inst_48142 = (state_48182[(8)]);
var inst_48157 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48142);
var inst_48158 = cljs.core.first.call(null,inst_48157);
var inst_48159 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48158);
var inst_48160 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_48159)].join('');
var inst_48161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48160);
var state_48182__$1 = state_48182;
var statearr_48189_48218 = state_48182__$1;
(statearr_48189_48218[(2)] = inst_48161);

(statearr_48189_48218[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (13))){
var inst_48166 = (state_48182[(2)]);
var state_48182__$1 = state_48182;
var statearr_48190_48219 = state_48182__$1;
(statearr_48190_48219[(2)] = inst_48166);

(statearr_48190_48219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (6))){
var state_48182__$1 = state_48182;
var statearr_48191_48220 = state_48182__$1;
(statearr_48191_48220[(2)] = null);

(statearr_48191_48220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (17))){
var inst_48164 = (state_48182[(2)]);
var state_48182__$1 = state_48182;
var statearr_48192_48221 = state_48182__$1;
(statearr_48192_48221[(2)] = inst_48164);

(statearr_48192_48221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (3))){
var inst_48180 = (state_48182[(2)]);
var state_48182__$1 = state_48182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48182__$1,inst_48180);
} else {
if((state_val_48183 === (12))){
var inst_48141 = (state_48182[(9)]);
var inst_48155 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48141,opts);
var state_48182__$1 = state_48182;
if(cljs.core.truth_(inst_48155)){
var statearr_48193_48222 = state_48182__$1;
(statearr_48193_48222[(1)] = (15));

} else {
var statearr_48194_48223 = state_48182__$1;
(statearr_48194_48223[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (2))){
var state_48182__$1 = state_48182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48182__$1,(4),ch);
} else {
if((state_val_48183 === (11))){
var inst_48142 = (state_48182[(8)]);
var inst_48147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48148 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48142);
var inst_48149 = cljs.core.async.timeout.call(null,(1000));
var inst_48150 = [inst_48148,inst_48149];
var inst_48151 = (new cljs.core.PersistentVector(null,2,(5),inst_48147,inst_48150,null));
var state_48182__$1 = state_48182;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48182__$1,(14),inst_48151);
} else {
if((state_val_48183 === (9))){
var inst_48142 = (state_48182[(8)]);
var inst_48168 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48169 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48142);
var inst_48170 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48169);
var inst_48171 = [cljs.core.str("Not loading: "),cljs.core.str(inst_48170)].join('');
var inst_48172 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48171);
var state_48182__$1 = (function (){var statearr_48195 = state_48182;
(statearr_48195[(10)] = inst_48168);

return statearr_48195;
})();
var statearr_48196_48224 = state_48182__$1;
(statearr_48196_48224[(2)] = inst_48172);

(statearr_48196_48224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (5))){
var inst_48135 = (state_48182[(7)]);
var inst_48137 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48138 = (new cljs.core.PersistentArrayMap(null,2,inst_48137,null));
var inst_48139 = (new cljs.core.PersistentHashSet(null,inst_48138,null));
var inst_48140 = figwheel.client.focus_msgs.call(null,inst_48139,inst_48135);
var inst_48141 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48140);
var inst_48142 = cljs.core.first.call(null,inst_48140);
var inst_48143 = figwheel.client.autoload_QMARK_.call(null);
var state_48182__$1 = (function (){var statearr_48197 = state_48182;
(statearr_48197[(9)] = inst_48141);

(statearr_48197[(8)] = inst_48142);

return statearr_48197;
})();
if(cljs.core.truth_(inst_48143)){
var statearr_48198_48225 = state_48182__$1;
(statearr_48198_48225[(1)] = (8));

} else {
var statearr_48199_48226 = state_48182__$1;
(statearr_48199_48226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (14))){
var inst_48153 = (state_48182[(2)]);
var state_48182__$1 = state_48182;
var statearr_48200_48227 = state_48182__$1;
(statearr_48200_48227[(2)] = inst_48153);

(statearr_48200_48227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (16))){
var state_48182__$1 = state_48182;
var statearr_48201_48228 = state_48182__$1;
(statearr_48201_48228[(2)] = null);

(statearr_48201_48228[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (10))){
var inst_48174 = (state_48182[(2)]);
var state_48182__$1 = (function (){var statearr_48202 = state_48182;
(statearr_48202[(11)] = inst_48174);

return statearr_48202;
})();
var statearr_48203_48229 = state_48182__$1;
(statearr_48203_48229[(2)] = null);

(statearr_48203_48229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48183 === (8))){
var inst_48141 = (state_48182[(9)]);
var inst_48145 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48141,opts);
var state_48182__$1 = state_48182;
if(cljs.core.truth_(inst_48145)){
var statearr_48204_48230 = state_48182__$1;
(statearr_48204_48230[(1)] = (11));

} else {
var statearr_48205_48231 = state_48182__$1;
(statearr_48205_48231[(1)] = (12));

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
});})(c__36362__auto___48213,ch))
;
return ((function (switch__36250__auto__,c__36362__auto___48213,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__36251__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__36251__auto____0 = (function (){
var statearr_48209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48209[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__36251__auto__);

(statearr_48209[(1)] = (1));

return statearr_48209;
});
var figwheel$client$file_reloader_plugin_$_state_machine__36251__auto____1 = (function (state_48182){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_48182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e48210){if((e48210 instanceof Object)){
var ex__36254__auto__ = e48210;
var statearr_48211_48232 = state_48182;
(statearr_48211_48232[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48233 = state_48182;
state_48182 = G__48233;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__36251__auto__ = function(state_48182){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__36251__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__36251__auto____1.call(this,state_48182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__36251__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__36251__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___48213,ch))
})();
var state__36364__auto__ = (function (){var statearr_48212 = f__36363__auto__.call(null);
(statearr_48212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___48213);

return statearr_48212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___48213,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48234_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48234_SHARP_));
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
var base_path_48237 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48237){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48236){if((e48236 instanceof Error)){
var e = e48236;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48237], null));
} else {
var e = e48236;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48237))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48238){
var map__48247 = p__48238;
var map__48247__$1 = ((((!((map__48247 == null)))?((((map__48247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48247):map__48247);
var opts = map__48247__$1;
var build_id = cljs.core.get.call(null,map__48247__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48247,map__48247__$1,opts,build_id){
return (function (p__48249){
var vec__48250 = p__48249;
var seq__48251 = cljs.core.seq.call(null,vec__48250);
var first__48252 = cljs.core.first.call(null,seq__48251);
var seq__48251__$1 = cljs.core.next.call(null,seq__48251);
var map__48253 = first__48252;
var map__48253__$1 = ((((!((map__48253 == null)))?((((map__48253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48253):map__48253);
var msg = map__48253__$1;
var msg_name = cljs.core.get.call(null,map__48253__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48251__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48250,seq__48251,first__48252,seq__48251__$1,map__48253,map__48253__$1,msg,msg_name,_,map__48247,map__48247__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48250,seq__48251,first__48252,seq__48251__$1,map__48253,map__48253__$1,msg,msg_name,_,map__48247,map__48247__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48247,map__48247__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48261){
var vec__48262 = p__48261;
var seq__48263 = cljs.core.seq.call(null,vec__48262);
var first__48264 = cljs.core.first.call(null,seq__48263);
var seq__48263__$1 = cljs.core.next.call(null,seq__48263);
var map__48265 = first__48264;
var map__48265__$1 = ((((!((map__48265 == null)))?((((map__48265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48265):map__48265);
var msg = map__48265__$1;
var msg_name = cljs.core.get.call(null,map__48265__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48263__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48267){
var map__48279 = p__48267;
var map__48279__$1 = ((((!((map__48279 == null)))?((((map__48279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48279):map__48279);
var on_compile_warning = cljs.core.get.call(null,map__48279__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48279__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48279,map__48279__$1,on_compile_warning,on_compile_fail){
return (function (p__48281){
var vec__48282 = p__48281;
var seq__48283 = cljs.core.seq.call(null,vec__48282);
var first__48284 = cljs.core.first.call(null,seq__48283);
var seq__48283__$1 = cljs.core.next.call(null,seq__48283);
var map__48285 = first__48284;
var map__48285__$1 = ((((!((map__48285 == null)))?((((map__48285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48285):map__48285);
var msg = map__48285__$1;
var msg_name = cljs.core.get.call(null,map__48285__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48283__$1;
var pred__48287 = cljs.core._EQ_;
var expr__48288 = msg_name;
if(cljs.core.truth_(pred__48287.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48288))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48287.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48288))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48279,map__48279__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__36362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto__,msg_hist,msg_names,msg){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto__,msg_hist,msg_names,msg){
return (function (state_48496){
var state_val_48497 = (state_48496[(1)]);
if((state_val_48497 === (7))){
var inst_48424 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
if(cljs.core.truth_(inst_48424)){
var statearr_48498_48544 = state_48496__$1;
(statearr_48498_48544[(1)] = (8));

} else {
var statearr_48499_48545 = state_48496__$1;
(statearr_48499_48545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (20))){
var inst_48490 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48500_48546 = state_48496__$1;
(statearr_48500_48546[(2)] = inst_48490);

(statearr_48500_48546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (27))){
var inst_48486 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48501_48547 = state_48496__$1;
(statearr_48501_48547[(2)] = inst_48486);

(statearr_48501_48547[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (1))){
var inst_48417 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48496__$1 = state_48496;
if(cljs.core.truth_(inst_48417)){
var statearr_48502_48548 = state_48496__$1;
(statearr_48502_48548[(1)] = (2));

} else {
var statearr_48503_48549 = state_48496__$1;
(statearr_48503_48549[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (24))){
var inst_48488 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48504_48550 = state_48496__$1;
(statearr_48504_48550[(2)] = inst_48488);

(statearr_48504_48550[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (4))){
var inst_48494 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48496__$1,inst_48494);
} else {
if((state_val_48497 === (15))){
var inst_48492 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48505_48551 = state_48496__$1;
(statearr_48505_48551[(2)] = inst_48492);

(statearr_48505_48551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (21))){
var inst_48451 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48506_48552 = state_48496__$1;
(statearr_48506_48552[(2)] = inst_48451);

(statearr_48506_48552[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (31))){
var inst_48475 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48496__$1 = state_48496;
if(cljs.core.truth_(inst_48475)){
var statearr_48507_48553 = state_48496__$1;
(statearr_48507_48553[(1)] = (34));

} else {
var statearr_48508_48554 = state_48496__$1;
(statearr_48508_48554[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (32))){
var inst_48484 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48509_48555 = state_48496__$1;
(statearr_48509_48555[(2)] = inst_48484);

(statearr_48509_48555[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (33))){
var inst_48473 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48510_48556 = state_48496__$1;
(statearr_48510_48556[(2)] = inst_48473);

(statearr_48510_48556[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (13))){
var inst_48438 = figwheel.client.heads_up.clear.call(null);
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48496__$1,(16),inst_48438);
} else {
if((state_val_48497 === (22))){
var inst_48455 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48456 = figwheel.client.heads_up.append_warning_message.call(null,inst_48455);
var state_48496__$1 = state_48496;
var statearr_48511_48557 = state_48496__$1;
(statearr_48511_48557[(2)] = inst_48456);

(statearr_48511_48557[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (36))){
var inst_48482 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48512_48558 = state_48496__$1;
(statearr_48512_48558[(2)] = inst_48482);

(statearr_48512_48558[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (29))){
var inst_48466 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48513_48559 = state_48496__$1;
(statearr_48513_48559[(2)] = inst_48466);

(statearr_48513_48559[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (6))){
var inst_48419 = (state_48496[(7)]);
var state_48496__$1 = state_48496;
var statearr_48514_48560 = state_48496__$1;
(statearr_48514_48560[(2)] = inst_48419);

(statearr_48514_48560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (28))){
var inst_48462 = (state_48496[(2)]);
var inst_48463 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48464 = figwheel.client.heads_up.display_warning.call(null,inst_48463);
var state_48496__$1 = (function (){var statearr_48515 = state_48496;
(statearr_48515[(8)] = inst_48462);

return statearr_48515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48496__$1,(29),inst_48464);
} else {
if((state_val_48497 === (25))){
var inst_48460 = figwheel.client.heads_up.clear.call(null);
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48496__$1,(28),inst_48460);
} else {
if((state_val_48497 === (34))){
var inst_48477 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48496__$1,(37),inst_48477);
} else {
if((state_val_48497 === (17))){
var inst_48444 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48516_48561 = state_48496__$1;
(statearr_48516_48561[(2)] = inst_48444);

(statearr_48516_48561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (3))){
var inst_48436 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48496__$1 = state_48496;
if(cljs.core.truth_(inst_48436)){
var statearr_48517_48562 = state_48496__$1;
(statearr_48517_48562[(1)] = (13));

} else {
var statearr_48518_48563 = state_48496__$1;
(statearr_48518_48563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (12))){
var inst_48432 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48519_48564 = state_48496__$1;
(statearr_48519_48564[(2)] = inst_48432);

(statearr_48519_48564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (2))){
var inst_48419 = (state_48496[(7)]);
var inst_48419__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48496__$1 = (function (){var statearr_48520 = state_48496;
(statearr_48520[(7)] = inst_48419__$1);

return statearr_48520;
})();
if(cljs.core.truth_(inst_48419__$1)){
var statearr_48521_48565 = state_48496__$1;
(statearr_48521_48565[(1)] = (5));

} else {
var statearr_48522_48566 = state_48496__$1;
(statearr_48522_48566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (23))){
var inst_48458 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48496__$1 = state_48496;
if(cljs.core.truth_(inst_48458)){
var statearr_48523_48567 = state_48496__$1;
(statearr_48523_48567[(1)] = (25));

} else {
var statearr_48524_48568 = state_48496__$1;
(statearr_48524_48568[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (35))){
var state_48496__$1 = state_48496;
var statearr_48525_48569 = state_48496__$1;
(statearr_48525_48569[(2)] = null);

(statearr_48525_48569[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (19))){
var inst_48453 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48496__$1 = state_48496;
if(cljs.core.truth_(inst_48453)){
var statearr_48526_48570 = state_48496__$1;
(statearr_48526_48570[(1)] = (22));

} else {
var statearr_48527_48571 = state_48496__$1;
(statearr_48527_48571[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (11))){
var inst_48428 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48528_48572 = state_48496__$1;
(statearr_48528_48572[(2)] = inst_48428);

(statearr_48528_48572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (9))){
var inst_48430 = figwheel.client.heads_up.clear.call(null);
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48496__$1,(12),inst_48430);
} else {
if((state_val_48497 === (5))){
var inst_48421 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48496__$1 = state_48496;
var statearr_48529_48573 = state_48496__$1;
(statearr_48529_48573[(2)] = inst_48421);

(statearr_48529_48573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (14))){
var inst_48446 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48496__$1 = state_48496;
if(cljs.core.truth_(inst_48446)){
var statearr_48530_48574 = state_48496__$1;
(statearr_48530_48574[(1)] = (18));

} else {
var statearr_48531_48575 = state_48496__$1;
(statearr_48531_48575[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (26))){
var inst_48468 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48496__$1 = state_48496;
if(cljs.core.truth_(inst_48468)){
var statearr_48532_48576 = state_48496__$1;
(statearr_48532_48576[(1)] = (30));

} else {
var statearr_48533_48577 = state_48496__$1;
(statearr_48533_48577[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (16))){
var inst_48440 = (state_48496[(2)]);
var inst_48441 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48442 = figwheel.client.heads_up.display_exception.call(null,inst_48441);
var state_48496__$1 = (function (){var statearr_48534 = state_48496;
(statearr_48534[(9)] = inst_48440);

return statearr_48534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48496__$1,(17),inst_48442);
} else {
if((state_val_48497 === (30))){
var inst_48470 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48471 = figwheel.client.heads_up.display_warning.call(null,inst_48470);
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48496__$1,(33),inst_48471);
} else {
if((state_val_48497 === (10))){
var inst_48434 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48535_48578 = state_48496__$1;
(statearr_48535_48578[(2)] = inst_48434);

(statearr_48535_48578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (18))){
var inst_48448 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48449 = figwheel.client.heads_up.display_exception.call(null,inst_48448);
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48496__$1,(21),inst_48449);
} else {
if((state_val_48497 === (37))){
var inst_48479 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48536_48579 = state_48496__$1;
(statearr_48536_48579[(2)] = inst_48479);

(statearr_48536_48579[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (8))){
var inst_48426 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48496__$1,(11),inst_48426);
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
});})(c__36362__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__36250__auto__,c__36362__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto____0 = (function (){
var statearr_48540 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48540[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto__);

(statearr_48540[(1)] = (1));

return statearr_48540;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto____1 = (function (state_48496){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_48496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e48541){if((e48541 instanceof Object)){
var ex__36254__auto__ = e48541;
var statearr_48542_48580 = state_48496;
(statearr_48542_48580[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48581 = state_48496;
state_48496 = G__48581;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto__ = function(state_48496){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto____1.call(this,state_48496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto__,msg_hist,msg_names,msg))
})();
var state__36364__auto__ = (function (){var statearr_48543 = f__36363__auto__.call(null);
(statearr_48543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto__);

return statearr_48543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto__,msg_hist,msg_names,msg))
);

return c__36362__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36362__auto___48644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___48644,ch){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___48644,ch){
return (function (state_48627){
var state_val_48628 = (state_48627[(1)]);
if((state_val_48628 === (1))){
var state_48627__$1 = state_48627;
var statearr_48629_48645 = state_48627__$1;
(statearr_48629_48645[(2)] = null);

(statearr_48629_48645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (2))){
var state_48627__$1 = state_48627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48627__$1,(4),ch);
} else {
if((state_val_48628 === (3))){
var inst_48625 = (state_48627[(2)]);
var state_48627__$1 = state_48627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48627__$1,inst_48625);
} else {
if((state_val_48628 === (4))){
var inst_48615 = (state_48627[(7)]);
var inst_48615__$1 = (state_48627[(2)]);
var state_48627__$1 = (function (){var statearr_48630 = state_48627;
(statearr_48630[(7)] = inst_48615__$1);

return statearr_48630;
})();
if(cljs.core.truth_(inst_48615__$1)){
var statearr_48631_48646 = state_48627__$1;
(statearr_48631_48646[(1)] = (5));

} else {
var statearr_48632_48647 = state_48627__$1;
(statearr_48632_48647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (5))){
var inst_48615 = (state_48627[(7)]);
var inst_48617 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48615);
var state_48627__$1 = state_48627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48627__$1,(8),inst_48617);
} else {
if((state_val_48628 === (6))){
var state_48627__$1 = state_48627;
var statearr_48633_48648 = state_48627__$1;
(statearr_48633_48648[(2)] = null);

(statearr_48633_48648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (7))){
var inst_48623 = (state_48627[(2)]);
var state_48627__$1 = state_48627;
var statearr_48634_48649 = state_48627__$1;
(statearr_48634_48649[(2)] = inst_48623);

(statearr_48634_48649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48628 === (8))){
var inst_48619 = (state_48627[(2)]);
var state_48627__$1 = (function (){var statearr_48635 = state_48627;
(statearr_48635[(8)] = inst_48619);

return statearr_48635;
})();
var statearr_48636_48650 = state_48627__$1;
(statearr_48636_48650[(2)] = null);

(statearr_48636_48650[(1)] = (2));


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
});})(c__36362__auto___48644,ch))
;
return ((function (switch__36250__auto__,c__36362__auto___48644,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__36251__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__36251__auto____0 = (function (){
var statearr_48640 = [null,null,null,null,null,null,null,null,null];
(statearr_48640[(0)] = figwheel$client$heads_up_plugin_$_state_machine__36251__auto__);

(statearr_48640[(1)] = (1));

return statearr_48640;
});
var figwheel$client$heads_up_plugin_$_state_machine__36251__auto____1 = (function (state_48627){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_48627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e48641){if((e48641 instanceof Object)){
var ex__36254__auto__ = e48641;
var statearr_48642_48651 = state_48627;
(statearr_48642_48651[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48652 = state_48627;
state_48627 = G__48652;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__36251__auto__ = function(state_48627){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__36251__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__36251__auto____1.call(this,state_48627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__36251__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__36251__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___48644,ch))
})();
var state__36364__auto__ = (function (){var statearr_48643 = f__36363__auto__.call(null);
(statearr_48643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___48644);

return statearr_48643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___48644,ch))
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
var c__36362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto__){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto__){
return (function (state_48673){
var state_val_48674 = (state_48673[(1)]);
if((state_val_48674 === (1))){
var inst_48668 = cljs.core.async.timeout.call(null,(3000));
var state_48673__$1 = state_48673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48673__$1,(2),inst_48668);
} else {
if((state_val_48674 === (2))){
var inst_48670 = (state_48673[(2)]);
var inst_48671 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48673__$1 = (function (){var statearr_48675 = state_48673;
(statearr_48675[(7)] = inst_48670);

return statearr_48675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48673__$1,inst_48671);
} else {
return null;
}
}
});})(c__36362__auto__))
;
return ((function (switch__36250__auto__,c__36362__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__36251__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__36251__auto____0 = (function (){
var statearr_48679 = [null,null,null,null,null,null,null,null];
(statearr_48679[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__36251__auto__);

(statearr_48679[(1)] = (1));

return statearr_48679;
});
var figwheel$client$enforce_project_plugin_$_state_machine__36251__auto____1 = (function (state_48673){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_48673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e48680){if((e48680 instanceof Object)){
var ex__36254__auto__ = e48680;
var statearr_48681_48683 = state_48673;
(statearr_48681_48683[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48684 = state_48673;
state_48673 = G__48684;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__36251__auto__ = function(state_48673){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__36251__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__36251__auto____1.call(this,state_48673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__36251__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__36251__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto__))
})();
var state__36364__auto__ = (function (){var statearr_48682 = f__36363__auto__.call(null);
(statearr_48682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto__);

return statearr_48682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto__))
);

return c__36362__auto__;
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
var c__36362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto__,figwheel_version,temp__4657__auto__){
return (function (state_48707){
var state_val_48708 = (state_48707[(1)]);
if((state_val_48708 === (1))){
var inst_48701 = cljs.core.async.timeout.call(null,(2000));
var state_48707__$1 = state_48707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48707__$1,(2),inst_48701);
} else {
if((state_val_48708 === (2))){
var inst_48703 = (state_48707[(2)]);
var inst_48704 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_48705 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48704);
var state_48707__$1 = (function (){var statearr_48709 = state_48707;
(statearr_48709[(7)] = inst_48703);

return statearr_48709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48707__$1,inst_48705);
} else {
return null;
}
}
});})(c__36362__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__36250__auto__,c__36362__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto____0 = (function (){
var statearr_48713 = [null,null,null,null,null,null,null,null];
(statearr_48713[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto__);

(statearr_48713[(1)] = (1));

return statearr_48713;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto____1 = (function (state_48707){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_48707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e48714){if((e48714 instanceof Object)){
var ex__36254__auto__ = e48714;
var statearr_48715_48717 = state_48707;
(statearr_48715_48717[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48718 = state_48707;
state_48707 = G__48718;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto__ = function(state_48707){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto____1.call(this,state_48707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto__,figwheel_version,temp__4657__auto__))
})();
var state__36364__auto__ = (function (){var statearr_48716 = f__36363__auto__.call(null);
(statearr_48716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto__);

return statearr_48716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto__,figwheel_version,temp__4657__auto__))
);

return c__36362__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48719){
var map__48723 = p__48719;
var map__48723__$1 = ((((!((map__48723 == null)))?((((map__48723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48723):map__48723);
var file = cljs.core.get.call(null,map__48723__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48723__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48723__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48725 = "";
var G__48725__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__48725),cljs.core.str("file "),cljs.core.str(file)].join(''):G__48725);
var G__48725__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__48725__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__48725__$1);
if(cljs.core.truth_((function (){var and__29996__auto__ = line;
if(cljs.core.truth_(and__29996__auto__)){
return column;
} else {
return and__29996__auto__;
}
})())){
return [cljs.core.str(G__48725__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__48725__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48726){
var map__48733 = p__48726;
var map__48733__$1 = ((((!((map__48733 == null)))?((((map__48733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48733):map__48733);
var ed = map__48733__$1;
var formatted_exception = cljs.core.get.call(null,map__48733__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48733__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48733__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48735_48739 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48736_48740 = null;
var count__48737_48741 = (0);
var i__48738_48742 = (0);
while(true){
if((i__48738_48742 < count__48737_48741)){
var msg_48743 = cljs.core._nth.call(null,chunk__48736_48740,i__48738_48742);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48743);

var G__48744 = seq__48735_48739;
var G__48745 = chunk__48736_48740;
var G__48746 = count__48737_48741;
var G__48747 = (i__48738_48742 + (1));
seq__48735_48739 = G__48744;
chunk__48736_48740 = G__48745;
count__48737_48741 = G__48746;
i__48738_48742 = G__48747;
continue;
} else {
var temp__4657__auto___48748 = cljs.core.seq.call(null,seq__48735_48739);
if(temp__4657__auto___48748){
var seq__48735_48749__$1 = temp__4657__auto___48748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48735_48749__$1)){
var c__30819__auto___48750 = cljs.core.chunk_first.call(null,seq__48735_48749__$1);
var G__48751 = cljs.core.chunk_rest.call(null,seq__48735_48749__$1);
var G__48752 = c__30819__auto___48750;
var G__48753 = cljs.core.count.call(null,c__30819__auto___48750);
var G__48754 = (0);
seq__48735_48739 = G__48751;
chunk__48736_48740 = G__48752;
count__48737_48741 = G__48753;
i__48738_48742 = G__48754;
continue;
} else {
var msg_48755 = cljs.core.first.call(null,seq__48735_48749__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48755);

var G__48756 = cljs.core.next.call(null,seq__48735_48749__$1);
var G__48757 = null;
var G__48758 = (0);
var G__48759 = (0);
seq__48735_48739 = G__48756;
chunk__48736_48740 = G__48757;
count__48737_48741 = G__48758;
i__48738_48742 = G__48759;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48760){
var map__48763 = p__48760;
var map__48763__$1 = ((((!((map__48763 == null)))?((((map__48763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48763):map__48763);
var w = map__48763__$1;
var message = cljs.core.get.call(null,map__48763__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__29996__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29996__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29996__auto__;
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
var seq__48775 = cljs.core.seq.call(null,plugins);
var chunk__48776 = null;
var count__48777 = (0);
var i__48778 = (0);
while(true){
if((i__48778 < count__48777)){
var vec__48779 = cljs.core._nth.call(null,chunk__48776,i__48778);
var k = cljs.core.nth.call(null,vec__48779,(0),null);
var plugin = cljs.core.nth.call(null,vec__48779,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48785 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48775,chunk__48776,count__48777,i__48778,pl_48785,vec__48779,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48785.call(null,msg_hist);
});})(seq__48775,chunk__48776,count__48777,i__48778,pl_48785,vec__48779,k,plugin))
);
} else {
}

var G__48786 = seq__48775;
var G__48787 = chunk__48776;
var G__48788 = count__48777;
var G__48789 = (i__48778 + (1));
seq__48775 = G__48786;
chunk__48776 = G__48787;
count__48777 = G__48788;
i__48778 = G__48789;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48775);
if(temp__4657__auto__){
var seq__48775__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48775__$1)){
var c__30819__auto__ = cljs.core.chunk_first.call(null,seq__48775__$1);
var G__48790 = cljs.core.chunk_rest.call(null,seq__48775__$1);
var G__48791 = c__30819__auto__;
var G__48792 = cljs.core.count.call(null,c__30819__auto__);
var G__48793 = (0);
seq__48775 = G__48790;
chunk__48776 = G__48791;
count__48777 = G__48792;
i__48778 = G__48793;
continue;
} else {
var vec__48782 = cljs.core.first.call(null,seq__48775__$1);
var k = cljs.core.nth.call(null,vec__48782,(0),null);
var plugin = cljs.core.nth.call(null,vec__48782,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48794 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48775,chunk__48776,count__48777,i__48778,pl_48794,vec__48782,k,plugin,seq__48775__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48794.call(null,msg_hist);
});})(seq__48775,chunk__48776,count__48777,i__48778,pl_48794,vec__48782,k,plugin,seq__48775__$1,temp__4657__auto__))
);
} else {
}

var G__48795 = cljs.core.next.call(null,seq__48775__$1);
var G__48796 = null;
var G__48797 = (0);
var G__48798 = (0);
seq__48775 = G__48795;
chunk__48776 = G__48796;
count__48777 = G__48797;
i__48778 = G__48798;
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
var args48799 = [];
var len__31083__auto___48806 = arguments.length;
var i__31084__auto___48807 = (0);
while(true){
if((i__31084__auto___48807 < len__31083__auto___48806)){
args48799.push((arguments[i__31084__auto___48807]));

var G__48808 = (i__31084__auto___48807 + (1));
i__31084__auto___48807 = G__48808;
continue;
} else {
}
break;
}

var G__48801 = args48799.length;
switch (G__48801) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48799.length)].join('')));

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

var seq__48802_48810 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48803_48811 = null;
var count__48804_48812 = (0);
var i__48805_48813 = (0);
while(true){
if((i__48805_48813 < count__48804_48812)){
var msg_48814 = cljs.core._nth.call(null,chunk__48803_48811,i__48805_48813);
figwheel.client.socket.handle_incoming_message.call(null,msg_48814);

var G__48815 = seq__48802_48810;
var G__48816 = chunk__48803_48811;
var G__48817 = count__48804_48812;
var G__48818 = (i__48805_48813 + (1));
seq__48802_48810 = G__48815;
chunk__48803_48811 = G__48816;
count__48804_48812 = G__48817;
i__48805_48813 = G__48818;
continue;
} else {
var temp__4657__auto___48819 = cljs.core.seq.call(null,seq__48802_48810);
if(temp__4657__auto___48819){
var seq__48802_48820__$1 = temp__4657__auto___48819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48802_48820__$1)){
var c__30819__auto___48821 = cljs.core.chunk_first.call(null,seq__48802_48820__$1);
var G__48822 = cljs.core.chunk_rest.call(null,seq__48802_48820__$1);
var G__48823 = c__30819__auto___48821;
var G__48824 = cljs.core.count.call(null,c__30819__auto___48821);
var G__48825 = (0);
seq__48802_48810 = G__48822;
chunk__48803_48811 = G__48823;
count__48804_48812 = G__48824;
i__48805_48813 = G__48825;
continue;
} else {
var msg_48826 = cljs.core.first.call(null,seq__48802_48820__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48826);

var G__48827 = cljs.core.next.call(null,seq__48802_48820__$1);
var G__48828 = null;
var G__48829 = (0);
var G__48830 = (0);
seq__48802_48810 = G__48827;
chunk__48803_48811 = G__48828;
count__48804_48812 = G__48829;
i__48805_48813 = G__48830;
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
var args__31090__auto__ = [];
var len__31083__auto___48835 = arguments.length;
var i__31084__auto___48836 = (0);
while(true){
if((i__31084__auto___48836 < len__31083__auto___48835)){
args__31090__auto__.push((arguments[i__31084__auto___48836]));

var G__48837 = (i__31084__auto___48836 + (1));
i__31084__auto___48836 = G__48837;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((0) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31091__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48832){
var map__48833 = p__48832;
var map__48833__$1 = ((((!((map__48833 == null)))?((((map__48833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48833):map__48833);
var opts = map__48833__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48831){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48831));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48839){if((e48839 instanceof Error)){
var e = e48839;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48839;

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
return (function (p__48843){
var map__48844 = p__48843;
var map__48844__$1 = ((((!((map__48844 == null)))?((((map__48844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48844):map__48844);
var msg_name = cljs.core.get.call(null,map__48844__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1470795683409