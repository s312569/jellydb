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
var pred__41405 = cljs.core._EQ_;
var expr__41406 = (function (){var or__29414__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41405.call(null,"true",expr__41406))){
return true;
} else {
if(cljs.core.truth_(pred__41405.call(null,"false",expr__41406))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41406)].join('')));
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
var G__41408__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41409__i = 0, G__41409__a = new Array(arguments.length -  0);
while (G__41409__i < G__41409__a.length) {G__41409__a[G__41409__i] = arguments[G__41409__i + 0]; ++G__41409__i;}
  args = new cljs.core.IndexedSeq(G__41409__a,0);
} 
return G__41408__delegate.call(this,args);};
G__41408.cljs$lang$maxFixedArity = 0;
G__41408.cljs$lang$applyTo = (function (arglist__41410){
var args = cljs.core.seq(arglist__41410);
return G__41408__delegate(args);
});
G__41408.cljs$core$IFn$_invoke$arity$variadic = G__41408__delegate;
return G__41408;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41411){
var map__41414 = p__41411;
var map__41414__$1 = ((((!((map__41414 == null)))?((((map__41414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41414):map__41414);
var message = cljs.core.get.call(null,map__41414__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41414__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29414__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29402__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29402__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29402__auto__;
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
var c__31439__auto___41576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___41576,ch){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___41576,ch){
return (function (state_41545){
var state_val_41546 = (state_41545[(1)]);
if((state_val_41546 === (7))){
var inst_41541 = (state_41545[(2)]);
var state_41545__$1 = state_41545;
var statearr_41547_41577 = state_41545__$1;
(statearr_41547_41577[(2)] = inst_41541);

(statearr_41547_41577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (1))){
var state_41545__$1 = state_41545;
var statearr_41548_41578 = state_41545__$1;
(statearr_41548_41578[(2)] = null);

(statearr_41548_41578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (4))){
var inst_41498 = (state_41545[(7)]);
var inst_41498__$1 = (state_41545[(2)]);
var state_41545__$1 = (function (){var statearr_41549 = state_41545;
(statearr_41549[(7)] = inst_41498__$1);

return statearr_41549;
})();
if(cljs.core.truth_(inst_41498__$1)){
var statearr_41550_41579 = state_41545__$1;
(statearr_41550_41579[(1)] = (5));

} else {
var statearr_41551_41580 = state_41545__$1;
(statearr_41551_41580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (15))){
var inst_41505 = (state_41545[(8)]);
var inst_41520 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41505);
var inst_41521 = cljs.core.first.call(null,inst_41520);
var inst_41522 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41521);
var inst_41523 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41522)].join('');
var inst_41524 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41523);
var state_41545__$1 = state_41545;
var statearr_41552_41581 = state_41545__$1;
(statearr_41552_41581[(2)] = inst_41524);

(statearr_41552_41581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (13))){
var inst_41529 = (state_41545[(2)]);
var state_41545__$1 = state_41545;
var statearr_41553_41582 = state_41545__$1;
(statearr_41553_41582[(2)] = inst_41529);

(statearr_41553_41582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (6))){
var state_41545__$1 = state_41545;
var statearr_41554_41583 = state_41545__$1;
(statearr_41554_41583[(2)] = null);

(statearr_41554_41583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (17))){
var inst_41527 = (state_41545[(2)]);
var state_41545__$1 = state_41545;
var statearr_41555_41584 = state_41545__$1;
(statearr_41555_41584[(2)] = inst_41527);

(statearr_41555_41584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (3))){
var inst_41543 = (state_41545[(2)]);
var state_41545__$1 = state_41545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41545__$1,inst_41543);
} else {
if((state_val_41546 === (12))){
var inst_41504 = (state_41545[(9)]);
var inst_41518 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41504,opts);
var state_41545__$1 = state_41545;
if(cljs.core.truth_(inst_41518)){
var statearr_41556_41585 = state_41545__$1;
(statearr_41556_41585[(1)] = (15));

} else {
var statearr_41557_41586 = state_41545__$1;
(statearr_41557_41586[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (2))){
var state_41545__$1 = state_41545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41545__$1,(4),ch);
} else {
if((state_val_41546 === (11))){
var inst_41505 = (state_41545[(8)]);
var inst_41510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41511 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41505);
var inst_41512 = cljs.core.async.timeout.call(null,(1000));
var inst_41513 = [inst_41511,inst_41512];
var inst_41514 = (new cljs.core.PersistentVector(null,2,(5),inst_41510,inst_41513,null));
var state_41545__$1 = state_41545;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41545__$1,(14),inst_41514);
} else {
if((state_val_41546 === (9))){
var inst_41505 = (state_41545[(8)]);
var inst_41531 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41532 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41505);
var inst_41533 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41532);
var inst_41534 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41533)].join('');
var inst_41535 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41534);
var state_41545__$1 = (function (){var statearr_41558 = state_41545;
(statearr_41558[(10)] = inst_41531);

return statearr_41558;
})();
var statearr_41559_41587 = state_41545__$1;
(statearr_41559_41587[(2)] = inst_41535);

(statearr_41559_41587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (5))){
var inst_41498 = (state_41545[(7)]);
var inst_41500 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41501 = (new cljs.core.PersistentArrayMap(null,2,inst_41500,null));
var inst_41502 = (new cljs.core.PersistentHashSet(null,inst_41501,null));
var inst_41503 = figwheel.client.focus_msgs.call(null,inst_41502,inst_41498);
var inst_41504 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41503);
var inst_41505 = cljs.core.first.call(null,inst_41503);
var inst_41506 = figwheel.client.autoload_QMARK_.call(null);
var state_41545__$1 = (function (){var statearr_41560 = state_41545;
(statearr_41560[(9)] = inst_41504);

(statearr_41560[(8)] = inst_41505);

return statearr_41560;
})();
if(cljs.core.truth_(inst_41506)){
var statearr_41561_41588 = state_41545__$1;
(statearr_41561_41588[(1)] = (8));

} else {
var statearr_41562_41589 = state_41545__$1;
(statearr_41562_41589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (14))){
var inst_41516 = (state_41545[(2)]);
var state_41545__$1 = state_41545;
var statearr_41563_41590 = state_41545__$1;
(statearr_41563_41590[(2)] = inst_41516);

(statearr_41563_41590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (16))){
var state_41545__$1 = state_41545;
var statearr_41564_41591 = state_41545__$1;
(statearr_41564_41591[(2)] = null);

(statearr_41564_41591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (10))){
var inst_41537 = (state_41545[(2)]);
var state_41545__$1 = (function (){var statearr_41565 = state_41545;
(statearr_41565[(11)] = inst_41537);

return statearr_41565;
})();
var statearr_41566_41592 = state_41545__$1;
(statearr_41566_41592[(2)] = null);

(statearr_41566_41592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41546 === (8))){
var inst_41504 = (state_41545[(9)]);
var inst_41508 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41504,opts);
var state_41545__$1 = state_41545;
if(cljs.core.truth_(inst_41508)){
var statearr_41567_41593 = state_41545__$1;
(statearr_41567_41593[(1)] = (11));

} else {
var statearr_41568_41594 = state_41545__$1;
(statearr_41568_41594[(1)] = (12));

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
});})(c__31439__auto___41576,ch))
;
return ((function (switch__31418__auto__,c__31439__auto___41576,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____0 = (function (){
var statearr_41572 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41572[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__);

(statearr_41572[(1)] = (1));

return statearr_41572;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____1 = (function (state_41545){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_41545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e41573){if((e41573 instanceof Object)){
var ex__31422__auto__ = e41573;
var statearr_41574_41595 = state_41545;
(statearr_41574_41595[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41596 = state_41545;
state_41545 = G__41596;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__ = function(state_41545){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____1.call(this,state_41545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31419__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___41576,ch))
})();
var state__31441__auto__ = (function (){var statearr_41575 = f__31440__auto__.call(null);
(statearr_41575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___41576);

return statearr_41575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___41576,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41597_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41597_SHARP_));
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
var base_path_41604 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41604){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_41602 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_41603 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_41602,_STAR_print_newline_STAR_41603,base_path_41604){
return (function() { 
var G__41605__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41606__i = 0, G__41606__a = new Array(arguments.length -  0);
while (G__41606__i < G__41606__a.length) {G__41606__a[G__41606__i] = arguments[G__41606__i + 0]; ++G__41606__i;}
  args = new cljs.core.IndexedSeq(G__41606__a,0);
} 
return G__41605__delegate.call(this,args);};
G__41605.cljs$lang$maxFixedArity = 0;
G__41605.cljs$lang$applyTo = (function (arglist__41607){
var args = cljs.core.seq(arglist__41607);
return G__41605__delegate(args);
});
G__41605.cljs$core$IFn$_invoke$arity$variadic = G__41605__delegate;
return G__41605;
})()
;})(_STAR_print_fn_STAR_41602,_STAR_print_newline_STAR_41603,base_path_41604))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41603;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41602;
}}catch (e41601){if((e41601 instanceof Error)){
var e = e41601;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41604], null));
} else {
var e = e41601;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41604))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41608){
var map__41615 = p__41608;
var map__41615__$1 = ((((!((map__41615 == null)))?((((map__41615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41615):map__41615);
var opts = map__41615__$1;
var build_id = cljs.core.get.call(null,map__41615__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41615,map__41615__$1,opts,build_id){
return (function (p__41617){
var vec__41618 = p__41617;
var map__41619 = cljs.core.nth.call(null,vec__41618,(0),null);
var map__41619__$1 = ((((!((map__41619 == null)))?((((map__41619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41619):map__41619);
var msg = map__41619__$1;
var msg_name = cljs.core.get.call(null,map__41619__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41618,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41618,map__41619,map__41619__$1,msg,msg_name,_,map__41615,map__41615__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41618,map__41619,map__41619__$1,msg,msg_name,_,map__41615,map__41615__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41615,map__41615__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41625){
var vec__41626 = p__41625;
var map__41627 = cljs.core.nth.call(null,vec__41626,(0),null);
var map__41627__$1 = ((((!((map__41627 == null)))?((((map__41627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41627):map__41627);
var msg = map__41627__$1;
var msg_name = cljs.core.get.call(null,map__41627__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41626,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41629){
var map__41639 = p__41629;
var map__41639__$1 = ((((!((map__41639 == null)))?((((map__41639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41639):map__41639);
var on_compile_warning = cljs.core.get.call(null,map__41639__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41639__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41639,map__41639__$1,on_compile_warning,on_compile_fail){
return (function (p__41641){
var vec__41642 = p__41641;
var map__41643 = cljs.core.nth.call(null,vec__41642,(0),null);
var map__41643__$1 = ((((!((map__41643 == null)))?((((map__41643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41643):map__41643);
var msg = map__41643__$1;
var msg_name = cljs.core.get.call(null,map__41643__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41642,(1));
var pred__41645 = cljs.core._EQ_;
var expr__41646 = msg_name;
if(cljs.core.truth_(pred__41645.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41646))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41645.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41646))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41639,map__41639__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto__,msg_hist,msg_names,msg){
return (function (state_41862){
var state_val_41863 = (state_41862[(1)]);
if((state_val_41863 === (7))){
var inst_41786 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
if(cljs.core.truth_(inst_41786)){
var statearr_41864_41910 = state_41862__$1;
(statearr_41864_41910[(1)] = (8));

} else {
var statearr_41865_41911 = state_41862__$1;
(statearr_41865_41911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (20))){
var inst_41856 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41866_41912 = state_41862__$1;
(statearr_41866_41912[(2)] = inst_41856);

(statearr_41866_41912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (27))){
var inst_41852 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41867_41913 = state_41862__$1;
(statearr_41867_41913[(2)] = inst_41852);

(statearr_41867_41913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (1))){
var inst_41779 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41862__$1 = state_41862;
if(cljs.core.truth_(inst_41779)){
var statearr_41868_41914 = state_41862__$1;
(statearr_41868_41914[(1)] = (2));

} else {
var statearr_41869_41915 = state_41862__$1;
(statearr_41869_41915[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (24))){
var inst_41854 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41870_41916 = state_41862__$1;
(statearr_41870_41916[(2)] = inst_41854);

(statearr_41870_41916[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (4))){
var inst_41860 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41862__$1,inst_41860);
} else {
if((state_val_41863 === (15))){
var inst_41858 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41871_41917 = state_41862__$1;
(statearr_41871_41917[(2)] = inst_41858);

(statearr_41871_41917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (21))){
var inst_41817 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41872_41918 = state_41862__$1;
(statearr_41872_41918[(2)] = inst_41817);

(statearr_41872_41918[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (31))){
var inst_41841 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41862__$1 = state_41862;
if(cljs.core.truth_(inst_41841)){
var statearr_41873_41919 = state_41862__$1;
(statearr_41873_41919[(1)] = (34));

} else {
var statearr_41874_41920 = state_41862__$1;
(statearr_41874_41920[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (32))){
var inst_41850 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41875_41921 = state_41862__$1;
(statearr_41875_41921[(2)] = inst_41850);

(statearr_41875_41921[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (33))){
var inst_41839 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41876_41922 = state_41862__$1;
(statearr_41876_41922[(2)] = inst_41839);

(statearr_41876_41922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (13))){
var inst_41800 = figwheel.client.heads_up.clear.call(null);
var state_41862__$1 = state_41862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41862__$1,(16),inst_41800);
} else {
if((state_val_41863 === (22))){
var inst_41821 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41822 = figwheel.client.heads_up.append_message.call(null,inst_41821);
var state_41862__$1 = state_41862;
var statearr_41877_41923 = state_41862__$1;
(statearr_41877_41923[(2)] = inst_41822);

(statearr_41877_41923[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (36))){
var inst_41848 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41878_41924 = state_41862__$1;
(statearr_41878_41924[(2)] = inst_41848);

(statearr_41878_41924[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (29))){
var inst_41832 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41879_41925 = state_41862__$1;
(statearr_41879_41925[(2)] = inst_41832);

(statearr_41879_41925[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (6))){
var inst_41781 = (state_41862[(7)]);
var state_41862__$1 = state_41862;
var statearr_41880_41926 = state_41862__$1;
(statearr_41880_41926[(2)] = inst_41781);

(statearr_41880_41926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (28))){
var inst_41828 = (state_41862[(2)]);
var inst_41829 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41830 = figwheel.client.heads_up.display_warning.call(null,inst_41829);
var state_41862__$1 = (function (){var statearr_41881 = state_41862;
(statearr_41881[(8)] = inst_41828);

return statearr_41881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41862__$1,(29),inst_41830);
} else {
if((state_val_41863 === (25))){
var inst_41826 = figwheel.client.heads_up.clear.call(null);
var state_41862__$1 = state_41862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41862__$1,(28),inst_41826);
} else {
if((state_val_41863 === (34))){
var inst_41843 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41862__$1 = state_41862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41862__$1,(37),inst_41843);
} else {
if((state_val_41863 === (17))){
var inst_41808 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41882_41927 = state_41862__$1;
(statearr_41882_41927[(2)] = inst_41808);

(statearr_41882_41927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (3))){
var inst_41798 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41862__$1 = state_41862;
if(cljs.core.truth_(inst_41798)){
var statearr_41883_41928 = state_41862__$1;
(statearr_41883_41928[(1)] = (13));

} else {
var statearr_41884_41929 = state_41862__$1;
(statearr_41884_41929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (12))){
var inst_41794 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41885_41930 = state_41862__$1;
(statearr_41885_41930[(2)] = inst_41794);

(statearr_41885_41930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (2))){
var inst_41781 = (state_41862[(7)]);
var inst_41781__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41862__$1 = (function (){var statearr_41886 = state_41862;
(statearr_41886[(7)] = inst_41781__$1);

return statearr_41886;
})();
if(cljs.core.truth_(inst_41781__$1)){
var statearr_41887_41931 = state_41862__$1;
(statearr_41887_41931[(1)] = (5));

} else {
var statearr_41888_41932 = state_41862__$1;
(statearr_41888_41932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (23))){
var inst_41824 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41862__$1 = state_41862;
if(cljs.core.truth_(inst_41824)){
var statearr_41889_41933 = state_41862__$1;
(statearr_41889_41933[(1)] = (25));

} else {
var statearr_41890_41934 = state_41862__$1;
(statearr_41890_41934[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (35))){
var state_41862__$1 = state_41862;
var statearr_41891_41935 = state_41862__$1;
(statearr_41891_41935[(2)] = null);

(statearr_41891_41935[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (19))){
var inst_41819 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41862__$1 = state_41862;
if(cljs.core.truth_(inst_41819)){
var statearr_41892_41936 = state_41862__$1;
(statearr_41892_41936[(1)] = (22));

} else {
var statearr_41893_41937 = state_41862__$1;
(statearr_41893_41937[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (11))){
var inst_41790 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41894_41938 = state_41862__$1;
(statearr_41894_41938[(2)] = inst_41790);

(statearr_41894_41938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (9))){
var inst_41792 = figwheel.client.heads_up.clear.call(null);
var state_41862__$1 = state_41862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41862__$1,(12),inst_41792);
} else {
if((state_val_41863 === (5))){
var inst_41783 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41862__$1 = state_41862;
var statearr_41895_41939 = state_41862__$1;
(statearr_41895_41939[(2)] = inst_41783);

(statearr_41895_41939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (14))){
var inst_41810 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41862__$1 = state_41862;
if(cljs.core.truth_(inst_41810)){
var statearr_41896_41940 = state_41862__$1;
(statearr_41896_41940[(1)] = (18));

} else {
var statearr_41897_41941 = state_41862__$1;
(statearr_41897_41941[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (26))){
var inst_41834 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41862__$1 = state_41862;
if(cljs.core.truth_(inst_41834)){
var statearr_41898_41942 = state_41862__$1;
(statearr_41898_41942[(1)] = (30));

} else {
var statearr_41899_41943 = state_41862__$1;
(statearr_41899_41943[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (16))){
var inst_41802 = (state_41862[(2)]);
var inst_41803 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41804 = figwheel.client.format_messages.call(null,inst_41803);
var inst_41805 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41806 = figwheel.client.heads_up.display_error.call(null,inst_41804,inst_41805);
var state_41862__$1 = (function (){var statearr_41900 = state_41862;
(statearr_41900[(9)] = inst_41802);

return statearr_41900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41862__$1,(17),inst_41806);
} else {
if((state_val_41863 === (30))){
var inst_41836 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41837 = figwheel.client.heads_up.display_warning.call(null,inst_41836);
var state_41862__$1 = state_41862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41862__$1,(33),inst_41837);
} else {
if((state_val_41863 === (10))){
var inst_41796 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41901_41944 = state_41862__$1;
(statearr_41901_41944[(2)] = inst_41796);

(statearr_41901_41944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (18))){
var inst_41812 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41813 = figwheel.client.format_messages.call(null,inst_41812);
var inst_41814 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41815 = figwheel.client.heads_up.display_error.call(null,inst_41813,inst_41814);
var state_41862__$1 = state_41862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41862__$1,(21),inst_41815);
} else {
if((state_val_41863 === (37))){
var inst_41845 = (state_41862[(2)]);
var state_41862__$1 = state_41862;
var statearr_41902_41945 = state_41862__$1;
(statearr_41902_41945[(2)] = inst_41845);

(statearr_41902_41945[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41863 === (8))){
var inst_41788 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41862__$1 = state_41862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41862__$1,(11),inst_41788);
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
});})(c__31439__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31418__auto__,c__31439__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____0 = (function (){
var statearr_41906 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41906[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__);

(statearr_41906[(1)] = (1));

return statearr_41906;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____1 = (function (state_41862){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_41862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e41907){if((e41907 instanceof Object)){
var ex__31422__auto__ = e41907;
var statearr_41908_41946 = state_41862;
(statearr_41908_41946[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41947 = state_41862;
state_41862 = G__41947;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__ = function(state_41862){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____1.call(this,state_41862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto__,msg_hist,msg_names,msg))
})();
var state__31441__auto__ = (function (){var statearr_41909 = f__31440__auto__.call(null);
(statearr_41909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto__);

return statearr_41909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto__,msg_hist,msg_names,msg))
);

return c__31439__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31439__auto___42010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___42010,ch){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___42010,ch){
return (function (state_41993){
var state_val_41994 = (state_41993[(1)]);
if((state_val_41994 === (1))){
var state_41993__$1 = state_41993;
var statearr_41995_42011 = state_41993__$1;
(statearr_41995_42011[(2)] = null);

(statearr_41995_42011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (2))){
var state_41993__$1 = state_41993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41993__$1,(4),ch);
} else {
if((state_val_41994 === (3))){
var inst_41991 = (state_41993[(2)]);
var state_41993__$1 = state_41993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41993__$1,inst_41991);
} else {
if((state_val_41994 === (4))){
var inst_41981 = (state_41993[(7)]);
var inst_41981__$1 = (state_41993[(2)]);
var state_41993__$1 = (function (){var statearr_41996 = state_41993;
(statearr_41996[(7)] = inst_41981__$1);

return statearr_41996;
})();
if(cljs.core.truth_(inst_41981__$1)){
var statearr_41997_42012 = state_41993__$1;
(statearr_41997_42012[(1)] = (5));

} else {
var statearr_41998_42013 = state_41993__$1;
(statearr_41998_42013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (5))){
var inst_41981 = (state_41993[(7)]);
var inst_41983 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41981);
var state_41993__$1 = state_41993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41993__$1,(8),inst_41983);
} else {
if((state_val_41994 === (6))){
var state_41993__$1 = state_41993;
var statearr_41999_42014 = state_41993__$1;
(statearr_41999_42014[(2)] = null);

(statearr_41999_42014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (7))){
var inst_41989 = (state_41993[(2)]);
var state_41993__$1 = state_41993;
var statearr_42000_42015 = state_41993__$1;
(statearr_42000_42015[(2)] = inst_41989);

(statearr_42000_42015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (8))){
var inst_41985 = (state_41993[(2)]);
var state_41993__$1 = (function (){var statearr_42001 = state_41993;
(statearr_42001[(8)] = inst_41985);

return statearr_42001;
})();
var statearr_42002_42016 = state_41993__$1;
(statearr_42002_42016[(2)] = null);

(statearr_42002_42016[(1)] = (2));


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
});})(c__31439__auto___42010,ch))
;
return ((function (switch__31418__auto__,c__31439__auto___42010,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31419__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31419__auto____0 = (function (){
var statearr_42006 = [null,null,null,null,null,null,null,null,null];
(statearr_42006[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31419__auto__);

(statearr_42006[(1)] = (1));

return statearr_42006;
});
var figwheel$client$heads_up_plugin_$_state_machine__31419__auto____1 = (function (state_41993){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_41993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e42007){if((e42007 instanceof Object)){
var ex__31422__auto__ = e42007;
var statearr_42008_42017 = state_41993;
(statearr_42008_42017[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42018 = state_41993;
state_41993 = G__42018;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31419__auto__ = function(state_41993){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31419__auto____1.call(this,state_41993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31419__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31419__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___42010,ch))
})();
var state__31441__auto__ = (function (){var statearr_42009 = f__31440__auto__.call(null);
(statearr_42009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___42010);

return statearr_42009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___42010,ch))
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
var c__31439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto__){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto__){
return (function (state_42039){
var state_val_42040 = (state_42039[(1)]);
if((state_val_42040 === (1))){
var inst_42034 = cljs.core.async.timeout.call(null,(3000));
var state_42039__$1 = state_42039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42039__$1,(2),inst_42034);
} else {
if((state_val_42040 === (2))){
var inst_42036 = (state_42039[(2)]);
var inst_42037 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42039__$1 = (function (){var statearr_42041 = state_42039;
(statearr_42041[(7)] = inst_42036);

return statearr_42041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42039__$1,inst_42037);
} else {
return null;
}
}
});})(c__31439__auto__))
;
return ((function (switch__31418__auto__,c__31439__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____0 = (function (){
var statearr_42045 = [null,null,null,null,null,null,null,null];
(statearr_42045[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__);

(statearr_42045[(1)] = (1));

return statearr_42045;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____1 = (function (state_42039){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_42039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e42046){if((e42046 instanceof Object)){
var ex__31422__auto__ = e42046;
var statearr_42047_42049 = state_42039;
(statearr_42047_42049[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42050 = state_42039;
state_42039 = G__42050;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__ = function(state_42039){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____1.call(this,state_42039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31419__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto__))
})();
var state__31441__auto__ = (function (){var statearr_42048 = f__31440__auto__.call(null);
(statearr_42048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto__);

return statearr_42048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto__))
);

return c__31439__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42051){
var map__42058 = p__42051;
var map__42058__$1 = ((((!((map__42058 == null)))?((((map__42058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42058):map__42058);
var ed = map__42058__$1;
var formatted_exception = cljs.core.get.call(null,map__42058__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42058__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42058__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42060_42064 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42061_42065 = null;
var count__42062_42066 = (0);
var i__42063_42067 = (0);
while(true){
if((i__42063_42067 < count__42062_42066)){
var msg_42068 = cljs.core._nth.call(null,chunk__42061_42065,i__42063_42067);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42068);

var G__42069 = seq__42060_42064;
var G__42070 = chunk__42061_42065;
var G__42071 = count__42062_42066;
var G__42072 = (i__42063_42067 + (1));
seq__42060_42064 = G__42069;
chunk__42061_42065 = G__42070;
count__42062_42066 = G__42071;
i__42063_42067 = G__42072;
continue;
} else {
var temp__4425__auto___42073 = cljs.core.seq.call(null,seq__42060_42064);
if(temp__4425__auto___42073){
var seq__42060_42074__$1 = temp__4425__auto___42073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42060_42074__$1)){
var c__30217__auto___42075 = cljs.core.chunk_first.call(null,seq__42060_42074__$1);
var G__42076 = cljs.core.chunk_rest.call(null,seq__42060_42074__$1);
var G__42077 = c__30217__auto___42075;
var G__42078 = cljs.core.count.call(null,c__30217__auto___42075);
var G__42079 = (0);
seq__42060_42064 = G__42076;
chunk__42061_42065 = G__42077;
count__42062_42066 = G__42078;
i__42063_42067 = G__42079;
continue;
} else {
var msg_42080 = cljs.core.first.call(null,seq__42060_42074__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42080);

var G__42081 = cljs.core.next.call(null,seq__42060_42074__$1);
var G__42082 = null;
var G__42083 = (0);
var G__42084 = (0);
seq__42060_42064 = G__42081;
chunk__42061_42065 = G__42082;
count__42062_42066 = G__42083;
i__42063_42067 = G__42084;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42085){
var map__42088 = p__42085;
var map__42088__$1 = ((((!((map__42088 == null)))?((((map__42088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42088):map__42088);
var w = map__42088__$1;
var message = cljs.core.get.call(null,map__42088__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__29402__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29402__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29402__auto__;
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
var seq__42096 = cljs.core.seq.call(null,plugins);
var chunk__42097 = null;
var count__42098 = (0);
var i__42099 = (0);
while(true){
if((i__42099 < count__42098)){
var vec__42100 = cljs.core._nth.call(null,chunk__42097,i__42099);
var k = cljs.core.nth.call(null,vec__42100,(0),null);
var plugin = cljs.core.nth.call(null,vec__42100,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42102 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42096,chunk__42097,count__42098,i__42099,pl_42102,vec__42100,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42102.call(null,msg_hist);
});})(seq__42096,chunk__42097,count__42098,i__42099,pl_42102,vec__42100,k,plugin))
);
} else {
}

var G__42103 = seq__42096;
var G__42104 = chunk__42097;
var G__42105 = count__42098;
var G__42106 = (i__42099 + (1));
seq__42096 = G__42103;
chunk__42097 = G__42104;
count__42098 = G__42105;
i__42099 = G__42106;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42096);
if(temp__4425__auto__){
var seq__42096__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42096__$1)){
var c__30217__auto__ = cljs.core.chunk_first.call(null,seq__42096__$1);
var G__42107 = cljs.core.chunk_rest.call(null,seq__42096__$1);
var G__42108 = c__30217__auto__;
var G__42109 = cljs.core.count.call(null,c__30217__auto__);
var G__42110 = (0);
seq__42096 = G__42107;
chunk__42097 = G__42108;
count__42098 = G__42109;
i__42099 = G__42110;
continue;
} else {
var vec__42101 = cljs.core.first.call(null,seq__42096__$1);
var k = cljs.core.nth.call(null,vec__42101,(0),null);
var plugin = cljs.core.nth.call(null,vec__42101,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42111 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42096,chunk__42097,count__42098,i__42099,pl_42111,vec__42101,k,plugin,seq__42096__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42111.call(null,msg_hist);
});})(seq__42096,chunk__42097,count__42098,i__42099,pl_42111,vec__42101,k,plugin,seq__42096__$1,temp__4425__auto__))
);
} else {
}

var G__42112 = cljs.core.next.call(null,seq__42096__$1);
var G__42113 = null;
var G__42114 = (0);
var G__42115 = (0);
seq__42096 = G__42112;
chunk__42097 = G__42113;
count__42098 = G__42114;
i__42099 = G__42115;
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
var args42116 = [];
var len__30472__auto___42119 = arguments.length;
var i__30473__auto___42120 = (0);
while(true){
if((i__30473__auto___42120 < len__30472__auto___42119)){
args42116.push((arguments[i__30473__auto___42120]));

var G__42121 = (i__30473__auto___42120 + (1));
i__30473__auto___42120 = G__42121;
continue;
} else {
}
break;
}

var G__42118 = args42116.length;
switch (G__42118) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42116.length)].join('')));

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
var args__30479__auto__ = [];
var len__30472__auto___42127 = arguments.length;
var i__30473__auto___42128 = (0);
while(true){
if((i__30473__auto___42128 < len__30472__auto___42127)){
args__30479__auto__.push((arguments[i__30473__auto___42128]));

var G__42129 = (i__30473__auto___42128 + (1));
i__30473__auto___42128 = G__42129;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((0) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30480__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42124){
var map__42125 = p__42124;
var map__42125__$1 = ((((!((map__42125 == null)))?((((map__42125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42125):map__42125);
var opts = map__42125__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42123){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42123));
});

//# sourceMappingURL=client.js.map