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
cljs.core.enable_console_print_BANG_.call(null);
acme.core.change = (function acme$core$change(e,owner){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),e.target.value);
});
acme.core.log = (function acme$core$log(m){
return console.log(m);
});
acme.core.error_handler = (function acme$core$error_handler(p__61083){
var map__61086 = p__61083;
var map__61086__$1 = ((((!((map__61086 == null)))?((((map__61086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61086):map__61086);
var status = cljs.core.get.call(null,map__61086__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__61086__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return acme.core.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
acme.core.fetch_proteins = (function acme$core$fetch_proteins(s,o,c){
var h = (function acme$core$fetch_proteins_$_h(r){
return cljs.core.async.put_BANG_.call(null,c,r);
});
return ajax.core.GET.call(null,"/proteins",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"o","o",-1350007228),(((20) * o) - (20))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),acme.core.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
acme.core.count_proteins = (function acme$core$count_proteins(s,c){
var h = (function acme$core$count_proteins_$_h(r){
var n = Math.ceil((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(r) / (20)));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"total-prot","total-prot",-1980856156),new cljs.core.Keyword(null,"total","total",1916810418),n], null));
});
return ajax.core.GET.call(null,"/protein-count",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),acme.core.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
acme.core.search = (function acme$core$search(app,owner){
if(typeof acme.core.t_acme$core61092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core61092 = (function (search,app,owner,meta61093){
this.search = search;
this.app = app;
this.owner = owner;
this.meta61093 = meta61093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core61092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61094,meta61093__$1){
var self__ = this;
var _61094__$1 = this;
return (new acme.core.t_acme$core61092(self__.search,self__.app,self__.owner,meta61093__$1));
});

acme.core.t_acme$core61092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61094){
var self__ = this;
var _61094__$1 = this;
return self__.meta61093;
});

acme.core.t_acme$core61092.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core61092.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

acme.core.t_acme$core61092.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core61092.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "pure-g"},React.DOM.div({"className": "pure-u-4-5"},React.DOM.div({"className": "padded"},om.dom.input.call(null,{"placeholder": "Search for sequences ...", "className": "myinput pure-u-1", "type": "text", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697)), "onChange": ((function (___$1){
return (function (p1__61088_SHARP_){
return acme.core.change.call(null,p1__61088_SHARP_,self__.owner);
});})(___$1))
}))),React.DOM.div({"className": "pure-u-1-5"},React.DOM.div({"className": "padded"},React.DOM.button({"className": "pure-button pure-button-primary pure-u-1", "onClick": ((function (___$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"proteins","proteins",-212247297),new cljs.core.Keyword(null,"data","data",-232669377),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697))], null));
});})(___$1))
},"Go"))));
});

acme.core.t_acme$core61092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta61093","meta61093",2004935187,null)], null);
});

acme.core.t_acme$core61092.cljs$lang$type = true;

acme.core.t_acme$core61092.cljs$lang$ctorStr = "acme.core/t_acme$core61092";

acme.core.t_acme$core61092.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core61092");
});

acme.core.__GT_t_acme$core61092 = (function acme$core$search_$___GT_t_acme$core61092(search__$1,app__$1,owner__$1,meta61093){
return (new acme.core.t_acme$core61092(search__$1,app__$1,owner__$1,meta61093));
});

}

return (new acme.core.t_acme$core61092(acme$core$search,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.get_fasta_key = (function acme$core$get_fasta_key(owner){
var h = (function acme$core$get_fasta_key_$_h(r){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"export","export",214356590)], null),r));
});
var temp__4423__auto__ = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"sel-prots","sel-prots",-1473179151)));
if(temp__4423__auto__){
var ids = temp__4423__auto__;
return ajax.core.POST.call(null,"/id-submit",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),acme.core.error_handler,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.vec.call(null,ids)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
} else {
return h.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),"fail",new cljs.core.Keyword(null,"msg","msg",-1386103444),"No sequences selected."], null));
}
});
acme.core.export_cb_select_loop = (function acme$core$export_cb_select_loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events){
return (function (state_61158){
var state_val_61159 = (state_61158[(1)]);
if((state_val_61159 === (1))){
var state_61158__$1 = state_61158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61158__$1,(2),events);
} else {
if((state_val_61159 === (2))){
var inst_61138 = (state_61158[(2)]);
var inst_61139 = inst_61138;
var state_61158__$1 = (function (){var statearr_61160 = state_61158;
(statearr_61160[(7)] = inst_61139);

return statearr_61160;
})();
var statearr_61161_61176 = state_61158__$1;
(statearr_61161_61176[(2)] = null);

(statearr_61161_61176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61159 === (3))){
var inst_61139 = (state_61158[(7)]);
var inst_61141 = (function (){var e = inst_61139;
return ((function (e,inst_61139,state_val_61159,c__7633__auto__,events){
return (function (p1__61095_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(e),p1__61095_SHARP_);
});
;})(e,inst_61139,state_val_61159,c__7633__auto__,events))
})();
var inst_61142 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"sel-prots","sel-prots",-1473179151));
var inst_61143 = cljs.core.some.call(null,inst_61141,inst_61142);
var state_61158__$1 = state_61158;
if(cljs.core.truth_(inst_61143)){
var statearr_61162_61177 = state_61158__$1;
(statearr_61162_61177[(1)] = (5));

} else {
var statearr_61163_61178 = state_61158__$1;
(statearr_61163_61178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61159 === (4))){
var inst_61156 = (state_61158[(2)]);
var state_61158__$1 = state_61158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61158__$1,inst_61156);
} else {
if((state_val_61159 === (5))){
var inst_61139 = (state_61158[(7)]);
var inst_61145 = (function (){var e = inst_61139;
return ((function (e,inst_61139,state_val_61159,c__7633__auto__,events){
return (function (x){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (e,inst_61139,state_val_61159,c__7633__auto__,events){
return (function (p1__61096_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(e),p1__61096_SHARP_);
});})(e,inst_61139,state_val_61159,c__7633__auto__,events))
,x));
});
;})(e,inst_61139,state_val_61159,c__7633__auto__,events))
})();
var inst_61146 = om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"sel-prots","sel-prots",-1473179151),inst_61145);
var state_61158__$1 = state_61158;
var statearr_61164_61179 = state_61158__$1;
(statearr_61164_61179[(2)] = inst_61146);

(statearr_61164_61179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61159 === (6))){
var inst_61139 = (state_61158[(7)]);
var inst_61148 = (function (){var e = inst_61139;
return ((function (e,inst_61139,state_val_61159,c__7633__auto__,events){
return (function (p1__61097_SHARP_){
return cljs.core.conj.call(null,p1__61097_SHARP_,new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(e));
});
;})(e,inst_61139,state_val_61159,c__7633__auto__,events))
})();
var inst_61149 = om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"sel-prots","sel-prots",-1473179151),inst_61148);
var state_61158__$1 = state_61158;
var statearr_61165_61180 = state_61158__$1;
(statearr_61165_61180[(2)] = inst_61149);

(statearr_61165_61180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61159 === (7))){
var inst_61151 = (state_61158[(2)]);
var state_61158__$1 = (function (){var statearr_61166 = state_61158;
(statearr_61166[(8)] = inst_61151);

return statearr_61166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61158__$1,(8),events);
} else {
if((state_val_61159 === (8))){
var inst_61153 = (state_61158[(2)]);
var inst_61139 = inst_61153;
var state_61158__$1 = (function (){var statearr_61167 = state_61158;
(statearr_61167[(7)] = inst_61139);

return statearr_61167;
})();
var statearr_61168_61181 = state_61158__$1;
(statearr_61168_61181[(2)] = null);

(statearr_61168_61181[(1)] = (3));


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
var acme$core$export_cb_select_loop_$_state_machine__7613__auto__ = null;
var acme$core$export_cb_select_loop_$_state_machine__7613__auto____0 = (function (){
var statearr_61172 = [null,null,null,null,null,null,null,null,null];
(statearr_61172[(0)] = acme$core$export_cb_select_loop_$_state_machine__7613__auto__);

(statearr_61172[(1)] = (1));

return statearr_61172;
});
var acme$core$export_cb_select_loop_$_state_machine__7613__auto____1 = (function (state_61158){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_61158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e61173){if((e61173 instanceof Object)){
var ex__7616__auto__ = e61173;
var statearr_61174_61182 = state_61158;
(statearr_61174_61182[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61183 = state_61158;
state_61158 = G__61183;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$export_cb_select_loop_$_state_machine__7613__auto__ = function(state_61158){
switch(arguments.length){
case 0:
return acme$core$export_cb_select_loop_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$export_cb_select_loop_$_state_machine__7613__auto____1.call(this,state_61158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$export_cb_select_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$export_cb_select_loop_$_state_machine__7613__auto____0;
acme$core$export_cb_select_loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$export_cb_select_loop_$_state_machine__7613__auto____1;
return acme$core$export_cb_select_loop_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events))
})();
var state__7635__auto__ = (function (){var statearr_61175 = f__7634__auto__.call(null);
(statearr_61175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_61175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events))
);

return c__7633__auto__;
});
acme.core.export_is_selected_QMARK__loop = (function acme$core$export_is_selected_QMARK__loop(owner){
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events){
return (function (state_61261){
var state_val_61262 = (state_61261[(1)]);
if((state_val_61262 === (1))){
var state_61261__$1 = state_61261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61261__$1,(2),events);
} else {
if((state_val_61262 === (2))){
var inst_61233 = (state_61261[(2)]);
var inst_61234 = inst_61233;
var state_61261__$1 = (function (){var statearr_61263 = state_61261;
(statearr_61263[(7)] = inst_61234);

return statearr_61263;
})();
var statearr_61264_61279 = state_61261__$1;
(statearr_61264_61279[(2)] = null);

(statearr_61264_61279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61262 === (3))){
var inst_61234 = (state_61261[(7)]);
var inst_61236 = (function (){var e = inst_61234;
return ((function (e,inst_61234,state_val_61262,c__7633__auto__,events){
return (function (p1__61184_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(e),p1__61184_SHARP_);
});
;})(e,inst_61234,state_val_61262,c__7633__auto__,events))
})();
var inst_61237 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"sel-prots","sel-prots",-1473179151));
var inst_61238 = cljs.core.some.call(null,inst_61236,inst_61237);
var state_61261__$1 = state_61261;
if(cljs.core.truth_(inst_61238)){
var statearr_61265_61280 = state_61261__$1;
(statearr_61265_61280[(1)] = (5));

} else {
var statearr_61266_61281 = state_61261__$1;
(statearr_61266_61281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61262 === (4))){
var inst_61259 = (state_61261[(2)]);
var state_61261__$1 = state_61261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61261__$1,inst_61259);
} else {
if((state_val_61262 === (5))){
var inst_61234 = (state_61261[(7)]);
var inst_61240 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_61234);
var inst_61241 = [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"checked","checked",-50955819)];
var inst_61242 = new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(inst_61234);
var inst_61243 = [inst_61242,true];
var inst_61244 = cljs.core.PersistentHashMap.fromArrays(inst_61241,inst_61243);
var inst_61245 = cljs.core.async.put_BANG_.call(null,inst_61240,inst_61244);
var state_61261__$1 = state_61261;
var statearr_61267_61282 = state_61261__$1;
(statearr_61267_61282[(2)] = inst_61245);

(statearr_61267_61282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61262 === (6))){
var inst_61234 = (state_61261[(7)]);
var inst_61247 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(inst_61234);
var inst_61248 = [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"checked","checked",-50955819)];
var inst_61249 = new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(inst_61234);
var inst_61250 = [inst_61249,false];
var inst_61251 = cljs.core.PersistentHashMap.fromArrays(inst_61248,inst_61250);
var inst_61252 = cljs.core.async.put_BANG_.call(null,inst_61247,inst_61251);
var state_61261__$1 = state_61261;
var statearr_61268_61283 = state_61261__$1;
(statearr_61268_61283[(2)] = inst_61252);

(statearr_61268_61283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61262 === (7))){
var inst_61254 = (state_61261[(2)]);
var state_61261__$1 = (function (){var statearr_61269 = state_61261;
(statearr_61269[(8)] = inst_61254);

return statearr_61269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61261__$1,(8),events);
} else {
if((state_val_61262 === (8))){
var inst_61256 = (state_61261[(2)]);
var inst_61234 = inst_61256;
var state_61261__$1 = (function (){var statearr_61270 = state_61261;
(statearr_61270[(7)] = inst_61234);

return statearr_61270;
})();
var statearr_61271_61284 = state_61261__$1;
(statearr_61271_61284[(2)] = null);

(statearr_61271_61284[(1)] = (3));


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
var acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto__ = null;
var acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto____0 = (function (){
var statearr_61275 = [null,null,null,null,null,null,null,null,null];
(statearr_61275[(0)] = acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto__);

(statearr_61275[(1)] = (1));

return statearr_61275;
});
var acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto____1 = (function (state_61261){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_61261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e61276){if((e61276 instanceof Object)){
var ex__7616__auto__ = e61276;
var statearr_61277_61285 = state_61261;
(statearr_61277_61285[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61286 = state_61261;
state_61261 = G__61286;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto__ = function(state_61261){
switch(arguments.length){
case 0:
return acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto____1.call(this,state_61261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto____0;
acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto____1;
return acme$core$export_is_selected_QMARK__loop_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events))
})();
var state__7635__auto__ = (function (){var statearr_61278 = f__7634__auto__.call(null);
(statearr_61278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_61278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events))
);

return c__7633__auto__;
});
acme.core.export_hidden_src_loop = (function acme$core$export_hidden_src_loop(owner){
return null;
});
acme.core.export$ = (function acme$core$export(_,owner){
if(typeof acme.core.t_acme$core61346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core61346 = (function (export$,_,owner,meta61347){
this.export$ = export$;
this._ = _;
this.owner = owner;
this.meta61347 = meta61347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core61346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61348,meta61347__$1){
var self__ = this;
var _61348__$1 = this;
return (new acme.core.t_acme$core61346(self__.export$,self__._,self__.owner,meta61347__$1));
});

acme.core.t_acme$core61346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61348){
var self__ = this;
var _61348__$1 = this;
return self__.meta61347;
});

acme.core.t_acme$core61346.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core61346.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sel-prots","sel-prots",-1473179151),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"src","src",-1651076051),""], null);
});

acme.core.t_acme$core61346.prototype.om$core$IDidMount$ = true;

acme.core.t_acme$core61346.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
acme.core.export_cb_select_loop.call(null,self__.owner);

acme.core.export_is_selected_QMARK__loop.call(null,self__.owner);

var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.Keyword(null,"export","export",214356590),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events,___$2){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events,___$2){
return (function (state_61382){
var state_val_61383 = (state_61382[(1)]);
if((state_val_61383 === (7))){
var inst_61375 = (state_61382[(2)]);
var state_61382__$1 = (function (){var statearr_61384 = state_61382;
(statearr_61384[(7)] = inst_61375);

return statearr_61384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61382__$1,(11),events);
} else {
if((state_val_61383 === (1))){
var state_61382__$1 = state_61382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61382__$1,(2),events);
} else {
if((state_val_61383 === (4))){
var inst_61380 = (state_61382[(2)]);
var state_61382__$1 = state_61382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61382__$1,inst_61380);
} else {
if((state_val_61383 === (6))){
var inst_61357 = (state_61382[(8)]);
var inst_61364 = cljs.core._EQ_.call(null,"fail",inst_61357);
var state_61382__$1 = state_61382;
if(inst_61364){
var statearr_61385_61405 = state_61382__$1;
(statearr_61385_61405[(1)] = (8));

} else {
var statearr_61386_61406 = state_61382__$1;
(statearr_61386_61406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61383 === (3))){
var inst_61357 = (state_61382[(8)]);
var inst_61351 = (state_61382[(9)]);
var inst_61353 = acme.core.log.call(null,"j");
var inst_61357__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_61351);
var inst_61358 = cljs.core._EQ_.call(null,"success",inst_61357__$1);
var state_61382__$1 = (function (){var statearr_61387 = state_61382;
(statearr_61387[(10)] = inst_61353);

(statearr_61387[(8)] = inst_61357__$1);

return statearr_61387;
})();
if(inst_61358){
var statearr_61388_61407 = state_61382__$1;
(statearr_61388_61407[(1)] = (5));

} else {
var statearr_61389_61408 = state_61382__$1;
(statearr_61389_61408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61383 === (2))){
var inst_61350 = (state_61382[(2)]);
var inst_61351 = inst_61350;
var state_61382__$1 = (function (){var statearr_61390 = state_61382;
(statearr_61390[(9)] = inst_61351);

return statearr_61390;
})();
var statearr_61391_61409 = state_61382__$1;
(statearr_61391_61409[(2)] = null);

(statearr_61391_61409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61383 === (11))){
var inst_61377 = (state_61382[(2)]);
var inst_61351 = inst_61377;
var state_61382__$1 = (function (){var statearr_61392 = state_61382;
(statearr_61392[(9)] = inst_61351);

return statearr_61392;
})();
var statearr_61393_61410 = state_61382__$1;
(statearr_61393_61410[(2)] = null);

(statearr_61393_61410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61383 === (9))){
var inst_61357 = (state_61382[(8)]);
var inst_61369 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_61357)].join('');
var inst_61370 = (new Error(inst_61369));
var inst_61371 = (function(){throw inst_61370})();
var state_61382__$1 = state_61382;
var statearr_61394_61411 = state_61382__$1;
(statearr_61394_61411[(2)] = inst_61371);

(statearr_61394_61411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61383 === (5))){
var inst_61351 = (state_61382[(9)]);
var inst_61360 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_61351);
var inst_61361 = [cljs.core.str("/fetch?k="),cljs.core.str(inst_61360)].join('');
var inst_61362 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"src","src",-1651076051),inst_61361);
var state_61382__$1 = state_61382;
var statearr_61395_61412 = state_61382__$1;
(statearr_61395_61412[(2)] = inst_61362);

(statearr_61395_61412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61383 === (10))){
var inst_61373 = (state_61382[(2)]);
var state_61382__$1 = state_61382;
var statearr_61396_61413 = state_61382__$1;
(statearr_61396_61413[(2)] = inst_61373);

(statearr_61396_61413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61383 === (8))){
var inst_61351 = (state_61382[(9)]);
var inst_61366 = new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(inst_61351);
var inst_61367 = alert(inst_61366);
var state_61382__$1 = state_61382;
var statearr_61397_61414 = state_61382__$1;
(statearr_61397_61414[(2)] = inst_61367);

(statearr_61397_61414[(1)] = (10));


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
});})(c__7633__auto__,events,___$2))
;
return ((function (switch__7612__auto__,c__7633__auto__,events,___$2){
return (function() {
var acme$core$export_$_state_machine__7613__auto__ = null;
var acme$core$export_$_state_machine__7613__auto____0 = (function (){
var statearr_61401 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61401[(0)] = acme$core$export_$_state_machine__7613__auto__);

(statearr_61401[(1)] = (1));

return statearr_61401;
});
var acme$core$export_$_state_machine__7613__auto____1 = (function (state_61382){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_61382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e61402){if((e61402 instanceof Object)){
var ex__7616__auto__ = e61402;
var statearr_61403_61415 = state_61382;
(statearr_61403_61415[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61416 = state_61382;
state_61382 = G__61416;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$export_$_state_machine__7613__auto__ = function(state_61382){
switch(arguments.length){
case 0:
return acme$core$export_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$export_$_state_machine__7613__auto____1.call(this,state_61382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$export_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$export_$_state_machine__7613__auto____0;
acme$core$export_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$export_$_state_machine__7613__auto____1;
return acme$core$export_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events,___$2))
})();
var state__7635__auto__ = (function (){var statearr_61404 = f__7634__auto__.call(null);
(statearr_61404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_61404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events,___$2))
);

return c__7633__auto__;
});

acme.core.t_acme$core61346.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core61346.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,state){
var self__ = this;
var ___$2 = this;
return React.DOM.div(null,React.DOM.iframe({"id": "downloadframe", "src": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"src","src",-1651076051))}),React.DOM.div({"style": {"float": "right"}},React.DOM.select({"style": {"font-size": "85%"}, "className": "myinput", "onChange": ((function (___$2){
return (function (___$3){
return acme.core.get_fasta_key.call(null,self__.owner);
});})(___$2))
},om.dom.option.call(null,{"value": "", "disabled": ""},"Export selected as ..."),om.dom.option.call(null,{"value": "fasta"},"Fasta"))));
});

acme.core.t_acme$core61346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"export","export",1854888117,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta61347","meta61347",-217327496,null)], null);
});

acme.core.t_acme$core61346.cljs$lang$type = true;

acme.core.t_acme$core61346.cljs$lang$ctorStr = "acme.core/t_acme$core61346";

acme.core.t_acme$core61346.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core61346");
});

acme.core.__GT_t_acme$core61346 = (function acme$core$export_$___GT_t_acme$core61346(export$__$1,___$1,owner__$1,meta61347){
return (new acme.core.t_acme$core61346(export$__$1,___$1,owner__$1,meta61347));
});

}

return (new acme.core.t_acme$core61346(acme$core$export,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.nav = (function acme$core$nav(hash,owner){
if(typeof acme.core.t_acme$core61476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core61476 = (function (nav,hash,owner,meta61477){
this.nav = nav;
this.hash = hash;
this.owner = owner;
this.meta61477 = meta61477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core61476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61478,meta61477__$1){
var self__ = this;
var _61478__$1 = this;
return (new acme.core.t_acme$core61476(self__.nav,self__.hash,self__.owner,meta61477__$1));
});

acme.core.t_acme$core61476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61478){
var self__ = this;
var _61478__$1 = this;
return self__.meta61477;
});

acme.core.t_acme$core61476.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core61476.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(1),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null);
});

acme.core.t_acme$core61476.prototype.om$core$IDidMount$ = true;

acme.core.t_acme$core61476.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var events_61535 = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.async.chan.call(null));
var c__7633__auto___61536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto___61536,events_61535,___$1){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto___61536,events_61535,___$1){
return (function (state_61492){
var state_val_61493 = (state_61492[(1)]);
if((state_val_61493 === (1))){
var state_61492__$1 = state_61492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61492__$1,(2),events_61535);
} else {
if((state_val_61493 === (2))){
var inst_61480 = (state_61492[(2)]);
var inst_61481 = inst_61480;
var state_61492__$1 = (function (){var statearr_61494 = state_61492;
(statearr_61494[(7)] = inst_61481);

return statearr_61494;
})();
var statearr_61495_61537 = state_61492__$1;
(statearr_61495_61537[(2)] = null);

(statearr_61495_61537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61493 === (3))){
var inst_61481 = (state_61492[(7)]);
var inst_61483 = acme.core.log.call(null,"pos");
var inst_61484 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(inst_61481);
var inst_61485 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"start","start",-355208981),inst_61484);
var state_61492__$1 = (function (){var statearr_61496 = state_61492;
(statearr_61496[(8)] = inst_61485);

(statearr_61496[(9)] = inst_61483);

return statearr_61496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61492__$1,(5),events_61535);
} else {
if((state_val_61493 === (4))){
var inst_61490 = (state_61492[(2)]);
var state_61492__$1 = state_61492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61492__$1,inst_61490);
} else {
if((state_val_61493 === (5))){
var inst_61487 = (state_61492[(2)]);
var inst_61481 = inst_61487;
var state_61492__$1 = (function (){var statearr_61497 = state_61492;
(statearr_61497[(7)] = inst_61481);

return statearr_61497;
})();
var statearr_61498_61538 = state_61492__$1;
(statearr_61498_61538[(2)] = null);

(statearr_61498_61538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7633__auto___61536,events_61535,___$1))
;
return ((function (switch__7612__auto__,c__7633__auto___61536,events_61535,___$1){
return (function() {
var acme$core$nav_$_state_machine__7613__auto__ = null;
var acme$core$nav_$_state_machine__7613__auto____0 = (function (){
var statearr_61502 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61502[(0)] = acme$core$nav_$_state_machine__7613__auto__);

(statearr_61502[(1)] = (1));

return statearr_61502;
});
var acme$core$nav_$_state_machine__7613__auto____1 = (function (state_61492){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_61492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e61503){if((e61503 instanceof Object)){
var ex__7616__auto__ = e61503;
var statearr_61504_61539 = state_61492;
(statearr_61504_61539[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61540 = state_61492;
state_61492 = G__61540;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$nav_$_state_machine__7613__auto__ = function(state_61492){
switch(arguments.length){
case 0:
return acme$core$nav_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$nav_$_state_machine__7613__auto____1.call(this,state_61492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$nav_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$nav_$_state_machine__7613__auto____0;
acme$core$nav_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$nav_$_state_machine__7613__auto____1;
return acme$core$nav_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto___61536,events_61535,___$1))
})();
var state__7635__auto__ = (function (){var statearr_61505 = f__7634__auto__.call(null);
(statearr_61505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto___61536);

return statearr_61505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto___61536,events_61535,___$1))
);


var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.Keyword(null,"total-prot","total-prot",-1980856156),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events,___$1){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events,___$1){
return (function (state_61518){
var state_val_61519 = (state_61518[(1)]);
if((state_val_61519 === (1))){
var state_61518__$1 = state_61518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61518__$1,(2),events);
} else {
if((state_val_61519 === (2))){
var inst_61507 = (state_61518[(2)]);
var inst_61508 = inst_61507;
var state_61518__$1 = (function (){var statearr_61520 = state_61518;
(statearr_61520[(7)] = inst_61508);

return statearr_61520;
})();
var statearr_61521_61541 = state_61518__$1;
(statearr_61521_61541[(2)] = null);

(statearr_61521_61541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61519 === (3))){
var inst_61508 = (state_61518[(7)]);
var inst_61510 = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(inst_61508);
var inst_61511 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total","total",1916810418),inst_61510);
var state_61518__$1 = (function (){var statearr_61522 = state_61518;
(statearr_61522[(8)] = inst_61511);

return statearr_61522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61518__$1,(5),events);
} else {
if((state_val_61519 === (4))){
var inst_61516 = (state_61518[(2)]);
var state_61518__$1 = state_61518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61518__$1,inst_61516);
} else {
if((state_val_61519 === (5))){
var inst_61513 = (state_61518[(2)]);
var inst_61508 = inst_61513;
var state_61518__$1 = (function (){var statearr_61523 = state_61518;
(statearr_61523[(7)] = inst_61508);

return statearr_61523;
})();
var statearr_61524_61542 = state_61518__$1;
(statearr_61524_61542[(2)] = null);

(statearr_61524_61542[(1)] = (3));


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
var acme$core$nav_$_state_machine__7613__auto__ = null;
var acme$core$nav_$_state_machine__7613__auto____0 = (function (){
var statearr_61528 = [null,null,null,null,null,null,null,null,null];
(statearr_61528[(0)] = acme$core$nav_$_state_machine__7613__auto__);

(statearr_61528[(1)] = (1));

return statearr_61528;
});
var acme$core$nav_$_state_machine__7613__auto____1 = (function (state_61518){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_61518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e61529){if((e61529 instanceof Object)){
var ex__7616__auto__ = e61529;
var statearr_61530_61543 = state_61518;
(statearr_61530_61543[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61544 = state_61518;
state_61518 = G__61544;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$nav_$_state_machine__7613__auto__ = function(state_61518){
switch(arguments.length){
case 0:
return acme$core$nav_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$nav_$_state_machine__7613__auto____1.call(this,state_61518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$nav_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$nav_$_state_machine__7613__auto____0;
acme$core$nav_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$nav_$_state_machine__7613__auto____1;
return acme$core$nav_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events,___$1))
})();
var state__7635__auto__ = (function (){var statearr_61531 = f__7634__auto__.call(null);
(statearr_61531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_61531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events,___$1))
);

return c__7633__auto__;
});

acme.core.t_acme$core61476.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core61476.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__61532){
var self__ = this;
var map__61533 = p__61532;
var map__61533__$1 = ((((!((map__61533 == null)))?((((map__61533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61533):map__61533);
var start = cljs.core.get.call(null,map__61533__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var total = cljs.core.get.call(null,map__61533__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var ___$1 = this;
return React.DOM.div({"className": "pure-g padded"},React.DOM.div({"className": "pure-u-1-2"},React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,(1),start))?true:false), "onClick": ((function (___$1,map__61533,map__61533__$1,start,total){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"func","func",-238706040),((function (___$1,map__61533,map__61533__$1,start,total){
return (function (___$2){
return (1);
});})(___$1,map__61533,map__61533__$1,start,total))
], null));
});})(___$1,map__61533,map__61533__$1,start,total))
},"<<"),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,(1),start))?true:false), "onClick": ((function (___$1,map__61533,map__61533__$1,start,total){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.dec], null));
});})(___$1,map__61533,map__61533__$1,start,total))
},"<"),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "type": "submit", "disabled": "true"},[cljs.core.str("Page "),cljs.core.str(start),cljs.core.str(" of "),cljs.core.str(total)].join('')),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,start,total))?true:false), "onClick": ((function (___$1,map__61533,map__61533__$1,start,total){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.inc], null));
});})(___$1,map__61533,map__61533__$1,start,total))
},">"),React.DOM.button({"style": {"font-size": "85%"}, "className": "pure-button", "disabled": ((cljs.core._EQ_.call(null,total,start))?true:false), "onClick": ((function (___$1,map__61533,map__61533__$1,start,total){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"func","func",-238706040),((function (___$1,map__61533,map__61533__$1,start,total){
return (function (___$2){
return total;
});})(___$1,map__61533,map__61533__$1,start,total))
], null));
});})(___$1,map__61533,map__61533__$1,start,total))
},">>")),React.DOM.div({"className": "pure-u-1-2"},om.core.build.call(null,acme.core.export$,cljs.core.PersistentArrayMap.EMPTY)));
});

acme.core.t_acme$core61476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hash","hash",1626749931,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"hash","hash",1626749931,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta61477","meta61477",460153042,null)], null);
});

acme.core.t_acme$core61476.cljs$lang$type = true;

acme.core.t_acme$core61476.cljs$lang$ctorStr = "acme.core/t_acme$core61476";

acme.core.t_acme$core61476.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core61476");
});

acme.core.__GT_t_acme$core61476 = (function acme$core$nav_$___GT_t_acme$core61476(nav__$1,hash__$1,owner__$1,meta61477){
return (new acme.core.t_acme$core61476(nav__$1,hash__$1,owner__$1,meta61477));
});

}

return (new acme.core.t_acme$core61476(acme$core$nav,hash,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.protein = (function acme$core$protein(p__61545,owner){
var map__61578 = p__61545;
var map__61578__$1 = ((((!((map__61578 == null)))?((((map__61578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61578):map__61578);
var acc = cljs.core.get.call(null,map__61578__$1,new cljs.core.Keyword(null,"acc","acc",838566312));
var description = cljs.core.get.call(null,map__61578__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var sequence = cljs.core.get.call(null,map__61578__$1,new cljs.core.Keyword(null,"sequence","sequence",926807414));
if(typeof acme.core.t_acme$core61580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core61580 = (function (protein,p__61545,owner,map__61578,acc,description,sequence,meta61581){
this.protein = protein;
this.p__61545 = p__61545;
this.owner = owner;
this.map__61578 = map__61578;
this.acc = acc;
this.description = description;
this.sequence = sequence;
this.meta61581 = meta61581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core61580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__61578,map__61578__$1,acc,description,sequence){
return (function (_61582,meta61581__$1){
var self__ = this;
var _61582__$1 = this;
return (new acme.core.t_acme$core61580(self__.protein,self__.p__61545,self__.owner,self__.map__61578,self__.acc,self__.description,self__.sequence,meta61581__$1));
});})(map__61578,map__61578__$1,acc,description,sequence))
;

acme.core.t_acme$core61580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__61578,map__61578__$1,acc,description,sequence){
return (function (_61582){
var self__ = this;
var _61582__$1 = this;
return self__.meta61581;
});})(map__61578,map__61578__$1,acc,description,sequence))
;

acme.core.t_acme$core61580.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core61580.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__61578,map__61578__$1,acc,description,sequence){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),false], null);
});})(map__61578,map__61578__$1,acc,description,sequence))
;

acme.core.t_acme$core61580.prototype.om$core$IWillReceiveProps$ = true;

acme.core.t_acme$core61580.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__61578,map__61578__$1,acc,description,sequence){
return (function (_,np){
var self__ = this;
var ___$1 = this;
var c = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(np),new cljs.core.Keyword(null,"chan","chan",-2103021695),c], null));

var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,c,___$1,map__61578,map__61578__$1,acc,description,sequence){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,c,___$1,map__61578,map__61578__$1,acc,description,sequence){
return (function (state_61596){
var state_val_61597 = (state_61596[(1)]);
if((state_val_61597 === (1))){
var state_61596__$1 = state_61596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61596__$1,(2),c);
} else {
if((state_val_61597 === (2))){
var inst_61584 = (state_61596[(7)]);
var inst_61584__$1 = (state_61596[(2)]);
var inst_61585 = new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(inst_61584__$1);
var inst_61586 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"checked","checked",-50955819));
var inst_61587 = cljs.core._EQ_.call(null,inst_61585,inst_61586);
var inst_61588 = !(inst_61587);
var state_61596__$1 = (function (){var statearr_61598 = state_61596;
(statearr_61598[(7)] = inst_61584__$1);

return statearr_61598;
})();
if(inst_61588){
var statearr_61599_61610 = state_61596__$1;
(statearr_61599_61610[(1)] = (3));

} else {
var statearr_61600_61611 = state_61596__$1;
(statearr_61600_61611[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61597 === (3))){
var inst_61584 = (state_61596[(7)]);
var inst_61590 = new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(inst_61584);
var inst_61591 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"checked","checked",-50955819),inst_61590);
var state_61596__$1 = state_61596;
var statearr_61601_61612 = state_61596__$1;
(statearr_61601_61612[(2)] = inst_61591);

(statearr_61601_61612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61597 === (4))){
var state_61596__$1 = state_61596;
var statearr_61602_61613 = state_61596__$1;
(statearr_61602_61613[(2)] = null);

(statearr_61602_61613[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61597 === (5))){
var inst_61594 = (state_61596[(2)]);
var state_61596__$1 = state_61596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61596__$1,inst_61594);
} else {
return null;
}
}
}
}
}
});})(c__7633__auto__,c,___$1,map__61578,map__61578__$1,acc,description,sequence))
;
return ((function (switch__7612__auto__,c__7633__auto__,c,___$1,map__61578,map__61578__$1,acc,description,sequence){
return (function() {
var acme$core$protein_$_state_machine__7613__auto__ = null;
var acme$core$protein_$_state_machine__7613__auto____0 = (function (){
var statearr_61606 = [null,null,null,null,null,null,null,null];
(statearr_61606[(0)] = acme$core$protein_$_state_machine__7613__auto__);

(statearr_61606[(1)] = (1));

return statearr_61606;
});
var acme$core$protein_$_state_machine__7613__auto____1 = (function (state_61596){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_61596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e61607){if((e61607 instanceof Object)){
var ex__7616__auto__ = e61607;
var statearr_61608_61614 = state_61596;
(statearr_61608_61614[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61615 = state_61596;
state_61596 = G__61615;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$protein_$_state_machine__7613__auto__ = function(state_61596){
switch(arguments.length){
case 0:
return acme$core$protein_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$protein_$_state_machine__7613__auto____1.call(this,state_61596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$protein_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$protein_$_state_machine__7613__auto____0;
acme$core$protein_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$protein_$_state_machine__7613__auto____1;
return acme$core$protein_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,c,___$1,map__61578,map__61578__$1,acc,description,sequence))
})();
var state__7635__auto__ = (function (){var statearr_61609 = f__7634__auto__.call(null);
(statearr_61609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_61609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,c,___$1,map__61578,map__61578__$1,acc,description,sequence))
);

return c__7633__auto__;
});})(map__61578,map__61578__$1,acc,description,sequence))
;

acme.core.t_acme$core61580.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core61580.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__61578,map__61578__$1,acc,description,sequence){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.label({"className": "protsumm"},om.dom.input.call(null,{"className": "protsumm", "type": "checkbox", "checked": new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (___$1,map__61578,map__61578__$1,acc,description,sequence){
return (function (___$2){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc], null));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(state)));
});})(___$1,map__61578,map__61578__$1,acc,description,sequence))
},React.DOM.a({"href": "#", "width": "100%"},self__.description),React.DOM.div(null,React.DOM.span({"style": {"paddingRight": "15px"}},[cljs.core.str(cljs.core.count.call(null,self__.sequence)),cljs.core.str(" amino acid protein")].join('')),React.DOM.span(null,[cljs.core.str("JellyDB accession: "),cljs.core.str(self__.acc)].join(''))),React.DOM.div(null,React.DOM.a({"href": "#"},"Something else"))));
});})(map__61578,map__61578__$1,acc,description,sequence))
;

acme.core.t_acme$core61580.getBasis = ((function (map__61578,map__61578__$1,acc,description,sequence){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"protein","protein",1824828479,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__61545","p__61545",-1706778132,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__61578","map__61578",-916714327,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null),new cljs.core.Symbol(null,"meta61581","meta61581",166205716,null)], null);
});})(map__61578,map__61578__$1,acc,description,sequence))
;

acme.core.t_acme$core61580.cljs$lang$type = true;

acme.core.t_acme$core61580.cljs$lang$ctorStr = "acme.core/t_acme$core61580";

acme.core.t_acme$core61580.cljs$lang$ctorPrWriter = ((function (map__61578,map__61578__$1,acc,description,sequence){
return (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core61580");
});})(map__61578,map__61578__$1,acc,description,sequence))
;

acme.core.__GT_t_acme$core61580 = ((function (map__61578,map__61578__$1,acc,description,sequence){
return (function acme$core$protein_$___GT_t_acme$core61580(protein__$1,p__61545__$1,owner__$1,map__61578__$2,acc__$1,description__$1,sequence__$1,meta61581){
return (new acme.core.t_acme$core61580(protein__$1,p__61545__$1,owner__$1,map__61578__$2,acc__$1,description__$1,sequence__$1,meta61581));
});})(map__61578,map__61578__$1,acc,description,sequence))
;

}

return (new acme.core.t_acme$core61580(acme$core$protein,p__61545,owner,map__61578__$1,acc,description,sequence,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.protein_list = (function acme$core$protein_list(proteins,owner){
if(typeof acme.core.t_acme$core61619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core61619 = (function (protein_list,proteins,owner,meta61620){
this.protein_list = protein_list;
this.proteins = proteins;
this.owner = owner;
this.meta61620 = meta61620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core61619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61621,meta61620__$1){
var self__ = this;
var _61621__$1 = this;
return (new acme.core.t_acme$core61619(self__.protein_list,self__.proteins,self__.owner,meta61620__$1));
});

acme.core.t_acme$core61619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61621){
var self__ = this;
var _61621__$1 = this;
return self__.meta61620;
});

acme.core.t_acme$core61619.prototype.om$core$IRender$ = true;

acme.core.t_acme$core61619.prototype.om$core$IRender$render$arity$1 = (function (this__8317__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
return React.DOM.div(null,om.core.build.call(null,acme.core.nav,cljs.core.PersistentArrayMap.EMPTY),cljs.core.apply.call(null,om.dom.div,{"style": {"clear": "both"}},om.core.build_all.call(null,acme.core.protein,self__.proteins)),om.core.build.call(null,acme.core.nav,cljs.core.PersistentArrayMap.EMPTY));
});

acme.core.t_acme$core61619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"protein-list","protein-list",-1074549694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"proteins","proteins",1428284230,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"proteins","proteins",1428284230,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta61620","meta61620",2016492825,null)], null);
});

acme.core.t_acme$core61619.cljs$lang$type = true;

acme.core.t_acme$core61619.cljs$lang$ctorStr = "acme.core/t_acme$core61619";

acme.core.t_acme$core61619.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core61619");
});

acme.core.__GT_t_acme$core61619 = (function acme$core$protein_list_$___GT_t_acme$core61619(protein_list__$1,proteins__$1,owner__$1,meta61620){
return (new acme.core.t_acme$core61619(protein_list__$1,proteins__$1,owner__$1,meta61620));
});

}

return (new acme.core.t_acme$core61619(acme$core$protein_list,proteins,owner,null));
});
acme.core.protein_view = (function acme$core$protein_view(search,owner){
if(typeof acme.core.t_acme$core61687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core61687 = (function (protein_view,search,owner,meta61688){
this.protein_view = protein_view;
this.search = search;
this.owner = owner;
this.meta61688 = meta61688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core61687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61689,meta61688__$1){
var self__ = this;
var _61689__$1 = this;
return (new acme.core.t_acme$core61687(self__.protein_view,self__.search,self__.owner,meta61688__$1));
});

acme.core.t_acme$core61687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61689){
var self__ = this;
var _61689__$1 = this;
return self__.meta61688;
});

acme.core.t_acme$core61687.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core61687.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(1),new cljs.core.Keyword(null,"proteins","proteins",-212247297),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"search","search",1564939822),self__.search], null);
});

acme.core.t_acme$core61687.prototype.om$core$IWillMount$ = true;

acme.core.t_acme$core61687.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
acme.core.fetch_proteins.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"search","search",1564939822)),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"start","start",-355208981)),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"proteins","proteins",-212247297)));

var c__7633__auto___61752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto___61752,___$1){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto___61752,___$1){
return (function (state_61695){
var state_val_61696 = (state_61695[(1)]);
if((state_val_61696 === (1))){
var inst_61690 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"proteins","proteins",-212247297));
var state_61695__$1 = state_61695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61695__$1,(2),inst_61690);
} else {
if((state_val_61696 === (2))){
var inst_61692 = (state_61695[(2)]);
var inst_61693 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new","new",-2085437848),inst_61692);
var state_61695__$1 = state_61695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61695__$1,inst_61693);
} else {
return null;
}
}
});})(c__7633__auto___61752,___$1))
;
return ((function (switch__7612__auto__,c__7633__auto___61752,___$1){
return (function() {
var acme$core$protein_view_$_state_machine__7613__auto__ = null;
var acme$core$protein_view_$_state_machine__7613__auto____0 = (function (){
var statearr_61700 = [null,null,null,null,null,null,null];
(statearr_61700[(0)] = acme$core$protein_view_$_state_machine__7613__auto__);

(statearr_61700[(1)] = (1));

return statearr_61700;
});
var acme$core$protein_view_$_state_machine__7613__auto____1 = (function (state_61695){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_61695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e61701){if((e61701 instanceof Object)){
var ex__7616__auto__ = e61701;
var statearr_61702_61753 = state_61695;
(statearr_61702_61753[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61754 = state_61695;
state_61695 = G__61754;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$protein_view_$_state_machine__7613__auto__ = function(state_61695){
switch(arguments.length){
case 0:
return acme$core$protein_view_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$protein_view_$_state_machine__7613__auto____1.call(this,state_61695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$protein_view_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$protein_view_$_state_machine__7613__auto____0;
acme$core$protein_view_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$protein_view_$_state_machine__7613__auto____1;
return acme$core$protein_view_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto___61752,___$1))
})();
var state__7635__auto__ = (function (){var statearr_61703 = f__7634__auto__.call(null);
(statearr_61703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto___61752);

return statearr_61703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto___61752,___$1))
);


return acme.core.count_proteins.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"search","search",1564939822)),new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)));
});

acme.core.t_acme$core61687.prototype.om$core$IDidMount$ = true;

acme.core.t_acme$core61687.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events,___$1){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events,___$1){
return (function (state_61734){
var state_val_61735 = (state_61734[(1)]);
if((state_val_61735 === (1))){
var state_61734__$1 = state_61734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61734__$1,(2),events);
} else {
if((state_val_61735 === (2))){
var inst_61705 = (state_61734[(2)]);
var inst_61706 = inst_61705;
var state_61734__$1 = (function (){var statearr_61736 = state_61734;
(statearr_61736[(7)] = inst_61706);

return statearr_61736;
})();
var statearr_61737_61755 = state_61734__$1;
(statearr_61737_61755[(2)] = null);

(statearr_61737_61755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (3))){
var inst_61706 = (state_61734[(7)]);
var inst_61708 = acme.core.log.call(null,"pv");
var inst_61709 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(inst_61706);
var inst_61710 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"start","start",-355208981));
var inst_61711 = inst_61709.call(null,inst_61710);
var inst_61712 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"start","start",-355208981),inst_61711);
var inst_61713 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"search","search",1564939822));
var inst_61714 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"start","start",-355208981));
var inst_61715 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"proteins","proteins",-212247297));
var inst_61716 = acme.core.fetch_proteins.call(null,inst_61713,inst_61714,inst_61715);
var inst_61717 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"proteins","proteins",-212247297));
var state_61734__$1 = (function (){var statearr_61738 = state_61734;
(statearr_61738[(8)] = inst_61716);

(statearr_61738[(9)] = inst_61712);

(statearr_61738[(10)] = inst_61708);

return statearr_61738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61734__$1,(5),inst_61717);
} else {
if((state_val_61735 === (4))){
var inst_61732 = (state_61734[(2)]);
var state_61734__$1 = state_61734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61734__$1,inst_61732);
} else {
if((state_val_61735 === (5))){
var inst_61719 = (state_61734[(2)]);
var inst_61720 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new","new",-2085437848),inst_61719);
var inst_61721 = om.core.get_shared.call(null,self__.owner);
var inst_61722 = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(inst_61721);
var inst_61723 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_61724 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"start","start",-355208981));
var inst_61725 = [new cljs.core.Keyword(null,"pos","pos",-864607220),inst_61724];
var inst_61726 = cljs.core.PersistentHashMap.fromArrays(inst_61723,inst_61725);
var inst_61727 = cljs.core.async.put_BANG_.call(null,inst_61722,inst_61726);
var state_61734__$1 = (function (){var statearr_61739 = state_61734;
(statearr_61739[(11)] = inst_61720);

(statearr_61739[(12)] = inst_61727);

return statearr_61739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61734__$1,(6),events);
} else {
if((state_val_61735 === (6))){
var inst_61729 = (state_61734[(2)]);
var inst_61706 = inst_61729;
var state_61734__$1 = (function (){var statearr_61740 = state_61734;
(statearr_61740[(7)] = inst_61706);

return statearr_61740;
})();
var statearr_61741_61756 = state_61734__$1;
(statearr_61741_61756[(2)] = null);

(statearr_61741_61756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__7633__auto__,events,___$1))
;
return ((function (switch__7612__auto__,c__7633__auto__,events,___$1){
return (function() {
var acme$core$protein_view_$_state_machine__7613__auto__ = null;
var acme$core$protein_view_$_state_machine__7613__auto____0 = (function (){
var statearr_61745 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61745[(0)] = acme$core$protein_view_$_state_machine__7613__auto__);

(statearr_61745[(1)] = (1));

return statearr_61745;
});
var acme$core$protein_view_$_state_machine__7613__auto____1 = (function (state_61734){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_61734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e61746){if((e61746 instanceof Object)){
var ex__7616__auto__ = e61746;
var statearr_61747_61757 = state_61734;
(statearr_61747_61757[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61758 = state_61734;
state_61734 = G__61758;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$protein_view_$_state_machine__7613__auto__ = function(state_61734){
switch(arguments.length){
case 0:
return acme$core$protein_view_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$protein_view_$_state_machine__7613__auto____1.call(this,state_61734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$protein_view_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$protein_view_$_state_machine__7613__auto____0;
acme$core$protein_view_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$protein_view_$_state_machine__7613__auto____1;
return acme$core$protein_view_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events,___$1))
})();
var state__7635__auto__ = (function (){var statearr_61748 = f__7634__auto__.call(null);
(statearr_61748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_61748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events,___$1))
);

return c__7633__auto__;
});

acme.core.t_acme$core61687.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core61687.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__61749){
var self__ = this;
var map__61750 = p__61749;
var map__61750__$1 = ((((!((map__61750 == null)))?((((map__61750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61750):map__61750);
var new$ = cljs.core.get.call(null,map__61750__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,acme.core.protein_list,new$));
});

acme.core.t_acme$core61687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"protein-view","protein-view",-647694776,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta61688","meta61688",-1349499550,null)], null);
});

acme.core.t_acme$core61687.cljs$lang$type = true;

acme.core.t_acme$core61687.cljs$lang$ctorStr = "acme.core/t_acme$core61687";

acme.core.t_acme$core61687.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core61687");
});

acme.core.__GT_t_acme$core61687 = (function acme$core$protein_view_$___GT_t_acme$core61687(protein_view__$1,search__$1,owner__$1,meta61688){
return (new acme.core.t_acme$core61687(protein_view__$1,search__$1,owner__$1,meta61688));
});

}

return (new acme.core.t_acme$core61687(acme$core$protein_view,search,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.home = (function acme$core$home(app,owner){
if(typeof acme.core.t_acme$core61762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core61762 = (function (home,app,owner,meta61763){
this.home = home;
this.app = app;
this.owner = owner;
this.meta61763 = meta61763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core61762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61764,meta61763__$1){
var self__ = this;
var _61764__$1 = this;
return (new acme.core.t_acme$core61762(self__.home,self__.app,self__.owner,meta61763__$1));
});

acme.core.t_acme$core61762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61764){
var self__ = this;
var _61764__$1 = this;
return self__.meta61763;
});

acme.core.t_acme$core61762.prototype.om$core$IRender$ = true;

acme.core.t_acme$core61762.prototype.om$core$IRender$render$arity$1 = (function (this__8317__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
return React.DOM.div({"style": {"clear": "both"}},React.DOM.p(null,"Home"));
});

acme.core.t_acme$core61762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta61763","meta61763",-1657662513,null)], null);
});

acme.core.t_acme$core61762.cljs$lang$type = true;

acme.core.t_acme$core61762.cljs$lang$ctorStr = "acme.core/t_acme$core61762";

acme.core.t_acme$core61762.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core61762");
});

acme.core.__GT_t_acme$core61762 = (function acme$core$home_$___GT_t_acme$core61762(home__$1,app__$1,owner__$1,meta61763){
return (new acme.core.t_acme$core61762(home__$1,app__$1,owner__$1,meta61763));
});

}

return (new acme.core.t_acme$core61762(acme$core$home,app,owner,null));
});
acme.core.app_view = (function acme$core$app_view(app,owner){
if(typeof acme.core.t_acme$core61804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core61804 = (function (app_view,app,owner,meta61805){
this.app_view = app_view;
this.app = app;
this.owner = owner;
this.meta61805 = meta61805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core61804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61806,meta61805__$1){
var self__ = this;
var _61806__$1 = this;
return (new acme.core.t_acme$core61804(self__.app_view,self__.app,self__.owner,meta61805__$1));
});

acme.core.t_acme$core61804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61806){
var self__ = this;
var _61806__$1 = this;
return self__.meta61805;
});

acme.core.t_acme$core61804.prototype.om$core$IInitState$ = true;

acme.core.t_acme$core61804.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

acme.core.t_acme$core61804.prototype.om$core$IDidMount$ = true;

acme.core.t_acme$core61804.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var events = cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.Keyword(null,"view","view",1247994814),cljs.core.async.chan.call(null));
var c__7633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7633__auto__,events,___$1){
return (function (){
var f__7634__auto__ = (function (){var switch__7612__auto__ = ((function (c__7633__auto__,events,___$1){
return (function (state_61823){
var state_val_61824 = (state_61823[(1)]);
if((state_val_61824 === (1))){
var state_61823__$1 = state_61823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61823__$1,(2),events);
} else {
if((state_val_61824 === (2))){
var inst_61808 = (state_61823[(2)]);
var inst_61809 = inst_61808;
var state_61823__$1 = (function (){var statearr_61825 = state_61823;
(statearr_61825[(7)] = inst_61809);

return statearr_61825;
})();
var statearr_61826_61843 = state_61823__$1;
(statearr_61826_61843[(2)] = null);

(statearr_61826_61843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61824 === (3))){
var inst_61809 = (state_61823[(7)]);
var inst_61811 = [cljs.core.str(inst_61809)].join('');
var inst_61812 = acme.core.log.call(null,inst_61811);
var inst_61813 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(inst_61809);
var inst_61814 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),inst_61813);
var inst_61815 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_61809);
var inst_61816 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",-232669377),inst_61815);
var state_61823__$1 = (function (){var statearr_61827 = state_61823;
(statearr_61827[(8)] = inst_61814);

(statearr_61827[(9)] = inst_61816);

(statearr_61827[(10)] = inst_61812);

return statearr_61827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61823__$1,(5),events);
} else {
if((state_val_61824 === (4))){
var inst_61821 = (state_61823[(2)]);
var state_61823__$1 = state_61823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61823__$1,inst_61821);
} else {
if((state_val_61824 === (5))){
var inst_61818 = (state_61823[(2)]);
var inst_61809 = inst_61818;
var state_61823__$1 = (function (){var statearr_61828 = state_61823;
(statearr_61828[(7)] = inst_61809);

return statearr_61828;
})();
var statearr_61829_61844 = state_61823__$1;
(statearr_61829_61844[(2)] = null);

(statearr_61829_61844[(1)] = (3));


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
var statearr_61833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61833[(0)] = acme$core$app_view_$_state_machine__7613__auto__);

(statearr_61833[(1)] = (1));

return statearr_61833;
});
var acme$core$app_view_$_state_machine__7613__auto____1 = (function (state_61823){
while(true){
var ret_value__7614__auto__ = (function (){try{while(true){
var result__7615__auto__ = switch__7612__auto__.call(null,state_61823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7615__auto__;
}
break;
}
}catch (e61834){if((e61834 instanceof Object)){
var ex__7616__auto__ = e61834;
var statearr_61835_61845 = state_61823;
(statearr_61835_61845[(5)] = ex__7616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61846 = state_61823;
state_61823 = G__61846;
continue;
} else {
return ret_value__7614__auto__;
}
break;
}
});
acme$core$app_view_$_state_machine__7613__auto__ = function(state_61823){
switch(arguments.length){
case 0:
return acme$core$app_view_$_state_machine__7613__auto____0.call(this);
case 1:
return acme$core$app_view_$_state_machine__7613__auto____1.call(this,state_61823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
acme$core$app_view_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$0 = acme$core$app_view_$_state_machine__7613__auto____0;
acme$core$app_view_$_state_machine__7613__auto__.cljs$core$IFn$_invoke$arity$1 = acme$core$app_view_$_state_machine__7613__auto____1;
return acme$core$app_view_$_state_machine__7613__auto__;
})()
;})(switch__7612__auto__,c__7633__auto__,events,___$1))
})();
var state__7635__auto__ = (function (){var statearr_61836 = f__7634__auto__.call(null);
(statearr_61836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7633__auto__);

return statearr_61836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7635__auto__);
});})(c__7633__auto__,events,___$1))
);

return c__7633__auto__;
});

acme.core.t_acme$core61804.prototype.om$core$IRenderState$ = true;

acme.core.t_acme$core61804.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__61837){
var self__ = this;
var map__61838 = p__61837;
var map__61838__$1 = ((((!((map__61838 == null)))?((((map__61838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61838):map__61838);
var view = cljs.core.get.call(null,map__61838__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var data = cljs.core.get.call(null,map__61838__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var ___$1 = this;
return React.DOM.div(null,(function (){var pred__61840 = cljs.core._EQ_;
var expr__61841 = view;
if(cljs.core.truth_(pred__61840.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__61841))){
return om.core.build.call(null,acme.core.home,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.truth_(pred__61840.call(null,new cljs.core.Keyword(null,"proteins","proteins",-212247297),expr__61841))){
return om.core.build.call(null,acme.core.protein_view,data);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__61841)].join('')));
}
}
})());
});

acme.core.t_acme$core61804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta61805","meta61805",993854581,null)], null);
});

acme.core.t_acme$core61804.cljs$lang$type = true;

acme.core.t_acme$core61804.cljs$lang$ctorStr = "acme.core/t_acme$core61804";

acme.core.t_acme$core61804.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core61804");
});

acme.core.__GT_t_acme$core61804 = (function acme$core$app_view_$___GT_t_acme$core61804(app_view__$1,app__$1,owner__$1,meta61805){
return (new acme.core.t_acme$core61804(app_view__$1,app__$1,owner__$1,meta61805));
});

}

return (new acme.core.t_acme$core61804(acme$core$app_view,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
acme.core.outer = (function acme$core$outer(app,owner){
if(typeof acme.core.t_acme$core61850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
acme.core.t_acme$core61850 = (function (outer,app,owner,meta61851){
this.outer = outer;
this.app = app;
this.owner = owner;
this.meta61851 = meta61851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
acme.core.t_acme$core61850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61852,meta61851__$1){
var self__ = this;
var _61852__$1 = this;
return (new acme.core.t_acme$core61850(self__.outer,self__.app,self__.owner,meta61851__$1));
});

acme.core.t_acme$core61850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61852){
var self__ = this;
var _61852__$1 = this;
return self__.meta61851;
});

acme.core.t_acme$core61850.prototype.om$core$IRender$ = true;

acme.core.t_acme$core61850.prototype.om$core$IRender$render$arity$1 = (function (this__8317__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
return React.DOM.div(null,React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"search"], null),om.core.build.call(null,acme.core.search,cljs.core.PersistentArrayMap.EMPTY)),React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"data"], null),om.core.build.call(null,acme.core.app_view,self__.app)));
});

acme.core.t_acme$core61850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"outer","outer",1265345571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta61851","meta61851",1594390970,null)], null);
});

acme.core.t_acme$core61850.cljs$lang$type = true;

acme.core.t_acme$core61850.cljs$lang$ctorStr = "acme.core/t_acme$core61850";

acme.core.t_acme$core61850.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"acme.core/t_acme$core61850");
});

acme.core.__GT_t_acme$core61850 = (function acme$core$outer_$___GT_t_acme$core61850(outer__$1,app__$1,owner__$1,meta61851){
return (new acme.core.t_acme$core61850(outer__$1,app__$1,owner__$1,meta61851));
});

}

return (new acme.core.t_acme$core61850(acme$core$outer,app,owner,null));
});
acme.core.main = (function acme$core$main(){
var req_chan = cljs.core.async.chan.call(null);
var pub_chan = cljs.core.async.chan.call(null);
var notif_chan = cljs.core.async.pub.call(null,pub_chan,new cljs.core.Keyword(null,"topic","topic",-1960480691));
return om.core.root.call(null,acme.core.outer,acme.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"req-chan","req-chan",-35924046),req_chan,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026),notif_chan,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593),pub_chan], null),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("t")], null));
});
acme.core.main.call(null);

//# sourceMappingURL=core.js.map