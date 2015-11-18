// Compiled by ClojureScript 1.7.170 {}
goog.provide('acme.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om.core');
acme.core.change = (function acme$core$change(e,owner){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),e.target.value);
});
acme.core.log = (function acme$core$log(m){
return console.log(m);
});
acme.core.request_loop = (function acme$core$request_loop(owner,topic,state){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),topic,cljs.core.async.chan.call(null));
var c__31442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31442__auto__,events){
return (function (){
var f__31443__auto__ = (function (){var switch__31421__auto__ = ((function (c__31442__auto__,events){
return (function (state_48978){
var state_val_48979 = (state_48978[(1)]);
if((state_val_48979 === (1))){
var state_48978__$1 = state_48978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48978__$1,(2),events);
} else {
if((state_val_48979 === (2))){
var inst_48965 = (state_48978[(2)]);
var inst_48966 = inst_48965;
var state_48978__$1 = (function (){var statearr_48980 = state_48978;
(statearr_48980[(7)] = inst_48966);

return statearr_48980;
})();
var statearr_48981_48992 = state_48978__$1;
(statearr_48981_48992[(2)] = null);

(statearr_48981_48992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (3))){
var inst_48966 = (state_48978[(7)]);
var inst_48968 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_48966);
var inst_48969 = om.core.get_state.call(null,owner,state);
var state_48978__$1 = state_48978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48978__$1,(5),inst_48968,inst_48969);
} else {
if((state_val_48979 === (4))){
var inst_48976 = (state_48978[(2)]);
var state_48978__$1 = state_48978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48978__$1,inst_48976);
} else {
if((state_val_48979 === (5))){
var inst_48971 = (state_48978[(2)]);
var state_48978__$1 = (function (){var statearr_48982 = state_48978;
(statearr_48982[(8)] = inst_48971);

return statearr_48982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48978__$1,(6),events);
} else {
if((state_val_48979 === (6))){
var inst_48973 = (state_48978[(2)]);
var inst_48966 = inst_48973;
var state_48978__$1 = (function (){var statearr_48983 = state_48978;
(statearr_48983[(7)] = inst_48966);

return statearr_48983;
})();
var statearr_48984_48993 = state_48978__$1;
(statearr_48984_48993[(2)] = null);

(statearr_48984_48993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__31442__auto__,events))
;
return ((function (switch__31421__auto__,c__31442__auto__,events){
return (function() {
var acme$core$request_loop_$_state_machine__31422__auto__ = null;
var acme$core$request_loop_$_state_machine__31422__auto____0 = (function (){
var statearr_48988 = [null,null,null,null,null,null,null,null,null];
(statearr_48988[(0)] = acme$core$request_loop_$_state_machine__31422__auto__);

(statearr_48988[(1)] = (1));

return statearr_48988;
});
var acme$core$request_loop_$_state_machine__31422__auto____1 = (function (state_48978){
while(true){
var ret_value__31423__auto__ = (function (){try{while(true){
var result__31424__auto__ = switch__31421__auto__.call(null,state_48978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31424__auto__;
}
break;
}
}catch (e48989){if((e48989 instanceof Object)){
var ex__31425__auto__ = e48989;
var statearr_48990_48994 = state_48978;
(statearr_48990_48994[(5)] = ex__31425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48995 = state_48978;
state_48978 = G__48995;
continue;
} else {
return ret_value__31423__auto__;
}
break;
}
});
acme$core$request_loop_$_state_machine__31422__auto__ = function(state_48978){
switch(arguments.length){
case 0:
return acme$core$request_loop_$_state_machine__31422__auto____0.call(this);
case 1:
return acme$core$request_loop_$_state_machine__31422__auto____1.call(this,state_48978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$request_loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$request_loop_$_state_machine__31422__auto____0;
acme$core$request_loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$request_loop_$_state_machine__31422__auto____1;
return acme$core$request_loop_$_state_machine__31422__auto__;
})()
;})(switch__31421__auto__,c__31442__auto__,events))
})();
var state__31444__auto__ = (function (){var statearr_48991 = f__31443__auto__.call(null);
(statearr_48991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31442__auto__);

return statearr_48991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31444__auto__);
});})(c__31442__auto__,events))
);

return c__31442__auto__;
});
acme.core.change_state_BANG_ = (function acme$core$change_state_BANG_(owner,topic,state){
var c = cljs.core.async.chan.call(null);
var c__31442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31442__auto__,c){
return (function (){
var f__31443__auto__ = (function (){var switch__31421__auto__ = ((function (c__31442__auto__,c){
return (function (state_49045){
var state_val_49046 = (state_49045[(1)]);
if((state_val_49046 === (1))){
var inst_49028 = om.core.get_shared.call(null,owner);
var inst_49029 = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(inst_49028);
var inst_49030 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"chan","chan",-2103021695)];
var inst_49031 = [topic,c];
var inst_49032 = cljs.core.PersistentHashMap.fromArrays(inst_49030,inst_49031);
var inst_49033 = cljs.core.async.put_BANG_.call(null,inst_49029,inst_49032);
var state_49045__$1 = (function (){var statearr_49047 = state_49045;
(statearr_49047[(7)] = inst_49033);

return statearr_49047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49045__$1,(2),c);
} else {
if((state_val_49046 === (2))){
var inst_49035 = (state_49045[(8)]);
var inst_49035__$1 = (state_49045[(2)]);
var inst_49036 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_49037 = cljs.core._EQ_.call(null,inst_49035__$1,inst_49036);
var inst_49038 = !(inst_49037);
var state_49045__$1 = (function (){var statearr_49048 = state_49045;
(statearr_49048[(8)] = inst_49035__$1);

return statearr_49048;
})();
if(inst_49038){
var statearr_49049_49060 = state_49045__$1;
(statearr_49049_49060[(1)] = (3));

} else {
var statearr_49050_49061 = state_49045__$1;
(statearr_49050_49061[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (3))){
var inst_49035 = (state_49045[(8)]);
var inst_49040 = om.core.set_state_BANG_.call(null,owner,state,inst_49035);
var state_49045__$1 = state_49045;
var statearr_49051_49062 = state_49045__$1;
(statearr_49051_49062[(2)] = inst_49040);

(statearr_49051_49062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (4))){
var state_49045__$1 = state_49045;
var statearr_49052_49063 = state_49045__$1;
(statearr_49052_49063[(2)] = null);

(statearr_49052_49063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (5))){
var inst_49043 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49045__$1,inst_49043);
} else {
return null;
}
}
}
}
}
});})(c__31442__auto__,c))
;
return ((function (switch__31421__auto__,c__31442__auto__,c){
return (function() {
var acme$core$change_state_BANG__$_state_machine__31422__auto__ = null;
var acme$core$change_state_BANG__$_state_machine__31422__auto____0 = (function (){
var statearr_49056 = [null,null,null,null,null,null,null,null,null];
(statearr_49056[(0)] = acme$core$change_state_BANG__$_state_machine__31422__auto__);

(statearr_49056[(1)] = (1));

return statearr_49056;
});
var acme$core$change_state_BANG__$_state_machine__31422__auto____1 = (function (state_49045){
while(true){
var ret_value__31423__auto__ = (function (){try{while(true){
var result__31424__auto__ = switch__31421__auto__.call(null,state_49045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31424__auto__;
}
break;
}
}catch (e49057){if((e49057 instanceof Object)){
var ex__31425__auto__ = e49057;
var statearr_49058_49064 = state_49045;
(statearr_49058_49064[(5)] = ex__31425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49065 = state_49045;
state_49045 = G__49065;
continue;
} else {
return ret_value__31423__auto__;
}
break;
}
});
acme$core$change_state_BANG__$_state_machine__31422__auto__ = function(state_49045){
switch(arguments.length){
case 0:
return acme$core$change_state_BANG__$_state_machine__31422__auto____0.call(this);
case 1:
return acme$core$change_state_BANG__$_state_machine__31422__auto____1.call(this,state_49045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$change_state_BANG__$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$change_state_BANG__$_state_machine__31422__auto____0;
acme$core$change_state_BANG__$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$change_state_BANG__$_state_machine__31422__auto____1;
return acme$core$change_state_BANG__$_state_machine__31422__auto__;
})()
;})(switch__31421__auto__,c__31442__auto__,c))
})();
var state__31444__auto__ = (function (){var statearr_49059 = f__31443__auto__.call(null);
(statearr_49059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31442__auto__);

return statearr_49059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31444__auto__);
});})(c__31442__auto__,c))
);

return c__31442__auto__;
});
acme.core.pub_info = (function acme$core$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
acme.core.error_handler = (function acme$core$error_handler(p__49066){
var map__49069 = p__49066;
var map__49069__$1 = ((((!((map__49069 == null)))?((((map__49069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49069):map__49069);
var status = cljs.core.get.call(null,map__49069__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__49069__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return acme.core.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
acme.core.get_fasta_key = (function acme$core$get_fasta_key(owner){
var h = (function acme$core$get_fasta_key_$_h(p__49086){
var map__49089 = p__49086;
var map__49089__$1 = ((((!((map__49089 == null)))?((((map__49089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49089):map__49089);
var status = cljs.core.get.call(null,map__49089__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.call(null,map__49089__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var msg = cljs.core.get.call(null,map__49089__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"key","key",-1516042587),id);
} else {
return alert(msg);
}
});
var temp__4423__auto__ = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764)));
if(temp__4423__auto__){
var ids = temp__4423__auto__;
return ajax.core.POST.call(null,"/id-submit",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),acme.core.error_handler,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.vec.call(null,ids)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
} else {
return h.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),"fail",new cljs.core.Keyword(null,"msg","msg",-1386103444),"No sequences selected."], null));
}
});
acme.core.serve_proteins = (function acme$core$serve_proteins(owner){
var o = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"start","start",-355208981));
var h = ((function (o){
return (function (p__49094){
var map__49095 = p__49094;
var map__49095__$1 = ((((!((map__49095 == null)))?((((map__49095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49095):map__49095);
var r = map__49095__$1;
var status = cljs.core.get.call(null,map__49095__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var proteins = cljs.core.get.call(null,map__49095__$1,new cljs.core.Keyword(null,"proteins","proteins",-212247297));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"proteins","proteins",-212247297),proteins);
} else {
throw (new Error("Can not initialise proteins."));
}
});})(o))
;
return ajax.core.GET.call(null,"/proteins",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"o","o",-1350007228),(((20) * o) - (20))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),acme.core.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
acme.core.init_total_proteins = (function acme$core$init_total_proteins(owner){
var h = (function acme$core$init_total_proteins_$_h(p__49112){
var map__49115 = p__49112;
var map__49115__$1 = ((((!((map__49115 == null)))?((((map__49115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49115):map__49115);
var r = map__49115__$1;
var status = cljs.core.get.call(null,map__49115__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var count = cljs.core.get.call(null,map__49115__$1,new cljs.core.Keyword(null,"count","count",2139924085));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"total","total",1916810418),Math.ceil((count / (20))));
} else {
throw (new Error("Error in total protein determination."));
}
});
return ajax.core.GET.call(null,"/protein-count",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),acme.core.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
acme.core.get_peptide = (function acme$core$get_peptide(owner){
var h = (function acme$core$get_peptide_$_h(p__49132){
var map__49135 = p__49132;
var map__49135__$1 = ((((!((map__49135 == null)))?((((map__49135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49135):map__49135);
var status = cljs.core.get.call(null,map__49135__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var protein = cljs.core.get.call(null,map__49135__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var msg = cljs.core.get.call(null,map__49135__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"peptide","peptide",-401217402),protein);
} else {
return alert(msg);
}
});
return ajax.core.GET.call(null,"/peptide",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),acme.core.error_handler,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"accession","accession",-1015325932))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
acme.core.check_if_checked = (function acme$core$check_if_checked(owner,np){
var c = cljs.core.async.chan.call(null);
var c__31442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31442__auto__,c){
return (function (){
var f__31443__auto__ = (function (){var switch__31421__auto__ = ((function (c__31442__auto__,c){
return (function (state_49188){
var state_val_49189 = (state_49188[(1)]);
if((state_val_49189 === (1))){
var inst_49170 = om.core.get_shared.call(null,owner);
var inst_49171 = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(inst_49170);
var inst_49172 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"chan","chan",-2103021695)];
var inst_49173 = new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(np);
var inst_49174 = [new cljs.core.Keyword(null,"selected?","selected?",-742502788),inst_49173,c];
var inst_49175 = cljs.core.PersistentHashMap.fromArrays(inst_49172,inst_49174);
var inst_49176 = cljs.core.async.put_BANG_.call(null,inst_49171,inst_49175);
var state_49188__$1 = (function (){var statearr_49190 = state_49188;
(statearr_49190[(7)] = inst_49176);

return statearr_49190;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49188__$1,(2),c);
} else {
if((state_val_49189 === (2))){
var inst_49178 = (state_49188[(8)]);
var inst_49178__$1 = (state_49188[(2)]);
var inst_49179 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"checked","checked",-50955819));
var inst_49180 = cljs.core._EQ_.call(null,inst_49178__$1,inst_49179);
var inst_49181 = !(inst_49180);
var state_49188__$1 = (function (){var statearr_49191 = state_49188;
(statearr_49191[(8)] = inst_49178__$1);

return statearr_49191;
})();
if(inst_49181){
var statearr_49192_49203 = state_49188__$1;
(statearr_49192_49203[(1)] = (3));

} else {
var statearr_49193_49204 = state_49188__$1;
(statearr_49193_49204[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49189 === (3))){
var inst_49178 = (state_49188[(8)]);
var inst_49183 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"checked","checked",-50955819),inst_49178);
var state_49188__$1 = state_49188;
var statearr_49194_49205 = state_49188__$1;
(statearr_49194_49205[(2)] = inst_49183);

(statearr_49194_49205[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49189 === (4))){
var state_49188__$1 = state_49188;
var statearr_49195_49206 = state_49188__$1;
(statearr_49195_49206[(2)] = null);

(statearr_49195_49206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49189 === (5))){
var inst_49186 = (state_49188[(2)]);
var state_49188__$1 = state_49188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49188__$1,inst_49186);
} else {
return null;
}
}
}
}
}
});})(c__31442__auto__,c))
;
return ((function (switch__31421__auto__,c__31442__auto__,c){
return (function() {
var acme$core$check_if_checked_$_state_machine__31422__auto__ = null;
var acme$core$check_if_checked_$_state_machine__31422__auto____0 = (function (){
var statearr_49199 = [null,null,null,null,null,null,null,null,null];
(statearr_49199[(0)] = acme$core$check_if_checked_$_state_machine__31422__auto__);

(statearr_49199[(1)] = (1));

return statearr_49199;
});
var acme$core$check_if_checked_$_state_machine__31422__auto____1 = (function (state_49188){
while(true){
var ret_value__31423__auto__ = (function (){try{while(true){
var result__31424__auto__ = switch__31421__auto__.call(null,state_49188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31424__auto__;
}
break;
}
}catch (e49200){if((e49200 instanceof Object)){
var ex__31425__auto__ = e49200;
var statearr_49201_49207 = state_49188;
(statearr_49201_49207[(5)] = ex__31425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49208 = state_49188;
state_49188 = G__49208;
continue;
} else {
return ret_value__31423__auto__;
}
break;
}
});
acme$core$check_if_checked_$_state_machine__31422__auto__ = function(state_49188){
switch(arguments.length){
case 0:
return acme$core$check_if_checked_$_state_machine__31422__auto____0.call(this);
case 1:
return acme$core$check_if_checked_$_state_machine__31422__auto____1.call(this,state_49188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$check_if_checked_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$check_if_checked_$_state_machine__31422__auto____0;
acme$core$check_if_checked_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$check_if_checked_$_state_machine__31422__auto____1;
return acme$core$check_if_checked_$_state_machine__31422__auto__;
})()
;})(switch__31421__auto__,c__31442__auto__,c))
})();
var state__31444__auto__ = (function (){var statearr_49202 = f__31443__auto__.call(null);
(statearr_49202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31442__auto__);

return statearr_49202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31444__auto__);
});})(c__31442__auto__,c))
);

return c__31442__auto__;
});
acme.core.protein_loop = (function acme$core$protein_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.async.chan.call(null));
var c__31442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31442__auto__,events){
return (function (){
var f__31443__auto__ = (function (){var switch__31421__auto__ = ((function (c__31442__auto__,events){
return (function (state_49253){
var state_val_49254 = (state_49253[(1)]);
if((state_val_49254 === (1))){
var state_49253__$1 = state_49253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49253__$1,(2),events);
} else {
if((state_val_49254 === (2))){
var inst_49239 = (state_49253[(2)]);
var inst_49240 = inst_49239;
var state_49253__$1 = (function (){var statearr_49255 = state_49253;
(statearr_49255[(7)] = inst_49240);

return statearr_49255;
})();
var statearr_49256_49267 = state_49253__$1;
(statearr_49256_49267[(2)] = null);

(statearr_49256_49267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49254 === (3))){
var inst_49240 = (state_49253[(7)]);
var inst_49242 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_49240);
var inst_49243 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"start","start",-355208981));
var inst_49244 = inst_49242.call(null,inst_49243);
var inst_49245 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"start","start",-355208981),inst_49244);
var inst_49246 = acme.core.serve_proteins.call(null,owner);
var state_49253__$1 = (function (){var statearr_49257 = state_49253;
(statearr_49257[(8)] = inst_49246);

(statearr_49257[(9)] = inst_49245);

return statearr_49257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49253__$1,(5),events);
} else {
if((state_val_49254 === (4))){
var inst_49251 = (state_49253[(2)]);
var state_49253__$1 = state_49253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49253__$1,inst_49251);
} else {
if((state_val_49254 === (5))){
var inst_49248 = (state_49253[(2)]);
var inst_49240 = inst_49248;
var state_49253__$1 = (function (){var statearr_49258 = state_49253;
(statearr_49258[(7)] = inst_49240);

return statearr_49258;
})();
var statearr_49259_49268 = state_49253__$1;
(statearr_49259_49268[(2)] = null);

(statearr_49259_49268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__31442__auto__,events))
;
return ((function (switch__31421__auto__,c__31442__auto__,events){
return (function() {
var acme$core$protein_loop_$_state_machine__31422__auto__ = null;
var acme$core$protein_loop_$_state_machine__31422__auto____0 = (function (){
var statearr_49263 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49263[(0)] = acme$core$protein_loop_$_state_machine__31422__auto__);

(statearr_49263[(1)] = (1));

return statearr_49263;
});
var acme$core$protein_loop_$_state_machine__31422__auto____1 = (function (state_49253){
while(true){
var ret_value__31423__auto__ = (function (){try{while(true){
var result__31424__auto__ = switch__31421__auto__.call(null,state_49253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31424__auto__;
}
break;
}
}catch (e49264){if((e49264 instanceof Object)){
var ex__31425__auto__ = e49264;
var statearr_49265_49269 = state_49253;
(statearr_49265_49269[(5)] = ex__31425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49270 = state_49253;
state_49253 = G__49270;
continue;
} else {
return ret_value__31423__auto__;
}
break;
}
});
acme$core$protein_loop_$_state_machine__31422__auto__ = function(state_49253){
switch(arguments.length){
case 0:
return acme$core$protein_loop_$_state_machine__31422__auto____0.call(this);
case 1:
return acme$core$protein_loop_$_state_machine__31422__auto____1.call(this,state_49253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$protein_loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$protein_loop_$_state_machine__31422__auto____0;
acme$core$protein_loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$protein_loop_$_state_machine__31422__auto____1;
return acme$core$protein_loop_$_state_machine__31422__auto__;
})()
;})(switch__31421__auto__,c__31442__auto__,events))
})();
var state__31444__auto__ = (function (){var statearr_49266 = f__31443__auto__.call(null);
(statearr_49266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31442__auto__);

return statearr_49266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31444__auto__);
});})(c__31442__auto__,events))
);

return c__31442__auto__;
});
acme.core.selected_loop = (function acme$core$selected_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.async.chan.call(null));
var c__31442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31442__auto__,events){
return (function (){
var f__31443__auto__ = (function (){var switch__31421__auto__ = ((function (c__31442__auto__,events){
return (function (state_49334){
var state_val_49335 = (state_49334[(1)]);
if((state_val_49335 === (1))){
var state_49334__$1 = state_49334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49334__$1,(2),events);
} else {
if((state_val_49335 === (2))){
var inst_49314 = (state_49334[(2)]);
var inst_49315 = inst_49314;
var state_49334__$1 = (function (){var statearr_49336 = state_49334;
(statearr_49336[(7)] = inst_49315);

return statearr_49336;
})();
var statearr_49337_49352 = state_49334__$1;
(statearr_49337_49352[(2)] = null);

(statearr_49337_49352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (3))){
var inst_49315 = (state_49334[(7)]);
var inst_49317 = (function (){var e = inst_49315;
return ((function (e,inst_49315,state_val_49335,c__31442__auto__,events){
return (function (p1__49271_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),p1__49271_SHARP_);
});
;})(e,inst_49315,state_val_49335,c__31442__auto__,events))
})();
var inst_49318 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var inst_49319 = cljs.core.some.call(null,inst_49317,inst_49318);
var state_49334__$1 = state_49334;
if(cljs.core.truth_(inst_49319)){
var statearr_49338_49353 = state_49334__$1;
(statearr_49338_49353[(1)] = (5));

} else {
var statearr_49339_49354 = state_49334__$1;
(statearr_49339_49354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (4))){
var inst_49332 = (state_49334[(2)]);
var state_49334__$1 = state_49334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49334__$1,inst_49332);
} else {
if((state_val_49335 === (5))){
var inst_49315 = (state_49334[(7)]);
var inst_49321 = (function (){var e = inst_49315;
return ((function (e,inst_49315,state_val_49335,c__31442__auto__,events){
return (function (x){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (e,inst_49315,state_val_49335,c__31442__auto__,events){
return (function (p1__49272_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),p1__49272_SHARP_);
});})(e,inst_49315,state_val_49335,c__31442__auto__,events))
,x));
});
;})(e,inst_49315,state_val_49335,c__31442__auto__,events))
})();
var inst_49322 = om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_49321);
var state_49334__$1 = state_49334;
var statearr_49340_49355 = state_49334__$1;
(statearr_49340_49355[(2)] = inst_49322);

(statearr_49340_49355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (6))){
var inst_49315 = (state_49334[(7)]);
var inst_49324 = (function (){var e = inst_49315;
return ((function (e,inst_49315,state_val_49335,c__31442__auto__,events){
return (function (p1__49273_SHARP_){
return cljs.core.conj.call(null,p1__49273_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
});
;})(e,inst_49315,state_val_49335,c__31442__auto__,events))
})();
var inst_49325 = om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_49324);
var state_49334__$1 = state_49334;
var statearr_49341_49356 = state_49334__$1;
(statearr_49341_49356[(2)] = inst_49325);

(statearr_49341_49356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49335 === (7))){
var inst_49327 = (state_49334[(2)]);
var state_49334__$1 = (function (){var statearr_49342 = state_49334;
(statearr_49342[(8)] = inst_49327);

return statearr_49342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49334__$1,(8),events);
} else {
if((state_val_49335 === (8))){
var inst_49329 = (state_49334[(2)]);
var inst_49315 = inst_49329;
var state_49334__$1 = (function (){var statearr_49343 = state_49334;
(statearr_49343[(7)] = inst_49315);

return statearr_49343;
})();
var statearr_49344_49357 = state_49334__$1;
(statearr_49344_49357[(2)] = null);

(statearr_49344_49357[(1)] = (3));


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
});})(c__31442__auto__,events))
;
return ((function (switch__31421__auto__,c__31442__auto__,events){
return (function() {
var acme$core$selected_loop_$_state_machine__31422__auto__ = null;
var acme$core$selected_loop_$_state_machine__31422__auto____0 = (function (){
var statearr_49348 = [null,null,null,null,null,null,null,null,null];
(statearr_49348[(0)] = acme$core$selected_loop_$_state_machine__31422__auto__);

(statearr_49348[(1)] = (1));

return statearr_49348;
});
var acme$core$selected_loop_$_state_machine__31422__auto____1 = (function (state_49334){
while(true){
var ret_value__31423__auto__ = (function (){try{while(true){
var result__31424__auto__ = switch__31421__auto__.call(null,state_49334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31424__auto__;
}
break;
}
}catch (e49349){if((e49349 instanceof Object)){
var ex__31425__auto__ = e49349;
var statearr_49350_49358 = state_49334;
(statearr_49350_49358[(5)] = ex__31425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49359 = state_49334;
state_49334 = G__49359;
continue;
} else {
return ret_value__31423__auto__;
}
break;
}
});
acme$core$selected_loop_$_state_machine__31422__auto__ = function(state_49334){
switch(arguments.length){
case 0:
return acme$core$selected_loop_$_state_machine__31422__auto____0.call(this);
case 1:
return acme$core$selected_loop_$_state_machine__31422__auto____1.call(this,state_49334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$selected_loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$selected_loop_$_state_machine__31422__auto____0;
acme$core$selected_loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$selected_loop_$_state_machine__31422__auto____1;
return acme$core$selected_loop_$_state_machine__31422__auto__;
})()
;})(switch__31421__auto__,c__31442__auto__,events))
})();
var state__31444__auto__ = (function (){var statearr_49351 = f__31443__auto__.call(null);
(statearr_49351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31442__auto__);

return statearr_49351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31444__auto__);
});})(c__31442__auto__,events))
);

return c__31442__auto__;
});
acme.core.is_selected_QMARK__loop = (function acme$core$is_selected_QMARK__loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.async.chan.call(null));
var c__31442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31442__auto__,events){
return (function (){
var f__31443__auto__ = (function (){var switch__31421__auto__ = ((function (c__31442__auto__,events){
return (function (state_49421){
var state_val_49422 = (state_49421[(1)]);
if((state_val_49422 === (1))){
var state_49421__$1 = state_49421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49421__$1,(2),events);
} else {
if((state_val_49422 === (2))){
var inst_49401 = (state_49421[(2)]);
var inst_49402 = inst_49401;
var state_49421__$1 = (function (){var statearr_49423 = state_49421;
(statearr_49423[(7)] = inst_49402);

return statearr_49423;
})();
var statearr_49424_49439 = state_49421__$1;
(statearr_49424_49439[(2)] = null);

(statearr_49424_49439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49422 === (3))){
var inst_49402 = (state_49421[(7)]);
var inst_49404 = (function (){var e = inst_49402;
return ((function (e,inst_49402,state_val_49422,c__31442__auto__,events){
return (function (p1__49360_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),p1__49360_SHARP_);
});
;})(e,inst_49402,state_val_49422,c__31442__auto__,events))
})();
var inst_49405 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var inst_49406 = cljs.core.some.call(null,inst_49404,inst_49405);
var state_49421__$1 = state_49421;
if(cljs.core.truth_(inst_49406)){
var statearr_49425_49440 = state_49421__$1;
(statearr_49425_49440[(1)] = (5));

} else {
var statearr_49426_49441 = state_49421__$1;
(statearr_49426_49441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49422 === (4))){
var inst_49419 = (state_49421[(2)]);
var state_49421__$1 = state_49421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49421__$1,inst_49419);
} else {
if((state_val_49422 === (5))){
var inst_49402 = (state_49421[(7)]);
var inst_49408 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_49402);
var inst_49409 = cljs.core.async.put_BANG_.call(null,inst_49408,true);
var state_49421__$1 = state_49421;
var statearr_49427_49442 = state_49421__$1;
(statearr_49427_49442[(2)] = inst_49409);

(statearr_49427_49442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49422 === (6))){
var inst_49402 = (state_49421[(7)]);
var inst_49411 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_49402);
var inst_49412 = cljs.core.async.put_BANG_.call(null,inst_49411,false);
var state_49421__$1 = state_49421;
var statearr_49428_49443 = state_49421__$1;
(statearr_49428_49443[(2)] = inst_49412);

(statearr_49428_49443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49422 === (7))){
var inst_49414 = (state_49421[(2)]);
var state_49421__$1 = (function (){var statearr_49429 = state_49421;
(statearr_49429[(8)] = inst_49414);

return statearr_49429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49421__$1,(8),events);
} else {
if((state_val_49422 === (8))){
var inst_49416 = (state_49421[(2)]);
var inst_49402 = inst_49416;
var state_49421__$1 = (function (){var statearr_49430 = state_49421;
(statearr_49430[(7)] = inst_49402);

return statearr_49430;
})();
var statearr_49431_49444 = state_49421__$1;
(statearr_49431_49444[(2)] = null);

(statearr_49431_49444[(1)] = (3));


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
});})(c__31442__auto__,events))
;
return ((function (switch__31421__auto__,c__31442__auto__,events){
return (function() {
var acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto__ = null;
var acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto____0 = (function (){
var statearr_49435 = [null,null,null,null,null,null,null,null,null];
(statearr_49435[(0)] = acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto__);

(statearr_49435[(1)] = (1));

return statearr_49435;
});
var acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto____1 = (function (state_49421){
while(true){
var ret_value__31423__auto__ = (function (){try{while(true){
var result__31424__auto__ = switch__31421__auto__.call(null,state_49421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31424__auto__;
}
break;
}
}catch (e49436){if((e49436 instanceof Object)){
var ex__31425__auto__ = e49436;
var statearr_49437_49445 = state_49421;
(statearr_49437_49445[(5)] = ex__31425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49446 = state_49421;
state_49421 = G__49446;
continue;
} else {
return ret_value__31423__auto__;
}
break;
}
});
acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto__ = function(state_49421){
switch(arguments.length){
case 0:
return acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto____0.call(this);
case 1:
return acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto____1.call(this,state_49421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto____0;
acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto____1;
return acme$core$is_selected_QMARK__loop_$_state_machine__31422__auto__;
})()
;})(switch__31421__auto__,c__31442__auto__,events))
})();
var state__31444__auto__ = (function (){var statearr_49438 = f__31443__auto__.call(null);
(statearr_49438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31442__auto__);

return statearr_49438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31444__auto__);
});})(c__31442__auto__,events))
);

return c__31442__auto__;
});
acme.core.export_loop = (function acme$core$export_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"export","export",214356590),cljs.core.async.chan.call(null));
var c__31442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31442__auto__,events){
return (function (){
var f__31443__auto__ = (function (){var switch__31421__auto__ = ((function (c__31442__auto__,events){
return (function (state_49485){
var state_val_49486 = (state_49485[(1)]);
if((state_val_49486 === (1))){
var state_49485__$1 = state_49485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49485__$1,(2),events);
} else {
if((state_val_49486 === (2))){
var inst_49474 = (state_49485[(2)]);
var inst_49475 = inst_49474;
var state_49485__$1 = (function (){var statearr_49487 = state_49485;
(statearr_49487[(7)] = inst_49475);

return statearr_49487;
})();
var statearr_49488_49499 = state_49485__$1;
(statearr_49488_49499[(2)] = null);

(statearr_49488_49499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49486 === (3))){
var inst_49477 = acme.core.get_fasta_key.call(null,owner);
var inst_49478 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"key","key",-1516042587),"");
var state_49485__$1 = (function (){var statearr_49489 = state_49485;
(statearr_49489[(8)] = inst_49477);

(statearr_49489[(9)] = inst_49478);

return statearr_49489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49485__$1,(5),events);
} else {
if((state_val_49486 === (4))){
var inst_49483 = (state_49485[(2)]);
var state_49485__$1 = state_49485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49485__$1,inst_49483);
} else {
if((state_val_49486 === (5))){
var inst_49480 = (state_49485[(2)]);
var inst_49475 = inst_49480;
var state_49485__$1 = (function (){var statearr_49490 = state_49485;
(statearr_49490[(7)] = inst_49475);

return statearr_49490;
})();
var statearr_49491_49500 = state_49485__$1;
(statearr_49491_49500[(2)] = null);

(statearr_49491_49500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__31442__auto__,events))
;
return ((function (switch__31421__auto__,c__31442__auto__,events){
return (function() {
var acme$core$export_loop_$_state_machine__31422__auto__ = null;
var acme$core$export_loop_$_state_machine__31422__auto____0 = (function (){
var statearr_49495 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49495[(0)] = acme$core$export_loop_$_state_machine__31422__auto__);

(statearr_49495[(1)] = (1));

return statearr_49495;
});
var acme$core$export_loop_$_state_machine__31422__auto____1 = (function (state_49485){
while(true){
var ret_value__31423__auto__ = (function (){try{while(true){
var result__31424__auto__ = switch__31421__auto__.call(null,state_49485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31424__auto__;
}
break;
}
}catch (e49496){if((e49496 instanceof Object)){
var ex__31425__auto__ = e49496;
var statearr_49497_49501 = state_49485;
(statearr_49497_49501[(5)] = ex__31425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49502 = state_49485;
state_49485 = G__49502;
continue;
} else {
return ret_value__31423__auto__;
}
break;
}
});
acme$core$export_loop_$_state_machine__31422__auto__ = function(state_49485){
switch(arguments.length){
case 0:
return acme$core$export_loop_$_state_machine__31422__auto____0.call(this);
case 1:
return acme$core$export_loop_$_state_machine__31422__auto____1.call(this,state_49485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$export_loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$export_loop_$_state_machine__31422__auto____0;
acme$core$export_loop_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$export_loop_$_state_machine__31422__auto____1;
return acme$core$export_loop_$_state_machine__31422__auto__;
})()
;})(switch__31421__auto__,c__31442__auto__,events))
})();
var state__31444__auto__ = (function (){var statearr_49498 = f__31443__auto__.call(null);
(statearr_49498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31442__auto__);

return statearr_49498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31444__auto__);
});})(c__31442__auto__,events))
);

return c__31442__auto__;
});
acme.core.search_submit = (function acme$core$search_submit(owner){
var text = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697));
if(!(cljs.core._EQ_.call(null,text,""))){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"proteins","proteins",-212247297),new cljs.core.Keyword(null,"data","data",-232669377),text], null));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),"");
} else {
return alert("No search entered!");
}
});
acme.core.search = (function acme$core$search(app,owner){
if(typeof acme.core.t_acme$core49511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core49511 = (function (search,app,owner,meta49512){
this.search = search;
this.app = app;
this.owner = owner;
this.meta49512 = meta49512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core49511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49513,meta49512__$1){
var self__ = this;
var _49513__$1 = this;
return (new acme.core.t_acme$core49511(self__.search,self__.app,self__.owner,meta49512__$1));
});

acme.core.t_acme$core49511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49513){
var self__ = this;
var _49513__$1 = this;
return self__.meta49512;
});

acme.core.t_acme$core49511.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core49511.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

acme.core.t_acme$core49511.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core49511.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__49514){
var self__ = this;
var map__49515 = p__49514;
var map__49515__$1 = ((((!((map__49515 == null)))?((((map__49515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49515):map__49515);
var text = cljs.core.get.call(null,map__49515__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var ___$1 = this;
return React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-4-5"},React.DOM.div({"className": "padded"},om.dom.input.call(null,{"placeholder": "Search for sequences ...", "className": "myinput pure-u-1", "type": "text", "value": text, "onKeyDown": ((function (___$1,map__49515,map__49515__$1,text){
return (function (p1__49503_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__49503_SHARP_.which)){
return acme.core.search_submit.call(null,self__.owner);
} else {
return null;
}
});})(___$1,map__49515,map__49515__$1,text))
, "onChange": ((function (___$1,map__49515,map__49515__$1,text){
return (function (p1__49504_SHARP_){
return acme.core.change.call(null,p1__49504_SHARP_,self__.owner);
});})(___$1,map__49515,map__49515__$1,text))
}))),React.DOM.div({"className": "pure-u-1-5"},React.DOM.div({"className": "padded"},React.DOM.button({"className": "pure-button pure-button-primary pure-u-1", "onClick": ((function (___$1,map__49515,map__49515__$1,text){
return (function (){
return acme.core.search_submit.call(null,self__.owner);
});})(___$1,map__49515,map__49515__$1,text))
},"Go"))));
});

acme.core.t_acme$core49511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49512","meta49512",-146190688,null)], null);
});

acme.core.t_acme$core49511.cljs$lang$type = true;

acme.core.t_acme$core49511.cljs$lang$ctorStr = "acme.core/t_acme$core49511";

acme.core.t_acme$core49511.cljs$lang$ctorPrWriter = (function (this__30015__auto__,writer__30016__auto__,opt__30017__auto__){
return cljs.core._write.call(null,writer__30016__auto__,"acme.core/t_acme$core49511");
});

acme.core.__GT_t_acme$core49511 = (function acme$core$search_$___GT_t_acme$core49511(search__$1,app__$1,owner__$1,meta49512){
return (new acme.core.t_acme$core49511(search__$1,app__$1,owner__$1,meta49512));
});

}

return (new acme.core.t_acme$core49511(acme$core$search,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.export$ = (function acme$core$export(_,owner){
if(typeof acme.core.t_acme$core49521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core49521 = (function (export$,_,owner,meta49522){
this.export$ = export$;
this._ = _;
this.owner = owner;
this.meta49522 = meta49522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core49521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49523,meta49522__$1){
var self__ = this;
var _49523__$1 = this;
return (new acme.core.t_acme$core49521(self__.export$,self__._,self__.owner,meta49522__$1));
});

acme.core.t_acme$core49521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49523){
var self__ = this;
var _49523__$1 = this;
return self__.meta49522;
});

acme.core.t_acme$core49521.prototype.om$core$IRender$ = true;

acme.core.t_acme$core49521.prototype.om$core$IRender$render$arity$1 = (function (this__32303__auto__){
var self__ = this;
var this__32303__auto____$1 = this;
return React.DOM.div({"style": {"float": "right"}},React.DOM.select({"style": {"font-size": "85%"}, "value": "", "className": "myinput", "onChange": ((function (this__32303__auto____$1){
return (function (p1__49517_SHARP_){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"export","export",214356590),p1__49517_SHARP_.target.value);
});})(this__32303__auto____$1))
},om.dom.option.call(null,{"value": "", "disabled": ""},"Export selected as ..."),om.dom.option.call(null,{"value": "fasta"},"Fasta")));
});

acme.core.t_acme$core49521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"export","export",1854888117,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49522","meta49522",1237926637,null)], null);
});

acme.core.t_acme$core49521.cljs$lang$type = true;

acme.core.t_acme$core49521.cljs$lang$ctorStr = "acme.core/t_acme$core49521";

acme.core.t_acme$core49521.cljs$lang$ctorPrWriter = (function (this__30015__auto__,writer__30016__auto__,opt__30017__auto__){
return cljs.core._write.call(null,writer__30016__auto__,"acme.core/t_acme$core49521");
});

acme.core.__GT_t_acme$core49521 = (function acme$core$export_$___GT_t_acme$core49521(export$__$1,___$1,owner__$1,meta49522){
return (new acme.core.t_acme$core49521(export$__$1,___$1,owner__$1,meta49522));
});

}

return (new acme.core.t_acme$core49521(acme$core$export,_,owner,null));
});
acme.core.nav = (function acme$core$nav(_,owner){
if(typeof acme.core.t_acme$core49530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core49530 = (function (nav,_,owner,meta49531){
this.nav = nav;
this._ = _;
this.owner = owner;
this.meta49531 = meta49531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core49530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49532,meta49531__$1){
var self__ = this;
var _49532__$1 = this;
return (new acme.core.t_acme$core49530(self__.nav,self__._,self__.owner,meta49531__$1));
});

acme.core.t_acme$core49530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49532){
var self__ = this;
var _49532__$1 = this;
return self__.meta49531;
});

acme.core.t_acme$core49530.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core49530.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(1),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null);
});

acme.core.t_acme$core49530.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core49530.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (___$1,np){
var self__ = this;
var ___$2 = this;
acme.core.change_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"start","start",-355208981));

return acme.core.change_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"total","total",1916810418));
});

acme.core.t_acme$core49530.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core49530.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__49533){
var self__ = this;
var map__49534 = p__49533;
var map__49534__$1 = ((((!((map__49534 == null)))?((((map__49534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49534):map__49534);
var start = cljs.core.get.call(null,map__49534__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var total = cljs.core.get.call(null,map__49534__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var ___$2 = this;
return React.DOM.div({"className": "pure-g padded"},React.DOM.div({"className": "pure-u-1-2"},React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,(1),start))?true:false), "onClick": ((function (___$2,map__49534,map__49534__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),((function (___$2,map__49534,map__49534__$1,start,total){
return (function (___$3){
return (1);
});})(___$2,map__49534,map__49534__$1,start,total))
);
});})(___$2,map__49534,map__49534__$1,start,total))
},"<<"),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,(1),start))?true:false), "onClick": ((function (___$2,map__49534,map__49534__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.dec);
});})(___$2,map__49534,map__49534__$1,start,total))
},"<"),React.DOM.button({"className": "buttondisplay", "disabled": "true"},[cljs.core.str("Page "),cljs.core.str(start),cljs.core.str(" of "),cljs.core.str(total)].join('')),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,start,total))?true:false), "onClick": ((function (___$2,map__49534,map__49534__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.inc);
});})(___$2,map__49534,map__49534__$1,start,total))
},">"),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,total,start))?true:false), "onClick": ((function (___$2,map__49534,map__49534__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),((function (___$2,map__49534,map__49534__$1,start,total){
return (function (___$3){
return total;
});})(___$2,map__49534,map__49534__$1,start,total))
);
});})(___$2,map__49534,map__49534__$1,start,total))
},">>")),React.DOM.div({"className": "pure-u-1-2"},om.core.build.call(null,acme.core.export$,null)));
});

acme.core.t_acme$core49530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49531","meta49531",-2118462832,null)], null);
});

acme.core.t_acme$core49530.cljs$lang$type = true;

acme.core.t_acme$core49530.cljs$lang$ctorStr = "acme.core/t_acme$core49530";

acme.core.t_acme$core49530.cljs$lang$ctorPrWriter = (function (this__30015__auto__,writer__30016__auto__,opt__30017__auto__){
return cljs.core._write.call(null,writer__30016__auto__,"acme.core/t_acme$core49530");
});

acme.core.__GT_t_acme$core49530 = (function acme$core$nav_$___GT_t_acme$core49530(nav__$1,___$1,owner__$1,meta49531){
return (new acme.core.t_acme$core49530(nav__$1,___$1,owner__$1,meta49531));
});

}

return (new acme.core.t_acme$core49530(acme$core$nav,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.protein = (function acme$core$protein(p__49536,owner){
var map__49545 = p__49536;
var map__49545__$1 = ((((!((map__49545 == null)))?((((map__49545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49545):map__49545);
var acc = cljs.core.get.call(null,map__49545__$1,new cljs.core.Keyword(null,"acc","acc",838566312));
var description = cljs.core.get.call(null,map__49545__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var sequence = cljs.core.get.call(null,map__49545__$1,new cljs.core.Keyword(null,"sequence","sequence",926807414));
if(typeof acme.core.t_acme$core49547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core49547 = (function (protein,p__49536,owner,map__49545,acc,description,sequence,meta49548){
this.protein = protein;
this.p__49536 = p__49536;
this.owner = owner;
this.map__49545 = map__49545;
this.acc = acc;
this.description = description;
this.sequence = sequence;
this.meta49548 = meta49548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core49547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49545,map__49545__$1,acc,description,sequence){
return (function (_49549,meta49548__$1){
var self__ = this;
var _49549__$1 = this;
return (new acme.core.t_acme$core49547(self__.protein,self__.p__49536,self__.owner,self__.map__49545,self__.acc,self__.description,self__.sequence,meta49548__$1));
});})(map__49545,map__49545__$1,acc,description,sequence))
;

acme.core.t_acme$core49547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49545,map__49545__$1,acc,description,sequence){
return (function (_49549){
var self__ = this;
var _49549__$1 = this;
return self__.meta49548;
});})(map__49545,map__49545__$1,acc,description,sequence))
;

acme.core.t_acme$core49547.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core49547.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__49545,map__49545__$1,acc,description,sequence){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),false], null);
});})(map__49545,map__49545__$1,acc,description,sequence))
;

acme.core.t_acme$core49547.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core49547.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__49545,map__49545__$1,acc,description,sequence){
return (function (_,np){
var self__ = this;
var ___$1 = this;
return acme.core.check_if_checked.call(null,self__.owner,np);
});})(map__49545,map__49545__$1,acc,description,sequence))
;

acme.core.t_acme$core49547.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core49547.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__49545,map__49545__$1,acc,description,sequence){
return (function (_,p__49550){
var self__ = this;
var map__49551 = p__49550;
var map__49551__$1 = ((((!((map__49551 == null)))?((((map__49551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49551):map__49551);
var checked = cljs.core.get.call(null,map__49551__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var ___$1 = this;
return React.DOM.label({"className": "protsumm"},om.dom.input.call(null,{"className": "protsumm", "type": "checkbox", "checked": checked, "onChange": ((function (___$1,map__49551,map__49551__$1,checked,map__49545,map__49545__$1,acc,description,sequence){
return (function (___$2){
acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),self__.acc);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not.call(null,checked));
});})(___$1,map__49551,map__49551__$1,checked,map__49545,map__49545__$1,acc,description,sequence))
},React.DOM.a({"width": "100%", "onClick": ((function (___$1,map__49551,map__49551__$1,checked,map__49545,map__49545__$1,acc,description,sequence){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"protein","protein",184296952),new cljs.core.Keyword(null,"data","data",-232669377),self__.acc], null));
});})(___$1,map__49551,map__49551__$1,checked,map__49545,map__49545__$1,acc,description,sequence))
},self__.description),React.DOM.div(null,React.DOM.span({"style": {"paddingRight": "15px"}},[cljs.core.str(cljs.core.count.call(null,self__.sequence)),cljs.core.str(" amino acid protein")].join('')),React.DOM.span(null,[cljs.core.str("JellyDB accession: "),cljs.core.str(self__.acc)].join(''))),React.DOM.div(null,React.DOM.a({"href": "#"},"Something else"))));
});})(map__49545,map__49545__$1,acc,description,sequence))
;

acme.core.t_acme$core49547.getBasis = ((function (map__49545,map__49545__$1,acc,description,sequence){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"protein","protein",1824828479,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__49536","p__49536",-547234285,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__49545","map__49545",-1395555985,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null),new cljs.core.Symbol(null,"meta49548","meta49548",2130227064,null)], null);
});})(map__49545,map__49545__$1,acc,description,sequence))
;

acme.core.t_acme$core49547.cljs$lang$type = true;

acme.core.t_acme$core49547.cljs$lang$ctorStr = "acme.core/t_acme$core49547";

acme.core.t_acme$core49547.cljs$lang$ctorPrWriter = ((function (map__49545,map__49545__$1,acc,description,sequence){
return (function (this__30015__auto__,writer__30016__auto__,opt__30017__auto__){
return cljs.core._write.call(null,writer__30016__auto__,"acme.core/t_acme$core49547");
});})(map__49545,map__49545__$1,acc,description,sequence))
;

acme.core.__GT_t_acme$core49547 = ((function (map__49545,map__49545__$1,acc,description,sequence){
return (function acme$core$protein_$___GT_t_acme$core49547(protein__$1,p__49536__$1,owner__$1,map__49545__$2,acc__$1,description__$1,sequence__$1,meta49548){
return (new acme.core.t_acme$core49547(protein__$1,p__49536__$1,owner__$1,map__49545__$2,acc__$1,description__$1,sequence__$1,meta49548));
});})(map__49545,map__49545__$1,acc,description,sequence))
;

}

return (new acme.core.t_acme$core49547(acme$core$protein,p__49536,owner,map__49545__$1,acc,description,sequence,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.proteins_view = (function acme$core$proteins_view(search,owner){
if(typeof acme.core.t_acme$core49559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core49559 = (function (proteins_view,search,owner,meta49560){
this.proteins_view = proteins_view;
this.search = search;
this.owner = owner;
this.meta49560 = meta49560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core49559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49561,meta49560__$1){
var self__ = this;
var _49561__$1 = this;
return (new acme.core.t_acme$core49559(self__.proteins_view,self__.search,self__.owner,meta49560__$1));
});

acme.core.t_acme$core49559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49561){
var self__ = this;
var _49561__$1 = this;
return self__.meta49560;
});

acme.core.t_acme$core49559.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core49559.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),(1),new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"proteins","proteins",-212247297),null,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search","search",1564939822),self__.search,new cljs.core.Keyword(null,"key","key",-1516042587),""], null);
});

acme.core.t_acme$core49559.prototype.om$core$IWillMount$ = true;

acme.core.t_acme$core49559.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
acme.core.serve_proteins.call(null,self__.owner);

acme.core.init_total_proteins.call(null,self__.owner);

acme.core.request_loop.call(null,self__.owner,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"start","start",-355208981));

acme.core.request_loop.call(null,self__.owner,new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"total","total",1916810418));

acme.core.protein_loop.call(null,self__.owner);

acme.core.selected_loop.call(null,self__.owner);

acme.core.is_selected_QMARK__loop.call(null,self__.owner);

return acme.core.export_loop.call(null,self__.owner);
});

acme.core.t_acme$core49559.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core49559.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"search","search",1564939822),np);
});

acme.core.t_acme$core49559.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core49559.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__49562){
var self__ = this;
var map__49563 = p__49562;
var map__49563__$1 = ((((!((map__49563 == null)))?((((map__49563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49563):map__49563);
var proteins = cljs.core.get.call(null,map__49563__$1,new cljs.core.Keyword(null,"proteins","proteins",-212247297));
var key = cljs.core.get.call(null,map__49563__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var search__$1 = cljs.core.get.call(null,map__49563__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var ___$1 = this;
return React.DOM.div(null,React.DOM.iframe({"id": "downloadframe", "src": ((!(cljs.core._EQ_.call(null,key,"")))?[cljs.core.str("/fetch?k="),cljs.core.str(key)].join(''):"")}),React.DOM.div({"className": "thick padded"},[cljs.core.str("Showing results matching \""),cljs.core.str(search__$1),cljs.core.str("\".")].join('')),om.core.build.call(null,acme.core.nav,null),cljs.core.apply.call(null,om.dom.div,{"className": "padded"},om.core.build_all.call(null,acme.core.protein,proteins)),om.core.build.call(null,acme.core.nav,null));
});

acme.core.t_acme$core49559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"proteins-view","proteins-view",-33624190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49560","meta49560",-401137926,null)], null);
});

acme.core.t_acme$core49559.cljs$lang$type = true;

acme.core.t_acme$core49559.cljs$lang$ctorStr = "acme.core/t_acme$core49559";

acme.core.t_acme$core49559.cljs$lang$ctorPrWriter = (function (this__30015__auto__,writer__30016__auto__,opt__30017__auto__){
return cljs.core._write.call(null,writer__30016__auto__,"acme.core/t_acme$core49559");
});

acme.core.__GT_t_acme$core49559 = (function acme$core$proteins_view_$___GT_t_acme$core49559(proteins_view__$1,search__$1,owner__$1,meta49560){
return (new acme.core.t_acme$core49559(proteins_view__$1,search__$1,owner__$1,meta49560));
});

}

return (new acme.core.t_acme$core49559(acme$core$proteins_view,search,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.protein_view = (function acme$core$protein_view(acc,owner){
if(typeof acme.core.t_acme$core49571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core49571 = (function (protein_view,acc,owner,meta49572){
this.protein_view = protein_view;
this.acc = acc;
this.owner = owner;
this.meta49572 = meta49572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core49571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49573,meta49572__$1){
var self__ = this;
var _49573__$1 = this;
return (new acme.core.t_acme$core49571(self__.protein_view,self__.acc,self__.owner,meta49572__$1));
});

acme.core.t_acme$core49571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49573){
var self__ = this;
var _49573__$1 = this;
return self__.meta49572;
});

acme.core.t_acme$core49571.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core49571.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accession","accession",-1015325932),self__.acc,new cljs.core.Keyword(null,"peptide","peptide",-401217402),null], null);
});

acme.core.t_acme$core49571.prototype.om$core$IWillMount$ = true;

acme.core.t_acme$core49571.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return acme.core.get_peptide.call(null,self__.owner);
});

acme.core.t_acme$core49571.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core49571.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__49574){
var self__ = this;
var map__49575 = p__49574;
var map__49575__$1 = ((((!((map__49575 == null)))?((((map__49575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49575):map__49575);
var accession = cljs.core.get.call(null,map__49575__$1,new cljs.core.Keyword(null,"accession","accession",-1015325932));
var peptide = cljs.core.get.call(null,map__49575__$1,new cljs.core.Keyword(null,"peptide","peptide",-401217402));
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "thick padded"},[cljs.core.str(accession),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(peptide))].join('')),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-5 thick padded"},"Accession:"),React.DOM.div({"className": "pure-u-3-5 padded"},accession)),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-5 thick padded"},"Description:"),React.DOM.div({"className": "pure-u-3-5 padded"},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(peptide))),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-5 thick padded"},"Protein sequence:"),React.DOM.div({"className": "pure-u-3-5 padded"},new cljs.core.Keyword(null,"sequence","sequence",926807414).cljs$core$IFn$_invoke$arity$1(peptide))));
});

acme.core.t_acme$core49571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"protein-view","protein-view",-647694776,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49572","meta49572",341844745,null)], null);
});

acme.core.t_acme$core49571.cljs$lang$type = true;

acme.core.t_acme$core49571.cljs$lang$ctorStr = "acme.core/t_acme$core49571";

acme.core.t_acme$core49571.cljs$lang$ctorPrWriter = (function (this__30015__auto__,writer__30016__auto__,opt__30017__auto__){
return cljs.core._write.call(null,writer__30016__auto__,"acme.core/t_acme$core49571");
});

acme.core.__GT_t_acme$core49571 = (function acme$core$protein_view_$___GT_t_acme$core49571(protein_view__$1,acc__$1,owner__$1,meta49572){
return (new acme.core.t_acme$core49571(protein_view__$1,acc__$1,owner__$1,meta49572));
});

}

return (new acme.core.t_acme$core49571(acme$core$protein_view,acc,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.home = (function acme$core$home(app,owner){
if(typeof acme.core.t_acme$core49580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core49580 = (function (home,app,owner,meta49581){
this.home = home;
this.app = app;
this.owner = owner;
this.meta49581 = meta49581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core49580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49582,meta49581__$1){
var self__ = this;
var _49582__$1 = this;
return (new acme.core.t_acme$core49580(self__.home,self__.app,self__.owner,meta49581__$1));
});

acme.core.t_acme$core49580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49582){
var self__ = this;
var _49582__$1 = this;
return self__.meta49581;
});

acme.core.t_acme$core49580.prototype.om$core$IRender$ = true;

acme.core.t_acme$core49580.prototype.om$core$IRender$render$arity$1 = (function (this__32303__auto__){
var self__ = this;
var this__32303__auto____$1 = this;
return React.DOM.div({"style": {"clear": "both"}},React.DOM.p(null,"Home"));
});

acme.core.t_acme$core49580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49581","meta49581",-288097725,null)], null);
});

acme.core.t_acme$core49580.cljs$lang$type = true;

acme.core.t_acme$core49580.cljs$lang$ctorStr = "acme.core/t_acme$core49580";

acme.core.t_acme$core49580.cljs$lang$ctorPrWriter = (function (this__30015__auto__,writer__30016__auto__,opt__30017__auto__){
return cljs.core._write.call(null,writer__30016__auto__,"acme.core/t_acme$core49580");
});

acme.core.__GT_t_acme$core49580 = (function acme$core$home_$___GT_t_acme$core49580(home__$1,app__$1,owner__$1,meta49581){
return (new acme.core.t_acme$core49580(home__$1,app__$1,owner__$1,meta49581));
});

}

return (new acme.core.t_acme$core49580(acme$core$home,app,owner,null));
});
acme.core.app_view = (function acme$core$app_view(app,owner){
if(typeof acme.core.t_acme$core49620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core49620 = (function (app_view,app,owner,meta49621){
this.app_view = app_view;
this.app = app;
this.owner = owner;
this.meta49621 = meta49621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core49620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49622,meta49621__$1){
var self__ = this;
var _49622__$1 = this;
return (new acme.core.t_acme$core49620(self__.app_view,self__.app,self__.owner,meta49621__$1));
});

acme.core.t_acme$core49620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49622){
var self__ = this;
var _49622__$1 = this;
return self__.meta49621;
});

acme.core.t_acme$core49620.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core49620.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"data","data",-232669377),null], null);
});

acme.core.t_acme$core49620.prototype.om$core$IDidMount$ = true;

acme.core.t_acme$core49620.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.Keyword(null,"view","view",1247994814),cljs.core.async.chan.call(null));
var c__31442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31442__auto__,events,___$1){
return (function (){
var f__31443__auto__ = (function (){var switch__31421__auto__ = ((function (c__31442__auto__,events,___$1){
return (function (state_49637){
var state_val_49638 = (state_49637[(1)]);
if((state_val_49638 === (1))){
var state_49637__$1 = state_49637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49637__$1,(2),events);
} else {
if((state_val_49638 === (2))){
var inst_49624 = (state_49637[(2)]);
var inst_49625 = inst_49624;
var state_49637__$1 = (function (){var statearr_49639 = state_49637;
(statearr_49639[(7)] = inst_49625);

return statearr_49639;
})();
var statearr_49640_49657 = state_49637__$1;
(statearr_49640_49657[(2)] = null);

(statearr_49640_49657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49638 === (3))){
var inst_49625 = (state_49637[(7)]);
var inst_49627 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(inst_49625);
var inst_49628 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),inst_49627);
var inst_49629 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_49625);
var inst_49630 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",-232669377),inst_49629);
var state_49637__$1 = (function (){var statearr_49641 = state_49637;
(statearr_49641[(8)] = inst_49630);

(statearr_49641[(9)] = inst_49628);

return statearr_49641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49637__$1,(5),events);
} else {
if((state_val_49638 === (4))){
var inst_49635 = (state_49637[(2)]);
var state_49637__$1 = state_49637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49637__$1,inst_49635);
} else {
if((state_val_49638 === (5))){
var inst_49632 = (state_49637[(2)]);
var inst_49625 = inst_49632;
var state_49637__$1 = (function (){var statearr_49642 = state_49637;
(statearr_49642[(7)] = inst_49625);

return statearr_49642;
})();
var statearr_49643_49658 = state_49637__$1;
(statearr_49643_49658[(2)] = null);

(statearr_49643_49658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__31442__auto__,events,___$1))
;
return ((function (switch__31421__auto__,c__31442__auto__,events,___$1){
return (function() {
var acme$core$app_view_$_state_machine__31422__auto__ = null;
var acme$core$app_view_$_state_machine__31422__auto____0 = (function (){
var statearr_49647 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49647[(0)] = acme$core$app_view_$_state_machine__31422__auto__);

(statearr_49647[(1)] = (1));

return statearr_49647;
});
var acme$core$app_view_$_state_machine__31422__auto____1 = (function (state_49637){
while(true){
var ret_value__31423__auto__ = (function (){try{while(true){
var result__31424__auto__ = switch__31421__auto__.call(null,state_49637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31424__auto__;
}
break;
}
}catch (e49648){if((e49648 instanceof Object)){
var ex__31425__auto__ = e49648;
var statearr_49649_49659 = state_49637;
(statearr_49649_49659[(5)] = ex__31425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49660 = state_49637;
state_49637 = G__49660;
continue;
} else {
return ret_value__31423__auto__;
}
break;
}
});
acme$core$app_view_$_state_machine__31422__auto__ = function(state_49637){
switch(arguments.length){
case 0:
return acme$core$app_view_$_state_machine__31422__auto____0.call(this);
case 1:
return acme$core$app_view_$_state_machine__31422__auto____1.call(this,state_49637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$app_view_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$app_view_$_state_machine__31422__auto____0;
acme$core$app_view_$_state_machine__31422__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$app_view_$_state_machine__31422__auto____1;
return acme$core$app_view_$_state_machine__31422__auto__;
})()
;})(switch__31421__auto__,c__31442__auto__,events,___$1))
})();
var state__31444__auto__ = (function (){var statearr_49650 = f__31443__auto__.call(null);
(statearr_49650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31442__auto__);

return statearr_49650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31444__auto__);
});})(c__31442__auto__,events,___$1))
);

return c__31442__auto__;
});

acme.core.t_acme$core49620.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core49620.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__49651){
var self__ = this;
var map__49652 = p__49651;
var map__49652__$1 = ((((!((map__49652 == null)))?((((map__49652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49652):map__49652);
var view = cljs.core.get.call(null,map__49652__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var data = cljs.core.get.call(null,map__49652__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var ___$1 = this;
return React.DOM.div(null,(function (){var pred__49654 = cljs.core._EQ_;
var expr__49655 = view;
if(cljs.core.truth_(pred__49654.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__49655))){
return om.core.build.call(null,acme.core.home,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.truth_(pred__49654.call(null,new cljs.core.Keyword(null,"proteins","proteins",-212247297),expr__49655))){
return om.core.build.call(null,acme.core.proteins_view,data);
} else {
if(cljs.core.truth_(pred__49654.call(null,new cljs.core.Keyword(null,"protein","protein",184296952),expr__49655))){
return om.core.build.call(null,acme.core.protein_view,data);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__49655)].join('')));
}
}
}
})());
});

acme.core.t_acme$core49620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49621","meta49621",-1383692634,null)], null);
});

acme.core.t_acme$core49620.cljs$lang$type = true;

acme.core.t_acme$core49620.cljs$lang$ctorStr = "acme.core/t_acme$core49620";

acme.core.t_acme$core49620.cljs$lang$ctorPrWriter = (function (this__30015__auto__,writer__30016__auto__,opt__30017__auto__){
return cljs.core._write.call(null,writer__30016__auto__,"acme.core/t_acme$core49620");
});

acme.core.__GT_t_acme$core49620 = (function acme$core$app_view_$___GT_t_acme$core49620(app_view__$1,app__$1,owner__$1,meta49621){
return (new acme.core.t_acme$core49620(app_view__$1,app__$1,owner__$1,meta49621));
});

}

return (new acme.core.t_acme$core49620(acme$core$app_view,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.outer = (function acme$core$outer(app,owner){
if(typeof acme.core.t_acme$core49664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core49664 = (function (outer,app,owner,meta49665){
this.outer = outer;
this.app = app;
this.owner = owner;
this.meta49665 = meta49665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core49664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49666,meta49665__$1){
var self__ = this;
var _49666__$1 = this;
return (new acme.core.t_acme$core49664(self__.outer,self__.app,self__.owner,meta49665__$1));
});

acme.core.t_acme$core49664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49666){
var self__ = this;
var _49666__$1 = this;
return self__.meta49665;
});

acme.core.t_acme$core49664.prototype.om$core$IRender$ = true;

acme.core.t_acme$core49664.prototype.om$core$IRender$render$arity$1 = (function (this__32303__auto__){
var self__ = this;
var this__32303__auto____$1 = this;
return React.DOM.div(null,React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"search"], null),om.core.build.call(null,acme.core.search,cljs.core.PersistentArrayMap.EMPTY)),React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"data"], null),om.core.build.call(null,acme.core.app_view,self__.app)));
});

acme.core.t_acme$core49664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"outer","outer",1265345571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49665","meta49665",150005333,null)], null);
});

acme.core.t_acme$core49664.cljs$lang$type = true;

acme.core.t_acme$core49664.cljs$lang$ctorStr = "acme.core/t_acme$core49664";

acme.core.t_acme$core49664.cljs$lang$ctorPrWriter = (function (this__30015__auto__,writer__30016__auto__,opt__30017__auto__){
return cljs.core._write.call(null,writer__30016__auto__,"acme.core/t_acme$core49664");
});

acme.core.__GT_t_acme$core49664 = (function acme$core$outer_$___GT_t_acme$core49664(outer__$1,app__$1,owner__$1,meta49665){
return (new acme.core.t_acme$core49664(outer__$1,app__$1,owner__$1,meta49665));
});

}

return (new acme.core.t_acme$core49664(acme$core$outer,app,owner,null));
});
acme.core.main = (function acme$core$main(){
var req_chan = cljs.core.async.chan.call(null);
var pub_chan = cljs.core.async.chan.call(null);
var notif_chan = cljs.core.async.pub.call(null,pub_chan,new cljs.core.Keyword(null,"topic","topic",-1960480691));
return om.core.root.call(null,acme.core.outer,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"req-chan","req-chan",-35924046),req_chan,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026),notif_chan,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593),pub_chan], null),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("t")], null));
});
acme.core.main.call(null);

//# sourceMappingURL=core.js.map