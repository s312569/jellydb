// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__40955 = cljs.core._EQ_;
var expr__40956 = (function (){var or__29513__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40955.call(null,"true",expr__40956))){
return true;
} else {
if(cljs.core.truth_(pred__40955.call(null,"false",expr__40956))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40956)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40958__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40959__i = 0, G__40959__a = new Array(arguments.length -  0);
while (G__40959__i < G__40959__a.length) {G__40959__a[G__40959__i] = arguments[G__40959__i + 0]; ++G__40959__i;}
  args = new cljs.core.IndexedSeq(G__40959__a,0);
} 
return G__40958__delegate.call(this,args);};
G__40958.cljs$lang$maxFixedArity = 0;
G__40958.cljs$lang$applyTo = (function (arglist__40960){
var args = cljs.core.seq(arglist__40960);
return G__40958__delegate(args);
});
G__40958.cljs$core$IFn$_invoke$arity$variadic = G__40958__delegate;
return G__40958;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40961){
var map__40964 = p__40961;
var map__40964__$1 = ((((!((map__40964 == null)))?((((map__40964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40964):map__40964);
var message = cljs.core.get.call(null,map__40964__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40964__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29513__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29501__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29501__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29501__auto__;
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
var c__32314__auto___41126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___41126,ch){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___41126,ch){
return (function (state_41095){
var state_val_41096 = (state_41095[(1)]);
if((state_val_41096 === (7))){
var inst_41091 = (state_41095[(2)]);
var state_41095__$1 = state_41095;
var statearr_41097_41127 = state_41095__$1;
(statearr_41097_41127[(2)] = inst_41091);

(statearr_41097_41127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (1))){
var state_41095__$1 = state_41095;
var statearr_41098_41128 = state_41095__$1;
(statearr_41098_41128[(2)] = null);

(statearr_41098_41128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (4))){
var inst_41048 = (state_41095[(7)]);
var inst_41048__$1 = (state_41095[(2)]);
var state_41095__$1 = (function (){var statearr_41099 = state_41095;
(statearr_41099[(7)] = inst_41048__$1);

return statearr_41099;
})();
if(cljs.core.truth_(inst_41048__$1)){
var statearr_41100_41129 = state_41095__$1;
(statearr_41100_41129[(1)] = (5));

} else {
var statearr_41101_41130 = state_41095__$1;
(statearr_41101_41130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (15))){
var inst_41055 = (state_41095[(8)]);
var inst_41070 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41055);
var inst_41071 = cljs.core.first.call(null,inst_41070);
var inst_41072 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41071);
var inst_41073 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41072)].join('');
var inst_41074 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41073);
var state_41095__$1 = state_41095;
var statearr_41102_41131 = state_41095__$1;
(statearr_41102_41131[(2)] = inst_41074);

(statearr_41102_41131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (13))){
var inst_41079 = (state_41095[(2)]);
var state_41095__$1 = state_41095;
var statearr_41103_41132 = state_41095__$1;
(statearr_41103_41132[(2)] = inst_41079);

(statearr_41103_41132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (6))){
var state_41095__$1 = state_41095;
var statearr_41104_41133 = state_41095__$1;
(statearr_41104_41133[(2)] = null);

(statearr_41104_41133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (17))){
var inst_41077 = (state_41095[(2)]);
var state_41095__$1 = state_41095;
var statearr_41105_41134 = state_41095__$1;
(statearr_41105_41134[(2)] = inst_41077);

(statearr_41105_41134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (3))){
var inst_41093 = (state_41095[(2)]);
var state_41095__$1 = state_41095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41095__$1,inst_41093);
} else {
if((state_val_41096 === (12))){
var inst_41054 = (state_41095[(9)]);
var inst_41068 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41054,opts);
var state_41095__$1 = state_41095;
if(cljs.core.truth_(inst_41068)){
var statearr_41106_41135 = state_41095__$1;
(statearr_41106_41135[(1)] = (15));

} else {
var statearr_41107_41136 = state_41095__$1;
(statearr_41107_41136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (2))){
var state_41095__$1 = state_41095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41095__$1,(4),ch);
} else {
if((state_val_41096 === (11))){
var inst_41055 = (state_41095[(8)]);
var inst_41060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41061 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41055);
var inst_41062 = cljs.core.async.timeout.call(null,(1000));
var inst_41063 = [inst_41061,inst_41062];
var inst_41064 = (new cljs.core.PersistentVector(null,2,(5),inst_41060,inst_41063,null));
var state_41095__$1 = state_41095;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41095__$1,(14),inst_41064);
} else {
if((state_val_41096 === (9))){
var inst_41055 = (state_41095[(8)]);
var inst_41081 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41082 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41055);
var inst_41083 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41082);
var inst_41084 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41083)].join('');
var inst_41085 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41084);
var state_41095__$1 = (function (){var statearr_41108 = state_41095;
(statearr_41108[(10)] = inst_41081);

return statearr_41108;
})();
var statearr_41109_41137 = state_41095__$1;
(statearr_41109_41137[(2)] = inst_41085);

(statearr_41109_41137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (5))){
var inst_41048 = (state_41095[(7)]);
var inst_41050 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41051 = (new cljs.core.PersistentArrayMap(null,2,inst_41050,null));
var inst_41052 = (new cljs.core.PersistentHashSet(null,inst_41051,null));
var inst_41053 = figwheel.client.focus_msgs.call(null,inst_41052,inst_41048);
var inst_41054 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41053);
var inst_41055 = cljs.core.first.call(null,inst_41053);
var inst_41056 = figwheel.client.autoload_QMARK_.call(null);
var state_41095__$1 = (function (){var statearr_41110 = state_41095;
(statearr_41110[(9)] = inst_41054);

(statearr_41110[(8)] = inst_41055);

return statearr_41110;
})();
if(cljs.core.truth_(inst_41056)){
var statearr_41111_41138 = state_41095__$1;
(statearr_41111_41138[(1)] = (8));

} else {
var statearr_41112_41139 = state_41095__$1;
(statearr_41112_41139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (14))){
var inst_41066 = (state_41095[(2)]);
var state_41095__$1 = state_41095;
var statearr_41113_41140 = state_41095__$1;
(statearr_41113_41140[(2)] = inst_41066);

(statearr_41113_41140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (16))){
var state_41095__$1 = state_41095;
var statearr_41114_41141 = state_41095__$1;
(statearr_41114_41141[(2)] = null);

(statearr_41114_41141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (10))){
var inst_41087 = (state_41095[(2)]);
var state_41095__$1 = (function (){var statearr_41115 = state_41095;
(statearr_41115[(11)] = inst_41087);

return statearr_41115;
})();
var statearr_41116_41142 = state_41095__$1;
(statearr_41116_41142[(2)] = null);

(statearr_41116_41142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41096 === (8))){
var inst_41054 = (state_41095[(9)]);
var inst_41058 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41054,opts);
var state_41095__$1 = state_41095;
if(cljs.core.truth_(inst_41058)){
var statearr_41117_41143 = state_41095__$1;
(statearr_41117_41143[(1)] = (11));

} else {
var statearr_41118_41144 = state_41095__$1;
(statearr_41118_41144[(1)] = (12));

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
});})(c__32314__auto___41126,ch))
;
return ((function (switch__32293__auto__,c__32314__auto___41126,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32294__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32294__auto____0 = (function (){
var statearr_41122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41122[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32294__auto__);

(statearr_41122[(1)] = (1));

return statearr_41122;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32294__auto____1 = (function (state_41095){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_41095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e41123){if((e41123 instanceof Object)){
var ex__32297__auto__ = e41123;
var statearr_41124_41145 = state_41095;
(statearr_41124_41145[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41146 = state_41095;
state_41095 = G__41146;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32294__auto__ = function(state_41095){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32294__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32294__auto____1.call(this,state_41095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32294__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32294__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___41126,ch))
})();
var state__32316__auto__ = (function (){var statearr_41125 = f__32315__auto__.call(null);
(statearr_41125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___41126);

return statearr_41125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___41126,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41147_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41147_SHARP_));
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
var base_path_41154 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41154){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_41152 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_41153 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_41152,_STAR_print_newline_STAR_41153,base_path_41154){
return (function() { 
var G__41155__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41156__i = 0, G__41156__a = new Array(arguments.length -  0);
while (G__41156__i < G__41156__a.length) {G__41156__a[G__41156__i] = arguments[G__41156__i + 0]; ++G__41156__i;}
  args = new cljs.core.IndexedSeq(G__41156__a,0);
} 
return G__41155__delegate.call(this,args);};
G__41155.cljs$lang$maxFixedArity = 0;
G__41155.cljs$lang$applyTo = (function (arglist__41157){
var args = cljs.core.seq(arglist__41157);
return G__41155__delegate(args);
});
G__41155.cljs$core$IFn$_invoke$arity$variadic = G__41155__delegate;
return G__41155;
})()
;})(_STAR_print_fn_STAR_41152,_STAR_print_newline_STAR_41153,base_path_41154))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41153;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41152;
}}catch (e41151){if((e41151 instanceof Error)){
var e = e41151;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41154], null));
} else {
var e = e41151;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41154))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41158){
var map__41165 = p__41158;
var map__41165__$1 = ((((!((map__41165 == null)))?((((map__41165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41165):map__41165);
var opts = map__41165__$1;
var build_id = cljs.core.get.call(null,map__41165__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41165,map__41165__$1,opts,build_id){
return (function (p__41167){
var vec__41168 = p__41167;
var map__41169 = cljs.core.nth.call(null,vec__41168,(0),null);
var map__41169__$1 = ((((!((map__41169 == null)))?((((map__41169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41169):map__41169);
var msg = map__41169__$1;
var msg_name = cljs.core.get.call(null,map__41169__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41168,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41168,map__41169,map__41169__$1,msg,msg_name,_,map__41165,map__41165__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41168,map__41169,map__41169__$1,msg,msg_name,_,map__41165,map__41165__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41165,map__41165__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41175){
var vec__41176 = p__41175;
var map__41177 = cljs.core.nth.call(null,vec__41176,(0),null);
var map__41177__$1 = ((((!((map__41177 == null)))?((((map__41177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41177):map__41177);
var msg = map__41177__$1;
var msg_name = cljs.core.get.call(null,map__41177__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41176,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41179){
var map__41189 = p__41179;
var map__41189__$1 = ((((!((map__41189 == null)))?((((map__41189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41189):map__41189);
var on_compile_warning = cljs.core.get.call(null,map__41189__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41189__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41189,map__41189__$1,on_compile_warning,on_compile_fail){
return (function (p__41191){
var vec__41192 = p__41191;
var map__41193 = cljs.core.nth.call(null,vec__41192,(0),null);
var map__41193__$1 = ((((!((map__41193 == null)))?((((map__41193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41193):map__41193);
var msg = map__41193__$1;
var msg_name = cljs.core.get.call(null,map__41193__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41192,(1));
var pred__41195 = cljs.core._EQ_;
var expr__41196 = msg_name;
if(cljs.core.truth_(pred__41195.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41196))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41195.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41196))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41189,map__41189__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto__,msg_hist,msg_names,msg){
return (function (state_41412){
var state_val_41413 = (state_41412[(1)]);
if((state_val_41413 === (7))){
var inst_41336 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
if(cljs.core.truth_(inst_41336)){
var statearr_41414_41460 = state_41412__$1;
(statearr_41414_41460[(1)] = (8));

} else {
var statearr_41415_41461 = state_41412__$1;
(statearr_41415_41461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (20))){
var inst_41406 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41416_41462 = state_41412__$1;
(statearr_41416_41462[(2)] = inst_41406);

(statearr_41416_41462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (27))){
var inst_41402 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41417_41463 = state_41412__$1;
(statearr_41417_41463[(2)] = inst_41402);

(statearr_41417_41463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (1))){
var inst_41329 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41412__$1 = state_41412;
if(cljs.core.truth_(inst_41329)){
var statearr_41418_41464 = state_41412__$1;
(statearr_41418_41464[(1)] = (2));

} else {
var statearr_41419_41465 = state_41412__$1;
(statearr_41419_41465[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (24))){
var inst_41404 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41420_41466 = state_41412__$1;
(statearr_41420_41466[(2)] = inst_41404);

(statearr_41420_41466[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (4))){
var inst_41410 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41412__$1,inst_41410);
} else {
if((state_val_41413 === (15))){
var inst_41408 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41421_41467 = state_41412__$1;
(statearr_41421_41467[(2)] = inst_41408);

(statearr_41421_41467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (21))){
var inst_41367 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41422_41468 = state_41412__$1;
(statearr_41422_41468[(2)] = inst_41367);

(statearr_41422_41468[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (31))){
var inst_41391 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41412__$1 = state_41412;
if(cljs.core.truth_(inst_41391)){
var statearr_41423_41469 = state_41412__$1;
(statearr_41423_41469[(1)] = (34));

} else {
var statearr_41424_41470 = state_41412__$1;
(statearr_41424_41470[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (32))){
var inst_41400 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41425_41471 = state_41412__$1;
(statearr_41425_41471[(2)] = inst_41400);

(statearr_41425_41471[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (33))){
var inst_41389 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41426_41472 = state_41412__$1;
(statearr_41426_41472[(2)] = inst_41389);

(statearr_41426_41472[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (13))){
var inst_41350 = figwheel.client.heads_up.clear.call(null);
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(16),inst_41350);
} else {
if((state_val_41413 === (22))){
var inst_41371 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41372 = figwheel.client.heads_up.append_message.call(null,inst_41371);
var state_41412__$1 = state_41412;
var statearr_41427_41473 = state_41412__$1;
(statearr_41427_41473[(2)] = inst_41372);

(statearr_41427_41473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (36))){
var inst_41398 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41428_41474 = state_41412__$1;
(statearr_41428_41474[(2)] = inst_41398);

(statearr_41428_41474[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (29))){
var inst_41382 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41429_41475 = state_41412__$1;
(statearr_41429_41475[(2)] = inst_41382);

(statearr_41429_41475[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (6))){
var inst_41331 = (state_41412[(7)]);
var state_41412__$1 = state_41412;
var statearr_41430_41476 = state_41412__$1;
(statearr_41430_41476[(2)] = inst_41331);

(statearr_41430_41476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (28))){
var inst_41378 = (state_41412[(2)]);
var inst_41379 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41380 = figwheel.client.heads_up.display_warning.call(null,inst_41379);
var state_41412__$1 = (function (){var statearr_41431 = state_41412;
(statearr_41431[(8)] = inst_41378);

return statearr_41431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(29),inst_41380);
} else {
if((state_val_41413 === (25))){
var inst_41376 = figwheel.client.heads_up.clear.call(null);
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(28),inst_41376);
} else {
if((state_val_41413 === (34))){
var inst_41393 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(37),inst_41393);
} else {
if((state_val_41413 === (17))){
var inst_41358 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41432_41477 = state_41412__$1;
(statearr_41432_41477[(2)] = inst_41358);

(statearr_41432_41477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (3))){
var inst_41348 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41412__$1 = state_41412;
if(cljs.core.truth_(inst_41348)){
var statearr_41433_41478 = state_41412__$1;
(statearr_41433_41478[(1)] = (13));

} else {
var statearr_41434_41479 = state_41412__$1;
(statearr_41434_41479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (12))){
var inst_41344 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41435_41480 = state_41412__$1;
(statearr_41435_41480[(2)] = inst_41344);

(statearr_41435_41480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (2))){
var inst_41331 = (state_41412[(7)]);
var inst_41331__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41412__$1 = (function (){var statearr_41436 = state_41412;
(statearr_41436[(7)] = inst_41331__$1);

return statearr_41436;
})();
if(cljs.core.truth_(inst_41331__$1)){
var statearr_41437_41481 = state_41412__$1;
(statearr_41437_41481[(1)] = (5));

} else {
var statearr_41438_41482 = state_41412__$1;
(statearr_41438_41482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (23))){
var inst_41374 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41412__$1 = state_41412;
if(cljs.core.truth_(inst_41374)){
var statearr_41439_41483 = state_41412__$1;
(statearr_41439_41483[(1)] = (25));

} else {
var statearr_41440_41484 = state_41412__$1;
(statearr_41440_41484[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (35))){
var state_41412__$1 = state_41412;
var statearr_41441_41485 = state_41412__$1;
(statearr_41441_41485[(2)] = null);

(statearr_41441_41485[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (19))){
var inst_41369 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41412__$1 = state_41412;
if(cljs.core.truth_(inst_41369)){
var statearr_41442_41486 = state_41412__$1;
(statearr_41442_41486[(1)] = (22));

} else {
var statearr_41443_41487 = state_41412__$1;
(statearr_41443_41487[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (11))){
var inst_41340 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41444_41488 = state_41412__$1;
(statearr_41444_41488[(2)] = inst_41340);

(statearr_41444_41488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (9))){
var inst_41342 = figwheel.client.heads_up.clear.call(null);
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(12),inst_41342);
} else {
if((state_val_41413 === (5))){
var inst_41333 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41412__$1 = state_41412;
var statearr_41445_41489 = state_41412__$1;
(statearr_41445_41489[(2)] = inst_41333);

(statearr_41445_41489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (14))){
var inst_41360 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41412__$1 = state_41412;
if(cljs.core.truth_(inst_41360)){
var statearr_41446_41490 = state_41412__$1;
(statearr_41446_41490[(1)] = (18));

} else {
var statearr_41447_41491 = state_41412__$1;
(statearr_41447_41491[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (26))){
var inst_41384 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41412__$1 = state_41412;
if(cljs.core.truth_(inst_41384)){
var statearr_41448_41492 = state_41412__$1;
(statearr_41448_41492[(1)] = (30));

} else {
var statearr_41449_41493 = state_41412__$1;
(statearr_41449_41493[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (16))){
var inst_41352 = (state_41412[(2)]);
var inst_41353 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41354 = figwheel.client.format_messages.call(null,inst_41353);
var inst_41355 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41356 = figwheel.client.heads_up.display_error.call(null,inst_41354,inst_41355);
var state_41412__$1 = (function (){var statearr_41450 = state_41412;
(statearr_41450[(9)] = inst_41352);

return statearr_41450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(17),inst_41356);
} else {
if((state_val_41413 === (30))){
var inst_41386 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41387 = figwheel.client.heads_up.display_warning.call(null,inst_41386);
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(33),inst_41387);
} else {
if((state_val_41413 === (10))){
var inst_41346 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41451_41494 = state_41412__$1;
(statearr_41451_41494[(2)] = inst_41346);

(statearr_41451_41494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (18))){
var inst_41362 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41363 = figwheel.client.format_messages.call(null,inst_41362);
var inst_41364 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41365 = figwheel.client.heads_up.display_error.call(null,inst_41363,inst_41364);
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(21),inst_41365);
} else {
if((state_val_41413 === (37))){
var inst_41395 = (state_41412[(2)]);
var state_41412__$1 = state_41412;
var statearr_41452_41495 = state_41412__$1;
(statearr_41452_41495[(2)] = inst_41395);

(statearr_41452_41495[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41413 === (8))){
var inst_41338 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41412__$1 = state_41412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41412__$1,(11),inst_41338);
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
});})(c__32314__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32293__auto__,c__32314__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto____0 = (function (){
var statearr_41456 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41456[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto__);

(statearr_41456[(1)] = (1));

return statearr_41456;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto____1 = (function (state_41412){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_41412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e41457){if((e41457 instanceof Object)){
var ex__32297__auto__ = e41457;
var statearr_41458_41496 = state_41412;
(statearr_41458_41496[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41497 = state_41412;
state_41412 = G__41497;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto__ = function(state_41412){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto____1.call(this,state_41412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto__,msg_hist,msg_names,msg))
})();
var state__32316__auto__ = (function (){var statearr_41459 = f__32315__auto__.call(null);
(statearr_41459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto__);

return statearr_41459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto__,msg_hist,msg_names,msg))
);

return c__32314__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32314__auto___41560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___41560,ch){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___41560,ch){
return (function (state_41543){
var state_val_41544 = (state_41543[(1)]);
if((state_val_41544 === (1))){
var state_41543__$1 = state_41543;
var statearr_41545_41561 = state_41543__$1;
(statearr_41545_41561[(2)] = null);

(statearr_41545_41561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41544 === (2))){
var state_41543__$1 = state_41543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41543__$1,(4),ch);
} else {
if((state_val_41544 === (3))){
var inst_41541 = (state_41543[(2)]);
var state_41543__$1 = state_41543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41543__$1,inst_41541);
} else {
if((state_val_41544 === (4))){
var inst_41531 = (state_41543[(7)]);
var inst_41531__$1 = (state_41543[(2)]);
var state_41543__$1 = (function (){var statearr_41546 = state_41543;
(statearr_41546[(7)] = inst_41531__$1);

return statearr_41546;
})();
if(cljs.core.truth_(inst_41531__$1)){
var statearr_41547_41562 = state_41543__$1;
(statearr_41547_41562[(1)] = (5));

} else {
var statearr_41548_41563 = state_41543__$1;
(statearr_41548_41563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41544 === (5))){
var inst_41531 = (state_41543[(7)]);
var inst_41533 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41531);
var state_41543__$1 = state_41543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41543__$1,(8),inst_41533);
} else {
if((state_val_41544 === (6))){
var state_41543__$1 = state_41543;
var statearr_41549_41564 = state_41543__$1;
(statearr_41549_41564[(2)] = null);

(statearr_41549_41564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41544 === (7))){
var inst_41539 = (state_41543[(2)]);
var state_41543__$1 = state_41543;
var statearr_41550_41565 = state_41543__$1;
(statearr_41550_41565[(2)] = inst_41539);

(statearr_41550_41565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41544 === (8))){
var inst_41535 = (state_41543[(2)]);
var state_41543__$1 = (function (){var statearr_41551 = state_41543;
(statearr_41551[(8)] = inst_41535);

return statearr_41551;
})();
var statearr_41552_41566 = state_41543__$1;
(statearr_41552_41566[(2)] = null);

(statearr_41552_41566[(1)] = (2));


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
});})(c__32314__auto___41560,ch))
;
return ((function (switch__32293__auto__,c__32314__auto___41560,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32294__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32294__auto____0 = (function (){
var statearr_41556 = [null,null,null,null,null,null,null,null,null];
(statearr_41556[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32294__auto__);

(statearr_41556[(1)] = (1));

return statearr_41556;
});
var figwheel$client$heads_up_plugin_$_state_machine__32294__auto____1 = (function (state_41543){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_41543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e41557){if((e41557 instanceof Object)){
var ex__32297__auto__ = e41557;
var statearr_41558_41567 = state_41543;
(statearr_41558_41567[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41568 = state_41543;
state_41543 = G__41568;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32294__auto__ = function(state_41543){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32294__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32294__auto____1.call(this,state_41543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32294__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32294__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___41560,ch))
})();
var state__32316__auto__ = (function (){var statearr_41559 = f__32315__auto__.call(null);
(statearr_41559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___41560);

return statearr_41559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___41560,ch))
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
var c__32314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto__){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto__){
return (function (state_41589){
var state_val_41590 = (state_41589[(1)]);
if((state_val_41590 === (1))){
var inst_41584 = cljs.core.async.timeout.call(null,(3000));
var state_41589__$1 = state_41589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41589__$1,(2),inst_41584);
} else {
if((state_val_41590 === (2))){
var inst_41586 = (state_41589[(2)]);
var inst_41587 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41589__$1 = (function (){var statearr_41591 = state_41589;
(statearr_41591[(7)] = inst_41586);

return statearr_41591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41589__$1,inst_41587);
} else {
return null;
}
}
});})(c__32314__auto__))
;
return ((function (switch__32293__auto__,c__32314__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32294__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32294__auto____0 = (function (){
var statearr_41595 = [null,null,null,null,null,null,null,null];
(statearr_41595[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32294__auto__);

(statearr_41595[(1)] = (1));

return statearr_41595;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32294__auto____1 = (function (state_41589){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_41589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e41596){if((e41596 instanceof Object)){
var ex__32297__auto__ = e41596;
var statearr_41597_41599 = state_41589;
(statearr_41597_41599[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41600 = state_41589;
state_41589 = G__41600;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32294__auto__ = function(state_41589){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32294__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32294__auto____1.call(this,state_41589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32294__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32294__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto__))
})();
var state__32316__auto__ = (function (){var statearr_41598 = f__32315__auto__.call(null);
(statearr_41598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto__);

return statearr_41598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto__))
);

return c__32314__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41601){
var map__41608 = p__41601;
var map__41608__$1 = ((((!((map__41608 == null)))?((((map__41608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41608):map__41608);
var ed = map__41608__$1;
var formatted_exception = cljs.core.get.call(null,map__41608__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41608__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41608__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41610_41614 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41611_41615 = null;
var count__41612_41616 = (0);
var i__41613_41617 = (0);
while(true){
if((i__41613_41617 < count__41612_41616)){
var msg_41618 = cljs.core._nth.call(null,chunk__41611_41615,i__41613_41617);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41618);

var G__41619 = seq__41610_41614;
var G__41620 = chunk__41611_41615;
var G__41621 = count__41612_41616;
var G__41622 = (i__41613_41617 + (1));
seq__41610_41614 = G__41619;
chunk__41611_41615 = G__41620;
count__41612_41616 = G__41621;
i__41613_41617 = G__41622;
continue;
} else {
var temp__4425__auto___41623 = cljs.core.seq.call(null,seq__41610_41614);
if(temp__4425__auto___41623){
var seq__41610_41624__$1 = temp__4425__auto___41623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41610_41624__$1)){
var c__30316__auto___41625 = cljs.core.chunk_first.call(null,seq__41610_41624__$1);
var G__41626 = cljs.core.chunk_rest.call(null,seq__41610_41624__$1);
var G__41627 = c__30316__auto___41625;
var G__41628 = cljs.core.count.call(null,c__30316__auto___41625);
var G__41629 = (0);
seq__41610_41614 = G__41626;
chunk__41611_41615 = G__41627;
count__41612_41616 = G__41628;
i__41613_41617 = G__41629;
continue;
} else {
var msg_41630 = cljs.core.first.call(null,seq__41610_41624__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41630);

var G__41631 = cljs.core.next.call(null,seq__41610_41624__$1);
var G__41632 = null;
var G__41633 = (0);
var G__41634 = (0);
seq__41610_41614 = G__41631;
chunk__41611_41615 = G__41632;
count__41612_41616 = G__41633;
i__41613_41617 = G__41634;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41635){
var map__41638 = p__41635;
var map__41638__$1 = ((((!((map__41638 == null)))?((((map__41638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41638):map__41638);
var w = map__41638__$1;
var message = cljs.core.get.call(null,map__41638__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__29501__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29501__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29501__auto__;
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
var seq__41646 = cljs.core.seq.call(null,plugins);
var chunk__41647 = null;
var count__41648 = (0);
var i__41649 = (0);
while(true){
if((i__41649 < count__41648)){
var vec__41650 = cljs.core._nth.call(null,chunk__41647,i__41649);
var k = cljs.core.nth.call(null,vec__41650,(0),null);
var plugin = cljs.core.nth.call(null,vec__41650,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41652 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41646,chunk__41647,count__41648,i__41649,pl_41652,vec__41650,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41652.call(null,msg_hist);
});})(seq__41646,chunk__41647,count__41648,i__41649,pl_41652,vec__41650,k,plugin))
);
} else {
}

var G__41653 = seq__41646;
var G__41654 = chunk__41647;
var G__41655 = count__41648;
var G__41656 = (i__41649 + (1));
seq__41646 = G__41653;
chunk__41647 = G__41654;
count__41648 = G__41655;
i__41649 = G__41656;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41646);
if(temp__4425__auto__){
var seq__41646__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41646__$1)){
var c__30316__auto__ = cljs.core.chunk_first.call(null,seq__41646__$1);
var G__41657 = cljs.core.chunk_rest.call(null,seq__41646__$1);
var G__41658 = c__30316__auto__;
var G__41659 = cljs.core.count.call(null,c__30316__auto__);
var G__41660 = (0);
seq__41646 = G__41657;
chunk__41647 = G__41658;
count__41648 = G__41659;
i__41649 = G__41660;
continue;
} else {
var vec__41651 = cljs.core.first.call(null,seq__41646__$1);
var k = cljs.core.nth.call(null,vec__41651,(0),null);
var plugin = cljs.core.nth.call(null,vec__41651,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41661 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41646,chunk__41647,count__41648,i__41649,pl_41661,vec__41651,k,plugin,seq__41646__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41661.call(null,msg_hist);
});})(seq__41646,chunk__41647,count__41648,i__41649,pl_41661,vec__41651,k,plugin,seq__41646__$1,temp__4425__auto__))
);
} else {
}

var G__41662 = cljs.core.next.call(null,seq__41646__$1);
var G__41663 = null;
var G__41664 = (0);
var G__41665 = (0);
seq__41646 = G__41662;
chunk__41647 = G__41663;
count__41648 = G__41664;
i__41649 = G__41665;
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
var args41666 = [];
var len__30571__auto___41669 = arguments.length;
var i__30572__auto___41670 = (0);
while(true){
if((i__30572__auto___41670 < len__30571__auto___41669)){
args41666.push((arguments[i__30572__auto___41670]));

var G__41671 = (i__30572__auto___41670 + (1));
i__30572__auto___41670 = G__41671;
continue;
} else {
}
break;
}

var G__41668 = args41666.length;
switch (G__41668) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41666.length)].join('')));

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
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

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
var args__30578__auto__ = [];
var len__30571__auto___41677 = arguments.length;
var i__30572__auto___41678 = (0);
while(true){
if((i__30572__auto___41678 < len__30571__auto___41677)){
args__30578__auto__.push((arguments[i__30572__auto___41678]));

var G__41679 = (i__30572__auto___41678 + (1));
i__30572__auto___41678 = G__41679;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((0) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30579__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41674){
var map__41675 = p__41674;
var map__41675__$1 = ((((!((map__41675 == null)))?((((map__41675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41675):map__41675);
var opts = map__41675__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41673){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41673));
});

//# sourceMappingURL=client.js.map