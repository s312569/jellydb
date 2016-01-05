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
var pred__41059 = cljs.core._EQ_;
var expr__41060 = (function (){var or__29720__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41059.call(null,"true",expr__41060))){
return true;
} else {
if(cljs.core.truth_(pred__41059.call(null,"false",expr__41060))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41060)].join('')));
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
var G__41062__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41063__i = 0, G__41063__a = new Array(arguments.length -  0);
while (G__41063__i < G__41063__a.length) {G__41063__a[G__41063__i] = arguments[G__41063__i + 0]; ++G__41063__i;}
  args = new cljs.core.IndexedSeq(G__41063__a,0);
} 
return G__41062__delegate.call(this,args);};
G__41062.cljs$lang$maxFixedArity = 0;
G__41062.cljs$lang$applyTo = (function (arglist__41064){
var args = cljs.core.seq(arglist__41064);
return G__41062__delegate(args);
});
G__41062.cljs$core$IFn$_invoke$arity$variadic = G__41062__delegate;
return G__41062;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41065){
var map__41068 = p__41065;
var map__41068__$1 = ((((!((map__41068 == null)))?((((map__41068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41068):map__41068);
var message = cljs.core.get.call(null,map__41068__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41068__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29720__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29708__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29708__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29708__auto__;
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
var c__34593__auto___41230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___41230,ch){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___41230,ch){
return (function (state_41199){
var state_val_41200 = (state_41199[(1)]);
if((state_val_41200 === (7))){
var inst_41195 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
var statearr_41201_41231 = state_41199__$1;
(statearr_41201_41231[(2)] = inst_41195);

(statearr_41201_41231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (1))){
var state_41199__$1 = state_41199;
var statearr_41202_41232 = state_41199__$1;
(statearr_41202_41232[(2)] = null);

(statearr_41202_41232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (4))){
var inst_41152 = (state_41199[(7)]);
var inst_41152__$1 = (state_41199[(2)]);
var state_41199__$1 = (function (){var statearr_41203 = state_41199;
(statearr_41203[(7)] = inst_41152__$1);

return statearr_41203;
})();
if(cljs.core.truth_(inst_41152__$1)){
var statearr_41204_41233 = state_41199__$1;
(statearr_41204_41233[(1)] = (5));

} else {
var statearr_41205_41234 = state_41199__$1;
(statearr_41205_41234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (15))){
var inst_41159 = (state_41199[(8)]);
var inst_41174 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41159);
var inst_41175 = cljs.core.first.call(null,inst_41174);
var inst_41176 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41175);
var inst_41177 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41176)].join('');
var inst_41178 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41177);
var state_41199__$1 = state_41199;
var statearr_41206_41235 = state_41199__$1;
(statearr_41206_41235[(2)] = inst_41178);

(statearr_41206_41235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (13))){
var inst_41183 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
var statearr_41207_41236 = state_41199__$1;
(statearr_41207_41236[(2)] = inst_41183);

(statearr_41207_41236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (6))){
var state_41199__$1 = state_41199;
var statearr_41208_41237 = state_41199__$1;
(statearr_41208_41237[(2)] = null);

(statearr_41208_41237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (17))){
var inst_41181 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
var statearr_41209_41238 = state_41199__$1;
(statearr_41209_41238[(2)] = inst_41181);

(statearr_41209_41238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (3))){
var inst_41197 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41199__$1,inst_41197);
} else {
if((state_val_41200 === (12))){
var inst_41158 = (state_41199[(9)]);
var inst_41172 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41158,opts);
var state_41199__$1 = state_41199;
if(cljs.core.truth_(inst_41172)){
var statearr_41210_41239 = state_41199__$1;
(statearr_41210_41239[(1)] = (15));

} else {
var statearr_41211_41240 = state_41199__$1;
(statearr_41211_41240[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (2))){
var state_41199__$1 = state_41199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41199__$1,(4),ch);
} else {
if((state_val_41200 === (11))){
var inst_41159 = (state_41199[(8)]);
var inst_41164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41165 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41159);
var inst_41166 = cljs.core.async.timeout.call(null,(1000));
var inst_41167 = [inst_41165,inst_41166];
var inst_41168 = (new cljs.core.PersistentVector(null,2,(5),inst_41164,inst_41167,null));
var state_41199__$1 = state_41199;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41199__$1,(14),inst_41168);
} else {
if((state_val_41200 === (9))){
var inst_41159 = (state_41199[(8)]);
var inst_41185 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41186 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41159);
var inst_41187 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41186);
var inst_41188 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41187)].join('');
var inst_41189 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41188);
var state_41199__$1 = (function (){var statearr_41212 = state_41199;
(statearr_41212[(10)] = inst_41185);

return statearr_41212;
})();
var statearr_41213_41241 = state_41199__$1;
(statearr_41213_41241[(2)] = inst_41189);

(statearr_41213_41241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (5))){
var inst_41152 = (state_41199[(7)]);
var inst_41154 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41155 = (new cljs.core.PersistentArrayMap(null,2,inst_41154,null));
var inst_41156 = (new cljs.core.PersistentHashSet(null,inst_41155,null));
var inst_41157 = figwheel.client.focus_msgs.call(null,inst_41156,inst_41152);
var inst_41158 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41157);
var inst_41159 = cljs.core.first.call(null,inst_41157);
var inst_41160 = figwheel.client.autoload_QMARK_.call(null);
var state_41199__$1 = (function (){var statearr_41214 = state_41199;
(statearr_41214[(9)] = inst_41158);

(statearr_41214[(8)] = inst_41159);

return statearr_41214;
})();
if(cljs.core.truth_(inst_41160)){
var statearr_41215_41242 = state_41199__$1;
(statearr_41215_41242[(1)] = (8));

} else {
var statearr_41216_41243 = state_41199__$1;
(statearr_41216_41243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (14))){
var inst_41170 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
var statearr_41217_41244 = state_41199__$1;
(statearr_41217_41244[(2)] = inst_41170);

(statearr_41217_41244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (16))){
var state_41199__$1 = state_41199;
var statearr_41218_41245 = state_41199__$1;
(statearr_41218_41245[(2)] = null);

(statearr_41218_41245[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (10))){
var inst_41191 = (state_41199[(2)]);
var state_41199__$1 = (function (){var statearr_41219 = state_41199;
(statearr_41219[(11)] = inst_41191);

return statearr_41219;
})();
var statearr_41220_41246 = state_41199__$1;
(statearr_41220_41246[(2)] = null);

(statearr_41220_41246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (8))){
var inst_41158 = (state_41199[(9)]);
var inst_41162 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41158,opts);
var state_41199__$1 = state_41199;
if(cljs.core.truth_(inst_41162)){
var statearr_41221_41247 = state_41199__$1;
(statearr_41221_41247[(1)] = (11));

} else {
var statearr_41222_41248 = state_41199__$1;
(statearr_41222_41248[(1)] = (12));

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
});})(c__34593__auto___41230,ch))
;
return ((function (switch__34481__auto__,c__34593__auto___41230,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____0 = (function (){
var statearr_41226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41226[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__);

(statearr_41226[(1)] = (1));

return statearr_41226;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____1 = (function (state_41199){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_41199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e41227){if((e41227 instanceof Object)){
var ex__34485__auto__ = e41227;
var statearr_41228_41249 = state_41199;
(statearr_41228_41249[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41250 = state_41199;
state_41199 = G__41250;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__ = function(state_41199){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____1.call(this,state_41199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___41230,ch))
})();
var state__34595__auto__ = (function (){var statearr_41229 = f__34594__auto__.call(null);
(statearr_41229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___41230);

return statearr_41229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___41230,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41251_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41251_SHARP_));
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
var base_path_41258 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41258){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_41256 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_41257 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_41256,_STAR_print_newline_STAR_41257,base_path_41258){
return (function() { 
var G__41259__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41260__i = 0, G__41260__a = new Array(arguments.length -  0);
while (G__41260__i < G__41260__a.length) {G__41260__a[G__41260__i] = arguments[G__41260__i + 0]; ++G__41260__i;}
  args = new cljs.core.IndexedSeq(G__41260__a,0);
} 
return G__41259__delegate.call(this,args);};
G__41259.cljs$lang$maxFixedArity = 0;
G__41259.cljs$lang$applyTo = (function (arglist__41261){
var args = cljs.core.seq(arglist__41261);
return G__41259__delegate(args);
});
G__41259.cljs$core$IFn$_invoke$arity$variadic = G__41259__delegate;
return G__41259;
})()
;})(_STAR_print_fn_STAR_41256,_STAR_print_newline_STAR_41257,base_path_41258))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41257;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41256;
}}catch (e41255){if((e41255 instanceof Error)){
var e = e41255;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41258], null));
} else {
var e = e41255;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41258))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41262){
var map__41269 = p__41262;
var map__41269__$1 = ((((!((map__41269 == null)))?((((map__41269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41269):map__41269);
var opts = map__41269__$1;
var build_id = cljs.core.get.call(null,map__41269__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41269,map__41269__$1,opts,build_id){
return (function (p__41271){
var vec__41272 = p__41271;
var map__41273 = cljs.core.nth.call(null,vec__41272,(0),null);
var map__41273__$1 = ((((!((map__41273 == null)))?((((map__41273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41273):map__41273);
var msg = map__41273__$1;
var msg_name = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41272,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41272,map__41273,map__41273__$1,msg,msg_name,_,map__41269,map__41269__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41272,map__41273,map__41273__$1,msg,msg_name,_,map__41269,map__41269__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41269,map__41269__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41279){
var vec__41280 = p__41279;
var map__41281 = cljs.core.nth.call(null,vec__41280,(0),null);
var map__41281__$1 = ((((!((map__41281 == null)))?((((map__41281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41281):map__41281);
var msg = map__41281__$1;
var msg_name = cljs.core.get.call(null,map__41281__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41280,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41283){
var map__41293 = p__41283;
var map__41293__$1 = ((((!((map__41293 == null)))?((((map__41293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41293):map__41293);
var on_compile_warning = cljs.core.get.call(null,map__41293__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41293__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41293,map__41293__$1,on_compile_warning,on_compile_fail){
return (function (p__41295){
var vec__41296 = p__41295;
var map__41297 = cljs.core.nth.call(null,vec__41296,(0),null);
var map__41297__$1 = ((((!((map__41297 == null)))?((((map__41297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41297):map__41297);
var msg = map__41297__$1;
var msg_name = cljs.core.get.call(null,map__41297__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41296,(1));
var pred__41299 = cljs.core._EQ_;
var expr__41300 = msg_name;
if(cljs.core.truth_(pred__41299.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41300))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41299.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41300))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41293,map__41293__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto__,msg_hist,msg_names,msg){
return (function (state_41516){
var state_val_41517 = (state_41516[(1)]);
if((state_val_41517 === (7))){
var inst_41440 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
if(cljs.core.truth_(inst_41440)){
var statearr_41518_41564 = state_41516__$1;
(statearr_41518_41564[(1)] = (8));

} else {
var statearr_41519_41565 = state_41516__$1;
(statearr_41519_41565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (20))){
var inst_41510 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41520_41566 = state_41516__$1;
(statearr_41520_41566[(2)] = inst_41510);

(statearr_41520_41566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (27))){
var inst_41506 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41521_41567 = state_41516__$1;
(statearr_41521_41567[(2)] = inst_41506);

(statearr_41521_41567[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (1))){
var inst_41433 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41516__$1 = state_41516;
if(cljs.core.truth_(inst_41433)){
var statearr_41522_41568 = state_41516__$1;
(statearr_41522_41568[(1)] = (2));

} else {
var statearr_41523_41569 = state_41516__$1;
(statearr_41523_41569[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (24))){
var inst_41508 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41524_41570 = state_41516__$1;
(statearr_41524_41570[(2)] = inst_41508);

(statearr_41524_41570[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (4))){
var inst_41514 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41516__$1,inst_41514);
} else {
if((state_val_41517 === (15))){
var inst_41512 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41525_41571 = state_41516__$1;
(statearr_41525_41571[(2)] = inst_41512);

(statearr_41525_41571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (21))){
var inst_41471 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41526_41572 = state_41516__$1;
(statearr_41526_41572[(2)] = inst_41471);

(statearr_41526_41572[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (31))){
var inst_41495 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41516__$1 = state_41516;
if(cljs.core.truth_(inst_41495)){
var statearr_41527_41573 = state_41516__$1;
(statearr_41527_41573[(1)] = (34));

} else {
var statearr_41528_41574 = state_41516__$1;
(statearr_41528_41574[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (32))){
var inst_41504 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41529_41575 = state_41516__$1;
(statearr_41529_41575[(2)] = inst_41504);

(statearr_41529_41575[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (33))){
var inst_41493 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41530_41576 = state_41516__$1;
(statearr_41530_41576[(2)] = inst_41493);

(statearr_41530_41576[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (13))){
var inst_41454 = figwheel.client.heads_up.clear.call(null);
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(16),inst_41454);
} else {
if((state_val_41517 === (22))){
var inst_41475 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41476 = figwheel.client.heads_up.append_message.call(null,inst_41475);
var state_41516__$1 = state_41516;
var statearr_41531_41577 = state_41516__$1;
(statearr_41531_41577[(2)] = inst_41476);

(statearr_41531_41577[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (36))){
var inst_41502 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41532_41578 = state_41516__$1;
(statearr_41532_41578[(2)] = inst_41502);

(statearr_41532_41578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (29))){
var inst_41486 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41533_41579 = state_41516__$1;
(statearr_41533_41579[(2)] = inst_41486);

(statearr_41533_41579[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (6))){
var inst_41435 = (state_41516[(7)]);
var state_41516__$1 = state_41516;
var statearr_41534_41580 = state_41516__$1;
(statearr_41534_41580[(2)] = inst_41435);

(statearr_41534_41580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (28))){
var inst_41482 = (state_41516[(2)]);
var inst_41483 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41484 = figwheel.client.heads_up.display_warning.call(null,inst_41483);
var state_41516__$1 = (function (){var statearr_41535 = state_41516;
(statearr_41535[(8)] = inst_41482);

return statearr_41535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(29),inst_41484);
} else {
if((state_val_41517 === (25))){
var inst_41480 = figwheel.client.heads_up.clear.call(null);
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(28),inst_41480);
} else {
if((state_val_41517 === (34))){
var inst_41497 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(37),inst_41497);
} else {
if((state_val_41517 === (17))){
var inst_41462 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41536_41581 = state_41516__$1;
(statearr_41536_41581[(2)] = inst_41462);

(statearr_41536_41581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (3))){
var inst_41452 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41516__$1 = state_41516;
if(cljs.core.truth_(inst_41452)){
var statearr_41537_41582 = state_41516__$1;
(statearr_41537_41582[(1)] = (13));

} else {
var statearr_41538_41583 = state_41516__$1;
(statearr_41538_41583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (12))){
var inst_41448 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41539_41584 = state_41516__$1;
(statearr_41539_41584[(2)] = inst_41448);

(statearr_41539_41584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (2))){
var inst_41435 = (state_41516[(7)]);
var inst_41435__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41516__$1 = (function (){var statearr_41540 = state_41516;
(statearr_41540[(7)] = inst_41435__$1);

return statearr_41540;
})();
if(cljs.core.truth_(inst_41435__$1)){
var statearr_41541_41585 = state_41516__$1;
(statearr_41541_41585[(1)] = (5));

} else {
var statearr_41542_41586 = state_41516__$1;
(statearr_41542_41586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (23))){
var inst_41478 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41516__$1 = state_41516;
if(cljs.core.truth_(inst_41478)){
var statearr_41543_41587 = state_41516__$1;
(statearr_41543_41587[(1)] = (25));

} else {
var statearr_41544_41588 = state_41516__$1;
(statearr_41544_41588[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (35))){
var state_41516__$1 = state_41516;
var statearr_41545_41589 = state_41516__$1;
(statearr_41545_41589[(2)] = null);

(statearr_41545_41589[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (19))){
var inst_41473 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41516__$1 = state_41516;
if(cljs.core.truth_(inst_41473)){
var statearr_41546_41590 = state_41516__$1;
(statearr_41546_41590[(1)] = (22));

} else {
var statearr_41547_41591 = state_41516__$1;
(statearr_41547_41591[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (11))){
var inst_41444 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41548_41592 = state_41516__$1;
(statearr_41548_41592[(2)] = inst_41444);

(statearr_41548_41592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (9))){
var inst_41446 = figwheel.client.heads_up.clear.call(null);
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(12),inst_41446);
} else {
if((state_val_41517 === (5))){
var inst_41437 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41516__$1 = state_41516;
var statearr_41549_41593 = state_41516__$1;
(statearr_41549_41593[(2)] = inst_41437);

(statearr_41549_41593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (14))){
var inst_41464 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41516__$1 = state_41516;
if(cljs.core.truth_(inst_41464)){
var statearr_41550_41594 = state_41516__$1;
(statearr_41550_41594[(1)] = (18));

} else {
var statearr_41551_41595 = state_41516__$1;
(statearr_41551_41595[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (26))){
var inst_41488 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41516__$1 = state_41516;
if(cljs.core.truth_(inst_41488)){
var statearr_41552_41596 = state_41516__$1;
(statearr_41552_41596[(1)] = (30));

} else {
var statearr_41553_41597 = state_41516__$1;
(statearr_41553_41597[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (16))){
var inst_41456 = (state_41516[(2)]);
var inst_41457 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41458 = figwheel.client.format_messages.call(null,inst_41457);
var inst_41459 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41460 = figwheel.client.heads_up.display_error.call(null,inst_41458,inst_41459);
var state_41516__$1 = (function (){var statearr_41554 = state_41516;
(statearr_41554[(9)] = inst_41456);

return statearr_41554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(17),inst_41460);
} else {
if((state_val_41517 === (30))){
var inst_41490 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41491 = figwheel.client.heads_up.display_warning.call(null,inst_41490);
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(33),inst_41491);
} else {
if((state_val_41517 === (10))){
var inst_41450 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41555_41598 = state_41516__$1;
(statearr_41555_41598[(2)] = inst_41450);

(statearr_41555_41598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (18))){
var inst_41466 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41467 = figwheel.client.format_messages.call(null,inst_41466);
var inst_41468 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41469 = figwheel.client.heads_up.display_error.call(null,inst_41467,inst_41468);
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(21),inst_41469);
} else {
if((state_val_41517 === (37))){
var inst_41499 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41556_41599 = state_41516__$1;
(statearr_41556_41599[(2)] = inst_41499);

(statearr_41556_41599[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (8))){
var inst_41442 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(11),inst_41442);
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
});})(c__34593__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34481__auto__,c__34593__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____0 = (function (){
var statearr_41560 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41560[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__);

(statearr_41560[(1)] = (1));

return statearr_41560;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____1 = (function (state_41516){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_41516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e41561){if((e41561 instanceof Object)){
var ex__34485__auto__ = e41561;
var statearr_41562_41600 = state_41516;
(statearr_41562_41600[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41601 = state_41516;
state_41516 = G__41601;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__ = function(state_41516){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____1.call(this,state_41516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto__,msg_hist,msg_names,msg))
})();
var state__34595__auto__ = (function (){var statearr_41563 = f__34594__auto__.call(null);
(statearr_41563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto__);

return statearr_41563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto__,msg_hist,msg_names,msg))
);

return c__34593__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34593__auto___41664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___41664,ch){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___41664,ch){
return (function (state_41647){
var state_val_41648 = (state_41647[(1)]);
if((state_val_41648 === (1))){
var state_41647__$1 = state_41647;
var statearr_41649_41665 = state_41647__$1;
(statearr_41649_41665[(2)] = null);

(statearr_41649_41665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (2))){
var state_41647__$1 = state_41647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41647__$1,(4),ch);
} else {
if((state_val_41648 === (3))){
var inst_41645 = (state_41647[(2)]);
var state_41647__$1 = state_41647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41647__$1,inst_41645);
} else {
if((state_val_41648 === (4))){
var inst_41635 = (state_41647[(7)]);
var inst_41635__$1 = (state_41647[(2)]);
var state_41647__$1 = (function (){var statearr_41650 = state_41647;
(statearr_41650[(7)] = inst_41635__$1);

return statearr_41650;
})();
if(cljs.core.truth_(inst_41635__$1)){
var statearr_41651_41666 = state_41647__$1;
(statearr_41651_41666[(1)] = (5));

} else {
var statearr_41652_41667 = state_41647__$1;
(statearr_41652_41667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (5))){
var inst_41635 = (state_41647[(7)]);
var inst_41637 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41635);
var state_41647__$1 = state_41647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41647__$1,(8),inst_41637);
} else {
if((state_val_41648 === (6))){
var state_41647__$1 = state_41647;
var statearr_41653_41668 = state_41647__$1;
(statearr_41653_41668[(2)] = null);

(statearr_41653_41668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (7))){
var inst_41643 = (state_41647[(2)]);
var state_41647__$1 = state_41647;
var statearr_41654_41669 = state_41647__$1;
(statearr_41654_41669[(2)] = inst_41643);

(statearr_41654_41669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (8))){
var inst_41639 = (state_41647[(2)]);
var state_41647__$1 = (function (){var statearr_41655 = state_41647;
(statearr_41655[(8)] = inst_41639);

return statearr_41655;
})();
var statearr_41656_41670 = state_41647__$1;
(statearr_41656_41670[(2)] = null);

(statearr_41656_41670[(1)] = (2));


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
});})(c__34593__auto___41664,ch))
;
return ((function (switch__34481__auto__,c__34593__auto___41664,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34482__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34482__auto____0 = (function (){
var statearr_41660 = [null,null,null,null,null,null,null,null,null];
(statearr_41660[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34482__auto__);

(statearr_41660[(1)] = (1));

return statearr_41660;
});
var figwheel$client$heads_up_plugin_$_state_machine__34482__auto____1 = (function (state_41647){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_41647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e41661){if((e41661 instanceof Object)){
var ex__34485__auto__ = e41661;
var statearr_41662_41671 = state_41647;
(statearr_41662_41671[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41672 = state_41647;
state_41647 = G__41672;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34482__auto__ = function(state_41647){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34482__auto____1.call(this,state_41647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34482__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34482__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___41664,ch))
})();
var state__34595__auto__ = (function (){var statearr_41663 = f__34594__auto__.call(null);
(statearr_41663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___41664);

return statearr_41663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___41664,ch))
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
var c__34593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto__){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto__){
return (function (state_41693){
var state_val_41694 = (state_41693[(1)]);
if((state_val_41694 === (1))){
var inst_41688 = cljs.core.async.timeout.call(null,(3000));
var state_41693__$1 = state_41693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41693__$1,(2),inst_41688);
} else {
if((state_val_41694 === (2))){
var inst_41690 = (state_41693[(2)]);
var inst_41691 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41693__$1 = (function (){var statearr_41695 = state_41693;
(statearr_41695[(7)] = inst_41690);

return statearr_41695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41693__$1,inst_41691);
} else {
return null;
}
}
});})(c__34593__auto__))
;
return ((function (switch__34481__auto__,c__34593__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____0 = (function (){
var statearr_41699 = [null,null,null,null,null,null,null,null];
(statearr_41699[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__);

(statearr_41699[(1)] = (1));

return statearr_41699;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____1 = (function (state_41693){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_41693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e41700){if((e41700 instanceof Object)){
var ex__34485__auto__ = e41700;
var statearr_41701_41703 = state_41693;
(statearr_41701_41703[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41704 = state_41693;
state_41693 = G__41704;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__ = function(state_41693){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____1.call(this,state_41693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto__))
})();
var state__34595__auto__ = (function (){var statearr_41702 = f__34594__auto__.call(null);
(statearr_41702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto__);

return statearr_41702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto__))
);

return c__34593__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41705){
var map__41712 = p__41705;
var map__41712__$1 = ((((!((map__41712 == null)))?((((map__41712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41712):map__41712);
var ed = map__41712__$1;
var formatted_exception = cljs.core.get.call(null,map__41712__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41712__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41712__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41714_41718 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41715_41719 = null;
var count__41716_41720 = (0);
var i__41717_41721 = (0);
while(true){
if((i__41717_41721 < count__41716_41720)){
var msg_41722 = cljs.core._nth.call(null,chunk__41715_41719,i__41717_41721);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41722);

var G__41723 = seq__41714_41718;
var G__41724 = chunk__41715_41719;
var G__41725 = count__41716_41720;
var G__41726 = (i__41717_41721 + (1));
seq__41714_41718 = G__41723;
chunk__41715_41719 = G__41724;
count__41716_41720 = G__41725;
i__41717_41721 = G__41726;
continue;
} else {
var temp__4425__auto___41727 = cljs.core.seq.call(null,seq__41714_41718);
if(temp__4425__auto___41727){
var seq__41714_41728__$1 = temp__4425__auto___41727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41714_41728__$1)){
var c__30523__auto___41729 = cljs.core.chunk_first.call(null,seq__41714_41728__$1);
var G__41730 = cljs.core.chunk_rest.call(null,seq__41714_41728__$1);
var G__41731 = c__30523__auto___41729;
var G__41732 = cljs.core.count.call(null,c__30523__auto___41729);
var G__41733 = (0);
seq__41714_41718 = G__41730;
chunk__41715_41719 = G__41731;
count__41716_41720 = G__41732;
i__41717_41721 = G__41733;
continue;
} else {
var msg_41734 = cljs.core.first.call(null,seq__41714_41728__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41734);

var G__41735 = cljs.core.next.call(null,seq__41714_41728__$1);
var G__41736 = null;
var G__41737 = (0);
var G__41738 = (0);
seq__41714_41718 = G__41735;
chunk__41715_41719 = G__41736;
count__41716_41720 = G__41737;
i__41717_41721 = G__41738;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41739){
var map__41742 = p__41739;
var map__41742__$1 = ((((!((map__41742 == null)))?((((map__41742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41742):map__41742);
var w = map__41742__$1;
var message = cljs.core.get.call(null,map__41742__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__29708__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29708__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29708__auto__;
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
var seq__41750 = cljs.core.seq.call(null,plugins);
var chunk__41751 = null;
var count__41752 = (0);
var i__41753 = (0);
while(true){
if((i__41753 < count__41752)){
var vec__41754 = cljs.core._nth.call(null,chunk__41751,i__41753);
var k = cljs.core.nth.call(null,vec__41754,(0),null);
var plugin = cljs.core.nth.call(null,vec__41754,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41756 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41750,chunk__41751,count__41752,i__41753,pl_41756,vec__41754,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41756.call(null,msg_hist);
});})(seq__41750,chunk__41751,count__41752,i__41753,pl_41756,vec__41754,k,plugin))
);
} else {
}

var G__41757 = seq__41750;
var G__41758 = chunk__41751;
var G__41759 = count__41752;
var G__41760 = (i__41753 + (1));
seq__41750 = G__41757;
chunk__41751 = G__41758;
count__41752 = G__41759;
i__41753 = G__41760;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41750);
if(temp__4425__auto__){
var seq__41750__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41750__$1)){
var c__30523__auto__ = cljs.core.chunk_first.call(null,seq__41750__$1);
var G__41761 = cljs.core.chunk_rest.call(null,seq__41750__$1);
var G__41762 = c__30523__auto__;
var G__41763 = cljs.core.count.call(null,c__30523__auto__);
var G__41764 = (0);
seq__41750 = G__41761;
chunk__41751 = G__41762;
count__41752 = G__41763;
i__41753 = G__41764;
continue;
} else {
var vec__41755 = cljs.core.first.call(null,seq__41750__$1);
var k = cljs.core.nth.call(null,vec__41755,(0),null);
var plugin = cljs.core.nth.call(null,vec__41755,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41765 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41750,chunk__41751,count__41752,i__41753,pl_41765,vec__41755,k,plugin,seq__41750__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41765.call(null,msg_hist);
});})(seq__41750,chunk__41751,count__41752,i__41753,pl_41765,vec__41755,k,plugin,seq__41750__$1,temp__4425__auto__))
);
} else {
}

var G__41766 = cljs.core.next.call(null,seq__41750__$1);
var G__41767 = null;
var G__41768 = (0);
var G__41769 = (0);
seq__41750 = G__41766;
chunk__41751 = G__41767;
count__41752 = G__41768;
i__41753 = G__41769;
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
var args41770 = [];
var len__30779__auto___41773 = arguments.length;
var i__30780__auto___41774 = (0);
while(true){
if((i__30780__auto___41774 < len__30779__auto___41773)){
args41770.push((arguments[i__30780__auto___41774]));

var G__41775 = (i__30780__auto___41774 + (1));
i__30780__auto___41774 = G__41775;
continue;
} else {
}
break;
}

var G__41772 = args41770.length;
switch (G__41772) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41770.length)].join('')));

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
var args__30786__auto__ = [];
var len__30779__auto___41781 = arguments.length;
var i__30780__auto___41782 = (0);
while(true){
if((i__30780__auto___41782 < len__30779__auto___41781)){
args__30786__auto__.push((arguments[i__30780__auto___41782]));

var G__41783 = (i__30780__auto___41782 + (1));
i__30780__auto___41782 = G__41783;
continue;
} else {
}
break;
}

var argseq__30787__auto__ = ((((0) < args__30786__auto__.length))?(new cljs.core.IndexedSeq(args__30786__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30787__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41778){
var map__41779 = p__41778;
var map__41779__$1 = ((((!((map__41779 == null)))?((((map__41779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41779):map__41779);
var opts = map__41779__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41777){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41777));
});

//# sourceMappingURL=client.js.map