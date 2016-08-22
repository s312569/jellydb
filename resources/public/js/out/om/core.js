// Compiled by ClojureScript 1.9.93 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_state_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.display_name[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core.display_name["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.init_state[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core.init_state["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.should_update[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,next_props,next_state);
} else {
var m__31525__auto____$1 = (om.core.should_update["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.will_mount[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core.will_mount["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.did_mount[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core.did_mount["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.will_unmount[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.will_update[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,next_props,next_state);
} else {
var m__31525__auto____$1 = (om.core.will_update["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.did_update[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__31525__auto____$1 = (om.core.did_update["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.will_receive_props[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,next_props);
} else {
var m__31525__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.render[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core.render["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core.render_state[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,state);
} else {
var m__31525__auto____$1 = (om.core.render_state["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__31525__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args33499 = [];
var len__31936__auto___33502 = arguments.length;
var i__31937__auto___33503 = (0);
while(true){
if((i__31937__auto___33503 < len__31936__auto___33502)){
args33499.push((arguments[i__31937__auto___33503]));

var G__33504 = (i__31937__auto___33503 + (1));
i__31937__auto___33503 = G__33504;
continue;
} else {
}
break;
}

var G__33501 = args33499.length;
switch (G__33501) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33499.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._get_state[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core._get_state["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._get_state[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,ks);
} else {
var m__31525__auto____$1 = (om.core._get_state["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args33506 = [];
var len__31936__auto___33509 = arguments.length;
var i__31937__auto___33510 = (0);
while(true){
if((i__31937__auto___33510 < len__31936__auto___33509)){
args33506.push((arguments[i__31937__auto___33510]));

var G__33511 = (i__31937__auto___33510 + (1));
i__31937__auto___33510 = G__33511;
continue;
} else {
}
break;
}

var G__33508 = args33506.length;
switch (G__33508) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33506.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._get_render_state[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._get_render_state[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,ks);
} else {
var m__31525__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args33513 = [];
var len__31936__auto___33516 = arguments.length;
var i__31937__auto___33517 = (0);
while(true){
if((i__31937__auto___33517 < len__31936__auto___33516)){
args33513.push((arguments[i__31937__auto___33517]));

var G__33518 = (i__31937__auto___33517 + (1));
i__31937__auto___33517 = G__33518;
continue;
} else {
}
break;
}

var G__33515 = args33513.length;
switch (G__33515) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33513.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,val,render);
} else {
var m__31525__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,ks,val,render);
} else {
var m__31525__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._get_queue[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core._get_queue["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$,c);
} else {
var m__31525__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__31524__auto__ = (((this$ == null))?null:this$);
var m__31525__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,this$);
} else {
var m__31525__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__31524__auto__ = (((x == null))?null:x);
var m__31525__auto__ = (om.core._value[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,x);
} else {
var m__31525__auto____$1 = (om.core._value["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__31524__auto__ = (((cursor == null))?null:cursor);
var m__31525__auto__ = (om.core._path[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,cursor);
} else {
var m__31525__auto____$1 = (om.core._path["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__31524__auto__ = (((cursor == null))?null:cursor);
var m__31525__auto__ = (om.core._state[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,cursor);
} else {
var m__31525__auto____$1 = (om.core._state["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args33520 = [];
var len__31936__auto___33523 = arguments.length;
var i__31937__auto___33524 = (0);
while(true){
if((i__31937__auto___33524 < len__31936__auto___33523)){
args33520.push((arguments[i__31937__auto___33524]));

var G__33525 = (i__31937__auto___33524 + (1));
i__31937__auto___33524 = G__33525;
continue;
} else {
}
break;
}

var G__33522 = args33520.length;
switch (G__33522) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33520.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__31524__auto__ = (((value == null))?null:value);
var m__31525__auto__ = (om.core._to_cursor[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,value,state);
} else {
var m__31525__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__31524__auto__ = (((value == null))?null:value);
var m__31525__auto__ = (om.core._to_cursor[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,value,state,path);
} else {
var m__31525__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__31524__auto__ = (((cursor == null))?null:cursor);
var m__31525__auto__ = (om.core._derive[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,cursor,derived,state,path);
} else {
var m__31525__auto____$1 = (om.core._derive["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__31524__auto__ = (((cursor == null))?null:cursor);
var m__31525__auto__ = (om.core._transact_BANG_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,cursor,korks,f,tag);
} else {
var m__31525__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__31524__auto__ = (((x == null))?null:x);
var m__31525__auto__ = (om.core._listen_BANG_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,x,key,tx_listen);
} else {
var m__31525__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__31524__auto__ = (((x == null))?null:x);
var m__31525__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,x,key);
} else {
var m__31525__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__31524__auto__ = (((x == null))?null:x);
var m__31525__auto__ = (om.core._notify_BANG_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__31525__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.fn_QMARK_.call(null,c)){
return node.props.children = (function (){var _STAR_read_enabled_STAR_33532 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return c.call(null,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33532;
}})();
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(x){
return (x.props["__om_cursor"]);
});
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args33533 = [];
var len__31936__auto___33536 = arguments.length;
var i__31937__auto___33537 = (0);
while(true){
if((i__31937__auto___33537 < len__31936__auto___33536)){
args33533.push((arguments[i__31937__auto___33537]));

var G__33538 = (i__31937__auto___33537 + (1));
i__31937__auto___33537 = G__33538;
continue;
} else {
}
break;
}

var G__33535 = args33533.length;
switch (G__33535) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33533.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args33540 = [];
var len__31936__auto___33543 = arguments.length;
var i__31937__auto___33544 = (0);
while(true){
if((i__31937__auto___33544 < len__31936__auto___33543)){
args33540.push((arguments[i__31937__auto___33544]));

var G__33545 = (i__31937__auto___33544 + (1));
i__31937__auto___33544 = G__33545;
continue;
} else {
}
break;
}

var G__33542 = args33540.length;
switch (G__33542) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33540.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__33548 = state;
(G__33548["__om_prev_state"] = (state["__om_state"]));

(G__33548["__om_state"] = pending_state);

(G__33548["__om_pending_state"] = null);

return G__33548;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args33549 = [];
var len__31936__auto___33552 = arguments.length;
var i__31937__auto___33553 = (0);
while(true){
if((i__31937__auto___33553 < len__31936__auto___33552)){
args33549.push((arguments[i__31937__auto___33553]));

var G__33554 = (i__31937__auto___33553 + (1));
i__31937__auto___33553 = G__33554;
continue;
} else {
}
break;
}

var G__33551 = args33549.length;
switch (G__33551) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33549.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__30861__auto__ = props;
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__30861__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_33583 = this$.state;
var _STAR_read_enabled_STAR_33557_33584 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__30861__auto__ = (state_33583["__om_prev_state"]);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return (state_33583["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33557_33584;
}} else {
}

return (this$.state["__om_prev_state"] = null);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
var _STAR_read_enabled_STAR_33559 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33559;
}} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
var _STAR_read_enabled_STAR_33561 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33561;
}} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var _STAR_read_enabled_STAR_33562 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__30849__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__30849__auto__)){
var and__30849__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__30849__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__30849__auto____$1;
}
} else {
return and__30849__auto__;
}
})())){
return true;
} else {
if(!(((state["__om_pending_state"]) == null))){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33562;
}}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_read_enabled_STAR_33564 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
var _STAR_parent_STAR_33566 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_33567 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_33568 = om.core._STAR_instrument_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

try{return om.core.render.call(null,c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_33568;

om.core._STAR_state_STAR_ = _STAR_state_STAR_33567;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_33566;
}} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
var _STAR_parent_STAR_33570 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_33571 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_33572 = om.core._STAR_instrument_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

try{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_33572;

om.core._STAR_state_STAR_ = _STAR_state_STAR_33571;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_33570;
}} else {
return c;

}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33564;
}}),(function (next_props,next_state){
var this$ = this;
var c_33585 = om.core.children.call(null,this$);
if(((!((c_33585 == null)))?(((false) || (c_33585.om$core$IWillUpdate$))?true:(((!c_33585.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_33585):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_33585))){
var state_33586 = this$.state;
var _STAR_read_enabled_STAR_33574_33587 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{om.core.will_update.call(null,c_33585,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33574_33587;
}} else {
}

return om.core.merge_pending_state.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__30861__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__30861__auto__ = id;
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?(function (){var _STAR_read_enabled_STAR_33576 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33576;
}})():null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
var _STAR_read_enabled_STAR_33578 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.did_mount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33578;
}} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
var _STAR_read_enabled_STAR_33580 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.display_name.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33580;
}} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_33588 = om.core.children.call(null,this$);
if(((!((c_33588 == null)))?(((false) || (c_33588.om$core$IWillMount$))?true:(((!c_33588.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_33588):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_33588))){
var _STAR_read_enabled_STAR_33582_33589 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{om.core.will_mount.call(null,c_33588);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33582_33589;
}} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x33593 = obj;
x33593.om$core$ISetState$ = true;

x33593.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x33593){
return (function (this$,val,render){
var this$__$1 = this;
var _STAR_read_enabled_STAR_33594 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__30849__auto__ = !((app_state == null));
if(and__30849__auto__){
return render;
} else {
return and__30849__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33594;
}});})(x33593))
;

x33593.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x33593){
return (function (this$,ks,val,render){
var this$__$1 = this;
var _STAR_read_enabled_STAR_33595 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__30849__auto__ = !((app_state == null));
if(and__30849__auto__){
return render;
} else {
return and__30849__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33595;
}});})(x33593))
;

x33593.om$core$IGetRenderState$ = true;

x33593.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x33593){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x33593))
;

x33593.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x33593){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x33593))
;

x33593.om$core$IGetState$ = true;

x33593.om$core$IGetState$_get_state$arity$1 = ((function (x33593){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__30861__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return (state["__om_state"]);
}
});})(x33593))
;

x33593.om$core$IGetState$_get_state$arity$2 = ((function (x33593){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x33593))
;

return x33593;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
var v = cljs.core._lookup.call(null,self__.value,k,not_found);
if(!(cljs.core._EQ_.call(null,v,not_found))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.meta.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._count.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.hash.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__33597){
var vec__33598 = p__33597;
var k = cljs.core.nth.call(null,vec__33598,(0),null);
var v = cljs.core.nth.call(null,vec__33598,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.call = (function() {
var G__33601 = null;
var G__33601__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__33601__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__33601 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__33601__2.call(this,self__,k);
case 3:
return G__33601__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33601.cljs$core$IFn$_invoke$arity$2 = G__33601__2;
G__33601.cljs$core$IFn$_invoke$arity$3 = G__33601__3;
return G__33601;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args33596){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33596)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(om.core._STAR_read_enabled_STAR_)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else {
throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._nth.call(null,this$__$1,n,null);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._nth.call(null,this$__$1,n,not_found);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.meta.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._count.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.hash.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.call = (function() {
var G__33603 = null;
var G__33603__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__33603__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__33603 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__33603__2.call(this,self__,k);
case 3:
return G__33603__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33603.cljs$core$IFn$_invoke$arity$2 = G__33603__2;
G__33603.cljs$core$IFn$_invoke$arity$3 = G__33603__3;
return G__33603;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args33602){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33602)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(om.core._STAR_read_enabled_STAR_)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else {
throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x33605 = cljs.core.clone.call(null,val);
x33605.cljs$core$IDeref$ = true;

x33605.cljs$core$IDeref$_deref$arity$1 = ((function (x33605){
return (function (this$){
var this$__$1 = this;
if(!(om.core._STAR_read_enabled_STAR_)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path);
} else {
throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});})(x33605))
;

x33605.om$core$ICursor$ = true;

x33605.om$core$ICursor$_path$arity$1 = ((function (x33605){
return (function (_){
var ___$1 = this;
return path;
});})(x33605))
;

x33605.om$core$ICursor$_state$arity$1 = ((function (x33605){
return (function (_){
var ___$1 = this;
return state;
});})(x33605))
;

x33605.om$core$ITransact$ = true;

x33605.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x33605){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x33605))
;

x33605.cljs$core$IEquiv$ = true;

x33605.cljs$core$IEquiv$_equiv$arity$2 = ((function (x33605){
return (function (_,other){
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});})(x33605))
;

return x33605;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args33606 = [];
var len__31936__auto___33611 = arguments.length;
var i__31937__auto___33612 = (0);
while(true){
if((i__31937__auto___33612 < len__31936__auto___33611)){
args33606.push((arguments[i__31937__auto___33612]));

var G__33613 = (i__31937__auto___33612 + (1));
i__31937__auto___33612 = G__33613;
continue;
} else {
}
break;
}

var G__33608 = args33606.length;
switch (G__33608) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33606.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function om$core$render_all(){
om.core.refresh_queued = false;

var seq__33619 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__33620 = null;
var count__33621 = (0);
var i__33622 = (0);
while(true){
if((i__33622 < count__33621)){
var f = cljs.core._nth.call(null,chunk__33620,i__33622);
f.call(null);

var G__33623 = seq__33619;
var G__33624 = chunk__33620;
var G__33625 = count__33621;
var G__33626 = (i__33622 + (1));
seq__33619 = G__33623;
chunk__33620 = G__33624;
count__33621 = G__33625;
i__33622 = G__33626;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33619);
if(temp__4657__auto__){
var seq__33619__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33619__$1)){
var c__31672__auto__ = cljs.core.chunk_first.call(null,seq__33619__$1);
var G__33627 = cljs.core.chunk_rest.call(null,seq__33619__$1);
var G__33628 = c__31672__auto__;
var G__33629 = cljs.core.count.call(null,c__31672__auto__);
var G__33630 = (0);
seq__33619 = G__33627;
chunk__33620 = G__33628;
count__33621 = G__33629;
i__33622 = G__33630;
continue;
} else {
var f = cljs.core.first.call(null,seq__33619__$1);
f.call(null);

var G__33631 = cljs.core.next.call(null,seq__33619__$1);
var G__33632 = null;
var G__33633 = (0);
var G__33634 = (0);
seq__33619 = G__33631;
chunk__33620 = G__33632;
count__33621 = G__33633;
i__33622 = G__33634;
continue;
}
} else {
return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__30861__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__30861__auto__){
return or__30861__auto__;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args33641 = [];
var len__31936__auto___33644 = arguments.length;
var i__31937__auto___33645 = (0);
while(true){
if((i__31937__auto___33645 < len__31936__auto___33644)){
args33641.push((arguments[i__31937__auto___33645]));

var G__33646 = (i__31937__auto___33645 + (1));
i__31937__auto___33645 = G__33646;
continue;
} else {
}
break;
}

var G__33643 = args33641.length;
switch (G__33643) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33641.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createClass((function (){var or__30861__auto__ = descriptor;
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return om.core.pure_descriptor;
}
})()));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args33648 = [];
var len__31936__auto___33656 = arguments.length;
var i__31937__auto___33657 = (0);
while(true){
if((i__31937__auto___33657 < len__31936__auto___33656)){
args33648.push((arguments[i__31937__auto___33657]));

var G__33658 = (i__31937__auto___33657 + (1));
i__31937__auto___33657 = G__33658;
continue;
} else {
}
break;
}

var G__33650 = args33648.length;
switch (G__33650) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33648.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.truth_(om.core.valid_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str("(valid? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,f);
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_app_state": om.core._STAR_state_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var _STAR_read_enabled_STAR_33651 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33651;
}});})(shared,ctor))
});
} else {
var map__33652 = m;
var map__33652__$1 = ((((!((map__33652 == null)))?((((map__33652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33652):map__33652);
var key = cljs.core.get.call(null,map__33652__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state = cljs.core.get.call(null,map__33652__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__33652__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__33652__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348)));
var shared = (function (){var or__30861__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,f,new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__33652,map__33652__$1,key,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var _STAR_read_enabled_STAR_33654 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33654;
}});})(map__33652,map__33652__$1,key,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__33652,map__33652__$1,key,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var _STAR_read_enabled_STAR_33655 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33655;
}});})(map__33652,map__33652__$1,key,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a cursor, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument will be
 * the cursor and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * cursor - an ICursor instance
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets cursor
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args33660 = [];
var len__31936__auto___33664 = arguments.length;
var i__31937__auto___33665 = (0);
while(true){
if((i__31937__auto___33665 < len__31936__auto___33664)){
args33660.push((arguments[i__31937__auto___33665]));

var G__33666 = (i__31937__auto___33665 + (1));
i__31937__auto___33665 = G__33666;
continue;
} else {
}
break;
}

var G__33662 = args33660.length;
switch (G__33662) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33660.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build.call(null,f,cursor,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var _STAR_read_enabled_STAR_33663 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core._STAR_instrument_STAR_.call(null,f,cursor,m);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_33663;
}})();
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,cursor,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,cursor,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of cursors, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args33668 = [];
var len__31936__auto___33671 = arguments.length;
var i__31937__auto___33672 = (0);
while(true){
if((i__31937__auto___33672 < len__31936__auto___33671)){
args33668.push((arguments[i__31937__auto___33672]));

var G__33673 = (i__31937__auto___33672 + (1));
i__31937__auto___33672 = G__33673;
continue;
} else {
}
break;
}

var G__33670 = args33668.length;
switch (G__33670) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33668.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var listeners_33699 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_33700 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x33688_33701 = state;
x33688_33701.om$core$INotify$ = true;

x33688_33701.om$core$INotify$_listen_BANG_$arity$3 = ((function (x33688_33701,listeners_33699,render_queue_33700){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_33699,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x33688_33701,listeners_33699,render_queue_33700))
;

x33688_33701.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x33688_33701,listeners_33699,render_queue_33700){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_33699,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x33688_33701,listeners_33699,render_queue_33700))
;

x33688_33701.om$core$INotify$_notify_BANG_$arity$3 = ((function (x33688_33701,listeners_33699,render_queue_33700){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__33689_33702 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_33699));
var chunk__33690_33703 = null;
var count__33691_33704 = (0);
var i__33692_33705 = (0);
while(true){
if((i__33692_33705 < count__33691_33704)){
var vec__33693_33706 = cljs.core._nth.call(null,chunk__33690_33703,i__33692_33705);
var __33707 = cljs.core.nth.call(null,vec__33693_33706,(0),null);
var f_33708 = cljs.core.nth.call(null,vec__33693_33706,(1),null);
f_33708.call(null,tx_data,root_cursor);

var G__33709 = seq__33689_33702;
var G__33710 = chunk__33690_33703;
var G__33711 = count__33691_33704;
var G__33712 = (i__33692_33705 + (1));
seq__33689_33702 = G__33709;
chunk__33690_33703 = G__33710;
count__33691_33704 = G__33711;
i__33692_33705 = G__33712;
continue;
} else {
var temp__4657__auto___33713 = cljs.core.seq.call(null,seq__33689_33702);
if(temp__4657__auto___33713){
var seq__33689_33714__$1 = temp__4657__auto___33713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33689_33714__$1)){
var c__31672__auto___33715 = cljs.core.chunk_first.call(null,seq__33689_33714__$1);
var G__33716 = cljs.core.chunk_rest.call(null,seq__33689_33714__$1);
var G__33717 = c__31672__auto___33715;
var G__33718 = cljs.core.count.call(null,c__31672__auto___33715);
var G__33719 = (0);
seq__33689_33702 = G__33716;
chunk__33690_33703 = G__33717;
count__33691_33704 = G__33718;
i__33692_33705 = G__33719;
continue;
} else {
var vec__33696_33720 = cljs.core.first.call(null,seq__33689_33714__$1);
var __33721 = cljs.core.nth.call(null,vec__33696_33720,(0),null);
var f_33722 = cljs.core.nth.call(null,vec__33696_33720,(1),null);
f_33722.call(null,tx_data,root_cursor);

var G__33723 = cljs.core.next.call(null,seq__33689_33714__$1);
var G__33724 = null;
var G__33725 = (0);
var G__33726 = (0);
seq__33689_33702 = G__33723;
chunk__33690_33703 = G__33724;
count__33691_33704 = G__33725;
i__33692_33705 = G__33726;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x33688_33701,listeners_33699,render_queue_33700))
;

x33688_33701.om$core$IRenderQueue$ = true;

x33688_33701.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x33688_33701,listeners_33699,render_queue_33700){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_33700);
});})(x33688_33701,listeners_33699,render_queue_33700))
;

x33688_33701.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x33688_33701,listeners_33699,render_queue_33700){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_33700),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_33700,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x33688_33701,listeners_33699,render_queue_33700))
;

x33688_33701.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x33688_33701,listeners_33699,render_queue_33700){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_33700,cljs.core.empty);
});})(x33688_33701,listeners_33699,render_queue_33700))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__33727){
var map__33743 = p__33727;
var map__33743__$1 = ((((!((map__33743 == null)))?((((map__33743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33743):map__33743);
var options = map__33743__$1;
var target = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__33758 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__33758,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__33758,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168));
var rootf = ((function (watch_key,state,state__$1,m,map__33743,map__33743__$1,options,target,tx_listen,path,instrument){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = (((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path));
om.dom.render.call(null,(function (){var _STAR_instrument_STAR_33752 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_33753 = om.core._STAR_state_STAR_;
om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_33753;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_33752;
}})(),target);

var queue = om.core._get_queue.call(null,state__$1);
if(cljs.core.empty_QMARK_.call(null,queue)){
return null;
} else {
var seq__33754_33759 = cljs.core.seq.call(null,queue);
var chunk__33755_33760 = null;
var count__33756_33761 = (0);
var i__33757_33762 = (0);
while(true){
if((i__33757_33762 < count__33756_33761)){
var c_33763 = cljs.core._nth.call(null,chunk__33755_33760,i__33757_33762);
if(cljs.core.truth_(c_33763.isMounted())){
c_33763.forceUpdate();
} else {
}

var G__33764 = seq__33754_33759;
var G__33765 = chunk__33755_33760;
var G__33766 = count__33756_33761;
var G__33767 = (i__33757_33762 + (1));
seq__33754_33759 = G__33764;
chunk__33755_33760 = G__33765;
count__33756_33761 = G__33766;
i__33757_33762 = G__33767;
continue;
} else {
var temp__4657__auto___33768 = cljs.core.seq.call(null,seq__33754_33759);
if(temp__4657__auto___33768){
var seq__33754_33769__$1 = temp__4657__auto___33768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33754_33769__$1)){
var c__31672__auto___33770 = cljs.core.chunk_first.call(null,seq__33754_33769__$1);
var G__33771 = cljs.core.chunk_rest.call(null,seq__33754_33769__$1);
var G__33772 = c__31672__auto___33770;
var G__33773 = cljs.core.count.call(null,c__31672__auto___33770);
var G__33774 = (0);
seq__33754_33759 = G__33771;
chunk__33755_33760 = G__33772;
count__33756_33761 = G__33773;
i__33757_33762 = G__33774;
continue;
} else {
var c_33775 = cljs.core.first.call(null,seq__33754_33769__$1);
if(cljs.core.truth_(c_33775.isMounted())){
c_33775.forceUpdate();
} else {
}

var G__33776 = cljs.core.next.call(null,seq__33754_33769__$1);
var G__33777 = null;
var G__33778 = (0);
var G__33779 = (0);
seq__33754_33759 = G__33776;
chunk__33755_33760 = G__33777;
count__33756_33761 = G__33778;
i__33757_33762 = G__33779;
continue;
}
} else {
}
}
break;
}

return om.core._empty_queue_BANG_.call(null,state__$1);
}
});})(watch_key,state,state__$1,m,map__33743,map__33743__$1,options,target,tx_listen,path,instrument))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__33743,map__33743__$1,options,target,tx_listen,path,instrument){
return (function (_,___$1,___$2,___$3){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(typeof requestAnimationFrame !== 'undefined'){
return requestAnimationFrame(om.core.render_all);
} else {
return setTimeout(om.core.render_all,(16));
}
}
});})(watch_key,state,state__$1,m,rootf,map__33743,map__33743__$1,options,target,tx_listen,path,instrument))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__33743,map__33743__$1,options,target,tx_listen,path,instrument){
return (function (){
cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,m,rootf,map__33743,map__33743__$1,options,target,tx_listen,path,instrument))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null);
} else {
return null;
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args33780 = [];
var len__31936__auto___33783 = arguments.length;
var i__31937__auto___33784 = (0);
while(true){
if((i__31937__auto___33784 < len__31936__auto___33783)){
args33780.push((arguments[i__31937__auto___33784]));

var G__33785 = (i__31937__auto___33784 + (1));
i__31937__auto___33784 = G__33785;
continue;
} else {
}
break;
}

var G__33782 = args33780.length;
switch (G__33782) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33780.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args33787 = [];
var len__31936__auto___33790 = arguments.length;
var i__31937__auto___33791 = (0);
while(true){
if((i__31937__auto___33791 < len__31936__auto___33790)){
args33787.push((arguments[i__31937__auto___33791]));

var G__33792 = (i__31937__auto___33791 + (1));
i__31937__auto___33791 = G__33792;
continue;
} else {
}
break;
}

var G__33789 = args33787.length;
switch (G__33789) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33787.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * A helper function to get at React refs. Given a owning pure node
 *   extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args33794 = [];
var len__31936__auto___33797 = arguments.length;
var i__31937__auto___33798 = (0);
while(true){
if((i__31937__auto___33798 < len__31936__auto___33797)){
args33794.push((arguments[i__31937__auto___33798]));

var G__33799 = (i__31937__auto___33798 + (1));
i__31937__auto___33798 = G__33799;
continue;
} else {
}
break;
}

var G__33796 = args33794.length;
switch (G__33796) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33794.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
var temp__4657__auto__ = owner.refs;
if(cljs.core.truth_(temp__4657__auto__)){
var refs = temp__4657__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args33801 = [];
var len__31936__auto___33804 = arguments.length;
var i__31937__auto___33805 = (0);
while(true){
if((i__31937__auto___33805 < len__31936__auto___33804)){
args33801.push((arguments[i__31937__auto___33805]));

var G__33806 = (i__31937__auto___33805 + (1));
i__31937__auto___33805 = G__33806;
continue;
} else {
}
break;
}

var G__33803 = args33801.length;
switch (G__33803) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33801.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args33808 = [];
var len__31936__auto___33811 = arguments.length;
var i__31937__auto___33812 = (0);
while(true){
if((i__31937__auto___33812 < len__31936__auto___33811)){
args33808.push((arguments[i__31937__auto___33812]));

var G__33813 = (i__31937__auto___33812 + (1));
i__31937__auto___33812 = G__33813;
continue;
} else {
}
break;
}

var G__33810 = args33808.length;
switch (G__33810) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33808.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args33815 = [];
var len__31936__auto___33818 = arguments.length;
var i__31937__auto___33819 = (0);
while(true){
if((i__31937__auto___33819 < len__31936__auto___33818)){
args33815.push((arguments[i__31937__auto___33819]));

var G__33820 = (i__31937__auto___33819 + (1));
i__31937__auto___33819 = G__33820;
continue;
} else {
}
break;
}

var G__33817 = args33815.length;
switch (G__33817) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33815.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args33822 = [];
var len__31936__auto___33825 = arguments.length;
var i__31937__auto___33826 = (0);
while(true){
if((i__31937__auto___33826 < len__31936__auto___33825)){
args33822.push((arguments[i__31937__auto___33826]));

var G__33827 = (i__31937__auto___33826 + (1));
i__31937__auto___33826 = G__33827;
continue;
} else {
}
break;
}

var G__33824 = args33822.length;
switch (G__33824) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33822.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args33829 = [];
var len__31936__auto___33832 = arguments.length;
var i__31937__auto___33833 = (0);
while(true){
if((i__31937__auto___33833 < len__31936__auto___33832)){
args33829.push((arguments[i__31937__auto___33833]));

var G__33834 = (i__31937__auto___33833 + (1));
i__31937__auto___33833 = G__33834;
continue;
} else {
}
break;
}

var G__33831 = args33829.length;
switch (G__33831) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33829.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if in the React render phase.
 */
om.core.rendering_QMARK_ = (function om$core$rendering_QMARK_(){
return om.core._STAR_read_enabled_STAR_ === true;
});

//# sourceMappingURL=core.js.map?rel=1471840463280