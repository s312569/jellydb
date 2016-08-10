// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266 = (function (fn_handler,f,meta36267){
this.fn_handler = fn_handler;
this.f = f;
this.meta36267 = meta36267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36268,meta36267__$1){
var self__ = this;
var _36268__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266(self__.fn_handler,self__.f,meta36267__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36268){
var self__ = this;
var _36268__$1 = this;
return self__.meta36267;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta36267","meta36267",302462656,null)], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers36266";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266.cljs$lang$ctorPrWriter = (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers36266");
});

cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers36266 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers36266(fn_handler__$1,f__$1,meta36267){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266(fn_handler__$1,f__$1,meta36267));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers36266(cljs$core$async$impl$ioc_helpers$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e36270){if((e36270 instanceof Object)){
var ex = e36270;
cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));

throw ex;
} else {
throw e36270;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4655__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){
var statearr_36273_36275 = state;
(statearr_36273_36275[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_36273_36275[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_36274_36276 = state;
(statearr_36274_36276[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));

(statearr_36274_36276[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){
var statearr_36279_36281 = state;
(statearr_36279_36281[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_36279_36281[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_36280_36282 = state;
(statearr_36280_36282[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));

(statearr_36280_36282[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){
return null;
});})(c))
));
}

cljs.core.async.impl.protocols.close_BANG_.call(null,c);

return c;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30630__auto__,k__30631__auto__){
var self__ = this;
var this__30630__auto____$1 = this;
return cljs.core._lookup.call(null,this__30630__auto____$1,k__30631__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30632__auto__,k36284,else__30633__auto__){
var self__ = this;
var this__30632__auto____$1 = this;
var G__36286 = (((k36284 instanceof cljs.core.Keyword))?k36284.fqn:null);
switch (G__36286) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36284,else__30633__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30644__auto__,writer__30645__auto__,opts__30646__auto__){
var self__ = this;
var this__30644__auto____$1 = this;
var pr_pair__30647__auto__ = ((function (this__30644__auto____$1){
return (function (keyval__30648__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30645__auto__,cljs.core.pr_writer,""," ","",opts__30646__auto__,keyval__30648__auto__);
});})(this__30644__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30645__auto__,pr_pair__30647__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__30646__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$ = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36283){
var self__ = this;
var G__36283__$1 = this;
return (new cljs.core.RecordIter((0),G__36283__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30628__auto__){
var self__ = this;
var this__30628__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30624__auto__){
var self__ = this;
var this__30624__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30634__auto__){
var self__ = this;
var this__30634__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30625__auto__){
var self__ = this;
var this__30625__auto____$1 = this;
var h__30443__auto__ = self__.__hash;
if(!((h__30443__auto__ == null))){
return h__30443__auto__;
} else {
var h__30443__auto____$1 = cljs.core.hash_imap.call(null,this__30625__auto____$1);
self__.__hash = h__30443__auto____$1;

return h__30443__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30626__auto__,other__30627__auto__){
var self__ = this;
var this__30626__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29996__auto__ = other__30627__auto__;
if(cljs.core.truth_(and__29996__auto__)){
var and__29996__auto____$1 = (this__30626__auto____$1.constructor === other__30627__auto__.constructor);
if(and__29996__auto____$1){
return cljs.core.equiv_map.call(null,this__30626__auto____$1,other__30627__auto__);
} else {
return and__29996__auto____$1;
}
} else {
return and__29996__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30639__auto__,k__30640__auto__){
var self__ = this;
var this__30639__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__30640__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30639__auto____$1),self__.__meta),k__30640__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30640__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30637__auto__,k__30638__auto__,G__36283){
var self__ = this;
var this__30637__auto____$1 = this;
var pred__36287 = cljs.core.keyword_identical_QMARK_;
var expr__36288 = k__30638__auto__;
if(cljs.core.truth_(pred__36287.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),expr__36288))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__36283,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36287.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),expr__36288))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__36283,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36287.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),expr__36288))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__36283,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36287.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),expr__36288))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__36283,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36287.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226),expr__36288))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__36283,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30638__auto__,G__36283),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30642__auto__){
var self__ = this;
var this__30642__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30629__auto__,G__36283){
var self__ = this;
var this__30629__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__36283,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30635__auto__,entry__30636__auto__){
var self__ = this;
var this__30635__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30636__auto__)){
return cljs.core._assoc.call(null,this__30635__auto____$1,cljs.core._nth.call(null,entry__30636__auto__,(0)),cljs.core._nth.call(null,entry__30636__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30635__auto____$1,entry__30636__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Class","Class",2064526977,null)], null)),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__30664__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__30664__auto__,writer__30665__auto__){
return cljs.core._write.call(null,writer__30665__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__36285){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__36285),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__36285),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__36285),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__36285),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__36285),null,cljs.core.dissoc.call(null,G__36285,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_36292 = state;
(statearr_36292[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_36292;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__29996__auto__ = exception;
if(cljs.core.truth_(and__29996__auto__)){
return cljs.core.not.call(null,exception_frame);
} else {
return and__29996__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__29996__auto__ = exception;
if(cljs.core.truth_(and__29996__auto__)){
var and__29996__auto____$1 = catch_block;
if(cljs.core.truth_(and__29996__auto____$1)){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),catch_exception)) || ((exception instanceof catch_exception));
} else {
return and__29996__auto____$1;
}
} else {
return and__29996__auto__;
}
})())){
var statearr_36298 = state;
(statearr_36298[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_36298[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_36298[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_36298[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null));

return statearr_36298;
} else {
if(cljs.core.truth_((function (){var and__29996__auto__ = exception;
if(cljs.core.truth_(and__29996__auto__)){
return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__29996__auto__;
}
})())){
var statearr_36299_36303 = state;
(statearr_36299_36303[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__36304 = state;
state = G__36304;
continue;
} else {
if(cljs.core.truth_((function (){var and__29996__auto__ = exception;
if(cljs.core.truth_(and__29996__auto__)){
var and__29996__auto____$1 = cljs.core.not.call(null,catch_block);
if(and__29996__auto____$1){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__29996__auto____$1;
}
} else {
return and__29996__auto__;
}
})())){
var statearr_36300 = state;
(statearr_36300[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_36300[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_36300;
} else {
if(cljs.core.truth_((function (){var and__29996__auto__ = cljs.core.not.call(null,exception);
if(and__29996__auto__){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__29996__auto__;
}
})())){
var statearr_36301 = state;
(statearr_36301[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_36301[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_36301;
} else {
if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_36302 = state;
(statearr_36302[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_36302[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_36302;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=ioc_helpers.js.map?rel=1470795669854