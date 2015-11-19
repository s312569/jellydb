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
var c__31447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31447__auto__,events){
return (function (){
var f__31448__auto__ = (function (){var switch__31426__auto__ = ((function (c__31447__auto__,events){
return (function (state_65527){
var state_val_65528 = (state_65527[(1)]);
if((state_val_65528 === (1))){
var state_65527__$1 = state_65527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65527__$1,(2),events);
} else {
if((state_val_65528 === (2))){
var inst_65514 = (state_65527[(2)]);
var inst_65515 = inst_65514;
var state_65527__$1 = (function (){var statearr_65529 = state_65527;
(statearr_65529[(7)] = inst_65515);

return statearr_65529;
})();
var statearr_65530_65541 = state_65527__$1;
(statearr_65530_65541[(2)] = null);

(statearr_65530_65541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65528 === (3))){
var inst_65515 = (state_65527[(7)]);
var inst_65517 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_65515);
var inst_65518 = om.core.get_state.call(null,owner,state);
var state_65527__$1 = state_65527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65527__$1,(5),inst_65517,inst_65518);
} else {
if((state_val_65528 === (4))){
var inst_65525 = (state_65527[(2)]);
var state_65527__$1 = state_65527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65527__$1,inst_65525);
} else {
if((state_val_65528 === (5))){
var inst_65520 = (state_65527[(2)]);
var state_65527__$1 = (function (){var statearr_65531 = state_65527;
(statearr_65531[(8)] = inst_65520);

return statearr_65531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65527__$1,(6),events);
} else {
if((state_val_65528 === (6))){
var inst_65522 = (state_65527[(2)]);
var inst_65515 = inst_65522;
var state_65527__$1 = (function (){var statearr_65532 = state_65527;
(statearr_65532[(7)] = inst_65515);

return statearr_65532;
})();
var statearr_65533_65542 = state_65527__$1;
(statearr_65533_65542[(2)] = null);

(statearr_65533_65542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__31447__auto__,events))
;
return ((function (switch__31426__auto__,c__31447__auto__,events){
return (function() {
var acme$core$request_loop_$_state_machine__31427__auto__ = null;
var acme$core$request_loop_$_state_machine__31427__auto____0 = (function (){
var statearr_65537 = [null,null,null,null,null,null,null,null,null];
(statearr_65537[(0)] = acme$core$request_loop_$_state_machine__31427__auto__);

(statearr_65537[(1)] = (1));

return statearr_65537;
});
var acme$core$request_loop_$_state_machine__31427__auto____1 = (function (state_65527){
while(true){
var ret_value__31428__auto__ = (function (){try{while(true){
var result__31429__auto__ = switch__31426__auto__.call(null,state_65527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31429__auto__;
}
break;
}
}catch (e65538){if((e65538 instanceof Object)){
var ex__31430__auto__ = e65538;
var statearr_65539_65543 = state_65527;
(statearr_65539_65543[(5)] = ex__31430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65544 = state_65527;
state_65527 = G__65544;
continue;
} else {
return ret_value__31428__auto__;
}
break;
}
});
acme$core$request_loop_$_state_machine__31427__auto__ = function(state_65527){
switch(arguments.length){
case 0:
return acme$core$request_loop_$_state_machine__31427__auto____0.call(this);
case 1:
return acme$core$request_loop_$_state_machine__31427__auto____1.call(this,state_65527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$request_loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$request_loop_$_state_machine__31427__auto____0;
acme$core$request_loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$request_loop_$_state_machine__31427__auto____1;
return acme$core$request_loop_$_state_machine__31427__auto__;
})()
;})(switch__31426__auto__,c__31447__auto__,events))
})();
var state__31449__auto__ = (function (){var statearr_65540 = f__31448__auto__.call(null);
(statearr_65540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31447__auto__);

return statearr_65540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31449__auto__);
});})(c__31447__auto__,events))
);

return c__31447__auto__;
});
acme.core.change_state_BANG_ = (function acme$core$change_state_BANG_(owner,topic,state){
var c = cljs.core.async.chan.call(null);
var c__31447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31447__auto__,c){
return (function (){
var f__31448__auto__ = (function (){var switch__31426__auto__ = ((function (c__31447__auto__,c){
return (function (state_65594){
var state_val_65595 = (state_65594[(1)]);
if((state_val_65595 === (1))){
var inst_65577 = om.core.get_shared.call(null,owner);
var inst_65578 = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(inst_65577);
var inst_65579 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"chan","chan",-2103021695)];
var inst_65580 = [topic,c];
var inst_65581 = cljs.core.PersistentHashMap.fromArrays(inst_65579,inst_65580);
var inst_65582 = cljs.core.async.put_BANG_.call(null,inst_65578,inst_65581);
var state_65594__$1 = (function (){var statearr_65596 = state_65594;
(statearr_65596[(7)] = inst_65582);

return statearr_65596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65594__$1,(2),c);
} else {
if((state_val_65595 === (2))){
var inst_65584 = (state_65594[(8)]);
var inst_65584__$1 = (state_65594[(2)]);
var inst_65585 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_65586 = cljs.core._EQ_.call(null,inst_65584__$1,inst_65585);
var inst_65587 = !(inst_65586);
var state_65594__$1 = (function (){var statearr_65597 = state_65594;
(statearr_65597[(8)] = inst_65584__$1);

return statearr_65597;
})();
if(inst_65587){
var statearr_65598_65609 = state_65594__$1;
(statearr_65598_65609[(1)] = (3));

} else {
var statearr_65599_65610 = state_65594__$1;
(statearr_65599_65610[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65595 === (3))){
var inst_65584 = (state_65594[(8)]);
var inst_65589 = om.core.set_state_BANG_.call(null,owner,state,inst_65584);
var state_65594__$1 = state_65594;
var statearr_65600_65611 = state_65594__$1;
(statearr_65600_65611[(2)] = inst_65589);

(statearr_65600_65611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65595 === (4))){
var state_65594__$1 = state_65594;
var statearr_65601_65612 = state_65594__$1;
(statearr_65601_65612[(2)] = null);

(statearr_65601_65612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65595 === (5))){
var inst_65592 = (state_65594[(2)]);
var state_65594__$1 = state_65594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65594__$1,inst_65592);
} else {
return null;
}
}
}
}
}
});})(c__31447__auto__,c))
;
return ((function (switch__31426__auto__,c__31447__auto__,c){
return (function() {
var acme$core$change_state_BANG__$_state_machine__31427__auto__ = null;
var acme$core$change_state_BANG__$_state_machine__31427__auto____0 = (function (){
var statearr_65605 = [null,null,null,null,null,null,null,null,null];
(statearr_65605[(0)] = acme$core$change_state_BANG__$_state_machine__31427__auto__);

(statearr_65605[(1)] = (1));

return statearr_65605;
});
var acme$core$change_state_BANG__$_state_machine__31427__auto____1 = (function (state_65594){
while(true){
var ret_value__31428__auto__ = (function (){try{while(true){
var result__31429__auto__ = switch__31426__auto__.call(null,state_65594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31429__auto__;
}
break;
}
}catch (e65606){if((e65606 instanceof Object)){
var ex__31430__auto__ = e65606;
var statearr_65607_65613 = state_65594;
(statearr_65607_65613[(5)] = ex__31430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65614 = state_65594;
state_65594 = G__65614;
continue;
} else {
return ret_value__31428__auto__;
}
break;
}
});
acme$core$change_state_BANG__$_state_machine__31427__auto__ = function(state_65594){
switch(arguments.length){
case 0:
return acme$core$change_state_BANG__$_state_machine__31427__auto____0.call(this);
case 1:
return acme$core$change_state_BANG__$_state_machine__31427__auto____1.call(this,state_65594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$change_state_BANG__$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$change_state_BANG__$_state_machine__31427__auto____0;
acme$core$change_state_BANG__$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$change_state_BANG__$_state_machine__31427__auto____1;
return acme$core$change_state_BANG__$_state_machine__31427__auto__;
})()
;})(switch__31426__auto__,c__31447__auto__,c))
})();
var state__31449__auto__ = (function (){var statearr_65608 = f__31448__auto__.call(null);
(statearr_65608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31447__auto__);

return statearr_65608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31449__auto__);
});})(c__31447__auto__,c))
);

return c__31447__auto__;
});
acme.core.pub_info = (function acme$core$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
acme.core.error_handler = (function acme$core$error_handler(p__65615){
var map__65618 = p__65615;
var map__65618__$1 = ((((!((map__65618 == null)))?((((map__65618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65618):map__65618);
var status = cljs.core.get.call(null,map__65618__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__65618__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return acme.core.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
acme.core.get_fasta_key = (function acme$core$get_fasta_key(owner){
var h = (function acme$core$get_fasta_key_$_h(p__65635){
var map__65638 = p__65635;
var map__65638__$1 = ((((!((map__65638 == null)))?((((map__65638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65638):map__65638);
var status = cljs.core.get.call(null,map__65638__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.call(null,map__65638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var msg = cljs.core.get.call(null,map__65638__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
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
return (function (p__65643){
var map__65644 = p__65643;
var map__65644__$1 = ((((!((map__65644 == null)))?((((map__65644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65644):map__65644);
var r = map__65644__$1;
var status = cljs.core.get.call(null,map__65644__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var proteins = cljs.core.get.call(null,map__65644__$1,new cljs.core.Keyword(null,"proteins","proteins",-212247297));
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
var h = (function acme$core$init_total_proteins_$_h(p__65661){
var map__65664 = p__65661;
var map__65664__$1 = ((((!((map__65664 == null)))?((((map__65664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65664):map__65664);
var r = map__65664__$1;
var status = cljs.core.get.call(null,map__65664__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var count = cljs.core.get.call(null,map__65664__$1,new cljs.core.Keyword(null,"count","count",2139924085));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"total","total",1916810418),Math.ceil((count / (20))));
} else {
throw (new Error("Error in total protein determination."));
}
});
return ajax.core.GET.call(null,"/protein-count",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),acme.core.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
acme.core.get_peptide = (function acme$core$get_peptide(owner){
var h = (function acme$core$get_peptide_$_h(p__65681){
var map__65684 = p__65681;
var map__65684__$1 = ((((!((map__65684 == null)))?((((map__65684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65684):map__65684);
var status = cljs.core.get.call(null,map__65684__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var protein = cljs.core.get.call(null,map__65684__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var msg = cljs.core.get.call(null,map__65684__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
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
var c__31447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31447__auto__,c){
return (function (){
var f__31448__auto__ = (function (){var switch__31426__auto__ = ((function (c__31447__auto__,c){
return (function (state_65737){
var state_val_65738 = (state_65737[(1)]);
if((state_val_65738 === (1))){
var inst_65719 = om.core.get_shared.call(null,owner);
var inst_65720 = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(inst_65719);
var inst_65721 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"chan","chan",-2103021695)];
var inst_65722 = new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(np);
var inst_65723 = [new cljs.core.Keyword(null,"selected?","selected?",-742502788),inst_65722,c];
var inst_65724 = cljs.core.PersistentHashMap.fromArrays(inst_65721,inst_65723);
var inst_65725 = cljs.core.async.put_BANG_.call(null,inst_65720,inst_65724);
var state_65737__$1 = (function (){var statearr_65739 = state_65737;
(statearr_65739[(7)] = inst_65725);

return statearr_65739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65737__$1,(2),c);
} else {
if((state_val_65738 === (2))){
var inst_65727 = (state_65737[(8)]);
var inst_65727__$1 = (state_65737[(2)]);
var inst_65728 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"checked","checked",-50955819));
var inst_65729 = cljs.core._EQ_.call(null,inst_65727__$1,inst_65728);
var inst_65730 = !(inst_65729);
var state_65737__$1 = (function (){var statearr_65740 = state_65737;
(statearr_65740[(8)] = inst_65727__$1);

return statearr_65740;
})();
if(inst_65730){
var statearr_65741_65752 = state_65737__$1;
(statearr_65741_65752[(1)] = (3));

} else {
var statearr_65742_65753 = state_65737__$1;
(statearr_65742_65753[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65738 === (3))){
var inst_65727 = (state_65737[(8)]);
var inst_65732 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"checked","checked",-50955819),inst_65727);
var state_65737__$1 = state_65737;
var statearr_65743_65754 = state_65737__$1;
(statearr_65743_65754[(2)] = inst_65732);

(statearr_65743_65754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65738 === (4))){
var state_65737__$1 = state_65737;
var statearr_65744_65755 = state_65737__$1;
(statearr_65744_65755[(2)] = null);

(statearr_65744_65755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65738 === (5))){
var inst_65735 = (state_65737[(2)]);
var state_65737__$1 = state_65737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65737__$1,inst_65735);
} else {
return null;
}
}
}
}
}
});})(c__31447__auto__,c))
;
return ((function (switch__31426__auto__,c__31447__auto__,c){
return (function() {
var acme$core$check_if_checked_$_state_machine__31427__auto__ = null;
var acme$core$check_if_checked_$_state_machine__31427__auto____0 = (function (){
var statearr_65748 = [null,null,null,null,null,null,null,null,null];
(statearr_65748[(0)] = acme$core$check_if_checked_$_state_machine__31427__auto__);

(statearr_65748[(1)] = (1));

return statearr_65748;
});
var acme$core$check_if_checked_$_state_machine__31427__auto____1 = (function (state_65737){
while(true){
var ret_value__31428__auto__ = (function (){try{while(true){
var result__31429__auto__ = switch__31426__auto__.call(null,state_65737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31429__auto__;
}
break;
}
}catch (e65749){if((e65749 instanceof Object)){
var ex__31430__auto__ = e65749;
var statearr_65750_65756 = state_65737;
(statearr_65750_65756[(5)] = ex__31430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65757 = state_65737;
state_65737 = G__65757;
continue;
} else {
return ret_value__31428__auto__;
}
break;
}
});
acme$core$check_if_checked_$_state_machine__31427__auto__ = function(state_65737){
switch(arguments.length){
case 0:
return acme$core$check_if_checked_$_state_machine__31427__auto____0.call(this);
case 1:
return acme$core$check_if_checked_$_state_machine__31427__auto____1.call(this,state_65737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$check_if_checked_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$check_if_checked_$_state_machine__31427__auto____0;
acme$core$check_if_checked_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$check_if_checked_$_state_machine__31427__auto____1;
return acme$core$check_if_checked_$_state_machine__31427__auto__;
})()
;})(switch__31426__auto__,c__31447__auto__,c))
})();
var state__31449__auto__ = (function (){var statearr_65751 = f__31448__auto__.call(null);
(statearr_65751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31447__auto__);

return statearr_65751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31449__auto__);
});})(c__31447__auto__,c))
);

return c__31447__auto__;
});
acme.core.protein_loop = (function acme$core$protein_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.async.chan.call(null));
var c__31447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31447__auto__,events){
return (function (){
var f__31448__auto__ = (function (){var switch__31426__auto__ = ((function (c__31447__auto__,events){
return (function (state_65802){
var state_val_65803 = (state_65802[(1)]);
if((state_val_65803 === (1))){
var state_65802__$1 = state_65802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65802__$1,(2),events);
} else {
if((state_val_65803 === (2))){
var inst_65788 = (state_65802[(2)]);
var inst_65789 = inst_65788;
var state_65802__$1 = (function (){var statearr_65804 = state_65802;
(statearr_65804[(7)] = inst_65789);

return statearr_65804;
})();
var statearr_65805_65816 = state_65802__$1;
(statearr_65805_65816[(2)] = null);

(statearr_65805_65816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65803 === (3))){
var inst_65789 = (state_65802[(7)]);
var inst_65791 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_65789);
var inst_65792 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"start","start",-355208981));
var inst_65793 = inst_65791.call(null,inst_65792);
var inst_65794 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"start","start",-355208981),inst_65793);
var inst_65795 = acme.core.serve_proteins.call(null,owner);
var state_65802__$1 = (function (){var statearr_65806 = state_65802;
(statearr_65806[(8)] = inst_65794);

(statearr_65806[(9)] = inst_65795);

return statearr_65806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65802__$1,(5),events);
} else {
if((state_val_65803 === (4))){
var inst_65800 = (state_65802[(2)]);
var state_65802__$1 = state_65802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65802__$1,inst_65800);
} else {
if((state_val_65803 === (5))){
var inst_65797 = (state_65802[(2)]);
var inst_65789 = inst_65797;
var state_65802__$1 = (function (){var statearr_65807 = state_65802;
(statearr_65807[(7)] = inst_65789);

return statearr_65807;
})();
var statearr_65808_65817 = state_65802__$1;
(statearr_65808_65817[(2)] = null);

(statearr_65808_65817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__31447__auto__,events))
;
return ((function (switch__31426__auto__,c__31447__auto__,events){
return (function() {
var acme$core$protein_loop_$_state_machine__31427__auto__ = null;
var acme$core$protein_loop_$_state_machine__31427__auto____0 = (function (){
var statearr_65812 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65812[(0)] = acme$core$protein_loop_$_state_machine__31427__auto__);

(statearr_65812[(1)] = (1));

return statearr_65812;
});
var acme$core$protein_loop_$_state_machine__31427__auto____1 = (function (state_65802){
while(true){
var ret_value__31428__auto__ = (function (){try{while(true){
var result__31429__auto__ = switch__31426__auto__.call(null,state_65802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31429__auto__;
}
break;
}
}catch (e65813){if((e65813 instanceof Object)){
var ex__31430__auto__ = e65813;
var statearr_65814_65818 = state_65802;
(statearr_65814_65818[(5)] = ex__31430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65819 = state_65802;
state_65802 = G__65819;
continue;
} else {
return ret_value__31428__auto__;
}
break;
}
});
acme$core$protein_loop_$_state_machine__31427__auto__ = function(state_65802){
switch(arguments.length){
case 0:
return acme$core$protein_loop_$_state_machine__31427__auto____0.call(this);
case 1:
return acme$core$protein_loop_$_state_machine__31427__auto____1.call(this,state_65802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$protein_loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$protein_loop_$_state_machine__31427__auto____0;
acme$core$protein_loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$protein_loop_$_state_machine__31427__auto____1;
return acme$core$protein_loop_$_state_machine__31427__auto__;
})()
;})(switch__31426__auto__,c__31447__auto__,events))
})();
var state__31449__auto__ = (function (){var statearr_65815 = f__31448__auto__.call(null);
(statearr_65815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31447__auto__);

return statearr_65815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31449__auto__);
});})(c__31447__auto__,events))
);

return c__31447__auto__;
});
acme.core.selected_loop = (function acme$core$selected_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.async.chan.call(null));
var c__31447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31447__auto__,events){
return (function (){
var f__31448__auto__ = (function (){var switch__31426__auto__ = ((function (c__31447__auto__,events){
return (function (state_65883){
var state_val_65884 = (state_65883[(1)]);
if((state_val_65884 === (1))){
var state_65883__$1 = state_65883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65883__$1,(2),events);
} else {
if((state_val_65884 === (2))){
var inst_65863 = (state_65883[(2)]);
var inst_65864 = inst_65863;
var state_65883__$1 = (function (){var statearr_65885 = state_65883;
(statearr_65885[(7)] = inst_65864);

return statearr_65885;
})();
var statearr_65886_65901 = state_65883__$1;
(statearr_65886_65901[(2)] = null);

(statearr_65886_65901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65884 === (3))){
var inst_65864 = (state_65883[(7)]);
var inst_65866 = (function (){var e = inst_65864;
return ((function (e,inst_65864,state_val_65884,c__31447__auto__,events){
return (function (p1__65820_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),p1__65820_SHARP_);
});
;})(e,inst_65864,state_val_65884,c__31447__auto__,events))
})();
var inst_65867 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var inst_65868 = cljs.core.some.call(null,inst_65866,inst_65867);
var state_65883__$1 = state_65883;
if(cljs.core.truth_(inst_65868)){
var statearr_65887_65902 = state_65883__$1;
(statearr_65887_65902[(1)] = (5));

} else {
var statearr_65888_65903 = state_65883__$1;
(statearr_65888_65903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65884 === (4))){
var inst_65881 = (state_65883[(2)]);
var state_65883__$1 = state_65883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65883__$1,inst_65881);
} else {
if((state_val_65884 === (5))){
var inst_65864 = (state_65883[(7)]);
var inst_65870 = (function (){var e = inst_65864;
return ((function (e,inst_65864,state_val_65884,c__31447__auto__,events){
return (function (x){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (e,inst_65864,state_val_65884,c__31447__auto__,events){
return (function (p1__65821_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),p1__65821_SHARP_);
});})(e,inst_65864,state_val_65884,c__31447__auto__,events))
,x));
});
;})(e,inst_65864,state_val_65884,c__31447__auto__,events))
})();
var inst_65871 = om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_65870);
var state_65883__$1 = state_65883;
var statearr_65889_65904 = state_65883__$1;
(statearr_65889_65904[(2)] = inst_65871);

(statearr_65889_65904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65884 === (6))){
var inst_65864 = (state_65883[(7)]);
var inst_65873 = (function (){var e = inst_65864;
return ((function (e,inst_65864,state_val_65884,c__31447__auto__,events){
return (function (p1__65822_SHARP_){
return cljs.core.conj.call(null,p1__65822_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
});
;})(e,inst_65864,state_val_65884,c__31447__auto__,events))
})();
var inst_65874 = om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_65873);
var state_65883__$1 = state_65883;
var statearr_65890_65905 = state_65883__$1;
(statearr_65890_65905[(2)] = inst_65874);

(statearr_65890_65905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65884 === (7))){
var inst_65876 = (state_65883[(2)]);
var state_65883__$1 = (function (){var statearr_65891 = state_65883;
(statearr_65891[(8)] = inst_65876);

return statearr_65891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65883__$1,(8),events);
} else {
if((state_val_65884 === (8))){
var inst_65878 = (state_65883[(2)]);
var inst_65864 = inst_65878;
var state_65883__$1 = (function (){var statearr_65892 = state_65883;
(statearr_65892[(7)] = inst_65864);

return statearr_65892;
})();
var statearr_65893_65906 = state_65883__$1;
(statearr_65893_65906[(2)] = null);

(statearr_65893_65906[(1)] = (3));


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
});})(c__31447__auto__,events))
;
return ((function (switch__31426__auto__,c__31447__auto__,events){
return (function() {
var acme$core$selected_loop_$_state_machine__31427__auto__ = null;
var acme$core$selected_loop_$_state_machine__31427__auto____0 = (function (){
var statearr_65897 = [null,null,null,null,null,null,null,null,null];
(statearr_65897[(0)] = acme$core$selected_loop_$_state_machine__31427__auto__);

(statearr_65897[(1)] = (1));

return statearr_65897;
});
var acme$core$selected_loop_$_state_machine__31427__auto____1 = (function (state_65883){
while(true){
var ret_value__31428__auto__ = (function (){try{while(true){
var result__31429__auto__ = switch__31426__auto__.call(null,state_65883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31429__auto__;
}
break;
}
}catch (e65898){if((e65898 instanceof Object)){
var ex__31430__auto__ = e65898;
var statearr_65899_65907 = state_65883;
(statearr_65899_65907[(5)] = ex__31430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65908 = state_65883;
state_65883 = G__65908;
continue;
} else {
return ret_value__31428__auto__;
}
break;
}
});
acme$core$selected_loop_$_state_machine__31427__auto__ = function(state_65883){
switch(arguments.length){
case 0:
return acme$core$selected_loop_$_state_machine__31427__auto____0.call(this);
case 1:
return acme$core$selected_loop_$_state_machine__31427__auto____1.call(this,state_65883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$selected_loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$selected_loop_$_state_machine__31427__auto____0;
acme$core$selected_loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$selected_loop_$_state_machine__31427__auto____1;
return acme$core$selected_loop_$_state_machine__31427__auto__;
})()
;})(switch__31426__auto__,c__31447__auto__,events))
})();
var state__31449__auto__ = (function (){var statearr_65900 = f__31448__auto__.call(null);
(statearr_65900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31447__auto__);

return statearr_65900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31449__auto__);
});})(c__31447__auto__,events))
);

return c__31447__auto__;
});
acme.core.is_selected_QMARK__loop = (function acme$core$is_selected_QMARK__loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.async.chan.call(null));
var c__31447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31447__auto__,events){
return (function (){
var f__31448__auto__ = (function (){var switch__31426__auto__ = ((function (c__31447__auto__,events){
return (function (state_65970){
var state_val_65971 = (state_65970[(1)]);
if((state_val_65971 === (1))){
var state_65970__$1 = state_65970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65970__$1,(2),events);
} else {
if((state_val_65971 === (2))){
var inst_65950 = (state_65970[(2)]);
var inst_65951 = inst_65950;
var state_65970__$1 = (function (){var statearr_65972 = state_65970;
(statearr_65972[(7)] = inst_65951);

return statearr_65972;
})();
var statearr_65973_65988 = state_65970__$1;
(statearr_65973_65988[(2)] = null);

(statearr_65973_65988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65971 === (3))){
var inst_65951 = (state_65970[(7)]);
var inst_65953 = (function (){var e = inst_65951;
return ((function (e,inst_65951,state_val_65971,c__31447__auto__,events){
return (function (p1__65909_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),p1__65909_SHARP_);
});
;})(e,inst_65951,state_val_65971,c__31447__auto__,events))
})();
var inst_65954 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var inst_65955 = cljs.core.some.call(null,inst_65953,inst_65954);
var state_65970__$1 = state_65970;
if(cljs.core.truth_(inst_65955)){
var statearr_65974_65989 = state_65970__$1;
(statearr_65974_65989[(1)] = (5));

} else {
var statearr_65975_65990 = state_65970__$1;
(statearr_65975_65990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65971 === (4))){
var inst_65968 = (state_65970[(2)]);
var state_65970__$1 = state_65970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65970__$1,inst_65968);
} else {
if((state_val_65971 === (5))){
var inst_65951 = (state_65970[(7)]);
var inst_65957 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_65951);
var inst_65958 = cljs.core.async.put_BANG_.call(null,inst_65957,true);
var state_65970__$1 = state_65970;
var statearr_65976_65991 = state_65970__$1;
(statearr_65976_65991[(2)] = inst_65958);

(statearr_65976_65991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65971 === (6))){
var inst_65951 = (state_65970[(7)]);
var inst_65960 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_65951);
var inst_65961 = cljs.core.async.put_BANG_.call(null,inst_65960,false);
var state_65970__$1 = state_65970;
var statearr_65977_65992 = state_65970__$1;
(statearr_65977_65992[(2)] = inst_65961);

(statearr_65977_65992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65971 === (7))){
var inst_65963 = (state_65970[(2)]);
var state_65970__$1 = (function (){var statearr_65978 = state_65970;
(statearr_65978[(8)] = inst_65963);

return statearr_65978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65970__$1,(8),events);
} else {
if((state_val_65971 === (8))){
var inst_65965 = (state_65970[(2)]);
var inst_65951 = inst_65965;
var state_65970__$1 = (function (){var statearr_65979 = state_65970;
(statearr_65979[(7)] = inst_65951);

return statearr_65979;
})();
var statearr_65980_65993 = state_65970__$1;
(statearr_65980_65993[(2)] = null);

(statearr_65980_65993[(1)] = (3));


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
});})(c__31447__auto__,events))
;
return ((function (switch__31426__auto__,c__31447__auto__,events){
return (function() {
var acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto__ = null;
var acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto____0 = (function (){
var statearr_65984 = [null,null,null,null,null,null,null,null,null];
(statearr_65984[(0)] = acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto__);

(statearr_65984[(1)] = (1));

return statearr_65984;
});
var acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto____1 = (function (state_65970){
while(true){
var ret_value__31428__auto__ = (function (){try{while(true){
var result__31429__auto__ = switch__31426__auto__.call(null,state_65970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31429__auto__;
}
break;
}
}catch (e65985){if((e65985 instanceof Object)){
var ex__31430__auto__ = e65985;
var statearr_65986_65994 = state_65970;
(statearr_65986_65994[(5)] = ex__31430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65995 = state_65970;
state_65970 = G__65995;
continue;
} else {
return ret_value__31428__auto__;
}
break;
}
});
acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto__ = function(state_65970){
switch(arguments.length){
case 0:
return acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto____0.call(this);
case 1:
return acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto____1.call(this,state_65970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto____0;
acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto____1;
return acme$core$is_selected_QMARK__loop_$_state_machine__31427__auto__;
})()
;})(switch__31426__auto__,c__31447__auto__,events))
})();
var state__31449__auto__ = (function (){var statearr_65987 = f__31448__auto__.call(null);
(statearr_65987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31447__auto__);

return statearr_65987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31449__auto__);
});})(c__31447__auto__,events))
);

return c__31447__auto__;
});
acme.core.export_loop = (function acme$core$export_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"export","export",214356590),cljs.core.async.chan.call(null));
var c__31447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31447__auto__,events){
return (function (){
var f__31448__auto__ = (function (){var switch__31426__auto__ = ((function (c__31447__auto__,events){
return (function (state_66034){
var state_val_66035 = (state_66034[(1)]);
if((state_val_66035 === (1))){
var state_66034__$1 = state_66034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66034__$1,(2),events);
} else {
if((state_val_66035 === (2))){
var inst_66023 = (state_66034[(2)]);
var inst_66024 = inst_66023;
var state_66034__$1 = (function (){var statearr_66036 = state_66034;
(statearr_66036[(7)] = inst_66024);

return statearr_66036;
})();
var statearr_66037_66048 = state_66034__$1;
(statearr_66037_66048[(2)] = null);

(statearr_66037_66048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66035 === (3))){
var inst_66026 = acme.core.get_fasta_key.call(null,owner);
var inst_66027 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"key","key",-1516042587),"");
var state_66034__$1 = (function (){var statearr_66038 = state_66034;
(statearr_66038[(8)] = inst_66026);

(statearr_66038[(9)] = inst_66027);

return statearr_66038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66034__$1,(5),events);
} else {
if((state_val_66035 === (4))){
var inst_66032 = (state_66034[(2)]);
var state_66034__$1 = state_66034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66034__$1,inst_66032);
} else {
if((state_val_66035 === (5))){
var inst_66029 = (state_66034[(2)]);
var inst_66024 = inst_66029;
var state_66034__$1 = (function (){var statearr_66039 = state_66034;
(statearr_66039[(7)] = inst_66024);

return statearr_66039;
})();
var statearr_66040_66049 = state_66034__$1;
(statearr_66040_66049[(2)] = null);

(statearr_66040_66049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__31447__auto__,events))
;
return ((function (switch__31426__auto__,c__31447__auto__,events){
return (function() {
var acme$core$export_loop_$_state_machine__31427__auto__ = null;
var acme$core$export_loop_$_state_machine__31427__auto____0 = (function (){
var statearr_66044 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66044[(0)] = acme$core$export_loop_$_state_machine__31427__auto__);

(statearr_66044[(1)] = (1));

return statearr_66044;
});
var acme$core$export_loop_$_state_machine__31427__auto____1 = (function (state_66034){
while(true){
var ret_value__31428__auto__ = (function (){try{while(true){
var result__31429__auto__ = switch__31426__auto__.call(null,state_66034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31429__auto__;
}
break;
}
}catch (e66045){if((e66045 instanceof Object)){
var ex__31430__auto__ = e66045;
var statearr_66046_66050 = state_66034;
(statearr_66046_66050[(5)] = ex__31430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66051 = state_66034;
state_66034 = G__66051;
continue;
} else {
return ret_value__31428__auto__;
}
break;
}
});
acme$core$export_loop_$_state_machine__31427__auto__ = function(state_66034){
switch(arguments.length){
case 0:
return acme$core$export_loop_$_state_machine__31427__auto____0.call(this);
case 1:
return acme$core$export_loop_$_state_machine__31427__auto____1.call(this,state_66034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$export_loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$export_loop_$_state_machine__31427__auto____0;
acme$core$export_loop_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$export_loop_$_state_machine__31427__auto____1;
return acme$core$export_loop_$_state_machine__31427__auto__;
})()
;})(switch__31426__auto__,c__31447__auto__,events))
})();
var state__31449__auto__ = (function (){var statearr_66047 = f__31448__auto__.call(null);
(statearr_66047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31447__auto__);

return statearr_66047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31449__auto__);
});})(c__31447__auto__,events))
);

return c__31447__auto__;
});
acme.core.search_submit = (function acme$core$search_submit(owner){
var text = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697));
if(!(cljs.core._EQ_.call(null,text,""))){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"view","view",1247994814),"proteins",new cljs.core.Keyword(null,"data","data",-232669377),text], null));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),"");
} else {
return alert("No search entered!");
}
});
acme.core.search = (function acme$core$search(app,owner){
if(typeof acme.core.t_acme$core66060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core66060 = (function (search,app,owner,meta66061){
this.search = search;
this.app = app;
this.owner = owner;
this.meta66061 = meta66061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core66060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66062,meta66061__$1){
var self__ = this;
var _66062__$1 = this;
return (new acme.core.t_acme$core66060(self__.search,self__.app,self__.owner,meta66061__$1));
});

acme.core.t_acme$core66060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66062){
var self__ = this;
var _66062__$1 = this;
return self__.meta66061;
});

acme.core.t_acme$core66060.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core66060.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

acme.core.t_acme$core66060.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core66060.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__66063){
var self__ = this;
var map__66064 = p__66063;
var map__66064__$1 = ((((!((map__66064 == null)))?((((map__66064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66064):map__66064);
var text = cljs.core.get.call(null,map__66064__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var ___$1 = this;
return React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-4-5"},React.DOM.div({"className": "padded"},om.dom.input.call(null,{"placeholder": "Search for sequences ...", "className": "myinput pure-u-1", "type": "text", "value": text, "onKeyDown": ((function (___$1,map__66064,map__66064__$1,text){
return (function (p1__66052_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__66052_SHARP_.which)){
return acme.core.search_submit.call(null,self__.owner);
} else {
return null;
}
});})(___$1,map__66064,map__66064__$1,text))
, "onChange": ((function (___$1,map__66064,map__66064__$1,text){
return (function (p1__66053_SHARP_){
return acme.core.change.call(null,p1__66053_SHARP_,self__.owner);
});})(___$1,map__66064,map__66064__$1,text))
}))),React.DOM.div({"className": "pure-u-1-5"},React.DOM.div({"className": "padded"},React.DOM.button({"className": "pure-button pure-button-primary pure-u-1", "onClick": ((function (___$1,map__66064,map__66064__$1,text){
return (function (){
return acme.core.search_submit.call(null,self__.owner);
});})(___$1,map__66064,map__66064__$1,text))
},"Go"))));
});

acme.core.t_acme$core66060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66061","meta66061",448189644,null)], null);
});

acme.core.t_acme$core66060.cljs$lang$type = true;

acme.core.t_acme$core66060.cljs$lang$ctorStr = "acme.core/t_acme$core66060";

acme.core.t_acme$core66060.cljs$lang$ctorPrWriter = (function (this__30020__auto__,writer__30021__auto__,opt__30022__auto__){
return cljs.core._write.call(null,writer__30021__auto__,"acme.core/t_acme$core66060");
});

acme.core.__GT_t_acme$core66060 = (function acme$core$search_$___GT_t_acme$core66060(search__$1,app__$1,owner__$1,meta66061){
return (new acme.core.t_acme$core66060(search__$1,app__$1,owner__$1,meta66061));
});

}

return (new acme.core.t_acme$core66060(acme$core$search,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.export$ = (function acme$core$export(_,owner){
if(typeof acme.core.t_acme$core66070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core66070 = (function (export$,_,owner,meta66071){
this.export$ = export$;
this._ = _;
this.owner = owner;
this.meta66071 = meta66071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core66070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66072,meta66071__$1){
var self__ = this;
var _66072__$1 = this;
return (new acme.core.t_acme$core66070(self__.export$,self__._,self__.owner,meta66071__$1));
});

acme.core.t_acme$core66070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66072){
var self__ = this;
var _66072__$1 = this;
return self__.meta66071;
});

acme.core.t_acme$core66070.prototype.om$core$IRender$ = true;

acme.core.t_acme$core66070.prototype.om$core$IRender$render$arity$1 = (function (this__32308__auto__){
var self__ = this;
var this__32308__auto____$1 = this;
return React.DOM.div({"style": {"float": "right"}},React.DOM.select({"style": {"font-size": "85%"}, "value": "", "className": "myinput", "onChange": ((function (this__32308__auto____$1){
return (function (p1__66066_SHARP_){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"export","export",214356590),p1__66066_SHARP_.target.value);
});})(this__32308__auto____$1))
},om.dom.option.call(null,{"value": "", "disabled": ""},"Export selected as ..."),om.dom.option.call(null,{"value": "fasta"},"Fasta")));
});

acme.core.t_acme$core66070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"export","export",1854888117,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66071","meta66071",-1443759065,null)], null);
});

acme.core.t_acme$core66070.cljs$lang$type = true;

acme.core.t_acme$core66070.cljs$lang$ctorStr = "acme.core/t_acme$core66070";

acme.core.t_acme$core66070.cljs$lang$ctorPrWriter = (function (this__30020__auto__,writer__30021__auto__,opt__30022__auto__){
return cljs.core._write.call(null,writer__30021__auto__,"acme.core/t_acme$core66070");
});

acme.core.__GT_t_acme$core66070 = (function acme$core$export_$___GT_t_acme$core66070(export$__$1,___$1,owner__$1,meta66071){
return (new acme.core.t_acme$core66070(export$__$1,___$1,owner__$1,meta66071));
});

}

return (new acme.core.t_acme$core66070(acme$core$export,_,owner,null));
});
acme.core.nav = (function acme$core$nav(_,owner){
if(typeof acme.core.t_acme$core66079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core66079 = (function (nav,_,owner,meta66080){
this.nav = nav;
this._ = _;
this.owner = owner;
this.meta66080 = meta66080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core66079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66081,meta66080__$1){
var self__ = this;
var _66081__$1 = this;
return (new acme.core.t_acme$core66079(self__.nav,self__._,self__.owner,meta66080__$1));
});

acme.core.t_acme$core66079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66081){
var self__ = this;
var _66081__$1 = this;
return self__.meta66080;
});

acme.core.t_acme$core66079.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core66079.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(1),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null);
});

acme.core.t_acme$core66079.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core66079.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (___$1,np){
var self__ = this;
var ___$2 = this;
acme.core.change_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"start","start",-355208981));

return acme.core.change_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"total","total",1916810418));
});

acme.core.t_acme$core66079.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core66079.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__66082){
var self__ = this;
var map__66083 = p__66082;
var map__66083__$1 = ((((!((map__66083 == null)))?((((map__66083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66083):map__66083);
var start = cljs.core.get.call(null,map__66083__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var total = cljs.core.get.call(null,map__66083__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var ___$2 = this;
return React.DOM.div({"className": "pure-g padded"},React.DOM.div({"className": "pure-u-1-2"},React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,(1),start))?true:false), "onClick": ((function (___$2,map__66083,map__66083__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),((function (___$2,map__66083,map__66083__$1,start,total){
return (function (___$3){
return (1);
});})(___$2,map__66083,map__66083__$1,start,total))
);
});})(___$2,map__66083,map__66083__$1,start,total))
},"<<"),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,(1),start))?true:false), "onClick": ((function (___$2,map__66083,map__66083__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.dec);
});})(___$2,map__66083,map__66083__$1,start,total))
},"<"),React.DOM.button({"className": "buttondisplay", "disabled": "true"},[cljs.core.str("Page "),cljs.core.str(start),cljs.core.str(" of "),cljs.core.str(total)].join('')),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,start,total))?true:false), "onClick": ((function (___$2,map__66083,map__66083__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.inc);
});})(___$2,map__66083,map__66083__$1,start,total))
},">"),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,total,start))?true:false), "onClick": ((function (___$2,map__66083,map__66083__$1,start,total){
return (function (){
return acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"nav","nav",719540477),((function (___$2,map__66083,map__66083__$1,start,total){
return (function (___$3){
return total;
});})(___$2,map__66083,map__66083__$1,start,total))
);
});})(___$2,map__66083,map__66083__$1,start,total))
},">>")),React.DOM.div({"className": "pure-u-1-2"},om.core.build.call(null,acme.core.export$,null)));
});

acme.core.t_acme$core66079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66080","meta66080",2037481111,null)], null);
});

acme.core.t_acme$core66079.cljs$lang$type = true;

acme.core.t_acme$core66079.cljs$lang$ctorStr = "acme.core/t_acme$core66079";

acme.core.t_acme$core66079.cljs$lang$ctorPrWriter = (function (this__30020__auto__,writer__30021__auto__,opt__30022__auto__){
return cljs.core._write.call(null,writer__30021__auto__,"acme.core/t_acme$core66079");
});

acme.core.__GT_t_acme$core66079 = (function acme$core$nav_$___GT_t_acme$core66079(nav__$1,___$1,owner__$1,meta66080){
return (new acme.core.t_acme$core66079(nav__$1,___$1,owner__$1,meta66080));
});

}

return (new acme.core.t_acme$core66079(acme$core$nav,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.protein = (function acme$core$protein(p__66085,owner){
var map__66094 = p__66085;
var map__66094__$1 = ((((!((map__66094 == null)))?((((map__66094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66094):map__66094);
var acc = cljs.core.get.call(null,map__66094__$1,new cljs.core.Keyword(null,"acc","acc",838566312));
var description = cljs.core.get.call(null,map__66094__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var sequence = cljs.core.get.call(null,map__66094__$1,new cljs.core.Keyword(null,"sequence","sequence",926807414));
if(typeof acme.core.t_acme$core66096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core66096 = (function (protein,p__66085,owner,map__66094,acc,description,sequence,meta66097){
this.protein = protein;
this.p__66085 = p__66085;
this.owner = owner;
this.map__66094 = map__66094;
this.acc = acc;
this.description = description;
this.sequence = sequence;
this.meta66097 = meta66097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core66096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__66094,map__66094__$1,acc,description,sequence){
return (function (_66098,meta66097__$1){
var self__ = this;
var _66098__$1 = this;
return (new acme.core.t_acme$core66096(self__.protein,self__.p__66085,self__.owner,self__.map__66094,self__.acc,self__.description,self__.sequence,meta66097__$1));
});})(map__66094,map__66094__$1,acc,description,sequence))
;

acme.core.t_acme$core66096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__66094,map__66094__$1,acc,description,sequence){
return (function (_66098){
var self__ = this;
var _66098__$1 = this;
return self__.meta66097;
});})(map__66094,map__66094__$1,acc,description,sequence))
;

acme.core.t_acme$core66096.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core66096.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__66094,map__66094__$1,acc,description,sequence){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),false], null);
});})(map__66094,map__66094__$1,acc,description,sequence))
;

acme.core.t_acme$core66096.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core66096.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__66094,map__66094__$1,acc,description,sequence){
return (function (_,np){
var self__ = this;
var ___$1 = this;
return acme.core.check_if_checked.call(null,self__.owner,np);
});})(map__66094,map__66094__$1,acc,description,sequence))
;

acme.core.t_acme$core66096.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core66096.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__66094,map__66094__$1,acc,description,sequence){
return (function (_,p__66099){
var self__ = this;
var map__66100 = p__66099;
var map__66100__$1 = ((((!((map__66100 == null)))?((((map__66100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66100):map__66100);
var checked = cljs.core.get.call(null,map__66100__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-24"},om.dom.input.call(null,{"type": "checkbox", "checked": checked, "onChange": ((function (___$1,map__66100,map__66100__$1,checked,map__66094,map__66094__$1,acc,description,sequence){
return (function (___$2){
acme.core.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),self__.acc);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not.call(null,checked));
});})(___$1,map__66100,map__66100__$1,checked,map__66094,map__66094__$1,acc,description,sequence))
})),React.DOM.div({"className": "pure-u-23-24"},React.DOM.a({"width": "100%", "onClick": ((function (___$1,map__66100,map__66100__$1,checked,map__66094,map__66094__$1,acc,description,sequence){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"view","view",1247994814),"protein",new cljs.core.Keyword(null,"data","data",-232669377),self__.acc], null));
});})(___$1,map__66100,map__66100__$1,checked,map__66094,map__66094__$1,acc,description,sequence))
},self__.description))),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-24"},""),React.DOM.div({"className": "pure-u-5-24 protsumm"},[cljs.core.str(cljs.core.count.call(null,self__.sequence)),cljs.core.str(" amino acid protein")].join('')),React.DOM.div({"className": "pure-u-18-24 protsumm"},[cljs.core.str("JellyDB accession: "),cljs.core.str(self__.acc)].join(''))),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-24"},""),React.DOM.div({"className": "pure-u-23-24"},React.DOM.a({"href": "#"},"Something else"))));
});})(map__66094,map__66094__$1,acc,description,sequence))
;

acme.core.t_acme$core66096.getBasis = ((function (map__66094,map__66094__$1,acc,description,sequence){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"protein","protein",1824828479,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__66085","p__66085",785720546,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__66094","map__66094",-20944590,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null),new cljs.core.Symbol(null,"meta66097","meta66097",-1029100790,null)], null);
});})(map__66094,map__66094__$1,acc,description,sequence))
;

acme.core.t_acme$core66096.cljs$lang$type = true;

acme.core.t_acme$core66096.cljs$lang$ctorStr = "acme.core/t_acme$core66096";

acme.core.t_acme$core66096.cljs$lang$ctorPrWriter = ((function (map__66094,map__66094__$1,acc,description,sequence){
return (function (this__30020__auto__,writer__30021__auto__,opt__30022__auto__){
return cljs.core._write.call(null,writer__30021__auto__,"acme.core/t_acme$core66096");
});})(map__66094,map__66094__$1,acc,description,sequence))
;

acme.core.__GT_t_acme$core66096 = ((function (map__66094,map__66094__$1,acc,description,sequence){
return (function acme$core$protein_$___GT_t_acme$core66096(protein__$1,p__66085__$1,owner__$1,map__66094__$2,acc__$1,description__$1,sequence__$1,meta66097){
return (new acme.core.t_acme$core66096(protein__$1,p__66085__$1,owner__$1,map__66094__$2,acc__$1,description__$1,sequence__$1,meta66097));
});})(map__66094,map__66094__$1,acc,description,sequence))
;

}

return (new acme.core.t_acme$core66096(acme$core$protein,p__66085,owner,map__66094__$1,acc,description,sequence,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.proteins_view = (function acme$core$proteins_view(search,owner){
if(typeof acme.core.t_acme$core66108 !== 'undefined'){
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
acme.core.t_acme$core66108 = (function (proteins_view,search,owner,meta66109){
this.proteins_view = proteins_view;
this.search = search;
this.owner = owner;
this.meta66109 = meta66109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core66108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66110,meta66109__$1){
var self__ = this;
var _66110__$1 = this;
return (new acme.core.t_acme$core66108(self__.proteins_view,self__.search,self__.owner,meta66109__$1));
});

acme.core.t_acme$core66108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66110){
var self__ = this;
var _66110__$1 = this;
return self__.meta66109;
});

acme.core.t_acme$core66108.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core66108.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),(1),new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"proteins","proteins",-212247297),null,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search","search",1564939822),self__.search,new cljs.core.Keyword(null,"key","key",-1516042587),""], null);
});

acme.core.t_acme$core66108.prototype.om$core$IWillMount$ = true;

acme.core.t_acme$core66108.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
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

acme.core.t_acme$core66108.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core66108.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"search","search",1564939822),np);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"start","start",-355208981),(1));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentVector.EMPTY);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"key","key",-1516042587),"");

acme.core.serve_proteins.call(null,self__.owner);

return acme.core.init_total_proteins.call(null,self__.owner);
});

acme.core.t_acme$core66108.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core66108.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__66111){
var self__ = this;
var map__66112 = p__66111;
var map__66112__$1 = ((((!((map__66112 == null)))?((((map__66112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66112):map__66112);
var proteins = cljs.core.get.call(null,map__66112__$1,new cljs.core.Keyword(null,"proteins","proteins",-212247297));
var key = cljs.core.get.call(null,map__66112__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var search__$1 = cljs.core.get.call(null,map__66112__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var ___$1 = this;
acme.core.log.call(null,[cljs.core.str(self__.owner)].join(''));

return React.DOM.div(null,React.DOM.iframe({"id": "downloadframe", "src": ((!(cljs.core._EQ_.call(null,key,"")))?[cljs.core.str("/fetch?k="),cljs.core.str(key)].join(''):"")}),React.DOM.div({"className": "thick padded"},[cljs.core.str("Showing results matching \""),cljs.core.str(search__$1),cljs.core.str("\".")].join('')),om.core.build.call(null,acme.core.nav,null),cljs.core.apply.call(null,om.dom.div,{"className": "padded"},om.core.build_all.call(null,acme.core.protein,proteins)),om.core.build.call(null,acme.core.nav,null));
});

acme.core.t_acme$core66108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"proteins-view","proteins-view",-33624190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66109","meta66109",-1390166283,null)], null);
});

acme.core.t_acme$core66108.cljs$lang$type = true;

acme.core.t_acme$core66108.cljs$lang$ctorStr = "acme.core/t_acme$core66108";

acme.core.t_acme$core66108.cljs$lang$ctorPrWriter = (function (this__30020__auto__,writer__30021__auto__,opt__30022__auto__){
return cljs.core._write.call(null,writer__30021__auto__,"acme.core/t_acme$core66108");
});

acme.core.__GT_t_acme$core66108 = (function acme$core$proteins_view_$___GT_t_acme$core66108(proteins_view__$1,search__$1,owner__$1,meta66109){
return (new acme.core.t_acme$core66108(proteins_view__$1,search__$1,owner__$1,meta66109));
});

}

return (new acme.core.t_acme$core66108(acme$core$proteins_view,search,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.protein_view = (function acme$core$protein_view(acc,owner){
if(typeof acme.core.t_acme$core66120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core66120 = (function (protein_view,acc,owner,meta66121){
this.protein_view = protein_view;
this.acc = acc;
this.owner = owner;
this.meta66121 = meta66121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core66120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66122,meta66121__$1){
var self__ = this;
var _66122__$1 = this;
return (new acme.core.t_acme$core66120(self__.protein_view,self__.acc,self__.owner,meta66121__$1));
});

acme.core.t_acme$core66120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66122){
var self__ = this;
var _66122__$1 = this;
return self__.meta66121;
});

acme.core.t_acme$core66120.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core66120.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accession","accession",-1015325932),self__.acc,new cljs.core.Keyword(null,"peptide","peptide",-401217402),null], null);
});

acme.core.t_acme$core66120.prototype.om$core$IWillMount$ = true;

acme.core.t_acme$core66120.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return acme.core.get_peptide.call(null,self__.owner);
});

acme.core.t_acme$core66120.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core66120.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__66123){
var self__ = this;
var map__66124 = p__66123;
var map__66124__$1 = ((((!((map__66124 == null)))?((((map__66124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66124):map__66124);
var accession = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword(null,"accession","accession",-1015325932));
var peptide = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword(null,"peptide","peptide",-401217402));
var ___$1 = this;
return React.DOM.div(null,cljs.core.List.EMPTY,React.DOM.div({"className": "thick padded"},[cljs.core.str(accession),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(peptide))].join('')),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-5 thick padded"},"Accession:"),React.DOM.div({"className": "pure-u-3-5 padded"},accession)),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-5 thick padded"},"Description:"),React.DOM.div({"className": "pure-u-3-5 padded"},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(peptide))),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-5 thick padded"},"Species:"),React.DOM.div({"className": "pure-u-3-5 padded"},new cljs.core.Keyword(null,"species","species",-1393763638).cljs$core$IFn$_invoke$arity$1(peptide))),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-5 thick padded"},"Protein sequence:"),React.DOM.div({"className": "pure-u-3-5 padded"},new cljs.core.Keyword(null,"sequence","sequence",926807414).cljs$core$IFn$_invoke$arity$1(peptide))),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-5 thick padded"},"CDS:"),React.DOM.div({"className": "pure-u-3-5 padded"},new cljs.core.Keyword(null,"cds","cds",209482425).cljs$core$IFn$_invoke$arity$1(peptide))),React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-1-5 thick padded"},"mRNA sequence:"),React.DOM.div({"className": "pure-u-3-5 padded"},new cljs.core.Keyword(null,"mrna","mrna",942260448).cljs$core$IFn$_invoke$arity$1(peptide))));
});

acme.core.t_acme$core66120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"protein-view","protein-view",-647694776,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66121","meta66121",-107562320,null)], null);
});

acme.core.t_acme$core66120.cljs$lang$type = true;

acme.core.t_acme$core66120.cljs$lang$ctorStr = "acme.core/t_acme$core66120";

acme.core.t_acme$core66120.cljs$lang$ctorPrWriter = (function (this__30020__auto__,writer__30021__auto__,opt__30022__auto__){
return cljs.core._write.call(null,writer__30021__auto__,"acme.core/t_acme$core66120");
});

acme.core.__GT_t_acme$core66120 = (function acme$core$protein_view_$___GT_t_acme$core66120(protein_view__$1,acc__$1,owner__$1,meta66121){
return (new acme.core.t_acme$core66120(protein_view__$1,acc__$1,owner__$1,meta66121));
});

}

return (new acme.core.t_acme$core66120(acme$core$protein_view,acc,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.home = (function acme$core$home(app,owner){
if(typeof acme.core.t_acme$core66129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core66129 = (function (home,app,owner,meta66130){
this.home = home;
this.app = app;
this.owner = owner;
this.meta66130 = meta66130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core66129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66131,meta66130__$1){
var self__ = this;
var _66131__$1 = this;
return (new acme.core.t_acme$core66129(self__.home,self__.app,self__.owner,meta66130__$1));
});

acme.core.t_acme$core66129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66131){
var self__ = this;
var _66131__$1 = this;
return self__.meta66130;
});

acme.core.t_acme$core66129.prototype.om$core$IRender$ = true;

acme.core.t_acme$core66129.prototype.om$core$IRender$render$arity$1 = (function (this__32308__auto__){
var self__ = this;
var this__32308__auto____$1 = this;
return React.DOM.div({"style": {"clear": "both"}},React.DOM.p(null,"Home"));
});

acme.core.t_acme$core66129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66130","meta66130",-1875087934,null)], null);
});

acme.core.t_acme$core66129.cljs$lang$type = true;

acme.core.t_acme$core66129.cljs$lang$ctorStr = "acme.core/t_acme$core66129";

acme.core.t_acme$core66129.cljs$lang$ctorPrWriter = (function (this__30020__auto__,writer__30021__auto__,opt__30022__auto__){
return cljs.core._write.call(null,writer__30021__auto__,"acme.core/t_acme$core66129");
});

acme.core.__GT_t_acme$core66129 = (function acme$core$home_$___GT_t_acme$core66129(home__$1,app__$1,owner__$1,meta66130){
return (new acme.core.t_acme$core66129(home__$1,app__$1,owner__$1,meta66130));
});

}

return (new acme.core.t_acme$core66129(acme$core$home,app,owner,null));
});
acme.core.app_view = (function acme$core$app_view(app,owner){
if(typeof acme.core.t_acme$core66169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core66169 = (function (app_view,app,owner,meta66170){
this.app_view = app_view;
this.app = app;
this.owner = owner;
this.meta66170 = meta66170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core66169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66171,meta66170__$1){
var self__ = this;
var _66171__$1 = this;
return (new acme.core.t_acme$core66169(self__.app_view,self__.app,self__.owner,meta66170__$1));
});

acme.core.t_acme$core66169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66171){
var self__ = this;
var _66171__$1 = this;
return self__.meta66170;
});

acme.core.t_acme$core66169.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core66169.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),"home",new cljs.core.Keyword(null,"data","data",-232669377),null], null);
});

acme.core.t_acme$core66169.prototype.om$core$IDidMount$ = true;

acme.core.t_acme$core66169.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.Keyword(null,"view","view",1247994814),cljs.core.async.chan.call(null));
var c__31447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31447__auto__,events,___$1){
return (function (){
var f__31448__auto__ = (function (){var switch__31426__auto__ = ((function (c__31447__auto__,events,___$1){
return (function (state_66186){
var state_val_66187 = (state_66186[(1)]);
if((state_val_66187 === (1))){
var state_66186__$1 = state_66186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66186__$1,(2),events);
} else {
if((state_val_66187 === (2))){
var inst_66173 = (state_66186[(2)]);
var inst_66174 = inst_66173;
var state_66186__$1 = (function (){var statearr_66188 = state_66186;
(statearr_66188[(7)] = inst_66174);

return statearr_66188;
})();
var statearr_66189_66206 = state_66186__$1;
(statearr_66189_66206[(2)] = null);

(statearr_66189_66206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66187 === (3))){
var inst_66174 = (state_66186[(7)]);
var inst_66176 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(inst_66174);
var inst_66177 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),inst_66176);
var inst_66178 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_66174);
var inst_66179 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",-232669377),inst_66178);
var state_66186__$1 = (function (){var statearr_66190 = state_66186;
(statearr_66190[(8)] = inst_66177);

(statearr_66190[(9)] = inst_66179);

return statearr_66190;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66186__$1,(5),events);
} else {
if((state_val_66187 === (4))){
var inst_66184 = (state_66186[(2)]);
var state_66186__$1 = state_66186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66186__$1,inst_66184);
} else {
if((state_val_66187 === (5))){
var inst_66181 = (state_66186[(2)]);
var inst_66174 = inst_66181;
var state_66186__$1 = (function (){var statearr_66191 = state_66186;
(statearr_66191[(7)] = inst_66174);

return statearr_66191;
})();
var statearr_66192_66207 = state_66186__$1;
(statearr_66192_66207[(2)] = null);

(statearr_66192_66207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__31447__auto__,events,___$1))
;
return ((function (switch__31426__auto__,c__31447__auto__,events,___$1){
return (function() {
var acme$core$app_view_$_state_machine__31427__auto__ = null;
var acme$core$app_view_$_state_machine__31427__auto____0 = (function (){
var statearr_66196 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66196[(0)] = acme$core$app_view_$_state_machine__31427__auto__);

(statearr_66196[(1)] = (1));

return statearr_66196;
});
var acme$core$app_view_$_state_machine__31427__auto____1 = (function (state_66186){
while(true){
var ret_value__31428__auto__ = (function (){try{while(true){
var result__31429__auto__ = switch__31426__auto__.call(null,state_66186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31429__auto__;
}
break;
}
}catch (e66197){if((e66197 instanceof Object)){
var ex__31430__auto__ = e66197;
var statearr_66198_66208 = state_66186;
(statearr_66198_66208[(5)] = ex__31430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66209 = state_66186;
state_66186 = G__66209;
continue;
} else {
return ret_value__31428__auto__;
}
break;
}
});
acme$core$app_view_$_state_machine__31427__auto__ = function(state_66186){
switch(arguments.length){
case 0:
return acme$core$app_view_$_state_machine__31427__auto____0.call(this);
case 1:
return acme$core$app_view_$_state_machine__31427__auto____1.call(this,state_66186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$app_view_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$app_view_$_state_machine__31427__auto____0;
acme$core$app_view_$_state_machine__31427__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$app_view_$_state_machine__31427__auto____1;
return acme$core$app_view_$_state_machine__31427__auto__;
})()
;})(switch__31426__auto__,c__31447__auto__,events,___$1))
})();
var state__31449__auto__ = (function (){var statearr_66199 = f__31448__auto__.call(null);
(statearr_66199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31447__auto__);

return statearr_66199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31449__auto__);
});})(c__31447__auto__,events,___$1))
);

return c__31447__auto__;
});

acme.core.t_acme$core66169.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core66169.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__66200){
var self__ = this;
var map__66201 = p__66200;
var map__66201__$1 = ((((!((map__66201 == null)))?((((map__66201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66201):map__66201);
var view = cljs.core.get.call(null,map__66201__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var data = cljs.core.get.call(null,map__66201__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var ___$1 = this;
return React.DOM.div(null,(function (){var pred__66203 = cljs.core._EQ_;
var expr__66204 = view;
if(cljs.core.truth_(pred__66203.call(null,"home",expr__66204))){
return om.core.build.call(null,acme.core.home,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.truth_(pred__66203.call(null,"proteins",expr__66204))){
return om.core.build.call(null,acme.core.proteins_view,data);
} else {
if(cljs.core.truth_(pred__66203.call(null,"protein",expr__66204))){
return om.core.build.call(null,acme.core.protein_view,data);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__66204)].join('')));
}
}
}
})());
});

acme.core.t_acme$core66169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66170","meta66170",-698677380,null)], null);
});

acme.core.t_acme$core66169.cljs$lang$type = true;

acme.core.t_acme$core66169.cljs$lang$ctorStr = "acme.core/t_acme$core66169";

acme.core.t_acme$core66169.cljs$lang$ctorPrWriter = (function (this__30020__auto__,writer__30021__auto__,opt__30022__auto__){
return cljs.core._write.call(null,writer__30021__auto__,"acme.core/t_acme$core66169");
});

acme.core.__GT_t_acme$core66169 = (function acme$core$app_view_$___GT_t_acme$core66169(app_view__$1,app__$1,owner__$1,meta66170){
return (new acme.core.t_acme$core66169(app_view__$1,app__$1,owner__$1,meta66170));
});

}

return (new acme.core.t_acme$core66169(acme$core$app_view,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.outer = (function acme$core$outer(app,owner){
if(typeof acme.core.t_acme$core66213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core66213 = (function (outer,app,owner,meta66214){
this.outer = outer;
this.app = app;
this.owner = owner;
this.meta66214 = meta66214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core66213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66215,meta66214__$1){
var self__ = this;
var _66215__$1 = this;
return (new acme.core.t_acme$core66213(self__.outer,self__.app,self__.owner,meta66214__$1));
});

acme.core.t_acme$core66213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66215){
var self__ = this;
var _66215__$1 = this;
return self__.meta66214;
});

acme.core.t_acme$core66213.prototype.om$core$IRender$ = true;

acme.core.t_acme$core66213.prototype.om$core$IRender$render$arity$1 = (function (this__32308__auto__){
var self__ = this;
var this__32308__auto____$1 = this;
return React.DOM.div(null,React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"search"], null),om.core.build.call(null,acme.core.search,cljs.core.PersistentArrayMap.EMPTY)),React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"data"], null),om.core.build.call(null,acme.core.app_view,self__.app)));
});

acme.core.t_acme$core66213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"outer","outer",1265345571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66214","meta66214",-1391661734,null)], null);
});

acme.core.t_acme$core66213.cljs$lang$type = true;

acme.core.t_acme$core66213.cljs$lang$ctorStr = "acme.core/t_acme$core66213";

acme.core.t_acme$core66213.cljs$lang$ctorPrWriter = (function (this__30020__auto__,writer__30021__auto__,opt__30022__auto__){
return cljs.core._write.call(null,writer__30021__auto__,"acme.core/t_acme$core66213");
});

acme.core.__GT_t_acme$core66213 = (function acme$core$outer_$___GT_t_acme$core66213(outer__$1,app__$1,owner__$1,meta66214){
return (new acme.core.t_acme$core66213(outer__$1,app__$1,owner__$1,meta66214));
});

}

return (new acme.core.t_acme$core66213(acme$core$outer,app,owner,null));
});
acme.core.main = (function acme$core$main(){
var req_chan = cljs.core.async.chan.call(null);
var pub_chan = cljs.core.async.chan.call(null);
var notif_chan = cljs.core.async.pub.call(null,pub_chan,new cljs.core.Keyword(null,"topic","topic",-1960480691));
return om.core.root.call(null,acme.core.outer,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"req-chan","req-chan",-35924046),req_chan,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026),notif_chan,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593),pub_chan], null),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("t")], null));
});
acme.core.main.call(null);

//# sourceMappingURL=core.js.map