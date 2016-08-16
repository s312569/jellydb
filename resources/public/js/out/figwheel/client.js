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
var args48681 = [];
var len__31894__auto___48684 = arguments.length;
var i__31895__auto___48685 = (0);
while(true){
if((i__31895__auto___48685 < len__31894__auto___48684)){
args48681.push((arguments[i__31895__auto___48685]));

var G__48686 = (i__31895__auto___48685 + (1));
i__31895__auto___48685 = G__48686;
continue;
} else {
}
break;
}

var G__48683 = args48681.length;
switch (G__48683) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48681.length)].join('')));

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
var args__31901__auto__ = [];
var len__31894__auto___48689 = arguments.length;
var i__31895__auto___48690 = (0);
while(true){
if((i__31895__auto___48690 < len__31894__auto___48689)){
args__31901__auto__.push((arguments[i__31895__auto___48690]));

var G__48691 = (i__31895__auto___48690 + (1));
i__31895__auto___48690 = G__48691;
continue;
} else {
}
break;
}

var argseq__31902__auto__ = ((((0) < args__31901__auto__.length))?(new cljs.core.IndexedSeq(args__31901__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31902__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48688){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48688));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31901__auto__ = [];
var len__31894__auto___48693 = arguments.length;
var i__31895__auto___48694 = (0);
while(true){
if((i__31895__auto___48694 < len__31894__auto___48693)){
args__31901__auto__.push((arguments[i__31895__auto___48694]));

var G__48695 = (i__31895__auto___48694 + (1));
i__31895__auto___48694 = G__48695;
continue;
} else {
}
break;
}

var argseq__31902__auto__ = ((((0) < args__31901__auto__.length))?(new cljs.core.IndexedSeq(args__31901__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31902__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48692){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48692));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__48696 = cljs.core._EQ_;
var expr__48697 = (function (){var or__30819__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e48700){if((e48700 instanceof Error)){
var e = e48700;
return false;
} else {
throw e48700;

}
}})();
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__48696.call(null,"true",expr__48697))){
return true;
} else {
if(cljs.core.truth_(pred__48696.call(null,"false",expr__48697))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48697)].join('')));
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
}catch (e48702){if((e48702 instanceof Error)){
var e = e48702;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e48702;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48703){
var map__48706 = p__48703;
var map__48706__$1 = ((((!((map__48706 == null)))?((((map__48706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48706):map__48706);
var message = cljs.core.get.call(null,map__48706__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48706__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30819__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30807__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30807__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30807__auto__;
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
var c__35798__auto___48868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___48868,ch){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___48868,ch){
return (function (state_48837){
var state_val_48838 = (state_48837[(1)]);
if((state_val_48838 === (7))){
var inst_48833 = (state_48837[(2)]);
var state_48837__$1 = state_48837;
var statearr_48839_48869 = state_48837__$1;
(statearr_48839_48869[(2)] = inst_48833);

(statearr_48839_48869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (1))){
var state_48837__$1 = state_48837;
var statearr_48840_48870 = state_48837__$1;
(statearr_48840_48870[(2)] = null);

(statearr_48840_48870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (4))){
var inst_48790 = (state_48837[(7)]);
var inst_48790__$1 = (state_48837[(2)]);
var state_48837__$1 = (function (){var statearr_48841 = state_48837;
(statearr_48841[(7)] = inst_48790__$1);

return statearr_48841;
})();
if(cljs.core.truth_(inst_48790__$1)){
var statearr_48842_48871 = state_48837__$1;
(statearr_48842_48871[(1)] = (5));

} else {
var statearr_48843_48872 = state_48837__$1;
(statearr_48843_48872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (15))){
var inst_48797 = (state_48837[(8)]);
var inst_48812 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48797);
var inst_48813 = cljs.core.first.call(null,inst_48812);
var inst_48814 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48813);
var inst_48815 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_48814)].join('');
var inst_48816 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48815);
var state_48837__$1 = state_48837;
var statearr_48844_48873 = state_48837__$1;
(statearr_48844_48873[(2)] = inst_48816);

(statearr_48844_48873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (13))){
var inst_48821 = (state_48837[(2)]);
var state_48837__$1 = state_48837;
var statearr_48845_48874 = state_48837__$1;
(statearr_48845_48874[(2)] = inst_48821);

(statearr_48845_48874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (6))){
var state_48837__$1 = state_48837;
var statearr_48846_48875 = state_48837__$1;
(statearr_48846_48875[(2)] = null);

(statearr_48846_48875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (17))){
var inst_48819 = (state_48837[(2)]);
var state_48837__$1 = state_48837;
var statearr_48847_48876 = state_48837__$1;
(statearr_48847_48876[(2)] = inst_48819);

(statearr_48847_48876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (3))){
var inst_48835 = (state_48837[(2)]);
var state_48837__$1 = state_48837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48837__$1,inst_48835);
} else {
if((state_val_48838 === (12))){
var inst_48796 = (state_48837[(9)]);
var inst_48810 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48796,opts);
var state_48837__$1 = state_48837;
if(cljs.core.truth_(inst_48810)){
var statearr_48848_48877 = state_48837__$1;
(statearr_48848_48877[(1)] = (15));

} else {
var statearr_48849_48878 = state_48837__$1;
(statearr_48849_48878[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (2))){
var state_48837__$1 = state_48837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48837__$1,(4),ch);
} else {
if((state_val_48838 === (11))){
var inst_48797 = (state_48837[(8)]);
var inst_48802 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48803 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48797);
var inst_48804 = cljs.core.async.timeout.call(null,(1000));
var inst_48805 = [inst_48803,inst_48804];
var inst_48806 = (new cljs.core.PersistentVector(null,2,(5),inst_48802,inst_48805,null));
var state_48837__$1 = state_48837;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48837__$1,(14),inst_48806);
} else {
if((state_val_48838 === (9))){
var inst_48797 = (state_48837[(8)]);
var inst_48823 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48824 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48797);
var inst_48825 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48824);
var inst_48826 = [cljs.core.str("Not loading: "),cljs.core.str(inst_48825)].join('');
var inst_48827 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48826);
var state_48837__$1 = (function (){var statearr_48850 = state_48837;
(statearr_48850[(10)] = inst_48823);

return statearr_48850;
})();
var statearr_48851_48879 = state_48837__$1;
(statearr_48851_48879[(2)] = inst_48827);

(statearr_48851_48879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (5))){
var inst_48790 = (state_48837[(7)]);
var inst_48792 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48793 = (new cljs.core.PersistentArrayMap(null,2,inst_48792,null));
var inst_48794 = (new cljs.core.PersistentHashSet(null,inst_48793,null));
var inst_48795 = figwheel.client.focus_msgs.call(null,inst_48794,inst_48790);
var inst_48796 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48795);
var inst_48797 = cljs.core.first.call(null,inst_48795);
var inst_48798 = figwheel.client.autoload_QMARK_.call(null);
var state_48837__$1 = (function (){var statearr_48852 = state_48837;
(statearr_48852[(9)] = inst_48796);

(statearr_48852[(8)] = inst_48797);

return statearr_48852;
})();
if(cljs.core.truth_(inst_48798)){
var statearr_48853_48880 = state_48837__$1;
(statearr_48853_48880[(1)] = (8));

} else {
var statearr_48854_48881 = state_48837__$1;
(statearr_48854_48881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (14))){
var inst_48808 = (state_48837[(2)]);
var state_48837__$1 = state_48837;
var statearr_48855_48882 = state_48837__$1;
(statearr_48855_48882[(2)] = inst_48808);

(statearr_48855_48882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (16))){
var state_48837__$1 = state_48837;
var statearr_48856_48883 = state_48837__$1;
(statearr_48856_48883[(2)] = null);

(statearr_48856_48883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (10))){
var inst_48829 = (state_48837[(2)]);
var state_48837__$1 = (function (){var statearr_48857 = state_48837;
(statearr_48857[(11)] = inst_48829);

return statearr_48857;
})();
var statearr_48858_48884 = state_48837__$1;
(statearr_48858_48884[(2)] = null);

(statearr_48858_48884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48838 === (8))){
var inst_48796 = (state_48837[(9)]);
var inst_48800 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48796,opts);
var state_48837__$1 = state_48837;
if(cljs.core.truth_(inst_48800)){
var statearr_48859_48885 = state_48837__$1;
(statearr_48859_48885[(1)] = (11));

} else {
var statearr_48860_48886 = state_48837__$1;
(statearr_48860_48886[(1)] = (12));

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
});})(c__35798__auto___48868,ch))
;
return ((function (switch__35686__auto__,c__35798__auto___48868,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35687__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35687__auto____0 = (function (){
var statearr_48864 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48864[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35687__auto__);

(statearr_48864[(1)] = (1));

return statearr_48864;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35687__auto____1 = (function (state_48837){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_48837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e48865){if((e48865 instanceof Object)){
var ex__35690__auto__ = e48865;
var statearr_48866_48887 = state_48837;
(statearr_48866_48887[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48888 = state_48837;
state_48837 = G__48888;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35687__auto__ = function(state_48837){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35687__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35687__auto____1.call(this,state_48837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35687__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35687__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___48868,ch))
})();
var state__35800__auto__ = (function (){var statearr_48867 = f__35799__auto__.call(null);
(statearr_48867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___48868);

return statearr_48867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___48868,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48889_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48889_SHARP_));
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
var base_path_48892 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48892){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48891){if((e48891 instanceof Error)){
var e = e48891;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48892], null));
} else {
var e = e48891;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48892))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48893){
var map__48902 = p__48893;
var map__48902__$1 = ((((!((map__48902 == null)))?((((map__48902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48902):map__48902);
var opts = map__48902__$1;
var build_id = cljs.core.get.call(null,map__48902__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48902,map__48902__$1,opts,build_id){
return (function (p__48904){
var vec__48905 = p__48904;
var seq__48906 = cljs.core.seq.call(null,vec__48905);
var first__48907 = cljs.core.first.call(null,seq__48906);
var seq__48906__$1 = cljs.core.next.call(null,seq__48906);
var map__48908 = first__48907;
var map__48908__$1 = ((((!((map__48908 == null)))?((((map__48908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48908):map__48908);
var msg = map__48908__$1;
var msg_name = cljs.core.get.call(null,map__48908__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48906__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48905,seq__48906,first__48907,seq__48906__$1,map__48908,map__48908__$1,msg,msg_name,_,map__48902,map__48902__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48905,seq__48906,first__48907,seq__48906__$1,map__48908,map__48908__$1,msg,msg_name,_,map__48902,map__48902__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48902,map__48902__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48916){
var vec__48917 = p__48916;
var seq__48918 = cljs.core.seq.call(null,vec__48917);
var first__48919 = cljs.core.first.call(null,seq__48918);
var seq__48918__$1 = cljs.core.next.call(null,seq__48918);
var map__48920 = first__48919;
var map__48920__$1 = ((((!((map__48920 == null)))?((((map__48920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48920):map__48920);
var msg = map__48920__$1;
var msg_name = cljs.core.get.call(null,map__48920__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48918__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48922){
var map__48934 = p__48922;
var map__48934__$1 = ((((!((map__48934 == null)))?((((map__48934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48934):map__48934);
var on_compile_warning = cljs.core.get.call(null,map__48934__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48934__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48934,map__48934__$1,on_compile_warning,on_compile_fail){
return (function (p__48936){
var vec__48937 = p__48936;
var seq__48938 = cljs.core.seq.call(null,vec__48937);
var first__48939 = cljs.core.first.call(null,seq__48938);
var seq__48938__$1 = cljs.core.next.call(null,seq__48938);
var map__48940 = first__48939;
var map__48940__$1 = ((((!((map__48940 == null)))?((((map__48940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48940):map__48940);
var msg = map__48940__$1;
var msg_name = cljs.core.get.call(null,map__48940__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48938__$1;
var pred__48942 = cljs.core._EQ_;
var expr__48943 = msg_name;
if(cljs.core.truth_(pred__48942.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48943))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48942.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48943))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48934,map__48934__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto__,msg_hist,msg_names,msg){
return (function (state_49151){
var state_val_49152 = (state_49151[(1)]);
if((state_val_49152 === (7))){
var inst_49079 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
if(cljs.core.truth_(inst_49079)){
var statearr_49153_49199 = state_49151__$1;
(statearr_49153_49199[(1)] = (8));

} else {
var statearr_49154_49200 = state_49151__$1;
(statearr_49154_49200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (20))){
var inst_49145 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49155_49201 = state_49151__$1;
(statearr_49155_49201[(2)] = inst_49145);

(statearr_49155_49201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (27))){
var inst_49141 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49156_49202 = state_49151__$1;
(statearr_49156_49202[(2)] = inst_49141);

(statearr_49156_49202[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (1))){
var inst_49072 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49151__$1 = state_49151;
if(cljs.core.truth_(inst_49072)){
var statearr_49157_49203 = state_49151__$1;
(statearr_49157_49203[(1)] = (2));

} else {
var statearr_49158_49204 = state_49151__$1;
(statearr_49158_49204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (24))){
var inst_49143 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49159_49205 = state_49151__$1;
(statearr_49159_49205[(2)] = inst_49143);

(statearr_49159_49205[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (4))){
var inst_49149 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49151__$1,inst_49149);
} else {
if((state_val_49152 === (15))){
var inst_49147 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49160_49206 = state_49151__$1;
(statearr_49160_49206[(2)] = inst_49147);

(statearr_49160_49206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (21))){
var inst_49106 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49161_49207 = state_49151__$1;
(statearr_49161_49207[(2)] = inst_49106);

(statearr_49161_49207[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (31))){
var inst_49130 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49151__$1 = state_49151;
if(cljs.core.truth_(inst_49130)){
var statearr_49162_49208 = state_49151__$1;
(statearr_49162_49208[(1)] = (34));

} else {
var statearr_49163_49209 = state_49151__$1;
(statearr_49163_49209[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (32))){
var inst_49139 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49164_49210 = state_49151__$1;
(statearr_49164_49210[(2)] = inst_49139);

(statearr_49164_49210[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (33))){
var inst_49128 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49165_49211 = state_49151__$1;
(statearr_49165_49211[(2)] = inst_49128);

(statearr_49165_49211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (13))){
var inst_49093 = figwheel.client.heads_up.clear.call(null);
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(16),inst_49093);
} else {
if((state_val_49152 === (22))){
var inst_49110 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49111 = figwheel.client.heads_up.append_warning_message.call(null,inst_49110);
var state_49151__$1 = state_49151;
var statearr_49166_49212 = state_49151__$1;
(statearr_49166_49212[(2)] = inst_49111);

(statearr_49166_49212[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (36))){
var inst_49137 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49167_49213 = state_49151__$1;
(statearr_49167_49213[(2)] = inst_49137);

(statearr_49167_49213[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (29))){
var inst_49121 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49168_49214 = state_49151__$1;
(statearr_49168_49214[(2)] = inst_49121);

(statearr_49168_49214[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (6))){
var inst_49074 = (state_49151[(7)]);
var state_49151__$1 = state_49151;
var statearr_49169_49215 = state_49151__$1;
(statearr_49169_49215[(2)] = inst_49074);

(statearr_49169_49215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (28))){
var inst_49117 = (state_49151[(2)]);
var inst_49118 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49119 = figwheel.client.heads_up.display_warning.call(null,inst_49118);
var state_49151__$1 = (function (){var statearr_49170 = state_49151;
(statearr_49170[(8)] = inst_49117);

return statearr_49170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(29),inst_49119);
} else {
if((state_val_49152 === (25))){
var inst_49115 = figwheel.client.heads_up.clear.call(null);
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(28),inst_49115);
} else {
if((state_val_49152 === (34))){
var inst_49132 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(37),inst_49132);
} else {
if((state_val_49152 === (17))){
var inst_49099 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49171_49216 = state_49151__$1;
(statearr_49171_49216[(2)] = inst_49099);

(statearr_49171_49216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (3))){
var inst_49091 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49151__$1 = state_49151;
if(cljs.core.truth_(inst_49091)){
var statearr_49172_49217 = state_49151__$1;
(statearr_49172_49217[(1)] = (13));

} else {
var statearr_49173_49218 = state_49151__$1;
(statearr_49173_49218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (12))){
var inst_49087 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49174_49219 = state_49151__$1;
(statearr_49174_49219[(2)] = inst_49087);

(statearr_49174_49219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (2))){
var inst_49074 = (state_49151[(7)]);
var inst_49074__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49151__$1 = (function (){var statearr_49175 = state_49151;
(statearr_49175[(7)] = inst_49074__$1);

return statearr_49175;
})();
if(cljs.core.truth_(inst_49074__$1)){
var statearr_49176_49220 = state_49151__$1;
(statearr_49176_49220[(1)] = (5));

} else {
var statearr_49177_49221 = state_49151__$1;
(statearr_49177_49221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (23))){
var inst_49113 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49151__$1 = state_49151;
if(cljs.core.truth_(inst_49113)){
var statearr_49178_49222 = state_49151__$1;
(statearr_49178_49222[(1)] = (25));

} else {
var statearr_49179_49223 = state_49151__$1;
(statearr_49179_49223[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (35))){
var state_49151__$1 = state_49151;
var statearr_49180_49224 = state_49151__$1;
(statearr_49180_49224[(2)] = null);

(statearr_49180_49224[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (19))){
var inst_49108 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49151__$1 = state_49151;
if(cljs.core.truth_(inst_49108)){
var statearr_49181_49225 = state_49151__$1;
(statearr_49181_49225[(1)] = (22));

} else {
var statearr_49182_49226 = state_49151__$1;
(statearr_49182_49226[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (11))){
var inst_49083 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49183_49227 = state_49151__$1;
(statearr_49183_49227[(2)] = inst_49083);

(statearr_49183_49227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (9))){
var inst_49085 = figwheel.client.heads_up.clear.call(null);
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(12),inst_49085);
} else {
if((state_val_49152 === (5))){
var inst_49076 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49151__$1 = state_49151;
var statearr_49184_49228 = state_49151__$1;
(statearr_49184_49228[(2)] = inst_49076);

(statearr_49184_49228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (14))){
var inst_49101 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49151__$1 = state_49151;
if(cljs.core.truth_(inst_49101)){
var statearr_49185_49229 = state_49151__$1;
(statearr_49185_49229[(1)] = (18));

} else {
var statearr_49186_49230 = state_49151__$1;
(statearr_49186_49230[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (26))){
var inst_49123 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49151__$1 = state_49151;
if(cljs.core.truth_(inst_49123)){
var statearr_49187_49231 = state_49151__$1;
(statearr_49187_49231[(1)] = (30));

} else {
var statearr_49188_49232 = state_49151__$1;
(statearr_49188_49232[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (16))){
var inst_49095 = (state_49151[(2)]);
var inst_49096 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49097 = figwheel.client.heads_up.display_exception.call(null,inst_49096);
var state_49151__$1 = (function (){var statearr_49189 = state_49151;
(statearr_49189[(9)] = inst_49095);

return statearr_49189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(17),inst_49097);
} else {
if((state_val_49152 === (30))){
var inst_49125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49126 = figwheel.client.heads_up.display_warning.call(null,inst_49125);
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(33),inst_49126);
} else {
if((state_val_49152 === (10))){
var inst_49089 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49190_49233 = state_49151__$1;
(statearr_49190_49233[(2)] = inst_49089);

(statearr_49190_49233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (18))){
var inst_49103 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49104 = figwheel.client.heads_up.display_exception.call(null,inst_49103);
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(21),inst_49104);
} else {
if((state_val_49152 === (37))){
var inst_49134 = (state_49151[(2)]);
var state_49151__$1 = state_49151;
var statearr_49191_49234 = state_49151__$1;
(statearr_49191_49234[(2)] = inst_49134);

(statearr_49191_49234[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49152 === (8))){
var inst_49081 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49151__$1 = state_49151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49151__$1,(11),inst_49081);
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
});})(c__35798__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35686__auto__,c__35798__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto____0 = (function (){
var statearr_49195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49195[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto__);

(statearr_49195[(1)] = (1));

return statearr_49195;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto____1 = (function (state_49151){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_49151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e49196){if((e49196 instanceof Object)){
var ex__35690__auto__ = e49196;
var statearr_49197_49235 = state_49151;
(statearr_49197_49235[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49236 = state_49151;
state_49151 = G__49236;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto__ = function(state_49151){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto____1.call(this,state_49151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto__,msg_hist,msg_names,msg))
})();
var state__35800__auto__ = (function (){var statearr_49198 = f__35799__auto__.call(null);
(statearr_49198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto__);

return statearr_49198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto__,msg_hist,msg_names,msg))
);

return c__35798__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35798__auto___49299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___49299,ch){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___49299,ch){
return (function (state_49282){
var state_val_49283 = (state_49282[(1)]);
if((state_val_49283 === (1))){
var state_49282__$1 = state_49282;
var statearr_49284_49300 = state_49282__$1;
(statearr_49284_49300[(2)] = null);

(statearr_49284_49300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49283 === (2))){
var state_49282__$1 = state_49282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49282__$1,(4),ch);
} else {
if((state_val_49283 === (3))){
var inst_49280 = (state_49282[(2)]);
var state_49282__$1 = state_49282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49282__$1,inst_49280);
} else {
if((state_val_49283 === (4))){
var inst_49270 = (state_49282[(7)]);
var inst_49270__$1 = (state_49282[(2)]);
var state_49282__$1 = (function (){var statearr_49285 = state_49282;
(statearr_49285[(7)] = inst_49270__$1);

return statearr_49285;
})();
if(cljs.core.truth_(inst_49270__$1)){
var statearr_49286_49301 = state_49282__$1;
(statearr_49286_49301[(1)] = (5));

} else {
var statearr_49287_49302 = state_49282__$1;
(statearr_49287_49302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49283 === (5))){
var inst_49270 = (state_49282[(7)]);
var inst_49272 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49270);
var state_49282__$1 = state_49282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49282__$1,(8),inst_49272);
} else {
if((state_val_49283 === (6))){
var state_49282__$1 = state_49282;
var statearr_49288_49303 = state_49282__$1;
(statearr_49288_49303[(2)] = null);

(statearr_49288_49303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49283 === (7))){
var inst_49278 = (state_49282[(2)]);
var state_49282__$1 = state_49282;
var statearr_49289_49304 = state_49282__$1;
(statearr_49289_49304[(2)] = inst_49278);

(statearr_49289_49304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49283 === (8))){
var inst_49274 = (state_49282[(2)]);
var state_49282__$1 = (function (){var statearr_49290 = state_49282;
(statearr_49290[(8)] = inst_49274);

return statearr_49290;
})();
var statearr_49291_49305 = state_49282__$1;
(statearr_49291_49305[(2)] = null);

(statearr_49291_49305[(1)] = (2));


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
});})(c__35798__auto___49299,ch))
;
return ((function (switch__35686__auto__,c__35798__auto___49299,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35687__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35687__auto____0 = (function (){
var statearr_49295 = [null,null,null,null,null,null,null,null,null];
(statearr_49295[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35687__auto__);

(statearr_49295[(1)] = (1));

return statearr_49295;
});
var figwheel$client$heads_up_plugin_$_state_machine__35687__auto____1 = (function (state_49282){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_49282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e49296){if((e49296 instanceof Object)){
var ex__35690__auto__ = e49296;
var statearr_49297_49306 = state_49282;
(statearr_49297_49306[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49307 = state_49282;
state_49282 = G__49307;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35687__auto__ = function(state_49282){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35687__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35687__auto____1.call(this,state_49282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35687__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35687__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___49299,ch))
})();
var state__35800__auto__ = (function (){var statearr_49298 = f__35799__auto__.call(null);
(statearr_49298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___49299);

return statearr_49298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___49299,ch))
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
var c__35798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto__){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto__){
return (function (state_49328){
var state_val_49329 = (state_49328[(1)]);
if((state_val_49329 === (1))){
var inst_49323 = cljs.core.async.timeout.call(null,(3000));
var state_49328__$1 = state_49328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49328__$1,(2),inst_49323);
} else {
if((state_val_49329 === (2))){
var inst_49325 = (state_49328[(2)]);
var inst_49326 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49328__$1 = (function (){var statearr_49330 = state_49328;
(statearr_49330[(7)] = inst_49325);

return statearr_49330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49328__$1,inst_49326);
} else {
return null;
}
}
});})(c__35798__auto__))
;
return ((function (switch__35686__auto__,c__35798__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35687__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35687__auto____0 = (function (){
var statearr_49334 = [null,null,null,null,null,null,null,null];
(statearr_49334[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35687__auto__);

(statearr_49334[(1)] = (1));

return statearr_49334;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35687__auto____1 = (function (state_49328){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_49328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e49335){if((e49335 instanceof Object)){
var ex__35690__auto__ = e49335;
var statearr_49336_49338 = state_49328;
(statearr_49336_49338[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49339 = state_49328;
state_49328 = G__49339;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35687__auto__ = function(state_49328){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35687__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35687__auto____1.call(this,state_49328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35687__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35687__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto__))
})();
var state__35800__auto__ = (function (){var statearr_49337 = f__35799__auto__.call(null);
(statearr_49337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto__);

return statearr_49337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto__))
);

return c__35798__auto__;
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
var c__35798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto__,figwheel_version,temp__4657__auto__){
return (function (state_49362){
var state_val_49363 = (state_49362[(1)]);
if((state_val_49363 === (1))){
var inst_49356 = cljs.core.async.timeout.call(null,(2000));
var state_49362__$1 = state_49362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49362__$1,(2),inst_49356);
} else {
if((state_val_49363 === (2))){
var inst_49358 = (state_49362[(2)]);
var inst_49359 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_49360 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49359);
var state_49362__$1 = (function (){var statearr_49364 = state_49362;
(statearr_49364[(7)] = inst_49358);

return statearr_49364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49362__$1,inst_49360);
} else {
return null;
}
}
});})(c__35798__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__35686__auto__,c__35798__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto____0 = (function (){
var statearr_49368 = [null,null,null,null,null,null,null,null];
(statearr_49368[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto__);

(statearr_49368[(1)] = (1));

return statearr_49368;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto____1 = (function (state_49362){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_49362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e49369){if((e49369 instanceof Object)){
var ex__35690__auto__ = e49369;
var statearr_49370_49372 = state_49362;
(statearr_49370_49372[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49373 = state_49362;
state_49362 = G__49373;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto__ = function(state_49362){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto____1.call(this,state_49362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto__,figwheel_version,temp__4657__auto__))
})();
var state__35800__auto__ = (function (){var statearr_49371 = f__35799__auto__.call(null);
(statearr_49371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto__);

return statearr_49371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto__,figwheel_version,temp__4657__auto__))
);

return c__35798__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49374){
var map__49378 = p__49374;
var map__49378__$1 = ((((!((map__49378 == null)))?((((map__49378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49378):map__49378);
var file = cljs.core.get.call(null,map__49378__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49378__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49378__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49380 = "";
var G__49380__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__49380),cljs.core.str("file "),cljs.core.str(file)].join(''):G__49380);
var G__49380__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__49380__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__49380__$1);
if(cljs.core.truth_((function (){var and__30807__auto__ = line;
if(cljs.core.truth_(and__30807__auto__)){
return column;
} else {
return and__30807__auto__;
}
})())){
return [cljs.core.str(G__49380__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__49380__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49381){
var map__49388 = p__49381;
var map__49388__$1 = ((((!((map__49388 == null)))?((((map__49388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49388):map__49388);
var ed = map__49388__$1;
var formatted_exception = cljs.core.get.call(null,map__49388__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49388__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49388__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49390_49394 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49391_49395 = null;
var count__49392_49396 = (0);
var i__49393_49397 = (0);
while(true){
if((i__49393_49397 < count__49392_49396)){
var msg_49398 = cljs.core._nth.call(null,chunk__49391_49395,i__49393_49397);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49398);

var G__49399 = seq__49390_49394;
var G__49400 = chunk__49391_49395;
var G__49401 = count__49392_49396;
var G__49402 = (i__49393_49397 + (1));
seq__49390_49394 = G__49399;
chunk__49391_49395 = G__49400;
count__49392_49396 = G__49401;
i__49393_49397 = G__49402;
continue;
} else {
var temp__4657__auto___49403 = cljs.core.seq.call(null,seq__49390_49394);
if(temp__4657__auto___49403){
var seq__49390_49404__$1 = temp__4657__auto___49403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49390_49404__$1)){
var c__31630__auto___49405 = cljs.core.chunk_first.call(null,seq__49390_49404__$1);
var G__49406 = cljs.core.chunk_rest.call(null,seq__49390_49404__$1);
var G__49407 = c__31630__auto___49405;
var G__49408 = cljs.core.count.call(null,c__31630__auto___49405);
var G__49409 = (0);
seq__49390_49394 = G__49406;
chunk__49391_49395 = G__49407;
count__49392_49396 = G__49408;
i__49393_49397 = G__49409;
continue;
} else {
var msg_49410 = cljs.core.first.call(null,seq__49390_49404__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49410);

var G__49411 = cljs.core.next.call(null,seq__49390_49404__$1);
var G__49412 = null;
var G__49413 = (0);
var G__49414 = (0);
seq__49390_49394 = G__49411;
chunk__49391_49395 = G__49412;
count__49392_49396 = G__49413;
i__49393_49397 = G__49414;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49415){
var map__49418 = p__49415;
var map__49418__$1 = ((((!((map__49418 == null)))?((((map__49418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49418):map__49418);
var w = map__49418__$1;
var message = cljs.core.get.call(null,map__49418__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__30807__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30807__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30807__auto__;
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
var seq__49430 = cljs.core.seq.call(null,plugins);
var chunk__49431 = null;
var count__49432 = (0);
var i__49433 = (0);
while(true){
if((i__49433 < count__49432)){
var vec__49434 = cljs.core._nth.call(null,chunk__49431,i__49433);
var k = cljs.core.nth.call(null,vec__49434,(0),null);
var plugin = cljs.core.nth.call(null,vec__49434,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49440 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49430,chunk__49431,count__49432,i__49433,pl_49440,vec__49434,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49440.call(null,msg_hist);
});})(seq__49430,chunk__49431,count__49432,i__49433,pl_49440,vec__49434,k,plugin))
);
} else {
}

var G__49441 = seq__49430;
var G__49442 = chunk__49431;
var G__49443 = count__49432;
var G__49444 = (i__49433 + (1));
seq__49430 = G__49441;
chunk__49431 = G__49442;
count__49432 = G__49443;
i__49433 = G__49444;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49430);
if(temp__4657__auto__){
var seq__49430__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49430__$1)){
var c__31630__auto__ = cljs.core.chunk_first.call(null,seq__49430__$1);
var G__49445 = cljs.core.chunk_rest.call(null,seq__49430__$1);
var G__49446 = c__31630__auto__;
var G__49447 = cljs.core.count.call(null,c__31630__auto__);
var G__49448 = (0);
seq__49430 = G__49445;
chunk__49431 = G__49446;
count__49432 = G__49447;
i__49433 = G__49448;
continue;
} else {
var vec__49437 = cljs.core.first.call(null,seq__49430__$1);
var k = cljs.core.nth.call(null,vec__49437,(0),null);
var plugin = cljs.core.nth.call(null,vec__49437,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49449 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49430,chunk__49431,count__49432,i__49433,pl_49449,vec__49437,k,plugin,seq__49430__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49449.call(null,msg_hist);
});})(seq__49430,chunk__49431,count__49432,i__49433,pl_49449,vec__49437,k,plugin,seq__49430__$1,temp__4657__auto__))
);
} else {
}

var G__49450 = cljs.core.next.call(null,seq__49430__$1);
var G__49451 = null;
var G__49452 = (0);
var G__49453 = (0);
seq__49430 = G__49450;
chunk__49431 = G__49451;
count__49432 = G__49452;
i__49433 = G__49453;
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
var args49454 = [];
var len__31894__auto___49461 = arguments.length;
var i__31895__auto___49462 = (0);
while(true){
if((i__31895__auto___49462 < len__31894__auto___49461)){
args49454.push((arguments[i__31895__auto___49462]));

var G__49463 = (i__31895__auto___49462 + (1));
i__31895__auto___49462 = G__49463;
continue;
} else {
}
break;
}

var G__49456 = args49454.length;
switch (G__49456) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49454.length)].join('')));

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

var seq__49457_49465 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49458_49466 = null;
var count__49459_49467 = (0);
var i__49460_49468 = (0);
while(true){
if((i__49460_49468 < count__49459_49467)){
var msg_49469 = cljs.core._nth.call(null,chunk__49458_49466,i__49460_49468);
figwheel.client.socket.handle_incoming_message.call(null,msg_49469);

var G__49470 = seq__49457_49465;
var G__49471 = chunk__49458_49466;
var G__49472 = count__49459_49467;
var G__49473 = (i__49460_49468 + (1));
seq__49457_49465 = G__49470;
chunk__49458_49466 = G__49471;
count__49459_49467 = G__49472;
i__49460_49468 = G__49473;
continue;
} else {
var temp__4657__auto___49474 = cljs.core.seq.call(null,seq__49457_49465);
if(temp__4657__auto___49474){
var seq__49457_49475__$1 = temp__4657__auto___49474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49457_49475__$1)){
var c__31630__auto___49476 = cljs.core.chunk_first.call(null,seq__49457_49475__$1);
var G__49477 = cljs.core.chunk_rest.call(null,seq__49457_49475__$1);
var G__49478 = c__31630__auto___49476;
var G__49479 = cljs.core.count.call(null,c__31630__auto___49476);
var G__49480 = (0);
seq__49457_49465 = G__49477;
chunk__49458_49466 = G__49478;
count__49459_49467 = G__49479;
i__49460_49468 = G__49480;
continue;
} else {
var msg_49481 = cljs.core.first.call(null,seq__49457_49475__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49481);

var G__49482 = cljs.core.next.call(null,seq__49457_49475__$1);
var G__49483 = null;
var G__49484 = (0);
var G__49485 = (0);
seq__49457_49465 = G__49482;
chunk__49458_49466 = G__49483;
count__49459_49467 = G__49484;
i__49460_49468 = G__49485;
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
var args__31901__auto__ = [];
var len__31894__auto___49490 = arguments.length;
var i__31895__auto___49491 = (0);
while(true){
if((i__31895__auto___49491 < len__31894__auto___49490)){
args__31901__auto__.push((arguments[i__31895__auto___49491]));

var G__49492 = (i__31895__auto___49491 + (1));
i__31895__auto___49491 = G__49492;
continue;
} else {
}
break;
}

var argseq__31902__auto__ = ((((0) < args__31901__auto__.length))?(new cljs.core.IndexedSeq(args__31901__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31902__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49487){
var map__49488 = p__49487;
var map__49488__$1 = ((((!((map__49488 == null)))?((((map__49488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49488):map__49488);
var opts = map__49488__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49486){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49486));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49494){if((e49494 instanceof Error)){
var e = e49494;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49494;

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
return (function (p__49498){
var map__49499 = p__49498;
var map__49499__$1 = ((((!((map__49499 == null)))?((((map__49499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49499):map__49499);
var msg_name = cljs.core.get.call(null,map__49499__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471343717799