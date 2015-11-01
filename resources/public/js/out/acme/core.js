// Compiled by ClojureScript 1.7.145 {}
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
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events){
return (function (state_144116){
var state_val_144117 = (state_144116[(1)]);
if((state_val_144117 === (1))){
var state_144116__$1 = state_144116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144116__$1,(2),events);
} else {
if((state_val_144117 === (2))){
var inst_144103 = (state_144116[(2)]);
var inst_144104 = inst_144103;
var state_144116__$1 = (function (){var statearr_144118 = state_144116;
(statearr_144118[(7)] = inst_144104);

return statearr_144118;
})();
var statearr_144119_144130 = state_144116__$1;
(statearr_144119_144130[(2)] = null);

(statearr_144119_144130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144117 === (3))){
var inst_144104 = (state_144116[(7)]);
var inst_144106 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_144104);
var inst_144107 = om.core.get_state.call(null,owner,state);
var state_144116__$1 = state_144116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144116__$1,(5),inst_144106,inst_144107);
} else {
if((state_val_144117 === (4))){
var inst_144114 = (state_144116[(2)]);
var state_144116__$1 = state_144116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144116__$1,inst_144114);
} else {
if((state_val_144117 === (5))){
var inst_144109 = (state_144116[(2)]);
var state_144116__$1 = (function (){var statearr_144120 = state_144116;
(statearr_144120[(8)] = inst_144109);

return statearr_144120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144116__$1,(6),events);
} else {
if((state_val_144117 === (6))){
var inst_144111 = (state_144116[(2)]);
var inst_144104 = inst_144111;
var state_144116__$1 = (function (){var statearr_144121 = state_144116;
(statearr_144121[(7)] = inst_144104);

return statearr_144121;
})();
var statearr_144122_144131 = state_144116__$1;
(statearr_144122_144131[(2)] = null);

(statearr_144122_144131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__7633__auto__,events))
;
return ((function (switch__7612__auto__,c__7633__auto__,events){
return (function() {
var acme$core$request_loop_$_state_machine__7613__auto__ = null;
var acme$core$request_loop_$_state_machine__7613__auto____0 = (function (){
var statearr_144126 = [null,null,null,null,null,null,null,null,null];
(statearr_144126[(0)] = acme$core$request_loop_$_state_machine__7613__auto__);

(statearr_144126[(1)] = (1));

return statearr_144126;
});
var acme$core$request_loop_$_state_machine__7613__auto____1 = (function (state_144116){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_144116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e144127){if((e144127 instanceof Object)){
var ex__7616__auto__ = e144127;
var statearr_144128_144132 = state_144116;
(statearr_144128_144132[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144133 = state_144116;
state_144116 = G__144133;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$request_loop_$_state_machine__7613__auto__ = function(state_144116){
switch(arguments.length){
case 0:
return acme$core$request_loop_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$request_loop_$_state_machine__7613__auto____1.call(this,state_144116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$request_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$request_loop_$_state_machine__7613__auto____0;
acme$core$request_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$request_loop_$_state_machine__7613__auto____1;
return acme$core$request_loop_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events))
})();
var state__7635__auto__ = (function (){var statearr_144129 = f__7634__auto__.call(null);
(statearr_144129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_144129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events))
);

return c__7633__auto__;
});
acme.core.change_state_BANG_ = (function acme$core$change_state_BANG_(owner,topic,state){
var c = cljs.core.async.chan.call(null);
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,c){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,c){
return (function (state_144183){
var state_val_144184 = (state_144183[(1)]);
if((state_val_144184 === (1))){
var inst_144166 = om.core.get_shared.call(null,owner);
var inst_144167 = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(inst_144166);
var inst_144168 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"chan","chan",-2103021695)];
var inst_144169 = [topic,c];
var inst_144170 = cljs.core.PersistentHashMap.fromArrays(inst_144168,inst_144169);
var inst_144171 = cljs.core.async.put_BANG_.call(null,inst_144167,inst_144170);
var state_144183__$1 = (function (){var statearr_144185 = state_144183;
(statearr_144185[(7)] = inst_144171);

return statearr_144185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144183__$1,(2),c);
} else {
if((state_val_144184 === (2))){
var inst_144173 = (state_144183[(8)]);
var inst_144173__$1 = (state_144183[(2)]);
var inst_144174 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_144175 = cljs.core._EQ_.call(null,inst_144173__$1,inst_144174);
var inst_144176 = !(inst_144175);
var state_144183__$1 = (function (){var statearr_144186 = state_144183;
(statearr_144186[(8)] = inst_144173__$1);

return statearr_144186;
})();
if(inst_144176){
var statearr_144187_144198 = state_144183__$1;
(statearr_144187_144198[(1)] = (3));

} else {
var statearr_144188_144199 = state_144183__$1;
(statearr_144188_144199[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144184 === (3))){
var inst_144173 = (state_144183[(8)]);
var inst_144178 = om.core.set_state_BANG_.call(null,owner,state,inst_144173);
var state_144183__$1 = state_144183;
var statearr_144189_144200 = state_144183__$1;
(statearr_144189_144200[(2)] = inst_144178);

(statearr_144189_144200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144184 === (4))){
var state_144183__$1 = state_144183;
var statearr_144190_144201 = state_144183__$1;
(statearr_144190_144201[(2)] = null);

(statearr_144190_144201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144184 === (5))){
var inst_144181 = (state_144183[(2)]);
var state_144183__$1 = state_144183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144183__$1,inst_144181);
} else {
return null;
}
}
}
}
}
});})(c__7633__auto__,c))
;
return ((function (switch__7612__auto__,c__7633__auto__,c){
return (function() {
var acme$core$change_state_BANG__$_state_machine__7613__auto__ = null;
var acme$core$change_state_BANG__$_state_machine__7613__auto____0 = (function (){
var statearr_144194 = [null,null,null,null,null,null,null,null,null];
(statearr_144194[(0)] = acme$core$change_state_BANG__$_state_machine__7613__auto__);

(statearr_144194[(1)] = (1));

return statearr_144194;
});
var acme$core$change_state_BANG__$_state_machine__7613__auto____1 = (function (state_144183){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_144183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e144195){if((e144195 instanceof Object)){
var ex__7616__auto__ = e144195;
var statearr_144196_144202 = state_144183;
(statearr_144196_144202[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144203 = state_144183;
state_144183 = G__144203;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$change_state_BANG__$_state_machine__7613__auto__ = function(state_144183){
switch(arguments.length){
case 0:
return acme$core$change_state_BANG__$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$change_state_BANG__$_state_machine__7613__auto____1.call(this,state_144183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$change_state_BANG__$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$change_state_BANG__$_state_machine__7613__auto____0;
acme$core$change_state_BANG__$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$change_state_BANG__$_state_machine__7613__auto____1;
return acme$core$change_state_BANG__$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,c))
})();
var state__7635__auto__ = (function (){var statearr_144197 = f__7634__auto__.call(null);
(statearr_144197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_144197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,c))
);

return c__7633__auto__;
});
acme.core.pub_info = (function acme$core$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
acme.core.error_handler = (function acme$core$error_handler(p__144204){
var map__144207 = p__144204;
var map__144207__$1 = ((((!((map__144207 == null)))?((((map__144207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144207):map__144207);
var status = cljs.core.get.call(null,map__144207__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__144207__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return acme.core.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
acme.core.get_fasta_key = (function acme$core$get_fasta_key(owner){
var h = (function acme$core$get_fasta_key_$_h(p__144224){
var map__144227 = p__144224;
var map__144227__$1 = ((((!((map__144227 == null)))?((((map__144227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144227):map__144227);
var status = cljs.core.get.call(null,map__144227__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.call(null,map__144227__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var msg = cljs.core.get.call(null,map__144227__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
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
return (function (p__144232){
var map__144233 = p__144232;
var map__144233__$1 = ((((!((map__144233 == null)))?((((map__144233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144233):map__144233);
var r = map__144233__$1;
var status = cljs.core.get.call(null,map__144233__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var proteins = cljs.core.get.call(null,map__144233__$1,new cljs.core.Keyword(null,"proteins","proteins",-212247297));
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
var h = (function acme$core$init_total_proteins_$_h(p__144250){
var map__144253 = p__144250;
var map__144253__$1 = ((((!((map__144253 == null)))?((((map__144253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144253):map__144253);
var r = map__144253__$1;
var status = cljs.core.get.call(null,map__144253__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var count = cljs.core.get.call(null,map__144253__$1,new cljs.core.Keyword(null,"count","count",2139924085));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"total","total",1916810418),Math.ceil((count / (20))));
} else {
throw (new Error("Error in total protein determination."));
}
});
return ajax.core.GET.call(null,"/protein-count",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),acme.core.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
acme.core.check_if_checked = (function acme$core$check_if_checked(owner,np){
var c = cljs.core.async.chan.call(null);
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,c){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,c){
return (function (state_144306){
var state_val_144307 = (state_144306[(1)]);
if((state_val_144307 === (1))){
var inst_144288 = om.core.get_shared.call(null,owner);
var inst_144289 = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(inst_144288);
var inst_144290 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"chan","chan",-2103021695)];
var inst_144291 = new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(np);
var inst_144292 = [new cljs.core.Keyword(null,"selected?","selected?",-742502788),inst_144291,c];
var inst_144293 = cljs.core.PersistentHashMap.fromArrays(inst_144290,inst_144292);
var inst_144294 = cljs.core.async.put_BANG_.call(null,inst_144289,inst_144293);
var state_144306__$1 = (function (){var statearr_144308 = state_144306;
(statearr_144308[(7)] = inst_144294);

return statearr_144308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144306__$1,(2),c);
} else {
if((state_val_144307 === (2))){
var inst_144296 = (state_144306[(8)]);
var inst_144296__$1 = (state_144306[(2)]);
var inst_144297 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"checked","checked",-50955819));
var inst_144298 = cljs.core._EQ_.call(null,inst_144296__$1,inst_144297);
var inst_144299 = !(inst_144298);
var state_144306__$1 = (function (){var statearr_144309 = state_144306;
(statearr_144309[(8)] = inst_144296__$1);

return statearr_144309;
})();
if(inst_144299){
var statearr_144310_144321 = state_144306__$1;
(statearr_144310_144321[(1)] = (3));

} else {
var statearr_144311_144322 = state_144306__$1;
(statearr_144311_144322[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144307 === (3))){
var inst_144296 = (state_144306[(8)]);
var inst_144301 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"checked","checked",-50955819),inst_144296);
var state_144306__$1 = state_144306;
var statearr_144312_144323 = state_144306__$1;
(statearr_144312_144323[(2)] = inst_144301);

(statearr_144312_144323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144307 === (4))){
var state_144306__$1 = state_144306;
var statearr_144313_144324 = state_144306__$1;
(statearr_144313_144324[(2)] = null);

(statearr_144313_144324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144307 === (5))){
var inst_144304 = (state_144306[(2)]);
var state_144306__$1 = state_144306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144306__$1,inst_144304);
} else {
return null;
}
}
}
}
}
});})(c__7633__auto__,c))
;
return ((function (switch__7612__auto__,c__7633__auto__,c){
return (function() {
var acme$core$check_if_checked_$_state_machine__7613__auto__ = null;
var acme$core$check_if_checked_$_state_machine__7613__auto____0 = (function (){
var statearr_144317 = [null,null,null,null,null,null,null,null,null];
(statearr_144317[(0)] = acme$core$check_if_checked_$_state_machine__7613__auto__);

(statearr_144317[(1)] = (1));

return statearr_144317;
});
var acme$core$check_if_checked_$_state_machine__7613__auto____1 = (function (state_144306){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_144306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e144318){if((e144318 instanceof Object)){
var ex__7616__auto__ = e144318;
var statearr_144319_144325 = state_144306;
(statearr_144319_144325[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144326 = state_144306;
state_144306 = G__144326;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$check_if_checked_$_state_machine__7613__auto__ = function(state_144306){
switch(arguments.length){
case 0:
return acme$core$check_if_checked_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$check_if_checked_$_state_machine__7613__auto____1.call(this,state_144306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$check_if_checked_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$check_if_checked_$_state_machine__7613__auto____0;
acme$core$check_if_checked_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$check_if_checked_$_state_machine__7613__auto____1;
return acme$core$check_if_checked_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,c))
})();
var state__7635__auto__ = (function (){var statearr_144320 = f__7634__auto__.call(null);
(statearr_144320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_144320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,c))
);

return c__7633__auto__;
});
acme.core.protein_loop = (function acme$core$protein_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events){
return (function (state_144371){
var state_val_144372 = (state_144371[(1)]);
if((state_val_144372 === (1))){
var state_144371__$1 = state_144371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144371__$1,(2),events);
} else {
if((state_val_144372 === (2))){
var inst_144357 = (state_144371[(2)]);
var inst_144358 = inst_144357;
var state_144371__$1 = (function (){var statearr_144373 = state_144371;
(statearr_144373[(7)] = inst_144358);

return statearr_144373;
})();
var statearr_144374_144385 = state_144371__$1;
(statearr_144374_144385[(2)] = null);

(statearr_144374_144385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144372 === (3))){
var inst_144358 = (state_144371[(7)]);
var inst_144360 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_144358);
var inst_144361 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"start","start",-355208981));
var inst_144362 = inst_144360.call(null,inst_144361);
var inst_144363 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"start","start",-355208981),inst_144362);
var inst_144364 = acme.core.serve_proteins.call(null,owner);
var state_144371__$1 = (function (){var statearr_144375 = state_144371;
(statearr_144375[(8)] = inst_144364);

(statearr_144375[(9)] = inst_144363);

return statearr_144375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144371__$1,(5),events);
} else {
if((state_val_144372 === (4))){
var inst_144369 = (state_144371[(2)]);
var state_144371__$1 = state_144371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144371__$1,inst_144369);
} else {
if((state_val_144372 === (5))){
var inst_144366 = (state_144371[(2)]);
var inst_144358 = inst_144366;
var state_144371__$1 = (function (){var statearr_144376 = state_144371;
(statearr_144376[(7)] = inst_144358);

return statearr_144376;
})();
var statearr_144377_144386 = state_144371__$1;
(statearr_144377_144386[(2)] = null);

(statearr_144377_144386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7633__auto__,events))
;
return ((function (switch__7612__auto__,c__7633__auto__,events){
return (function() {
var acme$core$protein_loop_$_state_machine__7613__auto__ = null;
var acme$core$protein_loop_$_state_machine__7613__auto____0 = (function (){
var statearr_144381 = [null,null,null,null,null,null,null,null,null,null];
(statearr_144381[(0)] = acme$core$protein_loop_$_state_machine__7613__auto__);

(statearr_144381[(1)] = (1));

return statearr_144381;
});
var acme$core$protein_loop_$_state_machine__7613__auto____1 = (function (state_144371){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_144371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e144382){if((e144382 instanceof Object)){
var ex__7616__auto__ = e144382;
var statearr_144383_144387 = state_144371;
(statearr_144383_144387[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144388 = state_144371;
state_144371 = G__144388;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$protein_loop_$_state_machine__7613__auto__ = function(state_144371){
switch(arguments.length){
case 0:
return acme$core$protein_loop_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$protein_loop_$_state_machine__7613__auto____1.call(this,state_144371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$protein_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$protein_loop_$_state_machine__7613__auto____0;
acme$core$protein_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$protein_loop_$_state_machine__7613__auto____1;
return acme$core$protein_loop_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events))
})();
var state__7635__auto__ = (function (){var statearr_144384 = f__7634__auto__.call(null);
(statearr_144384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_144384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events))
);

return c__7633__auto__;
});
acme.core.selected_loop = (function acme$core$selected_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events){
return (function (state_144452){
var state_val_144453 = (state_144452[(1)]);
if((state_val_144453 === (1))){
var state_144452__$1 = state_144452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144452__$1,(2),events);
} else {
if((state_val_144453 === (2))){
var inst_144432 = (state_144452[(2)]);
var inst_144433 = inst_144432;
var state_144452__$1 = (function (){var statearr_144454 = state_144452;
(statearr_144454[(7)] = inst_144433);

return statearr_144454;
})();
var statearr_144455_144470 = state_144452__$1;
(statearr_144455_144470[(2)] = null);

(statearr_144455_144470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144453 === (3))){
var inst_144433 = (state_144452[(7)]);
var inst_144435 = (function (){var e = inst_144433;
return ((function (e,inst_144433,state_val_144453,c__7633__auto__,events){
return (function (p1__144389_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),p1__144389_SHARP_);
});
;})(e,inst_144433,state_val_144453,c__7633__auto__,events))
})();
var inst_144436 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var inst_144437 = cljs.core.some.call(null,inst_144435,inst_144436);
var state_144452__$1 = state_144452;
if(cljs.core.truth_(inst_144437)){
var statearr_144456_144471 = state_144452__$1;
(statearr_144456_144471[(1)] = (5));

} else {
var statearr_144457_144472 = state_144452__$1;
(statearr_144457_144472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144453 === (4))){
var inst_144450 = (state_144452[(2)]);
var state_144452__$1 = state_144452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144452__$1,inst_144450);
} else {
if((state_val_144453 === (5))){
var inst_144433 = (state_144452[(7)]);
var inst_144439 = (function (){var e = inst_144433;
return ((function (e,inst_144433,state_val_144453,c__7633__auto__,events){
return (function (x){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (e,inst_144433,state_val_144453,c__7633__auto__,events){
return (function (p1__144390_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),p1__144390_SHARP_);
});})(e,inst_144433,state_val_144453,c__7633__auto__,events))
,x));
});
;})(e,inst_144433,state_val_144453,c__7633__auto__,events))
})();
var inst_144440 = om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_144439);
var state_144452__$1 = state_144452;
var statearr_144458_144473 = state_144452__$1;
(statearr_144458_144473[(2)] = inst_144440);

(statearr_144458_144473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144453 === (6))){
var inst_144433 = (state_144452[(7)]);
var inst_144442 = (function (){var e = inst_144433;
return ((function (e,inst_144433,state_val_144453,c__7633__auto__,events){
return (function (p1__144391_SHARP_){
return cljs.core.conj.call(null,p1__144391_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
});
;})(e,inst_144433,state_val_144453,c__7633__auto__,events))
})();
var inst_144443 = om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_144442);
var state_144452__$1 = state_144452;
var statearr_144459_144474 = state_144452__$1;
(statearr_144459_144474[(2)] = inst_144443);

(statearr_144459_144474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144453 === (7))){
var inst_144445 = (state_144452[(2)]);
var state_144452__$1 = (function (){var statearr_144460 = state_144452;
(statearr_144460[(8)] = inst_144445);

return statearr_144460;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144452__$1,(8),events);
} else {
if((state_val_144453 === (8))){
var inst_144447 = (state_144452[(2)]);
var inst_144433 = inst_144447;
var state_144452__$1 = (function (){var statearr_144461 = state_144452;
(statearr_144461[(7)] = inst_144433);

return statearr_144461;
})();
var statearr_144462_144475 = state_144452__$1;
(statearr_144462_144475[(2)] = null);

(statearr_144462_144475[(1)] = (3));


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
});})(c__7633__auto__,events))
;
return ((function (switch__7612__auto__,c__7633__auto__,events){
return (function() {
var acme$core$selected_loop_$_state_machine__7613__auto__ = null;
var acme$core$selected_loop_$_state_machine__7613__auto____0 = (function (){
var statearr_144466 = [null,null,null,null,null,null,null,null,null];
(statearr_144466[(0)] = acme$core$selected_loop_$_state_machine__7613__auto__);

(statearr_144466[(1)] = (1));

return statearr_144466;
});
var acme$core$selected_loop_$_state_machine__7613__auto____1 = (function (state_144452){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_144452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e144467){if((e144467 instanceof Object)){
var ex__7616__auto__ = e144467;
var statearr_144468_144476 = state_144452;
(statearr_144468_144476[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144477 = state_144452;
state_144452 = G__144477;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$selected_loop_$_state_machine__7613__auto__ = function(state_144452){
switch(arguments.length){
case 0:
return acme$core$selected_loop_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$selected_loop_$_state_machine__7613__auto____1.call(this,state_144452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$selected_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$selected_loop_$_state_machine__7613__auto____0;
acme$core$selected_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$selected_loop_$_state_machine__7613__auto____1;
return acme$core$selected_loop_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events))
})();
var state__7635__auto__ = (function (){var statearr_144469 = f__7634__auto__.call(null);
(statearr_144469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_144469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events))
);

return c__7633__auto__;
});
acme.core.is_selected_QMARK__loop = (function acme$core$is_selected_QMARK__loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events){
return (function (state_144539){
var state_val_144540 = (state_144539[(1)]);
if((state_val_144540 === (1))){
var state_144539__$1 = state_144539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144539__$1,(2),events);
} else {
if((state_val_144540 === (2))){
var inst_144519 = (state_144539[(2)]);
var inst_144520 = inst_144519;
var state_144539__$1 = (function (){var statearr_144541 = state_144539;
(statearr_144541[(7)] = inst_144520);

return statearr_144541;
})();
var statearr_144542_144557 = state_144539__$1;
(statearr_144542_144557[(2)] = null);

(statearr_144542_144557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144540 === (3))){
var inst_144520 = (state_144539[(7)]);
var inst_144522 = (function (){var e = inst_144520;
return ((function (e,inst_144520,state_val_144540,c__7633__auto__,events){
return (function (p1__144478_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),p1__144478_SHARP_);
});
;})(e,inst_144520,state_val_144540,c__7633__auto__,events))
})();
var inst_144523 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var inst_144524 = cljs.core.some.call(null,inst_144522,inst_144523);
var state_144539__$1 = state_144539;
if(cljs.core.truth_(inst_144524)){
var statearr_144543_144558 = state_144539__$1;
(statearr_144543_144558[(1)] = (5));

} else {
var statearr_144544_144559 = state_144539__$1;
(statearr_144544_144559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144540 === (4))){
var inst_144537 = (state_144539[(2)]);
var state_144539__$1 = state_144539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144539__$1,inst_144537);
} else {
if((state_val_144540 === (5))){
var inst_144520 = (state_144539[(7)]);
var inst_144526 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_144520);
var inst_144527 = cljs.core.async.put_BANG_.call(null,inst_144526,true);
var state_144539__$1 = state_144539;
var statearr_144545_144560 = state_144539__$1;
(statearr_144545_144560[(2)] = inst_144527);

(statearr_144545_144560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144540 === (6))){
var inst_144520 = (state_144539[(7)]);
var inst_144529 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_144520);
var inst_144530 = cljs.core.async.put_BANG_.call(null,inst_144529,false);
var state_144539__$1 = state_144539;
var statearr_144546_144561 = state_144539__$1;
(statearr_144546_144561[(2)] = inst_144530);

(statearr_144546_144561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144540 === (7))){
var inst_144532 = (state_144539[(2)]);
var state_144539__$1 = (function (){var statearr_144547 = state_144539;
(statearr_144547[(8)] = inst_144532);

return statearr_144547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144539__$1,(8),events);
} else {
if((state_val_144540 === (8))){
var inst_144534 = (state_144539[(2)]);
var inst_144520 = inst_144534;
var state_144539__$1 = (function (){var statearr_144548 = state_144539;
(statearr_144548[(7)] = inst_144520);

return statearr_144548;
})();
var statearr_144549_144562 = state_144539__$1;
(statearr_144549_144562[(2)] = null);

(statearr_144549_144562[(1)] = (3));


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
});})(c__7633__auto__,events))
;
return ((function (switch__7612__auto__,c__7633__auto__,events){
return (function() {
var acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto__ = null;
var acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto____0 = (function (){
var statearr_144553 = [null,null,null,null,null,null,null,null,null];
(statearr_144553[(0)] = acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto__);

(statearr_144553[(1)] = (1));

return statearr_144553;
});
var acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto____1 = (function (state_144539){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_144539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e144554){if((e144554 instanceof Object)){
var ex__7616__auto__ = e144554;
var statearr_144555_144563 = state_144539;
(statearr_144555_144563[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144564 = state_144539;
state_144539 = G__144564;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto__ = function(state_144539){
switch(arguments.length){
case 0:
return acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto____1.call(this,state_144539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto____0;
acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto____1;
return acme$core$is_selected_QMARK__loop_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events))
})();
var state__7635__auto__ = (function (){var statearr_144556 = f__7634__auto__.call(null);
(statearr_144556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_144556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events))
);

return c__7633__auto__;
});
acme.core.export_loop = (function acme$core$export_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"export","export",214356590),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events){
return (function (state_144603){
var state_val_144604 = (state_144603[(1)]);
if((state_val_144604 === (1))){
var state_144603__$1 = state_144603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144603__$1,(2),events);
} else {
if((state_val_144604 === (2))){
var inst_144592 = (state_144603[(2)]);
var inst_144593 = inst_144592;
var state_144603__$1 = (function (){var statearr_144605 = state_144603;
(statearr_144605[(7)] = inst_144593);

return statearr_144605;
})();
var statearr_144606_144617 = state_144603__$1;
(statearr_144606_144617[(2)] = null);

(statearr_144606_144617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144604 === (3))){
var inst_144595 = acme.core.get_fasta_key.call(null,owner);
var inst_144596 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"key","key",-1516042587),"");
var state_144603__$1 = (function (){var statearr_144607 = state_144603;
(statearr_144607[(8)] = inst_144596);

(statearr_144607[(9)] = inst_144595);

return statearr_144607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144603__$1,(5),events);
} else {
if((state_val_144604 === (4))){
var inst_144601 = (state_144603[(2)]);
var state_144603__$1 = state_144603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144603__$1,inst_144601);
} else {
if((state_val_144604 === (5))){
var inst_144598 = (state_144603[(2)]);
var inst_144593 = inst_144598;
var state_144603__$1 = (function (){var statearr_144608 = state_144603;
(statearr_144608[(7)] = inst_144593);

return statearr_144608;
})();
var statearr_144609_144618 = state_144603__$1;
(statearr_144609_144618[(2)] = null);

(statearr_144609_144618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7633__auto__,events))
;
return ((function (switch__7612__auto__,c__7633__auto__,events){
return (function() {
var acme$core$export_loop_$_state_machine__7613__auto__ = null;
var acme$core$export_loop_$_state_machine__7613__auto____0 = (function (){
var statearr_144613 = [null,null,null,null,null,null,null,null,null,null];
(statearr_144613[(0)] = acme$core$export_loop_$_state_machine__7613__auto__);

(statearr_144613[(1)] = (1));

return statearr_144613;
});
var acme$core$export_loop_$_state_machine__7613__auto____1 = (function (state_144603){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_144603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e144614){if((e144614 instanceof Object)){
var ex__7616__auto__ = e144614;
var statearr_144615_144619 = state_144603;
(statearr_144615_144619[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144620 = state_144603;
state_144603 = G__144620;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$export_loop_$_state_machine__7613__auto__ = function(state_144603){
switch(arguments.length){
case 0:
return acme$core$export_loop_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$export_loop_$_state_machine__7613__auto____1.call(this,state_144603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$export_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$export_loop_$_state_machine__7613__auto____0;
acme$core$export_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$export_loop_$_state_machine__7613__auto____1;
return acme$core$export_loop_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events))
})();
var state__7635__auto__ = (function (){var statearr_144616 = f__7634__auto__.call(null);
(statearr_144616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_144616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events))
);

return c__7633__auto__;
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
if(typeof acme.core.t_acme$core144629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core144629 = (function (search,app,owner,meta144630){
this.search = search;
this.app = app;
this.owner = owner;
this.meta144630 = meta144630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core144629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_144631,meta144630__$1){
var self__ = this;
var _144631__$1 = this;
return (new acme.core.t_acme$core144629(self__.search,self__.app,self__.owner,meta144630__$1));
});

acme.core.t_acme$core144629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_144631){
var self__ = this;
var _144631__$1 = this;
return self__.meta144630;
});

acme.core.t_acme$core144629.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core144629.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

acme.core.t_acme$core144629.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core144629.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__144632){
var self__ = this;
var map__144633 = p__144632;
var map__144633__$1 = ((((!((map__144633 == null)))?((((map__144633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144633):map__144633);
var text = cljs.core.get.call(null,map__144633__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var ___$1 = this;
return React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-4-5"},React.DOM.div({"className": "padded"},om.dom.input.call(null,{"placeholder": "Search for sequences ...", "className": "myinput pure-u-1", "type": "text", "value": text, "onKeyDown": ((function (___$1,map__144633,map__144633__$1,text){
return (function (p1__144621_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__144621_SHARP_.which)){
return acme.core.search_submit.call(null,self__.owner);
} else {
return null;
}
});})(___$1,map__144633,map__144633__$1,text))
, "onChange": ((function (___$1,map__144633,map__144633__$1,text){
return (function (p1__144622_SHARP_){
return acme.core.change.call(null,p1__144622_SHARP_,self__.owner);
});})(___$1,map__144633,map__144633__$1,text))
}))),React.DOM.div({"className": "pure-u-1-5"},React.DOM.div({"className": "padded"},React.DOM.button({"className": "pure-button pure-button-primary pure-u-1", "onClick": ((function (___$1,map__144633,map__144633__$1,text){
return (function (){
return acme.core.search_submit.call(null,self__.owner);
});})(___$1,map__144633,map__144633__$1,text))
},"Go"))));
});

acme.core.t_acme$core144629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta144630","meta144630",-978125606,null)], null);
});

acme.core.t_acme$core144629.cljs$lang$type = true;

acme.core.t_acme$core144629.cljs$lang$ctorStr = "acme.core/t_acme$core144629";

acme.core.t_acme$core144629.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core144629");
});

acme.core.__GT_t_acme$core144629 = (function acme$core$search_$___GT_t_acme$core144629(search__$1,app__$1,owner__$1,meta144630){
return (new acme.core.t_acme$core144629(search__$1,app__$1,owner__$1,meta144630));
});

}

return (new acme.core.t_acme$core144629(acme$core$search,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.export$ = (function acme$core$export(_,owner){
if(typeof acme.core.t_acme$core144639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core144639 = (function (export$,_,owner,meta144640){
this.export$ = export$;
this._ = _;
this.owner = owner;
this.meta144640 = meta144640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core144639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_144641,meta144640__$1){
var self__ = this;
var _144641__$1 = this;
return (new acme.core.t_acme$core144639(self__.export$,self__._,self__.owner,meta144640__$1));
});

acme.core.t_acme$core144639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_144641){
var self__ = this;
var _144641__$1 = this;
return self__.meta144640;
});

acme.core.t_acme$core144639.prototype.om$core$IRender$ = true;

acme.core.t_acme$core144639.prototype.om$core$IRender$render$arity$1 = (function (this__8317__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
return React.DOM.div({"style": {"float": "right"}},React.DOM.select({"style": {"font-size": "85%"}, "value": "", "className": "myinput", "onChange": ((function (this__8317__auto____$1){
return (function (p1__144635_SHARP_){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"export","export",214356590),p1__144635_SHARP_.target.value);
});})(this__8317__auto____$1))
},om.dom.option.call(null,{"value": "", "disabled": ""},"Export selected as ..."),om.dom.option.call(null,{"value": "fasta"},"Fasta")));
});

acme.core.t_acme$core144639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"export","export",1854888117,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta144640","meta144640",556958764,null)], null);
});

acme.core.t_acme$core144639.cljs$lang$type = true;

acme.core.t_acme$core144639.cljs$lang$ctorStr = "acme.core/t_acme$core144639";

acme.core.t_acme$core144639.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core144639");
});

acme.core.__GT_t_acme$core144639 = (function acme$core$export_$___GT_t_acme$core144639(export$__$1,___$1,owner__$1,meta144640){
return (new acme.core.t_acme$core144639(export$__$1,___$1,owner__$1,meta144640));
});

}

return (new acme.core.t_acme$core144639(acme$core$export,_,owner,null));
});
acme.core.nav = (function acme$core$nav(_,owner){
if(typeof acme.core.t_acme$core144648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core144648 = (function (nav,_,owner,meta144649){
this.nav = nav;
this._ = _;
this.owner = owner;
this.meta144649 = meta144649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core144648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_144650,meta144649__$1){
var self__ = this;
var _144650__$1 = this;
return (new acme.core.t_acme$core144648(self__.nav,self__._,self__.owner,meta144649__$1));
});

acme.core.t_acme$core144648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_144650){
var self__ = this;
var _144650__$1 = this;
return self__.meta144649;
});

acme.core.t_acme$core144648.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core144648.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(1),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null);
});

acme.core.t_acme$core144648.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core144648.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (___$1,np){
var self__ = this;
var ___$2 = this;
acme.core.change_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"start","start",-355208981));

return acme.core.change_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"total","total",1916810418));
});

acme.core.t_acme$core144648.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core144648.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__144651){
var self__ = this;
var map__144652 = p__144651;
var map__144652__$1 = ((((!((map__144652 == null)))?((((map__144652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144652):map__144652);
var start = cljs.core.get.call(null,map__144652__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var total = cljs.core.get.call(null,map__144652__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var ___$2 = this;
return React.DOM.div({"className": "pure-g padded"},React.DOM.div({"className": "pure-u-1-2"},React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,(1),start))?true:false), "onClick": ((function (___$2,map__144652,map__144652__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),((function (___$2,map__144652,map__144652__$1,start,total){
return (function (___$3){
return (1);
});})(___$2,map__144652,map__144652__$1,start,total))
);
});})(___$2,map__144652,map__144652__$1,start,total))
},"<<"),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,(1),start))?true:false), "onClick": ((function (___$2,map__144652,map__144652__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.dec);
});})(___$2,map__144652,map__144652__$1,start,total))
},"<"),React.DOM.button({"className": "buttondisplay", "disabled": "true"},[cljs.core.str("Page "),cljs.core.str(start),cljs.core.str(" of "),cljs.core.str(total)].join('')),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,start,total))?true:false), "onClick": ((function (___$2,map__144652,map__144652__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.inc);
});})(___$2,map__144652,map__144652__$1,start,total))
},">"),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,total,start))?true:false), "onClick": ((function (___$2,map__144652,map__144652__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),((function (___$2,map__144652,map__144652__$1,start,total){
return (function (___$3){
return total;
});})(___$2,map__144652,map__144652__$1,start,total))
);
});})(___$2,map__144652,map__144652__$1,start,total))
},">>")),React.DOM.div({"className": "pure-u-1-2"},om.core.build.call(null,acme.core.export$,null)));
});

acme.core.t_acme$core144648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta144649","meta144649",1411515705,null)], null);
});

acme.core.t_acme$core144648.cljs$lang$type = true;

acme.core.t_acme$core144648.cljs$lang$ctorStr = "acme.core/t_acme$core144648";

acme.core.t_acme$core144648.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core144648");
});

acme.core.__GT_t_acme$core144648 = (function acme$core$nav_$___GT_t_acme$core144648(nav__$1,___$1,owner__$1,meta144649){
return (new acme.core.t_acme$core144648(nav__$1,___$1,owner__$1,meta144649));
});

}

return (new acme.core.t_acme$core144648(acme$core$nav,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.protein = (function acme$core$protein(p__144654,owner){
var map__144663 = p__144654;
var map__144663__$1 = ((((!((map__144663 == null)))?((((map__144663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144663):map__144663);
var acc = cljs.core.get.call(null,map__144663__$1,new cljs.core.Keyword(null,"acc","acc",838566312));
var description = cljs.core.get.call(null,map__144663__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var sequence = cljs.core.get.call(null,map__144663__$1,new cljs.core.Keyword(null,"sequence","sequence",926807414));
if(typeof acme.core.t_acme$core144665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core144665 = (function (protein,p__144654,owner,map__144663,acc,description,sequence,meta144666){
this.protein = protein;
this.p__144654 = p__144654;
this.owner = owner;
this.map__144663 = map__144663;
this.acc = acc;
this.description = description;
this.sequence = sequence;
this.meta144666 = meta144666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core144665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__144663,map__144663__$1,acc,description,sequence){
return (function (_144667,meta144666__$1){
var self__ = this;
var _144667__$1 = this;
return (new acme.core.t_acme$core144665(self__.protein,self__.p__144654,self__.owner,self__.map__144663,self__.acc,self__.description,self__.sequence,meta144666__$1));
});})(map__144663,map__144663__$1,acc,description,sequence))
;

acme.core.t_acme$core144665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__144663,map__144663__$1,acc,description,sequence){
return (function (_144667){
var self__ = this;
var _144667__$1 = this;
return self__.meta144666;
});})(map__144663,map__144663__$1,acc,description,sequence))
;

acme.core.t_acme$core144665.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core144665.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__144663,map__144663__$1,acc,description,sequence){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),false], null);
});})(map__144663,map__144663__$1,acc,description,sequence))
;

acme.core.t_acme$core144665.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core144665.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__144663,map__144663__$1,acc,description,sequence){
return (function (_,np){
var self__ = this;
var ___$1 = this;
return acme.core.check_if_checked.call(null,self__.owner,np);
});})(map__144663,map__144663__$1,acc,description,sequence))
;

acme.core.t_acme$core144665.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core144665.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__144663,map__144663__$1,acc,description,sequence){
return (function (_,p__144668){
var self__ = this;
var map__144669 = p__144668;
var map__144669__$1 = ((((!((map__144669 == null)))?((((map__144669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144669):map__144669);
var checked = cljs.core.get.call(null,map__144669__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var ___$1 = this;
return React.DOM.label({"className": "protsumm"},om.dom.input.call(null,{"className": "protsumm", "type": "checkbox", "checked": checked, "onChange": ((function (___$1,map__144669,map__144669__$1,checked,map__144663,map__144663__$1,acc,description,sequence){
return (function (___$2){
acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),self__.acc);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not.call(null,checked));
});})(___$1,map__144669,map__144669__$1,checked,map__144663,map__144663__$1,acc,description,sequence))
},React.DOM.a({"href": "#", "width": "100%"},self__.description),React.DOM.div(null,React.DOM.span({"style": {"paddingRight": "15px"}},[cljs.core.str(cljs.core.count.call(null,self__.sequence)),cljs.core.str(" amino acid protein")].join('')),React.DOM.span(null,[cljs.core.str("JellyDB accession: "),cljs.core.str(self__.acc)].join(''))),React.DOM.div(null,React.DOM.a({"href": "#"},"Something else"))));
});})(map__144663,map__144663__$1,acc,description,sequence))
;

acme.core.t_acme$core144665.getBasis = ((function (map__144663,map__144663__$1,acc,description,sequence){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"protein","protein",1824828479,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__144654","p__144654",829737662,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__144663","map__144663",-1334847400,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null),new cljs.core.Symbol(null,"meta144666","meta144666",913823404,null)], null);
});})(map__144663,map__144663__$1,acc,description,sequence))
;

acme.core.t_acme$core144665.cljs$lang$type = true;

acme.core.t_acme$core144665.cljs$lang$ctorStr = "acme.core/t_acme$core144665";

acme.core.t_acme$core144665.cljs$lang$ctorPrWriter = ((function (map__144663,map__144663__$1,acc,description,sequence){
return (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core144665");
});})(map__144663,map__144663__$1,acc,description,sequence))
;

acme.core.__GT_t_acme$core144665 = ((function (map__144663,map__144663__$1,acc,description,sequence){
return (function acme$core$protein_$___GT_t_acme$core144665(protein__$1,p__144654__$1,owner__$1,map__144663__$2,acc__$1,description__$1,sequence__$1,meta144666){
return (new acme.core.t_acme$core144665(protein__$1,p__144654__$1,owner__$1,map__144663__$2,acc__$1,description__$1,sequence__$1,meta144666));
});})(map__144663,map__144663__$1,acc,description,sequence))
;

}

return (new acme.core.t_acme$core144665(acme$core$protein,p__144654,owner,map__144663__$1,acc,description,sequence,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.protein_view = (function acme$core$protein_view(search,owner){
if(typeof acme.core.t_acme$core144677 !== 'undefined'){
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
acme.core.t_acme$core144677 = (function (protein_view,search,owner,meta144678){
this.protein_view = protein_view;
this.search = search;
this.owner = owner;
this.meta144678 = meta144678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core144677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_144679,meta144678__$1){
var self__ = this;
var _144679__$1 = this;
return (new acme.core.t_acme$core144677(self__.protein_view,self__.search,self__.owner,meta144678__$1));
});

acme.core.t_acme$core144677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_144679){
var self__ = this;
var _144679__$1 = this;
return self__.meta144678;
});

acme.core.t_acme$core144677.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core144677.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),(1),new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"proteins","proteins",-212247297),null,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search","search",1564939822),self__.search,new cljs.core.Keyword(null,"key","key",-1516042587),""], null);
});

acme.core.t_acme$core144677.prototype.om$core$IWillMount$ = true;

acme.core.t_acme$core144677.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
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

acme.core.t_acme$core144677.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core144677.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"search","search",1564939822),np);
});

acme.core.t_acme$core144677.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core144677.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__144680){
var self__ = this;
var map__144681 = p__144680;
var map__144681__$1 = ((((!((map__144681 == null)))?((((map__144681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144681):map__144681);
var proteins = cljs.core.get.call(null,map__144681__$1,new cljs.core.Keyword(null,"proteins","proteins",-212247297));
var key = cljs.core.get.call(null,map__144681__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var search__$1 = cljs.core.get.call(null,map__144681__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var ___$1 = this;
return React.DOM.div(null,React.DOM.iframe({"id": "downloadframe", "src": ((!(cljs.core._EQ_.call(null,key,"")))?[cljs.core.str("/fetch?k="),cljs.core.str(key)].join(''):"")}),React.DOM.div({"className": "thick padded"},[cljs.core.str("Showing results matching \""),cljs.core.str(search__$1),cljs.core.str("\".")].join('')),om.core.build.call(null,acme.core.nav,null),cljs.core.apply.call(null,om.dom.div,{"className": "padded"},om.core.build_all.call(null,acme.core.protein,proteins)),om.core.build.call(null,acme.core.nav,null));
});

acme.core.t_acme$core144677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"protein-view","protein-view",-647694776,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta144678","meta144678",546304869,null)], null);
});

acme.core.t_acme$core144677.cljs$lang$type = true;

acme.core.t_acme$core144677.cljs$lang$ctorStr = "acme.core/t_acme$core144677";

acme.core.t_acme$core144677.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core144677");
});

acme.core.__GT_t_acme$core144677 = (function acme$core$protein_view_$___GT_t_acme$core144677(protein_view__$1,search__$1,owner__$1,meta144678){
return (new acme.core.t_acme$core144677(protein_view__$1,search__$1,owner__$1,meta144678));
});

}

return (new acme.core.t_acme$core144677(acme$core$protein_view,search,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.home = (function acme$core$home(app,owner){
if(typeof acme.core.t_acme$core144686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core144686 = (function (home,app,owner,meta144687){
this.home = home;
this.app = app;
this.owner = owner;
this.meta144687 = meta144687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core144686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_144688,meta144687__$1){
var self__ = this;
var _144688__$1 = this;
return (new acme.core.t_acme$core144686(self__.home,self__.app,self__.owner,meta144687__$1));
});

acme.core.t_acme$core144686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_144688){
var self__ = this;
var _144688__$1 = this;
return self__.meta144687;
});

acme.core.t_acme$core144686.prototype.om$core$IRender$ = true;

acme.core.t_acme$core144686.prototype.om$core$IRender$render$arity$1 = (function (this__8317__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
return React.DOM.div({"style": {"clear": "both"}},React.DOM.p(null,"Home"));
});

acme.core.t_acme$core144686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta144687","meta144687",30613260,null)], null);
});

acme.core.t_acme$core144686.cljs$lang$type = true;

acme.core.t_acme$core144686.cljs$lang$ctorStr = "acme.core/t_acme$core144686";

acme.core.t_acme$core144686.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core144686");
});

acme.core.__GT_t_acme$core144686 = (function acme$core$home_$___GT_t_acme$core144686(home__$1,app__$1,owner__$1,meta144687){
return (new acme.core.t_acme$core144686(home__$1,app__$1,owner__$1,meta144687));
});

}

return (new acme.core.t_acme$core144686(acme$core$home,app,owner,null));
});
acme.core.app_view = (function acme$core$app_view(app,owner){
if(typeof acme.core.t_acme$core144726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core144726 = (function (app_view,app,owner,meta144727){
this.app_view = app_view;
this.app = app;
this.owner = owner;
this.meta144727 = meta144727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core144726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_144728,meta144727__$1){
var self__ = this;
var _144728__$1 = this;
return (new acme.core.t_acme$core144726(self__.app_view,self__.app,self__.owner,meta144727__$1));
});

acme.core.t_acme$core144726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_144728){
var self__ = this;
var _144728__$1 = this;
return self__.meta144727;
});

acme.core.t_acme$core144726.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core144726.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"data","data",-232669377),null], null);
});

acme.core.t_acme$core144726.prototype.om$core$IDidMount$ = true;

acme.core.t_acme$core144726.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.Keyword(null,"view","view",1247994814),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events,___$1){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events,___$1){
return (function (state_144743){
var state_val_144744 = (state_144743[(1)]);
if((state_val_144744 === (1))){
var state_144743__$1 = state_144743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144743__$1,(2),events);
} else {
if((state_val_144744 === (2))){
var inst_144730 = (state_144743[(2)]);
var inst_144731 = inst_144730;
var state_144743__$1 = (function (){var statearr_144745 = state_144743;
(statearr_144745[(7)] = inst_144731);

return statearr_144745;
})();
var statearr_144746_144763 = state_144743__$1;
(statearr_144746_144763[(2)] = null);

(statearr_144746_144763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144744 === (3))){
var inst_144731 = (state_144743[(7)]);
var inst_144733 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(inst_144731);
var inst_144734 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),inst_144733);
var inst_144735 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_144731);
var inst_144736 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",-232669377),inst_144735);
var state_144743__$1 = (function (){var statearr_144747 = state_144743;
(statearr_144747[(8)] = inst_144734);

(statearr_144747[(9)] = inst_144736);

return statearr_144747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144743__$1,(5),events);
} else {
if((state_val_144744 === (4))){
var inst_144741 = (state_144743[(2)]);
var state_144743__$1 = state_144743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144743__$1,inst_144741);
} else {
if((state_val_144744 === (5))){
var inst_144738 = (state_144743[(2)]);
var inst_144731 = inst_144738;
var state_144743__$1 = (function (){var statearr_144748 = state_144743;
(statearr_144748[(7)] = inst_144731);

return statearr_144748;
})();
var statearr_144749_144764 = state_144743__$1;
(statearr_144749_144764[(2)] = null);

(statearr_144749_144764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7633__auto__,events,___$1))
;
return ((function (switch__7612__auto__,c__7633__auto__,events,___$1){
return (function() {
var acme$core$app_view_$_state_machine__7613__auto__ = null;
var acme$core$app_view_$_state_machine__7613__auto____0 = (function (){
var statearr_144753 = [null,null,null,null,null,null,null,null,null,null];
(statearr_144753[(0)] = acme$core$app_view_$_state_machine__7613__auto__);

(statearr_144753[(1)] = (1));

return statearr_144753;
});
var acme$core$app_view_$_state_machine__7613__auto____1 = (function (state_144743){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_144743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e144754){if((e144754 instanceof Object)){
var ex__7616__auto__ = e144754;
var statearr_144755_144765 = state_144743;
(statearr_144755_144765[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144766 = state_144743;
state_144743 = G__144766;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$app_view_$_state_machine__7613__auto__ = function(state_144743){
switch(arguments.length){
case 0:
return acme$core$app_view_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$app_view_$_state_machine__7613__auto____1.call(this,state_144743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$app_view_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$app_view_$_state_machine__7613__auto____0;
acme$core$app_view_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$app_view_$_state_machine__7613__auto____1;
return acme$core$app_view_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events,___$1))
})();
var state__7635__auto__ = (function (){var statearr_144756 = f__7634__auto__.call(null);
(statearr_144756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_144756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events,___$1))
);

return c__7633__auto__;
});

acme.core.t_acme$core144726.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core144726.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__144757){
var self__ = this;
var map__144758 = p__144757;
var map__144758__$1 = ((((!((map__144758 == null)))?((((map__144758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144758):map__144758);
var view = cljs.core.get.call(null,map__144758__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var data = cljs.core.get.call(null,map__144758__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var ___$1 = this;
return React.DOM.div(null,(function (){var pred__144760 = cljs.core._EQ_;
var expr__144761 = view;
if(cljs.core.truth_(pred__144760.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__144761))){
return om.core.build.call(null,acme.core.home,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.truth_(pred__144760.call(null,new cljs.core.Keyword(null,"proteins","proteins",-212247297),expr__144761))){
return om.core.build.call(null,acme.core.protein_view,data);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__144761)].join('')));
}
}
})());
});

acme.core.t_acme$core144726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta144727","meta144727",-852715283,null)], null);
});

acme.core.t_acme$core144726.cljs$lang$type = true;

acme.core.t_acme$core144726.cljs$lang$ctorStr = "acme.core/t_acme$core144726";

acme.core.t_acme$core144726.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core144726");
});

acme.core.__GT_t_acme$core144726 = (function acme$core$app_view_$___GT_t_acme$core144726(app_view__$1,app__$1,owner__$1,meta144727){
return (new acme.core.t_acme$core144726(app_view__$1,app__$1,owner__$1,meta144727));
});

}

return (new acme.core.t_acme$core144726(acme$core$app_view,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.outer = (function acme$core$outer(app,owner){
if(typeof acme.core.t_acme$core144770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core144770 = (function (outer,app,owner,meta144771){
this.outer = outer;
this.app = app;
this.owner = owner;
this.meta144771 = meta144771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core144770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_144772,meta144771__$1){
var self__ = this;
var _144772__$1 = this;
return (new acme.core.t_acme$core144770(self__.outer,self__.app,self__.owner,meta144771__$1));
});

acme.core.t_acme$core144770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_144772){
var self__ = this;
var _144772__$1 = this;
return self__.meta144771;
});

acme.core.t_acme$core144770.prototype.om$core$IRender$ = true;

acme.core.t_acme$core144770.prototype.om$core$IRender$render$arity$1 = (function (this__8317__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
return React.DOM.div(null,React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"search"], null),om.core.build.call(null,acme.core.search,cljs.core.PersistentArrayMap.EMPTY)),React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"data"], null),om.core.build.call(null,acme.core.app_view,self__.app)));
});

acme.core.t_acme$core144770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"outer","outer",1265345571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta144771","meta144771",-905131778,null)], null);
});

acme.core.t_acme$core144770.cljs$lang$type = true;

acme.core.t_acme$core144770.cljs$lang$ctorStr = "acme.core/t_acme$core144770";

acme.core.t_acme$core144770.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core144770");
});

acme.core.__GT_t_acme$core144770 = (function acme$core$outer_$___GT_t_acme$core144770(outer__$1,app__$1,owner__$1,meta144771){
return (new acme.core.t_acme$core144770(outer__$1,app__$1,owner__$1,meta144771));
});

}

return (new acme.core.t_acme$core144770(acme$core$outer,app,owner,null));
});
acme.core.main = (function acme$core$main(){
var req_chan = cljs.core.async.chan.call(null);
var pub_chan = cljs.core.async.chan.call(null);
var notif_chan = cljs.core.async.pub.call(null,pub_chan,new cljs.core.Keyword(null,"topic","topic",-1960480691));
return om.core.root.call(null,acme.core.outer,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"req-chan","req-chan",-35924046),req_chan,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026),notif_chan,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593),pub_chan], null),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("t")], null));
});
acme.core.main.call(null);

//# sourceMappingURL=core.js.map